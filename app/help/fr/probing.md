---
title: Palpage : trouver la pièce et définir le décalage d'origine
summary: Touchez une face supérieure, un côté, un trou ou un bossage avec un palpeur, et laissez la commande déplacer le décalage d'origine à l'emplacement réel de la pièce, ou mesurez seulement. Ce que chaque commande sait faire, et ce qui n'a pas été validé.
keywords: palpeur, palpage, palpeur de contact, prise d'origine, décalage d'origine, g54, g31, g38.2, saut, référence, trouver le centre, alésage, bossage, arête, mise à zéro, mesurer, contrôle, g10
from: 1f718b82
---

{{ui:Palpage}} dans la Fabrication écrit un cycle de palpage dans le programme : le palpeur touche la pièce, et la commande déplace le décalage d'origine (G54) de la différence entre l'endroit où la surface a été trouvée et celui où le modèle la place. Les opérations suivantes coupent alors là où la pièce se trouve réellement.

**Rien de ce qui suit n'a été exécuté sur une machine.** Les déplacements avant un contact sont des déplacements ordinaires : le palpeur n'est pas surveillé avant le mouvement de palpage lui-même. Exécutez-le lentement, d'abord dans le vide, la main sur l'arrêt d'avance.

## Utilisation

1. Dans l'onglet **Outils**, la première opération de palpage ajoute un **palpeur** : le diamètre de sa bille et l'avance de palpage (100 mm/min sauf si vous en réglez une).
2. Appuyez sur {{ui:Plus}} dans la barre d'outils de Fabrication, puis sur {{ui:Palpage}}, et cliquez sur ce qu'il faut toucher. Chaque sélection est un cycle, dans l'ordre de vos clics :

| Sélection | Le cycle | Ce qui est défini |
|---|---|---|
| Une face plane tournée vers l'axe d'outil | Un contact en descendant | Z |
| Une face latérale plane perpendiculaire à X ou à Y | Un contact en allant vers la face, un peu sous son sommet | X ou Y |
| Un trou ou un bossage suivant l'axe d'outil | Quatre contacts (+X, −X, +Y, −Y) | X et Y de son centre |

3. **Avec le résultat** : {{ui:Définir le décalage d'origine}} ou {{ui:Mesurer seulement}}.
4. **Commencer à cette distance** et **Chercher au-delà de cette distance** indiquent à quelle distance de la surface attendue le mouvement de palpage commence, et jusqu'où au-delà le palpeur peut aller avant que la commande abandonne. **Profondeur** est la distance sous le sommet d'un trou, d'un bossage ou d'une face latérale que descend la bille.

Placez l'opération de palpage en premier, avant toute coupe.

## Ce que chaque commande écrit

| Commande | Contact | Résultat |
|---|---|---|
| Type Fanuc | `G31`, la position conservée dans `#101` à `#104` | Les variables de décalage (`#5221` à `#5223`) sont déplacées de trouvé − attendu. Mesurer seulement : la différence est laissée dans `#110` (et `#111`). |
| LinuxCNC | `G38.2`, la position conservée dans des paramètres nommés | `G10 L2 P1` avec le nouveau décalage. Mesurer seulement : un message `(DEBUG, …)`. |
| GRBL | `G38.2` | Un contact définit l'axe avec `G10 L20 P1`. GRBL n'a pas de variables, il **ne peut donc pas calculer un centre** : le fichier l'indique dans un commentaire et ne définit rien. |

Le calcul relève du post, vous pouvez donc le modifier : les événements sont `probe-move` et `probe-set` ([Post-processeurs modifiables](topic:post-processors)).

## Limites

- Un seul décalage d'origine (G54). Faces perpendiculaires aux axes uniquement : pas d'angle, pas de cycle d'angle, pas de rotation de la pièce.
- Pas de préréglage d'outil, pas de contrôle d'outil cassé, pas de mesure d'une cote par rapport à une tolérance, pas de rapport.
- La broche n'est pas démarrée pour un palpage et le liquide de refroidissement reste coupé ; rien ne vérifie que l'outil en broche est bien un palpeur.
- La simulation du brut ne déroule pas de parcours de palpage.
- L'étalonnage propre au palpeur (décalage de bille, flexion du stylet, sens de déclenchement) relève de la commande.
