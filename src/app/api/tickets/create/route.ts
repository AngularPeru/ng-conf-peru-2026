import { NextResponse } from "next/server";
import { createTicket } from "@/lib/tickets";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, docType, docNumber, tshirtSize, dietary } = body;

    if (!firstName || !lastName || !email || !docType || !docNumber || !tshirtSize) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { ticketId } = await createTicket({
      firstName,
      lastName,
      email,
      docType,
      docNumber,
      tshirtSize,
      dietary,
    });

    return NextResponse.json({ ticketId });
  } catch (error) {
    console.error("Error creating ticket:", error);
    return NextResponse.json(
      { error: "Error al crear el ticket" },
      { status: 500 }
    );
  }
}
