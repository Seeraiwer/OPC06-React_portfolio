// Centralisation de toutes les données : textes, images et icônes dans un seul fichier
// Principe de séparation des responsabilités : modifier le contenu sans toucher à la logique des composants
// Les composants importent ce fichier et ne font que lire les données — ils ne les définissent pas

// import images
import Hero_person from "./assets/images/Hero/person.png";

import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import javascript from "./assets/images/Skills/javascript.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdOutlinePermContactCalendar } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SEE",
    LastName: "RAWIER",
    btnText: "Contactez-Moi",
    image: Hero_person,
    hero_content: [
      {
        count: "1",
        text: "an d'expérience de Web développeur",
      },
      {
        count: "100%",
        text: "Motivé",
      },
    ],
  },
  skills: {
    title: "Compétences",
    subtitle: "Mon top 5",
    skills_content: [
      {
        name: "HTML",
        para: "Maîtrise des balises et de la structure sémantique.",
        logo: html,
      },
      {
        name: "CSS",
        para: "Stylisation avancée, animations et responsive.",
        logo: css,
      },
      {
        name: "JavaScript",
        para: "Web interactif, manipulation du DOM, appels API et logique front-end.",
        logo: javascript,
      },
      {
        name: "React JS",
        para: "Interfaces utilisateurs dynamiques avec composants réutilisables.",
        logo: reactjs,
      },
      {
        name: "Node.js",
        para: "Exécution JavaScript côté serveur, idéal pour les API, services back-end et apps temps réel.",
        logo: nodejs,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "Champ d'action",
    service_content: [
      {
        title: "Fullstack",
        para: "Développement complet de sites et applications web, de l’interface utilisateur (frontend) à la logique serveur (backend).",
        logo: services_logo1,
      },
      {
        title: "Gestion d'équipes",
        para: "Expérience en coordination de développeurs, répartition des tâches, suivi des livrables et motivation collective dans des projets agiles.",
        logo: services_logo2,
      },
      {
        title: "Veille technologique",
        para: "Surveillance continue des tendances web, nouveaux frameworks, outils DevOps et bonnes pratiques pour rester à jour dans un secteur en constante évolution.",
        logo: services_logo3,
      },
    ],
  },
  projects: {
    title: "Projets",
    subtitle: "Mes Créations",
    image: person_project,
    project_content: [
      {
        title: "Site Bookie",
        image: project1,
        github: "https://github.com/Seeraiwer/OPC01-Bookie",
      },
      {
        title: "Application de location immobilière",
        image: project2,
        github: "https://github.com/Seeraiwer/OPC04-Kasa",
      },
      {
        title: "Portfolie Architecte",
        image: project3,
        github: "https://github.com/Seeraiwer/OPC02-Portfolio-architecte",
      },
    ],
  },
  Hireme: {
    title: "Contactez-moi",
    subtitle: "POUR TOUS VOS PROJETS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Pour vos projets web, besoins en encadrement technique ou suivi des dernières innovations, je vous propose un accompagnement complet, moderne et sur mesure.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contactez-moi",
    social_media: [
      {
        text: "seeraiwer@mail.com",
        icon: GrMail,
        link: "mailto:seeraiwer@mail.com",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
