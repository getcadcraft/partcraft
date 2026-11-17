---
title: Superfici da una rete di curve (superficie Gordon)
summary: Creare una superficie liscia attraverso una griglia di curve di profilo e di guida disegnate negli schizzi o prese dagli spigoli del modello, chiuderla a solido quando i profili sono chiusi, e che cosa è esatto, che cosa è adattato, e i messaggi quando una rete non si adatta.
keywords: tangente, G1, tangenza, continuità tangente, piano di simmetria, superficie Gordon, rete di curve, superficie di contorno, superficie a rete, profili, guide, curve guida, loft con guide, rotaie guida, pelle, transfinito, Coons, superficie B-spline, superficie libera
from: ada3cb8b
---

:::note
**Non ancora implementato in questa versione.** La superficie Gordon richiede un kernel geometrico esatto, che questa versione di PartCraft non ha: costruisce ogni parte con il kernel mesh. [Che cosa non è ancora implementato](topic:not-built-yet) spiega cosa fare invece. Il resto di questa pagina la descrive come funziona con un kernel esatto.
:::

Una **superficie Gordon** è una sola superficie che passa per ogni curva di una rete: un insieme di **profili** che corrono in una direzione e un insieme di **guide** che corrono nell'altra, incrociandosi come i fili di una rete. Serve a modellare uno scafo, un parafango o un'impugnatura partendo da alcune curve di sezione che si controllano direttamente. Richiede il **kernel esatto** (vedi [Il kernel mesh](topic:solid-kernels)).

## Disegnare la rete

1. Disegnare i **profili**: due o più curve affiancate, per esempio sezioni su piani paralleli. Linee, archi, cerchi e spline funzionano tutti, e una catena di curve unite di estremità conta come una sola curva.
2. Disegnare le **guide**: due o più curve che attraversano i profili. Ogni guida deve incrociare ogni profilo una volta, e ogni profilo ogni guida una volta.
3. Far incontrare davvero le curve. Disegnare lo schizzo di una guida in modo che la sua curva passi per i punti dei profili (agganciare ai punti proiettati, oppure digitare le coordinate). La rete accetta lacune fino alla **Tolleranza** (0.01 mm all'inizio).

Uno schizzo può contenere più curve: ogni catena separata al suo interno è una curva a sé. Quindi si possono disegnare tutte le guide in un solo schizzo sul piano superiore, per esempio.

## Creare la superficie

1. Scegliere {{ui:Altro}} nel gruppo Funzioni, poi {{ui:Superficie Gordon}}.
2. PartCraft prende gli schizzi che nessuno usa ancora: quelli su piani paralleli al primo diventano **profili**, gli altri **guide**. Controllare l'elenco a destra e impostare ogni schizzo su **Profili**, **Guide** o **Non usato**.
3. Per usare gli spigoli della parte, fare clic su **Scegli spigoli come profili** (oppure **come guide**), fare clic sugli spigoli nella vista, poi premere Esc.

Il risultato è un **corpo superficie**. {{ui:Ispessisci}} lo trasforma in un solido, {{ui:Cuci}} lo cuce ad altre superfici, e {{ui:Rifila superficie}} lo taglia.

### Chiudere a solido

Quando i profili sono curve chiuse (cerchi, spline chiuse, catene chiuse) e il primo e l'ultimo profilo giacciono ciascuno piatti su un piano, selezionare **Chiudi a solido**. Le estremità vengono chiuse con facce piane e la forma chiusa si unisce, taglia, interseca o diventa un nuovo corpo come qualsiasi altra funzione. È così che si crea un loft che segue curve guida. Lo stesso vale con guide chiuse.

## Tangente a un piano lungo uno spigolo

Una superficie Gordon passa per le sue curve, ma da sola non si accorda alla pendenza di ciò che incontra. Per farla lasciare uno spigolo **tangente** a un piano (G1), come un piano di simmetria, in modo che la copia speculare si unisca senza piega, oppure una faccia piana da cui cresce:

1. Selezionare la funzione Gordon. In **Tangente a**, scegliere un piano in {{ui:Aggiungi un piano…}} (Anteriore, Superiore, Destro oppure un piano di riferimento), oppure selezionare una faccia piana nella vista e premere {{ui:Aggiungi la faccia piana scelta}}.
2. PartCraft trova la curva di contorno della rete che giace nel piano, e la superficie ne esce tangente al piano.

Se un piano contiene due curve di contorno (un pavimento sotto entrambe le estremità), aggiungerlo due volte: ogni copia prende la curva successiva. Fino a quattro piani, uno per spigolo.

Il rapporto indica lungo quale curva ogni piano ha reso la superficie tangente, e la pendenza massima con cui la superficie incontrava quel piano prima. Le guide che già lasciano quella curva tangenti al piano sono seguite esattamente. Le guide che si allontanano dalla curva vengono piegate in una fascia stretta vicino allo spigolo, e la cifra "segue ogni curva entro" del rapporto indica di quanto: disegnare le guide che lasciano lo spigolo piatte per un adattamento esatto.

## Che cosa è esatto e che cosa è adattato

Il pannello indica quale di questi casi si applica, e quanto la superficie si discosta dalle curve.

- **Esatta**: quando ogni curva è polinomiale (linee, spline e catene di esse) e le guide incrociano tutti i profili negli stessi parametri, la superficie è esattamente la superficie Gordon di quelle curve. Una rete di curve iso tagliate da una superficie bicubica restituisce quella superficie, e quattro linee rette danno una patch piana o svergolata (bilineare).
- **Adattata**: archi, cerchi e spigoli della parte non sono polinomiali, e le curve che si incrociano con parametri diversi devono essere ritemporizzate perché gli incroci si allineino. Queste curve sono adattate con spline B cubiche entro una parte su dieci milioni della dimensione della rete (circa 0.00001 mm per una parte di 100 mm). Una patch cilindrica fatta di archi e linee resta entro 0.00001 mm dal vero cilindro.

Tra le curve la superficie è ciò che il metodo produce: i profili miscelati attraverso, più le guide miscelate attraverso, meno la miscela dei loro punti di incrocio. È liscia ovunque tranne dove una curva ha uno spigolo vivo. Dove due superfici Gordon condividono una curva di contorno, si uniscono spigolo a spigolo (G0), non tangenti.

## Quando una rete non si adatta

| Messaggio | Che cosa fare |
|---|---|
| "… non si incontrano: distano 0.4 mm" | Far incrociare quel profilo e quella guida, oppure aumentare la Tolleranza |
| "… incontra … 2 volte" | Una guida può incrociare ogni profilo una sola volta: dividere una curva che si avvolge, oppure usare meno profili |
| "… in ordine diverso" oppure "si ripiega su sé stessa" | Due guide si incrociano (o due profili). Le famiglie devono correre affiancate |
| "almeno due profili e due guide" | Aggiungere curve, oppure impostare più schizzi su Profili o Guide |
| "mescolano curve aperte e chiuse" | Rendere tutti i profili aperti o tutti chiusi (lo stesso per le guide) |
| "Un'estremità … non è piatta, quindi non può essere chiusa" | Disegnare il primo e l'ultimo profilo chiuso ciascuno su un piano, oppure lasciare Chiudi a solido disattivato |

## Limiti

- Una faccia B-spline per rete: nessuna tangenza G1 o G2 alle superfici vicine.
- La cucitura di una rete chiusa, sulla prima guida, è unita spigolo a spigolo ma non tangente.
- La funzione Loft in sé non ha rotaie guida; usare invece una superficie Gordon chiusa a solido.
- Curve molto ondulate, oppure incroci spaziati in modo molto irregolare lungo una curva rispetto a un'altra, possono richiedere troppi punti per l'adattamento; in tal caso la funzione lo segnala.
