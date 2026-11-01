---
title: L'écran de PartCraft
summary: Une visite de chaque barre et de chaque panneau : la barre d'outils et la façon dont elle change, l'historique, les caractéristiques de la pièce, la vue 3D, le panneau des propriétés et la barre d'état.
keywords: écran, disposition, barre d'outils, historique, arbre des fonctions, propriétés, panneau, barre d'état, interface, visite, plein écran
from: 7394fc49
---

L'écran comporte cinq parties : la barre d'outils en haut, l'historique à gauche, la vue 3D au milieu, le panneau des propriétés à droite et la barre d'état en bas. Au-dessus de tout se trouve la barre d'application CadCraft.

## La barre d'application

La fine barre tout en haut appartient au site CadCraft, pas à PartCraft lui-même. Elle affiche le nom de l'application et l'endroit où elle s'exécute, un menu des versions, **À propos de PartCraft**, le bouton de mode d'écran et le commutateur de thème Papier / Modèle.

- **Papier** est un tracé sombre sur une feuille claire. **Modèle** est un tracé clair sur fond sombre. Les couleurs des esquisses suivent le thème.
- {{ui:Paramètres}} (la roue dentée, ou {{key:Mod+,}}) a un onglet {{ui:PartCraft}} : quel bouton de la souris fait tourner la vue, molette ou pavé tactile, et relations pendant l'esquisse. Voir [Paramètres de PartCraft](topic:settings).
- Le bouton de mode d'écran, ou {{key:Ctrl+Shift+F}}, fait défiler : normal, plein écran, et plein écran avec les barres masquées. Avec les barres masquées, amenez le pointeur sur le bord supérieur (ou touchez-y) pour les faire revenir. {{key:Esc}} revient au mode normal. Cette touche est {{key:Ctrl+Shift+F}} sur un Mac aussi, pas ⌘.

## La barre d'outils

La barre d'outils est en groupes. Elle change selon ce que vous faites, de sorte qu'elle tient sur une ligne :

| Groupe | Boutons | Affiché |
|---|---|---|
| Fichier | {{ui:Nouveau}}, {{ui:Ouvrir}}, {{ui:Enregistrer}}, {{ui:Exporter}} (un menu) | Toujours |
| Esquisse | {{ui:Esquisse}} | Quand aucune esquisse n'est ouverte |
| Esquisse | {{ui:Quitter}}, {{ui:Ligne}}, {{ui:Rectangle}}, {{ui:Cercle}}, {{ui:Arc}}, {{ui:Point}}, {{ui:Ligne d'axe}}, {{ui:Raccord}}, {{ui:Cote}}, {{ui:Construction}} | Seulement quand une esquisse est ouverte |
| Fonctions | {{ui:Extrusion}}, {{ui:Découpe}}, {{ui:Révolution}}, {{ui:Trou}}, {{ui:Linéaire}}, {{ui:Circulaire}}, {{ui:Symétrie}}, {{ui:Congé}}, {{ui:Chanfrein}}, {{ui:Coque}}, {{ui:Plus}} (un menu : Découpe par révolution, Plan, Axe, Point, Balayage, Lissage, Dépouille) | Sur la pièce, pas quand une esquisse ou le dessin est ouvert. Congé et Chanfrein agissent sur les arêtes droites entre deux faces planes ; Coque et Dépouille sur les faces planes. Balayage et Lissage ne sont pas encore disponibles dans cette version (ils demandent un noyau exact) ; un clic sur l'un d'eux le dit |
| Fonctions | {{ui:Terminé}} | Seulement pendant le choix des arêtes ou des faces d'un congé, d'un chanfrein, d'une coque ou d'une dépouille |
| Dessin | {{ui:Dessin}} | Sur la pièce (utilisable dès que la pièce a un solide) |
| Dessin | {{ui:Référence}}, {{ui:Cadre}}, {{ui:Finition}}, {{ui:Détail}}, {{ui:PDF}}, {{ui:Retour}} | Seulement sur la feuille de dessin |
| Assemblage | {{ui:Assemblage}} | Sur la pièce (utilisable dès que la pièce a un solide) |
| Assemblage | {{ui:Ajouter une copie}}, {{ui:Insérer}}, {{ui:Liaison}}, {{ui:Collision}}, {{ui:Modifier la pièce}}, {{ui:Fermer}} | Seulement dans un assemblage |
| Assemblage | {{ui:Retour}} | Pendant que vous modifiez une pièce depuis un assemblage |
| Édition | {{ui:Annuler}}, {{ui:Rétablir}}, {{ui:Copier}}, {{ui:Coller}}, {{ui:Plus}} (un menu : Couper, Copier, Coller, Coller sur place, Dupliquer, Supprimer, Tout sélectionner, Tout désélectionner) | Toujours ; chaque élément agit sur l'esquisse, l'historique ou l'assemblage où vous êtes |
| Affichage | {{ui:Ajuster}}, {{ui:Face à}}, {{ui:Vues}} (un menu : Mesurer, Propriétés de masse, Coupe, Dépouille, Zébrures, Courbure, {{ui:Plans de base}}, puis Isométrique, Face, Arrière, Dessus, Dessous, Droite, Gauche) | Toujours |

Survolez un bouton pour voir ce qu'il fait et sa touche. Un bouton grisé ne peut pas être utilisé pour le moment : par exemple les boutons de fonctions quand une esquisse est ouverte, ou {{ui:Liaison}} avant que l'assemblage n'ait deux pièces.

Le menu {{ui:Plus}} du groupe Édition liste chaque action d'édition avec sa touche. Ce sur quoi agissent copier et coller dépend de l'endroit où vous êtes ; voir [Copier, coller et dupliquer](topic:copy-paste). L'info-bulle d'un élément grisé dit pourquoi il ne peut pas agir maintenant.

Le menu {{ui:Exporter}} contient {{ui:STL, pour l'impression 3D}}, {{ui:3MF, pour l'impression 3D}}, {{ui:STEP AP242 (solide exact)}}, {{ui:STEP AP214 (solide exact)}}, {{ui:STEP (facetté, noyau maillage)}}, {{ui:STEP AP214 (facetté, noyau maillage)}}, {{ui:DXF de l'esquisse ou de la face plane}} et {{ui:Dessin (PDF) : vues, coupe, détail, tolérancement géométrique}}. Les deux éléments STEP exacts sont grisés : ils ne sont pas encore disponibles dans cette version, utilisez donc {{ui:STEP (facetté, noyau maillage)}}.

## L'historique (à gauche)

Le panneau de gauche est l'historique des fonctions de la pièce, la liste que PartCraft reconstruit de haut en bas.

- Le titre est le nom de la pièce (« Part1 » tant que vous ne la renommez pas).
- **Plan de face**, **Plan de dessus** et **Plan de droite** viennent en premier. Cliquez sur l'un pour le sélectionner ; il est mis en évidence dans la vue.
- En dessous se trouvent vos fonctions dans l'ordre où elles ont été faites. Une esquisse utilisée par une fonction est en retrait sous cette fonction.
- Un indicateur à l'extrémité droite d'une ligne donne son état :

| Indicateur | Signification |
|---|---|
| (aucun) | Construite, et une esquisse est entièrement définie |
| − | Une esquisse sous-définie (elle peut encore bouger) |
| + | Une esquisse surdéfinie |
| ⚠ | Construite, avec un avertissement (survolez pour le lire) |
| ⚠ erreur | La fonction a échoué. Survolez pour lire pourquoi, ou cliquez dessus |
| ⚠ non construite | La fonction dépend d'une autre qui a échoué ou qui est désactivée |
| désactivée | Désactivée |

- Chaque fonction affiche son nombre principal après son nom, comme « 25 mm » pour une extrusion ou « Ø6.6 traversant » pour un trou. Double-cliquez sur le nombre, ou appuyez sur {{key:F2}} sur la ligne, pour le modifier sur place. Voir [Changer les dimensions](topic:change-sizes).
- Cliquez sur une fonction pour la modifier à droite. Double-cliquez sur une esquisse pour l'ouvrir.
- Quand vous revenez en arrière, une ligne **Barre de retour arrière · avancer** apparaît dans la liste. Les fonctions en dessous sont grisées et non construites.
- Avec une ligne active, {{key:Up}} et {{key:Down}} passent d'une ligne à l'autre, et {{key:Alt+Up}} / {{key:Alt+Down}} déplacent la fonction elle-même, là où l'historique le permet.

Dans un assemblage, le même panneau liste à la place les **Pièces** (la première est marquée « fixe ») et les **Liaisons**.

### Caractéristiques de la pièce

Sous l'historique, la zone **Pièce** liste le **Volume** du solide, son **Aire de surface**, ses **Dimensions (X × Y × Z)**, ses **Trous traversants**, ses **Corps**, ses **Triangles**, le nombre de **Fonctions** et combien sont **En échec**. Les volumes et les aires sont ceux du solide facetté construit par le noyau maillage, un peu en dessous de la valeur vraie pour les formes rondes (voir [Fonctions et leurs options](topic:features#curves-resolution)).

Dans un assemblage, la zone a pour titre **Assemblage** : Pièces, Occurrences, Liaisons, Non liée et Interférence.

## La vue 3D (au milieu)

La vue affiche le solide, les plans de base et toute esquisse pas encore utilisée par une fonction.

Les plans de base sont dessinés en entier tant que la pièce est vide. Dès qu'elle a un solide, ils passent à l'arrière-plan : dessinés en pâle pour ne pas couvrir la pièce, et les clics les traversent pour atteindre la pièce. Ils reviennent en entier pendant que vous choisissez où esquisser ({{ui:Esquisse}} sans rien de choisi) et quand vous en sélectionnez un dans l'historique. {{ui:Vues}} › {{ui:Plans de base}} les masque tout à fait ; ils s'affichent quand même pendant que vous choisissez où esquisser. PartCraft se souvient de ce choix.

- Faites glisser pour tourner la pièce, glissez avec le bouton droit ou le bouton du milieu pour le panoramique, tournez la molette pour zoomer sur le pointeur. Détails dans [Touches et souris](topic:keyboard).
- Survolez une face, une arête ou un plan pour le voir s'éclairer. Cliquez pour le choisir. Les faces sont mises en évidence entières, et les arêtes sont dessinées et choisies entières. {{key:Shift}}+clic rassemble plusieurs arêtes ou faces. Elles restent marquées.
- Le ViewCube en haut à droite tourne avec la pièce : cliquez sur une face, une arête ou un coin pour regarder de là, faites-le glisser pour tourner, le bouton en forme de maison revient au départ. Voir [Le ViewCube](topic:view-cube).
- Une extrusion sélectionnée affiche une flèche orange sur sa face d'extrémité, une révolution une flèche courbe au bout de sa rotation : faites-la glisser pour changer la profondeur ou l'angle, ou tapez dans la zone à côté. Voir [Changer les dimensions](topic:change-sizes#drag-it-in-the-view).
- Quand une pièce est vide, un cadre intitulé **Commencer une pièce** liste les premières étapes.
- Déposez un fichier `.partcraft.json` ou `.partcraft-asm.json` n'importe où sur la vue pour l'ouvrir. Un fichier `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ou `.3dm` déposé là s'ouvre comme corps solide.

### Pendant le choix d'arêtes ou de faces

Après {{ui:Congé}}, {{ui:Chanfrein}} ou {{ui:Coque}} sans rien de choisi (ou {{ui:Choisir les arêtes}} sur une telle fonction), la pièce s'affiche comme avant cette fonction. Cliquez sur des arêtes ou des faces pour les ajouter ou les retirer ; leurs marques montrent ce qui est retenu. {{ui:Terminé}} ou {{key:Esc}} termine. Voir [Arrondir, chanfreiner et évider](topic:fillet-chamfer-shell).

### Sur la feuille de dessin

{{ui:Dessin}} remplace la vue 3D par la feuille de dessin A3. La molette zoome, le glissement avec le bouton droit ou du milieu fait un panoramique, {{key:F}} ajuste. Voir [Faire un dessin](topic:drawing-pdf).

### Pendant qu'une esquisse est ouverte

La vue se tourne pour regarder le plan de l'esquisse et un calque d'esquisse 2D apparaît au-dessus. La pièce n'affiche que les fonctions faites avant cette esquisse. Une bande en haut à gauche affiche la pastille d'état de l'esquisse (« Entièrement défini », « Sous-défini · 3 degrés de liberté », etc.) et son nom, par exemple « Sketch2 sur une face de Extrude1 ».

## Le panneau des propriétés (à droite)

Le panneau de droite affiche ce qui est sélectionné, et son titre le nomme :

- **Pièce** (rien de sélectionné) : le **Nom** de la pièce et le réglage **Courbes**.
- Un plan : un bouton {{ui:Esquisse sur ce plan}}.
- Une **Face** : son type (Face plane, Cylindre avec son rayon et son axe, Cône, Sphère ou Tore), son aire, la fonction qui l'a faite, et pour une face plane {{ui:Esquisse sur cette face}}, {{ui:Face à}}, {{ui:Exporter la face en DXF}}, {{ui:Extruder depuis la face}}, {{ui:Creuser la face}} et {{ui:Trou ici}} (voir [Tirer ou pousser une face entière](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Une **Arête** : son type (droite, cercle avec son centre et son rayon, ou courbe), sa longueur et les deux faces entre lesquelles elle se trouve (comme « face d'extrémité de Extrude1 et côté de Extrude1 »), avec les boutons {{ui:Congé}} et {{ui:Chanfrein}}.
- Plusieurs arêtes ou faces choisies avec {{key:Shift}} : leur nombre, avec {{ui:Congé}} et {{ui:Chanfrein}} pour les arêtes, et {{ui:Effacer}}.
- Une fonction : ses nombres et options, les cotes de son esquisse, puis {{ui:Désactiver}}, {{ui:Revenir ici}}, {{ui:Monter}}, {{ui:Descendre}}, {{ui:Supprimer}} et son **Nom**.
- Une esquisse ouverte : son état, les relations que vous pouvez ajouter à la sélection, la liste des relations et des cotes, **Ajouter par coordonnées**, et {{ui:Quitter l'esquisse}}, {{ui:Ajuster}} et {{ui:Exporter en DXF}}.
- Sur la feuille de dessin : les réglages de coupe et de détail, ou le symbole de tolérancement géométrique sélectionné.
- Dans un assemblage : l'assemblage, la pièce sélectionnée ou la liaison sélectionnée.

Chaque zone de nombre prend effet quand vous appuyez sur {{key:Enter}} ou {{key:Tab}}, ou cliquez ailleurs. La pièce se reconstruit aussitôt ; il n'y a pas de bouton OK. Utilisez {{key:Mod+Z}} pour revenir en arrière.

## La barre d'état (en bas)

- À gauche, les coordonnées du pointeur dans l'esquisse (seulement quand une esquisse est ouverte).
- Au milieu, les messages : ce qu'il faut faire ensuite, et pourquoi quelque chose a été refusé. Lisez-la quand rien ne semble se passer.
- Près de la droite, la pastille du noyau : toujours « Noyau maillage » dans cette version. Survolez-la pour ce que cela signifie. Voir [Le noyau maillage](topic:solid-kernels).
- À droite, une pastille : « Reconstruction… » pendant que la pièce se reconstruit, puis « Reconstruit en … ms » quand tout va bien, ou « 1 fonction en échec ». Dans un assemblage, elle indique « Placé en … ms » ou compte les problèmes de liaison.

Voir aussi [Commencer une notice dans Illustrate](topic:illustrate) : l'espace de travail qui fait des notices d'assemblage à partir de vos pièces et assemblages.

## Sur un écran étroit

Jusqu'à 760 pixels de large, comme sur un téléphone, la vue occupe l'écran : la barre d'outils est une seule ligne qui défile latéralement, et les panneaux s'ouvrent comme des feuilles depuis une barre en bas. {{ui:Outils}} masque la barre d'outils et {{ui:Déplacer}} la place en bas. Voir [Pavé tactile, écran tactile et petits écrans](topic:trackpad-and-touch).
