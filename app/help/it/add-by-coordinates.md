---
title: Aggiungere geometria allo schizzo digitando le coordinate
summary: Usare Aggiungi per coordinate nel pannello dello schizzo per posizionare linee, linee di mezzeria, rettangoli, cerchi e punti in posizioni esatte, solo con la tastiera.
keywords: coordinate, input digitato, inserimento da tastiera, inserimento numerico, posizione esatta, x y, coordinate assolute, accessibilità, senza mouse
from: 5e6c1656
---

Quando si conoscono i numeri, digitarli è più veloce che fare clic e quotare. **Aggiungi per coordinate** si trova nel pannello di destra ogni volta che è aperto uno schizzo. Permette anche di costruire uno schizzo senza usare alcun puntatore.

Le coordinate sono in millimetri, negli assi propri dello schizzo: x verso destra e y verso l'alto guardando lo schizzo, con (0, 0) nell'origine (il cerchio rosso con una croce).

## Aggiungere una forma

1. Aprire uno schizzo (vedi [Disegnare il primo schizzo](topic:sketch-basics)).
2. Nel pannello di destra, scorrere fino a **Aggiungi per coordinate**.
3. Scegliere la forma in **Aggiungi**: Linea, Linea di mezzeria, Rettangolo, Cerchio o Punto.
4. Compilare i campi:

| Forma | Campi |
|---|---|
| Linea | **Da x, y** e **A x, y** |
| Linea di mezzeria | **Da x, y** e **A x, y** |
| Rettangolo | **Angolo x, y** e **Angolo opposto x, y** |
| Cerchio | **Centro x, y** e **Raggio** |
| Punto | **In x, y** |

5. Scegliere {{ui:Aggiungi}}, oppure premere {{key:Enter}} in un campo qualsiasi.

La forma compare e la barra di stato indica, per esempio, "Aggiunto un rettangolo." I campi si svuotano, pronti per il successivo. Ogni aggiunta è un passo di annullamento.

Digitare una coppia come due numeri separati da una virgola o da uno spazio: `0, 0`, `25 -10` o `12.5,40`. Sono ammessi numeri negativi e decimali. Il raggio deve essere maggiore di zero. Se un valore non è un numero, la barra di stato indica: 'Digitare le coordinate come "x, y" e un raggio maggiore di zero.'

## Esempio: contorno di una piastra con asola, digitato

1. Aprire uno schizzo sul **piano Anteriore**.
2. **Aggiungi**: Rettangolo. **Angolo x, y**: `-50, -30`. **Angolo opposto x, y**: `50, 30`. {{key:Enter}}.
3. **Aggiungi**: Cerchio. **Centro x, y**: `-30, 0`. **Raggio**: `5`. {{key:Enter}}.
4. **Centro x, y**: `30, 0`. **Raggio**: `5`. {{key:Enter}}.
5. Scegliere {{ui:Esci dallo schizzo}}, poi {{ui:Estrudi}}: una piastra 100 × 60 con due fori da 10 mm.

## La geometria digitata è posizionata, ma non vincolata

Le coordinate digitate posizionano la geometria nel punto giusto, ma **non sono relazioni**. Le forme restano blu (sottodefinite) e possono muoversi se le si trascina o se si cambia un'altra quota:

- un rettangolo digitato ha i propri vincoli d'angolo, orizzontali e verticali, come uno disegnato, ma nulla lo collega all'origine;
- una linea digitata non ha relazione orizzontale o verticale, anche se è stata digitata una linea orizzontale;
- il centro di un cerchio digitato è libero.

Per definire completamente lo schizzo, aggiungere quote e relazioni in seguito (vedi [Definire completamente uno schizzo](topic:relations-dimensions)). Per esempio, selezionare un angolo del rettangolo e l'origine e scegliere {{ui:• Coincidente}}, oppure quotare i centri dei cerchi dall'origine.

:::note
Senza puntatore si arriva fin qui: spostarsi su una riga di piano nella cronologia con {{key:Tab}} e i tasti freccia, premere {{key:Enter}} per selezionarla, premere {{key:S}} per lo schizzo, aggiungere le forme qui, e raggiungere **Modifica** accanto a ogni quota e {{ui:Esci dallo schizzo}} con {{key:Tab}}. Selezionare la geometria, e quindi aggiungere relazioni o nuove quote, richiede ancora un clic o un tocco in questa versione.
:::

## Limiti

- Gli archi non si possono ancora digitare. Disegnarli con lo strumento Arco, oppure digitare un cerchio e usare le relazioni.
- In questo campo non ci sono coordinate relative (dall'ultimo punto) né polari (lunghezza e angolo).
- La geometria digitata non si aggancia ai punti esistenti. Digitare le stesse coordinate di un punto esistente, poi aggiungere una relazione {{ui:• Coincidente}} tra i due se devono restare uniti.
