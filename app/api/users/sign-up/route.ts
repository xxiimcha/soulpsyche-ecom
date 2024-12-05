import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from '../../../../prisma/generated/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  // Validate the email query parameter
  if (!email) {
    return NextResponse.json(
      { message: "Invalid email parameter" },
      { status: 400 }
    );
  }

  try {
    // Fetch user from the database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Send the user data as a response
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    // Ensure the Prisma connection is released
    await prisma.$disconnect();
  }
}
