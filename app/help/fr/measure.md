---
title: Mesurer distances, angles et masse
summary: Cliquez sur deux éléments de la vue pour obtenir la distance minimale, l'angle et ΔX ΔY ΔZ ; lisez la longueur d'une arête, le diamètre d'un trou, l'aire d'une face ou les coordonnées d'un point ; obtenez le volume, la masse, le centre de masse et l'inertie d'une pièce ou d'un assemblage.
keywords: mesurer, distance, distance minimale, angle, longueur, rayon, diamètre, aire, coordonnées, delta, inspecter, propriétés de masse, masse, poids, centre de masse, inertie, moment d'inertie, masse volumique, matériau
from: 20bda0b7
---

**Mesurer** fonctionne sur le modèle dans tous les espaces de travail (Design, Form, Simulation, Generative, Manufacture) et dans un assemblage. Elle se trouve dans le menu {{ui:Vues}} du groupe **Affichage**, ou appuyez sur {{key:M}}. Une carte s'ouvre en haut à gauche de la vue.

## Mesurer un seul élément

Cliquez sur un sommet, une arête ou une face. La carte affiche :

- **Un point** (un sommet, le milieu d'une arête ou le centre d'un cercle) : ses X, Y, Z.
- **Une arête** : droite, cercle ou courbe, et sa longueur ; pour un cercle, aussi le rayon, le diamètre et le centre.
- **Une face** : plane, cylindre, cône, etc., et son aire ; la normale d'une face plane ; le rayon et le diamètre d'un cylindre (la taille d'un trou). Les aires sont celles des facettes construites par le noyau de maillage.
- **Le corps entier** : maintenez {{key:Shift}} et cliquez sur la pièce. Vous obtenez son volume, son aire, sa masse et son inertie (voir plus bas).

Le pointeur s'accroche aux sommets, aux milieux d'arêtes et aux centres de cercles à moins de 10 pixels ; un petit point bleu montre l'accrochage avant le clic. Pour choisir le centre d'un trou, pointez le milieu du trou ; pour choisir son bord (le cercle), pointez le bord.

## Mesurer entre deux éléments

Cliquez sur un second élément. La carte ajoute :

- **Distance minimale** et les deux points les plus proches, tracés dans la vue avec une ligne entre eux.
- **ΔX, ΔY, ΔZ** du premier point le plus proche au second.
- **Angle** entre deux faces planes (entre leurs normales, 0–180°), entre deux arêtes droites ou axes (0–90°), ou entre une arête et une face.
- **Écart entre les plans** pour deux faces planes parallèles, **Centre à centre** pour deux cercles ou trous, **Axe à axe** pour deux trous ou cylindres parallèles.

Un troisième clic démarre une nouvelle paire. {{key:Esc}} efface les choix ; {{key:Esc}} à nouveau (ou {{ui:Fermer}}) ferme Mesurer. {{ui:Copier}} place les résultats dans le presse-papiers sous forme de texte séparé par des tabulations, prêt à être collé dans un tableur.

### Précision de la mesure

PartCraft construit la pièce avec le noyau de maillage : les distances sont donc calculées sur les facettes du maillage, et la carte indique **approximatif : sur les facettes**. C'est juste pour les faces planes et entre sommets, légèrement inexact pour les surfaces courbes. Un réglage **Courbes** plus fin les rapproche. La mesure exacte sur les surfaces réelles nécessite un noyau exact, qui n'est pas encore disponible dans cette version.

## Propriétés de masse

Choisissez {{ui:Propriétés de masse}} dans la carte ou dans le menu {{ui:Vues}}. Sur une pièce, choisissez un **Matériau** dans la carte (acier, aluminium, plastiques et autres, avec leurs masses volumiques habituelles). Dans un assemblage, chaque pièce utilise le matériau défini dans ses propriétés (sélectionnez la pièce, puis **Matériau**), et le résultat concerne toutes les pièces ensemble.

La carte affiche la masse, le volume, l'aire, le centre de masse, le tenseur d'inertie (Ixx, Iyy, Izz et les produits Ixy, Iyz, Ixz, en kg·mm², autour du centre de masse selon les axes du monde) et les moments principaux. Sans matériau, elle affiche la même grandeur par unité de masse volumique (mm⁵) et aucune masse.

Les valeurs sont exactes pour le solide tessellé construit par le noyau de maillage (faces courbes en facettes) : une pièce ronde ressort donc légèrement faible, et la carte l'indique. Les masses volumiques des matériaux sont des valeurs typiques de manuel ; un alliage ou une nuance réels peuvent différer de quelques pour cent.

## Limites

- L'accrochage peut trouver un point caché derrière d'autres géométries ; vérifiez que la carte correspond à ce que vous vouliez.
- Mesurer se ferme lorsque vous ouvrez une esquisse ou la feuille de dessin, ou lorsque vous changez d'espace de travail.
