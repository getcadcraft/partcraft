---
title: Vérifier un assemblage pour les conflits et le mouvement
summary: Repérez les pièces qui se chevauchent avec Collision, faites glisser les valeurs d'une liaison pour observer le mouvement, et balayez une liaison sur toute sa plage pour trouver où les pièces entrent en collision.
keywords: interférence, détection d'interférences, collision, chevauchement, ajustement de filetage, incohérence de profondeur de filetage, faces en contact, masquer, filtrer, mouvement, étude de mouvement, balayage, plage de mouvement, vérifier
from: 9c98db46
---

Deux contrôles s'exécutent sur les pièces telles qu'elles sont placées : **Collision** cherche les volumes qui se chevauchent maintenant, et le **contrôle de mouvement** déplace une liaison sur toute sa plage et cherche les chevauchements en cours de route.

## Vérifier les interférences

1. Ouvrez ou construisez un assemblage (voir [Construire un assemblage avec des liaisons](topic:build-assembly)).
2. Choisissez {{ui:Collision}}.

La barre d'état affiche le résultat :

- « Aucune interférence entre 3 pièces (… ms). » Rien ne se chevauche.
- « Interférence : Flange1 et Flange2 : Chevauchement, 2.5 mm³. » Pour chaque paire, le type de résultat et le volume qu'elles partagent.

La zone **Assemblage** à gauche affiche **Interférence** : « Aucune », « 2 résultats » (ceux affichés), ou « Non vérifié ». Sans sélection, le panneau de droite liste chaque résultat sous **Interférence**.

Le résultat est effacé dès que l'assemblage change. Relancez {{ui:Collision}} après avoir déplacé une liaison. Chaque paire de pièces est comparée à toutes les autres, donc les grands assemblages prennent plus de temps.

### Types de résultats

| Type | Signifie |
|---|---|
| **Chevauchement** | Les pièces partagent un volume : une collision réelle. |
| **Profondeur de filetage incompatible** | Le volume commun est dans le filetage d'une pièce mais au-delà de celui de l'autre : une vis filetée plus profond que son trou, ou une tige lisse dans un trou taraudé. |
| **Ajustement de filetage (filetages conventionnels)** | Le volume commun est dans les filetages des deux pièces : une vis dans un trou taraudé. Les filetages conventionnels sont dessinés à leur pleine taille, ils se chevauchent donc toujours un peu. |
| **Faces en contact** | Aucun volume commun, mais des faces en contact (à 0.001 mm près). |

Les filetages modélisés (voir [Filetages sur arbres et alésages, dessinés ou modélisés](topic:threads)) sont une géométrie réelle : ce qu'ils partagent est un **Chevauchement**.

### Masquer ce qui n'est pas utile

Sous **Interférence**, **Afficher** comporte une case pour chaque type : décochez **Ajustement de filetage** et **Faces en contact** pour ne voir que les collisions qui comptent. **Masquer cette paire**, à côté d'un résultat, masque cette paire de pièces quel que soit son type. Les résultats masqués sont comptés (« 2 résultats masqués par ces filtres »), et **Réafficher les paires masquées** les rétablit. La barre d'état compte aussi les résultats masqués.

Les filtres sont enregistrés avec l'assemblage, et chaque modification correspond à une étape de {{key:Mod+Z}}. **Balayer une liaison pour les collisions** (ci-dessous) les utilise aussi. Un assemblage avec filtres est enregistré en version 4 : les versions antérieures de PartCraft refusent de l'ouvrir, plutôt que de perdre les filtres.

## Observer le mouvement

1. Sélectionnez une liaison mobile (toute sauf rigide) dans la liste à gauche.
2. Faites glisser le curseur sous l'une de ses valeurs, comme **Angle (°)** ou **Décalage (mm)**. La pièce bouge pendant le glissement.
3. Relâchez. La nouvelle position est conservée et peut être annulée avec {{key:Mod+Z}}.

Vous pouvez aussi saisir un angle ou un décalage dans le champ et appuyer sur {{key:Enter}}.

Une liaison sur une boucle fermée (une tringlerie) déplace toute la boucle : la valeur que vous faites glisser est conservée, et les autres liaisons de la boucle suivent (voir [Boucles fermées](topic:build-assembly#closed-loops-linkages)).

## Balayer une liaison pour les collisions

1. Sélectionnez une liaison mobile.
2. Pour une liaison à plusieurs valeurs (cylindrique, plane, rotule, tige dans une rainure), choisissez laquelle balayer dans **Mouvements à vérifier**.
3. Choisissez {{ui:Vérifier les conflits sur toute la course du mouvement}}.

PartCraft fait passer cette valeur par 25 positions en 24 pas égaux, les autres restant inchangées : un angle de −180° à 180° (une inclinaison de −90° à 90°), une longueur allant de moins à plus la taille de la plus grande pièce. Il affiche :

- « Aucune collision pour Angle (°) de -180 à 180 (25 positions vérifiées). »
- « 6 positions sur 25 présentent une collision, la première à Angle (°) 45 (12.4 mm³). » La première position en collision et le chevauchement à cet endroit.

Le bouton est grisé pour les liaisons rigides, qui ne bougent pas. Le balayage ne vérifie que les positions, pas le trajet entre elles : une pièce fine pourrait traverser une autre entre deux pas.

:::note
Le contact et la gravité ne sont pas encore disponibles. Sans limites, le balayage couvre toute la plage. Donnez à la valeur des **Limites** (voir [Liste des pièces, vues éclatées et pièces mobiles](topic:assembly-bom-explode)) et le balayage ne couvre que celles-ci : une charnière qui s'ouvre de 90° est donc vérifiée sur 90°.
:::

## Une étude de mouvement

**Assemblage › Mouvement** fait varier la valeur d'une liaison d'un début à une fin sur une durée que vous donnez (vitesse constante, progressive, sinusoïdale, ou aller-retour). Il place l'assemblage à chaque pas avec ses liaisons et ses boucles fermées, et indique quelles collisions surviennent et à quel point les pièces se rapprochent. **Ajouter un point** suit le milieu d'une pièce ou un point que vous cliquez sur elle ; la fiche trace sa position, sa vitesse, son accélération, la valeur de la liaison et le jeu en fonction du temps. **Enregistrer CSV** et **Enregistrer le graphique** les exportent. La vitesse et l'accélération sont calculées à partir des positions enregistrées : un pic brusque entre deux pas apparaît donc faible ; utilisez davantage de pas.

Après **Lancer**, la barre **Parcourir l'étude** place l'assemblage sur n'importe quelle étape (le temps, la valeur et la présence de collisions à cet instant sont affichés à côté) ; la liaison conserve sa propre valeur, et **Retour au modèle** remet l'assemblage en place. Les réglages de l'étude sont enregistrés dans le fichier d'assemblage ; ses résultats sont recalculés par **Lancer**.

## Une étude de contact

**Assemblage › Contact** montre comment un assemblage transmet ses charges là où les pièces s'appuient les unes sur les autres. Chaque pièce apporte ses propres appuis, charges et matériau depuis sa propre étude **Simulation** (une face fixe sur une pièce, une force sur une autre) ; ici, vous choisissez les paires. **Ajouter une paire**, puis **Choisir le côté A** et cliquez sur des faces d'une pièce, **Choisir le côté B** et cliquez sur des faces d'une autre pièce (un clic sur une face déjà choisie la retire ; {{key:Esc}} ou Terminé met fin au choix). Une paire est **Sans frottement** (les pièces s'appuient mais glissent) ou **Liée** (elles restent ensemble). Le facteur de rigidité règle la résistance à l'enfoncement : 20 est une bonne base, 1000 pour un empilement d'acier rigide.

**Résoudre** applique la charge par étapes et affiche la force de contact, la profondeur maximale d'enfoncement, le plus grand déplacement et la plus grande contrainte. Une pièce sans paire est exclue, et la fiche l'indique. Le contact sans frottement ne retient pas une pièce latéralement : donnez à chaque pièce un appui dans sa propre étude Simulation, ou liez-la, sinon les étapes risquent de ne pas converger. Les paires et les réglages sont enregistrés dans le fichier d'assemblage.

**Exporter le fichier CalculiX** écrit le même modèle sous forme de fichier d'entrée CalculiX (.inp). CalculiX est un programme distinct que vous installez et exécutez vous-même ; **Lire les résultats CalculiX (.frd)** relit ensuite les déplacements sur le maillage de cet assemblage et refuse un fichier produit pour un autre maillage. Le solveur ici prend en compte la plasticité mais n'est pas une dynamique explicite, et rien ici n'est une analyse certifiée : faites vérifier par un ingénieur tout ce qui compte.
