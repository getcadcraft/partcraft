---
title: Calore, sforzo termico e instabilità
summary: Trova le temperature di una parte da temperature fisse, flusso di calore, potenza termica, convezione e irraggiamento (in regime stazionario o nel tempo), applica a uno studio di sforzo un aumento di temperatura e trova il carico al quale una parte snella si instabilizza, con ciò che ciascun metodo può e non può dire.
keywords: termico, trasmissione del calore, calore, temperatura, conduzione, convezione, coefficiente di film, irraggiamento, emissività, flusso di calore, potenza termica, generazione di calore, dissipatore, transitorio, tempo, raffreddamento, riscaldamento, Crank-Nicolson, Eulero implicito, bilancio termico, sforzo termico, sforzo termico nel tempo, transitorio termico, tempra, shock termico, storia degli sforzi, tempo peggiore, dilatazione termica, coefficiente di dilatazione, instabilità, instabilità di Eulero, fattore di carico, carico critico, colonna, snello, autovalore
from: 1a1b7545
---

Questi studi si trovano nell'area di lavoro Simulazione, accanto a sforzo statico e frequenze naturali (vedi [Verificare sforzo e deformazione](topic:simulation)). Sceglierli nel campo **Tipo** del pannello. Usano la stessa mesh di piccoli cubi e lo stesso elenco di materiali; ogni materiale della libreria ha una conducibilità termica, un calore specifico e un coefficiente di dilatazione (valori tipici da manuale, mostrati in **Proprietà**).

## Termico: dove va il calore?

1. Scegliere **Termico (trasmissione del calore)** come **Tipo**.
2. Aggiungere condizioni termiche dall'elenco **Aggiungi** del pannello, poi fare clic sulle loro facce (come per vincoli e carichi):
   - **Temperatura fissa**: la faccia è mantenuta a una temperatura, in °C.
   - **Flusso di calore**: W/m² che entrano nella faccia (negativo esce). Agisce sull'area reale della faccia, anche dove i cubi formano una scala.
   - **Potenza termica**: un totale in watt, ripartito sulle facce selezionate in base all'area. Usarlo per un riscaldatore o un chip di potenza nota.
   - **Convezione**: aria o liquido a una temperatura porta via calore con h W/(m²·K). Valori tipici di h: aria ferma 5–10, ventola 25–100, acqua 500–10,000. PartCraft non calcola h: in questo studio non c'è flusso di fluido.
   - **Irraggiamento**: la faccia irradia verso l'ambiente a una temperatura, con emissività da 0 a 1. È **linearizzato** (l'irraggiamento è scritto come un coefficiente che dipende dalla temperatura e risolto di nuovo finché si stabilizza) e va solo verso l'ambiente: le facce non scambiano calore tra loro.
3. **Generazione di calore** (W/m³) riscalda l'intera parte dall'interno, per esempio una parte resistiva.
4. Premere **Risolvi**. La parte è colorata per temperatura; scegliere **Flusso di calore** in **Mostra** per vedere dove scorre il calore. Puntare la parte per leggere entrambi.

Un flusso di calore stazionario richiede un punto in cui il calore possa andare: almeno una temperatura fissa, convezione o irraggiamento. Una parte che riceve solo calore non ha stato stazionario; renderla transitoria.

La tabella elenca la temperatura minima e massima e dove si trovano, il massimo flusso di calore e il **bilancio termico**: il calore entrante o uscente da ciascuna condizione (una temperatura fissa conta quanto deve fornire o assorbire), il calore generato, i totali in entrata e in uscita e lo **sbilanciamento**. Lo sbilanciamento dovrebbe essere una piccola frazione del calore in entrata; uno grande significa che il risultato non è affidabile.

### Nel tempo (transitorio)

Spuntare **Transitorio** e indicare una **Temperatura iniziale** (tutta la parte parte da qui), un **Intervallo di tempo** e un numero di **Passi temporali**. **Eulero implicito** è robusto; **Crank–Nicolson** è più accurato con gli stessi passi, ma può oscillare dopo un cambiamento improvviso. Dopo la risoluzione, trascinare il cursore **Tempo** per vedere le temperature in ogni istante (la scala dei colori resta la stessa per ogni istante). Il bilancio termico include allora il calore accumulato.

## Sforzo termico: che cosa fa una variazione di temperatura alla parte?

In uno studio di **Sforzo statico** (o **Instabilità**), impostare **Carico termico**:

- **Variazione uniforme di temperatura**: l'intera parte si riscalda (o si raffredda, con un numero negativo) di quei kelvin.
- **Temperature da condizioni termiche**: aggiungere condizioni termiche allo stesso studio; le temperature stazionarie sono prima risolte sulla stessa mesh, poi la parte si dilata di α·(T − la **temperatura senza sforzi**).
- **Temperature nel tempo (esecuzione transitoria)**: aggiungere condizioni termiche, poi indicare una **Temperatura iniziale**, un **Intervallo di tempo**, **Passi temporali** e **Avanzamento temporale**, come per uno studio termico transitorio. Le temperature sono risolte nel tempo sulla stessa mesh (cubi o tetraedri), e una risoluzione statica sulle temperature di ogni istante fornisce lo sforzo di quell'istante. **Sforzo a**:
  - **Il tempo peggiore** (l'inizio): **Risoluzioni dello sforzo** calcola istanti distribuiti uniformemente lungo l'esecuzione, incluso l'inizio (21 salvo modifica, al massimo 51). I risultati si aprono sull'istante con lo sforzo di von Mises più alto; la tabella ne indica il nome, un piccolo grafico mostra il picco di sforzo nel tempo, e il cursore **Tempo** mostra lo sforzo in ogni istante risolto (la scala dei colori resta quella dell'istante peggiore).
  - **Un tempo scelto**: un solo istante, il passo temporale più vicino al **Tempo (s)** indicato. Uno studio di instabilità usa sempre un tempo scelto (la fine dell'esecuzione, salvo impostazione diversa).

Una parte temprata (immersa da calda in fredda) o riscaldata di colpo è sottoposta al massimo sforzo mentre l'interno e la superficie differiscono di più: spesso proprio all'inizio. Una temperatura imposta si applica dal primo istante, come un cambiamento improvviso, quindi lo sforzo nei primissimi istanti dipende dalla dimensione dell'elemento (solo pochi elementi vedono la variazione). Leggerlo come "molto alto", e guardare i successivi istanti del cursore per valori che la mesh risolve. Lo sforzo è quasi statico: nessuna inerzia, nessuna vibrazione dovuta al cambiamento improvviso.

Una parte libera di dilatarsi non ha sforzo termico: vincolarla quanto basta per impedirle di muoversi (per esempio tre facce senza attrito ad angolo retto). Se è trattenuta tra due pareti, viene compressa: una barra d'acciaio riscaldata di 50 K tra pareti rigide sopporta circa 117 MPa. I carichi termici si bilanciano da soli, quindi le reazioni si bilanciano ancora solo con i carichi meccanici.

## Instabilità: quando una parte snella cede?

1. Scegliere **Instabilità (lineare)** come **Tipo**, e aggiungere vincoli e carichi come per uno studio statico.
2. Impostare **Fattori di carico da trovare** (quanti modi di instabilità).
3. Premere **Risolvi**. Ogni modo ha un **fattore di carico**: il multiplo dei carichi al quale la parte ideale si instabilizza. Un fattore di carico di 3 significa tre volte i carichi; **un fattore di carico inferiore a 1 significa che si instabilizza sotto i carichi applicati**. La tabella riporta anche il carico totale a ciascun fattore. La forma del modo mostra come si instabilizza (la sua dimensione non significa nulla).

**L'instabilità lineare sovrastima il carico di instabilità reale.** Presuppone una parte perfetta: perfettamente diritta, senza sforzi residui ed elastica. Le parti reali hanno piccole imperfezioni e possono snervarsi per prime, e i gusci a parete sottile possono instabilizzarsi a una frazione del valore lineare. Usare un margine ampio, e considerare un fattore di carico vicino o inferiore a 3 per un guscio sottile come un avviso.

## Quanto fidarsi

PartCraft verifica questi risolutori con formule di calcolo: una barra tra due temperature (esatta), un'aletta di raffreddamento (entro 0.3 K), una piastra che si riscalda da sola (esatta), un cubo che si raffredda nel tempo (entro 0.1 % con Crank–Nicolson), una barra riscaldata di colpo a un'estremità, una barra libera riscaldata (nessuno sforzo, ΔL = αLΔT), una barra trattenuta tra pareti (σ = −EαΔT), una piastra temprata nel tempo rispetto alla classica soluzione in serie (entro 1 % sui cubi, 2.1 % sui tetraedri al centro della piastra; 0.5 % in superficie), l'ultimo istante di una lunga esecuzione rispetto allo sforzo termico stazionario (uguali a un milionesimo), e colonne di Eulero (entro 1 % vincolata–libera, 1.5 % cerniera–cerniera). Tenere presente:

- **Valori del materiale costanti.** Conducibilità, calore specifico e dilatazione non cambiano con la temperatura qui; a qualche centinaio di gradi possono variare del 10–30 %. Anche la rigidezza non cambia.
- **Lo sforzo nel tempo è quasi statico ed elastico**: ogni istante è una risoluzione statica (senza inerzia) e senza snervamento, quindi una tempra che snerverebbe la superficie mostra invece uno sforzo superiore allo snervamento.
- **I coefficienti di convezione sono un dato in ingresso**, non calcolati da un flusso d'aria o d'acqua.
- **Nessuna resistenza di contatto**: la parte è un solo solido.
- **Solo instabilità lineare**: nessuna imperfezione, nessuno snervamento, nessun comportamento dopo l'instabilizzazione.
- La scala dei cubi e gli spigoli interni vivi influiscono sugli sforzi termici allo stesso modo degli altri sforzi (vedi [Verificare sforzo e deformazione](topic:simulation)).
- Questa è una build di laboratorio: verificare le parti importanti con un altro metodo.

## Correlati

- [Verificare sforzo e deformazione (Simulazione)](topic:simulation)
- [Cosa non è ancora implementato](topic:not-built-yet)
