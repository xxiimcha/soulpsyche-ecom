"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  CreditCard,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import SoulePsycleLogo from "@/public/logo.jpg";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import axios from "axios";

const AVAILABLE_SIZES = ["S", "M", "L", "XL", "XXL"];
interface Category {
  id: string;
  name: string;
  slug: string;
}

const sidebarItems = [
  { icon: LayoutDashboard, name: "Dashboard", href: "/admin" },
  { icon: Package, name: "Inventory", href: "/admin/inventory" },
  { icon: ShoppingCart, name: "Orders", href: "/admin/orders" },
  { icon: Users, name: "Customers", href: "/admin/customers" },
  { icon: CreditCard, name: "Payment Methods", href: "/admin/payment-methods" },
];

const PRODUCT_STATUS = [
  "Active",
  "Inactive",
  "Out of Stock",
  "Discontinued",
  "Pending",
  "Draft",
  "Archived",
];

export default function AddProductPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    sku: "",
    variants: [
      {
        color: "",
        image: "",
        images: [] as string[], // Make sure 'images' is initialized as an empty array
        sizes: [{ size: "", stock: 0, status: "Active" }],
      },
    ],
  });
  

  // Fetch categories on page load
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleVariantImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    variantIndex: number
  ) => {
    const files = e.target.files;
    if (!files) return;
  
    // Create an array to hold the uploaded image URLs (explicitly typed as string[])
    const updatedVariants = [...newProduct.variants];
    const newImages: string[] = [...updatedVariants[variantIndex].images]; // Explicitly define type as string[]
  
    // Loop through each file and upload it
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "so8qqjk3");
  
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dwa4rcjan/image/upload`,
          formData
        );
        newImages.push(response.data.secure_url); // Add the uploaded image URL to the array
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again.");
      }
    }
  
    updatedVariants[variantIndex].images = newImages; // Update the variant with the new images array
    setNewProduct({ ...newProduct, variants: updatedVariants });
  };
  

  const removeVariantImage = (variantIndex: number, imageIndex: number) => {
    const updatedVariants = [...newProduct.variants];
    updatedVariants[variantIndex].images.splice(imageIndex, 1); // Remove the image at the specified index
    setNewProduct({ ...newProduct, variants: updatedVariants });
  };

  const handleSaveProduct = async () => {
    try {
      if (!newProduct.name.trim()) {
        alert("Product name is required.");
        return;
      }
      if (!newProduct.category) {
        alert("Please select a category.");
        return;
      }
      if (isNaN(Number(newProduct.price)) || Number(newProduct.price) <= 0) {
        alert("Please enter a valid price.");
        return;
      }

      const slug = newProduct.name.toLowerCase().replace(/ /g, "-");
      const productPayload = {
        name: newProduct.name,
        slug,
        price: parseFloat(newProduct.price),
        category_id: newProduct.category,
        description: newProduct.description.trim(),
        variants: newProduct.variants,
      };

      setLoading(true);
      await axios.post("/api/products/add", productPayload);

      alert("Product added successfully!");
      window.location.href = "/admin/inventory";
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save the product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-16 bg-gray-800 text-white">
        <nav className="flex flex-col h-full">
          <div className="flex items-center justify-center mt-2">
            <Image
              src={SoulePsycleLogo}
              alt="SoulePsycle-Logo"
              className="w-12 h-12 rounded-md"
            />
          </div>
          <TooltipProvider>
            {sidebarItems.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className="p-4 hover:bg-gray-700 flex justify-center"
                  >
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
    <h1 className="text-3xl font-semibold text-gray-800 mb-4">Add Product</h1>
    <div className="bg-white p-6 rounded-lg shadow">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
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
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Product price"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
            disabled={loading}
          >
            <option value="" disabled>
              {loading ? "Loading categories..." : "Select category"}
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Variants */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Variants</label>
          {newProduct.variants.map((variant, variantIndex) => (
            <div key={variantIndex} className="border rounded-md p-4 mb-6 bg-gray-50">
              {/* Variant Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Variant Color
                </label>
                <input
                  type="text"
                  value={variant.color}
                  onChange={(e) => {
                    const updatedVariants = [...newProduct.variants];
                    updatedVariants[variantIndex].color = e.target.value;
                    setNewProduct({ ...newProduct, variants: updatedVariants });
                  }}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Variant color"
                  required
                />
              </div>

              {/* Variant Images */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Images for Variant
                </label>
                <div className="border border-gray-300 rounded-lg p-4 mt-2 bg-white">
                  <input
                    type="file"
                    multiple
                    onChange={(e) => handleVariantImageUpload(e, variantIndex)}
                    className="hidden"
                    id={`file-upload-${variantIndex}`}
                  />
                  <label
                    htmlFor={`file-upload-${variantIndex}`}
                    className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-32 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50"
                  >
                    <p className="text-sm text-gray-500">
                      Drag and drop or click to upload images
                    </p>
                  </label>

                  {/* Image Preview */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                    {variant.images.length > 0 ? (
                      variant.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden shadow-sm border"
                        >
                          <Image
                            src={image}
                            alt={`Variant Image ${imageIndex + 1}`}
                            layout="fill"
                            className="object-cover"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              removeVariantImage(variantIndex, imageIndex)
                            }
                            className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 shadow hover:bg-red-700"
                          >
                            ✕
                          </button>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400 col-span-full">
                        No images uploaded yet.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Variant Sizes */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Sizes and Stock
                </label>
                <table className="table-auto w-full mt-4 border">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border">Size</th>
                      <th className="px-4 py-2 border">Stock</th>
                      <th className="px-4 py-2 border">Status</th>
                      <th className="px-4 py-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variant.sizes.map((size, sizeIndex) => (
                      <tr key={sizeIndex}>
                        <td className="px-4 py-2 border">
                          <select
                            value={size.size}
                            onChange={(e) => {
                              const updatedVariants = [...newProduct.variants];
                              updatedVariants[variantIndex].sizes[sizeIndex].size =
                                e.target.value;
                              setNewProduct({ ...newProduct, variants: updatedVariants });
                            }}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          >
                            <option value="">Select Size</option>
                            {AVAILABLE_SIZES.filter(
                              (availableSize) =>
                                !variant.sizes.some(
                                  (selectedSize, selectedIndex) =>
                                    selectedIndex !== sizeIndex &&
                                    selectedSize.size === availableSize
                                )
                            ).map((availableSize) => (
                              <option key={availableSize} value={availableSize}>
                                {availableSize}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-2 border">
                          <input
                            type="number"
                            value={size.stock || ""}
                            onChange={(e) => {
                              const updatedVariants = [...newProduct.variants];
                              updatedVariants[variantIndex].sizes[sizeIndex].stock =
                                parseInt(e.target.value, 10) || 0;
                              setNewProduct({ ...newProduct, variants: updatedVariants });
                            }}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Stock"
                            required
                          />
                        </td>
                        <td className="px-4 py-2 border">
                          <select
                            value={size.status}
                            onChange={(e) => {
                              const updatedVariants = [...newProduct.variants];
                              updatedVariants[variantIndex].sizes[sizeIndex].status =
                                e.target.value;
                              setNewProduct({ ...newProduct, variants: updatedVariants });
                            }}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                          >
                            {PRODUCT_STATUS.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-2 border">
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
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Add Variant Button */}
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setNewProduct({
                ...newProduct,
                variants: [
                  ...newProduct.variants,
                  {
                    color: "",
                    image: "",
                    images: [],
                    sizes: [{ size: "", stock: 0, status: "Active" }],
                  },
                ],
              });
            }}
          >
            Add Variant
          </Button>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <Link href="/admin/inventory">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Button
            variant="default"
            onClick={handleSaveProduct}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </div>
  </div>
</main>

    </div>
  );
}
