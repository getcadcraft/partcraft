---
title: "Finition 3D : parallèle et crête constante"
summary: "Finissez toute la surface courbe du modèle avec une fraise boule, à bout bombé ou plate, en lignes parallèles à l'angle choisi ou en passes espacées d'une distance fixe, pour que les crêtes entre elles gardent la hauteur demandée. Ce que les parcours garantissent, et ce qu'ils ne garantissent pas."
keywords: "finition 3D, finition, parallèle, trame, crête constante, crête, pointe, fraise boule, bout bombé, surface, tolérance, pas, pente, surépaisseur, drop cutter, gouge"
from: e1587d0a
---

Deux opérations de Fabrication usinent la **surface entière du modèle** avec l'outil maintenu vertical (trois axes). Elles ne demandent aucune sélection : elles travaillent sur toute la partie du modèle visible depuis le haut. Ébauchez d'abord la pièce (adaptatif ou poche) ; une passe de finition sur de la matière non usinée avertit qu'elle risque de couper profondément.

## Parallèle

Lignes droites à travers le modèle, selon l'**angle** que vous réglez, espacées du **pas** (une fraction du diamètre de l'outil). Chaque ligne suit la surface : la pointe de l'outil est aussi haute qu'il le faut pour qu'aucune partie de la fraise ne passe sous le modèle, et la ligne est usinée plus finement là où la surface se courbe. Avec **Zig-zag** activé, l'outil reste en prise entre les lignes là où il peut le faire en sécurité (vérifié le long du déplacement) ; sinon il se relève.

- **Tolérance** : écart maximal entre une portion droite de ligne et la hauteur réelle de la pointe (la moitié de cette valeur sert de limite au milieu de chaque portion). Par défaut 0.01 mm.
- **Seulement là où la surface est au moins … et au plus … (°)** : ne finit que les zones peu inclinées, ou seulement les zones raides. Là où la surface est hors de la plage, la ligne est omise et l'outil se relève.
- **Surépaisseur à laisser** : le modèle décalé de cette distance (la fraise agrandie d'autant : exact pour les fraises boule et à bout bombé ; une fraise plate laisse au moins cette valeur).
- **Fond** : rien n'est usiné sous cette cote z.

## Crête constante

Passes séparées d'une distance constante sur la surface, si bien que la crête laissée entre deux passes voisines a la **hauteur** demandée. La distance se déduit de la hauteur et du rayon de la boule : s = 2·√(2·R·h − h²), par exemple environ 0.69 mm entre passes pour une boule Ø6 et une crête de 0.02 mm. Une fraise à bout bombé utilise son rayon de coin. Une fraise plate est refusée : elle n'a pas de crête à dimensionner.

Les passes commencent **depuis le bord du modèle, en allant vers l'intérieur**, ou **depuis son sommet, en descendant**. Ce sont des contours de la distance sur la surface (et non de la hauteur) : sur une pente, elles sont rapprochées en plan, et sur un plat elles sont largement espacées. La distance est mesurée sur une grille sur la surface et est juste à environ 1 % près ; la hauteur de crête est exacte là où la surface est plane ou faiblement courbe, et approchée là où elle se courbe rapidement. **En avalant** garde le côté le plus haut de la surface à droite de la fraise.

## Qualité des parcours

Ce que vérifient les tests, avec des formules fermées ou une recherche indépendante par force brute de l'empreinte de la fraise :

- La hauteur de pointe sous l'outil est exacte pour une fraise boule, à bout bombé et plate sur les faces, arêtes et angles du maillage, et jamais au-dessus de la hauteur réelle ; pour les lignes parallèles, le parcours reste dans la tolérance, sans gouge plus profonde que celle-ci.
- Les longueurs de parcours sur un plan incliné concordent avec la formule fermée ; les passes de crête sur un plan sont espacées de la distance demandée, et la crête entre elles sort à la hauteur demandée.
- La simulation de la matière ne montre aucune gouge après une passe et montre les crêtes restantes.

Ces parcours ne sont pas tout : ce sont des passes de finition de base, pas l'ensemble de ce qu'offre un système de production.

- Pas encore disponible : passes à z constant, reprise au crayon et dans les angles, passes radiales et en spirale, projection d'une courbe sur la surface, détection des zones plates, usinage de reprise, contrôle des collisions du porte-outil et de la queue, et toute inclinaison de l'outil.
- Le centre de l'outil reste au-dessus du modèle : les parcours s'arrêtent au bord du modèle au lieu de le dépasser, si bien qu'une paroi verticale située exactement au bord n'est pas finie jusqu'à son pied.
- Les contre-dépouilles ne sont pas vues (la surface est ce que l'outil rencontre depuis le haut).
- Le modèle est le maillage du noyau : les parcours suivent donc le maillage (sa tolérance de corde est d'environ 0.0002 de la diagonale de la pièce), et non la surface exacte.
- Finir un grand modèle avec une tolérance fine produit un programme long, avec de nombreux petits mouvements. Vérifiez le résultat dans le simulateur de votre machine avant d'usiner.
