---
title: Rotunjire, teșire și golire cu Racordare, Șanfren și Scobire în coajă
summary: Alegeți muchii și adăugați racordări cu rază constantă sau variabilă și șanfrene cu distanță egală, cu două distanțe sau cu distanță și unghi; goliți o piesă cu Scobire în coajă alegând fețele de deschis, schimbați muchiile sau fețele folosite de o operație și reparați defecțiunile obișnuite.
keywords: racordare, rotunjire, îmbinare, șanfren, teșire, scobire în coajă, golire, grosime perete, muchii, fețe, alegere muchii, Shift clic, față deschisă, nucleu exact, nucleu de plasă, nerealizat
from: e41c1c12
---

:::note
**În această versiune** PartCraft construiește racordările și șanfrenele cu nucleul de plasă, doar pe **muchii drepte între două fețe plane**: muchiile cutiei și muchiile drepte ale extrudărilor și decupărilor, colțuri exterioare sau interioare (un colț interior primește material adăugat). Muchiile rotunde, precum marginile găurilor, și o rază care se schimbă de-a lungul muchiei nu sunt încă realizate. Acolo unde două muchii rotunjite se întâlnesc într-un colț, rotunjirile sunt îmbinate la unghi (formează o linie ascuțită), nu fuzionate lin. **Scobirea în coajă** funcționează și ea, construită de nucleul de plasă: deschide doar fețe plane, pereții de grosimi diferite nu sunt încă realizați, iar operația este lentă pe piesele cu multe fețe rotunde. Vezi [Ce nu este încă realizat](topic:not-built-yet).
:::

{{ui:Fillet}} rotunjește muchiile, {{ui:Chamfer}} le teșește, iar {{ui:Shell}} golește piesa. Toate trei lucrează pe muchiile și fețele solidului și sunt construite de nucleul de plasă. Rotunjirile lor sunt din fațete, ca orice față rotundă (**Curbe** stabilește cât de fin); fețele rotunde sunt cilindri pe care îi puteți alege și măsura (vezi [Nucleul de plasă](topic:solid-kernels)).

## Racordați sau teșiți muchii

### Alegeți întâi muchiile

1. Faceți clic pe o muchie a piesei. Întreaga muchie se evidențiază, iar panoul din dreapta spune **Muchie**: tipul ei (Dreaptă, Cerc sau arc, Curbă), lungimea și fețele între care se află.
2. Ca să adăugați mai multe muchii, faceți {{key:Shift}}+clic pe ele. Fiecare este marcată; faceți {{key:Shift}}+clic pe o muchie marcată ca s-o scoateți. Titlul panoului le numără ("4 muchii"), iar bara de stare spune "4 muchii alese. Racordare sau Șanfren le rotunjesc sau teșesc; Shift+clic alege mai multe, Esc șterge."
3. Alegeți {{ui:Fillet}} sau {{ui:Chamfer}} din bara de instrumente, sau aceleași butoane din panoul din dreapta.

Operația se adaugă cu toate muchiile alese: o rotunjire de 2 mm sau un șanfren de 1 mm. Bara de stare spune, de exemplu, "Fillet1 adăugată (4 muchii). Modificați-i dimensiunea din dreapta; {{ui:Pick edges}} schimbă care sunt."

### Sau adăugați întâi operația

1. Fără nimic ales, alegeți {{ui:Fillet}} sau {{ui:Chamfer}}.
2. PartCraft intră în alegere: titlul panoului din dreapta spune "Fillet1: alegere", piesa apare așa cum era înainte de racordare (panoul o spune), iar bara de instrumente afișează {{ui:Done}}.
3. Faceți clic pe fiecare muchie ca s-o adăugați; faceți clic din nou ca s-o scoateți. Bara de stare le numără.
4. Alegeți {{ui:Done}} (sau {{ui:Done picking}} din panou), ori apăsați {{key:Esc}} sau {{key:Enter}}.

### Setări

| Setare | Racordare | Șanfren |
|---|---|---|
| Dimensiune | **Rază (mm)**, implicit 2 | **Distanță (mm)** înapoi de la muchie pe ambele fețe, implicit 1 |
| **Muchii** | Câte | Câte |

Lista de mai jos numește fiecare muchie după cele două fețe pe care le unește, de exemplu "Muchia 1: Extrude1 end face × Extrude1 side". **Eliminare** scoate una. {{ui:Pick edges}} revine la alegere. Dublu clic pe operația din istoric face același lucru.

Muchiile sunt ținute minte după cele două fețe pe care le unesc, deci rămân pe muchia corectă când modificați o dimensiune mai devreme în istoric.

### Racordări cu rază variabilă și tipuri de șanfren

- **Rază variabilă** (racordare): încă nerealizată în această versiune ("O racordare a cărei rază se schimbă de-a lungul muchiei: încă nerealizată (are nevoie de un nucleu exact). Dați-i o singură rază."). Cu un nucleu exact: bifați-o și setați **Rază de capăt (mm)**. Raza se schimbă liniar de la **Rază**, la un capăt al fiecărei muchii, până la **Rază de capăt**, la celălalt; **Inversare capete** o întoarce.
- **Tip** (șanfren): **Distanță egală**, **Două distanțe** (o **A doua distanță** pe cealaltă față) sau **Distanță și unghi** (distanța pe o față, teșitura la **Unghi (°)** față de ea). **Inversare laturi** pune prima distanță pe cealaltă față.

## Goliți o piesă

1. Faceți clic pe fața plană care rămâne deschisă, de exemplu partea de sus a unei cutii. Sau faceți {{key:Shift}}+clic pe mai multe fețe.
2. Alegeți {{ui:Shell}} din bara de instrumente, sau {{ui:Shell, opening this face}} din panoul feței.

Piesa devine un perete de 2 mm, cu fețele alese deschise. Setări:

| Setare | Ce face | Implicit |
|---|---|---|
| **Perete (mm)** | Grosimea peretelui | 2 |
| **Pereții cresc spre exterior (fețele rămân înăuntru)** | Bifat: pereții se adaugă în exterior, deci interiorul păstrează dimensiunea piesei | Oprit: pereții merg spre interior, iar exteriorul își păstrează dimensiunea |
| **Fețe deschise** | Câte fețe sunt eliminate | |

Spre interior, pereții au exact grosimea peretelui: colțurile exterioare rămân ascuțite, colțurile interioare ies rotunjite (rază = peretele), iar o gaură prin piesă primește în jur un tub de perete. Spre exterior, pereții se adaugă în afara suprafeței inițiale, care devine golul, iar muchiile exterioare ies rotunjite. Fețele interioare sunt numite după fețele pe care le decalează, deci le puteți alege.

Pot fi deschise doar fețe plane: alegerea uneia curbe afișează "Scobire în coajă: în această versiune deschide doar fețe plane (o construiește nucleul de plasă)." O scobire este lentă pe piesele cu multe fețe rotunde (câteva secunde la o mie de triunghiuri): folosiți o setare **Curbe** mai grosieră cât timp proiectați.

{{ui:Pick faces}} schimbă ce fețe sunt deschise, la fel ca alegerea muchiilor. Lista numește fiecare, de exemplu "Face 1: Extrude1 end face". O scobire fără fețe deschise nu este permisă: "Alegeți fețele de eliminat (de deschis), apoi scobiți."

## Ordinea contează

Operațiile se construiesc de sus în jos. O racordare înainte de o scobire în coajă este scobită odată cu piesa, deci și interiorul primește colțuri rotunjite. O racordare după o scobire rotunjește doar muchiile pe care le alegeți. Mutați operațiile cu {{ui:Move up}} și {{ui:Move down}} (vezi [Modificarea unei piese prin istoricul ei](topic:edit-history)).

Repetițiile și oglindirile nu pot copia o racordare, un șanfren sau o scobire în coajă: "Fillet1 modifică muchiile sau pereții corpului; nu poate fi copiată. Copiați operațiile care creează solide (extrudări, revoluții, găuri, importuri)." Repetați mai întâi găurile sau decupările, apoi racordați toate muchiile copiilor într-o singură racordare.

## Când eșuează

| Mesaj | Ce trebuie făcut |
|---|---|
| "A 5 mm round does not fit here (it is too big for a face next to one of the edges, or the edges meet in a corner the kernel cannot blend)." | "O rotunjire de 5 mm nu încape aici (este prea mare pentru o față de lângă una dintre muchii, sau muchiile se întâlnesc într-un colț pe care nucleul nu îl poate fuziona)." Folosiți o rază mai mică sau racordați mai puține muchii deodată (mai multe operații de racordare, cea mai mică la urmă) |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | "O muchie pe care o rotunjește a dispărut: muchia dintre Extrude1 și Cut2." O modificare anterioară a eliminat muchia. Alegeți {{ui:Pick edges}}, eliminați muchia roșie și alegeți-o pe cea nouă |
| "The shell could not be made with this thickness (…)." | "Scobirea nu a putut fi făcută cu această grosime (…)." Peretele este mai gros decât o porțiune îngustă a modelului sau decât raza unei racordări. Faceți peretele mai subțire sau racordările mai mari decât peretele |
| "That face has no name the history can follow; pick another." | "Fața aceasta nu are un nume pe care istoricul o poate urmări; alegeți alta." Alegeți o față creată de o operație (majoritatea fețelor sunt) |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (și Chamfer) | "Racordare: în această versiune doar muchii drepte între două fețe plane (le construiește nucleul de plasă). Rotunjiți sau teșiți muchiile curbe din schiță." O muchie aleasă este rotundă, precum marginea unei găuri, sau se află pe o față curbă. Eliminați-o cu {{ui:Pick edges}} și rotunjiți sau teșiți acel colț din schiță |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | "O racordare a cărei rază se schimbă de-a lungul muchiei: încă nerealizată (are nevoie de un nucleu exact). Dați-i o singură rază." Debifați **Rază variabilă** |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠ în istoric) | "Racordare prin nucleul de plasă: acolo unde se întâlnesc muchiile rotunjite, sunt îmbinate la unghi, nu fuzionate lin." Un avertisment, nu o eroare: piesa este construită. Muchiile alese se întâlnesc într-un colț, iar rotunjirile se întâlnesc acolo într-o linie ascuțită. Racordați mai puține muchii sau acceptați linia |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | "Scobire în coajă: în această versiune deschide doar fețe plane (o construiește nucleul de plasă)." O față deschisă este curbă. Folosiți {{ui:Pick faces}} și eliminați-o; deschideți doar fețe plane |

## Limite

În această versiune, racordările și șanfrenele funcționează doar pe muchii drepte între două fețe plane, cu o singură rază, iar rotunjirile care se întâlnesc într-un colț sunt îmbinate la unghi. Scobirile deschid doar fețe plane. Cu un nucleu exact, o racordare variabilă se schimbă liniar de-a lungul fiecărei muchii (o lege pentru fiecare operație; nicio rază setată în puncte de-a lungul ei). Racordările de fețe, racordările complet rotunde și scobirile cu grosimi diferite de perete nu sunt încă realizate.
