---
title: Salvare, riaprire e continuare a lavorare
summary: Salva parti e assiemi sul tuo computer, dai loro un nome, riaprili con pulsante, tasto o trascinamento, conserva le versioni ed evita di perdere il lavoro in una scheda del browser.
keywords: salva, apri, riapri, carica, scarica, versioni, backup, rinomina, nome file, lavoro perso, lascia il sito, partcraft.json, partcraft-asm.json, nuova parte
from: c18a5abc
---

PartCraft non conserva nulla tra una visita e l'altra. La parte resta nella scheda del browser finché non la salvi come file, e torna quando apri quel file.

## Salvare una parte

1. Dare un nome alla parte: fare clic su uno spazio vuoto nella vista, così che non sia selezionato nulla, poi digitare il **Nome** nel pannello di destra e premere {{key:Enter}}. L'intestazione della cronologia cambia di conseguenza.
2. Premere {{key:Mod+S}} oppure scegliere {{ui:Salva}}.
3. Il browser scarica `<nome>.partcraft.json`. La barra di stato dice "File salvato: Bracket.partcraft.json (cronologia completa; riaprirlo qui per continuare a modificarlo)."

Se è aperto uno schizzo, il salvataggio lo chiude prima.

Il file contiene ogni schizzo, relazione, quota e feature, oltre alle feature soppresse, la posizione della barra di rollback, le impostazioni del foglio di disegno, le note GD&T e il testo completo di ogni solido STEP importato. La lista delle operazioni di annullamento non viene salvata.

## Salvare un assieme

In un assieme, {{ui:Salva}} o {{key:Mod+S}} scaricano `<nome assieme>.partcraft-asm.json`. Ogni parte è memorizzata al suo interno: non servono i file separati delle parti per riaprirlo.

Mentre si modifica una parte dall'interno di un assieme, {{key:Mod+S}} salva quella sola parte come `.partcraft.json`. Scegliere prima {{ui:Indietro}}, poi salvare, per salvare l'intero assieme.

## Riaprire

Uno dei modi seguenti:

- scegliere {{ui:Apri}} o premere {{key:Mod+O}}, poi selezionare il file;
- trascinare il file da {{pick:mac=Finder|windows=File Explorer|linux=il gestore di file}} sulla vista 3D (compare "Trascina una parte PartCraft per aprirla").

PartCraft distingue parti e assiemi in base al contenuto, quindi entrambi si aprono allo stesso modo. Un file `.step` o `.stp` si apre come solido importato: vedi [Aprire un file STEP e costruire su di esso](topic:import-step). La barra di stato conferma: "Aperto Bracket.partcraft.json: 7 feature." oppure "Aperto Hinge.partcraft-asm.json: 3 parti, 2 giunti."

Se la parte a schermo ha modifiche non salvate, PartCraft chiede prima: {{ui:Annulla}}, {{ui:Scarta modifiche}} oppure {{ui:Salva prima}}.

:::warning
Chiudere un assieme ({{ui:Chiudi}}) prima di aprire un file di parte. Se si apre una parte mentre un assieme è a schermo, la parte si carica dietro l'assieme e si vede solo dopo aver chiuso l'assieme. Aprire un file di assieme sostituisce anche un assieme non salvato senza chiedere, quindi salvarlo prima.
:::

## Ricominciare da capo

{{ui:Nuovo}} avvia una "Part1" vuota. Chiede prima se ci sono modifiche non salvate, e chiude un assieme aperto (chiedendo conferma se non è salvato).

## Conservare le versioni

Ogni salvataggio è un nuovo download, quindi si possono conservare le versioni semplicemente tenendo i file:

- Inserire una versione o una data nel nome prima di salvare: "Bracket rev B".
- Il browser può aggiungere " (1)", " (2)" quando nella cartella dei download esiste già un file con lo stesso nome. Il più recente è quello con il numero più alto, oppure controllare la data in {{pick:mac=Finder|windows=File Explorer|linux=il gestore di file}}.
- Spostare i file completati dalla cartella dei download nella cartella del progetto.

Vedi [Dove vanno i file](common:your-files) per sapere dove finiscono i download su ogni sistema.

## Non perdere il lavoro

- Salvare prima di chiudere la scheda, ricaricare la pagina o lasciare il computer in sospensione per molto tempo. Il browser chiede "Lasciare il sito?" se si tenta di chiudere con modifiche non salvate, ma un arresto anomalo o un portatile chiuso non danno alcun avviso.
- Le finestre private o in incognito funzionano, ma non cambia nulla: il file resta l'unica copia.
- Il salvataggio nel cloud e la cronologia delle versioni non sono ancora disponibili.
