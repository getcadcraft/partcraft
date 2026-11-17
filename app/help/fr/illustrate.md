---
title: Démarrer un manuel dans Illustrer
summary: L'espace de travail Illustrer crée des manuels à partir de votre conception : vues éclatées avec repères et liste de pièces, illustrations au trait pour les manuels, instructions pas à pas, animations et fichier 3D qu'un client peut ouvrir sans CAD. Un manuel est un fichier à part entière.
keywords: illustrer, manuel, illustration technique, documentation, vue éclatée, liste de pièces, instructions, partcraft-manual
from: e447e0ab
---

**Illustrer** est l'espace de travail pour les documents dont on a besoin autour d'une conception : vues éclatées avec repères et liste de pièces, illustrations au trait pour les manuels, instructions pas à pas, animations et fichier 3D qu'un client peut ouvrir sans CAD. Choisissez {{ui:Illustrate}} dans le sélecteur {{ui:Workspace}} au début de la barre d'outils.

Un **manuel** est un fichier à part entière (`<name>.partcraft-manual.json`). Il conserve une copie de la forme de chaque pièce, l'arborescence du produit et les propriétés des pièces, ainsi qu'un lien vers leur source ; vous pouvez donc travailler sur le manuel pendant que la conception évolue. Lorsque la conception change, [Mettre à jour depuis la conception](topic:illustrate-update) importe les modifications.

## Créer un manuel

Cliquez sur {{ui:New}} dans le groupe {{ui:Manual}}, puis :

- {{ui:From the open part}} : la pièce ouverte dans la Conception.
- {{ui:From the open assembly}} : affiché à la place lorsqu'un assemblage est ouvert ; ses pièces, leurs positions, numéros de pièce, matériaux et vues éclatées sont repris.
- {{ui:From an assembly file…}} : un fichier `.partcraft-asm.json` enregistré ; PartCraft construit d'abord ses pièces.
- {{ui:From another file…}} : glTF (.glb, .gltf), OBJ, STL ou 3MF. L'arborescence et les noms du fichier sont conservés, et les copies d'une même pièce (la même forme placée deux fois) deviennent une seule pièce avec une quantité. Les fichiers STL et OBJ n'indiquent pas leur unité : on vous la demande. Les fichiers STL sont lus avec Z vers le haut ; les fichiers glTF et 3MF indiquent le leur.

Tant qu'un manuel est ouvert, Illustrer affiche la copie propre du manuel ; ce qui est ouvert dans la Conception reste masqué jusqu'à votre retour dans la Conception.

## Enregistrer et ouvrir

{{ui:Save}} dans le groupe {{ui:Manual}} (ou {{key:Mod+S}}) enregistre le manuel ; {{ui:Open}} en ouvre un. Chaque modification dans Illustrer constitue une étape de l'historique propre du manuel : {{ui:Undo}} et {{ui:Redo}} agissent sur le manuel tant qu'Illustrer est ouvert.

## Pas encore disponible

- Les fichiers STEP ne s'ouvrent pas encore avec {{ui:From another file…}}. Ouvrez le STEP dans la Conception (il arrive comme corps solide : voir [Ouvrir un fichier STEP](topic:import-step)), puis créez le manuel avec {{ui:From the open part}}, ou enregistrez-le en glTF, 3MF, OBJ ou STL.
- ModelCraft et BimCraft ne peuvent pas encore transmettre directement un modèle à Illustrer : enregistrez-le en glTF (.glb) et utilisez {{ui:From another file…}}.

Suite : [Vues et aspects](topic:illustrate-views).
