---
title: Cosa non è ancora implementato
summary: Tutto ciò che questa versione di PartCraft non fa ancora, dagli sweep attorcigliati alla visualizzazione in pollici, dalle quote di disegno ai sottoassiemi, con ciò che si può fare oggi al suo posto.
keywords: mancante, non ancora, limiti, limitazioni, roadmap, kernel esatto, raccordo, smusso, svuota, sweep, loft, importazione STEP, simulazione, produzione, sweep attorcigliato, tangenza finale del loft, raccordo di faccia, equazioni, pollici, quote di disegno, sottoassiemi, nuvola, tablet, telefono
from: 9b868162
---

PartCraft è una versione iniziale. Questa pagina elenca ciò che non fa ancora, perché non lo si cerchi, e cosa fare oggi al suo posto. Nulla qui ha una data prevista.

## Richiede un kernel esatto

Questa versione costruisce ogni parte con il kernel a mesh (vedi [Il kernel a mesh](topic:solid-kernels)). Tutto ciò che segue richiede un kernel geometrico esatto, che questa versione non ha ancora. Le parti salvate con queste feature si aprono ancora: le feature restano nella cronologia, contrassegnate come non ancora costruite, e vengono mantenute al salvataggio.

| Non ancora implementato | Invece, oggi |
|---|---|
| {{ui:Raccordo}} e {{ui:Smusso}} su spigoli arrotondati; raccordi il cui raggio cambia lungo lo spigolo; arrotondamenti fusi in modo liscio dove si incontrano (il kernel a mesh li raccorda a unghia) | Raccordo e Smusso funzionano su spigoli diritti tra facce piane; arrotondare gli altri angoli nello schizzo prima di estrudere ({{ui:Raccordo}} in uno schizzo, {{key:F}}) |
| {{ui:Svuota}} su facce curve; pareti di spessori diversi | Svuotare facce piane; aggiungere materiale con estrusioni dove una parete deve essere più spessa |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Sformo}} su facce curve; estrusioni fino a una faccia, alla faccia successiva o a un vertice; estrusioni rastremate | Estrudere o ruotare, a passi dove serve; estrudere a una profondità misurata |
| {{ui:Nervatura}}, {{ui:Flangia di base}}, {{ui:Flangia di spigolo}} e sviluppi | Estrudere la lastra o il profilo della nervatura |
| Superfici: completare una {{ui:Forma}} nella parte, {{ui:Patch}}, {{ui:Loft superficie}}, {{ui:Superficie Gordon}}, {{ui:Cuci}}, {{ui:Ispessisci}}, {{ui:Offset superficie}}, {{ui:Estendi superficie}}, {{ui:Rifila superficie}} | Non disponibile |
| Più corpi: {{ui:Combina}}, {{ui:Sposta corpo}}, {{ui:Scala corpo}}, {{ui:Serie su percorso}}, feature che creano un nuovo corpo | Un solo solido; le serie e gli specchi copiano le feature |
| Schizzi, piani, assi e punti su facce che solo un kernel esatto può trovare (una faccia creata da un raccordo, una parete di foro, una faccia di un solido importato) | Schizzare sui piani di base, sui piani di riferimento e sulle facce piane di estrusioni e rivoluzioni |
| Un risultato di progettazione generativa aperto come parte o aggiunto a essa (diventa un solido importato) | Scaricare il risultato come STL o STEP |
| Modificare le facce curve di un file STEP aperto come superfici esatte; STEP esatto di facce a spline, sweep e rivoluzioni da un file STEP, lati a spline, filettature modellate, corpi e assiemi STL / OBJ / 3MF; STEP per altri modellatori di parti | {{ui:Apri}} legge STEP come triangoli e conserva le facce piane, i cilindri, i coni, le sfere e i tori del file per l'esportazione ([Aprire un file STEP](topic:import-step)); {{ui:Esporta}} › {{ui:STEP AP242 (solido esatto)}} scrive ogni faccia analitica in modo esatto e le mantiene come facette ([Esporta](topic:export-files#for-other-cad-programs-step)); la macro per un altro modellatore di parti scrive ancora |
| Archi veri nelle viste di disegno | Le viste e le viste in sezione sono disegnate dalle facette |
| Volumi, aree e distanze esatte | {{ui:Misura}} dà i valori del solido a facette, un po' bassi sulle parti tonde; un'impostazione **Curve** più fine li avvicina |

Alcune righe delle tabelle sottostanti suggeriscono una di queste feature come modo alternativo per ottenere altro. Questi suggerimenti valgono quando tornerà disponibile un kernel esatto.

## Feature

| Non ancora implementato | Invece, oggi |
|---|---|
| Raccordi di faccia, raccordi a tutto tondo, raccordi con raggi fissati in punti lungo uno spigolo | {{ui:Raccordo}} costante o a variazione lineare; più feature di raccordo |
| Svuotature con spessori di parete diversi | Uno spessore di {{ui:Svuota}}; aggiungere materiale con estrusioni dove una parete deve essere più spessa |
| Sformo su facce a forma libera (spline) | {{ui:Sformo}} funziona su facce piane, cilindriche e coniche |
| Sweep attorcigliati, sweep a parete sottile e a superficie; tangenza finale nella feature Loft; un loft con una sola guida; percorsi a spline | {{ui:Sweep}} con orientamento fisso o una scala finale; un loft con due o più guide: vedi [Sweep, loft e sformo](topic:sweep-loft-draft) |
| Nervature da archi o spline; nervature cresciute squadrate rispetto allo schizzo (da una vista dall'alto); sformo sulle nervature; più nervature da uno stesso schizzo | {{ui:Nervatura}} da una catena di linee nel piano proprio della nervatura: vedi [Nervature e fazzoletti](topic:rib) |
| "Fino a" una superficie curva, "fino al successivo" che si ferma su una faccia curva | Fino a una faccia piana o a un piano di riferimento |
| Fori con doppia alesatura, filettature in pollici e per tubi, filettature coniche, uscite di filettatura e inizi di filettatura smussati | Alesatura con profondità ridotta; filettature ISO metriche e trapezoidali, convenzionali o modellate: vedi [Filettature su alberi e fori, disegnate o modellate](topic:threads) |
| Estrusioni a parete sottile | Disegnare entrambe le pareti del profilo |
| Copie di serie saltate una per una, serie di riempimento | Usare feature separate; serie lungo una curva: {{ui:Serie su percorso}} |
| Serie copiate, specchi, raccordi, smussi, svuotature e solidi importati | Copiare lo schizzo o la feature su cui sono costruiti, oppure creare una serie di essi |
| Tangenza esatta (G1) nei punti straordinari di una forma; unione delle patch di una forma in facce più grandi | Aumentare il Livello della forma: le patch approssimate diventano più piccole; vedi [Forme a forma libera con Forma](topic:form-surfaces) |
| Una forma fatta di più pezzi chiusi separati in una stessa feature; ponti tra forme | Un pezzo chiuso per feature Forma; unirli con Unisci |
| Selezionare corpi di superficie nella vista (tranne i punti di rifilatura e di patch); raccordi di superficie; annullare la rifilatura; patch G2; superfici di Gordon tangenti a vicini curvi (la tangenza a piani e a facce piane è costruita) | Sceglierli per nome nel pannello della feature; ispessire prima, poi raccordare il solido |
| Un elenco dei corpi nella cronologia; esclusione dei corpi nascosti dalle esportazioni | Rinominare e nascondere i corpi nell'elenco dei corpi del pannello della parte; eliminare o sopprimere la feature che ha creato un corpo per escluderlo |
| Una scala non uniforme che mantiene analitici cilindri e coni; scala non uniforme di superfici di offset | {{ui:Scala corpo}} rende le facce curve B-spline chiuse (entro 0.0000004 mm); una scala uniforme resta esatta |
| Unione di corpi di superficie; somme di Minkowski | Prima {{ui:Cuci}} o {{ui:Ispessisci}}, poi {{ui:Combina}} |
| Analisi delle tolleranze: catene di quote che girano angoli (cicli vettoriali 2D e 3D), sensibilità calcolate dalla geometria, Monte Carlo con altre distribuzioni, tolleranze dimensionali sulle quote di schizzo, tolleranza bonus dalla condizione del materiale | {{ui:Catena di tolleranze}} in un assieme: una direzione, caso peggiore e RSS, tolleranze digitate, dalla tolleranza generale del cartiglio o da riquadri GD&T: vedi [Catene di tolleranze](topic:tolerance-stackup) |
| Nesting: ordine di taglio e attacchi di entrata, taglio di spigoli condivisi una sola volta, parti da tenere insieme; ritagli di rotoli, magazzino condiviso tra progetti | {{ui:Nesting delle parti piane su lastre…}} con spaziatura, margini, rotazioni e direzione di laminazione: vedi [Disporre le parti piane su lastre](topic:nest-flat-parts); le lastre residue vengono conservate e usate per prime: vedi [Conservare e riusare i ritagli](topic:nest-offcuts); pianificare il taglio nel software della propria macchina |
| Lamiera: orli, sfalsamenti, flange a unghia e a contorno; flange su spigoli curvi o sulle facce di una flangia di base piegata; pieghe disegnate a schizzo; chiusure d'angolo; utensili di formatura; conversione di un solido in lamiera; lo sviluppo di una flangia di base piegata con tagli; tabelle di piega | {{ui:Flangia di base}} (una lastra o un profilo piegato), {{ui:Flangia di spigolo}} sui bordi diritti di una lastra con scarichi di piega, e lo sviluppo con un fattore K: vedi [Lamiera](topic:sheet-metal) |
| Analisi dello sformo su assiemi; ricerca della linea di divisione; analisi dello spessore della parete | {{ui:Analisi dello sformo}} sulla parte in Progettazione: vedi [Verificare lo sformo per stampaggio e fusione](topic:draft-analysis); aprire ogni parte di un assieme per verificarla |

## Schizzi

| Non ancora implementato | Invece, oggi |
|---|---|
| Ellissi, archi tangenti, coniche, spline con grado o pesi impostati (NURBS) | Spline (cubiche), archi e cerchi con relazioni di tangenza |
| Un punto su una spline (una relazione), relazioni di curvatura (G2) | Mettere il punto proprio della spline dove deve passare |
| Copie in offset di spline che seguono le modifiche successive; offset di catene con angoli acuti di spline | Fare di nuovo l'offset dopo la modifica; arrotondare prima l'angolo |
| Copie di serie che restano collegate all'originale; serie lungo una curva | Ripetere la serie dopo una modifica |
| Proiezione di spigoli circolari a forma libera o inclinati, geometria proiettata che segue la parte | Proiettare spigoli circolari diritti e paralleli, poi quotare |
| Quote guidate (di riferimento) | Leggere le dimensioni dal pannello o dai dati della parte |
| Relazioni di collinearità | Parallelismo con distanza 0 |
| Incollare in un altro programma (appunti di sistema) | Esportare DXF, STEP, STL o 3MF |
| Digitare archi, coordinate relative o polari | Digitare linee e cerchi; disegnare gli archi con lo strumento Arco |
| Selezionare geometria senza puntatore | Serve un clic o un tocco |

## Parametri e unità

| Non ancora implementato | Invece, oggi |
|---|---|
| Configurazioni che cambiano i materiali; una tabella di progetto CSV che disattiva feature | Le configurazioni impostano parametri e attivano o disattivano feature: vedi [Configurazioni e tabelle di progetto](topic:design-tables); `partcraft variants` crea configurazioni salvate per nome, con le feature disattivate incluse: vedi [Creare un pacchetto di varianti dalle configurazioni](topic:variant-pack) |
| Equazioni sui numeri nei pannelli delle feature più recenti (piano, sweep, sformo e simili) | Scriverle in uno script o con `partcraft set` ([Script e riga di comando](topic:scripts-and-cli)) |
| Una parte mostrata in pollici | Le dimensioni vengono mostrate in millimetri; digitare `2in` in una casella numerica o in un'espressione e diventa 50.8 |

## File

| Non ancora implementato | Invece, oggi |
|---|---|
| Modificare le feature proprie di un solido STEP importato (arriva senza cronologia) | Aggiungere o togliere materiale con feature proprie |
| Lettura di colori, nomi, struttura dell'assieme e PMI da STEP | Non disponibile |
| Esportazione in glTF, OBJ, IGES, Parasolid; DWG di una parte 3D (solo il pacchetto di varianti scrive un DWG: il foglio di disegno) | STL o 3MF per le mesh; STEP per i solidi; DXF per il 2D |
| Apertura di IGES, DXF o file propri di altri programmi (i file `.3dm` si aprono come un unico corpo: [Aprire un modello .3dm come corpo solido](topic:open-3dm-files)) | Chiedere STEP, oppure una mesh STL, OBJ o 3MF chiusa: [Aprire un STL, OBJ o 3MF](topic:open-meshes) |
| Struttura dell'assieme (un albero con i nomi delle parti) nello STEP esportato | Lo STEP dell'assieme è un unico composto dei solidi posizionati |
| Salvataggio in una cartella a scelta senza il download del browser | Attivare "Chiedi dove salvare ogni file prima del download" nelle impostazioni di download del browser |

## Disegni

| Non ancora implementato | Invece, oggi |
|---|---|
| Quote oltre le tre dimensioni complessive (dimensioni dei fori, posizioni, tolleranze sulle dimensioni) | Annotare il PDF, oppure esportare il DXF e quotarlo in un programma CAD 2D |
| Più di una sezione o di un dettaglio; viste allineate, interrotte e ausiliarie | Una sezione e un dettaglio per disegno |
| Testo libero, note e tabelle sul foglio (oltre ai blocchi del titolo e delle revisioni) | La nota di finitura, oppure testo aggiunto sul PDF |
| Proiezione del primo diedro, viste mobili, fogli in verticale | Terzo diedro, impaginazione automatica, fogli orizzontali A4–A0 e ANSI A–E |
| Vista in sezione dal vivo: più piani o un riquadro di sezione insieme, un contorno attorno al taglio, salvataggio della sezione nel file | Un piano alla volta da {{ui:Viste}} › {{ui:Vista in sezione}}; vedi [Guardare dentro con una vista in sezione](topic:section-view) |
| Assiemi con più viste, quote o palloncini che si possono spostare | Una vista isometrica (o esplosa) con palloncini automatici ed elenco delle parti |
| Copia e incolla di simboli GD&T e di finitura | Inserire ciascuno con Datum, Riquadro o Finitura |
| Manuali: file STEP in {{ui:Da un altro file…}} di Illustrate, un modello passato direttamente da ModelCraft o BimCraft, immagini alla qualità del path tracer, 3D interattivo in un PDF | Aprire lo STEP in Progettazione e avviare il manuale da {{ui:Dalla parte aperta}}; salvare il modello come glTF (.glb); immagini PNG della vista 3D; il file 3D interattivo: vedi [Avviare un manuale in Illustrate](topic:illustrate) |

## Assiemi

| Non ancora implementato | Invece, oggi |
|---|---|
| Giunti a ingranaggio, a cremagliera, a camma e a vite; giunto sferico limitato a un cono; giunti su facce curve o tra punti | Giunti rigidi, rotoidali, prismatici, cilindrici, planari, sferici e a perno in asola su facce piane, ciascuno con i propri limiti: vedi [Costruire un assieme](topic:build-assembly) |
| Passi di esplosione che ruotano le parti, e trascinamento di parti che i giunti posizionano | Passi di esplosione diritti; rimuovere un giunto per spostare una parte a mano |
| Sottoassiemi | Un solo livello di parti |
| Ingranaggi, camme, contatti | Non disponibile |

## Produzione

| Non ancora implementato | Invece, oggi |
|---|---|
| Sgrossatura 3D di facce curve, sgrossatura adattiva 3D, lavorazione dei residui; finitura waterline, a matita, radiale e a spirale; passate adattive scritte come archi | Faccia, tasca, adattiva 2D, profilo, foratura e smusso a 2.5 assi: vedi [Creare percorsi utensile e G-code](topic:manufacture); finitura Parallela e Scallop di tutto il modello: vedi [Finitura 3D](topic:finish-3d) |
| Percorsi a 4 e 5 assi, tornitura, tastatura | Impostare un lato alla volta con l'asse utensile nella scheda Setup |
| Controllo delle collisioni di portautensile e gambo | Osservare gli avvisi sulla lunghezza dei taglienti e controllare nel simulatore del proprio controllo |
| Tastatura, cicli di vita utensile e sottoprogrammi; codici di asse 4 e 5 e di tornio in un post; caricamento di file post di altri programmi | Scrivere o modificare un post nel formato proprio di PartCraft: vedi [Post-processori modificabili](topic:post-processors) |
| G-code in pollici (G20) | Solo millimetri (G21) |

## Simulazione e progettazione generativa

| Non ancora implementato | Invece, oggi |
|---|---|
| Studi non lineari: snervamento, grandi deformazioni, contatto tra parti, fatica | Statica lineare e frequenze naturali: vedi [Verificare tensione e deformazione](topic:simulation); mantenere il fattore di sicurezza ben sopra 1 |
| Instabilità non lineare (imperfezioni, post-instabilità, scatto) | Carichi di instabilità lineari con un margine ampio: vedi [Calore, tensione termica e instabilità](topic:thermal-and-buckling) |
| Irraggiamento tra facce (fattori di vista), resistenza di contatto, materiali dipendenti dalla temperatura, inerzia nella tensione termica (onde d'urto termiche) | Irraggiamento verso l'ambiente, tensione termica stazionaria o quasi statica nel tempo, proprietà costanti: vedi [Calore, tensione termica e instabilità](topic:thermal-and-buckling) |
| Raffinamento automatico per il calore transitorio e per gli studi con carico termico; rendere la mesh più grossolana dove l'errore è piccolo; un obiettivo su una grandezza locale (la tensione di picco in un punto) | **Raffina automaticamente** per studi statici, di instabilità, di frequenza naturale e termici stazionari, sull'errore su tutta la parte: vedi [Verificare tensione e deformazione](topic:simulation); altrimenti ridurre la dimensione dell'elemento |
| Carichi su cuscinetti e bulloni, forze remote, momenti, molle, spostamenti imposti | Forze e pressioni su facce, gravità; facce fisse e senza attrito |
| Simulazione di assiemi; materiali che variano con la direzione (strati stampati, compositi) | Una parte, un materiale isotropo |
| Più thread del solutore per studi tetraedrici, trasmissione del calore e progettazione generativa; thread su una pagina non isolata cross-origin | Gli studi voxel, l'instabilità, la tensione nel tempo e il flusso laminare usano i thread dove la pagina lo permette: vedi [Impostazioni di PartCraft](topic:settings) |
| Flusso turbolento con precisione di progetto (il modello Spalart–Allmaras è inserito come sperimentale: attrito nei tubi più alto dal 30 al 34 %, riattacco dopo un gradino all'indietro più corto dal 21 al 39 %; previsto: celle più fini vicino alle pareti), calore nel flusso, flusso non stazionario (accurato nel tempo), superfici libere, fluidi non newtoniani, parti rotanti | Flusso laminare, stazionario, isotermo di un fluido newtoniano, oppure il modello turbolento sperimentale per andamenti qualitativi: vedi [Simulare il flusso di fluidi](topic:flow-simulation); il pannello avverte quando il numero di Reynolds supera il regime laminare |
| Limiti di tensione e regole di produzione (sbalzi, direzioni di fresatura) nella progettazione generativa; più materiali in una forma | Forma più rigida per un volume; verificare il risultato in Simulazione: vedi [Far crescere una forma dai carichi](topic:generative-design) |
| Un risultato come solido modificabile (liscio, parametrico) | STL, STEP a facce o una parte con il risultato come solido importato a facce |
| Progettazione di macchine elettriche: un rotore che gira in uno statore, coppia rispetto all'angolo, acciaio saturante, magneti che perdono forza oltre il loro ginocchio, correnti parassite e perdite nel ferro e nel rame; campi magnetici in 3D o su mesh curve | Magnetostatica lineare 2D su una griglia nella libreria di analisi: bobine, ferro, magneti permanenti sulla loro retta di recupero, traferri, induttanza e trazione: vedi [Campi magnetici in 2D](topic:magnetic-fields-2d) |

## Script

| Non ancora implementato | Invece, oggi |
|---|---|
| Guida al passaggio del mouse, punti di interruzione e passo passo nell'editor di script | Trova, comprimi e completa sono disponibili (vedi [Scrivere ed eseguire script](topic:craftscript)); per il resto, il proprio editor: {{ui:Salva}} e {{ui:Apri}} nel gruppo Script spostano gli script dentro e fuori; le funzioni integrate sono elencate in [Il linguaggio CraftScript](topic:craftscript-language) |
| Punti di interruzione e passo passo nello script | `disp` e `fprintf` lungo il percorso; {{key:Mod+Enter}} esegue poche righe selezionate alla volta |
| Grafici e campi che lo script mostra disegnati nell'area Progettazione; script che modificano i parametri della parte | Compaiono nell'area Script; gli script leggono i parametri con `param` (vedi [Scrivere ed eseguire script](topic:craftscript)) e li modificano nella scheda {{ui:Parametri}} |
| Immagini e tabelle affiancate ai grafici; modifica di un grafico (zoom, limiti degli assi) prima di salvarlo | Affiancati mostra i grafici; salvare un grafico come PNG, SVG o CSV e completarlo altrove |
| numpy e altri pacchetti Python; Python offline; ripiegamento del codice Python nell'editor; Pascal Script | La libreria standard di Python, CraftScript e Lua: vedi [Script in Python](topic:craftscript-python) |
| Passare funzioni Lua alle funzioni integrate; chiamare una funzione di libreria da Lua con un nome costruito durante l'esecuzione dello script | Scrivere il nome della funzione di libreria nello script (`cs.static_tet(…)`), oppure chiamarla da uno script CraftScript |

## L'app

| Non ancora implementato | Invece, oggi |
|---|---|
| Salvataggio nel cloud, condivisione e cronologia delle versioni | Non ancora disponibile. Salvare i file sul proprio computer e conservare le versioni con un nome |
| PartCraft come app installata su iPad e iPhone | Usare PartCraft nel browser del dispositivo; su Android e su desktop funziona anche in CadCraft Studio (getcadcraft.com/download) |
| Menu contestuali (clic destro) | Barra degli strumenti e pannello destro |
| Lavoro completamente offline da un avvio pulito | Solo quando l'app è stata salvata per l'uso offline: vedi [Lavorare offline](common:offline) |

Segnalare ciò che manca di più tramite la pagina di supporto del sito: orienta ciò che verrà dopo.

## Engineer (generatori e campi)

| Non ancora implementato | Invece, oggi |
|---|---|
| Collettori, bocchelli e raccordi sullo scambiatore di calore generato; curve di temperatura per la resistenza dei materiali; perdite nei raccordi a T del collettore | I generatori costruiscono il nucleo e i tubi; aggiungere i raccordi in Progettazione; usare i valori del materiale a temperatura ambiente con un fattore di sicurezza |
| Aggiunta di generatori dalla directory dei componenti aggiuntivi con un clic | {{ui:Apri}} nell'area Engineer aggiunge un generatore da un file |
| Un file di campo più fine della dimensione voxel propria del generatore; lettura di file `.vdb` | Salvare un campo più fine da uno script; `.vdb` viene scritto, non letto |
| Calcoli di codice per recipienti in pressione | Le classiche formule per pareti sottili e spesse, con il fattore di sicurezza scelto; non un margine di codice |
| Generatori per gli altri programmi | Solo PartCraft in questa versione |
