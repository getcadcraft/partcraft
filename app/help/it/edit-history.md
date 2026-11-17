---
title: Modificare una parte tramite la sua cronologia
summary: Modificare feature e schizzi a posteriori, sopprimere, eseguire il rollback, inserire feature più in alto, riordinare, rinominare ed eliminare, e annullare ciascuna di queste operazioni.
keywords: cronologia, albero delle feature, albero di progettazione, modifica feature, modifica schizzo, sopprimi, ripristina, rollback, torna indietro, avanza, riordina, sposta feature, elimina, rinomina, annulla, ripristina, ricostruisci, rigenera, padre figlio, parte grande, molte feature, ricostruzione lenta, 750 feature
from: 6f75aef4
---

Una parte in PartCraft è la sua cronologia: l'elenco di piani, schizzi e feature a sinistra. PartCraft ricostruisce il solido a partire dalla cima di questo elenco ogni volta che qualcosa cambia. Modificare un numero all'inizio dell'elenco cambia tutto ciò che è costruito su di esso.

## Modificare una feature

1. Fare clic sulla feature nella cronologia (o sullo schizzo rientrato sotto di essa).
2. Modificare le sue impostazioni nel pannello di destra. Ogni modifica ricostruisce subito la parte.

Non ci sono OK né Annulla: ogni modifica viene applicata. Se non piace, premere {{key:Mod+Z}}.

## Cambiare gli spigoli o le facce usati da un raccordo, uno smusso o uno svuotamento

Fare doppio clic sulla feature nella cronologia, oppure selezionarla e scegliere {{ui:Scegli spigoli}} (o {{ui:Scegli facce}}). Fare clic su spigoli o facce per aggiungerli o toglierli, poi {{ui:Fine}} oppure {{key:Esc}}. Vedi [Raccordo, smusso e svuota](topic:fillet-chamfer-shell).

## Modificare uno schizzo

1. Fare doppio clic sullo schizzo nella cronologia, oppure selezionarlo e scegliere {{ui:Modifica schizzo}} nel pannello di destra (o {{ui:Schizzo}} nella barra degli strumenti).
2. La parte torna com'era quando lo schizzo è stato creato: le feature successive restano nascoste durante la modifica.
3. Modificare la geometria, le relazioni o le quote.
4. Chiudere lo schizzo. L'intera parte viene ricostruita con la modifica.

Per cambiare solo una misura non serve aprire lo schizzo. Selezionare la feature o lo schizzo e modificare il numero sotto **Quote dello schizzo** (o **Quote guida**) nel pannello di destra. Vedi [Cambiare le misure senza aprire lo schizzo](topic:change-sizes).

## Quando una feature non riesce

Se una modifica rende impossibile una feature, PartCraft costruisce tutto il resto e segnala il problema:

- la feature mostra **⚠ errore** nella cronologia e il suo messaggio è in cima al pannello di destra (passare il mouse sulla riga per leggerlo anche lì);
- le feature che ne dipendono mostrano **⚠ non costruita**, con "Richiede Extrude2, che non riesce.";
- l'indicatore nella barra di stato dice "1 feature in errore".

Correggere la causa (o annullare), e la parte torna a costruirsi. I messaggi più comuni e cosa fare sono in [Risoluzione dei problemi](topic:troubleshooting).

## Sopprimere una feature

La soppressione disattiva una feature senza eliminarla: utile per provare una parte senza un foro o una serie.

1. Selezionare la feature.
2. Scegliere {{ui:Sopprimi}}. La sua riga mostra **off**. Anche le feature che ne dipendono non vengono costruite.
3. Scegliere {{ui:Ripristina}} per riattivarla.

## Rollback

Il rollback costruisce la parte solo fino a un certo punto, così la si può vedere com'era, oppure aggiungere una feature più in alto nella cronologia.

1. Selezionare una feature e scegliere {{ui:Torna qui}}. Quella feature e tutte quelle sotto di essa diventano grigie e non vengono costruite. Una riga **Barra di rollback · avanza** indica il punto.
2. Qualsiasi feature aggiunta ora va **alla barra**, prima di quelle grigie.
3. Fare clic su **Barra di rollback · avanza** per ricostruire tutto.

La posizione del rollback viene salvata nel file.

## Riordinare le feature

1. Selezionare la feature.
2. Scegliere {{ui:Sposta su}} o {{ui:Sposta giù}}, oppure, con la riga della cronologia attiva, premere {{key:Alt+Up}} o {{key:Alt+Down}}.

Una feature non può mai salire sopra qualcosa che usa. Il pulsante è grigio e, passandoci sopra (o provando il tasto), compare il motivo, per esempio "Extrude2 usa Sketch2, quindi Sketch2 deve venire prima."

Una feature usa: il suo schizzo; la faccia su cui poggia lo schizzo; le feature che una serie o uno specchio copiano; una linea di schizzo o una rivoluzione usata come direzione o asse.

## Eliminare una feature

1. Selezionare la feature e scegliere {{ui:Elimina}} nel pannello di destra o nella barra degli strumenti, oppure premere {{key:Delete}}.
2. Se altre feature la usano, PartCraft chiede: "Extrude3, Hole1 usano Extrude1 e verranno eliminate anche loro." Scegliere {{ui:Elimina tutto}} oppure {{ui:Annulla}}.

Eliminare una feature non elimina il suo schizzo: lo schizzo ricompare nella vista come schizzo inutilizzato, pronto per un'altra feature. Eliminarlo separatamente se non serve.

## Rinominare

Selezionare la feature e digitare un nuovo **Nome** in fondo al pannello di destra (fino a 60 caratteri). Il nome della parte si trova nel pannello di destra quando non è selezionato nulla.

## Parti con centinaia di feature

Una parte con centinaia di feature viene testata con 750. PartCraft conserva il solido che aveva a metà della cronologia, quindi una modifica verso la fine ricostruisce solo le feature successive; una modifica vicino alla cima ricostruisce tutto ciò che vi è costruito sopra, ed è la più lenta. Annulla e ripristina ricostruiscono solo a partire dal punto in cui i due stati differiscono. Per lavorare più velocemente su una parte grande, eseguire un rollback fino al punto su cui si sta lavorando (vedi Rollback sopra) oppure sopprimere ciò che non serve per ora. Diversi tagli e sporgenze che non si toccano vengono applicati insieme, quindi una parte fatta di molti fori e sporgenze separati si costruisce più rapidamente di quanto il numero di feature lasci supporre.

Una parte grande viene ricostruita in background: l'indicatore in basso dice **Ricostruzione in corso…** con l'avanzamento, e la vista, i pannelli e i menu continuano a funzionare. Finché la nuova versione non è pronta, sullo schermo resta l'ultima costruita. Se si modifica di nuovo durante la ricostruzione, PartCraft costruisce la versione più recente e scarta quella in corso. Una parte piccola viene ricostruita subito.

## Annulla e ripristina

- {{key:Mod+Z}} oppure {{ui:Annulla}} annulla l'ultima modifica: una feature, un'impostazione, una modifica di schizzo, un trascinamento. La barra di stato indica quale, per esempio "Annullato: modifica quota."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} oppure {{ui:Ripristina}} la ripristinano.
- PartCraft conserva gli ultimi 200 passi (una parte così grande che 200 copie occuperebbero molta memoria ne conserva meno, mai meno dei 20 più recenti). Le modifiche sul foglio del disegno (una sezione, un simbolo GD&T spostato) sono nello stesso elenco. Aprire un file o iniziare una nuova parte lo azzera.

:::mac
Su Mac usare ⇧⌘Z per ripristinare. In Safari, ⌘Y può aprire invece la cronologia del browser.
:::
