"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { use } from "react";  // Import `use` to unwrap the Promise
import { LayoutDashboard, Package, ShoppingCart, CreditCard, Users } from "lucide-react";
import SoulePsycleLogo from "@/public/logo.jpg"; // Import logo image

interface Order {
  id: string;
  total_amount: number;
  order_status: string;
  createdAt: string;
}

interface Customer {
  id: string;
  username: string;
  email: string;
  orders: Order[] | null;
}

const sidebarItems = [
  { icon: LayoutDashboard, name: "Dashboard", href: "/admin" },
  { icon: Package, name: "Inventory", href: "/admin/inventory" },
  { icon: ShoppingCart, name: "Orders", href: "/admin/orders" },
  { icon: Users, name: "Customers", href: "/admin/customers" },
  { icon: CreditCard, name: "Payment Methods", href: "/admin/payment-methods" },
];

export default function CustomerDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const customerParams = use(params); // Unwrap the params promise
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch customer data including their order history
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`/api/customers/${customerParams.id}`);
        setCustomer(response.data);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [customerParams.id]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-16 bg-gray-800 text-white fixed top-0 left-0 h-full">
        <nav className="flex flex-col h-full">
          <div className="flex items-center justify-center mt-4">
            <Image src={SoulePsycleLogo} alt="SoulePsycle Logo" className="w-12 h-12 rounded-md" />
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
      <main className="flex-1 overflow-x-hidden overflow-y-auto ml-16 p-6">
        <div className="container mx-auto px-6 py-8 max-w-7xl">
          {loading ? (
            <p className="text-center">Loading customer details...</p>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">{customer?.username}</h1>
                <p className="text-lg text-gray-600">Email: {customer?.email}</p>
              </div>

              {/* Order History */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Order History</h2>
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Order ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase">Created At</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {customer?.orders && customer.orders.length > 0 ? (
                        customer.orders.map((order) => (
                          <tr key={order.id}>
                            <td className="px-6 py-4 text-sm text-gray-500">{order.id}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">₱{order.total_amount}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{order.order_status}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                            No orders found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <Link href="/admin/customers">
                <Button variant="outline" className="mt-4">Back to Customers</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
