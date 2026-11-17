---
title: Novità della 0.9
summary: PartCraft 0.9 aggiunge raccordi tra facce e ispessimento in solidi, assiemi di migliaia di parti, un archivio di documenti con revisioni, un componente aggiuntivo Solid FEM per lo sforzo, dieci metodi per gli archi, misure di acciaio britanniche, un'area di stampa e componenti aggiuntivi per la stampa a resina.
keywords: novità, what's new, note di rilascio, changelog, 0.9, raccordo tra facce, rotolamento di sfera, raccordo di più spigoli, ispessimento, solido da superfici, step shell, iges solid, raccordi nelle scansioni, assieme grande, visualizzazione leggera, 20000 parti, documenti, archivio, check out, revisione, rilascio, dove è usato, collegamento rhino, grasshopper, 3dm, cursori, piano di fabbrica, coda di lavoro, solid fem, elementi finiti, von mises, frequenza naturale, metodi dell'arco, arco a 3 punti, profili di acciaio britannici, blue book, area di stampa, resina, goo, ctb, piano, stendi piana, novità, changelog, modifiche, 0.8, 0.8.1, versione, nuove funzioni, analisi dal vivo, aggiorna mentre modifico, mettilo alla prova, fattore di carico, non lineare, snervamento, deformazione plastica, contatto, calculix, studio di moto, gioco, superfici, nurbs, fair, scafo, zebra, ingegnere, generatore, corpo generato, schizzo da una foto, scala per la stampa, divisione per la stampa, ritiro, nesting, g-code, disegno, quota i fori, assistente, mcp, lingue, righe della barra degli strumenti
from: 96d9fbfa
---

Questo è ciò che è cambiato in PartCraft 0.9, rispetto alla 0.8.1. Le superfici a forma libera ora si chiudono in solidi, gli assiemi di migliaia di parti restano utilizzabili, un archivio di documenti conserva le revisioni, e un componente aggiuntivo Solid FEM verifica lo sforzo in una parte. Ogni voce dice dove trovarla.

## Novità nella 0.9.1

- **Esportazione STEP esatta.** {{ui:Esporta}} › {{ui:STEP AP242 (solido esatto)}} e {{ui:STEP AP214 (solido esatto)}} ora funzionano. Fori, sporgenze, raccordi, coni, sfere e tori vengono scritti sulle loro vere superfici, con cerchi veri come spigoli, così un altro programma CAD o CAM può riconoscere un foro come foro. I lati a spline, i filetti modellati e le mesh importate restano facce piatte nello stesso solido. Vedi [Esportazione per la stampa, STEP e DXF](topic:export-files#for-other-cad-programs-step).
- **STEP in ingresso, STEP esatto in uscita.** Uno STEP aperto conserva le sue facce piane, cilindri, coni, sfere e tori, quindi {{ui:Esporta}} › {{ui:STEP AP242 (solido esatto)}} li riscrive come vere superfici invece che come sfaccettature: una trave di un fornitore con fori per bulloni esce con le stesse facce con cui è entrata, più quello che le si è tagliato. Le superfici a spline, estruse e di rivoluzione del file restano sfaccettature, e così i corpi da STL, OBJ e 3MF. Riaprire il file STEP per una parte salvata in precedenza. Vedi [Aprire un file STEP e costruirci sopra](topic:import-step).
- **Cerchi veri nel DXF delle facce.** {{ui:Esporta}} › {{ui:DXF dello schizzo o della faccia piana}}, con una faccia piana selezionata, ora scrive i fori tondi come cerchi, con il centro e il raggio propri del foro, per un tavolo laser, plasma o a getto d'acqua. Gli altri spigoli tondi restano sfaccettature.
- **STEP esatto per l'officina.** In {{ui:Produzione}}, {{ui:STEP esatto (coordinate di lavoro)}} scrive la parte con l'origine nel punto di origine di lavoro della messa in macchina e Z lungo l'asse dell'utensile, le coordinate che usa il codice G. Vedi [Creare percorsi utensile e codice G](topic:manufacture#exact-step-for-the-shop).

## Novità

### Superfici e solidi

- **Raccordo tra facce.** Scegliere {{ui:Superfici}} nella casella {{ui:Area di lavoro}}, poi {{ui:Raccordo tra facce}}. Selezionare le due facce di un solido, digitare il raggio (e {{ui:Raggio all'estremità (mm, 0 = uguale)}} per un raggio che cambia lungo lo spigolo). La riga del risultato dice quanto il raccordo si discosta dalla sfera rotolante ideale, e un raggio che non si adatta viene rifiutato indicando la faccia. {{ui:Raccordo di più spigoli}} arrotonda molti spigoli in un solo passo; spuntare {{ui:Angoli (pezzo di sfera dove se ne incontrano tre)}} per un angolo sferico dove si incontrano tre spigoli arrotondati di facce piane. Vedi [Superfici a forma libera (NURBS)](topic:nurbs-surfaces).
- **Ispessimento in un solido.** {{ui:Dai spessore e crea un solido}} nella stessa area di lavoro dà a una superficie uno spessore; {{ui:Lato opposto}} lo fa crescere nell'altra direzione. Una piega o un incrocio su se stessa viene rifiutato, indicando superficie e punto.
- **Solidi da superfici.** Le superfici rifinite possono essere unite con unione, sottrazione e intersezione e incorporate nella parte in un solo passo di annullamento. STEP scrive un solido come un unico guscio chiuso e IGES come un solo solido; entrambi si rileggono come solido. Se le facce non si accoppiano spigolo per spigolo, il file riceve facce separate e la barra di stato lo dice. I solidi si possono creare anche nell'editor dei nodi; vedi [Editor dei nodi](topic:nodes).
- **Raccordi di bordo e variabili nelle scansioni.** Quando si adattano superfici a una scansione, i raccordi di bordo (tori) e i raccordi a raggio variabile lungo uno spigolo abbastanza rettilineo vengono cercati anche loro e elencati con il loro raggio. È stato provato solo su scansioni inventate.

### Assiemi, documenti e collegamenti

- **Assiemi grandi.** Le parti che sono copie condividono una sola mesh, e {{ui:Viste}} › {{ui:Visualizzazione leggera}} disegna box così la vista resta fluida (si attiva da sola per gli assiemi molto grandi; la selezione e i giunti usano comunque le parti vere). L'albero delle parti mostra le prime righe e un pulsante {{ui:Mostra altri 700}} per il resto. I file di assieme possono contenere fino a 50.000 istanze e 100.000 giunti. Vedi [Costruire un assieme](topic:build-assembly).
- **Documenti.** {{ui:Documenti…}} nel gruppo **File** apre una finestra di dialogo su una cartella di progetto: check out e check in, lettere di revisione, stati (in lavorazione, da rivedere, rilasciato, obsoleto), cronologia, dove è usato e distinta base. Vedi [Documenti e revisioni (l'archivio)](topic:documents-walkthrough).
- **Collegamento live con Rhino.** Uno script, `cadcraft_link.py`, osserva un documento Rhino o Grasshopper e invia in PartCraft solo ciò che è cambiato, dove una feature importata si ricostruisce sulla nuova forma. Funziona in una sola direzione e richiede Studio. Vedi [Collegamento live .3dm](topic:live-3dm-link).
- **Vedere i cursori degli altri.** In una sessione condivisa il cursore di ciascuno si mostra con il suo nome e la feature che ha selezionato. Vedi [Lavorare dal vivo con altri](topic:work-live).
- **Piano di fabbrica.** Attivare il componente aggiuntivo Piano di fabbrica in {{ui:Impostazioni}} › {{ui:Add-on}}. Dopo aver inviato un programma in {{ui:Produzione}}, la sua scheda può {{ui:Aggiungi alla coda di lavoro della fabbrica}} oppure {{ui:Salva come file di lavoro}}. Non invia né avvia mai una macchina.

### Analisi e parti

- **Componente aggiuntivo Solid FEM.** Attivare {{ui:Solid FEM}} in {{ui:Impostazioni}} › {{ui:Add-on}} (è disattivato finché non lo si attiva) e nel pannello destro compare una scheda {{ui:Solid FEM}}. {{ui:Crea la mesh della parte}}, scegliere facce fisse e carichi nella vista 3D, {{ui:Risolvi}}, e disegnare spostamento, sforzo di von Mises o una forma modale con {{ui:Mostra sul modello}}. Vedi [Solid FEM: verifica dello sforzo](topic:solid-fem-check).
- **Arco negli schizzi, in dieci modi.** La freccia accanto a {{ui:Arco}} nella barra degli strumenti dello schizzo elenca Tre punti, Inizio Centro Fine, Inizio Centro Angolo, Inizio Centro Lunghezza, Inizio Fine Angolo, Inizio Fine Direzione, Inizio Fine Raggio, Centro Inizio Fine, Centro Inizio Angolo, Centro Inizio Lunghezza e Continua. Vedi [Disegnare un arco in dieci modi](topic:sketch-arc-methods).
- **Misure britanniche di acciaio.** Le strutture saldate possono usare 976 profili britannici (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); digitare una misura come `305x165x40 UB`. Vedi [Elementi strutturali](topic:structural-members).

### Stampa

- **Area di stampa.** Il pulsante {{ui:Area di stampa}} nella barra degli strumenti (componente aggiuntivo 3D Print, attivo per impostazione predefinita) mette i corpi della parte su un piano tratteggiato: {{ui:Stendi piana}}, {{ui:Ruota di 90°}}, {{ui:Disponi sul piano}}, {{ui:Adatta tutto sul piano}}, {{ui:Anteprima strati}}, poi {{ui:Invia alla stampante 3D}} via USB, Klipper (Moonraker), OctoPrint o PrusaLink. Non si invia nulla finché non si conferma, e la parte non viene mai modificata. Per un file STL o 3MF, vedi [Preparare una parte per la stampa 3D](topic:print-3d).
- **Stampa a resina.** Componenti aggiuntivi in {{ui:Impostazioni}} › {{ui:Add-on}}, tutti disattivati finché non li si attiva: uno slicer per resina, un test di esposizione, e i formati Elegoo GOO, SL1, Chitubox CBDDLP/CTB e Anycubic. La sezionatura gira su un thread separato, quindi la pagina resta reattiva.

## In ogni app

- Ogni suggerimento al passaggio del mouse è un tooltip di Bootstrap.
- Il suggerimento d'avvio ha un pulsante di chiusura; resta chiuso.
- La riga delle schede di un pannello che non entra scorre in orizzontale invece di essere tagliata.
- La scheda del browser mostra il nome del documento aperto prima di PartCraft | CadCraft.
- {{ui:Impostazioni}} mostra l'{{ui:Layout}} dell'area di lavoro come menu a tendina, e la casella delle lingue elenca tutte le lingue della build.
- Peso e Temperatura sono tipi di unità nelle impostazioni Unità.

## Corretto

- Il menu Arco dello schizzo ora elenca tutti i metodi.
- La barra dei componenti aggiuntivi e il titolo della scheda del browser sono stati corretti il 2026-11-09.

## Limiti dichiarati

- Lo STEP esatto è stato riletto in OpenCascade (solidi validi, volumi uguali a quelli calcolati a mano). Non è ancora stato aperto in tutti i programmi CAD o CAM, e un assieme non viene scritto come STEP esatto.
- Nulla è stato stampato su una stampante reale. Sezionatura, codice G e file a resina sono stati riletti dai nostri programmi o da una stampante simulata; nessuno dei formati a resina è stato caricato su una stampante, e le dimensioni e le esposizioni delle stampanti sono solo punti di partenza.
- Solid FEM è lineare, isotropo ed elastico, con un materiale per parte, senza contatto, snervamento o instabilità. Lo sforzo nelle facce fisse e negli spigoli vivi dipende dalla mesh. È un ausilio di verifica, non revisionato da un ingegnere.
- I tempi per gli assiemi grandi vengono da un server senza GPU; un fotogramma a dettaglio pieno di 20.000 parti richiede comunque secondi.
- I raccordi funzionano su coppie di facce; non c'è una fusione generale nei vertici né un raccordo tra facce che non si toccano.
- Il collegamento con Rhino non è mai stato eseguito dentro Rhino o Grasshopper reali. Documenti è stato provato da due programmi su una cartella, non da due persone su una condivisione di rete.
- L'adattamento di superfici a una scansione reale non ha ancora avuto una verifica manuale. Le lingue diverse dall'inglese sono bozze automatiche.
- Gli installatori Windows non sono firmati digitalmente, e l'immagine disco macOS non è notarizzata. Vedi [Risoluzione dei problemi](topic:troubleshooting).

Le modifiche precedenti sono in [Novità della 0.7](topic:whats-new-0-7).

## Precedenti: 0.8 e 0.8.1

Questo è ciò che è cambiato in PartCraft 0.8 e 0.8.1, rispetto alla 0.7. La simulazione risponde mentre si modifica e dice cosa cede per primo, gli assiemi ottengono studi di moto, e nuovi spazi di lavoro creano superfici a forma libera e parti dimensionate con la fisica. La 0.8.1 è una piccola correzione.

### Novità

**Simulazione**

- **Aggiorna mentre modifico.** Spuntare {{ui:Aggiorna mentre modifico}} nel blocco Risolvi e le risposte seguono le modifiche. Cambiare una quota, un carico o il materiale e appare subito una risposta rapida, fatta con elementi quattro volte più grandi; quando ci si ferma per circa un secondo, la risposta raffinata dello studio sostituisce quella rapida. I risultati dicono quale si sta guardando. Su una mensola d'acciaio la risposta rapida era entro l'1 % sulla deflessione e circa il 4 % sullo sforzo di quella raffinata. Vedi [Verificare sforzo e deflessione](topic:simulation#update-while-you-edit-live).
- **Cosa cede per primo.** Per uno studio statico o di instabilità, {{ui:Cosa cede per primo?}} nel blocco **Mettilo alla prova** scala i carichi finché la parte cede. Elenca, dal peggiore, il fattore di carico fino al primo snervamento (con un segnalino rosso dove lo sforzo è massimo) e il fattore di carico fino all'instabilità. Un fattore sotto 1 significa che la parte cede già così caricata, e i Problemi mostrano un errore. I fattori vengono da uno studio lineare, quindi valgono quanto lo studio. Vedi [Verificare sforzo e deflessione](topic:simulation#find-out-what-breaks-first-break-it).
- **Snervamento e contatto.** Altri due tipi di studio: uno non lineare in cui il materiale segue la sua retta fino allo sforzo di snervamento e poi una pendenza più piatta, con la deformazione plastica disegnata; e uno di contatto in cui pezzi separati si spingono (senza attrito) o restano incollati (legati). Un passo di carico che non si stabilizza, o pezzi che affondano troppo l'uno nell'altro, compaiono nel pannello dei Problemi. Attrito, grandi scorrimenti, grandi rotazioni, grandi deflessioni e fatica non sono risolti. Vedi [Verificare sforzo e deflessione](topic:simulation#yielding-and-contact-nonlinear-studies).
- **File per CalculiX.** {{ui:Esporta}} › {{ui:File di input CalculiX (.inp)}} salva lo studio per CalculiX, un programma separato che si installa ed esegue da soli; {{ui:Esporta}} › {{ui:Risultati CalculiX (.frd)}} rilegge il suo file dei risultati sulla stessa mesh. PartCraft non avvia mai quel programma, e lo dice se la parte è cambiata da quando il file è stato salvato.

**Assiemi**

- **Studi di moto.** {{ui:Assieme}} › {{ui:Moto}} guida il valore di un giunto nel tempo che si indica (velocità costante, graduale, sinusoidale, o andata e ritorno), dispone l'assieme a ogni passo con i suoi giunti e anelli chiusi, e riporta cosa si urta e quanto si avvicinano le parti. {{ui:Aggiungi un punto}} traccia la posizione, la velocità e l'accelerazione di un punto, il valore del giunto e il gioco nel tempo; {{ui:Salva CSV}} e {{ui:Salva grafico}} li scrivono. Dopo {{ui:Esegui}}, Passo nella barra della corsa sposta l'assieme a qualunque passo. Le impostazioni dello studio si salvano nel file dell'assieme. Velocità e accelerazione vengono dalle posizioni registrate, quindi usare più passi se un picco netto risulta basso. Vedi [Verificare un assieme per urti e moto](topic:check-assembly#a-motion-study).

**Superfici e parti dalla fisica**

- **Un'area di lavoro Superfici.** Scegliere {{ui:Superfici}} nella casella {{ui:Area di lavoro}} per curve e superfici NURBS accanto alla parte: {{ui:Curva}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Corrispondenza}} e {{ui:Zebra}}, con la continuità (G0, G1 o G2) misurata sulle superfici esatte, e uno spigolo peggiore di quanto richiesto elencato nei Problemi con una correzione di corrispondenza. {{ui:Rendi liscia}} misura le linee di scafo per trovare flessi e salti di curvatura e ricostruisce quelle non lisce entro la propria tolleranza. Le superfici si salvano nel file della parte e non modificano le feature della parte. Vedi [Superfici a forma libera (NURBS)](topic:nurbs-surfaces).
- **L'area di lavoro Ingegnere.** Scegliere {{ui:Ingegnere}} nella casella delle aree di lavoro, scegliere un generatore e cliccare {{ui:Nuovo}}: uno script dimensiona una parte da ciò che deve fare (riscaldare per spostare, flussi, pressione, materiale, processo di stampa) con formule da manuale e la costruisce, poi restituisce i numeri usati con le loro fonti, i suoi controlli di fabbricazione e i file per i programmi di analisi. Gli stessi dati danno la stessa parte su qualunque computer. Il generatore è conservato nella parte, e aprire una parte non esegue mai uno script. Vedi [Parti dalla fisica: generatori](topic:engineer-generators) e [Scrivere un generatore](topic:write-a-generator).

**Schizzi, disegni e lavorazione**

- **Uno schizzo da una foto.** {{ui:Feature}} › {{ui:Altro}} › {{ui:Schizzo da una foto…}} traccia un'immagine di una parte piatta su un fondo semplice (contorno e fori) oppure un disegno a penna in linee, archi e cerchi. Si indica una lunghezza, si controlla l'anteprima e si crea lo schizzo. Vedi [Basi dello schizzo](topic:sketch-basics#a-sketch-from-a-photo).
- **Scala e divisione per la stampa.** {{ui:Esporta}} › {{ui:Scala per la stampa (STL o 3MF)…}} scala per asse senza modificare la parte, per esempio per un margine di ritiro. {{ui:Esporta}} › {{ui:Divisione per la stampa (zip di pezzi)…}} taglia una parte troppo grande per il piano in pezzi numerati uniti da perni, chiavette, code di rondine, fori per spine o tasche per magneti. Vedi [Stampare in 3D](topic:print-3d).
- **Nesting su lastre in G-code.** {{ui:Esporta}} › {{ui:Fogli annidati in G-code}} legge un DXF con nesting e crea un programma per lastra attraverso il post scelto: prima fori e ritagli, poi i contorni. Non pianifica gli attacchi, l'ordine di taglio né i bordi condivisi. Vedi [Disporre pezzi piani su lastre](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Disegni che fanno da soli di più.** {{ui:Foglio}} › {{ui:Automatico}} sceglie il foglio di formato A più piccolo che contiene le viste alla scala standard più grande fino a 1:1. {{ui:Quota i fori}} mette un segno di centro su ogni foro, una didascalia per misura e le posizioni a partire dall'angolo in basso a sinistra della vista. Vedi [Creare un disegno](topic:drawing-pdf).

**In ogni app**

- **Lingue.** Le app sono disponibili in 54 lingue. Quelle diverse dall'inglese sono bozze automatiche finché un madrelingua non le legge.
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} sceglie A capo (come prima), 2 righe o 1 riga; una barra che non entra scorre in orizzontale. Il nastro delle Feature di PartCraft mostra in grande lo strumento più usato e nasconde le varianti dietro un pulsante diviso.
- **Collegare la propria AI.** Studio è il centro di collegamento per un assistente proprio su tutte e otto le app, con permesso di sola lettura, suggerimento o modifica per ogni app. Un assistente collegato può dimensionare una parte da una frase, per esempio una staffa per un carico, mostrare il ragionamento e ogni controllo, e costruirla; dice ciò che non ha verificato (concentrazione di sforzi, fatica, scorrimento nelle plastiche). Vedi [Usare PartCraft con un assistente AI](topic:use-with-ai-assistants).

### Corretto nella 0.8.1

- **Blocco del cursore a schermo intero.** La selezione al passaggio del mouse ora è limitata nel tempo. La causa è la nostra migliore ipotesi e non è stata confermata con chi ha segnalato il problema.
- **Lingua a tempo di esecuzione.** Studio e le edizioni confezionate possono cambiare lingua mentre sono in esecuzione; prima erano solo in inglese. Non è ancora provato su tutte le piattaforme: segnalare se la lingua non cambia.

### Non ancora in questa versione

- Collegare la propria AI non è finito: il collegamento in un clic dentro Studio, il connettore ospitato per l'AI nel browser, la propria chiave API dentro Studio e il pacchetto MCP pubblicato non sono promessi. Studio non ha un'AI propria.
- Studio non è firmato digitalmente: Windows può avvisare, e macOS chiede clic destro e poi Apri. Vedi [Risoluzione dei problemi](topic:troubleshooting).
- Gli stack di tolleranze sono ancora in una sola direzione: vedi [Stack di tolleranze](topic:tolerance-stackup).
- Il resto è elencato in [Cosa non è ancora implementato](topic:not-built-yet).

Le modifiche precedenti sono in [Novità della 0.7](topic:whats-new-0-7).
