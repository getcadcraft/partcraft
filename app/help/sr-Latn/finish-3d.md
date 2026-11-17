---
title: 3D završna obrada: paralelno i ljuskasto
summary: Završi celu zakrivljenu površ modela kuglastim, polukružnim ili ravnim glodalom, paralelnim linijama pod bilo kojim uglom ili prolazima na zadatom rastojanju, tako da grebeni među njima zadrže visinu koju tražiš. Šta putanje garantuju, a šta ne.
keywords: 3d završna obrada, završna obrada, paralelno, rastersko, ljuskasto, konstantno ljuskasto, greben, kuglasto glodalo, polukružno glodalo, površ, tolerancija, korak, nagib, materijal za ostavljanje, spuštajući rezač, urez
from: e1587d0a
---

Dve operacije u Manufacture seku **celu površ modela** dok je alat držan vertikalno (tri ose). Nemaju izbor: rade na svemu što se vidi odozgo. Prvo grubo obradi deo (adaptivno ili džepom); završni prolaz preko neobrađenog materijala upozorava da bi sekao duboko.

## Paralelno

Prave linije preko modela pod **uglom** koji podesiš, na razmaku **korak** (deo prečnika alata). Svaka linija prati površ: vrh alata je onoliko visoko koliko mora da bude da nijedan deo rezača ne ide ispod modela, a linija se seče finije gde se površ savija. Uz uključeno **Cik-cak**, alat ostaje spušten između linija gde to može bezbedno (proverava se duž kretanja); inače se diže.

- **Tolerancija**: koliko ravan deo linije može da odstupa od prave visine vrha (polovina se koristi kao granica u sredini svakog dela). Podrazumevano 0,01 mm.
- **Samo gde je površ najmanje … a najviše … (°)**: završi samo blage ili samo strme oblasti. Gde je površ van opsega, linija se izostavlja i alat se diže.
- **Materijal za ostavljanje**: model pomeren za tu udaljenost (rezač uvećan za nju: tačno za kuglaste i polukružne alate; ravan alat ostavlja najmanje toliko).
- **Dno**: ništa se ne seče ispod ove z.

## Ljuskasto

Prolazi koji održavaju stalnu udaljenost preko površi jedni od drugih, tako da greben (ljuska) ostavljen između dva susedna prolaza ima **visinu** koju tražiš. Udaljenost sledi iz visine i poluprečnika kuglice: s = 2·√(2·R·h − h²), na primer oko 0,69 mm između prolaza za kuglicu Ø6 i greben od 0,02 mm. Polukružni alat koristi poluprečnik svog ugla. Ravno glodalo se odbija: nema greben da se dimenzioniše.

Prolazi počinju **od ivice modela, ulazeći unutra**, ili **od njegovog vrha, spuštajući se**. Oni su konture rastojanja preko površi (ne visine), pa su na nagibu bliski u tlocrtu, a na ravnom široko razmaknuti. Rastojanje se meri na mreži preko površi i tačno je do oko 1 %; visina grebena je tačna gde je površ ravna ili blago zakrivljena, a približna gde se brzo savija. **Penjanje** drži višu stranu površi sa desne strane rezača.

## Koliko su putanje dobre

Šta testovi proveravaju, zatvorenim formulama ili nezavisnom grubom pretragom otiska rezača:

- Visina vrha ispod alata je tačna za kuglasti, polukružni i ravni alat na površima, ivicama i uglovima mreže, i nikad nije iznad prave visine; za paralelne linije putanja ostaje u okviru tolerancije od nje, bez ureza dubljeg od toga.
- Dužine putanja na nagnutoj ravni se slažu sa zatvorenom formulom; ljuskasti prolazi na ravni su na traženom rastojanju, a greben između njih ispada na traženoj visini.
- Simulacija materijala ne pokazuje urez posle prolaza i prikazuje grebene koji ostaju.

Šta ove putanje nisu: to su osnovni završni prolazi, a ne ceo skup onoga što nudi proizvodni sistem.

- Nije izgrađeno: vodeća linija (stalno z), čišćenje olovkom i uglova, radijalni i spiralni prolazi, projektovanje krive na površ, detekcija ravnih površina, obrada ostataka, provere sudara držača i drške, i bilo kakvo naginjanje alata.
- Centar alata ostaje iznad modela: putanje staju na ivici modela umesto da idu preko nje, pa vertikalni zid tačno na ivici nije završen do svog podnožja.
- Podrezi se ne vide (vidi se samo ono što alat dodiruje odozgo).
- Model je mreža iz jezgra, pa putanje prate mrežu (njena tolerancija tetive je oko 0,0002 dijagonale dela), a ne tačnu površ.
- Završna obrada velikog modela na finoj toleranciji pravi dug program sa mnogo kratkih pomeranja. Proveri izlaz u simulatoru svoje mašine pre rezanja.
