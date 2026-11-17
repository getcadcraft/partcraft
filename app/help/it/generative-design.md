---
title: Far crescere una forma dai carichi (Generativa)
summary: Scegliere le facce tenute e caricate, le regioni da mantenere e da lasciare libere, i volumi obiettivo e i materiali, e generare gli esiti: le forme più rigide trovate per ogni volume, verificate di nuovo come solidi, confrontate in una tabella e scaricate come STL, STEP o come nuova parte.
keywords: progettazione generativa, ottimizzazione topologica, SIMP, alleggerimento, reticolo, forma organica, esiti, confronto, massa, frazione di volume, mantieni, zona da mantenere, ostacolo, zona da lasciare libera, spazio di progetto, dimensione minima dell'asta, STL, stampa 3D
from: 5b91fa8e
---

L'area di lavoro Generativa rimuove il materiale che i carichi non richiedono. Si indica dove la parte è tenuta e caricata, che cosa deve restare e che cosa deve restare libero; PartCraft trova la forma più rigida per ogni volume obiettivo (**ottimizzazione topologica**), la verifica di nuovo come solido con il materiale reale e mostra gli esiti affiancati. Lavora sulle facce con nome che il kernel mesh assegna alla parte (vedi [Il kernel mesh](topic:solid-kernels)).

Scegliere **Generativa** nella casella **Area di lavoro**. La parte non viene modificata; lo studio è salvato nel file della parte.

## Impostare uno studio

1. Premere **Nuovo studio** nel pannello destro.
2. **Spazio**: *La parte così com'è* rimuove materiale dalla parte; *Un box attorno alla parte* fa crescere una forma all'interno di un box più grande della parte, di **Margine del box**.
3. **Dimensione elemento**: lasciare vuoto per una dimensione automatica (circa 8,000 cubi), oppure digitarne una. Dimensioni più fini danno forme più dettagliate e richiedono più tempo.
4. **Asta minima**: le aste più sottili di circa il doppio di questo valore non si formano. Vuoto significa un cubo e mezzo.
5. Selezionare da uno a sei **Volumi obiettivo** (la quota dello spazio di progetto che la forma può occupare) e da uno a quattro **Materiali**. Ogni volume viene generato una volta; ogni materiale è verificato su quella forma (la forma più rigida non dipende dal materiale, ma la sua massa, la sua tensione e il suo coefficiente di sicurezza sì).

## Obiettivi

- {{ui:Vincolo}}: fare clic sulle facce tenute. Una **Faccia senza attrito** dalla lista **Aggiungi** del pannello tiene una faccia solo nel proprio piano (usarla per i piani di simmetria).
- {{ui:Forza}}: fare clic sulle facce caricate, poi digitare la forza totale e scegliere la sua direzione nel pannello. **Pressione** è nell'elenco **Aggiungi**.
- {{ui:Mantieni}}: fare clic sulle facce il cui intorno deve restare pieno, e impostare quanto in profondità (**Mantieni pieno entro**), ad esempio attorno ai fori per bulloni. Le facce vincolate o caricate sono sempre mantenute.
- {{ui:Ostacolo}}: fare clic sulle facce il cui intorno deve restare vuoto, e impostare a quale distanza (**Mantieni vuoto entro**), ad esempio lo spazio per un albero o un utensile.

Premere **Fine selezione** oppure {{key:Esc}} dopo aver fatto clic sulle facce. Le tinte verdi e rosse mostrano le regioni.

## Generare e confrontare

Premere {{ui:Genera}}. Il pannello mostra l'avanzamento e il tempo rimanente; **Ferma** annulla. Ogni esito appare nella tabella **Esiti**: volume obiettivo, materiale, **massa**, **tensione massima**, **spostamento massimo** e **coefficiente di sicurezza** (snervamento ÷ tensione), tutti ottenuti risolvendo di nuovo la forma finita come cubi solidi con il materiale reale.

Scegliere un esito per vederlo nella vista (la parte è nascosta; selezionare **Mostra la parte attraverso di esso** per vedere entrambi). Sotto la tabella: quante iterazioni sono servite e se si è stabilizzato, la sua rigidezza come solido confrontata con il valore dell'ottimizzatore, e la sua superficie.

## Usare un esito

- **STL**: una mesh di triangoli chiusa, pronta per la stampa 3D.
- **STEP (a facce)**: la stessa superficie come solido STEP composto da facce piane.
- **Nuovo file di parte**: una parte PartCraft la cui unica funzione è l'esito come solido importato. Aprirla per fare schizzi su di essa, praticare fori o verificarla in Simulazione. È a facce (migliaia di facce piane), non è una forma modificabile.
- **Aggiungi a questa parte** unisce l'esito alla parte; è attivo solo per uno spazio di progetto a box (con la parte stessa come spazio, l'esito si trova all'interno della parte).

**Nuovo file di parte** e **Aggiungi a questa parte** non sono ancora implementati in questa versione: l'esito diventa un solido importato, che richiede un kernel esatto. I download STL e STEP (a facce) funzionano.

## Quanto fidarsi

- Ottimizza la **rigidezza** per il volume dato. Non ci sono ancora limiti di tensione né regole di produzione (sporgenze, direzioni di fresatura, dimensioni minime dei fori): verificare un esito scelto in [Simulazione](topic:simulation) e correggere.
- Le aste sottili larghe uno o due cubi sono approssimazioni: usare una dimensione dell'elemento più piccola per le parti snelle.
- Il metodo è SIMP con un filtro di densità, una proiezione a soglia e aggiornamenti dei criteri di ottimalità; la tensione e la deflessione riportate sono quelle dell'esito come cubi, il che è onesto ma grossolano sugli spigoli vivi.

## Correlati

- [Verificare tensione e deflessione (Simulazione)](topic:simulation)
- [Esportare per la stampa, STEP e DXF](topic:export-files)
- [Che cosa non è ancora implementato](topic:not-built-yet)
