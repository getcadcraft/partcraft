---
title: Verificare lo sformo per stampaggio e fusione
summary: Colorare la parte in base all'angolo di sformo rispetto alla direzione di estrazione di uno stampo, per vedere quali facce si sfilano, quali richiedono più sformo e quali si sfilano dall'altra metà, con la quota di superficie di ciascuna.
keywords: analisi dello sformo, sformo, conicità, stampo, stampaggio, pressofusione, stampaggio a iniezione, direzione di estrazione, linea di divisione, sottosquadro, sfilamento, verifica dello sformo
from: 6a106f83
---

Le parti realizzate in uno stampo, in una pressofusione o in una fusione in sabbia richiedono **sformo**: pareti leggermente inclinate in modo che la parte scivoli fuori. **L'analisi dello sformo** colora ogni faccia in base a quanto si inclina rispetto alla direzione di apertura dello stampo (l'**estrazione**).

## Attivarla

1. Nell'area di lavoro Progettazione, aprire {{ui:Views}} e scegliere {{ui:Draft analysis}}.
2. Impostare **Estrazione**: la direzione di apertura dello stampo, lungo X, Y o Z in entrambi i versi, oppure **Perpendicolare a una faccia scelta**: premere {{ui:Pick a face}} e cliccare una faccia piana della parte.
3. Impostare **Sformo minimo**, in gradi: l'inclinazione minima richiesta dal processo (spesso da 1° a 3°).

La parte viene colorata così:

| Colore | Significa |
|---|---|
| Verde: **Sformo positivo** | Inclinata verso l'estrazione di almeno il minimo: si sfila da questa metà dello stampo |
| Ocra: **Serve sformo** | Entro il minimo in entrambi i sensi, come una parete verticale: aggiungere sformo qui |
| Rosso: **Sformo negativo** | Inclinata in senso opposto all'estrazione di almeno il minimo: si sfila dall'altra metà, oppure è un sottosquadro se la parte deve uscire da una sola metà |

La quota della superficie della parte di ciascuna classe è indicata accanto. **Inverti l'estrazione** guarda dall'altra metà dello stampo: verde e rosso si scambiano.

Le facce curve sono valutate punto per punto, quindi un cilindro disposto trasversalmente all'estrazione mostra una fascia che richiede sformo lungo i fianchi.

I colori seguono la parte mentre la si modifica. {{key:Esc}} o {{ui:Close}} disattiva l'analisi; nulla viene salvato nella parte.

:::tip
Per aggiungere sformo, usare la feature {{ui:Draft}} sulle facce ocra (vedi [Sweep, loft e sformo](topic:sweep-loft-draft)), poi verificare di nuovo.
:::
