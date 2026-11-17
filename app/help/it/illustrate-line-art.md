---
title: Illustrazioni tecniche: disegni al tratto, immagini e tavole
summary: Esporta qualsiasi vista come disegno vettoriale al tratto (SVG o PDF) con tre spessori di linea, linee nascoste tratteggiate o omesse, facce di taglio tratteggiate e riempimenti facoltativi, oppure come PNG; metti più viste su una tavola.
keywords: illustrate, disegno al tratto, illustrazione tecnica, svg, pdf, png, linee nascoste, sagoma, tratteggio, tavola, esporta
from: 0e9bea63
---

{{ui:Export}} nel gruppo {{ui:Out}} apre la finestra di esportazione:

- {{ui:What}}: la scena com'è ora, una vista, oppure tutte le viste.
- {{ui:As}}: **PDF** o **SVG** (disegno vettoriale al tratto; entrambi sono scritti dallo stesso disegno), **PNG del disegno al tratto** oppure **immagine PNG della vista 3D** (fino a 4096 pixel di larghezza), e il [file 3D interattivo](topic:illustrate-interactive).
- {{ui:Pages}}: una vista per pagina, oppure tutte le viste su una tavola con il loro nome sotto. {{ui:Paper}}: A4, A3, Letter o Tabloid.
- {{ui:Hidden lines}}: tratteggiate o omesse. {{ui:Fills}}: come appare la vista, nessuno, colori piatti o ombreggiatura. {{ui:Also draw soft edges}} aggiunge linee di dettaglio.

Il disegno al tratto ha tre spessori: contorni (sagome e bordi aperti, e contorni dei tagli), spigoli vivi e linee di dettaglio. Le facce di taglio di una sezione o di uno {{ui:Box cut-away}} sono tratteggiate. Le viste esplose ricevono scie a linea a catena dal punto in cui si trova ciascuna parte; vengono disegnati anche i pallini, le annotazioni, la {{ui:Parts list}} e la {{ui:Magnifier}}.

Il disegno al tratto è calcolato dalle forme delle parti con il metodo a mesh (lo stesso che usa il foglio di disegno di PartCraft senza il kernel esatto), quindi le facce curve sono disegnate per sfaccettature, come il modello le contiene.

## Non ancora implementato

- Le immagini con la qualità del path tracer (il renderer di ModelCraft) non sono ancora disponibili qui; le immagini PNG hanno l'aspetto proprio della vista 3D.
