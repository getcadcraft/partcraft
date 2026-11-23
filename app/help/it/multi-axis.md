---
title: Lavorazione a 4 e 5 assi
summary: Indicare a PartCraft quali assi rotativi ha la macchina, inclinare l'utensile per qualsiasi operazione ordinaria, finire una superficie con una fresa a sfera che si inclina mentre taglia, oppure girare il pezzo sotto l'utensile su un quarto asse. Cosa viene scritto nel G-code, e cosa non è stato provato.
keywords: 5 assi, cinque assi, 4 assi, quarto asse, più assi, multiasse, 3+2, indicizzato, posizionale, inclinazione, utensile inclinato, rotativo, trunnion, tavola, testa, asse a, asse b, asse c, tcp, rtcp, punto centrale utensile, g43.4, tempo inverso, g93, cinematica, perno, swarf, angolo di attacco
from: c4f1c491
---

Produzione può tenere l'utensile ad angolo, e può muovere gli assi rotativi durante il taglio. Tre cose lo fanno, dalla più semplice alla più complessa.

**Nulla qui è stato eseguito su una macchina.** I percorsi sono verificati rispetto alla geometria dai test e il G-code viene riletto, ma i post integrati seguono i codici documentati dei controlli, non una macchina che abbiamo davanti. Provare un programma nel simulatore del proprio controllo e a vuoto prima che tocchi il metallo.

## Gli assi rotativi della macchina

Nella scheda **Impostazione**, {{ui:Assi rotativi}} indica cosa ha la macchina:

| Scelta | La macchina |
|---|---|
| Nessuno (3 assi) | Una fresatrice semplice. Ogni operazione che richiede l'utensile inclinato avvisa, e il post rifiuta di scriverla. |
| A (ruota attorno a X) | Un asse rotativo lungo X: una tavola a quarto asse o un indicizzatore. L'utensile può inclinarsi solo nel piano Y–Z. |
| B (ruota attorno a Y) | Un asse rotativo lungo Y. L'utensile può inclinarsi solo nel piano X–Z. |
| A e C | Un asse di inclinazione attorno a X portato da, o che porta, una rotazione attorno a Z: una tavola trunnion, o una testa. |
| B e C | Lo stesso con l'inclinazione attorno a Y. |

Poi:

- **Portato da**: {{ui:La tavola (ruota il pezzo)}} oppure {{ui:La testa (ruota l'utensile)}}. Una tavola ruota nel verso opposto per portare la stessa faccia sotto l'utensile, quindi il segno di ogni angolo deriva da questo.
- **Il controllo mantiene la punta dell'utensile sul percorso (TCP)**: attivo, X Y Z nel programma sono la punta dell'utensile nelle coordinate proprie del pezzo e il controllo fa il resto (i post integrati stile Fanuc e LinuxCNC scrivono `G43.4` per la lunghezza utensile). Disattivo, su una macchina a tavola, PartCraft scrive X Y Z mentre la tavola ruotata porta il pezzo, attorno al **centro di rotazione** indicato (nelle coordinate di lavoro; 0, 0, 0 quando l'origine pezzo è al centro). Una macchina a testa richiede il TCP attivo: senza, il programma avrebbe bisogno della lunghezza del perno della macchina, che PartCraft non conosce.
- **Limite di inclinazione**: fino a dove arriva l'asse di inclinazione.

Le macchine differiscono nel verso che considerano positivo. Se un asse gira al contrario sulla propria, cambiare il segno in una copia del post ([Post-processori modificabili](topic:post-processors)).

## Un utensile inclinato per un'operazione ordinaria

Ogni operazione di fresatura (spianatura, tasca, adattiva, contorno, foratura, smusso, parallelo, cresta, sgrossatura 3D, residuo) ha una **Inclinazione utensile** e una **Inclinazione verso**: la direzione dell'utensile per la sola operazione, misurata dall'asse utensile dell'impostazione. È la lavorazione 3+2: gli assi rotativi vanno in una posizione e restano lì mentre tre assi tagliano.

- Digitare i due angoli, oppure premere {{ui:Utensile perpendicolare a una faccia}} e fare clic su una faccia piana: l'utensile punterà direttamente verso di essa.
- Selezionare le facce e gli spigoli dell'operazione come di consueto. Ciò che conta come fondo o foro è giudicato lungo l'utensile inclinato.
- Il grezzo per quella direzione è il parallelepipedo che contiene il grezzo ruotato, così quote e sicurezze sono sicure da quel lato.

Nel G-code, prima dell'operazione l'utensile sale, gli assi rotativi ruotano e l'utensile scende sopra il suo primo punto. Su una macchina a tavola senza TCP, gli archi restano archi e i cicli di foratura fissi restano cicli (il riferimento scritto è ruotato solo attorno a Z). Con il TCP in un piano inclinato, gli archi diventano linee brevi e i cicli i movimenti che rappresentano.

La simulazione del grezzo esegue una direzione inclinata **da sola**: mostra ciò che quell'operazione taglia dal grezzo intero visto da quel lato, e vi trova sfondamenti, ma i tagli fatti da altre direzioni non vengono riportati.

## Finitura a 5 assi

{{ui:Altro}} nella barra degli strumenti di Produzione elenca questa operazione e la successiva in cima alla scheda **Operazioni**.

{{ui:5 assi}} è la [passata di finitura parallela](topic:finish-3d) con una **fresa a sfera che si inclina mentre avanza**. Una sfera taglia con la sua superficie sferica, e la sfera è la stessa qualunque sia l'inclinazione dell'utensile attorno al suo centro, quindi la sfera segue esattamente il percorso che darebbe la passata a 3 assi e cambia solo la direzione dell'utensile:

- **Verso la superficie**: 1 = perpendicolare alla superficie, 0 = verticale, qualsiasi valore intermedio.
- **Inclinazione in avanti**: gradi lungo la direzione del taglio, così che il centro fermo della sfera non sia ciò che taglia.
- **Inclinazione massima**: l'utensile non si inclina mai oltre questo valore rispetto all'asse dell'impostazione.

Dove il gambo toccherebbe il modello, l'inclinazione viene ridotta finché non libera, e l'operazione indica in quanti punti. Ogni passata viene iniziata e lasciata con un sollevamento rettilineo.

## Finitura rotativa (quarto asse)

{{ui:Rotativa}} serve per un pezzo tenuto lungo **X di lavoro** su un asse rotativo. Il pezzo ruota e una fresa a sfera, sempre rivolta verso l'asse, segue la sua superficie:

- **Passate**: {{ui:Lungo l'asse}} (linee lungo X, distanti un passo di rotazione) oppure {{ui:Intorno al pezzo}} (anelli, distanti un passo di X).
- **Asse a Y / Z**: dove si trova l'asse. Vuoto significa il centro del grezzo. Su una macchina a tavola senza TCP deve essere il centro di rotazione in Impostazione; l'operazione avvisa quando non lo è.
- **Da / A X** e **Da / A angolo**: la parte della lunghezza e della rotazione da tagliare.

L'altezza della sfera sopra l'asse in ogni punto è la discesa esatta di una sfera sulla mesh del pezzo, da quel lato.

## Limiti

- La finitura a 5 assi e rotativa accetta solo una **fresa a sfera**. Non c'è taglio di fianco (il lato dell'utensile su una parete rigata), né linee di flusso lungo le direzioni proprie di una superficie, né sgrossatura a più assi e nessuna scelta automatica dell'inclinazione per evitare una collisione.
- I percorsi a 5 assi e rotativi **non passano dalla simulazione del grezzo**, che è una mappa di altezze e non può contenere un taglio inclinato.
- Il gambo è verificato nella finitura a 5 assi rispetto al modello visto dall'alto; il portautensile, il mandrino e la macchina stessa non sono verificati da nessuna parte.
- La finitura rotativa taglia solo ciò che l'utensile vede guardando verso l'asse.
- La finitura a 5 assi richiede un minuto o più per il calcolo su un pezzo grande: il gambo è verificato in ogni punto di ogni passata.
- Quando gli assi rotativi si muovono insieme a quelli lineari e il TCP è disattivo, i post integrati scrivono l'avanzamento a tempo inverso (`G93`), poi tornano a `G94`.
- Non viene scritto alcun codice di piano di lavoro inclinato (`G68.2` e simili), e non sono noti limiti specifici della macchina, svolgimenti o zone di collisione.
