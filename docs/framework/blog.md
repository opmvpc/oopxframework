# Blog

[[toc]]

## Installation

Pour installer Laravel, nous allons utiliser la commande `composer create-project` à partir de la ligne de commande. Cette commande va créer une nouvelle application Laravel pour nous et installer toutes les dépendances nécessaires.

Voici la commande à utiliser pour créer notre nouveau blog Laravel :

```bash
composer create-project laravel/laravel blog
```

Cette commande va télécharger la dernière version de Laravel et l'installer dans un dossier nommé **blog**. Une fois l'installation terminée, nous pouvons entrer dans le répertoire **blog** avec la commande suivante :

```bash
cd blog
```

Maintenant que notre application Laravel est installée, nous pouvons commencer à la configurer pour notre blog.

## Base de données

### Configuration

La prochaine étape dans la construction de notre application de blog consiste à configurer notre base de données. Tout d'abord, nous devons créer une base de données pour notre blog à l'aide d'un outil tel que phpMyAdmin ou MySQL Workbench. Une fois que nous avons créé notre base de données, nous devons modifer le fichier .env situé à la racine de notre projet.

Dans ce fichier, nous devons définir les informations de connexion à notre base de données. Les informations requises comprennent le nom de l'hôte, le nom d'utilisateur, le mot de passe et le nom de la base de données. Voici un exemple de configuration de base de données pour une installation locale :

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nom_de_votre_base_de_donnees
DB_USERNAME=nom_d_utilisateur
DB_PASSWORD=mot_de_passe
```

## Modélisation de la base de données

La première étape pour modéliser la base de données de notre application de blog est de déterminer les modèles dont nous avons besoin et les relations entre ces modèles. Dans notre cas, nous aurons besoin d'un modèle Article et d'un modèle User.

Le modèle Article aura les champs suivants:

- title: titre de l'article
- body: corps de l'article
- img_path: chemin de l'image associée à l'article
- published_at: date de publication de l'article

Nous utiliserons le modèle User fourni par Laravel pour gérer les utilisateurs de notre application.

Les modèles Article et User seront en relation en utilisant l'association "appartient à". Cela signifie que chaque article appartiendra à un seul utilisateur. Nous pouvons représenter cette relation en utilisant un diagramme de classe:

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gICAgY2xhc3MgQXJ0aWNsZSB7XG4gICAgICAgIC1pZDogaW50XG4gICAgICAgIC10aXRsZTogc3RyaW5nXG4gICAgICAgIC1ib2R5OiBzdHJpbmdcbiAgICAgICAgLWltZ19wYXRoOiBzdHJpbmdcbiAgICAgICAgLXB1Ymxpc2hlZF9hdDogZGF0ZVxuICAgICAgICBcbiAgICB9XG4gICAgY2xhc3MgVXNlciB7XG4gICAgICAgIC1pZDogaW50XG4gICAgICAgIC1uYW1lOiBzdHJpbmdcbiAgICAgICAgLWVtYWlsOiBzdHJpbmdcbiAgICB9XG4gICAgQXJ0aWNsZSAtLSogVXNlclxuICAgICIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG4gICAgY2xhc3MgQXJ0aWNsZSB7XG4gICAgICAgIC1pZDogaW50XG4gICAgICAgIC10aXRsZTogc3RyaW5nXG4gICAgICAgIC1ib2R5OiBzdHJpbmdcbiAgICAgICAgLWltZ19wYXRoOiBzdHJpbmdcbiAgICAgICAgLXB1Ymxpc2hlZF9hdDogZGF0ZVxuICAgICAgICBcbiAgICB9XG4gICAgY2xhc3MgVXNlciB7XG4gICAgICAgIC1pZDogaW50XG4gICAgICAgIC1uYW1lOiBzdHJpbmdcbiAgICAgICAgLWVtYWlsOiBzdHJpbmdcbiAgICB9XG4gICAgQXJ0aWNsZSAtLSogVXNlclxuICAgICIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

Notez que c'est une relation de composition, car un article ne peut pas exister sans un utilisateur. Cela signifie que si nous supprimons un utilisateur, tous les articles associés à cet utilisateur seront également supprimés.

### Modèle et Migration

Dans Laravel, les modèles sont utilisés pour représenter les données dans la base de données. Il est très simple de créer un modèle pour notre relation de composition entre l'utilisateur et l'article en utilisant la commande `php artisan make:model Article -mf`. Cela créera un fichier `Article.php` dans le répertoire `app/Models`. Il créera également un fichier de migration dans le répertoire `database/migrations/` et un fichier de factory dans le répertoire `database/factories/`.

Dans ce fichier, vous pouvez définir la relation de composition entre l'utilisateur et l'article en ajoutant le code suivant dans la classe `Article` :

```php
class Article extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

Nous devons aussi définir la relation inverse dans le modèle `User`:

```php
class User extends Authenticatable
{
    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
```

Laravel utilise les migrations pour gérer la structure de la base de données. Pour créer une migration pour notre modèle `Article`, nous pouvons aussi utiliser la commande `php artisan make:migration create_articles_table`. Cela créera un fichier de migration dans le répertoire `database/migrations/` qui peut être utilisé pour définir les champs pour la table `articles`.

Vous devez ajouter les champs à la méthode `up` de la migration:

```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('body');
            $table->string('img_path')->nullable();
            $table->timestampTz('published_at')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
};

```

Enfin, pour exécuter la migration, utilisez la commande `php artisan migrate`. Cela créera la table `articles` dans votre base de données en fonction de la définition du fichier de migration.

### Création d'une fabrique pour les articles

Pour générer des articles fictifs dans notre base de données, nous allons utiliser les fabriques de Laravel.

#### Étape 1 : Création de la fabrique

Nous pouvons créer une fabrique en utilisant la commande suivante dans le terminal :

```php
php artisan make:factory ArticleFactory --model=Article
```

Cette commande créera un fichier de fabrique dans le répertoire database/factories nommé **ArticleFactory.php**.

#### Étape 2 : Configuration de la fabrique

Dans ce fichier, nous allons définir les champs que nous voulons que notre fabrique génère pour chaque article fictif. Voici un exemple :

```php
namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->bs(),
            'body' => fake()->realTextBetween($minNbChars = 500, $maxNbChars = 2000),
            'img_path' => function () {
                $absolutePath = fake()->image(storage_path('app/public/images'), 640, 480, 'cats', true);

                return str_replace(storage_path('app/public/'), '', $absolutePath);
            },
            'published_at' => fake()->dateTimeBetween('-2 months', '+ 1 month'),
            'user_id' => User::get()->random()->id,
        ];
    }
}
```

### Remplissage de la base de données avec le DatabaseSeeder

Avec Laravel, nous pouvons utiliser la classe DatabaseSeeder pour remplir notre base de données avec des données fictives. Pour ce faire, nous allons utiliser les **factories** que nous avons créées plus tôt. Voici comment cela peut être fait :

Dans le terminal, nous exécutons la commande `php artisan make:seeder ArticlesTableSeeder`. Cela créera un nouveau **fichier de semeur** dans le répertoire `database/seeds`.

Dans ce nouveau fichier, nous allons ajouter le code suivant :

```php
use App\Article;
use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Article::class, 50)->create();
    }
}
```

Nous allons maintenant enregistrer notre nouveau semeur dans le fichier DatabaseSeeder. Pour ce faire, nous ajoutons la ligne suivante dans la méthode `run` :

```php
$this->call(ArticlesTableSeeder::class);
```

N'oubliez pas décommenter les lignes suivantes dans le fichier `DatabaseSeeder.php` :

```php
namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $this->call(ArticlesTableSeeder::class);
    }
}
```

Enfin, nous pouvons exécuter la commande `php artisan db:seed` pour **remplir** notre base de données avec des **articles fictifs**.

Et voilà ! Maintenant, notre base de données est **complète** avec des articles fictifs et nous pouvons commencer à construire notre application de blog.

Pour recréer la base de données et la remplir avec des données fictives, nous pouvons utiliser la commande `php artisan migrate:fresh --seed`.

## Authentification avec Laravel Breeze

Pour installer Laravel Breeze, nous pouvons utiliser la commande suivante :

```bash
composer require laravel/breeze --dev
```

Une fois l'installation terminée, nous pouvons générer les fichiers nécessaires à l'authentification en utilisant la commande :

```bash
php artisan breeze:install

  Which stack would you like to install?
  blade ............................. 0
  react ............................. 1
  vue ............................... 2
  api ............................... 3
❯ 0
0

  Would you like to install dark mode support? (yes/no) [no]
❯ yes

  Would you prefer Pest tests instead of PHPUnit? (yes/no) [no]
❯ yes
```

Cette commande va créer les vues, les contrôleurs et les routes nécessaires à l'authentification. Nous pouvons maintenant commencer à utiliser Laravel Breeze pour gérer les utilisateurs de notre application.

## Création de la page d'accueil

### Configuration de la Homepage

Nous allons maintenant créer notre contrôleur `HomepageController` qui aura la responsabilité de gérer la page d'accueil de notre blog. Pour ce faire, nous allons utiliser la commande de génération de contrôleur de Laravel :

```bash
php artisan make:controller HomepageController
```

Cela va créer un nouveau fichier `app/Http/Controllers/HomepageController.php`. Ouvrons-le et écrivons la méthode `index` qui sera en charge de récupérer les articles à afficher sur la page d'accueil :

```php
namespace App\Http\Controllers;

use App\Models\Article;

class HomepageController extends Controller
{
    public function index()
    {
        $articles = Article::all();

        return view('homepage.index', [
            'articles' => $articles,
        ]);
    }
}
```

Maintenant, nous allons modifier la route de base de Laravel pour qu'elle appelle notre méthode `index` :

```php
Route::get('/', [HomepageController::class, 'index']);
```

Enfin, nous allons créer la vue associée, `resources/views/homepage/index.blade.php`, qui affichera la liste des articles :

```php
<h1>Liste des articles</h1>
<ul>
  @foreach($articles as $article)
  <li>{{ $article->title }}</li>
  @endforeach
</ul>
```

Résultat :

![Home](./blog/home.png)

Avec ces modifications, notre application est maintenant capable d'afficher la liste des articles sur la page d'accueil.

### Création du layout

La première étape consiste à modifier le fichier `guest.blade.php` dans le dossier `resources/views/layouts/`. Ce fichier servira de layout pour notre frontend et contiendra les éléments communs à toutes les pages, tels que le header et le footer.

```php
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="font-sans text-gray-900 antialiased">
    <div class="min-h-screen flex flex-col pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
        <div class="container mx-auto flex flex-col space-y-10">
            <nav class="flex justify-between items-center py-2">
                <div>
                    <a href="/"
                        class="group font-bold text-3xl flex items-center space-x-4 hover:text-emerald-600 transition ">
                        <x-application-logo
                            class="w-10 h-10 fill-current text-gray-500 group-hover:text-emerald-500 transition" />
                        <span>Mon blog</span>
                    </a>
                </div>
                <div class="flex items-center space-x-4 justify-end">
                    <a class="font-bold hover:text-emerald-600 transition" href="/">Articles</a>
                </div>
            </nav>

            <main>
                {{ $slot }}
            </main>
        </div>
    </div>
</body>

</html>
```

Une fois ce layout créé, nous pourrons étendre ce layout dans nos autres vues. Nous utiliserons le tag `<x-guest-layout>` pour indiquer que notre vue doit étendre le layout `guest.blade.php`.

```php
<x-guest-layout>
    <h1 class="font-bold text-xl mb-4">Liste des articles</h1>
    <ul class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        @foreach ($articles as $article)
            <li>
                <a class="flex bg-white rounded-md  shadow-md p-5 w-full hover:shadow-lg hover:scale-105 transition"
                    href="#">
                    {{ $article->title }}
                </a>
            </li>
        @endforeach
    </ul>
</x-guest-layout>
```

### Pagination

Nous allons maintenant ajouter la pagination à notre page d'accueil. Pour ce faire, nous allons utiliser la méthode `paginate` de Laravel. Cette méthode va nous permettre de récupérer les articles par page et de générer les liens de pagination. Dans le controller, nous allons modifier la méthode `index` pour récupérer les articles par page :

```php
$articles = Article::paginate(12);
```

Nous allons ensuite modifier notre vue pour afficher les liens de pagination :

```php
<x-guest-layout>
    <h1 class="font-bold text-xl mb-4">Liste des articles</h1>
    <ul class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        @foreach ($articles as $article)
            <li>
                <a class="flex bg-white rounded-md  shadow-md p-5 w-full hover:shadow-lg hover:scale-105 transition"
                    href="#">
                    {{ $article->title }}
                </a>
            </li>
        @endforeach
    </ul>

    <div class="mt-8">
        {{ $articles->links() }}
    </div>
</x-guest-layout>
```

Résultat:

![Pagination](./blog/home2.png)

## Les articles

### Contrôleur et routes pour les articles

Pour afficher la liste des articles, nous allons créer un `ArticleController` qui aura une méthode `index` pour afficher la liste des articles et une méthode `show` pour afficher le détail d'un article.

```bash
php artisan make:controller ArticleController
```

Nous allons ensuite ajouter les méthodes dans le controller :

```php
namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::paginate(12);

        return view('articles.index', [
            'articles' => $articles,
        ]);
    }

    public function show($id)
    {
        $article = Article::findOrFail($id);

        return view('articles.show', [
            'article' => $article,
        ]);
    }
}
```

Ensuite, nous allons ajouter les routes pour ces méthodes dans le fichier `routes/web.php` :

```php
Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');
```

Maintenant, nous pouvons visiter `/articles` pour voir la liste des articles et `/articles/{id}` pour voir le détail d'un article.

Nous devons modifier notre layout pour modifier le lien vers la liste des articles :

```php
<a class="font-bold hover:text-emerald-600 transition"
                        href="{{ route('articles.index') }}">Articles</a>
```

Et nous devons modifier notre vue `homepage.index` pour modifier le lien vers le détail des articles :

```php
<a class="flex bg-white rounded-md shadow-md p-5 w-full hover:shadow-lg hover:scale-105 transition"
    href="{{ route('articles.show', $article) }}">
    {{ $article->title }}
</a>
```

### Composant ArticleCard

Pour éviter de répéter le code dans plusieurs vues, nous pouvons créer un composant pour afficher un article. Nous allons donc créer un composant `ArticleCard` en utilisant la commande `make:component` :

```bash
php artisan make:component ArticleCard --view
```

Le composant sera créé dans le répertoire `resources/views/components`. Nous pouvons maintenant éditer ce fichier pour définir la vue de notre composant.

```php
<a class="flex flex-col h-full space-y-4 bg-white rounded-md shadow-md p-5 w-full hover:shadow-lg hover:scale-105 transition"
    href="{{ route('articles.show', $article) }}">
    <div class="uppercase font-bold text-gray-800">
        {{ $article->title }}
    </div>
    <div class="flex-grow text-gray-700 text-sm text-justify">
        {{ Str::limit($article->body, 120) }}
    </div>
    <div class="text-xs text-gray-500">
        {{ $article->published_at }}
    </div>
</a>
```

Ensuite, nous utilisons ce composant dans notre vue qui affiche la liste des articles :

```php
@foreach ($articles as $article)
    <li>
        <x-article-card :article="$article" />
    </li>
@endforeach
```

Nous pouvons voir que nous passons les informations de l'article avec un paramètre nommé `article`. Nous pouvons alors les utiliser dans notre composant grâce à la variable `$article`.

### Liste des articles

Nous allons maintenant créer une page qui affiche la liste des articles. Pour ce faire, nous allons créer une nouvelle vue `articles.index` :

```php
<x-guest-layout>
    <h1 class="font-bold text-xl mb-4">Liste des articles</h1>
    <ul class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        @foreach ($articles as $article)
            <li>
                <x-article-card :article="$article" />
            </li>
        @endforeach
    </ul>

    <div class="mt-8">
        {{ $articles->links() }}
    </div>
</x-guest-layout>
```

### Détail d'un article

Nous allons maintenant créer une page qui affiche le détail d'un article. Pour ce faire, nous allons créer une nouvelle vue `articles.show` :

```php
<x-guest-layout>
    <h1 class="font-bold text-xl mb-4">{{ $article->title }}</h1>
    <div class="mb-4 text-xs text-gray-500">
        {{ $article->published_at }}
    </div>
    <div>
        {!! \nl2br($article->body) !!}
    </div>
</x-guest-layout>
```

### Exercices

- Ajouter un lien de retour vers la liste des articles dans la page de détail d'un article.
- Afficher les images des articles dans la liste des articles et dans la page de détail d'un article.
- Ajouter un footer avec des liens vers les réseaux sociaux.
- Ajouter une page "À propos" qui affiche un texte de présentation de l'auteur. Ajouter un lien vers cette page dans le nav.
- Customiser le thème de l'application avec TailwindCSS. [documentation](https://tailwindcss.com/docs/)

Attention, pour afficher les images, il faut exécuter la commande `php artisan storage:link` pour créer un lien symbolique vers le dossier `storage/app/public` dans le dossier `public/storage`.

Ensuite, pour générer le lien vers une image, il faut utiliser la fonction `asset` :

```php
<img src="{{ Storage::url($article->img_path) }}" alt="illustration de l'article">
```

## Administration

Nous allons créer une interface d'administration pour gérer les articles. Nous allons créer:

- une page qui affiche la liste des articles
- une page pour créer un article
- une page pour modifier un article
- un bouton pour supprimer un article

### Contrôleur et routes pour l'administration

Nous allons créer un dossier Admin dans le dossier des controlleurs. Nous y ajouterons un contrôleur `ArticleController` qui aura les méthodes `index`, `create`, `store`, `edit`, `update` et `destroy`.
Pour ce faire, nous allons utiliser un contrôleur ressource. Ce sont des contrôleurs qui ont des méthodes prédéfinies pour les actions de base d'un CRUD. Nous allons donc utiliser la commande `make:controller` avec l'option `--resource` et l'option `--model` pour spécifier le modèle associé au contrôleur :

```bash
php artisan make:controller Admin/ArticleController --resource --model=Article
```

Nous allons ensuite ajouter une route de type `resource` pour ce contrôleur dans le fichier `routes/web.php`. Nous allons également ajouter un middleware `auth` pour protéger l'accès à ces routes ainsi qu'un préfixe `admin` pour les routes de l'administration.

```php
// autres imports ...
use App\Http\Controllers\Admin\ArticleController as AdminArticleController;

// autres routes ...
Route::middleware(['auth'])->prefix('admin')->group(function () {
    Route::resource('articles', AdminArticleController::class);
});
```

Nous avons déjà un contrôleur "ArticleController" dans le dossier "app/Http/Controllers". Avec les namespaces PHP, nous pouvons utiliser le même nom de contrôleur pour deux contrôleurs différents. Pour les distringuer dans un même fichier, nous pouvons utiliser un alias. Nous avons donc utilisé l'alias `AdminArticleController` pour le contrôleur de l'administration.

### Vue pour la liste des articles

Nous allons maintenant créer une vue pour afficher la liste des articles. Nous allons créer un fichier `resources/views/admin/articles/index.blade.php` :

```php
<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Articles') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
                    <div class="flex justify-between mt-8">
                        <div class=" text-2xl">
                            Liste des articles
                        </div>

                        <div class="flex  items-center justify-center space-x-8">
                            <a href="{{ route('articles.create') }}"
                                class="text-gray-500 font-bold py-2 px-4 rounded hover:bg-gray-200 transition">Ajouter un
                                article</a>
                        </div>
                    </div>

                    <div class="mt-6 text-gray-500">
                        <table class="table-auto w-full">
                            <thead>
                                <tr class="uppercase text-left">
                                    <th class="px-4 py-2 border">Titre</th>
                                    <th class="px-4 py-2 border">Auteur</th>
                                    <th class="px-4 py-2 border">Date de publication</th>
                                    <th class="px-4 py-2 border">Dernière modification</th>
                                    <th class="px-4 py-2 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($articles as $article)
                                    <tr class="hover:bg-gray-50 odd:bg-gray-100 hover:odd:bg-gray-200 transition">
                                        <td class="border px-4 py-2">
                                            {{ $article->title }}</td>
                                        <td class="border px-4 py-2">
                                            {{ $article->user->name }}</td>
                                        <td class="border px-4 py-2">
                                            {{ $article->published_at?->diffForHumans() }}</td>
                                        <td class="border px-4 py-2">
                                            {{ $article->updated_at->diffForHumans() }}</td>
                                        <td class="border px-4 py-2 space-x-4">
                                            <a href="{{ route('articles.edit', $article->id) }}"
                                                class="text-blue-400">Edit</a>
                                            <form action="{{ route('articles.destroy', $article->id) }}" method="POST"
                                                class="inline">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="text-red-400">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>

                        <div class="mt-4">
                            {{ $articles->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</x-app-layout>
```

Cette vue utilise le layout `app.blade.php`. La page contient un tableau qui affiche la liste des articles. Nous avons aussi ajouté un lien pour créer un nouvel article. Pour chaque article, nous affichons le titre, l'auteur, la date de publication et la date de dernière modification. Nous avons aussi ajouté un lien pour modifier l'article et un bouton pour supprimer l'article.

### Contrôleur pour la liste des articles

Nous allons maintenant créer la méthode `index` dans le contrôleur `Admin/ArticleController`. Cette méthode va récupérer la liste des articles et la passer à la vue `admin/articles/index.blade.php`.

```php
    public function index()
    {
        $articles = Article::orderByDesc('updated_at')
            ->paginate(10)
        ;

        return view(
            'admin.articles.index',
            [
                'articles' => $articles,
            ]
        );
    }
```

Nous utilisons la méthode `paginate` pour récupérer les articles par page. Nous avons choisi de récupérer 10 articles par page. Nous utilisons la méthode `orderByDesc` pour trier les articles par date de modification décroissante.

## Lien vers la liste des articles dans le menu

Nous allons maintenant ajouter un lien vers la liste des articles dans le menu de l'administration. Nous allons modifier le fichier `resources/views/layouts/navigation.blade.php` :

```php
<!-- Navigation Links -->
<div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
    <x-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')">
        {{ __('Dashboard') }}
    </x-nav-link>

    <!--  Lien à ajouter -->
    <x-nav-link :href="route('articles.index')" :active="request()->routeIs('articles.*')">
        {{ __('Articles') }}
    </x-nav-link>
</div>
```

Nous avons ajouté un lien vers la liste des articles. La méthode `routeIs` permet de vérifier si la route actuelle correspond à un pattern. Dans notre cas, nous voulons vérifier si la route actuelle correspond à la route `articles.index` ou à la route `articles.create`, `articles.edit` ou `articles.destroy`. Nous utilisons le caractère `*` pour indiquer que la route peut être suivi d'un identifiant quelconque. Si la route actuelle correspond à l'un de ces patterns, le lien recevra la classe `active`.

Nous devons aussi ajouter un lien pour le menu responsive, toujours dans le fichier `resources/views/layouts/navigation.blade.php` :

```php
    <!-- Responsive Navigation Menu -->
    <div :class="{ 'block': open, 'hidden': !open }" class="hidden sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
            <x-responsive-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')">
                {{ __('Dashboard') }}
            </x-responsive-nav-link>

            <!--  Lien à ajouter -->
            <x-responsive-nav-link :href="route('articles.index')" :active="request()->routeIs('articles.*')">
                {{ __('Articles') }}
            </x-responsive-nav-link>
        </div>
    ...
```

## Création d'un article

Nous allons maintenant créer une page pour créer un article. Nous allons créer un fichier `resources/views/admin/articles/create.blade.php` :

```php
<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Articles') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
            <div class="flex justify-between mt-8">
                <div class=" text-2xl">
                    Créer un article
                </div>
            </div>

            <form method="POST" action="{{ route('articles.store') }}" class="flex flex-col space-y-4 text-gray-500">

                @csrf

                <div>
                    <x-input-label for="title" :value="__('Titre')" />
                    <x-text-input id="title" class="block mt-1 w-full" type="text" name="title"
                        :value="old('title')" autofocus />
                    <x-input-error :messages="$errors->get('title')" class="mt-2" />
                </div>

                <div>
                    <x-input-label for="published_at" :value="__('Date de publication')" />
                    <x-text-input id="published_at" class="block mt-1 w-full" type="date" name="published_at"
                        :value="old('published_at')" />
                    <x-input-error :messages="$errors->get('published_at')" class="mt-2" />
                </div>

                <div>
                    <x-input-label for="body" :value="__('Texte de l\'article')" />
                    <textarea id="body"
                        class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                        name="body" rows="10">{{ old('body') }}</textarea>
                    <x-input-error :messages="$errors->get('body')" class="mt-2" />
                </div>

                <div class="flex justify-end">
                    <x-primary-button type="submit">
                        {{ __('Créer') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</x-app-layout>
```

Nous avons créé un formulaire pour créer un article. Nous utilisons les composants `x-input-label`, `x-text-input` et `x-input-error` pour afficher les labels, les champs de saisie et les messages d'erreur. Nous utilisons le composant `x-primary-button` pour afficher le bouton de création.

Dans le contrôleur `app/Http/Controllers/ArticleController.php`, nous allons modifier la méthode `create` pour afficher la vue `resources/views/admin/articles/create.blade.php` :

```php
    public function create()
    {
        return view('admin.articles.create');
    }
```

### Validation des données

Lorsque on utilise un formulaire, il est important de valider les données reçues. Nous ne pouvons pas faire confiance aux données envoyées par l'utilisateur. Pour résoudre ce problème, Laravel permet d'utiliser des rêgles prédéfinies et de générer des messages d'erreur en cas de non respect de ces règles.

Il y a plusieurs façons de valider les données. Nous allons utiliser les Form Requests. Pour créer un Form Request, nous allons utiliser la commande suivante :

```bash
php artisan make:request ArticleCreateRequest
```

Cette commande va créer un fichier `app/Http/Requests/ArticleCreateRequest.php`. Nous allons modifier ce fichier pour ajouter les règles de validation. On ne doit pas non plus oublier de renvoyer `true` dans la méthode `authorize()` :

```php
class ArticleStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'required|unique:articles|max:255',
            'published_at' => 'nullable|date',
            'body' => 'required|max:10000',
        ];
    }
}
```

Pour le titre, nous avons ajouté les règles suivantes :

- `required` : le titre est obligatoire
- `unique:articles` : le titre doit être unique dans la table `articles`
- `max:255` : le titre doit faire au maximum 255 caractères

Pour la date de publication, nous avons ajouté les règles suivantes :

- `nullable` : la date de publication est optionnelle
- `date` : la date de publication doit être une date valide

Pour le texte de l'article, nous avons ajouté les règles suivantes :

- `required` : le texte de l'article est obligatoire
- `max:10000` : le texte de l'article doit faire au maximum 10000 caractères

Vous pouvez trouver la liste des règles disponibles sur la [documentation de Laravel](https://laravel.com/docs/10.x/validation#available-validation-rules).

### Enregistrement des données

Dans notre controller, nous allons modifier la méthode `store()` pour utiliser le Form Request et sauvegarder les données reçues.

```php
    public function store(ArticleStoreRequest $request)
    {
        $article = Article::make();
        $article->title = $request->validated()['title'];
        $article->body = $request->validated()['body'];
        $article->published_at = $request->validated()['published_at'];
        $article->user_id = Auth::id();
        $article->save();

        return redirect()->route('articles.index');
    }
```

Premièrement, nous remplaçons le type `Request` du paramètre `$request` par celui de la Form Request `ArticleStoreRequest`. Laravel utilisera automatiquement cette classe pour valider les donées du formulaire.
Ensuite, nous créons un nouvel article en utilisant la méthode `make()` du modèle `Article`.
Nous utilisons la méthode `validated()` pour récupérer les données validées. Pour chaque propriété de l'article, nous récupérons la valeur correspondante dans le tableau de données validées. Nous récupérons également l'identifiant de l'utilisateur connecté et nous l'ajoutons à l'article. Nous sauvegardons l'article en base de données en utilisant la méthode `save()` du modèle. Enfin, nous redirigeons l'utilisateur vers la liste des articles.

## Modification d'un article

Pour modifier un article, nous allons utiliser la méthode `edit()` du contrôleur `ArticleController`. Cette méthode va afficher le formulaire de modification d'un article. Nous allons utiliser le formulaire de création d'un article comme base. Nous allons donc créer une vue `resources/views/admin/articles/edit.blade.php` :

```php
<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Articles') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
            <div class="flex justify-between mt-8">
                <div class=" text-2xl">
                    Modifier un article
                </div>
            </div>

            <div class="text-gray-500">
                <form method="POST" action="{{ route('articles.update', $article) }}" class="flex flex-col space-y-4">

                    @csrf
                    @method('PUT')

                    <div>
                        <x-input-label for="title" :value="__('Titre')" />
                        <x-text-input id="title" class="block mt-1 w-full" type="text" name="title"
                            :value="old('title', $article)" autofocus />
                        <x-input-error :messages="$errors->get('title')" class="mt-2" />
                    </div>

                    <div>
                        <x-input-label for="published_at" :value="__('Date de publication')" />
                        <x-text-input id="published_at" class="block mt-1 w-full" type="date" name="published_at"
                            :value="old('published_at', $article->published_at?->toDateString())" />
                        <x-input-error :messages="$errors->get('published_at')" class="mt-2" />
                    </div>

                    <div>
                        <x-input-label for="body" :value="__('Texte de l\'article')" />
                        <textarea id="body"
                            class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            name="body" rows="10">{{ old('body', $article) }}</textarea>
                        <x-input-error :messages="$errors->get('body')" class="mt-2" />
                    </div>

                    <div class="flex justify-end">
                        <x-primary-button type="submit">
                            {{ __('Modifier') }}
                        </x-primary-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
```

### Enregistrement des modifications

D'abord, nous allons créer une nouvelle Form Request `ArticleUpdateRequest` pour valider les données reçues avec ces règles :

```php
public function rules()
{
    return [
        'title' => 'required|string|max:255|unique:articles,title,'.$this->route('article')->id,
        'published_at' => 'nullable|date',
        'body' => 'required|string',
    ];
}
```

Nous avons ajouté la règle `unique:articles,title,{$id}` pour vérifier que le titre est unique dans la table `articles` sauf pour l'article en cours de modification. Pour récupérer l'identifiant de l'article en cours de modification, nous utilisons la méthode `route()` de la Form Request. Cette méthode permet de récupérer les paramètres de la route.

Dans le controller, nous allons modifier la méthode `update()` pour utiliser le Form Request et sauvegarder les données reçues.

```php
public function update(UpdateArticleRequest $request, Article $article)
{
    $article->title = $request->validated()['title'];
    $article->body = $request->validated()['body'];
    $article->published_at = $request->validated()['published_at'];
    $article->save();

    return redirect()->back();
}
```

Nous récupérons l'article à modifier en utilisant le modèle `Article` et le paramètre `Article $article` de la méthode `update()`. Nous utilisons la méthode `validated()` pour récupérer les données validées. Pour chaque propriété de l'article, nous récupérons la valeur correspondante dans le tableau de données validées. Nous sauvegardons l'article en base de données en utilisant la méthode `save()` du modèle. Enfin, nous redirigeons l'utilisateur vers la page précédente.

## Suppression d'un article

Pour supprimer un article, nous allons utiliser la méthode `destroy()` du contrôleur `ArticleController`. Cette méthode va supprimer l'article en base de données. Nous allons utiliser un formulaire pour envoyer la requête de suppression. Il est déjà présent dans la vue `resources/views/admin/articles/index.blade.php` :

```php
 <form action="{{ route('articles.destroy', $article->id) }}" method="POST"
    class="inline">
    @csrf
    @method('DELETE')
    <button type="submit" class="text-red-400">Delete</button>
</form>
```

Nous utilisons la méthode `route()` pour générer l'URL de la route `articles.destroy` avec l'identifiant de l'article en paramètre. Nous utilisons la méthode `method()` pour générer le champ `@method('DELETE')` qui permet de simuler une requête de type `DELETE` avec une requête de type `POST`. Nous utilisons la méthode `csrf()` pour générer le champ `@csrf` qui permet de générer un jeton de sécurité pour la requête.

Dans le controller, nous allons modifier la méthode `destroy()` pour supprimer l'article en base de données.

```php
public function destroy(Article $article)
{
    $article->delete();

    return redirect()->back();
}
```

Nous récupérons l'article à supprimer en utilisant le paramètre `Article $article` de la méthode `destroy()`. Nous utilisons la méthode `delete()` du modèle pour supprimer l'article en base de données. Enfin, nous redirigeons l'utilisateur vers la page précédente.

### Modal de confirmation

Nous allons utiliser une modal de confirmation pour demander à l'utilisateur de confirmer la suppression de l'article. Nous allons utiliser le composant `x-modal` fournit avec Laravel Breeze. Nous allons modifier la vue `resources/views/admin/articles/index.blade.php` pour utiliser ce composant :

```php
<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Articles') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
                    <div class="flex justify-between mt-8">
                        <div class=" text-2xl">
                            Liste des articles
                        </div>

                        <div class="flex  items-center justify-center space-x-8">
                            <a href="{{ route('articles.create') }}"
                                class="text-gray-500 font-bold py-2 px-4 rounded hover:bg-gray-200 transition">Ajouter
                                un
                                article</a>
                        </div>
                    </div>

                    <div class="mt-6 text-gray-500">
                        <table class="table-auto w-full">
                            <thead>
                                <tr class="uppercase text-left">
                                    <th class="px-4 py-2 border">Titre</th>
                                    <th class="px-4 py-2 border">Auteur</th>
                                    <th class="px-4 py-2 border">Date de publication</th>
                                    <th class="px-4 py-2 border">Dernière modification</th>
                                    <th class="px-4 py-2 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($articles as $article)
                                    <tr class="hover:bg-gray-50 odd:bg-gray-100 hover:odd:bg-gray-200 transition">
                                        <td class="border px-4 py-2">
                                            {{ $article->title }}</td>
                                        <td class="border px-4 py-2">
                                            {{ $article->user->name }}</td>
                                        <td class="border px-4 py-2">
                                            {{ $article->published_at?->diffForHumans() ?? 'Pas de date' }}</td>
                                        <td class="border px-4 py-2">
                                            {{ $article->updated_at->diffForHumans() }}</td>
                                        <td class="border px-4 py-2 space-x-4">
                                            <a href="{{ route('articles.edit', $article->id) }}"
                                                class="text-blue-400">Edit</a>

                                            <button x-data="{ id: {{ $article->id }} }"
                                                x-on:click.prevent="window.selected = id; $dispatch('open-modal', 'confirm-article-deletion');"
                                                type="submit" class="text-red-400">Delete</button>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>

                        <div class="mt-4">
                            {{ $articles->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <x-modal name="confirm-article-deletion" focusable>
            <form method="post" onsubmit="event.target.action= '/admin/articles/' + window.selected" class="p-6">
                @csrf
                @method('DELETE')

                <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Êtes-vous sûr de vouloir supprimer cet article ?
                </h2>

                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Cette action est irréversible. Toutes les données seront supprimées.
                </p>

                <div class="mt-6 flex justify-end">
                    <x-secondary-button x-on:click="$dispatch('close')">
                        Annuler
                    </x-secondary-button>

                    <x-danger-button class="ml-3" type="submit">
                        Supprimer
                    </x-danger-button>
                </div>
            </form>
        </x-modal>
    </div>
</x-app-layout>
```

Le component modal utilise Alpine.js pour gérer l'affichage de la modal. Lorsque l'utilisateur clique sur le bouton `Delete`, nous définissons la variable `window.selected` avec l'identifiant de l'article à supprimer. Nous utilisons ensuite cette variable pour générer l'URL de la route `articles.destroy` dans le formulaire de la modal.

## Upload d'images

Pour uploader des images, nous allons modifier:

- le formulaire de création et d'édition d'article pour ajouter un champ de type `file`
- le controller pour gérer l'upload de l'image (méthode `store()` et `update()`)
- Supprimer l'image lors de la suppression de l'article (méthode `destroy()`)

### Formulaire

Nous allons modifier la vue `resources/views/admin/articles/create.blade.php` :

```php
<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Articles') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
            <div class="flex justify-between mt-8">
                <div class=" text-2xl">
                    Créer un article
                </div>
            </div>

            <form method="POST" action="{{ route('articles.store') }}" class="flex flex-col space-y-4 text-gray-500"
                enctype="multipart/form-data">

                @csrf

                <div>
                    <x-input-label for="title" :value="__('Titre')" />
                    <x-text-input id="title" class="block mt-1 w-full" type="text" name="title"
                        :value="old('title')" autofocus />
                    <x-input-error :messages="$errors->get('title')" class="mt-2" />
                </div>

                <div>
                    <x-input-label for="published_at" :value="__('Date de publication')" />
                    <x-text-input id="published_at" class="block mt-1 w-full" type="date" name="published_at"
                        :value="old('published_at')" />
                    <x-input-error :messages="$errors->get('published_at')" class="mt-2" />
                </div>

                <div>
                    <x-input-label for="img" :value="__('Image')" />
                    <x-text-input id="img" class="block mt-1 w-full" type="file" name="img" />
                    <x-input-error :messages="$errors->get('img')" class="mt-2" />
                </div>

                <div>
                    <x-input-label for="body" :value="__('Texte de l\'article')" />
                    <textarea id="body"
                        class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                        name="body" rows="10">{{ old('body') }}</textarea>
                    <x-input-error :messages="$errors->get('body')" class="mt-2" />
                </div>

                <div class="flex justify-end">
                    <x-primary-button type="submit">
                        {{ __('Créer') }}
                    </x-primary-button>
                </div>
            </form>
        </div>
    </div>
</x-app-layout>
```

Attention, nous avons ajouté l'attribut `enctype="multipart/form-data"` au formulaire pour indiquer que nous allons envoyer des données binaires (l'image). Si vous ne l'ajoutez pas, Laravel ne pourra pas récupérer les données de l'image et vous recevrez une erreur indiquant que l'image n'est pas d'un type autorisé.

Nous allons également modifier la vue `resources/views/admin/articles/edit.blade.php` :

```php
<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Articles') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
            <div class="flex justify-between mt-8">
                <div class=" text-2xl">
                    Modifier un article
                </div>
            </div>

            <div class="text-gray-500">
                <form method="POST" action="{{ route('articles.update', $article) }}" class="flex flex-col space-y-4"
                    enctype="multipart/form-data">

                    @csrf
                    @method('PUT')

                    <div>
                        <x-input-label for="title" :value="__('Titre')" />
                        <x-text-input id="title" class="block mt-1 w-full" type="text" name="title"
                            :value="old('title', $article)" autofocus />
                        <x-input-error :messages="$errors->get('title')" class="mt-2" />
                    </div>

                    <div>
                        <x-input-label for="published_at" :value="__('Date de publication')" />
                        <x-text-input id="published_at" class="block mt-1 w-full" type="date" name="published_at"
                            :value="old('published_at', $article->published_at?->toDateString())" />
                        <x-input-error :messages="$errors->get('published_at')" class="mt-2" />
                    </div>

                    <div>
                        <x-input-label for="img" :value="__('Image')" />
                        @if ($article->img_path)
                            <img src="{{ asset('storage/' . $article->img_path) }}" alt="Image de l'article"
                                class="aspect-auto h-64 rounded shadow mt-2 mb-4 object-cover object-center">
                        @endif
                        <x-text-input id="img" class="block mt-1 w-full" type="file" name="img" />
                        <x-input-error :messages="$errors->get('img')" class="mt-2" />
                    </div>

                    <div>
                        <x-input-label for="body" :value="__('Texte de l\'article')" />
                        <textarea id="body"
                            class="block mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            name="body" rows="10">{{ old('body', $article) }}</textarea>
                        <x-input-error :messages="$errors->get('body')" class="mt-2" />
                    </div>

                    <div class="flex justify-end">
                        <x-primary-button type="submit">
                            {{ __('Modifier') }}
                        </x-primary-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
```

Nous avons ajouté un `@if` pour afficher l'image de l'article si elle existe. N'oubliez pas d'ajouter à nouveau le `enctype="multipart/form-data"` au formulaire.

### Contrôleur

Nous allons maintenant modifier le contrôleur `app/Http/Controllers/Admin/ArticleController.php` en commençant par la méthode `store` qui pour rappel permet de créer un nouvel article :

```php
public function store(ArticleStoreRequest $request)
{
    // On crée un nouvel article
    $article = Article::make();

    // On ajoute les propriétés de l'article
    $article->title = $request->validated()['title'];
    $article->body = $request->validated()['body'];
    $article->published_at = $request->validated()['published_at'];
    $article->user_id = Auth::id();


    // Si il y a une image, on la sauvegarde
    if ($request->hasFile('img')) {
        $path = $request->file('img')->store('articles', 'public');
        $article->img_path = $path;
    }

    // On sauvegarde l'article en base de données
    $article->save();

    return redirect()->route('articles.index');
}
```

Nous avons ajouté une condition pour vérifier si l'utilisateur a envoyé une image. Si c'est le cas, on la sauvegarde dans le dossier `public/storage/articles` et on ajoute le chemin de l'image dans la propriété `img_path` de l'article.

Nous allons maintenant modifier la méthode `update` qui permet de modifier un article :

```php
public function update(UpdateArticleRequest $request, Article $article)
    {
        // On modifies les propriétés de l'article
        $article->title = $request->validated()['title'];
        $article->body = $request->validated()['body'];
        $article->published_at = $request->validated()['published_at'];

        // Si il y a une image, on la sauvegarde
        if ($request->hasFile('img')) {
            $path = $request->file('img')->store('articles', 'public');
            $article->img_path = $path;
        }

        // On sauvegarde les modifications en base de données
        $article->save();

        return redirect()->back();
    }
```

Nous avons ajouté une condition pour vérifier si l'utilisateur a envoyé une image. Si c'est le cas, on la sauvegarde dans le dossier `public/storage/articles` et on ajoute le chemin de l'image dans la propriété `img_path` de l'article.

Nous devons aussi modifier les deux FormRequest `app/Http/Requests/ArticleStoreRequest.php` et `app/Http/Requests/UpdateArticleRequest.php` pour ajouter la validation de l'image :

```php
public function rules()
{
    return [
        'title' => 'required|unique:articles|max:255',
        'published_at' => 'nullable|date',
        'img' => 'nullable|image|max:2048',
        'body' => 'required|max:10000',
    ];
}
```

et

```php
public function rules()
{
    return [
        'title' => 'required|string|max:255|unique:articles,title,'.$this->route('article')->id,
        'published_at' => 'nullable|date',
        'img' => 'nullable|image|max:2048',
        'body' => 'required|string',
    ];
}
```

Vous pouvez maintenant ajouter une image à vos articles depuis l'interface d'administration.

Si cela ne fonctionne pas et que vous utilisez Laragon, vous devez effectuer les étapes suivantes :

1. cliquez sur `Menu` puis `PHP` puis `php.ini`
2. cherchez la ligne `;upload_tmp_dir =`
3. supprimez le `;`
4. ajoutez le chemin vers le dossier `tmp` de Laragon : `upload_tmp_dir = "C:\laragon\tmp"`
5. redémarrez Laragon

## Gestion des avatars

Laravel Breeze fournit une page de gestion du profile de l'utilisateur connecté. Nous allons ajouter la gestion des avatars à cette page. Pour cela, nous allons modifier le fichier `resources/views/profile/edit.blade.php` :

```html
<x-app-layout>
  <x-slot name="header">
    <h2
      class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
    >
      {{ __('Profile') }}
    </h2>
  </x-slot>

  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
      <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        <div class="max-w-xl">
          @include('profile.partials.update-profile-information-form')
        </div>
      </div>

      <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        <div class="max-w-xl">
          @include('profile.partials.update-avatar-form')
        </div>
      </div>

      <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        <div class="max-w-xl">
          @include('profile.partials.update-password-form')
        </div>
      </div>

      <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        <div class="max-w-xl">
          @include('profile.partials.delete-user-form')
        </div>
      </div>
    </div>
  </div>
</x-app-layout>
```

Nous avons ajouté un bloc de code dans lequel on inclut le formulaire de modification de l'avatar. Pour cela, nous avons utilisé la directive `@include` de Blade. Elle permet d'inclure un fichier de vue dans une autre vue sans passer par le système de component de Laravel. Nous allons maintenant créer ce fichier `resources/views/profile/partials/update-avatar-form.blade.php` :

```html
<section>
  <header>
    <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
      {{ __('Avatar') }}
    </h2>

    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
      {{ __('Here you can change your avatar. It will be displayed on your
      profile and on your articles.') }}
    </p>
  </header>

  <form
    method="post"
    action="{{ route('profile.avatar.update') }}"
    class="mt-6 space-y-6"
    enctype="multipart/form-data"
  >
    @csrf @method('patch')

    <div class="flex flex-col space-y-2">
      <x-avatar :user="$user" class="h-20 w-20"></x-avatar>

      <div class="">
        <label
          for="avatar"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {{ __('Avatar') }}
        </label>

        <div class="mt-1">
          <input
            type="file"
            name="avatar"
            id="avatar"
            class="block w-full shadow-sm sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-200 dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-opacity-50 dark:focus:ring-offset-gray-800 dark:focus:ring-offset-opacity-50 dark:ring-offset-gray-800 dark:ring-offset-opacity-50 dark:ring-gray-500 dark:ring-opacity-50 rounded-md"
          />
        </div>

        <x-input-error :messages="$errors->get('avatar')" class="mt-2" />
      </div>
    </div>

    <div class="flex items-center gap-4">
      <x-primary-button>{{ __('Save') }}</x-primary-button>

      @if (session('status') === 'profile-updated')
      <p
        x-data="{ show: true }"
        x-show="show"
        x-transition
        x-init="setTimeout(() => show = false, 2000)"
        class="text-sm text-gray-600 dark:text-gray-400"
      >
        {{ __('Saved.') }}
      </p>
      @endif
    </div>
  </form>
</section>
```

Nous avons ajouté un composant `x-avatar` qui affiche l'avatar de l'utilisateur que nous pourrons utiliser à plusieurs endroits de notre application. Nous allons maintenant créer ce composant dans le fichier `resources/views/components/avatar.blade.php` :

```html
<div {{ $attributes->
  merge(['class' => 'rounded-full overflow-hidden']) }}> @if
  ($user->avatar_path)
  <img
    class=" aspect-square object-cover object-center"
    src="{{ asset('storage/' . $user->avatar_path) }}"
    alt="{{ $user->name }}"
  />
  @else
  <div class="flex items-center justify-center bg-indigo-100">
    <span class="text-2xl font-medium text-indigo-800">
      {{ $user->name[0] }}
    </span>
  </div>
  @endif
</div>
```

Nous allons maintenant ajouter une route pour la modification de l'avatar dans le fichier `routes/web.php`. Ajoutez la ligne suivante juste après la route de suppression du profil :

```php
// Gestion du profil utilisateur
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // On ajoute la route pour la modification de l'avatar
    Route::patch('/profile/avatar', [ProfileController::class, 'updateAvatar'])->name('profile.avatar.update');
});
```

Nous allons maintenant créer la méthode `updateAvatar` dans le contrôleur `app/Http/Controllers/ProfileController.php` :

```php
public function updateAvatar(Request $request): RedirectResponse
{
    // Validation de l'image sans passer par une form request
    $request->validate([
        'avatar' => ['required', 'image', 'max:2048'],
    ]);

    // Si l'image est valide, on la sauvegarde
    if ($request->hasFile('avatar')) {
        $user = $request->user();
        $path = $request->file('avatar')->store('avatars', 'public');
            $user->avatar_path = $path;
        $user->save();
    }

    return Redirect::route('profile.edit')->with('status', 'avatar-updated');
}
```

Cette méthode est très simple. Elle valide l'image envoyée par l'utilisateur, la sauvegarde dans le dossier `storage/app/public/avatars` et met à jour le chemin de l'avatar dans la base de données.

Nous allons maintenant afficher l'avatar dans la page des détails d'un article. Pour cela, nous allons modifier le fichier `resources/views/articles/show.blade.php` :

```html
<x-guest-layout>
  <h1 class="font-bold text-xl mb-4 capitalize">{{ $article->title }}</h1>

  <div class="mb-4 text-xs text-gray-500">
    {{ $article->published_at->diffForHumans() }}
  </div>

  <div class="flex items-center justify-center">
    <img
      src="{{ asset('storage/' . $article->img_path) }}"
      alt="illustration de l'article"
      class="rounded shadow aspect-auto object-cover object-center"
    />
  </div>

  <div class="mt-4">{!! \nl2br($article->body) !!}</div>

  <div class="flex mt-8">
    <x-avatar class="h-20 w-20" :user="$article->user" />
    <div class="ml-4 flex flex-col justify-center">
      <div class="text-gray-700">{{ $article->user->name }}</div>
      <div class="text-gray-500">{{ $article->user->email }}</div>
    </div>
  </div>

  <div class="mt-8 flex items-center justify-center">
    <a
      href="{{ route('front.articles.index') }}"
      class="font-bold bg-white text-gray-700 px-4 py-2 rounded shadow"
    >
      Retour à la liste des articles
    </a>
  </div>
</x-guest-layout>
```

Nous avons ajouté le composant `x-avatar` qui affiche l'avatar de l'utilisateur qui a écrit l'article.

## Utiliser des icones

### Installer le package

Nous allons maintenant ajouter des icones à notre application. Nous allons utiliser le package [blade-ui-kit/blade-icons](https://blade-ui-kit.com/blade-icons)

Pour installer ce package, lancez la commande suivante :

```bash
composer require blade-ui-kit/blade-icons
```

Plusieurs packs d'icones sont disponibles. Nous allons utiliser le pack Heroicons. Pour installer ce pack, lancez la commande suivante :

```bash
composer require blade-ui-kit/blade-heroicons
```

En fonction des icones que vous souhaitez utiliser, vous pouvez installer d'autres packs. Vous trouverez la commande d'installation dans la page de détail de chaque icone.

### Utiliser les icones

Pour voir la liste des icones disponibles, rendez-vous sur [https://blade-ui-kit.com/blade-icons#search](https://blade-ui-kit.com/blade-icons#search)

```html
<x-heroicon-o-heart class="w-6 h-6 text-gray-500" />
```

On peut ajouter des classes CSS pour modifier la taille et la couleur de l'icone.

Nous allons maintenant ajouter une icone pour le bouton d'ajout, de modification et de suppression d'un article dans le fichier `resources/views/articles/index.blade.php` :

```html
<x-app-layout>
  <x-slot name="header">
    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
      {{ __('Articles') }}
    </h2>
  </x-slot>

  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
          <div class="flex justify-between mt-8">
            <div class="text-2xl">Liste des articles</div>

            <div class="flex  items-center justify-center space-x-8">
              <a
                href="{{ route('articles.create') }}"
                class="text-gray-500 font-bold py-2 px-4 rounded hover:bg-gray-200 transition flex items-center"
              >
                <x-heroicon-o-plus class="w-4 h-4 mr-2" />
                Ajouter un article
              </a>
            </div>
          </div>

          <div class="mt-6 text-gray-500">
            <table class="table-auto w-full">
              <thead>
                <tr class="uppercase text-left">
                  <th class="px-4 py-2 border">Titre</th>
                  <th class="px-4 py-2 border">Auteur</th>
                  <th class="px-4 py-2 border">Date de publication</th>
                  <th class="px-4 py-2 border">Dernière modification</th>
                  <th class="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                @foreach ($articles as $article)
                <tr
                  class="hover:bg-gray-50 odd:bg-gray-100 hover:odd:bg-gray-200 transition"
                >
                  <td class="border px-4 py-2">{{ $article->title }}</td>
                  <td class="border px-4 py-2">{{ $article->user->name }}</td>
                  <td class="border px-4 py-2">
                    {{ $article->published_at?->diffForHumans() ?? 'Pas de date'
                    }}
                  </td>
                  <td class="border px-4 py-2">
                    {{ $article->updated_at->diffForHumans() }}
                  </td>
                  <td class="border px-4 py-2 space-x-4">
                    <div class="flex space-x-4">
                      <a
                        href="{{ route('articles.edit', $article->id) }}"
                        class="text-blue-400"
                      >
                        <x-heroicon-o-pencil class="w-5 h-5" />
                      </a>

                      <button
                        x-data="{ id: {{ $article->id }} }"
                        x-on:click.prevent="window.selected = id; $dispatch('open-modal', 'confirm-article-deletion');"
                        type="submit"
                        class="text-red-400"
                      >
                        <x-heroicon-o-trash class="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
                @endforeach
              </tbody>
            </table>

            <div class="mt-4">{{ $articles->links() }}</div>
          </div>
        </div>
      </div>
    </div>
    <x-modal name="confirm-article-deletion" focusable>
      <form
        method="post"
        onsubmit="event.target.action= '/admin/articles/' + window.selected"
        class="p-6"
      >
        @csrf @method('DELETE')

        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
          Êtes-vous sûr de vouloir supprimer cet article ?
        </h2>

        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Cette action est irréversible. Toutes les données seront supprimées.
        </p>

        <div class="mt-6 flex justify-end">
          <x-secondary-button x-on:click="$dispatch('close')">
            Annuler
          </x-secondary-button>

          <x-danger-button class="ml-3" type="submit">
            Supprimer
          </x-danger-button>
        </div>
      </form>
    </x-modal>
  </div>
</x-app-layout>
```

On a ajouté les lignes suivantes :

```html
<x-heroicon-o-plus class="w-4 h-4 mr-2" />
```

```html
<x-heroicon-o-pencil class="w-5 h-5" />
```

```html
<x-heroicon-o-trash class="w-5 h-5" />
```

## Recherche dans la liste des articles

Nous allons ajouter une barre de recherche à la liste des articles de la page `/articles`. Pour cela, nous allons modifier la méthode `index` du controller `ArticleController` et la vue `resources/views/articles/index.blade.php`.

### Controller

Dans le controller `ArticleController`, nous allons modifier la méthode `index` pour ajouter des clauses `where` à la requête de récupération des articles qui prendront en compte la recherche de l'utilisateur.

```php
public function index(Request $request)
{
    $articles = Article::where('published_at', '<', now())
        ->where('body', 'LIKE', '%'.$request->query('search').'%')
        ->orWhere('title', 'LIKE', '%'.$request->query('search').'%')
        ->orWhereHas('user', function ($query) use ($request) {
            $query->where('name', 'LIKE', '%'.$request->query('search').'%');
        })
        ->orderByDesc('published_at')
        ->paginate(12)
    ;

    return view('articles.index', [
        'articles' => $articles,
    ]);
}
```

Nous avons ajouté les lignes suivantes :

```php
->where('body', 'LIKE', '%'.$request->query('search').'%')
->orWhere('title', 'LIKE', '%'.$request->query('search').'%')
->orWhereHas('user', function ($query) use ($request) {
    $query->where('name', 'LIKE', '%'.$request->query('search').'%');
})
```

La méthode `where` permet de filtrer les résultats de la requête. La méthode `orWhere` permet d'ajouter une clause `OR` à la requête. La méthode `orWhereHas` permet d'ajouter une clause `OR` à la requête en vérifiant si une relation existe.

1. La première clause `where` permet de filtrer les articles dont le texte contient la chaîne de caractères recherchée.
2. La deuxième clause `orWhere` permet de filtrer les articles dont le titre contient la chaîne de caractères recherchée.
3. La troisième clause `orWhereHas` permet de filtrer les articles dont l'auteur contient la chaîne de caractères recherchée.

### Vue

Dans la vue `resources/views/articles/index.blade.php`, nous allons ajouter un formulaire de recherche à la page. Il utilisera la méthode `GET` et la route `articles.index` qui est la route qui pointe vers la méthode `index` du controller `ArticleController`.

```html
<x-guest-layout>
  <h1 class="font-bold text-xl mb-4">Liste des articles</h1>

  <form action="{{ route('front.articles.index') }}" method="GET" class="mb-4">
    <div class="flex items-center">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Rechercher un article"
        class="flex-grow border border-gray-300 rounded shadow px-4 py-2 mr-4"
        value="{{ request()->search }}"
        autofocus
      />
      <button
        type="submit"
        class="bg-white text-gray-600 px-4 py-2 rounded-lg shadow"
      >
        <x-heroicon-o-magnifying-glass class="h-5 w-5" />
      </button>
    </div>
  </form>

  <ul class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
    @foreach ($articles as $article)
    <li>
      <x-article-card :article="$article" />
    </li>
    @endforeach
  </ul>

  <div class="mt-8">{{ $articles->links() }}</div>
</x-guest-layout>
```

Nous avons aussi ajouté un attribut `value` à l'input de recherche pour que la valeur de la recherche soit toujours présente dans le champ de recherche après avoir soumis le formulaire.

## Gestion des rôles des utilisateurs

Nous allons ajouter une gestion des rôles des utilisateurs. Nous allons créer un nouveau modèle `Role` qui va permettre de définir les rôles des utilisateurs.

L'application va utiliser les rôles suivants :

- `admin` : l'utilisateur est administrateur de l'application. Il peut tout faire.
- `author` : l'utilisateur est auteur de l'application. Il peut créer et modifier ses articles. Il peut aussi commenter les articles.
- `user` : l'utilisateur est un utilisateur lambda. Il peut seulement commenter les articles.

### Création du modèle

Nous allons créer un nouveau modèle `Role` avec la commande suivante :

```bash
php artisan make:model Role -m
```

On ne demande que la création du modèle et de la migration.

### Modèle

Nous allons modifier le modèle `Role` pour y définir les constantes des rôles disponibles ainsi qu'une méthode statique `roles` qui retourne un tableau contenant les rôles disponibles.
Nous ajoutons aussi une relation `users` qui permet de récupérer les utilisateurs qui ont ce rôle.

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    // Constantes des rôles disponibles
    public const ADMIN = 'Administrateur';
    public const AUTHOR = 'Auteur';
    public const USER = 'Utilisateur';

    public static function roles(): array
    {
        return [
            self::ADMIN,
            self::AUTHOR,
            self::USER,
        ];
    }

    public function users(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(User::class);
    }
}
```

Nous devons aussi ajouter la méthode `role` dans le modèle `User` pour récupérer le rôle de l'utilisateur après la méthode `articles` :

```php
public function role(): \Illuminate\Database\Eloquent\Relations\BelongsTo
{
    return $this->belongsTo(Role::class);
}
```

### Migration

Nous allons modifier la date au début du nom du fichier de migration `[DATETIME]_create_roles_table.php` pour qu'il soit exécuté avant la migration de création de la table `users`.

```bash
2014_09_12_000000_create_roles_table.php
2014_10_12_000000_create_users_table.php
# autres migrations
```

Nous allons modifier la migration des rôles `2014_09_12_000000_create_roles_table.php` comme ceci :

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->enum('name', \App\Models\Role::roles());
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
};
```

Nous avons ajouté une colonne `name` de type `enum` qui contient les rôles disponibles. Nous avons utilisé la méthode statique `roles` du modèle `Role` pour récupérer les rôles disponibles. Cela veut dire que le champ `name` de la table `roles` ne peut contenir que les valeurs `Administrateur`, `Auteur` et `Utilisateur`.

Nous allons modifier la migration de création de la table `users` `2014_10_12_000000_create_users_table.php` comme ceci :

```php
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('avatar_path')->nullable();
            $table->foreignId('role_id')->constrained()->default(3);
            $table->rememberToken();
            $table->timestamps();
        });
    }
```

Nous avons ajouté un champ `role_id` qui est une clé étrangère vers la table `roles`. Nous avons aussi ajouté une valeur par défaut de `3` qui correspond au rôle `Utilisateur`.

### Seeders

Nous allons commencer par remettre de l'ordre dans les seeders. Nous allons créer des seeders pour les rôles, les utilisateurs et les articles.

Pour créer les seeders, nous allons utiliser la commande suivante :

```bash
php artisan make:seeder RoleSeeder
php artisan make:seeder UserSeeder
php artisan make:seeder ArticleSeeder
```

Nous allons modifier le fichier `DatabaseSeeder.php` pour qu'il appelle les seeders de rôles, d'utilisateurs et d'articles :

```php
<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        // On appelle les seeders dans l'ordre pour éviter les erreurs de clés étrangères
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            ArticleSeeder::class,
        ]);
    }
}
```

Ensuite, nous allons modifier les seeders pour qu'ils créent les rôles, les utilisateurs et les articles.

Nous allons commencer par le seeder de rôles `RoleSeeder.php` :

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // On crée les rôles
        \App\Models\Role::create([
            'name' => \App\Models\Role::ADMIN,
        ]);

        \App\Models\Role::create([
            'name' => \App\Models\Role::AUTHOR,
        ]);

        \App\Models\Role::create([
            'name' => \App\Models\Role::USER,
        ]);
    }
}
```

Nous allons ensuite modifier le seeder d'utilisateurs `UserSeeder.php` :

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // On crée un admin
        \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'role_id' => 1,
        ]);

        // 10 auteurs
        \App\Models\User::factory(10)->create([
            'role_id' => 2,
        ]);

        // On crée notre utilisateur de test
        \App\Models\User::factory()->create([
            'name' => 'User User',
            'email' => 'test@example.com',
            'role_id' => 3,
        ]);

        // 30 utilisateurs lambda
        \App\Models\User::factory(30)->create([
            'role_id' => 3,
        ]);
    }
}
```

Et enfin, nous allons modifier le seeder d'articles `ArticleSeeder.php` :

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Création de 50 articles
        \App\Models\Article::factory(50)->create();
    }
}
```

Nous allons maintenant recréer la base de données et la remplir avec les données de test :

```bash
php artisan migrate:fresh --seed
```

Output :

```bash
λ php artisan migrate:fresh --seed

  Dropping all tables .................. 52ms DONE

   INFO  Preparing database.

  Creating migration table ............. 21ms DONE

   INFO  Running migrations.

  2014_09_12_190756_create_roles_table . 28ms DONE
  2014_10_12_000000_create_users_table . 72ms DONE
  2014_10_12_100000_create_password_resets_table  83ms DONE
  2019_08_19_000000_create_failed_jobs_table  35ms DONE
  2019_12_14_000001_create_personal_access_tokens_table  54ms DONE
  2023_01_30_133646_create_articles_table  64ms DONE
   INFO  Seeding database.

  Database\Seeders\RoleSeeder ............ RUNNING
  Database\Seeders\RoleSeeder ....... 8.39 ms DONE

  Database\Seeders\UserSeeder ............ RUNNING
  Database\Seeders\UserSeeder ..... 103.84 ms DONE

  Database\Seeders\ArticleSeeder ......... RUNNING
  Database\Seeders\ArticleSeeder  27,030.15 ms DONE
```

Si vous avez des erreurs, vérifiez que vous avez bien réalisé les étapes précédentes.

## Gestion des utilisateurs

Nous allons maintenant créer un système de gestion des utilisateurs avec les fonctionnalités suivantes :

- Uniquement accessible aux utilisateurs ayant le rôle `Administateur`
- Afficher la liste des utilisateurs
- Afficher les détails et modifier le rôle d'un utilisateur

### Création du contrôleur

Nous allons créer un contrôleur de type `resource` pour gérer les utilisateurs :

```bash
php artisan make:controller Admin/UserController --resource --model=User
```

### Création des routes

On va ajouter la route `resource` pour le contrôleur `UserController` après celle des articles :

```php
Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    // Gestion des articles (création, modification, suppression)
    Route::resource('/articles', AdminArticleController::class);

    // Gestion des utilisateurs (Détails et changement de rôle)
    Route::resource('/users', UserController::class);
});
```

### Création des vues

Nous allons créer les vues pour les actions `index`, `edit` du contrôleur `UserController`.

#### Vue index

Nous allons d'abord ajouter un dossier `users` dans le dossier `resources/views/admin` et ensuite, créer la vue `index.blade.php` dans le dossier `resources/views/admin/users` :

```html
<x-app-layout>
  <x-slot name="header">
    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
      {{ __('Utilisateurs') }}
    </h2>
  </x-slot>

  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
          <div class="flex justify-between mt-8">
            <div class="text-2xl">Liste des utilisateurs</div>

            <div class="flex items-center justify-center space-x-8"></div>
          </div>

          <div class="mt-6 text-gray-500">
            <table class="table-auto w-full">
              <thead>
                <tr class="uppercase text-left">
                  <th class="px-4 py-2 border">Nom</th>
                  <th class="px-4 py-2 border">Email</th>
                  <th class="px-4 py-2 border">Rôle</th>
                  <th class="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                @foreach ($users as $user)
                <tr
                  class="hover:bg-gray-50 odd:bg-gray-100 hover:odd:bg-gray-200 transition"
                >
                  <td class="border px-4 py-2">{{ $user->name }}</td>
                  <td class="border px-4 py-2">{{ $user->email }}</td>
                  <td class="border px-4 py-2">{{ $user->role->name }}</td>
                  <td class="border px-4 py-2 space-x-4">
                    <div class="flex space-x-4">
                      <a
                        href="{{ route('users.edit', $user) }}"
                        class="text-blue-400"
                      >
                        <x-heroicon-o-pencil class="w-5 h-5" />
                      </a>
                    </div>
                  </td>
                </tr>
                @endforeach
              </tbody>
            </table>

            <div class="mt-4">{{ $users->links() }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</x-app-layout>
```

Nous affichons la liste des utilisateurs dans un tableau avec les informations suivantes :

- Nom
- Email
- Rôle
- Actions: Modifier

Nous utilisons la pagination de Laravel pour afficher les utilisateurs par page.

#### Vue edit

Nous allons créer la vue `edit.blade.php` dans le dossier `resources/views/admin/users` :

```html
<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Utilisateurs') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
            <div class="flex justify-between mt-8">
                <div class=" text-2xl">
                    Détails de l'utilisateur
                </div>
            </div>



            <div class="flex text-gray-500">
                <div class="flex justify-center items-center">
                    <x-avatar :user="$user" class="w-24 h-24" />
                </div>
                <dl class="mt-6 space-y-6">
                    <div class="flex space-x-4">
                        <dt class="text-sm font-medium text-gray-500 w-20 text-right">
                            Nom
                        </dt>
                        <dd class="text-sm text-gray-900">
                            {{ $user->name }}
                        </dd>
                    </div>
                    <div class="flex space-x-4">
                        <dt class="text-sm font-medium text-gray-500 w-20 text-right">
                            Email
                        </dt>
                        <dd class="text-sm text-gray-900">
                            {{ $user->email }}
                        </dd>
                    </div>
                    <div class="flex space-x-4">
                        <dt class="text-sm font-medium text-gray-500 w-20 text-right">
                            Rôle
                        </dt>
                        <dd class="text-sm text-gray-900">
                            {{ $user->role->name }}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
            <div class="flex justify-between mt-8">
                <div class=" text-2xl">
                    Modifier le rôle de l'utilisateur
                </div>
            </div>

            <div class="text-gray-500">
                <form method="POST" action="{{ route('users.update', $user) }}" class="flex flex-col space-y-4">

                    @csrf
                    @method('PUT')

                    <div>
                        <x-input-label for="role" :value="__('Rôle')" />

                        <select id="role" name="role"
                            class="block mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required>
                            @foreach ($roles as $role)
                                <option value="{{ $role }}" {{ $role == $user->role->name ? 'selected' : '' }}>
                                    {{ $role }}
                                </option>
                            @endforeach
                        </select>

                        <x-input-error :messages="$errors->get('role')" class="mt-2" />
                    </div>

                    <div class="flex justify-end">
                        <x-primary-button type="submit">
                            {{ __('Modifier') }}
                        </x-primary-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
```

Nous affichons les informations de l'utilisateur et nous créons un formulaire pour modifier le rôle de l'utilisateur. Nous utilisons un input de type `select` pour afficher la liste des rôles.

### Controller

Nous allons modifier le controller `UserController` dans le fichier `app/Http/Controllers/Admin/UserController.php` en commençant par la méthode `index` :

```php
public function index()
{
    // On récupère tous les utilisateurs avec pagination de 10 par page
    $users = User::paginate(10);

    // On passe les utilisateurs à la vue `admin.users.index`
    return view('admin.users.index', [
        'users' => $users,
    ]);
}
```

Rien de nouveau ici, nous récupérons tous les utilisateurs avec pagination de 10 par page et nous les passons à la vue `admin.users.index`.

Nous allons maintenant modifier la méthode `edit` :

```php
    public function edit(User $user)
    {
        // On récupère tous les rôles disponibles
        // On utilise la méthode pluck() pour récupérer uniquement le nom des rôles dans un tableau
        $roles = \App\Models\Role::pluck('name');

        // On passe l'utilisateur et les rôles à la vue `admin.users.edit`
        return view('admin.users.edit', [
            'user' => $user,
            'roles' => $roles,
        ]);
    }
```

Pour rappel, la méthode `edit` reçoit en paramètre un objet `User` grâce à la route `users/{user}/edit`.
Cette route est responsable de générer la vue comportant le formulaire de modification du rôle de l'utilisateur. Nous récupérons donc tous les rôles disponibles et nous les passons à la vue `admin.users.edit` avec l'utilisateur.

Nous allons maintenant modifier la méthode `update` :

```php
    public function update(Request $request, User $user)
    {
        // Validation du rôle
        $request->validate([
            // On vérifie que le rôle est bien un des rôles définis dans le modèle Role
            'role' => 'required|in:'.implode(',', \App\Models\Role::roles()),
        ]);

        // Mise à jour du rôle
        // On récupère le rôle correspondant au nom du rôle passé dans la requête
        $role = \App\Models\Role::where('name', $request->role)->first();
        // On associe le rôle à l'utilisateur en passant par la relation
        $user->role()->associate($role);
        // On sauvegarde l'utilisateur en base de données
        $user->save();

        // Redirection vers la page de modification de l'utilisateur
        return redirect()->back();
    }
```

Nous validons le rôle passé dans la requête. Nous récupérons le rôle correspondant au nom du rôle passé dans la requête et nous l'associons à l'utilisateur en passant par la relation `role`. Nous sauvegardons l'utilisateur en base de données et nous redirigeons vers la page de modification de l'utilisateur.

### Autorisations avec les policies

Nous n'avons pas encore protégé l'accès aux pages réservées aux administrateurs. Pour gérer finement les autorisations des différents groupes d'utilisateurs, Laravel nous propose les policies.

Les policies sont des classes qui permettent de définir les autorisations des utilisateurs. Pour chaque Model, nous pouvons définir une policy qui permettra de définir les autorisations pour les actions CRUD (Create, Read, Update, Delete).

Nous allons créer une policy pour le modèle `User` en utilisant la commande Artisan suivante :

```bash
php artisan make:policy UserPolicy --model=User
```

Nous obtenons le fichier `app/Policies/UserPolicy.php` qui contient les méthodes `create`, `view`, `update` et `delete` qui correspondent aux actions CRUD. Nous allons commencer par définir les autorisations pour la méthode `viewAny` qui nous servira à déterminer si l'utilisateur peut accéder à la liste des utilisateurs :

```php
public function viewAny(User $user)
{
    // Seul l'administrateur peut voir la liste des utilisateurs
    return \App\Models\Role::ADMIN === $user->role->name;
}
```

Cette méthode retourne `true` si l'utilisateur est un administrateur et `false` sinon.

Nous allons maintenant définir les autorisations pour la méthode `update` qui nous servira à déterminer si l'utilisateur peut modifier un utilisateur :

```php
public function update(User $user, User $model)
{
    return $user->role->name === \App\Models\Role::ADMIN;
}
```

La méthode `update` reçoit en paramètre l'utilisateur connecté et l'utilisateur à modifier. Cette méthode retourne `true` si l'utilisateur connecté est un administrateur et `false` sinon, comme pour la méthode `viewAny`.

On n'a pas besoin de définir les autorisations pour les méthodes `create`, `view` et `delete` car nous n'utilisons pas ces méthodes dans notre application pour le modèle `User`.

Nous allons maintenant modifier le controller `UserController` pour utiliser les policies. Nous allons commencer par modifier la méthode `index` :

```php
public function index()
{
    // On vérifie que l'utilisateur courant est un administrateur
    Gate::authorize('viewAny', User::class);

    // On récupère tous les utilisateurs avec pagination de 10 par page
    $users = User::paginate(10);

    // On passe les utilisateurs à la vue `admin.users.index`
    return view('admin.users.index', [
        'users' => $users,
    ]);
}
```

Nous utilisons la classe `Gate` pour appeler la méthode `viewAny` de la policy `UserPolicy` dans laquelle nous vérifions que l'utilisateur courant est un administrateur. Si ce n'est pas le cas, une exception `Illuminate\Auth\Access\AuthorizationException` sera levée.

N'oubliez pas d'importer la classe `Gate` en haut du fichier `app/Http/Controllers/Admin/UserController.php` :

```php
use Illuminate\Support\Facades\Gate;
```

Nous allons maintenant modifier la méthode `edit` :

```php
public function edit(User $user)
{
    // On vérifie que l'utilisateur courant est un administrateur
    Gate::authorize('update', $user);

    // On récupère tous les rôles disponibles
    // On utilise la méthode pluck() pour récupérer uniquement le nom des rôles dans un tableau
    $roles = \App\Models\Role::pluck('name');

    // On passe l'utilisateur et les rôles à la vue `admin.users.edit`
    return view('admin.users.edit', [
        'user' => $user,
        'roles' => $roles,
    ]);
}
```

Nous utilisons la classe `Gate` pour appeler la méthode `update` de la policy `UserPolicy`. Cette méthode reçoit en paramètre l'utilisateur courant et l'utilisateur à modifier. Si l'utilisateur courant n'est pas un administrateur, une exception `Illuminate\Auth\Access\AuthorizationException` sera levée.

Nous allons maintenant ajouter la même ligne de code dans la méthode `update` :

```php
public function update(Request $request, User $user)
{
    // On vérifie que l'utilisateur courant est un administrateur
    Gate::authorize('update', $user);

    // ... code existant ...
}
```

Nous avons maintenant protégé l'accès aux pages réservées aux administrateurs. Vous pouvez tester en vous connectant avec un utilisateur qui n'est pas un administrateur et en essayant d'accéder à la page `/admin/users` ou à la page de modification d'un utilisateur `/admin/users/1/edit`.

### Navigation

On doit aussi afficher le lien vers la page de gestion des utilisateurs dans la barre de navigation seulement si l'utilisateur est un administrateur. Pour cela, nous allons modifier le fichier `resources/views/layouts/navigation.blade.php` :

```html
<nav
  x-data="{ open: false }"
  class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"
>
  <!-- Primary Navigation Menu -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <!-- Logo -->
        <div class="shrink-0 flex items-center">
          <a href="{{ route('dashboard') }}">
            <x-application-logo
              class="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"
            />
          </a>
        </div>

        <!-- Navigation Links -->
        <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <x-nav-link
            :href="route('dashboard')"
            :active="request()->routeIs('dashboard')"
          >
            {{ __('Dashboard') }}
          </x-nav-link>

          <x-nav-link
            :href="route('articles.index')"
            :active="request()->routeIs('articles.*')"
          >
            {{ __('Articles') }}
          </x-nav-link>

          @can('viewAny', App\Models\User::class)
          <x-nav-link
            :href="route('users.index')"
            :active="request()->routeIs('users.*')"
          >
            {{ __('Utilisateurs') }}
          </x-nav-link>
          @endcan
        </div>
      </div>

      <!-- Settings Dropdown -->
      <div class="hidden sm:flex sm:items-center sm:ml-6">
        <x-dropdown align="right" width="48">
          <x-slot name="trigger">
            <button
              class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
            >
              <div>{{ Auth::user()->name }}</div>

              <div class="ml-1">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </x-slot>

          <x-slot name="content">
            <x-dropdown-link :href="route('profile.edit')">
              {{ __('Profile') }}
            </x-dropdown-link>

            <!-- Authentication -->
            <form method="POST" action="{{ route('logout') }}">
              @csrf

              <x-dropdown-link
                :href="route('logout')"
                onclick="event.preventDefault();
                                                this.closest('form').submit();"
              >
                {{ __('Log Out') }}
              </x-dropdown-link>
            </form>
          </x-slot>
        </x-dropdown>
      </div>

      <!-- Hamburger -->
      <div class="-mr-2 flex items-center sm:hidden">
        <button
          @click="open = ! open"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
        >
          <svg
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              :class="{ 'hidden': open, 'inline-flex': !open }"
              class="inline-flex"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              :class="{ 'hidden': !open, 'inline-flex': open }"
              class="hidden"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Responsive Navigation Menu -->
  <div :class="{ 'block': open, 'hidden': !open }" class="hidden sm:hidden">
    <div class="pt-2 pb-3 space-y-1">
      <x-responsive-nav-link
        :href="route('dashboard')"
        :active="request()->routeIs('dashboard')"
      >
        {{ __('Dashboard') }}
      </x-responsive-nav-link>

      <x-responsive-nav-link
        :href="route('articles.index')"
        :active="request()->routeIs('articles.*')"
      >
        {{ __('Articles') }}
      </x-responsive-nav-link>

      @can('viewAny', App\Models\User::class)
      <x-responsive-nav-link
        :href="route('users.index')"
        :active="request()->routeIs('users.*')"
      >
        {{ __('Utilisateurs') }}
      </x-responsive-nav-link>
      @endcan
    </div>

    <!-- Responsive Settings Options -->
    <div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
      <div class="px-4">
        <div class="font-medium text-base text-gray-800 dark:text-gray-200">
          {{ Auth::user()->name }}
        </div>
        <div class="font-medium text-sm text-gray-500">
          {{ Auth::user()->email }}
        </div>
      </div>

      <div class="mt-3 space-y-1">
        <x-responsive-nav-link :href="route('profile.edit')">
          {{ __('Profile') }}
        </x-responsive-nav-link>

        <!-- Authentication -->
        <form method="POST" action="{{ route('logout') }}">
          @csrf

          <x-responsive-nav-link
            :href="route('logout')"
            onclick="event.preventDefault();
                                        this.closest('form').submit();"
          >
            {{ __('Log Out') }}
          </x-responsive-nav-link>
        </form>
      </div>
    </div>
  </div>
</nav>
```

Nous avons ajouté le lien vers la liste des utilisateurs dans le menu de navigation pour pc et pour téléphone:

```html
@can('viewAny', App\Models\User::class)
<x-nav-link
  :href="route('users.index')"
  :active="request()->routeIs('users.*')"
>
  {{ __('Utilisateurs') }}
</x-nav-link>
@endcan
```

et

```html
@can('viewAny', App\Models\User::class)
<x-responsive-nav-link
  :href="route('users.index')"
  :active="request()->routeIs('users.*')"
>
  {{ __('Utilisateurs') }}
</x-responsive-nav-link>
@endcan
```

Nous utilisons la directive `@can` pour vérifier si l'utilisateur connecté a la permission de voir la liste des utilisateurs. Si c'est le cas, nous affichons le lien.

### Autorisations pour les articles

Vous pouvez maintenant faire la même chose pour protéger la partie articles. Vous devrez créer une policy pour les articles et définir les autorisations. Ensuite, utilisez la classe Gate dans les contrôleurs et la directive `@can` dans les vues pour vérifier les autorisations.

- Les utilisateurs ne peuvent rien faire avec les articles.
- Les auteurs peuvent créer des articles, modifier leurs propres articles et supprimer leurs propres articles.
- Les administrateurs peuvent créer des articles, modifier tous les articles et supprimer tous les articles.

## Système de commentaires

Nous allons ajouter un système de commentaires à notre blog. Les utilisateurs connectés pourront commenter les articles. Les administrateurs et le propriétaire d'un article pourront supprimer les commentaires.

Pour cela, nous allons devoir créer un modèle Comment et une table comments dans la base de données. La table comments aura les champs suivants:

- id
- article_id
- user_id
- body
- created_at
- updated_at

Le modèle Comment aura les relations suivantes:

- article: belongsTo
- user: belongsTo

Nous devrons aussi définir les relations inverse dans les modèles Article et User.

Ensuite, nous devrons modifier l'`ArticleController` pour ajouter la possibilité de commenter un article. Nous allons aussi modifier la vue `show` pour afficher les commentaires et ajouter un formulaire pour ajouter un commentaire.

Nous n'oublierons pas de gérer les autorisations pour les commentaires.

### Modèle Comment

Nous allons créer le modèle Comment avec la commande artisan:

```bash
php artisan make:model Comment -mfs
```

Nous avons utilisé les options `-mfs` pour créer le modèle, la migration, la factory et le seeder en une seule commande.

Nous allons d'abord modifier le fichier de migration `create_comments_table` pour ajouter les champs `body`, `article_id` et `user_id`:

```php
public function up()
{
    Schema::create('comments', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->cascadeOnDelete();
        $table->foreignId('article_id')->nullable()->constrained()->nullOnDelete();
        $table->text('body');
        $table->timestamps();
    });
}
```

Nous avons ajouté les champs `user_id` et `article_id` qui seront utilisés pour les relations. Nous avons aussi ajouté le champ `body` qui contiendra le texte du commentaire.

Nous allons ensuite modifier le modèle Comment pour ajouter les relations:

```php
class Comment extends Model
{
    use HasFactory;

    public function article()
    {
        return $this->belongsTo(Article::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
```

Nous devons aussi modifier les modèles Article et User pour ajouter les relations inverses:

```php
class Article extends Model
{
    // ... code précédent

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
```

et

```php
class User extends Authenticatable
{
    // ... code précédent

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
```

### Données de test

Nous allons ajouter des données de test pour les commentaires. Nous allons modifier la `CommentFactory` pour générer des données aléatoires:

```php
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // n'importe quel utilisateur
            'user_id' => \App\Models\User::get()->random()->id,
            // n'importe quel article
            'article_id' => \App\Models\Article::get()->random()->id,
            // un texte aléatoire de 20 à 400 caractères
            'body' => fake()->realTextBetween($minNbChars = 20, $maxNbChars = 400),
            // une date aléatoire entre -2 mois et maintenant
            'created_at' => fake()->dateTimeBetween('-2 months', 'now'),
        ];
    }
}
```

Nous allons modifier le seeder `CommentSeeder` pour utiliser la factory:

```php
class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        \App\Models\Comment::factory(300)->create();
    }
}
```

Nous allons ensuite modifier la méthode `run` du seeder `DatabaseSeeder` pour appeler le seeder `CommentSeeder`:

```php
    public function run()
    {
        // On appelle les seeders dans l'ordre pour éviter les erreurs de clés étrangères
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            ArticleSeeder::class,
            CommentSeeder::class,
        ]);
    }
```

Vous pouvez maintenant recréer la base de données et exécuter les seeders:

```bash
php artisan migrate:fresh --seed
```

### Contrôleur ArticleController

Nous allons modifier le contrôleur `ArticleController` de la partie front-office de notre blog pour afficher les commentaires.

Nous allons modifier la méthode `show` pour récupérer les commentaires de l'article et les passer à la vue:

```php
public function show($id)
{
    // On récupère l'article et on renvoie une erreur 404 si l'article n'existe pas
    $article = Article::findOrFail($id);
    // On récupère les commentaires de l'article, avec les utilisateurs associés (via la relation)
    // On les trie par date de création (le plus ancien en premier)
    $comments = $article
        ->comments()
        ->with('user')
        ->orderBy('created_at')
        ->get()
    ;

    // On renvoie la vue avec les données
    return view('articles.show', [
        'article' => $article,
        'comments' => $comments,
    ]);
}
```

Nous allons ensuite modifier la vue `articles.show` pour afficher les commentaires:

```php
<x-guest-layout>
    <h1 class="font-bold text-xl mb-4 capitalize">{{ $article->title }}</h1>

    <div class="mb-4 text-xs text-gray-500">
        {{ $article->published_at->diffForHumans() }}
    </div>

    <div class="flex items-center justify-center">
        <img src="{{ asset('storage/' . $article->img_path) }}" alt="illustration de l'article"
            class="rounded shadow aspect-auto object-cover object-center">
    </div>

    <div class="mt-4">
        {!! \nl2br($article->body) !!}
    </div>

    <div class="flex mt-8">
        <x-avatar class="h-20 w-20" :user="$article->user" />
        <div class="ml-4 flex flex-col justify-center">
            <div class="text-gray-700">
                {{ $article->user->name }}
            </div>
            <div class="text-gray-500">
                {{ $article->user->email }}
            </div>
        </div>
    </div>

    <div class="mt-8 flex items-center justify-center">
        <a href="{{ route('front.articles.index') }}" class="font-bold bg-white text-gray-700 px-4 py-2 rounded shadow">
            Retour à la liste des articles
        </a>
    </div>

    <div class="mt-8">
        <h2 class="font-bold text-xl mb-4">Commentaires</h2>

        <div class="flex-col space-y-4">
            @forelse ($article->comments as $comment)
                <div class="flex bg-white rounded-md shadow p-4 space-x-4">
                    <div class="flex justify-start items-start h-full">
                        <x-avatar class="h-10 w-10" :user="$comment->user" />
                    </div>
                    <div class="flex flex-col justify-center">
                        <div class="text-gray-700">
                            {{ $comment->user->name }}
                        </div>
                        <div class="text-gray-500">
                            {{ $comment->created_at->diffForHumans() }}
                        </div>
                        <div class="text-gray-700">
                            {{ $comment->body }}
                        </div>
                    </div>
                </div>
            @empty
                <div class="flex bg-white rounded-md shadow p-4 space-x-4">
                    Aucun commentaire pour l'instant
                </div>
            @endforelse
        </div>
</x-guest-layout>
```

Si vous visitez la page d'un article, vous devriez voir les commentaires en bas de la page.

### Routes pour les commentaires

Nous allons maintenant ajouter les routes pour les commentaires, après la route `front.articles.show`:

```php
// ... autres routes

// Détail d'un article
Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('front.articles.show');

// Gestion des commentaires, uniquement pour les utilisateurs authentifiés
Route::middleware('auth')->group(function () {
    // Ajout d'un commentaire
    Route::post('/articles/{article}/comments', [ArticleController::class, 'addComment'])->name('front.articles.comments.add');
    // Suppression d'un commentaire
    Route::delete('/articles/{article}/comments/{comment}', [ArticleController::class, 'deleteComment'])->name('front.articles.comments.delete');
});

// ... autres routes
```

Nous avons donc ajouté deux routes:

- `front.articles.comments.add` pour ajouter un commentaire
- `front.articles.comments.delete` pour supprimer un commentaire

### Méthodes addComment et deleteComment

Nous allons maintenant ajouter les méthodes `addComment` et `deleteComment` au contrôleur `ArticleController`.

Nous allons commencer par la méthode `addComment`:

```php
public function addComment(Request $request, Article $article)
{
    // On vérifie que l'utilisateur est authentifié
    $request->validate([
        'body' => 'required|string|max:2000',
    ]);

    // On crée le commentaire
    $comment = $article->comments()->make();
    // On remplit les données
    $comment->body = $request->input('body');
    $comment->user_id = auth()->user()->id;
    // On sauvegarde le commentaire
    $comment->save();

    // On redirige vers la page de l'article
    return redirect()->back();
}
```

Nous allons ensuite ajouter la méthode `deleteComment`:

```php
public function deleteComment(Article $article, Comment $comment)
{
    // On vérifie que l'utilisateur à le droit de supprimer le commentaire
    $this->authorize('delete', $comment);

    // On supprime le commentaire
    $comment->delete();

    // On redirige vers la page de l'article
    return redirect()->back();
}
```

Vous noterez que nous utilisons la méthode `authorize` du controller pour vérifier que l'utilisateur a le droit de supprimer le commentaire à la place de la méthode `authorize` du `Gate`. C'est une autre façon de faire, le résultat est le même.

### Autorisation

Nous allons maintenant ajouter une autorisation pour la suppression d'un commentaire.

Nous allons créer un fichier `CommentPolicy.php` à l'aide de la commande suivante:

```bash
php artisan make:policy CommentPolicy
```

Nous allons ensuite modifier le fichier `app/Policies/CommentPolicy.php` pour ajouter la méthode `delete`:

```php
<?php

namespace App\Policies;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
    }

    public function delete(User $user, Comment $comment)
    {
        // Seul l'administateur ou le créateur du commentaire peut supprimer un commentaire
        return \App\Models\Role::ADMIN === $user->role->name || $user->id === $comment->user_id;
    }
}
```

On vérifie que l'utilisateur est soit l'administrateur soit qu'il est le créateur du commentaire en comparant les identifiants.

### Formulaire de création de commentaire

Nous allons maintenant ajouter un formulaire pour créer un commentaire et ajouter le bouton de suppression d'un commentaire visible uniquement par l'administrateur et le créateur du commentaire.

Nous allons modifier la vue `articles.show` pour ajouter le formulaire et le bouton de suppression:

```html
<x-guest-layout>
  <h1 class="font-bold text-xl mb-4 capitalize">{{ $article->title }}</h1>

  <div class="mb-4 text-xs text-gray-500">
    {{ $article->published_at->diffForHumans() }}
  </div>

  <div class="flex items-center justify-center">
    <img
      src="{{ asset('storage/' . $article->img_path) }}"
      alt="illustration de l'article"
      class="rounded shadow aspect-auto object-cover object-center"
    />
  </div>

  <div class="mt-4">{!! \nl2br($article->body) !!}</div>

  <div class="flex mt-8">
    <x-avatar class="h-20 w-20" :user="$article->user" />
    <div class="ml-4 flex flex-col justify-center">
      <div class="text-gray-700">{{ $article->user->name }}</div>
      <div class="text-gray-500">{{ $article->user->email }}</div>
    </div>
  </div>

  <div class="mt-8 flex items-center justify-center">
    <a
      href="{{ route('front.articles.index') }}"
      class="font-bold bg-white text-gray-700 px-4 py-2 rounded shadow"
    >
      Retour à la liste des articles
    </a>
  </div>

  <div class="mt-8">
    <h2 class="font-bold text-xl mb-4">Commentaires</h2>

    <div class="flex-col space-y-4">
      @forelse ($article->comments as $comment)
      <div class="flex bg-white rounded-md shadow p-4 space-x-4">
        <div class="flex justify-start items-start h-full">
          <x-avatar class="h-10 w-10" :user="$comment->user" />
        </div>
        <div class="flex flex-col justify-center w-full space-y-4">
          <div class="flex justify-between">
            <div class="flex space-x-4 items-center justify-center">
              <div class="flex flex-col justify-center">
                <div class="text-gray-700">{{ $comment->user->name }}</div>
                <div class="text-gray-500 text-sm">
                  {{ $comment->created_at->diffForHumans() }}
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              @can('delete', $comment)
              <button
                x-data="{ id: {{ $comment->id }} }"
                x-on:click.prevent="window.selected = id; $dispatch('open-modal', 'confirm-comment-deletion');"
                type="submit"
                class="font-bold bg-white text-gray-700 px-4 py-2 rounded shadow"
              >
                <x-heroicon-o-trash class="h-5 w-5" />
              </button>
              @endcan
            </div>
          </div>
          <div class="flex flex-col justify-center w-full text-gray-700">
            <p class="border bg-gray-100 rounded-md p-4">
              {{ $comment->body }}
            </p>
          </div>
        </div>
      </div>
      @empty
      <div class="flex bg-white rounded-md shadow p-4 space-x-4">
        Aucun commentaire pour l'instant
      </div>
      @endforelse @auth
      <form
        action="{{ route('front.articles.comments.add', $article) }}"
        method="POST"
        class="flex bg-white rounded-md shadow p-4"
      >
        @csrf
        <div class="flex justify-start items-start h-full mr-4">
          <x-avatar class="h-10 w-10" :user="auth()->user()" />
        </div>
        <div class="flex flex-col justify-center w-full">
          <div class="text-gray-700">{{ auth()->user()->name }}</div>
          <div class="text-gray-500 text-sm">{{ auth()->user()->email }}</div>
          <div class="text-gray-700">
            <textarea
              name="body"
              id="body"
              rows="4"
              placeholder="Votre commentaire"
              class="w-full rounded-md shadow-sm border-gray-300 bg-gray-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-4"
            ></textarea>
          </div>
          <div class="text-gray-700 mt-2 flex justify-end">
            <button
              type="submit"
              class="font-bold bg-white text-gray-700 px-4 py-2 rounded shadow"
            >
              Ajouter un commentaire
            </button>
          </div>
        </div>
      </form>
      @else
      <div
        class="flex bg-white rounded-md shadow p-4 text-gray-700 justify-between items-center"
      >
        <span> Vous devez être connecté pour ajouter un commentaire </span>
        <a
          href="{{ route('login') }}"
          class="font-bold bg-white text-gray-700 px-4 py-2 rounded shadow-md"
          >Se connecter</a
        >
      </div>
      @endauth
    </div>
    <x-modal name="confirm-comment-deletion" focusable>
      <form
        method="post"
        onsubmit="event.target.action= '/articles/{{ $article->id }}/comments/' + window.selected"
        class="p-6"
      >
        @csrf @method('DELETE')

        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
          Êtes-vous sûr de vouloir supprimer ce commentaire ?
        </h2>

        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Cette action est irréversible. Toutes les données seront supprimées.
        </p>

        <div class="mt-6 flex justify-end">
          <x-secondary-button x-on:click="$dispatch('close')">
            Annuler
          </x-secondary-button>

          <x-danger-button class="ml-3" type="submit">
            Supprimer
          </x-danger-button>
        </div>
      </form>
    </x-modal>
  </div>
</x-guest-layout>
```

Nous avons maintenant un formulaire pour ajouter un commentaire, et un bouton pour supprimer un commentaire. Nous avons également ajouté un modal pour confirmer la suppression d'un commentaire.

Vous pouvez maintenant essayer d'écrire un commentaire, puis de le supprimer pour voir si tout fonctionne correctement. Si vous avez des erreurs, vérifiez que vous avez bien suivi les étapes précédentes.

### Failles XSS

Les failles XSS sont des failles de sécurité qui permettent à un attaquant d'exécuter du code JavaScript dans le navigateur d'un utilisateur. Cela peut être utilisé pour voler des informations confidentielles, des cookies, ou pour envoyer des données à un serveur malveillant.

Pour faire cela, un attaquant peut envoyer un commentaire avec du code JavaScript. Par exemple, si un utilisateur peut ajouter un commentaire, il peut envoyer le commentaire suivant :

```html
<script>
  alert("Hello world");
</script>
```

Lorsque le navigateur de l'utilisateur affichera le commentaire, il exécutera le code JavaScript. Cela peut être utilisé pour voler des informations confidentielles, des cookies, ou pour envoyer des données à un serveur malveillant.

Pour éviter cela, Nous utilisons depuis le début du cours les doubles moustaches `{{ }}` pour afficher des données. Cela permet d'échapper automatiquement les données pour éviter les failles XSS.

Vous pouvez aussi supprimer les balises HTML avec la fonction `strip_tags` de php :

```php
$body = strip_tags($request->body);
```

Faites toujours attention aux données que vous pouvez recevoir de l'utilisateur. Si vous utilisez une librairie tierce, vérifiez que celle-ci n'est pas vulnérable aux failles XSS.

### Afficher le nombre de commentaires

Nous allons maintenant afficher le nombre de commentaires sur l'article. Pour cela, nous allons devoir modifier les méthodes `index` de `HomepageController` et `ArticlesController` pour récupérer le nombre de commentaires.

Commençons par modifier la méthode `index` de `HomepageController` :

```php
public function index()
{
    $articles = Article::where('published_at', '<', now())
        ->withCount('comments')
        ->orderByDesc('published_at')
        ->take(4)
        ->get()
    ;

    return view('homepage.index', [
        'articles' => $articles,
    ]);
}
```

Nous avons ajouté la méthode `withCount` pour récupérer le nombre de commentaires. Cela va ajouter une colonne `comments_count` à chaque article.

Nous allons maintenant modifier la méthode `index` de `ArticlesController` :

```php
public function index(Request $request)
{
    $articles = Article::where('published_at', '<', now())
        ->where('body', 'LIKE', '%'.$request->query('search').'%')
        ->orWhere('title', 'LIKE', '%'.$request->query('search').'%')
        ->orWhereHas('user', function ($query) use ($request) {
            $query->where('name', 'LIKE', '%'.$request->query('search').'%');
        })
        ->withCount('comments')
        ->orderByDesc('published_at')
        ->paginate(12)
    ;

    return view('articles.index', [
        'articles' => $articles,
    ]);
}
```

Même chose ici, nous avons ajouté la méthode `withCount` pour récupérer le nombre de commentaires.

Nous allons maintenant modifier le component `article-card` pour afficher le nombre de commentaires :

```html
<a
  class="flex flex-col h-full space-y-4 bg-white rounded-md shadow-md p-5 w-full hover:shadow-lg hover:scale-105 transition"
  href="{{ route('front.articles.show', $article) }}"
>
  <img
    src="{{ asset('storage/' . $article->img_path) }}"
    alt="illustration de l'article"
  />
  <div class="uppercase font-bold text-gray-800">{{ $article->title }}</div>
  <div class="flex-grow text-gray-700 text-sm text-justify">
    {{ Str::limit($article->body, 120) }}
  </div>
  <div class="flex justify-between items-center">
    <div class="text-sm text-gray-500">
      {{ $article->published_at->diffForHumans() }}
    </div>
    <div class="flex items-center space-x-2">
      <x-heroicon-o-chat-bubble-bottom-center-text
        class="h-5 w-5 text-gray-500"
      />
      <div class="text-sm text-gray-500">{{ $article->comments_count }}</div>
    </div>
  </div>
</a>
```

Nous avons ajouté un icône et le nombre de commentaires en bas à droite de la carte.

Vous pouvez maintenant essayer d'ajouter un commentaire, puis de voir si le nombre de commentaires est bien mis à jour.

## Profil public des utilisateurs

Nous allons maintenant ajouter un profil public pour les utilisateurs. Nous allons afficher les articles publiés par l'utilisateur, et les commentaires qu'il a écrit.

### Créer la route

Nous allons commencer par créer la route pour afficher le profil public d'un utilisateur. Placez cette route dans le fichier `routes/web.php`, juste en dessous des routes de gestion du profil :

```php
// Gestion du profil utilisateur
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::patch('/profile/avatar', [ProfileController::class, 'updateAvatar'])->name('profile.avatar.update');
});

// Détail d'un profil utilisateur
Route::get('/profile/{user}', [ProfileController::class, 'show'])->name('profile.show');
```

### Controller

Nous allons ajouter une méthode `show` au début du controller `ProfileController` :

```php
public function show(User $user): View
{
    // Les articles publiés par l'utilisateur
    $articles = $user
        ->articles()
        ->where('published_at', '<', now())
        ->withCount('comments')
        ->orderByDesc('published_at')
        ->get()
    ;

    // Les commentaires de l'utilisateur triés par date de création
    $comments = $user
        ->comments()
        ->orderByDesc('created_at')
        ->get()
    ;

    // On renvoie la vue avec les données
    return view('profile.show', [
        'user' => $user,
        'articles' => $articles,
        'comments' => $comments,
    ]);
}
```

Nous récupérons les articles publiés par l'utilisateur, et les commentaires qu'il a écrit.

### Vue

Nous allons maintenant créer la vue `profile.show` :

```html
<x-guest-layout>
  <div class="flex w-full">
    <x-avatar class="h-20 w-20" :user="$user" />
    <div class="ml-4 flex flex-col">
      <div class="text-gray-800 font-bold">{{ $user->name }}</div>
      <div class="text-gray-700 text-sm">{{ $user->email }}</div>
      <div class="text-gray-500 text-xs">{{ $user->role->name }}</div>
      <div class="text-gray-500 text-xs">
        Membre depuis {{ $user->created_at->diffForHumans() }}
      </div>
    </div>
  </div>
  <div class="mt-8">
    <h2 class="font-bold text-xl mb-4">Articles</h2>
    <ul class="grid sm:grid-cols-2 gap-8">
      @forelse ($articles as $article)
      <li>
        <x-article-card :article="$article" />
      </li>
      @empty
      <div class="text-gray-700">Aucun article</div>
      @endforelse
    </ul>
  </div>

  <div class="mt-8">
    <h2 class="font-bold text-xl mb-4">Commentaires</h2>

    <div class="flex-col space-y-4">
      @forelse ($comments as $comment)
      <div class="flex bg-white rounded-md shadow p-4 space-x-4">
        <div class="flex justify-start items-start h-full">
          <x-avatar class="h-10 w-10" :user="$comment->user" />
        </div>
        <div class="flex flex-col justify-center w-full space-y-4">
          <div class="flex justify-between">
            <div class="flex space-x-4 items-center justify-center">
              <div class="flex flex-col justify-center">
                <div class="text-gray-700">{{ $comment->user->name }}</div>
                <div class="text-gray-500 text-sm">
                  {{ $comment->created_at->diffForHumans() }}
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              @can('delete', $comment)
              <button
                x-data="{ id: {{ $comment->id }} }"
                x-on:click.prevent="window.selected = id; $dispatch('open-modal', 'confirm-comment-deletion');"
                type="submit"
                class="font-bold bg-white text-gray-700 px-4 py-2 rounded shadow"
              >
                <x-heroicon-o-trash class="h-5 w-5" />
              </button>
              @endcan
            </div>
          </div>
          <div class="flex flex-col justify-center w-full text-gray-700">
            <p class="border bg-gray-100 rounded-md p-4">
              {{ $comment->body }}
            </p>
          </div>
        </div>
      </div>
      @empty
      <div class="flex bg-white rounded-md shadow p-4 space-x-4">
        Aucun commentaire pour l'instant
      </div>
      @endforelse
    </div>
    <x-modal name="confirm-comment-deletion" focusable>
      <form
        method="post"
        onsubmit="event.target.action= '/articles/{{ $article->id ?? 1 }}/comments/' + window.selected"
        class="p-6"
      >
        @csrf @method('DELETE')

        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
          Êtes-vous sûr de vouloir supprimer ce commentaire ?
        </h2>

        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Cette action est irréversible. Toutes les données seront supprimées.
        </p>

        <div class="mt-6 flex justify-end">
          <x-secondary-button x-on:click="$dispatch('close')">
            Annuler
          </x-secondary-button>

          <x-danger-button class="ml-3" type="submit">
            Supprimer
          </x-danger-button>
        </div>
      </form>
    </x-modal>
  </div>
</x-guest-layout>
```

Nous pouvons maintenant ajouter des liens vers le profil de l'utilisateur dans les articles et les commentaires dans la vue `article.show` :

```html
<x-guest-layout>
  <h1 class="font-bold text-xl mb-4 capitalize">{{ $article->title }}</h1>

  <div class="mb-4 text-xs text-gray-500">
    {{ $article->published_at->diffForHumans() }}
  </div>

  <div class="flex items-center justify-center">
    <img
      src="{{ asset('storage/' . $article->img_path) }}"
      alt="illustration de l'article"
      class="rounded shadow aspect-auto object-cover object-center"
    />
  </div>

  <div class="mt-4">{!! \nl2br($article->body) !!}</div>

  <a
    class="flex mt-8 hover:-translate-y-1 transition
    "
    href="{{ route('profile.show', $article->user) }}"
  >
    <x-avatar class="h-20 w-20" :user="$article->user" />
    <div class="ml-4 flex flex-col justify-center">
      <div class="text-gray-700">{{ $article->user->name }}</div>
      <div class="text-gray-500">{{ $article->user->email }}</div>
    </div>
  </a>

  <div class="mt-8 flex items-center justify-center">
    <a
      href="{{ route('front.articles.index') }}"
      class="font-bold bg-white text-gray-700 px-4 py-2 rounded shadow"
    >
      Retour à la liste des articles
    </a>
  </div>

  <div class="mt-8">
    <h2 class="font-bold text-xl mb-4">Commentaires</h2>

    <div class="flex-col space-y-4">
      @forelse ($article->comments as $comment)
      <div class="flex bg-white rounded-md shadow p-4 space-x-4">
        <a
          class="flex justify-start items-start h-full"
          href="{{ route('profile.show', $comment->user) }}"
        >
          <x-avatar class="h-10 w-10" :user="$comment->user" />
        </a>
        <div class="flex flex-col justify-center w-full space-y-4">
          <div class="flex justify-between">
            <div class="flex space-x-4 items-center justify-center">
              <div class="flex flex-col justify-center">
                <a
                  class="text-gray-700"
                  href="{{ route('profile.show', $comment->user) }}"
                >
                  {{ $comment->user->name }}
                </a>
                <div class="text-gray-500 text-sm">
                  {{ $comment->created_at->diffForHumans() }}
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              @can('delete', $comment)
              <button
                x-data="{ id: {{ $comment->id }} }"
                x-on:click.prevent="window.selected = id; $dispatch('open-modal', 'confirm-comment-deletion');"
                type="submit"
                class="font-bold bg-white text-gray-700 px-4 py-2 rounded shadow"
              >
                <x-heroicon-o-trash class="h-5 w-5" />
              </button>
              @endcan
            </div>
          </div>
          <div class="flex flex-col justify-center w-full text-gray-700">
            <p class="border bg-gray-100 rounded-md p-4">
              {{ $comment->body }}
            </p>
          </div>
        </div>
      </div>
      @empty
      <div class="flex bg-white rounded-md shadow p-4 space-x-4">
        Aucun commentaire pour l'instant
      </div>
      @endforelse @auth
      <form
        action="{{ route('front.articles.comments.add', $article) }}"
        method="POST"
        class="flex bg-white rounded-md shadow p-4"
      >
        @csrf
        <div class="flex justify-start items-start h-full mr-4">
          <x-avatar class="h-10 w-10" :user="auth()->user()" />
        </div>
        <div class="flex flex-col justify-center w-full">
          <div class="text-gray-700">{{ auth()->user()->name }}</div>
          <div class="text-gray-500 text-sm">{{ auth()->user()->email }}</div>
          <div class="text-gray-700">
            <textarea
              name="body"
              id="body"
              rows="4"
              placeholder="Votre commentaire"
              class="w-full rounded-md shadow-sm border-gray-300 bg-gray-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-4"
            ></textarea>
          </div>
          <div class="text-gray-700 mt-2 flex justify-end">
            <button
              type="submit"
              class="font-bold bg-white text-gray-700 px-4 py-2 rounded shadow"
            >
              Ajouter un commentaire
            </button>
          </div>
        </div>
      </form>
      @else
      <div
        class="flex bg-white rounded-md shadow p-4 text-gray-700 justify-between items-center"
      >
        <span> Vous devez être connecté pour ajouter un commentaire </span>
        <a
          href="{{ route('login') }}"
          class="font-bold bg-white text-gray-700 px-4 py-2 rounded shadow-md"
          >Se connecter</a
        >
      </div>
      @endauth
    </div>
    <x-modal name="confirm-comment-deletion" focusable>
      <form
        method="post"
        onsubmit="event.target.action= '/articles/{{ $article->id }}/comments/' + window.selected"
        class="p-6"
      >
        @csrf @method('DELETE')

        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
          Êtes-vous sûr de vouloir supprimer ce commentaire ?
        </h2>

        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Cette action est irréversible. Toutes les données seront supprimées.
        </p>

        <div class="mt-6 flex justify-end">
          <x-secondary-button x-on:click="$dispatch('close')">
            Annuler
          </x-secondary-button>

          <x-danger-button class="ml-3" type="submit">
            Supprimer
          </x-danger-button>
        </div>
      </form>
    </x-modal>
  </div>
</x-guest-layout>
```

Les visiteurs peuvent maintenant accéder aux profils des utilisateurs en cliquant sur leurs noms ou avatars.

## Afficher des alertes (toasts)

## Erreurs et dates en français

## Code source

Le code source de ce tutoriel est disponible sur GitHub : [https://github.com/opmvpc/blog-cours](https://github.com/opmvpc/blog-cours)
