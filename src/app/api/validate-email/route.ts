import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ valid: false, reason: 'Missing email' }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.ABSTRACT_API_KEY}&email=${email}`
    );

    if (!res.ok) {
      return NextResponse.json({ valid: false, reason: 'API Error' }, { status: 500 });
    }

    const data = await res.json();

    const isValid =
      data?.is_valid_format?.value &&
      data?.is_mx_found?.value &&
      data?.is_smtp_valid?.value &&
      !data?.is_disposable_email?.value;

    return NextResponse.json({ valid: isValid });
  } catch {
    return NextResponse.json({ valid: false, reason: 'Validation failed' }, { status: 500 });
  }
}
