---
title: Deschiderea unui STL, OBJ sau 3MF ca corp solid
summary: Transformați o plasă de la un scaner, un site de imprimare 3D sau alt program într-un solid pe care îl puteți tăia, adăuga și schița; ce repară PartCraft pe drum și ce nu poate.
keywords: stl, obj, 3mf, plasă, plasă în solid, convertire plasă, scanare, etanș, reparare, găuri, goluri, unități, axa de sus, corp importat, fețe plate
from: 7b948471
---

PartCraft deschide plase STL, OBJ și 3MF ca **corpuri solide**. Corpul funcționează ca orice alt solid: îl puteți tăia, adăuga la el, găuri, repeta, folosi într-un ansamblu sau pentru prelucrare și schița pe fețele lui plate. Nu are istoric propriu: o plasă este doar triunghiuri, deci dimensiunile ei nu pot fi schimbate, doar adăugate sau tăiate.

## Deschiderea unei plase

1. Alegeți {{ui:Deschidere}} sau apăsați {{key:Mod+O}} și alegeți fișierul `.stl`, `.obj` sau `.3mf`. Sau trageți-l în vederea 3D.
2. PartCraft o citește, repară ce poate în siguranță și arată ce a găsit: câte triunghiuri și puncte, fiecare reparație și dacă plasa acum **se închide**.
3. Verificați **Unități în fișier** și **Sus în fișier**. STL și OBJ nu spun unitățile, deci milimetrii sunt o presupunere; un fișier 3MF spune singur. Rândul **Dimensiune aici** arată dimensiunea corpului cu alegerea făcută, astfel încât o piesă care vine de 25.4 ori prea mică se observă ușor (era în inch).
4. Dacă piesa de pe ecran este goală, alegeți {{ui:Deschidere ca corp}}. Dacă piesa are deja operații, alegeți **Folosire pentru** (adăugare la piesă, tăiere din ea sau păstrarea doar a suprapunerii), apoi {{ui:Adăugare la această piesă}}, sau {{ui:Piesă nouă}} ca să începeți din nou cu plasa.

În istoric apare o operație **Imported1**. Bara de stare spune, de exemplu, „bracket.stl este un corp solid: 15200.512 mm³, 14 fețe plate pe care se poate schița.”

## Ce repară PartCraft

| Reparație | Ce înseamnă |
|---|---|
| Colțuri duble unite | Un STL repetă fiecare colț pentru fiecare dintre triunghiurile sale; sunt unite într-un singur punct |
| Triunghiuri fără suprafață eliminate | Așchii ale căror colțuri sunt pe o singură linie |
| Triunghiuri duble eliminate | Un triunghi scris de două ori se păstrează o singură dată; două care stau cu fața în sensuri opuse (un perete interior) sunt eliminate pe amândouă |
| Goluri mici închise | Muchii care aproape se întâlnesc (în o miime din dimensiunea piesei) sunt unite |
| Găuri umplute | O deschidere a cărei margine stă plată este umplută oricare ar fi dimensiunea; una deformată doar când este mică |
| Triunghiuri întoarse spre exterior | Triunghiurile cu fața în sens greșit sunt întoarse ca să se potrivească cu vecinii, iar toată suprafața să fie cu fața spre afară |

## Când o plasă nu se închide

Un solid are nevoie de o suprafață fără deschideri. Când PartCraft nu poate închide una, dialogul spune câte deschideri și muchii deschise rămân, iar nu există corp de adăugat. Închideți deschiderile în programul care a făcut plasa, sau exportați-o din nou ca plasă închisă (etanșă), și deschideți-o din nou.

PartCraft lasă o deschidere neatinsă când umplerea ar putea ghici greșit: o gaură mare deformată, sau două deschideri în același plan (o față inelară lipsă, unde umplerea fiecărei margini ar acoperi gaura din mijloc). O muchie comună a mai mult de două triunghiuri este de asemenea raportată: o astfel de suprafață nu are un interior clar.

## Schițarea pe fețele plate

Zonele plate făcute din multe triunghiuri sunt unite într-o singură **față plată** fiecare, ca să poată fi schițate: faceți clic pe față și alegeți {{ui:Schiță pe această față}}. O față care este tăiată sau la care se adaugă mai târziu rămâne față. Zonele rotunde (o gaură, o racordare) rămân triunghiuri: nu sunt fețe pe care le puteți alege, iar vederea desenează conturul lor din unghiul dintre triunghiuri.

## Schimbarea ulterioară

Selectați **Imported1** ca să vedeți fișierul din care vine, câte triunghiuri are și ce s-a reparat. **Unități în fișier**, **Sus în fișier** și **Folosire pentru** se pot schimba acolo; fiecare schimbare este un pas de anulare.

## Unde este păstrată

Plasa reparată este stocată **în interiorul** fișierului `.partcraft.json`, deci nu mai aveți nevoie de fișierul plasei. Un fișier de piesă cu un corp din plasă este versiunea 5: o versiune mai veche de PartCraft îl refuză după versiune. O plasă de 200.000 de triunghiuri adaugă cam 1.2 MB.

## Limite

- Cel mult 3 milioane de triunghiuri și 200 MB într-un fișier.
- Un corp făcut dintr-o plasă este construit de nucleul de plasă. Cu nucleul exact activat (doar pentru dezvoltatori), o spune și nu este construit.
- Materialele OBJ, coordonatele de textură și curbele cu formă liberă sunt lăsate afară; culorile, materialele și obiectele de suport din 3MF sunt lăsate afară (dialogul spune câte obiecte au fost sărite).
- Corpul este atât de fin cât plasa: un STL grosier dă fețe rotunde grosiere. Găurile pe care le găuriți în el sunt la fel de rotunde ca propriile operații.
