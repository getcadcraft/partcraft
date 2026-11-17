---
title: Définir entièrement une esquisse avec des relations et des cotes
summary: Ajoutez des relations depuis le panneau de droite et des cotes avec l'outil Cote, lisez les couleurs sous-défini, entièrement défini et sur-défini, et corrigez une esquisse sur-définie.
keywords: relations, contraintes, cotes, cote intelligente, entièrement défini, sous-défini, sur-défini, degrés de liberté, coïncident, horizontal, vertical, parallèle, perpendiculaire, tangent, égal, concentrique, milieu, fixer, conflit, redondant
from: e76d047a
---

Une esquisse est **entièrement définie** lorsque chaque point et chaque taille sont fixés par des relations et des cotes. Une esquisse entièrement définie ne change que lorsque vous modifiez un nombre, si bien que la pièce se comporte de façon prévisible lorsque vous la modifiez plus tard. PartCraft ne vous oblige pas à définir entièrement une esquisse, mais il indique toujours où vous en êtes.

## Lire l'état de l'esquisse

L'état apparaît à trois endroits : la puce en haut à gauche de la vue, le message en haut du panneau de droite, et le drapeau dans l'historique.

| État | Puce | Couleur de la géométrie | Signification |
|---|---|---|---|
| Sous-défini | « Sous-défini · 3 degrés de liberté » | Bleu | Une partie de la géométrie peut encore bouger. Faites glisser la géométrie bleue pour voir dans quel sens |
| Entièrement défini | « Entièrement défini » | Encre (noir sur Papier, clair sur Objet) | Chaque point et chaque taille sont fixés |
| Sur-défini | « Sur-défini » | Rouge sur les relations concernées | Certaines relations se contredisent, ou une relation est déjà impliquée par d'autres |

La géométrie de construction est grise et en pointillés, quel que soit son état. Les éléments sélectionnés sont orange. Un « degré de liberté » est une façon dont quelque chose peut encore bouger : un point libre en a deux (gauche-droite et haut-bas), un cercle libre en a trois (son centre et son rayon).

La légende sous le message du panneau de droite reprend les couleurs.

## Ajouter une cote

1. Appuyez sur {{key:D}} ou choisissez {{ui:Cote}}.
2. Cliquez sur ce que vous voulez mesurer :
   - **une ligne** : sa longueur ;
   - **un cercle** : son diamètre ; **un arc** : son rayon ;
   - **deux points** (une extrémité, un centre, un point libre ou l'origine) : la distance entre eux ;
   - **un point et une droite** : la distance du point à la droite ;
   - **deux droites parallèles** : la distance entre elles ; **deux droites formant un angle** : l'angle entre elles.
3. Après un premier élément, la barre d'état indique « Cliquez sur un second élément, ou cliquez à l'endroit où la cote doit aller. » Cliquez sur un second élément, ou cliquez dans l'espace vide à l'endroit où vous voulez le nombre.
4. Une zone de saisie s'ouvre avec la valeur actuelle. Saisissez la taille et appuyez sur {{key:Enter}}. {{key:Esc}} conserve la valeur mesurée.

**L'emplacement du nombre détermine le type** pour une droite inclinée ou pour deux points : placez-le au-dessus ou en dessous pour obtenir une distance horizontale, à gauche ou à droite pour une distance verticale, et ailleurs pour la distance réelle (alignée).

La zone accepte des nombres simples en millimètres ou en degrés, comme `25`, `12.5` ou `1e3`. Un `⌀`, `Ø` ou `R` en tête, ou `mm` ou `°` en fin, est ignoré. Les angles vont de 0 à 180 degrés. Un calcul comme `20+5` n'est pas accepté ; pour lier une taille à une variable ou à une formule, commencez-la par `=`.

Pour modifier une cote plus tard, double-cliquez sur son nombre dans l'esquisse, ou choisissez **Modifier** à côté d'elle dans la liste du panneau de droite.

:::tip
Vous pouvez aussi sélectionner d'abord la géométrie (outil Sélection) et choisir un bouton de cote dans le panneau de droite : {{ui:Distance}}, {{ui:Distance horizontale}}, {{ui:Distance verticale}}, {{ui:Rayon}}, {{ui:Diamètre}} ou {{ui:Angle}}. Seuls ceux qui conviennent à la sélection sont affichés. C'est ainsi qu'on donne à un cercle un rayon plutôt qu'un diamètre.
:::

## Ajouter une relation

Les relations s'ajoutent depuis le panneau de droite, pas avec un outil.

1. Appuyez sur {{key:S}} pour Sélection.
2. Cliquez sur un élément, puis {{key:Shift}}+clic sur un second si la relation en demande deux. L'origine peut aussi être sélectionnée.
3. Le panneau de droite indique « Sélection : ligne l3, point p1 » et affiche un bouton pour chaque relation qui convient, comme {{ui:∥ Parallèle}} ou {{ui:• Coïncidente}}.
4. Choisissez le bouton. L'esquisse se résout aussitôt.

Si aucune relation ne convient, le panneau indique : « Aucune relation ne convient à cette sélection. Sélectionnez un ou deux éléments (Maj+clic ajoute). »

La liste complète des relations, ce que chacune demande et ce qu'elle fait se trouve dans [Relations et cotes d'esquisse](topic:sketch-relations).

Les relations apparaissent dans l'esquisse sous forme de petits symboles à côté de la géométrie (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Les points de coïncidence sont masqués, sauf si la géométrie est sélectionnée ou si la relation pose problème. Cliquez sur un symbole pour sélectionner la relation.

## Exemple détaillé : un profil de support en L

1. Esquissez sur le **plan de face**. Avec l'outil Ligne, partez de l'origine et cliquez sur six angles d'un L, en terminant à nouveau sur l'origine. La chaîne se termine d'elle-même lorsque vous cliquez sur le premier point.
2. Les lignes tracées proches de l'horizontale ou de la verticale reçoivent déjà les relations H et V, sauf la dernière : une ligne qui se termine sur un point existant ne reçoit aucune relation automatique. Appuyez sur {{key:S}}, cliquez sur cette dernière ligne et choisissez {{ui:V Verticale}} dans le panneau de droite. La puce indique « Sous-défini · 4 degrés de liberté ».
3. Appuyez sur {{key:D}}. Cliquez sur la ligne du bas, cliquez en dessous, saisissez `80`, puis {{key:Enter}}.
4. Cliquez sur la ligne de gauche, cliquez à gauche de celle-ci, saisissez `60`, puis {{key:Enter}}.
5. Cotez de la même façon la petite ligne supérieure avec `20` et la ligne verticale intérieure avec `45`.
6. La puce indique désormais **Entièrement défini** et tout le L passe en encre.

## Corriger une esquisse sur-définie

Lorsqu'une nouvelle relation ou cote contredit les autres, PartCraft ne déplace rien. La géométrie reste exactement telle quelle, les relations concernées deviennent rouges, et la barre d'état les nomme :

- « Sur-défini : Horizontale, Distance 40 ne peuvent pas être toutes respectées. Annulez, ou supprimez l'une d'elles. » Les relations sont en conflit.
- « Sur-défini : Parallèle est déjà impliquée. Supprimez-la. » La relation n'apporte rien : les autres l'imposent déjà. (Les côtés d'un rectangle sont déjà parallèles, par exemple.)

Pour corriger :

1. Appuyez sur {{key:Mod+Z}} pour annuler la dernière modification, ou
2. Repérez l'élément rouge dans la liste **Relations et cotes** du panneau de droite (un groupe qui le contient s'ouvre et son nom est en rouge) et choisissez **Supprimer** à côté. Vous pouvez aussi cliquer sur son symbole ou son nombre dans l'esquisse et appuyer sur {{key:Delete}}.

:::note
Cette version ne propose pas de cotes de référence (non pilotantes). Une cote qui ne ferait que mesurer une taille déjà fixée par les autres relations est traitée comme sur-définie. Lisez plutôt les tailles dans le panneau : sélectionnez une ligne et regardez les boutons Cote, ou consultez les informations de la pièce après l'extrusion.
:::

Une esquisse sur-définie avec un conflit réel fait échouer la fonction qui l'utilise (« Sur-défini : 1 relation ne peut pas être respectée. »), et l'historique la marque **⚠ erreur**. Une esquisse seulement redondante se construit encore, avec un ⚠ avertissement.

## Faire glisser pour trouver ce qui est libre

En Sélection, faites glisser n'importe quel point ou ligne bleus. Le solveur le déplace le moins possible tout en conservant chaque relation. Si un glissement briserait une relation, la géométrie revient en place. C'est le moyen le plus rapide de voir quelle cote manque encore.

## La liste des relations

Sans rien sélectionner, le panneau de droite affiche **Relations et cotes**. Chaque ligne comporte :

- **Modifier** (cotes uniquement) : ouvre la zone de saisie ;
- **Sélectionner** : la sélectionne dans l'esquisse ;
- **Supprimer** : la retire.

Les relations d'un même type qui apparaissent plusieurs fois partagent une ligne, comme « Coïncidente × 5 » pour un rectangle lié à l'origine. Cliquez sur la ligne pour l'ouvrir : chaque relation est listée par ce qu'elle relie (« point p2, point p4 ») avec ses propres **Sélectionner** et **Supprimer**. La ligne elle-même comporte :

- **Sélectionner** : sélectionne toutes ces relations dans l'esquisse ;
- **Tout supprimer** : les supprime toutes en une seule étape ({{key:Mod+Z}} les rétablit).

Un groupe qui contient une relation sur-définie s'ouvre de lui-même, avec son nom en rouge. Les cotes sont toujours listées une par ligne, avec leurs valeurs.

Avec une géométrie sélectionnée, la liste n'affiche que les **Relations de la sélection**.
