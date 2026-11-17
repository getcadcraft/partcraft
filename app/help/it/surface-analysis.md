---
title: Strisce zebra e curvatura
summary: Verifica quanto sono lisce le facce di una parte, con strisce zebra che seguono la vista oppure una mappa a colori della curvatura media, dal menu Viste.
keywords: zebra, strisce zebra, linee di riflesso, curvatura, mappa della curvatura, curvatura media, qualità della superficie, continuità, tangente, g1, g2, liscio, piega, linee di evidenziazione
from: 78fed4c3
---

Due rapide verifiche su quanto sono lisce le facce di una parte, su qualsiasi parte nell'area di lavoro Progettazione (l'area Forma ha la sua, per la forma in fase di modifica: vedi [Forme a superficie libera con Forma](topic:form-surfaces)).

## Strisce zebra

Aprire {{ui:Viste}} e scegliere {{ui:Strisce zebra}}. La parte mostra il riflesso di una luce a strisce, come farebbe una superficie lucidata:

- Dove due facce si uniscono **tangenzialmente** (un raccordo su un piano, una superficie di Gordon liscia), le strisce proseguono attraverso il giunto con una deviazione.
- Dove si incontrano in una **piega**, le strisce si interrompono e saltano.
- Dove coincide anche la curvatura (G2), le strisce scorrono senza nemmeno una deviazione.

Ruotare la vista (trascinando, oppure da una faccia del cubo di navigazione): le strisce vengono ridisegnate dalla nuova direzione. **Strisce** imposta quante sono.

## Curvatura

Scegliere {{ui:Curvatura}} nello stesso menu. La parte è colorata in base alla sua **curvatura media**: blu dove è cava (concava), chiara dove è piatta, rossa dove è convessa (sporge). Il cartellino indica a quale curvatura i colori raggiungono la piena intensità, in 1/mm e come raggio. Gli spigoli vivi contano come molto curvi, quindi risaltano molto; conviene guardare le facce tra di essi.

## Il cartellino

Entrambe aprono il cartellino di analisi in basso a sinistra della vista, che contiene anche l'[analisi dello sformo](topic:draft-analysis). Passare dall'una all'altra con **Mostra**. Scegliere di nuovo quella aperta in {{ui:Viste}}, {{ui:Chiudi}} oppure {{key:Esc}} la disattiva. I colori seguono la parte mentre la si modifica; niente viene salvato nella parte.
