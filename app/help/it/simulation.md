---
title: Verificare tensione e inflessione (Simulazione)
summary: Scegliere un materiale, vincolare facce, aggiungere forze, pressioni o il peso proprio della parte, risolvere e leggere sul modello la tensione di von Mises, lo spostamento, il coefficiente di sicurezza, le reazioni e le frequenze naturali, con ciò che il metodo può e non può dire.
keywords: simulazione, FEA, analisi in tempo reale, aggiorna durante la modifica, rompi, cosa cede per primo, fattore di carico, non lineare, plasticità, snervamento, deformazione plastica, bilineare, contatto, coppia di contatto, penalità, incollato, contatto senza attrito, CalculiX, .inp, .frd, elementi finiti, tensione, deformazione, von Mises, spostamento, inflessione, coefficiente di sicurezza, fattore di sicurezza, snervamento, reazione, carico, forza, pressione, gravità, peso proprio, vincolo, supporto, materiale, acciaio, alluminio, titanio, ABS, PLA, nylon, frequenza naturale, modale, vibrazione, mesh, dimensione dell'elemento, tetraedrico, tetraedri, mesh tetraedrica, voxel, qualità della mesh, tensione principale, deformazione equivalente, stima dell'errore, facce curve, fori, raccordi, adattivo, raffinamento adattivo, raffinamento automatico, h-adattivo, convergenza, convergenza della mesh, superficie esatta, sfera, cono, toro, spline, forma libera
from: 6f2fdec1
---

L'area di lavoro Simulazione risponde alla domanda "si piegherà o si romperà sotto questo carico?" per la parte che si sta modellando. È uno studio **statico lineare** (piccole deformazioni, il materiale resta elastico) oppure uno studio di **frequenza naturale**, risolto su una mesh di tetraedri quadratici che segue le facce della parte (oppure, se si sceglie, di piccoli cubi uguali). Lavora sulle facce denominate che il kernel a mesh fornisce per la parte (vedi [Il kernel a mesh](topic:solid-kernels)).

Scegliere **Simulazione** nella casella **Area di lavoro** a sinistra della barra degli strumenti. La parte non viene modificata; lo studio viene salvato nel file della parte e ogni modifica può essere annullata.

## Impostare uno studio

1. Premere **Nuovo studio** nel pannello di destra.
2. Scegliere il **Materiale**. Il pannello mostra la sua rigidezza (E), il coefficiente di Poisson, la densità e la tensione di snervamento. I valori sono cifre tipiche da manuale; i valori certificati del fornitore possono differire.
3. Scegliere la **Mesh**:
   - **Tetraedrica (accurata)**, predefinita: tetraedri a 10 nodi le cui facce esterne giacciono sulle facce della parte, con spigoli curvi su fori, raccordi e altre facce tonde. I nodi su facce piane, cilindriche, coniche, sferiche e toroidali, su facce di rivoluzione ed estruse e su facce a forma libera (B-spline) stanno sulla superficie esatta; ogni altro tipo di faccia segue la sua mesh di visualizzazione, e la tabella dei risultati indica quante facce lo hanno fatto. La mesh si infittisce da sola vicino a facce curve, pareti sottili e spigoli vivi.
   - **Cubi voxel (veloce)**: la parte riempita di cubi uguali. Rapida, ma le facce curve diventano gradini. Gli studi salvati prima che esistesse la mesh tetraedrica mantengono questa modalità.
4. Lasciare **Dimensione elemento** vuota per una dimensione automatica (circa 12.000 tetraedri, oppure 20.000 cubi), oppure digitarne una in millimetri. Il pannello mostra quanti elementi produce circa, prima che vengano aggiunti i punti più fini. Con i tetraedri, **Elementi più piccoli sulle facce curve** (attivo per impostazione predefinita) affina fori e raccordi, dove di solito la tensione è massima.

### Affinare automaticamente

Con i tetraedri, uno studio statico o di instabilità (senza carico termico), uno studio di frequenza naturale e uno studio termico stazionario offrono **Affina automaticamente (adattivo)**. Spuntarlo e impostare:

- **Errore obiettivo (%)**: la risoluzione si ferma quando l'errore stimato scende sotto questo valore (1 % all'inizio).
- **Passaggi massimi**: il numero massimo di risoluzioni che può eseguire (5 all'inizio, al massimo 10).

Ogni passaggio risolve, trova gli elementi con il maggiore errore stimato, li divide (e tanti vicini quanti ne servono per mantenere la mesh integra) e risolve di nuovo. I nuovi nodi su facce curve vanno sulla superficie esatta. I risultati mostrano poi una tabella e un grafico con, per ogni passaggio, gli elementi, le incognite, l'errore stimato e la tensione massima (o la temperatura) e lo spostamento (o il flusso di calore), oltre a una riga che spiega perché si è fermato: l'obiettivo è stato raggiunto, i passaggi sono finiti, la mesh successiva sarebbe troppo grande, oppure un passaggio non è riuscito (si vede allora l'ultimo passaggio valido).

Leggere la stima come una stima. Essa (Zienkiewicz–Zhu, che confrontata con risposte esatte legge circa 0,6–0,95 dell'errore reale) misura l'errore sull'**intera parte**, quindi un picco di tensione in un foro o in un raccordo è di solito ancora un po' impreciso quando la stima sembra piccola: per una concentrazione di tensione, impostare l'obiettivo sotto l'1 % e osservare come il picco si stabilizza da un passaggio all'altro. In uno spigolo interno vivo o sul bordo di una faccia vincolata la tensione reale è infinita, quindi la stima non vi arriva mai: i passaggi finiscono senza risultato.

**Frequenze naturali e instabilità.** Per uno studio di frequenza naturale la stima copre ogni modo richiesto, ciascuno conteggiato allo stesso modo; la tabella e il grafico seguono le prime due frequenze. Su una parte con sole facce piane una frequenza può solo scendere da un passaggio all'altro (ogni mesh contiene quella precedente); le facce curve si avvicinano anche alla loro forma reale, il che può spostare una frequenza un po' in un senso o nell'altro. Per l'instabilità la stima copre la pre-tensione e i modi di instabilità, e la tabella segue i fattori di carico. Verificato su una barra d'acciaio di 100 × 10 × 10 mm: la prima frequenza si stabilizza da 812.4 a 811.9 Hz in quattro passaggi, lo 0.4 % sotto Eulero–Bernoulli (che ignora il taglio), e il fattore di carico della colonna entro lo 0.5 % da Eulero.

## Vincolare e caricare

Ogni studio richiede almeno un vincolo e, per la tensione, almeno un carico.

1. Premere {{ui:Vincolo}} nella barra degli strumenti. Il nuovo vincolo è selezionato e attende facce: fare clic sulle facce che restano ferme (fare clic di nuovo su una faccia per toglierla). Premere **Fine selezione** oppure {{key:Esc}} quando si è finito. Coni blu indicano le facce vincolate.
2. Premere {{ui:Forza}} e fare clic sulle facce su cui agisce la forza. Nel pannello digitare la **Forza totale** in newton e scegliere la sua **Direzione**: entrante nella faccia, oppure lungo un asse. La forza è ripartita sulle facce scelte in proporzione all'area. Frecce arancioni la mostrano.
3. Premere {{ui:Pressione}} per una pressione in MPa (N/mm²) che spinge sulle facce scelte; una pressione negativa tira.

Altri tipi sono nell'elenco **Aggiungi** del pannello: una **Faccia senza attrito** (la faccia può scorrere su sé stessa ma non allontanarsi da essa: usarla per piani di simmetria e supporti lisci) e la **Gravità** (il peso proprio della parte, 9.81 m/s², nella direzione scelta).

Un vincolo che lascia la parte libera di scorrere o ruotare viene rifiutato, con l'indicazione del moto che resta libero.

## Risolvere e leggere i risultati

Premere {{ui:Risolvi}}. Il lavoro gira in background; **Interrompi** lo annulla. Poi:

- La parte è colorata per **tensione di von Mises**; scegliere **Spostamento** o **Coefficiente di sicurezza** in **Mostra**. La legenda indica la scala.
- Puntare la parte per leggere i valori sotto il puntatore.
- Spuntare **Forma deformata** per vedere la parte piegata (il movimento è ingrandito dalla **Scala**; quello reale è nella tabella).
- La tabella elenca la tensione massima e dove si trova, lo spostamento massimo, il **coefficiente di sicurezza** minimo (tensione di snervamento ÷ tensione di von Mises; sotto 1 il materiale snerva), il carico applicato e le **reazioni** nei vincoli (equilibrano il carico), oltre alla mesh usata.

Per le **frequenze naturali**, scegliere quel **Tipo**, impostare quanti **Modi** e risolvere. Ogni modo mostra la sua frequenza e la sua forma (le forme sono scalate a 1 nel punto di massimo movimento).

Se si modifica la parte, i risultati sono segnati come non aggiornati: risolvere di nuovo.

## Snervamento e contatto (studi non lineari)

Altri due tipi di studio vanno oltre "il materiale resta elastico":

- **Non lineare (il materiale snerva)** segue la retta del materiale fino alla sua tensione di snervamento, poi una pendenza più piatta (**Pendenza dopo lo snervamento**, 1 % di E se lasciata vuota). Il carico procede in **Passi di carico**; un passo che non si stabilizza viene dimezzato da solo. I risultati aggiungono la **Deformazione plastica** ai grafici e indicano quanta parte del carico è stata sopportata. Se un passo ancora non si stabilizza, lo studio si ferma all'ultimo passo valido e il pannello ⚠ **Problemi** indica dove: la parte ha esaurito la sua resistenza lì (un collasso), oppure i passi sono troppo grandi.
- **Contatto tra pezzi** lascia che pezzi separati della parte si spingano a vicenda. Aggiungere una **Coppia di contatto**, scegliere le facce del lato A (quelle che premono) con {{ui:Scegli facce}}, poi quelle del lato B con {{ui:Seleziona le facce del lato B}}. I pezzi **senza attrito** si spingono, scorrono e si separano; quelli **incollati** restano uniti. Ogni pezzo è mesh­ato per conto suo, quindi una piccola intercapedine tra di essi va bene. Il contatto è un metodo a penalità: i pezzi affondano un po' l'uno nell'altro (il **fattore di penalità** × E ÷ dimensione dell'elemento stabilisce quanto è rigido il contatto). La tabella mostra la massima penetrazione, e il pannello Problemi avvisa quando supera l'1 % della dimensione dell'elemento: aumentare il fattore o usare elementi più piccoli.

Entrambi usano la mesh tetraedrica. Attrito, grandi scorrimenti e grandi rotazioni non sono risolti qui.

## Eseguire in CalculiX

**Esporta › deck CalculiX (.inp)** (oppure {{ui:Salva un deck CalculiX (.inp)}} nel pannello) salva lo studio come file di input per CalculiX, un programma separato che si installa ed esegue da sé: la stessa mesh, il materiale, i vincoli, i carichi e le coppie di contatto, in mm, N e MPa. Eseguirlo, poi **Esporta › risultati CalculiX (.frd)** legge il suo file dei risultati sulla stessa mesh e mostra lo spostamento (e la tensione di von Mises quando il file contiene le tensioni). Se nel frattempo si è modificata la parte o la dimensione dell'elemento, la mesh non è più la stessa e PartCraft lo segnala: salvare un nuovo deck.

## Quanto fidarsi

PartCraft verifica il suo solutore con formule di calcolo manuale (la freccia all'estremità di una mensola PL³/3EI entro l'1 %, l'allungamento di una barra PL/AE esatto, la prima frequenza di una mensola entro il 3 %, la tensione intorno a un foro in una piastra). Tenere comunque presenti questi limiti:

- **La mesh.** Con i tetraedri, PartCraft verifica la freccia e la tensione di flessione di una mensola (entro lo 0.3 %), la tensione in un foro di una piastra (Kt, entro circa l'1 %), un tubo spesso sotto pressione (Lamé, entro lo 0.3 %) e la prima frequenza (entro lo 0.4 %). La tabella mostra la **qualità della mesh** (gli angoli minimo e massimo tra le facce degli elementi; sotto circa 10° un elemento è scadente) e un **errore stimato sulla tensione**: se supera qualche percento, risolvere di nuovo con una dimensione dell'elemento più piccola, oppure lasciare che **Affina automaticamente** lo faccia. Su una piastra con un foro e su una barra con due intagli laterali, il raffinamento automatico è rimasto entro l'1 % dal Kt del manuale con circa un sesto delle incognite che serviva per infittire tutta la mesh. Con i cubi voxel, un foro o un raccordo è una scala alla dimensione del cubo, quindi la tensione lì è grossolana.
- **Gli spigoli interni vivi e i bordi delle facce vincolate non hanno un picco di tensione reale.** Il valore lì continua a crescere man mano che gli elementi si rimpiccioliscono. Leggere le tensioni un po' lontano da questi punti, oppure arrotondare lo spigolo nel modello.
- **Risultati da leggere.** Oltre alla tensione di von Mises, allo spostamento e al coefficiente di sicurezza, uno studio tetraedrico mostra la **tensione principale massima e minima** (trazione e compressione) e la **deformazione equivalente**. Spuntare **Mostra mesh** per vedere gli elementi.
- **Gli studi statici sono lineari ed elastici.** Per lo snervamento e il contatto usare i tipi di studio non lineari qui sopra; grandi deformazioni e fatica non sono risolte. Calore, tensione termica e instabilità lineare sono tipi di studio a sé: vedi [Calore, tensione termica e instabilità](topic:thermal-and-buckling).
- **Ogni materiale è uguale in tutte le direzioni.** Le plastiche stampate in 3D sono più deboli tra gli strati, spesso di un terzo o più.
- Questa è una versione di laboratorio: verificare in altro modo le parti che contano.

## Aggiornare mentre si modifica (Live)

Spuntare **Aggiorna durante la modifica** nel blocco **Risolvi** e le risposte della Simulazione seguono le modifiche. Cambiare una quota, un carico, il materiale o l'ambiente e compare subito una **risposta rapida**, calcolata con elementi quattro volte più grandi di quelli dello studio; quando ci si ferma per un momento (circa un secondo), la **risposta affinata** dello studio sostituisce quella rapida. I risultati indicano quale si sta guardando ("Risposta rapida" o "Risposta affinata") e la dimensione dell'elemento. La risposta rapida serve per la direzione e l'ordine di grandezza: su una mensola d'acciaio è risultata entro l'1 % sulla freccia e circa il 4 % sulla tensione rispetto a quella affinata. Per i numeri che si useranno, fidarsi di quella affinata. Gli studi statici, di frequenza naturale, termici e di instabilità funzionano così; Live è un'impostazione di visualizzazione e non viene salvata nella parte. Una Risoluzione avviata a mano resta com'è fino alla modifica successiva.

## Scoprire cosa cede per primo (Cosa cede)

Per uno studio statico o di instabilità, premere **Cosa cede per primo?** nel blocco **Cedimento**. PartCraft scala i carichi dello studio (forze, pressioni e peso insieme) fino a quando la parte cede ed elenca, dal peggiore, **il fattore di carico allo snervamento** (il fattore sui carichi di oggi al quale la tensione di von Mises più alta raggiunge la tensione di snervamento del materiale, con un indicatore rosso dove accade) e **il fattore di carico all'instabilità** per gli stessi vincoli e carichi. Un fattore di 4.3 significa che la parte sopporta 4.3 volte il suo carico prima di snervare; **un fattore sotto 1 significa che cede già così caricata**, e compare nell'elenco dei Problemi come errore (il rilievo più debole è mostrato come nota anche quando tutto regge). I fattori derivano da uno studio lineare su tetraedri alla dimensione dell'elemento in uso, quindi valgono quanto vale quello studio: la tensione in un vincolo fisso o in uno spigolo vivo non ha picco reale (vedi sotto), e il fattore di snervamento lì sarà dal lato prudente. Anche l'assistente può eseguire lo stesso controllo con lo strumento `break_run`.

## Collegamenti

- [Calore, tensione termica e instabilità](topic:thermal-and-buckling)
- [Far crescere una forma dai carichi (Generativa)](topic:generative-design)
- [Misurare distanze, angoli e massa](topic:measure)
- [Cosa non è ancora implementato](topic:not-built-yet)
