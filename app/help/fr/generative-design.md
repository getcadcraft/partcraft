---
title: Faire croître une forme sous charges (Génératif)
summary: Choisissez les faces maintenues et chargées, les zones à conserver et à garder libres, les volumes cibles et les matériaux, puis générez les résultats : les formes les plus rigides trouvées pour chaque volume, vérifiées à nouveau comme solides, comparées dans un tableau et téléchargées en STL, STEP ou en nouvelle pièce.
keywords: conception générative, optimisation topologique, SIMP, allègement, treillis, forme organique, résultats, comparer, masse, fraction volumique, conserver, maintien en matière, obstacle, zone à garder vide, espace de conception, taille minimale de membrure, STL, impression 3D
from: 5b91fa8e
---

L'espace **Génératif** retire la matière dont les charges n'ont pas besoin. Vous indiquez où la pièce est maintenue et chargée, ce qui doit rester et ce qui doit rester libre ; PartCraft trouve la forme la plus rigide pour chaque volume cible (**optimisation topologique**), la revérifie comme solide avec le vrai matériau, et affiche les résultats côte à côte. Il fonctionne sur les faces nommées que le noyau de maillage donne à la pièce (voir [Le noyau de maillage](topic:solid-kernels)).

Choisissez **Génératif** dans la liste **Espace de travail**. Votre pièce n'est pas modifiée ; l'étude est enregistrée dans le fichier de pièce.

## Préparer une étude

1. Appuyez sur **Nouvelle étude** dans le panneau de droite.
2. **Espace** : *La pièce telle quelle* retire de la matière à votre pièce ; *Une boîte autour de la pièce* fait croître une forme dans une boîte plus grande que la pièce, de la **Marge de la boîte**.
3. **Taille d'élément** : laissez vide pour une taille automatique (environ 8 000 cubes), ou saisissez-en une. Des tailles plus fines donnent des formes plus fines, mais prennent plus de temps.
4. **Membrure minimale** : les membrures plus fines qu'environ deux fois cette valeur ne se forment pas. Vide signifie un cube et demi.
5. Cochez de un à six **Volumes cibles** (la part de l'espace de conception que la forme peut occuper) et de un à quatre **Matériaux**. Chaque volume est généré une fois ; chaque matériau est vérifié sur cette forme (la forme la plus rigide ne dépend pas du matériau, mais sa masse, sa contrainte et son coefficient de sécurité, oui).

## Objectifs

- {{ui:Fixe}} : cliquez sur les faces maintenues. Une **Face sans frottement** de la liste **Ajouter** du panneau ne maintient une face que dans son propre plan (utilisez-la pour les plans de symétrie).
- {{ui:Force}} : cliquez sur les faces chargées, puis saisissez la force totale et choisissez sa direction dans le panneau. **Pression** se trouve dans la liste **Ajouter**.
- {{ui:Conserver}} : cliquez sur les faces dont l'environnement doit rester plein, et réglez la profondeur (**Maintenir plein sur**), par exemple autour des trous de boulons. Les faces que vous fixez ou chargez sont toujours conservées.
- {{ui:Obstacle}} : cliquez sur les faces dont l'environnement doit rester vide, et réglez la distance (**Maintenir vide sur**) : l'espace pour un arbre ou un outil.

Appuyez sur **Fin de sélection** ou sur {{key:Esc}} après avoir cliqué sur les faces. Des teintes vertes et rouges montrent les zones.

## Générer et comparer

Appuyez sur {{ui:Générer}}. Le panneau affiche la progression et le temps restant ; **Arrêter** annule. Chaque résultat apparaît dans le tableau **Résultats** : volume cible, matériau, **masse**, **contrainte maximale**, **déplacement maximal** et **coefficient de sécurité** (limite élastique ÷ contrainte), tous issus d'un nouveau calcul de la forme finale en cubes solides avec le vrai matériau.

Choisissez un résultat pour le voir dans la vue (la pièce est masquée ; cochez **Afficher la pièce à travers** pour voir les deux). Sous le tableau : le nombre d'itérations et si elles se sont stabilisées, sa rigidité en tant que solide comparée au chiffre propre à l'optimiseur, et sa surface.

## Utiliser un résultat

- **STL** : un maillage triangulaire fermé, prêt pour l'impression 3D.
- **STEP (facetté)** : la même surface sous forme de solide STEP fait de faces planes.
- **Nouveau fichier de pièce** : une pièce PartCraft dont l'unique fonction est le résultat sous forme de solide importé. Ouvrez-le pour y esquisser, percer des trous ou le vérifier dans Simulation. Il est facetté (des milliers de faces planes), et non une forme modifiable.
- **Ajouter à cette pièce** joint le résultat à la pièce ; il n'est disponible que pour une conception dans une boîte (avec la pièce elle-même comme espace, le résultat se trouve à l'intérieur de la pièce).

**Nouveau fichier de pièce** et **Ajouter à cette pièce** ne sont pas encore disponibles dans cette version : le résultat devient un solide importé, ce qui nécessite un noyau exact. Les téléchargements STL et STEP (facetté) fonctionnent.

## Dans quelle mesure s'y fier

- Il optimise la **rigidité** pour le volume donné. Il n'y a pas encore de limites de contrainte ni de règles de fabrication (surplombs, directions d'usinage, diamètres minimaux de trous) : vérifiez un résultat choisi dans [Simulation](topic:simulation) et ajustez.
- Les membrures fines d'un ou deux cubes de large sont des approximations : utilisez une taille d'élément plus petite pour les pièces élancées.
- La méthode est SIMP avec un filtre de densité, une projection à seuil et des mises à jour par critères d'optimalité ; la contrainte et la flèche indiquées sont celles du résultat sous forme de cubes, ce qui est honnête mais grossier sur les angles vifs.

## Voir aussi

- [Vérifier la contrainte et la flèche (Simulation)](topic:simulation)
- [Exporter pour l'impression, en STEP et DXF](topic:export-files)
- [Ce qui n'est pas encore disponible](topic:not-built-yet)
