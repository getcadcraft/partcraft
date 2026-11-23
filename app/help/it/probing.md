---
title: Tastatura: trovare il pezzo e impostare l'origine pezzo
summary: Toccare una faccia superiore, un lato, un foro o una sporgenza con un tastatore e lasciare che il controllo sposti l'origine pezzo dove il pezzo si trova davvero, oppure solo misurare. Cosa può fare ogni controllo, e cosa non è stato provato.
keywords: tastatura, tastatore, azzeramento con tastatore, origine pezzo, g54, g31, g38.2, salto, riferimento, trovare centro, alesatura, sporgenza, spigolo, imposta zero, misura, ispezione, g10
from: 1f718b82
---

{{ui:Tastatura}} in Produzione scrive nel programma un ciclo di tastatura: il tastatore tocca il pezzo, e il controllo sposta l'origine pezzo (G54) della differenza tra dove è stata trovata la superficie e dove il modello la indica. Le operazioni successive tagliano quindi dove il pezzo si trova davvero.

**Nulla qui è stato eseguito su una macchina.** I movimenti prima di un tocco sono movimenti ordinari: il tastatore non è sorvegliato fino al movimento di tastatura stesso. Eseguire lentamente, prima a vuoto, con la mano sul blocco avanzamento.

## Uso

1. Nella scheda **Utensili** la prima operazione di tastatura aggiunge un **tastatore**: il suo diametro di sfera e l'avanzamento di tastatura (100 mm/min salvo impostazione diversa).
2. Premere {{ui:Altro}} nella barra degli strumenti di Produzione, poi {{ui:Tastatura}}, e fare clic su ciò da toccare. Ogni selezione è un ciclo, nell'ordine dei clic:

| Selezione | Il ciclo | Cosa viene impostato |
|---|---|---|
| Una faccia piana rivolta verso l'asse utensile | Un tocco scendendo | Z |
| Una faccia laterale piana perpendicolare a X o a Y | Un tocco verso la faccia, un po' sotto il suo bordo superiore | X o Y |
| Un foro o una sporgenza lungo l'asse utensile | Quattro tocchi (+X, −X, +Y, −Y) | X e Y del suo centro |

3. **Con il risultato**: {{ui:Imposta l'origine pezzo}} oppure {{ui:Solo misura}}.
4. **Inizia a questa distanza** e **Cerca oltre questa distanza** indicano quanto lontano dalla superficie attesa inizia il movimento di tastatura e quanto oltre può spingersi il tastatore prima che il controllo rinunci. **Profondità** è quanto sotto la parte alta di un foro, una sporgenza o una faccia laterale va la sfera.

Mettere l'operazione di tastatura per prima, prima di qualsiasi taglio.

## Cosa scrive ogni controllo

| Controllo | Tocco | Risultato |
|---|---|---|
| Stile Fanuc | `G31`, la posizione conservata in `#101` a `#104` | Le variabili di origine (`#5221` a `#5223`) vengono spostate di trovato − atteso. Solo misura: la differenza resta in `#110` (e `#111`). |
| LinuxCNC | `G38.2`, la posizione conservata in parametri con nome | `G10 L2 P1` con la nuova origine. Solo misura: un messaggio `(DEBUG, …)`. |
| GRBL | `G38.2` | Un tocco imposta l'asse con `G10 L20 P1`. GRBL non ha variabili, quindi **non può calcolare un centro**: il file lo dice in un commento e non imposta nulla. |

Il calcolo è del post, quindi può essere modificato: gli eventi sono `probe-move` e `probe-set` ([Post-processori modificabili](topic:post-processors)).

## Limiti

- Una sola origine pezzo (G54). Solo facce perpendicolari agli assi: nessun angolo, nessun ciclo sugli spigoli, nessuna rotazione del pezzo.
- Nessun preset utensile, nessun controllo di utensile rotto, nessuna misura di una quota rispetto a una tolleranza, nessun rapporto.
- Il mandrino non viene avviato per una tastatura e il refrigerante resta spento; nulla verifica che l'utensile nel mandrino sia un tastatore.
- La simulazione del grezzo non esegue un percorso di tastatura.
- La taratura del tastatore (offset della sfera, deflessione dello stilo, direzione di scatto) è del controllo.
