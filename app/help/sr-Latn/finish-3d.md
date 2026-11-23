---
title: Završna 3D obrada: paralelno i lučenje
summary: Završno obradite celu zakrivljenu površinu modela kuglastom, zaobljenom ili ravnom glodalicom, paralelnim linijama pod bilo kojim uglom ili u prolazima na zadatom razmaku, tako da grebeni između njih zadrže visinu koju tražite. Šta putanje garantuju, a šta ne.
keywords: 3D završna obrada, završna obrada, paralelno, raster, lučenje, konstantno lučenje, greben, kuglasta glava, zaobljena glava, površina, tolerancija, korak prelaza, nagib, ostavljeni višak, spuštajuće glodalo, zadiranje
from: 942d2341
---

Dve operacije u Proizvodnji seku **celu površinu modela** dok je alat održavan uspravno (tri ose). Ne traže nikakav izbor: rade na svemu delu modela koji se može videti odozgo. Najpre gruba obrada dela (prilagodljivo ili džep); završni prolaz preko neobrađenog sirovca upozorava da bi sekao duboko.

## Paralelno

Prave linije preko modela pod **uglom** koji podesite, na **koraku prelaza** (deo prečnika alata). Svaka linija prati površinu: vrh alata je onoliko visoko koliko mora biti da nijedan deo glodala ne ide ispod modela, a linija se seče finije tamo gde se površina savija. Kada je uključen **Cik-cak**, alat ostaje spušten između linija gde to može bezbedno (proverava se duž kretanja); inače se podiže.

- **Tolerancija**: koliko ravan deo linije može biti udaljen od stvarne visine vrha alata (polovina se koristi kao granica u sredini svakog dela). Podrazumevano 0.01 mm.
- **Samo tamo gde je površina najmanje … a najviše … (°)**: obrađuju se samo blaga ili samo strma područja. Gde je površina van opsega, linija se izostavlja i alat se podiže.
- **Ostavljeni višak**: model pomeren za to rastojanje (glodalo uvećano za njega: tačno za kuglaste i zaobljene alate; ravan alat ostavlja najmanje toliko).
- **Dno**: ništa se ne seče ispod ove z-visine.

## Lučenje

Prolazi koji na površini održavaju stalno rastojanje jedan od drugog, tako da greben (lučenje) ostao između dva susedna prolaza ima **visinu** koju tražite. Rastojanje sledi iz visine i poluprečnika kuglice: s = 2·√(2·R·h − h²), na primer oko 0.69 mm između prolaza za kuglicu Ø6 i greben od 0.02 mm. Zaobljeni alat koristi poluprečnik svog ugla. Ravna glodalica se odbija: nema greben čiju veličinu može da odredi.

Prolazi počinju **od ivice modela, ulazeći unutra**, ili **od njegovog vrha, spuštajući se**. Oni su konture rastojanja preko površine (a ne visine), pa su na nagibu blizu u tlocrtu, a na ravnom široko razmaknuti. Rastojanje se meri na mreži preko površine i tačno je do oko 1 %; visina grebena je tačna gde je površina ravna ili blago zakrivljena, a približna gde se brzo savija. **U istom smeru** održava višu stranu površine na desnoj strani glodala.

## Koliko su putanje dobre

Šta testovi proveravaju, zatvorenim formulama ili nezavisnim potpunim pretraživanjem otiska glodala:

- Visina vrha ispod alata je tačna za kuglasti, zaobljeni i ravni alat na površima, ivicama i uglovima mreže i nikad nije iznad stvarne visine; za paralelne linije putanja ostaje unutar tolerancije, bez zadiranja dubljeg od nje.
- Dužine putanja na nagnutoj ravni slažu se sa zatvorenom formulom; prolazi lučenja na ravni su na traženom rastojanju, a greben između njih ispada na traženoj visini.
- Simulacija sirovca posle prolaza ne pokazuje zadiranje i prikazuje grebene koji ostaju.

Šta ove putanje nisu: to su osnovni završni prolazi, a ne sve što pruža proizvodni sistem.

- Nije napravljeno: završna obrada konstantne z-visine (waterline), čišćenje olovkom i uglova, radijalni i spiralni prolazi, projektovanje krive na površinu, otkrivanje ravnih područja, provera sudara držača i drške. Grubo obrađivanje i obrada ostatka su zasebne operacije ([3D grubo obrađivanje i obrada ostatka](topic:rough-3d)); alat koji se naginje je [5-osna završna obrada](topic:multi-axis#5-axis-finishing).
- Centar alata ostaje iznad modela: putanje staju na ivici modela umesto da izlaze preko nje, pa se uspravni zid tačno na ivici ne završava do svog podnožja.
- Podsečenja se ne vide (površina je ono što alat dodiruje odozgo).
- Model je mreža iz jezgra, pa putanje prate mrežu (njena tetivna tolerancija je oko 0.0002 dijagonale dela), a ne tačnu površinu.
- Završna obrada velikog modela finom tolerancijom pravi dugačak program s mnogo kratkih kretanja. Proverite izlaz u simulatoru vaše mašine pre sečenja.
