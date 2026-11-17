---
title: Écrire votre propre analyse
summary: Construire une analyse sous forme de scripts dans l'espace de travail Script : mailler la pièce, assembler et résoudre, afficher le champ et un tracé de convergence, vérifier le résultat par un calcul à la main, et conserver les étapes sous forme de scripts séparés qui partagent des variables.
keywords: analyse propre, analyse personnalisée, script EF, élément fini, assemblage, rigidité, conditions aux limites, résolution, pcg, creux, champ, post-traitement, convergence, vérification, calcul à la main, contrôle, flux de travail
from: 0f471a8e
---

Une analyse dans l'espace de travail Script est un ensemble de quelques scripts courts qui se transmettent des variables. Partez d'une fonction de la [bibliothèque](topic:craftscript-library) proche de ce dont vous avez besoin, faites-en une copie et modifiez-la ; ou construisez-la pas à pas, comme ci-dessous.

## 1. Un maillage

```
model = part();                  % la pièce que vous modélisez, sous forme de modèle
m = tetmesh(model, 4);           % tétraèdres d'environ 4 mm
show(m)
```

Vérifiez le maillage dans la vue avant de continuer : {{key:F}} ajuste la vue, et l'icône {{ui:eye}} dans **Affichés** masque la pièce.

## 2. Assembler et résoudre

Écrivez la boucle sur les éléments dans le script (elle se lit comme le manuel), et laissez les parties lourdes aux fonctions intégrées : matrices d'éléments, assemblage creux à partir de triplets, et solveur du gradient conjugué avec un préconditionneur. Une fonction de bibliothèque telle que `static_tet` (une fois qu'elle figure dans la bibliothèque) est un exemple complet à copier.

## 3. Afficher le résultat

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % une valeur par nœud
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- La plage de la légende peut être saisie ou remise sur {{ui:Auto}}.
- Cliquez sur le maillage pour lire les valeurs en un nœud.
- Un tracé qui conserve le même `'id'` est mis à jour sur place : affichez et tracez donc dans votre boucle pour suivre la convergence.

## 4. Vérifiez-le

Comparez à quelque chose que vous connaissez : la flèche en bout d'un porte-à-faux par rapport à PL³/3EI, une plaque percée par rapport à son coefficient de concentration de contrainte, les réactions par rapport aux charges. Écrivez la vérification dans son propre script, pour qu'elle s'exécute à nouveau après chaque modification :

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('flèche %g mm, théorie des poutres %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Conservez-le

- Chaque étape peut avoir son propre onglet de script : elles partagent les variables, donc exécutez-les les unes après les autres.
- Les scripts sont enregistrés dans la pièce. Cochez **Enregistrer les variables avec la pièce** dans l'onglet Variables pour conserver aussi les résultats (jusqu'à 32 Mo).
- {{ui:Enregistrer}} dans le groupe Script télécharge un script pour le partager ; {{ui:Ouvrir}} en importe un.
