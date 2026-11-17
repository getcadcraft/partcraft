---
title: Equazioni in entrambe le direzioni
summary: Cambiare un parametro e la parte lo segue; digitare una nuova misura in una quota guidata e PartCraft calcola il parametro che la determina, chiedendo quale quando ne possono cambiare diversi.
keywords: equazioni, risolvi all'indietro, quota guidata, bidirezionale, inverso, ricerca dell'obiettivo, parametri, valori collegati, quale parametro
from: 82dc0269
---

Un'equazione come **Extrude1 profondità = thick + extra** funziona in entrambe le direzioni.

## In avanti: cambiare il parametro

Nella scheda {{ui:Parameters}}, cambiare `thick` da 20 a 30. La profondità di Extrude1 diventa 30 + extra, e la parte viene ricostruita.

## All'indietro: cambiare la quota guidata

1. Cliccare "Extrude1" nella cronologia. La sua casella **Profondità (mm)** mostra **ƒ**: un'equazione la guida.
2. Digitare la misura desiderata, per esempio `40`, e premere {{key:Enter}}.

PartCraft risolve per il parametro dietro l'equazione, attraverso tutti i passaggi necessari (`depth = hub_h`, `hub_h = disc_t + 50`: digitando un'altezza cambia `disc_t`). La barra di stato indica cosa è cambiato, per esempio che extra è passato da 5 a 15.

Quando due o più parametri guidano la quota, una finestra chiede **Quale parametro deve cambiare?** e li elenca. Cliccarne uno; gli altri mantengono i loro valori. {{ui:Cancel}} non cambia nulla.

Lo stesso vale in uno schizzo: fare doppio clic su una quota guidata, digitare un valore, premere {{key:Enter}}. Funziona anche nella colonna **Valore** della tabella dei parametri, per un parametro che è a sua volta un'espressione.

## Quando non è possibile

- Un numero che deve essere intero (il conteggio di una serie) o restare nell'intervallo (un angolo fino a 360°) viene rifiutato prima che cambi qualsiasi cosa.
- Un'equazione di soli numeri fissi (`=40`) non ha un parametro da modificare: il numero digitato la sostituisce.
- Se nessun valore del parametro dà la misura digitata, la barra di stato lo indica e nulla cambia.
- Uno schizzo che non può essere risolto con il nuovo valore mantiene i valori precedenti, e la barra di stato ne indica il nome.

Ogni modifica, in entrambi i sensi, è un solo passo per {{key:Mod+Z}} e {{key:Mod+Y}}.
