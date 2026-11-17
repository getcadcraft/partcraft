---
title: Cambiare le misure senza aprire lo schizzo
summary: Guidare una parte dai numeri nel pannello di destra: quote dello schizzo, profondità, numeri e angoli; come pianificare una parte perché i numeri giusti la guidino, e dove parametri ed equazioni prendono il controllo.
keywords: parametri, quote guida, intento di progetto, cambiare misura, equazioni, variabili globali, tabella di progetto, configurazioni, ridimensionare, modificare quota
from: c2ae1a32
---

Ogni misura di una parte PartCraft è un numero che si può cambiare in seguito: le quote dei suoi schizzi e le impostazioni delle sue feature. Non serve aprire uno schizzo per cambiarne le quote.

## Cambiare una quota di schizzo dal pannello

1. Fare clic su una feature nella cronologia, per esempio "Extrude1".
2. Sotto le impostazioni dell'estrusione, **Quote dello schizzo (Sketch1)** elenca ogni quota del suo schizzo: "Distanza", "Diametro", "Angolo (°)" e così via.
3. Digitare un nuovo valore in un campo e premere {{key:Enter}} oppure {{key:Tab}}.

Lo schizzo si risolve con il nuovo valore e l'intera parte viene ricostruita. Selezionando lo schizzo stesso appare la stessa lista come **Quote guida**.

Un raggio o un diametro deve essere maggiore di zero, e un angolo è compreso tra 0 e 180 gradi; la barra di stato lo indica se non è così.

:::tip
Quale campo corrisponde a quale quota? I campi sono elencati nell'ordine in cui sono state create le quote. Se non si è sicuri, aprire lo schizzo (doppio clic), fare doppio clic sulla quota nell'area di disegno e cambiarla lì.
:::

## Digitare subito il numero principale

Selezionare una feature nella cronologia (oppure aggiungerla) e digitare un numero: va nel campo principale della feature, quello che si cambia più spesso (la **Profondità** di un'estrusione, l'**Angolo** di una rivoluzione, il **Diametro** di un foro, il **Numero** di una serie, il **Raggio** di un raccordo, lo spessore di parete di uno svuotamento). Premere {{key:Enter}} per impostarlo, oppure {{key:Esc}} per mantenere il valore precedente. Aggiungendo un'estrusione, la barra di stato lo indica: "Extrude1 aggiunta. Modificare i suoi numeri a destra, oppure digitare ora un numero per la sua profondità."

## Cambiare il numero nella cronologia

La riga di ogni feature nella cronologia mostra il suo numero principale accanto al nome: "Extrude1 25 mm", "Hole1 Ø6.6 passante", "Fillet1 R2", "LPattern1 4 × 20 mm". Fare doppio clic sul numero (oppure selezionare la riga e premere {{key:F2}}) e si apre subito un campo. Digitare il nuovo valore e premere {{key:Enter}}; {{key:Esc}} mantiene il valore precedente. Funziona esattamente come il campo della feature a destra: stessi limiti, `=` per digitare un'equazione come `=width/2`, e un solo passo per annullare.

Su un'estrusione, un foro o una serie, un doppio clic in un punto qualsiasi della riga apre il campo. Su raccordi, smussi, svuotamenti, sformi o filettature un doppio clic sul nome porta ancora alla scelta di spigoli o facce, quindi fare doppio clic sul numero stesso. Gli schizzi non hanno numero nella riga: un doppio clic apre lo schizzo.

## Trascinarlo nella vista

Selezionare un'estrusione nella cronologia (oppure fare clic su di essa nella vista, poi sulla sua riga) e una freccia arancione si posiziona sulla sua faccia finale, con la profondità in un campo accanto. Trascinare la freccia: la parte segue il trascinamento, e rilasciando la profondità viene impostata come un solo passo ({{key:Mod+Z}} la riporta indietro). Premere {{key:Esc}} durante il trascinamento per tornare al punto di partenza. La profondità si muove a passi di un decimo della sua dimensione: 1 mm su un'estrusione da 25 mm, 0.1 mm su una da 3 mm.

Una rivoluzione ha una freccia curva alla fine della sua rotazione: trascinarla attorno all'asse per cambiare l'angolo, in gradi interi da 1° a 360°.

Oppure fare clic nel campo accanto alla freccia, digitare un valore (o `=` e un'equazione) e premere {{key:Enter}}. Non c'è freccia su un'estrusione che va **Attraverso tutto** o fino a una faccia, né su un valore guidato da un'equazione: modificare questi valori a destra.

## I numeri che guidano una parte

| Dove | Cosa si può cambiare |
|---|---|
| Schizzo | Ogni quota: lunghezze, distanze, raggi, diametri, angoli |
| Estrusione e Taglio | Profondità, condizione finale, direzione, sporgenza o taglio |
| Rivoluzione e taglio di rivoluzione | Angolo, asse, sporgenza o taglio |
| Foro | Diametro, profondità, attraverso tutto, diametro e profondità dell'alesatura |
| Raccordo, Smusso, Svuota | Raggio, distanza, spessore e direzione della parete, e quali spigoli o facce |
| Lineare e Circolare | Numero, spaziatura o angolo, direzione o asse |
| Parte | Curve (quanto finemente le forme tonde sono sfaccettate) |
| Disegno | Dove taglia la sezione, dimensione e scala del dettaglio, valori GD&T |

## Pianificare la parte perché i numeri giusti la guidino

I numeri che si danno sono quelli che si possono cambiare. Alcune abitudini fanno sì che le modifiche successive si comportino bene:

- **Quotare ciò che conta per il lavoro.** Se un foro deve restare a 15.0 mm da uno spigolo, quotarlo da quello spigolo, non dall'origine.
- **Definire completamente gli schizzi.** Così una modifica sposta solo ciò che deve (vedi [Definire completamente uno schizzo](topic:relations-dimensions)).
- **Usare le relazioni per l'intento.** Uguale su due fori significa che un solo diametro guida entrambi. Forme simmetriche: mettere l'origine sulla linea di mezzeria, oppure usare il punto medio.
- **Disegnare lo schizzo su facce create da feature.** Uno schizzo sulla faccia finale di un'estrusione si sposta quando cambia la profondità.
- **Usare una serie invece di copiare.** Un foro in serie di otto ha un solo diametro da cambiare.

## Oltre i singoli numeri

- **Un numero che guida più valori:** usare parametri ed equazioni: [Guidare una parte con i parametri](topic:parameters).
- **Più misure di una parte:** salvare ciascuna come [configurazione](topic:design-tables); sono conservate nel file della parte.
- **Calcoli in un campo numerico:** digitare `=40/2` oppure `=width / 2`. Così si crea un'equazione; vedi [Equazioni nei due sensi](topic:equations-two-way).
- **Unità in pollici:** la parte mostra i millimetri. In un campo numerico con `=`, o in un parametro, `2in` viene convertito in 50.8.

Vedi [Cosa non è ancora implementato](topic:not-built-yet).
