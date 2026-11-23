---
title: Créer les parcours d'outil et le G-code (Fabrication)
summary: Définir le brut et une origine de travail, choisir les outils, ajouter des opérations de face, poche, contour, perçage et chanfrein en sélectionnant des faces, finir tout le modèle en 3D (parallèle, à crête constante), simuler le brut par rapport au modèle pour détecter les surcoupes et le temps de cycle, et télécharger le G-code depuis l'un des trois post-processeurs intégrés ou depuis un post que vous modifiez vous-même.
keywords: step exact, step pour l'atelier, coordonnées de travail, passage à la FAO, parallèle, crête constante, finition 3D, finition, fraise boule, bibliothèque d'outils, modifier le post, post personnalisé, éditeur de post, adaptative, dégagement adaptatif, engagement constant, trochoïdal, usinage grande vitesse, fabrication, FAO, parcours d'outil, G-code, NC, CNC, fraiseuse, fraisage, poche, contour, profil, surfaçage, perçage, débourrage, G83, G81, G73, chanfrein, brut, décalage d'origine, G54, post-processeur, GRBL, LinuxCNC, avances et vitesses, simulation, surcoupe, temps de cycle
from: f8a03be8
---

L'espace de travail Fabrication transforme la pièce en parcours d'outil et les écrit en G-code. La plupart des opérations sont du fraisage à **2.5 axes** : l'outil reste vertical, les parois sont usinées droit vers le bas et les fonds sont plats. **Ébauche 3D** et **Reprise** dégagent les pièces courbes en 3D ([Ébauche 3D et usinage de reprise](topic:rough-3d)) ; **Parallélisme** et **À crête constante** les finissent ([Finition 3D](topic:finish-3d)). Sur une machine à axes rotatifs, toute opération peut avoir un outil incliné, et deux opérations déplacent les axes rotatifs pendant la coupe ([Usinage 4 et 5 axes](topic:multi-axis)). Il existe des opérations pour un tour ([Tournage](topic:turning)) et pour un palpeur ([Palpage](topic:probing)). Elle travaille sur les faces nommées que le noyau de maillage donne à la pièce (voir [Le noyau de maillage](topic:solid-kernels)).

Version de test : contrôlez chaque programme dans le simulateur de votre commande, et exécutez-le d'abord dans le vide au-dessus du brut.

## Préparation

1. Choisissez **Fabrication** dans le sélecteur d'espace de travail, puis {{ui:Nouvelle mise en place}}.
2. Dans l'onglet **Mise en place**, choisissez :
   - **Axe d'outil (+Z)** : le sens dans lequel l'outil pénètre dans la pièce. L'axe Y monde (+Y de PartCraft) est la valeur par défaut ; l'axe X machine est alors l'axe X monde, et l'axe Y machine est −Z monde.
   - **Origine de travail (G54)** : un coin ou le centre du brut, dessus ou dessous, le centre du dessus du modèle, ou l'origine du modèle.
   - **Brut** : une boîte ou un cylindre, soit le modèle plus des surépaisseurs (côtés, dessus, dessous), soit une taille fixe.
   - **Matériau** (définit les avances et vitesses de départ), le **post-processeur** (commande), la vitesse maximale de broche de la machine, la vitesse d'avance rapide et le temps de changement d'outil, le liquide de refroidissement et le numéro de programme.

## Outils

L'onglet **Outils** contient la bibliothèque : fraises à bout plat, à bout boule et à bout arrondi, forets, fraises à chanfreiner et fraises à surfacer, chacune avec un numéro T, un diamètre, un nombre de dents et une longueur de cannelure (plus le rayon d'angle, l'angle de pointe ou l'angle de chanfrein lorsqu'ils s'appliquent).

Mes outils peuvent être enregistrés dans le navigateur et transférés d'un ordinateur à l'autre sous forme de fichier : voir [La bibliothèque d'outils](topic:tool-library).

La vitesse de broche et l'avance viennent du matériau : n = 1000 × vitesse de coupe / (π × diamètre), avance = n × dents × épaisseur de copeau (forets : n × avance par tour). Les valeurs sont prudentes, de départ, tirées de plages publiées, et non réglées pour votre machine ; saisissez la vitesse de coupe, l'épaisseur de copeau, la vitesse de rotation ou l'avance indiquées par le fabricant de votre outil pour les remplacer. Lorsque la vitesse dépasse le maximum de la machine, elle est limitée à ce maximum et l'avance suit, en conservant l'épaisseur de copeau.

## Ajouter des opérations

Chaque bouton de la barre d'outils ajoute une opération et, lorsqu'elle a besoin d'une géométrie, lance la sélection : cliquez sur des faces ou des arêtes dans la vue (cliquez à nouveau pour en retirer une), puis {{ui:Fin de la sélection}} ou {{key:Esc}}.

| Opération | Sélection | Ce qu'elle fait |
|---|---|---|
| {{ui:Face}} | rien | Passes en zigzag sur tout le brut, au-delà de ses bords, jusqu'au dessus du modèle |
| {{ui:Poche}} | une face plane de fond, un trou rond, ou une chaîne fermée d'arêtes | Dégage la zone par passes décalées de l'intérieur vers l'extérieur, à chaque passe de profondeur ; les îlots (faces qui se dressent à l'intérieur du fond) sont laissés ; un fond ouvert de tous côtés (rien de plus haut à l'extérieur) est dégagé jusqu'au bord du brut |
| {{ui:Adaptative}} | la même chose que pour {{ui:Poche}} | Dégage la même zone par passes qui coupent chacune une largeur fixée (**Engagement**, une fraction du diamètre), de sorte que la fraise ne prend jamais une rainure pleine largeur, même dans les angles ; elle entre par une hélice et finit les parois à chaque niveau. Les passes étroites permettent une profondeur de passe plus grande et une avance plus élevée |
| {{ui:Contour}} | une face plane (son contour), une face ronde, ou des arêtes | Suit le contour décalé du rayon de l'outil, à l'extérieur ou à l'intérieur, avec arcs d'entrée et de sortie et, en option, des attaches |
| {{ui:Perçage}} | des trous (cliquez sur la paroi ou le bord d'un trou) | Perce chaque trou par un cycle fixe : débourrage (G83), perçage (G81) ou brise-copeaux (G73) ; ou donnez un diamètre pour percer tous les trous de cette taille |
| {{ui:Chanfrein}} | le contour ou les arêtes d'une face | Fait suivre une fraise à chanfreiner le long de l'arête, de sorte qu'elle coupe la largeur que vous avez réglée |
| {{ui:Parallélisme}} | rien (tout le modèle) | Finition 3D en lignes parallèles selon n'importe quel angle, en suivant la surface avec une fraise boule, à bout arrondi ou plate. Voir [Finition 3D](topic:finish-3d) |
| {{ui:À crête constante}} | rien (tout le modèle) | Finition 3D en passes espacées d'une distance fixe sur la surface, de sorte que la crête entre elles ait la hauteur demandée |

Sélectionnez une opération dans la liste pour modifier son outil, ses hauteurs (dégagement, retrait, hauteur d'avance, dessus, dessous), sa profondeur de passe, son pas latéral, sa surépaisseur à laisser, sa passe de finition, son entrée (hélice, rampe ou plongée), son fraisage en avalant, ses attaches ou son cycle. {{ui:Monter}} et {{ui:Descendre}} réordonnent, {{ui:Désactiver}} l'exclut, {{ui:Supprimer}} la retire. Tout figure dans l'historique d'annulation et est enregistré dans le fichier de pièce.

Le pas latéral d'une poche est au plus égal à la moitié du diamètre de l'outil, de sorte que chaque point de son fond se trouve à moins d'un rayon d'outil d'une passe. Les angles intérieurs conservent le rayon de l'outil.

**Le dégagement adaptatif** maintient l'engagement de la fraise près d'une valeur. Un engagement de 0.15 du diamètre correspond à un angle d'engagement d'environ 46° : l'arc du bord de la fraise dans la matière. Une poche décalée, en revanche, coupe toute la largeur à sa première passe et s'enroule davantage dans chaque angle intérieur. Entre les passes, l'outil reste en prise là où il se déplace dans une zone déjà dégagée, et il se relève et redescend ailleurs. Les passes sont calculées sur une grille fine couvrant la zone (cellules d'environ un douzième du rayon de l'outil), de sorte que l'engagement peut dépasser d'environ une cellule la valeur réglée ; les parois sont finies exactement. Une grande zone ouverte produit un programme long, avec de nombreux petits déplacements.

## Simuler

Les parcours d'outil sont recalculés après chaque modification (celui de la pièce aussi). {{ui:Simuler}} montre aussi la matière restante après tout le programme. Le panneau affiche :

- **Temps de cycle** : déplacements d'avance à leur avance, rapides en lignes droites à la vitesse d'avance rapide de la mise en place, plus le temps de changement d'outil. Les machines réelles accélèrent, elles prennent donc plus de temps.
- **Surcoupes** : endroits où l'outil est descendu de plus de 0.02 mm sous la surface de la pièce. Des repères rouges les montrent dans la vue.
- **Matière restante sur la pièce**.

Le brut est une carte des hauteurs du dessus (une carte Z) : elle ne peut donc pas montrer les contre-dépouilles. Faites glisser **Lecture** pour déplacer l'outil le long du programme. Dans la vue, les déplacements d'avance sont en trait plein et les rapides en tirets, avec une couleur par opération.

Lorsque **Afficher le brut simulé** est activé, le brut est coloré par rapport au modèle, cellule par cellule : **vert** là où il se trouve sur le modèle (à 0.02 mm près), **rouge** là où l'outil a coupé dans le modèle, et là où il reste de la matière sur le modèle, **jaune** pour une fine couche, **orange** pour davantage, qui s'estompe vers le **gris** du brut non usiné à partir de 1 mm ou plus. Les couleurs sont recalculées à chaque modification, à partir de la même carte des hauteurs que les chiffres du panneau ; le vert et le rouge concordent donc avec la ligne Surcoupes. Un chanfrein coupe volontairement dans le modèle et apparaît en rouge le long de son arête.

## Générer le G-code

Choisissez la commande sous **Post-processeur** et appuyez sur {{ui:Télécharger le G-code}} (ou {{ui:Post-processeur}} dans la barre d'outils) :

| Commande | Fichier | Remarques |
|---|---|---|
| Fanuc-style ISO | .nc | %, numéro O, numéros de ligne, T M6 avec G43 H, cycles fixes |
| GRBL | .nc | Pas de changeur d'outil ni de cycles fixes : un changement d'outil marque une pause avec M0, le perçage est écrit en simples déplacements |
| LinuxCNC | .ngc | T M6 avec G43 H, cycles fixes, M2 |
| Fanuc-style lathe | .nc | Pour les programmes de tournage : X en diamètre, avance par tour, G96 sous une limite G50, filetage G32 |
| LinuxCNC lathe | .ngc | Pour les programmes de tournage : diamètres en G7, G95, G96, filetage G33 ; n'écrit aucun déplacement de prise d'origine |
| Le vôtre | toute extension | Un post que vous avez écrit ou modifié : {{ui:Modifier le post…}}, {{ui:Nouveau post…}}, {{ui:Importer un fichier de post…}} |

Chaque fichier commence par des commentaires sur le programme, le brut, le décalage d'origine et les outils. Les coordonnées sont en millimètres avec 3 décimales. {{ui:Parcours d'outil en CSV}} et {{ui:Parcours d'outil en JSON}} exportent les déplacements eux-mêmes.

**Contrôlez le résultat dans le simulateur de votre machine avant l'usinage, et exécutez-le d'abord dans le vide au-dessus du brut.** Les trois post-processeurs intégrés sont des points de départ qui suivent le comportement documenté des commandes ; ils n'ont été validés sur aucune machine particulière. Un post que vous modifiez relève de votre propre validation. Pour l'écrire : [Post-processeurs modifiables](topic:post-processors).

## STEP exact pour l'atelier

Sous les boutons G-code de l'onglet **Opérations**, {{ui:STEP exact (coordonnées de travail)}} télécharge `<part>-work.step` : la pièce sous forme de solide exact (vrais cylindres pour les trous et les bossages, vrais cercles pour leurs arêtes), avec son origine à l'origine de travail de cette mise en place et Z suivant l'axe de l'outil. Ce sont les coordonnées qu'utilise le G-code ; le programme FAO ou le contrôleur propre à l'atelier aligne donc le modèle sur le programme sans le déplacer. Le fichier ne contient que la pièce, ni le brut ni les parcours d'outil.

{{ui:Exporter}} › {{ui:STEP AP242 (solide exact)}} écrit le même solide dans la position propre à la pièce (Z vers le haut) : voir [Exporter pour l'impression, STEP et DXF](topic:export-files#for-other-cad-programs-step).

## Limites

- Les poches, contours, perçages et chanfreins sont en 2.5 axes. Les pièces courbes sont ébauchées et finies en 3D par leurs propres opérations ([Ébauche 3D et usinage de reprise](topic:rough-3d), [Finition 3D](topic:finish-3d)). Le dégagement adaptatif est en 2D (fonds plats).
- Les outils inclinés, la finition 5 axes et 4e axe, le tournage et le palpage existent, chacun avec ses propres limites, et **aucun n'a été exécuté sur une machine** : voir [Usinage 4 et 5 axes](topic:multi-axis), [Tournage](topic:turning) et [Palpage](topic:probing).
- Les porte-outils et les queues ne sont pas contrôlés contre les collisions ; un avertissement apparaît lorsqu'une coupe est plus profonde que la longueur de cannelure.
- Avances et vitesses sont des valeurs de départ. Un post est un texte que vous pouvez modifier, mais il décide seulement de la manière dont les déplacements sont écrits ; il ne peut ni changer le parcours d'outil, ni ajouter d'axes, ni connaître votre machine ([Post-processeurs modifiables](topic:post-processors) énumère ce qu'il ne peut pas faire).

## Envoyer le programme à une machine

Dans CadCraft Studio sur ordinateur, avec une machine configurée dans Studio, {{ui:Envoyer à une machine…}} apparaît à côté de {{ui:Télécharger le G-code}} et téléverse le même programme vers la machine de votre réseau. Il n'est jamais lancé depuis PartCraft : lancez-le sur la machine, lorsque tout est prêt. Dans un navigateur, le bouton n'est pas affiché (une page web ne peut pas atteindre une machine de votre réseau) : téléchargez le programme à la place.
