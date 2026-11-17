---
title: Configurations et tableaux de configurations
summary: Conserver plusieurs tailles et versions d'une pièce sous forme de configurations nommées enregistrées dans le fichier de pièce, avec des fonctions activées ou désactivées dans chacune, passer de l'une à l'autre en un clic, les importer ou les exporter sous forme de tableau CSV, ou les construire toutes depuis la ligne de commande.
keywords: tableau de configurations, configurations, configuration, tailles, famille de pièces, csv, tableur, variantes, piloté par tableau, désactiver, désactivé, désactiver une fonction, options, avec ou sans, configurateur
from: 17249afb
---

Une **configuration** est une taille de la pièce : un ensemble nommé de valeurs pour ses paramètres. La pièce conserve ses configurations dans son propre fichier, donc elles la suivent. Un **tableau de configurations** est la même chose sous forme de fichier CSV, avec une ligne par configuration.

Les configurations définissent des **paramètres**, donc ajoutez-les d'abord (voir [Piloter une pièce avec des paramètres](topic:parameters)). Une configuration enregistre les paramètres qui sont de simples nombres ; les paramètres calculés à partir d'autres (comme `area = w * d`) suivent d'eux-mêmes.

## Enregistrer une configuration

1. Dans l'onglet {{ui:Paramètres}}, réglez les paramètres pour une taille de la pièce.
2. Sous **Configurations**, saisissez un nom (par exemple `Large`) et appuyez sur {{ui:Enregistrer les valeurs actuelles}} ou sur {{key:Enter}}.

La nouvelle configuration est marquée **active**. Si vous modifiez ensuite un paramètre, elle indique **active, modifiée depuis**, pour que vous sachiez que la pièce ne correspond plus à elle.

## Appliquer, mettre à jour, renommer, supprimer

- {{ui:Appliquer}} règle les paramètres sur les valeurs de cette configuration et reconstruit la pièce.
- {{ui:Mettre à jour}} enregistre les valeurs actuelles dans cette configuration.
- Pour en renommer une, saisissez le nouveau nom dans sa zone et appuyez sur {{key:Enter}}.
- {{ui:Supprimer}} retire la configuration. Les paramètres conservent leurs valeurs.

Chacune de ces opérations est une seule étape : {{key:Mod+Z}} revient en arrière. Si vous renommez un paramètre, chaque configuration suit le nouveau nom ; si vous supprimez un paramètre, il disparaît de chaque configuration.

## Activer et désactiver des fonctions dans une configuration

Une configuration conserve aussi les fonctions désactivées, de sorte qu'une même pièce puisse exister en versions **avec** et **sans** quelque chose : trous de fixation, un chanfrein, un bossage.

1. Désactivez la fonction : cliquez dessus dans l'historique, puis {{ui:Désactiver}} dans {{ui:Propriétés}}.
2. Enregistrez la configuration comme d'habitude, par exemple `No holes`. Sa ligne liste ce qu'elle désactive.
3. Réactivez la fonction ({{ui:Réactiver}}) et enregistrez une autre configuration, par exemple `With holes`.

Dès qu'une configuration désactive une fonction, appliquer une configuration désactive ses fonctions et **réactive toutes les autres fonctions**, avec leurs valeurs de paramètres, en une seule étape. Une configuration enregistrée avant qu'une fonction ne soit désactivée dans l'une d'elles compte comme « tout activé ». {{ui:Mettre à jour}} enregistre les fonctions telles qu'elles sont maintenant, avec les valeurs.

Une pièce dont les configurations désactivent des fonctions est enregistrée sous une version de fichier plus récente : une version plus ancienne de PartCraft indique que le fichier vient d'une version plus récente, au lieu de l'ouvrir sans elles.

:::note
Le tableau de configurations CSV ne contient que les valeurs des paramètres. Importer un tableau par-dessus une configuration modifie ses valeurs et conserve les fonctions qu'elle désactive ; l'option `--table` de la ligne de commande ne construit que les valeurs.
:::

Le fichier de pièce est enregistré avec les configurations et avec celle qui était active. La pièce s'ouvre avec les valeurs qui ont été enregistrées.

## Importer ou exporter un tableau de configurations

Un tableau de configurations est un fichier CSV avec une colonne pour chaque paramètre et une ligne pour chaque configuration :

```
name,width,thick,bolt
petit,100,6,6.6
moyen,140,8,8.5
grand,200,12,13
```

La première colonne peut s'appeler `name`, `config` ou `configuration` ; toute autre colonne doit porter le nom d'un paramètre de la pièce. Les cellules sont des nombres, avec unités si vous le souhaitez (`8in`). Une cellule vide exclut ce paramètre de la ligne.

- {{ui:Importer un CSV}} ajoute chaque ligne comme configuration. Une ligne portant le nom d'une configuration existante la remplace. L'importation est une seule étape.
- {{ui:Exporter en CSV}} écrit les configurations. S'il n'y en a aucune, il écrit une ligne avec les valeurs actuelles, comme point de départ pour un tableur.

Un nom de configuration qu'un tableur lirait comme une formule (commençant par `=`, `+`, `-` ou `@`) est écrit avec une apostrophe `'` en tête.

## Toutes les tailles à la fois

{{ui:Lot de variantes…}} sous **Configurations** construit chaque configuration, ou quelques-unes choisies, au format STEP, IFC, DWG et en aperçu, dans un zip, avec un tableau de leurs paramètres : voir [Créer un lot de variantes à partir de vos configurations](topic:variant-pack).

L'outil en ligne de commande construit un fichier par ligne d'un tableau de configurations CSV :

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Exportez d'abord les configurations en CSV, puis transmettez ce fichier avec `--table`. Voir [Scripts et ligne de commande](topic:scripts-and-cli). Une pièce enregistrée comme script conserve ses configurations dans une ligne `configs json …`.
