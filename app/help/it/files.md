---
title: File: aprire, salvare ed esportare
summary: I file di parti e assiemi che PartCraft apre e salva, ogni formato di esportazione e che cosa conserva, dove vanno i file e che cosa cambia offline o tra un browser e l'altro.
keywords: apri, salva, esporta, download, file, partcraft.json, file di assieme, stl, 3mf, step, dxf, pdf, dove sono i miei file, offline, salva con nome
from: c15c2c48
---

PartCraft lavora su file del computer. Non carica mai una parte e non c'è alcun account né archiviazione cloud. Il salvataggio nel cloud non è ancora disponibile.

## Che cosa apre PartCraft

| File | Estensione | Come |
|---|---|---|
| Una parte PartCraft | `.partcraft.json` | {{ui:Apri}}, {{key:Mod+O}}, oppure trascinarla sulla vista 3D |
| Un assieme PartCraft | `.partcraft-asm.json` | Allo stesso modo: PartCraft riconosce di che tipo è |
| Un solido STEP | `.step`, `.stp` | Un corpo solido letto come triangoli: [Aprire un file STEP e costruirci sopra](topic:import-step) |

Anche le mesh STL, OBJ e 3MF si aprono come corpi solidi ([Aprire un file STL, OBJ o 3MF](topic:open-meshes)), così come i file `.3dm` ([Aprire un modello .3dm](topic:open-3dm-files)). I file DXF, IGES e i file di parti di altri programmi non si possono aprire (vedere [Che cosa non è ancora implementato](topic:not-built-yet)).

Regole all'apertura:

- Il nome di un file di parte o di assieme deve terminare con `.json` e il file deve essere inferiore a 50 MB.
- I file vengono controllati prima di mostrare qualsiasi cosa. Un file danneggiato o modificato viene rifiutato con un motivo chiaro, per esempio "Questo non è un file PartCraft."
- Un file salvato da un PartCraft più recente viene rifiutato: "Questo file è stato salvato da un PartCraft più recente (versione del file 3); questo legge la versione 2." I file più vecchi si aprono.
- Se la parte sullo schermo ha modifiche non salvate, PartCraft chiede prima: {{ui:Annulla}}, {{ui:Scarta modifiche}} o {{ui:Salva prima}}.

## Salvataggio

{{ui:Salva}} o {{key:Mod+S}} salva ciò che è sullo schermo:

- Per una parte: `<nome della parte>.partcraft.json`, l'intera cronologia (schizzi, relazioni, quote, feature, la posizione del rollback), le note di sezione, dettaglio e GD&T della tavola di disegno e il testo completo di qualsiasi solido STEP importato in una versione precedente. Le feature che questa versione non sa costruire vengono salvate invariate. Il solido in sé non è memorizzato; PartCraft lo ricostruisce dalla cronologia quando il file si apre.
- In un assieme: `<nome dell'assieme>.partcraft-asm.json`, con **ogni parte al suo interno**. Un solo file contiene l'intero assieme, quindi si può inviare da solo.

Il salvataggio è un **download**. Il browser mette il file nella cartella dei download, oppure chiede dove metterlo se è impostato così. Salvare di nuovo crea un nuovo download; il browser può chiamarlo `Part1 (1).partcraft.json` invece di sostituire il vecchio. Rinominare o spostare i file in {{pick:mac=Finder|windows=Esplora file|linux=il gestore di file}} a piacere.

I caratteri diversi da lettere, cifre, spazi, `_`, `.` e `-` nel nome della parte diventano `_` nel nome del file.

:::tip
La maggior parte dei browser ha un'impostazione per chiedere dove salvare ogni download. Attivarla per avere ogni volta la scelta "Salva con nome": in Chrome e Edge si trova in Download nelle impostazioni; in Firefox in Generale, File e applicazioni; in Safari in Generale, Posizione download file.
:::

Altre informazioni su dove vanno i download e su come tenere al sicuro i file: [Dove vanno i file](common:your-files).

## Esportazione

Il menu {{ui:Esporta}} scrive altri formati. Ognuno è un download, con il nome della parte.

| Voce di menu | File | Che cosa contiene |
|---|---|---|
| {{ui:STL, per la stampa 3D}} | `<nome>.stl` | STL binario dei triangoli del solido, millimetri, **Z in alto** |
| {{ui:3MF, per la stampa 3D}} | `<nome>.3mf` | 3MF con il solido come unico oggetto, millimetri, **Z in alto** |
| {{ui:STEP AP242 (solido esatto)}} | `<nome>.step` | Non ancora implementato in questa versione (in grigio): richiede un kernel esatto |
| {{ui:STEP AP214 (solido esatto)}} | `<nome>.step` | Non ancora implementato in questa versione (in grigio) |
| {{ui:STEP (a facce, kernel a mesh)}} | `<nome>.step` | Un solido fatto di facce piane ricavate dalla mesh: **le superfici tonde sono molte piccole sfaccettature piane**. Millimetri, negli assi propri di PartCraft (Y in alto). Il STEP da usare per altri programmi CAD in questa versione |
| {{ui:DXF dello schizzo o della faccia piana}} | `<nome> - <schizzo>.dxf` o `<nome> - face.dxf` | DXF R12. Uno schizzo: linee, archi, cerchi e punti nelle coordinate proprie dello schizzo, sui layer PROFILE, CONSTRUCTION e POINTS. Una faccia piana selezionata: i suoi contorni come polilinee chiuse (gli spigoli tondi come sfaccettature) |
| {{ui:Disegno (PDF): viste, sezione, dettaglio, GD&T}} | `<nome> - drawing.pdf` | La tavola di disegno A3: tre viste, isometrica, sezione e dettaglio se impostati, dimensioni complessive, simboli GD&T, cartiglio |

:::note
{{ui:STEP AP242 (solido esatto)}} e {{ui:STEP AP214 (solido esatto)}} non sono ancora implementati in questa versione: usare {{ui:STEP (a facce, kernel a mesh)}}. Ha la forma e il volume giusti, ma ogni faccia tonda è formata da molte sfaccettature piane, quindi altri programmi non possono selezionare un foro come cilindro. Se è importante, impostare prima **Curve** su un valore più fine.
:::

- Le esportazioni riguardano la parte sullo schermo. In un assieme l'esportazione è disattivata; non esiste ancora un'esportazione dell'assieme.
- STL, 3MF, il STEP sfaccettato e il DXF della faccia sono sempre fatti di sfaccettature. L'impostazione **Curve** (nel pannello di destra senza selezione) ne imposta la finezza, da 32 a 256 sfaccettature per giro. Scegliere Fine o Molto fine prima di esportare STL o 3MF per una stampa liscia.
- Il disegno in PDF usa il carattere Helvetica incorporato nel lettore. I caratteri che non può mostrare vengono stampati come "?".

Passo per passo: [Esportare per la stampa, STEP e DXF](topic:export-files) e [Creare una tavola di disegno](topic:drawing-pdf).

## Lavoro non salvato

- PartCraft conserva in questo browser una copia di ripristino della parte o dell'assieme aperto un istante dopo ogni modifica, così un arresto anomalo o una scheda chiusa non fanno perdere il lavoro: la volta successiva che si apre PartCraft chiede "Recuperare il lavoro?". Non è un salvataggio: per conservare il lavoro salvare in un file. Vedere [Recuperare il lavoro non salvato](common:recover).
- Se si prova a chiudere la scheda o a ricaricare con modifiche non salvate, il browser chiede "Lasciare il sito?". È una finestra del browser; PartCraft non può cambiarne il testo.
- {{ui:Nuovo}}, {{ui:Apri}} e la chiusura di un assieme chiedono conferma prima di scartare modifiche non salvate.

## Online e offline

Tutto avviene sul computer: il kernel a mesh (un programma WebAssembly) viene scaricato con l'app e costruisce la geometria in locale, e i file vengono letti dal disco e scritti sul disco. Nessun dato della parte passa in rete. Vedere [Il kernel a mesh](topic:solid-kernels).

Per lavorare senza alcuna connessione, salvare PartCraft per l'uso offline mentre si è online: scegliere {{ui:Salva per l'uso offline}} nella barra dell'app e attendere mentre conta ("Salvataggio di 40 su 212") finché indica **Pronto per l'uso offline**. La copia salvata comprende la libreria 3D e il kernel a mesh, quindi in seguito modellazione, salvataggio, ogni esportazione e i disegni funzionano tutti offline. Se indica **Salvataggio non riuscito**, fare clic per riprovare mentre si è online; **Offline non disponibile** significa che questa finestra del browser non può conservare una copia (finestre private e alcuni computer gestiti). Con la copia salvata, facendo clic su **Pronto per l'uso offline** si ottengono {{ui:Salva di nuovo (scarica la versione più recente)}} e {{ui:Rimuovi la copia offline}}. Dettagli: [Lavorare offline](common:offline).

:::online
Si è online. Anche senza salvare per l'uso offline, una volta che PartCraft è caricato e il chip della barra di stato indica "Nucleo a mesh", si può continuare a lavorare se la connessione cade. Basta non ricaricare la pagina finché non si è di nuovo online.
:::

:::offline
Si è offline. Se PartCraft è già aperto, continuare a lavorare; salvataggio ed esportazione funzionano ancora. Se la barra dell'app indica **Pronto per l'uso offline**, PartCraft si apre da zero anche senza connessione; altrimenti non ricaricare questa scheda.
:::

## Differenze tra i browser

- **Download.** Ogni browser ha una propria cartella dei download e un proprio modo di chiedere. Se un browser chiede se questo sito può scaricare file, consentirlo, altrimenti salvataggio ed esportazione non possono funzionare.
- **Trascinamento** di un file sulla vista funziona in Chrome, Edge, Firefox e Safari.
- **File da telefono o tablet.** Su iPhone e iPad, Apri mostra l'app File; i file salvati vanno in File, Download. Su Android vanno nella cartella Download.

Il contenuto dei file non cambia tra browser o sistemi operativi.
