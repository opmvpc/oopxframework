# Les tableaux

[[toc]]

En PHP, les tableaux (ou arrays en anglais) sont des structures de données permettant de stocker plusieurs valeurs dans une seule variable. Ils sont très utiles lorsqu'il est nécessaire de manipuler des collections de données, comme par exemple une liste de noms ou un ensemble de valeurs numériques.

Les tableaux en PHP peuvent être définis de différentes manières :

- En utilisant la syntaxe suivante :

```php
$tableau = array(1, 2, 3, 4, 5);
```

- En utilisant la syntaxe suivante :

```php
$tableau = [1, 2, 3, 4, 5];
```

Il est également possible de définir un tableau associatif, c'est-à-dire un tableau dans lequel chaque valeur est associée à une clé :

```php
$tableau = [
  'cle1' => 'valeur1',
  'cle2' => 'valeur2',
  'cle3' => 'valeur3'
];
```

Il est possible de récupérer une valeur d'un tableau en utilisant la syntaxe suivante :

```php
$valeur = $tableau[$cle];
```

Les tableaux en PHP sont très similaires aux tableaux de nombreux autres langages de programmation, mais ils ont quelques différences notables :

- En PHP, les tableaux peuvent contenir des éléments de différents types (entiers, chaînes de caractères, objets, etc.), alors que dans certains langages, les tableaux sont limités à un type de données spécifique.

- En PHP, les tableaux peuvent être associatifs (c'est-à-dire qu'ils peuvent avoir des clés qui ne sont pas des entiers), alors que dans certains langages, les tableaux sont toujours indexés par des entiers.

- En PHP, il est possible de définir des tableaux multidimensionnels (c'est-à-dire des tableaux contenant d'autres tableaux), alors que dans certains langages, les tableaux sont limités à une seule dimension.

- En PHP, il est possible de définir des tableaux dynamiques (c'est-à-dire des tableaux dont la taille peut changer dynamiquement), alors que dans certains langages, les tableaux sont statiques (c'est-à-dire que leur taille est fixe).

- En PHP, il est possible de définir des tableaux hétérogènes (c'est-à-dire des tableaux contenant des éléments de différents types), alors que dans certains langages, les tableaux sont homogènes (c'est-à-dire qu'ils ne peuvent contenir que des éléments d'un seul type).

Cela rend les tableaux en PHP très flexibles et puissants, mais cela peut également les rendre plus dangereux à utiliser. Par exemple, il est possible de définir un tableau associatif dont les clés sont des chaînes de caractères, et de récupérer une valeur en utilisant une clé qui n'existe pas. Dans ce cas, PHP renverra une erreur, et le script sera interrompu.

Pour éviter ce genre de problème, il est recommandé de toujours vérifier que la clé utilisée pour récupérer une valeur d'un tableau existe bien. Par exemple, pour récupérer la valeur associée à la clé `cle1` dans le tableau défini ci-dessus, on peut utiliser la syntaxe suivante :

```php
if (array_key_exists('cle1', $tableau)) {
  $valeur = $tableau['cle1'];
}
```

## Parcourir un tableau

Il est possible de parcourir un tableau en utilisant une boucle `foreach`. Par exemple, pour afficher toutes les valeurs d'un tableau, on peut utiliser la syntaxe suivante :

```php
foreach ($tableau as $valeur) {
  echo $valeur;
}
```

Il est également possible de récupérer la clé associée à chaque valeur en utilisant la syntaxe suivante :

```php
foreach ($tableau as $cle => $valeur) {
  echo $cle . ' => ' . $valeur;
}
```

Vous pouvez aussi parcourir un tableau en utilisant une boucle `for`. Par exemple, pour afficher toutes les valeurs d'un tableau, on peut utiliser la syntaxe suivante :

```php
for ($i = 0; $i < count($tableau); $i++) {
  echo $tableau[$i];
}
```

Vous pouvez parcourir des tableaux a plusieurs dimensions en utilisant une boucle `foreach` imbriquée. Par exemple, pour afficher toutes les valeurs d'un tableau à deux dimensions, on peut utiliser la syntaxe suivante :

```php
foreach ($tableau as $ligne) {
  foreach ($ligne as $valeur) {
    echo $valeur;
  }
}
```

Ou alors, en utilisant une boucle `for` imbriquée :

```php
for ($i = 0; $i < count($tableau); $i++) {
  for ($j = 0; $j < count($tableau[$i]); $j++) {
    echo $tableau[$i][$j];
  }
}
```

Et cela fonctionne toujours pour des tableaux à trois dimensions, quatre dimensions, etc.

## Fonctions utiles

Voici une liste non exhaustive de fonctions utiles pour manipuler des tableaux en PHP :

- count() : renvoie le nombre d'éléments d'un tableau.
- array_keys() : renvoie la liste des clés d'un tableau.
- array_values() : renvoie la liste des valeurs d'un tableau.
- array_merge() : fusionne plusieurs tableaux en un seul.
- array_slice() : extrait une portion de tableau.
- array_reverse() : renverse l'ordre des éléments d'un tableau.
- array_search() : recherche un élément dans un tableau et renvoie sa clé s'il est trouvé, ou false s'il n'est pas trouvé.
- array_key_exists() : vérifie si une clé existe dans un tableau.
- in_array() : vérifie si une valeur est présente dans un tableau.
- sort() : trie les éléments d'un tableau dans l'ordre croissant.
- rsort() : trie les éléments d'un tableau dans l'ordre décroissant.
- asort() : trie les éléments d'un tableau associatif en fonction de leurs valeurs.
- ksort() : trie les éléments d'un tableau associatif en fonction de leurs clés.

## Fonctions de plus haut ordre

Les fonctions de haut ordre sont des fonctions qui prennent une ou plusieurs fonctions en argument, ou qui retournent une fonction. Elles peuvent être très utiles pour manipuler des tableaux, car elles permettent d'en traiter les éléments de manière très flexible et concise. Elles peuvent remplacer les boucles `for` et `foreach` dans de nombreux cas.

Voici quelques exemples de fonctions de haut ordre utiles pour manipuler des tableaux :

- array_filter() : cette fonction permet de filtrer les éléments d'un tableau en fonction d'un critère donné. Par exemple, pour récupérer uniquement les éléments pairs d'un tableau, on peut utiliser la syntaxe suivante :

```php
$tableau = [1, 2, 3, 4, 5];
$tableau_pairs = array_filter($tableau, function ($element) {
  return $element % 2 == 0;
});
// $tableau_pairs vaut [2, 4]
```

- array_map() : cette fonction permet d'appliquer une fonction à chaque élément d'un tableau. Par exemple, pour doubler chaque valeur d'un tableau, on peut utiliser la syntaxe suivante :

```php
$tableau = [1, 2, 3, 4, 5];
$tableau_doubles = array_map(function ($element) {
  return $element * 2;
}, $tableau);
// $tableau_doubles vaut array(2, 4, 6, 8, 10)
```

- array_reduce() : cette fonction permet de réduire un tableau à une seule valeur en utilisant une fonction de réduction. Par exemple, pour calculer la somme des éléments d'un tableau, on peut utiliser la syntaxe suivante :

```php
$tableau = [1, 2, 3, 4, 5];
$somme = array_reduce($tableau, function ($accumulateur, $element) {
  return $accumulateur + $element;
}, 0);
// $somme vaut 15
```
