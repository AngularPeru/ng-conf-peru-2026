import QRCode from "qrcode";
import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";
import { db } from "./firebase";
import { resend } from "./resend";
import { buildTicketEmailHtml } from "./email-template";

export interface CreateTicketParams {
  firstName: string;
  lastName: string;
  email: string;
  docType: string;
  docNumber: string;
  tshirtSize: string;
  dietary?: string;
}

export interface Ticket {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  docType: string;
  docNumber: string;
  tshirtSize: string;
  dietary: string;
  status: "valid" | "used";
  createdAt: string;
  checkedInAt: string | null;
}

function encryptQrPayload(data: {
  ticketId: string;
  firstName: string;
  lastName: string;
  docNumber: string;
}): string {
  const secret = process.env.QR_SECRET_KEY || "default-key";
  return AES.encrypt(JSON.stringify(data), secret).toString();
}

export function decryptQrPayload(encrypted: string): {
  ticketId: string;
  firstName: string;
  lastName: string;
  docNumber: string;
} | null {
  try {
    const secret = process.env.QR_SECRET_KEY || "default-key";
    const bytes = AES.decrypt(encrypted, secret);
    const decrypted = bytes.toString(Utf8);
    if (!decrypted) return null;
    return JSON.parse(decrypted);
  } catch {
    return null;
  }
}

export async function createTicket(
  params: CreateTicketParams
): Promise<{ ticketId: string }> {
  const ticketId = `NGCONF26-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  const ticketData = {
    id: ticketId,
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
    docType: params.docType,
    docNumber: params.docNumber,
    tshirtSize: params.tshirtSize,
    dietary: params.dietary || "",
    status: "valid",
    createdAt: new Date().toISOString(),
    checkedInAt: null,
  };

  // Save to Firestore
  await db.collection("tickets").doc(ticketId).set(ticketData);

  // Encrypt QR payload
  const encryptedPayload = encryptQrPayload({
    ticketId,
    firstName: params.firstName,
    lastName: params.lastName,
    docNumber: params.docNumber,
  });

  // Generate QR with encrypted payload
  const qrCodeDataUri = await QRCode.toDataURL(encryptedPayload, {
    width: 400,
    margin: 2,
    color: { dark: "#000000", light: "#FFFFFF" },
  });

  // Extract raw base64 for attachment
  const qrBase64Raw = qrCodeDataUri.split(",")[1];

  // Send confirmation email with QR inline + attached
  await resend.emails.send({
    from: "Ng Conf Perú 2026 <tickets@ngconf.angular-peru.com>",
    to: params.email,
    subject: `🎫 Tu entrada - Ng Conf Perú 2026 | ${ticketId}`,
    html: buildTicketEmailHtml({
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      ticketId,
      docType: params.docType,
      docNumber: params.docNumber,
      tshirtSize: params.tshirtSize,
      qrCodeDataUri,
    }),
    attachments: [
      {
        filename: `qr-${ticketId}.png`,
        content: qrBase64Raw,
      },
    ],
  });

  return { ticketId };
}

export async function validateTicket(
  ticketId: string
): Promise<{ valid: boolean; ticket?: Ticket; message: string }> {
  const docRef = db.collection("tickets").doc(ticketId);
  const doc = await docRef.get();

  if (!doc.exists) {
    return { valid: false, message: "Ticket no encontrado" };
  }

  const ticket = doc.data() as Ticket;

  if (ticket.status === "used") {
    return {
      valid: false,
      ticket,
      message: `Ticket ya fue utilizado. Ingreso registrado el ${ticket.checkedInAt}`,
    };
  }

  // Mark as used
  await docRef.update({
    status: "used",
    checkedInAt: new Date().toISOString(),
  });

  return {
    valid: true,
    ticket: { ...ticket, status: "used", checkedInAt: new Date().toISOString() },
    message: "Ingreso exitoso",
  };
}
