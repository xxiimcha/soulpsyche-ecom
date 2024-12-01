import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userId = "c816e27a-e9dd-411f-b0d4-75e384e71005"; // Hardcoded user ID for now

    // Fetch bag items with Product details
    const bagItems = await prisma.bag.findMany({
      where: {
        user_id: userId, // Ensure this matches the database format
      },
      include: {
        Product: true,
      },
    });

    // Map to add safe defaults for undefined fields
    const mappedItems = bagItems.map((item) => ({
      id: item.id,
      productName: item.Product?.name || "Unknown Product",
      price: item.Product?.price || 0,
      quantity: item.quantity || 1,
      size: item.product_variant_size_id || "No Size",
      color: "No Color",
      image: "/placeholder-dark-image.png",
    }));

    // if (mappedItems.length === 0) {
    //   return NextResponse.json(
    //     { message: "No bag items found for the provided user ID." },
    //     { status: 404 }
    //   );
    // }

    return NextResponse.json(mappedItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching bag items:", error);
    return NextResponse.json(
      { error: "Failed to fetch bag items" },
      { status: 500 }
    );
  }
}
