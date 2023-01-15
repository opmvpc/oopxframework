# Langages de programmation

[[toc]]

## Présentation

Ce chapitre explore les différents types de langages de programmation et les paradigmes utilisés pour résoudre les problèmes informatiques. Nous examinerons l'évolution des langages de programmation, les avancées technologiques qui ont été faites au fil des ans et comment PHP s'inscrit dans cette histoire en utilisant les différents paradigmes de programmation.

## Langages et paradigmes de programmation

### Histoire des langages de programmation

Les premiers langages de programmation (assembler, FORTRAN, etc.) ont été créés dans les années 1950 pour faciliter la programmation des ordinateurs de l'époque. Ces langages étaient généralement proches de la machine (bas niveau) et difficiles à comprendre pour les développeurs. Dans les années 1960, LISP est apparu et est considéré comme le premier langage de programmation fonctionnel. Dans les années 1970, SQL a été créé pour faciliter la gestion des bases de données relationnelles et est considéré comme un langage déclaratif.

Au cours des années 1970 et 1980, de nouveaux langages de programmation ont été créés pour répondre aux besoins des utilisateurs et des développeurs. Les langages tels que C, Pascal et Smalltalk ont introduit des concepts de programmation plus avancés tels que la programmation orientée objet, la gestion de la mémoire et la gestion des exceptions, rendant la programmation plus facile et plus sûre.

Dans les années 1990, des langages orientés objet tels que Java, C++, Python et Ruby ont été créés pour faciliter la création de programmes modulaires et réutilisables. Ils ont également introduit des concepts tels que l'héritage, l'encapsulation et la polymorphisme.

### Les paradigmes de programmation

Un paradigme de programmation est une façon de structurer, de concevoir et d'écrire des programmes informatiques. Il est utilisé pour décrire les différentes façons de résoudre les problèmes informatiques en utilisant des concepts de programmation spécifiques.

- La programmation procédurale : La programmation procédurale se concentre sur l'écriture de séquences d'instructions pour résoudre un problème. Elle est basée sur la division en fonctions et procédures indépendantes. Les langages procéduraux incluent C, FORTRAN et COBOL.

  En utilisant le langage C, nous pouvons écrire une fonction qui prend en entrée une liste d'entiers et retourne la somme de tous les éléments de la liste. Par exemple :

  ```c
  int sum(int *list, int size) {
      int result = 0;
      for(int i = 0; i < size; i++) {
          result += list[i];
      }
      return result;
  }
  ```

- La programmation orientée objet se concentre sur l'utilisation de classes et d'objets pour résoudre un problème. Elle met l'accent sur la définition des données et des opérations sur ces données. Les langages orientés objet incluent Java, C++, Python, Ruby, C# et PHP.

  Par exemple, en utilisant le langage Java, nous pourrions écrire une classe List qui contient une méthode pour calculer la somme de tous les éléments de la liste.

  ```java
  class List {
      private int[] data;
      public int sum() {
          int result = 0;
          for(int i = 0; i < data.length; i++) {
              result += data[i];
          }
          return result;
      }
  }
  ```

- La programmation fonctionnelle se concentre sur l'utilisation de fonctions pour résoudre un problème. Elle met l'accent sur la manipulation de fonctions mathématiques pures, sans effet de bord, et sur la composition de fonctions. Les langages fonctionnels incluent Lisp, Haskell, Erlang, F# et Scala.

  Par exemple, en utilisant le langage Haskell, nous pourrions écrire une fonction qui utilise la réduction de liste pour calculer la somme de tous les éléments de la liste.

  ```haskell
  sum = foldl (+) 0
  ```

- La programmation déclarative se concentre sur la déclaration des règles pour résoudre un problème plutôt que sur la définition d'un processus pour le résoudre. Elle met l'accent sur les données et les relations entre elles. Les langages déclaratifs incluent SQL et Prolog.

  En utilisant le langage SQL, nous pourrions écrire une requête qui sélectionne la somme de tous les éléments d'une colonne dans une table.

  ```sql
  SELECT SUM(column) FROM table;
  ```

- La programmation logique se concentre sur la définition de règles logiques pour résoudre un problème. Elle met l'accent sur la manipulation de données sous forme de propositions logiques. Les langages de programmation logique incluent Prolog et Mercury.

  Par exemple, en utilisant le langage Prolog, nous pourrions écrire des règles qui décrivent la somme de tous les éléments d'une liste en utilisant la logique de déduction.

  ```prolog
  sum(List, Sum) :- sum(List, 0, Sum).
  sum([], Sum, Sum).
  sum([Head|Tail], Acc, Sum) :- NewAcc is Acc + Head, sum(Tail, NewAcc, Sum).
  ```

- Il est important de noter que les différents paradigmes de programmation peuvent être utilisés ensemble pour créer des programmes plus facilement, certains langages comme Oz, Python, Racket, Scala, peuvent intégrer plusieurs paradigmes.

  En utilisant le langage Oz, nous pourrions écrire une fonction qui prend en entrée une liste de nombres, et utilise la logique déclarative pour calculer la somme de tous les éléments de la liste.

  ```oz
  fun {SumList L}
      case L of nil then 0 [] H|T then H+{SumList T} end
  end
  ```

## Histoire de PHP

### Evolution de PHP

PHP (Personal Homepage Processor) a été créé en 1995 par Rasmus Lerdorf. Il a été initialement conçu pour générer des pages web dynamiques grâce à des scripts côté serveur. Au fil des ans, PHP a évolué et s'est enrichi de nouvelles fonctionnalités et améliorations. Les versions les plus importantes sont les suivantes :

- PHP Tools, FI, Construction Kit et PHP/FI : versions initiales de PHP
- PHP 3 : sortie en 1998, a introduit le support des objets et des classes. Le nom a changé pour PHP: Hypertext Preprocessor
- PHP 4 : sortie en 2000, a introduit le support des références et des exceptions
- PHP 5 : sortie en 2004, a introduit le support des namespaces, des interfaces, des traits, des générateurs, des expressions régulières, etc.
- PHP 5.3 et 5.4 : ont intégré certaines fonctionnalités de PHP 6, qui n'a jamais été publié
- PHP 7 : sortie en 2015, a introduit de nouvelles fonctionnalités telles que la gestion des erreurs, les performances améliorées et le support des types scalaires, le type de retour des variables, etc.
- PHP 8 : sortie en 2020, a introduit des fonctionnalités telles que les "Attributs", les expressions match, le JIT, etc.

Exemple de code PHP/FI :

```html
<!--include /text/header.html-->

<!--getenv HTTP_USER_AGENT-->
<!--ifsubstr $exec_result Mozilla-->

Hey, you are using Netscape!
<p>
  <!--endif-->

  <!--sql database select * from table where user='$username'-->
  <!--ifless $numentries 1-->

  Sorry, that record does not exist
</p>

<p>
  <!--endif exit-->

  Welcome
  <!--$user-->!
</p>

<p>
  You have
  <!--$index:0-->
  credits left in your account.
</p>
<p>
  <!--include /text/footer.html-->
</p>
```

Depuis PHP 7.0, les versions sont publiées chaque année. Si une nouvelle version introduit des changements incompatibles avec les versions précédentes, elle est marquée comme une version majeure (par exemple, PHP 9.0). Sinon, elle est marquée comme une version mineure (par exemple, PHP 8.3).

### Typage plus strict de PHP

Le typage plus strict offre de nombreux avantages aux développeurs PHP. Il permet de vérifier les types de données lors de l'écriture du code (analyse statique) ou à l'exécution, ce qui peut aider à détecter plus rapidement les erreurs de programmation. Cela peut également améliorer la lisibilité et la maintenance du code, car il est plus facile de comprendre ce qui est attendu en termes de types de données pour les arguments d'une fonction ou les propriétés d'une classe.

PHP 5 a introduit les "type hints" pour les arguments de fonctions, ce qui permet de préciser le type de données attendu pour un argument donné. Par exemple, vous pouvez utiliser un type hint pour indiquer que l'argument d'une fonction doit être un tableau :

```php
function maFonction(array $tableau) {
    // code
}
```

Cela permet de s'assurer que la fonction est appelée avec le type de données attendu, ce qui peut être très utile pour éviter les erreurs et les bugs.

Les versions de PHP 7 ont introduit les types de retour, ce qui permet de spécifier le type de données qui sera retourné par une fonction. Il a également ajouté les types d'unions pour spécifier plusieurs types de données possibles pour un argument ou une variable, ainsi que le typage des propriétés des classes.

Voici quelques exemples d'utilisation des types de retour et des types d'unions :

```php
function getFullName(string $firstName, string $lastName): string {
    return $firstName . ' ' . $lastName;
}

function getValue(int|float $value): int|float {
    return $value;
}

class User {
    public int $age;
}
```

### Comment PHP s'est construit

PHP est un projet open-source géré par la communauté. Il est développé par une équipe de développeurs bénévoles et soutenu par la Fondation PHP. Les modifications et les nouvelles fonctionnalités sont proposées sous forme de RFC (Requêtes pour Commentaires) et soumises à un vote de la communauté avant d'être intégrées à PHP. Les développeurs bénévoles sont encouragés à proposer des modifications et des nouvelles fonctionnalités, et leur contribution est très appréciée.

## Utilisations courantes de PHP

### Développement web

PHP est un langage de programmation très populaire pour le développement web. Il est souvent utilisé pour créer des sites web dynamiques qui nécessitent une interaction avec une base de données. Il peut être combiné avec des technologies telles que HTML, CSS et JavaScript pour créer des sites web interactifs. Il est également souvent utilisé avec un système de gestion de bases de données tel que MySQL pour gérer les données des utilisateurs, les produits, les commandes, etc.

De plus, PHP est couramment utilisé avec des frameworks tels que Laravel, Symfony, CodeIgniter, etc. pour faciliter le développement de sites web. Il est également utilisé pour créer des systèmes de gestion de contenu (CMS) tels que WordPress, Drupal, Joomla, etc. Ces systèmes permettent aux utilisateurs de gérer facilement le contenu de leur site web sans avoir besoin de connaissances en développement web.

### Comparaison avec d'autres langages

PHP est souvent comparé à d'autres langages de programmation tels que Python, Ruby et Node.js qui sont également utilisés pour le développement web.

Python est généralement considéré comme plus facile à apprendre pour les débutants, car il a une syntaxe plus simple et plus intuitive. Cependant, PHP est plus populaire pour le développement web en raison de sa prise en charge native des scripts côté serveur et de sa forte communauté de développeurs.

Ruby est également utilisé pour le développement web avec le framework Ruby on Rails, qui est très populaire pour créer des sites web dynamiques. Néanmoins, PHP est plus populaire pour le développement web compte tenu de sa prise en charge native des scripts côté serveur et de sa forte communauté de développeurs.

Node.js est un environnement d'exécution JavaScript côté serveur qui permet de développer des applications web hautement concurrentes et performantes.

PHP est également comparé à des langages tels que Java et C# qui sont utilisés pour le développement d'applications web, mais qui sont plus souvent utilisés pour le développement d'applications d'entreprise.

## Outils et bibliothèques

PHP est accompagné de nombreux outils et bibliothèques pour faciliter le développement web. Parmi ces outils, on trouve des frameworks tels que Laravel, Symfony, CodeIgniter et Zend qui fournissent des fonctionnalités couramment utilisées pour le développement web, telles que les routes, les contrôleurs, les modèles, les vues, l'authentification et l'accès à la base de données.

De plus, il existe des systèmes de gestion de contenu (CMS) tels que WordPress, Drupal et Joomla qui permettent aux utilisateurs de gérer facilement le contenu de leur site web sans avoir besoin de connaissances en développement web.

Enfin, il existe des bibliothèques populaires telles que PHPUnit pour les tests unitaires, Composer pour la gestion des dépendances, Guzzle pour les appels API, etc. qui aident les développeurs à écrire du code plus efficace et plus robuste.

### PHP Standards Recommendations (PSR)

Les PHP Standards Recommendations (PSR) sont des lignes directrices pour l'écriture de code PHP qui visent à améliorer la qualité et la lisibilité du code. Elles ont été développées par la communauté PHP pour promouvoir une meilleure pratique de développement et une meilleure collaboration entre les développeurs.

Il existe différents PSR couvrant divers aspects du développement web, tels que la gestion des erreurs, la gestion des dépendances, les règles de codage, les conventions de nommage, etc. En utilisant ces lignes directrices, les développeurs peuvent s'assurer que leur code est conforme aux meilleures pratiques et facile à comprendre pour les autres développeurs.

Les PHP Standards Recommendations (PSR) les plus importantes incluent :

- PSR-1: Basic Coding Standard, qui définit les règles de base pour l'écriture de code PHP.
- PSR-2: Coding Style Guide, qui définit les conventions de formatage de code pour PHP.
- PSR-3: Logger Interface, qui définit une interface commune pour les systèmes de journalisation.
- PSR-4: Autoloading Standard, qui définit les règles pour l'autoloading de classes en PHP.
- PSR-6: Caching Interface, qui définit une interface commune pour les systèmes de cache.
- PSR-7: HTTP Message Interface, qui définit une interface commune pour les objets de message HTTP.
- PSR-11: Container Interface, qui définit une interface commune pour les conteneurs d'injection de dépendance.

Lien: [https://www.php-fig.org/psr/](https://www.php-fig.org/psr/)

### Composer

Composer est un outil de gestion de dépendances pour PHP qui permet aux développeurs de gérer facilement les bibliothèques et les frameworks utilisés dans leur projet. Il utilise un fichier de configuration appelé `composer.json` pour décrire les dépendances de votre projet et un fichier `composer.lock` pour conserver l'état de ces dépendances.

Composer est devenu un outil standard pour la gestion de dépendances en PHP et est largement utilisé dans la communauté PHP pour les projets open-source et propriétaires. Il permet aux développeurs d'installer et de mettre à jour facilement les dépendances de leur projet, tout en garantissant que les versions utilisées sont compatibles entre elles.

| Langage | Gestionnaire de dépendances |
| ------- | --------------------------- |
| PHP     | Composer                    |
| Python  | pip                         |
| Ruby    | Gem                         |
| Node.js | npm                         |
| Java    | Maven, Gradle               |
| C#      | NuGet                       |

Lien: [https://getcomposer.org/](https://getcomposer.org/)

## Conclusion

PHP est un langage de programmation open-source très populaire pour le développement web. Il a évolué au fil des ans pour inclure des fonctionnalités modernes telles que la programmation orientée objet et un typage plus strict. Il est utilisé pour créer des sites web dynamiques et des systèmes de gestion de contenu, et est souvent combiné à des frameworks et des bibliothèques pour faciliter le développement.

PHP est accompagné de nombreux outils et bibliothèques pour faciliter le développement web, tels que les frameworks, les systèmes de gestion de contenu et les bibliothèques. Les PHP Standards Recommendations (PSR) et Composer sont des outils importants pour la communauté PHP qui permettent d'améliorer la qualité et la lisibilité du code.

En utilisant PHP et les outils associés, les développeurs peuvent créer des sites web performants et fiables pour répondre aux besoins des utilisateurs.
