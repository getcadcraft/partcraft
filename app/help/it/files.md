---
title: File: apertura, salvataggio ed esportazione
summary: I file della parte e dell'assieme che PartCraft apre e salva, ogni formato di esportazione e ciò che mantiene, dove finiscono i file e che cosa cambia offline o tra browser diversi.
keywords: apri, salva, esporta, scarica, file, partcraft.json, file assieme, stl, 3mf, step, dxf, pdf, dove sono i miei file, offline, salva con nome
from: e5fbc7e3
---

PartCraft lavora su file del computer. Non carica mai una parte, e non sono previsti account né archiviazione cloud. Il salvataggio nel cloud non è ancora disponibile.

## Cosa apre PartCraft

| File | Estensione | Come |
|---|---|---|
| Una parte PartCraft | `.partcraft.json` | {{ui:Apri}}, {{key:Mod+O}}, oppure trascinarlo sulla vista 3D |
| Un assieme PartCraft | `.partcraft-asm.json` | Lo stesso: PartCraft riconosce il tipo |
| Un solido STEP | `.step`, `.stp` | Un corpo solido letto come triangoli: [Aprire un file STEP e costruirci sopra](topic:import-step) |

Le mesh STL, OBJ e 3MF si aprono anch'esse come corpi solidi ([Aprire un file STL, OBJ o 3MF](topic:open-meshes)), e così i file `.3dm` ([Aprire un modello .3dm](topic:open-3dm-files)). DXF, IGES e i file di parti di altri programmi non possono essere aperti (vedi [Cosa non è ancora implementato](topic:not-built-yet)).

Regole all'apertura:

- Il nome di un file di parte o di assieme deve terminare con `.json`, e il file deve essere più piccolo di 50 MB.
- I file vengono controllati prima di essere mostrati. Un file danneggiato o modificato viene rifiutato con un motivo chiaro, per esempio "Questo non è un file PartCraft."
- Un file salvato da una versione più recente di PartCraft viene rifiutato: "Questo file è stato salvato da una versione più recente di PartCraft (versione file 3); questa legge la versione 2." I file più vecchi si aprono.
- Se la parte a schermo ha modifiche non salvate, PartCraft lo chiede prima: {{ui:Annulla}}, {{ui:Scarta modifiche}} o {{ui:Salva prima}}.

## Salvataggio

{{ui:Salva}} o {{key:Mod+S}} salva ciò che è a schermo:

- Per una parte: `<part name>.partcraft.json`, la cronologia completa (schizzi, relazioni, quote, feature, posizione di ritorno indietro), la sezione, i dettagli e le note GD&T del foglio di disegno, e il testo completo di ogni solido STEP importato in una versione precedente. Le feature che questa versione non può costruire vengono salvate invariate. Il solido in sé non viene memorizzato: PartCraft lo ricostruisce dalla cronologia all'apertura del file.
- In un assieme: `<assembly name>.partcraft-asm.json`, con **ogni parte al suo interno**. Un solo file contiene l'intero assieme, quindi puoi inviarlo da solo.

Salvare è un **download**. Il browser mette il file nella sua cartella dei download, oppure chiede dove metterlo se è impostato così. Salvare di nuovo crea un nuovo download; il browser potrebbe chiamarlo `Part1 (1).partcraft.json` invece di sostituire il precedente. Rinomina o sposta i file in {{pick:mac=Finder|windows=Esplora file|linux=il gestore di file}} come preferisci.

I caratteri diversi da lettere, cifre, spazi, `_`, `.` e `-` nel nome della parte diventano `_` nel nome del file.

:::tip
La maggior parte dei browser ha un'impostazione per chiedere dove salvare ogni download. Attivala se vuoi scegliere "Salva con nome" ogni volta: in Chrome ed Edge si trova in Download nelle impostazioni; in Firefox in Generali, File e applicazioni; in Safari in Generali, Posizione di download dei file.
:::

Altre informazioni su dove vanno i download e su come tenere i file al sicuro: [Dove finiscono i tuoi file](common:your-files).

## Esportazione

Il menu {{ui:Esporta}} scrive altri formati. Ognuno è un download, con il nome della parte.

| Voce di menu | File | Contenuto |
|---|---|---|
| {{ui:STL, per la stampa 3D}} | `<name>.stl` | STL binario dei triangoli del solido, millimetri, **Z in alto** |
| {{ui:3MF, per la stampa 3D}} | `<name>.3mf` | 3MF con il solido come un unico oggetto, millimetri, **Z in alto** |
| {{ui:STEP AP242 (solido esatto)}} | `<name>.step` | Un solido esatto, millimetri, Z in alto: facce tonde come veri cilindri, coni, sfere e tori. Lo STEP da usare per altri programmi CAD e CAM |
| {{ui:STEP AP214 (solido esatto)}} | `<name>.step` | Lo stesso solido esatto nello schema AP214 più vecchio |
| {{ui:STEP (a facce, kernel a mesh)}} | `<name>.step` | Un solido di facce piane dalla mesh: **le superfici tonde sono molte piccole sfaccettature piane**. Millimetri, negli assi propri di PartCraft (Y in alto). Per un programma che rifiuta il file esatto |
| {{ui:DXF dello schizzo o della faccia piana}} | `<name> - <sketch>.dxf` o `<name> - face.dxf` | DXF R12. Uno schizzo: linee, archi, cerchi e punti nelle coordinate dello schizzo, sui layer PROFILE, CONSTRUCTION e POINTS. Una faccia piana scelta: i suoi contorni come polilinee chiuse (spigoli tondi come le loro sfaccettature) |
| {{ui:Disegno (PDF): viste, sezione, dettaglio, GD&T}} | `<name> - drawing.pdf` | Il foglio di disegno A3: tre viste, isometrica, sezione e dettaglio se impostati, dimensioni complessive, simboli GD&T, cartiglio |

:::note
{{ui:STEP AP242 (solido esatto)}} scrive fori, sporgenze, raccordi, coni, sfere e tori sulle loro superfici vere, così un altro programma può selezionare un foro come cilindro; **Curve** non lo cambia. I lati a spline, le filettature modellate e le mesh importate non hanno una superficie esatta e restano sfaccettature piane nello stesso solido; la barra di stato indica quante sono. {{ui:STEP (a facce, kernel a mesh)}} scrive ogni faccia tonda come sfaccettature.
:::

- Le esportazioni riguardano la parte a schermo. L'esportazione è disattivata in un assieme; non esiste ancora un'esportazione di assieme.
- STL, 3MF, lo STEP a facce e il DXF di faccia sono sempre fatti di sfaccettature. L'impostazione **Curve** (nel pannello destro con nulla selezionato) ne stabilisce la finezza, da 32 a 256 sfaccettature per giro. Scegliere Fine o Molto fine prima di esportare STL o 3MF per una stampa liscia.
- Il disegno PDF usa il carattere Helvetica integrato del lettore. I caratteri che non può mostrare vengono stampati come "?".

Passo per passo: [Esportazione per la stampa, STEP e DXF](topic:export-files) e [Creare un foglio di disegno](topic:drawing-pdf).

## Lavoro non salvato

- PartCraft conserva una copia di ripristino della parte o dell'assieme aperto in questo browser poco dopo ogni modifica, così un blocco o una scheda chiusa non fanno perdere il lavoro: la volta successiva che apri PartCraft chiede "Recuperare il lavoro?". Non è un salvataggio: salva in un file per conservare il lavoro. Vedi [Recuperare il lavoro non salvato](common:recover).
- Se provi a chiudere la scheda o a ricaricare con modifiche non salvate, il browser chiede "Lasciare il sito?". È la finestra del browser: PartCraft non può cambiarne il testo.
- {{ui:Nuovo}}, {{ui:Apri}} e la chiusura di un assieme chiedono prima di scartare le modifiche non salvate.

## Online e offline

Tutto avviene sul computer: il kernel a mesh (un programma WebAssembly) viene scaricato con l'app e costruisce la geometria in locale, e i file vengono letti e scritti sul disco. Nessun dato della parte passa in rete. Vedi [Il kernel a mesh](topic:solid-kernels).

Per lavorare senza alcuna connessione, salva PartCraft per l'uso offline mentre sei online: scegli {{ui:Salva per l'uso offline}} nella barra dell'app e attendi mentre conta ("Salvataggio 40 di 212") finché non indica **Pronto offline**. La copia salvata comprende la libreria 3D e il kernel a mesh, quindi dopo funzionano la modellazione, il salvataggio, ogni esportazione e i disegni. Se indica **Impossibile salvare**, cliccalo per riprovare mentre sei online; **Offline non disponibile** significa che questa finestra del browser non può conservare una copia (finestre private e alcuni computer gestiti). Con la copia salvata, cliccando **Pronto offline** si propongono {{ui:Salva di nuovo (scarica la versione più recente)}} e {{ui:Rimuovi la copia offline}}. Dettagli: [Lavorare offline](common:offline).

:::online
Sei online. Anche senza salvare per l'uso offline, una volta caricato PartCraft e quando il chip della barra di stato indica "Kernel a mesh", puoi continuare a lavorare se la connessione cade. Non ricaricare la pagina finché non torni online.
:::

:::offline
Sei offline. Se PartCraft è già aperto, continua a lavorare: salvare ed esportare funzionano comunque. Se la barra dell'app indica **Pronto offline**, PartCraft si apre anche da zero senza connessione; altrimenti non ricaricare questa scheda.
:::

## Differenze tra browser

- **Download.** Ogni browser ha la propria cartella dei download e il proprio modo di chiedere. Se un browser chiede se questo sito può scaricare file, consenti: altrimenti salvare ed esportare non possono funzionare.
- **Trascinamento** di un file sulla vista funziona in Chrome, Edge, Firefox e Safari.
- **File da telefono o tablet.** Su iPhone e iPad, Apri mostra l'app File; i file salvati vanno in File, Download. Su Android vanno nella cartella Download.

Non c'è alcuna differenza nel contenuto dei file tra browser o sistemi operativi.
