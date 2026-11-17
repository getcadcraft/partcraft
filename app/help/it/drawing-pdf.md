---
title: Creare un disegno con viste, sezione e GD&T
summary: Aprire la tavola di disegno, aggiungere una sezione e una vista di dettaglio, posizionare riferimenti, riquadri di tolleranza e simboli di finitura superficiale, scegliere il formato della tavola, compilare il cartiglio e le revisioni, ed esportare la tavola in PDF.
keywords: tabella dei fori, grafico dei fori, posizioni dei fori, tag, disegno, disegno 2D, tavola, formato della tavola, a4, a3, a2, a1, a0, ansi, cartiglio, revisione, riquadro delle revisioni, numero del disegno, materiale, pdf, viste, ortogonale, terzo diedro, isometrica, vista in sezione, vista di dettaglio, gd&t, riferimento, riquadro di tolleranza, tolleranza, posizione, planarità, finitura superficiale, rugosità, stampa
from: 39e944c0
---

PartCraft crea una tavola di disegno dalla parte: viste frontale, dall'alto e da destra in proiezione del terzo diedro, una vista isometrica, quote d'ingombro e un cartiglio su una tavola dal formato da A4 ad A0, oppure ANSI da A a E. Si possono aggiungere inoltre una sezione, una vista di dettaglio e simboli GD&T. La tavola si aggiorna quando cambia la parte, e le sue impostazioni sono salvate nel file della parte.

## Aprire la tavola di disegno

1. Costruire la parte. (Se non c'è nulla di costruito: "Costruire prima un solido, poi creare il suo disegno.")
2. Scegliere {{ui:Drawing}} nella barra degli strumenti.

La vista 3D viene sostituita dalla tavola. La barra degli strumenti mostra {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}} e {{ui:Back}}, e il pannello destro è intestato **Disegno**. La barra di stato indica come sono state create le viste: "Disegno (le curve sono disegnate come faccette). Riferimento, Riquadro e Finitura posizionano GD&T su una vista; il pannello imposta una sezione e una vista di dettaglio." Le viste sono disegnate a partire dalle facce del kernel a mesh, quindi gli spigoli arrotondati sono brevi tratti rettilinei; per archi veri serve un kernel esatto, che questa versione non ha.

Per muoversi sulla tavola: far scorrere la rotella per ingrandire, trascinare con il pulsante destro o centrale per spostarsi, premere {{key:F}} per adattare la tavola. Con la tavola attiva, {{key:Plus}} e {{key:Minus}} ingrandiscono e riducono, e {{key:Shift}} con i tasti freccia sposta la vista.

Scegliere {{ui:Back}}, {{ui:Back to the model}} o premere {{key:Esc}} (con nulla selezionato e nessuno strumento attivo) per tornare al modello 3D.

## Cosa c'è sulla tavola

- **La tavola scelta**, in orizzontale (A3 salvo diversa scelta), con bordo e un **cartiglio**: titolo, azienda, numero del disegno, revisione, materiale, disegnato / controllato / approvato da, data, scala, formato della tavola, "Unità: millimetri · Proiezione del terzo diedro", e se le viste sono esatte o a faccette.
- Un **riquadro delle revisioni** nell'angolo in alto a destra, una volta aggiunta una revisione.
- **Viste frontale, dall'alto e da destra**: la vista dall'alto sopra la vista frontale, la vista da destra alla sua destra. Spigoli nascosti tratteggiati.
- Una **vista isometrica** dove c'è spazio.
- **Quote d'ingombro**: larghezza e altezza sulla vista frontale, profondità sulla vista dall'alto.
- Una **scala** unica per le viste principali dalla serie ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), scelta in modo che entrino nella tavola.

## Scegliere il formato della tavola

Sulla tavola di disegno, con nulla selezionato, scegliere {{ui:Sheet}} nel pannello destro: **A4, A3, A2, A1, A0** (ISO 216) oppure **ANSI A, B, C, D, E** (da 11 × 8.5 a 44 × 34 in). Le viste vengono ridisposte alla scala ISO più grande che entra, quindi un formato più grande può mostrare la parte più grande.

## Compilare il cartiglio

I campi **Cartiglio** del pannello destro vanno direttamente sulla tavola: {{ui:Title}}, {{ui:Drawing no.}}, {{ui:Revision}}, {{ui:Company}}, {{ui:Drawn by}}, {{ui:Checked by}}, {{ui:Approved by}}, {{ui:Date}} (anno-mese-giorno), {{ui:General tolerance}} e {{ui:Finish}} (gli ultimi due compaiono appena sopra il cartiglio). Digitare in un campo e premere {{key:Enter}} o cliccare altrove. Un campo vuoto lascia vuota la sua cella, tranne:

- **Title** mostra il nome della parte finché non se ne digita uno.
- **Date** mostra la data odierna finché non se ne digita una.
- **Revision** mostra la revisione più recente nell'elenco finché non se ne digita una.

**Materiale** deriva dalla parte: cliccare uno spazio vuoto del modello, poi scegliere {{ui:Material}} nel pannello Parte. Lo stesso materiale fornisce a Misura le densità per le proprietà di massa.

## Aggiungere revisioni

In **Revisioni**, cliccare {{ui:Add revision}}. Ogni nuova riga prende la lettera successiva (A, B, C …; dopo Z viene AA) e la data odierna. Digitare cosa è cambiato e chi ha effettuato la modifica. {{ui:Delete}} rimuove una riga. Il riquadro delle revisioni nell'angolo in alto a destra della tavola le elenca, dalla più vecchia, fino a 20.

Formato, cartiglio, revisioni e materiale sono salvati nel file della parte, e ogni modifica è un passo di {{ui:Undo}}.

## Aggiungere una vista in sezione

La parte viene tagliata da un piano e il taglio è tratteggiato. Come le altre viste, la sezione è disegnata a partire dalle facce, quindi gli spigoli arrotondati sono brevi tratti rettilinei.

1. Nel pannello destro, impostare **Sezione A-A** su **Dalla vista frontale**, **Dalla vista dall'alto** o **Dalla vista da destra**.
2. La sezione compare sulla tavola, tratteggiata dove il taglio attraversa il materiale, con la linea di taglio e le frecce "A" sulla vista da cui è presa.
3. Impostare **Taglio a (mm)** per spostare il piano di taglio. Parte dal centro della parte.

Impostare **Sezione A-A** su **Nessuna** per rimuoverla.

## Aggiungere una vista di dettaglio

1. Impostare **Dettaglio B** sulla vista da ingrandire (oppure scegliere {{ui:Detail}} nella barra degli strumenti).
2. Cliccare il centro dell'area da ingrandire, su quella vista. Un cerchio con la lettera "B" la indica, e il "Dettaglio B" ingrandito compare sulla tavola con una propria scala, per esempio "Dettaglio B (2:1)".
3. Impostare **Raggio del dettaglio (mm)** per la dimensione del cerchio e **Scala del dettaglio** per l'ingrandimento: 2, 4, 5 o 10 × la tavola.

Un dettaglio può essere preso dalla vista frontale, dall'alto, da destra o in sezione, non da quella isometrica. Se non c'è spazio per tutte le viste, il pannello indica "Spazio insufficiente sulla tavola per: dettaglio. Rendere più piccolo il dettaglio o eliminare una vista."

## Aggiungere una tabella dei fori

Una tabella dei fori elenca i fori della parte con le loro posizioni, per la foratura o il CNC: nel pannello scegliere **Tabella dei fori** › **Dalla vista dall'alto** (oppure frontale o da destra).

- Ogni foro visto di punta in quella vista riceve un tag accanto: **A1**, **A2** … per la prima dimensione, **B1** … per la successiva.
- La tabella elenca ogni tag, la sua **X** e la sua **Y** in millimetri, e la sua dimensione: "Ø14 PASSANTE", "Ø6.6 × 10 PROFONDO", un'alesatura o una svasatura, oppure la sigla di filettatura di un foro filettato.
- X e Y sono misurate dall'angolo in basso a sinistra del contorno della vista, indicato **X0 Y0** sulla tavola.
- I fori creati da serie sono inclusi. I fori non perpendicolari alla vista sono conteggiati nel pannello e lasciati fuori dalla tabella.

La tabella va in un'area libera della tavola e nel PDF.

## Posizionare simboli GD&T e di finitura superficiale

1. Scegliere {{ui:Datum}}, {{ui:Frame}} (un riquadro di tolleranza geometrica) oppure {{ui:Finish}} (un simbolo di finitura superficiale).
2. Cliccare il punto di una vista in cui agganciarlo. Si aggancia alla linea disegnata più vicina entro 2.5 mm.
3. Il simbolo compare con una linea di richiamo, selezionato, e il pannello destro mostra le sue impostazioni.

Trascinare un simbolo per spostarlo; la sua linea di richiamo resta sul punto. Con un simbolo selezionato, i tasti freccia lo spostano di 1 mm. {{key:Delete}} o {{key:Backspace}} (oppure {{ui:Delete}} nel pannello) lo rimuovono; {{ui:Done}} o {{key:Esc}} lo deselezionano. Ogni modifica è nell'elenco di annullamento.

### Riferimento

**Lettera**: da A a Z, senza I, O e Q (si leggono come 1, 0 e O). Ogni nuovo riferimento prende la lettera libera successiva.

### Riquadro di tolleranza geometrica

| Impostazione | Scelte |
|---|---|
| **Tolleranza** | Rettilineità, Planarità, Circolarità, Cilindricità, Profilo di una linea, Profilo di una superficie, Perpendicolarità, Inclinazione, Parallelismo, Posizione, Concentricità e Simmetria (entrambe eliminate in Y14.5-2018, e contrassegnate come tali), Oscillazione circolare, Oscillazione totale |
| **Zona (mm)** | Il valore di tolleranza, predefinito 0.1 |
| **Zona di diametro (⌀)** | Per caratteristiche con zona cilindrica; attiva di default per Posizione |
| **Materiale** | RFS (nessuno), MMC (Ⓜ), LMC (Ⓛ), dove la caratteristica lo consente |
| **Riferimento primario / secondario / terziario** | Fino a tre lettere di riferimento, ciascuna con un **modificatore …** (MMB, LMB) dove consentito |

PartCraft verifica il riquadro secondo le regole di ASME Y14.5 e indica l'errore in cima al pannello, per esempio "Planarità è una tolleranza di forma: non accetta riferimenti." oppure "Posizione richiede almeno un riferimento." La riga **Legge** descrive per esteso il riquadro.

### Finitura superficiale

| Impostazione | Scelte | Predefinito |
|---|---|---|
| **Ra (µm)** | Media della rugosità | 1.6 |
| **Processo** | qualsiasi processo, lavorato, senza asportazione di materiale | lavorato |
| **Nota** | Fino a 40 caratteri, come una direzione della tessitura o un processo | |

Con nulla selezionato, il pannello elenca le **Note sulla tavola**, ciascuna con **Seleziona**.

## Esportare il PDF

Scegliere {{ui:PDF}} nella barra degli strumenti, {{ui:Export PDF}} nel pannello, oppure {{ui:Export}}, poi {{ui:Drawing (PDF): views, section, detail, GD&T}} dal modello. Il PDF viene scaricato come `<nome parte> - drawing.pdf`, e la barra di stato elenca cosa contiene.

Stampare alle "Dimensioni effettive" su carta del formato della tavola per mantenere la scala reale.

## Limiti

| Non ancora implementato | Soluzione attuale |
|---|---|
| Quote diverse dalle tre quote d'ingombro | Aggiungerle sul PDF con un'app di annotazione, oppure esportare uno schizzo o una faccia come DXF e quotarlo in un programma CAD 2D |
| Più di una sezione o un dettaglio; viste interrotte, ausiliarie e proiettate | Non disponibile |
| Proiezione del primo diedro, viste mobili, tavole in verticale | Terzo diedro, disposizione automatica, orizzontale |
| Note libere e tabelle sulla tavola (diverse dal cartiglio e dal riquadro delle revisioni) | Usare la nota sulla finitura, oppure aggiungere testo nel PDF |
| Disegni di assiemi | Non disponibile |

I caratteri fuori dall'insieme dell'Europa occidentale appaiono come "?" (il PDF usa il carattere Helvetica integrato nel lettore). I simboli GD&T sono disegnati come linee, quindi si stampano in qualsiasi lettore.

## Lasciare fare alla tavola

- **Foglio › Automatico** sceglie la carta: la scala standard più grande fino a 1:1, sul formato A più piccolo che contiene le viste a quella scala (l'elenco mostra quale è stato scelto).
- **Quotare i fori** quota i fori sulla vista che ne vede la maggior parte di punta: un segno di centro su ciascuno, un'indicazione per ogni dimensione ("2× Ø6 PASSANTE" con una linea di richiamo), e le loro posizioni misurate dall'angolo in basso a sinistra della vista. Larghezza, altezza e profondità complessive sono sempre presenti.
