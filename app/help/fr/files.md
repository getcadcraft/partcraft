---
title: "Fichiers : ouvrir, enregistrer et exporter"
summary: "Les fichiers de pièce et d'assemblage que PartCraft ouvre et enregistre, chaque format d'export et ce qu'il conserve, où vont les fichiers, et ce qui change hors connexion ou d'un navigateur à l'autre."
keywords: "ouvrir, enregistrer, exporter, télécharger, fichier, partcraft.json, fichier d'assemblage, stl, 3mf, step, dxf, pdf, où sont mes fichiers, hors ligne, enregistrer sous"
from: e5fbc7e3
---

PartCraft travaille sur des fichiers de votre ordinateur. Il ne téléverse jamais une pièce, et aucun compte ni stockage cloud n'est impliqué. L'enregistrement dans le cloud n'est pas encore disponible.

## Ce que PartCraft ouvre

| Fichier | Extension | Comment |
|---|---|---|
| Une pièce PartCraft | `.partcraft.json` | {{ui:Open}}, {{key:Mod+O}}, ou déposez-la dans la vue 3D |
| Un assemblage PartCraft | `.partcraft-asm.json` | Idem : PartCraft reconnaît le type de fichier |
| Un solide STEP | `.step`, `.stp` | Un corps solide lu en triangles : [Ouvrir un fichier STEP et poursuivre la modélisation](topic:import-step) |

Les maillages STL, OBJ et 3MF s'ouvrent aussi comme corps solides ([Ouvrir un STL, OBJ ou 3MF](topic:open-meshes)), de même que les fichiers `.3dm` ([Ouvrir un modèle .3dm](topic:open-3dm-files)). Les fichiers DXF, IGES et les fichiers de pièces propres à d'autres logiciels ne peuvent pas être ouverts (voir [Ce qui n'est pas encore disponible](topic:not-built-yet)).

Règles à l'ouverture :

- Le nom d'un fichier de pièce ou d'assemblage doit se terminer par `.json`, et le fichier doit faire moins de 50 MB.
- Les fichiers sont vérifiés avant tout affichage. Un fichier endommagé ou modifié est refusé avec une raison simple, par exemple « Ce n'est pas un fichier PartCraft. »
- Un fichier enregistré par une version plus récente de PartCraft est refusé : « Ce fichier a été enregistré par une version plus récente de PartCraft (version de fichier 3) ; celle-ci lit la version 2. » Les anciens fichiers s'ouvrent.
- Si la pièce affichée a des modifications non enregistrées, PartCraft demande d'abord : {{ui:Cancel}}, {{ui:Discard changes}} ou {{ui:Save first}}.

## Enregistrer

{{ui:Save}} ou {{key:Mod+S}} enregistre ce qui est affiché :

- Pour une pièce : `<part name>.partcraft.json`, l'historique complet (esquisses, relations, cotes, fonctions, position du retour en arrière), les notes de coupe, de détail et de tolérancement géométrique de la feuille de dessin, et le texte intégral de tout solide STEP importé par une version antérieure. Les fonctions que cette version ne peut pas construire sont enregistrées telles quelles. Le solide lui-même n'est pas enregistré ; PartCraft le reconstruit à partir de l'historique à l'ouverture du fichier.
- Pour un assemblage : `<assembly name>.partcraft-asm.json`, avec **chaque pièce à l'intérieur**. Un seul fichier contient tout l'assemblage, que vous pouvez donc envoyer seul.

L'enregistrement est un **téléchargement**. Votre navigateur place le fichier dans son dossier de téléchargements, ou demande où le placer si vous l'avez configuré ainsi. Enregistrer à nouveau crée un nouveau téléchargement ; le navigateur peut le nommer `Part1 (1).partcraft.json` au lieu de remplacer l'ancien. Renommez ou déplacez les fichiers dans {{pick:mac=Finder|windows=Explorateur de fichiers|linux=votre gestionnaire de fichiers}} selon vos besoins.

Les caractères autres que les lettres, les chiffres, les espaces, `_`, `.` et `-` dans le nom de la pièce deviennent `_` dans le nom du fichier.

:::tip
La plupart des navigateurs proposent un réglage pour demander où enregistrer chaque téléchargement. Activez-le si vous voulez choisir « Enregistrer sous » à chaque fois : dans Chrome et Edge, il se trouve dans Téléchargements, dans les paramètres ; dans Firefox, sous Général, Fichiers et applications ; dans Safari, sous Général, Emplacement de téléchargement des fichiers.
:::

Pour en savoir plus sur l'emplacement des téléchargements et la sécurité de vos fichiers : [Où vont vos fichiers](common:your-files).

## Exporter

Le menu {{ui:Export}} écrit d'autres formats. Chacun est un téléchargement, nommé d'après la pièce.

| Élément de menu | Fichier | Contenu |
|---|---|---|
| {{ui:STL, for 3D printing}} | `<name>.stl` | STL binaire des triangles du solide, en millimètres, **Z vers le haut** |
| {{ui:3MF, for 3D printing}} | `<name>.3mf` | 3MF avec le solide comme un seul objet, en millimètres, **Z vers le haut** |
| {{ui:STEP AP242 (exact solid)}} | `<name>.step` | Un solide exact, en millimètres, Z vers le haut : faces rondes en cylindres, cônes, sphères et tores exacts. Le STEP à utiliser pour les autres logiciels de CAO et de FAO |
| {{ui:STEP AP214 (exact solid)}} | `<name>.step` | Le même solide exact dans le schéma AP214 plus ancien |
| {{ui:STEP (faceted, mesh kernel)}} | `<name>.step` | Un solide fait de faces planes issues du maillage : **les surfaces rondes sont de nombreuses petites facettes planes**. En millimètres, dans les axes propres de PartCraft (Y vers le haut). Pour un logiciel qui refuse le fichier exact |
| {{ui:DXF of the sketch or flat face}} | `<name> - <sketch>.dxf` ou `<name> - face.dxf` | DXF R12. Une esquisse : lignes, arcs, cercles et points dans les coordonnées propres de l'esquisse, sur les calques PROFILE, CONSTRUCTION et POINTS. Une face plane choisie : ses contours en polylignes fermées (arêtes rondes en facettes) |
| {{ui:Drawing (PDF): views, section, detail, GD&T}} | `<name> - drawing.pdf` | La feuille de dessin A3 : trois vues, isométrique, coupe et détail si définis, encombrements, symboles de tolérancement géométrique, cartouche |

:::note
{{ui:STEP AP242 (exact solid)}} écrit les trous, bossages, congés, cônes, sphères et tores sur leurs surfaces exactes, de sorte qu'un autre logiciel peut sélectionner un trou comme un cylindre ; **Courbes** ne le modifie pas. Les flancs en spline, les filetages modélisés et les maillages importés n'ont pas de surface exacte et restent des facettes planes dans le même solide ; la barre d'état indique combien. {{ui:STEP (faceted, mesh kernel)}} écrit chaque face ronde en facettes.
:::

- Les exports portent sur la pièce affichée. L'export est désactivé dans un assemblage ; il n'existe pas encore d'export d'assemblage.
- Les STL, 3MF, le STEP facetté et le DXF de face sont toujours constitués de facettes. Le réglage **Courbes** (dans le panneau de droite, sans rien sélectionner) règle leur finesse, de 32 à 256 facettes par tour. Choisissez Fin ou Très fin avant d'exporter un STL ou un 3MF pour une impression lisse.
- Le dessin PDF utilise la police Helvetica intégrée au lecteur. Les caractères qu'elle ne peut pas afficher s'impriment sous forme de « ? ».

Pas à pas : [Exporter pour l'impression, STEP et DXF](topic:export-files) et [Créer une feuille de dessin](topic:drawing-pdf).

## Travail non enregistré

- PartCraft conserve une copie de récupération de la pièce ou de l'assemblage ouvert dans ce navigateur peu après chaque modification : un plantage ou un onglet fermé ne la fait pas perdre. À la prochaine ouverture de PartCraft, il demande « Récupérer votre travail ? ». Ce n'est pas un enregistrement : enregistrez dans un fichier pour conserver votre travail. Voir [Récupérer un travail non enregistré](common:recover).
- Si vous essayez de fermer l'onglet ou de le recharger avec des modifications non enregistrées, le navigateur demande « Quitter le site ? ». C'est la boîte propre au navigateur ; PartCraft ne peut pas en modifier le texte.
- {{ui:New}}, {{ui:Open}} et la fermeture d'un assemblage demandent confirmation avant d'abandonner les modifications non enregistrées.

## En ligne et hors ligne

Tout se passe sur votre ordinateur : le noyau maillage (un programme WebAssembly) est téléchargé avec l'application et construit la géométrie localement, et les fichiers sont lus et écrits sur votre disque. Aucune donnée de pièce ne transite par le réseau. Voir [Le noyau maillage](topic:solid-kernels).

Pour travailler sans aucune connexion, enregistrez PartCraft pour l'utilisation hors ligne pendant que vous êtes en ligne : choisissez {{ui:Save for offline}} dans la barre d'application et attendez le compte à rebours (« Enregistrement 40 sur 212 ») jusqu'à l'affichage de **Hors ligne prêt**. La copie enregistrée inclut la bibliothèque 3D et le noyau maillage ; ensuite, la modélisation, l'enregistrement, tous les exports et les dessins fonctionnent hors ligne. Si l'affichage indique **Enregistrement impossible**, cliquez dessus pour réessayer en ligne ; **Hors ligne indisponible** signifie que cette fenêtre du navigateur ne peut pas conserver de copie (fenêtres privées et certains ordinateurs gérés). Une fois la copie enregistrée, cliquer sur **Hors ligne prêt** propose {{ui:Save again (get the newest version)}} et {{ui:Remove the offline copy}}. Détails : [Travailler hors ligne](common:offline).

:::online
Vous êtes en ligne. Même sans enregistrement pour l'utilisation hors ligne, une fois PartCraft chargé et que la pastille de la barre d'état affiche « Noyau maillage », vous pouvez continuer à travailler si la connexion tombe. Ne rechargez simplement pas la page avant d'être de nouveau en ligne.
:::

:::offline
Vous êtes hors ligne. Si PartCraft est déjà ouvert, continuez à travailler ; l'enregistrement et l'export fonctionnent toujours. Si la barre d'application affiche **Hors ligne prêt**, PartCraft s'ouvre aussi sans connexion, depuis le début ; sinon, ne rechargez pas cet onglet.
:::

## Différences entre navigateurs

- **Téléchargements.** Chaque navigateur a son propre dossier de téléchargements et sa propre manière de demander. Si un navigateur demande si ce site peut télécharger des fichiers, autorisez-le, sans quoi l'enregistrement et l'export ne peuvent pas fonctionner.
- **Glisser-déposer** d'un fichier sur la vue fonctionne dans Chrome, Edge, Firefox et Safari.
- **Fichiers depuis un téléphone ou une tablette.** Sur iPhone et iPad, Ouvrir affiche l'app Fichiers ; les fichiers enregistrés vont dans Fichiers, Téléchargements. Sur Android, ils vont dans le dossier Téléchargements.

Le contenu des fichiers est identique d'un navigateur ou d'un système d'exploitation à l'autre.
