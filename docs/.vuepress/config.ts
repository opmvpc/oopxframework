import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "fr-FR",
  title: "POO x Framework",
  description: "Cours de POO et Framework. PHP, Laravel.",
  theme: defaultTheme({
    navbar: [
      {
        text: "Accueil",
        link: "/",
      },
      {
        text: "Introduction",
        link: "/introduction/",
      },
      {
        text: "POO",
        link: "/poo/",
      },
      {
        text: "Framework",
        link: "/framework/",
      },
    ],
    sidebar: {
      "/introduction/": [
        {
          text: "Introduction",
          children: [
            "/introduction/index.md",
            "/introduction/syntaxe.md",
            "/introduction/variables.md",
            "/introduction/structures-de-controle.md",
            "/introduction/fonctions-de-php.md",
            "/introduction/les-chaines-de-caracteres.md",
            "/introduction/nos-fonctions.md",
            "/introduction/les-tableaux.md",
            "/introduction/les-fichiers.md",
            "/introduction/les-erreurs.md",
            "/introduction/les-dates.md",
          ],
        },
      ],
    },
  }),
});
