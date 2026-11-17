---
title: Scripts en Python
summary: Écrire des scripts Python 3 de l'espace de travail Script : l'objet cs des fonctions intégrées, les tableaux comme valeurs de type numpy à indexation à partir de 0, l'espace de travail partagé, l'affichage, ce qui n'est pas encore disponible, et comment Python est isolé comme CraftScript et Lua.
keywords: Python, Python 3, CPython, WebAssembly, isolé, sûr, script, langage, cs, ws, espace de travail, numpy, tableau, matrice, indexation, print, display, confiance
from: 66eab56d
---

Python est le troisième langage de l'[espace de travail Script](topic:craftscript). Choisissez **Python** dans la zone de langage au-dessus de l'éditeur (un fichier `.py` s'ouvre en Python automatiquement). Python, Lua et CraftScript partagent les mêmes variables et les mêmes fonctions intégrées : un script Python peut donc utiliser ce qu'un script CraftScript a créé, et inversement.

La première exécution Python d'une visite charge Python lui-même (CPython 3.14, environ 7 Mo) depuis ce site, ce qui prend quelques secondes. Python ne fait pas encore partie de {{ui:Enregistrer pour le hors ligne}} : exécutez donc d'abord un script Python en ligne.

## Python est isolé

Les scripts Python sont isolés comme les scripts CraftScript et Lua : ils accèdent à la pièce, aux variables et aux fonctions intégrées, et à rien d'autre. Chaque exécution est un Python neuf dans son propre environnement isolé, avec une petite arborescence de fichiers en mémoire (sa bibliothèque standard et un dossier `/tmp` qui disparaît après l'exécution). Il ne peut atteindre ni le réseau, ni vos fichiers, ni le reste de la page, dans le navigateur comme en ligne de commande. Un script venant d'un tiers peut tout de même consommer beaucoup de temps ou de mémoire : {{ui:Arrêter}} y met fin.

## L'essentiel

```
A = cs.magic(3)              # chaque fonction intégrée est cs.<nom>
B = A @ A.T                  # @ est le produit matriciel, .T la transposée
C = A * 2 + 1                # + - * / ** sont élément par élément, comme dans numpy
print(A[0, 1], A[-1, -1])    # à partir de 0 ; négatif compte depuis la fin
row = A[1]                   # un seul indice sur une matrice : une ligne
big = A[A > 4]               # un masque logique sélectionne des éléments
A[0, 0] = -5                 # affectation dans un tableau
V, D = cs.call('eig', 2, A)  # plusieurs résultats : cs.call(nom, combien, …)
```

- Un tableau 1 × 1 arrive sous forme de nombre simple ; les autres tableaux, matrices creuses, maillages, champs et modèles sont des **valeurs**.
- Une valeur possède `shape` (un tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (ses lignes), et `float()`, `int()` et `bool()` pour un seul élément.
- Les comparaisons (`<`, `==`, …) sont élément par élément, comme dans numpy : elles donnent une valeur logique.
- Les listes de nombres passées à une fonction intégrée deviennent des tableaux : `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` crée une matrice.
- Un dictionnaire devient une structure, et une liste d'éléments hétérogènes une cellule, et inversement.

Chaque variable globale que votre script crée (un nombre, une valeur, un dictionnaire, une liste…) est enregistrée dans l'onglet **Variables** à la fin de l'exécution, même après une erreur. Les noms commençant par `_`, les fonctions, les classes et les modules restent dans Python. `ws.name` lit ou définit directement une variable, et `ws_names()` les liste.

`print(…)` écrit dans la console. `display(…)` (ou `cs.display`) affiche un maillage, un champ ou un tracé, comme dans CraftScript.

## Appeler la bibliothèque d'analyse

Les fonctions de la bibliothèque s'appellent comme les fonctions intégrées : `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Écrivez le nom dans le script tel quel : PartCraft trouve les fonctions de bibliothèque utilisées par un script avant de l'exécuter.

## Pas encore disponible

- numpy, scipy et autres paquets : seule la bibliothèque standard de Python (`math`, `json`, `itertools`, `decimal`, `statistics`…) est là, sans ses parties fenêtres, terminal et base de données (`tkinter`, `curses`, `sqlite3`).
- Sockets et tout ce qui atteindrait l'extérieur : Python n'a pas accès au réseau ici.
- `time.sleep` revient immédiatement.
- Le repliement dans l'éditeur, et l'appel d'une fonction Python depuis un script CraftScript.
- Une exécution vérifie le budget d'instructions et Arrêter toutes les 1000 lignes ; un long calcul à l'intérieur d'une fonction intégrée se termine d'abord.
