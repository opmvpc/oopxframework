# Les opérateurs

Voici la liste des types d'opérateurs disponibles en PHP, regroupés par catégorie :

## Opérateurs unaires

- opérateur de négation logique `!`
- opérateurs d'incrémentation `++` et de décrémentation `--`

Les opérateurs unaires sont des opérateurs qui n'ont qu'un seul opérande. En PHP, il existe plusieurs types d'opérateurs unaires, notamment l'opérateur de négation logique `!` et les opérateurs d'incrémentation/décrémentation `++` et `--`.

L'opérateur de négation logique `!` permet de changer la valeur booléenne d'une expression. Si l'expression est `true`, l'opérateur renverra `false` et vice versa. Par exemple :

```php
$a = true;
$b = !$a; // $b vaut false
```

Les opérateurs d'incrémentation `++` et de décrémentation `--` permettent respectivement d'ajouter ou de soustraire 1 à la valeur d'une variable. Par exemple :

```php
$a = 5;
$b = ++$a; // $a vaut 6 et $b vaut 6

$c = 10;
$d = --$c; // $c vaut 9 et $d vaut 9
```

Il est important de noter que l'ordre dans lequel l'opérateur d'incrémentation ou de décrémentation est placé par rapport à la variable peut avoir des conséquences sur le résultat de l'opération. Si l'opérateur est placé avant la variable (préfixé), la variable est modifiée avant que sa valeur ne soit utilisée dans l'expression. Si l'opérateur est placé après la variable (suffixé), la variable est modifiée après que sa valeur a été utilisée dans l'expression. Par exemple :

```php
$a = 5;
$b = $a++; // $a vaut 6 et $b vaut 5

$c = 10;
$d = $c--; // $c vaut 9 et $d vaut 10
```

## Opérateurs binaires

- Opérateurs arithmétiques : `+`, `-`, `*`, `/`, `%`, `**`
- Opérateurs de comparaison : `==`, `!=`, `>`, `<`, `>=`, `<=`, `===`, `!==`
- Opérateurs de chaînement de comparaison : `<=>`
- Opérateurs logiques : `&&`, `||`, `!`
- Opérateurs d'affectation : `=`, `+=`, `-=`, `*=`, `=`, `%=`, `.=`, `&=`, `|=`, `^=`, `<<=`, `>>=`

Les opérateurs binaires sont des opérateurs qui ont deux opérandes. En PHP, il existe plusieurs types d'opérateurs binaires, notamment :

Les opérateurs arithmétiques : `+`, `-`, `*`, `/`, `%` et `**`. Ces opérateurs permettent d'effectuer des opérations mathématiques de base, comme l'addition, la soustraction, la multiplication, la division, le modulo et l'exponentiation. Par exemple :

```php
$a = 5;
$b = 10;
$c = $a + $b; // $c vaut 15
$d = $b - $a; // $d vaut 5
$e = $a * $b; // $e vaut 50
$f = $b / $a; // $f vaut 2
$g = $b % $a; // $g vaut 0
$h = $a \*\* $b; // $h vaut 9765625
```

Les opérateurs de comparaison : `==`, `!=`, `>`, `<`, `>=`, `<=`, `===`, `!==`. Ces opérateurs permettent de comparer deux valeurs et de renvoyer `true` ou `false` en fonction du résultat de la comparaison. Par exemple :

```php
$a = 5;
$b = 10;
$c = "5";

var_dump($a == $b); // false
var_dump($a != $b); // true
var_dump($a > $b); // false
var_dump($a < $b); // true
var_dump($a >= $b); // false
var_dump($a <= $b); // true
var_dump($a === $c); // false
var_dump($a !== $c); // true
```

L'opérateur de chaînement de comparaison <=>. Cet opérateur permet de comparer deux valeurs et de renvoyer -1 si la première valeur est inférieure à la seconde, 0 si les deux valeurs sont égales et 1 si la première valeur est supérieure à la seconde. Par exemple :

```php
$a = 5;
$b = 10;
$c = "5";

var_dump($a <=> $b); // -1
var_dump($b <=> $a); // 1
var_dump($a <=> $c); // 0
```

Les opérateurs logiques : `&&`, `||` et `!`. Ces opérateurs permettent de combiner des expressions booléennes et de renvoyer `true` ou `false` en fonction du résultat de la combinaison. Par exemple :

```php
$a = true;
$b = false;

var_dump($a && $b); // false
var_dump($a || $b); // true
var_dump(!$b); // true
```

## Opérateurs ternaires

Opérateur ternaire : `? :`

L'opérateur ternaire est un opérateur de condition qui permet de simplifier l'écriture de code en remplaçant une instruction if et else. Il se présente sous la forme suivante `condition ? expression1 : expression2`. Si la condition est vraie, l'expression1 sera évaluée et retournée, sinon l'expression2 sera évaluée et retournée. Voici un exemple d'utilisation de l'opérateur ternaire :

```php
$age = 18;
$autorisation = ($age >= 18) ? "Vous êtes autorisé" : "Vous n'êtes pas autorisé";
echo $autorisation;
```

Dans cet exemple, si l'âge est supérieur ou égal à 18, la chaîne de caractères "Vous êtes autorisé" sera retournée, sinon la chaîne "Vous n'êtes pas autorisé" sera retournée.

Il est déconseillé d'utiliser l'opérateur ternaire pour des conditions trop complexes, car cela rend le code difficile à lire. Dans ce cas, il est préférable d'utiliser une instruction if et else.

## Opérateur Elvis

Opérateur Elvis : `?:`

L'opérateur Elvis est un opérateur de condition qui permet de simplifier l'écriture de code en remplaçant une instruction if et else. Il se présente sous la forme suivante `expression1 ?: expression2`. Si `expression1` est vraie, `expression1` sera retournée, sinon `expression2` retournée. Il est utile pour définir une valeur par défaut pour une variable. Les deux notations suivantes sont équivalentes :

```php
// Opérateur ternaire
$text = ($text !== null) ? $text : "default";

// Opérateur Elvis
$text = $text ?: "default";
```

## Opérateurs sur les bits

Opérateurs de décalage de bits : `<<`, `>>`
Opérateurs de masquage de bits : `&`, `|`, `^`
Opérateur de complément de bits : `~`

Les opérateurs de décalage de bits permettent de déplacer les bits d'un nombre binaire vers la gauche (opérateur `<<`) ou vers la droite (opérateur `>>`). Par exemple, si on utilise l'opérateur `<<` avec un nombre binaire `0101` et un décalage de deux bits, le résultat sera `010100`. Si on utilise l'opérateur `>>` avec le même nombre binaire et un décalage de deux bits, le résultat sera `0001`.

Les opérateurs de masquage de bits permettent de masquer certaines parties d'un nombre binaire en utilisant des masques binaires. L'opérateur `&` permet de faire un ET logique entre deux nombres binaires, l'opérateur `|` permet de faire un OU logique et l'opérateur `^` permet de faire un OU exclusif. Par exemple, si on utilise l'opérateur `&` avec le nombre binaire `0101` et le masque binaire `0011`, le résultat sera `0001`.

L'opérateur de complément de bits `~` permet de inverser tous les bits d'un nombre binaire. Par exemple, si on utilise l'opérateur `~` sur le nombre binaire `0101`, le résultat sera `1010`.

Il est important de noter que ces opérateurs ne sont utilisables que sur des entiers non signés (unsigned integers).

## Opérateurs sur les chaînes de caractères

Opérateur de concaténation : `.`

L'opérateur de concaténation `.` permet de concaténer, c'est-à-dire de fusionner, deux chaînes de caractères en PHP. Par exemple :

```php
$chaine1 = "Bonjour";
$chaine2 = " tout le monde";
$resultat = $chaine1 . $chaine2;
// $resultat vaut "Bonjour tout le monde"
```

Il est également possible de concaténer des variables et des expressions dans une chaîne de caractères en utilisant la syntaxe suivante :

```php
$prenom = "John";
$age = 30;
echo "Bonjour, je m'appelle $prenom et j'ai $age ans.";
// Affiche "Bonjour, je m'appelle John et j'ai 30 ans."
```

Il est également possible de concaténer des chaînes de caractères avec l'opérateur `.=`, qui permet d'ajouter une chaîne de caractères à la fin d'une autre chaîne :

```php
$chaine = "Bonjour";
$chaine .= " tout le monde";
// $chaine vaut "Bonjour tout le monde"
```

## Opérateurs sur les tableaux

Opérateur d'union de tableaux : `+`
Opérateurs de comparaison : `==`, `!=`, `===`, `!==`
Opérateur d'accès à un élément de tableau : `[]`

L'opérateur d'union de tableaux `+` permet de fusionner deux tableaux en PHP. Le résultat est un nouveau tableau qui contient tous les éléments des deux tableaux originaux. Si les deux tableaux ont des clés identiques, les éléments du second tableau remplaceront ceux du premier tableau. Par exemple :

```php
$tableau1 = ["a", "b", "c"];
$tableau2 = ["d", "e", "f"];
$resultat = $tableau1 + $tableau2;
// $resultat vaut ["a", "b", "c", "d", "e", "f"]
```

Il existe également plusieurs opérateurs de comparaison pour les tableaux en PHP. L'opérateur `==` permet de vérifier si deux tableaux ont les mêmes valeurs, l'opérateur `!=` permet de vérifier s'ils ont des valeurs différentes, l'opérateur `===` permet de vérifier si deux tableaux ont les mêmes valeurs et sont de type identique (tableau) et l'opérateur `!==` permet de vérifier s'ils ont des valeurs différentes ou ne sont pas de type identique (tableau). Par exemple :

```php
$tableau1 = [];
$tableau2 = [];
$tableau3 = null;
$tableau4 = false;

var_dump($tableau1 == $tableau2); // Affiche "bool(true)"
var_dump($tableau1 != $tableau2); // Affiche "bool(false)"
var_dump($tableau1 === $tableau2); // Affiche "bool(true)"
var_dump($tableau1 !== $tableau2); // Affiche "bool(false)"

var_dump($tableau1 == $tableau3); // Affiche "bool(true)"
var_dump($tableau1 != $tableau3); // Affiche "bool(false)"
var_dump($tableau1 === $tableau3); // Affiche "bool(false)"
var_dump($tableau1 !== $tableau3); // Affiche "bool(true)"

var_dump($tableau1 == $tableau4); // Affiche "bool(true)"
var_dump($tableau1 != $tableau4); // Affiche "bool(false)"
var_dump($tableau1 === $tableau4); // Affiche "bool(false)"
var_dump($tableau1 !== $tableau4); // Affiche "bool(true)"
```

Enfin, l'opérateur d'accès à un élément de tableau `[]` permet de lire ou de modifier un élément d'un tableau en utilisant sa clé. Par exemple :

```php
$tableau = ["a", "b", "c"];
echo $tableau[0]; // Affiche "a"
$tableau[1] = "d"; // Modifie la valeur de l'élément de clé 1 du tableau
```
