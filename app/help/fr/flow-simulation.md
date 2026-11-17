---
title: Simuler l'écoulement d'un fluide (étude d'écoulement)
summary: Écoulement dans les canaux d'une pièce ou autour d'elle dans une boîte : entrées, sorties, air, eau ou votre propre fluide, puis vitesse et pression sur un plan de coupe mobile, lignes de courant, pression sur les surfaces, perte de charge, bilan massique, traînée et portance, avec ce que la méthode laminaire permet de déduire ou non.
keywords: écoulement, CFD, fluide, dynamique des fluides numérique, simulation d'écoulement, air, eau, viscosité, masse volumique, nombre de Reynolds, laminaire, turbulent, perte de charge, entrée, sortie, couvercle, bouchon, vitesse, débit, débit volumique, litres par minute, pression statique, lignes de courant, plan de coupe, plan de section, traînée, portance, coefficient de traînée, coefficient de portance, surface frontale, écoulement externe, écoulement interne, tuyau, canal, collecteur, buse, Boltzmann sur réseau, résidu, convergence
from: 7dc75f29
---

Une étude **Écoulement** calcule comment un fluide circule dans les canaux à l'intérieur de votre pièce (**interne**) ou autour d'elle (**externe**). Par défaut, elle est **laminaire, incompressible, isotherme et newtonienne** : écoulement régulier d'un fluide dont la masse volumique et la viscosité restent fixes, sans chaleur, sans turbulence et sans gravité. Un modèle turbulent **expérimental** est aussi disponible, pour des tendances qualitatives seulement (voir plus bas). Il s'applique aux faces nommées que le noyau de maillage donne à la pièce (voir [Le noyau de maillage](topic:solid-kernels)).

Choisissez **Simulation** dans la liste **Espace de travail**, appuyez sur **Nouvelle étude** s'il n'y en a aucune, puis réglez **Type** sur **Écoulement (CFD)**. **Modèle d'écoulement** vaut **Laminaire** (par défaut) ou **Turbulent (Spalart–Allmaras, expérimental)** : voir **Écoulement turbulent (expérimental)** plus bas. Les réglages structurels de l'étude sont conservés, vous pouvez donc revenir en arrière. Les réglages d'écoulement sont enregistrés dans le fichier de pièce, et chaque modification peut être annulée.

## Choisir le fluide et les cellules

- **Fluide** : air ou eau à 20 °C, ou **Personnalisé** avec votre propre masse volumique (kg/m³) et viscosité dynamique (Pa·s). L'air utilise la loi des gaz parfaits et la loi de Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s) ; l'eau utilise les valeurs IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Taille des cellules** : l'espace fluide est rempli de cubes égaux. Laissez vide pour une taille automatique ; le panneau affiche la grille. Chaque ouverture et chaque canal doivent couvrir **au moins 8 à 10 cellules** pour obtenir des résultats utiles ; des cellules plus petites sont plus précises mais plus lentes (deux fois plus fines représentent environ 16 fois le travail).
- **Parois** : **Interpolée** suit les parois courbes entre les cellules (par défaut) ; **Rebond** traite les parois comme l'escalier des cubes.

## Écoulement à l'intérieur de la pièce

L'espace fluide doit être fermé. Ajoutez une **Entrée** et une **Sortie** dans le panneau, puis cliquez sur leurs faces dans la vue :

1. **La face plane autour d'une ouverture** — le bord d'une extrémité de tuyau, une face de raccord. PartCraft ferme à cet endroit le trou de l'ouverture avec un couvercle. Chaque trou de cette face appartient à cette ouverture ; si une entrée et une sortie débouchent sur la même face, modélisez plutôt une fine calotte sur l'une d'elles.
2. **La face intérieure d'une calotte** — comme dans d'autres logiciels de CAO : modélisez une fine plaque (une extrusion) sur l'ouverture, puis choisissez sa face qui touche le fluide.

Pour une entrée, réglez une **vitesse** (m/s, uniforme sur l'ouverture, vers l'intérieur de la pièce) ou un **débit volumique** (L/min). Pour une sortie, réglez la **pression statique** (Pa, relative). Si une ouverture reste ouverte, ou si une paroi est plus mince qu'une cellule, l'intérieur rejoint l'extérieur et le calcul s'arrête avec « Aucun espace fluide fermé ».

## Écoulement autour de la pièce

Réglez **Écoulement** sur **Externe**, la **Vitesse**, la direction d'où vient l'écoulement, et la distance que la boîte couvre en amont, en aval et sur les côtés (vide : 1, 3 et 1 fois la plus grande dimension de la pièce). La face de la boîte par laquelle l'écoulement entre est une entrée, la face par laquelle il sort une sortie à 0 Pa, et les faces le long de l'écoulement sont des glissements. Une boîte trop petite comprime l'écoulement autour de la pièce et augmente la traînée. La **Surface de référence** est la surface utilisée par les coefficients de traînée et de portance (vide : la surface frontale de la pièce vue dans le sens de l'écoulement) ; la portance est mesurée selon +Y, sauf si vous choisissez une autre direction.

## Calculer et lire les résultats

Appuyez sur **Calculer**. Le calcul s'exécute en arrière-plan avec le nombre d'itérations, le résidu et un graphique du résidu ; **Arrêter** le termine. Il s'arrête lorsque le résidu (la variation du champ de vitesse à chaque itération) est inférieur à la cible et que la perte de charge ou la traînée est stabilisée. Si le nombre maximal d'itérations est atteint d'abord, le panneau affiche **Non convergé** en rouge : les valeurs sont celles du dernier état, et non une solution stationnaire.

- **Plan de coupe** : vitesse ou pression statique sur un plan passant par le modèle ; choisissez sa normale (X, Y ou Z) et faites glisser le curseur pour le déplacer. Survolez-le pour lire les valeurs.
- **Lignes de courant** : depuis les entrées (interne) ou depuis un peigne à travers l'extrémité amont de la boîte, dans le plan de coupe (externe).
- **Pièce** : pleine, transparente (pour voir le plan à l'intérieur), pression sur la surface, ou masquée.
- **Tableau** : nombre de Reynolds, perte de charge (pression statique moyenne aux entrées moins celle aux sorties), débit et pression moyenne de chaque ouverture, effort sur la pièce, traînée et portance avec leurs coefficients et la surface de référence (externe), bilan massique (entrée contre sortie), maillage et solveur.

## Écoulement turbulent (expérimental)

**Modèle d'écoulement › Turbulent (Spalart–Allmaras, expérimental)** calcule l'écoulement turbulent moyenné dans le temps (RANS stationnaire) : le modèle de Spalart–Allmaras donne une viscosité turbulente dans chaque cellule, et les cellules voisines des parois utilisent la loi de paroi de Spalding au lieu de résoudre la fine couche qui s'y trouve. Il est entièrement turbulent partout (pas de régions laminaires, pas de transition).

**Il n'a pas réussi ses contrôles de précision.** Le panneau, les résultats et le tableau le signalent pour chaque étude turbulente, et l'avertissement ne peut pas être fermé. Utilisez-le pour des **tendances qualitatives de l'écoulement** — où l'écoulement se détache, recircule ou accélère — **et non pour des valeurs de conception**.

| Contrôle | Référence | Résultat |
|---|---|---|
| Frottement d'un canal plat, première cellule à y⁺ 49 / 98 | Corrélation de Dean | +3.3 % / +4.7 % |
| Canal à parois résolues (y⁺ ≈ 3), Re_τ 180 : vitesse débitante | DNS de Moser, Kim & Mansour | −1 % |
| Canal plat, y⁺ 7–15 ou 190–380 | Corrélation de Dean | +9 à +22 % |
| Frottement dans une conduite à travers les cellules du cube, pleinement établi, 10–30 cellules de large | Colebrook | 30 à 34 % trop élevé |
| Recollement derrière une marche descendante, 6–14 cellules par hauteur de marche | Driver & Seegmiller, 6.26 hauteurs de marche | 21 à 39 % trop court |

Les résultats ne s'améliorent que lentement avec des cellules plus fines. Après le calcul, le tableau affiche le **y⁺ de la première cellule** (min, moyenne et max sur les cellules de paroi) et avertit hors de la plage vérifiée de 1 à 400 ; visez environ 30 à 300. **Durée de calcul :** les cellules automatiques sont dimensionnées pour quelques minutes sur un seul cœur d'ordinateur portable au maximum (le panneau affiche le pire cas pour la grille et la limite d'itérations ; une petite conduite se stabilise en moins de 20 secondes). Diviser la taille des cellules par deux multiplie la durée par environ 16. Les efforts sur la pièce proviennent d'un bilan de quantité de mouvement sur les ouvertures ou sur la boîte.

**Travail en cours :** les cellules de paroi font maintenant correspondre leur propre contrainte de cisaillement à la loi de paroi, ce qui a ramené les erreurs de conduite et de marche aux valeurs ci-dessus sans modifier les résultats du canal plat. Ce n'était pas suffisant pour des valeurs de conception. L'étape suivante consiste en des cellules plus fines près des parois.

## Ce qu'il peut et ne peut pas vous dire

- **Le modèle laminaire** est uniquement laminaire. Dans les conduites, l'écoulement devient turbulent au-delà d'un nombre de Reynolds d'environ 2,000 à 4,000 ; derrière des corps émoussés, le sillage commence à libérer des tourbillons au-delà d'environ 50. Le panneau avertit à ces seuils. Un résultat laminaire pour un écoulement turbulent sous-estime la perte de charge et fausse la traînée. Le modèle turbulent expérimental (ci-dessus) couvre qualitativement l'écoulement turbulent ; ses valeurs ne sont pas encore fiables.
- **Méthode :** la méthode de Boltzmann sur réseau (D3Q19, collision à deux temps de relaxation) menée jusqu'à un état stationnaire. Elle est légèrement compressible à l'intérieur ; PartCraft limite les variations de masse volumique à quelques pour cent. Si l'écoulement est trop rapide pour les cellules, le calcul refuse de démarrer et indique de combien les cellules doivent être réduites.
- **Vérifié par rapport à :** l'écoulement de Hagen–Poiseuille dans une conduite traversant une pièce (gradient de pression à 1 % près avec 20 cellules de large), la cavité entraînée par couvercle de Ghia et al. (à 0.75 % près de la vitesse du couvercle), et le cas test du cylindre de Schäfer–Turek (traînée à 1 % près avec 10 cellules par diamètre).
- Non modélisés : transfert thermique, turbulence avec une précision de conception (le modèle turbulent est expérimental), surfaces libres, cavitation, gravité, pièces mobiles, fluides non newtoniens, parois rugueuses. Version de laboratoire : vérifiez les résultats importants par une autre méthode.
