---
title: Ce qui n'est pas encore disponible
summary: Tout ce que cette version de PartCraft ne fait pas encore, des balayages vrillés aux affichages en pouces, en passant par les cotes de dessin et les sous-assemblages, avec ce qu'il faut faire à la place aujourd'hui.
keywords: manquant, pas encore, limites, limitations, feuille de route, noyau exact, congé, chanfrein, coque, balayage, lissage, import STEP, simulation, fabrication, balayage vrillé, tangence en fin de lissage, congé de face, équations, pouces, cotes de dessin, sous-assemblages, cloud, tablette, téléphone
from: 97b10a29
---

PartCraft est une version précoce. Cette page liste ce que PartCraft ne fait pas encore, pour que vous ne le cherchiez pas, et ce qu'il faut faire à la place aujourd'hui. Rien ici n'a de date.

## Nécessite un noyau exact

Cette version construit chaque pièce avec le noyau de maillage (voir [Le noyau de maillage](topic:solid-kernels)). Tout ce qui suit nécessite un noyau géométrique exact, que cette version n'a pas encore. Les pièces enregistrées avec ces fonctions s'ouvrent toujours : les fonctions restent dans l'historique, marquées comme non disponibles, et sont conservées à l'enregistrement.

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| {{ui:Congé}} et {{ui:Chanfrein}} sur des arêtes arrondies ; congés dont le rayon varie le long de l'arête ; arrondis raccordés en douceur là où ils se rencontrent (le noyau de maillage les coupe en onglet) | {{ui:Congé}} et {{ui:Chanfrein}} fonctionnent sur les arêtes droites entre faces planes ; arrondissez les autres angles dans l'esquisse avant l'extrusion ({{ui:Congé}} dans une esquisse, {{key:F}}) |
| {{ui:Coque}} d'un ensemble de faces courbes ; parois d'épaisseurs différentes | Ouvrez des faces planes ; ajoutez de la matière par extrusions là où une paroi doit être plus épaisse |
| {{ui:Balayage}}, {{ui:Lissage}}, {{ui:Dépouille}} sur des faces courbes ; extrusion jusqu'à une face, la face suivante ou un sommet ; extrusions coniques | Extrudez ou révolutionnez, par étapes si nécessaire ; extrudez sur une profondeur que vous mesurez |
| {{ui:Nervure}}, {{ui:Bride-base}}, {{ui:Bride sur arête}} et développés à plat | Extrudez la tôle ou le profil de la nervure |
| Surfaces : finition d'une {{ui:Forme}} dans la pièce, {{ui:Surface de remplissage}}, {{ui:Lissage de surface}}, {{ui:Surface de Gordon}}, {{ui:Couture}}, {{ui:Épaissir}}, {{ui:Surface décalée}}, {{ui:Prolonger la surface}}, {{ui:Ajuster la surface}} | Non disponible |
| Plusieurs corps : {{ui:Combiner}}, {{ui:Déplacer le corps}}, {{ui:Mettre le corps à l'échelle}}, {{ui:Répétition le long d'un chemin}}, fonctions qui créent un nouveau corps | Un seul solide ; les répétitions et les symétries copient des fonctions |
| Esquisses, plans, axes et points sur des faces que seul un noyau exact peut trouver (une face créée par un congé, la paroi d'un trou, une face d'un solide importé) | Esquissez sur les plans de base, les plans de référence et les faces planes des extrusions et révolutions |
| Un résultat de conception générative ouvert comme pièce ou ajouté à une pièce (il devient un solide importé) | Téléchargez le résultat en STL ou en STEP |
| Modifier les faces courbes d'un fichier STEP ouvert comme surfaces exactes ; STEP exact des faces en spline, balayées et révolutionnées d'un fichier STEP, côtés en spline, filetages modélisés, corps STL / OBJ / 3MF et assemblages ; STEP pour d'autres modeleurs de pièces | {{ui:Ouvrir}} lit le STEP en triangles et conserve pour l'export les faces planes, cylindres, cônes, sphères et tores du fichier ([Ouvrir un fichier STEP](topic:import-step)) ; {{ui:Exporter}} › {{ui:STEP AP242 (solide exact)}} écrit exactement chaque face analytique et conserve celles-ci en facettes ([Exporter](topic:export-files#for-other-cad-programs-step)) ; la macro pour un autre modeleur de pièces écrit toujours |
| Arcs vrais dans les vues de dessin | Les vues et les vues en coupe sont tracées à partir des facettes |
| Volumes, aires et distances exacts | {{ui:Mesurer}} donne les valeurs du solide en facettes, légèrement faibles sur les pièces rondes ; un réglage **Courbes** plus fin les rapproche |

Certaines lignes des tableaux ci-dessous proposent une de ces fonctions comme solution de contournement. Ces suggestions s'appliquent dès que le noyau exact sera de retour.

## Fonctions

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Congés de face, congés pleins, congés dont les rayons sont fixés en des points le long d'une arête | {{ui:Congé}} à rayon constant ou variable linéaire ; plusieurs fonctions de congé |
| Coques d'épaisseurs de paroi différentes | Une seule épaisseur de {{ui:Coque}} ; ajoutez de la matière par extrusion là où une paroi doit être plus épaisse |
| {{ui:Dépouille}} sur des faces de forme libre (spline) | {{ui:Dépouille}} fonctionne sur les faces planes, cylindriques et coniques |
| Balayages vrillés, balayages de paroi mince et de surface ; tangence en fin sur la fonction Lissage ; un lissage à un seul rail guide ; trajectoires en spline | {{ui:Balayage}} avec une orientation fixe ou une échelle en bout ; un lissage à deux rails guides ou plus : voir [Balayage, lissage et dépouille](topic:sweep-loft-draft) |
| Nervures à partir d'arcs ou de splines ; nervures venues d'équerre par rapport à l'esquisse (depuis une vue de dessus) ; dépouille sur les nervures ; plusieurs nervures à partir d'une même esquisse | {{ui:Nervure}} à partir d'une chaîne de lignes dans le plan propre de la nervure : voir [Nervures et goussets](topic:rib) |
| « Jusqu'à » une surface courbe ; « jusqu'à la suivante » s'arrêtant sur une face courbe | Jusqu'à une face plane ou un plan de référence |
| Trous contre-percés, filetages en pouces et pour tuyauterie, filetages coniques, sorties de filetage et débuts de filetage chanfreinés | Lamage peu profond ; filetages métriques ISO et trapézoïdaux, conventionnels ou modélisés : voir [Filetages sur arbres et alésages, dessinés ou modélisés](topic:threads) |
| Extrusions de fonction mince | Dessinez les deux parois du profil |
| Copies de répétition sautées une à une, répétitions de remplissage | Utilisez des fonctions séparées ; répétitions le long d'une courbe : {{ui:Répétition le long d'un chemin}} |
| Copie des répétitions, symétries, congés, chanfreins, coques et solides importés | Copiez l'esquisse ou la fonction sur laquelle ils sont construits, ou répétez-la |
| Tangence exacte (G1) aux points singuliers d'une forme ; fusion des carreaux d'une forme en faces plus grandes | Augmentez le niveau de la {{ui:Forme}} : les carreaux approchés deviennent plus petits ; voir [Formes libres avec Forme](topic:form-surfaces) |
| Une forme faite de plusieurs morceaux fermés distincts dans une même fonction ; ponts entre formes | Un morceau fermé par fonction Forme ; réunissez-les avec Joindre |
| Sélection de corps surfaciques dans la vue (sauf points d'ajustement et de surface de remplissage) ; congés de surface ; désajustement ; carreaux G2 ; surfaces de Gordon tangentes à des voisines courbes (la tangence aux plans et aux faces planes est disponible) | Choisissez-les par leur nom dans le panneau de la fonction ; épaississez d'abord, puis appliquez le congé au solide |
| Une liste des corps dans l'historique ; exclure les corps masqués des exports | Renommez et masquez les corps dans la liste des corps du panneau de la pièce ; supprimez ou désactivez la fonction qui a créé un corps pour l'exclure |
| Une mise à l'échelle non uniforme qui garde les cylindres et les cônes analytiques ; mise à l'échelle non uniforme des surfaces décalées | {{ui:Mettre le corps à l'échelle}} rend les faces courbes des B-splines fermées (à 0.0000004 mm près) ; une mise à l'échelle uniforme reste exacte |
| Combinaison de corps surfaciques ; sommes de Minkowski | {{ui:Couture}} ou {{ui:Épaissir}} d'abord, puis {{ui:Combiner}} |
| Analyse de tolérances : chaînes de cotes qui tournent aux angles (boucles vectorielles 2D et 3D), sensibilités calculées à partir de la géométrie, Monte-Carlo avec d'autres lois, tolérances de dimension sur les cotes d'esquisse, tolérance bonus liée à la condition de matière | {{ui:Cumul}} dans un assemblage : une direction, pire cas et RSS, tolérances saisies, à partir de la tolérance générale du cartouche ou des cadres de tolérancement géométrique : voir [Chaînes de cotes](topic:tolerance-stackup) |
| Calepinage : ordre de coupe et entrées de coupe, coupe unique des arêtes communes, pièces à garder ensemble ; chutes de rouleaux, matière partagée entre projets | {{ui:Imbriquer les pièces plates sur des feuilles…}} avec espacement, marges, rotations et sens du fil : voir [Caler des pièces plates sur des feuilles](topic:nest-flat-parts) ; les chutes de tôle sont conservées et utilisées en premier : voir [Conserver et réutiliser les chutes](topic:nest-offcuts) ; planifiez la découpe dans le logiciel de votre découpeuse |
| Tôlerie : ourlets, décrochements, brides en onglet et à contour ; brides sur arêtes courbes ou sur les faces d'une bride-base pliée ; plis esquissés ; fermetures d'angle ; outils de formage ; conversion d'un solide en tôle ; le développé d'une bride-base pliée avec découpes ; tables de pliage | {{ui:Bride-base}} (une tôle ou un profil plié), {{ui:Bride sur arête}} sur les arêtes droites d'une tôle avec dégagements de pliage, et le développé à plat avec un facteur K : voir [Tôlerie](topic:sheet-metal) |
| {{ui:Analyse de dépouille}} sur les assemblages ; recherche du plan de joint ; analyse de l'épaisseur de paroi | {{ui:Analyse de dépouille}} sur la pièce dans Conception : voir [Vérifier la dépouille pour le moulage et la fonderie](topic:draft-analysis) ; ouvrez chaque pièce d'un assemblage pour la contrôler |

## Esquisses

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Ellipses, arcs tangents, coniques, splines à degré ou poids fixés (NURBS) | Splines (cubiques), arcs et cercles avec des relations Tangente |
| Un point sur une spline (une relation), relations de courbure (G2) | Placez le point propre à la spline là où elle doit passer |
| Copies décalées de splines qui suivent les modifications ultérieures ; décalages de chaînes avec angles vifs en spline | Décalez de nouveau après la modification ; arrondissez d'abord l'angle |
| Copies de répétition restant liées à l'original ; répétitions le long d'une courbe | Refaites la répétition après une modification |
| Projection d'arêtes circulaires de forme libre ou inclinées, géométrie projetée qui suit la pièce | Projetez des arêtes circulaires droites et parallèles, puis cotez |
| Cotes pilotées (de référence) | Lisez les dimensions dans le panneau ou dans les données de la pièce |
| Relations colinéaires | Parallèle avec une distance de 0 |
| Coller dans un autre programme (le presse-papiers du système) | Exportez en DXF, STEP, STL ou 3MF |
| Saisie d'arcs, de coordonnées relatives ou polaires | Saisissez des lignes et des cercles ; dessinez les arcs avec l'outil {{ui:Arc}} |
| Sélection de la géométrie sans pointeur | Nécessite un clic ou un toucher |

## Paramètres et unités

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Configurations qui changent les matériaux ; tableau de conception CSV qui désactive des fonctions | Les configurations définissent des paramètres et activent ou désactivent des fonctions : voir [Configurations et tableaux de conception](topic:design-tables) ; `partcraft variants` construit les configurations enregistrées par nom, fonctions désactivées comprises : voir [Créer un pack de variantes à partir de vos configurations](topic:variant-pack) |
| Équations dans les valeurs des panneaux propres aux fonctions les plus récentes (plan, balayage, dépouille et similaires) | Écrivez-les dans un script ou avec `partcraft set` ([Scripts et ligne de commande](topic:scripts-and-cli)) |
| Pièce affichée en pouces | Les cotes s'affichent en millimètres ; saisissez `2in` dans un champ numérique ou une expression, et elle devient 50.8 |

## Fichiers

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Modifier les fonctions propres d'un solide STEP importé (il arrive sans historique) | Ajoutez ou retirez de la matière avec vos propres fonctions |
| Lecture des couleurs, des noms, de la structure d'assemblage et du PMI d'un STEP | Non disponible |
| Export glTF, OBJ, IGES, Parasolid ; DWG d'une pièce 3D (seul le pack de variantes écrit un DWG : la feuille de dessin) | STL ou 3MF pour les maillages ; STEP pour les solides ; DXF pour la 2D |
| Ouverture d'IGES, de DXF ou de fichiers propres à d'autres programmes (les fichiers `.3dm` s'ouvrent comme un seul corps : [Ouvrir un modèle .3dm comme corps solide](topic:open-3dm-files)) | Demandez un STEP, ou un maillage STL, OBJ ou 3MF fermé : [Ouvrir un STL, OBJ ou 3MF](topic:open-meshes) |
| Structure d'assemblage (un arbre avec les noms des pièces) dans le STEP exporté | Le STEP d'un assemblage est un seul composé des solides placés |
| Enregistrement dans un dossier de votre choix sans passer par le téléchargement du navigateur | Activez « demander où enregistrer » dans les paramètres de téléchargement du navigateur |

## Dessins

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Cotes au-delà des trois dimensions d'ensemble (diamètres des trous, positions, tolérances sur les cotes) | Annotez le PDF, ou exportez en DXF et cotez-le dans un logiciel de CAO 2D |
| Plus d'une coupe ou d'un détail ; vues alignées, arrachées et auxiliaires | Une coupe et un détail par dessin |
| Texte libre, notes et tableaux sur la feuille (hors cartouche et tableau des révisions) | La note de finition, ou un texte ajouté sur le PDF |
| Projection du premier dièdre, vues mobiles, feuilles en portrait | Troisième dièdre, mise en page automatique, feuilles en paysage A4–A0 et ANSI A–E |
| Vue en coupe en direct : plusieurs plans ou une boîte de coupe à la fois, un contour autour de la coupe, enregistrement de la coupe dans le fichier | Un plan à la fois depuis {{ui:Vues}} › {{ui:Vue en coupe}} ; voir [Regarder à l'intérieur avec une vue en coupe](topic:section-view) |
| Dessins d'assemblage avec plus de vues, de cotes ou de repères que vous pouvez déplacer | Une vue isométrique (ou éclatée) avec repères automatiques et la nomenclature |
| Copie et collage des symboles de tolérancement géométrique et d'état de surface | Placez chacun avec Référence, Cadre ou État de surface |
| Manuels : fichiers STEP dans {{ui:À partir d'un autre fichier…}} d'Illustrate, modèle transmis directement depuis ModelCraft ou BimCraft, images à la qualité du traceur de chemins, 3D interactive dans un PDF | Ouvrez le STEP dans Conception et lancez le manuel avec {{ui:À partir de la pièce ouverte}} ; enregistrez le modèle en glTF (.glb) ; images PNG de la vue 3D ; le fichier 3D interactif : voir [Démarrer un manuel dans Illustrate](topic:illustrate) |

## Assemblages

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Liaisons par engrenage, crémaillère, came et vis ; liaison rotule limitée à un cône ; liaisons sur faces courbes ou entre points | Liaisons rigide, pivot, glissière, cylindrique, plane, rotule et pion dans une rainure sur faces planes, chaque valeur avec ses propres limites : voir [Construire un assemblage](topic:build-assembly) |
| Étapes d'éclatement qui font tourner des pièces, et glissement des pièces placées par des liaisons | Étapes d'éclatement en ligne droite ; supprimez une liaison pour déplacer une pièce à la main |
| Sous-assemblages | Un seul niveau de pièces |
| Engrenages, cames, contact | Non disponible |

## Fabrication

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Dégagement adaptatif 3D et ébauche en décalage 3D ; finitions ligne d'eau, au crayon, radiale et en spirale ; passes adaptatives écrites en arcs | Ébauche 3D en rangées droites et usinage de reprise : voir [Ébauche 3D et usinage de reprise](topic:rough-3d) ; finitions {{ui:Parallélisme}} et {{ui:À crête constante}} : voir [Finition 3D](topic:finish-3d) ; face, poche, adaptatif 2D, contour, perçage et chanfrein en 2.5 axes : voir [Créer les parcours d'outil et le G-code](topic:manufacture) |
| Usinage de flanc, parcours d'ébauche en lignes de flux et multi-axes, codes de plan de travail incliné (G68.2), contrôles de collision du porte-outil et de la machine ; simulation des coupes 5 axes et rotatives | Un outil incliné pour toute opération, finition 5 axes avec une fraise boule et finition rotative en 4e axe : voir [Usinage 4 et 5 axes](topic:multi-axis) |
| Alésage et filetage intérieur sur un tour, cycles G71/G76, arcs dans les parcours de tournage, outils motorisés, contre-broche | Tournage extérieur : dressage, ébauche, finition, gorge, tronçonnage, filetage, perçage sur centre : voir [Tournage sur tour](topic:turning) |
| Palpage d'un angle ou d'un coin, préréglage d'outil, mesure d'une cote par rapport à une tolérance | Palpage d'une face, d'un côté, d'un trou ou d'un bossage pour définir le décalage d'origine : voir [Palpage](topic:probing) |
| Contrôles de collision du porte-outil et de la queue | Surveillez les avertissements de longueur de cannelure et vérifiez dans le simulateur de votre commande |
| Durée de vie d'outil et cycles de sous-programmes dans un post ; chargement des fichiers de post d'autres programmes | Écrivez ou modifiez un post dans le format propre à PartCraft : voir [Post-processeurs modifiables](topic:post-processors) |
| G-code en pouces (G20) | Millimètres (G21) uniquement |

## Simulation et conception générative

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Études non linéaires : plastification, grandes déformations, contact entre pièces, fatigue | Statique linéaire et fréquences propres : voir [Vérifier la contrainte et la flèche](topic:simulation) ; gardez le coefficient de sécurité bien au-dessus de 1 |
| Flambage non linéaire (imperfections, post-flambage, saut de flambage) | Coefficients de charge de flambage linéaires avec une marge large : voir [Chaleur, contrainte thermique et flambage](topic:thermal-and-buckling) |
| Rayonnement entre faces (facteurs de forme), résistance de contact, matériaux dépendant de la température, inertie dans la contrainte thermique (ondes de choc thermique) | Rayonnement vers l'environnement, contrainte thermique stationnaire ou quasi statique dans le temps, propriétés constantes : voir [Chaleur, contrainte thermique et flambage](topic:thermal-and-buckling) |
| Raffinement automatique pour la chaleur transitoire et les études avec charge thermique ; maillage plus grossier là où l'erreur est faible ; cible sur une grandeur locale (la contrainte maximale en un point) | **Raffiner automatiquement** pour les études statiques, de flambage, de fréquences propres et thermiques stationnaires, sur l'erreur de toute la pièce : voir [Vérifier la contrainte et la flèche](topic:simulation) ; sinon, réduisez la taille des éléments |
| Charges de palier et de boulon, forces à distance, moments, ressorts, déplacements imposés | Forces et pressions sur les faces, pesanteur ; faces fixes et sans frottement |
| Simulation d'assemblages ; matériaux qui varient selon la direction (couches imprimées, composites) | Une pièce, un matériau isotrope |
| Plusieurs threads de calcul pour les études tétraédriques, le transfert de chaleur et la conception générative ; threads sur une page non isolée en origine croisée | Les études voxel, le flambage, la contrainte dans le temps et l'écoulement laminaire utilisent les threads là où la page le permet : voir [Réglages de PartCraft](topic:settings) |
| Écoulement turbulent avec une précision de conception (le modèle Spalart–Allmaras est présent en tant qu'expérimental : frottement en conduite trop élevé de 30 à 34 %, recollement après marche arrière trop court de 21 à 39 % ; prévu : mailles plus fines près des parois), chaleur dans l'écoulement, écoulement instationnaire (résolu dans le temps), surfaces libres, fluides non newtoniens, pièces en rotation | Écoulement laminaire, permanent, isotherme d'un fluide newtonien, ou le modèle turbulent expérimental pour des tendances qualitatives : voir [Simuler un écoulement de fluide](topic:flow-simulation) ; le panneau avertit lorsque le nombre de Reynolds dépasse le régime laminaire |
| Limites de contrainte et règles de fabrication (surplombs, sens d'usinage) en conception générative ; plusieurs matériaux dans une même forme | Forme la plus rigide pour un volume ; vérifiez le résultat dans Simulation : voir [Faire croître une forme à partir des charges](topic:generative-design) |
| Un résultat sous forme de solide modifiable (lisse, paramétrique) | STL, STEP en facettes, ou une pièce dont le résultat est un solide importé en facettes |
| Conception de machines électriques : rotor tournant dans un stator, couple en fonction de l'angle, acier saturant, aimants qui perdent leur force au-delà de leur coude, courants de Foucault et pertes fer et cuivre ; champs magnétiques en 3D ou sur des maillages courbes | Magnétostatique linéaire 2D sur une grille dans la bibliothèque d'analyse : bobines, fer, aimants permanents sur leur droite de recul, entrefers, inductance et force d'attraction : voir [Champs magnétiques en 2D](topic:magnetic-fields-2d) |

## Scripts

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Aide au survol, points d'arrêt et exécution pas à pas dans l'éditeur de scripts | La recherche, le repli et la complétion sont disponibles (voir [Écrire et exécuter des scripts](topic:craftscript)) ; pour le reste, utilisez votre propre éditeur : {{ui:Enregistrer}} et {{ui:Ouvrir}} du groupe Script font entrer et sortir les scripts ; les fonctions intégrées sont listées dans [Le langage CraftScript](topic:craftscript-language) |
| Points d'arrêt et exécution pas à pas d'un script | `disp` et `fprintf` en cours de route ; {{key:Mod+Enter}} exécute quelques lignes sélectionnées à la fois |
| Champs et courbes qu'un script affiche, dessinés dans l'espace Conception ; scripts modifiant les paramètres de la pièce | Ils s'affichent dans l'espace Script ; les scripts lisent les paramètres avec `param` (voir [Écrire et exécuter des scripts](topic:craftscript)) et les modifient dans l'onglet {{ui:Paramètres}} |
| Images et tableaux côte à côte avec des courbes ; modification d'une courbe (zoom, limites d'axes) avant enregistrement | Côte à côte affiche les courbes ; enregistrez une courbe en PNG, SVG ou CSV et finalisez-la ailleurs |
| numpy et autres paquets Python ; Python hors ligne ; repli du code Python dans l'éditeur ; Pascal Script | La bibliothèque standard de Python, CraftScript et Lua : voir [Scripts en Python](topic:craftscript-python) |
| Passage de fonctions Lua aux fonctions intégrées ; appel d'une fonction de bibliothèque depuis Lua par un nom construit pendant l'exécution du script | Écrivez le nom de la fonction de bibliothèque dans le script (`cs.static_tet(…)`), ou appelez-la depuis un script CraftScript |

## L'application

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Enregistrement dans le cloud, partage et historique des versions | Pas encore disponible. Enregistrez les fichiers sur votre ordinateur et conservez les versions par nom |
| PartCraft comme application installée sur iPad et iPhone | Utilisez PartCraft dans le navigateur de l'appareil ; sous Android et sur ordinateur, il fonctionne aussi dans CadCraft Studio (getcadcraft.com/download) |
| Menus contextuels (clic droit) | Barre d'outils et panneau de droite |
| Travail entièrement hors ligne dès le premier lancement | Seulement lorsque l'application a été enregistrée pour un usage hors ligne : voir [Travailler hors ligne](common:offline) |

Signalez ce qui vous manque le plus via la page d'assistance du site : elle oriente la suite.

## Ingénierie (générateurs et champs)

| Pas encore disponible | À la place, aujourd'hui |
|---|---|
| Boîtes collectrices, piquages et raccords sur l'échangeur généré ; courbes de température pour la résistance des matériaux ; pertes dans les tés du collecteur | Les générateurs construisent le cœur et les tubes ; ajoutez les raccords dans Conception ; utilisez les valeurs du matériau à température ambiante avec un coefficient de sécurité |
| Ajout de générateurs depuis le répertoire des modules complémentaires en un clic | {{ui:Ouvrir}} dans l'espace de travail Ingénierie ajoute un générateur depuis un fichier |
| Un fichier de champ plus fin que la taille de voxel propre au générateur ; lecture de fichiers `.vdb` | Enregistrez un champ plus fin depuis un script ; `.vdb` est écrit, pas lu |
| Calculs selon les codes des appareils à pression | Les formules classiques de paroi mince et de paroi épaisse, avec le coefficient de sécurité que vous choisissez ; pas une marge de code |
| Générateurs pour les autres applications | PartCraft uniquement dans cette version |
