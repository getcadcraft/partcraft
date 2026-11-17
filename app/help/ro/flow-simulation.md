---
title: Simularea curgerii fluidelor (studiu de curgere)
summary: Curgerea prin canalele din interiorul unei piese sau în jurul ei, într-o cutie: admisii, evacuări, aer, apă sau propriul fluid, apoi viteza și presiunea pe un plan de secțiune mobil, linii de curent, presiunea pe suprafață, scăderea de presiune, bilanțul de masă, rezistența și portanța, cu ce poate și ce nu poate spune metoda laminară.
keywords: curgere, CFD, fluid, dinamica fluidelor computațională, simulare de curgere, aer, apă, vâscozitate, densitate, număr Reynolds, laminar, turbulent, scădere de presiune, pierdere de sarcină, admisie, evacuare, capac, dop, viteză, debit, debit volumic, litri pe minut, presiune statică, linii de curent, plan de secțiune, rezistență, portanță, coeficient de rezistență, coeficient de portanță, suprafață frontală, curgere externă, curgere internă, țeavă, canal, colector, ajutaj, Lattice Boltzmann, reziduu, convergență
from: 7dc75f29
---

Un studiu **Curgere** calculează cum se mișcă un fluid prin canalele din interiorul piesei (**intern**) sau în jurul ei (**extern**). Implicit este **laminar, incompresibil, izoterm și newtonian**: curgere lină a unui fluid a cărui densitate și vâscozitate rămân fixe, fără căldură, fără turbulență și fără gravitație. Există și un model turbulent **experimental**, doar pentru tipare calitative (vezi mai jos). Lucrează pe fețele numite pe care nucleul de plasă le oferă piesei (vezi [Nucleul de plasă](topic:solid-kernels)).

Alegeți **Simulare** în caseta **Spațiu de lucru**, apăsați **Studiu nou** dacă nu există unul și setați **Tip** la **Curgere (CFD)**. **Model de curgere** este **Laminar** (implicit) sau **Turbulent (Spalart–Allmaras, experimental)**: vezi **Curgere turbulentă (experimentală)** mai jos. Setările structurale ale studiului se păstrează, așa că puteți reveni. Setările de curgere se salvează în fișierul piesei, iar fiecare modificare poate fi anulată.

## Alegeți fluidul și celulele

- **Fluid**: aer sau apă la 20 °C, ori **Personalizat** cu propria densitate (kg/m³) și vâscozitate dinamică (Pa·s). Aerul folosește legea gazului ideal și legea lui Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); apa folosește valorile IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Dimensiunea celulei**: spațiul fluidului este umplut cu cuburi egale. Lăsați câmpul gol pentru o dimensiune automată; panoul arată grila. Fiecare deschidere și canal ar trebui să aibă **cel puțin 8 până la 10 celule pe lățime** pentru valori utile; celulele mai mici sunt mai precise și mai lente (de două ori mai fine înseamnă circa de 16 ori mai mult lucru).
- **Pereți**: **Interpolat** urmărește pereții curbi între celule (implicit); **Revenire** tratează pereții ca pe o scară de cuburi.

## Curgere în interiorul piesei

Spațiul fluidului trebuie să fie închis. Adăugați o **Admisie** și o **Evacuare** în panou, apoi faceți clic pe fețele lor în vedere:

1. **Fața plană din jurul unei deschideri** — marginea de la capătul unei țevi, o față de racord. PartCraft închide acolo orificiul deschiderii cu un capac. Fiecare orificiu de pe fața respectivă aparține acelei deschideri, așa că, dacă o admisie și o evacuare se deschid pe aceeași față, modelați în schimb un capac subțire peste una dintre ele.
2. **Fața interioară a unui capac** — ca în alte programe CAD: modelați o placă subțire (o extrudare) peste deschidere și alegeți fața ei care atinge fluidul.

Pentru o admisie setați o **viteză** (m/s, uniformă pe deschidere, spre interiorul piesei) sau un **debit volumic** (L/min). Pentru o evacuare setați **presiunea statică** (Pa, manometrică). Dacă o deschidere rămâne deschisă sau dacă un perete este mai subțire decât o celulă, interiorul se unește cu exteriorul, iar calculul se oprește cu mesajul „Niciun spațiu de fluid închis”.

## Curgere în jurul piesei

Setați **Curgere** la **Extern**, **Viteza**, direcția spre care curge fluidul și cât de departe ajunge cutia în amonte, în aval și lateral (gol: 1, 3 și 1 ori cea mai mare dimensiune a piesei). Fața cutiei prin care intră fluidul este o intrare, fața prin care iese este o ieșire la 0 Pa, iar fețele paralele cu curgerea alunecă. O cutie prea mică strânge curgerea pe lângă piesă și mărește rezistența. **Aria de referință** este aria folosită de coeficienții de rezistență și de portanță (gol: aria frontală a piesei văzută de-a lungul curgerii); portanța se măsoară pe +Y, dacă nu alegeți altă direcție.

## Calculați și citiți rezultatele

Apăsați **Calculare**. Calculul rulează în fundal, cu numărul de pași, reziduul și un grafic al reziduului; **Oprire** îl încheie. Se oprește când reziduul (cât se modifică încă câmpul de viteză la fiecare pas) este sub țintă și când scăderea de presiune sau rezistența s-au stabilizat. Dacă atinge mai întâi limita de pași, panoul afișează cu roșu **Neconvergent**: cifrele sunt ultima stare, nu un răspuns staționar.

- **Plan de secțiune**: viteza sau presiunea statică pe un plan care trece prin model; alegeți normala lui (X, Y sau Z) și trageți cursorul pentru a-l muta. Treceți cu mouse-ul peste el pentru a citi valorile.
- **Linii de curent**: din admisii (intern) sau dintr-un pieptene de linii trasat peste capătul de intrare al cutiei, în planul de secțiune (extern).
- **Piesă**: solidă, transparentă (ca să vedeți planul din interior), presiune pe suprafață sau ascunsă.
- **Tabel**: numărul Reynolds, scăderea de presiune (presiunea statică medie la admisii minus cea de la evacuări), debitul și presiunea medie pentru fiecare deschidere, forța asupra piesei, rezistența și portanța cu coeficienții lor și aria de referință (extern), bilanțul de masă (intrare față de ieșire), plasa și solverul.

## Curgere turbulentă (experimentală)

**Model de curgere › Turbulent (Spalart–Allmaras, experimental)** rezolvă curgerea turbulentă mediată în timp (RANS staționar): modelul Spalart–Allmaras dă o vâscozitate turbulentă în fiecare celulă, iar celulele de lângă pereți folosesc legea peretelui a lui Spalding în loc să rezolve stratul subțire de acolo. Este complet turbulentă peste tot (fără regiuni laminare, fără tranziție).

**Nu a trecut verificările sale de precizie.** Panoul, rezultatele și tabelul o spun la fiecare studiu turbulent, iar avertismentul nu poate fi închis. Folosiți-l pentru **tipare calitative de curgere** — unde curgerea se desprinde, recirculă sau accelerează — **nu pentru cifre de proiectare**.

| Verificare | Referință | Rezultat |
|---|---|---|
| Frecarea într-un canal plan, prima celulă la y⁺ 49 / 98 | Corelația lui Dean | +3.3 % / +4.7 % |
| Canal cu perete rezolvat (y⁺ ≈ 3), Re_τ 180: viteza medie în volum | DNS Moser, Kim & Mansour | −1 % |
| Canal plan, y⁺ 7–15 sau 190–380 | Corelația lui Dean | +9 până la +22 % |
| Frecarea în țeavă prin celulele cubice, complet dezvoltată, 10–30 de celule pe lățime | Colebrook | cu 30 până la 34 % prea mare |
| Relipirea în spatele unei trepte orientate invers, 6–14 celule pe înălțimea treptei | Driver & Seegmiller, 6.26 înălțimi de treaptă | cu 21 până la 39 % prea scurtă |

Rezultatele se îmbunătățesc doar lent cu celule mai fine. După calcul, tabelul arată **y⁺ în prima celulă** (minim, medie și maxim peste celulele de perete) și avertizează în afara intervalului verificat de la 1 la 400; țintiți în jur de 30 până la 300. **Durata de rulare:** celulele automate sunt dimensionate pentru cel mult câteva minute pe un nucleu de laptop (panoul arată cazul cel mai nefavorabil pentru grilă și limita de pași; o țeavă mică se stabilizează în mai puțin de 20 de secunde). Înjumătățirea dimensiunii celulei costă circa de 16 ori mai mult timp. Forțele asupra piesei provin dintr-un bilanț de impuls peste deschideri sau peste cutie.

**Stadiul lucrului până acum:** celulele de perete își potrivesc acum tensiunea tangențială proprie cu legea peretelui, ceea ce a coborât erorile din țeavă și din treaptă la cifrele de mai sus, fără să schimbe rezultatele pentru canalul plan. Nu a fost suficient pentru cifre de proiectare. Următorul pas sunt celule mai fine lângă pereți.

## Ce poate și ce nu poate spune

- **Modelul laminar** este doar laminar. În țevi, curgerea devine turbulentă peste un număr Reynolds de circa 2,000 până la 4,000; în spatele corpurilor boante, sillajul începe să desprindă vârtejuri peste circa 50. Panoul avertizează în aceste puncte. Un rezultat laminar pentru curgere turbulentă subestimează scăderea de presiune și greșește rezistența. Modelul turbulent experimental (de mai sus) acoperă calitativ curgerea turbulentă; cifrele lui nu sunt încă fiabile.
- **Metoda:** metoda Lattice Boltzmann (D3Q19, coliziune cu două timpi de relaxare), rulată până la o stare staționară. În interior este ușor compresibilă; PartCraft ține variațiile de densitate la câteva procente. Dacă curgerea este prea rapidă pentru celule, refuză să pornească și spune cu cât trebuie micșorate celulele.
- **Verificată față de:** curgerea Hagen–Poiseuille printr-o țeavă dintr-o piesă (gradient de presiune în 1 % la 20 de celule pe lățime), cavitatea condusă de capac a lui Ghia et al. (în 0.75 % din viteza capacului) și etalonul cilindrului Schäfer–Turek (rezistență în 1 % la 10 celule pe diametru).
- Nu sunt modelate: transferul de căldură, turbulența cu precizie de proiectare (modelul turbulent este experimental), suprafețele libere, cavitația, gravitația, piesele în mișcare, fluidele nenewtoniene, pereții rugoși. Versiune de laborator: verificați rezultatele importante altfel.
