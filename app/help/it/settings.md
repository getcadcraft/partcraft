---
title: Impostazioni di PartCraft
summary: Scegliere quale pulsante del mouse ruota la vista, far ruotare e spostare la parte con lo scorrimento del trackpad, attivare o disattivare le relazioni automatiche durante lo schizzo e impostare quanti thread usano i solutori di simulazione.
keywords: impostazioni, preferenze, opzioni, mouse, pulsante centrale, pulsante della rotella, orbita, ruota, gira, trackpad, touchpad, scorrimento, swipe, pizzico, relazioni, vincoli, vincolo automatico, relazioni automatiche, snap, coincidente, thread, thread del solutore, core, processori, multi-thread, risoluzione più veloce, parallelo
from: 759edcaf
---

Aprire {{ui:Impostazioni}} con l'ingranaggio nella barra dell'app oppure con {{key:Mod+,}}. La prima scheda, {{ui:PartCraft}}, contiene le impostazioni proprie di questa app; {{ui:Generali}} contiene quelle che condividono tutte le app CadCraft (tema, barra degli strumenti, pannelli). Le impostazioni di PartCraft esistono solo nell'app: si modificano qui, e questo browser le ricorda. {{ui:Reimposta impostazioni di PartCraft}} riporta tutto allo stato iniziale.

## Ruotare la vista

- **Pulsante sinistro** (predefinito): trascinare con il pulsante sinistro per ruotare la parte; trascinare con il pulsante destro o centrale per spostare la vista.
- **Pulsante centrale**: premere la rotella e trascinare per ruotare la parte; tenere premuto {{key:Shift}} (oppure {{key:Ctrl}}, oppure ⌘) con il pulsante centrale, oppure trascinare con il pulsante destro, per spostare la vista. Il pulsante sinistro seleziona solo facce, spigoli e piani, quindi un clic che si muove un po' non ruota mai la parte. Molti programmi CAD funzionano così.

La rotella fa zoom verso il puntatore in entrambi i casi. In uno schizzo, i pulsanti destro e centrale spostano la vista come prima.

## Scorrimento: rotella del mouse o trackpad

- **Determina automaticamente** (predefinito): PartCraft osserva lo scorrimento. Lo scorrimento laterale o a passo fine, come quello inviato da un trackpad, ruota la parte; gli scatti interi della rotella fanno zoom.
- **Rotella del mouse**: lo scorrimento fa sempre zoom verso il puntatore.
- **Trackpad**: scorrere con due dita per ruotare la parte, tenere premuto {{key:Shift}} e scorrere per spostare la vista, usare il gesto di pizzico per lo zoom. In uno schizzo, lo scorrimento a due dita sposta lo schizzo.

Il gesto di pizzico fa zoom in ogni scelta. Se "Determina automaticamente" sbaglia con il mouse o il trackpad in uso, scegliere quello che si ha. Maggiori informazioni in [Trackpad, tocco e schermi piccoli](topic:trackpad-and-touch).

## Schizzare: aggiungere relazioni mentre si disegna

**Aggiungi relazioni mentre disegni** (attiva all'inizio): un clic che si aggancia a un punto rende il nuovo punto coincidente con esso, un clic su una curva porta il punto su quella curva, e una linea disegnata quasi orizzontale o verticale diventa orizzontale o verticale. Vedi [Relazioni e quote](topic:relations-dimensions).

Disattivarla quando si vuole collocare geometrie vicino ad altre senza collegarle. Il puntatore si aggancia ancora a punti e curve, ma nulla viene unito: le linee disegnate in catena non condividono le estremità, quindi un trascinamento può separarle. Aggiungere dal pannello di destra le relazioni desiderate. Un profilo chiuso viene comunque estruso quando le sue estremità si incontrano.

:::note
L'impostazione cambia solo ciò che il nuovo disegno aggiunge. Le relazioni già presenti in uno schizzo restano, e lo strumento Raccordo continua a creare il suo arco tangente e il suo raggio.
:::

## Schizzare: quotare mentre si disegna

**Quota mentre disegni** (attiva all'inizio): mentre si disegna una linea, un rettangolo, un cerchio o un arco, digitare un numero riempie la casella della dimensione accanto al puntatore ({{key:Tab}} passa alla casella successiva) e {{key:Enter}} disegna la forma con quella dimensione, con una quota guida per ogni dimensione digitata. Disattivata: digitare un numero mentre si disegna non fa nulla, e le forme si disegnano solo con i clic. Vedi [Digitare la dimensione mentre si disegna](topic:sketch-basics#type-the-size-as-you-draw).

## Indicatore d'angolo

Cosa compare nell'angolo della vista 3D: **Cubo di navigazione** (predefinito; in alto a destra: fare clic su una faccia, uno spigolo o un vertice per guardare da lì, trascinarlo per orbitare, trascinare il suo anello della bussola per ruotare il modello), **Icona assi** (un piccolo marcatore X, Y, Z in basso a sinistra che ruota con la vista: X rosso, Y verde, Z blu) oppure **Nessuno**. Nessuno dei due compare mentre si disegna uno schizzo o sul foglio di disegno. Vedi [Il cubo di navigazione](topic:view-cube).

## Thread del solutore

Quanti thread possono usare i solutori di simulazione. **Automatico** (predefinito) ne usa uno in meno dei processori logici del computer (al massimo 16), così la pagina resta reattiva mentre uno studio si risolve; oppure si sceglie un numero. Gli studi con grandi voxel, l'instabilità, la tensione nel tempo e il flusso si risolvono più in fretta su più thread (circa 2× con 4 thread per 80,000 cubi nelle nostre misure, di più su un computer inattivo); i modelli sotto circa 20,000 incognite restano su un thread, perché avviare i thread costa più di quanto fanno risparmiare. Una risoluzione con più thread dà la stessa risposta di un thread (a meno di arrotondamenti: le somme sono eseguite in un ordine diverso). I risultati di ogni studio elencano **N thread** oppure **1 thread**, con il motivo, sotto **Solutore**.

I thread richiedono che la pagina sia **isolata cross-origin** (il browser lascia condividere la memoria ai worker solo in questo caso). La pagina del laboratorio lo è; dove non lo è, l'impostazione lo dice ("This page is not cross-origin isolated...", ossia: questa pagina non è isolata cross-origin, quindi i solutori usano un solo thread qualunque sia la scelta) e ogni risoluzione usa un solo thread. Tutto il resto funziona allo stesso modo, e le risposte sono le stesse.

Anche gli studi di flusso laminare usano i thread (circa 2.5× con 4 thread per 54,000 celle fluide, stessa risposta fino all'ultima cifra). Il solutore a tetraedri quadratici e il trasferimento di calore girano su un thread: la prova con i thread è risultata più lenta sul nostro computer di test (i loro solutori sono limitati dalla velocità della memoria e da un passaggio che non può essere suddiviso).

### Sul proprio server web

Se PartCraft viene eseguito da un proprio server web, funziona così com'è servito. Per i thread del solutore, il server deve inviare due intestazioni con la pagina di PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Su Apache, nel file `.htaccess` della cartella (richiede mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Su nginx, nel blocco `location` che serve PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Ricaricare la pagina: Impostazioni › Thread del solutore propone poi **Automatico** con il numero di processori del computer. La seconda intestazione fa rifiutare al browser qualsiasi risorsa che la pagina carichi da un altro sito che non lo consenta; per PartCraft da solo va bene, perché carica tutto dalla propria cartella.
