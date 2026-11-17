---
title: Nodi: costruire un modello collegando
summary: Collegare numeri in punti, punti in curve, curve in superfici. Modificare un numero e tutto ciò che ne dipende si ricostruisce. Ogni nodo è anche una riga di CraftScript, e il grafo viene salvato nel file.
keywords: nodi, editor dei nodi, scripting visuale, parametrico, grafo, collegamenti, connessioni, forma libera, freeform, nurbs, loft, estrudi, rivoluzione, cerchio, curva, superficie, serie, intervallo, casuale, elenco, script, craftscript, grasshopper
from: 3a4625de
---

L'**editor Nodi** costruisce la geometria collegando scatole tra loro. Ogni scatola (un nodo) svolge un piccolo compito: produrre un numero, un punto, un cerchio, un loft. Si collega il risultato di uno all'ingresso del successivo, e il modello segue quando si modifica un numero all'inizio.

Aprirlo dall'elenco delle aree di lavoro: {{ui:Nodi}}. Si apre la finestra dell'editor. Una parte che ha già un grafo lo mostra quando si apre l'area di lavoro. È una finestra sulla vista 3D: trascinare la sua barra del titolo per spostarla, trascinare il suo angolo per ridimensionarla.

## Collegare

1. Scegliere un nodo dall'elenco a sinistra (scrivere nella casella di ricerca per restringere l'elenco; <kbd>Invio</kbd> aggiunge la prima corrispondenza). Appare al centro della tela.
2. Trascinare da un punto **uscita** rotondo a destra di un nodo a un punto **ingresso** rotondo a sinistra di un altro. Il punto diventa verde quando è compatibile e rosso quando non lo è; passarvi sopra con il mouse per il motivo.
3. Un ingresso senza collegamenti mostra una casella per un valore digitato. Digitare un numero e premere <kbd>Tab</kbd>: il risultato si ricostruisce.
4. Il piccolo cerchio nella barra del titolo di un nodo è il suo **occhio**. Un nodo con l'occhio attivo viene disegnato nella vista 3D: a linee per le curve, ombreggiato per le superfici, a punti per i punti.

Trascinare un nodo dalla sua barra del titolo. Trascinare lo sfondo per spostare la vista, ruotare la rotella per lo zoom. <kbd>Delete</kbd> elimina il nodo selezionato. {{ui:Riordina}} dispone i nodi in colonne, {{ui:Adatta}} li porta tutti in vista, {{ui:Annulla}} e {{ui:Ripristina}} percorrono le modifiche.

## Tipi e unità

Le connessioni hanno un tipo: numero, sì/no, punto, vettore, curva, superficie, mesh, solido, oppure "geometria" per uno qualsiasi di questi. Un punto può alimentare un ingresso vettore e viceversa. I numeri hanno un'unità: una **lunghezza** è in millimetri e un **angolo** è in gradi. Una lunghezza non può alimentare un angolo, e una lunghezza per una lunghezza (un'area) viene rifiutata, quindi un collegamento sbagliato viene bloccato nel momento in cui lo si crea.

Un punto quadrato è una **lista**. Quando una lista arriva a un ingresso a valore singolo, il nodo viene eseguito una volta per ciascun elemento e il suo risultato diventa una lista. La lista più corta ripete il suo ultimo elemento. Per esempio, una **Serie** di altezze collegata a **Sposta** produce una pila di copie.

## Solidi e booleane come nodi

Il gruppo **Solidi** crea corpi chiusi dalle stesse superfici esatte del pannello Superfici: **Solido scatola**, **Solido cilindro** e **Solido sfera** (dimensioni in mm), **Unione**, **Sottrai** e **Interseca** (il secondo solido è preso dal primo; la tolleranza è quanto possono distare i triangoli del motore dei solidi dalle superfici esatte), **Raccordo tra facce** (le facce per il loro numero nel solido, 1 per la prima; un raggio e, se maggiore di 0, un raggio alla fine), **Volume del solido** (mm³) e **Solido in mesh** (per vederlo o fissarlo). Un solido ha un proprio tipo di connessione: un punto o un numero non possono essere collegati a un ingresso solido, e il punto resta rosso. I nodi Booleana e Raccordo usano il motore di solidi del programma, caricato la prima volta che si apre l'editor.

## Errori

Un nodo che non può svolgere il proprio compito dice perché sotto il suo nome, in rosso ("Il raggio deve essere maggiore di zero."), e i nodi successivi attendono. Lo stesso messaggio compare come problema nel pannello Problemi, così è possibile trovarlo da lì.

## Ogni nodo è una riga di script

Premere {{ui:Script}} per vedere il grafo come CraftScript: una riga per nodo, come `n3 = nd_circle(n2, n1, [0 0 1]);`. Modificare il testo e premere {{ui:Crea il grafo da questo script}} per riportarlo a grafo. Le stesse funzioni `nd_` funzionano in un CraftScript di PartCraft, quindi un grafo può essere eseguito, ripetuto in ciclo o provato lì. I numeri casuali richiedono sempre un **seme**, così lo stesso grafo dà lo stesso risultato su ogni computer.

## Salvato con il file

Il grafo viene salvato nel file della parte (non nella cronologia, quindi Annulla nell'editor è a parte). I nodi producono curve, superfici e mesh accanto al solido: non modificano le feature della parte.
