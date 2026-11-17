---
title: Rivoluzionare un pezzo tornito
summary: Disegnare metà profilo accanto a una linea di mezzeria, rivoluzionarlo in un pezzo tondo, scegliere asse e angolo, e usare un taglio di rivoluzione per le scanalature.
keywords: rivoluzione, sporgenza di rivoluzione, taglio di rivoluzione, pezzo tornito, tornio, albero, asse, linea di mezzeria, scanalatura, angolo, rev cut
from: 593b6929
---

{{ui:Rivoluzione}} fa ruotare un profilo attorno a un asse, come un pezzo fatto al tornio: alberi, pulegge, flange, manopole. **Taglio di rivoluzione** (nel menu {{ui:Altro}} del gruppo Funzioni) fa ruotare un profilo per rimuovere materiale, per scanalature e incavi.

## Rivoluzionare un albero a gradini

1. Creare uno schizzo sul **piano Anteriore**.
2. Premere {{key:N}} per {{ui:Linea di mezzeria}}. Partire dall'origine e fare clic su un punto dritto a destra, per esempio a 100 mm. Questo è l'asse. È tratteggiato: la geometria di costruzione non fa parte del profilo.
3. Premere {{key:L}} per Linea. Disegnare **la metà** del profilo sopra la linea di mezzeria come un unico ciclo chiuso: partire dalla linea di mezzeria, salire, fare un gradino, scendere di nuovo alla linea di mezzeria, poi seguirla fino al punto di partenza. Le estremità devono coincidere: il ciclo deve essere chiuso.
4. Quotare i raggi (altezze sopra la linea di mezzeria) e le lunghezze. Un'altezza di 10 sopra la linea di mezzeria dà un diametro di 20.
5. Scegliere {{ui:Esci}}.
6. Scegliere {{ui:Rivoluzione}}. Compare l'albero, con un giro completo.

Il profilo deve restare da un lato dell'asse. Se lo attraversa: "Il profilo attraversa l'asse. Mantenerlo da un lato della linea di mezzeria." Uno spigolo del profilo può giacere sull'asse.

## Impostazioni

| Impostazione | Cosa fa | Predefinito |
|---|---|---|
| **Operazione** | Sporgenza (aggiunge materiale), Taglio (rimuove materiale), Interseca (mantiene la sovrapposizione) o Nuovo corpo | Sporgenza per {{ui:Rivoluzione}}, Taglio per {{ui:Altro}} › {{ui:Taglio di rivoluzione}} |
| **Angolo (°)** | Di quanto ruotare, da poco più di 0 fino a 360 | 360 |
| **Asse** | La prima linea di mezzeria, oppure una qualunque linea o linea di mezzeria dello schizzo, elencata come "Linea di mezzeria 1 (l1)" o "Linea 3 (l3)" | Prima linea di mezzeria |

Un angolo parziale crea un settore, ruotato dal piano dello schizzo in un verso.

Se lo schizzo non ha una linea di mezzeria e **Asse** resta su Prima linea di mezzeria: "Disegnare una linea di mezzeria (una linea di costruzione) nello schizzo attorno a cui rivoluzionare." Si può anche scegliere come asse una linea piena del profilo.

## Tagliare una scanalatura

1. Con l'albero costruito, aprire un nuovo schizzo sul **piano Anteriore** (lo stesso piano dello schizzo dell'albero).
2. Disegnare una linea di mezzeria sullo stesso asse: partire dall'origine e tenerla orizzontale in modo che riceva una H, oppure digitarla con **Aggiungi per coordinate** (per esempio da `0, 0` a `100, 0`). Un nuovo schizzo non può agganciarsi alle linee di un altro schizzo.
3. Disegnare un piccolo rettangolo chiuso che si sovrappone allo spigolo dell'albero dove va la scanalatura.
4. Scegliere {{ui:Esci}}, poi {{ui:Altro}} › {{ui:Taglio di rivoluzione}}.

## Facce di rivoluzione negli assiemi

Una rivoluzione ha un asse che altre funzioni e gli assiemi possono usare:

- una serie **Circolare** usa per impostazione predefinita l'asse dell'ultima rivoluzione (vedi [Funzioni di serie e di specchio](topic:patterns-mirror));
- in un assieme, un giunto tra facce create da rivoluzioni parte come giunto **rotoidale**, e **Centra su** offre "Asse di Revolve1" (vedi [Creare un assieme](topic:build-assembly)).

## Curve vere e facce sfaccettate

PartCraft crea una rivoluzione con il kernel mesh (l'etichetta della barra di stato dice "Kernel mesh"): le forme tonde sono facce piatte sfaccettate, 64 per giro per impostazione predefinita, e i volumi sono un po' inferiori al valore vero (circa lo 0.16 % a 64). La vista e le esportazioni STL, 3MF e STEP sono fatte di queste sfaccettature: impostare **Curve** (fare clic su uno spazio vuoto, poi nel pannello destro) su Fine (128) o Molto fine (256) per averne di più lisce. Cilindri, coni e tori veri richiedono un kernel esatto: non ancora implementati in questa versione. Vedere [Il kernel mesh](topic:solid-kernels).
