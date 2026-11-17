---
title: Unire, spostare e scalare i corpi; serie lungo un percorso
summary: Creare corpi separati, poi unirli, tagliarli o intersecarli a posteriori, spostarli, ruotarli, allinearli o copiarli, scalarli in modo uniforme o per X, Y e Z, e copiare feature o corpi lungo una curva.
keywords: corpo, corpi, multicorpo, nuovo corpo, combina, booleana, unisci, taglia, interseca, sottrai, unione, mantieni utensili, sposta corpo, copia corpo, ruota corpo, allinea, trasla, scala, scala non uniforme, stira, affine, serie su percorso, serie lungo curva, array lungo percorso, serie guidata da curva
from: 6b1ea820
---

:::note
**Non ancora implementato in questa versione.** Lavorare con più corpi richiede un kernel geometrico esatto, che questa versione di PartCraft non ha: costruisce ogni parte con il kernel a mesh. [Cosa non è ancora implementato](topic:not-built-yet) spiega cosa fare invece. Il resto di questa pagina descrive il comportamento con un kernel esatto.
:::

Una parte può contenere più solidi. Ogni solido separato è un **corpo**. La maggior parte delle feature aggiunge o taglia da ogni corpo che tocca; gli strumenti di questa pagina lavorano sui corpi interi che si scelgono. Si trovano nel menu {{ui:Altro}} del gruppo Feature: {{ui:Combina}}, {{ui:Sposta corpo}}, {{ui:Scala corpo}} e {{ui:Serie su percorso}}. Tutti richiedono il kernel esatto (OpenCascade).

## Creare un corpo separato

Nel pannello di destra impostare **Operazione** di un'estrusione o di una rivoluzione su **Nuovo corpo** (lo hanno anche sweep e loft). Il nuovo solido resta separato anche dove si sovrappone agli altri. **Interseca** mantiene solo la parte in comune tra la nuova forma e ciò che c'è già.

I corpi prendono il nome dalla feature che li ha creati: "Extrude2". Una copia prende il nome dall'originale e dalla feature che l'ha copiata: "Extrude2, copia 1 di Move1". I nomi restano invariati quando si cambiano le misure a monte, così le feature che usano un corpo continuano a trovarlo. Con due o più corpi, il pannello della parte (fare clic su uno spazio vuoto) li elenca con i loro volumi.

## Rinominare o nascondere un corpo

Fare clic su uno spazio vuoto nella vista per vedere il pannello della parte. Il suo elenco di corpi (mostrato quando la parte ha due o più corpi) ha una casella del nome e un pulsante {{ui:Nascondi}} su ogni riga.

- **Rinomina:** digitare un nuovo nome nella casella e premere {{key:Enter}} oppure fare clic altrove. Ogni pannello lo usa poi: Combina, Sposta corpo, le serie. Svuotare la casella per tornare al nome della feature che ha creato il corpo.
- **Nascondi:** fare clic su {{ui:Nascondi}} sulla sua riga. Il corpo esce dalla vista e i clic lo attraversano, così si possono scegliere le facce che stanno dietro. {{ui:Mostra}} lo riporta; {{ui:Mostra tutti}} riporta tutti i corpi nascosti.

Nascondere cambia solo la vista. Un corpo nascosto viene comunque costruito, conteggiato nel volume e nelle misure, e salvato nelle esportazioni STL, 3MF e STEP. Nomi e corpi nascosti sono salvati nel file della parte, e ogni modifica è un passo di {{ui:Annulla}}.

## Combinare corpi

1. Shift+clic su una faccia del corpo **bersaglio**, poi su una faccia di ogni corpo **utensile**.
2. Scegliere {{ui:Altro}}, poi {{ui:Combina}}.
3. Nel pannello di destra scegliere l'**Operazione**:

| Operazione | Risultato |
|---|---|
| Unisci | Il corpo bersaglio e gli utensili diventano un unico corpo |
| Taglia | Gli utensili vengono tolti dal corpo bersaglio |
| Interseca | Resta solo ciò che il bersaglio e tutti gli utensili hanno in comune |

**Corpo bersaglio** è quello che mantiene il proprio nome. Spuntare o togliere la spunta a **Corpi utensili**, oppure usare **Scegli nella vista** e fare clic sulle loro facce. **Mantieni i corpi utensili** lascia anche gli utensili al loro posto (utile per uno stampo e la sua anima). Se un corpo utensile è già stato consumato da una combinazione precedente, il pannello lo segnala invece di scegliere un altro corpo.

## Spostare o copiare un corpo

1. Scegliere {{ui:Altro}}, poi {{ui:Sposta corpo}}. Il corpo più recente è spuntato; spuntare quelli da spostare.
2. Scegliere il tipo di **Spostamento**:

| Spostamento | Cosa si imposta |
|---|---|
| Traslazione | **ΔX**, **ΔY**, **ΔZ** in millimetri |
| Da punto a punto | **Da** e **A**: fare clic vicino all'estremità di uno spigolo, su un punto feature o su un punto di una faccia |
| Ruota attorno a un asse | **Asse** (X, Y, Z, una feature di asse, oppure **Scegli**: uno spigolo rettilineo, un cerchio o un cilindro) e **Angolo (°)** |
| Allinea una faccia a un piano o a una faccia | **Faccia da spostare** (una faccia piana del corpo), **Su** (una faccia piana o un piano) |

Allinea ruota il corpo in modo che la sua faccia poggi sull'altra faccia, faccia a faccia, poi lo fa scorrere solo lungo la normale di quella faccia. **Stesso verso** lo ruota nel verso opposto. **Copia** mantiene l'originale e aggiunge la copia spostata come nuovo corpo.

## Scalare un corpo

1. Scegliere {{ui:Altro}}, poi {{ui:Scala corpo}}, e spuntare i corpi.
2. Digitare una **Scala**, oppure togliere la spunta a **Uniforme** e digitare **Scala X**, **Scala Y** e **Scala Z** (lungo gli assi globali).
3. **Rispetto a** è il punto che resta fermo: il centro del riquadro dei corpi, oppure un punto che si sceglie.

Una scala uniforme è esatta. Una scala non uniforme trasforma i cerchi in ellissi: un cilindro diventa un cilindro ellittico, che nessuna superficie analitica può contenere. Quindi le facce curve diventano superfici B-spline che restano entro 0.0000004 mm dalla forma esatta; le facce piane e gli spigoli rettilinei restano esatti. Il pannello indica cosa è successo. I fattori di scala devono essere maggiori di zero (per la simmetria usare invece {{ui:Specchio}}).

## Copiare lungo un percorso

1. Selezionare nella cronologia la feature da copiare, oppure lasciare tutto deselezionato per copiare il corpo più recente.
2. Scegliere {{ui:Altro}}, poi {{ui:Serie su percorso}}. Lo schizzo più recente non usato viene preso come percorso.
3. Nel pannello di destra impostare:

| Impostazione | Cosa fa |
|---|---|
| **Copia** | Corpi (ogni copia è un nuovo corpo) oppure Feature (unite o tagliate come l'originale) |
| **Percorso** | Spuntare degli schizzi, oppure **Scegli spigoli del modello**; i tratti devono unirsi testa a coda |
| **Numero** | Numero totale, originale incluso |
| **Spaziatura** | Uguale (distribuite fino alla fine di un percorso aperto, oppure lungo tutto un percorso chiuso) oppure una distanza impostata |
| **Orientamento** | Segue il percorso (ogni copia ruota con esso) oppure Fisso (le copie restano parallele) |
| **Inverti direzione** | Percorre il percorso nel verso opposto |

Le copie partono dal punto in cui il percorso passa più vicino all'originale e sono distanziate in base alla lunghezza lungo la curva.

Anche le serie lineari e circolari possono copiare corpi: spuntare **Copia corpi** nel loro pannello e scegliere i corpi; ogni copia è un nuovo corpo.

## Limiti

- I corpi richiedono il kernel esatto; il kernel a mesh mantiene un solo solido e lo dichiara.
- Una scala non uniforme trasforma le facce curve in approssimazioni B-spline vicine (vedi sopra), non in cilindri o coni esatti; le superfici di offset non possono ancora essere scalate in questo modo.
- Seguire il percorso su una curva 3D che si torce porta la copia senza torcerla; sui percorsi piani la rotazione è esatta.
- Combina funziona solo sui solidi. I corpi di superficie si uniscono con {{ui:Cuci}}.

Vedi anche [Piani, assi e punti di riferimento](topic:reference-geometry) per punti e piani "tra oggetti", e [Feature di serie e specchio](topic:patterns-mirror).
