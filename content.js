const CONTENT = {
    // Navigation
    nav: {
        brand: "PULSEO AI",
        links: [
            { text: "Solutions", href: "#services" },
            { text: "Méthode", href: "#method" },
            { text: "Résultats", href: "#results" },
            { text: "Avis clients", href: "#testimonials" },
            { text: "Notre équipe", href: "#team" },
            { text: "FAQ", href: "#faq" }
        ],
        cta: { text: "Audit Offert", href: "#contact" }
    },

    // Hero Section
    hero: {
        badge: "",
        titleLine1: "Vos concurrents apparaissent sur ChatGPT.",
        titleLine2: "Pas vous.",
        description: "Vos clients demandent à ChatGPT qui contacter, quoi acheter, qui choisir. Vos concurrents qui apparaissent dans ces réponses captent vos ventes en ce moment même. Chaque jour sans agir, vous leur offrez du chiffre d'affaires. On règle ça.",
        ctaPrimary: { text: "Réserver votre audit offert", href: "#contact" },
        ctaSecondary: { text: "Découvrir nos solutions", href: "#services" },
        card: {
            stat: "#1",
            label: "Position sur les IA"
        }
    },

    // Trust Bar
    trust: {
        title: "Technologies de pointe utilisées par nos experts",
        logos: ["OpenAI", "Anthropic", "N8N", "Python", "Make"]
    },

    // Tech Partners Marquee
    techPartners: {
        title: "Propulsé par les meilleures technologies IA",
        logos: ["OpenAI", "Anthropic", "Google Gemini", "Meta AI", "Mistral AI", "HuggingFace", "LangChain", "n8n", "Make", "Zapier"]
    },

    // Problem / Solution Section
    problem: {
        title: 'Chaque jour sans visibilité IA, c\'est un client que vous offrez à <span class="text-blue-500">vos concurrents.</span>',
        items: [
            {
                title: "Invisible sur ChatGPT et toutes les IA",
                description: "73% des consommateurs utilisent déjà ChatGPT ou une IA pour trouver un prestataire, un produit, un service. Vos concurrents qui apparaissent dans ces réponses captent vos clients potentiels. En ce moment même."
            },
            {
                title: "Vos concurrents captent vos clients",
                description: "Zéro présence dans les recherches IA. Trafic en baisse, clients qui disparaissent. Vous regardez votre CA stagner pendant que d'autres prennent votre place."
            }
        ],
        solution: {
            title: "Ce que Pulseo AI change pour vous",
            quote: "\"Vous apparaissez dans toutes les IA. ChatGPT recommande votre entreprise. Trafic qualifié en hausse constante. Nouveaux clients sans effort publicitaire. Votre CA augmente pendant que vous dormez.\"",
            stats: [
                { value: "73%", label: "Utilisent déjà les IA pour chercher" },
                { value: "#1", label: "Position sur les IA" },
                { value: "+CA", label: "Trafic et clients en hausse" }
            ]
        }
    },

    // Services Section
    services: {
        title: 'CE QUE NOUS <span class="text-blue-500">FAISONS</span>',
        subtitle: "Trois expertises pour dominer les résultats des IA et capter vos clients avant vos concurrents.",
        items: [
            {
                title: "Audit de visibilité IA",
                description: "On analyse comment vous apparaissez (ou pas) sur ChatGPT, Gemini, Perplexity et toutes les autres IA. Résultat : un diagnostic complet de votre présence IA actuelle."
            },
            {
                title: "Optimisation pour les IA",
                description: "On optimise votre présence digitale pour que les IA vous recommandent en priorité. Vos concurrents disparaissent, vous prenez leur place."
            },
            {
                title: "Suivi & Domination continue",
                description: "Les IA évoluent chaque semaine. On surveille, on ajuste, on maintient votre position dominante. Vous n'avez rien à faire."
            }
        ]
    },

    // Method Section
    method: {
        title: "NOTRE",
        titleHighlight: "MÉTHODE",
        subtitle: "Un processus structuré, transparent, pensé pour les dirigeants qui n'ont pas de temps à perdre.",
        steps: [
            {
                number: "01",
                title: "On cherche votre entreprise sur toutes les IA",
                description: "On teste ChatGPT, Gemini, Perplexity, Grok et toutes les autres IA avec les requêtes de vos clients. On voit exactement où vous en êtes et où sont vos concurrents.",
                color: "blue"
            },
            {
                number: "02",
                title: "On bâtit votre stratégie de domination IA",
                description: "Chaque entreprise est différente. On construit une stratégie sur mesure pour que vous apparaissiez en premier dans les réponses des IA, là où vos clients cherchent.",
                color: "purple"
            },
            {
                number: "03",
                title: "On optimise tout pour vous",
                description: "Contenu, structure, signaux d'autorité. On s'occupe de tout. Vous ne changez rien à votre quotidien. On travaille dans l'ombre pour vous mettre sous les projecteurs.",
                color: "cyan"
            },
            {
                number: "04",
                title: "On surveille et on domine",
                description: "On monitore votre position dans les IA en permanence. Dès qu'une IA évolue, on s'adapte. Vous restez devant. Toujours.",
                color: "white"
            }
        ]
    },

    // Results / Stats Section
    results: [
        { value: "73%", label: "Utilisent les IA pour chercher un prestataire" },
        { value: "#1", label: "Position sur les IA pour nos clients" },
        { value: "98%", label: "Taux de satisfaction client" }
    ],

    // Showcase: Pourquoi nous + Projets
    showcase: {
        counters: [
            { value: 73, suffix: "%", label: "des consommateurs utilisent déjà une IA pour trouver un prestataire ou un service" },
            { value: 0, suffix: "+CA", label: "Nos clients voient leur trafic et leur chiffre d'affaires augmenter grâce à leur visibilité IA", static: true },
            { value: 98, suffix: "%", label: "Clients satisfaits" }
        ],
        title: "Nos derniers projets",
        projects: [
            { placeholder: true, label: "Dashboard client" },
            { placeholder: true, label: "Dashboard client" },
            { placeholder: true, label: "Dashboard client" }
        ]
    },

    // Testimonials Section
    testimonials: {
        title: 'Ils nous font <span class="text-blue-500">confiance</span>',
        subtitle: "Des résultats réels, des clients qui parlent pour nous.",
        slots: [
            { line1: "Client satisfait de nos résultats.", line2: "Visibilité IA obtenue en moins d'un mois." },
            { line1: "Client satisfait de nos résultats.", line2: "Visibilité IA obtenue en moins d'un mois." },
            { line1: "Client satisfait de nos résultats.", line2: "Visibilité IA obtenue en moins d'un mois." }
        ]
    },

    // Team Section
    team: {
        title: 'L\'équipe derrière vos <span class="text-blue-500">résultats</span>',
        subtitle: "Des experts IA qui s'occupent de tout pour vous.",
        members: [
            { name: "Romain", role: "Co-fondateur", photo: "/romain.jpeg" },
            { name: "Sofiane", role: "Co-fondateur", photo: "/sofiane.png" },
            { name: "Maxime", role: "Expert Référencement IA", photo: "/maxime.png" },
            { name: "Léna", role: "Chargée de Contenu & Réseaux", photo: "/lena.jpg" }
        ],
        socials: [
            { platform: "LinkedIn", label: "Romain", url: "https://www.linkedin.com/in/romaindcl/" },
            { platform: "LinkedIn", label: "Sofiane", url: "https://www.linkedin.com/in/sofiane-aiche-0ab833277/" },
            { platform: "Instagram", label: "@pulseoai", url: "https://www.instagram.com/pulseoai?igsh=NjFwNmRrajM1aW9v" }
        ]
    },

    // FAQ Section
    faq: {
        title: 'Vos <span class="text-blue-500">Questions</span>',
        items: [
            {
                question: "Est-ce que mes clients utilisent vraiment les IA pour chercher ?",
                answer: "Oui. ChatGPT dépasse 100 millions d'utilisateurs actifs par jour. Gemini, Perplexity, Grok explosent. Vos clients y sont déjà. La vraie question c'est : est-ce qu'ils vous trouvent ?"
            },
            {
                question: "Quelle différence avec le SEO Google classique ?",
                answer: "Le SEO Google positionne votre site dans les résultats de recherche. Le référencement IA fait en sorte que ChatGPT et les autres IA vous recommandent directement à vos clients, sans qu'ils aient besoin de cliquer sur un lien. C'est le canal qui explose en ce moment."
            },
            {
                question: "Est-ce que ça fonctionne pour mon secteur d'activité ?",
                answer: "Oui. Peu importe votre secteur. Dès que des clients cherchent un prestataire, un produit ou un service en utilisant une IA, vous pouvez apparaître dans leur réponse. On s'adapte à votre marché."
            },
            {
                question: "Comment vous travaillez avec nous ?",
                answer: "On commence par un audit gratuit de votre visibilité IA. Ensuite on vous présente notre stratégie. Vous validez, on exécute. Vous n'avez rien à gérer, on s'occupe de tout de A à Z."
            },
            {
                question: "Pourquoi maintenant et pas plus tard ?",
                answer: "Parce que vos concurrents commencent maintenant. Les premières entreprises à dominer les IA dans leur secteur vont verrouiller leur position. Plus vous attendez, plus il est difficile de les rattraper. L'avantage du premier arrivant est massif dans ce domaine."
            }
        ]
    },

    // Contact / CTA Section
    contact: {
        title: 'Prêt à apparaître sur <span class="text-blue-400">toutes les IA ?</span>',
        description: "Réservez votre audit offert. En 30 minutes, on analyse votre visibilité IA et on vous montre comment capter plus de clients.",
        email: "contact@pulseoai.fr",
        location: "France",
        form: {
            namePlaceholder: "Votre nom",
            emailPlaceholder: "Votre email professionnel",
            selectDefault: "Quel est votre besoin principal ?",
            selectOptions: [
                "Audit de ma visibilité IA",
                "Apparaître sur ChatGPT et les IA",
                "Optimiser ma présence IA existante",
                "Autre besoin, je ne sais pas encore"
            ],
            messagePlaceholder: "Décrivez brièvement votre situation...",
            submitText: "Réserver mon audit offert",
            successMessage: "Merci ! Votre demande a bien été envoyée. Nous vous recontactons sous 24h.",
            errorMessage: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.",
            apiEndpoint: "/api/contact"
        }
    },

    // SEO Footer
    seoFooter: {
        title: "Pulseo AI · Référencement IA & Visibilité sur les intelligences artificielles",
        columns: [
            {
                heading: "Référencement IA",
                items: [
                    "Référencement IA",
                    "Visibilité IA",
                    "ChatGPT",
                    "Gemini",
                    "Perplexity",
                    "Grok",
                    "Claude",
                    "Copilot",
                    "GEO",
                    "Generative Engine Optimization"
                ]
            },
            {
                heading: "SEO & Visibilité digitale",
                items: [
                    "SEO",
                    "Référencement naturel",
                    "Trafic organique",
                    "Apparaître dans les IA",
                    "Recommandation IA",
                    "Optimisation IA",
                    "Présence IA",
                    "AEO",
                    "Answer Engine Optimization",
                    "Visibilité digitale"
                ]
            },
            {
                heading: "Marketing & Stratégie IA",
                items: [
                    "Marketing IA",
                    "Stratégie IA",
                    "Intelligence artificielle",
                    "Recherche IA",
                    "Acquisition client IA",
                    "PME",
                    "Agence IA France",
                    "Nantes",
                    "Grand Ouest"
                ]
            }
        ],
        description: "Pulseo AI est une agence française spécialisée dans le référencement IA et la visibilité sur les intelligences artificielles. Nous aidons les entreprises à apparaître dans les réponses de ChatGPT, Gemini, Perplexity, Grok, Claude et toutes les IA. Nos experts interviennent dans toute la France pour aider les dirigeants à capter plus de clients grâce à leur visibilité IA. Spécialités : GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), référencement naturel, optimisation de présence IA, stratégie de domination IA."
    },

    // Legal — Mentions Légales
    mentionsLegales: {
        title: "Mentions Légales",
        sections: [
            {
                heading: "1. Éditeur du site",
                content: "Le site pulseoai.fr est édité par Pulseo AI.<br>Siège social : Nantes, France.<br>Email : contact@pulseoai.fr"
            },
            {
                heading: "2. Hébergement",
                content: "Le site est hébergé par un prestataire d'hébergement professionnel basé en Union Européenne."
            },
            {
                heading: "3. Propriété intellectuelle",
                content: "L'ensemble du contenu présent sur le site pulseoai.fr (textes, images, logos, design, code source) est la propriété exclusive de Pulseo AI, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est strictement interdite."
            },
            {
                heading: "4. Limitation de responsabilité",
                content: "Pulseo AI s'efforce de fournir des informations aussi précises que possible sur le site. Toutefois, Pulseo AI ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive."
            },
            {
                heading: "5. Liens hypertextes",
                content: "Le site pulseoai.fr peut contenir des liens vers d'autres sites internet. Pulseo AI n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de protection des données."
            },
            {
                heading: "6. Droit applicable",
                content: "Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents."
            }
        ]
    },

    // Legal — Politique de Confidentialité
    confidentialite: {
        title: "Politique de Confidentialité",
        sections: [
            {
                heading: "1. Responsable du traitement",
                content: "Pulseo AI, dont le siège social est situé à Nantes, France, est responsable du traitement des données personnelles collectées sur le site pulseoai.fr."
            },
            {
                heading: "2. Données collectées",
                content: "Nous collectons uniquement les données que vous nous transmettez volontairement via notre formulaire de contact :<br>• Nom<br>• Adresse email professionnelle<br>• Besoin / message<br><br>Aucune donnée n'est collectée automatiquement à des fins de profilage."
            },
            {
                heading: "3. Finalité du traitement",
                content: "Les données collectées sont utilisées exclusivement pour :<br>• Répondre à vos demandes de contact et d'audit<br>• Vous recontacter dans le cadre d'une relation commerciale<br>• Améliorer nos services<br><br>Vos données ne sont jamais vendues, louées ou cédées à des tiers."
            },
            {
                heading: "4. Durée de conservation",
                content: "Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter de votre dernier contact avec Pulseo AI, conformément aux recommandations de la CNIL."
            },
            {
                heading: "5. Vos droits",
                content: "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :<br>• Droit d'accès à vos données<br>• Droit de rectification<br>• Droit de suppression<br>• Droit d'opposition au traitement<br>• Droit à la portabilité<br><br>Pour exercer ces droits, contactez-nous à : contact@pulseoai.fr"
            },
            {
                heading: "6. Cookies",
                content: "Le site pulseoai.fr n'utilise pas de cookies de traçage ou publicitaires. Seuls des cookies strictement nécessaires au fonctionnement du site peuvent être utilisés."
            },
            {
                heading: "7. Sécurité",
                content: "Pulseo AI met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction."
            },
            {
                heading: "8. Modification de cette politique",
                content: "Pulseo AI se réserve le droit de modifier la présente politique de confidentialité à tout moment. La version en vigueur est celle accessible sur le site pulseoai.fr."
            }
        ]
    },

    // Footer
    footer: {
        brand: "PULSEO AI",
        copyright: "© 2025 Pulseo AI. Tous droits réservés.",
        links: [
            { text: "Mentions Légales", href: "#", modal: "modal-mentions" },
            { text: "Confidentialité", href: "#", modal: "modal-confidentialite" }
        ],
        tagline: "L'IA qui travaille pendant que vous dirigez"
    }
};
