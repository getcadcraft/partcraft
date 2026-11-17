---
title: 3D završna obrada: paralelno i valovitost
summary: Završno obradite cijelu zakrivljenu površinu modela kuglastom, polukružnom ili ravnom glodalicom, paralelnim linijama pod bilo kojim kutom ili prolazima na zadanoj udaljenosti tako da grebeni između njih zadrže visinu koju tražite. Što putanje jamče, a što ne.
keywords: 3d završna obrada, završna obrada, paralelno, raster, valovitost, konstantna valovitost, greben, kuglasta glodalica, polukružna glodalica, površina, tolerancija, korak, nagib, materijal za ostavljanje, spuštanje alata, oštećenje
from: e1587d0a
---

Dvije operacije u Manufactureu režu **cijelu površinu modela** s alatom držanim okomito (tri osi). Ne traže odabire: rade na cijelom modelu koji se vidi odozgo. Prvo grubo obradite dio (adaptivno ili džepom); završni prolaz preko nesečenog materijala upozorit će da bi rezao duboko.

## Paralelno

Ravne linije preko modela pod **kutom** koji postavite, s **korakom** između njih (dio promjera alata). Svaka linija prati površinu: vrh alata je onoliko visoko koliko mora biti da nijedan dio glodala ne ode ispod modela, a linija se reže finije gdje se površina savija. S uključenim **Cik-cak**, alat ostaje spušten između linija gdje to može sigurno (provjereno duž kretanja); inače se diže.

- **Tolerancija**: koliko ravni komad linije smije odstupati od prave visine vrha (polovica se koristi kao granica u sredini svakog komada). Zadano 0.01 mm.
- **Samo gdje je površina najmanje … i najviše … (°)**: završno obrađuje samo plitka ili samo strma područja. Gdje je površina izvan raspona, linija se izostavlja i alat se diže.
- **Materijal za ostavljanje**: model pomaknut za tu udaljenost (glodalo povećano za nju: točno za kuglaste i polukružne alate; ravni alat ostavlja barem toliko).
- **Dno**: ništa se ne reže ispod ove z.

## Valovitost

Prolazi koji čuvaju konstantnu udaljenost po površini jedan od drugog, pa greben (valovitost) ostavljen između dvaju susjednih prolaza ima **visinu** koju tražite. Udaljenost slijedi iz visine i polumjera kugle: s = 2·√(2·R·h − h²), npr. oko 0.69 mm između prolaza za kuglu Ø6 i greben od 0.02 mm. Polukružni alat koristi polumjer svog vrha. Ravna glodalica se odbija: nema grebena za dimenzioniranje.

Prolazi počinju **od ruba modela, idući unutra**, ili **od njegova vrha, idući dolje**. Oni su konture udaljenosti po površini (ne visine), pa su na nagibu blizu u tlocrtu, a na ravnini daleko jedan od drugog. Udaljenost se mjeri na mreži preko površine i točna je unutar oko 1 %; visina grebena je točna gdje je površina ravna ili blago zakrivljena, a približna gdje se brzo savija. **Glodanje u istom smjeru** (Climb) drži višu stranu površine s desne strane glodala.

## Koliko su putanje dobre

Što testovi provjeravaju, zatvorenim formulama ili neovisnom pretragom otiska glodala:

- Visina vrha pod alatom je točna za kuglu, polukružni i ravni alat na plohama, bridovima i kutovima mreže, i nikad nije iznad prave visine; za paralelne linije putanja ostaje unutar tolerancije od nje, bez oštećenja dubljeg od nje.
- Duljine putanja na nagnutoj ravnini slažu se sa zatvorenom formulom; prolazi valovitosti na ravnini udaljeni su koliko je traženo, a greben među njima ispadne na traženoj visini.
- Simulacija materijala ne pokazuje oštećenje nakon prolaza i pokazuje grebene koji ostaju.

Što te putanje nisu: to su osnovni završni prolazi, a ne cijela mogućnost proizvodnog sustava.

- Nije izrađeno: vodilica (konstantni z), čišćenje olovkom i kutova, radijalni i spiralni prolazi, projiciranje krivulje na površinu, detekcija ravnih područja, obrada ostatka, provjere sudara držača i drške, te bilo kakvo naginjanje alata.
- Središte alata ostaje nad modelom: putanje staju na rubu modela umjesto da idu preko njega, pa okomita stijenka točno na rubu nije završno obrađena do svog podnožja.
- Podrezi se ne vide (površina je ono što alat dodiruje odozgo).
- Model je mrežni iz jezgre, pa putanje prate mrežu (njezina tetivna tolerancija je oko 0.0002 dijagonale dijela), a ne egzaktnu površinu.
- Završna obrada velikog modela pri finoj toleranciji daje dugačak program s mnogo kratkih pomaka. Provjerite izlaz u simulatoru vašeg stroja prije rezanja.
