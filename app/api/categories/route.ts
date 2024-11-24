import { PrismaClient } from '../../../prisma/generated/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all categories from the database
    const categories = await prisma.category.findMany(); // Fetches only from the Category table

    // Return the fetched categories as a JSON response
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { message: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
