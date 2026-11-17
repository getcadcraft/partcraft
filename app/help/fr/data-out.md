---
title: Export des données : fiche de données, champs et maillages
summary: Enregistrer la fiche de données d'un corps généré en JSON ou PDF, son champ en image VTK (.vti) ou en ensemble de niveaux OpenVDB (.vdb), sa surface en maillage VTK (.vtu) pour ParaView et d'autres outils d'analyse, et le maillage en 3MF portant les données du générateur. La même pièce produit toujours les mêmes fichiers.
keywords: export, fiche de données, json, pdf, vti, vtu, vtk, paraview, 3mf, champ, distance signée, fea, cfd, métadonnées, openvdb
from: 817b4579
---

Dans l'espace de travail {{ui:Ingénierie}}, ou dans les propriétés d'un corps généré, ouvrez **Export des données** :

| Bouton | Fichier | Pour |
|---|---|---|
| Fiche de données (JSON) | `.json` | Chaque entrée, chaque nombre avec son unité et sa source, les vérifications, l'empreinte du maillage. Trié, sans heures : la même pièce donne le même fichier. |
| Fiche de données (PDF) | `.pdf` | La même chose sur papier, sur autant de pages qu'il en faut. |
| Champ (.vti) | `.vti` | La pièce sous forme de distance signée (négative à l'intérieur) et de masque intérieur sur une grille de points : un fichier image VTK pour ParaView et les outils basés sur VTK. Il est construit à partir de la surface du corps, à la taille de voxel des entrées du générateur, donc cela prend un moment ; un corps de plus de 400 000 triangles est trop gros pour la page : enregistrez alors le champ depuis un script (`field_bake`). |
| Ensemble de niveaux (.vdb) | `.vdb` | Le même champ sous forme d'ensemble de niveaux OpenVDB : un arbre creux qui ne conserve que la fine bande de voxels autour de la surface, pour les outils qui lisent OpenVDB (moteurs de rendu, simulation et logiciels 3D). La taille de voxel et les unités sont celles du générateur (millimètres) ; la bande étroite est la partie active, l'intérieur est négatif. Construit à partir de la surface comme le `.vti`, avec la même limite de 400 000 triangles ; un fichier de plus de 1.5 GB est refusé (utilisez une taille de voxel plus grande). Le fichier est au format OpenVDB 224, non compressé hormis le conditionnement des valeurs actives propre à OpenVDB, donc tout lecteur OpenVDB peut l'ouvrir. |
| Surface (.vtu) | `.vtu` | Les triangles, avec l'aire et la normale de chacun. |
| 3MF avec données du générateur | `.3mf` | Le maillage en millimètres pour un trancheur, avec le générateur, ses entrées et (pour un treillis gradué) sa plage de parois, en métadonnées du fichier. |

Rien dans ces fichiers ne provient de l'horloge ni de la machine : vous pouvez comparer deux fichiers octet par octet ; un octet modifié signifie une pièce modifiée.

## Pas encore disponible

- Un `.vti` ou un `.vdb` du champ à une taille de voxel autre que celle du générateur.
- La lecture de fichiers `.vdb` (seule l'écriture est prise en charge).
