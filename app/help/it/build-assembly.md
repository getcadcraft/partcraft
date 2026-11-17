---
title: Costruire un assieme con i giunti
summary: Avviare un assieme da una parte, inserire copie e altri file di parte, unirli con giunti rigidi, rotoidali, prismatici, cilindrici, planari, sferici e perno in asola su facce piane, centrare i giunti su assi, modificare una parte sul posto e salvare l'assieme.
keywords: assieme, accoppiamento, accoppiamenti, giunto, anello, anello chiuso, cinematismo, quadrilatero articolato, meccanismo, rigido, rotoidale, prismatico, cilindrico, planare, sferico, giunto sferico, perno in asola, inserisci componente, fissato a terra, fisso, concentrico, coincidente, modifica parte, nel contesto, partcraft-asm
from: a53bbfef
---

Un assieme riunisce delle parti. In PartCraft i **giunti** posizionano le parti: ogni giunto poggia su una faccia piana di ciascuna di due parti e le mette faccia a faccia. Un giunto rotoidale fa ruotare una parte, un giunto prismatico la fa scorrere, un giunto rigido la blocca.

## Avviare un assieme

1. Costruire una parte con un solido (una parte vuota non può entrare in un assieme: "Costruire prima un solido, poi inserirlo in un assieme.").
2. Scegliere {{ui:Assieme}} nella barra degli strumenti.

La barra di stato indica "Assieme avviato con Part1 come parte fissata a terra. Inserire altre parti (Aggiungi copia, Inserisci, oppure Modifica › Duplica), poi unirle con i giunti." Il pannello di sinistra elenca ora **Parti** e **Giunti**, e la barra degli strumenti mostra gli strumenti dell'assieme. Gli strumenti di schizzo e di feature si nascondono.

La prima parte è **fissata a terra**: non si muove mai, e tutte le altre sono posizionate rispetto a essa.

## Inserire parti

- {{ui:Aggiungi copia}} inserisce un'altra copia della parte selezionata (o dell'ultima). Le copie condividono una sola parte: modificandola, cambia ogni copia.
- {{ui:Duplica}} ({{key:Mod+D}}) nel gruppo Modifica fa lo stesso per la parte selezionata. {{key:Mod+C}} e {{key:Mod+V}} copiano una parte e la incollano accanto alle altre, in questo assieme o in un altro; {{key:Mod+Shift+V}} la incolla nello stesso punto. Vedi [Copiare, incollare e duplicare](topic:copy-paste).
- {{ui:Inserisci}} inserisce una parte da un file `.partcraft.json` del computer. La parte viene copiata nell'assieme.

Le nuove parti compaiono 20 mm a destra di tutto ciò che c'è già, e restano lì finché un giunto non le posiziona. Una parte senza giunti può anche essere spostata a mano: con valori digitati o con frecce da trascinare (vedi [Distinta dei componenti, viste esplose e parti mobili](topic:assembly-bom-explode)).

## Unire due parti

1. Scegliere {{ui:Giunto}} oppure premere {{key:J}}. Il pannello di destra indica **Nuovo giunto**.
2. Fare clic su una faccia piana della prima parte. Viene evidenziata.
3. Fare clic su una faccia piana della seconda parte.

La seconda parte si sposta in modo che la sua faccia combaci con quella della prima parte, rivolta verso di essa. Il giunto compare sotto **Giunti**, per esempio "Revolute1", e il pannello di destra mostra le sue impostazioni.

- Se entrambe le facce sono state create con rivoluzioni, il giunto parte come **rotoidale**; altrimenti come **rigido**. Cambiarlo in seguito.
- Le facce curve non si possono scegliere: "Questa faccia è curva. Scegliere una faccia piana (per ruotare attorno a un foro o all'asse di una rivoluzione, sceglierlo nel giunto in seguito)."
- {{key:Esc}} annulla un giunto già avviato (oppure fare clic su una parte nell'elenco a sinistra).

### Impostazioni del giunto

| Impostazione | Cosa fa |
|---|---|
| **Tipo** | Uno dei giunti della tabella sottostante |
| **Angolo (°)** | Fa ruotare la seconda parte attorno all'asse del giunto (perpendicolare alle facce) |
| **Offset (mm)** | Sposta la seconda parte lungo l'asse, lontano dalla faccia (i valori negativi la spingono dentro) |
| **Lungo X**, **Lungo Y**, **Inclinazione attorno a X**, **Inclinazione attorno a Y**, **Lungo l'asola**, **Direzione asola** | Gli altri valori, mostrati per i giunti che li usano |
| **Centra su** (per ciascun lato) | Dove l'asse del giunto attraversa la faccia: "L'origine della faccia", l'asse di una rivoluzione ("Axis of Revolve1") o l'asse di un foro ("Hole1, hole 2") |

Ogni valore che un giunto lascia muovere ha un cursore da trascinare sotto il suo campo; gli altri si impostano una sola volta.

| Giunto | Cosa si muove | Si imposta una volta |
|---|---|---|
| **Rigido** | niente | Angolo, Offset |
| **Rotoidale** | Angolo (una cerniera) | Offset |
| **Prismatico** | Offset (un cassetto) | Angolo |
| **Cilindrico** | Angolo e Offset (un albero in un cuscinetto a strisciamento) | |
| **Planare** | Lungo X, Lungo Y sulla faccia, e Angolo (una parte che scorre su un tavolo) | |
| **Sferico** | Angolo (rotazione) e Inclinazione attorno a X e Y, attorno al centro del giunto (un giunto a sfera) | |
| **Perno in asola** | Lungo l'asola e Angolo (un perno in un'asola rettilinea) | Direzione asola: l'angolo dell'asola rispetto all'X della faccia |

X e Y di una faccia sono quelli della faccia della prima parte; il centro del giunto è impostato da **Centra su**.

"L'origine della faccia" è l'origine della parte proiettata sulla faccia, che spesso non è il punto in cui si vogliono allineare le parti. Per parti tonde e perni, impostare **Centra su** sull'asse della rivoluzione o del foro su entrambi i lati: gli assi si allineano, come un accoppiamento concentrico.

### Esempio: due flange imbullonate faccia a faccia

1. Aprire la parte flangia (una rivoluzione con una serie circolare di fori) e scegliere {{ui:Assieme}}.
2. Scegliere {{ui:Aggiungi copia}}.
3. Premere {{key:J}}, fare clic sulla faccia piana del disco della prima flangia (la faccia da cui partono i fori dei bulloni), poi sulla stessa faccia della seconda flangia. Le facce sono state create dalla rivoluzione, quindi il giunto è rotoidale.
4. Impostare **Centra su** su "Axis of Revolve1" per entrambi i lati. Le flange ora condividono un asse.
5. Digitare `22.5` in **Angolo (°)** per allineare i fori dei bulloni, oppure trascinare il cursore.

## Cicli chiusi: cinematismi

Parti unite ad anello (un quadrilatero articolato, una biella-manovella, un telaio controventato su entrambi i lati) formano un **ciclo**. PartCraft risolve ogni ciclo in modo che si chiuda: i giunti che ne fanno parte assumono i valori che chiudono l'anello, spostandosi il meno possibile dalla posizione di partenza.

- **Impostare o trascinare** un valore di un giunto su un ciclo e il resto del ciclo segue. Per un quadrilatero articolato, trascinare l'**Angolo** della manovella e la biella e il bilanciere si muovono di conseguenza. Il valore impostato viene mantenuto; gli altri sono calcolati a partire da esso.
- Nell'elenco, un giunto su un ciclo che può ancora muoversi è **blu**: si potrebbe ancora impostare un altro valore. Un ciclo che non può muoversi (un telaio controventato) resta nero. Un ciclo che non può chiudersi è **rosso**.
- Il riquadro **Parte** mostra **Cicli**: quanti sono chiusi e quanti valori possono ancora muoversi, per esempio "1 chiuso; 1 valore può ancora muoversi".
- {{ui:Verifica il movimento per le interferenze}} esegue la scansione di un giunto su un ciclo con il ciclo che lo segue, passo dopo passo (vedi [Verificare un assieme per interferenze e movimento](topic:check-assembly)).

Un cinematismo piano costruito con barre piane deve essere coerente in profondità: due parti unite faccia a faccia su entrambi i lati di un anello devono avere la stessa altezza di impilamento in entrambe le direzioni. Usare l'**Offset** di un giunto per sollevare una parte dove l'impilamento non torna, altrimenti il ciclo non si chiude.

## Lavorare con le parti

Fare clic su una parte nella vista o nell'elenco per selezionarla. Il pannello di destra mostra il nome della parte, quante copie ci sono, il suo volume, i suoi giunti, e se è fissata a terra, posizionata dai suoi giunti, oppure "Non unita: resta dove è stata posizionata". Pulsanti:

- {{ui:Modifica questo pezzo}} (oppure {{ui:Modifica parte}} nella barra degli strumenti, o fare doppio clic sulla parte nell'elenco): apre la parte per la modifica;
- {{ui:Inserisci una copia}};
- {{ui:Imposta come pezzo fissato a terra}};
- {{ui:Rimuovi}}: rimuove anche i suoi giunti, dopo una richiesta di conferma.

Un assieme mantiene almeno una parte: "Un assieme mantiene almeno una parte. Chiuderlo invece."

### Modificare una parte sul posto

1. Selezionare una parte e scegliere {{ui:Modifica parte}}. La parte si apre con la sua cronologia; il titolo dice "Bracket (in Bracket assembly)".
2. Modificarla come qualsiasi altra parte.
3. Scegliere {{ui:Indietro}} nella barra degli strumenti. L'assieme si aggiorna: ogni copia di quella parte cambia, e i giunti su facce create da spigoli di schizzo seguono la modifica.

Riportare la modifica nell'assieme è un passo dell'elenco di annullamento dell'assieme.

## Annulla, salva e chiudi

- L'assieme ha un proprio elenco di annullamento: {{key:Mod+Z}} e {{key:Mod+Y}} agiscono su giunti, inserimenti e impostazioni.
- {{ui:Salva}} oppure {{key:Mod+S}} scarica `<nome assieme>.partcraft-asm.json`, con ogni parte al suo interno. Aprirlo in seguito con {{ui:Apri}}.
- {{ui:Chiudi}} chiude l'assieme e torna alla parte da cui si era partiti. Se l'assieme non è salvato, chiede: {{ui:Annulla}}, {{ui:Scarta l'assieme}} oppure {{ui:Salva prima}}.
- Per rinominare l'assieme, fare clic su uno spazio vuoto in modo che nulla sia selezionato, e cambiare **Nome** nel pannello di destra.

## Assiemi grandi

Un assieme può contenere migliaia di copie di poche parti. Le copie di una stessa parte vengono disegnate insieme, un giunto che si ruota riposiziona solo le parti che gli stanno dietro, e l'elenco delle parti mostra le prime righe con un pulsante "Mostra altro" sotto (la parte selezionata è sempre elencata).

- Mentre si ruota o si ingrandisce la vista, un assieme di più di circa 300.000 triangoli viene disegnato come un solo riquadro per parte, e poi per intero un istante dopo che si smette.
- {{ui:Viste}} › {{ui:Visualizzazione leggera}} mantiene sempre i riquadri. La scelta di parti e giunti usa comunque le parti reali.
- La velocità di rotazione dipende anche dalla scheda grafica. I valori misurati da PartCraft sono nelle note di rilascio, insieme alla macchina su cui sono stati misurati.

## Problemi dei giunti

- Una parte che nessun giunto raggiunge è elencata come **libera** e il pannello dice "Bracket2 non è unita alla parte fissata a terra, quindi resta dov'è stata posizionata."
- Un ciclo che non può chiudersi (le lunghezze non arrivano, un limite blocca un giunto, le facce non sono coerenti in profondità): "Revolute3 chiude un ciclo che non può chiudersi: è fuori di 2.000 mm. Verificare facce, offset e limiti dei giunti del ciclo." I suoi giunti diventano rossi.
- Se una faccia o un asse usato da un giunto scompare dopo la modifica di una parte: "La faccia usata da questo giunto non c'è più in Bracket." Rimuovere il giunto e ricrearlo.

Avanti: [Verificare un assieme per interferenze e movimento](topic:check-assembly).
