---
title: Polja: oblici kao udaljenosti
summary: Šta je polje (oblik sačuvan kao udaljenost od njegove površine), kako ga napraviti od primitiva, bulovih operacija, rešetki i minimalnih površina u skripti, kako postaje tijelo, i zašto ista skripta uvijek daje iste bajtove.
keywords: polje, udaljenost sa predznakom, sdf, voksel, žiroid, tpms, rešetka, bulova operacija, odmak, ljuska, mješanje, dual contouring, deterministično, vodonepropusno, manifold, blok
from: faab7480
---

**Polje** opisuje oblik preko udaljenosti od bilo koje tačke do njegove površine: negativno unutra, nula na površini, pozitivno van. Sfera poluprečnika 5 je "udaljenost do centra minus 5". Kombinovanje oblika je aritmetika nad udaljenostima: unija je manja od dvije, presjek veća, a oduzimanje jednog oblika od drugog je veća od prve i negativne druge. Povećanje oblika za 1 mm oduzima 1 od udaljenosti; šuplji zid je udaljenost presavijena.

Zato su polja dobra za rešetke, kanale i zidove promjenjive debljine: površina žiroida je "zbir sinusa je nula", a zid koji se po dijelu zadebljava od 1 do 3 mm je broj koji se mijenja kroz dio.

## Od polja do tijela

`to_body(field, h)` uzorkuje polje na mreži tačaka udaljenih `h` milimetara, zadržavajući samo tačke blizu površine (rijetka mreža blokova 8 × 8 × 8), i gradi površinu metodom **dual contouring**: jedan vrh po ćeliji površine, postavljen tamo gdje se ravni površine sijeku, pa oštra ivica ostaje oštra unutar jednog voksela. Površina je zatvorena i svaka ivica je zajednička tačno dvama trouglovima; izvještaj to kaže. Element tanji od oko tri voksela može se stisnuti, i tada izvještaj kaže da tijelo nije zatvoreno čvrsto tijelo, umjesto da to skriva.

Veličina voksela je tačnost: zapremina sfere od 25 voksela u prečniku je tačna unutar nekoliko stotinki procenta; zid je tačan koliko i njegovi vokseli. Što je mreža grublja, to brže ide.

## Uvijek isti bajtovi

Polje nema sat ni slučajan broj. Sinus i kosinus žiroida i svaka eksponencijalna, logaritamska i stepena funkcija u biblioteci računaju se iz obične aritmetike, tako da Node, Chrome, Firefox i Safari daju iste bitove. Mreža se obilazi redom koji je fiksiran, pa ista skripta s istim ulazima daje bajt-identične mreže i tehničke listove, na bilo kojem računaru i preko bilo kog broja radnih niti. To je provjereno, uključujući pregledač naspram Node-a.

## Kuda dalje

[Napiši generator](topic:write-a-generator) pravi dio pomoću polja; [Inženjerska biblioteka](topic:engineering-library) ga dimenzioniše.
