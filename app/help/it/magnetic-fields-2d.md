---
title: Campi magnetici in 2D (esercitazione)
summary: Calcolare il campo magnetico di un elettromagnete o di un magnete permanente con la libreria di analisi: eseguire gli esempi, leggere la densità di flusso, il campo nel traferro, l'induttanza e la forza di attrazione, modificare il progetto e costruire un proprio modello di bobine, magneti e ferro.
keywords: magnetico, magnetostatica, campo magnetico, densità di flusso, tesla, elettromagnete, solenoide, bobina, amperspire, nucleo di ferro, traferro, permeabilità, induttanza, forza magnetica, riluttanza, circuito magnetico, potenziale vettore, elettromagnetismo, elementi finiti, fem, motore, attuatore, trasformatore, magnetostatic2d, magnete permanente, neodimio, ndfeb, ferrite, rimanenza, punto di lavoro, rinculo, dispersione, magnete di tenuta
from: 215f6601
---

La libreria di analisi di PartCraft può calcolare il campo magnetico di bobine e ferro in 2D: una sezione trasversale di qualcosa di lungo e uniforme nella sua lunghezza, come un elettromagnete, il nucleo di un trasformatore, una sbarra collettrice o la sezione trasversale di un motore. Questa esercitazione esegue l'esempio dell'elettromagnete della libreria, ne legge i risultati, lo modifica, mostra come modellare una propria forma e poi aggiunge un magnete permanente.

Usa l'area di lavoro Script e la [libreria di analisi](topic:craftscript-library). Non serve conoscere il linguaggio CraftScript per seguirla; l'esempio spiega cosa fa ogni riga.

## Cosa viene modellato

Un nucleo di ferro a forma di C, 100 × 80 mm all'esterno e spesso 20 mm, con un traferro di 2 mm nel suo montante destro. Una bobina da 100 spire percorsa da 10 A (1000 amperspire) è avvolta intorno al montante sinistro. Tutto è lungo nella direzione perpendicolare allo schermo, quindi i risultati sono **per metro di profondità**: per un magnete reale, moltiplicare per la profondità reale.

`magnetostatic2d` della libreria risolve il potenziale vettore magnetico su una griglia di quadrati da 1 mm in una scatola d'aria intorno al magnete, poi ne ricava la densità di flusso **B** (in tesla).

## Eseguire l'esempio

1. Scegliere **Script** nella casella **Area di lavoro** a sinistra della barra degli strumenti.
2. Aprire la scheda **Libreria** del pannello script, poi **Esempi** › **Elettromagnete: campo, traferro, induttanza**.
3. Fare clic su {{ui:Apri (sola lettura)}}, poi premere {{key:F5}}.

In uno o due secondi la tela mostra la densità di flusso, e la console stampa:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Il grafico sotto la tela mostra la densità di flusso verticale B_y lungo la linea mediana del nucleo, da sinistra a destra: circa −0.55 T nel montante sinistro (il flusso vi scorre verso il basso), quasi nulla nella finestra, e +0.55 T nel montante destro e attraverso il traferro (il flusso torna verso l'alto). Lo stesso flusso passa nel ferro e nel traferro, quindi i due montanti e il traferro mostrano quasi lo stesso valore.

## Leggere i risultati

- **Il campo nel traferro** è 0.543 T. Un calcolo a mano considera il nucleo come un unico circuito magnetico, B = μ0 N I / (g + l / μr), dove g è il traferro, l la lunghezza del percorso nel ferro e μr la permeabilità relativa del ferro; dà 0.552 T. Il campo è un po' più basso del calcolo a mano perché il flusso si allarga attorno al traferro (effetto bordo) e parte del flusso prende una scorciatoia attraverso la finestra (dispersione). Con un traferro più piccolo o una griglia più fine i due valori si avvicinano.
- **L'induttanza** della bobina da 100 spire è 0.154 H per metro di profondità, calcolata dall'energia immagazzinata nel campo. La formula del circuito dà un valore inferiore (0.110 H/m) perché conta solo il flusso attraverso il traferro, non quello che ne fuoriesce.
- **La forza di attrazione** che chiude il traferro è B² w / (2 μ0) per una faccia del traferro larga w: circa 2300 N per metro, oppure 117 N per un magnete profondo 50 mm.
- **Il picco** di 1.97 T si trova negli angoli interni della finestra, dove il flusso gira bruscamente. Il modello tratta il ferro come lineare; l'acciaio elettrico reale va in saturazione intorno a 1.5–2 T, quindi trattare i valori superiori come un avviso, non come una risposta.

:::note
I test della libreria eseguono questo esempio e verificano il campo nel traferro rispetto alla formula del circuito magnetico a ogni modifica di PartCraft. Il metodo, i riferimenti e gli altri controlli (un solenoide lungo, un solenoide con nucleo di ferro) sono nell'intestazione di `magnetostatic2d`: cliccarci sopra nella libreria.
:::

## Modificare il progetto

1. Fare clic su {{ui:Crea una copia}} sopra lo script in sola lettura. La copia viene salvata con la parte.
2. Cambiare un valore vicino all'inizio e premere {{key:F5}} di nuovo. Provare:
   - `g = 0.001;` — metà del traferro: il campo nel traferro quasi raddoppia, e così la forza di attrazione (che dipende da B²).
   - `mur = 200;` — un nucleo peggiore: più amperspire si consumano nel ferro.
   - `N = 200;` — il doppio delle spire: il doppio del campo, quattro volte l'induttanza.
   - `h = 0.0005;` — una griglia più fine: risultati più vicini, circa quattro volte il tempo.

Ogni esecuzione sostituisce la tela. Le variabili create dallo script (come `Bgap`, `L`, `F`) restano nell'elenco **Variabili** per i propri calcoli.

## Modellare una propria forma

L'esempio costruisce tutto da tre liste, un valore per ogni quadrato della griglia, che si possono creare per qualsiasi forma disegnata con linee rette lungo la griglia:

- **Dove si trova il ferro:** `iron` è vero per i quadrati dentro il nucleo. L'esempio lo costruisce da rettangoli: `frame & ~window & ~gap` significa "nel telaio, non nella finestra, non nel traferro".
- **La permeabilità:** `1 + (mur - 1) * iron` vale 1 nell'aria e `mur` nel ferro. Dare a più materiali i propri valori nello stesso modo.
- **La corrente:** `J` è la densità di corrente in ampere per metro quadro, positiva se uscente dallo schermo, negativa se entrante. Una bobina ha due lati con segni opposti; l'esempio calcola `J0` in modo che un lato porti N I.

Poi `r = magnetostatic2d(m, permeability, J)` lo risolve. `r.B` è la densità di flusso in ogni quadrato (due colonne, x e y), `r.Bmag` il suo modulo, `r.energy` l'energia immagazzinata per metro. `plot(x, y)` disegna una linea.

La libreria lavora in metri e la vista in millimetri, quindi un campo mostrato così com'è verrebbe disegnato mille volte più piccolo. L'esempio lo mostra su una copia della griglia in millimetri (`mm = quadGrid(…)`, poi `show(field(mm, …))`): copiare quelle due righe.

Per impostazione predefinita il bordo della scatola trattiene il campo: nessun flusso lo lascia. Rendere la scatola almeno due o tre volte più grande del magnete, così da non comprimere il campo. Per un magnete simmetrico si può modellarne metà: l'intestazione di `magnetostatic2d` indica quale condizione di bordo usare su una linea di simmetria.

## Magneti permanenti

Il secondo esempio, **Esempi** › **Magnete permanente in un nucleo di ferro: punto di lavoro, dispersione, forza di attrazione**, è lo stesso nucleo senza la bobina e con una fetta di 10 mm del montante sinistro sostituita da un magnete, magnetizzato verso l'alto. Eseguirlo con {{key:F5}}. Stampa:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Il punto di lavoro.** Un magnete è descritto dalla sua **rimanenza** Br (il campo che conserva quando è cortocircuitato dal ferro: circa 1.2 T per un magnete NdFeB sinterizzato, 0.4 T per la ferrite) e dalla sua permeabilità di rinculo (circa 1.05 e 1.1). Aprendo un traferro il magnete scende lungo la sua retta di rinculo: qui fino a 1.04 T, con H opposto a B al suo interno.
- **Dispersione.** Il calcolo a mano senza dispersione dà 0.97 T nel traferro; il modello dà 0.68 T. Un magnete spinge il suo flusso con forza su una lunghezza breve, quindi molto flusso torna direttamente attraverso la finestra invece che nel traferro. Il fattore di dispersione dice quanto: qui 1.53. Impostare `g = 0;` per un'ancora chiusa: il magnete lavora allora entro lo 0.5 % dal calcolo a mano.
- **Magneti nel proprio modello.** Passare a `magnetostatic2d` i magneti come `struct('Br', Br)`, dove `Br` ha una riga per ogni quadrato della griglia con la rimanenza lungo x e y in tesla (zero fuori dai magneti), e dare ai quadrati magnetici la loro permeabilità di rinculo nell'elenco delle permeabilità:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Per un magnete magnetizzato con un angolo, mettere `Br·cos(angle)` e `Br·sin(angle)` nelle due colonne; per un anello magnetizzato radialmente verso l'esterno, calcolare la direzione di ciascun quadrato dalla sua posizione. `r.H` dà l'intensità del campo H in ogni quadrato.

Il modello mantiene un magnete sulla sua retta di rinculo, per quanto sia sollecitato. Un magnete reale spinto oltre il ginocchio (da un traferro grande, una bobina forte o il calore) perde parte della sua forza in modo permanente; verificare il punto di lavoro sulla curva del produttore per il grado e la temperatura.

I test della libreria verificano i magneti con due risultati a mano: un magnete tondo in aria libera (al suo interno, B = Br / (1 + μr)) e un magnete chiuso da un'ancora di ferro (il circuito magnetico), entrambi entro l'1 %.

## Cosa non fa ancora

- **Saturazione.** Il ferro è lineare: il doppio della corrente, il doppio del campo, senza limiti.
- **Smagnetizzazione.** I magneti restano sulla loro retta di rinculo (vedi sopra).
- **Correnti parassite** e **perdite** (perdite nel ferro, perdite nel rame).
- **Parti mobili e coppia.** Nessun rotore che gira in uno statore, nessuna coppia in funzione dell'angolo.
- **Forme tonde.** La griglia è fatta di quadrati uguali, quindi i contorni curvi risultano a gradini.
- **3D.** Tutto è una sezione trasversale di qualcosa di lungo.

La progettazione di motori (rotore rotante, coppia e perdite in 2D) è in valutazione per una versione successiva. Vedi [Non ancora implementato](topic:not-built-yet).
