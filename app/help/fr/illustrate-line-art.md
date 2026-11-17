---
title: "Illustrations techniques : dessin au trait, images et feuilles"
summary: Exportez n'importe quelle vue en dessin au trait vectoriel (SVG ou PDF) à trois épaisseurs de trait, avec les lignes cachées en tirets ou omises, les faces coupées hachurées et des remplissages facultatifs, ou en PNG ; placez plusieurs vues sur une même feuille.
keywords: illustrer, dessin au trait, illustration technique, svg, pdf, png, lignes cachées, silhouette, hachure, feuille, exporter
from: 0e9bea63
---

{{ui:Export}} dans le groupe {{ui:Out}} ouvre la boîte de dialogue d'export :

- {{ui:What}} : la scène telle qu'elle est, une seule vue ou toutes les vues.
- {{ui:As}} : **PDF** ou **SVG** (dessin au trait vectoriel ; les deux sont produits à partir du même dessin), **PNG du dessin au trait**, ou une **image PNG de la vue 3D** (jusqu'à 4096 pixels de large), et le [fichier 3D interactif](topic:illustrate-interactive).
- {{ui:Pages}} : une vue par page, ou toutes les vues sur une seule feuille avec leur nom dessous. {{ui:Paper}} : A4, A3, Letter ou Tabloid.
- {{ui:Hidden lines}} : en tirets ou omises. {{ui:Fills}} : tel quel, aucun, couleurs unies ou ombré. Dessiner aussi les arêtes adoucies ajoute des traits de détail.

Le dessin au trait a trois épaisseurs : les contours (silhouettes, arêtes ouvertes et contours des coupes), les arêtes vives et les traits de détail. Les faces coupées d'une coupe ou d'un écorché en boîte sont hachurées. Les vues éclatées reçoivent des traits mixtes partant de l'emplacement de chaque pièce ; les repères, annotations, la liste de pièces et la loupe sont aussi dessinés.

Le dessin au trait est calculé à partir des formes des pièces par la méthode des maillages (la même que celle de la feuille de dessin de PartCraft, sans le noyau exact). Les faces courbes sont donc dessinées par leurs facettes, telles que le modèle les contient.

## Pas encore disponible

- Les images au niveau de qualité du traceur de chemins (le moteur de rendu de ModelCraft) ne sont pas proposées ici ; les images PNG reprennent l'aspect propre de la vue 3D.
