---
title: Paramètres de PartCraft
summary: Choisissez le bouton de souris qui fait tourner la vue, faites en sorte qu'un balayage du pavé tactile fasse tourner et translater la pièce, activez ou désactivez les contraintes automatiques pendant le tracé d'une esquisse, et réglez le nombre de threads qu'utilisent les solveurs de simulation.
keywords: paramètres, préférences, options, souris, bouton du milieu, bouton de la molette, orbite, rotation, tourner, pavé tactile, défilement, balayage, pincement, relations, contraintes, contraintes automatiques, relations automatiques, accrochage, coïncident, threads, threads du solveur, cœurs, processeurs, multithread, résolution plus rapide, parallèle
from: 759edcaf
---

Ouvrez {{ui:Paramètres}} avec l'engrenage de la barre d'application, ou avec {{key:Mod+,}}. Le premier onglet, {{ui:PartCraft}}, contient les paramètres propres à cette application ; {{ui:Général}} contient ceux que partagent toutes les applications CadCraft (thème, barre d'outils, panneaux). Les paramètres de PartCraft n'existent que dans l'application : vous les modifiez ici, et ce navigateur s'en souvient. {{ui:Réinitialiser les paramètres de PartCraft}} remet tout dans l'état initial.

## Rotation de la vue

- **Bouton gauche** (par défaut) : faites glisser avec le bouton gauche pour faire tourner la pièce ; faites glisser avec le bouton droit ou central pour la translater.
- **Bouton central** : appuyez sur la molette et faites glisser pour faire tourner la pièce ; maintenez {{key:Shift}} (ou {{key:Ctrl}}, ou ⌘) avec le bouton central, ou faites glisser avec le bouton droit, pour translater. Le bouton gauche ne fait que choisir des faces, arêtes et plans, donc un clic qui bouge légèrement ne fait jamais tourner la pièce. Beaucoup de logiciels de CAO fonctionnent ainsi.

La molette zoome vers le pointeur dans les deux cas. En esquisse, les boutons droit et central translatent comme auparavant.

## Défilement : molette de souris ou pavé tactile

- **Détection automatique** (par défaut) : PartCraft observe le défilement. Un défilement latéral ou fin, tel qu'en envoie un pavé tactile, fait tourner la pièce ; les crans entiers de la molette zooment.
- **Molette de souris** : le défilement zoome toujours vers le pointeur.
- **Pavé tactile** : balayez à deux doigts pour faire tourner la pièce, maintenez {{key:Shift}} et balayez pour translater, pincez pour zoomer. En esquisse, un balayage à deux doigts translate l'esquisse.

Un pincement zoome dans tous les choix. Si « Détection automatique » se trompe pour votre souris ou votre pavé tactile, choisissez celui que vous avez. Plus de détails dans [Pavé tactile, écran tactile et petits écrans](topic:trackpad-and-touch).

## Esquisse : ajouter des contraintes pendant le tracé

**Ajouter des contraintes pendant le tracé** (activé par défaut) : un clic qui s'accroche à un point rend le nouveau point coïncident avec lui, un clic sur une courbe place le point sur cette courbe, et une ligne tracée presque horizontale ou verticale devient horizontale ou verticale. Voir [Contraintes et cotes](topic:relations-dimensions).

Désactivez-le lorsque vous voulez placer une géométrie près d'autres sans la lier. Le pointeur s'accroche toujours aux points et aux courbes, mais rien n'est lié : les lignes tracées en chaîne ne partagent pas leurs extrémités, si bien qu'un glissement peut les séparer. Ajoutez vous-même les contraintes voulues depuis le panneau de droite. Un profil fermé s'extrude toujours lorsque ses extrémités se rejoignent.

:::note
Ce paramètre ne modifie que ce que les nouveaux tracés ajoutent. Les contraintes déjà présentes dans une esquisse restent, et l'outil Congé crée toujours son arc tangent et son rayon.
:::

## Esquisse : coter pendant le tracé

**Coter pendant le tracé** (activé par défaut) : pendant le tracé d'une ligne, d'un rectangle, d'un cercle ou d'un arc, saisir un nombre remplit la case de dimension à côté du pointeur ({{key:Tab}} passe à la case suivante), et {{key:Enter}} trace la forme à cette dimension, avec une cote pilote pour chaque dimension saisie. Désactivé : saisir un nombre pendant le tracé ne fait rien, et les formes ne se tracent qu'aux clics. Voir [Saisir la dimension pendant le tracé](topic:sketch-basics#type-the-size-as-you-draw).

## Indicateur de coin

Ce qui s'affiche dans le coin de la vue 3D : **ViewCube** (par défaut, en haut à droite : cliquez sur une face, une arête ou un coin pour regarder depuis là, faites-le glisser pour orbiter, faites glisser son anneau de boussole pour faire pivoter le modèle), **Icône d'axes** (un petit repère X, Y, Z en bas à gauche, qui tourne avec la vue : X en rouge, Y en vert, Z en bleu) ou **Aucun**. Aucun des deux ne s'affiche pendant l'esquisse ou sur la feuille de dessin. Voir [Le ViewCube](topic:view-cube).

## Threads du solveur

Nombre de threads que les solveurs de simulation peuvent utiliser. **Automatique** (par défaut) en prend un de moins que le nombre de processeurs logiques de l'ordinateur (16 au maximum), afin que la page reste réactive pendant qu'une étude se calcule ; ou choisissez un nombre. Les grandes études en voxels, le flambage, les contraintes au cours du temps et l'écoulement se résolvent plus vite sur plusieurs threads (environ 2× avec 4 threads pour 80 000 cubes selon nos mesures, davantage sur un ordinateur inactif) ; les modèles de moins d'environ 20 000 inconnues restent sur un seul thread, car démarrer les threads coûte plus qu'ils ne font gagner. Une résolution multithread donne la même réponse qu'avec un seul thread (à l'arrondi près : les sommes sont effectuées dans un autre ordre). Les résultats de chaque étude affichent **N threads** ou **1 thread**, avec la raison, sous **Solveur**.

Les threads exigent que la page soit **isolée inter-origines** (le navigateur ne laisse les workers partager la mémoire qu'à cette condition). La page du laboratoire l'est ; là où elle ne l'est pas, le paramètre l'indique (« Cette page n'est pas isolée inter-origines, donc les solveurs s'exécutent sur un seul thread, quel que soit le choix ici. ») et chaque résolution utilise un seul thread. Le reste fonctionne de la même façon, et les réponses sont identiques.

Les études d'écoulement laminaire utilisent aussi les threads (environ 2.5× avec 4 threads pour 54 000 cellules fluides, la même réponse jusqu'au dernier chiffre). Le solveur à tétraèdres quadratiques et le transfert thermique s'exécutent sur un seul thread : leur passage au multithread a été mesuré plus lent sur notre ordinateur d'essai (leurs solveurs sont limités par la vitesse de la mémoire et par une étape qui ne peut pas être divisée).

### Sur votre propre serveur web

Si vous exécutez PartCraft depuis votre propre serveur, il fonctionne tel quel. Pour les threads du solveur, faites envoyer par le serveur deux en-têtes avec la page de PartCraft :

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Sur Apache, dans le `.htaccess` du dossier (nécessite mod_headers) :

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Sur nginx, dans le `location` qui sert PartCraft :

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Rechargez la page : Paramètres › Threads du solveur propose alors **Automatique** avec le nombre de processeurs de votre ordinateur. Le second en-tête fait refuser au navigateur tout élément que la page charge depuis un autre site qui ne l'autorise pas, ce qui convient à PartCraft seul (il charge tout depuis son propre dossier).
