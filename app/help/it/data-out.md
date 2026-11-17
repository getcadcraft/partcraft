---
title: Esportazione dati: scheda dati, campi e mesh
summary: Salvare la scheda dati di un corpo generato come JSON o PDF, il suo campo come immagine VTK (.vti) o come level set OpenVDB (.vdb) e la sua superficie come mesh VTK (.vtu) per ParaView e altri strumenti di analisi, e la mesh come 3MF con i dati del generatore. La stessa parte scrive sempre gli stessi file.
keywords: esportazione, scheda dati, json, pdf, vti, vtu, vtk, paraview, 3mf, campo, distanza con segno, fea, cfd, metadati, openvdb
from: 817b4579
---

Nell'area di lavoro {{ui:Ingegneria}}, oppure nelle proprietà di un corpo generato, aprire **Esportazione dati**:

| Pulsante | File | Per |
|---|---|---|
| Scheda dati (JSON) | `.json` | Ogni input, ogni numero con la sua unità e fonte, le verifiche, l'impronta della mesh. Ordinato, senza orari: la stessa parte dà lo stesso file. |
| Scheda dati (PDF) | `.pdf` | La stessa cosa su carta, su tutte le pagine che servono. |
| Campo (.vti) | `.vti` | La parte come distanza con segno (negativa all'interno) e una maschera interna su una griglia di punti: un file immagine VTK per ParaView e per gli strumenti basati su VTK. Viene costruito dalla superficie del corpo alla dimensione di voxel degli input del generatore, quindi richiede un momento, e un corpo oltre 400 000 triangoli è troppo grande per la pagina: salvare il campo da uno script (`field_bake`) invece. |
| Level set (.vdb) | `.vdb` | Lo stesso campo come level set OpenVDB: un albero sparso che conserva solo la fascia sottile di voxel attorno alla superficie, per gli strumenti che leggono OpenVDB (motori di rendering, simulazione e programmi 3D). Dimensione del voxel e unità sono quelle del generatore (millimetri), la fascia stretta è la parte attiva, l'interno è negativo. Costruito dalla superficie come il `.vti`, con lo stesso limite di 400 000 triangoli; un file che supererebbe 1.5 GB viene rifiutato (usare una dimensione di voxel maggiore). Il file è in formato OpenVDB 224, non compresso se non per il packing dei valori attivi di OpenVDB, quindi qualsiasi lettore OpenVDB lo apre. |
| Superficie (.vtu) | `.vtu` | I triangoli, con l'area e la normale di ciascuno. |
| 3MF con dati del generatore | `.3mf` | La mesh in millimetri per uno slicer, con il generatore, i suoi input e (per un reticolo graduato) il suo intervallo degli spessori di parete come metadati nel file. |

Nulla in questi file proviene dall'orologio o dalla macchina, quindi è possibile confrontare due file byte per byte: un byte cambiato significa una parte cambiata.

## Non ancora implementato

- Un `.vti` o `.vdb` del campo a una dimensione di voxel diversa da quella del generatore.
- La lettura di file `.vdb` (è implementata solo la scrittura).
