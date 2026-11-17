---
title: Modifier une pièce par son historique
summary: Modifier les fonctions et esquisses après coup, désactiver, revenir en arrière, insérer des fonctions plus tôt, réordonner, renommer et supprimer, et annuler chacune de ces actions.
keywords: historique, arbre des fonctions, arbre de conception, modifier fonction, modifier esquisse, désactiver, réactiver, retour arrière, revenir en arrière, rétablir, avancer, réordonner, déplacer fonction, supprimer, renommer, annuler, reconstruire, régénérer, parent enfant, grosse pièce, nombreuses fonctions, reconstruction lente, 750 fonctions
from: 6f75aef4
---

Une pièce PartCraft correspond à son historique : la liste des plans, esquisses et fonctions à gauche. PartCraft reconstruit le solide depuis le haut de cette liste à chaque modification. Changer un nombre en début de liste modifie tout ce qui s'appuie dessus.

## Modifier une fonction

1. Cliquez sur la fonction dans l'historique (ou sur l'esquisse en retrait sous elle).
2. Modifiez ses paramètres dans le panneau de droite. Chaque modification reconstruit aussitôt la pièce.

Il n'y a ni OK ni Annuler : chaque modification est appliquée. Si elle ne vous convient pas, appuyez sur {{key:Mod+Z}}.

## Modifier les arêtes ou les faces utilisées par un congé, un chanfrein ou une coque

Double-cliquez sur la fonction dans l'historique, ou sélectionnez-la et choisissez {{ui:Choisir les arêtes}} (ou {{ui:Choisir les faces}}). Cliquez sur des arêtes ou des faces pour les ajouter ou les retirer, puis {{ui:Terminé}} ou {{key:Esc}}. Voir [Congés, chanfreins et coques](topic:fillet-chamfer-shell).

## Modifier une esquisse

1. Double-cliquez sur l'esquisse dans l'historique, ou sélectionnez-la et choisissez {{ui:Modifier l'esquisse}} dans le panneau de droite (ou {{ui:Esquisse}} dans la barre d'outils).
2. La pièce revient à l'état qu'elle avait lorsque l'esquisse a été créée : les fonctions qui suivent sont masquées pendant la modification.
3. Modifiez la géométrie, les relations ou les cotes.
4. Fermez l'esquisse. La pièce entière se reconstruit avec la modification.

Pour changer seulement une taille, inutile d'ouvrir l'esquisse. Sélectionnez la fonction ou l'esquisse et modifiez le nombre sous **Cotes d'esquisse** (ou **Cotes directrices**) dans le panneau de droite. Voir [Modifier les cotes sans ouvrir l'esquisse](topic:change-sizes).

## Lorsqu'une fonction échoue

Si une modification rend une fonction impossible, PartCraft construit tout le reste et signale le problème :

- la fonction affiche **⚠ erreur** dans l'historique, et son message se trouve en haut de son panneau de droite (survolez la ligne pour le lire aussi) ;
- les fonctions qui en dépendent affichent **⚠ non construite**, avec « Nécessite Extrude2, qui échoue. » ;
- la puce de la barre d'état indique « 1 fonction en échec ».

Corrigez la cause (ou annulez), et la pièce se reconstruit. Les messages courants et leur traitement sont décrits dans [Dépannage](topic:troubleshooting).

## Désactiver une fonction

Désactiver met une fonction hors service sans la supprimer : c'est utile pour essayer une pièce sans trou ni répétition.

1. Sélectionnez la fonction.
2. Choisissez {{ui:Désactiver}}. Sa ligne affiche **désactivé**. Les fonctions qui en dépendent ne sont pas construites non plus.
3. Choisissez {{ui:Réactiver}} pour la remettre en service.

## Revenir en arrière

Revenir en arrière ne construit la pièce que jusqu'à un certain point, pour la voir telle qu'elle était, ou pour ajouter une fonction plus tôt dans l'historique.

1. Sélectionnez une fonction et choisissez {{ui:Revenir ici}}. Cette fonction et toutes celles situées en dessous sont grisées et ne sont pas construites. Une ligne **Barre de retour · avancer** marque l'emplacement.
2. Toute fonction que vous ajoutez maintenant s'insère **à la barre**, avant les fonctions grisées.
3. Cliquez sur **Barre de retour · avancer** pour tout reconstruire.

La position de retour est enregistrée dans le fichier.

## Réordonner les fonctions

1. Sélectionnez la fonction.
2. Choisissez {{ui:Monter}} ou {{ui:Descendre}}, ou, lorsque sa ligne de l'historique a le focus, appuyez sur {{key:Alt+Up}} ou {{key:Alt+Down}}.

Une fonction ne peut jamais passer au-dessus de ce qu'elle utilise. Le bouton est grisé, et le survol (ou l'essai de la touche) donne la raison, par exemple « Extrude2 utilise Sketch2, donc Sketch2 doit venir en premier. »

Une fonction utilise : son esquisse ; la face sur laquelle son esquisse repose ; les fonctions qu'une répétition ou une symétrie copie ; une ligne d'esquisse ou une révolution utilisée comme direction ou comme axe.

## Supprimer une fonction

1. Sélectionnez la fonction et choisissez {{ui:Supprimer}} dans le panneau de droite ou dans la barre d'outils, ou appuyez sur {{key:Delete}}.
2. Si d'autres fonctions l'utilisent, PartCraft demande : « Extrude3, Hole1 utilisent Extrude1 et seront supprimées aussi. » Choisissez {{ui:Tout supprimer}} ou {{ui:Annuler}}.

Supprimer une fonction ne supprime pas son esquisse : celle-ci réapparaît dans la vue comme esquisse inutilisée, prête pour une autre fonction. Supprimez l'esquisse séparément si vous n'en avez pas besoin.

## Renommer

Sélectionnez la fonction et saisissez un nouveau **Nom** en bas du panneau de droite (60 caractères maximum). Le nom de la pièce figure dans le panneau de droite lorsque rien n'est sélectionné.

## Pièces comportant des centaines de fonctions

Une pièce comportant des centaines de fonctions est testée avec 750 fonctions. PartCraft conserve le solide qu'il avait à mi-parcours de l'historique, de sorte qu'une modification tardive ne reconstruit que les fonctions qui la suivent ; une modification proche du haut reconstruit tout ce qui en dépend, ce qui prend le plus de temps. Annuler et rétablir ne reconstruisent qu'à partir du point où les deux états diffèrent. Pour travailler plus vite sur une grosse pièce, revenez en arrière jusqu'à l'endroit où vous travaillez (voir Revenir en arrière ci-dessus) ou désactivez ce dont vous n'avez pas besoin pour l'instant. Plusieurs découpes et bossages qui ne se touchent pas sont appliqués ensemble ; une pièce faite de nombreux trous et bossages séparés se construit donc plus vite que son nombre de fonctions ne le laisse penser.

Une grosse pièce se reconstruit en arrière-plan : la puce en bas indique **Reconstruction…** avec son avancement, et la vue, les panneaux et les menus restent utilisables pendant ce temps. La pièce affichée est la dernière construite tant que la nouvelle n'est pas prête. Si vous modifiez à nouveau pendant la reconstruction, PartCraft construit la version la plus récente et abandonne celle en cours. Une petite pièce se reconstruit aussitôt.

## Annuler et rétablir

- {{key:Mod+Z}} ou {{ui:Annuler}} annule la dernière modification : une fonction, un paramètre, une modification d'esquisse, un glissement. La barre d'état indique laquelle, par exemple « Annulé : modification de cote. »
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} ou {{ui:Rétablir}} la rétablit.
- PartCraft conserve les 200 dernières étapes (une pièce si grosse que 200 copies occuperaient beaucoup de mémoire en conserve moins, jamais moins que les 20 plus récentes). Les modifications sur la feuille de dessin (une coupe, un symbole GD&T déplacé) figurent dans la même liste. Ouvrir un fichier ou commencer une nouvelle pièce la vide.

:::mac
Sur Mac, utilisez ⇧⌘Z pour rétablir. Dans Safari, ⌘Y peut ouvrir l'historique du navigateur à la place.
:::
