---
title: Étude magnétique d'une esquisse
summary: Transformez les contours fermés de vos esquisses en un modèle magnétique plan (fer, aimants, bobines), visualisez le champ et lisez la force et le couple sur un corps.
keywords: aimant, magnétique, magnétostatique, champ, densité de flux, force, couple, bobine, culasse, fer, courbe B-H, aimant permanent, actionneur, moteur, solénoïde, maxwell
from: 604efc3b
---

Utilisez {{ui:Plus}} dans la barre d'outils Fonctions › {{ui:Étude d'aimant d'esquisses…}} sur une pièce qui comporte des esquisses. Chaque forme fermée dans les esquisses que vous cochez constitue une région d'un modèle plan ; l'étude calcule le champ magnétique B, ainsi que la force et le couple sur un corps que vous choisissez.

## Étapes

1. Dessinez les corps sous forme de formes fermées dans des esquisses : une culasse en fer, un aimant, une bobine. Les corps qui se touchent partagent une arête : placez-les dans des esquisses différentes ; les corps séparés, ou imbriqués l'un dans l'autre (une fenêtre dans une culasse), peuvent partager une même esquisse. Gardez les esquisses sur le même plan.
2. Ouvrez l'étude et cochez les esquisses à utiliser. Chaque profil fermé reçoit une ligne, numérotée. Indiquez ce qu'il est : {{ui:Air}}, {{ui:Fer}} (une perméabilité, ou une courbe B–H saisie sous forme de couples B en teslas et H en A/m), un {{ui:Aimant permanent}} (Br en teslas, sa direction en angle par rapport à l'axe x de l'esquisse, et sa perméabilité de recul) ou une {{ui:Bobine}} (le courant total traversant son profil, spires multipliées par ampères ; le signe indique le sens de circulation).
3. Cochez {{ui:Force et couple sur ce corps}} pour les corps souhaités. Indiquez la profondeur de la pièce, perpendiculairement à l'esquisse.
4. Choisissez le maillage et l'air autour du modèle, puis {{ui:Exécuter}}.

## Ce que vous devez voir

- La densité de flux |B| sur le modèle, du bleu foncé (faible) au rouge (élevée), avec les profils numérotés.
- Le champ le plus fort et son emplacement, le nombre de triangles, et pour chaque corps coché la force selon x et y ainsi que le couple autour de son milieu, pour la profondeur indiquée.
- {{ui:Enregistrer les résultats (CSV)}} écrit les valeurs.

## Bon à savoir

- C'est un modèle plan et stationnaire : tout est exprimé par mètre de profondeur, sans courants de Foucault ni hystérésis, et un aimant suit une droite de recul rectiligne (il ne peut pas être démagnétisé).
- Le modèle est placé dans une boîte d'air dont le bord fait office de paroi. Comparez deux tailles de boîte d'air, ainsi que les maillages Normal et Fin : une force calculée à partir du champ autour d'un corps n'est aussi bonne que le maillage à cet endroit.
- Un fer défini seulement par une perméabilité ne sature jamais. Lorsque le champ dépasse 2 T, l'étude affiche un ⚠ dans la liste des problèmes : donnez au fer une courbe B–H. Les valeurs d'une nouvelle ligne sont des exemples (fer μr 2000, aimant de 1.2 T), et non la fiche technique d'un matériau.
- Un corps a besoin d'espace autour de lui pour subir la force : si un autre corps est trop proche, l'étude le signale.
- Une aide au dessin, et non une validation d'ingénierie.

## Suite

- [Champs magnétiques en 2D (tutoriel)](topic:magnetic-fields-2d)
