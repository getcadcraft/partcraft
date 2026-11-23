---
title: Sondiranje: pronalaženje dijela i postavljanje pomaka
summary: Dodirnite gornju površinu, stranu, rupu ili izbočinu sondom i pustite upravljačku jedinicu da pomjeri pomak radnog koordinatnog sistema na mjesto gdje je dio zaista, ili samo mjerite. Šta svaka upravljačka jedinica može i šta nije dokazano.
keywords: sonda, sondiranje, sonda za dodir, dodirno postavljanje nule, pomak radnog koordinatnog sistema, g54, g31, g38.2, preskakanje, referenca, pronalaženje centra, provrt, izbočina, ivica, postavljanje nule, mjerenje, inspekcija, g10
from: 1f718b82
---

{{ui:Sonda}} u Izradi upisuje ciklus sondiranja u program: sonda dodiruje dio, a upravljačka jedinica pomjera pomak radnog koordinatnog sistema (G54) za razliku između mjesta gdje je površina nađena i mjesta gdje je model kaže da treba biti. Kasnije operacije tada režu tamo gdje je dio zaista.

**Ništa ovdje nije pokrenuto na mašini.** Pomaci prije dodira su obični pomaci: sonda se ne nadzire dok ne dođe do samog pomaka sondiranja. Pokrenite ga polako, prvo u zraku, s rukom na zaustavljanju posmaka.

## Upotreba

1. Na kartici **Alati**, prva operacija sondiranja dodaje **dodirnu sondu**: njen prečnik kuglice i posmak sondiranja (100 mm/min osim ako ne postavite drugačije).
2. Pritisnite {{ui:Više}} na alatnoj traci Izrade, zatim {{ui:Sonda}}, i kliknite šta dodirnuti. Svaki odabir je jedan ciklus, redom kojim klikćete:

| Odabir | Ciklus | Šta se postavlja |
|---|---|---|
| Ravna površina okrenuta prema osi alata | Jedan dodir prema dolje | Z |
| Bočna ravna površina okomita na X ili na Y | Jedan dodir prema površini, malo ispod njenog vrha | X ili Y |
| Rupa ili izbočina duž ose alata | Četiri dodira (+X, −X, +Y, −Y) | X i Y njenog centra |

3. **S rezultatom**: {{ui:Postavi pomak radnog koordinatnog sistema}} ili {{ui:Samo mjeri}}.
4. **Počni ovoliko daleko** i **Traži ovoliko daleko iza** označavaju koliko daleko od očekivane površine pomak sondiranja počinje i koliko daleko iza nje sonda smije ići prije nego što upravljačka jedinica odustane. **Dubina** je koliko ispod vrha rupe, izbočine ili bočne površine kuglica ide.

Stavite operaciju sondiranja prvu, prije nego što išta reže.

## Šta svaka upravljačka jedinica zapisuje

| Upravljačka jedinica | Dodir | Rezultat |
|---|---|---|
| Fanuc u stilu | `G31`, položaj zadržan u `#101` do `#104` | Varijable pomaka (`#5221` do `#5223`) se pomjeraju za nađeno − očekivano. Samo mjeri: razlika ostaje u `#110` (i `#111`). |
| LinuxCNC | `G38.2`, položaj zadržan u imenovanim parametrima | `G10 L2 P1` s novim pomakom. Samo mjeri: poruka `(DEBUG, …)`. |
| GRBL | `G38.2` | Jedan dodir postavlja osu s `G10 L20 P1`. GRBL nema varijable, pa **ne može izračunati centar**: datoteka to kaže u komentaru i ništa ne postavlja. |

Aritmetika je postprocesorova, pa je možete mijenjati: događaji su `probe-move` i `probe-set` ([Postprocesori koje možete uređivati](topic:post-processors)).

## Ograničenja

- Jedan pomak radnog koordinatnog sistema (G54). Samo površine okomite na ose: bez ugla, bez ciklusa ugla, bez rotacije radnog komada.
- Nema postavljača alata, nema provjere slomljenog alata, nema mjerenja veličine naspram tolerancije, nema izvještaja.
- Vreteno se ne pokreće za sondu, a rashladno sredstvo ostaje isključeno; ništa ne provjerava da je alat u vretenu zaista sonda.
- Simulacija sirovca ne izvodi putanju sondiranja.
- Vlastitu kalibraciju sonde (pomak kuglice, savijanje ticala, smjer okidanja) vrši upravljačka jedinica.
