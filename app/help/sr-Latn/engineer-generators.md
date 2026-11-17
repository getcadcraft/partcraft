---
title: Delovi iz fizike: generatori
summary: Radni prostor Engineer i osobina Generisano telo: izaberite generator, podesite njegove ulaze (protok, pritisak, temperature, materijal, štampač) i dobijte deo dimenzionisan prema udžbeničkim formulama, sa njegovim listom podataka, proverama za proizvodnju i datotekama za alate za analizu. Isti ulazi uvek daju isti deo.
keywords: engineer, generator, generisano telo, fizika, pravila, izmenjivač toplote, razdelnik, mlaznica, rešetka, giroid, list podataka, ulazi, deterministički, isti ulazi isti deo, provere za proizvodnju, 3D štampa, sloj praha
from: 5a387dc0
---

**Generator** je skripta koja dimenzioniše deo prema vašim zahtevima i gradi ga. Generator izmenjivača toplote uzima toplotu koju treba preneti, dva protoka i njihove temperature, pritisak i materijal; izračunava koliko jezgro treba da bude veliko i koliko debeo zid, gradi ga i kaže vam brojeve koje je koristio i odakle je svaki došao. Promenite ulaz i deo prati.

Rezultat je obično telo u delu: nalazi se u listi osobina, štampa se, izvozi se. Sam generator je takođe sačuvan u delu, pa se datoteka otvara na bilo kom računaru bez instaliranog generatora, a **otvaranje dela nikada ne pokreće skriptu**.

## Pravljenje tela

1. Izaberite radni prostor {{ui:Engineer}} u prebacivaču.
2. Izaberite generator sa liste (oni koji dolaze uz PartCraft, zatim svi koje ste otvorili iz datoteke) i kliknite {{ui:Nova}}.
3. Skripta se pokreće. Kada završi, telo je u prikazu, a panel prikazuje njegove ulaze, njegov **list podataka** i **provere**.

Telo možete dodati i iz Konstrukcije: {{ui:Osobine}} › {{ui:Više}} › {{ui:Generisano telo}}.

## Promena

Promenite bilo koji ulaz i telo se pravi ponovo malo nakon što prestanete da kucate. Panel kaže koja od tri stvari je tačna:

- **Ažurno**: telo odgovara skripti i njenim ulazima.
- **Ulazi su promenjeni**: telo u delu je iz ranijih ulaza; ponovo se pravi, ili pritisnite {{ui:Pokreni}}.
- **Još nije pokrenuto** ili **Poslednje pokretanje nije uspelo**: prikazuje se greška skripte sa svojim redom.

{{ui:Zaustavi}} prekida pokretanje koje predugo traje. Opozovi ide korak po korak unazad: pokretanje je jedan korak, ulaz je jedan korak.

## List podataka

Svaki broj koji je generator izračunao naveden je sa svojom **jedinicom** i **odakle dolazi** (udžbenička jednačina, standard, list podataka). Ništa nije skrivena konstanta. List je deo datoteke, pa je isti na sledećem računaru. [Izvoz podataka](topic:data-out) objašnjava kako ga sačuvati kao JSON ili PDF.

## Provere

Generator može da proveri svoj deo prema postupku štampe: zidove i praznine tanje od onoga što postupak drži, slobodne komade, šupljine koje zarobljavaju prah ili smolu, rupe preuske da se očiste, i nagibe koji treba podupreti. Nalazi su u panelu i na listi {{ui:Problemi}} (dugme ⚠), i čuvaju se uz deo.

Brojke za postupak su okrugle vrednosti koje javni projektantski vodiči daju za postupak uopšte (FDM, SLA, SLS, metalni sloj praha). To **nije specifikacija vaše mašine**: zamenite ih brojkama vaše radionice pre nego što se oslonite na proveru. Provera radi na mreži voksela, pa je tačna do otprilike jednog voksela: zid se prijavljuje samo kada je tanji od granice za više od jednog voksela.

## Šta se isporučuje

| Generator | Šta pravi |
|---|---|
| Blok od giroida | Blok ispunjen giroidom, Schwarz P ili dijamantnom pločom: najjednostavnija rešetka |
| Izmenjivač toplote od giroida | Jezgro izmenjivača sa dva fluida, dimenzionisano prema opterećenju metodom efektivnosti i NTU, njegov zid prema pritisku; može da proveri pad pritiska pomoću strujne studije na jednoj ćeliji |
| Distributivni razdelnik | Glavni vod i ogranci, svaka cev dimenzionisana prema protoku koji nosi |
| Rešetkasta greda sa gradijentom | Rešetka čiji se zid zadebljava tamo gde topološka optimizacija kaže da je materijal potreban |

Svi su prve procene zasnovane na udžbeničkim formulama. [Inženjerska biblioteka](topic:engineering-library) navodi formule i njihova ograničenja. Pokrenite Simulaciju, Termiku ili Protok nad rezultatom pre nego što se oslonite na njega.

## Kontrole izvoza

Generatori i listovi podataka Engineer-a nose obaveštenje o kontroli izvoza i sankcijama. Pročitajte ga u [Kontrole izvoza za Engineer](topic:engineer-export-notice); nalazi se i na dnu svakog lista podataka.

## Još nije napravljeno

- Glave, priključci i fitinzi na jezgru izmenjivača toplote: to je samo jezgro.
- Temperaturne krive čvrstoće materijala: materijali su na sobnoj temperaturi.
- Gubici na T-spoju i raspodela protoka između izlaza u razdelniku.
- Dodavanje generatora iz direktorijuma dodataka jednim klikom; otvaranje datoteke dodaje jedan u ovaj pregledač.
- Generatori za ostale aplikacije.
