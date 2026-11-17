---
title: Copiare, incollare e duplicare
summary: Copiare geometria di schizzo, feature e parti di assieme; incollare dove si fa clic o sul posto; duplicare in un solo passo; e cosa viene copiato con una copia e cosa no.
keywords: copia, incolla, taglia, duplica, appunti, incolla sul posto, seleziona tutto, deseleziona tutto, elimina, ctrl c, ctrl v, ctrl d, istanza, componente, copia schizzo, copia feature, copia parte
from: 611307d7
---

Il gruppo {{ui:Modifica}} della barra degli strumenti contiene {{ui:Annulla}}, {{ui:Ripristina}}, {{ui:Copia}}, {{ui:Incolla}} e un menu {{ui:Altro}} con {{ui:Taglia}}, {{ui:Copia}}, {{ui:Incolla}}, {{ui:Incolla sul posto}}, {{ui:Duplica}}, {{ui:Elimina}}, {{ui:Seleziona tutto}} e {{ui:Deseleziona tutto}}, ciascuno con il suo tasto. Ciò che viene copiato dipende da dove ci si trova: geometria in uno schizzo aperto, una feature nella cronologia o una parte in un assieme.

Una voce in grigio non può agire in questo momento. Passarci sopra con il puntatore: la descrizione comando spiega perché, per esempio "Selezionare prima la geometria dello schizzo" oppure "Gli appunti contengono Sketch2 e Extrude2: le feature si incollano nella cronologia, quindi uscire prima dallo schizzo".

| Azione | Tasto | In uno schizzo | Nella cronologia | In un assieme |
|---|---|---|---|---|
| Copia | {{key:Mod+C}} | I punti e le curve selezionati | Lo schizzo, l'estrusione, la rivoluzione o il foro selezionato (con il suo schizzo) | La parte selezionata |
| Taglia | {{key:Mod+X}} | Copia, poi elimina | Copia, poi elimina la feature | Copia, poi rimuove la parte |
| Incolla | {{key:Mod+V}} | La copia segue il puntatore; fare clic dove va | Aggiunge la copia alla fine della cronologia | Una nuova copia accanto alle altre parti |
| Incolla sul posto | {{key:Mod+Shift+V}} | Alle stesse coordinate | Come Incolla | Nello stesso punto della parte copiata |
| Duplica | {{key:Mod+D}} | Copia e sposta in un solo passo; gli appunti restano invariati | Una seconda copia subito dopo | Una seconda copia accanto alle altre parti |
| Elimina | {{key:Delete}} | La selezione | La feature (chiede se altre la usano) | La parte o il giunto |
| Seleziona tutto | {{key:Mod+A}} | Tutto nello schizzo | Non disponibile | Non disponibile |
| Deseleziona tutto | {{key:Esc}} | Annulla la selezione | Annulla la selezione e le scelte | Annulla la selezione |

Ogni incolla, duplica e taglia è un passo dell'elenco di annullamento: {{key:Mod+Z}} lo annulla, {{key:Mod+Y}} lo ripristina.

## In uno schizzo

1. Selezionare ciò che si vuole copiare: fare clic, {{key:Shift}}+clic per altri, trascinare una finestra, oppure premere {{key:Mod+A}} per tutto.
2. Premere {{key:Mod+C}} oppure scegliere {{ui:Copia}}. La barra di stato indica cosa è stato copiato.
3. Premere {{key:Mod+V}} oppure scegliere {{ui:Incolla}}. Una copia tratteggiata segue il puntatore, tenuta per il suo centro. Si aggancia ai punti: per mettere il centro di un cerchio copiato su un punto, fare clic su quel punto.
4. Fare clic dove va. La geometria incollata resta selezionata, quindi si può trascinarla o aggiungerle subito relazioni. {{key:Esc}} annulla l'incollatura.

Cosa viene copiato insieme:

- Una linea, un cerchio o un arco copiato porta con sé i propri punti finali e il proprio centro.
- Le relazioni e le quote **tra gli elementi copiati** vengono copiate: un rettangolo copiato è ancora un rettangolo, con le sue misure.
- Le relazioni **verso geometria non copiata**, e verso l'origine, vengono eliminate. La barra di stato le conta: "2 relazioni verso geometria esterna alla copia non verranno copiate". Quindi una copia incollata è libera di muoversi finché non la si collega con relazioni o quote.
- Un punto fisso resta fisso, nella sua nuova posizione.

{{ui:Incolla sul posto}} mette la copia esattamente sulle coordinate dell'originale, in questo schizzo o in un altro: utile per portare un profilo da uno schizzo a un altro. Nello stesso schizzo la copia si trova sopra l'originale; trascinarla via.

{{ui:Duplica}} ({{key:Mod+D}}) copia la selezione e inizia subito a posizionarla, senza toccare ciò che è negli appunti.

:::tip
Per ripetere più volte il centro di un foro o un'asola, copiarlo una volta e incollarlo più volte: ogni {{key:Mod+V}} avvia una nuova copia che segue il puntatore.
:::

## Nella cronologia

1. Fare clic su uno schizzo, un'estrusione, una rivoluzione o un foro nella cronologia.
2. {{key:Mod+C}} la copia. Una feature basata su uno schizzo viene copiata insieme al suo schizzo.
3. {{key:Mod+V}} aggiunge la copia alla fine della cronologia (alla barra di rollback se si è fatto un rollback), con nuovi nomi come Sketch3 e Extrude2.

La copia si trova sullo stesso piano o faccia dell'originale, quindi si costruisce sopra di esso e la parte appare identica. Per spostare la copia, selezionare il nuovo schizzo e cambiarne il piano nel pannello di destra, oppure aprirlo e trascinare o ri-quotare il profilo.

- Incollare in **un'altra parte**: aprire quella parte e premere {{key:Mod+V}}. Quando lo schizzo della copia era su una faccia che quella parte non ha, finisce sul piano Anteriore, e la barra di stato lo indica.
- {{ui:Duplica}} copia e incolla in un solo passo, all'interno della stessa parte.
- {{ui:Taglia}} copia la feature, poi la elimina (chiedendo prima se altre feature la usano).

Serie, specchi, raccordi, smussi, svuotamenti e solidi importati non si possono copiare: dipendono da spigoli, facce o feature scelte in questa parte. Copiare invece lo schizzo o la feature su cui sono costruiti, oppure creare una serie con {{ui:Lineare}} o {{ui:Circolare}}.

## In un assieme

1. Fare clic su una parte nella vista o nell'elenco a sinistra.
2. Scegliere {{ui:Duplica}} ({{key:Mod+D}}), oppure {{key:Mod+C}} e poi {{key:Mod+V}}.

La nuova copia è la **stessa parte**: modificandone una, cambiano tutte le copie. Compare 20 mm a destra di tutto ciò che è già nell'assieme, orientata come la copia, e resta lì finché un giunto non la posiziona. {{ui:Incolla sul posto}} ({{key:Mod+Shift+V}}) la mette esattamente dove si trova la parte copiata; unirla per spostarla (l'offset di un giunto prismatico la spinge lungo il suo asse).

Incollare una parte copiata da un altro assieme porta con sé la parte, come {{ui:Inserisci}} dal suo file. {{ui:Aggiungi copia}} nel gruppo Assieme fa lo stesso di {{ui:Duplica}}, e funziona anche senza nulla selezionato (copia l'ultima parte).

## Gli appunti

- Sono gli appunti proprietari di PartCraft, non quelli del computer: non si può incollare geometria PartCraft in un altro programma, né testo nelle viste di PartCraft.
- Sono conservati in questo browser, quindi un'altra scheda di PartCraft può incollare ciò che è stato copiato. Vengono letti e controllati come un file aperto; ciò che è danneggiato o proveniente da un'altra versione viene rifiutato.
- Una parte con un grande file STEP importato può essere troppo grande perché il browser la conservi: in tal caso si incolla solo in questa scheda.
- In un campo numerico o nella ricerca della guida, {{key:Mod+C}} e {{key:Mod+V}} copiano e incollano testo come di consueto.

Sul foglio del disegno, copia e incolla non sono ancora disponibili; {{ui:Elimina}} e {{ui:Deseleziona tutto}} funzionano sul simbolo selezionato. Vedi [Non ancora implementato](topic:not-built-yet).
