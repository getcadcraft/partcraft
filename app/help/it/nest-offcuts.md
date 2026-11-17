---
title: Conservare e riusare i ritagli
summary: Dopo un nesting, ciò che resta di ogni lastra diventa un ritaglio numerato in un elenco di magazzino; il nesting successivo usa prima i ritagli, poi le lastre intere.
keywords: nesting, ritaglio, scarto, magazzino, avanzo, lastra, riutilizzo, materiale, spessore, CSV
from: 7a68d4b8
---

Quando si dispongono parti su lastre, il residuo utilizzabile di ogni lastra (non le schegge) può essere conservato come **ritaglio**: un contorno numerato (R-0001, R-0002 …) con il materiale, lo spessore, le dimensioni e il lavoro da cui proviene. L'elenco viene salvato con il file e può essere salvato come CSV.

## Riusarli

Inserire il **materiale** e lo **spessore**, lasciare attivo {{ui:Usa prima i ritagli}} e disporre. I ritagli dello stesso materiale e spessore vengono provati dal più piccolo; le parti che vi entrano vanno su di essi, dentro il contorno proprio del ritaglio e lontano dal suo bordo; ciò che non entra va su lastre nuove. Il rapporto di lavoro indica quali ritagli sono stati usati e cosa è rimasto. Con {{ui:Salva gli avanzi come ritagli}} attivo, {{ui:Aggiungi questo lavoro al magazzino}} lo scrive poi nell'elenco di magazzino: un ritaglio usato viene contrassegnato **Usato** (con il lavoro) e non viene più proposto; ciò che ne resta diventa un nuovo ritaglio che ricorda il suo originale.

## Che cosa conta come ritaglio

Il residuo viene misurato con la spaziatura impostata (nessuna parte è più vicina di quella a un taglio). Le strisce più strette di un ventesimo della lastra e i pezzi più piccoli del 2 % della lastra sono scarto; cambiare entrambi i limiti se l'officina conserva pezzi più piccoli. I fori dentro le parti appartengono alle parti stesse e non vengono conservati. Un rotolo non ha ritagli.

## Nel disegno

Il DXF di un nesting disegna il contorno di ogni ritaglio sul layer REMNANTS con il suo numero al centro, così i pezzi possono essere contrassegnati al momento del taglio.

Non ancora implementato: direzione di laminazione di un ritaglio, un foglio di codici a barre o di etichette, ritagli di rotoli, magazzino condiviso tra progetti.
