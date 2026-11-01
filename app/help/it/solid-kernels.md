---
title: Il kernel a mesh
summary: Questa versione di PartCraft costruisce ogni parte con un kernel a mesh che funziona nel browser. Che cosa significa per facce tonde, volumi e file, come capire che funziona e quali feature attendono un kernel esatto.
keywords: kernel, mesh, manifold, esatto, b-rep, sfaccettato, curve, opencascade, occt, il raccordo richiede il kernel esatto, non implementato, offline, webassembly
from: 68d32d16
---

Un kernel geometrico è il motore che trasforma la cronologia in un solido. Questa versione di PartCraft ne ha uno: il **kernel a mesh** (manifold-3d). Funziona sul computer come piccolo programma WebAssembly ed è pronto pochi istanti dopo l'apertura dell'app. Nulla della parte viene inviato altrove.

| | Kernel a mesh |
|---|---|
| Forme tonde | Sfaccettature piane. **Curve** nel pannello della parte ne imposta la finezza |
| Volumi e aree | Del solido sfaccettato, un po' bassi sulle parti tonde |
| Schizzi, estrusione, taglio, rivoluzione, fori, serie, specchio, piani di riferimento | Sì |
| Raccordo e smusso | Su spigoli rettilinei tra facce piane; i raccordi che si incontrano sono a mitra |
| Svuotamento e sformo | Lo svuotamento apre le facce piane (spessore di parete esatto); lo sformo inclina le facce piane |
| Esportazioni | STL, 3MF, STEP (sfaccettato), PDF e DXF del disegno |
| Viste del disegno | Disegnate dalle sfaccettature, comprese le viste in sezione |
| Facce e spigoli | Con nome e tipo noto (piana, cilindro, cono, sfera, toro; rettilineo, cerchio), ricavati dagli schizzi: li usano le aree di lavoro Simulazione, Generativa e Produzione, Misura, la selezione e la tabella dei fori |

Il chip vicino all'estremità destra della barra di stato indica **Nucleo a mesh** mentre costruisce la parte.

## Che cosa attende un kernel esatto

Un kernel esatto (B-rep) conserva cerchi, cilindri e coni veri e raccordi lisci su qualsiasi spigolo; su di esso si basano sweep, loft, superfici, lamiera, nervature, più corpi, importazione STEP ed esportazione STEP esatta. Le prime versioni di laboratorio di PartCraft usavano OpenCascade per questo. La sua licenza (LGPL) non è compatibile con questo rilascio, in cui ogni app è Apache-2.0 e usa solo librerie con licenza permissiva, quindi non è inclusa. Per ora nulla di tutto ciò ha una data.

Fino ad allora queste feature indicano **Non ancora implementato** quando le si sceglie: la barra di stato ne dà il motivo e le descrizioni dei loro pulsanti finiscono con "non ancora implementato (richiede un kernel esatto)". [Che cosa non è ancora implementato](topic:not-built-yet) le elenca una per una con l'alternativa da usare.

Una parte creata con esse in una versione precedente si apre comunque. Quelle feature restano nella cronologia contrassegnate come non implementate (passare il puntatore su una per vederne il motivo), il resto della parte si costruisce e il salvataggio le conserva invariate.

## Facce tonde e Curve

Il kernel a mesh disegna un cerchio come un poligono. **Curve** nel pannello della parte imposta quanti lati ha un cerchio completo; più lati danno un aspetto più liscio e misure più vicine al valore vero, ma richiedono più tempo per la costruzione. Volumi, aree e distanze di {{ui:Misura}} si riferiscono a questo solido sfaccettato: per un foro o una sporgenza sono un po' più piccoli di quelli della forma tonda.

## Online e offline

Il kernel a mesh fa parte del download dell'app. Per lavorare senza connessione, salvare PartCraft per l'uso offline mentre si è online: scegliere {{ui:Salva per l'uso offline}} nella barra dell'app e attendere che indichi **Pronto per l'uso offline**. Dettagli: [Lavorare offline](common:offline).
