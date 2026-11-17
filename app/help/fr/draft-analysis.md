---
title: Vérifier la dépouille pour le moulage et la coulée
summary: Colorez la pièce selon son angle de dépouille par rapport à la direction de démoulage d'un moule, repérez les faces qui se démoulent, celles qui demandent plus de dépouille et celles qui se démoulent par l'autre moitié du moule, avec la part de surface de chacune.
keywords: analyse de dépouille, dépouille, conicité, moule, moulage sous pression, moulage par injection, direction de démoulage, plan de joint, contre-dépouille, démoulage, vérifier la dépouille
from: 6a106f83
---

Les pièces fabriquées dans un moule, une matrice ou un moule en sable ont besoin de **dépouille** : des parois légèrement inclinées pour que la pièce glisse hors du moule. **L'analyse de dépouille** colore chaque face selon son inclinaison par rapport à la direction d'ouverture du moule (le **tirage**).

## Activer l'analyse

1. Dans l'espace Conception, ouvrez {{ui:Vues}} et choisissez {{ui:Analyse de dépouille}}.
2. Réglez **Tirage** : la direction d'ouverture du moule, selon X, Y ou Z dans un sens ou dans l'autre, ou **Perpendiculaire à une face choisie** : appuyez sur {{ui:Choisir une face}} et cliquez sur une face plane de la pièce.
3. Réglez **Dépouille minimale**, en degrés : l'inclinaison minimale que votre procédé exige (souvent 1° à 3°).

La pièce est colorée :

| Couleur | Signifie |
|---|---|
| Vert : **Dépouille positive** | Inclinée vers le tirage d'au moins la minimale : se démoule depuis cette moitié du moule |
| Ocre : **Dépouille à ajouter** | Dans la minimale dans un sens ou dans l'autre, par exemple une paroi verticale : ajoutez de la dépouille ici |
| Rouge : **Dépouille négative** | Inclinée à l'opposé du tirage d'au moins la minimale : se démoule par l'autre moitié du moule, ou constitue une contre-dépouille si la pièce doit sortir d'une seule moitié |

La part de la surface de la pièce de chaque classe est affichée à côté. **Inverser le tirage** regarde depuis l'autre moitié du moule : le vert et le rouge s'échangent.

Les faces courbes sont évaluées point par point : un cylindre couché transversalement au tirage montre donc une bande à dépouille à ajouter le long de ses côtés.

Les couleurs suivent la pièce à mesure que vous la modifiez. {{key:Esc}} ou {{ui:Fermer}} désactive l'analyse ; rien n'est enregistré dans la pièce.

:::tip
Pour ajouter de la dépouille, utilisez la fonction {{ui:Dépouille}} sur les faces ocre (voir [Balayage, lissage et dépouille](topic:sweep-loft-draft)), puis vérifiez à nouveau.
:::
