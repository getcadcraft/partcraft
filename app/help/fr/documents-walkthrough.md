---
title: Documents et révisions (le coffre)
summary: Un parcours pas à pas sur un vrai chantier : placer un dossier de projet de pièces et d'assemblages sous contrôle, extraire une pièce, la modifier, l'archiver avec une note, la publier, voir ce qui l'utilise et la nomenclature, ce que voit une deuxième personne pendant le verrouillage, et son fonctionnement avec les dossiers cloud.
keywords: coffre, documents, pas à pas, tutoriel, extraire, archiver, révision, publication, approuver, verrouiller, historique, où utilisé, nomenclature, bom, assemblage, dossier cloud, dossier de projet, deux personnes, dossier partagé
from: 0a5e6983
---

## Ce que vous allez faire

Vous êtes Ana, et vous travaillez sur la clinique Riverside avec un collègue, Ben. Les pièces et les assemblages du projet se trouvent dans un même dossier auquel vous avez accès tous les deux (un lecteur partagé, un dossier synchronisé ou un dossier cloud). À la fin, un fichier sera passé de sa première copie à une révision publiée **A**, aura été modifié à nouveau sous la forme **B.1**, vous aurez vu qui a fait quoi, et vous aurez vu ce que voit Ben lorsque vous tenez le fichier.

Tout est conservé dans un dossier caché `.ccvault`, à côté de vos fichiers : pas de serveur, rien n'est envoyé (un dossier cloud fait exception, voir la dernière étape). Pour tous les boutons et toutes les règles au même endroit, consultez la rubrique *Documents : extraction, révisions et publication* là où votre application la propose.

## 1. Préparer le dossier du projet

1. Choisissez {{ui:Documents…}} dans le groupe **Fichier** de la barre d'outils.
2. Choisissez {{ui:Choisir le dossier du projet}} et sélectionnez le dossier qui contient les pièces et les assemblages du projet. (Les dossiers de projet fonctionnent dans Studio et dans les navigateurs capables d'ouvrir un dossier, comme Chrome et Edge. Dans les autres navigateurs, le panneau l'indique.)
3. Choisissez {{ui:Modifier}} à côté de **Vous :** et tapez votre nom, `Ana` (si l'application le demande, aussi le nom de cet ordinateur). Le panneau affiche maintenant *Vous : Ana sur* et votre ordinateur. Votre nom accompagne tout ce que vous faites.
4. Choisissez {{ui:Créer un coffre dans ce dossier}} et tapez le nom du projet, `Riverside clinic`. Le panneau affiche *Coffre créé pour Riverside clinic.*

## 2. Placer un fichier sous contrôle

1. Ouvrez **Fichiers hors du coffre** et choisissez {{ui:Ajouter}} à côté de `plates/Bracket.partcraft.json`.
2. Il apparaît sous **Fichiers du coffre** à la révision **A.1**, état **En cours de travail**. A.1 est sa première copie ; le coffre conserve une copie de chaque révision.

## 3. Extraire, modifier, archiver

1. Choisissez {{ui:Ouvrir}} à côté de `plates/Bracket.partcraft.json`. La pièce s'ouvre dans PartCraft et le panneau se ferme pour que vous puissiez la voir. Rouvrez le panneau depuis {{ui:Documents…}}.
2. Rouvrez le panneau et choisissez {{ui:Extraire}}. La ligne indique maintenant **Extrait à votre nom**. Un fichier de verrouillage a été créé dans `.ccvault/locks` ; personne d'autre ne peut extraire ce fichier tant que vous ne l'avez pas archivé.
3. Modifiez la pièce : changez une cote, ajoutez un trou. L'enregistrement est refusé tant que le fichier n'est pas extrait à votre nom, et l'application indique pourquoi ; Enregistrer sous fonctionne toujours pour une copie de votre propre travail.
4. Ouvrez le panneau, choisissez {{ui:Archiver}} et tapez ce qui a changé (`Porte déplacée`). Le panneau affiche *archivé en tant que A.2*. Le fichier du dossier de projet est maintenant la pièce que vous aviez ouverte, et le verrou est levé. Archiver sans modification conserve la révision.

Si vous changez d'avis, {{ui:Annuler l'extraction}} rend le fichier sans créer de nouvelle révision.

## 4. Revue et publication

1. Choisissez {{ui:Envoyer en revue}}. L'état devient **En revue** et le fichier passe en lecture seule.
2. Avant d'approuver, choisissez {{ui:Paramètres du projet}} et listez les personnes autorisées à approuver (un nom par ligne), par exemple `Ben` et `Carla`, puis cochez la règle selon laquelle l'approbateur doit être une personne autre que l'auteur. Choisissez {{ui:Enregistrer les paramètres}}. Désormais, le coffre lui-même refuse toute autre personne.
3. Ben (ou Carla) choisit {{ui:Approuver}} et tape le nom de l'approbateur. L'état devient **Publié** et la révision devient **A**, avec *approuvé par* et le nom. Un fichier publié est en lecture seule. {{ui:Renvoyer}} l'aurait ramené à En cours de travail, en indiquant un motif.

Le nom de l'approbateur est celui saisi dans le panneau ; c'est une trace de qui a validé, et non une preuve d'identité.

## 5. Une nouvelle révision

1. Sur le fichier publié, choisissez {{ui:Nouvelle révision}}. Vous la réservez pour la lettre suivante.
2. Modifiez-le, puis choisissez {{ui:Archiver}}. La révision est **B.1**, en cours de travail. Publiez-la de la même façon et elle devient **B**. {{ui:Annuler l'extraction}} avant le premier archivage la laisse à **A**.

Les lettres de révision vont de A, B … Z, puis AA, AB. Si votre norme omet certaines lettres, le paramètre du projet *Utiliser la séquence ASME Y14.35* saute I, O, Q, S, X et Z pour les révisions suivantes.

## 6. Voir ce qui s'est passé

Choisissez le nom du fichier pour ouvrir ses détails :

- **{{ui:Historique}}** : chaque événement, du plus récent au plus ancien, avec la personne, l'ordinateur et l'heure : *Archivé A.2* par Ana, *Publié* par Ben, et ainsi de suite.
- **{{ui:Révisions}}** : le tableau des révisions : chaque révision conservée, avec sa date, qui l'a archivée, la note et qui l'a approuvée. Le coffre conserve une copie de chacune dans `.ccvault/revs`.
- **{{ui:Utilise}}** : les pièces d'un assemblage.
- **{{ui:Utilisé par}}** : liste chaque assemblage du coffre qui contient cette pièce : si vous modifiez une équerre, vous savez quels assemblages vérifier.

## Assemblages : ce qu'ils utilisent et la nomenclature

Placez un assemblage (`.partcraft.json`, enregistré depuis le mode Assemblage) dans le dossier et ajoutez-le. Choisissez son nom : **Utilise** liste les pièces qu'il contient, avec la révision et l'état de chacune ; **Utilisé par**, sur une pièce, liste chaque assemblage qui la contient. {{ui:Nomenclature (CSV)}} enregistre toute la liste des pièces, niveau par niveau, avec les quantités, les révisions et les états, pour un tableur. Modifiez une équerre, et **Utilisé par** vous indique quels assemblages examiner.

## 7. Ce que voit Ben pendant que vous tenez le fichier

Extrayez à nouveau le fichier, et demandez à Ben d'ouvrir le même dossier de projet sur son ordinateur puis d'ouvrir le panneau. Sur la ligne du fichier, il voit **Extrait par Ana sur** votre ordinateur **depuis** l'heure, et aucun bouton {{ui:Extraire}}. S'il essaie quand même, le coffre refuse : le verrou est un fichier que le système ne crée pas deux fois, si bien que deux personnes ne peuvent pas détenir le fichier en même temps, même à la même fraction de seconde, lorsque le dossier se trouve sur le disque dans Studio. (Dans un navigateur, le dossier n'offre qu'une garantie au mieux, et le panneau l'indique sous **Dossier**.)

Si Ana est absente et que Ben a besoin du fichier, {{ui:Forcer l'extraction}} le libère. Il doit saisir un motif ; celui-ci est inscrit au journal avec le nom de la personne dont c'était l'extraction. Lorsque le projet liste des administrateurs, eux seuls peuvent le faire. Une extraction plus ancienne que la limite de péremption (14 jours par défaut) est marquée *depuis longtemps*. Après la rupture, l'archivage tardif d'Ana est refusé, de sorte que vous ne pouvez pas vous écraser mutuellement.

## 8. Dossiers cloud

Un dossier cloud est un dossier de projet conservé dans le stockage cloud de votre équipe, si bien que l'équipe n'a pas besoin d'un lecteur partagé. Dans Studio, connecté à votre compte CadCraft, le panneau affiche {{ui:Ouvrir un dossier cloud}} à côté de {{ui:Choisir le dossier du projet}}. Choisissez-le, puis sélectionnez le dossier, listé comme espace de travail / dossier. Le propriétaire de l'espace de travail crée d'abord le dossier, et le stockage cloud de l'équipe doit être actif. Tout ce qui précède fonctionne de la même façon ; le serveur crée le verrou, qui est strict entre les personnes. Si vous n'êtes pas connecté, le panneau vous demande de vous connecter. Dans un onglet de navigateur ordinaire, le bouton cloud n'est pas proposé ; utilisez Studio.

## Essayez

Faites les huit étapes ci-dessus avec une copie d'un vrai fichier. Pour les étapes à deux personnes, il vous faut une autre personne, ou deux fenêtres avec deux noms. Si vous essayez avec un vrai dossier partagé, la page Tests communautaires propose une vérification qui demande exactement cela, et accepte les résultats.
