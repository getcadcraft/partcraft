---
title: Créer des parcours d'outil et du G-code (Manufacture)
summary: Définissez le brut et une origine de travail, choisissez les outils, ajoutez des opérations de surfaçage, de poche, de contour, de perçage et de chanfrein en choisissant des faces, terminez tout le modèle en 3D (parallélisme, crête constante), simulez le brut par rapport au modèle pour repérer les surcoupes et le temps de cycle, puis téléchargez le G-code depuis l'un des trois post-processeurs intégrés ou un que vous modifiez vous-même.
keywords: step pour l'atelier, coordonnées de travail, passage CAM, parallèle, crête constante, finition 3D, finition, fraise boule, bibliothèque d'outils, modifier le post, post-processeur personnalisé, éditeur de post-processeur, adaptatif, dégagement adaptatif, engagement constant, trochoïdal, hsm, usinage grande vitesse, manufacture, FAO, parcours d'outil, G-code, NC, CNC, fraisage, poche, contour, profil, surfaçage, perçage, G83, G81, G73, chanfrein, brut, décalage d'origine, G54, post-processeur, GRBL, LinuxCNC, avances et vitesses, simulation, surcoupe, temps de cycle
from: beeb29aa
---

L'espace de travail Manufacture transforme la pièce en parcours d'outil pour une fraiseuse 3 axes, et les écrit en G-code. La plupart des opérations sont en **2.5 axes** : l'outil reste vertical, les parois sont usinées droit vers le bas et les fonds à plat. **Parallélisme** et **À crête constante** finissent les surfaces courbes en 3D (voir [Finition 3D](topic:finish-3d)) ; l'outil reste vertical (trois axes, sans inclinaison). Il travaille sur les faces nommées que le noyau de maillage fournit pour la pièce (voir [Le noyau de maillage](topic:solid-kernels)).

Version de laboratoire : vérifiez chaque programme dans le simulateur de votre commande, et exécutez-le d'abord dans le vide au-dessus du brut.

## Mise en place

1. Choisissez **Manufacture** dans le sélecteur d'espace de travail, puis {{ui:Nouvelle mise en place}}.
2. Dans l'onglet **Mise en place**, choisissez :
   - **Axe d'outil (+Z)** : la direction dans laquelle l'outil pénètre la pièce. Le +Y du monde (le haut de PartCraft) est la valeur par défaut ; X machine correspond alors à X du monde, et Y machine à −Z du monde.
   - **Origine de travail (G54)** : un coin ou le centre du brut, dessus ou dessous, le centre supérieur du modèle, ou l'origine du modèle.
   - **Brut** : un parallélépipède ou un cylindre, soit le modèle plus des surépaisseurs (côtés, dessus, dessous), soit une taille fixe.
   - **Matériau** (définit les avances et vitesses de départ), le **post-processeur** (commande), la vitesse maximale de broche de la machine, la vitesse d'avance rapide et le temps de changement d'outil, le liquide de refroidissement et le numéro de programme.

## Outils

L'onglet **Outils** contient la bibliothèque : fraises à bout plat, boule et à rayon d'angle, forets, fraises à chanfreiner et fraises à surfacer, chacune avec un numéro T, un diamètre, un nombre de dents et une longueur de dents (ainsi que le rayon d'angle, l'angle de pointe ou l'angle de chanfrein lorsqu'ils s'appliquent).

Mes outils peuvent être enregistrés dans le navigateur et transférés d'un ordinateur à l'autre sous forme de fichier : voir [La bibliothèque d'outils](topic:tool-library).

La vitesse de broche et l'avance viennent du matériau : n = 1000 × vitesse de coupe / (π × diamètre), avance = n × nombre de dents × épaisseur de copeau (forets : n × avance par tour). Les valeurs sont des valeurs de départ prudentes issues de plages publiées, non réglées pour votre machine ; saisissez la vitesse de coupe, l'épaisseur de copeau, les tr/min ou l'avance indiqués par le fabricant de votre outil pour les remplacer. Lorsque la vitesse dépasse le maximum de la machine, elle y est maintenue et l'avance suit, en conservant l'épaisseur de copeau.

## Ajouter des opérations

Chaque bouton de la barre d'outils ajoute une opération et, lorsqu'il a besoin de géométrie, lance la sélection : cliquez sur des faces ou des arêtes dans la vue (cliquez à nouveau pour en retirer une), puis {{ui:Fin de la sélection}} ou {{key:Esc}}.

| Opération | Sélection | Action |
|---|---|---|
| {{ui:Face}} | rien | Passes en zigzag sur tout le brut, au-delà de ses bords, jusqu'au dessus du modèle |
| {{ui:Poche}} | une face plane de fond, un trou rond, ou une chaîne fermée d'arêtes | Dégage la région par passes de décalage, de l'intérieur vers l'extérieur, à chaque profondeur de passe ; les îlots (faces qui se dressent à l'intérieur du fond) sont laissés ; un fond ouvert de tous côtés (rien de plus haut à l'extérieur) est dégagé jusqu'au bord du brut |
| {{ui:Adaptative}} | la même chose que Poche | Dégage la même région par passes qui usinent chacune une largeur fixée (**Engagement**, une fraction du diamètre), de sorte que la fraise ne prend jamais une rainure pleine largeur, même dans les angles ; elle entre par une hélice et termine les parois à chaque niveau. Les coupes étroites permettent une profondeur de passe plus grande et une avance plus élevée |
| {{ui:Contour}} | une face plane (son contour), une face ronde, ou des arêtes | Suit le contour décalé du rayon de l'outil, à l'extérieur ou à l'intérieur, avec des arcs d'entrée et de sortie et des languettes facultatives |
| {{ui:Perçage}} | des trous (cliquez sur la paroi ou sur le bord d'un trou) | Perce chaque trou avec un cycle fixe : picotage (G83), perçage (G81) ou brisure de copeau (G73) ; ou indiquez un diamètre pour percer chaque trou de cette taille |
| {{ui:Chanfrein}} | le contour ou les arêtes d'une face | Fait passer une fraise à chanfreiner le long de l'arête pour qu'elle usine la largeur que vous avez définie |
| {{ui:Parallélisme}} | rien (le modèle entier) | Finition 3D en lignes parallèles selon n'importe quel angle, en suivant la surface avec une fraise boule, à rayon d'angle ou à bout plat. Voir [Finition 3D](topic:finish-3d) |
| {{ui:À crête constante}} | rien (le modèle entier) | Finition 3D par passes espacées d'une distance fixée sur la surface, de sorte que la crête entre elles ait la hauteur que vous demandez |

Sélectionnez une opération dans la liste pour modifier son outil, ses hauteurs (dégagement, retrait, hauteur d'avance, dessus, dessous), sa profondeur de passe, son décalage entre passes, la surépaisseur à laisser, la passe de finition, l'approche (hélice, rampe ou plongée), le fraisage en avalant, les languettes ou le cycle. {{ui:Monter}} et {{ui:Descendre}} réordonnent, {{ui:Désactiver}} l'exclut, {{ui:Supprimer}} la retire. Tout figure dans l'historique d'annulation et est enregistré dans le fichier de la pièce.

Le décalage entre passes d'une poche ne dépasse pas la moitié du diamètre de l'outil, de sorte que chaque point de son fond se trouve à moins d'un rayon d'outil d'une passe. Les angles intérieurs conservent le rayon de l'outil.

**Le dégagement adaptatif** maintient l'engagement de la fraise proche d'une valeur. Un engagement de 0.15 du diamètre correspond à un angle d'engagement d'environ 46° : l'arc de l'arête de la fraise dans la matière. Une poche par décalage, en revanche, coupe pleine largeur à sa première passe et s'enroule davantage dans chaque angle intérieur. Entre les passes, l'outil reste enfoncé là où il se déplace dans l'air de coupe, et se relève puis redescend dans l'air de coupe ailleurs. Les passes sont calculées sur une grille fine sur la région (cellules d'environ un douzième du rayon de l'outil), de sorte que l'engagement peut dépasser d'environ une cellule la valeur réglée ; les parois sont terminées exactement. Une grande région ouverte produit un long programme avec de nombreux petits déplacements.

## Simuler

Les parcours d'outil sont recalculés après chaque modification (celui de la pièce aussi). {{ui:Simuler}} affiche aussi le brut restant après tout le programme. Le panneau affiche :

- **Temps de cycle** : les mouvements d'usinage à leur avance, les mouvements rapides en lignes droites à la vitesse d'avance rapide de la mise en place, plus le temps de changement d'outil. Les machines réelles accélèrent, donc elles sont plus lentes.
- **Surcoupes** : endroits où l'outil est descendu à plus de 0.02 mm sous la surface de la pièce. Des marques rouges les montrent dans la vue.
- **Brut restant sur la pièce**.

Le brut est une carte de hauteurs du dessus (une carte Z), donc il ne peut pas montrer les contre-dépouilles. Faites glisser **Lecture** pour déplacer l'outil le long du programme. Dans la vue, les mouvements d'usinage sont pleins et les rapides en pointillés, avec une couleur par opération.

Lorsque **Afficher le brut simulé** est activé, le brut est coloré par rapport au modèle, cellule par cellule : **vert** là où il se trouve sur le modèle (à 0.02 mm près), **rouge** là où l'outil a entamé le modèle, et là où du brut reste sur le modèle, **jaune** pour une peau fine, **orange** pour davantage, qui s'estompe jusqu'au **gris** du brut non usiné à partir de 1 mm. Les couleurs sont recalculées à chaque modification, à partir de la même carte de hauteurs que les valeurs du panneau ; le vert et le rouge concordent donc avec la ligne Surcoupes. Un chanfrein entame volontairement le modèle et apparaît en rouge le long de son arête.

## Générer le G-code

Choisissez la commande sous **Post-processeur**, puis appuyez sur **Télécharger le G-code** (ou {{ui:Post-processeur}} dans la barre d'outils) :

| Commande | Fichier | Remarques |
|---|---|---|
| ISO style Fanuc | .nc | %, numéro O, numéros de ligne, T M6 avec G43 H, cycles fixes |
| GRBL | .nc | Pas de changeur d'outil ni de cycles fixes : un changement d'outil s'arrête avec M0, le perçage est écrit en déplacements simples |
| LinuxCNC | .ngc | T M6 avec G43 H, cycles fixes, M2 |
| Le vôtre | au choix | Un post-processeur que vous avez écrit ou modifié : {{ui:Modifier le post…}}, {{ui:Nouveau post…}}, {{ui:Importer un fichier de post…}} |

Chaque fichier commence par des commentaires sur le programme, le brut, le décalage d'origine et les outils. Les coordonnées sont en millimètres avec 3 décimales. {{ui:Parcours d'outil en CSV}} et {{ui:Parcours d'outil en JSON}} exportent les déplacements eux-mêmes.

**Vérifiez le résultat dans le simulateur propre à votre machine avant de couper, et exécutez-le d'abord dans le vide au-dessus du brut.** Les trois post-processeurs intégrés sont des points de départ qui suivent le comportement documenté des commandes ; ils n'ont pas été validés sur une machine particulière. Un post-processeur que vous modifiez relève de votre responsabilité à valider. Pour savoir comment en écrire un : [Post-processeurs](topic:post-processors).

## STEP exact pour l'atelier

Sous les boutons G-code de l'onglet **Opérations**, {{ui:STEP exact (coordonnées de travail)}} télécharge `<part>-work.step` : la pièce sous forme de solide exact (vrais cylindres pour les trous et les bossages, vrais cercles pour leurs arêtes), avec son origine à l'origine de travail de cette mise en place et Z suivant l'axe d'outil. Ce sont les coordonnées qu'utilise le G-code ; ainsi, le programme FAO ou l'outil de contrôle propre à un atelier aligne le modèle sur le programme sans le déplacer. Le fichier ne contient que la pièce, ni le brut ni les parcours d'outil.

{{ui:Exporter}} › {{ui:STEP AP242 (solide exact)}} écrit le même solide dans la position propre de la pièce (Z vers le haut) : voir [Exporter pour l'impression, STEP et DXF](topic:export-files#for-other-cad-programs-step).

## Limites

- Les poches, contours, perçages et chanfreins sont en 2.5 axes. Les faces courbes peuvent être finies en 3D ([parallélisme et crête constante](topic:finish-3d)) mais pas ébauchées en 3D (un cône reste en gradins jusqu'à ce que vous le finissiez), et il n'y a pas d'usinage des restes. Le dégagement adaptatif est en 2D (fonds plats).
- Trois axes seulement : pas d'inclinaison, pas de tournage, pas de contrôle.
- Les porte-outils et les queues ne sont pas vérifiés contre les collisions ; un avertissement apparaît lorsqu'une coupe est plus profonde que la longueur de dents.
- Les avances et vitesses sont des valeurs de départ. Un post-processeur est un texte que vous pouvez modifier, mais il ne décide que de la manière dont les déplacements sont écrits ; il ne peut ni modifier le parcours d'outil, ni ajouter d'axes, ni connaître votre machine ([Post-processeurs](topic:post-processors) énumère ce qu'il ne peut pas faire).

## Envoyer le programme à une machine

Dans CadCraft Studio sur ordinateur, avec une machine configurée dans Studio, **Envoyer à une machine…** apparaît à côté de **Télécharger le G-code** et téléverse le même programme vers la machine de votre réseau. Il n'est jamais lancé depuis PartCraft : démarrez-le sur la machine lorsque la mise en place est claire. Dans un navigateur, ce bouton n'est pas affiché (une page web ne peut pas atteindre une machine de votre réseau) : téléchargez le programme à la place.
