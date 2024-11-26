"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Plus,
  CreditCard,
  Eye,
  Edit,
  Trash,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import SoulePsycleLogo from "@/public/logo.jpg";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import axios from "axios";

// Define the inventory item type
interface InventoryItem {
  id: string;
  name: string;
  category: { id: string; name: string; slug: string };
  price: number;
  description?: string; // Optional field
  sku?: string; // Optional field
  variants: {
    color: string;
    sizes: { size: string; stock: number; status: string }[];
  }[];
}

interface ApiProduct {
  id: string;
  name: string;
  Category?: { id: string; name: string };
  price: number;
  description?: string; // Add this line to include the description
  ProductVariantColor?: {
    color: string;
    ProductVariantSize?: {
      size: string;
      stock: number;
      status: string;
    }[];
  }[];
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

// Sidebar items configuration with the correct icons
const sidebarItems = [
  { icon: LayoutDashboard, name: "Dashboard", href: "/admin" },
  { icon: Package, name: "Inventory", href: "/admin/inventory" },
  { icon: ShoppingCart, name: "Orders", href: "/admin/orders" },
  { icon: Users, name: "Customers", href: "/admin/customers" },
  { icon: CreditCard, name: "Payment Methods", href: "/admin/payment-methods" },  // New sidebar item with the correct icon
];

export default function InventoryPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  
  // State management
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    sku: "",
    stock: "Active",
    variants: [
      {
        color: "",
        sizes: [
          { size: "Default Size", stock: 0, status: "Active" },
        ],
      },
    ],
  });  


  const [viewProduct, setViewProduct] = useState<InventoryItem | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Update the fetchData function
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const productResponse = await axios.get("/api/products");
  
        const products: ApiProduct[] = productResponse.data;
  
        // Map products and ensure sizes are correctly processed
        const mappedInventory = products.map((item) => ({
          id: item.id,
          name: item.name,
          category: item.Category
            ? { id: item.Category.id, name: item.Category.name, slug: "" }
            : { id: "", name: "Uncategorized", slug: "" },
          price: item.price,
          description: item.description || "N/A",
          variants: item.ProductVariantColor
            ? item.ProductVariantColor.map((variant) => ({
                color: variant.color || "N/A",
                sizes: variant.ProductVariantSize
                  ? variant.ProductVariantSize.map((size) => ({
                      size: size.size || "N/A",
                      stock: size.stock || 0,
                      status: size.status || "Unknown",
                    }))
                  : [], // Ensure empty array if no sizes
              }))
            : [], // Ensure empty array if no variants
        }));
  
        setInventory(mappedInventory);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data); // Set categories directly
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  
    fetchCategories();
  }, []);  

  // Update handleSaveProduct to handle edits
  const handleSaveProduct = async () => {
    try {
      if (!newProduct.name || !newProduct.category || !newProduct.price) {
        alert("Please fill out all required fields.");
        return;
      }

      const slug = newProduct.name.toLowerCase().replace(/ /g, "-");

      const productPayload = {
        name: newProduct.name,
        slug,
        price: parseFloat(newProduct.price),
        category_id: newProduct.category,
        description: newProduct.description,
        variants: newProduct.variants,
      };

      if (editIndex !== null) {
        // Update existing product
        const response = await axios.put(`/api/products/update/${inventory[editIndex].id}`, productPayload);
        
        // Update the local state
        const updatedInventory = [...inventory];
        updatedInventory[editIndex] = {
          ...updatedInventory[editIndex],
          ...response.data.product,
        };
        setInventory(updatedInventory);

        alert("Product updated successfully!");
      } else {
        // Add new product
        const response = await axios.post("/api/products/add", productPayload);
        setInventory([...inventory, response.data.product]);
        alert("Product added successfully!");
      }

      // Reset the form and close the modal
      setNewProduct({
        name: "",
        category: "",
        price: "",
        description: "",
        sku: "",
        stock: "Active",
        variants: [
          { color: "", sizes: [{ size: "", stock: 0, status: "Active" }] },
        ],
      });
      setEditIndex(null);
      setModalOpen(false);
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save the product. Please try again.");
    }
  };

  // Handle View Details
  const handleView = (item: InventoryItem) => {
    setViewProduct(item);
    setViewModalOpen(true);
  };

  const isAdmin = user?.emailAddresses[0]?.emailAddress === "soulepsycle1201@gmail.com";

  if (!isAdmin) {
    return (
      <main className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <p>You are not authorized to access this page.</p>
          <Button variant="default" asChild>
            <Link href="/">Go back to home page</Link>
          </Button>
        </div>
      </main>
    );
  }

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-16 bg-gray-800 text-white">
        <nav className="flex flex-col h-full">
          <div className="flex items-center justify-center mt-2">
            <Image src={SoulePsycleLogo} alt="SoulePsycle-Logo" className="w-12 h-12 rounded-md" />
          </div>
          <TooltipProvider>
            {sidebarItems.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link href={item.href} className="p-4 hover:bg-gray-700 flex justify-center">
                    <item.icon className="h-6 w-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </aside>

      {/* Main Content */}
      
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-semibold text-gray-800">Inventory</h1>
            <Link href="inventory/add-product">
              <Button className="flex items-center">
                <Plus className="mr-2" /> Add Product
              </Button>
            </Link>
          </div>

          {/* Inventory Table */}
          {loading ? (
            <p>Loading inventory...</p>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {inventory.length > 0 ? (
                    inventory.map((item, index) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₱{new Intl.NumberFormat('en-PH', { minimumFractionDigits: 2 }).format(item.price)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.variants?.reduce(
                            (acc, variant) =>
                              acc +
                              (variant.sizes?.reduce((total, size) => total + (size.stock || 0), 0) || 0),
                            0
                          ) || 0}{" "}
                          units
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleView(item)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Link href={`inventory/edit-product/${item.id}`}>Edit</Link>
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                        No products found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Add Product Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Product</h2>
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Product name"
                        required
                      />
                    </div>

                    {/* Price */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Price</label>
                      <input
                        type="number"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Product price"
                        required
                      />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Category</label>
                      <select
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      >
                        <option value="" disabled>
                          Select category
                        </option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Variants Section */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Variants</label>
                      {newProduct.variants.map((variant, variantIndex) => (
                        <div key={variantIndex} className="space-y-4 border rounded-md p-4 mt-2">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Color</label>
                            <input
                              type="text"
                              value={variant.color}
                              onChange={(e) => {
                                const updatedVariants = [...newProduct.variants];
                                updatedVariants[variantIndex].color = e.target.value;
                                setNewProduct({ ...newProduct, variants: updatedVariants });
                              }}
                              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="Variant color"
                              required
                            />
                          </div>

                          {/* Sizes for the Variant */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Sizes</label>
                            {variant.sizes.map((size, sizeIndex) => (
                              <div key={sizeIndex} className="flex items-center space-x-4 mt-2">
                                <input
                                  type="text"
                                  value={size.size}
                                  onChange={(e) => {
                                    const updatedVariants = [...newProduct.variants];
                                    updatedVariants[variantIndex].sizes[sizeIndex].size = e.target.value;
                                    setNewProduct({ ...newProduct, variants: updatedVariants });
                                  }}
                                  className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                  placeholder="Size"
                                  required
                                />
                                <input
                                  type="number"
                                  value={size.stock}
                                  onChange={(e) => {
                                    const updatedVariants = [...newProduct.variants];
                                    updatedVariants[variantIndex].sizes[sizeIndex].stock = parseInt(e.target.value, 10);
                                    setNewProduct({ ...newProduct, variants: updatedVariants });
                                  }}
                                  className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                  placeholder="Stock"
                                  required
                                />
                                <select
                                  value={size.status}
                                  onChange={(e) => {
                                    const updatedVariants = [...newProduct.variants];
                                    updatedVariants[variantIndex].sizes[sizeIndex].status = e.target.value;
                                    setNewProduct({ ...newProduct, variants: updatedVariants });
                                  }}
                                  className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                  <option value="Active">Active</option>
                                  <option value="Out of Stock">Out of Stock</option>
                                </select>
                                <Button
                                  variant="outline"
                                  className="text-red-500"
                                  onClick={() => {
                                    const updatedVariants = [...newProduct.variants];
                                    updatedVariants[variantIndex].sizes.splice(sizeIndex, 1);
                                    setNewProduct({ ...newProduct, variants: updatedVariants });
                                  }}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}

                            {/* Add Size Button */}
                            <Button
                              variant="outline"
                              className="mt-2"
                              onClick={() => {
                                const updatedVariants = [...newProduct.variants];
                                updatedVariants[variantIndex].sizes.push({ size: "", stock: 0, status: "Active" });
                                setNewProduct({ ...newProduct, variants: updatedVariants });
                              }}
                            >
                              Add Size
                            </Button>
                          </div>
                        </div>
                      ))}

                      {/* Add Variant Button */}
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                          const updatedVariants = [...newProduct.variants];
                          updatedVariants.push({ color: "", sizes: [{ size: "", stock: 0, status: "Active" }] });
                          setNewProduct({ ...newProduct, variants: updatedVariants });
                        }}
                      >
                        Add Variant
                      </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-4 mt-4">
                      <Button variant="outline" onClick={() => setModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="default" onClick={handleSaveProduct}>
                        Save
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {isViewModalOpen && viewProduct && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    View Product Details
                  </h2>
                  <div className="space-y-4">
                    {/* Product Details */}
                    <div>
                      <p className="font-bold">Name:</p>
                      <p>{viewProduct.name}</p>
                    </div>
                    <div>
                      <p className="font-bold">Category:</p>
                      <p>{viewProduct.category.name}</p>
                    </div>
                    <div>
                      <p className="font-bold">Price:</p>
                      <p>
                        ₱{new Intl.NumberFormat("en-PH", { minimumFractionDigits: 2 }).format(viewProduct.price)}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold">Description:</p>
                      <p>{viewProduct.description || "N/A"}</p>
                    </div>

                    {/* Variants Section */}<div>
                    <p className="font-bold">Variants:</p>
                    {viewProduct.variants.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-2 text-left">Color</th>
                              <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                              <th className="border border-gray-300 px-4 py-2 text-left">Stock</th>
                              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {viewProduct.variants.map((variant, variantIndex) => (
                              variant.sizes.length > 0 ? (
                                variant.sizes.map((size, sizeIndex) => (
                                  <tr key={`${variantIndex}-${sizeIndex}`} className="odd:bg-white even:bg-gray-50">
                                    {sizeIndex === 0 && (
                                      <td
                                        className="border border-gray-300 px-4 py-2 text-left align-top"
                                        rowSpan={variant.sizes.length}
                                      >
                                        {variant.color}
                                      </td>
                                    )}
                                    <td className="border border-gray-300 px-4 py-2 text-left">{size.size}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">{size.stock}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">{size.status}</td>
                                  </tr>
                                ))
                              ) : (
                                <tr key={variantIndex} className="odd:bg-white even:bg-gray-50">
                                  <td className="border border-gray-300 px-4 py-2 text-left">{variant.color}</td>
                                  <td colSpan={3} className="border border-gray-300 px-4 py-2 text-left">
                                    No sizes available
                                  </td>
                                </tr>
                              )
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p>No variants available.</p>
                    )}
                  </div>
                  </div>
                  <div className="flex justify-end gap-4 mt-6">
                    <Button variant="outline" onClick={() => setViewModalOpen(false)}>
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            )}
        </div>
      </main>
    </div>

    
  );
}
