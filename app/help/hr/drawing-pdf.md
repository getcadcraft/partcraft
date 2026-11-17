---
title: Izrada crteža s pogledima, presjekom i GD&T
summary: Otvorite list crteža, dodajte presjek i pogled detalja, postavite datume, okvire kontrole značajki i simbole završne obrade površine, odaberite veličinu lista, ispunite zaglavlje i revizije te izvezite list kao PDF.
keywords: tablica provrta, tablica rupa, položaji provrta, oznake, crtež, 2d crtež, list, veličina lista, a4, a3, a2, a1, a0, ansi, zaglavlje, revizija, blok revizija, broj crteža, materijal, pdf, pogledi, ortogonalni, treći kvadrant, izometrija, pogled presjeka, pogled detalja, gd&t, datum, okvir kontrole značajke, tolerancija, položaj, ravnost, završna obrada, hrapavost, zaglavlje, ispis
from: 39e944c0
---

PartCraft izrađuje list crteža iz dijela: pogled sprijeda, odozgo i desno u projekciji po trećem kvadrantu, izometrijski pogled, ukupne mjere i zaglavlje na listu od A4 do A0 ili ANSI A do E. Uz to možete dodati presjek, pogled detalja i GD&T simbole. List se ažurira kada se dio promijeni, a njegove postavke spremaju se u datoteku dijela.

## Otvorite list crteža

1. Izgradite dio. (Ako ništa nije izgrađeno: „Najprije izgradite puno tijelo, pa tek onda izradite njegov crtež.“)
2. Odaberite {{ui:Crtež}} na traci alata.

3D prikaz zamjenjuje list. Traka alata prikazuje {{ui:Datum}}, {{ui:Okvir}}, {{ui:Završna obrada}}, {{ui:Detalj}}, {{ui:PDF}} i {{ui:Natrag}}, a desna ploča ima naslov **Crtež**. Statusna traka kaže kako su pogledi izrađeni: „Crtež (krivulje su crtane kao facete). Datum, Okvir i Završna obrada postavljaju GD&T na pogled; ploča postavlja presjek i pogled detalja.“ Pogledi se crtaju iz faceta mrežne jezgre, pa su zaobljeni bridovi kratki ravni dijelovi; pravi lukovi trebaju točnu jezgru, koje ova verzija nema.

Krećite se po listu: kotačićem zumirajte, povlačite desnom ili srednjom tipkom miša za pomicanje prikaza, a pritisnite {{key:F}} za prilagodbu listu. Kada je list aktivan, {{key:Plus}} i {{key:Minus}} zumiraju, a {{key:Shift}} sa strelicama pomiče prikaz.

Za povratak na 3D model odaberite {{ui:Natrag}}, {{ui:Natrag na model}} ili pritisnite {{key:Esc}} (kada ništa nije odabrano i nijedan alat nije aktivan).

## Što je na listu

- **Odabrani list**, vodoravno (A3 osim ako ne odaberete drugi), s obrubom i **zaglavljem**: naslov, tvrtka, broj crteža, revizija, materijal, nacrtao / pregledao / odobrio, datum, mjerilo, veličina lista, „Jedinice: milimetri · Projekcija po trećem kvadrantu“, te jesu li pogledi točni ili facetirani.
- **Blok revizija** u gornjem desnom kutu kada dodate reviziju.
- **Pogledi sprijeda, odozgo i desno**: pogled odozgo iznad pogleda sprijeda, pogled desno s desne strane. Skriveni bridovi su crtkani.
- **Izometrijski pogled** tamo gdje ima mjesta.
- **Ukupne mjere**: širina i visina na pogledu sprijeda, dubina na pogledu odozgo.
- Jedno **mjerilo** za glavne poglede iz ISO niza (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), odabrano tako da stane.

## Odaberite veličinu lista

Na listu crteža, bez odabira, u desnoj ploči odaberite {{ui:List}}: **A4, A3, A2, A1, A0** (ISO 216) ili **ANSI A, B, C, D, E** (11 × 8.5 do 44 × 34 in). Pogledi se ponovno raspoređuju na najvećem ISO mjerilu koje stane, pa veći list može prikazati dio veći.

## Ispunite zaglavlje

Polja **Zaglavlje** u desnoj ploči idu izravno na list: {{ui:Naslov}}, {{ui:Br. crteža}}, {{ui:Revizija}}, {{ui:Tvrtka}}, {{ui:Nacrtao}}, {{ui:Pregledao}}, {{ui:Odobrio}}, {{ui:Datum}} (godina-mjesec-dan), {{ui:Opća tolerancija}} i {{ui:Završna obrada}} (zadnja dva ispisuju se odmah iznad zaglavlja). Upišite u okvir i pritisnite {{key:Enter}} ili kliknite izvan njega. Prazan okvir ostavlja ćeliju praznom, osim:

- **Naslov** prikazuje naziv dijela dok ne upišete naslov.
- **Datum** prikazuje današnji datum dok ne upišete.
- **Revizija** prikazuje najnoviju reviziju s popisa dok ne upišete.

**Materijal** dolazi iz dijela: kliknite prazan prostor u modelu, zatim odaberite {{ui:Materijal}} na ploči Part. Isti materijal daje svojstvima mase u Measureu njihovu gustoću.

## Dodajte revizije

Pod **Revizije** kliknite {{ui:Dodaj reviziju}}. Svaki novi redak uzima sljedeće slovo (A, B, C …, nakon Z dolazi AA) i današnji datum. Upišite što je promijenjeno i tko je promjenu napravio. {{ui:Izbriši}} uklanja redak. Blok revizija u gornjem desnom kutu lista navodi ih, najstarije prvo, do 20.

Veličina lista, zaglavlje, revizije i materijal spremaju se u datoteku dijela, a svaka promjena je jedan korak za {{ui:Poništi}}.

## Dodajte pogled presjeka

Dio je presječen ravninom, a presjek je šrafiran. Kao i ostali pogledi, presjek se crta iz faceta, pa su zaobljeni bridovi kratki ravni dijelovi.

1. U desnoj ploči postavite **Presjek A-A** na **Iz pogleda sprijeda**, **Iz pogleda odozgo** ili **Iz pogleda desno**.
2. Presjek se pojavljuje na listu, šrafiran tamo gdje rez prolazi kroz materijal, s linijom reza i strelicama „A“ na pogledu iz kojeg je uzet.
3. Postavite **Rez na (mm)** da pomaknete ravninu reza. Počinje kroz sredinu dijela.

Za uklanjanje postavite **Presjek A-A** natrag na **Nema**.

## Dodajte pogled detalja

1. Postavite **Detalj B** na pogled koji želite uvećati (ili odaberite {{ui:Detalj}} na traci alata).
2. Kliknite središte područja za uvećanje, na tom pogledu. Krug s oznakom „B“ ga označava, a uvećani „Detalj B“ pojavljuje se na listu sa svojim mjerilom, na primjer „Detalj B (2:1)“.
3. Postavite **Polumjer detalja (mm)** za veličinu kruga i **Mjerilo detalja** za uvećanje: 2, 4, 5 ili 10 puta u odnosu na list.

Detalj se može uzeti iz pogleda sprijeda, odozgo, desno ili presjeka, ali ne iz izometrije. Ako nema mjesta za svaki pogled, ploča kaže „Nema mjesta na listu za: detalj. Smanjite detalj ili izostavite jedan pogled.“

## Dodajte tablicu provrta

Tablica provrta navodi provrte dijela s njihovim položajima, za bušenje ili CNC: u ploči odaberite **Tablica provrta** › **Iz pogleda odozgo** (ili sprijeda, ili desno).

- Svaki provrt viđen s kraja u tom pogledu dobiva oznaku uz sebe: **A1**, **A2** … za prvu veličinu, **B1** … za sljedeću.
- Tablica navodi svaku oznaku, njezine **X** i **Y** u milimetrima te njezinu veličinu: „Ø14 PROLAZNI“, „Ø6.6 × 10 DUBOKO“, upuštanje ili stožasto upuštanje, ili oznaku navoja za provrt s navojem.
- X i Y mjere se od donjeg lijevog kuta obrisa pogleda, označenog **X0 Y0** na listu.
- Provrti nastali obrascima su uključeni. Provrti koji nisu okomiti na pogled broje se u ploči i ne ulaze u tablicu.

Tablica ide na slobodno mjesto na listu i u PDF.

## Postavite GD&T i simbole završne obrade površine

1. Odaberite {{ui:Datum}}, {{ui:Okvir}} (okvir kontrole značajke) ili {{ui:Završna obrada}} (simbol završne obrade površine).
2. Kliknite točku na pogledu na koju se veže. Hvata se za najbližu nacrtanu liniju unutar 2.5 mm.
3. Simbol se pojavljuje s vodilicom, odabran, a desna ploča prikazuje njegove postavke.

Povucite simbol da ga pomaknete; njegova vodilica ostaje na točki. Kada je simbol odabran, strelice ga pomiču za 1 mm. {{key:Delete}} ili {{key:Backspace}} (ili {{ui:Izbriši}} na ploči) ga uklanja; {{ui:Gotovo}} ili {{key:Esc}} poništava odabir. Svaka promjena je na popisu za {{ui:Poništi}}.

### Datum

**Slovo**: A do Z, bez I, O i Q (lako se čitaju kao 1, 0 i O). Svaki novi datum uzima sljedeće slobodno slovo.

### Okvir kontrole značajke

| Postavka | Izbori |
|---|---|
| **Tolerancija** | Pravocrtnost, Ravnost, Kružnost, Cilindričnost, Profil linije, Profil plohe, Okomitost, Kutnost, Paralelnost, Položaj, Koncentričnost i Simetričnost (obje uklonjene u Y14.5-2018, i tako označene), Kružno bacanje, Ukupno bacanje |
| **Zona (mm)** | Vrijednost tolerancije, zadano 0.1 |
| **Promjer zone (⌀)** | Za značajke s cilindričnom zonom; zadano uključeno za Položaj |
| **Materijal** | RFS (nema), MMC (Ⓜ), LMC (Ⓛ), ako značajka to dopušta |
| **Primarni / sekundarni / tercijarni datum** | Do tri slova datuma, svako s **modifikatorom …** (MMB, LMB) gdje je dopušteno |

PartCraft provjerava okvir prema pravilima ASME Y14.5 i na vrhu ploče kaže što nije u redu, na primjer „Ravnost je tolerancija oblika: ne uzima reference datuma.“ ili „Položaj treba barem jednu referencu datuma.“ Redak **Čitanje** okvir opisuje riječima.

### Završna obrada površine

| Postavka | Izbori | Zadano |
|---|---|---|
| **Ra (µm)** | Srednja hrapavost | 1.6 |
| **Postupak** | bilo koji postupak, obrada skidanjem, bez skidanja materijala | obrada skidanjem |
| **Napomena** | Do 40 znakova, na primjer smjer obrade ili postupak | |

Kada ništa nije odabrano, ploča navodi **Bilješke na listu**, svaka s **Odaberi**.

## Izvezite PDF

Odaberite {{ui:PDF}} na traci alata, {{ui:Izvezi PDF}} u ploči ili {{ui:Izvoz}}, zatim {{ui:Crtež (PDF): pogledi, presjek, detalj, GD&T}} iz modela. PDF se preuzima kao `<part name> - drawing.pdf`, a statusna traka navodi što je na njemu.

Ispišite ga na „Stvarna veličina“ na papiru veličine lista da mjerilo ostane točno.

## Ograničenja

| Još nije izrađeno | Što učiniti danas |
|---|---|
| Kote osim tri ukupne mjere | Dodajte ih na PDF u aplikaciji za označavanje ili izvezite skicu ili plohu kao DXF i kotirajte je u 2D CAD programu |
| Više od jednog presjeka ili detalja; lomljeni, pomoćni i projicirani pogledi | Nije dostupno |
| Projekcija po prvom kvadrantu, pomični pogledi, uspravni listovi | Treći kvadrant, automatski raspored, vodoravno |
| Slobodne tekstualne bilješke i tablice na listu (osim blokova naslova i revizija) | Upotrijebite napomenu o završnoj obradi ili dodajte tekst na PDF |
| Crteži sklopova | Nije dostupno |

Znakovi izvan zapadnoeuropskog skupa ispisuju se kao „?“ (PDF koristi ugrađeni Helvetica font čitača). GD&T simboli crtaju se kao linije, pa se ispisuju u svakom čitaču.

## Neka list to napravi

- **List › Automatski** bira papir umjesto vas: najveće standardno mjerilo do 1:1, na najmanjem A-formatu lista koji stane pogledi pri tom mjerilu (popis pokazuje koji je odabran).
- **Kotiraj provrte** kotira provrte na pogledu koji ih najviše vidi s kraja: oznaka središta na svakom, jedna oznaka po veličini („2× Ø6 PROLAZNI“ s vodilicom) i njihovi položaji mjereni od donjeg lijevog kuta pogleda. Ukupna širina, visina i dubina uvijek su tu.
