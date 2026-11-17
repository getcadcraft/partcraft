---
title: Inviare un disegno a un laser
summary: Scegliere cosa fa ogni layer (taglio, solco, incisione, riempimento, immagine), vedere in anteprima i movimenti della testina, salvare il G-code in modalità laser GRBL oppure inviarlo dal browser dopo aver inquadrato il lavoro.
keywords: laser, taglio laser, incisore laser, GRBL, G-code, incisione, riempimento, dithering, incisione di immagini, solco, taglio, Web Serial, Linux, inquadra il lavoro, potenza, velocità, passate
from: 327b3c46
---

Il pannello {{ui:Laser}} trasforma i layer di un disegno in un programma per un laser che usa GRBL (la maggior parte dei laser amatoriali e da piccole officine, a diodo e CO2). In PartCraft, scegliere {{ui:Esporta}} › {{ui:Programma laser…}}, poi {{ui:Aggiungi contorni da un DXF…}}: i contorni e i fori entrano nel layer CUT. Gli sviluppi piani delle parti in lamiera (con le linee di piega sul layer BEND) richiedono il kernel esatto, che questa versione non ha. Le impostazioni sono salvate nel file della parte o dell'assieme.

:::warning
Provare ogni impostazione prima su materiale di scarto, indossare protezioni per gli occhi adatte al proprio laser, tenere chiuso il coperchio dove c'è, e non lasciare mai un laser in funzione senza sorveglianza. I valori iniziali di un layer sono segnaposto, non raccomandazioni per alcun materiale.
:::

## Scegliere cosa fa ogni layer

Ogni layer del disegno è una riga. {{ui:Operazione}} lo imposta su **Taglia**, **Solco**, **Incidi linee**, **Riempi forme**, **Incidi immagine** oppure **Non inviare**, con una {{ui:Potenza %}}, una {{ui:Velocità mm/min}} e un numero di {{ui:Passate}}.

- **Riempi** brucia l'interno delle forme chiuse con linee distanti {{ui:Interlinea}}, con un {{ui:Angolo}}, in entrambe le direzioni o in una sola, con un'extracorsa perché la testina sia già a velocità quando il laser si accende; il tratteggio incrociato aggiunge una seconda passata a 90°. Una forma con un foro resta aperta in corrispondenza del foro.
- **Incidi immagine** trasforma un'immagine in punti (Floyd–Steinberg, Atkinson, ordinato, oppure bianco e nero semplice con una soglia) oppure, con *Livelli di grigio*, in potenza variabile.
- Ordine: prima immagini e riempimenti, poi incisioni di linee, poi solchi, poi tagli, così un pezzo già tagliato non si sposta mentre viene inciso. In uno stesso layer i percorsi vanno **prima dall'interno** (un foro prima della lastra in cui si trova), con il più vicino come successivo.

## Anteprima, poi salvataggio

L'anteprima disegna ciò che fa la testina: linee di incisione a colori, movimenti veloci in grigio e un riquadro verde intorno a tutto ciò che viene inciso. Sotto ci sono le dimensioni, la lunghezza di incisione e una stima dei tempi (senza accelerazione; una macchina reale impiega di più). {{ui:Salva G-code…}} scrive G-code in modalità laser GRBL: `$32=1`, `M4` (o `M3`) con valori S, movimenti `G0` e `G1`, `M5` alla fine. X0 Y0 è l'angolo inferiore sinistro del lavoro, a meno che non si scelga l'origine del disegno: impostare lì lo zero di lavoro della propria macchina. Il G-code segue la modalità laser documentata di GRBL; non è ancora stato provato su un laser reale.

## Invio dal browser

In Chrome ed Edge, {{ui:Connetti…}} chiede di scegliere la porta USB del laser. Non si connette né invia nulla finché non si preme un pulsante. Premere prima {{ui:Inquadra il lavoro}}: la testina traccia il riquadro del lavoro con il laser **spento** (o alla bassa potenza impostata per un puntatore), così si vede dove verrà inciso. Solo allora {{ui:Invia lavoro}} si attiva, e si disattiva di nuovo se si cambia qualcosa. {{ui:Pausa}} blocca la testina, {{ui:Ferma}} la blocca, reimposta il controller (il laser si spegne) e invia `M5`. Dove manca Web Serial (Firefox, Safari e CadCraft Studio, la cui web view non lo ha ancora), salvare il G-code e inviarlo con il programma del proprio laser.

## Non ancora implementato

Formati di altri controller (Ruida, laser Marlin, file dei produttori), ponticelli e attacchi d'ingresso, compensazione del kerf, librerie di materiali, assi rotativi e asse Z, allineamento con la fotocamera.
