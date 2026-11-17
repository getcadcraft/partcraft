---
title: Splajnovi, odsijecanje, pomak i drugi alati za skicu
summary: Crtajte splajnove s tačkama prolaza i s kontrolnim tačkama, odsijecajte i produživajte krive, pravite pomak lanca, zrcalite oko osne linije, dodajte poligone i utore, uzorkujte geometriju skice i projektujte ivice modela.
keywords: splajn, tačka prolaza, kontrolna tačka, b-spline, nurbs, kriva, odsijecanje, produženje, pomak, zrcaljenje, simetrično, poligon, šestougao, utor, uzorak, linearni uzorak, kružni uzorak, projekcija, projektuj ivicu, uključi, pretvori entitete
from: 3ecb166a
---

Ovi alati rade u otvorenoj skici. {{ui:Spline}} i {{ui:Odsijeci}} su na traci s alatima. Ostali su pod {{ui:Više}} na kraju alata za skicu. Svaki alat je jedan korak poništavanja, a {{key:Esc}} ga zaustavlja. Za osnovne alate za crtanje pogledajte [Nacrtaj prvu skicu](topic:sketch-basics).

## Splajnovi

Splajn je glatka kriva. Postoje dvije vrste.

| Alat | Tipka | Kako crtati |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Kliknite tačke kroz koje kriva prolazi. Završite tipkom {{key:Enter}}, {{key:Esc}}, desnim klikom ili dvostrukim klikom. Ponovo kliknite prvu tačku da zatvorite splajn |
| {{ui:Spline s kontrolnim tačkama}} (pod {{ui:Više}}) | | Kliknite kontrolne tačke. Kriva je privučena ka njima, ali dodiruje samo prvu i zadnju. Isprekidani kontrolni poligon prikazuje se dok crtate i poslije |

- **Tačke su tačke skice.** Povucite ih ili im dodijelite relacije i kote kao i svakoj tački. Prva tačka splajna može se uhvatiti za kraj linije, čime se spajaju relacijom poklapanja.
- **Tangenta na kraju.** Odaberite liniju, luk ili splajn koji se sastaje s jednim krajem splajna, zatim sam splajn, pa odaberite {{ui:T Tangenta}}. Smjer kraja splajna tada prati liniju. Tangenta izvan krajeva splajna se odbija: "Tangenta na splajn zahtijeva da se linija, luk ili splajn sastaje s jednim njegovim krajem."
- **Krajevi.** Bez relacije tangente, krajevi splajna s tačkama prolaza su prirodni (bez zakrivljenosti na samom kraju). Kriva je kubna i prolazi kroz svaku tačku, a razmak se određuje udaljenostima među tačkama.
- **Zatvoreni splajnovi** sami prave profil. Otvoreni splajnovi spajaju linije i lukove u zatvorenu petlju kao i svaka druga kriva.
- Brisanje tačke unutar splajna uklanja tu tačku i zadržava splajn, dok ima najmanje dvije tačke (tri kad je zatvoren).

{{ui:Istisni}} i {{ui:Rotiraj}} grade splajn mrežnim jezgrom od kratkih pravih dijelova (prave krive zahtijevaju tačno jezgro: u ovoj verziji još nije izgrađeno). Izvoz u DXF zapisuje splajn kao polilinij koji ostaje unutar 0.01 mm od krive, jer DXF R12 nema entitet splajna.

## Odsijecanje i produženje

| Alat | Tipka | Kako |
|---|---|---|
| {{ui:Odsijeci}} | {{key:T}} | Pokažite krivu: dio koji bi nestao prikazuje se crveno, do najbližih presjeka. Kliknite da ga uklonite. Kriva koja ništa ne presijeca uklanja se u cjelini |
| {{ui:Produži}} (pod {{ui:Više}}) | {{key:E}} | Kliknite liniju ili luk blizu kraja da produžite. Raste do sljedeće krive koju sretne. Ako ništa nije na putu, javlja se: "Tom kraju nema šta da dosegne." |

Odsijecanje i produženje rade na linijama, lukovima, krugovima i splajnovima (produženje: linije i lukovi).

- Odsječen **krug** postaje luk. Njegova kota poluprečnika ili prečnika prelazi na luk.
- Odsijecanje sredine linije ostavlja dvije linije koje ostaju na istoj pravoj liniji. Odsijecanje sredine luka ostavlja dva luka s istim centrom i relacijom jednakosti.
- Odsječen **splajn** postaje splajn s kontrolnim tačkama koji tačno prati staru krivu. Relacija tangente na kraju koji se zadrži ostaje.
- Novi kraj se postavlja na krivu koja ga je odsjekla (na liniju, luk ili krug, ili se poklapa s njegovim krajem). Splajnovi ne mogu držati tačku, pa splajn koji odsijeca ne dodaje relaciju.

**Relacije koje više ne odgovaraju se uklanjaju**, a statusna traka kaže koliko. Na primjer, kota dužine na odsječenoj liniji se uklanja, ali horizontalne ili paralelne relacije ostaju.

## Pomak

1. Odaberite {{ui:Pomak}} pod {{ui:Više}} ili pritisnite {{key:O}}.
2. Kliknite liniju, luk, krug ili splajn. Cijeli njegov lanac se ističe: sve krive spojene kraj do kraja, do tačke gdje se sastaju tri ili više. Da napravite pomak samo dijela lanca, prvo odaberite te krive, zatim odaberite Pomak i kliknite jednu od njih.
3. Pomjerite pokazivač na stranu na koju ide kopija. Isprekidani pregled prati pokazivač. Pritisnite {{key:B}} za obje strane.
4. Kliknite, unesite udaljenost i pritisnite {{key:Enter}}.

Linije i lukovi se pomjeraju tačno. Uglovi se produžuju ili odsijecaju dok se ne sretnu. Kopija ima jednu kotu **Pomak**, a ostali dijelovi je prate: dvaput kliknite kotu da promijenite cijelu kopiju. Udaljenost prevelika za lanac se odbija, na primjer: "Ta udaljenost je prevelika za ovaj lanac: jedna strana bi se okrenula naopako."

**Splajn** se pomjera novim splajnom s tačkama prolaza, unutar 0.001 mm od pravog pomaka. Ova kopija je fiksna: ne prati kasnije promjene i nema kotu pomaka. Splajn u lancu zahtijeva glatke (tangentne) spojeve na krajevima.

## Zrcaljenje

1. Alatom Odaberi izaberite šta zrcaliti.
2. Odaberite {{ui:Zrcaljenje}} pod {{ui:Više}} ili pritisnite {{key:M}}.
3. Kliknite liniju ili osnu liniju oko koje zrcalite.

Svaka zrcaljena tačka dobija relaciju **Simetrično** sa originalom, pa kopija prati kad se original promijeni. Tačke koje leže na osi zrcaljenja su zajedničke, a zrcaljeni krugovi dobijaju relaciju Jednako. Ako ništa nije odabrano, kliknite stavke za zrcaljenje, pritisnite {{key:Enter}}, pa kliknite liniju zrcaljenja.

## Poligoni i utori

| Alat | Kako |
|---|---|
| {{ui:Poligon}} | Kliknite centar, zatim ugao, pa unesite broj stranica (3 do 64). Stranice su jednake, a uglovi leže na pomoćnom krugu. Kotirajte krug da odredite veličinu poligona |
| {{ui:Utor}} | Kliknite centar jednog kraja, zatim centar drugog kraja, pa kliknite da postavite širinu. Dvije linije, tangentne na dva jednaka polukruga |

## Uzorci skice

Prvo odaberite geometriju, zatim:

- {{ui:Linearni uzorak}}: kliknite početnu tačku, zatim gdje ide prva kopija, pa unesite broj kopija (uključujući original).
- {{ui:Kružni uzorak}}: kliknite centar, pa unesite broj kopija, ravnomjerno raspoređenih kroz puni krug.

Kopije nose sa sobom relacije među odabranom geometrijom (kružni uzorak izostavlja horizontalne i vertikalne). Kopije nisu povezane s originalom: promijenite jednu, a ostale ostaju kakve jesu.

## Projektovanje ivica dijela

1. Odaberite {{ui:Projektuj ivicu}} pod {{ui:Više}}.
2. Kliknite pravu ili kružnu ivicu dijela iza skice.

Ivica se tačno kopira na ravan skice i fiksira (relacija {{ui:⚓ Fiksiraj}}). Ne prati kasnije promjene dijela. Pritisnite {{key:Q}} da je pretvorite u pomoćnu geometriju. Krug nagnut prema ravni skice pretvorio bi se u elipsu, pa se odbija. Odbijaju se i slobodne krive i ivice koje pokazuju pravo iz skice. Projektovanje zahtijeva tačno jezgro: u ovoj verziji još nije izgrađeno.
