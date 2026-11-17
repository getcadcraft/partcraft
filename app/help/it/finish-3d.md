---
title: Finitura 3D: parallela e scallop
summary: Finisci l'intera superficie curva del modello con una fresa a sfera, a raggio d'angolo o piatta, in linee parallele a qualsiasi angolo o in passate distanti una misura fissa, così le creste tra di esse mantengono l'altezza richiesta. Cosa garantiscono i percorsi e cosa no.
keywords: finitura 3d, finitura, parallela, raster, scallop, scallop costante, cuspide, fresa a sfera, raggio d'angolo, superficie, tolleranza, passo, pendenza, sovrametallo da lasciare, drop cutter, sovrataglio
from: e1587d0a
---

Due operazioni in Produzione tagliano l'**intera superficie del modello** con l'utensile tenuto verticale (tre assi). Non richiedono selezioni: lavorano su tutta la parte del modello visibile dall'alto. Sgrossa prima la parte (adattiva o a tasca); una passata di finitura su sovrametallo non tagliato avvisa che taglierebbe in profondità.

## Parallela

Linee dritte attraverso il modello all'**angolo** impostato, distanti **passo** (una frazione del diametro dell'utensile). Ogni linea segue la superficie: la punta dell'utensile è tanto alta quanto deve essere perché nessuna parte della fresa scenda sotto il modello, e la linea viene tagliata più fitta ovunque la superficie si pieghi. Con **Zig-zag** attivo, l'utensile resta in presa tra le linee dove può farlo in sicurezza (verificato lungo lo spostamento); altrimenti si solleva.

- **Tolleranza**: quanto un tratto rettilineo di una linea può discostarsi dall'altezza vera della punta (la metà viene usata come limite al centro di ogni tratto). Predefinito 0.01 mm.
- **Solo dove la superficie è almeno … e al massimo … (°)**: finisce solo le aree poco inclinate o solo quelle ripide. Dove la superficie è fuori dall'intervallo, la linea viene omessa e l'utensile si solleva.
- **Sovrametallo da lasciare**: il modello spostato di quella distanza (la fresa ingrandita di quella quantità: esatto per utensili a sfera e a raggio d'angolo; un utensile piatto lascia almeno quella quantità).
- **Fondo**: nulla viene tagliato sotto questa z.

## Scallop

Passate che mantengono una distanza costante sulla superficie tra loro, così la cresta (lo scallop) lasciata tra due passate vicine ha l'**altezza** richiesta. La distanza deriva dall'altezza e dal raggio della sfera: s = 2·√(2·R·h − h²), per esempio circa 0.69 mm tra le passate per una sfera Ø6 e una cresta di 0.02 mm. Un utensile a raggio d'angolo usa il proprio raggio d'angolo. Una fresa piatta viene rifiutata: non ha cresta da dimensionare.

Le passate partono **dal bordo del modello, andando verso l'interno**, oppure **dalla sua sommità, andando verso il basso**. Sono contorni della distanza sulla superficie (non dell'altezza), quindi su una pendenza sono vicine in pianta e su un piano sono molto distanti. La distanza viene misurata su una griglia sulla superficie ed è precisa a circa l'1 %; l'altezza della cresta è esatta dove la superficie è piatta o dolcemente curva, e approssimata dove si curva rapidamente. **In concordanza** tiene il lato più alto della superficie a destra dell'utensile.

## Quanto sono buoni i percorsi

Cosa verificano i test, con formule chiuse o con una ricerca a forza bruta indipendente dell'impronta della fresa:

- L'altezza della punta sotto l'utensile è esatta per utensili a sfera, a raggio d'angolo e piatti su facce, spigoli e vertici della mesh, e non è mai superiore all'altezza vera; per le linee parallele il percorso resta entro la tolleranza, senza sovrataglio più profondo di essa.
- Le lunghezze dei percorsi su un piano inclinato concordano con la formula chiusa; le passate scallop su un piano sono distanti la distanza richiesta, e la cresta tra di esse risulta all'altezza richiesta.
- La simulazione del grezzo non mostra sovrataglio dopo una passata e mostra le creste che restano.

Cosa non sono questi percorsi: sono passate di finitura di base, non l'insieme di ciò che offre un sistema di produzione.

- Non ancora implementati: waterline (z costante), pulizia a matita e agli angoli, passate radiali e a spirale, proiezione di una curva sulla superficie, rilevamento di aree piatte, lavorazione di residui, controlli di collisione del portautensile e del gambo, e qualsiasi inclinazione dell'utensile.
- Il centro dell'utensile resta sopra il modello: i percorsi si fermano al bordo del modello invece di proseguire oltre, quindi una parete verticale proprio al bordo non viene finita fino al suo piede.
- I sottosquadri non vengono visti (la superficie è ciò che l'utensile incontra dall'alto).
- Il modello è la mesh del kernel, quindi i percorsi seguono la mesh (la sua tolleranza di corda è circa 0.0002 della diagonale della parte), non la superficie esatta.
- Finire un modello grande con una tolleranza fine produce un programma lungo con molti spostamenti brevi. Controllare l'output nel simulatore della propria macchina prima di tagliare.
