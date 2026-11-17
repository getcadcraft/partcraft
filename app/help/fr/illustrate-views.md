---
title: Vues, aspects, coupes et loupe
summary: Un manuel conserve une liste ordonnée de vues. Chacune mémorise la caméra, l'état éclaté et, pour chaque pièce, si elle est affichée, en fantôme, son opacité et sa couleur, ainsi qu'un style, une coupe ou un écorché en boîte et une loupe.
keywords: illustrer, vue, caméra, masquer, fantôme, isoler, opacité, couleur, coupe, écorché, loupe, rayons X, style de dessin au trait
from: 8bb640f0
---

## La scène et ses vues

Ce que vous voyez est la **scène**. Faites tourner le modèle comme dans la Conception, puis modifiez l'aspect des pièces :

- Cliquez sur une pièce pour la sélectionner ; {{key:Shift}}+clic ajoute ou retire une pièce. Les lignes de l'arborescence {{ui:Parts}} sélectionnent aussi (une ligne de groupe sélectionne tout ce qu'il contient). {{ui:Select same part}} ajoute toutes les copies de la pièce.
- {{ui:Hide}} ({{key:H}}), {{ui:Ghost}} ({{key:G}} : translucide et grise) et {{ui:Isolate}} ({{key:I}} : seules celles-ci) s'appliquent à la sélection ; {{ui:Show all}} rétablit tout. Le panneau règle l'opacité et la couleur d'une pièce.
- {{ui:Exploded view}} dans le panneau choisit l'une des vues éclatées de la conception et son degré d'éclatement.

{{ui:Add view}} enregistre la scène comme nouvelle vue, avec une petite image. Cliquez sur une vue dans la liste {{ui:Views}} pour y revenir ; {{ui:Update view}} enregistre la scène dans la vue sur laquelle vous êtes. Les vues peuvent être renommées (double-clic), déplacées vers le haut ou vers le bas, dupliquées et supprimées.

## Aspects

La section {{ui:Look}} définit, pour la scène et donc pour chaque vue enregistrée :

- {{ui:Style}} : ombré, ombré avec contours, couleurs unies, dessin au trait seul, ou rayons X.
- {{ui:Section plane}} : supprime un côté selon X, Y ou Z ; les faces coupées sont remplies. {{ui:Keep the other side}} inverse le sens.
- {{ui:Box cut-away}} : découpe un coin du modèle pour montrer l'intérieur. Dans la vue 3D, ses faces coupées restent ouvertes ; dans le dessin au trait (Export), elles sont hachurées.
- {{ui:Magnifier}} : une lentille ronde qui montre un détail agrandi, ou l'intérieur avec toutes les arêtes. Faites glisser la lentille pour la déplacer ; {{ui:Aim the lens}} puis cliquez sur le point à observer.

La vue en direct montre toujours la caméra de face (projection orthographique). Une vue peut néanmoins être enregistrée en perspective ; ses images et son dessin au trait utilisent alors la perspective.
