---
title: Sondiranje: pronađite deo i postavite radni pomak
summary: Dodirnite gornju površ, stranu, rupu ili izbočinu sondom i pustite upravljač da pomeri radni pomak tamo gde se deo zaista nalazi, ili samo izmerite. Šta svaki upravljač može da uradi i šta nije dokazano.
keywords: sonda, sondiranje, dodirna sonda, dodirno postavljanje, radni pomak, g54, g31, g38.2, preskakanje, referenca, pronalaženje centra, rupa, izbočina, ivica, postavi nulu, merenje, kontrola, g10
from: 1f718b82
---

{{ui:Sonda}} u Proizvodnji upisuje ciklus sondiranja u program: sonda dodiruje deo, a upravljač pomera radni pomak (G54) za razliku između mesta gde je površ nađena i mesta gde je model kaže da je. Sledeće operacije tada seku tamo gde se deo zaista nalazi.

**Ništa ovde nije pušteno na mašini.** Kretanja pre dodira su obična kretanja: sonda se ne prati do samog kretanja sondiranja. Pustite ga polako, prvo u vazduhu, sa rukom na zaustavljanju posmaka.

## Upotreba

1. Na kartici **Alati** prva operacija sondiranja dodaje **dodirnu sondu**: njen prečnik kuglice i posmak sondiranja (100 mm/min osim ako ga ne podesite).
2. Pritisnite {{ui:Više}} na traci Proizvodnje, pa {{ui:Sonda}}, i kliknite šta da dodirnete. Svaki izbor je jedan ciklus, redom kojim klikćete:

| Izbor | Ciklus | Šta se postavlja |
|---|---|---|
| Ravna površ koja gleda uz osu alata | Jedan dodir nadole | Z |
| Ravna bočna površ normalna na X ili na Y | Jedan dodir ka površi, malo ispod njene vrha | X ili Y |
| Rupa ili izbočina duž ose alata | Četiri dodira (+X, −X, +Y, −Y) | X i Y njenog centra |

3. **Sa rezultatom**: {{ui:Postavi radni pomak}} ili {{ui:Samo izmeri}}.
4. **Počni ovoliko daleko** i **Pretraži ovoliko dalje iza**: koliko daleko od očekivane površi kretanje sondiranja počinje i koliko dalje sonda sme da ide pre nego što upravljač odustane. **Dubina** je koliko ispod vrha rupe, izbočine ili bočne površi kuglica ide.

Stavite operaciju sondiranja prvu, pre nego što išta seče.

## Šta svaki upravljač piše

| Upravljač | Dodir | Rezultat |
|---|---|---|
| Fanuc-stil | `G31`, položaj zadržan u `#101` do `#104` | Promenljive pomaka (`#5221` do `#5223`) pomeraju se za nađeno − očekivano. Samo merenje: razlika ostaje u `#110` (i `#111`). |
| LinuxCNC | `G38.2`, položaj zadržan u imenovanim parametrima | `G10 L2 P1` sa novim pomakom. Samo merenje: poruka `(DEBUG, …)`. |
| GRBL | `G38.2` | Jedan dodir postavlja osu sa `G10 L20 P1`. GRBL nema promenljive, pa **ne može da izračuna centar**: datoteka to kaže u komentaru i ništa ne postavlja. |

Računanje je u postprocesoru, pa ga možete menjati: događaji su `probe-move` i `probe-set` ([Postprocesori koje možete menjati](topic:post-processors)).

## Ograničenja

- Jedan radni pomak (G54). Samo površi normalne na ose: nema ugla, nema ciklusa za ugao, nema rotacije rada.
- Nema podešavača alata, nema provere slomljenog alata, nema merenja mere naspram tolerancije, nema izveštaja.
- Vreteno se ne pokreće za sondu, a rashladna tečnost ostaje isključena; ništa ne proverava da li je alat u vretenu zaista sonda.
- Simulacija sirovca ne izvodi putanju sondiranja.
- Sopstvena kalibracija sonde (pomak kuglice, otklon ticala, pravac okidanja) pripada upravljaču.
