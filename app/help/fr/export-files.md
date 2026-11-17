---
title: "Exporter pour l'impression, STEP et DXF"
summary: "Exportez la pièce en STL ou 3MF pour l'impression 3D, en solide STEP exact pour les autres logiciels de CAO et de FAO, et une esquisse ou une face plane en DXF pour la découpe laser et au jet d'eau."
keywords: "exporter, enregistrer sous, ifc, bim, ensembles de propriétés, stl, 3mf, impression 3D, trancheur, step, stp, step exact, b-rep, ap242, ap214, fao, atelier d'usinage, fraisage, dxf, laser, jet d'eau, cnc, développé à plat, profil, maillage, facetté"
from: e1de71d5
---

Les exports sont des copies dans d'autres formats. Conservez aussi le fichier `.partcraft.json` : c'est le seul fichier que PartCraft peut rouvrir et modifier.

Les exports portent sur la pièce affichée, en millimètres. Dans un assemblage, STL, 3MF, STEP et Dessin (PDF) exportent au contraire tout l'assemblage : voir [Nomenclature, vues éclatées et pièces mobiles](topic:assembly-bom-explode). S'il n'y a encore aucun solide : « Il n'y a encore aucun solide à exporter. »

## Pour l'impression 3D : STL ou 3MF

1. Facultatif : pour des surfaces rondes lisses, cliquez dans l'espace vide pour ne rien sélectionner, puis réglez **Courbes** sur **Fin (128 par tour)** ou **Très fin (256 par tour)** dans le panneau de droite. STL et 3MF sont toujours constitués de triangles.
2. Choisissez {{ui:Export}}, puis {{ui:STL, for 3D printing}} ou {{ui:3MF, for 3D printing}}.
3. Le fichier est téléchargé. La barre d'état indique par exemple : « Exporté : Part1.stl (binaire, mm, Z vers le haut, 1536 triangles). »

Les deux formats sont **Z vers le haut**, comme l'attendent les imprimantes et les trancheurs. L'espace de PartCraft est Y vers le haut : l'export fait donc pivoter la pièce. Ce qui pointe vers le haut dans PartCraft (perpendiculaire au plan de dessus) pointe vers le haut dans le trancheur, et une pièce esquissée sur le plan de dessus repose à plat sur le plateau. Réglez l'orientation finale dans votre trancheur si nécessaire.

Le 3MF est un format plus récent et plus léger, que les trancheurs lisent avec les unités incluses. Utilisez STL si un programme n'accepte pas le 3MF.

Pour vérifier d'abord que la pièce est fermée, qu'elle tient sur le plateau de votre imprimante et qu'elle repose sur une face plane, utilisez {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} : voir [Préparer une pièce pour l'impression 3D](topic:print-3d).

## Pour les autres programmes de CAO : STEP

Choisissez {{ui:Export}}, puis {{ui:STEP AP242 (exact solid)}}. Le fichier contient la pièce sous forme d'un solide exact unique, en millimètres, orienté Z vers le haut. Les faces rondes sont écrites en cylindres, cônes, sphères et tores exacts, avec de vrais cercles pour leurs arêtes, de sorte que l'autre programme peut reconnaître un trou comme un trou. Un corps ouvert depuis un fichier STEP conserve les faces planes, cylindres, cônes, sphères et tores de ce fichier, qui sortent donc aussi exacts. Les faces sans surface de ce type (le flanc d'une spline, un filetage modélisé, un corps issu d'un maillage STL, OBJ ou 3MF, une spline d'un fichier STEP, les faces balayées et de révolution) restent des facettes planes dans le même solide, et la barre d'état indique leur nombre. La barre d'état indique par exemple : « Exporté : Flange.step (AP242, solide exact, mm, Z vers le haut) : 14 faces sur leur surface exacte (10 cylindriques, 1 conique, 0 sphérique, 0 torique), 0 courbes d'arête ajustées. » Le fichier ne contient que le solide : ni historique, ni esquisses, ni dessin. Si l'autre programme ne lit que AP214, choisissez {{ui:STEP AP214 (exact solid)}} : le même solide, dans ce schéma plus ancien.

Ce qui est exact et ce qui ne l'est pas :

- Les faces planes, cylindres (trous, bossages, congés sur arêtes droites), cônes (fraisures, dépouilles), sphères et tores sont exacts, de même que leurs arêtes droites, circulaires et elliptiques. Le réglage **Courbes** ne les modifie pas.
- Là où deux faces rondes se croisent (un trou percé à travers un arbre), l'arête est une courbe lisse ajustée aux deux surfaces à 0.00001 mm près ; « courbes d'arête ajustées » les compte.
- Une cavité fermée à l'intérieur de la pièce est écrite comme un vide du solide. Plusieurs corps séparés sont écrits comme plusieurs solides.
- Un assemblage n'est pas encore écrit en STEP exact : exportez chaque pièce.

Le fichier a été vérifié en le relisant avec OpenCascade, qui signale des solides valides dont les volumes ont été calculés à la main. Il n'a pas encore été ouvert dans tous les logiciels de CAO ou de FAO ; si l'un d'eux refuse un fichier, {{ui:STEP (faceted, mesh kernel)}} écrit la même forme en faces planes (dans les axes propres de PartCraft, Y vers le haut). Merci de nous le signaler via {{ui:Help}} › {{ui:Report a problem}}.

Pour l'usinage, l'espace de travail Fabrication écrit aussi le solide exact dans les coordonnées de travail propres au montage : voir [Créer des parcours d'outil et du G-code](topic:manufacture#exact-step-for-the-shop).

## Pour les logiciels BIM : IFC avec toutes les propriétés

Choisissez {{ui:Export}}, puis {{ui:IFC 4 (with every property)}}. Le fichier écrit la pièce comme un élément IFC 4 pour les maquettes de bâtiments et d'installations, sa forme en triangles (Z vers le haut, en millimètres), avec ce que PartCraft sait d'elle sous forme d'ensembles de propriétés :

| Ensemble de propriétés | Contient |
|---|---|
| **PartCraft_Part** | Nom, matériau et sa masse volumique, la configuration active, le nombre de corps ; dans un assemblage, aussi le numéro et la description de la pièce |
| **PartCraft_Parameters** | Chaque paramètre de la pièce avec sa valeur ; l'expression d'une formule et une remarque figurent dans la description de la propriété |
| **PartCraft_TitleBlock** | Les champs du cartouche du dessin que vous avez remplis (titre, numéro de dessin, révision, société, dessiné par, vérifié et approuvé par, date, état de surface, tolérance générale) et le format de feuille |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volume, aire de surface, masse (avec un matériau) et encombrement |

Le matériau est rattaché comme matériau IFC, et le numéro de dessin sert de repère de l'élément. Dans un assemblage, chaque pièce est écrite une seule fois comme type portant ses propriétés, et chaque exemplaire est placé à l'endroit où l'assemblage le met, avec ses propres valeurs dans **PartCraft_Instance** : son nom, son numéro de repère dans la nomenclature, et s'il s'agit de la pièce fixe.

## Pour les profils laser, jet d'eau ou CNC : DXF

Deux sortes de DXF, toutes deux en version R12, que tous les logiciels de CAO et de FAO ouvrent :

### Une esquisse

1. Sélectionnez l'esquisse dans l'historique (ou ouvrez-la).
2. Choisissez {{ui:Export}}, puis {{ui:DXF of the sketch or flat face}}. (Le panneau de droite de l'esquisse propose aussi {{ui:Export as DXF}}.)

Vous obtenez `<part> - <sketch>.dxf` dans les coordonnées propres de l'esquisse : lignes, arcs et cercles exacts sur le calque **PROFILE**, géométrie de construction sur **CONSTRUCTION**, points isolés sur **POINTS**.

### Une face plane du solide

1. Cliquez sur une face plane dans la vue (par exemple le dessus d'une platine percée de trous).
2. Choisissez {{ui:Export face as DXF}} dans le panneau de droite, ou {{ui:Export}}, puis {{ui:DXF of the sketch or flat face}}.

Vous obtenez `<part> - face.dxf` : le contour de la face et chaque trou qu'elle contient. Un trou rond (un cercle complet là où un cylindre rencontre la face : un trou percé, ou un trou d'un fichier STEP ouvert) est écrit comme un cercle exact, avec le centre et le rayon propres du trou. Chaque autre contour est une polyligne fermée, et ses arêtes rondes (angles de congé, rainures, arcs) sont remplacées par leurs facettes : réglez donc d'abord **Courbes** sur Fin si l'outil doit les suivre de près. La barre d'état indique le nombre de contours, combien d'entre eux sont des cercles exacts et l'aire de la face.

Si ni esquisse ni face plane n'est sélectionnée : « Ouvrez ou sélectionnez une esquisse, ou choisissez une face plane, pour exporter en DXF. »

## Un dessin

Le dessin PDF a sa propre procédure : [Créer une feuille de dessin](topic:drawing-pdf).

## Formats non disponibles

glTF, OBJ, IGES et Parasolid ne sont pas exportés dans cette version. DWG n'est écrit que par le pack de variantes, sous forme de feuille de dessin : voir [Créer un pack de variantes à partir de vos configurations](topic:variant-pack). Voir [Formats de fichiers](topic:file-formats).
