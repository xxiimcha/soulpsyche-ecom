import prisma from "@/lib/db";
import { NextResponse } from "next/server";

// Handler for fetching all payment methods
export async function GET() {
	try {
		const paymentMethods = await prisma.paymentMethodInfo.findMany({
			orderBy: { created_at: "asc" },
		});
		return NextResponse.json(paymentMethods);
	} catch (error) {
		console.error("Error fetching payment methods:", error);
		return NextResponse.json(
			{ error: "Failed to fetch payment methods" },
			{ status: 500 }
		);
	}
}

// Handler for creating a new payment method
export async function POST(req: Request) {
	try {
		const body = await req.json();
		if (!body || Object.keys(body).length === 0) {
			return NextResponse.json(
				{ error: "Request body is empty" },
				{ status: 400 }
			);
		}

		const {
			method_name,
			description,
			account_name,
			account_number,
			qr_code,
			is_active,
		} = body;

		if (!method_name) {
			return NextResponse.json(
				{ error: "Method name is required" },
				{ status: 400 }
			);
		}

		const newPaymentMethod = await prisma.paymentMethodInfo.create({
			data: {
				method_name,
				description: description || "",
				account_name: account_name || "",
				account_number: account_number || "",
				qr_code: qr_code || "",
				is_active: is_active !== undefined ? is_active : true,
			},
		});

		return NextResponse.json(newPaymentMethod, { status: 201 });
	} catch (error) {
		console.error("Error creating payment method:", error);
		return NextResponse.json(
			{ error: "Failed to create payment method" },
			{ status: 500 }
		);
	}
}

export async function DELETE(request: Request) {
	try {
		// Extract the `id` from the query parameters
		const { searchParams } = new URL(request.url);
		const id = searchParams.get("id");

		if (!id) {
			return NextResponse.json(
				{ error: "Missing payment method ID in query parameters" },
				{ status: 400 }
			);
		}

		// Delete the payment method using Prisma
		const deletedPaymentMethod = await prisma.paymentMethodInfo.delete({
			where: {
				id: id, // Assuming `id` is a string (e.g., UUID). Convert if it's a number.
			},
		});

		return NextResponse.json(
			{
				message: "Payment method deleted successfully",
				data: deletedPaymentMethod,
			},
			{ status: 200 }
		);
	} catch (error: unknown) {
		return NextResponse.json(
			{ error: "Failed to delete payment method", details: error },
			{ status: 500 }
		);
	}
}
