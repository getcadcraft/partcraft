---
title: Catene di tolleranze
summary: Scegli una catena di facce attraverso le parti di un assieme e verifica quanto può variare lo spazio alla sua estremità, nel caso peggiore e con RSS, con le quote più determinanti in testa alla classifica.
keywords: catena di tolleranze, tolleranze, analisi delle tolleranze, catena di quote, anello, spazio, gioco, caso peggiore, rss, radice della somma dei quadrati, tolleranza statistica, contributi, sensibilità, gd&t, tolleranza generale, iso 2768
from: cbdb3159
---

Una **catena di tolleranze** somma le quote lungo una catena attraverso più parti, per verificare quanto un risultato (di solito uno spazio) può variare quando ciascuna parte è realizzata ovunque entro le sue tolleranze.

## Scegliere la catena

1. Aprire un assieme e scegliere {{ui:Catena di tolleranze}} nel gruppo Assieme. Sopra la vista si apre un cartellino.
2. Scegliere lungo cosa si misura la catena: X, Y o Z dell'assieme, oppure {{ui:La normale della prima faccia}}.
3. Premere {{ui:Seleziona la catena}} e fare clic sulle facce attraversate dalla catena, **in ordine**: partire da un lato dello spazio, attraversare le parti e terminare sull'altro lato dello spazio.
4. Premere {{ui:Fine}} oppure Invio. Backspace annulla l'ultimo clic; {{key:Esc}} annulla.

Due clic sulla stessa parte definiscono la quota di quella parte (la sua distanza lungo la catena). Un clic su un'altra parte crea un'**interfaccia** tra le due, dove le parti si toccano; non ha tolleranza a meno che non ne venga digitata una. I collegamenti sommano o sottraggono in base al verso in cui corre la catena, e chiudono l'anello: lo spazio nominale è quello che mostra il modello.

È possibile anche {{ui:Aggiungi un anello}} a mano e digitarne il valore nominale, la tolleranza e se somma (+) o sottrae (−).

## Assegnare a ciascun anello la sua tolleranza

Ogni anello ha uno scostamento **superiore** e uno **inferiore** (per esempio +0.1 e −0.05). **Tolleranza da** li compila dalla parte:

- **Tolleranza generale**: il campo Tolleranza del cartiglio della parte (vedi [Disegno in PDF](topic:drawing-pdf)), quando riporta ±0.1, +0.2/-0.1 oppure ISO 2768-f, -m, -c o -v (tolleranze lineari ISO 2768-1, in base alla dimensione dell'anello). La tolleranza generale di una parte è usata subito quando si sceglie la catena.
- **GD&T**: qualsiasi riquadro di controllo delle caratteristiche nel disegno della parte. Le zone di posizione, profilo e oscillazione danno ± metà della tolleranza. Una tolleranza di orientamento o di forma di solito è compresa in quella dimensionale: aggiungerla solo dove la catena incontra la superficie controllata. Con Ⓜ o Ⓛ la zona è presa alla dimensione dichiarata; la tolleranza bonus non viene conteggiata.
- **Digitata**: qualsiasi valore digitato.

## Leggere i risultati

- **Spazio, nominale** e, quando le tolleranze sono diverse, **Spazio, medio**: +0.2/−0 e +0/−0.1 spostano il centro dell'intervallo.
- **Caso peggiore**: ogni tolleranza al suo limite nello stesso momento. Lo spazio non può mai uscire da questo intervallo.
- **RSS** (radice della somma dei quadrati): ogni tolleranza è presa come tre deviazioni standard di una dispersione normale, e sommata come radice quadrata della somma dei loro quadrati. La maggior parte degli assiemi rientra ampiamente nel caso peggiore; questa è la stima usuale per parti prodotte in serie.
- Indicare **Spazio almeno** e **Spazio al massimo** per vedere se il caso peggiore resta sempre dentro, e quanti assiemi su un milione l'RSS prevede fuori.
- La colonna **#** classifica gli anelli in base alla loro **quota** dell'RSS: stringere i primi per ottenere la differenza maggiore.

{{ui:Salva CSV}} scrive gli anelli, le loro quote e i risultati. Le catene di tolleranze sono salvate nel file dell'assieme, e ogni modifica è un unico passo annullabile con {{key:Mod+Z}}.

:::note
Una catena di tolleranze è a una sola direzione. Non segue angoli o curve lungo la catena, e non legge le tolleranze dimensionali dagli schizzi: indicarle come tolleranze digitate oppure tramite il cartiglio.
:::
