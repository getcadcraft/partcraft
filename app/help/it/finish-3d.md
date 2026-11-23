---
title: Finitura 3D: parallela e cresta
summary: Finisci tutta la superficie curva del modello con una fresa a sfera, a raggio d'angolo o piatta, con linee parallele a qualsiasi angolo oppure con passate a distanza fissa, così che le creste tra di esse mantengano l'altezza richiesta. Cosa garantiscono i percorsi e cosa no.
keywords: finitura 3d, finitura, parallelo, raster, cresta, cresta costante, cuspide, fresa a sfera, fresa a raggio d'angolo, superficie, tolleranza, passo, pendenza, sovrametallo da lasciare, drop cutter, sfondamento
from: 942d2341
---

Due operazioni in Produzione tagliano la **superficie di tutto il modello** con l'utensile tenuto verticale (tre assi). Non richiedono selezioni: lavorano su tutta la parte del modello visibile dall'alto. Prima sgrossare il pezzo (adattiva o tasca); una passata di finitura su materiale non ancora asportato avvisa che taglierebbe in profondità.

## Parallelo

Linee rette attraverso il modello, all'**angolo** impostato, distanti un **passo** l'una dall'altra (una frazione del diametro dell'utensile). Ogni linea segue la superficie: la punta dell'utensile sta tanto in alto quanto serve perché nessuna parte della fresa scenda sotto il modello, e la linea viene tagliata più fitta dove la superficie si piega. Con **Zig-zag** attivo, l'utensile resta in basso tra una linea e l'altra dove può farlo in sicurezza (verificato lungo lo spostamento); altrimenti si solleva.

- **Tolleranza**: quanto un tratto rettilineo di una linea può discostarsi dall'altezza vera della punta (la metà viene usata come limite nel punto centrale di ogni tratto). Predefinito 0.01 mm.
- **Solo dove la superficie è almeno … e al massimo … (°)**: finisce solo le zone poco inclinate oppure solo quelle ripide. Dove la superficie è fuori dall'intervallo, la linea viene omessa e l'utensile si solleva.
- **Sovrametallo da lasciare**: il modello spostato di quella distanza (la fresa ingrandita di altrettanto: esatto per le frese a sfera e a raggio d'angolo; una fresa piatta lascia almeno quel materiale).
- **Fondo**: non viene tagliato nulla sotto questa quota z.

## Cresta

Passate che mantengono una distanza costante sulla superficie tra l'una e l'altra, così che la cresta (lasciata tra due passate vicine) abbia l'**altezza** richiesta. La distanza deriva dall'altezza e dal raggio della sfera: s = 2·√(2·R·h − h²); per esempio circa 0.69 mm tra le passate per una sfera Ø6 e una cresta di 0.02 mm. Una fresa a raggio d'angolo usa il proprio raggio d'angolo. Una fresa piatta viene rifiutata: non ha una cresta da dimensionare.

Le passate partono **dal bordo del modello, verso l'interno**, oppure **dalla sua parte alta, verso il basso**. Sono curve di livello della distanza sulla superficie (non dell'altezza): su una pendenza sono vicine in pianta, su un piano sono molto distanziate. La distanza è misurata su una griglia sulla superficie ed è precisa a circa l'1 %; l'altezza della cresta è esatta dove la superficie è piana o curva dolcemente, e approssimata dove curva rapidamente. **In concordanza** mantiene il lato più alto della superficie a destra della fresa.

## Qualità dei percorsi

Cosa verificano i test, con formule chiuse oppure con una ricerca indipendente per forza bruta sull'impronta della fresa:

- L'altezza della punta sotto l'utensile è esatta per una fresa a sfera, a raggio d'angolo e piatta su facce, spigoli e vertici della mesh, e non è mai superiore all'altezza vera; per le linee parallele il percorso resta entro la tolleranza, senza sfondamenti più profondi di essa.
- Le lunghezze dei percorsi su un piano inclinato coincidono con la formula chiusa; le passate a cresta su un piano sono distanti quanto richiesto e la cresta tra di esse risulta all'altezza richiesta.
- La simulazione del grezzo non mostra sfondamenti dopo una passata e mostra le creste che restano.

Questi percorsi sono passate di finitura di base, non l'insieme di ciò che offre un sistema di produzione completo.

- Non ancora implementato: finitura a quota costante (z costante), pulizia a matita e degli angoli, passate radiali e a spirale, proiezione di una curva sulla superficie, rilevamento di zone piane, controlli di collisione del portautensile e del gambo. Sgrossatura e lavorazione del residuo sono operazioni a sé ([Sgrossatura 3D e lavorazione del residuo](topic:rough-3d)); un utensile inclinato è la [finitura a 5 assi](topic:multi-axis#5-axis-finishing).
- Il centro utensile resta sopra il modello: i percorsi si fermano al bordo del modello invece di proseguire oltre, quindi una parete verticale proprio al bordo non viene finita fino al piede.
- I sottosquadri non sono visti (la superficie è ciò che l'utensile incontra dall'alto).
- Il modello è la mesh del kernel, quindi i percorsi seguono la mesh (la sua tolleranza di corda è circa 0.0002 della diagonale del pezzo), non la superficie esatta.
- Finire un modello grande con una tolleranza fine produce un programma lungo con molti spostamenti brevi. Controllare l'output nel simulatore della propria macchina prima di tagliare.
