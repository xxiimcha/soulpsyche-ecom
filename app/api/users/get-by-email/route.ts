import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../prisma/generated/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    // Get the search parameters from the URL
    const url = new URL(req.url);
    const email = url.searchParams.get("email");

    // Validate email presence
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Fetch user by email and return only the ID
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true }, // Only select the 'id' field
    });

    // Check if the user exists
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the user ID
    return NextResponse.json({ id: user.id }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}
