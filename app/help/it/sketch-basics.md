---
title: Disegnare il primo schizzo
summary: Aprire uno schizzo su un piano o su una faccia piana, disegnare linee, rettangoli, cerchi, archi, punti e linee di mezzeria, raccordare un angolo, selezionare, trascinare ed eliminare.
keywords: schizzo, disegno, linea, rettangolo, cerchio, arco, punto, linea di mezzeria, costruzione, raccordo, raccordo di schizzo, arrotondare angolo, snap, seleziona, finestra, trascina, profilo
from: 28be7436
---

Ogni solido inizia come uno schizzo: un disegno piano su un piano. Questa guida illustra gli strumenti di disegno. Vincolare lo schizzo con relazioni e quote è descritto in [Definire completamente uno schizzo](topic:relations-dimensions).

## Avviare uno schizzo

Si può disegnare su un piano di base o su una qualsiasi faccia piana del pezzo.

1. Scegliere dove disegnare:
   - un piano di base: fare clic su **Piano anteriore**, **Piano superiore** o **Piano destro** nella cronologia, oppure fare clic sul piano nella vista;
   - una faccia piana: fare clic sulla faccia nella vista. L'intera faccia viene evidenziata.
2. Scegliere {{ui:Schizzo}} nella barra degli strumenti oppure premere {{key:S}}. (Con una faccia selezionata si può anche scegliere {{ui:Schizzo su questa faccia}} nel pannello di destra; con un piano, {{ui:Schizzo su di esso}}.)

La vista si dispone perpendicolare al piano, compaiono gli strumenti di schizzo nella barra degli strumenti e lo strumento Linea è pronto. Se si preme {{ui:Schizzo}} senza aver selezionato nulla, vengono mostrati i piani di base e la barra di stato indica: "Fare clic su un piano o su una faccia piana su cui disegnare. Esc interrompe."

:::note
Una faccia curva non può ospitare uno schizzo: "Questa faccia è curva. Selezionare una faccia piana o un piano su cui disegnare."
:::

**Uno schizzo su una faccia segue la faccia.** Se la faccia è stata creata da uno spigolo di uno schizzo o dalla fine di un'estrusione, il nuovo schizzo si sposta quando la feature cambia (una tasca più profonda porta con sé lo schizzo sul suo fondo). Se il pannello indica che la faccia è "Fissa dove selezionata", lo schizzo resta dove si trova ora la faccia.

## Gli strumenti di disegno

Ogni strumento ha un pulsante nella barra degli strumenti e un tasto. Scegliere di nuovo lo stesso pulsante, premere {{key:S}} oppure premere {{key:Esc}} per tornare a Seleziona.

| Strumento | Tasto | Come disegnare |
|---|---|---|
| {{ui:Linea}} | {{key:L}} | Fare clic sul punto iniziale, poi fare clic su ogni punto successivo. Le linee si concatenano una dopo l'altra. Terminare la catena con {{key:Esc}}, {{key:Enter}} (Invio), un clic con il pulsante destro o un doppio clic. Fare clic su un punto esistente la termina |
| {{ui:Rettangolo}} | {{key:R}} | Fare clic su un angolo, poi sull'angolo opposto. Si ottengono quattro linee unite agli angoli, due orizzontali e due verticali |
| {{ui:Cerchio}} | {{key:C}} | Fare clic sul centro, poi su un punto della circonferenza |
| {{ui:Arco}} | {{key:A}} | Fare clic sul centro, poi sul punto iniziale, poi sul punto finale. L'arco segue il verso con cui si muove il puntatore intorno al centro |
| {{ui:Punto}} | {{key:P}} | Fare clic. Un punto isolato indica il centro di un foro per {{ui:Foro}} |
| {{ui:Linea di mezzeria}} | {{key:N}} | Come una linea, un segmento alla volta. Viene disegnata tratteggiata; è una geometria di costruzione, usata come asse di rivoluzione o come riferimento |
| {{ui:Raccordo}} | {{key:F}} | Fare clic su un angolo in cui si incontrano due linee, digitare il raggio, premere {{key:Enter}} (Invio) |
| {{ui:Spline}} | {{key:B}} | Fare clic sui punti attraverso cui passa la curva; {{key:Enter}} (Invio) termina, un clic sul primo punto la chiude. Vedere [Spline, rifila, offset e altri strumenti di schizzo](topic:sketch-tools) |
| {{ui:Rifila}} | {{key:T}} | Fare clic sul tratto di curva da rimuovere, fino agli incroci più vicini |
| {{ui:Quota}} | {{key:D}} | Vedere [Definire completamente uno schizzo](topic:relations-dimensions) |

Durante il disegno, una piccola casella accanto al puntatore mostra la lunghezza, la dimensione, il diametro o il raggio.

### Digitare la dimensione mentre si disegna

Dopo il primo clic di una linea, di un rettangolo, di un cerchio o di un arco, si può digitare la dimensione invece di farla con il clic. Digitando un numero si apre la casella accanto al puntatore con quel numero:

| Strumento | Caselle ({{key:Tab}} passa alla successiva) | Cosa succede con {{key:Enter}} (Invio) |
|---|---|---|
| {{ui:Linea}}, {{ui:Linea di mezzeria}} | Lunghezza, poi Angolo (°) rispetto all'asse X dello schizzo | La linea viene disegnata di quella lunghezza, verso il puntatore oppure con l'angolo digitato; la catena prosegue dalla sua fine |
| {{ui:Rettangolo}} | Larghezza, poi Altezza | Il rettangolo viene disegnato dal primo angolo verso il puntatore; una dimensione non digitata viene presa dal puntatore |
| {{ui:Cerchio}} | Diametro | Il cerchio viene disegnato con quel diametro |
| {{ui:Arco}} | Raggio dopo il centro, poi Angolo dell'arco (°) dopo il punto iniziale | Il punto iniziale si trova a quella distanza dal centro; poi l'arco percorre quell'angolo, nel verso in cui si è mosso il puntatore |

Ogni dimensione digitata diventa una **quota guida** nello stesso passaggio, così lo schizzo esce già quotato: {{key:Mod+Z}} elimina la forma e le sue quote insieme. Fare clic invece di premere {{key:Enter}} (Invio) mantiene quanto digitato e prende il resto dal clic. {{key:Esc}} chiude la casella e torna al puntatore.

Per disattivare questa funzione, andare in {{ui:Impostazioni}} › {{ui:PartCraft}} › **Quota durante il disegno** se si vuole disegnare solo con i clic. Vedere [Impostazioni di PartCraft](topic:settings).

{{ui:Altro}}, alla fine degli strumenti di schizzo, contiene la spline a punti di controllo, Estendi, Offset, Specchio, Poligono, Asola, le serie di schizzo e Proietta spigolo: vedere [Spline, rifila, offset e altri strumenti di schizzo](topic:sketch-tools).

### Snap

Lo snap aggiunge relazioni automaticamente, così lo schizzo resta unito quando si sposta:

- Su un **punto finale o sull'origine** compare un piccolo quadrato. Il nuovo punto viene reso coincidente con esso.
- Su una **linea, un cerchio o un arco** compare una piccola croce. Il nuovo punto viene posto su quella curva.
- Una linea entro 3 gradi dall'orizzontale o dalla verticale si allinea e riceve una relazione orizzontale o verticale. L'etichetta mostra "H" o "V".

Per evitare lo snap, ingrandire la vista in modo da fare clic più lontano dal punto o dalla curva.

## Arrotondare un angolo

1. Premere {{key:F}} oppure scegliere {{ui:Raccordo}}.
2. Fare clic sul punto d'angolo in cui si incontrano due linee.
3. Si apre una casella con un raggio suggerito. Digitare il raggio e premere {{key:Enter}} (Invio).

Entrambe le linee vengono rifilate e unite da un arco tangente con una quota di raggio. Messaggi possibili: "Un raccordo richiede un angolo in cui si incontrano esattamente due linee." e "Questo raggio è troppo grande per queste linee."

:::tip
Un raccordo di schizzo arrotonda un angolo del profilo, quindi l'estrusione avrà spigoli verticali arrotondati. Per arrotondare gli spigoli del solido stesso (ad esempio gli spigoli superiori di una piastra), usare invece la feature {{ui:Raccordo}} sul pezzo: vedere [Arrotondare, smussare e svuotare](topic:fillet-chamfer-shell). Nello schizzo, il Raccordo della barra degli strumenti è lo strumento di schizzo; sul pezzo, è la feature.
:::

## Geometria di costruzione

Linee, cerchi e archi di costruzione sono tratteggiati e grigi. Guidano lo schizzo ma non fanno parte del profilo che viene estruso o fatto ruotare.

1. Selezionare le linee, i cerchi o gli archi.
2. Premere {{key:Q}} oppure scegliere {{ui:Costruzione}}. Premere di nuovo per riportarli allo stato normale.

## Selezionare, trascinare ed eliminare

Premere {{key:S}} (oppure {{key:Esc}} finché nessuno strumento è attivo) per Seleziona.

- Fare clic su un punto, una linea, un cerchio, un arco, un simbolo di relazione o una quota per selezionarlo. {{key:Shift}}+clic aggiunge alla selezione o toglie. Su Windows e Linux {{key:Ctrl}}+clic fa lo stesso; su Mac, ⌘+clic.
- Trascinare su uno spazio vuoto per disegnare una finestra: viene selezionato tutto ciò che è completamente contenuto al suo interno.
- Trascinare un punto o una linea per spostarlo. Il risolutore mantiene ogni relazione e quota mentre si muove, quindi si sposta solo la geometria libera. Trascinare il bordo di un cerchio per cambiarne il raggio.
- Trascinare il numero di una quota per spostarne l'etichetta.
- Premere {{key:Delete}} oppure {{key:Backspace}}, oppure scegliere {{ui:Elimina}} nel pannello di destra, per eliminare la selezione. Eliminare una geometria elimina le relazioni che la riguardano.

## Zoom e panoramica nello schizzo

- Ruotare la rotella per ingrandire o rimpicciolire nel punto del puntatore.
- Trascinare con il pulsante centrale o destro per spostare la vista.
- {{ui:Adatta}} nella barra degli strumenti o nel pannello di destra adatta lo schizzo alla vista. Nello schizzo il tasto {{key:F}} è lo strumento Raccordo, non Adatta.

## Chiudere lo schizzo

Scegliere {{ui:Esci}} nella barra degli strumenti oppure {{ui:Esci dallo schizzo}} nel pannello di destra, oppure premere {{key:Esc}} finché lo schizzo non si chiude. Ogni {{key:Esc}} annulla prima ciò che è in corso, poi torna a Seleziona, poi cancella la selezione; il successivo chiude lo schizzo.

Lo schizzo resta selezionato, quindi la successiva {{ui:Estrudi}} o {{ui:Rivoluzione}} lo utilizzerà.

## Che cosa rende un buon profilo

{{ui:Estrudi}} e {{ui:Rivoluzione}} usano **ogni anello chiuso** delle linee, dei cerchi, degli archi e delle spline del solido dello schizzo (non di costruzione). Anelli dentro altri anelli diventano fori.

- Ogni estremità deve incontrare esattamente un'altra estremità. "Il profilo è aperto: un'estremità in (12.5, 40) non è unita a nulla." indica il punto.
- Nessun tre estremità possono incontrarsi in uno stesso punto: "Il profilo si ramifica in (0, 20): più di due estremità si incontrano lì."
- Punti e geometria di costruzione sono ignorati dal profilo.

Avanti: [Definire completamente uno schizzo con relazioni e quote](topic:relations-dimensions).

## Uno schizzo da una foto

**Feature › Altro › Schizzo da una foto…** (oppure il gruppo Schizzo nella barra multifunzione dell'albero delle feature) traccia l'immagine di un pezzo piano su un fondo semplice — il suo contorno e i suoi fori — oppure un disegno a penna, in uno schizzo di linee, archi e cerchi. Indicare una misura (la larghezza, l'altezza o il lato più lungo) perché lo schizzo abbia la dimensione giusta, verificare ciò che è stato trovato nell'anteprima e scegliere **Crea lo schizzo**; si può anche estruderlo, nello stesso passaggio di annullamento. Il tracciamento avviene su questo computer. I raggi d'angolo risultano entro circa il 5 %; i dettagli di uno o due pixel vanno persi; una foto scattata di traverso o con ombre sul pezzo non viene raddrizzata: fotografare il pezzo perpendicolarmente, con luce uniforme.
