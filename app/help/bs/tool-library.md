---
title: Biblioteka alata
summary: Sačuvajte alate koje koristite u pregledaču da ih svaki dio može imati, i premještajte biblioteke alata između računara kao JSON datoteku.
keywords: biblioteka alata, alati, izvoz, uvoz, JSON, sačuvaj alate, T broj, glodalo, alati radionice
from: 8b9f2483
---

Kartica **Alati** u radnom prostoru Proizvodnja navodi alate dijela. Pod **Biblioteka alata** možete čuvati svoje alate i van jednog dijela:

- {{ui:Spasi ovaj alat}} dodaje izabrani alat u **Moji sačuvani alati**; {{ui:Spasi sve alate ovog dijela}} dodaje sve njih. Moji sačuvani alati se čuvaju u ovom pregledaču i tu su za svaki dio. Alat koji ste već sačuvali (ista vrsta, veličina, žlijebovi i prepisivanja) ne čuva se dvaput.
- {{ui:Dodaj u ovaj dio}} unosi izabrani sačuvani alat u dio. Ako njegov T broj već koristi drugi alat u dijelu, dobija sljedeći slobodni broj i panel to kaže. {{ui:Ukloni iz moje biblioteke}} ga izbacuje sa liste sačuvanih (ne i iz dijelova koji ga već imaju).
- {{ui:Izvezi alate…}} upisuje alate dijela kao `.json` datoteku; {{ui:Uvezi alate…}} dodaje alate iz takve datoteke u dio, uz ista pravila (alat koji je već tu se preskače, a zauzeti T broj se pomjera). Datoteka sadrži veličine, žlijebove, materijale i prepisivanja posmaka i brzine koje ste upisali; nema ID-ova. Koristite je da premjestite alate radionice na drugi računar ili da ih date kolegi.

Ako pregledač ne može da čuva biblioteku (pohrana je isključena ili puna), čuvanje to kaže, a **Izvezi alate** je način da sačuvate datoteku. Datoteka mora biti biblioteka alata PartCraft-a ove verzije ili starija, sa najviše 500 alata ispravnih veličina; sve drugo se odbija, uz razlog.

Brzine rezanja i posmaci po zubu koji dolaze uz alat su početne vrijednosti; vidi [Pravljenje putanja alata i G-koda](topic:manufacture).
