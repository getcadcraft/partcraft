---
title: Primi passi con PartCraft
summary: Che cosa fa oggi PartCraft, che cosa serve al browser e una prima parte in dieci minuti, dallo schizzo al file salvato.
keywords: avvio, primo avvio, avvio rapido, introduzione, tutorial, prima parte, piastra, parametrico, modellatore di parti
from: 7d43283f
---

PartCraft è l'app per parti parametriche e assiemi della famiglia CadCraft. Si disegna uno schizzo 2D, lo si vincola con relazioni e quote, lo si trasforma in un solido con funzioni come estrudi, rivoluzione e foro, e si cambia qualsiasi numero in seguito: la parte si ricostruisce dalla sua cronologia. Le parti poi confluiscono negli assiemi, dove i giunti le posizionano e permettono di verificare il movimento.

Che cosa fa questa versione:

| Attività | Che cosa si ottiene |
|---|---|
| Schizzi | Linee, rettangoli, cerchi, archi, punti e linee di mezzeria, con relazioni e quote, e uno stato in tempo reale: sottodefinito, completamente definito o sovradefinito |
| Funzioni solide | Estrudi, taglia, rivoluzione, taglio per rivoluzione, fori semplici e alesati, pattern lineari e circolari, specchio, raccordi e smussi su spigoli diritti tra facce piane, e gusci e sformi su facce piane. Sweep, loft e le altre funzioni che richiedono un kernel esatto non sono ancora implementate in questa versione: vedi [Che cosa non è ancora implementato](topic:not-built-yet) |
| Cronologia | Modificare i numeri di qualsiasi funzione, sopprimere, ripristinare alla fase precedente, riordinare ed eliminare, con annulla |
| Assiemi | Parti unite con giunti rigidi, rotoidali e prismatici, un controllo delle interferenze e un controllo del movimento |
| Disegni | Un foglio A3 con tre viste, un'isometrica, una sezione, una vista di dettaglio, quote generali, riferimenti, riquadri di tolleranza geometrica e simboli di finitura superficiale, esportati in PDF |
| File | I propri file di parte e di assieme; in uscita STL, 3MF, STEP esatto, DXF e PDF |

Tutto funziona nel browser, sul proprio computer. **Non viene caricato nulla.** Vedi [File: apertura, salvataggio ed esportazione](topic:files) per sapere dove vanno i file.

## Che cosa serve

- Un Chrome, Edge, Firefox o Safari aggiornato con **WebGL** (grafica 3D) e **WebAssembly** attivi. Entrambi sono attivi per impostazione predefinita. La geometria solida è costruita da un kernel mesh in WebAssembly che si carica con l'app: vedi [Il kernel mesh](topic:solid-kernels).
- Il mouse è la scelta più semplice. Il trackpad funziona, e gli schermi tattili vanno bene per la visualizzazione e gli schizzi semplici: vedi [Trackpad, tocco e schermi piccoli](topic:trackpad-and-touch).
- Uno schermo largo almeno 1280 pixel mostra tutta la barra degli strumenti su una riga. Le finestre più strette fanno scorrere la barra orizzontalmente; su un telefono i pannelli si aprono come fogli da una barra in basso.

Altro sui browser: [Browser e computer](common:browsers).

:::note
PartCraft funziona nel browser, e sul desktop all'interno di CadCraft Studio. Il salvataggio in cloud non è ancora disponibile: si aprono le parti dal computer e si salvano di nuovo lì come file.
:::

## Aprire PartCraft

1. Aprire PartCraft.
2. Attendere mentre lo schermo mostra "Caricamento del kernel solido…". La prima volta richiede un momento.
3. Si vede una vista 3D vuota con tre piani di base, la cronologia a sinistra ("Parte1", poi Piano anteriore, Piano superiore, Piano destro) e un riquadro nella vista intitolato "Avvia una parte".
4. Il chip vicino all'estremità destra della barra di stato dice "Mesh kernel": in questa versione PartCraft costruisce ogni parte con il kernel mesh, quindi le superfici arrotondate sono sfaccettate. Si può iniziare subito a modellare.

Se la vista dice che il browser non può mostrare il 3D, oppure che il kernel non si è caricato, vedi [Risoluzione dei problemi](topic:troubleshooting#the-app-does-not-start).

## La prima parte: una piastra con un foro

Si realizza una piastra di 60 × 40 mm, spessa 10 mm, con un foro passante di 6 mm. Le unità sono millimetri.

### Disegnare il contorno

1. Fare clic su **Piano anteriore** nella cronologia a sinistra. Il piano si evidenzia nella vista.
2. Scegliere {{ui:Schizzo}} nella barra degli strumenti, oppure premere {{key:S}}. La vista si gira per guardare dritto il piano, e lo strumento Linea è attivo.
3. Premere {{key:R}} per lo strumento Rettangolo.
4. Spostare il puntatore sull'origine (il piccolo cerchio rosso con una croce). Un piccolo quadrato indica che si aggancia. Fare clic.
5. Spostarsi in alto e a destra e fare clic di nuovo. Si ottiene un rettangolo. Le sue linee sono blu: il blu significa che possono ancora muoversi.

### Assegnare le dimensioni

1. Premere {{key:D}} per lo strumento Quota.
2. Fare clic sulla linea superiore, poi fare clic un po' sopra di essa. Si apre una casella numerica con la lunghezza attuale.
3. Digitare `60` e premere {{key:Enter}}. Il rettangolo diventa largo 60 mm.
4. Fare clic sulla linea sinistra, poi un po' a sinistra di essa. Digitare `40` e premere {{key:Enter}}.

Il chip in alto a sinistra della vista ora dice **Completamente definito** e le linee passano al colore pieno (nero con il tema Carta, chiaro con il tema Modello). Ogni punto e ogni dimensione sono fissati.

:::tip
Se si è iniziato il rettangolo lontano dall'origine, il chip dice ancora "Sottodefinito · 2 gradi di libertà". Premere {{key:S}} per Seleziona, fare clic su un angolo, {{key:Shift}}+clic sull'origine, poi scegliere {{ui:• Coincidente}} nel pannello destro.
:::

### Estrudere

1. Scegliere {{ui:Esci}} nella barra degli strumenti, oppure premere {{key:Esc}} finché lo schizzo si chiude (di solito due volte).
2. Scegliere {{ui:Estrudi}}. Compare un solido di 10 mm. "Estrudi1" si aggiunge alla cronologia, con "Schizzo1" rientrato sotto di essa.
3. Il pannello destro mostra le impostazioni dell'estrusione. Per cambiare lo spessore, digitare un nuovo numero in **Profondità (mm)** e premere {{key:Enter}} oppure {{key:Tab}}. La parte si ricostruisce subito.

### Aggiungere il foro

1. Fare clic sulla grande faccia piana davanti alla piastra (la fine dell'estrusione). Tutta la faccia si evidenzia e il pannello destro dice **Faccia**.
2. Scegliere {{ui:Schizzo su questa faccia}} nel pannello destro.
3. Premere {{key:P}} per lo strumento Punto e fare clic vicino al centro della faccia.
4. Scegliere {{ui:Esci}}.
5. Scegliere {{ui:Foro}}. Un foro di 6 mm attraversa la piastra. Se si vuole, cambiare **Diametro (mm)** nel pannello destro.

Il riquadro **Parte** in basso a sinistra ora riporta un volume, un'area superficiale, le dimensioni (60 × 40 × 10 mm) e "Fori passanti: 1".

### Salvare

1. Premere {{key:Mod+S}} oppure scegliere {{ui:Salva}}.
2. Il browser scarica `Part1.partcraft.json` nella sua cartella dei download. Il file contiene l'intera cronologia: aprirlo di nuovo con {{ui:Apri}} per continuare a modificarlo.

Per rinominare prima la parte, fare clic su uno spazio vuoto della vista in modo che nulla sia selezionato, e digitare un nuovo **Nome** nel pannello destro.

## Dove andare dopo

- [Disegnare il primo schizzo](topic:sketch-basics) e [Definire completamente uno schizzo](topic:relations-dimensions) spiegano lo schizzatore in modo approfondito.
- [Cambiare una parte attraverso la sua cronologia](topic:edit-history) mostra come modificare ciò che si è costruito.
- [Raccordi, smussi e svuotamento](topic:fillet-chamfer-shell) e [Creare un disegno](topic:drawing-pdf) completano la parte. [Che cosa non è ancora implementato](topic:not-built-yet) elenca ciò che questa versione non fa, come sweep e loft.
- [Provenienza da un altro modellatore parametrico](topic:coming-from) elenca le abitudini che qui funzionano diversamente.
- [Tasti e mouse](topic:keyboard) è l'elenco completo delle scorciatoie.
- [Come usare questa guida](common:help).
