---
title: Provenendo da un altro modellatore parametrico
summary: Come le abitudini dei modellatori parametrici di parti da desktop si traducono in PartCraft, e le differenze che mettono in difficoltà gli utenti esperti nella prima ora.
keywords: passaggio, migrazione, familiare, gestore feature, albero di progettazione, quota intelligente, estrusione sporgenza, estrusione taglio, hole wizard, vincoli, rilevamento interferenze, barra di rollback, gestore proprietà, mouse, differenze
from: fbacaee1
---

Se si progettano parti in SolidWorks, la maggior parte delle idee di PartCraft risulterà familiare: schizzi sui piani Anteriore, Superiore e Destro, relazioni e quote intelligenti, una cronologia delle feature con una barra di rollback, e assiemi posizionati con accoppiamenti. Il modo di raggiungerle è diverso in alcuni punti, e questa prima versione fa meno. Questa pagina mette in corrispondenza le abitudini consolidate e elenca le sorprese.

## Abitudini, messe in corrispondenza

| Abitudine consolidata | In PartCraft |
|---|---|
| L'albero di progettazione a sinistra | La cronologia a sinistra: piani, poi feature, con gli schizzi rientrati sotto la feature che li usa |
| I piani Anteriore, Superiore e Destro | Gli stessi tre, passanti per l'origine. Anteriore è il piano XY, Superiore è XZ, Destro è YZ; Y punta verso l'alto |
| Schizzo su un piano o una faccia, poi l'angolo di conferma per uscire | {{ui:Schizzo}} ({{key:S}}) su un piano o una faccia piana selezionati; {{ui:Esci}} oppure {{key:Esc}} fino alla chiusura |
| Quota intelligente | {{ui:Quota}} ({{key:D}}). Fare clic su uno o due elementi, poi su dove va il numero. La posizione in cui si mette la quota determina se è orizzontale, verticale o allineata |
| Aggiungere relazioni nel pannello proprietà | Selezionare gli elementi, poi i pulsanti delle relazioni nel pannello di destra (Coincidente, Orizzontale, Parallelo, Tangente, Uguale e così via) |
| Relazioni automatiche durante lo schizzo | Gli snap aggiungono relazioni di coincidenza, punto su curva, orizzontale e verticale |
| Colori dello schizzo blu / nero / rosso | Stessa idea: blu sottodefinito, nero completamente definito, rosso sovradefinito. Il riquadro mostra i gradi di libertà rimasti |
| Linea di mezzeria per le rivoluzioni | {{ui:Linea di mezzeria}} ({{key:N}}); {{ui:Rivoluzione}} usa la prima linea di mezzeria, a meno che non se ne scelga un altro asse |
| Raccordo dello schizzo | {{ui:Raccordo}} ({{key:F}}) in uno schizzo: fare clic sull'angolo, digitare il raggio |
| Interruttore della geometria di costruzione | {{ui:Costruzione}} ({{key:Q}}) |
| Sporgenza estrusa | {{ui:Estrudi}}: Cieco, Piano medio, Fino a faccia / successiva / vertice, Offset dalla faccia, seconda direzione, conicità, un solo contorno (Scegli regioni) |
| Taglio estruso | {{ui:Taglio}}: inizia come Attraverso tutto; passare a Cieco per una tasca |
| Sporgenza / taglio di rivoluzione | {{ui:Rivoluzione}} / {{ui:Altro}} › {{ui:Taglio di rivoluzione}} |
| Piano / asse / punto di riferimento | {{ui:Altro}} › {{ui:Piano}}, {{ui:Asse}}, {{ui:Punto}} (vedi [Piani, assi e punti di riferimento](topic:reference-geometry)) |
| Sporgenza o taglio per sweep o loft, sformo | {{ui:Altro}} › {{ui:Sformo}} su facce piane (vedi [Sweep, loft e sformo](topic:sweep-loft-draft)). {{ui:Sweep}} e {{ui:Loft}} non sono ancora implementati in questa versione (richiedono un kernel esatto) |
| Hole Wizard | {{ui:Foro}} in ogni punto di schizzo libero: semplice, alesatura, svasatura (90° / 82°) oppure filettato ISO metrico M2–M24, passante o cieco |
| Serie lineare / circolare, specchio | {{ui:Lineare}}, {{ui:Circolare}}, {{ui:Specchio}} (feature oppure l'intero corpo) |
| Raccordo e smusso sugli spigoli | {{ui:Raccordo}} / {{ui:Smusso}}: fare clic su uno spigolo, {{key:Shift}}+clic per altri, poi il pulsante. Un solo raggio; smussi uguali, a due distanze o distanza-angolo. In questa versione solo spigoli rettilinei tra due facce piane, e i raccordi che si incontrano in un vertice vengono raccordati a unghia. Arrotondare o smussare gli spigoli curvi nello schizzo ({{ui:Raccordo}} in uno schizzo, {{key:F}}) |
| Svuota | {{ui:Svuota}}: fare clic sulle facce piane da aprire, poi il pulsante. Un solo spessore di parete |
| Aprire un file STEP | {{ui:Apri}}: letto come triangoli, un corpo solido su cui costruire ([Aprire un file STEP](topic:import-step)) |
| Modificare una feature, poi OK | Fare clic sulla feature; cambiare i numeri a destra; si ricostruisce man mano che si digita. Nessun OK, nessun Annulla: usare {{key:Mod+Z}} |
| Modificare lo schizzo | Fare doppio clic sullo schizzo nella cronologia |
| Ricostruzione | Automatica dopo ogni modifica. Non esiste un tasto di ricostruzione |
| Sopprimi / ripristina | {{ui:Sopprimi}} / {{ui:Ripristina}} nel pannello di destra |
| Trascinare la barra di rollback | {{ui:Torna qui}} su una feature; fare clic su "Barra di rollback · avanza" per tornare |
| Trascinare una feature nell'albero per riordinarla | {{ui:Sposta su}} / {{ui:Sposta giù}} oppure {{key:Alt+Up}} / {{key:Alt+Down}}; rifiutato con il motivo quando violerebbe una dipendenza |
| Modificare le quote con doppio clic sul modello | Selezionare la feature: le quote del suo schizzo sono elencate nel pannello di destra |
| Accoppiamenti: coincidente, concentrico, distanza, angolo | {{ui:Giunto}} ({{key:J}}): scegliere una faccia piana su ogni parte; il giunto le mette faccia a faccia. **Centra su** un asse agisce come concentrico; **Offset** come distanza; **Angolo** come angolo |
| Componente fisso | La prima parte è fissata a terra; {{ui:Imposta come pezzo fissato a terra}} la cambia |
| Inserire componente | {{ui:Aggiungi copia}} oppure {{ui:Duplica}} (un'altra copia) oppure {{ui:Inserisci}} (da un file di parte) |
| Modificare una parte nell'assieme | {{ui:Modifica parte}}, poi {{ui:Indietro}} |
| Rilevamento interferenze | {{ui:Interferenza}} |
| Spostare un componente per vedere il movimento | Trascinare il cursore di angolo o offset di un giunto rotoidale o prismatico; {{ui:Verifica il movimento per le interferenze}} lo scansiona. Una parte senza giunti: **Sposta a mano** (frecce da trascinare, oppure valori digitati) |
| Misura / ispeziona | {{ui:Viste}}, poi {{ui:Misura}} ({{key:M}}): distanze, angoli, raggi, aree; {{ui:Proprietà di massa}} |
| Vista esplosa, distinta | In un assieme senza nulla selezionato: **Viste esplose** e **Distinta base** nel pannello di destra |
| Proprietà di massa | Il riquadro **Parte**: volume, area superficiale, dimensioni, del solido sfaccettato (leggermente basso sulle parti tonde). Nessuna massa: non ci sono ancora materiali |
| Salva, Salva con nome come STEP | {{ui:Salva}} scarica un `.partcraft.json`; {{ui:Esporta}} offre STL, 3MF, STEP esatto (AP242 o AP214), STEP sfaccettato, DXF e un disegno PDF |
| Creare un disegno dalla parte | {{ui:Disegno}}: un foglio A3 automatico con tre viste, isometrica, una sezione, un dettaglio, riferimenti, riquadri di tolleranza geometrica e simboli di finitura superficiale. Solo le dimensioni complessive sono quotate |
| Trascinare con il tasto centrale per ruotare | **Trascinamento sinistro** ruota qui. Il trascinamento con il tasto centrale o destro sposta la vista. La rotella ingrandisce nel punto del puntatore |
| Orientamento vista, Normale a | Menu {{ui:Viste}}; {{ui:Normale a}} per una faccia, un piano o uno schizzo scelti |
| Zoom adatta (F) | {{key:F}}, oppure {{ui:Adatta}} (in uno schizzo, {{key:F}} è lo strumento Raccordo) |
| Menu del tasto destro | Nessuno. Il trascinamento con il tasto destro sposta la vista; in uno schizzo, il clic destro termina una catena di linee |

:::tip
Se si conosce già SolidWorks, scegliere lo stile di menu {{ui:Albero degli elementi}} in {{ui:Impostazioni}} › {{ui:PartCraft}} › {{ui:Menu, tasti e mouse}}: una barra multifunzione con le schede Feature, Schizzo, Superfici, Valuta, Disegno, Assieme e Vista; il pulsante centrale ruota attorno al modello, {{key:Shift}} con il pulsante centrale sposta la vista, e il pulsante sinistro serve solo a scegliere. Vedi [Menu, tasti e mouse](topic:menus-keys-and-mouse).
:::

## Differenze che mettono in difficoltà

**L'intero schizzo è il profilo.** Estrusione e Rivoluzione usano ogni anello chiuso dello schizzo. Non si può scegliere una regione o un solo contorno di uno schizzo per una feature. Usare uno schizzo per ogni feature.

**Quale schizzo prende una feature.** Una feature usa lo schizzo appena chiuso oppure quello selezionato nella cronologia. Con nulla selezionato prende lo schizzo più recente che nessuna feature usa ancora. Se risulta quello sbagliato, selezionare lo schizzo giusto e scegliere di nuovo la feature.

**Le modifiche si applicano mentre si digita.** Non esiste una finestra della feature con OK e Annulla. Ogni numero ricostruisce subito, e {{key:Mod+Z}} è la via del ritorno. L'elenco di annullamento copre allo stesso modo modifiche di schizzo, feature e impostazioni.

**Una sovradefinizione non viene mai tollerata in silenzio.** Non esistono quote di riferimento (pilotate). Una quota già determinata dalle altre relazioni viene segnalata come sovradefinita ("è già implicita. Eliminarla."). Una quota in conflitto lascia la geometria invariata e diventa rossa. Eliminarne una, oppure annullare.

**Sweep e loft non sono ancora implementati; raccordi, smussi, svuotamenti e sformi hanno dei limiti.** Questa versione di PartCraft costruisce ogni parte con un kernel a mesh; l'etichetta della barra di stato dice sempre "Kernel a mesh". Raccordi e smussi funzionano su spigoli rettilinei tra due facce piane, e dove dei raccordi si incontrano in un vertice vengono raccordati a unghia, non fusi. Gli svuotamenti aprono, e gli sformi inclinano, solo facce piane. Le feature che richiedono un kernel esatto restano selezionabili, ma se scelte dicono "non ancora implementato". Vedi [Il kernel a mesh](topic:solid-kernels) e [Cosa non è ancora implementato](topic:not-built-yet).

**Due pulsanti chiamati Raccordo.** In uno schizzo, {{ui:Raccordo}} ({{key:F}}) arrotonda un angolo dello schizzo. Sulla parte, il {{ui:Raccordo}} del gruppo Feature arrotonda gli spigoli solidi (in questa versione, spigoli rettilinei tra facce piane). Non esistono sweep o loft in questa versione: vedi [Cosa non è ancora implementato](topic:not-built-yet).

**I fori richiedono punti liberi.** {{ui:Foro}} pratica fori nei punti creati con lo strumento Punto. I centri dei cerchi e gli estremi delle linee non contano.

**Attraverso tutto vale solo per i tagli.** Una sporgenza richiede una profondità. Non esistono ancora le condizioni finali "fino a vertice / superficie / successiva".

**Il solido è sfaccettato.** Il kernel a mesh costruisce le facce tonde da sfaccettature piane, quindi la vista, i volumi e le esportazioni STL e 3MF sono fatti di esse: **Curve** nel pannello della parte le rende più fini. L'esportazione STEP esatta non lo è: scrive le facce tonde sulle loro superfici vere.

**Solo millimetri.** Non esiste ancora un'impostazione in pollici. Moltiplicare le misure in pollici per 25.4 quando le si digitano.

**Y è verso l'alto.** Il piano Anteriore è rivolto verso chi guarda e Superiore guarda la parte dall'alto, come ci si aspetta, ma l'asse verticale del mondo è Y. Le esportazioni STL, 3MF e STEP esatto sono ruotate con Z verso l'alto; lo STEP sfaccettato mantiene Y verso l'alto.

**Gli accoppiamenti sono facce, non coppie di geometrie.** Un giunto parte sempre da due facce piane messe faccia a faccia. Per un perno in un foro, scegliere la faccia piana attorno al foro e lo spallamento del perno, poi impostare **Centra su** sull'asse del foro e sull'asse di rivoluzione del perno. Le parti non raggiunte dai giunti restano dove sono state inserite; non si possono trascinare. I giunti in un ciclo non vengono risolti.

**Il salvataggio è un download.** Non esiste un file che si sovrascrive continuamente. Ogni salvataggio è un nuovo file nella cartella dei download. Dare prima un nome alla parte, e tenere i file in una cartella di progetto.

**Niente menu contestuali, niente schede del gestore dei comandi.** Tutto si trova nella barra degli strumenti e nel pannello di destra, e la barra cambia con ciò che si sta facendo: gli strumenti di schizzo compaiono solo in uno schizzo, quelli dell'assieme solo in un assieme.

**I tasti sono singole lettere dentro uno schizzo.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} e {{key:S}} scelgono gli strumenti senza modificatori. Vedi [Tasti e mouse](topic:keyboard).
