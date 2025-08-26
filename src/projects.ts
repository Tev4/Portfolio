// src/projects.ts
export interface Project {
  id: string;
  title: string;
  homeTitle: boolean;
  subtitle?: string;
  techStack: string[];
  description: string;
  directLink?: string;
  githubLink?: string;
  itchioLink?: string;
}

export const projects: Project[] = [
  {
    id: "scuffedify",
    title: "Scuffedify",
    homeTitle: true,
    subtitle: "Copie des fonctionnalités de Spotify",
    techStack: ["React", "TypeScript", "Bootstrap", "HTML", "CSS"],
    description:
      "J'ai développé ce site web dans le cadre de mon Bachelor Développeur Web, celui ci est développé en React avec Redux et est directement lié à l'API officielle de Spotify. Il faut posséder un compte Spotify premium pour avoir accès aux fonctionnalités.",

    githubLink: "https://github.com/Tev4/scuffedify",
  },
  {
    id: "cigecfrais_web",
    title: "Cigecfrais: Web",
    homeTitle: true,
    subtitle: "Interface Web de gestion de frais",
    techStack: ["PHP", "Bootstrap", "HTML", "CSS"],
    description:
      "J'ai développé cette interface web sur Visual Studio Code en PHP / HTML / CSS / JS / SQL. C'était le projet de fin d'études pour mon BTS, j'ai créé cette interface pour numériser la gestion des frais de l'entreprise CIGEC et les aider à transitionner vers le numérique.",
    githubLink: "https://github.com/Tev4/ServeurCigec",
  },
  {
    id: "cigecfrais_mobile",
    title: "Cigecfrais: Mobile",
    homeTitle: true,
    subtitle: "Application mobile de gestion de frais",
    techStack: ["React Native", "TypeScript", "Expo"],
    description:
      "J'ai développé cette application android en JS / React native avec le framework Expo. C'était la partie du travail pour Cigec que j'ai réalisé pendant mon stage en deuxième année de BTS, cette application mobile permet aux employés de CIGEC d'envoyer leurs notes de frais à l'entreprise avec des photos pour prouver la validité des données.",
  },
  {
    id: "encrypTed",
    title: "encrypTed",
    homeTitle: false,
    subtitle: "Outil sécurisé de chiffrement de messages",
    techStack: ["Python"],
    description:
      "Ce script permet de chiffrer n'importe quel message pour qu'il soit complètement illisible, les détails sont disponibles sur le dépôt Github",
    githubLink: "https://github.com/Tev4/encrypTed",
  },
  {
    id: "wizard_defender",
    title: "Wizard Defender",
    homeTitle: true,
    subtitle: "Jeu-vidéo d'arcade",
    techStack: ["Processing", "Java"],
    description: "",
  },
  {
    id: "coureur_gps",
    title: "Coureur GPS",
    homeTitle: true,
    subtitle: "Application de tracking en direct pour coureurs de marathon.",
    techStack: ["Qt", "C++"],
    description:
      "Cette application Windows a été réalisée avec l'outil Qt. Celle ci reçoit des trames provenant d'un serveur Python pour simuler la course (Vous pouvez les voir en bas à droite). Ensuite les données sont lues et interprétées pour mettre à jour tout les champs en temps réel et tracer le parcours du coureur.",
    githubLink: "https://github.com/Tev4/ExempleRealisationQt",
  },
];
