---
title: Splajnovi, skraćivanje, pomak i drugi alati za skicu
summary: Crtaj splajnove sa tačkama kroz koje prolaze i sa kontrolnim tačkama, skraćuj i produžuj krive, pravi pomak lanca, simetriši oko osne linije, dodaj poligone i žlebove, pravi nizove geometrije skice i projektuj ivice modela.
keywords: splajn, tačka kroz koju prolazi, kontrolna tačka, b-splajn, nurbs, kriva, skrati, produži, pomak, simetrija, simetrično, poligon, šestougao, žleb, niz, linearni niz, kružni niz, projektuj, projektuj ivicu, uključi, pretvori entitete
from: 3ecb166a
---

Ovi alati rade u otvorenoj skici. {{ui:Splajn}} i {{ui:Skrati}} su na traci sa alatkama. Ostali su pod {{ui:Više}} na kraju alata za skicu. Svaki alat je jedan korak opoziva, a {{key:Esc}} ga prekida. Za osnovne alate za crtanje vidi [Nacrtaj prvu skicu](topic:sketch-basics).

## Splajnovi

Splajn je glatka kriva. Postoje dve vrste.

| Alat | Taster | Kako crtati |
|---|---|---|
| {{ui:Splajn}} | {{key:B}} | Klikni tačke kroz koje kriva prolazi. Završi sa {{key:Enter}}, {{key:Esc}}, desnim klikom ili dvostrukim klikom. Ponovo klikni prvu tačku da zatvoriš splajn |
| {{ui:Spline sa kontrolnim tačkama}} (pod {{ui:Više}}) | | Klikni kontrolne tačke. Kriva je privučena ka njima, ali dodiruje samo prvu i poslednju. Isprekidani kontrolni poligon se prikazuje dok crtaš i posle |

- **Tačke su tačke skice.** Prevuci ih ili im daj relacije i kote kao bilo kojoj tački. Prva tačka splajna može da se uhvati za kraj linije, što ih spaja relacijom poklapanja.
- **Tangenta na kraju.** Izaberi liniju, luk ili splajn koji se sastaje sa jednim krajem splajna, pa sam splajn, pa izaberi {{ui:T Tangenta}}. Smer kraja splajna tada prati liniju. Tangenta na mestu koje nije kraj splajna se odbija: „Tangenta na splajn zahteva da se linija, luk ili splajn sastaje sa jednim njegovim krajem.“
- **Krajevi.** Bez tangentne relacije, krajevi splajna sa tačkama kroz koje prolazi su prirodni (nema zakrivljenosti na samom kraju). Kriva je kubna i prolazi kroz svaku tačku, a razmak zavisi od rastojanja između tačaka.
- **Zatvoreni splajnovi** sami prave profil. Otvoreni splajnovi spajaju linije i lukove u zatvorenu petlju kao i svaka druga kriva.
- Brisanje tačke unutar splajna uklanja tu tačku i zadržava splajn, dok ima bar dve tačke (tri kad je zatvoren).

Izvlačenje i rotiranje grade splajn mrežnim jezgrom od kratkih pravih delova (prave krive traže tačno jezgro: još nije izgrađeno u ovoj verziji). Izvoz u DXF upisuje splajn kao polilinij koja ostaje unutar 0.01 mm od krive, jer DXF R12 nema entitet splajna.

## Skraćivanje i produžavanje

| Alat | Taster | Kako |
|---|---|---|
| {{ui:Skrati}} | {{key:T}} | Pokaži na krivu: deo koji bi nestao prikazuje se crveno, do najbližih preseka. Klikni da ga ukloniš. Kriva koja ne seče ništa uklanja se cela |
| {{ui:Produži}} (pod {{ui:Više}}) | {{key:E}} | Klikni liniju ili luk blizu kraja da ga produžiš. Raste do sledeće krive koju sretne. „Tom kraju nema šta da dosegne.“ kad ništa ne stoji na putu |

Skrati i Produži rade na linijama, lukovima, krugovima i splajnovima (Produži: linije i lukovi).

- Skraćen **krug** postaje luk. Njegova kota poluprečnika ili prečnika prelazi na luk.
- Skraćivanje sredine linije ostavlja dve linije koje ostaju na istoj pravoj. Skraćivanje sredine luka ostavlja dva luka sa istim centrom i relacijom jednakosti.
- Skraćen **splajn** postaje splajn sa kontrolnim tačkama koji tačno prati staru krivu. Tangentna relacija na kraju koji ostaje ostaje.
- Novi kraj se postavlja na krivu koja ga je presekla (na liniju, luk ili krug, ili se poklapa sa njenim krajem). Splajnovi ne mogu da drže tačku, pa splajn koji seče ne dodaje relaciju.

**Relacije koje više ne odgovaraju se uklanjaju**, a statusna traka kaže koliko. Na primer, kota dužine na skraćenoj liniji se uklanja, ali horizontalne ili paralelne relacije ostaju.

## Pomak

1. Izaberi {{ui:Pomak}} pod {{ui:Više}} ili pritisni {{key:O}}.
2. Klikni liniju, luk, krug ili splajn. Ceo njegov lanac se ističe: sve krive spojene kraj do kraja, do tačke gde se sastaju tri ili više. Da pomeriš samo deo lanca, prvo izaberi te krive, zatim izaberi Pomak i klikni jednu od njih.
3. Pomeri pokazivač na stranu na koju ide kopija. Isprekidani pregled prati pokazivač. Pritisni {{key:B}} za obe strane.
4. Klikni, unesi rastojanje i pritisni {{key:Enter}}.

Linije i lukovi se pomeraju tačno. Ćoškovi se produžuju ili skraćuju dok se ne sretnu. Kopija ima jednu kotu **Pomak**, a ostali delovi je prate: dvostruko klikni kotu da promeniš celu kopiju. Rastojanje preveliko za lanac se odbija, na primer: „To rastojanje je preveliko za ovaj lanac: jedna strana bi se okrenula naopako.“

**Splajn** se pomera novim splajnom sa tačkama kroz koje prolazi, unutar 0.001 mm od tačnog pomaka. Ova kopija je fiksirana: ne prati kasnije promene i nema kotu Pomak. Splajn u lancu traži glatke (tangentne) spojeve na krajevima.

## Simetrija

1. Alatom Izbor izaberi šta da se preslikava.
2. Izaberi {{ui:Simetrija}} pod {{ui:Više}} ili pritisni {{key:M}}.
3. Klikni liniju ili osnu liniju u odnosu na koju se preslikava.

Svaka preslikana tačka dobija relaciju **Simetrično** sa originalom, pa kopija prati original kad se on promeni. Tačke koje leže na osi preslikavanja su zajedničke, a preslikani krugovi dobijaju relaciju Jednako. Ako ništa nije izabrano, klikni stavke za preslikavanje, pritisni {{key:Enter}}, pa klikni liniju preslikavanja.

## Poligoni i žlebovi

| Alat | Kako |
|---|---|
| {{ui:Poligon}} | Klikni centar, pa ćošak, pa unesi broj stranica (od 3 do 64). Stranice su jednake, a ćoškovi leže na konstrukcionom krugu. Kotiraj krug da dimenzionišeš poligon |
| {{ui:Žleb}} | Klikni centar jednog kraja, pa centar drugog kraja, pa klikni da postaviš širinu. Dve linije, tangentne na dva jednaka polukruga |

## Nizovi skice

Prvo izaberi geometriju, pa:

- {{ui:Linearni niz}}: klikni početnu tačku, zatim mesto gde ide prva kopija, pa unesi broj kopija (uključujući original).
- {{ui:Kružni niz}}: klikni centar, pa unesi broj kopija, raspoređenih ravnomerno u punom krugu.

Kopije nose sa sobom relacije među izabranom geometrijom (kružni niz izostavlja horizontalne i vertikalne). Kopije nisu povezane sa originalom: promeni jednu, a ostale ostaju kakve jesu.

## Projektovanje ivica dela

1. Izaberi {{ui:Projektuj ivicu}} pod {{ui:Više}}.
2. Klikni pravu ili kružnu ivicu dela iza skice.

Ivica se tačno kopira na ravan skice i fiksira (relacija Fiksiraj). Ne prati kasnije promene dela. Pritisni {{key:Q}} da bi postala konstrukciona geometrija. Krug nagnut prema ravni skice bi se projektovao kao elipsa, pa se odbija. Odbijaju se i slobodne ivice i ivice koje idu pravo iz skice. Projektovanje traži tačno jezgro: još nije izgrađeno u ovoj verziji.
