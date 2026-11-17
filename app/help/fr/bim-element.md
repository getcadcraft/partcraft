---
title: Modifier un élément BimCraft et le renvoyer
summary: Une pièce envoyée depuis BimCraft s'ouvre avec le bâtiment autour d'elle, en gris et en lecture seule. Modifiez-la, puis renvoyez-la pour que BimCraft puisse accepter la nouvelle forme.
keywords: bimcraft, bim, élément, envoyer, renvoyer, lien, bâtiment, contexte, voisins, appui, support, équerre, ifc, accepter
from: 0978fe53
---

## Ce que vous allez faire

Travailler sur une pièce issue d'un modèle BimCraft, à sa place dans le bâtiment, puis renvoyer la nouvelle forme.

## Étapes

1. Dans BimCraft, sélectionnez un élément, puis choisissez {{ui:Liens de pièce}} › {{ui:Envoyer vers PartCraft}}. PartCraft l'ouvre comme une nouvelle pièce. La barre d'état indique qu'il s'agit d'un élément BIM.
2. Les éléments voisins (à moins de 3 m) sont dessinés en gris. Ils servent de référence pour la conception. Vous ne pouvez ni les sélectionner ni les modifier, et ils ne sont pas enregistrés dans le fichier de la pièce.
3. Modifiez la pièce comme n'importe quelle autre : découpez, ajoutez, percez, faites une symétrie. Son origine et ses axes sont ceux de l'élément, si bien que la pièce revient à sa place d'origine.
4. Choisissez {{ui:Fichier}} › {{ui:Exporter}} › {{ui:Renvoyer vers BimCraft}}. La barre d'état indique la révision que vous avez envoyée.
5. Dans BimCraft, l'élément apparaît comme modifié tant que la personne qui s'en occupe ne l'a pas accepté.

## Ce que vous devez voir

- La pièce conserve son lien dans le fichier. Si vous l'ouvrez plus tard, la barre d'état indique toujours qu'il s'agit d'un élément BIM. Le bâtiment en gris réapparaît tant que le navigateur conserve le paquet avec lequel il a été envoyé.
- Un nouvel envoi renvoie la révision 2, 3 et ainsi de suite. BimCraft conserve la plus récente.

## Bon à savoir

- La forme revient sous forme de maillage en millimètres, dans les axes propres à l'élément. Les fonctions restent dans PartCraft.
- {{ui:Renvoyer vers BimCraft}} n'a aucun effet sur une pièce qui ne provient pas de BimCraft.
- Une pièce sans solide n'a rien à envoyer.
- Les deux applications doivent être ouvertes dans le même navigateur : rien n'est téléversé, les deux pages se transmettent l'élément entre elles.
