import { NextRequest, NextResponse } from 'next/server';
import { verifyTurnstileToken } from '@/lib/turnstile';

export async function POST(req: NextRequest) {
  const body = (await req.json()) as {
    token?: string;
    right?: string;
    email?: string;
    details?: string;
  };

  if (!body.token) {
    return NextResponse.json({ error: 'missing_token' }, { status: 400 });
  }

  const valid = await verifyTurnstileToken(body.token);
  if (!valid) {
    return NextResponse.json({ error: 'invalid_captcha' }, { status: 400 });
  }

  // TODO: envoyer un e-mail à dpo@quinova.fr avec body.right / body.email / body.details

  return NextResponse.json({ ok: true });
}
