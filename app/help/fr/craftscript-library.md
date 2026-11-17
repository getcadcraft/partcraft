---
title: La bibliothèque d'analyse
summary: La bibliothèque de scripts d'analyse lisibles dans l'espace de travail Script : contenu de chaque groupe, ouverture d'une fonction en lecture seule, son en-tête avec méthode, références et vérification, création de votre propre copie, et reprise de la fonction de bibliothèque par la copie.
keywords: bibliothèque, craftlib, analyse, électroaimant, statique, modal, thermique, optimisation topologique, top88, SIMP, électromagnétisme, électrostatique, magnétostatique, fluide, Boltzmann sur réseau, LBM, maillage, voxel, tétraèdres, références, vérification, copie, ombre
from: bf993859
---

La bibliothèque d'analyse est un ensemble de scripts, chacun étant une fonction que vous pouvez lire du début à la fin : comment la matrice de rigidité est assemblée, où vont les conditions aux limites, quel solveur s'exécute, comment les résultats sont calculés. Rien n'y est caché dans une boîte noire ; seules les boucles internes rapides (matrices d'éléments, solveurs creux, maillage) sont intégrées.

## Commencer par un exemple

Le groupe **Exemples** contient cinq courts scripts qui utilisent la bibliothèque de bout en bout. Cliquez sur l'un d'eux, appuyez sur {{ui:Ouvrir (lecture seule)}}, puis sur {{key:F5}} : chacun vide la vue, affiche un résultat dans la zone de dessin et un tracé dans les sous-affichages.

| Exemple | Ce qu'il montre |
|---|---|
| Contrainte en porte-à-faux | Une barre d'acier de 100 × 10 × 10 mm sous une charge de 100 N en bout : contrainte de von Mises sur la barre déformée, et flèche en bout comparée à la théorie des poutres pour quatre tailles d'éléments (tracée) |
| Optimisation topologique MBB | La classique optimisation topologique 60 × 20 : la formation de la pièce, la chute de la complaisance, la disposition finale (94 itérations, complaisance 203.19) |
| Champ d'un condensateur | Deux plaques de 4 mm de large, espacées de 1 mm : potentiel et champ, la capacité avec effets de bord comparée à la valeur idéale et à la formule de Palmer |
| Écoulement en canal | Écoulement Boltzmann sur réseau autour d'un plot dans un canal : le champ de vitesse et l'historique de convergence |
| Électroaimant | Un noyau de fer en C avec un entrefer et une bobine : la densité de flux, le champ dans l'entrefer comparé à la formule du circuit magnétique, l'inductance et l'attraction à travers l'entrefer. Détaillé dans [Champs magnétiques en 2D](topic:magnetic-fields-2d) |
| Aimant permanent | Le même noyau avec un aimant permanent à la place de la bobine : le point de fonctionnement de l'aimant, le champ dans l'entrefer comparé au circuit magnétique, la fuite de flux, l'attraction. Dans [Champs magnétiques en 2D](topic:magnetic-fields-2d#permanent-magnets) |

## Groupes

| Groupe | Fonctions | Ce qu'elles font |
|---|---|---|
| Maillage | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Boîtes et cylindres en hexaèdres, cubes ou tétraèdres ; cubes ou tétraèdres de tout modèle (la pièce, un corps, un STL chargé) ; volumes et qualité des éléments ; sélection de nœuds sur un plan ou une face |
| Contrainte statique | `static_voxel`, `static_tet` | Contrainte statique linéaire sur cubes ou sur tétraèdres à 10 nœuds : déplacements, contraintes, von Mises, réactions |
| Portiques | `frame3d` | Portiques 3D de poutres, poteaux et contreventements par la méthode de rigidité directe : relâchements d'extrémités, appuis et ressorts, charges le long des barres ; déplacements, réactions, efforts d'extrémité des barres. {{ui:Exporter en CraftScript}} de DetailCraft et de BimCraft écrit un modèle complet pour cette fonction. Une aide à l'analyse, pas une vérification de code |
| Vibration | `modal_tet` | Fréquences propres et formes de modes |
| Chaleur | `heat_steady`, `heat_transient`, `heat_system` | Conduction permanente et transitoire avec températures imposées, apport de chaleur, génération, flux et convection |
| Optimisation topologique | `top88`, `top99`, `topopt3d` | Les codes 2D publiés de 88 et 99 lignes, et la même méthode en 3D sur cubes |
| Électromagnétisme | `poisson2d`, `magnetostatic2d` | Électrostatique 2D (potentiel, champ, capacité, charge) et magnétostatique (potentiel vecteur, densité de flux, aimants permanents) |
| Écoulement de fluide | `lbm2d`, `lbm3d` | Écoulement Boltzmann sur réseau : 2D écrit dans le script, 3D sur le noyau d'écoulement propre à PartCraft |

L'en-tête de chaque fonction donne ses arguments exacts. Les unités sont celles des études de PartCraft, sauf indication contraire dans l'en-tête : millimètres, newtons, mégapascals, tonnes par millimètre cube pour la masse volumique, watts et kelvins pour la chaleur. Les fonctions électromagnétiques et de Boltzmann sur réseau fonctionnent dans n'importe quelles unités cohérentes ; leurs en-têtes indiquent lesquelles.

## Comment la bibliothèque est vérifiée

L'en-tête de chaque fonction se termine par une **vérification** : un petit cas dont la réponse est connue. Les tests de PartCraft exécutent chacun d'eux, et lorsque PartCraft dispose de sa propre étude pour la même tâche, la réponse du script est comparée à cette étude sur le même maillage :

- la flèche en bout du porte-à-faux par rapport à la théorie des poutres (à 0.2 % près avec des cubes, 0.05 % avec des tétraèdres), et par rapport aux solveurs de l'espace de travail **Simulation** sur le même maillage (identiques sur de nombreux chiffres) ;
- la première fréquence du porte-à-faux par rapport à la théorie des poutres (0.24 % plus basse, comme attendu pour une poutre courte) et par rapport au solveur modal de **Simulation** ;
- chaleur : un mur plan chauffé, calculé exactement ; un petit corps qui refroidit selon la formule à capacité localisée ; la température d'une dalle qui s'éteint comme le prévoit la théorie ;
- optimisation topologique : `top88` reproduit les 94 itérations et la complaisance 203.1925 de l'article (et 218.8032 avec le filtre de densité) ; `topopt3d` aboutit à la même complaisance que l'espace de travail **Generative** avec les mêmes réglages ;
- la capacité d'un condensateur et le champ d'un long solénoïde par rapport à leurs valeurs de manuel, le champ d'entrefer de l'électroaimant par rapport à la formule du circuit magnétique, et les aimants permanents par rapport à un aimant rond dans l'air et à un aimant fermé par une armature de fer ;
- l'écoulement en canal par rapport au profil parabolique exact.

## Lire une fonction

1. Ouvrez l'onglet **Bibliothèque** du panneau de script.
2. Cliquez sur une fonction. Son en-tête indique : ce qu'elle calcule, la méthode, les unités, les hypothèses et limites, les **références** (ouvrage ou article, avec numéros d'équation) et une **vérification** — un petit cas à réponse connue que les propres tests de PartCraft exécutent.
3. {{ui:Ouvrir (lecture seule)}} ouvre le script entier dans un onglet à bordure en pointillés. Vous pouvez l'exécuter, sélectionner et exécuter des parties, mais non le modifier.

## Modifier une fonction

Appuyez sur {{ui:Faire une copie}} (ou sur **Faire une copie pour modifier** au-dessus d'un onglet en lecture seule). La copie est un script de votre pièce portant le même nom : elle est donc enregistrée avec la pièce, et **chaque appel à cette fonction utilise désormais votre copie** — l'éditeur l'indique au-dessus du script. Renommez la copie pour conserver les deux.

## Utiliser une fonction

Appelez une fonction de bibliothèque depuis n'importe quel script par son nom, comme une fonction intégrée :

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Les résultats reviennent sous forme de valeurs dans l'espace de travail ; les tracés et champs qu'elle affiche apparaissent dans la vue et les sous-affichages.

Une analyse statique de la pièce ouverte, par exemple, prend quelques lignes :

```
v = voxel_mesh(part(), 2);                   % cubes de 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % maintenir le bas
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N vers le bas sur le dessus
r = static_voxel(v, 210000, 0.3, bc);       % acier
```

`r` contient les déplacements, les contraintes et les réactions ; la contrainte de von Mises est tracée sur la pièce déformée. Pour les pièces courbes, utilisez `tet_mesh` et `static_tet`, qui peuvent aussi charger et maintenir des faces entières (`face_nodes`).

:::note
Les fonctions de la bibliothèque sont écrites en CraftScript, et un script Lua les appelle via `cs` comme les fonctions intégrées : `cs.static_tet(t, 200000, 0.3, bc)` (voir [Scripts en Lua](topic:craftscript-lua)). Chaque fonction résout un matériau et un cas de charge ; les en-têtes indiquent ce qui n'est pas couvert.
:::
