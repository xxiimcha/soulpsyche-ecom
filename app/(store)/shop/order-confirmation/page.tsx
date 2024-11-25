"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import axios from "axios";

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const items = JSON.parse(searchParams.get("items") || "[]");
  const subtotal = items.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const total = subtotal + shipping;

  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [paymentProof, setPaymentProof] = useState<File | null>(null);

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);

    // Set payment details based on method
    switch (method) {
      case "GCASH":
        setPaymentDetails("Send payment to GCash #09123456789");
        break;
      case "Maya":
        setPaymentDetails("Send payment to Maya #09123456789");
        break;
      case "BPI":
        setPaymentDetails("Transfer to BPI Account: 1234-5678-90");
        break;
      default:
        setPaymentDetails("");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPaymentProof(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!paymentProof) {
      alert("Please upload a payment proof before submitting!");
      return;
    }

    // Upload payment proof to Cloudinary
    const formData = new FormData();
    formData.append("file", paymentProof);
    formData.append("upload_preset", "product_images_upload");

    try {
      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/your_cloudinary_name/image/upload",
        formData
      );

      const paymentProofUrl = cloudinaryResponse.data.secure_url;

      const orderData = {
        items,
        subtotal,
        shipping,
        total,
        shippingAddress,
        paymentMethod,
        paymentProof: paymentProofUrl,
      };

      console.log("Order Submitted:", orderData);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error uploading payment proof:", error);
      alert("Failed to upload payment proof. Please try again.");
    }
  };

  return (
    <main className="flex-1">
      <section className="w-full py-8 md:py-14 lg:py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl sm:text-5xl mb-12 font-bold tracking-tighter">
            Confirm Your Order
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item: any) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 border-b pb-4"
                  >
                    <Image
                      src={item.image || "/placeholder-dark-image.png"}
                      alt={item.productName}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg">
                        {item.productName}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Color: {item.color}
                      </p>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                      <p className="font-semibold mt-2">
                        ₱{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-2 mt-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">₱{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-800">₱{shipping.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₱{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Shipping & Payment Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <textarea
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Enter your full shipping address"
                className="w-full border border-gray-300 rounded-md p-2 mb-6 shadow-sm focus:ring focus:ring-indigo-500"
                rows={4}
              />

              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <select
                value={paymentMethod}
                onChange={(e) => handlePaymentMethodChange(e.target.value)}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mb-6"
              >
                <option value="" disabled>
                  Select a payment method
                </option>
                <option value="GCASH">GCash</option>
                <option value="Maya">Maya</option>
                <option value="BPI">BPI Bank Transfer</option>
              </select>

              {paymentDetails && (
                <div className="mb-6 bg-gray-50 p-4 rounded-md">
                  <p className="text-gray-700">{paymentDetails}</p>
                </div>
              )}

              <h2 className="text-xl font-semibold mb-4">Upload Payment Proof</h2>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
              />

              <Button
                className="w-full mt-6"
                size="lg"
                onClick={handleSubmit}
                disabled={!shippingAddress || !paymentMethod || !paymentProof}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
