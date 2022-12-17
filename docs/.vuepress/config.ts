import { defaultTheme, defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { getDirname, path } from "@vuepress/utils";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  lang: "fr-FR",
  title: "POO x Framework",
  description: "Cours de POO et Framework. PHP, Laravel.",
  locales: {
    "/": {
      lang: "fr-FR",
    },
  },
  theme: defaultTheme({
    lastUpdatedText: "Dernière mise à jour",
    contributorsText: "Contributeur",
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
        text: "Playground",
        link: "https://laravelplayground.com/#/snippets/810167a9-87e5-4fda-81c7-0c11d164b631",
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
            // "/introduction/fonctions-de-php.md",
            // "/introduction/les-chaines-de-caracteres.md",
            // "/introduction/nos-fonctions.md",
            // "/introduction/les-tableaux.md",
            // "/introduction/les-fichiers.md",
            // "/introduction/les-erreurs.md",
            // "/introduction/les-dates.md",
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
