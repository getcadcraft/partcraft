---
title: L'écran de PartCraft
summary: Une visite de chaque barre et panneau : la barre d'outils et ses changements, l'historique, les informations sur la pièce, la vue 3D, le panneau des propriétés et la barre d'état.
keywords: écran, disposition, barre d'outils, historique, arbre des fonctions, propriétés, panneau, barre d'état, interface, ui, visite, plein écran
from: 5b5bb843
---

L'écran comporte cinq parties : la barre d'outils en haut, l'historique à gauche, la vue 3D au centre, le panneau des propriétés à droite et la barre d'état en bas. Au-dessus de tout se trouve la barre d'application CadCraft.

## La barre d'application

La fine barre tout en haut appartient au site CadCraft, pas à PartCraft lui-même. Elle affiche le nom de l'application et l'endroit où elle s'exécute, un menu de version, **À propos de PartCraft**, le bouton de mode d'écran et le sélecteur de thème Papier / Objet.

- **Papier** affiche des traits sombres sur une feuille claire. **Objet** affiche des traits clairs sur un fond sombre. Les couleurs d'esquisse suivent le thème.
- {{ui:Paramètres}} (l'engrenage, ou {{key:Mod+,}}) a un onglet {{ui:PartCraft}} : quel bouton de souris fait tourner la vue, molette ou pavé tactile, et les relations lors de l'esquisse. Voir [Paramètres de PartCraft](topic:settings).
- Le bouton de mode d'écran, ou {{key:Ctrl+Shift+F}}, fait défiler normal, plein écran et plein écran avec les barres masquées. Lorsque les barres sont masquées, placez le pointeur sur le bord supérieur (ou touchez-le) pour les faire revenir. {{key:Esc}} revient au mode normal. Cette touche est {{key:Ctrl+Shift+F}} aussi sur un Mac, et non ⌘.

## La barre d'outils

La barre d'outils est regroupée. Elle change selon ce que vous faites, afin de tenir sur une seule rangée :

| Groupe | Boutons | Affiché |
|---|---|---|
| Fichier | {{ui:Nouveau}}, {{ui:Ouvrir}}, {{ui:Enregistrer}}, {{ui:Exporter}} (un menu) | Toujours |
| Esquisse | {{ui:Esquisse}} | Lorsqu'aucune esquisse n'est ouverte |
| Esquisse | {{ui:Quitter}}, {{ui:Ligne}}, {{ui:Rectangle}}, {{ui:Cercle}}, {{ui:Arc}}, {{ui:Point}}, {{ui:Ligne d'axe}}, {{ui:Congé}}, {{ui:Cote}}, {{ui:Construction}} | Seulement lorsqu'une esquisse est ouverte |
| Fonctions | {{ui:Extrusion}}, {{ui:Couper}}, {{ui:Révolution}}, {{ui:Trou}}, {{ui:Linéaire}}, {{ui:Circulaire}}, {{ui:Symétrie}}, {{ui:Congé}}, {{ui:Chanfrein}}, {{ui:Coque}}, {{ui:Plus}} (un menu : Révolution en coupe, Plan, Axe, Point, Balayage, Lissage, Dépouille) | Sur la pièce, pas pendant qu'une esquisse ou le dessin est ouvert. Congé et Chanfrein fonctionnent sur des arêtes droites entre deux faces planes ; Coque et Dépouille sur des faces planes. Balayage et Lissage ne sont pas encore construits dans cette version (ils demandent un noyau exact) ; cliquer dessus le signale |
| Fonctions | {{ui:Terminé}} | Seulement lorsque vous choisissez des arêtes ou des faces pour un congé, un chanfrein, une coque ou une dépouille |
| Dessin | {{ui:Dessin}} | Sur la pièce (utilisable une fois que la pièce a un solide) |
| Dessin | {{ui:Référence}}, {{ui:Cadre}}, {{ui:État de surface}}, {{ui:Détail}}, {{ui:PDF}}, {{ui:Retour}} | Seulement sur la feuille de dessin |
| Assemblage | {{ui:Assemblage}} | Sur la pièce (utilisable une fois que la pièce a un solide) |
| Assemblage | {{ui:Ajouter une copie}}, {{ui:Insérer}}, {{ui:Liaison}}, {{ui:Collision}}, {{ui:Modifier la pièce}}, {{ui:Fermer}} | Seulement dans un assemblage |
| Assemblage | {{ui:Retour}} | Pendant la modification d'une pièce issue d'un assemblage |
| Modifier | {{ui:Annuler}}, {{ui:Rétablir}}, {{ui:Copier}}, {{ui:Coller}}, {{ui:Plus}} (un menu : Couper, Copier, Coller, Coller à la même position, Dupliquer, Supprimer, Tout sélectionner, Désélectionner tout) | Toujours ; chaque élément agit sur l'esquisse, l'historique ou l'assemblage dans lequel vous êtes |
| Affichage | {{ui:Ajuster}}, {{ui:Normal à}}, {{ui:Vues}} (un menu : Mesurer, Propriétés de masse, Coupe, Dépouille, Zébrure, Courbure, {{ui:Plans de base}}, puis Isométrique, Face, Retour, Dessus, Dessous, Droite, Gauche) | Toujours |

Survolez un bouton pour voir ce qu'il fait et son raccourci. Un bouton grisé ne peut pas être utilisé pour le moment : par exemple les boutons de fonction pendant qu'une esquisse est ouverte, ou {{ui:Liaison}} avant que l'assemblage ait deux pièces.

Le menu {{ui:Plus}} du groupe Modifier liste chaque action d'édition avec son raccourci. Ce sur quoi agissent copier et coller dépend de l'endroit où vous êtes ; voir [Copier, coller et dupliquer](topic:copy-paste). L'info-bulle d'un élément grisé indique pourquoi il ne peut pas agir pour l'instant.

Le menu {{ui:Exporter}} contient {{ui:STL, pour l'impression 3D}}, {{ui:3MF, pour l'impression 3D}}, {{ui:STEP AP242 (solide exact)}}, {{ui:STEP AP214 (solide exact)}}, {{ui:STEP (facetté, noyau maillage)}}, {{ui:STEP AP214 (facetté, noyau maillage)}}, {{ui:DXF de l'esquisse ou de la face plane}} et {{ui:Dessin (PDF) : vues, coupe, détail, tolérancement géométrique}}. Les éléments STEP exacts écrivent les faces rondes sur leurs vraies surfaces ; les éléments facettés les écrivent en facettes planes.

## L'historique (à gauche)

Le panneau de gauche est l'historique des fonctions de la pièce, la liste que PartCraft reconstruit de haut en bas.

- L'en-tête est le nom de la pièce (« Part1 » tant que vous ne la renommez pas).
- **Plan Face**, **Plan Dessus** et **Plan Droite** viennent en premier. Cliquez sur l'un d'eux pour le sélectionner ; il s'illumine dans la vue.
- En dessous se trouvent vos fonctions, dans l'ordre où elles ont été créées. Une esquisse utilisée par une fonction est en retrait sous cette fonction.
- Un drapeau à l'extrémité droite d'une ligne indique son état :

| Drapeau | Signification |
|---|---|
| (aucun) | Construite, et l'esquisse est entièrement définie |
| − | Une esquisse sous-définie (elle peut encore bouger) |
| + | Une esquisse sur-définie |
| ⚠ | Construite, avec un avertissement (survolez pour lire) |
| ⚠ erreur | La fonction a échoué. Survolez pour lire pourquoi, ou cliquez dessus |
| ⚠ non construite | La fonction a besoin d'une autre qui a échoué ou est désactivée |
| désactivé | Désactivée |

- Chaque fonction affiche son nombre principal après son nom, comme « 25 mm » pour une extrusion ou « Ø6.6 thru » pour un trou. Double-cliquez sur le nombre, ou appuyez sur {{key:F2}} sur la ligne, pour le modifier directement. Voir [Modifier les dimensions](topic:change-sizes).
- Cliquez sur une fonction pour la modifier à droite. Double-cliquez sur une esquisse pour l'ouvrir.
- Lorsque vous revenez en arrière, une ligne **Barre de retour · avancer** apparaît dans la liste. Les fonctions situées sous elle sont grisées et ne sont pas construites.
- Lorsqu'une ligne a le focus, {{key:Up}} et {{key:Down}} passent d'une ligne à l'autre, et {{key:Alt+Up}} / {{key:Alt+Down}} déplacent la fonction elle-même, lorsque l'historique le permet.

Dans un assemblage, le même panneau liste à la place les **Pièces** (la première est marquée « fixée ») et les **Liaisons**.

### Informations sur la pièce

Sous l'historique, la case **Pièce** liste le **Volume**, l'**Aire de surface**, la **Taille (X × Y × Z)**, les **Trous traversants**, les **Corps**, les **Triangles**, le nombre de **Fonctions** et combien sont en **Échec**. Les volumes et aires sont ceux du solide facetté construit par le noyau maillage, un peu inférieurs à la valeur réelle pour les formes rondes (voir [Fonctions et leurs options](topic:features#curves-resolution)).

Dans un assemblage, la case porte l'en-tête **Assemblage** : Pièces, Instances, Liaisons, Non liées et Interférence.

## La vue 3D (au centre)

La vue montre le solide, les plans de base et toute esquisse non encore utilisée par une fonction.

Les plans de base sont dessinés en entier tant que la pièce est vide. Une fois qu'elle a un solide, ils reculent : tracés en pâle, pour ne pas masquer la pièce, et les clics les traversent pour atteindre la pièce. Ils reviennent en entier lorsque vous choisissez où esquisser ({{ui:Esquisse}} sans rien choisi) et lorsque vous en sélectionnez un dans l'historique. {{ui:Vues}} › {{ui:Plans de base}} les masque complètement ; ils restent visibles lorsque vous choisissez où esquisser. PartCraft garde ce choix en mémoire.

- Faites glisser pour tourner la pièce, clic droit ou clic molette pour faire un panoramique, faites rouler la molette pour zoomer au pointeur. Détails dans [Touches et souris](topic:keyboard).
- Survolez une face, une arête ou un plan pour le voir s'illuminer. Cliquez pour le choisir. Les faces s'illuminent entières, et les arêtes sont tracées et choisies entières. {{key:Shift}}+clic ajoute plusieurs arêtes ou faces ; elles restent marquées.
- Le cube de vue en haut à droite tourne avec la pièce : cliquez sur une face, une arête ou un coin pour regarder depuis là, faites-le glisser pour tourner, et le bouton maison revient au point de départ. Voir [Le cube de vue](topic:view-cube).
- Une extrusion sélectionnée affiche une flèche orange sur sa face d'extrémité, une révolution une flèche courbe à la fin de sa rotation : faites glisser la flèche pour changer la profondeur ou l'angle, ou saisissez une valeur dans la case à côté. Voir [Modifier les dimensions](topic:change-sizes#drag-it-in-the-view).
- Lorsqu'une pièce est vide, un encadré intitulé **Démarrer une pièce** liste les premières étapes.
- Déposez un fichier `.partcraft.json` ou `.partcraft-asm.json` n'importe où sur la vue pour l'ouvrir. Un fichier `.step`, `.stp`, `.stl`, `.obj`, `.3mf` ou `.3dm` déposé ici s'ouvre comme corps solide.

### Pendant le choix d'arêtes ou de faces

Après {{ui:Congé}}, {{ui:Chanfrein}} ou {{ui:Coque}} sans rien choisi (ou {{ui:Choisir les arêtes}} sur une telle fonction), la pièce s'affiche telle qu'elle était avant cette fonction. Cliquez sur des arêtes ou des faces pour les ajouter ou les retirer ; leurs marques indiquent ce qui est retenu. {{ui:Terminé}} ou {{key:Esc}} termine. Voir [Arrondir, biseauter et évider](topic:fillet-chamfer-shell).

### Sur la feuille de dessin

{{ui:Dessin}} remplace la vue 3D par la feuille de dessin A3. La molette zoome, le glissement droit ou central fait un panoramique, et {{key:F}} ajuste. Voir [Créer un dessin](topic:drawing-pdf).

### Pendant qu'une esquisse est ouverte

La vue se tourne pour regarder droit le plan d'esquisse, et une couche d'esquisse 2D apparaît par-dessus. La pièce n'affiche que les fonctions créées avant cette esquisse. Une bande en haut à gauche affiche la puce d'état de l'esquisse (« Entièrement définie », « Sous-définie · 3 degrés de liberté », etc.) et son nom, comme « Sketch2 on a face of Extrude1 ».

## Le panneau des propriétés (à droite)

Le panneau de droite affiche ce qui est sélectionné, et son en-tête le nomme :

- **Pièce** (rien de sélectionné) : le **Nom** de la pièce et le réglage **Courbes**.
- Un plan : un bouton {{ui:Esquisse sur ce plan}}.
- Une **Face** : son type (face plane, cylindre avec son rayon et son axe, cône, sphère ou tore), son aire, la fonction qui l'a créée, et pour une face plane {{ui:Esquisse sur cette face}}, {{ui:Normal à}}, {{ui:Exporter la face en DXF}}, {{ui:Extruder depuis la face}}, {{ui:Creuser la face}} et {{ui:Trou ici}} (voir [Tirer ou pousser une face entière](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Une **Arête** : son type (droite, cercle avec son centre et son rayon, ou courbe), sa longueur et les deux faces entre lesquelles elle se trouve (comme « Extrude1 end face and Extrude1 side »), avec les boutons {{ui:Congé}} et {{ui:Chanfrein}}.
- Plusieurs arêtes ou faces choisies avec {{key:Shift}} : leur nombre, avec {{ui:Congé}} et {{ui:Chanfrein}} pour les arêtes, et {{ui:Effacer}}.
- Une fonction : ses nombres et options, les cotes de son esquisse, puis {{ui:Désactiver}}, {{ui:Revenir ici}}, {{ui:Monter}}, {{ui:Descendre}}, {{ui:Supprimer}} et son **Nom**.
- Une esquisse ouverte : son état, les relations que vous pouvez ajouter à la sélection, la liste des relations et des cotes, **Ajouter par coordonnées**, et {{ui:Quitter l'esquisse}}, {{ui:Ajuster}} et {{ui:Exporter en DXF}}.
- Sur la feuille de dessin : les réglages de coupe et de détail, ou le symbole GD&T sélectionné.
- Dans un assemblage : l'assemblage, la pièce sélectionnée, ou la liaison sélectionnée.

Chaque case de nombre prend effet lorsque vous appuyez sur {{key:Enter}} ou {{key:Tab}}, ou lorsque vous cliquez ailleurs. La pièce se reconstruit aussitôt ; il n'y a pas de bouton OK. Utilisez {{key:Mod+Z}} pour revenir en arrière.

## La barre d'état (en bas)

- À gauche, les coordonnées du pointeur dans l'esquisse (seulement lorsqu'une esquisse est ouverte).
- Au centre, les messages : ce qu'il faut faire ensuite, et pourquoi quelque chose a été refusé. Lisez-la lorsque rien ne semble se passer.
- Près de la droite, la puce du noyau : toujours « Noyau maillage » dans cette version. Survolez-la pour savoir ce que cela signifie. Voir [Le noyau maillage](topic:solid-kernels).
- À droite, une puce : « Reconstruction… » pendant que la pièce se reconstruit, puis « Reconstruit en … ms » lorsque tout va bien, ou « 1 fonction en échec ». Dans un assemblage, elle indique « Placé en … ms » ou compte les problèmes de liaisons.

Voir aussi [Démarrer une notice dans Illustrate](topic:illustrate) : l'espace de travail qui produit des notices d'assemblage à partir de vos pièces et assemblages.

## Sur un écran étroit

Jusqu'à 760 pixels de large, comme sur un téléphone, la vue conserve l'écran : la barre d'outils tient sur une rangée qui défile latéralement, et les panneaux s'ouvrent comme des feuilles depuis une barre en bas. {{ui:Outils}} masque la barre d'outils et {{ui:Déplacement}} la place en bas. Voir [Pavé tactile, écran tactile et petits écrans](topic:trackpad-and-touch).
