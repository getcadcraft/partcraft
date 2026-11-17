---
title: Rédiger un générateur
summary: Un générateur est un script CraftScript, Lua ou Python comportant des lignes de commentaire qui déclarent ses entrées. Comment les entrées deviennent un formulaire, ce que le script doit laisser (corps, feuille, problèmes), un petit exemple complet et comment ouvrir votre script comme générateur.
keywords: générateur, rédiger, script, craftscript, en-tête, entrée, @input, @generator, corps, feuille, problèmes, to_body, mfg_check, fiche de données, exemple, treillis, champ
from: ed8a5ed8
---

Un générateur est un script ordinaire ([CraftScript](topic:craftscript), Lua ou Python) avec quelques lignes de commentaire en tête. PartCraft lit les commentaires et crée le formulaire ; votre script lit les entrées sous forme de variables déjà définies.

## L'en-tête

Placez-les dans des lignes de commentaire (`%` en CraftScript, `--` en Lua, `#` en Python) :

```
% @generator Échangeur thermique
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Débit massique"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Surface"
% @input solid: = true
% @input note: = "texte"
```

Une entrée est `name: unit = default`, suivie facultativement d'une plage `[min .. max]` (les valeurs sont retenues à l'intérieur), d'une liste de choix `{a, b, c}` et d'un libellé entre guillemets. L'unité ne sert qu'à étiqueter le formulaire : **la valeur arrive dans cette unité**. Un script qui veut le SI doit donc la convertir ; `to_si(value, 'kg/s', 'kg/s')` vérifie aussi que l'unité correspond bien à ce que vous pensez. Un nom est composé de lettres, de chiffres et de tirets bas ; `body`, `sheet` et `problems` sont réservés.

## Ce que le script laisse

| Variable | Contenu |
|---|---|
| `body` | **Obligatoire.** Un maillage de surface, en général obtenu avec `[body, info] = to_body(field, h)`. Il est réparé et vérifié à la fin de l'exécution. |
| `sheet` | Facultatif. Une structure : chaque champ est un nombre ou un texte, ou une structure avec `value`, `unit`, `ref` et `note`. Elle devient la fiche de données. |
| `problems` | Facultatif. La cellule `problems` de `mfg_check(field, 'sls', struct(), h)`, ou vos propres entrées. Elles sont envoyées aux vérifications et à la liste des Problèmes. |

## Un petit exemple complet

```
% Un cube creux avec une paroi.
% @generator Cube creux
% @input side: mm = 12 [4 .. 40] "Côté"
% @input wall: mm = 1.5 [0.5 .. 5] "Paroi"
% @input h: mm = 0.5 [0.25 .. 2] "Taille de voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'du maillage');
```

Il crée une boîte fermée, et la vérification signale son intérieur scellé comme une erreur pour un procédé poudre. Réglez la taille de voxel `h` à un tiers au plus de la paroi la plus fine souhaitée : en dessous d'environ trois voxels, une paroi n'est pas fiable.

## Champs

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (un solide de révolution à partir d'un profil), `tpms` (surfaces gyroïde, Schwarz P et diamant, avec une taille de cellule et une paroi pouvant varier dans la pièce), `lattice` et `lattice_beams`, `along` (un canal circulaire le long d'un chemin), les booléens `field_union`, `field_intersect`, `field_subtract`, la fusion lisse `field_blend`, ainsi que `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` donne la distance signée aux points (négative à l'intérieur), `field_voxel` fournit des voxels aux solveurs. [Champs](topic:fields) explique ce qu'ils sont.

Limites à connaître : une paroi en feuille plus épaisse qu'environ un quart de la cellule ferme les canaux ; un élément plus fin qu'environ trois voxels peut se pincer ; `along` raccorde des cônes arrondis, donc un rayon qui varie vite laisse un renflement (utilisez `field_revolve` pour un profil).

## Ouvrir votre script comme générateur

Dans l'espace de travail {{ui:Ingénieur}}, cliquez sur {{ui:Ouvrir}} et choisissez le fichier. Un script sans ligne `@generator` ni `@input` est refusé : il n'y aurait rien à définir. Le générateur est conservé dans ce navigateur (20 au maximum) et {{ui:Retirer}} le supprime. Un corps créé à partir de lui porte une copie du script, si bien que la pièce ne dépend pas de celui-ci.

Un fichier peut aussi contenir plusieurs générateurs : un lot JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
