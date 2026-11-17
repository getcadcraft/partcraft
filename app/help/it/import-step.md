---
title: Aprire un file STEP e costruirci sopra
summary: Porta in PartCraft un modello STEP di un fornitore o di un altro programma CAD come corpo solido, come nuova parte o aggiunto a quella corrente, imposta quale direzione è verso l'alto e aggiungi schizzi e feature.
keywords: step, stp, importa, apri step, ap203, ap214, ap242, modello del fornitore, solido non parametrico, solido importato, asse verso l'alto, z verso l'alto, y verso l'alto, triangoli, sfaccettato, step di assieme
from: ca0eca5f
---

PartCraft apre i file STEP (`.step` o `.stp`, AP203, AP214 e AP242) come **corpi solidi** su cui è possibile disegnare schizzi, tagliare, forare e combinare con le proprie feature. Il corpo non ha una cronologia propria: non è possibile modificare le dimensioni con cui è stato creato, ma solo aggiungere materiale o tagliare.

Questa versione costruisce ogni parte con il kernel a mesh, quindi un file STEP è **letto come triangoli**: le facce piane restano piane, mentre le facce curve (cilindri, coni, sfere, tori, superfici B-spline) diventano molte piccole facce piane. Il suo volume è entro una frazione percentuale di quello esatto. Mantenere esatte le facce curve richiede un kernel esatto, che non è presente in questa versione.

## Aprire un file STEP

1. Scegliere {{ui:Open}} o premere {{key:Mod+O}}, e selezionare il file `.step` o `.stp`. Oppure trascinarlo sulla vista 3D.
2. PartCraft legge il file e mostra cosa ha trovato, per esempio: "File AP214: 1 solido, 10 facce, letto come triangoli." Sotto compaiono il numero di triangoli, eventuali elementi omessi o uniti, e se il risultato si chiude.
3. Controllare **Verso l'alto nel file**. Un file STEP dichiara la propria unità (millimetri, pollici, metri…); PartCraft la converte in millimetri, quindi **Unità nel file** mostra Millimetri (dichiarato dal file). **Dimensioni qui** mostra quanto sarà grande.
4. Scegliere {{ui:Open as a body}} per una parte vuota, oppure {{ui:Add to this part}} / {{ui:New part}} quando la parte ha già delle feature. Aggiungendo, viene chiesto cosa **Usa per** fare: aggiungere, tagliare o mantenere solo la sovrapposizione.

Nella cronologia compare una feature **Imported1**, e la barra di stato indica, per esempio, "plate.step è un corpo solido: 57995.937 mm³, 6 facce piane su cui disegnare."

## Uno STEP di assieme

Un assieme viene importato come **un solo corpo**, con ogni parte nella posizione indicata dal file ("3 parti posizionate nel file vengono importate dove si trovano"). Una parte usata due volte viene importata due volte. I nomi delle parti e l'albero dell'assieme non vengono conservati.

## Impostare quale direzione è verso l'alto

La maggior parte dei programmi CAD usa Z verso l'alto; PartCraft usa Y verso l'alto. Per impostazione predefinita PartCraft ruota il file in modo che la sua Z punti verso l'alto qui. Se la parte arriva coricata su un lato, selezionare **Imported1** e impostare **Verso l'alto nel file** su **Y verso l'alto**. **Unità nel file** e **Usa per** possono essere modificati anche lì; ogni modifica è un passo di annullamento.

## Costruire sopra

- Fare clic su una faccia piana del corpo e scegliere {{ui:Sketch on this face}}. Le facce piane del modello STEP mantengono la loro posizione quando il corpo viene ricostruito.
- Aggiungere tagli, fori, sporgenze, serie e specchi come su qualsiasi parte.
- Controllare le dimensioni nel riquadro **Parte**: volume, area superficiale, dimensioni.

Raccordi, smussi e gusci richiedono il kernel esatto, come per qualsiasi parte in questa versione ([Il kernel a mesh](topic:solid-kernels)).

## Dove viene conservato

I triangoli sono memorizzati **dentro** il file `.partcraft.json`, quindi il file della parte è autonomo: non serve più il file STEP.

## Messaggi

| Messaggio | Significato |
|---|---|
| '"part.stp" non è un file STEP (non inizia con ISO-10303-21).' | Il file non è testo STEP semplice. Chiedere al mittente un file STEP AP203, AP214 o AP242 |
| "Il file STEP non può essere letto: la sua sezione dati manca o è danneggiata." | Il file è troncato o danneggiato. Copiarlo di nuovo |
| "Il file STEP non contiene alcun corpo solido o di superficie: non c'è nulla da importare." | Il file contiene solo disegni, punti o dati. Chiedere un solido |
| "Quel file STEP è troppo grande (oltre 60 MB) per essere importato qui." e gli altri limiti del lettore (elementi, facce, triangoli) | Semplificare il modello alla fonte, oppure inviare le parti una alla volta |
| "… righe danneggiate nel file sono state saltate." | Alcune righe non sono state lette; le altre sono state importate. Controllare il corpo |
| "… facce non possono essere trasformate in triangoli e sono state omesse." | Quelle facce lasciano dei buchi, che PartCraft cerca di riempire; se il corpo non si chiude, non viene aggiunto |
| "… facce di un tipo non letto (…) sono state saltate." | Un tipo di superficie raro. Chiedere il modello con superfici semplici o B-spline |
| "Non si chiude …" | Le facce non formano un solido chiuso (un modello di superficie, o facce omesse). PartCraft mostra le aperture e non aggiunge nulla |

## Limiti

- Le facce curve sono disegnate e misurate come sfaccettature piane, come in ogni parte costruita da questa versione. PartCraft conserva con il corpo le facce piane, i cilindri, i coni, le sfere e i tori del file, quindi {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} li riscrive come vere superfici, con i fori come fori, insieme alle feature aggiunte. Le facce che il file descrive come spline, sweep o superfici di rivoluzione restano sfaccettature nell'esportazione. Una parte salvata prima della 0.9.1 non ha superfici conservate: aprire di nuovo il file STEP per ottenerle.
- {{ui:Export}} › {{ui:DXF of the sketch or flat face}} con una faccia piana selezionata scrive un foro rotondo del file come vero cerchio.
- Colori, nomi dei corpi, struttura dell'assieme e PMI (tolleranze nel file) non vengono letti.
- Oltre a STEP, PartCraft apre le mesh STL, OBJ e 3MF ([Aprire un file STL, OBJ o 3MF](topic:open-meshes)) e i file `.3dm` ([Aprire un modello .3dm](topic:open-3dm-files)) come corpi solidi. Non sono supportati IGES e i file nativi di altri programmi.
- Una parte con un solido STEP importato da una build che aveva il kernel esatto conserva il testo STEP; questa versione salta quella feature ("non ancora implementato"). Aprire di nuovo il file STEP per importarlo come triangoli.
