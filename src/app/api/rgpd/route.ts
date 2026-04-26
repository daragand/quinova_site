import { NextRequest, NextResponse } from 'next/server';
import { verifyTurnstileToken } from '@/lib/turnstile';
import { sendMail } from '@/lib/mailer';

const ALLOWED_ORIGINS = new Set([
  'https://quinova.fr',
  'https://www.quinova.fr',
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : []),
]);

const VALID_RIGHTS = new Set([
  'Accès à mes données',
  'Rectification',
  'Effacement / suppression de compte',
  'Portabilité',
  'Limitation',
  'Opposition',
]);

function isString(v: unknown, max: number, min = 1): v is string {
  return typeof v === 'string' && v.trim().length >= min && v.length <= max;
}

function isValidEmail(v: unknown): v is string {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 100;
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  const { token, right, email, details } = body as Record<string, unknown>;

  if (!isString(token, 2048)) {
    return NextResponse.json({ error: 'missing_token' }, { status: 400 });
  }
  if (!VALID_RIGHTS.has(right as string)) {
    return NextResponse.json({ error: 'invalid_right' }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }
  if (details !== undefined && details !== '' && !isString(details, 2000, 0)) {
    return NextResponse.json({ error: 'invalid_details' }, { status: 400 });
  }

  const valid = await verifyTurnstileToken(token);
  if (!valid) {
    return NextResponse.json({ error: 'invalid_captcha' }, { status: 400 });
  }

  await sendMail({
    to: 'dpo@quinova.fr',
    subject: `[RGPD] ${right} — ${email}`,
    text: [
      `Droit demandé : ${right}`,
      `E-mail : ${email}`,
      details ? `\nPrécisions :\n${details}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n'),
  });

  return NextResponse.json({ ok: true });
}
