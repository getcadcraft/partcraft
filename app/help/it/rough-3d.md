---
title: Sgrossatura 3D e lavorazione del residuo
summary: Asportare il sovrametallo attorno a tutto il modello, livello per livello, con una fresa piatta, a raggio d'angolo o a sfera, lasciando materiale per la finitura, poi far tagliare una fresa più piccola solo dove la prima ha lasciato materiale. Cosa garantiscono i percorsi, e cosa no.
keywords: sgrossatura 3d, sgrossatura, lavorazione del residuo, residuo, sovrametallo rimanente, sovrametallo da lasciare, passo di discesa, livelli, quota z, rampa, tuffo, sfondamento, utensile più piccolo
from: 29ddc266
---

Due operazioni in Produzione, sotto {{ui:Altro}} nella sua barra degli strumenti, asportano il grezzo su **tutto il modello** in 3D, con l'utensile tenuto verticale (o lungo la [direzione utensile](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) propria dell'operazione). Non richiedono selezioni.

## Sgrossatura 3D

{{ui:Sgrossatura 3D}} scende dalla parte alta del grezzo un **passo di discesa** alla volta. A ogni livello asporta tutto ciò che l'utensile può raggiungere senza toccare il modello: righe diritte distanti un **passo** (una frazione del diametro dell'utensile), poi una volta lungo il bordo di ciò che può raggiungere, così le pareti vengono seguite e non lasciate come una fila di gradini in pianta.

- **Sovrametallo da lasciare**: quanto l'utensile resta lontano dal modello ovunque, per la passata di finitura (predefinito 0.5 mm).
- **Un livello a ogni faccia piana**: un livello in più all'altezza di ogni faccia piana del modello (più il sovrametallo da lasciare), così un fondo non viene lasciato quasi alto un intero passo di discesa.
- **Ignora il grezzo più sottile di**: il materiale più sottile di questo valore, verso l'alto o di lato, non vale una passata (0.05 mm per la sgrossatura, 0.5 mm per la lavorazione del residuo, così che un velo lasciato lungo una parete non mandi l'utensile più piccolo lungo ogni parete).
- **Fondo**: non viene tagliato nulla sotto questa altezza. Vuoto significa il fondo del modello.

Parte dal grezzo **come lo hanno lasciato le operazioni precedenti**: dopo una passata di spianatura non taglia l'aria dove è già passata la fresa a spianare.

Discesa: dove l'utensile incontrerebbe materiale scendendo, scende in rampa lungo la propria passata con l'**angolo di rampa**, avanti e indietro su al massimo due diametri utensile. Una passata troppo corta per questo viene tuffata verticalmente con l'avanzamento di tuffo; l'operazione li conta e avvisa, perché un utensile che non taglia al centro non dovrebbe farlo.

## Lavorazione del residuo

{{ui:Residuo}} è la stessa strategia per **un utensile più piccolo dopo uno più grande**. Legge la simulazione del grezzo e taglia solo dove il materiale è ancora in piedi: negli angoli interni in cui l'utensile grande non poteva entrare, nelle cave in cui non entrava, nei gradini lasciati sulle pendenze. Altrove non fa nulla, quindi il suo percorso è una piccola parte di quello che lo stesso utensile farebbe su grezzo nuovo.

Metterlo dopo l'operazione di sgrossatura e scegliere l'utensile più piccolo. Richiede la simulazione del grezzo delle operazioni precedenti, che l'area di lavoro esegue sempre.

## Qualità dei percorsi

- **Nessuno sfondamento.** Le posizioni dell'utensile sono calcolate su una griglia, con la fresa considerata un po' più grande di com'è (di 1.4 celle di griglia lateralmente, e del sovrametallo da lasciare), così che ovunque si trovi sia libera dal modello. I test verificano ogni punto di taglio rispetto all'utensile esatto sulla mesh esatta, e la simulazione del grezzo dopo ogni esecuzione: nessuno sfondamento, nessun movimento rapido attraverso il grezzo.
- **Il prezzo di tutto questo**: le pareti mantengono un po' più del sovrametallo da lasciare, fino alla quantità indicata come "Sovrametallo extra sulle pareti" nell'operazione (circa 0.5 mm per un utensile Ø6, meno per uno più piccolo). La passata di finitura lo asporta.

Questi percorsi non sono:

- Righe diritte, non offset della forma del pezzo né curve a ingaggio costante. Fanno più sollevamenti e movimenti in aria di una strategia a offset o adattiva, e la prima riga a ogni livello taglia la larghezza piena dell'utensile. Per le tasche a fondo piano, [Adattiva](topic:manufacture) è la sgrossatura migliore.
- Il gambo e il portautensile non sono verificati. Un avviso segnala quando il taglio è più profondo della lunghezza del tagliente.
- I sottosquadri non sono visti: il modello è ciò che l'utensile incontra scendendo lungo il proprio asse. Per sgrossare un lato, dare a una seconda operazione una [direzione utensile inclinata](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- La lavorazione del residuo conosce il grezzo solo quanto la griglia della simulazione (celle da 0.1 a 2 mm, secondo la dimensione del pezzo).
- Su un pezzo grande il programma è lungo (oltre 100.000 movimenti per una flangia da 200 mm con un utensile Ø6) e richiede circa un minuto per il calcolo, e ogni modifica nell'area di lavoro ricalcola l'intero programma. Per la sgrossatura usare l'utensile più grande che entra.
- Controllare l'output nel simulatore della propria macchina prima di tagliare.
