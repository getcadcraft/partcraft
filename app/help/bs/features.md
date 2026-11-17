---
title: Elementi i njihove opcije
summary: Svaki element na traci alata s njegovim postavkama, podrazumijevanim vrijednostima i ograničenjima, od istiskivanja do zaobljenja, ljuske i uvezenih STEP čvrstih tijela, radnje koje dijele svi elementi i postavke dijela.
keywords: elementi, nisu izrađeni, istisni, izreži, rotiraj, rotirano izrezivanje, rupa, upuštena rupa, linearni niz, kružni niz, zrcali, zaobljenje, skošenje, ljuska, uvoz, opcije, podrazumijevano, postavke, rezolucija, krive, fasete, isključi, vraćanje
from: ab3a598e
---

Elementi su navedeni u historiji po redoslijedu kojim su napravljeni, i ponovo se grade odozgo nadolje. Svaki je nazvan po svojoj vrsti s brojem: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft gradi svaki element mrežnim kernelom. {{ui:Zaobljenje}} i {{ui:Skošenje}} rade na ravnim ivicama između dvije ravne površine, a {{ui:Ljuska}} otvara ravne površine. Uvezena čvrsta tijela trebaju tačan kernel, koji ova verzija nema: još nisu izrađena, a njihov odjeljak niže opisuje ih kao dio napravljen u ranijoj verziji koji ih zadržava. Vidi [Mrežni kernel](topic:solid-kernels) i [Šta još nije izrađeno](topic:not-built-yet).

## Skica

| Postavka | Napomene |
|---|---|
| Ravan | Prednja, Gornja ili Desna ravan, ili ravna površina. Samo prikazano, ne mijenja se: da pomjeriš skicu, napravi novu |
| Stanje | Potpuno definisana, Nedovoljno definisana (sa stepenima slobode), Prekomjerno definisana, ili Prazna |
| Geometrija, Relacije | Koliko krivih, tačaka i relacija |
| Vodeće kote | Svaka kota skice, izmjenjiva |

Dugmad: {{ui:Uredi skicu}}, {{ui:Izvezi kao DXF}}.

## Istisni i Izreži

{{ui:Istisni}} i {{ui:Izreži}} prave isti element, počinjući s različitim postavkama.

| Postavka | Izbori | Istisni počinje od | Izreži počinje od |
|---|---|---|---|
| Operacija | Izbočina (dodaj materijal), Izreži (ukloni materijal), Presjek (zadrži preklapanje), Novo tijelo (još nije izrađeno u ovoj verziji) | Izbočina | Izreži |
| Kraj | Slijepo (dubina), Srednja ravan (na obje strane), Kroz sve | Slijepo | Kroz sve |
| Dubina (mm) | Iznad 0, do 1,000,000 | 10 | 10 |
| Obrni smjer | Isključeno / uključeno | Isključeno | Isključeno |

- Profil: svaka zatvorena petlja punih linija, krugova i lukova u skici. Petlje unutar petlji su rupe.
- Kroz sve radi samo za izreze. Dopire kroz cijeli dio na izabranoj strani.
- Rezanje ide u materijal, dalje od vanjske strane ravni skice; Obrni smjer to okreće.

## Rotiraj i rotirano izrezivanje

| Postavka | Izbori | Podrazumijevano |
|---|---|---|
| Operacija | Izbočina, Izreži | Izbočina ({{ui:Rotiraj}}), Izreži ({{ui:Više}} › {{ui:Rotirano izrezivanje}}) |
| Ugao (°) | Iznad 0, do 360 | 360 |
| Osa | Prva središnja linija, bilo koja linija ili središnja linija skice, ili element ose koji leži u ravni skice | Prva središnja linija |

- Profil mora ostati s jedne strane ose. Smije je dodirivati.
- Osu rotacije mogu koristiti kružni nizovi i spojevi u sklopu.

## Rupa

| Postavka | Izbori | Podrazumijevano |
|---|---|---|
| Vrsta | Jednostavna, Upuštena | Jednostavna |
| Prečnik (mm) | Iznad 0 | 6 |
| Kroz sve | Uključeno / isključeno | Uključeno |
| Dubina (mm) | Kad je Kroz sve isključeno | 10 |
| Upuštanje ⌀ | Šire od rupe | 11 |
| Dubina upuštanja | Plića od slijepe rupe | 6 |
| Obrni smjer | Isključeno / uključeno | Isključeno |

- Jedna rupa na svakoj slobodnoj tački skice (tačke napravljene alatom Tačka). Panel prikazuje koliko ih ima.
- Rupe se buše okomito na ravan skice, u materijal.
- Os svake rupe mogu koristiti spojevi u sklopu ("Hole1, rupa 2").

## Linearni niz

| Postavka | Izbori | Podrazumijevano |
|---|---|---|
| Elementi za kopiranje | Bilo koji čvrsti elementi iznad njega | Odabrani element, inače posljednji čvrsti element |
| Smjer | X osa, Y osa, Z osa; linija ranije skice; osa rotacije; odabrana ivica | X osa (ili ivica odabrana kad si je dodao) |
| Razmak (mm) | Bilo koji broj | 20 |
| Broj | 1 do 1000, uključujući original | 3 |
| Obrni smjer | Isključeno / uključeno | Isključeno |

## Kružni niz

| Postavka | Izbori | Podrazumijevano |
|---|---|---|
| Elementi za kopiranje | Kao za Linearni niz | Kao za Linearni niz |
| Osa | Kao za Smjer iznad | Osa posljednje rotacije, inače Y osa (ili odabrana ivica) |
| Ugao (°) | Iznad 0, do 360. 360 raspoređuje kopije ravnomjerno po krugu; manje ih širi po uglu | 360 |
| Broj | 1 do 1000, uključujući original | 6 |
| Obrni smjer | Isključeno / uključeno | Isključeno |

## Zrcaljenje

| Postavka | Izbori | Podrazumijevano |
|---|---|---|
| Zrcali | Cijelo tijelo (kako je do sada izgrađeno) ili odabrani elementi | Odabrani element, inače cijelo tijelo |
| Ravan zrcaljenja | Prednja, Gornja ili Desna ravan; ravna površina | Desna ravan, ili ravna površina odabrana kad si je dodao |

## Zaobljenje i Skošenje

U ovoj verziji mrežni kernel ih gradi na ravnim ivicama između dvije ravne površine (vanjski ili unutrašnji uglovi), s jednim poluprečnikom. Okrugla ivica kaže: "Zaobljenje: u ovoj verziji samo ravne ivice između dvije ravne površine (mrežni kernel ih gradi). Zaobli ili skosi zakrivljene ivice u skici."; mjesta gdje se zaobljene ivice sastaju u uglu su pokošena, a element upozorava: "Zaobljenje mrežnim kernelom: gdje se zaobljene ivice sastaju, one su pokošene, a ne stopljene." Sve vrste skošenja (jednaka udaljenost, dvije udaljenosti, udaljenost i ugao, uz **Zamijeni strane**) rade. Vidi [Zaobli, skosi i izdubi](topic:fillet-chamfer-shell).

| Postavka | Zaobljenje | Skošenje |
|---|---|---|
| Veličina | **Poluprečnik (mm)**, podrazumijevano 2 | **Udaljenost (mm)** nazad od ivice na obje površine, podrazumijevano 1 |
| **Ivice** | Koliko ih je odabrano; svaka navedena po dvije površine koje spaja ("Extrude1 krajnja površina × Extrude1 bok"), uz **Ukloni** | Isto |

- Odaberi ivice prije izbora dugmeta ({{key:Shift}}+klik za više), ili ga izaberi bez odabira i zatim klikni ivice.
- {{ui:Odaberi ivice}} (ili dvaput klikni element) mijenja ivice.
- Ivice se čuvaju po dvije površine koje spajaju, pa opstaju pri promjenama veličine ranije u historiji.

## Ljuska

Gradi je mrežni kernel. Mogu se otvoriti samo ravne površine ("Ljuska: u ovoj verziji otvara samo ravne površine (gradi je mrežni kernel)."); zidovi različitih debljina još nisu izrađeni. Vidi [Zaobli, skosi i izdubi](topic:fillet-chamfer-shell).

| Postavka | Izbori | Podrazumijevano |
|---|---|---|
| Zid (mm) | Iznad 0 | 2 |
| Zidovi rastu prema van (površine ostaju unutra) | Isključeno: zidovi idu unutra. Uključeno: zidovi idu van | Isključeno |
| Otvorene površine | Uklonjene površine, najmanje jedna, uz **Ukloni** | Površine odabrane kad si je dodao |

{{ui:Odaberi površi}} mijenja otvorene površine.

## Uvezeno čvrsto tijelo

Nastaje otvaranjem STEP, STL, OBJ ili 3MF datoteke: čvrsto tijelo od trouglova bez vlastite historije ([Otvori STEP datoteku](topic:import-step), [Otvori STL, OBJ ili 3MF](topic:open-meshes)). Prikazuje datoteku iz koje je došlo i šta je uvoz popravio; **Jedinice u datoteci**, **Gore u datoteci** i **Koristi za** ostaju izmjenjivi. STEP čvrsto tijelo uvezeno starijom verzijom koja je imala tačan kernel ostaje u historiji označeno kao nije izrađeno; ponovo otvori STEP datoteku da ga uvezeš kao trouglove.

| Postavka | Izbori | Podrazumijevano |
|---|---|---|
| Gore u datoteci | Z gore (većina CAD), Y gore | Z gore |

Nizovi i zrcaljenja mogu kopirati uvezeno čvrsto tijelo, ali ne i zaobljenje, skošenje ili ljusku.

## Šta ima svaki element

Na dnu panela svakog elementa:

| Dugme | Radi |
|---|---|
| {{ui:Isključi}} / {{ui:Uključi}} | Isključi ga ili uključi. Elementi kojima treba nisu izrađeni dok je isključen |
| {{ui:Vrati do ovdje}} | Gradi samo elemente iznad ovog. Novi elementi se umeću na traku za vraćanje |
| {{ui:Pomjeri gore}} / {{ui:Pomjeri dolje}} | Mijenja redoslijed, kad ništa što koristi ne bi završilo ispod njega. Inače je zasivljeno, uz razlog |
| {{ui:Izbriši}} | Briše ga i (nakon pitanja) svaki element koji ga koristi |
| Naziv | Preimenuje ga (do 60 znakova) |

Elementi sa skicom također navode **Kote skice**, izmjenjive na licu mjesta.

## Stanja u historiji

| Stanje | Prikazano kao | Značenje |
|---|---|---|
| Izgrađeno | Normalno | Sve u redu |
| Upozorenje | ⚠ | Izgrađeno, s nečim za provjeru: "Prekomjerno definisano: 1 relacija nije potrebna." ili "Nakon ovoga od dijela ništa nije ostalo." |
| Greška | ⚠ greška, crveno | Nije moglo da se izgradi; poruka kaže zašto |
| Nije izgrađeno | ⚠ nije izgrađeno | Treba element koji nije uspio, isključen je ili vraćen, ili treba tačan kernel, koji ova verzija nema ("Sweep: još nije izrađeno. …") |
| Isključeno | isključeno | Isključeno |
| Vraćeno | zasivljeno, ispod trake za vraćanje | Nije izgrađeno dok ne vratiš naprijed |

## Postavke dijela

Klikni prazan prostor da ništa nije odabrano. Desni panel prikazuje **Dio**:

- **Naziv**: naziv dijela, koristi se za nazive datoteka i natpisnu tablu crteža (do 120 znakova).
- **Krive**: vidi niže.

### Rezolucija krivina

Mrežni kernel gradi čvrsto tijelo sam od ravnih faseta, pa prikaz, STL, 3MF, fasetirani STEP, zapremina i pogledi crteža svi prate **Krive**: koliko faseta po punom krugu.

| Postavka | Faseta po krugu | Zapremina okruglog oblika |
|---|---|---|
| Grubo (32 po krugu) | 32 | Oko 0.64 % ispod prave vrijednosti |
| Normalno (64 po krugu) | 64 | Oko 0.16 % ispod (podrazumijevano) |
| Fino (128 po krugu) | 128 | Oko 0.04 % ispod |
| Vrlo fino (256 po krugu) | 256 | Oko 0.01 % ispod |

Finije krive daju glađe izvoze i poglede, a sporije ponovne gradnje. Postavka se čuva u datoteci dijela.

## Još nije izrađeno

Promjenjivi poluprečnik zaobljenja, zaobljenja i skošenja na okruglim ivicama, ljuske koje otvaraju zakrivljene površine, nagib na zakrivljenim površinama, provlačenje (sweep), lofovanje, rebro, STEP čvrsta tijela sa tačnim zakrivljenim površinama, nova tijela, nagibi, "do" površine ili vrha, i reference na površinama i ivicama čvrstog tijela trebaju tačan kernel, koji ova verzija nema. Također nije izrađeno: rupe s navojem i upuštene rupe. Vidi [Šta još nije izrađeno](topic:not-built-yet).
