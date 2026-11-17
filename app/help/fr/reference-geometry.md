---
title: Plans, axes et points de référence
summary: Créer des plans décalés d'une face, inclinés, passant par trois points, à mi-distance, tangents à un cylindre, perpendiculaires à une arête ou passant par une arête et un point ; des axes ; des points au milieu d'arêtes, aux intersections et aux angles de plans ; esquisser sur ces éléments et les utiliser comme axes de révolution, directions de répétition et plans de symétrie.
keywords: référence, entre objets, milieu, point d'intersection, plan passant par une arête et un point, plan de référence, plan de travail, plan de construction, plan décalé, plan incliné, plan médian, plan tangent, axe de référence, axe de construction, point de référence, point de travail, esquisser sur un plan
from: e7eb6fc1
---

La géométrie de référence est l'échafaudage sur lequel vous construisez les fonctions : un **plan** où esquisser lorsqu'aucune face n'existe, un **axe** autour duquel faire une révolution ou une répétition, un **point** pour arrêter une extrusion. Elle n'a pas de matière propre. Les plans apparaissent dans la vue sous forme de carrés pâles, les axes en traits interrompus, les points en petites croix ; les trois rejoignent l'historique et suivent ce dont ils sont issus lorsque vous modifiez une cote en amont.

Ils se trouvent dans le menu {{ui:Plus}} du groupe Fonctions : {{ui:Plan}}, {{ui:Axe}}, {{ui:Point}}.

## Créer un plan

1. Cliquez sur une face plane, ou sur un plan de base de l'historique, pour partir de celui-ci (facultatif).
2. Choisissez {{ui:Plus}}, puis {{ui:Plan}}. Il démarre comme un plan décalé de 20 % de la taille de la pièce par rapport à ce que vous avez choisi (ou par rapport au plan supérieur).
3. Dans le panneau de droite, choisissez le **Type** et ses références :

| Type | Références | Valeurs |
|---|---|---|
| Décalé d'un plan ou d'une face | **Depuis le plan** | **Distance (mm)**, négative pour l'autre côté |
| Incliné d'un angle, par une arête ou un axe | **Depuis le plan**, **Pivoter autour de** (un axe du repère, un élément d'axe ou une arête droite choisie) | **Angle (°)** |
| Par trois points | **Point 1**, **Point 2**, **Point 3** | — |
| Plan médian entre deux plans | **Premier plan**, **Second plan** (parallèles : à mi-distance ; sécants : le plan qui partage l'angle en deux) | — |
| Tangent à un cylindre | **Cylindre** (une face cylindrique), **Point proche** (quel côté) | — |
| Perpendiculaire à une arête, en un point | **Arête**, **Au point** (le plan passe par le point de l'arête le plus proche de lui, et par ce point aussi) | — |
| Par une arête et un point | **Arête droite** (ou un axe), **Point de passage** | — |
| Perpendiculaire à une arête en son milieu | **Arête** (à mi-longueur, perpendiculaire à elle à cet endroit), ou sans arête **Point 1** et **Point 2** (le plan à mi-distance entre les deux) | — |

Chaque référence possède un bouton **Choisir** : cliquez dessus, puis cliquez dans la vue. Un emplacement de plan accepte un plan de base, un plan de référence ou une face plane ; un emplacement de point accepte l'extrémité d'une arête (cliquez près de cette extrémité), un élément de point ou un endroit sur une face ; un emplacement d'arête accepte une arête. {{key:Esc}} annule une sélection. **Inverser la normale** retourne le plan (dans quel sens fait face une esquisse qui s'y trouve).

Dans cette version, un emplacement qui demande une arête ou une face cylindrique (Tangent à un cylindre, et les emplacements Arête) répond « pas encore disponible » : utilisez plutôt des points ou un axe.

## Esquisser sur un plan

Sélectionnez le plan (dans l'historique ou en cliquant sur son carré dans la vue) et choisissez {{ui:Esquisse}}, ou **Esquisser dessus** dans son panneau. L'esquisse suit le plan : si vous modifiez la distance du plan, l'esquisse et toutes les fonctions qui s'y trouvent suivent aussi.

## Axes et points

- {{ui:Axe}} : par deux points, l'axe d'un cylindre ou d'un cône, à l'intersection de deux plans, le long d'une arête droite (ou l'axe d'une arête circulaire), ou perpendiculaire à une face en passant par un point.
- {{ui:Point}} : aux coordonnées, à un sommet ou à un point d'esquisse, ou au centre d'une arête circulaire, ainsi que les points « entre objets » :

| Type de point | Références |
|---|---|
| Milieu d'une arête (ou entre deux points) | **Arête** (à mi-longueur, y compris pour les arcs et les courbes), ou sans arête **Point 1** et **Point 2** |
| Là où une arête ou un axe rencontre une face ou un plan | **Arête** (droite ou courbe) ou un axe, et **Rencontre le plan** (un plan ou une face plane) ou **Ou une face** (une face plane ou un cylindre). Un cercle croise un plan deux fois, et une droite traverse un cylindre deux fois : **L'autre croisement** prend le second |
| Là où trois plans se rencontrent | **Premier**, **Deuxième** et **Troisième plan** (plans ou faces planes) |

Chacun échoue avec un message simple lorsque ses références ne conviennent pas : une droite parallèle au plan, une droite qui manque le cylindre, une arête qui n'atteint pas le plan, trois plans qui ne se coupent pas en un seul point, un point situé sur la droite qui devrait fixer un plan.

Utilisez-les dans d'autres fonctions :

| Où | Comment |
|---|---|
| Révolution | **Axe** : choisissez l'élément d'axe dans la liste (il doit se trouver dans le plan de l'esquisse) |
| Répétition circulaire | **Axe** : l'élément d'axe |
| Répétition linéaire | **Direction** : un élément d'axe, ou un plan (sa normale) |
| Symétrie | **Plan de symétrie** : un plan de référence |
| Extrusion | **Fin** : Jusqu'à une face ou un plan, Jusqu'à un sommet (un élément de point). Pas encore disponible dans cette version (elle nécessite un noyau exact) |
| Dépouille | **Plan neutre** |

## Lorsqu'une référence disparaît

Un plan créé à partir d'une face qui n'existe plus échoue avec un message qui la nomme, par exemple « La face sur laquelle il repose n'existe plus dans Extrude1. » Il n'est jamais déplacé sur une autre face. Les esquisses et fonctions qui s'y trouvent sont marquées « non construite » tant que vous ne choisissez pas une nouvelle référence ; le reste de la pièce reste inchangé.

:::note
Cette version construit toutes les pièces avec le noyau de maillage, qui crée des plans, des axes et des points à partir des plans de base, des faces planes issues d'une extrusion ou d'une révolution, des points d'esquisse, des coordonnées et d'autres fonctions de référence. Tout ce qui demande une arête, l'extrémité d'une arête ou une face courbe nécessite un noyau exact : pas encore disponible dans cette version (« Elle utilise une face ou une arête du solide, que seul un noyau exact peut trouver : pas encore disponible dans cette version. »).
:::
