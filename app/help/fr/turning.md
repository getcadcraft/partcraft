---
title: Tournage sur tour
summary: Dresser, ébaucher, finir, gorger, tronçonner, fileter et percer une pièce tournée, à partir du profil que la pièce forme en tournant. Outils de tour, avances par tour, posts de tour, et ce qui n'a pas été validé.
keywords: tournage, tour, tourner, dressage, ébauche, finition, gorge, gorgeage, tronçonnage, tronçonner, filetage, g32, g33, g96, vitesse de coupe constante, css, rayon de bec, plaquette, barre, mandrin, diamètre, avance par tour, g71, g76
from: d8cc53b0
---

La Fabrication propose sept opérations pour un tour. Elles fonctionnent sur toute pièce : ce qui est usiné est le **profil que la pièce forme en tournant** autour du centre du brut ; une pièce qui n'est pas ronde est donc tournée jusqu'à la forme ronde qui la contient.

**Rien de ce qui suit n'a été exécuté sur un tour.** Les parcours sont contrôlés par rapport à la géométrie par les tests ; les deux posts de tour suivent les codes documentés des commandes. Validez d'abord un programme dans le simulateur de votre commande et dans le vide.

## Mise en place

Dans l'onglet **Mise en place** :

- **L'axe d'outil** est l'axe de la broche, Z du tour. L'avant de la pièce est en +Z ; le mandrin tient l'autre extrémité.
- **Brut** : choisissez {{ui:Cylindre}}, la barre. Son décalage de dessus correspond à ce que retire le dressage.
- **Origine de travail** : un centre sur le dessus du brut ou du modèle place Z0 sur la face avant, l'emplacement habituel.
- **Commande** : {{ui:Tour de type Fanuc (.nc)}} ou {{ui:Tour LinuxCNC (.ngc)}}. Un post de fraisage refuse un programme de tournage et l'indique.
- **Vitesse maximale de broche** : la limite sous laquelle la vitesse de coupe est maintenue.

{{ui:Plus}} dans la barre d'outils de Fabrication liste les sept opérations de tournage en haut de l'onglet **Opérations**. La première que vous ajoutez apporte son propre outil : une **plaquette de tournage** (rayon de bec, angle de plaquette, angle d'arête de coupe) ou une **lame de gorge** (largeur, rayon d'angle, profondeur atteinte). Modifiez-les dans l'onglet **Outils**. Les avances sont par tour, et la vitesse est une vitesse de coupe en m/min que la commande maintient lorsque le diamètre change ; donnez à un outil sa propre vitesse de rotation pour fixer la vitesse à la place.

## Les opérations

| Opération | Ce qu'elle fait |
|---|---|
| {{ui:Face}} | Dresse l'avant de la barre jusqu'à la pièce, une profondeur de passe à la fois, de l'extérieur jusqu'à juste au-delà du centre. |
| {{ui:Ébauche}} | Passes le long de Z espacées d'une **profondeur de passe**, jusqu'au profil plus la **surépaisseur à laisser** ; puis une fois le long du profil pour enlever les marches. Une vallée entre deux épaulements est abordée par une plongée d'une profondeur de passe. |
| {{ui:État de surface}} | Une passe le long du profil, à une fraction de l'avance de l'outil. |
| {{ui:Gorge}} | Plonge la lame côte à côte partout où elle peut prendre plus que la limite de matière restante : les gorges que la plaquette de tournage ne pouvait pas atteindre. **De / à Z** la restreint. |
| {{ui:Tronçonner}} | Coupe la pièce juste derrière sa face arrière, jusqu'à un peu au-delà du centre, avec des débourrages si vous en réglez. |
| {{ui:Filetage}} | Un filetage extérieur : diamètre nominal, pas, longueur, nombre de passes. Une profondeur 0 signifie 0.6134 × pas (filetage à 60°). Chaque passe enlève la même section de copeau ; les passes à vide répètent la dernière. |
| {{ui:Perçage}} | Un foret sur l'axe central jusqu'à une profondeur, avec débourrages. |

## Comment l'outil est tenu à l'écart de la pièce

La plaquette est traitée pour ce qu'elle est : son cercle de bec, et derrière lui l'arête de sortie, une droite dont l'angle vaut 180° moins l'angle d'arête de coupe et l'angle de plaquette. Cette forme est descendue sur le profil en chaque point le long de Z, et le parcours est l'endroit où elle s'arrête. Ainsi :

- **Le rayon de bec est déjà dans le parcours.** Les posts n'écrivent ni `G41` ni `G42` ; les coordonnées sont le point programmé de l'outil (le coin du carré autour du bec).
- La plaquette **ne peut pas suivre une paroi plus raide que son arête de sortie**. Une gorge derrière un épaulement est laissée telle quelle, et l'opération de finition indique la part du profil qu'elle n'a pu atteindre. Une opération {{ui:Gorge}} s'en charge.
- Le brut est suivi le long de Z après chaque coupe : l'ébauche ne coupe pas dans le vide, la gorge trouve ce qui reste, et chaque opération indique le volume enlevé et si elle a entamé la pièce.

## Limites

- **Tournage extérieur uniquement** : pas de barre d'alésage, pas de gorges ou filetages intérieurs, pas de gorges en face.
- Une broche, la pièce tenue en −Z. Pas de contre-broche, pas d'outils motorisés, pas d'axe C ni Y, pas de lunette ni de déplacements de contre-pointe.
- Les parcours sont des déplacements droits : les courbes sont de courtes lignes dans la tolérance (pas de `G2`/`G3`), et l'ébauche et le filetage sont écrits passe par passe (pas de cycles `G71` ni `G76`).
- Le filetage consiste en passes droites avec une sortie droite en fin de course ; prévoyez une gorge de dégagement pour le filetage. Le filetage n'est pas représenté dans le brut.
- Le perçage sur centre ne modifie pas le modèle de brut.
- Le porte-outil, la tourelle et le mandrin ne sont pas contrôlés. Réglez **Arrêt à Z** pour tenir l'outil à l'écart des mors.
- Avances et vitesses sont des valeurs de départ, comme pour le fraisage.
