# L'héritage

[[TOC]]

## Introduction

L'héritage en PHP permet de créer une classe en étendant les propriétés et méthodes d'une classe existante. Cela permet de réutiliser et de structurer le code de manière efficace et pratique.

Pour utiliser l'héritage, la syntaxe utilisée est la suivante:

```php
class Enfant extends Parent {
    // propriétés et méthodes spécifiques à la classe Enfant
}
```

Toutes les propriétés et méthodes déclarées comme `private` ou `protected` dans la classe parente ne sont pas accessibles dans la classe enfant. Seules les propriétés et méthodes déclarées comme `public` sont accessibles.

Il est également possible d'utiliser la fonction `parent::nomDeLaMethode()` pour appeler une méthode de la classe parente à l'intérieur de la classe enfant. C'est utile lorsque la méthode de la classe enfant souhaite utiliser le comportement de la méthode de la classe parente tout en y apportant des modifications. On appelle cela l'**override** de méthode.

```php
class Voiture {
    public function rouler(): void {
        echo "La voiture roule";
    }
}

class Camion extends Voiture {
    public function rouler(): void {
        echo "Le camion roule";
        parent::rouler();
    }
}

$camion = new Camion();
$camion->rouler();
// Output: "Le camion roule La voiture roule"
```

Dans cet exemple, nous avons une classe Voiture qui a une méthode `rouler()` qui affiche "La voiture roule". Nous avons ensuite une classe Camion qui hérite de la classe Voiture et qui **override** la méthode `rouler()`. Dans la méthode `rouler()` de la classe Camion, nous utilisons la méthode `parent::rouler()` pour appeler la méthode `rouler()` de la classe parente. Ainsi, lorsque nous créons un objet de la classe Camion et que nous appelons sa méthode `rouler()`, cela affiche "Le camion roule La voiture roule".

#### UML

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWb2l0dXJlIHtcbityb3VsZXIoKTp2b2lkXG59XG5jbGFzcyBDYW1pb24ge1xuK3JvdWxlcigpOnZvaWRcbn1cblZvaXR1cmUgPHwtLSBDYW1pb24iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWb2l0dXJlIHtcbityb3VsZXIoKTp2b2lkXG59XG5jbGFzcyBDYW1pb24ge1xuK3JvdWxlcigpOnZvaWRcbn1cblZvaXR1cmUgPHwtLSBDYW1pb24iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

Pour utiliser l'héritage, nous utilisons le mot-clé `extends` pour dire qu'une classe hérite d'une autre classe. Cela signifie que la classe enfant hérite de tous les attributs et méthodes de la classe parent, mais peut également avoir des attributs et des méthodes supplémentaires ou redéfinies. Voici un exemple de code pour illustrer cela :

```php
class ParentClass {
    protected string $name;

    public function sayHello(): void {
        echo "Hello " . $this->name;
    }
}

class ChildClass extends ParentClass {
    protected int $age;

    public function sayHello(): void {
        echo "Bonjour " . $this->name . ", tu as " . $this->age . " ans";
    }
}
```

#### UML

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBQYXJlbnRDbGFzcyB7XG4tbmFtZTpzdHJpbmdcbitzYXlIZWxsbygpOnZvaWRcbn1cbmNsYXNzIENoaWxkQ2xhc3Mge1xuLWFnZTppbnRcbitzYXlIZWxsbygpOnZvaWRcbn1cblBhcmVudENsYXNzIDx8LS0gQ2hpbGRDbGFzcyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBQYXJlbnRDbGFzcyB7XG4tbmFtZTpzdHJpbmdcbitzYXlIZWxsbygpOnZvaWRcbn1cbmNsYXNzIENoaWxkQ2xhc3Mge1xuLWFnZTppbnRcbitzYXlIZWxsbygpOnZvaWRcbn1cblBhcmVudENsYXNzIDx8LS0gQ2hpbGRDbGFzcyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

Dans cet exemple, `ChildClass` hérite de `ParentClass`. Elle a donc accès à l'attribut `$name` et à la méthode `sayHello()` de `ParentClass`. Elle a également un nouvel attribut `$age` et une redéfinition de la méthode `sayHello()`.

## Constructeurs et l'héritage

En PHP, lorsqu'une classe hérite d'une autre classe, elle bénéficie du constructeur de sa classe parente. Cependant, il est possible de définir un constructeur spécifique pour la classe enfant pour le remplacer.

Pour appeler le constructeur de la classe parente, nous utilisons la syntaxe `parent::__construct()`. Il est également possible d'utiliser la syntaxe `parent::nomDeLaMethode()` pour appeler d'autres méthodes de la classe parente.

Il est crucial de noter que si la classe parente ne possède pas de constructeur défini, PHP appelle automatiquement le constructeur par défaut de la classe parente, même si aucun constructeur n'est défini dans la classe enfant.

#### Exemple

```php
class Vehicule {
    public string $marque;
    public string $modele;
    public int $puissance;

    public function __construct(string $marque, string $modele, int $puissance) {
        $this->marque = $marque;
        $this->modele = $modele;
        $this->puissance = $puissance;
    }
}

class Voiture extends Vehicule {
    private int $nbPortes;

    public function __construct(string $marque, string $modele, int $puissance, int $nbPortes) {
        parent::__construct($marque, $modele, $puissance);
        $this->nbPortes = $nbPortes;
    }
}

$maVoiture = new Voiture("Peugeot", "208", 68, 5);
```

Ici, nous appelons explicitement le constructeur de la classe parente à l'intérieur du constructeur de la classe enfant.

#### UML

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWZWhpY3VsZSB7XG4tbWFycXVlOnN0cmluZ1xuLW1vZGVsZTpzdHJpbmdcbi1wdWlzc2FuY2U6aW50XG4rX19jb25zdHJ1Y3QobWFycXVlOnN0cmluZywgbW9kZWxlOnN0cmluZywgcHVpc3NhbmNlOmludClcbn1cblxuY2xhc3MgVm9pdHVyZSB7XG4tbmJyUG9ydGVzOmludFxuK19fY29uc3RydWN0KG1hcnF1ZTpzdHJpbmcsIG1vZGVsZTpzdHJpbmcsIHB1aXNzYW5jZTppbnQsIG5iclBvcnRlczppbnQpXG59XG5WZWhpY3VsZSA8fC0tIFZvaXR1cmUiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWZWhpY3VsZSB7XG4tbWFycXVlOnN0cmluZ1xuLW1vZGVsZTpzdHJpbmdcbi1wdWlzc2FuY2U6aW50XG4rX19jb25zdHJ1Y3QobWFycXVlOnN0cmluZywgbW9kZWxlOnN0cmluZywgcHVpc3NhbmNlOmludClcbn1cblxuY2xhc3MgVm9pdHVyZSB7XG4tbmJyUG9ydGVzOmludFxuK19fY29uc3RydWN0KG1hcnF1ZTpzdHJpbmcsIG1vZGVsZTpzdHJpbmcsIHB1aXNzYW5jZTppbnQsIG5iclBvcnRlczppbnQpXG59XG5WZWhpY3VsZSA8fC0tIFZvaXR1cmUiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

## Polymorphisme

Le polymorphisme est un concept qui permet à un objet de prendre différentes formes. En d'autres termes, cela signifie que plusieurs objets peuvent être utilisés de manière interchangeable. Il est possible de traiter des objets de différentes classes de la même manière, car ils ont tous une méthode commune.

Dans un programme orienté objet, le polymorphisme est obtenu grâce à l'héritage et à l'implémentation d'interfaces. Pour utiliser le polymorphisme, nous devons définir une classe de base avec des méthodes communes, et de créer des classes filles qui héritent de cette classe de base. Ces classes filles peuvent alors redéfinir la méthode héritée pour qu'elle fonctionne de manière différente.

Voici un exemple concret pour montrer l'utilité du polymorphisme. On a une classe abstraite `FormeGeometrique` qui a une méthode `aire()`. Cette méthode est définie comme étant vide dans la classe de base. Il y a ensuite des classes filles qui héritent de cette classe de base : `Cercle` et `Rectangle`. Chacune de ces classes redéfinit la méthode `aire()` pour qu'elle calcule l'aire de la forme géométrique correspondante.

```php
class FormeGeometrique{
    public function aire(): float {
        return 0.0;
    }
}

class Cercle extends FormeGeometrique{
    private float $rayon;

    public function __construct(float $rayon) {
        $this->rayon = $rayon;
    }

    public function aire(): float {
        return pi() * pow($this->rayon, 2);
    }
}

class Rectangle extends FormeGeometrique{
    private float $longueur;
    private float $largeur;

    public function __construct(float $longueur, float $largeur) {
        $this->longueur = $longueur;
    }

    public function aire(): float {
        return $this->longueur * $this->largeur;
    }
}

$formes = [new Cercle(2), new Rectangle(3, 4)];
foreach ($formes as $forme) {
    echo "Aire : " . $forme->aire() . "\n";
}
```

Le polymorphisme permet également de créer des tableaux ou des collections d'objets de différentes classes qui ont tous une méthode commune. Par exemple, nous pouvons avoir un tableau de formes géométriques qui contient des objets de différentes classes (cercle, carré, triangle) et qui ont tous une méthode `aire()`. Nous pouvons alors parcourir ce tableau et appeler la méthode `aire()` pour chaque objet sans avoir à vérifier son type.

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBGb3JtZUdlb21ldHJpcXVlIHtcbjw8IEFCU1RSQUNUID4-XG4rYWlyZSgpKiBmbG9hdFxufVxuY2xhc3MgQ2VyY2xlIHtcbi1yYXlvbiBmbG9hdFxuK19fY29uc3RydWN0KGZsb2F0IHJheW9uKVxuK2FpcmUoKSBmbG9hdFxufVxuY2xhc3MgUmVjdGFuZ2V7XG4tbG9uZ3VldXIgZmxvYXRcbi1sYXJnZXVyIGZsb2F0XG4rX19jb25zdHJ1Y3QoZmxvYXQgbG9uZ3VldXIsIGZsb2F0IGxhcmdldXIpXG4rYWlyZSgpIGZsb2F0XG59XG5Gb3JtZUdlb21ldHJpcXVlIDx8LS0gQ2VyY2xlXG5Gb3JtZUdlb21ldHJpcXVlIDx8LS0gUmVjdGFuZ2UiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBGb3JtZUdlb21ldHJpcXVlIHtcbjw8IEFCU1RSQUNUID4-XG4rYWlyZSgpKiBmbG9hdFxufVxuY2xhc3MgQ2VyY2xlIHtcbi1yYXlvbiBmbG9hdFxuK19fY29uc3RydWN0KGZsb2F0IHJheW9uKVxuK2FpcmUoKSBmbG9hdFxufVxuY2xhc3MgUmVjdGFuZ2V7XG4tbG9uZ3VldXIgZmxvYXRcbi1sYXJnZXVyIGZsb2F0XG4rX19jb25zdHJ1Y3QoZmxvYXQgbG9uZ3VldXIsIGZsb2F0IGxhcmdldXIpXG4rYWlyZSgpIGZsb2F0XG59XG5Gb3JtZUdlb21ldHJpcXVlIDx8LS0gQ2VyY2xlXG5Gb3JtZUdlb21ldHJpcXVlIDx8LS0gUmVjdGFuZ2UiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

Cela permet de découpler le code en utilisant des objets génériques plutôt que des objets spécifiques, ce qui facilite la maintenance et l'ajout de nouvelles fonctionnalités. C'est particulièrement utile dans les situations où il y a une grande quantité d'objets différents qui doivent être manipulés de manière semblable, comme dans l'exemple des formes géométriques où toutes les formes ont la méthode de calcul de l'aire, mais la manière de la calculer est différente pour chaque forme.

## Principes de Liskov

Le principe de Liskov stipule qu'un sous-type doit être capable d'être utilisé à la place de son supertype sans causer de problèmes dans le programme. Autrement dit, les propriétés souhaitées du programme ne doivent pas être altérées lorsque l'on utilise un sous-type à la place d'un supertype.

### Restrictions imposées

- Contravariance des arguments de méthode dans le sous-type : cela signifie que les méthodes d'un sous-type peuvent accepter des arguments de types plus généraux que ceux du supertype. Par exemple, si la méthode du supertype accepte un argument de type "Fruit", la méthode du sous-type peut accepter un argument de type "Pomme".

- Covariance du type de retour dans le sous-type : cela signifie que les méthodes d'un sous-type retournent potentiellement des types plus spécifiques que ceux du supertype. Par exemple, si la méthode du supertype retourne un type "Fruit", la méthode du sous-type peut retourner un type "Pomme".

- Aucune nouvelle exception ne doit être générée par la méthode du sous-type, sauf si celles-ci sont elles-mêmes des sous-types des exceptions levées par la méthode du supertype. Cela signifie que les exceptions levées par les méthodes d'un sous-type doivent être compatibles avec celles levées par les méthodes de son supertype.

## Exemples de violation du principe de Liskov

### Contravariance

```php
class SuperType {
    public function method(array $param) {
        // code
    }
}

class SubType extends SuperType {
    public function method(string $param) {
        // code
    }
}
```

Cet exemple viole le principe de Liskov car la méthode dans le sous-type `SubType` attend un paramètre de type `string` alors que la méthode dans le supertype `SuperType` attend un paramètre de type `array`. Cela signifie que lorsque nous utilisons un objet de type `SubType` dans un endroit où nous attendons un objet de type `SuperType`, nous ne pourrons pas lui passer un paramètre de type `array` qui est valide pour la méthode dans le supertype, car elle attend maintenant un paramètre de type `string` dans le sous-type.

Pour corriger cela, nous pourrions modifier la définition de la méthode dans le sous-type `SubType` pour qu'elle accepte également un paramètre de type `array` :

```php
class SuperType {
    public function method(array $param): void {
        // code
    }
}

class SubType extends SuperType {
    public function method(array $param): void {
        // code
    }
}
```

De cette façon, lorsque nous utilisons un objet de type `SubType` dans un endroit où nous attendons un objet de type `SuperType`, nous pourrons toujours lui passer un paramètre de type `array` qui est valide pour les deux types, respectant ainsi le principe de Liskov.

### Covariance

```php
class Shape {
    public function area(): float {
        return 0;
    }
}

class Rectangle extends Shape {
    private float $width;
    private float $height;

    public function __construct(float $width, float $height) {
        $this->width = $width;
        $this->height = $height;
    }

    public function area(): int { // Violation du principe de Liskov car le type de retour est modifié pour être un entier au lieu d'un flottant
        return $this->width * $this->height;
    }
}

$rectangle = new Rectangle(10, 5);
$area = $rectangle->area(); // $area est de type int alors qu'on s'attend à un type float
```

Pour corriger cette violation, il suffit de changer le type de retour de la méthode `area` pour qu'il soit en accord avec celui de la classe parente :

```php
class Rectangle extends Shape {
    private float $width;
    private float $height;

    public function __construct(float $width, float $height) {
        $this->width = $width;
        $this->height = $height;
    }

    public function area(): float {
        return $this->width * $this->height;
    }
}
```

En conservant le même type de retour dans la classe `Rectangle` que celui de la classe parente `Shape`, nous garantissons que les propriétés du programme ne seront pas altérées lorsque l'on remplace un objet de type `Shape` par un objet de type `Rectangle`.

### Exceptions

```php
class SuperType {
    public function someMethod(): void {
        // code de la méthode
    }
}

class SubType extends SuperType {
    public function someMethod(): void {
        // code de la méthode
        throw new Exception("Une nouvelle exception");
    }
}
```

Cet exemple viole le principe de Liskov car la méthode `someMethod` de `SubType` lève une nouvelle exception qui n'est pas un sous-type de celle levée par la méthode de `SuperType`. Cela rend le code plus fragile car les appels à `someMethod` de `SubType` peuvent maintenant causer des exceptions qui n'étaient pas prévues par le code qui utilise `SuperType`.

Pour corriger cela, nous devons ajouter une exeption à la méthode `method` du `SuperType` et modifier la méthode `someMethod` de `SubType` pour qu'elle lève une exception qui est un sous-type de celle levée par la méthode de `SuperType` :

```php
class SuperTypeException extends Exception {}
class SubTypeException extends SuperTypeException {}

class SuperType {
    public function someMethod(): void {
        throw new SuperTypeException();
    }
}

class SubType extends SuperType {
    public function someMethod(): void {
        throw new SubTypeException();
    }
}
```

En utilisant une exception spécifique, nous garantissons que les appels à `someMethod` de `SubType` ne causeront pas des exceptions qui n'étaient pas prévues par le code qui utilise `SuperType`.

## Résolution de méthodes

La **résolution de méthodes** est le processus par lequel le compilateur ou l'interpréteur détermine quelle méthode est appelée lorsqu'une méthode est appelée sur un objet donné. Cela est particulièrement important dans le contexte de l'héritage, car il peut y avoir plusieurs méthodes avec le même nom dans différentes classes d'un arbre d'héritage.

En PHP, la **résolution de méthode** est basée sur le type de l'objet en cours d'utilisation, et non sur le type de la variable qui le contient. Par exemple, si nous avons une variable `$obj` de type `ParentClass` qui contient un objet de type `ChildClass`, lorsque nous appelons une méthode sur cette variable, c'est la méthode de `ChildClass` qui sera appelée, même si la variable est typée comme étant de type `ParentClass`.

De plus, PHP utilise un système de **résolution de méthodes** en cascade, où il va d'abord chercher la méthode dans la classe actuelle, puis dans la classe parente, et ainsi de suite jusqu'à ce qu'il trouve une méthode correspondante ou qu'il atteigne la classe de base. Si la méthode n'est pas trouvée dans aucune des classes de l'arbre d'héritage, une erreur de méthode non définie est générée.

Voici un exemple de code montrant la **résolution de méthodes** en action:

```php
class ParentClass {
    public function testMethod(): string {
        return "Je suis la méthode de ParentClass";
    }
}

class ChildClass extends ParentClass {
    public function testMethod(): string {
        return "Je suis la méthode de ChildClass";
    }
}

$obj = new ChildClass();
echo $obj->testMethod(); // affichera "Je suis la méthode de ChildClass"
```

Autre exemple :

```php

class A {
    public function foo(): string {
        return "Je suis la méthode foo de A";
    }
}

class B extends A {
    public function foo(): string {
        return "Je suis la méthode foo de B";
    }
}

class C extends B {
    public function foo(): string {
        return "Je suis la méthode foo de C";
    }
}

class OtherClass {
    public function testMethod(A $a): string {
        return $a->foo();
    }
}

$a = new A();
$b = new B();
$c = new C();

$other = new OtherClass();

echo $other->testMethod($a); // Affiche "Je suis la méthode foo de A"
echo $other->testMethod($b); // Affiche "Je suis la méthode foo de B"
echo $other->testMethod($c); // Affiche "Je suis la méthode foo de C"
```

Dans cet exemple, nous avons une classe A avec une méthode `foo()`, une classe B qui hérite de A et redéfinit la méthode `foo()` avec un comportement différent, une classe C qui hérite de B et redéfinit encore une fois la méthode `foo()`. Nous avons également une classe OtherClass qui possède une méthode `testMethod()` qui prend en paramètre un objet de type A.

Quand nous passons des objets de type B ou C à la méthode `testMethod()` de OtherClass, la résolution de méthode se fait automatiquement et la méthode `foo()` de la classe B ou C est appelée, car B et C sont des sous-types de A. Cela signifie que la méthode `foo()` de la classe B ou C sera exécutée à la place de celle de la classe A.
