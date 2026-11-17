---
title: Disegnare un arco con dieci metodi
summary: Scegliere come è descritto un arco (tre punti, inizio e fine con un raggio, centro e inizio con un angolo e altri), fare clic o digitare i valori e continuare dall'ultima linea o dall'ultimo arco.
keywords: arco, arco a 3 punti, arco a tre punti, inizio centro fine, inizio fine raggio, arco tangente, continua, corda, angolo incluso, arco di schizzo, metodi arco
from: 647f7dce
---

## Cosa si fa

Disegnare un arco in uno schizzo con il metodo che corrisponde a ciò che si conosce: tre punti su di esso, il suo centro, il suo raggio, l'angolo che descrive o la direzione in cui parte. I valori si possono cliccare o digitare.

## Passaggi

1. Aprire uno schizzo (vedi [Basi dello schizzo](topic:sketch-basics)).
2. Nella barra degli strumenti dello schizzo, aprire l'elenco accanto a {{ui:Arco}} e scegliere un metodo, per esempio {{ui:Arco: inizio, fine, raggio}}. I metodi sono 3 punti; Inizio, centro, fine; Inizio, centro, angolo; Inizio, centro, lunghezza; Inizio, fine, angolo; Inizio, fine, direzione; Inizio, fine, raggio; Centro, inizio, fine; Centro, inizio, angolo; Centro, inizio, lunghezza; e Continua.
3. Seguire la barra di stato, che indica il metodo e cosa dare dopo: fare clic sul punto iniziale, sul punto centrale, su un secondo punto dell'arco o sul punto finale.
4. Dove il messaggio dice "oppure digitare", digitare un numero e premere {{key:Enter}}: l'angolo incluso in gradi (negativo è in senso orario), la lunghezza della corda, la direzione tangente iniziale in gradi, oppure il raggio (negativo è il percorso più lungo).
5. L'arco viene disegnato. {{ui:Arco: continua}} avvia l'arco successivo dalla fine dell'ultima linea o dell'ultimo arco.

## Note

- Gli archi mantengono il loro centro, inizio e fine, quindi relazioni e quote funzionano su di essi come prima.
- La barra di stato rifiuta gli input impossibili e spiega perché, per esempio tre punti allineati, oppure un raggio troppo piccolo per collegare i due punti estremi.
- {{ui:Arco: continua}} senza nulla disegnato risponde "Nulla da cui continuare: disegnare prima una linea o un arco."
