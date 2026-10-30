export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const password = body.password || '';
    const turnstileToken = body['cf-turnstile-response'] || body.turnstileToken || '';

    // 1. Serverseitige Cloudflare Turnstile Validierung
    if (env.TURNSTILE_SECRET_KEY) {
      const formData = new FormData();
      formData.append('secret', env.TURNSTILE_SECRET_KEY);
      formData.append('response', turnstileToken);

      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData,
      });
      const verifyJson = await verifyRes.json();
      if (!verifyJson.success) {
        return new Response(
          JSON.stringify({ success: false, error: 'Turnstile-Sicherheitsüberprüfung fehlgeschlagen.' }),
          { status: 403, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // 2. Serverseitige Passwort-Verifizierung gegen env.Passwort oder env.ADMIN_PASSWORD
    const serverPassword = env.Passwort || env.ADMIN_PASSWORD;
    if (!serverPassword) {
      return new Response(
        JSON.stringify({ success: false, error: 'Server-Konfiguration unvollständig.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (password === serverPassword) {
      return new Response(
        JSON.stringify({ success: true, token: 'verified-session' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: false, error: 'Ungültiges Passwort.' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'Ungültige Anfrage.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
