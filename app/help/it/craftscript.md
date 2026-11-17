---
title: Scrivere ed eseguire script (area di lavoro Script)
summary: L'area di lavoro Script passo dopo passo: scrivere uno script CraftScript o Lua, eseguirlo con F5, leggere la console, conservare i risultati nelle variabili per lo script successivo, mostrare mesh, campi e grafici, interrompere un'esecuzione e salvare gli script con la parte.
keywords: script, scripting, script durante la modellazione, stacca, secondo schermo, secondo monitor, param, params, parametri negli script, CraftScript, Lua, codice, programma, editor, console, REPL, riga di comando, esegui, F5, esegui selezione, ferma, variabili, area di lavoro, grafico, campo, mesh, legenda, sotto-schermo, analisi, automazione, matrice, numerico
from: d0003e89
---

**Anteprima.** Lo scripting è nuovo in PartCraft 0.3 ed è in anteprima: il linguaggio, la libreria e il modo in cui gli script vengono salvati possono ancora cambiare, e gli script scritti ora potrebbero richiedere piccole modifiche in seguito. Segnalare cosa non funziona.

L'area di lavoro Script esegue i propri calcoli accanto alla parte: piccole somme, analisi complete, oppure gli script della [libreria di analisi](topic:craftscript-library). Gli script sono scritti in **CraftScript** (un linguaggio a matrici molto simile a MATLAB, vedi [Il linguaggio CraftScript](topic:craftscript-language)) oppure in **Lua** (vedi [Script in Lua](topic:craftscript-lua)) o **Python** (vedi [Script in Python](topic:craftscript-python)).

Scegliere **Script** nella casella **Area di lavoro** a sinistra della barra degli strumenti. La parte non viene modificata. Il pannello di destra diventa il pannello degli script (più largo del solito; trascinare il suo bordo per cambiarne la dimensione, oppure spostarlo su un secondo schermo con il suo menu {{ui:⋯}}, vedi [Disporre i pannelli](common:arrange-panels)).

## Scrivere script mentre si modella

Non serve lasciare l'area di lavoro Progettazione per scrivere uno script. In Progettazione, la scheda {{ui:Script}} del pannello di destra contiene lo stesso editor, la stessa console, le variabili e la libreria, con gli stessi script. L'albero delle caratteristiche e la vista continuano a funzionare: fare clic su una caratteristica per selezionarla, fare doppio clic su uno schizzo per modificarlo, ruotare la vista, poi tornare alla scheda {{ui:Script}} e premere {{key:F5}}.

Ciò che uno script **mostra** (mesh, campi, grafici, tabelle) non viene disegnato sopra il modello in Progettazione: la console lo segnala, e l'area di lavoro Script mostra tutto quando si passa a essa.

{{ui:Stacca}}, accanto a {{ui:Esegui}}, sposta l'intero pannello in una finestra propria, per esempio su un secondo schermo, in modo che editor e vista completa stiano affiancati. {{ui:Riattacca}} lo riancora. Vedi [Disporre i pannelli](common:arrange-panels).

## Eseguire il primo script

1. Scrivere nell'editor, per esempio:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Premere {{key:F5}} (oppure {{ui:Esegui}}). La console sotto l'editor mostra ciò che lo script ha stampato, e "Completato in … s". Il grafico compare nei **sotto-schermi** lungo il fondo della vista 3D.
3. Una riga senza punto e virgola stampa il suo valore, come in MATLAB: `a = 3` stampa `a = 3`; `a = 3;` non stampa nulla.
4. Per eseguire solo una parte di uno script, selezionare le righe e premere {{key:Mod+Enter}} ({{ui:Selezione}}). Senza selezione esegue la riga su cui si trova il cursore.
5. La riga in fondo alla console (dopo `>>`) esegue un'istruzione alla pressione di Invio. {{key:Up}} e {{key:Down}} richiamano le righe precedenti.

## Trovare, ripiegare e completare

- **Trova e sostituisci.** Premere {{key:Mod+F}} (oppure {{key:Mod+H}} per sostituire anche). Si apre una barra sopra il codice: digitare ciò che cercare; le corrispondenze si evidenziano e il conteggio indica la posizione. I pulsanti accanto alla casella fanno corrispondere maiuscole e minuscole (**Aa**), cercano solo parole intere (**W**) e usano un'espressione regolare (**.\***; nella sostituzione, `$1` rimette ciò che ha trovato il primo gruppo). {{ui:Sostituisci}} sostituisce la corrispondenza corrente, {{ui:Tutte}} sostituisce ogni corrispondenza come un solo passo di {{key:Mod+Z}}.
- **Ripiegamento.** Fare clic sul ▾ accanto a un numero di riga, oppure premere {{key:Mod+Shift+[}} con il cursore su una riga `function`, `if`, `for`, `while`, `switch` o `try` (Lua: `function`, `do`, `if`, `repeat`), per nascondere le sue righe interne; la riga indica quante sono. ▸ oppure {{key:Mod+Shift+]}} la riapre. Il ripiegamento nasconde solo le righe: Esegui, Salva, la copia e i numeri di riga contano ancora tutte le righe, e digitare su una riga ripiegata la apre prima.
- **Completamenti.** Digitare due lettere di un nome, oppure premere {{key:Mod+Space}}: compare un elenco con le variabili disponibili, le funzioni del linguaggio (con i loro argomenti), le parole chiave e i nomi già presenti nello script. Scegliere con le frecce e premere {{key:Enter}} oppure {{key:Tab}}.

## Quando qualcosa va storto

- Un errore indica il problema e la sua riga: la riga diventa rossa nell'editor, e **Riga n** nella console porta lì.
- Un ciclo che non finisce mai: premere {{ui:Ferma}} (barra degli strumenti o pannello). Lo script si ferma subito; le variabili mantengono i valori che avevano prima di quell'esecuzione.
- Ogni esecuzione ha anche un limite di passi (2 miliardi per impostazione predefinita; modificarlo in **Opzioni di esecuzione** nel pannello). Un'esecuzione che lo supera si ferma con un messaggio.

## Le variabili passano da uno script all'altro

Ogni variabile di primo livello creata da uno script finisce nella scheda **Variabili** (nome, tipo, dimensione, valore minimo e massimo) e vi resta per lo script successivo, in entrambi i linguaggi. È così che uno script crea la mesh, il successivo risolve e un terzo traccia il grafico.

- Fare clic su una variabile per mostrarla: mesh, campi e modelli nella vista 3D, array come tabella (più un grafico a linee per un vettore o una mappa di colori per una matrice) nei sotto-schermi.
- {{ui:Salva come JSON}}, {{ui:Salva come CSV}} (una tabella di numeri) e {{ui:Salva come HDF5}} la scaricano; {{ui:Elimina}} la rimuove; {{ui:Cancella tutto}} svuota l'area di lavoro.
- Selezionare **Salva le variabili con la parte** per conservarle nel file della parte (fino a 32 MB; quelle più grandi restano solo per questa visita). Quando si apre una parte del genere, il pannello propone di caricarle.

## Mesh, campi e grafici

- `show(m)` disegna una mesh; `show(f)` colora un campo sulla sua mesh con una legenda. L'elenco **Mostrati** in alto a sinistra della vista nasconde ({{ui:occhio}}) o rimuove ciascun elemento, e nasconde o mostra la parte stessa. Sotto la legenda, digitare un intervallo (**Da**, **a**) oppure premere {{ui:Auto}}; un campo di vettore o di tensione offre anche la scelta della componente da mostrare.
- `show(f, 'deform', u, 'scale', 50)` disegna la mesh spostata da un campo di spostamento `u`, ingrandita 50 volte (senza `scale`, circa l'8 % delle dimensioni del modello).
- Fare clic su una mesh mostrata: il nodo più vicino, l'elemento e i valori del campo lì compaiono nei sotto-schermi (**Selezionato**).
- `plot`, `imagesc` e `table` mettono in un sotto-schermo un grafico a linee, una mappa di colori di un array 2D o una tabella. Un grafico con lo stesso `'id'` (o titolo) di uno precedente lo sostituisce, quindi un ciclo può aggiornare un solo grafico di convergenza; `'append', true` aggiunge una curva. {{ui:Pulisci}} svuota i sotto-schermi; la freccia li ripiega.
- Con due o più grafici, {{ui:Affiancati}} li mostra tutti insieme (i sei più recenti); facendo clic sulla scheda di una tabella o di un'immagine si mostra di nuovo solo quella.
- Ogni grafico ha sotto {{ui:PNG}}, {{ui:SVG}} e {{ui:CSV}}. PNG e SVG lo stampano su bianco con i colori della carta, qualunque sia il tema (PNG 1600 × 1000 pixel; SVG scala senza sfocarsi); CSV contiene i suoi numeri con tutte le cifre: una colonna di x e una colonna per curva quando le curve condividono x, altrimenti una riga per punto con il nome della curva.
- {{key:F}} oppure {{ui:Adatta}} adatta la vista a ciò che è mostrato.

## File

- {{ui:Apri}} nel gruppo Script (oppure trascinare file sulla vista o sul pannello): i file `.craft`, `.lua` e `.py` si aprono come nuovi script (non vengono eseguiti); i file di dati (STL, OBJ, CSV, JSON, NPY, HDF5) vengono caricati nelle variabili con il nome del file.
- {{ui:Salva}} nel gruppo Script scarica lo script corrente come file.
- {{ui:Nuovo}} nel gruppo Script (oppure {{ui:+}} accanto alle schede) avvia un altro script. Fare doppio clic su una scheda per rinominarla; il suo {{ui:×}} la rimuove (è possibile annullarlo).

## Leggere i parametri della parte

Uno script legge i parametri della parte (vedi [Guidare una parte con parametri](topic:parameters)) per nome:

```
w = param('width');     % il valore di un parametro, in mm (o in gradi, o un numero semplice)
p = params();           % tutti, come struct: p.width, p.height
```

In Lua e Python sono `cs.param('width')` e `cs.params()`. Gli script leggono soltanto i parametri: si modificano nella scheda {{ui:Parametri}}. Sotto la scheda dello script, una riga elenca i parametri che legge con `param('…')` e segnala quelli che la parte non ha; la scheda {{ui:Parametri}} elenca lo script sotto ciascuno. Un nome composto durante l'esecuzione, come `param(name)`, non viene elencato.

## Gli script sono salvati nella parte

Ogni script nelle schede è conservato nella parte, quindi {{ui:Salva}} nel gruppo File lo salva insieme ad essa, e le modifiche agli script si possono annullare. Aprire una parte **non esegue mai i suoi script**: la console indica quanti ne contiene, e vengono eseguiti solo quando si preme Esegui. Una parte di altri può contenere qualsiasi script: leggerlo prima di eseguirlo. Gli script girano in background su questo computer, senza accesso alla rete, e non possono toccare la pagina.

## Collegati

- [Il linguaggio CraftScript](topic:craftscript-language)
- [Script in Lua](topic:craftscript-lua)
- [Script in Python](topic:craftscript-python)
- [La libreria di analisi](topic:craftscript-library)
- [Scrivere un'analisi propria](topic:craftscript-own-analysis)
