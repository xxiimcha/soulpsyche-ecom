"use client";

import Link from "next/link";
import { LayoutDashboard, Package, ShoppingCart, Users, CreditCard } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import SoulePsycleLogo from "@/public/logo.jpg";

const sidebarItems = [
  { icon: LayoutDashboard, name: "Dashboard", href: "/admin" },
  { icon: Package, name: "Inventory", href: "/admin/inventory" },
  { icon: ShoppingCart, name: "Orders", href: "/admin/orders" },
  { icon: Users, name: "Customers", href: "/admin/customers" },
  { icon: CreditCard, name: "Payment Methods", href: "/admin/payment-methods" },  // New item for Payment Methods
];

export default function Sidebar() {
  return (
    <aside className="w-16 bg-gray-800 text-white">
      <nav className="flex flex-col h-full">
        <div className="flex items-center justify-center mt-2">
          <Link href="/">
            <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-md" />
          </Link>
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
  );
}
