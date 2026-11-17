---
title: Transférer des pièces vers et depuis d'autres modeleurs de pièces
summary: Envoyer une pièce vers un autre modeleur de pièces sous forme de macro qui la reconstruit avec un arbre de fonctions actif. Le STEP nommé et l'ouverture de la liste de fonctions écrite par un autre modeleur ne sont pas encore disponibles dans cette version.
keywords: macro, pas encore disponible, swb, vba, arbre de fonctions, aller-retour, exporter la macro, cadcraft-sw.json, STEP nommé, ap214, variables globales, équations, pièce native
from: 97ca61da
---

PartCraft échange des pièces avec SolidWorks dans les deux sens, sans format de fichier que personne d'autre ne peut lire :

- **Vers SolidWorks :** une macro (`.swb`, texte brut) que SolidWorks exécute pour construire la pièce elle-même, fonction par fonction, avec ses esquisses, relations, cotes, variables globales et équations. Vous obtenez une pièce native avec un arbre de fonctions actif, et non un solide figé.
- **Depuis SolidWorks :** une macro que vous exécutez dans SolidWorks écrit les fonctions et les équations de la pièce dans un fichier `.cadcraft-sw.json`. L'ouverture de ce fichier dans PartCraft n'est pas encore disponible dans cette version (elle nécessite un noyau exact).

:::warning
Rien de tout cela n'a encore été testé dans SolidWorks. SolidWorks ne fonctionne que sous Windows et avec une licence, et PartCraft n'a jamais exécuté ces macros dedans. Les macros ont été écrites d'après la documentation de l'API SolidWorks et vérifiées ici sur leur structure. Attendez-vous à signaler des problèmes ; le journal écrit par la macro indique l'étape qui a échoué.
:::

PartCraft ne peut pas écrire de fichier `.sldprt` : ce format est fermé. La macro est le moyen d'obtenir une pièce native.

## Envoyer une pièce sous forme de macro

1. Ouvrez la pièce.
2. Choisissez {{ui:Exporter}}, puis {{ui:Macro pour SolidWorks (.swb)}}. PartCraft télécharge `<part>.swb` ; la barre d'état indique qu'elle a été « écrite sans le noyau exact ».
3. Une boîte de dialogue indique le nombre de fonctions, de variables globales et d'équations que la macro construit, et liste ce qu'elle laisse de côté. Aucun STEP n'accompagne la macro dans cette version : utilisez {{ui:Exporter}}, puis {{ui:STEP (facetté, noyau maillage)}} si vous en avez besoin.
4. Dans SolidWorks, choisissez **Outils > Macro > Exécuter**, sélectionnez le fichier `.swb` et patientez. La macro crée une nouvelle pièce à partir de votre modèle de pièce par défaut, règle les millimètres et construit chaque fonction.
5. À la fin, un message indique combien d'étapes ont été réalisées, combien ont échoué et combien correspondent au corps de PartCraft. Le journal complet, `<part> macro log.txt`, est écrit à côté de la macro.

Ce que la macro construit :

| PartCraft | Dans la nouvelle pièce |
|---|---|
| Esquisse sur le plan de face, de dessus ou de droite | Une esquisse sur ce plan, avec ses lignes, arcs, cercles, points, relations et cotes (nommés comme dans PartCraft, par exemple `k7`) |
| Esquisse sur une face | Une esquisse sur la même face, désignée par un point situé sur celle-ci |
| Esquisse sur un plan fixe | Un plan de référence passant par trois points, et l'esquisse sur ce plan |
| Extrusion, découpe (profondeur fixe, traversante, plan médian, deux directions, conicité) | Extrusion de bossage ou extrusion de découpe |
| Révolution, découpe par révolution | Révolution autour de la même ligne d'axe |
| Trou (simple, à lamage, à fraisure, taraudé) | Une ou deux découpes avec leurs propres esquisses (un trou taraudé est son foret à tarauder ; sans filetage) |
| Répétition linéaire et circulaire, symétrie | Répétition linéaire, répétition circulaire, symétrie (fonctions ou corps) |
| Congé, chanfrein, coque | Congé, chanfrein et coque sur les mêmes arêtes et faces, désignées par des points |
| Paramètres et équations | Variables globales et équations sur les cotes renommées |
| Fonctions supprimées, barre de retour arrière | Supprimées de la même façon ; la barre de retour arrière au même endroit |

Après chaque fonction solide, la macro compare le volume et la taille du corps avec ceux de PartCraft. En cas d'écart, elle inverse une fois le sens de cette fonction et vérifie à nouveau ; si ce n'est pas meilleur, elle la remet dans son sens et écrit « Check » dans le journal.

### Ce qui est laissé de côté

La boîte de dialogue et le début de la macro listent tout ce qui n'est pas repris, avec la raison. Aujourd'hui, il s'agit de : solides importés (insérez le STEP à la place), balayages, lissages, dépouilles, axes et points de référence, conditions de fin « jusqu'à », extrusion de certains contours seulement, et tout ce qui en dépend. Les splines deviennent des courbes passant par leurs points. Cette version n'ayant pas de noyau exact, les esquisses sur des faces et les fonctions qui désignent des arêtes ou des faces sont aussi laissées de côté.

## Envoyer un STEP nommé

Pas encore disponible dans cette version : {{ui:STEP for SolidWorks (named, AP214)}} nécessite un noyau exact. Le choisir affiche « STEP pour SolidWorks : pas encore disponible. … ». Avec un noyau exact, le fichier porte le nom de la pièce, les millimètres et la couleur de la pièce, et oriente Y vers le haut, comme SolidWorks affiche les pièces (l'export simple {{ui:STEP AP214 (exact solid)}} oriente Z vers le haut). Les lettres accentuées perdent leurs accents dans le nom, et les autres caractères hors ASCII simple deviennent `_`.

## Rapporter une pièce

L'ouverture du fichier dans PartCraft (étape 3) n'est pas encore disponible dans cette version : le message indique « Ouverture d'un export SolidWorks : pas encore disponible. … ». L'application de dessin CadCraft ouvre toujours le fichier et récupère ses esquisses.

1. Choisissez {{ui:Fichier}} > {{ui:Exporter}} > {{ui:Export macro to bring parts back (.swb)}} pour télécharger `CadCraftExport.swb`, et placez-le à côté de vos pièces.
2. Dans SolidWorks, ouvrez la pièce, choisissez **Outils > Macro > Exécuter** et sélectionnez `CadCraftExport.swb`. Elle écrit `<part>.cadcraft-sw.json` à côté de la pièce et ne modifie rien dans celle-ci.
3. Dans PartCraft, choisissez {{ui:Ouvrir}} et sélectionnez ce fichier, ou déposez-le sur la vue 3D.
4. Avec un noyau exact, PartCraft reconstruit la pièce fonction par fonction et indique ce qu'il a fait : par exemple « 5 fonctions sur 5 reprises depuis SolidWorks (Flange.SLDPRT) », chaque fonction qu'il n'a pas pu reprendre (« Non reprise : Sweep1 (Sweep). ») et si le volume correspond à celui écrit par SolidWorks.
5. Enregistrez-la comme pièce PartCraft avec {{ui:Enregistrer}}.

Les esquisses sont placées sur un plan de base lorsqu'elles en reposent sur un, sur la face plane correspondante de la pièce lorsqu'il en existe une (elles suivent ainsi les modifications ultérieures), et sur un plan fixe sinon. Les arêtes et faces des congés, chanfreins et coques sont retrouvées à partir de points et conservées comme références nommées. Les variables globales deviennent des paramètres (les noms comportant des espaces reçoivent des tirets bas : « Bolt count » devient `Bolt_count`) et les équations deviennent des équations sur les mêmes cotes. Rien n'est deviné : ce qui n'a pas d'équivalent est listé.

L'application de dessin CadCraft ouvre le même fichier et récupère ses esquisses.

:::note
Le format est `cadcraft-sw-export` version 1, du JSON brut en millimètres et degrés. Un fichier issu d'une macro plus récente, ou non valide, est refusé avec la raison.
:::
