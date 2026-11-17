---
title: Ouvrir un STL, OBJ ou 3MF comme corps solide
summary: Transformer un maillage issu d'un scanner, d'un site d'impression 3D ou d'un autre programme en solide que vous pouvez découper, compléter et esquisser ; ce que PartCraft répare au passage, et ce qu'il ne peut pas réparer.
keywords: stl, obj, 3mf, maillage, maillage vers solide, convertir un maillage, scan, étanche, réparation, trous, espaces, unités, axe vertical, corps importé, faces planes
from: 7b948471
---

PartCraft ouvre les maillages STL, OBJ et 3MF comme **corps solides**. Le corps fonctionne comme tout autre solide : vous pouvez le découper, y ajouter de la matière, le percer, le répéter, l'utiliser dans un assemblage ou pour l'usinage, et esquisser sur ses faces planes. Il n'a pas d'historique propre : un maillage n'est qu'une suite de triangles, ses dimensions ne peuvent donc pas être modifiées, seulement complétées ou découpées.

## Ouvrir un maillage

1. Choisissez {{ui:Ouvrir}} ou appuyez sur {{key:Mod+O}}, puis sélectionnez le fichier `.stl`, `.obj` ou `.3mf`. Ou déposez-le dans la vue 3D.
2. PartCraft le lit, répare ce qui peut l'être sans risque, et affiche ce qu'il a trouvé : nombre de triangles et de points, chaque réparation, et si le maillage est désormais **fermé**.
3. Vérifiez **Unités du fichier** et **Axe vertical dans le fichier**. STL et OBJ n'indiquent pas leurs unités : le millimètre est donc une supposition ; un fichier 3MF indique les siennes. La ligne **Taille ici** montre la taille du corps avec votre choix, ce qui permet de repérer facilement une pièce arrivant 25.4 fois trop petite (elle était en pouces).
4. Si la pièce à l'écran est vide, choisissez {{ui:Ouvrir comme corps}}. Si elle possède déjà des fonctions, choisissez **Utiliser pour** (ajouter à la pièce, la découper ou ne garder que la zone commune), puis {{ui:Ajouter à cette pièce}}, ou {{ui:Nouvelle pièce}} pour repartir du maillage.

Une fonction **Imported1** apparaît dans l'historique. La barre d'état indique par exemple : « bracket.stl est un corps solide : 15200.512 mm³, 14 faces planes où esquisser. »

## Ce que PartCraft répare

| Réparation | Ce que cela signifie |
|---|---|
| Sommets doubles réunis | Un STL répète chaque sommet pour chacun de ses triangles ; ils sont réunis en un seul point |
| Triangles sans surface supprimés | Éclats dont les sommets sont alignés sur une même droite |
| Triangles doubles supprimés | Un triangle écrit deux fois n'est gardé qu'une fois ; deux triangles orientés en sens opposé (une paroi intérieure) sont tous deux supprimés |
| Petits espaces fermés | Arêtes qui se touchent presque (à moins d'un millième de la taille de la pièce) sont réunies |
| Trous comblés | Une ouverture dont le bord est plan est comblée quelle que soit sa taille ; une ouverture gauchie seulement si elle est petite |
| Triangles retournés vers l'extérieur | Les triangles orientés dans le mauvais sens sont retournés pour s'accorder avec leurs voisins, et toute la surface est orientée vers l'extérieur |

## Lorsqu'un maillage n'est pas fermé

Un solide a besoin d'une surface sans ouverture. Lorsque PartCraft ne parvient pas à en fermer une, la boîte de dialogue indique combien d'ouvertures et d'arêtes libres restent, et aucun corps n'est ajouté. Fermez les ouvertures dans le programme qui a créé le maillage, ou exportez-le à nouveau sous forme de maillage fermé (étanche), puis rouvrez-le.

PartCraft laisse une ouverture intacte lorsque la combler risquerait de deviner mal : un grand trou gauchi, ou deux ouvertures dans le même plan (une face en anneau manquante, où combler chaque bord recouvrirait le trou du centre). Une arête partagée par plus de deux triangles est aussi signalée : une telle surface n'a pas d'intérieur net.

## Esquisser sur ses faces planes

Les zones planes formées de nombreux triangles sont fusionnées chacune en une seule **face plane**, pour qu'une esquisse puisse s'y poser : cliquez sur la face et choisissez {{ui:Esquisse sur cette face}}. Une face découpée ou complétée plus tard reste une face. Les zones arrondies (un trou, un congé) restent des triangles : ce ne sont pas des faces sélectionnables, et la vue dessine leur contour à partir de l'angle entre les triangles.

## Modifier plus tard

Sélectionnez **Imported1** pour voir le fichier d'origine, le nombre de triangles et les réparations effectuées. **Unités du fichier**, **Axe vertical dans le fichier** et **Utiliser pour** peuvent être modifiés à cet endroit ; chaque modification est une étape d'annulation.

## Où il est conservé

Le maillage réparé est stocké **à l'intérieur** du fichier `.partcraft.json`, si bien que vous n'avez plus besoin du fichier de maillage. Un fichier de pièce contenant un corps maillé est en version 5 : une version antérieure de PartCraft le refuse à cause de sa version. Un maillage de 200 000 triangles ajoute environ 1.2 Mo.

## Limites

- Au plus 3 millions de triangles et 200 Mo dans un fichier.
- Un corps issu d'un maillage est construit par le noyau de maillage. Avec le noyau exact activé (développeurs uniquement), le programme le signale et ne le construit pas.
- Les matériaux OBJ, les coordonnées de texture et les courbes de forme libre sont laissés de côté ; les couleurs, matériaux et objets de support 3MF sont laissés de côté (la boîte de dialogue indique combien d'objets ont été omis).
- Le corps est aussi fin que le maillage : un STL grossier donne des faces rondes grossières. Les trous que vous percez dedans sont aussi ronds que vos propres fonctions.
