---
title: Ajouter une géométrie d'esquisse en saisissant les coordonnées
summary: Utilisez Ajouter par coordonnées dans le panneau d'esquisse pour placer des lignes, des lignes d'axe, des rectangles, des cercles et des points à des positions exactes, uniquement au clavier.
keywords: coordonnées, saisie de texte, saisie au clavier, saisie numérique, position exacte, x y, coordonnées absolues, accessibilité, sans souris
from: 5e6c1656
---

Quand vous connaissez les valeurs, les saisir est plus rapide que cliquer et coter. **Ajouter par coordonnées** se trouve dans le panneau de droite dès qu'une esquisse est ouverte. Il vous permet aussi de construire une esquisse sans aucun pointeur.

Les coordonnées sont exprimées en millimètres, dans les axes propres à l'esquisse : x vers la droite et y vers le haut lorsque vous regardez l'esquisse, avec (0, 0) à l'origine (le cercle rouge avec une croix).

## Ajouter une forme

1. Ouvrez une esquisse (voir [Dessiner votre première esquisse](topic:sketch-basics)).
2. Dans le panneau de droite, faites défiler jusqu'à **Ajouter par coordonnées**.
3. Choisissez la forme dans **Ajouter** : Ligne, Ligne d'axe, Rectangle, Cercle ou Point.
4. Remplissez les champs :

| Forme | Champs |
|---|---|
| Ligne | **De x, y** et **À x, y** |
| Ligne d'axe | **De x, y** et **À x, y** |
| Rectangle | **Coin x, y** et **Coin opposé x, y** |
| Cercle | **Centre x, y** et **Rayon** |
| Point | **En x, y** |

5. Choisissez {{ui:Ajouter}}, ou appuyez sur {{key:Enter}} dans n'importe quel champ.

La forme apparaît et la barre d'état indique par exemple « Rectangle ajouté. ». Les champs se vident, prêts pour la suivante. Chaque ajout correspond à une étape d'annulation.

Saisissez une paire sous forme de deux nombres séparés par une virgule ou un espace : `0, 0`, `25 -10` ou `12.5,40`. Les nombres négatifs et les décimales sont acceptés. Un rayon doit être supérieur à zéro. Si une valeur n'est pas un nombre, la barre d'état affiche : « Saisissez les coordonnées sous la forme « x, y » et un rayon supérieur à zéro. »

## Exemple : contour de plaque percée, saisi au clavier

1. Ouvrez une esquisse sur le **plan de face**.
2. **Ajouter** : Rectangle. **Coin x, y** : `-50, -30`. **Coin opposé x, y** : `50, 30`. {{key:Enter}}.
3. **Ajouter** : Cercle. **Centre x, y** : `-30, 0`. **Rayon** : `5`. {{key:Enter}}.
4. **Centre x, y** : `30, 0`. **Rayon** : `5`. {{key:Enter}}.
5. Choisissez {{ui:Quitter l'esquisse}}, puis {{ui:Extrusion}} : une plaque de 100 × 60 avec deux trous de 10 mm.

## La géométrie saisie est placée, pas verrouillée

Les coordonnées saisies placent la géométrie au bon endroit, mais ce ne sont **pas des relations**. Les formes restent bleues (sous-définies) et peuvent bouger si vous les faites glisser ou si vous modifiez une autre cote :

- un rectangle saisi reçoit ses propres relations de coin, d'horizontalité et de verticalité, comme un rectangle dessiné, mais rien ne le relie à l'origine ;
- une ligne saisie n'a pas de relation horizontale ou verticale, même si vous avez saisi une ligne horizontale ;
- le centre d'un cercle saisi est libre.

Pour rendre l'esquisse entièrement définie, ajoutez ensuite des cotes et des relations (voir [Définir entièrement une esquisse](topic:relations-dimensions)). Par exemple, sélectionnez un coin de rectangle et l'origine, puis choisissez {{ui:• Coïncidente}}, ou cotez les centres des cercles par rapport à l'origine.

:::note
Sans pointeur, vous pouvez aller jusqu'ici : déplacez-vous sur une ligne de plan dans l'historique avec {{key:Tab}} et les flèches, appuyez sur {{key:Enter}} pour la sélectionner, appuyez sur {{key:S}} pour esquisser, ajoutez les formes ici, puis atteignez **Modifier** à côté de chaque cote et {{ui:Quitter l'esquisse}} avec {{key:Tab}}. Sélectionner de la géométrie, donc ajouter des relations ou de nouvelles cotes, nécessite encore un clic ou un toucher dans cette version.
:::

## Limites

- Les arcs ne peuvent pas encore être saisis. Dessinez-les avec l'outil Arc, ou saisissez un cercle et utilisez des relations.
- Il n'existe pas de coordonnées relatives (depuis le dernier point) ni de coordonnées polaires (longueur et angle) dans ce champ.
- La géométrie saisie ne s'accroche pas aux points existants. Saisissez les mêmes coordonnées qu'un point existant, puis ajoutez une relation {{ui:• Coïncidente}} entre eux s'ils doivent rester joints.
