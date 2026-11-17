---
title: "Fonctions et leurs options"
summary: "Chaque fonction de la barre d'outils avec ses réglages, ses valeurs par défaut et ses limites, de l'extrusion au congé, à la coque et aux solides STEP importés ; les actions communes à toutes les fonctions et les réglages de la pièce."
keywords: "fonctions, pas encore disponible, extrusion, découpe, révolution, découpe par révolution, trou, lamage, réseau linéaire, réseau circulaire, symétrie, congé, chanfrein, coque, import, options, valeurs par défaut, réglages, résolution, courbes, facettes, désactiver, retour en arrière"
from: ab3a598e
---

Les fonctions sont listées dans l'historique dans l'ordre de leur création et reconstruites de haut en bas. Chacune porte le nom de son type, suivi d'un numéro : Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft construit chaque fonction avec le noyau maillage. {{ui:Fillet}} et {{ui:Chamfer}} agissent sur les arêtes droites situées entre deux faces planes, et {{ui:Shell}} ouvre des faces planes. Les solides importés nécessitent un noyau exact, que cette version ne possède pas : ils ne sont pas encore disponibles, et leur section ci-dessous les décrit comme une pièce créée par une version antérieure les conserve. Voir [Le noyau maillage](topic:solid-kernels) et [Ce qui n'est pas encore disponible](topic:not-built-yet).

## Esquisse

| Réglage | Remarques |
|---|---|
| Plan | Plan de face, de dessus ou de droite, ou une face plane. Affiché sans modification : pour déplacer une esquisse, créez-en une nouvelle |
| État | Entièrement définie, Sous-définie (avec les degrés de liberté), Sur-définie ou Vide |
| Géométrie, Relations | Nombre de courbes, de points et de relations |
| Cotes de pilotage | Chaque cote de l'esquisse, modifiable |

Boutons : {{ui:Edit sketch}}, {{ui:Export as DXF}}.

## Extrusion et découpe

{{ui:Extrude}} et {{ui:Cut}} créent la même fonction, avec des réglages de départ différents.

| Réglage | Choix | Extrusion démarre à | Découpe démarre à |
|---|---|---|---|
| Opération | Bossage (ajouter de la matière), Couper (retirer de la matière), Intersection (garder le recouvrement), Nouveau corps (pas encore disponible dans cette version) | Bossage | Couper |
| Fin | Aveugle (une profondeur), Plan médian (dans les deux sens), Traversant | Aveugle | Traversant |
| Profondeur (mm) | Supérieure à 0, jusqu'à 1,000,000 | 10 | 10 |
| Inverser le sens | Désactivé / activé | Désactivé | Désactivé |

- Profil : chaque boucle fermée de lignes pleines, de cercles et d'arcs de l'esquisse. Les boucles situées à l'intérieur d'autres boucles sont des trous.
- Traversant ne fonctionne que pour les découpes. Elle traverse la pièce de part en part du côté choisi.
- Une découpe pénètre dans la matière, à l'opposé du côté extérieur du plan de l'esquisse ; Inverser le sens la retourne.

## Révolution et découpe par révolution

| Réglage | Choix | Défaut |
|---|---|---|
| Opération | Bossage, Couper | Bossage ({{ui:Revolve}}), Couper ({{ui:More}} › {{ui:Revolved cut}}) |
| Angle (°) | Supérieur à 0, jusqu'à 360 | 360 |
| Axe | Première ligne d'axe, toute ligne ou ligne d'axe de l'esquisse, ou une fonction axe située dans le plan de l'esquisse | Première ligne d'axe |

- Le profil doit rester d'un seul côté de l'axe. Il peut le toucher.
- L'axe d'une révolution peut servir aux réseaux circulaires et aux liaisons d'assemblage.

## Trou

| Réglage | Choix | Défaut |
|---|---|---|
| Type | Simple, Lamage | Simple |
| Diamètre (mm) | Supérieur à 0 | 6 |
| Traversant | Activé / désactivé | Activé |
| Profondeur (mm) | Lorsque Traversant est désactivé | 10 |
| Lamage ⌀ | Plus large que le trou | 11 |
| Profondeur du lamage | Moins profonde qu'un trou aveugle | 6 |
| Inverser le sens | Désactivé / activé | Désactivé |

- Un trou à chaque point isolé de l'esquisse (points créés avec l'outil Point). Le panneau indique leur nombre.
- Les trous sont percés perpendiculairement au plan de l'esquisse, dans la matière.
- L'axe de chaque trou peut servir aux liaisons d'assemblage (« Hole1, hole 2 »).

## Réseau linéaire

| Réglage | Choix | Défaut |
|---|---|---|
| Fonctions à copier | Toute fonction solide située au-dessus | La fonction sélectionnée, sinon la dernière fonction solide |
| Direction | Axe X, axe Y, axe Z ; une ligne d'une esquisse antérieure ; l'axe d'une révolution ; une arête choisie | Axe X (ou l'arête choisie lors de l'ajout) |
| Espacement (mm) | Tout nombre | 20 |
| Nombre | 1 à 1000, original compris | 3 |
| Inverser le sens | Désactivé / activé | Désactivé |

## Réseau circulaire

| Réglage | Choix | Défaut |
|---|---|---|
| Fonctions à copier | Comme pour le réseau linéaire | Comme pour le réseau linéaire |
| Axe | Comme pour Direction ci-dessus | L'axe de la dernière révolution, sinon l'axe Y (ou l'arête choisie) |
| Angle (°) | Supérieur à 0, jusqu'à 360. 360 répartit les copies également sur un tour complet ; une valeur inférieure les répartit sur cet angle | 360 |
| Nombre | 1 à 1000, original compris | 6 |
| Inverser le sens | Désactivé / activé | Désactivé |

## Symétrie

| Réglage | Choix | Défaut |
|---|---|---|
| Symétrie | Le corps entier (tel qu'il est construit à ce stade), ou des fonctions choisies | La fonction sélectionnée, sinon le corps entier |
| Plan de symétrie | Plan de face, de dessus ou de droite ; une face plane | Plan de droite, ou la face plane choisie lors de l'ajout |

## Congé et chanfrein

Dans cette version, le noyau maillage les construit sur des arêtes droites situées entre deux faces planes (angles extérieurs ou intérieurs), avec un seul rayon. Une arête ronde affiche : « Congé : dans cette version, seules les arêtes droites entre deux faces planes sont prises en charge (le noyau maillage les construit). Arrondissez ou chanfreinez les arêtes courbes dans l'esquisse. » ; là où des arêtes arrondies se rejoignent à un angle, elles sont mitrées, et la fonction avertit : « Congé par le noyau maillage : là où les arêtes arrondies se rejoignent, elles sont mitrées, et non raccordées. » Tous les types de chanfrein (distance égale, deux distances, distance et angle, avec **Inverser les côtés**) fonctionnent. Voir [Arrondir, chanfreiner et évider](topic:fillet-chamfer-shell).

| Réglage | Choix | Défaut |
|---|---|---|
| Rayon (mm) (Congé) | Supérieur à 0 | 2 |
| Distance (mm) (Chanfrein) | Supérieure à 0, identique sur les deux faces | 1 |
| Arêtes | Les arêtes choisies, chacune listée par les deux faces qu'elle relie (« face d'extrémité de Extrude1 × côté de Extrude1 »), avec **Retirer** | Les arêtes choisies lors de l'ajout |

- Choisissez les arêtes avant le bouton ({{key:Shift}}+clic pour plusieurs), ou choisissez le bouton sans rien sélectionner puis cliquez sur les arêtes ensuite.
- {{ui:Pick edges}} (ou double-cliquez sur la fonction) modifie les arêtes.
- Les arêtes sont retenues par les deux faces qu'elles relient, si bien qu'elles survivent aux changements de dimension en amont.

## Coque

Le noyau maillage la construit. Seules les faces planes peuvent être ouvertes (« Coque : dans cette version, seules les faces planes peuvent être ouvertes (le noyau maillage la construit). ») ; les parois d'épaisseurs différentes ne sont pas encore disponibles. Voir [Arrondir, chanfreiner et évider](topic:fillet-chamfer-shell).

| Réglage | Choix | Défaut |
|---|---|---|
| Paroi (mm) | Supérieure à 0 | 2 |
| Parois vers l'extérieur (les faces restent à l'intérieur) | Désactivé : les parois vont vers l'intérieur. Activé : les parois vont vers l'extérieur | Désactivé |
| Faces ouvertes | Les faces retirées, au moins une, avec **Retirer** | Les faces choisies lors de l'ajout |

{{ui:Pick faces}} modifie les faces ouvertes.

## Solide importé

Créé en ouvrant un fichier STEP, STL, OBJ ou 3MF : un corps solide de triangles sans historique propre ([Ouvrir un fichier STEP](topic:import-step), [Ouvrir un STL, OBJ ou 3MF](topic:open-meshes)). Il indique le fichier d'origine et ce que l'import a réparé ; **Unités du fichier**, **Vers le haut dans le fichier** et **Utiliser pour** restent modifiables. Un solide STEP importé par une version antérieure dotée du noyau exact reste dans l'historique, marqué comme pas encore disponible ; rouvrez le fichier STEP pour l'importer en triangles.

| Réglage | Choix | Défaut |
|---|---|---|
| Vers le haut dans le fichier | Z vers le haut (la plupart des CAO), Y vers le haut | Z vers le haut |

Les réseaux et les symétries peuvent copier un solide importé, mais pas un congé, un chanfrein ou une coque.

## Ce que toutes les fonctions ont en commun

En bas du panneau de chaque fonction :

| Bouton | Effet |
|---|---|
| {{ui:Suppress}} / {{ui:Unsuppress}} | Désactive ou réactive la fonction. Les fonctions qui en dépendent ne sont pas construites tant qu'elle est désactivée |
| {{ui:Roll back to here}} | Ne construit que les fonctions situées au-dessus de celle-ci. Les nouvelles fonctions s'insèrent à la barre de retour en arrière |
| {{ui:Move up}} / {{ui:Move down}} | Réordonne, lorsque rien de ce qu'elle utilise ne se retrouverait en dessous. Sinon le bouton est grisé, avec la raison affichée |
| {{ui:Delete}} | Supprime la fonction et, après confirmation, chaque fonction qui l'utilise |
| Nom | La renomme (60 caractères maximum) |

Les fonctions avec une esquisse listent aussi **Cotes de l'esquisse**, modifiables sur place.

## États dans l'historique

| État | Affiché comme | Signification |
|---|---|---|
| Construite | Normal | Tout va bien |
| Avertissement | ⚠ | Construite, avec un point à vérifier : « Sur-définie : 1 relation n'est pas nécessaire. » ou « Il ne reste rien de la pièce après cette opération. » |
| Erreur | ⚠ erreur, en rouge | Impossible à construire ; le message indique pourquoi |
| Pas encore disponible | ⚠ pas encore disponible | Nécessite une fonction en échec, désactivée ou ramenée en arrière, ou nécessite un noyau exact, que cette version ne possède pas (« Balayage : pas encore disponible. … ») |
| Désactivée | désactivée | Désactivée |
| Revenue en arrière | grisée, sous la barre de retour en arrière | Non construite tant que vous ne revenez pas en avant |

## Réglages de la pièce

Cliquez dans l'espace vide pour ne rien sélectionner. Le panneau de droite affiche **Pièce** :

- **Nom** : le nom de la pièce, utilisé pour les noms de fichiers et le cartouche du dessin (120 caractères maximum).
- **Courbes** : voir ci-dessous.

### Résolution des courbes

Le noyau maillage construit le solide lui-même à partir de facettes planes ; la vue, STL, 3MF, le STEP facetté, le volume et les vues du dessin suivent donc **Courbes** : le nombre de facettes par tour complet.

| Réglage | Facettes par tour | Volume d'une forme ronde |
|---|---|---|
| Grossier (32 par tour) | 32 | Environ 0.64 % sous la valeur réelle |
| Normal (64 par tour) | 64 | Environ 0.16 % sous (par défaut) |
| Fin (128 par tour) | 128 | Environ 0.04 % sous |
| Très fin (256 par tour) | 256 | Environ 0.01 % sous |

Des courbes plus fines donnent des exports et des vues plus lisses, et des reconstructions plus lentes. Ce réglage est enregistré dans le fichier de la pièce.

## Pas encore disponible

Les congés à rayon variable, les congés et chanfreins sur arêtes rondes, les coques ouvrant des faces courbes, la dépouille sur des faces courbes, le balayage, le lissage, la nervure, les solides STEP à faces courbes exactes, les nouveaux corps, les dépouilles, « jusqu'à » une face ou un sommet, et les références sur les faces et arêtes du solide nécessitent un noyau exact, que cette version ne possède pas. Également pas encore disponibles : les trous taraudés et fraisés. Voir [Ce qui n'est pas encore disponible](topic:not-built-yet).
