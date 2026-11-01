---
title: Introduzione a PartCraft
summary: Che cosa fa oggi PartCraft, che cosa serve al browser e una prima parte in dieci minuti, dallo schizzo al file salvato.
keywords: inizio, primo avvio, avvio rapido, introduzione, esercitazione, prima parte, piastra, parametrico, modellatore di parti
from: 5f0a668d
---

PartCraft è l'app per parti e assiemi parametrici della famiglia CadCraft. Si disegna uno schizzo 2D, lo si fissa con relazioni e quote, lo si trasforma in solido con feature come estrusione, rivoluzione e foro, e in seguito si può cambiare qualsiasi numero: la parte si ricostruisce dalla sua cronologia. Le parti passano poi negli assiemi, dove i giunti le posizionano e permettono di verificarne il movimento.

Che cosa fa questa versione:

| Attività | Che cosa si ottiene |
|---|---|
| Schizzi | Linee, rettangoli, cerchi, archi, punti e mezzerie, con relazioni e quote, e uno stato in tempo reale: sottodefinito, completamente definito o sovradefinito |
| Feature solide | Estrusione, taglio, rivoluzione, taglio di rivoluzione, fori semplici e con alesatura, serie lineari e circolari, specchio, raccordi e smussi su spigoli rettilinei tra facce piane, svuotamenti e sformi su facce piane. Sweep, loft e le altre feature che richiedono un kernel esatto non sono ancora implementati in questa versione: vedere [Che cosa non è ancora implementato](topic:not-built-yet) |
| Cronologia | Modifica dei numeri di qualsiasi feature, soppressione, rollback, riordino ed eliminazione, con annullamento |
| Assiemi | Parti unite da giunti rigidi, rotoidali e a slitta, una verifica delle interferenze e una verifica del movimento |
| Disegni | Una tavola A3 con tre viste, una isometrica, una sezione, una vista di dettaglio, dimensioni complessive, riferimenti, riquadri di tolleranza e simboli di finitura superficiale, esportata in PDF |
| File | File propri di parti e assiemi; in uscita STL, 3MF, STEP sfaccettato, DXF e PDF |

Tutto funziona nel browser, sul proprio computer. **Non viene caricato nulla.** Per sapere dove vanno i file vedere [File: aprire, salvare ed esportare](topic:files).

## Che cosa serve

- Un Chrome, Edge, Firefox o Safari aggiornato con **WebGL** (grafica 3D) e **WebAssembly** attivi. Entrambi sono attivi per impostazione predefinita. La geometria solida è costruita da un kernel a mesh in WebAssembly che si carica insieme all'app: vedere [Il kernel a mesh](topic:solid-kernels).
- Il mouse è la scelta più comoda. Un trackpad funziona, e gli schermi tattili vanno bene per visualizzare e per schizzi semplici: vedere [Trackpad, tocco e schermi piccoli](topic:trackpad-and-touch).
- Uno schermo largo almeno 1280 pixel mostra l'intera barra degli strumenti su una sola riga. Le finestre più strette fanno scorrere la barra in orizzontale; su un telefono i pannelli si aprono come schede da una barra in basso.

Altre informazioni sui browser: [Browser e computer](common:browsers).

:::note
PartCraft funziona nel browser e, sul desktop, dentro CadCraft Studio. Il salvataggio nel cloud non è ancora disponibile: le parti si aprono dal computer e si salvano di nuovo sul computer come file.
:::

## Aprire PartCraft

1. Aprire PartCraft.
2. Attendere mentre lo schermo mostra "Caricamento del kernel solido…". La prima volta richiede qualche istante.
3. Compare una vista 3D vuota con tre piani base, la cronologia a sinistra ("Parte1", poi Piano anteriore, Piano superiore, Piano destro) e un riquadro nella vista intitolato "Iniziare una parte".
4. Il chip vicino all'estremità destra della barra di stato indica "Nucleo a mesh": in questa versione PartCraft costruisce ogni parte con il kernel a mesh, quindi le facce tonde sono sfaccettature piane. Si può iniziare subito a modellare.

Se la vista segnala che il browser non può mostrare il 3D, o che il kernel non si è caricato, vedere [Risoluzione dei problemi](topic:troubleshooting#the-app-does-not-start).

## La prima parte: una piastra con un foro

Si realizza una piastra di 60 × 40 mm, spessa 10 mm, con un foro passante da 6 mm. Le unità sono millimetri.

### Schizzare il contorno

1. Fare clic su **Piano anteriore** nella cronologia a sinistra. Il piano si evidenzia nella vista.
2. Scegliere {{ui:Schizzo}} nella barra degli strumenti, oppure premere {{key:S}}. La vista ruota per guardare il piano di fronte e lo strumento Linea è attivo.
3. Premere {{key:R}} per lo strumento Rettangolo.
4. Portare il puntatore sull'origine (il piccolo cerchio rosso con una croce). Un quadratino indica che lo snap è attivo. Fare clic.
5. Spostarsi in alto a destra e fare di nuovo clic. Il rettangolo è fatto. Le sue linee sono blu: blu significa che possono ancora muoversi.

### Assegnare le misure

1. Premere {{key:D}} per lo strumento Quota.
2. Fare clic sulla linea superiore, poi un po' più in alto. Si apre una casella numerica con la lunghezza attuale.
3. Digitare `60` e premere {{key:Enter}}. Il rettangolo diventa largo 60 mm.
4. Fare clic sulla linea sinistra, poi un po' più a sinistra. Digitare `40` e premere {{key:Enter}}.

Il chip in alto a sinistra della vista indica ora **Completamente definito** e le linee diventano color inchiostro (nere nel tema Carta, chiare nel tema Modello). Ogni punto e ogni misura sono fissati.

:::tip
Se il rettangolo è stato iniziato lontano dall'origine, il chip indica ancora "Sottodefinito · 2 gradi di libertà". Premere {{key:S}} per Seleziona, fare clic su un angolo, fare {{key:Shift}}+clic sull'origine, poi scegliere {{ui:• Coincidente}} nel pannello di destra.
:::

### Estrudere

1. Scegliere {{ui:Esci}} nella barra degli strumenti, oppure premere {{key:Esc}} finché lo schizzo non si chiude (di solito due volte).
2. Scegliere {{ui:Estrudi}}. Compare un solido di 10 mm. "Estrudi1" viene aggiunta alla cronologia, con "Schizzo1" rientrato sotto di essa.
3. Il pannello di destra mostra le impostazioni dell'estrusione. Per cambiare lo spessore, digitare un nuovo numero in **Profondità (mm)** e premere {{key:Enter}} o {{key:Tab}}. La parte si ricostruisce subito.

### Aggiungere il foro

1. Fare clic sulla grande faccia piana sul fronte della piastra (l'estremità dell'estrusione). L'intera faccia si evidenzia e il pannello di destra indica **Faccia**.
2. Scegliere {{ui:Schizzo su questa faccia}} nel pannello di destra.
3. Premere {{key:P}} per lo strumento Punto e fare clic vicino al centro della faccia.
4. Scegliere {{ui:Esci}}.
5. Scegliere {{ui:Foro}}. Un foro da 6 mm attraversa la piastra. Se si vuole, cambiare **Diametro (mm)** nel pannello di destra.

Il riquadro **Parte** in basso a sinistra indica ora un volume, una superficie, la misura (60 × 40 × 10 mm) e "Fori passanti: 1".

### Salvare

1. Premere {{key:Mod+S}} oppure scegliere {{ui:Salva}}.
2. Il browser scarica `Part1.partcraft.json` nella cartella dei download. Il file contiene l'intera cronologia: riaprirlo con {{ui:Apri}} per continuare a modificare.

Per rinominare prima la parte, fare clic su uno spazio vuoto della vista in modo che nulla sia selezionato e digitare un nuovo **Nome** nel pannello di destra.

## Come proseguire

- [Disegnare il primo schizzo](topic:sketch-basics) e [Definire completamente uno schizzo](topic:relations-dimensions) spiegano a fondo lo schizzo.
- [Modificare una parte tramite la cronologia](topic:edit-history) mostra come modificare ciò che si è costruito.
- [Raccordare, smussare e svuotare](topic:fillet-chamfer-shell) e [Creare un disegno](topic:drawing-pdf) completano la parte. [Che cosa non è ancora implementato](topic:not-built-yet) elenca ciò che questa versione non fa, come sweep e loft.
- [Chi viene da un altro modellatore parametrico](topic:coming-from) elenca le abitudini che qui funzionano in modo diverso.
- [Tasti e mouse](topic:keyboard) è l'elenco completo delle scorciatoie.
- [Usare questa guida](common:help).
