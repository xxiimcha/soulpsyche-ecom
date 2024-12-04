"use client";

import Link from "next/link";
import { LayoutDashboard, Package, ShoppingCart, Users, CreditCard, TrendingUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import SoulePsycleLogo from "@/public/logo.jpg";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip as RechartsTooltip } from "recharts";

const sidebarItems = [
  { icon: LayoutDashboard, name: "Dashboard", href: "/admin" },
  { icon: Package, name: "Inventory", href: "/admin/inventory" },
  { icon: ShoppingCart, name: "Orders", href: "/admin/orders" },
  { icon: Users, name: "Customers", href: "/admin/customers" },
  { icon: CreditCard, name: "Payment Methods", href: "/admin/payment-methods" },
];

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export default function AdminPanel() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [dashboardData, setDashboardData] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    totalProducts: 0,
  });

  const isAdmin = user?.emailAddresses[0].emailAddress === "soulepsycle1201@gmail.com";

  useEffect(() => {
    if (isAdmin) {
      fetchDashboardData();
    }
  }, [isAdmin]);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("/api/admin/dashboard");
      const data = await response.json();
      setDashboardData(data);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  if (!isAdmin) {
    return (
      <main className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <p>You are not authorized to access this page.</p>
          <Button variant={"default"} asChild>
            <Link href={"/"} className="underline underline-offset-4">
              Go back to home page
            </Link>
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
      <aside className={`w-16 bg-gray-800 text-white transition-all duration-300 ease-in-out overflow-hidden`}>
        <nav className="flex flex-col h-full">
          <div className="flex items-center justify-center mt-2">
            <Image src={SoulePsycleLogo} alt="SoulePsycle-Logo" className="w-12 h-12 rounded-md" />
          </div>
          <TooltipProvider>
            {sidebarItems.map((item) => (
              <Tooltip key={item.name} delayDuration={300}>
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
            <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          </div>

          {/* Dashboard Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
              <p className="text-3xl font-bold">{dashboardData.totalOrders}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
              <p className="text-3xl font-bold">₱{dashboardData.totalRevenue.toFixed(2)}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Total Customers</h2>
              <p className="text-3xl font-bold">{dashboardData.totalCustomers}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Total Products</h2>
              <p className="text-3xl font-bold">{dashboardData.totalProducts}</p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Bar Chart - Multiple</h2>
            <BarChart width={600} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <RechartsTooltip />
              <Bar dataKey="desktop" fill="#8884d8" />
              <Bar dataKey="mobile" fill="#82ca9d" />
            </BarChart>
            <div className="mt-4 text-sm">
              <p>Trending up by 5.2% this month <TrendingUp className="inline h-4 w-4" /></p>
              <p className="text-muted-foreground">Showing total visitors for the last 6 months</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
