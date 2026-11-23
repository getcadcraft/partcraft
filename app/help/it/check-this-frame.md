---
title: Verificare questo telaio
summary: Prendere i membri in acciaio di una carpenteria saldata (una slitta, un supporto, un telaio di tubi e profili), appoggiare l'attrezzatura sui piedi e gli appoggi sul pavimento, e vedere quanto di ciascun membro e di ciascuna saldatura è utilizzato secondo AISC 360-16 o EN 1993. Un ausilio finché un ingegnere non l'ha revisionato.
keywords: telaio, carpenteria saldata, slitta, slitta per pompa, elemento strutturale, saldatura, saldature, verifica, AISC 360, EN 1993, utilizzo, appoggio, attrezzatura, carico, sezione cava, HSS, RHS, CHS, ingegnere
from: 032e34ee
---

{{ui:Verifica questo telaio}} prende i membri in acciaio diritti di una carpenteria saldata, costruisce un telaio con essi, lo risolve sotto il peso dell'acciaio e dell'attrezzatura che vi si appoggia, e verifica ogni membro e ogni saldatura dove i membri si incontrano. Una esecuzione, una tabella.

:::warning
È un **ausilio finché un ingegnere non l'ha revisionato**. Non è un timbro, e un esito positivo non è un progetto. Il calcolo usa le linee di mezzeria dei membri come disegnate, considera ogni giunto saldato tutt'intorno alla sezione, ricava il cateto del cordone dalla parete della sezione (fino a 8 mm) se non è impostato, e non verifica bulloni, piastre, piastre di base, ancoraggi, appoggio, taglio a blocco, fatica o sollevamento.
:::

## Esecuzione

1. Disegnare i membri con {{ui:Elemento strutturale}} (i profili vengono dalla tabella dei profili).
2. Aprire {{ui:Viste}} › {{ui:Verifica questo telaio}}. Indicare dove poggia il telaio (un **appoggio** a ogni piede: cerniera, incastro o rullo; {{ui:Appoggi a cerniera ai piedi}} ne mette uno a ogni estremità più bassa di membro) e cosa vi sta sopra (**attrezzatura**: massa, baricentro, i punti dove è bullonata, e una spinta orizzontale facoltativa).
3. Scegliere la norma: **ASCE 7 + AISC 360-16** oppure **EN 1990 + EN 1993**. Impostare la classe dell'acciaio e, per AISC, la resistenza del metallo d'apporto (482.6 MPa è E70).
4. Premere {{ui:Verifica}}. {{ui:Salva il rapporto come CSV}} scrive ogni tabella, con la riga di non revisione per prima.

Il telaio è letto in millimetri con l'asse verticale del pezzo rivolto in alto. I punti di appoggio e di attrezzatura si digitano come x y z nello stesso riferimento, con z l'altezza.

Un'estremità di membro che cade sulla mezzeria di un altro membro lo divide in quel punto, come fa un piede o un punto di bullonatura sulla linea di un membro. Un peso è ripartito sui punti di bullonatura come corpo rigido; un baricentro fuori dai piedi, o una forza di sollevamento su un piede, viene segnalato, mai nascosto.

## Cosa si ottiene

- L'elemento più utilizzato e se qualcosa non regge. Gli elementi che la verifica non può giudicare (un profilo non presente in tabella, un acciaio senza coefficiente nella norma) sono contati e indicati per nome, mai contati come superati.
- Una riga per membro e per gruppo di saldature: quanto è utilizzato, la verifica e la clausola determinanti, e la combinazione di carichi determinante.
- Le stesse tabelle nel rapporto.

## Cosa viene verificato

Sezioni cave (RHS, SHS, CHS, tubo) e a doppio T per trazione, compressione, flessione, taglio e loro interazione; cordoni d'angolo e a piena penetrazione con il metodo vettoriale elastico. Pareti compatte a flessione solo per le sezioni cave; le pareti snelle sono indicate come non verificate. Alcune costanti sono state ricavate dalle norme e non ancora confrontate con una copia stampata; il rapporto elenca ogni fonte.

Vedi [Telai da profili in acciaio](topic:structural-members) per disegnare i membri e la loro distinta di taglio.
