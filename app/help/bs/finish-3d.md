---
title: 3D završna obrada: paralelno i scallop
summary: Završi zakrivljenu površinu cijelog modela kuglastim, polukružnim ili ravnim glodalom, paralelnim linijama pod bilo kojim uglom ili u prolazima na zadanoj međusobnoj udaljenosti, tako da grebeni između njih zadrže visinu koju tražite. Šta putanje garantuju, a šta ne.
keywords: 3d završna obrada, završna obrada, paralelno, raster, scallop, konstantan scallop, greben, kuglasto glodalo, polukružno glodalo, površina, tolerancija, korak, nagib, materijal za ostavljanje, drop cutter, urezivanje
from: 942d2341
---

Dvije operacije u Izradi režu **površinu cijelog modela** s alatom koji ostaje vertikalan (tri ose). Ne traže odabir: rade na cijelom modelu koji se vidi odozgo. Prvo grubo obradite dio (adaptivno ili džep); završni prolaz preko neobrađenog materijala upozorava da bi rezao duboko.

## Paralelno

Ravne linije preko modela pod **uglom** koji postavite, na **koraku** (dio prečnika alata). Svaka linija prati površinu: vrh alata je onoliko visoko koliko mora biti da nijedan dio glodala ne ide ispod modela, a linija se reže finije gdje se površina savija. Uz uključeno **Zig-zag**, alat ostaje spušten između linija gdje to može sigurno (provjereno duž kretanja); inače se podiže.

- **Tolerancija**: koliko ravan dio linije smije odstupati od tačne visine vrha (polovina se koristi kao granica u sredini svakog dijela). Zadano 0,01 mm.
- **Samo gdje je površina najmanje … a najviše … (°)**: završi samo blage ili samo strme površine. Gdje je površina van opsega, linija se izostavlja i alat se podiže.
- **Materijal za ostavljanje**: model pomaknut za tu udaljenost (glodalo uvećano za nju: tačno za kuglasto i polukružno alat; ravan alat ostavlja najmanje toliko).
- **Dno**: ništa se ne reže ispod ove z vrijednosti.

## Scallop

Prolazi koji zadržavaju konstantnu udaljenost po površini jedan od drugog, tako da greben (scallop) između dva susjedna prolaza ima **visinu** koju tražite. Udaljenost slijedi iz visine i poluprečnika kuglice: s = 2·√(2·R·h − h²), npr. oko 0,69 mm između prolaza za kuglu Ø6 i greben od 0,02 mm. Polukružni alat koristi poluprečnik svog zaobljenog vrha. Ravno glodalo se odbija: nema grebena koji bi se mogao dimenzionisati.

Prolazi počinju **od ivice modela, idući unutra**, ili **s vrha modela, idući dolje**. Oni su konture udaljenosti po površini (ne visine), pa su na nagibu blizu u tlocrtu, a na ravnom široko razmaknuti. Udaljenost se mjeri na mreži preko površine i tačna je do oko 1 %; visina grebena je tačna gdje je površina ravna ili blago zakrivljena, a približna gdje se brzo savija. **Glodanje u smjeru** drži višu stranu površine s desne strane glodala.

## Koliko su putanje dobre

Šta testovi provjeravaju, zatvorenim formulama ili nezavisnom pretragom otiska glodala:

- Visina vrha ispod alata je tačna za kuglasti, polukružni i ravni alat na površinama, ivicama i uglovima mreže, i nikad nije iznad stvarne visine; za paralelne linije putanja ostaje unutar tolerancije od nje, bez urezivanja dubljeg od toga.
- Dužine putanja na nagnutoj ravni slažu se sa zatvorenom formulom; prolazi scallop na ravni su na traženoj udaljenosti, a greben između njih ispada na traženoj visini.
- Simulacija sirovca nakon prolaza ne pokazuje urezivanje i prikazuje grebene koji ostaju.

Ove putanje nisu cijela ponuda proizvodnog sistema: to su osnovni završni prolazi.

- Nisu izgrađeni: završna obrada po konstantnoj z visini (waterline), čišćenje olovkom i uglova, radijalni i spiralni prolazi, projektovanje krive na površinu, otkrivanje ravnih područja, provjere sudara držača i vrata alata. Grubo obrađivanje i obrada preostalog materijala su zasebne operacije ([3D grubo obrađivanje i obrada preostalog materijala](topic:rough-3d)); alat koji se naginje je [5-osna završna obrada](topic:multi-axis#5-axis-finishing).
- Centar alata ostaje nad modelom: putanje staju na ivici modela umjesto da idu preko nje, pa vertikalni zid tačno na ivici nije završen do svog podnožja.
- Podrezi se ne vide (površina je ono što alat dodiruje odozgo).
- Model je mreža iz kernela, pa putanje prate mrežu (tolerancija tetive je oko 0,0002 dijagonale dijela), a ne tačnu površinu.
- Završna obrada velikog modela finom tolerancijom daje dug program s mnogo kratkih pomaka. Provjerite izlaz u simulatoru vaše mašine prije rezanja.
