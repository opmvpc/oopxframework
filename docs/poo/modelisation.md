# Modélisation

[[toc]]

## UML, qu'est-ce que c'est?

UML (Unified Modeling Language) est un langage de modélisation graphique puissant et standardisé qui est utilisé pour la conception et la documentation des systèmes informatiques. Il a été développé par Grady Booch, Ivar Jacobson et James Rumbaugh dans les années 1990 et est devenu un standard industriel pour modéliser les systèmes informatiques.

UML est en réalité un ensemble de diagrammes qui permettent de représenter différents aspects d'un système informatique. Chacun de ces diagrammes a une fonction spécifique. Les principaux diagrammes UML sont :

| Diagramme                      | Description                                                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Diagramme de classe            | Représente les classes, les objets, les relations, l'héritage, l'agrégation et la composition d'un système                   |
| Diagramme de séquence          | Représente les interactions entre les objets d'un système durant une situation donnée                                        |
| Diagramme d'état               | Représente les différents états d'un objet et les transitions entre ces états                                                |
| Diagramme d'activité           | Représente les activités d'un système, en particulier les fonctionnements d'une méthode et les relations entre ces activités |
| Diagramme de cas d'utilisation | Représente les interactions entre les utilisateurs et un système                                                             |

## À quoi sert UML?

UML est un langage commun et des notations standardisées qui permettent aux développeurs de communiquer de manière claire et efficace sur la conception d'un système informatique. Avec UML, les développeurs peuvent concevoir le système de manière plus précise et vérifier la validité de leur conception avant de commencer à écrire le code, ce qui permet de réduire les risques de bugs et de rendre le développement plus efficace.

UML est également très utile pour la documentation d'un système informatique. Les diagrammes UML peuvent être utilisés pour créer des documents clairs et précis qui décrivent le fonctionnement d'un système, ce qui facilite la maintenance et la compréhension d'un système par les utilisateurs ou les développeurs futurs.

## Outils de modélisation

Il existe de nombreux outils disponibles pour créer des diagrammes UML, allant des outils gratuits en ligne aux outils professionnels coûteux. Voici une liste des outils les plus populaires:

### Outils gratuits

| Nom     | Description                                                                                                                                                              | Liens                                             |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| Modelio | Un outil open source puissant pour la modélisation de systèmes informatiques qui prend en charge UML, BPMN et d'autres langages de modélisation.                         | [Site web](https://www.modelio.org/)              |
| StarUML | Un outil open source très populaire pour la création de diagrammes UML qui dispose d'une grande communauté d'utilisateurs et de nombreux plugins et modèles disponibles. | [Site web](http://staruml.io/)                    |
| Mermaid | Un outil de documentation de diagramme de classes qui est utilisé pour générer des diagrammes de classe UML à partir de code.                                            | [Site web](https://mermaid-js.github.io/mermaid/) |

### Outils payants

| Nom                  | Description                                                                                                                                        | Liens                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| IBM Rational Rose    | Un outil professionnel coûteux largement utilisé dans l'industrie pour la modélisation de systèmes informatiques.                                  | [Site web](https://www.ibm.com/products/rational-rose)                 |
| Visio                | Un outil de Microsoft très populaire pour la création de diagrammes UML.                                                                           | [Site web](https://products.office.com/en-us/visio/flowchart-software) |
| Enterprise Architect | Un outil professionnel puissant pour la modélisation de systèmes informatiques qui prend en charge UML, BPMN et d'autres langages de modélisation. | [Site web](https://www.sparxsystems.com/products/ea/)                  |

## Modélisation d'objets de la vie réelle

### Exemple

Pour illustrer la modélisation d'objets de la vie réelle, prenons l'exemple d'un magasin en ligne de chaussures. Dans ce magasin, nous aurons plusieurs instances de clients, de chaussures, d'entrepôts, de commandes, etc.

Voici un diagramme qui représente ces objets et leurs relations :

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgICBDbGllbnQxW0NsaWVudCAxXSAtLSBwYXNzZSAtLT4gQ29tbWFuZGUxW0NvbW1hbmRlIDFdXG4gICAgQ2xpZW50MltDbGllbnQgMl0gLS0gcGFzc2UgLS0-IENvbW1hbmRlMltDb21tYW5kZSAyXVxuICAgIENvbW1hbmRlMSAtLSBjb250aWVudCAtLT4gQ2hhdXNzdXJlMVtDaGF1c3N1cmUgMV1cbiAgICBDb21tYW5kZTEgLS0gY29udGllbnQgLS0-IENoYXVzc3VyZTJbQ2hhdXNzdXJlIDJdXG4gICAgQ29tbWFuZGUyIC0tIGNvbnRpZW50IC0tPiBDaGF1c3N1cmUzW0NoYXVzc3VyZSAzXVxuICAgIEVudHJlcG90MVtFbnRyZXDDtHQgMV0gLS0gYWJyaXRlIC0tPiBDaGF1c3N1cmUxXG4gICAgRW50cmVwb3QxIC0tIGFicml0ZSAtLT4gQ2hhdXNzdXJlMlxuICAgIEVudHJlcG90MltFbnRyZXDDtHQgMl0gLS0gYWJyaXRlIC0tPiBDaGF1c3N1cmUzIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiZ3JhcGggTFJcbiAgICBDbGllbnQxW0NsaWVudCAxXSAtLSBwYXNzZSAtLT4gQ29tbWFuZGUxW0NvbW1hbmRlIDFdXG4gICAgQ2xpZW50MltDbGllbnQgMl0gLS0gcGFzc2UgLS0-IENvbW1hbmRlMltDb21tYW5kZSAyXVxuICAgIENvbW1hbmRlMSAtLSBjb250aWVudCAtLT4gQ2hhdXNzdXJlMVtDaGF1c3N1cmUgMV1cbiAgICBDb21tYW5kZTEgLS0gY29udGllbnQgLS0-IENoYXVzc3VyZTJbQ2hhdXNzdXJlIDJdXG4gICAgQ29tbWFuZGUyIC0tIGNvbnRpZW50IC0tPiBDaGF1c3N1cmUzW0NoYXVzc3VyZSAzXVxuICAgIEVudHJlcG90MVtFbnRyZXDDtHQgMV0gLS0gYWJyaXRlIC0tPiBDaGF1c3N1cmUxXG4gICAgRW50cmVwb3QxIC0tIGFicml0ZSAtLT4gQ2hhdXNzdXJlMlxuICAgIEVudHJlcG90MltFbnRyZXDDtHQgMl0gLS0gYWJyaXRlIC0tPiBDaGF1c3N1cmUzIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

Un objet représente un élément de la vie réelle qui possède :

- Une identité : identifiant unique de l'objet
- Une durée de vie : durée de vie de l'objet dans le système informatique
- Un état : valeurs des attributs de l'objet
- Une utilité : utilité de l'objet dans la vie réelle

#### Paire de chaussures

| Critère      | Valeur                                              |
| ------------ | --------------------------------------------------- |
| Identité     | Chaussure1, Chaussure2, Chaussure3                  |
| Durée de vie | Tant que le modèle de chaussure est vendu           |
| État         | Couleur, taille, marque, prix, quantité en stock    |
| Utilité      | Permet de marcher, de courir, de protéger les pieds |

#### Entrepôt

| Critère      | Valeur                                  |
| ------------ | --------------------------------------- |
| Identité     | EntrepotBruxelles, EntrepotCharleroi    |
| Durée de vie | Tant qu'il est utilisé                  |
| État         | Capacité, emplacement, produits stockés |
| Utilité      | Stockage des produits pour la vente     |

### Classification

La classification des objets consiste à regrouper les objets qui ont des caractéristiques et des comportements similaires en un seul et même groupe appelé classe. Dans notre exemple, les objets de type Entrepôt et Chaussure ont des caractéristiques et des comportements identiques, il est donc logique de les regrouper dans des classes distinctes.

Les classes Entrepôt et Chaussure représentent des modèles pour créer des objets de type Entrepôt et Chaussure. Ces classes définissent les attributs et les méthodes qui décrivent les caractéristiques et les comportements de ces objets. Les attributs sont des propriétés qui définissent l'état d'un objet, tandis que les méthodes sont des fonctions qui définissent le comportement d'un objet.

#### Diagramme de la classe Paire de chaussure

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBQYWlyZUNoYXVzc3VyZSB7XG4gIC1pZDogaW50XG4gIC1ub206IHN0cmluZ1xuICAtdGFpbGxlOiBmbG9hdFxuICAtY291bGV1cjogc3RyaW5nXG4gIC1wcml4OiBmbG9hdFxuICAtbWFycXVlOiBzdHJpbmdcbiAgK19fY29uc3RydWN0KG5vbTogc3RyaW5nLCB0YWlsbGU6IGZsb2F0LCBjb3VsZXVyOiBzdHJpbmcsIHByaXg6IGZsb2F0LCBtYXJxdWU6IHN0cmluZylcbiAgK2dldElkKCk6IGludFxuICArc2V0SWQoaWQ6IGludClcbiAgK2dldE5vbSgpOiBzdHJpbmdcbiAgK3NldE5vbShub206IHN0cmluZylcbiAgK2dldFRhaWxsZSgpOiBmbG9hdFxuICArc2V0VGFpbGxlKHRhaWxsZTogZmxvYXQpXG4gICtnZXRDb3VsZXVyKCk6IHN0cmluZ1xuICArc2V0Q291bGV1cihjb3VsZXVyOiBzdHJpbmcpXG4gICtnZXRQcml4KCk6IGZsb2F0XG4gICtzZXRQcml4KHByaXg6IGZsb2F0KVxuICArZ2V0TWFycXVlKCk6IHN0cmluZ1xuICArc2V0TWFycXVlKG1hcnF1ZTogc3RyaW5nKVxufSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBQYWlyZUNoYXVzc3VyZSB7XG4gIC1pZDogaW50XG4gIC1ub206IHN0cmluZ1xuICAtdGFpbGxlOiBmbG9hdFxuICAtY291bGV1cjogc3RyaW5nXG4gIC1wcml4OiBmbG9hdFxuICAtbWFycXVlOiBzdHJpbmdcbiAgK19fY29uc3RydWN0KG5vbTogc3RyaW5nLCB0YWlsbGU6IGZsb2F0LCBjb3VsZXVyOiBzdHJpbmcsIHByaXg6IGZsb2F0LCBtYXJxdWU6IHN0cmluZylcbiAgK2dldElkKCk6IGludFxuICArc2V0SWQoaWQ6IGludClcbiAgK2dldE5vbSgpOiBzdHJpbmdcbiAgK3NldE5vbShub206IHN0cmluZylcbiAgK2dldFRhaWxsZSgpOiBmbG9hdFxuICArc2V0VGFpbGxlKHRhaWxsZTogZmxvYXQpXG4gICtnZXRDb3VsZXVyKCk6IHN0cmluZ1xuICArc2V0Q291bGV1cihjb3VsZXVyOiBzdHJpbmcpXG4gICtnZXRQcml4KCk6IGZsb2F0XG4gICtzZXRQcml4KHByaXg6IGZsb2F0KVxuICArZ2V0TWFycXVlKCk6IHN0cmluZ1xuICArc2V0TWFycXVlKG1hcnF1ZTogc3RyaW5nKVxufSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

#### Diagramme de la classe Entrepôt

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBFbnRyZXBvdCB7XG4gIC1pZDogaW50XG4gIC1ub206IHN0cmluZ1xuICAtYWRyZXNzZTogc3RyaW5nXG4gIC10YWlsbGU6IGludFxuICArX19jb25zdHJ1Y3Qobm9tOiBzdHJpbmcsIGFkcmVzc2U6IHN0cmluZywgdGFpbGxlOiBpbnQpXG4gICtnZXRJZCgpOiBpbnRcbiAgK3NldElkKGlkOiBpbnQpXG4gICtnZXROb20oKTogc3RyaW5nXG4gICtzZXROb20obm9tOiBzdHJpbmcpXG4gICtnZXRBZHJlc3NlKCk6IHN0cmluZ1xuICArc2V0QWRyZXNzZShhZHJlc3NlOiBzdHJpbmcpXG4gICtnZXRUYWlsbGUoKTogaW50XG4gICtzZXRUYWlsbGUodGFpbGxlOiBpbnQpXG59IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBFbnRyZXBvdCB7XG4gIC1pZDogaW50XG4gIC1ub206IHN0cmluZ1xuICAtYWRyZXNzZTogc3RyaW5nXG4gIC10YWlsbGU6IGludFxuICArX19jb25zdHJ1Y3Qobm9tOiBzdHJpbmcsIGFkcmVzc2U6IHN0cmluZywgdGFpbGxlOiBpbnQpXG4gICtnZXRJZCgpOiBpbnRcbiAgK3NldElkKGlkOiBpbnQpXG4gICtnZXROb20oKTogc3RyaW5nXG4gICtzZXROb20obm9tOiBzdHJpbmcpXG4gICtnZXRBZHJlc3NlKCk6IHN0cmluZ1xuICArc2V0QWRyZXNzZShhZHJlc3NlOiBzdHJpbmcpXG4gICtnZXRUYWlsbGUoKTogaW50XG4gICtzZXRUYWlsbGUodGFpbGxlOiBpbnQpXG59IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

La modélisation est un processus itératif, ce qui signifie qu'il est possible de réitérer plusieurs fois le même processus pour obtenir un résultat optimal. Il existe plusieurs méthodes pour modéliser un même problème, c'est pourquoi il est important de tester différentes solutions pour choisir la meilleure.

Dans notre exemple, nous avons opté pour classer l'Entrepôt dans une catégorie distincte. Cependant, il est possible de considérer l'Entrepôt comme une propriété d'une entreprise, par exemple. Cela dépend des besoins et des objectifs de la modélisation.

Il est aussi possible de généraliser certains concepts à travers l'utilisation de l'héritage. Nous pouvons entre autres créer une classe générale "Bien" qui sera héritée par des classes spécifiques telles que "Entrepôt" ou "Propriété".

Enfin, il est important de définir les relations entre les différentes classes. Dans notre exemple, la classe Entrepôt est reliée à la classe Chaussure par une relation "abrite" et la classe Commande est reliée à la classe Client par une relation "passe".

#### Diagramme de classe du magasin en ligne

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBDbGllbnRcbmNsYXNzIENvbW1hbmRlXG5jbGFzcyBDaGF1c3N1cmVcbmNsYXNzIEVudHJlcG90XG5DbGllbnQgXCIxXCIgLS0-IFwiKlwiIENvbW1hbmRlIDogcGFzc2VcbkNvbW1hbmRlIFwiMVwiIC0tPiBcIipcIiBDaGF1c3N1cmUgOiBjb250aWVudFxuRW50cmVwb3QgXCIxXCIgLS0-IFwiKlwiIENoYXVzc3VyZSA6IGFicml0ZVxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBDbGllbnRcbmNsYXNzIENvbW1hbmRlXG5jbGFzcyBDaGF1c3N1cmVcbmNsYXNzIEVudHJlcG90XG5DbGllbnQgXCIxXCIgLS0-IFwiKlwiIENvbW1hbmRlIDogcGFzc2VcbkNvbW1hbmRlIFwiMVwiIC0tPiBcIipcIiBDaGF1c3N1cmUgOiBjb250aWVudFxuRW50cmVwb3QgXCIxXCIgLS0-IFwiKlwiIENoYXVzc3VyZSA6IGFicml0ZVxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

## Diagramme de classe en détail

### Classe

Une classe est la représentation abstraite d'un objet, elle définit les propriétés et les méthodes que possède un objet de ce type. Graphiquement, une classe est représentée par un rectangle divisé en trois parties :

- Le nom de la classe, écrit en majuscule camel case (ex: "MaClasse")
- La liste des propriétés, écrites en minuscules camel case (ex: "maPropriété")
- La liste des méthodes, écrites en minuscules camel case (ex: "maMéthode()")

#### UML

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBNYUNsYXNzZSB7XG4rbWFQcm9wcmnDqXTDqTogaW50XG4rbWFNw6l0aG9kZSgpOiB2b2lkXG59IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBNYUNsYXNzZSB7XG4rbWFQcm9wcmnDqXTDqTogaW50XG4rbWFNw6l0aG9kZSgpOiB2b2lkXG59IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

#### PHP

```php
class MaClasse {
    public int $maPropriété;

    public function maMethode(): void {
    }
}
```

### Attributs

Un attribut est une caractéristique ou une propriété distincte d'une classe qui décrit l'état de l'objet. Les attributs sont notés dans la partie centrale de la boîte de la classe, avec un nom en minuscules et un type indiqué après le nom. La visibilité de l'attribut est indiquée par un symbole devant le nom de l'attribut :

- \+ pour public
- \- pour privé
- \# pour protégé

Si un attribut est statique, il doit être souligné.

#### UML

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBDbGFzc2UxIHtcbithdHRyaWJ1dDE6IGludFxuLWF0dHJpYnV0Mjogc3RyaW5nXG4jYXR0cmlidXQzOiBib29sZWFuXG59IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBDbGFzc2UxIHtcbithdHRyaWJ1dDE6IGludFxuLWF0dHJpYnV0Mjogc3RyaW5nXG4jYXR0cmlidXQzOiBib29sZWFuXG59IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

#### PHP

```php
class Classe1 {
    public $attribut1;
    private $attribut2;
    protected $attribut3;
}
```

### Méthodes

Une méthode est une fonctionnalité ou une opération qui peut être effectuée par une classe ou un objet. Les méthodes sont contenues dans la troisième partie de la boite de la classe, avec un nom en minuscules et un type de retour indiqué après le nom. La visibilité de la méthode est indiquée par un symbole devant le nom de la méthode :

- \+ pour public
- \- pour privé
- \# pour protégé

Les paramètres de la méthode sont indiqués entre parenthèses après le nom de la méthode.
Si une méthode est statique, elle doit être soulignée.

#### UML

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBDbGFzc2VBIHtcbithdHRyaWJ1dDE6aW50XG4rbWV0aG9kZTEocGFyYW0xOnN0cmluZyk6dm9pZFxufSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBDbGFzc2VBIHtcbithdHRyaWJ1dDE6aW50XG4rbWV0aG9kZTEocGFyYW0xOnN0cmluZyk6dm9pZFxufSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

#### PHP

```php
class ClasseA {
    public $attribut1;

    public function methode1(string $param1): void {
        // code de la méthode
    }
}
```

### Relations

#### Associations

Une association est une relation entre deux classes qui décrit un lien entre des objets de ces classes. Les associations sont représentées graphiquement par une ligne entre les classes concernées, avec des multiplicités indiquées aux deux extrémités. Les multiplicités indiquent le nombre d'objets d'une classe qui peuvent être liés à un objet d'une autre classe. Les multiplicités peuvent être exprimées sous forme de nombres (1, 2, 0 .. 1, etc.) ou de symboles (\*, 0 .. \*, etc.). Le sens de l'association et son nom peuvent également être indiqués.

##### UML

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBDbGllbnRcbmNsYXNzIENvbW1hbmRlXG5DbGllbnQgXCIwIC4uIDFcIiAtLT4gXCIwIC4uICpcIiBDb21tYW5kZSA6IHBhc3NlIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBDbGllbnRcbmNsYXNzIENvbW1hbmRlXG5DbGllbnQgXCIwIC4uIDFcIiAtLT4gXCIwIC4uICpcIiBDb21tYW5kZSA6IHBhc3NlIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

##### PHP

```php
class Client {
    /**
    * @var Commande[] $commandes
    **/
    private array $commandes = [];
}

class Commande {
    private ?Client $client = null;
}
```

#### Agrégation

L'agrégation est une relation particulière d'association qui indique qu'une classe est propriétaire d'autres instances d'une classe. Cela signifie qu'une instance de la classe propriétaire peut exister sans les instances de la classe liée. Cependant, les instances de la classe liée ne peuvent pas exister sans l'instance de la classe propriétaire. Les agrégations sont représentées graphiquement dans un diagramme de classe par une flèche qui relie les deux classes, avec un diamant vide à une extrémité de la flèche pour indiquer la classe propriétaire.

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWb2l0dXJlXG5jbGFzcyBNb3RldXJcblZvaXR1cmUgXCIxXCIgby0tIFwiMVwiIE1vdGV1ciA6IHBvc3PDqGRlIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWb2l0dXJlXG5jbGFzcyBNb3RldXJcblZvaXR1cmUgXCIxXCIgby0tIFwiMVwiIE1vdGV1ciA6IHBvc3PDqGRlIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

Une voiture possède un moteur. Cela signifie qu'une voiture peut potentiellement fonctionner sans moteur, mais un moteur ne peut pas fonctionner sans voiture. C'est une relation d'agrégation.

#### Composition

La composition est une relation particulière d'agrégation qui indique qu'une classe est propriétaire de ses instances d'une autre classe et qu'elles ne peuvent pas exister en dehors de cette classe. Cela signifie que lorsque la classe propriétaire est détruite, les instances de la classe liée sont également détruites. Les compositions sont représentées graphiquement dans un diagramme de classe par une flèche qui relie les deux classes, avec un diamant plein à une extrémité de la flèche pour indiquer la classe propriétaire.

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBPcmRpbmF0ZXVyXG5jbGFzcyBDYXJ0ZU1lcmVcbk9yZGluYXRldXIgXCIxXCIgKi0tIFwiMVwiIENhcnRlTWVyZSA6IGNvbXBvc2UiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBPcmRpbmF0ZXVyXG5jbGFzcyBDYXJ0ZU1lcmVcbk9yZGluYXRldXIgXCIxXCIgKi0tIFwiMVwiIENhcnRlTWVyZSA6IGNvbXBvc2UiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

Un ordinateur est composé d'une carte mère. Cela signifie qu'un ordinateur ne peut pas fonctionner sans carte mère, et une carte mère ne peut pas fonctionner sans ordinateur. C'est une relation de composition.

### Héritage

L'héritage est un concept de programmation orientée objet qui permet à une classe de dériver d'une autre classe existante. Cela signifie qu'une classe enfant peut bénéficier de tous les attributs et méthodes de la classe parente, ce qui permet de créer des classes plus spécifiques à partir de classes plus générales, en réutilisant leur code existant.

Graphiquement, l'héritage est représenté par une flèche pointant de la classe enfant vers la classe parente, avec un triangle à la pointe de la flèche.

#### UML

Parent - Enfant :

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5QYXJlbnQgPHwtLSBFbmZhbnQgIFxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5QYXJlbnQgPHwtLSBFbmZhbnQgIFxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

Classification de véhicules :

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWZWhpY3VsZVxuY2xhc3MgVm9pdHVyZVxuY2xhc3MgQ2FtaW9uXG5WZWhpY3VsZSA8fC0tIFZvaXR1cmVcblZlaGljdWxlIDx8LS0gQ2FtaW9uICAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWZWhpY3VsZVxuY2xhc3MgVm9pdHVyZVxuY2xhc3MgQ2FtaW9uXG5WZWhpY3VsZSA8fC0tIFZvaXR1cmVcblZlaGljdWxlIDx8LS0gQ2FtaW9uICAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

Classification des êtres vivants :

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5FdHJlVml2YW50IDx8LS0gQW5pbWFsXG5FdHJlVml2YW50IDx8LS0gVmVnZXRhbFxuVmVnZXRhbCA8fC0tIEFyYnJlXG5BcmJyZSA8fC0tIFBvbW1pZXJcbkFuaW1hbCA8fC0tIE1hbW1pZmVyZVxuQW5pbWFsIDx8LS0gT2lzZWF1XG5PaXNlYXUgPHwtLSAgSGlib3Vcbk1hbW1pZmVyZSA8fC0tICBIdW1haW5cbk1hbW1pZmVyZSA8fC0tICBDaGF0XG5NYW1taWZlcmUgPHwtLSAgQ2hpZW4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5FdHJlVml2YW50IDx8LS0gQW5pbWFsXG5FdHJlVml2YW50IDx8LS0gVmVnZXRhbFxuVmVnZXRhbCA8fC0tIEFyYnJlXG5BcmJyZSA8fC0tIFBvbW1pZXJcbkFuaW1hbCA8fC0tIE1hbW1pZmVyZVxuQW5pbWFsIDx8LS0gT2lzZWF1XG5PaXNlYXUgPHwtLSAgSGlib3Vcbk1hbW1pZmVyZSA8fC0tICBIdW1haW5cbk1hbW1pZmVyZSA8fC0tICBDaGF0XG5NYW1taWZlcmUgPHwtLSAgQ2hpZW4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ)

### Interfaces

Une interface est un contrat qui définit les méthodes et propriétés que doit implémenter une classe. Il s'agit d'un moyen de spécifier les comportements attendus d'une classe sans définir comment ces comportements sont implémentés. Les interfaces sont utilisées pour créer des contrats de programmation, pour faciliter la communication entre les différentes classes d'un système et pour permettre la réutilisation du code.

Graphiquement, les interfaces sont représentées par un rectangle avec le mot-clé "interface" en plus de leurs noms en CamelCase écrits en haut et les signatures de méthodes à l'intérieur.

#### UML

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWZWhpY3VsZSB7XG4rcm91bGVyKCk6dm9pZFxufVxuPDxJbnRlcmZhY2U-PiBWZWhpY3VsZVxuY2xhc3MgVm9pdHVyZVxuY2xhc3MgQ2FtaW9uXG5WZWhpY3VsZSA8fC0tIFZvaXR1cmVcblZlaGljdWxlIDx8LS0gQ2FtaW9uIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWZWhpY3VsZSB7XG4rcm91bGVyKCk6dm9pZFxufVxuPDxJbnRlcmZhY2U-PiBWZWhpY3VsZVxuY2xhc3MgVm9pdHVyZVxuY2xhc3MgQ2FtaW9uXG5WZWhpY3VsZSA8fC0tIFZvaXR1cmVcblZlaGljdWxlIDx8LS0gQ2FtaW9uIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

#### PHP

```php
interface Vehicule {
    public function rouler();
}

class Voiture implements Vehicule {
    public function rouler() {
        // Code pour faire rouler la voiture
    }
}

class Camion implements Vehicule {
    public function rouler() {
        // Code pour faire rouler le camion
    }
}
```

### Classes et méthodes abstraites

Une classe abstraite est une classe qui ne peut pas être instanciée, mais qui peut être héritée. Elle sert à définir un comportement commun pour des classes qui ont des fonctionnalités similaires. Les méthodes abstraites sont des méthodes qui n'ont pas de corps dans la classe abstraite, mais qui doivent être définies dans les classes filles.

Graphiquement, une classe abstraite est représentée comme une classe normale, mais avec le nom écrit en italique. De même, les méthodes abstraites sont représentées par leur nom en italique.

#### UML

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBGb3JtZSB7XG4rYWJzdHJhY3QgZGVzc2luZXIoKSA6IHZvaWRcbn1cbjw8QWJzdHJhY3Q-PiBGb3JtZVxuRm9ybWUgPHwtLSBDZXJjbGVcbkZvcm1lIDx8LS0gUmVjdGFuZ2xlIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBGb3JtZSB7XG4rYWJzdHJhY3QgZGVzc2luZXIoKSA6IHZvaWRcbn1cbjw8QWJzdHJhY3Q-PiBGb3JtZVxuRm9ybWUgPHwtLSBDZXJjbGVcbkZvcm1lIDx8LS0gUmVjdGFuZ2xlIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

#### PHP

```php
abstract class Forme {
    abstract public function dessiner(): void;
}

class Cercle extends Forme {
    public function dessiner(): void {
        // code pour dessiner un cercle
    }
}

class Rectangle extends Forme {
    public function dessiner(): void {
        // code pour dessiner un rectangle
    }
}
```

### Traits

Les traits sont une méthode pratique et efficace pour simuler l'héritage multiple en PHP. Ils permettent de regrouper des méthodes communes dans un seul emplacement, ce qui facilite grandement la réutilisation de code. Les classes peuvent alors utiliser plusieurs traits pour hériter des méthodes qu'ils contiennent.

Il est également possible d'utiliser plusieurs interfaces pour simuler l'héritage multiple, mais cela implique de réimplémenter les méthodes de chaque interface dans chaque classe, ce qui peut s'avérer fastidieux et chronophage.

#### UML

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWZWhpY3VsZSB7XG4rcm91bGVyKCk6dm9pZFxufVxuY2xhc3MgUm91bGV1ciB7XG4rcm91bGVyKCk6dm9pZFxufVxuPDxUcmFpdD4-IFJvdWxldXJcbjw8SW50ZXJmYWNlPj4gVmVoaWN1bGVcblZlaGljdWxlIDx8LS0gVm9pdHVyZVxuVmVoaWN1bGUgPHwtLSBDYW1pb25cblZvaXR1cmUgLS18PiBSb3VsZXVyXG5DYW1pb24gLS18PiBSb3VsZXVyIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5jbGFzcyBWZWhpY3VsZSB7XG4rcm91bGVyKCk6dm9pZFxufVxuY2xhc3MgUm91bGV1ciB7XG4rcm91bGVyKCk6dm9pZFxufVxuPDxUcmFpdD4-IFJvdWxldXJcbjw8SW50ZXJmYWNlPj4gVmVoaWN1bGVcblZlaGljdWxlIDx8LS0gVm9pdHVyZVxuVmVoaWN1bGUgPHwtLSBDYW1pb25cblZvaXR1cmUgLS18PiBSb3VsZXVyXG5DYW1pb24gLS18PiBSb3VsZXVyIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

#### PHP

```php
interface Vehicule {
    public function rouler();
}

trait Rouleur {
    public function rouler() {
        echo "Je roule";
    }
}

class Voiture {
    use Rouleur;
}

class Camion {
    use Rouleur;
}
```

### Énumérations

Les énumérations sont des types de données qui permettent de définir une liste limitée de valeurs possibles. Chaque valeur est appelée une énumération et est souvent utilisée pour représenter des données qui ont une signification particulière, comme les couleurs, les jours de la semaine, etc.

#### UML

[![](https://mermaid.ink/img/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cbmNsYXNzIFNjaGVkdWxle1xuICAgICtzZXREYXkoZGF5OldlZWtkYXkpXG4gICAgK2dldERheSgpOldlZWtkYXlcbn1cbmNsYXNzIFdlZWtkYXl7XG4gICAgPDxFbnVtPj5cbiAgICBNb25kYXlcbiAgICBUdWVzZGF5XG4gICAgV2VkbmVzZGF5XG4gICAgVGh1cnNkYXlcbiAgICBGcmlkYXlcbiAgICBTYXR1cmRheVxuICAgIFN1bmRheVxufSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/eyJjb2RlIjoiY2xhc3NEaWFncmFtXG5cbmNsYXNzIFNjaGVkdWxle1xuICAgICtzZXREYXkoZGF5OldlZWtkYXkpXG4gICAgK2dldERheSgpOldlZWtkYXlcbn1cbmNsYXNzIFdlZWtkYXl7XG4gICAgPDxFbnVtPj5cbiAgICBNb25kYXlcbiAgICBUdWVzZGF5XG4gICAgV2VkbmVzZGF5XG4gICAgVGh1cnNkYXlcbiAgICBGcmlkYXlcbiAgICBTYXR1cmRheVxuICAgIFN1bmRheVxufSIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

#### PHP

```php
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

class Schedule {
    private Weekday $day;

    public function setDay(Weekday $day) {
        $this->day = $day;
    }

    public function getDay() : Weekday {
        return $this->day;
    }
}
```
