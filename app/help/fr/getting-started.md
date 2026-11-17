---
title: Commencer avec PartCraft
summary: Ce que PartCraft fait aujourd'hui, ce dont votre navigateur a besoin, et une première pièce en dix minutes, de l'esquisse au fichier enregistré.
keywords: démarrer, premier lancement, démarrage rapide, introduction, tutoriel, première pièce, plaque, paramétrique, modeleur de pièces
from: 7d43283f
---

PartCraft est l'application de pièces et d'assemblages paramétriques de la famille CadCraft. Vous dessinez une esquisse 2D, la contraignez avec des relations et des cotes, la transformez en solide avec des fonctions comme l'extrusion, la révolution et le trou, et modifiez ensuite n'importe quelle valeur : la pièce se reconstruit à partir de son historique. Les pièces entrent ensuite dans des assemblages, où des liaisons les placent et vous permettent de vérifier le mouvement.

Ce que fait cette version :

| Tâche | Ce que vous obtenez |
|---|---|
| Esquisses | Lignes, rectangles, cercles, arcs, points et lignes d'axe, avec relations et cotes, et un état en direct : sous-contrainte, entièrement contrainte ou sur-contrainte |
| Fonctions de solide | Extrusion, découpe, révolution, découpe par révolution, trous simples et à lamage, répétitions linéaires et circulaires, symétrie, congés et chanfreins sur les arêtes droites entre faces planes, et coques et dépouilles sur faces planes. Les balayages, lissages et autres fonctions nécessitant un noyau exact ne sont pas encore disponibles dans cette version : voir [Ce qui n'est pas encore disponible](topic:not-built-yet) |
| Historique | Modifiez les valeurs de chaque fonction, supprimez-la, désactivez-la, revenez en arrière, réordonnez et supprimez, avec annulation |
| Assemblages | Pièces jointes par des liaisons rigides, en rotation et glissières, une vérification des interférences et une vérification du mouvement |
| Dessins | Une feuille A3 avec trois vues, une isométrique, une coupe, une vue de détail, des cotes d'ensemble, des repères, des cadres de tolérance de fonction et des symboles d'état de surface, exportés en PDF |
| Fichiers | Ses propres fichiers de pièce et d'assemblage ; export en STL, 3MF, STEP exact, DXF et PDF |

Tout fonctionne dans votre navigateur, sur votre ordinateur. **Rien n'est téléversé.** Voir [Fichiers : ouvrir, enregistrer et exporter](topic:files) pour savoir où vont les fichiers.

## Ce dont vous avez besoin

- Une version récente de Chrome, Edge, Firefox ou Safari avec **WebGL** (graphismes 3D) et **WebAssembly** activés. Les deux sont activés par défaut. La géométrie des solides est construite par un noyau de maillage WebAssembly chargé avec l'application : voir [Le noyau de maillage](topic:solid-kernels).
- La souris est le plus simple. Le pavé tactile fonctionne, et les écrans tactiles conviennent pour la visualisation et les esquisses simples : voir [Pavé tactile, tactile et petits écrans](topic:trackpad-and-touch).
- Un écran d'au moins 1280 pixels de large affiche toute la barre d'outils sur une seule ligne. Les fenêtres plus étroites font défiler la barre d'outils latéralement ; sur un téléphone, les panneaux s'ouvrent comme des feuilles depuis une barre en bas.

Pour en savoir plus sur les navigateurs : [Navigateurs et ordinateurs](common:browsers).

:::note
PartCraft fonctionne dans le navigateur, et sur le bureau à l'intérieur de CadCraft Studio. L'enregistrement dans le cloud n'est pas encore disponible : vous ouvrez les pièces depuis votre ordinateur et les enregistrez de nouveau sur celui-ci sous forme de fichiers.
:::

## Ouvrir PartCraft

1. Ouvrez PartCraft.
2. Attendez pendant que l'écran affiche « Chargement du noyau de solides… ». Cela prend un moment la première fois.
3. Vous voyez une vue 3D vide avec trois plans de base, l'historique à gauche (« Pièce1 », puis Plan de face, Plan de dessus, Plan de droite) et une boîte dans la vue intitulée « Démarrer une pièce ».
4. La puce près de l'extrémité droite de la barre d'état indique « Noyau de maillage » : PartCraft construit chaque pièce avec le noyau de maillage dans cette version, donc les surfaces arrondies sont des facettes planes. Vous pouvez commencer à modéliser immédiatement.

Si la vue indique que le navigateur ne peut pas afficher la 3D, ou si le noyau n'a pas été chargé, voir [Dépannage](topic:troubleshooting#the-app-does-not-start).

## Votre première pièce : une plaque avec un trou

Vous allez réaliser une plaque de 60 × 40 mm, épaisse de 10 mm, avec un trou de 6 mm qui la traverse. Les unités sont les millimètres.

### Esquisser le contour

1. Cliquez sur **Plan de face** dans l'historique à gauche. Le plan est mis en surbrillance dans la vue.
2. Choisissez {{ui:Esquisse}} dans la barre d'outils, ou appuyez sur {{key:S}}. La vue se place face au plan, et l'outil Ligne est actif.
3. Appuyez sur {{key:R}} pour l'outil Rectangle.
4. Placez le pointeur sur l'origine (le petit cercle rouge avec une croix). Un petit carré indique que l'accrochage fonctionne. Cliquez.
5. Déplacez-vous vers le haut et vers la droite, puis cliquez à nouveau. Vous avez un rectangle. Ses lignes sont bleues : le bleu signifie qu'elles peuvent encore bouger.

### Donner des dimensions

1. Appuyez sur {{key:D}} pour l'outil Cote.
2. Cliquez sur la ligne du haut, puis cliquez un peu au-dessus. Une case de saisie s'ouvre avec la longueur actuelle.
3. Tapez `60` et appuyez sur {{key:Enter}}. Le rectangle passe à 60 mm de large.
4. Cliquez sur la ligne de gauche, puis un peu à gauche. Tapez `40` et appuyez sur {{key:Enter}}.

La puce en haut à gauche de la vue indique maintenant **Entièrement contraint**, et les lignes deviennent encre (noir sur le thème Papier, clair sur le thème Objet). Chaque point et chaque dimension sont fixés.

:::tip
Si vous avez commencé le rectangle loin de l'origine, la puce indique toujours « Sous-contraint · 2 degrés de liberté ». Appuyez sur {{key:S}} pour Sélection, cliquez sur un coin, {{key:Shift}}+clic sur l'origine, puis choisissez {{ui:• Coïncidente}} dans le panneau de droite.
:::

### Extruder

1. Choisissez {{ui:Quitter}} dans la barre d'outils, ou appuyez sur {{key:Esc}} jusqu'à la fermeture de l'esquisse (généralement deux fois).
2. Choisissez {{ui:Extrusion}}. Un solide de 10 mm apparaît. « Extrusion1 » est ajouté à l'historique, avec « Esquisse1 » en retrait dessous.
3. Le panneau de droite affiche les réglages de l'extrusion. Pour changer l'épaisseur, saisissez un nouveau nombre dans **Profondeur (mm)** et appuyez sur {{key:Enter}} ou {{key:Tab}}. La pièce se reconstruit immédiatement.

### Ajouter le trou

1. Cliquez sur la grande face plane à l'avant de la plaque (l'extrémité de l'extrusion). Toute la face est mise en surbrillance et le panneau de droite indique **Face**.
2. Choisissez {{ui:Esquisse sur cette face}} dans le panneau de droite.
3. Appuyez sur {{key:P}} pour l'outil Point, et cliquez près du centre de la face.
4. Choisissez {{ui:Quitter}}.
5. Choisissez {{ui:Trou}}. Un trou de 6 mm traverse la plaque. Modifiez **Diamètre (mm)** dans le panneau de droite si vous le souhaitez.

La zone **Pièce** en bas à gauche indique maintenant un volume, une aire de surface, les dimensions (60 × 40 × 10 mm) et « Trous traversants : 1 ».

### Enregistrer

1. Appuyez sur {{key:Mod+S}} ou choisissez {{ui:Enregistrer}}.
2. Votre navigateur télécharge `Part1.partcraft.json` dans son dossier de téléchargements. Le fichier contient tout l'historique : ouvrez-le de nouveau avec {{ui:Ouvrir}} pour continuer à le modifier.

Pour renommer la pièce d'abord, cliquez dans un espace vide de la vue pour ne rien sélectionner, puis saisissez un nouveau **Nom** dans le panneau de droite.

## Où aller ensuite

- [Dessiner votre première esquisse](topic:sketch-basics) et [Contraindre entièrement une esquisse](topic:relations-dimensions) expliquent correctement l'esquisseur.
- [Modifier une pièce par son historique](topic:edit-history) montre comment modifier ce que vous avez construit.
- [Arrondir, biseauter et évider](topic:fillet-chamfer-shell) et [Faire un dessin](topic:drawing-pdf) finissent la pièce. [Ce qui n'est pas encore disponible](topic:not-built-yet) liste ce que cette version ne fait pas, comme les balayages et les lissages.
- [Venant d'un autre modeleur paramétrique](topic:coming-from) liste les habitudes qui fonctionnent différemment ici.
- [Touches et souris](topic:keyboard) est la liste complète des raccourcis.
- [Utiliser cette aide](common:help).
