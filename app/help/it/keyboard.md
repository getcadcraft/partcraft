---
title: Tasti e mouse
summary: Ogni scorciatoia da tastiera e ogni azione del mouse in PartCraft, raggruppate per dove funzionano: ovunque, copia e incolla, sulla parte, nella vista 3D, in uno schizzo, nella cronologia e in un assieme.
keywords: tastiera, scorciatoie, tasti di scelta rapida, tasti, mouse, orbita, ruota, pan, zoom, rotella, clic destro, annulla, ripristina, salva, apri, esc, elimina, alt freccia, copia, incolla, taglia, duplica, seleziona tutto, pulsante centrale
from: 3a59c3a3
---

I tasti non hanno effetto mentre si scrive in una casella di un pannello, tranne {{key:Mod+S}} e {{key:Mod+O}}, che funzionano sempre. I tasti lettera funzionano senza modificatore.

Note generali sui tasti nel browser e sulle tastiere senza tasti funzione: [Tasti, mouse e trackpad](common:keys).

## Ovunque

| Tasto | Azione |
|---|---|
| {{key:Mod+S}} | Salva la parte (in un assieme: l'assieme). Chiude prima lo schizzo aperto |
| {{key:Mod+O}} | Apre un file di parte o di assieme (chiede prima se ci sono modifiche non salvate) |
| {{key:Mod+Z}} | Annulla |
| {{key:Mod+Y}} oppure {{key:Mod+Shift+Z}} | Ripristina |
| {{key:F1}} | Apre o chiude questa guida (anche {{ui:Guida}} nella barra dell'app). {{key:Esc}} la chiude anche. Su molti portatili e tastiere Mac, tenere premuto Fn |
| {{key:Ctrl+Shift+F}} | Modalità schermo: normale, schermo intero, schermo intero con le barre nascoste. Control anche su Mac, non ⌘ |
| {{key:Esc}} | Esce dallo schermo intero (quando è attivo) |
| {{key:Mod+,}} | Impostazioni, inclusa la scheda PartCraft (vedi [Impostazioni di PartCraft](topic:settings)) |

In una casella numerica di un pannello, {{key:Mod+Z}} è l'annulla di testo del browser. Nella casella numerica sopra una quota di uno schizzo, annulla in PartCraft.

## Copia, incolla e duplica

Agiscono su ciò con cui si sta lavorando: la geometria selezionata in uno schizzo aperto, la feature selezionata nella cronologia o la parte selezionata in un assieme. Dettagli in [Copia, incolla e duplica](topic:copy-paste).

| Tasto | Azione |
|---|---|
| {{key:Mod+C}} | Copia la selezione |
| {{key:Mod+X}} | Taglia: copia, poi elimina |
| {{key:Mod+V}} | Incolla. In uno schizzo la copia segue il puntatore: fare clic dove deve andare |
| {{key:Mod+Shift+V}} | Incolla nella stessa posizione: stesse coordinate (in un assieme, lo stesso punto) |
| {{key:Mod+D}} | Duplica: copia e incolla in un solo passaggio, senza toccare gli Appunti |
| {{key:Mod+A}} | Seleziona tutto (in uno schizzo) |
| {{key:Esc}} | Deseleziona tutto (e annulla l'incolla in corso che segue il puntatore) |

In una casella numerica, questi tasti copiano e incollano il testo come di consueto. Il testo selezionato in un pannello è copiato dal browser.

## Sulla parte (nessuno schizzo aperto)

| Tasto | Azione |
|---|---|
| {{key:S}} | Schizzo sul piano o sulla faccia piana selezionati; senza nulla di selezionato, scegliere il punto con un clic |
| {{key:F}} | Adatta la parte alla vista |
| {{key:M}} | Misura, in ogni area di lavoro e in un assieme; {{key:Esc}} cancella le selezioni, un altro {{key:Esc}} chiude (vedi [Misurare distanze, angoli e massa](topic:measure)) |
| {{key:X}} | Attiva o disattiva la vista in sezione, in ogni area di lavoro e in un assieme; {{key:Esc}} la chiude (vedi [Guardare dentro con una vista in sezione](topic:section-view)) |
| {{key:Delete}} | Elimina la feature selezionata (chiede se altre la usano) |
| {{key:0}} … {{key:9}}, {{key:.}} | Con una feature selezionata: digitare il suo valore principale (la profondità di un'estrusione, il diametro di un foro, il numero di una serie, il raggio di un raccordo …), poi {{key:Enter}}. {{key:Esc}} mantiene il valore precedente |
| {{key:Backspace}} | Elimina la feature selezionata, quando ne è selezionata una |
| {{key:Esc}} | Esce dalla scelta del piano di schizzo, oppure cancella la selezione (compresi spigoli o facce scelti con {{key:Shift}}) |

## Nella vista 3D

Fare prima clic nella vista, in modo che abbia il focus della tastiera.

| Tasto | Azione |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Ruota la vista di 15 gradi |
| {{key:Shift+Left}} e le altre frecce | Pan |
| {{key:Plus}} oppure {{key:=}} | Zoom avanti |
| {{key:Minus}} | Zoom indietro |

| Mouse | Azione |
|---|---|
| Trascinare con il pulsante sinistro | Ruota (orbita) la vista |
| Trascinare con il pulsante destro o centrale | Pan |
| {{key:Shift}}, {{key:Ctrl}} o ⌘ tenuto premuto mentre si trascina con il pulsante sinistro | Pan |
| Rotella | Zoom nel punto del puntatore (in avanti, lontano da sé, ingrandisce) |
| Scorrimento a due dita su un trackpad | Ruota la vista; con {{key:Shift}}, pan. Il pizzico fa zoom. Si imposta con **Scorrimento** in [Impostazioni di PartCraft](topic:settings) |

Con **Ruota la vista: pulsante centrale** in [Impostazioni di PartCraft](topic:settings), il pulsante centrale ruota la vista, {{key:Shift}} con il pulsante centrale o con quello destro fa pan, e il pulsante sinistro serve solo a selezionare.
| Clic | Seleziona una faccia (si evidenzia tutta), uno spigolo o un piano |
| {{key:Shift}}+clic su uno spigolo o una faccia | Raccoglie più spigoli o facce |
| Clic nello spazio vuoto | Annulla la selezione |

## Durante la selezione di spigoli o facce per un raccordo, uno smusso o uno svuota


| Tasto o mouse | Azione |
|---|---|
| Clic su uno spigolo o una faccia | Lo aggiunge, oppure lo toglie se è già presente |
| {{key:Esc}} o {{key:Enter}} | Termina la selezione (come {{ui:Fine}}) |
| {{key:F}} | Adatta |
| Frecce, con la vista a fuoco | Ruota; con {{key:Shift}}, pan |

## Sulla tavola del disegno

| Tasto | Azione |
|---|---|
| {{key:F}} | Adatta la tavola |
| {{key:Plus}} / {{key:Minus}} | Zoom (con la tavola a fuoco) |
| {{key:Shift+Left}} e le altre frecce | Pan (con la tavola a fuoco) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Sposta di 1 mm il simbolo GD&T selezionato |
| {{key:Delete}} oppure {{key:Backspace}} | Elimina il simbolo selezionato |
| {{key:Esc}} | Smette di posizionare un simbolo; altrimenti deseleziona; altrimenti torna al modello |

| Mouse | Azione |
|---|---|
| Clic su una vista, con Riferimento, Cornice, Finitura o Dettaglio scelto | Lo posiziona lì (si aggancia alla linea più vicina) |
| Clic su un simbolo | Lo seleziona |
| Trascinare un simbolo | Lo sposta (la linea di richiamo resta sul suo punto) |
| Rotella | Zoom nel punto del puntatore |
| Trascinare con il pulsante destro o centrale | Pan |

## In uno schizzo

| Tasto | Azione |
|---|---|
| {{key:L}} | Linea |
| {{key:R}} | Rettangolo |
| {{key:C}} | Cerchio |
| {{key:A}} | Arco (centro, inizio, fine) |
| {{key:P}} | Punto |
| {{key:N}} | Mezzeria |
| {{key:F}} | Raccorda un angolo |
| {{key:D}} | Quota |
| {{key:B}} | Spline (punti di adattamento) |
| {{key:T}} | Rifila |
| {{key:E}} | Estendi |
| {{key:O}} | Offset ({{key:B}} durante l'offset: entrambi i lati) |
| {{key:M}} | Specchio |
| {{key:S}} | Seleziona |
| {{key:Q}} | Passa le curve selezionate a costruzione e viceversa |
| {{key:Enter}} | Termina una catena di linee o una spline |
| {{key:Delete}} oppure {{key:Backspace}} | Elimina la selezione |
| {{key:Mod+A}} | Seleziona tutto nello schizzo |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Copia, taglia, incolla la geometria (l'incolla segue il puntatore) |
| {{key:Mod+Shift+V}} | Incolla alle stesse coordinate |
| {{key:Mod+D}} | Duplica la selezione e la posiziona con un clic |
| {{key:Esc}} | Torna indietro di un passo: annulla la casella numerica o un incolla, termina la catena di linee, torna a Seleziona, cancella la selezione, poi chiude lo schizzo |

| Mouse | Azione |
|---|---|
| Clic | Posiziona punti con uno strumento di disegno; seleziona con Seleziona |
| {{key:Shift}}+clic | Aggiunge alla selezione o toglie dalla selezione ({{key:Ctrl}}+clic su Windows e Linux, ⌘+clic su Mac, fanno lo stesso) |
| Trascinare nello spazio vuoto (Seleziona) | Finestra: seleziona tutto ciò che è completamente dentro |
| Trascinare un punto, una linea o il bordo di un cerchio (Seleziona) | Lo sposta; le relazioni restano valide |
| Trascinare il numero di una quota (Seleziona) | Sposta l'etichetta |
| Doppio clic su una quota | Ne cambia il valore |
| Doppio clic o clic destro mentre si disegnano linee | Termina la catena |
| Trascinare con il pulsante destro o centrale | Pan |
| Rotella | Zoom nel punto del puntatore |

### Nella casella numerica

| Tasto | Azione |
|---|---|
| {{key:Enter}} | Applica il valore |
| {{key:Esc}} | Chiude senza modificare |

Anche fare clic altrove applica il valore.

## Nell'elenco della cronologia

| Tasto | Azione |
|---|---|
| {{key:Tab}} | Raggiunge l'elenco |
| {{key:Up}} / {{key:Down}} | Si sposta tra le righe |
| {{key:Enter}} oppure {{key:Space}} | Seleziona la riga |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Sposta la feature selezionata su o giù, dove la cronologia lo consente |
| {{key:F2}} | Cambia il valore principale della feature nella sua riga; {{key:Enter}} lo imposta, {{key:Esc}} mantiene il precedente |

| Mouse | Azione |
|---|---|
| Clic | Seleziona un piano o una feature |
| Doppio clic su uno schizzo | Lo apre |
| Doppio clic sul valore di una feature | Lo cambia nella riga |

## In un assieme

| Tasto | Azione |
|---|---|
| {{key:J}} | Avvia un giunto: poi fare clic su una faccia piana di ciascuna delle due parti |
| {{key:F}} | Adatta |
| {{key:Esc}} | Annulla il giunto avviato, oppure cancella la selezione |
| {{key:Delete}} | Rimuove la parte o il giunto selezionato |
| {{key:Backspace}} | Rimuove la parte o il giunto selezionato |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Annulla e ripristina nell'elenco proprio dell'assieme |
| {{key:Mod+D}} | Duplica la parte selezionata (stessa parte, accanto alle altre) |
| {{key:Mod+C}}, poi {{key:Mod+V}} oppure {{key:Mod+Shift+V}} | Copia una parte, poi la incolla accanto alle altre o nello stesso punto |

Mouse nella vista: come nella vista 3D sopra. Fare clic su una parte per selezionarla. Fare doppio clic su una parte nell'elenco per modificarla.

## Nell'area di lavoro Script

| Tasto | Azione |
|---|---|
| {{key:F5}} | Esegue lo script (nell'editor, nel pannello o nella vista) |
| {{key:Mod+Enter}} | Esegue le righe selezionate, oppure la riga su cui si trova il cursore |
| {{key:Tab}} / {{key:Shift+Tab}} | Aumenta / riduce il rientro delle righe selezionate. Per uscire dall'editor con la tastiera, premere {{key:Esc}}, poi {{key:Tab}} |
| {{key:Mod+/}} | Commenta o decommenta le righe selezionate |
| {{key:Mod+F}} / {{key:Mod+H}} | Trova / trova e sostituisci nello script; {{key:Enter}} o {{key:F3}} va alla corrispondenza successiva, {{key:Shift+Enter}} o {{key:Shift+F3}} alla precedente, {{key:Esc}} chiude |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Comprime / espande il blocco su cui si trova il cursore (una funzione, if, for, while … end) |
| {{key:Mod+Space}} | Elenca i completamenti per il nome che si sta digitando (si apre anche dopo due lettere); {{key:Up}} / {{key:Down}} scelgono, {{key:Enter}} o {{key:Tab}} ne accetta uno, {{key:Esc}} chiude |
| {{key:Enter}} nella riga sotto la console | Esegue quella sola istruzione; {{key:Up}} e {{key:Down}} richiamano quelle precedenti |
| {{key:F}} | Adatta la vista a ciò che mostrano gli script |

Vedi [Scrivere ed eseguire script](topic:craftscript).

## Scorciatoie che il browser potrebbe usare

- {{key:Mod+Y}} in Safari può aprire la cronologia: usare {{key:Mod+Shift+Z}} per ripristinare.
- {{key:Mod+D}} è il tasto dei segnalibri del browser: PartCraft lo usa mentre l'app ha il focus e lo lascia stare mentre si scrive in una casella.
- {{key:F11}} e {{key:Mod+Plus}} / {{key:Mod+Minus}} sono lo schermo intero e lo zoom della pagina del browser, non quelli di PartCraft. Usare {{key:Ctrl+Shift+F}} per lo schermo intero e la rotella per il modello.
- Su molti portatili e Mac i tasti funzione richiedono il tasto Fn: premere Fn+{{key:F1}} per la guida, oppure usare il pulsante {{ui:Guida}}.

Gesti tattili e del trackpad: [Trackpad, tocco e schermi piccoli](topic:trackpad-and-touch).

## Dove si trova Spostamento

Lo spostamento si trova nel menu {{ui:Altro}} del gruppo Feature come {{ui:Sposta corpo}}, nella casella {{ui:Spostamento}} in cui si digitano ΔX, ΔY e ΔZ, e come frecce {{ui:Trascina per spostare}} sulla parte.
