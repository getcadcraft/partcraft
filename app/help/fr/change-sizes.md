---
title: Modifier les dimensions sans ouvrir l'esquisse
summary: Pilotez une pièce depuis les nombres du panneau de droite : cotes d'esquisse, profondeurs, nombres et angles ; comment concevoir une pièce pour que les bons nombres la pilotent, et où les paramètres et les équations prennent le relais.
keywords: paramètres, cotes pilotantes, intention de conception, modifier une cote, équations, variables globales, tableau de configurations, configurations, redimensionner, modifier la dimension
from: c2ae1a32
---

Chaque dimension d'une pièce PartCraft est un nombre que vous pouvez modifier ensuite : les cotes de ses esquisses et les réglages de ses fonctions. Vous n'avez pas besoin d'ouvrir une esquisse pour modifier ses cotes.

## Modifier une cote d'esquisse depuis le panneau

1. Cliquez sur une fonction dans l'historique, par exemple « Extrude1 ».
2. Sous les réglages propres de l'extrusion, **Cotes d'esquisse (Sketch1)** liste chaque cote de son esquisse : « Distance », « Diamètre », « Angle (°) », etc.
3. Saisissez une nouvelle valeur dans un champ et appuyez sur {{key:Enter}} ou {{key:Tab}}.

L'esquisse se résout avec la nouvelle valeur, et toute la pièce se reconstruit. Sélectionner l'esquisse elle-même affiche la même liste sous **Cotes pilotantes**.

Un rayon ou un diamètre doit être supérieur à zéro, et un angle est compris entre 0 et 180 degrés ; la barre d'état le signale si ce n'est pas le cas.

:::tip
Quel champ correspond à quoi ? Les champs sont listés dans l'ordre de création des cotes. En cas de doute, ouvrez l'esquisse (double-cliquez dessus), double-cliquez sur la cote dans la zone de dessin et modifiez-la là.
:::

## Saisir le nombre principal directement

Sélectionnez une fonction dans l'historique (ou ajoutez-la simplement) et saisissez un nombre : il va dans le champ principal de la fonction, celui que vous modifiez le plus (la **Profondeur** d'une extrusion, l'**Angle** d'une révolution, le **Diamètre** d'un trou, le **Nombre** d'une répétition, le **Rayon** d'un congé, l'épaisseur de paroi d'une coque). Appuyez sur {{key:Enter}} pour le valider, ou sur {{key:Esc}} pour garder l'ancienne valeur. L'ajout d'une extrusion l'indique dans la barre d'état : « Extrude1 ajoutée. Modifiez ses nombres à droite, ou saisissez maintenant un nombre pour sa profondeur. »

## Modifier le nombre dans l'historique

Chaque ligne de fonction dans l'historique affiche son nombre principal à côté de son nom : « Extrude1 25 mm », « Hole1 Ø6.6 thru », « Fillet1 R2 », « LPattern1 4 × 20 mm ». Double-cliquez sur le nombre (ou sélectionnez la ligne et appuyez sur {{key:F2}}) : une zone s'ouvre sur place. Saisissez la nouvelle valeur et appuyez sur {{key:Enter}} ; {{key:Esc}} conserve l'ancienne. Cela fonctionne exactement comme le champ de la fonction à droite : mêmes limites, `=` pour saisir une équation comme `=width/2`, et une seule étape d'annulation.

Sur une extrusion, un trou ou une répétition, un double-clic n'importe où sur la ligne ouvre la zone. Sur un congé, un chanfrein, une coque, une dépouille ou un filetage, un double-clic sur le nom sert toujours à choisir arêtes ou faces : double-cliquez donc sur le nombre lui-même. Les esquisses n'ont pas de nombre sur leur ligne : un double-clic ouvre l'esquisse.

## Faire glisser dans la vue

Sélectionnez une extrusion dans l'historique (ou cliquez dessus dans la vue, puis sur sa ligne) : une flèche orange se dresse sur sa face d'extrémité, avec la profondeur dans un champ à côté. Faites glisser la flèche : la pièce suit pendant le glissement, et le relâchement fixe la nouvelle profondeur en une seule étape ({{key:Mod+Z}} la ramène à sa valeur précédente). Appuyez sur {{key:Esc}} pendant le glissement pour revenir au point de départ. La profondeur varie par pas d'un dixième de sa taille : 1 mm sur une extrusion de 25 mm, 0.1 mm sur une extrusion de 3 mm.

Une révolution reçoit une flèche courbe à l'extrémité de sa rotation : faites-la glisser autour de l'axe pour modifier l'angle, par degrés entiers de 1° à 360°.

Vous pouvez aussi cliquer dans le champ à côté de la flèche, saisir une valeur (ou `=` puis une équation) et appuyer sur {{key:Enter}}. Il n'y a pas de flèche sur une extrusion **Traversant** ou jusqu'à une face, ni sur une valeur pilotée par une équation : modifiez-les à droite.

## Les nombres qui pilotent une pièce

| Où | Ce que vous pouvez modifier |
|---|---|
| Esquisse | Chaque cote : longueurs, distances, rayons, diamètres, angles |
| Extrusion et découpe | Profondeur, condition de fin, direction, bossage ou découpe |
| Révolution et découpe par révolution | Angle, axe, bossage ou découpe |
| Trou | Diamètre, profondeur, traversant, diamètre et profondeur de lamage |
| Congé, chanfrein, coque | Rayon, distance, épaisseur de paroi et direction, et les arêtes ou faces choisies |
| Linéaire et circulaire | Nombre, espacement ou angle, direction ou axe |
| Pièce | Courbes (finesse avec laquelle les formes rondes sont facettées) |
| Dessin | Emplacement de la coupe, taille et échelle du détail, valeurs de tolérancement géométrique |

## Concevoir la pièce pour que les bons nombres la pilotent

Les nombres que vous donnez sont ceux que vous pouvez modifier. Quelques habitudes facilitent les modifications ultérieures :

- **Cotez ce qui compte pour l'usage.** Si un trou doit rester à 15 mm d'un bord, cotez-le depuis ce bord, et non depuis l'origine.
- **Définissez entièrement les esquisses.** Ainsi, une modification ne déplace que ce qu'il faut (voir [Définir entièrement une esquisse](topic:relations-dimensions)).
- **Utilisez les relations pour l'intention.** Égal sur deux trous signifie qu'un seul diamètre pilote les deux. Pour les formes symétriques, placez l'origine sur l'axe de symétrie, ou utilisez Milieu.
- **Esquissez sur des faces créées par des fonctions.** Une esquisse sur la face d'extrémité d'une extrusion se déplace lorsque la profondeur change.
- **Répétez au lieu de copier.** Un trou répété huit fois n'a qu'un seul diamètre à modifier.

## Au-delà des nombres isolés

- **Un nombre qui pilote plusieurs cotes :** utilisez des paramètres et des équations : [Piloter une pièce avec des paramètres](topic:parameters).
- **Plusieurs tailles d'une même pièce :** enregistrez chacune sous forme de [configuration](topic:design-tables) ; elles sont conservées dans le fichier de la pièce.
- **Calcul dans un champ de nombre :** saisissez `=40/2` ou `=width / 2`. Cela crée une équation ; voir [Équations dans les deux sens](topic:equations-two-way).
- **Unités en pouces :** la pièce affiche des millimètres. Dans un champ de nombre avec `=`, ou dans un paramètre, `2in` est converti en 50.8.

Voir [Ce qui n'est pas encore disponible](topic:not-built-yet).
