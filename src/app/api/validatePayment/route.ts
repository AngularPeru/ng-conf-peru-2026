import { NextResponse } from 'next/server';
import hmacSHA256 from 'crypto-js/hmac-sha256';
import Hex from 'crypto-js/enc-hex';
import { createTicket } from '@/lib/tickets';

export async function POST(request: Request) {
  const body = await request.json();
  const { hash, clientAnswer, formData } = body;

  const isValid = checkHash({ hash, clientAnswer });

  if (!isValid) {
    return NextResponse.json(
      { message: 'Payment failed!', isValid },
      { status: 400 }
    );
  }

  try {
    const { ticketId } = await createTicket({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      docType: formData.docType,
      docNumber: formData.docNumber,
      tshirtSize: formData.tshirtSize,
      dietary: formData.dietary,
    });

    return NextResponse.json({ message: 'Payment successful!', isValid, ticketId });
  } catch (error) {
    console.error('Error creating ticket after payment:', error);
    return NextResponse.json(
      { message: 'Payment verified but ticket creation failed', isValid },
      { status: 500 }
    );
  }
}

function checkHash({
  hash,
  clientAnswer,
}: {
  hash: string;
  clientAnswer: string;
}) {
  const answerHash = Hex.stringify(
    hmacSHA256(
      JSON.stringify(clientAnswer),
      process.env.IZIPAY_HMAC_SECRET_KEY || ''
    )
  );

  return hash === answerHash;
}
