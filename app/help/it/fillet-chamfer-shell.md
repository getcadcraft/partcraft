---
title: Arrotondare, smussare e svuotare con Raccordo, Smusso e Svuota
summary: Scegli gli spigoli e aggiungi raccordi a raggio costante o variabile e smussi a distanza uguale, a due distanze o a distanza e angolo; svuota una parte con Svuota scegliendo le facce da aprire, cambia gli spigoli o le facce usati da una feature e risolvi i problemi più comuni.
keywords: raccordo, arrotondamento, fusione, smusso, svuota, svuotamento, spessore parete, spigoli, facce, scegli spigoli, shift clic, faccia aperta, kernel esatto, kernel a mesh, non implementato
from: e41c1c12
---

:::note
**In questa versione** PartCraft costruisce raccordi e smussi con il kernel a mesh, solo su **spigoli rettilinei tra due facce piane**: spigoli di scatole e spigoli rettilinei di estrusioni e tagli, angoli esterni o interni (un angolo interno riceve materiale). Gli spigoli arrotondati, come gli orli dei fori, e un raggio che cambia lungo lo spigolo non sono ancora implementati. Dove due spigoli arrotondati si incontrano in un angolo, gli arrotondamenti sono raccordati (formano una piega vivace), non fusi. **Svuota** funziona anch'esso, costruito dal kernel a mesh: apre solo facce piane, le pareti di spessori diversi non sono ancora implementate, ed è lento su parti con molte facce tonde. Vedi [Cosa non è ancora implementato](topic:not-built-yet).
:::

{{ui:Raccordo}} arrotonda gli spigoli, {{ui:Smusso}} li smussa e {{ui:Svuota}} svuota la parte. Tutti e tre lavorano su spigoli e facce del solido e sono costruiti dal kernel a mesh. I loro arrotondamenti sono sfaccettati come ogni faccia tonda (**Curve** ne stabilisce la finezza); le facce tonde sono cilindri che puoi selezionare e misurare (vedi [Il kernel a mesh](topic:solid-kernels)).

## Raccordare o smussare spigoli

### Scegli prima gli spigoli

1. Clicca uno spigolo della parte. Tutto lo spigolo si evidenzia, e il pannello destro indica **Spigolo**: il suo tipo (Rettilineo, Cerchio o arco, Curva), la lunghezza e le facce su cui giace.
2. Per aggiungere altri spigoli, fai {{key:Shift}}+clic su di essi. Ognuno viene contrassegnato; fai {{key:Shift}}+clic su uno spigolo contrassegnato per toglierlo. L'intestazione del pannello li conta ("4 spigoli") e la barra di stato indica "4 spigoli scelti. Raccordo o Smusso li arrotonda; Shift+clic ne sceglie altri, Esc li cancella."
3. Scegliere {{ui:Raccordo}} o {{ui:Smusso}} nella barra degli strumenti, oppure gli stessi pulsanti nel pannello destro.

La feature viene aggiunta con tutti gli spigoli scelti: un arrotondamento di 2 mm, o uno smusso di 1 mm. La barra di stato indica, per esempio, "Fillet1 aggiunto (4 spigoli). Cambia la sua dimensione a destra; Scegli spigoli ne cambia la selezione."

### Oppure aggiungi prima la feature

1. Senza nulla scelto, scegliere {{ui:Raccordo}} o {{ui:Smusso}}.
2. PartCraft passa alla scelta: l'intestazione del pannello destro indica "Fillet1: scelta", la parte si mostra com'era prima del raccordo (il pannello lo dice), e la barra degli strumenti mostra {{ui:Fine}}.
3. Clicca ogni spigolo per aggiungerlo; cliccalo di nuovo per toglierlo. La barra di stato li conta.
4. Scegliere {{ui:Fine}} (o {{ui:Fine selezione}} nel pannello), oppure premere {{key:Esc}} o {{key:Enter}}.

### Impostazioni

| Impostazione | Raccordo | Smusso |
|---|---|---|
| Dimensione | **Raggio (mm)**, predefinito 2 | **Distanza (mm)** dal bordo su entrambe le facce, predefinito 1 |
| **Spigoli** | Quanti | Quanti |

L'elenco sotto nomina ogni spigolo con le due facce che unisce, per esempio "Spigolo 1: faccia terminale di Extrude1 × lato di Extrude1". **Rimuovi** ne toglie uno. {{ui:Scegli spigoli}} torna alla scelta. Fare doppio clic sulla feature nella cronologia fa lo stesso.

Gli spigoli sono ricordati dalle due facce che uniscono, quindi restano sullo spigolo giusto quando cambi una quota più in alto nella cronologia.

### Raggi variabili e tipi di smusso

- **Raggio variabile** (raccordo): non ancora implementato in questa versione ("Un raccordo il cui raggio cambia lungo lo spigolo: non ancora implementato (richiede un kernel esatto). Dagli un solo raggio."). Con un kernel esatto: attivalo e imposta **Raggio finale (mm)**. Il raggio cambia in modo lineare da **Raggio** a un'estremità di ogni spigolo fino a **Raggio finale** all'altra; **Inverti le estremità** lo capovolge.
- **Tipo** (smusso): **Distanza uguale**, **Due distanze** (una **Seconda distanza** sull'altra faccia) o **Distanza e angolo** (la distanza su una faccia, lo smusso con **Angolo (°)** rispetto a quella faccia). **Inverti lati** mette la prima distanza sull'altra faccia.

## Svuotare una parte

1. Clicca la faccia piana da lasciare aperta, per esempio la parte superiore di una scatola. Oppure fai {{key:Shift}}+clic su più facce.
2. Scegliere {{ui:Svuota}} nella barra degli strumenti, oppure {{ui:Svuota, apre questa faccia}} nel pannello della faccia.

La parte diventa una parete di 2 mm con le facce scelte aperte. Impostazioni:

| Impostazione | Cosa fa | Predefinito |
|---|---|---|
| **Parete (mm)** | Lo spessore della parete | 2 |
| **Le pareti crescono verso l'esterno (le facce restano dentro)** | Attivo: le pareti vengono aggiunte all'esterno, quindi l'interno mantiene la dimensione della parte | Disattivo: le pareti vanno verso l'interno e l'esterno mantiene la sua dimensione |
| **Facce aperte** | Quante facce vengono rimosse | |

Verso l'interno, le pareti hanno esattamente lo spessore indicato: gli angoli esterni restano vivi, gli angoli interni risultano arrotondati (raggio = la parete), e un foro passante nella parte riceve attorno un tubo di parete. Verso l'esterno, le pareti sono aggiunte all'esterno della superficie originale, che diventa la cavità, e gli spigoli esterni risultano arrotondati. Le facce interne prendono il nome dalle facce che spostano, così puoi sceglierle.

Si possono aprire solo facce piane: scegliendone una curva si legge "Svuota: in questa versione apre solo facce piane (lo costruisce il kernel a mesh)." Uno svuotamento è lento su parti con molte facce tonde (diversi secondi ogni mille triangoli): usa un'impostazione **Curve** più grossolana mentre progetti.

{{ui:Scegli facce}} cambia le facce aperte, nello stesso modo in cui si scelgono gli spigoli. L'elenco nomina ognuna, per esempio "Faccia 1: faccia terminale di Extrude1". Uno svuotamento senza facce aperte non è consentito: "Scegli le facce da rimuovere (aperte), poi svuota."

## L'ordine conta

Le feature si costruiscono dall'alto in basso. Un raccordo prima di uno svuotamento viene svuotato insieme alla parte, quindi anche l'interno riceve angoli arrotondati. Un raccordo dopo uno svuotamento arrotonda solo gli spigoli che scegli. Sposta le feature con {{ui:Sposta su}} e {{ui:Sposta giù}} (vedi [Modificare una parte dalla sua cronologia](topic:edit-history)).

Serie e specchi non possono copiare un raccordo, uno smusso o uno svuotamento: "Fillet1 modifica spigoli o pareti del corpo; non può essere copiato. Copiare le feature che creano solidi (estrusioni, rivoluzioni, fori, importazioni)." Prima fai la serie dei fori o dei tagli, poi raccorda in un solo raccordo tutti gli spigoli delle copie.

## Quando non riesce

| Messaggio | Cosa fare |
|---|---|
| "Un arrotondamento di 5 mm non sta qui (è troppo grande per una faccia accanto a uno degli spigoli, oppure gli spigoli si incontrano in un angolo che il kernel non sa fondere)." | Usa un raggio più piccolo, oppure raccorda meno spigoli alla volta (più feature di raccordo, la più piccola per ultima) |
| "Uno spigolo che arrotonda non c'è più: lo spigolo tra Extrude1 e Cut2." | Una modifica precedente ha rimosso quello spigolo. Scegli {{ui:Scegli spigoli}}, rimuovi lo spigolo rosso e scegline uno nuovo |
| "Lo svuotamento non può essere creato con questo spessore (…)." | La parete è più spessa di una parte stretta del modello, o di un raggio di raccordo. Rendi la parete più sottile, o i raccordi più grandi della parete |
| "Questa faccia non ha un nome che la cronologia possa seguire; sceglierne un'altra." | Scegli una faccia creata da una feature (la maggior parte delle facce lo è) |
| "Raccordo: in questa versione solo spigoli rettilinei tra due facce piane (li costruisce il kernel a mesh). Arrotonda o smussa gli spigoli curvi nello schizzo." (anche Smusso) | Uno spigolo scelto è tondo, come l'orlo di un foro, oppure giace su una faccia curva. Rimuovilo con {{ui:Scegli spigoli}}, e arrotonda o smussa quell'angolo nello schizzo |
| "Un raccordo il cui raggio cambia lungo lo spigolo: non ancora implementato (richiede un kernel esatto). Dagli un solo raggio." | Deseleziona **Raggio variabile** |
| "Raccordo con il kernel a mesh: dove gli spigoli arrotondati si incontrano sono raccordati a piega, non fusi." (⚠ nella cronologia) | Un avviso, non un errore: la parte è costruita. Gli spigoli scelti si incontrano in un angolo, e gli arrotondamenti si incontrano lì in una piega vivace. Raccorda meno spigoli, oppure accetta la piega |
| "Svuota: in questa versione apre solo facce piane (lo costruisce il kernel a mesh)." | Una faccia aperta è curva. Usa {{ui:Scegli facce}} e rimuovila; apri solo facce piane |

## Limiti

In questa versione raccordi e smussi funzionano solo su spigoli rettilinei tra due facce piane, con un solo raggio, e gli arrotondamenti che si incontrano in un angolo sono raccordati a piega. Gli svuotamenti aprono solo facce piane. Con un kernel esatto, un raccordo variabile cambia in modo lineare lungo ogni spigolo (una legge per feature; nessun raggio impostato in punti lungo di esso). Raccordi di facce, raccordi a tutto tondo e svuotamenti con pareti di spessori diversi non sono ancora implementati.
