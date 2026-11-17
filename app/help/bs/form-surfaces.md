---
title: Slobodni oblici pomoću Forme i površinske značajke
summary: Gurajte i vucite glatki kontrolni kavez u radnom prostoru Forma, oštrite ivice, koristite simetriju, provjerite i završite u tačno tijelo ili površinu, zatim krpite, pravite prijelaze, sašijte, zadebljajte, pomjerajte, produžite i odsijecajte površine u Konstrukciji. Šta je tačno, a šta aproksimirano.
keywords: forma, slobodni oblik, T-spline, podjela, Catmull-Clark, kavez, kvadrolopta, oštrenje, simetrija, zebra, zakrivljenost, površina, zakrpa, popuna, površina prijelaza, sašij, šivanje, zadeblji, pomaknuta površina, produži, odsijeci
from: 0d326ef4
---

:::note
**Još nije izgrađeno u ovoj verziji.** Završavanje forme u dio i površinske značajke zahtijevaju tačno geometrijsko jezgro, koje ova verzija PartCraft-a nema: svaki dio gradi mrežnim jezgrom. [Šta još nije izgrađeno](topic:not-built-yet) kaže šta uraditi umjesto toga. Ostatak ove stranice opisuje ih onako kako rade s tačnim jezgrom.
:::

Radni prostor **Forma** pravi organske oblike. Uređujete **kavez**, grubu mrežu uglova, ivica i površina. Oblik je glatka površina koju kavez kontroliše (njegova Catmull–Clarkova granična površina), pa pomjeranje jednog ugla blago savija površinu oko njega. Kada izgleda dobro, {{ui:Finish}} dodaje oblik u historiju dijela kao značajku *Forma*, a tačno jezgro je pretvara u prave B-spline površine. Zatim je možete zaobliti, presjeći, spojiti s drugim značajkama i izvesti kao STEP.

Odaberite **Forma** na listi **Radni prostor** s lijeve strane trake s alatima.

## Započnite kavez

1. Postavite **Veličinu** i **Podjele** u desnom panelu. Podjele su koliko površina ima svaka strana.
2. Kliknite {{ui:Box}}, {{ui:Quadball}} ili {{ui:Plane}} u traci s alatima. Panel ima i **Cilindar**, **Torus** i **Površine klikovima**.

- **Kvadrolopta** je kavez kutije postavljen tako da njegove tačke uglova leže na sferi. Između tih tačaka površina leži malo unutar sfere: oko 0.4 % manje zapremine uz 2 podjele.
- **Ravnina** je otvorena, pa postaje tijelo površine (vidi „Površinske značajke u Konstrukciji” niže).
- **Površine klikovima**: kliknite 4 tačke na gornjoj (podnoj) ravni ili na uglovima kaveza da napravite jednu površinu. Površine koje dijele uglove se spajaju. Pritisnite {{key:Enter}} nakon 3 tačke za trougao, ili {{key:Esc}} za zaustavljanje.

Vaš nedovršeni kavez se čuva s datotekom dijela, pa možete zatvoriti datoteku i nastaviti kasnije.

## Odaberite i pomjerajte

- Kliknite ugao, ivicu ili površinu kaveza. {{key:Shift}}+klik dodaje ili ispušta stavke. {{key:Esc}} briše odabir.
- Gizmo se pojavljuje u sredini odabira. Povucite strelicu da pomjerate duž nje, ili kvadrat da pomjerate u toj ravni. Pritisnite {{key:W}} za pomjeranje, {{key:E}} za rotaciju i {{key:R}} za skaliranje, ili koristite dugmad u panelu. {{ui:Gizmo}} u traci s alatima prolazi kroz njih.
- **Meko opadanje** (mm) također povlači uglove unutar te udaljenosti, postepeno blijedeći do nule na rubu te udaljenosti.
- Svako povlačenje je jedan korak poništavanja: {{key:Ctrl+Z}} i {{key:Ctrl+Y}} rade kao i obično.

## Promijenite kavez

Dugmad **Izmijeni** u panelu rade na odabiru:

| Dugme | Šta radi |
|---|---|
| {{ui:Extrude}} | Odabrane površine se pomjeraju za **Udaljenost istiskivanja**, duž svojih normala, uz nove bočne površine. Odabrane otvorene ivice šire nove površine prema van. |
| {{ui:Edge loop}} / Umetni petlju ivica | Dijeli prsten četverostranih površina koji siječe odabranu ivicu, na pola puta. Više petlji daje tješnje krivulje. |
| Umetni tačku | Dodaje ugao u sredini odabrane ivice. |
| Podijeli | Dijeli svaku odabranu površinu na četverostrane površine oko njene sredine. |
| Premosti | Spaja dvije odabrane površine ili dva otvora (odaberite po jednu otvorenu ivicu na svakom) cijevi od površina. Oba moraju imati isti broj ivica. |
| Popuni rupu | Zatvara otvor kroz odabranu otvorenu ivicu jednom površinom. |
| Zavari | Spaja odabrane uglove u jedan, u njihovoj sredini. |
| Izravnaj | Pomjera odabrane uglove na ravan koja im najbolje odgovara. |
| Izbriši | Uklanja odabrane površine, ivice (dvije površine se spajaju) ili uglove. |

## Oštre ivice, simetrija i prikaz

- {{ui:Crease}} čini odabrane ivice oštrima. **Težina oštrenja** 10 je potpuno oštro. Manja težina ostaje oštra tokom tolikog broja koraka profinjavanja, a zatim se omekšava, što daje tijesnu zaobljenost umjesto oštrog preloma. **Ukloni oštrenje** ih vraća u glatke. **Oštar vrh** učvršćuje ugao, pa površina prolazi kroz njega tačkom.
- **Simetrija** zrcali kavez preko X, Y ili Z = 0. Zadržava pozitivnu stranu, zrcali je i spaja dvije polovine. Nakon toga, izmjena na jednoj strani se događa na obje. Uglovi na ravni ogledala ostaju na njoj.
- {{ui:Display}} prebacuje između **Glatko** (površina koju će značajka imati) i **Kutija** (same površine kaveza).
- **Analiza**: **Zebraste pruge** odražavaju prugasto svjetlo iz trenutnog prikaza. Glatko se savijaju preko glatke površine i prekidaju na oštrenju. **Srednja zakrivljenost** boji konveksna područja crveno, konkavna plavo, a ravna bijelo. Mjeri se na prikazanoj mreži kotangens formulom, pa je to vodič, a ne mjerenje.

## Provjerite i završite

- **Provjeri tačno** pretvara kavez u tačnom jezgru bez mijenjanja vašeg dijela. Prijavljuje koliko B-spline krpa kavez čini, koliko ih je tačno i je li rezultat zatvoreno, valjano tijelo, te njegovu zapreminu.
- {{ui:Finish}} dodaje značajku *Forma* u historiju, ili ažurira formu koju uređujete, i vraća vas u Konstrukciju. Zatvoreni kavez postaje čvrsto tijelo. Njegova **Operacija** u panelu Konstrukcije može biti Novo tijelo, Spoji, Izreži ili Presijeci. Otvoreni kavez postaje tijelo površine.
- Da promijenite formu kasnije, odaberite je u historiji i kliknite **Uredi u Formi**. Izgrađeno tijelo je skriveno dok uređujete njen kavez.
- **Odbaci** baca kavez bez diranja historije.

## Šta je tačno, a šta aproksimirano

Svaka četverostrana površina kaveza, profinjena kada je potrebno, postaje jednu bikubičnu B-spline krpu.

- Gdje je svaki ugao površine *pravilan* (četiri ivice se spajaju unutar površine, ili tri na otvorenoj ivici ili duž oštrenja), krpa je **tačno** podjelna površina. Testovi to provjeravaju do 1e-9 mm.
- Oko **izuzetne tačke** (tri, pet ili više ivica koje se spajaju, ugao trouglaste ili peterouglaste površine, ili kraj oštrenja) nema tačne polinomske krpe. Tamo krpa uzima tačnu tačku i tangentnu ravan u tom uglu i krivulje ivica susjeda, pa se krpe i dalje spajaju bez praznine. Tangentni kontinuitet preko ivica koje se spajaju u toj tački je aproksimativan. Panel Forme i panel značajke daju najveći ugao, obično manji od 2°. Viši **Nivo** u panelu značajke čini ove krpe manjim i bližim.
- Oštra oštrenja su prave ivice čvrstog tijela, pa ih možete zaobliti.
- Svaka krpa je sopstvena površina, pa forma ima mnogo površina, a između njih se crtaju linije.

## Površinske značajke u Konstrukciji

Naredbe za površine su u meniju {{ui:More}} u Konstrukciji, pod značajkama. Potrebno im je tačno jezgro. Tijela površina se crtaju prozirno plavo. Nisu dio čvrstog tijela dok ih ne zadebljate ili sašijete.

| Naredba | Šta radi |
|---|---|
| Zakrpa | Popunjava zatvorenu petlju ivica. Prvo {{key:Shift}}+klik na ivice čvrstog tijela, ili odaberite tijelo površine da popunite njegov otvor. **Tangenta (G1)** čini da zakrpa glatko spaja tu površinu. |
| Površina prijelaza | Površina kroz jedan lanac krivulja po skici (otvorena ili zatvorena), redom iz historije. |
| Sašij | Sašiva tijela površina duž zajedničkih ivica. Ako se zatvore, rezultat je čvrsto tijelo, s Operacijom kao kod drugih značajki. |
| Zadeblji | Daje tijelu površine debljinu: duž njegove normale, protiv nje, ili polovinu na svaku stranu. Rezultat je čvrsto tijelo. |
| Pomaknuta površina | Kopija tijela površine pomjerena duž njegovih normala. Original ostaje. |
| Produži površinu | Širi površinu s jednom stranom preko ivica koje odaberete. |
| Odsijeci površinu | Siječe tijelo površine tamo gdje ga siječe drugo tijelo površine ili čvrsto tijelo. Kliknite **Odaberi tačku na dijelu** da odaberete koji dio zadržati, ili zadržite sve ostalo. |

Sašij, Zadeblji, Produži i Odsijeci troše tijelo površine od kojeg počinju. Kasnije značajke koriste novo.

Ograničenja danas: forme s nekoliko odvojenih zatvorenih dijelova se ne pretvaraju u jedno čvrsto tijelo; regularna područja se ne spajaju u veće površine; i vidi [Šta još nije izgrađeno](topic:not-built-yet).
