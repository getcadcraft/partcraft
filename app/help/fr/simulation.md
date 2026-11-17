---
title: Vérifier la contrainte et la flèche (Simulation)
summary: Choisissez un matériau, fixez des faces, ajoutez des forces, des pressions ou le poids propre de la pièce, résolvez, puis lisez sur le modèle la contrainte de von Mises, le déplacement, le coefficient de sécurité, les réactions et les fréquences propres, avec ce que la méthode peut et ne peut pas vous dire.
keywords: simulation, FEA, analyse en direct, mise à jour pendant la modification, casser, ce qui cède en premier, facteur de charge, non linéaire, plasticité, plastification, limite élastique, déformation plastique, bilinéaire, contact, paire de contact, pénalité, collé, contact sans frottement, CalculiX, .inp, .frd, éléments finis, contrainte, déformation, von Mises, déplacement, flèche, coefficient de sécurité, facteur de sécurité, limite d'élasticité, réaction, charge, force, pression, gravité, poids propre, fixe, sans frottement, appui, matériau, acier, aluminium, titane, ABS, PLA, nylon, fréquence propre, modal, vibration, maillage, taille d'élément, tétraédrique, tétraèdres, maillage tétraédrique, voxel, qualité de maillage, contrainte principale, déformation équivalente, estimation d'erreur, faces courbes, trous, congés, adaptatif, raffinement adaptatif, raffinement automatique, h-adaptatif, convergence, convergence de maillage, surface exacte, sphère, cône, tore, spline, forme libre
from: 6f2fdec1
---

L'espace de travail Simulation répond à la question « la pièce va-t-elle plier ou casser sous cette charge ? » pour la pièce que vous modélisez. Il s'agit d'une étude **statique linéaire** (petits déplacements, matériau qui reste élastique) ou d'une étude de **fréquences propres**, résolue sur un maillage de tétraèdres quadratiques qui suit les faces de la pièce (ou, si vous le choisissez, de petits cubes égaux). Elle travaille sur les faces nommées que le noyau de maillage attribue à la pièce (voir [Le noyau de maillage](topic:solid-kernels)).

Choisissez **Simulation** dans la liste **Espace de travail**, à gauche de la barre d'outils. Votre pièce n'est pas modifiée ; l'étude est enregistrée dans le fichier de pièce, et chaque modification peut être annulée.

## Préparer une étude

1. Appuyez sur **Nouvelle étude** dans le panneau de droite.
2. Choisissez le **Matériau**. Le panneau affiche sa rigidité (E), le coefficient de Poisson, la masse volumique et la limite d'élasticité. Ces valeurs sont des chiffres typiques des manuels ; les valeurs certifiées de votre fournisseur peuvent différer.
3. Choisissez le **Maillage** :
   - **Tétraédrique (précis)**, par défaut : tétraèdres à 10 nœuds dont les faces extérieures reposent sur les faces de la pièce, avec des arêtes courbes sur les trous, les congés et les autres faces rondes. Les nœuds des faces planes, cylindriques, coniques, sphériques et toriques, des faces de révolution et d'extrusion, et des faces de forme libre (B-spline) reposent sur la surface exacte ; tout autre type de face suit son maillage d'affichage, et le tableau des résultats indique combien de faces l'ont fait. Le maillage s'affine automatiquement près des faces courbes, des parois minces et des arêtes vives.
   - **Cubes voxel (rapide)** : la pièce remplie de cubes égaux. C'est rapide, mais les faces courbes deviennent des marches. Les études enregistrées avant l'existence du maillage tétraédrique conservent ce mode.
4. Laissez **Taille des éléments** vide pour une taille automatique (environ 12 000 tétraèdres, ou 20 000 cubes), ou saisissez-en une en millimètres. Le panneau indique à peu près le nombre d'éléments obtenu avant l'ajout des zones fines. Avec des tétraèdres, **Éléments plus petits sur les faces courbes** (activé par défaut) affine les trous et les congés, là où la contrainte culmine généralement.

### Raffiner automatiquement

Avec des tétraèdres, une étude statique ou de flambage (sans charge thermique), une étude de fréquences propres et une étude thermique permanente proposent **Raffiner automatiquement (adaptatif)**. Cochez-la et réglez :

- **Erreur cible (%)** : la résolution s'arrête lorsque l'erreur estimée est inférieure à cette valeur (1 % au départ).
- **Nombre maximal de passes** : le nombre maximal de résolutions (5 au départ, 10 au maximum).

Chaque passe résout, trouve les éléments dont l'erreur estimée est la plus grande, les découpe (ainsi que le minimum de voisins nécessaires pour garder le maillage continu), puis résout à nouveau. Les nouveaux nœuds sur les faces courbes sont placés sur la surface exacte. Les résultats affichent alors un tableau et un graphique indiquant, pour chaque passe, les éléments, les inconnues, l'erreur estimée, la contrainte maximale (ou la température) et le déplacement (ou le flux thermique), ainsi qu'une ligne expliquant pourquoi l'étude s'est arrêtée : la cible est atteinte, les passes sont épuisées, le maillage suivant serait trop grand, ou une passe a échoué (vous voyez alors la dernière passe valide).

Lisez l'estimation comme une estimation. Elle (Zienkiewicz–Zhu ; comparée à des solutions exactes, elle représente 0.6 à 0.95 de l'erreur réelle) mesure l'erreur sur **toute la pièce**. Une contrainte maximale au niveau d'un trou ou d'un congé reste donc généralement un peu imprécise lorsque l'estimation semble faible : pour une concentration de contrainte, fixez la cible sous 1 % et observez la valeur maximale se stabiliser d'une passe à l'autre. Dans un angle intérieur vif ou au bord d'une face fixe, la contrainte réelle est infinie : l'estimation n'y arrive donc jamais, et ce sont les passes qui s'épuisent.

**Fréquences propres et flambage.** Pour une étude de fréquences propres, l'estimation couvre chaque mode demandé, chacun compté de la même façon ; le tableau et le graphique suivent les deux premières fréquences. Sur une pièce ne comportant que des faces planes, une fréquence ne peut que baisser d'une passe à l'autre (chaque maillage conserve le précédent) ; les faces courbes se rapprochent aussi de leur forme réelle, ce qui peut faire varier une fréquence un peu dans un sens ou dans l'autre. Pour le flambage, l'estimation couvre la précontrainte et les modes de flambage, et le tableau suit les facteurs de charge. Vérifié sur une barre d'acier de 100 × 10 × 10 mm : la première fréquence se stabilise de 812.4 à 811.9 Hz en quatre passes, soit 0.4 % sous la valeur d'Euler–Bernoulli (qui néglige le cisaillement), et le facteur de charge de la colonne est à moins de 0.5 % de celui d'Euler.

## Maintenir et charger

Chaque étude nécessite au moins un appui et, pour la contrainte, au moins une charge.

1. Appuyez sur {{ui:Fixe}} dans la barre d'outils. Le nouvel appui est sélectionné et attend des faces : cliquez sur les faces maintenues immobiles (cliquer à nouveau sur une face la retire). Appuyez sur **Terminer la sélection** ou {{key:Esc}} lorsque vous avez fini. Des cônes bleus marquent les faces maintenues.
2. Appuyez sur {{ui:Force}} et cliquez sur les faces sur lesquelles agit la force. Dans le panneau, saisissez la **Force totale** en newtons et choisissez sa **Direction** : rentrant dans la face, ou le long d'un axe. La force est répartie sur les faces choisies au prorata de leur aire. Des flèches orange la montrent.
3. Appuyez sur {{ui:Pression}} pour une pression en MPa (N/mm²) poussant dans les faces choisies ; une pression négative tire.

D'autres types figurent dans la liste **Ajouter** du panneau : une **Face sans frottement** (la face peut glisser le long d'elle-même, mais ne peut pas s'en éloigner ; utilisez-la pour les plans de symétrie et les appuis lisses) et **Gravité** (le poids propre de la pièce, 9.81 m/s², dans la direction que vous choisissez).

Un appui qui laisse la pièce libre de glisser ou de tourner est refusé, avec l'indication du mouvement resté libre.

## Résoudre et lire les résultats

Appuyez sur {{ui:Résoudre}}. Le calcul s'exécute en arrière-plan ; **Arrêter** l'annule. Ensuite :

- La pièce est colorée selon la **contrainte de von Mises** ; choisissez **Déplacement** ou **Coefficient de sécurité** dans **Afficher**. La légende donne l'échelle.
- Placez le pointeur sur la pièce pour lire les valeurs sous lui.
- Cochez **Forme déformée** pour voir la pièce pliée (le mouvement est amplifié par l'**Échelle** ; le mouvement réel est celui du tableau).
- Le tableau indique la contrainte maximale et son emplacement, le déplacement maximal, le plus petit **coefficient de sécurité** (limite d'élasticité ÷ contrainte de von Mises ; en dessous de 1, le matériau cède), la charge appliquée et les **réactions** aux appuis (elles équilibrent la charge), ainsi que le maillage utilisé.

Pour les **fréquences propres**, choisissez ce **Type**, indiquez le nombre de **Modes**, puis résolvez. Chaque mode affiche sa fréquence et sa forme (les formes sont mises à l'échelle 1 sur leur mouvement maximal).

Si vous modifiez la pièce, les résultats sont marqués comme périmés : résolvez à nouveau.

## Plasticité et contact (études non linéaires)

Deux autres types d'étude dépassent l'hypothèse « le matériau reste élastique » :

- **Non linéaire (le matériau cède)** suit la droite du matériau jusqu'à sa limite d'élasticité, puis une pente plus faible (**Pente après limite d'élasticité**, 1 % de E si laissé vide). La charge augmente par **Pas de charge** ; un pas qui ne converge pas est divisé par deux automatiquement. Les résultats ajoutent la **Déformation plastique** aux tracés et indiquent quelle part de la charge a été supportée. Si un pas ne converge toujours pas, l'étude s'arrête au dernier pas valide, et le panneau ⚠ Problèmes indique où : la pièce a épuisé sa résistance à cet endroit (un effondrement), ou les pas sont trop grands.
- **Contact entre pièces** permet à des pièces distinctes de la pièce de se pousser mutuellement. Ajoutez une **Paire de contact**, choisissez les faces du côté A (celles qui appuient) avec {{ui:Choisir les faces}}, puis le côté B avec {{ui:Choisir les faces du côté B}}. Les pièces **sans frottement** poussent, glissent et se séparent ; les pièces **collées** restent fixées. Chaque pièce est maillée séparément, si bien qu'un petit écart entre elles ne pose pas de problème. Le contact est une méthode de pénalité : les pièces s'enfoncent légèrement l'une dans l'autre (le **facteur de pénalité** × E ÷ taille d'élément fixe la rigidité du contact). Le tableau indique le plus grand enfoncement, et le panneau Problèmes avertit lorsqu'il dépasse 1 % de la taille d'élément : augmentez le facteur ou utilisez des éléments plus petits.

Les deux utilisent le maillage tétraédrique. Le frottement, les grands glissements et les grandes rotations ne sont pas résolus ici.

## Exécuter dans CalculiX

**Exporter › Deck CalculiX (.inp)** (ou {{ui:Enregistrer un deck CalculiX (.inp)}} dans le panneau) enregistre l'étude comme fichier d'entrée pour CalculiX, un programme distinct que vous installez et exécutez vous-même : le même maillage, matériau, appuis, charges et paires de contact, en mm, N et MPa. Exécutez-le, puis **Exporter › Résultats CalculiX (.frd)** relit son fichier de résultats sur le même maillage et affiche le déplacement (et la contrainte de von Mises lorsque le fichier contient des contraintes). Si vous avez modifié la pièce ou la taille d'élément entre-temps, le maillage n'est plus le même et PartCraft le signale : enregistrez alors un nouveau deck.

## Jusqu'où lui faire confiance

PartCraft vérifie son solveur contre des formules de calcul manuel (la flèche en bout de porte-à-faux PL³/3EI à 1 % près, l'allongement d'une barre PL/AE exactement, la première fréquence d'un porte-à-faux à 3 % près, la contrainte autour d'un trou dans une plaque). Gardez néanmoins ces limites à l'esprit :

- **Le maillage.** Avec des tétraèdres, PartCraft vérifie la flèche et la contrainte de flexion d'un porte-à-faux (à 0.3 % près), la contrainte au niveau d'un trou dans une plaque (Kt, à environ 1 % près), un tube épais sous pression (Lamé, à 0.3 % près) et la première fréquence (à 0.4 % près). Le tableau affiche la **qualité du maillage** (les plus petits et les plus grands angles entre faces d'éléments ; en dessous d'environ 10°, un élément est médiocre) et une **erreur estimée sur la contrainte** : si elle dépasse quelques pour cent, résolvez à nouveau avec une taille d'élément plus petite, ou laissez **Raffiner automatiquement** le faire. Sur une plaque avec un trou et une barre avec deux entailles de rive, le raffinement automatique a atteint 1 % près du Kt de référence avec environ un sixième des inconnues qu'exigeait un maillage plus fin partout. Avec des cubes voxel, un trou ou un congé forme des marches à la taille du cube, si bien que la contrainte y est approximative.
- **Les angles intérieurs vifs et les bords des faces fixes n'ont pas de contrainte maximale réelle.** La valeur y continue d'augmenter lorsque les éléments rétrécissent. Lisez les contraintes un peu à l'écart de ces endroits, ou arrondissez l'angle dans le modèle.
- **Résultats à lire.** Outre la contrainte de von Mises, le déplacement et le coefficient de sécurité, une étude tétraédrique affiche la **contrainte principale maximale et minimale** (traction et compression) et la **déformation équivalente**. Cochez **Afficher le maillage** pour voir les éléments.
- **Les études statiques sont linéaires et élastiques.** Pour la plasticité et le contact, utilisez les types d'étude non linéaires ci-dessus ; les grands déplacements et la fatigue ne sont pas résolus. La chaleur, la contrainte thermique et le flambage linéaire ont leurs propres types d'étude : voir [Chaleur, contrainte thermique et flambage](topic:thermal-and-buckling).
- **Tous les matériaux sont identiques dans toutes les directions.** Les plastiques imprimés en 3D sont plus faibles d'une couche à l'autre, souvent d'un tiers ou plus.
- Il s'agit d'une version de laboratoire : vérifiez autrement les pièces importantes.

## Mettre à jour pendant la modification (Live)

Cochez **Mettre à jour pendant mes modifications** dans le bloc Résoudre, et les réponses de Simulation suivent vos modifications. Modifiez une cote, une charge, le matériau ou l'environnement, et une **réponse rapide** apparaît aussitôt, calculée avec des éléments quatre fois plus grands que ceux de l'étude ; lorsque vous vous arrêtez un instant (une seconde environ), la **réponse affinée** propre à l'étude remplace la réponse rapide. Les résultats indiquent laquelle vous regardez (« Réponse rapide » ou « Réponse affinée ») ainsi que la taille des éléments. La réponse rapide convient pour la tendance et l'ordre de grandeur : sur un porte-à-faux en acier, elle était à 1 % près pour la flèche et à environ 4 % pour la contrainte, par rapport à la réponse affinée. Fiez-vous à la réponse affinée pour les chiffres que vous utiliserez. Les études statiques, de fréquences propres, thermiques et de flambage fonctionnent ainsi ; Live est un réglage d'affichage et n'est pas enregistré dans la pièce. Un calcul que vous lancez vous-même reste tel quel jusqu'à la modification suivante.

## Savoir ce qui cède en premier (Rupture)

Pour une étude statique ou de flambage, appuyez sur **Qu'est-ce qui cède en premier ?** dans le bloc **Rupture**. PartCraft augmente les charges de l'étude (forces, pressions et poids ensemble) jusqu'à ce que la pièce cède, et liste, du pire au meilleur, **le facteur de charge jusqu'à la première plastification** (le facteur, sur les charges actuelles, auquel la contrainte de von Mises maximale atteint la limite d'élasticité du matériau, avec un repère rouge à l'endroit où cela se produit) et **le facteur de charge jusqu'au flambage** pour les mêmes appuis et charges. Un facteur de 4.3 signifie que la pièce supporte 4.3 fois sa charge avant de plastifier ; **un facteur inférieur à 1 signifie qu'elle cède déjà sous la charge actuelle**, et cela apparaît dans la liste des Problèmes comme une erreur (le constat le plus faible est affiché comme remarque, même lorsque tout tient). Les facteurs proviennent d'une étude linéaire sur tétraèdres à votre taille d'élément : ils valent donc ce que vaut cette étude. La contrainte au niveau d'une face fixe ou d'un angle vif n'a pas de pic réel (voir plus haut), et le facteur de plastification y sera du côté prudent. Votre assistant peut effectuer la même vérification avec l'outil `break_run`.

## Liens associés

- [Chaleur, contrainte thermique et flambage](topic:thermal-and-buckling)
- [Faire croître une forme à partir des charges (Génératif)](topic:generative-design)
- [Mesurer distances, angles et masse](topic:measure)
- [Ce qui n'est pas encore disponible](topic:not-built-yet)
