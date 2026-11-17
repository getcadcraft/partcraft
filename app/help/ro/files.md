---
title: Fișiere: deschidere, salvare și export
summary: Fișierele de piesă și de ansamblu pe care PartCraft le deschide și le salvează, fiecare format de export și ce păstrează, unde ajung fișierele și ce se schimbă offline sau între browsere.
keywords: deschidere, salvare, export, descărcare, fișier, partcraft.json, fișier de ansamblu, stl, 3mf, step, dxf, pdf, unde ajung fișierele mele, offline, salvare ca
from: e5fbc7e3
---

PartCraft lucrează cu fișiere de pe calculatorul dvs. Nu încarcă niciodată o piesă și nu există cont sau stocare în cloud. Salvarea în cloud nu este disponibilă încă.

## Ce deschide PartCraft

| Fișier | Extensie | Cum |
|---|---|---|
| O piesă PartCraft | `.partcraft.json` | {{ui:Open}}, {{key:Mod+O}}, sau trageți-o în vederea 3D |
| Un ansamblu PartCraft | `.partcraft-asm.json` | Același lucru: PartCraft recunoaște ce fel este |
| Un solid STEP | `.step`, `.stp` | Un corp solid citit ca triunghiuri: [Deschideți un fișier STEP și construiți pe el](topic:import-step) |

Plasele STL, OBJ și 3MF se deschid tot ca corpuri solide ([Deschiderea unui STL, OBJ sau 3MF](topic:open-meshes)), la fel și fișierele `.3dm` ([Deschiderea unui model .3dm](topic:open-3dm-files)). Fișierele DXF, IGES și fișierele de piesă proprii ale altor programe nu pot fi deschise (vezi [Ce nu este încă realizat](topic:not-built-yet)).

Reguli la deschidere:

- Numele unui fișier de piesă sau de ansamblu trebuie să se termine în `.json`, iar fișierul trebuie să aibă sub 50 MB.
- Fișierele sunt verificate înainte de a fi afișat ceva. Un fișier deteriorat sau modificat este refuzat, cu un motiv simplu, de exemplu "Acesta nu este un fișier PartCraft."
- Un fișier salvat de un PartCraft mai nou este refuzat: "Acest fișier a fost salvat de un PartCraft mai nou (versiunea fișierului 3); acesta citește versiunea 2." Fișierele mai vechi se deschid.
- Dacă piesa de pe ecran are modificări nesalvate, PartCraft întreabă mai întâi: {{ui:Cancel}}, {{ui:Discard changes}} sau {{ui:Save first}}.

## Salvarea

{{ui:Save}} sau {{key:Mod+S}} salvează ce este pe ecran:

- Pentru o piesă: `<part name>.partcraft.json`, istoricul complet (schițe, relații, cote, operații, poziția de derulare înapoi), secțiunea, detaliile și notele GD&T ale foii de desen și textul complet al oricărui solid STEP importat într-o versiune anterioară. Operațiile pe care această versiune nu le poate construi sunt salvate înapoi neschimbate. Solidul în sine nu este stocat; PartCraft îl reconstruiește din istoric la deschiderea fișierului.
- Pentru un ansamblu: `<assembly name>.partcraft-asm.json`, cu **fiecare piesă înăuntru**. Un singur fișier conține întregul ansamblu, deci îl puteți trimite singur.

Salvarea este o **descărcare**. Browserul pune fișierul în dosarul de descărcări sau întreabă unde să-l pună, dacă l-ați setat să întrebe. Salvarea din nou creează o nouă descărcare; browserul poate să-l numească `Part1 (1).partcraft.json` în loc să înlocuiască vechiul. Redenumiți sau mutați fișierele în {{pick:mac=Finder|windows=File Explorer|linux=managerul dvs. de fișiere}} cum doriți.

Caracterele din numele piesei, în afara literelor, cifrelor, spațiilor, `_`, `.` și `-`, devin `_` în numele fișierului.

:::tip
Majoritatea browserelor au o setare care cere unde să salvați fiecare descărcare. Activați-o dacă doriți o alegere "Salvare ca" de fiecare dată: în Chrome și Edge se află la Downloads, în setări; în Firefox la General, Files and Applications; în Safari la General, File download location.
:::

Mai multe despre unde ajung descărcările și despre cum păstrați fișierele în siguranță: [Unde ajung fișierele dvs.](common:your-files).

## Exportul

Meniul {{ui:Export}} scrie alte formate. Fiecare este o descărcare, numită după piesă.

| Element de meniu | Fișier | Ce conține |
|---|---|---|
| {{ui:STL, for 3D printing}} | `<name>.stl` | STL binar al triunghiurilor solidului, în milimetri, **Z în sus** |
| {{ui:3MF, for 3D printing}} | `<name>.3mf` | 3MF cu solidul ca un singur obiect, în milimetri, **Z în sus** |
| {{ui:STEP AP242 (exact solid)}} | `<name>.step` | Un solid exact, în milimetri, Z în sus: fețele rotunde ca cilindri, conuri, sfere și tori adevărați. STEP-ul de folosit pentru alte programe CAD și CAM |
| {{ui:STEP AP214 (exact solid)}} | `<name>.step` | Același solid exact, în schema mai veche AP214 |
| {{ui:STEP (faceted, mesh kernel)}} | `<name>.step` | Un solid din fețe plane obținute din plasă: **suprafețele rotunde sunt multe fațete plane mici**. În milimetri, în axele proprii ale PartCraft (Y în sus). Pentru un program care refuză fișierul exact |
| {{ui:DXF of the sketch or flat face}} | `<name> - <sketch>.dxf` sau `<name> - face.dxf` | DXF R12. O schiță: linii, arce, cercuri și puncte în coordonatele proprii ale schiței, pe straturile PROFILE, CONSTRUCTION și POINTS. O față plană aleasă: conturele ei ca polilinii închise (muchiile rotunde ca fațetele lor) |
| {{ui:Drawing (PDF): views, section, detail, GD&T}} | `<name> - drawing.pdf` | Foaia de desen A3: trei vederi, izometrică, secțiune și detaliu dacă sunt setate, dimensiuni de ansamblu, simboluri GD&T, cartuș |

:::note
{{ui:STEP AP242 (exact solid)}} scrie găurile, proeminențele, racordările, conurile, sferele și torii pe suprafețele lor adevărate, astfel încât un alt program poate selecta o gaură ca cilindru; **Curbe** nu o modifică. Laturile de spline, filetele modelate și plasele importate nu au o suprafață exactă și rămân fațete plane în același solid; bara de stare spune câte sunt. {{ui:STEP (faceted, mesh kernel)}} scrie fiecare față rotundă ca fațete.
:::

- Exporturile sunt ale piesei de pe ecran. Exportul este dezactivat într-un ansamblu; încă nu există export de ansamblu.
- STL, 3MF, STEP-ul cu fațete și DXF-ul feței sunt mereu din fațete. Setarea **Curbe** (în panoul din dreapta, când nu este selectat nimic) stabilește cât de fine sunt, de la 32 la 256 de fațete pe rotație. Alegeți Fină sau Foarte fină înainte de a exporta STL sau 3MF pentru o imprimare netedă.
- Desenul PDF folosește fontul Helvetica integrat în cititor. Caracterele pe care nu le poate afișa apar ca "?".

Pas cu pas: [Export pentru imprimare, STEP și DXF](topic:export-files) și [Realizarea unei foi de desen](topic:drawing-pdf).

## Lucru nesalvat

- PartCraft păstrează o copie de recuperare a piesei sau ansamblului deschis în acest browser, la scurt timp după fiecare modificare, astfel încât o blocare sau un tab închis nu o pierd: data următoare când deschideți PartCraft, întreabă "Recuperarea lucrării?". Nu este o salvare: salvați într-un fișier ca să păstrați lucrarea. Vezi [Recuperarea lucrului nesalvat](common:recover).
- Dacă încercați să închideți tab-ul sau să reîncărcați cu modificări nesalvate, browserul întreabă "Leave site?". Aceasta este caseta browserului; PartCraft nu îi poate schimba textul.
- {{ui:New}}, {{ui:Open}} și închiderea unui ansamblu întreabă înainte de a renunța la modificările nesalvate.

## Online și offline

Totul se întâmplă pe calculatorul dvs.: nucleul de plasă (un program WebAssembly) este descărcat împreună cu aplicația și construiește geometria local, iar fișierele sunt citite și scrise pe discul dvs. Nicio dată a piesei nu trece prin rețea. Vezi [Nucleul de plasă](topic:solid-kernels).

Pentru a lucra fără nicio conexiune, salvați PartCraft pentru utilizare offline cât sunteți online: alegeți {{ui:Save for offline}} din bara aplicației și așteptați cât numără ("Se salvează 40 din 212") până când scrie **Pregătit offline**. Copia salvată include biblioteca 3D și nucleul de plasă, deci după aceea modelarea, salvarea, fiecare export și desenele funcționează toate offline. Dacă scrie **Nu s-a putut salva**, faceți clic pe el ca să încercați din nou cât sunteți online; **Offline indisponibil** înseamnă că această fereastră de browser nu poate păstra o copie (ferestrele private și unele calculatoare administrate). Cu copia salvată, un clic pe **Pregătit offline** oferă {{ui:Save again (get the newest version)}} și {{ui:Remove the offline copy}}. Detalii: [Lucrul offline](common:offline).

:::online
Sunteți online. Chiar fără salvare pentru utilizare offline, odată ce PartCraft s-a încărcat și cipul din bara de stare spune "Nucleu de plasă", puteți continua să lucrați dacă conexiunea se întrerupe. Doar nu reîncărcați pagina până nu reveniți online.
:::

:::offline
Sunteți offline. Dacă PartCraft este deja deschis, continuați să lucrați; salvarea și exportul merg în continuare. Dacă bara aplicației spune **Pregătit offline**, PartCraft se deschide și de la zero, fără conexiune; altfel nu reîncărcați acest tab.
:::

## Diferențe între browsere

- **Descărcări.** Fiecare browser are propriul dosar de descărcări și propriul mod de a întreba. Dacă un browser întreabă dacă acest site poate descărca fișiere, permiteți-o, altfel salvarea și exportul nu pot funcționa.
- **Trageți și lăsați** un fișier pe vedere funcționează în Chrome, Edge, Firefox și Safari.
- **Fișiere de pe telefon sau tabletă.** Pe iPhone și iPad, Deschidere afișează aplicația Files; fișierele salvate ajung în Files, Downloads. Pe Android ajung în dosarul Downloads.

Nu există nicio diferență în ce conțin fișierele între browsere sau sisteme de operare.
