export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { sessionId, message } = req.body;

    // Basic validation
    if (!sessionId || !message) {
        return res.status(400).json({ error: 'sessionId et message requis.' });
    }

    try {
        const n8nResponse = await fetch(process.env.N8N_CHATBOT_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sessionId,
                message
            })
        });

        if (!n8nResponse.ok) {
            throw new Error(`n8n responded with status ${n8nResponse.status}`);
        }

        const data = await n8nResponse.json();

        return res.status(200).json({
            reply: data.reply || data.output || data.text || ''
        });
    } catch (error) {
        console.error('Chatbot proxy error:', error);
        return res.status(500).json({
            error: "Erreur de communication avec l'assistant."
        });
    }
}
