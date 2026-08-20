import { NextResponse } from 'next/server';
import hmacSHA256 from 'crypto-js/hmac-sha256';
import Hex from 'crypto-js/enc-hex';

export async function POST(request: Request) {
  const body = await request.json();
  const { hash, clientAnswer } = body;

  const isValid = checkHash({ hash, clientAnswer });

  if (!isValid) {
    return NextResponse.json(
      { message: 'Payment failed!', isValid },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: 'Payment successful!', isValid });
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
