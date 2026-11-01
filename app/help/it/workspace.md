---
title: Lo schermo di PartCraft
summary: Un giro di ogni barra e pannello: la barra degli strumenti e come cambia, la cronologia, i dati della parte, la vista 3D, il pannello delle proprietà e la barra di stato.
keywords: schermo, disposizione, barra degli strumenti, cronologia, albero delle feature, proprietà, pannello, barra di stato, interfaccia, ui, panoramica, schermo intero
from: 7394fc49
---

Lo schermo ha cinque parti: la barra degli strumenti in alto, la cronologia a sinistra, la vista 3D al centro, il pannello delle proprietà a destra e la barra di stato in basso. Sopra tutte c'è la barra dell'app CadCraft.

## La barra dell'app

La barra sottile in cima appartiene al sito CadCraft, non a PartCraft stesso. Mostra il nome dell'app e dove gira, un menu delle versioni, **Informazioni su PartCraft**, il pulsante della modalità schermo e l'interruttore del tema Carta / Modello.

- **Carta** è linee scure su un foglio chiaro. **Modello** è linee chiare su sfondo scuro. I colori dello schizzo seguono il tema.
- {{ui:Impostazioni}} (l'ingranaggio, oppure {{key:Mod+,}}) ha una scheda {{ui:PartCraft}}: quale pulsante del mouse ruota la vista, rotellina o trackpad, e relazioni durante lo schizzo. Vedere [Impostazioni di PartCraft](topic:settings).
- Il pulsante della modalità schermo, oppure {{key:Ctrl+Shift+F}}, scorre tra normale, schermo intero e schermo intero con le barre nascoste. Con le barre nascoste, portare il puntatore sul bordo superiore (o toccarlo) per farle tornare. {{key:Esc}} torna alla modalità normale. Anche su Mac il tasto è {{key:Ctrl+Shift+F}}, non ⌘.

## La barra degli strumenti

La barra degli strumenti è divisa in gruppi. Cambia in base a ciò che si sta facendo, così sta su una sola riga:

| Gruppo | Pulsanti | Mostrato |
|---|---|---|
| File | {{ui:Nuovo}}, {{ui:Apri}}, {{ui:Salva}}, {{ui:Esporta}} (un menu) | Sempre |
| Schizzo | {{ui:Schizzo}} | Quando nessuno schizzo è aperto |
| Schizzo | {{ui:Esci}}, {{ui:Linea}}, {{ui:Rettangolo}}, {{ui:Cerchio}}, {{ui:Arco}}, {{ui:Punto}}, {{ui:Mezzeria}}, {{ui:Raccordo}}, {{ui:Quota}}, {{ui:Costruzione}} | Solo mentre uno schizzo è aperto |
| Feature | {{ui:Estrudi}}, {{ui:Taglio}}, {{ui:Rivoluzione}}, {{ui:Foro}}, {{ui:Lineare}}, {{ui:Circolare}}, {{ui:Specchio}}, {{ui:Raccordo}}, {{ui:Smusso}}, {{ui:Svuota}}, {{ui:Altro}} (un menu: Taglio di rivoluzione, Piano, Asse, Punto, Sweep, Loft, Sformo) | Sulla parte, non mentre sono aperti uno schizzo o il disegno. Raccordo e Smusso funzionano su spigoli rettilinei tra due facce piane; Svuota e Sformo su facce piane. Sweep e Loft non sono ancora implementati in questa versione (richiedono un kernel esatto); facendo clic su uno lo si segnala |
| Feature | {{ui:Fine}} | Solo mentre si scelgono spigoli o facce per un raccordo, uno smusso, uno svuotamento o uno sformo |
| Disegno | {{ui:Disegno}} | Sulla parte (utilizzabile quando la parte ha un solido) |
| Disegno | {{ui:Riferimento}}, {{ui:Riquadro}}, {{ui:Finitura}}, {{ui:Dettaglio}}, {{ui:PDF}}, {{ui:Indietro}} | Solo sulla tavola di disegno |
| Assieme | {{ui:Assieme}} | Sulla parte (utilizzabile quando la parte ha un solido) |
| Assieme | {{ui:Aggiungi copia}}, {{ui:Inserisci}}, {{ui:Giunto}}, {{ui:Interferenza}}, {{ui:Modifica parte}}, {{ui:Chiudi}} | Solo in un assieme |
| Assieme | {{ui:Indietro}} | Mentre si modifica una parte da un assieme |
| Modifica | {{ui:Annulla}}, {{ui:Ripristina}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Altro}} (un menu: Taglia, Copia, Incolla, Incolla nella stessa posizione, Duplica, Elimina, Seleziona tutto, Deseleziona tutto) | Sempre; ogni voce agisce sullo schizzo, sulla cronologia o sull'assieme in cui ci si trova |
| Vista | {{ui:Adatta}}, {{ui:Normale a}}, {{ui:Viste}} (un menu: Misura, Proprietà di massa, Sezione, Sformo, Zebra, Curvatura, {{ui:Piani base}}, poi Isometrica, Anteriore, Posteriore, Superiore, Inferiore, Destro, Sinistro) | Sempre |

Passare il puntatore su un pulsante per vedere che cosa fa e il suo tasto. Un pulsante in grigio non si può usare in questo momento: per esempio i pulsanti delle feature mentre uno schizzo è aperto, o {{ui:Giunto}} prima che l'assieme abbia due parti.

Il menu {{ui:Altro}} del gruppo Modifica elenca ogni azione di modifica con il suo tasto. Su che cosa agiscono copia e incolla dipende da dove ci si trova; vedere [Copiare, incollare e duplicare](topic:copy-paste). La descrizione di una voce in grigio spiega perché non può agire ora.

Il menu {{ui:Esporta}} contiene {{ui:STL, per la stampa 3D}}, {{ui:3MF, per la stampa 3D}}, {{ui:STEP AP242 (solido esatto)}}, {{ui:STEP AP214 (solido esatto)}}, {{ui:STEP (a facce, kernel a mesh)}}, {{ui:STEP AP214 (sfaccettato, nucleo mesh)}}, {{ui:DXF dello schizzo o della faccia piana}} e {{ui:Disegno (PDF): viste, sezione, dettaglio, GD&T}}. Le due voci STEP esatte sono in grigio: non sono ancora implementate in questa versione, quindi usare {{ui:STEP (a facce, kernel a mesh)}}.

## La cronologia (a sinistra)

Il pannello a sinistra è la cronologia delle feature della parte, l'elenco che PartCraft ricostruisce dall'alto verso il basso.

- L'intestazione è il nome della parte ("Parte1" finché non la si rinomina).
- **Piano anteriore**, **Piano superiore** e **Piano destro** vengono per primi. Fare clic su uno per selezionarlo; si evidenzia nella vista.
- Sotto ci sono le feature, nell'ordine in cui sono state create. Uno schizzo usato da una feature è rientrato sotto di essa.
- Un indicatore all'estremità destra di una riga ne mostra lo stato:

| Indicatore | Significato |
|---|---|
| (nessuno) | Costruita, e uno schizzo è completamente definito |
| − | Uno schizzo sottodefinito (può ancora muoversi) |
| + | Uno schizzo sovradefinito |
| ⚠ | Costruita, con un avviso (passare il puntatore per leggerlo) |
| ⚠ errore | La feature non è riuscita. Passare il puntatore per leggerne il motivo, oppure farci clic |
| ⚠ non implementata | La feature dipende da un'altra che non è riuscita o è disattivata |
| disattivata | Soppressa |

- Ogni feature mostra il suo numero principale dopo il nome, come "25 mm" per un'estrusione o "Ø6.6 thru" per un foro. Fare doppio clic sul numero, oppure premere {{key:F2}} sulla riga, per cambiarlo lì. Vedere [Cambiare le misure](topic:change-sizes).
- Fare clic su una feature per modificarla a destra. Fare doppio clic su uno schizzo per aprirlo.
- Con il rollback, nell'elenco compare una riga **Barra di rollback · avanza**. Le feature sotto di essa sono in grigio e non costruite.
- Con una riga attiva, {{key:Up}} e {{key:Down}} si spostano tra le righe, e {{key:Alt+Up}} / {{key:Alt+Down}} spostano la feature stessa, dove la cronologia lo consente.

In un assieme lo stesso pannello elenca invece i **Pezzi** (il primo è contrassegnato "fissato") e i **Giunti**.

### Dati della parte

Sotto la cronologia, il riquadro **Parte** elenca **Volume**, **Superficie**, **Misura (X × Y × Z)**, **Fori passanti**, **Corpi**, **Triangoli** del solido, il numero di **Feature** e quante sono **In errore**. Volumi e aree si riferiscono al solido sfaccettato costruito dal kernel a mesh, un po' sotto il valore vero per le forme tonde (vedere [Feature e loro opzioni](topic:features#curves-resolution)).

In un assieme il riquadro ha come intestazione **Assieme**: Pezzi, Istanze, Giunti, Non uniti e Interferenza.

## La vista 3D (al centro)

La vista mostra il solido, i piani base e qualsiasi schizzo non ancora usato da una feature.

I piani base sono disegnati per intero finché la parte è vuota. Quando c'è un solido passano in secondo piano: disegnati tenui, per non coprire la parte, e i clic li attraversano raggiungendo la parte. Tornano per intero mentre si sceglie dove schizzare ({{ui:Schizzo}} senza selezione) e quando se ne seleziona uno nella cronologia. {{ui:Viste}} › {{ui:Piani base}} li nasconde del tutto; si vedono comunque mentre si sceglie dove schizzare. PartCraft ricorda questa scelta.

- Trascinare per ruotare la parte, trascinare con il tasto destro o centrale per fare pan, usare la rotellina per fare zoom sul puntatore. Dettagli in [Tasti e mouse](topic:keyboard).
- Passare il puntatore su una faccia, uno spigolo o un piano per vederlo illuminarsi. Fare clic per sceglierlo. Le facce si evidenziano intere e gli spigoli sono disegnati e scelti interi. {{key:Shift}}+clic raccoglie più spigoli o facce. Restano contrassegnati.
- Il cubo di navigazione in alto a destra ruota con la parte: fare clic su una faccia, uno spigolo o un angolo per guardare da lì, trascinarlo per ruotare, il pulsante a forma di casa torna all'inizio. Vedere [Il cubo di navigazione](topic:view-cube).
- Un'estrusione selezionata mostra una freccia arancione sulla faccia finale, una rivoluzione una freccia curva alla fine della sua rotazione: trascinarla per cambiare la profondità o l'angolo, oppure digitare nella casella accanto. Vedere [Cambiare le misure](topic:change-sizes#drag-it-in-the-view).
- Quando una parte è vuota, un riquadro intitolato **Iniziare una parte** elenca i primi passi.
- Trascinare un file `.partcraft.json` o `.partcraft-asm.json` ovunque sulla vista per aprirlo. Un file `.step`, `.stp`, `.stl`, `.obj`, `.3mf` o `.3dm` trascinato lì si apre come corpo solido.

### Mentre si scelgono spigoli o facce

Dopo {{ui:Raccordo}}, {{ui:Smusso}} o {{ui:Svuota}} senza nulla di scelto (oppure {{ui:Scegli spigoli}} su una feature di questo tipo), la parte appare com'era prima di quella feature. Fare clic su spigoli o facce per aggiungerli o toglierli; i contrassegni mostrano che cosa è incluso. {{ui:Fine}} o {{key:Esc}} termina. Vedere [Raccordare, smussare e svuotare](topic:fillet-chamfer-shell).

### Sulla tavola di disegno

{{ui:Disegno}} sostituisce la vista 3D con la tavola di disegno A3. La rotellina fa zoom, il trascinamento con il tasto destro o centrale fa pan, {{key:F}} adatta. Vedere [Creare un disegno](topic:drawing-pdf).

### Mentre uno schizzo è aperto

La vista ruota per guardare il piano dello schizzo di fronte e in primo piano compare un livello di schizzo 2D. La parte mostra solo le feature create prima di questo schizzo. Una striscia in alto a sinistra mostra il chip di stato dello schizzo ("Completamente definito", "Sottodefinito · 3 gradi di libertà" e così via) e il suo nome, come "Schizzo2 su una faccia di Estrudi1".

## Il pannello delle proprietà (a destra)

Il pannello di destra mostra ciò che è selezionato e la sua intestazione lo nomina:

- **Parte** (nulla di selezionato): il **Nome** della parte e l'impostazione **Curve**.
- Un piano: un pulsante {{ui:Schizzo su di esso}}.
- Una **Faccia**: di che tipo è (Faccia piana, Cilindro con raggio e asse, Cono, Sfera o Toro), la sua area, quale feature l'ha creata e, per una faccia piana, {{ui:Schizzo su questa faccia}}, {{ui:Normale a}}, {{ui:Esporta faccia come DXF}}, {{ui:Estrudi da essa}}, {{ui:Taglia in essa}} e {{ui:Foro qui}} (vedere [Tirare o spingere un'intera faccia](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Uno **Spigolo**: il suo tipo (rettilineo, un cerchio con centro e raggio, o una curva), la lunghezza e le due facce tra cui si trova (come "faccia finale di Estrudi1 e lato di Estrudi1"), con i pulsanti {{ui:Raccordo}} e {{ui:Smusso}}.
- Più spigoli o facce scelti con {{key:Shift}}: quanti sono, con {{ui:Raccordo}} e {{ui:Smusso}} per gli spigoli, e {{ui:Pulisci}}.
- Una feature: i suoi numeri e le sue opzioni, le quote del suo schizzo, poi {{ui:Sopprimi}}, {{ui:Torna qui}}, {{ui:Sposta su}}, {{ui:Sposta giù}}, {{ui:Elimina}} e il suo **Nome**.
- Uno schizzo aperto: il suo stato, le relazioni che si possono aggiungere alla selezione, l'elenco di relazioni e quote, **Aggiungi per coordinate**, e {{ui:Esci dallo schizzo}}, {{ui:Adatta}} e {{ui:Esporta come DXF}}.
- Sulla tavola di disegno: le impostazioni di sezione e dettaglio, oppure il simbolo GD&T selezionato.
- In un assieme: l'assieme, la parte selezionata o il giunto selezionato.

Ogni casella numerica ha effetto premendo {{key:Enter}} o {{key:Tab}}, oppure facendo clic altrove. La parte si ricostruisce subito; non c'è alcun pulsante OK. Usare {{key:Mod+Z}} per tornare indietro.

## La barra di stato (in basso)

- A sinistra, le coordinate del puntatore nello schizzo (solo mentre uno schizzo è aperto).
- Al centro, i messaggi: che cosa fare dopo e perché qualcosa è stato rifiutato. Leggerla quando sembra che non succeda nulla.
- Vicino alla destra, il chip del kernel: in questa versione sempre "Nucleo a mesh". Passare il puntatore per sapere che cosa significa. Vedere [Il kernel a mesh](topic:solid-kernels).
- A destra, un chip: "Ricostruzione in corso…" mentre la parte si ricostruisce, poi "Ricostruito in … ms" quando tutto va bene, oppure "1 feature in errore". In un assieme indica "Posizionato in … ms" o conta i problemi dei giunti.

Vedere anche [Iniziare un manuale in Illustrate](topic:illustrate): l'area di lavoro che crea manuali di assemblaggio dalle parti e dagli assiemi.

## Su uno schermo stretto

Fino a 760 pixel di larghezza, come su un telefono, la vista occupa lo schermo: la barra degli strumenti è una sola riga che scorre in orizzontale e i pannelli si aprono come schede da una barra in basso. {{ui:Strumenti}} nasconde la barra degli strumenti e {{ui:Sposta}} la mette in basso. Vedere [Trackpad, tocco e schermi piccoli](topic:trackpad-and-touch).
