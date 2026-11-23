---
title: Noutăți în 0.9 (anterior)
summary: PartCraft 0.9 adaugă racordări între fețe și îngroșări în solide, ansambluri cu mii de piese, un vault de documente cu revizii, un supliment Solid FEM pentru tensiune, zece metode de arc, profile de oțel britanice, o etapă de imprimare și suplimente de imprimare cu rășină.
keywords: noutăți 0.9, versiune anterioară, noutăți, ce e nou, note de lansare, jurnal al modificărilor, 0.9, racordare între fețe, bilă rulantă, racordare mai multor muchii, îngroșare, solid din suprafețe, STEP shell, solid IGES, racordări la scanare, ansamblu mare, afișare ușoară, 20000 piese, documente, vault, extragere, revizie, lansare, unde este folosit, legătură Rhino, grasshopper, 3dm, cursoare, atelier de producție, coadă de lucru, solid fem, element finit, von Mises, frecvență naturală, metode de arc, arc cu 3 puncte, profile de oțel britanice, blue book, etapă de imprimare, rășină, goo, ctb, pat, desfășurare, noutăți, schimbări, 0.8, 0.8.1, versiune, funcții noi, analiză live, actualizare în timpul editării, rupe-o, ce cedează primul, factor de sarcină, neliniar, curgere, deformație plastică, contact, calculix, studiu de mișcare, joc, suprafețe, nurbs, netezire, linii de carenă, zebra, inginerie, generator, corp generat, schiță dintr-o fotografie, scară pentru imprimare, împărțire pentru imprimare, contracție, foi dispuse, g-code, desen, cotează găurile, asistent, mcp, limbi, rânduri ale barei de instrumente
from: 1dafd7c8
---

Aceasta este ce s-a schimbat în PartCraft 0.9, comparativ cu 0.8.1. Suprafețele libere se închid acum în solide, ansamblurile cu mii de piese rămân utilizabile, un vault de documente păstrează reviziile, iar un supliment Solid FEM verifică tensiunea într-o piesă. Fiecare element spune unde se găsește.

## Nou în 0.9.1

- **Export STEP exact.** {{ui:Export}} › {{ui:STEP AP242 (solid exact)}} și {{ui:STEP AP214 (solid exact)}} funcționează acum. Găurile, proeminențele, racordările, conurile, sferele și tori-ul sunt scrise pe suprafețele lor adevărate, iar cercurile adevărate sunt muchii, astfel încât un alt program CAD sau CAM poate recunoaște o gaură ca gaură. Laturile spline, filetele modelate și plasele importate rămân fațete plate în același solid. Vezi [Export pentru imprimare, STEP și DXF](topic:export-files#for-other-cad-programs-step).
- **STEP intră, STEP exact iese.** Un fișier STEP pe care îl deschideți își păstrează fețele plate, cilindrii, conurile, sferele și tori-ul, astfel că {{ui:Export}} › {{ui:STEP AP242 (solid exact)}} le scrie înapoi ca suprafețe adevărate în loc de fațete: o grindă a unui furnizor cu găuri pentru șuruburi iese cu aceleași fețe cu care a intrat, plus orice ați tăiat în ea. Fețele spline, baleiate și rotite ale fișierului rămân fațete, la fel și corpurile din STL, OBJ și 3MF. Deschideți din nou fișierul STEP pentru o piesă salvată mai devreme. Vezi [Deschiderea unui fișier STEP și construirea pe el](topic:import-step).
- **DXF cu cercuri adevărate pe fața plană.** {{ui:Export}} › {{ui:DXF al schiței sau al feței plane}}, cu o față plană aleasă, scrie acum găurile rotunde ca cercuri, cu centrul și raza proprii ale găurii, pentru o masă cu laser, plasmă sau jet de apă. Alte muchii rotunde rămân fațete.
- **STEP exact pentru atelier.** În {{ui:Fabricație}}, {{ui:STEP exact (coordonate de lucru)}} scrie piesa cu originea în originea de lucru a configurării și cu Z pe axa sculei, coordonatele pe care le folosește codul G. Vezi [Crearea traseelor și a codului G](topic:manufacture#exact-step-for-the-shop).

## Nou

### Suprafețe și solide

- **Racordare între fețe.** Alegeți {{ui:Suprafețe}} în caseta {{ui:Spațiu de lucru}}, apoi {{ui:Racordare între fețe}}. Alegeți cele două fețe ale unui solid și scrieți raza (și {{ui:Raza la capăt (mm, 0 = aceeași)}} pentru o rază care se schimbă de-a lungul muchiei). Linia de rezultat spune cât de departe este racordarea de bila ideală rulantă, iar o rază care nu încape este refuzată cu fața numită. {{ui:Racordare mai multor muchii}} rotunjește multe muchii dintr-un pas; bifați {{ui:Colțuri (petic sferic unde se întâlnesc trei)}} pentru un colț sferic unde se întâlnesc trei muchii rotunjite ale fețelor plate. Vezi [Suprafețe libere (NURBS)](topic:nurbs-surfaces).
- **Îngroșare în solid.** {{ui:Îngroșare în solid}} din același spațiu de lucru dă unei suprafețe o grosime; {{ui:Cealaltă parte}} o mărește în sens opus. O îndoire sau o autointersecție este refuzată, cu suprafața și locul numite.
- **Solide din suprafețe.** Suprafețele decupate pot fi unite cu reuniune, scădere și intersecție și încorporate în piesă ca un singur pas de anulare. STEP scrie un solid ca o singură coajă închisă, iar IGES ca un solid; ambele se citesc înapoi ca solid. Dacă fețele nu se potrivesc muchie cu muchie, fișierul primește fețe separate, iar bara de stare spune asta. Solidele pot fi create și în editorul de noduri; vezi [Editorul de noduri](topic:nodes).
- **Racordări de margine și variabile la scanări.** Când potriviți suprafețe pe o scanare, se caută și racordările de margine (tori) și racordările de rază variabilă de-a lungul unei muchii destul de drepte, și sunt listate cu raza lor. Este testat doar pe scanări inventate.

### Ansambluri, documente și legături

- **Ansambluri mari.** Piesele care sunt copii partajează o singură plasă, iar {{ui:Vederi}} › {{ui:Afișare ușoară}} desenează casete, ca vederea să rămână fluidă (se pornește singură la ansamblurile foarte mari; alegerea și articulațiile folosesc piesele reale). Arborele pieselor arată primele rânduri și un buton {{ui:Afișare încă 700}} pentru restul. Fișierele de ansamblu pot avea până la 50,000 de instanțe și 100,000 de articulații. Vezi [Construirea unui ansamblu](topic:build-assembly).
- **Documente.** {{ui:Documente…}} din grupul **Fișier** deschide o casetă peste un dosar de proiect: extragere și depunere, litere de revizie, stări (în lucru, pentru revizie, lansat, învechit), istoric, unde este folosit și lista de materiale. Vezi [Documente și revizii (vault)](topic:documents-walkthrough).
- **Legătura live cu Rhino.** Un script, `cadcraft_link.py`, urmărește un document Rhino sau Grasshopper și trimite în PartCraft doar ce s-a schimbat; o funcție importată se reconstruiește pe noua formă. Este într-un singur sens și are nevoie de Studio. Vezi [Legătura live .3dm](topic:live-3dm-link).
- **Vedeți cursoarele celorlalți.** Într-o sesiune comună, cursorul fiecărei persoane apare cu numele ei și cu funcția pe care a selectat-o. Vezi [Lucrul live cu alții](topic:work-live).
- **Atelierul de producție.** Activați suplimentul Atelierul de producție în {{ui:Setări}} › {{ui:Suplimente}}. După ce postați un program în {{ui:Fabricație}}, fila lui poate {{ui:Adăugare în coada de lucru a fabricii}} sau {{ui:Salvare ca fișier de lucru}}. Nu trimite și nu pornește niciodată o mașină.

### Analiză și piese

- **Supliment Solid FEM.** Activați {{ui:Solid FEM}} în {{ui:Setări}} › {{ui:Suplimente}} (este oprit până îl activați) și apare o filă {{ui:Solid FEM}} în panoul din dreapta. {{ui:Generare plasă a piesei}}, alegeți fețele fixe și sarcinile în vizualizarea 3D, {{ui:Rezolvare}}, și desenați deplasarea, tensiunea von Mises sau o formă de mod cu {{ui:Afișare pe model}}. Vezi [Solid FEM: o verificare a tensiunii](topic:solid-fem-check).
- **Arc în schițe, în zece moduri.** Săgeata de lângă {{ui:Arc}} din bara schiței listează: Pe 3 puncte, Început Centru Sfârșit, Început Centru Unghi, Început Centru Lungime, Început Sfârșit Unghi, Început Sfârșit Direcție, Început Sfârșit Rază, Centru Început Sfârșit, Centru Început Unghi, Centru Început Lungime și Continuare. Vezi [Desenarea unui arc în zece moduri](topic:sketch-arc-methods).
- **Profile de oțel britanice.** Ansamblurile sudate pot folosi 976 de profile britanice (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); scrieți o dimensiune ca `305x165x40 UB`. Vezi [Elemente structurale](topic:structural-members).

### Imprimare

- **Etapa de imprimare.** Butonul {{ui:Etapa de imprimare}} din bara de instrumente (suplimentul Imprimare 3D, pornit implicit) pune corpurile piesei pe un pat punctat: {{ui:Desfășurare}}, {{ui:Rotire 90°}}, {{ui:Aranjare pe pat}}, {{ui:Potrivire toate pe pat}}, {{ui:Previzualizare straturi}}, apoi {{ui:Trimitere la imprimanta 3D}} prin USB, Klipper (Moonraker), OctoPrint sau PrusaLink. Nimic nu se trimite până nu confirmați, iar piesa nu este modificată niciodată. Pentru un fișier STL sau 3MF, vezi [Pregătirea unei piese pentru imprimarea 3D](topic:print-3d).
- **Imprimare cu rășină.** Suplimente în {{ui:Setări}} › {{ui:Suplimente}}, toate oprite până le porniți: un feliator pentru rășină, un test de expunere și formatele de fișier Elegoo GOO, SL1, Chitubox CBDDLP/CTB și Anycubic. Feliarea rulează pe un fir de execuție separat, astfel încât pagina rămâne receptivă.

## În fiecare aplicație

- Fiecare indiciu la plasarea cursorului este un tooltip Bootstrap.
- Butonul de închidere al sfatului de start; rămâne închis.
- Un rând de file al unui panou care nu încape se derulează lateral, în loc să fie tăiat.
- Fila browserului arată numele documentului deschis înaintea „PartCraft | CadCraft”.
- {{ui:Setări}} arată {{ui:Aranjare}} a spațiului de lucru ca listă derulantă cu alegeri, iar caseta de limbă listează fiecare limbă pe care o are versiunea.
- Greutatea și Temperatura sunt tipuri de unități în setările Unități.

## Reparat

- Meniul Arc din schiță listează acum fiecare metodă.
- Antetul barei de suplimente și titlul filei browserului au fost corectate la 2026-11-09.

## Limite cinstite

- STEP exact a fost citit înapoi în OpenCascade (solide valide, volume egale cu cele calculate manual). Nu a fost deschis încă în fiecare program CAD sau CAM, iar un ansamblu nu este scris ca STEP exact.
- Nimic nu a fost imprimat pe o imprimantă reală. Feliarea, codul G și fișierele cu rășină au fost citite înapoi de propriile programe sau de o imprimantă de probă; niciunul dintre formatele de rășină nu a fost încărcat pe o imprimantă, iar dimensiunile și expunerile imprimantelor sunt valori de pornire.
- Solid FEM este liniar, izotrop și elastic, cu un material pe piesă, fără contact, curgere sau flambaj. Tensiunea în fețele fixe și în colțurile ascuțite depinde de plasă. Este un ajutor pentru verificare, nerevizuit de un inginer.
- Timpii pentru ansamblurile mari vin de la un server fără GPU; un cadru cu detaliu complet de 20,000 de piese durează încă secunde acolo.
- Racordările funcționează pe perechi de fețe; nu există o racordare generală în vârf și nicio racordare între fețe care nu se întâlnesc.
- Legătura Rhino nu a rulat niciodată în Rhino sau Grasshopper reale. Documentele au fost încercate de două programe pe un dosar, nu de două persoane pe o partajare de rețea.
- Potrivirea suprafețelor la o scanare reală nu a fost verificată manual. Limbile în afara englezei sunt ciorne făcute de mașină.
- Programele de instalare pentru Windows nu sunt semnate digital, iar imaginea de disc pentru macOS nu este notarizată. Vezi [Depanare](topic:troubleshooting).

Schimbările anterioare sunt în [Noutăți în 0.7](topic:whats-new-0-7).

## Anterior: 0.8 și 0.8.1

Aceasta este ce s-a schimbat în PartCraft 0.8 și 0.8.1, comparativ cu 0.7. Simularea răspunde în timp ce editați și spune ce cedează primul, ansamblurile primesc studii de mișcare, iar spațiile de lucru noi fac suprafețe libere și piese dimensionate din fizică. 0.8.1 este o lansare mică de reparații.

### Nou

**Simulare**

- **Actualizare în timpul editării.** Bifați {{ui:Actualizare în timpul editării}} în blocul Rezolvare și răspunsurile urmăresc modificările. Schimbați o dimensiune, o sarcină sau materialul și un răspuns rapid, făcut cu elemente de patru ori mai mari, apare imediat; când vă opriți circa o secundă, răspunsul rafinat propriu al studiului îl înlocuiește. Rezultatele spun care dintre ele îl vedeți. Pe o consolă de oțel, răspunsul rapid a fost în 1 % față de cel rafinat la deformație și în circa 4 % la tensiune. Vezi [Verificarea tensiunii și deformării](topic:simulation#update-while-you-edit-live).
- **Ce cedează primul.** Pentru un studiu static sau de flambaj, {{ui:Ce cedează primul?}} din blocul **Rupe-o** scalează sarcinile până când piesa cedează. Listează, cel mai rău primul, factorul de sarcină până la prima curgere (cu un marcaj roșu acolo unde tensiunea atinge vârful) și factorul de sarcină până la flambaj. Un factor sub 1 înseamnă că piesa cedează deja încărcată, iar panoul Probleme arată o eroare. Factorii vin dintr-un studiu liniar, deci valoarea lor este la fel de bună ca el. Vezi [Verificarea tensiunii și deformării](topic:simulation#find-out-what-breaks-first-break-it).
- **Curgere și contact.** Încă două tipuri de studii: unul neliniar, în care materialul urmează dreapta până la tensiunea de curgere și apoi o pantă mai plată, cu deformația plastică trasată, și unul de contact, în care piese separate se împing (fără frecare) sau rămân lipite (legate). Un pas de sarcină care nu se poate stabili sau piese care se afundă prea mult una în alta apar în panoul Probleme. Frecarea, alunecarea mare, rotațiile mari, deformările mari și oboseala nu sunt rezolvate. Vezi [Verificarea tensiunii și deformării](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Fișiere pentru CalculiX.** {{ui:Export}} › {{ui:Fișier CalculiX (.inp)}} salvează studiul pentru CalculiX, un program separat pe care îl instalați și îl rulați singur; {{ui:Export}} › {{ui:Rezultate CalculiX (.frd)}} citește înapoi fișierul de rezultate pe aceeași plasă. PartCraft nu pornește niciodată acel program și spune asta dacă piesa s-a schimbat de când a fost salvat fișierul.

**Ansambluri**

- **Studii de mișcare.** {{ui:Ansamblu}} › {{ui:Mișcare}} acționează valoarea unei articulații pe un timp dat (viteză constantă, accelerată, sinusoidală sau dus-întors), plasează ansamblul la fiecare pas cu articulațiile și buclele închise și raportează ce se lovește și cât de aproape ajung piesele. {{ui:Adăugare punct}} trasează poziția, viteza și accelerația unui punct, valoarea articulației și jocul în funcție de timp; {{ui:Salvare CSV}} și {{ui:Salvare grafic}} le scriu. După {{ui:Rulare}}, bara Pas prin rulare mută ansamblul la orice pas. Setările studiului sunt salvate în fișierul ansamblului. Viteza și accelerația vin din pozițiile înregistrate, deci folosiți mai mulți pași dacă un vârf ascuțit apare mic. Vezi [Verificarea unui ansamblu pentru coliziuni și mișcare](topic:check-assembly#a-motion-study).

**Suprafețe și piese din fizică**

- **Un spațiu de lucru Suprafețe.** Alegeți {{ui:Suprafețe}} în caseta {{ui:Spațiu de lucru}} pentru curbe și suprafețe NURBS lângă piesă: {{ui:Curbă}}, {{ui:Loft}}, {{ui:Baleiere}}, {{ui:Potrivire}} și {{ui:Zebra}}, cu continuitate (G0, G1 sau G2) măsurată pe suprafețele exacte, iar o muchie mai slabă decât ați cerut este listată în Probleme, cu o reparație Potrivire. {{ui:Netezire}} măsoară liniile de carenă pentru inflexiuni și salturi de curbură și reconstruiește cele nenetede în limita toleranței. Suprafețele sunt salvate în fișierul piesei și nu schimbă funcțiile piesei. Vezi [Suprafețe libere (NURBS)](topic:nurbs-surfaces).
- **Spațiul de lucru Inginerie.** Alegeți {{ui:Inginerie}} din comutatorul spațiului de lucru, alegeți un generator și apăsați {{ui:Nou}}: un script dimensionează o piesă după ce trebuie să facă (căldura de transportat, fluxuri, presiune, material, procedeu de imprimare) cu formule din manuale și o construiește, apoi dă înapoi cifrele folosite, cu sursele lor, verificările de fabricație și fișiere pentru programele de analiză. Aceleași intrări dau aceeași piesă pe orice calculator. Generatorul este păstrat în piesă, iar deschiderea unei piese nu rulează niciodată un script. Vezi [Piese din fizică: generatoare](topic:engineer-generators) și [Scrierea unui generator](topic:write-a-generator).

**Schițare, desene și construire**

- **O schiță dintr-o fotografie.** {{ui:Operații}} › {{ui:Mai multe}} › {{ui:Schiță dintr-o fotografie…}} trasează o imagine a unei piese plate pe un fond simplu (contur și găuri) sau un desen în creion, în linii, arce și cercuri. Dați o lungime, verificați previzualizarea și faceți schița. Vezi [Bazele schițării](topic:sketch-basics#a-sketch-from-a-photo).
- **Scară și împărțire pentru imprimare.** {{ui:Export}} › {{ui:Scară pentru imprimare (STL sau 3MF)…}} scalează pe fiecare axă fără să schimbe piesa, de exemplu cu o toleranță de contracție. {{ui:Export}} › {{ui:Împărțire pentru imprimare (o arhivă zip cu piese)…}} taie o piesă prea mare pentru pat în piese numerotate, unite prin știfturi, pene, coade de rândunică, găuri pentru știfturi sau buzunare pentru magneți. Vezi [Imprimarea în 3D](topic:print-3d).
- **Foi dispuse în G-code.** {{ui:Export}} › {{ui:Foi dispuse în G-code}} citește un DXF dispus și face un program pe foaie prin postul pe care îl alegeți: întâi găurile și decupările, apoi conturele. Nu planifică intrările, ordinea tăierii sau muchiile comune. Vezi [Dispunerea pieselor plate pe foi](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Desene care fac mai mult singure.** {{ui:Foaie}} › {{ui:Automat}} alege cea mai mică foaie de format A care cuprinde vederile, la cea mai mare scară standard, până la 1:1. {{ui:Cotați găurile}} pune un semn de centru pe fiecare gaură, o indicație pentru fiecare dimensiune și pozițiile față de colțul din stânga jos al vederii. Vezi [Realizarea unui desen](topic:drawing-pdf).

**În fiecare aplicație**

- **Limbi.** Aplicațiile vin în 54 de limbi. Cele în afara englezei sunt ciorne făcute de mașină până le citește un vorbitor nativ.
- **Rânduri ale barei de instrumente.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri ale barei de instrumente}} alege Încadrare (ca înainte), 2 rânduri sau 1 rând; o bară care nu încape se derulează lateral. Panglica de operații a PartCraft arată mare cea mai folosită unealtă și ascunde variantele în spatele unui buton divizat.
- **Conectarea unui asistent AI.** Studio este centrul pentru conectarea unui asistent propriu la toate cele opt aplicații, cu permisiune doar citire, sugestie sau editare pentru fiecare aplicație. Un asistent conectat poate dimensiona o piesă dintr-o propoziție, cum ar fi un suport pentru o sarcină, își arată calculele și fiecare verificare și o construiește; raportează ce nu a verificat (concentrarea tensiunii, oboseala, fluajul în materialele plastice). Vezi [Utilizarea PartCraft cu un asistent AI](topic:use-with-ai-assistants).

### Reparat în 0.8.1

- **Înghețarea cursorului la ecran complet.** Alegerea la plasarea cursorului este acum limitată în frecvență. Cauza este cea mai bună interpretare a noastră și nu a fost confirmată cu persoana care a raportat-o.
- **Limba la rulare.** Studio și edițiile împachetate pot schimba limba în timpul rulării; înainte erau doar în engleză. Nu este încă testat pe fiecare platformă: spuneți-ne dacă limba nu se schimbă.

### Nu este încă în această versiune

- Conectarea unui AI nu este terminată: conectarea dintr-un clic în Studio, conectorul găzduit pentru AI în browser, cheia proprie API în Studio și pachetul MCP publicat nu sunt promise. Studio nu are AI propriu.
- Studio nu este semnat digital: Windows poate avertiza, iar macOS cere clic dreapta, apoi Deschidere. Vezi [Depanare](topic:troubleshooting).
- Lanțurile de toleranțe sunt încă într-o singură direcție: vezi [Lanțuri de toleranțe](topic:tolerance-stackup).
- Restul este listat în [Ce este încă nerealizat](topic:not-built-yet).

Schimbările anterioare sunt în [Noutăți în 0.7](topic:whats-new-0-7).
