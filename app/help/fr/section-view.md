---
title: Voir l'intérieur avec une vue en coupe
summary: Coupez la pièce ou un assemblage avec un plan pour voir l'intérieur, les faces de coupe étant remplies. Déplacez le plan avec un curseur, coupez sur une face plane que vous cliquez, inversez le côté retiré.
keywords: coupe, vue en coupe, couper, découpe, coupe transversale, écrêtage, intérieur, tranche, plan, bouchons, hachures, coupe d'assemblage
from: a7555f7c
---

La **vue en coupe** coupe le modèle avec un plan pour voir à l'intérieur : trous, poches, épaisseurs de paroi, manière dont les pièces d'un assemblage s'emboîtent. Elle fonctionne dans tous les espaces de travail et dans un assemblage. Ouvrez-la depuis le menu {{ui:Vues}} du groupe **Affichage**, avec {{ui:Vue en coupe}}, ou appuyez sur {{key:X}}. Une carte s'ouvre en bas à gauche de la vue.

Seule la vue est coupée. La pièce, son volume, ses mesures et ses exports restent complets, et rien n'est enregistré dans le fichier.

## Couper au milieu

1. Appuyez sur {{key:X}}. La pièce est coupée par le plan de face en son milieu, et les faces de coupe sont remplies d'une teinte.
2. Faites glisser le curseur {{ui:Position}}, ou saisissez une distance en mm, pour déplacer la coupe.
3. Choisissez un autre {{ui:Plan}} : {{ui:Face (XY)}}, {{ui:Dessus (XZ)}} ou {{ui:Droite (YZ)}}.
4. Cochez {{ui:Retirer l'autre côté}} pour garder à la place la moitié qui a été retirée.

## Couper sur une face

1. Cliquez sur {{ui:Choisir une face}} sur la carte.
2. Cliquez sur une face plane dans la vue. La coupe commence affleurant à cette face, le plan se trouvant sur celle-ci.
3. Déplacez {{ui:Position}} pour aller plus profond. Le nombre est la distance suivant la direction sortante de la face.

## Clics et coupe

Les clics dans la vue portent sur ce qui reste après la coupe : vous pouvez donc choisir une face ou une arête à l'intérieur de la pièce, y démarrer une esquisse ou y mesurer. Décochez {{ui:Remplir les faces de coupe}} pour voir à travers la coupe, dans les parties creuses.

## Fermer

Appuyez sur {{key:Esc}}, appuyez de nouveau sur {{key:X}}, ou cliquez sur {{ui:Fermer}}. Ouvrir une esquisse ou la feuille de dessin la ferme aussi.

:::tip
Pour une coupe sur la feuille de dessin (hachurée, avec sa ligne de plan de coupe), utilisez {{ui:Dessin}} : voir [Créer un dessin (PDF)](topic:drawing-pdf).
:::
