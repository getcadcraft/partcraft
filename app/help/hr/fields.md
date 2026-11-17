---
title: Polja: oblici kao udaljenosti
summary: Što je polje (oblik pohranjen kao udaljenost do njegove plohe), kako ga izraditi iz primitiva, booleovih operacija, rešetki i minimalnih ploha u skripti, kako postaje tijelo i zašto ista skripta uvijek daje iste bajtove.
keywords: polje, predznačena udaljenost, sdf, voksel, giroid, tpms, rešetka, boolean, odmak, ljuska, mješanje, dualno konturiranje, deterministički, vodonepropusno, manifold, cigla
from: faab7480
---

**Polje** opisuje oblik udaljenošću bilo koje točke do njegove plohe: negativno unutra, nula na plohi, pozitivno vani. Kugla polumjera 5 je „udaljenost do središta minus 5“. Kombiniranje oblika je aritmetika nad udaljenostima: unija je manja od dviju, presjek veća, a oduzimanje jednog oblika od drugog je veća od prvog i negiranog drugog. Povećanje oblika za 1 mm oduzima 1 od udaljenosti; šuplji zid je udaljenost, presavijena.

Zato su polja dobra za rešetke, kanale i zidove promjenjive debljine: ploha giroida je „zbroj sinusa je nula“, a zid koji se od 1 do 3 mm zadebljava kroz dio je broj koji se mijenja kroz dio.

## Od polja do tijela

`to_body(field, h)` uzorkuje polje na mreži točaka udaljenih `h` milimetara, zadržavajući samo točke blizu plohe (rijetka mreža od 8 × 8 × 8 cigli), i gradi plohu **dualnim konturiranjem**: jedan vrh po ćeliji plohe, postavljen tamo gdje se ravnine plohe sijeku, pa oštar brid ostaje oštar unutar jednog voksela. Ploha je zatvorena i svaki brid dijele točno dva trokuta; izvještaj to kaže. Značajka tanja od otprilike tri voksela može se stisnuti, i tada izvještaj kaže da tijelo nije zatvoreni čvrsti oblik, umjesto da to skriva.

Veličina voksela je točnost: volumen kugle široke 25 voksela je unutar nekoliko stotinki posto, a zid je točan koliko i njegovi vokseli. Što je mreža grublja, to brže ide.

## Uvijek isti bajtovi

Polje nema sat ni slučajni broj. Sinus i kosinus giroida, kao i svaka eksponencijalna, logaritamska i potencijska funkcija u biblioteci, računaju se iz obične aritmetike, tako da Node, Chrome, Firefox i Safari daju iste bitove. Mreža se obilazi fiksnim redoslijedom, pa ista skripta s istim ulazima daje iste bajt-po-bajt mreže i podatkovne listove, na bilo kojem računalu i uz bilo koji broj radnih dretvi. To je provjereno, uključujući preglednik naspram Nodea.

## Kamo dalje

[Napišite generator](topic:write-a-generator) gradi dio s poljima; [Inženjerska knjižnica](topic:engineering-library) ga dimenzionira.
