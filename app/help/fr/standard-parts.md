---
title: Ouvrir une pièce normalisée
summary: Démarrer une pièce à partir d'une vis, d'un boulon, d'un écrou, d'une rondelle, d'une goupille, d'un roulement ou d'une clavette dimensionnés selon leur norme, avec chaque taille du tableau de la norme comme configuration.
keywords: pièce normalisée, pièces normalisées, boulon, vis, hexagonale, écrou, rondelle, goupille, roulement, roulement à billes, clavette, clavette parallèle, fixation, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, modèle, bibliothèque
from: b9e2811f
---

PartCraft ouvre des pièces mécaniques courantes déjà prêtes : les dimensions proviennent des tableaux des normes, et chaque taille du tableau est une configuration à laquelle vous pouvez passer.

## En ouvrir une

1. Cliquez sur {{ui:Pièce normalisée}} dans le groupe Fichier.
2. Dans {{ui:Pièce}}, choisissez le type, par exemple {{ui:Vis à tête hexagonale (ISO 4017)}}.
3. Dans {{ui:Format}}, choisissez la taille, par exemple `M10 × 40`.
4. Cliquez sur {{ui:Ouvrir}}.

La pièce s'ouvre comme une nouvelle pièce non enregistrée. Enregistrez-la pour la conserver ({{key:Mod+S}}).

| Pièce | Norme | Paramètres |
|---|---|---|
| Vis à tête hexagonale, boulon hexagonal | ISO 4017, ISO 4014, ASME B18.2.1 (pouces) | `d` diamètre du filetage, `s` largeur sur plats, `k` hauteur de tête, `l` longueur |
| Écrou hexagonal | ISO 4032, ASME B18.2.2 (pouces) | `d`, `s`, `height` |
| Rondelle plate | ISO 7089 | `d1` intérieur, `d2` extérieur, `h` épaisseur |
| Goupille parallèle | ISO 2338 | `d`, `l` |
| Roulement à billes à gorge profonde | ISO 15 | `d` alésage, `D` diamètre extérieur, `B` largeur |
| Clavette parallèle | DIN 6885-1, forme A | `b` largeur, `h` hauteur, `l` longueur |

## Modifier la taille

Chaque taille est une configuration (voir [Configurations et tableaux de configurations](topic:design-tables)) : ouvrez {{ui:Paramètres}} et choisissez-en une autre, ou modifiez un paramètre, par exemple `l` pour une vis plus longue, puis enregistrez-la comme configuration personnelle.

## Ce qui est modélisé

- Vis et boulons : la tête hexagonale et une tige lisse. Écrous : l'hexagone avec un trou au diamètre nominal du filetage. Les filetages ne sont pas modélisés ; ajoutez-en un avec {{ui:Filetage}} si vous en avez besoin (voir [Filetages](topic:threads)).
- Goupilles : un simple cylindre ; les chanfreins d'extrémité sont omis.
- Roulements : seulement l'enveloppe extérieure (une bague à l'alésage, le diamètre extérieur et la largeur), ce qu'il faut pour en placer un.
- Clavettes : la clavette à bouts arrondis.

Le matériau de la pièce est l'acier, donc le panneau de masse affiche son poids. Les engrenages ne sont pas encore disponibles : PartCraft n'a pas de fonction de denture, et un disque n'est pas un engrenage. CadCraft dessine les engrenages selon la convention de dessin, et la bibliothèque les fournit sous forme de dessins.
