---
title: Le fichier 3D interactif
summary: Exportez le manuel en un seul fichier HTML qui s'ouvre hors ligne dans n'importe quel navigateur, sans installation, compte ni suivi : le modèle, les vues, la liste de pièces (liée dans les deux sens), l'animation et la loupe.
keywords: illustrer, interactif, fichier 3d, html, hors ligne, visionneuse, partager, client, atelier
from: 4de4e074
---

{{ui:Export}}, puis {{ui:As}} {{ui:Interactive 3D file (HTML, opens offline)}}, enregistre un seul fichier `.html`. Envoyez-le par e-mail, placez-le sur une clé USB ou dans un dossier partagé : il s'ouvre dans tout navigateur compatible WebGL 2, sur un ordinateur, une tablette ou un téléphone.

Dans le fichier :

- Faites glisser pour faire tourner le modèle, faites glisser avec le bouton droit ou {{key:Shift}}+glisser pour le panoramique, utilisez la molette ou le pincement pour le zoom.
- Cliquez sur une vue dans la liste : la caméra s'y déplace et les pièces prennent les emplacements, aspects, coupe et loupe de cette vue.
- Cliquez sur une ligne de la liste de pièces pour mettre en évidence ses pièces ; cliquez sur une pièce pour mettre en évidence sa ligne.
- Lorsque le manuel contient une animation, une barre sous le modèle la lance, la met en pause et permet de la parcourir.

Le fichier contient tout ce dont il a besoin (le modèle, la visionneuse et three.js, sous licence MIT) et bloque toute requête : il ne peut pas accéder à Internet, n'a pas de compte et ne fait aucun suivi.

La 3D interactive dans un PDF n'est pas proposée : les navigateurs et la plupart des lecteurs PDF ne peuvent pas l'afficher, et le lecteur qui le peut la garde désactivée par défaut. Le fichier HTML est la solution interactive.
