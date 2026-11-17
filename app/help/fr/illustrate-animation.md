---
title: Animer une notice
summary: Enregistrez les pièces (position, affichage ou masquage, opacité, couleur) et la caméra à un instant donné, enregistrez les étapes d'une vue éclatée, lisez les vues les unes après les autres, puis lisez-les ici ou enregistrez une vidéo.
keywords: illustrer, animation, image-clé, chronologie, animation d'éclatement, caméra, vidéo, webm, mp4, lire
from: df4f91f9
---

Ouvrez la section {{ui:Animation}} :

- {{ui:Tout mettre en clé}}, {{ui:Mettre en clé les pièces sélectionnées}} et {{ui:Mettre la caméra en clé}} enregistrent l'état actuel à l'instant courant : la position de chaque pièce, si elle est affichée, son opacité et sa couleur, ainsi que la caméra. Modifiez la scène, déplacez le curseur {{ui:Temps}}, puis créez une nouvelle clé : l'animation passe d'une clé à la suivante.
- {{ui:Enregistrer la vue éclatée}} ajoute une clé par étape de la vue éclatée de la scène, une seconde par étape, après ce qui existe déjà.
- {{ui:Les vues comme arrêts de caméra}} lit les vues dans l'ordre : la caméra se déplace vers chacune, la maintient, et les pièces prennent l'aspect de chaque vue.

{{ui:Lire}}, {{ui:Pause}}, {{ui:Arrêter}} et {{ui:Boucle}} lisent l'animation dans la vue ; les clés de chaque pièce et de la caméra sont listées (cliquez sur une clé pour aller à son instant). {{ui:Enregistrer la vidéo}} écrit du WebM ou du MP4 (là où le navigateur peut l'encoder), ou les images en fichiers PNG dans une archive ZIP.

L'animation est enregistrée dans le même format que l'espace Animation de ModelCraft. Son éditeur de courbes et ses clips sont, pour l'instant, ceux de ModelCraft.
