---
title: Liste des pièces, vues éclatées et pièces mobiles
summary: Attribuez à chaque pièce d'un assemblage un numéro, une description et un matériau, consultez et téléchargez la nomenclature, créez des vues éclatées par étapes ou automatiquement, déplacez à la main les pièces non liées, définissez les limites des liaisons et exportez tout l'assemblage en STL, 3MF ou en nomenclature.
keywords: nomenclature, liste des pièces, numéro de pièce, matériau, masse volumique, csv, vue éclatée, éclater, réduire, lignes de trajectoire, déplacer la pièce, glisser, manipulateur, translation, rotation, limites de liaison, export d'assemblage, étape d'assemblage, plan d'assemblage, bulles
from: ebc9f6f3
---

Ces outils se trouvent dans le panneau de droite d'un assemblage (voir [Construire un assemblage avec des liaisons](topic:build-assembly)).

## Propriétés de la pièce

Sélectionnez une pièce dans la liste à gauche. Sous **Propriétés de la pièce**, définissez :

- **Numéro de pièce** (jusqu'à 40 caractères) et **Description** (jusqu'à 200).
- **Matériau** : un matériau courant avec sa masse volumique, ou **Densité personnalisée…** pour saisir une valeur en g/cm³. Le panneau affiche alors la masse de la pièce.

Les propriétés appartiennent à la pièce : toutes ses copies les partagent. Elles sont enregistrées dans le fichier d'assemblage.

## Nomenclature

Sans sélection ({{key:Esc}}), le panneau affiche la **Nomenclature** : une ligne par pièce, avec son numéro d'article, sa quantité (le nombre de copies), son numéro de pièce, son nom, son matériau et sa masse. Les numéros d'article suivent l'ordre d'apparition des pièces dans la liste. Les masses sont calculées à partir du volume de chaque pièce (du solide facetté construit par le noyau maillé, légèrement sous-estimé pour les pièces rondes) et de son matériau. Une pièce sans matériau n'a pas de masse, et il n'y a alors pas de total.

{{ui:Télécharger le CSV}} enregistre la liste dans un fichier CSV (également **Exporter › Nomenclature (CSV)**). Il s'ouvre dans n'importe quel tableur ; le texte qui commence par = ou + reçoit une apostrophe en début, pour qu'un tableur ne l'exécute pas comme une formule.

## Vues éclatées

Une vue éclatée écarte les pièces pour les illustrations. Elle ne modifie jamais les liaisons ni les positions réelles : l'enregistrement, les contrôles de collision et les exports utilisent les positions réelles.

1. Sans sélection, choisissez {{ui:Nouvelle vue}} sous **Vues éclatées**.
2. Sous **Ajouter une étape**, cochez les pièces que l'étape déplace, choisissez une **Direction** (+X … −Z, la normale d'une face que vous cliquez, ou **Faire glisser une flèche dans la vue**) et une **Distance**, puis {{ui:Ajouter l'étape}}. Avec **Glisser**, faites glisser la flèche puis relâchez : l'étape prend la direction et la distance du glissement.
3. Ajoutez d'autres étapes. Elles se jouent les unes après les autres.
4. Faites glisser le curseur entre **Assemblé** et **Éclaté** pour animer la vue. Des lignes de trajectoire en pointillés relient la position de repos de chaque pièce à sa position actuelle.

{{ui:Auto (radial)}} écarte chaque pièce, sauf la pièce fixe, du milieu de l'assemblage. {{ui:Auto (liaisons)}} déplace chaque pièce liée (avec tout ce qui est lié en dessous) le long de la normale de la face de sa liaison. Vous pouvez conserver plusieurs vues nommées ; choisissez-en une dans **Vue**, ou **Assemblé** pour remettre les pièces en place. Les vues sont enregistrées dans le fichier d'assemblage.

## Déplacer une pièce à la main

Seule une pièce sans liaison avec la pièce fixe se déplace à la main (la pièce fixe reste immobile ; les liaisons placent le reste). Sélectionnez-la puis, sous **Déplacer à la main** :

- Saisissez **ΔX, ΔY, ΔZ** et choisissez {{ui:Déplacement}}, ou choisissez un axe et un **Angle**, puis {{ui:Tourner}} (autour du milieu de la pièce).
- {{ui:Glisser pour déplacer}} affiche des flèches sur la pièce : faites glisser une flèche pour déplacer selon cet axe, ou un carré pour déplacer dans un plan. {{ui:Glisser pour tourner}} affiche des anneaux pour la faire pivoter. Chaque glissement correspond à une étape d'annulation. {{key:Esc}} masque les flèches.

## Limites de liaison

Sélectionnez une liaison qui bouge et, sous **Limites**, cochez **Maintenir … entre les limites** pour l'une de ses valeurs, puis définissez son **Minimum** et son **Maximum**. Chaque valeur reste dans ses propres limites, son curseur ne couvre que cette plage, et **Vérifier les conflits sur toute la course du mouvement** ne balaie que ces plages. Une liaison cylindrique peut limiter son angle, son décalage ou les deux. Changer le type de liaison supprime les limites des valeurs que le nouveau type n'a pas.

## Exporter tout l'assemblage

Dans un assemblage, le menu **Exporter** écrit tout l'assemblage, avec chaque pièce à sa position :

- **STEP AP242 / AP214** et **Dessin (PDF)** ne sont pas encore disponibles dans cette version : ils nécessitent un noyau exact, ils sont donc grisés. Exportez plutôt le STEP (solide exact) de chaque pièce depuis la pièce.
- **STL** : un seul maillage de toutes les pièces. **3MF** : chaque pièce une fois, placée une fois par copie.
- **Nomenclature (CSV)**.

## Limites

- Le dessin d'assemblage et le STEP d'assemblage ne sont pas encore disponibles dans cette version (ils nécessitent un noyau exact). Les vues éclatées servent aux illustrations à l'écran.
