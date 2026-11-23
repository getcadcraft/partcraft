---
title: Vérifier ce cadre
summary: Prenez les membres en acier d'une construction soudée (un patin, un support, un cadre de tubes et de profilés), posez l'équipement sur ses pieds et les appuis sur le sol, et voyez quelle part de chaque membre et de chaque soudure est utilisée selon AISC 360-16 ou EN 1993. Une aide, en attendant la revue par un ingénieur.
keywords: cadre, construction soudée, patin, patin de pompe, élément de structure, soudure, soudures, vérifier, AISC 360, EN 1993, taux d'utilisation, utilisation, appui, équipement, charge, profil creux, HSS, RHS, CHS, ingénieur
from: 032e34ee
---

{{ui:Vérifier ce cadre}} prend les membres droits en acier d'une construction soudée, en construit un cadre, le calcule sous le poids de l'acier et de l'équipement que vous y posez, et contrôle chaque membre et chaque soudure là où les membres se rejoignent. Un calcul, un tableau.

:::warning
C'est une **aide en attendant la revue par un ingénieur**. Ce n'est pas un visa, et un résultat favorable n'est pas une conception. Il utilise les lignes médianes des membres telles que dessinées, considère chaque assemblage comme soudé sur tout le pourtour de la section, prend la jambe du cordon sur la paroi de la section (jusqu'à 8 mm) sauf si vous la réglez, et ne contrôle ni les boulons, ni les platines, ni les platines d'assise, ni les ancrages, ni le matage, ni le cisaillement de bloc, ni la fatigue, ni le levage.
:::

## Lancer le calcul

1. Dessinez les membres avec {{ui:Élément de structure}} (les profilés proviennent du tableau des sections).
2. Ouvrez {{ui:Vues}} › {{ui:Vérifier ce cadre}}. Indiquez où le cadre repose (un **appui** à chaque pied : articulé, encastré ou à rouleau ; {{ui:Appuis articulés aux pieds}} en place un à chaque extrémité basse de membre) et ce qui le charge (**équipement** : masse, centre de gravité, points de fixation au sol, et une poussée horizontale facultative).
3. Choisissez la norme : **ASCE 7 + AISC 360-16** ou **EN 1990 + EN 1993**. Réglez la nuance d'acier et, pour AISC, la résistance du métal d'apport (482.6 MPa correspond à E70).
4. Appuyez sur {{ui:Vérifier}}. {{ui:Enregistrer le rapport en CSV}} écrit chaque tableau, avec la ligne « non revu » en premier.

Le cadre est lu en millimètres, l'axe vertical de la pièce étant vers le haut. Les points d'appui et d'équipement sont saisis sous la forme x y z dans le même repère, z étant la hauteur.

Une extrémité de membre qui tombe au milieu d'un autre membre le coupe à cet endroit, de même qu'un pied ou un point de fixation au sol situé sur la ligne d'un membre. Un poids est réparti entre les points de fixation au sol comme un corps rigide ; un centre de gravité en dehors des pieds, ou une force de levage à un pied, est signalé et jamais masqué.

## Ce que vous obtenez

- L'élément le plus sollicité et l'indication d'une éventuelle défaillance. Les éléments que le contrôle ne peut pas juger (un profilé absent du tableau, un acier sans coefficient dans la norme) sont comptés et nommés, jamais comptés comme réussis.
- Une ligne par membre et par groupe de soudures : la part utilisée, le contrôle déterminant et sa clause, et la combinaison de charges qui a gouverné.
- Les mêmes tableaux dans le rapport.

## Ce qui est contrôlé

Profils creux (RHS, SHS, CHS, tube) et profils en I pour la traction, la compression, la flexion, le cisaillement et leur interaction ; soudures d'angle et à pénétration complète par la méthode vectorielle élastique. Parois compactes en flexion uniquement pour les profils creux ; les parois élancées sont signalées comme non contrôlées. Certaines constantes ont été tirées des normes et n'ont pas encore été comparées à un exemplaire imprimé ; le rapport indique chaque source.

Voir [Cadres à partir de profilés d'acier](topic:structural-members) pour dessiner les membres et obtenir leur liste de débit.
