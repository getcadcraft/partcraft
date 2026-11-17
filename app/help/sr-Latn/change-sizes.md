---
title: Menjaj mere bez otvaranja skice
summary: Upravljaj delom iz brojeva na desnom panelu: kote skice, dubine, brojevi i uglovi, kako isplanirati deo da prave brojeve upravljaju njime, i gde parametri i jednačine preuzimaju.
keywords: parametri, upravljajuće kote, namera dizajna, promena mere, jednačine, globalne promenljive, tabela dizajna, konfiguracije, promena veličine, izmeni kotu
from: c2ae1a32
---

Svaka mera u PartCraft delu je broj koji kasnije možeš da promeniš: kote u njegovim skicama i podešavanja njegovih elemenata. Ne moraš da otvaraš skicu da bi promenio njene kote.

## Promeni kotu skice sa panela

1. Klikni element u istoriji, na primer „Extrude1“.
2. Ispod sopstvenih podešavanja izvlačenja, **Kote skice (Sketch1)** navodi svaku kotu njegove skice: „Razdaljina“, „Prečnik“, „Ugao (°)“ i tako dalje.
3. Upiši novu vrednost u jedno polje i pritisni {{key:Enter}} ili {{key:Tab}}.

Skica se rešava sa novom vrednošću, a ceo deo se ponovo gradi. Ako izabereš samu skicu, prikazuje se ista lista kao **Upravljajuće kote**.

Poluprečnik ili prečnik mora biti veći od nule, a ugao je između 0 i 180 stepeni; statusna traka to kaže ako nije.

:::tip
Koje polje je koje? Polja su navedena redom kojim su kote napravljene. Ako nisi siguran, otvori skicu (dvostruki klik na nju), dvaput klikni kotu na platnu i promeni je tamo.
:::

## Upiši glavni broj odmah

Izaberi element u istoriji (ili ga samo dodaj) i upiši broj: ide u glavno polje elementa, ono koje najviše menjaš (**Dubina** izvlačenja, **Ugao** rotiranja, **Prečnik** rupe, **Broj** obrasca, **Poluprečnik** zaobljenja, debljina zida ljuske). Pritisni {{key:Enter}} da ga postaviš, ili {{key:Esc}} da zadržiš stari. Dodavanje izvlačenja to kaže u statusnoj traci: „Extrude1 je dodat. Promeni brojeve desno, ili upiši broj sada za njegovu dubinu.“

## Promeni broj u istoriji

Red svakog elementa u istoriji pokazuje glavni broj pored svog imena: „Extrude1 25 mm“, „Hole1 Ø6.6 thru“, „Fillet1 R2“, „LPattern1 4 × 20 mm“. Dvaput klikni broj (ili izaberi red i pritisni {{key:F2}}) i otvara se polje tu. Upiši novu vrednost i pritisni {{key:Enter}}; {{key:Esc}} zadržava staru. Radi tačno kao polje elementa desno: ista ograničenja, `=` za unos jednačine kao `=width/2`, i jedan korak za poništavanje.

Na izvlačenju, rupi ili obrascu, dvostruki klik bilo gde na redu otvara polje. Na Zaobljenju, Obaranju ivice, Ljusci, Nagibu ili Navoju, dvostruki klik na ime vodi na biranje ivica ili površi, pa dvaput klikni sam broj. Skice nemaju broj u redu: dvostruki klik otvara skicu.

## Prevuci u prikazu

Izaberi izvlačenje u istoriji (ili ga klikni u prikazu, pa njegov red) i narandžasta strelica stoji na njegovoj krajnjoj površi, sa dubinom u polju pored nje. Prevuci strelicu: deo prati tvoj pokret dok prevlačiš, a kad pustiš, nova dubina se postavlja kao jedan korak ({{key:Mod+Z}} je vraća). Pritisni {{key:Esc}} dok prevlačiš da se vratiš na početak. Dubina se pomera u koracima od desetine svoje veličine: 1 mm kod izvlačenja od 25 mm, 0.1 mm kod onog od 3 mm.

Rotiranje dobija zakrivljenu strelicu na kraju svog okreta: prevuci je oko ose da promeniš ugao, u celim stepenima od 1° do 360°.

Ili klikni u polje pored strelice, upiši vrednost (ili `=` i jednačinu) i pritisni {{key:Enter}}. Nema strelice na izvlačenju koje ide „Kroz sve“ ili do površi, ni na vrednosti koju upravlja jednačina: menjaj te na desnom panelu.

## Brojevi koji upravljaju delom

| Gde | Šta možeš da promeniš |
|---|---|
| Skica | Svaka kota: dužine, razdaljine, poluprečnici, prečnici, uglovi |
| Izvlačenje i sečenje | Dubina, uslov kraja, smer, dodavanje ili sečenje |
| Rotiranje i rotirani usek | Ugao, osa, dodavanje ili sečenje |
| Rupa | Prečnik, dubina, kroz sve, prečnik i dubina upuštene rupe |
| Zaobljenje, obaranje ivice, ljuska | Poluprečnik, razdaljina, debljina zida i smer, i koje ivice ili površi |
| Linearni i kružni obrasci | Broj, razmak ili ugao, smer ili osa |
| Deo | Krive (koliko fino su okrugli oblici facetirani) |
| Crtež | Gde presek seče, veličina i razmera detalja, GD&T vrednosti |

## Isplaniraj deo da pravi brojevi upravljaju njime

Brojevi koje daješ su oni koje možeš da menjaš. Nekoliko navika čini da kasnije promene ponašaju kako treba:

- **Kotiraj ono što je bitno za posao.** Ako rupa mora ostati 15 mm od ivice, kotiraj je od te ivice, a ne od početne tačke.
- **Potpuno definiši skice.** Tada promena pomera samo ono što treba (vidi [Potpuno definiši skicu](topic:relations-dimensions)).
- **Koristi relacije za nameru.** Jednako na dve rupe znači da jedan prečnik upravlja obema. Simetrični oblici: postavi početnu tačku na osnu liniju, ili koristi Sredinu.
- **Skiciraj na površima nastalim elementima.** Skica na krajnjoj površi izvlačenja se pomera kad se dubina promeni.
- **Obrazac umesto kopiranja.** Jedna rupa umnožena osam puta ima jedan prečnik za promenu.

## Dalje od pojedinačnih brojeva

- **Jedan broj koji upravlja više:** koristi parametre i jednačine: [Upravljaj delom pomoću parametara](topic:parameters).
- **Više veličina jednog dela:** sačuvaj svaku kao [konfiguraciju](topic:design-tables); čuvaju se u fajlu dela.
- **Aritmetika u polju za broj:** upiši `=40/2` ili `=width / 2`. To pravi jednačinu; vidi [Jednačine u oba smera](topic:equations-two-way).
- **Inčne jedinice:** deo prikazuje milimetre. U polju za broj sa `=`, ili u parametru, `2in` se pretvara u 50.8.

Vidi [Šta još nije napravljeno](topic:not-built-yet).
