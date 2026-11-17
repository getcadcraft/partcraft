---
title: Construire un assemblage avec des liaisons
summary: Démarrez un assemblage à partir d'une pièce, insérez des copies et d'autres fichiers de pièces, reliez-les par des liaisons rigides, de révolution, glissières, cylindriques, planes, rotules et tiges dans une rainure sur des faces planes, centrez les liaisons sur des axes, modifiez une pièce sur place et enregistrez l'assemblage.
keywords: assemblage, liaison, liaisons, boucle, boucle fermée, tringlerie, quatre barres, mécanisme, rigide, révolution, glissière, cylindrique, plane, rotule, sphérique, tige dans une rainure, insérer un composant, fixe, concentrique, coïncidente, modifier la pièce, en contexte, partcraft-asm
from: a53bbfef
---

Un assemblage réunit des pièces. Dans PartCraft, les **liaisons** placent les pièces : chaque liaison se pose sur une face plane de chacune de deux pièces et les met face à face. Une liaison de révolution permet à une pièce de tourner, une glissière la fait coulisser, une liaison rigide la maintient en place.

## Démarrer un assemblage

1. Construisez une pièce avec un solide (une pièce vide ne peut pas entrer dans un assemblage : « Construisez d'abord un solide, puis placez-le dans un assemblage. »).
2. Choisissez {{ui:Assemblage}} dans la barre d'outils.

La barre d'état indique « Assemblage démarré avec Part1 comme pièce fixe. Insérez d'autres pièces (Ajouter une copie, Insérer, ou Modifier › Dupliquer), puis placez-les avec Liaison. » Le panneau de gauche liste désormais **Pièces** et **Liaisons**, et la barre d'outils affiche les outils d'assemblage. Les outils d'esquisse et de fonction se masquent.

La première pièce est **fixe** : elle ne bouge jamais, et tout le reste est placé par rapport à elle.

## Insérer des pièces

- {{ui:Ajouter une copie}} insère une autre copie de la pièce sélectionnée (ou de la dernière). Les copies partagent une même pièce : modifiez-la et toutes les copies changent.
- {{ui:Dupliquer}} ({{key:Mod+D}}) dans le groupe Modifier fait de même pour la pièce sélectionnée. {{key:Mod+C}} et {{key:Mod+V}} copient une pièce et la collent à côté des autres, dans cet assemblage ou dans un autre ; {{key:Mod+Shift+V}} la colle au même endroit. Voir [Copier, coller et dupliquer](topic:copy-paste).
- {{ui:Insérer}} insère une pièce depuis un fichier `.partcraft.json` sur votre ordinateur. La pièce est copiée dans l'assemblage.

Les nouvelles pièces apparaissent à 20 mm à droite de tout ce qui existe déjà, et y restent jusqu'à ce qu'une liaison les place. Une pièce sans liaison peut aussi être déplacée à la main, avec des valeurs saisies ou des flèches à faire glisser (voir [Liste des pièces, vues éclatées et pièces mobiles](topic:assembly-bom-explode)).

## Relier deux pièces

1. Choisissez {{ui:Liaison}} ou appuyez sur {{key:J}}. Le panneau de droite affiche **Nouvelle liaison**.
2. Cliquez sur une face plane de la première pièce. Elle se met en surbrillance.
3. Cliquez sur une face plane de la seconde pièce.

La seconde pièce se déplace pour que sa face s'appuie contre celle de la première, en vis-à-vis. La liaison apparaît sous **Liaisons**, par exemple « Revolute1 », et le panneau de droite affiche ses réglages.

- Si les deux faces ont été créées par des révolutions, la liaison commence en **révolution** ; sinon en **rigide**. Modifiez-la ensuite.
- Les faces courbes ne peuvent pas être choisies : « Cette face est courbe. Choisissez une face plane (pour pivoter autour d'un trou ou de l'axe d'une révolution, choisissez-le ensuite dans la liaison). »
- {{key:Esc}} annule une liaison commencée (ou cliquez sur une pièce dans la liste à gauche).

### Réglages de liaison

| Réglage | Ce qu'il fait |
|---|---|
| **Type** | L'une des liaisons du tableau ci-dessous |
| **Angle (°)** | Fait pivoter la seconde pièce autour de l'axe de la liaison (perpendiculaire aux faces) |
| **Décalage (mm)** | Déplace la seconde pièce le long de l'axe, en s'éloignant de la face (les valeurs négatives l'enfoncent) |
| **Selon X**, **Selon Y**, **Inclinaison autour de X**, **Inclinaison autour de Y**, **Le long de la rainure**, **Direction de la rainure** | Les autres valeurs, affichées pour les liaisons qui les utilisent |
| **Centrer sur** (pour chaque côté) | Là où l'axe de la liaison traverse la face : « L'origine propre de la face », l'axe d'une révolution (« Axe de Revolve1 ») ou l'axe d'un trou (« Hole1, trou 2 ») |

Chaque valeur qu'une liaison peut faire varier dispose d'un curseur à faire glisser sous son champ ; les autres ne se règlent qu'une fois.

| Liaison | Ce qui bouge | Réglé une seule fois |
|---|---|---|
| **Rigide** | rien | Angle, Décalage |
| **Révolution** | Angle (une charnière) | Décalage |
| **Glissière** | Décalage (un tiroir) | Angle |
| **Cylindrique** | Angle et Décalage (un arbre dans un palier lisse) | |
| **Plane** | Selon X, Selon Y dans le plan de la face, et Angle (une pièce glissant sur une table) | |
| **Rotule** | Angle (rotation sur elle-même) et Inclinaison autour de X et Y, autour du centre de la liaison (une rotule) | |
| **Tige dans une rainure** | Le long de la rainure et Angle (une tige dans une rainure droite) | Direction de la rainure : l'angle de la rainure depuis X de la face |

Les X et Y d'une face sont ceux de la face de la première pièce ; le centre de la liaison est défini par **Centrer sur**.

« L'origine propre de la face » est l'origine de la pièce projetée sur la face, ce qui n'est souvent pas l'endroit où vous voulez aligner les pièces. Pour les pièces rondes et les tiges, réglez **Centrer sur** sur l'axe de la révolution ou du trou des deux côtés : les axes s'alignent alors, comme une liaison concentrique.

### Exemple : deux brides boulonnées face à face

1. Ouvrez la pièce bride (une révolution avec une répétition circulaire de trous) et choisissez {{ui:Assemblage}}.
2. Choisissez {{ui:Ajouter une copie}}.
3. Appuyez sur {{key:J}}, cliquez sur la face plane du disque de la première bride (la face d'où partent les trous de boulon), puis sur la même face de la seconde bride. Les faces ont été créées par la révolution, donc la liaison est de révolution.
4. Réglez **Centrer sur** sur « Axe de Revolve1 » pour les deux côtés. Les brides partagent désormais un axe.
5. Saisissez `22.5` dans **Angle (°)** pour aligner les trous de boulon, ou faites glisser le curseur.

## Boucles fermées : tringleries

Des pièces reliées en anneau (une tringlerie à quatre barres, une manivelle et une coulisse, un cadre contreventé des deux côtés) forment une **boucle**. PartCraft résout chaque boucle pour qu'elle se ferme : les liaisons qui la composent prennent les valeurs qui referment l'anneau, en se déplaçant le moins possible par rapport à leur position initiale.

- **Définissez ou faites glisser** une valeur d'une liaison d'une boucle, et le reste de la boucle suit. Pour une tringlerie à quatre barres, faites glisser l'**Angle** de la manivelle : la bielle et le balancier bougent avec elle. La valeur que vous avez réglée est conservée ; les autres sont calculées à partir de celle-ci.
- Dans la liste, une liaison d'une boucle qui peut encore bouger est **bleue** : une autre valeur peut encore être réglée. Une boucle qui ne peut pas bouger (un cadre contreventé) reste noire. Une boucle qui ne peut pas se fermer est **rouge**.
- La zone **Pièce** affiche **Boucles** : le nombre de boucles fermées et de valeurs encore mobiles, par exemple « 1 fermée ; 1 valeur peut encore bouger ».
- {{ui:Vérifier les conflits sur toute la course du mouvement}} balaie une liaison d'une boucle avec la boucle qui la suit, pas à pas (voir [Vérifier un assemblage pour les conflits et le mouvement](topic:check-assembly)).

Une tringlerie plane faite de barres plates doit être cohérente en profondeur : deux pièces reliées face à face des deux côtés d'un anneau doivent avoir la même hauteur d'empilement dans les deux sens. Utilisez le **Décalage** d'une liaison pour soulever une pièce lorsque l'empilement ne se compense pas, sinon la boucle ne peut pas se fermer.

## Travailler avec les pièces

Cliquez sur une pièce dans la vue ou dans la liste pour la sélectionner. Le panneau de droite affiche son nom, le nombre de copies, son volume et ses liaisons, et indique si elle est fixe, placée par ses liaisons, ou « Non liée : reste à l'endroit où elle a été placée ». Boutons :

- {{ui:Modifier cette pièce}} (ou {{ui:Modifier la pièce}} dans la barre d'outils, ou double-cliquez sur la pièce dans la liste) : ouvre la pièce pour la modifier ;
- {{ui:Insérer une copie}} ;
- {{ui:En faire la pièce fixe}} ;
- {{ui:Retirer}} : supprime aussi ses liaisons, après confirmation.

Un assemblage conserve au moins une pièce : « Un assemblage conserve au moins une pièce. Fermez-le à la place. »

### Modifier une pièce sur place

1. Sélectionnez une pièce et choisissez {{ui:Modifier la pièce}}. La pièce s'ouvre avec son historique ; le titre indique « Bracket (dans l'assemblage Bracket) ».
2. Modifiez-la comme n'importe quelle pièce.
3. Choisissez {{ui:Retour}} dans la barre d'outils. L'assemblage se met à jour : chaque copie de cette pièce change, et les liaisons sur les faces issues d'arêtes d'esquisse suivent.

Le retour de la modification correspond à une étape dans la liste d'annulation de l'assemblage.

## Annuler, enregistrer et fermer

- L'assemblage a sa propre liste d'annulation : {{key:Mod+Z}} et {{key:Mod+Y}} agissent sur les liaisons, les insertions et les réglages.
- {{ui:Enregistrer}} ou {{key:Mod+S}} télécharge `<nom de l'assemblage>.partcraft-asm.json`, avec toutes les pièces à l'intérieur. Rouvrez-le plus tard avec {{ui:Ouvrir}}.
- {{ui:Fermer}} ferme l'assemblage et revient à la pièce de départ. Si l'assemblage n'est pas enregistré, PartCraft le demande : {{ui:Annuler}}, {{ui:Abandonner l'assemblage}} ou {{ui:Enregistrer d'abord}}.
- Pour renommer l'assemblage, cliquez sur un espace vide pour ne rien sélectionner, puis modifiez **Nom** dans le panneau de droite.

## Grands assemblages

Un assemblage peut contenir des milliers de copies de quelques pièces. Les copies d'une même pièce sont dessinées ensemble ; une liaison que vous tournez ne place que les pièces qui la suivent ; et la liste des pièces affiche ses premières lignes, avec un bouton « Afficher plus » en dessous (la pièce sélectionnée est toujours listée).

- Pendant que vous tournez ou zoomez la vue, un assemblage de plus d'environ 300 000 triangles est dessiné sous forme d'une boîte par pièce, puis en entier un instant après votre arrêt.
- {{ui:Vues}} › {{ui:Affichage allégé}} garde les boîtes en permanence. La sélection des pièces et des liaisons utilise toujours les pièces réelles.
- La vitesse de rotation dépend aussi de votre carte graphique. Les chiffres mesurés par PartCraft figurent dans les notes de version, avec la machine utilisée.

## Problèmes de liaison

- Une pièce qu'aucune liaison n'atteint est listée comme **libre**, et le panneau indique : « Bracket2 n'est pas liée à la pièce fixe : elle reste à l'endroit où elle a été placée. »
- Une boucle qui ne peut pas se fermer (les longueurs n'atteignent pas, une limite bloque une liaison, les faces ne concordent pas en profondeur) : « Revolute3 ferme une boucle impossible à fermer : écart de 2.000 mm. Vérifiez les faces, les décalages et les limites des liaisons de la boucle. » Ses liaisons deviennent rouges.
- Si une face ou un axe utilisé par une liaison disparaît après la modification d'une pièce : « La face utilisée par cette liaison n'existe plus dans Bracket. » Supprimez la liaison et recréez-la.

Suite : [Vérifier un assemblage pour les conflits et le mouvement](topic:check-assembly).
