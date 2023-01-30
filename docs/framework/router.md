# Router

[[toc]]

## Introduction

Le **router** de Laravel est un composant **clé** de son architecture. Il est responsable de gérer les requêtes HTTP et de rediriger ces requêtes vers les contrôleurs appropriés de l'application. Les routes sont définies dans un fichier de configuration et peuvent être associées à des méthodes de contrôleur pour traiter les requêtes. Les routes peuvent également être nommées pour une meilleure lisibilité et facilité de maintenance de l'application.

Laravel offre une variété de fonctionnalités **avancées** pour la définition de routes, notamment les expressions régulières pour les paramètres de route, la génération automatique de URL à partir de noms de route, la gestion des redirections et des erreurs de route, et plus encore.

En utilisant correctement le **router** de Laravel, vous pouvez **améliorer** la structure et la maintenance de votre application web, tout en offrant une expérience utilisateur **fluide** et **cohérente**.Le **router** de Laravel est un composant **clé** de son architecture. Il est responsable de gérer les requêtes HTTP et de rediriger ces requêtes vers les contrôleurs appropriés de l'application. Les routes sont définies dans un fichier de configuration et peuvent être associées à des méthodes de contrôleur pour traiter les requêtes. Les routes peuvent également être nommées pour une meilleure lisibilité et facilité de maintenance de l'application.

Laravel offre une variété de fonctionnalités **avancées** pour la définition de routes, notamment les expressions régulières pour les paramètres de route, la génération automatique de URL à partir de noms de route, la gestion des redirections et des erreurs de route, et plus encore.

En utilisant correctement le **router** de Laravel, vous pouvez **améliorer** la structure et la maintenance de votre application web, tout en offrant une expérience utilisateur **fluide** et **cohérente**.

## Qu'est-ce qu'un Router ?

Un **router** est un composant logiciel qui permet de gérer les requêtes HTTP et de les rediriger vers les bons contrôleurs ou les bons points d'entrée de l'application. Il joue un rôle clé dans la mise en place d'une architecture MVC en permettant d'associer les requêtes HTTP à des actions définies dans les contrôleurs.

En d'autres termes, le router est responsable de faire le lien entre l'URL demandée par l'utilisateur et l'action correspondante définie dans le code de l'application. Il permet ainsi de séparer les préoccupations des différentes parties de l'application et de simplifier la gestion des requêtes HTTP.

Le router est un composant logiciel essentiel qui permet de gérer les requêtes HTTP et de les rediriger vers les bons contrôleurs ou les bons points d'entrée de l'application. Il joue un rôle crucial dans la mise en place d'une architecture MVC en permettant d'associer les requêtes HTTP à des actions définies dans les contrôleurs.

En d'autres termes, le router est responsable de faire le lien entre l'URL demandée par l'utilisateur et l'action correspondante définie dans le code de l'application. Il permet ainsi de séparer les préoccupations des différentes parties de l'application et de faciliter la gestion des requêtes HTTP.

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcblxuICAgIFVSTFtcImh0dHA6Ly9ibG9nLnRlc3QvYXJ0aWNsZXNcIl1cbiAgICBSb3V0ZXJbXCLwn5uj77iPIFJvdXRlclwiXVxuICAgIENvbnRyb2xsZXJbXCLwn46b77iPIENvbnRyb2xsZXJcIl1cbiAgICBGdW5jdGlvbltcIvCfkrsgRnVuY3Rpb25cIl1cblxuICAgIHN1YmdyYXBoIFJvdXRlc1xuICAgICAgICAxW1wiR0VUIGh0dHA6Ly9ibG9nLnRlc3QvID0-IEhvbWVDb250cm9sbGVyQGluZGV4XCJdXG4gICAgICAgIDJbXCJHRVQgaHR0cDovL2Jsb2cudGVzdC9hcnRpY2xlcyA9PiBCbG9nQ29udHJvbGxlckBpbmRleFwiXVxuICAgICAgICAzW1wiR0VUIGh0dHA6Ly9ibG9nLnRlc3QvYXJ0aWNsZXMve2lkfSA9PiBCbG9nQ29udHJvbGxlckBzaG93XCJdXG4gICAgZW5kXG5cbiAgICBVUkwtLTEtLT5Sb3V0ZXJcbiAgICBSb3V0ZXItLTItLT4yXG4gICAgMiAtLTMtLT4gQ29udHJvbGxlclxuICAgIENvbnRyb2xsZXIgLS00LS0-IEZ1bmN0aW9uIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcblxuICAgIFVSTFtcImh0dHA6Ly9ibG9nLnRlc3QvYXJ0aWNsZXNcIl1cbiAgICBSb3V0ZXJbXCLwn5uj77iPIFJvdXRlclwiXVxuICAgIENvbnRyb2xsZXJbXCLwn46b77iPIENvbnRyb2xsZXJcIl1cbiAgICBGdW5jdGlvbltcIvCfkrsgRnVuY3Rpb25cIl1cblxuICAgIHN1YmdyYXBoIFJvdXRlc1xuICAgICAgICAxW1wiR0VUIGh0dHA6Ly9ibG9nLnRlc3QvID0-IEhvbWVDb250cm9sbGVyQGluZGV4XCJdXG4gICAgICAgIDJbXCJHRVQgaHR0cDovL2Jsb2cudGVzdC9hcnRpY2xlcyA9PiBCbG9nQ29udHJvbGxlckBpbmRleFwiXVxuICAgICAgICAzW1wiR0VUIGh0dHA6Ly9ibG9nLnRlc3QvYXJ0aWNsZXMve2lkfSA9PiBCbG9nQ29udHJvbGxlckBzaG93XCJdXG4gICAgZW5kXG5cbiAgICBVUkwtLTEtLT5Sb3V0ZXJcbiAgICBSb3V0ZXItLTItLT4yXG4gICAgMiAtLTMtLT4gQ29udHJvbGxlclxuICAgIENvbnRyb2xsZXIgLS00LS0-IEZ1bmN0aW9uIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

## Définir des routes

Les contrôleurs sont des classes qui gèrent les actions effectuées sur les routes et peuvent également stocker et manipuler les données nécessaires pour les vues. Ils peuvent être définis dans le fichier `routes/web.php` pour les routes web et dans `routes/api.php` pour les routes API.

### Route simple

Il existe plusieurs manières de définir des routes dans Laravel, chacune ayant ses propres avantages et utilisations. La manière la plus simple de définir une route consiste à spécifier l'URL cible et la fonction de gestion de la route. Par exemple:

```php
Route::get('/example', function () {
    return 'Hello World';
});
```

Ce code enregistre une route pour l'URL `/example` qui renvoie la chaîne "Hello World" lorsque la route est appelée.

### Route nommée

Il est également possible de donner un nom à une route pour faciliter la génération d'URL dans le code. Pour ce faire, vous pouvez utiliser la méthode name lors de la définition de la route:

```php
Route::get('/example', function () {
    return 'Hello World';
})->name('example');
```

### Route vers un contrôleur

Laravel permet également de définir une route qui appelle une fonction définie dans un contrôleur plutôt que dans le fichier de route lui-même. Pour ce faire, vous pouvez utiliser la méthode controller lors de la définition de la route:

```php
Route::get('/example', 'ExampleController@index');
```

Dans ce code, la route `/example` appelle la méthode index du contrôleur ExampleController.

### Verbes HTTP

Dans Laravel, vous pouvez spécifier le **verbe HTTP** (GET, POST, PUT, DELETE, etc.) pour une route. Cela permet de définir des routes qui ne peuvent être appelées que par un verbe HTTP spécifique. Par exemple, vous pouvez définir une route qui ne peut être appelée que via une requête GET, ou une route qui ne peut être appelée que via une requête POST. Pour définir le verbe HTTP pour une route, vous utilisez la méthode correspondante sur l'instance de la classe Route. Par exemple, pour définir une route qui ne peut être appelée que via une requête GET, vous utiliseriez la méthode `get()`.

```php
Route::get('route-name', function () {
    // logique ici
});

Route::post('route-name', function () {
    // logique ici
});
```

### Paramètres de route

Les **paramètres de route** permettent de capturer des parties de l'URL pour les utiliser dans votre logique de route. Par exemple, vous pouvez définir une route qui accepte un identifiant d'utilisateur et utiliser cet identifiant dans votre logique de route pour afficher les informations de l'utilisateur. Pour définir des paramètres de route, vous pouvez utiliser des accolades ({}) dans l'URL de votre route. Par exemple:

```php
Route::get('user/{id}', function ($id) {
    // logique ici
});
```

Dans cet exemple, le paramètre `id` sera capturé dans l'URL et disponible dans la fonction de callback associée à la route. Vous pouvez également définir des **contraintes** pour les paramètres de route pour s'assurer qu'ils correspondent à un format spécifique. Par exemple, vous pouvez définir une contrainte pour s'assurer que le paramètre `id` est un entier.

```php
Route::get('user/{id}', function ($id) {
    // logique ici
})->where('id', '[0-9]+');
```

### Groupes

Les **groupes de routes** sont très pratiques pour regrouper plusieurs routes similaires sous un même préfixe d'URI. Cela peut être très utile pour centraliser la logique de plusieurs routes, telle que la vérification de l'authentification ou la définition de la même classe de contrôleur pour toutes les routes dans le groupe.

Pour définir un groupe de routes, vous pouvez utiliser la méthode `Route::group`. Voici un exemple :

```php
Route::group(['prefix' => 'admin'], function () {
    Route::get('users', 'Admin\UserController@index');
    Route::get('posts', 'Admin\PostController@index');
});
```

Cela définira les routes **/admin/users** et **/admin/posts** toutes deux associées à leur propre contrôleur respectif.

### Ressources

Les **ressources** sont une façon rapide de définir plusieurs routes pour un contrôleur de ressources. Laravel définit une série de routes associées à une méthode dans un contrôleur de ressources pour effectuer des opérations CRUD standard sur une ressource.

Voici un exemple de définition d'un groupe de ressources pour une ressource posts :

```php
Route::resource('posts', 'PostController');
```

Cela définira les routes suivantes :

- **GET** /posts - PostController@index
- **GET** /posts/create - PostController@create
- **POST** /posts - PostController@store
- **GET** /posts/{post} - PostController@show
- **GET** /posts/{post}/edit - PostController@edit
- **PUT/PATCH** /posts/{post} - PostController@update
- **DELETE** /posts/{post} - PostController@destroy
