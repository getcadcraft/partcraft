---
title: Forare fori e alesature nei punti dello schizzo
summary: Mettere punti in uno schizzo su una faccia, creare fori semplici, alesati, svasati o filettati (metrici ISO) in ogni punto, impostare diametro e profondità, e correggere i fori che vanno nella direzione sbagliata.
keywords: foro, procedura guidata foro, foratura, filettatura modellata, stampa 3D, alesatura, cbore, svasatura, csink, foro filettato, punta di foratura, filettatura metrica, M6, passante, cieco, foro per bullone, punti, centri dei fori
from: 8e1eef83
---

{{ui:Foro}} pratica un foro in ogni punto libero di uno schizzo. Un punto libero è uno creato con lo strumento Punto, non la fine di una linea o il centro di un cerchio.

## Forare fori su una faccia

1. Fare clic sulla faccia piana in cui forare, poi scegliere {{ui:Schizzo su questa faccia}}.
2. Premere {{key:P}} e fare clic dove va ogni foro. Quotare i punti dai bordi o dall'origine se conta la loro posizione (vedi [Definire completamente uno schizzo](topic:relations-dimensions)).
3. Scegliere {{ui:Esci}}.
4. Scegliere {{ui:Foro}}.

I fori attraversano la parte, larghi 6 mm. Il pannello destro mostra **Fori**: quanti ne sono stati creati, "uno per punto dello schizzo".

**Un foro, veloce:** fare clic sulla faccia piana dove va il foro e scegliere {{ui:Foro qui}} nel pannello destro. PartCraft aggiunge uno schizzo sulla faccia con un punto dove si è fatto clic e un foro passante nella parte, in un solo passo. Digitare subito un numero e premere {{key:Enter}} per il suo diametro. Per posizionarlo con precisione, aprire il nuovo schizzo e quotare il punto.

**Quale schizzo viene usato:** quello appena chiuso o quello selezionato; altrimenti lo schizzo non usato più recente che ha punti liberi. Se non ce n'è nessuno: "Creare prima uno schizzo con punti dove vanno i fori (Schizzo su una faccia, poi Punto)."

## Impostazioni

| Impostazione | Scelte | Predefinito |
|---|---|---|
| **Tipo** | Semplice, Alesatura, Svasatura, Filettato (metrico ISO) | Semplice |
| **Diametro (mm)** | Il diametro del foro | 6 |
| **Passante** | Selezionato: attraverso tutta la parte. Deselezionarlo per un foro cieco | Selezionato |
| **Profondità (mm)** | Mostrata quando Passante è deselezionato | 10 |
| **Alesatura ⌀** | Mostrato per Alesatura: il diametro dell'incavo più largo | 11 |
| **Profondità alesatura** | Mostrata per Alesatura | 6 |
| **Inverti direzione** | Fora dall'altro lato del piano dello schizzo | Disattivo |

I fori entrano nel materiale, perpendicolari al piano dello schizzo. La profondità di un foro cieco è misurata dal piano dello schizzo; il suo fondo è piatto.

## Un foro alesato per bullone

1. Creare i fori come sopra.
2. Impostare **Tipo** su **Alesatura**.
3. Impostare **Diametro (mm)** su `6.6` (gioco per un bullone M6), **Alesatura ⌀** su `11` e **Profondità alesatura** su `6.5`.

L'alesatura deve essere più larga del foro ("L'alesatura deve essere più larga del foro.") e, per un foro cieco, meno profonda di esso ("L'alesatura deve essere meno profonda del foro.").

## Una corona di fori

Per fori distribuiti in modo uniforme attorno a un centro, crearne **uno** e farne un pattern: selezionare la funzione Foro, poi scegliere {{ui:Circolare}} (vedi [Funzioni di pattern e specchio](topic:patterns-mirror)). Il pattern segue quando si cambia la dimensione del foro.

## Quando i fori vanno nel verso sbagliato

- "Non c'è nulla da forare su quel lato dello schizzo. Provare a invertire la direzione." Lo schizzo sta dal lato lontano del materiale. Selezionare **Inverti direzione**.
- "Mettere punti dello schizzo dove vanno i fori (strumento Punto), poi creare il foro." Lo schizzo non ha punti liberi. Le estremità delle linee e i centri dei cerchi non contano.
- "Non c'è ancora nulla da forare." Un foro richiede un solido. Creare prima una sporgenza.

## Fori negli assiemi

Ogni foro ha un asse. In un assieme, **Centra su** può mettere un giunto sull'asse di un foro, elencato come "Foro1, foro 2", così un perno o un bullone si allinea con esso. Vedi [Costruire un assieme](topic:build-assembly).

## Fori svasati

Impostare **Tipo** su **Svasatura**, poi **Svasatura ⌀** (in superficie) e **Angolo di svasatura**: 90° (viti a testa piana ISO metriche) oppure 82° (viti in pollici). Prendere il diametro della svasatura dai dati del produttore delle viti (un po' più del diametro della testa della vite). La faccia del cono è denominata "svasatura" nei pannelli.

## Fori filettati

Impostare **Tipo** su **Filettato (metrico ISO)** e scegliere la **Filettatura**, da M2 a M24 a passo grosso. Il foro viene forato alla dimensione della punta per maschiatura dalla tabella sotto (diametro nominale meno il passo, sulla serie di punte, come elenca la ISO 2306 per una filettatura 6H); la casella **Diametro (mm)** non viene usata. Per un foro cieco, **Profondità filettatura (mm)** imposta quanto in profondità arriva la filettatura.

| Filettatura | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Passo | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Punta per maschiatura ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

La filettatura è all'inizio **convenzionale**: il modello ha il foro forato, la vista disegna il diametro maggiore della filettatura come cerchi tratteggiati, e il foglio del disegno riporta la quotatura come nota, ad esempio "4× M8×1.25 - 6H, filettatura passante". STEP esporta solo il foro forato.

Selezionare **Modellata** per tagliare la vera filettatura elicoidale nel foro, per la stampa 3D. **Gioco (mm)** la rende più grande tutt'intorno, così un bullone stampato entra: da 0.1 a 0.2 mm va bene per la maggior parte delle stampanti. La nota allora termina con "(modellata)". Vedi [Filettature su alberi e fori, disegnate o modellate](topic:threads), che mette filettature anche sugli alberi.

:::note
I fori contro-forati, le filettature in pollici e le filettature per tubi non sono ancora implementati.
:::
