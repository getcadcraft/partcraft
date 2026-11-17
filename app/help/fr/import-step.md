---
title: Ouvrir un fichier STEP et construire dessus
summary: Importez un modèle STEP de fournisseur ou d'un autre logiciel CAO dans PartCraft comme corps solide, comme nouvelle pièce ou ajouté à la pièce en cours, définissez le sens vertical, puis ajoutez-y des esquisses et des fonctions.
keywords: step, stp, importer, ouvrir step, ap203, ap214, ap242, modèle fournisseur, solide brut, solide importé, axe vertical, z vers le haut, y vers le haut, triangles, facetté, STEP d'assemblage
from: ca0eca5f
---

PartCraft ouvre les fichiers STEP (`.step` ou `.stp`, AP203, AP214 et AP242) comme **corps solides** sur lesquels vous pouvez esquisser, couper, percer et combiner vos propres fonctions. Le corps n'a pas d'historique propre : vous ne pouvez pas modifier les cotes avec lesquelles il a été créé, seulement y ajouter de la matière ou en retirer.

Cette version construit toutes les pièces avec le noyau de maillage : un fichier STEP est donc **lu sous forme de triangles**. Les faces planes restent planes, et les faces courbes (cylindres, cônes, sphères, tores, surfaces B-spline) deviennent beaucoup de petites faces planes. Son volume reste à moins d'un pour cent près de celui du modèle exact. Conserver exactement les faces courbes nécessite un noyau exact, qui n'est pas présent dans cette version.

## Ouvrir un fichier STEP

1. Choisissez {{ui:Open}} ou appuyez sur {{key:Mod+O}}, puis sélectionnez le fichier `.step` ou `.stp`. Vous pouvez aussi le déposer dans la vue 3D.
2. PartCraft lit le fichier et affiche ce qu'il a trouvé, par exemple : « Fichier AP214 : 1 solide, 10 faces, lu sous forme de triangles. » Sont indiqués ensuite le nombre de triangles, ce qui a dû être omis ou fusionné, et si le résultat est fermé.
3. Vérifiez **Haut dans le fichier**. Un fichier STEP indique sa propre unité (millimètres, pouces, mètres…) ; PartCraft la convertit en millimètres, si bien que **Unités du fichier** affiche Millimètres, « indiqué par le fichier ». **Taille ici** indique ses dimensions.
4. Choisissez {{ui:Open as a body}} pour une pièce vide, ou {{ui:Add to this part}} / {{ui:New part}} lorsque la pièce comporte déjà des fonctions. L'ajout demande ce qu'il faut faire avec **Utiliser pour** : ajouter, couper ou ne garder que la partie commune.

Une fonction **Imported1** apparaît dans l'historique, et la barre d'état indique par exemple « plate.step est un corps solide : 57995.937 mm³, 6 faces planes où esquisser. »

## Un STEP d'assemblage

Un assemblage arrive comme **un seul corps**, avec chaque pièce à l'endroit où le fichier la place (« 3 pièces placées dans le fichier arrivent là où elles se trouvent »). Une pièce utilisée deux fois arrive deux fois. Les noms des pièces et l'arborescence de l'assemblage ne sont pas conservés.

## Définir le sens vertical

La plupart des logiciels CAO utilisent Z vers le haut ; PartCraft utilise Y vers le haut. Par défaut, PartCraft tourne le fichier pour que son Z pointe vers le haut ici. Si la pièce arrive couchée sur le côté, sélectionnez **Imported1** et réglez **Haut dans le fichier** sur **Y vers le haut**. **Unités du fichier** et **Utiliser pour** peuvent aussi être modifiés à cet endroit ; chaque modification constitue une étape d'annulation.

## Construire dessus

- Cliquez sur une face plane du corps et choisissez {{ui:Sketch on this face}}. Les faces planes du modèle STEP gardent leur place lorsque le corps est reconstruit.
- Ajoutez des coupes, trous, bossages, répétitions et symétries comme sur n'importe quelle pièce.
- Vérifiez sa taille dans la zone **Pièce** : volume, aire de surface, dimensions.

Les congés, chanfreins et coques nécessitent le noyau exact, comme pour toute pièce de cette version ([Le noyau de maillage](topic:solid-kernels)).

## Où il est conservé

Les triangles sont stockés **à l'intérieur** du fichier `.partcraft.json`, si bien que le fichier de pièce est autonome : vous n'avez plus besoin du fichier STEP.

## Messages

| Message | Signification |
|---|---|
| « part.stp » n'est pas un fichier STEP (il ne commence pas par ISO-10303-21). | Le fichier n'est pas du texte STEP brut. Demandez à l'expéditeur un fichier STEP AP203, AP214 ou AP242 |
| « Le fichier STEP n'a pas pu être lu : sa section de données est absente ou endommagée. » | Le fichier est tronqué ou endommagé. Copiez-le à nouveau |
| « Le fichier STEP ne contient aucun corps solide ni surface : il n'y a rien à importer. » | Le fichier ne contient que des dessins, des points ou des données. Demandez un solide |
| « Ce fichier STEP est trop volumineux (plus de 60 Mo) pour être importé ici. » et les autres limites du lecteur (entrées, faces, triangles) | Simplifiez le modèle à la source, ou envoyez les pièces une par une |
| « … lignes endommagées du fichier ont été ignorées. » | Certaines lignes n'ont pas pu être lues ; le reste a été importé. Vérifiez le corps |
| « … faces n'ont pas pu être transformées en triangles et ont été omises. » | Ces faces laissent des trous, que PartCraft tente de combler ; si le corps n'est pas fermé, il n'est pas ajouté |
| « … faces d'un type non lu (…) ont été ignorées. » | Un type de surface rare. Demandez le modèle avec des surfaces planes ou B-spline |
| « Il n'est pas fermé … » | Les faces ne forment pas un solide fermé (modèle surfacique, ou faces omises). PartCraft montre les ouvertures et n'ajoute rien |

## Limites

- Les faces courbes sont dessinées et mesurées comme des facettes planes, comme dans toute pièce construite par cette version. PartCraft conserve avec le corps les faces planes, cylindres, cônes, sphères et tores du fichier : {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} les réécrit donc comme de vraies surfaces, les trous comme des trous, avec les fonctions que vous ajoutez. Les faces données par le fichier sous forme de splines, de balayages ou de surfaces de révolution restent des facettes à l'export. Une pièce enregistrée avant la 0.9.1 n'a pas de surfaces conservées : rouvrez le fichier STEP pour les obtenir.
- {{ui:Export}} › {{ui:DXF of the sketch or flat face}} avec une face plane choisie écrit un trou rond du fichier comme un vrai cercle.
- Les couleurs, les noms des corps, la structure de l'assemblage et les PMI (tolérances du fichier) ne sont pas lus.
- Outre STEP, PartCraft ouvre les maillages STL, OBJ et 3MF ([Ouvrir un fichier STL, OBJ ou 3MF](topic:open-meshes)) et les fichiers `.3dm` ([Ouvrir un modèle .3dm](topic:open-3dm-files)) comme corps solides. Les fichiers IGES et les fichiers natifs d'autres logiciels ne sont pas pris en charge.
- Une pièce contenant un solide STEP importé par une version dotée du noyau exact conserve le texte STEP ; cette version ignore cette fonction (« pas encore disponible »). Rouvrez le fichier STEP pour l'importer sous forme de triangles.
