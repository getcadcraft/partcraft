---
title: Export pentru imprimare, STEP și DXF
summary: Exportați piesa ca STL sau 3MF pentru imprimare 3D, ca solid STEP exact pentru alte programe CAD și CAM, iar o schiță sau o față plană ca DXF pentru tăiere cu laser și cu jet de apă.
keywords: export, salvare ca, ifc, bim, seturi de proprietăți, stl, 3mf, imprimare 3D, slicer, step, stp, step exact, b-rep, ap242, ap214, cam, atelier mecanic, frezare, dxf, laser, jet de apă, cnc, desfășurată plană, profil, plasă, cu fațete
from: e1de71d5
---

Exporturile sunt copii în alte formate. Păstrați și fișierul `.partcraft.json`: este singurul fișier pe care PartCraft îl poate deschide din nou și edita.

Toate exporturile lucrează cu piesa de pe ecran, în milimetri. Într-un ansamblu, STL, 3MF, STEP și Desen (PDF) exportă în schimb întregul ansamblu: vezi [Lista de piese, vederi explodate și piese mobile](topic:assembly-bom-explode). Dacă nu există încă un solid: "Nu există încă un solid de exportat."

## Pentru imprimare 3D: STL sau 3MF

1. Opțional: pentru suprafețe rotunde netede, faceți clic pe spațiul gol, ca nimic să nu fie selectat, și setați **Curbe** la **Fină (128 pe rotație)** sau **Foarte fină (256 pe rotație)** în panoul din dreapta. STL și 3MF sunt întotdeauna formate din triunghiuri.
2. Alegeți {{ui:Export}}, apoi {{ui:STL, for 3D printing}} sau {{ui:3MF, for 3D printing}}.
3. Fișierul se descarcă. Bara de stare afișează, de exemplu, "Exportat Part1.stl (binar, mm, Z în sus, 1536 triunghiuri)."

Ambele formate sunt **Z în sus**, cum se așteaptă imprimantele și slicerele. Sistemul de coordonate propriu al PartCraft este Y în sus, deci exportul rotește piesa: ce indică în sus în PartCraft (perpendicular pe planul Top) indică în sus și în slicer, iar o piesă schițată pe planul Top stă plată pe platou. Setați orientarea finală în slicer, dacă este nevoie.

3MF este un format mai nou și mai mic, pe care slicerele îl citesc cu unitățile incluse. Folosiți STL dacă un program nu acceptă 3MF.

Ca să verificați mai întâi că piesa este închisă, că încape pe platoul imprimantei și că stă pe o față plană, folosiți {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}: vezi [Pregătirea unei piese pentru imprimare 3D](topic:print-3d).

## Pentru alte programe CAD: STEP

Alegeți {{ui:Export}}, apoi {{ui:STEP AP242 (exact solid)}}. Se scrie piesa ca un solid exact, în milimetri, rotit în Z în sus. Fețele rotunde sunt scrise ca cilindri, conuri, sfere și tori adevărați, cu cercuri adevărate pentru muchiile lor, astfel încât celălalt program poate alege o gaură ca gaură. Un corp deschis dintr-un fișier STEP păstrează fețele plane, cilindrii, conurile, sferele și torii din acel fișier, deci și ele ies exacte. Fețele fără o asemenea suprafață (latura unui spline, un filet modelat, un corp dintr-o plasă STL, OBJ sau 3MF, latura unui spline dintr-un fișier STEP, fețele generate prin baleiere și revoluție) rămân fațete plane în același solid, iar bara de stare spune câte sunt. Bara de stare afișează, de exemplu, "Exportat Flange.step (AP242, solid exact, mm, Z în sus): 14 fețe pe suprafețele lor adevărate (10 cilindrice, 1 conică, 0 sferice, 0 toroidale), 0 curbe de muchie ajustate." Fișierul conține doar solidul: fără istoric, fără schițe, fără desen. Dacă celălalt program citește doar AP214, alegeți {{ui:STEP AP214 (exact solid)}}: același solid, în acea schemă mai veche.

Ce este exact și ce nu:

- Fețele plane, cilindrii (găuri, proeminențe, racordări pe muchii drepte), conurile (contrasunări, înclinări), sferele și torii sunt exacte, la fel și muchiile lor drepte, circulare și eliptice. Setarea **Curbe** nu le modifică.
- Acolo unde două fețe rotunde se intersectează (o gaură forată transversal printr-un arbore), muchia este o curbă netedă ajustată la ambele suprafețe, cu o precizie de 0.00001 mm; "curbe de muchie ajustate" le numără.
- O cavitate închisă din interiorul piesei este scrisă ca un gol al solidului. Mai multe corpuri separate sunt scrise ca mai multe solide.
- Un ansamblu nu este scris încă ca STEP exact: exportați fiecare piesă.

Verificarea s-a făcut recitind fișierele în OpenCascade, care raportează solide valide, cu volume calculate manual. Nu a fost deschis încă în fiecare program CAD sau CAM. Dacă un program refuză un fișier, {{ui:STEP (faceted, mesh kernel)}} scrie aceeași formă ca fețe plane (în axele proprii ale PartCraft, Y în sus). Vă rugăm să ne spuneți prin {{ui:Help}} › {{ui:Report a problem}}.

Pentru prelucrare, spațiul de lucru Manufacture scrie și solidul exact în coordonatele de lucru proprii ale configurației: vezi [Realizarea traseelor sculei și a codului G](topic:manufacture#exact-step-for-the-shop).

## Pentru programe BIM: IFC cu fiecare proprietate

Alegeți {{ui:Export}}, apoi {{ui:IFC 4 (with every property)}}. Se scrie piesa ca element IFC 4 pentru modele de clădiri și instalații, cu forma ei ca triunghiuri (Z în sus, milimetri), împreună cu ce știe PartCraft despre ea, sub formă de seturi de proprietăți:

| Set de proprietăți | Conține |
|---|---|
| **PartCraft_Part** | Nume, material și densitatea lui, configurația activă, numărul de corpuri; într-un ansamblu și numărul piesei și descrierea |
| **PartCraft_Parameters** | Fiecare parametru al piesei cu valoarea lui; expresia unei formule și o notă se află în descrierea proprietății |
| **PartCraft_TitleBlock** | Câmpurile cartușului desenului pe care le-ați completat (titlu, număr de desen, revizie, companie, desenat, verificat și aprobat de, dată, finisare, toleranță generală) și formatul foii |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volum, arie a suprafeței, masă (cu un material) și dimensiunea de ansamblu |

Materialul este atașat ca material IFC, iar numărul desenului este eticheta elementului. Într-un ansamblu, fiecare piesă este scrisă o singură dată ca tip, care conține proprietățile ei, iar fiecare copie este plasată acolo unde o pune ansamblul, cu valorile proprii în **PartCraft_Instance**: numele ei, numărul de poziție din lista de materiale și dacă este piesa fixată la sol.

## Pentru profile laser, jet de apă sau CNC: DXF

Există două tipuri de DXF, ambele în versiunea R12, pe care îl deschide orice program CAD și CAM:

### O schiță

1. Selectați schița din istoric (sau aveți-o deschisă).
2. Alegeți {{ui:Export}}, apoi {{ui:DXF of the sketch or flat face}}. (Panoul din dreapta al schiței are și {{ui:Export as DXF}}.)

Obțineți `<part> - <sketch>.dxf` în coordonatele proprii ale schiței: linii, arce și cercuri adevărate pe stratul **PROFILE**, geometria de construcție pe **CONSTRUCTION**, punctele libere pe **POINTS**.

### O față plană a solidului

1. Faceți clic pe o față plană din vedere (de exemplu partea de sus a unei plăci cu găuri).
2. Alegeți {{ui:Export face as DXF}} în panoul din dreapta sau {{ui:Export}}, apoi {{ui:DXF of the sketch or flat face}}.

Obțineți `<part> - face.dxf`: conturul feței și fiecare gaură din ea. O gaură rotundă (un cerc întreg acolo unde un cilindru întâlnește fața: o gaură forată sau o gaură dintr-un fișier STEP deschis) este scrisă ca un cerc adevărat, cu centrul și raza proprii ale găurii. Orice alt contur este o polilinie închisă, iar muchiile lui rotunde (colțuri racordate, degajări, arce) sunt fațetele lor; deci setați mai întâi **Curbe** pe Fină, dacă freza le urmărește de aproape. Bara de stare spune câte contururi sunt, câte dintre ele sunt cercuri adevărate și aria feței.

Dacă nu este selectată nicio schiță și nicio față plană: "Deschideți sau selectați o schiță ori alegeți o față plană, pentru a exporta DXF."

## Un desen

Desenul PDF are propriul ghid pas cu pas: [Realizarea unei foi de desen](topic:drawing-pdf).

## Formate indisponibile

glTF, OBJ, IGES și Parasolid nu sunt exportate în această versiune. DWG este scris doar de pachetul de variante, ca foaie de desen: vezi [Realizarea unui pachet de variante din configurațiile dvs.](topic:variant-pack). Vezi [Formate de fișiere](topic:file-formats).
