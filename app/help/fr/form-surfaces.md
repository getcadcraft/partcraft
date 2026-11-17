---
title: Formes libres avec l'espace Forme, et fonctions de surface
summary: Poussez et tirez une cage de contrôle lisse dans l'espace Forme, marquez des arêtes, utilisez la symétrie, vérifiez et terminez la forme en solide ou surface exacts, puis créez des carreaux, lissez, cousez, épaississez, décalez, prolongez et ajustez des surfaces dans Conception. Ce qui est exact et ce qui est approximé.
keywords: forme, forme libre, T-spline, subdivision, Catmull-Clark, cage, quadball, marquer, symétrie, zébrures, courbure, surface, carreau, remplissage, surface de lissage, couture, coudre, épaissir, décaler surface, prolonger, ajuster
from: 0d326ef4
---

:::note
**Pas encore disponible dans cette version.** Terminer une forme dans la pièce, et les fonctions de surface, nécessitent un noyau géométrique exact, que cette version de PartCraft n'a pas : elle construit chaque pièce avec le noyau de maillage. [Ce qui n'est pas encore disponible](topic:not-built-yet) indique quoi faire à la place. Le reste de cette page décrit ces fonctions telles qu'elles fonctionneraient avec un noyau exact.
:::

L'espace **Forme** crée des formes organiques. Vous modifiez une **cage**, un maillage grossier de coins, d'arêtes et de faces. La forme est la surface lisse que contrôle la cage (sa surface limite de Catmull–Clark), donc déplacer un seul coin courbe la surface doucement autour de lui. Quand la forme vous convient, {{ui:État de surface}} ajoute la forme à l'historique de la pièce sous forme de fonction *Forme*, et le noyau exact la transforme en véritables surfaces B-spline. Vous pouvez ensuite lui appliquer un congé, la couper, la joindre à d'autres fonctions et l'exporter en STEP.

Choisissez **Forme** dans la liste **Espace de travail**, à gauche de la barre d'outils.

## Commencer une cage

1. Réglez **Taille** et **Divisions** dans le panneau de droite. Les divisions indiquent combien de faces comporte chaque côté.
2. Cliquez sur {{ui:Parallélépipède}}, {{ui:Quadball}} ou {{ui:Plan}} dans la barre d'outils. Le panneau propose aussi **Cylindre**, **Tore** et **Faces par clics**.

- Une **quadball** est une cage en forme de parallélépipède dont les points d'angle se trouvent sur une sphère. Entre ces points, la surface se place un peu à l'intérieur de la sphère : environ 0.4 % de volume en moins avec 2 divisions.
- Un **plan** est ouvert, il devient donc un corps surfacique (voir « Fonctions de surface dans Conception » plus bas).
- **Faces par clics** : cliquez sur 4 points du plan de sol (le plan du dessus) ou sur des coins de la cage pour créer une face. Les faces qui partagent des coins se rejoignent. Appuyez sur {{key:Enter}} après 3 points pour un triangle, ou sur {{key:Esc}} pour arrêter.

Votre cage inachevée est enregistrée avec le fichier de pièce, vous pouvez donc fermer le fichier et reprendre plus tard.

## Sélectionner et déplacer

- Cliquez sur un coin, une arête ou une face de la cage. {{key:Shift}}+clic ajoute ou retire des éléments. {{key:Esc}} efface la sélection.
- Un manipulateur apparaît au milieu de la sélection. Faites glisser une flèche pour vous déplacer le long de celle-ci, ou un carré pour vous déplacer dans ce plan. Appuyez sur {{key:W}} pour déplacer, {{key:E}} pour faire pivoter et {{key:R}} pour mettre à l'échelle, ou utilisez les boutons du panneau. {{ui:Manipulateur}} dans la barre d'outils fait défiler ces modes.
- **Atténuation douce** (mm) attire aussi les coins situés à cette distance, en s'estompant progressivement jusqu'à zéro à la limite de cette distance.
- Chaque glisser-déposer correspond à une seule étape d'annulation : {{key:Ctrl+Z}} et {{key:Ctrl+Y}} fonctionnent comme d'habitude.

## Modifier la cage

Les boutons **Modifier** du panneau agissent sur la sélection :

| Bouton | Ce qu'il fait |
|---|---|
| {{ui:Extrusion}} | Les faces choisies se déplacent de la **Distance d'extrusion**, le long de leurs normales, avec de nouvelles faces latérales. Les arêtes ouvertes choisies créent de nouvelles faces vers l'extérieur. |
| {{ui:Boucle d'arêtes}} / Insérer une boucle d'arêtes | Divise l'anneau de faces à quatre côtés qui croise l'arête choisie, à mi-chemin. Plus de boucles donnent des courbes plus serrées. |
| Insérer un point | Ajoute un coin au milieu de l'arête choisie. |
| Subdiviser | Divise chaque face choisie en faces à quatre côtés autour de son centre. |
| Pont | Relie deux faces choisies, ou deux ouvertures (choisissez une arête ouverte sur chacune), par un tube de faces. Les deux doivent avoir le même nombre d'arêtes. |
| Combler le trou | Ferme l'ouverture passant par l'arête ouverte choisie avec une seule face. |
| Souder | Fusionne les coins choisis en un seul, en leur milieu. |
| Aplanir | Déplace les coins choisis sur le plan qui les ajuste le mieux. |
| Supprimer | Retire les faces, arêtes (deux faces fusionnent) ou coins choisis. |

## Arêtes vives, symétrie et affichage

- {{ui:Marquer}} rend les arêtes choisies vives. Un **poids de marquage** de 10 est totalement vif. Un poids plus faible reste vif pendant ce nombre d'affinages, puis s'adoucit, ce qui donne un arrondi serré au lieu d'un pli net. **Supprimer le marquage** les rend de nouveau lisses. **Sommet vif** fixe un coin pour que la surface passe par lui avec une pointe.
- **Symétrie** reflète la cage selon X, Y ou Z = 0. Elle conserve le côté positif, le reflète et joint les deux moitiés. Ensuite, une modification d'un côté se fait aussi de l'autre. Les coins situés sur le plan de symétrie restent sur celui-ci.
- {{ui:Affichage}} bascule entre **Lisse** (la surface que deviendra la fonction) et **Parallélépipède** (les faces de la cage elles-mêmes).
- **Analyse** : les **Zébrures** reflètent une lumière rayée depuis la vue actuelle. Elles se courbent en douceur sur une surface lisse et se brisent à un pli. **Courbure moyenne** colore les zones convexes en rouge, les zones concaves en bleu et les zones planes en blanc. Elle est mesurée sur le maillage affiché avec la formule cotangente : c'est un guide, et non une mesure.

## Vérifier et terminer

- **Vérifier exactement** convertit la cage dans le noyau exact sans modifier votre pièce. Il indique combien de carreaux B-spline forme la cage, combien sont exacts, et si le résultat est un solide fermé et valide, ainsi que son volume.
- {{ui:État de surface}} ajoute une fonction *Forme* à l'historique, ou met à jour la forme que vous modifiez, puis vous ramène à Conception. Une cage fermée devient un solide. Son **Opération** dans le panneau Conception peut être Nouveau corps, Joindre, Couper ou Intersection. Une cage ouverte devient un corps surfacique.
- Pour modifier une forme plus tard, sélectionnez-la dans l'historique et cliquez sur **Modifier dans Forme**. Le corps construit est masqué pendant que vous modifiez sa cage.
- **Abandonner** supprime la cage sans toucher à l'historique.

## Ce qui est exact et ce qui est approximé

Chaque face à quatre côtés de la cage, affinée si nécessaire, devient un carreau bicubique B-spline.

- Lorsque chaque coin d'une face est *régulier* (quatre arêtes se rencontrent à l'intérieur de la surface, ou trois sur une arête ouverte ou le long d'un pli), le carreau est **exactement** la surface de subdivision. Les tests vérifient cela à 1e-9 mm près.
- Autour d'un **point extraordinaire** (trois, cinq arêtes ou plus qui se rencontrent, un coin d'une face à trois ou cinq côtés, ou l'extrémité d'un pli), il n'existe pas de carreau polynomial exact. Là, le carreau prend le point exact et le plan tangent en ce coin, ainsi que les courbes d'arête des voisins, de sorte que les carreaux se rejoignent sans écart. La continuité tangente le long des arêtes qui se rencontrent en ce point est approximative. Le panneau Forme et celui de la fonction donnent le plus grand angle, généralement inférieur à 2°. Un **Niveau** plus élevé dans le panneau de la fonction rend ces carreaux plus petits et plus proches.
- Les plis vifs sont de véritables arêtes du solide, vous pouvez donc y appliquer un congé.
- Chaque carreau est sa propre face, donc une forme comporte beaucoup de faces, et des lignes sont tracées entre elles.

## Fonctions de surface dans Conception

Les commandes de surface se trouvent dans le menu {{ui:Plus}} de Conception, sous les fonctions. Elles nécessitent le noyau exact. Les corps surfaciques sont dessinés transparents en bleu. Ils ne font pas partie du solide tant que vous ne les épaississez pas ou ne les cousez pas.

| Commande | Ce qu'elle fait |
|---|---|
| Carreau | Remplit une boucle fermée d'arêtes. {{key:Shift}}+clic sur les arêtes du solide d'abord, ou sélectionnez un corps surfacique pour combler son ouverture. **Tangent (G1)** fait que le carreau rejoint cette surface en douceur. |
| Surface de lissage | Une surface passant par une chaîne de courbes par esquisse (ouverte ou fermée), dans l'ordre de l'historique. |
| Couture | Coud les corps surfaciques le long de leurs arêtes communes. S'ils se referment, le résultat est un solide, avec une Opération comme les autres fonctions. |
| {{ui:Épaissir}} | Donne à un corps surfacique une épaisseur : le long de sa normale, à l'opposé, ou moitié de chaque côté. Le résultat est un solide. |
| Décaler la surface | Une copie d'un corps surfacique déplacée le long de ses normales. L'original reste. |
| Prolonger la surface | Agrandit une surface à une face au-delà des arêtes choisies. |
| Ajuster la surface | Coupe un corps surfacique là où un autre corps surfacique, ou le solide, le traverse. Cliquez sur **Choisir un point sur la pièce** pour choisir la partie à conserver, ou conservez tout le reste. |

Couture, Épaissir, Prolonger et Ajuster consomment le corps surfacique de départ. Les fonctions suivantes utilisent le nouveau.

Limites actuelles : les formes composées de plusieurs morceaux fermés séparés ne se convertissent pas en un seul solide ; les zones régulières ne sont pas fusionnées en surfaces plus grandes ; et voir [Ce qui n'est pas encore disponible](topic:not-built-yet).
