---
title: Formati di file
summary: Ogni file che PartCraft legge e scrive, con estensioni, unità, assi e ciò che ciascuno mantiene o perde.
keywords: formati, tipi di file, estensioni, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, unità, Z in alto
from: 4d0ecbee
---

| Formato | Estensione | Apri | Salva o esporta | Unità | Asse verso l'alto | Mantiene |
|---|---|---|---|---|---|---|
| Parte PartCraft | `.partcraft.json` | Sì | {{ui:Salva}} | mm | Y | La cronologia completa: schizzi, relazioni, quote, feature, soppressione, ritorno indietro, impostazione Curve, impostazioni del disegno e GD&T, testo STEP importato in una versione precedente |
| Assieme PartCraft | `.partcraft-asm.json` | Sì | {{ui:Salva}} in un assieme | mm | Y | Ogni parte (incorporata), le copie e le loro posizioni, i giunti |
| STL (binario o testo) | `.stl` | Sì, come corpo solido: [Aprire un file STL, OBJ o 3MF](topic:open-meshes) | {{ui:STL, per la stampa 3D}} | mm (richiesto all'apertura) | Z | Solo i triangoli del solido |
| 3MF | `.3mf` | Sì, come corpo solido | {{ui:3MF, per la stampa 3D}} | mm (indicato nel file) | Z | Il solido come un unico oggetto mesh |
| OBJ | `.obj` | Sì, come corpo solido (solo facce) | No | richiesto all'apertura | Z o Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Sì, come corpo solido letto come triangoli (le facce curve sono disegnate come sfaccettature; le facce piane, i cilindri, i coni, le sfere e i tori del file sono mantenuti per l'esportazione esatta): [Aprire un file STEP](topic:import-step) | | mm (dall'unità del file) | Z, o Y se lo si indica | I solidi e i corpi di superficie, gli assiemi con ogni parte al suo posto; nessun colore, nome, albero dell'assieme o PMI |
| `.3dm` | `.3dm` | Sì, come un unico corpo solido dalle sue mesh e superfici (mesh di render salvate, altrimenti tassellate): [Aprire un modello .3dm](topic:open-3dm-files) | | Dall'unità del file | Z, o Y se lo si indica | Mesh, polisuperfici, estrusioni e posizionamenti di blocchi come un corpo unico; nessuna curva, colore, layer o nome |
| STEP AP242, esatto | `.step` | | {{ui:STEP AP242 (solido esatto)}} | mm | Z | Un solido esatto: facce piane, cilindri, coni, sfere e tori sulle loro superfici vere, cerchi e linee veri come spigoli; i lati a spline, le filettature modellate, i corpi da file mesh e le facce a spline di un file STEP restano sfaccettature. Lo STEP da usare per altri programmi CAD e CAM |
| STEP AP214, esatto | `.step` | | {{ui:STEP AP214 (solido esatto)}} | mm | Z | Lo stesso solido esatto nello schema AP214 più vecchio, per programmi che leggono solo quello |
| STEP AP242, a facce | `.step` | | {{ui:STEP (a facce, kernel a mesh)}} | mm | Y | Un solido chiuso di facce piane: superfici tonde come sfaccettature. Per un programma che rifiuta il file esatto |
| STEP AP214, a facce | `.step` | | {{ui:STEP AP214 (sfaccettato, nucleo mesh)}} | mm | Y | Lo stesso solido nello schema AP214 più vecchio, per programmi che leggono solo quello |
| Pacchetto USD | `.usdz` | No | {{ui:Pacchetto USD (.usdz)}} | m | Z | Il solido con il suo materiale, volume e massa; un assieme con ogni parte una volta e ogni copia posizionata: [Esportare come USD](topic:usd) |
| IFC 4 | `.ifc` | No | {{ui:IFC 4 (con tutte le proprietà)}} | mm | Z | La forma come triangoli, il materiale, ogni parametro, il cartiglio, le quantità; le parti di un assieme come tipi e le sue copie posizionate |
| DXF R12, schizzo | `.dxf` | No | {{ui:DXF dello schizzo o della faccia piana}} con uno schizzo selezionato | mm | x, y propri dello schizzo | Linee, archi e cerchi veri, punti; layer PROFILE, CONSTRUCTION, POINTS |
| DXF R12, faccia | `.dxf` | No | {{ui:DXF dello schizzo o della faccia piana}} con una faccia piana scelta | mm | x, y propri della faccia | I contorni della faccia: fori tondi come cerchi veri, il resto come polilinee chiuse (spigoli tondi come sfaccettature) |
| Disegno PDF | `.pdf` | No | {{ui:Disegno (PDF): viste, sezione, dettaglio, GD&T}} | mm su un foglio A3 | | Viste anteriore, superiore, destra, isometrica, sezione e dettaglio disegnate da sfaccettature, linee nascoste, dimensioni complessive, simboli GD&T, cartiglio |

## I file di PartCraft

Entrambi sono testo semplice (JSON). Il solido non viene mai memorizzato: PartCraft lo ricostruisce dalla cronologia, così i file restano piccoli e corrispondono sempre alla cronologia.

- Ogni file ha un numero di versione. Questa versione scrive ogni file della parte con la versione più bassa che contiene ciò che usa (da 2 a 5; un corpo ricavato da una mesh richiede la 5) e apre ogni versione precedente. Un file di una versione più recente di PartCraft viene rifiutato con un messaggio che indica entrambe le versioni.
- Ogni valore viene controllato all'apertura di un file. I nomi perdono i caratteri di controllo; numeri fuori intervallo, riferimenti a feature mancanti e tipi di feature sconosciuti vengono rifiutati con un motivo chiaro.
- Non modificare questi file a mano se non conosci il formato. Un file che non supera i controlli non si apre.
- Una parte con un grande solido STEP importato in una versione precedente può superare 50 MB, il massimo che PartCraft apre come file della parte (vedi [Risoluzione dei problemi](topic:troubleshooting#file-problems)).

## Sfaccettature ed esattezza

STL e 3MF sono sempre formati da sfaccettature, secondo l'impostazione **Curve**, e così lo è il DXF di faccia, eccetto per i fori tondi, che sono cerchi veri. Il DXF dello schizzo ha archi e cerchi veri, perché proviene direttamente dallo schizzo. Questa versione costruisce ogni parte con il kernel a mesh, quindi anche le viste del disegno (sezioni comprese) sono a sfaccettature. L'esportazione STEP esatta fa eccezione: il kernel conosce la superficie vera di ogni faccia dallo schizzo (o dal file STEP da cui un corpo è stato aperto), quindi le facce tonde vengono scritte come veri cilindri, coni, sfere e tori, qualunque sia l'impostazione **Curve** (vedi [Esportazione per la stampa, STEP e DXF](topic:export-files#for-other-cad-programs-step)).

## Non supportato in questa versione

| Formato | Stato |
|---|---|
| glTF, IGES, Parasolid, ACIS (in entrata o in uscita); esportazione OBJ | Non ancora implementato |
| DWG | Scritto solo da [il pacchetto di varianti](topic:variant-pack), come foglio di disegno di ogni configurazione. Non letto, e nessun'altra esportazione. Esportare DXF; ogni programma CAD apre DXF R12 |
| STEP di un assieme e il disegno di un assieme | Non ancora implementati. Esportare ogni parte come STEP esatto; STL, 3MF e la distinta base si esportano da un assieme |
| File nativi di parti e assiemi di altri programmi (eccetto `.3dm`, che si apre come un corpo) | Non ancora implementato |

Vedi [Cosa non è ancora implementato](topic:not-built-yet).
