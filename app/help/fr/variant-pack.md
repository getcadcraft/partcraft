---
title: Créer un lot de variantes à partir de vos configurations
summary: Construire toutes les configurations d'une pièce, ou quelques-unes choisies, d'un coup en STEP, IFC, DWG et un aperçu chacune, avec un tableau de leurs paramètres et la pièce comme un seul élément de bibliothèque avec ses variantes.
keywords: lot de variantes, variantes, configurations, famille de pièces, export par lot, chaque taille, step, ifc, dwg, aperçu, tableau, csv, json, bibliothèque, configurateur, configurateur de produit, catalogue, json d'élément
from: 9a6db99f
---

## Ce que vous allez faire

Remettre **chaque taille d'une pièce à la fois** : un fichier STEP, IFC et DWG et une image pour chaque configuration, un tableau qui indique ce qu'est chacune, et un élément de bibliothèque qui réunit toutes ces variantes sur une même page.

Il vous faut d'abord une pièce avec des **configurations** (voir [Configurations et tableaux de conception](topic:design-tables)). Une configuration qui désactive une fonction, comme une plaque avec et sans trous, devient sa propre variante.

## Étapes

1. Ouvrez la pièce. Dans l'onglet {{ui:Paramètres}}, repérez **Configurations**.
2. Cliquez sur {{ui:Lot de variantes…}}.
3. Cochez les configurations à construire (toutes le sont) et les fichiers à écrire : STEP, IFC, DWG, un aperçu et l'élément de bibliothèque.
4. Cliquez sur {{ui:Créer le lot}}. La ligne d'état compte les variantes au fur et à mesure de leur construction ; votre pièce n'est pas modifiée.
5. Une archive zip se télécharge : `<part> variants.zip`.

## Contenu de l'archive zip

| Fichier | Ce que c'est |
|---|---|
| `<name>.step` | La configuration sous forme de solide STEP. |
| `<name>.ifc` | IFC4, un élément avec le corps construit et les paramètres de la pièce en propriétés ; la valeur est celle propre à cette configuration. |
| `<name>.dwg` | Les vues de face, de dessus, de droite et isométrique sous forme de feuille de dessin à taille réelle. |
| `<name>.svg` | Une image isométrique au trait de la configuration. |
| `variants.csv`, `variants.json` | Le tableau des paramètres : l'identifiant, le nom et la valeur de chaque paramètre pour chaque variante, les fonctions qu'elle désactive, ses fichiers, son volume et sa taille. |
| `<part>.item.json` | La pièce comme un seul élément de bibliothèque avec ses variantes (voir ci-dessous). |
| `README.txt` | Ce qui a été créé, les remarques ci-dessous et tout ce qui n'a pas été construit. |

Les fichiers sont nommés d'après la configuration. Une configuration qui ne se construit pas (une fonction impossible à réaliser avec ces valeurs) est exclue des fichiers et du tableau, listée dans le README et dans un message affiché après l'enregistrement de l'archive ; les autres sont tout de même écrites.

## Bon à savoir

- **STEP** est exact lorsque le noyau exact est activé dans votre version. Sinon, le STEP est facetté (triangles plats), et le README le signale.
- **DWG** est la feuille de dessin, pas un modèle 3D. Ses traits viennent du maillage, donc une arête courbe est formée de nombreux petits segments.
- **L'élément de bibliothèque** contient un corps et une emprise au sol par variante, dans les axes de la bibliothèque : Z vers le haut, la face avant vers −Y, et le point d'insertion au milieu de l'arrière, en bas. Le plan est le rectangle englobant de chaque variante. Un élément est limité à 8 Mo ; une variante très lourde devient donc une boîte à sa taille, et le README indique combien.
- La configuration active de la pièce devient la variante par défaut de l'élément.
- Les ports (points de raccordement pour tuyaux et gaines) ne sont pas définis depuis PartCraft.

## Placer les variantes sur une page de bibliothèque

Téléversez `<part>.item.json` dans **Bibliothèque › Téléverser** sur le site. Choisissez sa catégorie, sa licence et votre mention d'attribution : il devient un élément de la bibliothèque avec ses variantes. Dans BimCraft, lors du placement, l'application demande quelle variante utiliser, et Permuter propose les autres. La page où les visiteurs choisissent des options, voient la 3D et téléchargent une variante est pour l'instant un **aperçu réservé au personnel** : elle n'est pas encore ouverte au public.

## En ligne de commande

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` désigne les configurations, `--formats` accepte parmi `step`, `ifc`, `dwg`, `preview`, et `--no-item` exclut l'élément de bibliothèque. La commande écrit un dossier, une archive zip ou les deux, et se termine avec le code 1 lorsqu'une variante n'a pas pu être construite. Voir [Scripts et ligne de commande](topic:scripts-and-cli).
