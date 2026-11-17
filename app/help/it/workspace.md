---
title: La schermata di PartCraft
summary: Un giro di ogni barra e pannello: la barra degli strumenti e come cambia, la cronologia, i dati della parte, la vista 3D, il pannello delle proprietà e la barra di stato.
keywords: schermata, layout, barra degli strumenti, cronologia, albero delle feature, proprietà, pannello, barra di stato, interfaccia, ui, giro, schermo intero
from: 5b5bb843
---

La schermata ha cinque parti: la barra degli strumenti in alto, la cronologia a sinistra, la vista 3D al centro, il pannello delle proprietà a destra e la barra di stato in basso. Sopra tutte c'è la barra dell'app CadCraft.

## La barra dell'app

La sottile barra in cima appartiene al sito CadCraft, non a PartCraft. Mostra il nome dell'app e dove gira, un menu di versione, **Info su PartCraft**, il pulsante della modalità schermo e l'interruttore del tema Carta / Modello.

- **Carta** sono linee scure su un foglio chiaro. **Modello** sono linee chiare su uno sfondo scuro. I colori dello schizzo seguono il tema.
- {{ui:Impostazioni}} (l'ingranaggio, o {{key:Mod+,}}) ha una scheda {{ui:PartCraft}}: quale pulsante del mouse ruota la vista, rotellina o trackpad, e le relazioni durante lo schizzo. Vedi [Impostazioni di PartCraft](topic:settings).
- Il pulsante della modalità schermo, o {{key:Ctrl+Shift+F}}, passa tra normale, schermo intero e schermo intero con le barre nascoste. Con le barre nascoste, spostare il puntatore sul bordo superiore (o toccare lì) per farle riapparire. {{key:Esc}} torna alla modalità normale. Questo tasto è {{key:Ctrl+Shift+F}} anche su un Mac, non ⌘.

## La barra degli strumenti

La barra degli strumenti è raggruppata. Cambia con ciò che si sta facendo, così sta in una riga:

| Gruppo | Pulsanti | Visibile |
|---|---|---|
| File | {{ui:Nuovo}}, {{ui:Apri}}, {{ui:Salva}}, {{ui:Esporta}} (un menu) | Sempre |
| Schizzo | {{ui:Schizzo}} | Quando nessuno schizzo è aperto |
| Schizzo | {{ui:Esci}}, {{ui:Linea}}, {{ui:Rettangolo}}, {{ui:Cerchio}}, {{ui:Arco}}, {{ui:Punto}}, {{ui:Linea di mezzeria}}, {{ui:Raccordo}}, {{ui:Quota}}, {{ui:Costruzione}} | Solo mentre uno schizzo è aperto |
| Feature | {{ui:Estrudi}}, {{ui:Taglia}}, {{ui:Rivoluzione}}, {{ui:Foro}}, {{ui:Lineare}}, {{ui:Circolare}}, {{ui:Specchio}}, {{ui:Raccordo}}, {{ui:Smusso}}, {{ui:Svuota}}, {{ui:Altro}} (un menu: Taglio di rivoluzione, Piano, Asse, Punto, Sweep, Loft, Sformo) | Sulla parte, non mentre uno schizzo o la tavola di disegno è aperta. Raccordo e Smusso lavorano su spigoli rettilinei tra due facce piane; Svuota e Sformo su facce piane. Sweep e Loft non sono ancora implementati in questa versione (richiedono un kernel esatto); cliccarne uno lo dice |
| Feature | {{ui:Fine}} | Solo mentre si scelgono spigoli o facce per un raccordo, uno smusso, uno svuotamento o uno sformo |
| Disegno | {{ui:Disegno}} | Sulla parte (utilizzabile quando la parte ha un solido) |
| Disegno | {{ui:Riferimento}}, {{ui:Riquadro}}, {{ui:Finitura}}, {{ui:Dettaglio}}, {{ui:PDF}}, {{ui:Indietro}} | Solo sulla tavola di disegno |
| Assieme | {{ui:Assieme}} | Sulla parte (utilizzabile quando la parte ha un solido) |
| Assieme | {{ui:Aggiungi copia}}, {{ui:Inserisci}}, {{ui:Giunto}}, {{ui:Interferenza}}, {{ui:Modifica parte}}, {{ui:Chiudi}} | Solo in un assieme |
| Assieme | {{ui:Indietro}} | Mentre si modifica una parte da un assieme |
| Modifica | {{ui:Annulla}}, {{ui:Ripristina}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Altro}} (un menu: Taglia, Copia, Incolla, Incolla nella stessa posizione, Duplica, Elimina, Seleziona tutto, Deseleziona tutto) | Sempre; ogni voce agisce sullo schizzo, sulla cronologia o sull'assieme in cui ci si trova |
| Vista | {{ui:Adatta}}, {{ui:Normale a}}, {{ui:Viste}} (un menu: Misura, Proprietà di massa, Sezione, Sformo, Zebra, Curvatura, {{ui:Piani base}}, poi Isometrica, Anteriore, Posteriore, Superiore, Inferiore, Destro, Sinistro) | Sempre |

Passare il mouse su un pulsante per vedere cosa fa e il suo tasto. Un pulsante in grigio non si può usare in questo momento: per esempio i pulsanti delle feature mentre uno schizzo è aperto, oppure {{ui:Giunto}} prima che l'assieme abbia due parti.

Il menu {{ui:Altro}} nel gruppo Modifica elenca ogni azione di modifica con il suo tasto. Su cosa agiscono copia e incolla dipende da dove ci si trova; vedi [Copia, incolla e duplica](topic:copy-paste). La descrizione comparsa su una voce in grigio spiega perché non può agire ora.

Il menu {{ui:Esporta}} contiene {{ui:STL, per la stampa 3D}}, {{ui:3MF, per la stampa 3D}}, {{ui:STEP AP242 (solido esatto)}}, {{ui:STEP AP214 (solido esatto)}}, {{ui:STEP (a facce, kernel a mesh)}}, {{ui:STEP AP214 (sfaccettato, nucleo mesh)}}, {{ui:DXF dello schizzo o della faccia piana}} e {{ui:Disegno (PDF): viste, sezione, dettaglio, GD&T}}. Le voci STEP esatte scrivono le facce tonde sulle loro vere superfici; quelle a facce le scrivono come sfaccettature piatte.

## La cronologia (a sinistra)

Il pannello a sinistra è la cronologia delle feature della parte, l'elenco che PartCraft ricostruisce dall'alto verso il basso.

- L'intestazione è il nome della parte ("Part1" finché non la si rinomina).
- **Piano Anteriore**, **Piano Superiore** e **Piano Destro** vengono per primi. Cliccarne uno per selezionarlo; si evidenzia nella vista.
- Sotto ci sono le proprie feature nell'ordine in cui sono state create. Uno schizzo che una feature usa è rientrato sotto quella feature.
- Una bandierina all'estremità destra di una riga indica il suo stato:

| Bandierina | Significato |
|---|---|
| (nessuna) | Costruita, e lo schizzo è completamente definito |
| − | Uno schizzo sottodefinito (può ancora muoversi) |
| + | Uno schizzo sovradefinito |
| ⚠ | Costruita, con un avviso (passare sopra per leggerlo) |
| ⚠ errore | La feature è fallita. Passare sopra per leggere perché, oppure cliccarla |
| ⚠ non costruita | La feature richiede un'altra che è fallita o disattivata |
| off | Soppressa |

- Ogni feature mostra il suo numero principale dopo il nome, come "25 mm" per un'Estrusione o "Ø6.6 thru" per un foro. Fare doppio clic sul numero, oppure premere {{key:F2}} sulla riga, per cambiarlo lì. Vedi [Cambiare le misure](topic:change-sizes).
- Cliccare una feature per modificarla a destra. Fare doppio clic su uno schizzo per aprirlo.
- Quando si torna indietro, una riga **Barra di rollback · avanti** compare nell'elenco. Le feature sotto di essa sono in grigio e non costruite.
- Con una riga a fuoco, {{key:Up}} e {{key:Down}} spostano tra le righe, e {{key:Alt+Up}} / {{key:Alt+Down}} spostano la feature stessa, dove la cronologia lo permette.

In un assieme lo stesso pannello elenca invece **Parti** (la prima è indicata come "a terra") e **Giunti**.

### Dati della parte

Sotto la cronologia, la casella **Parte** elenca il **Volume**, l'**Area della superficie**, le **Dimensioni (X × Y × Z)**, i **Fori passanti**, i **Corpi**, i **Triangoli**, il numero di **Feature** e quante sono in **Errore**. Volumi e aree sono quelli del solido sfaccettato costruito dal kernel a mesh, un po' inferiori al valore reale per le forme tonde (vedi [Feature e le loro opzioni](topic:features#curves-resolution)).

In un assieme la casella è intestata **Assieme**: Parti, Istanze, Giunti, Non collegati e Interferenze.

## La vista 3D (al centro)

La vista mostra il solido, i piani base e ogni schizzo non ancora usato da una feature.

I piani base sono disegnati per intero finché la parte è vuota. Una volta che ha un solido, si ritirano: disegnati tenui, così non coprono la parte, e i clic passano attraverso di essi alla parte. Tornano per intero mentre si sceglie dove disegnare lo schizzo ({{ui:Schizzo}} senza nulla scelto) e quando se ne seleziona uno nella cronologia. {{ui:Viste}} › {{ui:Piani base}} li nasconde del tutto; si vedono comunque mentre si sceglie dove disegnare lo schizzo. PartCraft ricorda questa scelta.

- Trascinare per ruotare la parte, trascinare con il tasto destro o centrale per spostare la vista, rotellina per zoomare sul puntatore. Dettagli in [Tasti e mouse](topic:keyboard).
- Passare sopra una faccia, uno spigolo o un piano per vederlo illuminarsi. Cliccare per sceglierlo. Le facce si evidenziano per intero e gli spigoli sono disegnati e scelti per intero. {{key:Shift}}+clic raccoglie più spigoli o facce. Restano segnati.
- Il cubo di navigazione in alto a destra ruota con la parte: cliccare una faccia, uno spigolo o un angolo per guardare da lì, trascinarlo per ruotare, il pulsante con la casetta torna all'inizio. Vedi [Il cubo di navigazione](topic:view-cube).
- Un Estrudi selezionato mostra una freccia arancione sulla sua faccia finale, un Rivoluzione una freccia curva alla fine della sua rotazione: trascinarla per cambiare la profondità o l'angolo, oppure digitare nella casella accanto. Vedi [Cambiare le misure](topic:change-sizes#drag-it-in-the-view).
- Quando una parte è vuota, una casella intestata **Inizia una parte** elenca i primi passi.
- Trascinare un file `.partcraft.json` o `.partcraft-asm.json` in un punto qualunque della vista per aprirlo. Un file `.step`, `.stp`, `.stl`, `.obj`, `.3mf` o `.3dm` trascinato lì si apre come corpo solido.

### Mentre si scelgono spigoli o facce

Dopo {{ui:Raccordo}}, {{ui:Smusso}} o {{ui:Svuota}} senza nulla scelto (oppure {{ui:Scegli spigoli}} su una di queste feature), la parte si mostra com'era prima di quella feature. Cliccare spigoli o facce per aggiungerli o toglierli; i loro segni mostrano cosa è dentro. {{ui:Fine}} o {{key:Esc}} conclude. Vedi [Arrotondare, smussare e svuotare](topic:fillet-chamfer-shell).

### Sulla tavola di disegno

{{ui:Disegno}} sostituisce la vista 3D con la tavola di disegno A3. La rotellina fa zoom, il trascinamento con il tasto destro o centrale sposta la vista, {{key:F}} adatta. Vedi [Creare un disegno](topic:drawing-pdf).

### Mentre uno schizzo è aperto

La vista si gira per guardare dritto il piano dello schizzo e compare uno strato di schizzo 2D sopra. La parte mostra solo le feature create prima di questo schizzo. Una striscia in alto a sinistra mostra il riquadro dello stato dello schizzo ("Completamente definito", "Sottodefinito · 3 gradi di libertà" e così via) e il suo nome, come "Sketch2 su una faccia di Estrudi1".

## Il pannello delle proprietà (a destra)

Il pannello a destra mostra ciò che è selezionato, e la sua intestazione lo nomina:

- **Parte** (niente selezionato): il **Nome** della parte e l'impostazione **Curve**.
- Un piano: un pulsante {{ui:Schizzo su di esso}}.
- Una **Faccia**: di che tipo è (Faccia piana, Cilindro con il suo raggio e asse, Cono, Sfera o Toro), la sua area, quale feature l'ha creata, e per una faccia piana {{ui:Schizzo su questa faccia}}, {{ui:Normale a}}, {{ui:Esporta faccia come DXF}}, {{ui:Estrudi da essa}}, {{ui:Taglia in essa}} e {{ui:Foro qui}} (vedi [Tirare o spingere un'intera faccia](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Uno **Spigolo**: il suo tipo (rettilineo, un cerchio con il suo centro e raggio, oppure una curva), la sua lunghezza e le due facce tra cui si trova (come "faccia finale di Estrudi1 e lato di Estrudi1"), con i pulsanti {{ui:Raccordo}} e {{ui:Smusso}}.
- Più spigoli o facce scelti con {{key:Shift}}: quanti, con {{ui:Raccordo}} e {{ui:Smusso}} per gli spigoli, e {{ui:Pulisci}}.
- Una feature: i suoi numeri e opzioni, le quote del suo schizzo, poi {{ui:Sopprimi}}, {{ui:Torna qui}}, {{ui:Sposta su}}, {{ui:Sposta giù}}, {{ui:Elimina}} e il suo **Nome**.
- Uno schizzo aperto: il suo stato, le relazioni che si possono aggiungere alla selezione, l'elenco delle relazioni e delle quote, **Aggiungi per coordinate**, e {{ui:Esci dallo schizzo}}, {{ui:Adatta}} ed {{ui:Esporta come DXF}}.
- Sulla tavola di disegno: le impostazioni di sezione e dettaglio, o il simbolo GD&T selezionato.
- In un assieme: l'assieme, la parte selezionata o il giunto selezionato.

Ogni casella numerica ha effetto quando si preme {{key:Enter}} o {{key:Tab}}, oppure si clicca altrove. La parte si ricostruisce subito; non c'è un pulsante OK. Usare {{key:Mod+Z}} per tornare indietro.

## La barra di stato (in basso)

- A sinistra, le coordinate del puntatore nello schizzo (solo mentre uno schizzo è aperto).
- Al centro, i messaggi: cosa fare dopo, e perché qualcosa è stato rifiutato. Leggerlo quando sembra non succedere nulla.
- Verso destra, il chip del kernel: in questa versione è sempre "Kernel mesh". Passarci sopra per sapere cosa significa. Vedi [Il kernel a mesh](topic:solid-kernels).
- A destra, un chip: "Ricostruzione…" mentre la parte si ricostruisce, poi "Ricostruita in … ms" quando tutto va bene, oppure "1 feature in errore". In un assieme dice "Posizionato in … ms" oppure conta i problemi dei giunti.

Vedi anche [Avviare un manuale in Illustrate](topic:illustrate): l'area di lavoro che crea manuali di assieme dalle proprie parti e dai propri assiemi.

## Su uno schermo stretto

Fino a 760 pixel di larghezza, come su un telefono, la vista mantiene lo schermo: la barra degli strumenti è una riga che scorre in orizzontale, e i pannelli si aprono come fogli da una barra in basso. {{ui:Strumenti}} nasconde la barra degli strumenti e {{ui:Sposta}} la mette in basso. Vedi [Trackpad, tocco e schermi piccoli](topic:trackpad-and-touch).
