---
title: Progettare un elemento BimCraft e riportarlo nel modello
summary: Una parte inviata da BimCraft si apre con l'edificio attorno, in grigio e in sola lettura. Modificarla, poi salvarla in BimCraft perché possa accettare la nuova forma.
keywords: bimcraft, bim, elemento, invio, salvataggio in BimCraft, collegamento, edificio, contesto, vicini, supporto, staffa, ifc, accetta
from: 0978fe53
---

## Cosa si fa

Lavorare su una parte proveniente da un modello BimCraft, nella sua posizione nell'edificio, e inviarne la nuova forma.

## Passaggi

1. In BimCraft selezionare un elemento e scegliere {{ui:Collegamenti parte}} › {{ui:Invia a PartCraft}}. PartCraft lo apre come nuova parte. La barra di stato indica che si tratta di un elemento BIM.
2. Gli elementi intorno (entro 3 m) sono disegnati in grigio. Servono come riferimento per il progetto. Non è possibile selezionarli né modificarli, e non sono salvati nel file della parte.
3. Modificare la parte come qualsiasi altra: tagliare, aggiungere, forare, specchiare. Origine e assi sono quelli dell'elemento, quindi la parte torna nella posizione originale.
4. Scegliere {{ui:File}} › {{ui:Esporta}} › {{ui:Salva in BimCraft}}. La barra di stato indica quale revisione è stata inviata.
5. In BimCraft l'elemento risulta modificato finché la persona responsabile non lo accetta.

## Risultato atteso

- La parte mantiene il collegamento nel file. Riaprendolo, la barra di stato indica ancora che si tratta di un elemento BIM. L'edificio grigio ricompare finché il browser conserva il pacchetto con cui è stato inviato.
- Salvando di nuovo si invia la revisione 2, 3 e così via. BimCraft conserva la più recente.

## Utile da sapere

- La forma torna in BimCraft come mesh in millimetri, negli assi propri dell'elemento. Le caratteristiche restano in PartCraft.
- {{ui:Salva in BimCraft}} non ha effetto su una parte che non proviene da BimCraft.
- Una parte senza ancora un solido non ha nulla da inviare.
- Entrambe le app devono essere aperte nello stesso browser: non viene caricato nulla, le due pagine si passano l'elemento.
