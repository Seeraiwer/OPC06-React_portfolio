![screen](/src/assets/images/Readme/screen.png)

# Portfolio React

Petit portfolio construit avec Vite, React et TailwindCSS — conçu pour être facile à personnaliser.

## Qu'est-ce que ce projet ?
- Site portfolio statique avec sections standards (Hero, Services, Projets, Contact).
- Formulaire de contact via `mailto:` (ouvre le client mail), animations AOS et carrousel Swiper.

## Prérequis
- Node.js (version 16+ recommandée)
- npm ou pnpm

## Installation (très simple)
1. Installer les dépendances :

```bash
npm install
```

2. Lancer le serveur de développement :

```bash
npm run dev
```

Ouvrez ensuite l'adresse indiquée par Vite (généralement http://localhost:5173).

## Personnaliser le site
- Contenu (textes, liens, images) : modifier `src/Content.js`.
- Composants : voir `src/components/` pour les sections (Hero, Services, Projects, Contact...).
- Images : placer vos images dans `src/assets/images/` et ajuster les chemins.
- Styles : personnaliser Tailwind via `tailwind.config.cjs` et `src/index.css`.

## Formulaire de contact
Le formulaire utilise un lien `mailto:` : au clic sur "Envoyer", le client mail de l'utilisateur s'ouvre avec le nom, l'adresse et le message pré-remplis. Aucune configuration ni dépendance externe requise.

## Commandes utiles
- `npm run dev` — développement
- `npm run build` — build de production (dossier `dist`)
- `npm run preview` — prévisualiser le build localement

```bash
npm run build
```
