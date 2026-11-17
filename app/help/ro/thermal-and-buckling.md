---
title: Căldură, tensiune termică și flambaj
summary: Aflați temperaturile dintr-o piesă din temperaturi fixe, flux de căldură, putere termică, convecție și radiație (în regim staționar sau în timp), încărcați un studiu de tensiune cu o creștere de temperatură și aflați sarcina la care o piesă zveltă flambează, cu ce pot și ce nu pot spune fiecare metodă.
keywords: termic, transfer de căldură, căldură, temperatură, conducție, convecție, coeficient de film, radiație, emisivitate, flux de căldură, putere termică, generare de căldură, radiator, tranzitoriu, timp, răcire, încălzire, Crank-Nicolson, Euler implicit, bilanț termic, tensiune termică, tensiune termică în timp, tensiune termică tranzitorie, călire, șoc termic, istoricul tensiunii, cel mai nefavorabil moment, dilatare termică, coeficient de dilatare, flambaj, flambaj Euler, factor de sarcină, sarcină critică, coloană, zvelt, valoare proprie
from: 1a1b7545
---

Aceste studii se află în spațiul de lucru Simulation, lângă tensiunea statică și frecvențele naturale (vezi [Verificarea tensiunii și a deformării](topic:simulation)). Alegeți-le în caseta **Tip** a panoului. Ele folosesc aceeași plasă de cuburi mici și aceeași listă de materiale; fiecare material din bibliotecă are o conductivitate termică, o căldură specifică și un coeficient de dilatare (valori tipice din manuale, afișate sub **Proprietăți**).

## Termic: unde merge căldura?

1. Alegeți **Termic (transfer de căldură)** ca **Tip**.
2. Adăugați condiții termice din lista **Adăugare** a panoului, apoi faceți clic pe fețele lor (ca pentru reazeme și sarcini):
   - **Temperatură fixă**: fața este menținută la o temperatură, în °C.
   - **Flux de căldură**: W/m² care intră în față (negativ înseamnă ieșire). Acționează pe aria reală a feței, chiar și acolo unde cuburile fac o treaptă.
   - **Putere termică**: un total în wați, împărțit pe fețele alese proporțional cu aria. Folosiți-o pentru un încălzitor sau un cip cu putere cunoscută.
   - **Convecție**: aerul sau lichidul la o temperatură preia căldura la h W/(m²·K). Valori tipice pentru h: aer calm 5–10, ventilator 25–100, apă 500–10000. PartCraft nu calculează h: în acest studiu nu există curgere de fluid.
   - **Radiație**: fața radiază spre mediul înconjurător la o temperatură, cu o emisivitate între 0 și 1. Este **liniarizată** (radiația este scrisă ca un coeficient care depinde de temperatură și este recalculată până se stabilizează) și merge doar spre mediul înconjurător: fețele nu fac schimb de căldură între ele.
3. **Generare de căldură** (W/m³) încălzește întreaga piesă din interior, de exemplu o piesă rezistivă.
4. Apăsați **Rezolvare**. Piesa este colorată după temperatură; alegeți **Flux de căldură** în **Afișare** pentru a vedea pe unde curge căldura. Treceți cu cursorul peste piesă ca să citiți amândouă.

Fluxul de căldură staționar are nevoie de un loc unde să meargă căldura: cel puțin o temperatură fixă, convecție sau radiație. O piesă care doar primește căldură nu are stare staționară; faceți-o tranzitorie.

Tabelul arată cea mai mică și cea mai mare temperatură și unde se află, cel mai mare flux de căldură și **bilanțul termic**: căldura care intră sau iese prin fiecare condiție (o temperatură fixă numără cât trebuie să furnizeze sau să absoarbă), căldura generată, totalurile intrate și ieșite și **dezechilibrul**. Dezechilibrul ar trebui să fie o fracțiune mică din căldura intrată; unul mare înseamnă că rezultatul nu este de încredere.

### În timp (tranzitoriu)

Bifați **Tranzitoriu** și dați o **Temperatură de start** (toată piesa începe de acolo), un **Interval de timp** și un număr de **Pași de timp**. **Euler implicit** este robust; **Crank–Nicolson** este mai exact pentru aceiași pași, dar poate oscila după o schimbare bruscă. După rezolvare, trageți cursorul **Timp** pentru a vedea temperaturile în fiecare moment (scara de culori rămâne aceeași pentru fiecare moment). Bilanțul termic include atunci și căldura stocată.

## Tensiune termică: ce face o schimbare de temperatură piesei?

Într-un studiu **Tensiune statică** (sau **Flambaj**), setați **Sarcină termică**:

- **Schimbare uniformă de temperatură**: întreaga piesă se încălzește (sau se răcește, cu un număr negativ) cu atâția kelvini.
- **Temperaturi din condiții termice**: adăugați condiții termice la același studiu; temperaturile staționare se rezolvă mai întâi pe aceeași plasă, apoi piesa se dilată cu α·(T − **temperatura fără tensiune**).
- **Temperaturi în timp (rulare tranzitorie)**: adăugați condiții termice, apoi dați o **Temperatură de start**, **Interval de timp**, **Pași de timp** și **Avansare în timp**, ca pentru un studiu termic tranzitoriu. Temperaturile se rezolvă în timp pe aceeași plasă (cuburi sau tetraedre), iar o rezolvare statică pe temperaturile fiecărui moment dă tensiunea din acel moment. **Tensiune la**:
  - **Cel mai nefavorabil moment** (startul): **Rezolvări de tensiune** rezolvă momente distribuite uniform pe toată rularea, inclusiv startul (21 implicit, cel mult 51). Rezultatele se deschid în momentul cu cea mai mare tensiune von Mises; tabelul îl numește, o diagramă mică arată vârful de tensiune în funcție de timp, iar cursorul **Timp** arată tensiunea în fiecare moment rezolvat (scara de culori rămâne cea a momentului cel mai nefavorabil).
  - **Un moment ales**: un singur moment, pasul de timp cel mai apropiat de **Timp (s)** dat. Un studiu de flambaj ia întotdeauna un moment ales (sfârșitul rulării, dacă nu se setează altul).

O piesă care este călită (scufundată de la cald în rece) sau încălzită brusc este cel mai solicitată cât timp interiorul și suprafața diferă cel mai mult: adesea chiar la început. O temperatură menținută se aplică din primul moment, ca o schimbare bruscă, deci tensiunea din primul moment depinde de dimensiunea elementului (doar câteva elemente simt schimbarea). Citiți-o ca „foarte mare” și uitați-vă la următoarele momente de pe cursor pentru valori pe care plasa le rezolvă. Tensiunea este cvasi-statică: fără inerție, fără vibrație din schimbarea bruscă.

O piesă care este liberă să se dilate nu are tensiune termică: fixați-o doar cât să nu se mai miște (de exemplu trei fețe fără frecare, la unghi drept). Ținută între doi pereți este comprimată: o bară de oțel încălzită cu 50 K între pereți rigizi suportă aproximativ 117 MPa. Sarcinile termice se echilibrează singure, deci reacțiunile se echilibrează doar cu sarcinile mecanice.

## Flambaj: când cedează o piesă zveltă?

1. Alegeți **Flambaj (liniar)** ca **Tip** și adăugați reazeme și sarcini ca pentru un studiu static.
2. Setați **Factori de sarcină de găsit** (câte moduri de flambaj).
3. Apăsați **Rezolvare**. Fiecare mod are un **factor de sarcină**: multiplul sarcinilor aplicate la care piesa ideală flambează. Un factor de sarcină 3 înseamnă de trei ori sarcinile; **un factor de sarcină sub 1 înseamnă că piesa flambează sub sarcinile aplicate**. Tabelul dă și sarcina totală la fiecare factor. Forma modului arată cum flambează (dimensiunea ei nu înseamnă nimic).

**Flambajul liniar supraestimează sarcina reală de flambaj.** Presupune o piesă perfectă: perfect dreaptă, fără tensiuni reziduale și elastică. Piesele reale au imperfecțiuni mici și pot ceda (curge) mai întâi, iar cojile cu pereți subțiri pot flamba la o fracțiune din valoarea liniară. Folosiți o marjă generoasă și tratați un factor de sarcină apropiat de sau sub 3 pentru o coajă subțire ca avertisment.

## Cât de mult să aveți încredere

PartCraft verifică aceste solvere față de formule de calcul manual: o bară între două temperaturi (exactă), o aripioară de răcire (în limita a 0.3 K), o placă ce se încălzește singură (exactă), un cub care se răcește în timp (în limita a 0.1 % cu Crank–Nicolson), o bară încălzită brusc la un capăt, o bară liberă încălzită (fără tensiune, ΔL = αLΔT), o bară ținută între pereți (σ = −EαΔT), o placă călită în timp față de soluția clasică în serie (în limita a 1 % pe cuburi, 2.1 % pe tetraedre în centrul plăcii; 0.5 % la suprafața ei), ultimul moment al unei rulări lungi față de tensiunea termică staționară (aceeași până la o milionime) și coloane Euler (în limita a 1 % fixat–liber, 1.5 % articulat–articulat). Țineți cont de:

- **Valori constante ale materialului.** Conductivitatea, căldura specifică și dilatarea nu se schimbă aici cu temperatura; la câteva sute de grade se pot schimba cu 10–30 %. Nici rigiditatea nu se schimbă.
- **Tensiunea în timp este cvasi-statică și elastică**: fiecare moment este o rezolvare statică (fără inerție), fără curgere, deci o călire care ar face suprafața să curgă arată în schimb o tensiune peste limita de curgere.
- **Coeficienții de convecție sunt date de intrare**, nu sunt calculați dintr-un curent de aer sau de apă.
- **Fără rezistență de contact**: piesa este un singur solid.
- **Doar flambaj liniar**: fără imperfecțiuni, fără curgere, fără comportament după flambaj.
- Treptele cuburilor și colțurile interioare ascuțite afectează tensiunile termice la fel ca alte tensiuni (vezi [Verificarea tensiunii și a deformării](topic:simulation)).
- Aceasta este o versiune de laborator: verificați pe altă cale piesele care contează.

## Vezi și

- [Verificarea tensiunii și a deformării (Simulation)](topic:simulation)
- [Ce nu este încă realizat](topic:not-built-yet)
