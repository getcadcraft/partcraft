---
title: Configurazioni e tabelle di progetto
summary: Conservare più dimensioni e versioni di una parte come configurazioni con nome, salvate nel file della parte, con caratteristiche attivate o disattivate in ciascuna, passare da una all'altra con un clic, importarle o esportarle come tabella di progetto CSV, oppure costruirle tutte dalla riga di comando.
keywords: tabella di progetto, configurazioni, configurazione, dimensioni, famiglia di parti, csv, foglio di calcolo, varianti, guidato da tabella, famiglia di parti, sopprimi, soppresso, disattivare una caratteristica, opzioni, con o senza, configuratore
from: 17249afb
---

Una **configurazione** è una dimensione della parte: un insieme con nome di valori per i suoi parametri. La parte conserva le sue configurazioni nel proprio file, quindi viaggiano con essa. Una **tabella di progetto** è la stessa cosa come file CSV, una riga per configurazione.

Le configurazioni impostano i **parametri**, quindi aggiungere prima quelli (vedi [Guidare una parte con parametri](topic:parameters)). Una configurazione memorizza i parametri che sono numeri semplici; i parametri ricavati da altri (come `area = w * d`) seguono da soli.

## Salvare una configurazione

1. Nella scheda {{ui:Parametri}}, impostare i parametri per una dimensione della parte.
2. Sotto **Configurazioni**, digitare un nome (per esempio `Grande`) e premere {{ui:Salva valori correnti}} oppure {{key:Enter}}.

La nuova configurazione viene segnata come **attiva**. Se si modifica poi un parametro, compare **attiva, modificata da allora**, così si sa che la parte non corrisponde più ad essa.

## Passare, aggiornare, rinominare, eliminare

- {{ui:Applica}} imposta i parametri ai valori di quella configurazione e ricostruisce la parte.
- {{ui:Aggiorna}} salva i valori correnti in quella configurazione.
- Per rinominarne una, digitare il nuovo nome nella sua casella e premere {{key:Enter}}.
- {{ui:Elimina}} rimuove la configurazione. I parametri mantengono i loro valori.

Ciascuna di queste operazioni è un solo passo: {{key:Mod+Z}} torna indietro. Se si rinomina un parametro, ogni configurazione segue il nuovo nome; se si elimina una configurazione, questa viene tolta da esse.

## Attivare e disattivare caratteristiche in una configurazione

Una configurazione conserva anche quali caratteristiche sono disattivate, così una parte può avere versioni **con** e **senza** qualcosa: fori di fissaggio, uno smusso, una sporgenza.

1. Disattivare la caratteristica: fare clic su di essa nello storico, poi {{ui:Sopprimi}} in {{ui:Proprietà}}.
2. Salvare la configurazione come al solito, per esempio `Senza fori`. La sua riga elenca ciò che disattiva.
3. Riattivare la caratteristica ({{ui:Ripristina}}) e salvare un'altra configurazione, per esempio `Con fori`.

Appena una configurazione disattiva una caratteristica, applicare una configurazione disattiva le sue caratteristiche e **riattiva ogni altra caratteristica**, insieme ai suoi valori dei parametri, in un solo passo. Una configurazione salvata prima che le caratteristiche venissero disattivate in alcuna di esse vale come "tutto attivo". {{ui:Aggiorna}} salva le caratteristiche così come sono ora, insieme ai valori.

Una parte le cui configurazioni disattivano caratteristiche viene salvata come versione più recente del file: un PartCraft più vecchio segnala che il file è di una versione più recente, invece di aprirlo senza di esse.

:::note
La tabella di progetto CSV contiene solo valori di parametri. Importare una tabella sopra una configurazione ne cambia i valori e mantiene le caratteristiche che disattiva; `--table` della riga di comando costruisce solo i valori.
:::

Il file della parte viene salvato con le configurazioni e con quella attiva in quel momento. La parte si apre con i valori con cui era stata salvata.

## Portare dentro o fuori una tabella di progetto

Una tabella di progetto è un file CSV con una colonna per ogni parametro e una riga per ogni configurazione:

```
name,width,thick,bolt
piccola,100,6,6.6
media,140,8,8.5
grande,200,12,13
```

La prima colonna può chiamarsi `name`, `config` o `configuration`; ogni altra colonna deve essere il nome di un parametro della parte. Le celle sono numeri, con unità se si vuole (`8in`). Una cella vuota esclude quel parametro dalla riga.

- {{ui:Importa CSV}} aggiunge ogni riga come configurazione. Una riga con il nome di una configurazione esistente la sostituisce. L'importazione è un solo passo.
- {{ui:Esporta CSV}} scrive le configurazioni. Se non ce ne sono ancora, scrive una riga con i valori correnti, come punto di partenza per un foglio di calcolo.

Un nome di configurazione che un foglio di calcolo leggerebbe come formula (che inizia con `=`, `+`, `-` o `@`) viene scritto con un `'` iniziale.

## Tutte le dimensioni insieme

{{ui:Pacchetto di varianti…}} sotto **Configurazioni** costruisce tutte le configurazioni, o alcune scelte, come STEP, IFC, DWG e un'anteprima in un unico zip, con una tabella dei loro parametri: vedi [Creare un pacchetto di varianti dalle proprie configurazioni](topic:variant-pack).

Lo strumento da riga di comando costruisce un file per ogni riga di una tabella di progetto CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Esportare prima le configurazioni come CSV, poi passare quel file con `--table`. Vedi [Script e riga di comando](topic:scripts-and-cli). Una parte salvata come script conserva le sue configurazioni in una riga `configs json …`.
