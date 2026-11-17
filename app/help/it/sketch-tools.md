---
title: Spline, rifila, offset e altri strumenti di schizzo
summary: Disegnare spline a punti di passaggio e a punti di controllo, rifilare ed estendere curve, creare un offset di una catena, specchiare rispetto a una linea di mezzeria, aggiungere poligoni e asole, creare serie di geometrie di schizzo e proiettare spigoli del modello.
keywords: spline, punto di passaggio, punto di controllo, b-spline, nurbs, curva, rifila, estendi, offset, specchio, simmetrico, poligono, esagono, asola, serie, serie lineare, serie circolare, proietta, proietta spigolo, includi, converti entità
from: 3ecb166a
---

Questi strumenti funzionano in uno schizzo aperto. {{ui:Spline}} e {{ui:Rifila}} sono nella barra degli strumenti. Gli altri si trovano sotto {{ui:Altro}}, alla fine degli strumenti di schizzo. Ogni strumento è un passaggio di annullamento, e {{key:Esc}} lo interrompe. Per gli strumenti di disegno di base vedere [Disegnare il primo schizzo](topic:sketch-basics).

## Spline

Una spline è una curva liscia. Ne esistono due tipi.

| Strumento | Tasto | Come disegnare |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Fare clic sui punti attraverso cui passa la curva. Terminare con {{key:Enter}} (Invio), {{key:Esc}}, un clic con il pulsante destro o un doppio clic. Fare di nuovo clic sul primo punto per chiudere la spline |
| {{ui:Spline a punti di controllo}} (sotto {{ui:Altro}}) | | Fare clic sui punti di controllo. La curva viene attratta verso di essi ma tocca solo il primo e l'ultimo. Il poligono di controllo tratteggiato compare durante il disegno e resta visibile dopo |

- **I punti sono punti dello schizzo.** Si possono trascinare oppure assegnare relazioni e quote come a qualsiasi altro punto. Il primo punto di una spline può agganciarsi all'estremità di una linea, unendole con una relazione di coincidenza.
- **Tangente a un'estremità.** Selezionare una linea, un arco o una spline che incontra un'estremità della spline, poi la spline, quindi scegliere {{ui:T Tangente}}. La direzione dell'estremità della spline segue allora la linea. Una tangenza lontana dalle estremità della spline viene rifiutata: "Una tangente a una spline richiede che la linea, l'arco o la spline incontri una delle sue estremità."
- **Estremità.** Senza una relazione di tangenza, le estremità di una spline a punti di passaggio sono naturali (nessuna curvatura all'estremo). La curva è cubica e passa per ogni punto, con la spaziatura data dalle distanze tra i punti.
- **Le spline chiuse** formano da sole un profilo. Le spline aperte uniscono linee e archi in un anello chiuso come ogni altra curva.
- Eliminare un punto all'interno di una spline rimuove quel punto e mantiene la spline, finché ha almeno due punti (tre se chiusa).

Estrusione e rivoluzione costruiscono la spline con il kernel a mesh, a partire da brevi tratti rettilinei (le curve vere richiedono un kernel esatto: non ancora implementato in questa versione). L'esportazione DXF scrive una spline come polilinea che resta entro 0,01 mm dalla curva, perché DXF R12 non ha un'entità spline.

## Rifilare ed estendere

| Strumento | Tasto | Come |
|---|---|---|
| {{ui:Rifila}} | {{key:T}} | Puntare una curva: il tratto che verrebbe eliminato appare in rosso, fino agli incroci più vicini. Fare clic per rimuoverlo. Una curva che non incrocia nulla viene rimossa per intero |
| {{ui:Estendi}} (sotto {{ui:Altro}}) | {{key:E}} | Fare clic su una linea o un arco vicino all'estremità da estendere. Cresce fino alla curva successiva che incontra. "Non c'è nulla che quell'estremità possa raggiungere." quando non c'è alcun ostacolo |

Rifila ed Estendi funzionano su linee, archi, cerchi e spline (Estendi: solo linee e archi).

- Un **cerchio** rifilato diventa un arco. La sua quota di raggio o di diametro passa all'arco.
- Rifilare la parte centrale di una linea lascia due linee che restano sulla stessa retta. Rifilare la parte centrale di un arco lascia due archi con lo stesso centro e una relazione di uguaglianza.
- Una **spline** rifilata diventa una spline a punti di controllo che segue esattamente la vecchia curva. Una relazione di tangenza a un'estremità che viene mantenuta resta.
- Il nuovo estremo viene posto sulla curva che lo ha tagliato (sulla linea, sull'arco o sul cerchio, oppure coincidente con la sua estremità). Le spline non possono ospitare un punto, quindi una spline che taglia non aggiunge alcuna relazione.

**Le relazioni che non sono più valide vengono rimosse**, e la barra di stato indica quante sono. Ad esempio, una quota di lunghezza su una linea rifilata viene rimossa, ma restano le relazioni orizzontali o parallele.

## Offset

1. Scegliere {{ui:Offset}} sotto {{ui:Altro}} oppure premere {{key:O}}.
2. Fare clic su una linea, un arco, un cerchio o una spline. L'intera catena viene evidenziata: tutte le curve unite una dopo l'altra, fino a un punto in cui se ne incontrano tre o più. Per creare un offset solo di una parte di una catena, selezionare prima quelle curve, poi scegliere Offset e fare clic su una di esse.
3. Spostare il puntatore dal lato in cui andrà la copia. Compare un'anteprima tratteggiata. Premere {{key:B}} per entrambi i lati.
4. Fare clic, digitare la distanza e premere {{key:Enter}} (Invio).

Linee e archi vengono spostati con esattezza. Gli angoli vengono estesi o rifilati finché si incontrano. La copia ha una sola quota **Offset**, e gli altri pezzi la seguono: fare doppio clic sulla quota per cambiare l'intera copia. Una distanza troppo grande per la catena viene rifiutata, ad esempio "Questa distanza è troppo grande per questa catena: un lato si ribalterebbe verso l'interno."

Una **spline** viene spostata con una nuova spline a punti di passaggio entro 0,001 mm dall'offset reale. Questa copia è fissa: non segue le modifiche successive e non ha una quota Offset. Una spline in una catena richiede giunzioni lisce (tangenti) alle sue estremità.

## Specchio

1. Con Seleziona, scegliere cosa specchiare.
2. Scegliere {{ui:Specchio}} sotto {{ui:Altro}} oppure premere {{key:M}}.
3. Fare clic sulla linea o sulla linea di mezzeria rispetto a cui specchiare.

Ogni punto specchiato riceve una relazione **Simmetrico** con l'originale, così la copia segue le modifiche dell'originale. I punti che si trovano sulla linea di specchio sono condivisi, e i cerchi specchiati ricevono una relazione Uguale. Se non era selezionato nulla, fare clic sugli elementi da specchiare, premere {{key:Enter}} (Invio), poi fare clic sulla linea di specchio.

## Poligoni e asole

| Strumento | Come |
|---|---|
| {{ui:Poligono}} | Fare clic sul centro, poi su un angolo, quindi digitare il numero di lati (da 3 a 64). I lati sono uguali e gli angoli giacciono su un cerchio di costruzione. Quotare il cerchio per dimensionare il poligono |
| {{ui:Asola}} | Fare clic sul centro di un'estremità, poi sul centro dell'altra, quindi fare clic per impostare la larghezza. Due linee, tangenti a due semicerchi uguali |

## Serie di schizzo

Selezionare prima la geometria, poi:

- {{ui:Serie lineare}}: fare clic su un punto iniziale, poi dove va la prima copia, quindi digitare il numero di copie (originale compreso).
- {{ui:Serie circolare}}: fare clic sul centro, quindi digitare il numero di copie, distribuite in modo uniforme su un giro completo.

Le copie portano con sé le relazioni tra la geometria selezionata (una serie circolare esclude quelle orizzontali e verticali). Le copie non sono collegate all'originale: se se ne modifica una, le altre restano come sono.

## Proiettare gli spigoli del pezzo

1. Scegliere {{ui:Proietta spigolo}} sotto {{ui:Altro}}.
2. Fare clic su uno spigolo rettilineo o circolare del pezzo che si trova dietro lo schizzo.

Lo spigolo viene copiato sul piano dello schizzo con esattezza e fissato (relazione Fisso). Non segue le modifiche successive del pezzo. Premere {{key:Q}} per renderlo geometria di costruzione. Un cerchio inclinato rispetto al piano dello schizzo si proietterebbe come un'ellisse, quindi viene rifiutato. Lo stesso vale per spigoli a forma libera e spigoli che puntano direttamente fuori dallo schizzo. La proiezione richiede un kernel esatto: non ancora implementata in questa versione.
