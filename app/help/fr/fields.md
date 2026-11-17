---
title: "Champs : des formes définies par des distances"
summary: "Ce qu'est un champ (une forme stockée sous forme de distance à sa surface), comment le construire à partir de primitives, d'opérations booléennes, de treillis et de surfaces minimales dans un script, comment il devient un corps, et pourquoi le même script donne toujours les mêmes octets."
keywords: "champ, distance signée, sdf, voxel, gyroïde, tpms, treillis, booléen, décalage, coque, raccord, dual contouring, déterministe, étanche, manifold, brique"
from: faab7480
---

Un **champ** décrit une forme par la distance entre n'importe quel point et sa surface : négative à l'intérieur, nulle sur la surface, positive à l'extérieur. Une sphère de rayon 5 est « la distance au centre moins 5 ». Combiner des formes est une arithmétique sur les distances : l'union est la plus petite des deux, l'intersection la plus grande, et soustraire une forme d'une autre donne la plus grande entre la première et l'opposée de la seconde. Agrandir une forme de 1 mm retranche 1 à la distance ; une paroi creuse est la distance, repliée sur elle-même.

C'est pourquoi les champs conviennent aux treillis, aux canaux et aux parois à épaisseur variable : la surface d'une gyroïde est « la somme des sinus est nulle », et une paroi qui s'épaissit de 1 à 3 mm sur la pièce est un nombre qui varie sur toute la pièce.

## Du champ au corps

`to_body(field, h)` échantillonne le champ sur une grille de points espacés de `h` millimètres, en ne gardant que les points proches de la surface (une grille creuse de briques de 8 × 8 × 8), et construit la surface par **dual contouring** : un sommet par cellule de surface, placé là où se rejoignent les plans de la surface, de sorte qu'une arête vive reste vive à un voxel près. La surface est fermée et chaque arête est partagée par exactement deux triangles ; le rapport l'indique. Une fonction plus fine que trois voxels environ peut se pincer ; le rapport signale alors que le corps n'est pas un solide fermé, au lieu de le masquer.

La taille du voxel fixe la précision : le volume d'une sphère de 25 voxels de diamètre est à quelques centièmes de pourcent près ; une paroi n'est juste que dans la mesure de ses voxels. Plus la grille est grossière, plus c'est rapide.

## Toujours les mêmes octets

Un champ n'a ni horloge ni nombre aléatoire. Le sinus et le cosinus d'une gyroïde, ainsi que chaque exponentielle, logarithme et puissance de la bibliothèque, sont calculés par une arithmétique élémentaire, afin que Node, Chrome, Firefox et Safari donnent les mêmes bits ; la grille est parcourue dans un ordre fixe, si bien que le même script avec les mêmes entrées donne des maillages et des fiches de données identiques octet pour octet, sur n'importe quel ordinateur et quel que soit le nombre de threads de travail. Cela est testé, y compris un navigateur comparé à Node.

## Pour la suite

[Écrire un générateur](topic:write-a-generator) construit une pièce à partir de champs ; [La bibliothèque d'ingénierie](topic:engineering-library) la dimensionne.
