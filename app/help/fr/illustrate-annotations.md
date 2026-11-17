---
title: Annotations qui restent attachées
summary: Étiquettes, légendes, flèches, mesures, formes et images. Les annotations sur une pièce sont épinglées à un point de celle-ci et suivent la pièce lorsqu'elle s'éclate ; leur texte peut reprendre le numéro, le nom, le matériau et la quantité de la pièce.
keywords: illustrer, annotation, étiquette, légende, repère, flèche, flèche de rotation, mesure, cote, rayon, angle, forme, image, champs
from: 583fe374
---

Choisissez un outil dans la section {{ui:Annoter}} du panneau, puis cliquez :

- **Étiquette** et **légende** : cliquez sur un point d'une pièce. Le texte se place à côté avec une ligne de repère vers ce point ; faites glisser le texte pour le placer. Son texte se modifie dans le panneau et peut utiliser des champs : `{number}`, `{name}`, `{material}`, `{description}`, `{qty}` et `{item}` (le numéro de repère) se remplissent à partir de la pièce.
- **Flèches** : cliquez sur une face ; la flèche part de là et pointe hors de la face. Droite, courbe, ou une **flèche de rotation** autour de la normale de la face (« tourner ici »). Sa longueur, son style et son sens se règlent dans le panneau.
- **Mesures** : une distance (deux points), un angle (trois points, le coin en second) ou un rayon (trois points sur une arête arrondie). La valeur est prise à partir de la position assemblée des pièces, donc un éclatement ne la modifie pas.
- **Formes et images** : un rectangle, une ellipse, une ligne ou une flèche épinglée à l'image (deux clics), ou une image PNG ou JPEG.

Les annotations d'une pièce la suivent lorsqu'elle s'éclate ou est déplacée dans une vue, et ne sont pas dessinées lorsqu'elle est masquée. Chaque vue affiche les annotations de sa liste : le bouton œil du panneau affiche ou masque l'une d'elles dans cette vue ; la corbeille la supprime de la notice.
