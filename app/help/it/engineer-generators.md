---
title: Parti dalla fisica: generatori
summary: Lo spazio di lavoro Engineer e la funzione Corpo generato: scegliere un generatore, impostarne gli input (portata, pressione, temperature, materiale, stampante) e ottenere una parte dimensionata con formule da testo, con la sua scheda dati, le verifiche di fabbricazione e i file per gli strumenti di analisi. Gli stessi input danno sempre la stessa parte.
keywords: engineer, generatore, corpo generato, fisica, regole, scambiatore di calore, collettore, bocchello, reticolo, gyroid, scheda dati, input, deterministico, stessi input stessa parte, verifiche di fabbricazione, stampa 3D, letto di polvere
from: 5a387dc0
---

Un **generatore** è uno script che dimensiona una parte a partire dai requisiti e la costruisce. Un generatore di scambiatori di calore prende il calore da trasferire, le due portate e le loro temperature, la pressione e il materiale; calcola quanto deve essere grande il nucleo e quanto spessa la sua parete, lo costruisce, e indica i valori usati e da dove provengono. Modificando un input, la parte segue.

Il risultato è un corpo normale nella parte: compare nell'elenco delle feature, si stampa, si esporta. Anche il generatore stesso è conservato nella parte, quindi un file si apre su qualsiasi computer senza che il generatore sia installato, e **aprire una parte non esegue mai uno script**.

## Creare un corpo

1. Scegliere lo spazio di lavoro {{ui:Engineer}} nel selettore.
2. Scegliere un generatore nell'elenco (quelli forniti con PartCraft, poi quelli aperti da un file) e cliccare {{ui:New}}.
3. Lo script viene eseguito. Al termine il corpo è nella vista e il pannello mostra i suoi input, la sua **scheda dati** e le sue **verifiche**.

È anche possibile aggiungerne uno da Progettazione: {{ui:Features}} › {{ui:More}} › {{ui:Generated body}}.

## Modificarlo

Modificando un input, il corpo viene rifatto poco dopo aver smesso di digitare. Il pannello indica quale di tre condizioni è vera:

- **Aggiornato**: il corpo corrisponde allo script e ai suoi input.
- **Gli input sono cambiati**: il corpo nella parte deriva dagli input precedenti; viene rifatto, oppure premere {{ui:Run}}.
- **Non ancora eseguito** oppure **L'ultima esecuzione non è riuscita**: viene mostrato un errore dello script con la sua riga.

{{ui:Stop}} termina un'esecuzione che impiega troppo. {{ui:Undo}} torna indietro un passo alla volta: un'esecuzione è un passo, un input è un passo.

## La scheda dati

Ogni valore calcolato dal generatore è elencato con la sua **unità** e la sua **origine** (un'equazione da testo, una norma, una scheda tecnica del fornitore). Nulla è una costante nascosta. La scheda fa parte del file, quindi è la stessa sul computer successivo. [Esportazione dei dati](topic:data-out) spiega come salvarla in JSON o PDF.

## Le verifiche

Un generatore può verificare la propria parte rispetto a un processo di stampa: pareti e spazi più sottili di quanto il processo sopporta, pezzi isolati, cavità che intrappolano polvere o resina, fori troppo stretti per essere liberati, e sbalzi che richiedono supporti. I risultati sono nel pannello e nell'elenco {{ui:Problems}} (il pulsante ⚠), e sono salvati con la parte.

I valori di processo sono le cifre tonde che le guide di progettazione pubbliche danno per il processo in generale (FDM, SLA, SLS, letto di polvere metallica). **Non sono le specifiche della propria macchina**: sostituirli con i valori del proprio laboratorio prima di affidarsi a una verifica. La verifica lavora su una griglia di voxel, quindi è accurata a circa un voxel: una parete è segnalata solo se è più sottile del limite di più di un voxel.

## Cosa è incluso

| Generatore | Cosa produce |
|---|---|
| Blocco gyroid | Un blocco riempito con un gyroid, una lamina Schwarz P o diamante: il reticolo più semplice |
| Scambiatore di calore gyroid | Il nucleo di uno scambiatore a due fluidi, dimensionato dal carico con il metodo efficacia-NTU, la sua parete dalla pressione; può verificare la perdita di carico con uno studio di flusso su una cella |
| Collettore di distribuzione | Un collettore con le diramazioni, ogni tubo dimensionato dalla portata che trasporta |
| Trave reticolare a gradiente | Un reticolo la cui parete si ispessisce dove un'ottimizzazione topologica indica che serve materiale |

Tutti sono stime iniziali basate su formule da testo. [La libreria di ingegneria](topic:engineering-library) elenca le formule e i loro limiti. Eseguire Simulazione, Termica o Flusso sul risultato prima di affidarsi ad esso.

## Controlli sull'esportazione

I generatori di Engineer e le loro schede dati riportano un'informativa sui controlli sull'esportazione e sulle sanzioni. Leggerla in [Controlli sull'esportazione di Engineer](topic:engineer-export-notice); è anche in fondo a ogni scheda dati.

## Non ancora implementato

- Attacchi, porte e raccordi sul nucleo dello scambiatore: è solo il nucleo.
- Curve di temperatura per la resistenza dei materiali: i materiali sono a temperatura ambiente.
- Perdite nei raccordi a T e ripartizione della portata tra le uscite del collettore.
- Aggiunta di generatori dalla directory degli add-on con un solo clic; aprire un file ne aggiunge uno a questo browser.
- Generatori per le altre app.
