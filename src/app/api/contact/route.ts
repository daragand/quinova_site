import { NextRequest, NextResponse } from 'next/server';
import { verifyTurnstileToken } from '@/lib/turnstile';

export async function POST(req: NextRequest) {
  const body = (await req.json()) as {
    token?: string;
    subject?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    assoc?: string;
    message?: string;
  };

  if (!body.token) {
    return NextResponse.json({ error: 'missing_token' }, { status: 400 });
  }

  const valid = await verifyTurnstileToken(body.token);
  if (!valid) {
    return NextResponse.json({ error: 'invalid_captcha' }, { status: 400 });
  }

  // TODO: envoyer un e-mail à contact@quinova.fr avec les champs du formulaire

  return NextResponse.json({ ok: true });
}
