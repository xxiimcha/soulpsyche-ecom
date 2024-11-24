"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Trash, Plus } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
}

export default function PaymentMethodsPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  // Static data for payment methods
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "1",
      name: "GCash",
      description: "Popular payment method in the Philippines via mobile app.",
    },
    {
      id: "2",
      name: "Maya",
      description: "Digital payment system that integrates with local banks.",
    },
    {
      id: "3",
      name: "BPI",
      description: "Bank payment option from the Bank of the Philippine Islands.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  // Handle adding a new payment method
  const handleAddPaymentMethod = () => {
    // Here we can implement the logic to show a modal or form to add a payment method.
    // For now, just a simple console log to simulate adding a new method.
    console.log("Add new payment method");
  };

  // Handle delete payment method
  const handleDelete = (id: string) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
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
      <Sidebar /> {/* Using Sidebar component */}

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-semibold text-gray-800">Payment Methods</h1>
            <Button onClick={handleAddPaymentMethod} className="flex items-center">
              <Plus className="mr-2" /> Add Payment Method
            </Button>
          </div>

          {/* Payment Methods Table */}
          {loading ? (
            <p>Loading payment methods...</p>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paymentMethods.length > 0 ? (
                    paymentMethods.map((method) => (
                      <tr key={method.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{method.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{method.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{method.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-2">
                          <Button variant="outline" size="sm">
                            <CreditCard className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDelete(method.id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                        No payment methods found
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
