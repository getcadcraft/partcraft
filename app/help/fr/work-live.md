---
title: Modéliser une pièce à plusieurs avec Live TeamWork
summary: Ce qui change dans PartCraft pendant une session Live TeamWork depuis CadCraft Studio : les fonctions de chacun dans un même arbre, chaque fenêtre qui construit le même solide, votre propre annulation, et la connexion depuis un navigateur sur le même réseau.
keywords: live, live teamwork, studio live, ensemble, collaborer, session, partager en direct, rejoindre, arbre des fonctions, historique, reconstruction, curseur, pointeur, se voir, noms, couleur, sélection, annulation, hôte
from: 1809b96c
---

## Ce que vous allez apprendre

Ce qui arrive à une pièce lorsque plusieurs personnes la modélisent en même temps. CadCraft Studio lance et rejoint la session Live TeamWork (Partager, Rejoindre) ; cette page traite de la pièce elle-même.

## Tout le monde modélise en même temps

Tout le monde travaille sur le même arbre des fonctions : esquisses, extrusions, trous, répétitions, congés, paramètres. Vos propres modifications apparaissent aussitôt ; celles des autres apparaissent un instant après qu'elles les ont faites. Seul l'arbre voyage : chaque fenêtre construit le solide elle-même, et le noyau de PartCraft construit le même solide à partir du même arbre dans chaque fenêtre.

- **Deux personnes modifient une même fonction :** des réglages différents (l'une la profondeur, l'autre la condition de fin) sont conservés tous les deux ; le même réglage est retenu pour la modification la plus récente.
- **Une esquisse** voyage entière : lorsque deux personnes modifient une même esquisse en même temps, la modification la plus récente l'emporte. Convenez de qui dessine quelle esquisse.
- **Une fonction construite sur une fonction que quelqu'un vient de supprimer** (une extrusion d'une esquisse retirée, un trou sur une face retirée) est annulée, et la barre d'état indique pourquoi.
- **Réordonner l'arbre** est vérifié : si deux personnes déplacent des fonctions au même moment, le second déplacement est annulé.

## Se voir

Chaque personne de la session a sa propre couleur. Vous voyez le pointeur de chacun sous forme de flèche de sa couleur, avec son nom à côté, sur la face qu'il pointe. Lorsqu'une fonction est sélectionnée dans l'arbre, son nom s'affiche après le sien.

Pointeurs, noms et sélections ne valent que pour la session : ils ne sont jamais enregistrés dans le fichier et n'entrent jamais dans l'annulation de personne. Ils glissent jusqu'à l'endroit où se trouve chacun, si bien qu'ils restent fluides même sur une connexion lente.

## L'annulation ne défait que votre travail

{{key:Mod+Z}} annule votre dernière modification et laisse celles des autres. Lorsque quelqu'un a modifié la même chose depuis, rien n'est annulé et la barre d'état indique qui.

## Rejoindre depuis un navigateur

Un coéquipier sans Studio peut scanner l'image sous le code de l'hôte avec un téléphone, une tablette ou un ordinateur sur le même réseau. PartCraft s'ouvre dans le navigateur, affiche la pièce de l'hôte une fois que celui-ci vous a admis, et la construit. Un lien d'invitation permet de rejoindre depuis un autre réseau : l'hôte a besoin d'un poste Team Cloud Plan pour l'application, les autres rejoignent gratuitement, et le lien ne fonctionne que tant que la session de l'hôte est ouverte.

## Fin de la session

Seul l'hôte enregistre la pièce. Les autres conservent une copie non enregistrée : enregistrez-la si vous voulez la garder.

:::note
Les assemblages ne sont pas encore partagés dans une session : ouvrez la pièce elle-même pour travailler à plusieurs dessus.
:::
