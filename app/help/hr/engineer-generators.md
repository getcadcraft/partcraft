---
title: Dijelovi iz fizike: generatori
summary: Radni prostor Engineer i značajka Generirano tijelo: odaberite generator, postavite njegove ulaze (protok, tlak, temperature, materijal, pisač) i dobijte dio dimenzioniran prema udžbeničkim formulama, s tehničkim listom, provjerama za proizvodnju i datotekama za alate za analizu. Isti ulazi uvijek daju isti dio.
keywords: engineer, generator, generirano tijelo, fizika, pravila, izmjenjivač topline, razdjelnik, mlaznica, rešetka, giroid, tehnički list, ulazi, deterministički, isti ulazi isti dio, provjere proizvodnje, 3D ispis, sloj praha
from: 5a387dc0
---

**Generator** je skripta koja dimenzionira dio prema vašim zahtjevima i gradi ga. Generator izmjenjivača topline uzima toplinu koju treba prenijeti, dva protoka i njihove temperature, tlak i materijal; izračunava koliko jezgra mora biti velika i koliko debela joj je stijenka, gradi je i kaže vam brojeve koje je koristio i odakle je svaki došao. Promijenite ulaz i dio slijedi.

Rezultat je normalno tijelo u dijelu: nalazi se na popisu značajki, ispisuje se, izvozi se. Sam generator također se čuva u dijelu, pa se datoteka otvara na bilo kojem računalu bez instaliranog generatora, a **otvaranje dijela nikada ne pokreće skriptu**.

## Izradite tijelo

1. Odaberite radni prostor {{ui:Engineer}} u prebacivaču.
2. Odaberite generator s popisa (oni koji dolaze uz PartCraft, pa svi koje ste otvorili iz datoteke) i kliknite {{ui:Novo}}.
3. Skripta se pokreće. Kada završi, tijelo je u pogledu, a ploča prikazuje njegove ulaze, **tehnički list** i **provjere**.

Možete ga dodati i iz Design: {{ui:Značajke}} › {{ui:Više}} › {{ui:Generirano tijelo}}.

## Promijenite ga

Promijenite bilo koji ulaz i tijelo se ponovno izrađuje malo nakon što prestanete tipkati. Ploča kaže koja od tri stvari vrijedi:

- **Ažurno**: tijelo odgovara skripti i njezinim ulazima.
- **Ulazi su se promijenili**: tijelo u dijelu je iz ranijih ulaza; ponovno se izrađuje ili pritisnite {{ui:Pokreni}}.
- **Još nije pokrenuto** ili **Zadnje pokretanje nije uspjelo**: prikazuje se pogreška skripte s redom.

{{ui:Zaustavi}} završava pokretanje koje predugo traje. Poništavanje ide korak po korak: pokretanje je jedan korak, ulaz je jedan korak.

## Tehnički list

Svaki broj koji je generator izračunao naveden je s njegovom **jedinicom** i **odakle dolazi** (udžbenička jednadžba, norma, tehnički list). Ništa nije skrivena konstanta. List je dio datoteke, pa je isti na sljedećem računalu. [Izvoz podataka](topic:data-out) objašnjava kako ga spremiti kao JSON ili PDF.

## Provjere

Generator može provjeriti vlastiti dio prema postupku ispisa: stijenke i razmaci tanji od onih koje postupak drži, labavi dijelovi, šupljine koje zarobljavaju prah ili smolu, rupe preuske da se očiste te previsi koji trebaju potporu. Nalazi su u ploči i na popisu {{ui:Problemi}} (gumb ⚠), a spremaju se s dijelom.

Brojevi za postupke su okrugle vrijednosti koje javni priručnici za dizajn daju za postupak općenito (FDM, SLA, SLS, metalni sloj praha). **Nisu specifikacija vašeg stroja**: zamijenite ih brojevima vaše radionice prije nego se oslonite na provjeru. Provjera radi na mreži voksela, pa je točna do otprilike jednog voksela: stijenka se prijavljuje samo kada je tanja od granice za više od jednog voksela.

## Što se isporučuje

| Generator | Što izrađuje |
|---|---|
| Blok s giroidom | Blok ispunjen giroidom, Schwarz P ili dijamantnom pločom: najjednostavnija rešetka |
| Giroidni izmjenjivač topline | Jezgra dvofluidnog izmjenjivača, dimenzionirana prema opterećenju metodom učinkovitost-NTU, stijenka prema tlaku; može provjeriti pad tlaka studijom protoka na jednoj ćeliji |
| Distribucijski razdjelnik | Glavna cijev i grane, svaka cijev dimenzionirana prema protoku koji nosi |
| Gradirana rešetkasta greda | Rešetka čija se stijenka zadeblja tamo gdje topološka optimizacija kaže da treba materijal |

Svi su prve procjene izgrađene na udžbeničkim formulama. [Inženjerska knjižnica](topic:engineering-library) navodi formule i njihova ograničenja. Prije nego se oslonite na rezultat pokrenite na njemu Simulation, Thermal ili Flow.

## Nadzor izvoza

Generatori i tehnički listovi Engineera nose obavijest o nadzoru izvoza i sankcijama. Pročitajte je u [Engineer i nadzor izvoza](topic:engineer-export-notice); također je na dnu svakog tehničkog lista.

## Još nije izrađeno

- Glave, priključci i spojnice na jezgri izmjenjivača topline: to je samo jezgra.
- Krivulje temperature za čvrstoću materijala: materijali su na sobnoj temperaturi.
- Gubici na T-spojevima i raspodjela protoka među izlazima u razdjelniku.
- Dodavanje generatora iz imenika dodataka jednim klikom; otvaranje datoteke dodaje jedan u ovaj preglednik.
- Generatori za druge aplikacije.
