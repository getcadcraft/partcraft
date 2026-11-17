---
title: "Arrondir, chanfreiner et évider avec Congé, Chanfrein et Coque"
summary: "Choisissez des arêtes et ajoutez des congés à rayon constant ou variable, et des chanfreins à distance égale, à deux distances ou à distance et angle ; évidez une pièce avec Coque en choisissant les faces à ouvrir, modifiez les arêtes ou faces utilisées par une fonction, et corrigez les échecs courants."
keywords: "congé, arrondi, raccord, chanfrein, biseau, coque, évider, épaisseur de paroi, arêtes, faces, choisir les arêtes, maj+clic, face ouverte, noyau exact, noyau maillage, pas encore disponible"
from: e41c1c12
---

:::note
**Dans cette version**, PartCraft construit les congés et les chanfreins avec le noyau maillage, sur des **arêtes droites situées entre deux faces planes** uniquement : arêtes d'un parallélépipède et arêtes droites des extrusions et découpes, angles extérieurs ou intérieurs (un angle intérieur reçoit de la matière). Les arêtes rondes, comme les bords de trou, et un rayon qui varie le long de l'arête ne sont pas encore disponibles. Lorsque deux arêtes arrondies se rejoignent à un angle, les arrondis sont mitrés (ils se rejoignent en une arête vive), non raccordés. **Coque** fonctionne aussi, construite par le noyau maillage : elle n'ouvre que des faces planes, les coques à épaisseurs de paroi différentes ne sont pas encore disponibles, et elle est lente sur les pièces comportant beaucoup de faces rondes. Voir [Ce qui n'est pas encore disponible](topic:not-built-yet).
:::

{{ui:Fillet}} arrondit les arêtes, {{ui:Chamfer}} les casse en biseau et {{ui:Shell}} évide la pièce. Les trois agissent sur les arêtes et faces du solide et sont construites par le noyau maillage. Leurs arrondis sont en facettes, comme toute face ronde (**Courbes** règle leur finesse) ; les faces rondes sont des cylindres que vous pouvez choisir et mesurer (voir [Le noyau maillage](topic:solid-kernels)).

## Congé ou chanfrein sur des arêtes

### Choisir d'abord les arêtes

1. Cliquez sur une arête de la pièce. Toute l'arête se met en surbrillance, et le panneau de droite indique **Arête** : son type (Droite, Cercle ou arc, Courbe), sa longueur et les faces entre lesquelles elle se trouve.
2. Pour ajouter d'autres arêtes, faites {{key:Shift}}+clic sur chacune. Chacune est marquée ; faites {{key:Shift}}+clic sur une arête marquée pour la retirer. Le titre du panneau les compte (« 4 arêtes ») et la barre d'état indique : « 4 arêtes choisies. Congé ou Chanfrein les arrondit ; Maj+clic en choisit d'autres, Échap efface. »
3. Choisissez {{ui:Fillet}} ou {{ui:Chamfer}} dans la barre d'outils, ou les mêmes boutons dans le panneau de droite.

La fonction est ajoutée avec toutes les arêtes choisies : un arrondi de 2 mm, ou un chanfrein de 1 mm. La barre d'état indique par exemple : « Fillet1 ajouté (4 arêtes). Modifiez sa dimension à droite ; Choisir les arêtes modifie les arêtes. »

### Ou ajouter d'abord la fonction

1. Sans rien choisir, sélectionnez {{ui:Fillet}} ou {{ui:Chamfer}}.
2. PartCraft passe en mode de sélection : le titre du panneau de droite indique « Fillet1 : sélection », la pièce s'affiche telle qu'elle était avant le congé (le panneau le signale), et la barre d'outils affiche {{ui:Done}}.
3. Cliquez sur chaque arête pour l'ajouter ; cliquez à nouveau pour la retirer. La barre d'état les compte.
4. Choisissez {{ui:Done}} (ou {{ui:Done picking}} dans le panneau), ou appuyez sur {{key:Esc}} ou {{key:Enter}}.

### Réglages

| Réglage | Congé | Chanfrein |
|---|---|---|
| Dimension | **Rayon (mm)**, 2 par défaut | **Distance (mm)** en retrait de l'arête sur les deux faces, 1 par défaut |
| **Arêtes** | Nombre | Nombre |

La liste ci-dessous nomme chaque arête par les deux faces qu'elle relie, par exemple « Arête 1 : face d'extrémité de Extrude1 × côté de Extrude1 ». **Retirer** en supprime une. {{ui:Pick edges}} revient à la sélection. Double-cliquer la fonction dans l'historique fait la même chose.

Les arêtes sont retenues par les deux faces qu'elles relient, si bien qu'elles restent sur la bonne arête lorsque vous modifiez une dimension antérieure dans l'historique.

### Congés variables et types de chanfrein

- **Rayon variable** (congé) : pas encore disponible dans cette version (« Congé dont le rayon varie le long de l'arête : pas encore disponible (il nécessite un noyau exact). Donnez-lui un seul rayon. »). Avec un noyau exact : cochez-le et réglez le **Rayon final (mm)**. Le rayon varie linéairement du **Rayon** à une extrémité de chaque arête jusqu'au **Rayon final** à l'autre ; **Inverser les extrémités** la retourne.
- **Type** (chanfrein) : **Distance égale**, **Deux distances** (une **Deuxième distance** sur l'autre face) ou **Distance et angle** (la distance sur une face, le biseau à **Angle (°)** par rapport à cette face). **Inverser les côtés** place la première distance sur l'autre face.

## Évider une pièce avec Coque

1. Cliquez sur la face plane à laisser ouverte, par exemple le dessus d'une boîte. Ou faites {{key:Shift}}+clic sur plusieurs faces.
2. Choisissez {{ui:Shell}} dans la barre d'outils, ou {{ui:Shell, opening this face}} dans le panneau de la face.

La pièce devient une paroi de 2 mm, avec les faces choisies ouvertes. Réglages :

| Réglage | Effet | Défaut |
|---|---|---|
| **Paroi (mm)** | L'épaisseur de paroi | 2 |
| **Parois vers l'extérieur (les faces restent à l'intérieur)** | Coché : les parois sont ajoutées à l'extérieur, si bien que l'intérieur conserve la dimension de la pièce | Désactivé : les parois vont vers l'intérieur et l'extérieur conserve sa dimension |
| **Faces ouvertes** | Nombre de faces retirées | |

Vers l'intérieur, les parois ont exactement l'épaisseur indiquée : les angles extérieurs restent vifs, les angles intérieurs sortent arrondis (rayon = la paroi), et un trou traversant la pièce reçoit un tube de paroi autour de lui. Vers l'extérieur, les parois sont ajoutées à l'extérieur de la surface d'origine, qui devient le creux, et les arêtes extérieures sortent arrondies. Les faces intérieures portent le nom des faces dont elles sont le décalage, afin que vous puissiez les choisir.

Seules les faces planes peuvent être ouvertes : choisir une face courbe affiche « Coque : dans cette version, seules les faces planes peuvent être ouvertes (le noyau maillage la construit). » Une coque est lente sur les pièces comportant beaucoup de faces rondes (plusieurs secondes par millier de triangles) : utilisez un réglage **Courbes** plus grossier pendant la conception.

{{ui:Pick faces}} modifie les faces ouvertes, de la même manière que pour choisir les arêtes. La liste nomme chacune, par exemple « Face 1 : face d'extrémité de Extrude1 ». Une coque sans face ouverte n'est pas autorisée : « Choisissez les faces à retirer (ouvertes), puis évidez. »

## L'ordre compte

Les fonctions se construisent de haut en bas. Un congé placé avant une coque est évidé avec la pièce, si bien que l'intérieur reçoit aussi des angles arrondis. Un congé placé après une coque n'arrondit que les arêtes que vous choisissez. Déplacez les fonctions avec {{ui:Move up}} et {{ui:Move down}} (voir [Modifier une pièce par son historique](topic:edit-history)).

Les réseaux et les symétries ne peuvent pas copier un congé, un chanfrein ou une coque : « Fillet1 modifie les arêtes ou les parois du corps ; il ne peut pas être copié. Copiez les fonctions qui créent des solides (extrusions, révolutions, trous, imports). » Faites d'abord le réseau des trous ou des découpes, puis arrondissez en une seule fois les arêtes de toutes les copies.

## En cas d'échec

| Message | Que faire |
|---|---|
| « Un arrondi de 5 mm ne tient pas ici (il est trop grand pour une face voisine d'une des arêtes, ou les arêtes se rejoignent à un angle que le noyau ne peut pas raccorder). » | Utilisez un rayon plus petit, ou arrondissez moins d'arêtes à la fois (plusieurs fonctions de congé, la plus petite en dernier) |
| « Une arête arrondie a disparu : l'arête entre Extrude1 et Cut2. » | Une modification antérieure a supprimé cette arête. Choisissez {{ui:Pick edges}}, retirez l'arête rouge et choisissez la nouvelle |
| « La coque ne peut pas être réalisée avec cette épaisseur (…). » | La paroi est plus épaisse qu'une partie étroite du modèle, ou que le rayon d'un congé. Rendez la paroi plus mince, ou les congés plus grands que la paroi |
| « Cette face n'a pas de nom que l'historique peut suivre ; choisissez-en une autre. » | Choisissez une face créée par une fonction (la plupart des faces le sont) |
| « Congé : dans cette version, seules les arêtes droites entre deux faces planes sont prises en charge (le noyau maillage les construit). Arrondissez ou chanfreinez les arêtes courbes dans l'esquisse. » (également Chanfrein) | Une arête choisie est ronde, comme le bord d'un trou, ou se trouve sur une face courbe. Retirez-la avec {{ui:Pick edges}}, et arrondissez ou chanfreinez plutôt cet angle dans l'esquisse |
| « Congé dont le rayon varie le long de l'arête : pas encore disponible (il nécessite un noyau exact). Donnez-lui un seul rayon. » | Décochez **Rayon variable** |
| « Congé par le noyau maillage : là où les arêtes arrondies se rejoignent, elles sont mitrées, non raccordées. » (⚠ dans l'historique) | Un avertissement, pas une erreur : la pièce est construite. Les arêtes choisies se rejoignent à un angle, et les arrondis s'y rejoignent en une arête vive. Arrondissez moins d'arêtes, ou acceptez cette arête vive |
| « Coque : dans cette version, seules les faces planes peuvent être ouvertes (le noyau maillage la construit). » | Une face ouverte est courbe. Utilisez {{ui:Pick faces}} pour la retirer ; n'ouvrez que des faces planes |

## Limites

Dans cette version, les congés et chanfreins ne fonctionnent que sur des arêtes droites entre deux faces planes, avec un seul rayon, et les arrondis qui se rejoignent à un angle sont mitrés. Les coques n'ouvrent que des faces planes. Avec un noyau exact, un congé variable change linéairement le long de chaque arête (une loi par fonction ; aucun rayon fixé en des points le long de l'arête). Les congés de face, les congés en pleine rondeur et les coques à épaisseurs de paroi différentes ne sont pas encore disponibles.
