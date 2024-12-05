import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../prisma/generated/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    // Validate userId
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Fetch bag items with Product details
    const bagItems = await prisma.bag.findMany({
      where: {
        user_id: userId, // Ensure this matches your database schema
      },
      include: {
        Product: true,
      },
    });

    // Map and transform the data to a safe format
    const mappedItems = bagItems.map((item) => ({
      id: item.id,
      productName: item.Product?.name || "Unknown Product",
      price: item.Product?.price || 0,
      quantity: item.quantity || 1,
      size: item.product_variant_size_id || "No Size",
      color: "No Color",
      image: "/placeholder-dark-image.png", // Placeholder image
    }));

    if (mappedItems.length === 0) {
      return NextResponse.json(
        { message: "No bag items found for the provided user ID." },
        { status: 404 }
      );
    }

    return NextResponse.json(mappedItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching bag items:", error);
    return NextResponse.json(
      { error: "Failed to fetch bag items" },
      { status: 500 }
    );
  }
}
