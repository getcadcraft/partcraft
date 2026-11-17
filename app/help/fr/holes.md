---
title: Percer des trous et des lamages aux points d'esquisse
summary: Placez des points dans une esquisse sur une face, créez à chaque point des trous simples, à lamage, fraisés ou taraudés (métrique ISO), réglez le diamètre et la profondeur, et corrigez les trous percés dans le mauvais sens.
keywords: trou, assistant de trou, percer, filetage modélisé, impression 3D, lamage, fraisage, trou fraisé, trou taraudé, filetage, foret de taraudage, filetage métrique, M6, traversant, trou borgne, trou de boulon, points, centres de trous
from: 8e1eef83
---

{{ui:Trou}} perce un trou à chaque point libre d'une esquisse. Un point libre est un point créé avec l'outil Point, et non l'extrémité d'une ligne ou le centre d'un cercle.

## Percer des trous dans une face

1. Cliquez sur la face plane où percer, puis choisissez {{ui:Esquisse sur cette face}}.
2. Appuyez sur {{key:P}} et cliquez à l'endroit de chaque trou. Cotez les points à partir des arêtes ou de l'origine si leur position compte (voir [Contraindre entièrement une esquisse](topic:relations-dimensions)).
3. Choisissez {{ui:Quitter}}.
4. Choisissez {{ui:Trou}}.

Les trous traversent la pièce, 6 mm de diamètre. Le panneau de droite affiche **Trous** : combien ont été créés, « un par point d'esquisse ».

**Un seul trou, rapidement :** cliquez sur la face plane où doit aller le trou, puis choisissez {{ui:Trou ici}} dans le panneau de droite. PartCraft ajoute une esquisse sur la face avec un point à l'endroit où vous avez cliqué, et un trou traversant la pièce, en une seule étape. Saisissez immédiatement un nombre et appuyez sur {{key:Enter}} pour son diamètre. Pour le placer exactement, ouvrez la nouvelle esquisse et cotez le point.

**Esquisse utilisée :** l'esquisse que vous venez de fermer ou celle sélectionnée ; sinon la plus récente esquisse inutilisée qui a des points libres. S'il n'y en a aucune : « Créez d'abord une esquisse avec des points là où les trous doivent aller (Esquisse sur une face, puis Point). »

## Réglages

| Réglage | Choix | Par défaut |
|---|---|---|
| **Type** | Simple, Lamage, Fraisage, Taraudé (métrique ISO) | Simple |
| **Diamètre (mm)** | Le diamètre du trou | 6 |
| **Traversant** | Coché : à travers toute la pièce. Décochez pour un trou borgne | Coché |
| **Profondeur (mm)** | Affiché lorsque Traversant est décoché | 10 |
| **Diamètre de lamage ⌀** | Affiché pour Lamage : le diamètre de l'évidement le plus large | 11 |
| **Profondeur de lamage** | Affiché pour Lamage | 6 |
| **Inverser le sens** | Perce vers l'autre côté du plan d'esquisse | Désactivé |

Les trous percent la matière, perpendiculairement au plan d'esquisse. La profondeur d'un trou borgne se mesure depuis le plan d'esquisse ; son fond est plat.

## Un trou de boulon à lamage

1. Créez les trous comme ci-dessus.
2. Réglez **Type** sur **Lamage**.
3. Réglez **Diamètre (mm)** sur `6.6` (jeu pour un boulon M6), **Diamètre de lamage ⌀** sur `11` et **Profondeur de lamage** sur `6.5`.

Le lamage doit être plus large que le trou (« Le lamage doit être plus large que le trou. ») et, pour un trou borgne, moins profond que lui (« Le lamage doit être moins profond que le trou. »).

## Un cercle de boulons

Pour des trous répartis régulièrement autour d'un centre, créez **un seul** trou et répétez-le : sélectionnez la fonction Trou, puis choisissez {{ui:Circulaire}} (voir [Fonctions de répétition et de symétrie](topic:patterns-mirror)). La répétition suit lorsque vous changez la taille du trou.

## Lorsque les trous vont dans le mauvais sens

- « Il n'y a rien à percer de ce côté de l'esquisse. Essayez d'inverser le sens. » L'esquisse se trouve de l'autre côté de la matière. Cochez **Inverser le sens**.
- « Placez des points d'esquisse là où doivent aller les trous (outil Point), puis créez le trou. » L'esquisse n'a pas de points libres. Les extrémités de lignes et les centres de cercles ne comptent pas.
- « Il n'y a encore rien à percer. » Un trou a besoin d'un solide. Créez d'abord une excroissance.

## Trous dans les assemblages

Chaque trou a un axe. Dans un assemblage, **Centrer sur** peut placer une liaison sur l'axe d'un trou, indiqué comme « Trou1, trou 2 », pour aligner une goupille ou un boulon. Voir [Construire un assemblage](topic:build-assembly).

## Trous fraisés

Réglez **Type** sur **Fraisage**, puis **Diamètre de fraisage ⌀** (à la surface) et **Angle de fraisage** : 90° (vis à tête fraisée ISO métriques) ou 82° (vis en pouces). Prenez le diamètre de fraisage dans les données du fabricant de vis (un peu plus que le diamètre de la tête de vis). La face du cône est nommée « fraisage » dans les panneaux.

## Trous taraudés

Réglez **Type** sur **Taraudé (métrique ISO)** et choisissez le **Filetage**, de M2 à M24 à pas gros. Le trou est percé au diamètre de foret de taraudage du tableau ci-dessous (diamètre nominal moins le pas, selon la série de forets que l'ISO 2306 indique pour un filetage 6H) ; la case **Diamètre (mm)** n'est pas utilisée. Pour un trou borgne, **Profondeur du filetage (mm)** règle la profondeur du filetage.

| Filetage | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pas | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Foret de taraudage ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Le filetage est d'abord **cosmétique** : le modèle contient le trou percé, la vue dessine le diamètre extérieur du filetage en cercles tiretés, et la feuille de dessin porte l'appel comme une remarque, par exemple « 4× M8×1.25 - 6H, filetage traversant ». Le STEP n'exporte que le trou percé.

Cochez **Modélisé** pour découper le vrai filetage hélicoïdal dans le trou, pour l'impression 3D. **Jeu (mm)** l'agrandit d'autant sur tout le pourtour, de sorte qu'un boulon imprimé s'ajuste : 0.1 à 0.2 mm convient à la plupart des imprimantes. L'appel se termine alors par « (modélisé) ». Voir [Filetages sur arbres et alésages, dessinés ou modélisés](topic:threads), qui place aussi des filetages sur les arbres.

:::note
Les trous contre-percés, les filetages en pouces et les filetages de tuyauterie ne sont pas encore disponibles.
:::
