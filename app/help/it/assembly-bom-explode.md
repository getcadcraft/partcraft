---
title: Distinta dei componenti, viste esplose e parti mobili
summary: Assegnare a ogni parte di un assieme numero, descrizione e materiale, leggere e scaricare la distinta base, creare viste esplose con passi o automaticamente, spostare a mano le parti non unite, impostare i limiti dei giunti ed esportare l'intero assieme come STL, 3MF o distinta base.
keywords: distinta base, bom, distinta dei componenti, numero parte, materiale, densità, csv, vista esplosa, esplodi, comprimi, linee di scia, sposta parte, trascina, gizmo, traslazione, ruota, limiti del giunto, esportazione assieme, passo d'assieme, disegno d'assieme, bollini
from: ebc9f6f3
---

Questi strumenti si trovano nel pannello di destra di un assieme (vedi [Costruire un assieme con i giunti](topic:build-assembly)).

## Proprietà della parte

Selezionare una parte nell'elenco a sinistra. In **Proprietà parte** impostare:

- **Numero parte** (fino a 40 caratteri) e **Descrizione** (fino a 200).
- **Materiale**: un materiale comune con la sua densità, oppure **Densità personalizzata…** per digitarla in g/cm³. Il pannello mostra quindi la massa della parte.

Le proprietà appartengono alla parte, quindi ogni sua copia le condivide. Sono salvate nel file dell'assieme.

## Distinta base

Senza nulla selezionato ({{key:Esc}}), il pannello mostra la **Distinta base**: una riga per parte, con il numero di voce, la quantità (quante copie), il numero parte, il nome, il materiale e la massa. I numeri di voce seguono l'ordine in cui le parti compaiono per la prima volta nell'elenco. Le masse usano il volume di ogni parte (del solido sfaccettato costruito dal kernel a mesh, leggermente basso sulle parti tonde) e il suo materiale. Una parte senza materiale non ha massa, e quindi non c'è totale.

{{ui:Scarica CSV}} salva l'elenco come file CSV (oppure **Esporta › Distinta base (CSV)**). Il file si apre con qualsiasi foglio di calcolo; il testo che inizia con = o + riceve un apostrofo iniziale, così il foglio di calcolo non lo esegue come formula.

## Viste esplose

Una vista esplosa separa le parti per le immagini. Non cambia mai i giunti né la posizione reale delle parti: salvataggio, verifiche di interferenza ed esportazioni usano le posizioni reali.

1. Senza nulla selezionato, scegliere {{ui:Nuova vista}} sotto **Viste esplose**.
2. Sotto **Aggiungi un passo**, spuntare le parti che il passo sposta, scegliere una **Direzione** (da +X a −Z, la normale di una faccia su cui si fa clic, oppure **Trascina una freccia nella vista**) e una **Distanza**, poi {{ui:Aggiungi passo}}. Con **Trascina**, trascinare la freccia e rilasciarla: il passo assume la direzione e la distanza trascinate.
3. Aggiungere altri passi. Si riproducono uno dopo l'altro.
4. Trascinare il cursore tra **Assemblato** e **Esploso** per animare la vista. Linee di scia tratteggiate vanno dalla posizione di riposo di ogni parte a quella attuale.

{{ui:Automatica (radiale)}} sposta ogni parte, tranne quella fissata a terra, allontanandola dal centro dell'assieme. {{ui:Automatica (giunti)}} sposta ogni parte unita (con tutto ciò che è unito sotto di essa) lungo la normale alla faccia del suo giunto. È possibile conservare più viste con nome: sceglierne una in **Vista**, oppure **Assemblato** per rimettere a posto le parti. Le viste sono salvate nel file dell'assieme.

## Spostare una parte a mano

Solo una parte senza giunti verso la parte fissata a terra si sposta a mano (la parte fissata a terra è bloccata; i giunti posizionano le altre). Selezionarla e, sotto **Sposta a mano**:

- Digitare **ΔX, ΔY, ΔZ** e scegliere {{ui:Spostamento}}, oppure scegliere un asse e un **Angolo** e {{ui:Ruota}} (attorno al centro della parte).
- {{ui:Trascina per spostare}} mostra delle frecce sulla parte: trascinare una freccia per spostarla lungo quell'asse, o un quadrato per spostarla su un piano. {{ui:Trascina per ruotare}} mostra degli anelli per ruotarla. Ogni trascinamento è un passo di annullamento. {{key:Esc}} nasconde le frecce.

## Limiti del giunto

Selezionare un giunto che si muove e, sotto **Limiti**, spuntare **Mantieni … tra i limiti** per uno dei suoi valori, poi impostare **Minimo** e **Massimo**. Ogni valore resta entro i propri limiti, il suo cursore copre solo quell'intervallo, e {{ui:Verifica il movimento per le interferenze}} esegue la scansione solo tra di essi. Un giunto cilindrico può limitare il suo angolo, il suo offset o entrambi. Cambiando il tipo del giunto, i limiti sui valori che il nuovo tipo non ha vengono eliminati.

## Esportare l'intero assieme

In un assieme il menu **Esporta** scrive l'intero assieme con ogni parte nella posizione in cui si trova:

- **STEP AP242 / AP214** e **Disegno (PDF)** non sono ancora implementati in questa versione: richiedono un kernel esatto, quindi sono in grigio. Esportare invece lo STEP di ogni parte (solido esatto) dalla parte stessa.
- **STL**: una sola mesh di tutte le parti. **3MF**: ogni parte una volta, collocata una volta per ciascuna copia.
- **Distinta base (CSV)**.

## Limiti

- Il disegno d'assieme e lo STEP d'assieme non sono ancora implementati in questa versione (richiedono un kernel esatto). Le viste esplose servono per le immagini a schermo.
