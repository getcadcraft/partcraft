---
title: Scripts en Lua
summary: Écrire des scripts de l'espace de travail Script en Lua 5.4 : la table cs des fonctions intégrées, les tableaux comme valeurs avec indexation et arithmétique, l'espace de travail partagé ws, l'affichage et le tracé des résultats, et ce qui est désactivé.
keywords: Lua, Lua 5.4, script, langage, table cs, ws, espace de travail, userdata, tenseur, tableau, matrice, print, display, isolation
from: 82c668b3
---

Lua est le deuxième langage de l'[espace de travail Script](topic:craftscript). Choisissez **Lua** dans la zone de langage au-dessus de l'éditeur (un fichier `.lua` s'ouvre en Lua automatiquement). Lua et CraftScript partagent les mêmes variables et les mêmes fonctions intégrées : un script Lua peut donc utiliser ce qu'un script CraftScript a créé, et inversement.

## L'essentiel

```
-- toute fonction intégrée se trouve dans la table cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- indexé à partir de 1, comme CraftScript
print(K(1, 1), #K)             -- un élément ; le nombre d'éléments

-- l'espace de travail : les mêmes variables que voient tous les scripts
ws.total = K(1, 1) * 2
print(ws.total)

-- plusieurs résultats d'une même fonction
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<nom>(…)` appelle n'importe quelle fonction intégrée et renvoie son premier résultat ; `cs.call(nom, n, …)` renvoie `n` résultats.
- `cs.tensor({1, 2, 3})` crée une ligne, `cs.tensor({{1, 2}, {3, 4}})` une matrice.
- Les tableaux, matrices creuses, maillages et champs sont des valeurs dotées de méthodes : `t(i, j)` ou `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transposée), `t:totable()`. `+ - * / ^` ont le même sens que dans CraftScript (`*` est le produit matriciel) ; `t:times(u)` multiplie élément par élément.
- Un nombre qui est un tableau 1×1 arrive sous forme de simple nombre Lua.
- `ws.name` lit et écrit l'espace de travail partagé. Les variables globales que votre script laisse derrière lui y sont aussi enregistrées à la fin de son exécution.
- `print(…)` écrit dans la console ; `cs.show(f)`, `cs.plot(y)` et les autres fonctions d'affichage fonctionnent comme dans CraftScript.

## Appeler la bibliothèque d'analyse

Les fonctions de la bibliothèque d'analyse (onglet Bibliothèque) et les fonctions CraftScript définies par les scripts de votre pièce sont aussi atteintes par `cs` :

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- deux sorties
```

Elles sont trouvées avant le début du script : écrivez donc le nom dans le script, sous la forme `cs.static_tet(` ou `cs.call('static_tet', …)`. Un nom construit pendant l'exécution du script n'atteint que les fonctions intégrées. Une structure créée avec `cs.struct({ … })` est une structure CraftScript, et une liste Lua de ces structures (`{ cs.struct(…), … }`) est une cellule, ce qu'attendent les réglages de la bibliothèque. Si quelque chose ne va pas dans une fonction de bibliothèque, le message nomme la fonction et sa ligne, et indique la ligne de votre script qui l'a appelée.

## Désactivé

Les scripts ne peuvent pas accéder aux fichiers, au réseau ni à la page : `io`, `os` (sauf l'horloge), `require`, `dofile`, `loadfile` et `debug` sont supprimés. Utilisez Ouvrir de l'espace de travail Script et les variables pour importer des données. Le budget d'étapes et Arrêter fonctionnent comme pour CraftScript.
