---
title: Finisare 3D: paralel și scallop
summary: Finisați toată suprafața curbă a modelului cu o freză cu capăt sferic, cu colț rotunjit sau plată, pe linii paralele la orice unghi sau în treceri la o distanță stabilită, astfel încât crestele dintre ele să păstreze înălțimea cerută. Ce garantează traseele și ce nu garantează.
keywords: finisare 3D, finisare, paralel, raster, scallop, scallop constant, creastă, capăt sferic, colț rotunjit, suprafață, toleranță, pas lateral, pantă, adaos de lăsat, drop cutter, prelucrare excesivă
from: 942d2341
---

Două operații din Fabricație taie **toată suprafața modelului** cu scula menținută vertical (trei axe). Nu cer selectări: lucrează pe tot ce din model poate fi văzut de sus. Degroșați mai întâi piesa (adaptiv sau buzunar); o trecere de finisare peste adaos neprelucrat avertizează că ar tăia adânc.

## Paralel

Linii drepte peste model, la **unghiul** setat, la distanța de **pas lateral** (o fracțiune din diametrul sculei). Fiecare linie urmărește suprafața: vârful sculei este la înălțimea necesară astfel încât nicio parte a frezei să nu coboare sub model, iar linia este tăiată mai fin oriunde suprafața se curbează. Cu **Zig-zag** activat, scula rămâne coborâtă între linii acolo unde poate face asta în siguranță (verificat de-a lungul deplasării); altfel se ridică.

- **Toleranță**: cât de departe poate fi o porțiune dreaptă a unei linii de înălțimea reală a vârfului (jumătate din ea este folosită ca limită la mijlocul fiecărei porțiuni). Implicit 0.01 mm.
- **Doar unde suprafața este cel puțin … și cel mult … (°)**: finisați doar zonele mai plane sau doar pe cele mai abrupte. Acolo unde suprafața este în afara intervalului, linia se omite și scula se ridică.
- **Adaos de lăsat**: modelul decalat cu această distanță (freza mărită cu ea: exact pentru sculele cu capăt sferic și cu colț rotunjit; o sculă plată lasă cel puțin atât).
- **Fund**: nimic nu se taie sub această cotă z.

## Scallop

Treceri care păstrează între ele o distanță constantă pe suprafață, astfel încât creasta (scallop-ul) rămasă între două treceri vecine să aibă **înălțimea** cerută. Distanța rezultă din înălțime și din raza bilei: s = 2·√(2·R·h − h²), de exemplu circa 0.69 mm între treceri pentru o bilă Ø6 și o creastă de 0.02 mm. O sculă cu colț rotunjit folosește raza colțului. O freză plată este refuzată: nu are creastă de dimensionat.

Treceri pornesc **de la marginea modelului, spre interior** sau **de la partea de sus a modelului, în jos**. Sunt contururi ale distanței pe suprafață (nu ale înălțimii), deci pe o pantă sunt apropiate în plan, iar pe o zonă plană sunt depărtate. Distanța se măsoară pe o rețea peste suprafață și are precizie de circa 1 %; înălțimea crestei este exactă acolo unde suprafața este plană sau ușor curbată și aproximativă acolo unde se curbează repede. **Sens concordant** păstrează partea mai înaltă a suprafeței pe dreapta sculei.

## Cât de bune sunt traseele

Ce verifică testele, cu forme închise sau cu o căutare independentă prin forță brută a amprentei frezei:

- Înălțimea vârfului sub sculă este exactă pentru o sculă cu capăt sferic, cu colț rotunjit și plată, pe fețe, muchii și colțuri ale plasei, și nu este niciodată mai sus decât înălțimea reală; pentru liniile paralele traseul rămâne în limita toleranței față de ea, fără nicio prelucrare excesivă mai adâncă decât atât.
- Lungimile traseelor pe un plan înclinat coincid cu forma închisă; trecerile de scallop pe un plan sunt la distanța cerută, iar creasta dintre ele iese la înălțimea cerută.
- Simularea stocului nu arată prelucrare excesivă după o trecere și arată crestele care rămân.

Ce nu sunt aceste trasee: sunt treceri de finisare de bază, nu tot ce oferă un sistem de producție.

- Încă nerealizate: finisare la nivel de apă (z constant), curățare cu creion și de colțuri, treceri radiale și în spirală, proiectarea unei curbe pe suprafață, detectarea zonelor plane, verificarea coliziunilor cu portsculul și cu coada sculei. Degroșarea și prelucrarea restului sunt operații separate ([Degroșare 3D și prelucrarea restului](topic:rough-3d)); o sculă înclinată este [finisarea pe 5 axe](topic:multi-axis#5-axis-finishing).
- Centrul sculei rămâne deasupra modelului: traseele se opresc la marginea modelului în loc să iasă în afara lui, deci un perete vertical chiar la margine nu este finisat până la bază.
- Subtăierile nu se văd (suprafața este ce întâlnește scula de sus).
- Modelul este plasa dată de nucleul de plasă, deci traseele urmează plasa (toleranța ei de coardă este de circa 0.0002 din diagonala piesei), nu suprafața exactă.
- Finisarea unui model mare cu o toleranță fină produce un program lung, cu multe deplasări scurte. Verificați rezultatul în simulatorul propriu al mașinii înainte de așchiere.
