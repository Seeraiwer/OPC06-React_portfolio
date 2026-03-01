![screen](/src/assets/images/Readme/screen.png)

# React Portfolio 2
### Vite + React + tailwind

![screen](/src/assets/images/Readme/screen.png)

# React Portfolio 2
Vite + React + TailwindCSS

## Description
Petit portfolio construit avec Vite, React et TailwindCSS. Inclut un formulaire de contact utilisant EmailJS, des animations AOS et un carrousel Swiper.

## Prérequis
- Node.js >= 16
- npm ou pnpm

## Installation
1. Copier l'exemple d'env :

```bash
cp env.example .env
```

2. Installer les dépendances :

```bash
npm install
# ou: pnpm install
```

3. Lancer le serveur de développement :

```bash
npm run dev
```

## Variables d'environnement
Créer un fichier `.env` à la racine (ne pas committer). Exemple (voir `env.example`):

- `VITE_EMAILJS_SERVICE_ID` — identifiant service EmailJS
- `VITE_EMAILJS_TEMPLATE_ID` — identifiant template EmailJS
- `VITE_EMAILJS_PUBLIC_KEY` — clé publique EmailJS

Remarque : seules les variables préfixées par `VITE_` sont embarquées côté client. Ne mettez pas de secrets privés dans ce format.

## Scripts utiles
- `npm run dev` : démarre l'app en mode développement
- `npm run build` : build de production
- `npm run preview` : prévisualiser le build localement

## Dépendances principales
- `react`, `react-dom` — UI
- `vite` — bundler/dev server
- `tailwindcss`, `postcss`, `autoprefixer` — styles
- `@emailjs/browser` — envoi d'emails côté client
- `swiper`, `aos` — UI/animations

## Sécurité et bonnes pratiques
- Ne commitez jamais `.env` contenant des clés. Utilisez `env.example` comme modèle.
- EmailJS utilise une clé publique côté client — évitez d'y mettre des informations sensibles.
- Les liens externes ouverts avec `target="_blank"` incluent `rel="noopener noreferrer"` pour mitiguer le risque de tabnabbing (déjà en place).
- Évitez d'évaluer du code dynamique (`eval`) ou d'insérer du HTML non-sanitized dans le DOM. Le projet n'utilise pas `dangerouslySetInnerHTML`.
- Pour la production, configurez un en-tête CSP côté serveur si possible.

## Accessibilité
- Les icônes du portfolio utilisent `aria-hidden` et les liens ont `aria-label` pour améliorer l'accessibilité.

## Remarques
- Exemple d'utilisation d'EmailJS : les identifiants sont lus depuis `import.meta.env`.
- Si vous souhaitez une revue de dépendances (mises à jour / vulnérabilités), je peux vérifier les versions et proposer des mises à jour.

---

Merci d'avoir utilisé ce projet — dites-moi si vous voulez que j'ajoute des badges, tests ou CI.



