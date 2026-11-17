---
title: Polja: oblici kao rastojanja
summary: Šta je polje (oblik sačuvan kao rastojanje do njegove površi), kako se gradi od primitiva, bulovih operacija, rešetki i minimalnih površi u skripti, kako postaje telo i zašto ista skripta uvek daje iste bajtove.
keywords: polje, predznačeno rastojanje, sdf, voksel, giroid, tpms, rešetka, bulova operacija, pomak, ljuska, mešanje, dualno konturisanje, determinističko, vodonepropusno, manifold, blok
from: faab7480
---

**Polje** opisuje oblik preko rastojanja od bilo koje tačke do njegove površi: negativno unutra, nula na površi, pozitivno spolja. Sfera poluprečnika 5 je „rastojanje do centra minus 5“. Spajanje oblika je aritmetika nad rastojanjima: unija je manje od dva, presek veće, a oduzimanje jednog oblika od drugog je veće od prvog i minus drugog. Uvećanje oblika za 1 mm oduzima 1 od rastojanja; šuplji zid je rastojanje, presavijeno.

Zato su polja dobra za rešetke, kanale i zidove sa promenljivom debljinom: površ giroida je „zbir sinusa je nula“, a zid koji se širi od 1 do 3 mm kroz deo je broj koji se menja kroz deo.

## Od polja do tela

`to_body(field, h)` uzorkuje polje na mreži tačaka udaljenih `h` milimetara, zadržavajući samo tačke blizu površi (retka mreža blokova 8 × 8 × 8), i gradi površ **dualnim konturisanjem**: jedno teme po ćeliji površi, postavljeno tamo gde se ravni površi seku, tako da oštra ivica ostaje oštra do u okviru jednog voksela. Površ je zatvorena i svaka ivica je deljena tačno sa dva trougla; izveštaj to kaže. Element tanji od oko tri voksela može da se stegne, i tada izveštaj kaže da telo nije zatvoreno čvrsto telo, umesto da to skriva.

Veličina voksela je tačnost: zapremina sfere prečnika 25 voksela je u okviru nekoliko stotinki procenta, a zid je tačan koliko su njegovi vokseli. Što je mreža grublja, to ide brže.

## Uvek isti bajtovi

Polje nema sat ni slučajan broj. Sinus i kosinus giroida, i svaki eksponent, logaritam i stepen u biblioteci, izračunavaju se iz obične aritmetike tako da Node, Chrome, Firefox i Safari daju iste bitove; mreža se obilazi u fiksnom redosledu, pa ista skripta sa istim ulazima daje bajt-identične mreže i tehničke listove, na bilo kom računaru i preko bilo kog broja radnih niti. To je provereno, uključujući pregledač naspram Node-a.

## Gde dalje

[Napiši generator](topic:write-a-generator) gradi deo pomoću polja; [Inženjerska biblioteka](topic:engineering-library) ga dimenzioniše.
