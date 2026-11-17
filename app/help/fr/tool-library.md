---
title: La bibliothèque d'outils
summary: Enregistrez dans le navigateur les outils que vous utilisez pour que chaque pièce puisse les avoir, et déplacez les bibliothèques d'outils d'un ordinateur à l'autre sous forme de fichier JSON.
keywords: bibliothèque d'outils, outils, exporter, importer, JSON, enregistrer des outils, numéro T, fraise en bout, outils d'atelier
from: 8b9f2483
---

L'onglet **Outils** de la **Fabrication** liste les outils de la pièce. Sous **Bibliothèque d'outils**, vous pouvez garder vos propres outils au-delà d'une seule pièce :

- {{ui:Enregistrer cet outil}} ajoute l'outil sélectionné à **Mes outils enregistrés** ; {{ui:Enregistrer tous les outils de cette pièce}} les ajoute tous. Mes outils enregistrés sont conservés dans ce navigateur et disponibles pour chaque pièce. Un outil déjà enregistré (même type, mêmes dimensions, mêmes goujures et mêmes valeurs personnalisées) n'est pas enregistré deux fois.
- {{ui:Ajouter à cette pièce}} intègre l'outil enregistré choisi dans la pièce. Si son numéro T est déjà utilisé par un autre outil de la pièce, il prend le prochain numéro libre, et le panneau l'indique. {{ui:Retirer de ma bibliothèque}} le supprime de la liste enregistrée (et non des pièces qui l'ont déjà).
- {{ui:Exporter les outils…}} écrit les outils de la pièce dans un fichier `.json` ; {{ui:Importer des outils…}} ajoute à la pièce les outils d'un tel fichier, avec les mêmes règles (un outil déjà présent est ignoré, un numéro T déjà pris est déplacé). Le fichier contient les dimensions, les goujures, les matériaux et les avances et vitesses personnalisées que vous avez saisies ; il ne contient pas d'identifiants. Servez-vous-en pour transférer les outils d'un atelier vers un autre ordinateur ou pour les donner à un collègue.

Si le navigateur ne peut pas conserver la bibliothèque (stockage désactivé ou plein), l'enregistrement le signale, et **Exporter les outils** est le moyen de conserver un fichier. Un fichier doit être une bibliothèque d'outils PartCraft de cette version ou plus ancienne, avec au plus 500 outils aux dimensions valides ; tout autre fichier est refusé avec la raison.

Les vitesses de coupe et les avances par dent fournies avec un outil sont des valeurs de départ ; voir [Créer des parcours d'outil et du G-code](topic:manufacture).
