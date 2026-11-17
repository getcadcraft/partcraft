---
title: Dijelovi iz fizike: generatori
summary: Radni prostor Inženjer i funkcija Generisano tijelo: odaberite generator, postavite njegove ulaze (protok, pritisak, temperature, materijal, štampač) i dobijte dio dimenzionisan prema udžbeničkim formulama, sa njegovim listom podataka, provjerama proizvodnje i datotekama za alate analize. Isti ulazi uvijek daju isti dio.
keywords: inženjer, generator, generisano tijelo, fizika, pravila, izmjenjivač toplote, razvodnik, mlaznica, rešetka, giroid, list podataka, ulazi, deterministički, isti ulazi isti dio, provjere proizvodnje, 3D štampanje, sloj praha
from: 5a387dc0
---

**Generator** je skripta koja dimenzioniše dio prema vašim zahtjevima i gradi ga. Generator izmjenjivača toplote uzima toplotu koju treba prenijeti, dva protoka i njihove temperature, pritisak i materijal; izračuna koliko jezgro mora biti veliko i koliko debel zid, gradi ga, i kaže vam brojeve koje je koristio i odakle je svaki došao. Promijenite ulaz i dio slijedi.

Rezultat je normalno tijelo u dijelu: nalazi se na listi elemenata, štampa se, izvozi se. Sam generator je također sačuvan u dijelu, pa se datoteka otvara na bilo kojem računaru bez instaliranog generatora, i **otvaranje dijela nikad ne pokreće skriptu**.

## Napravi tijelo

1. Odaberite radni prostor {{ui:Inženjer}} u prekidaču.
2. Odaberite generator sa liste (one koje dolaze uz PartCraft, pa one koje ste otvorili iz datoteke) i kliknite {{ui:Novo}}.
3. Skripta se pokreće. Kad završi, tijelo je u prikazu, a panel prikazuje njegove ulaze, njegov **list podataka** i **provjere**.

Možete ga dodati i iz radnog prostora Dizajn: {{ui:Elementi}} › {{ui:Više}} › {{ui:Generisano tijelo}}.

## Promijeni ga

Promijenite bilo koji ulaz i tijelo se ponovo pravi čim prestanete kucati. Panel kaže koja od tri stvari je tačna:

- **Ažurno**: tijelo odgovara skripti i njenim ulazima.
- **Ulazi su promijenjeni**: tijelo u dijelu je iz ranijih ulaza; ponovo se pravi, ili pritisnite {{ui:Pokreni}}.
- **Nije još pokrenuto** ili **Zadnje pokretanje nije uspjelo**: prikazuje se greška skripte sa svojim redom.

{{ui:Zaustavi}} prekida pokretanje koje traje predugo. {{ui:Poništi}} ide korak po korak unazad: pokretanje je jedan korak, ulaz je jedan korak.

## List podataka

Svaka vrijednost koju je generator izračunao navedena je sa svojom **jedinicom** i **odakle dolazi** (udžbenička jednačina, standard, list podataka). Ništa nije skrivena konstanta. List je dio datoteke, pa je isti na sljedećem računaru. [Izvoz podataka](topic:data-out) kaže kako ga sačuvati kao JSON ili PDF.

## Provjere

Generator može provjeriti svoj dio prema procesu štampanja: zidove i razmake tanje od onoga što proces drži, slobodne dijelove, šupljine koje zarobljavaju prah ili smolu, rupe preuske da se očiste, i prevjese koji trebaju oslonac. Nalazi su u panelu i na listi {{ui:Problemi}} (dugme ⚠), i čuvaju se sa dijelom.

Brojke procesa su okrugle vrijednosti koje javni vodiči za projektovanje daju za proces uopšteno (FDM, SLA, SLS, sloj metalnog praha). To **nisu specifikacija vaše mašine**: zamijenite ih brojkama vaše radionice prije nego što se oslonite na provjeru. Provjera radi na mreži vokselā, pa je tačna do otprilike jednog voksela: zid se prijavljuje samo kad je tanji od granice za više od jednog voksela.

## Šta se isporučuje

| Generator | Šta pravi |
|---|---|
| Giroid blok | Blok ispunjen giroidom, Schwarz P ili dijamantnim listom: najjednostavnija rešetka |
| Giroid izmjenjivač toplote | Jezgro izmjenjivača sa dva fluida, dimenzionisano prema zadatku metodom efektivnosti-NTU, njegov zid prema pritisku; može provjeriti pad pritiska studijom protoka na jednoj ćeliji |
| Razvodni kolektor | Glavni vod i grane, svaka cijev dimenzionisana prema protoku koji nosi |
| Rešetkasta greda sa gradijentom | Rešetka čiji se zid zadebljava tamo gdje topološka optimizacija kaže da treba materijal |

Sve su to prve procjene zasnovane na udžbeničkim formulama. [Inženjerska biblioteka](topic:engineering-library) navodi formule i njihove granice. Pokrenite Simulation, Thermal ili Flow na rezultatu prije nego što se oslonite na njega.

## Kontrole izvoza

Generatori i listovi podataka Inženjera nose obavještenje o kontroli izvoza i sankcijama. Pročitajte ga u [Inženjer i kontrola izvoza](topic:engineer-export-notice); takođe je na dnu svakog lista podataka.

## Još nije napravljeno

- Zaglavlja, priključci i fitinzi na jezgru izmjenjivača: to je samo jezgro.
- Krive temperature za čvrstoću materijala: materijali su na sobnoj temperaturi.
- Gubici na T-spoju i raspodjela protoka između izlaza u razvodniku.
- Dodavanje generatora iz direktorija dodataka jednim klikom; otvaranje datoteke dodaje jedan u ovaj pregledač.
- Generatori za druge aplikacije.
