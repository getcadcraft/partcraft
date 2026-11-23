---
title: Cosa non è ancora implementato
summary: Tutto ciò che questa build di PartCraft non fa ancora, dai sweep con torsione alla visualizzazione in pollici, dalle quote di disegno ai sottoassiemi, con cosa fare invece oggi.
keywords: mancante, non ancora, limiti, limitazioni, roadmap, kernel esatto, raccordo, smusso, svuota, sweep, loft, importazione STEP, simulazione, produzione, sweep con torsione, tangenza finale del loft, raccordo su faccia, equazioni, pollici, quote di disegno, sottoassiemi, cloud, tablet, telefono
from: 97b10a29
---

PartCraft è una build iniziale. Questa pagina elenca ciò che non fa ancora, così non lo si cerca, e cosa fare invece oggi. Nulla qui ha una data.

## Richiede un kernel esatto

Questa versione costruisce ogni pezzo con il kernel mesh (vedi [Il kernel mesh](topic:solid-kernels)). Tutto quanto segue richiede un kernel di geometria esatto, che questa versione non ha ancora. I pezzi salvati con queste funzioni si aprono comunque: le funzioni restano nella cronologia, segnate come non ancora implementate, e vengono conservate al salvataggio.

| Non ancora implementato | Invece, oggi |
|---|---|
| {{ui:Raccordo}} e {{ui:Smusso}} su spigoli tondi; raccordi con raggio che cambia lungo lo spigolo; raccordi fusi in modo liscio dove si incontrano (il kernel mesh li unisce con uno spigolo vivo) | Raccordo e Smusso funzionano su spigoli diritti tra facce piane; arrotondare gli altri angoli nello schizzo prima di estrudere ({{ui:Raccordo}} in uno schizzo, {{key:F}}) |
| {{ui:Svuota}} che apre facce curve; pareti di spessore diverso | Aprire facce piane; aggiungere materiale con estrusioni dove una parete deve essere più spessa |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Sformo}} su facce curve; estrusioni fino a una faccia, alla faccia successiva o a un vertice; estrusioni coniche | Estrudere o creare una rivoluzione, a passi dove serve; estrudere a una profondità misurata |
| {{ui:Nervatura}}, {{ui:Flangia di base}}, {{ui:Flangia di spigolo}} e sviluppi piani | Estrudere la lamiera o il profilo della nervatura |
| Superfici: completare una {{ui:Forma}} nel pezzo, {{ui:Patch}}, {{ui:Loft superficie}}, {{ui:Superficie Gordon}}, {{ui:Cuci}}, {{ui:Ispessisci}}, {{ui:Offset superficie}}, {{ui:Estendi superficie}}, {{ui:Rifila superficie}} | Non disponibile |
| Più corpi: {{ui:Combina}}, {{ui:Sposta corpo}}, {{ui:Scala corpo}}, {{ui:Serie su percorso}}, funzioni che creano un nuovo corpo | Un solo solido; serie e specchi copiano le funzioni |
| Schizzi, piani, assi e punti su facce che solo un kernel esatto può trovare (una faccia creata da un raccordo, la parete di un foro, una faccia di un solido importato) | Schizzare sui piani di base, sui piani di riferimento e sulle facce piane di estrusioni e rivoluzioni |
| Un risultato di progettazione generativa aperto come pezzo o aggiunto a un pezzo (diventa un solido importato) | Scaricare il risultato come STL o STEP |
| Modifica delle facce curve di un file STEP aperto come superfici esatte; STEP esatto di facce spline, a sweep e a rivoluzione provenienti da un file STEP, lati spline, filettature modellate, corpi e assiemi STL / OBJ / 3MF; STEP per altri modellatori di pezzi | {{ui:Apri}} legge lo STEP come triangoli e mantiene per l'esportazione le facce piane, i cilindri, i coni, le sfere e i tori del file ([Aprire un file STEP](topic:import-step)); {{ui:Esporta}} › {{ui:STEP AP242 (solido esatto)}} scrive esattamente ogni faccia analitica e mantiene quelle come facette ([Esporta](topic:export-files#for-other-cad-programs-step)); la macro per un altro modellatore di pezzi scrive ancora |
| Archi veri nelle viste di disegno | Viste e viste in sezione sono disegnate dalle facette |
| Volumi, aree e distanze esatti | {{ui:Misura}} dà i valori del solido a facette, un po' bassi sui pezzi tondi; un'impostazione **Curve** più fine li avvicina |

Alcune righe delle tabelle seguenti suggeriscono una di queste funzioni come alternativa a un'altra. Questi suggerimenti valgono quando tornerà un kernel esatto.

## Funzioni

| Non ancora implementato | Invece, oggi |
|---|---|
| Raccordi su facce, raccordi a tutto tondo, raccordi con raggi impostati in punti lungo uno spigolo | {{ui:Raccordo}} a raggio costante o variabile lineare; più funzioni di raccordo |
| Svuotature con spessori di parete diversi | Un solo spessore di {{ui:Svuota}}; aggiungere materiale con estrusioni dove una parete deve essere più spessa |
| Sformo su facce a forma libera (spline) | {{ui:Sformo}} funziona su facce piane, cilindriche e coniche |
| Sweep con torsione, sweep a parete sottile e di superficie; tangenza finale nella funzione Loft; un loft con una sola guida; percorsi spline | {{ui:Sweep}} con orientamento fisso o una scala finale; un loft con due o più guide: vedi [Sweep, loft e sformo](topic:sweep-loft-draft) |
| Nervature da archi o spline; nervature cresciute a squadra con lo schizzo (da una vista dall'alto); sformo sulle nervature; più nervature da uno schizzo | {{ui:Nervatura}} da una catena di linee nel piano della nervatura: vedi [Nervature e fazzoletti](topic:rib) |
| "Fino a" una superficie curva, "fino al successivo" che si ferma su una faccia curva | Fino a una faccia piana o a un piano di riferimento |
| Fori con controforatura, filettature in pollici e per tubi, filettature coniche, uscite di filetto e inizi di filetto smussati | Alesatura a piccola profondità; filettature metriche ISO e trapezoidali, convenzionali o modellate: vedi [Filettature su alberi e fori, disegnate o modellate](topic:threads) |
| Estrusioni di funzioni sottili | Disegnare entrambe le pareti del profilo |
| Copie in serie saltate una per una, serie di riempimento | Usare funzioni separate; serie lungo una curva: {{ui:Serie su percorso}} |
| Copiare serie, specchi, raccordi, smussi, svuotature e solidi importati | Copiare lo schizzo o la funzione su cui sono costruiti, oppure creare una serie |
| Tangenza esatta (G1) nei punti singolari di una forma; unione delle patch di una forma in facce più grandi | Aumentare il Livello della forma: le patch approssimate diventano più piccole; vedi [Forme a superficie libera con Forma](topic:form-surfaces) |
| Una forma composta da più pezzi chiusi separati in una stessa funzione; ponti tra forme | Un pezzo chiuso per funzione Forma; unirli con {{ui:Unisci}} |
| Selezionare corpi di superficie nella vista (tranne i punti di rifila e patch); raccordi su superfici; annullamento della rifila; patch G2; superfici Gordon tangenti a vicini curvi (la tangenza a piani e facce piane è implementata) | Sceglierli per nome nel pannello della funzione; prima ispessire, poi raccordare il solido |
| Un elenco dei corpi nella cronologia; escludere i corpi nascosti dalle esportazioni | Rinominare e nascondere i corpi nell'elenco corpi del pannello pezzo; eliminare o sopprimere la funzione che ha creato un corpo per escluderlo |
| Una scala non uniforme che mantiene analitici cilindri e coni; scala non uniforme di superfici offset | {{ui:Scala corpo}} rende le facce curve B-spline chiuse (entro 0.0000004 mm); una scala uniforme resta esatta |
| Combinare corpi di superficie; somme di Minkowski | Prima {{ui:Cuci}} o {{ui:Ispessisci}}, poi {{ui:Combina}} |
| Analisi delle tolleranze: catene che svoltano angoli (anelli vettoriali 2D e 3D), sensibilità calcolate dalla geometria, Monte Carlo con altre distribuzioni, tolleranze di misura sulle quote dello schizzo, tolleranza di bonus dalla condizione del materiale | {{ui:Catena di tolleranze}} in un assieme: una direzione, caso peggiore e RSS, tolleranze digitate, dalla tolleranza generale del cartiglio o dai riquadri GD&T: vedi [Catene di tolleranze](topic:tolerance-stackup) |
| Nesting: ordine di taglio e attacchi, taglio una sola volta degli spigoli condivisi, pezzi da tenere insieme; residui di rotoli, grezzo condiviso tra progetti | {{ui:Nesting delle parti piane su lastre…}} con spaziatura, margini, rotazioni e direzione di laminazione: vedi [Nesting delle parti piane su lastre](topic:nest-flat-parts); le lastre residue vengono conservate e usate per prime: vedi [Conservare e riutilizzare i ritagli](topic:nest-offcuts); pianificare il taglio nel software della propria macchina da taglio |
| Lamiera: orli, risalti, flange a onglet e di contorno; flange su spigoli curvi o sulle facce di una flangia di base piegata; pieghe schizzate; chiusure d'angolo; utensili di formatura; conversione di un solido in lamiera; lo sviluppo di una flangia di base piegata con tagli; tabelle di piega | {{ui:Flangia di base}} (una lastra o un profilo piegato), {{ui:Flangia di spigolo}} sugli spigoli diritti di una lastra con scarichi di piega, e lo sviluppo piano con un fattore K: vedi [Lamiera](topic:sheet-metal) |
| Analisi dello sformo su assiemi; ricerca della linea di partizione; analisi dello spessore di parete | {{ui:Analisi dello sformo}} sul pezzo in Progettazione: vedi [Verificare lo sformo per stampaggio e fusione](topic:draft-analysis); aprire ogni pezzo di un assieme per verificarlo |

## Schizzi

| Non ancora implementato | Invece, oggi |
|---|---|
| Ellissi, archi tangenti, coniche, spline con grado o pesi impostati (NURBS) | Spline (cubiche), archi e cerchi con relazioni di tangenza |
| Un punto su una spline (una relazione), relazioni di curvatura (G2) | Mettere un punto proprio della spline dove deve passare |
| Copie offset di spline che seguono modifiche successive; offset di catene con angoli vivi di spline | Rifare l'offset dopo la modifica; arrotondare prima l'angolo |
| Copie in serie che restano collegate all'originale; serie lungo una curva | Rifare la serie dopo una modifica |
| Proiettare spigoli circolari a forma libera o inclinati, geometria proiettata che segue il pezzo | Proiettare spigoli circolari diritti e paralleli, poi quotare |
| Quote pilotate (di riferimento) | Leggere le misure dal pannello o dai dati del pezzo |
| Relazioni collineari | Parallelo con distanza 0 |
| Incollare in un altro programma (Appunti di sistema) | Esportare DXF, STEP, STL o 3MF |
| Digitare archi, coordinate relative o polari | Digitare linee e cerchi; disegnare archi con lo strumento Arco |
| Selezionare la geometria senza puntatore | Serve un clic o un tocco |

## Parametri e unità

| Non ancora implementato | Invece, oggi |
|---|---|
| Configurazioni che cambiano i materiali; una tabella di progetto CSV che disattiva funzioni | Le configurazioni impostano parametri e attivano o disattivano funzioni: vedi [Configurazioni e tabelle di progetto](topic:design-tables); `partcraft variants` costruisce le configurazioni salvate per nome, anche con funzioni disattivate: vedi [Creare un pacchetto di varianti dalle proprie configurazioni](topic:variant-pack) |
| Equazioni nei valori dei pannelli propri delle funzioni più recenti (piano, sweep, sformo e simili) | Scriverle in uno script o con `partcraft set` ([Script e riga di comando](topic:scripts-and-cli)) |
| Un pezzo mostrato in pollici | Le misure appaiono in millimetri; digitare `2in` in un campo numerico o in un'espressione e diventa 50.8 |

## File

| Non ancora implementato | Invece, oggi |
|---|---|
| Modificare le funzioni proprie di un solido STEP importato (arriva senza cronologia) | Aggiungere o togliere materiale con funzioni proprie |
| Leggere colori, nomi, struttura dell'assieme e PMI da STEP | Non disponibile |
| Esportazione in glTF, OBJ, IGES, Parasolid; DWG di un pezzo 3D (solo il pacchetto di varianti scrive un DWG: la tavola del disegno) | STL o 3MF per le mesh; STEP per i solidi; DXF per il 2D |
| Aprire IGES, DXF o file propri di altri programmi (i file `.3dm` si aprono come un solo corpo: [Aprire un modello .3dm come corpo solido](topic:open-3dm-files)) | Usare uno STEP, oppure una mesh STL, OBJ o 3MF chiusa: [Aprire un file STL, OBJ o 3MF](topic:open-meshes) |
| Struttura dell'assieme (un albero con i nomi dei pezzi) nello STEP esportato | Lo STEP dell'assieme è un unico composto dei solidi posizionati |
| Salvare in una cartella a scelta senza il download del browser | Attivare "chiedi dove salvare" nelle impostazioni di download del browser |

## Disegni

| Non ancora implementato | Invece, oggi |
|---|---|
| Quote oltre le tre dimensioni complessive (misure dei fori, posizioni, tolleranze sulle misure) | Annotare il PDF, oppure esportare DXF e quotarlo in un programma CAD 2D |
| Più di una sezione o di un dettaglio; viste allineate, parzializzate e ausiliarie | Una sezione e un dettaglio per disegno |
| Testo libero, note e tabelle sulla tavola (oltre ai blocchi del cartiglio e delle revisioni) | La nota di finitura, oppure testo aggiunto sul PDF |
| Proiezione del primo diedro, viste mobili, tavole in verticale | Terzo diedro, impaginazione automatica, tavole orizzontali A4–A0 e ANSI A–E |
| Vista in sezione dal vivo: più piani o un riquadro di sezione alla volta, un contorno intorno al taglio, salvataggio della sezione nel file | Un piano alla volta da {{ui:Viste}} › {{ui:Vista in sezione}}; vedi [Guardare dentro con una vista in sezione](topic:section-view) |
| Disegni di assieme con più viste, quote o palloncini spostabili | Una vista isometrica (o esplosa) con palloncini automatici e l'elenco dei pezzi |
| Copia e incolla di simboli GD&T e di finitura | Inserire ciascuno con Riferimento, Riquadro o Finitura |
| Manuali: file STEP in {{ui:Da un altro file…}} di Illustrate, un modello passato direttamente da ModelCraft o BimCraft, immagini con la qualità del path tracer, 3D interattivo dentro un PDF | Aprire lo STEP in Progettazione e avviare il manuale {{ui:Dalla parte aperta}}; salvare il modello come glTF (.glb); immagini PNG della vista 3D; il file 3D interattivo: vedi [Avviare un manuale in Illustrate](topic:illustrate) |

## Assiemi

| Non ancora implementato | Invece, oggi |
|---|---|
| Giunti a ingranaggio, a cremagliera, a camma e a vite; un giunto sferico limitato a un cono; giunti su facce curve o tra punti | Giunti rigidi, rotoidali, prismatici, cilindrici, planari, sferici e perno in asola su facce piane, ciascuno con i propri limiti: vedi [Costruire un assieme](topic:build-assembly) |
| Passi di esplosione che ruotano i pezzi, e trascinare pezzi posizionati dai giunti | Passi di esplosione diritti; rimuovere un giunto per spostare un pezzo a mano |
| Sottoassiemi | Un solo livello di pezzi |
| Ingranaggi, camme, contatto | Non disponibile |

## Produzione

| Non ancora implementato | Invece, oggi |
|---|---|
| Sgrossatura adattiva 3D e sgrossatura a offset in 3D; finitura a quota costante, a matita, radiale e a spirale; passate adattive scritte come archi | Sgrossatura 3D a righe diritte e lavorazione del residuo: vedi [Sgrossatura 3D e lavorazione del residuo](topic:rough-3d); finitura {{ui:Parallelo}} e {{ui:Cresta}}: vedi [Finitura 3D](topic:finish-3d); spianatura, tasca, adattiva 2D, contorno, foratura e smusso a 2.5 assi: vedi [Creare percorsi utensile e G-code](topic:manufacture) |
| Taglio di fianco (swarf), percorsi di sgrossatura a linee di flusso e a più assi, codici di piano di lavoro inclinato (G68.2), controlli di collisione del portautensile e della macchina; simulazione di tagli a 5 assi e rotativi | Un utensile inclinato per qualsiasi operazione, finitura a 5 assi con fresa a sfera e finitura rotativa a quarto asse: vedi [Lavorazione a 4 e 5 assi](topic:multi-axis) |
| Alesatura e filettature interne su un tornio, cicli G71/G76, archi nei percorsi di tornitura, utensili motorizzati, un contromandrino | Tornitura esterna: faccia, sgrossatura, finitura, scanalatura, tronca, filettatura, foratura sull'asse: vedi [Tornitura su tornio](topic:turning) |
| Tastatura di un angolo o di uno spigolo, un preset utensile, misura di una quota rispetto a una tolleranza | Tastatura di una faccia, di un lato, di un foro o di una sporgenza per impostare l'origine pezzo: vedi [Tastatura](topic:probing) |
| Controlli di collisione di portautensile e gambo | Osservare gli avvisi sulla lunghezza del tagliente e verificare nel simulatore del controllo |
| Cicli di durata utensile e di sottoprogramma in un post; caricare file di post di altri programmi | Scrivere o modificare un post nel formato proprio di PartCraft: vedi [Post-processori modificabili](topic:post-processors) |
| G-code in pollici (G20) | Solo millimetri (G21) |

## Simulazione e progettazione generativa

| Non ancora implementato | Invece, oggi |
|---|---|
| Studi non lineari: snervamento, grandi deformazioni, contatto tra pezzi, fatica | Statico lineare e frequenze naturali: vedi [Verificare tensione e deformazione](topic:simulation); mantenere il coefficiente di sicurezza ben sopra 1 |
| Instabilità non lineare (imperfezioni, post-instabilità, snap-through) | Coefficienti di carico di instabilità lineari con un ampio margine: vedi [Calore, tensione termica e instabilità](topic:thermal-and-buckling) |
| Irraggiamento tra facce (fattori di vista), resistenza di contatto, materiali dipendenti dalla temperatura, inerzia nella tensione termica (onde d'urto termiche) | Irraggiamento verso l'ambiente, tensione termica stazionaria o quasi statica nel tempo, proprietà costanti: vedi [Calore, tensione termica e instabilità](topic:thermal-and-buckling) |
| Raffinamento automatico per il calore transitorio e per studi con carico termico; rendere la mesh più grossolana dove l'errore è piccolo; un obiettivo su una grandezza locale (la tensione di picco in un punto) | **Raffina automaticamente** per studi statici, di instabilità, di frequenza naturale e termici stazionari, sull'errore su tutto il pezzo: vedi [Verificare tensione e deformazione](topic:simulation); altrimenti abbassare la dimensione dell'elemento |
| Carichi su cuscinetti e bulloni, forze remote, momenti, molle, spostamenti imposti | Forze e pressioni sulle facce, gravità; facce fisse e senza attrito |
| Simulazione di assiemi; materiali che variano con la direzione (strati stampati, compositi) | Un pezzo, un materiale isotropo |
| Più thread del solutore per studi tetraedrici, trasmissione del calore e progettazione generativa; thread su una pagina non isolata tra origini | Studi voxel, instabilità, tensione nel tempo e flusso laminare usano i thread dove la pagina lo consente: vedi [Impostazioni di PartCraft](topic:settings) |
| Flusso turbolento con precisione di progetto (il modello Spalart–Allmaras è incluso come sperimentale: attrito nei tubi del 30 al 34 % più alto, riattacco dopo gradino all'indietro del 21 al 39 % più corto; previsto: celle più fini vicino alle pareti), calore nel flusso, flusso non stazionario (con tempo accurato), superfici libere, fluidi non newtoniani, parti rotanti | Flusso laminare, stazionario, isotermo di un fluido newtoniano, oppure il modello turbolento sperimentale per andamenti qualitativi: vedi [Simulare il flusso di fluidi](topic:flow-simulation); il pannello avvisa quando il numero di Reynolds supera il regime laminare |
| Limiti di tensione e regole di fabbricazione (sbalzi, direzioni di fresatura) nella progettazione generativa; più materiali in una forma | Forma più rigida per un volume; verificare il risultato in Simulazione: vedi [Far crescere una forma dai carichi](topic:generative-design) |
| Un risultato come solido modificabile (liscio, parametrico) | STL, STEP a facce oppure un pezzo con il risultato come solido importato a facette |
| Progettazione di macchine elettriche: un rotore che ruota in uno statore, coppia in funzione dell'angolo, acciaio saturo, magneti che perdono forza oltre il ginocchio, correnti parassite e perdite nel ferro e nel rame; campi magnetici in 3D o su mesh curve | Magnetostatica 2D lineare su una griglia nella libreria di analisi: bobine, ferro, magneti permanenti sulla loro retta di recupero, traferri, induttanza e attrazione: vedi [Campi magnetici in 2D](topic:magnetic-fields-2d) |

## Script

| Non ancora implementato | Invece, oggi |
|---|---|
| Aiuto al passaggio del mouse, punti di interruzione e avanzamento passo passo nell'editor di script | Trova, comprimi e completa sono disponibili (vedi [Scrivere ed eseguire script](topic:craftscript)); per il resto, un proprio editor: {{ui:Salva}} e {{ui:Apri}} nel gruppo Script portano gli script dentro e fuori; le funzioni integrate sono elencate in [Il linguaggio CraftScript](topic:craftscript-language) |
| Punti di interruzione e avanzamento passo passo in uno script | `disp` e `fprintf` lungo il percorso; {{key:Mod+Enter}} esegue alcune righe selezionate alla volta |
| Campi e grafici che uno script mostra disegnati nell'area di lavoro Progettazione; script che modificano i parametri del pezzo | Compaiono nell'area di lavoro Script; gli script leggono i parametri con `param` (vedi [Scrivere ed eseguire script](topic:craftscript)), li modificano nella scheda {{ui:Parametri}} |
| Immagini e tabelle affiancate ai grafici; modifica di un grafico (zoom, limiti degli assi) prima di salvarlo | Affiancati mostrano i grafici; salvare un grafico come PNG, SVG o CSV e completarlo altrove |
| numpy e altri pacchetti Python; Python offline; ripiegamento del codice Python nell'editor; Pascal Script | La libreria standard di Python, CraftScript e Lua: vedi [Script in Python](topic:craftscript-python) |
| Passare funzioni Lua alle funzioni integrate; chiamare una funzione di libreria da Lua con un nome costruito durante l'esecuzione dello script | Scrivere il nome della funzione di libreria nello script (`cs.static_tet(…)`), oppure chiamarla da uno script CraftScript |

## L'app

| Non ancora implementato | Invece, oggi |
|---|---|
| Salvataggio nel cloud, condivisione e cronologia delle versioni | Non ancora disponibile. Salvare i file sul proprio computer e tenere le versioni con il nome |
| PartCraft come app installata su iPad e iPhone | Usare PartCraft nel browser del dispositivo; su Android e su desktop funziona anche in CadCraft Studio (getcadcraft.com/download) |
| Menu contestuali (clic destro) | Barra degli strumenti e pannello destro |
| Lavorare del tutto offline da un avvio pulito | Solo quando l'app è stata salvata per l'uso offline: vedi [Lavorare offline](common:offline) |

Segnalare ciò che manca di più tramite la pagina di supporto del sito: orienta ciò che viene dopo.

## Engineer (generatori e campi)

| Non ancora implementato | Invece, oggi |
|---|---|
| Collettori, bocche e raccordi sullo scambiatore di calore generato; curve di temperatura per la resistenza del materiale; perdite nei raccordi a T del collettore | I generatori costruiscono il nucleo e i tubi; aggiungere i raccordi in Progettazione; usare i valori del materiale a temperatura ambiente con un coefficiente di sicurezza |
| Aggiungere generatori dalla directory degli add-on con un clic | {{ui:Apri}} nell'area di lavoro Engineer aggiunge un generatore da un file |
| Un file di campo più fine della dimensione voxel propria del generatore; leggere file `.vdb` | Salvare un campo più fine da uno script; `.vdb` viene scritto, non letto |
| Calcoli secondo le norme per recipienti a pressione | Le formule classiche per parete sottile e spessa, con il coefficiente di sicurezza scelto; non un margine normativo |
| Generatori per le altre app | Solo PartCraft in questa versione |
