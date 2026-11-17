---
title: Deschiderea unui model .3dm ca corp solid
summary: Aduce plasele, polisuprafețele și blocurile unui fișier .3dm în PartCraft ca un singur corp solid pe care îl puteți tăia, adăuga și pe care puteți schița; de unde vin triunghiurile și ce rămâne afară.
keywords: 3dm, nurbs, polisuprafață, brep, suprafețe, plasă de randare, extrudare, blocuri, import, plasă în solid, unități, corp importat
from: 8ae9571b
---

PartCraft deschide fișierele `.3dm` ca **corpuri solide**, la fel cum deschide o [plasă STL, OBJ sau 3MF](topic:open-meshes). Corpul funcționează ca orice alt solid: îl puteți tăia, adăuga la el, găuri, repeta și schița pe fețele lui plate. Nu are istoric propriu.

## Deschiderea fișierului

1. Alegeți {{ui:Deschidere}} sau apăsați {{key:Mod+O}} și alegeți fișierul `.3dm`. Sau trageți-l în vederea 3D.
2. PartCraft îl citește și arată ce a găsit: câte obiecte cu fețe intră, câte fețe au venit din plasele salvate în fișier și câte a triangulat PartCraft singur, fiecare reparație și dacă rezultatul **se închide**.
3. Verificați **Unități în fișier** (fișierul spune propriile unități; o unitate pe care PartCraft nu o listează, cum ar fi yarzii, este transformată în milimetri) și **Sus în fișier**.
4. Alegeți {{ui:Deschidere ca corp}}, sau **Folosire pentru** și {{ui:Adăugare la această piesă}} când piesa are deja operații.

## De unde vin triunghiurile

PartCraft construiește corpuri din triunghiuri în această versiune, deci fiecare suprafață din fișier devine fețe plate mici. Pentru fiecare față a unei polisuprafețe (și pentru fiecare extrudare) ia **plasa de randare salvată în fișier** când există una, altfel **o triangulează singur** (plane, suprafețe NURBS, suprafețe de revoluție, curbe extrudate și extrudări, tăiate de muchiile lor). Fețele unei polisuprafețe împart punctele muchiilor, deci o polisuprafață închisă intră închisă. O față de un tip de suprafață pe care PartCraft nu îl citește încă este lăsată afară, iar dialogul spune câte și de ce tip; rezultatul de obicei nu se închide atunci.

## Totul din fișier devine un singur corp

Fiecare plasă, polisuprafață și extrudare vizibilă, și fiecare plasare a unui bloc, intră într-un **singur** corp acolo unde o pune fișierul. Obiectele ascunse sau pe un strat oprit sunt lăsate afară. Când fișierul conține mai multe solide separate, corpul are mai multe bucăți: deschideți fiecare din fișierul ei propriu dacă le vreți ca corpuri separate.

## Ce rămâne afară (și este spus)

Curbele, punctele, norii de puncte, textul, cotele, hașurile și luminile rămân afară: un corp ia doar fețe. La fel și obiectele SubD (transformați-le în plase sau polisuprafețe în programul care a făcut fișierul mai întâi), blocurile legate din alte fișiere, și culorile, straturile și numele (corpurile PartCraft nu au proprii aici).

## Când nu se închide

Polisuprafețele deschise și suprafețele (o suprafață tăiată singură, o formă cu o față lipsă) nu au interior, deci nu pot fi un solid. Dialogul spune câte deschideri rămân și nu adaugă nimic. Uniți sau închideți forma în programul care a creat-o, salvați și deschideți din nou. Vezi [Când o plasă nu se închide](topic:open-meshes#when-a-mesh-does-not-close).
