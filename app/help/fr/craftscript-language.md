---
title: Le langage CraftScript
summary: CraftScript en une page : matrices, plages et indexation, opérateurs, structures de contrôle, fonctions, structures et cellules, commentaires, echo, erreurs et budget d'étapes, et différences avec MATLAB.
keywords: CraftScript, langage, syntaxe, matrice, tableau, vecteur, tenseur, indice, end, deux-points, plage, opérateur, élément par élément, transposée, if, for, while, switch, try, catch, fonction, fonction anonyme, structure, cellule, commentaire, echo, point-virgule, MATLAB, Octave, port
from: d072b7d5
---

CraftScript est un langage matriciel écrit pour se lire comme MATLAB, de sorte que la plupart des codes numériques classiques (le code d'optimisation topologique de 88 lignes, par exemple) fonctionnent avec de petites modifications. Il s'exécute dans l'[espace de travail Script](topic:craftscript) et depuis la ligne de commande.

## Valeurs

| Type | Exemple | Remarques |
|---|---|---|
| Nombre, tableau | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Chaque nombre est un tableau (de taille 1×1). Les tableaux sont stockés colonne par colonne, jusqu'à 8 dimensions |
| Logique | `A > 2`, `true` | Tableaux de vrai/faux ; utilisables comme indices |
| Texte | `'beam'`, `"beam"` | |
| Matrice creuse | `sparse(i, j, v, n, n)` | Pour les matrices de rigidité |
| Maillage, champ, modèle | `hexGrid(…)`, `part()`, `load('part.stl')` | Ce que `show` dessine |
| Structure | `s.E = 210e3` | Champs nommés |
| Cellule | `c = {1, 'two', [3 4]}` | Une liste de valeurs quelconques |
| Descripteur de fonction | `f = @(x) x.^2` | |

## Tableaux et indexation

- Plages : `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- L'indexation commence à 1 : `A(2, 3)`, `v(end)`, `A(:, 1)` (une colonne entière), `A(:)` (tout en une seule colonne), `v(v > 0)` (indexation logique).
- Affecter au-delà de la fin agrandit le tableau, comme dans MATLAB : `v(10) = 1`.

## Opérateurs

- `+ - * / \ ^` sont des opérations matricielles (`A \ b` résout) ; `.* ./ .^` travaillent élément par élément. `'` transpose.
- Comparaisons `== ~= < <= > >=` ; logique `& | ~` (élément par élément) et `&& ||` (court-circuit).

## Structures de contrôle et fonctions

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

Les fonctions sont placées dans un script après ses commandes, ou dans leur propre onglet de script portant le nom de la fonction :

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Un nom est recherché dans cet ordre : une variable, un script de cette pièce portant ce nom, une fonction de bibliothèque, une fonction intégrée.

## Écho, commentaires, sortie

- Une instruction sans `;` affiche sa valeur ; `;` la garde silencieuse.
- `%` commence un commentaire ; `%{` et `%}` sur des lignes séparées mettent en commentaire les lignes entre elles.
- `disp(x)`, `fprintf('%g\n', x)` et `display(x)` affichent dans la console.

## Erreurs et limites

- Les erreurs décrivent le problème en termes simples et donnent la ligne (et la chaîne d'appels de fonctions).
- Chaque exécution dispose d'un budget d'étapes (options d'exécution dans le panneau) ; une boucle sans fin s'arrête avec un message, ou appuyez sur Arrêter.
- Les tableaux contiennent jusqu'à 134 millions de valeurs chacun.

## Différences avec MATLAB

- Les commandes de tracé placent leurs options dans l'appel : `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` et similaires sont acceptées et ne font rien.
- `input` et `keyboard` ne sont pas pris en charge : un script ne peut pas s'arrêter pour poser une question.
- Il n'existe aucune boîte à outils ; la [bibliothèque d'analyse](topic:craftscript-library) et les fonctions intégrées sont ce qui est disponible.
