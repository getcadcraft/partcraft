---
title: El fitxer 3D interactiu
summary: Exporta el manual com un únic fitxer HTML que s'obre sense connexió en qualsevol navegador, sense instal·lació, compte ni seguiment: el model, les vistes, la llista de peces (enllaçada en els dos sentits), l'animació i la lupa.
keywords: il·lustra, interactiu, fitxer 3D, html, sense connexió, visor, compartir, client, taller
from: 4de4e074
---

{{ui:Exporta}}, després {{ui:Com a}} {{ui:Fitxer 3D interactiu (HTML, s'obre sense connexió)}}, desa un únic fitxer `.html`. Envieu-lo per correu, copieu-lo en una memòria USB o en una carpeta compartida: s'obre en qualsevol navegador amb WebGL 2, en un ordinador, una tauleta o un telèfon.

Dins del fitxer:

- Arrossegueu per girar el model; arrossegueu amb el botó dret o amb {{key:Shift}}+arrossegament per desplaçar; la roda o el pinçament per fer zoom.
- Feu clic en una vista de la llista: la càmera s'hi mou i les peces prenen les posicions, els aspectes, el tall i la lupa d'aquella vista.
- Feu clic en una fila de la llista de peces per il·luminar-ne les peces; feu clic en una peça per il·luminar-ne la fila.
- Quan el manual té una animació, una barra sota el model la reprodueix, la pausa i permet avançar-hi i retrocedir-hi.

El fitxer conté tot el que necessita (el model, el visor i three.js, amb la seva llicència MIT) i impedeix qualsevol sol·licitud: no pot accedir a internet, no té compte i no fa seguiment.

El 3D interactiu dins d'un PDF no s'ofereix: els navegadors i la majoria de lectors de PDF no el poden mostrar, i el lector que pot fer-ho el manté desactivat per defecte. El fitxer HTML és la resposta interactiva.
