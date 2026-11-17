---
title: Estrudere una sporgenza e tagliare attraverso
summary: Trasforma uno schizzo in un solido con Estrudi, imposta profondità cieca, a piano medio, fino a o a due direzioni, una conicità o un solo contorno dello schizzo, poi disegna su una faccia e usa Taglia per una tasca o una fenditura passante.
keywords: estrudi, sporgenza, sporgenza estrusa, taglia, taglio estruso, tasca, passante, cieco, piano medio, inverti, profondità, pad, fino a faccia, fino alla faccia successiva, fino a vertice, offset dalla faccia, direzione 2, due direzioni, sformo durante l'estrusione, conicità, contorno, regione, contorni selezionati
from: 3b13ff10
---

{{ui:Estrudi}} spinge il profilo chiuso di uno schizzo in linea retta fuori dal suo piano, per creare materiale. {{ui:Taglia}} fa lo stesso ma rimuove materiale. Sono entrambe la stessa feature nella sostanza: puoi passare dall'una all'altra in seguito.

## Estrudere una sporgenza

1. Disegna un profilo chiuso e chiudi lo schizzo (vedi [Disegnare il primo schizzo](topic:sketch-basics)). Resta selezionato.
2. Scegliere {{ui:Estrudi}}.

Compare un solido di 10 mm, "Extrude1" si aggiunge alla cronologia con il suo schizzo rientrato sotto di esso, e la barra di stato indica "Extrude1 aggiunto. Cambia i suoi numeri sul pannello destro."

**Quale schizzo viene usato:** lo schizzo appena chiuso, oppure lo schizzo selezionato nella cronologia. Con nulla selezionato, PartCraft prende lo schizzo più recente che nessuna feature usa ancora. Se non ce n'è nessuno: "Crea prima uno schizzo: scegli un piano, Schizzo, disegna un profilo chiuso, Esci."

### Imposta profondità e direzione

Nel pannello destro:

| Impostazione | Scelte | Predefinito |
|---|---|---|
| **Operazione** | Sporgenza (aggiunge materiale), Taglia (rimuove materiale), Interseca (mantiene la sovrapposizione), Nuovo corpo (non ancora implementato in questa versione: richiede un kernel esatto) | Sporgenza |
| **Terminazione** | Cieca (una profondità), Piano medio (in entrambe le direzioni), Passante, Fino a faccia o piano, Fino alla faccia successiva, Fino a vertice, Offset dalla faccia | Cieca |
| **Profondità (mm)** | Qualsiasi valore sopra zero (mostrato per Cieca e Piano medio) | 10 |
| **Inverti direzione** | Cresce dall'altro lato del piano dello schizzo (non mostrato per Piano medio) | Disattivo |

Digitare un numero e premere {{key:Enter}} o {{key:Tab}}: la parte si ricostruisce subito. **Piano medio** mette metà della profondità su ciascun lato dello schizzo.

### Fino a una faccia, alla faccia successiva o a un vertice

Non ancora implementato in questa versione: ogni terminazione "fino a" richiede un kernel esatto, e la feature dice "Estrusione fino a una faccia, alla faccia successiva o a un vertice: non ancora implementato (richiede un kernel esatto)." Usa una profondità Cieca che hai misurato. Con un kernel esatto le terminazioni funzionano così:

- **Fino a faccia o piano**: **Fino a** accetta una faccia piana (scegli, poi cliccala) o un piano di riferimento. Una faccia parallela allo schizzo dà una profondità esatta; una faccia inclinata taglia la fine lungo la pendenza. Se la faccia è dietro lo schizzo: "… Provare Inverti direzione."
- **Fino alla faccia successiva**: si ferma alla prima faccia piana del corpo che l'estrusione incontra (le facce curve non sono supportate qui: lo segnala).
- **Fino a vertice**: si ferma a livello di un vertice (clicca vicino alla fine di uno spigolo) o di una feature punto.
- **Offset dalla faccia**: come Fino a faccia, fermandosi **Offset (mm)** prima di essa (misurato perpendicolarmente alla faccia).

### Due direzioni, conicità, un contorno

- **Seconda direzione** (Cieca): estrude anche **Seconda profondità (mm)** dall'altro lato dello schizzo.
- **Conicità (°)**: i lati si inclinano man mano che avanzano (negativo: verso l'esterno), come uno sformo; solo una direzione. Non ancora implementato in questa versione (richiede un kernel esatto): lasciarla a 0.
- **Regioni**: **Scegli regioni**, poi clicca dentro i cicli da estrudere; vengono usate solo quelle regioni (un cerchio dentro un quadrato: clicca dentro il cerchio per un cilindro, tra i due per una piastra con foro). **Tutte** torna a ogni ciclo.

Sotto questi, **Quote dello schizzo** elenca le quote guida dello schizzo, così puoi cambiare le dimensioni del profilo senza aprire lo schizzo.

:::note
**Passante vale solo per i tagli.** Una sporgenza impostata su Passante fallisce con "Passante è per i tagli. Usa una profondità per una sporgenza." Passare una feature da Taglia a Sporgenza riporta Passante a Cieca automaticamente.
:::

## Tagliare una tasca

1. Clicca la faccia piana in cui vuoi tagliare. Si evidenzia, e il pannello destro indica **Faccia**.
2. Scegliere {{ui:Schizzo su questa faccia}} (o {{ui:Schizzo}} nella barra degli strumenti).
3. Disegna il contorno della tasca, per esempio un rettangolo, e quotalo.
4. Scegliere {{ui:Esci}}.
5. Scegliere {{ui:Taglia}}. Inizia come **Passante**: rimuove materiale attraverso tutta la parte.
6. Per una tasca, imposta **Terminazione** su **Cieca (una profondità)** e digita la **Profondità (mm)**.

Un taglio entra nel materiale, dal lato opposto alla faccia su cui è stato disegnato. Se la barra di stato indica "Non c'è nulla da tagliare da quel lato dello schizzo. Provare l'altra direzione.", spunta **Inverti direzione**.

Uno schizzo sul fondo della tasca segue il fondo: cambia la profondità della tasca e lo schizzo si sposta con essa.

## Estrudere o spingere un'intera faccia

Per far sporgere o affondare una faccia non serve disegnarne il contorno. Clicca la faccia piana, poi nel pannello destro:

- {{ui:Estrudi da essa}} fa uscire la faccia: PartCraft aggiunge uno schizzo sulla faccia che contiene il suo contorno (i fori nella faccia restano fori) e un'Estrusione di 10 mm.
- {{ui:Taglia in essa}} spinge la faccia verso l'interno: stesso schizzo e un Taglio a metà della parte.

Entrambe sono un solo passaggio: {{key:Mod+Z}} rimuove insieme lo schizzo e la feature. La nuova feature è selezionata, quindi digita subito un numero e premi {{key:Enter}} per la sua profondità. Il contorno viene copiato come linee e archi fissi: non segue le modifiche future della faccia. Se una parte del contorno non può essere copiata (una curva a forma libera), si apre invece lo schizzo con ciò che si è potuto copiare: completalo, poi scegli {{ui:Esci}} e {{ui:Estrudi}} o {{ui:Taglia}}.

## Profili con isole

Uno schizzo può contenere più cicli chiusi. I cicli affiancati diventano sporgenze separate (o tagli); un ciclo dentro un altro diventa un foro attraverso la sporgenza. Per esempio, un rettangolo con due cerchi all'interno si estrude come una piastra con due fori.

Per usare solo alcuni cicli, selezionali con **Regioni** (sopra); un'altra feature può usare gli altri cicli dello stesso schizzo.

## Modificare dopo

- Clicca "Extrude1" nella cronologia per riportare le sue impostazioni.
- Fai doppio clic sul suo schizzo (rientrato sotto di essa) per aprire lo schizzo; chiudilo per ricostruire.
- Vedi [Modificare una parte dalla sua cronologia](topic:edit-history) per sopprimere, tornare indietro, riordinare ed eliminare.

## Messaggi comuni

| Messaggio | Cosa fare |
|---|---|
| "Lo schizzo non ha un profilo chiuso da estrudere." | Lo schizzo non ha un ciclo chiuso di linee piene. Chiudi le lacune, oppure riporta le linee di costruzione a normali con {{key:Q}} |
| "Il profilo è aperto: un'estremità in (x, y) non è collegata a nulla." | Apri lo schizzo e collega quell'estremità alla linea successiva |
| "Non c'è ancora nulla da tagliare." | Un taglio ha bisogno di un solido da tagliare. Crea prima una sporgenza |
| "Dopo questa operazione non resta nulla della parte." | Il taglio ha rimosso tutto. Controlla la sua dimensione e la direzione |

Altro in [Risoluzione dei problemi](topic:troubleshooting).
