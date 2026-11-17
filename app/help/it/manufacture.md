---
title: Creare percorsi utensile e G-code (Produzione)
summary: Impostare il grezzo e l'origine di lavoro, scegliere gli utensili, aggiungere operazioni di faccia, tasca, contorno, foratura e smusso selezionando le facce, finire l'intero modello in 3D (parallelo, cresta), simulare il grezzo rispetto al modello per sovraspessori e tempo ciclo, e scaricare il G-code da uno dei tre post integrati o da uno da modificare.
keywords: exact step, step per l'officina, coordinate di lavoro, passaggio cam, parallelo, cresta, finitura 3D, finitura, fresa a sfera, libreria utensili, modifica post, post personalizzato, editor post, adattiva, pulizia adattiva, impegno costante, trocoidale, hsm, lavorazione ad alta velocità, produzione, CAM, percorso utensile, G-code, NC, CNC, fresatrice, fresatura, tasca, contorno, profilo, spianatura, foratura, becco, G83, G81, G73, smusso, grezzo, offset di lavoro, G54, post-processore, GRBL, LinuxCNC, avanzamenti e velocità, simulazione, sovrataglio, tempo ciclo
from: beeb29aa
---

L'area di lavoro Produzione trasforma la parte in percorsi utensile per una fresatrice a 3 assi e li scrive come G-code. La maggior parte delle operazioni è **2.5 assi**: l'utensile resta verticale, le pareti si tagliano dritte verso il basso e i fondi sono piani. **Parallelo** e **Cresta** finiscono le superfici curve in 3D (vedi [Finitura 3D](topic:finish-3d)); l'utensile resta comunque verticale (tre assi, senza inclinazione). Lavora sulle facce con nome che il kernel a mesh fornisce per la parte (vedi [Il kernel a mesh](topic:solid-kernels)).

Build di prova: verificare ogni programma nel simulatore del proprio controllo, e farlo girare prima a vuoto sopra il grezzo.

## Impostazione

1. Scegliere **Produzione** nel selettore delle aree di lavoro, poi {{ui:Nuova impostazione}}.
2. Nella scheda **Impostazione** scegliere:
   - **Asse utensile (+Z)**: da che parte l'utensile punta nella parte. Y mondo +Y (verso l'alto in PartCraft) è il valore predefinito; X della macchina è allora X mondo e Y della macchina è −Z mondo.
   - **Origine di lavoro (G54)**: un angolo o il centro del grezzo, sopra o sotto, il centro superiore del modello, oppure l'origine del modello.
   - **Grezzo**: un parallelepipedo o un cilindro, sia il modello più gli offset (lati, sopra, sotto) sia una dimensione fissa.
   - **Materiale** (imposta avanzamenti e velocità di partenza), il **post** (controllo), la velocità massima del mandrino della macchina, la velocità di movimento rapido e il tempo di cambio utensile, il refrigerante e il numero di programma.

## Utensili

La scheda **Utensili** contiene la libreria: frese a candela piatte, a sfera e a raggio d'angolo, punte, frese per smussi e frese a spianare, ciascuna con un numero T, diametro, taglienti e lunghezza del tagliente (più raggio d'angolo, angolo di punta o smusso dove applicabili).

Gli utensili propri possono essere salvati nel browser e spostati tra computer come file: vedi [La libreria utensili](topic:tool-library).

La velocità del mandrino e l'avanzamento derivano dal materiale: n = 1000 × velocità di taglio / (π × diametro), avanzamento = n × taglienti × carico del truciolo (punte: n × avanzamento per giro). I valori sono valori iniziali prudenti tratti da intervalli pubblicati, non tarati per la propria macchina; digitare la velocità di taglio, il carico del truciolo, i giri/min o l'avanzamento del costruttore dell'utensile per sostituirli. Quando la velocità supera il massimo della macchina, viene mantenuta a quel valore e l'avanzamento la segue, mantenendo il carico del truciolo.

## Aggiungere operazioni

Ogni pulsante della barra aggiunge un'operazione e, dove servono geometrie, avvia la selezione: fare clic su facce o spigoli nella vista (un altro clic ne toglie uno), poi {{ui:Fine selezione}} oppure {{key:Esc}}.

| Operazione | Selezione | Cosa fa |
|---|---|---|
| {{ui:Faccia}} | nulla | Passate a zig-zag su tutto il grezzo, oltre i suoi bordi, fino alla parte superiore del modello |
| {{ui:Tasca}} | una faccia piana di fondo, un foro tondo, o una catena chiusa di spigoli | Svuota la zona con passate di offset dall'interno verso l'esterno, a ogni discesa; le isole (facce che sporgono all'interno del fondo) restano; un fondo aperto tutto intorno (nulla di più alto all'esterno) viene svuotato fino al bordo del grezzo |
| {{ui:Adattiva}} | come Tasca | Svuota la stessa zona con passate che tagliano ciascuna una larghezza fissa (**Impegno**, una frazione del diametro), così la fresa non prende mai una scanalatura a larghezza piena, nemmeno negli angoli; entra con un'elica e finisce le pareti a ogni livello. Tagli stretti permettono una discesa più profonda e un avanzamento più alto |
| {{ui:Contorno}} | una faccia piana (il suo contorno), una faccia tonda, oppure spigoli | Segue il contorno offsettato del raggio dell'utensile, esterno o interno, con archi di entrata e uscita e ponticelli facoltativi |
| {{ui:Foratura}} | fori (cliccare sulla parete o sul bordo di un foro) | Fora ogni foro con un ciclo fisso: becco (G83), foratura (G81) o rottura del truciolo (G73); oppure indicare un diametro per forare ogni foro di quella misura |
| {{ui:Smusso}} | il contorno o gli spigoli di una faccia | Percorre lo spigolo con una fresa per smussi, in modo che tagli la larghezza impostata |
| {{ui:Parallelo}} | nulla (l'intero modello) | Finitura 3D con linee parallele a qualsiasi angolo, seguendo la superficie con una fresa a sfera, a raggio d'angolo o piatta. Vedi [Finitura 3D](topic:finish-3d) |
| {{ui:Cresta}} | nulla (l'intero modello) | Finitura 3D con passate a distanza fissa sulla superficie, così la cresta tra di esse ha l'altezza richiesta |

Selezionare un'operazione nell'elenco per cambiarne l'utensile, le quote (sicurezza, ritiro, altezza di avanzamento, superiore, inferiore), il passo in profondità, il passo laterale, il sovrametallo da lasciare, la passata di finitura, l'entrata (elica, rampa o tuffo), la fresatura in concordanza, i ponticelli o il ciclo. {{ui:Su}} e {{ui:Giù}} riordinano, {{ui:Sopprimi}} la esclude, {{ui:Elimina}} la rimuove. Tutto è nella cronologia degli annullamenti e salvato nel file della parte.

Il passo laterale di una tasca è al massimo metà del diametro dell'utensile, così ogni punto del suo fondo sta entro un raggio utensile da una passata. Gli angoli interni mantengono il raggio dell'utensile.

**La pulizia adattiva** mantiene l'impegno della fresa vicino a un valore. Un impegno di 0.15 del diametro corrisponde a un angolo di impegno di circa 46°: l'arco del bordo della fresa nel materiale. Una tasca per offset, invece, taglia a larghezza piena nella prima passata e si avvolge di più in ogni angolo interno. Tra le passate l'utensile resta giù dove si muove nell'aria di taglio, e si solleva e scende nell'aria di taglio altrove. Le passate sono calcolate su una griglia fine sulla zona (celle di circa un dodicesimo del raggio utensile), quindi l'impegno può superare il valore impostato di circa una cella; le pareti sono finite con precisione. Una zona aperta e ampia produce un programma lungo con molti movimenti brevi.

## Simula

I percorsi vengono ricalcolati dopo ogni modifica (anche quelli della parte). {{ui:Simula}} mostra anche il grezzo rimasto dopo l'intero programma. Il pannello mostra:

- **Tempo ciclo**: i movimenti di lavoro all'avanzamento, i rapidi come linee rette alla velocità di movimento rapido dell'impostazione, più il tempo di cambio utensile. Le macchine reali accelerano, quindi impiegano di più.
- **Sovrataglio**: punti in cui l'utensile è sceso più di 0.02 mm sotto la superficie della parte. Segni rossi li mostrano nella vista.
- **Grezzo rimasto sulla parte**.

Il grezzo è una mappa delle altezze della parte superiore (una mappa Z), quindi non può mostrare i sottosquadri. Trascinare **Riproduzione** per muovere l'utensile lungo il programma. Nella vista, i movimenti di lavoro sono continui e i rapidi tratteggiati, con un colore per operazione.

Con **Mostra il grezzo simulato** attivo, il grezzo viene colorato rispetto al modello, cella per cella: **verde** dove coincide con il modello (entro 0.02 mm), **rosso** dove l'utensile ha tagliato nel modello, e dove sul modello resta grezzo **giallo** per uno strato sottile, **arancione** per di più, che sfuma nel **grigio** del grezzo non tagliato da 1 mm in su. I colori vengono ricalcolati a ogni modifica, dalla stessa mappa delle altezze dei numeri nel pannello, quindi verde e rosso coincidono con la riga Sovrataglio. Uno smusso taglia nel modello di proposito e mostra il rosso lungo il suo bordo.

## Generare il G-code con il post

Scegliere il controllo sotto **Post** e premere {{ui:Scarica G-code}} (oppure {{ui:Post-processore}} sulla barra degli strumenti):

| Controllo | File | Note |
|---|---|---|
| ISO in stile Fanuc | .nc | %, numero O, numeri di riga, T M6 con G43 H, cicli fissi |
| GRBL | .nc | Nessun cambio utensile né cicli fissi: un cambio utensile si ferma con M0, la foratura è scritta come semplici movimenti |
| LinuxCNC | .ngc | T M6 con G43 H, cicli fissi, M2 |
| Personalizzato | qualsiasi | Un post scritto o modificato da sé: {{ui:Modifica post…}}, {{ui:Nuovo post…}}, {{ui:Importa file di post…}} |

Ogni file inizia con commenti su programma, grezzo, offset di lavoro e utensili. Le coordinate sono in millimetri con 3 decimali. {{ui:CSV dei percorsi}} e {{ui:JSON dei percorsi}} esportano i movimenti stessi.

**Verificare l'output nel simulatore della propria macchina prima di tagliare, e farlo girare prima a vuoto sopra il grezzo.** I tre post integrati sono punti di partenza che seguono il comportamento documentato dei controlli; non sono stati provati su nessuna macchina specifica. Un post modificato va provato da chi lo modifica. Come scriverne uno: [Post-processori](topic:post-processors).

## STEP esatto per l'officina

Sotto i pulsanti del G-code nella scheda **Operazioni**, {{ui:STEP esatto (coordinate di lavoro)}} scarica `<part>-work.step`: la parte come solido esatto (cilindri veri per fori e sporgenze, cerchi veri per i loro bordi) con l'origine nell'origine di lavoro di questa impostazione e Z lungo l'asse utensile. Sono le coordinate usate dal G-code, quindi il programma CAM o il verificatore dell'officina allinea il modello al programma senza spostarlo. Il file contiene solo la parte, non il grezzo né i percorsi utensile.

{{ui:Esporta}} › {{ui:STEP AP242 (solido esatto)}} scrive lo stesso solido nella posizione propria della parte (Z verso l'alto): vedi [Esportare per la stampa, STEP e DXF](topic:export-files#for-other-cad-programs-step).

## Limiti

- Tasche, contorni, foratura e smussi sono a 2.5 assi. Le facce curve possono essere finite in 3D ([parallelo e cresta](topic:finish-3d)) ma non sgrossate in 3D (un cono resta a gradini finché non lo si finisce), e non c'è lavorazione di ripresa. La pulizia adattiva è 2D (fondi piani).
- Solo tre assi: nessuna inclinazione, nessuna tornitura, nessun controllo.
- Portautensili e gambi non sono controllati per le collisioni; compare un avviso quando un taglio è più profondo della lunghezza del tagliente.
- Avanzamenti e velocità sono valori iniziali. Un post è un testo modificabile, ma decide solo come vengono scritti i movimenti; non può cambiare il percorso utensile, aggiungere assi o conoscere la propria macchina ([Post-processori](topic:post-processors) elenca ciò che non può fare).

## Inviare il programma a una macchina

In CadCraft Studio sul desktop, con una macchina configurata in Studio, **Invia a una macchina…** compare accanto a **Scarica G-code** e carica lo stesso programma sulla macchina della rete. Non viene mai avviato da PartCraft: avviarlo alla macchina quando è sgombra. In un browser il pulsante non compare (una pagina web non può raggiungere una macchina nella propria rete): scaricare invece il programma.
