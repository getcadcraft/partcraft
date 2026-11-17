---
title: Copier, coller et dupliquer
summary: Copiez la géométrie d'esquisse, les fonctions et les pièces d'assemblage ; collez à l'endroit cliqué ou sur place ; dupliquez en une étape ; et découvrez ce qui accompagne une copie et ce qui n'y est pas.
keywords: copier, coller, couper, dupliquer, presse-papiers, coller sur place, tout sélectionner, tout désélectionner, supprimer, ctrl c, ctrl v, ctrl d, instance, composant, copier l'esquisse, copier la fonction, copier la pièce
from: 611307d7
---

Le groupe {{ui:Modifier}} de la barre d'outils contient {{ui:Annuler}}, {{ui:Rétablir}}, {{ui:Copier}}, {{ui:Coller}} et un menu {{ui:Plus}} avec {{ui:Couper}}, {{ui:Copier}}, {{ui:Coller}}, {{ui:Coller sur place}}, {{ui:Dupliquer}}, {{ui:Supprimer}}, {{ui:Tout sélectionner}} et {{ui:Tout désélectionner}}, chacun avec sa touche. Ce qui est copié dépend de l'endroit où vous êtes : la géométrie d'une esquisse ouverte, une fonction de l'historique, ou une pièce dans un assemblage.

Un élément grisé ne peut pas agir pour le moment. Survolez-le : son info-bulle indique pourquoi, par exemple « Sélectionnez d'abord la géométrie d'esquisse » ou « Le presse-papiers contient Sketch2 et Extrude2 : les fonctions se collent dans l'historique, donc quittez d'abord l'esquisse ».

| Action | Touche | Dans une esquisse | Dans l'historique | Dans un assemblage |
|---|---|---|---|---|
| Copier | {{key:Mod+C}} | Les points et courbes sélectionnés | L'esquisse, l'extrusion, la révolution ou le trou sélectionné (avec son esquisse) | La pièce sélectionnée |
| Couper | {{key:Mod+X}} | Copier, puis les supprimer | Copier, puis supprimer la fonction | Copier, puis retirer la pièce |
| Coller | {{key:Mod+V}} | La copie suit le pointeur ; cliquez là où elle doit aller | Ajoute la copie à la fin de l'historique | Une nouvelle copie à côté des autres pièces |
| Coller sur place | {{key:Mod+Shift+V}} | Aux mêmes coordonnées | Identique à Coller | Au même endroit que la pièce copiée |
| Dupliquer | {{key:Mod+D}} | Copier et déplacer d'un seul geste ; le presse-papiers n'est pas modifié | Une seconde copie juste après vous | Une seconde copie à côté des autres pièces |
| Supprimer | {{key:Delete}} | La sélection | La fonction (demande confirmation si d'autres l'utilisent) | La pièce ou la liaison |
| Tout sélectionner | {{key:Mod+A}} | Tout dans l'esquisse | Non disponible | Non disponible |
| Tout désélectionner | {{key:Esc}} | Efface la sélection | Efface la sélection et les choix | Efface la sélection |

Chaque collage, duplication et coupe correspond à une étape de la liste d'annulation : {{key:Mod+Z}} l'annule, {{key:Mod+Y}} la rétablit.

## Dans une esquisse

1. Sélectionnez ce qui doit être copié : cliquez dessus, {{key:Shift}}+clic pour en ajouter, faites glisser une fenêtre, ou appuyez sur {{key:Mod+A}} pour tout sélectionner.
2. Appuyez sur {{key:Mod+C}} ou choisissez {{ui:Copier}}. La barre d'état indique ce qui a été copié.
3. Appuyez sur {{key:Mod+V}} ou choisissez {{ui:Coller}}. Une copie en pointillés suit le pointeur, tenue par son milieu. Elle s'accroche aux points : placez le centre d'un cercle copié sur un point en cliquant sur ce point.
4. Cliquez à l'endroit voulu. La géométrie collée reste sélectionnée, de sorte que vous pouvez la faire glisser ou lui ajouter des relations immédiatement. {{key:Esc}} annule le collage.

Ce qui accompagne la copie :

- Une ligne, un cercle ou un arc copié apporte ses propres points d'extrémité et son centre.
- Les relations et cotes **entre les éléments copiés** suivent : un rectangle copié reste un rectangle, avec ses dimensions.
- Les relations **vers une géométrie non copiée**, et vers l'origine, sont supprimées. La barre d'état les compte : « 2 relations vers une géométrie extérieure à la copie ne seront pas reprises ». Une copie collée est donc libre de bouger tant que vous ne la reliez pas par des relations ou des cotes.
- Un point fixe reste fixe, à sa nouvelle position.

{{ui:Coller sur place}} place la copie exactement aux coordonnées de l'original, dans cette esquisse ou dans une autre : pratique pour reprendre un profil d'une esquisse dans une autre. Dans la même esquisse, la copie se trouve par-dessus l'original ; faites-la glisser à l'écart.

{{ui:Dupliquer}} ({{key:Mod+D}}) copie la sélection et commence à la placer aussitôt, sans toucher au contenu du presse-papiers.

:::tip
Pour répéter un centre de trou ou une rainure plusieurs fois, copiez-le une fois et collez-le plusieurs fois : chaque {{key:Mod+V}} lance une nouvelle copie qui suit le pointeur.
:::

## Dans l'historique

1. Cliquez sur une esquisse, une extrusion, une révolution ou un trou dans l'historique.
2. {{key:Mod+C}} la copie. Une fonction basée sur une esquisse est copiée avec son esquisse.
3. {{key:Mod+V}} ajoute la copie à la fin de l'historique (à la barre de retour si vous avez reculé), avec de nouveaux noms comme Sketch3 et Extrude2.

La copie se trouve sur le même plan ou la même face que l'original : elle se construit donc par-dessus, et la pièce reste identique. Sélectionnez la nouvelle esquisse et modifiez son plan dans le panneau de droite, ou ouvrez-la et faites glisser ou recotez le profil, pour déplacer la copie.

- Coller dans **une autre pièce** : ouvrez cette pièce et appuyez sur {{key:Mod+V}}. Si l'esquisse de la copie se trouvait sur une face que cette pièce n'a pas, elle est placée sur le plan de face, et la barre d'état l'indique.
- {{ui:Dupliquer}} copie et colle en une seule étape, dans la même pièce.
- {{ui:Couper}} copie la fonction, puis la supprime (en demandant d'abord si d'autres fonctions l'utilisent).

Les répétitions, symétries, congés, chanfreins, coques et solides importés ne peuvent pas être copiés : ils dépendent d'arêtes, de faces ou de fonctions choisies dans cette pièce. Copiez plutôt l'esquisse ou la fonction sur lesquelles ils sont construits, ou répétez-les avec {{ui:Linéaire}} ou {{ui:Circulaire}}.

## Dans un assemblage

1. Cliquez sur une pièce dans la vue ou dans la liste à gauche.
2. Choisissez {{ui:Dupliquer}} ({{key:Mod+D}}), ou {{key:Mod+C}} puis {{key:Mod+V}}.

La nouvelle copie est la **même pièce** : modifiez-en une et toutes les copies changent. Elle apparaît à 20 mm à droite de tout ce qui se trouve déjà dans l'assemblage, orientée comme la copie, et y reste jusqu'à ce qu'une liaison la place. {{ui:Coller sur place}} ({{key:Mod+Shift+V}}) la place exactement là où se trouve la pièce copiée ; reliez-la pour la déplacer (le décalage d'une liaison de glissière la pousse dans son sens).

Coller une pièce copiée depuis un autre assemblage amène la pièce avec elle, comme {{ui:Insérer}} depuis son fichier. {{ui:Ajouter une copie}} dans le groupe Assemblage fait la même chose que {{ui:Dupliquer}}, et fonctionne sans sélection (il copie la dernière pièce).

## Le presse-papiers

- C'est le presse-papiers propre à PartCraft, et non celui de l'ordinateur : vous ne pouvez pas coller la géométrie PartCraft dans un autre programme, ni du texte dans les vues de PartCraft.
- Il est conservé dans ce navigateur, de sorte qu'un autre onglet PartCraft peut coller ce que vous avez copié. Il est relu et vérifié comme un fichier ouvert ; toute donnée endommagée ou provenant d'une autre version est refusée.
- Une pièce avec un grand fichier STEP importé peut être trop volumineuse pour être conservée par le navigateur : elle ne se colle alors que dans cet onglet.
- Dans un champ de nombre ou la recherche d'aide, {{key:Mod+C}} et {{key:Mod+V}} copient et collent du texte comme d'habitude.

Sur la feuille de dessin, copier et coller ne sont pas encore disponibles ; {{ui:Supprimer}} et {{ui:Tout désélectionner}} agissent sur le symbole sélectionné. Voir [Pas encore disponible](topic:not-built-yet).
