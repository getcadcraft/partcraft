---
title: Lamiera: flange e sviluppo piano
summary: Iniziare una parte in lamiera da uno schizzo (una piastra piana o un profilo piegato), impostare una sola volta spessore, raggio di piega e fattore K, piegare flange verso l'alto dai bordi con scarichi di piega, e distenderla come DXF per il taglio.
keywords: sviluppo piano, distendere, sviluppo, lunghezza sviluppata, sovrametallo di piega, linea di piega, dxf per laser, taglio laser, lamiera, flangia di base, flangia di spigolo, flangia, piega, raggio di piega, fattore k, k-factor, spessore, calibro, scarico, scarico di piega, canale, staffa, involucro, lamiera piegata
from: 144bd0f6
---

:::note
**Non ancora implementato in questa versione.** La lamiera richiede un kernel geometrico esatto, che questa versione di PartCraft non ha: costruisce ogni parte con il kernel a mesh. [Cosa non è ancora implementato](topic:not-built-yet) spiega cosa fare al suo posto. Il resto di questa pagina descrive il funzionamento con un kernel esatto.
:::

Le parti in lamiera iniziano con una **Flangia di base**. Imposta la lamiera per l'intera parte: il suo **spessore**, il **raggio di piegatura interno** e il **fattore K**. Ogni **Flangia di spigolo** successiva si piega con gli stessi valori, così la parte resta un'unica lamiera che può essere distesa. Entrambe richiedono il **kernel esatto** (vedi [Il kernel a mesh](topic:solid-kernels)).

## Iniziare con una flangia di base

1. Disegnare uno schizzo. Usare un **profilo chiuso** per una piastra piana (un rettangolo, o qualunque contorno chiuso con fori). Usare **una sola catena aperta di linee** per una lamiera piegata, come una L, una U o una Z disegnate come vista di spigolo della lamiera.
2. Selezionare lo schizzo nella cronologia delle feature.
3. Aprire {{ui:Altro}} nel gruppo Feature e scegliere {{ui:Flangia di base}}.

Nel pannello di destra:

- **Spessore (mm)** è il calibro della lamiera.
- **Raggio di piegatura (mm)** è il raggio interno di ogni piega. 0 dà uno spigolo interno vivo; l'esterno gira comunque con un raggio pari a uno spessore.
- **Fattore K** indica dove si trova lo strato neutro all'interno della lamiera, da 0 (la faccia interna) a 0.5 (il centro). Determina quanto è lunga la lamiera quando è distesa. 0.44 è il valore predefinito; il laboratorio o il fornitore del materiale possono fornire il proprio valore.
- **Profondità (mm)** è quanto un profilo piegato si estende fuori dal piano dello schizzo. Una piastra la ignora.
- **Spessore fuori dalle piegature**: un profilo aperto è una faccia della lamiera. Per impostazione predefinita lo spessore va sulla parte interna della prima piega, quindi le linee disegnate sono l'esterno del canale. Spuntarlo per mettere le linee sulla parte interna. Il risultato è lo stesso da qualunque estremità si disegni.

Ogni angolo di una catena aperta diventa una piega. Una linea troppo corta per contenere le sue pieghe lo segnala, con la lunghezza necessaria.

## Piegare una flangia di spigolo

1. Fare clic su un bordo rettilineo della faccia superiore o inferiore della lamiera (i bordi lunghi, non quelli sottili).
2. Scegliere {{ui:Altro}} › {{ui:Flangia di spigolo}}. Senza un bordo selezionato, PartCraft attende che ne venga scelto uno; Esc annulla.

La flangia si piega verso l'alto dalla faccia di quel bordo attorno al raggio interno della lamiera, poi prosegue dritta. Nel pannello:

- **Angolo (°)** è di quanto si piega, da 1 a 180. 90 è una flangia squadrata.
- **Lunghezza (mm)** è il tratto dritto dopo la piega.
- **Piega nell'altro verso** la piega dall'altra faccia (verso il basso invece che verso l'alto).
- **Offset all'inizio** e **Offset alla fine** accorciano la flangia da ciascuna estremità del bordo.
- **Scarico di piega**: quando un'estremità ha un offset, nella lamiera viene tagliata una fessura accanto ad essa, così la piega non strappa il metallo in quel punto. **Larghezza scarico** imposta la larghezza della fessura; la sua profondità è raggio di piega più spessore. Scegliere **Nessuno** per lasciare lo spigolo non tagliato.

Per cambiare il bordo in seguito, premere {{ui:Scegli}} nel pannello e fare clic su un altro.

:::tip
Usare i parametri per spessore e raggio (vedi [Parametri ed equazioni](topic:parameters)), così una modifica del calibro aggiorna subito tutte le flange.
:::

## Distenderla

Entrambi i pannelli terminano con **Sviluppo piano**. Premere {{ui:Stendi piana}}:

- Un'anteprima mostra la lamiera distesa, con la linea centrale di ogni piega tratteggiata.
- **Dimensione** e **Area** sono quelle del grezzo piano.
- Ogni piega è elencata con la sua direzione (**su** o **giù**, visto dal lato dello schizzo della flangia di base), l'angolo e il raggio interno.

Ogni piega occupa la lunghezza dello strato neutro della lamiera attraverso di essa, il **sovrametallo di piega**: angolo (in radianti) × (raggio interno + fattore K × spessore). Quindi una piega di 90° su una lamiera da 2 mm con raggio 2 mm e fattore K 0.44 aggiunge 4.52 mm di lamiera piana.

Su una piastra piana, fori, tagli e scarichi di piega compaiono nel piano esattamente dove sono, compresi i fori attraverso una flangia.

Per tagliarne molte, premere {{ui:Nesting su lastre…}} sotto lo sviluppo piano: vedi [Disporre parti piane su lastre](topic:nest-flat-parts). Una flangia di base piegata si distende come un unico rettangolo: la sua lunghezza sviluppata × la sua profondità, con una linea di piega per angolo.

{{ui:Salva DXF}} salva lo sviluppo piano per laser, punzonatrice o taglio a getto d'acqua, in millimetri:

- il contorno sul layer **OUTLINE**, come linee, archi e cerchi;
- le linee di piega sul layer **BEND**, tratteggiate;
- una nota su ogni piega sul layer **BEND_NOTES**, per esempio "UP 90° R2".

Cambiando qualcosa, lo sviluppo piano scompare; premere di nuovo {{ui:Stendi piana}} per ottenerne uno nuovo.

:::note
Verificare il fattore K con la propria officina prima di tagliare: la lunghezza dello sviluppo dipende da esso, e varia con materiale, spessore e attrezzatura.
:::

## Messaggi

- **La lamiera richiede prima una flangia di base** — una flangia di spigolo è stata aggiunta prima di qualunque flangia di base. Spostarla sotto una flangia di base, oppure aggiungere prima una flangia di base.
- **Una flangia di spigolo richiede un bordo rettilineo** — le flange si piegano solo lungo linee; i bordi curvi non possono ancora riceverne una.
- **Quel bordo non è su una faccia dello spessore della lamiera** — il bordo appartiene a una faccia che non è la superiore o l'inferiore della lamiera (per esempio la parete di un foro). Selezionare un bordo della faccia superiore o inferiore.
- **Gli offset non lasciano nulla del bordo** — i due offset sommati coprono l'intero bordo o di più.
- **Le flange di spigolo su una flangia di base piegata non si possono ancora distendere** — partire da una piastra piana e piegare tutto verso l'alto con flange di spigolo, che si distendono.
- **Tagli e fori fatti dopo una flangia di base piegata non sono ancora mostrati nel suo sviluppo** — lo sviluppo di un profilo piegato è solo il suo rettangolo sviluppato.
