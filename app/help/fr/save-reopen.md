---
title: Enregistrer, rouvrir et poursuivre le travail
summary: Enregistrez pièces et assemblages sur votre ordinateur, nommez-les, rouvrez-les par bouton, raccourci ou glisser-déposer, conservez des versions et évitez de perdre votre travail dans un onglet de navigateur.
keywords: enregistrer, ouvrir, rouvrir, charger, télécharger, versions, sauvegarde, renommer, nom de fichier, travail perdu, quitter le site, partcraft.json, partcraft-asm.json, nouvelle pièce
from: c18a5abc
---

PartCraft ne conserve rien entre deux visites. Votre pièce reste dans l'onglet du navigateur jusqu'à ce que vous l'enregistriez dans un fichier, et elle revient lorsque vous ouvrez ce fichier.

## Enregistrer une pièce

1. Nommez la pièce : cliquez dans l'espace vide de la vue pour ne rien sélectionner, puis saisissez le **Nom** dans le panneau de droite et appuyez sur {{key:Enter}}. Le titre de l'historique change en conséquence.
2. Appuyez sur {{key:Mod+S}} ou choisissez {{ui:Enregistrer}}.
3. Le navigateur télécharge `<nom>.partcraft.json`. La barre d'état affiche « Fichier enregistré : Bracket.partcraft.json (historique complet ; rouvrez-le ici pour continuer les modifications). »

Si une esquisse est ouverte, l'enregistrement la ferme d'abord.

Le fichier contient chaque esquisse, relation, cote et fonction, ainsi que les fonctions supprimées, la position de la barre de retour arrière, les réglages de la feuille de dessin et les notes de tolérancement géométrique, et le texte intégral de tout solide STEP importé. Votre liste d'annulation n'est pas enregistrée.

## Enregistrer un assemblage

Dans un assemblage, {{ui:Enregistrer}} ou {{key:Mod+S}} télécharge `<nom de l'assemblage>.partcraft-asm.json`. Chaque pièce y est stockée : vous n'avez pas besoin des fichiers de pièces séparés pour le rouvrir.

Pendant que vous modifiez une pièce depuis un assemblage, {{key:Mod+S}} enregistre cette seule pièce sous forme de `.partcraft.json`. Choisissez d'abord {{ui:Retour}}, puis enregistrez, pour enregistrer l'assemblage complet.

## Rouvrir

Au choix :

- choisissez {{ui:Ouvrir}} ou appuyez sur {{key:Mod+O}}, puis sélectionnez le fichier ;
- glissez le fichier depuis {{pick:mac=Finder|windows=Explorateur de fichiers|linux=votre gestionnaire de fichiers}} vers la vue 3D (« Déposez une pièce PartCraft pour l'ouvrir » apparaît).

PartCraft distingue les pièces des assemblages selon leur contenu, si bien que les deux s'ouvrent de la même façon. Un fichier `.step` ou `.stp` s'ouvre comme solide importé : voir [Ouvrir un fichier STEP et construire à partir de lui](topic:import-step). La barre d'état confirme l'ouverture : « Fichier ouvert : Bracket.partcraft.json : 7 fonctions. » ou « Fichier ouvert : Hinge.partcraft-asm.json : 3 pièces, 2 liaisons. »

Si la pièce affichée contient des modifications non enregistrées, PartCraft demande d'abord : {{ui:Annuler}}, {{ui:Abandonner les modifications}} ou {{ui:Enregistrer d'abord}}.

:::warning
Fermez un assemblage ({{ui:Fermer}}) avant d'ouvrir un fichier de pièce. Si vous ouvrez une pièce alors qu'un assemblage est affiché, la pièce se charge derrière l'assemblage et vous ne la voyez qu'après l'avoir fermé. Ouvrir un fichier d'assemblage remplace aussi un assemblage non enregistré, sans demander : enregistrez-le d'abord.
:::

## Recommencer

{{ui:Nouveau}} crée une « Part1 » vide. Il demande d'abord s'il y a des modifications non enregistrées, et ferme un assemblage ouvert (en demandant s'il n'est pas enregistré).

## Conserver des versions

Chaque enregistrement est un nouveau téléchargement ; vous pouvez donc conserver des versions simplement en gardant les fichiers :

- Mettez une version ou une date dans le nom avant d'enregistrer : « Bracket rév B ».
- Votre navigateur peut ajouter « (1) », « (2) » lorsqu'un fichier du même nom existe déjà dans le dossier des téléchargements. La version la plus récente est celle au numéro le plus élevé ; vous pouvez aussi vérifier la date dans {{pick:mac=Finder|windows=Explorateur de fichiers|linux=votre gestionnaire de fichiers}}.
- Déplacez les fichiers terminés hors du dossier des téléchargements, vers le dossier de votre projet.

Voir [Emplacement de vos fichiers](common:your-files) pour l'emplacement des téléchargements sur chaque système.

## Ne pas perdre de travail

- Enregistrez avant de fermer l'onglet, de recharger la page ou de laisser l'ordinateur en veille trop longtemps. Le navigateur demande « Quitter le site ? » si vous tentez de fermer avec des modifications non enregistrées, mais un plantage ou un ordinateur portable fermé ne donne aucun avertissement.
- Les fenêtres de navigation privée ou incognito fonctionnent, mais rien d'autre ne change : le fichier reste la seule copie.
- L'enregistrement dans le cloud et l'historique des versions ne sont pas encore disponibles.
