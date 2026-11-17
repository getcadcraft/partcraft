---
title: Relations et cotes d'esquisse
summary: Toutes les relations et cotes d'une esquisse PartCraft, ce qu'il faut sélectionner pour chacune, leur symbole et leur comportement lors de la résolution.
keywords: relations, contraintes, coïncident, horizontal, vertical, parallèle, perpendiculaire, tangent, égal, concentrique, milieu, fixer, distance, distance horizontale, distance verticale, rayon, diamètre, angle, symboles, glyphes
from: 9831e7be
---

Les relations fixent la position d'une géométrie par rapport à une autre. Les cotes fixent les tailles. Pour ajouter une relation, sélectionnez des éléments avec l'outil Sélection ({{key:S}}) et choisissez son bouton dans le panneau de droite ; pour ajouter une cote, utilisez l'outil Cote ({{key:D}}) ou les boutons de cote du panneau de droite. Mode d'emploi : [Définir entièrement une esquisse](topic:relations-dimensions).

« Courbe » ci-dessous désigne un cercle ou un arc. L'origine compte comme un point.

## Relations

| Bouton | Symbole | Sélection | Effet |
|---|---|---|---|
| {{ui:• Coïncident}} | • (affiché seulement lorsque l'élément est sélectionné ou en cas de problème) | Deux points | Les points se rejoignent |
| {{ui:• Coïncident}} | • | Un point et une ligne | Le point se trouve sur la ligne (ou sur son prolongement) |
| {{ui:• Coïncident}} | • | Un point et une courbe | Le point se trouve sur le cercle ou l'arc |
| {{ui:H Horizontale}} | H | Une ligne, ou deux points | La ligne est horizontale, ou les deux points sont à la même hauteur |
| {{ui:V Verticale}} | V | Une ligne, ou deux points | La ligne est verticale, ou les points sont l'un au-dessus de l'autre |
| {{ui:∥ Parallèle}} | ∥ | Deux lignes | Les lignes ont la même direction |
| {{ui:⊥ Perpendiculaire}} | ⊥ | Deux lignes | Les lignes se rencontrent à angle droit |
| {{ui:T Tangente}} | T | Une ligne et une courbe | La ligne touche la courbe sans la traverser |
| {{ui:T Tangente}} | T | Deux courbes | Elles se touchent, à l'extérieur ou à l'intérieur, selon le tracé |
| {{ui:T Tangente}} | T | Une spline et une ligne, un arc ou une spline qui rejoint l'une de ses extrémités | La spline quitte cette extrémité dans la direction de l'autre courbe |
| {{ui:= Égale}} | = | Deux lignes | Même longueur |
| {{ui:= Égale}} | = | Deux courbes | Même rayon |
| {{ui:◎ Concentrique}} | ◎ | Deux courbes | Même centre |
| {{ui:◎ Concentrique}} | ◎ | Un point et une courbe | Le point est au centre de la courbe |
| {{ui:M Milieu}} | M | Un point et une ligne | Le point est au milieu de la ligne |
| {{ui:↔ Symétrique}} | ↔ | Deux points et une ligne | Les points sont symétriques par rapport à la ligne (la Symétrie les ajoute) |
| {{ui:⚓ Fixe}} | ⚓ | Un point, une ligne, une courbe ou une spline | Le maintient exactement là où il se trouve maintenant (pour une spline : ses points) |

Ici, les lignes incluent les lignes d'axe. Le tracé ajoute certaines relations : l'accrochage à un point le rend coïncident, l'accrochage à une courbe place le point dessus, les lignes presque horizontales ou verticales reçoivent H ou V, et un rectangle arrive avec ses quatre coins joints, deux H et deux V.

**Fixe** est un moyen rapide d'empêcher un élément de bouger, mais la pièce ne peut alors plus suivre un changement de cote ailleurs. Privilégiez les cotes par rapport à l'origine.

## Cotes

| Bouton | Sélection | Mesure | Affichée comme |
|---|---|---|---|
| {{ui:Distance}} | Une ligne | Sa longueur | Distance 40 |
| {{ui:Distance}} | Deux points | La distance en ligne droite entre eux | Distance 40 |
| {{ui:Distance}} | Un point et une ligne | La distance du point à la ligne, perpendiculairement à celle-ci | Distance 40 |
| {{ui:Distance}} | Deux lignes parallèles | L'écart entre elles | Distance 40 |
| {{ui:Distance horizontale}} | Deux points, ou une ligne | La seule distance gauche-droite | Distance horizontale 40 |
| {{ui:Distance verticale}} | Deux points, ou une ligne | La seule distance haut-bas | Distance verticale 40 |
| {{ui:Rayon}} | Un cercle ou un arc | Son rayon | Rayon R10 |
| {{ui:Diamètre}} | Un cercle ou un arc | Son diamètre | Diamètre ⌀20 |
| {{ui:Angle}} | Deux lignes non parallèles | L'angle entre elles, de 0 à 180 degrés | Angle 30° |

Avec l'outil Cote, PartCraft choisit le type selon ce que vous cliquez et selon l'endroit où vous placez le nombre :

| Vous cliquez | Vous obtenez |
|---|---|
| Une ligne | Sa longueur ; pour une ligne inclinée, horizontale si le nombre est au-dessus ou en dessous, verticale s'il est sur le côté |
| Un cercle | Diamètre |
| Un arc | Rayon |
| Deux points | Distance ; horizontale ou verticale comme pour une ligne inclinée |
| Un point et une ligne | Distance du point à la ligne |
| Deux lignes | Angle, ou la distance si elles sont parallèles |
| Un point et un cercle | Rien : « Ces éléments ne peuvent pas être cotés ensemble. » Cotez plutôt le point central du cercle |

**Décalage** (affiché comme la distance) est créé par l'outil Décaler : il maintient une ligne copiée parallèle à cette distance, ou un arc ou un cercle copié concentrique, avec un rayon plus grand ou plus petit d'autant. Les autres éléments du même décalage portent une relation **O** et suivent la seule cote de Décalage. Voir [Splines, ajuster, décaler et autres outils d'esquisse](topic:sketch-tools).

Les valeurs de cote sont en millimètres (ou en degrés), jamais négatives. Le rayon et le diamètre doivent être supérieurs à zéro. Une valeur de 0 est permise pour les distances : deux points distants de 0 sont coïncidents.

## Comportement de la résolution

- **Mouvement minimal.** Lorsqu'une valeur change, le solveur déplace la géométrie le moins possible. Une ligne dont la longueur change s'allonge également aux deux extrémités si rien ne retient l'une d'elles.
- **Pas de retournement.** Les distances d'un point à une ligne, les distances horizontales et verticales, les angles et les tangences mémorisent le côté où ils ont été créés. Changer une valeur ne retourne jamais la géométrie de l'autre côté.
- **Les conflits ne touchent à rien.** Si des relations se contredisent, l'esquisse reste exactement comme elle était et les relations en conflit deviennent rouges.
- **Les relations redondantes** (déjà impliquées par d'autres) sont signalées dans la barre d'état (« est déjà impliquée. Supprimez-la. ») et la fonction se construit tout de même, avec un avertissement.
- **Joints tangents.** Lorsqu'un arc de congé rejoint ses lignes à un point d'extrémité commun, la tangence est résolue sous une forme qui reste bien définie à cet endroit, de sorte que les congés d'esquisse ne sont pas considérés comme surdéfinis.

## Pas encore disponible

Relations colinéaires, coradiales et de passage ; un point sur une spline ; cotes de référence (pilotées) ; cotes ordonnées et de longueur d'arc ; équations entre cotes. Pour des lignes colinéaires, utilisez Parallèle, plus une distance de 0.
