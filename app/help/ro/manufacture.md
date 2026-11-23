---
title: Crearea traseelor și a codului G (Fabricație)
summary: Configurați semifabricatul și originea de lucru, alegeți sculele, adăugați operații de față, buzunar, contur, găurire și șanfren prin selectarea fețelor, finisați întregul model în 3D (paralel, scallop), simulați semifabricatul față de model pentru prelucrare excesivă și timp de ciclu și descărcați codul G dintr-unul dintre cele trei posturi încorporate sau dintr-unul pe care îl editați singur.
keywords: step exact, step pentru atelier, coordonate de lucru, predare CAM, paralel, scallop, finisare 3D, finisare, capăt sferic, bibliotecă de scule, editare post, post personalizat, editor de post, adaptiv, curățare adaptivă, angajare constantă, trochoidal, hsm, prelucrare la viteză mare, fabricație, CAM, traseu de sculă, cod G, NC, CNC, freză, frezare, buzunar, contur, profil, planare, găurire, peck, G83, G81, G73, șanfren, semifabricat, decalaj de lucru, G54, postprocesor, GRBL, LinuxCNC, avansuri și turații, simulare, prelucrare excesivă, timp de ciclu
from: f8a03be8
---

Spațiul de lucru Fabricație transformă piesa în trasee și le scrie ca cod G. Majoritatea operațiilor sunt frezare **2.5 axe**: scula rămâne verticală, pereții sunt tăiați drept în jos, iar fundurile sunt plate. **{{ui:Degroșare 3D}}** și **{{ui:Restul}}** prelucrează piese curbe în 3D ([Degroșare 3D și prelucrarea restului](topic:rough-3d)); **{{ui:Paralel}}** și **{{ui:Scallop}}** le finisează ([Finisare 3D](topic:finish-3d)). Pe o mașină cu axe rotative, orice operație poate avea o sculă înclinată, iar două operații mută axele rotative în timpul așchierii ([Prelucrare pe 4 și 5 axe](topic:multi-axis)). Există operații pentru strung ([Strunjire la strung](topic:turning)) și pentru un palpator ([Palpare](topic:probing)). Lucrează pe fețele numite pe care le dă nucleul de plasă piesei (vezi [Nucleul de plasă](topic:solid-kernels)).

Versiune de laborator: verificați fiecare program în simulatorul propriu al comenzii și rulați-l mai întâi în aer, deasupra semifabricatului.

## Configurare

1. Alegeți **Fabricație** din comutatorul spațiului de lucru, apoi {{ui:Configurare nouă}}.
2. Pe fila **Configurare** alegeți:
   - **Axa sculei (+Z)**: în ce sens arată scula spre piesă. +Y global (sus în PartCraft) este implicit; axa X a mașinii este atunci X global, iar axa Y a mașinii este −Z global.
   - **Originea de lucru (G54)**: un colț sau centrul semifabricatului, partea de sus sau de jos, centrul de sus al modelului sau originea modelului.
   - **Semifabricat**: un bloc sau un cilindru, fie modelul plus adaosuri (laterale, sus, jos), fie o dimensiune fixă.
   - **Material** (stabilește avansurile și turațiile de pornire), **postul** (comanda), turația maximă a arborelui, viteza de avans rapid și timpul de schimbare a sculei, lichidul de răcire și numărul programului.

## Scule

Fila **Scule** conține biblioteca: freze plate, cu capăt sferic și cu colț rotunjit, burghie, freze de șanfren și freze frontale, fiecare cu un număr T, diametru, numărul canalelor și lungimea canalelor (plus raza colțului, unghiul vârfului sau al șanfrenului acolo unde se aplică).

Sculele mele pot fi salvate în browser și mutate între calculatoare ca fișier: vezi [Biblioteca de scule](topic:tool-library).

Turația arborelui și avansul vin din material: n = 1000 × viteza de așchiere / (π × diametru), avans = n × canale × grosimea așchiei (burghie: n × avans pe rotație). Valorile sunt valori de pornire prudente, din intervale publicate, nereglate pentru mașina respectivă; introduceți viteza de așchiere, grosimea așchiei, turația sau avansul dat de producătorul sculei pentru a le înlocui. Când turația depășește maximul mașinii, ea este menținută acolo, iar avansul urmează, păstrând grosimea așchiei.

## Adăugarea operațiilor

Fiecare buton din bara de instrumente adaugă o operație și, acolo unde are nevoie de geometrie, începe selectarea: faceți clic pe fețe sau muchii în vizualizare (clic din nou pentru a renunța la una), apoi {{ui:Alegere terminată}} sau {{key:Esc}}.

| Operație | Selectare | Ce face |
|---|---|---|
| {{ui:Față}} | nimic | Treceri în zig-zag peste tot semifabricatul, dincolo de margini, până la partea de sus a modelului |
| {{ui:Buzunar}} | o față plată de fund, o gaură rotundă sau un lanț închis de muchii | Curăță regiunea prin treceri decalate din interior spre exterior, la fiecare pas pe adâncime; insulele (fețe ridicate în interiorul fundului) sunt lăsate; un fund deschis pe tot conturul (nimic mai înalt în afară) este curățat până la marginea semifabricatului |
| {{ui:Adaptiv}} | la fel ca {{ui:Buzunar}} | Curăță aceeași regiune în treceri care taie fiecare o lățime stabilită (**Angajare**, o fracțiune din diametru), astfel încât scula să nu ia niciodată o canelură pe lățimea întreagă, nici în colțuri; intră printr-o elice și finisează pereții la fiecare nivel. Tăieturile înguste permit o coborâre mai adâncă și un avans mai mare |
| {{ui:Contur}} | o față plată (conturul ei), o față rotundă sau muchii | Urmărește conturul decalat cu raza sculei, în exterior sau în interior, cu arce de intrare și de ieșire și opțional cu punți de reținere |
| {{ui:Găurire}} | găuri (faceți clic pe peretele unei găuri sau pe marginea ei) | Găurește fiecare gaură cu un ciclu fix: cu pași (G83), simplu (G81) sau cu rupere a așchiei (G73); ori dați un diametru pentru a găuri fiecare gaură de această dimensiune |
| {{ui:Șanfren}} | conturul unei fețe sau muchii | Trece o freză de șanfren de-a lungul muchiei, astfel încât să taie lățimea stabilită |
| {{ui:Paralel}} | nimic (întregul model) | Finisare 3D pe linii paralele, la orice unghi, care urmărește suprafața cu o freză cu capăt sferic, cu colț rotunjit sau plată. Vezi [Finisare 3D](topic:finish-3d) |
| {{ui:Scallop}} | nimic (întregul model) | Finisare 3D în treceri la o distanță stabilită pe suprafață, astfel încât creasta dintre ele să aibă înălțimea cerută |

Selectați o operație din listă pentru a schimba scula, înălțimile (distanța de siguranță, retragerea, înălțimea de avans, partea de sus, partea de jos), pasul pe adâncime, pasul lateral, adaosul de lăsat, trecerea de finisare, intrarea (elice, rampă sau scufundare), frezarea în sens concordant, punțile sau ciclul. {{ui:Sus}} și {{ui:Jos}} reordonează, {{ui:Suprimare}} o lasă afară, {{ui:Ștergere}} o elimină. Totul este în istoricul de anulare și este salvat în fișierul piesei.

Pasul lateral al unui buzunar este cel mult jumătate din diametrul sculei, astfel încât fiecare punct al fundului se află la cel mult o rază de sculă de o trecere. Colțurile interioare păstrează raza sculei.

**Curățarea adaptivă** menține angajarea frezei aproape de o singură valoare. O angajare de 0.15 din diametru înseamnă un unghi de angajare de circa 46°: arcul muchiei frezei din material. Un buzunar decalat, în schimb, taie pe lățimea întreagă la prima trecere și se înfășoară mai mult în fiecare colț interior. Între treceri scula rămâne coborâtă acolo unde trece prin aer tăiat și se ridică și coboară în aer tăiat în rest. Trecerile sunt calculate pe o rețea fină peste regiune (celule de circa o douăsprezecime din raza sculei), astfel încât angajarea poate depăși cu circa o celulă valoarea stabilită; pereții sunt finisați exact. O regiune mare și deschisă face un program lung cu multe deplasări scurte.

## Simulare

Traseele sunt recalculate după fiecare modificare (și cele ale piesei). {{ui:Simulare}} arată și semifabricatul rămas după întregul program. Panoul arată:

- **Timp de ciclu**: deplasările de avans la avansul lor, deplasările rapide ca linii drepte la viteza rapidă din configurare, plus timpul de schimbare a sculei. Mașinile reale accelerează, deci durează mai mult.
- **Prelucrare excesivă**: locuri unde scula a coborât cu mai mult de 0.02 mm sub suprafața piesei. Marcajele roșii le arată în vizualizare.
- **Semifabricat rămas pe piesă**.

Semifabricatul este o hartă a înălțimilor de sus (o hartă Z), deci nu poate arăta subtăieri. Trageți **Redare** pentru a muta scula de-a lungul programului. În vizualizare, deplasările de avans sunt pline, iar cele rapide sunt întrerupte, cu o culoare pentru fiecare operație.

Cu **Afișare semifabricat simulat** activată, semifabricatul este colorat în raport cu modelul, celulă cu celulă: **verde** unde este pe model (în limita a 0.02 mm), **roșu** unde scula a tăiat în model și, unde pe model rămâne semifabricat, **galben** pentru o pieliță subțire, **portocaliu** pentru mai mult, care trece în **gri** al semifabricatului netăiat la 1 mm sau mai mult. Culorile sunt recalculate la fiecare modificare, din aceeași hartă a înălțimilor ca și cifrele din panou, astfel încât verdele și roșul concordă cu rândul Prelucrare excesivă. Un șanfren taie în model intenționat și apare roșu de-a lungul muchiei lui.

## Postarea codului G

Alegeți comanda sub **Postprocesor** și apăsați {{ui:Descărcare cod G}} (sau {{ui:Postprocesor}} din bara de instrumente):

| Comandă | Fișier | Observații |
|---|---|---|
| ISO în stil Fanuc | .nc | %, număr O, numere de linie, T M6 cu G43 H, cicluri fixe |
| GRBL | .nc | Fără schimbător de scule și fără cicluri fixe: o schimbare de sculă se oprește cu M0, iar găurirea este scrisă ca deplasări simple |
| LinuxCNC | .ngc | T M6 cu G43 H, cicluri fixe, M2 |
| Strung în stil Fanuc | .nc | Pentru programe de strunjire: X ca diametru, avans pe rotație, G96 sub o limită G50, filetare G32 |
| Strung LinuxCNC | .ngc | Pentru programe de strunjire: diametre G7, G95, G96, filetare G33; nu scrie o mișcare de referențiere |
| Propriu | oricare | Un post scris sau modificat: {{ui:Editează postul…}}, {{ui:Post nou…}}, {{ui:Importă fișierul de post…}} |

Fiecare fișier începe cu comentarii pentru program, semifabricat, decalajul de lucru și scule. Coordonatele sunt în milimetri, cu 3 zecimale. {{ui:Traiectorie CSV}} și {{ui:Traiectorie JSON}} exportă chiar deplasările.

**Verificați rezultatul în simulatorul propriu al mașinii înainte de așchiere și rulați-l mai întâi în aer, deasupra semifabricatului.** Cele trei posturi încorporate sunt puncte de plecare care urmează comportamentul documentat al comenzilor; nu au fost verificate pe o mașină anume. Un post modificat trebuie verificat de cel care l-a modificat. Cum se scrie unul: [Postprocesoare editabile](topic:post-processors).

## STEP exact pentru atelier

Sub butoanele de cod G din fila **Operații**, {{ui:STEP exact (coordonate de lucru)}} descarcă `<part>-work.step`: piesa ca solid exact (cilindri adevărați pentru găuri și proeminențe, cercuri adevărate pentru muchiile lor), cu originea în originea de lucru a acestei configurări și Z pe axa sculei. Acestea sunt coordonatele pe care le folosește codul G, astfel încât programul CAM sau verificatorul atelierului aliniază modelul cu programul fără a-l muta. Fișierul conține doar piesa, nu semifabricatul sau traseele.

{{ui:Export}} › {{ui:STEP AP242 (solid exact)}} scrie același solid în poziția proprie a piesei (Z în sus): vezi [Export pentru imprimare, STEP și DXF](topic:export-files#for-other-cad-programs-step).

## Limite

- Buzunarele, conturele, găurirea și șanfrenele sunt pe 2.5 axe. Piesele curbe sunt degroșate și finisate în 3D prin operațiile lor proprii ([Degroșare 3D și prelucrarea restului](topic:rough-3d), [Finisare 3D](topic:finish-3d)). Curățarea adaptivă este 2D (fundaturi plate).
- Sculele înclinate, finisarea pe 5 axe și pe a 4-a axă, strunjirea și palparea există, fiecare cu limitele sale, iar **niciuna dintre ele nu a fost rulată pe o mașină**: vezi [Prelucrare pe 4 și 5 axe](topic:multi-axis), [Strunjire la strung](topic:turning) și [Palpare](topic:probing).
- Portsculele și cozile nu sunt verificate la coliziuni; apare un avertisment când o tăietură este mai adâncă decât lungimea canalelor.
- Avansurile și turațiile sunt valori de pornire. Un post este un text care poate fi editat, dar decide doar cum sunt scrise deplasările; nu poate schimba traseul sculei, nu poate adăuga axe și nu cunoaște mașina ([Postprocesoare editabile](topic:post-processors) enumeră ce nu poate face).

## Trimiterea programului către o mașină

În CadCraft Studio pe desktop, cu o mașină configurată în Studio, **Trimitere către o mașină…** apare lângă **Descărcare cod G** și încarcă același program pe mașina din rețea. Nu este pornit niciodată din PartCraft: porniți-l la mașină când zona este liberă. În browser butonul nu apare (o pagină web nu poate ajunge la o mașină din rețea): descărcați programul.
