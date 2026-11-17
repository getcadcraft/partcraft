---
title: Biblioteca de analiză
summary: Biblioteca de scripturi de analiză lizibile din spațiul de lucru Script: ce este în fiecare grup, deschiderea unei funcții doar în citire, antetul ei cu metodă, referințe și verificare, realizarea unei copii proprii și modul în care o copie înlocuiește funcția din bibliotecă.
keywords: bibliotecă, craftlib, analiză, electromagnet, static, modal, termic, optimizarea topologiei, top88, SIMP, electromagnetism, electrostatică, magnetostatică, fluid, Boltzmann pe rețea, LBM, plasă, voxel, tetraedre, referințe, verificare, validare, copiere, umbră
from: bf993859
---

Biblioteca de analiză este un set de scripturi, fiecare o funcție pe care o puteți citi de sus în jos: cum se asamblează matricea de rigiditate, unde merg condițiile la limită, ce solver rulează, cum se calculează rezultatele. Nimic din ea nu este ascuns într-o cutie neagră; doar buclele interioare rapide (matricile elementelor, solverele rare, generarea plasei) sunt încorporate.

## Începeți cu un exemplu

Grupul **Exemple** conține cinci scripturi scurte care folosesc biblioteca de la cap la coadă. Faceți clic pe unul, apăsați {{ui:Deschidere (doar citire)}}, apoi {{key:F5}}: fiecare golește vizualizarea, arată un rezultat în vizualizare și un grafic în subafișaje.

| Exemplu | Ce arată |
|---|---|
| Cantilever stress | Tensiunea în consolă: o bară de oțel de 100 × 10 × 10 mm sub o sarcină de 100 N în vârf: tensiunea von Mises pe bara deformată și deplasarea vârfului față de teoria grinzilor, la patru dimensiuni ale elementului (reprezentată grafic) |
| MBB beam topology | Topologia grinzii MBB: optimizarea clasică a topologiei 60 × 20: formarea proiectului, scăderea complianței, configurația finală (94 de iterații, complianță 203.19) |
| Capacitor field | Două plăci late de 4 mm, la 1 mm distanță: potențialul și câmpul, capacitatea cu efect de margine comparată cu valoarea ideală și formula lui Palmer |
| Channel flow | Curgere în canal: curgere Boltzmann pe rețea în jurul unui stâlp dintr-un canal: câmpul de viteză și istoricul convergenței |
| Electromagnet | Electromagnet: miez de fier în formă de C cu un întrefier de aer și o bobină: densitatea fluxului, câmpul din întrefier comparat cu formula circuitului magnetic, inductanța și forța de atracție peste întrefier. Parcursă în [Câmpuri magnetice în 2-D](topic:magnetic-fields-2d) |
| Permanent magnet | Magnet permanent: același miez, cu un magnet permanent în locul bobinei: punctul de lucru al magnetului, câmpul din întrefier comparat cu circuitul magnetic, cât flux se scurge, forța. În [Câmpuri magnetice în 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupuri

| Grup | Funcții | Ce fac |
|---|---|---|
| Meshing | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Cutii și cilindri ca hexaedre, cuburi sau tetraedre; cuburi sau tetraedre pentru orice model (piesa, un corp, un STL încărcat); volumele elementelor și calitatea lor; alegerea nodurilor pe un plan sau pe o față |
| Static stress | `static_voxel`, `static_tet` | Tensiune statică liniară pe cuburi sau pe tetraedre cu 10 noduri: deplasări, tensiuni, von Mises, reacțiuni |
| Frames | `frame3d` | Cadre 3D din grinzi, stâlpi și contravântuiri, prin metoda rigidității directe: eliberări la capete, reazeme și resorturi, sarcini de-a lungul barelor; deplasări, reacțiuni, forțe la capetele barelor. {{ui:Exportare ca CraftScript}} din DetailCraft și BimCraft scrie un model întreg pentru aceasta. Un instrument de analiză, nu o verificare de cod |
| Vibration | `modal_tet` | Frecvențe proprii și forme modale |
| Heat | `heat_steady`, `heat_transient`, `heat_system` | Conducție staționară și tranzitorie, cu temperaturi fixe, aport de căldură, generare, flux și convecție |
| Topology optimization | `top88`, `top99`, `topopt3d` | Codurile 2-D publicate de 88 și 99 de linii și aceeași metodă în 3-D, pe cuburi |
| Electromagnetics | `poisson2d`, `magnetostatic2d` | Electrostatică 2-D (potențial, câmp, capacitate, sarcină) și magnetostatică (potențial vector, densitate de flux, magneți permanenți) |
| Fluid flow | `lbm2d`, `lbm3d` | Curgere Boltzmann pe rețea: 2-D scrisă integral în script, 3-D pe propriul nucleu de curgere al PartCraft |

Antetul fiecărei funcții dă argumentele exacte. Unitățile sunt cele ale studiilor PartCraft, dacă antetul nu spune altfel: milimetri, newtoni, megapascali, tone pe milimetru cub pentru densitate, wați și kelvin pentru căldură. Funcțiile electromagnetice și cele Boltzmann pe rețea lucrează în orice unități consecvente; antetele lor spun cum.

## Cum este verificată biblioteca

Antetul fiecărei funcții se încheie cu o **verificare**: un caz mic cu un răspuns cunoscut. Testele PartCraft le rulează pe toate, iar acolo unde PartCraft are propriul studiu pentru aceeași sarcină, răspunsul scriptului este comparat cu acel studiu pe aceeași plasă:

- deplasarea vârfului consolei față de teoria grinzilor (în limita a 0.2 % cu cuburi, 0.05 % cu tetraedre) și față de solverele spațiului de lucru **Simulare**, pe aceeași plasă (identice pe multe cifre);
- prima frecvență a consolei față de teoria grinzilor (cu 0.24 % mai mică, cum este de așteptat pentru o grindă scurtă) și față de solverul modal din **Simulare**;
- căldură: un perete plan încălzit, exact; un corp mic care se răcește cum spune formula capacității concentrate; temperatura unei plăci care se stinge cum spune teoria;
- optimizarea topologiei: `top88` reproduce cele 94 de iterații și complianța 203.1925 din lucrare (și 218.8032 cu filtrul de densitate); `topopt3d` ajunge la aceeași complianță ca spațiul de lucru **Generare**, cu aceleași setări;
- capacitatea unui condensator și câmpul unui solenoid lung față de valorile din manuale; câmpul din întrefierul electromagnetului față de formula circuitului magnetic; magneții permanenți față de un magnet rotund în aer și față de un magnet închis de o armătură de fier;
- curgerea în canal față de profilul parabolic exact.

## Citirea unei funcții

1. Deschideți fila **Bibliotecă** a panoului de script.
2. Faceți clic pe o funcție. Antetul ei arată: ce calculează, metoda, unitățile, ipotezele și limitele, **referințele** (carte sau lucrare, cu numerele ecuațiilor) și o **verificare** — un caz mic cu un răspuns cunoscut, pe care îl rulează propriile teste ale PartCraft.
3. {{ui:Deschidere (doar citire)}} deschide întregul script într-o filă cu contur punctat. Îl puteți rula, puteți selecta și rula părți din el, dar nu îl puteți modifica.

## Modificarea unei funcții

Apăsați {{ui:Creare copie}} (sau **Creare copie pentru editare** deasupra unei file doar în citire). Copia este un script din piesă, cu același nume, deci se salvează odată cu piesa, iar **fiecare apel al acelei funcții folosește acum copia** — editorul o spune deasupra scriptului. Redenumiți copia ca să le păstrați pe amândouă.

## Utilizarea unei funcții

Apelați o funcție din bibliotecă din orice script, după nume, ca pe o funcție încorporată:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Rezultatele revin ca valori în spațiul de lucru; graficele și câmpurile pe care le afișează apar în vizualizare și în subafișaje.

O analiză statică a piesei deschise, de exemplu, ia câteva rânduri:

```
v = voxel_mesh(part(), 2);                   % cuburi de 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % ținere jos
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N în jos, pe partea de sus
r = static_voxel(v, 210000, 0.3, bc);       % oțel
```

`r` conține deplasările, tensiunile și reacțiunile; tensiunea von Mises este desenată pe piesa deformată. Pentru piese curbe folosiți `tet_mesh` și `static_tet`, care pot încărca și ține fețe întregi (`face_nodes`).

:::note
Funcțiile bibliotecii sunt scrise în CraftScript, iar un script Lua le apelează prin `cs`, ca pe funcțiile încorporate: `cs.static_tet(t, 200000, 0.3, bc)` (vezi [Scripturi în Lua](topic:craftscript-lua)). Fiecare funcție rezolvă un material și un caz de încărcare; antetele spun ce nu este acoperit.
:::
