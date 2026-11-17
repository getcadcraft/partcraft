---
title: Aprire un modello .3dm come corpo solido
summary: Portare mesh, polisuperfici e blocchi di un file .3dm in PartCraft come un unico corpo solido su cui tagliare, aggiungere e disegnare; da dove provengono i triangoli e cosa viene escluso.
keywords: 3dm, nurbs, polisuperficie, brep, superfici, mesh di resa, estrusione, blocchi, importazione, mesh in solido, unità, corpo importato
from: 8ae9571b
---

PartCraft apre i file `.3dm` come **corpi solidi**, nello stesso modo in cui apre una [mesh STL, OBJ o 3MF](topic:open-meshes). Il corpo funziona come ogni altro solido: tagliarlo, aggiungervi materiale, forarlo, creare serie e disegnare sulle sue facce piane. Non ha una cronologia propria.

## Aprire il file

1. Scegliere {{ui:Apri}} oppure premere {{key:Mod+O}}, e selezionare il file `.3dm`. Oppure trascinarlo nella vista 3D.
2. PartCraft lo legge e mostra cosa ha trovato: quanti oggetti con facce entrano, quante facce provengono dalle mesh salvate nel file e quante PartCraft ne ha tessellate, ogni riparazione, e se il risultato **si chiude**.
3. Controllare **Unità nel file** (il file dichiara le proprie; un'unità che PartCraft non elenca, come le yard, viene convertita in millimetri) e **Asse verticale nel file**.
4. Scegliere {{ui:Apri come corpo}}, oppure **Usalo per** e {{ui:Aggiungi a questa parte}} quando la parte ha già feature.

## Da dove provengono i triangoli

In questa versione PartCraft costruisce i corpi a partire da triangoli, quindi ogni superficie del file diventa piccole facce piane. Per ogni faccia di una polisuperficie (e per ogni estrusione) prende la **mesh di resa salvata nel file** quando c'è, altrimenti la **tessella da sé** (piani, superfici NURBS, superfici di rivoluzione, curve estruse ed estrusioni, rifilate dai loro spigoli). Le facce di una polisuperficie condividono i punti dei loro spigoli, quindi una polisuperficie chiusa entra chiusa. Una faccia su un tipo di superficie che PartCraft non legge ancora viene esclusa, e la finestra indica quante e di quale tipo; il risultato di solito non si chiude.

## Tutto il file diventa un unico corpo

Ogni mesh, polisuperficie ed estrusione visibile, e ogni posizionamento di un blocco, entra in **un unico** corpo nel punto in cui il file lo colloca. Gli oggetti nascosti, o su un layer spento, vengono esclusi. Quando il file contiene più solidi separati, il corpo ha più pezzi: per averli come corpi separati, aprire ciascuno dal proprio file.

## Cosa viene escluso (e segnalato)

Curve, punti, nuvole di punti, testo, quote, tratteggi e luci vengono esclusi: un corpo prende solo facce. Sono esclusi anche gli oggetti SubD (convertirli in mesh o polisuperfici nel programma che ha creato il file, prima), i blocchi collegati da altri file, e i colori, i layer e i nomi (i corpi di PartCraft non ne hanno di propri).

## Quando non si chiude

Le polisuperfici aperte e le superfici (una singola superficie rifilata, una forma con una faccia mancante) non hanno un interno, quindi non possono essere un solido. La finestra indica quante aperture restano e non aggiunge nulla. Unire o chiudere la forma nel programma che l'ha creata, salvare e riaprire. Vedi [Quando una mesh non si chiude](topic:open-meshes#when-a-mesh-does-not-close).
