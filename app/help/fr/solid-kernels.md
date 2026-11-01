---
title: Le noyau maillage
summary: Cette version de PartCraft construit chaque pièce avec un noyau maillage qui s'exécute dans votre navigateur. Ce que cela implique pour les faces rondes, les volumes et les fichiers, comment voir qu'il fonctionne, et quelles fonctions attendent un noyau exact.
keywords: noyau, maillage, manifold, exact, b-rep, facetté, courbes, opencascade, occt, congé demande l'exact, pas encore disponible, hors ligne, webassembly
from: 68d32d16
---

Un noyau géométrique est le moteur qui transforme votre historique en solide. Cette version de PartCraft en a un : le **noyau maillage** (manifold-3d). Il s'exécute sur votre ordinateur sous forme d'un petit programme WebAssembly et il est prêt un instant après l'ouverture de l'application. Rien de votre pièce n'est envoyé nulle part.

| | Noyau maillage |
|---|---|
| Formes rondes | Facettes planes. **Courbes**, dans le panneau de la pièce, règle leur finesse |
| Volumes et aires | Ceux du solide facetté, un peu bas sur les pièces rondes |
| Esquisses, extrusion, découpe, révolution, trous, répétitions, symétrie, plans de référence | Oui |
| Congé et Chanfrein | Sur les arêtes droites entre faces planes ; les arrondis qui se rejoignent sont raccordés en onglet |
| Coque et Dépouille | La coque ouvre des faces planes (épaisseur de paroi exacte) ; la dépouille incline des faces planes |
| Exports | STL, 3MF, STEP (facetté), PDF et DXF du dessin |
| Vues du dessin | Dessinées à partir des facettes, coupes comprises |
| Faces et arêtes | Nommées et connues par leur type (plane, cylindre, cône, sphère, tore ; droite, cercle), tirées des esquisses : les espaces de travail Simulation, Génératif et Fabrication, la mesure, la sélection et le tableau des trous s'en servent |

La pastille près de l'extrémité droite de la barre d'état indique **Noyau maillage** pendant qu'il construit votre pièce.

## Ce qui attend un noyau exact

Un noyau exact (B-rep) conserve de vrais cercles, cylindres et cônes, et des congés lisses sur n'importe quelle arête ; les balayages, lissages, surfaces, tôleries, nervures, corps multiples, l'import STEP et l'export STEP exact reposent sur lui. Les versions de laboratoire précédentes de PartCraft utilisaient OpenCascade pour cela. Sa licence (la LGPL) ne convient pas à cette version, où chaque application est sous Apache-2.0 et n'utilise que des bibliothèques à licence permissive ; il n'est donc pas inclus. Rien ici n'a de date.

D'ici là, ces fonctions indiquent **Pas encore disponible** quand vous les choisissez : la barre d'état donne la raison, et les info-bulles de leurs boutons se terminent par « pas encore disponible (demande un noyau exact) ». [Ce qui n'est pas encore disponible](topic:not-built-yet) les liste chacune avec ce qu'il faut faire à la place.

Une pièce faite avec elles dans une version précédente s'ouvre toujours. Ces fonctions restent dans l'historique, marquées comme non construites (survolez-en une pour voir la raison), le reste de la pièce se construit, et l'enregistrement les conserve telles quelles.

## Faces rondes et Courbes

Le noyau maillage dessine un cercle comme un polygone. **Courbes**, dans le panneau de la pièce, règle le nombre de côtés d'un cercle complet ; plus de côtés donnent un aspect plus lisse et des mesures plus proches de la valeur vraie, et un temps de construction plus long. Les volumes, aires et distances de {{ui:Mesurer}} sont ceux de ce solide facetté : pour un trou ou un bossage, ils sont un peu plus petits que ceux de la forme ronde.

## En ligne et hors ligne

Le noyau maillage fait partie du téléchargement de l'application. Pour travailler sans connexion, enregistrez PartCraft pour l'utiliser hors ligne pendant que vous êtes en ligne : choisissez {{ui:Enregistrer pour le hors ligne}} dans la barre de l'application et attendez qu'elle indique **Prêt hors ligne**. Détails : [Travailler hors ligne](common:offline).
