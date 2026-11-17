---
title: Feature e relative opzioni
summary: Ogni feature nella barra degli strumenti con le sue impostazioni, i valori predefiniti e i limiti, dall'estrusione al raccordo, allo svuotamento e ai solidi STEP importati, le azioni che tutte le feature condividono e le impostazioni della parte.
keywords: feature, non ancora implementato, estrudi, taglia, rivoluzione, taglio di rivoluzione, foro, alesatura, serie lineare, serie circolare, specchio, raccordo, smusso, svuota, importa, opzioni, predefiniti, impostazioni, risoluzione, curve, sfaccettature, sopprimi, ritorno indietro
from: ab3a598e
---

Le feature sono elencate nella cronologia nell'ordine in cui sono state create, e vengono ricostruite dall'alto in basso. Ognuna prende il nome dal suo tipo con un numero: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft costruisce ogni feature con il kernel a mesh. Raccordo e smusso funzionano su spigoli rettilinei tra due facce piane, e Svuota apre facce piane. I solidi importati richiedono un kernel esatto, che questa versione non ha: non sono ancora implementati, e la loro sezione sotto descrive come li mantiene una parte creata in una versione precedente. Vedi [Il kernel a mesh](topic:solid-kernels) e [Cosa non è ancora implementato](topic:not-built-yet).

## Schizzo

| Impostazione | Note |
|---|---|
| Piano | Piano Anteriore, Superiore o Destro, oppure una faccia piana. Mostrato, non modificato: per spostare uno schizzo, creane uno nuovo |
| Stato | Completamente definito, Sottodefinito (con i gradi di libertà), Sovradefinito o Vuoto |
| Geometria, Relazioni | Quante curve, punti e relazioni |
| Quote guida | Ogni quota dello schizzo, modificabile |

Pulsanti: {{ui:Modifica schizzo}}, {{ui:Esporta come DXF}}.

## Estrudi e Taglia

{{ui:Estrudi}} e {{ui:Taglia}} creano la stessa feature, partendo da impostazioni diverse.

| Impostazione | Scelte | Estrudi parte da | Taglia parte da |
|---|---|---|---|
| Operazione | Sporgenza (aggiunge materiale), Taglia (rimuove materiale), Interseca (mantiene la sovrapposizione), Nuovo corpo (non ancora implementato in questa versione) | Sporgenza | Taglia |
| Terminazione | Cieca (una profondità), Piano medio (in entrambe le direzioni), Passante | Cieca | Passante |
| Profondità (mm) | Sopra 0, fino a 1,000,000 | 10 | 10 |
| Inverti direzione | Disattivo / attivo | Disattivo | Disattivo |

- Profilo: ogni ciclo chiuso di linee piene, cerchi e archi nello schizzo. I cicli dentro altri cicli sono fori.
- Passante funziona solo per i tagli. Attraversa tutta la parte sul lato scelto.
- Un taglio entra nel materiale, lontano dal lato esterno del piano dello schizzo; Inverti lo capovolge.

## Rivoluzione e taglio di rivoluzione

| Impostazione | Scelte | Predefinito |
|---|---|---|
| Operazione | Sporgenza, Taglia | Sporgenza ({{ui:Rivoluzione}}), Taglia ({{ui:Altro}} › {{ui:Taglio di rivoluzione}}) |
| Angolo (°) | Sopra 0, fino a 360 | 360 |
| Asse | Prima linea di mezzeria, qualsiasi linea o linea di mezzeria dello schizzo, oppure una feature asse che giace nel piano dello schizzo | Prima linea di mezzeria |

- Il profilo deve restare da un lato dell'asse. Può toccarlo.
- L'asse di una rivoluzione può essere usato dalle serie circolari e dai giunti dell'assieme.

## Foro

| Impostazione | Scelte | Predefinito |
|---|---|---|
| Tipo | Semplice, Alesatura | Semplice |
| Diametro (mm) | Sopra 0 | 6 |
| Passante | Attivo / disattivo | Attivo |
| Profondità (mm) | Quando Passante è disattivo | 10 |
| Alesatura ⌀ | Più largo del foro | 11 |
| Profondità di alesatura | Meno profondo di un foro cieco | 6 |
| Inverti direzione | Disattivo / attivo | Disattivo |

- Un foro in ogni punto isolato dello schizzo (punti creati con lo strumento Punto). Il pannello indica quanti sono.
- I fori vengono praticati perpendicolari al piano dello schizzo, nel materiale.
- L'asse di ogni foro può essere usato dai giunti dell'assieme ("Hole1, hole 2").

## Serie lineare

| Impostazione | Scelte | Predefinito |
|---|---|---|
| Feature da copiare | Qualsiasi feature solida sopra di essa | La feature selezionata, altrimenti l'ultima feature solida |
| Direzione | Asse X, Y, Z; una linea di uno schizzo precedente; l'asse di una rivoluzione; uno spigolo scelto | Asse X (o lo spigolo scelto quando è stata aggiunta) |
| Spaziatura (mm) | Qualsiasi numero | 20 |
| Numero | Da 1 a 1000, compreso l'originale | 3 |
| Inverti direzione | Disattivo / attivo | Disattivo |

## Serie circolare

| Impostazione | Scelte | Predefinito |
|---|---|---|
| Feature da copiare | Come per Lineare | Come per Lineare |
| Asse | Come per Direzione sopra | L'asse dell'ultima rivoluzione, altrimenti l'asse Y (o lo spigolo scelto) |
| Angolo (°) | Sopra 0, fino a 360. 360 distribuisce le copie in modo uniforme su tutto il giro; un valore minore le distribuisce sull'angolo | 360 |
| Numero | Da 1 a 1000, compreso l'originale | 6 |
| Inverti direzione | Disattivo / attivo | Disattivo |

## Specchio

| Impostazione | Scelte | Predefinito |
|---|---|---|
| Specchio | L'intero corpo (come costruito finora), oppure feature scelte | La feature selezionata, altrimenti l'intero corpo |
| Piano di specchiatura | Piano Anteriore, Superiore o Destro; una faccia piana | Piano Destro, o la faccia piana scelta quando è stata aggiunta |

## Raccordo e smusso

In questa versione il kernel a mesh li costruisce su spigoli rettilinei tra due facce piane (angoli esterni o interni), con un solo raggio. Uno spigolo tondo mostra "Raccordo: in questa versione solo spigoli rettilinei tra due facce piane (li costruisce il kernel a mesh). Arrotonda o smussa gli spigoli curvi nello schizzo."; dove gli spigoli arrotondati si incontrano in un angolo vengono raccordati a piega, e la feature avvisa "Raccordo con il kernel a mesh: dove gli spigoli arrotondati si incontrano sono raccordati a piega, non fusi." Tutti i tipi di smusso (distanza uguale, due distanze, distanza e angolo, con **Inverti lati**) funzionano. Vedi [Arrotondare, smussare e svuotare](topic:fillet-chamfer-shell).

| Impostazione | Raccordo | Smusso |
|---|---|---|
| Raggio (mm) (Raccordo) | Sopra 0 | 2 |
| Distanza (mm) (Smusso) | Sopra 0, uguale su entrambe le facce | 1 |
| **Spigoli** | Quanti | Quanti |

- Gli spigoli si scelgono prima di scegliere il pulsante ({{key:Shift}}+clic per più spigoli), oppure si sceglie il pulsante con nulla selezionato e si cliccano gli spigoli dopo.
- {{ui:Scegli spigoli}} (o doppio clic sulla feature) cambia gli spigoli.
- Ogni spigolo è elencato con le due facce che unisce ("Extrude1 faccia terminale × Extrude1 lato"), con **Rimuovi**.
- Gli spigoli sono mantenuti dalle due facce che uniscono, quindi sopravvivono ai cambi di dimensione a monte.

## Svuota

Lo costruisce il kernel a mesh. Solo le facce piane possono essere aperte ("Svuota: in questa versione apre solo facce piane (lo costruisce il kernel a mesh)."); le pareti di spessori diversi non sono ancora implementate. Vedi [Arrotondare, smussare e svuotare](topic:fillet-chamfer-shell).

| Impostazione | Scelte | Predefinito |
|---|---|---|
| Parete (mm) | Sopra 0 | 2 |
| Pareti verso l'esterno (le facce restano dentro) | Disattivo: le pareti vanno verso l'interno. Attivo: le pareti vanno verso l'esterno | Disattivo |
| Facce aperte | Le facce rimosse, almeno una, con **Rimuovi** | Le facce scelte quando è stata aggiunta |

{{ui:Scegli facce}} cambia le facce aperte.

## Solido importato

Creato aprendo un file STEP, STL, OBJ o 3MF: un corpo solido di triangoli senza cronologia propria ([Aprire un file STEP](topic:import-step), [Aprire un file STL, OBJ o 3MF](topic:open-meshes)). Mostra il file da cui proviene e ciò che l'importazione ha riparato; **Unità nel file**, **Verso l'alto nel file** e **Usa per** restano modificabili. Un solido STEP importato da una versione precedente con il kernel esatto resta nella cronologia contrassegnato come non implementato; apri di nuovo il file STEP per importarlo come triangoli.

| Impostazione | Scelte | Predefinito |
|---|---|---|
| Verso l'alto nel file | Z in alto (la maggior parte dei CAD), Y in alto | Z in alto |

Serie e specchi possono copiare un solido importato, ma non un raccordo, uno smusso o una svuotatura.

## Cosa hanno tutte le feature

In fondo al pannello di ogni feature:

| Pulsante | Funzione |
|---|---|
| {{ui:Sopprimi}} / {{ui:Ripristina}} | Disattiva o attiva. Le feature che ne hanno bisogno non vengono costruite mentre è disattivata |
| {{ui:Torna qui}} | Costruisce solo le feature sopra questa. Le nuove feature vanno inserite nella barra di rollback |
| {{ui:Sposta su}} / {{ui:Sposta giù}} | Riordina, quando nulla di ciò che usa finirebbe sotto di essa. Altrimenti sono in grigio con il motivo |
| {{ui:Elimina}} | Elimina la feature e, dopo conferma, ogni feature che la usa |
| Nome | Rinominala (fino a 60 caratteri) |

Le feature con uno schizzo elencano anche **Quote dello schizzo**, modificabili sul posto.

## Stati nella cronologia

| Stato | Mostrato come | Significato |
|---|---|---|
| Costruita | Normale | Tutto a posto |
| Avviso | ⚠ | Costruita, con qualcosa da controllare: "Sovradefinito: 1 relazione non è necessaria." o "Dopo questa operazione non resta nulla della parte." |
| Errore | ⚠ errore, rosso | Non costruibile; il messaggio ne indica il motivo |
| Non costruita | ⚠ non costruita | Richiede una feature fallita, soppressa o riportata indietro, oppure un kernel esatto, che questa versione non ha ("Sweep: non ancora implementato. …") |
| Soppressa | spenta | Disattivata |
| Riportata indietro | in grigio, sotto la barra di rollback | Non costruita finché non si riporta in avanti |

## Impostazioni della parte

Clicca in uno spazio vuoto in modo che nulla sia selezionato. Il pannello destro mostra **Parte**:

- **Nome**: il nome della parte, usato per i nomi dei file e per il cartiglio del disegno (fino a 120 caratteri).
- **Curve**: vedi sotto.

### Risoluzione delle curve

Il kernel a mesh costruisce il solido da sfaccettature piane, quindi la vista, STL, 3MF, lo STEP a facce, il volume e le viste del disegno seguono tutti **Curve**: quante sfaccettature per giro completo.

| Impostazione | Sfaccettature per giro | Volume di una forma tonda |
|---|---|---|
| Grossolana (32 per giro) | 32 | Circa lo 0.64 % sotto il valore vero |
| Normale (64 per giro) | 64 | Circa lo 0.16 % sotto (predefinito) |
| Fine (128 per giro) | 128 | Circa lo 0.04 % sotto |
| Molto fine (256 per giro) | 256 | Circa lo 0.01 % sotto |

Curve più fini danno esportazioni e viste più lisce, e ricostruzioni più lente. L'impostazione viene salvata nel file della parte.

## Non ancora implementato

Raccordi a raggio variabile, raccordi e smussi su spigoli tondi, svuotature di facce curve, sformo su facce curve, sweep, loft, nervatura, solidi STEP con facce curve esatte, nuovi corpi, conicità, "fino a" una faccia o un vertice, e riferimenti sulle facce e sugli spigoli del solido richiedono un kernel esatto, che questa versione non ha. Inoltre non ancora implementati: fori maschiati e svasati. Vedi [Cosa non è ancora implementato](topic:not-built-yet).
