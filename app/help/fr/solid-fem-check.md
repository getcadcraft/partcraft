---
title: Solid FEM : vérifier la contrainte d'une pièce
summary: Activer le module complémentaire Solid FEM, mailler une pièce, désigner les faces fixes et une charge dans la vue 3D, résoudre, puis lire le déplacement et la contrainte de von Mises sur le modèle.
keywords: solid fem, éléments finis, fea, contrainte, von mises, déplacement, face fixe, charge, pression, gravité, fréquence propre, forme modale, maillage, module complémentaire
from: 8b7e6ba2
---

## Ce que vous allez faire

Vérifier une pièce solide sous une charge : où elle se déplace et où la contrainte est la plus élevée. L'étude est linéaire et élastique : c'est une aide à la vérification, et votre ingénieur doit valider les résultats.

## Étapes

1. Choisissez {{ui:Paramètres}} › {{ui:Modules complémentaires}} et activez {{ui:Solid FEM}} (il est désactivé tant que vous ne le faites pas). Ouvrez l'onglet {{ui:Solid FEM}} dans le panneau de droite.
2. Sous {{ui:Matériau}}, choisissez un matériau, ou {{ui:Personnalisé}} et saisissez le coefficient de Poisson, la masse volumique et la limite d'élasticité.
3. Appuyez sur {{ui:Ajouter des faces fixes}}, cliquez les faces maintenues dans la vue 3D, puis appuyez sur {{ui:Fin de la sélection}}.
4. Ajoutez une charge avec {{ui:Ajouter une force}}, {{ui:Ajouter une pression}} ou {{ui:Ajouter la gravité}}, puis désignez ses faces de la même façon.
5. Appuyez sur {{ui:Mailler la pièce}}, puis sur {{ui:Résoudre}}. Si vous voulez des fréquences, choisissez d'abord {{ui:Fréquences propres}} sous {{ui:Étude}}.
6. Lisez {{ui:Résultats}} et {{ui:Avertissements}}, puis appuyez sur {{ui:Afficher sur le modèle}} pour tracer la contrainte de von Mises, le déplacement ou une forme modale ; {{ui:Retirer le tracé}} le supprime.

## Remarques

- La page résout jusqu'à un nombre fixe d'éléments ; la ligne d'état indique quand la taille de vos éléments est trop fine.
- La contrainte aux faces fixes, aux points de charge et aux angles vifs augmente lorsque le maillage est affiné. Affinez et comparez avant de vous fier à un pic.
- Chaque modification constitue une étape d'annulation, et les paramètres sont enregistrés dans le fichier de la pièce.
- Pour les études de plastification et de contact, voir [Vérifier la contrainte et la flèche](topic:simulation).
