---
title: Trasferire pezzi da e verso altri modellatori di parti
summary: Inviare un pezzo a un altro modellatore di parti come macro che lo ricostruisce con un albero delle feature attivo. Lo STEP con nomi e l'apertura dell'elenco delle feature scritto da un altro modellatore non sono ancora implementati in questa versione.
keywords: macro, non implementato, swb, vba, albero delle feature, andata e ritorno, esporta macro, cadcraft-sw.json, step con nomi, ap214, variabili globali, equazioni, pezzo nativo
from: 97ca61da
---

PartCraft scambia pezzi con SolidWorks in entrambe le direzioni, senza un formato di file che nessun altro possa leggere:

- **In uscita:** una macro (`.swb`, testo semplice) che SolidWorks esegue per costruire il pezzo da sé, feature per feature, con i suoi schizzi, relazioni, quote, variabili globali ed equazioni. Si ottiene un pezzo nativo con un albero delle feature attivo, non un solido inerte.
- **In ritorno:** una macro da eseguire all'interno di SolidWorks scrive le feature e le equazioni del pezzo in un file `.cadcraft-sw.json`. L'apertura di quel file in PartCraft non è ancora implementata in questa versione (richiede un kernel esatto).

:::warning
Nulla di tutto questo è ancora stato provato in SolidWorks. SolidWorks funziona solo su Windows e con una licenza, e PartCraft non ha mai eseguito queste macro al suo interno. Le macro sono state scritte dalla documentazione dell'API di SolidWorks e verificate qui solo nella struttura. Aspettarsi di segnalare dei problemi; il registro scritto dalla macro indica quale passaggio non è riuscito.
:::

PartCraft non può scrivere un file `.sldprt`: quel formato è chiuso. La macro è il modo per ottenere un pezzo nativo.

## Inviare un pezzo come macro

1. Aprire il pezzo.
2. Scegliere {{ui:Esporta}}, poi {{ui:Macro per SolidWorks (.swb)}}. PartCraft scarica `<pezzo>.swb`; la barra di stato indica che è stata scritta "senza il kernel esatto".
3. Una finestra indica quante feature, variabili globali ed equazioni costruisce la macro ed elenca quanto viene omesso. In questa versione non viene creato alcno STEP insieme: se ne serve uno, usare {{ui:Esporta}}, poi {{ui:STEP (a facce, kernel a mesh)}}.
4. In SolidWorks, scegliere **Strumenti > Macro > Esegui**, selezionare il file `.swb` e attendere. Crea un nuovo pezzo dal modello predefinito, imposta i millimetri e costruisce ogni feature.
5. Alla fine un messaggio indica quanti passaggi sono stati completati, quanti non sono riusciti e quanti corrispondono al corpo di PartCraft. Il registro completo, `<pezzo> macro log.txt`, viene scritto accanto alla macro.

Che cosa costruisce la macro:

| PartCraft | Nel nuovo pezzo |
|---|---|
| Schizzo sul piano Anteriore, Superiore o Destro | Uno schizzo su quel piano, con le sue linee, archi, cerchi, punti, relazioni e quote (con i nomi di PartCraft, come `k7`) |
| Schizzo su una faccia | Uno schizzo sulla stessa faccia, selezionata tramite un punto su di essa |
| Schizzo su un piano fisso | Un piano di riferimento passante per tre punti, e lo schizzo su di esso |
| Estrusione, taglio (cieco, attraverso tutto, piano medio, due direzioni, sformo) | Estrusione-base o estrusione-taglio di SolidWorks |
| Rivoluzione, taglio per rivoluzione | Rivoluzione attorno alla stessa linea di mezzeria |
| Foro (semplice, allargato, svasato, filettato) | Uno o due tagli con i loro schizzi (un foro filettato è il suo foro di maschiatura; nessuna filettatura) |
| Serie lineare e circolare, specchio | Serie lineare, serie circolare, specchio (feature o corpo) |
| Raccordo, smusso, svuota | Raccordo, smusso e svuota sugli stessi spigoli e facce, selezionati tramite punti |
| Parametri ed equazioni | Variabili globali ed equazioni sulle quote rinominate |
| Feature soppresse, barra di ritorno | Soppresse nello stesso modo; la barra di ritorno nello stesso punto |

Dopo ogni feature solida, la macro confronta il volume e le dimensioni del corpo con quelli di PartCraft. Quando differiscono, inverte una volta la direzione di quella feature e controlla di nuovo; se non è migliore, la riporta com'era e scrive "Verificare" nel registro.

### Che cosa viene omesso

La finestra e l'inizio della macro elencano tutto ciò che non viene riportato, con il motivo. Oggi sono: solidi importati (inserire invece lo STEP), sweep, loft, sformi, assi e punti di riferimento, condizioni di fine "fino a", estrusione di solo alcuni contorni, e tutto ciò che ne dipende. Le spline diventano curve attraverso i loro punti. Questa versione non ha un kernel esatto, quindi vengono omessi anche gli schizzi su facce e le feature che selezionano spigoli o facce.

## Inviare uno STEP con nomi

Non ancora implementato in questa versione: {{ui:STEP per SolidWorks (con nomi, AP214)}} richiede un kernel esatto, e sceglierlo indica "STEP per SolidWorks: non ancora implementato. …". Con un kernel esatto, il file contiene il nome del pezzo, i millimetri e il colore del pezzo, e pone Y verso l'alto, come SolidWorks mostra i pezzi (l'esportazione semplice {{ui:STEP AP214 (solido esatto)}} pone Z verso l'alto). Le lettere accentate perdono l'accento nel nome, e gli altri caratteri fuori dall'ASCII semplice diventano `_`.

## Riportare un pezzo indietro

L'apertura del file in PartCraft (passaggio 3) non è ancora implementata in questa versione: indica "Apertura di un'esportazione da SolidWorks: non ancora implementato. …". L'app di disegno CadCraft apre comunque il file e ne prende gli schizzi.

1. Scegliere {{ui:File}} > {{ui:Esporta}} > {{ui:Esporta macro per riportare i pezzi (.swb)}} per scaricare `CadCraftExport.swb`, e metterlo accanto ai propri pezzi.
2. In SolidWorks, aprire il pezzo, scegliere **Strumenti > Macro > Esegui** e selezionare `CadCraftExport.swb`. Scrive `<pezzo>.cadcraft-sw.json` accanto al pezzo e non lo modifica.
3. In PartCraft, scegliere {{ui:Apri}} e selezionare quel file, oppure trascinarlo sulla vista 3D.
4. Con un kernel esatto, PartCraft ricostruisce il pezzo feature per feature e mostra cosa ha fatto: ad esempio "5 feature su 5 riportate da SolidWorks (Flange.SLDPRT)", ciascuna feature che non è stata possibile riportare ("Non riportata: Sweep1 (Sweep)."), e se il volume corrisponde a quello scritto da SolidWorks.
5. Salvarlo come pezzo di PartCraft con {{ui:Salva}}.

Gli schizzi finiscono su un piano di base quando si trovano su uno di essi, sulla corrispondente faccia piana del pezzo quando esiste (così seguono le modifiche successive), e su un piano fisso altrimenti. Spigoli e facce di raccordi, smussi e svuotature vengono ritrovati a partire da punti e mantenuti come riferimenti con nome. Le variabili globali diventano parametri (i nomi con spazi ricevono dei trattini bassi: "Bolt count" diventa `Bolt_count`) e le equazioni diventano equazioni sulle stesse quote. Nulla viene indovinato: ciò che non ha un corrispettivo viene elencato.

L'app di disegno CadCraft apre lo stesso file e ne prende gli schizzi.

:::note
Il formato è `cadcraft-sw-export` versione 1, JSON semplice in millimetri e gradi. Un file prodotto da una macro più recente, oppure non valido, viene rifiutato con il motivo.
:::
