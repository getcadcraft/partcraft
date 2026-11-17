---
title: Ce este nou în 0.9
summary: PartCraft 0.9 adaugă racordări între fețe și îngroșarea în solide, ansambluri cu mii de piese, un seif de documente cu revizii, suplimentul Solid FEM pentru tensiuni, zece metode de arc, profile de oțel britanice, etapa de imprimare și suplimente pentru imprimarea cu rășină.
keywords: ce este nou, noutăți, note de lansare, jurnal al modificărilor, 0.9, racordare între fețe, rolling ball, racordare mai multor muchii, îngroșare, solid din suprafețe, step shell, iges solid, racordări din scanări, ansamblu mare, afișare ușoară, 20000 piese, documente, seif, extragere pentru editare, revizie, lansare, unde este folosit, legătură rhino, grasshopper, 3dm, cursoare, fabrică, coadă de lucru, solid fem, element finit, von mises, frecvență proprie, metode de arc, arc cu 3 puncte, profile de oțel britanice, etapa de imprimare, rășină, goo, ctb, pat, desfășurare, 0.8, 0.8.1, versiune, funcții noi, analiză live, actualizare în timpul editării, rupe-o, ce cedează primul, factor de sarcină, neliniar, curgere, deformație plastică, contact, calculix, studiu de mișcare, joc, suprafețe, nurbs, netezire, carenă, zebra, inginer, generator, corp generat, schiță dintr-o fotografie, scară pentru imprimare, împărțire pentru imprimare, contracție, foi dispuse, g-code, desen, cotarea găurilor, asistent, mcp, limbi, rânduri ale barei de instrumente
from: 96d9fbfa
---

Iată ce s-a schimbat în PartCraft 0.9, față de 0.8.1. Suprafețele libere se închid acum în solide, ansamblurile cu mii de piese rămân utilizabile, un seif de documente păstrează reviziile, iar un supliment Solid FEM verifică tensiunile dintr-o piesă. Fiecare element spune unde se găsește.

## Noutăți în 0.9.1

- **Export STEP exact.** {{ui:Export}} › {{ui:STEP AP242 (solid exact)}} și {{ui:STEP AP214 (solid exact)}} funcționează acum. Găurile, proeminențele, racordările, conurile, sferele și torii sunt scriși pe suprafețele lor reale, cu cercuri adevărate ca muchii, astfel încât un alt program CAD sau CAM poate recunoaște o gaură ca gaură. Laturile spline, filetele modelate și plasele importate rămân fațete plane în același solid. Vezi [Export pentru imprimare, STEP și DXF](topic:export-files#for-other-cad-programs-step).
- **STEP intră, STEP exact iese.** Un fișier STEP deschis își păstrează fețele plane, cilindrii, conurile, sferele și torii, astfel încât {{ui:Export}} › {{ui:STEP AP242 (solid exact)}} le scrie înapoi ca suprafețe reale, nu ca fațete: o grindă de furnizor cu găuri pentru șuruburi iese cu aceleași fețe cu care a intrat, plus orice ați tăiat în ea. Fețele spline, baleiate și de revoluție ale fișierului rămân fațete, la fel și corpurile din STL, OBJ și 3MF. Deschideți din nou fișierul STEP pentru o piesă salvată mai devreme. Vezi [Deschiderea unui fișier STEP și construirea pe el](topic:import-step).
- **Cercuri adevărate în DXF-ul fețelor.** {{ui:Export}} › {{ui:DXF al schiței sau al feței plane}}, cu o față plană aleasă, scrie acum găurile rotunde ca cercuri, cu centrul și raza proprii ale găurii, pentru o masă de laser, plasmă sau jet de apă. Celelalte muchii rotunde rămân fațete.
- **STEP exact pentru atelier.** În {{ui:Fabricație}}, {{ui:STEP exact (coordonate de lucru)}} scrie piesa cu originea în originea de lucru a montajului și cu Z pe axa sculei, adică coordonatele folosite de codul G. Vezi [Trasee de scule și cod G](topic:manufacture#exact-step-for-the-shop).

## Noutăți

### Suprafețe și solide

- **Racordare între fețe.** Alegeți {{ui:Suprafețe}} în caseta {{ui:Spațiu de lucru}}, apoi {{ui:Racordare între fețe}}. Alegeți cele două fețe ale unui solid și scrieți raza (și {{ui:Raza la capăt (mm, 0 = aceeași)}} pentru o rază care se schimbă de-a lungul muchiei). Linia de rezultat spune cât de departe este racordarea de bila ideală care se rostogolește, iar o rază care nu încape este refuzată, cu fața numită. {{ui:Racordare mai multor muchii}} rotunjește multe muchii dintr-o dată; bifați {{ui:Colțuri (petic sferic unde se întâlnesc trei)}} pentru un colț sferic unde se întâlnesc trei muchii rotunjite ale fețelor plane. Vezi [Suprafețe libere (NURBS)](topic:nurbs-surfaces).
- **Îngroșare în solid.** {{ui:Îngroșare în solid}} din același spațiu de lucru dă unei suprafețe o grosime; {{ui:Cealaltă parte}} o crește în sens invers. O îndoitură sau o autointersecție este refuzată, cu suprafața și locul numite.
- **Solide din suprafețe.** Suprafețele tăiate pot fi unite cu reuniune, scădere și intersecție și fixate în piesă ca un singur pas de anulare. STEP scrie un solid ca un singur înveliș închis, iar IGES ca un solid; amândouă se citesc înapoi ca solid. Dacă fețele nu se potrivesc muchie cu muchie, fișierul primește fețe separate, iar linia de stare spune asta. Solidele se pot face și în editorul de noduri; vezi [Editorul de noduri](topic:nodes).
- **Racordări de margine și cu rază variabilă în scanări.** Când potriviți suprafețe pe o scanare, se caută și racordările de margine (tori) și racordările cu rază variabilă de-a lungul unei muchii destul de drepte, iar ele sunt listate cu raza lor. Este testat doar pe scanări inventate.

### Ansambluri, documente și legături

- **Ansambluri mari.** Piesele care sunt copii împart o singură plasă, iar {{ui:Vederi}} › {{ui:Afișare ușoară}} desenează cutii, ca vederea să rămână fluidă (pornește singură la ansamblurile foarte mari; alegerea și articulațiile folosesc tot piesele reale). Arborele de piese arată primele rânduri și un buton {{ui:Afișează încă 700}} pentru rest. Fișierele de ansamblu pot avea până la 50.000 de instanțe și 100.000 de articulații. Vezi [Construirea unui ansamblu](topic:build-assembly).
- **Documente.** {{ui:Documente…}} din grupul **{{ui:Fișier}}** deschide o casetă de dialog peste un dosar de proiect: extragere pentru editare (check-out) și depunere (check-in), litere de revizie, stări (în lucru, pentru revizuire, lansat, învechit), istoric, unde este folosit și lista de materiale. Vezi [Documente și revizii (seiful)](topic:documents-walkthrough).
- **Legătura live cu Rhino.** Un singur script, `cadcraft_link.py`, urmărește un document Rhino sau Grasshopper și trimite în PartCraft doar ce s-a schimbat; acolo o funcție importată se reconstruiește pe noua formă. Legătura merge într-un singur sens și are nevoie de Studio. Vezi [Legătura live .3dm](topic:live-3dm-link).
- **Cursoarele celorlalți.** Într-o sesiune comună, cursorul fiecărei persoane apare cu numele ei și cu funcția pe care o are selectată. Vezi [Lucrul live cu alții](topic:work-live).
- **Factory floor.** Porniți suplimentul Factory floor din {{ui:Setări}} › {{ui:Suplimente}}. După ce postați un program în {{ui:Fabricație}}, fila lui poate {{ui:Adăugare în coada de lucru a fabricii}} sau {{ui:Salvare ca fișier de lucru}}. Nu trimite și nu pornește niciodată o mașină.

### Analiză și piese

- **Suplimentul Solid FEM.** Porniți {{ui:Solid FEM}} din {{ui:Setări}} › {{ui:Suplimente}} (este oprit până îl porniți), și apare o filă {{ui:Solid FEM}} în panoul din dreapta. {{ui:Generare plasă pentru piesă}}, alegeți fețele fixe și sarcinile în vederea 3D, {{ui:Rezolvare}}, apoi desenați deplasarea, tensiunea von Mises sau o formă proprie cu {{ui:Afișare pe model}}. Vezi [Solid FEM: o verificare a tensiunilor](topic:solid-fem-check).
- **Arc în schițe, în zece moduri.** Săgeata de lângă {{ui:Arc}} din bara schiței listează 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length și Continue. Vezi [Trasarea unui arc prin zece metode](topic:sketch-arc-methods).
- **Dimensiuni de oțel britanice.** Cadrele sudate pot folosi 976 de profile britanice (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); scrieți o dimensiune ca `305x165x40 UB`. Vezi [Bare structurale](topic:structural-members).

### Imprimare

- **Etapa de imprimare.** Butonul {{ui:Etapa de imprimare}} din bara de instrumente (suplimentul 3D Print, pornit implicit) pune corpurile piesei pe un pat punctat: {{ui:Desfășurare}}, {{ui:Rotire 90°}}, {{ui:Aranjare pe pat}}, {{ui:Încadrare totală pe pat}}, {{ui:Previzualizare straturi}}, apoi {{ui:Trimitere la imprimanta 3D}} prin USB, Klipper (Moonraker), OctoPrint sau PrusaLink. Nimic nu se trimite până nu confirmați, iar piesa nu se schimbă niciodată. Pentru un fișier STL sau 3MF, vezi [Pregătirea unei piese pentru imprimare 3D](topic:print-3d).
- **Imprimare cu rășină.** Suplimente în {{ui:Setări}} › {{ui:Suplimente}}, toate oprite până le porniți: un slicer pentru rășină, un test de expunere și formatele de fișier Elegoo GOO, SL1, Chitubox CBDDLP/CTB și Anycubic. Feliarea rulează pe un fir de execuție separat, așa că pagina rămâne receptivă.

## În toate aplicațiile

- Fiecare indiciu afișat la cursor este un tooltip Bootstrap.
- Sfatul de pornire are un buton de închidere; rămâne închis.
- Rândul de file al unui panou care nu încape se derulează lateral, în loc să fie tăiat.
- Fila browserului arată numele documentului deschis înaintea PartCraft | CadCraft.
- {{ui:Setări}} arată {{ui:Aspect}} al spațiului de lucru ca meniu derulant cu alegeri, iar caseta de limbă listează fiecare limbă pe care o are versiunea.
- Greutatea și temperatura sunt tipuri de unități în setările de unități.

## Corectate

- Meniul Arc al schiței listează acum fiecare metodă.
- Bara de instrumente a suplimentelor și titlul filei browserului au fost corectate pe 2026-11-09.

## Limite reale

- STEP exact a fost citit înapoi în OpenCascade (solide valide, volume egale cu cele calculate manual). Nu a fost deschis încă în fiecare program CAD sau CAM, iar un ansamblu nu este scris ca STEP exact.
- Nimic nu a fost imprimat pe o imprimantă reală. Feliere, codul G și fișierele pentru rășină au fost citite înapoi de programele noastre sau de o imprimantă de probă; niciunul dintre formatele pentru rășină nu a fost încărcat pe o imprimantă, iar dimensiunile și expunerile imprimantelor sunt puncte de plecare.
- Solid FEM este liniar, izotrop și elastic, cu un material pe piesă, fără contact, curgere sau flambaj. Tensiunea din fețele fixe și din colțurile ascuțite depinde de plasă. Este un ajutor de verificare, nerevizuit de un inginer.
- Duratele pentru ansamblurile mari vin de la un server fără GPU; un cadru cu detaliu complet de 20.000 de piese ia încă secunde acolo.
- Racordările funcționează pe perechi de fețe; nu există o îmbinare generală în vârf și nicio racordare între fețe care nu se întâlnesc.
- Legătura cu Rhino nu a rulat niciodată în Rhino sau Grasshopper reale. Documentele au fost încercate de două programe pe un singur dosar, nu de două persoane pe o partajare de rețea.
- Potrivirea suprafețelor pe o scanare reală nu a avut încă verificarea manuală. Limbile în afara englezei sunt ciorne automate.
- Instalatoarele Windows nu sunt semnate, iar imaginea de disc macOS nu este notarizată. Vezi [Depanare](topic:troubleshooting).

Modificările anterioare sunt în [Ce este nou în 0.7](topic:whats-new-0-7).

## Anterior: 0.8 și 0.8.1

Iată ce s-a schimbat în PartCraft 0.8 și 0.8.1, față de 0.7. Simularea răspunde în timp ce editați și spune ce cedează primul, ansamblurile primesc studii de mișcare, iar spații de lucru noi fac suprafețe libere și piese dimensionate din fizică. 0.8.1 este o versiune mică de corecții.

### Noutăți

**Simulare**

- **Actualizare în timpul editării.** Bifați {{ui:Actualizare în timpul editării}} în blocul {{ui:Rezolvare}}, iar răspunsurile urmează modificările. Schimbați o cotă, o sarcină sau materialul și apare imediat un răspuns rapid, făcut cu elemente de patru ori mai mari; când vă opriți o secundă, răspunsul rafinat al studiului îl înlocuiește. Rezultatele spun la care vă uitați. Pe o consolă de oțel, răspunsul rapid s-a încadrat în 1 % la săgeată și în jur de 4 % la tensiune, față de cel rafinat. Vezi [Verificarea tensiunii și a săgeții](topic:simulation#update-while-you-edit-live).
- **Ce cedează primul.** Pentru un studiu static sau de flambaj, {{ui:Ce cedează primul?}} din blocul **Rupe-o** scalează sarcinile până când piesa cedează. Listează, cel mai rău primul, factorul de sarcină până la prima curgere (cu un marcaj roșu acolo unde tensiunea crește cel mai mult) și factorul de sarcină până la flambaj. Un factor sub 1 înseamnă că piesa cedează deja sub sarcina dată, iar Probleme arată o eroare. Factorii vin dintr-un studiu liniar, așa că valoarea lor este cât de bun este acesta. Vezi [Verificarea tensiunii și a săgeții](topic:simulation#find-out-what-breaks-first-break-it).
- **Curgere și contact.** Încă două tipuri de studiu: unul neliniar, în care materialul urmează dreapta lui până la tensiunea de curgere și apoi o pantă mai plată, cu deformația plastică trasată, și unul de contact, în care piese separate se împing unele pe altele (fără frecare) sau rămân lipite (legate). O treaptă de sarcină care nu se stabilizează sau piese care se afundă prea mult una în alta apar în panoul Probleme. Frecarea, alunecarea mare, rotațiile mari, deformațiile mari și oboseala nu sunt rezolvate. Vezi [Verificarea tensiunii și a săgeții](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Fișiere de intrare pentru CalculiX.** {{ui:Export}} › {{ui:Fișier CalculiX (.inp)}} salvează studiul pentru CalculiX, un program separat, pe care îl instalați și îl rulați singur; {{ui:Export}} › {{ui:Rezultate CalculiX (.frd)}} citește înapoi fișierul de rezultate pe aceeași plasă. PartCraft nu pornește niciodată acel program și spune asta dacă piesa s-a schimbat de la salvarea fișierului.

**Ansambluri**

- **Studii de mișcare.** {{ui:Ansamblu}} › {{ui:Mișcare}} acționează valoarea unei articulații pe un interval de timp pe care îl dați (viteză constantă, cu accelerare și frânare line, sinusoidal sau dus și întors), așază ansamblul la fiecare pas cu articulațiile și buclele închise și raportează ce intră în conflict și cât de aproape ajung piesele. {{ui:Adăugare punct}} trasează poziția, viteza și accelerația unui punct, valoarea articulației și jocul în funcție de timp; {{ui:Salvare CSV}} și {{ui:Salvare grafic}} le scriu în fișiere. După {{ui:Rulare}}, Pasul prin bara de rulare mută ansamblul la orice pas. Setările studiului se salvează în fișierul ansamblului. Viteza și accelerația vin din pozițiile înregistrate, așa că folosiți mai mulți pași dacă un vârf ascuțit iese mic. Vezi [Verificarea unui ansamblu pentru ciocniri și mișcare](topic:check-assembly#a-motion-study).

**Suprafețe și piese din fizică**

- **Un spațiu de lucru Suprafețe.** Alegeți {{ui:Suprafețe}} în caseta {{ui:Spațiu de lucru}} pentru curbe și suprafețe NURBS lângă piesă: {{ui:Curbă}}, {{ui:Loft}}, {{ui:Baleiere}}, {{ui:Potrivire}} și {{ui:Zebra}}, cu continuitatea (G0, G1 sau G2) măsurată pe suprafețele exacte, iar o muchie mai slabă decât s-a cerut este listată în Probleme, cu o corecție Potrivire. {{ui:Netezire}} măsoară liniile de carenă pentru inflexiuni și salturi de curbură și reconstruiește cele nepotrivite în toleranța cerută. Suprafețele se salvează în fișierul piesei și nu schimbă funcțiile piesei. Vezi [Suprafețe libere (NURBS)](topic:nurbs-surfaces).
- **Spațiul de lucru Engineer.** Alegeți {{ui:Engineer}} din comutatorul spațiului de lucru, alegeți un generator și faceți clic pe {{ui:Nou}}: un script dimensionează o piesă din ce trebuie să facă (căldură de transportat, debite, presiune, material, procedeu de imprimare), cu formule din manuale, și o construiește, apoi dă înapoi cifrele folosite cu sursele lor, verificările de fabricație și fișiere pentru programele de analiză. Aceleași date dau aceeași piesă pe orice calculator. Generatorul se păstrează în piesă, iar deschiderea unei piese nu rulează niciodată un script. Vezi [Piese din fizică: generatoare](topic:engineer-generators) și [Scrierea unui generator](topic:write-a-generator).

**Schițare, desene și fabricare**

- **O schiță dintr-o fotografie.** {{ui:Operații}} › {{ui:Mai multe}} › {{ui:Schiță dintr-o fotografie…}} urmărește o imagine a unei piese plane pe un fond simplu (contur și găuri) sau un desen în cerneală, în linii, arcuri și cercuri. Dați o singură lungime, verificați previzualizarea și faceți schița. Vezi [Bazele schițării](topic:sketch-basics#a-sketch-from-a-photo).
- **Scară și împărțire pentru imprimare.** {{ui:Export}} › {{ui:Scară pentru imprimare (STL sau 3MF)…}} scalează pe fiecare axă fără să schimbe piesa, de exemplu cu o toleranță de contracție. {{ui:Export}} › {{ui:Împărțire pentru imprimare (o arhivă zip cu piese)…}} taie o piesă prea mare pentru pat în piese numerotate, unite cu știfturi, pene, cozi de rândunică, găuri pentru știfturi sau locașuri pentru magneți. Vezi [Imprimarea 3D](topic:print-3d).
- **Foi dispuse în G-code.** {{ui:Export}} › {{ui:Foi dispuse în G-code}} citește un DXF dispus și face câte un program pentru fiecare foaie, prin postul ales: întâi găurile și decupările, apoi contururile. Nu planifică intrările, ordinea tăierii sau muchiile comune. Vezi [Dispunerea pieselor plane pe foi](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Desene care fac mai multe singure.** {{ui:Foaie}} › {{ui:Automat}} alege cea mai mică foaie de format A care încape vederile, la cea mai mare scară standard până la 1:1. {{ui:Cotați găurile}} pune un semn de centru pe fiecare gaură, câte un indicator pe fiecare dimensiune și pozițiile față de colțul din stânga jos al vederii. Vezi [Realizarea unui desen](topic:drawing-pdf).

**În toate aplicațiile**

- **Limbi.** Aplicațiile vin în 54 de limbi. Cele în afara englezei sunt ciorne automate până le citește un vorbitor nativ.
- **Rânduri ale barei de instrumente.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri ale barei de instrumente}} alege Încadrare (ca înainte), 2 rânduri sau 1 rând; o bară care nu încape se derulează lateral. Panglica de funcții a PartCraft arată mare cea mai folosită unealtă și ascunde variantele într-un buton divizat.
- **Conectarea AI-ului.** Studio este centrul pentru conectarea unui asistent propriu la toate cele opt aplicații, cu permisiune doar citire, sugestie sau editare pentru fiecare aplicație. Un asistent conectat poate dimensiona o piesă dintr-o propoziție, precum un suport pentru o sarcină, să arate calculul și fiecare verificare și să o construiască; spune ce nu a verificat (concentrarea tensiunilor, oboseala, fluajul din materialele plastice). Vezi [Folosirea PartCraft cu un asistent AI](topic:use-with-ai-assistants).

### Corectate în 0.8.1

- **Blocarea cursorului în ecran complet.** Alegerea la cursor este acum limitată ca frecvență. Cauza este cea mai bună interpretare a noastră și nu a fost confirmată cu persoana care a raportat-o.
- **Limba în timpul rulării.** Studio și edițiile împachetate pot schimba limba în timpul rulării; înainte erau doar în engleză. Nu este încă testat pe toate platformele: spuneți-ne dacă limba nu se schimbă.

### Încă nu în această versiune

- Conectarea AI-ului nu este terminată: conectarea dintr-un clic în Studio, conectorul găzduit pentru AI din browser, propria cheie API în Studio și pachetul MCP publicat nu sunt promise. Studio nu are AI propriu.
- Studio nu este semnat: Windows poate avertiza, iar macOS cere clic dreapta, apoi Deschidere. Vezi [Depanare](topic:troubleshooting).
- Lanțurile de toleranțe sunt încă într-un singur sens: vezi [Lanțuri de toleranțe](topic:tolerance-stackup).
- Restul este în [Ce nu este încă realizat](topic:not-built-yet).

Modificările anterioare sunt în [Ce este nou în 0.7](topic:whats-new-0-7).
