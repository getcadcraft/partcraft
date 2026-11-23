---
title: Finition 3D : parallèle et à crête constante
summary: Finir la surface courbe de tout le modèle avec une fraise boule, à bout arrondi ou à bout plat, en lignes parallèles à l'angle voulu ou en passes espacées d'une distance fixe, de sorte que les crêtes entre elles gardent la hauteur demandée. Ce que garantissent les parcours, et ce qu'ils ne garantissent pas.
keywords: finition 3D, finition, parallèle, trame, crête constante, crête, fraise boule, fraise à bout arrondi, surface, tolérance, pas latéral, pente, surépaisseur à laisser, drop cutter, surcoupe
from: 942d2341
---

Deux opérations de Fabrication usinent **toute la surface du modèle** avec l'outil maintenu vertical (trois axes). Elles ne demandent aucune sélection : elles travaillent sur tout le modèle visible depuis le dessus. Ébauchez d'abord la pièce (**Adaptative** ou **Poche**) ; une passe de finition sur du brut non usiné avertit qu'elle couperait profondément.

## Parallèle

Lignes droites sur tout le modèle, selon l'**angle** que vous réglez, espacées d'un **pas latéral** (une fraction du diamètre de l'outil). Chaque ligne suit la surface : la pointe de l'outil est aussi haute qu'il le faut pour qu'aucune partie de la fraise ne descende sous le modèle, et la ligne est usinée plus finement là où la surface se courbe. Avec **Zig-zag** activé, l'outil reste en prise entre deux lignes lorsqu'il peut le faire en sécurité (contrôlé le long du déplacement) ; sinon il se relève.

- **Tolérance** : écart maximal entre une portion droite de la ligne et la hauteur réelle de la pointe (la moitié sert de limite au milieu de chaque portion). Valeur par défaut : 0.01 mm.
- **Seulement où la surface est d'au moins … et d'au plus … (°)** : ne finir que les zones peu inclinées, ou seulement les zones raides. Là où la surface est hors de la plage, la ligne est omise et l'outil se relève.
- **Surépaisseur à laisser** : le modèle décalé de cette distance (la fraise grossie de cette valeur : exact pour les outils boule et à bout arrondi ; un outil plat laisse au moins cette surépaisseur).
- **Fond** : rien n'est usiné en dessous de cette cote z.

## À crête constante

Passes qui gardent entre elles une distance constante sur la surface, de sorte que la crête (la « crête de passe ») laissée entre deux passes voisines a la **hauteur** demandée. La distance se déduit de la hauteur et du rayon de la boule : s = 2·√(2·R·h − h²), par exemple environ 0.69 mm entre passes pour une boule Ø6 et une crête de 0.02 mm. Un outil à bout arrondi utilise son rayon de bec. Une fraise à bout plat est refusée : elle n'a pas de crête à dimensionner.

Les passes partent du **bord du modèle, en entrant**, ou du **haut du modèle, en descendant**. Ce sont des courbes d'égale distance sur la surface (et non d'égale hauteur) : sur une pente elles sont rapprochées en plan, et sur un plat elles sont très espacées. La distance est mesurée sur une grille posée sur la surface et est exacte à environ 1 % près ; la hauteur de crête est exacte là où la surface est plane ou faiblement courbe, et approchée là où elle se courbe rapidement. **En avalant** garde le côté haut de la surface à droite de l'outil.

## Qualité des parcours

Ce que contrôlent les tests, avec des formules fermées ou une recherche par force brute indépendante de l'empreinte de la fraise :

- La hauteur de la pointe sous l'outil est exacte pour un outil boule, à bout arrondi et plat sur les faces, arêtes et coins du maillage, et n'est jamais au-dessus de la hauteur réelle ; pour les lignes parallèles, le parcours reste dans la tolérance de celle-ci, sans surcoupe plus profonde.
- Les longueurs de parcours sur un plan incliné concordent avec la formule fermée ; les passes à crête constante sur un plan sont espacées de la distance demandée, et la crête entre elles sort à la hauteur demandée.
- La simulation du brut ne montre aucune surcoupe après une passe, et montre les crêtes qui restent.

Ce que ces parcours ne sont pas : ce sont des passes de finition de base, et non l'ensemble de ce qu'offre un système de production.

- Pas encore disponible : finition à z constant (ligne d'eau), nettoyage au crayon et dans les angles, passes radiales et en spirale, projection d'une courbe sur la surface, détection des zones planes, contrôles de collision du porte-outil et de la queue. L'ébauche et l'usinage de reprise sont des opérations à part ([Ébauche 3D et usinage de reprise](topic:rough-3d)) ; un outil incliné relève de la [finition 5 axes](topic:multi-axis#5-axis-finishing).
- Le centre de l'outil reste au-dessus du modèle : les parcours s'arrêtent au bord du modèle au lieu de le dépasser ; une paroi verticale située exactement au bord n'est donc pas finie jusqu'à son pied.
- Les contre-dépouilles ne sont pas vues (la surface est ce que l'outil rencontre depuis le dessus).
- Le modèle est le maillage du noyau ; les parcours suivent donc le maillage (sa tolérance de corde est d'environ 0.0002 de la diagonale de la pièce), et non la surface exacte.
- Finir un grand modèle avec une tolérance fine produit un programme long, avec de nombreux petits déplacements. Contrôlez le résultat dans le simulateur de votre machine avant l'usinage.
