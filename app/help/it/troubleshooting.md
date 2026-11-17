---
title: Risoluzione dei problemi
summary: Problemi che possono presentarsi in PartCraft, dall'app che non si avvia alle funzioni che falliscono, dagli schizzi che non si risolvono ai file che non si aprono e ai giunti che si comportano male, con il messaggio che si vede e la soluzione.
keywords: problema, errore, guida, non funziona, fallisce, in errore, arresto, schermo vuoto, webgl, webassembly, kernel, non ancora implementato, sovradefinito, profilo aperto, impossibile aprire, non succede nulla, direzione sbagliata, lento
from: 7728542c
---

Quando qualcosa non funziona, leggere per prima cosa la **barra di stato** in basso: PartCraft spiega lì perché ha rifiutato un'operazione o cosa si aspetta dopo. Una funzione in errore mostra anche il suo messaggio in cima al pannello di destra e quando si passa il puntatore sulla sua riga nella cronologia.

## L'app non si avvia

### "Questo browser non può mostrare il 3D (WebGL è disattivato o mancante), quindi PartCraft non può funzionare qui."

**Causa:** nel browser la grafica 3D (WebGL) è disattivata, bloccata o non supportata dal driver grafico.

**Soluzione:**

:::chromium
Aprire `chrome://settings/system` (oppure `edge://settings/system` in Edge) e attivare "Usa accelerazione grafica quando disponibile", poi riavviare il browser. Se è già attiva, controllare `chrome://gpu` per lo stato di WebGL e aggiornare il driver grafico.
:::

:::firefox
Aprire `about:support` e controllare Grafica, WebGL. Se è bloccato, aggiornare il driver grafico. In `about:config`, `webgl.disabled` deve essere `false`.
:::

:::safari
WebGL è sempre attivo nelle versioni attuali di Safari. Aggiornare macOS (Safari si aggiorna con esso). Se il problema persiste, provare Chrome o Firefox sullo stesso Mac per escludere l'hardware grafico.
:::

I desktop remoti e alcune macchine virtuali non hanno WebGL. Provare sul computer stesso.

### "Il kernel solido non è stato caricato: …"

**Causa:** il kernel geometrico (un programma WebAssembly) non è stato scaricato o avviato. Di solito la connessione è caduta mentre l'app si caricava, WebAssembly è disattivato da una politica aziendale o da un'impostazione di sicurezza del browser, oppure il browser è molto vecchio.

**Soluzione:** ricaricare la pagina con la connessione attiva. Se continua a fallire, provare un altro browser attuale. In Firefox, `javascript.options.wasm` in `about:config` deve essere `true`. Offline, l'app e il suo kernel si caricano solo se la barra dell'app indicava **Pronto offline** prima che la connessione cadesse ({{ui:Salva per l'uso offline}} mentre si è online; vedi [Lavorare offline](common:offline)).

### Il pulsante offline dice "Impossibile salvare" o "Offline non disponibile"

**Impossibile salvare**: alcuni file non sono stati scaricati. Fare clic per riprovare con la connessione attiva; una connessione lenta o a consumo può richiedere un secondo tentativo. **Offline non disponibile**: questa finestra del browser non può conservare una copia offline (le finestre private e alcuni computer gestiti lo bloccano). Usare una finestra normale, oppure tenere aperta la scheda.

### PartCraft è offline ma non aggiornato

Fare clic su **Pronto offline** con la connessione attiva e scegliere {{ui:Salva di nuovo (scarica la versione più recente)}}.

### "Sweep: non ancora implementato. Richiede un kernel esatto, …"

Il messaggio completo è "<Nome>: non ancora implementato. Richiede un kernel esatto, che questa versione di PartCraft non ha. Guida › Cosa non è ancora implementato spiega cosa fare al suo posto." Compare quando si sceglie Sweep, Loft, Nervatura, una flangia di lamiera, una funzione di superficie, Combina, Sposta corpo, Scala corpo o Serie lungo percorso, e per le altre cose che richiedono solo un kernel esatto. Non c'è nulla di sbagliato nel browser o nella parte: questa versione di PartCraft costruisce ogni parte con il kernel a mesh. Vedi [Cosa non è ancora implementato](topic:not-built-yet) per cosa fare al suo posto, e [Il kernel a mesh](topic:solid-kernels).

### "Caricamento del kernel solido…" non scompare mai

Attendere un po' con una connessione lenta: il kernel e la libreria 3D vengono scaricati la prima volta. Poi ricaricare. Se la pagina stessa mostra un errore, vedi sopra.

## Non succede nulla quando premo un tasto

- I tasti non funzionano mentre il cursore è in una casella di un pannello. Fare clic nella vista 3D oppure premere {{key:Esc}} dopo aver digitato (oppure {{key:Tab}} per uscire).
- I tasti freccia e {{key:Plus}}/{{key:Minus}} ruotano e zoomano la vista solo dopo aver fatto clic nella vista.
- È aperta una finestra di dialogo: rispondere prima a quella.
- In uno schizzo, {{key:F}} è lo strumento Raccordo, non Adatta. Usare il pulsante {{ui:Adatta}}.

## Un pulsante della barra degli strumenti è grigio

- I pulsanti delle funzioni sono grigi mentre è aperto uno schizzo. Chiudere prima lo schizzo.
- Gli strumenti di schizzo funzionano solo dentro uno schizzo.
- {{ui:Annulla}} e {{ui:Ripristina}} sono grigi quando non c'è nulla da annullare o ripristinare.
- {{ui:Assieme}} richiede una parte con un solido. {{ui:Giunto}} richiede due parti nell'assieme. {{ui:Modifica parte}} richiede una parte selezionata.
- {{ui:STEP AP242 (solido esatto)}} e {{ui:STEP AP214 (solido esatto)}} sono grigi in un assieme: esportare ogni parte. Se un altro programma rifiuta il file esatto, provare {{ui:STEP AP214 (solido esatto)}}, poi {{ui:STEP (a facce, kernel a mesh)}}, e segnalarlo tramite {{ui:Guida}} › {{ui:Segnala un problema}}.
- {{ui:Sweep}}, {{ui:Loft}} e le altre funzioni che richiedono un kernel esatto non sono grigie: restano selezionabili, i loro suggerimenti terminano con "non ancora implementato (richiede un kernel esatto)", e fare clic su una di esse lo segnala nella barra di stato. Vedi [Cosa non è ancora implementato](topic:not-built-yet).
- {{ui:Disegno}} richiede una parte con un solido, ed è grigio mentre uno schizzo è aperto.
- Le voci di {{ui:Esporta}} sono grigie in un assieme: gli assiemi non possono ancora essere esportati. Chiudere l'assieme, oppure modificare una parte, per esportare.

## Problemi di schizzo

### Lo schizzo non permette di aggiungere una relazione

"Nessuna relazione si adatta a questa selezione. Selezionare uno o due elementi (Shift+clic aggiunge)." La relazione richiede una selezione diversa. Vedi [Relazioni e quote dello schizzo](topic:sketch-relations) per ciò che richiede ciascuna.

### "Sovradefinito: … non possono essere tutti soddisfatti. Annulla, oppure elimina uno di essi."

**Causa:** la nuova relazione o quota contraddice quelle già presenti. Lo schizzo non si è spostato.

**Soluzione:** {{key:Mod+Z}}, oppure eliminare uno degli elementi rossi nell'elenco del pannello di destra (scegliere **Elimina** accanto ad esso).

### "Sovradefinito: … è già implicito. Eliminarlo."

**Causa:** la relazione non aggiunge nulla: altre la impongono già (per esempio Parallelo su due lati di un rettangolo, oppure una quota già fissata). In questa build non ci sono quote guidate.

**Soluzione:** eliminarla. La funzione viene costruita comunque, con un avviso.

### "Questi elementi non possono essere quotati insieme."

Sono stati selezionati, per esempio, un punto e un cerchio. Quotare invece il punto centrale del cerchio.

### "Un raccordo richiede un angolo in cui si incontrano esattamente due linee." / "Quel raggio è troppo grande per queste linee."

Fare clic esattamente sul punto d'angolo di due linee solide. Usare un raggio più piccolo di quanto consenta la linea più corta.

### La geometria torna indietro quando la trascino

Il trascinamento spezzerebbe una relazione o una quota, quindi PartCraft la riporta indietro. Solo la geometria blu (sottodefinita) può muoversi.

### "Questo schizzo non può aprirsi: richiede Extrude2, che è in errore."

Lo schizzo si trova su una faccia di una funzione non ancora implementata. Correggere prima quella funzione, oppure ripristinarla, oppure avanzare nella cronologia.

## Problemi delle funzioni

| Messaggio | Causa | Soluzione |
|---|---|---|
| "Creare prima uno schizzo: scegliere un piano, Schizzo, disegnare un profilo chiuso, Esci." | Nessuno schizzo non usato con curve, e nessuno selezionato | Disegnare uno schizzo, oppure selezionare lo schizzo da usare nella cronologia |
| "Lo schizzo non ha un profilo chiuso da estrudere." (oppure "da rivoluzionare") | Nessun anello chiuso di linee solide | Chiudere le lacune; riportare le linee di costruzione a normali con {{key:Q}} |
| "Il profilo è aperto: un'estremità in (x, y) non è unita a nulla." | Una lacuna in quel punto | Aprire lo schizzo, trascinare l'estremità sul suo vicino in modo che si agganci |
| "Il profilo si ramifica in (x, y): più di due estremità si incontrano lì." | Tre o più linee si incontrano in un punto | Eliminare la linea in più, oppure trasformarla in linea di costruzione |
| "Un anello chiuso richiede almeno tre lati o una curva." | Due linee avanti e indietro | Ridisegnare l'anello |
| "Attraverso tutto è per i tagli. Usare una profondità per una sporgenza." | Una sporgenza impostata su Attraverso tutto | Impostare **Fine** su **Cieco** oppure **Piano medio** |
| "Non c'è nulla da tagliare su quel lato dello schizzo. Provare l'altra direzione." | Il taglio punta lontano dal materiale | Spuntare **Inverti direzione** |
| "Non c'è ancora nulla da tagliare." / "Non c'è ancora nulla da forare." | Nessun solido prima di questa funzione | Creare prima una sporgenza, oppure spostare la funzione più in basso |
| "Disegnare una linea di mezzeria (una linea di costruzione) nello schizzo attorno a cui rivoluzionare." | Rivoluzione senza asse | Aggiungere una linea di mezzeria, oppure scegliere una linea in **Asse** |
| "Il profilo attraversa l'asse. Tenerlo da un lato della mezzeria." | Profilo su entrambi i lati dell'asse | Ridisegnare metà profilo |
| "Mettere punti di schizzo dove vanno i fori (strumento Punto), poi creare il foro." | Nessun punto libero nello schizzo | Aggiungere punti con {{key:P}} |
| "L'alesatura deve essere più larga del foro." | Ø dell'alesatura non maggiore del Diametro | Rendere l'alesatura più larga |
| "L'alesatura deve essere meno profonda del foro." | Alesatura più profonda di un foro cieco | Renderla meno profonda, oppure il foro più profondo |
| "Scegliere le funzioni da copiare." | Una serie o una simmetria senza nulla spuntato | Spuntare una funzione in **Funzioni da copiare** |
| "Extrude2 non ha un solido da copiare." | La funzione copiata è in errore o disattivata | Correggerla o ripristinarla |
| "Richiede Sketch3, che è in errore." | Una funzione da cui dipende non è implementata | Correggere la funzione indicata |
| "La faccia su cui si trova non esiste più (Extrude1 non è implementata)." | La faccia dello schizzo non esiste più | Correggere quella funzione, oppure eliminare lo schizzo e ridisegnarlo |
| "Dopo questa operazione non resta nulla della parte." | Un taglio ha rimosso tutto il materiale | Controllare dimensione e direzione del taglio |
| "Il kernel solido non è riuscito a costruire questo (…)." oppure "Il kernel solido non è riuscito a combinare questo con il corpo." | Il kernel ha rifiutato la geometria | Annulla, oppure cambiare leggermente le dimensioni; facce che si toccano esattamente possono causarlo |
| "Sweep: non ancora implementato. Richiede un kernel esatto, che questa versione di PartCraft non ha." (anche Loft, Nervatura e le altre) | Una funzione creata in una build precedente che solo un kernel esatto può costruire. Resta nella cronologia e viene salvata invariata | Sopprimerla o eliminarla; vedi [Cosa non è ancora implementato](topic:not-built-yet) per cosa fare al suo posto |
| "Un raccordo di 5 mm non sta qui (…)." / "Uno smusso di 2 mm …" | La dimensione è troppo grande per una faccia accanto allo spigolo, oppure l'angolo non può essere raccordato | Dimensione più piccola, oppure meno spigoli per funzione |
| "Raccordo: in questa versione solo spigoli rettilinei tra due facce piane (il kernel a mesh li crea). Raccordare o smussare gli spigoli curvi nello schizzo." (anche Smusso) | Uno spigolo selezionato è arrotondato, come il bordo di un foro, oppure giace su una faccia curva | {{ui:Scegli spigoli}} e rimuoverlo; raccordare o smussare invece quell'angolo nello schizzo |
| "Un raccordo il cui raggio cambia lungo lo spigolo: non ancora implementato (richiede un kernel esatto). Assegnargli un solo raggio." | È spuntato **Raggio variabile** | Togliere la spunta e assegnare un solo raggio |
| "Raccordo con il kernel a mesh: dove si incontrano spigoli raccordati, vengono raccordati a unghia, non fusi." (⚠, un avviso) | Gli spigoli selezionati si incontrano in un angolo; i raccordi si incontrano lì in una piega netta | Nulla da correggere: la parte è costruita. Raccordare meno spigoli se la piega conta |
| "Uno spigolo che raccorda non esiste più: lo spigolo tra Extrude1 e Cut2." | Una modifica precedente ha rimosso lo spigolo | {{ui:Scegli spigoli}}, rimuovere lo spigolo rosso, selezionare quello nuovo |
| "Selezionare gli spigoli nella vista, poi aggiungerli." | Il raccordo o lo smusso non ha spigoli | {{ui:Scegli spigoli}} |
| "Selezionare le facce da rimuovere (aperte), poi svuotare." | Lo svuotamento non ha facce aperte | {{ui:Scegli facce}} |
| "Lo svuotamento non può essere creato con questo spessore (…)." | La parete è più spessa di una parte sottile del modello o di un raggio di raccordo | Una parete più sottile, oppure raccordi più grandi |
| "Svuota: in questa versione apre solo facce piane (il kernel a mesh lo crea)." | Una faccia aperta è curva | {{ui:Scegli facce}} e rimuoverla; aprire solo facce piane |
| "Sformo: in questa versione solo facce piane (il kernel a mesh le crea)." | Una faccia sformata è un cilindro, un cono o una faccia a superficie libera | Rimuoverla; sformare solo facce piane |
| "Una faccia che apre non esiste più (…)." | Una modifica precedente ha rimosso la faccia | {{ui:Scegli facce}} di nuovo |
| "Raccordo1 modifica gli spigoli o le pareti del corpo; non può essere copiato. …" | Una serie o una simmetria copia un raccordo, uno smusso o uno svuotamento | Togliere la spunta; creare prima le serie dei tagli, poi il raccordo |
| "Si trova su una faccia che solo un kernel esatto può trovare: non ancora implementato in questa versione." | Uno schizzo su una faccia che il kernel a mesh non trova, come una creata in una build precedente | Disegnare lo schizzo su un piano base o su una faccia piana di un'estrusione, e posizionarlo con quote |
| "Usa una faccia o uno spigolo del solido, che solo un kernel esatto può trovare: non ancora implementato in questa versione." | Un piano, un asse o un punto di riferimento su una faccia o uno spigolo del solido | Crearlo a partire dai piani base, dai punti di schizzo o dalle coordinate |
| "Estrusione fino a una faccia, alla faccia successiva o a un vertice: non ancora implementato (richiede un kernel esatto)." / "Una conicità: non ancora implementata (richiede un kernel esatto)." | Una condizione di fine o una conicità che solo un kernel esatto costruisce | Usare una profondità cieca o a piano medio che si misura; lasciare **Conicità** a 0 |

## Problemi di selezione

- "Questa faccia è curva. Selezionare una faccia piana o un piano su cui disegnare lo schizzo." Gli schizzi richiedono una faccia piana. Disegnare lo schizzo su un piano base e posizionarlo con quote.
- Una faccia dice "Fissa dove selezionata": non è stata creata da uno spigolo di schizzo (per esempio una faccia di una copia di serie), quindi uno schizzo su di essa resta fermo quando la parte cambia.
- Gli spigoli sono difficili da colpire: ingrandire. Uno spigolo ha la precedenza sulla faccia accanto quando il puntatore è esattamente su di esso.

## Problemi con i file

| Messaggio | Soluzione |
|---|---|
| 'PartCraft apre i propri file .partcraft.json, le esportazioni dalla macro CadCraft per SolidWorks (.cadcraft-sw.json) e i file STEP. "bracket.igs" non è nessuno di questi.' | Sono riconosciuti solo questi file (e le mesh STL, OBJ e 3MF e i file `.3dm`) |
| '"part.stp" non è un file STEP (non inizia con ISO-10303-21).' | Il file non è testo STEP |
| "Quel file STEP è troppo grande (oltre 60 MB) per essere importato qui." | Semplificarlo alla fonte |
| "Quel file è troppo grande per essere una parte di PartCraft." sulla propria parte salvata | Un grande solido STEP importato in una build precedente ha reso il file della parte superiore a 50 MB. Usare una copia precedente senza di esso |
| "Quel file è troppo grande per essere una parte di PartCraft." | Il file supera 50 MB; non è un file di PartCraft |
| "Questo non è un file di PartCraft (non è JSON)." / "Questo non è un file di PartCraft." | Il file è danneggiato oppure appartiene a un altro programma |
| "Questo file è stato salvato da una versione più recente di PartCraft (versione del file …); questa legge la versione …" | Aprirlo nella versione più recente di PartCraft |
| "Extrude2: la profondità non è valida." (oppure un altro valore) | Il file è stato modificato a mano o danneggiato. Usare una copia precedente |
| Inserimento in un assieme dice "Part1.partcraft.json non ha un solido da inserire." | Il file della parte non ha un solido. Aprirlo, creare un solido, salvare e inserire di nuovo |

**Il file salvato non è dove mi aspettavo.** Il salvataggio è un download: cercare nella cartella dei download del browser, oppure aprire l'elenco dei download dalla barra degli strumenti del browser. Vedi [Dove finiscono i file](common:your-files).

**Ho aperto una parte ma l'assieme è ancora sullo schermo.** La parte è stata caricata dietro l'assieme. Scegliere {{ui:Chiudi}} per chiudere l'assieme e vedere la parte. Chiudere gli assiemi prima di aprire i file delle parti.

## Problemi di disegno

| Messaggio | Soluzione |
|---|---|
| "Costruire prima un solido, poi creare il suo disegno." | Costruire prima la parte |
| "Nessuno spazio sul foglio per: dettaglio. Rendere il dettaglio più piccolo oppure eliminare una vista." | **Raggio dettaglio** o **Scala dettaglio** più piccoli, oppure rimuovere la sezione |
| "Un dettaglio è preso dalla vista anteriore, superiore, destra o in sezione." | Fare clic su una di queste viste |
| "Fare clic su una delle viste." | Il clic è avvenuto su carta vuota |
| "Posizione richiede almeno un riferimento di datum." e altri messaggi del riquadro | Impostare i datum richiesti dal pannello, oppure scegliere un'altra caratteristica |
| "Non è stato possibile creare le viste del disegno: …" | Annullare l'ultima modifica. Se continua, salvare, ricaricare e riaprire la parte |

## Problemi di assieme

| Messaggio | Soluzione |
|---|---|
| "Costruire prima un solido, poi inserirlo in un assieme." | La parte non ha ancora un solido |
| "Inserire prima una seconda parte (Aggiungi copia, Inserisci, oppure Modifica › Duplica)." | Un giunto richiede due parti |
| "Selezionare una faccia su una parte diversa." | Le due facce di un giunto devono essere su parti diverse |
| "Questa faccia è curva. Selezionare una faccia piana …" | I giunti partono da facce piane. Poi usare **Centra su** per un foro o un asse di rivoluzione |
| "Bracket2 non è unito alla parte ancorata, quindi resta dove è stato posto." | Aggiungere un giunto da essa a una parte già posizionata |
| "Revolute3 chiude un anello che non può chiudersi: è fuori di 2.000 mm. Controllare le facce, gli offset e i limiti dei giunti dell'anello." | Le parti non possono incontrarsi tutte: controllare le lunghezze, le facce usate da ciascun giunto, gli offset (le parti impilate faccia contro faccia devono concordare in profondità) e i limiti; oppure rimuovere un giunto dell'anello |
| "La faccia usata da questo giunto non esiste più in Bracket." / "L'asse usato da questo giunto non esiste più in Bracket." | La parte è stata modificata. Rimuovere il giunto e ricrearlo |
| "L'asse corre lungo la faccia, quindi non può impostare il centro del giunto." | Scegliere un asse che attraversa la faccia, oppure "L'origine propria della faccia" |
| "Un assieme mantiene almeno una parte. Chiuderlo invece." | Usare {{ui:Chiudi}} |

**Le parti sono unite ma nel punto sbagliato.** Impostare **Centra su** per entrambi i lati del giunto sul foro o sugli assi di rivoluzione che devono allinearsi, poi regolare **Angolo (°)** e **Offset (mm)**.

## È lento

- Impostare **Curve** su Normale o Grossolana mentre si modella; passare a Fine prima di esportare.
- Le serie con molte copie (centinaia) richiedono tempo per essere ricostruite a ogni modifica. Sopprimere la serie mentre si lavora ad altre funzioni.
- Il controllo di interferenza e il controllo del movimento confrontano ogni coppia di parti; gli assiemi grandi richiedono più tempo.
- Chiudere altre schede pesanti. PartCraft usa il processore e la grafica del proprio computer.

## Ancora bloccato

Salvare prima il file ({{key:Mod+S}}), poi ricaricare la pagina e riaprirlo. Se una funzione continua a fallire, selezionarla, leggere il suo messaggio e provare {{key:Mod+Z}} per tornare all'ultimo stato corretto.
