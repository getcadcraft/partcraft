---
title: Noutăți în 0.8 și 0.8.1
summary: PartCraft 0.8 adaugă analiză live în timpul editării, verificarea Ce cedează primul, studii de curgere și contact cu fișiere de intrare pentru un solver extern, studii de mișcare pentru ansambluri, un spațiu de lucru Suprafețe pentru suprafețe libere, piese dimensionate din fizică în spațiul de lucru Inginer, schiță dintr-o fotografie, exporturi pentru imprimare, foi dispuse în G-code și desene care cotează găurile. 0.8.1 remediază blocarea cursorului în ecran complet.
keywords: noutăți, ce este nou, note de versiune, jurnal de modificări, modificări, 0.8, 0.8.1, versiune, funcții noi, analiză live, actualizare în timpul editării, se rupe, ce cedează primul, factor de încărcare, neliniar, curgere, deformație plastică, contact, calculix, studiu de mișcare, joc, suprafețe, nurbs, netezire, carenă, zebra, inginer, generator, corp generat, schiță dintr-o fotografie, scalare pentru imprimare, împărțire pentru imprimare, contracție, foi dispuse, g-code, desen, cotare găuri, asistent, mcp, limbi, rânduri ale barei de instrumente
from: 62e4dce2
---

Iată ce s-a schimbat în PartCraft 0.8 și 0.8.1, comparativ cu 0.7. Simularea răspunde în timp ce editați și vă spune ce cedează primul, ansamblurile primesc studii de mișcare, iar noile spații de lucru creează suprafețe libere și piese dimensionate din fizică. 0.8.1 este o versiune mică de remediere.

## Noutăți

### Simulare

- **Actualizare în timpul editării.** Bifați {{ui:Update while I edit}} în blocul Rezolvare și răspunsurile urmăresc modificările. Schimbați o cotă, o încărcare sau materialul și un răspuns rapid, obținut cu elemente de patru ori mai mari, apare imediat; când vă opriți circa o secundă, răspunsul rafinat propriu studiului îl înlocuiește. Rezultatele indică ce răspuns vedeți. Pentru o consolă din oțel, răspunsul rapid s-a încadrat în 1 % la deformație și în circa 4 % la tensiune față de cel rafinat. Vezi [Verificarea tensiunii și a deformației](topic:simulation#update-while-you-edit-live).
- **Ce cedează primul.** Pentru un studiu static sau de flambaj, {{ui:What breaks first?}} din blocul **Rupere** scalează încărcările până când piesa cedează. Listează, de la cel mai grav, factorul de încărcare până la prima curgere (cu un marcaj roșu acolo unde tensiunea atinge vârful) și factorul de încărcare până la flambaj. Un factor sub 1 înseamnă că piesa cedează deja sub sarcina aplicată, iar Probleme afișează o eroare. Factorii provin dintr-un studiu liniar, deci sunt la fel de buni ca acesta. Vezi [Verificarea tensiunii și a deformației](topic:simulation#find-out-what-breaks-first-break-it).
- **Curgere și contact.** Încă două tipuri de studiu: unul neliniar, în care materialul urmează dreapta sa până la tensiunea de curgere și apoi o pantă mai redusă, cu deformația plastică reprezentată grafic, și unul de contact, în care piese separate se împing una pe alta (fără frecare) sau rămân lipite (legate). Un pas de încărcare care nu se poate stabiliza sau piese care se afundă prea mult una în alta apar în panoul Probleme. Frecarea, alunecarea mare, rotațiile mari, deformațiile mari și oboseala nu sunt rezolvate. Vezi [Verificarea tensiunii și a deformației](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Fișiere pentru CalculiX.** {{ui:Export}} › {{ui:Fișier de intrare CalculiX (.inp)}} salvează studiul pentru CalculiX, un program separat pe care îl instalați și îl rulați singur; {{ui:Export}} › {{ui:Rezultate CalculiX (.frd)}} citește fișierul de rezultate înapoi pe aceeași plasă. PartCraft nu pornește niciodată acel program și anunță dacă piesa s-a schimbat după salvarea fișierului de intrare.

### Ansambluri

- **Studii de mișcare.** {{ui:Assembly}} › {{ui:Motion}} acționează valoarea unei singure îmbinări pe o durată pe care o dați (viteză constantă, accelerată, sinusoidală sau dus și întors), așază ansamblul la fiecare pas cu îmbinările și buclele închise și raportează ce se ciocnește și cât de aproape ajung piesele. {{ui:Adăugare punct}} trasează poziția, viteza și accelerația unui punct, valoarea îmbinării și jocul în funcție de timp; {{ui:Save CSV}} și {{ui:Save plot}} le scriu în fișiere. După {{ui:Run}}, pas cu pas prin bara de rulare mută ansamblul la orice pas. Setările studiului se salvează în fișierul ansamblului. Viteza și accelerația provin din pozițiile înregistrate, deci folosiți mai mulți pași dacă un vârf abrupt apare prea mic. Vezi [Verificarea unui ansamblu la ciocniri și mișcare](topic:check-assembly#a-motion-study).

### Suprafețe și piese din fizică

- **Un spațiu de lucru Suprafețe.** Alegeți {{ui:Surfaces}} în lista {{ui:Workspace}} pentru curbe și suprafețe NURBS lângă piesă: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} și {{ui:Zebra}}, cu continuitate (G0, G1 sau G2) măsurată pe suprafețele exacte, iar o muchie mai slabă decât ați cerut apare în Probleme, cu o remediere Match. {{ui:Fair}} măsoară liniile carenei pentru inflexiuni și salturi de curbură și reconstruiește cele nenetede în limita toleranței dvs. Suprafețele se salvează în fișierul piesei și nu modifică operațiile piesei. Vezi [Suprafețe libere (NURBS)](topic:nurbs-surfaces).
- **Spațiul de lucru Inginer.** Alegeți {{ui:Engineer}} în lista spațiilor de lucru, alegeți un generator și apăsați {{ui:New}}: un script dimensionează o piesă din ce trebuie să facă (căldură de transferat, debite, presiune, material, procesul de imprimare) cu formule din manuale și o construiește, apoi returnează numerele folosite împreună cu sursele lor, verificările de fabricație și fișiere pentru instrumentele de analiză. Aceleași date de intrare dau aceeași piesă pe orice calculator. Generatorul se păstrează în piesă, iar deschiderea unei piese nu rulează niciodată un script. Vezi [Piese din fizică: generatoare](topic:engineer-generators) și [Scrierea unui generator](topic:write-a-generator).

### Schițare, desene și fabricare

- **O schiță dintr-o fotografie.** {{ui:Features}} › {{ui:More}} › {{ui:Schiță dintr-o fotografie…}} urmărește o imagine a unei piese plate pe un fond simplu (contur și găuri) sau un desen în creion, transformând-o în linii, arce și cercuri. Dați o singură lungime, verificați previzualizarea și creați schița. Vezi [Bazele schițării](topic:sketch-basics#a-sketch-from-a-photo).
- **Scalare și împărțire pentru imprimare.** {{ui:Export}} › {{ui:Scalare pentru imprimare (STL sau 3MF)…}} scalează pe fiecare axă fără să modifice piesa, de exemplu cu o toleranță de contracție. {{ui:Export}} › {{ui:Împărțire pentru imprimare (o arhivă zip cu piese)…}} taie o piesă prea mare pentru platforma dvs. în piese numerotate, unite prin știfturi, pene, cozi de rândunică, găuri pentru știfturi cilindrice sau buzunare pentru magneți. Vezi [Imprimarea 3D](topic:print-3d).
- **Foi dispuse în G-code.** {{ui:Export}} › {{ui:Foi dispuse în G-code}} citește un DXF dispus și creează un program pentru fiecare foaie prin postprocesorul ales: mai întâi găurile și decupările, apoi contururile. Nu planifică intrările în tăiere, ordinea tăierii sau muchiile comune. Vezi [Dispunerea pieselor plate pe foi](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Desene care fac mai multe singure.** {{ui:Sheet}} › {{ui:Automat}} alege cea mai mică foaie de format A care încape vederile, la cea mai mare scară standard până la 1:1. {{ui:Cotați găurile}} pune un marcaj de centru pe fiecare gaură, o indicație pentru fiecare dimensiune și pozițiile față de colțul din stânga jos al vederii. Vezi [Realizarea unui desen](topic:drawing-pdf).

### În fiecare aplicație

- **Limbi.** Aplicațiile există în 54 de limbi. Cele diferite de engleză sunt ciorne automate până când le citește un vorbitor nativ.
- **Rânduri ale barei de instrumente.** {{ui:Setări}} › {{ui:General}} › {{ui:Rânduri ale barei de instrumente}} alege Încadrare (ca înainte), 2 rânduri sau 1 rând; o bară care nu încape derulează lateral. Panglica Operații a PartCraft afișează instrumentul cel mai folosit mare și ascunde variantele după un buton divizat.
- **Conectați-vă AI-ul.** Studio este centrul pentru conectarea unui asistent propriu la toate cele opt aplicații, cu permisiune de doar citire, de sugestie sau de editare pentru fiecare aplicație. Un asistent conectat poate dimensiona o piesă dintr-o propoziție, precum un suport pentru o sarcină, poate arăta calculele și fiecare verificare și o poate construi; raportează ce nu a verificat (concentrarea tensiunilor, oboseala, fluajul în materiale plastice). Vezi [Folosirea PartCraft cu un asistent AI](topic:use-with-ai-assistants).

## Remediat în 0.8.1

- **Blocarea cursorului în ecran complet.** Selecția la plasarea cursorului este acum limitată. Cauza este cea mai bună interpretare a noastră și nu a fost confirmată cu persoana care a raportat-o.
- **Limba la rulare.** Studio și edițiile împachetate pot schimba limba în timp ce rulează; înainte erau doar în engleză. Nu este încă testat pe toate platformele: spuneți-ne dacă limba nu se schimbă.

## Nu este încă în această versiune

- Conectarea AI-ului nu este finalizată: conectarea dintr-un clic în Studio, conectorul găzduit pentru AI din browser, propria cheie API în Studio și pachetul MCP publicat nu sunt promise. Studio nu are AI propriu.
- Studio nu are semnătură de cod: Windows poate avertiza, iar macOS cere clic dreapta și apoi Deschidere. Vezi [Depanare](topic:troubleshooting).
- Lanțurile de toleranțe sunt încă doar într-o direcție: vezi [Lanțuri de toleranțe](topic:tolerance-stackup).
- Restul este listat în [Ce este încă nerealizat](topic:not-built-yet).

Modificările anterioare sunt în [Noutăți în 0.7](topic:whats-new-0-7).
