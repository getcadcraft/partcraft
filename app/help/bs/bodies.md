---
title: Kombinuj, pomjeri i skaliraj tijela; uzorci duž putanje
summary: Pravite zasebna tijela, zatim ih naknadno spajajte, režite ili presijecajte, pomjerajte, okrećite, poravnavajte ili kopirajte, skalirajte ravnomjerno ili po X, Y i Z, i kopirajte značajke ili tijela duž krive.
keywords: tijelo, tijela, više tijela, novo tijelo, kombinuj, bulova operacija, spoji, izreži, presijeci, oduzmi, unija, zadrži alate, pomjeri tijelo, kopiraj tijelo, rotiraj tijelo, poravnaj, translacija, skaliraj, neravnomjerno skaliranje, rastezanje, afino, uzorak duž putanje, uzorak duž krive, uzorak vođen krivom
from: 6b1ea820
---

:::note
**Još nije izrađeno u ovoj verziji.** Rad sa više tijela zahtijeva tačan geometrijski kernel, koji ova verzija PartCraft-a nema: svaki dio gradi mrežnim kernelom. [Šta još nije izrađeno](topic:not-built-yet) govori šta raditi umjesto toga. Ostatak ove stranice opisuje rad sa tačnim kernelom.
:::

Dio može imati više čvrstih tijela. Svako odvojeno čvrsto tijelo je **tijelo**. Većina značajki dodaje ili reže iz svakog tijela koje dotaknu; alati na ovoj stranici rade sa cijelim tijelima koje birate. Nalaze se u meniju {{ui:Više}} grupe Značajke: {{ui:Kombinuj}}, {{ui:Pomjeri tijelo}}, {{ui:Skaliraj tijelo}} i {{ui:Uzorak duž putanje}}. Svi zahtijevaju tačan kernel (OpenCascade).

## Pravljenje zasebnog tijela

Postavite **Operaciju** izvlačenja ili rotiranja na **Novo tijelo** u desnom panelu (i provlačenja i prelazi to imaju). Novo čvrsto tijelo ostaje zasebno čak i tamo gdje se preklapa sa drugima. **Presjek** zadržava samo preklapanje novog oblika sa postojećim.

Tijela dobijaju imena po značajki koja ih je pokrenula: "Extrude2". Kopija dobija ime po originalu i značajki koja ju je kopirala: "Extrude2, copy 1 of Move1". Imena ostaju ista kad mijenjate dimenzije uzvodno, pa značajke koje koriste tijelo i dalje ga nalaze. Sa dva ili više tijela, panel dijela (kliknite prazan prostor) navodi ih sa zapreminama.

## Preimenovanje ili sakrivanje tijela

Kliknite prazan prostor u prikazu da vidite panel dijela. Lista tijela (prikazana kad dio ima dva ili više tijela) ima polje za ime i dugme {{ui:Sakrij}} u svakom redu.

- **Preimenovanje:** upišite novo ime u polje i pritisnite {{key:Enter}} ili kliknite van. Svaki panel ga tada koristi: Kombinuj, Pomjeri tijelo, uzorci. Ispraznite polje da se vratite na ime iz značajke koja je napravila tijelo.
- **Sakrivanje:** kliknite {{ui:Sakrij}} u njegovom redu. Tijelo nestaje iz prikaza i klikovi prolaze kroz njega, pa možete birati površine iza njega. {{ui:Prikaži}} ga vraća; {{ui:Prikaži sve}} vraća sva skrivena tijela.

Sakrivanje mijenja samo prikaz. Skriveno tijelo se i dalje gradi, računa u zapremini i mjerenjima, i čuva se u STL, 3MF i STEP izvozima. Imena i skrivena tijela čuvaju se u datoteci dijela, a svaka promjena je jedan korak {{ui:Poništi}}.

## Kombinovanje tijela

1. Shift+klik na površinu **ciljnog** tijela, zatim na površinu svakog **alatnog** tijela.
2. Izaberite {{ui:Više}}, zatim {{ui:Kombinuj}}.
3. U desnom panelu izaberite **Operaciju**:

| Operacija | Rezultat |
|---|---|
| Spoji | Ciljno i alatna tijela postaju jedno tijelo |
| Izreži | Alatna tijela se oduzimaju od ciljnog |
| Presjek | Zadržava se samo ono što ciljno i svako alatno tijelo dijele |

**Ciljno tijelo** je ono koje zadržava svoje ime. Označite ili odznačite **Alatna tijela**, ili koristite **Izaberi u prikazu** i kliknite njihove površine. **Zadrži alatna tijela** ostavlja alate na mjestu (korisno za kalup i jezgro). Ako je alatno tijelo već iskorišteno ranijom operacijom Kombinuj, panel to kaže umjesto da bira drugo tijelo.

## Pomjeranje ili kopiranje tijela

1. Izaberite {{ui:Više}}, zatim {{ui:Pomjeri tijelo}}. Najnovije tijelo je označeno; označite one koje želite pomjeriti.
2. Izaberite vrstu **Pomjeranja**:

| Pomjeranje | Šta postavljate |
|---|---|
| Translacija | **ΔX**, **ΔY**, **ΔZ** u milimetrima |
| Tačka do tačke | **Od** i **Do**: kliknite blizu kraja ivice, tačke značajke ili mjesta na površini |
| Rotacija oko ose | **Osa** (X, Y, Z, značajka ose, ili **Izaberi**: prava ivica, krug ili cilindar) i **Ugao (°)** |
| Poravnaj površinu sa površinom ili ravninom | **Površina za pomjeranje** (ravna površina tijela), **Na** (ravna površina ili ravnina) |

Poravnavanje okreće tijelo tako da njegova površina leži na drugoj površini, površina na površinu, pa ga pomjera samo duž normale te površine. **Isti smjer** okreće ga suprotno. **Kopiraj** zadržava original i dodaje pomjerenu kopiju kao novo tijelo.

## Skaliranje tijela

1. Izaberite {{ui:Više}}, zatim {{ui:Skaliraj tijelo}}, i označite tijela.
2. Upišite **Skalu**, ili odznačite **Ravnomjerno** i upišite **Skalu X**, **Skalu Y** i **Skalu Z** (duž osa svijeta).
3. **Oko** je tačka koja ostaje na mjestu: centar kutije tijela, ili tačka koju izaberete.

Ravnomjerno skaliranje je tačno. Neravnomjerno skaliranje pretvara krugove u elipse: cilindar postaje eliptični cilindar, što nijedna analitička površina ne drži, pa zakrivljene površine postaju B-spline površine koje ostaju unutar 0.0000004 mm od tačnog oblika. Ravne površine i prave ivice ostaju tačne. Panel kaže šta se desilo. Faktori skaliranja moraju biti veći od nule (za ogledanje koristite {{ui:Zrcaljenje}}).

## Kopiranje duž putanje

1. Izaberite značajku za kopiranje u historiji, ili ništa ne birajte da kopirate najnovije tijelo.
2. Izaberite {{ui:Više}}, zatim {{ui:Uzorak duž putanje}}. Najnovija neiskorištena skica se uzima kao putanja.
3. U desnom panelu postavite:

| Postavka | Šta radi |
|---|---|
| **Kopiraj** | Tijela (svaka kopija je novo tijelo) ili Značajke (spojene ili izrezane kao original) |
| **Putanja** | Označite skice, ili **Izaberi ivice modela**; dijelovi se moraju spajati kraj na kraj |
| **Broj** | Ukupan broj, uključujući original |
| **Razmak** | Jednak (raširen do kraja otvorene putanje, ili oko zatvorene) ili zadata udaljenost |
| **Orijentacija** | Prati putanju (svaka kopija se okreće s njom) ili Fiksna (kopije ostaju paralelne) |
| **Obrnuti smjer** | Idi drugim smjerom duž putanje |

Kopije počinju tamo gdje putanja najbliže prolazi originalu i raspoređene su po dužini duž krive.

Linearni i kružni uzorci također mogu kopirati tijela: označite **Kopiraj tijela** u njihovom panelu i izaberite tijela. Svaka kopija je novo tijelo.

## Ograničenja

- Tijela zahtijevaju tačan kernel; mrežni kernel zadržava jedno tijelo i to kaže.
- Neravnomjerno skaliranje pretvara zakrivljene površine u bliske B-spline aproksimacije (vidi gore), a ne tačne cilindre ili konuse. Ofset površine se za sada ne mogu tako skalirati.
- Praćenje putanje na uvijenoj 3D krivi nosi kopiju bez uvijanja. Na ravnim putanjama okret je tačan.
- Kombinovanje radi samo sa čvrstim tijelima. Površinska tijela se spajaju sa {{ui:Sašij}}.

Vidi također [Referentne ravnine, ose i tačke](topic:reference-geometry) za tačke i ravnine "između objekata", i [Uzorci i ogledanje značajki](topic:patterns-mirror).
