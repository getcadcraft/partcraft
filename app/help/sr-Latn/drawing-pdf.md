---
title: Napravite crtež sa pogledima, presekom i GD&T
summary: Otvorite list crteža, dodajte presek i uvećani detalj, postavite datume, okvire tolerancije i simbole završne obrade površine, izaberite veličinu lista, popunite natpisni blok i revizije i izvezite list kao PDF.
keywords: tabela rupa, rupe, oznake, crtež, 2D crtež, list, veličina lista, a4, a3, a2, a1, a0, ansi, natpisni blok, revizija, blok revizija, broj crteža, materijal, pdf, pogledi, ortogonalni, treći ugao, izometrija, presek, detalj, gd&t, datum, okvir tolerancije, tolerancija, položaj, ravnost, završna obrada površine, hrapavost, štampa
from: 39e944c0
---

PartCraft pravi list crteža od dela: prednji, gornji i desni pogled u projekciji trećeg ugla, izometrijski pogled, ukupne mere i natpisni blok na listu od A4 do A0 ili ANSI A do E. Preko toga možete dodati presek, detalj i GD&T simbole. List se ažurira kada se deo promeni, a njegova podešavanja se čuvaju u datoteci dela.

## Otvaranje lista crteža

1. Izgradite deo. (Ako ništa nije izgrađeno: „Prvo izgradite čvrsto telo, pa napravite njegov crtež.“)
2. Izaberite {{ui:Crtež}} na traci sa alatkama.

3D prikaz se menja listom. Traka sa alatkama prikazuje {{ui:Datum}}, {{ui:Okvir}}, {{ui:Obrada}}, {{ui:Detalj}}, {{ui:PDF}} i {{ui:Nazad}}, a desni panel je naslovljen **Crtež**. Statusna traka kaže kako su pogledi napravljeni: „Crtež (krive su crtane kao facete). Datum, Okvir i Obrada postavljaju GD&T na pogled; panel postavlja presek i detalj.“ Pogledi se crtaju iz faceta mrežnog jezgra, pa su zaobljene ivice kratki ravni delovi; prave lukove traži tačno jezgro, koje ova verzija nema.

Krećite se po listu: okrećite točkić za zumiranje, prevlačite desnim ili srednjim dugmetom za pomeranje pogleda, pritisnite {{key:F}} da list stane u prikaz. Kada je list u fokusu, {{key:Plus}} i {{key:Minus}} zumiraju, a {{key:Shift}} sa strelicama pomera pogled.

Izaberite {{ui:Nazad}}, {{ui:Nazad na model}} ili pritisnite {{key:Esc}} (kada ništa nije izabrano i nijedan alat nije aktivan) da se vratite na 3D model.

## Šta je na listu

- **List koji izaberete**, položen (A3 osim ako ne izaberete drugo), sa okvirom i **natpisnim blokom**: naslov, firma, broj crteža, revizija, materijal, nacrtao / proverio / odobrio, datum, razmera, veličina lista, „Jedinice: milimetri · Projekcija trećeg ugla“, i da li su pogledi tačni ili facetirani.
- **Blok revizija** u gornjem desnom uglu kada dodate reviziju.
- **Prednji, gornji i desni pogled**: gornji pogled iznad prednjeg, desni pogled desno od njega. Skrivene ivice su isprekidane.
- **Izometrijski pogled** tamo gde ima mesta.
- **Ukupne mere**: širina i visina na prednjem pogledu, dubina na gornjem pogledu.
- Jedna **razmera** za glavne poglede iz ISO serije (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), izabrana tako da stanu.

## Izbor veličine lista

Na listu crteža, bez izabranog ičega, izaberite {{ui:List}} u desnom panelu: **A4, A3, A2, A1, A0** (ISO 216) ili **ANSI A, B, C, D, E** (11 × 8.5 do 44 × 34 in). Pogledi se ponovo raspoređuju na najveću ISO razmeru koja stane, pa veći list može prikazati deo većim.

## Popunjavanje natpisnog bloka

Polja **Natpisni blok** u desnom panelu idu direktno na list: {{ui:Naslov}}, {{ui:Broj crteža}}, {{ui:Revizija}}, {{ui:Firma}}, {{ui:Nacrtao}}, {{ui:Proverio}}, {{ui:Odobrio}}, {{ui:Datum}} (godina-mesec-dan), {{ui:Opšta tolerancija}} i {{ui:Obrada}} (poslednja dva se štampaju tik iznad natpisnog bloka). Upišite u polje i pritisnite {{key:Enter}} ili kliknite van njega. Prazno polje ostavlja ćeliju praznom, osim:

- **Naslov** prikazuje ime dela dok ne upišete drugo.
- **Datum** prikazuje današnji dan dok ne upišete drugi.
- **Revizija** prikazuje najnoviju reviziju iz liste dok ne upišete drugu.

**Materijal** dolazi iz dela: kliknite prazan prostor u modelu, zatim izaberite {{ui:Materijal}} u panelu Deo. Isti materijal daje svojstvima mase iz Merenja gustinu.

## Dodavanje revizija

Pod **Revizije** kliknite {{ui:Dodaj reviziju}}. Svaki novi red dobija sledeće slovo (A, B, C …, posle Z dolazi AA) i današnji datum. Upišite šta je promenjeno i ko je izmenu napravio. {{ui:Izbriši}} uklanja red. Blok revizija u gornjem desnom uglu lista navodi ih, najstarije prvo, do 20.

Veličina lista, natpisni blok, revizije i materijal čuvaju se u datoteci dela, a svaka promena je jedan korak {{ui:Opozovi}}.

## Dodavanje preseka

Deo je presečen ravni i presek je šrafiran. Kao i ostali pogledi, presek se crta iz faceta, pa su zaobljene ivice kratki ravni delovi.

1. U desnom panelu postavite **Presek A-A** na **Od prednjeg pogleda**, **Od gornjeg pogleda** ili **Od desnog pogleda**.
2. Presek se pojavljuje na listu, šrafiran tamo gde presečna ravan prolazi kroz materijal, sa linijom preseka i njenim strelicama „A“ na pogledu sa kog se uzima.
3. Postavite **Presek na (mm)** da pomerite ravan preseka. Počinje kroz sredinu dela.

Postavite **Presek A-A** nazad na **Nema** da ga uklonite.

## Dodavanje detalja

1. Postavite **Detalj B** na pogled koji želite da uvećate (ili izaberite {{ui:Detalj}} na traci sa alatkama).
2. Kliknite centar oblasti za uvećanje, na tom pogledu. Krug označen sa „B“ to obeležava, a uvećani **Detalj B** se pojavljuje na listu sa sopstvenom razmerom, na primer „Detalj B (2:1)“.
3. Postavite **Poluprečnik detalja (mm)** za veličinu kruga i **Razmera detalja** za uvećanje: 2, 4, 5 ili 10 puta u odnosu na list.

Detalj se može uzeti sa prednjeg, gornjeg, desnog pogleda ili preseka, ali ne sa izometrije. Ako nema mesta za sve poglede, panel kaže „Nema mesta na listu za: detalj. Smanjite detalj ili izostavite pogled.“

## Dodavanje tabele rupa

Tabela rupa izlistava rupe dela sa njihovim položajima, za bušenje ili CNC: u panelu izaberite **Tabela rupa** › **Od gornjeg pogleda** (ili prednjeg, ili desnog).

- Svaka rupa koja se vidi s kraja u tom pogledu dobija oznaku pored sebe: **A1**, **A2** … za prvu veličinu, **B1** … za sledeću.
- Tabela navodi svaku oznaku, njen **X** i **Y** u milimetrima i njenu veličinu: „Ø14 PROLAZNA“, „Ø6.6 × 10 DUBOKA“, upuštanje ili konusno upuštanje, ili oznaku navoja za rupu sa navojem.
- X i Y se mere od donjeg levog ugla obrisa pogleda, označenog **X0 Y0** na listu.
- Rupe nastale ponavljanjem su uključene. Rupe koje nisu normalne na pogled broje se u panelu i izostavljaju iz tabele.

Tabela ide u slobodan deo lista i u PDF.

## Postavljanje GD&T i simbola završne obrade površine

1. Izaberite {{ui:Datum}}, {{ui:Okvir}} (okvir kontrole obeležja) ili {{ui:Obrada}} (simbol završne obrade površine).
2. Kliknite tačku na pogledu gde se vezuje. Privlači se na najbližu nacrtanu liniju unutar 2.5 mm.
3. Simbol se pojavljuje sa pokaznom linijom, izabran, i desni panel prikazuje njegova podešavanja.

Prevucite simbol da ga pomerite; njegova pokazna linija ostaje na tački. Kada je simbol izabran, strelice ga pomeraju za 1 mm. {{key:Delete}} ili {{key:Backspace}} (ili {{ui:Izbriši}} u panelu) ga uklanja; {{ui:Gotovo}} ili {{key:Esc}} poništava izbor. Svaka promena je na listi opoziva.

### Datum

**Slovo**: od A do Z, bez I, O i Q (liče na 1, 0 i O). Svaki novi datum dobija sledeće slobodno slovo.

### Okvir kontrole obeležja

| Podešavanje | Izbori |
|---|---|
| **Tolerancija** | Pravolinijskost, Ravnost, Kružnost, Cilindričnost, Profil linije, Profil površine, Normalnost, Ugaonost, Paralelnost, Položaj, Koaksijalnost i Simetrija (obe uklonjene u Y14.5-2018 i tako obeležene), Kružno bacanje, Ukupno bacanje |
| **Zona (mm)** | Vrednost tolerancije, podrazumevano 0.1 |
| **Prečnik zone (⌀)** | Za obeležja sa cilindričnom zonom; podrazumevano uključeno za Položaj |
| **Materijal** | RFS (nema), MMC (Ⓜ), LMC (Ⓛ), gde obeležje to dozvoljava |
| **Primarni / Sekundarni / Tercijarni datum** | Do tri oznake datuma, svaka sa **… modifikatorom** (MMB, LMB) gde je dozvoljeno |

PartCraft proverava okvir prema pravilima ASME Y14.5 i na vrhu panela kaže šta nije u redu, na primer „Ravnost je tolerancija oblika: ne uzima reference datuma.“ ili „Položaj zahteva bar jednu referencu datuma.“ Red **Čita se** objašnjava okvir.

### Završna obrada površine

| Podešavanje | Izbori | Podrazumevano |
|---|---|---|
| **Ra (µm)** | Srednje odstupanje hrapavosti | 1.6 |
| **Postupak** | bilo koji postupak, obrada skidanjem, bez skidanja materijala | obrada skidanjem |
| **Napomena** | Do 40 znakova, na primer pravac brazdi ili postupak | |

Kada ništa nije izabrano, panel izlistava **Napomene na listu**, svaku sa **Izaberi**.

## Izvoz PDF-a

Izaberite {{ui:PDF}} na traci sa alatkama, {{ui:Izvezi PDF}} u panelu, ili {{ui:Izvezi}}, zatim {{ui:Crtež (PDF): pogledi, presek, detalj, GD&T}} iz modela. PDF se preuzima kao `<part name> - drawing.pdf`, a statusna traka navodi šta je na njemu.

Štampajte ga u „Stvarna veličina“ na papiru veličine lista da razmera ostane tačna.

## Ograničenja

| Još nije napravljeno | Uradite ovo danas |
|---|---|
| Kote osim tri ukupne mere | Dodajte ih na PDF pomoću aplikacije za označavanje, ili izvezite skicu ili površinu kao DXF i kotirajte je u 2D CAD programu |
| Više od jednog preseka ili detalja; lokalni presek, pomoćni i projektovani pogledi | Nije dostupno |
| Projekcija prvog ugla, pokretni pogledi, uspravni listovi | Treći ugao, automatski raspored, položeni list |
| Slobodne tekstualne napomene i tabele na listu (osim natpisnog bloka i blokova revizija) | Koristite napomenu o obradi, ili dodajte tekst u PDF |
| Crteži sklopova | Nije dostupno |

Znakovi van zapadnoevropskog skupa štampaju se kao „?“ (PDF koristi ugrađeni font Helvetica čitača). GD&T simboli se crtaju kao linije, pa se štampaju u svakom čitaču.

## Neka list sam radi

- **List › Automatski** sam bira papir: najveću standardnu razmeru do 1:1, na najmanjem A-formatu lista koji stanu pogledi pri toj razmeri (spisak pokazuje koji je izabrao).
- **Kotiraj rupe** kotira rupe na pogledu koji ih najviše vidi s kraja: oznaka centra na svakoj, jedna oznaka po veličini („2× Ø6 PROLAZNA“ sa pokaznom linijom), i njihovi položaji mereni od donjeg levog ugla pogleda. Ukupna širina, visina i dubina su uvek tu.
