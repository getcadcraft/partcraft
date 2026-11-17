---
title: Menus, touches et souris
summary: Choisissez un style de menus qui correspond à votre façon de travailler, attribuez votre propre touche à n'importe quelle commande, déplacez les commandes entre les onglets du ruban, et réglez l'action de la molette et de chaque bouton de souris dans la vue 3D.
keywords: style de menu, menus, ruban, barre d'outils, arbre des fonctions, raccourcis clavier, raccourcis, touches, personnaliser, réattribuer, souris, molette, inverser, sens du zoom, bouton du milieu, orbite, panoramique, exporter, importer, changer, familier
from: 8445b06c
---

Les commandes de PartCraft sont les mêmes quelle que soit la façon dont vous y accédez. Un **style de menus** détermine seulement où elles se placent à l'écran, comment elles s'y appellent et quelles touches les exécutent. Choisissez-en un dans {{ui:Paramètres}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menus, touches et souris}} ; le changement est immédiat, et ce navigateur s'en souvient.

## Les deux styles

| Style | Ce que vous obtenez |
|---|---|
| {{ui:PartCraft}} | La barre d'outils propre à PartCraft : le sélecteur d'espace de travail, Fichier, Esquisse, Fonctions, Dessin, Assemblage, Modifier et Affichage. Touches : {{key:S}} esquisse, {{key:F}} ajuster, {{key:M}} mesurer, {{key:X}} vue en coupe. Le point de départ. |
| {{ui:Arbre des fonctions}} | Un ruban disposé comme celui des logiciels de CAO mécanique à fonctions : un menu {{ui:Fichier}} (avec tous les exports), des boutons rapides, et les onglets {{ui:Fonctions}}, {{ui:Esquisse}}, {{ui:Surfaces}}, {{ui:Évaluer}}, {{ui:Dessin}}, {{ui:Assemblage}}, {{ui:Études}} (les espaces de travail et leurs outils), {{ui:Illustrer}} (les outils manuels de l'espace Illustrer ; ses outils basculent d'abord vers Illustrer) et {{ui:Affichage}}. {{ui:Fonctions}} commence par {{ui:Esquisse}}, puisqu'une pièce part d'une esquisse. Touches supplémentaires : {{key:E}} extrusion, {{key:H}} trou, et {{key:V}} suivi d'une lettre pour une vue : {{key:V}} {{key:F}} face avant, {{key:V}} {{key:B}} arrière, {{key:V}} {{key:T}} dessus, {{key:V}} {{key:O}} dessous, {{key:V}} {{key:R}} droite, {{key:V}} {{key:L}} gauche, {{key:V}} {{key:I}} isométrique, {{key:V}} {{key:N}} normale à. Dans la vue 3D, le bouton du milieu tourne la vue, {{key:Shift}} avec le bouton du milieu ou le bouton droit fait un panoramique, et le bouton gauche ne fait que choisir. |

Chaque style conserve {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} et {{key:Mod+A}}.

Un outil d'un autre espace de travail y bascule d'abord ; un outil Design choisi dans un autre espace de travail revient d'abord à Design. Les outils d'esquisse attendent une esquisse, les outils de dessin la feuille de dessin, les outils d'assemblage un assemblage : la barre d'état indique ce qu'il faut faire d'abord.

:::tip
Dans une esquisse, sur la feuille de dessin, dans un assemblage et dans les autres espaces de travail, les lettres gardent leur propre sens ({{key:L}} ligne, {{key:R}} rectangle, {{key:J}} liaison …) dans tous les styles. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} et les flèches gardent toujours le leur. Une touche de la disposition propre à PartCraft que votre style a attribuée à une autre commande ne fait rien, et la barre d'état indique où est passée sa commande.
:::

## Personnaliser

1. Choisissez le style le plus proche de ce que vous voulez, puis cliquez sur {{ui:Personnaliser…}}.
2. Dans {{ui:Touches et menus}}, trouvez une commande (la zone de recherche aide). Cliquez sur {{ui:Ajouter une touche}}, puis appuyez sur la touche, ou sur deux touches à la suite. Cliquez sur une touche pour la retirer.
3. Avec le ruban, {{ui:Emplacement}} déplace la commande vers un autre onglet et panneau, vers le menu {{ui:Fichier}}, ou vers {{ui:Touches seulement}}.
4. Dans {{ui:Souris}}, réglez la molette, les boutons qui font un panoramique d'une esquisse, et ce que fait chaque bouton dans la vue 3D.
5. Donnez-lui un nom et cliquez sur {{ui:Enregistrer}}.

Enregistrer un style intégré crée votre propre copie (« Mon arbre des fonctions ») ; le style intégré ne change jamais. Une touche attribuée à deux commandes, ou une touche qui s'exécuterait avant qu'une combinaison de deux lettres puisse être tapée, apparaît en rouge et doit être corrigée avant l'enregistrement.

## Souris

- **Molette** : {{ui:Faire défiler vers le haut zoome en avant}} (le départ) ou {{ui:Faire défiler vers le haut zoome en arrière}}, et la vitesse. Le pincement sur un pavé tactile zoome toujours dans le sens du mouvement de vos doigts.
- **Panoramique de l'esquisse avec** : le bouton du milieu, le bouton droit, ou les deux. Un clic droit dans une esquisse termine toujours l'étape de l'outil.
- **Glissement dans la vue 3D** : {{ui:Propre à chaque vue}} conserve le réglage de PartCraft ({{ui:Paramètres}} › {{ui:PartCraft}} : le bouton gauche tourne la vue, ou le bouton du milieu la tourne). Ou réglez chaque bouton sur tourner, panoramique, zoom ou rien ; {{key:Shift}} avec le bouton de rotation fait un panoramique. Un clic sans glissement permet toujours de choisir.

## Emporter vos réglages

{{ui:Exporter}} enregistre le style utilisé dans un petit fichier `.ccinput.json` ; {{ui:Importer…}} en ajoute un, provenant d'un autre ordinateur ou d'un collègue. Un fichier importé ne peut pointer que vers les commandes propres à PartCraft : tout le reste est omis et compté dans la barre d'état. {{ui:Supprimer ce style}} supprime un style que vous avez créé.

:::note
Ces réglages restent dans ce navigateur. {{ui:Utiliser ce style dans toutes les applications}} sous les cartes de style fait ouvrir chaque application dans le style correspondant (sa propre barre d'outils, ou un ruban), avec les modifications que vous avez faites dans chaque application. Choisir un autre style dans une application ne change que cette application.
:::

Voir aussi : [Touches et souris](topic:keyboard) · [Paramètres de PartCraft](topic:settings) · [Venir d'un autre modeleur paramétrique](topic:coming-from)
