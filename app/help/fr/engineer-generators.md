---
title: Pièces issues de la physique : générateurs
summary: L'espace de travail Engineer et la fonction Corps généré : choisissez un générateur, réglez ses entrées (débit, pression, températures, matériau, imprimante) et obtenez une pièce dimensionnée à partir de formules de manuel, avec sa fiche de données, ses contrôles de fabrication et des fichiers pour les outils d'analyse. Les mêmes entrées donnent toujours la même pièce.
keywords: engineer, générateur, corps généré, physique, règles, échangeur de chaleur, collecteur, buse, treillis, gyroïde, fiche de données, entrées, déterministe, mêmes entrées même pièce, contrôles de fabrication, impression 3D, lit de poudre
from: 5a387dc0
---

Un **générateur** est un script qui dimensionne une pièce à partir de vos exigences et la construit. Un générateur d'échangeur de chaleur prend la chaleur à transférer, les deux débits et leurs températures, la pression et le matériau ; il calcule la taille du cœur et l'épaisseur de sa paroi, construit le cœur, et vous indique les valeurs utilisées et leur origine. Modifiez une entrée et la pièce suit.

Le résultat est un corps ordinaire de la pièce : il figure dans la liste des fonctions, s'imprime, s'exporte. Le générateur lui-même est conservé dans la pièce, si bien qu'un fichier s'ouvre sur tout ordinateur sans que le générateur soit installé, et **l'ouverture d'une pièce n'exécute jamais de script**.

## Créer un corps

1. Choisissez l'espace de travail {{ui:Engineer}} dans le sélecteur.
2. Choisissez un générateur dans la liste (ceux livrés avec PartCraft, puis ceux que vous avez ouverts depuis un fichier) et cliquez sur {{ui:Nouveau}}.
3. Le script s'exécute. Lorsqu'il se termine, le corps apparaît dans la vue et le panneau affiche ses entrées, sa **fiche de données** et ses **contrôles**.

Vous pouvez aussi en ajouter un depuis Conception : {{ui:Fonctions}} › {{ui:Plus}} › {{ui:Corps généré}}.

## Le modifier

Modifiez une entrée et le corps est refait peu après que vous avez cessé de taper. Le panneau indique laquelle de trois situations est vraie :

- **À jour** : le corps correspond au script et à ses entrées.
- **Les entrées ont changé** : le corps de la pièce provient des entrées précédentes ; il est en cours de nouvelle génération, ou appuyez sur {{ui:Exécuter}}.
- **Pas encore exécuté** ou **La dernière exécution a échoué** : une erreur de script est affichée avec sa ligne.

{{ui:Arrêter}} met fin à une exécution trop longue. {{ui:Annuler}} revient en arrière pas à pas : une exécution est une étape, une entrée est une étape.

## La fiche de données

Chaque valeur calculée par le générateur est listée avec son **unité** et **son origine** (une équation de manuel, une norme, une fiche technique). Aucune valeur n'est cachée. La fiche fait partie du fichier, elle est donc identique sur l'ordinateur suivant. [Données de sortie](topic:data-out) explique comment l'enregistrer en JSON ou en PDF.

## Les contrôles

Un générateur peut vérifier sa pièce par rapport à un procédé d'impression : parois et écarts plus fins que ce que le procédé permet, pièces détachées, cavités qui retiennent la poudre ou la résine, trous trop étroits pour être dégagés, et surplombs qui demandent un support. Les constats figurent dans le panneau et dans la liste {{ui:Problèmes}} (le bouton ⚠), et ils sont enregistrés avec la pièce.

Les valeurs des procédés sont les valeurs arrondies que les guides publics de conception donnent pour le procédé en général (FDM, SLA, SLS, lit de poudre métallique). Ce ne sont **pas les spécifications de votre machine** : remplacez-les par les valeurs de votre atelier avant de vous fier à un contrôle. Le contrôle travaille sur une grille de voxels, donc il est précis à un voxel près : une paroi n'est signalée que lorsqu'elle est plus fine que la limite d'au moins un voxel.

## Ce qui est livré

| Générateur | Ce qu'il crée |
|---|---|
| Bloc gyroïde | Un bloc rempli d'une tôle gyroïde, de Schwarz P ou diamant : le treillis le plus simple |
| Échangeur de chaleur gyroïde | Le cœur d'un échangeur à deux fluides, dimensionné à partir de la puissance par la méthode efficacité-NTU, sa paroi à partir de la pression ; peut vérifier la perte de charge par une étude d'écoulement sur une cellule |
| Collecteur de distribution | Un collecteur et des piquages, chaque tube dimensionné d'après le débit qu'il transporte |
| Poutre en treillis graduée | Un treillis dont la paroi s'épaissit là où une optimisation topologique indique qu'il faut de la matière |

Toutes sont des premières estimations fondées sur des formules de manuel. [La bibliothèque d'ingénierie](topic:engineering-library) liste les formules et leurs limites. Lancez Simulation, Thermique ou Écoulement sur le résultat avant de vous y fier.

## Contrôles à l'exportation

Les générateurs et fiches de données d'Engineer portent un avis sur les contrôles à l'exportation et les sanctions. Lisez-le dans [Engineer et contrôles à l'exportation](topic:engineer-export-notice) ; il figure aussi en bas de chaque fiche de données.

## Pas encore disponible

- Connexions, orifices et raccords sur le cœur de l'échangeur : il ne s'agit que du cœur.
- Courbes de température pour la résistance des matériaux : les matériaux sont à température ambiante.
- Pertes dans les tés et répartition du débit entre les sorties du collecteur.
- Ajout de générateurs depuis le répertoire des modules complémentaires en un clic ; l'ouverture d'un fichier en ajoute un à ce navigateur.
- Générateurs pour les autres applications.
