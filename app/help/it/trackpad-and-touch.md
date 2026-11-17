---
title: Trackpad, tocco e schermi piccoli
summary: Come ruotare, spostare e zoomare con un trackpad di Mac o di un portatile, cosa funziona su uno schermo touch e cosa richiede ancora la tastiera, e come si riorganizza lo schermo su un telefono o su una finestra stretta.
keywords: trackpad, touchpad, magic mouse, mac, tocco, tablet, ipad, telefono, pizzicare, due dita, clic destro, clic secondario, gesti, schermo piccolo, mobile
from: 0e764fd8
---

PartCraft è pensato per un mouse con rotella e tasto centrale, ma un trackpad funziona bene una volta conosciuti i gesti, e uno schermo touch va bene per osservare le parti e per semplici schizzi.

## Trackpad

:::mac
| Per | Fare così |
|---|---|
| Ruotare la parte (3D) | Clic e trascinamento con un dito (oppure trascinamento con tre dita, se è attivato il trascinamento a tre dita) |
| Spostare (3D) | Tenere premuto {{key:Shift}} (oppure ⌘) e trascinare con clic, oppure trascinare con due dita premute (un trascinamento con clic secondario) |
| Ruotare la parte, con lo scorrimento | Scorrere con due dita; con {{key:Shift}}, lo scorrimento sposta la vista. Richiede **Scorrimento** impostato su "Riconosci automaticamente" (predefinito) o "Trackpad" |
| Zoom (3D e schizzo) | Pizzicare. Lo zoom va verso il puntatore. Con **Scorrimento** impostato su "Rotella del mouse", anche lo scorrimento a due dita fa zoom |
| Clic destro | Clic con due dita, oppure {{key:Ctrl}}+clic |
| Spostare in uno schizzo | Scorrere con due dita ("Riconosci automaticamente" o "Trackpad"), oppure trascinare con clic con due dita premute. {{key:Shift}}+trascinamento non sposta in uno schizzo (disegna una finestra di selezione) |
| Aggiungere alla selezione in uno schizzo | {{key:Shift}}+clic oppure ⌘+clic |

Attivare il clic secondario in **Impostazioni di Sistema**, **Trackpad**, **Punta e clic** se il clic con due dita non fa nulla.
:::

:::windows linux
| Per | Fare così |
|---|---|
| Ruotare la parte (3D) | Premere il touchpad (oppure toccare e tenere) e trascinare |
| Spostare (3D) | Tenere premuto {{key:Shift}} o {{key:Ctrl}} e trascinare, oppure trascinare con l'area del pulsante destro premuta |
| Ruotare la parte, con lo scorrimento | Scorrere con due dita; con {{key:Shift}}, lo scorrimento sposta la vista. Richiede **Scorrimento** impostato su "Riconosci automaticamente" (predefinito) o "Trackpad" |
| Zoom (3D e schizzo) | Pizzicare dove il touchpad lo supporta. Lo zoom va verso il puntatore. Con **Scorrimento** impostato su "Rotella del mouse", lo scorrimento a due dita fa zoom |
| Clic destro | Tocco con due dita, oppure l'angolo in basso a destra del touchpad |
| Spostare in uno schizzo | Scorrere con due dita ("Riconosci automaticamente" o "Trackpad"), oppure trascinare con l'area del pulsante destro premuta. {{key:Shift}}+trascinamento non sposta in uno schizzo |
| Aggiungere alla selezione in uno schizzo | {{key:Shift}}+clic oppure {{key:Ctrl}}+clic |
:::

**Scorrimento** è nelle [impostazioni di PartCraft](topic:settings): "Riconosci automaticamente" (predefinito) tratta lo scorrimento laterale o a passo fine come un trackpad, "Trackpad" lo fa sempre, "Rotella del mouse" mai. Il pizzico fa zoom in tutti e tre i casi.

I tasti freccia ruotano la vista 3D e {{key:Shift}} con le frecce la sposta, una volta fatto clic nella vista: utile su un trackpad. {{key:Plus}} e {{key:Minus}} fanno zoom.

## Schermi touch

PartCraft legge l'input touch, quindi tablet, portatili touch e telefoni funzionano, con dei limiti.

:::touch
**Tasti touch**

Appena si tocca lo schermo, nell'angolo in basso a destra della vista compare una piccola barra con i tasti che al dito mancano. Scompare quando si usa un mouse.

- {{ui:Esc}}: il tasto Esc. Annulla ciò che è stato avviato o torna indietro, esattamente come il tasto.
- {{ui:Aggiungi}} (in uno schizzo, con Seleziona): mentre è attivo, ogni tocco aggiunge un elemento alla selezione o lo toglie, come {{key:Shift}}+clic. Toccarlo di nuovo per tornare a un elemento alla volta.
- {{ui:Fine}} (mentre si disegna una catena di linee, una spline o un poligono): la completa, come un clic destro.

Tenere il dito fermo per circa mezzo secondo fa lo stesso con un solo tocco: con uno strumento di disegno completa ciò che si sta disegnando, e con Seleziona aggiunge alla selezione l'elemento sotto il dito oppure lo toglie. Punti e linee sono più facili da colpire con il dito: PartCraft cerca circa il doppio della distanza attorno a un tocco rispetto a un clic.

**Nella vista 3D**

- Un dito: ruota la parte.
- Due dita: pizzicare per zoomare, spostarle insieme per spostare la vista.
- Tocco: seleziona una faccia, uno spigolo o un piano. Non c'è evidenziazione al passaggio prima del tocco.

**In uno schizzo**

- Toccare con uno strumento di disegno per posare ogni punto: toccare l'inizio, poi la fine. L'aggancio avviene dove si solleva il dito.
- Due dita pizzicano e spostano. Posare un secondo dito annulla un trascinamento iniziato dal primo.
- Per terminare una catena di linee, toccare {{ui:Fine}}, tenere il dito fermo, oppure toccare di nuovo {{ui:Linea}} (o un altro strumento) nella barra degli strumenti.
- Con Seleziona, toccare per selezionare; trascinare un punto o una linea per spostarli; trascinare nello spazio vuoto per una finestra. Un secondo tocco sostituisce la selezione, a meno che {{ui:Aggiungi}} non sia attivo (oppure si tenga il dito fermo sul secondo elemento).
- Per modificare una quota, usare **Modifica** accanto ad essa nel pannello di destra.

**Il foglio del disegno**

Toccare per posare e selezionare i simboli, e trascinare un simbolo per spostarlo. Pizzicare per zoomare, spostare due dita per spostare la vista, oppure trascinare un dito sulla carta vuota. Un secondo dito ferma un simbolo che si stava trascinando, e torna indietro.

**Cosa richiede ancora la tastiera**

- Digitazione di numeri: la tastiera a schermo compare nei campi numerici e nelle quote.
- Scorciatoie da tastiera per gli strumenti: usare la barra degli strumenti.
:::

## Schermi piccoli e telefoni

- A 1280 pixel o più, la barra degli strumenti sta su una sola riga.
- Tra circa 760 e 1100 pixel, i pannelli laterali diventano più stretti.
- Sotto circa 760 pixel (un telefono, o una finestra stretta), lo schermo si impila: barra degli strumenti (scorrerla di lato per più pulsanti), la vista 3D, la barra di stato, poi il pannello delle proprietà e la cronologia. Scorrere la pagina per raggiungere i pannelli.
- I menu ({{ui:Esporta}}, {{ui:Viste}}) si aprono sull'intera larghezza dello schermo.

:::note
Su iPhone non esiste la modalità a schermo intero nel browser; {{key:Ctrl+Shift+F}} e il pulsante della modalità schermo passano solo tra la modalità normale e quella con le barre nascoste.
:::

Un telefono va bene per aprire una parte, ruotarla e verificarne i dati. La modellazione vera richiede uno schermo più grande e un mouse o un trackpad.

## Browser

Le versioni attuali di Chrome, Edge, Firefox e Safari eseguono PartCraft su Windows, macOS e Linux, e su tablet e telefoni, purché siano disponibili WebGL e WebAssembly. Vedi [Browser e computer](common:browsers).
