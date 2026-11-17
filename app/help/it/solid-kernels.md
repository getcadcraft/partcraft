---
title: Il kernel a mesh
summary: Questa versione di PartCraft costruisce ogni pezzo con un kernel a mesh che funziona nel browser. Che cosa significa per le forme arrotondate, i volumi e i file, come capire che sta funzionando e quali feature attendono un kernel esatto.
keywords: kernel, mesh, manifold, esatto, b-rep, a facce, curve, opencascade, occt, raccordo richiede esatto, non ancora implementato, offline, webassembly
from: f931645c
---

Un kernel geometrico è il motore che trasforma la cronologia in un solido. Questa versione di PartCraft ne ha uno: il **kernel a mesh** (manifold-3d). Funziona sul computer come un piccolo programma WebAssembly ed è pronto poco dopo l'apertura dell'app. Nulla del pezzo viene inviato da nessuna parte.

| | Kernel a mesh |
|---|---|
| Forme arrotondate | Facce piane. Le **curve** nel pannello del pezzo definiscono quanto sono fini |
| Volumi e aree | Del solido a facce, leggermente inferiori sulle parti arrotondate |
| Schizzi, estrusione, taglio, rivoluzione, fori, serie, specchio, piani di riferimento | Sì |
| Raccordo e smusso | Su spigoli rettilinei tra facce piane; i raccordi che si incontrano vengono smussati a 45° |
| Svuota e sformo | Svuota apre le facce piane (spessore di parete esatto); Sformo inclina le facce piane |
| Esportazioni | STL, 3MF, STEP (esatto: le facce arrotondate sono scritte sulle loro superfici vere; oppure a facce), PDF e DXF del disegno |
| Viste del disegno | Ricavate dalle facce, comprese le viste in sezione |
| Facce e spigoli | Denominati e riconosciuti per tipo (piano, cilindro, cono, sfera, toro; retto, circolo), ricavati dagli schizzi: gli ambienti Simulazione, Generativo e Produzione, Misura, la selezione e la tabella dei fori li usano |

Il riquadro vicino all'estremità destra della barra di stato indica **Kernel a mesh** mentre costruisce il pezzo.

## Che cosa attende un kernel esatto

Un kernel esatto (B-rep) mantiene cerchi, cilindri e coni veri, e raccordi lisci su qualsiasi spigolo; sweep, loft, superfici, lamiera, nervature, più corpi e l'importazione STEP con facce curve mantenute esatte sono costruiti su di esso. (L'esportazione STEP esatta non attende questo kernel: il kernel a mesh conosce la superficie vera di ogni faccia dallo schizzo, e l'esportazione la scrive.) Le precedenti versioni di laboratorio di PartCraft usavano OpenCascade per questo. La sua licenza (LGPL) non si adatta a questa versione, in cui ogni app è Apache-2.0 e usa solo librerie con licenza permissiva, quindi non è inclusa. Per nulla qui è fissata una data.

Fino ad allora, queste feature indicano **Non ancora implementato** quando le si sceglie: la barra di stato ne spiega il motivo, e le descrizioni comandi dei pulsanti terminano con "non ancora implementato (richiede un kernel esatto)". [Cosa non è ancora implementato](topic:not-built-yet) elenca ciascuna con cosa fare al suo posto.

Un pezzo realizzato con queste feature in una versione precedente si apre comunque. Tali feature restano nella cronologia contrassegnate come non implementate (passando sopra una di esse si vede il motivo), il resto del pezzo viene costruito e il salvataggio le mantiene invariate.

## Facce arrotondate e Curve

Il kernel a mesh disegna un cerchio come un poligono. **Curve** nel pannello del pezzo imposta quanti lati ha un cerchio completo: più lati lo rendono più liscio e lo avvicinano al valore reale, ma richiedono più tempo di costruzione. Volumi, aree e distanze da {{ui:Misura}} sono quelli del solido a facce: per un foro o una sporgenza sono un po' più piccoli rispetto alla forma arrotondata.

## Online e offline

Il kernel a mesh fa parte del download stesso dell'app. Per lavorare senza connessione, salvare PartCraft per l'uso offline mentre si è online: scegliere {{ui:Salva per l'uso offline}} nella barra dell'app e attendere che indichi **Pronto per l'uso offline**. Dettagli: [Lavorare offline](common:offline).
