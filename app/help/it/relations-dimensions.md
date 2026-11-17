---
title: Vincolare completamente uno schizzo con relazioni e quote
summary: Aggiungere relazioni dal pannello di destra e quote con lo strumento Quota, leggere i colori sottodefinito, completamente definito e sovradefinito, e correggere uno schizzo sovradefinito.
keywords: relazioni, vincoli, quote, quota intelligente, completamente definito, sottodefinito, sovradefinito, gradi di libertà, coincidente, orizzontale, verticale, parallelo, perpendicolare, tangente, uguale, concentrico, punto medio, fissa, conflitto, ridondante
from: e76d047a
---

Uno schizzo è **completamente definito** quando ogni punto e ogni misura sono fissati da relazioni e quote. Uno schizzo completamente definito cambia solo quando si modifica un numero, quindi la parte si comporta in modo prevedibile quando la si modificherà in seguito. PartCraft non obbliga a definire completamente uno schizzo, ma mostra sempre quanto si è vicini.

## Leggere lo stato dello schizzo

Lo stato appare in tre punti: l'indicatore in alto a sinistra della vista, il messaggio in cima al pannello di destra e il contrassegno nella cronologia.

| Stato | Indicatore | Colore della geometria | Significato |
|---|---|---|---|
| Sottodefinito | "Sottodefinito · 3 gradi di libertà" | Blu | Alcune geometrie possono ancora muoversi. Trascinare la geometria blu per vedere in quale direzione |
| Completamente definito | "Completamente definito" | Inchiostro (nero su Carta, chiaro su Modello) | Ogni punto e ogni misura sono fissati |
| Sovradefinito | "Sovradefinito" | Rosso sulle relazioni coinvolte | Alcune relazioni si contraddicono, oppure una è già implicita nelle altre |

La geometria di costruzione è grigia e tratteggiata qualunque sia il suo stato. Gli elementi selezionati sono arancioni. Un "grado di libertà" è un modo in cui qualcosa può ancora muoversi: un punto libero ne ha due (sinistra-destra e su-giù), un cerchio libero ne ha tre (il centro e il raggio).

La legenda sotto il messaggio nel pannello di destra ripete i colori.

## Aggiungere una quota

1. Premere {{key:D}} oppure scegliere {{ui:Quota}}.
2. Fare clic su ciò che si vuole misurare:
   - **una linea**: la sua lunghezza;
   - **un cerchio**: il suo diametro; **un arco**: il suo raggio;
   - **due punti** (un estremo, un centro, un punto libero o l'origine): la distanza tra di essi;
   - **un punto e una linea**: la distanza dal punto alla linea;
   - **due linee parallele**: la distanza tra di esse; **due linee ad angolo**: l'angolo tra di esse.
3. Dopo il primo elemento, la barra di stato dice "Fare clic su un secondo elemento, oppure fare clic dove deve andare la quota." Fare clic su un secondo elemento, oppure in uno spazio vuoto dove si vuole il numero.
4. Si apre una casella numerica con il valore attuale. Digitare la misura e premere {{key:Enter}}. {{key:Esc}} mantiene il valore misurato.

**Dove si colloca il numero decide il tipo** per una linea inclinata o due punti: collocarlo sopra o sotto per ottenere una distanza orizzontale, a sinistra o a destra per ottenere una distanza verticale, altrove per la distanza vera (allineata).

La casella accetta numeri semplici in millimetri o gradi, come `25`, `12.5` o `1e3`. Un `⌀`, `Ø` o `R` iniziale, oppure `mm` o `°` finale, viene ignorato. Gli angoli vanno da 0 a 180 gradi. Le operazioni come `20+5` non sono accettate; per collegare una misura a una variabile o a una formula, iniziarla con `=`.

Per modificare una quota in seguito, fare doppio clic sul suo numero nello schizzo, oppure scegliere **Modifica** accanto ad essa nell'elenco del pannello di destra.

:::tip
È anche possibile selezionare prima la geometria (strumento Selezione) e scegliere un pulsante di quota nel pannello di destra: {{ui:Distanza}}, {{ui:Distanza orizzontale}}, {{ui:Distanza verticale}}, {{ui:Raggio}}, {{ui:Diametro}} oppure {{ui:Angolo}}. Vengono mostrati solo quelli che si adattano alla selezione. Questo è il modo per dare a un cerchio un raggio invece di un diametro.
:::

## Aggiungere una relazione

Le relazioni si aggiungono dal pannello di destra, non con uno strumento.

1. Premere {{key:S}} per Selezione.
2. Fare clic su un elemento, poi {{key:Shift}}+clic su un secondo se la relazione ne richiede due. Anche l'origine può essere selezionata.
3. Il pannello di destra indica "Selezionato: linea l3, punto p1" e mostra un pulsante per ogni relazione compatibile, come {{ui:∥ Parallelo}} o {{ui:• Coincidente}}.
4. Scegliere il pulsante. Lo schizzo si risolve subito.

Se nessuna relazione è compatibile, il pannello dice "Nessuna relazione è compatibile con questa selezione. Selezionare uno o due elementi (Shift+clic aggiunge)."

L'elenco completo delle relazioni, ciò che ciascuna richiede e ciò che fa, è in [Relazioni e quote dello schizzo](topic:sketch-relations).

Le relazioni appaiono nello schizzo come piccoli simboli accanto alla geometria (H, V, ∥, ⊥, T, =, ◎, M, ⚓). I punti di coincidenza sono nascosti, a meno che la geometria non sia selezionata o la relazione non sia in difficoltà. Fare clic su un simbolo per selezionare la relazione.

## Un esempio svolto: il profilo di una staffa a L

1. Disegnare lo schizzo sul **Piano Anteriore**. Con lo strumento Linea, partire dall'origine e fare clic su sei angoli di una L, terminando di nuovo sull'origine. La catena si chiude da sola quando si fa clic sul primo punto.
2. Le linee disegnate quasi orizzontali o verticali hanno già le relazioni H e V, tranne l'ultima: una linea che termina su un punto esistente non riceve relazioni automatiche. Premere {{key:S}}, fare clic su quell'ultima linea e scegliere {{ui:V Verticale}} nel pannello di destra. L'indicatore dice "Sottodefinito · 4 gradi di libertà".
3. Premere {{key:D}}. Fare clic sulla linea inferiore, fare clic sotto di essa, digitare `80`, {{key:Enter}}.
4. Fare clic sulla linea sinistra, fare clic a sinistra di essa, digitare `60`, {{key:Enter}}.
5. Quotare allo stesso modo la linea superiore corta con `20` e la linea verticale interna con `45`.
6. L'indicatore ora dice **Completamente definito** e tutta la L diventa inchiostro.

## Correggere uno schizzo sovradefinito

Quando una nuova relazione o quota contraddice le altre, PartCraft non sposta nulla. La geometria resta esattamente com'era, le relazioni coinvolte diventano rosse e la barra di stato le indica:

- "Sovradefinito: Orizzontale, Distanza 40 non possono essere tutte soddisfatte. Annullare, oppure eliminarne una." Le relazioni sono in conflitto.
- "Sovradefinito: Parallelo è già implicito. Eliminarlo." La relazione non aggiunge nulla: le altre la impongono già. (I lati di un rettangolo, per esempio, sono già paralleli.)

Per correggerlo:

1. Premere {{key:Mod+Z}} per annullare l'ultima modifica, oppure
2. Trovare l'elemento rosso nell'elenco **Relazioni e quote** del pannello di destra (un gruppo che lo contiene è aperto e rosso) e scegliere **Elimina** accanto ad esso. Si può anche fare clic sul suo simbolo o numero nello schizzo e premere {{key:Delete}}.

:::note
In questa versione non ci sono quote "guidate" (di riferimento). Una quota che si limiterebbe a riportare una misura già fissata dalle altre relazioni viene trattata come sovradefinita. Leggere le misure nel pannello: selezionare una linea e osservare i pulsanti Quota, oppure controllare i dati della parte dopo l'estrusione.
:::

Uno schizzo sovradefinito con un vero conflitto fa fallire la feature che lo usa ("Sovradefinito: 1 relazione non può essere soddisfatta del tutto."), e la cronologia la segna come **⚠ errore**. Uno schizzo solo ridondante viene comunque costruito, con un avviso ⚠.

## Trascinare per trovare ciò che è libero

In Selezione, trascinare qualsiasi punto o linea blu. Il risolutore la sposta il meno possibile mantenendo ogni relazione. Se un trascinamento romperebbe una relazione, la geometria torna indietro. È il modo più rapido per vedere quale quota manca ancora.

## L'elenco delle relazioni

Con nulla selezionato, il pannello di destra elenca **Relazioni e quote**. Ogni riga ha:

- **Modifica** (solo per le quote): apre la casella numerica;
- **Seleziona**: la seleziona nello schizzo;
- **Elimina**: la rimuove.

Relazioni dello stesso tipo che compaiono più volte condividono una riga, per esempio "Coincidente × 5" per un rettangolo legato all'origine. Fare clic sulla riga per aprirla: ogni relazione è elencata con ciò che collega ("punto p2, punto p4") e con il proprio **Seleziona** ed **Elimina**. La riga stessa ha:

- **Seleziona**: le seleziona tutte nello schizzo;
- **Elimina tutto**: le rimuove tutte con un solo passo ({{key:Mod+Z}} le riporta).

Un gruppo che contiene una relazione sovradefinita si apre da solo, con il nome in rosso. Le quote sono sempre elencate una per riga, con i loro valori.

Con la geometria selezionata, l'elenco mostra solo le **Relazioni sulla selezione**.
