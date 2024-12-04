import { NextResponse } from 'next/server';
import { PrismaClient } from "../../../prisma/generated/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all users from the User table
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
