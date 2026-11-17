---
title: Spajanje, pomicanje i skaliranje tijela; uzorci po putanji
summary: Izradite zasebna tijela, zatim ih naknadno spojite, izrežite ili presijecite, pomaknite, okrenite, poravnajte ili kopirajte, skalirajte jednoliko ili po X, Y i Z te kopirajte značajke ili tijela duž krivulje.
keywords: tijelo, tijela, više tijela, novo tijelo, spajanje, bulova operacija, spoji, izreži, presijeci, oduzmi, unija, zadrži alate, pomakni tijelo, kopiraj tijelo, okreni tijelo, poravnaj, pomak, skaliranje, neravnomjerno skaliranje, rastezanje, afino, uzorak po putanji, uzorak duž krivulje, uzorak vođen krivuljom
from: 6b1ea820
---

:::note
**Još nije izrađeno u ovoj verziji.** Rad s više tijela zahtijeva točno geometrijsko jezgro, a ta verzija programa PartCraft nema: svaki dio gradi s mrežnim jezgrom. [Što još nije izrađeno](topic:not-built-yet) opisuje što raditi umjesto toga. Ostatak stranice opisuje rad s točnim jezgrom.
:::

Dio može imati više tijela. Svako zasebno tijelo je **tijelo**. Većina značajki dodaje ili oduzima od svakog tijela koje dotakne; alati na ovoj stranici rade s cijelim tijelima koja odaberete. Nalaze se u izborniku {{ui:Više}} grupe Značajke: {{ui:Kombiniraj}}, {{ui:Pomakni tijelo}}, {{ui:Skaliraj tijelo}} i {{ui:Uzorak po putanji}}. Svi trebaju točno jezgro (OpenCascade).

## Stvaranje zasebnog tijela

U desnoj ploči izvlačenja ili rotacije postavite **Operacija** na **Novo tijelo** (provlačenja i lofti također je imaju). Novo tijelo ostaje zasebno i tamo gdje se preklapa s ostalima. **Presijeci** zadržava samo preklapanje novog oblika s postojećim.

Tijela su nazvana prema značajki koja ih je pokrenula: „Extrude2“. Kopija se imenuje prema izvorniku i značajki koja ju je kopirala: „Extrude2, copy 1 of Move1“. Nazivi ostaju isti kad mijenjate veličine u ranijim koracima, pa značajke koje koriste tijelo nastavljaju ga pronalaziti. Uz dva ili više tijela, ploča dijela (kliknite prazan prostor) navodi ih s njihovim volumenima.

## Preimenovanje ili skrivanje tijela

Kliknite prazan prostor u prikazu da vidite ploču dijela. Njezin popis tijela (prikazan kad dio ima dva ili više tijela) ima polje za naziv i gumb {{ui:Sakrij}} u svakom retku.

- **Preimenuj:** upišite novi naziv u polje i pritisnite {{key:Enter}} ili kliknite izvan polja. Svaka ploča ga tada koristi: Kombiniraj, Pomakni tijelo, uzorci. Obrišite polje da se vratite na naziv iz značajke koja je stvorila tijelo.
- **Sakrij:** kliknite {{ui:Sakrij}} u njegovu retku. Tijelo nestaje iz prikaza, a klikovi prolaze kroz njega pa možete odabrati plohe iza njega. {{ui:Prikaži}} ga vraća; {{ui:Prikaži sve}} vraća sva skrivena tijela.

Skrivanje mijenja samo prikaz. Skriveno tijelo se i dalje gradi, ulazi u volumen i mjerenja te se sprema u izvozima STL, 3MF i STEP. Nazivi i skrivena tijela spremaju se u datoteku dijela, a svaka promjena jedan je korak {{ui:Poništi}}.

## Kombiniranje tijela

1. Shift+klik na plohu **ciljnog** tijela, zatim na plohu svakog **alatnog** tijela.
2. Odaberite {{ui:Više}}, zatim {{ui:Kombiniraj}}.
3. U desnoj ploči odaberite **Operacija**:

| Operacija | Rezultat |
|---|---|
| Spoji | Cilj i alati postaju jedno tijelo |
| Izreži | Alati se oduzimaju od cilja |
| Presijeci | Zadržava se samo ono što cilj i svi alati dijele |

**Ciljno tijelo** je ono koje zadržava svoj naziv. Označite ili odznačite **Alatna tijela** ili upotrijebite **Odaberi u prikazu** i kliknite njihove plohe. **Zadrži alatna tijela** ostavlja alate na mjestu (korisno za kalup i njegovu jezgru). Ako je alatno tijelo već potrošeno ranijim Kombiniranjem, ploča to navodi umjesto da odabere drugo tijelo.

## Pomicanje ili kopiranje tijela

1. Odaberite {{ui:Više}}, zatim {{ui:Pomakni tijelo}}. Najnovije tijelo je označeno; označite ona koja želite pomaknuti.
2. Odaberite **Vrsta pomaka**:

| Pomak | Što postavljate |
|---|---|
| Translacija | **ΔX**, **ΔY**, **ΔZ** u milimetrima |
| Točka do točke | **Od** i **Do**: kliknite blizu kraja brida, značajke točke ili mjesta na plohi |
| Okreni oko osi | **Os** (X, Y, Z, značajka osi ili **Odaberi**: ravni brid, kružnica ili cilindar) i **Kut (°)** |
| Poravnaj plohu s plohom ili ravninom | **Ploha za pomak** (ravna ploha tijela), **Na** (ravna ploha ili ravnina) |

Poravnanje okreće tijelo tako da njegova ploha leži na drugoj plohi, lice uz lice, a zatim ga pomiče samo duž normale te plohe. **Isti smjer** okreće ga obrnuto. **Kopiraj** zadržava izvornik i dodaje pomaknutu kopiju kao novo tijelo.

## Skaliranje tijela

1. Odaberite {{ui:Više}}, zatim {{ui:Skaliraj tijelo}}, i označite tijela.
2. Upišite **Skala**, ili odznačite **Jednoliko** i upišite **Skala X**, **Skala Y** i **Skala Z** (duž osi svijeta).
3. **Oko** je točka koja ostaje na mjestu: središte okvira tijela ili točka koju odaberete.

Jednoliko skaliranje je točno. Neravnomjerno skaliranje pretvara kružnice u elipse: cilindar postaje eliptični cilindar, što nijedna analitička ploha ne može zadržati, pa zakrivljene plohe postaju B-spline plohe koje ostaju unutar 0.0000004 mm od točnog oblika; ravne plohe i ravni bridovi ostaju točni. Ploča navodi što se dogodilo. Faktori skaliranja moraju biti veći od nule (umjesto toga zrcalite s {{ui:Zrcali}}).

## Kopiranje duž putanje

1. Odaberite značajku za kopiranje u povijesti ili ne birajte ništa da kopirate najnovije tijelo.
2. Odaberite {{ui:Više}}, zatim {{ui:Uzorak po putanji}}. Kao putanja uzima se najnovija neiskorištena skica.
3. U desnoj ploči postavite:

| Postavka | Što radi |
|---|---|
| **Kopiraj** | Tijela (svaka kopija je novo tijelo) ili Značajke (spojene ili izrezane kao izvornik) |
| **Putanja** | Označite skice ili **Odaberi bridove modela**; dijelovi se moraju spojiti kraj na kraj |
| **Broj** | Ukupan broj, uključujući izvornik |
| **Razmak** | Jednak (raspoređen do kraja otvorene putanje ili po cijeloj zatvorenoj) ili zadana udaljenost |
| **Orijentacija** | Prati putanju (svaka kopija se okreće s njom) ili Fiksno (kopije ostaju paralelne) |
| **Obrnuti smjer** | Idi drugim smjerom duž putanje |

Kopije počinju tamo gdje putanja prolazi najbliže izvorniku i razmaknute su duljinom duž krivulje.

Linearni i kružni uzorci također mogu kopirati tijela: u njihovoj ploči označite **Kopiraj tijela** i odaberite tijela; svaka kopija je novo tijelo.

## Ograničenja

- Tijela trebaju točno jezgro; mrežno jezgro zadržava jedno tijelo i to navodi.
- Neravnomjerno skaliranje pretvara zakrivljene plohe u bliske B-spline aproksimacije (vidi gore), a ne u točne cilindre ili stošce; plohe s odmakom zasad se tako ne mogu skalirati.
- Praćenje putanje na uvijenoj 3D krivulji prenosi kopiju bez uvijanja; na ravnim putanjama okretanje je točno.
- Kombiniraj radi samo s punim tijelima. Plošna tijela spajaju se s {{ui:Zašij}}.

Vidi i [Referentne ravnine, osi i točke](topic:reference-geometry) za točke i ravnine „između objekata“ te [Značajke uzorka i zrcaljenja](topic:patterns-mirror).
