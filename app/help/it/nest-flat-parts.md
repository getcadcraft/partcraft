---
title: Disporre le parti piane su lastre
summary: Disporre parti piane su lastre o su un rotolo con il minor sfrido possibile trovato da PartCraft, mai più vicine della spaziatura impostata, e salvare la disposizione come DXF per laser, plasma, getto d'acqua o fresatrice.
keywords: nesting, disporre, lastra, rotolo, laser, plasma, getto d'acqua, fresatrice, taglio, resa, uso del materiale, scarto, sfrido, spaziatura, kerf, direzione di laminazione, dxf, sviluppo, contorni
from: 8dcce1a6
---

**Nesting** colloca molte parti piane su una lastra in modo che resti il meno possibile di materiale. PartCraft dispone le parti una alla volta, ciascuna dove mantiene più corta la lunghezza usata della lastra, prova diversi ordini, termina in pochi secondi e tiene il risultato migliore. Le parti possono stare nei fori l'una dell'altra e nell'incavo di una L o di una U.

## Aprirlo

- {{ui:Esporta}} › {{ui:Nesting delle parti piane su lastre…}} lo apre con lo sviluppo della parte oppure, in un assieme, con lo sviluppo di ogni parte in lamiera, tante volte quante sono le copie.
- Su una parte in lamiera, {{ui:Stendi piana}} e poi {{ui:Nesting su lastre…}} sotto lo sviluppo.
- {{ui:Aggiungi contorni da un DXF…}} aggiunge come parte ogni contorno chiuso in un file DXF: un disegno di CadCraft salvato come DXF, oppure un file del software della propria macchina da taglio. Un contorno dentro un altro è un foro in esso. Linee e archi che si uniscono punta a punta contano come un solo contorno. I file in pollici, centimetri o metri vengono convertiti in millimetri.

:::note
Stendere una lamiera richiede un kernel geometrico esatto (vedi [Lamiera](topic:sheet-metal)). I contorni da un file DXF funzionano sempre.
:::

## Impostarlo

Per ogni parte indicare **quante** ne servono e la sua **direzione di laminazione**: {{ui:Qualsiasi direzione}}, {{ui:Lungo la lamiera (come disegnato)}} per lamiera spazzolata o laminata che deve andare in un solo verso, oppure {{ui:Attraverso la lamiera}}.

Sotto **Lastre**:

- **Magazzino**: {{ui:Lastre}} di una data lunghezza e larghezza (e quante se ne hanno; 0 = quante servono), oppure {{ui:Un rotolo}} di una data larghezza, lungo quanto serve.
- **Margine dal bordo** resta libero su ogni bordo della lastra (per le morse o per un bordo irregolare).
- **Spazio tra le parti** è la distanza minima tra due linee di taglio: almeno la larghezza di taglio (kerf) della propria macchina, più quanto richiede il materiale.
- **Rotazioni**: gli angoli di cui una parte può essere ruotata, ogni 90° per impostazione predefinita. Meno rotazioni vanno più veloci; di più possono sfruttare meglio la lastra.
- **Le parti possono essere capovolte** consente di disporre una parte sottosopra. Lasciarla disattivata per la lamiera: uno sviluppo disposto capovolto si piega nel verso opposto.

Premere {{ui:Disponi}}. L'anteprima mostra ogni lastra; i dati indicano quante lastre (o quanto del rotolo) sono state usate e quanto materiale occupano le parti. Ciò che non è entrato viene indicato per nome.

## Salvarlo

{{ui:Salva DXF}} scrive la disposizione come DXF (R12, millimetri), una lastra sotto l'altra: i contorni delle lastre sul layer SHEET, le parti su PARTS (archi mantenuti come archi), il nome di ogni parte su LABELS.

:::tip
Mescolare più parti di solito dà un nesting migliore di molte copie di una sola: le parti piccole riempiono gli spazi tra quelle grandi.
:::

## Tagliare le lastre (G-code)

**Esporta › Lastre con nesting in G-code** legge un DXF con nesting (questo, oppure le lastre dell'add-on Cabinets in CadCraft) e crea un programma per lastra attraverso il post-processore scelto: prima fori e ritagli, poi i contorni, ogni taglio eseguito con il raggio dell'utensile all'esterno della parte, attraverso la lastra e 1 mm in più, con ponticelli se richiesti. L'elenco dei post-processori comprende quelli integrati e quelli dello studio Manufacture. Verificare ogni programma in un simulatore prima di eseguirlo: foratura e tasche non vengono eseguite.

## Cosa controllare

PartCraft ricontrolla ogni disposizione sulle forme vere (non sulla griglia con cui ha cercato): nessuna coppia di parti più vicina della spaziatura, nulla nei margini. Non pianifica il taglio: gli attacchi di entrata (lead-in), l'ordine di taglio, il taglio degli spigoli condivisi una sola volta e la conservazione della lastra residua sono compiti del software della propria macchina da taglio. Controllare lì il DXF prima di tagliare.
