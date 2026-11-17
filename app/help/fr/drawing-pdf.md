---
title: Créer un dessin avec vues, coupe et tolérancement géométrique
summary: Ouvrez la feuille de dessin, ajoutez une coupe et une vue de détail, placez les références, les cadres de tolérance et les symboles d'état de surface, choisissez le format de feuille, remplissez le cartouche et les révisions, puis exportez la feuille en PDF.
keywords: tableau de perçages, liste des trous, positions des trous, repères, étiquettes, dessin, dessin 2D, feuille, format de feuille, a4, a3, a2, a1, a0, ansi, cartouche, révision, bloc de révisions, numéro de dessin, matériau, pdf, vues, orthographique, troisième dièdre, isométrique, vue en coupe, vue de détail, tolérancement géométrique, référence, cadre de tolérance, tolérance, position, planéité, état de surface, rugosité, cartouche, impression
from: 39e944c0
---

PartCraft crée une feuille de dessin à partir de la pièce : vues de face, de dessus et de droite en projection du troisième dièdre, une vue isométrique, les dimensions d'encombrement et un cartouche sur une feuille du format A4 à A0 ou ANSI A à E. Vous pouvez y ajouter une coupe, une vue de détail et des symboles de tolérancement géométrique. La feuille se met à jour lorsque la pièce change, et ses réglages sont enregistrés dans le fichier de la pièce.

## Ouvrir la feuille de dessin

1. Construisez la pièce. (Sans rien de construit : « Construisez d'abord un solide, puis créez son dessin. »)
2. Choisissez {{ui:Dessin}} dans la barre d'outils.

La vue 3D est remplacée par la feuille. La barre d'outils affiche {{ui:Référence}}, {{ui:Cadre}}, {{ui:État de surface}}, {{ui:Détail}}, {{ui:PDF}} et {{ui:Retour}}, et le panneau de droite porte le titre **Dessin**. La barre d'état indique comment les vues ont été produites : « Dessin (les courbes sont tracées en facettes). Référence, Cadre et État de surface placent le tolérancement géométrique sur une vue ; le panneau définit une coupe et une vue de détail. » Les vues sont tracées à partir des facettes du noyau de maillage : les arêtes arrondies sont donc de petits segments droits ; des arcs exacts demandent un noyau exact, que cette version ne possède pas.

Déplacez-vous sur la feuille : molette pour zoomer, glissez avec le bouton droit ou central pour faire un panoramique, appuyez sur {{key:F}} pour ajuster la feuille à la fenêtre. La feuille ayant le focus, {{key:Plus}} et {{key:Minus}} zooment, et {{key:Shift}} avec les touches fléchées fait un panoramique.

Choisissez {{ui:Retour}}, {{ui:Retour au modèle}} ou appuyez sur {{key:Esc}} (sans rien de sélectionné et sans outil actif) pour revenir au modèle 3D.

## Ce qui figure sur la feuille

- **La feuille que vous choisissez**, en paysage (A3 sauf si vous en choisissez une autre), avec un cadre et un **cartouche** : titre, société, numéro de dessin, révision, matériau, dessiné / vérifié / approuvé par, date, échelle, format de feuille, « Unités : millimètres · Projection du troisième dièdre », et indication que les vues sont exactes ou en facettes.
- Un **bloc de révisions** dans le coin supérieur droit, dès que vous ajoutez une révision.
- **Vues de face, de dessus et de droite** : la vue de dessus au-dessus de la vue de face, la vue de droite à sa droite. Arêtes cachées en tirets.
- Une **vue isométrique** lorsque la place le permet.
- **Dimensions d'encombrement** : largeur et hauteur sur la vue de face, profondeur sur la vue de dessus.
- Une **échelle** commune aux vues principales, prise dans la série ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), choisie pour que les vues tiennent.

## Choisir le format de feuille

Sur la feuille de dessin, sans rien de sélectionné, choisissez {{ui:Feuille}} dans le panneau de droite : **A4, A3, A2, A1, A0** (ISO 216) ou **ANSI A, B, C, D, E** (11 × 8.5 à 44 × 34 in). Les vues sont recalculées à l'échelle ISO la plus grande qui tient, si bien qu'une feuille plus grande peut montrer la pièce plus grande.

## Remplir le cartouche

Les champs **Cartouche** du panneau de droite s'inscrivent directement sur la feuille : {{ui:Titre}}, {{ui:N° de dessin}}, {{ui:Indice}}, {{ui:Société}}, {{ui:Dessiné par}}, {{ui:Vérifié par}}, {{ui:Approuvé par}}, {{ui:Date}} (année-mois-jour), {{ui:Tolérance générale}} et {{ui:État de surface}} (ces deux derniers s'impriment juste au-dessus du cartouche). Tapez dans une case puis appuyez sur {{key:Enter}} ou cliquez ailleurs. Une case vide laisse sa cellule vide, sauf :

- **Titre** affiche le nom de la pièce tant que vous n'en tapez pas un.
- **Date** affiche la date du jour tant que vous n'en tapez pas une.
- **Indice** affiche la révision la plus récente de la liste tant que vous n'en tapez pas une.

**Matériau** vient de la pièce : cliquez dans l'espace vide du modèle, puis choisissez {{ui:Matériau}} dans le panneau Pièce. Le même matériau fournit à Measure la masse volumique utilisée pour ses propriétés de masse.

## Ajouter des révisions

Sous **Révisions**, cliquez sur {{ui:Ajouter une révision}}. Chaque nouvelle ligne prend la lettre suivante (A, B, C …, après Z vient AA) et la date du jour. Tapez ce qui a changé et qui a fait la modification. {{ui:Supprimer}} retire une ligne. Le bloc de révisions, dans le coin supérieur droit de la feuille, les liste, de la plus ancienne à la plus récente, jusqu'à 20.

Le format de feuille, le cartouche, les révisions et le matériau sont enregistrés dans le fichier de la pièce, et chaque modification est une étape de {{ui:Annuler}}.

## Ajouter une vue en coupe

La pièce est coupée par un plan et la coupe est hachurée. Comme les autres vues, la coupe est tracée à partir de facettes : les arêtes arrondies sont donc de petits segments droits.

1. Dans le panneau de droite, réglez **Coupe A-A** sur **Depuis la vue de face**, **Depuis la vue de dessus** ou **Depuis la vue de droite**.
2. La coupe apparaît sur la feuille, hachurée là où le plan traverse la matière, avec la ligne de coupe et ses flèches « A » sur la vue dont elle est issue.
3. Réglez **Plan de coupe à (mm)** pour déplacer le plan de coupe. Il passe au départ par le milieu de la pièce.

Remettez **Coupe A-A** sur **Aucune** pour la supprimer.

## Ajouter une vue de détail

1. Réglez **Détail B** sur la vue à agrandir (ou choisissez {{ui:Détail}} dans la barre d'outils).
2. Cliquez sur le centre de la zone à agrandir, sur cette vue. Un cercle marqué « B » la repère, et le « Détail B » agrandi apparaît sur la feuille avec sa propre échelle, par exemple « Détail B (2:1) ».
3. Réglez **Rayon du détail (mm)** pour la taille du cercle et **Échelle du détail** pour l'agrandissement : 2, 4, 5 ou 10 × la feuille.

Un détail peut être pris depuis la vue de face, de dessus, de droite ou la coupe, pas depuis la vue isométrique. S'il n'y a pas de place pour toutes les vues, le panneau indique : « Pas de place sur la feuille pour : détail. Réduisez le détail ou supprimez une vue. »

## Ajouter un tableau de perçages

Un tableau de perçages liste les trous de la pièce avec leurs positions, pour le perçage ou la CN : choisissez **Tableau de perçages** › **Depuis la vue de dessus** (ou de face, ou de droite) dans le panneau.

- Chaque trou vu de bout dans cette vue reçoit un repère à côté : **A1**, **A2** … pour la première taille, **B1** … pour la suivante.
- Le tableau liste chaque repère, ses **X** et **Y** en millimètres, et sa taille : « Ø14 TRAVERSANT », « Ø6.6 × 10 PROFOND », un lamage ou un fraisage, ou l'indication de filetage d'un trou taraudé.
- X et Y sont mesurés depuis le coin inférieur gauche du contour de la vue, marqué **X0 Y0** sur la feuille.
- Les trous produits par des répétitions sont inclus. Les trous qui ne sont pas perpendiculaires à la vue sont comptés dans le panneau et exclus du tableau.

Le tableau est placé dans une zone libre de la feuille et dans le PDF.

## Placer les symboles de tolérancement géométrique et d'état de surface

1. Choisissez {{ui:Référence}}, {{ui:Cadre}} (un cadre de tolérance) ou {{ui:État de surface}} (un symbole d'état de surface).
2. Cliquez sur le point d'une vue où il s'attache. Il s'accroche à la ligne tracée la plus proche, à 2.5 mm près.
3. Le symbole apparaît avec une ligne de repère, sélectionné, et le panneau de droite affiche ses réglages.

Faites glisser un symbole pour le déplacer ; sa ligne de repère reste sur le point. Symbole sélectionné, les touches fléchées le déplacent de 1 mm. {{key:Delete}} ou {{key:Backspace}} (ou {{ui:Supprimer}} dans le panneau) le retire ; {{ui:Terminé}} ou {{key:Esc}} le désélectionne. Chaque modification figure dans la liste d'annulation.

### Référence

**Lettre** : de A à Z, sans I, O ni Q (elles se confondent avec 1, 0 et O). Chaque nouvelle référence prend la prochaine lettre libre.

### Cadre de tolérance

| Réglage | Choix |
|---|---|
| **Tolérance** | Rectitude, Planéité, Circularité, Cylindricité, Profil d'une ligne, Profil d'une surface, Perpendicularité, Inclinaison, Parallélisme, Position, Concentricité et Symétrie (ces deux dernières supprimées dans Y14.5-2018, et signalées comme telles), Battement circulaire, Battement total |
| **Zone (mm)** | La valeur de tolérance, 0.1 par défaut |
| **Zone de diamètre (⌀)** | Pour les caractéristiques à zone cylindrique ; activé par défaut pour Position |
| **Matériau** | RFS (aucun), MMC (Ⓜ), LMC (Ⓛ), lorsque la caractéristique le permet |
| **Référence principale / secondaire / tertiaire** | Jusqu'à trois lettres de référence, chacune avec un **modificateur …** (MMB, LMB) lorsqu'il est permis |

PartCraft vérifie le cadre selon les règles de l'ASME Y14.5 et indique en haut du panneau ce qui ne va pas, par exemple « La planéité est une tolérance de forme : elle n'accepte aucune référence. » ou « La position exige au moins une référence. » La ligne **Lecture** décrit le cadre en toutes lettres.

### État de surface

| Réglage | Choix | Par défaut |
|---|---|---|
| **Ra (µm)** | Rugosité moyenne | 1.6 |
| **Procédé** | tout procédé, usiné, sans enlèvement de matière | usiné |
| **Note** | Jusqu'à 40 caractères, comme un sens de stries ou un procédé | |

Sans rien de sélectionné, le panneau liste les **Notes sur la feuille**, chacune avec **Sélectionner**.

## Exporter le PDF

Choisissez {{ui:PDF}} dans la barre d'outils, {{ui:Exporter en PDF}} dans le panneau, ou {{ui:Exporter}}, puis {{ui:Dessin (PDF) : vues, coupe, détail, tolérancement géométrique}} depuis le modèle. Le PDF se télécharge sous le nom `<part name> - drawing.pdf`, et la barre d'état liste ce qu'il contient.

Imprimez à « Taille réelle » sur un papier du format de la feuille pour conserver l'échelle.

## Limites

| Pas encore disponible | En attendant |
|---|---|
| Cotes autres que les trois dimensions d'encombrement | Ajoutez-les sur le PDF avec une application d'annotation, ou exportez une esquisse ou une face en DXF et cotez-la dans un logiciel de CAO 2D |
| Plus d'une coupe ou d'un détail ; vues sorties, auxiliaires et projetées | Non disponible |
| Projection du premier dièdre, vues mobiles, feuilles en portrait | Troisième dièdre, mise en page automatique, paysage |
| Notes libres et tableaux sur la feuille (hors cartouche et bloc de révisions) | Utilisez la note d'état de surface, ou ajoutez du texte sur le PDF |
| Dessins d'assemblages | Non disponible |

Les caractères hors du jeu d'Europe occidentale s'impriment en « ? » (le PDF utilise la police Helvetica intégrée au lecteur). Les symboles de tolérancement géométrique sont tracés en traits, donc ils s'impriment dans n'importe quel lecteur.

## Laisser la feuille faire le travail

- **Feuille › Automatique** choisit le papier pour vous : la plus grande échelle normalisée jusqu'à 1:1, sur la plus petite feuille de format A qui contient les vues à cette échelle (la liste indique celle qui a été prise).
- **Coter les trous** cote les trous sur la vue qui les voit le plus souvent de bout : une marque de centre sur chacun, une indication par taille (« 2× Ø6 TRAVERSANT » avec une ligne de repère), et leurs positions mesurées depuis le coin inférieur gauche de la vue. La largeur, la hauteur et la profondeur totales sont toujours présentes.
