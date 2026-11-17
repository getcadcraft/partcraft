---
title: Pavé tactile, écran tactile et petits écrans
summary: Comment tourner, panoramiquer et zoomer avec un pavé tactile de Mac ou d'ordinateur portable, ce qui fonctionne sur un écran tactile et ce qui demande encore un clavier, et comment l'écran se réorganise sur un téléphone ou une fenêtre étroite.
keywords: pavé tactile, touchpad, magic mouse, mac, tactile, tablette, ipad, téléphone, pincement, deux doigts, clic droit, clic secondaire, gestes, petit écran, mobile
from: 0e764fd8
---

PartCraft est conçu pour une souris avec molette et bouton central, mais un pavé tactile fonctionne bien une fois que vous connaissez les gestes, et un écran tactile suffit pour regarder des pièces et faire des esquisses simples.

## Pavé tactile

:::mac
| Pour | Faites ceci |
|---|---|
| Tourner la pièce (3D) | Cliquez-glissez avec un doigt (ou glissez avec trois doigts, si vous avez activé le glissement à trois doigts) |
| Panoramique (3D) | Maintenez {{key:Shift}} (ou ⌘) et cliquez-glissez, ou cliquez-glissez avec deux doigts appuyés (un glissement en clic secondaire) |
| Tourner la pièce, en balayant | Balayez avec deux doigts ; avec {{key:Shift}}, le balayage fait un panoramique. Nécessite **Défilement** réglé sur « Déterminer automatiquement » (par défaut) ou « Pavé tactile » |
| Zoom (3D et esquisse) | Pincez. Le zoom se fait vers le pointeur. Avec **Défilement** réglé sur « Molette de souris », un défilement à deux doigts zoome aussi |
| Clic droit | Cliquez avec deux doigts, ou {{key:Ctrl}}+clic |
| Panoramique dans une esquisse | Balayez avec deux doigts (« Déterminer automatiquement » ou « Pavé tactile »), ou cliquez-glissez avec deux doigts appuyés. {{key:Shift}}+glisser ne fait pas de panoramique dans une esquisse (il trace une fenêtre de sélection) |
| Ajouter à une sélection dans une esquisse | {{key:Shift}}+clic ou ⌘+clic |

Activez le clic secondaire dans **Réglages du système, Trackpad, Pointeur et clic** si le clic à deux doigts ne fait rien.
:::

:::windows linux
| Pour | Faites ceci |
|---|---|
| Tourner la pièce (3D) | Appuyez sur le pavé tactile (ou touchez et maintenez), puis glissez |
| Panoramique (3D) | Maintenez {{key:Shift}} ou {{key:Ctrl}} et glissez, ou glissez avec la zone du bouton droit appuyée |
| Tourner la pièce, en balayant | Balayez avec deux doigts ; avec {{key:Shift}}, le balayage fait un panoramique. Nécessite **Défilement** réglé sur « Déterminer automatiquement » (par défaut) ou « Pavé tactile » |
| Zoom (3D et esquisse) | Pincez là où le pavé tactile le permet. Le zoom se fait vers le pointeur. Avec **Défilement** réglé sur « Molette de souris », un défilement à deux doigts zoome |
| Clic droit | Tapotez avec deux doigts, ou utilisez le coin inférieur droit du pavé tactile |
| Panoramique dans une esquisse | Balayez avec deux doigts (« Déterminer automatiquement » ou « Pavé tactile »), ou glissez avec la zone du bouton droit appuyée. {{key:Shift}}+glisser ne fait pas de panoramique dans une esquisse |
| Ajouter à une sélection dans une esquisse | {{key:Shift}}+clic ou {{key:Ctrl}}+clic |
:::

**Défilement** se trouve dans les [paramètres de PartCraft](topic:settings) : « Déterminer automatiquement » (par défaut) traite le défilement latéral ou fin comme un pavé tactile, « Pavé tactile » le fait toujours, « Molette de souris » ne le fait jamais. Un pincement zoome dans les trois cas.

Les touches fléchées font tourner la vue 3D, et {{key:Shift}} avec les flèches fait un panoramique, une fois que vous avez cliqué dans la vue : pratique sur un pavé tactile. {{key:Plus}} et {{key:Minus}} zooment.

## Écrans tactiles

PartCraft lit les entrées tactiles : les tablettes, les ordinateurs portables tactiles et les téléphones fonctionnent, avec des limites.

:::touch
**Touches tactiles**

Dès que vous touchez l'écran, une petite barre apparaît en bas à droite de la vue, avec les touches qui manquent à un doigt. Elle disparaît lorsque vous utilisez une souris.

- {{ui:Échap}} : la touche Échap. Elle annule ce que vous avez commencé ou revient en arrière, exactement comme la touche.
- {{ui:Ajouter}} (dans une esquisse, avec Sélectionner) : tant qu'il est actif, chaque tapotement ajoute un élément à la sélection ou le retire, comme {{key:Shift}}+clic. Tapotez-le à nouveau pour revenir à un élément à la fois.
- {{ui:Terminé}} (pendant le tracé d'une chaîne de lignes, d'une spline ou d'un polygone) : le termine, comme un clic droit.

Maintenir un doigt immobile pendant environ une demi-seconde a le même effet qu'un tapotement : avec un outil de dessin, cela termine ce que vous dessinez, et avec Sélectionner, cela ajoute à la sélection l'élément sous votre doigt ou le retire. Les points et les lignes sont plus faciles à atteindre au doigt : PartCraft cherche environ deux fois plus loin autour d'un tapotement qu'autour d'un clic.

**Dans la vue 3D**

- Un doigt : tourner la pièce.
- Deux doigts : pincer pour zoomer, déplacer ensemble pour faire un panoramique.
- Tapotement : choisir une face, une arête ou un plan. Il n'y a pas de surlignage au survol avant un tapotement.

**Dans une esquisse**

- Tapotez avec un outil de dessin pour placer chaque point : tapotez le début, puis la fin. L'accrochage se fait à l'endroit où vous relevez le doigt.
- Deux doigts pour pincer et faire un panoramique. Poser un second doigt annule un glissement commencé par le premier.
- Pour terminer une chaîne de lignes, tapotez {{ui:Terminé}}, maintenez le doigt immobile, ou tapotez à nouveau {{ui:Ligne}} (ou un autre outil) dans la barre d'outils.
- Avec Sélectionner, tapotez pour sélectionner ; faites glisser un point ou une ligne pour le déplacer ; faites glisser sur un espace vide pour une fenêtre. Un second tapotement remplace la sélection, sauf si {{ui:Ajouter}} est actif (ou si vous maintenez le doigt immobile sur le second élément).
- Pour modifier une cote, utilisez **Modifier** à côté dans le panneau de droite.

**La feuille de plan**

Tapotez pour placer et sélectionner les symboles, et faites glisser un symbole pour le déplacer. Pincez pour zoomer, déplacez deux doigts pour faire un panoramique, ou faites glisser un doigt sur une zone vide de la feuille. Un second doigt arrête un symbole que vous faisiez glisser, et celui-ci revient à sa place.

**Ce qui nécessite encore un clavier**

- Saisie des nombres : le clavier de l'écran s'affiche dans les champs numériques et les champs de cote.
- Raccourcis clavier des outils : utilisez la barre d'outils.
:::

## Petits écrans et téléphones

- À partir de 1280 pixels de large, la barre d'outils tient sur une seule ligne.
- Entre environ 760 et 1100 pixels, les panneaux latéraux se rétrécissent.
- En dessous d'environ 760 pixels (téléphone ou fenêtre étroite), l'écran s'empile : barre d'outils (balayez-la latéralement pour plus de boutons), vue 3D, barre d'état, puis panneau des propriétés et historique. Faites défiler la page pour atteindre les panneaux.
- Les menus ({{ui:Exporter}}, {{ui:Vues}}) s'ouvrent sur toute la largeur de l'écran.

:::note
Sur iPhone, il n'y a pas de mode plein écran dans le navigateur ; {{key:Ctrl+Shift+F}} et le bouton de mode d'écran ne basculent qu'entre le mode normal et le mode où les barres sont masquées.
:::

Un téléphone convient pour ouvrir une pièce, la tourner et vérifier ses caractéristiques. La vraie modélisation demande un écran plus grand et une souris ou un pavé tactile.

## Navigateurs

Les versions actuelles de Chrome, Edge, Firefox et Safari font fonctionner PartCraft sous Windows, macOS et Linux, ainsi que sur tablettes et téléphones, tant que WebGL et WebAssembly sont disponibles. Voir [Navigateurs et ordinateurs](common:browsers).
