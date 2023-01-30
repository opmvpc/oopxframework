# MVC

[[toc]]

## Introduction

Le modèle-vue-contrôleur (MVC) est un modèle de conception d'architecture logicielle qui sépare les données d'une application, sa présentation et sa logique de contrôle. Cette architecture est largement utilisée pour développer des applications web.

## Modèle

Le modèle représente les données de l'application et les règles métier qui s'appliquent à ces données. C'est la couche responsable de la gestion des données, telles que la lecture et la mise à jour de la base de données.

## Vue

La vue est responsable de l'affichage des données. Elle reçoit les données du modèle et les affiche à l'utilisateur. La vue peut également envoyer des commandes au contrôleur pour effectuer des actions sur les données.

## Contrôleur

Le contrôleur gère les interactions entre la vue et le modèle. Il reçoit les commandes de l'utilisateur via la vue, les traite et effectue les mises à jour nécessaires sur le modèle. Le contrôleur peut également envoyer des instructions à la vue pour afficher les données mises à jour.

## Fonctionnement

Lorsqu'un utilisateur effectue une action, comme la soumission d'un formulaire ou le clic sur un bouton, la vue envoie une commande au contrôleur. Le contrôleur traite cette commande et effectue les mises à jour nécessaires sur le modèle. Le modèle envoie alors les données mises à jour à la vue, qui les affiche à l'utilisateur. Ce cycle de demande-réponse se poursuit jusqu'à ce que l'utilisateur ferme l'application ou effectue une autre action.

Voici un diagramme qui montre comment fonctionne le cycle de requêtes dans un modèle MVC :

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgICBzdWJncmFwaCBEYXRhYmFzZVxuICAgICAgICBEQltcIvCfkr4gRGF0YWJhc2VcIl1cbiAgICBlbmRcblxuICAgIHN1YmdyYXBoIFNlcnZlclxuICAgICAgICBSb3V0ZXJbXCLwn5uj77iPIFJvdXRlclwiXVxuICAgICAgICBNb2RlbFtcIvCfkr4gTW9kZWxcIl1cbiAgICAgICAgVmlld1tcIvCfk4ogVmlld1wiXVxuICAgICAgICBDb250cm9sbGVyW1wi8J-Om--4jyBDb250cm9sbGVyXCJdXG4gICAgZW5kXG5cbiAgICBzdWJncmFwaCBDbGllbnRcbiAgICAgICAgVXNlcltcIvCfkaQgVXNlclwiXVxuICAgICAgICBCcm93c2VyW1wi8J-MkCBCcm93c2VyXCJdICAgXG4gICAgZW5kXG5cbiAgICBVc2VyIC0tMS0tPiBCcm93c2VyXG4gICAgQnJvd3NlciAtLTItLT4gUm91dGVyXG4gICAgUm91dGVyIC0tMy0tPiBDb250cm9sbGVyXG4gICAgQ29udHJvbGxlciAtLTQtLT4gTW9kZWxcbiAgICBNb2RlbCAtLTUtLT4gREJcbiAgICBEQiAtLTYtLT4gTW9kZWxcbiAgICBNb2RlbCAtLTctLT4gQ29udHJvbGxlclxuICAgIENvbnRyb2xsZXIgLS04LS0-IFZpZXdcbiAgICBWaWV3IC0tOS0tPiBDb250cm9sbGVyXG4gICAgQ29udHJvbGxlciAtLTEwLS0-IFJvdXRlclxuICAgIFJvdXRlciAtLTExLS0-IEJyb3dzZXJcbiAgICBCcm93c2VyIC0tMTItLT4gVXNlciIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgICBzdWJncmFwaCBEYXRhYmFzZVxuICAgICAgICBEQltcIvCfkr4gRGF0YWJhc2VcIl1cbiAgICBlbmRcblxuICAgIHN1YmdyYXBoIFNlcnZlclxuICAgICAgICBSb3V0ZXJbXCLwn5uj77iPIFJvdXRlclwiXVxuICAgICAgICBNb2RlbFtcIvCfkr4gTW9kZWxcIl1cbiAgICAgICAgVmlld1tcIvCfk4ogVmlld1wiXVxuICAgICAgICBDb250cm9sbGVyW1wi8J-Om--4jyBDb250cm9sbGVyXCJdXG4gICAgZW5kXG5cbiAgICBzdWJncmFwaCBDbGllbnRcbiAgICAgICAgVXNlcltcIvCfkaQgVXNlclwiXVxuICAgICAgICBCcm93c2VyW1wi8J-MkCBCcm93c2VyXCJdICAgXG4gICAgZW5kXG5cbiAgICBVc2VyIC0tMS0tPiBCcm93c2VyXG4gICAgQnJvd3NlciAtLTItLT4gUm91dGVyXG4gICAgUm91dGVyIC0tMy0tPiBDb250cm9sbGVyXG4gICAgQ29udHJvbGxlciAtLTQtLT4gTW9kZWxcbiAgICBNb2RlbCAtLTUtLT4gREJcbiAgICBEQiAtLTYtLT4gTW9kZWxcbiAgICBNb2RlbCAtLTctLT4gQ29udHJvbGxlclxuICAgIENvbnRyb2xsZXIgLS04LS0-IFZpZXdcbiAgICBWaWV3IC0tOS0tPiBDb250cm9sbGVyXG4gICAgQ29udHJvbGxlciAtLTEwLS0-IFJvdXRlclxuICAgIFJvdXRlciAtLTExLS0-IEJyb3dzZXJcbiAgICBCcm93c2VyIC0tMTItLT4gVXNlciIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

1. L'utilisateur 🧔 interagit avec le navigateur 🌐
2. Le navigateur 🌐 envoie une requête 📩 au routeur 🛣️
3. Le routeur 🛣️ redirige la requête 📩 au contrôleur 🎛️
4. Le contrôleur 🎛️ interroge le modèle 💾
5. Le modèle 💾 accède à la base de données 💾
6. La base de données 💾 renvoie les données au modèle 💾
7. Le modèle 💾 renvoie les données au contrôleur 🎛️
8. Le contrôleur 🎛️ envoie les données à la vue 📊
9. La vue 📊 envoie une requête de mise à jour au contrôleur 🎛️
10. Le contrôleur 🎛️ envoie une réponse 📩 au routeur 🛣️
11. Le routeur 🛣️ envoie la réponse 📩 au navigateur 🌐
12. Le navigateur 🌐 affiche la réponse 📩 à l'utilisateur 🧔
