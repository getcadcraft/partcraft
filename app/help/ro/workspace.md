---
title: Ecranul PartCraft
summary: O prezentare a fiecărei bare și a fiecărui panou: bara de instrumente și cum se schimbă, istoricul, datele despre piesă, vederea 3D, panoul de proprietăți și bara de stare.
keywords: ecran, aspect, layout, bară de instrumente, istoric, arbore de funcții, proprietăți, panou, bară de stare, interfață, ui, prezentare, ecran complet
from: 5b5bb843
---

Ecranul are cinci părți: bara de instrumente de sus, istoricul din stânga, vederea 3D din mijloc, panoul de proprietăți din dreapta și bara de stare de jos. Deasupra tuturor stă bara aplicației CadCraft.

## Bara aplicației

Bara subțire din partea de sus aparține site-ului CadCraft, nu PartCraft în sine. Afișează numele aplicației și unde rulează, un meniu de versiune, **Despre PartCraft**, butonul modului de ecran și comutatorul de temă Hârtie / Model.

- **Hârtie** înseamnă linii închise pe o foaie deschisă. **Model** înseamnă linii deschise pe un fond închis. Culorile schițelor urmează tema.
- {{ui:Setări}} (roata dințată sau {{key:Mod+,}}) are o filă {{ui:PartCraft}}: ce buton al mouse-ului rotește vederea, rotița mouse-ului sau trackpadul și relațiile din timpul schițării. Vezi [Setările PartCraft](topic:settings).
- Butonul modului de ecran, sau {{key:Ctrl+Shift+F}}, trece prin normal, ecran complet și ecran complet cu barele ascunse. Cu barele ascunse, mutați cursorul la marginea de sus (sau atingeți acolo) ca să le aduceți înapoi. {{key:Esc}} revine la normal. Această tastă este {{key:Ctrl+Shift+F}} și pe Mac, nu ⌘.

## Bara de instrumente

Bara de instrumente este grupată. Se schimbă după ce faceți, ca să încapă pe un singur rând:

| Grup | Butoane | Afișat |
|---|---|---|
| Fișier | {{ui:Nou}}, {{ui:Deschidere}}, {{ui:Salvare}}, {{ui:Export}} (un meniu) | Mereu |
| Schiță | {{ui:Schiță}} | Când nu este deschisă nicio schiță |
| Schiță | {{ui:Ieșire}}, {{ui:Linie}}, {{ui:Dreptunghi}}, {{ui:Cerc}}, {{ui:Arc}}, {{ui:Punct}}, {{ui:Linie de axă}}, {{ui:Racordare}}, {{ui:Cotare}}, {{ui:Construcție}} | Doar cât timp este deschisă o schiță |
| Funcții | {{ui:Extrudare}}, {{ui:Decupare}}, {{ui:Revoluție}}, {{ui:Gaură}}, {{ui:Liniară}}, {{ui:Circulară}}, {{ui:Oglindire}}, {{ui:Racordare}}, {{ui:Șanfren}}, {{ui:Scobire în coajă}}, {{ui:Mai multe}} (un meniu: Decupare prin revoluție, Plan, Axă, Punct, Baleiere, Loft, Înclinare) | Pe piesă, nu cât timp este deschisă o schiță sau foaia de desen. Racordarea și șanfrenul merg pe muchii drepte între două fețe plane; Scobirea în coajă și Înclinarea pe fețe plane. Baleiere și Loft nu sunt încă realizate în această versiune (au nevoie de un nucleu exact); un clic pe una dintre ele spune asta |
| Funcții | {{ui:Gata}} | Doar când alegeți muchii sau fețe pentru o racordare, un șanfren, o scobire sau o înclinare |
| Desen | {{ui:Desen}} | Pe piesă (folosibil după ce piesa are un solid) |
| Desen | {{ui:Datum}}, {{ui:Cadru}}, {{ui:Finisaj}}, {{ui:Detaliu}}, {{ui:PDF}}, {{ui:Înapoi}} | Doar pe foaia de desen |
| Ansamblu | {{ui:Ansamblu}} | Pe piesă (folosibil după ce piesa are un solid) |
| Ansamblu | {{ui:Adăugare copie}}, {{ui:Inserare}}, {{ui:Articulație}}, {{ui:Conflict}}, {{ui:Editare piesă}}, {{ui:Închidere}} | Doar într-un ansamblu |
| Ansamblu | {{ui:Înapoi}} | Cât timp editați o piesă dintr-un ansamblu |
| Editare | {{ui:Anulare}}, {{ui:Refacere}}, {{ui:Copiere}}, {{ui:Lipire}}, {{ui:Mai multe}} (un meniu: Decupare, Copiere, Lipire, Lipire în aceeași poziție, Duplicare, Ștergere, Selectare totală, Anularea selecției) | Mereu; fiecare element lucrează pe schița, istoricul sau ansamblul în care vă aflați |
| Vedere | {{ui:Potrivire}}, {{ui:Perpendicular pe}}, {{ui:Vederi}} (un meniu: Măsurare, Proprietăți de masă, Secțiune, Înclinare, Zebra, Curbură, {{ui:Plane de bază}}, apoi Izometric, Față, Înapoi, Sus, Jos, Dreapta, Stânga) | Mereu |

Treceți cu cursorul peste un buton ca să vedeți ce face și tasta lui. Un buton cenușiu nu se poate folosi acum: de exemplu butoanele de funcții cât timp este deschisă o schiță sau {{ui:Articulație}} înainte ca ansamblul să aibă două piese.

Meniul {{ui:Mai multe}} din grupul Editare listează fiecare acțiune de editare cu tasta ei. Asupra cui acționează copierea și lipirea depinde de locul în care vă aflați; vezi [Copiere, lipire și duplicare](topic:copy-paste). Tooltipul unui element cenușiu spune de ce nu poate acționa acum.

Meniul {{ui:Export}} conține {{ui:STL, pentru imprimare 3D}}, {{ui:3MF, pentru imprimare 3D}}, {{ui:STEP AP242 (solid exact)}}, {{ui:STEP AP214 (solid exact)}}, {{ui:STEP (cu fațete, nucleu de plasă)}}, {{ui:STEP AP214 (cu fațete, nucleul mesh)}}, {{ui:DXF al schiței sau al feței plane}} și {{ui:Desen (PDF): vederi, secțiune, detaliu, GD&T}}. Elementele STEP exact scriu fețele rotunde pe suprafețele lor reale; cele cu fațete le scriu ca fațete plane.

## Istoricul (stânga)

Panoul din stânga este istoricul funcțiilor piesei, lista pe care PartCraft o reconstruiește de sus în jos.

- Titlul este numele piesei („Part1” până o redenumiți).
- **Planul Față**, **Planul Sus** și **Planul Dreapta** vin primele. Faceți clic pe unul ca să-l selectați; se evidențiază în vedere.
- Sub ele sunt funcțiile în ordinea în care au fost făcute. O schiță pe care o folosește o funcție este indentată sub acea funcție.
- Un semn la capătul din dreapta al unui rând arată starea lui:

| Semn | Înseamnă |
|---|---|
| (fără) | Construit, iar schița este complet definită |
| − | O schiță sub-definită (mai poate fi mutată) |
| + | O schiță supra-definită |
| ⚠ | Construită, cu un avertisment (treceți cu cursorul ca să citiți) |
| ⚠ eroare | Funcția a eșuat. Treceți cu cursorul ca să citiți de ce, sau faceți clic pe ea |
| ⚠ nu este construită | Funcția are nevoie de alta care a eșuat sau este oprită |
| dezactivată | Suprimată |

- Fiecare funcție arată numărul ei principal după nume, cum ar fi „25 mm” pentru o extrudare sau „Ø6.6 thru” pentru o gaură. Faceți dublu clic pe număr sau apăsați {{key:F2}} pe rând ca să îl schimbați chiar acolo. Vezi [Schimbarea dimensiunilor](topic:change-sizes).
- Faceți clic pe o funcție ca s-o editați în dreapta. Faceți dublu clic pe o schiță ca s-o deschideți.
- Când derulați înapoi, un rând **Bară de derulare înapoi · derulare înainte** stă în listă. Funcțiile de sub el sunt cenușii și nu sunt construite.
- Cu un rând selectat, {{key:Up}} și {{key:Down}} trec între rânduri, iar {{key:Alt+Up}} / {{key:Alt+Down}} mută chiar funcția, acolo unde istoricul permite.

Într-un ansamblu, același panou listează în schimb **Piese** (prima este marcată „fixată”) și **Articulații**.

### Date despre piesă

Sub istoric, caseta **Piesă** listează **Volumul** solidului, **Aria suprafeței**, **Dimensiunea (X × Y × Z)**, **Găuri străbătute**, **Corpuri**, **Triunghiuri**, numărul de **Funcții** și câte **Eșuează**. Volumele și ariile sunt ale solidului cu fațete construit de nucleul mesh, puțin sub valoarea reală pentru forme rotunde (vezi [Funcțiile și opțiunile lor](topic:features#curves-resolution)).

Într-un ansamblu, caseta are titlul **Ansamblu**: Piese, Instanțe, Articulații, Nelegate și Interferență.

## Vederea 3D (mijloc)

Vederea arată solidul, planele de bază și orice schiță încă nefolosită de o funcție.

Planele de bază sunt desenate complet cât timp piesa este goală. Odată ce are un solid, se retrag: desenate estompat, ca să nu acopere piesa, iar clicurile trec prin ele spre piesă. Revin complet cât timp alegeți unde să schițați ({{ui:Schiță}} fără nimic ales) și când selectați unul în istoric. {{ui:Vederi}} › {{ui:Plane de bază}} le ascunde complet; tot se arată cât timp alegeți unde să schițați. PartCraft reține această alegere.

- Trageți ca să rotiți piesa, trageți cu clic dreapta sau cu clic de mijloc ca să panoramați, derulați rotița ca să măriți la cursor. Detalii în [Taste și mouse](topic:keyboard).
- Treceți cu cursorul peste o față, muchie sau plan ca să se lumineze. Faceți clic ca să-l alegeți. Fețele se evidențiază întregi, iar muchiile se desenează și se aleg întregi. {{key:Shift}}+clic adună mai multe muchii sau fețe. Rămân marcate.
- Cubul de vizualizare din dreapta sus se rotește odată cu piesa: faceți clic pe o față, muchie sau colț ca să priviți de acolo, trageți-l ca să rotiți, iar butonul casă revine la început. Vezi [Cubul de vizualizare](topic:view-cube).
- O extrudare selectată arată o săgeată portocalie pe fața ei de capăt, iar o revoluție o săgeată curbă la capătul rotirii: trageți-o ca să schimbați adâncimea sau unghiul ori scrieți în caseta de lângă ea. Vezi [Schimbarea dimensiunilor](topic:change-sizes#drag-it-in-the-view).
- Când piesa este goală, o casetă cu titlul **Începeți o piesă** listează primii pași.
- Lăsați un fișier `.partcraft.json` sau `.partcraft-asm.json` oriunde pe vedere ca să-l deschideți. Un fișier `.step`, `.stp`, `.stl`, `.obj`, `.3mf` sau `.3dm` lăsat acolo se deschide ca un corp solid.

### Cât timp alegeți muchii sau fețe

După {{ui:Racordare}}, {{ui:Șanfren}} sau {{ui:Scobire în coajă}} fără nimic ales (sau {{ui:Alegere muchii}} pe o astfel de funcție), piesa se arată cum era înainte de acea funcție. Faceți clic pe muchii sau fețe ca să le adăugați sau să le scoateți; marcajele arată ce este inclus. {{ui:Gata}} sau {{key:Esc}} încheie. Vezi [Rotunjire, teșire și golire](topic:fillet-chamfer-shell).

### Pe foaia de desen

{{ui:Desen}} înlocuiește vederea 3D cu foaia de desen A3. Rotița mărește, trăgerea cu clic dreapta sau de mijloc panoramează, iar {{key:F}} încadrează. Vezi [Realizarea unui desen](topic:drawing-pdf).

### Cât timp este deschisă o schiță

Vederea se întoarce să privească drept spre planul schiței, iar un strat 2D de schiță apare deasupra. Piesa arată doar funcțiile făcute înainte de această schiță. O fâșie din stânga sus arată eticheta de stare a schiței („Complet definită”, „Sub-definită · 3 grade de libertate” și așa mai departe) și numele ei, cum ar fi „Sketch2 pe o față a Extrude1”.

## Panoul de proprietăți (dreapta)

Panoul din dreapta arată ce este selectat, iar titlul lui îl numește:

- **Piesă** (nimic selectat): **Numele** piesei și setarea **Curbe**.
- Un plan: un buton {{ui:Schiță pe el}}.
- O **Față**: ce fel este (Față plană, Cilindru cu raza și axa lui, Con, Sferă sau Tor), aria ei, ce funcție a făcut-o și, pentru o față plană, {{ui:Schiță pe această față}}, {{ui:Perpendicular pe}}, {{ui:Export față ca DXF}}, {{ui:Extrudare din ea}}, {{ui:Tăiere în ea}} și {{ui:Gaură aici}} (vezi [Trage sau împinge o față întreagă](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- O **Muchie**: felul ei (dreaptă, un cerc cu centrul și raza lui, sau o curbă), lungimea și cele două fețe între care se află (cum ar fi „fața de capăt a Extrude1 și latura Extrude1”), cu butoanele {{ui:Racordare}} și {{ui:Șanfren}}.
- Mai multe muchii sau fețe alese cu {{key:Shift}}: câte sunt, cu {{ui:Racordare}} și {{ui:Șanfren}} pentru muchii și cu {{ui:Golire}}.
- O funcție: numerele și opțiunile ei, cotele schiței ei, apoi {{ui:Suprimare}}, {{ui:Derulare înapoi până aici}}, {{ui:Mutare în sus}}, {{ui:Mutare în jos}}, {{ui:Ștergere}} și **Numele** ei.
- O schiță deschisă: starea ei, relațiile pe care le puteți adăuga la selecție, lista relațiilor și a cotelor, **Adăugare după coordonate**, și {{ui:Ieșire din schiță}}, {{ui:Potrivire}} și {{ui:Export ca DXF}}.
- Pe foaia de desen: setările secțiunii și detaliului sau simbolul GD&T selectat.
- Într-un ansamblu: ansamblul, piesa selectată sau articulația selectată.

Fiecare casetă de număr intră în vigoare când apăsați {{key:Enter}} sau {{key:Tab}}, sau când faceți clic în altă parte. Piesa se reconstruiește imediat; nu există buton OK. Folosiți {{key:Mod+Z}} ca să reveniți.

## Bara de stare (jos)

- În stânga, coordonatele cursorului în schiță (doar cât timp este deschisă o schiță).
- În mijloc, mesaje: ce urmează să faceți și de ce a fost refuzat ceva. Citiți-le când nu pare să se întâmple nimic.
- Spre dreapta, eticheta nucleului: mereu „nucleul mesh” în această versiune. Treceți cu cursorul peste ea ca să vedeți ce înseamnă. Vezi [Nucleul mesh](topic:solid-kernels).
- În dreapta, o etichetă: „Se reconstruiește…” cât timp piesa se reconstruiește, apoi „Reconstruită în … ms” când totul este în regulă, sau „1 funcție eșuează”. Într-un ansamblu spune „Plasat în … ms” sau numără problemele articulațiilor.

Vezi și [Pornirea unui manual în Illustrate](topic:illustrate): spațiul de lucru care face manuale de ansamblu din piese și ansambluri.

## Pe un ecran îngust

Până la 760 de pixeli lățime, cum este pe un telefon, vederea ocupă ecranul: bara de instrumente este un singur rând care se derulează lateral, iar panourile se deschid ca foi dintr-o bară de jos. {{ui:Instrumente}} ascunde bara de instrumente, iar {{ui:Mutare}} o pune jos. Vezi [Trackpad, atingere și ecrane mici](topic:trackpad-and-touch).
