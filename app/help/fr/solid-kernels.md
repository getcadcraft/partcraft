---
title: Le noyau maillage
summary: Cette version de PartCraft construit chaque pièce avec un noyau maillage qui s'exécute dans votre navigateur. Ce que cela implique pour les formes rondes, les volumes et les fichiers, comment vérifier qu'il fonctionne, et quelles fonctions attendent un noyau exact.
keywords: noyau, maillage, manifold, exact, b-rep, facettes, courbes, opencascade, occt, congé nécessite exact, pas encore disponible, hors ligne, webassembly
from: f931645c
---

Un noyau géométrique est le moteur qui transforme votre historique en solide. Cette version de PartCraft en embarque un : le **noyau maillage** (manifold-3d). Il s'exécute sur votre ordinateur sous forme de petit programme WebAssembly et est prêt quelques instants après l'ouverture de l'application. Rien de votre pièce n'est envoyé ailleurs.

| | Noyau maillage |
|---|---|
| Formes rondes | Facettes planes. **Courbes** dans le panneau de la pièce règle leur finesse |
| Volumes et surfaces | Du solide facetté, légèrement inférieurs sur les pièces rondes |
| Esquisses, extrusion, découpe, révolution, trous, répétitions, symétrie, plans de référence | Oui |
| Congé et chanfrein | Sur les arêtes droites entre faces planes ; les arrondis qui se rencontrent sont coupés en onglet |
| Coque et dépouille | La coque ouvre les faces planes (épaisseur de paroi exacte) ; la dépouille incline les faces planes |
| Exports | STL, 3MF, STEP (exact : faces rondes écrites sur leurs surfaces réelles, ou facettées), PDF de plan et DXF |
| Vues de dessin | Tracées à partir des facettes, vues en coupe comprises |
| Faces et arêtes | Nommées et identifiées par type (plane, cylindre, cône, sphère, tore ; droite, cercle), à partir des esquisses : les espaces Simulation, Génératif et Fabrication, Mesurer, la désignation et le tableau des trous les utilisent |

La pastille près de l'extrémité droite de la barre d'état affiche **Noyau maillage** pendant la construction de votre pièce.

## Ce qui attend un noyau exact

Un noyau exact (B-rep) conserve les vrais cercles, cylindres et cônes, ainsi que des congés lisses sur n'importe quelle arête. Les balayages, lissages, surfaces, tôlerie, nervures, plusieurs corps et l'import STEP avec faces courbes conservées exactes reposent sur lui. (L'export STEP exact n'attend pas ce noyau : le noyau maillage connaît la surface réelle de chaque face à partir de l'esquisse, et l'export les écrit.) Les versions de laboratoire antérieures de PartCraft utilisaient OpenCascade pour cela. Sa licence (LGPL) n'est pas compatible avec cette version, où chaque application est sous Apache-2.0 et n'utilise que des bibliothèques à licence permissive ; il n'est donc pas inclus. Aucune date n'est fixée.

Tant que ce n'est pas le cas, ces fonctions affichent **Pas encore disponible** lorsque vous les choisissez : la barre d'état en donne la raison, et les info-bulles de leurs boutons se terminent par « pas encore disponible (nécessite un noyau exact) ». [Ce qui n'est pas encore disponible](topic:not-built-yet) les liste chacune avec la solution de remplacement.

Une pièce réalisée avec ces fonctions dans une version antérieure s'ouvre toujours. Ces fonctions restent dans l'historique, marquées comme non disponibles (survolez-en une pour connaître la raison), le reste de la pièce se construit, et l'enregistrement les conserve telles quelles.

## Formes rondes et Courbes

Le noyau maillage dessine un cercle sous forme de polygone. **Courbes** dans le panneau de la pièce règle le nombre de côtés d'un cercle complet : plus il y en a, plus le résultat est lisse et proche de la valeur réelle, mais la construction est plus longue. Les volumes, surfaces et distances fournis par {{ui:Mesurer}} sont ceux du solide facetté : pour un trou ou un bossage, ils sont un peu inférieurs à ceux de la forme ronde.

## En ligne et hors ligne

Le noyau maillage fait partie du téléchargement de l'application. Pour travailler sans connexion, enregistrez PartCraft pour une utilisation hors ligne pendant que vous êtes en ligne : choisissez {{ui:Enregistrer pour le hors ligne}} dans la barre d'application et attendez qu'elle affiche **Prêt hors ligne**. Détails : [Travailler hors ligne](common:offline).
