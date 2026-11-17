---
title: Révolution d'une pièce tournée
summary: Esquissez la moitié d'un profil à côté d'une ligne d'axe, faites-le tourner pour obtenir une pièce de révolution, choisissez l'axe et l'angle, et utilisez une découpe par révolution pour les gorges.
keywords: révolution, bossage de révolution, découpe par révolution, pièce tournée, tour, arbre, axe, ligne d'axe, gorge, angle, découpe de révolution
from: 593b6929
---

{{ui:Révolution}} fait tourner un profil autour d'un axe, comme une pièce réalisée sur un tour : arbres, poulies, brides, boutons. {{ui:Découpe par révolution}} (dans le menu {{ui:Plus}} du groupe Fonctions) fait tourner un profil pour retirer de la matière, pour les gorges et les évidements.

## Révolution d'un arbre à épaulements

1. Esquissez sur le **Plan de face**.
2. Appuyez sur {{key:N}} pour {{ui:Ligne d'axe}}. Commencez sur l'origine et cliquez sur un point tout droit à droite, par exemple à 100 mm. C'est l'axe. Il est en pointillés : la géométrie de construction ne fait pas partie du profil.
3. Appuyez sur {{key:L}} pour Ligne. Tracez le **demi**-profil au-dessus de la ligne d'axe comme une seule boucle fermée : commencez sur la ligne d'axe, montez, faites un décrochement, redescendez jusqu'à la ligne d'axe, puis revenez le long de celle-ci jusqu'au point de départ. Ses extrémités doivent se rejoindre : la boucle doit être fermée.
4. Cotez les rayons (hauteurs au-dessus de la ligne d'axe) et les longueurs. Une hauteur de 10 au-dessus de la ligne d'axe donne un diamètre de 20.
5. Choisissez {{ui:Quitter}}.
6. Choisissez {{ui:Révolution}}. L'arbre apparaît, sur un tour complet.

Le profil doit rester d'un seul côté de l'axe. S'il le croise : « Le profil croise l'axe. Gardez-le d'un seul côté de la ligne d'axe. » Une arête du profil peut se trouver sur l'axe.

## Réglages

| Réglage | Rôle | Par défaut |
|---|---|---|
| **Opération** | Bossage (ajoute de la matière), Découpe (retire de la matière), Intersection (conserve la partie commune) ou Nouveau corps | Bossage pour {{ui:Révolution}}, Découpe pour {{ui:Plus}} › {{ui:Découpe par révolution}} |
| **Angle (°)** | Amplitude de la rotation, de juste au-dessus de 0 jusqu'à 360 | 360 |
| **Axe** | Première ligne d'axe, ou toute droite ou ligne d'axe de l'esquisse, listée comme « Ligne d'axe 1 (l1) » ou « Droite 3 (l3) » | Première ligne d'axe |

Un angle partiel donne un secteur, tourné à partir du plan d'esquisse dans un seul sens.

Si l'esquisse n'a pas de ligne d'axe et que vous laissez **Axe** sur Première ligne d'axe : « Tracez une ligne d'axe (une ligne de construction) dans l'esquisse pour la faire tourner. » Vous pouvez aussi choisir comme axe une ligne pleine du profil.

## Découper une gorge

1. L'arbre étant construit, ouvrez une nouvelle esquisse sur le **Plan de face** (le même plan que l'esquisse de l'arbre).
2. Tracez une ligne d'axe sur le même axe : commencez-la sur l'origine et gardez-la horizontale pour qu'elle reçoive une relation H, ou saisissez-la avec **Ajouter par coordonnées** (par exemple de `0, 0` à `100, 0`). Une nouvelle esquisse ne peut pas s'accrocher aux droites d'une autre esquisse.
3. Tracez un petit rectangle fermé qui chevauche le bord de l'arbre à l'endroit de la gorge.
4. Choisissez {{ui:Quitter}}, puis {{ui:Plus}} › {{ui:Découpe par révolution}}.

## Révolutions dans les assemblages

Une révolution a un axe que d'autres fonctions et assemblages peuvent utiliser :

- une répétition **circulaire** utilise par défaut l'axe de la dernière révolution (voir [Répétitions et symétries de fonctions](topic:patterns-mirror)) ;
- dans un assemblage, une liaison entre faces issues de révolutions débute comme une liaison **pivot**, et **Centrer sur** propose « Axe de Revolve1 » (voir [Construire un assemblage](topic:build-assembly)).

## Courbes vraies et facettes

PartCraft construit une révolution avec le noyau de maillage (la pastille de la barre d'état indique « Noyau de maillage ») : les formes rondes sont des facettes planes, 64 par tour par défaut, et les volumes sont légèrement inférieurs à la valeur réelle (environ 0.16 % à 64). La vue et les exports STL, 3MF et STEP sont faits de ces facettes : réglez **Courbes** (cliquez dans le vide, puis le panneau de droite) sur Fin (128) ou Très fin (256) pour des facettes plus lisses. Les cylindres, cônes et tores exacts nécessitent un noyau exact : pas encore disponible dans cette version. Voir [Le noyau de maillage](topic:solid-kernels).
