---
title: La bibliothèque d'ingénierie
summary: Formules de manuel sous forme de scripts lisibles, en unités SI, chaque résultat avec sa source : écoulement dans les tuyaux et les canaux, transfert de chaleur et échangeurs, pièces sous pression, dynamique des gaz, propriétés de l'eau et de l'air, matériaux, et unités vérifiées. Ce à quoi chacune sert et où elle s'arrête.
keywords: ingénierie, bibliothèque, unités, Darcy-Weisbach, Colebrook, Reynolds, coefficient de frottement, Dittus-Boelter, Gnielinski, NTU, efficacité, LMTD, ailette, Barlow, Lamé, buse, isentropique, Mach, écoulement étranglé, eau, air, propriétés, matériau, sources
from: 786ef967
---

La bibliothèque d'ingénierie est un ensemble de scripts dans la bibliothèque de l'espace Script (`craftlib/eng`). Chaque script est une fonction que l'on peut lire du début à la fin, avec un en-tête qui donne sa **méthode**, ses **unités**, ses **limites**, ses **références** et un **contrôle** accompagné d'un résultat calculé à la main. Elles utilisent les unités SI partout et renvoient des grandeurs qui portent une **unité** et une **source**, si bien qu'une fiche de données peut indiquer d'où vient chaque valeur.

## Unités vérifiées

`to_si(10, 'bar', 'Pa')` convertit une valeur et refuse une unité qui mesure autre chose (une longueur là où une pression est attendue). `from_si`, `unit_convert(1, 'bar', 'psi')` et `unit_kind('W/(m K)')` (« conductivité thermique ») fonctionnent de la même façon. `temp_k(25, 'C')` et `temp_from_k` convertissent les températures, qui ont un décalage.

## Propriétés

- `fluid('water', T)` et `fluid('air', T, p)` : masse volumique, viscosité, conductivité, chaleur massique, nombre de Prandtl. Eau de 0 à 100 °C, air de 250 à 600 K ; hors de ces plages, le script s'arrête au lieu d'extrapoler.
- `material('ss304')` : module de Young, coefficient de Poisson, masse volumique, limite d'élasticité, conductivité, chaleur massique, dilatation : valeurs à température ambiante issues des mêmes fiches techniques que la simulation. Une conception réelle utilise les valeurs certifiées du fournisseur. Les courbes en fonction de la température ne sont pas encore disponibles.

## Écoulement dans les tuyaux et les canaux

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminaire, puis l'équation de Colebrook pour le régime turbulent ; la plage 2300 à 4000 n'a pas de formule fiable et le script le dit), `darcy_weisbach`, `minor_loss`, `pipe_flow` (tuyau rond, tout à la fois) et `rect_channel` (conduits rectangulaires laminaires par l'ajustement de Shah et London).

## Transfert de chaleur

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (choisit laminaire ou turbulent et nomme la corrélation), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` et `ntu_for` (les relations efficacité-NTU pour contre-courant, co-courant, calandre et tubes, courants croisés et un seul fluide dont la température varie), et `hx_size` (la valeur UA que demande une puissance donnée ; il indique ce qui est possible lorsque la puissance ne peut pas être atteinte).

## Pièces sous pression

`allowable_stress` (limite d'élasticité divisée par un coefficient de sécurité), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, selon le critère de contrainte circonférentielle ou de cisaillement) et `wall_sphere`. Ce sont des marges de manuel, **et non un calcul selon un code d'appareils sous pression** : pas de surépaisseur de corrosion, pas de coefficient d'efficacité des joints ni de coefficients du code.

## Dynamique des gaz

`isentropic` (les rapports à un nombre de Mach donné), `mach_from_area`, `choked_flow`, `throat_area` et `exit_mach`, pour un gaz parfait sans frottement, sans échange de chaleur ni chocs.

## Vérifier le résultat

`check_stress`, `check_thermal` et `check_flow` lancent les solveurs de contrainte, de conduction thermique et d'écoulement de PartCraft sur une pièce générée depuis le script, et relisent la contrainte et le déplacement maximaux, les températures et le flux de chaleur, et la perméabilité d'un réseau de canaux. Ils ne modifient rien dans les solveurs. Les contrôles de contrainte et de température utilisent des voxels : une face courbe devient un escalier, et la contrainte dans un angle rentrant vif ou sous une charge ponctuelle dépend de la taille du voxel.
