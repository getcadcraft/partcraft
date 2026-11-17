---
title: Elementi i njihove opcije
summary: Svaki element na traci sa alatkama sa svojim podešavanjima, podrazumevanim vrednostima i ograničenjima, od izvlačenja do zaobljenja, ljuske i uvezenih STEP tela, zajedničke radnje svih elemenata i podešavanja dela.
keywords: elementi, nije izgrađeno, izvlačenje, iseci, rotiranje, rotirani usek, rupa, proširenje, linearni niz, kružni niz, ogledalo, zaobljenje, obaranje ivice, ljuska, uvoz, opcije, podrazumevano, podešavanja, rezolucija, krive, fasete, isključi, vrati istoriju
from: ab3a598e
---

Elementi su navedeni u istoriji redom kojim su napravljeni i ponovo se grade odozgo nadole. Svaki je nazvan po svojoj vrsti sa brojem: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft gradi svaki element mrežnim jezgrom. Zaobljenje i obaranje ivice rade na pravim ivicama između dve ravne površi, a ljuska otvara ravne površi. Uvezena tela zahtevaju tačno jezgro, koje ova verzija nema: ona nisu još izgrađena, a njihov odeljak ispod opisuje ih kao deo napravljen u ranijoj verziji koji ih zadržava. Pogledaj [Mrežno jezgro](topic:solid-kernels) i [Šta još nije izgrađeno](topic:not-built-yet).

## Skica

| Podešavanje | Napomene |
|---|---|
| Ravan | Ravni Front, Top ili Right, ili ravna površ. Prikazano, ne menja se: da pomeriš skicu, napravi novu |
| Stanje | Potpuno definisana, Delimično definisana (sa stepenima slobode), Prekomerno definisana ili Prazna |
| Geometrija, Relacije | Koliko ima krivih, tačaka i relacija |
| Upravljajuće kote | Svaka kota skice, može se menjati |

Dugmad: {{ui:Uredi skicu}}, {{ui:Izvezi kao DXF}}.

## Izvlačenje i Iseci

{{ui:Izvlačenje}} i {{ui:Iseci}} prave isti element, počevši sa različitim podešavanjima.

| Podešavanje | Izbor | Izvlačenje počinje sa | Iseci počinje sa |
|---|---|---|---|
| Operacija | Izbočina (dodaje materijal), Iseci (uklanja materijal), Presek (zadržava preklop), Novo telo (još nije izgrađeno u ovoj verziji) | Izbočina | Iseci |
| Kraj | Slepo (dubina), Srednja ravan (na obe strane), Kroz sve | Slepo | Kroz sve |
| Dubina (mm) | Iznad 0, do 1,000,000 | 10 | 10 |
| Obrni smer | Isključeno / uključeno | Isključeno | Isključeno |

- Profil: svaka zatvorena petlja punih linija, kružnica i lukova u skici. Petlje unutar petlji su rupe.
- Kroz sve radi samo za useke. Dopire kroz ceo deo na izabranu stranu.
- Iseci ide u materijal, dalje od spoljašnje strane ravni skice; Obrni smer to menja.

## Rotiranje i rotirani usek

| Podešavanje | Izbor | Podrazumevano |
|---|---|---|
| Operacija | Izbočina, Iseci | Izbočina ({{ui:Rotiranje}}), Iseci ({{ui:Više}} › {{ui:Rotirani usek}}) |
| Ugao (°) | Iznad 0, do 360 | 360 |
| Osa | Prva centralna linija, bilo koja linija ili centralna linija skice, ili element ose koji leži u ravni skice | Prva centralna linija |

- Profil mora ostati s jedne strane ose. Može je dodirivati.
- Osu rotiranja mogu koristiti Kružni nizovi i spojevi u sklopu.

## Rupa

| Podešavanje | Izbor | Podrazumevano |
|---|---|---|
| Tip | Prosta, Proširena | Prosta |
| Prečnik (mm) | Iznad 0 | 6 |
| Kroz sve | Uključeno / isključeno | Uključeno |
| Dubina (mm) | Kada je Kroz sve isključeno | 10 |
| Prečnik proširenja ⌀ | Šire od rupe | 11 |
| Dubina proširenja | Plića od slepe rupe | 6 |
| Obrni smer | Isključeno / uključeno | Isključeno |

- Jedna rupa na svakoj slobodnoj tački skice (tačke napravljene alatom Tačka). Panel pokazuje koliko ih ima.
- Rupe se buše normalno na ravan skice, u materijal.
- Osu svake rupe mogu koristiti spojevi u sklopu („Hole1, rupa 2“).

## Linearni niz

| Podešavanje | Izbor | Podrazumevano |
|---|---|---|
| Elementi za kopiranje | Bilo koji čvrsti elementi iznad njega | Izabrani element, inače poslednji čvrsti element |
| Smer | Osa X, Osa Y, Osa Z; linija ranije skice; osa rotiranja; izabrana ivica | Osa X (ili ivica izabrana kada si je dodavao) |
| Razmak (mm) | Bilo koji broj | 20 |
| Broj | 1 do 1000, uključujući original | 3 |
| Obrni smer | Isključeno / uključeno | Isključeno |

## Kružni niz

| Podešavanje | Izbor | Podrazumevano |
|---|---|---|
| Elementi za kopiranje | Kao kod Linearnog | Kao kod Linearnog |
| Osa | Kao za Smer iznad | Osa poslednjeg rotiranja, inače osa Y (ili izabrana ivica) |
| Ugao (°) | Iznad 0, do 360. 360 raspoređuje kopije ravnomerno po krugu; manje ih širi preko tog ugla | 360 |
| Broj | 1 do 1000, uključujući original | 6 |
| Obrni smer | Isključeno / uključeno | Isključeno |

## Ogledalo

| Podešavanje | Izbor | Podrazumevano |
|---|---|---|
| Ogledalo | Celo telo (kako je do sada napravljeno), ili izabrani elementi | Izabrani element, inače celo telo |
| Ravan ogledala | Ravan Front, Top ili Right; ravna površ | Ravan Right, ili ravna površ izabrana kada si je dodavao |

## Zaobljenje i obaranje ivice

U ovoj verziji mrežno jezgro ih gradi na pravim ivicama između dve ravne površi (spoljašnji ili unutrašnji uglovi), sa jednim poluprečnikom. Okrugla ivica javlja poruku: „Zaobljenje: u ovoj verziji samo prave ivice između dve ravne površi (gradi ih mrežno jezgro). Zaokruži ili zakosi krive ivice u skici.“ Gde se zaobljene ivice spajaju u uglu, one se seku pod uglom, a element upozorava: „Zaobljenje mrežnim jezgrom: gde se zaobljene ivice spajaju, one se seku pod uglom, a ne stapaju.“ Svi tipovi obaranja (jednaka udaljenost, dve udaljenosti, udaljenost i ugao, uz **Okreni strane**) rade. Pogledaj [Zaobljenje, obaranje ivice i ljuska](topic:fillet-chamfer-shell).

| Podešavanje | Zaobljenje | Obaranje ivice |
|---|---|---|
| Veličina | **Poluprečnik (mm)**, podrazumevano 2 | **Udaljenost (mm)** od ivice na obe površi, podrazumevano 1 |
| **Ivice** | Koliko | Koliko |

- Izaberi ivice pre nego što izabereš dugme ({{key:Shift}}+klik za više), ili izaberi dugme bez izabranog i klikni ivice posle.
- {{ui:Izaberi ivice}} (ili dvaput klikni element) menja ivice.
- Ivice se čuvaju preko dve površi koje spajaju, pa opstaju promene veličina ranije u istoriji.

## Ljuska

Mrežno jezgro je gradi. Mogu se otvoriti samo ravne površi („Ljuska: u ovoj verziji otvara samo ravne površi (gradi je mrežno jezgro).“); zidovi različitih debljina još nisu izgrađeni. Pogledaj [Zaobljenje, obaranje ivice i ljuska](topic:fillet-chamfer-shell).

| Podešavanje | Izbor | Podrazumevano |
|---|---|---|
| Zid (mm) | Iznad 0 | 2 |
| Zidovi rastu napolje (površi ostaju unutra) | Isključeno: zidovi idu unutra. Uključeno: zidovi idu napolje | Isključeno |
| Otvorene površi | Uklonjene površi, najmanje jedna, uz **Ukloni** | Površi izabrane kada si je dodavao |

{{ui:Izaberi površine}} menja otvorene površi.

## Uvezeno telo

Napravljeno otvaranjem STEP, STL, OBJ ili 3MF datoteke: čvrsto telo od trouglova bez sopstvene istorije ([Otvori STEP datoteku](topic:import-step), [Otvori STL, OBJ ili 3MF](topic:open-meshes)). Prikazuje datoteku iz koje potiče i ono što je uvoz popravio; **Jedinice u datoteci**, **Gore u datoteci** i **Koristi za** ostaju promenljivi. STEP telo uvezeno starijom verzijom koja je imala tačno jezgro ostaje u istoriji označeno kao nije izgrađeno; ponovo otvori STEP datoteku da ga uneseš kao trouglove.

| Podešavanje | Izbor | Podrazumevano |
|---|---|---|
| Gore u datoteci | Z gore (većina CAD), Y gore | Z gore |

Nizovi i ogledala mogu kopirati uvezeno telo, ali ne i zaobljenje, obaranje ivice ili ljusku.

## Šta ima svaki element

Na dnu panela svakog elementa:

| Dugme | Radi |
|---|---|
| {{ui:Isključi}} / {{ui:Vrati element}} | Isključuje ili uključuje ga. Elementi kojima je potreban nisu izgrađeni dok je isključen |
| {{ui:Vrati istoriju do ovde}} | Gradi samo elemente iznad ovog. Novi elementi se ubacuju na traku vraćanja |
| {{ui:Pomeri gore}} / {{ui:Pomeri dole}} | Menja redosled, kada ništa što koristi ne bi završilo ispod njega. Inače je zasivljeno, sa razlogom |
| {{ui:Izbriši}} | Briše ga i (posle pitanja) svaki element koji ga koristi |
| Ime | Preimenuje ga (do 60 znakova) |

Elementi sa skicom takođe navode **Kote skice**, koje se mogu menjati na licu mesta.

## Stanja u istoriji

| Stanje | Prikazano kao | Značenje |
|---|---|---|
| Izgrađen | Normalno | Sve u redu |
| Upozorenje | ⚠ | Izgrađen, sa nečim za proveru: „Prekomerno definisano: 1 relacija nije potrebna.“ ili „Ništa nije ostalo od dela posle ovoga.“ |
| Greška | ⚠ greška, crveno | Nije mogao da se izgradi; poruka kaže zašto |
| Nije izgrađen | ⚠ nije izgrađen | Potreban mu je element koji nije uspeo, isključen je ili vraćen, ili mu treba tačno jezgro, koje ova verzija nema („Sweep: još nije izgrađeno. …“) |
| Isključen | isključeno | Isključen |
| Vraćen | zasivljeno, ispod trake vraćanja | Nije izgrađen dok ne vratiš napred |

## Podešavanja dela

Klikni prazan prostor da ništa nije izabrano. Desni panel prikazuje **Deo**:

- **Ime**: ime dela, koristi se za imena datoteka i naslovni blok crteža (do 120 znakova).
- **Krivine**: pogledaj ispod.

### Rezolucija krivina

Mrežno jezgro gradi čvrsto telo samo od ravnih fasete, pa prikaz, STL, 3MF, fasetirani STEP, zapremina i pogledi crteža svi prate **Krivine**: koliko fasete po punom obrtaju.

| Podešavanje | Fasete po obrtaju | Zapremina okruglog oblika |
|---|---|---|
| Grubo (32 po obrtaju) | 32 | Oko 0,64 % manje od prave vrednosti |
| Normalno (64 po obrtaju) | 64 | Oko 0,16 % manje (podrazumevano) |
| Fino (128 po obrtaju) | 128 | Oko 0,04 % manje |
| Vrlo fino (256 po obrtaju) | 256 | Oko 0,01 % manje |

Finije krive daju glađe izvoze i poglede, ali sporije ponovno građenje. Podešavanje se čuva u datoteci dela.

## Još nije izgrađeno

Promenljivi poluprečnik zaobljenja, zaobljenja i obaranja na okruglim ivicama, ljuske koje otvaraju zakrivljene površi, nagib na zakrivljenim površima, sweep, loft, rebro, STEP tela sa tačnim zakrivljenim površima, nova tela, nagibi, „do“ površi ili temena, i reference na površima i ivicama tela zahtevaju tačno jezgro, koje ova verzija nema. Takođe nije izgrađeno: navojne i upuštene rupe. Pogledaj [Šta još nije izgrađeno](topic:not-built-yet).
