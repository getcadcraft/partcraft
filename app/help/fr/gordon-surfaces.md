---
title: Surfaces par un réseau de courbes (surface de Gordon)
summary: Créez une seule surface lisse passant par une grille de courbes de profil et de guide dessinées dans des esquisses ou prises depuis les arêtes d'un modèle ; fermez-la en solide lorsque les profils sont fermés ; ce qui est exact, ce qui est ajusté, et les messages lorsqu'un réseau ne s'ajuste pas.
keywords: tangence, g1, continuité tangente, plan de symétrie, surface de Gordon, réseau de courbes, surface de bord, surface de réseau, profils, guides, courbes guides, lissage avec guides, rails de guidage, peau, transfini, Coons, surface B-spline, surface libre
from: ada3cb8b
---

:::note
**Pas encore disponible dans cette version.** La surface de Gordon nécessite un noyau géométrique exact, que cette version de PartCraft n'a pas : elle construit chaque pièce avec le noyau de maillage. [Ce qui n'est pas encore disponible](topic:not-built-yet) indique quoi faire à la place. Le reste de cette page la décrit telle qu'elle fonctionnerait avec un noyau exact.
:::

Une **surface de Gordon** est une seule surface qui passe par chaque courbe d'un réseau : un ensemble de **profils** dans un sens et de **guides** dans l'autre, qui se croisent comme les fils d'un filet. C'est ainsi que l'on façonne une coque, un pare-boue ou une poignée à partir de quelques courbes de section que vous contrôlez directement. Elle nécessite le **noyau exact** (voir [Le noyau de maillage](topic:solid-kernels)).

## Dessiner le réseau

1. Dessinez les **profils** : deux courbes ou plus, parallèles, par exemple des sections sur des plans parallèles. Lignes, arcs, cercles et splines fonctionnent tous, et une chaîne de courbes jointes bout à bout compte comme une seule courbe.
2. Dessinez les **guides** : deux courbes ou plus qui traversent les profils. Chaque guide doit croiser chaque profil une fois, et chaque profil chaque guide une fois.
3. Faites en sorte que les courbes se rejoignent réellement. Dessinez l'esquisse d'un guide de façon que sa courbe passe par les points des profils (accrochez-vous aux points projetés, ou saisissez les coordonnées). Le réseau accepte des écarts allant jusqu'à la **Tolérance** (0.01 mm au départ).

Une esquisse peut contenir plusieurs courbes : chaque chaîne distincte est sa propre courbe. Vous pouvez donc dessiner tous les guides dans une seule esquisse sur le plan du dessus, par exemple.

## Créer la surface

1. Choisissez {{ui:Plus}} dans le groupe Fonctions, puis {{ui:Surface de Gordon}}.
2. PartCraft prend les esquisses que personne n'utilise encore : celles situées dans des plans parallèles au premier deviennent des **profils**, les autres des **guides**. Vérifiez la liste à droite et réglez chaque esquisse sur **Profils**, **Guides** ou **Non utilisée**.
3. Pour utiliser des arêtes de la pièce, cliquez sur **Choisir des arêtes comme profils** (ou **comme guides**), cliquez sur les arêtes dans la vue, puis appuyez sur Échap.

Le résultat est un **corps surfacique**. {{ui:Épaissir}} le transforme en solide, {{ui:Couture}} le coud à d'autres surfaces, et {{ui:Ajuster la surface}} le coupe.

### La fermer en solide

Lorsque les profils sont des courbes fermées (cercles, splines fermées, chaînes fermées) et que le premier et le dernier profil sont chacun à plat dans un plan, cochez **Fermer en solide**. Les extrémités sont fermées par des faces planes, et la forme fermée se joint, se découpe, s'intersecte ou devient un nouveau corps comme toute autre fonction. C'est ainsi que l'on crée un lissage qui suit des courbes guides. La même chose fonctionne avec des guides fermés.

## Tangente à un plan le long d'une arête

Une surface de Gordon passe par ses courbes, mais seule elle ne suit pas la pente de ce qu'elle rencontre. Pour qu'elle quitte une arête **tangente** à un plan (G1), comme un plan de symétrie, de sorte que la copie symétrique se rejoigne sans pli, ou une face plane dont elle part :

1. Sélectionnez la fonction Gordon. Sous **Tangente à**, choisissez un plan dans {{ui:Ajouter un plan…}} (Face, Dessus, Droite ou un plan de référence), ou choisissez une face plane dans la vue et appuyez sur {{ui:Ajouter la face plane choisie}}.
2. PartCraft trouve la courbe de bord du réseau située dans ce plan, et la surface la quitte en étant tangente au plan.

Si un plan contient deux courbes de bord (un plancher sous les deux extrémités), ajoutez-le deux fois : chaque copie prend la suivante. Jusqu'à quatre plans, un par arête.

Le rapport indique le long de quelle courbe chaque plan a rendu la surface tangente, et l'angle maximal que la surface formait avec ce plan auparavant. Les guides qui quittent déjà cette courbe en étant tangents au plan sont suivis exactement. Les guides qui s'éloignent en montant sont infléchis dans une bande étroite près de l'arête, et le chiffre « suit chaque courbe à moins de » du rapport indique de combien : dessinez les guides qui quittent l'arête à plat pour un ajustement exact.

## Ce qui est exact et ce qui est ajusté

Le panneau indique lequel de ces cas s'applique, et à quel point la surface s'écarte de vos courbes.

- **Exact** : lorsque chaque courbe est polynomiale (lignes, splines et chaînes de celles-ci) et que les guides croisent tous les profils aux mêmes paramètres, la surface est exactement la surface de Gordon de ces courbes. Un réseau de courbes iso découpées dans une surface bicubique restitue cette surface, et quatre lignes droites donnent un carreau plan ou gauche (bilinéaire).
- **Ajusté** : les arcs, cercles et arêtes de la pièce ne sont pas polynomiaux, et les courbes qui se croisent à des paramètres différents doivent être recalées pour que les croisements s'alignent. Ces courbes sont ajustées par des B-splines cubiques à moins d'un dix-millionième de la taille du réseau (environ 0.00001 mm pour une pièce de 100 mm). Un carreau de cylindre fait d'arcs et de lignes reste à moins de 0.00001 mm du vrai cylindre.

Entre les courbes, la surface est ce que donne la méthode : les profils mélangés transversalement, plus les guides mélangés transversalement, moins le mélange de leurs points de croisement. Elle est lisse partout, sauf là où une courbe a un angle vif. Lorsque deux surfaces de Gordon partagent une courbe de bord, elles se rejoignent bord à bord (G0), et non en tangence.

## Lorsqu'un réseau ne s'ajuste pas

| Message | Que faire |
|---|---|
| « … ne se rejoignent pas : ils passent à 0.4 mm d'écart » | Faites croiser ce profil et ce guide, ou augmentez la Tolérance |
| « … rencontre … 2 fois » | Un guide ne peut croiser chaque profil qu'une fois : coupez une courbe bouclée, ou utilisez moins de profils |
| « … dans un ordre différent » ou « se replie sur lui-même » | Deux guides se croisent (ou deux profils). Les familles doivent être côte à côte |
| « au moins deux profils et deux guides » | Ajoutez des courbes, ou réglez davantage d'esquisses sur Profils ou Guides |
| « mélangent des courbes ouvertes et fermées » | Rendez tous les profils ouverts ou tous fermés (de même pour les guides) |
| « Une extrémité … n'est pas plane, elle ne peut donc pas être fermée » | Dessinez le premier et le dernier profil fermé chacun dans un plan, ou laissez Fermer en solide désactivé |

## Limites

- Une face B-spline par réseau : pas de tangence G1 ni G2 avec les surfaces voisines.
- La couture d'un réseau fermé, au premier guide, est jointe bord à bord mais n'est pas tangente.
- La fonction Lissage elle-même n'a pas de rails de guidage ; utilisez plutôt une surface de Gordon fermée en solide.
- Des courbes très sinueuses, ou des croisements très irrégulièrement espacés le long d'une courbe par rapport à une autre, peuvent exiger trop de points pour s'ajuster ; la fonction l'indique alors.
