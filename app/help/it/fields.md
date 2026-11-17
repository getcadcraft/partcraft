---
title: Campi: forme come distanze
summary: Che cos'è un campo (una forma memorizzata come distanza dalla sua superficie), come costruirne uno da primitive, booleane, reticoli e superfici minime in uno script, come diventa un corpo e perché lo stesso script dà sempre gli stessi byte.
keywords: campo, distanza con segno, sdf, voxel, giroide, tpms, reticolo, booleana, offset, svuota, fusione, dual contouring, deterministico, a tenuta d'acqua, manifold, mattone
from: faab7480
---

Un **campo** descrive una forma tramite la distanza di qualsiasi punto dalla sua superficie: negativa all'interno, zero sulla superficie, positiva all'esterno. Una sfera di raggio 5 è "la distanza dal centro meno 5". Combinare forme è aritmetica sulle distanze: l'unione è la minore delle due, l'intersezione la maggiore, sottrarre una forma da un'altra è la maggiore tra la prima e meno la seconda. Ingrandire una forma di 1 mm sottrae 1 dalla distanza; una parete cava è la distanza, ripiegata su se stessa.

Ecco perché i campi sono adatti a reticoli, canali e pareti graduate: la superficie di un giroide è "la somma dei seni è zero", e una parete che si ispessisce da 1 a 3 mm lungo la parte è un numero che cambia attraverso la parte.

## Dal campo al corpo

`to_body(field, h)` campiona il campo su una griglia di punti distanti `h` millimetri, tenendo solo i punti vicini alla superficie (una griglia sparsa di mattoni 8 × 8 × 8), e costruisce la superficie con il **dual contouring**: un vertice per cella di superficie, posto dove si incontrano i piani della superficie, così uno spigolo vivo resta vivo entro un voxel. La superficie è chiusa e ogni spigolo è condiviso da esattamente due triangoli; il rapporto lo dice. Una feature più sottile di circa tre voxel può strozzarsi, e in quel caso il rapporto indica che il corpo non è un solido chiuso invece di nasconderlo.

La dimensione del voxel è la precisione: il volume di una sfera larga 25 voxel è entro qualche centesimo di percento, e una parete è vera quanto i suoi voxel. Più la griglia è grossolana, più il calcolo è veloce.

## Sempre gli stessi byte

Un campo non ha orologio né numeri casuali. Seno e coseno di un giroide, e ogni esponenziale, logaritmo e potenza della libreria, sono calcolati con semplice aritmetica in modo che Node, Chrome, Firefox e Safari diano gli stessi bit; la griglia viene percorsa in un ordine fisso, quindi lo stesso script con gli stessi input dà mesh e schede dati identici byte per byte, su qualsiasi computer e con qualunque numero di thread di lavoro. È verificato, anche confrontando un browser con Node.

## Dove andare dopo

[Scrivere un generatore](topic:write-a-generator) costruisce una parte con i campi; [La libreria di ingegneria](topic:engineering-library) la dimensiona.
