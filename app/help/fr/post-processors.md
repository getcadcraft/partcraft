---
title: Post-processeurs modifiables
summary: Un post est un court fichier texte qui transforme le parcours d'outil en G-code pour votre commande. Copiez l'un des posts intégrés, modifiez les lignes dont vous avez besoin (numéros de ligne, changement d'outil, déplacements de prise d'origine, code de fin), voyez le G-code qu'il écrit pendant que vous tapez, et conservez-le avec la pièce.
keywords: post, post-processeur, G-code, NC, GRBL, LinuxCNC, modifier le post, post personnalisé, cpost, changement d'outil, M6, G43, cycle fixe, numéros de ligne, modal, événement, variable
from: c78d0cae
---

Le même parcours d'outil doit être écrit différemment selon les commandes : numéros de ligne ou aucun, `M6` ou une pause, `G28` ou `G53`, `M30` ou `M2`. Un **post** est le court texte qui précise comment. Les trois posts intégrés de PartCraft (Fanuc-style, GRBL et LinuxCNC) sont écrits dans ce format ; un post à vous peut donc partir d'une copie de l'un d'eux.

Contrôlez le résultat dans le simulateur de votre machine avant l'usinage, et exécutez-le d'abord dans le vide au-dessus du brut. Les posts intégrés écrivent exactement ce qu'ils écrivaient avant l'existence de ce format (les tests comparent leur sortie octet par octet sur des centaines de programmes), mais rien ici n'a été validé sur votre machine, et un post que vous modifiez relève de votre propre validation.

## En créer un

Dans Fabrication, sous **Post-processeur** :

- {{ui:Modifier le post…}} sur une commande intégrée ouvre **votre propre copie** de celle-ci. Sur l'un de vos propres posts, il ouvre ce post.
- {{ui:Nouveau post…}} démarre à partir d'un petit post vierge contenant tous les événements.
- {{ui:Importer un fichier de post…}} lit un fichier texte `.cpost` (le fichier obtenu avec **Enregistrer sous forme de fichier…** dans l'éditeur).

L'éditeur affiche le texte, une ligne qui indique si le post se lit correctement (et quelle ligne est fausse), et le G-code que le post écrit, au fur et à mesure que vous tapez. **Aperçu avec** choisit un petit programme d'exemple qui exécute chaque événement, ou le programme propre à cette pièce. {{ui:Enregistrer}} conserve le post dans le fichier de la pièce (jusqu'à 20 posts) et le choisit comme commande. Les posts suivent la pièce ; pour utiliser l'un d'eux dans une autre pièce, enregistrez-le comme fichier et importez-le là-bas.

## À quoi ressemble un post

```
post mymill
name Ma fraiseuse (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Les lignes commençant par `//` et les lignes vides sont ignorées. En haut figurent les réglages ; puis un bloc `on <event>` par événement, fermé par `end`. Un événement omis n'écrit rien.

| Réglage | Signification |
|---|---|
| `post <id>` | L'identifiant du post : lettres, chiffres, `-` et `_` |
| `name <text>` | Ce qu'affiche la liste des commandes |
| `extension <ext>` | L'extension du fichier : nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … sur chaque ligne `emit`, ou aucun |
| `decimal-point yes` / `no` | `10.` au lieu de `10` (les commentaires ne portent jamais le point) |
| `canned-cycles yes` / `no` | `no` : les trous sont écrits comme les déplacements G0/G1 qu'ils représentent |
| `modal <group> <words>` | Mots d'un groupe (`modal motion G0 G1 G2 G3`) écrits seulement lorsqu'ils changent |

## Événements

Ils s'exécutent dans cet ordre pour un programme : `start` ; puis pour chaque opération `operation`, `tool-change` (au changement d'outil), `spindle` (au changement de vitesse), `approach` (le déplacement jusqu'au premier point, avant le premier rapide), `coolant-on`, puis ses déplacements en `rapid`, `feed` et `arc`, et chaque cycle fixe en `cycle-start`, un `cycle-hole` par trou et `cycle-end` ; enfin `end`.

D'autres événements existent, pour ce qui dépasse trois axes (un post sans l'événement refuse un tel programme et nomme l'événement qui lui manque) :

| Événement | Quand | Ses variables |
|---|---|---|
| `index` | Avant une opération dont la direction d'outil diffère de la précédente, et avant la première opération sur une machine à axes rotatifs | `rot.a`, `rot.b`, `rot.c` (les positions à atteindre ; vide pour un axe que la machine n'a pas), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Les déplacements d'une opération dont les axes rotatifs bougent pendant la coupe | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (oui lorsque l'avance doit être en temps inverse), `invf` (1/minutes) |
| `rotary-end` | Après une telle opération | |
| `probe-move` | Un déplacement qui s'arrête lorsque le palpeur se déclenche | `x`, `y`, `z`, `f`, `probe.n` (1 à 4), `probe.axis` (x, y ou z), `probe.k` (1, 2 ou 3) |
| `probe-set` | Après les touches d'un cycle de palpage | `probe.kind` (`"z"`, `"x"`, `"y"` ou `centre`), `probe.action` (`set` ou `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Un déplacement de filetage sur un tour | `x`, `z`, `thread.lead` |

Pour chaque événement également : `kin` (none, a, b, ac, bc), `rotary` et `tcp` (yes ou no, selon la machine de la mise en place), `pivot.x`, `pivot.y`, `pivot.z`, les `op.tilt` et `op.turn` de l'opération, et sur un tour `spin.mode` (css ou rpm), `spin.css`, `spin.max` et `tool.nose`. Un mot lettre dont la valeur est vide, comme `A{rot.a}` sur une machine sans axe A, est omis de la ligne. Comparez x, y et z en tant que texte, entre guillemets (`if probe.kind == "z"`) : sans guillemets, ce sont les coordonnées du déplacement.

Deux lignes de plus en haut d'un post en font un post de tour : `machine lathe` (il n'écrit alors que X et Z, et refuse les parcours de fraisage comme un post de fraisage refuse les parcours de tournage) et `lathe-x diameter` ou `lathe-x radius`.

Chaque événement peut utiliser les variables de son propre type de déplacement, écrites `{name}` : le programme (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), le brut (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), l'outil (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), l'opération (`op.name`, `op.type`), `rpm`, le point d'un déplacement (`x`, `y`, `z`, `f`, et `moved` : vrai lorsqu'un axe a changé), les arcs (`arc.g` 2 ou 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) et les trous (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). La liste **Événements et variables** de l'éditeur indique quel événement voit quoi. États que vous pouvez lire et définir : `cool`, `offset`, et `at.x`, `at.y`, `at.z`, `at.f` (les dernières valeurs écrites).

## Instructions

| Instruction | Ce qu'elle fait |
|---|---|
| `raw TEXT` | Une ligne exactement telle que saisie (sans numéro de ligne) |
| `comment TEXT` | `(TEXT)`, sans caractères non ASCII ni crochets |
| `emit WORD WORD …` | Une ligne de mots ; les mots vides sont omis ; sans mot, pas de ligne |
| `word WORD …` | Ajoute des mots à la ligne en cours ; un `emit` seul la termine |
| `if EXPR` … `else` … `end` | Conditions : `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, sinon b) |
| `for tool in tools` … `end` | Une fois pour chaque outil utilisé par le programme |
| `set NAME EXPR` | Mémorise une valeur (`set offset tool.number`) |
| `reset NAME …` | Oublie les mots modaux (un groupe, une lettre d'adresse comme `Z`, ou `at.z`) |
| `do rapid X Y Z` | Exécute l'événement `rapid` pour un point |

Un mot est un texte saisi avec des trous `{variable|filtre}`. Les filtres sont `upper`, `lower`, `pad:N` (remplissage de zéros), `cut:N` (N premiers caractères), `safe` (ASCII compatible avec les commentaires) et `int`. Un mot se terminant par `~` est **modal** : il n'est écrit que s'il diffère de ce qui a été écrit en dernier (`G1~`, `X{x}~`). Un mot se terminant par `~!` est écrit à chaque fois et reste mémorisé. Un nom qui n'est pas une variable est du texte brut (`G81`, `mist`). Les nombres sont arrondis à 0.001 mm et écrits sans zéros de fin.

## Ce qu'un post ne peut pas faire

Il décide seulement de la manière dont les déplacements sont écrits, rien de plus. Il ne peut pas modifier un parcours d'outil, réordonner les opérations, découper un arc, ajouter un axe, connaître la course ou la cinématique de votre machine, ni faire de calcul sur les coordonnées (il n'existe pas de `+`). Les positions rotatives viennent elles-mêmes de la machine décrite dans la mise en place, et non du post : un post peut changer leur signe ou leurs lettres, pas la cinématique. Les cycles de durée de vie d'outil et de sous-programmes ne sont pas disponibles. Un fichier de post de type `.cps` provenant d'un autre programme ne peut pas être chargé : c'est un format différent, plus simple.
