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
  variants: {
    color: string;
    sizes: { size: string; stock: number; status: string }[];
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
  const [categories, setCategories] = useState<Category[]>([]); // State to store categories
  const [isModalOpen, setModalOpen] = useState(false);
  const [isViewModalOpen, setViewModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "", // The category will now be selected from the dropdown
    price: "",
    stock: "In Stock",
    variant: "",
  });
  const [viewProduct, setViewProduct] = useState<InventoryItem | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Fetch inventory and categories on page load
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productResponse, categoryResponse] = await Promise.all([
          axios.get("/api/products"),
          axios.get("/api/categories"),
        ]);
        setInventory(productResponse.data.products || []);
        setCategories(categoryResponse.data.categories || []); // Set categories
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle Save Product
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
        category: { id: newProduct.category }, // Use category ID from the dropdown
        variants: [
          {
            color: newProduct.variant.split("/")[1]?.trim() || "Default Color",
            sizes: [
              {
                size: newProduct.variant.split("/")[0]?.trim() || "Default Size",
                stock: newProduct.stock === "In Stock" ? 10 : 0,
                status: newProduct.stock,
              },
            ],
          },
        ],
      };

      if (editIndex !== null) {
        const response = await axios.put(`/api/products/${inventory[editIndex].id}`, productPayload);
        const updatedInventory = [...inventory];
        updatedInventory[editIndex] = response.data.product;
        setInventory(updatedInventory);
      } else {
        const response = await axios.post("/api/products/add", productPayload);
        setInventory([...inventory, response.data.product]);
      }

      resetForm();
      setModalOpen(false);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // Handle Edit Product
  const handleEdit = (index: number) => {
    const product = inventory[index];
    setEditIndex(index);
    setNewProduct({
      name: product.name,
      category: product.category.id, // Set category ID when editing
      price: product.price.toString(),
      stock: product.variants[0]?.sizes[0]?.status || "In Stock",
      variant: `${product.variants[0]?.sizes[0]?.size || "Default Size"}/${
        product.variants[0]?.color || "Default Color"
      }`,
    });
    setModalOpen(true);
  };

  // Reset Form
  const resetForm = () => {
    setNewProduct({
      name: "",
      category: "",
      price: "",
      stock: "In Stock",
      variant: "",
    });
    setEditIndex(null);
  };

  // Authorization check
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
            <Button onClick={() => setModalOpen(true)} className="flex items-center">
              <Plus className="mr-2" /> Add Product
            </Button>
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.category ? item.category.name : "No category"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.variants.length > 0 ? item.variants[0].sizes[0].status : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleEdit(index)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                        No products found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
