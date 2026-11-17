---
title: Combiner, déplacer et mettre à l'échelle des corps ; répétitions le long d'un chemin
summary: Créez des corps séparés, puis joignez-les, découpez-les ou intersectez-les après coup, déplacez-les, faites-les pivoter, alignez-les ou copiez-les, mettez-les à l'échelle uniformément ou selon X, Y et Z, et copiez des fonctions ou des corps le long d'une courbe.
keywords: corps, corps multiples, nouveau corps, combiner, booléen, joindre, découper, intersecter, soustraire, union, conserver les outils, déplacer le corps, copier le corps, pivoter le corps, aligner, translation, mise à l'échelle, échelle non uniforme, étirer, affine, répétition le long d'un chemin, répétition le long d'une courbe, réseau le long d'un chemin, répétition pilotée par une courbe
from: 6b1ea820
---

:::note
**Pas encore disponible dans cette version.** Travailler avec plusieurs corps nécessite un noyau géométrique exact, que cette version de PartCraft ne possède pas : elle construit chaque pièce avec le noyau maillé. [Ce qui n'est pas encore disponible](topic:not-built-yet) indique quoi faire à la place. Le reste de cette page décrit le fonctionnement avec un noyau exact.
:::

Une pièce peut contenir plusieurs solides. Chaque solide séparé est un **corps**. La plupart des fonctions ajoutent de la matière à chaque corps qu'elles touchent ou en retirent ; les outils de cette page agissent sur des corps entiers que vous choisissez. Ils se trouvent dans le menu {{ui:Plus}} du groupe Fonctions : {{ui:Combiner}}, {{ui:Déplacer le corps}}, {{ui:Mettre le corps à l'échelle}} et {{ui:Répétition le long d'un chemin}}. Tous nécessitent le noyau exact (OpenCascade).

## Créer un corps séparé

Réglez l'**Opération** d'une extrusion ou d'une révolution sur **Nouveau corps** dans son panneau de droite (les balayages et les lissages l'ont aussi). Le nouveau solide reste séparé même là où il chevauche les autres. **Intersecter** ne conserve que la partie commune entre la nouvelle forme et ce qui existe déjà.

Les corps portent le nom de la fonction qui les a créés : « Extrude2 ». Une copie prend le nom de son original et de la fonction qui l'a copiée : « Extrude2, copie 1 de Move1 ». Les noms ne changent pas lorsque vous modifiez des cotes en amont, de sorte que les fonctions qui utilisent un corps continuent de le retrouver. Avec deux corps ou plus, le panneau de pièce (cliquez sur un espace vide) les liste avec leurs volumes.

## Renommer ou masquer un corps

Cliquez sur un espace vide de la vue pour afficher le panneau de pièce. Sa liste de corps (affichée lorsque la pièce compte deux corps ou plus) comporte une zone de nom et un bouton {{ui:Masquer}} sur chaque ligne.

- **Renommer :** saisissez un nouveau nom dans la zone, puis appuyez sur {{key:Enter}} ou cliquez ailleurs. Tous les panneaux l'utilisent alors : Combiner, Déplacer le corps, les répétitions. Effacez la zone pour revenir au nom donné par la fonction qui a créé le corps.
- **Masquer :** cliquez sur {{ui:Masquer}} sur sa ligne. Le corps quitte la vue et les clics passent à travers, de sorte que vous pouvez choisir des faces situées derrière. {{ui:Afficher}} le rétablit ; {{ui:Tout afficher}} rétablit tous les corps masqués.

Masquer ne modifie que l'affichage. Un corps masqué est toujours construit, compté dans le volume et les mesures, et enregistré dans les exports STL, 3MF et STEP. Les noms et les corps masqués sont enregistrés dans le fichier de pièce, et chaque modification correspond à une étape de {{ui:Annuler}}.

## Combiner des corps

1. Maj+clic sur une face du corps **cible**, puis sur une face de chaque corps **outil**.
2. Choisissez {{ui:Plus}}, puis {{ui:Combiner}}.
3. Dans le panneau de droite, choisissez l'**Opération** :

| Opération | Résultat |
|---|---|
| Joindre | La cible et les outils ne forment qu'un seul corps |
| Découper | Les outils sont retirés de la cible |
| Intersecter | Seule la partie commune à la cible et à chaque outil est conservée |

**Corps cible** est celui qui conserve son nom. Cochez ou décochez **Corps outils**, ou utilisez **Choisir dans la vue** et cliquez sur leurs faces. **Conserver les corps outils** laisse aussi les outils en place (pratique pour un moule et son âme). Si un corps outil a déjà été consommé par une combinaison précédente, le panneau l'indique au lieu de choisir un autre corps.

## Déplacer ou copier un corps

1. Choisissez {{ui:Plus}}, puis {{ui:Déplacer le corps}}. Le corps le plus récent est coché ; cochez ceux à déplacer.
2. Choisissez le type de **Déplacement** :

| Déplacement | Ce que vous définissez |
|---|---|
| Translation | **ΔX**, **ΔY**, **ΔZ** en millimètres |
| Point à point | **De** et **À** : cliquez près de l'extrémité d'une arête, sur une fonction de point, ou sur un endroit d'une face |
| Rotation autour d'un axe | **Axe** (X, Y, Z, une fonction d'axe, ou **Choisir** : une arête droite, un cercle ou un cylindre) et **Angle (°)** |
| Aligner une face sur une face ou un plan | **Face à déplacer** (une face plane du corps), **Sur** (une face plane ou un plan) |

**Aligner** tourne le corps pour que sa face repose sur l'autre face, face contre face, puis le fait glisser uniquement selon la normale de cette face. **Même sens** le retourne dans l'autre sens. **Copier** conserve l'original et ajoute la copie déplacée comme nouveau corps.

## Mettre un corps à l'échelle

1. Choisissez {{ui:Plus}}, puis {{ui:Mettre le corps à l'échelle}}, et cochez les corps.
2. Saisissez une **Échelle**, ou décochez **Uniforme** et saisissez **Échelle X**, **Échelle Y** et **Échelle Z** (selon les axes du monde).
3. **Autour de** est le point qui reste fixe : le centre de la boîte des corps, ou un point que vous choisissez.

Une mise à l'échelle uniforme est exacte. Une mise à l'échelle non uniforme transforme les cercles en ellipses : un cylindre devient un cylindre elliptique, qu'aucune surface analytique ne peut représenter. Les faces courbes deviennent donc des surfaces B-spline restant à moins de 0.0000004 mm de la forme exacte, tandis que les faces planes et les arêtes droites restent exactes. Le panneau indique ce qui s'est produit. Les facteurs d'échelle doivent être supérieurs à zéro (pour une symétrie, utilisez {{ui:Symétrie}}).

## Copier le long d'un chemin

1. Sélectionnez la fonction à copier dans l'historique, ou ne sélectionnez rien pour copier le corps le plus récent.
2. Choisissez {{ui:Plus}}, puis {{ui:Répétition le long d'un chemin}}. La dernière esquisse non utilisée est prise comme chemin.
3. Dans le panneau de droite, définissez :

| Réglage | Ce qu'il fait |
|---|---|
| **Copier** | Corps (chaque copie devient un nouveau corps) ou Fonctions (jointes ou découpées comme l'original) |
| **Chemin** | Cochez des esquisses, ou **Choisir des arêtes du modèle** ; les morceaux doivent se joindre bout à bout |
| **Nombre** | Nombre total, original compris |
| **Espacement** | Égal (réparti jusqu'à l'extrémité d'un chemin ouvert, ou sur tout le tour d'un chemin fermé) ou une distance fixe |
| **Orientation** | Suivre le chemin (chaque copie tourne avec lui) ou Fixe (les copies restent parallèles) |
| **Inverser le sens** | Parcourir le chemin dans l'autre sens |

Les copies commencent là où le chemin passe au plus près de l'original et sont espacées selon la longueur de la courbe.

Les répétitions linéaires et circulaires peuvent aussi copier des corps : cochez **Copier les corps** dans leur panneau et choisissez les corps ; chaque copie est un nouveau corps.

## Limites

- Les corps nécessitent le noyau exact ; le noyau maillé ne conserve qu'un solide et l'indique.
- Une mise à l'échelle non uniforme transforme les faces courbes en approximations B-spline proches (voir ci-dessus), et non en cylindres ou cônes exacts ; les surfaces décalées ne peuvent pas encore être mises à l'échelle de cette façon.
- Suivre le chemin sur une courbe 3D qui se tord entraîne la copie sans la tordre ; sur les chemins plans, la rotation est exacte.
- Combiner ne fonctionne que sur des solides. Les corps surfaciques se joignent avec {{ui:Couture}}.

Voir aussi [Plans, axes et points de référence](topic:reference-geometry) pour les points et plans « entre des objets », et [Fonctions de répétition et de symétrie](topic:patterns-mirror).
