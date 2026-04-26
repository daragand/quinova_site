import { NextRequest, NextResponse } from 'next/server';
import { verifyTurnstileToken } from '@/lib/turnstile';
import { sendMail } from '@/lib/mailer';

const ALLOWED_ORIGINS = new Set([
  'https://quinova.fr',
  'https://www.quinova.fr',
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : []),
]);

const VALID_SUBJECTS = new Set([
  'Question générale',
  "Aide à l'utilisation",
  'Signaler un bug',
  'Partenariat / presse',
  'Autre',
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

  const { token, subject, firstName, lastName, email, assoc, message } =
    body as Record<string, unknown>;

  if (!isString(token, 2048)) {
    return NextResponse.json({ error: 'missing_token' }, { status: 400 });
  }
  if (!VALID_SUBJECTS.has(subject as string)) {
    return NextResponse.json({ error: 'invalid_subject' }, { status: 400 });
  }
  if (!isString(firstName, 50)) {
    return NextResponse.json({ error: 'invalid_first_name' }, { status: 400 });
  }
  if (!isString(lastName, 50)) {
    return NextResponse.json({ error: 'invalid_last_name' }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }
  if (assoc !== undefined && assoc !== '' && !isString(assoc, 100, 0)) {
    return NextResponse.json({ error: 'invalid_assoc' }, { status: 400 });
  }
  if (!isString(message, 5000, 10)) {
    return NextResponse.json({ error: 'invalid_message' }, { status: 400 });
  }

  const valid = await verifyTurnstileToken(token);
  if (!valid) {
    return NextResponse.json({ error: 'invalid_captcha' }, { status: 400 });
  }

  await sendMail({
    to: 'contact@quinova.fr',
    subject: `[Contact] ${subject} — ${firstName} ${lastName}`,
    text: [
      `Sujet : ${subject}`,
      `Nom : ${firstName} ${lastName}`,
      `E-mail : ${email}`,
      assoc ? `Association : ${assoc}` : null,
      '',
      message,
    ]
      .filter((l) => l !== null)
      .join('\n'),
  });

  return NextResponse.json({ ok: true });
}
