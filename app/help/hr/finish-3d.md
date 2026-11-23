---
title: 3D završna obrada: paralelno i scallop
summary: Završno obradite cijelu zakrivljenu plohu modela kuglastim, zaobljenim ili ravnim glodalom, paralelnim linijama pod bilo kojim kutom ili u prolazima na zadanom razmaku, tako da grebeni između njih zadrže visinu koju zatražite. Što putanje jamče, a što ne.
keywords: 3D završna obrada, završna obrada, paralelno, raster, scallop, konstantni scallop, vrh grebena, kuglasta glava, zaobljena glava, ploha, tolerancija, razmak prolaza, nagib, ostavljeni materijal, drop cutter, zarez
from: 942d2341
---

Dvije operacije u Proizvodnji obrađuju **cijelu plohu modela** s alatom koji drži okomito (tri osi). Ne traže odabir: rade na cijelom modelu koji se vidi odozgo. Prvo grubo obradite dio (prilagodljivo ili džep); završni prolaz preko neobrađenog sirovca upozorit će da bi rezao duboko.

## Paralelno

Ravne linije preko modela pod **kutom** koji postavite, na **razmaku prolaza** (dio promjera alata). Svaka linija slijedi plohu: vrh alata je onoliko visoko koliko treba da nijedan dio glodala ne ide ispod modela, a linija se reže finije tamo gdje se ploha savija. Uz uključeno **Cik-cak**, alat ostaje spušten između linija gdje to može sigurno (provjereno duž pomaka); inače se podiže.

- **Tolerancija**: koliko ravni dio linije smije odstupati od stvarne visine vrha (polovica se koristi kao granica na sredini svakog dijela). Zadano 0.01 mm.
- **Samo tamo gdje je ploha najmanje … a najviše … (°)**: obrađuje samo položite ili samo strme površine. Gdje je ploha izvan raspona, linija se izostavlja i alat se podiže.
- **Ostavljeni materijal**: model pomaknut za tu udaljenost (alat uvećan za nju: točno za kuglaste i zaobljene alate; ravni alat ostavlja najmanje toliko).
- **Dno**: ništa se ne reže ispod ove z vrijednosti.

## Zubasto (scallop)

Prolazi koji na plohi održavaju stalnu međusobnu udaljenost, pa greben (scallop) između dva susjedna prolaza ima **visinu** koju zatražite. Udaljenost slijedi iz visine i polumjera kuglice: s = 2·√(2·R·h − h²), npr. oko 0.69 mm između prolaza za kuglicu Ø6 i greben od 0.02 mm. Zaobljeni alat koristi polumjer svog kuta. Ravno glodalo se odbija: nema greben koji bi se mogao dimenzionirati.

Prolazi počinju **od ruba modela, prema unutra**, ili **od njegova vrha, prema dolje**. To su konture udaljenosti po plohi (a ne po visini), pa su na nagibu u tlocrtu blizu, a na ravnini daleko jedna od druge. Udaljenost se mjeri na mreži preko plohe i točna je do oko 1 %; visina grebena je točna gdje je ploha ravna ili blago zakrivljena, a približna gdje se naglo savija. **Istosmjerno glodanje** (climb) drži višu stranu plohe s desne strane glodala.

## Koliko su putanje dobre

Što testovi provjeravaju, zatvorenim formulama ili neovisnim pretraživanjem grubom silom tragova glodala:

- Visina vrha ispod alata točna je za kuglasti, zaobljeni i ravni alat na plohama, bridovima i kutovima mreže te nikad nije iznad stvarne visine; kod paralelnih linija putanja ostaje unutar tolerancije, bez zareza dubljeg od nje.
- Duljine putanja na nagnutoj ravnini slažu se sa zatvorenom formulom; prolazi scallop na ravnini su na traženoj udaljenosti, a greben između njih ima traženu visinu.
- Simulacija sirovca nakon prolaza ne pokazuje zarez i prikazuje grebene koji ostaju.

Ovo nisu: to su osnovni završni prolazi, a ne cjelina onoga što nudi proizvodni sustav.

- Nije izrađeno: završna obrada konstantnom z (waterline), čišćenje olovkom i kutova, radijalni i spiralni prolazi, projiciranje krivulje na plohu, otkrivanje ravnih površina, provjere sudara držača i prihvata. Grubo obrađivanje i dorada ostataka su zasebne operacije ([3D grubo obrađivanje i dorada ostataka](topic:rough-3d)); alat koji se naginje je [5-osna završna obrada](topic:multi-axis#5-axis-finishing).
- Središte alata ostaje iznad modela: putanje staju na rubu modela umjesto da idu preko njega, pa okomita stijenka točno na rubu nije obrađena do svog podnožja.
- Podrezi se ne vide (vidi se ploha koju alat susreće odozgo).
- Model je mreža iz jezgre, pa putanje slijede mrežu (njezina tetivna tolerancija iznosi oko 0.0002 dijagonale dijela), a ne točnu plohu.
- Završna obrada velikog modela finom tolerancijom daje dug program s mnogo kratkih pomaka. Provjerite izlaz u simulatoru vašeg stroja prije rezanja.
