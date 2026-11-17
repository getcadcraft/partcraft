---
title: Zébrures et courbure
summary: Vérifiez la régularité des faces de n'importe quelle pièce avec les zébrures, qui suivent la vue, ou une carte de couleurs de la courbure moyenne, depuis le menu Vues.
keywords: zébrures, lignes de reflet, courbure, carte de courbure, courbure moyenne, qualité de surface, continuité, tangente, g1, g2, lisse, arête vive, lignes de surbrillance
from: 78fed4c3
---

Deux vérifications rapides de la régularité des faces d'une pièce, sur n'importe quelle pièce de l'espace Conception (l'espace Forme a son propre outil, pour la forme que vous modifiez : voir [Formes libres avec Forme](topic:form-surfaces)).

## Zébrures

Ouvrez {{ui:Vues}} et choisissez {{ui:Zébrures}}. La pièce affiche le reflet d'une lumière rayée, comme le ferait une surface polie :

- Lorsque deux faces se rejoignent **tangentiellement** (un congé sur un plat, une surface de Gordon lisse), les zébrures se prolongent d'une face à l'autre avec une inflexion.
- Lorsqu'elles forment une **arête vive**, les zébrures se cassent et sautent.
- Lorsque la courbure correspond aussi (G2), les zébrures se prolongent sans même un coude.

Tournez la vue (glissez, ou cliquez sur une face du ViewCube) : les zébrures sont tracées à nouveau selon la nouvelle direction. **Bandes** règle leur nombre.

## Courbure

Choisissez {{ui:Courbure}} dans le même menu. La pièce est colorée selon sa **courbure moyenne** : bleue là où elle est creuse (concave), pâle là où elle est plate, rouge là où elle est bombée (convexe). La carte indique à partir de quelle courbure les couleurs atteignent leur intensité maximale, en 1/mm et sous forme de rayon. Les arêtes vives comptent comme très courbées : elles ressortent fortement ; observez les faces situées entre elles.

## La carte

Les deux options ouvrent la carte d'analyse en bas à gauche de la vue, qui contient aussi l'[analyse de dépouille](topic:draft-analysis). Passez de l'une à l'autre avec **Afficher**. Choisir de nouveau l'option ouverte dans {{ui:Vues}}, {{ui:Fermer}} ou {{key:Esc}} la désactive. Les couleurs suivent la pièce lorsque vous la modifiez ; rien n'est enregistré dans la pièce.
