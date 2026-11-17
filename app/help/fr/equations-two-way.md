---
title: Équations dans les deux sens
summary: Modifiez un paramètre et la pièce suit ; saisissez une nouvelle taille dans une cote pilotée et PartCraft calcule le paramètre qui se cache derrière, en demandant lequel modifier lorsque plusieurs peuvent changer.
keywords: équations, résoudre à rebours, cote pilotée, deux sens, inverse, valeur cible, paramètres, valeurs liées, quel paramètre
from: 82dc0269
---

Une équation telle que **Extrude1 depth = thick + extra** fonctionne dans les deux sens.

## Sens direct : modifier le paramètre

Dans l'onglet {{ui:Paramètres}}, changez `thick` de 20 à 30. La profondeur de Extrude1 devient 30 + extra, et la pièce se reconstruit.

## Sens inverse : modifier la cote pilotée

1. Cliquez sur « Extrude1 » dans l'historique. Sa case **Profondeur (mm)** affiche **ƒ** : une équation la pilote.
2. Saisissez la taille voulue, par exemple `40`, et appuyez sur {{key:Enter}}.

PartCraft résout le paramètre derrière l'équation, en autant d'étapes qu'il faut (`depth = hub_h`, `hub_h = disc_t + 50` : saisir une hauteur modifie `disc_t`). La barre d'état indique ce qui a changé, par exemple que extra est passé de 5 à 15.

Lorsque deux paramètres ou plus pilotent la valeur, une boîte demande **Quel paramètre doit changer ?** et les liste. Cliquez sur l'un ; les autres gardent leur valeur. {{ui:Annuler}} ne modifie rien.

Le même principe fonctionne dans une esquisse : double-cliquez sur une cote pilotée, saisissez une valeur et appuyez sur {{key:Enter}}. Cela marche aussi dans la colonne **Valeur** du tableau des paramètres, pour un paramètre qui est lui-même une expression.

## Quand ce n'est pas possible

- Un nombre qui doit être entier (un nombre de répétitions) ou rester dans une plage (un angle jusqu'à 360°) est refusé avant toute modification.
- Une équation de nombres fixes seulement (`=40`) n'a aucun paramètre à modifier : le nombre que vous saisissez remplace l'équation.
- Si aucune valeur du paramètre ne donne la taille saisie, la barre d'état le signale et rien ne change.
- Une esquisse qui ne peut pas être résolue avec la nouvelle valeur conserve ses valeurs précédentes, et la barre d'état nomme l'esquisse.

Chaque modification, dans un sens ou dans l'autre, est une étape pour {{key:Mod+Z}} et {{key:Mod+Y}}.
