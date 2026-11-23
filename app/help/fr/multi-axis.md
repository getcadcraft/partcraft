---
title: Usinage 4 et 5 axes
summary: Indiquez à PartCraft les axes rotatifs de la machine, inclinez l'outil pour n'importe quelle opération ordinaire, finissez une surface avec une fraise boule qui s'incline pendant la coupe, ou tournez la pièce sous l'outil sur un 4e axe. Ce qui est écrit dans le G-code, et ce qui n'a pas été validé.
keywords: 5 axes, cinq axes, 4 axes, quatrième axe, multiaxe, multi-axes, 3+2, indexé, positionnel, inclinaison, outil incliné, rotatif, trunnion, table, tête, axe A, axe B, axe C, TCP, point central de l'outil, g43.4, temps inverse, g93, cinématique, pivot, flanc, angle d'attaque
from: c4f1c491
---

La Fabrication peut maintenir l'outil incliné, et déplacer les axes rotatifs pendant la coupe. Trois possibilités, de la plus simple à la plus complète.

**Rien de ce qui suit n'a été exécuté sur une machine.** Les parcours sont contrôlés par rapport à la géométrie par les tests, et le G-code est relu, mais les posts intégrés suivent les codes documentés des commandes, et non une machine précise. Validez un programme dans le simulateur de votre commande et dans le vide avant qu'il n'entre en contact avec le métal.

## Les axes rotatifs de la machine

Dans l'onglet **Mise en place**, {{ui:Axes rotatifs}} indique ce que possède la machine :

| Choix | La machine |
|---|---|
| Aucun (3 axes) | Une fraiseuse simple. Toute opération qui nécessite un outil incliné avertit, et le post refuse de l'écrire. |
| A (tourne autour de X) | Un axe rotatif le long de X : une table ou un diviseur de 4e axe. L'outil ne peut s'incliner que dans le plan Y–Z. |
| B (tourne autour de Y) | Un axe rotatif le long de Y. L'outil ne peut s'incliner que dans le plan X–Z. |
| A et C | Un axe d'inclinaison autour de X porté par, ou portant, une rotation autour de Z : une table à tourillons, ou une tête. |
| B et C | Identique, avec l'inclinaison autour de Y. |

Ensuite :

- **Porté par** : {{ui:La table (la pièce tourne)}} ou {{ui:La tête (l'outil tourne)}}. Une table tourne dans le sens inverse pour amener la même face sous l'outil ; le signe de chaque angle découle donc de ce choix.
- **La commande garde la pointe de l'outil sur la trajectoire (TCP)** : activé, X Y Z dans le programme sont la pointe de l'outil dans les coordonnées propres à la pièce, et la commande fait le reste (les posts intégrés de type Fanuc et LinuxCNC écrivent `G43.4` pour la longueur d'outil). Désactivé, sur une machine à table, PartCraft écrit X Y Z tels que la table tournante porte la pièce, autour du **centre de rotation** que vous donnez (en coordonnées de travail ; 0, 0, 0 lorsque l'origine de travail est au centre). Une machine à tête exige le TCP activé : sans lui, le programme aurait besoin de la longueur de pivot de la machine, que PartCraft ne connaît pas.
- **Limite d'inclinaison** : jusqu'où va l'axe d'inclinaison.

Les machines diffèrent dans le sens qu'elles considèrent comme positif. Si un axe tourne dans le mauvais sens sur la vôtre, changez le signe dans une copie du post ([Post-processeurs modifiables](topic:post-processors)).

## Un outil incliné pour une opération ordinaire

Chaque opération de fraisage (face, poche, adaptative, contour, perçage, chanfrein, {{ui:Parallélisme}}, {{ui:À crête constante}}, {{ui:Ébauche 3D}}, {{ui:Reprise}}) possède une **Inclinaison de l'outil** et **Incliner vers** : la direction de l'outil pour cette seule opération, mesurée à partir de l'axe d'outil de la mise en place. C'est de l'usinage 3+2 : les axes rotatifs se placent sur une position et y restent pendant que trois axes coupent.

- Saisissez les deux angles, ou appuyez sur {{ui:Outil perpendiculaire à une face}} et cliquez sur une face plane : l'outil pointera droit vers elle.
- Sélectionnez les faces et arêtes de l'opération comme d'habitude. Ce qui compte comme fond ou comme trou est jugé le long de l'outil incliné.
- Le brut pour cette direction est la boîte qui contient le brut tourné ; hauteurs et dégagements sont donc sûrs de ce côté.

Dans le G-code, avant l'opération, l'outil remonte, les axes rotatifs tournent, et l'outil redescend au-dessus de son premier point. Sur une machine à table sans TCP, les arcs restent des arcs et les cycles de perçage fixes restent des cycles (le repère écrit n'est tourné qu'autour de Z). Avec le TCP dans un plan incliné, les arcs deviennent de courtes lignes et les cycles deviennent les déplacements qu'ils représentent.

La simulation du brut traite une direction inclinée **à part** : elle montre ce que cette opération coupe dans l'ensemble du brut vu de son côté, et y détecte les surcoupes, mais les coupes faites depuis d'autres directions ne sont pas reportées.

## Finition 5 axes

{{ui:Plus}} dans la barre d'outils de Fabrication liste cette opération et la suivante en haut de l'onglet **Opérations**.

{{ui:5 axes}} est la [passe de finition parallèle](topic:finish-3d) avec une **fraise boule qui s'incline pendant sa progression**. Une boule coupe avec une sphère, et la sphère est la même quel que soit le sens d'inclinaison de l'outil autour de son centre ; la boule suit donc exactement le parcours que donnerait la passe 3 axes, seule la direction de l'outil change :

- **Vers la surface** : 1 = perpendiculaire à la surface, 0 = vertical, toute valeur intermédiaire.
- **Inclinaison avant** : degrés dans le sens de la coupe, pour que ce ne soit pas le centre immobile de la boule qui coupe.
- **Inclinaison maximale** : l'outil ne s'incline jamais au-delà de cette valeur par rapport à l'axe de la mise en place.

Là où la queue toucherait le modèle, l'inclinaison est réduite jusqu'à dégagement, et l'opération indique en combien de points. Chaque passe est abordée et quittée par une remontée droite.

## Finition rotative (4e axe)

{{ui:Rotative}} sert pour une pièce maintenue le long de **X de travail** sur un axe rotatif. La pièce tourne et une fraise boule, toujours dirigée vers l'axe, suit sa surface :

- **Passes** : {{ui:Le long de l'axe}} (lignes le long de X, espacées d'un pas de rotation) ou {{ui:Autour de la pièce}} (anneaux, espacés d'un pas en X).
- **Axe en Y / Z** : position de l'axe. Vide signifie le milieu du brut. Sur une machine à table sans TCP, cela doit être le centre de rotation de la mise en place ; l'opération avertit si ce n'est pas le cas.
- **De / à X** et **De / à l'angle** : la partie de la longueur et de la rotation à usiner.

La hauteur de la boule au-dessus de l'axe en chaque point est la chute exacte d'une sphère sur le maillage de la pièce, vue de ce côté.

## Limites

- La finition 5 axes et rotative n'utilisent qu'une **fraise boule**. Il n'existe ni usinage de flanc (le côté de l'outil sur une paroi réglée), ni lignes de flux suivant les directions propres d'une surface, ni ébauche multi-axes, ni choix automatique de l'inclinaison pour éviter une collision.
- Les parcours 5 axes et rotatifs **ne passent pas par la simulation du brut**, qui est une carte des hauteurs et ne peut pas représenter une coupe inclinée.
- En finition 5 axes, la queue est contrôlée par rapport au modèle vu du dessus ; le porte-outil, la broche et la machine elle-même ne sont contrôlés nulle part.
- La finition rotative ne coupe que ce que l'outil peut voir en regardant l'axe.
- La finition 5 axes demande une minute ou plus de calcul sur une grande pièce : la queue est contrôlée en chaque point de chaque passe.
- Lorsque les axes rotatifs se déplacent avec les axes linéaires et que le TCP est désactivé, les posts intégrés écrivent l'avance en temps inverse (`G93`), puis reviennent à `G94`.
- Aucun code de plan de travail incliné (`G68.2` ou similaire) n'est écrit, et aucune limite propre à une machine, aucun déroulement ni zone de collision ne sont connus.
