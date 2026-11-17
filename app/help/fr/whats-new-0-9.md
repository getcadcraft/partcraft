---
title: Nouveautés de la version 0.9
summary: PartCraft 0.9 ajoute les congés entre faces et l'épaississement en solides, des assemblages de milliers de pièces, un coffre de documents avec révisions, un module complémentaire Solid FEM pour les contraintes, dix méthodes d'arc, les profilés d'acier britanniques, une étape d'impression et des modules complémentaires d'impression en résine. Chaque point indique où le trouver.
keywords: nouveautés, quoi de neuf, notes de version, journal des modifications, 0.9, congé entre faces, roulement de sphère, congé de plusieurs arêtes, épaissir, solide à partir de surfaces, coque STEP, solide IGES, congés de scan, grand assemblage, affichage allégé, 20000 pièces, documents, coffre, extraction, révision, dernière utilisation, liaison Rhino, grasshopper, 3dm, curseurs, atelier, file de travaux, solid fem, éléments finis, von mises, fréquence propre, méthodes d'arc, arc à 3 points, profilés d'acier britanniques, impression, étape d'impression, résine, goo, ctb, plateau, à plat, 0.8, 0.8.1, analyse en direct, mise à jour pendant la modification, ce qui cède en premier, facteur de charge, non linéaire, limite d'élasticité, déformation plastique, contact, calculix, étude de mouvement, jeu, surfaces, nurbs, lisser, coque, zébrure, ingénieur, générateur, corps généré, esquisse à partir d'une photo, mise à l'échelle pour l'impression, découpe pour l'impression, retrait, calepinage, g-code, dessin, coter les trous, assistant, mcp, langues, lignes de la barre d'outils
from: 96d9fbfa
---

Voici ce qui a changé dans PartCraft 0.9 par rapport à la 0.8.1. Les surfaces libres se referment désormais en solides, les assemblages de milliers de pièces restent utilisables, un coffre de documents conserve les révisions, et un module complémentaire Solid FEM vérifie les contraintes dans une pièce. Chaque point indique où le trouver.

## Nouveautés dans la 0.9.1

- **Export STEP exact.** {{ui:Exporter}} › {{ui:STEP AP242 (solide exact)}} et {{ui:STEP AP214 (solide exact)}} fonctionnent désormais. Les trous, bossages, congés, cônes, sphères et tores sont écrits sur leurs vraies surfaces, avec de vrais cercles comme arêtes, si bien qu'un autre programme de CAO ou de FAO peut reconnaître un trou comme un trou. Les flancs en spline, les filetages modélisés et les maillages importés restent des facettes planes dans le même solide. Voir [Export pour impression, STEP et DXF](topic:export-files#for-other-cad-programs-step).
- **STEP en entrée, STEP exact en sortie.** Un fichier STEP que vous ouvrez conserve ses propres faces planes, cylindres, cônes, sphères et tores ; {{ui:Exporter}} › {{ui:STEP AP242 (solide exact)}} les réécrit donc comme de vraies surfaces au lieu de facettes. Une poutre de fournisseur percée de trous de boulons ressort avec les mêmes faces qu'à l'entrée, plus ce que vous y avez découpé. Les faces en spline, balayées et de révolution du fichier restent des facettes, comme les corps issus de STL, OBJ et 3MF. Ouvrez de nouveau le fichier STEP pour une pièce enregistrée plus tôt. Voir [Ouvrir un fichier STEP et construire dessus](topic:import-step).
- **Vrais cercles dans le DXF de face.** {{ui:Exporter}} › {{ui:DXF de l'esquisse ou de la face plane}}, avec une face plane choisie, écrit désormais les trous ronds sous forme de cercles, avec le centre et le rayon propres au trou, pour une table de découpe laser, plasma ou jet d'eau. Les autres arêtes rondes restent des facettes.
- **STEP exact pour l'atelier.** Dans {{ui:Fabrication}}, {{ui:STEP exact (coordonnées de travail)}} écrit la pièce avec son origine au point d'origine de la mise en place et Z suivant l'axe d'outil, c'est-à-dire les coordonnées qu'utilise le G-code. Voir [Créer les parcours d'outil et le G-code](topic:manufacture#exact-step-for-the-shop).

## Nouveautés

### Surfaces et solides

- **Congé entre faces.** Choisissez {{ui:Surfaces}} dans la liste {{ui:Espace de travail}}, puis {{ui:Congé entre faces}}. Choisissez les deux faces d'un même solide, saisissez le rayon (et {{ui:Rayon à l'extrémité (mm, 0 = identique)}} pour un rayon qui varie le long de l'arête). La ligne de résultat indique l'écart du congé par rapport au roulement de sphère idéal, et un rayon qui ne convient pas est refusé en nommant la face. {{ui:Congé de plusieurs arêtes}} arrondit plusieurs arêtes en une seule étape ; cochez {{ui:Coins (pièce sphérique là où trois se rejoignent)}} pour un coin sphérique là où trois arêtes arrondies de faces planes se rejoignent. Voir [Surfaces libres (NURBS)](topic:nurbs-surfaces).
- **Épaissir en solide.** {{ui:Épaissir en solide}} dans le même espace de travail donne une épaisseur à une surface ; {{ui:Autre côté}} la fait croître dans l'autre sens. Un pli ou un croisement sur soi-même est refusé, avec la surface et l'endroit nommés.
- **Solides à partir de surfaces.** Des surfaces découpées peuvent être réunies par union, soustraction et intersection, puis intégrées à la pièce en une seule étape d'annulation. Le STEP écrit un solide comme une seule coque fermée, et l'IGES comme un seul solide ; les deux se relisent comme solide. Si les faces ne se correspondent pas arête à arête, le fichier reçoit des faces séparées et la barre d'état l'indique. Des solides peuvent aussi être créés dans l'éditeur de nœuds ; voir [Éditeur de nœuds](topic:nodes).
- **Congés de rive et à rayon variable dans les scans.** Lorsque vous ajustez des surfaces à un scan, les congés de rive (tores) et les congés à rayon variable le long d'une arête assez droite sont aussi recherchés et listés avec leur rayon. Testé sur des scans fictifs seulement.

### Assemblages, documents et liens

- **Grands assemblages.** Les pièces qui sont des copies partagent un même maillage, et {{ui:Vues}} › {{ui:Affichage allégé}} dessine des boîtes pour que la vue reste fluide (il s'active tout seul pour les très grands assemblages ; la sélection et les liaisons utilisent toujours les vraies pièces). L'arborescence des pièces affiche ses premières lignes et un bouton {{ui:Afficher 700 de plus}} pour le reste. Les fichiers d'assemblage peuvent contenir jusqu'à 50 000 instances et 100 000 liaisons. Voir [Construire un assemblage](topic:build-assembly).
- **Documents.** {{ui:Documents…}} dans le groupe **Fichier** ouvre une boîte de dialogue sur un dossier de projet : sortie et entrée, lettres de révision, états (en cours, pour relecture, diffusé, obsolète), historique, emplois et nomenclature. Voir [Documents et révisions (le coffre)](topic:documents-walkthrough).
- **Liaison Rhino en direct.** Un script, `cadcraft_link.py`, surveille un document Rhino ou Grasshopper et ne pousse dans PartCraft que ce qui a changé ; une fonction importée se reconstruit alors sur la nouvelle forme. La liaison est à sens unique et nécessite Studio. Voir [Lien .3dm en direct](topic:live-3dm-link).
- **Voir les curseurs des autres.** Dans une session partagée, le curseur de chaque personne s'affiche avec son nom et la fonction qu'elle a sélectionnée. Voir [Travailler en direct avec d'autres](topic:work-live).
- **Atelier.** Activez le module complémentaire Atelier dans {{ui:Paramètres}} › {{ui:Modules complémentaires}}. Après avoir envoyé un programme depuis {{ui:Fabrication}}, son onglet peut {{ui:Ajouter à la file de travaux de l'atelier}} ou {{ui:Enregistrer comme fichier de travail}}. Il n'envoie ni ne démarre jamais une machine.

### Analyse et pièces

- **Module complémentaire Solid FEM.** Activez {{ui:Solid FEM}} dans {{ui:Paramètres}} › {{ui:Modules complémentaires}} (il reste désactivé tant que vous ne l'activez pas) : un onglet {{ui:Solid FEM}} apparaît dans le panneau de droite. {{ui:Mailler la pièce}}, choisissez les faces fixes et les charges dans la vue 3D, {{ui:Résoudre}}, puis affichez le déplacement, la contrainte de von Mises ou un mode propre avec {{ui:Afficher sur le modèle}}. Voir [Solid FEM : une vérification de contrainte](topic:solid-fem-check).
- **Arc dans les esquisses, dix façons.** La flèche à côté de {{ui:Arc}} dans la barre d'outils d'esquisse liste 3 points, Début-Centre-Fin, Début-Centre-Angle, Début-Centre-Longueur, Début-Fin-Angle, Début-Fin-Direction, Début-Fin-Rayon, Centre-Début-Fin, Centre-Début-Angle, Centre-Début-Longueur et Continuer. Voir [Tracer un arc par dix méthodes](topic:sketch-arc-methods).
- **Profilés d'acier britanniques.** Les éléments de structure peuvent utiliser 976 profilés UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS) ; saisissez une dimension telle que `305x165x40 UB`. Voir [Éléments de structure](topic:structural-members).

### Impression

- **Étape d'impression.** Le bouton {{ui:Étape d'impression}} de la barre d'outils (module complémentaire Impression 3D, actif par défaut) place les corps de votre pièce sur un plateau en pointillé : {{ui:Mettre à plat}}, {{ui:Tourner de 90°}}, {{ui:Disposer sur le plateau}}, {{ui:Ajuster tout sur le plateau}}, {{ui:Aperçu des couches}}, puis {{ui:Envoyer à l'imprimante 3D}} par USB, Klipper (Moonraker), OctoPrint ou PrusaLink. Rien n'est envoyé avant votre confirmation, et votre pièce n'est jamais modifiée. Pour un fichier STL ou 3MF à la place, voir [Préparer une pièce pour l'impression 3D](topic:print-3d).
- **Impression en résine.** Modules complémentaires dans {{ui:Paramètres}} › {{ui:Modules complémentaires}}, tous désactivés tant que vous ne les activez pas : un trancheur pour résine, un test d'exposition, et des formats de fichier Elegoo GOO, SL1, Chitubox CBDDLP/CTB et Anycubic. Le tranchage s'exécute sur un fil de travail distinct, si bien que la page reste réactive.

## Dans toutes les applications

- Chaque info-bulle au survol est une info-bulle Bootstrap.
- L'astuce de démarrage a un bouton de fermeture ; elle reste fermée.
- Une rangée d'onglets de panneau qui ne tient pas défile latéralement au lieu d'être coupée.
- L'onglet du navigateur affiche le nom du document ouvert avant PartCraft | CadCraft.
- {{ui:Paramètres}} affiche la {{ui:Disposition}} de l'espace de travail sous forme de liste déroulante de choix, et la case de langue liste toutes les langues de la version.
- Le poids et la température sont des grandeurs dans les paramètres d'unités.

## Corrigé

- Le menu Arc de l'esquisse liste désormais toutes les méthodes.
- La barre d'outils des modules complémentaires et le titre de l'onglet du navigateur ont été corrigés le 2026-11-09.

## Limites reconnues

- Le STEP exact a été relu dans OpenCascade (solides valides, volumes égaux à ceux calculés à la main). Il n'a pas encore été ouvert dans chaque logiciel de CAO ou de FAO, et un assemblage n'est pas écrit en STEP exact.
- Rien n'a été imprimé sur une vraie imprimante. Le tranchage, le G-code et les fichiers résine ont été relus par nos propres programmes ou par une imprimante factice ; aucun format résine n'a été chargé sur une imprimante, et les dimensions des imprimantes et les expositions sont des points de départ.
- Solid FEM est linéaire, isotrope et élastique, avec un seul matériau par pièce, sans contact, sans plasticité ni flambement. La contrainte aux faces fixes et aux angles vifs dépend du maillage. C'est une aide à la vérification, pas une étude relue par un ingénieur.
- Les temps des grands assemblages viennent d'un serveur sans GPU ; une image en détail complet de 20 000 pièces prend encore quelques secondes là-bas.
- Les congés fonctionnent sur des paires de faces ; il n'y a ni raccord général de sommet, ni congé entre faces qui ne se touchent pas.
- La liaison Rhino n'a jamais tourné dans un vrai Rhino ni dans Grasshopper. Documents a été essayé par deux programmes sur un même dossier, pas par deux personnes sur un partage réseau.
- L'ajustement de surfaces à un vrai scan n'a pas encore été vérifié à la main. Les langues autres que l'anglais sont des brouillons de traduction automatique.
- Les programmes d'installation Windows ne sont pas signés numériquement, et l'image disque macOS n'est pas notariée. Voir [Dépannage](topic:troubleshooting).

Les changements antérieurs sont dans [Nouveautés de la version 0.7](topic:whats-new-0-7).

## Antérieure : 0.8 et 0.8.1

Voici ce qui a changé dans PartCraft 0.8 et 0.8.1 par rapport à la 0.7. La simulation répond pendant que vous modifiez et indique ce qui cède en premier, les assemblages ont droit aux études de mouvement, et de nouveaux espaces de travail créent des surfaces libres et des pièces dimensionnées à partir de la physique. La 0.8.1 est une petite version de correction.

### Nouveautés

**Simulation**

- **Mise à jour pendant la modification.** Cochez {{ui:Mettre à jour pendant que je modifie}} dans le bloc Résoudre, et les résultats suivent vos modifications. Changez une cote, une charge ou le matériau, et une réponse rapide, calculée avec des éléments quatre fois plus grands, apparaît aussitôt ; lorsque vous vous arrêtez une seconde environ, la réponse affinée de l'étude remplace la première. Les résultats indiquent laquelle vous regardez. Sur une console en acier, la réponse rapide était à 1 % près pour la flèche et à environ 4 % près pour la contrainte, par rapport à la réponse affinée. Voir [Vérifier contrainte et flèche](topic:simulation#update-while-you-edit-live).
- **Qu'est-ce qui cède en premier ?** Pour une étude statique ou de flambement, {{ui:Qu'est-ce qui cède en premier ?}} dans le bloc **Casser** augmente les charges jusqu'à ce que la pièce cède. Il liste, du pire au moins grave, le facteur de charge jusqu'à la limite d'élasticité (avec un repère rouge là où la contrainte culmine) et le facteur de charge jusqu'au flambement. Un facteur inférieur à 1 signifie que la pièce cède déjà sous la charge appliquée, et les Problèmes affichent une erreur. Les facteurs viennent d'une étude linéaire ; ils ne valent donc que ce qu'elle vaut. Voir [Vérifier contrainte et flèche](topic:simulation#find-out-what-breaks-first-break-it).
- **Plasticité et contact.** Deux autres types d'études : une étude non linéaire où le matériau suit sa droite jusqu'à la limite d'élasticité puis une pente plus faible, avec la déformation plastique tracée, et une étude de contact où des pièces séparées se poussent (sans frottement) ou restent collées (liées). Un pas de charge qui ne parvient pas à se stabiliser, ou des pièces qui s'enfoncent trop l'une dans l'autre, apparaissent dans le panneau Problèmes. Le frottement, les grands glissements, les grandes rotations, les grandes flèches et la fatigue ne sont pas résolus. Voir [Vérifier contrainte et flèche](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Fichiers pour CalculiX.** {{ui:Exporter}} › {{ui:Fichier de calcul CalculiX (.inp)}} enregistre l'étude pour CalculiX, un programme distinct que vous installez et lancez vous-même ; {{ui:Exporter}} › {{ui:Résultats CalculiX (.frd)}} relit son fichier de résultats sur le même maillage. PartCraft ne lance jamais ce programme, et il le signale si la pièce a changé depuis l'enregistrement du fichier de calcul.

**Assemblages**

- **Études de mouvement.** {{ui:Assemblage}} › {{ui:Mouvement}} pilote la valeur d'une liaison sur une durée que vous donnez (vitesse constante, adoucie, sinusoïdale, ou aller et retour), place l'assemblage à chaque pas avec ses liaisons et ses boucles fermées, et signale les chocs et la proximité des pièces. {{ui:Ajouter un point}} trace la position, la vitesse et l'accélération d'un point, la valeur de la liaison et le jeu en fonction du temps ; {{ui:Enregistrer en CSV}} et {{ui:Enregistrer la courbe}} les écrivent. Après {{ui:Exécuter}}, la barre d'exécution « Pas à pas » déplace l'assemblage à n'importe quel pas. Les réglages de l'étude sont enregistrés dans le fichier d'assemblage. La vitesse et l'accélération sont calculées à partir des positions enregistrées ; utilisez donc davantage de pas si un pic net paraît faible. Voir [Vérifier un assemblage pour les chocs et le mouvement](topic:check-assembly#a-motion-study).

**Surfaces et pièces issues de la physique**

- **Un espace de travail Surfaces.** Choisissez {{ui:Surfaces}} dans la liste {{ui:Espace de travail}} pour des courbes et surfaces NURBS à côté de la pièce : {{ui:Courbe}}, {{ui:Lissage}}, {{ui:Balayage}}, {{ui:Correspondance}} et {{ui:Zébrure}}, avec la continuité (G0, G1 ou G2) mesurée sur les surfaces exactes ; une arête moins bonne que demandé est listée dans les Problèmes, avec un correctif de correspondance. {{ui:Lisser}} mesure les lignes de coque pour détecter les points d'inflexion et les sauts de courbure, et reconstruit celles qui ne sont pas lisses dans votre tolérance. Les surfaces sont enregistrées dans le fichier de pièce et ne modifient pas les fonctions de la pièce. Voir [Surfaces libres (NURBS)](topic:nurbs-surfaces).
- **L'espace de travail Ingénieur.** Choisissez {{ui:Ingénieur}} dans la liste des espaces de travail, choisissez un générateur et cliquez sur {{ui:Nouveau}} : un script dimensionne une pièce à partir de ce qu'elle doit faire (chauffer pour déplacer, débits, pression, matériau, procédé d'impression) avec des formules de manuel, la construit, puis donne les nombres utilisés avec leurs sources, ses vérifications de fabrication et des fichiers pour les outils d'analyse. Les mêmes données donnent la même pièce sur n'importe quel ordinateur. Le générateur est conservé dans la pièce, et l'ouverture d'une pièce ne lance jamais de script. Voir [Pièces issues de la physique : générateurs](topic:engineer-generators) et [Écrire un générateur](topic:write-a-generator).

**Esquisse, dessins et fabrication**

- **Une esquisse à partir d'une photo.** {{ui:Fonctions}} › {{ui:Plus}} › {{ui:Esquisse à partir d'une photo…}} trace une image d'une pièce plate sur fond uni (contour et trous) ou un dessin au stylo, en lignes, arcs et cercles. Vous donnez une seule longueur, vérifiez l'aperçu et créez l'esquisse. Voir [Principes de l'esquisse](topic:sketch-basics#a-sketch-from-a-photo).
- **Mise à l'échelle et découpe pour l'impression.** {{ui:Exporter}} › {{ui:Mettre à l'échelle pour l'impression (STL ou 3MF)…}} met à l'échelle par axe sans modifier la pièce, par exemple pour une marge de retrait. {{ui:Exporter}} › {{ui:Découper pour l'impression (un zip de pièces)…}} découpe une pièce trop grande pour votre plateau en morceaux numérotés, assemblés par des tenons, clavettes, queues d'aronde, trous de goujons ou logements d'aimants. Voir [Imprimer en 3D](topic:print-3d).
- **Feuilles calepinées vers G-code.** {{ui:Exporter}} › {{ui:Feuilles calepinées vers G-code}} lit un DXF calepiné et crée un programme par feuille, via le post que vous choisissez : d'abord les trous et découpes, puis les contours. Il ne prévoit ni entrées de coupe, ni ordre de coupe, ni arêtes communes. Voir [Découper des pièces planes sur des feuilles](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Des dessins qui en font davantage tout seuls.** {{ui:Feuille}} › {{ui:Automatique}} choisit la plus petite feuille de format A qui contient les vues, à la plus grande échelle normalisée allant jusqu'à 1:1. {{ui:Coter les trous}} place une marque de centre sur chaque trou, une légende par dimension, et les positions depuis l'angle inférieur gauche de la vue. Voir [Créer un dessin](topic:drawing-pdf).

**Dans toutes les applications**

- **Langues.** Les applications existent en 54 langues. Celles autres que l'anglais sont des brouillons de traduction automatique jusqu'à leur relecture par un locuteur natif.
- **Lignes de la barre d'outils.** {{ui:Paramètres}} › {{ui:Général}} › {{ui:Lignes de la barre d'outils}} choisit Retour à la ligne (comme avant), 2 lignes ou 1 ligne ; une barre qui ne tient pas défile latéralement. Le ruban Fonctions de PartCraft affiche l'outil le plus utilisé en grand et range les variantes derrière un bouton scindé.
- **Connectez votre IA.** Studio est le hub qui relie un assistant IA personnel aux huit applications, avec une autorisation lecture seule, suggestion ou modification par application. Un assistant connecté peut dimensionner une pièce à partir d'une phrase, par exemple un support pour une charge, montrer son raisonnement et chaque vérification, puis la construire ; il indique ce qu'il n'a pas vérifié (concentration de contraintes, fatigue, fluage des plastiques). Voir [Utiliser PartCraft avec un assistant IA](topic:use-with-ai-assistants).

### Corrigé dans la 0.8.1

- **Gel du curseur en plein écran.** La sélection au survol est désormais limitée en fréquence. La cause est notre meilleure interprétation et n'a pas été confirmée avec la personne qui l'a signalée.
- **Langue à l'exécution.** Studio et les éditions empaquetées peuvent changer de langue pendant l'exécution ; auparavant, elles étaient en anglais seulement. Ce point n'est pas encore testé sur toutes les plateformes : dites-nous si la langue ne change pas.

### Pas encore disponible dans cette version

- Connectez votre IA n'est pas terminé : la connexion en un clic dans Studio, le connecteur hébergé pour l'IA dans le navigateur, votre propre clé API dans Studio et le paquet MCP publié ne sont pas promis. Studio n'a pas d'IA propre.
- Studio n'est pas signé numériquement : Windows peut avertir, et macOS demande un clic droit puis Ouvrir. Voir [Dépannage](topic:troubleshooting).
- Les empilements de cotes ne vont encore que dans une direction : voir [Empilements de tolérances](topic:tolerance-stackup).
- Le reste est listé dans [Ce qui n'est pas encore disponible](topic:not-built-yet).

Les changements antérieurs sont dans [Nouveautés de la version 0.7](topic:whats-new-0-7).
