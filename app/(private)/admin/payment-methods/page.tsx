"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Trash, Plus } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import axios from "axios";

interface PaymentMethod {
  id: string;
  method_name: string;
  description: string;
  account_name: string;
  account_number: string;
  qr_code: string;
  is_active: boolean;
}

export default function PaymentMethodsPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newMethod, setNewMethod] = useState<Partial<PaymentMethod>>({
    method_name: "",
    description: "",
    account_name: "",
    account_number: "",
    qr_code: "",
    is_active: true,
  });
  const [uploading, setUploading] = useState(false);

  const fetchPaymentMethods = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/payment-methods");
      setPaymentMethods(response.data);
    } catch (error) {
      console.error("Error fetching payment methods:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  const handleAddPaymentMethod = async () => {
    if (!newMethod.method_name || !newMethod.description) {
      alert("Please fill out all required fields.");
      return;
    }
  
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/payment-methods",
        {
          method_name: newMethod.method_name,
          description: newMethod.description,
          account_name: newMethod.account_name,
          account_number: newMethod.account_number,
          qr_code: newMethod.qr_code,
          is_active: newMethod.is_active,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setPaymentMethods((prev) => [...prev, response.data]);
      setNewMethod({
        method_name: "",
        description: "",
        account_name: "",
        account_number: "",
        qr_code: "",
        is_active: true,
      });
      setModalOpen(false);
    } catch (error) {
      console.error("Error adding payment method:", error);
    } finally {
      setLoading(false);
    }
  };  

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.delete(`/api/payment-methods/${id}`);
      if (response.status === 200) {
        setPaymentMethods((prev) => prev.filter((method) => method.id !== id));
      }
    } catch (error) {
      console.error("Error deleting payment method:", error);
    } finally {
      setLoading(false);
    }
  };  

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "so8qqjk3"); // Unsigned preset from Cloudinary

    setUploading(true);
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwa4rcjan/image/upload",
        formData
      );
      setNewMethod((prev) => ({
        ...prev,
        qr_code: response.data.secure_url, // Save the Cloudinary URL
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
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
      <Sidebar />

      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-semibold text-gray-800">Payment Methods</h1>
            <Button onClick={() => setModalOpen(true)} className="flex items-center">
              <Plus className="mr-2" /> Add Payment Method
            </Button>
          </div>

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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{method.method_name}</td>
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

          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-semibold mb-4">Add Payment Method</h2>
                <form>
                  <input
                    type="text"
                    placeholder="Method Name"
                    className="w-full mb-4 border rounded-md p-2"
                    value={newMethod.method_name}
                    onChange={(e) => setNewMethod((prev) => ({ ...prev, method_name: e.target.value }))}
                  />
                  <textarea
                    placeholder="Description"
                    className="w-full mb-4 border rounded-md p-2"
                    value={newMethod.description}
                    onChange={(e) => setNewMethod((prev) => ({ ...prev, description: e.target.value }))}
                  ></textarea>
                  <input
                    type="text"
                    placeholder="Account Name"
                    className="w-full mb-4 border rounded-md p-2"
                    value={newMethod.account_name}
                    onChange={(e) => setNewMethod((prev) => ({ ...prev, account_name: e.target.value }))}
                  />
                  <input
                    type="text"
                    placeholder="Account Number"
                    className="w-full mb-4 border rounded-md p-2"
                    value={newMethod.account_number}
                    onChange={(e) => setNewMethod((prev) => ({ ...prev, account_number: e.target.value }))}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full mb-4"
                    onChange={(e) => e.target.files && handleImageUpload(e.target.files[0])}
                  />
                  {uploading && <p>Uploading QR Code...</p>}
                  <label className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={newMethod.is_active}
                      onChange={(e) => setNewMethod((prev) => ({ ...prev, is_active: e.target.checked }))}
                    />
                    Active
                  </label>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddPaymentMethod}>Save</Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
