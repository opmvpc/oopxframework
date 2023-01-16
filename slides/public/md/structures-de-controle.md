class: center, middle

### POO x Framework

# Structures de contrôle

## Introduction

---

class: middle

### Structures de contrôle

# Table des matières

1. Les conditions: `if`, `else`, `elseif`, `switch`, `?:`, `??`, `??=` et `match`
2. Les boucles: `while`, `do while`, `for`, `foreach`
3. Mots clés: `break`, `continue`

---

class: middle

### Structures de contrôle

# Les conditions

Les conditions permettent d'exécuter du code en fonction de la valeur d'une variable. Elles peuvent être utilisées pour effectuer des tests ou des comparaisons pour diriger le flux d'exécution d'un programme.

---

### Structures de contrôle: Les conditions

# If, else, elseif

- La condition `if` permet d'exécuter du code si une condition est remplie.
- La condition `else` permet d'exécuter du code si la condition `if` n'est pas remplie.
- La condition `elseif` permet d'exécuter du code si la condition `if` n'est pas remplie et si une autre condition est remplie.

```php
if (condition) {
    // code
} elseif (condition) {
    // code
} else {
    // code
}
```

---

### Structures de contrôle: Les conditions

# Switch

La condition `switch` permet d'exécuter du code en fonction de la valeur d'une variable.

```php
switch (condition) {
    case 'value':
        // code
        break;
    case 'value':
        // code
        break;
    default:
        // code
        break;
}
```

---

### Structures de contrôle: Les conditions

# Ternaires

Les ternaires permettent d'affecter une valeur à une variable en fonction d'une condition.

```php

$var = condition ? 'value' : 'value';
```

---

### Structures de contrôle: Les conditions

# Opérateur de coalescence

L'opérateur de coalescence nulle `??` permet d'affecter une valeur à une variable si elle n'est pas définie.

```php
$var = $var ?? 'value';
```

---

### Structures de contrôle: Les conditions

# Assignation de coalescence

L'opérateur d'assignation de coalescence nulle `??=` permet d'affecter une valeur à une variable si elle n'est pas définie ou nulle.

```php
$var ??= 'valeur par défaut';
```

---

### Structures de contrôle: Les conditions

# Match

L'instruction `match` permet d'affecter une valeur à une variable en fonction de la valeur d'une autre variable.

```php

$var = match (condition) {
    'value1' => 'value',
    'value2' => 'value',
    default => 'value',
};
```

---

class: middle

### Structures de contrôle

# Les boucles

Les boucles permettent d'exécuter un bloc de code plusieurs fois. Elles peuvent être utilisées pour parcourir des tableaux. Le nombre de fois que le bloc de code est exécuté est déterminé par une condition.

- `while` permet d'exécuter un bloc de code tant qu'une condition est remplie.
- `do while` permet d'exécuter un bloc de code au moins une fois et tant qu'une condition est remplie.
- `for` permet d'exécuter un bloc de code un nombre défini de fois.
- `foreach` permet d'exécuter un bloc de code pour chaque élément d'un tableau.

---

### Structures de contrôle: Les boucles

# While

La boucle `while` permet d'exécuter un bloc de code tant qu'une condition est remplie.

```php
while (condition) {
    // code
}
```

---

### Structures de contrôle: Les boucles

# Do while

La boucle `do while` permet d'exécuter un bloc de code au moins une fois et tant qu'une condition est remplie.

```php
do {
    // code
} while (condition);
```

---

### Structures de contrôle: Les boucles

# For

La boucle `for` permet d'exécuter un bloc de code un nombre défini de fois.

```php
for ($i = 0; $i < 10; $i++) {
    // code
}
```

---

### Structures de contrôle: Les boucles

# Foreach

La boucle `foreach` permet d'exécuter un bloc de code pour chaque élément d'un tableau.

```php
foreach ($array as $key => $value) {
    // code
}
```

---

### Structures de contrôle: Les boucles

# Mots clés

Les mots clés `break` et `continue` permettent de contrôler le flux d'exécution des boucles.

- `break` permet de sortir d'une boucle.
- `continue` permet de passer à l'itération suivante d'une boucle.
