---
title: Venir d'un autre modeleur paramétrique
summary: Comment les habitudes des modeleurs paramétriques de pièces sur ordinateur correspondent à PartCraft, et les différences qui déroutent les utilisateurs expérimentés pendant la première heure.
keywords: changement d'outil, migrer, familier, gestionnaire de fonctions, arbre de conception, cote intelligente, extrusion de bossage, extrusion de découpe, assistant de trou, liaisons, détection d'interférences, barre de retour, gestionnaire de propriétés, souris, différences
from: fbacaee1
---

Si vous concevez des pièces dans SolidWorks, la plupart des idées de PartCraft vous seront familières : esquisses sur les plans de face, de dessus et de droite, relations et cotes intelligentes, historique de fonctions avec barre de retour, et assemblages placés par liaisons. La façon de les atteindre diffère sur certains points, et cette première version en fait moins. Cette page fait correspondre vos habitudes et liste les surprises.

## Habitudes, mises en correspondance

| Vous avez l'habitude de | Dans PartCraft |
|---|---|
| L'arbre de conception à gauche | L'historique à gauche : plans, puis fonctions, esquisses en retrait sous la fonction qui les utilise |
| Les plans de face, de dessus et de droite | Les mêmes trois, passant par l'origine. Le plan de face est le plan XY, le plan de dessus est XZ, le plan de droite est YZ ; Y pointe vers le haut |
| Esquisser sur un plan ou une face, puis le coin de confirmation pour sortir | {{ui:Esquisse}} ({{key:S}}) sur un plan ou une face plane sélectionné ; {{ui:Quitter}} ou {{key:Esc}} jusqu'à la fermeture |
| Smart Dimension | {{ui:Cote}} ({{key:D}}). Cliquez sur un ou deux éléments, puis à l'endroit où va le nombre. L'endroit où vous le placez détermine horizontale, verticale ou alignée |
| Ajouter des relations dans le gestionnaire de propriétés | Sélectionnez les éléments, puis les boutons de relation du panneau de droite (Coïncidente, Horizontale, Parallèle, Tangente, Égale, etc.) |
| Relations automatiques pendant l'esquisse | Les accrochages ajoutent des relations coïncidente, point sur courbe, horizontale et verticale |
| Couleurs d'esquisse bleu / noir / rouge | La même idée : bleu si sous-définie, noir si entièrement définie, rouge si sur-définie. La puce indique les degrés de liberté restants |
| Ligne d'axe pour les révolutions | {{ui:Ligne d'axe}} ({{key:N}}) ; {{ui:Révolution}} utilise la première ligne d'axe, sauf si vous choisissez un autre axe |
| Raccord d'esquisse | {{ui:Congé}} ({{key:F}}) dans une esquisse : cliquez sur le coin, saisissez le rayon |
| Bascule de géométrie de construction | {{ui:Construction}} ({{key:Q}}) |
| Bossage par extrusion | {{ui:Extrusion}} : Borne, Plan médian, Jusqu'à la face / suivante / le sommet, Décalage depuis la face, seconde direction, conicité, un seul contour (Choisir les régions) |
| Découpe par extrusion | {{ui:Couper}} : démarre en Traversant ; passez à Borne pour une poche |
| Bossage ou découpe par révolution | {{ui:Révolution}} / {{ui:Plus}} › {{ui:Découpe par révolution}} |
| Plan, axe, point de référence | {{ui:Plus}} › {{ui:Plan}}, {{ui:Axe}}, {{ui:Point}} (voir [Plans, axes et points de référence](topic:reference-geometry)) |
| Bossage ou découpe par balayage ou lissage, dépouille | {{ui:Plus}} › {{ui:Dépouille}} sur des faces planes (voir [Balayage, lissage et dépouille](topic:sweep-loft-draft)). {{ui:Balayage}} et {{ui:Lissage}} ne sont pas encore disponibles dans cette version (ils nécessitent un noyau exact) |
| Hole Wizard | {{ui:Trou}} à chaque point d'esquisse isolé : simple, lamage, fraisure (90° / 82°) ou taraudé ISO métrique M2–M24, traversant ou borne |
| Répétition linéaire ou circulaire, symétrie | {{ui:Linéaire}}, {{ui:Circulaire}}, {{ui:Symétrie}} (fonctions ou corps entier) |
| Congé et chanfrein sur des arêtes | {{ui:Congé}} / {{ui:Chanfrein}} : cliquez sur une arête, {{key:Shift}}+clic pour en ajouter, puis le bouton. Un seul rayon ; chanfreins égaux, à deux distances ou distance-angle. Dans cette version, seules les arêtes droites entre deux faces planes sont prises en charge, et les congés qui se rejoignent à un coin sont à onglet (mitrés). Arrondissez ou biseautez les arêtes courbes dans l'esquisse ({{ui:Congé}} dans une esquisse, {{key:F}}) |
| Coque | {{ui:Coque}} : cliquez sur les faces planes à ouvrir, puis sur le bouton. Une seule épaisseur de paroi |
| Ouvrir un fichier STEP | {{ui:Ouvrir}} : lu sous forme de triangles, un corps solide sur lequel construire ([Ouvrir un fichier STEP](topic:import-step)) |
| Modifier la fonction, puis OK | Cliquez sur la fonction ; modifiez les nombres à droite ; elle se reconstruit au fil de la saisie. Pas de OK, pas d'Annuler : utilisez {{key:Mod+Z}} |
| Modifier l'esquisse | Double-cliquez sur l'esquisse dans l'historique |
| Reconstruction | Automatique après chaque modification. Il n'existe pas de touche de reconstruction |
| Supprimer / rétablir la fonction | {{ui:Désactiver}} / {{ui:Réactiver}} dans le panneau de droite |
| Faire glisser la barre de retour | {{ui:Revenir ici}} sur une fonction ; cliquez sur « Barre de retour · avancer » pour revenir |
| Faire glisser une fonction dans l'arbre pour la réordonner | {{ui:Monter}} / {{ui:Descendre}} ou {{key:Alt+Up}} / {{key:Alt+Down}} ; refusé avec la raison lorsque cela casserait une dépendance |
| Modifier les cotes en double-cliquant sur le modèle | Sélectionnez la fonction : les cotes de son esquisse sont listées dans le panneau de droite |
| Liaisons : coïncidente, concentrique, distance, angle | {{ui:Liaison}} ({{key:J}}) : choisissez une face plane sur chaque pièce ; la liaison les met face à face. **Centrer sur** un axe agit comme concentrique ; **Décalage** comme distance ; **Angle** comme angle |
| Composant fixe | La première pièce est fixe ; {{ui:En faire la pièce fixe}} la change |
| Insérer un composant | {{ui:Ajouter une copie}} ou {{ui:Dupliquer}} (une autre copie) ou {{ui:Insérer}} (depuis un fichier de pièce) |
| Modifier la pièce dans l'assemblage | {{ui:Modifier la pièce}}, puis {{ui:Retour}} |
| Détection d'interférences | {{ui:Collision}} |
| Déplacer un composant pour voir le mouvement | Faites glisser le curseur d'angle ou de décalage d'une liaison de révolution ou de glissière ; {{ui:Vérifier les conflits sur toute la course du mouvement}} la balaie. Une pièce sans liaison : **Déplacer à la main** (flèches à faire glisser, ou valeurs saisies) |
| Mesurer / Inspecter | {{ui:Vues}}, puis {{ui:Mesurer}} ({{key:M}}) : distances, angles, rayons, aires ; {{ui:Propriétés de masse}} |
| Vue éclatée, nomenclature | Dans un assemblage sans sélection : **Vues éclatées** et **Nomenclature** dans le panneau de droite |
| Propriétés de masse | La zone **Pièce** : volume, aire de surface, dimensions, du solide facetté (légèrement sous-estimé pour les pièces rondes). Pas de masse : il n'y a pas encore de matériaux |
| Enregistrer, enregistrer sous STEP | {{ui:Enregistrer}} télécharge un `.partcraft.json` ; {{ui:Exporter}} propose STL, 3MF, STEP exact (AP242 ou AP214), STEP facetté, DXF et un dessin PDF |
| Créer un dessin à partir de la pièce | {{ui:Dessin}} : une feuille A3 automatique avec trois vues, une isométrique, une coupe, un détail, des références, des cadres de tolérancement et des symboles d'état de surface. Seules les dimensions d'ensemble sont cotées |
| Faire glisser au milieu pour tourner | Le **glisser gauche** fait pivoter ici. Glisser au milieu ou à droite déplace la vue (panoramique). La molette zoome au niveau du pointeur |
| Orientation de la vue, normale à | Menu {{ui:Vues}} ; {{ui:Normal à}} pour une face, un plan ou une esquisse choisi |
| Zoom sur l'ensemble (F) | {{key:F}}, ou {{ui:Ajuster}} (dans une esquisse, {{key:F}} est l'outil {{ui:Congé}}) |
| Menus contextuels | Aucun. Glisser à droite déplace la vue ; dans une esquisse, un clic droit termine une chaîne de lignes |

:::tip
Si vos habitudes viennent de SolidWorks, choisissez le style de menu {{ui:Arbre des fonctions}} dans {{ui:Paramètres}} › {{ui:PartCraft}} › {{ui:Menus, touches et souris}} : un ruban avec les onglets Fonctions, Esquisse, Surfaces, Évaluer, Dessin, Assemblage et Vue ; le bouton du milieu fait orbiter la vue, {{key:Shift}} et le bouton du milieu la déplacent, et le bouton gauche ne fait que choisir. Voir [Menus, touches et souris](topic:menus-keys-and-mouse).
:::

## Différences qui déroutent

**L'esquisse entière est le profil.** Extrusion et révolution utilisent chaque boucle fermée de l'esquisse. Vous ne pouvez pas choisir une région ou un seul contour d'une esquisse pour une fonction. Utilisez une esquisse par fonction.

**Quelle esquisse une fonction prend.** Une fonction utilise l'esquisse que vous venez de fermer ou celle sélectionnée dans l'historique. Sans sélection, elle prend la plus récente esquisse qu'aucune fonction n'utilise encore. Si elle prend la mauvaise, sélectionnez la bonne esquisse et choisissez de nouveau la fonction.

**Les modifications s'appliquent au fil de la saisie.** Il n'y a pas de boîte de fonction avec OK et Annuler. Chaque nombre reconstruit la pièce immédiatement, et {{key:Mod+Z}} sert de retour en arrière. La liste d'annulation couvre de la même façon les modifications d'esquisse, les fonctions et les réglages.

**La sur-définition n'est jamais tolérée en silence.** Il n'existe pas de cotes de référence (pilotées). Une cote que les autres relations fixent déjà est signalée comme sur-définie (« est déjà impliquée. Supprimez-la. »). Une cote en conflit laisse la géométrie intacte et devient rouge. Supprimez-en une, ou annulez.

**Balayages et lissages pas encore disponibles ; congés, chanfreins, coques et dépouilles ont des limites.** Cette version de PartCraft construit chaque pièce avec un noyau maillé ; la puce de la barre d'état affiche toujours « Noyau maillé ». Les congés et chanfreins fonctionnent sur les arêtes droites entre deux faces planes, et lorsque des congés se rejoignent à un coin, ils sont à onglet, non fondus. Les coques s'ouvrent, et les dépouilles n'inclinent que des faces planes. Les fonctions qui nécessitent un noyau exact restent cliquables, mais affichent « pas encore disponible » lorsqu'elles sont choisies. Voir [Le noyau maillé](topic:solid-kernels) et [Ce qui n'est pas encore disponible](topic:not-built-yet).

**Deux boutons nommés Congé.** Dans une esquisse, {{ui:Congé}} ({{key:F}}) arrondit un coin d'esquisse. Sur la pièce, le {{ui:Congé}} du groupe Fonctions arrondit les arêtes de solides (arêtes droites entre faces planes dans cette version). Il n'y a ni balayage ni lissage dans cette version : voir [Ce qui n'est pas encore disponible](topic:not-built-yet).

**Les trous nécessitent des points isolés.** {{ui:Trou}} perce aux points créés avec l'outil {{ui:Point}}. Les centres de cercles et les extrémités de lignes ne comptent pas.

**Traversant est réservé aux découpes.** Un bossage a besoin d'une profondeur. Il n'existe pas encore de conditions de fin « jusqu'au sommet / à la surface / suivante ».

**Le solide est facetté.** Le noyau maillé construit les faces rondes à partir de facettes planes ; la vue, les volumes et les exports STL et 3MF sont donc faits de ces facettes : **Courbes** dans le panneau de la pièce les rend plus fines. L'export STEP exact ne l'est pas : il écrit les faces rondes sur leurs vraies surfaces.

**Millimètres uniquement.** Il n'existe pas encore de réglage en pouces. Multipliez les dimensions en pouces par 25.4 lorsque vous les saisissez.

**Y est vers le haut.** Le plan de face vous fait face et le plan de dessus regarde la pièce du dessus, comme vous vous y attendez, mais l'axe vertical du monde est Y. Les exports STL, 3MF et STEP exact sont tournés pour que Z soit vers le haut ; le STEP facetté garde Y vers le haut.

**Les liaisons portent sur des faces, pas sur des paires de géométries.** Une liaison part toujours de deux faces planes mises face à face. Pour une tige dans un trou, choisissez la face plane autour du trou et l'épaulement de la tige, puis réglez **Centrer sur** sur l'axe du trou et l'axe de révolution de la tige. Les pièces non atteintes par des liaisons restent où elles ont été insérées ; vous ne pouvez pas les faire glisser. Les liaisons d'une boucle ne sont pas résolues.

**Enregistrer est un téléchargement.** Il n'existe pas de fichier que vous écrasez sans cesse. Chaque enregistrement crée un nouveau fichier dans votre dossier de téléchargements. Nommez d'abord la pièce, et rangez vos fichiers dans un dossier de projet.

**Pas de menus contextuels, pas d'onglets de gestionnaire de commandes.** Tout se trouve dans la barre d'outils et le panneau de droite, et la barre d'outils change selon ce que vous faites : les outils d'esquisse n'apparaissent que dans une esquisse, les outils d'assemblage seulement dans un assemblage.

**Les touches sont des lettres seules dans une esquisse.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} et {{key:S}} choisissent des outils sans modificateur. Voir [Touches et souris](topic:keyboard).
