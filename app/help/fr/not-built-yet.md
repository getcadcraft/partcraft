---
title: Ce qui n'est pas encore disponible
summary: Tout ce que cette version de PartCraft ne fait pas encore, des balayages en torsion à l'affichage en pouces, en passant par les cotes de dessin et les sous-assemblages, avec ce qu'il faut faire à la place aujourd'hui.
keywords: manquant, pas encore, limites, limitations, feuille de route, noyau exact, congé, chanfrein, coque, balayage, lissage, import STEP, simulation, fabrication, balayage en torsion, tangence de fin de lissage, congé de face, équations, pouces, cotes de dessin, sous-assemblages, cloud, tablette, téléphone
from: 9b868162
---

PartCraft est une version préliminaire. Cette page liste ce qu'il ne fait pas encore, pour que vous ne le cherchiez pas, et ce qu'il faut faire à la place aujourd'hui. Aucune de ces fonctions n'a de date.

## Nécessite un noyau exact

Cette version construit chaque pièce avec le noyau de maillage (voir [Le noyau de maillage](topic:solid-kernels)). Tout ce qui suit nécessite un noyau géométrique exact, que cette version n'a pas encore. Les pièces enregistrées avec ces fonctions s'ouvrent toujours : les fonctions restent dans l'historique, marquées comme non réalisées, et sont conservées lors de l'enregistrement.

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| {{ui:Congé}} et {{ui:Chanfrein}} sur des arêtes arrondies ; congés dont le rayon varie le long de l'arête ; arrondis raccordés en douceur là où ils se rencontrent (le noyau de maillage les coupe en biseau) | Congé et Chanfrein fonctionnent sur les arêtes droites entre faces planes ; arrondissez les autres angles dans l'esquisse avant l'extrusion ({{ui:Congé}} dans une esquisse, {{key:F}}) |
| {{ui:Coque}} avec des faces courbes ouvertes ; parois d'épaisseurs différentes | Ouvrez des faces planes ; ajoutez de la matière par extrusions là où une paroi doit être plus épaisse |
| {{ui:Balayage}}, {{ui:Lissage}}, {{ui:Dépouille}} sur des faces courbes ; extrusion jusqu'à une face, la face suivante ou un sommet ; extrusions coniques | Extrudez ou faites une révolution, par étapes si besoin ; extrudez sur une profondeur mesurée |
| {{ui:Nervure}}, {{ui:Bride-base}}, {{ui:Bride sur arête}} et patrons à plat | Extrudez la plaque ou le profil de la nervure |
| Surfaces : finir une {{ui:Forme}} dans la pièce, {{ui:Surface de remplissage}}, {{ui:Lissage de surface}}, {{ui:Surface de Gordon}}, {{ui:Couture}}, {{ui:Épaissir}}, {{ui:Surface décalée}}, {{ui:Prolonger la surface}}, {{ui:Ajuster la surface}} | Non disponible |
| Plusieurs corps : {{ui:Combiner}}, {{ui:Déplacer le corps}}, {{ui:Mettre le corps à l'échelle}}, {{ui:Répétition le long d'un chemin}}, fonctions qui créent un nouveau corps | Un seul solide ; les répétitions et les symétries copient les fonctions |
| Esquisses, plans, axes et points sur des faces que seul un noyau exact peut trouver (une face créée par un congé, la paroi d'un trou, une face d'un solide importé) | Esquissez sur les plans de base, les plans de référence et les faces planes des extrusions et des révolutions |
| Un résultat de conception générative ouvert comme pièce ou ajouté à une pièce (il devient un solide importé) | Téléchargez le résultat en STL ou en STEP |
| Modification des faces courbes d'un fichier STEP ouvert comme surfaces exactes ; STEP exact des faces en spline, balayées et de révolution issues d'un fichier STEP, côtés en spline, filetages modélisés, corps et assemblages STL / OBJ / 3MF ; STEP pour les autres modeleurs de pièces | {{ui:Ouvrir}} lit le STEP en triangles et conserve les faces planes, cylindres, cônes, sphères et tores du fichier pour l'export ([Ouvrir un fichier STEP](topic:import-step)) ; {{ui:Exporter}} › {{ui:STEP AP242 (solide exact)}} écrit exactement chaque face analytique et les conserve sous forme de facettes ([Exporter](topic:export-files#for-other-cad-programs-step)) ; la macro pour un autre modeleur de pièces écrit toujours |
| Vraies courbes d'arc dans les vues de dessin | Les vues et les vues en coupe sont dessinées à partir des facettes |
| Volumes, aires et distances exacts | {{ui:Mesurer}} donne les valeurs du solide facetté, un peu faibles sur les pièces rondes ; un réglage **Courbes** plus fin les rapproche |

Certaines lignes des tableaux ci-dessous proposent une de ces fonctions comme solution de contournement. Ces suggestions s'appliquent lorsqu'un noyau exact sera de retour.

## Fonctions

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Congés de faces, congés en demi-rond complet, congés dont les rayons sont fixés en des points le long d'une arête | {{ui:Congé}} constant ou à variation linéaire ; plusieurs fonctions de congé |
| Coques dont les parois ont des épaisseurs différentes | Une seule épaisseur de {{ui:Coque}} ; ajoutez de la matière par extrusions là où une paroi doit être plus épaisse |
| Dépouille sur les faces de forme libre (spline) | {{ui:Dépouille}} fonctionne sur les faces planes, cylindriques et coniques |
| Balayages en torsion, balayages à paroi mince et balayages de surface ; tangence de fin sur la fonction Lissage ; un lissage avec un seul rail guide ; chemins en spline | {{ui:Balayage}} avec une orientation fixe ou une échelle en fin ; un lissage avec deux rails guides ou plus : voir [Balayage, lissage et dépouille](topic:sweep-loft-draft) |
| Nervures issues d'arcs ou de splines ; nervures développées d'équerre sur l'esquisse (depuis une vue de dessus) ; dépouille sur les nervures ; plusieurs nervures issues d'une même esquisse | {{ui:Nervure}} à partir d'une chaîne de lignes dans le plan propre de la nervure : voir [Nervures et goussets](topic:rib) |
| « Jusqu'à » une surface courbe, « jusqu'à la suivante » s'arrêtant sur une face courbe | Jusqu'à une face plane ou un plan de référence |
| Trous contre-percés, filetages en pouces et filetages de tuyauterie, filetages coniques, sorties de filetage et débuts de filetage chanfreinés | Lamage à faible profondeur ; filetages métriques ISO et trapézoïdaux, cosmétiques ou modélisés : voir [Filetages sur arbres et alésages, dessinés ou modélisés](topic:threads) |
| Extrusions à fonction mince | Dessinez les deux parois du profil |
| Copies de répétition ignorées une à une, motifs de remplissage | Utilisez des fonctions séparées ; répétitions le long d'une courbe : {{ui:Répétition le long d'un chemin}} |
| Répétitions copiées, symétries, congés, chanfreins, coques et solides importés | Copiez l'esquisse ou la fonction sur laquelle ils reposent, ou répétez-la |
| Tangence exacte (G1) aux points singuliers d'une forme ; fusion des pièces de correctif d'une forme en faces plus grandes | Augmentez le niveau de la forme : les correctifs approximés deviennent plus petits ; voir [Formes libres avec Forme](topic:form-surfaces) |
| Une forme faite de plusieurs morceaux fermés séparés dans une seule fonction ; ponts entre des formes | Une seule pièce fermée par fonction Forme ; reliez-les avec {{ui:Joindre}} |
| Sélection de corps de surface dans la vue (sauf les points de découpe et de correctif) ; congés de surface ; annulation de la découpe ; correctifs G2 ; surfaces de Gordon tangentes à des voisines courbes (la tangence aux plans et aux faces planes est réalisée) | Choisissez-les par nom dans le panneau de la fonction ; épaississez d'abord, puis faites un congé sur le solide |
| Une liste de corps dans l'historique ; exclure les corps masqués des exports | Renommez et masquez les corps dans la liste des corps du panneau de la pièce ; pour exclure un corps, supprimez ou désactivez la fonction qui l'a créé |
| Une mise à l'échelle non uniforme qui garde les cylindres et les cônes analytiques ; mise à l'échelle non uniforme des surfaces décalées | {{ui:Mettre le corps à l'échelle}} rend les faces courbes des B-splines fermées (à 0.0000004 mm près) ; une mise à l'échelle uniforme reste exacte |
| Combinaison de corps de surface ; sommes de Minkowski | {{ui:Couture}} ou {{ui:Épaissir}} d'abord, puis {{ui:Combiner}} |
| Analyse de tolérances : empilements qui tournent les angles (boucles vectorielles 2D et 3D), sensibilités calculées à partir de la géométrie, Monte Carlo avec d'autres lois de probabilité, tolérances de taille sur les cotes d'esquisse, tolérance bonus selon la condition de matière | {{ui:Cumul}} dans un assemblage : une direction, pire cas et RSS, tolérances saisies, issues du cartouche ou des cadres GD&T : voir [Cumuls de tolérances](topic:tolerance-stackup) |
| Imbrication : ordre de coupe et points d'amorce, coupe des arêtes communes une seule fois, pièces devant rester ensemble ; restes de bobines, stock partagé entre projets | {{ui:Imbriquer les pièces plates sur des feuilles…}} avec espacement, marges, rotations et sens du grain : voir [Imbriquer les pièces plates sur des feuilles](topic:nest-flat-parts) ; les plaques restantes sont conservées et utilisées en premier : voir [Conserver et réutiliser les chutes](topic:nest-offcuts) ; planifiez la coupe dans le logiciel de votre découpeuse |
| Tôlerie : ourlets, décalages, brides en onglet et brides de contour ; brides sur les arêtes courbes ou sur les faces d'une bride-base pliée ; pliages esquissés ; fermetures de coin ; outils de formage ; conversion d'un solide en tôle ; patron à plat d'une bride-base pliée avec découpes ; tables de pliage | {{ui:Bride-base}} (une plaque ou un profil plié), {{ui:Bride sur arête}} sur les arêtes droites d'une plaque avec dégagements de pliage, et le patron à plat avec un facteur K : voir [Tôlerie](topic:sheet-metal) |
| Analyse de dépouille sur les assemblages ; recherche de la ligne de joint ; analyse de l'épaisseur des parois | {{ui:Analyse de dépouille}} sur la pièce en Conception : voir [Vérifier la dépouille pour le moulage et la fonderie](topic:draft-analysis) ; ouvrez chaque pièce d'un assemblage pour la vérifier |

## Esquisses

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Ellipses, arcs tangents, coniques, splines à degré ou poids fixés (NURBS) | Splines (cubiques), arcs et cercles avec relations de tangence |
| Un point sur une spline (une relation), relations de courbure (G2) | Placez le point propre à la spline là où elle doit passer |
| Copies de décalage de splines qui suivent les modifications ultérieures ; décalages de chaînes avec angles vifs de spline | Décalez à nouveau après la modification ; arrondissez d'abord l'angle |
| Copies de répétition restant liées à l'original ; répétitions le long d'une courbe | Répétez à nouveau après une modification |
| Projection d'arêtes circulaires en forme libre ou inclinées, géométrie projetée qui suit la pièce | Projetez les arêtes circulaires droites et parallèles, puis cotez |
| Cotes pilotées (de référence) | Lisez les dimensions dans le panneau ou dans les informations de la pièce |
| Relations colinéaires | Parallèle avec une distance de 0 |
| Collage dans un autre programme (presse-papiers du système) | Exportez en DXF, STEP, STL ou 3MF |
| Saisie d'arcs, de coordonnées relatives ou polaires | Saisissez des lignes et des cercles ; dessinez les arcs avec l'outil Arc |
| Sélection de géométrie sans pointeur | Nécessite un clic ou un toucher |

## Paramètres et unités

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Configurations qui changent les matériaux ; une table de conception CSV qui désactive des fonctions | Les configurations fixent des paramètres et activent ou désactivent des fonctions : voir [Configurations et tables de conception](topic:design-tables) ; `partcraft variants` crée par nom les configurations enregistrées, fonctions désactivées comprises : voir [Créer un lot de variantes à partir de vos configurations](topic:variant-pack) |
| Équations sur les nombres des panneaux propres aux fonctions les plus récentes (plan, balayage, dépouille et autres) | Écrivez-les dans un script ou avec `partcraft set` ([Scripts et ligne de commande](topic:scripts-and-cli)) |
| Une pièce affichée en pouces | Les dimensions s'affichent en millimètres ; saisissez `2in` dans une case de nombre ou une expression et elle devient 50.8 |

## Fichiers

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Modification des fonctions propres d'un solide STEP importé (il arrive sans historique) | Ajoutez ou retirez de la matière avec vos propres fonctions |
| Lecture des couleurs, noms, structure d'assemblage et PMI à partir du STEP | Non disponible |
| Export glTF, OBJ, IGES, Parasolid ; DWG d'une pièce 3D (seul le lot de variantes écrit un DWG : la feuille de dessin) | STL ou 3MF pour les maillages ; STEP pour les solides ; DXF pour la 2D |
| Ouverture d'IGES, de DXF ou de fichiers propres à d'autres programmes (les fichiers `.3dm` s'ouvrent comme un seul corps : [Ouvrir un modèle .3dm comme corps solide](topic:open-3dm-files)) | Demandez du STEP, ou un maillage STL, OBJ ou 3MF fermé : [Ouvrir un STL, OBJ ou 3MF](topic:open-meshes) |
| Structure d'assemblage (arbre avec les noms des pièces) dans le STEP exporté | Le STEP d'assemblage est un seul composé des solides placés |
| Enregistrement dans un dossier de votre choix sans passer par le téléchargement du navigateur | Activez « demander où enregistrer » dans les paramètres de téléchargement du navigateur |

## Dessins

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Cotes au-delà des trois dimensions d'ensemble (dimensions de trous, positions, tolérances de cotes) | Annotez le PDF, ou exportez en DXF et cotez dans un logiciel de CAO 2D |
| Plus d'une coupe ou d'un détail ; vues alignées, arrachées et auxiliaires | Une coupe et un détail par dessin |
| Texte libre, notes et tableaux sur la feuille (hors cartouche et blocs de révision) | La note de finition, ou un texte ajouté sur le PDF |
| Projection du premier dièdre, vues mobiles, feuilles en portrait | Troisième dièdre, disposition automatique, feuilles paysage A4–A0 et ANSI A–E |
| Vue en coupe en direct : plusieurs plans ou une boîte de coupe à la fois, contour autour de la coupe, enregistrement de la coupe dans le fichier | Un plan à la fois depuis {{ui:Vues}} › {{ui:Vue en coupe}} ; voir [Voir à l'intérieur avec une vue en coupe](topic:section-view) |
| Dessins d'assemblage avec plus de vues, de cotes ou de repères que vous pouvez déplacer | Une vue isométrique (ou éclatée) avec repères automatiques et la nomenclature |
| Copier-coller des symboles GD&T et de finition | Placez chacun avec Référence, Cadre ou Finition |
| Manuels : fichiers STEP dans {{ui:À partir d'un autre fichier…}} d'Illustrate, modèle transmis directement depuis ModelCraft ou BimCraft, images à la qualité du traceur de chemin, 3D interactive dans un PDF | Ouvrez le STEP dans Conception et lancez le manuel avec {{ui:À partir de la pièce ouverte}} ; enregistrez le modèle en glTF (.glb) ; images PNG de la vue 3D ; le fichier 3D interactif : voir [Démarrer un manuel dans Illustrate](topic:illustrate) |

## Assemblages

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Articulations à engrenage, à crémaillère, à came et à vis ; articulation à rotule limitée à un cône ; articulations sur faces courbes ou entre points | Articulations rigides, de révolution, glissières, cylindriques, planes, à rotule et à goupille dans une lumière, sur faces planes, chacune avec ses propres limites : voir [Construire un assemblage](topic:build-assembly) |
| Étapes d'éclatement qui font tourner des pièces, et glissement des pièces que placent les articulations | Étapes d'éclatement en ligne droite ; supprimez une articulation pour déplacer une pièce à la main |
| Sous-assemblages | Un seul niveau de pièces |
| Engrenages, cames, contact | Non disponible |

## Fabrication

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Ébauche 3D de faces courbes, ébauche adaptative 3D, usinage de reprise ; finition par isolignes, au crayon, radiale et en spirale ; passes adaptatives écrites en arcs | Face, poche, adaptatif 2D, contour, perçage et chanfrein à 2.5 axes : voir [Créer des parcours d'outil et du G-code](topic:manufacture) ; finition Parallèle et Scallop de l'ensemble du modèle : voir [Finition 3D](topic:finish-3d) |
| Parcours à 4 et 5 axes, tournage, palpage | Préparez un côté à la fois avec l'axe d'outil dans l'onglet Montage |
| Contrôle des collisions du porte-outil et de la queue d'outil | Surveillez les avertissements de longueur de goujure et vérifiez dans le simulateur de votre commande |
| Palpage, cycles de durée de vie d'outil et de sous-programmes, codes d'axes 4 et 5 et de tour dans un post-processeur ; chargement des fichiers de post-processeurs d'autres programmes | Écrivez ou modifiez un post-processeur dans le format propre à PartCraft : voir [Post-processeurs modifiables](topic:post-processors) |
| G-code en pouces (G20) | Millimètres (G21) seulement |

## Simulation et conception générative

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Études non linéaires : plastification, grandes déformations, contact entre pièces, fatigue | Statique linéaire et fréquences propres : voir [Vérifier la contrainte et la flèche](topic:simulation) ; gardez le coefficient de sécurité bien au-dessus de 1 |
| Flambage non linéaire (imperfections, post-flambage, saut de stabilité) | Facteurs de charge critique de flambage linéaire avec une grande marge : voir [Chaleur, contrainte thermique et flambage](topic:thermal-and-buckling) |
| Rayonnement entre faces (facteurs de forme), résistance de contact, matériaux dépendant de la température, inertie dans la contrainte thermique (ondes de choc thermiques) | Rayonnement vers l'environnement, contrainte thermique stationnaire ou quasi statique dans le temps, propriétés constantes : voir [Chaleur, contrainte thermique et flambage](topic:thermal-and-buckling) |
| Raffinement automatique pour la chaleur transitoire et les études à charge thermique ; mailles plus grossières là où l'erreur est faible ; cible sur une grandeur locale (la contrainte maximale en un point) | **Affiner automatiquement** pour les études statiques, de flambage, de fréquences propres et thermiques stationnaires, sur l'erreur de la pièce entière : voir [Vérifier la contrainte et la flèche](topic:simulation) ; sinon, réduisez la taille des éléments |
| Charges de palier et de boulon, forces à distance, moments, ressorts, déplacements imposés | Efforts et pressions sur les faces, pesanteur ; faces fixes et sans frottement |
| Simulation d'assemblages ; matériaux dont les propriétés varient selon la direction (couches imprimées, composites) | Une pièce, un seul matériau isotrope |
| Plusieurs fils d'exécution pour les études tétraédriques, le transfert de chaleur et la conception générative ; tout fil d'exécution sur une page non isolée d'origine croisée | Les études voxel, le flambage, la contrainte dans le temps et l'écoulement laminaire utilisent les fils d'exécution lorsque la page le permet : voir [Paramètres de PartCraft](topic:settings) |
| Écoulement turbulent avec une précision de conception (le modèle Spalart–Allmaras est disponible en expérimental : frottement en conduite de 30 à 34 % trop élevé, recollement après marche arrière de 21 à 39 % trop court ; prévu : mailles plus fines près des parois), chaleur dans l'écoulement, écoulement instationnaire (résolu dans le temps), surfaces libres, fluides non newtoniens, pièces en rotation | Écoulement laminaire, stationnaire et isotherme d'un fluide newtonien, ou le modèle turbulent expérimental pour des tendances qualitatives : voir [Simuler un écoulement de fluide](topic:flow-simulation) ; le panneau avertit lorsque le nombre de Reynolds dépasse le régime laminaire |
| Limites de contrainte et règles de fabrication (dépouilles en surplomb, directions d'usinage) en conception générative ; plusieurs matériaux dans une même forme | Forme la plus rigide pour un volume donné ; vérifiez le résultat dans Simulation : voir [Faire croître une forme à partir des charges](topic:generative-design) |
| Un résultat sous forme de solide modifiable (lisse, paramétrique) | STL, STEP facetté, ou une pièce avec le résultat en solide facetté importé |
| Conception de machines électriques : rotor tournant dans un stator, couple en fonction de l'angle, acier saturant, aimants qui perdent leur force au-delà du coude de leur courbe, courants de Foucault et pertes fer et cuivre ; champs magnétiques en 3D ou sur maillages courbes | Magnétostatique 2D linéaire sur une grille, dans la bibliothèque d'analyse : bobines, fer, aimants permanents sur leur droite de recul, entrefers, inductance et force d'attraction : voir [Champs magnétiques en 2D](topic:magnetic-fields-2d) |

## Scripts

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Aide au survol, points d'arrêt et pas à pas dans l'éditeur de scripts | Recherche, pliage du code et complétion sont présents (voir [Écrire et exécuter des scripts](topic:craftscript)) ; pour le reste, utilisez votre propre éditeur : {{ui:Enregistrer}} et {{ui:Ouvrir}} dans le groupe Script font entrer et sortir les scripts ; les fonctions intégrées sont listées dans [Le langage CraftScript](topic:craftscript-language) |
| Points d'arrêt et pas à pas dans un script | `disp` et `fprintf` en cours de route ; {{key:Mod+Enter}} exécute quelques lignes sélectionnées à la fois |
| Champs et tracés qu'un script affiche, dessinés dans l'espace de travail Conception ; scripts modifiant les paramètres de la pièce | Ils s'affichent dans l'espace de travail Script ; les scripts lisent les paramètres avec `param` (voir [Écrire et exécuter des scripts](topic:craftscript)) et les modifient dans l'onglet {{ui:Paramètres}} |
| Images et tableaux côte à côte avec des tracés ; modification d'un tracé (zoom, limites d'axes) avant enregistrement | Côte à côte affiche les tracés ; enregistrez un tracé en PNG, SVG ou CSV et terminez-le ailleurs |
| numpy et autres paquets Python ; Python hors ligne ; pliage de Python dans l'éditeur ; Pascal Script | La bibliothèque standard de Python, CraftScript et Lua : voir [Scripts en Python](topic:craftscript-python) |
| Passage de fonctions Lua aux fonctions intégrées ; appel d'une fonction de bibliothèque depuis Lua par un nom construit pendant l'exécution du script | Écrivez le nom de la fonction de bibliothèque dans le script (`cs.static_tet(…)`), ou appelez-la depuis un script CraftScript |

## L'application

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Enregistrement dans le cloud, partage et historique des versions | Non disponible pour l'instant. Enregistrez les fichiers sur votre ordinateur et conservez les versions par nom |
| PartCraft installé comme application sur iPad et iPhone | Utilisez PartCraft dans le navigateur de l'appareil ; sur Android et sur ordinateur, il fonctionne aussi dans CadCraft Studio (getcadcraft.com/download) |
| Menus contextuels (clic droit) | Barre d'outils et panneau de droite |
| Travail entièrement hors ligne depuis un premier démarrage | Seulement lorsque l'application a été enregistrée pour une utilisation hors ligne : voir [Travailler hors ligne](common:offline) |

Signalez ce qui vous manque le plus via la page d'assistance du site : elle oriente la suite.

## Engineer (générateurs et champs)

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Collecteurs, piquages et raccords sur l'échangeur généré ; courbes de température pour la résistance des matériaux ; pertes de té dans le collecteur | Les générateurs construisent le cœur et les tubes ; ajoutez les raccords dans Conception ; utilisez les valeurs à température ambiante du matériau avec un coefficient de sécurité |
| Ajout de générateurs depuis le répertoire de modules en un clic | {{ui:Ouvrir}} dans l'espace de travail Engineer ajoute un générateur à partir d'un fichier |
| Un fichier de champ plus fin que la taille de voxel propre au générateur ; lecture de fichiers `.vdb` | Enregistrez un champ plus fin depuis un script ; `.vdb` est écrit, non lu |
| Calculs de recipients sous pression selon un code | Les formules classiques de parois minces et épaisses, avec le coefficient de sécurité que vous choisissez ; pas de marge de code |
| Générateurs pour les autres applications | PartCraft seul dans cette version |
