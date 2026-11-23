---
title: Novità della 0.9 (precedente)
summary: PartCraft 0.9 aggiunge raccordi tra facce e ispessimento in solidi, assiemi di migliaia di pezzi, un archivio Documenti con revisioni, un add-on Solid FEM per la tensione, dieci metodi per gli archi, sezioni UK in acciaio, una fase di Stampa e add-on per la stampa a resina.
keywords: novità 0.9, versione precedente, note di rilascio, changelog, 0.9, raccordo tra facce, rolling ball, raccordo di più spigoli, ispessisci, solido da superfici, step shell, solido iges, raccordi da scansione, assieme grande, visualizzazione leggera, 20000 pezzi, documenti, archivio, check-out, revisione, rilascio, dove usato, collegamento rhino, grasshopper, 3dm, cursori, officina, coda di lavoro, solid fem, elementi finiti, von mises, frequenza naturale, metodi per archi, sezioni UK, fase di stampa, resina, goo, ctb, appoggia piatto, novità, modifiche, 0.8, 0.8.1, versione, nuove funzioni, analisi dal vivo, aggiorna mentre modifico, cosa cede per primo, fattore di carico, non lineare, snervamento, deformazione plastica, contatto, calculix, studio di moto, gioco, superfici, nurbs, rendi liscia, scafo, zebra, engineer, generatore, corpo generato, schizzo da una foto, scala per la stampa, dividi per la stampa, ritiro, fogli annidati, g-code, disegno, quota dei fori, assistente, mcp, lingue, righe della barra degli strumenti
from: 1dafd7c8
---

Ecco cosa è cambiato in PartCraft 0.9, rispetto alla 0.8.1. Le superfici a forma libera ora si chiudono in solidi, gli assiemi di migliaia di pezzi restano utilizzabili, un archivio Documenti conserva le revisioni e un add-on Solid FEM verifica la tensione in un pezzo. Ogni voce indica dove trovarla.

## Novità nella 0.9.1

- **Esportazione STEP esatta.** {{ui:Esporta}} › {{ui:STEP AP242 (solido esatto)}} e {{ui:STEP AP214 (solido esatto)}} ora funzionano. Fori, sporgenze, raccordi, coni, sfere e tori sono scritti sulle loro vere superfici con cerchi veri come spigoli, così un altro programma CAD o CAM può riconoscere un foro come foro. I lati spline, le filettature modellate e le mesh importate restano facce piane (facette) nello stesso solido. Vedi [Esportare per la stampa, STEP e DXF](topic:export-files#for-other-cad-programs-step).
- **STEP dentro, STEP esatto fuori.** Un file STEP aperto mantiene le proprie facce piane, cilindri, coni, sfere e tori, così {{ui:Esporta}} › {{ui:STEP AP242 (solido esatto)}} li riscrive come vere superfici invece che come facette: una trave di un fornitore con fori per bulloni esce con le stesse facce con cui è entrata, più ciò che vi si è tagliato. Le facce spline, a sweep e a rivoluzione del file restano facette, e così i corpi da STL, OBJ e 3MF. Riaprire il file STEP per un pezzo salvato in precedenza. Vedi [Aprire un file STEP e costruirci sopra](topic:import-step).
- **Cerchi veri nel DXF della faccia.** {{ui:Esporta}} › {{ui:DXF dello schizzo o della faccia piana}}, con una faccia piana selezionata, ora scrive i fori tondi come cerchi, con centro e raggio propri del foro, per un tavolo laser, plasma o a getto d'acqua. Gli altri spigoli tondi restano facette.
- **STEP esatto per l'officina.** In {{ui:Produzione}}, {{ui:STEP esatto (coordinate di lavoro)}} scrive il pezzo con l'origine nell'origine pezzo dell'impostazione e Z lungo l'asse utensile, le coordinate che usa il G-code. Vedi [Creare percorsi utensile e G-code](topic:manufacture#exact-step-for-the-shop).

## Novità

### Superfici e solidi

- **Raccordo tra facce.** Scegliere {{ui:Superfici}} nel campo {{ui:Area di lavoro}}, poi {{ui:Raccordo tra facce}}. Selezionare le due facce di un solido, digitare il raggio ({{ui:Raggio all'estremità (mm, 0 = uguale)}} per un raggio che cambia lungo lo spigolo). La riga del risultato dice quanto il raccordo si discosta dalla sfera rotolante ideale, e un raggio che non si adatta viene rifiutato con la faccia indicata. {{ui:Raccordo di più spigoli}} arrotonda molti spigoli in un solo passo; spuntare {{ui:Angoli (pezzo di sfera dove se ne incontrano tre)}} per un angolo sferico dove si incontrano tre spigoli arrotondati di facce piane. Vedi [Superfici a forma libera (NURBS)](topic:nurbs-surfaces).
- **Ispessire in un solido.** {{ui:Dai spessore e crea un solido}} nella stessa area di lavoro dà uno spessore a una superficie; {{ui:Lato opposto}} la fa crescere dall'altro lato. Una piega o un'auto-intersezione viene rifiutata con indicazione della superficie e del punto.
- **Solidi da superfici.** Le superfici rifilate possono essere unite con unione, sottrazione e intersezione e fissate nel pezzo come un unico passo di annullamento. STEP scrive un solido come un unico guscio chiuso e IGES come un solido; entrambi vengono riletti come solido. Se le facce non si accoppiano spigolo per spigolo, il file riceve facce separate e la riga di stato lo dice. I solidi si possono creare anche nell'editor dei nodi; vedi [Editor dei nodi](topic:nodes).
- **Raccordi di bordo e variabili nelle scansioni.** Quando si adattano superfici a una scansione, si cercano anche raccordi di bordo (tori) e raccordi a raggio variabile lungo uno spigolo abbastanza diritto, e sono elencati con il loro raggio. È stato provato solo su scansioni fittizie.

### Assiemi, documenti e collegamenti

- **Assiemi grandi.** I pezzi che sono copie condividono una mesh, e {{ui:Viste}} › {{ui:Visualizzazione leggera}} disegna dei box perché la vista resti fluida (si attiva da sola per assiemi molto grandi; la selezione e i giunti usano comunque i pezzi reali). L'albero dei pezzi mostra le prime righe e un pulsante {{ui:Mostra altri 700}} per le restanti. I file di assieme possono contenere fino a 50.000 istanze e 100.000 giunti. Vedi [Costruire un assieme](topic:build-assembly).
- **Documenti.** {{ui:Documenti…}} nel gruppo **File** apre una finestra sopra una cartella di progetto: check-out e check-in, lettere di revisione, stati (in lavorazione, per revisione, rilasciato, obsoleto), cronologia, dove usato e distinta base. Vedi [Documenti e revisioni (archivio)](topic:documents-walkthrough).
- **Collegamento Rhino dal vivo.** Uno script, `cadcraft_link.py`, osserva un documento di Rhino o Grasshopper e invia in PartCraft solo ciò che è cambiato; lì una funzione importata si ricostruisce sulla nuova forma. Il collegamento va in un solo verso e richiede Studio. Vedi [Collegamento 3dm dal vivo](topic:live-3dm-link).
- **Vedere i cursori degli altri.** In una sessione condivisa il cursore di ciascuno appare con il suo nome e la funzione selezionata. Vedi [Lavorare dal vivo con altri](topic:work-live).
- **Officina.** Attivare l'add-on Officina in {{ui:Impostazioni}} › {{ui:Add-on}}. Dopo aver generato un programma in {{ui:Produzione}}, la sua scheda può {{ui:Aggiungi alla coda di lavoro}} oppure {{ui:Salva come file di lavoro}}. Non invia né avvia mai una macchina.

### Analisi e pezzi

- **Add-on Solid FEM.** Attivare {{ui:Solid FEM}} in {{ui:Impostazioni}} › {{ui:Add-on}} (è disattivato finché non lo si fa) e compare una scheda {{ui:Solid FEM}} nel pannello destro. {{ui:Genera mesh del pezzo}}, selezionare le facce fisse e i carichi nella vista 3D, {{ui:Risolvi}}, e disegnare lo spostamento, la tensione di von Mises o una forma modale con {{ui:Mostra sul modello}}. Vedi [Solid FEM: verifica della tensione](topic:solid-fem-check).
- **Arco negli schizzi, in dieci modi.** La freccia accanto a {{ui:Arco}} nella barra dello schizzo elenca 3 punti, Inizio Centro Fine, Inizio Centro Angolo, Inizio Centro Lunghezza, Inizio Fine Angolo, Inizio Fine Direzione, Inizio Fine Raggio, Centro Inizio Fine, Centro Inizio Angolo, Centro Inizio Lunghezza e Continua. Vedi [Disegnare un arco con dieci metodi](topic:sketch-arc-methods).
- **Misure di acciaio UK.** Le strutture saldate possono usare 976 profili UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); digitare una misura come `305x165x40 UB`. Vedi [Elementi strutturali](topic:structural-members).

### Stampa

- **Fase di stampa.** Il pulsante {{ui:Fase di stampa}} nella barra degli strumenti (add-on 3D Print, attivo per impostazione predefinita) mette i corpi del pezzo su un piano tratteggiato: {{ui:Stendi piana}}, {{ui:Ruota di 90°}}, {{ui:Disponi sul piano}}, {{ui:Adatta tutto sul piano}}, {{ui:Anteprima degli strati}}, poi {{ui:Invia alla stampante 3D}} via USB, Klipper (Moonraker), OctoPrint o PrusaLink. Non si invia nulla finché non si conferma, e il pezzo non viene mai modificato. Per un file STL o 3MF, vedi [Preparare un pezzo per la stampa 3D](topic:print-3d).
- **Stampa a resina.** Add-on in {{ui:Impostazioni}} › {{ui:Add-on}}, tutti disattivati finché non si attivano: uno slicer per resina, un test di esposizione e formati di file Elegoo GOO, SL1, Chitubox CBDDLP/CTB e Anycubic. Lo slicing viene eseguito su un thread di lavoro, così la pagina resta reattiva.

## In ogni app

- Ogni suggerimento al passaggio del mouse è un tooltip Bootstrap.
- Il suggerimento di avvio ha un pulsante di chiusura; resta chiuso.
- La riga di schede di un pannello che non entra scorre di lato invece di essere tagliata.
- La scheda del browser mostra il nome del documento aperto prima di PartCraft | CadCraft.
- {{ui:Impostazioni}} mostra il {{ui:Layout}} dell'area di lavoro come menu a tendina di scelte, e la casella della lingua elenca tutte le lingue della build.
- Peso e Temperatura sono tipi di unità nelle impostazioni Unità.

## Corretto

- Il menu Arco dello schizzo ora elenca ogni metodo.
- La barra degli add-on e il titolo della scheda del browser sono stati corretti il 2026-11-09.

## Limiti dichiarati

- Lo STEP esatto è stato riletto in OpenCascade (solidi validi, volumi uguali a quelli calcolati a mano). Non è ancora stato aperto in ogni programma CAD o CAM, e un assieme non viene scritto come STEP esatto.
- Nulla è stato stampato su una stampante reale. Slicing, G-code e file per resina sono stati riletti dai nostri programmi o da una stampante simulata; nessuno dei formati per resina è stato caricato su una stampante, e le dimensioni e le esposizioni delle stampanti sono valori di partenza.
- Solid FEM è lineare, isotropo ed elastico, con un materiale per pezzo, senza contatto, snervamento o instabilità. La tensione sulle facce fisse e sugli spigoli vivi dipende dalla mesh. È un ausilio di verifica, non revisionato da un ingegnere.
- I tempi per assiemi grandi provengono da un server senza GPU; un fotogramma con dettaglio completo di 20.000 pezzi richiede comunque secondi.
- I raccordi funzionano su coppie di facce; non esiste una fusione generale nei vertici né un raccordo tra facce che non si incontrano.
- Il collegamento Rhino non è mai stato eseguito dentro Rhino o Grasshopper reali. Documenti è stato provato da due programmi su una cartella, non da due persone su una condivisione di rete.
- L'adattamento di superfici a una scansione reale non ha ancora avuto una verifica manuale. Le lingue diverse dall'inglese sono bozze automatiche.
- I programmi di installazione per Windows non sono firmati digitalmente, e l'immagine disco per macOS non è notarizzata. Vedi [Risoluzione dei problemi](topic:troubleshooting).

Le modifiche precedenti sono in [Novità della 0.7](topic:whats-new-0-7).

## Precedenti: 0.8 e 0.8.1

Ecco cosa è cambiato in PartCraft 0.8 e 0.8.1, rispetto alla 0.7. La simulazione risponde mentre si modifica e indica cosa cede per primo, gli assiemi ottengono studi di moto, e nuove aree di lavoro creano superfici a forma libera e pezzi dimensionati dalla fisica. La 0.8.1 è una piccola versione di correzione.

### Novità

**Simulazione**

- **Aggiorna mentre modifico.** Spuntare {{ui:Aggiorna mentre modifico}} nel blocco Risolvi e le risposte seguono le modifiche. Cambiare una quota, un carico o il materiale e compare subito una risposta rapida, calcolata con elementi quattro volte più grandi; quando ci si ferma per circa un secondo, la risposta raffinata dello studio la sostituisce. I risultati indicano quale si sta guardando. Su una mensola in acciaio la risposta rapida era entro l'1 % per la freccia e circa il 4 % per la tensione rispetto a quella raffinata. Vedi [Verificare tensione e deformazione](topic:simulation#update-while-you-edit-live).
- **Cosa cede per primo.** Per uno studio statico o di instabilità, {{ui:Cosa cede per primo?}} nel blocco **Rompilo** scala i carichi finché il pezzo cede. Elenca, dal peggiore, il fattore di carico allo snervamento iniziale (con un segno rosso dove la tensione è massima) e il fattore di carico all'instabilità. Un fattore sotto 1 significa che il pezzo cede già con il carico applicato, e Problemi mostra un errore. I fattori derivano da uno studio lineare, quindi valgono quanto esso. Vedi [Verificare tensione e deformazione](topic:simulation#find-out-what-breaks-first-break-it).
- **Snervamento e contatto.** Altri due tipi di studio: uno non lineare in cui il materiale segue la sua retta fino alla tensione di snervamento e poi una pendenza più piatta, con la deformazione plastica tracciata, e uno di contatto in cui pezzi separati si spingono l'un l'altro (senza attrito) o restano incollati (vincolati). Un passo di carico che non si stabilizza, o pezzi che penetrano troppo l'uno nell'altro, compaiono nel pannello Problemi. Attrito, grandi scorrimenti, grandi rotazioni, grandi deformazioni e fatica non sono risolti. Vedi [Verificare tensione e deformazione](topic:simulation#yielding-and-contact-nonlinear-studies).
- **File per CalculiX.** {{ui:Esporta}} › {{ui:File CalculiX (.inp)}} salva lo studio per CalculiX, un programma separato che si installa e si esegue da sé; {{ui:Esporta}} › {{ui:Risultati CalculiX (.frd)}} rilegge il suo file dei risultati sulla stessa mesh. PartCraft non avvia mai quel programma, e lo segnala se il pezzo è cambiato dopo il salvataggio del file.

**Assiemi**

- **Studi di moto.** {{ui:Assieme}} › {{ui:Moto}} comanda il valore di un giunto nel tempo che si indica (velocità costante, addolcita, sinusoidale, o andata e ritorno), posiziona l'assieme a ogni passo con i suoi giunti e i suoi anelli chiusi, e riporta le interferenze e quanto si avvicinano i pezzi. {{ui:Aggiungi un punto}} traccia la posizione, la velocità e l'accelerazione di un punto, il valore del giunto e il gioco nel tempo; {{ui:Salva CSV}} e {{ui:Salva grafico}} li scrivono. Dopo {{ui:Esegui}}, la voce Scorri lungo la barra di esecuzione sposta l'assieme a qualsiasi passo. Le impostazioni dello studio sono salvate nel file dell'assieme. Velocità e accelerazione derivano dalle posizioni registrate, quindi usare più passi se un picco stretto risulta basso. Vedi [Verificare un assieme per interferenze e moto](topic:check-assembly#a-motion-study).

**Superfici e pezzi dalla fisica**

- **Un'area di lavoro Superfici.** Scegliere {{ui:Superfici}} nel campo {{ui:Area di lavoro}} per curve e superfici NURBS accanto al pezzo: {{ui:Curva}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Corrispondenza}} e {{ui:Zebra}}, con la continuità (G0, G1 o G2) misurata sulle superfici esatte e uno spigolo peggiore del richiesto elencato in Problemi con una correzione di Corrispondenza. {{ui:Rendi liscia}} misura le linee di scafo per flessi e salti di curvatura e ricostruisce quelle non lisce entro la tolleranza impostata. Le superfici sono salvate nel file del pezzo e non modificano le funzioni del pezzo. Vedi [Superfici a forma libera (NURBS)](topic:nurbs-surfaces).
- **L'area di lavoro Engineer.** Scegliere {{ui:Engineer}} nel selettore dell'area di lavoro, scegliere un generatore e fare clic su {{ui:Nuovo}}: uno script dimensiona un pezzo in base a ciò che deve fare (calore da trasferire, portate, pressione, materiale, processo di stampa) con formule classiche, lo costruisce, poi restituisce i valori usati con le loro fonti, i controlli di fabbricazione e i file per gli strumenti di analisi. Gli stessi dati di ingresso danno lo stesso pezzo su qualsiasi computer. Il generatore è conservato nel pezzo, e aprire un pezzo non esegue mai uno script. Vedi [Pezzi dalla fisica: generatori](topic:engineer-generators) e [Scrivere un generatore](topic:write-a-generator).

**Schizzi, disegni e fabbricazione**

- **Uno schizzo da una foto.** {{ui:Feature}} › {{ui:Altro}} › {{ui:Schizzo da una foto…}} traccia l'immagine di un pezzo piatto su fondo uniforme (contorno e fori) oppure un disegno a penna in linee, archi e cerchi. Si indica una lunghezza, si controlla l'anteprima e si crea lo schizzo. Vedi [Basi dello schizzo](topic:sketch-basics#a-sketch-from-a-photo).
- **Scala e divisione per la stampa.** {{ui:Esporta}} › {{ui:Scala per la stampa (STL o 3MF)…}} scala per asse senza modificare il pezzo, per esempio con una tolleranza di ritiro. {{ui:Esporta}} › {{ui:Dividi per la stampa (zip di pezzi)…}} taglia un pezzo più grande del piano in pezzi numerati uniti da perni, chiavette, code di rondine, fori per spine o tasche per magneti. Vedi [Stampa 3D](topic:print-3d).
- **Lastre annidate in G-code.** {{ui:Esporta}} › {{ui:Fogli annidati in G-code}} legge un DXF annidato e crea un programma per foglio con il post scelto: prima fori e ritagli, poi i contorni. Non pianifica gli attacchi, l'ordine di taglio né gli spigoli condivisi. Vedi [Nesting delle parti piane su lastre](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Disegni che fanno di più da soli.** {{ui:Foglio}} › {{ui:Automatico}} sceglie il foglio di formato A più piccolo che contiene le viste alla scala standard più grande fino a 1:1. {{ui:Quota i fori}} mette un segno di centro su ogni foro, un riferimento per misura e le posizioni dall'angolo in basso a sinistra della vista. Vedi [Creare un disegno](topic:drawing-pdf).

**In ogni app**

- **Lingue.** Le app sono disponibili in 54 lingue. Quelle diverse dall'inglese sono bozze automatiche finché un madrelingua non le legge.
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} sceglie A capo (come prima), 2 righe o 1 riga; una barra che non entra scorre di lato. La barra Feature di PartCraft mostra in grande lo strumento più usato e nasconde le varianti dietro un pulsante diviso.
- **Collegare un assistente AI.** Studio è il punto di accesso per collegare un assistente AI proprio a tutte e otto le app, con permesso di sola lettura, suggerimento o modifica per ogni app. Un assistente collegato può dimensionare un pezzo a partire da una frase, come una staffa per un carico, mostrare il ragionamento e ogni verifica, e costruirlo; segnala ciò che non ha verificato (concentrazione di tensione, fatica, scorrimento nelle plastiche). Vedi [Usare PartCraft con un assistente AI](topic:use-with-ai-assistants).

### Corretto nella 0.8.1

- **Blocco del cursore a schermo intero.** La selezione al passaggio del mouse è ora limitata nella frequenza. La causa è la nostra interpretazione migliore e non è stata confermata con chi l'ha segnalata.
- **Lingua durante l'esecuzione.** Studio e le edizioni impacchettate possono cambiare lingua mentre sono in esecuzione; prima erano solo in inglese. Non è ancora stato provato su ogni piattaforma: segnalare se la lingua non cambia.

### Non ancora in questa versione

- Il collegamento dell'assistente AI non è completo: il collegamento con un clic in Studio, il connettore ospitato per l'AI nel browser, una propria chiave API in Studio e il pacchetto MCP pubblicato non sono garantiti. Studio non ha un'AI propria.
- Studio non è firmato digitalmente: Windows può avvisare, e macOS chiede di fare clic destro e poi Apri. Vedi [Risoluzione dei problemi](topic:troubleshooting).
- Le catene di tolleranze sono ancora a una direzione: vedi [Catene di tolleranze](topic:tolerance-stackup).
- Il resto è elencato in [Cosa non è ancora implementato](topic:not-built-yet).

Le modifiche precedenti sono in [Novità della 0.7](topic:whats-new-0-7).
