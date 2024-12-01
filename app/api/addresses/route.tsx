import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required to fetch addresses." },
        { status: 400 }
      );
    }

    const addresses = await prisma.address.findMany({
      where: { user_id: userId },
      select: {
        id: true,
        complete_address: true,
      },
    });

    if (addresses.length === 0) {
      return NextResponse.json(
        { message: "No addresses found for the user." },
        { status: 404 }
      );
    }

    return NextResponse.json(addresses);
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return NextResponse.json(
      { error: "Failed to fetch addresses." },
      { status: 500 }
    );
  }
}
