---
title: Avviare un manuale in Illustrate
summary: L'area di lavoro Illustrate crea manuali dal progetto: viste, disegni al tratto esplosi con pallini e distinta dei componenti, istruzioni passo passo, animazioni e un file 3D che un cliente può aprire senza CAD. Un manuale è un file a sé stante.
keywords: illustrate, manuale, illustrazione tecnica, documentazione, vista esplosa, distinta dei componenti, istruzioni, partcraft-manual
from: e447e0ab
---

**Illustrate** è l'area di lavoro per i documenti che servono attorno a un progetto: viste esplose con pallini e distinta dei componenti, disegni al tratto per i manuali, istruzioni passo passo, animazioni e un file 3D che un cliente può aprire senza CAD. Scegliere {{ui:Illustrate}} nel selettore {{ui:Workspace}} all'inizio della barra degli strumenti.

Un **manuale** è un file a sé stante (`<name>.partcraft-manual.json`). Conserva una copia della forma di ogni parte, l'albero del prodotto e le proprietà delle parti, e un collegamento alla loro origine, così è possibile lavorare sul manuale mentre il progetto prosegue. Quando il progetto cambia, [Aggiorna dal progetto](topic:illustrate-update) importa le modifiche.

## Avviarne uno

Fare clic su {{ui:New}} nel gruppo {{ui:Manual}}, poi:

- {{ui:From the open part}}: la parte aperta in Progettazione.
- {{ui:From the open assembly}}: compare invece quando è aperto un assieme; con esso vengono importate le sue parti, le loro posizioni, i numeri di parte, i materiali e le viste esplose.
- {{ui:From an assembly file…}}: un file `.partcraft-asm.json` salvato; PartCraft costruisce prima le sue parti.
- {{ui:From another file…}}: glTF (.glb, .gltf), OBJ, STL o 3MF. L'albero e i nomi del file di origine vengono conservati, e le copie di una stessa parte (la stessa forma posizionata due volte) diventano una sola parte con una quantità. I file STL e OBJ non indicano la loro unità, quindi viene chiesta. I file STL vengono letti con Z verso l'alto; glTF e 3MF dichiarano la propria.

Mentre un manuale è aperto, Illustrate mostra la copia propria del manuale delle parti; la parte o l'assieme aperto in Progettazione resta nascosto finché non si torna a Progettazione.

## Salvare e aprire

{{ui:Save}} nel gruppo {{ui:Manual}} (o {{key:Mod+S}}) salva il manuale; {{ui:Open}} ne apre uno. Ogni modifica in Illustrate è un passo della cronologia propria del manuale: {{ui:Undo}} e {{ui:Redo}} agiscono sul manuale mentre Illustrate è aperto.

## Non ancora implementato

- I file STEP non si aprono ancora con {{ui:From another file…}}. Aprire lo STEP in Progettazione (viene importato come corpo solido: vedi [Aprire un file STEP](topic:import-step)) e avviare il manuale con {{ui:From the open part}}, oppure salvarlo come glTF, 3MF, OBJ o STL.
- ModelCraft e BimCraft non possono ancora passare direttamente un modello a Illustrate: salvarlo come glTF (.glb) e usare {{ui:From another file…}}.

Avanti: [Viste e aspetto](topic:illustrate-views).
