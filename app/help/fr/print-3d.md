---
title: Préparer une pièce pour l'impression 3D
summary: Vérifiez qu'une pièce ou un assemblage est fermé, qu'il tient sur votre imprimante et qu'il repose sur une base, puis téléchargez-le en STL ou 3MF pour votre trancheur.
keywords: impression 3D, imprimante 3D, imprimer, impression, trancheur, stl, 3mf, étanche, fermé, manifold, plateau, taille du plateau, surplomb, supports, base, millimètres, exporter, filetages, jeu
from: 90d81dff
---

Un trancheur a besoin d'une forme fermée : sans trou, avec chaque face orientée vers l'extérieur, et sans se traverser elle-même. Les pièces construites dans PartCraft sont fermées par construction ; la vérification vous indique donc surtout la taille, si la pièce tient sur le plateau de votre imprimante, si elle repose sur une face plane et quelle part de la pièce est en surplomb.

## Vérifier et télécharger

1. Facultatif, une seule fois : réglez le plateau de votre imprimante dans {{ui:Paramètres}} › PartCraft › **Imprimante 3D** : largeur, profondeur et hauteur en millimètres. Laissez-les vides pour ignorer cette vérification.
2. Choisissez {{ui:Exporter}}, puis {{ui:Vérifier pour l'impression 3D (STL ou 3MF)…}}.

   La boîte de dialogue affiche « Prête à imprimer » ou « Non prête à imprimer », liste ce qui ne va pas, et donne la taille sur le plateau (X × Y × Z, en millimètres), le volume et le nombre de triangles.

3. Cliquez sur {{ui:Télécharger le 3MF}} ou {{ui:Télécharger le STL}}. Le fichier est identique à celui de {{ui:Exporter}} › {{ui:3MF, pour l'impression 3D}} ou {{ui:STL, pour l'impression 3D}}.

Dans un assemblage, la vérification et les fichiers portent sur l'assemblage entier, chaque exemplaire à son emplacement.

La pièce est vérifiée dans la position où l'export l'écrit : ce qui pointe vers le haut dans PartCraft (perpendiculaire au plan de dessus) pointe vers le haut sur le plateau. Une pièce esquissée sur le plan de dessus repose à plat.

## Ce que la boîte de dialogue peut signaler

**Non prête à imprimer** (un trancheur peut la refuser ou l'imprimer mal) : trous (arêtes dont une seule face est d'un côté), arêtes communes à trois faces ou plus, faces orientées en sens inverse, corps à l'envers, ou corps qui se traverse lui-même. Une pièce construite dans PartCraft ne devrait jamais présenter ces défauts ; si c'est le cas, voir [Dépannage](topic:troubleshooting).

**Avertissements** (elle s'imprime, mais vérifiez d'abord) :

- **Plus grande que le plateau de votre imprimante**, même tournée de 90° sur celui-ci.
- **Rien ne repose à plat en bas** : orientez la pièce dans votre trancheur pour qu'une face repose sur le plateau, sinon elle aura besoin de supports ou d'un radeau.
- **S'écarte de plus de 45° de la verticale** : ces faces ont besoin de supports dans la position actuelle. Une autre orientation en nécessitera peut-être moins.
- **Des corps distincts se chevauchent** ou **se touchent face à face** : les trancheurs les fusionnent généralement. {{ui:Combiner}} dans Fonctions › {{ui:Plus}} les réunit en un seul corps. Voir [Corps](topic:bodies).
- **Moins de 1 mm dans une dimension** : vérifiez les tailles de la pièce.

## Filetages imprimables

Un filetage modélisé s'imprime comme un vrai filetage. Donnez-lui un peu de **Jeu** pour qu'un boulon imprimé entre dans un écrou imprimé : voir [Filetages](topic:threads).

## Lisser les faces rondes

STL et 3MF sont constitués de triangles. Pour des faces rondes plus lisses, cliquez dans le vide pour ne rien sélectionner, puis réglez **Courbes** sur **Fin (128 par tour)** ou **Très fin (256 par tour)** dans le panneau de droite avant d'exporter. Plus de triangles donnent des fichiers plus volumineux.

## Plus grande, plus petite ou en morceaux

- **Exporter › Mettre à l'échelle pour l'impression (STL ou 3MF)…** enregistre la pièce mise à l'échelle par axe, sans la modifier : une **marge de retrait** en pourcentage (taille × (1 + s), ou taille exacte ÷ (1 − s)) pour un modèle de fonderie, ou de simples facteurs, autour du milieu, du coin inférieur, du milieu du bas ou de l'origine.
- **Exporter › Découper pour l'impression (une archive zip de morceaux)…** découpe une pièce trop grande pour votre imprimante en morceaux qui tiennent chacun sur le plateau indiqué, reliés par des tenons, clavettes, queues d'aronde, trous de goupilles ou logements d'aimants (avec le jeu que vous avez réglé). Chaque morceau et chaque assemblage est numéroté, et les morceaux sont enregistrés en STL ou 3MF dans une archive zip avec une feuille de montage. La pièce elle-même ne change pas.

## Non vérifié

L'épaisseur des parois, les détails plus petits que votre buse et la façon dont le trancheur placera les supports. Votre trancheur les affiche.
