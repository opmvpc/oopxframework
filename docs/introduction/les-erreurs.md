# Les erreurs et exceptions

[[toc]]

## Les erreurs

En PHP, une erreur est un événement qui se produit lorsqu'il y a une anomalie dans le code qui ne peut pas être gérée de manière appropriée. Les erreurs peuvent être causées par de nombreux facteurs, tels que des erreurs de syntaxe, des références à des variables non définies, des appels à des fonctions inexistantes, etc.

Il existe plusieurs types d'erreurs en PHP, qui sont regroupées en plusieurs catégories :

- Les erreurs fatales : ce sont les erreurs les plus graves et qui interrompent immédiatement l'exécution du script. Elles incluent les erreurs de syntaxe, les erreurs de type (par exemple, lorsqu'une variable est utilisée comme un objet alors qu'elle n'en est pas un), etc.

- Les erreurs de type "warning" : ce sont des erreurs moins graves qui ne sont pas fatales, mais qui peuvent causer des problèmes si elles ne sont pas gérées. Elles incluent les références à des variables non définies, les appels à des fonctions inexistantes, etc.

- Les erreurs de type "notice" : ce sont des erreurs encore moins graves qui sont généralement causées par des accès à des variables non initialisées ou par des appels à des méthodes d'objet qui n'existent pas.

Il est possible de gérer les erreurs de différentes manières :

- En utilisant la fonction error_reporting() pour définir les types d'erreurs qui doivent être signalés par PHP.

- En utilisant la fonction set_error_handler() pour définir une fonction qui sera appelée chaque fois qu'une erreur est détectée. Cela permet de personnaliser la manière dont les erreurs sont gérées dans le script.

Voici quelques exemples de codes qui pourraient lever une erreur :

- Erreur de syntaxe :

```php
// Cette ligne de code générera une erreur de syntaxe car il manque une parenthèse fermante
$x = (5 + 3;
```

- Référence à une variable non définie :

```php
// Cette ligne de code générera une erreur de type "warning" car la variable $y n'a pas été définie
echo $y;
```

- Appel à une fonction inexistante :

```php
// Cette ligne de code générera une erreur de type "warning" car la fonction myFunction n'existe pas
myFunction();
```

- Accès à un élément d'un tableau qui n'existe pas :

```php
$array = [1, 2, 3];

// Cette ligne de code générera une erreur de type "notice" car l'élément à l'index 4 n'existe pas dans le tableau $array
echo $array[4];
```

## Les exceptions

Les exceptions sont utilisées pour gérer de manière structurée les erreurs et les anomalies qui peuvent survenir lors de l'exécution d'un programme.

Les exceptions peuvent survenir pour différentes raisons, par exemple :

- Lorsqu'une fonction est appelée avec des arguments invalides.
- Lorsqu'on depasse la valeur maximale d'un entier.
- Lorsque l'on divise un nombre par zéro.

En général, les exceptions sont levées par le code qui a détecté une erreur, et elles sont capturées par le code qui a appelé la fonction qui a levé l'exception. Cela permet de gérer les erreurs de manière appropriée et de s'assurer que le programme continue à fonctionner correctement.

### Lever une exception

Pour lever une exception, vous devez utiliser l'instruction throw. Voici un exemple de code qui lève une exception :

```php
function divide($x, $y) {
    if ($y == 0) {
        throw new Exception('Division par zéro.');
    }

    return $x / $y;
}

echo divide(5, 0);
```

L'instruction throw prend en paramètre un objet de type Exception. Lorsque l'exception est levée, le programme s'arrête immédiatement et le code qui suit l'instruction throw n'est pas exécuté.

### Capturer une exception

Pour capturer une exception, vous devez utiliser l'instruction try...catch. Voici un exemple de code qui capture une exception :

```php

function divide($x, $y) {
    if ($y == 0) {
        throw new Exception('Division par zéro.');
    }

    return $x / $y;
}

try {
    echo divide(5, 0);
} catch (Exception $e) {
    echo 'Une exception a été levée : ',  $e->getMessage(), "\n";
}
```

L'instruction try...catch prend en paramètre un bloc de code qui peut lever une exception, et un bloc de code qui sera exécuté si une exception est levée. L'instruction try...catch prend également en paramètre un objet de type Exception qui représente l'exception qui a été levée.

Si une exception est levée lors de l'exécution de notre programme, mais qu'aucune instruction try...catch ne la capture, alors le programme s'arrête immédiatement et le message d'erreur suivant est affiché :

```php
Fatal error: Uncaught Exception: Division par zéro. in /home/username/test.php:3
Stack trace:
#0 /home/username/test.php(9): divide(5, 0)
#1 {main}
  thrown in /home/username/test.php on line 3
```

Depuis PHP 7.1, il est possible de capturer de traiter plusieurs type d'exception de manière différente. Voici un exemple de code qui capture plusieurs types d'exceptions :

```php
try {
   // Code qui peut lever une exception
} catch (ExceptionType1 $e) {
   // Code pour traiter l'exception de type ExceptionType1
} catch (ExceptionType2 $e) {
   // Code pour traiter l'exception de type ExceptionType2
} catch (Exception $e) {
   // Code pour traiter toutes les autres exceptions qui pourraient être levées
}
```

### Les classes d'exception

Il existe plusieurs classes d'exception qui sont utilisées pour représenter différentes catégories d'erreurs. Voici la liste des classes d'exception qui sont définies dans PHP :

Error

- ArithmeticError
  - DivisionByZeroError
- AssertionError
- ParseError
- TypeError
- ArgumentCountError

Exception

- ClosedGeneratorException
- DOMException
- ErrorException
- IntlException
- LogicException
  - BadFunctionCallException
    - BadMethodCallException
  - DomainException
  - InvalidArgumentException
  - LengthException
  - OutOfRangeException
- PharException
- ReflectionException
- RuntimeException
  - OutOfBoundsException
  - OverflowException
  - PDOException
  - RangeException
  - UnderflowException
  - UnexpectedValueException
- SodiumException

Lorsque vous programmez, vous pouvez utiliser ces classes pour lever des exceptions dans votre code. C'est utile pour indiquer à l'utilisateur (un autre programmeur, ou l'utilisateur de votre site internet) que quelque chose s'est mal passé et pour lui permettre de gérer l'erreur de manière appropriée.

Voici un exemple de code qui utilise la classe InvalidArgumentException pour lever une exception :

```php

function deleteFile($name) {
    if (!file_exists($name)) {
        throw new InvalidArgumentException('Le fichier ' . $name . ' n\'existe pas.');
    }

    unlink($name);
}

try {
    deleteFile('test.txt');
} catch (InvalidArgumentException $e) {
    echo 'Une exception a été levée : ',  $e->getMessage(), "\n";
}
```
