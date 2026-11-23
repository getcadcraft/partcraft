---
title: Sondiranje: pronađite dio i postavite radni pomak
summary: Dodirnite gornju plohu, stranu, rupu ili izbočinu sondom i pustite upravljač da pomakne radni pomak na mjesto gdje se dio zapravo nalazi, ili samo izmjerite. Što svaki upravljač može i što nije dokazano.
keywords: sonda, sondiranje, dodirna sonda, dodirivanje, radni pomak, g54, g31, g38.2, preskakanje, referentna točka, pronalaženje središta, provrt, izbočina, rub, postavi nulu, mjerenje, inspekcija, g10
from: 1f718b82
---

{{ui:Ticanje}} u Proizvodnji zapisuje ciklus sondiranja u program: sonda dodiruje dio, a upravljač pomiče radni pomak (G54) za razliku između mjesta gdje je ploha pronađena i mjesta gdje je model kaže da je. Kasnije operacije tada režu tamo gdje se dio zapravo nalazi.

**Ništa ovdje nije pokrenuto na stroju.** Pomaci prije dodira obični su pomaci: sonda se ne prati sve do samog pomaka sondiranja. Pokrenite ga polako, prvo u zraku, s rukom na zaustavljanju posmaka.

## Korištenje

1. Na kartici **Alati** prva operacija sondiranja dodaje **dodirnu sondu**: promjer kuglice i posmak sondiranja (100 mm/min osim ako ga ne postavite).
2. Pritisnite {{ui:Više}} na alatnoj traci Proizvodnje, zatim {{ui:Ticanje}} i kliknite što dodirnuti. Svaki odabir je jedan ciklus, redom kojim kliknete:

| Odabir | Ciklus | Što se postavlja |
|---|---|---|
| Ravna ploha okrenuta prema osi alata | Jedan dodir pri spuštanju | Z |
| Ravna bočna ploha okomita na X ili Y | Jedan dodir prema plohi, malo ispod njezina vrha | X ili Y |
| Rupa ili izbočina duž osi alata | Četiri dodira (+X, −X, +Y, −Y) | X i Y njezina središta |

3. **S rezultatom**: {{ui:Postavi pomak radnog koordinatnog sustava}} ili {{ui:Samo izmjeri}}.
4. **Počni ovoliko daleko** i **Traži ovoliko dalje** su koliko daleko od očekivane plohe pomak sondiranja počinje i koliko dalje iza nje sonda smije ići prije nego što upravljač odustane. **Dubina** je koliko daleko ispod vrha rupe, izbočine ili bočne plohe kuglica ide.

Stavite operaciju sondiranja prvu, prije svega što reže.

## Što svaki upravljač zapisuje

| Upravljač | Dodir | Rezultat |
|---|---|---|
| Fanuc-style | `G31`, položaj zadržan u `#101` do `#104` | Varijable pomaka (`#5221` do `#5223`) pomiču se za pronađeno − očekivano. Samo mjerenje: razlika ostaje u `#110` (i `#111`). |
| LinuxCNC | `G38.2`, položaj zadržan u imenovanim parametrima | `G10 L2 P1` s novim pomakom. Samo mjerenje: poruka `(DEBUG, …)`. |
| GRBL | `G38.2` | Jedan dodir postavlja os s `G10 L20 P1`. GRBL nema varijable, pa **ne može izračunati središte**: datoteka to kaže u komentaru i ništa ne postavlja. |

Računanje je u postprocesoru, pa ga možete promijeniti: događaji su `probe-move` i `probe-set` ([Postprocesori koje možete uređivati](topic:post-processors)).

## Ograničenja

- Jedan radni pomak (G54). Samo plohe okomite na osi: bez kuta, bez ciklusa kuta, bez rotacije obratka.
- Nema mjerača alata, nema provjere slomljenog alata, nema mjerenja veličine naspram tolerancije, nema izvještaja.
- Vreteno se ne pokreće za sondu, a rashladno sredstvo ostaje isključeno; ništa ne provjerava je li alat u vretenu zaista sonda.
- Simulacija sirovca ne izvodi putanju sondiranja.
- Vlastitu kalibraciju sonde (pomak kuglice, otklon ticala, smjer okidanja) vodi upravljač.
