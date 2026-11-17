---
title: Exporter une pièce ou un assemblage en USD
summary: Écrire la pièce, ou tout l'assemblage avec chaque pièce une seule fois et chaque exemplaire placé, dans un paquet USD.
keywords: usd, usdz, openusd, export, assemblage, paquet, rendu, scène
from: dd8a5a28
---

Choisissez {{ui:Exporter}} › {{ui:Paquet USD (.usdz)}}.

- Dans une pièce, le fichier contient le solide de la pièce avec son matériau, son volume et sa masse.
- Dans un assemblage, chaque pièce est écrite une seule fois et chaque exemplaire est placé là où l'assemblage le met, si bien que le fichier reste petit quel que soit le nombre d'exemplaires.

PartCraft travaille en millimètres avec Y vers le haut ; le fichier USD est en mètres avec Z vers le haut, comme l'attendent la plupart des programmes 3D.
