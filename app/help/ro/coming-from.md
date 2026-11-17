---
title: Venind de la alt modelator parametric
summary: Cum se mapează obiceiurile modelatoarelor parametrice de piese pentru desktop în PartCraft și diferențele care îi încurcă pe utilizatorii experimentați în prima oră.
keywords: migrare, familiar, arbore de operații, arbore de proiectare, cotă inteligentă, extrudare de adaos, extrudare de tăiere, asistent gaură, asociere, detectarea interferențelor, bară de derulare, gestionar de proprietăți, mouse, diferențe
from: fbacaee1
---

Dacă proiectați piese în SolidWorks, majoritatea ideilor din PartCraft vă vor fi familiare: schițe pe planurile Front, Top și Right, relații și cote inteligente, un istoric al operațiilor cu o bară de derulare și ansambluri plasate prin asociere. Modul în care ajungeți la ele diferă în unele locuri, iar această primă versiune face mai puțin. Această pagină vă pune în corespondență obiceiurile și listează surprizele.

## Obiceiuri, puse în corespondență

| Sunteți obișnuit cu | În PartCraft |
|---|---|
| Arborele de proiectare din stânga | Istoricul din stânga: planuri, apoi operații, schițele indentate sub operația care le folosește |
| Planurile Front, Top și Right | Aceleași trei, prin origine. Front este planul XY, Top este XZ, Right este YZ; Y arată în sus |
| Schiță pe un plan sau o față, apoi colțul de confirmare pentru a ieși | {{ui:Schiță}} ({{key:S}}) pe un plan selectat sau pe o față plană; {{ui:Ieșire}} sau {{key:Esc}} până se închide |
| Cotă inteligentă | {{ui:Cotare}} ({{key:D}}). Dați clic pe unu sau două elemente, apoi unde trebuie să ajungă cifra. Locul în care o plasați alege orizontală, verticală sau aliniată |
| Adăugare relații în panoul de proprietăți | Selectați elemente, apoi butoanele de relație din panoul din dreapta (Coincident, Orizontal, Paralel, Tangent, Egal și așa mai departe) |
| Relații automate în timpul schițării | Agățările adaugă relații de coincidență, punct-pe-curbă, orizontale și verticale |
| Culorile schiței albastru / negru / roșu | Aceeași idee: albastru sub-definit, negru complet definit, roșu supra-definit. Cipul arată gradele de libertate rămase |
| Linie de axă pentru revoluții | {{ui:Linie de axă}} ({{key:N}}); {{ui:Revoluție}} folosește prima linie de axă, dacă nu alegeți altă axă |
| Racordare în schiță | {{ui:Racordare}} ({{key:F}}) într-o schiță: dați clic pe colț, tastați raza |
| Comutarea geometriei de construcție | {{ui:Construcție}} ({{key:Q}}) |
| Adaos extrudat | {{ui:Extrudare}}: Pe adâncime, Plan median, Până la față / următoarea / vârf, Decalaj de la față, a doua direcție, conicitate, un singur contur (Alegere regiuni) |
| Decupare extrudată | {{ui:Decupare}}: pornește ca Prin toată grosimea; treceți la Pe adâncime pentru un buzunar |
| Adaos sau decupare prin revoluție | {{ui:Revoluție}} / {{ui:Mai multe}} › {{ui:Tăiere prin revoluție}} |
| Plan, axă sau punct de referință | {{ui:Mai multe}} › {{ui:Plan}}, {{ui:Axă}}, {{ui:Punct}} (vezi [Planuri, axe și puncte de referință](topic:reference-geometry)) |
| Adaos sau decupare prin baleiere sau loft, înclinare | {{ui:Mai multe}} › {{ui:Înclinare}} pe fețe plane (vezi [Baleiere, loft și înclinare](topic:sweep-loft-draft)). {{ui:Baleiere}} și {{ui:Loft}} nu sunt realizate încă în această versiune (au nevoie de un nucleu exact) |
| Asistentul pentru găuri | {{ui:Gaură}} în fiecare punct de schiță liber: simplă, cu lamaj, cu teșire conică (90° / 82°) sau filetată ISO metrică M2–M24, prin toată grosimea sau oarbă |
| Repetiție liniară / circulară, oglindire | {{ui:Liniară}}, {{ui:Circulară}}, {{ui:Oglindire}} (operații sau întregul corp) |
| Racordare și șanfren pe muchii | {{ui:Racordare}} / {{ui:Șanfren}}: dați clic pe o muchie, {{key:Shift}}+clic pentru mai multe, apoi butonul. O singură rază; șanfrene egale, cu două distanțe sau cu distanță și unghi. În această versiune doar muchii drepte între două fețe plane, iar rotunjirile care se întâlnesc într-un colț sunt îmbinate la 45°. Rotunjiți sau teșiți muchiile curbe în schiță ({{ui:Racordare}} într-o schiță, {{key:F}}) |
| Scobire în coajă | {{ui:Scobire în coajă}}: dați clic pe fețele plane care se deschid, apoi pe buton. O singură grosime de perete |
| Deschiderea unui fișier STEP | {{ui:Deschidere}}: citit ca triunghiuri, un corp solid pe care să construiți ([Deschiderea unui fișier STEP](topic:import-step)) |
| Editarea operației, apoi OK | Dați clic pe operație; modificați cifrele din dreapta; se reconstruiește pe măsură ce tastați. Nu există OK, nu există Anulare: folosiți {{key:Mod+Z}} |
| Editarea schiței | Faceți dublu clic pe schiță în istoric |
| Reconstruire | Automată după fiecare modificare. Nu există tastă de reconstruire |
| Suprimare / anulare suprimare | {{ui:Suprimare}} / {{ui:Anulare suprimare}} în panoul din dreapta |
| Trageți bara de derulare | {{ui:Derulare înapoi până aici}} pe o operație; dați clic pe „Bara de derulare · derulare înainte” pentru a reveni |
| Trageți o operație în arbore pentru a o reordona | {{ui:Mutare în sus}} / {{ui:Mutare în jos}} sau {{key:Alt+Up}} / {{key:Alt+Down}}; refuzată, cu motivul, când ar rupe o dependență |
| Editarea cotelor făcând dublu clic pe model | Selectați operația: cotele schiței sale sunt listate în panoul din dreapta |
| Asocieri: coincidentă, concentrică, distanță, unghi | {{ui:Articulație}} ({{key:J}}): alegeți o față plană pe fiecare piesă; articulația le așază față în față. **Centrat pe** o axă acționează ca o concentrică; **Decalaj** ca o distanță; **Unghi** ca un unghi |
| Componentă fixă | Prima piesă este fixată; {{ui:Fă-o piesa fixă}} o schimbă |
| Inserare componentă | {{ui:Adăugare copie}} sau {{ui:Duplicare}} (altă copie) sau {{ui:Inserare}} (dintr-un fișier de piesă) |
| Editarea piesei în ansamblu | {{ui:Editare piesă}}, apoi {{ui:Înapoi}} |
| Detectarea interferențelor | {{ui:Conflict}} |
| Mutarea unei componente pentru a vedea mișcarea | Trageți cursorul de unghi sau decalaj al unei articulații de rotație sau glisante; {{ui:Verifică mișcarea pentru conflicte}} o parcurge. O piesă fără articulație: **Mutare manuală** (săgeți de tras sau valori tastate) |
| Măsurare / inspecție | {{ui:Vederi}}, apoi {{ui:Măsurare}} ({{key:M}}): distanțe, unghiuri, raze, arii; {{ui:Proprietăți de masă}} |
| Vedere explodată, listă de materiale | Într-un ansamblu fără nimic selectat: **Vederi explodate** și **Lista de materiale** în panoul din dreapta |
| Proprietăți de masă | Caseta **Piesă**: volum, arie a suprafeței, dimensiune, ale solidului facetat (puțin mai mic la piesele rotunde). Fără masă: nu există încă materiale |
| Salvare, Salvare ca STEP | {{ui:Salvare}} descarcă un `.partcraft.json`; {{ui:Export}} are STL, 3MF, STEP exact (AP242 sau AP214), STEP facetat, DXF și un desen PDF |
| Realizarea unui desen din piesă | {{ui:Desen}}: o foaie A3 automată cu trei vederi, izometrică, o secțiune, un detaliu, repere de referință, cadre de toleranțe geometrice și simboluri de finisare. Sunt cotate doar dimensiunile de ansamblu |
| Trageți cu butonul din mijloc pentru a roti | **Tragerea cu butonul stâng** rotește aici. Tragerea cu butonul din mijloc sau din dreapta panoramează. Rotița zoomează la indicator |
| Orientarea vederii, Normal la | Meniul {{ui:Vederi}}; {{ui:Perpendicular pe}} pentru o față, un plan sau o schiță alese |
| Zoom până la potrivire (F) | {{key:F}}, sau {{ui:Potrivire}} (într-o schiță, {{key:F}} este unealta {{ui:Racordare}}) |
| Meniuri cu clic dreapta | Niciunul. Tragerea cu butonul din dreapta panoramează; într-o schiță, clicul dreapta încheie un lanț de linii |

:::tip
Dacă mâinile dumneavoastră cunosc SolidWorks, alegeți stilul de meniu {{ui:Arborele operațiilor}} din {{ui:Setări}} › {{ui:PartCraft}} › {{ui:Meniuri, taste și mouse}}: o panglică cu filele Operații, Schiță, Suprafețe, Evaluare, Desen, Ansamblu și Vizualizare, butonul din mijloc orbitează, {{key:Shift}} și butonul din mijloc panoramează, iar butonul stâng doar alege. Vezi [Meniuri, taste și mouse](topic:menus-keys-and-mouse).
:::

## Diferențe care încurcă oamenii

**Toată schița este profilul.** Extrudarea și Revoluția folosesc fiecare buclă închisă din schiță. Nu puteți alege pentru o operație o singură regiune sau un singur contur al unei schițe. Folosiți câte o schiță pentru fiecare operație.

**Ce schiță preia o operație.** O operație folosește schița pe care tocmai ați închis-o sau pe cea selectată în istoric. Fără nimic selectat, preia cea mai nouă schiță pe care nicio operație nu o folosește încă. Dacă ați luat-o pe cea greșită, selectați schița corectă și alegeți operația din nou.

**Modificările se aplică pe măsură ce tastați.** Nu există o casetă de dialog a operației cu OK și Anulare. Fiecare cifră reconstruiește imediat, iar {{key:Mod+Z}} este calea înapoi. Lista de anulare acoperă deopotrivă modificările de schiță, operațiile și setările.

**Supra-definirea nu este lăsată niciodată să treacă neobservată.** Nu există cote conduse (de referință). O cotă pe care deja o fixează celelalte relații este raportată ca supra-definită („is already implied. Delete it.” / „este deja implicită. Ștergeți-o.”). O cotă aflată în conflict lasă geometria neatinsă și devine roșie. Ștergeți una sau anulați.

**Baleierile și loft-urile nu sunt realizate încă; racordările, șanfrenele, scobirile în coajă și înclinările au limitări.** Această versiune a PartCraft construiește fiecare piesă cu un nucleu de plasă; cipul din bara de stare spune mereu „Nucleu de plasă”. Racordările și șanfrenele funcționează pe muchii drepte între două fețe plane, iar acolo unde rotunjirile se întâlnesc într-un colț sunt îmbinate la 45°, nu îmbinate lin. Scobirile în coajă se deschid, iar înclinările se aplică doar fețelor plane. Operațiile care au nevoie de un nucleu exact rămân apăsabile, dar spun „încă nerealizat” atunci când sunt alese. Vezi [Nucleul de plasă](topic:solid-kernels) și [Ce nu este realizat încă](topic:not-built-yet).

**Două butoane numite Racordare.** Într-o schiță, {{ui:Racordare}} ({{key:F}}) rotunjește un colț al schiței. Pe piesă, {{ui:Racordare}} din grupul Operații rotunjește muchiile solide (muchii drepte între fețe plane în această versiune). Nu există baleiere sau loft în această versiune: vezi [Ce nu este realizat încă](topic:not-built-yet).

**Găurile au nevoie de puncte libere.** {{ui:Gaură}} forează în punctele create cu unealta {{ui:Punct}}. Centrele cercurilor și capetele liniilor nu contează.

**Prin toată grosimea este doar pentru decupări.** Un adaos are nevoie de o adâncime. Nu există încă condiții de capăt „până la vârf / suprafață / următoarea”.

**Solidul este facetat.** Nucleul de plasă construiește fețele rotunde din fațete plane, deci vederea, volumele și exporturile STL și 3MF sunt toate făcute din ele: **Curbe** din panoul piesei le face mai fine. Exportul STEP exact nu este așa: scrie fețele rotunde pe suprafețele lor reale.

**Doar milimetri.** Încă nu există o setare pentru inci. Înmulțiți dimensiunile în inci cu 25.4 când le tastați.

**Y este în sus.** Planul Front vă privește, iar Top privește în jos spre piesă, așa cum vă așteptați, dar axa globală în sus este Y. Exporturile STL, 3MF și STEP exact sunt rotite cu Z în sus; STEP-ul facetat păstrează Y în sus.

**Asocierile sunt între fețe, nu între perechi de geometrie.** O articulație pornește întotdeauna de la două fețe plane puse față în față. Pentru un știft într-o gaură, alegeți fața plană din jurul găurii și umărul știftului, apoi setați **Centrat pe** la axa găurii și la axa de revoluție a știftului. Piesele nelegate de articulații rămân unde au fost inserate; nu le puteți trage. Articulațiile dintr-o buclă nu sunt rezolvate.

**Salvarea este o descărcare.** Nu există un fișier pe care să-l suprascrieți mereu. Fiecare salvare este un fișier nou în dosarul dumneavoastră de descărcări. Denumiți mai întâi piesa și păstrați fișierele într-un dosar de proiect.

**Fără meniuri contextuale, fără file de gestionare a comenzilor.** Totul se află pe bara de instrumente și în panoul din dreapta, iar bara de instrumente se schimbă după ce faceți: uneltele de schiță apar doar într-o schiță, iar uneltele de ansamblu doar într-un ansamblu.

**Tastele sunt litere simple într-o schiță.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} și {{key:S}} aleg unelte fără modificator. Vezi [Taste și mouse](topic:keyboard).
