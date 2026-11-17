---
title: Napravi crtež sa pogledima, presjekom i GD&T
summary: Otvorite list crteža, dodajte presjek i detaljni pogled, postavite baze, okvire kontrole tolerancija i simbole završne obrade površine, izaberite veličinu lista, popunite blok naslova i revizija i izvezite list kao PDF.
keywords: tabela rupa, grafikon rupa, pozicije rupa, oznake, crtež, 2D crtež, list, veličina lista, a4, a3, a2, a1, a0, ansi, blok naslova, revizija, blok revizija, broj crteža, materijal, pdf, pogledi, ortogonalni, treći ugao, izometrija, pogled presjeka, detaljni pogled, gd&t, baza, okvir kontrole tolerancija, tolerancija, pozicija, ravnost, završna obrada površine, hrapavost, štampa
from: 39e944c0
---

PartCraft pravi list crteža iz dijela: prednji, gornji i desni pogled u projekciji trećeg ugla, izometrijski pogled, ukupne dimenzije i blok naslova na listu od A4 do A0 ili ANSI A do E. Pored toga možete dodati presjek, detaljni pogled i GD&T simbole. List se ažurira kad se dio promijeni, a njegove postavke se čuvaju u datoteci dijela.

## Otvori list crteža

1. Izgradite dio. (Ako ništa nije izgrađeno: "Prvo izgradi čvrsto tijelo, zatim napravi njegov crtež.")
2. Odaberite {{ui:Crtež}} na traci s alatima.

3D prikaz je zamijenjen listom. Traka s alatima prikazuje {{ui:Baza}}, {{ui:Okvir}}, {{ui:Obrada}}, {{ui:Detalj}}, {{ui:PDF}} i {{ui:Nazad}}, a desni panel je naslovljen **Crtež**. Statusna traka kaže kako su pogledi napravljeni: "Crtež (krive su nacrtane kao fasete). Baza, Okvir i Obrada postavljaju GD&T na pogled; panel postavlja presjek i detaljni pogled." Pogledi su nacrtani iz fasetā mrežnog jezgra, pa su zaobljene ivice kratki ravni dijelovi; prave lukove treba tačno jezgro, koje ova verzija nema.

Krećite se po listu: okrećite točkić za zumiranje, prevlačite desnim ili srednjim dugmetom za pomjeranje, pritisnite {{key:F}} da list stane u prikaz. Kada je list u fokusu, {{key:Plus}} i {{key:Minus}} zumiraju, a {{key:Shift}} sa strelicama pomjera pogled.

Odaberite {{ui:Nazad}}, {{ui:Nazad na model}} ili pritisnite {{key:Esc}} (kada ništa nije odabrano i nijedan alat nije aktivan) da se vratite na 3D model.

## Šta je na listu

- **List koji odaberete**, položen (A3 osim ako izaberete drugi), sa okvirom i **blokom naslova**: naslov, kompanija, broj crteža, revizija, materijal, nacrtao / provjerio / odobrio, datum, razmjera, veličina lista, "Jedinice: milimetri · Projekcija trećeg ugla", i da li su pogledi tačni ili nacrtani iz fasetā.
- **Blok revizije** u gornjem desnom uglu kada dodate reviziju.
- **Prednji, gornji i desni pogled**: gornji pogled iznad prednjeg, desni pogled desno od njega. Skrivene ivice su isprekidane.
- **Izometrijski pogled** gdje ima mjesta.
- **Ukupne dimenzije**: širina i visina na prednjem pogledu, dubina na gornjem pogledu.
- Jedna **razmjera** za glavne poglede iz ISO niza (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), izabrana tako da stanu.

## Odaberi veličinu lista

Na listu crteža, bez odabira, izaberite {{ui:List}} u desnom panelu: **A4, A3, A2, A1, A0** (ISO 216) ili **ANSI A, B, C, D, E** (11 × 8.5 do 44 × 34 in). Pogledi se ponovo raspoređuju na najveću ISO razmjeru koja stane, pa veći list može prikazati dio veći.

## Popuni blok naslova

Polja **Blok naslova** u desnom panelu idu direktno na list: {{ui:Naslov}}, {{ui:Broj crteža}}, {{ui:Revizija}}, {{ui:Kompanija}}, {{ui:Nacrtao}}, {{ui:Provjerio}}, {{ui:Odobrio}}, {{ui:Datum}} (godina-mjesec-dan), {{ui:Opća tolerancija}} i {{ui:Obrada}} (posljednja dva se štampaju tik iznad bloka naslova). Upišite u polje i pritisnite {{key:Enter}} ili kliknite van. Prazno polje ostavlja ćeliju praznom, osim:

- **Naslov** prikazuje ime dijela dok ne upišete naslov.
- **Datum** prikazuje današnji datum dok ne upišete.
- **Revizija** prikazuje najnoviju reviziju iz liste dok ne upišete.

**Materijal** dolazi iz dijela: kliknite prazan prostor u modelu, zatim izaberite {{ui:Materijal}} u panelu Dio. Isti materijal daje svojstvima mase iz Measure gustinu.

## Dodaj revizije

Pod **Revizije** kliknite {{ui:Dodaj reviziju}}. Svaki novi red uzima sljedeće slovo (A, B, C …, poslije Z dolazi AA) i današnji datum. Upišite šta je promijenjeno i ko je napravio promjenu. {{ui:Izbriši}} uklanja red. Blok revizije u gornjem desnom uglu lista navodi ih, najstarija prva, do 20.

Veličina lista, blok naslova, revizije i materijal se čuvaju u datoteci dijela, a svaka promjena je jedan korak za {{ui:Poništi}}.

## Dodaj presjek

Dio je presječen ravninom, a presjek je šrafiran. Kao i ostali pogledi, presjek je nacrtan iz fasetā, pa su zaobljene ivice kratki ravni dijelovi.

1. U desnom panelu postavite **Presjek A-A** na **Iz prednjeg pogleda**, **Iz gornjeg pogleda** ili **Iz desnog pogleda**.
2. Presjek se pojavljuje na listu, šrafiran tamo gdje linija reza prolazi kroz materijal, sa linijom reza i njenim strelicama "A" na pogledu sa kojeg je uzet.
3. Postavite **Rez na (mm)** da pomjerite ravninu reza. Počinje kroz sredinu dijela.

Vratite **Presjek A-A** na **Nema** da ga uklonite.

## Dodaj detaljni pogled

1. Postavite **Detalj B** na pogled koji treba uvećati (ili odaberite {{ui:Detalj}} na traci s alatima).
2. Kliknite centar područja za uvećanje, na tom pogledu. Krug označen "B" ga obilježava, a uvećani "Detalj B (2:1)" se pojavljuje na listu sa svojom razmjerom.
3. Postavite **Radijus detalja (mm)** za veličinu kruga i **Razmjera detalja** za uvećanje: 2, 4, 5 ili 10 × u odnosu na list.

Detalj se može uzeti sa prednjeg, gornjeg, desnog ili presječnog pogleda, ne sa izometrijskog. Ako nema mjesta za sve poglede, panel kaže "Nema mjesta na listu za: detalj. Napravite detalj manjim ili izostavite pogled."

## Dodaj tabelu rupa

Tabela rupa navodi rupe dijela sa njihovim pozicijama, za bušenje ili CNC: u panelu odaberite **Tabela rupa** › **Iz gornjeg pogleda** (ili prednjeg, ili desnog).

- Svaka rupa koja se vidi s kraja u tom pogledu dobija oznaku pored sebe: **A1**, **A2** … za prvu veličinu, **B1** … za sljedeću.
- Tabela navodi svaku oznaku, njene **X** i **Y** u milimetrima i njenu veličinu: "Ø14 THRU", "Ø6.6 × 10 DEEP", upuštanje ili upušteni konus, ili oznaku navoja za rupu sa navojem.
- X i Y se mjere od donjeg lijevog ugla obrisa pogleda, obilježenog **X0 Y0** na listu.
- Rupe napravljene uzorcima su uključene. Rupe koje nisu okomite na pogled broje se u panelu i izostavljaju iz tabele.

Tabela ide u slobodno područje lista i u PDF.

## Postavi GD&T i simbole završne obrade

1. Odaberite {{ui:Baza}}, {{ui:Okvir}} (okvir kontrole tolerancija) ili {{ui:Obrada}} (simbol završne obrade površine).
2. Kliknite tačku na pogledu gdje se veže. Hvata se za najbližu nacrtanu liniju unutar 2.5 mm.
3. Simbol se pojavljuje sa vodilicom, odabran, a desni panel prikazuje njegove postavke.

Prevucite simbol da ga pomjerite; njegova vodilica ostaje na tački. Kada je simbol odabran, strelice ga pomjeraju za 1 mm. {{key:Delete}} ili {{key:Backspace}} (ili {{ui:Izbriši}} u panelu) ga uklanja; {{ui:Gotovo}} ili {{key:Esc}} poništava odabir. Svaka promjena je na listi za poništavanje.

### Baza

**Slovo**: od A do Z, bez I, O i Q (čitaju se kao 1, 0 i O). Svaka nova baza uzima sljedeće slobodno slovo.

### Okvir kontrole tolerancija

| Postavka | Izbori |
|---|---|
| **Tolerancija** | Pravost, Ravnost, Kružnost, Cilindričnost, Profil linije, Profil površine, Normalnost, Ugaonost, Paralelnost, Pozicija, Koncentričnost i Simetričnost (obje uklonjene u Y14.5-2018 i tako označene), Kružno bacanje, Ukupno bacanje |
| **Zona (mm)** | Vrijednost tolerancije, podrazumijevano 0.1 |
| **Prečnik zone (⌀)** | Za karakteristike sa cilindričnom zonom; uključeno podrazumijevano za Poziciju |
| **Materijal** | RFS (nema), MMC (Ⓜ), LMC (Ⓛ), gdje karakteristika to dozvoljava |
| **Primarna / Sekundarna / Tercijarna baza** | Do tri slova baze, svako sa **… modifikatorom** (MMB, LMB) gdje je dozvoljen |

PartCraft provjerava okvir prema pravilima ASME Y14.5 i navodi šta nije u redu na vrhu panela, na primjer "Ravnost je tolerancija oblika: ne uzima reference baza." ili "Pozicija treba najmanje jednu referencu baze." Red **Čita se** objašnjava okvir.

### Završna obrada površine

| Postavka | Izbori | Podrazumijevano |
|---|---|---|
| **Ra (µm)** | Srednja hrapavost | 1.6 |
| **Proces** | bilo koji proces, obrađeno, bez skidanja materijala | obrađeno |
| **Napomena** | Do 40 znakova, na primjer smjer tragova ili proces | |

Bez odabira, panel navodi **Napomene na listu**, svaka sa **Odaberi**.

## Izvezi PDF

Odaberite {{ui:PDF}} na traci s alatima, {{ui:Izvezi PDF}} u panelu, ili {{ui:Izvoz}}, zatim {{ui:Crtež (PDF): pogledi, presjek, detalj, GD&T}} iz modela. PDF se preuzima kao `<part name> - drawing.pdf`, a statusna traka navodi šta je na njemu.

Štampajte u "Stvarna veličina" na papiru veličine lista da razmjera ostane tačna.

## Ograničenja

| Još nije napravljeno | Uradite ovo danas |
|---|---|
| Dimenzije osim tri ukupne | Dodajte ih na PDF sa aplikacijom za označavanje, ili izvezite skicu ili površinu kao DXF i dimenzionirajte je u 2D CAD programu |
| Više od jednog presjeka ili detalja; izlomljeni, pomoćni i projicirani pogledi | Nije dostupno |
| Prvi ugao projekcije, pomjerajući pogledi, uspravni listovi | Treći ugao, automatski raspored, ležeći list |
| Slobodne tekstualne napomene i tabele na listu (osim blokova naslova i revizija) | Upotrijebite napomenu o završnoj obradi, ili dodajte tekst na PDF |
| Crteži sklopova | Nije dostupno |

Znakovi van zapadnoevropskog skupa se štampaju kao "?" (PDF koristi ugrađeni font Helvetica čitača). Simboli GD&T su nacrtani kao linije, pa se štampaju u svakom čitaču.

## Neka list to uradi

- **List › Automatski** bira papir za vas: najveća standardna razmjera do 1:1, na najmanjem A-formatu lista koji u toj razmjeri stane pogledi (lista pokazuje koji je uzet).
- **Dimenzioniraj rupe** dimenzionira rupe na pogledu koji ih najviše vidi s kraja: oznaka centra na svakoj, jedan natpis po veličini ("2× Ø6 THRU" sa vodilicom), i njihove pozicije mjerene od donjeg lijevog ugla pogleda. Ukupna širina, visina i dubina su uvijek tu.
