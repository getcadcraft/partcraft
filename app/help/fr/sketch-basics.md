---
title: Dessiner votre première esquisse
summary: Ouvrir une esquisse sur un plan ou une face plane, dessiner des lignes, rectangles, cercles, arcs, points et lignes d'axe, arrondir un angle, sélectionner, déplacer et supprimer.
keywords: esquisse, dessiner, ligne, rectangle, cercle, arc, point, ligne d'axe, construction, congé, congé d'esquisse, arrondi d'angle, accrochage, sélectionner, fenêtre, déplacer, profil
from: 28be7436
---

Chaque solide commence comme une esquisse : un dessin plan sur un plan de référence. Ce guide présente les outils de tracé. Pour contraindre l'esquisse avec des relations et des cotes, voir [Définir entièrement une esquisse](topic:relations-dimensions).

## Commencer une esquisse

Vous pouvez esquisser sur un plan de base ou sur n'importe quelle face plane de la pièce.

1. Choisissez où esquisser :
   - un plan de base : cliquez sur **Plan de face**, **Plan de dessus** ou **Plan de droite** dans l'historique, ou cliquez sur le plan dans la vue ;
   - une face plane : cliquez sur la face dans la vue. Toute la face est mise en surbrillance.
2. Choisissez {{ui:Esquisse}} dans la barre d'outils ou appuyez sur {{key:S}}. (Avec une face désignée, vous pouvez aussi choisir {{ui:Esquisse sur cette face}} dans le panneau de droite ; avec un plan, {{ui:Esquisse sur ce plan}}.)

La vue se place perpendiculairement au plan, les outils d'esquisse apparaissent dans la barre d'outils, et l'outil {{ui:Ligne}} est prêt. Si vous appuyez sur {{ui:Esquisse}} sans rien désigner, les plans de base s'affichent et la barre d'état indique : « Cliquez sur un plan ou une face plane pour y esquisser. Échap arrête. »

:::note
Une face courbe ne peut pas porter d'esquisse : « Cette face est courbe. Désignez une face plane ou un plan pour esquisser. »
:::

**Une esquisse sur une face suit cette face.** Si la face a été créée par une arête d'esquisse ou par la fin d'une extrusion, la nouvelle esquisse se déplace lorsque la fonction change (une poche plus profonde entraîne l'esquisse de son fond). Si le panneau indique que la face est « Fixe à l'endroit désigné », l'esquisse reste là où se trouve la face maintenant.

## Les outils de tracé

Chaque outil a un bouton dans la barre d'outils et une touche. Choisissez à nouveau le même bouton, appuyez sur {{key:S}}, ou appuyez sur {{key:Esc}} pour revenir à la sélection.

| Outil | Touche | Comment tracer |
|---|---|---|
| {{ui:Ligne}} | {{key:L}} | Cliquez le début, puis cliquez chaque point suivant. Les lignes s'enchaînent bout à bout. Terminez la chaîne avec {{key:Esc}}, {{key:Enter}}, un clic droit ou un double-clic. Cliquer sur un point existant la termine aussi |
| {{ui:Rectangle}} | {{key:R}} | Cliquez un coin, puis le coin opposé. Vous obtenez quatre lignes jointes aux coins, deux horizontales et deux verticales |
| {{ui:Cercle}} | {{key:C}} | Cliquez le centre, puis un point du cercle |
| {{ui:Arc}} | {{key:A}} | Cliquez le centre, puis le début, puis la fin. L'arc suit le sens dans lequel vous déplacez le pointeur autour du centre |
| {{ui:Point}} | {{key:P}} | Cliquez. Un point seul marque le centre d'un trou pour {{ui:Trou}} |
| {{ui:Ligne d'axe}} | {{key:N}} | Comme une ligne, un segment à la fois. Tracée en pointillés ; c'est une géométrie de construction, utilisée comme axe de révolution ou comme référence |
| {{ui:Congé}} | {{key:F}} | Cliquez un angle où se rencontrent deux lignes, saisissez le rayon, appuyez sur {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Cliquez les points par lesquels passe la courbe ; {{key:Enter}} termine, un clic sur le premier point la ferme. Voir [Splines, ajuster, décaler et autres outils d'esquisse](topic:sketch-tools) |
| {{ui:Ajuster}} | {{key:T}} | Cliquez le morceau de courbe à supprimer, jusqu'aux intersections les plus proches |
| {{ui:Cote}} | {{key:D}} | Voir [Définir entièrement une esquisse](topic:relations-dimensions) |

Pendant le tracé, une petite zone à côté du pointeur indique la longueur, la taille, le diamètre ou le rayon.

### Saisir la taille pendant le tracé

Après le premier clic d'une ligne, d'un rectangle, d'un cercle ou d'un arc, vous pouvez saisir la taille au lieu de la cliquer. Taper un nombre ouvre la zone à côté du pointeur avec ce nombre :

| Outil | Zones ({{key:Tab}} passe à la suivante) | Ce qui se passe sur {{key:Enter}} |
|---|---|---|
| {{ui:Ligne}}, {{ui:Ligne d'axe}} | Longueur, puis Angle (°) depuis l'axe X de l'esquisse | La ligne est tracée à cette longueur, vers le pointeur ou selon l'angle saisi ; la chaîne continue depuis son extrémité |
| {{ui:Rectangle}} | Largeur, puis Hauteur | Le rectangle est tracé depuis le premier coin vers le pointeur ; une taille que vous n'avez pas saisie est donnée par le pointeur |
| {{ui:Cercle}} | Diamètre | Le cercle est tracé à ce diamètre |
| {{ui:Arc}} | Rayon après le centre, puis Angle de l'arc (°) après le début | Le début est placé à cette distance du centre ; l'arc tourne ensuite de cet angle, dans le sens où vous avez déplacé le pointeur |

Chaque taille saisie devient une **cote pilote** dans la même étape, de sorte que l'esquisse sort cotée. {{key:Mod+Z}} supprime la forme et ses cotes ensemble. Cliquer au lieu d'appuyer sur {{key:Enter}} conserve ce que vous avez saisi et prend le reste sur le clic. {{key:Esc}} ferme la zone et revient au pointeur.

Désactivez cette option dans {{ui:Paramètres}} › {{ui:PartCraft}} › **Coter pendant le tracé** si vous voulez tracer uniquement au clic. Voir [Paramètres de PartCraft](topic:settings).

{{ui:Plus}}, à la fin des outils d'esquisse, regroupe la spline à points de contrôle, {{ui:Prolonger}}, {{ui:Décaler}}, {{ui:Symétrie}}, {{ui:Polygone}}, {{ui:Rainure}}, les répétitions d'esquisse et {{ui:Projeter l'arête}} : voir [Splines, ajuster, décaler et autres outils d'esquisse](topic:sketch-tools).

### Accrochage

L'accrochage ajoute des relations automatiquement, pour que l'esquisse reste jointe lorsqu'elle bouge :

- Sur une **extrémité ou l'origine**, un petit carré apparaît. Le nouveau point devient coïncident avec elle.
- Sur une **ligne, un cercle ou un arc**, une petite croix apparaît. Le nouveau point est placé sur cette courbe.
- Une ligne à moins de 3 degrés de l'horizontale ou de la verticale s'y aligne et reçoit une relation horizontale ou verticale. L'étiquette affiche « H » ou « V ».

Pour éviter un accrochage, zoomez pour cliquer plus loin du point ou de la courbe.

## Arrondir un angle

1. Appuyez sur {{key:F}} ou choisissez {{ui:Congé}}.
2. Cliquez le point d'angle où se rencontrent deux lignes.
3. Une zone s'ouvre avec un rayon suggéré. Saisissez le rayon et appuyez sur {{key:Enter}}.

Les deux lignes sont ajustées et raccordées par un arc tangent avec une cote de rayon. Messages possibles : « Un congé nécessite un angle où se rencontrent exactement deux lignes. » et « Ce rayon est trop grand pour ces lignes. »

:::tip
Un congé d'esquisse arrondit un angle du profil ; l'extrusion obtient donc des arêtes verticales arrondies. Pour arrondir les arêtes du solide lui-même (par exemple les arêtes supérieures d'une plaque), utilisez plutôt la fonction {{ui:Congé}} sur la pièce : voir [Arrondir, chanfreiner et évider](topic:fillet-chamfer-shell). Dans une esquisse, le Congé de la barre d'outils est l'outil d'esquisse ; sur la pièce, c'est la fonction.
:::

## Géométrie de construction

Les lignes, cercles et arcs de construction sont en pointillés et gris. Ils guident l'esquisse mais ne font pas partie du profil qui est extrudé ou révolué.

1. Sélectionnez les lignes, cercles ou arcs.
2. Appuyez sur {{key:Q}} ou choisissez {{ui:Construction}}. Appuyez à nouveau pour les remettre à l'état normal.

## Sélectionner, déplacer et supprimer

Appuyez sur {{key:S}} (ou sur {{key:Esc}} jusqu'à ce qu'aucun outil ne soit actif) pour revenir à la sélection.

- Cliquez un point, une ligne, un cercle, un arc, un symbole de relation ou une cote pour la sélectionner. {{key:Shift}}+clic ajoute à la sélection ou la retire. Sous Windows et Linux, {{key:Ctrl}}+clic fait la même chose ; sur Mac, ⌘+clic.
- Faites glisser sur un espace vide pour tracer une fenêtre : tout ce qui est entièrement à l'intérieur est sélectionné.
- Faites glisser un point ou une ligne pour le déplacer. Le solveur conserve toutes les relations et cotes pendant le mouvement, donc seule la géométrie libre bouge. Faites glisser le bord d'un cercle pour changer son rayon.
- Faites glisser le nombre d'une cote pour déplacer l'étiquette.
- Appuyez sur {{key:Delete}} ou {{key:Backspace}}, ou choisissez {{ui:Supprimer}} dans le panneau de droite, pour supprimer la sélection. Supprimer une géométrie supprime les relations qui s'y rattachent.

## Zoomer et faire un panoramique dans l'esquisse

- Faites tourner la molette pour zoomer au niveau du pointeur.
- Faites glisser avec le bouton central ou droit pour faire un panoramique.
- {{ui:Ajuster}} dans la barre d'outils ou dans le panneau de droite ajuste l'esquisse à la vue. Dans une esquisse, la touche {{key:F}} est l'outil Congé, pas Ajuster.

## Fermer l'esquisse

Choisissez {{ui:Quitter}} dans la barre d'outils ou {{ui:Quitter l'esquisse}} dans le panneau de droite, ou appuyez sur {{key:Esc}} jusqu'à la fermeture de l'esquisse. Chaque {{key:Esc}} annule d'abord ce qui est en cours, puis revient à la sélection, puis vide la sélection ; le suivant ferme l'esquisse.

L'esquisse reste sélectionnée, donc la prochaine {{ui:Extrusion}} ou {{ui:Révolution}} l'utilise.

## Ce qui fait un bon profil

{{ui:Extrusion}} et {{ui:Révolution}} utilisent **chaque boucle fermée** des lignes, cercles, arcs et splines (hors construction) de l'esquisse. Les boucles à l'intérieur d'autres boucles deviennent des trous.

- Chaque extrémité doit rencontrer exactement une autre extrémité. « Le profil est ouvert : une extrémité en (12.5, 40) n'est reliée à rien. » indique l'endroit.
- Trois extrémités ne doivent pas se rencontrer en un même point : « Le profil se ramifie en (0, 20) : plus de deux extrémités s'y rencontrent. »
- Les points et la géométrie de construction sont ignorés par le profil.

Suite : [Définir entièrement une esquisse avec des relations et des cotes](topic:relations-dimensions).

## Une esquisse à partir d'une photo

**Fonctions › Plus › Esquisse à partir d'une photo…** (ou le groupe Esquisse du ruban de l'arbre des fonctions) trace une image d'une pièce plane sur un fond uni — son contour et ses trous — ou un dessin à la main, en une esquisse de lignes, d'arcs et de cercles. Indiquez une longueur (la largeur, la hauteur ou le plus grand côté) pour que l'esquisse ait la bonne taille, vérifiez ce qui a été trouvé dans l'aperçu, puis choisissez **Créer l'esquisse** ; vous pouvez aussi l'extruder, dans la même étape d'annulation. Le traçage se fait sur cet ordinateur. Les rayons d'angle sont retrouvés à environ 5 % près, les détails d'un ou deux pixels sont perdus, et une photo prise en biais ou avec des ombres sur la pièce n'est pas redressée : photographiez la pièce bien de face, avec un éclairage uniforme.
