---
title: Tôlerie : brides et patron à plat
summary: Créez une pièce de tôlerie à partir d'une esquisse (une plaque plane ou un profil plié), réglez une fois son épaisseur, son rayon de pliage et son K-factor, pliez des brides depuis ses arêtes avec des décharges de pliage, puis mettez-la à plat en DXF pour la découpe.
keywords: patron à plat, déplier, développement, longueur développée, développement de pliage, ligne de pliage, dxf pour laser, découpe laser, tôlerie, bride-base, bride sur arête, bride, pliage, rayon de pliage, k-factor, k factor, épaisseur, jauge, décharge, décharge de pliage, profilé, support, boîtier, tôle pliée
from: 144bd0f6
---

:::note
**Pas encore disponible dans cette version.** La tôlerie nécessite un noyau exact, que cette version de PartCraft ne possède pas : elle construit toutes les pièces avec le noyau de maillage. [Ce qui n'est pas encore disponible](topic:not-built-yet) indique quoi faire à la place. Le reste de cette page décrit son fonctionnement avec un noyau exact.
:::

Les pièces de tôlerie commencent par une **Bride-base**. Elle définit la tôle pour toute la pièce : son **épaisseur**, le **rayon de pliage intérieur** et le **K-factor**. Chaque **Bride sur arête** qui suit se plie avec ces mêmes valeurs, si bien que la pièce reste une seule tôle pouvant être dépliée. Les deux exigent le **noyau exact** (voir [Le noyau de maillage](topic:solid-kernels)).

## Commencer par une bride-base

1. Tracez une esquisse. Utilisez un **profil fermé** pour une plaque plane (un rectangle, ou tout contour fermé avec des trous). Utilisez **une chaîne ouverte de lignes** pour une tôle pliée, comme un L, un U ou un Z tracé en vue de côté de la tôle.
2. Sélectionnez l'esquisse dans l'historique des fonctions.
3. Ouvrez {{ui:Plus}} dans le groupe Fonctions et choisissez {{ui:Bride-base}}.

Dans le panneau de droite :

- **Épaisseur (mm)** est la jauge de la tôle.
- **Rayon de pliage (mm)** est le rayon intérieur de chaque pli. 0 donne un angle intérieur vif ; l'extérieur s'arrondit quand même avec un rayon égal à une épaisseur.
- **K-factor** indique où se trouve la fibre neutre dans la tôle, de 0 (face intérieure) à 0.5 (le milieu). Il détermine la longueur de la tôle une fois dépliée. 0.44 est la valeur par défaut ; votre atelier ou votre fournisseur de matière peut vous donner la sienne.
- **Profondeur (mm)** est la distance sur laquelle un profil plié s'étend hors du plan de l'esquisse. Une plaque l'ignore.
- **Épaisseur à l'extérieur des plis** : un profil ouvert est une seule face de la tôle. Par défaut, l'épaisseur va à l'intérieur du premier pli, si bien que les lignes que vous avez tracées forment l'extérieur du profilé. Cochez pour placer les lignes à l'intérieur. Le résultat est le même quel que soit le côté par lequel vous avez tracé.

Chaque angle d'une chaîne ouverte devient un pli. Une ligne trop courte pour contenir ses plis le signale, avec la longueur qu'il lui faut.

## Plier une bride sur arête

1. Cliquez sur une arête droite de la face supérieure ou inférieure de la tôle (les longues arêtes, pas les fines).
2. Choisissez {{ui:Plus}} › {{ui:Bride sur arête}}. Si aucune arête n'est choisie, PartCraft attend que vous en cliquiez une ; Échap annule.

La bride se plie vers le haut depuis la face de cette arête, autour du rayon intérieur de la tôle, puis se prolonge en ligne droite. Dans le panneau :

- **Angle (°)** est l'amplitude du pliage, de 1 à 180. 90 donne une bride à angle droit.
- **Longueur (mm)** est la branche droite après le pli.
- **Plier dans l'autre sens** plie depuis l'autre face (vers le bas au lieu du haut).
- **Décalage au début** et **Décalage à la fin** raccourcissent la bride à chaque extrémité de l'arête.
- **Décharge de pliage** : lorsqu'une extrémité est décalée, une fente est découpée dans la tôle à côté, afin que le pli ne déchire pas le métal à cet endroit. **Largeur de la décharge** définit la largeur de la fente ; sa profondeur est le rayon de pliage plus l'épaisseur. Choisissez **Aucune** pour laisser le coin non découpé.

Pour changer l'arête plus tard, appuyez sur {{ui:Choisir}} dans le panneau et cliquez sur une autre.

:::tip
Utilisez des paramètres pour l'épaisseur et le rayon (voir [Paramètres et équations](topic:parameters)), afin qu'une modification de jauge mette à jour toutes les brides d'un coup.
:::

## Mettre à plat

Les deux panneaux se terminent par **Patron à plat**. Appuyez sur {{ui:Mettre à plat}} :

- Un aperçu montre la tôle dépliée, avec la ligne médiane de chaque pli en tirets.
- **Taille** et **Aire** sont celles du flan à plat.
- Chaque pli est listé avec son sens (**vers le haut** ou **vers le bas**, vu depuis le côté de l'esquisse de la bride-base), son angle et son rayon intérieur.

Chaque pli prend la longueur de la fibre neutre de la tôle à travers lui, le **développement de pli** : angle (en radians) × (rayon intérieur + K-factor × épaisseur). Ainsi, un pli de 90° sur une tôle de 2 mm, avec un rayon de 2 mm et un K-factor de 0.44, ajoute 4.52 mm de tôle à plat.

Sur une plaque plane, les trous, découpes et décharges de pliage apparaissent à plat à leur emplacement réel, y compris les trous traversant une bride.

Pour découper plusieurs pièces, appuyez sur {{ui:Imbriquer sur des feuilles…}} sous le patron à plat : voir [Imbriquer des pièces planes sur des feuilles](topic:nest-flat-parts). Une bride-base pliée se développe en un seul rectangle : sa longueur développée × sa profondeur, avec une ligne de pliage par angle.

{{ui:Enregistrer en DXF}} enregistre le patron à plat pour une découpe laser, un poinçonnage ou un jet d'eau, en millimètres :

- le contour sur le calque **OUTLINE**, sous forme de lignes, d'arcs et de cercles ;
- les lignes de pliage sur le calque **BEND**, en tirets ;
- une note sur chaque pli sur le calque **BEND_NOTES**, comme « UP 90° R2 ».

Si vous modifiez quoi que ce soit, le patron à plat disparaît ; appuyez à nouveau sur {{ui:Mettre à plat}} pour le recalculer.

:::note
Vérifiez le K-factor avec votre atelier avant de découper : la longueur du patron en dépend, et il varie selon la matière, l'épaisseur et l'outillage.
:::

## Messages

- **La tôlerie a besoin d'une bride-base avant elle** — une bride sur arête a été ajoutée avant toute bride-base. Placez-la après une bride-base, ou ajoutez d'abord une bride-base.
- **Une bride sur arête nécessite une arête droite** — les brides ne se plient que le long de lignes ; les arêtes courbes ne peuvent pas encore en recevoir une.
- **Cette arête n'est pas sur une face de l'épaisseur de la tôle** — l'arête appartient à une face qui n'est ni la face supérieure ni la face inférieure de la tôle (par exemple la paroi d'un trou). Choisissez une arête de la face supérieure ou inférieure.
- **Les décalages ne laissent rien de l'arête** — les deux décalages totalisent toute l'arête, ou plus.
- **Les brides sur arête d'une bride-base pliée ne peuvent pas encore être mises à plat** — partez d'une plaque plane et pliez tout avec des brides sur arête, qui se déplient.
- **Les découpes et trous faits après une bride-base pliée n'apparaissent pas encore dans son patron à plat** — le patron d'un profil plié n'est que son rectangle développé.
