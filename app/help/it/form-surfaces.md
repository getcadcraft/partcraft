---
title: Forme libere con Forma e funzioni di superficie
summary: Spingere e tirare una gabbia di controllo liscia nell'area di lavoro Forma, creare spigoli vivi, usare la simmetria, verificare e terminare la forma come solido o superficie esatti, poi applicare pezze, loft, cuciture, ispessimenti, offset, estensioni e rifilature alle superfici in Progettazione. Che cosa è esatto e che cosa è approssimato.
keywords: forma, forma libera, T-spline, suddivisione, Catmull-Clark, gabbia, quadball, piega, simmetria, zebra, curvatura, superficie, pezza, riempimento, superficie per loft, cucitura, cuci, ispessisci, superficie di offset, estendi, rifila
from: 0d326ef4
---

:::note
**Non ancora implementato in questa versione.** Terminare una forma nella parte e le funzioni di superficie richiedono un kernel geometrico esatto, che questa versione di PartCraft non ha: costruisce ogni parte con il kernel mesh. [Che cosa non è ancora implementato](topic:not-built-yet) spiega cosa fare invece. Il resto di questa pagina descrive come funzionano con un kernel esatto.
:::

L'area di lavoro **Forma** crea forme organiche. Si modifica una **gabbia**, una mesh grossolana di vertici, spigoli e facce. La forma è la superficie liscia che la gabbia controlla (la sua superficie limite Catmull–Clark), quindi spostando un vertice la superficie si piega dolcemente intorno ad esso. Quando l'aspetto è corretto, **Termina** la aggiunge alla cronologia della parte come funzione *Forma*, e il kernel esatto la trasforma in vere superfici B-spline. Poi è possibile raccordarla, tagliarla, unirla ad altre funzioni ed esportarla come STEP.

Scegliere **Forma** nell'elenco **Area di lavoro** a sinistra della barra degli strumenti.

## Avviare una gabbia

1. Impostare **Dimensione** e **Suddivisioni** nel pannello destro. Le suddivisioni indicano quante facce ha ciascun lato.
2. Fare clic su {{ui:Parallelepipedo}}, {{ui:Quadball}} o {{ui:Piano}} nella barra degli strumenti. Il pannello include anche **Cilindro**, **Toro** e **Facce con clic**.

- Una **quadball** è una gabbia a forma di box adattata in modo che i suoi punti d'angolo giacciano su una sfera. Tra questi punti la superficie sta un po' all'interno della sfera: circa lo 0.4 % di volume in meno con 2 suddivisioni.
- Un **piano** è aperto, quindi diventa un corpo superficie (vedi "Funzioni di superficie in Progettazione" più sotto).
- **Facce con clic**: fare clic su 4 punti del piano superiore (di terra) oppure sugli angoli della gabbia per creare una faccia. Le facce che condividono degli angoli si uniscono. Premere {{key:Enter}} dopo 3 punti per un triangolo, oppure {{key:Esc}} per fermarsi.

La gabbia non terminata viene salvata con il file della parte, quindi si può chiudere il file e continuare più tardi.

## Selezionare e spostare

- Fare clic su un vertice, uno spigolo o una faccia della gabbia. {{key:Shift}}+clic aggiunge o toglie elementi. {{key:Esc}} annulla la selezione.
- Un gizmo appare al centro della selezione. Trascinare una freccia per spostarsi lungo di essa, oppure un quadrato per spostarsi in quel piano. Premere {{key:W}} per spostare, {{key:E}} per ruotare e {{key:R}} per scalare, oppure usare i pulsanti del pannello. {{ui:Gizmo}} nella barra degli strumenti scorre tra di essi.
- **Attenuazione morbida** (mm) trascina anche i vertici entro quella distanza, sfumando dolcemente fino a zero al bordo di quella distanza.
- Ogni trascinamento è un solo passo di annullamento: {{key:Ctrl+Z}} e {{key:Ctrl+Y}} funzionano come di consueto.

## Modificare la gabbia

I pulsanti **Modifica** del pannello agiscono sulla selezione:

| Pulsante | Funzione |
|---|---|
| {{ui:Estrudi}} | Le facce selezionate si spostano verso l'esterno di **Distanza di estrusione**, lungo le loro normali, con nuove facce laterali. Gli spigoli aperti selezionati fanno crescere verso l'esterno nuove facce. |
| {{ui:Anello}} / Inserisci anello di spigoli | Divide l'anello di facce a quattro lati che attraversa lo spigolo selezionato, a metà percorso. Più anelli danno curve più strette. |
| Inserisci vertice | Aggiunge un vertice a metà dello spigolo selezionato. |
| Suddividi | Divide ciascuna faccia selezionata in facce a quattro lati attorno al suo centro. |
| Ponte | Unisce due facce selezionate, oppure due aperture (selezionare uno spigolo aperto su ciascuna), con un tubo di facce. Entrambe devono avere lo stesso numero di spigoli. |
| Riempi foro | Chiude l'apertura attraverso lo spigolo aperto selezionato con una sola faccia. |
| Saldatura | Unisce i vertici selezionati in uno solo, nel loro punto medio. |
| Appiattisci | Sposta i vertici selezionati sul piano che li approssima meglio. |
| Elimina | Rimuove le facce, gli spigoli (due facce si uniscono) o i vertici selezionati. |

## Spigoli vivi, simmetria e visualizzazione

- {{ui:Piega}} rende vivi gli spigoli selezionati. **Peso piega** 10 è completamente vivo. Un peso minore resta vivo per quel numero di passi di raffinamento e poi si ammorbidisce, dando un raccordo stretto invece di una piega netta. **Rimuovi piega** li rende di nuovo lisci. **Vertice vivo** fissa un vertice in modo che la superficie passi per esso con un punto.
- **Simmetria** rispecchia la gabbia rispetto a X, Y o Z = 0. Mantiene il lato positivo, lo rispecchia e unisce le due metà. Dopo, una modifica su un lato avviene su entrambi. I vertici sul piano di specchio restano su di esso.
- {{ui:Vista}} alterna tra **Liscia** (la superficie che sarà la funzione) e **Box** (le facce della gabbia stessa).
- **Analisi**: **Strisce zebra** riflettono una luce a strisce dalla vista corrente. Si piegano dolcemente su una superficie liscia e si interrompono su una piega. **Curvatura media** colora le aree convesse di rosso, quelle concave di blu e le aree piane di bianco. È misurata sulla mesh visualizzata con la formula delle cotangenti, quindi è una guida, non una misura.

## Verificare e terminare

- **Verifica esatta** converte la gabbia nel kernel esatto senza modificare la parte. Riporta quante patch B-spline forma la gabbia, quante sono esatte, e se il risultato è un solido chiuso e valido e il suo volume.
- {{ui:Termina}} aggiunge una funzione *Forma* alla cronologia, oppure aggiorna la forma che si stava modificando, e riporta a Progettazione. Una gabbia chiusa diventa un solido. La sua **Operazione** nel pannello Progettazione può essere Nuovo corpo, Unisci, Taglia o Interseca. Una gabbia aperta diventa un corpo superficie.
- Per modificare una forma in seguito, selezionarla nella cronologia e fare clic su **Modifica in Forma**. Il corpo costruito viene nascosto mentre si modifica la sua gabbia.
- **Scarta** elimina la gabbia senza toccare la cronologia.

## Che cosa è esatto e che cosa è approssimato

Ogni faccia a quattro lati della gabbia, raffinata quando serve, diventa una patch B-spline bicubica.

- Dove ogni vertice di una faccia è *regolare* (quattro spigoli si incontrano all'interno della superficie, oppure tre su uno spigolo aperto o lungo una piega), la patch è **esattamente** la superficie di suddivisione. I test lo verificano a 1e-9 mm.
- Intorno a un **punto straordinario** (tre, cinque o più spigoli che si incontrano, un vertice di una faccia a tre o cinque lati, oppure la fine di una piega) non esiste una patch polinomiale esatta. Lì la patch prende il punto esatto e il piano tangente in quel vertice e le curve degli spigoli dei vicini, quindi le patch si uniscono senza spazi. La continuità tangente lungo gli spigoli che si incontrano nel punto è approssimata. Il pannello Forma e il pannello della funzione indicano l'angolo più grande, di solito sotto 2°. Un **Livello** più alto nel pannello della funzione rende queste patch più piccole e più vicine.
- Le pieghe vive sono veri spigoli del solido, quindi è possibile raccordarle.
- Ogni patch è una faccia a sé, quindi una forma ha molte facce e tra di esse vengono tracciate linee.

## Funzioni di superficie in Progettazione

I comandi di superficie sono nel menu {{ui:Altro}} di Progettazione, sotto le funzioni. Richiedono il kernel esatto. I corpi superficie sono disegnati trasparenti in blu. Non fanno parte del solido finché non vengono ispessiti o cuciti.

| Comando | Funzione |
|---|---|
| Pezza | Riempie un ciclo chiuso di spigoli. Tenere premuto {{key:Shift}} e fare clic sugli spigoli del solido prima, oppure selezionare un corpo superficie per riempire la sua apertura. **Tangente (G1)** fa sì che la pezza si raccordi a quella superficie in modo liscio. |
| Superficie per loft | Una superficie attraverso una catena di curve per schizzo (aperta o chiusa), nell'ordine della cronologia. |
| Cucitura | Cuce i corpi superficie lungo i loro spigoli comuni. Se si chiudono, il risultato è un solido, con un'Operazione come le altre funzioni. |
| Ispessisci | Dà a un corpo superficie uno spessore: lungo la sua normale, contro di essa, oppure metà per ciascun lato. Il risultato è un solido. |
| Superficie di offset | Una copia di un corpo superficie spostata lungo le sue normali. L'originale resta. |
| Estendi superficie | Allunga una superficie a una faccia oltre gli spigoli scelti. |
| Rifila superficie | Taglia un corpo superficie dove un altro corpo superficie, o il solido, lo attraversa. Fare clic su **Scegli un punto sul pezzo** per scegliere quale pezzo mantenere, oppure mantenere tutto il resto. |

Cucitura, Ispessisci, Estendi e Rifila consumano il corpo superficie da cui partono. Le funzioni successive usano quello nuovo.

Limiti attuali: le forme con diversi pezzi chiusi separati non si convertono in un solo solido; le aree regolari non vengono unite in superfici più grandi; e vedi [Che cosa non è ancora implementato](topic:not-built-yet).
