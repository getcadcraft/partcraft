---
title: Aprire un STL, OBJ o 3MF come corpo solido
summary: Trasformare una mesh da uno scanner, da un sito di stampa 3D o da un altro programma in un solido su cui tagliare, aggiungere e disegnare; cosa PartCraft ripara per strada e cosa non può riparare.
keywords: stl, obj, 3mf, mesh, mesh in solido, converti mesh, scansione, a tenuta stagna, ripara, fori, aperture, unità, asse verticale, corpo importato, facce piane
from: 7b948471
---

PartCraft apre le mesh STL, OBJ e 3MF come **corpi solidi**. Il corpo funziona come ogni altro solido: tagliarlo, aggiungervi materiale, forarlo, creare serie, usarlo in un assieme o per la lavorazione, e fare uno schizzo sulle sue facce piane. Non ha una cronologia propria: una mesh è solo triangoli, quindi le sue dimensioni non possono essere cambiate, si può solo aggiungere materiale o toglierlo.

## Aprire una mesh

1. Scegliere {{ui:Apri}} oppure premere {{key:Mod+O}}, e selezionare il file `.stl`, `.obj` o `.3mf`. Oppure trascinarlo nella vista 3D.
2. PartCraft lo legge, ripara ciò che può riparare in sicurezza e mostra cosa ha trovato: quanti triangoli e punti, ogni riparazione, e se la mesh ora **si chiude**.
3. Controllare **Unità nel file** e **Asse verticale nel file**. STL e OBJ non dichiarano le loro unità, quindi i millimetri sono un'ipotesi; un file 3MF dichiara le proprie. La riga **Dimensione qui** mostra le dimensioni del corpo con la scelta fatta, così una parte che arriva 25.4 volte più piccola è facile da notare (era in pollici).
4. Se la parte sullo schermo è vuota, scegliere {{ui:Apri come corpo}}. Se ha già feature, scegliere **Usalo per** (aggiungi alla parte, sottrai da essa, oppure mantieni solo la sovrapposizione), poi {{ui:Aggiungi a questa parte}}, oppure {{ui:Nuova parte}} per ricominciare con la mesh.

Una feature **Imported1** compare nella cronologia. La barra di stato dice, per esempio, "bracket.stl è un corpo solido: 15200.512 mm³, 14 facce piane su cui fare uno schizzo."

## Cosa ripara PartCraft

| Riparazione | Cosa significa |
|---|---|
| Angoli doppi uniti | Un STL ripete ogni angolo per ciascuno dei suoi triangoli; vengono uniti in un unico punto |
| Triangoli senza area rimossi | Sottili triangoli i cui angoli stanno su una stessa linea |
| Triangoli doppi rimossi | Un triangolo scritto due volte viene conservato una volta; due rivolti in senso opposto (una parete interna) vengono entrambi rimossi |
| Piccole fessure chiuse | Spigoli che quasi si toccano (entro un millesimo della dimensione della parte) vengono uniti |
| Fori riempiti | Un'apertura il cui bordo giace piano viene riempita qualunque sia la sua dimensione; una deformata solo se è piccola |
| Triangoli girati verso l'esterno | I triangoli rivolti nella direzione sbagliata vengono girati per concordare con i vicini, e l'intera superficie viene orientata verso l'esterno |

## Quando una mesh non si chiude

Un solido ha bisogno di una superficie senza aperture. Quando PartCraft non riesce a chiuderla, la finestra indica quante aperture e spigoli aperti restano, e non c'è alcun corpo da aggiungere. Chiudere le aperture nel programma che ha creato la mesh, oppure esportarla di nuovo come mesh chiusa (a tenuta stagna), poi riaprirla.

PartCraft lascia un'apertura intatta quando riempirla potrebbe indovinare male: un foro grande e deformato, oppure due aperture nello stesso piano (una faccia ad anello mancante, dove riempire ciascun bordo coprirebbe il foro al centro). Anche uno spigolo condiviso da più di due triangoli viene segnalato: una superficie del genere non ha un interno chiaro.

## Disegnare sulle sue facce piane

Le aree piane fatte di molti triangoli vengono unite in una sola **faccia piana** ciascuna, così uno schizzo può appoggiarvisi: fare clic sulla faccia e scegliere {{ui:Schizzo su questa faccia}}. Una faccia che in seguito viene tagliata o a cui si aggiunge materiale resta una faccia. Le aree arrotondate (un foro, un raccordo) restano triangoli: non sono facce selezionabili, e la vista ne disegna il contorno dall'angolo tra i triangoli.

## Modificarlo in seguito

Selezionare **Imported1** per vedere il file da cui proviene, quanti triangoli ha e cosa è stato riparato. **Unità nel file**, **Asse verticale nel file** e **Usalo per** possono essere cambiati lì; ogni modifica è un passo di Annulla.

## Dove è conservata

La mesh riparata è memorizzata **dentro** il file `.partcraft.json`, quindi non serve più il file della mesh. Una parte con un corpo a mesh è di versione 5: una versione precedente di PartCraft la rifiuta in base alla versione. Una mesh da 200,000 triangoli aggiunge circa 1.2 MB.

## Limiti

- Al massimo 3 milioni di triangoli e 200 MB in un file.
- Un corpo ricavato da una mesh viene costruito dal kernel a mesh. Con il kernel esatto attivo (solo sviluppatori), lo segnala e non viene costruito.
- Materiali OBJ, coordinate di texture e curve a forma libera vengono esclusi; colori, materiali e oggetti di supporto 3MF vengono esclusi (la finestra indica quanti oggetti sono stati saltati).
- Il corpo è fine quanto la mesh: una STL grossolana dà facce tonde grossolane. I fori che vi si praticano sono tondi quanto le feature proprie.
