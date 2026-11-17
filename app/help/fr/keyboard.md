---
title: Touches et souris
summary: Chaque raccourci clavier et chaque action de souris dans PartCraft, regroupés selon l'endroit où ils fonctionnent : partout, copier et coller, sur la pièce, dans la vue 3D, dans une esquisse, dans l'historique et dans un assemblage.
keywords: clavier, raccourcis, touches, souris, tourner, rotation, panoramique, zoom, molette, clic droit, annuler, rétablir, enregistrer, ouvrir, échap, supprimer, Alt+flèche, copier, coller, couper, dupliquer, tout sélectionner, bouton du milieu
from: 3a59c3a3
---

Les touches sont sans effet lorsque vous tapez dans une zone de saisie d'un panneau, sauf {{key:Mod+S}} et {{key:Mod+O}}, qui fonctionnent toujours. Les touches de lettres fonctionnent sans modificateur.

Remarques générales sur les touches dans le navigateur, et sur les claviers sans touches de fonction : [Touches, souris et pavés tactiles](common:keys).

## Partout

| Touche | Action |
|---|---|
| {{key:Mod+S}} | Enregistrer la pièce (dans un assemblage : l'assemblage). Ferme d'abord une esquisse ouverte |
| {{key:Mod+O}} | Ouvrir un fichier de pièce ou d'assemblage (demande d'abord s'il reste des modifications non enregistrées) |
| {{key:Mod+Z}} | Annuler |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Rétablir |
| {{key:F1}} | Ouvrir ou fermer cette aide (aussi {{ui:Aide}} dans la barre d'application). {{key:Esc}} la ferme aussi. Sur beaucoup d'ordinateurs portables et de claviers Mac, maintenez Fn |
| {{key:Ctrl+Shift+F}} | Mode d'affichage : normal, plein écran, plein écran avec les barres masquées. Ctrl aussi sur Mac, et non ⌘ |
| {{key:Esc}} | Quitter le plein écran (lorsqu'il est actif) |
| {{key:Mod+,}} | Paramètres, y compris l'onglet PartCraft (voir [Paramètres de PartCraft](topic:settings)) |

Dans la zone numérique d'un panneau, {{key:Mod+Z}} est l'annulation de texte du navigateur. Dans la zone numérique d'une cote d'esquisse, il annule dans PartCraft.

## Copier, coller et dupliquer

Elles agissent sur ce que vous êtes en train de modifier : la géométrie sélectionnée dans une esquisse ouverte, la fonction sélectionnée dans l'historique, ou la pièce sélectionnée dans un assemblage. Détails dans [Copier, coller et dupliquer](topic:copy-paste).

| Touche | Action |
|---|---|
| {{key:Mod+C}} | Copier la sélection |
| {{key:Mod+X}} | Couper : copier, puis supprimer |
| {{key:Mod+V}} | Coller. Dans une esquisse, la copie suit le pointeur : cliquez à l'endroit voulu |
| {{key:Mod+Shift+V}} | Coller à la même position : mêmes coordonnées (dans un assemblage, au même emplacement) |
| {{key:Mod+D}} | Dupliquer : copier et coller en une seule étape, sans toucher au presse-papiers |
| {{key:Mod+A}} | Tout sélectionner (dans une esquisse) |
| {{key:Esc}} | Désélectionner tout (et annuler un collage qui suit le pointeur) |

Dans une zone numérique, ces touches copient et collent le texte comme d'habitude. Le texte sélectionné dans un panneau est copié par le navigateur.

## Sur la pièce (aucune esquisse ouverte)

| Touche | Action |
|---|---|
| {{key:S}} | Esquisse sur le plan ou la face plane sélectionné ; si rien n'est choisi, choisissez l'emplacement en cliquant |
| {{key:F}} | Ajuster la pièce à la vue |
| {{key:M}} | Mesurer, dans tous les espaces de travail et dans un assemblage ; {{key:Esc}} efface les choix, {{key:Esc}} à nouveau la ferme (voir [Mesurer distances, angles et masse](topic:measure)) |
| {{key:X}} | Vue en coupe activée ou désactivée, dans tous les espaces de travail et dans un assemblage ; {{key:Esc}} la ferme (voir [Regarder à l'intérieur avec une vue en coupe](topic:section-view)) |
| {{key:Delete}} | Supprimer la fonction sélectionnée (demande si d'autres l'utilisent) |
| {{key:0}} … {{key:9}}, {{key:.}} | Une fonction sélectionnée : tapez sa valeur principale (la profondeur d'une extrusion, le diamètre d'un trou, le nombre d'une répétition, le rayon d'un congé …), puis {{key:Enter}}. {{key:Esc}} conserve l'ancienne |
| {{key:Backspace}} | Supprimer la fonction sélectionnée, lorsqu'une fonction est sélectionnée |
| {{key:Esc}} | Arrêter le choix d'un plan d'esquisse, ou effacer la sélection (y compris les arêtes ou faces choisies avec {{key:Shift}}) |

## Dans la vue 3D

Cliquez d'abord dans la vue pour qu'elle reçoive le clavier.

| Touche | Action |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Tourner la vue de 15 degrés |
| {{key:Shift+Left}} et les autres flèches | Panoramique |
| {{key:Plus}} ou {{key:=}} | Zoom avant |
| {{key:Minus}} | Zoom arrière |

| Souris | Action |
|---|---|
| Glisser avec le bouton gauche | Tourner la vue |
| Glisser avec le bouton droit ou du milieu | Panoramique |
| {{key:Shift}}, {{key:Ctrl}} ou ⌘ maintenu en glissant avec le bouton gauche | Panoramique |
| Tourner la molette | Zoom au pointeur (en vous éloignant : zoom avant) |
| Glissement à deux doigts sur un pavé tactile | Tourner la vue ; avec {{key:Shift}}, panoramique. Le pincement zoome. Réglé par **Défilement** dans [Paramètres de PartCraft](topic:settings) |

Avec **Rotation de la vue : bouton du milieu** dans [Paramètres de PartCraft](topic:settings), le bouton du milieu tourne la vue, {{key:Shift}} avec le bouton du milieu, ou le bouton droit, fait un panoramique, et le bouton gauche ne fait que choisir.
| Clic | Choisir une face (elle se met entièrement en surbrillance), une arête ou un plan |
| {{key:Shift}}+clic sur une arête ou une face | Réunir plusieurs arêtes ou faces |
| Clic dans le vide | Effacer le choix |

## Pendant la sélection d'arêtes ou de faces pour un congé, un chanfrein ou une coque

| Touche ou souris | Action |
|---|---|
| Cliquer sur une arête ou une face | L'ajouter, ou la retirer si elle y est déjà |
| {{key:Esc}} ou {{key:Enter}} | Terminer la sélection (comme {{ui:Terminé}}) |
| {{key:F}} | Ajuster |
| Flèches, la vue ayant le focus | Tourner ; avec {{key:Shift}}, panoramique |

## Sur la feuille de dessin

| Touche | Action |
|---|---|
| {{key:F}} | Ajuster la feuille |
| {{key:Plus}} / {{key:Minus}} | Zoom (feuille active) |
| {{key:Shift+Left}} et les autres flèches | Panoramique (feuille active) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Déplacer d'1 mm le symbole GD&T sélectionné |
| {{key:Delete}} ou {{key:Backspace}} | Supprimer le symbole sélectionné |
| {{key:Esc}} | Arrêter la pose d'un symbole ; sinon désélectionner ; sinon revenir au modèle |

| Souris | Action |
|---|---|
| Clic sur une vue, avec Référence, Cadre, Finition ou Détail choisi | La placer à cet endroit (elle s'accroche à la ligne la plus proche) |
| Cliquer sur un symbole | Le sélectionner |
| Glisser un symbole | Le déplacer (la ligne de repère reste sur son point) |
| Tourner la molette | Zoom au pointeur |
| Glisser avec le bouton droit ou du milieu | Panoramique |

## Dans une esquisse

| Touche | Action |
|---|---|
| {{key:L}} | Ligne |
| {{key:R}} | Rectangle |
| {{key:C}} | Cercle |
| {{key:A}} | Arc (centre, début, fin) |
| {{key:P}} | Point |
| {{key:N}} | Ligne d'axe |
| {{key:F}} | Raccord d'un angle |
| {{key:D}} | Cote |
| {{key:B}} | Spline (par points de passage) |
| {{key:T}} | Ajuster |
| {{key:E}} | Prolonger |
| {{key:O}} | Décaler ({{key:B}} pendant le décalage : les deux côtés) |
| {{key:M}} | Symétrie |
| {{key:S}} | Sélectionner |
| {{key:Q}} | Passer les courbes sélectionnées en construction, et inversement |
| {{key:Enter}} | Terminer une chaîne de lignes ou une spline |
| {{key:Delete}} ou {{key:Backspace}} | Supprimer la sélection |
| {{key:Mod+A}} | Tout sélectionner dans l'esquisse |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Copier, couper, coller la géométrie (le collage suit le pointeur) |
| {{key:Mod+Shift+V}} | Coller aux mêmes coordonnées |
| {{key:Mod+D}} | Dupliquer la sélection et la placer d'un clic |
| {{key:Esc}} | Reculer d'une étape : annuler la zone numérique ou un collage, terminer la chaîne de lignes, revenir à Sélectionner, effacer la sélection, puis fermer l'esquisse |

| Souris | Action |
|---|---|
| Clic | Placer des points avec un outil de dessin ; sélectionner avec Sélectionner |
| {{key:Shift}}+clic | Ajouter à la sélection ou la retirer ({{key:Ctrl}}+clic sous Windows et Linux, ⌘+clic sur Mac, fonctionnent de même) |
| Glisser sur un espace vide (Sélectionner) | Fenêtre : sélectionne tout ce qui se trouve entièrement à l'intérieur |
| Glisser un point, une arête de cercle ou une ligne (Sélectionner) | Le déplacer ; les relations sont conservées |
| Glisser le nombre d'une cote (Sélectionner) | Déplacer l'étiquette |
| Double-clic sur une cote | Modifier sa valeur |
| Double-clic ou clic droit pendant le tracé de lignes | Terminer la chaîne |
| Glisser avec le bouton droit ou du milieu | Panoramique |
| Tourner la molette | Zoom au pointeur |

### Dans la zone numérique

| Touche | Action |
|---|---|
| {{key:Enter}} | Appliquer la valeur |
| {{key:Esc}} | Fermer sans rien changer |

Cliquer ailleurs applique aussi la valeur.

## Dans la liste de l'historique

| Touche | Action |
|---|---|
| {{key:Tab}} | Atteindre la liste |
| {{key:Up}} / {{key:Down}} | Passer d'une ligne à l'autre |
| {{key:Enter}} ou {{key:Space}} | Sélectionner la ligne |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Monter ou descendre la fonction sélectionnée, dans la mesure où l'historique le permet |
| {{key:F2}} | Modifier la valeur principale de la fonction dans sa ligne ; {{key:Enter}} la valide, {{key:Esc}} conserve l'ancienne |

| Souris | Action |
|---|---|
| Clic | Sélectionner un plan ou une fonction |
| Double-clic sur une esquisse | L'ouvrir |
| Double-clic sur le nombre d'une fonction | Le modifier dans la ligne |

## Dans un assemblage

| Touche | Action |
|---|---|
| {{key:J}} | Démarrer une liaison : cliquez ensuite sur une face plane de chacune des deux pièces |
| {{key:F}} | Ajuster |
| {{key:Esc}} | Annuler la liaison commencée, ou effacer la sélection |
| {{key:Delete}} | Retirer la pièce ou la liaison sélectionnée |
| {{key:Backspace}} | Retirer la pièce ou la liaison sélectionnée |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Annuler et rétablir dans la liste propre à l'assemblage |
| {{key:Mod+D}} | Dupliquer la pièce sélectionnée (même pièce, à côté des autres) |
| {{key:Mod+C}}, puis {{key:Mod+V}} ou {{key:Mod+Shift+V}} | Copier une pièce, la coller à côté des autres ou au même emplacement |

Souris dans la vue : comme dans la vue 3D ci-dessus. Cliquez sur une pièce pour la sélectionner. Double-cliquez sur une pièce dans la liste pour la modifier.

## Dans l'espace de travail Script

| Touche | Action |
|---|---|
| {{key:F5}} | Exécuter le script (dans l'éditeur, le panneau ou la vue) |
| {{key:Mod+Enter}} | Exécuter les lignes sélectionnées, ou la ligne où se trouve le curseur |
| {{key:Tab}} / {{key:Shift+Tab}} | Indenter / désindenter les lignes sélectionnées. Pour quitter l'éditeur au clavier, appuyez sur {{key:Esc}}, puis sur {{key:Tab}} |
| {{key:Mod+/}} | Mettre en commentaire les lignes sélectionnées, ou les rétablir |
| {{key:Mod+F}} / {{key:Mod+H}} | Rechercher / rechercher et remplacer dans le script ; {{key:Enter}} ou {{key:F3}} pour la correspondance suivante, {{key:Shift+Enter}} ou {{key:Shift+F3}} pour la précédente, {{key:Esc}} ferme |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Replier / déplier le bloc où se trouve le curseur (une fonction, if, for, while … end) |
| {{key:Mod+Space}} | Afficher les propositions pour le nom que vous tapez (elles s'affichent aussi après deux lettres) ; {{key:Up}} / {{key:Down}} pour choisir, {{key:Enter}} ou {{key:Tab}} pour en prendre une, {{key:Esc}} ferme |
| {{key:Enter}} dans la ligne sous la console | Exécuter cette seule instruction ; {{key:Up}} et {{key:Down}} rappellent les précédentes |
| {{key:F}} | Ajuster la vue à ce que les scripts affichent |

Voir [Écrire et exécuter des scripts](topic:craftscript).

## Raccourcis que le navigateur peut utiliser

- {{key:Mod+Y}} dans Safari peut ouvrir l'historique : utilisez {{key:Mod+Shift+Z}} pour rétablir.
- {{key:Mod+D}} est la touche des favoris du navigateur : PartCraft la prend lorsque l'application a le focus, et la laisse tranquille lorsque vous tapez dans une zone de saisie.
- {{key:F11}} et {{key:Mod+Plus}} / {{key:Mod+Minus}} sont le plein écran et le zoom de page du navigateur, et non ceux de PartCraft. Utilisez {{key:Ctrl+Shift+F}} pour le plein écran et la molette pour le modèle.
- Sur beaucoup d'ordinateurs portables et de Mac, les touches de fonction nécessitent la touche Fn : appuyez sur Fn+{{key:F1}} pour l'aide, ou utilisez le bouton {{ui:Aide}}.

Gestes tactiles et sur pavé tactile : [Pavé tactile, écrans tactiles et petits écrans](topic:trackpad-and-touch).

## Où se trouve la commande Déplacement

La commande Déplacement se trouve dans le menu {{ui:Plus}} du groupe {{ui:Fonctions}}, sous le nom {{ui:Déplacer le corps}}, dans la zone {{ui:Déplacement}} où vous tapez ΔX, ΔY et ΔZ, et sous forme de flèches {{ui:Glisser pour déplacer}} sur la pièce.
