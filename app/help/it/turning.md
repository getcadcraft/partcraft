---
title: Tornitura su tornio
summary: Sfacciare, sgrossare, finire, scanalare, tronchare, filettare e forare un pezzo tornito, a partire dal profilo che il pezzo forma ruotando. Utensili da tornio, avanzamenti per giro, post per tornio, e cosa non è stato provato.
keywords: tornitura, tornio, tornire, sfacciatura, sgrossatura, finitura, scanalatura, scanalare, tronca, troncatura, filettatura, filettare, g32, g33, g96, velocità di taglio costante, css, raggio di punta, inserto, barra, mandrino, diametro, avanzamento per giro, g71, g76
from: d8cc53b0
---

Produzione ha sette operazioni per il tornio. Funzionano su qualsiasi pezzo: ciò che viene tagliato è il **profilo che il pezzo forma ruotando** attorno al centro del grezzo, quindi un pezzo non tondo viene tornito fino alla forma tonda che lo contiene.

**Nulla qui è stato eseguito su un tornio.** I percorsi sono verificati rispetto alla geometria dai test; i due post per tornio seguono i codici documentati dei controlli. Provare prima un programma nel simulatore del proprio controllo e a vuoto.

## Impostazione

Nella scheda **Impostazione**:

- **Asse utensile** è l'asse del mandrino, la Z del tornio. La parte anteriore del pezzo è a +Z; il mandrino tiene l'altra estremità.
- **Grezzo**: scegliere {{ui:Cilindro}}, la barra. Il sovrametallo in alto è ciò che rimuove la sfacciatura.
- **Origine pezzo**: un centro in alto del grezzo o in alto del modello porta Z0 sulla faccia anteriore, il posto usuale.
- **Controllo**: {{ui:Tornio stile Fanuc (.nc)}} oppure {{ui:Tornio LinuxCNC (.ngc)}}. Un post di fresatura rifiuta un programma di tornitura e lo dice.
- **Velocità massima del mandrino**: il limite sotto cui viene mantenuta la velocità superficiale.

{{ui:Altro}} nella barra degli strumenti di Produzione elenca le sette operazioni di tornitura in cima alla scheda **Operazioni**. La prima che si aggiunge porta con sé il proprio utensile: un **inserto da tornio** (raggio di punta, angolo dell'inserto, angolo del tagliente) oppure una **lama da scanalatura** (larghezza, raggio d'angolo, profondità raggiungibile). Modificarli nella scheda **Utensili**. Gli avanzamenti sono per giro, e la velocità è una velocità superficiale in m/min che il controllo mantiene al variare del diametro; dare a un utensile un proprio numero di giri per fissare invece la velocità.

## Le operazioni

| Operazione | Cosa fa |
|---|---|
| {{ui:Faccia}} | Spiana la parte anteriore della barra fino al pezzo, un passo di discesa alla volta, dall'esterno fino appena oltre il centro. |
| {{ui:Sgrossa}} | Passate lungo Z distanti una **profondità di taglio**, fino al profilo più il **sovrametallo da lasciare**; poi una volta lungo il profilo per togliere i gradini. Una valle tra due spalle viene raggiunta con un tuffo di una profondità di taglio. |
| {{ui:Finitura}} | Una passata lungo il profilo a una frazione dell'avanzamento dell'utensile. |
| {{ui:Scanala}} | Tuffa la lama affiancata dove può prendere più del limite di materiale ancora presente: le scanalature che l'inserto non riusciva a raggiungere. **Da / A Z** le restringe. |
| {{ui:Tronca}} | Taglia il pezzo appena dietro la sua faccia posteriore, fino a un po' oltre il centro, con becchi se ne è impostato uno. |
| {{ui:Filettatura}} | Una filettatura esterna: diametro maggiore, passo, lunghezza, numero di passate. Profondità 0 significa 0.6134 × passo (filettatura a 60°). Ogni passata asporta la stessa area di truciolo; le passate di finitura ripetono l'ultima. |
| {{ui:Foratura}} | Una punta sulla linea di centro fino a una profondità, con becchi. |

## Come l'utensile si tiene lontano dal pezzo

L'inserto è trattato per ciò che è: il suo cerchio di punta, e dietro di esso il bordo di uscita, una linea retta il cui angolo è 180° meno l'angolo del tagliente e l'angolo dell'inserto. Quella forma viene abbassata sul profilo in ogni punto lungo Z, e il percorso è dove si ferma. Quindi:

- **Il raggio di punta è già nel percorso.** I post non scrivono `G41` né `G42`; le coordinate sono il punto programmato dell'utensile (lo spigolo del quadrato attorno alla punta).
- L'inserto **non può seguire una parete più ripida del proprio bordo di uscita**. Una scanalatura dietro una spalla viene lasciata com'è, e l'operazione di finitura indica quanto profilo non ha potuto raggiungere. Lo prende un'operazione {{ui:Scanala}}.
- Il grezzo è tracciato lungo Z dopo ogni taglio, così la sgrossatura non taglia aria, la scanalatura trova ciò che resta, e ogni operazione mostra il volume asportato e se ha tagliato nel pezzo.

## Limiti

- **Solo tornitura esterna**: nessuna barra di alesatura, nessuna scanalatura o filettatura interna, nessuna scanalatura frontale.
- Un solo mandrino, il pezzo tenuto a −Z. Nessun contromandrino, nessun utensile motorizzato, nessun asse C o Y, nessuna lunetta né movimenti della contropunta.
- I percorsi sono movimenti diritti: le curve sono linee brevi entro la tolleranza (nessun `G2`/`G3`), e sgrossatura e filettatura sono scritte passata per passata (nessun ciclo `G71` o `G76`).
- La filettatura è fatta di passate diritte con un'uscita rettilinea alla fine; dare alla filettatura una scanalatura di scarico. La filettatura non è mostrata nel grezzo.
- La foratura sull'asse non modifica il modello del grezzo.
- Il portautensile, la torretta e il mandrino non sono verificati. Impostare **Arresta a Z** per tenere l'utensile lontano dalle griffe.
- Avanzamenti e velocità sono valori di partenza, come per la fresatura.
