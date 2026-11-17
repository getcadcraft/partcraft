---
title: Revenir en arrière et avancer dans l'historique
summary: Faites monter et descendre la barre de retour d'une fonction à la fois pour suivre la construction de la pièce, insérez des fonctions au milieu, et revenez à la fin.
keywords: retour arrière, revenir en arrière, avancer, barre de retour, parcourir l'historique, insérer une fonction, geler, historique
from: 9a366cae
---

La barre de retour détermine la part de l'historique qui est construite. Les fonctions situées sous la barre sont grisées et non construites ; les nouvelles fonctions s'ajoutent à la barre.

## Parcourir une fonction à la fois

Avec la pièce à l'écran (aucune esquisse ni aucun dessin ouvert) :

| Action | Résultat |
|---|---|
| {{key:[}} ou le bouton à flèche vers le haut à côté du nom de la pièce | La barre remonte d'une fonction |
| {{key:]}} ou le bouton à flèche vers le bas | La barre descend d'une fonction |
| {{key:End}} ou le bouton qui place la barre à la fin | Toutes les fonctions sont de nouveau construites |

La barre d'état indique où se trouve la barre, par exemple « Barre de retour après Sketch1 : 1 fonction construite sur 2 ». Les boutons sont désactivés lorsque la barre ne peut plus avancer dans ce sens.

Vous pouvez aussi choisir {{ui:Revenir ici}} sur n'importe quelle fonction, ou cliquer sur **Barre de retour · avancer** dans l'historique.

## Insérer une fonction au milieu

1. Faites reculer la barre jusqu'à l'endroit où doit se trouver la nouvelle fonction.
2. Ajoutez la fonction : elle s'insère à la barre.
3. Appuyez sur {{key:End}} pour construire le reste de l'historique par-dessus.

Chaque déplacement de la barre est une étape que vous pouvez annuler avec {{key:Mod+Z}}. La position de la barre est enregistrée dans le fichier, si bien qu'une pièce peut être envoyée dans un état antérieur. L'outil en ligne de commande la déplace aussi : `partcraft rollback part.json` et `partcraft forward part.json --end`.
