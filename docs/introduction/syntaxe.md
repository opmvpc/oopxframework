# Syntaxe de base

Voici quelques éléments de syntaxe de base de PHP :

- Les instructions PHP sont inclues dans des balises `<?php` et `?>`. Tout ce qui se trouve entre ces balises sera exécuté comme du code PHP.

- Les commentaires en PHP sont précédés de `//` ou `#` pour une ligne ou de `/*` et `*/` pour plusieurs lignes.

- Les variables en PHP sont précédées de $. Leur nom peut contenir des lettres, des chiffres et le caractère underscore, mais il ne doit pas commencer par un chiffre.

- Les types de données en PHP incluent les nombres (entiers et flottants), les chaînes de caractères, les booléens, les tableaux et les objets.

- Les opérateurs en PHP incluent l'addition (+), la soustraction (-), la multiplication (\*), la division (/), le modulo (%), l'opérateur d'affectation (=) et bien d'autres encore.

- Les structures de contrôle de flux en PHP incluent les instructions if, else, elseif, switch, while, do while et for.

- Les fonctions en PHP sont définies avec la fonction function suivie du nom de la fonction et de ses paramètres entre parenthèses. Elles sont appelées en utilisant leur nom suivi de parenthèses et des arguments éventuels.

Voici un exemple simple de code PHP qui utilise quelques-uns de ces éléments de syntaxe :

```php
<?php
// Cette ligne est un commentaire

// Déclaration de variables
$nom = "John";
$age = 30;

// Utilisation d'opérateurs et de structures de contrôle de flux
if ($age >= 18) {
  echo $nom . " est majeur.\n";
} else {
  echo $nom . " est mineur.\n";
}

// Définition et appel de fonctions
function saluer($nom) {
  echo "Bonjour, " . $nom . " !\n";
}

saluer($nom);
?>
```
