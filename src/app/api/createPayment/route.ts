import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const user = process.env.IZIPAY_USER;
  const password = process.env.IZIPAY_PASSWORD;

  const authorization = Buffer.from(`${user}:${password}`).toString('base64');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${authorization}`,
  };

  const body = await request.json();

  const CreatePayment =
    'https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment';

  try {
    const response = await fetch(CreatePayment, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data.answer.formToken);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error al crear el pago' },
      { status: 500 }
    );
  }
}
