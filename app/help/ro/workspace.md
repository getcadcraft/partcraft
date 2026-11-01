---
title: Ecranul PartCraft
summary: Un tur al fiecărei bare și panou: bara de instrumente și cum se schimbă, istoricul, faptele piesei, vizualizarea 3D, panoul de proprietăți și bara de stare.
keywords: ecran, aspect, bară de instrumente, istoric, arbore de operații, proprietăți, panou, bară de stare, interfață, ui, tur, ecran complet
from: 7394fc49
---

Ecranul are cinci părți: bara de instrumente din partea de sus, istoricul din stânga, vizualizarea 3D în mijloc, panoul de proprietăți din dreapta și bara de stare de-a lungul de jos. Deasupra tuturor se află bara aplicației CadCraft.

## Bara aplicației

Bara subțire din partea de sus aparține site-ului CadCraft, nu PartCraft. Arată numele aplicației și unde rulează, un meniu de versiuni, **Despre PartCraft**, butonul modului de ecran și comutatorul temei Hârtie / Model.

- **Hârtie** înseamnă linii întunecate pe o foaie luminoasă. **Model** înseamnă linii luminoase pe un fundal întunecat. Culorile schiței urmează tema.
- {{ui:Settings}} (roata dințată sau {{key:Mod+,}}) are o filă {{ui:PartCraft}}: ce buton al mouse-ului rotește vizualizarea, roata mouse-ului sau touchpad-ul, și relațiile la schițare. Vezi [Setările PartCraft](topic:settings).
- Butonul modului de ecran sau {{key:Ctrl+Shift+F}} parcurge normal, ecran complet și ecran complet cu barele ascunse. Cu barele ascunse, mutați cursorul la marginea de sus (sau atingeți acolo) ca să le aduceți înapoi. {{key:Esc}} revine la normal. Această tastă este {{key:Ctrl+Shift+F}} și pe Mac, nu ⌘.

## Bara de instrumente

Bara de instrumente este grupată. Se schimbă după ce se face, ca să încapă pe un rând:

| Grup | Butoane | Afișat |
|---|---|---|
| Fișier | {{ui:New}}, {{ui:Open}}, {{ui:Save}}, {{ui:Export}} (un meniu) | Mereu |
| Schiță | {{ui:Sketch}} | Când nu este deschisă nicio schiță |
| Schiță | {{ui:Exit}}, {{ui:Line}}, {{ui:Rectangle}}, {{ui:Circle}}, {{ui:Arc}}, {{ui:Point}}, {{ui:Centerline}}, {{ui:Fillet}}, {{ui:Dimension}}, {{ui:Construction}} | Doar cât timp este deschisă o schiță |
| Operații | {{ui:Extrude}}, {{ui:Cut}}, {{ui:Revolve}}, {{ui:Hole}}, {{ui:Linear}}, {{ui:Circular}}, {{ui:Mirror}}, {{ui:Fillet}}, {{ui:Chamfer}}, {{ui:Shell}}, {{ui:More}} (un meniu: Decupare prin revoluție, Plan, Axă, Punct, Baleiere, Loft, Înclinare) | Pe piesă, nu cât timp este deschisă o schiță sau desenul. Racordarea și teșirea funcționează pe muchii drepte între două fețe plane; Scobirea și Înclinarea pe fețe plane. Baleierea și Loftul nu sunt încă realizate în această versiune (au nevoie de un nucleu exact); un clic pe una spune asta |
| Operații | {{ui:Done}} | Doar cât timp se aleg muchii sau fețe pentru o racordare, teșire, scobire sau înclinare |
| Desen | {{ui:Drawing}} | Pe piesă (utilizabil când piesa are un solid) |
| Desen | {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Back}} | Doar pe foaia de desen |
| Ansamblu | {{ui:Assembly}} | Pe piesă (utilizabil când piesa are un solid) |
| Ansamblu | {{ui:Add copy}}, {{ui:Insert}}, {{ui:Joint}}, {{ui:Clash}}, {{ui:Edit part}}, {{ui:Close}} | Doar într-un ansamblu |
| Ansamblu | {{ui:Back}} | Cât timp se editează o piesă dintr-un ansamblu |
| Editare | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} (un meniu: Decupare, Copiere, Lipire, Lipire în aceeași poziție, Duplicare, Ștergere, Selectare totală, Anularea selecției) | Mereu; fiecare element lucrează pe schița, istoricul sau ansamblul în care se află |
| Vizualizare | {{ui:Fit}}, {{ui:Normal to}}, {{ui:Views}} (un meniu: Măsurare, Proprietăți de masă, Secțiune, Înclinare, Zebră, Curbură, {{ui:Base planes}}, apoi Izometric, Din față, Din spate, De sus, De jos, Din dreapta, Din stânga) | Mereu |

Treceți cursorul peste un buton ca să vedeți ce face și tasta sa. Un buton estompat nu poate fi folosit acum: de exemplu butoanele de operații cât timp este deschisă o schiță, sau {{ui:Joint}} înainte ca ansamblul să aibă două piese.

Meniul {{ui:More}} din grupul Editare listează fiecare acțiune de editare cu tasta sa. Asupra căror lucruri acționează copierea și lipirea depinde de context; vezi [Copiere, lipire și duplicare](topic:copy-paste). Sfatul unui element estompat spune de ce nu poate acționa acum.

Meniul {{ui:Export}} conține {{ui:STL, for 3D printing}}, {{ui:3MF, for 3D printing}}, {{ui:STEP AP242 (exact solid)}}, {{ui:STEP AP214 (exact solid)}}, {{ui:STEP (faceted, mesh kernel)}}, {{ui:STEP AP214 (faceted, mesh kernel)}}, {{ui:DXF of the sketch or flat face}} și {{ui:Drawing (PDF): views, section, detail, GD&T}}. Cele două elemente STEP exacte sunt estompate: nu sunt încă realizate în această versiune, deci folosiți {{ui:STEP (faceted, mesh kernel)}}.

## Istoricul (stânga)

Panoul din stânga este istoricul operațiilor piesei, lista pe care o reconstruiește PartCraft de sus în jos.

- Titlul este numele piesei („Part1” până o redenumiți).
- **Planul din față**, **Planul de sus** și **Planul din dreapta** vin primele. Faceți clic pe unul ca să îl selectați; se evidențiază în vizualizare.
- Sub ele sunt operațiile, în ordinea în care au fost făcute. O schiță folosită de o operație este indentată sub ea.
- Un indicator la capătul din dreapta al unui rând spune starea sa:

| Indicator | Înseamnă |
|---|---|
| (niciunul) | Construit, iar o schiță este complet definită |
| − | O schiță insuficient definită (se mai poate mișca) |
| + | O schiță supradefinită |
| ⚠ | Construit, cu avertisment (treceți cursorul pentru a citi) |
| ⚠ eroare | Operația a eșuat. Treceți cursorul pentru motiv sau faceți clic pe ea |
| ⚠ nerealizată | Operația are nevoie de alta care a eșuat sau este oprită |
| oprit | Suprimată |

- Fiecare operație arată numărul său principal după nume, cum ar fi „25 mm” pentru o Extrudare sau „Ø6.6 thru” pentru o gaură. Faceți dublu clic pe număr sau apăsați {{key:F2}} pe rând ca să îl schimbați chiar acolo. Vezi [Schimbarea dimensiunilor](topic:change-sizes).
- Faceți clic pe o operație ca să o editați în dreapta. Faceți dublu clic pe o schiță ca să o deschideți.
- Când se derulează înapoi, un rând **Bară de derulare · derulare înainte** apare în listă. Operațiile de sub el sunt estompate și nu sunt construite.
- Cu un rând focalizat, {{key:Up}} și {{key:Down}} trec între rânduri, iar {{key:Alt+Up}} / {{key:Alt+Down}} mută chiar operația, acolo unde istoricul permite.

Într-un ansamblu, același panou listează în schimb **Piese** (prima este marcată „fixată”) și **Articulații**.

### Faptele piesei

Sub istoric, caseta **Piesă** listează **Volum**, **Aria suprafeței**, **Dimensiune (X × Y × Z)**, **Găuri străpunse**, **Corpuri**, **Triunghiuri**, numărul de **Operații** și câte sunt **Eșuate**. Volumele și ariile sunt ale solidului cu fațete construit de nucleul de plasă, puțin sub valoarea reală pentru forme rotunde (vezi [Operații și opțiunile lor](topic:features#curves-resolution)).

Într-un ansamblu, caseta are titlul **Ansamblu**: Piese, Instanțe, Articulații, Neîmbinate și Interferență.

## Vizualizarea 3D (mijloc)

Vizualizarea arată solidul, planele de bază și orice schiță nefolosită încă de o operație.

Planele de bază sunt desenate complet cât timp piesa este goală. Odată ce are un solid, se retrag: desenate estompat, ca să nu acopere piesa, iar clicurile trec prin ele către piesă. Revin complet cât timp se alege unde să se schițeze ({{ui:Sketch}} fără nimic ales) și când se selectează unul în istoric. {{ui:Views}} › {{ui:Base planes}} le ascunde complet; tot se arată cât timp se alege unde să se schițeze. PartCraft ține minte această alegere.

- Trageți pentru a roti piesa, trageți cu butonul din dreapta sau cu cel din mijloc pentru a panoramă, rotiți rotița pentru zoom la cursor. Detalii în [Taste și mouse](topic:keyboard).
- Treceți cursorul peste o față, muchie sau plan ca să îl vedeți luminat. Faceți clic pentru a-l alege. Fețele se evidențiază întregi, iar muchiile sunt desenate și alese întregi. {{key:Shift}}+clic adună mai multe muchii sau fețe. Rămân marcate.
- ViewCube-ul din dreapta sus se rotește odată cu piesa: faceți clic pe o față, muchie sau colț ca să priviți din acel loc, trageți-l ca să îl rotiți, iar butonul casă revine la început. Vezi [ViewCube](topic:view-cube).
- O Extrudare selectată arată o săgeată portocalie pe fața sa de capăt, iar o Revoluție o săgeată curbă la capătul rotirii sale: trageți-le ca să schimbați adâncimea sau unghiul, sau tastați în caseta de lângă ele. Vezi [Schimbarea dimensiunilor](topic:change-sizes#drag-it-in-the-view).
- Când o piesă este goală, o casetă cu titlul **Începeți o piesă** listează primii pași.
- Trageți un fișier `.partcraft.json` sau `.partcraft-asm.json` și plasați-l oriunde pe vizualizare ca să îl deschideți. Un fișier `.step`, `.stp`, `.stl`, `.obj`, `.3mf` sau `.3dm` plasat acolo se deschide ca un corp solid.

### Cât timp se aleg muchii sau fețe

După {{ui:Fillet}}, {{ui:Chamfer}} sau {{ui:Shell}} fără nimic ales (sau {{ui:Pick edges}} pe o astfel de operație), piesa apare așa cum era înainte de acea operație. Faceți clic pe muchii sau fețe ca să adăugați sau să scoateți; semnele lor arată ce este înăuntru. {{ui:Done}} sau {{key:Esc}} termină. Vezi [Rotunjire, teșire și golire](topic:fillet-chamfer-shell).

### Pe foaia de desen

{{ui:Drawing}} înlocuiește vizualizarea 3D cu foaia de desen A3. Rotița mărește, trageți cu butonul din dreapta sau cel din mijloc pentru panoramă, iar {{key:F}} potrivește. Vezi [Realizarea unui desen](topic:drawing-pdf).

### Cât timp o schiță este deschisă

Vizualizarea se orientează drept spre planul schiței, iar un strat 2D de schiță apare deasupra. Piesa arată doar operațiile făcute înainte de această schiță. O fâșie din colțul stânga sus arată starea schiței („Complet definită”, „Insuficient definită · 3 grade de libertate” și așa mai departe) și numele său, cum ar fi „Sketch2 on a face of Extrude1”.

## Panoul de proprietăți (dreapta)

Panoul din dreapta arată ce este selectat, iar titlul său îl numește:

- **Piesă** (nimic selectat): **Nume** și setarea **Curbe**.
- Un plan: un buton {{ui:Sketch on it}}.
- O **Față**: ce tip este (Față plană, Cilindru cu raza și axa sa, Con, Sferă sau Tor), aria sa, ce operație a creat-o și, pentru o față plană, {{ui:Sketch on this face}}, {{ui:Normal to}}, {{ui:Export face as DXF}}, {{ui:Extrude from it}}, {{ui:Cut into it}} și {{ui:Hole here}} (vezi [Tragerea sau împingerea unei fețe întregi](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- O **Muchie**: tipul său (dreaptă, un cerc cu centrul și raza sa, sau o curbă), lungimea și cele două fețe între care se află (cum ar fi „fața de capăt Extrude1 și latura Extrude1”), cu butoanele {{ui:Fillet}} și {{ui:Chamfer}}.
- Mai multe muchii sau fețe alese cu {{key:Shift}}: câte sunt, cu {{ui:Fillet}} și {{ui:Chamfer}} pentru muchii, și {{ui:Clear}}.
- O operație: numerele și opțiunile sale, cotele schiței sale, apoi {{ui:Suppress}}, {{ui:Roll back to here}}, {{ui:Move up}}, {{ui:Move down}}, {{ui:Delete}} și **Nume**-ul său.
- O schiță deschisă: starea sa, relațiile care pot fi adăugate la selecție, lista de relații și cote, **Adăugare prin coordonate** și {{ui:Exit sketch}}, {{ui:Fit}} și {{ui:Export as DXF}}.
- Pe foaia de desen: setările de secțiune și detaliu, sau simbolul GD&T selectat.
- Într-un ansamblu: ansamblul, piesa selectată sau articulația selectată.

Fiecare casetă de număr se aplică la apăsarea {{key:Enter}} sau {{key:Tab}}, sau când se face clic în afară. Piesa se reconstruiește imediat; nu există buton OK. Folosiți {{key:Mod+Z}} ca să reveniți.

## Bara de stare (jos)

- În stânga, coordonatele cursorului în schiță (doar cât timp este deschisă o schiță).
- La mijloc, mesaje: ce de făcut în continuare și de ce a fost refuzat ceva. Citiți-le când pare că nu se întâmplă nimic.
- Aproape de dreapta, indicatorul nucleului: mereu „Nucleu de plasă” în această versiune. Treceți cursorul peste el ca să vedeți ce înseamnă. Vezi [Nucleul de plasă](topic:solid-kernels).
- În dreapta, un indicator: „Se reconstruiește…” cât timp piesa se reconstruiește, apoi „Reconstruit în … ms” când totul este bine, sau „1 operație eșuată”. Într-un ansamblu spune „Plasat în … ms” sau numără problemele de articulație.

Vezi și [Pornirea unui manual în Ilustrare](topic:illustrate): spațiul de lucru care face manuale de ansamblu din piese și ansambluri.

## Pe un ecran îngust

Până la 760 de pixeli lățime, cum ar fi pe telefon, vizualizarea păstrează ecranul: bara de instrumente este pe un rând care derulează lateral, iar panourile se deschid ca foi dintr-o bară de jos. {{ui:Tools}} ascunde bara de instrumente, iar {{ui:Move}} o pune jos. Vezi [Touchpad, atingere și ecrane mici](topic:trackpad-and-touch).
