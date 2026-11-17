---
title: Filettature su alberi e fori, disegnate o modellate
summary: Applica una filettatura metrica ISO o trapezoidale a una faccia circolare, un albero o un foro. Tienila convenzionale per i disegni, oppure modella la vera filettatura elicoidale per la stampa 3D, con un gioco che fa combaciare le parti stampate.
keywords: filettatura, filettature, filettatura modellata, elicoidale, elica, vite, bullone, dado, albero, foro, filettatura esterna, filettatura interna, filettatura convenzionale, filettatura metrica, trapezoidale, acme, vite madre, Tr16x4, M10, stampa 3D, stampa, gioco, accoppiamento, filettatura a sinistra, maschiato
from: 4f6401cc
---

{{ui:Filettatura}} crea una filettatura sulle facce circolari: l'esterno di un albero (filettatura esterna) o l'interno di un foro (filettatura interna). PartCraft riconosce quale dalla faccia.

Una filettatura è **convenzionale** all'inizio: la faccia resta liscia, la vista disegna la filettatura come cerchi tratteggiati e il foglio del disegno la annota, per esempio "M10×1.5 - 6g, filettatura lunga 20". Spuntare **Modellata** per tagliare la vera filettatura elicoidale nella parte, per la stampa 3D o per un modello che debba apparire corretto.

## Filettare un albero o un foro

1. Costruire l'albero o il foro alla dimensione della filettatura: un albero Ø10 per un bullone M10, oppure un foro Ø8.5 (il diametro di preforo) per un dado M10.
2. Fare clic sulla faccia circolare, poi scegliere {{ui:Altro}} › {{ui:Filettatura}}. Se non è selezionata alcuna faccia circolare, PartCraft chiede di fare clic sulle facce, poi su {{ui:Fine}}.
3. Nel pannello di destra, controllare la **Dimensione**. **Adatta alla faccia** sceglie la dimensione da sola: per un albero, quella il cui diametro esterno è quello dell'albero; per un foro, quella il cui diametro minore si adatta al foro.

La filettatura inizia dall'estremità aperta della faccia, dove la parte non prosegue lungo l'asse: l'estremità libera di un albero, l'imboccatura di un foro. **Inizia dall'altra estremità** inverte il verso.

## Impostazioni

| Impostazione | Scelte | Predefinito |
|---|---|---|
| **Forma** | ISO metrica (60°), da M1.6 a M64 a passo grosso; trapezoidale (Tr, 30°), da Tr8×1.5 a Tr60×9 | ISO metrica |
| **Dimensione** | Adatta alla faccia, oppure una dimensione dall'elenco | Adatta alla faccia |
| **Tutta la faccia** | Deselezionarla per impostare una **Lunghezza (mm)**, misurata dall'inizio | Spuntata |
| **Inizia dall'altra estremità** | La filettatura corre dall'altra estremità della faccia | Disattivato |
| **Senso dell'elica** | Destra o sinistra | Destra |
| **Modellata** | Taglia la vera filettatura elicoidale | Disattivato |
| **Gioco (mm)** | Visibile quando Modellata è spuntata: quanto è più piccola la filettatura di un albero, e quanto più grande quella di un foro, tutt'intorno | 0.1 |

Una dimensione non adatta alla faccia viene comunque costruita, tagliata sulla faccia, e il pannello lo segnala, per esempio: "Un albero Ø12 mm non corrisponde a M10 (Ø10 mm)". Più facce possono condividere una sola funzione Filettatura; con **Adatta alla faccia**, ciascuna ottiene una propria dimensione.

## Filettature modellate per la stampa 3D

Una filettatura modellata segue il profilo di base standard: ISO 68-1 per le filettature metriche (creste e fondi piatti, fianchi a 60°), ISO 2901 per quelle trapezoidali (fianchi a 30°). Il **Gioco** sposta l'intero profilo verso l'interno (albero) o verso l'esterno (foro), così le parti stampate si avvitano insieme:

- **Da 0.1 a 0.2 mm** va bene per la maggior parte delle stampanti. Stampare prima un bullone e un dado di prova.
- **0** è il profilo standard, per parti lavorate alle macchine o per verificare un accoppiamento.

Un bullone e un dado con lo stesso gioco non si toccano mai sui fianchi: lo spazio tra loro è il doppio del gioco, tutt'intorno.

:::tip
I passi fini stampano male: M3 e inferiori, oppure un passo sotto 0.5 mm, sono vicini a ciò che un ugello da 0.4 mm riesce a disegnare. Modellare filettature più grandi e, per quelle piccole, usare un inserto a caldo o un foro filettato.
:::

Una filettatura modellata fa parte del solido: le esportazioni STL, 3MF e STEP la includono, e Misura la misura. Rende più pesante la ricostruzione della parte: una filettatura M10 lunga 20 è di circa 150,000 triangoli.

## Fori filettati

Un foro **Filettato (ISO metrico)** ha anch'esso un interruttore **Modellato**, con lo stesso **Gioco**. Vedi [Forare fori e alesature sui punti dello schizzo](topic:holes).

## Quando una filettatura non si costruisce

- "Una filettatura va su una faccia circolare (un cilindro): un albero o un foro." La faccia selezionata è piana o curva in altro modo.
- "Nessuna dimensione standard si adatta a una faccia circolare di Ø0.6 mm: scegliere una dimensione." Adatta alla faccia non ha trovato nulla entro il 12 % della faccia. Scegliere una **Dimensione**, oppure cambiare la faccia.
- "Una faccia su cui si trovava questa filettatura non esiste più (…). Selezionarla di nuovo." Una modifica precedente ha rimosso la faccia. Fare clic su {{ui:Scegli facce}} e fare di nuovo clic sulla faccia.

:::note
Filettature in pollici (UNC, UNF), filettature per tubi, filettature coniche, uscite della filettatura e inizi smussati non sono ancora implementati. Il kernel esatto mostra una filettatura modellata come convenzionale.
:::
