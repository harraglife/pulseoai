const CONTENT = {
    // Navigation
    nav: {
        brand: "PULSEO AI",
        links: [
            { text: "Solutions", href: "#services" },
            { text: "Méthode", href: "#method" },
            { text: "Résultats", href: "#results" },
            { text: "FAQ", href: "#faq" }
        ],
        cta: { text: "Audit Offert", href: "#contact" }
    },

    // Hero Section
    hero: {
        badge: "Agence d'automatisation IA",
        titleLine1: "VOS PROCESS",
        titleLine2: "TOURNENT SANS VOUS.",
        description: "Pendant que vous gérez votre business, nos agents IA répondent à vos clients, qualifient vos prospects et exécutent vos tâches répétitives. 24h/24. Sans erreur. Sans recrutement.",
        ctaPrimary: { text: "Réserver votre audit offert", href: "#contact" },
        ctaSecondary: { text: "Découvrir nos solutions", href: "#services" },
        card: {
            stat: "+12h",
            label: "Récupérées par semaine en moyenne"
        }
    },

    // Trust Bar
    trust: {
        title: "Technologies de pointe utilisées par nos experts",
        logos: ["OpenAI", "Anthropic", "N8N", "Python", "Make"]
    },

    // Problem / Solution Section
    problem: {
        title: 'Chaque minute perdue sur une tâche répétitive vous coûte de <span class="text-blue-500">l\'argent.</span>',
        items: [
            {
                title: "Vos équipes sont noyées dans l'opérationnel",
                description: "Répondre aux emails, relancer les prospects, saisir des données — vos collaborateurs passent des heures sur des tâches qu'une IA peut faire en secondes."
            },
            {
                title: "Vous ratez des clients pendant que vous dormez",
                description: "Un prospect vous contacte à 22h. Personne ne répond. Il va chez votre concurrent. Sans automatisation, chaque heure de fermeture est une opportunité perdue."
            }
        ],
        solution: {
            title: "Ce que Pulseo AI change pour vous",
            quote: "\"Depuis qu'on a mis en place le réceptionniste IA, on ne rate plus un seul appel. Les rendez-vous se prennent tout seuls, même le dimanche.\"",
            stats: [
                { value: "0", label: "Compétence technique requise" },
                { value: "24/7", label: "Vos agents IA sont actifs" },
                { value: "100%", label: "Clé en main" }
            ]
        }
    },

    // Services Section
    services: {
        title: 'CE QUE NOUS <span class="text-blue-500">AUTOMATISONS</span>',
        subtitle: "Quatre expertises concrètes pour que votre entreprise tourne plus vite, avec moins d'effort.",
        items: [
            {
                title: "Prospection & Acquisition Client",
                description: "Vos prospects reçoivent des emails personnalisés par l'IA, vos leads sont qualifiés automatiquement et votre CRM se remplit pendant que vous vous concentrez sur la vente.",
                features: [
                    "Séquences emails personnalisées par IA",
                    "Qualification automatique de chaque lead",
                    "Synchronisation directe avec votre CRM"
                ],
                cta: "En savoir plus",
                size: "large"
            },
            {
                title: "Collecte & Enrichissement de Données",
                description: "On récupère, structure et enrichit toutes les données dont vous avez besoin pour prendre de meilleures décisions, plus vite.",
                terminal: [
                    "$ pulse_collect init...",
                    "> source: marché cible identifié",
                    "> 4 203 contacts extraits",
                    "> enrichissement: 100% terminé"
                ],
                size: "small"
            },
            {
                title: "Automatisation sur Mesure",
                description: "Même quand vos outils ne communiquent pas entre eux, on crée le lien. On automatise l'inautomatisable.",
                size: "small"
            },
            {
                title: "Agents IA & Réceptionnistes Virtuels",
                description: "Un agent IA qui répond à vos clients, prend les rendez-vous, qualifie les demandes et met à jour votre agenda. Disponible 24h/24 sur votre site, WhatsApp ou par téléphone.",
                tags: [
                    { text: "WhatsApp", color: "blue" },
                    { text: "Google Calendar", color: "purple" }
                ],
                chat: [
                    { text: "Bonjour, quand souhaitez-vous votre rendez-vous ?", type: "bot" },
                    { text: "Demain à 14h si possible.", type: "user" },
                    { text: "C'est noté. Confirmation envoyée par email.", type: "bot" }
                ],
                size: "large"
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
                title: "Audit & Diagnostic",
                description: "Nous analysons vos processus actuels et identifions exactement où l'automatisation vous fera gagner le plus de temps et d'argent.",
                color: "blue"
            },
            {
                number: "02",
                title: "Conception sur mesure",
                description: "Nos experts conçoivent votre solution : agents IA, workflows automatisés, intégrations — tout est pensé pour votre activité.",
                color: "purple"
            },
            {
                number: "03",
                title: "Déploiement & Formation",
                description: "On installe, on configure, on teste. Vous recevez une solution fonctionnelle et une formation pour la maîtriser immédiatement.",
                color: "cyan"
            },
            {
                number: "04",
                title: "Suivi & Optimisation",
                description: "Notre équipe reste disponible en continu. On surveille, on ajuste et on optimise vos automatisations pour des résultats toujours meilleurs.",
                color: "white"
            }
        ]
    },

    // Results / Stats Section
    results: [
        { value: "+12h", label: "Gagnées par semaine en moyenne" },
        { value: "24/7", label: "Vos agents IA ne dorment jamais" },
        { value: "98%", label: "Taux de satisfaction client" }
    ],

    // FAQ Section
    faq: {
        title: 'Vos <span class="text-blue-500">Questions</span>',
        items: [
            {
                question: "Je n'y connais rien en IA, c'est un problème ?",
                answer: "Pas du tout. C'est justement notre métier. Nous gérons tout de A à Z : conception, installation, formation. Vous n'avez rien de technique à faire. Vous recevez une solution clé en main qui fonctionne dès le premier jour."
            },
            {
                question: "Combien de temps avant de voir des résultats ?",
                answer: "Dès la mise en service, vos automatisations sont opérationnelles. Selon la complexité du projet, le déploiement prend entre 1 et 3 semaines. Les premiers gains de temps sont visibles immédiatement."
            },
            {
                question: "Est-ce que ça va remplacer mes employés ?",
                answer: "Non. L'objectif n'est pas de remplacer vos équipes mais de les libérer des tâches répétitives et sans valeur ajoutée. Vos collaborateurs se concentrent enfin sur ce qui fait vraiment avancer votre entreprise."
            },
            {
                question: "Mes données sont-elles protégées ?",
                answer: "La sécurité est non négociable. Toutes nos solutions respectent le RGPD. Vos données sont hébergées dans des environnements sécurisés et isolés. Aucune donnée n'est partagée avec des tiers."
            },
            {
                question: "Pourquoi ne pas utiliser ChatGPT nous-mêmes ?",
                answer: "ChatGPT est un outil généraliste. Ce que nous créons, ce sont des systèmes complets et interconnectés qui travaillent pour vous en permanence : ils répondent, trient, relancent, prennent des rendez-vous et alimentent vos outils — sans intervention humaine."
            },
            {
                question: "Que se passe-t-il après la livraison ?",
                answer: "Nous ne disparaissons pas après l'installation. Notre équipe assure un suivi continu : maintenance, optimisation, support. Vous avez une question à 23h ? Nous sommes là."
            }
        ]
    },

    // Contact / CTA Section
    contact: {
        title: 'Prêt à reprendre le contrôle de <span class="text-blue-400">votre temps ?</span>',
        description: "Réservez votre audit offert. En 30 minutes, nous identifions les tâches qui vous coûtent le plus cher et comment les automatiser.",
        email: "contact@pulseoai.fr",
        location: "France",
        form: {
            namePlaceholder: "Votre nom",
            emailPlaceholder: "Votre email professionnel",
            selectDefault: "Quel est votre besoin principal ?",
            selectOptions: [
                "Automatiser ma prospection",
                "Mettre en place un agent IA / chatbot",
                "Collecter et structurer des données",
                "Autre besoin / Je ne sais pas encore"
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
        title: "Pulseo AI — Automatisation IA pour entreprises en France",
        columns: [
            {
                heading: "Nos services d'automatisation",
                items: [
                    "Automatisation IA pour PME",
                    "Agent IA pour entreprise",
                    "Chatbot IA pour site web",
                    "Réceptionniste virtuel IA",
                    "Chatbot WhatsApp professionnel",
                    "Automatisation emailing",
                    "Prospection automatisée par IA",
                    "Scraping de données entreprise",
                    "Automatisation CRM",
                    "Prise de rendez-vous automatique"
                ]
            },
            {
                heading: "Solutions par secteur",
                items: [
                    "Automatisation pour hôtel",
                    "IA pour restaurant",
                    "Chatbot pour cabinet comptable",
                    "Agent IA pour agence immobilière",
                    "Automatisation pour commerce",
                    "IA pour artisan et TPE",
                    "Chatbot pour salon de coiffure",
                    "Automatisation pour garage auto",
                    "IA pour cabinet médical",
                    "Agent virtuel pour e-commerce"
                ]
            },
            {
                heading: "Cas d'usage IA",
                items: [
                    "Répondre aux emails automatiquement",
                    "Qualifier des leads par IA",
                    "Automatiser la prise de rendez-vous",
                    "Envoyer des relances automatiques",
                    "Créer un assistant virtuel",
                    "Automatiser le support client",
                    "Collecter des avis Google automatiquement",
                    "Enrichir une base de données clients",
                    "Automatiser la facturation",
                    "Connecter ses outils sans API"
                ]
            },
            {
                heading: "Recherches fréquentes",
                items: [
                    "Agence automatisation IA France",
                    "Faire automatiser ses process par l'IA",
                    "Intelligence artificielle pour PME",
                    "Gagner du temps avec l'IA",
                    "Remplacer les tâches répétitives par l'IA",
                    "Sous-traiter à l'IA",
                    "IA pour gagner des clients",
                    "Automatiser son business",
                    "Digitalisation PME par IA",
                    "Consultant IA pour entreprise"
                ]
            }
        ],
        description: "Pulseo AI est une agence française spécialisée dans l'automatisation par intelligence artificielle pour les PME, TPE et ETI. Nous concevons des agents IA, des chatbots sur mesure, des systèmes de prospection automatisée et des solutions d'automatisation de processus métier. Nos experts interviennent dans toute la France — Paris, Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille, Strasbourg et partout en remote — pour aider les dirigeants à gagner du temps, réduire leurs coûts opérationnels et se concentrer sur les tâches à forte valeur ajoutée. Technologies utilisées : OpenAI, Anthropic Claude, N8N, Make, Python, JavaScript. Secteurs accompagnés : hôtellerie, restauration, immobilier, comptabilité, commerce, artisanat, e-commerce, santé, services."
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
