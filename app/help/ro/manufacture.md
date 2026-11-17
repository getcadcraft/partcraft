---
title: Realizarea traseelor de sculă și a codului G (Manufacture)
summary: Configurați semifabricatul și originea de lucru, alegeți sculele, adăugați operații de față, buzunar, contur, găurire și șanfren prin alegerea fețelor, finisați întregul model în 3D (paralel, scallop), simulați semifabricatul față de model pentru crestături și timp de ciclu și descărcați codul G dintr-unul din cele trei postprocesoare incluse sau dintr-unul pe care îl editați singur.
keywords: exact step, step pentru atelier, coordonate de lucru, predare CAM, paralel, scallop, finisare 3D, finisare, freză sferică, bibliotecă de scule, editare post, post personalizat, editor de post, adaptiv, curățare adaptivă, angajare constantă, trocoidal, hsm, prelucrare de mare viteză, manufacture, CAM, traseu de sculă, cod G, NC, CNC, freză, frezare, buzunar, contur, profil, planare, găurire, peck, G83, G81, G73, șanfren, semifabricat, decalaj de lucru, G54, postprocesor, GRBL, LinuxCNC, avansuri și turații, simulare, crestătură, timp de ciclu
from: beeb29aa
---

Spațiul de lucru Manufacture transformă piesa în trasee de sculă pentru o mașină de frezat cu 3 axe și le scrie ca cod G. Majoritatea operațiilor sunt **2,5 axe**: scula rămâne verticală, pereții se taie drept în jos, iar fundurile se taie plane. **Paralel** și **Scallop** finisează suprafețe curbe în 3D (vezi [Finisarea 3D](topic:finish-3d)); scula rămâne în continuare verticală (trei axe, fără înclinare). Lucrează pe fețele denumite pe care nucleul de plase le dă piesei (vezi [Nucleul de plase](topic:solid-kernels)).

Versiune de laborator: verificați fiecare program în simulatorul propriu al comenzii mașinii și rulați-l mai întâi în aer, deasupra semifabricatului.

## Configurare

1. Alegeți **Manufacture** în comutatorul de spațiu de lucru, apoi {{ui:Configurare nouă}}.
2. În fila **Configurare** alegeți:
   - **Axa sculei (+Z)**: în ce sens indică scula spre piesă. World +Y (sus în PartCraft) este implicit; axa X a mașinii este atunci World X, iar axa Y a mașinii este World −Z.
   - **Origine de lucru (G54)**: un colț sau centrul semifabricatului, partea de sus sau de jos, centrul de sus al modelului sau originea modelului.
   - **Semifabricat**: o cutie sau un cilindru, fie modelul plus adaosuri (laterale, sus, jos), fie o dimensiune fixă.
   - **Material** (stabilește avansurile și turațiile de pornire), **postprocesorul** (comanda), turația maximă a arborelui mașinii, viteza de avans rapid și timpul de schimbare a sculei, lichidul de răcire și numărul programului.

## Scule

Fila **Scule** conține biblioteca: freze cilindrice, sferice și cu colț rotunjit, burghie, freze de șanfren și freze de față, fiecare cu un număr T, diametru, număr de dinți și lungime a dintelui (plus raza colțului, unghiul vârfului sau al șanfrenului, acolo unde se aplică).

Sculele mele pot fi salvate în browser și mutate între calculatoare ca fișier: vezi [Biblioteca de scule](topic:tool-library).

Turația arborelui și avansul vin din material: n = 1000 × viteza de tăiere / (π × diametru), avans = n × dinți × avans pe dinte (burghie: n × avans pe rotație). Cifrele sunt valori de pornire prudente, din intervale publicate, nu reglate pentru mașina dvs.; introduceți viteza de tăiere, avansul pe dinte, turația sau avansul producătorului sculei ca să le înlocuiți. Când turația depășește maximul mașinii, ea este menținută acolo, iar avansul urmează, păstrând avansul pe dinte.

## Adăugarea operațiilor

Fiecare buton din bara de instrumente adaugă o operație și, acolo unde are nevoie de geometrie, începe alegerea: faceți clic pe fețe sau muchii în vedere (faceți clic din nou ca să scoateți una), apoi {{ui:Alegere terminată}} sau {{key:Esc}}.

| Operație | Alegere | Ce face |
|---|---|---|
| {{ui:Față}} | nimic | Treceri în zig-zag peste tot semifabricatul, dincolo de margini, până la partea de sus a modelului |
| {{ui:Buzunar}} | o față plană de fund, o gaură rotundă sau un lanț închis de muchii | Curăță zona prin treceri decalate de la interior spre exterior, la fiecare adâncime de pas; insulele (fețele ridicate în interiorul fundului) rămân; un fund deschis din toate părțile (nimic mai înalt în afară) este curățat până la marginea semifabricatului |
| {{ui:Adaptiv}} | la fel ca Buzunar | Curăță aceeași zonă prin treceri care taie fiecare o lățime stabilită (**Angajare**, o fracțiune din diametru), astfel încât freza să nu ia niciodată o fantă de lățime completă, nici în colțuri; intră printr-o elice și finisează pereții la fiecare nivel. Tăieturile înguste permit o adâncime de pas mai mare și un avans mai mare |
| {{ui:Contur}} | o față plană (conturul ei), o față rotundă sau muchii | Urmează conturul decalat cu raza sculei, în exterior sau în interior, cu arce de intrare și de ieșire și punți opționale |
| {{ui:Găurire}} | găuri (faceți clic pe peretele unei găuri sau pe marginea ei) | Găurește fiecare gaură printr-un ciclu fix: peck (G83), găurire (G81) sau rupere a așchiei (G73); sau dați un diametru ca să găuriți toate găurile de acea dimensiune |
| {{ui:Șanfren}} | conturul sau muchiile unei fețe | Trece o freză de șanfren de-a lungul muchiei, astfel încât să taie lățimea pe care ați setat-o |
| {{ui:Paralel}} | nimic (tot modelul) | Finisare 3D în linii paralele, sub orice unghi, urmând suprafața cu o freză sferică, cu colț rotunjit sau plană. Vezi [Finisarea 3D](topic:finish-3d) |
| {{ui:Scallop}} | nimic (tot modelul) | Finisare 3D în treceri la o distanță stabilită unele de altele pe suprafață, astfel încât creasta dintre ele să aibă înălțimea cerută |

Selectați o operație din listă ca să-i schimbați scula, înălțimile (de siguranță, de retragere, de avans, sus, jos), adâncimea de pas, pasul lateral, materialul lăsat, trecerea de finisare, intrarea (elice, rampă sau înfigere), frezarea în sens favorabil, punțile sau ciclul. {{ui:Sus}} și {{ui:Jos}} reordonează, {{ui:Suprimare}} o lasă afară, {{ui:Ștergere}} o elimină. Totul este în istoricul de anulare și se salvează în fișierul piesei.

Pasul lateral al unui buzunar este cel mult jumătate din diametrul sculei, astfel încât orice punct al fundului său se află la cel mult o rază de sculă de o trecere. Colțurile interioare păstrează raza sculei.

**Curățarea adaptivă** menține angajarea sculei aproape de o valoare. O angajare de 0,15 din diametru înseamnă un unghi de angajare de aproximativ 46°: arcul muchiei sculei din material. Un buzunar decalat, dimpotrivă, taie lățime completă la prima trecere și se înfășoară mai departe în fiecare colț interior. Între treceri, scula rămâne coborâtă acolo unde se deplasează prin aer tăiat și se ridică și coboară în aer tăiat în rest. Treceriile se calculează pe o rețea fină peste zonă (celule de aproximativ a douăsprezecea parte din raza sculei), deci angajarea poate depăși cu aproximativ o celulă valoarea stabilită; pereții sunt finisați exact. O zonă mare și deschisă face un program lung cu multe mișcări scurte.

## Simulare

Traseele se refac după fiecare modificare (și a piesei). {{ui:Simulare}} arată și semifabricatul rămas după tot programul. Panoul arată:

- **Timpul de ciclu**: mișcările de avans la avansul lor, avansurile rapide ca linii drepte la viteza rapidă a configurării, plus timpul de schimbare a sculei. Mașinile reale accelerează, deci durează mai mult.
- **Crestături**: locuri unde scula a coborât cu mai mult de 0,02 mm sub suprafața piesei. Marcajele roșii le arată în vedere.
- **Material rămas pe piesă**.

Semifabricatul este o hartă de înălțimi a părții de sus (o hartă Z), deci nu poate arăta contradepuneri. Trageți **Redare** pentru a muta scula de-a lungul programului. În vedere, mișcările de avans sunt pline, iar cele rapide punctate, cu o culoare pentru fiecare operație.

Cu **Afișare semifabricat simulat** pornit, semifabricatul este colorat față de model, celulă cu celulă: **verde** unde este pe model (în limita de 0,02 mm), **roșu** unde scula a intrat în model, iar unde a rămas material pe model **galben** pentru o pieliță subțire, **portocaliu** pentru mai mult, care trece la **gri** al semifabricatului netăiat la 1 mm sau mai mult. Culorile se refac la fiecare modificare, din aceeași hartă de înălțimi ca cifrele din panou, deci verdele și roșul se potrivesc cu rândul Crestături. Un șanfren taie intenționat în model și arată roșu de-a lungul muchiei sale.

## Postarea codului G

Alegeți comanda sub **Postprocesor** și apăsați {{ui:Descărcare cod G}} (sau {{ui:Postprocesor}} din bara de instrumente):

| Comandă | Fișier | Note |
|---|---|---|
| ISO în stil Fanuc | .nc | %, număr O, numere de linie, T M6 cu G43 H, cicluri fixe |
| GRBL | .nc | Fără schimbător de scule și fără cicluri fixe: o schimbare de sculă oprește cu M0, găurirea se scrie ca mișcări simple |
| LinuxCNC | .ngc | T M6 cu G43 H, cicluri fixe, M2 |
| Al dvs. | oricare | Un postprocesor scris sau modificat de dvs.: {{ui:Editare post…}}, {{ui:Post nou…}}, {{ui:Importă fișierul de post…}} |

Fiecare fișier începe cu comentarii despre program, semifabricat, decalajul de lucru și scule. Coordonatele sunt în milimetri, cu 3 zecimale. {{ui:Traiectorie CSV}} și {{ui:Traiectorie JSON}} exportă chiar mișcările.

**Verificați rezultatul în simulatorul propriu al mașinii înainte de tăiere și rulați-l mai întâi în aer, deasupra semifabricatului.** Cele trei postprocesoare incluse sunt puncte de plecare care urmează comportamentul documentat al comenzilor; ele nu au fost dovedite pe nicio mașină anume. Un postprocesor pe care îl modificați vă aparține, iar dovada este a dvs. Cum se scrie unul: [Postprocesoare](topic:post-processors).

## Exact STEP pentru atelier

Sub butoanele codului G din fila **Operații**, {{ui:STEP exact (coordonate de lucru)}} descarcă `<part>-work.step`: piesa ca solid exact (cilindri reali pentru găuri și proeminențe, cercuri reale pentru muchiile lor), cu originea în originea de lucru a acestei configurări și Z de-a lungul axei sculei. Acestea sunt coordonatele pe care le folosește codul G, deci programul CAM sau verificatorul atelierului aliniază modelul cu programul fără să-l mute. Fișierul conține doar piesa, nu semifabricatul sau traseele.

{{ui:Export}} › {{ui:STEP AP242 (solid exact)}} scrie același solid în poziția proprie a piesei (Z în sus): vezi [Exportul pentru imprimare, STEP și DXF](topic:export-files#for-other-cad-programs-step).

## Limite

- Buzunarele, conturele, găurirea și șanfrenele sunt în 2,5 axe. Fețele curbe pot fi finisate în 3D ([paralel și scallop](topic:finish-3d)), dar nu degroșate în 3D (un con rămâne în trepte până îl finisați) și nu există prelucrare de reluare. Curățarea adaptivă este 2D (fundurile plane).
- Doar trei axe: fără înclinare, fără strunjire, fără control.
- Suporturile și prinderile nu sunt verificate la coliziuni; apare un avertisment când o tăietură este mai adâncă decât lungimea dintelui.
- Avansurile și turațiile sunt valori de pornire. Un postprocesor este text pe care îl puteți edita, dar decide doar cum se scriu mișcările; nu poate schimba traseul, adăuga axe sau ști despre mașina dvs. ([Postprocesoare](topic:post-processors) arată ce nu poate face).

## Trimiterea programului către o mașină

În CadCraft Studio pe desktop, cu o mașină configurată în Studio, **Trimitere către o mașină…** apare lângă **Descărcare cod G** și încarcă același program pe mașina din rețeaua dvs. Nu se pornește niciodată din PartCraft: porniți-l la mașină, când este clar. Într-un browser butonul nu se afișează (o pagină web nu poate ajunge la o mașină din rețeaua dvs.): descărcați programul în schimb.
