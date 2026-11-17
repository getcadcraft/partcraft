---
title: Filetages sur arbres et alésages, conventionnels ou modélisés
summary: Placez un filetage métrique ISO ou trapézoïdal sur n'importe quelle face circulaire, arbre ou alésage. Gardez-le conventionnel pour les plans, ou modélisez le filetage hélicoïdal réel pour l'impression 3D, avec un jeu pour que les pièces imprimées s'emboîtent.
keywords: filetage, filetages, filetage modélisé, hélicoïdal, hélice, vis, boulon, écrou, arbre, alésage, filetage extérieur, filetage intérieur, filetage conventionnel, filetage métrique, trapézoïdal, Acme, vis mère, Tr16x4, M10, impression 3D, imprimer, jeu, ajustement, hélice à gauche, taraudé
from: 4f6401cc
---

{{ui:Filetage}} crée des filetages sur les faces circulaires : l'extérieur d'un arbre (filetage extérieur) ou l'intérieur d'un alésage (filetage intérieur). PartCraft détermine lequel à partir de la face.

Au départ, un filetage est **conventionnel** : la face reste lisse, la vue trace le filetage en cercles pointillés et la feuille de plan le note, par exemple « M10×1.5 - 6g, filetage de longueur 20 ». Cochez **Modélisé** pour découper le filetage hélicoïdal réel dans la pièce, pour l'impression 3D ou un modèle qui doit être fidèle.

## Fileter un arbre ou un alésage

1. Dessinez l'arbre ou l'alésage à la taille du filetage : un arbre Ø10 pour un boulon M10, ou un alésage Ø8.5 (le foret de taraudage) pour un écrou M10.
2. Cliquez sur la face circulaire, puis choisissez {{ui:Plus}} › {{ui:Filetage}}. Si aucune face circulaire n'est sélectionnée, PartCraft vous demande de cliquer sur les faces, puis sur {{ui:Terminé}}.
3. Dans le panneau de droite, vérifiez la **Taille**. **Ajuster à la face** choisit la taille toute seule : pour un arbre, la taille dont le diamètre extérieur est celui de l'arbre ; pour un alésage, la taille dont le diamètre intérieur correspond à l'alésage.

Le filetage commence à l'extrémité ouverte de la face, là où la pièce ne se prolonge pas le long de l'axe : l'extrémité libre d'un arbre, l'entrée d'un alésage. **Commencer à l'autre extrémité** inverse ce sens.

## Réglages

| Réglage | Choix | Par défaut |
|---|---|---|
| **Forme** | ISO métrique (60°), M1.6 à M64 à pas gros ; trapézoïdal (Tr, 30°), Tr8×1.5 à Tr60×9 | ISO métrique |
| **Taille** | Ajuster à la face, ou une taille de la liste | Ajuster à la face |
| **Toute la face** | Décochez-la pour donner une **Longueur (mm)**, mesurée depuis le début | Coché |
| **Commencer à l'autre extrémité** | Le filetage part de l'autre extrémité de la face | Désactivé |
| **Sens** | Hélice à droite ou à gauche | À droite |
| **Modélisé** | Découpe le filetage hélicoïdal réel | Désactivé |
| **Jeu (mm)** | Affiché quand Modélisé est coché : de combien le filetage d'un arbre est plus petit, et celui d'un alésage plus grand, tout autour | 0.1 |

Une taille qui ne convient pas à la face est tout de même construite, ajustée à la face, et le panneau le signale, par exemple « Un arbre de Ø12 mm n'est pas du M10 (Ø10 mm) ». Plusieurs faces peuvent partager une même fonction Filetage ; avec **Ajuster à la face**, chacune reçoit sa propre taille.

## Filetages modélisés pour l'impression 3D

Un filetage modélisé suit le profil de base normalisé : ISO 68-1 pour les filetages métriques (sommets et fonds plats, flancs à 60°), ISO 2901 pour les trapézoïdaux (flancs à 30°). Le **Jeu** rentre le profil complet (arbre) ou le fait sortir (alésage) pour que les pièces imprimées se vissent ensemble :

- **0.1 à 0.2 mm** convient à la plupart des imprimantes. Imprimez d'abord un boulon et un écrou d'essai.
- **0** est le profil standard, pour les pièces usinées ou pour vérifier un ajustement.

Un boulon et un écrou avec le même jeu ne se touchent jamais par leurs flancs : l'écart entre eux est le double du jeu, tout autour.

:::tip
Les pas fins s'impriment mal : M3 et moins, ou un pas inférieur à 0.5 mm, est proche de ce qu'une buse de 0.4 mm peut tracer. Modélisez les filetages plus grands, et utilisez un insert à chaud ou un trou taraudé pour les petits.
:::

Un filetage modélisé fait partie du solide : les exports STL, 3MF et STEP le conservent, et l'outil Mesure le prend en compte. Il alourdit le recalcul de la pièce : un filetage M10 de longueur 20 représente environ 150 000 triangles.

## Trous taraudés

Un trou **Taraudé (ISO métrique)** a lui aussi un interrupteur **Modélisé**, avec le même **Jeu**. Voir [Percer des trous et des lamages aux points d'esquisse](topic:holes).

## Quand un filetage ne se construit pas

- « Un filetage se pose sur une face circulaire (un cylindre) : un arbre ou un alésage. » La face choisie est plane ou courbe d'une autre façon.
- « Aucune taille standard ne convient à une face circulaire de Ø0.6 mm : choisissez une taille. » Ajuster à la face n'a rien trouvé à 12 % près de la face. Choisissez une **Taille**, ou changez de face.
- « Une face de ce filetage a disparu (…). Sélectionnez-la à nouveau. » Une modification précédente a supprimé la face. Cliquez sur {{ui:Choisir les faces}} et cliquez de nouveau sur la face.

:::note
Les filetages en pouces (UNC, UNF), les filetages de tuyauterie, les filetages coniques, les dégagements de filetage et les débuts de filetage chanfreinés ne sont pas encore disponibles. Le noyau exact affiche un filetage modélisé comme conventionnel.
:::
