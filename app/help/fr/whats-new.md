---
title: Nouveautés des versions 0.8 et 0.8.1
summary: PartCraft 0.8 ajoute l'analyse en direct pendant la modification, un contrôle « Qu'est-ce qui cède en premier ? », des études de plastification et de contact avec des jeux de données pour un solveur externe, des études de mouvement pour les assemblages, un espace de travail Surfaces pour les surfaces libres, des pièces dimensionnées par la physique dans l'espace Ingénieur, la transformation d'une photo en esquisse, des exports pour l'impression, des panneaux calepinés vers G-code et des plans qui cotent leurs trous. 0.8.1 corrige un figeage du curseur en plein écran.
keywords: nouveautés, notes de version, journal des modifications, modifications, 0.8, 0.8.1, version, nouvelles fonctions, analyse en direct, mise à jour pendant la modification, casser, qu'est-ce qui cède en premier, facteur de charge, non linéaire, limite d'élasticité, déformation plastique, contact, calculix, étude de mouvement, jeu, surfaces, nurbs, lisser, carène, zébrure, ingénieur, générateur, corps généré, esquisse à partir d'une photo, mise à l'échelle pour l'impression, découpe pour l'impression, retrait, panneaux calepinés, g-code, dessin, coter les trous, assistant, mcp, langues, lignes de la barre d'outils
from: 62e4dce2
---

Voici ce qui a changé dans PartCraft 0.8 et 0.8.1, par rapport à la version 0.7. La simulation répond pendant vos modifications et indique ce qui cède en premier, les assemblages ont des études de mouvement, et de nouveaux espaces de travail permettent de créer des surfaces libres et des pièces dimensionnées par la physique. La version 0.8.1 est une petite version corrective.

## Nouveautés

### Simulation

- **Mettre à jour pendant que je modifie.** Cochez {{ui:Update while I edit}} dans le bloc Résolution, et les réponses suivent vos modifications. Modifiez une cote, une charge ou le matériau : une réponse rapide, calculée avec des éléments quatre fois plus grands, apparaît aussitôt ; lorsque vous vous arrêtez une seconde environ, la réponse affinée de l'étude remplace la première. Les résultats indiquent laquelle des deux vous consultez. Sur une console en acier, la réponse rapide ne s'écartait pas de plus de 1 % de la flèche, et d'environ 4 % de la contrainte, par rapport à la réponse affinée. Voir [Vérifier la contrainte et la flèche](topic:simulation#update-while-you-edit-live).
- **Ce qui cède en premier.** Pour une étude statique ou de flambement, {{ui:What breaks first?}} dans le bloc **Casse-le** met à l'échelle les charges jusqu'à ce que la pièce cède. Il liste, du pire au meilleur, le facteur de charge jusqu'à la limite d'élasticité (avec un repère rouge à l'endroit où la contrainte est maximale) et le facteur de charge jusqu'au flambement. Un facteur inférieur à 1 signifie que la pièce cède déjà sous la charge appliquée, et le panneau Problèmes affiche une erreur. Les facteurs proviennent d'une étude linéaire : ils ne valent que ce que vaut celle-ci. Voir [Vérifier la contrainte et la flèche](topic:simulation#find-out-what-breaks-first-break-it).
- **Plastification et contact.** Deux types d'étude de plus : une étude non linéaire où le matériau suit une droite jusqu'à la limite d'élasticité puis une pente plus faible, avec la déformation plastique tracée, et une étude de contact où des pièces distinctes se poussent (sans frottement) ou restent collées (liées). Un pas de charge qui ne converge pas, ou des pièces qui s'enfoncent trop l'une dans l'autre, s'affichent dans le panneau Problèmes. Le frottement, les grands glissements, les grandes rotations, les grands déplacements et la fatigue ne sont pas résolus. Voir [Vérifier la contrainte et la flèche](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Jeux de données pour CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} enregistre l'étude pour CalculiX, un programme distinct que vous installez et lancez vous-même ; {{ui:Export}} › {{ui:CalculiX results (.frd)}} relit son fichier de résultats sur le même maillage. PartCraft ne lance jamais ce programme et le signale si la pièce a été modifiée depuis l'enregistrement du jeu de données.

### Assemblages

- **Études de mouvement.** {{ui:Assembly}} › {{ui:Motion}} pilote la valeur d'une liaison sur une durée que vous indiquez (vitesse constante, progressive, sinusoïdale, ou aller-retour), place l'assemblage à chaque pas avec ses liaisons et ses boucles fermées, et signale les conflits ainsi que la proximité des pièces. {{ui:Add a point}} trace la position, la vitesse et l'accélération d'un point, la valeur de la liaison et le jeu en fonction du temps ; {{ui:Save CSV}} et {{ui:Save plot}} les écrivent dans un fichier. Après {{ui:Run}}, la barre « Pas à pas dans l'exécution » amène l'assemblage à n'importe quel pas. Les réglages de l'étude sont enregistrés dans le fichier d'assemblage. La vitesse et l'accélération sont calculées à partir des positions enregistrées : utilisez davantage de pas si un pic brusque apparaît trop faible. Voir [Vérifier un assemblage pour les conflits et le mouvement](topic:check-assembly#a-motion-study).

### Surfaces et pièces issues de la physique

- **Un espace de travail Surfaces.** Choisissez {{ui:Surfaces}} dans la liste {{ui:Workspace}} pour des courbes et surfaces NURBS à côté de la pièce : {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} et {{ui:Zebra}}, avec une continuité (G0, G1 ou G2) mesurée sur les surfaces exactes. Une arête moins bonne que demandé est listée dans Problèmes avec une correction « Correspondance ». {{ui:Fair}} mesure les lignes de carène pour repérer les points d'inflexion et les sauts de courbure, puis reconstruit les lignes défectueuses dans votre tolérance. Les surfaces sont enregistrées dans le fichier de pièce et ne modifient pas les fonctions de la pièce. Voir [Surfaces libres (NURBS)](topic:nurbs-surfaces).
- **L'espace Ingénieur.** Choisissez {{ui:Engineer}} dans le sélecteur d'espace de travail, choisissez un générateur et cliquez sur {{ui:New}} : un script dimensionne une pièce à partir de ce qu'elle doit faire (chaleur à transporter, débits, pression, matériau, procédé d'impression) à l'aide de formules de cours, puis la construit. Il restitue les valeurs utilisées avec leurs sources, ses contrôles de fabrication et des fichiers pour les outils d'analyse. Les mêmes données donnent la même pièce sur n'importe quel ordinateur. Le générateur est conservé dans la pièce, et ouvrir une pièce n'exécute jamais de script. Voir [Pièces issues de la physique : générateurs](topic:engineer-generators) et [Écrire un générateur](topic:write-a-generator).

### Esquisse, plans et fabrication

- **Une esquisse à partir d'une photo.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} transforme une image d'une pièce plane sur fond uni (contour et trous) ou un dessin au stylo en lignes, arcs et cercles. Vous indiquez une seule longueur, vérifiez l'aperçu et créez l'esquisse. Voir [Bases de l'esquisse](topic:sketch-basics#a-sketch-from-a-photo).
- **Mise à l'échelle et découpe pour l'impression.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} met à l'échelle selon chaque axe sans modifier la pièce, par exemple pour compenser un retrait. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} découpe une pièce trop grande pour votre plateau en pièces numérotées, assemblées par des goujons, des clavettes, des queues d'aronde, des trous de goupilles ou des logements d'aimants. Voir [Imprimer en 3D](topic:print-3d).
- **Panneaux calepinés vers G-code.** {{ui:Export}} › {{ui:Nested sheets to G-code}} lit un DXF calepiné et produit un programme par panneau, avec le post-processeur que vous choisissez : d'abord les trous et découpes intérieures, puis les contours. Il ne planifie pas les amorces de coupe, l'ordre de coupe ni les arêtes communes. Voir [Caler des pièces planes sur des panneaux](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Des plans plus automatiques.** {{ui:Sheet}} › {{ui:Automatic}} choisit la plus petite feuille au format A qui contient les vues, à l'échelle normalisée la plus grande jusqu'à 1:1. {{ui:Dimension the holes}} place un repère de centre sur chaque trou, une légende par dimension et les positions depuis l'angle inférieur gauche de la vue. Voir [Réaliser un plan](topic:drawing-pdf).

### Dans toutes les applications

- **Langues.** Les applications existent en 54 langues. Celles autres que l'anglais sont des brouillons automatiques tant qu'un locuteur natif ne les a pas relues.
- **Lignes de la barre d'outils.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} propose Retour à la ligne (comme avant), 2 lignes ou 1 ligne ; une barre trop étroite défile latéralement. Le ruban Fonctions de PartCraft affiche l'outil le plus utilisé en grand et place les variantes derrière un bouton divisé.
- **Connecter votre IA.** Studio est le hub pour connecter un assistant de votre choix aux huit applications, avec une autorisation lecture seule, suggestion ou modification pour chaque application. Un assistant connecté peut dimensionner une pièce à partir d'une phrase, comme une équerre pour une charge, montrer son raisonnement et chaque contrôle, puis la construire ; il indique ce qu'il n'a pas vérifié (concentration de contrainte, fatigue, fluage des plastiques). Voir [Utiliser PartCraft avec un assistant IA](topic:use-with-ai-assistants).

## Corrigé dans 0.8.1

- **Figeage du curseur en plein écran.** La sélection au survol est désormais limitée en fréquence. La cause est notre meilleure hypothèse et n'a pas été confirmée avec la personne qui l'a signalée.
- **Langue à l'exécution.** Studio et les éditions empaquetées peuvent changer de langue pendant l'exécution ; auparavant, elles n'étaient qu'en anglais. Ce point n'est pas encore testé sur toutes les plateformes : dites-nous si la langue ne change pas.

## Pas encore dans cette version

- Connecter votre IA n'est pas terminé : la connexion en un clic dans Studio, le connecteur hébergé pour l'IA du navigateur, votre propre clé API dans Studio et le paquet MCP publié ne sont pas promis. Studio n'a pas d'IA propre.
- Studio n'est pas signé numériquement : Windows peut afficher un avertissement, et macOS demande de faire un clic droit puis Ouvrir. Voir [Dépannage](topic:troubleshooting).
- Les chaînes de tolérances restent dans un seul sens : voir [Chaînes de tolérances](topic:tolerance-stackup).
- Le reste figure dans [Ce qui n'est pas encore disponible](topic:not-built-yet).

Les modifications antérieures sont décrites dans [Nouveautés de la version 0.7](topic:whats-new-0-7).
