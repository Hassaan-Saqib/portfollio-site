import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
      body.access_key ||
      'fea2baf5-7a8d-4854-ad27-85649c58b0be';

    if (!accessKey) {
      // Key not configured yet - notify client to fallback
      return NextResponse.json(
        {
          success: false,
          needsKey: true,
          message: 'Direct inbox key not configured yet. Fallback to direct client.',
        },
        { status: 200 }
      );
    }

    // Dispatch directly to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: `[Portfolio Inquiry // ${subject || 'General'}] from ${name}`,
        message: `Topic: ${subject}\nSender Email: ${email}\n\nMessage:\n${message}`,
        from_name: `${name} (Portfolio Inquiry)`,
      }),
    });

    const responseText = await response.text();
    let data: any = {};
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { success: false, message: responseText };
    }

    if (response.ok && data.success) {
      return NextResponse.json({
        success: true,
        message: 'Transmission successfully delivered to your inbox.',
      });
    } else {
      console.warn('[Web3Forms Gateway Response]:', data);
      return NextResponse.json(
        {
          success: false,
          error: data.message || 'Transmission failed at upstream gateway.',
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Gateway connection error.' },
      { status: 200 }
    );
  }
}
