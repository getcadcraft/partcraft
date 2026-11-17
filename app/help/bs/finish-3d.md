---
title: 3D završna obrada: paralelno i ljuskavo
summary: Završi cijelu zakrivljenu površinu modela kuglastom, polukružnom ili ravnom glodalicom, paralelnim linijama pod bilo kojim uglom ili prolazima na zadanoj udaljenosti, tako da grebeni među njima zadrže visinu koju tražiš. Šta putanje garantuju, a šta ne.
keywords: 3d završna obrada, završna obrada, paralelno, raster, ljuskavo, konstantno ljuskavo, greben, kuglasta glava, polukružna glava, površina, tolerancija, korak, nagib, materijal za ostavljanje, drop cutter, zarez
from: e1587d0a
---

Dvije operacije u Manufacture seku **cijelu površinu modela** s alatom držanim okomito (tri ose). Ne traže odabir: rade na svemu što se vidi odozgo. Prvo grubo obradi dio (adaptivno ili džepom); završni prolaz preko neizrezanog materijala upozorava da bi rezao duboko.

## Paralelno

Ravne linije preko modela pod **uglom** koji postaviš, na razmaku **korak** (dio prečnika alata). Svaka linija prati površinu: vrh alata je onoliko visoko koliko mora biti da nijedan dio glodala ne ode ispod modela, a linija se reže finije gdje se površina savija. S uključenim **Zig-zag**, alat ostaje spušten između linija gdje to može sigurno (provjereno duž kretanja); inače se podiže.

- **Tolerancija**: koliko ravan dio linije smije biti od prave visine vrha (polovina se koristi kao granica na sredini svakog dijela). Podrazumijevano 0.01 mm.
- **Samo gdje je površina najmanje … i najviše … (°)**: završi samo plitka ili samo strma područja. Gdje je površina van opsega, linija se izostavlja, a alat se podiže.
- **Materijal za ostavljanje**: model pomjeren za tu udaljenost (glodalo uvećano za nju: tačno za kuglaste i polukružne alate; ravan alat ostavlja najmanje toliko).
- **Dno**: ništa se ne reže ispod ove z vrijednosti.

## Ljuskavo

Prolazi koji čuvaju stalnu udaljenost preko površine jedan od drugog, pa greben (ljuska) ostavljen između dva susjedna prolaza ima **visinu** koju tražiš. Udaljenost slijedi iz visine i poluprečnika kuglice: s = 2·√(2·R·h − h²), na primjer oko 0.69 mm između prolaza za kuglicu Ø6 i greben od 0.02 mm. Polukružni alat koristi poluprečnik svog ugla. Ravna glodalica se odbija: nema grebena čiju veličinu može odrediti.

Prolazi počinju **od ivice modela, idući unutra**, ili **od njegovog vrha, idući dolje**. To su konture udaljenosti preko površine (ne visine), pa su na nagibu blizu u tlocrtu, a na ravnom široko razmaknute. Udaljenost se mjeri na mreži preko površine i tačna je oko 1 %; visina grebena je tačna gdje je površina ravna ili blago zakrivljena, a približna gdje se brzo zakrivljuje. **Penjanje** drži višu stranu površine s desne strane glodala.

## Koliko su putanje dobre

Šta testovi provjeravaju, zatvorenim formulama ili nezavisnom pretragom grubom silom otiska glodala:

- Visina vrha ispod alata je tačna za kuglasti, polukružni i ravni alat na površinama, ivicama i uglovima mreže, i nikad nije iznad prave visine; za paralelne linije putanja ostaje unutar tolerancije od nje, bez zareza dubljeg od toga.
- Dužine putanja na nagnutoj ravni se slažu sa zatvorenom formulom; prolazi ljuskavo na ravni su traženo međusobno rastojanje, a greben između njih ispada na traženoj visini.
- Simulacija materijala pokazuje da nema zareza poslije prolaza i pokazuje grebene koji ostaju.

Šta ove putanje nisu: osnovni su završni prolazi, a ne cjelina onoga što nudi proizvodni sistem.

- Nije izrađeno: vodena linija (stalna z), čišćenje olovkom i uglova, radijalni i spiralni prolazi, projektovanje krive na površinu, otkrivanje ravnih površina, obrada preostalog materijala, provjera sudara držača i drške, i bilo kakvo naginjanje alata.
- Središte alata ostaje nad modelom: putanje staju na ivici modela umjesto da idu dalje, pa se vertikalni zid tačno na ivici ne završava do svoje podnožja.
- Podrezi se ne vide (vidi se površina koju alat dodiruje odozgo).
- Model je mreža iz kernela, pa putanje prate mrežu (njena tetivna tolerancija je oko 0.0002 dijagonale dijela), a ne tačnu površinu.
- Završna obrada velikog modela pri finoj toleranciji pravi dug program s mnogo kratkih kretanja. Provjeri izlaz u simulatoru svoje mašine prije rezanja.
