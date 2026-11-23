---
title: Struganje na tokarilici
summary: Čeonjenje, grubo, završno, utor, odrezivanje, navoj i bušenje obrtnog dijela, prema obrisu koji dio čini kad se okreće. Alati za tokarilicu, posmaci po okretaju, postprocesori za tokarilicu i šta nije dokazano.
keywords: struganje, tokarilica, tokariti, čeonjenje, grubo, završno, utor, rezanje utora, odrezivanje, navoj, rezanje navoja, g32, g33, g96, konstantna brzina površine, css, poluprečnik vrha, ploča, šipka, stega, prečnik, posmak po okretaju, g71, g76
from: d8cc53b0
---

Izrada ima sedam operacija za tokarilicu. Rade na bilo kojem dijelu: reže se **obris koji dio čini kad se okreće** oko središta sirovca, pa se dio koji nije okrugao struže do okruglog oblika koji ga drži.

**Ništa ovdje nije pokrenuto na tokarilici.** Putanje su provjerene naspram geometrije testovima; dva postprocesora za tokarilicu slijede dokumentovane kodove upravljačkih jedinica. Prvo dokažite program u simulatoru vaše upravljačke jedinice i u zraku.

## Podešavanje

Na kartici **Podešavanje**:

- **Osa alata** je osa vretena, Z tokarilice. Prednja strana dijela je na +Z; stega drži drugi kraj.
- **Sirovac**: izaberite {{ui:Valjak}}, šipku. Njen gornji ofset je ono što čeonjenje skida.
- **Radni početak**: centar na vrhu sirovca ili na vrhu modela stavlja Z0 na prednju stranu, uobičajeno mjesto.
- **Upravljačka jedinica**: {{ui:Tokarilica tipa Fanuc (.nc)}} ili {{ui:LinuxCNC tokarilica (.ngc)}}. Postprocesor za glodanje odbija program za struganje i to kaže.
- **Najveća brzina vretena**: granica pod kojom se održava brzina površine.

{{ui:Više}} na alatnoj traci Izrade navodi sedam operacija struganja na vrhu kartice **Operacije**. Prva koju dodate donosi svoj alat: **ploču za struganje** (poluprečnik vrha, ugao ploče, ugao reznog ruba) ili **nož za utore** (širina, poluprečnik ugla, koliko duboko dopire). Mijenjajte ih na kartici **Alati**. Posmaci su po okretaju, a brzina je brzina površine u m/min koju upravljačka jedinica održava dok se prečnik mijenja; dajte alatu sopstvene o/min da fiksirate brzinu.

## Operacije

| Operacija | Šta radi |
|---|---|
| {{ui:Površina}} | Čeonja prednju stranu šipke do dijela, korak po korak dubine, od vana do malo preko centra. |
| {{ui:Grubo}} | Prolazi duž Z na razmaku **dubine rezanja**, do obrisa plus **materijal za ostavljanje**; zatim jednom duž obrisa da skine stepenice. Dolina između dva ramena ulazi uranjanjem jedne dubine rezanja. |
| {{ui:Obrada}} | Jedan prolaz duž obrisa na dijelu posmaka alata. |
| {{ui:Utor}} | Uranja nož uporedo gdje god može uzeti više od granice materijala koji još stoji: utore koje ploča za struganje nije mogla dosegnuti. **Od / do Z** ga sužava. |
| {{ui:Odrezivanje}} | Odsijeca dio tačno iza njegove zadnje strane, do malo preko centra, s isprekidanim rezanjem ako ga postavite. |
| {{ui:Navoj}} | Vanjski navoj: veliki prečnik, korak, dužina, broj prolaza. Dubina 0 znači 0,6134 × korak (navoj od 60°). Svaki prolaz uzima istu površinu strugotine; prolazi za oslobađanje ponavljaju posljednji. |
| {{ui:Bušenje}} | Bušilica na središnjoj liniji do dubine, s isprekidanim rezanjem. |

## Kako se alat drži podalje od dijela

Ploča se uzima kakva jeste: njen kružni vrh i iza njega zadnja ivica, prava linija čiji je ugao 180° manje od ugla reznog ruba i ugla ploče. Taj oblik se spušta na obris u svakoj tački duž Z, a putanja je mjesto gdje se zaustavi. Zato:

- **Poluprečnik vrha je već u putanji.** Postprocesori ne zapisuju `G41` ni `G42`; koordinate su programirana tačka alata (ugao kvadrata oko vrha).
- Ploča **ne može pratiti zid strmiji od svoje zadnje ivice**. Utor iza ramena se ostavlja, a operacija završne obrade kaže koliki dio obrisa nije mogla dosegnuti. Operacija {{ui:Utor}} to uzima.
- Materijal se prati duž Z nakon svakog reza, pa grubo obrađivanje ne reže zrak, utor nalazi šta je ostalo, a svaka operacija pokazuje zapreminu koju je uklonila i da li je zarezala u dio.

## Ograničenja

- **Samo vanjsko struganje**: nema unutrašnjeg noža, nema unutrašnjih utora ni navoja, nema čeonih utora.
- Jedno vreteno, dio učvršćen na −Z. Nema pomoćnog vretena, nema živih alata, nema C ili Y ose, nema pomjeranja mirne oslonce ni konjića.
- Putanje su prave linije: krive su kratke linije unutar tolerancije (bez `G2`/`G3`), a grubo i navoj se zapisuju prolaz po prolaz (bez ciklusa `G71` ili `G76`).
- Navoj je ravni prolazi s pravim izvlačenjem na kraju; dajte navoju utor za oslobađanje. Navoj se ne prikazuje u sirovcu.
- Bušenje na centru ne mijenja model sirovca.
- Držač, revolverska glava i stega se ne provjeravaju. Postavite **Zaustavi na Z** da držite alat podalje od čeljusti.
- Posmaci i brzine su početne vrijednosti, kao i kod glodanja.
