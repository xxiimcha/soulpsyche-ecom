"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For navigation
import axios from "axios";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  CreditCard,
  Users,
  ClipboardList,
  User,
  DollarSign,
  Tag,
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
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "@/components/ui/dialog"; // Adjust the path as needed
import { Input } from "@/components/ui/input"; // Import Input component
import { use } from "react"; // Import `use` for unwrapping promises

interface OrderItem {
  id: string;
  productName: string;
  variantSize: string;
  quantity: number;
  price: number;
  imageUrl: string; // Include image URL
}

interface OrderDetails {
  id: string;
  user: string;
  totalAmount: number;
  orderStatus: string;
  items: OrderItem[];
  paymentDetails: { payment_method: string; amount_paid: number }[];
}

const sidebarItems = [
  { icon: LayoutDashboard, name: "Dashboard", href: "/admin" },
  { icon: Package, name: "Inventory", href: "/admin/inventory" },
  { icon: ShoppingCart, name: "Orders", href: "/admin/orders" },
  { icon: Users, name: "Customers", href: "/admin/customers" },
  { icon: CreditCard, name: "Payment Methods", href: "/admin/payment-methods" },
];

export default function OrderDetailsPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = use(paramsPromise); // Unwrap params
  const router = useRouter();
  const { id } = params; // Destructure `id` from unwrapped `params`
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courierName, setCourierName] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");

  useEffect(() => {
    if (id) {
      fetchOrderDetails(id);
    } else {
      setError("Invalid order ID. Please check the URL.");
    }
  }, [id]);

  const fetchOrderDetails = async (orderId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/orders/${orderId}`);
      const data = response.data;

      const formattedOrder = {
        id: data.id,
        user: data.User?.username || "N/A",
        totalAmount: data.total_amount,
        orderStatus: data.order_status,
        items: data.OrderItem.map((item: any) => ({
          id: item.id,
          productName: item.Product?.name || "Unknown Product",
          variantSize: item.ProductVariantSize?.size || "Unknown Size",
          quantity: item.quantity,
          price: item.price,
          imageUrl: item.Product?.image || "/placeholder.jpg", // Placeholder image if no URL
        })),
        paymentDetails: data.PaymentDetail.map((payment: any) => ({
          payment_method: payment.payment_method,
          amount_paid: payment.amount_paid,
        })),
      };

      setOrder(formattedOrder);
    } catch (error) {
      setError("Failed to fetch order details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const confirmOrder = async () => {
    if (!order) return;

    try {
      const response = await axios.patch(`/api/orders/order-confirm/${order.id}`);

      if (response.status === 200) {
        setOrder({ ...order, orderStatus: "processing" });
        alert("Order has been confirmed, and stock has been updated!");
      } else {
        alert(`Failed to confirm the order: ${response.data.error}`);
      }
    } catch (error) {
      console.error("Error confirming the order:", error);
      alert("An error occurred while confirming the order. Please try again.");
    }
  };

  const handleHandToCourier = async () => {
    if (!order || !courierName || !trackingNumber) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.patch(`/api/orders/${order.id}/hand-to-courier`, {
        courierName,
        trackingNumber,
      });

      if (response.status === 200) {
        setOrder({ ...order, orderStatus: "shipped" });
        alert("Order has been handed to the courier!");
        setIsModalOpen(false); // Close the modal
      } else {
        alert(`Failed to update the order: ${response.data.error}`);
      }
    } catch (error) {
      console.error("Error handing order to courier:", error);
      alert("An error occurred. Please try again.");
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
                  <a
                    href={item.href}
                    className="p-4 hover:bg-gray-700 flex justify-center"
                  >
                    <item.icon className="h-6 w-6" />
                  </a>
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
          <h1 className="text-3xl font-semibold mb-6 text-gray-700">
            Order Summary
          </h1>

          {loading ? (
            <p>Loading order details...</p>
          ) : error ? (
            <div>
              <p className="text-red-600">{error}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => router.push("/admin/orders")}
              >
                Back to Orders
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Order Info */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex items-center space-x-4">
                  <ClipboardList className="h-8 w-8 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="text-lg font-semibold text-gray-700">
                      {order?.id}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <User className="h-8 w-8 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Customer</p>
                    <p className="text-lg font-semibold text-gray-700">
                      {order?.user}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <DollarSign className="h-8 w-8 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="text-lg font-semibold text-gray-700">
                      ₱{order?.totalAmount.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Tag className="h-8 w-8 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="text-lg font-semibold text-gray-700">
                      {order?.orderStatus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Items
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-50 rounded-lg shadow-md">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-600">Image</th>
                      <th className="px-4 py-2 text-left text-gray-600">Product</th>
                      <th className="px-4 py-2 text-left text-gray-600">Size</th>
                      <th className="px-4 py-2 text-right text-gray-600">Quantity</th>
                      <th className="px-4 py-2 text-right text-gray-600">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.items.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="px-4 py-2">
                          <Image
                            src={item.imageUrl}
                            alt={item.productName}
                            className="w-16 h-16 object-cover rounded-md"
                            width={64}
                            height={64}
                          />
                        </td>
                        <td className="px-4 py-2">{item.productName}</td>
                        <td className="px-4 py-2">{item.variantSize}</td>
                        <td className="px-4 py-2 text-right">{item.quantity}</td>
                        <td className="px-4 py-2 text-right">
                          ₱{item.price.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Payment Details */}
              <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
                Payment Details
              </h3>
              <div className="space-y-4">
                {order?.paymentDetails.map((payment, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
                  >
                    <p>{payment.payment_method}</p>
                    <p>₱{payment.amount_paid.toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-6">
                {/* Confirm Order Button */}
                {order?.orderStatus === "pending" && (
                  <Button
                    variant="default"
                    className="flex items-center space-x-2"
                    onClick={confirmOrder}
                  >
                    <span>Confirm Order</span>
                  </Button>
                )}

                {/* Hand to Courier Button */}
                {order?.orderStatus === "processing" && (
                  <Button
                    variant="default"
                    className="flex items-center space-x-2"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span>Hand to Courier</span>
                  </Button>
                )}

                {/* Back to Orders Button */}
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                  onClick={() => router.push("/admin/orders")}
                >
                  <span>Back to Orders</span>
                </Button>
              </div>

              {/* Hand to Courier Modal */}
              {isModalOpen && (
                <Dialog open={isModalOpen}>
                  <DialogOverlay onClick={() => setIsModalOpen(false)} />
                  <DialogContent>
                    <DialogTitle>Hand to Courier</DialogTitle>
                    <div className="space-y-4 mt-4">
                      <Input
                        placeholder="Courier Name"
                        value={courierName}
                        onChange={(e) => setCourierName(e.target.value)}
                      />
                      <Input
                        placeholder="Tracking Number"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-end space-x-4 mt-6">
                      <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="default" onClick={handleHandToCourier}>
                        Submit
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
