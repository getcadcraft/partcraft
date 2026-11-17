---
title: Slobodni oblici pomoću radnog prostora Oblik i karakteristike površi
summary: Gurni i povuci glatku kontrolnu mrežu u radnom prostoru Oblik, oštro prelomi ivice, koristi simetriju, proveri i završi je u tačno čvrsto telo ili površ, zatim zakrpi, lofting, sašij, zadebljaj, ofset, produži i skrati površi u Projektovanju. Šta je tačno, a šta aproksimirano.
keywords: oblik, slobodna forma, T-spline, podela, Catmull–Clark, kontrolna mreža, quadball, oštar prelom, simetrija, zebra, zakrivljenost, površ, zakrpa, popuna, lofting površ, sašivanje, zadebljanje, ofset površi, produženje, skraćivanje
from: 0d326ef4
---

:::note
**Još nije napravljeno u ovoj verziji.** Završavanje oblika u deo i površinske karakteristike zahtevaju tačno geometrijsko jezgro, koje ova verzija PartCraft-a nema: svaki deo pravi mrežnim jezgrom. [Šta još nije napravljeno](topic:not-built-yet) kaže šta da se radi umesto toga. Ostatak ove stranice opisuje kako rade sa tačnim jezgrom.
:::

Radni prostor **Oblik** pravi organske oblike. Uređuje se **kontrolna mreža**, gruba mreža temena, ivica i strana. Oblik je glatka površ koju mreža kontroliše (njena Catmull–Clark granična površ), pa pomeranje jednog temena blago savija površ oko njega. Kad izgleda dobro, **Završi** dodaje u istoriju dela kao karakteristiku *Oblik*, a tačno jezgro je pretvara u prave B-spline površi. Zatim može da se zaobli, preseče, spoji sa drugim karakteristikama i izveze kao STEP.

Izaberi **Oblik** u listi **Radni prostor** s leve strane trake sa alatima.

## Započni mrežu

1. Postavi **Veličinu** i **Podele** u desnom panelu. Podele je koliko strana dobija svaka stranica.
2. Klikni {{ui:Kvadar}}, {{ui:Quadball}} ili {{ui:Ravan}} na traci sa alatima. Panel takođe ima **Cilindar**, **Torus** i **Strane klikovima**.

- **Quadball** je kutijasta kontrolna mreža namestena tako da njena temena leže na sferi. Između tih tačaka površ je malo unutar sfere: oko 0.4 % manje zapremine sa 2 podele.
- **Ravan** je otvorena, pa postaje površinsko telo (vidi „Površinske karakteristike u Projektovanju” dole).
- **Strane klikovima**: klikni 4 tačke na gornjoj (osnovnoj) ravni ili na temenima mreže da napraviš jednu stranu. Strane koje dele temena se spajaju. Pritisni {{key:Enter}} posle 3 tačke za trougao, ili {{key:Esc}} da zaustaviš.

Nedovršena mreža se čuva uz datoteku dela, pa datoteka može da se zatvori i nastavi kasnije.

## Izbor i pomeranje

- Klikni teme, ivicu ili stranu mreže. {{key:Shift}}+klik dodaje ili uklanja stavke. {{key:Esc}} briše izbor.
- U sredini izbora pojavljuje se gizmo. Prevuci strelicu da se pomeriš duž nje, ili kvadrat da se pomeriš u toj ravni. Pritisni {{key:W}} za pomeranje, {{key:E}} za rotiranje i {{key:R}} za skaliranje, ili koristi dugmad u panelu. {{ui:Gizmo}} na traci sa alatima prolazi kroz njih.
- **Meko opadanje** (mm) takođe povlači temena unutar te udaljenosti, postepeno se stapajući do nule na ivici te udaljenosti.
- Svako prevlačenje je jedan korak opozivanja: {{key:Ctrl+Z}} i {{key:Ctrl+Y}} rade kao obično.

## Promena mreže

Dugmad **Izmeni** u panelu rade nad izborom:

| Dugme | Šta radi |
|---|---|
| {{ui:Izvlačenje}} | Izabrane strane izlaze za **Rastojanje izvlačenja**, duž svojih normala, sa novim bočnim stranama. Izabrane otvorene ivice prave nove strane prema spolja. |
| {{ui:Petlja ivica}} / Umetni petlju ivica | Deli prsten četvorostranih strana koji seče izabranu ivicu, na pola. Više petlji daje uže krivine. |
| Umetni tačku | Dodaje teme na sredini izabrane ivice. |
| Podeli | Deli svaku izabranu stranu na četvorostrane strane oko njene sredine. |
| Most | Spaja dve izabrane strane ili dva otvora (izaberi po jednu otvorenu ivicu na svakom) cevi od strana. Obe moraju imati isti broj ivica. |
| Popuni rupu | Zatvara otvor kroz izabranu otvorenu ivicu jednom stranom. |
| Zavari | Spaja izabrana temena u jedno, na njihovoj sredini. |
| Izravnaj | Pomera izabrana temena na ravan koja ih najbolje uklapa. |
| Obriši | Uklanja izabrane strane, ivice (dve strane se spajaju) ili temena. |

## Oštre ivice, simetrija i prikaz

- {{ui:Oštar prelom}} čini izabrane ivice oštrim. **Težina preloma** 10 je potpuno oštra. Manja težina ostaje oštra za toliko koraka profinjavanja, a zatim omekšava, što daje uzak zaobljen prelaz umesto tvrdog savijanja. **Ukloni prelom** ih vraća na glatko. **Oštro teme** učvršćuje teme tako da površ kroz njega prolazi tačkom.
- **Simetrija** ogleda mrežu preko X, Y ili Z = 0. Zadržava pozitivnu stranu, ogleda je i spaja dve polovine. Posle toga, izmena na jednoj strani se vrši na obe. Temena na ravni ogledala ostaju na njoj.
- {{ui:Prikaz}} prebacuje između **Glatko** (površ koju će karakteristika imati) i **Kutija** (same strane mreže).
- **Analiza**: **Zebra pruge** odbijaju svetlo sa prugama iz trenutnog prikaza. Glatko se savijaju preko glatke površi i prekidaju na prelomu. **Srednja zakrivljenost** boji konveksne oblasti crveno, konkavne plavo, a ravne belo. Meri se na prikazanoj mreži kotangens formulom, pa je to vodič, a ne merenje.

## Proveri i završi

- **Proveri tačno** pretvara mrežu u tačnom jezgru bez menjanja dela. Prijavljuje koliko B-spline zakrpa mreža pravi, koliko ih je tačno i da li je rezultat zatvoreno, ispravno čvrsto telo, kao i njegovu zapreminu.
- {{ui:Završi}} dodaje karakteristiku *Oblik* u istoriju ili ažurira oblik koji si uređivao i vraća u Projektovanje. Zatvorena mreža postaje čvrsto telo. Njena **Operacija** u panelu Projektovanja može biti Novo telo, Spoj, Izrez ili Presek. Otvorena mreža postaje površinsko telo.
- Da kasnije promeniš oblik, izaberi ga u istoriji i klikni **Uredi u Obliku**. Izgrađeno telo je sakriveno dok se uređuje njegova mreža.
- **Odbaci** baca mrežu bez diranja istorije.

## Šta je tačno, a šta aproksimirano

Svaka četvorostrana strana mreže, profinjena kad treba, postaje jednu bikubičnu B-spline zakrpu.

- Gde je svako teme strane *regularno* (četiri ivice se sastaju unutar površi, ili tri na otvorenoj ivici ili duž preloma), zakrpa je **tačno** podela-površ. Provere to potvrđuju do 1e-9 mm.
- Oko **izuzetne tačke** (tri, pet ili više ivica se sastaje, teme strane sa tri ili pet stranica, ili kraj preloma) nema tačne polinomske zakrpe. Tu zakrpa uzima tačnu tačku i tangentnu ravan u tom temenu i krive susednih ivica, pa se zakrpe i dalje spajaju bez praznine. Tangentna neprekidnost preko ivica koje se sastaju u toj tački je približna. Panel Oblika i panel karakteristike daju najveći ugao, obično ispod 2°. Viši **Nivo** u panelu karakteristike čini te zakrpe manjima i bližima.
- Oštri prelomi su prave ivice čvrstog tela, pa se mogu zaobliti.
- Svaka zakrpa je sopstvena površ, pa oblik ima mnogo površi i između njih se crtaju linije.

## Površinske karakteristike u Projektovanju

Naredbe za površi su u meniju {{ui:Više}} u Projektovanju, pod karakteristikama. Zahtevaju tačno jezgro. Površinska tela se crtaju providno, plavo. Nisu deo čvrstog tela dok se ne zadebljaju ili sašiju.

| Naredba | Šta radi |
|---|---|
| Zakrpa | Popunjava zatvorenu petlju ivica. Prvo {{key:Shift}}+klik na ivice čvrstog tela, ili izaberi površinsko telo da popuniš njegov otvor. **Tangentno (G1)** čini da zakrpa glatko prianja uz tu površ. |
| Lofting površ | Površ kroz jedan lanac krivih po skici (otvorena ili zatvorena), redom iz istorije. |
| Sašij | Šije površinska tela duž njihovih zajedničkih ivica. Ako se zatvore, rezultat je čvrsto telo, sa Operacijom kao kod drugih karakteristika. |
| Zadebljaj | Daje površinskom telu debljinu: duž njegove normale, protiv nje, ili po polovinu u oba smera. Rezultat je čvrsto telo. |
| Ofset površi | Kopija površinskog tela pomerena duž njegovih normala. Original ostaje. |
| Produži površ | Proširuje jednostranu površ preko izabranih ivica. |
| Skrati površ | Seče površinsko telo tamo gde ga prelazi drugo površinsko telo ili čvrsto telo. Klikni **Izaberi tačku na delu** da izabereš koji deo zadržati, ili zadrži sve ostalo. |

Sašij, Zadebljaj, Produži i Skrati troše površinsko telo od kog počinju. Kasnije karakteristike koriste novo.

Ograničenja danas: oblici sa nekoliko odvojenih zatvorenih delova se ne pretvaraju u jedno čvrsto telo; regularne oblasti se ne spajaju u veće površi; i pogledaj [Šta još nije napravljeno](topic:not-built-yet).
