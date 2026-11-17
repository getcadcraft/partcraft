---
title: Nœuds : construire un modèle en les reliant
summary: Reliez des nombres en points, des points en courbes, des courbes en surfaces. Modifiez un nombre et tout ce qui en dépend se reconstruit. Chaque nœud est aussi une ligne de CraftScript, et le graphe est enregistré dans le fichier.
keywords: nœuds, éditeur de nœuds, programmation visuelle, paramétrique, graphe, fils, ports, forme libre, nurbs, lissage, extrusion, révolution, cercle, courbe, surface, série, plage, aléatoire, liste, script, craftscript, grasshopper
from: 3a4625de
---

L'éditeur **Nœuds** construit la géométrie en reliant des boîtes entre elles. Chaque boîte (un nœud) accomplit une petite tâche : produire un nombre, un point, un cercle, un lissage. Vous reliez le résultat de l'une à l'entrée de la suivante, et le modèle suit lorsque vous modifiez un nombre au départ.

Ouvrez-le depuis la liste des espaces de travail : {{ui:Nœuds}}. Il ouvre la fenêtre de l'éditeur. Une pièce qui possède déjà un graphe l'affiche à l'ouverture de l'espace de travail. C'est une fenêtre superposée à la vue 3D : faites glisser sa barre de titre pour la déplacer, et son coin pour la redimensionner.

## Relier les nœuds

1. Choisissez un nœud dans la liste à gauche (saisissez dans la zone de recherche pour la réduire ; <kbd>Entrée</kbd> ajoute la première correspondance). Il apparaît au milieu du canevas.
2. Faites glisser depuis un point de **sortie** rond à droite d'un nœud vers un point d'**entrée** rond à gauche d'un autre. Le point passe au vert lorsque la liaison est possible, et au rouge sinon ; pointez-le pour en connaître la raison.
3. Une entrée sans connexion affiche une case pour une valeur saisie. Tapez un nombre et appuyez sur <kbd>Tab</kbd> : le résultat se reconstruit.
4. Le petit cercle dans la barre de titre d'un nœud est son **œil**. Un nœud dont l'œil est activé est dessiné dans la vue 3D : en traits pour les courbes, en ombrage pour les surfaces, en points pour les points.

Faites glisser un nœud par sa barre de titre. Faites glisser le fond pour faire un panoramique, et tournez la molette pour zoomer. <kbd>Suppr</kbd> supprime le nœud sélectionné. {{ui:Ranger}} range les nœuds en colonnes, {{ui:Ajuster}} les fait tenir dans la vue, {{ui:Annuler}} et {{ui:Rétablir}} parcourent vos modifications.

## Types et unités

Les ports ont un type : nombre, oui/non, point, vecteur, courbe, surface, maillage, solide, ou « géométrie » pour l'un de ceux-ci. Un point peut alimenter une entrée de vecteur, et inversement. Les nombres portent une unité : une **longueur** est en millimètres et un **angle** est en degrés. Une longueur ne peut pas alimenter un angle, et une longueur multipliée par une longueur (une aire) est refusée : un mauvais fil est donc bloqué dès que vous le tracez.

Un point carré est une **liste**. Lorsqu'une liste atteint une entrée à valeur unique, le nœud s'exécute une fois pour chaque élément, et son résultat devient une liste. La liste la plus courte répète son dernier élément. Par exemple, une **Série** de hauteurs reliée à **Déplacer** produit une pile de copies.

## Solides et opérations booléennes en nœuds

Le groupe **Solides** crée des corps fermés à partir des mêmes surfaces exactes que le panneau Surfaces : **Boîte solide**, **Cylindre solide** et **Sphère solide** (dimensions en mm), **Union**, **Soustraction** et **Intersection** (le second solide est pris dans le premier ; la tolérance est l'écart maximal entre les triangles du moteur de solides et les surfaces exactes), **Congé entre faces** (les faces désignées par leur numéro dans le solide, 1 pour la première ; un rayon et, si ce rayon est supérieur à 0, un rayon à l'extrémité), **Volume du solide** (mm³) et **Solide vers maillage** (pour le voir ou le figer). Un solide a son propre type de port : un point ou un nombre ne peut pas être relié à une entrée de solide, et le point reste rouge. Les nœuds d'opération booléenne et de congé utilisent le moteur de solides du programme, chargé à la première ouverture de l'éditeur.

## Erreurs

Un nœud qui ne peut pas accomplir sa tâche indique la raison sous son nom, en rouge (« Le rayon doit être supérieur à zéro. »), et les nœuds suivants attendent. Le même message apparaît comme un problème dans le panneau Problèmes, où vous pouvez le retrouver.

## Chaque nœud est une ligne de script

Appuyez sur {{ui:Script}} pour voir le graphe en CraftScript : une ligne par nœud, par exemple `n3 = nd_circle(n2, n1, [0 0 1]);`. Modifiez le texte puis appuyez sur {{ui:Créer le graphe à partir de ce script}} pour le reconvertir en graphe. Les mêmes fonctions `nd_` fonctionnent dans un CraftScript de PartCraft : un graphe peut donc y être exécuté, bouclé ou testé. Les nombres aléatoires prennent toujours une **graine**, si bien que le même graphe donne le même résultat sur chaque ordinateur.

## Enregistré avec le fichier

Le graphe est enregistré dans le fichier de la pièce (pas dans l'historique : l'annulation de l'éditeur lui est propre). Les nœuds produisent des courbes, des surfaces et des maillages à côté du solide : ils ne modifient pas les fonctions de la pièce.
