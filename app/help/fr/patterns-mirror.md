---
title: Répétitions et symétries de fonctions
summary: Répétez des fonctions en ligne avec Linéaire, autour d'un axe avec Circulaire, et copiez des fonctions ou le corps entier de part et d'autre d'un plan avec Symétrie.
keywords: répétition, répétition linéaire, répétition circulaire, réseau polaire, réseau, symétrie, symétrique, copier des fonctions, cercle de boulons, germe, symétrie de corps
from: 702e9edb
---

Les répétitions et les symétries copient des fonctions que vous avez déjà construites. Les copies font partie de l'historique : si vous modifiez l'original, les copies suivent.

Ce qui est copié dépend de ce que fait la fonction : une répétition de bossage ajoute de la matière, une répétition de découpe ou de trou en retire. Les répétitions peuvent elles-mêmes être répétées ou symétrisées de nouveau. Un solide STEP importé peut aussi être copié ; les raccords, les chanfreins et les coques ne peuvent pas l'être.

## Répétition linéaire

1. Sélectionnez la fonction à copier dans l'historique (par exemple un Trou ou une Découpe). Si rien n'est sélectionné, la dernière fonction de solide est utilisée.
2. Choisissez {{ui:Linéaire}}. Trois copies apparaissent espacées de 20 mm le long de X.
3. Dans le panneau de droite, réglez :

| Réglage | Rôle | Par défaut |
|---|---|---|
| **Fonctions à copier** | Cochez chaque fonction à copier. Seules les fonctions situées au-dessus de la répétition sont listées | La fonction sélectionnée |
| **Direction** | Axe X, axe Y, axe Z, une droite ou une ligne d'axe de n'importe quelle esquisse antérieure, l'axe d'une révolution, ou une arête choisie | Axe X |
| **Espacement (mm)** | Distance entre voisines | 20 |
| **Nombre** | Nombre total, **original compris** (de 1 à 1000) | 3 |
| **Inverser la direction** | Les copies vont dans l'autre sens | Désactivé |

### Utiliser une arête comme direction

1. Cliquez sur une arête droite de la pièce dans la vue. Le panneau de droite affiche **Arête** et sa longueur.
2. Choisissez {{ui:Linéaire}} : la répétition suit cette arête.

Ou sélectionnez la répétition, choisissez une arête, puis « Arête choisie (utiliser celle choisie maintenant) » dans **Direction**. Une arête choisie est fixe dans l'espace : elle ne suit pas les modifications ultérieures. Une droite d'esquisse suit son esquisse.

## Répétition circulaire

1. Sélectionnez la fonction à copier (par exemple un seul trou près du bord d'un disque).
2. Choisissez {{ui:Circulaire}}. Six copies apparaissent, régulièrement réparties sur tout le tour.
3. Réglez :

| Réglage | Rôle | Par défaut |
|---|---|---|
| **Fonctions à copier** | Comme pour la répétition linéaire | La fonction sélectionnée |
| **Axe** | Axe X, Y ou Z, une droite d'esquisse, l'axe d'une révolution, ou une arête choisie | L'axe de la dernière révolution s'il y en a une, sinon l'axe Y |
| **Angle (°)** | 360 répartit les copies régulièrement sur tout le tour. Une valeur inférieure les répartit sur cet angle, la première et la dernière aux extrémités | 360 |
| **Nombre** | Nombre total, original compris | 6 |
| **Inverser la direction** | Tourne dans l'autre sens | Désactivé |

Les axes du repère passent par l'origine. Pour un disque qui n'est pas centré sur l'origine, utilisez une ligne d'axe d'esquisse ou l'axe d'une révolution.

### Exemple : les huit trous de boulons d'une bride

1. Faites une révolution de la bride (voir [Révolution d'une pièce tournée](topic:revolve)) autour de l'axe Y.
2. Esquissez sur la face supérieure plane de la bride, placez un point sur le cercle de boulons et créez un Trou.
3. Le Trou étant sélectionné, choisissez {{ui:Circulaire}}. L'axe est déjà « Axe de Revolve1 ».
4. Réglez **Nombre** sur `8`.

## Symétrie

1. Sélectionnez la fonction à symétriser dans l'historique, ou ne sélectionnez rien pour symétriser **le corps entier tel qu'il est construit jusqu'ici**.
2. Choisissez {{ui:Symétrie}}. Elle s'effectue par rapport au **plan de droite**.

Pour symétriser le corps entier par rapport à une face de la pièce, cliquez d'abord sur cette face plane, puis choisissez {{ui:Symétrie}}. (Cliquer sur une face vide la sélection de l'historique, si bien que cette opération symétrise toujours le corps entier.)

Réglages dans le panneau de droite :

- **Symétrie** : cochez **Le corps entier (tel qu'il est construit jusqu'ici)**, ou décochez-le et cochez les fonctions à copier.
- **Plan de symétrie** : Plan de face, Plan de dessus, Plan de droite, la face qu'il utilise actuellement (« Une face de Extrude1 » ou « Un plan fixe »), ou « La face choisie maintenant ». Pour symétriser des fonctions choisies par rapport à une face : sélectionnez la Symétrie dans l'historique, cliquez sur la face dans la vue et choisissez « La face choisie maintenant ».

La symétrie du corps entier par rapport à une face double la pièce, par exemple une demi-équerre devient une équerre complète.

## Messages

- « Construisez d'abord une fonction à copier. » ou « Construisez d'abord un solide. » Il n'y a encore rien de solide à copier.
- « Choisissez les fonctions à copier. » Toutes les cases **Fonctions à copier** sont vidées.
- « Extrude2 n'a pas de solide à copier. » Cette fonction a échoué ou est désactivée.
- « Fillet1 modifie les arêtes ou les parois du corps ; elle ne peut pas être copiée. Copiez les fonctions qui créent des solides (extrusions, révolutions, trous, imports). » Les raccords, chanfreins et coques ne peuvent pas être répétés ni symétrisés : répétez d'abord, puis ajoutez le raccord.
- « Il n'y a pas encore de corps à symétriser. »

:::note
Les copies d'une répétition ne peuvent pas être sautées une à une, et une répétition ne peut pas suivre une courbe d'esquisse. Les répétitions et symétries d'esquisse ne sont pas encore disponibles non plus : dessinez la géométrie répétée à la main ou avec **Ajouter par coordonnées**.
:::
