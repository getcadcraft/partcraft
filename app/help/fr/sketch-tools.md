---
title: Splines, ajuster, décaler et autres outils d'esquisse
summary: Tracer des splines par points d'ajustement ou à points de contrôle, ajuster et prolonger des courbes, décaler une chaîne, symétriser par rapport à une ligne d'axe, ajouter des polygones et des rainures, répéter la géométrie d'esquisse et projeter les arêtes du modèle.
keywords: spline, point d'ajustement, point de contrôle, b-spline, nurbs, courbe, ajuster, prolonger, décaler, symétrie, symétrique, polygone, hexagone, rainure, répétition, répétition linéaire, répétition circulaire, projeter, projeter l'arête, inclure, convertir des entités
from: 3ecb166a
---

Ces outils fonctionnent dans une esquisse ouverte. {{ui:Spline}} et {{ui:Ajuster}} sont dans la barre d'outils. Les autres sont sous {{ui:Plus}}, à la fin des outils d'esquisse. Chaque outil constitue une étape d'annulation, et {{key:Esc}} l'arrête. Pour les outils de tracé de base, voir [Dessiner votre première esquisse](topic:sketch-basics).

## Splines

Une spline est une courbe lisse. Il en existe deux types.

| Outil | Touche | Comment tracer |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Cliquez les points par lesquels passe la courbe. Terminez avec {{key:Enter}}, {{key:Esc}}, un clic droit ou un double-clic. Cliquez à nouveau le premier point pour fermer la spline |
| {{ui:Spline à points de contrôle}} (sous {{ui:Plus}}) | | Cliquez les points de contrôle. La courbe est attirée vers eux mais ne touche que le premier et le dernier. Le polygone de contrôle en pointillés s'affiche pendant le tracé et ensuite |

- **Les points sont des points d'esquisse.** Faites-les glisser, ou donnez-leur des relations et des cotes comme à tout autre point. Le premier point d'une spline peut s'accrocher à l'extrémité d'une ligne, ce qui les joint par une relation coïncidente.
- **Tangente à une extrémité.** Sélectionnez une ligne, un arc ou une spline qui rejoint une extrémité de la spline, puis la spline, et choisissez {{ui:T Tangente}}. La direction d'extrémité de la spline suit alors la ligne. Une tangente en dehors des extrémités de la spline est refusée : « Une tangente à une spline exige que la ligne, l'arc ou la spline rejoigne l'une de ses extrémités. »
- **Extrémités.** Sans relation de tangence, les extrémités d'une spline à points d'ajustement sont naturelles (aucune courbure à l'extrême bout). La courbe est cubique et passe par chaque point ; son espacement dépend des distances entre les points.
- **Les splines fermées** forment seules un profil. Les splines ouvertes joignent lignes et arcs en une boucle fermée, comme toute autre courbe.
- Supprimer un point à l'intérieur d'une spline retire ce point et conserve la spline, tant qu'elle a au moins deux points (trois si elle est fermée).

L'extrusion et la révolution construisent la spline avec le noyau maillage, à partir de courts segments droits (les vraies courbes nécessitent un noyau exact : pas encore disponible dans cette version). L'export DXF écrit une spline sous forme de polyligne qui reste à 0.01 mm près de la courbe, car le DXF R12 n'a pas d'entité spline.

## Ajuster et prolonger

| Outil | Touche | Fonctionnement |
|---|---|---|
| {{ui:Ajuster}} | {{key:T}} | Pointez une courbe : le morceau qui serait retiré s'affiche en rouge, jusqu'aux intersections les plus proches. Cliquez pour le supprimer. Une courbe qui n'en croise aucune est supprimée entièrement |
| {{ui:Prolonger}} (sous {{ui:Plus}}) | {{key:E}} | Cliquez une ligne ou un arc près de l'extrémité à prolonger. Il s'allonge jusqu'à la courbe suivante qu'il rencontre. « Il n'y a rien que cette extrémité puisse atteindre. » si rien ne se trouve sur son chemin |

Ajuster et Prolonger fonctionnent sur les lignes, les arcs, les cercles et les splines (Prolonger : lignes et arcs uniquement).

- Un **cercle** ajusté devient un arc. Sa cote de rayon ou de diamètre passe à l'arc.
- Ajuster le milieu d'une ligne laisse deux lignes qui restent sur la même droite. Ajuster le milieu d'un arc laisse deux arcs de même centre et une relation égale.
- Une **spline** ajustée devient une spline à points de contrôle qui suit exactement l'ancienne courbe. Une relation de tangence conservée à une extrémité reste en place.
- La nouvelle extrémité est placée sur la courbe qui l'a coupée (sur la ligne, l'arc ou le cercle, ou coïncidente avec son extrémité). Les splines ne peuvent pas porter de point : une spline qui coupe n'ajoute donc aucune relation.

**Les relations qui ne conviennent plus sont supprimées**, et la barre d'état indique combien. Par exemple, une cote de longueur sur une ligne ajustée est supprimée, mais les relations horizontale ou parallèle restent.

## Décaler

1. Choisissez {{ui:Décaler}} sous {{ui:Plus}}, ou appuyez sur {{key:O}}.
2. Cliquez une ligne, un arc, un cercle ou une spline. Toute sa chaîne est mise en surbrillance : toutes les courbes jointes bout à bout, jusqu'à un point où trois courbes ou plus se rencontrent. Pour décaler seulement une partie d'une chaîne, sélectionnez d'abord ces courbes, puis choisissez Décaler et cliquez l'une d'elles.
3. Déplacez le pointeur vers le côté où va la copie. Un aperçu en pointillés le suit. Appuyez sur {{key:B}} pour les deux côtés.
4. Cliquez, saisissez la distance, puis appuyez sur {{key:Enter}}.

Les lignes et les arcs sont décalés exactement. Les angles sont prolongés ou ajustés jusqu'à se rejoindre. La copie porte une seule cote **Décalage**, et les autres éléments la suivent : double-cliquez la cote pour modifier toute la copie. Une distance trop grande pour la chaîne est refusée, par exemple « Cette distance est trop grande pour cette chaîne : un côté se retournerait à l'intérieur. »

Une **spline** est décalée par une nouvelle spline à points d'ajustement, à 0.001 mm près du décalage exact. Cette copie est figée : elle ne suit pas les modifications ultérieures et n'a pas de cote de Décalage. Une spline dans une chaîne nécessite des jonctions lisses (tangentes) à ses extrémités.

## Symétrie

1. Avec la sélection, désignez ce qu'il faut symétriser.
2. Choisissez {{ui:Symétrie}} sous {{ui:Plus}}, ou appuyez sur {{key:M}}.
3. Cliquez la ligne ou la ligne d'axe par rapport à laquelle symétriser.

Chaque point symétrisé reçoit une relation **Symétrique** avec son original, de sorte que la copie suit lorsque l'original change. Les points situés sur la ligne de symétrie sont partagés, et les cercles symétrisés reçoivent une relation Égale. Si rien n'était sélectionné, cliquez les éléments à symétriser, appuyez sur {{key:Enter}}, puis cliquez la ligne de symétrie.

## Polygones et rainures

| Outil | Fonctionnement |
|---|---|
| {{ui:Polygone}} | Cliquez le centre, puis un coin, puis saisissez le nombre de côtés (3 à 64). Les côtés sont égaux et les coins se posent sur un cercle de construction. Cotez le cercle pour dimensionner le polygone |
| {{ui:Rainure}} | Cliquez le centre d'une extrémité, puis le centre de l'autre, puis cliquez pour fixer la largeur. Deux lignes, tangentes à deux demi-cercles égaux |

## Répétitions d'esquisse

Sélectionnez d'abord la géométrie, puis :

- {{ui:Répétition linéaire}} : cliquez un point de départ, puis l'endroit où va la première copie, puis saisissez le nombre de copies (original compris).
- {{ui:Répétition circulaire}} : cliquez le centre, puis saisissez le nombre de copies, réparties uniformément sur un tour complet.

Les copies emportent les relations entre la géométrie sélectionnée (une répétition circulaire exclut les relations horizontales et verticales). Les copies ne sont pas liées à l'original : si vous en modifiez une, les autres restent telles quelles.

## Projeter les arêtes de la pièce

1. Choisissez {{ui:Projeter l'arête}} sous {{ui:Plus}}.
2. Cliquez une arête droite ou circulaire de la pièce située derrière l'esquisse.

L'arête est copiée exactement sur le plan d'esquisse et figée (relation Fixe). Elle ne suit pas les modifications ultérieures de la pièce. Appuyez sur {{key:Q}} pour en faire une géométrie de construction. Un cercle incliné par rapport au plan d'esquisse se projetterait en ellipse : il est donc refusé. Il en va de même des arêtes de forme libre et des arêtes pointant directement hors de l'esquisse. La projection nécessite un noyau exact : pas encore disponible dans cette version.
