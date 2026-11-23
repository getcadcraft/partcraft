---
title: Ébauche 3D et usinage de reprise
summary: Dégager la matière autour de tout le modèle niveau par niveau avec une fraise plate, à bout arrondi ou boule, en laissant une surépaisseur pour la finition, puis laisser un outil plus petit n'usiner que là où le premier a laissé de la matière. Ce que garantissent les parcours, et ce qu'ils ne garantissent pas.
keywords: ébauche 3D, ébauche, reprise, usinage de reprise, matière restante, surépaisseur à laisser, pas de profondeur, niveaux, niveau Z, rampe, angle de rampe, plongée, surcoupe, outil plus petit
from: 29ddc266
---

Deux opérations de Fabrication, sous {{ui:Plus}} dans sa barre d'outils, dégagent le brut sur **tout le modèle** en 3D, avec l'outil maintenu vertical (ou suivant la [direction d'outil](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) propre à l'opération). Elles ne demandent aucune sélection.

## Ébauche 3D

{{ui:Ébauche 3D}} descend depuis le dessus du brut une **profondeur de passe** à la fois. À chaque niveau, il dégage tout ce que l'outil peut atteindre sans toucher le modèle : des rangées droites espacées d'un **pas latéral** (une fraction du diamètre de l'outil), puis une fois le long du bord de ce qu'il peut atteindre, de sorte que les parois soient suivies et non laissées en une suite de marches en plan.

- **Surépaisseur à laisser** : distance minimale entre l'outil et le modèle partout, pour la passe de finition (0.5 mm par défaut).
- **Un niveau à chaque face plane** : un niveau supplémentaire à la hauteur de chaque face plane du modèle (plus la surépaisseur à laisser), pour qu'un fond ne reste pas presque une profondeur de passe entière plus haut.
- **Ignorer le brut plus fin que** : une matière plus fine que cette valeur, vers le haut ou latéralement, ne vaut pas une passe (0.05 mm pour l'ébauche, 0.5 mm pour la reprise, pour qu'un filet de matière laissé le long d'une paroi n'envoie pas le petit outil tout autour de chaque paroi).
- **Fond** : rien n'est usiné en dessous de cette hauteur. Vide signifie le fond du modèle.

Il part du brut **tel que les opérations précédentes l'ont laissé** : après une passe de face, il ne coupe pas dans le vide là où la fraise à surfacer est passée.

Pour descendre : là où l'outil rencontrerait de la matière en descendant, il suit une rampe le long de sa propre passe selon l'**angle de rampe**, en allers-retours sur au plus deux diamètres d'outil. Une passe trop courte pour cela est plongée verticalement à l'avance de plongée ; l'opération les compte et avertit, car un outil qui ne coupe pas sur son centre ne devrait pas le faire.

## Usinage de reprise

{{ui:Reprise}} suit la même stratégie pour **un outil plus petit après un plus gros**. Il lit la simulation du brut et ne coupe que là où de la matière subsiste : dans les angles intérieurs où le gros outil ne pouvait pas entrer, dans les rainures qu'il ne contenait pas, dans les marches laissées sur les pentes. Partout ailleurs il ne fait rien, de sorte que son parcours est une petite partie de ce que le même outil ferait sur un brut neuf.

Placez-la après l'opération d'ébauche et choisissez le plus petit outil. Elle a besoin de la simulation du brut des opérations qui la précèdent, que l'espace de travail exécute toujours.

## Qualité des parcours

- **Aucune surcoupe.** Les positions de l'outil sont calculées sur une grille, la fraise étant prise un peu plus grosse qu'elle ne l'est (de 1.4 cellule de grille latéralement, et de la surépaisseur à laisser), de sorte qu'où elle se trouve, elle est dégagée du modèle. Les tests vérifient chaque point de coupe par rapport à l'outil exact sur le maillage exact, et la simulation du brut après chaque exécution : pas de surcoupe, pas de déplacement rapide à travers la matière.
- **Le prix de cela** : les parois conservent un peu plus que la surépaisseur à laisser, jusqu'à la valeur indiquée sous « Surépaisseur supplémentaire sur les parois » de l'opération (environ 0.5 mm pour un outil Ø6, moins pour un plus petit). La passe de finition l'enlève.

Ce que ces parcours ne sont pas :

- Les rangées sont des lignes droites, et non des décalages de la forme de la pièce ni des courbes à engagement constant. Elles font plus de remontées et de déplacements à vide qu'une stratégie par décalage ou adaptative, et la première rangée à chaque niveau coupe toute la largeur de l'outil. Pour les poches à fond plat, l'[Adaptative](topic:manufacture) est une meilleure ébauche.
- La queue et le porte-outil de l'outil ne sont pas contrôlés. Un avertissement signale une coupe plus profonde que la longueur de cannelure.
- Les contre-dépouilles ne sont pas vues : le modèle est ce que l'outil rencontre en descendant suivant son axe. Pour ébaucher un côté, donnez à une seconde opération une [direction d'outil inclinée](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- L'usinage de reprise ne connaît le brut que dans la limite de la grille de la simulation (cellules de 0.1 à 2 mm, selon la taille de la pièce).
- Sur une grande pièce, le programme est long (plus de 100 000 déplacements pour une bride de 200 mm avec un outil Ø6) et demande environ une minute de calcul ; chaque modification dans l'espace de travail recalcule tout le programme. Pour l'ébauche, utilisez le plus gros outil qui convient.
- Contrôlez le résultat dans le simulateur de votre machine avant l'usinage.
