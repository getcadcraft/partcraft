---
title: Mantenere attivo un modello .3dm
summary: Modificare un modello nel programma che lo ha creato e vedere il corpo di PartCraft seguire le modifiche, da Rhino 8 o da una definizione Grasshopper, con le feature ricostruite sulla nuova forma.
keywords: rhino, grasshopper, collegamento live, connessione live, 3dm, nurbs, parametrico, collegamento, sincronizzazione, script, invio, corpo importato
from: cf4dc9b2
---

Continuare a modellare la forma dove la si modella, e lavorare, verificare e documentare il modello qui. Ogni modifica nell'altro programma sostituisce un corpo importato in PartCraft, e le feature successive si ricostruiscono sulla nuova forma.

:::note
Il collegamento richiede **CadCraft Studio** sullo stesso computer. Una scheda del browser non può stabilire il collegamento. Nulla passa per Internet: lo script comunica con Studio all'indirizzo di questo computer, con un token.
:::

:::warning
Questo collegamento è stato provato con lo scrittore di file dello script e con un sostituto dell'altro programma, non ancora dentro Rhino o Grasshopper stessi. Se qualcosa non funziona lì, segnalare il messaggio mostrato.
:::

## Configurazione

1. In Studio, aprire PartCraft. In {{ui:Impostazioni}} › {{ui:PartCraft}} › {{ui:Assistenti}}, spuntare **Consentire agli assistenti IA e agli script di usare PartCraft**, poi **Modifica**.
2. In Studio, scegliere {{ui:Collega un assistente}}. Mostra l'indirizzo e il token da incollare sotto.
3. Scaricare lo script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Da Rhino

1. Eseguire `cadcraft_link.py` nell'editor di script di Rhino (Python 3 in Rhino 8).
2. La prima volta, incollare l'indirizzo e il token. Vengono salvati in `.cadcraft-link.json` nella cartella personale, mai nel modello. Studio crea un nuovo token a ogni avvio, quindi lo script lo chiede di nuovo.

Eseguire di nuovo lo script per fermarlo.

## Da Grasshopper

Eseguire prima lo script una volta in Rhino, così indirizzo e token vengono salvati.

1. Aggiungere un componente Script (Python 3) e incollarvi l'intero `cadcraft_link.py`.
2. Dare questi input: `G` (la geometria, con accesso a lista), `N` (un nome, facoltativo), `On` (un interruttore booleano) e `Target` (facoltativo: `model` oppure `part`, se sono aperte entrambe le app).
3. Impostare `On` su true.

Ogni calcolo invia `G` e sostituisce ciò che il componente ha inviato l'ultima volta.

## Come funziona qui

- **Un solo corpo.** Tutto ciò che è visibile nel modello diventa una sola feature importata, come quando si [apre un file .3dm](topic:open-3dm-files).
- **Deve chiudersi.** PartCraft riempie i fori piccoli e le aperture piane, e l'altro programma viene informato di quanti. Se il modello ancora non si chiude, PartCraft mantiene il corpo che aveva e la barra di stato lo segnala. La modifica successiva che chiude il modello lo aggiorna.
- **Completare l'operazione in corso.** In uno schizzo o in un disegno gli aggiornamenti vengono rifiutati e riprovati; arrivano quando si torna nel modello.
- **Annulla.** Gli aggiornamenti a meno di due secondi l'uno dall'altro condividono un solo passo di annullamento.
- **Salvataggio.** Il file della parte conserva il collegamento. Eseguire di nuovo lo script dopo averlo riaperto, e la stessa feature si aggiorna.

**Solo in una direzione.** Le modifiche qui non tornano all'altro programma.

## Se qualcosa non funziona

- **"No ModelCraft or PartCraft window allows it":** eseguire il passo 1 della configurazione.
- **"Studio refused the token":** Studio è stato riavviato. Copiare il nuovo token ed eseguire di nuovo lo script. Per Grasshopper, eseguirlo prima in Rhino.
- **"Cannot reach CadCraft Studio":** Studio non è in esecuzione, oppure l'indirizzo è cambiato.
