---
title: Lancer depuis une clé USB
summary: Ce que les outils d'ingénierie écrivent et où, pour que CadCraft Studio puisse fonctionner depuis une clé USB ou n'importe quel dossier, sans programme d'installation ni droits d'administrateur : paramètres, générateurs, caches et fichiers de pièces, et ce qui reste sur la clé.
keywords: usb, portable, sans installation, administrateur, admin, paramètres, dossier de données, générateurs, emplacement des fichiers, hors ligne, confidentialité, accès à l'hôte
from: 263efc79
---

Les outils d'ingénierie (générateurs, bibliothèque d'ingénierie, vérifications et fichiers de données) ne nécessitent **aucun droit d'administrateur** et **aucun programme d'installation**. Ils n'écrivent que ce qui est listé ici, et rien d'autre.

| Élément | Où il est conservé |
|---|---|
| Vos pièces, avec leurs corps générés, fiches de données et vérifications | Le fichier de pièce que vous enregistrez (`.partcraft.json`), à l'emplacement de votre choix. |
| Générateurs ouverts depuis des fichiers | Dans le stockage propre à l'application : le stockage local du navigateur dans une page web, et le dossier `data` à côté du programme dans le Studio portable. 20 au maximum. |
| Paramètres (tailles de voxels que vous définissez, threads du solveur, disposition) | Le même stockage de l'application. |
| Fiches de données, champs, maillages | Uniquement à l'endroit où vous les enregistrez : le téléchargement va où vous le choisissez. |

Les outils n'effectuent **aucun appel réseau** de leur côté : les générateurs fournis sont des fichiers dans le dossier de l'application, la bibliothèque et les vérifications s'exécutent sur votre ordinateur, dans un worker qui ne peut pas accéder au réseau, et les données d'ingénierie (propriétés de l'eau et de l'air, matériaux) sont intégrées à l'application. Un générateur ouvert depuis un fichier est lu sur votre ordinateur et ne va nulle part.

## Le Studio portable Windows (zip) et Linux

Le Studio portable pour Windows conserve ses paramètres, caches et modules complémentaires dans un dossier `data` à côté du programme. L'AppImage Linux les conserve à côté d'elle lorsqu'un fichier nommé `portable` se trouve à ses côtés ; sans ce fichier, elle utilise votre dossier personnel. Il n'existe pas de forme portable pour Mac : le système empêche une application téléchargée d'écrire à côté d'elle. Les notes portables propres au shell (aide de `Studio`) décrivent ce que le programme écrit.

## Accès à l'hôte

Rien ici ne demande d'accès à l'hôte. Les imprimantes, machines série et périphériques USB sont distincts : ils demandent l'accès lorsqu'un travail en a besoin, une fois par périphérique, et ni les générateurs ni les vérifications n'y touchent.
