---
title: Conserver et réutiliser les chutes
summary: Après un calepinage, ce qui reste de chaque plaque devient un reste numéroté dans une liste de stock ; le calepinage suivant utilise d'abord les restes, puis les plaques entières.
keywords: imbrication, calepinage, chute, reste, stock, plaque, feuille, réutilisation, matière, épaisseur, CSV
from: 7a68d4b8
---

Lorsque vous imbriquez des pièces sur des plaques, la partie utilisable de chaque plaque (et non les éclats) peut être conservée comme **reste** : un contour numéroté (R-0001, R-0002 …) avec la matière, l'épaisseur, ses dimensions et le travail dont il provient. La liste est enregistrée avec le fichier et peut être enregistrée en CSV.

## Les réutiliser

Saisissez la **matière** et l'**épaisseur**, laissez {{ui:Utiliser d'abord les restes}} activé, puis lancez l'imbrication. Les restes de même matière et de même épaisseur sont essayés du plus petit au plus grand ; les pièces qui y tiennent y sont placées, à l'intérieur du contour propre du reste et à distance de son bord ; ce qui ne tient pas est placé sur des plaques neuves. Le rapport de travail indique les restes utilisés et ce qu'il reste. Lorsque {{ui:Enregistrer les chutes comme restes}} est activé, {{ui:Ajouter ce travail au stock}} l'inscrit ensuite dans la liste de stock : un reste utilisé est marqué **Utilisé** (avec le travail) et n'est plus proposé ; ce qu'il reste devient un nouveau reste qui garde le lien avec son parent.

## Ce qui compte comme reste

La chute est mesurée avec l'espacement que vous avez défini (aucune pièce n'est plus près que cela d'une coupe). Les bandes plus étroites qu'un vingtième de la plaque et les morceaux inférieurs à 2 % de celle-ci sont considérés comme des rebuts ; modifiez ces deux seuils si votre atelier conserve de plus petits morceaux. Les trous à l'intérieur des pièces appartiennent aux pièces et ne sont pas conservés. Une bobine ne donne pas de restes.

## Dans le dessin

Le DXF d'un calepinage dessine le contour de chaque reste sur le calque REMNANTS, avec son numéro au centre, afin que les morceaux puissent être repérés au moment de la coupe.

Pas encore disponible : le sens du grain d'un reste, une feuille de codes-barres ou d'étiquettes, les restes de bobines, le stock partagé entre plusieurs projets.
