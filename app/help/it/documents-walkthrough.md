---
title: Documenti e revisioni (l'archivio)
summary: Una guida passo passo su un lavoro reale: mettere sotto controllo una cartella di progetto con parti e assiemi, fare check-out di una parte, modificarla, fare check-in con una nota, rilasciarla, vedere cosa la usa e la distinta base, cosa vede una seconda persona mentre il file è bloccato, e come funziona con le cartelle cloud.
keywords: archivio, documenti, guida passo passo, esercitazione, check-out, check-in, revisione, rilascio, approvazione, blocco, cronologia, dove è usato, distinta base, bom, assieme, cartella cloud, cartella di progetto, due persone, cartella condivisa
from: 0a5e6983
---

## Obiettivo

Ana lavora al progetto Riverside Clinic insieme al collega Ben. Le parti e gli assiemi del progetto si trovano in un'unica cartella a cui hanno accesso entrambi (un'unità condivisa, una cartella sincronizzata o una cartella cloud). Alla fine, un file sarà passato dalla prima copia alla revisione rilasciata **A**, sarà stato modificato di nuovo come **B.1**, si vedrà chi ha fatto cosa e cosa vede Ben quando il file è bloccato.

Tutto è conservato in una cartella nascosta `.ccvault` accanto ai file: nessun server, nessun caricamento (l'eccezione è la cartella cloud, vedi l'ultimo passo). Per ogni pulsante e regola in un unico posto, consultare l'argomento *Documenti: check-out, revisioni e rilascio*, dove l'app lo prevede.

## 1. Impostare la cartella di progetto

1. Scegliere {{ui:Documents…}} nel gruppo **File** della barra degli strumenti.
2. Scegliere {{ui:Choose the project folder}} e selezionare la cartella che contiene le parti e gli assiemi del progetto. (Le cartelle di progetto funzionano in Studio e nei browser che possono aprire una cartella, come Chrome ed Edge. Negli altri browser il pannello lo segnala.)
3. Scegliere {{ui:Change}} accanto a **Utente:** e digitare il nome, `Ana` (se richiesto, anche il nome di questo computer). Il pannello ora riporta *Utente: Ana su* e il nome del computer in uso. Il nome finisce su tutte le operazioni.
4. Scegliere {{ui:Start a vault in this folder}} e digitare il nome del progetto, `Riverside clinic`. Il pannello riporta *Archivio avviato per Riverside clinic.*

## 2. Mettere un file sotto controllo

1. Aprire **File non presenti nell'archivio** e scegliere {{ui:Add}} accanto a `plates/Bracket.partcraft.json`.
2. Il file compare in **File nell'archivio** alla revisione **A.1**, stato **In lavorazione**. A.1 è la sua prima copia; l'archivio conserva una copia di ogni revisione.

## 3. Check-out, modifica, check-in

1. Scegliere {{ui:Open}} accanto a `plates/Bracket.partcraft.json`. La parte si apre in PartCraft e il pannello si chiude per lasciare visibile il modello. Riaprire il pannello da {{ui:Documents…}}.
2. Riaprire il pannello e scegliere {{ui:Check out}}. La riga ora riporta **In check-out per l'utente attuale**. Viene creato un file di blocco in `.ccvault/locks`; nessun altro può fare check-out di questo file finché non viene fatto il check-in.
3. Modificare la parte: cambiare una quota, aggiungere un foro. Il salvataggio è rifiutato se il file non è in check-out a proprio nome, e ne indica il motivo; Salva con nome funziona sempre per una copia personale.
4. Aprire il pannello, scegliere {{ui:Check in}} e digitare cosa è cambiato (`Spostata la porta`). Il pannello riporta *check-in effettuato come A.2*. Il file nella cartella di progetto è ora la parte che era aperta, e il blocco è stato rimosso. Il check-in senza modifiche mantiene la revisione.

Se si cambia idea, {{ui:Undo check-out}} restituisce il file senza una nuova revisione.

## 4. Revisione e rilascio

1. Scegliere {{ui:Send for review}}. Lo stato diventa **In revisione** e il file diventa di sola lettura.
2. Prima di approvare, scegliere {{ui:Project settings}} ed elencare chi può approvare (un nome per riga), per esempio `Ben` e `Carla`, e attivare la regola per cui l'approvatore deve essere diverso dall'autore. Scegliere {{ui:Save settings}}. Da questo momento l'archivio stesso rifiuta chiunque altro.
3. Ben (o Carla) sceglie {{ui:Approve}} e digita il nome dell'approvatore. Lo stato diventa **Rilasciato** e la revisione diventa **A**, con *approvato da* e il nome. Un file rilasciato è di sola lettura. {{ui:Send back}} lo riporterebbe a In lavorazione, con un motivo.

Il nome dell'approvatore è quello digitato nel pannello: è una registrazione di chi ha approvato, non una prova d'identità.

## 5. Una nuova revisione

1. Sul file rilasciato, scegliere {{ui:New revision}}. La revisione prende la lettera successiva.
2. Modificare il file, poi {{ui:Check in}}. La revisione è **B.1**, in lavorazione. Rilasciarla allo stesso modo e diventerà **B**. {{ui:Undo check-out}} prima del primo check-in la lascia a **A**.

Le lettere delle revisioni seguono la sequenza A, B … Z, AA, AB. Se lo standard adottato omette alcune lettere, l'impostazione del progetto *Usa la sequenza ASME Y14.35* salta I, O, Q, S, X e Z per le revisioni successive.

## 6. Vedere cosa è successo

Scegliere il nome del file per aprirne i dettagli:

- **{{ui:History}}**: ogni evento, dal più recente, con chi, quale computer e quando: *Check-in A.2* di Ana, *Rilasciato* da Ben, e così via.
- **{{ui:Revisions}}**: la tabella delle revisioni: ogni revisione conservata, con data, chi ha fatto il check-in, la nota e chi l'ha approvata. L'archivio conserva una copia di ciascuna in `.ccvault/revs`.
- **{{ui:Uses}}**: le parti di un assieme.
- **{{ui:Used by}}**: Usato da elenca ogni assieme dell'archivio che contiene questa parte: modificando una staffa si sa quali assiemi verificare.

## Assiemi: cosa usano e la distinta base

Inserire un assieme (`.partcraft.json`, salvato dalla modalità Assieme) nella cartella e aggiungerlo. Scegliere il suo nome: **Usa** elenca le parti che contiene, con la revisione e lo stato di ciascuna; **Usato da** su una parte elenca ogni assieme che la contiene. {{ui:Bill of materials (CSV)}} salva l'intero elenco delle parti, livello per livello, con quantità, revisioni e stati, per un foglio di calcolo. Modificando una staffa, **Usato da** indica quali assiemi controllare.

## 7. Cosa vede Ben mentre il file è bloccato

Ora fare di nuovo check-out del file, e chiedere a Ben di aprire la stessa cartella di progetto sul suo computer e di aprire il pannello. Sulla riga del file lui vede **In check-out da Ana su** il computer di Ana **dalle** ore indicate, e nessun pulsante {{ui:Check out}}. Se tenta comunque, l'archivio rifiuta: il blocco è un file che il sistema non crea due volte, quindi due persone non possono avere entrambe il file, nemmeno nello stesso istante, quando la cartella è su disco in Studio. (In un browser la cartella garantisce solo un blocco di massima, e il pannello lo segnala sotto **Cartella**.)

Se Ana è assente e Ben ha bisogno del file, {{ui:Break check-out}} lo libera. Va digitato un motivo; viene registrato nel log insieme al nome di chi aveva il check-out. Quando il progetto elenca gli amministratori, solo loro possono farlo. Un check-out più vecchio del limite di obsolescenza (14 giorni per impostazione predefinita) è segnalato come *da molto tempo*. Dopo la forzatura, il check-in tardivo di Ana viene rifiutato, così le due persone non possono sovrascriversi a vicenda.

## 8. Cartelle cloud

Una cartella cloud è una cartella di progetto conservata nello spazio cloud del team, così il team non ha bisogno di un'unità condivisa. In Studio, con l'accesso effettuato al proprio account CadCraft, il pannello mostra {{ui:Open a cloud folder}} accanto a {{ui:Choose the project folder}}. Scegliere il pulsante e selezionare la cartella, elencata come spazio di lavoro / cartella. Il proprietario dello spazio di lavoro crea prima la cartella, e lo spazio cloud del team deve essere attivo. Tutto quanto descritto sopra funziona allo stesso modo; il server crea il blocco, che è rigoroso tra persone. Se non è stato effettuato l'accesso, il pannello lo segnala. In una normale scheda del browser il pulsante cloud non è offerto: usare Studio.

## Provare

Eseguire gli otto passi sopra con una copia di un file reale. Per i passi a due persone serve un'altra persona, oppure due finestre con due nomi. Se si prova con una cartella condivisa reale, la pagina di test della Community elenca un controllo che chiede proprio questo e accetta i risultati.
