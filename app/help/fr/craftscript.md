---
title: Écrire et exécuter des scripts (espace de travail Script)
summary: L'espace de travail Script pas à pas : écrire un script CraftScript ou Lua, l'exécuter avec F5, lire la console, conserver les résultats dans les variables pour le script suivant, afficher maillages, champs et tracés, arrêter une exécution, et enregistrer les scripts avec la pièce.
keywords: script, scripting, script pendant la modélisation, détacher, second écran, deuxième moniteur, param, params, paramètres dans les scripts, CraftScript, Lua, code, programme, éditeur, console, REPL, ligne de commande, exécuter, F5, exécuter la sélection, arrêter, variables, espace de travail, tracé, champ, maillage, légende, sous-affichage, analyse, automatisation, matrice, numérique
from: d0003e89
---

**Aperçu.** Le scriptage est nouveau dans PartCraft 0.3 et constitue un aperçu : le langage, la bibliothèque et la manière dont les scripts sont enregistrés peuvent encore changer, et les scripts écrits maintenant pourraient nécessiter de petites modifications plus tard. Dites-nous ce qui ne fonctionne pas.

L'espace de travail Script exécute vos propres calculs à côté de la pièce : petites sommes, analyses complètes, ou les scripts de la [bibliothèque d'analyse](topic:craftscript-library). Les scripts s'écrivent en **CraftScript** (un langage matriciel très proche de MATLAB, voir [Le langage CraftScript](topic:craftscript-language)), en **Lua** (voir [Scripts en Lua](topic:craftscript-lua)) ou en **Python** (voir [Scripts en Python](topic:craftscript-python)).

Choisissez **Script** dans la zone **Espace de travail** à gauche de la barre d'outils. La pièce n'est pas modifiée. Le panneau de droite devient le panneau de script (plus large que d'habitude ; faites glisser son bord pour le redimensionner, ou déplacez-le sur un second écran avec son menu {{ui:⋯}}, voir [Disposer les panneaux](common:arrange-panels)).

## Scripter pendant la modélisation

Vous n'avez pas besoin de quitter l'espace de travail Conception pour écrire un script. Dans Conception, l'onglet {{ui:Script}} du panneau de droite contient le même éditeur, la même console, les mêmes variables et la même bibliothèque, avec les mêmes scripts. L'arbre des fonctions et la vue continuent de fonctionner : cliquez sur une fonction pour la sélectionner, double-cliquez sur une esquisse pour la modifier, faites pivoter la vue, puis revenez à l'onglet {{ui:Script}} et appuyez sur {{key:F5}}.

Ce qu'un script **affiche** (maillages, champs, tracés, tableaux) n'est pas dessiné sur votre modèle dans Conception : la console le signale, et l'espace de travail Script contient tout lorsque vous y passez.

{{ui:Détacher}}, à côté de {{ui:Exécuter}}, déplace tout le panneau dans une fenêtre indépendante, par exemple sur un second écran, pour que l'éditeur et la vue complète soient côte à côte. {{ui:Rattacher}} le réancre. Voir [Disposer les panneaux](common:arrange-panels).

## Exécuter votre premier script

1. Tapez dans l'éditeur, par exemple :

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'Une sinusoïde')
   disp(max(y))
   ```

2. Appuyez sur {{key:F5}} (ou {{ui:Exécuter}}). La console sous l'éditeur affiche ce que le script a imprimé, ainsi que « Terminé en … s ». Le tracé apparaît dans les **sous-affichages** le long du bas de la vue 3D.
3. Une ligne sans point-virgule affiche sa valeur, comme dans MATLAB : `a = 3` affiche `a = 3` ; `a = 3;` n'affiche rien.
4. Pour n'exécuter qu'une partie d'un script, sélectionnez les lignes et appuyez sur {{key:Mod+Enter}} ({{ui:Selection}}). Sans sélection, le script exécute la ligne où se trouve le curseur.
5. La ligne en bas de la console (après `>>`) exécute une instruction à chaque appui sur {{key:Enter}}. {{key:Up}} et {{key:Down}} rappellent les lignes précédentes.

## Rechercher, replier et compléter

- **Rechercher et remplacer.** Appuyez sur {{key:Mod+F}} (ou {{key:Mod+H}} pour remplacer aussi). Une barre s'ouvre au-dessus du code : tapez ce qu'il faut trouver ; les correspondances s'allument et le compteur indique où vous en êtes. Les boutons à côté de la zone respectent la casse (**Aa**), recherchent des mots entiers seulement (**W**) et utilisent une expression régulière (**.\***; dans le remplacement, `$1` restitue ce que le premier groupe a capturé). {{ui:Remplacer}} remplace la correspondance courante, {{ui:Tout}} remplace toutes les correspondances en une seule étape annulable avec {{key:Mod+Z}}.
- **Repliement.** Cliquez sur le ▾ à côté d'un numéro de ligne, ou appuyez sur {{key:Mod+Shift+[}} le curseur sur une ligne `function`, `if`, `for`, `while`, `switch` ou `try` (Lua : `function`, `do`, `if`, `repeat`), pour replier ses lignes intérieures ; la ligne indique combien elles sont. ▸ ou {{key:Mod+Shift+]}} les déplie. Le repliement ne fait que masquer les lignes : l'exécution, l'enregistrement, la copie et les numéros de ligne comptent toujours toutes les lignes, et taper sur une ligne repliée la déplie d'abord.
- **Complétion.** Tapez deux lettres d'un nom, ou appuyez sur {{key:Mod+Space}} : une liste affiche les variables que vous avez, les fonctions du langage (avec leurs arguments), les mots-clés et les noms déjà présents dans le script. Choisissez avec les flèches, puis appuyez sur {{key:Enter}} ou {{key:Tab}}.

## En cas de problème

- Une erreur indique le problème et sa ligne : la ligne est marquée en rouge dans l'éditeur, et **Ligne n** dans la console vous y amène.
- Une boucle qui ne se termine jamais : appuyez sur {{ui:Arrêter}} (barre d'outils ou panneau). Le script s'arrête immédiatement ; les variables conservent les valeurs qu'elles avaient avant cette exécution.
- Chaque exécution dispose aussi d'un budget d'étapes (2 milliards d'étapes par défaut ; modifiez-le dans **Options d'exécution** du panneau). Une exécution qui le dépasse s'arrête avec un message.

## Les variables passent d'un script à l'autre

Chaque variable de premier niveau créée par un script est enregistrée dans l'onglet **Variables** (nom, type, taille, plus petite et plus grande valeur) et reste disponible pour le script suivant, dans l'un ou l'autre langage. C'est ainsi qu'un script crée le maillage, qu'un autre le résout, et qu'un troisième le trace.

- Cliquez sur une variable pour l'afficher : maillages, champs et modèles dans la vue 3D, tableaux sous forme de table (plus un tracé en ligne pour un vecteur ou une carte de couleurs pour une matrice) dans les sous-affichages.
- {{ui:Enregistrer en JSON}}, {{ui:Enregistrer en CSV}} (un tableau de nombres) et {{ui:Enregistrer en HDF5}} la téléchargent ; {{ui:Supprimer}} la retire ; {{ui:Tout effacer}} vide l'espace de travail.
- Cochez **Enregistrer les variables avec la pièce** pour les conserver dans le fichier de pièce (jusqu'à 32 Mo ; les plus grosses ne restent que pour cette visite). Lorsque vous ouvrez une telle pièce, le panneau propose de les charger.

## Maillages, champs et tracés

- `show(m)` dessine un maillage ; `show(f)` colore un champ sur son maillage avec une légende. La liste **Affichés** en haut à gauche de la vue masque ({{ui:eye}}) ou retire chaque élément, et masque ou affiche la pièce elle-même. Sous la légende, saisissez une plage (**De**, **à**) ou appuyez sur {{ui:Auto}} ; un champ vectoriel ou de contrainte propose aussi la composante à afficher.
- `show(f, 'deform', u, 'scale', 50)` dessine le maillage déplacé par un champ de déplacement `u`, agrandi 50 fois (sans `scale`, environ 8 % de la taille du modèle).
- Cliquez sur un maillage affiché : le nœud le plus proche, l'élément et les valeurs du champ à cet endroit apparaissent dans les sous-affichages (**Pointé**).
- `plot`, `imagesc` et `table` placent un tracé en ligne, une carte de couleurs d'un tableau 2D ou un tableau dans les sous-affichages. Un tracé portant le même `'id'` (ou titre) qu'un tracé précédent le remplace, si bien qu'une boucle peut mettre à jour un seul tracé de convergence ; `'append', true` ajoute une courbe. {{ui:Effacer}} vide les sous-affichages ; la flèche les replie.
- Avec deux tracés ou plus, {{ui:Côte à côte}} les affiche tous en même temps (les six plus récents) ; cliquer sur l'onglet d'un tableau ou d'une image n'affiche plus que celui-ci.
- Chaque tracé dispose de {{ui:PNG}}, {{ui:SVG}} et {{ui:CSV}} sous lui. PNG et SVG l'impriment sur fond blanc avec les couleurs papier, quel que soit le thème (PNG 1600 × 1000 pixels ; SVG se redimensionne sans flou) ; CSV contient ses nombres avec tous les chiffres : une colonne de x et une colonne par courbe lorsque les courbes partagent x, sinon une ligne par point avec le nom de la courbe.
- {{key:F}} ou {{ui:Ajuster}} ajuste la vue à ce qui est affiché.

## Fichiers

- {{ui:Ouvrir}} dans le groupe Script (ou déposez des fichiers sur la vue ou le panneau) : les fichiers `.craft`, `.lua` et `.py` s'ouvrent comme de nouveaux scripts (ils ne s'exécutent pas) ; les fichiers de données (STL, OBJ, CSV, JSON, NPY, HDF5) se chargent dans les variables sous leur nom de fichier.
- {{ui:Enregistrer}} dans le groupe Script télécharge le script courant sous forme de fichier.
- {{ui:Nouveau}} dans le groupe Script (ou {{ui:+}} à côté des onglets) démarre un autre script. Double-cliquez sur un onglet pour le renommer ; son {{ui:×}} le supprime (vous pouvez l'annuler).

## Lire les paramètres de la pièce

Un script lit les paramètres de la pièce (voir [Piloter une pièce avec des paramètres](topic:parameters)) par leur nom :

```
w = param('width');     % la valeur d'un paramètre, en mm (ou en degrés, ou un simple nombre)
p = params();           % tous, sous forme de structure : p.width, p.height
```

Dans Lua et Python, ce sont `cs.param('width')` et `cs.params()`. Les scripts ne font que lire les paramètres : modifiez-les dans l'onglet {{ui:Paramètres}}. Sous l'onglet du script, une ligne liste les paramètres qu'il lit avec `param('…')` et signale ceux que la pièce ne possède pas ; l'onglet {{ui:Paramètres}} liste le script sous chacun d'eux. Un nom construit pendant l'exécution du script, comme `param(name)`, n'est pas listé.

## Les scripts sont enregistrés dans la pièce

Chaque script des onglets est conservé dans la pièce : {{ui:Enregistrer}} dans le groupe Fichier les sauvegarde donc avec elle, et leurs modifications peuvent être annulées. Ouvrir une pièce **n'exécute jamais ses scripts** : la console indique combien elle en contient, et ils ne s'exécutent que lorsque vous appuyez sur Exécuter. Une pièce venant d'un tiers peut contenir n'importe quel script : lisez-le avant de l'exécuter. Les scripts s'exécutent en arrière-plan sur cet ordinateur, sans accès au réseau, et ne peuvent pas toucher à la page.

## Voir aussi

- [Le langage CraftScript](topic:craftscript-language)
- [Scripts en Lua](topic:craftscript-lua)
- [Scripts en Python](topic:craftscript-python)
- [La bibliothèque d'analyse](topic:craftscript-library)
- [Écrire votre propre analyse](topic:craftscript-own-analysis)
