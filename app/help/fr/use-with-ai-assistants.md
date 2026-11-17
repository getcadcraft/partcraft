---
title: Utiliser PartCraft avec un assistant IA
summary: Laissez votre propre assistant IA ou script travailler avec la pièce ouverte : lire ses fonctions, paramètres et masse, modifier un paramètre et reconstruire, lancer un script, exporter et enregistrer. Désactivé tant que vous ne l'activez pas.
keywords: ia, assistant, agent, mcp, model context protocol, script, automatisation, paramètres, propriétés de masse, stl, step, 3mf, autorisations, déconnexion, activité, dossiers
from: e66d3470
---

## Ce que vous allez apprendre

Comment laisser un assistant IA (ou un script que vous avez écrit) examiner la pièce ouverte, modifier ses paramètres, lancer un script et l'exporter, et comment vous décidez de ce qu'il peut modifier.

PartCraft n'a **aucune IA propre** et n'envoie rien nulle part. Vous apportez l'assistant : tout programme qui parle le Model Context Protocol (MCP). PartCraft ne lui fournit que des outils, et vous choisissez lesquels.

## L'activer

1. Ouvrez {{ui:Paramètres}} (l'engrenage dans la barre de l'application, ou {{key:Mod+,}}) et allez à l'onglet {{ui:PartCraft}}.
2. Sous {{ui:Assistants}}, cochez **Autoriser les assistants IA et les scripts à utiliser PartCraft**. Cette option reste désactivée tant que vous ne la cochez pas.
3. Choisissez ce qu'il peut faire. **Lecture** est cochée au départ ; cochez les autres seulement lorsque vous en avez besoin.
4. Pour lui permettre d'exporter et d'enregistrer dans un dossier, choisissez {{ui:Ajouter un dossier…}} sous **Dossiers qu'il peut utiliser**, puis sélectionnez le dossier dans la boîte de dialogue de Studio.

Les assistants se connectent via **CadCraft Studio** sur votre ordinateur : Studio affiche l'adresse et le jeton à coller dans l'assistant. Un onglet de navigateur ne peut pas ouvrir de connexion pour un assistant.

## Ce qu'un assistant peut demander

| Outil | Autorisation | Ce qu'il fait |
|---|---|---|
| `part_describe`, `features_list` | Lecture | Les fonctions dans l'ordre, avec ce qui a été construit et ce qui a échoué, le matériau, le volume et la taille du solide |
| `params_list` | Lecture | Les paramètres et chaque nombre qu'une équation peut piloter, avec leurs valeurs |
| `mass_properties` | Lecture | Volume, aire, centre de masse, inertie autour de ce centre ; la masse lorsque la pièce a un matériau |
| `param_set` | Modification | Définit un paramètre ou le nombre d'une fonction, puis reconstruit. Une seule étape que vous pouvez annuler |
| `script_run` | Modification | Lance un script CraftScript, Lua ou Python comme le fait l'espace de travail {{ui:Script}} : isolé, sans fichiers ni réseau. La pièce ne change pas |
| `part_export` | Exportation | STL, 3MF, STEP ou OpenUSD (.usdz, .usda, .usdc), tels que les écrivent {{ui:Fichier}} › {{ui:Exporter}} |
| `link_push` | Modification | Met à jour un modèle lié depuis un autre programme (voir [Garder un modèle .3dm en direct](topic:live-3dm-link)) |
| `link_status` | Lecture | Indique si un modèle lié est toujours là et quand il a été mis à jour pour la dernière fois |
| `part_save` | Enregistrement | {{ui:Enregistrer}} de PartCraft |
| `illustrate_export` | Exportation | Une notice de l'espace de travail {{ui:Illustrate}} en PDF ou en dessin au trait SVG de ses vues, comme fichier 3D interactif, ou ses instructions en PDF ou en page web, tels que les écrivent les menus {{ui:Exporter}} et {{ui:Instructions}} de l'espace de travail ([Notices](topic:illustrate)) |

:::note
Cette version utilise le noyau maillage : les volumes sont calculés à partir des triangles (un peu moins qu'un solide courbe réel), et le STEP est écrit facetté, avec des triangles au lieu de surfaces exactes.
:::

## Vous gardez le contrôle

- **Chaque modification est une seule étape d'annulation**, nommée pour l'assistant, par exemple « Assistant : définir l = 45 ». Appuyez sur {{key:Mod+Z}} pour la reprendre.
- **Vous savez quand un assistant est connecté.** Un bouton dans la barre de l'application indique le nom de l'assistant tant qu'il est connecté. Cliquez dessus pour voir ce qu'il peut faire, ou pour le **Déconnecter**.
- **Activité.** {{ui:Paramètres}} › {{ui:PartCraft}} › {{ui:Assistants}} › {{ui:Activité}} liste chaque appel ; {{ui:Enregistrer le journal}} en conserve une copie.
- **Dossiers.** Il ne lit et n'écrit de fichiers que dans les dossiers que vous avez ajoutés ; {{ui:Retirer}} retire un dossier immédiatement.

## Sans ouvrir PartCraft

Le serveur de fichiers CadCraft pour les assistants (`npx @getcadcraft/mcp`) et la ligne de commande `cadcraft` ouvrent les pièces `.partcraft.json` avec le code et le noyau maillage de PartCraft, sans fenêtre : les mêmes outils de lecture, la définition de paramètres, les scripts CraftScript, les exports (OpenUSD compris) et l'enregistrement. `cadcraft convert bracket.partcraft.json bracket.stl` construit une pièce et l'écrit depuis la ligne de commande. Les notices (`.partcraft-manual.json`) s'exportent aussi là : `illustrate_export`, ou `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (ajoutez `--instructions` pour les instructions).

## En cas de problème

- **« needs the edit permission » :** cochez **Modification** sous {{ui:Assistants}}, puis redemandez.
- **« driven by the equation » :** ce nombre suit un paramètre ; demandez plutôt à l'assistant de définir ce paramètre.
- **Sa modification est incorrecte :** appuyez sur {{key:Mod+Z}}.

## Voir aussi

- [Recettes pour les assistants IA](common:assistants-recipes) : exemples détaillés, chacun avec les outils qu'il appelle.
