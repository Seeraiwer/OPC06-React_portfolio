![screen](/src/assets/images/Readme/screen.png)

# React Portfolio 2
### Vite + React + tailwind

![screen](/src/assets/images/Readme/screen.png)

# React Portfolio 2
Vite + React + TailwindCSS

## Description
Petit portfolio construit avec Vite, React et TailwindCSS. Inclut un formulaire de contact utilisant EmailJS, des animations AOS et un carrousel Swiper.

## Prérequis
- Node.js (version 16+ recommandée)
- npm ou pnpm

## Installation (très simple)
1. Copier l'exemple d'environnement :

```bash
cp env.example .env
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur de développement :

```bash
npm run dev
```

Ouvrez ensuite l'adresse indiquée par Vite (généralement http://localhost:5173).

## Personnaliser le site
- Contenu (textes, liens, images) : modifier `src/Content.js`.
- Composants : voir `src/components/` pour les sections (Hero, Services, Projects, Contact...).
- Images : placer vos images dans `src/assets/images/` et ajuster les chemins.
- Styles : personnaliser Tailwind via `tailwind.config.cjs` et `src/index.css`.

## Formulaire de contact (EmailJS)
1. Créez un compte sur https://www.emailjs.com/ et configurez un service et un template.
2. Remplissez le fichier `.env` (copié depuis `env.example`) avec :
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Remarque : ces variables sont exposées côté client (préfixées `VITE_`). N'y stockez pas de secrets sensibles.

## Remarques
- Exemple d'utilisation d'EmailJS : les identifiants sont lus depuis `import.meta.env`.
- Si vous souhaitez une revue de dépendances (mises à jour / vulnérabilités), je peux vérifier les versions et proposer des mises à jour.

---

Merci d'avoir utilisé ce projet — dites-moi si vous voulez que j'ajoute des badges, tests ou CI.



