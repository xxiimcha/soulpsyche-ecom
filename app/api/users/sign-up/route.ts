import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, username, firstName, lastName, userId } = await req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email,
        username,
        address: "",
        user_id: userId,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    console.error("Error inserting user:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
