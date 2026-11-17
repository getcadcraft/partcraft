---
title: "Formats de fichiers"
summary: "Tous les fichiers que PartCraft lit et écrit, avec leurs extensions, unités, axes, et ce que chacun conserve ou perd."
keywords: "formats, types de fichiers, extensions, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, maillage, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, unités, Z vers le haut"
from: 4d0ecbee
---

| Format | Extension | Ouvrir | Enregistrer ou exporter | Unités | Axe vertical | Conserve |
|---|---|---|---|---|---|---|
| Pièce PartCraft | `.partcraft.json` | Oui | {{ui:Save}} | mm | Y | L'historique complet : esquisses, relations, cotes, fonctions, désactivations, retour en arrière, réglage des courbes, réglages du dessin et tolérancement géométrique, texte STEP importé par une version antérieure |
| Assemblage PartCraft | `.partcraft-asm.json` | Oui | {{ui:Save}} dans un assemblage | mm | Y | Chaque pièce (intégrée), les exemplaires et leurs positions, les liaisons |
| STL (binaire ou texte) | `.stl` | Oui, comme corps solide : [Ouvrir un STL, OBJ ou 3MF](topic:open-meshes) | {{ui:STL, for 3D printing}} | mm (demandé à l'ouverture) | Z | Uniquement les triangles du solide |
| 3MF | `.3mf` | Oui, comme corps solide | {{ui:3MF, for 3D printing}} | mm (indiqué dans le fichier) | Z | Le solide sous forme d'un seul objet maillé |
| OBJ | `.obj` | Oui, comme corps solide (faces seulement) | Non | demandé à l'ouverture | Z ou Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Oui, comme corps solide lu en triangles (faces courbes dessinées en facettes ; les faces planes, cylindres, cônes, sphères et tores du fichier sont conservés pour l'export exact) : [Ouvrir un fichier STEP](topic:import-step) | | mm (d'après l'unité du fichier) | Z, ou Y si vous l'indiquez | Les solides et corps de surface, les assemblages avec chaque pièce en place ; ni couleurs, ni noms, ni arbre d'assemblage, ni PMI |
| `.3dm` | `.3dm` | Oui, comme un seul corps solide à partir de ses maillages et surfaces (maillages de rendu enregistrés, sinon tessellation) : [Ouvrir un modèle .3dm](topic:open-3dm-files) | | D'après l'unité du fichier | Z, ou Y si vous l'indiquez | Maillages, polysurfaces, extrusions et placements de blocs en un seul corps ; ni courbes, ni couleurs, ni calques, ni noms |
| STEP AP242, exact | `.step` | | {{ui:STEP AP242 (exact solid)}} | mm | Z | Un solide exact : faces planes, cylindres, cônes, sphères et tores sur leurs surfaces exactes, cercles et droites exacts en arêtes ; les flancs en spline, les filetages modélisés, les corps issus de fichiers maillés et les faces en spline d'un fichier STEP restent des facettes. Le STEP à utiliser pour les autres logiciels de CAO et de FAO |
| STEP AP214, exact | `.step` | | {{ui:STEP AP214 (exact solid)}} | mm | Z | Le même solide exact dans le schéma AP214 plus ancien, pour les logiciels qui ne lisent que celui-ci |
| STEP AP242, facetté | `.step` | | {{ui:STEP (faceted, mesh kernel)}} | mm | Y | Un solide fermé à faces planes : surfaces rondes en facettes. Pour un logiciel qui refuse le fichier exact |
| STEP AP214, facetté | `.step` | | {{ui:STEP AP214 (faceted, mesh kernel)}} | mm | Y | Le même solide dans le schéma AP214 plus ancien, pour les logiciels qui ne lisent que celui-ci |
| Paquet USD | `.usdz` | Non | {{ui:USD package (.usdz)}} | m | Z | Le solide avec son matériau, son volume et sa masse ; un assemblage avec chaque pièce une fois et chaque exemplaire placé : [Exporter en USD](topic:usd) |
| IFC 4 | `.ifc` | Non | {{ui:IFC 4 (with every property)}} | mm | Z | La forme en triangles, le matériau, chaque paramètre, le cartouche, les quantités ; les pièces d'un assemblage en types, et ses exemplaires placés |
| DXF R12, esquisse | `.dxf` | Non | {{ui:DXF of the sketch or flat face}} avec une esquisse sélectionnée | mm | x, y propres à l'esquisse | Lignes, arcs et cercles exacts, points ; calques PROFILE, CONSTRUCTION, POINTS |
| DXF R12, face | `.dxf` | Non | {{ui:DXF of the sketch or flat face}} avec une face plane choisie | mm | x, y propres à la face | Les contours de la face : trous ronds en cercles exacts, le reste en polylignes fermées (arêtes rondes en facettes) |
| Dessin PDF | `.pdf` | Non | {{ui:Drawing (PDF): views, section, detail, GD&T}} | mm sur une feuille A3 | | Vues de face, de dessus, de droite, isométrique, coupe et détail dessinées à partir de facettes, arêtes cachées, encombrements, symboles de tolérancement géométrique, cartouche |

## Les fichiers PartCraft

Les deux sont des fichiers texte (JSON). Le solide n'est jamais enregistré : PartCraft le reconstruit à partir de l'historique, si bien que les fichiers restent petits et correspondent toujours à l'historique.

- Chaque fichier porte un numéro de version. Cette version écrit chaque fichier de pièce avec la plus petite version capable de contenir ce qu'il utilise (2 à 5 ; un corps issu d'un maillage nécessite 5), et ouvre toutes les versions antérieures. Un fichier provenant d'une version plus récente de PartCraft est refusé, avec un message indiquant les deux versions.
- Chaque valeur est vérifiée à l'ouverture d'un fichier. Les noms perdent leurs caractères de contrôle ; les nombres hors plage, les références à des fonctions absentes et les types de fonctions inconnus sont refusés, avec une raison simple.
- Ne modifiez pas ces fichiers à la main, sauf si vous connaissez le format. Un fichier qui ne passe pas les vérifications ne s'ouvrira pas.
- Une pièce contenant un grand solide STEP importé par une version antérieure peut dépasser 50 MB, la taille maximale que PartCraft ouvre comme fichier de pièce (voir [Dépannage](topic:troubleshooting#file-problems)).

## Facettes et exactitude

STL et 3MF sont toujours constitués de facettes, selon le réglage **Courbes**, de même que le DXF de face, sauf pour les trous ronds, qui sont des cercles exacts. Le DXF d'esquisse contient des arcs et des cercles exacts, car il vient directement de l'esquisse. Cette version construit toutes les pièces avec le noyau maillage ; les vues du dessin (coupes comprises) sont donc aussi en facettes. L'export STEP exact fait exception : le noyau connaît la surface exacte de chaque face à partir de l'esquisse (ou du fichier STEP dont un corps a été ouvert), si bien que les faces rondes sont écrites en cylindres, cônes, sphères et tores exacts, quel que soit le réglage **Courbes** (voir [Exporter pour l'impression, STEP et DXF](topic:export-files#for-other-cad-programs-step)).

## Non pris en charge dans cette version

| Format | État |
|---|---|
| glTF, IGES, Parasolid, ACIS (en entrée ou en sortie) ; export OBJ | Pas encore disponible |
| DWG | Écrit uniquement par [le pack de variantes](topic:variant-pack), sous forme de feuille de dessin de chaque configuration. Non lu, et aucun autre export. Exportez en DXF ; tous les logiciels de CAO ouvrent le DXF R12 |
| STEP d'assemblage et dessin d'un assemblage | Pas encore disponible. Exportez chaque pièce en STEP exact ; STL, 3MF et la nomenclature s'exportent depuis un assemblage |
| Fichiers natifs de pièces et d'assemblages d'autres logiciels (sauf `.3dm`, qui s'ouvre en un seul corps) | Pas encore disponible |

Voir [Ce qui n'est pas encore disponible](topic:not-built-yet).
