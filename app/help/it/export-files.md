---
title: Esportazione per la stampa, STEP e DXF
summary: Esporta la parte come STL o 3MF per la stampa 3D, come solido STEP esatto per altri programmi CAD e CAM, e uno schizzo o una faccia piana come DXF per il taglio laser e a getto d'acqua.
keywords: esporta, salva con nome, ifc, bim, set di proprietà, stl, 3mf, stampa 3d, slicer, step, stp, step esatto, b-rep, ap242, ap214, cam, officina meccanica, fresatura, dxf, laser, getto d'acqua, cnc, sviluppo piano, profilo, mesh, a facce
from: e1de71d5
---

Le esportazioni sono copie in altri formati. Conserva anche il file `.partcraft.json`: è l'unico file che PartCraft può riaprire e modificare.

Tutte le esportazioni riguardano la parte visualizzata, in millimetri. In un assieme, STL, 3MF, STEP e Disegno (PDF) esportano invece l'intero assieme: vedi [Elenco delle parti, viste esplose e parti mobili](topic:assembly-bom-explode). Se non esiste ancora alcun solido: "Non c'è ancora alcun solido da esportare."

## Per la stampa 3D: STL o 3MF

1. Facoltativo: per superfici tonde lisce, clicca in uno spazio vuoto in modo che nulla sia selezionato e imposta **Curve** su **Fine (128 per giro)** o **Molto fine (256 per giro)** nel pannello destro. STL e 3MF sono sempre formati da triangoli.
2. Scegliere {{ui:Esporta}}, poi {{ui:STL, per la stampa 3D}} o {{ui:3MF, per la stampa 3D}}.
3. Il file viene scaricato. La barra di stato indica, per esempio, "Esportato Part1.stl (binario, mm, Z in alto, 1536 triangoli)."

Entrambi i formati sono **Z in alto**, come si aspettano stampanti e slicer. Il sistema di PartCraft è Y in alto, quindi l'esportazione ruota la parte: ciò che punta verso l'alto in PartCraft (perpendicolare al piano Superiore) punta verso l'alto nello slicer, e una parte disegnata sul piano Superiore giace piatta sul piano di stampa. Se necessario, imposta l'orientamento finale nello slicer.

3MF è un formato più recente e più compatto, che gli slicer leggono con le unità incluse. Se un programma non accetta 3MF, usare STL.

Per verificare prima che la parte sia chiusa, che entri nel piano di stampa della stampante e che poggi su una faccia piana, scegliere {{ui:Esporta}} › {{ui:Verifica per la stampa 3D (STL o 3MF)…}}: vedi [Preparare una parte per la stampa 3D](topic:print-3d).

## Per altri programmi CAD: STEP

Scegliere {{ui:Esporta}}, poi {{ui:STEP AP242 (solido esatto)}}. Scrive la parte come un unico solido esatto, in millimetri, ruotato con Z in alto. Le facce tonde vengono scritte come veri cilindri, coni, sfere e tori, con cerchi veri per i loro spigoli, così l'altro programma può riconoscere un foro come foro. Un corpo aperto da un file STEP mantiene le facce piane, i cilindri, i coni, le sfere e i tori di quel file, quindi anche questi vengono esportati esatti. Le facce senza una superficie di questo tipo (il lato di una spline, una filettatura modellata, un corpo da una mesh STL, OBJ o 3MF, la spline di un file STEP, le facce ottenute per sweep e rivoluzione) restano sfaccettature piane nello stesso solido, e la barra di stato indica quante sono. La barra di stato indica, per esempio, "Esportato Flange.step (AP242, solido esatto, mm, Z in alto): 14 facce sulle loro superfici vere (10 cilindriche, 1 conica, 0 sferiche, 0 toroidali), 0 curve di spigolo adattate." Contiene solo il solido: nessuna cronologia, nessuno schizzo, nessun disegno. Se l'altro programma legge solo AP214, scegliere {{ui:STEP AP214 (solido esatto)}}: lo stesso solido in quello schema più vecchio.

Che cosa è esatto e che cosa no:

- Piani, cilindri (fori, sporgenze, raccordi su spigoli rettilinei), coni (svasature, conicità), sfere e tori sono esatti, così come i loro spigoli rettilinei, circolari ed ellittici. L'impostazione **Curve** non li modifica.
- Dove due facce tonde si intersecano (un foro praticato attraverso un albero), lo spigolo è una curva liscia adattata a entrambe le superfici entro 0.00001 mm; "curve di spigolo adattate" le conta.
- Una cavità chiusa all'interno della parte viene scritta come vuoto del solido. Più corpi separati vengono scritti come più solidi.
- Un assieme non viene ancora scritto come STEP esatto: esporta ogni parte.

È stato verificato rileggendo i file in OpenCascade, che riporta solidi validi con i volumi calcolati a mano. Non è ancora stato aperto in tutti i programmi CAD o CAM. Se uno rifiuta un file, {{ui:STEP (a facce, kernel a mesh)}} scrive la stessa forma come facce piane (negli assi propri di PartCraft, Y in alto): segnalalo tramite {{ui:Guida}} › {{ui:Segnala un problema}}.

Per la lavorazione, anche lo spazio di lavoro Produzione scrive il solido esatto nelle coordinate di lavoro dell'impostazione: vedi [Creare percorsi utensile e G-code](topic:manufacture#exact-step-for-the-shop).

## Per programmi BIM: IFC con tutte le proprietà

Scegliere {{ui:Esporta}}, poi {{ui:IFC 4 (con tutte le proprietà)}}. Scrive la parte come elemento IFC 4 per modelli di edifici e impianti, con la sua forma come triangoli (Z in alto, millimetri), e con quanto PartCraft sa su di essa come set di proprietà:

| Set di proprietà | Contiene |
|---|---|
| **PartCraft_Part** | Nome, materiale e relativa densità, la configurazione attiva, quanti corpi; in un assieme anche il numero di parte e la descrizione |
| **PartCraft_Parameters** | Ogni parametro della parte con il suo valore; l'espressione di una formula e una nota sono nella descrizione della proprietà |
| **PartCraft_TitleBlock** | I campi del cartiglio del disegno compilati (titolo, numero del disegno, revisione, società, disegnato, controllato e approvato da, data, finitura, tolleranza generale) e il formato del foglio |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volume, area superficiale, massa (con un materiale) e dimensioni complessive |

Il materiale viene allegato come materiale IFC, e il numero del disegno è il tag dell'elemento. In un assieme, ogni parte viene scritta una volta come tipo che contiene le sue proprietà, e ogni copia è posizionata dove la mette l'assieme, con i propri valori in **PartCraft_Instance**: il suo nome, il numero della voce nella distinta base e se è la parte fissa a terra.

## Per profili per laser, getto d'acqua o CNC: DXF

Due tipi di DXF, entrambi versione R12, che ogni programma CAD e CAM apre:

### Uno schizzo

1. Seleziona lo schizzo nella cronologia (o tienilo aperto).
2. Scegliere {{ui:Esporta}}, poi {{ui:DXF dello schizzo o della faccia piana}}. (Il pannello destro dello schizzo ha anche {{ui:Esporta come DXF}}.)

Si ottiene `<part> - <sketch>.dxf` nelle coordinate proprie dello schizzo: linee, archi e cerchi veri sul layer **PROFILE**, la geometria di costruzione su **CONSTRUCTION**, i punti isolati su **POINTS**.

### Una faccia piana del solido

1. Clicca una faccia piana nella vista (per esempio la parte superiore di una piastra con fori).
2. Scegliere {{ui:Esporta faccia come DXF}} nel pannello destro, oppure {{ui:Esporta}}, poi {{ui:DXF dello schizzo o della faccia piana}}.

Si ottiene `<part> - face.dxf`: il contorno della faccia e ogni foro al suo interno. Un foro tondo (un intero cerchio dove un cilindro incontra la faccia: un foro praticato, o un foro di un file STEP aperto) viene scritto come cerchio vero con il centro e il raggio propri del foro. Ogni altro contorno è una polilinea chiusa, e i suoi spigoli tondi (angoli di raccordo, asole, archi) sono le loro sfaccettature: imposta quindi prima **Curve** su Fine se la fresa li segue da vicino. La barra di stato indica quanti contorni ci sono, quanti sono cerchi veri e l'area della faccia.

Se non sono selezionati né uno schizzo né una faccia piana: "Apri o seleziona uno schizzo, oppure scegli una faccia piana, per esportare il DXF."

## Un disegno

La procedura del disegno PDF è descritta a parte: [Creare un foglio di disegno](topic:drawing-pdf).

## Formati non disponibili

glTF, OBJ, IGES e Parasolid non sono esportati in questa versione. DWG viene scritto solo dal pacchetto di varianti, come foglio di disegno: vedi [Creare un pacchetto di varianti dalle configurazioni](topic:variant-pack). Vedi [Formati di file](topic:file-formats).
