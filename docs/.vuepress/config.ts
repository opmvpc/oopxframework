import { defaultTheme, defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { getDirname, path } from "@vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  lang: "fr-FR",
  title: "POO x Framework",
  description: "Cours de POO et Framework. PHP, Laravel.",
  head: [["link", { rel: "icon", href: "/img/ico.png" }]],
  locales: {
    "/": {
      lang: "fr-FR",
    },
  },
  theme: defaultTheme({
    logo: "/img/logo.png",
    lastUpdatedText: "Dernière mise à jour",
    contributors: false,
    backToHome: "Retour à l'accueil",
    notFound: [
      "Cette page n'existe pas",
      "Nous sommes désolés mais la page que vous recherchez n'existe pas.",
    ],
    locales: {
      "/": {
        selectLanguageName: "Français",
      },
    },
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
      {
        text: "Slides",
        link: "https://php.tsix.be/slides/",
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
            "/introduction/operateurs.md",
            "/introduction/structures-de-controle.md",
            "/introduction/les-chaines-de-caracteres.md",
            "/introduction/les-tableaux.md",
            "/introduction/fonctions-de-php.md",
            "/introduction/fonctions-utilisateurs.md",
            "/introduction/les-erreurs.md",
            // "/introduction/les-fichiers.md",
            // "/introduction/les-dates.md",
            // "/introduction/les-regex.md",
            // "/introduction/indice-de-type.md",
            "/introduction/exercices.md",
          ],
        },
      ],
      "/poo/": [
        {
          text: "POO",
          children: [
            "/poo/index.md",
            "/poo/langages.md",
            "/poo/modelisation.md",
            "/poo/classes.md",
            "/poo/heritage.md",
            "/poo/exercices.md",
          ],
        },
      ],
      "/framework/": [
        {
          text: "Framework",
          children: [
            "/framework/index.md",
            "/framework/mvc.md",
            "/framework/router.md",
            "/framework/blog.md",
            "/framework/twitter.md",
          ],
        },
      ],
    },
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Rechercher",
        },
      },
    }),
  ],
});
