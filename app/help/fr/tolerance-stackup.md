---
title: Cumuls de tolérances
summary: Choisissez une chaîne de faces à travers les pièces d'un assemblage et voyez de combien le jeu à son extrémité peut varier, au pire cas et en RSS, avec les cotes les plus influentes classées en premier.
keywords: cumul de tolérances, cumul, analyse de tolérances, chaîne de tolérances, chaîne de cotes, boucle, jeu, dégagement, pire cas, rss, somme quadratique, tolérancement statistique, contributeurs, sensibilité, tolérancement géométrique, gd&t, tolérance générale, iso 2768
from: cbdb3159
---

Un **cumul de tolérances** additionne les cotes le long d'une chaîne passant par plusieurs pièces, pour voir de combien un résultat — en général un jeu — peut varier lorsque chaque pièce est fabriquée n'importe où dans ses tolérances.

## Choisir la chaîne

1. Ouvrez un assemblage et choisissez {{ui:Cumul}} dans le groupe Assemblage. Une carte s'ouvre sur la vue.
2. Choisissez le sens **le long** duquel la chaîne est mesurée : X, Y ou Z de l'assemblage, ou {{ui:La normale de la première face}}.
3. Appuyez sur {{ui:Choisir la chaîne}} et cliquez sur les faces que la chaîne traverse, **dans l'ordre** : commencez d'un côté du jeu, traversez les pièces, et finissez de l'autre côté du jeu.
4. Appuyez sur {{ui:Terminé}} ou sur Entrée. Retour arrière retire le dernier clic ; {{key:Esc}} annule la saisie.

Deux clics sur la même pièce forment la cote de cette pièce (sa distance le long de la chaîne). Un clic sur une autre pièce forme une **interface** entre elles, là où elles se touchent ; elle n'a pas de tolérance, sauf si vous en saisissez une. Les maillons s'ajoutent ou se retranchent selon le sens de parcours de la chaîne, et ils referment la boucle : le jeu nominal est celui que montre le modèle.

Vous pouvez aussi {{ui:Ajouter un maillon}} à la main et saisir sa valeur nominale, sa tolérance, et s'il s'ajoute (+) ou se retranche (−).

## Donner à chaque maillon sa tolérance

Chaque maillon a un écart **supérieur** et un écart **inférieur** (par exemple +0.1 et −0.05). **Tolérance issue de** les remplit à partir de la pièce :

- **Tolérance générale** : le champ Tolérance du cartouche de la pièce (voir [Dessin vers PDF](topic:drawing-pdf)), lorsqu'il indique ±0.1, +0.2/-0.1 ou ISO 2768-f, -m, -c ou -v (tolérances linéaires ISO 2768-1, selon la taille du maillon). La tolérance générale d'une pièce est utilisée dès le choix de la chaîne.
- **Tolérancement géométrique** : tout cadre de tolérancement du dessin de la pièce. Les zones de position, de profil et de battement donnent ± la moitié de la tolérance. Une tolérance d'orientation ou de forme se situe en général déjà dans la tolérance de dimension : ajoutez-la seulement là où la chaîne rencontre la surface contrôlée. Avec Ⓜ ou Ⓛ, la zone est prise à sa taille indiquée ; la tolérance bonus n'est pas comptée.
- **Saisie** : toutes les valeurs que vous tapez.

## Lire les résultats

- **Jeu, nominal** et, lorsque les tolérances sont inégales, **Jeu, moyen** — +0.2/−0 et +0/−0.1 déplacent le milieu de la plage.
- **Pire cas** : toutes les tolérances à leur limite en même temps. Le jeu ne peut jamais sortir de cette plage.
- **RSS** (somme quadratique) : chaque tolérance est prise comme trois écarts-types d'une dispersion normale, puis additionnée comme la racine carrée de la somme de leurs carrés. La plupart des assemblages restent largement dans le pire cas ; c'est l'estimation habituelle pour des pièces fabriquées en série.
- Indiquez **Jeu au moins** et **Jeu au plus** pour voir si le pire cas reste toujours dans les limites, et combien d'assemblages sur un million la RSS prévoit hors limites.
- La colonne **#** classe les maillons selon leur **part** dans la RSS : resserrez les premiers pour obtenir le plus grand effet.

{{ui:Enregistrer en CSV}} écrit les maillons, leurs parts et les résultats. Les cumuls sont enregistrés dans le fichier d'assemblage, et chaque modification correspond à une étape pour {{key:Mod+Z}}.

:::note
Un cumul suit une seule direction. Il ne suit ni les angles ni les tours le long de la chaîne, et il ne lit pas les tolérances dimensionnelles des esquisses : donnez-les en saisie ou par le cartouche.
:::
