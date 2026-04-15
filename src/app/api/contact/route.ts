import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  name: string;
  email: string;
  phone?: string;
  hotel: string;
  website?: string;
  city?: string;
  sector?: string;
  message?: string;
}

const SECTOR_LABELS: Record<string, string> = {
  hotellerie: "Hôtellerie",
  restauration: "Restauration",
  commerce: "Commerce",
  "services-b2b": "Services B2B",
  "tourisme-loisirs": "Tourisme et loisirs",
  autre: "Autre",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    // Validation
    if (!body.name?.trim() || !body.email?.trim() || !body.hotel?.trim()) {
      return NextResponse.json(
        { error: "Les champs nom, email et nom de l'entreprise sont obligatoires." },
        { status: 400 }
      );
    }

    const sectorLabel = body.sector ? (SECTOR_LABELS[body.sector] ?? body.sector) : "Non renseigné";

    // 1. Email to PulseoAI
    const notificationHtml = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background:#0B0F1E;padding:32px 40px;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">
                Nouvelle demande d'audit GEO
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">
                Via le formulaire pulseoai.fr/contact
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;">
                    <span style="color:#6b7280;font-size:13px;display:block;">Nom</span>
                    <span style="color:#0B0F1E;font-size:15px;font-weight:600;">${escapeHtml(body.name)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;">
                    <span style="color:#6b7280;font-size:13px;display:block;">Email</span>
                    <a href="mailto:${escapeHtml(body.email)}" style="color:#2547D0;font-size:15px;font-weight:600;text-decoration:none;">${escapeHtml(body.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;">
                    <span style="color:#6b7280;font-size:13px;display:block;">Téléphone</span>
                    <span style="color:#0B0F1E;font-size:15px;font-weight:600;">${body.phone ? escapeHtml(body.phone) : "Non renseigné"}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;">
                    <span style="color:#6b7280;font-size:13px;display:block;">Entreprise</span>
                    <span style="color:#0B0F1E;font-size:15px;font-weight:600;">${escapeHtml(body.hotel)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;">
                    <span style="color:#6b7280;font-size:13px;display:block;">Site web</span>
                    <span style="color:#0B0F1E;font-size:15px;font-weight:600;">${body.website ? escapeHtml(body.website) : "Non renseigné"}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;">
                    <span style="color:#6b7280;font-size:13px;display:block;">Ville</span>
                    <span style="color:#0B0F1E;font-size:15px;font-weight:600;">${body.city ? escapeHtml(body.city) : "Non renseigné"}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;">
                    <span style="color:#6b7280;font-size:13px;display:block;">Secteur d'activité</span>
                    <span style="color:#0B0F1E;font-size:15px;font-weight:600;">${escapeHtml(sectorLabel)}</span>
                  </td>
                </tr>
                ${body.message?.trim() ? `
                <tr>
                  <td style="padding:12px 0;">
                    <span style="color:#6b7280;font-size:13px;display:block;margin-bottom:6px;">Message</span>
                    <div style="background:#f8f9fa;border-radius:8px;padding:16px;color:#0B0F1E;font-size:14px;line-height:1.6;">
                      ${escapeHtml(body.message).replace(/\n/g, "<br />")}
                    </div>
                  </td>
                </tr>
                ` : ""}
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f8f9fa;padding:20px 40px;text-align:center;">
              <p style="margin:0;color:#6b7280;font-size:12px;">
                PulseoAI · Agence GEO · Nantes, France
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // 2. Confirmation email to prospect
    const confirmationHtml = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background:#0B0F1E;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">
                Pulseo<span style="color:#2547D0;">AI</span>
              </h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 16px;color:#0B0F1E;font-size:20px;font-weight:700;">
                Merci pour votre demande, ${escapeHtml(body.name.split(" ")[0])}&nbsp;!
              </h2>
              <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.7;">
                Nous avons bien reçu votre demande d'audit GEO pour <strong>${escapeHtml(body.hotel)}</strong>.
              </p>
              <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.7;">
                Notre équipe analyse la visibilité de votre entreprise sur les moteurs de recherche IA (ChatGPT, Claude, Gemini) et vous envoie votre rapport personnalisé <strong>sous 48&nbsp;heures</strong>.
              </p>
              <div style="background:#f0f4ff;border-left:4px solid #2547D0;border-radius:0 8px 8px 0;padding:16px 20px;margin:24px 0;">
                <p style="margin:0;color:#0B0F1E;font-size:14px;line-height:1.6;">
                  <strong>Ce que contient votre audit&nbsp;:</strong><br />
                  ✓ Test de visibilité sur 25+ requêtes stratégiques<br />
                  ✓ Analyse de vos concurrents sur les moteurs IA<br />
                  ✓ Recommandations personnalisées
                </p>
              </div>
              <p style="margin:24px 0 0;color:#374151;font-size:15px;line-height:1.7;">
                D'ici là, n'hésitez pas à nous contacter si vous avez des questions.
              </p>
              <p style="margin:24px 0 0;color:#374151;font-size:15px;line-height:1.7;">
                À très vite,<br />
                <strong>L'équipe PulseoAI</strong>
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f8f9fa;padding:20px 40px;text-align:center;">
              <p style="margin:0 0 4px;color:#6b7280;font-size:12px;">
                PulseoAI · Agence GEO · Nantes, France
              </p>
              <a href="https://www.pulseoai.fr" style="color:#2547D0;font-size:12px;text-decoration:none;">
                www.pulseoai.fr
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const FROM = "PulseoAI <contact@pulseoai.fr>";

    // Send both emails in parallel
    const [notification, confirmation] = await Promise.all([
      resend.emails.send({
        from: FROM,
        to: "contact@pulseoai.fr",
        subject: `Nouvelle demande d'audit GEO — ${body.hotel}`,
        html: notificationHtml,
        replyTo: body.email,
      }),
      resend.emails.send({
        from: FROM,
        to: body.email,
        subject: "Votre demande d'audit GEO a bien été reçue — PulseoAI",
        html: confirmationHtml,
      }),
    ]);

    if (notification.error) {
      console.error("[Resend] Notification email failed:", JSON.stringify(notification.error));
    }
    if (confirmation.error) {
      console.error("[Resend] Confirmation email failed:", JSON.stringify(confirmation.error));
    }

    if (notification.error || confirmation.error) {
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email." },
        { status: 500 }
      );
    }

    console.log("[Resend] Emails sent successfully:", {
      notification: notification.data?.id,
      confirmation: confirmation.data?.id,
      to: body.email,
      company: body.hotel,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
