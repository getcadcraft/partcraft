---
title: Le cube de vue
summary: Cliquez sur une face, une arête ou un coin du cube, dans le coin de la vue, pour regarder depuis là ; faites-le glisser pour orbiter, tournez l'anneau de la boussole, passez d'une vue de face à la suivante et revenez à la vue d'accueil.
keywords: cube de vue, viewcube, cube, boussole, nord, vue d'accueil, vues standard, dessus, face, droite, iso, coin, arête, orbite, faire pivoter la vue, icône des axes, indicateur de coin, navigation
from: afc33dc7
---

Le cube de vue se trouve en haut à droite de la vue 3D (pas pendant l'esquisse ni sur la feuille de dessin). Il tourne avec la vue, si bien qu'il indique toujours dans quel sens vous regardez : {{ui:Dessus}} est le côté +Y de la pièce (le plan Dessus), {{ui:Face}} le côté +Z (le plan Face vous fait face lorsque vous le regardez), {{ui:Droite}} le côté +X. Il reste transparent tant que vous ne le pointez pas.

## Regarder depuis un côté, une arête ou un coin

1. Pointez le cube. La partie de la pièce sous le pointeur s'illumine : le milieu d'une face, une arête (elle s'illumine sur les deux faces qui la partagent) ou un coin (sur les trois faces).
2. Cliquez. La vue tourne pour regarder depuis là, en gardant le même centre et le même zoom.

Il y a 26 endroits où cliquer : 6 faces ({{ui:Dessus}}, {{ui:Dessous}}, {{ui:Face}}, {{ui:Retour}}, {{ui:Gauche}}, {{ui:Droite}}), 12 arêtes et 8 coins. Un coin donne la vue classique aux trois quarts ; une arête se situe à mi-chemin entre deux faces.

Cliquer sur {{ui:Face}}, {{ui:Dessus}} ou {{ui:Droite}} donne les mêmes vues que {{ui:Vues}} dans la barre d'outils, sans le zoom d'ajustement.

## Faire pivoter la vue en faisant glisser le cube

Faites glisser le cube pour tourner la vue, comme pour l'orbite dans la vue elle-même. Un glissement n'est jamais pris pour un clic, si bien que vous pouvez saisir le cube n'importe où.

## L'anneau de la boussole

L'anneau sous le cube porte N, E, S et O.

- **Faites glisser l'anneau** pour tourner le modèle autour de l'axe vertical, comme sur un plateau tournant. L'anneau suit le pointeur.
- **Cliquez sur une lettre** pour regarder depuis ce côté, en gardant l'inclinaison de votre regard vers le bas. Dans une vue prise verticalement d'en haut, la lettre sur laquelle vous cliquez passe en bas de l'écran.

## Vues de face : flèches

Lorsque vous regardez une face bien en face, de petites flèches apparaissent autour du cube :

- Les quatre **triangles** amènent la face de ce côté à l'avant : le triangle au-dessus du cube montre la face qui était en haut, et ainsi de suite.
- Les deux **flèches courbes** en haut à droite font pivoter l'image d'un quart de tour dans le sens horaire ou anti-horaire, sans changer la face que vous regardez. Servez-vous-en pour tourner un plan afin qu'un long mur traverse l'écran.

## Accueil

Le bouton maison en haut à gauche du cube revient à la vue aux trois quarts et cadre la pièce à l'écran. {{key:Home}} fait de même lorsque le cube a le focus clavier.

## Au clavier

{{key:Tab}} pour aller au cube, puis :

| Touche | Effet |
|---|---|
| {{key:left}} / {{key:right}} | choisit une face, une arête ou un coin autour du cube, par pas d'un huitième de tour (les lecteurs d'écran annoncent lequel) |
| {{key:up}} / {{key:down}} | choisit un élément plus haut ou plus bas, jusqu'à {{ui:Dessus}} ou jusqu'à {{ui:Dessous}} |
| {{key:Enter}} ou {{key:Space}} | regarde depuis l'élément choisi |
| {{key:Shift+left}} / {{key:Shift+right}} | tourne la vue d'un quart de tour autour de l'axe vertical |
| {{key:Home}} | la vue d'accueil |
| {{key:Esc}} | quitte le cube |

Les touches pressées sur le cube restent avec le cube : elles ne lancent pas d'outils de PartCraft.

## Icône des axes ou rien

Ouvrez {{ui:Paramètres}} ({{key:Mod+,}}), l'onglet {{ui:PartCraft}}, et réglez **Indicateur de coin** sur {{ui:Cube de vue}} (le réglage de départ), {{ui:Icône des axes}} (un petit repère X, Y, Z en bas à gauche : X en rouge, Y en vert, Z en bleu) ou {{ui:Aucun}}. Ce navigateur garde le choix. Voir [Paramètres de PartCraft](topic:settings#corner-indicator).

:::note
Le cube montre la pièce telle que PartCraft la construit : Y vers le haut, donc le {{ui:Dessus}} du cube est le plan Dessus. Les lettres de la boussole ne servent qu'à tourner ; une pièce n'a pas de nord.
:::
