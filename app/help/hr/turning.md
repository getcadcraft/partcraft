---
title: Tokarenje na tokarilici
summary: Planirajte, grubo, završno obradite, izradite utor, odrežite, izradite navoj i bušite okrenuti dio, prema obrisu koji dio čini kad se vrti. Tokarski alati, posmaci po okretaju, postprocesori za tokarilicu i što nije dokazano.
keywords: tokarenje, tokarilica, tokariti, planiranje, grubo, završna obrada, utor, utoriti, odrezivanje, rezanje, navoj, narezivanje, g32, g33, g96, konstantna brzina površine, css, polumjer vrha, pločica, šipka, stezna glava, promjer, posmak po okretaju, g71, g76
from: d8cc53b0
---

Proizvodnja ima sedam operacija za tokarilicu. Rade na svakom dijelu: reže se **obris koji dio čini kad se vrti** oko sredine sirovca, pa se dio koji nije okrugao tokari do okruglog oblika koji ga drži.

**Ništa ovdje nije pokrenuto na tokarilici.** Putanje testovi provjeravaju prema geometriji; dva postprocesora za tokarilicu slijede dokumentirane kodove upravljača. Najprije dokažite program u simulatoru vlastitog upravljača i u zraku.

## Postavljanje

Na kartici **Postavljanje**:

- **Os alata** je os vretena, Z tokarilice. Prednja strana dijela je na +Z; stezna glava drži drugi kraj.
- **Sirovac**: odaberite {{ui:Valjak}}, šipku. Njegov gornji odmak je ono što ravnanje skida.
- **Radna nulta točka**: središte gornje strane sirovca ili gornje strane modela stavlja Z0 na prednju plohu, uobičajeno mjesto.
- **Upravljač**: {{ui:Tokarilica tipa Fanuc (.nc)}} ili {{ui:LinuxCNC tokarilica (.ngc)}}. Postprocesor za glodanje odbija program tokarenja i to kaže.
- **Najveća brzina vretena**: granica pod kojom se održava brzina površine.

{{ui:Više}} na alatnoj traci Proizvodnje navodi sedam operacija tokarenja na vrhu kartice **Operacije**. Prva koju dodate donosi vlastiti alat: **tokarsku pločicu** (polumjer vrha, kut pločice, kut rezne oštrice) ili **nož za utore** (širina, polumjer kuta, dokle doseže). Mijenjate ih na kartici **Alati**. Posmaci su po okretaju, a brzina je brzina površine u m/min koju upravljač održava dok se promjer mijenja; dajte alatu vlastiti o/min da umjesto toga fiksirate brzinu.

## Operacije

| Operacija | Što radi |
|---|---|
| {{ui:Ploha}} | Ravna prednju stranu šipke do dijela, po jednu dubinu prolaza, od vanjske strane do malo preko središta. |
| {{ui:Grubo}} | Prolazi duž Z na razmaku **dubine rezanja**, do obrisa plus **ostavljenog materijala**; zatim jednom duž obrisa da skine stepenice. Dolina između dva ramena ulazi se uranjanjem jedne dubine rezanja. |
| {{ui:Završna obrada}} | Jedan prolaz duž obrisa na dijelu posmaka alata. |
| {{ui:Utor}} | Uranja nož jedan uz drugi gdje god može uzeti više od granice materijala koji još stoji: utore koje tokarska pločica nije mogla doseći. **Od / do Z** to sužava. |
| {{ui:Odrezivanje}} | Odrezuje dio tik iza njegove stražnje plohe, do malo preko središta, uz peck ako ga postavite. |
| {{ui:Navoj}} | Vanjski navoj: veliki promjer, korak, duljina, broj prolaza. Dubina 0 znači 0.6134 × korak (navoj od 60°). Svaki prolaz uzima jednaku površinu strugotine; prolazi za opružno izravnavanje ponavljaju zadnji. |
| {{ui:Bušenje}} | Svrdlo na središnjoj liniji do dubine, uz peck. |

## Kako se alat drži izvan dijela

Pločica se tretira kao ono što jest: njezina kružnica vrha i iza nje zadnji brid, ravna linija čiji je kut 180° umanjen za kut rezne oštrice i kut pločice. Taj se oblik spušta na obris u svakoj točki duž Z, a putanja je mjesto gdje se zaustavi. Stoga:

- **Polumjer vrha već je u putanji.** Postprocesori ne zapisuju `G41` ni `G42`; koordinate su programirana točka alata (kut kvadrata oko vrha).
- Pločica **ne može slijediti stijenku strmiju od svog zadnjeg brida**. Utor iza ramena ostavlja se netaknut, a završna operacija kaže koliko obrisa nije mogla dosegnuti. Operacija {{ui:Utor}} to preuzima.
- Sirovac se prati duž Z nakon svakog reza, pa grubo obrađivanje ne reže zrak, utoriranje pronalazi što je ostalo, a svaka operacija prikazuje volumen koji je skinula i je li zarezala u dio.

## Ograničenja

- **Samo vanjsko tokarenje**: nema bušilice za provrte, nema unutarnjih utora ni navoja, nema čeonih utora.
- Jedno vreteno, dio stegnut na −Z. Nema pomoćnog vretena, nema pogonskih alata, nema osi C ni Y, nema mirujućeg oslonca niti pomaka konjića.
- Putanje su ravni pomaci: krivulje su kratke linije unutar tolerancije (bez `G2`/`G3`), a grubo obrađivanje i navoji zapisuju se prolaz po prolaz (bez ciklusa `G71` ni `G76`).
- Narezivanje su ravni prolazi s ravnim izvlačenjem na kraju; navoju dajte utor za rasterećenje. Navoj se ne prikazuje u sirovcu.
- Bušenje na središtu ne mijenja model sirovca.
- Držač, revolver i stezna glava se ne provjeravaju. Postavite **Zaustavi na Z** da alat ostane podalje od čeljusti.
- Posmaci i brzine su početne vrijednosti, kao i kod glodanja.
