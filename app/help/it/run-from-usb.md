---
title: Eseguire da una chiavetta USB
summary: Cosa scrivono gli strumenti di ingegneria e dove, così CadCraft Studio può girare da una chiavetta USB o da qualsiasi cartella senza installazione e senza diritti di amministratore: impostazioni, generatori, cache e file delle parti, e cosa resta sulla chiavetta.
keywords: usb, portatile, senza installazione, amministratore, admin, impostazioni, cartella dati, generatori, dove vengono scritti i file, offline, privacy, accesso all'host
from: 263efc79
---

Gli strumenti di ingegneria (generatori, libreria di ingegneria, verifiche e file di dati) non richiedono **diritti di amministratore** e non richiedono **installazione**. Scrivono solo ciò che è elencato qui, e nient'altro.

| Cosa | Dove viene conservato |
|---|---|
| Le tue parti, con i corpi generati, le schede dati e le verifiche | Il file della parte che salvi (`.partcraft.json`), nel punto in cui lo salvi. |
| Generatori aperti da file | Nella memoria propria dell'app: la memoria locale del browser in una pagina web, e la cartella `data` accanto al programma nella versione portatile di Studio. Al massimo 20. |
| Impostazioni (dimensioni dei voxel impostate, thread del solutore, layout) | Nella stessa memoria dell'app. |
| Schede dati, campi, mesh | Solo dove li salvi: il download va dove scegli. |

Gli strumenti non effettuano **chiamate di rete proprie**: i generatori forniti sono file nella cartella dell'app, la libreria e le verifiche girano sul computer in un worker che non può raggiungere la rete, e i dati di ingegneria (proprietà di acqua e aria, materiali) sono dentro l'app. Un generatore aperto da un file viene letto sul computer e non va da nessuna parte.

## Archivio zip portatile per Windows e Linux

La versione portatile di Studio per Windows conserva impostazioni, cache e add-on in una cartella `data` accanto al programma. L'AppImage Linux le conserva accanto a sé quando un file chiamato `portable` si trova accanto ad essa; senza quel file usa la cartella home. Non esiste una forma portatile per Mac: il sistema impedisce a un'app scaricata di scrivere accanto a sé. Le note sulla versione portatile della shell (guida di `Studio`) elencano ciò che il programma scrive.

## Accesso all'host

Qui nulla chiede l'accesso all'host. Stampanti, macchine seriali e dispositivi USB sono separati: chiedono l'accesso quando un lavoro ne ha bisogno, una volta per dispositivo, e né i generatori né le verifiche li toccano.
