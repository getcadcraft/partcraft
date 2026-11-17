---
title: Preparare un pezzo per la stampa 3D
summary: Verificare che un pezzo o un assieme sia chiuso, che entri nella stampante e che poggi su una base, poi scaricarlo come STL o 3MF per lo slicer.
keywords: stampa 3d, stampante, stampa, slicer, stl, 3mf, watertight, chiuso, manifold, piano di stampa, dimensioni del piano, sbalzo, supporti, base, millimetri, esporta, filettature, gioco
from: 90d81dff
---

Uno slicer richiede una forma chiusa: nessun foro, ogni faccia rivolta verso l'esterno, nulla che attraversi sé stesso. I pezzi creati in PartCraft sono chiusi per costruzione, quindi la verifica serve soprattutto a indicare le dimensioni, se il pezzo entra nel piano della stampante, se poggia su una faccia piana e quanto sporge.

## Verifica e download

1. Facoltativo, una sola volta: impostare il piano della stampante in {{ui:Impostazioni}} › PartCraft › **Stampante 3D**: larghezza, profondità e altezza in millimetri. Lasciare vuoti questi campi per saltare quel controllo.
2. Scegliere {{ui:Esporta}}, poi {{ui:Verifica per la stampa 3D (STL o 3MF)…}}.

   La finestra indica "Pronto per la stampa" oppure "Non pronto per la stampa", elenca ogni problema e riporta la dimensione sul piano (X × Y × Z, in millimetri), il volume e il numero di triangoli.

3. Fare clic su {{ui:Scarica 3MF}} oppure {{ui:Scarica STL}}. Il file è lo stesso di {{ui:Esporta}} › {{ui:3MF, per la stampa 3D}} oppure {{ui:STL, per la stampa 3D}}.

In un assieme, la verifica e i file riguardano l'intero assieme, con ogni copia nella posizione in cui si trova.

Il pezzo viene verificato nella posizione che assume nell'esportazione: ciò che in PartCraft è rivolto verso l'alto (perpendicolare al piano Superiore) punta in alto sul piano di stampa. Un pezzo disegnato sul piano Superiore sta piatto.

## Cosa può dire la finestra

**Non pronto per la stampa** (lo slicer potrebbe rifiutarlo o stamparlo male): fori (spigoli con una faccia da un solo lato), spigoli condivisi da tre o più facce, facce rivolte in direzioni opposte, un corpo rovesciato, oppure un corpo che attraversa sé stesso. Un pezzo creato in PartCraft non dovrebbe mai mostrare questi problemi; se succede, vedere [Risoluzione dei problemi](topic:troubleshooting).

**Avvisi** (stampa, ma dare prima un'occhiata):

- **Più grande del piano della stampante**, anche ruotato di 90°.
- **Nulla poggia piatto sul fondo**: ruotare il pezzo nello slicer in modo che una faccia appoggi sul piano, altrimenti serviranno supporti oppure una zattera.
- **Sporge più di 45° dalla verticale**: queste facce richiedono supporti nella posizione attuale. Un altro verso potrebbe richiederne meno.
- **I corpi separati si sovrappongono** oppure **si toccano faccia a faccia**: gli slicer di solito li uniscono. {{ui:Combina}} in Funzioni › {{ui:Altro}} li unisce in un solo corpo. Vedere [Corpi](topic:bodies).
- **Meno di 1 mm di larghezza**: verificare le dimensioni del pezzo.

## Filettature che si stampano

Una filettatura modellata si stampa come una vera filettatura. Dare un **Gioco** così che un bullone stampato entri in un dado stampato: vedere [Filettature](topic:threads).

## Facce tonde lisce

STL e 3MF sono fatti di triangoli. Per facce tonde più lisce, fare clic su uno spazio vuoto in modo che nulla sia selezionato e impostare **Curve** su **Fine (128 per giro)** oppure **Molto fine (256 per giro)** nel pannello destro prima di esportare. Più triangoli significano file più grandi.

## Più grande, più piccolo o in pezzi

- **Esporta › Scala per la stampa (STL o 3MF)…** salva il pezzo scalato per asse senza modificarlo: una **tolleranza di ritiro** in percentuale (dimensione × (1 + s), oppure la dimensione esatta ÷ (1 − s)) per un modello di fusione, oppure fattori semplici, rispetto al centro, all'angolo più basso, al centro del fondo o all'origine.
- **Esporta › Dividi per la stampa (archivio zip di pezzi)…** divide un pezzo troppo grande per la stampante in pezzi che entrano ciascuno nel piano indicato, uniti da perni, chiavette, code di rondine, fori per spine o tasche per magneti (con il gioco impostato). Ogni pezzo e ogni giunto è numerato, e i pezzi vengono salvati come STL o 3MF in un archivio zip con un foglio di assieme. Il pezzo originale non cambia.

## Non verificato

Lo spessore delle pareti, i dettagli più piccoli di quanto l'ugello riesce a disegnare e il modo in cui lo slicer colloca i supporti. Questi sono mostrati dallo slicer.
