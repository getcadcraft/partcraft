---
title: Guidare una parte con i parametri
summary: Dare un nome alle misure che contano (larghezza, spessore, diametro della vite), collegare con = qualsiasi numero di feature o quota di schizzo a esse, e cambiare l'intera parte da un'unica tabella.
keywords: parametri, dove si usa, usato da, variabili globali, variabili, equazioni, intento di progetto, quote guida, collegamento, espressione, formula, dare un nome a una quota, valori collegati
from: 58c646ea
---

Un parametro è un numero con un nome, per esempio `width = 120` o `margin = bolt * 1.5`. Collegare una profondità, un diametro di foro, un numero di ripetizioni o una quota di schizzo a esso, e cambiando il parametro cambiano tutti in un solo passo. Così si conserva l'intento di progetto nella parte, invece che nella memoria.

## Aggiungere parametri

1. Nel pannello destro, fare clic sulla scheda {{ui:Parametri}}.
2. Sotto **Variabili**, digitare un nome nella casella "nome", per esempio `width`.
3. Digitare il suo valore nella casella successiva, per esempio `120`, e premere <kbd>Invio</kbd> (oppure fare clic su {{ui:Aggiungi}}).

Un valore può essere un numero o un'espressione di altri parametri: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. La colonna **Valore** mostra il risultato del calcolo. Un nome inizia con una lettera o con `_` e contiene solo lettere, cifre e `_`; i nomi di funzioni e unità (`sin`, `mm`, `pi`) vengono rifiutati, così come un ciclo come `a = b` con `b = a`.

## Collegare un numero a un parametro

1. Fare clic su una feature nella cronologia, per esempio "Extrude1". Le sue impostazioni compaiono nella scheda {{ui:Proprietà}}.
2. In una casella numerica, come **Profondità (mm)**, digitare `=` e un'espressione: `=thick` oppure `=width / 4`.
3. Premere <kbd>Invio</kbd>.

La casella ora mostra il risultato, e accanto alla sua etichetta compare un pulsante **ƒ**. Passarvi sopra con il mouse per vedere l'equazione. Le quote di schizzo funzionano allo stesso modo, sia nell'elenco **Quote di schizzo** di una feature sia nella casella della quota di uno schizzo aperto (fare doppio clic su una quota, digitare `=width`, premere <kbd>Invio</kbd>).

Numeri che si possono collegare: profondità di estrusione, angolo di rivoluzione, diametro del foro, profondità e misure di alesatura, numero di ripetizioni, spaziatura e angolo della serie, raggio di raccordo, distanza di smusso, spessore di parete dello svuotamento, ogni quota di schizzo, e le dimensioni delle feature più recenti (seconda profondità, rastremazione, svasatura, distanza dal piano di riferimento, angolo di sformo e altre).

## Cambiare un parametro

Nella scheda {{ui:Parametri}}, digitare un nuovo valore o un'espressione nella colonna **Espressione** e premere <kbd>Invio</kbd>. Tutto ciò che è collegato cambia e la parte si ricostruisce, come un unico passo: {{key:Mod+Z}} lo annulla.

Per cambiare un numero dall'altra estremità, vedi [Equazioni nei due sensi](topic:equations-two-way).

## Vedere dove è usato un parametro

Sotto ogni parametro nella scheda {{ui:Parametri}}, una riga indica cosa lo usa:

- i numeri che guida, come **Extrude1 depth** o **Sketch1 D2 (distance)**. Fare clic su uno per selezionare la sua feature e mostrarne le proprietà;
- i numeri che guida **attraverso** altri parametri, come **Hole1 diameter (through h, d)** quando `d = h + 2` e `h = w / 2`;
- i **parametri** le cui espressioni lo usano, le **configurazioni** che lo impostano, e gli **script** che lo leggono (vedi [Scrivere ed eseguire script](topic:craftscript)).

"Non ancora usato." significa che nulla lo usa: si può eliminare senza conferma.

## Scollegare, rinominare, eliminare

- **Scollegare un numero:** fare clic sul suo pulsante **ƒ**, oppure su {{ui:Scollega}} nell'elenco **Equazioni**. Mantiene il valore attuale e nessun parametro lo cambia più.
- **Rinominare un parametro:** digitare un nuovo nome nella sua casella **Nome**. Ogni espressione che lo usa viene riscritta.
- **Eliminare un parametro:** fare clic su × nella sua riga. Se qualcosa lo usa, PartCraft chiede se scrivere prima il suo valore attuale in quelle espressioni.
- **Eliminare una feature** rimuove le equazioni dei suoi numeri; la barra di stato indica quali.

:::note
I parametri sono salvati nel file `.partcraft.json` (come file di versione 3). Una parte senza parametri viene salvata esattamente come prima.
:::

## Espressioni

| Scrittura | Significa |
|---|---|
| `120`, `12.5`, `1e3` | un numero (millimetri, o gradi per un angolo) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | una lunghezza in altre unità, convertita in millimetri |
| `30deg`, `0.5rad` | un angolo, convertito in gradi |
| `+ - * / %` e `^` | aritmetica; `^` è una potenza, `-2^2` vale −4 |
| `sin cos tan asin acos atan atan2` | trigonometria in gradi |
| `sqrt pow exp ln log abs sign` | altre funzioni |
| `ceil floor int round(x, digits) min max` | arrotondamenti e limiti |
| `if(test, a, b)` con `< <= > >= == !=` | una scelta: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

I nomi distinguono maiuscole e minuscole: `Width` e `width` sono due parametri.

Vedi anche [Configurazioni e tabelle di progetto](topic:design-tables) e [Script e riga di comando](topic:scripts-and-cli).
