---
title: Fișiere: deschidere, salvare și exportare
summary: Fișierele de piesă și de ansamblu pe care PartCraft le deschide și le salvează, fiecare format de export și ce păstrează, unde ajung fișierele și ce se schimbă offline sau între browsere.
keywords: deschidere, salvare, exportare, descărcare, fișier, partcraft.json, fișier de ansamblu, stl, 3mf, step, dxf, pdf, unde sunt fișierele mele, offline, salvare ca
from: c15c2c48
---

PartCraft lucrează cu fișiere de pe calculator. Nu încarcă niciodată o piesă și nu implică niciun cont sau stocare în cloud. Salvarea în cloud nu este disponibilă încă.

## Ce deschide PartCraft

| Fișier | Extensie | Cum |
|---|---|---|
| O piesă PartCraft | `.partcraft.json` | {{ui:Open}}, {{key:Mod+O}}, sau trageți-l în vizualizarea 3D |
| Un ansamblu PartCraft | `.partcraft-asm.json` | La fel: PartCraft vede ce fel de fișier este |
| Un solid STEP | `.step`, `.stp` | Un corp solid citit ca triunghiuri: [Deschiderea unui fișier STEP și construirea pe el](topic:import-step) |

Plasele STL, OBJ și 3MF se deschid tot ca corpuri solide ([Deschiderea unui STL, OBJ sau 3MF](topic:open-meshes)), la fel și fișierele `.3dm` ([Deschiderea unui model .3dm](topic:open-3dm-files)). Fișierele DXF, IGES și alte fișiere de piesă ale altor programe nu pot fi deschise (vezi [Ce este încă nerealizat](topic:not-built-yet)).

Reguli la deschidere:

- Numele unui fișier de piesă sau de ansamblu trebuie să se termine în `.json`, iar fișierul trebuie să aibă sub 50 MB.
- Fișierele sunt verificate înainte de a fi afișate. Un fișier deteriorat sau modificat este refuzat, cu un motiv simplu, de exemplu „Acesta nu este un fișier PartCraft.”
- Un fișier salvat de un PartCraft mai nou este refuzat: „Acest fișier a fost salvat de un PartCraft mai nou (versiunea fișierului 3); aceasta citește versiunea 2.” Fișierele mai vechi se deschid.
- Dacă piesa de pe ecran are modificări nesalvate, PartCraft întreabă mai întâi: {{ui:Cancel}}, {{ui:Discard changes}} sau {{ui:Save first}}.

## Salvare

{{ui:Save}} sau {{key:Mod+S}} salvează ce este pe ecran:

- Pentru o piesă: `<nume piesă>.partcraft.json`, istoricul complet (schițe, relații, cote, operații, poziția de derulare), secțiunea, detaliile și notele GD&T ale foii de desen și tot textul oricărui corp solid STEP importat într-o versiune anterioară. Operațiile pe care această versiune nu le poate construi sunt salvate neschimbate. Solidul în sine nu este stocat; PartCraft îl reconstruiește din istoric când se deschide fișierul.
- Pentru un ansamblu: `<nume ansamblu>.partcraft-asm.json`, cu **fiecare piesă din interior**. Un singur fișier conține întregul ansamblu, deci poate fi trimis singur.

Salvarea este o **descărcare**. Browserul pune fișierul în dosarul de descărcări sau întreabă unde să îl pună, dacă este setat să întrebe. Salvarea din nou creează o nouă descărcare; browserul poate să îl numească `Part1 (1).partcraft.json` în loc să înlocuiască vechiul. Redenumiți sau mutați fișierele în {{pick:mac=Finder|windows=File Explorer|linux=managerul de fișiere}} după preferință.

Caracterele din numele piesei, altele decât litere, cifre, spații, `_`, `.` și `-`, devin `_` în numele fișierului.

:::tip
Majoritatea browserelor au o setare care cere unde să se salveze fiecare descărcare. Activați-o dacă doriți o alegere „Salvare ca” de fiecare dată: în Chrome și Edge se află la Descărcări, în setări; în Firefox la General, Fișiere și aplicații; în Safari la General, Locul descărcării fișierelor.
:::

Mai multe despre unde ajung descărcările și cum se păstrează fișierele în siguranță: [Unde ajung fișierele](common:your-files).

## Exportare

Meniul {{ui:Export}} scrie alte formate. Fiecare este o descărcare, denumită după piesă.

| Element de meniu | Fișier | Ce conține |
|---|---|---|
| {{ui:STL, for 3D printing}} | `<name>.stl` | STL binar cu triunghiurile solidului, în milimetri, **Z în sus** |
| {{ui:3MF, for 3D printing}} | `<name>.3mf` | 3MF cu solidul ca un singur obiect, în milimetri, **Z în sus** |
| {{ui:STEP AP242 (exact solid)}} | `<name>.step` | Încă nerealizat în această versiune (estompat): are nevoie de un nucleu exact |
| {{ui:STEP AP214 (exact solid)}} | `<name>.step` | Încă nerealizat în această versiune (estompat) |
| {{ui:STEP (faceted, mesh kernel)}} | `<name>.step` | Un solid format din fețe plane din plasă: **suprafețele rotunde sunt mai multe fațete plane mici**. În milimetri, pe axele proprii ale PartCraft (Y în sus). Este STEP-ul de folosit cu alte programe CAD în această versiune |
| {{ui:DXF of the sketch or flat face}} | `<name> - <sketch>.dxf` sau `<name> - face.dxf` | DXF R12. O schiță: linii, arce, cercuri și puncte în coordonatele proprii ale schiței, pe straturile PROFILE, CONSTRUCTION și POINTS. O față plană aleasă: contururile sale ca polilinii închise (muchiile rotunde ca fațetele lor) |
| {{ui:Drawing (PDF): views, section, detail, GD&T}} | `<name> - drawing.pdf` | Foaia de desen A3: trei vederi, izometria, secțiunea și detaliul dacă sunt setate, dimensiunile de gabarit, simbolurile GD&T, cartușul |

:::note
{{ui:STEP AP242 (exact solid)}} și {{ui:STEP AP214 (exact solid)}} nu sunt încă realizate în această versiune: folosiți {{ui:STEP (faceted, mesh kernel)}}. Are forma și volumul corecte, dar fiecare față rotundă este formată din multe fațete plane, deci alte programe nu pot selecta o gaură ca cilindru. Setați mai întâi **Curbe** mai fine dacă acest lucru contează.
:::

- Exporturile sunt ale piesei de pe ecran. Exportul este dezactivat într-un ansamblu; încă nu există export de ansamblu.
- STL, 3MF, STEP cu fațete și DXF-ul feței sunt întotdeauna făcute din fațete. Setarea **Curbe** (în panoul din dreapta, când nu este selectat nimic) stabilește cât de fine sunt, de la 32 la 256 de fațete pe rotație. Alegeți Fin sau Foarte fin înainte de exportul STL sau 3MF pentru o imprimare netedă.
- Desenul PDF folosește fontul integrat Helvetica al cititorului. Caracterele pe care nu le poate afișa se tipăresc ca „?”.

Pas cu pas: [Exportul pentru imprimare, STEP și DXF](topic:export-files) și [Realizarea unei foi de desen](topic:drawing-pdf).

## Lucru nesalvat

- PartCraft păstrează o copie de recuperare a piesei sau ansamblului deschis în acest browser, puțin după fiecare modificare, astfel încât o blocare sau un tab închis nu pierd nimic: data următoare când se deschide PartCraft întreabă „Recuperarea lucrării?”. Nu este o salvare: salvați într-un fișier pentru a păstra lucrarea. Vezi [Recuperarea lucrării nesalvate](common:recover).
- Dacă se încearcă închiderea tab-ului sau reîncărcarea lui cu modificări nesalvate, browserul întreabă „Părăsiți site-ul?”. Aceasta este caseta proprie a browserului; PartCraft nu îi poate schimba textul.
- {{ui:New}}, {{ui:Open}} și închiderea unui ansamblu cer confirmare înainte de a renunța la modificările nesalvate.

## Online și offline

Totul se întâmplă pe calculator: nucleul de plasă (un program WebAssembly) este descărcat împreună cu aplicația și construiește geometria local, iar fișierele sunt citite și scrise pe discul calculatorului. Nicio ddată a piesei nu trece prin rețea. Vezi [Nucleul de plasă](topic:solid-kernels).

Pentru a lucra fără nicio conexiune, salvați PartCraft pentru utilizare offline cât sunteți online: alegeți {{ui:Save for offline}} din bara aplicației și așteptați cât numără („Se salvează 40 din 212”) până când scrie **Pregătit pentru offline**. Copia salvată include biblioteca 3D și nucleul de plasă, deci după aceea modelarea, salvarea, fiecare export și desenele funcționează offline. Dacă scrie **Nu s-a putut salva**, apăsați-l ca să încercați din nou cât sunteți online; **Offline indisponibil** înseamnă că această fereastră de browser nu poate păstra o copie (ferestrele private și unele calculatoare administrate). Cu copia salvată, apăsarea pe **Pregătit pentru offline** oferă {{ui:Save again (get the newest version)}} și {{ui:Remove the offline copy}}. Detalii: [Lucrul offline](common:offline).

:::online
Sunteți online. Chiar fără salvare pentru utilizare offline, odată ce PartCraft s-a încărcat și indicatorul din bara de stare scrie „Nucleu de plasă”, puteți continua să lucrați dacă conexiunea se întrerupe. Nu reîncărcați pagina până nu reveniți online.
:::

:::offline
Sunteți offline. Dacă PartCraft este deja deschis, continuați să lucrați: salvarea și exportul merg în continuare. Dacă bara aplicației scrie **Pregătit pentru offline**, PartCraft se deschide și de la zero fără conexiune; altfel nu reîncărcați această filă.
:::

## Diferențe între browsere

- **Descărcări.** Fiecare browser are propriul dosar de descărcări și propriul mod de a întreba. Dacă un browser întreabă dacă acest site are voie să descarce fișiere, permiteți-o, altfel salvarea și exportul nu pot funcționa.
- **Glisarea și plasarea** unui fișier pe vizualizare funcționează în Chrome, Edge, Firefox și Safari.
- **Fișiere de pe telefon sau tabletă.** Pe iPhone și iPad, Deschidere arată aplicația Fișiere; fișierele salvate ajung în Fișiere, Descărcări. Pe Android ajung în dosarul Descărcări.

Nu există nicio diferență în ce conțin fișierele între browsere sau sisteme de operare.
