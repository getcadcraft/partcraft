---
title: Struganje na strugu
summary: Obradite čeono, grubo, završno, žlebljenje, odsecanje, navoj i bušenje obrtnog dela, iz konture koju deo čini kada se okreće. Strugarski alati, posmaci po obrtaju, postprocesori za strug i šta nije dokazano.
keywords: struganje, strug, okretanje, čeono, grubo, završna obrada, žlebljenje, odsecanje, navoj, g32, g33, g96, konstantna brzina površine, css, poluprečnik vrha, pločica, šipka, stezna glava, prečnik, posmak po obrtaju, g71, g76
from: d8cc53b0
---

Proizvodnja ima sedam operacija za strug. Rade na bilo kom delu: seče se **kontura koju deo čini kada se okreće** oko sredine sirovca, pa se deo koji nije okrugao struže do okruglog oblika koji ga drži.

**Ništa ovde nije pušteno na strugu.** Putanje su proverene u odnosu na geometriju testovima; dva postprocesora za strug prate dokumentovane kodove upravljača. Dokažite program u simulatoru vašeg upravljača i u vazduhu pre svega.

## Postavka

Na kartici **Postavka**:

- **Osa alata** je osa vretena, Z struga. Prednja strana dela je na +Z; stezna glava drži drugi kraj.
- **Sirovac**: izaberite {{ui:Valjak}}, šipku. Njen gornji pomak je ono što čeona operacija uklanja.
- **Radni početak**: centar na vrhu sirovca ili na vrhu modela stavlja Z0 na prednju stranu, uobičajeno mesto.
- **Upravljač**: {{ui:Strug tipa Fanuc (.nc)}} ili {{ui:LinuxCNC strug (.ngc)}}. Postprocesor za glodanje odbija program za struganje i to kaže.
- **Najveća brzina vretena**: granica pod kojom se održava brzina površine.

{{ui:Više}} na traci Proizvodnje navodi sedam operacija struganja na vrhu kartice **Operacije**. Prva koju dodate donosi svoj alat: **pločicu za struganje** (poluprečnik vrha, ugao pločice, ugao reznе ivice) ili **nož za žlebljenje** (širina, poluprečnik ugla, koliko duboko dopire). Menjajte ih na kartici **Alati**. Posmaci su po obrtaju, a brzina je brzina površine u m/min koju upravljač održava dok se prečnik menja; zadajte alatu sopstveni rpm da biste umesto toga fiksirali brzinu.

## Operacije

| Operacija | Šta radi |
|---|---|
| {{ui:Površ}} | Čeono obrađuje prednju stranu šipke do dela, korak dubine po korak, od spolja do malo iza centra. |
| {{ui:Grubo}} | Prolazi duž Z na razmaku **dubine reza**, do konture plus **ostavljenog viška**; zatim jednom duž konture da skine stepenice. Dolina između dva ramena ulazi uranjanjem jedne dubine reza. |
| {{ui:Obrada}} | Jedan prolaz duž konture na delu posmaka alata. |
| {{ui:Žleb}} | Uranja nož bočno gde god može da uzme više od granice viška koji je još ostao: žlebove koje pločica za struganje nije dosegla. **Od / do Z** ga sužava. |
| {{ui:Odseci}} | Odseca deo tačno iza zadnje strane, do malo iza centra, sa isprekidanim koracima ako ga podesite. |
| {{ui:Navoj}} | Spoljni navoj: spoljni prečnik, korak, dužina, broj prolaza. Dubina 0 znači 0.6134 × korak (navoj od 60°). Svaki prolaz uzima istu površinu strugotine; prolazi za oprugu ponavljaju poslednji. |
| {{ui:Bušenje}} | Svrdlo na osi centra do dubine, sa isprekidanim koracima. |

## Kako se alat drži van dela

Pločica se shvata kao ono što jeste: njen krug vrha, i iza njega zadnja ivica, prava linija čiji je ugao 180° manje od ugla reznе ivice i ugla pločice. Taj oblik se spušta na konturu u svakoj tački duž Z, a putanja je mesto gde se zaustavlja. Zato:

- **Poluprečnik vrha je već u putanji.** Postprocesori ne pišu `G41` ili `G42`; koordinate su programirana tačka alata (ugao kvadrata oko vrha).
- Pločica **ne može da prati zid strmiji od svoje zadnje ivice**. Žleb iza ramena se ostavlja, a operacija završne obrade kaže koliko konture nije mogla da dosegne. Operacija {{ui:Žleb}} to uzima.
- Sirovac se prati duž Z posle svakog reza, pa grubo obrađivanje ne seče vazduh, žlebljenje nalazi šta je ostalo, a svaka operacija pokazuje zapreminu koju je uklonila i da li je posekla deo.

## Ograničenja

- **Samo spoljno struganje**: nema unutrašnjeg noža, nema unutrašnjih žlebova ili navoja, nema čeonih žlebova.
- Jedno vreteno, deo držan na −Z. Nema pomoćnog vretena, nema živih alata, nema C ili Y ose, nema mirujućeg oslonca ni pomeranja zadnjeg centra.
- Putanje su prava kretanja: krive su kratke linije u okviru tolerancije (bez `G2`/`G3`), a grubo obrađivanje i navoj se pišu prolaz po prolaz (bez ciklusa `G71` ili `G76`).
- Navoj je prava prolaza sa pravim izvlačenjem na kraju; dajte navoju žleb za rasterećenje. Navoj se ne prikazuje u sirovcu.
- Bušenje na centru ne menja model sirovca.
- Držač, revolver i stezna glava se ne proveravaju. Postavite **Zaustavi na Z** da držite alat dalje od čeljusti.
- Posmaci i brzine su početne vrednosti, kao za glodanje.
