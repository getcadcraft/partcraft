---
title: Ouvrir un modèle .3dm comme corps solide
summary: Importer les maillages, polysurfaces et blocs d'un fichier .3dm dans PartCraft comme un seul corps solide que vous pouvez découper, compléter et esquisser ; d'où viennent les triangles, et ce qui est laissé de côté.
keywords: 3dm, nurbs, polysurface, brep, surfaces, maillage de rendu, extrusion, blocs, import, maillage vers solide, unités, corps importé
from: 8ae9571b
---

PartCraft ouvre les fichiers `.3dm` comme des **corps solides**, de la même manière qu'il ouvre un [maillage STL, OBJ ou 3MF](topic:open-meshes). Le corps fonctionne comme tout autre solide : vous pouvez le découper, y ajouter de la matière, le percer, le répéter et esquisser sur ses faces planes. Il n'a pas d'historique propre.

## Ouvrir le fichier

1. Choisissez {{ui:Ouvrir}} ou appuyez sur {{key:Mod+O}}, puis sélectionnez le fichier `.3dm`. Ou déposez-le dans la vue 3D.
2. PartCraft le lit et affiche ce qu'il a trouvé : le nombre d'objets comportant des faces, combien de faces proviennent des maillages enregistrés dans le fichier et combien PartCraft a lui-même tessellées, chaque réparation, et si le résultat est **fermé**.
3. Vérifiez **Unités du fichier** (le fichier indique les siennes ; une unité que PartCraft ne reconnaît pas, comme le yard, est convertie en millimètres) et **Axe vertical dans le fichier**.
4. Choisissez {{ui:Ouvrir comme corps}}, ou **Utiliser pour** puis {{ui:Ajouter à cette pièce}} lorsque la pièce possède déjà des fonctions.

## D'où viennent les triangles

PartCraft construit les corps à partir de triangles dans cette version : chaque surface du fichier devient donc de petites faces planes. Pour chaque face d'une polysurface (et de chaque extrusion), il prend le **maillage de rendu enregistré dans le fichier** lorsqu'il existe ; sinon il **tessèle lui-même** (plans, surfaces NURBS, surfaces de révolution, courbes extrudées et extrusions, découpées par leurs arêtes). Les faces d'une même polysurface partagent leurs points d'arête, si bien qu'une polysurface fermée arrive fermée. Une face sur un type de surface que PartCraft ne lit pas encore est laissée de côté ; la boîte de dialogue indique combien et de quel type, et le résultat ne se referme alors généralement pas.

## Tout le contenu du fichier devient un seul corps

Chaque maillage, polysurface et extrusion visible, et chaque placement d'un bloc, entre dans **un seul** corps, à l'endroit où le fichier le place. Les objets masqués, ou situés sur un calque désactivé, sont laissés de côté. Lorsque le fichier contient plusieurs solides séparés, le corps comporte plusieurs morceaux : ouvrez chacun depuis son propre fichier si vous voulez des corps séparés.

## Ce qui est laissé de côté (et signalé)

Les courbes, points, nuages de points, textes, cotes, hachures et lumières sont laissés de côté : un corps ne prend que des faces. Sont aussi laissés de côté les objets SubD (convertissez-les d'abord en maillages ou en polysurfaces dans le programme qui a créé le fichier), les blocs liés depuis d'autres fichiers, ainsi que les couleurs, les calques et les noms (les corps PartCraft n'en ont pas en propre ici).

## Lorsque le fichier ne se referme pas

Les polysurfaces ouvertes et les surfaces (une seule surface découpée, une forme avec une face manquante) n'ont pas d'intérieur et ne peuvent donc pas être un solide. La boîte de dialogue indique combien d'ouvertures restent et n'ajoute rien. Joignez ou fermez la forme dans le programme qui l'a créée, enregistrez, puis rouvrez-la. Voir [Lorsqu'un maillage n'est pas fermé](topic:open-meshes#when-a-mesh-does-not-close).
