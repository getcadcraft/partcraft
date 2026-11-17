---
title: Knjižnica alata
summary: Spremite alate koje koristite u pregledniku da svaki dio može imati njih, i premjestite knjižnice alata između računala kao JSON datoteku.
keywords: knjižnica alata, alati, izvoz, uvoz, JSON, spremi alate, T broj, glodalo, alati iz radionice
from: 8b9f2483
---

Kartica **Alati** u Obradi navodi alate dijela. Pod **Knjižnica alata** možete čuvati vlastite alate izvan jednog dijela:

- {{ui:Spremi ovaj alat}} dodaje odabrani alat u **Moje spremljene alate**; {{ui:Spremi sve alate ovog dijela}} dodaje sve njih. Moji spremljeni alati čuvaju se u ovom pregledniku i dostupni su za svaki dio. Alat koji ste već spremili (ista vrsta, veličina, broj utora i nadjačavanja) ne sprema se dvaput.
- {{ui:Dodaj u ovaj dio}} uzima odabrani spremljeni alat u dio. Ako je njegov T broj već zauzet drugim alatom u dijelu, dobiva sljedeći slobodni broj i ploča to kaže. {{ui:Ukloni iz moje knjižnice}} ga briše s popisa spremljenih (ne iz dijelova koji ga već imaju).
- {{ui:Izvezi alate…}} zapisuje alate dijela kao `.json` datoteku; {{ui:Uvezi alate…}} dodaje alate iz takve datoteke u dio, uz ista pravila (alat koji je već tamo se preskače, a zauzeti T broj se pomiče). Datoteka sadrži veličine, utore, materijale i nadjačavanja brzine i posmaka koje ste upisali; nema ID-ova. Upotrijebite je da premjestite alate radionice na drugo računalo ili ih dadite kolegi.

Ako preglednik ne može sačuvati knjižnicu (pohrana je isključena ili puna), spremanje to kaže, a **Izvezi alate** je način da zadržite datoteku. Datoteka mora biti knjižnica alata PartCrafta ove verzije ili starija, s najviše 500 alata ispravnih veličina; sve ostalo se odbija uz razlog.

Brzine rezanja i opterećenja po zubu koje dolaze s alatom početne su vrijednosti; vidi [Izrada putanja alata i G-kod](topic:manufacture).
