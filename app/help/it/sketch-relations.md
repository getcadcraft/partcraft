---
title: Relazioni e quote dello schizzo
summary: Ogni relazione e quota che uno schizzo di PartCraft può avere, cosa selezionare per ciascuna, il suo simbolo e come si comporta durante la risoluzione.
keywords: relazioni, vincoli, coincidente, orizzontale, verticale, parallelo, perpendicolare, tangente, uguale, concentrico, punto medio, fisso, distanza, distanza orizzontale, distanza verticale, raggio, diametro, angolo, simboli, glifi
from: 9831e7be
---

Le relazioni fissano come una geometria si colloca rispetto ad altre geometrie. Le quote fissano le dimensioni. Per aggiungere una relazione, selezionare gli elementi con lo strumento Seleziona ({{key:S}}) e scegliere il suo pulsante nel pannello di destra; per aggiungere una quota, usare lo strumento Quota ({{key:D}}) oppure i pulsanti delle quote nel pannello di destra. Come lavorarci: [Definire completamente uno schizzo](topic:relations-dimensions).

"Curva" qui sotto indica un cerchio o un arco. L'origine conta come punto.

## Relazioni

| Pulsante | Simbolo | Selezionare | Effetto |
|---|---|---|---|
| {{ui:• Coincidente}} | • (mostrato solo quando selezionato o in caso di problemi) | Due punti | I punti coincidono |
| {{ui:• Coincidente}} | • | Un punto e una linea | Il punto giace sulla linea (o sul suo prolungamento) |
| {{ui:• Coincidente}} | • | Un punto e una curva | Il punto giace sul cerchio o sull'arco |
| {{ui:H Orizzontale}} | H | Una linea, oppure due punti | La linea è orizzontale, oppure i due punti sono alla stessa altezza |
| {{ui:V Verticale}} | V | Una linea, oppure due punti | La linea è verticale, oppure i punti sono uno sopra l'altro |
| {{ui:∥ Parallelo}} | ∥ | Due linee | Le linee hanno la stessa direzione |
| {{ui:⊥ Perpendicolare}} | ⊥ | Due linee | Le linee si incontrano ad angolo retto |
| {{ui:T Tangente}} | T | Una linea e una curva | La linea tocca la curva senza attraversarla |
| {{ui:T Tangente}} | T | Due curve | Si toccano, all'esterno o all'interno, come disegnate |
| {{ui:T Tangente}} | T | Una spline e una linea, un arco o una spline che incontra una delle sue estremità | La spline parte da quell'estremità nella direzione dell'altra curva |
| {{ui:= Uguale}} | = | Due linee | Stessa lunghezza |
| {{ui:= Uguale}} | = | Due curve | Stesso raggio |
| {{ui:◎ Concentrico}} | ◎ | Due curve | Stesso centro |
| {{ui:◎ Concentrico}} | ◎ | Un punto e una curva | Il punto si trova al centro della curva |
| {{ui:M Punto medio}} | M | Un punto e una linea | Il punto si trova a metà della linea |
| {{ui:↔ Simmetrico}} | ↔ | Due punti e una linea | I punti sono immagini speculari rispetto alla linea (Specchio le aggiunge) |
| {{ui:⚓ Fisso}} | ⚓ | Un punto, una linea, una curva o una spline | Lo blocca esattamente dove si trova ora (per una spline: i suoi punti) |

Le linee qui includono le linee di mezzeria. Il disegno aggiunge alcune relazioni automaticamente: lo snap su un punto lo rende coincidente, lo snap su una curva vi pone il punto sopra, le linee quasi orizzontali o verticali ricevono H o V, e un rettangolo viene con i quattro angoli uniti, due H e due V.

**Fisso** serve a bloccare rapidamente qualcosa, ma poi il pezzo non può seguire una modifica di quota altrove. Preferire le quote rispetto all'origine.

## Quote

| Pulsante | Selezionare | Misura | Mostrata come |
|---|---|---|---|
| {{ui:Distanza}} | Una linea | La sua lunghezza | Distanza 40 |
| {{ui:Distanza}} | Due punti | La distanza in linea retta tra loro | Distanza 40 |
| {{ui:Distanza}} | Un punto e una linea | La distanza dal punto alla linea, perpendicolare ad essa | Distanza 40 |
| {{ui:Distanza}} | Due linee parallele | Lo spazio tra loro | Distanza 40 |
| {{ui:Distanza orizzontale}} | Due punti, oppure una linea | Solo la distanza sinistra-destra | Distanza orizzontale 40 |
| {{ui:Distanza verticale}} | Due punti, oppure una linea | Solo la distanza alto-basso | Distanza verticale 40 |
| {{ui:Raggio}} | Un cerchio o un arco | Il suo raggio | Raggio R10 |
| {{ui:Diametro}} | Un cerchio o un arco | Il suo diametro | Diametro ⌀20 |
| {{ui:Angolo}} | Due linee non parallele | L'angolo tra loro, da 0 a 180 gradi | Angolo 30° |

Con lo strumento Quota, PartCraft sceglie il tipo in base a ciò che si fa clic e a dove si posiziona il numero:

| Si fa clic su | Si ottiene |
|---|---|
| Una linea | La sua lunghezza; per una linea inclinata, orizzontale se il numero è sopra o sotto, verticale se è di lato |
| Un cerchio | Diametro |
| Un arco | Raggio |
| Due punti | Distanza; orizzontale o verticale come per una linea inclinata |
| Un punto e una linea | Distanza dal punto alla linea |
| Due linee | Angolo, oppure la distanza se sono parallele |
| Un punto e un cerchio | Niente: "Questi elementi non possono essere quotati insieme." Quotare invece il punto centrale del cerchio |

**Offset** (mostrato come distanza) è creato dallo strumento Offset: mantiene una linea copiata parallela a quella distanza, oppure un arco o un cerchio copiato concentrico con un raggio maggiore o minore di quella quantità. Gli altri pezzi dello stesso offset portano una relazione **O** e seguono l'unica quota Offset. Vedere [Spline, rifila, offset e altri strumenti di schizzo](topic:sketch-tools).

I valori delle quote sono in millimetri (o gradi), mai negativi. Raggio e diametro devono essere maggiori di zero. Il valore 0 è ammesso per le distanze: due punti a distanza 0 sono coincidenti.

## Come si comporta la risoluzione

- **Movimento minimo.** Quando un valore cambia, il risolutore sposta la geometria il meno possibile. Una linea la cui lunghezza cambia cresce in egual misura a entrambe le estremità, se nessuna è vincolata.
- **Nessun ribaltamento.** Le distanze da un punto a una linea, le distanze orizzontali e verticali, gli angoli e le tangenze ricordano da quale lato sono state create. Cambiare un valore non ribalta mai la geometria dall'altro lato.
- **I conflitti non modificano nulla.** Se le relazioni si contraddicono, lo schizzo resta esattamente com'era e quelle in conflitto diventano rosse.
- **Relazioni ridondanti** (già implicate da altre) sono segnalate nella barra di stato ("è già implicita. Eliminarla.") e la feature viene comunque costruita, con un avviso.
- **Giunzioni tangenti.** Dove un arco di raccordo incontra le sue linee in un punto finale comune, la tangenza viene risolta in una forma che resta ben definita in quel punto, così i raccordi di schizzo non risultano sovradefiniti.

## Non ancora disponibili

Relazioni di collinearità, concentricità con raggio comune e perforazione; un punto su una spline; quote guidate (di riferimento); quote di ordinata e di lunghezza d'arco; equazioni tra quote. Per linee collineari usare Parallelo più una distanza 0.
