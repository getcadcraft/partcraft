---
title: Cadres en profilés d'acier
summary: Placer des profilés d'acier le long des lignes d'une ou plusieurs esquisses pour former un cadre soudé : angles en onglet ou bout à bout, barres coupées à la bonne longueur aux jonctions, chapeaux d'extrémité, goussets et liste de débit avec longueurs et angles de coupe.
keywords: construction soudée, élément de structure, cadre, cadre acier, tube, tube carré, hss, rhs, shs, tuyau, chs, poutrelle à larges ailes, poutrelle en I, ipe, hea, heb, fer en U, upn, cornière, onglet, bout à bout, entaille, chapeau d'extrémité, gousset, liste de débit
from: 59071e5a
---

Un **Élément de structure** place un profilé d'acier le long de chaque ligne des esquisses que vous choisissez. Dessinez le cadre sous forme de lignes (chaque ligne est une barre), puis choisissez le profilé : les barres sont construites, leurs angles ajustés et prolongés, et une liste de débit indique la longueur à couper pour chaque pièce et l'angle de coupe.

## Créer un cadre

1. Dessinez le cadre sous forme de lignes dans une esquisse, par exemple un rectangle sur le plan de dessus. Les lignes marquées comme construction sont ignorées.
2. L'esquisse étant sélectionnée, choisissez {{ui:Plus}} › {{ui:Élément de structure}}. Chaque ligne de l'esquisse reçoit une barre.
3. Dans le panneau, choisissez la **Famille** et le **Format** du profilé. Les familles sont les tableaux AISC (W, S, C, L, tubes HSS, Tuyau) et EN 10365 (IPE, HEA, HEB, UPN).

### Un cadre en 3D

Les lignes de plusieurs esquisses forment un seul cadre : une traverse dessinée sur un plan au-dessus, et les montants dessinés sur des plans verticaux, se rejoignent par leurs extrémités en 3D. Sous **Le long des lignes de** dans le panneau, cochez chaque esquisse dont les lignes sont suivies par les barres. Les extrémités qui se rejoignent à un micromètre près sont jointes.

## Placer le profilé sur sa ligne

- **Rotation (°)** fait tourner le profilé autour de sa ligne. Une poutre se tient avec sa hauteur verticale (sur une barre verticale, sa hauteur pointe vers l'avant).
- **Sur la ligne** choisit le point du profilé posé sur la ligne : le centre, un coin, ou le milieu d'un côté du contour du profilé. « Milieu bas » place un cadre au-dessus du plan d'esquisse au lieu de le traverser.

## Angles et jonctions

| Où les barres se rencontrent | Ce qui se passe |
|---|---|
| Deux barres bout à bout, **Angles : d'onglet** | Les deux sont coupées sur le plan situé à mi-chemin entre elles, comme un cadre de tableau |
| Deux barres bout à bout, **Angles : bout à bout** | La première se prolonge jusqu'à la face éloignée de la seconde ; la seconde est coupée d'équerre sur la face proche de la première |
| Une barre se termine sur le milieu d'une autre (un T) | Elle est coupée pour s'ajuster contre l'extérieur de l'autre barre |
| Trois barres ou plus se terminent en un même point | La première se prolonge d'équerre au-delà des autres ; les autres sont coupées pour s'ajuster contre elle |

La première barre est celle dont la ligne vient en premier : les lignes gardent l'ordre dans lequel elles ont été dessinées, esquisse par esquisse, dans l'ordre où les esquisses ont été cochées.

## Chapeaux d'extrémité et goussets

- **Chapeaux d'extrémité** ferment chaque extrémité libre avec une plaque au contour du profilé, de l'épaisseur que vous réglez, placée à l'extérieur de l'extrémité.
- **Goussets** placent une plaque triangulaire dans chaque angle où deux barres se rencontrent avec un angle : **Taille du gousset** le long de chaque barre à partir de l'angle, **Épaisseur du gousset** en travers, centrée sur le plan de l'angle.

## La liste de débit

Le panneau liste chaque pièce, en regroupant les pièces identiques : le profilé, la longueur (du point long au point long, comme on la trace pour la scie), la façon dont chaque extrémité est coupée (d'équerre, un angle par rapport à l'équerre, ou coupée pour s'ajuster), et les barres concernées. Les chapeaux d'extrémité et les goussets sont listés avec leurs dimensions. {{ui:Enregistrer la liste de débit (CSV)}} l'enregistre pour un tableur.

Une barre coupée pour s'ajuster contre un tube à angles arrondis pénètre un peu dans le rayon de l'angle de ce tube ; sa longueur au point long est donc de quelques millimètres de plus que l'écart entre les faces.

## Limites

- Les barres suivent uniquement des lignes droites ; les arcs et les splines de l'esquisse sont ignorés.
- Les jonctions sont coupées, non soudées : aucun cordon de soudure n'est dessiné, et le cadre est un seul solide.
- Les profilés sont dessinés à partir des dimensions du tableau : profilés W avec leur congé de pied, profilés S et fers en U à ailes parallèles, tubes avec rayons d'angle. Les trous, les préparations d'extrémités et les jeux de soudure ne sont pas réalisés à votre place.
- Les éléments de structure sont construits par le noyau maillage. Avec le noyau exact activé (développeurs uniquement), ils l'indiquent et ne sont pas construits.
