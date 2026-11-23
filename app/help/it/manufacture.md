---
title: Creare percorsi utensile e G-code (Produzione)
summary: Impostare il grezzo e un'origine pezzo, scegliere gli utensili, aggiungere operazioni di faccia, tasca, contorno, foratura e smusso selezionando facce, finire tutto il modello in 3D (parallelo, cresta), simulare il grezzo rispetto al modello per sfondamenti e tempo ciclo, e scaricare il G-code da uno dei tre post integrati o da un post personalizzato.
keywords: STEP esatto, STEP per l'officina, coordinate di lavoro, passaggio al CAM, parallelo, cresta, finitura 3d, finitura, fresa a sfera, libreria utensili, modifica post, post personalizzato, editor post, adattiva, sgrossatura adattiva, ingaggio costante, trocoidale, hsm, lavorazione ad alta velocità, produzione, CAM, percorso utensile, G-code, NC, CNC, fresatrice, fresatura, tasca, contorno, profilo, spianatura, foratura, becchi, G83, G81, G73, smusso, grezzo, origine pezzo, G54, post-processore, GRBL, LinuxCNC, avanzamenti e velocità, simulazione, sfondamento, tempo ciclo
from: f8a03be8
---

L'area di lavoro Produzione trasforma il pezzo in percorsi utensile e li scrive come G-code. La maggior parte delle operazioni è di fresatura a **2.5 assi**: l'utensile resta verticale, le pareti sono tagliate dritte verso il basso e i fondi sono piani. **Sgrossatura 3D** e **Residuo** sgrossano pezzi curvi in 3D ([Sgrossatura 3D e lavorazione del residuo](topic:rough-3d)); **Parallelo** e **Cresta** li finiscono ([Finitura 3D](topic:finish-3d)). Su una macchina con assi rotativi ogni operazione può avere un utensile inclinato, e due operazioni muovono gli assi rotativi durante il taglio ([Lavorazione a 4 e 5 assi](topic:multi-axis)). Ci sono operazioni per un tornio ([Tornitura](topic:turning)) e per un tastatore ([Tastatura](topic:probing)). Lavora sulle facce con nome che la mesh del kernel dà al pezzo (vedi [Il kernel mesh](topic:solid-kernels)).

Versione di laboratorio: controllare ogni programma nel simulatore del controllo della propria macchina, e farlo girare prima a vuoto sopra il grezzo.

## Impostazione

1. Scegliere **Produzione** nel selettore dell'area di lavoro, poi {{ui:Nuova impostazione}}.
2. Nella scheda **Impostazione** scegliere:
   - **Asse utensile (+Z)**: la direzione in cui l'utensile punta nel pezzo. Il +Y globale (l'alto di PartCraft) è il predefinito; la X della macchina è allora la X globale e la Y della macchina è la −Z globale.
   - **Origine pezzo (G54)**: uno spigolo o il centro del grezzo, in alto o in basso, il centro in alto del modello oppure l'origine del modello.
   - **Grezzo**: un parallelepipedo o un cilindro, o il modello più i sovrametalli (lati, alto, basso) oppure una dimensione fissa.
   - **Materiale** (imposta gli avanzamenti e le velocità iniziali), il **post** (controllo), la velocità massima del mandrino della macchina, la velocità di movimento rapido e il tempo di cambio utensile, il refrigerante e il numero del programma.

## Utensili

La scheda **Utensili** contiene la libreria: frese piatte, a sfera e a raggio d'angolo, punte, frese per smussi e frese a spianare, ciascuna con un numero T, diametro, taglienti e lunghezza del tagliente (più raggio d'angolo, angolo di punta o di smusso dove applicabile).

Gli utensili propri possono essere salvati nel browser e spostati tra computer come file: vedi [La libreria utensili](topic:tool-library).

Velocità del mandrino e avanzamento derivano dal materiale: n = 1000 × velocità di taglio / (π × diametro), avanzamento = n × taglienti × carico del truciolo (punte: n × avanzamento per giro). I valori sono cautelativi, presi da intervalli pubblicati, e non tarati per la propria macchina; per sovrascriverli digitare la velocità di taglio, il carico del truciolo, i giri o l'avanzamento indicati dal costruttore dell'utensile. Quando la velocità supera il massimo della macchina, viene mantenuta a quel valore e l'avanzamento la segue, conservando il carico del truciolo.

## Aggiungere operazioni

Ogni pulsante della barra degli strumenti aggiunge un'operazione e, quando serve una geometria, avvia la selezione: fare clic su facce o spigoli nella vista (un nuovo clic ne toglie uno), poi {{ui:Fine selezione}} oppure {{key:Esc}}.

| Operazione | Selezione | Cosa fa |
|---|---|---|
| {{ui:Faccia}} | nulla | Passate a zig-zag su tutto il grezzo, oltre i suoi bordi, fino alla parte alta del modello |
| {{ui:Tasca}} | una faccia di fondo piana, un foro tondo o una catena chiusa di spigoli | Svuota la zona con passate di offset dall'interno verso l'esterno, a ogni passo in profondità; le isole (facce che sporgono all'interno del fondo) restano; un fondo aperto tutt'intorno (nulla di più alto all'esterno) viene svuotato fino al bordo del grezzo |
| {{ui:Adattiva}} | come Tasca | Svuota la stessa zona con passate che tagliano ciascuna una larghezza fissa (**Ingaggio**, una frazione del diametro), così la fresa non incide mai una cava a larghezza piena, nemmeno negli angoli; entra con un'elica e finisce le pareti a ogni livello. I tagli stretti permettono una discesa più profonda e un avanzamento maggiore |
| {{ui:Contorno}} | una faccia piana (il suo contorno), una faccia tonda o spigoli | Segue il contorno spostato del raggio dell'utensile, all'esterno o all'interno, con archi di attacco e di uscita e ponticelli facoltativi |
| {{ui:Foratura}} | fori (fare clic sulla parete o sul bordo di un foro) | Fora ogni foro con un ciclo fisso: a becchi (G83), a foratura semplice (G81) o con rottura del truciolo (G73); oppure indicare un diametro per forare tutti i fori di quella misura |
| {{ui:Smusso}} | il contorno o gli spigoli di una faccia | Fa correre una fresa per smussi lungo lo spigolo in modo che tagli la larghezza impostata |
| {{ui:Parallelo}} | nulla (tutto il modello) | Finitura 3D a linee parallele a qualsiasi angolo, che segue la superficie con una fresa a sfera, a raggio d'angolo o piatta. Vedi [Finitura 3D](topic:finish-3d) |
| {{ui:Cresta}} | nulla (tutto il modello) | Finitura 3D con passate a distanza fissa sulla superficie, così che la cresta tra di esse abbia l'altezza richiesta |

Selezionare un'operazione nell'elenco per cambiarne l'utensile, le quote (sicurezza, ritrazione, altezza di avanzamento, alto, basso), il passo di discesa, il passo, il sovrametallo da lasciare, la passata di finitura, l'ingresso (elica, rampa o tuffo), la fresatura in concordanza, i ponticelli o il ciclo. {{ui:Su}} e {{ui:Giù}} riordinano, {{ui:Sopprimi}} la esclude, {{ui:Elimina}} la rimuove. Tutto è nella cronologia degli annullamenti e salvato nel file del pezzo.

Il passo di una tasca è al massimo metà del diametro dell'utensile, così ogni punto del suo fondo sta entro un raggio utensile da una passata. Gli angoli interni mantengono il raggio dell'utensile.

**La sgrossatura adattiva** mantiene l'ingaggio della fresa vicino a un valore. Un ingaggio di 0.15 del diametro corrisponde a un angolo di ingaggio di circa 46°: l'arco del tagliente nel materiale. Una tasca a offset, al contrario, taglia a larghezza piena nella prima passata e si avvolge più a lungo in ogni angolo interno. Tra le passate l'utensile resta in basso dove si muove attraverso aria già tagliata, e si solleva e riscende in aria di taglio altrove. Le passate sono calcolate su una griglia fine sulla zona (celle di circa un dodicesimo del raggio utensile), quindi l'ingaggio può superare di circa una cella quello impostato; le pareti sono finite con esattezza. Una zona aperta ampia produce un programma lungo con molti spostamenti brevi.

## Simulazione

I percorsi vengono ricalcolati dopo ogni modifica (anche quelli del pezzo). {{ui:Simula}} mostra anche il grezzo rimasto dopo l'intero programma. Il pannello mostra:

- **Tempo ciclo**: gli spostamenti di lavoro alla propria velocità di avanzamento, i rapidi come linee rette alla velocità di movimento rapido dell'impostazione, più il tempo di cambio utensile. Le macchine reali accelerano, quindi impiegano più tempo.
- **Sfondamenti**: punti in cui l'utensile è sceso più di 0.02 mm sotto la superficie del pezzo. I segni rossi li mostrano nella vista.
- **Grezzo rimasto sul pezzo**.

Il grezzo è una mappa di altezze della parte alta (una mappa Z), quindi non può mostrare sottosquadri. Trascinare **Riproduzione** per spostare l'utensile lungo il programma. Nella vista, gli spostamenti di lavoro sono continui e i rapidi tratteggiati, con un colore per operazione.

Con **Mostra il grezzo simulato** attivo, il grezzo è colorato rispetto al modello, cella per cella: **verde** dove è sul modello (entro 0.02 mm), **rosso** dove l'utensile è entrato nel modello, e dove sul modello resta grezzo **giallo** per una pellicola sottile, **arancio** per di più, sfumando fino al **grigio** del grezzo non tagliato a 1 mm o più. I colori vengono ricalcolati a ogni modifica, dalla stessa mappa di altezze dei numeri nel pannello, quindi verde e rosso concordano con la riga Sfondamenti. Uno smusso taglia nel modello di proposito e mostra il rosso lungo il proprio bordo.

## Generare il G-code

Scegliere il controllo sotto **Post** e premere {{ui:Scarica G-code}} (oppure {{ui:Post-processore}} sulla barra degli strumenti):

| Controllo | File | Note |
|---|---|---|
| ISO stile Fanuc | .nc | %, numero O, numeri di riga, T M6 con G43 H, cicli fissi |
| GRBL | .nc | Nessun cambio utensile automatico né cicli fissi: un cambio utensile si ferma con M0, la foratura è scritta come semplici movimenti |
| LinuxCNC | .ngc | T M6 con G43 H, cicli fissi, M2 |
| Tornio stile Fanuc | .nc | Per programmi di tornitura: X come diametro, avanzamento per giro, G96 sotto un limite G50, filettatura G32 |
| Tornio LinuxCNC | .ngc | Per programmi di tornitura: diametri G7, G95, G96, filettatura G33; non scrive alcun movimento di riferimento |
| Personalizzato | qualsiasi | Un post scritto o modificato: {{ui:Modifica post…}}, {{ui:Nuovo post…}}, {{ui:Importa file di post…}} |

Ogni file inizia con commenti per il programma, il grezzo, l'origine pezzo e gli utensili. Le coordinate sono in millimetri con 3 decimali. {{ui:CSV dei percorsi}} e {{ui:JSON dei percorsi}} esportano i movimenti stessi.

**Controllare l'output nel simulatore della propria macchina prima di tagliare, e farlo girare prima a vuoto sopra il grezzo.** I tre post integrati sono punti di partenza che seguono il comportamento documentato dei controlli; non sono stati provati su nessuna macchina in particolare. Un post modificato va provato da chi lo modifica. Come scriverne uno: [Post-processori](topic:post-processors).

## STEP esatto per l'officina

Sotto i pulsanti G-code nella scheda **Operazioni**, {{ui:STEP esatto (coordinate di lavoro)}} scarica `<part>-work.step`: il pezzo come solido esatto (cilindri veri per fori e sporgenze, cerchi veri per i loro spigoli) con l'origine nell'origine pezzo di questa impostazione e Z lungo l'asse utensile. Sono le coordinate che usa il G-code, quindi il programma CAM o il controllo dell'officina allinea il modello al programma senza spostarlo. Il file contiene solo il pezzo, non il grezzo né i percorsi.

{{ui:Esporta}} › {{ui:STEP AP242 (solido esatto)}} scrive lo stesso solido nella posizione propria del pezzo (Z in alto): vedi [Esportare per la stampa, STEP e DXF](topic:export-files#for-other-cad-programs-step).

## Limiti

- Tasche, contorni, foratura e smussi sono a 2.5 assi. I pezzi curvi vengono sgrossati e finiti in 3D dalle proprie operazioni ([Sgrossatura 3D e lavorazione del residuo](topic:rough-3d), [Finitura 3D](topic:finish-3d)). La sgrossatura adattiva è 2D (fondi piani).
- Utensili inclinati, finitura a 5 assi e a quarto asse, tornitura e tastatura ci sono, ciascuno con limiti propri, e **nessuno è stato eseguito su una macchina**: vedi [Lavorazione a 4 e 5 assi](topic:multi-axis), [Tornitura](topic:turning) e [Tastatura](topic:probing).
- Portautensili e gambi non sono verificati per collisioni; compare un avviso quando un taglio è più profondo della lunghezza del tagliente.
- Avanzamenti e velocità sono valori di partenza. Un post è un testo modificabile, ma decide solo come vengono scritti i movimenti; non può cambiare il percorso utensile, aggiungere assi né conoscere la propria macchina ([Post-processori](topic:post-processors) elenca ciò che non può fare).

## Inviare il programma a una macchina

In CadCraft Studio su desktop, con una macchina configurata in Studio, **Invia a una macchina…** compare accanto a **Scarica G-code** e carica lo stesso programma sulla macchina della rete. Non viene mai avviato da PartCraft: avviarlo alla macchina quando è tutto chiaro. In un browser il pulsante non compare (una pagina web non può raggiungere una macchina della propria rete): scaricare invece il programma.
