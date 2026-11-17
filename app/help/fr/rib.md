---
title: Nervures et goussets
summary: Renforcez une pièce avec une nervure dessinée comme une seule ligne : elle se remplit de la ligne jusqu'aux parois, sur une épaisseur fixée dans le plan d'esquisse, du côté que vous choisissez.
keywords: nervure, gousset, voile, raidisseur, entretoise, équerre, support d'angle, paroi mince, renforcer
from: 5c218881
---

:::note
**Pas encore disponible dans cette version.** La nervure nécessite un noyau géométrique exact, que cette version de PartCraft ne possède pas : elle construit toutes les pièces avec le noyau de maillage. [Ce qui n'est pas encore disponible](topic:not-built-yet) indique quoi faire à la place. Le reste de cette page décrit son fonctionnement avec un noyau exact.
:::

Une **nervure** (ou gousset) est une paroi mince qui renforce une pièce, comme le triangle dans l'angle d'une équerre en L. Vous ne dessinez que son bord libre : PartCraft remplit l'espace entre cette ligne et les parois. Elle nécessite le **noyau exact** (voir [Le noyau de maillage](topic:solid-kernels)).

## Ajouter une nervure

1. Créez un plan passant par le milieu de l'emplacement de la nervure (pour une équerre en L de 40 de profondeur, un plan à 20 devant son esquisse : voir [Plans, axes et points de référence](topic:reference-geometry)).
2. Esquissez dessus **une ligne** d'une paroi à l'autre — ou quelques lignes bout à bout pour un bord de nervure coudé. La ligne peut s'arrêter avant les parois : ses extrémités sont prolongées jusqu'à les atteindre.
3. Sélectionnez l'esquisse et choisissez {{ui:Plus}} › {{ui:Nervure}}.

La nervure se remplit de la ligne jusqu'aux parois, du côté du milieu de la pièce, de sorte qu'un gousset se place dans l'angle intérieur. Si ce côté est ouvert et l'autre fermé, PartCraft l'inverse pour vous et l'indique.

## Réglages

- **Épaisseur (mm)** est l'épaisseur de la nervure dans le plan d'esquisse. Elle peut être pilotée par un paramètre.
- **Épaisseur** (le choix sous celui-ci) : **Centrée sur le plan d'esquisse**, **Devant le plan** (suivant sa normale) ou **Derrière le plan**.
- **Inverser** remplit l'autre côté de la ligne.

## Messages

- **De ce côté, le bord de la nervure ne rencontre jamais le corps** — rien ne se ferme dans l'espace de ce côté : cochez ou décochez **Inverser**, ou déplacez la ligne pour que des parois la bornent.
- **Une nervure a besoin d'une seule chaîne ouverte de lignes dans son esquisse** — l'esquisse contient une forme fermée, un arc ou une spline, ou des lignes qui ne se rejoignent pas bout à bout.
- **Le bord de la nervure traverse le corps à cet endroit** — la ligne se trouve à l'intérieur du solide ; tracez-la dans l'espace libre entre les parois.
