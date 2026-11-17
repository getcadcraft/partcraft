---
title: Champs magnétiques en 2D (tutoriel)
summary: Calculez le champ magnétique d'un électroaimant ou d'un aimant permanent avec la bibliothèque d'analyse : lancez les exemples, lisez la densité de flux, le champ dans l'entrefer, l'inductance et l'attraction, modifiez le modèle et construisez votre propre modèle de bobines, d'aimants et de fer.
keywords: magnétique, magnétostatique, champ magnétique, densité de flux, tesla, électroaimant, solénoïde, bobine, ampères-tours, noyau de fer, entrefer, perméabilité, inductance, force magnétique, réluctance, circuit magnétique, potentiel vecteur, électromagnétisme, éléments finis, fem, moteur, actionneur, transformateur, magnetostatic2d, aimant permanent, néodyme, ndfeb, ferrite, rémanence, point de fonctionnement, recul, fuite, aimant de maintien
from: 215f6601
---

La bibliothèque d'analyse de PartCraft peut calculer le champ magnétique des bobines et du fer en 2D : une coupe transversale d'un objet long et de section constante, comme un électroaimant, un noyau de transformateur, un jeu de barres ou la section d'un moteur. Ce tutoriel exécute l'exemple d'électroaimant de la bibliothèque, lit ce qu'il affiche, le modifie, montre comment modéliser votre propre forme, puis ajoute un aimant permanent.

Il utilise l'espace de travail Script et la [bibliothèque d'analyse](topic:craftscript-library). Vous n'avez pas besoin de connaître le langage CraftScript pour le suivre ; l'exemple indique ce que fait chaque ligne.

## Ce qui est modélisé

Un noyau de fer en forme de C, de 100 × 80 mm à l'extérieur et de 20 mm d'épaisseur, avec un entrefer d'air de 2 mm dans sa branche droite. Une bobine de 100 spires parcourue par 10 A (1000 ampères-tours) est enroulée autour de sa branche gauche. Tout est long dans la direction sortant de l'écran : les résultats sont donc **par mètre de profondeur**. Multipliez par la profondeur réelle pour un aimant réel.

La fonction `magnetostatic2d` de la bibliothèque calcule le potentiel vecteur magnétique sur une grille de carrés de 1 mm dans une boîte d'air autour de l'aimant, puis en déduit la densité de flux **B** (en tesla).

## Lancer l'exemple

1. Choisissez **Script** dans la zone **Espace de travail** à gauche de la barre d'outils.
2. Ouvrez l'onglet **Bibliothèque** du panneau de script, puis **Exemples** › **Électroaimant : champ, entrefer, inductance**.
3. Cliquez sur {{ui:Ouvrir (lecture seule)}}, puis appuyez sur {{key:F5}}.

En une seconde ou deux, la zone de dessin affiche la densité de flux, et la console affiche :

```
B dans l'entrefer 0.5427 T ; circuit magnétique 0.5516 T (-1.6 % : effets de bord et fuites)
inductance 0.1539 H par mètre de profondeur ; le circuit donne 0.1103 H/m, sans le flux qui fuit au-delà de l'entrefer
énergie stockée 7.694 J/m ; |B| atteint 1.97 T dans les angles intérieurs de la fenêtre (de l'acier réel saturerait à cet endroit)
attraction à travers l'entrefer d'environ 2343 N par mètre de profondeur (117.2 N pour 50 mm de profondeur)
```

Le graphique sous la zone de dessin montre la densité de flux verticale B_y le long de la ligne médiane du noyau, de gauche à droite : environ −0.55 T dans la branche gauche (le flux y descend), presque rien dans la fenêtre, et +0.55 T dans la branche droite et à travers l'entrefer (le flux remonte). Le même flux traverse le fer et l'entrefer, de sorte que les deux branches et l'entrefer affichent une valeur presque identique.

## Lire les résultats

- **Le champ dans l'entrefer** vaut 0.543 T. Un calcul à la main traite le noyau comme un seul circuit magnétique, B = μ0 N I / (g + l / μr), où g est l'entrefer, l la longueur du trajet dans le fer et μr la perméabilité relative du fer ; il donne 0.552 T. Le champ est légèrement inférieur au calcul à la main, car le flux se bombe autour de l'entrefer (effets de bord) et une partie du flux prend un raccourci à travers la fenêtre (fuites). Avec un entrefer plus petit ou une grille plus fine, les deux valeurs se rapprochent.
- **L'inductance** de la bobine de 100 spires vaut 0.154 H par mètre de profondeur, calculée à partir de l'énergie stockée dans le champ. La formule du circuit donne une valeur plus faible (0.110 H/m) car elle ne compte que le flux traversant l'entrefer, et non celui qui fuit à côté.
- **L'attraction** qui referme l'entrefer vaut B² w / (2 μ0) pour une face d'entrefer de largeur w : environ 2300 N par mètre, soit 117 N pour un aimant de 50 mm de profondeur.
- **Le pic** de 1.97 T se situe dans les angles intérieurs de la fenêtre, là où le flux tourne brusquement. Le modèle traite le fer comme linéaire ; l'acier électrique réel sature vers 1.5 à 2 T, donc considérez les valeurs au-delà comme un avertissement et non comme un résultat.

:::note
Les tests propres à la bibliothèque exécutent cet exemple et vérifient le champ de l'entrefer par rapport à la formule du circuit magnétique à chaque modification de PartCraft. La méthode, ses références et ses autres vérifications (un long solénoïde, un solénoïde à noyau de fer) figurent dans l'en-tête de `magnetostatic2d` : cliquez dessus dans la bibliothèque.
:::

## Modifier le modèle

1. Cliquez sur {{ui:Faire une copie}} au-dessus du script en lecture seule. La copie est enregistrée avec votre pièce.
2. Modifiez une valeur près du haut et appuyez de nouveau sur {{key:F5}}. Essayez :
   - `g = 0.001;` — la moitié de l'entrefer : le champ dans l'entrefer est presque doublé, et l'attraction aussi (elle varie avec B²).
   - `mur = 200;` — un noyau moins bon : une part plus grande des ampères-tours est consommée dans le fer.
   - `N = 200;` — deux fois plus de spires : deux fois plus de champ, quatre fois plus d'inductance.
   - `h = 0.0005;` — une grille plus fine : résultats plus proches, environ quatre fois plus de temps.

Chaque exécution remplace la zone de dessin. Les variables créées par le script (comme `Bgap`, `L`, `F`) restent dans la liste **Variables** pour vos propres calculs.

## Modéliser votre propre forme

L'exemple construit tout à partir de trois listes, une valeur par carré de la grille, que vous pouvez créer pour toute forme tracée avec des lignes droites suivant la grille :

- **Où se trouve le fer :** `iron` est vrai pour les carrés situés dans le noyau. L'exemple le construit à partir de rectangles : `frame & ~window & ~gap` signifie « dans le cadre, pas dans la fenêtre, pas dans l'entrefer ».
- **La perméabilité :** `1 + (mur - 1) * iron` vaut 1 dans l'air et `mur` dans le fer. Donnez de la même façon leurs propres valeurs à plusieurs matériaux.
- **Le courant :** `J` est la densité de courant en ampères par mètre carré, positive vers l'extérieur de l'écran, négative vers l'intérieur. Une bobine a deux côtés de signes opposés ; l'exemple calcule `J0` de sorte qu'un côté porte N I.

Puis `r = magnetostatic2d(m, permeability, J)` le résout. `r.B` est la densité de flux dans chaque carré (deux colonnes, x et y), `r.Bmag` sa norme, `r.energy` l'énergie stockée par mètre. `plot(x, y)` trace une ligne.

La bibliothèque travaille en mètres et la vue en millimètres ; un champ affiché tel quel serait donc dessiné mille fois trop petit. L'exemple l'affiche sur une copie de la grille en millimètres (`mm = quadGrid(…)`, puis `show(field(mm, …))`) : copiez ces deux lignes.

Par défaut, le bord de la boîte retient le champ : aucun flux ne la quitte. Donnez à la boîte au moins deux ou trois fois la taille de l'aimant pour que cela ne comprime pas le champ. Pour un aimant symétrique, vous pouvez n'en modéliser que la moitié : l'en-tête de `magnetostatic2d` indique quelle condition de bord utiliser sur un axe de symétrie.

## Aimants permanents

Le deuxième exemple, **Exemples** › **Aimant permanent dans un noyau de fer : point de fonctionnement, fuites, attraction**, reprend le même noyau sans la bobine ; une tranche de 10 mm de la branche gauche est remplacée par un aimant aimanté vers le haut. Exécutez-le avec {{key:F5}}. Il affiche :

```
l'aimant travaille à B = 1.036 T, H = -124 kA/m (sur sa droite de recul B = Br + μ0 μr H)
B dans l'entrefer 0.6778 T ; circuit magnétique sans fuite 0.9692 T (-30.1 %)
facteur de fuite 1.53 : sur le flux qui sort de l'aimant, 65 % traverse l'entrefer entre les faces polaires
attraction à travers l'entrefer d'environ 3656 N par mètre de profondeur (182.8 N pour 50 mm de profondeur)
```

- **Le point de fonctionnement.** Un aimant est décrit par sa **rémanence** Br (le champ qu'il conserve lorsqu'il est court-circuité par du fer : environ 1.2 T pour un aimant NdFeB fritté, 0.4 T pour la ferrite) et par sa perméabilité de recul (environ 1.05 et 1.1). Ouvrir un entrefer le fait descendre sur sa droite de recul : ici jusqu'à 1.04 T, avec H dirigé à l'opposé de B à l'intérieur.
- **Fuites.** Le calcul à la main sans fuite donne 0.97 T dans l'entrefer ; le modèle donne 0.68 T. Un aimant pousse son flux avec une forte poussée sur une faible longueur, de sorte qu'une grande partie repart directement à travers la fenêtre au lieu de passer par l'entrefer. Le facteur de fuite indique l'ampleur : 1.53 ici. Réglez `g = 0;` pour une culasse fermée : l'aimant travaille alors à moins de 0.5 % près du calcul à la main.
- **Aimants dans votre propre modèle.** Donnez à `magnetostatic2d` les aimants sous la forme `struct('Br', Br)`, où `Br` contient une ligne par carré de la grille avec la rémanence selon x et y en teslas (nulle hors des aimants), et donnez aux carrés d'aimant leur perméabilité de recul dans la liste des perméabilités :

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T vers le haut dans les carrés où mag est vrai
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Pour un aimant aimanté selon un angle, placez `Br·cos(angle)` et `Br·sin(angle)` dans les deux colonnes ; pour un anneau aimanté vers l'extérieur, calculez la direction de chaque carré à partir de sa position. `r.H` donne l'intensité du champ H dans chaque carré.

Le modèle maintient un aimant sur sa droite de recul rectiligne, quelle que soit la sollicitation. Un aimant réel poussé au-delà de son coude (par un grand entrefer, une bobine puissante ou la chaleur) perd définitivement une partie de sa force ; vérifiez le point de fonctionnement sur la courbe du fabricant pour la nuance et la température.

Les tests de la bibliothèque vérifient les aimants par rapport à deux résultats calculés à la main : un aimant rond dans l'air libre (à l'intérieur, B = Br / (1 + μr)) et un aimant fermé par une culasse de fer (le circuit magnétique), tous deux à 1 % près.

## Ce qu'il ne fait pas encore

- **Saturation.** Le fer est linéaire : double courant, double champ, sans limite.
- **Démagnétisation.** Les aimants restent sur leur droite de recul rectiligne (voir ci-dessus).
- **Courants de Foucault** et **pertes** (pertes fer, pertes cuivre).
- **Pièces mobiles et couple.** Pas de rotor tournant dans un stator, pas de couple en fonction de l'angle.
- **Formes rondes.** La grille est faite de carrés égaux, donc les contours courbes apparaissent en escalier.
- **3D.** Tout est une coupe d'un objet long.

La conception de moteurs (rotor tournant, couple et pertes en 2D) est à l'étude pour une version ultérieure. Voir [Pas encore disponible](topic:not-built-yet).
