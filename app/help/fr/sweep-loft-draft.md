---
title: Balayage, lissage et dépouille
summary: Balayez un profil fermé le long d'un chemin de courbes d'esquisse ou d'arêtes de modèle, faites un lissage entre des sections placées sur des plans différents, et ajoutez une dépouille aux faces ; avec les options, les résultats exacts et les messages.
keywords: balayage, bossage balayé, découpe balayée, tube, chemin, lissage, bossage lissé, sections de fusion, réglée, dépouille, angle de dépouille, faces en dépouille, plan neutre, direction de démoulage, moulage
from: 9d637981
---

:::note
**Dans cette version**, le balayage et le lissage ne sont pas encore disponibles : ils ont besoin d'un noyau géométrique exact, que cette version de PartCraft ne possède pas. [Ce qui n'est pas encore disponible](topic:not-built-yet) indique quoi faire à la place ; les sections Balayage et Lissage les décrivent tels qu'ils fonctionnent avec un noyau exact. **La dépouille fonctionne** sur les faces planes : le noyau maillage la construit, avec le même résultat qu'un noyau exact.
:::

Les trois se trouvent dans le menu {{ui:Plus}} du groupe Fonctions (voir [Le noyau maillage](topic:solid-kernels)). Chacun peut ajouter de la matière, en découper, ne garder que la partie commune (**Intersection**) ou créer un **Nouveau corps** (balayage et lissage : **Opération** dans le panneau).

## Balayage

Un balayage déplace un profil fermé le long d'un chemin : tubes, poignées, ressorts en fil, rails.

1. Tracez le **chemin** dans une esquisse : lignes et arcs enchaînés bout à bout (ou utilisez des arêtes du modèle, ci-dessous).
2. Tracez le **profil** dans une autre esquisse dont le plan passe par une extrémité du chemin, par exemple un cercle sur le plan de dessus au début d'un chemin tracé sur le plan de face.
3. Sélectionnez l'esquisse du profil et choisissez {{ui:Plus}}, puis {{ui:Balayage}}. L'esquisse la plus récente, autre que celle du profil, devient le chemin.

Dans le panneau :

| Réglage | Rôle |
|---|---|
| **Chemin** | Cochez les esquisses qui forment le chemin (plusieurs esquisses s'enchaînent bout à bout en un seul chemin 3D) ; **Choisir les arêtes du modèle** ajoute des arêtes de la pièce |
| **Orientation** | Suivre le chemin (par défaut), Frenet, Fixe (les sections restent parallèles au profil), Garder une direction, Le long d'une courbe guide |
| **Échelle en bout** | Le profil grandit ou rétrécit linéairement jusqu'à cette taille à l'extrémité (1 = constant) |

Les angles vifs du chemin sont traités en onglet. Un cercle de rayon 5 balayé le long d'une ligne de 100 mm est un cylindre de 2500π mm³ exactement ; le long d'un quart d'arc de rayon 50, un quart de tore de 625π² mm³.

## Lissage

Un lissage fait la transition entre deux sections ou plus, placées sur des plans différents.

1. Tracez chaque section dans sa propre esquisse (une boucle fermée chacune), sur les plans de base, des plans de référence (voir [Plans, axes et points de référence](topic:reference-geometry)) ou des faces.
2. Choisissez {{ui:Plus}}, puis {{ui:Lissage}}. Chaque esquisse à une seule boucle, non utilisée, devient une section, dans l'ordre de l'historique.

Le panneau liste les sections dans l'ordre (**Monter** les réordonne, **Retirer** en supprime une) ; **Ajouter une esquisse** en ajoute une autre, **Choisir une face** ajoute une face plane de la pièce. **Réglée** crée des faces planes entre les sections au lieu d'une transition lisse. Entre deux carrés, les deux sont le même tronc de pyramide (un carré de 40 mm vers un carré de 20 mm sur 30 mm : exactement 28000 mm³).

Les sections dont le nombre de côtés diffère (un carré vers un triangle) sont appariées par OpenCascade, qui peut vriller les faces latérales ; la fonction vous en avertit. Tracez des sections ayant le même nombre de côtés, en partant de sommets correspondants, pour un résultat plus propre.

### Guides

Les guides sont des courbes que les côtés du lissage doivent suivre de la première section à la dernière, pour un renflement, un étranglement ou une évasion que vous dessinez vous-même.

1. Tracez deux guides ou plus : des courbes ouvertes (lignes, arcs, splines) allant de la première section à la dernière et traversant chaque section une fois. Une même esquisse peut contenir plusieurs guides : chaque chaîne séparée est un guide. Tracez un guide de façon qu'il rencontre réellement chaque section : accrochez ses extrémités aux points des sections.
2. Dans le panneau Lissage, sous **Guides**, cochez les esquisses qui les contiennent, ou cliquez sur {{ui:Choisir des arêtes du modèle comme guides}} et cliquez sur des arêtes de la pièce ({{key:Esc}} termine).

Avec des guides, le lissage est une surface de Gordon passant par les sections et les guides (voir [Surfaces sur un réseau de courbes](topic:gordon-surfaces)), fermée à plat aux deux extrémités pour former un solide. Le panneau indique à quel point elle les suit. Chaque section doit alors être une esquisse (un point ou une face ne peut pas recevoir de guide), et **Réglée** ne s'applique pas. Un guide qui manque une section de plus de 0.01 mm est refusé, avec l'écart.

Contrôlé : deux cercles (de diamètres 20 mm et 10 mm, à 40 mm l'un de l'autre) avec quatre guides droits donnent le volume du tronc de cône à 0.000002 % près ; des arcs qui bombent de 5 mm donnent un tonneau qui suit chaque guide à 0.00001 mm près.

## Dépouille

La dépouille incline les faces pour qu'une pièce puisse sortir d'un moule.

1. Choisissez {{ui:Plus}}, puis {{ui:Dépouille}} (ou faites d'abord {{key:Shift}}+clic sur les faces). Sans rien avoir choisi, vous êtes en mode choix : cliquez sur chaque face à incliner, puis {{ui:Terminé}}.
2. Réglez l'**Angle (°)**, le **Plan neutre** (où les faces gardent leur taille) et la **Direction de démoulage** (par défaut, la normale du plan neutre).

Un angle positif incline la face vers l'intérieur dans le sens du démoulage et enlève de la matière ; un angle négatif en ajoute. Le plan neutre est d'abord le plan de dessus. Dans cette version, seules les faces planes peuvent recevoir une dépouille : un cylindre, un cône ou une face libre affiche « Dépouille : dans cette version, faces planes uniquement (le noyau maillage la construit). » Les quatre côtés d'un bloc de 100 × 100 × 50 incliné de 5° autour de sa base deviennent un tronc de pyramide de h/3·(a² + b² + ab) exactement, avec b = a − 2h·tan 5°.

## Messages

| Message | Que faire |
|---|---|
| « Le plan du profil doit passer par une extrémité du chemin … » | Déplacez l'esquisse du profil au début (ou à la fin) du chemin |
| « Le chemin a un trou : ses courbes ne se rejoignent pas bout à bout … » | Enchaînez les courbes du chemin ; dans des esquisses séparées, leurs extrémités doivent coïncider exactement |
| « Une section de lissage doit avoir exactement une boucle fermée » | Coupez l'esquisse, ou supprimez la boucle en trop |
| « … ne peut pas recevoir de dépouille autour de ce plan neutre … » | La face est parallèle au plan neutre ou ne le rencontre pas |
| « Dépouille : dans cette version, faces planes uniquement (le noyau maillage la construit). » | Une face choisie est courbe. Retirez-la ; ne mettez en dépouille que des faces planes |

:::note
Pas encore disponible : balayages avec torsion, balayages de paroi mince et de surface, guides de lissage et tangence en bout, dépouille sur cylindres, cônes et faces libres.
:::
