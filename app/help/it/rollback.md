---
title: Rollback e avanzamento nella cronologia
summary: Spostare la barra di rollback su e giù una funzione alla volta per vedere il pezzo costruirsi, inserire funzioni nel mezzo e tornare alla fine.
keywords: rollback, riportare indietro, avanzare, barra di rollback, scorrere la cronologia, inserire funzione, congela, cronologia
from: 9a366cae
---

La barra di rollback decide quanta cronologia viene costruita. Le funzioni sotto la barra sono in grigio e non costruite; le nuove funzioni vengono inserite alla barra.

## Spostarsi una funzione alla volta

Con il pezzo visibile (nessuno schizzo o disegno aperto):

| Azione | Risultato |
|---|---|
| {{key:[}} oppure il pulsante freccia in su accanto al nome del pezzo | La barra sale di una funzione |
| {{key:]}} oppure il pulsante freccia in giù | La barra scende di una funzione |
| {{key:End}} oppure il pulsante barra alla fine | Ogni funzione viene di nuovo costruita |

La barra di stato indica dove si trova la barra, per esempio "Barra di rollback dopo Sketch1: 1 di 2 funzioni costruite". I pulsanti sono disattivati quando la barra non può andare oltre in quella direzione.

È anche possibile scegliere {{ui:Torna qui}} su qualunque funzione, oppure fare clic su **Barra di rollback · avanza** nella cronologia.

## Inserire una funzione nel mezzo

1. Riportare indietro la barra finché si trova dove va la nuova funzione.
2. Aggiungere la funzione: va inserita alla barra.
3. Premere {{key:End}} per costruire il resto della cronologia sopra di essa.

Ogni spostamento della barra è un passo che si può annullare con {{key:Mod+Z}}. La posizione della barra viene salvata nel file, quindi un pezzo può essere inviato con la barra riportata indietro. Anche lo strumento a riga di comando la sposta: `partcraft rollback part.json` e `partcraft forward part.json --end`.
