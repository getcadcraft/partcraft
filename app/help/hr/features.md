---
title: Značajke i njihove opcije
summary: Svaka značajka na alatnoj traci s postavkama, zadanim vrijednostima i ograničenjima, od izvlačenja do zaobljenja, ljuske i uvezenih STEP tijela, radnje koje dijele sve značajke te postavke dijela.
keywords: značajke, nije izrađeno, izvuci, izreži, rotiraj, rotirani izrez, rupa, upuštanje, linearni uzorak, kružni uzorak, zrcaljenje, zaobljenje, skošenje, ljuska, uvoz, opcije, zadano, postavke, rezolucija, krivulje, facete, potiskivanje, vraćanje
from: ab3a598e
---

Značajke (feature) su navedene u povijesti redom kojim su napravljene i ponovno se grade odozgo prema dolje. Svaka je nazvana po svojoj vrsti s brojem: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft gradi svaku značajku mrežnom jezgrom. Zaobljenje i skošenje rade na ravnim bridovima između dviju ravnih ploha, a ljuska otvara ravne plohe. Uvezena tijela trebaju egzaktnu jezgru, koju ova verzija nema: još nisu izrađena, a njihov odjeljak niže opisuje dio napravljen u ranijoj verziji koji ih zadržava. Vidi [Mrežna jezgra](topic:solid-kernels) i [Što još nije izrađeno](topic:not-built-yet).

## Skica

| Postavka | Napomene |
|---|---|
| Ravnina | Front, Top ili Right ravnina, ili ravna ploha. Samo prikazano, ne mijenja se: za pomak skice napravite novu |
| Stanje | Potpuno definirano, Nedovoljno definirano (sa stupnjevima slobode), Preodređeno ili Prazno |
| Geometrija, odnosi | Koliko krivulja, točaka i odnosa |
| Upravljajuće kote | Svaka kota skice, uređiva |

Gumbi: {{ui:Uredi skicu}}, {{ui:Izvezi kao DXF}}.

## Izvuci i izreži

{{ui:Izvuci}} i {{ui:Izreži}} prave istu značajku, s različitim početnim postavkama.

| Postavka | Izbori | Izvuci počinje s | Izreži počinje s |
|---|---|---|---|
| Operacija | Izbočina (dodaj materijal), Izreži (ukloni materijal), Presjek (zadrži preklapanje), Novo tijelo (još nije izrađeno u ovoj verziji) | Izbočina | Izreži |
| Kraj | Slijepo (dubina), Srednja ravnina (na obje strane), Kroz sve | Slijepo | Kroz sve |
| Dubina (mm) | Iznad 0, do 1,000,000 | 10 | 10 |
| Obrnuti smjer | Isključeno / uključeno | Isključeno | Isključeno |

- Profil: svaka zatvorena petlja punih linija, kružnica i lukova u skici. Petlje unutar petlji su rupe.
- Kroz sve radi samo za izreze. Dosiže kroz cijeli dio na odabranoj strani.
- Izrez ide u materijal, od izlazne strane ravnine skice; Obrnuti smjer ga okreće.

## Rotiraj i rotirani izrez

| Postavka | Izbori | Zadano |
|---|---|---|
| Operacija | Izbočina, Izreži | Izbočina ({{ui:Rotiraj}}), Izreži ({{ui:Više}} › {{ui:Rotirani izrez}}) |
| Kut (°) | Iznad 0, do 360 | 360 |
| Os | Prva središnja linija, bilo koja linija ili središnja linija skice, ili značajka osi koja leži u ravnini skice | Prva središnja linija |

- Profil mora ostati na jednoj strani osi. Smije je dodirivati.
- Os rotacije mogu koristiti kružni uzorci i zglobovi sklopa.

## Rupa

| Postavka | Izbori | Zadano |
|---|---|---|
| Vrsta | Jednostavna, Upuštena | Jednostavna |
| Promjer (mm) | Iznad 0 | 6 |
| Kroz sve | Uključeno / isključeno | Uključeno |
| Dubina (mm) | Kad je Kroz sve isključeno | 10 |
| ⌀ upuštanja | Šire od rupe | 11 |
| Dubina upuštanja | Plića od slijepe rupe | 6 |
| Obrnuti smjer | Isključeno / uključeno | Isključeno |

- Jedna rupa na svakoj slobodnoj točki skice (točke nacrtane alatom Točka). Ploča pokazuje koliko ih je.
- Rupe se buše okomito na ravninu skice, u materijal.
- Os svake rupe mogu koristiti zglobovi sklopa („Hole1, rupa 2“).

## Linearni uzorak

| Postavka | Izbori | Zadano |
|---|---|---|
| Značajke za kopiranje | Bilo koje značajke tijela iznad nje | Odabrana značajka, inače zadnja značajka tijela |
| Smjer | Os X, Y ili Z; linija ranije skice; os rotacije; odabrani brid | Os X (ili brid odabran kad ste ga dodali) |
| Razmak (mm) | Bilo koji broj | 20 |
| Broj | 1 do 1000, uključujući izvornik | 3 |
| Obrnuti smjer | Isključeno / uključeno | Isključeno |

## Kružni uzorak

| Postavka | Izbori | Zadano |
|---|---|---|
| Značajke za kopiranje | Kao za Linearni | Kao za Linearni |
| Os | Kao za Smjer iznad | Os zadnje rotacije, inače os Y (ili odabrani brid) |
| Kut (°) | Iznad 0, do 360. 360 raspoređuje kopije jednako po krugu; manje ih raspršuje po kutu | 360 |
| Broj | 1 do 1000, uključujući izvornik | 6 |
| Obrnuti smjer | Isključeno / uključeno | Isključeno |

## Zrcaljenje

| Postavka | Izbori | Zadano |
|---|---|---|
| Zrcali | Cijelo tijelo (kako je do sada izrađeno) ili odabrane značajke | Odabrana značajka, inače cijelo tijelo |
| Ravnina zrcaljenja | Front, Top ili Right ravnina; ravna ploha | Right ravnina, ili ravna ploha odabrana kad ste je dodali |

## Zaobljenje i skošenje

U ovoj verziji mrežna jezgra ih gradi na ravnim bridovima između dviju ravnih ploha (vanjski ili unutarnji kutovi), s jednim polumjerom. Okrugli brid kaže: „Zaobljenje: u ovoj verziji samo ravni bridovi između dviju ravnih ploha (mrežna jezgra ih gradi). Okrugle ili kose zakrivljene bridove nacrtajte u skici.“ Gdje se zaobljeni bridovi sastaju u kutu, spajaju se pod kutom, a značajka upozorava: „Zaobljenje mrežnom jezgrom: gdje se zaobljeni bridovi sastaju, spojeni su pod kutom, a ne stopljeni.“ Sve vrste skošenja (jednaka udaljenost, dvije udaljenosti, udaljenost i kut, uz **Zamijeni strane**) rade. Vidi [Zaobljavanje, skošenje i šupljina](topic:fillet-chamfer-shell).

| Postavka | Zaobljenje | Skošenje |
|---|---|---|
| Veličina | **Radijus (mm)**, zadano 2 | **Udaljenost (mm)** od brida na obje plohe, zadano 1 |
| **Bridovi** | Koliko ih je | Koliko ih je |

- Bridovi se mogu odabrati prije odabira gumba ({{key:Shift}}+klik za više) ili odabrati bez odabira i kliknuti poslije.
- {{ui:Odaberi bridove}} (ili dvaput kliknite značajku) mijenja bridove.
- Bridovi se pamte po dvjema plohama koje spajaju, pa ostaju ispravni kad promijenite veličinu ranije u povijesti.
- Popis navodi svaki brid po dvjema plohama koje spaja, npr. „Extrude1 krajnja ploha × Extrude1 bočna“, s **Ukloni**.

## Ljuska

Mrežna jezgra je gradi. Otvoriti se mogu samo ravne plohe („Ljuska: u ovoj verziji otvara samo ravne plohe (gradi ih mrežna jezgra).“); zidovi različitih debljina još nisu izrađeni. Vidi [Zaobljavanje, skošenje i šupljina](topic:fillet-chamfer-shell).

| Postavka | Izbori | Zadano |
|---|---|---|
| Zid (mm) | Iznad 0 | 2 |
| Zidovi rastu prema van (plohe ostaju unutra) | Isključeno: zidovi idu unutra. Uključeno: zidovi idu van | Isključeno |
| Otvorene plohe | Uklonjene plohe, najmanje jedna, s **Ukloni** | Plohe odabrane kad ste je dodali |

{{ui:Odaberi plohe}} mijenja otvorene plohe.

## Uvezeno tijelo

Nastaje otvaranjem STEP, STL, OBJ ili 3MF datoteke: čvrsto tijelo od trokuta bez vlastite povijesti ([Otvorite STEP datoteku](topic:import-step), [Otvorite STL, OBJ ili 3MF](topic:open-meshes)). Prikazuje datoteku iz koje dolazi i što je uvoz popravio; **Jedinice u datoteci**, **Gore u datoteci** i **Upotrijebi za** ostaju uredivi. STEP tijelo uvezeno starijom verzijom koja je imala egzaktnu jezgru ostaje u povijesti označeno kao nije izrađeno; ponovno otvorite STEP datoteku da ga uvezete kao trokute.

| Postavka | Izbori | Zadano |
|---|---|---|
| Gore u datoteci | Z gore (većina CAD-a), Y gore | Z gore |

Uzorci i zrcaljenja mogu kopirati uvezeno tijelo, ali ne zaobljenje, skošenje ili ljusku.

## Što ima svaka značajka

Na dnu panela svake značajke:

| Gumb | Radi |
|---|---|
| {{ui:Potisni}} / {{ui:Ukloni potiskivanje}} | Isključuje ili uključuje. Značajke kojima treba nisu izgrađene dok je isključena |
| {{ui:Vrati unatrag do ovdje}} | Gradi samo značajke iznad ove. Nove značajke idu na traku za vraćanje |
| {{ui:Pomakni gore}} / {{ui:Pomakni dolje}} | Mijenja redoslijed kad ništa što koristi ne bi završilo ispod nje. Inače je sivo, s razlogom |
| {{ui:Izbriši}} | Briše nju i (nakon pitanja) svaku značajku koja je koristi |
| Naziv | Preimenuje je (do 60 znakova) |

Značajke sa skicom također navode **Kote skice**, uredive na mjestu.

## Stanja u povijesti

| Stanje | Prikazano kao | Značenje |
|---|---|---|
| Izgrađeno | Normalno | Sve u redu |
| Upozorenje | ⚠ | Izgrađeno, ali treba provjeriti: „Preodređeno: 1 odnos nije potreban.“ ili „Nakon ovoga od dijela ništa nije ostalo.“ |
| Greška | ⚠ greška, crveno | Nije izgrađeno; poruka kaže zašto |
| Nije izgrađeno | ⚠ nije izgrađeno | Treba značajku koja nije uspjela, potisnuta je ili vraćena, ili treba egzaktnu jezgru, koju ova verzija nema („Provlačenje: još nije izrađeno. …“) |
| Potisnuto | isključeno | Isključeno |
| Vraćeno | sivo, ispod trake za vraćanje | Nije izgrađeno dok ne vratite naprijed |

## Postavke dijela

Kliknite prazan prostor da ništa nije odabrano. Desno okno prikazuje **Dio**:

- **Naziv**: naziv dijela, koristi se za nazive datoteka i zaglavlje crteža (do 120 znakova).
- **Krivulje**: vidi dolje.

### Rezolucija krivulja

Mrežna jezgra gradi tijelo od ravnih faceta, pa prikaz, STL, 3MF, facetirani STEP, volumen i pogledi crteža svi slijede **Krivulje**: koliko faceta po punom krugu.

| Postavka | Faceta po krugu | Volumen okruglog oblika |
|---|---|---|
| Grubo (32 po krugu) | 32 | Oko 0.64 % ispod prave vrijednosti |
| Normalno (64 po krugu) | 64 | Oko 0.16 % ispod (zadano) |
| Fino (128 po krugu) | 128 | Oko 0.04 % ispod |
| Vrlo fino (256 po krugu) | 256 | Oko 0.01 % ispod |

Finije krivulje daju glađe izvoze i poglede, ali sporije ponovne izgradnje. Postavka se sprema u datoteku dijela.

## Što još nije izrađeno

Zaobljenja promjenjivog polumjera, zaobljenja i skošenja na okruglim bridovima, ljuske koje otvaraju zakrivljene plohe, nagibi na zakrivljenim plohama, provlačenje, loft, rebro, STEP tijela s egzaktnim zakrivljenim plohama, nova tijela, nagibi, „do“ plohe ili vrha, te reference na plohama i bridovima tijela zahtijevaju egzaktnu jezgru, koju ova verzija nema. Također nisu izrađeni: rupe s navojem i upuštene rupe s navojem. Vidi [Što još nije izrađeno](topic:not-built-yet).
