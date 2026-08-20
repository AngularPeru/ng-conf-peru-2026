import { NextResponse } from "next/server";
import { validateTicket, decryptQrPayload } from "@/lib/tickets";

export async function POST(request: Request) {
  try {
    const { ticketId, encryptedPayload } = await request.json();

    let resolvedTicketId = ticketId;

    // If encrypted payload is provided, decrypt it to get the ticketId
    if (encryptedPayload && !ticketId) {
      const decrypted = decryptQrPayload(encryptedPayload);
      if (!decrypted) {
        return NextResponse.json(
          { valid: false, message: "QR inválido o corrupto" },
          { status: 400 }
        );
      }
      resolvedTicketId = decrypted.ticketId;
    }

    if (!resolvedTicketId) {
      return NextResponse.json(
        { valid: false, message: "ticketId o encryptedPayload es requerido" },
        { status: 400 }
      );
    }

    const result = await validateTicket(resolvedTicketId);

    return NextResponse.json(result, {
      status: result.valid ? 200 : 400,
    });
  } catch (error) {
    console.error("Error validating ticket:", error);
    return NextResponse.json(
      { valid: false, message: "Error al validar el ticket" },
      { status: 500 }
    );
  }
}
