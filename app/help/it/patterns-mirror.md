---
title: Funzioni di serie e di specchio
summary: Ripetere le funzioni in fila con Lineare, attorno a un asse con Circolare, e copiare le funzioni o l'intero corpo attraverso un piano con Specchio.
keywords: serie, serie lineare, serie circolare, serie polare, array, specchio, simmetrico, copia funzioni, cerchio di bulloni, originale, specchia corpo
from: 702e9edb
---

Serie e specchi copiano funzioni già create. Le copie fanno parte della cronologia: se si modifica l'originale, le copie lo seguono.

Ciò che viene copiato è ciò che la funzione fa: una serie di sporgenze aggiunge materiale, una serie di tagli o fori ne rimuove. Le serie possono essere replicate e specchiate di nuovo. Un solido STEP importato può essere copiato; raccordi, smussi e svuotature no.

## Serie lineare

1. Selezionare nella cronologia la funzione da copiare (per esempio un Foro o un Taglio). Senza nulla di selezionato, viene usata l'ultima funzione solida.
2. Scegliere {{ui:Lineare}}. Compaiono tre copie distanziate di 20 mm lungo X.
3. Nel pannello destro, impostare:

| Impostazione | Cosa fa | Predefinito |
|---|---|---|
| **Funzioni da copiare** | Attivare ogni funzione da copiare. Sono elencate solo le funzioni sopra la serie | La funzione selezionata |
| **Direzione** | Asse X, asse Y, asse Z, una linea o una linea di mezzeria di uno schizzo precedente, l'asse di una rivoluzione, oppure uno spigolo scelto | Asse X |
| **Spaziatura (mm)** | Distanza tra vicini | 20 |
| **Numero** | Numero totale, **originale incluso** (da 1 a 1000) | 3 |
| **Inverti direzione** | Le copie vanno nell'altro verso | Disattivato |

### Usare uno spigolo come direzione

1. Fare clic su uno spigolo rettilineo del pezzo nella vista. Il pannello destro indica **Spigolo** e ne mostra la lunghezza.
2. Scegliere {{ui:Lineare}}: la serie segue quello spigolo.

Oppure selezionare la serie, scegliere uno spigolo e selezionare "Spigolo scelto (quello appena scelto)" in **Direzione**. Uno spigolo scelto è fisso nello spazio: non segue le modifiche successive. Una linea di schizzo segue il suo schizzo.

## Serie circolare

1. Selezionare la funzione da copiare (per esempio un foro vicino al bordo di un disco).
2. Scegliere {{ui:Circolare}}. Compaiono sei copie equidistanti lungo tutto il giro.
3. Impostare:

| Impostazione | Cosa fa | Predefinito |
|---|---|---|
| **Funzioni da copiare** | Come per Lineare | La funzione selezionata |
| **Asse** | Asse X, Y o Z, una linea di schizzo, l'asse di una rivoluzione, oppure uno spigolo scelto | L'asse dell'ultima rivoluzione se presente, altrimenti l'asse Y |
| **Angolo (°)** | 360 distribuisce le copie in modo uniforme lungo tutto il giro. Un valore minore le distribuisce su quell'angolo, con la prima e l'ultima agli estremi | 360 |
| **Numero** | Numero totale, originale incluso | 6 |
| **Inverti direzione** | Gira nell'altro verso | Disattivato |

Gli assi del sistema passano per l'origine. Per un disco non centrato sull'origine, usare una linea di mezzeria di uno schizzo oppure l'asse di una rivoluzione.

### Esempio: gli otto fori dei bulloni di una flangia

1. Rivoluzionare la flangia (vedi [Rivoluzionare un pezzo tornito](topic:revolve)) attorno all'asse Y.
2. Creare uno schizzo sulla faccia superiore piana della flangia, mettere un punto sul cerchio dei bulloni e creare un Foro.
3. Con il Foro selezionato, scegliere {{ui:Circolare}}. L'asse è già "Asse di Revolve1".
4. Impostare **Numero** su `8`.

## Specchio

1. Selezionare nella cronologia la funzione da specchiare, oppure non selezionare nulla per specchiare **l'intero corpo così com'è finora**.
2. Scegliere {{ui:Specchio}}. Lo specchio avviene rispetto al **piano Destro**.

Per specchiare invece l'intero corpo rispetto a una faccia del pezzo, fare prima clic su quella faccia piana, poi scegliere {{ui:Specchio}}. (Fare clic su una faccia cancella la selezione della cronologia, quindi questo specchia sempre l'intero corpo.)

Impostazioni nel pannello destro:

- **Specchio**: attivare **L'intero corpo (così com'è finora)**, oppure disattivarlo e attivare le funzioni da copiare.
- **Piano di specchio**: piano Anteriore, piano Superiore, piano Destro, la faccia che usa ora ("Una faccia di Extrude1" oppure "Un piano fisso"), oppure "La faccia scelta ora". Per specchiare funzioni scelte rispetto a una faccia: selezionare lo Specchio nella cronologia, fare clic sulla faccia nella vista e scegliere "La faccia scelta ora".

Specchiare l'intero corpo rispetto a una faccia raddoppia il pezzo, per esempio una mezza staffa diventa una staffa intera.

## Messaggi

- "Creare prima una funzione da copiare." oppure "Creare prima un solido." Non c'è ancora nulla di solido da copiare.
- "Scegliere le funzioni da copiare." Ogni casella **Funzioni da copiare** è vuota.
- "Extrude2 non ha un solido da copiare." Quella funzione è fallita oppure soppressa.
- "Fillet1 modifica gli spigoli o le pareti del corpo; non può essere copiata. Copiare le funzioni che creano solidi (estrusioni, rivoluzioni, fori, importazioni)." Raccordi, smussi e svuotature non possono essere replicati o specchiati: creare prima la serie, poi il raccordo.
- "Non esiste ancora un corpo da specchiare."

:::note
Le copie di una serie non possono essere saltate una alla volta, e una serie non può seguire una curva di schizzo. Anche le serie e gli specchi di schizzo non sono ancora implementati: disegnare la geometria ripetuta a mano oppure con **Aggiungi per coordinate**.
:::
