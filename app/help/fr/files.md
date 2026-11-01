---
title: Fichiers : ouvrir, enregistrer et exporter
summary: Les fichiers de pièce et d'assemblage que PartCraft ouvre et enregistre, chaque format d'export et ce qu'il conserve, où vont les fichiers, et ce qui change hors ligne ou d'un navigateur à l'autre.
keywords: ouvrir, enregistrer, exporter, télécharger, fichier, partcraft.json, fichier d'assemblage, stl, 3mf, step, dxf, pdf, où sont mes fichiers, hors ligne, enregistrer sous
from: c15c2c48
---

PartCraft travaille sur des fichiers de votre ordinateur. Il ne téléverse jamais une pièce, et aucun compte ni stockage cloud n'est en jeu. L'enregistrement dans le cloud n'est pas encore disponible.

## Ce que PartCraft ouvre

| Fichier | Extension | Comment |
|---|---|---|
| Une pièce PartCraft | `.partcraft.json` | {{ui:Ouvrir}}, {{key:Mod+O}}, ou la déposer sur la vue 3D |
| Un assemblage PartCraft | `.partcraft-asm.json` | Pareil : PartCraft voit de quel type il s'agit |
| Un solide STEP | `.step`, `.stp` | Un corps solide lu sous forme de triangles : [Ouvrir un fichier STEP et construire dessus](topic:import-step) |

Les maillages STL, OBJ et 3MF s'ouvrent aussi comme corps solides ([Ouvrir un STL, OBJ ou 3MF](topic:open-meshes)), de même que les fichiers `.3dm` ([Ouvrir un modèle .3dm](topic:open-3dm-files)). Les fichiers DXF, IGES et les fichiers de pièce propres à d'autres programmes ne peuvent pas être ouverts (voir [Ce qui n'est pas encore disponible](topic:not-built-yet)).

Règles à l'ouverture :

- Le nom d'un fichier de pièce ou d'assemblage doit se terminer par `.json`, et le fichier doit peser moins de 50 Mo.
- Les fichiers sont vérifiés avant tout affichage. Un fichier endommagé ou modifié est refusé avec une raison claire, par exemple « Ce n'est pas un fichier PartCraft. »
- Un fichier enregistré par un PartCraft plus récent est refusé : « Ce fichier a été enregistré par un PartCraft plus récent (version de fichier 3) ; celui-ci lit la version 2. » Les fichiers plus anciens s'ouvrent.
- Si la pièce à l'écran a des modifications non enregistrées, PartCraft demande d'abord : {{ui:Annuler}}, {{ui:Abandonner les modifications}} ou {{ui:Enregistrer d'abord}}.

## Enregistrer

{{ui:Enregistrer}} ou {{key:Mod+S}} enregistre ce qui est à l'écran :

- Pour une pièce : `<nom de la pièce>.partcraft.json`, l'historique complet (esquisses, relations, cotes, fonctions, position du retour arrière), les notes de coupe, de détail et de tolérancement géométrique de la feuille de dessin, et le texte intégral de tout solide STEP importé dans une version précédente. Les fonctions que cette version ne sait pas construire sont réenregistrées telles quelles. Le solide lui-même n'est pas stocké ; PartCraft le reconstruit à partir de l'historique à l'ouverture du fichier.
- Dans un assemblage : `<nom de l'assemblage>.partcraft-asm.json`, avec **toutes les pièces à l'intérieur**. Un seul fichier porte tout l'assemblage, vous pouvez donc l'envoyer seul.

Enregistrer est un **téléchargement**. Votre navigateur place le fichier dans son dossier de téléchargements, ou demande où le mettre si vous l'avez réglé ainsi. Enregistrer de nouveau crée un nouveau téléchargement ; le navigateur peut le nommer `Part1 (1).partcraft.json` plutôt que remplacer l'ancien. Renommez ou déplacez les fichiers dans {{pick:mac=le Finder|windows=l'Explorateur de fichiers|linux=votre gestionnaire de fichiers}} comme vous voulez.

Les caractères autres que lettres, chiffres, espaces, `_`, `.` et `-` dans le nom de la pièce deviennent `_` dans le nom du fichier.

:::tip
La plupart des navigateurs ont un réglage pour demander où enregistrer chaque téléchargement. Activez-le si vous voulez un choix « Enregistrer sous » à chaque fois : dans Chrome et Edge, il est sous Téléchargements dans les paramètres ; dans Firefox sous Général, Fichiers et applications ; dans Safari sous Général, Emplacement de téléchargement des fichiers.
:::

Pour en savoir plus sur la destination des téléchargements et la façon de garder vos fichiers en sécurité : [Où vont vos fichiers](common:your-files).

## Exporter

Le menu {{ui:Exporter}} écrit d'autres formats. Chacun est un téléchargement, nommé d'après la pièce.

| Élément de menu | Fichier | Contenu |
|---|---|---|
| {{ui:STL, pour l'impression 3D}} | `<nom>.stl` | STL binaire des triangles du solide, en millimètres, **Z vers le haut** |
| {{ui:3MF, pour l'impression 3D}} | `<nom>.3mf` | 3MF avec le solide comme un seul objet, en millimètres, **Z vers le haut** |
| {{ui:STEP AP242 (solide exact)}} | `<nom>.step` | Pas encore disponible dans cette version (grisé) : il demande un noyau exact |
| {{ui:STEP AP214 (solide exact)}} | `<nom>.step` | Pas encore disponible dans cette version (grisé) |
| {{ui:STEP (facetté, noyau maillage)}} | `<nom>.step` | Un solide fait de faces planes issues du maillage : **les surfaces rondes sont de nombreuses petites facettes planes**. En millimètres, dans les axes propres de PartCraft (Y vers le haut). Le STEP à utiliser pour d'autres programmes de CAO dans cette version |
| {{ui:DXF de l'esquisse ou de la face plane}} | `<nom> - <esquisse>.dxf` ou `<nom> - face.dxf` | DXF R12. Une esquisse : lignes, arcs, cercles et points dans les coordonnées propres de l'esquisse, sur les calques PROFILE, CONSTRUCTION et POINTS. Une face plane choisie : ses contours en polylignes fermées (arêtes rondes sous forme de facettes) |
| {{ui:Dessin (PDF) : vues, coupe, détail, tolérancement géométrique}} | `<nom> - drawing.pdf` | La feuille de dessin A3 : trois vues, isométrique, coupe et détail s'ils sont définis, dimensions hors tout, symboles de tolérancement géométrique, cartouche |

:::note
{{ui:STEP AP242 (solide exact)}} et {{ui:STEP AP214 (solide exact)}} ne sont pas encore disponibles dans cette version : utilisez {{ui:STEP (facetté, noyau maillage)}}. Il a la bonne forme et le bon volume, mais chaque face ronde est faite de nombreuses facettes planes, si bien que d'autres programmes ne peuvent pas sélectionner un trou comme un cylindre. Réglez d'abord **Courbes** sur une valeur plus fine si cela compte.
:::

- Les exports portent sur la pièce à l'écran. L'export est désactivé dans un assemblage ; il n'y a pas encore d'export d'assemblage.
- Le STL, le 3MF, le STEP facetté et le DXF de face sont toujours faits de facettes. Le réglage **Courbes** (dans le panneau de droite quand rien n'est sélectionné) règle leur finesse, de 32 à 256 facettes par tour. Choisissez Fine ou Très fine avant d'exporter un STL ou un 3MF pour une impression lisse.
- Le dessin PDF utilise la police Helvetica intégrée au lecteur. Les caractères qu'elle ne sait pas afficher sont imprimés « ? ».

Pas à pas : [Exporter pour l'impression, STEP et DXF](topic:export-files) et [Faire une feuille de dessin](topic:drawing-pdf).

## Travail non enregistré

- PartCraft garde une copie de récupération de la pièce ou de l'assemblage ouvert dans ce navigateur un instant après chaque modification, de sorte qu'un plantage ou un onglet fermé ne le perde pas : la prochaine fois que vous ouvrez PartCraft, il demande « Récupérer votre travail ? ». Ce n'est pas un enregistrement : enregistrez dans un fichier pour conserver votre travail. Voir [Récupérer un travail non enregistré](common:recover).
- Si vous essayez de fermer l'onglet ou de recharger avec des modifications non enregistrées, le navigateur demande « Quitter le site ? ». C'est la boîte propre au navigateur ; PartCraft ne peut pas changer sa formulation.
- {{ui:Nouveau}}, {{ui:Ouvrir}} et la fermeture d'un assemblage demandent confirmation avant d'abandonner des modifications non enregistrées.

## En ligne et hors ligne

Tout se passe sur votre ordinateur : le noyau maillage (un programme WebAssembly) est téléchargé avec l'application et construit la géométrie localement, et les fichiers sont lus depuis votre disque et écrits dessus. Aucune donnée de pièce ne passe par le réseau. Voir [Le noyau maillage](topic:solid-kernels).

Pour travailler sans aucune connexion, enregistrez PartCraft pour l'utiliser hors ligne pendant que vous êtes en ligne : choisissez {{ui:Enregistrer pour le hors ligne}} dans la barre de l'application et patientez pendant le décompte (« Enregistrement de 40 sur 212 ») jusqu'à l'indication **Prêt hors ligne**. La copie enregistrée comprend la bibliothèque 3D et le noyau maillage ; ensuite la modélisation, l'enregistrement, tous les exports et les dessins fonctionnent hors ligne. Si elle indique **Enregistrement impossible**, cliquez dessus pour réessayer en ligne ; **Hors ligne indisponible** signifie que cette fenêtre de navigateur ne peut pas conserver de copie (fenêtres privées et certains ordinateurs gérés). Une fois la copie enregistrée, un clic sur **Prêt hors ligne** propose {{ui:Enregistrer à nouveau (obtenir la version la plus récente)}} et {{ui:Supprimer la copie hors ligne}}. Détails : [Travailler hors ligne](common:offline).

:::online
Vous êtes en ligne. Même sans enregistrement pour le hors ligne, une fois PartCraft chargé et la pastille de la barre d'état indiquant « Noyau maillage », vous pouvez continuer à travailler si la connexion tombe. Ne rechargez simplement pas la page avant d'être de nouveau en ligne.
:::

:::offline
Vous êtes hors ligne. Si PartCraft est déjà ouvert, continuez à travailler ; l'enregistrement et l'export fonctionnent toujours. Si la barre de l'application indique **Prêt hors ligne**, PartCraft s'ouvre aussi depuis zéro sans connexion ; sinon, ne rechargez pas cet onglet.
:::

## Différences entre navigateurs

- **Téléchargements.** Chaque navigateur a son propre dossier de téléchargements et sa propre façon de demander. Si un navigateur demande si ce site peut télécharger des fichiers, autorisez-le, sinon l'enregistrement et l'export ne peuvent pas fonctionner.
- **Le glisser-déposer** d'un fichier sur la vue fonctionne dans Chrome, Edge, Firefox et Safari.
- **Fichiers depuis un téléphone ou une tablette.** Sur iPhone et iPad, Ouvrir affiche l'app Fichiers ; les fichiers enregistrés vont dans Fichiers, Téléchargements. Sous Android, ils vont dans le dossier Téléchargements.

Le contenu des fichiers ne diffère pas d'un navigateur ou d'un système d'exploitation à l'autre.
