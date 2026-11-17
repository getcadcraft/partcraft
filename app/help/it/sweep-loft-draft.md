---
title: Sweep, loft e sformo
summary: Eseguire lo sweep di un profilo chiuso lungo un percorso di curve di schizzo o spigoli del modello, il loft tra sezioni su piani diversi e lo sformo delle facce; con le opzioni, i risultati esatti e i messaggi.
keywords: sweep, sporgenza per sweep, taglio per sweep, tubo, percorso, loft, sporgenza per loft, fondi sezioni, rigato, sformo, angolo di sformo, facce rastremate, piano neutro, direzione di estrazione, stampaggio
from: 9d637981
---

:::note
**In questa versione** sweep e loft non sono ancora implementati: richiedono un kernel geometrico esatto, che questa versione di PartCraft non ha. [Cosa non è ancora implementato](topic:not-built-yet) spiega cosa fare al loro posto; le sezioni Sweep e Loft descrivono il loro funzionamento con un kernel esatto. **Lo sformo funziona** sulle facce piane: il kernel a mesh lo crea, con lo stesso risultato che dà un kernel esatto.
:::

Tutte e tre si trovano nel menu {{ui:Altro}} del gruppo Feature (vedi [Il kernel a mesh](topic:solid-kernels)). Ciascuna può unire materiale, tagliarlo, mantenere solo la sovrapposizione (**Intersezione**) oppure creare un **Nuovo corpo** (per sweep e loft: **Operazione** nel pannello).

## Sweep

Uno sweep sposta un profilo chiuso lungo un percorso: tubi, maniglie, molle di filo, guide.

1. Disegnare il **percorso** in uno schizzo: linee e archi uniti in sequenza (oppure usare spigoli del modello, più sotto).
2. Disegnare il **profilo** in un altro schizzo il cui piano passa per un estremo del percorso, per esempio un cerchio sul piano superiore all'inizio di un percorso disegnato sul piano anteriore.
3. Selezionare lo schizzo del profilo e scegliere {{ui:Altro}}, poi {{ui:Sweep}}. Lo schizzo diverso più recente diventa il percorso.

Nel pannello:

| Impostazione | Cosa fa |
|---|---|
| **Percorso** | Spuntare gli schizzi che formano il percorso (più schizzi si uniscono in sequenza in un unico percorso 3D); **Scegli spigoli del modello** aggiunge spigoli della parte |
| **Orientamento** | Segue il percorso (predefinito), Frenet, Fisso (le sezioni restano parallele al profilo), Mantieni una direzione, Lungo una curva guida |
| **Scala finale** | Il profilo cresce o si riduce in modo lineare fino a questa dimensione alla fine (1 = costante) |

Gli angoli vivi nel percorso sono raccordati a unghia. Un cerchio di raggio 5 fatto scorrere lungo una linea di 100 mm è un cilindro di esattamente 2500π mm³; lungo un quarto d'arco di raggio 50, un quarto di toro di 625π² mm³.

## Loft

Un loft crea una fusione tra due o più sezioni su piani diversi.

1. Disegnare ogni sezione nel proprio schizzo (un solo anello chiuso ciascuno), su piani base, piani di riferimento (vedi [Piani, assi e punti di riferimento](topic:reference-geometry)) o facce.
2. Scegliere {{ui:Altro}}, poi {{ui:Loft}}. Ogni schizzo con un solo anello non ancora usato diventa una sezione, in ordine di cronologia.

Il pannello elenca le sezioni in ordine (**Sposta su** le riordina, **Rimuovi** ne elimina una); **Aggiungi uno schizzo** ne aggiunge un'altra, **Scegli una faccia** aggiunge una faccia piana della parte. **Rigato** crea facce piane tra le sezioni invece di una fusione liscia. Tra due quadrati, entrambi sono lo stesso tronco di piramide (da un quadrato di 40 mm a uno di 20 mm su 30 mm: esattamente 28000 mm³).

Sezioni con numero di lati diverso (un quadrato e un triangolo) vengono abbinate da OpenCascade, che può torcere le facce laterali; la funzione lo segnala con un avviso. Disegnare le sezioni con lo stesso numero di lati, partendo da angoli corrispondenti, per il risultato più pulito.

### Guide

Le guide sono curve che i lati del loft devono seguire dalla prima sezione all'ultima, per un rigonfiamento, una strozzatura o un allargamento disegnati dall'utente.

1. Disegnare due o più guide: curve aperte (linee, archi, spline) che vanno dalla prima sezione all'ultima e attraversano ogni sezione una volta. Uno schizzo può contenere più guide: ogni catena separata al suo interno è una guida a sé. Disegnare una guida in modo che incontri davvero ogni sezione: agganciarne le estremità ai punti delle sezioni.
2. Nel pannello del Loft, sotto **Guide**, spuntare gli schizzi che le contengono, oppure fare clic su {{ui:Scegli spigoli del modello come guide}} e fare clic sugli spigoli della parte ({{key:Esc}} termina).

Con le guide il loft è una superficie di Gordon attraverso le sezioni e le guide (vedi [Superfici attraverso una rete di curve](topic:gordon-surfaces)), chiusa piana a entrambe le estremità in un solido. Il pannello indica quanto le segue da vicino. Ogni sezione deve allora essere uno schizzo (un punto o una faccia non può ricevere una guida), e **Rigato** non si applica. Una guida che manca una sezione di più di 0.01 mm viene rifiutata, con l'indicazione dello scarto.

Verificato: due cerchi (20 mm e 10 mm di diametro su 40 mm) con quattro guide rettilinee danno il volume del tronco di cono entro 0.000002 %; archi che sporgono di 5 mm danno una botte che segue ogni guida entro 0.00001 mm.

## Sformo

Lo sformo inclina le facce perché una parte possa uscire da uno stampo.

1. Scegliere {{ui:Altro}}, poi {{ui:Sformo}} (oppure premere {{key:Shift}}+clic sulle facce prima). Senza nulla di selezionato si entra in modalità di selezione: fare clic su ogni faccia da inclinare, poi {{ui:Fine}}.
2. Impostare **Angolo (°)**, il **Piano neutro** (dove le facce mantengono le dimensioni) e la **Direzione di estrazione** (per impostazione predefinita, la normale del piano neutro).

Un angolo positivo inclina la faccia verso l'interno lungo l'estrazione e rimuove materiale; uno negativo ne aggiunge. Il piano neutro parte come piano Superiore. In questa versione possono essere sformate solo le facce piane: un cilindro, un cono o una faccia a superficie libera mostra "Sformo: in questa versione solo facce piane (il kernel a mesh le crea)." I quattro lati di un blocco 100 × 100 × 50 sformato di 5° attorno alla base diventano un tronco di piramide di esattamente h/3·(a² + b² + ab), con b = a − 2h·tan 5°.

## Messaggi

| Messaggio | Cosa fare |
|---|---|
| "Il piano del profilo deve passare per un estremo del percorso …" | Spostare lo schizzo del profilo all'inizio (o alla fine) del percorso |
| "Il percorso ha un'interruzione: le sue curve non sono unite in sequenza …" | Unire le curve del percorso; in schizzi separati le estremità devono coincidere esattamente |
| "Una sezione del loft richiede esattamente un anello chiuso" | Dividere lo schizzo, oppure rimuovere l'anello in più |
| "… non può essere sformato rispetto a questo piano neutro …" | La faccia è parallela al piano neutro oppure non lo incontra |
| "Sformo: in questa versione solo facce piane (il kernel a mesh le crea)." | Una faccia selezionata è curva. Rimuoverla; sformare solo facce piane |

:::note
Non ancora implementato: sweep con torsione, sweep a parete sottile e a superficie, guide del loft e tangenza alle estremità, sformo su cilindri, coni e facce a superficie libera.
:::
