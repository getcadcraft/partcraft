---
title: Envoyer un dessin à un laser
summary: Choisissez ce que fait chaque calque (découpe, marquage, gravure, remplissage, image), prévisualisez les déplacements de la tête, enregistrez le G-code en mode laser GRBL, ou envoyez-le depuis le navigateur après avoir cadré le travail.
keywords: laser, découpeuse laser, graveur laser, GRBL, G-code, graver, remplissage, tramage, gravure d'image, marquage, découper, Web Serial, Linux, cadrer le travail, puissance, vitesse, passes
from: 327b3c46
---

Le panneau {{ui:Laser}} transforme les calques d'un dessin en programme pour un laser qui fonctionne avec GRBL (la plupart des contrôleurs de laser à diode et CO2 pour amateurs et petits ateliers). Dans PartCraft, choisissez {{ui:Exporter}} › {{ui:Programme laser…}}, puis {{ui:Ajouter des contours depuis un DXF…}} : les contours et les trous arrivent sur le calque CUT. Les développés des pièces de tôlerie (avec leurs lignes de pliage sur le calque BEND) nécessitent le noyau exact, que cette version ne possède pas. Les réglages sont enregistrés dans le fichier de la pièce ou de l'assemblage.

:::warning
Testez chaque réglage d'abord sur une chute, portez des lunettes de protection adaptées à votre laser, gardez le capot fermé lorsqu'il y en a un, et ne laissez jamais un laser en marche sans surveillance. Les valeurs de départ d'un calque sont provisoires : ce ne sont pas des recommandations pour un matériau quelconque.
:::

## Choisir ce que fait chaque calque

Chaque calque du dessin correspond à une ligne. {{ui:Action}} le règle sur **Découper**, **Marquer**, **Graver les lignes**, **Remplir les formes**, **Graver une image** ou **Non envoyé**, avec une {{ui:Puissance %}}, une {{ui:Vitesse mm/min}} et un nombre de {{ui:Passes}}.

- **Remplissage** grave l'intérieur des formes fermées en lignes, espacées de {{ui:Espacement des lignes}}, selon un {{ui:Angle}}, dans les deux sens ou dans un seul, avec un dépassement pour que la tête soit à vitesse de croisière lorsque le laser s'allume ; le hachurage croisé ajoute une seconde passe à 90°. Une forme comportant un trou reste ouverte à cet endroit.
- **Graver une image** transforme une image en points (Floyd–Steinberg, Atkinson, tramage ordonné, ou simple noir et blanc à un seuil) ou, avec *Niveaux de gris*, en puissance variable.
- Ordre : images et remplissages d'abord, puis gravure de lignes, puis marquages, puis découpes, afin qu'une pièce découpée ne bouge pas pendant qu'elle est gravée. Dans un même calque, les trajets vont **de l'intérieur vers l'extérieur** (un trou avant la plaque qui le contient), puis au plus proche.

## Prévisualiser, puis enregistrer

La prévisualisation montre ce que fait la tête : les lignes de gravure en couleur, les déplacements rapides en gris, et un cadre vert autour de tout ce qui brûle. En dessous figurent la taille, la longueur de gravure et une estimation de durée (sans accélération ; une machine réelle est plus lente). {{ui:Enregistrer le G-code…}} écrit le G-code en mode laser GRBL : `$32=1`, `M4` (ou `M3`) avec les valeurs S, les déplacements `G0` et `G1`, et `M5` à la fin. X0 Y0 est le coin inférieur gauche du travail, sauf si vous choisissez l'origine du dessin : réglez le zéro de travail de votre machine à cet endroit. Le G-code suit le mode laser documenté de GRBL ; il n'a pas encore été testé sur un laser réel.

## Envoyer depuis le navigateur

Dans Chrome et Edge, {{ui:Connecter…}} vous demande de choisir le port USB du laser. Rien ne se connecte ni n'envoie tant que vous n'avez pas appuyé sur un bouton. Appuyez d'abord sur {{ui:Cadrer le travail}} : la tête trace le cadre du travail avec le laser **éteint** (ou à la faible puissance que vous avez réglée pour un pointeur), afin que vous voyiez où il va graver. Ce n'est qu'alors que {{ui:Envoyer le travail}} s'active, et il se désactive de nouveau si vous modifiez quoi que ce soit. {{ui:Pause}} immobilise la tête, {{ui:Arrêter}} l'immobilise aussi, réinitialise le contrôleur (le laser s'éteint) et envoie `M5`. Là où Web Serial est absent (Firefox, Safari, et CadCraft Studio, dont la vue web n'en dispose pas encore), enregistrez le G-code et envoyez-le avec le programme propre à votre laser.

## Pas encore disponible

Les formats d'autres contrôleurs (Ruida, lasers Marlin, fichiers des fabricants), les languettes et les amorces de trajectoire, la compensation de largeur de coupe (kerf), les bibliothèques de matériaux, les axes rotatif et Z, l'alignement par caméra.
