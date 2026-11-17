---
title: Post-processeurs modifiables
summary: Un post est un court fichier texte qui transforme le parcours d'outil en G-code pour votre commande. Copiez l'un des posts intégrés, modifiez les lignes voulues (numéros de ligne, changement d'outil, déplacements de retour, code de fin), voyez le G-code qu'il écrit pendant que vous tapez, et conservez-le avec la pièce.
keywords: post, post-processeur, postprocesseur, G-code, NC, GRBL, LinuxCNC, modifier le post, post personnalisé, cpost, changement d'outil, M6, G43, cycle fixe, numéros de ligne, modal, événement, variable
from: 36ab8a38
---

Un même parcours d'outil doit être écrit différemment selon les commandes : numéros de ligne ou aucun, `M6` ou une pause, `G28` ou `G53`, `M30` ou `M2`. Un **post** est le court texte qui précise la manière. Les trois posts intégrés de PartCraft (de type Fanuc, GRBL et LinuxCNC) sont écrits dans ce format, si bien qu'un post personnel peut partir d'une copie de l'un d'eux.

Vérifiez le résultat dans le simulateur de votre machine avant l'usinage, et faites d'abord tourner le programme à vide, au-dessus de la matière. Les posts intégrés écrivent exactement ce qu'ils écrivaient avant l'existence de ce format (les tests comparent leur sortie octet par octet sur des centaines de programmes), mais rien ici n'a été vérifié sur votre machine, et il vous revient de valider un post que vous modifiez.

## Créer un post

Dans Fabrication, sous **Post** :

- {{ui:Modifier le post…}} sur une commande intégrée ouvre **votre propre copie** de celle-ci. Sur l'un de vos posts, il ouvre ce post.
- {{ui:Nouveau post…}} part d'un post vierge et court, qui contient tous les événements.
- {{ui:Importer un fichier de post…}} lit un fichier texte `.cpost` (le fichier obtenu avec **Enregistrer sous forme de fichier…** dans l'éditeur).

L'éditeur affiche le texte, une ligne indiquant s'il est lisible (et quelle ligne est fausse), et le G-code que le post écrit, au fil de votre saisie. **Aperçu avec** choisit un petit programme d'exemple qui déclenche chaque événement, ou le programme propre à cette pièce. {{ui:Enregistrer}} conserve le post dans le fichier de la pièce (jusqu'à 20 posts) et le choisit comme commande. Les posts suivent la pièce ; pour en utiliser un dans une autre pièce, enregistrez-le comme fichier, puis importez-le là-bas.

## À quoi ressemble un post

```
post mymill
name My mill (.nc)
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

Les lignes commençant par `//` et les lignes vides sont ignorées. En tête viennent les réglages ; puis un bloc `on <événement>` pour chaque événement, fermé par `end`. Un événement omis n'écrit rien.

| Réglage | Signification |
|---|---|
| `post <id>` | L'identifiant du post : lettres, chiffres, `-` et `_` |
| `name <texte>` | Ce qu'affiche la liste des commandes |
| `extension <ext>` | L'extension du fichier : nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … sur chaque ligne `emit`, ou aucun |
| `decimal-point yes` / `no` | `10.` au lieu de `10` (les commentaires ne portent jamais le point) |
| `canned-cycles yes` / `no` | `no` : les trous sont écrits comme les déplacements G0/G1 qu'ils représentent |
| `modal <groupe> <mots>` | Mots d'un groupe (`modal motion G0 G1 G2 G3`) écrits seulement lorsqu'ils changent |

## Événements

Ils s'exécutent dans cet ordre pour un programme : `start` ; puis pour chaque opération `operation`, `tool-change` (quand l'outil change), `spindle` (quand la vitesse change), `approach` (le déplacement jusqu'au premier point, avant le premier déplacement rapide), `coolant-on`, puis ses déplacements en `rapid`, `feed` et `arc`, et chaque cycle fixe en `cycle-start`, un `cycle-hole` par trou et `cycle-end` ; enfin `end`.

Chaque événement peut utiliser les variables de son propre type de déplacement, écrites `{name}` : le programme (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), la matière (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), l'outil (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), l'opération (`op.name`, `op.type`), `rpm`, le point d'un déplacement (`x`, `y`, `z`, `f`, et `moved` : vrai lorsqu'un axe a changé), les arcs (`arc.g` 2 ou 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) et les trous (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). La liste **Événements et variables** de l'éditeur indique quel événement voit quoi. États que vous pouvez lire et définir : `cool`, `offset`, et `at.x`, `at.y`, `at.z`, `at.f` (les dernières valeurs écrites).

## Instructions

| Instruction | Rôle |
|---|---|
| `raw TEXT` | Une ligne exactement telle que saisie (sans numéro de ligne) |
| `comment TEXT` | `(TEXT)`, avec les caractères non ASCII et les crochets retirés |
| `emit WORD WORD …` | Une ligne de mots ; les mots qui deviennent vides sont omis ; sans mot, pas de ligne |
| `word WORD …` | Ajoute des mots à la ligne en cours de construction ; un `emit` seul la termine |
| `if EXPR` … `else` … `end` | Conditions : `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, sinon b) |
| `for tool in tools` … `end` | Une fois pour chaque outil utilisé par le programme |
| `set NAME EXPR` | Mémorise une valeur (`set offset tool.number`) |
| `reset NAME …` | Oublie les mots modaux (un groupe, une lettre d'adresse comme `Z`, ou `at.z`) |
| `do rapid X Y Z` | Exécute l'événement `rapid` pour un point |

Un mot est un texte saisi avec des trous `{variable|filter}`. Les filtres sont `upper`, `lower`, `pad:N` (remplissage de zéros), `cut:N` (N premiers caractères), `safe` (ASCII compatible avec les commentaires) et `int`. Un mot se terminant par `~` est **modal** : il n'est écrit que s'il diffère de ce qui a été écrit en dernier (`G1~`, `X{x}~`). Un mot se terminant par `~!` est écrit à chaque fois et reste mémorisé. Un nom qui n'est pas une variable est du texte simple (`G81`, `mist`). Les nombres sont arrondis à 0.001 mm et écrits sans zéros finaux.

## Ce qu'un post ne peut pas faire

Il décide seulement de la manière d'écrire les déplacements, rien de plus. Il ne peut pas modifier un parcours d'outil, réordonner les opérations, couper un arc, ajouter un axe, connaître les courses ou la cinématique de votre machine, ni effectuer de calculs sur les coordonnées (il n'existe pas de `+`). Le palpage, les cycles de durée de vie d'outil et de sous-programmes, la sortie des 4e et 5e axes et les codes de tour ne sont pas encore disponibles. Un fichier de post de type `.cps` provenant d'un autre logiciel ne peut pas être chargé : c'est un format différent, plus simple.
