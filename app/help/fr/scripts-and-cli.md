---
title: Scripts et ligne de commande
summary: Le format de script PartCraft (.pcscript) qui écrit une pièce entière sous forme de texte lisible, et l'outil en ligne de commande partcraft qui construit, modifie, restaure et vérifie les pièces sans écran.
keywords: script, pcscript, texte, ligne de commande, cli, terminal, traitement par lots, automatiser, vérifier, lint, construire, exporter, contrôle de version, diff, script paramétrique
from: c56df222
---

Une modélisation soignée relève davantage de la rigueur que des boutons. Une pièce écrite en texte peut être lue, relue, comparée ligne par ligne et reconstruite par un script. PartCraft fonctionne dans les deux sens : toute pièce peut être écrite sous forme de script, et un script construit la pièce.

## Dans l'application

Dans l'onglet {{ui:Paramètres}}, sous **Script** :

- {{ui:Enregistrer en script}} télécharge la pièce ouverte sous forme de `<nom>.pcscript`.
- {{ui:Ouvrir un script}} construit une pièce à partir d'un fichier `.pcscript`. Une erreur est signalée avec son numéro de ligne, et rien n'est remplacé.

## Le format de script

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Les règles :

- Une ligne en bordure gauche commence une instruction : `pcscript`, `part`, `param`, un type de fonction (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` et les types plus récents) suivi de son nom, ou `rollback <fonction>`.
- Les lignes indentées sont les réglages de l'instruction qui précède. Un réglage seul (`through`, `reverse`, `suppressed`) signifie oui.
- Un réglage numérique est un nombre, ou `=` suivi d'une expression, ce qui crée une équation : `depth = thick`.
- Dans une esquisse : `on` désigne le plan (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`) ; la géométrie s'écrit `point <nom> x, y`, `line <nom> <point> <point>`, `circle <nom> <centre> <rayon>`, `arc <nom> <centre> <début> <fin>` (sens antihoraire) ou `spline <nom> fit|control <points>` ; les relations sont leur type et les noms qu'elles relient (`O` est l'origine) ; une cote se termine par sa valeur ou par `= expression`.
- Les réglages facultatifs d'une ligne de géométrie ou de relation se placent entre crochets à la fin, séparés par `;` : `[construction]`, `[side -1; label 5, 3]`.
- `#` commence un commentaire (en début de ligne ou après un espace). Les noms comportant des espaces se mettent entre « guillemets doubles ».
- Les identifiants de fonction sont numérotés à partir de f1, dans l'ordre d'écriture. Les références d'arêtes et de faces les utilisent, par exemple `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Les réglages que le format n'a pas de mot pour écrire s'écrivent `json` suivi d'une valeur ; ils sont relus tels quels.

Enregistré depuis l'application, le script contient tous les réglages : il s'ouvre donc comme la même pièce. Un solide STEP importé est écrit dans le script depuis l'application, et dans un fichier `.step` séparé, nommé par `step-file`, depuis la ligne de commande.

## L'outil en ligne de commande

L'outil fonctionne sur un ordinateur doté de Node.js 24, à partir d'une copie du code source de CadCraft : `node tools/partcraft-cli/partcraft.mjs <commande>`. C'est un outil pour développeurs qui utilise les mêmes modules que l'application. Les pièces sont des fichiers `.partcraft.json` ou des scripts `.pcscript`.

| Commande | Ce qu'elle fait |
|---|---|
| `info <part>` | Fonctions, paramètres, barre de retour arrière, volume et dimensions du solide construit |
| `params <part>` | Chaque paramètre et équation avec sa valeur |
| `set <part> width=150 Base.depth==thick` | En avant : modifie des paramètres, lie des nombres (`==` ou une expression), règle des nombres simples |
| `drive <part> Base.depth=12` | En arrière : résout le paramètre qui pilote une cote pilotée (`--prefer width` en choisit un) |
| `build <part> --out x.step` | Écrit `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` ou une macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Un fichier par ligne du tableau de cotes |
| `variants <part> --out-dir d` ou `--zip f.zip` | Chaque configuration en STEP, IFC, DWG et aperçu, un tableau des variantes et un élément de bibliothèque (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`) ; voir [Créer un lot de variantes](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Script vers pièce |
| `to-script <part> -o part.pcscript` | Pièce vers script |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Déplace la barre de retour arrière dans le fichier |
| `check <part> [--strict]` | La vérification de rigueur (ci-dessous) |

`build` accepte aussi `--set name=value` (pour cette seule construction) et `--upto <feature>`. Chaque commande accepte `--json`. Codes de sortie : 0 tout va bien, 1 un problème a été détecté, 2 la commande a été mal saisie. Un script n'est jamais réécrit sur place : utilisez `-o` pour enregistrer une copie modifiée.

## La vérification

`check` signale ce qui rend une pièce difficile à modifier plus tard :

| Constat | Compté comme |
|---|---|
| Une esquisse surdéfinie (relations contradictoires ou répétées) | erreur |
| Une fonction qui ne se construit pas | erreur |
| Un paramètre ou une équation en erreur, ou des paramètres qui dépendent les uns des autres | erreur |
| Une esquisse sous-définie, avec ses degrés de liberté | avertissement |
| Des nombres saisis directement dans les fonctions et les cotes qu'aucun paramètre ne pilote | avertissement |
| Un paramètre que rien n'utilise | avertissement |
| Une fonction supprimée ; la barre de retour arrière n'est pas à la fin | avertissement |

`--strict` transforme chaque avertissement en erreur, afin qu'un script de construction puisse refuser une pièce qui n'est pas entièrement pilotée.

:::note
La macro de sortie `.swb` est destinée au logiciel de modélisation de pièces qu'utilise la plupart des ateliers : exécutée dans ce logiciel, elle construit la pièce là-bas. Elle n'a pas été exécutée dans ce logiciel ici (il n'est pas disponible sur nos serveurs) : considérez-la comme non testée.
:::
