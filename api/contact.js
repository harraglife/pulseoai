import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, service, message } = req.body;

    // Basic validation
    if (!name || !email) {
        return res.status(400).json({ error: 'Nom et email requis.' });
    }

    try {
        // Email sent to you (notification)
        await resend.emails.send({
            from: 'Pulseo AI <onboarding@resend.dev>',
            to: 'contact@pulseoai.fr',
            subject: `Nouvelle demande d'audit — ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px;">
                    <h2 style="color: #2563eb;">Nouvelle demande de contact</h2>
                    <hr style="border: 1px solid #eee;">
                    <p><strong>Nom :</strong> ${name}</p>
                    <p><strong>Email :</strong> ${email}</p>
                    <p><strong>Service :</strong> ${service || 'Non précisé'}</p>
                    <p><strong>Message :</strong></p>
                    <p style="background: #f9f9f9; padding: 12px; border-radius: 8px;">${message || 'Aucun message'}</p>
                    <hr style="border: 1px solid #eee;">
                    <p style="color: #999; font-size: 12px;">Envoyé depuis le formulaire pulseoai.fr</p>
                </div>
            `
        });

        // Confirmation email to the prospect
        await resend.emails.send({
            from: 'Pulseo AI <onboarding@resend.dev>',
            to: email,
            subject: 'Votre demande a bien été reçue — Pulseo AI',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px;">
                    <h2 style="color: #2563eb;">Merci ${name} !</h2>
                    <p>Nous avons bien reçu votre demande et nous vous recontactons sous 24h.</p>
                    <p>En attendant, n'hésitez pas à nous écrire directement à <a href="mailto:contact@pulseoai.fr">contact@pulseoai.fr</a> si vous avez des questions.</p>
                    <br>
                    <p>À très vite,</p>
                    <p><strong>L'équipe Pulseo AI</strong></p>
                    <hr style="border: 1px solid #eee;">
                    <p style="color: #999; font-size: 12px;">Pulseo AI — Automatisation IA pour entreprises</p>
                </div>
            `
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: 'Erreur lors de l\'envoi.' });
    }
}
