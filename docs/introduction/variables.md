# Les variables

[[toc]]

Une variable est un conteneur pour stocker une valeur de n'importe quel type, comme un nombre entier, un nombre à virgule flottante, une chaîne de caractères, un tableau, etc.

Pour déclarer une variable en PHP, vous devez utiliser le signe dollar `$` suivi du nom de la variable. Le nom de la variable doit commencer par une lettre ou un underscore `_`, suivi de tout nombre de lettres, de chiffres ou d'underscores.

Voici des exemples de déclaration de variables en PHP :

```php
$isAdmin = true;
$age = 25;
$price = 49.99;
$firstName = 'John';
$items = ['item1', 'item2', 'item3'];
```

Il est important de noter que les noms de variables en PHP sont sensibles à la casse, c'est-à-dire que `$name` et `$NAME` sont considérés comme deux variables différentes. De plus, les noms de variables ne peuvent pas commencer par un chiffre.
Il est recommandé de nommer les variables en utilisant le camelCase, c'est-à-dire en commençant par une lettre minuscule et en mettant une majuscule à chaque mot suivant.

## Types de variables

En PHP, il y a plusieurs grands types de variables :

- Les variables scalaires, qui contiennent une valeur simple
- Les constantes, qui contiennent une valeur simple et qui ne peuvent pas être modifiées
- Les variables de tableaux, qui contiennent un tableau de valeurs
- Les variables de ressources, qui contiennent une ressource externe
- Les variables d'objets, qui contiennent une instance d'une classe
- et d'autres que l'ont verra plus tard

[Documentation officielle](https://www.php.net/manual/fr/language.types.php)

### Variables scalaires

En PHP, il existe quatre types de variables scalaires, c'est-à-dire qui ne sont pas des tableaux ou des objets :

- **integer** (entier) : pour stocker des nombres entiers, tels que `-1`, `0`, `1`, `2`, etc.

- **float** (nombre à virgule flottante) : pour stocker des nombres à virgule flottante, tels que `3.14`, `-2.718`, etc.

- **string** (chaîne de caractères) : pour stocker des chaînes de caractères, c'est-à-dire des séquences de lettres, de chiffres et de symboles, entourées de "guillemets" ou de 'simples quotes'.

- **boolean** (booléen) : pour stocker des valeurs booléennes, c'est-à-dire `true` (vrai) ou `false` (faux).

Voici quelques exemples de déclaration de variables de chaque type :

```php
$age = 25; // integer
$price = 49.99; // float
$firstName = 'John'; // string
$isAdmin = true; // boolean
```

Il est important de noter que le type de variable en PHP est déterminé automatiquement en fonction de la valeur qui lui est affectée. Par exemple, si vous affectez la chaîne `'25'` à une variable, elle sera considérée comme une chaîne de caractères, même si elle contient un nombre. Si vous souhaitez forcer un type de variable, vous pouvez utiliser les fonctions de type correspondantes, telles que `intval()`, `floatval()` et `strval()`.

Voici un exemple d'utilisation de ces fonctions :

```php
$age = '25';
$age = intval($age); // $age est maintenant un entier

$price = '49.99';
$price = floatval($price); // $price est maintenant un nombre à virgule flottante

$name = 25;
$name = strval($name); // $name est maintenant une chaîne de caractères
```

### Constantes

En PHP, une constante est une valeur qui ne peut pas être modifiée une fois qu'elle a été définie. Les constantes sont utiles pour stocker des valeurs qui ne doivent pas être modifiées au cours de l'exécution du script, comme des valeurs de configuration ou des constantes mathématiques.

Pour déclarer une constante en PHP, vous devez utiliser la fonction define(). Voici un exemple de déclaration de constante :

```php
define('PI', 3.14);
```

La première argument de define() est le nom de la constante, qui doit être une chaîne de caractères. La seconde argument est la valeur de la constante.

Une fois que vous avez déclaré une constante, vous pouvez l'utiliser comme une variable normale en utilisant son nom, mais vous ne pouvez pas lui affecter une nouvelle valeur. Si vous essayez de le faire, vous obtiendrez une erreur.

Voici un exemple d'utilisation de constante :

```php
echo PI; // affiche 3.14

// Génère une erreur car vous ne pouvez pas réaffecter une valeur à une constante
PI = 3.14159;
```

Il est important de noter que les constantes en PHP sont sensibles à la casse, c'est-à-dire que PI et pi sont considérés comme deux constantes différentes. En général, il est recommandé de suivre les conventions de codage qui consiste à utiliser des majuscules et des underscores pour séparer les mots dans les noms de constantes, comme dans MAX_VALUE ou MIN_PRICE.

Vous pouvez également utiliser la fonction defined() pour vérifier si une constante est définie, comme dans cet exemple :

```php
if (defined('PI')) {
  echo "La constante PI est définie";
} else {
  echo "La constante PI n'est pas définie";
}
```

### Tableaux

En PHP, un tableau est une variable qui peut stocker plusieurs valeurs de n'importe quel type, organisées sous forme de liste indexée. Vous pouvez accéder à chaque valeur du tableau en utilisant l'index de l'élément, qui est un entier commençant à 0 pour le premier élément.

Pour déclarer un tableau en PHP, vous pouvez utiliser la fonction `array()` ou la syntaxe short-hand `[]` (je préfères que vous utilisiez la deuxième notation). Voici quelques exemples de déclaration de tableaux en PHP :

```php
$items = array('item1', 'item2', 'item3'); // contenu: ['item1', 'item2', 'item3']
$prices = [49.99, 29.99, 39.99]; // contenu: [49.99, 29.99, 39.99]
$mixed = ['item1', 2, 3.14, false]; // contenu: ['item1', 2, 3.14, false]
```

Vous pouvez également déclarer un tableau vide en utilisant la syntaxe `array()` ou `[]`, puis ajouter des éléments ultérieurement en utilisant l'opérateur de décalage `[]`. Voici un exemple :

```php
$items = array(); // contenu: []
$items[] = 'item1'; // contenu: ['item1']
$items[] = 'item2'; // contenu: ['item1', 'item2']
$items[] = 'item3'; // contenu: ['item1', 'item2', 'item3']


// ou

$items = []; // contenu: []
$items[] = 'item1'; // contenu: ['item1']
$items[] = 'item2'; // contenu: ['item1', 'item2']
$items[] = 'item3'; // contenu: ['item1', 'item2', 'item3']
```

Vous pouvez accéder à un élément du tableau en utilisant son index entre crochets, comme dans cet exemple :

```php
echo $items[0]; // affiche 'item1'
echo $items[1]; // affiche 'item2'
echo $items[2]; // affiche 'item3'
```

Vous pouvez également utiliser une boucle foreach pour parcourir tous les éléments du tableau :

```php
$items = ['item1', 'item2', 'item3'];
foreach ($items as $item) {
  echo $item;
}
// affiche 'item1item2item3'
```

Il est important de noter que les tableaux en PHP peuvent également être associatifs, c'est-à-dire qu'ils peuvent utiliser n'importe quelle chaîne de caractères comme index au lieu d'un entier. Voici un exemple de déclaration de tableau associatif :

```php
$prices = array(
  'item1' => 49.99,
  'item2' => 29.99,
  'item3' => 39.99
);

// contenu: [
//   'item1' => 49.99,
//   'item2' => 29.99,
//   'item3' => 39.99
// ]
```

Vous pouvez accéder à un élément du tableau associatif en utilisant sa clé entre crochets, comme dans cet exemple :

```php
echo $prices['item1']; // affiche 49.99
echo $prices['item2']; // affiche 29.99
echo $prices['item3']; // affiche 39.99
```

Vous pouvez également utiliser une boucle foreach pour parcourir tous les éléments du tableau associatif :

```php
$prices = [
  'item1' => 49.99,
  'item2' => 29.99,
  'item3' => 39.99
];
foreach ($prices as $key => $value) {
  echo $key . " : " . $value . "\n";
}
// affiche :
// item1 : 49.99
// item2 : 29.99
// item3 : 39.99
```

### Les ressources

En PHP, une ressource est un type de variable qui représente un handle externe, comme un fichier ouvert, une connexion à une base de données, etc. Les ressources sont gérées de manière automatique par PHP et ne nécessitent pas d'allocation ou de libération de mémoire explicite.

Pour déclarer une variable de type ressource en PHP, vous devez utiliser une fonction qui retourne une ressource, comme fopen() pour ouvrir un fichier, mysqli_connect() pour établir une connexion à une base de données MySQL, etc. Voici un exemple de déclaration de variable de type ressource :

```php
$file = fopen('filename.txt', 'r'); // ouvre le fichier filename.txt en lecture
```

Vous pouvez utiliser la fonction is_resource() pour vérifier si une variable est une ressource, comme dans cet exemple :

```php
if (is_resource($file)) {
  echo "La variable \$file est une ressource";
} else {
  echo "La variable \$file n'est pas une ressource";
}
```

Il est important de noter que vous devez fermer les ressources lorsque vous n'en avez plus besoin, en utilisant la fonction correspondante, comme fclose() pour fermer un fichier ou mysqli_close() pour fermer une connexion à une base de données MySQL. Si vous oubliez de fermer les ressources, vous risquez de gaspiller des ressources système et de provoquer des fuites de mémoire.

Voici un exemple de fermeture de ressource :

```php
fclose($file);
```

### Les objets

En PHP, une classe est un modèle qui définit les propriétés et les comportements d'un objet. Elle peut être utilisée pour créer de nouveaux objets de ce type.

Un objet est une instance d'une classe. Il a ses propres propriétés et comportements, qui sont définis par la classe à laquelle il appartient.

Voici un exemple simple de définition d'une classe et de création d'un objet en PHP :

```php
class Voiture {
  public $marque;
  public $couleur;
  public $nb_roues;

  public function klaxonner() {
- echo "Tut tut !\n";
  }
}

$ma_voiture = new Voiture();
$ma_voiture->marque = "Peugeot";
$ma_voiture->couleur = "bleu";
$ma_voiture->nb_roues = 4;

echo "Ma voiture est une " . $ma_voiture->marque . " de couleur " . $ma_voiture->couleur . "\n";
$ma_voiture->klaxonner();
```

Dans cet exemple, la classe Voiture définit trois propriétés (marque, couleur et nb_roues) et une méthode (klaxonner). Nous créons un objet de cette classe en utilisant la syntaxe `$ma_voiture = new Voiture();`, puis nous définissons les valeurs de ses propriétés et nous appelons sa méthode.

Il est important de noter que les propriétés et les méthodes d'un objet sont accessibles en utilisant l'opérateur flèche `->`, comme dans cet exemple :

```php
$ma_voiture->marque = "Peugeot";
$ma_voiture->couleur = "bleu";
$ma_voiture->nb_roues = 4;
$ma_voiture->klaxonner();
```

Il existe des classes prédéfinies dans PHP, comme DateTime, PDO, etc. Vous pouvez également créer vos propres classes et les utiliser dans vos scripts PHP.

Par exemplen, le PDO (PHP Data Objects) est une classe de base de PHP qui permet de se connecter à une base de données et d'exécuter des requêtes SQL. Elle offre une interface commune pour accéder à différents types de bases de données (comme MySQL, PostgreSQL, Oracle, etc.), ce qui facilite l'écriture de code portable.

Voici comment utiliser la classe PDO pour se connecter à une base de données MySQL et exécuter une requête de sélection :

```php
try {
  // Connexion à la base de données
  $pdo = new PDO("mysql:host=localhost;dbname=nom_de_la_base", "nom_d_utilisateur", "mot_de_passe");

  // Exécution d'une requête de sélection
  $stmt = $pdo->query("SELECT * FROM utilisateurs WHERE nom = 'John'");

  // Récupération et affichage des résultats
  while ($row = $stmt->fetch()) {
- echo $row['nom'] . " " . $row['prenom'] . "\n";
  }
} catch (PDOException $e) {
  // Gestion des erreurs
  echo "Erreur : " . $e->getMessage() . "\n";
}
```

Dans cet exemple, nous créons un objet PDO en passant les informations de connexion à la base de données dans le constructeur de la classe. Nous utilisons ensuite la méthode query pour exécuter une requête de sélection, puis nous récupérons les résultats en utilisant la méthode fetch. Enfin, nous gérons les erreurs en utilisant un bloc try/catch.

Il existe de nombreuses autres méthodes et propriétés de la classe PDO qui peuvent être utilisées pour exécuter d'autres types de requêtes, préparer des requêtes à l'avance, obtenir des informations sur la base de données, etc. Vous pouvez en savoir plus sur la classe PDO dans la documentation de PHP.

## Variables pré-définies

Il existe un certain nombre de variables pré-définies qui sont disponibles dans tous les scripts et qui contiennent des informations sur l'environnement d'exécution, le serveur, la requête HTTP, les variables de session, etc. Voici une liste de quelques-unes des variables pré-définies les plus couramment utilisées en PHP :

- $\_SERVER : contient des informations sur l'environnement d'exécution du script, comme le nom du serveur, le nom du script en cours d'exécution, le chemin du script, etc.
- $\_GET : contient les données envoyées dans la requête HTTP via la méthode GET.
- $\_POST : contient les données envoyées dans la requête HTTP via la méthode POST.
- $\_FILES : contient les informations sur les fichiers téléchargés via une requête HTTP.
- $\_COOKIE : contient les informations sur les cookies envoyés avec la requête HTTP.
- $\_SESSION : contient les informations sur les variables de session en cours.
- $\_ENV : contient les informations sur les variables d'environnement du serveur.

Voici un exemple d'utilisation de la variable pré-définie `$_SERVER` pour afficher le nom du serveur :

```php
echo 'Le nom du serveur est : ' . $_SERVER['SERVER_NAME'];
```

Il existe également d'autres variables pré-définies, comme `$_REQUEST`, `$_GLOBALS`, etc. Vous pouvez trouver la liste complète des variables pré-définies en PHP dans la documentation officielle de PHP.
