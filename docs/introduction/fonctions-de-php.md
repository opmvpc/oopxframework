# Les fonctions de PHP

[[toc]]

Les fonctions de base disponibles avec PHP sont des outils pratiques qui permettent de réaliser des tâches courantes de manière simple et efficace.

## À quoi peuvent-elles servir ?

- Traiter des chaînes de caractères : par exemple, la fonction "strtolower" permet de convertir une chaîne de caractères en minuscules, tandis que la fonction "ucfirst" met en majuscule le premier caractère d'une chaîne.

```php
echo strtolower("HELLO WORLD"); // hello world
echo ucfirst("hello world"); // Hello world
```

- Traiter des nombres : par exemple, la fonction "round" permet d'arrondir un nombre, tandis que la fonction "rand" retourne un nombre aléatoire.

```php
echo round(3.14159); // 3
echo rand(1, 10); // 5
```

- Manipuler des tableaux : par exemple, la fonction "array_sum" permet de calculer la somme des éléments d'un tableau, tandis que la fonction "array_diff" retourne les éléments présents dans un tableau qui ne sont pas présents dans un autre tableau.

```php
echo array_sum([1, 2, 3, 4, 5]); // 15
print_r(array_diff([1, 2, 3], [2, 3, 4])); // Array ( [0] => 1 )
```

- Traiter des dates et des heures : par exemple, la fonction "date" permet de récupérer la date et l'heure courantes au format choisi, tandis que la fonction "strtotime" permet de convertir une chaîne de caractères représentant une date en un timestamp (nombre de secondes écoulées depuis le 1er janvier 1970).

```php
echo date("d/m/Y"); // 01/01/2020 mais à la date du jour
echo strtotime("2020-01-01"); // 1577836800
```

Voici quelques exemples de fonctions plus avancées disponibles :

- Fonctions de gestion de fichiers : par exemple, la fonction "file_get_contents" permet de lire le contenu d'un fichier, tandis que la fonction "file_put_contents" permet d'écrire du contenu dans un fichier.

```php
echo file_get_contents("hello.txt"); // Hello World
file_put_contents("hello.txt", "Hello World");
```

- Fonctions de gestion de bases de données : par exemple, la fonction "mysqli_query" permet d'exécuter une requête SQL sur une base de données MySQL, tandis que la fonction "PDO::query" permet de faire de même sur une base de données utilisant le driver PDO.

```php
$mysqli = mysqli_connect(
    "localhost",
    "username",
    "password",
    "database"
);
$mysqli->query("SELECT * FROM users");

$pdo = new PDO(
    "mysql:host=localhost;dbname=database",
    "username",
    "password"
);
$pdo->query("SELECT * FROM users");
```

- Fonctions de gestion de sessions : par exemple, la fonction "session_start" permet de démarrer une session, tandis que la fonction "session_destroy" permet de la détruire.

```php
session_start();
session_destroy();
```

- Fonctions de gestion de emails : par exemple, la fonction "mail" permet d'envoyer un email, tandis que la fonction "imap_open" permet de se connecter à un serveur de messagerie et de récupérer les emails stockés sur celui-ci.

```php
isSent = mail(
    to: "test@gmail.com",
    subject: "Hello World",
    message: "Hello World"
);

$inbox = imap_open(
    "{imap.gmail.com:993/imap/ssl}INBOX",
    "username",
    "password"
);
```

## Où les trouver ?

Vous pouvez trouver la liste complète des fonctions de base dans la documentation officielle de PHP, disponible sur le site web suivant : [https://www.php.net/manual/fr/indexes.functions.php](https://www.php.net/manual/fr/indexes.functions.php). Cette liste comportent presque 9000 fonctions, ce qui peut être un peu intimidant au premier abord. Cela fait aussi de PHP une language très riche et très puissant.

Pour accéder à la documentation d'une fonction particulière, il vous suffit de cliquer sur le lien correspondant dans la liste des fonctions ou de saisir le nom de la fonction dans la barre de recherche en haut à droite de la page.

La documentation de chaque fonction indique son nom, sa syntaxe, sa description et son exemple d'utilisation. Elle précise également les valeurs renvoyées par la fonction et les éventuelles erreurs qui peuvent survenir lors de son utilisation.

Il est également possible de trouver des tutoriels et des exemples d'utilisation des fonctions de PHP sur différents sites web et forums dédiés au développement web. Ces ressources peuvent être particulièrement utiles pour comprendre comment utiliser les fonctions de manière concrète dans le cadre de vos projets de développement.

## Comment lire la documentation ?

Les informations suivantes sont disponibles dans la documentation de chaque fonction :

- **Paramètres** : la documentation de chaque fonction indique la liste des paramètres qu'elle attend en entrée. Par exemple, la fonction "str_replace" prend trois paramètres : la chaîne de caractères à rechercher, la chaîne de caractères de remplacement et la chaîne de caractères dans laquelle effectuer la recherche.

- **Paramètres facultatifs** : certains paramètres peuvent être optionnels et ne pas être obligatoirement fournis lors de l'appel de la fonction. Par exemple, la fonction "date" prend un paramètre facultatif qui indique le format de la date à renvoyer. Si ce paramètre n'est pas fourni, la fonction renvoie la date au format par défaut.

- **Type de retour** : la documentation de chaque fonction indique le type de données qu'elle renvoie. Par exemple, la fonction "strtoupper" renvoie une chaîne de caractères en majuscules, tandis que la fonction "array_sum" renvoie un nombre entier représentant la somme des éléments d'un tableau.

- **Flags** : certains paramètres peuvent être des "flags", c'est-à-dire des valeurs qui activent ou désactivent certaines options de la fonction. Par exemple, la fonction "htmlspecialchars" prend un flag qui indique si les caractères spéciaux doivent être convertis ou non en entités HTML.

Vous trouverez aussi dans la documentation de chaque fonction des exemples d'utilisation.

Voici un exemple de documentation de la fonction `str_replace` ([https://www.php.net/manual/fr/function.str-replace.php](https://www.php.net/manual/fr/function.str-replace.php)) :

```php
 str_replace(
    array|string $search,
    array|string $replace,
    string|array $subject,
    int &$count = null
): string|array
```

- `$search` : chaîne de caractères à rechercher ou tableau de chaînes de caractères à rechercher
- `$replace` : chaîne de caractères de remplacement ou tableau de chaînes de caractères de remplacement
- `$subject` : chaîne de caractères ou tableau de chaînes de caractères dans laquelle effectuer la recherche
- `$count` (optionnel) : référence à un entier qui sera rempli avec le nombre de remplacements effectués

`Retourne` : chaîne de caractères avec les remplacements effectués

Cette fonction remplace toutes les occurrences de la chaîne de caractères `$search` par la chaîne de caractères `$replace` dans la chaîne de caractères `$subject`. Si `$search` et `$replace` sont des tableaux, tous les éléments de `$search` sont remplacés par les éléments de `$replace` ayant le même index. Si `$replace` a moins d'éléments que `$search`, les éléments de $replace ayant un index supérieur à celui de la dernière occurrence de `$search` sont ignorés.
