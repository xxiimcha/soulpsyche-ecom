import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../prisma/generated/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params; // Directly access the user ID from the params

  try {
    // Fetch the user with related orders using include
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        Order: { // Include related orders
          select: {
            id: true, // Order ID
            total_amount: true,
            order_status: true,
            created_at: true,
          }
        }
      }
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the user data including the orders
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}
