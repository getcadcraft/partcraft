---
title: Novità in 0.8 e 0.8.1
summary: PartCraft 0.8 aggiunge l'analisi in tempo reale mentre si modifica, il controllo Cosa cede per primo, studi di snervamento e di contatto con file deck per un risolutore esterno, studi del moto per gli assiemi, un'area di lavoro Superfici per le superfici a forma libera, parti dimensionate con la fisica nell'area Ingegneria, schizzi da una foto, esportazioni per la stampa, fogli annidati in G-code e disegni che quotano i propri fori. 0.8.1 corregge un blocco del cursore a schermo intero.
keywords: novità, cosa c'è di nuovo, note di rilascio, changelog, modifiche, 0.8, 0.8.1, versione, nuove funzionalità, analisi in tempo reale, aggiorna mentre si modifica, cosa cede per primo, fattore di carico, non lineare, snervamento, deformazione plastica, contatto, calculix, studio del moto, gioco, superfici, nurbs, rendi liscia, scafo, zebra, ingegneria, generatore, corpo generato, schizzo da una foto, scala per la stampa, dividi per la stampa, ritiro, fogli annidati, g-code, disegno, quota fori, assistente, mcp, lingue, righe della barra degli strumenti
from: 62e4dce2
---

Questo è ciò che è cambiato in PartCraft 0.8 e 0.8.1, rispetto alla 0.7. La simulazione risponde mentre si modifica e indica cosa cede per primo, gli assiemi ottengono studi del moto, e i nuovi spazi di lavoro creano superfici a forma libera e parti dimensionate con la fisica. 0.8.1 è una piccola release di correzione.

## Novità

### Simulazione

- **Aggiorna mentre modifico.** Attivare {{ui:Aggiorna mentre modifico}} nel blocco Solve e le risposte seguono le modifiche. Cambiando una quota, un carico o il materiale, appare subito una risposta rapida, calcolata con elementi quattro volte più grandi; quando ci si ferma per circa un secondo, la risposta raffinata dello studio sostituisce quella rapida. I risultati indicano quale delle due si sta guardando. Su una mensola in acciaio la risposta rapida era entro l'1 % sulla freccia e circa il 4 % sullo sforzo rispetto a quella raffinata. Vedere [Verificare sforzo e freccia](topic:simulation#update-while-you-edit-live).
- **Cosa cede per primo.** Per uno studio statico o di instabilità, {{ui:Cosa cede per primo?}} nel blocco **Rompilo** scala i carichi finché la parte cede. Elenca, dal peggiore, il fattore di carico allo snervamento (con un marcatore rosso dove lo sforzo raggiunge il picco) e il fattore di carico all'instabilità. Un fattore inferiore a 1 significa che la parte cede già con il carico applicato, e il pannello Problemi mostra un errore. I fattori derivano da uno studio lineare, quindi valgono quanto questo. Vedere [Verificare sforzo e freccia](topic:simulation#find-out-what-breaks-first-break-it).
- **Snervamento e contatto.** Due tipi di studio in più: uno non lineare, in cui il materiale segue la sua retta fino alla tensione di snervamento e poi una pendenza più bassa, con la deformazione plastica tracciata; e uno di contatto, in cui pezzi separati si spingono l'uno contro l'altro (senza attrito) oppure restano incollati (vincolati). Uno step di carico che non si stabilizza, o pezzi che penetrano troppo l'uno nell'altro, compaiono nel pannello Problemi. Attrito, grandi scorrimenti, grandi rotazioni, grandi spostamenti e fatica non sono risolti. Vedere [Verificare sforzo e freccia](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Deck per CalculiX.** {{ui:Esporta}} › {{ui:Deck per CalculiX (.inp)}} salva lo studio per CalculiX, un programma separato da installare ed eseguire autonomamente; {{ui:Esporta}} › {{ui:Risultati di CalculiX (.frd)}} riporta il suo file dei risultati sulla stessa mesh. PartCraft non avvia mai quel programma e lo segnala se la parte è cambiata dopo il salvataggio del deck.

### Assiemi

- **Studi del moto.** {{ui:Assieme}} › {{ui:Moto}} pilota il valore di un giunto su un tempo impostato (velocità costante, graduale, sinusoidale, oppure andata e ritorno), posiziona l'assieme a ogni passo con i suoi giunti e gli anelli chiusi, e riporta quali parti interferiscono e quanto si avvicinano. {{ui:Aggiungi un punto}} traccia nel tempo posizione, velocità e accelerazione di un punto, il valore del giunto e il gioco; {{ui:Salva CSV}} e {{ui:Salva grafico}} li esportano. Dopo {{ui:Esegui}}, la barra Passo dell'esecuzione sposta l'assieme a qualsiasi passo. Le impostazioni dello studio sono salvate nel file dell'assieme. Velocità e accelerazione derivano dalle posizioni registrate, quindi conviene usare più passi se un picco netto risulta basso. Vedere [Verificare un assieme per interferenze e moto](topic:check-assembly#a-motion-study).

### Superfici e parti dalla fisica

- **Un'area di lavoro Superfici.** Scegliere {{ui:Superfici}} nella casella {{ui:Area di lavoro}} per avere curve e superfici NURBS accanto alla parte: {{ui:Curva}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Corrispondenza}} e {{ui:Zebra}}, con la continuità (G0, G1 o G2) misurata sulle superfici esatte e uno spigolo peggiore di quanto richiesto elencato in Problemi con una correzione di Corrispondenza. {{ui:Rendi liscia}} misura le linee di scafo per flessi e salti di curvatura e ricostruisce quelle non lisce entro la tolleranza impostata. Le superfici sono salvate nel file della parte e non modificano le feature della parte. Vedere [Superfici a forma libera (NURBS)](topic:nurbs-surfaces).
- **L'area di lavoro Ingegneria.** Scegliere {{ui:Ingegneria}} nel selettore delle aree di lavoro, selezionare un generatore e fare clic su {{ui:Nuovo}}: uno script dimensiona una parte in base a ciò che deve fare (calore da trasferire, portate, pressione, materiale, processo di stampa) con formule dei testi di riferimento e la costruisce, poi restituisce i valori usati con le relative fonti, i controlli di produzione e i file per gli strumenti di analisi. Gli stessi dati producono la stessa parte su qualsiasi computer. Il generatore resta nella parte, e aprire una parte non esegue mai uno script. Vedere [Parti dalla fisica: generatori](topic:engineer-generators) e [Scrivere un generatore](topic:write-a-generator).

### Schizzi, disegni e realizzazione

- **Uno schizzo da una foto.** {{ui:Feature}} › {{ui:Altro}} › {{ui:Schizzo da una foto…}} traccia l'immagine di una parte piana su uno sfondo uniforme (contorno e fori) oppure un disegno a penna in linee, archi e cerchi. Si indica una sola misura, si controlla l'anteprima e si crea lo schizzo. Vedere [Nozioni base sugli schizzi](topic:sketch-basics#a-sketch-from-a-photo).
- **Scala e dividi per la stampa.** {{ui:Esporta}} › {{ui:Scala per la stampa (STL o 3MF)…}} scala per asse senza modificare la parte, ad esempio per un margine di ritiro. {{ui:Esporta}} › {{ui:Dividi per la stampa (zip di pezzi)…}} divide una parte troppo grande per il piano di stampa in pezzi numerati uniti da perni, chiavette, code di rondine, fori per spine o tasche per magneti. Vedere [Stampare in 3D](topic:print-3d).
- **Fogli annidati in G-code.** {{ui:Esporta}} › {{ui:Fogli annidati in G-code}} legge un DXF annidato e crea un programma per foglio tramite il post-processore scelto: prima fori e ritagli, poi i contorni. Non pianifica gli attacchi, l'ordine di taglio né i bordi condivisi. Vedere [Annidare parti piane sui fogli](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Disegni che fanno più da soli.** {{ui:Foglio}} › {{ui:Automatico}} sceglie il formato A più piccolo che contiene le viste alla scala standard più grande fino a 1:1. {{ui:Quota i fori}} mette un segno di centro su ogni foro, un callout per dimensione e le posizioni a partire dall'angolo in basso a sinistra della vista. Vedere [Creare un disegno](topic:drawing-pdf).

### In ogni applicazione

- **Lingue.** Le applicazioni sono disponibili in 54 lingue. Quelle diverse dall'inglese sono bozze automatiche finché non le legge un madrelingua.
- **Righe della barra degli strumenti.** {{ui:Impostazioni}} › {{ui:Generali}} › {{ui:Righe della barra degli strumenti}} sceglie A capo (come prima), 2 righe o 1 riga; una barra che non entra scorre in orizzontale. La barra multifunzione Feature di PartCraft mostra in grande lo strumento più usato e raccoglie le varianti dietro un pulsante diviso.
- **Collegare un assistente AI.** Studio è l'hub per collegare un assistente AI proprio a tutte e otto le applicazioni, con permesso di sola lettura, suggerimento o modifica per ciascuna. Un assistente collegato può dimensionare una parte a partire da una frase, ad esempio una staffa per un carico, mostrare il ragionamento e tutti i controlli, e costruirla; riferisce cosa non ha verificato (concentrazione di sforzi, fatica, scorrimento viscoso nelle plastiche). Vedere [Usare PartCraft con un assistente AI](topic:use-with-ai-assistants).

## Corretto in 0.8.1

- **Blocco del cursore a schermo intero.** Il rilevamento al passaggio del mouse ora è limitato. La causa è la nostra interpretazione più probabile e non è stata confermata con chi ha segnalato il problema.
- **Lingua durante l'esecuzione.** Studio e le edizioni confezionate possono cambiare lingua mentre sono in esecuzione; prima erano solo in inglese. Non è ancora verificato su tutte le piattaforme: segnalare se la lingua non cambia.

## Non ancora in questa versione

- Il collegamento di un'AI non è completato: il collegamento con un clic in Studio, il connettore ospitato per l'AI nel browser, una chiave API propria dentro Studio e il pacchetto MCP pubblicato non sono garantiti. Studio non ha una propria AI.
- Studio non è firmato digitalmente: Windows può mostrare un avviso, e macOS chiede di fare clic destro e poi su Apri. Vedere [Risoluzione dei problemi](topic:troubleshooting).
- Le catene di tolleranza hanno ancora una sola direzione: vedere [Catene di tolleranza](topic:tolerance-stackup).
- Il resto è elencato in [Cosa non è ancora implementato](topic:not-built-yet).

Le modifiche precedenti sono in [Novità nella 0.7](topic:whats-new-0-7).
