---
title: Prendre PartCraft en main
summary: Ce que PartCraft sait faire aujourd'hui, ce dont votre navigateur a besoin et une première pièce en dix minutes, de l'esquisse au fichier enregistré.
keywords: démarrer, premier lancement, démarrage rapide, introduction, tutoriel, première pièce, plaque, paramétrique, modeleur de pièces
from: 5f0a668d
---

PartCraft est l'application de pièces et d'assemblages paramétriques de la famille CadCraft. Vous dessinez une esquisse 2D, vous la figez avec des relations et des cotes, vous en faites un solide avec des fonctions comme l'extrusion, la révolution et le trou, puis vous changez n'importe quel nombre plus tard : la pièce se reconstruit à partir de son historique. Les pièces vont ensuite dans des assemblages, où des liaisons les placent et vous permettent de vérifier le mouvement.

Ce que fait cette version :

| Tâche | Ce que vous obtenez |
|---|---|
| Esquisses | Lignes, rectangles, cercles, arcs, points et lignes d'axe, avec relations et cotes, et un état en direct : sous-défini, entièrement défini ou surdéfini |
| Fonctions de solide | Extrusion, découpe, révolution, découpe par révolution, trous simples et lamés, répétitions linéaires et circulaires, symétrie, congés et chanfreins sur les arêtes droites entre faces planes, coques et dépouilles sur les faces planes. Les balayages, lissages et les autres fonctions qui demandent un noyau exact ne sont pas encore disponibles dans cette version : voir [Ce qui n'est pas encore disponible](topic:not-built-yet) |
| Historique | Modifier les nombres de n'importe quelle fonction, la désactiver, revenir en arrière, la réordonner et la supprimer, avec annulation |
| Assemblages | Pièces réunies par des liaisons rigides, pivots et glissières, une vérification des collisions et une vérification du mouvement |
| Dessins | Une feuille A3 avec trois vues, une isométrique, une coupe, une vue de détail, des dimensions hors tout, des références, des cadres de tolérancement et des symboles d'état de surface, exportée en PDF |
| Fichiers | Ses propres fichiers de pièce et d'assemblage ; sortie en STL, 3MF, STEP facetté, DXF et PDF |

Tout s'exécute dans votre navigateur, sur votre ordinateur. **Rien n'est téléversé.** Voir [Fichiers : ouvrir, enregistrer et exporter](topic:files) pour savoir où vont les fichiers.

## Ce qu'il vous faut

- Un navigateur récent (Chrome, Edge, Firefox ou Safari) avec **WebGL** (graphismes 3D) et **WebAssembly** activés. Les deux le sont par défaut. La géométrie des solides est construite par un noyau maillage WebAssembly qui se charge avec l'application : voir [Le noyau maillage](topic:solid-kernels).
- Une souris est le plus simple. Un pavé tactile convient, et les écrans tactiles conviennent pour regarder et pour des esquisses simples : voir [Pavé tactile, écran tactile et petits écrans](topic:trackpad-and-touch).
- Un écran d'au moins 1280 pixels de large affiche toute la barre d'outils sur une seule ligne. Dans une fenêtre plus étroite, la barre d'outils défile latéralement ; sur un téléphone, les panneaux s'ouvrent comme des feuilles depuis une barre en bas.

Pour en savoir plus sur les navigateurs : [Navigateurs et ordinateurs](common:browsers).

:::note
PartCraft s'exécute dans le navigateur, et sur le bureau dans CadCraft Studio. L'enregistrement dans le cloud n'est pas encore disponible : vous ouvrez les pièces depuis votre ordinateur et vous les enregistrez dessus sous forme de fichiers.
:::

## Ouvrir PartCraft

1. Ouvrez PartCraft.
2. Patientez pendant que l'écran affiche « Chargement du noyau de solides… ». Cela prend un moment la première fois.
3. Vous voyez une vue 3D vide avec trois plans de base, l'historique à gauche (« Part1 », puis Plan de face, Plan de dessus, Plan de droite) et un cadre dans la vue intitulé « Commencer une pièce ».
4. La pastille près de l'extrémité droite de la barre d'état indique « Noyau maillage » : dans cette version, PartCraft construit chaque pièce avec le noyau maillage, donc les faces rondes sont faites de facettes planes. Vous pouvez commencer à modéliser tout de suite.

Si la vue indique que le navigateur ne peut pas afficher la 3D, ou que le noyau ne s'est pas chargé, voir [Dépannage](topic:troubleshooting#the-app-does-not-start).

## Votre première pièce : une plaque percée

Vous allez faire une plaque de 60 × 40 mm, épaisse de 10 mm, avec un trou de 6 mm qui la traverse. Les unités sont les millimètres.

### Esquisser le contour

1. Cliquez sur **Plan de face** dans l'historique à gauche. Le plan est mis en évidence dans la vue.
2. Choisissez {{ui:Esquisse}} dans la barre d'outils, ou appuyez sur {{key:S}}. La vue se tourne pour regarder le plan de face, et l'outil Ligne est actif.
3. Appuyez sur {{key:R}} pour l'outil Rectangle.
4. Placez le pointeur sur l'origine (le petit cercle rouge avec une croix). Un petit carré indique l'accrochage. Cliquez.
5. Déplacez-vous vers le haut et vers la droite, puis cliquez de nouveau. Vous avez un rectangle. Ses lignes sont bleues : bleu signifie qu'elles peuvent encore bouger.

### Lui donner des dimensions

1. Appuyez sur {{key:D}} pour l'outil Cote.
2. Cliquez sur la ligne du haut, puis cliquez un peu au-dessus. Une zone de saisie s'ouvre avec la longueur actuelle.
3. Tapez `60` et appuyez sur {{key:Enter}}. Le rectangle passe à 60 mm de large.
4. Cliquez sur la ligne de gauche, puis cliquez un peu à gauche. Tapez `40` et appuyez sur {{key:Enter}}.

La pastille en haut à gauche de la vue indique maintenant **Entièrement défini** et les lignes passent à l'encre (noir sur le thème Papier, clair sur le thème Modèle). Chaque point et chaque dimension est figé.

:::tip
Si vous avez commencé le rectangle loin de l'origine, la pastille indique encore « Sous-défini · 2 degrés de liberté ». Appuyez sur {{key:S}} pour Sélectionner, cliquez sur un coin, faites {{key:Shift}}+clic sur l'origine, puis choisissez {{ui:• Coïncidence}} dans le panneau de droite.
:::

### L'extruder

1. Choisissez {{ui:Quitter}} dans la barre d'outils, ou appuyez sur {{key:Esc}} jusqu'à ce que l'esquisse se ferme (en général deux fois).
2. Choisissez {{ui:Extrusion}}. Un solide de 10 mm apparaît. « Extrude1 » est ajouté à l'historique, avec « Sketch1 » en retrait dessous.
3. Le panneau de droite affiche les réglages de l'extrusion. Pour changer l'épaisseur, tapez un nouveau nombre dans **Profondeur (mm)** et appuyez sur {{key:Enter}} ou {{key:Tab}}. La pièce se reconstruit aussitôt.

### Ajouter le trou

1. Cliquez sur la grande face plane à l'avant de la plaque (l'extrémité de l'extrusion). Toute la face est mise en évidence et le panneau de droite indique **Face**.
2. Choisissez {{ui:Esquisse sur cette face}} dans le panneau de droite.
3. Appuyez sur {{key:P}} pour l'outil Point et cliquez près du milieu de la face.
4. Choisissez {{ui:Quitter}}.
5. Choisissez {{ui:Trou}}. Un trou de 6 mm traverse la plaque. Modifiez **Diamètre (mm)** dans le panneau de droite si vous le souhaitez.

La zone **Pièce** en bas à gauche affiche maintenant un volume, une aire de surface, les dimensions (60 × 40 × 10 mm) et « Trous traversants : 1 ».

### L'enregistrer

1. Appuyez sur {{key:Mod+S}} ou choisissez {{ui:Enregistrer}}.
2. Votre navigateur télécharge `Part1.partcraft.json` dans son dossier de téléchargements. Le fichier contient tout l'historique : rouvrez-le avec {{ui:Ouvrir}} pour continuer à le modifier.

Pour renommer d'abord la pièce, cliquez dans un espace vide de la vue pour que rien ne soit sélectionné, puis tapez un nouveau **Nom** dans le panneau de droite.

## Pour aller plus loin

- [Dessiner votre première esquisse](topic:sketch-basics) et [Définir entièrement une esquisse](topic:relations-dimensions) expliquent le dessin d'esquisse en détail.
- [Modifier une pièce par son historique](topic:edit-history) montre comment modifier ce que vous avez construit.
- [Arrondir, chanfreiner et évider](topic:fillet-chamfer-shell) et [Faire un dessin](topic:drawing-pdf) terminent la pièce. [Ce qui n'est pas encore disponible](topic:not-built-yet) liste ce que cette version ne fait pas, comme les balayages et les lissages.
- [Venir d'un autre modeleur paramétrique](topic:coming-from) liste les habitudes qui fonctionnent différemment ici.
- [Touches et souris](topic:keyboard) est la liste complète des raccourcis.
- [Utiliser cette aide](common:help).
