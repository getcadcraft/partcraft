---
title: Imbriquer les pièces plates sur des feuilles
summary: Disposer des pièces plates sur des plaques ou une bobine avec le moins de chutes possible, jamais plus près que l'espacement indiqué, et enregistrer l'implantation en DXF pour la découpe laser, plasma, au jet d'eau ou à la fraiseuse.
keywords: imbrication, imbriquer, feuille, plaque, bobine, laser, plasma, jet d'eau, fraiseuse, découpe, rendement, utilisation de la matière, chute, rebut, espacement, saignée, sens du grain, sens de laminage, dxf, patron à plat, contours
from: 8dcce1a6
---

**L'imbrication** place de nombreuses pièces plates sur une feuille afin de laisser le moins de matière possible. PartCraft pose les pièces une à une, chacune à l'endroit où elle raccourcit le plus la longueur utilisée de la feuille, essaie plusieurs ordres et termine en quelques secondes, puis conserve le meilleur résultat. Les pièces peuvent s'insérer dans les trous des autres et dans le creux d'un L ou d'un U.

## Ouvrir l'imbrication

- {{ui:Exporter}} › {{ui:Imbriquer les pièces plates sur des feuilles…}} ouvre l'imbrication avec le patron à plat de la pièce ou, dans un assemblage, avec le patron à plat de chaque pièce de tôlerie, autant de fois qu'il y a d'exemplaires.
- Sur une pièce de tôlerie, {{ui:Mettre à plat}}, puis {{ui:Imbriquer sur des feuilles…}} sous le patron à plat.
- {{ui:Ajouter des contours depuis un DXF…}} ajoute chaque contour fermé d'un fichier DXF comme une pièce : un dessin de CadCraft enregistré en DXF, ou un fichier issu du logiciel de votre découpeuse. Un contour situé à l'intérieur d'un autre est un trou dans celui-ci. Les lignes et les arcs qui se rejoignent bout à bout forment un seul contour. Les fichiers en pouces, en centimètres ou en mètres sont convertis en millimètres.

:::note
La mise à plat d'une tôle nécessite un noyau géométrique exact (voir [Tôlerie](topic:sheet-metal)). Les contours issus d'un fichier DXF fonctionnent toujours.
:::

## Régler l'imbrication

Pour chaque pièce, indiquez **combien** d'exemplaires vous devez et son **sens du grain** : {{ui:Toute direction}}, {{ui:Dans le sens de la feuille (comme dessiné)}} pour une tôle brossée ou laminée qui doit suivre un seul sens, ou {{ui:En travers de la feuille}}.

Sous **Feuilles** :

- **Stock** : {{ui:Plaques}} d'une longueur et d'une largeur données (et leur nombre disponible ; 0 = autant que nécessaire), ou {{ui:Une bobine}} d'une largeur donnée, sur la longueur nécessaire.
- **La marge de bord** est réservée sur chaque bord de la feuille (pour les serre-joints, ou pour un bord irrégulier).
- **L'espace entre les pièces** est la plus petite distance entre deux lignes de coupe : au moins la saignée de votre découpeuse, plus ce qu'exige la matière.
- **Rotations** : les angles selon lesquels une pièce peut être tournée, tous les 90° par défaut. Moins de rotations donnent un calcul plus rapide ; davantage de rotations peuvent mieux utiliser la feuille.
- **Pièces retournables** permet de poser une pièce à l'envers. Laissez-la désactivée pour la tôlerie : un patron à plat posé retourné se plie dans l'autre sens.

Appuyez sur {{ui:Imbriquer}}. L'aperçu montre chaque feuille ; le récapitulatif indique le nombre de plaques utilisées (ou la part de bobine consommée) et la part de matière occupée par les pièces. Toute pièce qui n'a pas pu être placée est nommée.

## Enregistrer l'imbrication

{{ui:Enregistrer en DXF}} écrit l'implantation en DXF (R12, millimètres), une feuille sous l'autre : les contours des feuilles sur le calque SHEET, les pièces sur PARTS (les arcs restent des arcs), et le nom de chaque pièce sur LABELS.

:::tip
Mélanger plusieurs pièces donne généralement un meilleur résultat que de nombreux exemplaires d'une seule : les petites pièces remplissent les espaces laissés entre les grandes.
:::

## Découper les feuilles (G-code)

**{{ui:Exporter}} › Feuilles imbriquées vers G-code** lit un DXF imbriqué (celui-ci, ou les feuilles du module Armoires dans CadCraft) et crée un programme par feuille avec le post-processeur de votre choix : d'abord les trous et les découpes intérieures, puis les contours, chaque coupe décalée du rayon de l'outil vers l'extérieur de la pièce, à travers la feuille et 1 mm de plus, avec des languettes si vous en demandez. La liste des post-processeurs comprend ceux intégrés et ceux de votre étude Fabrication. Vérifiez chaque programme dans un simulateur avant de l'exécuter : le perçage et les poches ne sont pas réalisés.

## Points à vérifier

PartCraft vérifie à nouveau chaque implantation sur les formes réelles (et non sur la grille utilisée pour la recherche) : deux pièces ne sont jamais plus près que l'espacement, et rien ne se trouve dans les marges. Il ne prépare pas la coupe : les points d'amorce, l'ordre de coupe, la coupe des arêtes communes une seule fois et la conservation de la chute de feuille relèvent du logiciel de votre découpeuse. Vérifiez le DXF dans ce logiciel avant de découper.
