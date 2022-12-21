# Les chaines de caractères

Les chaînes de caractères sont des séquences de caractères utilisées pour représenter du texte. Elles peuvent être définies de différentes manières :

- En utilisant des guillemets simples `'`:

```php
$chaine = 'Ceci est une chaîne de caractères';
```

- En utilisant des guillemets doubles `"`:

```php
$chaine = "Ceci est une chaîne de caractères";
```

Il est également possible de définir une chaîne de caractères sur plusieurs lignes en utilisant la syntaxe `heredoc` :

```php
$chaine = <<<TEXT
Ceci est une chaîne de caractères
sur plusieurs lignes.
TEXT;
```

## Concaténation

En PHP, il est possible de concaténer des chaînes de caractères en utilisant le point `.` :

```php
$chaine1 = 'Bonjour';
$chaine2 = ' comment vas-tu ?';
$chaine_complete = $chaine1 . $chaine2; // 'Bonjour comment vas-tu ?'
```

## Manipulation de chaînes

Il est également possible de récupérer une sous-chaîne d'une chaîne en utilisant la fonction `substr()`. Par exemple, pour récupérer les 4 premiers caractères d'une chaîne, on peut utiliser la syntaxe suivante :

```php
$chaine = 'Bonjour';
$sous_chaine = substr($chaine, 0, 4); // 'Bonj'
```

Il existe de nombreuses autres fonctions permettant de manipuler les chaînes de caractères, telles que `strlen()` pour obtenir la longueur d'une chaîne, `strtolower()` pour convertir une chaîne en minuscules, ou encore `str_replace()` pour remplacer un sous-texte par un autre dans une chaîne.

- strlen() : renvoie la longueur d'une chaîne de caractères.
- strtolower() : convertit une chaîne de caractères en minuscules.
- strtoupper() : convertit une chaîne de caractères en majuscules.
- ucfirst() : met le premier caractère d'une chaîne en majuscule.
- ucwords() : met le premier caractère de chaque mot d'une chaîne en majuscule.
- str_replace() : remplace un sous-texte par un autre dans une chaîne de caractères.
- substr() : renvoie une sous-chaîne d'une chaîne de caractères.
- trim() : supprime les espaces en début et fin de chaîne.
- explode() : divise une chaîne de caractères en plusieurs sous-chaînes en utilisant un délimiteur.
- implode() : assemble des éléments d'un tableau en une chaîne de caractères en utilisant un délimiteur.
- htmlentities() : convertit les caractères spéciaux en équivalents HTML.

## Formatage de chaînes

Il existe plusieurs façons de formater une chaîne de caractères :

1. Utiliser la fonction `sprintf()` : cette fonction permet de formater une chaîne de caractères en utilisant des placeholders représentés par des symboles `%` suivis d'une lettre indiquant le type de données à afficher (par exemple `%s` pour une chaîne de caractères, `%d` pour un entier, etc.). Par exemple :

```php
$nom = 'John';
$age = 30;
$chaine = sprintf('Bonjour, je m\'appelle %s et j\'ai %d ans', $nom, $age);
// $chaine vaut 'Bonjour, je m'appelle John et j'ai 30 ans'
```

1. Utiliser la concaténation avec le point `.` : cette méthode permet de fusionner plusieurs chaînes de caractères en une seule en utilisant le point `.` comme opérateur de concaténation. Par exemple :

```php
$nom = 'John';
$age = 30;
$chaine = 'Bonjour, je m\'appelle ' . $nom . ' et j\'ai ' . $age . ' ans';
// $chaine vaut 'Bonjour, je m'appelle John et j'ai 30 ans'
```

1. Utiliser la syntaxe heredoc : cette syntaxe permet de définir une chaîne de caractères sur plusieurs lignes en utilisant la syntaxe `<<<` suivie d'un identifiant, puis la chaîne de caractères elle-même, et enfin l'identifiant à nouveau pour terminer la chaîne. Par exemple :

```php
$nom = 'John';
$age = 30;
$chaine = <<<CHAINE
Bonjour,
je m'appelle $nom et j'ai $age ans.
CHAINE;
// $chaine vaut 'Bonjour,\nje m'appelle John et j'ai 30 ans.'
```

Il existe également d'autres façons de formater une chaîne de caractères, comme par exemple en utilisant des fonctions de mise en forme telles que `nl2br()` pour convertir les retours à la ligne en balises HTML `<br>`, ou encore `str_pad()` pour ajouter des caractères de remplissage à une chaîne.
