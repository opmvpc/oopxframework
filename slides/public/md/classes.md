class: center, middle

### POO x Framework

# Les classes et objets

---

class: middle

### POO x Framework

# Matière

- 1. Introduction
- 2. Classes
- 3. Objets

---

class: center, middle

### Les classes et objets

# 1. Introduction

---

class: middle

### Classes et objets

# 1.1. Concepts de base

Les classes sont des plans ou des modèles qui servent à créer des objets. Elles définissent les attributs (variables) et les méthodes (fonctions) que chaque objet créé à partir de cette classe possédera.

Un objet est une instance d'une classe. Il possède ses propres valeurs pour chaque attribut et peut utiliser les méthodes de sa classe.

---

class: middle

### Classes et objets

# Attributs et méthodes

- Les attributs sont des variables qui sont définies dans une classe et qui sont accessibles pour chaque objet créé à partir de cette classe.
- Les méthodes sont des fonctions qui sont définies dans une classe et qui sont accessibles pour chaque objet créé à partir de cette classe. Elles peuvent utiliser et/ou modifier les attributs de l'objet.

---

class: middle

### Classes et objets

# Exemple

Voici un exemple de classe qui permet de représenter des voitures :

```php
class Voiture {
    private string $marque;
    private string $couleur;
    private int $vitesse;

    public function __construct(string $marque, string $couleur) {
        $this->marque = $marque;
        $this->couleur = $couleur;
        $this->vitesse = 0;
    }

    public function rouler(int $kmh) : void {
        $this->vitesse += $kmh;
    }
}
```

---

class: middle

### Classes et objets

# Utilisation

Voici un exemple d'utilisation de la classe Voiture :

```php
$citroenC3 = new Voiture("Citroën", "Rouge");
$twingoJaune = new Voiture("Renault", "Jaune");
$vwGolf = new Voiture("VW", "Blanche");

$citroenC3->rouler(50);
$twingoJaune->rouler(60);
$vwGolf->rouler(70);
```

---

class: middle

### Classes et objets

# Différence

Une classe est un modèle qui permet de créer des objets. Elle définit les propriétés (attributs) et les comportements (méthodes) que les objets de cette classe auront. Par exemple, la classe Voiture définit les propriétés telles que la marque, la couleur et les comportements tels que rouler, freiner, etc.

Un objet, quant à lui, est une instance d'une classe. Il possède les propriétés et les comportements définis dans la classe. Par exemple, l'objet $citroenC3 est une instance de la classe Voiture et possède les propriétés et comportements définis dans cette classe.

---

class: middle

### Classes et objets

# Définition

Les classes sont des structures de programmation qui permettent de regrouper des fonctionnalités similaires. Elles permettent de créer un modèle ou une forme de ce que l'on veut, et de créer ensuite des exemplaires de ce modèle.

Par exemple, pour créer une calculatrice, on peut créer une classe appelée `Calculatrice` qui contiendra les fonctionnalités de base telles que l'addition, la soustraction, la multiplication et la division. Cette classe peut également contenir des propriétés telles que le résultat courant ou l'historique des calculs.

---

class: middle

### Classes et objets

# Exemple

Voici un exemple de classe Calculatrice :

```php
class Calculatrice {
    private float $resultat = 0;
    private array $historique = [];

    public function additionner(float $a, float $b): float {
        $this->resultat = $a + $b;
        $this->historique[] = "$a + $b = $this->resultat";
        return $this->resultat;
    }

    public function soustraire(float $a, float $b): float {
        $this->resultat = $a - $b;
        $this->historique[] = "$a - $b = $this->resultat";
        return $this->resultat;
    }

    // ... suite slide suivante
}
```

---

class: middle

### Classes et objets

# Exemple

Voici un exemple de classe Calculatrice :

```php
class Calculatrice {
    //...

    public function multiplier(float $a, float $b): float {
        $this->resultat = $a * $b;
        $this->historique[] = "$a * $b = $this->resultat";
        return $this->resultat;
    }

    public function diviser(float $a, float $b): float {
        $this->resultat = $a / $b;
        $this->historique[] = "$a / $b = $this->resultat";
        return $this->resultat;
    }

    public function getHistorique(): array {
        return $this->historique;
    }
}
```

---

class: middle

### Classes et objets

# Utilisation

Voici un exemple d'utilisation de cette classe Calculatrice :

```php
$calc1 = new Calculatrice();
$calc2 = new Calculatrice();

$result1 = $calc1->addition(5, 6);
$result2 = $calc2->multiplication(2, 3);

echo "Le résultat de l'addition est : " . $result1;
echo "Le résultat de la multiplication est : " . $result2;
```

Dans cet exemple, nous créons deux objets de la classe Calculatrice, $calc1 et $calc2. Nous utilisons ensuite les méthodes `addition()` et `multiplication()` de chacun des objets pour effectuer des calculs différents. Nous stockons les résultats de ces calculs dans les variables `$result1`et`$result2` et les affichons ensuite à l'écran.

---

class: middle

### Classes et objets

# Utilisation

Il est important de noter que chaque objet de la classe Calculatrice est indépendant des autres. Les calculs effectués sur `$calc1` n'ont aucun impact sur les calculs effectués sur `$calc2`. C'est l'un des avantages de l'utilisation des classes et des objets : chaque objet peut avoir ses propres données et comportements, indépendamment des autres objets de la même classe.

---

class: middle

### Classes et objets

# Attributs

Les attributs sont les caractéristiques qui définissent l'identité d'un objet. Ils sont déclarés à l'intérieur de la classe et peuvent être utilisés pour stocker des informations sur l'objet.

Exemple:

```php
class Calculatrice {
    private float $resultat = 0;
    private array $historique = [];
    ...
}
```

---

class: middle

### Classes et objets

# Méthodes

Les méthodes sont les actions que l'objet est capable de réaliser. Elles sont également déclarées à l'intérieur de la classe et peuvent être utilisées pour effectuer des calculs ou des opérations sur les attributs de l'objet.

```php
class Calculatrice {
    ...
    public function additionner(float $a, float $b): float {
        $this->resultat = $a + $b;
        $this->historique[] = "$a + $b = $this->resultat";
        return $this->resultat;
    }

    public function soustraire(float $a, float $b): float {
        $this->resultat = $a - $b;
        $this->historique[] = "$a - $b = $this->resultat";
        return $this->resultat;
    }

    // ...
}
```

---

class: middle

### Classes et objets

# Visibilité

Il existe trois niveaux de visibilité en PHP : public, protected et private.

- `public` signifie que l'élément peut être accédé depuis n'importe où dans le programme.
- `protected` signifie que l'élément ne peut être accédé que depuis la classe elle-même et ses classes filles.
- `private` signifie que l'élément ne peut être accédé que depuis la classe elle-même.

---

class: middle

### Classes et objets

# Encapsulation

Il est important de noter que les attributs d'une classe doivent toujours être privés ou protégés, et jamais accessibles depuis l'extérieur. Seules les méthodes qui doivent être accessibles depuis l'extérieur doivent être publiques. Cela s'appelle l'encapsulation. Cela permet de protéger les données de votre classe des erreurs de manipulation et de ne pas exposer les détails de fonctionnement de votre classe aux utilisateurs.

---

class: middle

### Classes et objets

# Exemple

Par exemple, dans notre classe Calculatrice, nous pourrions déclarer les attributs `$resultat` et `historique` en privé et les méthodes `additionner()`, `soustraire()`, `multiplier()` et `diviser()` en public pour permettre aux utilisateurs de lancer des calculs tout en protégeant les données de l'application de manipulations externes.

---

class: middle

### Classes et objets

# Getters et setters

Les getters et les setters sont des méthodes spéciales qui permettent d'accéder aux propriétés d'une classe, qui sont généralement définies en tant qu'attributs privés. Les getters permettent de récupérer la valeur d'un attribut, tandis que les setters permettent de définir la valeur d'un attribut.

L'utilisation de getters et de setters est importante pour maintenir l'encapsulation des données dans une classe, car elle aide à contrôler l'accès aux propriétés de la classe. Cela assure également de valider les données avant qu'elles ne soient définies sur une propriété, ou de formater les données avant qu'elles ne soient récupérées.

---

class: middle

### Classes et objets

# Getters et setters

Voici un exemple d'une classe **Personne** qui utilise des getters et des setters pour contrôler l'accès aux propriétés **nom** et **âge** :

```php
class Personne {
  private string $nom;
  private int $age;

  public function setNom(string $nom): void {
    $this->nom = $nom;
  }

  public function getNom(): string {
    return $this->nom;
  }

  public function setAge(int $age): void {
    if ($age < 0) {
      throw new Exception("L'âge ne peut pas être négatif");
    }
    $this->age = $age;
  }

  public function getAge(): int {
    return $this->age;
  }
}
```

---

class: middle

### Classes et objets

# Getters et setters

Voici un exemple d'utilisation de la classe **Personne** :

```php
$p = new Personne();
$p->setAge(23);
echo $p->getAge(); // 23
```

Dans cet exemple, l'accès aux propriétés **nom** et **âge** est limité aux méthodes **setNom()** et **getNom()** et **setAge()** et **getAge()** respectivement. Cela permet de valider les données avant qu'elles ne soient définies sur les propriétés, comme vérifier que l'âge n'est pas négatif avant de l'affecter à la propriété **age**.

---

class: middle

### Classes et objets

# Attributs et méthodes de classe

Dans la programmation orientée objet, il existe deux types de méthodes : les méthodes de classe et les méthodes d'instance.

Les méthodes de classe sont déclarées avec le mot-clé `static` et sont appelées sur la classe elle-même, plutôt que sur une instance de cette classe. Elles sont généralement utilisées pour des fonctions qui sont liées à la classe elle-même, plutôt qu'à une instance spécifique de cette classe.

Les méthodes d'instance, quant à elles, sont déclarées sans le mot-clé `static` et sont appelées sur une instance spécifique d'une classe. Elles ont accès aux attributs et aux méthodes de l'instance sur laquelle elles sont appelées.

---

class: middle

### Classes et objets

# Exemple

Voici un exemple de classe `Utilisateur` qui illustre les différences entre les attributs et méthodes statiques et non statiques :

```php
class Utilisateur {
    public static int $compteur = 0;
    public static array $liste_utilisateurs = [];
    public string $nom;
    public string $email;

    public function __construct(string $nom, string $email) {
        $this->nom = $nom;
        $this->email = $email;
        self::$compteur++; // Incrémente le compteur d'utilisateurs
        self::$liste_utilisateurs[] = $this; // Ajoute l'utilisateur à la liste d'utilisateurs
    }

    public function afficherNom(): void {
        echo $this->nom;
    }

    public static function afficherListeUtilisateurs():void {
        print_r(self::$liste_utilisateurs);
    }
}
```

---

class: middle

### Classes et objets

# Utilisation

Voici un exemple d'utilisation de la classe `Utilisateur` :

```php
// Création d'utilisateurs
$utilisateur1 = new Utilisateur("John Doe", "johndoe@example.com");
$utilisateur2 = new Utilisateur("Jane Smith", "janesmith@example.com");

// Affiche le nom de l'utilisateur 1
$utilisateur1->afficherNom(); // Affiche "John Doe"

// Affiche la liste des utilisateurs
Utilisateur::afficherListeUtilisateurs();
// Affiche Array ( [0] => Utilisateur Object ( [nom] => John Doe [email] => johndoe@example.com ) [1] => Utilisateur Object ( [nom] => Jane Smith [email] => janesmith@example.com ) )
```

---

class: middle

### Classes et objets

# Constructeurs et destructeurs

Un constructeur est une méthode spéciale qui est automatiquement appelée lorsqu'un objet est créé à partir d'une classe. Il permet de définir les valeurs initiales des attributs de l'objet. Le destructeur, quant à lui, est une méthode appelée automatiquement lorsqu'un objet est détruit.

---

class: middle

### Classes et objets

# Exemple

Voici un exemple de classe Voiture avec un constructeur :

```php
class Voiture {
    private string $marque;
    private string $couleur;
    private int $vitesseMax;

    public function __construct(string $marque, string $couleur, int $vitesseMax) {
        $this->marque = $marque;
        $this->couleur = $couleur;
        $this->vitesseMax = $vitesseMax;
    }
}

$citroenC3 = new Voiture("Citroen", "Bleu", 180);
```

Dans cet exemple, lorsque l'on crée un nouvel objet Voiture, le constructeur est automatiquement appelé avec les valeurs "Citroen", "Bleu" et 180 pour les attributs `$marque`, `$couleur` et `$vitesseMax` respectivement.

---

class: middle

### Classes et objets

# Destructeur

Il est possible de définir un destructeur de la même manière en utilisant la fonction `__destruct()`. Cependant, il est généralement moins utilisé car le garbage collector de PHP s'occupe de détruire les objets automatiquement lorsqu'ils ne sont plus utilisés.

---

class: middle

### Classes et objets

# Les objets

Nous allons nous pencher en détail sur la programmation orientée objet en PHP. Nous verrons comment créer un objet à partir d'une classe, comment utiliser les attributs et les méthodes d'un objet, et la différence entre objets et tableaux en PHP. Nous utiliserons des exemples concrets pour montrer comment utiliser les objets pour modéliser des concepts réels, comme la gestion de contacts.

---

class: middle

### Classes et objets: Les objets

# Création

Pour créer un objet à partir d'une classe, nous utilisons l'opérateur `new`. Par exemple, si nous avons une classe `Voiture` avec des attributs tels que `marque`, `couleur` et `kilométrage`, nous pouvons créer un objet de cette classe de cette manière :

```php
$voiture1 = new Voiture("Renault", "Noir", 5000);
```

---

class: middle

### Classes et objets: Les objets

# Utilisation

Avec cette méthode, nous pouvons facilement créer des centaines d'objets de la classe `Voiture`, chacun avec des valeurs différentes pour les attributs. Nous pouvons ensuite les ajouter à une liste et les parcourir avec une boucle `foreach` pour afficher ou traiter les données de chaque objet :

```php
$voiture1 = new Voiture("Renault", "Noir", 5000);
$voiture2 = new Voiture("Peugeot", "Rouge", 10000);
$voiture3 = new Voiture("Citroen", "Bleu", 15000);
$voiture4 = new Voiture("Ford", "Vert", 20000);

$voitures = [$voiture1, $voiture2, $voiture3, $voiture4];
foreach($voitures as $voiture) {
  echo $voiture->marque . "\n";
}
```

---

class: middle

### Classes et objets

# Utilisation

Pour utiliser les attributs et les méthodes d'un objet, nous utilisons la notation de la flèche ->. Par exemple, si nous avons une classe Voiture, pour manipuler les propriétés, il faudra passer par les getters et setters afin de respecter le principe d'encapsulation :

```php
$maVoiture = new Voiture('Renault', 'Jaune', 14900);
echo $maVoiture->getMarque(); // Affiche 'Renault'
$maVoiture->setCouleur('Rouge');
echo $maVoiture->getCouleur(); // Affiche 'Rouge'
```

Pour utiliser les méthodes d'un objet, nous utilisons également la notation de la flèche ->. Par exemple, si notre classe Voiture contient une méthode `rouler()`, nous pouvons l'appeler de cette manière :

```php
$maVoiture->rouler();
```

---

class: middle

### Classes et objets

# Comparaison aux tableaux

Les tableaux sont souvent utilisés pour stocker des informations hétérogènes, c'est-à-dire des informations qui n'ont pas de relation logique entre elles. Par exemple, voici comment stocker des informations sur une voiture dans un tableau :

```php
$maVoiture = array(
    'marque' => 'Renault',
    'couleur' => 'Jaune',
    'prix' => 14900
);
```

En utilisant une classe Voiture, nous pouvons structurer les données de manière logique et utiliser des méthodes pour manipuler ces données. Cela rend le code plus lisible et plus facile à maintenir :

```php
$maVoiture = new Voiture('Renault', 'Jaune', 14900);
```

---

class: middle

### Classes et objets

# Avantages

- Auto-complétion
- Encapsulation
- Réutilisation
- Sécurité des types

---

class: center, middle

### POO x Framework

# Les classes et objets

## Modélisation de concepts réels

---

class: middle

### Les classes et objets

# Création d'une classe

Nous allons voir comment utiliser les objets pour modéliser des concepts réels. Pour cela, nous allons prendre l'exemple d'une gestion de contacts. Nous allons créer une classe `Contact` qui représentera un contact dans notre carnet d'adresse.

```php
class Contact {
    private string $nom;
    private string $prenom;
    private string $telephone;
    private string $email;

    public function __construct(string $nom, string $prenom, string $telephone, string $email) {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->telephone = $telephone;
        $this->email = $email;
    }
    public function getNom(): string {
        return $this->nom;
    }
    public function setNom(string $nom): void {
        $this->nom = $nom;
    }
    // getters et setters pour les autres attributs
}
```

---

class: middle

### Les classes et objets

# Création d'une classe

Nous allons ensuite créer une classe `CarnetAdresse` qui permettra de stocker les contacts. Cette classe aura une liste d'objets `Contact` et des méthodes pour ajouter, supprimer et récupérer des contacts.

```php
class CarnetAdresse {
    private array $contacts = [];

    public function ajouterContact(Contact $contact): void {
        $this->contacts[] = $contact;
    }

    public function supprimerContact(Contact $contact): void {
        $key = array_search($contact, $this->contacts);
        unset($this->contacts[$key]);
    }

    public function getContacts(): array {
        return $this->contacts;
    }
}
```

---

class: middle

### Les classes et objets

# Avantages

En utilisant des objets pour modéliser les concepts réels, nous avons la possibilité de définir des attributs et des méthodes spécifiques à chaque concept. Cela permet de structurer notre code de manière plus claire et maintenable. Il est également plus facile de manipuler des objets que des tableaux complexes car les erreurs de typage sont détectées lors de l'écriture du code et d'utiliser des getters et des setters pour respecter l'encapsulation.
