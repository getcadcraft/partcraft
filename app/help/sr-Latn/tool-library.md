---
title: Biblioteka alata
summary: Sačuvajte alate koje koristite u pregledaču da bi ih svaki deo mogao imati, i premeštajte biblioteke alata između računara kao JSON datoteku.
keywords: biblioteka alata, alati, izvoz, uvoz, JSON, sačuvaj alate, broj T, glodalo, alati radionice
from: 8b9f2483
---

Kartica **Alati** u Izradi nabraja alate dela. Pod **Biblioteka alata** možete čuvati sopstvene alate i van jednog dela:

- {{ui:Sačuvaj ovaj alat}} dodaje izabrani alat u **Moji sačuvani alati**; {{ui:Sačuvaj sve alate ovog dela}} dodaje sve njih. Moji sačuvani alati čuvaju se u ovom pregledaču i tu su za svaki deo. Alat koji ste već sačuvali (ista vrsta, veličina, broj žljebova i prepisane vrednosti) ne čuva se dvaput.
- {{ui:Dodaj u ovaj deo}} stavlja izabrani sačuvani alat u deo. Ako njegov broj T već koristi drugi alat u delu, dobija sledeći slobodan broj i panel to kaže. {{ui:Ukloni iz moje biblioteke}} ga briše sa spiska sačuvanih (ne iz delova koji ga već imaju).
- {{ui:Izvezi alate…}} upisuje alate dela kao datoteku `.json`; {{ui:Uvezi alate…}} dodaje alate iz takve datoteke delu, uz ista pravila (alat koji je već tu se preskače, a zauzet broj T se pomera). Datoteka sadrži veličine, žljebove, materijale i vrednosti posmaka i brzine koje ste upisali; nema identifikatore. Koristite je da premestite alate radionice na drugi računar ili ih date kolegi.

Ako pregledač ne može da čuva biblioteku (skladište je isključeno ili puno), čuvanje to kaže, a **Izvezi alate** je način da sačuvate datoteku. Datoteka mora biti biblioteka PartCraft alata ove verzije ili starije, sa najviše 500 alata ispravnih veličina; sve drugo se odbija uz razlog.

Brzine rezanja i opterećenja čipa koji dolaze uz alat su početne vrednosti; pogledajte [Pravljenje putanja alata i G-kod](topic:manufacture).
