---
title: Chaleur, contrainte thermique et flambage
summary: Trouvez les températures d'une pièce à partir de températures imposées, de flux de chaleur, de puissance thermique, de convection et de rayonnement (en régime permanent ou dans le temps), chargez une étude de contrainte avec une hausse de température, et trouvez la charge à laquelle une pièce élancée flambe, avec ce que chaque méthode peut et ne peut pas dire.
keywords: thermique, transfert de chaleur, chaleur, température, conduction, convection, coefficient de film, rayonnement, émissivité, flux de chaleur, puissance thermique, génération de chaleur, puits de chaleur, transitoire, temps, refroidissement, chauffage, Crank-Nicolson, Euler implicite, bilan thermique, contrainte thermique, contrainte thermique dans le temps, contrainte transitoire, trempe, choc thermique, historique des contraintes, pire instant, dilatation thermique, coefficient de dilatation, flambage, flambage d'Euler, facteur de charge, charge critique, colonne, élancé, valeur propre
from: 1a1b7545
---

Ces études se trouvent dans l'espace Simulation, à côté de la contrainte statique et des fréquences propres (voir [Vérifier la contrainte et la flèche](topic:simulation)). Choisissez-les dans la liste **Type** du panneau. Elles utilisent le même maillage de petits cubes et la même liste de matériaux ; chaque matériau de la bibliothèque a une conductivité thermique, une chaleur massique et un coefficient de dilatation (valeurs typiques de manuel, affichées sous **Propriétés**).

## Thermique : où va la chaleur ?

1. Choisissez **Thermique (transfert de chaleur)** comme **Type**.
2. Ajoutez des conditions thermiques depuis la liste **Ajouter** du panneau, puis cliquez sur leurs faces (comme pour les appuis et les charges) :
   - **Température imposée** : la face est maintenue à une température, en °C.
   - **Flux de chaleur** : W/m² entrant dans la face (négatif = sortant). Il agit sur l'aire réelle de la face, même lorsque les cubes forment un escalier.
   - **Puissance thermique** : un total en watts, réparti sur les faces choisies au prorata de leur aire. À utiliser pour un chauffage ou une puce de puissance connue.
   - **Convection** : de l'air ou un liquide à une température évacue la chaleur à h W/(m²·K). Valeurs typiques de h : air calme 5–10, ventilateur 25–100, eau 500–10,000. PartCraft ne calcule pas h : cette étude ne comporte pas d'écoulement de fluide.
   - **Rayonnement** : la face rayonne vers l'environnement à une température, avec une émissivité de 0 à 1. Il est **linéarisé** (le rayonnement est écrit comme un coefficient qui dépend de la température et recalculé jusqu'à stabilisation), et il ne va que vers l'environnement : les faces n'échangent pas de chaleur entre elles.
3. La **Génération de chaleur** (W/m³) chauffe toute la pièce de l'intérieur, par exemple une pièce résistive.
4. Appuyez sur **Résoudre**. La pièce est colorée selon la température ; choisissez **Flux de chaleur** dans **Afficher** pour voir où circule la chaleur. Pointez la pièce pour lire les deux.

Un flux de chaleur permanent a besoin d'un lieu où aller : au moins une température imposée, de la convection ou du rayonnement. Une pièce qui ne fait qu'absorber de la chaleur n'a pas de régime permanent ; rendez l'étude transitoire à la place.

Le tableau donne la température la plus basse et la plus haute et leur emplacement, le flux de chaleur le plus grand, et le **bilan thermique** : la chaleur entrant ou sortant par chaque condition (une température imposée compte ce qu'elle doit fournir ou absorber), la chaleur générée, les totaux entrants et sortants, et le **déséquilibre**. Le déséquilibre doit être une très faible fraction de la chaleur entrante ; un déséquilibre important signifie que le résultat n'est pas fiable.

### Dans le temps (transitoire)

Cochez **Transitoire** et donnez une **Température initiale** (toute la pièce part de cette valeur), une **Durée** et un nombre de **Pas de temps**. L'**Euler implicite** est robuste ; **Crank–Nicolson** est plus précis pour le même nombre de pas, mais peut onduler après un changement brusque. Après la résolution, faites glisser le curseur **Temps** pour voir les températures à chaque instant (l'échelle de couleurs reste la même pour tous les instants). Le bilan thermique inclut alors la chaleur stockée.

## Contrainte thermique : que fait une variation de température à la pièce ?

Dans une étude de **Contrainte statique** (ou de **Flambage**), réglez la **Charge thermique** :

- **Variation uniforme de température** : toute la pièce se réchauffe (ou se refroidit, avec un nombre négatif) de ce nombre de kelvins.
- **Températures issues des conditions thermiques** : ajoutez des conditions thermiques à la même étude ; les températures permanentes sont d'abord calculées sur le même maillage, puis la pièce se dilate de α·(T − la **température sans contrainte**).
- **Températures dans le temps (calcul transitoire)** : ajoutez des conditions thermiques, puis donnez une **Température initiale**, une **Durée**, des **Pas de temps** et une **Méthode temporelle**, comme pour une étude thermique transitoire. Les températures sont calculées dans le temps sur le même maillage (cubes ou tétraèdres), et un calcul statique sur les températures de chaque instant donne la contrainte de cet instant. **Contrainte à** :
  - **Le pire instant** (par défaut) : **Résolutions de contrainte** répartit des instants uniformément sur la durée, début inclus (21 par défaut, 51 au maximum). Les résultats s'ouvrent à l'instant de contrainte de von Mises maximale ; le tableau le nomme, un petit graphique trace la contrainte maximale en fonction du temps, et le curseur **Temps** montre la contrainte à chaque instant calculé (l'échelle de couleurs reste celle du pire instant).
  - **Un instant choisi** : un seul instant, le pas de temps le plus proche du **Temps (s)** que vous donnez. Une étude de flambage prend toujours un instant choisi (la fin du calcul, sauf si vous en réglez un).

Une pièce trempée (plongée de chaud dans du froid) ou chauffée brusquement est la plus sollicitée lorsque l'intérieur et la surface diffèrent le plus : souvent dès le début. Une température imposée s'applique dès le premier instant, comme un changement brusque ; la contrainte au tout début dépend donc de la taille des éléments (seuls quelques éléments perçoivent le changement). Lisez-la comme « très élevée », et regardez les instants suivants du curseur pour des valeurs que le maillage résout. La contrainte est quasi statique : pas d'inertie, pas de vibration due au changement brusque.

Une pièce libre de se dilater n'a aucune contrainte thermique : maintenez-la juste assez pour l'empêcher de bouger (par exemple sur trois faces sans frottement à angle droit). Serrée entre deux murs, elle est comprimée : une barre d'acier réchauffée de 50 K entre des murs rigides porte environ 117 MPa. Les charges thermiques s'équilibrent d'elles-mêmes, de sorte que les réactions n'équilibrent encore que les charges mécaniques.

## Flambage : quand une pièce élancée cède-t-elle ?

1. Choisissez **Flambage (linéaire)** comme **Type**, et ajoutez appuis et charges comme pour une étude statique.
2. Réglez les **Facteurs de charge à rechercher** (nombre de modes de flambage).
3. Appuyez sur **Résoudre**. Chaque mode a un **facteur de charge** : le multiple de vos charges auquel la pièce idéale flambe. Un facteur de charge de 3 signifie trois fois vos charges ; **un facteur de charge inférieur à 1 signifie qu'elle flambe sous les charges appliquées**. Le tableau donne aussi la charge totale à chaque facteur. La forme du mode montre comment elle flambe (son amplitude n'a pas de signification).

**Le flambage linéaire surestime la charge de flambage réelle.** Il suppose une pièce parfaite : parfaitement droite, sans contrainte résiduelle, et élastique. Les pièces réelles ont de petits défauts et peuvent plastifier avant, et les coques à paroi mince peuvent flamber à une fraction de la valeur linéaire. Prévoyez une marge large, et considérez un facteur de charge proche de 3 ou inférieur pour une coque mince comme un avertissement.

## Dans quelle mesure s'y fier

PartCraft vérifie ces solveurs par rapport à des formules de calcul : une barre entre deux températures (exact), une ailette de refroidissement (à 0.3 K près), une dalle qui s'auto-chauffe (exact), un cube qui se refroidit dans le temps (à 0.1 % près avec Crank–Nicolson), une barre chauffée brusquement à une extrémité, une barre libre réchauffée (aucune contrainte, ΔL = αLΔT), une barre serrée entre des murs (σ = −EαΔT), une plaque trempée dans le temps par rapport à la solution classique en série (à 1 % près sur cubes, 2.1 % sur tétraèdres au centre de la plaque ; 0.5 % à sa surface), le dernier instant d'un long calcul par rapport à la contrainte thermique permanente (identique au millionième), et les colonnes d'Euler (à 1 % près encastrée–libre, 1.5 % articulée–articulée). Gardez à l'esprit :

- **Valeurs matérielles constantes.** La conductivité, la chaleur massique et la dilatation ne changent pas avec la température ici ; à quelques centaines de degrés, elles peuvent varier de 10 à 30 %. La rigidité ne change pas non plus.
- **La contrainte dans le temps est quasi statique et élastique** : chaque instant est un calcul statique (sans inertie), et sans plastification ; une trempe qui plastifierait la surface affiche donc une contrainte supérieure à la limite d'élasticité.
- **Les coefficients de convection sont vos données** : ils ne sont pas calculés à partir d'un écoulement d'air ou d'eau.
- **Pas de résistance de contact** : la pièce est un seul solide.
- **Flambage linéaire uniquement** : ni défauts, ni plastification, ni comportement après flambage.
- L'effet d'escalier des cubes et les angles vifs intérieurs influencent les contraintes thermiques comme les autres contraintes (voir [Vérifier la contrainte et la flèche](topic:simulation)).
- C'est une version de laboratoire : vérifiez autrement les pièces qui comptent.

## Voir aussi

- [Vérifier la contrainte et la flèche (Simulation)](topic:simulation)
- [Ce qui n'est pas encore disponible](topic:not-built-yet)
