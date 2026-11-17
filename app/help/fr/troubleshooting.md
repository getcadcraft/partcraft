---
title: Dépannage
summary: Problèmes que vous pouvez rencontrer dans PartCraft, de l'application qui ne démarre pas aux fonctions en échec, esquisses qui ne se résolvent pas, fichiers qui ne s'ouvrent pas et liaisons qui se comportent mal, avec le message affiché et la solution.
keywords: problème, erreur, aide, ne fonctionne pas, échec, en échec, plantage, vide, webgl, webassembly, noyau, pas encore disponible, surcontrainte, profil ouvert, impossible d'ouvrir, rien ne se passe, mauvais sens, lent
from: 7728542c
---

Lorsque quelque chose ne fonctionne pas, lisez d'abord la **barre d'état** en bas : PartCraft y indique pourquoi il a refusé ou ce qu'il attend ensuite. Une fonction en échec affiche aussi son message en haut de son panneau de droite, et lorsque vous survolez sa ligne dans l'historique.

## L'application ne démarre pas

### « Ce navigateur ne peut pas afficher la 3D (WebGL est désactivé ou absent), donc PartCraft ne peut pas fonctionner ici. »

**Cause :** le navigateur a désactivé, bloqué ou ne prend pas en charge la 3D (WebGL), ou le pilote graphique ne la prend pas en charge.

**Solution :**

:::chromium
Ouvrez `chrome://settings/system` (ou `edge://settings/system` dans Edge) et activez « Utiliser l'accélération matérielle si disponible », puis redémarrez le navigateur. Si elle est déjà activée, vérifiez l'état de WebGL dans `chrome://gpu`, et mettez à jour votre pilote graphique.
:::

:::firefox
Ouvrez `about:support` et regardez Graphismes, WebGL. S'il est bloqué, mettez à jour le pilote graphique. Dans `about:config`, `webgl.disabled` doit valoir `false`.
:::

:::safari
WebGL est toujours activé dans Safari actuel. Mettez à jour macOS (Safari se met à jour avec lui). Si l'échec persiste, essayez Chrome ou Firefox sur le même Mac pour écarter le matériel graphique.
:::

Les bureaux à distance et certaines machines virtuelles n'ont pas WebGL. Essayez sur l'ordinateur lui-même.

### « Le noyau de solides n'a pas été chargé : … »

**Cause :** le noyau géométrique (un programme WebAssembly) n'a pas pu être téléchargé ou démarré. En général, la connexion a été coupée pendant le chargement, WebAssembly est désactivé par une politique d'entreprise ou un paramètre de sécurité du navigateur, ou le navigateur est très ancien.

**Solution :** rechargez la page en étant connecté. Si l'échec persiste, essayez un autre navigateur actuel. Dans Firefox, `javascript.options.wasm` dans `about:config` doit valoir `true`. Hors ligne, l'application et son noyau ne se chargent que si la barre de l'application affichait **Prêt hors ligne** avant la perte de connexion ({{ui:Enregistrer pour le hors ligne}} en ligne ; voir [Travailler hors ligne](common:offline)).

### Le bouton hors ligne affiche « Impossible d'enregistrer » ou « Hors ligne indisponible »

**Impossible d'enregistrer** : certains fichiers n'ont pas été téléchargés. Cliquez dessus pour réessayer en ligne ; une connexion lente ou facturée au volume peut demander un second essai. **Hors ligne indisponible** : cette fenêtre de navigateur ne peut pas conserver de copie hors ligne (les fenêtres privées et certains ordinateurs gérés le bloquent). Utilisez une fenêtre normale, ou gardez l'onglet ouvert.

### PartCraft est hors ligne mais périmé

Cliquez sur **Prêt hors ligne** en ligne et choisissez {{ui:Enregistrer à nouveau (obtenir la version la plus récente)}}.

### « Balayage : pas encore disponible. Il a besoin d'un noyau exact, … »

Le message complet est « <Nom> : pas encore disponible. Il a besoin d'un noyau exact, que cette version de PartCraft ne possède pas. Aide › Ce qui n'est pas encore disponible indique quoi faire à la place. » Vous le voyez lorsque vous choisissez Balayage, Lissage, Nervure, une bride de tôlerie, une fonction de surface, Combiner, Déplacer le corps, Mettre le corps à l'échelle ou Répétition le long d'un chemin, et pour les autres éléments qui exigent seulement un noyau exact. Rien ne va mal avec votre navigateur ou votre pièce : cette version de PartCraft construit chaque pièce avec le noyau maillage. Voir [Ce qui n'est pas encore disponible](topic:not-built-yet) pour la marche à suivre, et [Le noyau maillage](topic:solid-kernels).

### « Chargement du noyau de solides… » ne disparaît jamais

Patientez un peu sur une connexion lente : le noyau et la bibliothèque 3D sont téléchargés la première fois. Rechargez ensuite. Si la page elle-même affiche une erreur, voir ci-dessus.

## Rien ne se passe quand j'appuie sur une touche

- Les touches ne fonctionnent pas lorsque le curseur est dans une case d'un panneau. Cliquez dans la vue 3D ou appuyez sur {{key:Esc}} après la saisie (ou sur {{key:Tab}} pour sortir).
- Les touches fléchées et {{key:Plus}}/{{key:Minus}} ne font tourner et zoomer la vue qu'après un clic dans la vue.
- Une boîte de dialogue est ouverte : répondez-lui d'abord.
- Dans une esquisse, {{key:F}} est l'outil Raccord, et non Ajuster. Utilisez le bouton {{ui:Ajuster}}.

## Un bouton de la barre d'outils est grisé

- Les boutons de fonction sont grisés pendant qu'une esquisse est ouverte. Fermez d'abord l'esquisse.
- Les outils d'esquisse ne fonctionnent qu'à l'intérieur d'une esquisse.
- {{ui:Annuler}} et {{ui:Rétablir}} sont grisés lorsqu'il n'y a rien à annuler ou à rétablir.
- {{ui:Assemblage}} exige une pièce avec un solide. {{ui:Liaison}} exige deux pièces dans l'assemblage. {{ui:Modifier la pièce}} exige une pièce sélectionnée.
- {{ui:STEP AP242 (solide exact)}} et {{ui:STEP AP214 (solide exact)}} sont grisés dans un assemblage : exportez chaque pièce. Un autre programme refuse le fichier exact : essayez {{ui:STEP AP214 (solide exact)}}, puis {{ui:STEP (facetté, noyau maillage)}}, et signalez-le via {{ui:Aide}} › {{ui:Signaler un problème}}.
- {{ui:Balayage}}, {{ui:Lissage}} et les autres fonctions qui exigent un noyau exact ne sont pas grisés : elles restent cliquables, leurs infobulles se terminent par « pas encore disponible (exige un noyau exact) », et un clic le signale dans la barre d'état. Voir [Ce qui n'est pas encore disponible](topic:not-built-yet).
- {{ui:Dessin}} exige une pièce avec un solide, et est grisé pendant qu'une esquisse est ouverte.
- Les éléments de {{ui:Exporter}} sont grisés dans un assemblage : les assemblages ne peuvent pas encore être exportés. Fermez-le, ou modifiez une pièce, pour exporter.

## Problèmes d'esquisse

### L'esquisse ne me laisse pas ajouter de relation

« Aucune relation ne correspond à cette sélection. Sélectionnez un ou deux éléments (Maj+clic en ajoute). » La relation exige une sélection différente. Voir [Relations et cotes d'esquisse](topic:sketch-relations) pour ce que chacune exige.

### « Surcontrainte : … ne peuvent pas être respectés ensemble. Annulez, ou supprimez l'un d'eux. »

**Cause :** la nouvelle relation ou cote contredit celles qui existent déjà. L'esquisse n'a pas bougé.

**Solution :** {{key:Mod+Z}}, ou supprimez l'un des éléments rouges de la liste du panneau de droite (choisissez **Supprimer** à côté).

### « Surcontrainte : … est déjà implicite. Supprimez-le. »

**Cause :** la relation n'ajoute rien : d'autres la forcent déjà (par exemple Parallèle sur deux côtés d'un rectangle, ou une cote déjà fixée). Il n'y a pas de cotes pilotées dans cette version.

**Solution :** supprimez-la. La fonction se construit quand même, avec un avertissement.

### « Ces éléments ne peuvent pas être cotés ensemble. »

Vous avez cliqué, par exemple, sur un point et un cercle. Cotez plutôt jusqu'au point central du cercle.

### « Un raccord exige un angle où exactement deux lignes se rejoignent. » / « Ce rayon est trop grand pour ces lignes. »

Cliquez exactement sur le point d'angle de deux lignes pleines. Utilisez un rayon plus petit que ce que permet la plus courte des deux lignes.

### La géométrie revient en arrière quand je la fais glisser

Le glissement casserait une relation ou une cote, donc PartCraft la remet en place. Seule la géométrie bleue (sous-contrainte) peut bouger.

### « Cette esquisse ne peut pas s'ouvrir : Nécessite Extrude2, qui est en échec. »

L'esquisse repose sur une face d'une fonction qui n'est pas construite. Corrigez d'abord cette fonction, réactivez-la, ou remontez l'historique.

## Problèmes de fonctions

| Message | Cause | Solution |
|---|---|---|
| « Créez d'abord une esquisse : choisissez un plan, Esquisse, tracez un profil fermé, Quitter l'esquisse. » | Aucune esquisse non utilisée avec des courbes, et aucune sélectionnée | Tracez une esquisse, ou sélectionnez l'esquisse à utiliser dans l'historique |
| « L'esquisse n'a pas de profil fermé à extruder. » (ou « à révolutionner ») | Aucune boucle fermée de lignes pleines | Fermez les vides ; remettez les lignes de construction en lignes normales avec {{key:Q}} |
| « Le profil est ouvert : une extrémité en (x, y) n'est reliée à rien. » | Un vide à ce point | Ouvrez l'esquisse, faites glisser l'extrémité sur son voisin pour qu'elle s'accroche |
| « Le profil se ramifie en (x, y) : plus de deux extrémités se rejoignent. » | Trois lignes ou plus se rejoignent en un point | Supprimez la ligne en trop, ou passez-la en construction |
| « Une boucle fermée exige au moins trois côtés ou une courbe. » | Deux lignes en aller-retour | Retracez la boucle |
| « Traversant est pour les découpes. Utilisez une profondeur pour un bossage. » | Un bossage réglé sur Traversant | Réglez la **Fin** sur Aveugle ou Plan médian |
| « Rien à découper de ce côté de l'esquisse. Essayez l'autre sens. » | La découpe pointe à l'opposé de la matière | Cochez **Inverser le sens** |
| « Rien à découper pour l'instant. » / « Rien à percer pour l'instant. » | Pas de solide avant cette fonction | Créez d'abord un bossage, ou descendez la fonction |
| « Tracez une ligne de construction dans l'esquisse pour la révolution autour. » | Révolution sans axe | Ajoutez une ligne d'axe, ou choisissez une ligne dans **Axe** |
| « Le profil traverse l'axe. Gardez-le d'un seul côté de la ligne d'axe. » | Profil des deux côtés de l'axe | Retracez la moitié du profil |
| « Placez des points d'esquisse aux emplacements des trous (outil Point), puis créez le trou. » | Aucun point libre dans l'esquisse | Ajoutez des points avec {{key:P}} |
| « Le lamage doit être plus large que le trou. » | Ø du lamage pas plus grand que **Diamètre** | Rendez le lamage plus large |
| « Le lamage doit être moins profond que le trou. » | Lamage plus profond qu'un trou aveugle | Rendez-le moins profond, ou le trou plus profond |
| « Choisissez les fonctions à copier. » | Répétition ou symétrie sans rien coché | Cochez une fonction sous **Fonctions à copier** |
| « Extrude2 n'a pas de solide à copier. » | La fonction copiée a échoué ou est désactivée | Corrigez-la ou réactivez-la |
| « Exige Sketch3, qui est en échec. » | Une fonction dont elle dépend n'est pas construite | Corrigez la fonction nommée |
| « La face où elle repose a disparu (Extrude1 n'est pas construite). » | La face de l'esquisse n'existe plus | Corrigez cette fonction, ou supprimez l'esquisse et redessinez-la |
| « Il ne reste rien de la pièce après cela. » | Une découpe a retiré toute la matière | Vérifiez la taille et le sens de la découpe |
| « Le noyau de solides n'a pas pu construire ceci (…). » ou « Le noyau de solides n'a pas pu combiner ceci avec le corps. » | Le noyau a refusé la géométrie | Annulez, ou modifiez légèrement les dimensions ; des faces qui se touchent exactement peuvent en être la cause |
| « Balayage : pas encore disponible. Il a besoin d'un noyau exact, que cette version de PartCraft ne possède pas. » (aussi Lissage, Nervure et les autres) | Une fonction créée dans une version antérieure que seul un noyau exact peut construire. Elle reste dans l'historique et est enregistrée telle quelle | Désactivez-la ou supprimez-la ; voir [Ce qui n'est pas encore disponible](topic:not-built-yet) pour la marche à suivre |
| « Un congé de 5 mm ne tient pas ici (…). » / « Un chanfrein de 2 mm … » | La taille est trop grande pour une face voisine de l'arête, ou l'angle ne peut pas être raccordé | Taille plus petite, ou moins d'arêtes par fonction |
| « Congé : dans cette version, seules les arêtes droites entre deux faces planes sont possibles (le noyau maillage les construit). Arrondissez ou chanfreinez les arêtes courbes dans l'esquisse. » (aussi Chanfrein) | Une arête choisie est arrondie, comme le bord d'un trou, ou se trouve sur une face courbe | {{ui:Choisir les arêtes}} et retirez-la ; arrondissez ou chanfreinez plutôt cet angle dans l'esquisse |
| « Un congé dont le rayon varie le long de l'arête : pas encore disponible (il exige un noyau exact). Donnez-lui un seul rayon. » | **Rayon variable** est coché | Décochez-le et donnez un seul rayon |
| « Congé par le noyau maillage : là où les arrondis se rencontrent, ils sont mis en onglet, et non raccordés. » (⚠, un avertissement) | Les arêtes choisies se rejoignent à un angle ; les arrondis y forment un pli vif | Rien à corriger : la pièce est construite. Arrondissez moins d'arêtes si le pli compte |
| « Une arête qu'il arrondit a disparu : l'arête entre Extrude1 et Cut2. » | Une modification précédente a supprimé l'arête | {{ui:Choisir les arêtes}}, retirez l'arête rouge, choisissez la nouvelle |
| « Choisissez les arêtes dans la vue, puis ajoutez-les. » | Le congé ou le chanfrein n'a pas d'arêtes | {{ui:Choisir les arêtes}} |
| « Choisissez les faces à retirer (ouvertes), puis coquez. » | La coque n'a pas de faces ouvertes | {{ui:Choisir les faces}} |
| « La coque ne peut pas être faite avec cette épaisseur (…). » | La paroi est plus épaisse qu'une partie fine du modèle ou qu'un rayon de congé | Une paroi plus fine, ou des congés plus grands |
| « Coque : dans cette version, elle n'ouvre que des faces planes (le noyau maillage la construit). » | Une face ouverte est courbe | {{ui:Choisir les faces}} et retirez-la ; n'ouvrez que des faces planes |
| « Dépouille : dans cette version, faces planes uniquement (le noyau maillage la construit). » | Une face en dépouille est un cylindre, un cône ou une face libre | Retirez-la ; ne mettez en dépouille que des faces planes |
| « Une face qu'elle ouvre a disparu (…). » | Une modification précédente a supprimé la face | {{ui:Choisir les faces}} à nouveau |
| « Congé1 modifie les arêtes ou les parois du corps ; il ne peut pas être copié. … » | Une répétition ou une symétrie copie un congé, un chanfrein ou une coque | Décochez-le ; répétez d'abord les découpes, puis faites le congé |
| « Il repose sur une face que seul un noyau exact peut trouver : pas encore disponible dans cette version. » | Une esquisse sur une face que le noyau maillage ne trouve pas, comme une face créée dans une version antérieure | Esquissez sur un plan de base ou sur une face plane d'une extrusion, et positionnez-la avec des cotes |
| « Il utilise une face ou une arête du solide, que seul un noyau exact peut trouver : pas encore disponible dans cette version. » | Un plan, un axe ou un point de référence sur une face ou une arête du solide | Construisez-le à partir des plans de base, des points d'esquisse ou de coordonnées |
| « Extrusion jusqu'à une face, la face suivante ou un sommet : pas encore disponible (exige un noyau exact). » / « Une conicité : pas encore disponible (exige un noyau exact). » | Une condition de fin ou une conicité que seul un noyau exact construit | Utilisez une profondeur Aveugle ou Plan médian que vous mesurez ; laissez **Conicité** à 0 |

## Problèmes de choix

- « Cette face est courbe. Choisissez une face plane ou un plan pour esquisser. » Les esquisses exigent une face plane. Esquissez sur un plan de base et positionnez l'esquisse avec des cotes.
- Une face indique « Fixée à l'endroit choisi » : elle n'a pas été créée par une arête d'esquisse (par exemple une face d'une copie de répétition), donc une esquisse posée dessus reste en place quand la pièce change.
- Les arêtes sont difficiles à atteindre : zoomez. Une arête l'emporte sur la face voisine lorsque le pointeur est juste dessus.

## Problèmes de fichiers

| Message | Solution |
|---|---|
| « PartCraft ouvre ses propres fichiers .partcraft.json, les exports de la macro CadCraft pour SolidWorks (.cadcraft-sw.json) et les fichiers STEP. « bracket.igs » n'est aucun de ces fichiers. » | Seuls ces fichiers sont reconnus (ainsi que les maillages STL, OBJ et 3MF et les fichiers `.3dm`) |
| « "part.stp" n'est pas un fichier STEP (il ne commence pas par ISO-10303-21). » | Le fichier n'est pas du texte STEP |
| « Ce fichier STEP est trop volumineux (plus de 60 Mo) pour être importé ici. » | Simplifiez-le à la source |
| « Ce fichier est trop volumineux pour être une pièce PartCraft. » sur votre propre pièce enregistrée | Un gros solide STEP importé dans une version antérieure a fait dépasser 50 Mo au fichier de pièce. Utilisez une copie antérieure sans lui |
| « Ce fichier est trop volumineux pour être une pièce PartCraft. » | Le fichier dépasse 50 Mo ; ce n'est pas un fichier PartCraft |
| « Ce n'est pas un fichier PartCraft (ce n'est pas du JSON). » / « Ce n'est pas un fichier PartCraft. » | Le fichier est endommagé ou appartient à un autre programme |
| « Ce fichier a été enregistré par une version plus récente de PartCraft (version de fichier …) ; celle-ci lit la version … » | Ouvrez-le dans la version plus récente de PartCraft |
| « Extrude2 : la profondeur est invalide. » (ou une autre valeur) | Le fichier a été modifié à la main ou endommagé. Utilisez une copie antérieure |
| L'insertion dans un assemblage indique « Part1.partcraft.json n'a pas de solide à insérer. » | Le fichier de pièce n'a pas de solide. Ouvrez-le, créez un solide, enregistrez, puis insérez à nouveau |

**Mon fichier enregistré n'est pas là où je l'attendais.** L'enregistrement est un téléchargement : cherchez dans le dossier des téléchargements de votre navigateur, ou ouvrez la liste des téléchargements depuis la barre d'outils du navigateur. Voir [Où vont vos fichiers](common:your-files).

**J'ai ouvert une pièce, mais l'assemblage est toujours affiché.** La pièce s'est chargée derrière l'assemblage. Choisissez {{ui:Fermer}} pour fermer l'assemblage et voir la pièce. Fermez les assemblages avant d'ouvrir des fichiers de pièce.

## Problèmes de dessin

| Message | Solution |
|---|---|
| « Construisez d'abord un solide, puis créez son dessin. » | Construisez la pièce d'abord |
| « Pas de place sur la feuille pour : détail. Rendez le détail plus petit ou supprimez une vue. » | **Rayon du détail** ou **Échelle du détail** plus petits, ou supprimez la coupe |
| « Un détail est pris dans la vue de face, de dessus, de droite ou en coupe. » | Cliquez sur l'une de ces vues |
| « Cliquez sur l'une des vues. » | Le clic était sur une zone vide de la feuille |
| « La position exige au moins une référence. » et les autres messages de cadre | Définissez les références demandées par le panneau, ou choisissez une autre caractéristique |
| « Les vues du dessin n'ont pas pu être créées : … » | Annulez la dernière modification. Si cela se reproduit, enregistrez, rechargez et rouvrez la pièce |

## Problèmes d'assemblage

| Message | Solution |
|---|---|
| « Construisez d'abord un solide, puis insérez-le dans un assemblage. » | La pièce n'a pas encore de solide |
| « Insérez d'abord une deuxième pièce (Ajouter une copie, Insérer, ou Édition › Dupliquer). » | Une liaison exige deux pièces |
| « Choisissez une face sur une autre pièce. » | Les deux faces d'une liaison doivent être sur des pièces différentes |
| « Cette face est courbe. Choisissez une face plane … » | Les liaisons partent de faces planes. Utilisez ensuite **Centrer sur** pour un axe de trou ou de révolution |
| « Bracket2 n'est pas lié à la pièce ancrée, donc il reste là où il a été placé. » | Ajoutez une liaison depuis lui vers une pièce placée |
| « Revolute3 ferme une boucle qui ne peut pas se fermer : elle est décalée de 2.000 mm. … » | Les pièces ne peuvent pas toutes se rejoindre : vérifiez les longueurs, les faces utilisées par chaque liaison, les décalages (les pièces superposées face à face doivent concorder en profondeur) et les limites ; ou supprimez une liaison de la boucle |
| « La face utilisée par cette liaison a disparu de Bracket. » / « L'axe utilisé par cette liaison a disparu de Bracket. » | La pièce a été modifiée. Supprimez la liaison et recréez-la |
| « L'axe est dans le plan de la face, il ne peut donc pas fixer le centre de la liaison. » | Choisissez un axe qui traverse la face, ou « L'origine propre de la face » |
| « Un assemblage garde au moins une pièce. Fermez-le plutôt. » | Utilisez {{ui:Fermer}} |

**Les pièces sont liées, mais au mauvais endroit.** Réglez **Centrer sur** des deux côtés de la liaison sur les trous ou axes de révolution qui doivent s'aligner, puis ajustez **Angle (°)** et **Décalage (mm)**.

## C'est lent

- Réglez **Courbes** sur Normal ou Grossier pendant la modélisation ; passez à Fin avant d'exporter.
- Les grands nombres de répétitions (des centaines de copies) prennent du temps à recalculer à chaque modification. Désactivez la répétition pendant que vous travaillez sur d'autres fonctions.
- La détection de conflits et le contrôle du mouvement comparent chaque paire de pièces ; les grands assemblages prennent plus de temps.
- Fermez les autres onglets lourds. PartCraft fonctionne avec le processeur et la carte graphique de votre ordinateur.

## Toujours bloqué

Enregistrez d'abord votre fichier ({{key:Mod+S}}), puis rechargez la page et rouvrez-le. Si une fonction échoue toujours, sélectionnez-la, lisez son message, et essayez {{key:Mod+Z}} pour revenir au dernier état correct.
