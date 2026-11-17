---
title: Splineovi, skraćivanje, odmak i ostali alati skice
summary: Crtajte splineove prema točkama prolaska i kontrolnim točkama, skraćujte i produžujte krivulje, odmičite lanac, zrcalite oko osi, dodajte poligone i utore, uzorkujte geometriju skice i projicirajte rubove modela.
keywords: spline, točka prolaska, kontrolna točka, b-spline, nurbs, krivulja, skrati, produži, odmakni, zrcali, simetrično, poligon, šesterokut, utor, uzorak, linearni uzorak, kružni uzorak, projiciraj, projiciraj brid, uključi, pretvori entitete
from: 3ecb166a
---

Ovi alati rade u otvorenoj skici. {{ui:Spline}} i {{ui:Skrati}} su na alatnoj traci. Ostali su pod {{ui:Više}} na kraju alata za skicu. Svaki alat je jedan korak poništavanja, a {{key:Esc}} ga zaustavlja. Za osnovne alate za crtanje vidi [Crtanje prve skice](topic:sketch-basics).

## Splineovi

Spline je glatka krivulja. Postoje dvije vrste.

| Alat | Tipka | Kako crtati |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Kliknite točke kroz koje krivulja prolazi. Završite s {{key:Enter}}, {{key:Esc}}, desnim klikom ili dvostrukim klikom. Ponovno kliknite prvu točku da zatvorite spline |
| {{ui:Spline s kontrolnim točkama}} (pod {{ui:Više}}) | | Kliknite kontrolne točke. Krivulja se privlači prema njima, ali dodiruje samo prvu i zadnju. Isprekidani kontrolni poligon prikazuje se dok crtate i poslije |

- **Točke su točke skice.** Povucite ih ili im dodijelite odnose i kote kao svakoj drugoj točki. Prva točka splinea može se uhvatiti na kraj linije, čime se spaja s njom podudarnim ograničenjem.
- **Tangenta na kraju.** Odaberite liniju, luk ili spline koji se spaja s jednim krajem splinea, zatim spline, pa odaberite {{ui:T Tangentno}}. Smjer kraja splinea tada slijedi tu krivulju. Tangenta izvan krajeva splinea se odbija porukom: „Tangenta na spline zahtijeva da linija, luk ili spline dodiruje jedan njegov kraj.“
- **Krajevi.** Bez tangentnog ograničenja, krajevi splinea po točkama prolaska su prirodni (bez zakrivljenosti na samom kraju). Krivulja je kubična i prolazi kroz svaku točku, a njezin razmak određen je udaljenostima među točkama.
- **Zatvoreni splineovi** sami čine profil. Otvoreni splineovi spajaju linije i lukove u zatvorenu petlju kao i svaka druga krivulja.
- Brisanje točke unutar splinea uklanja tu točku i zadržava spline, dok ima barem dvije točke (tri ako je zatvoren).

Izvlačenje i rotacija grade spline mrežnom jezgrom od kratkih ravnih dijelova (prave krivulje traže egzaktnu jezgru: u ovoj verziji još nije izrađeno). Izvoz DXF-a zapisuje spline kao polilinija koja ostaje unutar 0.01 mm od krivulje, jer DXF R12 nema entitet spline.

## Skraćivanje i produživanje

| Alat | Tipka | Kako |
|---|---|---|
| {{ui:Skrati}} | {{key:T}} | Pokazivač na krivulju: dio koji bi se uklonio prikazuje se crveno, do najbližih presjecišta. Kliknite za uklanjanje. Krivulja koja ništa ne presijeca uklanja se u cijelosti |
| {{ui:Produži}} (pod {{ui:Više}}) | {{key:E}} | Kliknite liniju ili luk blizu kraja za produženje. Raste do sljedeće krivulje koju susretne. „Ništa nema što bi taj kraj mogao doseći.“ kad ništa nije na putu |

Skraćivanje i produživanje rade na linijama, lukovima, kružnicama i splineovima (Produži: linije i lukovi).

- Skraćena **kružnica** postaje luk. Njezina kota radijusa ili promjera prelazi na luk.
- Skraćivanje sredine linije ostavlja dvije linije koje ostaju na istom pravcu. Skraćivanje sredine luka ostavlja dva luka s istim središtem i ograničenjem Jednako.
- Skraćeni **spline** postaje spline s kontrolnim točkama koji točno slijedi staru krivulju. Tangentno ograničenje na kraju koji ostane zadržava se.
- Novi kraj stavlja se na krivulju koja ga je presjekla (na liniju, luk ili kružnicu, ili podudarno s njezinim krajem). Splineovi ne mogu držati točku, pa spline koji presijeca ne dodaje ograničenje.

**Ograničenja koja više ne odgovaraju uklanjaju se**, a statusna traka kaže koliko ih je. Na primjer, kota duljine na skraćenoj liniji se uklanja, ali vodoravna ili paralelna ograničenja ostaju.

## Odmak

1. Odaberite {{ui:Odmakni}} pod {{ui:Više}} ili pritisnite {{key:O}}.
2. Kliknite liniju, luk, kružnicu ili spline. Cijeli njegov lanac se označi: sve krivulje spojene kraj do kraja, do točke gdje se sastaju tri ili više. Za odmak samo dijela lanca prvo odaberite te krivulje, zatim Odmakni, pa kliknite jednu od njih.
3. Pomaknite pokazivač na stranu na koju ide kopija. Prikazuje se isprekidani pregled. Pritisnite {{key:B}} za obje strane.
4. Kliknite, upišite udaljenost i pritisnite {{key:Enter}}.

Linije i lukovi odmiču se točno. Kutovi se produže ili skrate dok se ne spoje. Kopija ima jednu kotu **Odmak**, a ostali dijelovi je slijede: dvaput kliknite kotu za promjenu cijele kopije. Preveliku udaljenost za lanac odbija se, na primjer: „Ta udaljenost je prevelika za ovaj lanac: jedna strana bi se izvrnula naopako.“

**Spline** se odmiče novim splineom prema točkama prolaska unutar 0.001 mm od pravog odmaka. Ta kopija je fiksna: ne prati kasnije promjene i nema kotu Odmak. Spline u lancu treba glatke (tangentne) spojeve na svojim krajevima.

## Zrcaljenje

1. Alatom Odabir odaberite što zrcaliti.
2. Odaberite {{ui:Zrcali}} pod {{ui:Više}} ili pritisnite {{key:M}}.
3. Kliknite liniju ili os oko koje se zrcali.

Svaka zrcaljena točka dobiva ograničenje **Simetrično** s originalom, pa kopija slijedi kad se original promijeni. Točke na zrcalnoj liniji su zajedničke, a zrcaljene kružnice dobivaju ograničenje Jednako. Ako ništa nije odabrano, kliknite stavke za zrcaljenje, pritisnite {{key:Enter}}, zatim kliknite zrcalnu liniju.

## Poligoni i utori

| Alat | Kako |
|---|---|
| {{ui:Poligon}} | Kliknite središte, zatim kut, zatim upišite broj stranica (3 do 64). Stranice su jednake, a kutovi leže na konstrukcijskoj kružnici. Dimenzionirajte kružnicu da odredite veličinu poligona |
| {{ui:Utor}} | Kliknite središte jednog kraja, zatim središte drugog kraja, zatim kliknite za širinu. Dvije linije, tangentne na dva jednaka polukruga |

## Uzorci skice

Prvo odaberite geometriju, zatim:

- {{ui:Linearni uzorak}}: kliknite početnu točku, zatim mjesto prve kopije, zatim upišite broj kopija (uključujući original).
- {{ui:Kružni uzorak}}: kliknite središte, zatim upišite broj kopija, raspoređenih ravnomjerno kroz puni krug.

Kopije nose sa sobom ograničenja među odabranom geometrijom (kružni uzorak izostavlja vodoravna i okomita). Kopije nisu povezane s originalom: promijenite jednu, a ostale ostaju kakve jesu.

## Projiciranje rubova dijela

1. Odaberite {{ui:Projiciraj brid}} pod {{ui:Više}}.
2. Kliknite ravni ili kružni brid dijela iza skice.

Brid se točno kopira na ravninu skice i fiksira (ograničenje Učvrsti). Ne prati kasnije promjene dijela. Pritisnite {{key:Q}} da ga napravite konstrukcijskom geometrijom. Kružnica nagnuta prema ravnini skice projicirala bi se kao elipsa, pa se odbija. Odbijaju se i slobodni oblici te rubovi koji su usmjereni ravno iz skice. Projiciranje zahtijeva egzaktnu jezgru: još nije izrađeno u ovoj verziji.
