"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  CreditCard,
  Users,
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
import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface Order {
  id: string;
  user_id: string;
  user_name: string;
  total_amount: number;
  order_status: string;
  items?: { name: string; quantity: number; price: number }[];
}

const sidebarItems = [
  { icon: LayoutDashboard, name: "Dashboard", href: "/admin" },
  { icon: Package, name: "Inventory", href: "/admin/inventory" },
  { icon: ShoppingCart, name: "Orders", href: "/admin/orders" },
  { icon: Users, name: "Customers", href: "/admin/customers" },
  { icon: CreditCard, name: "Payment Methods", href: "/admin/payment-methods" },
];

export default function OrdersPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Fetch orders data from API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/orders");
        setOrders(response.data); // Ensure your API returns data matching the `Order` interface
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleViewOrder = async (orderId: string) => {
    try {
      const response = await axios.get(`/api/orders/${orderId}`);
      setSelectedOrder(response.data); // Assuming valid response structure
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error fetching order details:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };  

  const handleCloseDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  // Authorization check for admin
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
            <h1 className="text-3xl font-semibold text-gray-800">Orders</h1>
          </div>

          {/* Orders Table */}
          {loading ? (
            <p>Loading orders...</p>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.length > 0 ? (
                    orders.map((order, index) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.user_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₱{order.total_amount.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.order_status}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-2">
                          <Link href={`/admin/orders/${order.id}`}>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                        No orders found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Dialog for Viewing Order Details */}
          <dialog
            ref={dialogRef}
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 rounded-lg max-w-md mx-auto"
          >
            {selectedOrder && (
              <div className="bg-white rounded-lg p-6 w-full">
                <h2 className="text-lg font-semibold mb-4">Order Details</h2>
                <p>
                  <strong>Order ID:</strong> {selectedOrder.id}
                </p>
                <p>
                  <strong>Customer:</strong> {selectedOrder.user_id}
                </p>
                <p>
                  <strong>Total:</strong> ₱{selectedOrder.total_amount.toFixed(2)}
                </p>
                <p>
                  <strong>Status:</strong> {selectedOrder.order_status}
                </p>
                <h3 className="font-semibold text-lg mt-4">Items:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {selectedOrder.items?.map((item, index) => (
                    <li key={index}>
                      {item.name} - {item.quantity} x ₱{item.price.toFixed(2)}
                    </li>
                  )) || <p>No items in this order.</p>}
                </ul>
                <Button variant="outline" className="mt-4" onClick={handleCloseDialog}>
                  Close
                </Button>
              </div>
            )}
          </dialog>
        </div>
      </main>
    </div>
  );
}
