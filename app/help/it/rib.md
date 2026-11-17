---
title: Nervature e fazzoletti
summary: Rinforzare un pezzo con una nervatura disegnata come una sola linea: si riempie dalla linea alle pareti, per uno spessore impostato attraverso il piano dello schizzo, dal lato scelto.
keywords: nervatura, fazzoletto, anima, rinforzo, irrigidimento, controvento, staffa, supporto d'angolo, parete sottile, rinforzare
from: 5c218881
---

:::note
**Non ancora implementato in questa versione.** La nervatura richiede un kernel geometrico esatto, che questa versione di PartCraft non ha: crea ogni pezzo con il kernel mesh. [Ciò che non è ancora implementato](topic:not-built-yet) spiega cosa fare invece. Il resto di questa pagina descrive la funzione come funziona con un kernel esatto.
:::

Una **nervatura** (o fazzoletto) è una parete sottile che irrigidisce un pezzo, come il triangolo nell'angolo di una staffa a L. Si disegna solo il suo bordo libero: PartCraft riempie lo spazio tra quella linea e le pareti. Richiede il **kernel esatto** (vedere [Il kernel mesh](topic:solid-kernels)).

## Aggiungere una nervatura

1. Creare un piano che passa per il punto centrale in cui va la nervatura (per una staffa a L profonda 40, un piano 20 davanti al suo schizzo: vedere [Piani, assi e punti di riferimento](topic:reference-geometry)).
2. Disegnare sul piano **una linea** da parete a parete — oppure poche linee in sequenza per un bordo di nervatura piegato. La linea può fermarsi prima delle pareti: le sue estremità vengono prolungate finché non le incontrano.
3. Selezionare lo schizzo e scegliere {{ui:Altro}} › {{ui:Nervatura}}.

La nervatura riempie la linea fino alle pareti sul lato verso il centro del pezzo, così un fazzoletto finisce nell'angolo interno. Se quel lato è aperto e l'altro è chiuso, PartCraft lo inverte automaticamente e lo segnala.

## Impostazioni

- **Spessore (mm)** è lo spessore della nervatura attraverso il piano dello schizzo. Può essere guidato da un parametro.
- **Spessore** (la scelta sotto di esso): **Centrato sul piano dello schizzo**, **Davanti al piano** (lungo la sua normale) oppure **Dietro al piano**.
- **Inverti** riempie l'altro lato della linea.

## Messaggi

- **Da questo lato il bordo della nervatura non incontra mai il corpo** — nulla si chiude nello spazio su quel lato: attivare o disattivare **Inverti**, oppure spostare la linea in modo che delle pareti la delimitino.
- **Una nervatura richiede una catena aperta di linee nel suo schizzo** — lo schizzo contiene una forma chiusa, un arco o una spline, oppure linee che non si uniscono in sequenza.
- **Il bordo della nervatura corre dentro il corpo in quel punto** — la linea giace dentro il solido; disegnarla nello spazio libero tra le pareti.
