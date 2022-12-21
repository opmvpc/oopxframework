# Les structures de contrôle

Les structures de contrôle permettent de contrôler l'exécution d'un script. Elles permettent de tester une condition et d'exécuter un bloc de code si la condition est vraie, ou de répéter un bloc de code un certain nombre de fois.

Voici une liste des principales structures de contrôle en PHP :

1. `if` : permet de tester une condition et d'exécuter un bloc de code si la condition est vraie.
1. `if...else` : permet de tester une condition et d'exécuter un premier bloc de code si la condition est vraie, et un second bloc de code si la condition est fausse.
1. `if...elseif...else` : permet de tester plusieurs conditions et d'exécuter un bloc de code correspondant à la première condition qui est vraie. Si aucune condition n'est vraie, un dernier bloc de code peut être exécuté.
1. `switch` : permet de tester plusieurs valeurs possibles pour une expression et d'exécuter un bloc de code correspondant à la première valeur qui correspond.
1. `match` : permet de tester une valeur et d'exécuter un bloc de code correspondant à la première valeur qui correspond. Cette structure est disponible à partir de PHP 8.0.
1. `while` : permet de répéter un bloc de code tant qu'une condition est vraie.
1. `do...while` : permet de répéter un bloc de code au moins une fois, puis de continuer à le répéter tant qu'une condition est vraie.
1. `for` : permet de répéter un bloc de code un certain nombre de fois en spécifiant une condition de fin et un compteur.
1. `foreach` : permet de parcourir les éléments d'un tableau ou d'un objet et de les traiter un à un.

## Les conditions

Les conditions permettent de tester une valeur ou une expression et d'exécuter un bloc de code si la condition est vraie.

### La structure if

La structure if permet de tester une condition et d'exécuter un bloc de code si cette condition est vraie. La syntaxe de base de la structure if est la suivante :

```php
if (condition) {
// code à exécuter si la condition est vraie
}
```

Par exemple, si on veut vérifier si une variable $age est supérieure à 18 et afficher un message en conséquence, on peut utiliser la structure if de la façon suivante :

```php
if ($age > 18) {
echo "Vous êtes majeur.";
}
```

Il est également possible d'ajouter une clause else pour exécuter un bloc de code si la condition est fausse :

```php
if ($age > 18) {
echo "Vous êtes majeur.";
} else {
echo "Vous êtes mineur.";
}
```

Il est possible d'ajouter autant de clauses elseif que nécessaire pour tester plusieurs conditions :

```php
if ($age > 18) {
    echo "Vous êtes majeur.";
} elseif ($age == 18) {
echo "Vous avez 18 ans.";
} else {
echo "Vous êtes mineur.";
}
```

### la structure switch

La structure `switch` permet de tester plusieurs valeurs possibles pour une expression et d'exécuter un bloc de code correspondant à la première valeur qui correspond. Elle peut être utilisée pour remplacer plusieurs instructions `if...elseif...else`.

Voici la syntaxe de base de la structure switch :

```php
switch (expression) {
    case valeur1:
        // code à exécuter si expression vaut valeur1
        break;
    case valeur2:
        // code à exécuter si expression vaut valeur2
        break;
    // ...
    default:
        // code à exécuter si aucune des valeurs ne correspond
        break;
}
```

L'instruction `break` permet de quitter la structure switch une fois que le bloc de code correspondant à la valeur de l'expression a été exécuté. Si break n'est pas utilisé, le code suivant sera également exécuté.

Voici un exemple d'utilisation de la structure switch pour afficher un message en fonction de la valeur d'une variable $note :

```php
switch ($note) {
    case 0:
    case 1:
    case 2:
        echo "Insuffisant.";
        break;
    case 3:
    case 4:
        echo "Moyen.";
        break;
    case 5:
    case 6:
        echo "Assez bien.";
        break;
    case 7:
    case 8:
    case 9:
        echo "Bien.";
        break;
    case 10:
        echo "Très bien.";
        break;
    default:
        echo "Note non valide.";
        break;
}
```

Lorsqu'une structure switch est exécutée, l'expression spécifiée est évaluée et sa valeur est comparée aux valeurs des différents case. Si une valeur correspond, le bloc de code associé est exécuté. Si aucune valeur ne correspond, le bloc de code associé à la clause default est exécuté (si elle est présente).

### La structure match

La structure `match` permet de tester une valeur et d'exécuter un bloc de code correspondant à la première valeur qui correspond. Elle est similaire à la structure `switch`, mais offre une syntaxe différente et de nouvelles fonctionnalités.

Voici la syntaxe de base de la structure match :

```php
match (expression) {
    valeur1 => bloc de code,
    valeur2 => bloc de code,
    // ...
    default => bloc de code,
}
```

Voici un exemple d'utilisation de la structure match pour afficher un message en fonction de la valeur d'une variable $note :

```php
match ($note) {
    0 | 1 | 2  => echo "Insuffisant.",
    3 | 4      => echo "Moyen.",
    5 | 6      => echo "Assez bien.",
    7 | 8 | 9  => echo "Bien.",
    10         => echo "Très bien.",
    default    => echo "Note non valide.",
}
```

La structure `match` est souvent plus appropriée que la structure `switch` lorsque l'expression à tester est complexe et que la comparaison de valeurs doit se faire à l'aide d'opérateurs de comparaison ou de fonctions de test.

Par exemple, si on veut vérifier si une variable `$x` est supérieure à `10` et inférieure à `20`, on peut utiliser la structure match de la façon suivante :

```php
match ($x) {
    $x > 10 and $x < 20   => echo "x est compris entre 10 et 20.",
    default               => echo "x n'est pas compris entre 10 et 20.",
}
```

La structure `match` est disponible à partir de PHP 8.0.

## Les boucles

Les boucles permettent d'exécuter plusieurs fois un bloc de code. Elles sont très utiles pour traiter des tableaux.

Voici une liste des principales boucles disponibles en PHP :

- `while` : permet de répéter un bloc de code tant qu'une condition est vraie.
- `do...while` : permet de répéter un bloc de code au moins une fois, puis de continuer à le répéter tant qu'une condition est vraie.
- `for` : permet de répéter un bloc de code un certain nombre de fois en spécifiant une condition de fin et un compteur.
- `foreach` : permet de parcourir les éléments d'un tableau ou d'un objet et de les traiter un à un.
- `goto` : permet de sauter à un endroit précis du code. Elle est déconseillée car elle rend le code difficile à lire et à maintenir. Elle est également considérée comme une mauvaise pratique en programmation.

![](./goto.png)
source : [https://xkcd.com/292/](https://xkcd.com/292/)

### La boucle while

La boucle `while` permet de répéter un bloc de code tant qu'une condition est vraie. La syntaxe de base de la boucle `while` est la suivante :

```php
while (condition) {
    // code à exécuter tant que la condition est vraie
}
```

Voici un exemple d'utilisation de la boucle `while` pour afficher les entiers de 1 à 10 :

```php
$i = 1;
while ($i <= 10) {
    echo $i;
    $i++;
}
```

Il est important de noter que la condition doit être mise à jour à l'intérieur de la boucle pour éviter une boucle infinie. Si la condition n'est jamais mise à jour, la boucle continuera à s'exécuter indéfiniment.

### La boucle do...while

La boucle `do...while` permet de répéter un bloc de code au moins une fois, puis de continuer à le répéter tant qu'une condition est vraie. La syntaxe de base de la boucle `do...while` est la suivante :

```php
do {
    // code à exécuter au moins une fois
} while (condition);
```

Voici un exemple d'utilisation de la boucle do...while pour afficher les entiers de 1 à 10 :

```php
$i = 1;
do {
    echo $i;
    $i++;
} while ($i <= 10);
```

Il est important de noter que la condition est vérifiée à la fin de chaque itération, ce qui signifie que le bloc de code sera exécuté au moins une fois même si la condition est fausse.

### La boucle for

La boucle `for` permet de répéter un bloc de code un certain nombre de fois en spécifiant une condition de fin et un compteur. La syntaxe de base de la boucle `for` est la suivante :

```php
for (initialisation; condition; incrémentation) {
    // code à exécuter tant que la condition est vraie
}
```

Voici un exemple d'utilisation de la boucle `for` pour afficher les entiers de `1` à `10` :

```php
for ($i = 1; $i <= 10; $i++) {
    echo $i;
}
```

La boucle `for` est souvent utilisée lorsque le nombre de répétitions est connu à l'avance, car elle permet de spécifier une condition de fin et un compteur de manière claire et concise.

La boucle `for` est similaire à la boucle `while`, mais elle permet de regrouper toutes les informations nécessaires à la boucle (initialisation, condition et incrémentation) en un seul endroit. Elle est donc souvent plus lisible et plus facile à comprendre que la boucle while.

La boucle `for` précédente peut être réécrite de la façon suivante en utilisant une boucle `while` :

```php
$i = 1;
while ($i <= 10) {
    echo $i;
    $i++;
}
```

Il est parfois nécessaire d'inverser l'ordre de parcours d'une boucle, c'est-à-dire de commencer par la fin et de se déplacer vers le début. Cela peut être utile lorsque l'on veut parcourir un tableau ou une chaîne de caractères à l'envers, par exemple.

Pour inverser une boucle, il suffit de changer l'opérateur de comparaison de la condition de fin de la boucle. Par exemple, pour inverser une boucle `for` qui compte de `1` à `10`, il suffit de changer l'opérateur de comparaison de `<=` à `>=` :

```php
for ($i = 10; $i >= 1; $i--) {
    echo $i;
}
```

Il est également possible d'inverser une boucle `while` en modifiant la condition de la même manière. Par exemple :

```php
$i = 10;
while ($i >= 1) {
    echo $i;
    $i--;
}
```

Il est important de noter que l'incrémentation ou la décrémentation de la variable de compteur doit être modifiée en conséquence pour qu'elle corresponde à l'ordre de parcours inverse de la boucle.

Il est possible d'imbriquer plusieurs boucles `for`, c'est-à-dire de mettre une boucle `for` à l'intérieur d'une autre boucle `for`. Cette technique est souvent utilisée pour parcourir des tableaux à plusieurs dimensions, comme un tableau à deux dimensions.

Voici un exemple de boucles `for` imbriquées qui parcourent un tableau à deux dimensions :

```php
$tableau = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for ($i = 0; $i < count($tableau); $i++) {
    for ($j = 0; $j < count($tableau[$i]); $j++) {
        echo $tableau[$i][$j];
    }
}
```

Dans cet exemple, la boucle `for` externe parcourt chaque ligne du tableau à deux dimensions, tandis que la boucle for interne parcourt chaque colonne de chaque ligne. Le résultat de cette boucle sera l'affichage des entiers de `1` à `9` dans l'ordre.

Les boucles imbriquées sont utiles lorsqu'il est nécessaire de parcourir des tableaux à plusieurs dimensions ou lorsqu'il est nécessaire de répéter un bloc de code plusieurs fois pour chaque valeur d'une variable. Elles peuvent également être utilisées pour créer des motifs ou des structures de données complexes.

Il est important de noter que les boucles imbriquées peuvent être difficiles à comprendre et à déboguer si elles sont mal utilisées.

### La boucle foreach

La boucle `foreach` permet de parcourir les éléments d'un tableau ou d'un objet et de les traiter un à un. La syntaxe de base de la boucle foreach est la suivante :

```php
foreach (tableau ou objet as $variable) {
    // code à exécuter pour chaque élément du tableau ou de l'objet
}
```

Voici un exemple d'utilisation de la boucle `foreach` pour afficher les éléments d'un tableau :

```php
$tableau = [1, 2, 3, 4, 5];
foreach ($tableau as $element) {
    echo $element;
}
```

Dans cet exemple, la boucle foreach parcourt chaque élément du tableau et affiche sa valeur.

Il est également possible de parcourir les éléments d'un tableau associatif en utilisant la boucle `foreach`. Un tableau associatif est un tableau qui a des clés et des valeurs, au lieu d'avoir des indices numériques comme dans un tableau ordinaire.

Voici un exemple de boucle `foreach` qui parcourt les clés et les valeurs d'un tableau associatif :

```php
$tableau = ["cle1" => "valeur1", "cle2" => "valeur2", "cle3" => "valeur3"];
foreach ($tableau as $cle => $valeur) {
    echo "$cle : $valeur";
}
```

Dans cet exemple, la boucle `foreach` parcourt chaque élément du tableau associatif et affiche la clé et la valeur de chaque élément.

## Break et continue

### Break

Le mot-clé `break` permet d'interrompre l'exécution d'une boucle. Il peut être utilisé dans une boucle `for`, une boucle `while`, une boucle `do...while` ou une boucle `foreach`.

Voici un exemple de boucle `for` qui affiche les entiers de `1` à `10` et qui s'arrête lorsque la valeur de la variable de compteur est égale à `5` :

```php
for ($i = 1; $i <= 10; $i++) {
    if ($i == 5) {
        break;
    }
    echo $i;
}

// Affiche 1234
```

### Continue

Le mot-clé `continue` permet d'interrompre l'exécution de l'itération courante d'une boucle et de passer à l'itération suivante. Il peut être utilisé dans une boucle `for`, une boucle `while`, une boucle `do...while` ou une boucle `foreach`.

Voici un exemple de boucle `for` qui affiche les entiers de `1` à `10` et qui saute l'itération courante lorsque la valeur de la variable de compteur est égale à `5` :

```php
for ($i = 1; $i <= 10; $i++) {
    if ($i == 5) {
        continue;
    }
    echo $i;
}

// Affiche 1234678910
```
