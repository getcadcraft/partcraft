---
title: Nouveautés de la version 0.9 (antérieure)
summary: PartCraft 0.9 ajoute les congés entre faces et l'épaississement en solides, les assemblages de milliers de pièces, un coffre de documents avec révisions, un module complémentaire Solid FEM pour la contrainte, dix méthodes d'arc, les dimensions d'acier britanniques, une étape d'impression et les modules d'impression sur résine.
keywords: nouveautés 0.9, version antérieure, nouveautés, notes de version, journal des modifications, 0.9, congé entre faces, bille roulante, congé de plusieurs arêtes, épaissir, solide à partir de surfaces, STEP shell, solide IGES, congés de scan, grand assemblage, affichage allégé, 20000 pièces, documents, coffre, extraction, révision, publication, lieux d'utilisation, liaison Rhino, grasshopper, 3dm, curseurs, atelier, file de travaux, solid fem, éléments finis, von Mises, fréquence propre, méthodes d'arc, arc à 3 points, profilés acier britanniques, blue book, étape d'impression, résine, goo, ctb, plateau, mise à plat, 0.8, 0.8.1, version, nouvelles fonctions, analyse en direct, mise à jour pendant la modification, rupture, facteur de charge, non linéaire, plasticité, déformation plastique, contact, calculix, étude de mouvement, jeu, surfaces, nurbs, lisser, coque, zébrure, ingénierie, générateur, corps généré, esquisse à partir d'une photo, mise à l'échelle pour l'impression, découpe pour l'impression, retrait, pièces calepinées, g-code, dessin, cotes de trous, assistant, mcp, langues, lignes de la barre d'outils
from: 1dafd7c8
---

Voici ce qui a changé dans PartCraft 0.9 par rapport à 0.8.1. Les surfaces de forme libre se referment désormais en solides, les assemblages de milliers de pièces restent utilisables, un coffre Documents conserve les révisions, et un module complémentaire Solid FEM vérifie la contrainte dans une pièce. Chaque point indique où le trouver.

## Nouveau dans 0.9.1

- **Export STEP exact.** {{ui:Exporter}} › {{ui:STEP AP242 (solide exact)}} et {{ui:STEP AP214 (solide exact)}} fonctionnent désormais. Les trous, bossages, congés, cônes, sphères et tores sont écrits sur leurs vraies surfaces, avec de vrais cercles comme arêtes, de sorte qu'un autre logiciel de CAO ou de FAO peut reconnaître un trou comme trou. Les côtés en spline, les filetages modélisés et les maillages importés restent des facettes planes dans le même solide. Voir [Exporter pour l'impression, STEP et DXF](topic:export-files#for-other-cad-programs-step).
- **STEP en entrée, STEP exact en sortie.** Un fichier STEP ouvert conserve ses propres faces planes, cylindres, cônes, sphères et tores ; ainsi, {{ui:Exporter}} › {{ui:STEP AP242 (solide exact)}} les réécrit en vraies surfaces au lieu de facettes : une poutre d'un fournisseur avec des trous de boulons ressort avec les mêmes faces qu'à l'entrée, plus ce que vous y avez découpé. Les faces en spline, balayées et révolutionnées du fichier restent des facettes, tout comme les corps issus de STL, OBJ et 3MF. Rouvrez le fichier STEP pour une pièce enregistrée plus tôt. Voir [Ouvrir un fichier STEP et construire dessus](topic:import-step).
- **Vrais cercles dans le DXF de face.** {{ui:Exporter}} › {{ui:DXF de l'esquisse ou de la face plane}}, avec une face plane sélectionnée, écrit désormais les trous ronds comme des cercles, avec le centre et le rayon propres au trou, pour une table laser, plasma ou jet d'eau. Les autres arêtes rondes restent des facettes.
- **STEP exact pour l'atelier.** Dans {{ui:Fabrication}}, {{ui:STEP exact (coordonnées de travail)}} écrit la pièce avec son origine à l'origine de travail de la mise en place et Z suivant l'axe de l'outil, soit les coordonnées qu'utilise le G-code. Voir [Créer les parcours d'outil et le G-code](topic:manufacture#exact-step-for-the-shop).

## Nouveautés

### Surfaces et solides

- **Congé entre faces.** Choisissez {{ui:Surfaces}} dans la liste {{ui:Espace de travail}}, puis {{ui:Congé entre faces}}. Sélectionnez les deux faces d'un même solide, saisissez le rayon (et {{ui:Rayon à l'extrémité (mm, 0 = identique)}} pour un rayon qui varie le long de l'arête). La ligne de résultat indique l'écart du congé par rapport à la bille roulante idéale ; un rayon qui ne convient pas est refusé, avec la face nommée. {{ui:Congé de plusieurs arêtes}} arrondit plusieurs arêtes en une seule étape ; cochez {{ui:Coins (pièce sphérique là où trois se rejoignent)}} pour un coin sphérique là où trois arêtes arrondies de faces planes se rencontrent. Voir [Surfaces de forme libre (NURBS)](topic:nurbs-surfaces).
- **Épaissir en solide.** {{ui:Épaissir en solide}} dans le même espace de travail donne une épaisseur à une surface ; {{ui:Autre côté}} la fait croître de l'autre côté. Un pli ou un croisement sur lui-même est refusé, avec la surface et l'endroit nommés.
- **Solides à partir de surfaces.** Des surfaces ajustées peuvent être réunies par union, soustraction et intersection, puis intégrées à la pièce en une seule étape d'annulation. STEP écrit un solide comme une seule coque fermée et IGES comme un seul solide ; les deux se relisent comme solide. Si les faces ne se correspondent pas arête par arête, le fichier reçoit des faces séparées et la ligne d'état l'indique. Des solides peuvent aussi être créés dans l'éditeur de nœuds ; voir [Éditeur de nœuds](topic:nodes).
- **Congés de jante et variables dans les scans.** Lorsque vous ajustez des surfaces sur un scan, les congés de jante (tores) et les congés à rayon variable le long d'une arête assez droite sont aussi recherchés et listés avec leur rayon. Ce point n'a été testé que sur des scans fictifs.

### Assemblages, documents et liens

- **Grands assemblages.** Les pièces qui sont des copies partagent un même maillage, et {{ui:Vues}} › {{ui:Affichage allégé}} dessine des boîtes pour que la vue reste fluide (il s'active seul pour les très grands assemblages ; la sélection et les liaisons utilisent toujours les vraies pièces). L'arbre des pièces affiche ses premières lignes et un bouton {{ui:Afficher 700 de plus}} pour le reste. Les fichiers d'assemblage peuvent contenir jusqu'à 50 000 instances et 100 000 liaisons. Voir [Construire un assemblage](topic:build-assembly).
- **Documents.** {{ui:Documents…}} dans le groupe **Fichier** ouvre une boîte de dialogue sur un dossier de projet : extraction et dépôt, lettres de révision, états (en cours, pour relecture, diffusé, obsolète), historique, lieux d'utilisation et nomenclature. Voir [Documents et révisions (le coffre)](topic:documents-walkthrough).
- **Liaison Rhino en direct.** Un seul script, `cadcraft_link.py`, surveille un document Rhino ou Grasshopper et ne pousse dans PartCraft que ce qui a changé ; une fonction importée se reconstruit alors sur la nouvelle forme. Elle ne fonctionne que dans un sens et nécessite Studio. Voir [Liaison .3dm en direct](topic:live-3dm-link).
- **Voir les curseurs des autres.** Dans une session partagée, le curseur de chacun s'affiche avec son nom et la fonction qu'il a sélectionnée. Voir [Travailler en direct avec d'autres](topic:work-live).
- **Factory floor.** Activez le module complémentaire Factory floor dans {{ui:Paramètres}} › {{ui:Modules complémentaires}}. Après avoir généré un programme dans {{ui:Fabrication}}, son onglet peut {{ui:Ajouter à la file de travaux de l'atelier}} ou {{ui:Enregistrer comme fichier de travail}}. Il n'envoie ni ne lance jamais une machine.

### Analyse et pièces

- **Module complémentaire Solid FEM.** Activez {{ui:Solid FEM}} dans {{ui:Paramètres}} › {{ui:Modules complémentaires}} (il reste désactivé tant que vous ne le faites pas) : un onglet {{ui:Solid FEM}} apparaît dans le panneau de droite. {{ui:Mailler la pièce}}, sélectionnez les faces fixes et les charges dans la vue 3D, {{ui:Résoudre}}, puis tracez le déplacement, la contrainte de von Mises ou un mode propre avec {{ui:Afficher sur le modèle}}. Voir [Solid FEM : une vérification de contrainte](topic:solid-fem-check).
- **Arc dans les esquisses, dix façons.** La flèche à côté de {{ui:Arc}} dans la barre d'outils d'esquisse liste 3 points, Centre début fin, Centre début angle, Centre début longueur, Début fin angle, Début fin direction, Début fin rayon, Centre début fin, Centre début angle, Centre début longueur et Continuer. Voir [Tracer un arc par dix méthodes](topic:sketch-arc-methods).
- **Dimensions d'acier britanniques.** Les membrures soudées peuvent utiliser 976 profilés UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS) ; saisissez une taille telle que `305x165x40 UB`. Voir [Éléments de structure](topic:structural-members).

### Impression

- **Étape d'impression.** Le bouton {{ui:Étape d'impression}} de la barre d'outils (module complémentaire 3D Print, activé par défaut) place les corps de votre pièce sur un plateau en pointillés : {{ui:Mettre à plat}}, {{ui:Tourner de 90°}}, {{ui:Disposer sur le plateau}}, {{ui:Ajuster tout sur le plateau}}, {{ui:Aperçu des couches}}, puis {{ui:Envoyer à l'imprimante 3D}} par USB, Klipper (Moonraker), OctoPrint ou PrusaLink. Rien n'est envoyé avant votre confirmation, et votre pièce n'est jamais modifiée. Pour un fichier STL ou 3MF, voir [Préparer une pièce pour l'impression 3D](topic:print-3d).
- **Impression sur résine.** Modules complémentaires dans {{ui:Paramètres}} › {{ui:Modules complémentaires}}, tous désactivés tant que vous ne les activez pas : un trancheur résine, un test d'exposition, et les formats de fichiers Elegoo GOO, SL1, Chitubox CBDDLP/CTB et Anycubic. Le tranchage s'exécute sur un thread de travail, de sorte que la page reste réactive.

## Dans toutes les applications

- Chaque aide au survol est une info-bulle Bootstrap.
- La bulle de démarrage possède un bouton de fermeture ; elle reste fermée.
- La rangée d'onglets d'un panneau qui ne tient pas défile latéralement au lieu d'être coupée.
- L'onglet du navigateur affiche le nom du document ouvert avant PartCraft | CadCraft.
- {{ui:Paramètres}} affiche la {{ui:Disposition}} de l'espace de travail sous forme de liste déroulante de choix, et la liste des langues recense toutes les langues disponibles dans la version.
- Poids et Température sont des types d'unités dans les réglages d'unités.

## Corrigé

- Le menu Arc de l'esquisse liste désormais toutes les méthodes.
- La barre d'outils des modules complémentaires et le titre de l'onglet du navigateur ont été corrigés le 2026-11-09.

## Limites réelles

- Le STEP exact a été relu dans OpenCascade (solides valides, volumes égaux à ceux calculés à la main). Il n'a pas encore été ouvert dans tous les logiciels de CAO ou de FAO, et un assemblage n'est pas écrit en STEP exact.
- Rien n'a été imprimé sur une imprimante réelle. Le tranchage, le G-code et les fichiers résine ont été relus par nos propres programmes ou par une imprimante de substitution ; aucun format résine n'a été chargé sur une imprimante, et les tailles d'imprimante et les expositions ne sont que des points de départ.
- Solid FEM est linéaire, isotrope et élastique, avec un matériau par pièce, sans contact, plastification ni flambage. La contrainte aux appuis fixes et aux angles vifs dépend du maillage. C'est une aide à la vérification, non revue par un ingénieur.
- Les temps de calcul pour grands assemblages proviennent d'un serveur sans GPU ; une image en pleine précision de 20 000 pièces prend encore quelques secondes sur celui-ci.
- Les congés fonctionnent sur des paires de faces ; il n'existe ni raccord général de sommet, ni congé entre faces qui ne se touchent pas.
- La liaison Rhino n'a jamais fonctionné dans un vrai Rhino ou Grasshopper. Documents a été essayé par deux programmes sur un même dossier, et non par deux personnes sur un partage réseau.
- L'ajustement de surfaces sur un scan réel n'a pas encore fait l'objet d'une vérification manuelle. Les langues autres que l'anglais sont des ébauches automatiques.
- Les programmes d'installation Windows ne sont pas signés numériquement, et l'image disque macOS n'est pas notariée. Voir [Dépannage](topic:troubleshooting).

Les changements antérieurs figurent dans [Nouveautés de la version 0.7](topic:whats-new-0-7).

## Antérieur : 0.8 et 0.8.1

Voici ce qui a changé dans PartCraft 0.8 et 0.8.1 par rapport à 0.7. La simulation répond pendant que vous modifiez et indique ce qui casse en premier, les assemblages reçoivent des études de mouvement, et de nouveaux espaces de travail créent des surfaces de forme libre et des pièces dimensionnées à partir de la physique. 0.8.1 est une petite version de correction.

### Nouveautés

**Simulation**

- **Mettre à jour pendant que je modifie.** Cochez {{ui:Mettre à jour pendant que je modifie}} dans le bloc {{ui:Résoudre}} et les réponses suivent vos modifications. Modifiez une cote, une charge ou le matériau, et une réponse rapide, calculée avec des éléments quatre fois plus grands, apparaît aussitôt ; lorsque vous vous arrêtez environ une seconde, la réponse affinée propre à l'étude remplace la première. Les résultats indiquent laquelle vous regardez. Sur un porte-à-faux en acier, la réponse rapide était à 1 % près pour la flèche et à environ 4 % près pour la contrainte, par rapport à la réponse affinée. Voir [Vérifier la contrainte et la flèche](topic:simulation#update-while-you-edit-live).
- **Ce qui casse en premier.** Pour une étude statique ou de flambage, {{ui:Qu'est-ce qui cède en premier ?}} dans le bloc **Rupture** met les charges à l'échelle jusqu'à ce que la pièce cède. Il liste, du pire au moins grave, le facteur de charge jusqu'à la première plastification (avec un repère rouge là où la contrainte culmine) et le facteur de charge jusqu'au flambage. Un facteur inférieur à 1 signifie que la pièce cède déjà sous la charge appliquée, et Problèmes affiche une erreur. Les facteurs proviennent d'une étude linéaire, et ne valent que ce qu'elle vaut. Voir [Vérifier la contrainte et la flèche](topic:simulation#find-out-what-breaks-first-break-it).
- **Plasticité et contact.** Deux types d'études de plus : une étude non linéaire où le matériau suit sa droite jusqu'à la limite d'élasticité puis une pente plus plate, avec la déformation plastique tracée, et une étude de contact où des pièces distinctes se poussent (sans frottement) ou restent collées (liées). Un pas de charge qui ne converge pas, ou des pièces qui s'enfoncent trop l'une dans l'autre, s'affichent dans le panneau Problèmes. Le frottement, les grands glissements, les grandes rotations, les grandes déformations et la fatigue ne sont pas résolus. Voir [Vérifier la contrainte et la flèche](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Fichiers de données pour CalculiX.** {{ui:Exporter}} › {{ui:Fichier de données CalculiX (.inp)}} enregistre l'étude pour CalculiX, un programme distinct que vous installez et exécutez vous-même ; {{ui:Exporter}} › {{ui:Résultats CalculiX (.frd)}} relit son fichier de résultats sur le même maillage. PartCraft ne lance jamais ce programme, et il le signale si la pièce a changé depuis l'enregistrement du fichier de données.

**Assemblages**

- **Études de mouvement.** {{ui:Assemblage}} › {{ui:Mouvement}} pilote la valeur d'une liaison sur une durée que vous donnez (vitesse constante, progressive, sinusoïdale, ou aller-retour), place l'assemblage à chaque pas avec ses liaisons et ses boucles fermées, et indique quelles pièces se heurtent et à quelle distance elles passent. {{ui:Ajouter un point}} trace la position, la vitesse et l'accélération d'un point, la valeur de la liaison et le jeu en fonction du temps ; {{ui:Enregistrer en CSV}} et {{ui:Enregistrer la courbe}} les exportent. Après {{ui:Exécuter}}, la barre **Parcourir l'exécution** amène l'assemblage à n'importe quel pas. Les réglages de l'étude sont enregistrés dans le fichier d'assemblage. La vitesse et l'accélération sont calculées à partir des positions enregistrées : utilisez davantage de pas si un pic étroit apparaît trop bas. Voir [Vérifier un assemblage pour les collisions et le mouvement](topic:check-assembly#a-motion-study).

**Surfaces et pièces à partir de la physique**

- **Un espace de travail Surfaces.** Choisissez {{ui:Surfaces}} dans la liste {{ui:Espace de travail}} pour des courbes et surfaces NURBS à côté de la pièce : {{ui:Courbe}}, {{ui:Lissage}}, {{ui:Balayage}}, {{ui:Correspondance}} et {{ui:Zébrure}}, avec la continuité (G0, G1 ou G2) mesurée sur les surfaces exactes, et une arête moins bonne que demandé est listée dans Problèmes avec une correction de correspondance. {{ui:Lisser}} mesure les points d'inflexion et les sauts de courbure sur les lignes de coque et reconstruit les parties non lisses dans votre tolérance. Les surfaces sont enregistrées dans le fichier de pièce et ne modifient pas les fonctions de la pièce. Voir [Surfaces de forme libre (NURBS)](topic:nurbs-surfaces).
- **L'espace de travail Ingénierie.** Choisissez {{ui:Ingénierie}} dans la liste des espaces de travail, choisissez un générateur et cliquez sur {{ui:Nouveau}} : un script dimensionne une pièce à partir de ce qu'elle doit faire (chaleur à transférer, débits, pression, matériau, procédé d'impression) avec des formules classiques et la construit, puis restitue les valeurs utilisées avec leurs sources, ses contrôles de fabrication et des fichiers pour les outils d'analyse. Les mêmes données donnent la même pièce sur tout ordinateur. Le générateur est conservé dans la pièce, et ouvrir une pièce n'exécute jamais de script. Voir [Pièces issues de la physique : générateurs](topic:engineer-generators) et [Écrire un générateur](topic:write-a-generator).

**Esquisse, dessins et fabrication**

- **Une esquisse à partir d'une photo.** {{ui:Fonctions}} › {{ui:Plus}} › {{ui:Esquisse à partir d'une photo…}} trace une photo d'une pièce plate sur un fond uni (contour et trous) ou un dessin au stylo en lignes, arcs et cercles. Vous donnez une seule longueur, vérifiez l'aperçu et créez l'esquisse. Voir [Bases de l'esquisse](topic:sketch-basics#a-sketch-from-a-photo).
- **Mise à l'échelle et découpe pour l'impression.** {{ui:Exporter}} › {{ui:Mettre à l'échelle pour l'impression (STL ou 3MF)…}} met à l'échelle par axe sans modifier la pièce, par exemple pour une marge de retrait. {{ui:Exporter}} › {{ui:Découper pour l'impression (un zip de pièces)…}} découpe une pièce trop grande pour votre plateau en morceaux numérotés assemblés par des tenons, clavettes, queues d'aronde, trous de goujon ou logements d'aimants. Voir [Imprimer en 3D](topic:print-3d).
- **Panneaux calepinés vers G-code.** {{ui:Exporter}} › {{ui:Panneaux calepinés vers G-code}} lit un DXF calepiné et produit un programme par panneau, à travers le post que vous choisissez : trous et découpes d'abord, puis les contours. Il ne prévoit ni les entrées de coupe, ni l'ordre de coupe, ni les arêtes communes. Voir [Caler des pièces plates sur des feuilles](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Des dessins qui en font davantage seuls.** {{ui:Feuille}} › {{ui:Automatique}} choisit la plus petite feuille de format A qui contient les vues à la plus grande échelle standard jusqu'à 1:1. {{ui:Coter les trous}} place une marque de centre sur chaque trou, une annotation par taille et les positions depuis le coin inférieur gauche de la vue. Voir [Créer un dessin](topic:drawing-pdf).

**Dans toutes les applications**

- **Langues.** Les applications existent en 54 langues. Celles autres que l'anglais restent des ébauches automatiques jusqu'à ce qu'un locuteur natif les relise.
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} choisit Retour à la ligne (comme avant), 2 lignes ou 1 ligne ; une barre qui ne tient pas défile latéralement. Le ruban Fonctions de PartCraft affiche l'outil le plus utilisé en grand et range les variantes derrière un bouton divisé.
- **Connectez votre IA.** Studio est le point central pour connecter un assistant de votre choix aux huit applications, avec une autorisation de lecture seule, de suggestion ou de modification pour chaque application. Un assistant connecté peut dimensionner une pièce à partir d'une phrase, par exemple une équerre pour une charge, montrer son raisonnement et chaque contrôle, puis la construire ; il indique ce qu'il n'a pas vérifié (concentration de contraintes, fatigue, fluage des plastiques). Voir [Utiliser PartCraft avec un assistant IA](topic:use-with-ai-assistants).

### Corrigé dans 0.8.1

- **Gel du curseur en plein écran.** La détection au survol est désormais limitée en fréquence. La cause est notre meilleure lecture et n'a pas été confirmée avec la personne qui l'a signalée.
- **Langue à l'exécution.** Studio et les éditions empaquetées peuvent changer de langue pendant l'exécution ; auparavant, elles n'étaient qu'en anglais. Ceci n'est pas encore testé sur toutes les plateformes : dites-nous si la langue ne change pas.

### Pas encore dans cette version

- Connectez votre IA n'est pas terminé : la connexion en un clic dans Studio, le connecteur hébergé pour l'IA du navigateur, votre propre clé d'API dans Studio et le paquet MCP publié ne sont pas promis. Studio n'a pas d'IA propre.
- Studio n'est pas signé numériquement : Windows peut afficher un avertissement, et macOS demande un clic droit puis Ouvrir. Voir [Dépannage](topic:troubleshooting).
- Les cumuls de tolérances n'existent encore que dans une direction : voir [Chaînes de cotes](topic:tolerance-stackup).
- Le reste figure dans [Ce qui n'est pas encore disponible](topic:not-built-yet).

Les changements antérieurs figurent dans [Nouveautés de la version 0.7](topic:whats-new-0-7).
