---
title: "Extruder un bossage et découper à travers"
summary: "Transformez une esquisse en solide avec Extrusion : réglez une profondeur aveugle, au plan médian, jusqu'à une face, dans deux sens, avec une dépouille ou un seul contour de l'esquisse ; puis esquissez sur une face et utilisez Couper pour creuser une poche ou une rainure traversante."
keywords: "extrusion, bossage, bossage extrudé, découpe, découpe extrudée, poche, traversant, aveugle, plan médian, inverser, profondeur, découpe-extrusion, bossage-extrusion, plaque, jusqu'à une face, jusqu'à la face suivante, jusqu'à un sommet, décalage depuis la surface, sens 2, deux sens, dépouille pendant l'extrusion, dépouille, contour, région, contours sélectionnés"
from: 3b13ff10
---

{{ui:Extrude}} pousse le profil fermé d'une esquisse perpendiculairement à son plan pour créer de la matière. {{ui:Cut}} fait la même chose mais retire de la matière. Les deux sont la même fonction au fond ; vous pouvez basculer de l'une à l'autre plus tard.

## Extruder un bossage

1. Dessinez un profil fermé et fermez l'esquisse (voir [Dessiner votre première esquisse](topic:sketch-basics)). Elle reste sélectionnée.
2. Choisissez {{ui:Extrude}}.

Un solide de 10 mm apparaît, « Extrude1 » rejoint l'historique avec son esquisse en retrait dessous, et la barre d'état indique : « Extrude1 ajouté. Modifiez ses valeurs à droite. »

**Esquisse utilisée :** l'esquisse que vous venez de fermer, ou l'esquisse sélectionnée dans l'historique. Si rien n'est sélectionné, PartCraft prend l'esquisse la plus récente qu'aucune fonction n'utilise encore. S'il n'y en a aucune : « Créez d'abord une esquisse : choisissez un plan, Esquisse, dessinez un profil fermé, Quitter. »

### Régler la profondeur et le sens

Dans le panneau de droite :

| Réglage | Choix | Défaut |
|---|---|---|
| **Opération** | Bossage (ajouter de la matière), Couper (retirer de la matière), Intersection (garder le recouvrement), Nouveau corps (pas encore disponible dans cette version : il nécessite un noyau exact) | Bossage |
| **Fin** | Aveugle (une profondeur), Plan médian (dans les deux sens), Traversant, Jusqu'à une face ou un plan, Jusqu'à la face suivante, Jusqu'à un sommet, Décalage depuis la face | Aveugle |
| **Profondeur (mm)** | Toute dimension supérieure à zéro (affichée pour Aveugle et Plan médian) | 10 |
| **Inverser le sens** | Se développe de l'autre côté du plan de l'esquisse (non affiché pour Plan médian) | Désactivé |

Saisissez un nombre puis appuyez sur {{key:Enter}} ou {{key:Tab}} : la pièce se reconstruit immédiatement. **Plan médian** répartit la moitié de la profondeur de chaque côté de l'esquisse.

### Jusqu'à une face, la face suivante ou un sommet

Pas encore disponible dans cette version : toutes les fins « jusqu'à » nécessitent un noyau exact, et la fonction indique : « Extrusion jusqu'à une face, la face suivante ou un sommet : pas encore disponible (elle nécessite un noyau exact). » Utilisez une profondeur Aveugle que vous avez mesurée. Avec un noyau exact, les fins fonctionnent ainsi :

- **Jusqu'à une face ou un plan** : **Jusqu'à** prend une face plane (Choisir, puis cliquez dessus) ou un plan de référence. Une face parallèle à l'esquisse donne une profondeur exacte ; une face inclinée coupe la fin en biais. Si la face est derrière l'esquisse : « … Essayez « Inverser le sens ». »
- **Jusqu'à la face suivante** : s'arrête à la première face plane du corps rencontré par l'extrusion (les faces courbes ne sont pas prises en charge ici : la fonction le signale).
- **Jusqu'à un sommet** : s'arrête au niveau d'un sommet (cliquez près de l'extrémité d'une arête) ou d'une fonction point.
- **Décalage depuis la face** : comme Jusqu'à une face, en s'arrêtant à **Décalage (mm)** avant elle (mesuré perpendiculairement à la face).

### Deux sens, dépouille, un seul contour

- **Deuxième sens** (Aveugle) : extrude aussi de **Deuxième profondeur (mm)** de l'autre côté de l'esquisse.
- **Dépouille (°)** : les flancs se resserrent au fur et à mesure (négatif : ils s'écartent), comme une dépouille ; un seul sens. Pas encore disponible dans cette version (elle nécessite un noyau exact) : laissez-la à 0.
- **Régions** : **Choisir les régions**, puis cliquez à l'intérieur des boucles à extruder ; seules ces régions sont utilisées (un cercle dans un carré : cliquez dans le cercle pour un cylindre, entre les deux pour une plaque avec un trou). **Tout** revient à toutes les boucles.

Sous ces réglages, **Cotes de l'esquisse** liste les cotes de pilotage de l'esquisse, pour modifier les dimensions du profil sans ouvrir l'esquisse.

:::note
**Traversant ne concerne que les découpes.** Un bossage réglé sur Traversant échoue avec le message « Traversant concerne les découpes. Utilisez une profondeur pour un bossage. » Si vous repassez une fonction de Couper à Bossage, Traversant devient automatiquement Aveugle.
:::

## Creuser une poche

1. Cliquez sur la face plane dans laquelle vous voulez découper. Elle se met en surbrillance, et le panneau de droite indique **Face**.
2. Choisissez {{ui:Sketch on this face}} (ou {{ui:Sketch}} dans la barre d'outils).
3. Dessinez le contour de la poche, par exemple un rectangle, et cotez-le.
4. Choisissez {{ui:Exit}}.
5. Choisissez {{ui:Cut}}. Elle démarre en **Traversant** : elle retire la matière à travers toute la pièce.
6. Pour une poche, réglez **Fin** sur **Aveugle (une profondeur)** et saisissez la **Profondeur (mm)**.

Une découpe pénètre dans la matière, à l'opposé de la face où vous avez esquissé. Si la barre d'état indique « Il n'y a rien à découper de ce côté de l'esquisse. Essayez l'autre sens. », cochez **Inverser le sens**.

Une esquisse placée sur le fond de la poche suit ce fond : si vous modifiez la profondeur de la poche, l'esquisse se déplace avec elle.

## Tirer ou pousser une face entière

Pour faire ressortir une face ou la faire rentrer, inutile de dessiner son contour. Cliquez sur la face plane, puis dans le panneau de droite :

- {{ui:Extrude from it}} fait ressortir la face : PartCraft ajoute une esquisse sur la face avec son contour (les trous de la face restent des trous) et une extrusion de 10 mm.
- {{ui:Cut into it}} enfonce la face : la même esquisse et une découpe à mi-profondeur de la pièce.

Les deux se font en une seule étape : {{key:Mod+Z}} retire l'esquisse et la fonction ensemble. La nouvelle fonction est sélectionnée : saisissez donc tout de suite un nombre et appuyez sur {{key:Enter}} pour sa profondeur. Le contour est copié sous forme de lignes et d'arcs fixes : il ne suit pas les modifications ultérieures de la face. Si une partie du contour ne peut pas être copiée (une courbe libre), l'esquisse s'ouvre avec ce qui a pu être copié ; terminez-la, puis choisissez {{ui:Exit}}, puis {{ui:Extrude}} ou {{ui:Cut}}.

## Profils avec îlots

Une esquisse peut contenir plusieurs boucles fermées. Les boucles côte à côte deviennent des bossages distincts (ou des découpes) ; une boucle à l'intérieur d'une autre devient un trou traversant le bossage. Par exemple, un rectangle avec deux cercles à l'intérieur s'extrude en une plaque à deux trous.

Pour n'utiliser que certaines boucles, choisissez-les avec **Régions** (ci-dessus) ; une autre fonction peut utiliser les autres boucles de la même esquisse.

## Modifier plus tard

- Cliquez sur « Extrude1 » dans l'historique pour retrouver ses réglages.
- Double-cliquez sur son esquisse (en retrait dessous) pour l'ouvrir ; fermez-la pour reconstruire.
- Voir [Modifier une pièce par son historique](topic:edit-history) pour désactiver, revenir en arrière, réordonner et supprimer.

## Messages courants

| Message | Que faire |
|---|---|
| « L'esquisse n'a pas de profil fermé à extruder. » | L'esquisse n'a pas de boucle fermée de lignes pleines. Comblez les écarts, ou repassez les lignes de construction en lignes normales avec {{key:Q}} |
| « Le profil est ouvert : une extrémité en (x, y) n'est reliée à rien. » | Ouvrez l'esquisse et reliez cette extrémité à la ligne suivante |
| « Il n'y a encore rien à découper. » | Une découpe a besoin d'un solide à découper. Créez d'abord un bossage |
| « Il ne reste rien de la pièce après cette opération. » | La découpe a tout retiré. Vérifiez sa dimension et son sens |

Plus d'informations dans [Dépannage](topic:troubleshooting).
