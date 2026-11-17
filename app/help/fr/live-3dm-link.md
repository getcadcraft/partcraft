---
title: Garder un modèle .3dm en direct
summary: Modifiez un modèle dans le logiciel qui l'a créé et suivez le corps de PartCraft, depuis Rhino 8 ou une définition Grasshopper, avec vos fonctions recalculées sur la nouvelle forme.
keywords: rhino, grasshopper, lien live, connexion live, 3dm, nurbs, paramétrique, lien, synchronisation, script, pousser, corps importé
from: cf4dc9b2
---

Continuez à façonner le modèle là où vous le modélisez, et usinez, vérifiez et documentez-le ici. Chaque modification dans l'autre logiciel remplace un corps importé dans PartCraft, et les fonctions qui suivent sont recalculées sur la nouvelle forme.

:::note
Le lien nécessite **CadCraft Studio** sur le même ordinateur. Un onglet de navigateur ne peut pas établir la connexion. Rien ne transite par Internet : le script communique avec Studio à l'adresse de cet ordinateur, avec un jeton.
:::

:::warning
Ce lien a été testé avec l'écrivain de fichiers du script et un simulateur de l'autre logiciel, mais pas encore dans Rhino ou Grasshopper eux-mêmes. Si quelque chose échoue là-bas, indiquez-nous le message affiché.
:::

## Configuration

1. Dans Studio, ouvrez PartCraft. Dans {{ui:Paramètres}} › {{ui:PartCraft}} › {{ui:Assistants}}, cochez **Autoriser les assistants IA et les scripts à utiliser PartCraft**, puis **Modifier**.
2. Dans Studio, choisissez {{ui:Connecter un assistant}}. Il affiche l'adresse et le jeton que vous collerez ci-dessous.
3. Téléchargez le script : [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Depuis Rhino

1. Exécutez `cadcraft_link.py` dans l'éditeur de scripts de Rhino (Python 3 dans Rhino 8).
2. La première fois, collez l'adresse et le jeton. Ils sont conservés dans `.cadcraft-link.json` dans votre dossier personnel, jamais dans le modèle. Studio crée un nouveau jeton à chaque démarrage, donc le script le redemande alors.

Exécutez de nouveau le script pour l'arrêter.

## Depuis Grasshopper

Exécutez d'abord le script une fois dans Rhino, afin que l'adresse et le jeton soient enregistrés.

1. Ajoutez un composant Script (Python 3) et collez-y l'intégralité de `cadcraft_link.py`.
2. Donnez-lui ces entrées : `G` (la géométrie, avec accès aux listes), `N` (un nom, facultatif), `On` (un bouton à bascule booléen), et `Target` (facultatif : `model` ou `part`, si les deux applications sont ouvertes).
3. Passez `On` à vrai.

Chaque calcul envoie `G` et remplace ce que le composant avait envoyé la fois précédente.

## Fonctionnement

- **Un seul corps.** Tout ce qui est visible dans le modèle devient une seule fonction importée, comme lorsque vous [ouvrez un fichier .3dm](topic:open-3dm-files).
- **Il doit être fermé.** PartCraft comble les petits trous et les ouvertures planes, et l'autre logiciel est informé de leur nombre. Si le modèle n'est toujours pas fermé, PartCraft conserve le corps précédent et la barre d'état l'indique. La prochaine modification qui le ferme le met à jour.
- **Terminez ce que vous faites.** Dans une esquisse ou un dessin, les mises à jour sont refusées puis réessayées ; elles arrivent dès que vous revenez dans le modèle.
- **Annuler.** Les mises à jour espacées de moins de deux secondes partagent une seule étape d'annulation.
- **Enregistrer.** Le fichier de la pièce conserve le lien. Relancez le script après l'avoir rouvert, et la même fonction se met à jour.

**Sens unique.** Les modifications faites ici ne reviennent pas vers l'autre logiciel.

## En cas de problème

- **« Aucune fenêtre ModelCraft ou PartCraft ne l'autorise » :** suivez l'étape 1 de la configuration.
- **« Studio a refusé le jeton » :** Studio a redémarré. Copiez le nouveau jeton et relancez le script. Pour Grasshopper, exécutez-le d'abord dans Rhino.
- **« Impossible de joindre CadCraft Studio » :** Studio n'est pas lancé, ou l'adresse a changé.
