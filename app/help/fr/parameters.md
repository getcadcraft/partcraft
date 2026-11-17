---
title: Piloter une pièce avec des paramètres
summary: Nommer les dimensions qui comptent (largeur, épaisseur, taille de boulon), lier à elles n'importe quel numéro de fonction ou cote d'esquisse avec =, et modifier toute la pièce depuis un seul tableau.
keywords: paramètres, où utilisé, utilisé par, variables globales, variables, équations, intention de conception, cotes pilotantes, lien, expression, formule, nommer une cote, valeurs liées
from: 58c646ea
---

Un paramètre est un nombre nommé, comme `width = 120` ou `margin = bolt * 1.5`. Reliez une profondeur, un diamètre de trou, un nombre de répétitions ou une cote d'esquisse à lui, et sa modification change toutes ces valeurs en une seule étape. C'est ainsi que vous conservez l'intention de conception dans la pièce plutôt que dans votre tête.

## Ajouter des paramètres

1. Dans le panneau de droite, cliquez sur l'onglet {{ui:Paramètres}}.
2. Sous **Variables**, saisissez un nom dans la case « nom », par exemple `width`.
3. Saisissez sa valeur dans la case suivante, par exemple `120`, puis appuyez sur {{key:Enter}} (ou cliquez sur {{ui:Ajouter}}).

Une valeur peut être un nombre ou une expression d'autres paramètres : `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. La colonne **Valeur** affiche le résultat du calcul. Un nom commence par une lettre ou `_` et ne comporte que des lettres, des chiffres et `_` ; les noms de fonctions et d'unités (`sin`, `mm`, `pi`) sont refusés, de même qu'une boucle telle que `a = b` avec `b = a`.

## Lier un nombre à un paramètre

1. Cliquez sur une fonction dans l'historique, par exemple « Extrude1 ». Ses réglages s'affichent dans l'onglet {{ui:Propriétés}}.
2. Dans une case de nombre, comme **Profondeur (mm)**, saisissez `=` suivi d'une expression : `=thick` ou `=width / 4`.
3. Appuyez sur {{key:Enter}}.

La case affiche désormais le résultat, et un bouton **ƒ** apparaît à côté de son libellé. Pointez-le pour voir l'équation. Les cotes d'esquisse fonctionnent de la même manière, aussi bien dans la liste **Cotes d'esquisse** d'une fonction que dans la case de cote d'une esquisse ouverte (double-cliquez sur une cote, saisissez `=width`, puis appuyez sur {{key:Enter}}).

Nombres que vous pouvez lier : profondeur d'extrusion, angle de révolution, diamètre de trou, profondeur et dimensions de lamage, nombre de répétitions, espacement et angle, rayon de congé, distance de chanfrein, épaisseur de paroi de coque, chaque cote d'esquisse, et les dimensions des fonctions plus récentes (deuxième profondeur, conicité, contre-perçage, distance à un plan de référence, angle de dépouille et autres).

## Modifier un paramètre

Dans l'onglet {{ui:Paramètres}}, saisissez une nouvelle valeur ou expression dans la colonne **Expression** et appuyez sur {{key:Enter}}. Tout ce qui est lié change et la pièce se reconstruit, en une seule étape : {{key:Mod+Z}} l'annule.

Pour modifier un nombre dans l'autre sens, voir [Équations dans les deux sens](topic:equations-two-way).

## Voir où un paramètre est utilisé

Sous chaque paramètre de l'onglet {{ui:Paramètres}}, une ligne indique ce qui l'utilise :

- les nombres qu'il pilote, comme **Extrude1 profondeur** ou **Sketch1 D2 (distance)**. Cliquez sur l'un d'eux pour sélectionner sa fonction et afficher ses propriétés ;
- les nombres qu'il pilote **à travers** d'autres paramètres, comme **Hole1 diamètre (via h, d)** lorsque `d = h + 2` et `h = w / 2` ;
- les **paramètres** dont les expressions l'utilisent, les **configurations** qui le fixent, et les **scripts** qui le lisent (voir [Écrire et exécuter des scripts](topic:craftscript)).

« Pas encore utilisé. » signifie que rien ne l'utilise : vous pouvez le supprimer sans confirmation.

## Délier, renommer, supprimer

- **Délier un nombre :** cliquez sur son bouton **ƒ**, ou sur {{ui:Délier}} dans la liste **Équations**. Il garde sa valeur actuelle, et aucun paramètre ne le modifie plus.
- **Renommer un paramètre :** saisissez un nouveau nom dans sa case **Nom**. Chaque expression qui l'utilise est réécrite.
- **Supprimer un paramètre :** cliquez sur × sur sa ligne. Si quelque chose l'utilise, PartCraft demande s'il faut d'abord écrire sa valeur actuelle dans ces expressions.
- **Supprimer une fonction** supprime les équations de ses nombres ; la barre d'état indique lesquelles.

:::note
Les paramètres sont enregistrés dans le fichier `.partcraft.json` (version de fichier 3). Une pièce sans paramètre est enregistrée exactement comme auparavant.
:::

## Expressions

| Écriture | Signification |
|---|---|
| `120`, `12.5`, `1e3` | un nombre (millimètres, ou degrés pour un angle) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | une longueur dans d'autres unités, convertie en millimètres |
| `30deg`, `0.5rad` | un angle, converti en degrés |
| `+ - * / %` et `^` | calcul ; `^` est une puissance, `-2^2` vaut −4 |
| `sin cos tan asin acos atan atan2` | trigonométrie en degrés |
| `sqrt pow exp ln log abs sign` | autres fonctions |
| `ceil floor int round(x, digits) min max` | arrondi et limites |
| `if(test, a, b)` avec `< <= > >= == !=` | un choix : `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Les noms sont sensibles à la casse : `Width` et `width` sont deux paramètres différents.

Voir aussi [Configurations et tables de conception](topic:design-tables) et [Scripts et ligne de commande](topic:scripts-and-cli).
