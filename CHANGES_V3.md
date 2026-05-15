# CHANGES_V3

## 1. Liste des fichiers modifiés

- `src/app/layout.tsx`
- `src/components/blog-article-template.tsx`
- `src/lib/blog-posts.ts`
- `src/app/offre/page.tsx`

## 2. Détail des changements par chantier

### Chantier 1 — Schema global ProfessionalService

- Fusion du positionnement global autour d’un seul schema `ProfessionalService`
- Suppression du doublon `Organization` concurrent
- Ajout et enrichissement de :
  - `@id`
  - `alternateName`
  - `sameAs`
  - `foundingDate`
  - `hasOfferCatalog`
- Conservation des propriétés déjà présentes utiles :
  - `founder`
  - `foundingLocation`
  - `knowsAbout`
  - `serviceType`
  - `areaServed`
  - `address`
  - `logo`
  - `email`

### Chantier 2 — SpeakableSpecification sur les articles

- Enrichissement du schema `BlogPosting` dans le template d’article
- Ajout de :
  - `speakable`
  - `wordCount`
- Exposition safe du sélecteur `.quick-answer` sans modifier le composant dédié
- Ajout d’un support optionnel de `subsections` dans la structure des articles

### Chantier 3 — Meta description de /offre

- Renforcement de la `description`
- Alignement `OpenGraph` et `Twitter`
- Canonical conservé
- Aucun changement sur `/geo-hotellerie`, la meta description existante était déjà présente et distincte

### Chantier 4 — FAQ visible + FAQPage sur /offre

- Ajout d’une FAQ visible en bas de page
- Utilisation de `details/summary` natif
- Ajout d’un schema `FAQPage` strictement aligné avec les 6 questions/réponses visibles

### Chantier 5 — Structure H2/H3 sur l’article prioritaire

- Enrichissement de l’article `seo-geo-rendre-entreprise-visible-google-chatgpt-gemini`
- Ajout de sous-sections `H3` via la structure de données
- Aucun changement d’URL, de slug ou de sens éditorial

## 3. Résultat de npm run build

- `npm run build` : OK
- Build Next.js réussi
- Routes principales et techniques générées correctement, dont `/offre`, `/rss.xml` et `/sitemap.xml`

## 4. Résultat de npm run lint

- `npm run lint` : échec
- Cause : dette existante `react/no-unescaped-entities` dans plusieurs articles custom hors périmètre de cette passe
- Warning existant en plus sur `src/components/results-carousel.tsx` pour l’usage de `<img>`

## 5. Points non faits, s’il y en a, avec raison

- Aucune modification sur `/geo-hotellerie`, la meta description existante était déjà présente et suffisamment spécifique
- Aucune correction des erreurs `lint` anciennes dans les articles custom hors périmètre, pour éviter une refonte éditoriale non demandée
