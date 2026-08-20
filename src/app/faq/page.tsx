import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FaqJsonLd } from "@/components/json-ld";
import "@/styles/pages/faq.css";

export const metadata: Metadata = {
  title: "FAQ SEO / GEO",
  description:
    "Questions fréquentes sur le SEO, le GEO, la visibilité Google, ChatGPT et les moteurs IA. Comprenez comment PulseoAI aide les entreprises à être trouvées, citées et recommandées.",
  openGraph: {
    title: "FAQ SEO / GEO | PulseoAI",
    description:
      "Questions fréquentes sur le SEO, le GEO, la visibilité Google, ChatGPT et les moteurs IA. Comprenez comment PulseoAI aide les entreprises à être trouvées, citées et recommandées.",
    url: "https://www.pulseoai.fr/faq",
    siteName: "PulseoAI",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PulseoAI – FAQ SEO / GEO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ SEO / GEO | PulseoAI",
    description:
      "Questions fréquentes sur le SEO, le GEO, la visibilité Google, ChatGPT et les moteurs IA. Comprenez comment PulseoAI aide les entreprises à être trouvées, citées et recommandées.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/faq" },
};

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionData = {
  mark: string;
  title: string;
  markWord: string;
  intro?: string;
  items: FaqItem[];
};

const baseItems: FaqItem[] = [
  {
    question: "Qu’est-ce que le GEO ?",
    answer:
      "Le GEO, ou Generative Engine Optimization, consiste à optimiser la présence d’une entreprise pour qu’elle soit comprise, citée et recommandée dans les réponses générées par les moteurs IA comme ChatGPT, Gemini, Claude, Perplexity ou Google AI Overviews.",
  },
  {
    question: "Quelle est la différence entre SEO et GEO ?",
    answer:
      "Le SEO travaille votre visibilité dans les résultats de recherche classiques. Le GEO travaille votre présence dans les réponses générées par les IA. Le premier vous aide à être trouvé, le second à être cité.",
  },
  {
    question: "Le GEO remplace-t-il le SEO ?",
    answer:
      "Non. Le GEO s’appuie sur les fondations du SEO. Un site clair, bien structuré et crédible sur Google envoie aussi de meilleurs signaux aux moteurs IA. Les deux se travaillent ensemble.",
  },
  {
    question: "Pourquoi mon entreprise devrait-elle apparaître dans les réponses IA ?",
    answer:
      "Parce qu’une partie de vos clients pose désormais ses questions directement à une IA. Si votre marque n’est pas citée à ce moment-là, un concurrent capte la demande avant même que le clic n’existe.",
  },
  {
    question: "Est-ce que le GEO fonctionne pour toutes les entreprises ?",
    answer:
      "Oui, dès lors que vos clients se posent des questions avant d’acheter ou de vous contacter. PME, commerces, hôtels, e-commerce, cabinets et prestataires de services sont concernés.",
  },
];

const visibilityItems: FaqItem[] = [
  {
    question: "Comment apparaître dans ChatGPT ?",
    answer:
      "En rendant votre offre claire, vos contenus structurés, vos entités identifiables et vos sources fiables. Les modèles s’appuient sur ce qu’ils comprennent de vous et sur ce que d’autres sources disent de vous.",
  },
  {
    question: "Comment savoir si mon entreprise est citée par les IA ?",
    answer:
      "En testant les requêtes que vos clients posent réellement, puis en relevant les marques citées, les sources utilisées et la place que vous occupez. C’est exactement ce que fait un audit SEO / GEO.",
  },
  {
    question: "Peut-on forcer une IA à citer une marque ?",
    answer:
      "Non. Il n’existe pas d’astuce pour manipuler une réponse générée. On peut en revanche renforcer tous les signaux qui rendent une marque compréhensible, crédible et facile à recommander.",
  },
  {
    question: "Quelles sources les IA utilisent-elles ?",
    answer:
      "Votre site, vos contenus, vos fiches d’entreprise, les annuaires, les plateformes de votre secteur, les avis clients, la presse et les mentions externes. La cohérence entre ces sources compte autant que leur nombre.",
  },
  {
    question: "Le llms.txt sert-il vraiment à quelque chose ?",
    answer:
      "C’est une couche complémentaire, pas une solution miracle. Il aide à exposer proprement vos contenus clés, mais il ne remplace pas un site clair, structuré et crédible.",
  },
];

const auditItems: FaqItem[] = [
  {
    question: "Qu’est-ce qu’un audit SEO / GEO ?",
    answer:
      "C’est une analyse de votre visibilité actuelle sur Google et dans les moteurs IA : requêtes testées, présence ou absence de votre marque, concurrents cités, sources utilisées et priorités d’action.",
  },
  {
    question: "Combien de temps dure un audit ?",
    answer:
      "Le temps de tester vos requêtes stratégiques, d’analyser vos sources et de comparer votre présence à celle de vos concurrents. Vous recevez ensuite un document lisible avec des priorités claires.",
  },
  {
    question: "Que contient le rapport d’audit ?",
    answer:
      "Les requêtes testées, votre présence dans les réponses IA, les concurrents cités à votre place, les sources utilisées par les modèles, votre visibilité Google et un plan d’action priorisé.",
  },
  {
    question: "Faut-il refaire son site pour progresser ?",
    answer:
      "Rarement. La plupart du temps, il s’agit de clarifier les pages existantes, de structurer les contenus, de renforcer le balisage et de travailler les sources. Une refonte n’est proposée que si le site bloque réellement.",
  },
  {
    question: "Combien de temps faut-il pour voir les premiers signaux ?",
    answer:
      "Les premiers mouvements peuvent apparaître en quelques semaines, mais une progression solide se construit sur plusieurs mois de travail continu sur les contenus, les sources et le suivi.",
  },
];

const hospitalityItems: FaqItem[] = [
  {
    question: "Pourquoi le GEO est-il important pour les hôtels ?",
    answer:
      "Parce que les voyageurs demandent de plus en plus à une IA quel hôtel choisir. Une réponse générée ne cite que quelques établissements : y figurer change directement le volume de demandes reçues.",
  },
  {
    question: "Le GEO peut-il aider les réservations directes ?",
    answer:
      "L’objectif est d’orienter la demande vers votre site officiel plutôt que vers les plateformes. Plus votre hôtel est visible et crédible sur les requêtes à forte intention, plus vous réduisez votre dépendance aux OTA.",
  },
  {
    question: "Un petit hôtel indépendant peut-il faire du GEO ?",
    answer:
      "Oui. Les établissements indépendants se différencient en travaillant leurs contenus, leurs avis, leur Google Business Profile, leurs sources et leur présence locale.",
  },
  {
    question: "Quelles requêtes testez-vous pour un hôtel ?",
    answer:
      "Les requêtes réelles des voyageurs : spa et bien-être, séminaire et business, famille, localisation, haut de gamme et réservation directe, adaptées à votre ville et à votre positionnement.",
  },
  {
    question: "Travaillez-vous seulement avec les hôtels ?",
    answer:
      "Non. L’hôtellerie est un secteur historique de PulseoAI, mais la méthode s’applique aux PME, commerces, e-commerce, cabinets et prestataires de services.",
  },
];

const pulseoItems: FaqItem[] = [
  {
    question: "Comment se passe un accompagnement avec PulseoAI ?",
    answer:
      "Un audit initial, un plan d’action priorisé, une mise en place concrète sur vos pages et vos sources, puis un suivi mensuel qui montre ce qui a bougé et ce qui reste à faire.",
  },
  {
    question: "Que contient le suivi mensuel ?",
    answer:
      "Vos requêtes suivies, vos citations IA, les concurrents visibles à votre place, les sources utilisées par les modèles, les actions réalisées et la feuille de route du mois suivant.",
  },
  {
    question: "Faut-il un accès à mon site ?",
    answer:
      "Selon ce qui est mis en place. Certaines actions se font directement sur votre site, d’autres passent par vos sources externes, vos fiches et vos contenus.",
  },
  {
    question: "Travaillez-vous avec des entreprises hors de Nantes ?",
    answer:
      "Oui. PulseoAI accompagne des entreprises partout en France, ainsi qu’en Suisse et au Maroc. Le travail se fait à distance, avec des points réguliers.",
  },
  {
    question: "Promettez-vous une première place garantie ?",
    answer:
      "Non. Aucune agence sérieuse ne peut garantir une position dans Google ni une citation dans une réponse générée. Ce qui se pilote, c’est la qualité des signaux et la régularité du travail.",
  },
];

const agentItems: FaqItem[] = [
  {
    question: "Qu’est-ce qu’un agent IA en entreprise ?",
    answer:
      "Un agent IA est un programme qui exécute une tâche de bout en bout dans vos outils, sans qu’on ait besoin de lui parler. Il se déclenche sur un événement, une demande qui arrive, une échéance, un dossier qui change d’état. Il va chercher l’information là où elle se trouve, dans votre boîte mail, votre CRM ou votre base de données, puis il prépare ou exécute l’action. C’est la différence avec un assistant conversationnel, qui attend une question pour répondre.",
  },
  {
    question: "Quelle différence entre un agent IA et ChatGPT ?",
    answer:
      "ChatGPT répond quand vous lui écrivez. Un agent IA agit sans qu’on le sollicite. La différence n’est pas l’intelligence du modèle, c’est l’accès et le droit d’agir. Un agent est connecté à vos outils, il lit vos données réelles et il produit un résultat concret, un devis préparé, une relance envoyée, une demande qualifiée dans votre CRM. ChatGPT, lui, ne sait rien de votre entreprise tant que vous ne lui copiez pas les informations.",
  },
  {
    question: "Quelle différence entre un agent IA et une automatisation classique ?",
    answer:
      "Une automatisation classique suit une règle fixe, si ceci alors cela. Elle ne sait rien faire d’autre que ce qui a été prévu. Un agent IA comprend le contexte, interprète une demande formulée librement, et s’adapte aux cas particuliers. Concrètement, une automatisation peut envoyer un mail type à date fixe. Un agent peut lire la demande d’un client, comprendre ce qu’il veut, vérifier l’historique et rédiger une réponse adaptée à sa situation.",
  },
  {
    question: "Comment intégrer l’IA dans les process d’une entreprise ?",
    answer:
      "On commence par un seul cas, pas par une refonte globale. On identifie la tâche qui coûte le plus de temps et qui présente le moins de risque, on construit l’agent autour de vos outils existants, on le teste sur vos cas réels, puis on le met en production. Les autres agents viennent ensuite, une fois que le premier a fait ses preuves. Intégrer l’IA ne veut pas dire changer votre façon de travailler, mais retirer de votre quotidien ce qui n’a jamais eu besoin d’un humain.",
  },
  {
    question: "Quelles tâches peut-on automatiser avec un agent IA ?",
    answer:
      "Toutes les tâches répétitives qui reposent sur de l’information disponible dans vos outils. Les plus fréquentes chez les PME sont la relance des factures impayées, la qualification des demandes entrantes, la préparation de devis, le tri et le résumé de la boîte mail, la réponse de premier niveau au support client, la mise à jour de données entre plusieurs logiciels et la préparation de rapports. La règle est simple, si la tâche demande de lire, chercher, recouper et préparer, un agent sait la faire.",
  },
  {
    question: "Combien de temps faut-il pour mettre en place un agent IA ?",
    answer:
      "Comptez environ un mois entre le premier échange et un agent qui tourne réellement dans vos outils. Ce délai couvre le cadrage du cas d’usage, la construction, les tests sur vos données réelles et la mise en production. Le suivi, lui, ne s’arrête pas là, l’agent est maintenu et ajusté au fil du temps.",
  },
  {
    question: "Combien coûte un agent IA pour une PME ?",
    answer:
      "Le prix dépend du cas, du nombre d’outils à connecter et du niveau d’autonomie souhaité. Un agent qui trie et prépare n’a pas le même coût qu’un agent qui exécute des actions dans plusieurs logiciels. C’est justement l’objet du premier échange, cadrer le besoin réel avant de chiffrer. Le budget est fixé au départ et il ne bouge pas ensuite.",
  },
  {
    question: "Un agent IA peut-il se connecter à mon CRM et à mes outils ?",
    answer:
      "Oui. Un agent se branche sur les outils que vous utilisez déjà, messagerie, agenda, CRM, tableurs, outils de facturation, bases de données internes, messageries d’équipe. Le principe est justement de ne rien changer à votre environnement de travail. L’agent vient travailler dans vos outils, pas à côté.",
  },
  {
    question: "Mes données restent-elles confidentielles avec un agent IA ?",
    answer:
      "Oui. Vos données sont hébergées sur des serveurs sécurisés dont vous gardez le contrôle. Elles ne sont pas dispersées dans des outils tiers et vous savez à tout moment où elles se trouvent. La confidentialité est un point de cadrage traité dès le départ du projet, avant même la construction de l’agent.",
  },
  {
    question: "Que se passe-t-il si l’agent IA se trompe ?",
    answer:
      "On ne livre pas un agent tant qu’il n’est pas fiable. Il est testé sur vos cas réels avant d’entrer en production, et sur les actions sensibles il vous soumet ce qu’il a préparé au lieu de l’envoyer seul. Si quelque chose doit être ajusté, on le reprend jusqu’à ce que ce soit carré, sans surcoût par rapport au budget fixé au départ.",
  },
  {
    question: "Un agent IA remplace-t-il un salarié ?",
    answer:
      "Non. Un agent IA retire des tâches, pas des personnes. Ce qu’il prend en charge, ce sont les relances qu’on repousse, le tri qu’on fait le soir, la saisie que personne ne veut faire. Vos équipes récupèrent le temps qu’elles passaient sur ces tâches et le rendent au travail qui demande vraiment un humain, la relation client, la décision, le terrain.",
  },
  {
    question: "Une petite entreprise peut-elle utiliser des agents IA ?",
    answer:
      "Oui, et souvent avec plus d’impact qu’une grande. Dans une PME, le dirigeant fait lui-même les relances, les devis et le tri des mails. Chaque tâche retirée se voit immédiatement dans sa semaine. Il n’y a pas de taille minimale, il faut simplement une tâche répétitive et des outils dans lesquels l’information existe déjà.",
  },
  {
    question: "Par quel agent IA faut-il commencer ?",
    answer:
      "Par celui qui a le plus d’impact et le moins de risque. En pratique, c’est souvent une tâche qui revient chaque semaine, qui prend du temps et qui ne demande aucune expertise particulière, comme la relance des impayés ou la qualification des demandes entrantes. Le cadrage sert précisément à identifier ce premier cas plutôt que de tout automatiser d’un coup.",
  },
  {
    question: "Faut-il changer d’outils pour utiliser un agent IA ?",
    answer:
      "Non. Un agent se connecte à ce que vous avez déjà. Changer d’outils serait le meilleur moyen de faire échouer le projet, parce que la difficulté n’est jamais la technologie, c’est l’adoption par les équipes. L’agent s’adapte à votre environnement, pas l’inverse.",
  },
];

const pricingItems: FaqItem[] = [
  {
    question: "Combien coûte un accompagnement SEO / GEO ?",
    answer:
      "Le budget dépend de votre situation de départ, de votre marché et du volume de travail nécessaire sur vos pages, vos contenus et vos sources. Le cadrage sert à définir un périmètre clair avant tout chiffrage.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "Le SEO et le GEO se travaillent dans la durée. Un accompagnement de quelques mois permet de construire, mesurer et ajuster, plutôt que de lancer des actions sans suivi.",
  },
  {
    question: "Que se passe-t-il après l’audit ?",
    answer:
      "Vous repartez avec un plan d’action priorisé. Vous pouvez le mettre en œuvre vous-même ou nous confier le travail, selon vos ressources internes.",
  },
  {
    question: "Proposez-vous des prestations ponctuelles ?",
    answer:
      "L’audit peut être réalisé seul. Le reste du travail, contenus, balisage, sources et suivi, prend tout son sens dans un accompagnement continu.",
  },
];

const faqSections: FaqSectionData[] = [
  {
    title: "Comprendre le SEO / GEO en quelques questions.",
    markWord: "SEO / GEO",
    mark: "fq-m1",
    items: baseItems,
  },
  {
    title: "Être cité dans les réponses IA, ça se travaille.",
    markWord: "réponses IA",
    mark: "fq-m2",
    items: visibilityItems,
  },
  {
    title: "Mesurer avant d’optimiser.",
    markWord: "Mesurer",
    mark: "fq-m3",
    items: auditItems,
  },
  {
    title: "Questions fréquentes sur le GEO pour hôtels.",
    markWord: "GEO pour hôtels",
    mark: "fq-m4",
    items: hospitalityItems,
  },
  {
    title: "Agents IA et automatisation",
    markWord: "Agents IA",
    mark: "fq-m5",
    intro:
      "Ce que fait concrètement un agent IA dans une entreprise, ce qui le distingue d’un assistant comme ChatGPT, et comment se passe une mise en place.",
    items: agentItems,
  },
  {
    title: "Budget, durée et engagement.",
    markWord: "Budget",
    mark: "fq-m6",
    items: pricingItems,
  },
];

const pulseoCards = [
  {
    k: "fq-k1",
    title: "Audit initial",
    text: "Nous testons votre visibilité sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.",
  },
  {
    k: "fq-k2",
    title: "Plan d’action",
    text: "Nous identifions les pages, contenus, sources et requêtes prioritaires pour améliorer votre présence.",
  },
  {
    k: "fq-k3",
    title: "Mise en place",
    text: "Nous optimisons votre site, vos contenus et vos signaux pour aider les moteurs IA à mieux vous comprendre.",
  },
  {
    k: "fq-k4",
    title: "Suivi mensuel",
    text: "Nous suivons vos citations, vos concurrents, vos sources et l’évolution de votre visibilité.",
  },
];

const allFaqItems = [
  ...baseItems,
  ...visibilityItems,
  ...auditItems,
  ...hospitalityItems,
  ...pulseoItems,
  ...agentItems,
  ...pricingItems,
];

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.pulseoai.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: "https://www.pulseoai.fr/faq",
    },
  ],
};


function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="fq-list">
      {items.map((item) => (
        <details key={item.question}>
          <summary>
            <h3>{item.question}</h3>
            <span aria-hidden>+</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

/** Coupe le titre autour du mot a surligner, sans en modifier le texte. */
function MarkedTitle({ title, word, mark }: { title: string; word: string; mark: string }) {
  const i = title.indexOf(word);
  if (i < 0) return <>{title}</>;
  return (
    <>
      {title.slice(0, i)}
      <span className={`fq-m ${mark}`}>{word}</span>
      {title.slice(i + word.length)}
    </>
  );
}

function FaqSection({ mark, title, markWord, intro, items }: FaqSectionData) {
  return (
    <section className="fq">
      <div className="fq-inner">
        <h2>
          <MarkedTitle title={title} word={markWord} mark={mark} />
        </h2>
        {intro ? <p className="fq-lead">{intro}</p> : null}
      </div>
      <FaqAccordion items={items} />
    </section>
  );
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <FaqJsonLd items={allFaqItems} />

      {/* ---------------------------- HERO ---------------------------- */}
      <section className="fq fq-hero">
        <div className="fq-inner">
          <nav aria-label="Fil d'Ariane">
            <ol className="fq-crumb">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li className="fq-crumb-now">FAQ</li>
            </ol>
          </nav>

          <h1>
            Questions fréquentes sur le{" "}
            <span className="fq-m fq-m1">SEO, le GEO</span> et la{" "}
            <span className="fq-m fq-m2">visibilité IA</span>.
          </h1>

          <div className="fq-duo">
            <p className="fq-duo-1">
              Tout ce qu’il faut comprendre pour rendre votre entreprise visible sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews.
            </p>
            <p className="fq-duo-2">
              Des réponses simples, sans jargon, pour comprendre comment PulseoAI aide les entreprises à être trouvées, citées et recommandées.
            </p>
          </div>

          <div className="fq-chips">
            <span className="fq-chip">Google + IA</span>
            <span className="fq-chip">Prompts clients</span>
            <span className="fq-chip">Citations IA</span>
            <span className="fq-chip">Sources citées</span>
          </div>

          <div className="fq-cta">
            <Link href="/contact" className="fq-btn fq-btn-1">
              Obtenir un audit
            </Link>
            <Link href="/offre" className="fq-btn fq-btn-2">
              Découvrir notre offre
            </Link>
          </div>
        </div>
      </section>

      {faqSections.slice(0, 3).map((section) => (
        <FaqSection key={section.title} {...section} />
      ))}

      {/* --------------------- ACCOMPAGNEMENT PULSEOAI ----------------- */}
      <section className="fq">
        <div className="fq-inner">
          <h2>
            Comment PulseoAI accompagne votre{" "}
            <span className="fq-m fq-m7">visibilité SEO / GEO</span>.
          </h2>
        </div>

        <div className="fq-cards">
          {pulseoCards.map((card) => (
            <div key={card.title} className={`fq-card ${card.k}`}>
              <h3>
                <span>{card.title}</span>
              </h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <FaqAccordion items={pulseoItems} />
      </section>

      {faqSections.slice(3).map((section) => (
        <FaqSection key={section.title} {...section} />
      ))}

      {/* ----------------------------- CTA FINAL ----------------------- */}
      <section className="fq">
        <div className="fq-inner">
          <h2>
            Votre entreprise est-elle visible là où vos clients{" "}
            <span className="fq-m fq-m4">posent leurs questions</span> ?
          </h2>
          <p className="fq-lead">
            Nous analysons votre présence sur Google, ChatGPT, Gemini, Claude, Perplexity et Google AI Overviews, puis nous vous montrons les requêtes, les concurrents et les sources qui comptent.
          </p>

          <div className="fq-cta">
            <Link href="/contact" className="fq-btn fq-btn-1">
              Obtenir un audit
            </Link>
            <Link href="/offre" className="fq-btn fq-btn-2">
              Découvrir notre offre
            </Link>
          </div>
        </div>

        <div className="fq-form-head">
          <Image
            sizes="(max-width: 767px) 200px, 420px"
            src="/illustrations/VHl73R9s.png"
            alt="Mascotte lion qui invite à demander un audit"
            width={1536}
            height={1536}
            loading="lazy"
            className="fq-lion"
          />
        </div>

        <div className="fq-form-wrap">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
