---
title: Piani, assi e punti di riferimento
summary: Creare piani a distanza da una faccia, ad angolo, per tre punti, a metà strada, tangenti a un cilindro, perpendicolari a uno spigolo o per uno spigolo e un punto; assi; punti a metà degli spigoli, nei punti di incrocio e negli angoli dei piani; schizzare su di essi e usarli come assi di rivoluzione, direzioni di serie e piani di specchio.
keywords: riferimento, tra oggetti, punto medio, punto di intersezione, piano per spigolo e punto, piano di riferimento, piano di lavoro, piano di costruzione, piano di riferimento, piano di offset, piano ad angolo, piano mediano, piano tangente, asse di riferimento, asse di costruzione, punto di riferimento, punto di lavoro, schizzo su piano
from: e7eb6fc1
---

Il riferimento geometrico è l'impalcatura su cui si costruiscono le feature: un **piano** su cui disegnare dove non c'è una faccia, un **asse** attorno a cui ruotare o ripetere, un **punto** dove fermare un'estrusione. Non ha materiale proprio. I piani appaiono nella vista come quadrati pallidi, gli assi come linee tratteggiate, i punti come piccole croci; tutti e tre entrano nella cronologia e seguono ciò da cui derivano quando si cambia una misura a monte.

Si trovano nel menu {{ui:Altro}} del gruppo Features: {{ui:Piano}}, {{ui:Asse}}, {{ui:Punto}}.

## Creare un piano

1. Fare clic su una faccia piana, oppure su un piano base nella cronologia, per partire da lì (facoltativo).
2. Scegliere {{ui:Altro}}, poi {{ui:Piano}}. Il piano parte come piano di offset al 20 % della dimensione della parte, a distanza da ciò che è stato scelto (o dal piano superiore).
3. Nel pannello di destra scegliere il **Tipo** e i suoi riferimenti:

| Tipo | Riferimenti | Valori numerici |
|---|---|---|
| Offset da un piano o una faccia | **Dal piano** | **Distanza (mm)**, negativa per l'altro lato |
| Ad angolo, attraverso uno spigolo o un asse | **Dal piano**, **Ruota attorno a** (un asse del mondo, una feature asse o uno spigolo rettilineo scelto) | **Angolo (°)** |
| Per tre punti | **Punto 1**, **Punto 2**, **Punto 3** | — |
| Piano mediano tra due | **Primo piano**, **Secondo piano** (paralleli: a metà; incidenti: il piano che divide a metà l'angolo) | — |
| Tangente a un cilindro | **Cilindro** (una faccia cilindrica), **Punto vicino** (quale lato) | — |
| Perpendicolare a uno spigolo, in un punto | **Spigolo**, **Nel punto** (il piano passa per il punto dello spigolo più vicino ad esso, e anche per questo punto) | — |
| Per uno spigolo e un punto | **Spigolo rettilineo** (o un asse), **Punto di passaggio** | — |
| Perpendicolare a uno spigolo nel suo punto medio | **Spigolo** (a metà della sua lunghezza, perpendicolare lì), oppure senza spigolo **Punto 1** e **Punto 2** (il piano a metà tra i due) | — |

Ogni riferimento ha un pulsante **Scegli**: premerlo, poi fare clic nella vista. Uno slot per piano accetta un piano base, un piano di riferimento o una faccia piana; uno slot per punto accetta l'estremità di uno spigolo (fare clic vicino a quell'estremità), una feature punto o un punto su una faccia; uno slot per spigolo accetta uno spigolo. {{key:Esc}} annulla una scelta. **Inverti la normale** ribalta il piano (il verso in cui guarda uno schizzo su di esso).

In questa versione, uno slot che richiede uno spigolo o una faccia cilindrica (Tangente a un cilindro e gli slot Spigolo) risponde "non ancora implementato": usare invece punti o un asse.

## Creare uno schizzo su un piano

Selezionare il piano (nella cronologia oppure facendo clic sul suo quadrato nella vista) e scegliere {{ui:Schizzo}}, oppure **Schizzo su questo** nel suo pannello. Lo schizzo segue il piano: se si cambia la distanza del piano, lo schizzo e tutte le feature su di esso si spostano.

## Assi e punti

- {{ui:Asse}}: per due punti, sull'asse di un cilindro o di un cono, dove s'incontrano due piani, lungo uno spigolo rettilineo (o l'asse di uno spigolo circolare), oppure perpendicolare a una faccia passando per un punto.
- {{ui:Punto}}: alle coordinate, su un vertice o un punto di schizzo, o al centro di uno spigolo circolare, più i punti "tra oggetti":

| Tipo di punto | Riferimenti |
|---|---|
| Punto medio di uno spigolo (o tra due punti) | **Spigolo** (a metà della sua lunghezza, anche per archi e curve), oppure senza spigolo **Punto 1** e **Punto 2** |
| Dove uno spigolo o un asse incontra una faccia o un piano | **Spigolo** (rettilineo o curvo) o un asse, e **Interseca piano** (un piano o una faccia piana) oppure **Oppure una faccia** (una faccia piana o un cilindro). Un cerchio attraversa un piano due volte e una linea attraversa un cilindro due volte: **L'altro incrocio** prende la seconda |
| Dove tre piani si incontrano | **Primo**, **Secondo** e **Terzo piano** (piani o facce piane) |

Ognuno dà un messaggio semplice quando i suoi riferimenti non si combinano: una linea parallela al piano, una linea che manca il cilindro, uno spigolo che non raggiunge il piano, tre piani che non si incontrano in un unico punto, un punto sulla linea che dovrebbe fissare un piano.

Usarli in altre feature:

| Dove | Come |
|---|---|
| Rivoluzione | **Asse**: scegliere la feature asse dall'elenco (deve trovarsi nel piano dello schizzo) |
| Serie circolare | **Asse**: la feature asse |
| Serie lineare | **Direzione**: una feature asse, oppure un piano (la sua normale) |
| Specchio | **Piano di specchio**: un piano di riferimento |
| Estrusione | **Fine**: Fino a faccia o piano, Fino a vertice (una feature punto). Non ancora implementato in questa versione (richiede un kernel esatto) |
| Sformo | **Piano neutro** |

## Quando un riferimento non esiste più

Un piano ricavato da una faccia che non esiste più fallisce con un messaggio che la nomina, per esempio "La faccia su cui poggia è scomparsa da Extrude1." Non viene mai spostato su un'altra faccia. Gli schizzi e le feature su di esso sono segnati come "non costruiti" finché non si sceglie un nuovo riferimento; il resto della parte resta com'era.

:::note
In questa versione ogni parte è costruita con il kernel a mesh, che crea piani, assi e punti a partire dai piani base, dalle facce piane create da un'estrusione o una rivoluzione, dai punti di schizzo, dalle coordinate e da altre feature di riferimento. Ciò che richiede uno spigolo, l'estremità di uno spigolo o una faccia curva necessita di un kernel esatto: non ancora implementato in questa versione ("Usa una faccia o uno spigolo del solido, che solo un kernel esatto può trovare: non ancora implementato in questa versione.").
:::
