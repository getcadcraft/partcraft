---
title: Modellare una parte insieme con Live TeamWork
summary: Cosa cambia in PartCraft durante una sessione Live TeamWork da CadCraft Studio: le feature di tutti in un solo albero, ogni finestra che costruisce lo stesso solido, il proprio annullamento, e l'unione da un browser sulla stessa rete.
keywords: live, live teamwork, studio live, insieme, collaborare, sessione, condividi live, unisciti, albero delle feature, cronologia, ricostruzione, cursore, puntatore, vedersi a vicenda, nomi, colore, selezione, annulla, host
from: 1809b96c
---

## Cosa imparerai

Cosa succede a una parte mentre più persone la modellano nello stesso momento. CadCraft Studio avvia e unisce la sessione Live TeamWork (Condividi, Unisciti); questa pagina riguarda la parte stessa.

## Tutti modellano insieme

Tutti lavorano sullo stesso albero delle feature: schizzi, estrusioni, fori, serie, raccordi, parametri. Le proprie modifiche compaiono subito; quelle degli altri compaiono un attimo dopo che le hanno fatte. Viaggia solo l'albero: ogni finestra costruisce il solido da sola, e il kernel di PartCraft costruisce lo stesso solido dallo stesso albero in ogni finestra.

- **Due persone cambiano una feature:** impostazioni diverse (una la profondità, l'altra la condizione di fine) vengono conservate entrambe; la stessa impostazione va alla modifica successiva.
- **Uno schizzo** viaggia per intero: quando due persone modificano lo stesso schizzo nello stesso momento, vince la modifica successiva. Concordare chi disegna quale schizzo.
- **Una feature costruita su una appena eliminata** (un'estrusione di uno schizzo rimosso, un foro su una faccia rimossa) viene annullata, e la barra di stato dice perché.
- **Riordinare l'albero** è controllato: se due persone trascinano feature nello stesso momento, il secondo spostamento viene annullato.

## Vedersi a vicenda

Ogni persona nella sessione ha un proprio colore. Si vede il puntatore di ciascuno come una freccia nel suo colore, con il suo nome accanto, sulla faccia su cui sta puntando. Quando ha una feature selezionata nell'albero, il suo nome compare dopo il suo.

Puntatori, nomi e selezioni valgono solo per la sessione: non vengono mai salvati nel file né entrano nell'annullamento di nessuno. Scorrono fino al punto in cui si trova ciascuno, quindi restano fluidi anche su una connessione lenta.

## L'annullamento annulla il proprio lavoro

{{key:Mod+Z}} annulla la propria ultima modifica e lascia stare quelle degli altri. Quando qualcuno ha cambiato la stessa cosa nel frattempo, non si annulla nulla e la barra di stato dice chi.

## Unirsi da un browser

Un collega senza Studio può inquadrare con un telefono, un tablet o un computer sulla stessa rete l'immagine sotto il codice dell'host. PartCraft si apre nel browser, si riempie con la parte dell'host una volta che l'host ti ammette, e la costruisce. Un link di invito permette di unirsi da un'altra rete: l'host ha bisogno di una postazione del Team Cloud Plan per l'app, gli altri si uniscono gratis, e il link funziona solo finché la sessione dell'host è aperta.

## Quando la sessione finisce

Solo l'host salva la parte. Gli altri tengono una copia non salvata: salvarla se si vuole conservarla.

:::note
Gli assiemi non sono ancora condivisi in una sessione: aprire la parte stessa per lavorarci insieme.
:::
