---
title: Finisare 3D: paralelă și creastă constantă
summary: Finisați suprafața curbă a întregului model cu o freză cu cap sferic, cu nas rotunjit sau cu capăt plat, în linii paralele la orice unghi sau în treceri distanțate astfel încât crestele dintre ele să păstreze înălțimea cerută. Ce garantează traseele și ce nu.
keywords: finisare 3D, finisare, paralel, raster, scallop, creastă constantă, cuspă, cap sferic, nas rotunjit, suprafață, toleranță, pas, pantă, material de lăsat, drop cutter, adâncitură
from: e1587d0a
---

Două operații din Manufacture taie **întreaga suprafață a modelului**, cu scula menținută vertical (trei axe). Nu iau alegeri: lucrează pe tot modelul care se poate vedea de sus. Degroșați mai întâi piesa (adaptiv sau buzunar); o trecere de finisare peste material nefrezat avertizează că ar tăia adânc.

## Paralelă

Linii drepte peste model, la **unghiul** pe care îl setați, distanțate cu **pasul** (o fracțiune din diametrul sculei). Fiecare linie urmărește suprafața: vârful sculei este atât de sus cât trebuie, astfel încât nicio parte a frezei să nu coboare sub model, iar linia este tăiată mai fin acolo unde suprafața se curbează. Cu **Zig-zag** pornit, scula rămâne coborâtă între linii acolo unde poate face asta în siguranță (verificat de-a lungul mișcării); altfel se ridică.

- **Toleranță**: cât de departe poate fi o porțiune dreaptă a unei linii de înălțimea reală a vârfului (jumătate din ea se folosește ca limită la mijlocul fiecărei porțiuni). Implicit 0.01 mm.
- **Doar unde suprafața are cel puțin … și cel mult … (°)**: finisați doar zonele line sau doar cele abrupte. Acolo unde suprafața este în afara intervalului, linia este omisă și scula se ridică.
- **Material de lăsat**: modelul decalat cu această distanță (freza mărită cu ea: exact pentru sculele cu cap sferic și cu nas rotunjit; o sculă plată lasă cel puțin atât).
- **Fund**: nimic nu este tăiat sub această z.

## Creastă constantă (scallop)

Treceri care păstrează o distanță constantă pe suprafață între ele, astfel încât creasta (scallop-ul) rămasă între două treceri vecine are **înălțimea** cerută. Distanța rezultă din înălțime și din raza sferei: s = 2·√(2·R·h − h²), de exemplu aproximativ 0.69 mm între treceri pentru o sferă Ø6 și o creastă de 0.02 mm. O sculă cu nas rotunjit folosește raza colțului ei. O freză cu capăt plat este refuzată: nu are o creastă de dimensionat.

Trecerile încep **de la marginea modelului, mergând spre interior**, sau **de la partea de sus a lui, mergând în jos**. Ele sunt contururi ale distanței pe suprafață (nu ale înălțimii), deci pe o pantă sunt apropiate în plan, iar pe o suprafață plană sunt depărtate. Distanța se măsoară pe o grilă peste suprafață și este precisă până la aproximativ 1 %; înălțimea crestei este exactă acolo unde suprafața este plană sau ușor curbată și aproximativă acolo unde se curbează repede. **Frezare în escaladare** păstrează partea mai înaltă a suprafeței în dreapta frezei.

## Cât de bune sunt traseele

Ce verifică testele, cu forme închise sau cu o căutare independentă, prin forță brută, a amprentei frezei:

- Înălțimea vârfului sub sculă este exactă pentru o sculă cu cap sferic, cu nas rotunjit și plată, pe fețele, muchiile și colțurile plasei, și nu este niciodată peste înălțimea reală; pentru linii paralele, traseul rămâne în limita toleranței, fără adâncituri mai mari decât atât.
- Lungimile traseelor pe un plan înclinat corespund formei închise; trecerile de creastă pe un plan sunt la distanța cerută, iar creasta dintre ele iese la înălțimea cerută.
- Simularea materialului nu arată nicio adâncitură după o trecere și arată crestele rămase.

Ce nu sunt aceste trasee: sunt treceri de finisare de bază, nu tot ce oferă un sistem de producție.

- Nerealizate: linia de nivel constant (waterline), curățarea cu creion și a colțurilor, treceri radiale și spirale, proiectarea unei curbe pe suprafață, detectarea zonelor plane, prelucrarea materialului rămas, verificarea coliziunii portsculei și a tijei, precum și orice înclinare a sculei.
- Centrul sculei rămâne deasupra modelului: traseele se opresc la marginea modelului în loc să iasă în afară, așa că un perete vertical chiar la margine nu este finisat până la bază.
- Contrasuprafețele (undercuts) nu sunt văzute: suprafața este ceea ce întâlnește scula de sus.
- Modelul este plasa din nucleu, deci traseele urmăresc plasa (toleranța ei de coardă este de aproximativ 0.0002 din diagonala piesei), nu suprafața exactă.
- Finisarea unui model mare la o toleranță fină produce un program lung, cu multe mișcări scurte. Verificați rezultatul în simulatorul propriu al mașinii înainte de frezare.
