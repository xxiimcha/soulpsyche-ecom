"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trash, Plus } from "lucide-react";
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
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null);
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
      const response = await axios.post("/api/payment-methods", newMethod);
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
    const confirmDelete = confirm("Are you sure you want to delete this payment method?");
    if (!confirmDelete) return;
  
    setLoading(true);
    try {
      const response = await axios.delete(`/api/payment-methods?id=${id}`);
      if (response.status === 200) {
        setPaymentMethods((prev) => prev.filter((method) => method.id !== id));
        alert("Payment method deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting payment method:", error);
      alert("Failed to delete payment method.");
    } finally {
      setLoading(false);
    }
  };  

  const handleView = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method);
    setViewModalOpen(true);
  };

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload_qr_code");

    setUploading(true);
    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dwa4rcjan/image/upload", formData);
      setNewMethod((prev) => ({
        ...prev,
        qr_code: response.data.secure_url,
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
                    paymentMethods.map((method, index) => (
                      <tr key={method.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{method.method_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{method.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleView(method)}>
                            View
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
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Payment Method</h2>
                <form className="space-y-4">
                  {/* Method Name */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Method Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter payment method name"
                      className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      value={newMethod.method_name}
                      onChange={(e) => setNewMethod((prev) => ({ ...prev, method_name: e.target.value }))}
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      placeholder="Enter description"
                      className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      value={newMethod.description}
                      onChange={(e) => setNewMethod((prev) => ({ ...prev, description: e.target.value }))}
                    ></textarea>
                  </div>

                  {/* Account Name */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Account Name</label>
                    <input
                      type="text"
                      placeholder="Enter account name"
                      className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      value={newMethod.account_name}
                      onChange={(e) => setNewMethod((prev) => ({ ...prev, account_name: e.target.value }))}
                    />
                  </div>

                  {/* Account Number */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Account Number</label>
                    <input
                      type="text"
                      placeholder="Enter account number"
                      className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      value={newMethod.account_number}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value) && value.length <= 16) {
                          setNewMethod((prev) => ({ ...prev, account_number: value }));
                        }
                      }}
                    />
                    <small className="text-gray-500">Maximum 16 digits allowed.</small>
                  </div>

                  {/* QR Code Upload */}
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Upload QR Code</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full border rounded-md p-2"
                      onChange={(e) => e.target.files && handleImageUpload(e.target.files[0])}
                    />
                    {uploading && <p className="text-sm text-gray-500">Uploading QR Code...</p>}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end gap-4">
                    <Button variant="outline" onClick={() => setModalOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddPaymentMethod}>Save</Button>
                  </div>
                </form>
              </div>
            </div>
          )}

        {viewModalOpen && selectedPaymentMethod && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Method Details</h2>
              <div className="space-y-4">
                {/* Method Name */}
                <div className="flex items-center">
                  <p className="font-semibold text-gray-700 w-1/3">Method Name:</p>
                  <p className="text-gray-900">{selectedPaymentMethod.method_name}</p>
                </div>

                {/* Description */}
                <div className="flex items-center">
                  <p className="font-semibold text-gray-700 w-1/3">Description:</p>
                  <p className="text-gray-900">{selectedPaymentMethod.description}</p>
                </div>

                {/* Account Name */}
                <div className="flex items-center">
                  <p className="font-semibold text-gray-700 w-1/3">Account Name:</p>
                  <p className="text-gray-900">{selectedPaymentMethod.account_name}</p>
                </div>

                {/* Account Number */}
                <div className="flex items-center">
                  <p className="font-semibold text-gray-700 w-1/3">Account Number:</p>
                  <p className="text-gray-900">{selectedPaymentMethod.account_number}</p>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-gray-700 mb-2">QR Code:</p>
                  {selectedPaymentMethod.qr_code ? (
                    <img
                      src={selectedPaymentMethod.qr_code}
                      alt="QR Code"
                      className="w-64 h-auto rounded-md border shadow-lg"
                    />
                  ) : (
                    <p className="text-gray-500">No QR code available</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                  onClick={() => setViewModalOpen(false)}
                >
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
