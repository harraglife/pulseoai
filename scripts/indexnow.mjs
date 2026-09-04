// Soumission IndexNow pour pulseoai.fr. Aucune dependance externe.
//
// Usage :
//   node scripts/indexnow.mjs                      -> toutes les URLs du sitemap
//   node scripts/indexnow.mjs https://... https://... -> uniquement celles-la
//
// IndexNow exige que host, keyLocation et les URLs soient sur le meme hote.

const HOST = "www.pulseoai.fr";
const KEY = "ad62b689cf0d4dbb8214ad4484d45c1c";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

/** Extrait le contenu de toutes les balises <loc> d'un XML. */
function extraireLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

/** Telecharge un XML en suivant les redirections. */
async function telecharger(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`Impossible de telecharger ${url} : HTTP ${res.status}`);
  }
  return res.text();
}

/**
 * Renvoie toutes les URLs de pages du sitemap.
 * Gere le cas d'un sitemap index (<sitemapindex>) qui pointe vers
 * plusieurs sitemaps : chacun est telecharge et ses <loc> sont agreges.
 */
async function urlsDuSitemap(url) {
  const xml = await telecharger(url);
  if (/<sitemapindex[\s>]/i.test(xml)) {
    const sousSitemaps = extraireLocs(xml);
    const listes = await Promise.all(sousSitemaps.map(urlsDuSitemap));
    return listes.flat();
  }
  return extraireLocs(xml);
}

async function main() {
  const args = process.argv.slice(2);
  let urlList;

  if (args.length > 0) {
    urlList = args;
  } else {
    urlList = await urlsDuSitemap(SITEMAP);
  }

  // dedoublonnage, en conservant l'ordre
  urlList = [...new Set(urlList)];

  if (urlList.length === 0) {
    console.error("Aucune URL a soumettre.");
    process.exit(1);
  }

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  console.log(`URLs envoyees : ${urlList.length}`);
  console.log(`Code HTTP     : ${res.status}`);

  if (res.status === 200 || res.status === 202) {
    console.log("Succes.");
    return;
  }

  const texte = await res.text();
  console.error("Echec. Reponse du serveur :");
  console.error(texte || "(corps vide)");
  process.exit(1);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
