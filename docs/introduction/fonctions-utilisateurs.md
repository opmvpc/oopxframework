# Les Fonctions utilisateurs

Les fonctions définies par l'utilisateur sont des blocs de code qui peuvent être exécutés plusieurs fois à différents endroits de votre script. Elles vous permettent de structurer votre code et de le rendre plus lisible et maintenable en le découpant en parties plus petites et plus faciles à gérer.

Voici comment définir une fonction :

```php
function nom_de_ma_fonction($arg1, $arg2, ...) {
// corps de la fonction
}
```

Le nom de la fonction doit suivre les règles de nommage des variables.

Les arguments de la fonction sont des variables qui sont passées à la fonction lors de son appel et qui peuvent être utilisées à l'intérieur du corps de la fonction. Vous pouvez définir autant d'arguments que vous le souhaitez, en les séparant par une virgule.

Le corps de la fonction est le code qui sera exécuté lorsque la fonction sera appelée. Il peut contenir du code, des instructions de contrôle de flux, des appels à d'autres fonctions, etc.

Voici comment appeler une fonction :

```php
nom_de_ma_fonction($arg1_value, $arg2_value, ...);
```

Vous devez fournir des valeurs pour chaque argument de la fonction, en les séparant par une virgule. Les valeurs sont passées à la fonction et affectées aux variables définies dans la liste des arguments.

Les fonctions peuvent également retourner une valeur en utilisant l'instruction return. Par exemple :

```php
function addition($a, $b) {
return $a + $b;
}

$resultat = addition(1, 2); // $resultat vaut 3
```

Vous pouvez utiliser des fonctions pour réaliser des tâches répétitives, organiser votre code et le rendre plus lisible et maintenable. Elles sont un élément essentiel de la programmation en PHP et sont largement utilisées dans de nombreux scripts et applications.

## Arguments par défaut

Vous pouvez donner à un argument de fonction une valeur par défaut en le déclarant de cette façon :

```php
function example($arg1, $arg2 = 'default value')
{
    // code de la fonction
}
```

Cela signifie que si vous appelez la fonction `example` sans fournir de valeur pour `$arg2`, cette dernière prendra la valeur par défaut `'default value'`. Vous pouvez toutefois passer une valeur pour `$arg2` lors de l'appel de la fonction si vous le souhaitez :

```php
example('some value', 'another value');
```

Il est important de noter que les arguments avec une valeur par défaut doivent être déclarés après les arguments sans valeur par défaut. Par exemple, la déclaration suivante est incorrecte :

```php
function example($arg1 = 'default value', $arg2)
{
    // code de la fonction
}
```

Cela entraînera une erreur, car `$arg2` n'a pas de valeur par défaut et doit donc être déclaré après tous les arguments qui en ont une.

Voici un exemple complet d'utilisation d'arguments par défaut :

```php
function greet($name, $greeting = 'Hello')
{
    echo $greeting . ', ' . $name . '!';
}

greet('John');    // affiche 'Hello, John!'
greet('John', 'Hi');   // affiche 'Hi, John!'
```

## Nombre variable d'arguments

En PHP, vous pouvez utiliser la fonction `func_get_args` pour accéder à un tableau contenant tous les arguments passés à une fonction, même si cette fonction ne déclare pas explicitement ces arguments. Voici un exemple de comment cela peut être fait :

```php
function example($arg1)
{
$args = func_get_args();
// $args est un tableau contenant tous les arguments passés à la fonction, y compris $arg1

    // Vous pouvez utiliser $args comme vous le souhaitez, par exemple pour itérer dessus ou pour en extraire des valeurs spécifiques
    foreach ($args as $arg) {
        // faire quelque chose avec $arg
    }

}

// Vous pouvez appeler la fonction avec un nombre variable d'arguments
example(1, 2, 3, 4);
```

La surcharge de fonction, en revanche, est un concept de programmation qui permet à une fonction de posséder plusieurs définitions, chacune ayant un nombre différent de paramètres ou des types de paramètres différents. Lorsque vous appelez une fonction surchargée, le compilateur ou l'interpréteur du langage choisit la définition qui correspond le mieux aux arguments passés à la fonction. En PHP, il n'est pas possible de surcharger les fonctions de cette façon.

Voici un exemple de surcharge de fonction en C++ :

```cpp
#include <iostream>

void print(int x)
{
std::cout << "Entier : " << x << std::endl;
}

void print(double x)
{
std::cout << "Reel : " << x << std::endl;
}

int main()
{
print(1); // appelle la fonction print(int)
print(1.5); // appelle la fonction print(double)

    return 0;

}
```

## Déballage d'arguments

Le déballage des arguments est une façon de passer un tableau ou un objet "iterable" (c'est-à-dire une classe implémentant l'interface `Traversable`) en tant qu'arguments d'une fonction. Cela permet de décomposer le contenu du tableau ou de l'objet en une série d'arguments individuels qui sont passés à la fonction.

Voici un exemple d'utilisation du déballage des arguments avec un tableau :

```php
function sum($x, $y, $z)
{
    return $x + $y + $z;
}

$numbers = [1, 2, 3];
echo sum(...$numbers);  // affiche 6
```

Ici, le tableau `$numbers` est décomposé en trois arguments individuels (1, 2 et 3) qui sont passés à la fonction `sum`.

Il est important de noter que le déballage des arguments nécessite l'opérateur de répartition `...` en PHP 7.4 ou une version ultérieure. Si vous utilisez une version antérieure de PHP, vous devrez utiliser la fonction `call_user_func_array` au lieu du déballage des arguments :

```php
$numbers = [1, 2, 3];
echo call_user_func_array('sum', $numbers);  // affiche 6
```

## Factorisation

La factorisation en programmation consiste à séparer un programme en plusieurs parties ou "facteurs" afin de le rendre plus facile à comprendre, à maintenir et à réutiliser. Cela peut être fait en décomposant un programme en sous-programmes indépendants, en utilisant des fonctions ou des modules, ou en organisant le code en différents fichiers ou dossiers.

### Utilité

Il existe plusieurs raisons pour lesquelles la factorisation peut être utile :

- Elle peut rendre le code plus lisible et plus facile à comprendre en répartissant les tâches en différentes parties clairement définies.

- Elle peut permettre de réutiliser du code en créant des fonctions ou des modules qui peuvent être utilisés à plusieurs endroits dans le programme.

- Elle peut rendre le code plus facile à maintenir en permettant de modifier ou de mettre à jour une partie du code sans avoir à toucher à l'ensemble du programme.

- Elle peut améliorer les performances du programme en permettant de réutiliser du code qui a déjà été exécuté au lieu de le recalculer chaque fois.

Il est important de noter que la factorisation n'est pas seulement bénéfique pour les programmes de grande taille, mais peut également être utile pour les programmes plus petits. En effet, en organisant le code de manière cohérente et en utilisant des fonctions ou des modules, même pour de petits programmes, vous pouvez rendre votre code plus facile à comprendre et à maintenir.

### Exemple

Voici un exemple de refactorisation d'un programme impératif en utilisant des fonctions :

Voici le code impératif original :

```php
<?php

$customers = [
    ['name' => 'John', 'age' => 25, 'gender' => 'male'],
    ['name' => 'Jane', 'age' => 35, 'gender' => 'female'],
    ['name' => 'Bill', 'age' => 45, 'gender' => 'male'],
    ['name' => 'Susan', 'age' => 55, 'gender' => 'female'],
    ['name' => 'Mike', 'age' => 65, 'gender' => 'male'],
];

$males = [];
$females = [];

foreach ($customers as $customer) {
    if ($customer['gender'] == 'male') {
        $males[] = $customer;
    } else {
        $females[] = $customer;
    }
}

echo 'Males:';
foreach ($males as $male) {
    echo $male['name'] . ' ' . $male['age'] . ' ' . $male['gender'] . PHP_EOL;
}

echo PHP_EOL;

echo 'Females:';
foreach ($females as $female) {
    echo $female['name'] . ' ' . $female['age'] . ' ' . $female['gender'] . PHP_EOL;
}

echo PHP_EOL;
```

Voici comment ce code pourrait être refactorisé en utilisant des fonctions :

```php
<?php

function getCustomers()
{
    return [
        ['name' => 'John', 'age' => 25, 'gender' => 'male'],
        ['name' => 'Jane', 'age' => 35, 'gender' => 'female'],
        ['name' => 'Bill', 'age' => 45, 'gender' => 'male'],
        ['name' => 'Susan', 'age' => 55, 'gender' => 'female'],
        ['name' => 'Mike', 'age' => 65, 'gender' => 'male'],
    ];
}

function filterCustomersByGender(array $customers, string $gender)
{
    $filteredCustomers = [];
    foreach ($customers as $customer) {
        if ($customer['gender'] == $gender) {
            $filteredCustomers[] = $customer;
        }
    }

    return $filteredCustomers;
}

function printCustomers(array $customers)
{
    foreach ($customers as $customer) {
        echo $customer['name'] . ' ' . $customer['age'] . ' ' . $customer['gender'] . PHP_EOL;
    }
}

$customers = getCustomers();

$males = filterCustomersByGender($customers, 'male');
$females = filterCustomersByGender($customers, 'female');

echo 'Males:' . PHP_EOL;
printCustomers($males);

echo PHP_EOL;

echo 'Females:' . PHP_EOL;
printCustomers($females);

echo PHP_EOL;
```

Voici comment le programme pourrait être écrit en utilisant des classes et en définissant une méthode pour chaque tâche (on apprendra à utiliser les classes dans le chapitre suivant) :

```php
<?php

class Customer
{
    public $name;
    public $age;
    public $gender;

    public function __construct($name, $age, $gender)
    {
        $this->name = $name;
        $this->age = $age;
        $this->gender = $gender;
    }
}

class CustomerFilter
{
    public static function byGender(array $customers, string $gender)
    {
        $filteredCustomers = [];
        foreach ($customers as $customer) {
            if ($customer->gender == $gender) {
                $filteredCustomers[] = $customer;
            }
        }

        return $filteredCustomers;
    }
}

class CustomerPrinter
{
    public static function print(array $customers)
    {
        foreach ($customers as $customer) {
            echo $customer->name . ' ' . $customer->age . ' ' . $customer->gender . PHP_EOL;
        }
    }
}

$customers = [
    new Customer('John', 25, 'male'),
    new Customer('Jane', 35, 'female'),
    new Customer('Bill', 45, 'male'),
    new Customer('Susan', 55, 'female'),
    new Customer('Mike', 65, 'male'),
];

$males = CustomerFilter::byGender($customers, 'male');
$females = CustomerFilter::byGender($customers, 'female');

echo 'Males:' . PHP_EOL;
CustomerPrinter::print($males);

echo PHP_EOL;

echo 'Females:' . PHP_EOL;
CustomerPrinter::print($females);
```

Dans cet exemple, nous avons créé une classe Customer qui représente un client, une classe CustomerFilter qui contient une méthode statique byGender pour filtrer les clients par genre, et une classe CustomerPrinter qui contient une méthode statique print pour imprimer les informations sur les clients.

Cette refactorisation permet de séparer clairement les différentes tâches du programme en différentes parties et de rendre le code plus facile à comprendre et à maintenir. Elle permet également de réutiliser ces méthodes à plusieurs endroits dans le programme sans avoir à réécrire le même code à chaque fois.

## Fonctions anonymes

Les fonctions anonymes, également appelées "fonctions lambda" ou "fonctions closures" en PHP, sont des fonctions qui n'ont pas de nom et qui sont définies et exécutées sur place, sans être enregistrées dans le code. Elles sont souvent utilisées lorsqu'il est nécessaire de définir une fonction pour une utilisation unique ou temporaire, ou pour passer une fonction en tant qu'argument à une autre fonction.

Voici comment déclarer une fonction anonyme :

```php
$greet = function($name) {
    return "Hello, $name!";
};

echo $greet('John'); // affiche "Hello, John!"
```

Il est également possible de déclarer une fonction anonyme avec une syntaxe abrégée en utilisant la flèche -> (arrow function syntax en anglais) depuis PHP 7.4 :

```php
$greet = fn($name) => "Hello, $name!";

echo $greet('Jane'); // affiche "Hello, Jane!"
```

Les fonctions anonymes peuvent être utilisées de la même manière que les fonctions normales, par exemple en les passant en tant qu'arguments à d'autres fonctions ou en les utilisant comme valeurs de retour. Par exemple :

```php
function arrayFilter(array $array, callable $callback)
{
    $filteredArray = [];
    foreach ($array as $value) {
        if ($callback($value)) {
            $filteredArray[] = $value;
        }
    }

    return $filteredArray;
}

$numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

$evenNumbers = arrayFilter($numbers, function($number) {
    return $number % 2 == 0;
});

print_r($evenNumbers); // affiche [2, 4, 6, 8, 10]
```

## Appel de fonctions dynamique

Les appels de fonctions dynamiques permettent d'appeler une fonction dont le nom est déterminé au `runtime`, c'est-à-dire lorsque le programme est exécuté. Cela peut être utile lorsque vous avez besoin de déterminer le nom de la fonction à appeler en fonction de certaines conditions ou de la valeur d'une variable.

Voici comment effectuer un appel de fonction dynamique :

```php
function greet($name)
{
    return "Hello, $name!";
}

$functionName = 'greet';

echo $functionName('John'); // affiche "Hello, John!"
```

Il est également possible d'utiliser la fonction `call_user_func` ou `call_user_func_array` pour appeler une fonction dynamiquement en spécifiant le nom de la fonction et, éventuellement, ses arguments en tant qu'arguments de ces fonctions :

```php
echo call_user_func('greet', 'Jane'); // affiche "Hello, Jane!"

echo call_user_func_array('greet', ['Mike']); // affiche "Hello, Mike!"
```

Il est important de noter que lorsque vous utilisez un appel de fonction dynamique, il est nécessaire de vérifier que la fonction existe avant de l'appeler, afin d'éviter les erreurs. Vous pouvez utiliser la fonction function_exists pour vérifier si une fonction existe avant de l'appeler.

```php
if (function_exists('greet')) {
    echo greet('John');
}
```

Il est également possible d'utiliser les appels de fonction dynamiques avec les méthodes de classe en utilisant la fonction `call_user_func_array` et en spécifiant l'objet et le nom de la méthode en tant qu'arguments. Par exemple :

```php
class Hello
{
    public function greet($name)
    {
        return "Hello, $name!";
    }
}

$hello = new Hello();
$methodName = 'greet';

echo call_user_func_array([$hello, $methodName], ['John']); // affiche "Hello, John!"
```

Il est important de noter que les appels de fonction dynamiques peuvent rendre le code plus difficile à lire et à maintenir, il est donc recommandé de les utiliser avec prudence et uniquement lorsque cela est nécessaire. Néanmoins, c'est un outil extrêmement puissant qui peut être utilisé pour créer des fonctionnalités avancées.

## Récursivité

La récursivité en programmation est un concept qui consiste à définir une fonction ou une procédure qui s'appelle elle-même de manière répétée pour résoudre un problème. La récursivité peut être utilisée lorsque le problème à résoudre peut être divisé en sous-problèmes qui sont similaires au problème original, de manière à ce que chaque sous-problème puisse être résolu de manière indépendante.

### Factorielle

Voici un exemple de fonction récursive qui calcule la factorielle d'un nombre :

```php
function factorial($number)
{
    if ($number <= 1) {
        return 1;
    } else {
        return $number * factorial($number - 1);
    }
}

echo factorial(5); // affiche 120
```

Dans cet exemple, la fonction `factorial` s'appelle elle-même avec un nombre inférieur de 1 à chaque itération jusqu'à ce que le nombre atteigne 1, puis elle retourne 1. Chaque itération calcule le produit du nombre courant avec le résultat de l'itération précédente, ce qui permet de calculer la factorielle du nombre donné.

Il est important de noter que la récursivité doit être utilisée avec prudence, car elle peut entraîner des appels de fonction répétés et donc une surcharge de la mémoire et une augmentation de la complexité du code. Il est recommandé de disposer d'une condition de fin pour arrêter l'appel récursif et de s'assurer que le problème peut effectivement être divisé en sous-problèmes de manière à ce qu'une solution récursive soit possible.

Voici comment l'exécution de l'appel à la fonction `factorial(5)` se déroule étape par étape :

1. Appel de factorial(5)
1. if ($number <= 1) retourne false, la fonction s'exécute donc avec return 5 \* factorial(4)
1. Appel de factorial(4)
1. if ($number <= 1) retourne false, la fonction s'exécute donc avec return 4 \* factorial(3)
1. Appel de factorial(3)
1. if ($number <= 1) retourne false, la fonction s'exécute donc avec return 3 \* factorial(2)
1. Appel de factorial(2)
1. if ($number <= 1) retourne false, la fonction s'exécute donc avec return 2 \* factorial(1)
1. Appel de factorial(1)
1. if ($number <= 1) retourne true, la fonction retourne donc 1
1. La valeur de factorial(1) est retournée à l'appel de factorial(2), qui retourne 2 \* 1 = 2
1. La valeur de factorial(2) est retournée à l'appel de factorial(3), qui retourne 3 \* 2 = 6
1. La valeur de factorial(3) est retournée à l'appel de factorial(4), qui retourne 4 \* 6 = 24
1. La valeur de factorial(4) est retournée à l'appel de factorial(5), qui retourne 5 \* 24 = 120
1. La valeur de factorial(5), soit 120, est retournée à l'appel initial de la fonction.

Voici comment l'arbre d'appels récursif ressemble pour cet exemple :

```
factorial(5)
  |
  |
factorial(4)
  |
  |
factorial(3)
  |
  |
factorial(2)
  |
  |
factorial(1)
```

### Fibonacci

La suite de Fibonacci est une suite de nombres entiers dans laquelle chaque nombre est la somme des deux nombres précédents. La suite de Fibonacci commence généralement par 0 et 1, et les nombres suivants sont calculés en additionnant les deux nombres précédents. Voici les premiers éléments de la suite de Fibonacci :

```text
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

Voici comment la fonction récursive fibonacci pourrait être écrite :

```php
function fibonacci($number)
{
    if ($number <= 1) {
        return $number;
    } else {
        return fibonacci($number - 1) + fibonacci($number - 2);
    }
}

echo fibonacci(8); // affiche 21
```

Cette fonction calcule la valeur de l'élément de la suite de Fibonacci à l'index donné en appelant récursivement la fonction avec l'index précédent et l'index précédent à celui-ci jusqu'à ce que l'index atteigne 0 ou 1, moment où la fonction retourne cet index. Chaque appel récursif retourne la somme des deux valeurs précédentes, ce qui permet de calculer la valeur de l'élément de la suite de Fibonacci correspondant à l'index donné.

Voici comment l'arbre d'appels récursif ressemble lorsque la fonction fibonacci est appelée avec l'index 5, en prenant en compte que les appels fibonacci(1) et fibonacci(2) sont effectués plusieurs fois :

```
fibonacci(5)
  |
  |
fibonacci(4)
  |
  |
fibonacci(3)
  |       \
  |         \
fibonacci(2) fibonacci(1)
  |       \
  |         \
fibonacci(1) fibonacci(0)
```

Il est important de noter que les appels fibonacci(1) et fibonacci(2) sont effectués à plusieurs reprises, ce qui rend cette implémentation de la fonction peu efficace pour calculer des valeurs de la suite de Fibonacci pour des indices élevés. Pour améliorer l'efficacité, il est recommandé d'utiliser une approche différente, telle que la programmation dynamique, qui stocke les résultats des appels récursifs dans un tableau afin de ne pas avoir à les recalculer à chaque fois.

```php
function fibonacci($number)
{
    $fibonacci = [0, 1];

    for ($i = 2; $i <= $number; $i++) {
        $fibonacci[$i] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
    }

    return $fibonacci[$number];
}

echo fibonacci(8); // affiche 21
```
