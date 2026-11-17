---
title: Il cubo di navigazione
summary: Cliccare una faccia, uno spigolo o un angolo del cubo nell'angolo della vista per guardare da lì, trascinarlo per orbitare, girare l'anello della bussola, muoversi intorno a una vista di fronte e tornare alla vista iniziale.
keywords: cubo di navigazione, viewcube, cubo, bussola, nord, vista iniziale, viste standard, superiore, anteriore, destro, isometrica, angolo, spigolo, orbita, ruota vista, icona degli assi, indicatore d'angolo, navigazione
from: afc33dc7
---

Il cubo di navigazione si trova in alto a destra della vista 3D (non durante lo schizzo né sulla tavola di disegno). Ruota con la vista, quindi mostra sempre in che direzione si guarda: {{ui:Superiore}} è il lato +Y della parte (il piano Superiore), {{ui:Anteriore}} il lato +Z (il piano Anteriore è rivolto verso chi guarda), {{ui:Destro}} il lato +X. Resta trasparente finché non lo si punta.

## Guardare da un lato, uno spigolo o un angolo

1. Puntare il cubo. La parte sotto il puntatore si illumina: il centro di una faccia, uno spigolo (si illumina su entrambe le facce che lo condividono) o un angolo (su tutte e tre le facce).
2. Cliccare. La vista ruota per guardare da lì, mantenendo lo stesso centro e lo stesso zoom.

Ci sono 26 punti su cui cliccare: 6 facce ({{ui:Superiore}}, {{ui:Inferiore}}, {{ui:Anteriore}}, {{ui:Posteriore}}, {{ui:Sinistro}}, {{ui:Destro}}), 12 spigoli e 8 angoli. Un angolo dà la classica vista a tre quarti; uno spigolo guarda a metà strada tra due facce.

Cliccare {{ui:Anteriore}}, {{ui:Superiore}} o {{ui:Destro}} dà le stesse viste di {{ui:Viste}} nella barra degli strumenti, senza adattare lo zoom.

## Orbitare trascinando il cubo

Trascinare il cubo per ruotare la vista, come l'orbita nella vista stessa. Un trascinamento non viene mai preso per un clic, quindi si può afferrare il cubo in qualunque punto.

## L'anello della bussola

L'anello sotto il cubo riporta N, E, S e O.

- **Trascinare l'anello** per ruotare il modello attorno all'asse verticale, come se stesse su un piatto girevole. L'anello segue il puntatore.
- **Cliccare una lettera** per guardare da quel lato, mantenendo quanto si guarda in basso. In una vista dall'alto, la lettera cliccata va in fondo allo schermo.

## Viste di fronte: frecce

Quando si guarda una faccia direttamente, compaiono piccole frecce attorno al cubo:

- I quattro **triangoli** portano la faccia da quel lato di fronte: il triangolo sopra il cubo mostra la faccia che era in alto, e così via.
- Le due **frecce curve** in alto a destra ruotano l'immagine di un quarto di giro in senso orario o antiorario, senza cambiare la faccia che si guarda. Usarle per girare una pianta in modo che un muro lungo attraversi lo schermo.

## Home

Il pulsante con la casetta in alto a sinistra del cubo torna alla vista a tre quarti e adatta la parte nella vista. {{key:Home}} fa lo stesso mentre il cubo ha il focus della tastiera.

## Con la tastiera

{{key:Tab}} per arrivare al cubo, poi:

| Tasto | Fa |
|---|---|
| {{key:left}} / {{key:right}} | sceglie un lato, uno spigolo o un angolo attorno al cubo, a passi di un ottavo di giro (i lettori di schermo dicono quale) |
| {{key:up}} / {{key:down}} | sceglie uno più in alto o più in basso, fino a {{ui:Superiore}} o giù fino a {{ui:Inferiore}} |
| {{key:Enter}} o {{key:Space}} | guarda da quello scelto |
| {{key:Shift+left}} / {{key:Shift+right}} | ruota la vista di un quarto di giro attorno all'asse verticale |
| {{key:Home}} | la vista iniziale |
| {{key:Esc}} | esce dal cubo |

I tasti premuti sul cubo restano al cubo: non avviano gli strumenti di PartCraft.

## Icona degli assi o niente

Aprire {{ui:Impostazioni}} ({{key:Mod+,}}), la scheda {{ui:PartCraft}}, e impostare **Indicatore d'angolo** su {{ui:Cubo di navigazione}} (l'inizio), {{ui:Icona degli assi}} (un piccolo marcatore X, Y, Z in basso a sinistra: X rosso, Y verde, Z blu) o {{ui:Nessuno}}. Questo browser ricorda la scelta. Vedi [Impostazioni di PartCraft](topic:settings#corner-indicator).

:::note
Il cubo mostra la parte come la costruisce PartCraft: Y verso l'alto, quindi il {{ui:Superiore}} del cubo è il piano Superiore. Le lettere della bussola servono solo a girare; una parte non ha un nord.
:::
