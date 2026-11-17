---
title: Verificare un assieme per interferenze e movimento
summary: Trovare le parti che si sovrappongono con Interferenza, trascinare i valori di un giunto per osservare il movimento, ed esaminare un giunto nel suo intervallo per trovare dove le parti collidono.
keywords: interferenza, rilevamento interferenze, collisione, sovrapposizione, accoppiamento filettatura, profondità filettatura non corrispondente, facce a contatto, nascondi, filtro, movimento, studio del movimento, scansione, intervallo di movimento, verifica
from: 9c98db46
---

Due verifiche si eseguono sulle parti come sono posizionate: **Interferenza** cerca materiale sovrapposto in questo momento, e la **verifica del movimento** sposta un giunto attraverso il suo intervallo e cerca sovrapposizioni lungo il percorso.

## Verificare le interferenze

1. Aprire o costruire un assieme (vedi [Costruire un assieme con i giunti](topic:build-assembly)).
2. Scegliere {{ui:Interferenza}}.

La barra di stato riporta il risultato:

- "Nessuna interferenza tra 3 parti (… ms)." Nulla si sovrappone.
- "Interferenza: Flange1 e Flange2: Sovrapposizione, 2.5 mm³." Per ogni coppia: il tipo di risultato e il volume che condividono.

Il riquadro **Assieme** a sinistra mostra **Interferenza**: "Nessuna", "2 risultati" (quelli mostrati), oppure "Non verificata". Senza nulla selezionato, il pannello di destra elenca ogni risultato sotto **Interferenza**.

Il risultato viene cancellato ogni volta che l'assieme cambia. Eseguire di nuovo {{ui:Interferenza}} dopo aver spostato un giunto. Ogni coppia di parti viene confrontata con tutte le altre, quindi gli assiemi grandi richiedono più tempo.

### Tipi di risultato

| Tipo | Significa |
|---|---|
| **Sovrapposizione** | Le parti condividono un volume: una vera interferenza. |
| **Profondità filettatura non corrispondente** | Il volume condiviso è dentro la filettatura di una parte ma oltre quella dell'altra: una vite filettata più in profondità del suo foro, oppure un gambo liscio in un foro filettato. |
| **Accoppiamento filettatura (filettature convenzionali)** | Il volume condiviso è dentro le filettature di entrambe le parti: una vite in un foro filettato. Le filettature convenzionali sono disegnate alla dimensione piena del filetto, quindi si sovrappongono sempre un poco. |
| **Facce a contatto** | Nessun volume condiviso, ma facce a contatto (entro 0.001 mm). |

Le filettature modellate (vedi [Filettature su alberi e fori, disegnate o modellate](topic:threads)) sono geometria reale: ciò che condividono è una **Sovrapposizione**.

### Nascondere ciò che non serve vedere

Sotto **Interferenza**, **Mostra** ha una casella per ogni tipo: togliere la spunta a **Accoppiamento filettatura** e **Facce a contatto** per vedere solo le interferenze che contano. **Nascondi questa coppia** accanto a un risultato nasconde quella coppia di parti, qualunque sia il tipo. I risultati nascosti vengono conteggiati ("2 risultati nascosti da questi filtri"), e **Mostra di nuovo le coppie nascoste** le riporta. Anche la barra di stato conteggia i risultati nascosti.

I filtri sono salvati con l'assieme, e ogni modifica è un passo di {{key:Mod+Z}}. Anche **Scansionare un giunto per le interferenze** (sotto) li usa. Un assieme con filtri viene salvato come versione 4, che le versioni precedenti di PartCraft rifiutano di aprire invece di perdere i filtri.

## Osservare il movimento

1. Selezionare un giunto che si muove (qualsiasi tranne quelli rigidi) nell'elenco a sinistra.
2. Trascinare il cursore sotto uno dei suoi valori, come **Angolo (°)** o **Offset (mm)**. La parte si muove mentre si trascina.
3. Rilasciare. La nuova posizione viene mantenuta e può essere annullata con {{key:Mod+Z}}.

È anche possibile digitare un angolo o un offset nel campo e premere {{key:Enter}}.

Un giunto su un ciclo chiuso (un cinematismo) muove l'intero ciclo: il valore trascinato viene mantenuto e gli altri giunti del ciclo seguono (vedi [Cicli chiusi](topic:build-assembly#closed-loops-linkages)).

## Scansionare un giunto per le interferenze

1. Selezionare un giunto che si muove.
2. Per un giunto con più valori (cilindrico, planare, sferico, perno in asola), scegliere quale scansionare in **Verifica movimenti**.
3. Scegliere {{ui:Verifica il movimento per le interferenze}}.

PartCraft sposta quel valore attraverso 25 posizioni in 24 passi uguali, mentre gli altri restano come sono: un angolo da −180° a 180° (un'inclinazione da −90° a 90°), una lunghezza da meno a più la dimensione della parte più grande. Riporta:

- "Nessuna interferenza per Angolo (°) da -180 a 180 (25 posizioni verificate)."
- "6 posizioni su 25 presentano interferenza, la prima a Angolo (°) 45 (12.4 mm³)." La prima posizione in interferenza e la sovrapposizione in quel punto.

Il pulsante è disattivato per i giunti rigidi, che non si muovono. La scansione verifica solo le posizioni, non il percorso tra di esse: una parte sottile potrebbe attraversarne un'altra tra due passi.

:::note
Contatto e gravità non sono ancora implementati. Senza limiti la scansione copre l'intero intervallo; assegnare al valore dei **Limiti** (vedi [Distinta dei componenti, viste esplose e parti mobili](topic:assembly-bom-explode)) e la scansione copre solo quelli, quindi una cerniera che si apre di 90° viene verificata su 90°.
:::

## Uno studio del movimento

**Assieme › Movimento** guida il valore di un giunto da un inizio a una fine nel tempo che si indica (velocità costante, con accelerazione dolce, sinusoidale, oppure andata e ritorno), posiziona l'assieme a ogni passo con i suoi giunti e cicli chiusi, e riporta quali interferenze ci sono e quanto le parti si avvicinano. **Aggiungi un punto** segue il centro di una parte o un punto su cui si fa clic, e la scheda traccia la sua posizione, velocità e accelerazione, il valore del giunto e il gioco nel tempo; **Salva CSV** e **Salva grafico** li scrivono su file. Velocità e accelerazione derivano dalle posizioni registrate, quindi un picco brusco tra due passi risulta basso: usare più passi.

Dopo **Esegui**, la barra **Scorri i passi dell'esecuzione** porta l'assieme a qualsiasi passo (il tempo, il valore e se le parti interferiscono sono mostrati accanto); il giunto mantiene il proprio valore, e **Torna al modello** riporta l'assieme allo stato originale. Le impostazioni dello studio sono salvate nel file dell'assieme; i suoi risultati vengono rigenerati da **Esegui**.

## Uno studio di contatto

**Assieme › Contatto** mostra come un assieme trasmette i carichi dove le parti si premono l'una sull'altra. Ogni parte porta con sé i propri vincoli, carichi e materiale dal suo studio **Simulazione** (una faccia fissa su una parte, una forza su un'altra); qui si scelgono le coppie. **Aggiungi una coppia**, poi **Scegli lato A** e fare clic sulle facce di una parte, **Scegli lato B** e fare clic sulle facce di una parte diversa (un clic su una faccia già scelta la toglie; Esc o **Fine** termina la scelta). Una coppia è **Senza attrito** (le parti si premono ma scorrono) oppure **Incollata** (restano unite); il fattore di rigidezza stabilisce quanto il contatto resiste a farsi penetrare (20 è un buon punto di partenza, 1000 per un pacco di acciaio rigido).

**Risolvi** esegue il carico a passi e mostra la forza di contatto, la massima penetrazione, lo spostamento maggiore e la tensione massima. Una parte senza coppia viene esclusa e la scheda lo indica. Il contatto senza attrito non trattiene una parte lateralmente: assegnare a ogni parte un vincolo nel proprio studio di Simulazione, oppure incollarla, altrimenti i passi potrebbero non convergere. Le coppie e le impostazioni sono salvate nel file dell'assieme.

**Esporta file di input CalculiX** scrive lo stesso modello come file di input CalculiX (.inp). CalculiX è un programma separato che si installa ed esegue da soli; **Leggi risultati CalculiX (.frd)** legge poi gli spostamenti sulla mesh di questo assieme e rifiuta un file creato per un'altra mesh. Il solutore qui è in grado di gestire la plasticità ma non la dinamica esplicita, e nulla di qui è un'analisi certificata: far verificare da un ingegnere tutto ciò che conta.
