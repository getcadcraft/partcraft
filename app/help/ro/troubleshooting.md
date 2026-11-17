---
title: Depanare
summary: Probleme pe care le puteți întâlni în PartCraft, de la aplicația care nu pornește la operații care eșuează, schițe care nu se rezolvă, fișiere care nu se deschid și articulații care se comportă greșit, cu mesajul pe care îl vedeți și remedierea.
keywords: problemă, eroare, ajutor, nu funcționează, eșuează, eșec, blocare, gol, webgl, webassembly, nucleu, nerealizat, supradefinit, profil deschis, nu se poate deschide, nu se întâmplă nimic, direcție greșită, lent
from: 7728542c
---

Când ceva nu funcționează, citiți mai întâi **bara de stare** din partea de jos: PartCraft spune acolo de ce a refuzat sau ce așteaptă în continuare. O operație care eșuează își afișează mesajul și în partea de sus a panoului din dreapta și când treceți cu cursorul peste rândul ei din istoric.

## Aplicația nu pornește

### „Acest browser nu poate afișa 3D (WebGL este dezactivat sau lipsește), deci PartCraft nu poate rula aici.”

**Cauză:** browserul are grafica 3D (WebGL) dezactivată, blocată sau nesuportată de driverul grafic.

**Remediere:**

:::chromium
Deschideți `chrome://settings/system` (sau `edge://settings/system` în Edge) și activați „Utilizați accelerarea grafică, când este disponibilă”, apoi reporniți browserul. Dacă este activată, verificați `chrome://gpu` pentru starea WebGL și actualizați driverul grafic.
:::

:::firefox
Deschideți `about:support` și uitați-vă la Graphics, WebGL. Dacă este blocat, actualizați driverul grafic. În `about:config`, `webgl.disabled` trebuie să fie `false`.
:::

:::safari
WebGL este mereu activat în Safari-ul actual. Actualizați macOS (Safari se actualizează odată cu el). Dacă tot eșuează, încercați Chrome sau Firefox pe același Mac, ca să excludeți hardware-ul grafic.
:::

Desktopurile la distanță și unele mașini virtuale nu au WebGL. Încercați pe calculatorul propriu-zis.

### „Nucleul solid nu s-a încărcat: …”

**Cauză:** nucleul geometric (un program WebAssembly) nu a putut fi descărcat sau pornit. De obicei conexiunea s-a întrerupt în timpul încărcării aplicației, WebAssembly este dezactivat de o politică a companiei sau o setare de securitate a browserului, ori browserul este foarte vechi.

**Remediere:** reîncărcați pagina cât timp sunteți online. Dacă tot eșuează, încercați alt browser actual. În Firefox, `javascript.options.wasm` din `about:config` trebuie să fie `true`. Offline, aplicația și nucleul ei se încarcă doar dacă bara aplicației spunea **Pregătit pentru offline** înainte să pierdeți conexiunea ({{ui:Salvare pentru offline}} cât timp sunteți online; vezi [Lucrul offline](common:offline)).

### Butonul offline spune „Nu s-a putut salva” sau „Offline indisponibil”

**Nu s-a putut salva**: unele fișiere nu s-au descărcat. Faceți clic pentru a încerca din nou cât timp sunteți online; o conexiune lentă sau cu trafic tarifat poate avea nevoie de o a doua încercare. **Offline indisponibil**: această fereastră de browser nu poate păstra o copie offline (ferestrele private și unele calculatoare administrate o blochează). Folosiți o fereastră normală sau lăsați fila deschisă.

### PartCraft este offline, dar nu este actualizat

Faceți clic pe **Pregătit pentru offline** cât timp sunteți online și alegeți {{ui:Salvare din nou (obținere a celei mai noi versiuni)}}.

### „Baleiere: încă nerealizat. Are nevoie de un nucleu exact, …”

Mesajul complet este „<Nume>: încă nerealizat. Are nevoie de un nucleu exact, pe care această versiune a PartCraft nu îl are. {{ui:Ajutor}} › Ce nu este încă realizat spune ce să faceți în loc.” Îl vedeți când alegeți Baleiere, Loft, Nervură, o flanșă de tablă, o operație de suprafață, Combinare, Mutare corp, Scalare corp sau Repetiție pe traseu, și pentru celelalte lucruri pe care le face doar un nucleu exact. Nu este nimic în neregulă cu browserul sau cu piesa: această versiune a PartCraft construiește fiecare piesă cu nucleul de plasă. Vezi [Ce nu este încă realizat](topic:not-built-yet) pentru ce să faceți în loc și [Nucleul de plasă](topic:solid-kernels).

### „Se încarcă nucleul solid…” nu dispare niciodată

Așteptați puțin pe o conexiune lentă: nucleul și biblioteca 3D se descarcă prima dată. Apoi reîncărcați. Dacă pagina însăși arată o eroare, vedeți mai sus.

## Nimic nu se întâmplă când apăsați o tastă

- Tastele nu funcționează cât timp cursorul este într-o casetă dintr-un panou. Faceți clic în vederea 3D sau apăsați {{key:Esc}} după ce ați tastat (sau {{key:Tab}} ca să ieșiți).
- Tastele săgeți și {{key:Plus}}/{{key:Minus}} rotesc și măresc vederea doar după ce faceți clic în vedere.
- E deschisă o casetă de dialog: răspundeți-i întâi.
- Într-o schiță, {{key:F}} este instrumentul de racordare, nu Potrivire. Folosiți butonul {{ui:Potrivire}}.

## Un buton din bara de instrumente este estompat

- Butoanele operațiilor sunt estompate cât timp o schiță este deschisă. Închideți întâi schița.
- Instrumentele de schiță funcționează doar într-o schiță.
- {{ui:Anulare}} și {{ui:Refacere}} sunt estompate când nu este nimic de anulat sau de refăcut.
- {{ui:Ansamblu}} are nevoie de o piesă cu un solid. {{ui:Articulație}} are nevoie de două piese în ansamblu. {{ui:Editare piesă}} are nevoie de o piesă selectată.
- {{ui:STEP AP242 (solid exact)}} și {{ui:STEP AP214 (solid exact)}} sunt estompate într-un ansamblu: exportați fiecare piesă. Un alt program refuză fișierul exact: încercați {{ui:STEP AP214 (solid exact)}}, apoi {{ui:STEP (cu fațete, nucleu de plasă)}}, și spuneți-ne prin {{ui:Ajutor}} › {{ui:Raportare a unei probleme}}.
- {{ui:Baleiere}}, {{ui:Loft}} și celelalte operații care au nevoie de un nucleu exact nu sunt estompate: rămân apăsabile, descrierile lor se termină cu „încă nerealizat (are nevoie de un nucleu exact)”, iar un clic pe una spune asta în bara de stare. Vezi [Ce nu este încă realizat](topic:not-built-yet).
- {{ui:Desen}} are nevoie de o piesă cu un solid și este estompat cât timp o schiță este deschisă.
- Elementele din {{ui:Export}} sunt estompate într-un ansamblu: ansamblurile nu pot fi exportate încă. Închideți-l, sau editați o piesă, ca să exportați.

## Probleme cu schița

### Schița nu mă lasă să adaug o relație

„Nicio relație nu se potrivește acestei selecții. Selectați unul sau două elemente (Shift+clic adaugă).” Relația are nevoie de o altă selecție. Vezi [Relații și cote de schiță](topic:sketch-relations) pentru ce are nevoie fiecare.

### „Supradefinit: … nu pot fi îndeplinite toate. Anulați sau ștergeți unul dintre ele.”

**Cauză:** noua relație sau cota contrazice pe cele existente. Schița nu s-a mișcat.

**Remediere:** {{key:Mod+Z}}, sau ștergeți unul dintre elementele roșii din lista panoului din dreapta (alegeți **Ștergere** de lângă el).

### „Supradefinit: … este deja implicit. Ștergeți-l.”

**Cauză:** relația nu adaugă nimic: altele o impun deja (de exemplu Paralel pe două laturi ale unui dreptunghi, sau o cotă care este deja fixată). Nu există cote conduse în această versiune.

**Remediere:** ștergeți-o. Operația se construiește oricum, cu un avertisment.

### „Aceste elemente nu pot fi cotate împreună.”

Ați făcut clic, de exemplu, pe un punct și pe un cerc. Cotați către punctul central al cercului în schimb.

### „O racordare are nevoie de un colț unde se întâlnesc exact două linii.” / „Această rază este prea mare pentru aceste linii.”

Faceți clic exact pe punctul de colț al două linii pline. Folosiți o rază mai mică decât permite cea mai scurtă dintre linii.

### Geometria sare înapoi când o trageți

Tragerea ar rupe o relație sau o cotă, deci PartCraft o pune înapoi. Doar geometria albastră (subdefinită) se poate mișca.

### „Această schiță nu se poate deschide: are nevoie de Extrude2, care eșuează.”

Schița stă pe o față a unei operații care nu este construită. Remediați întâi acea operație, sau dezactivați-o, sau mergeți înainte.

## Probleme cu operațiile

| Mesaj | Cauză | Remediere |
|---|---|---|
| „Faceți întâi o schiță: alegeți un plan, Schiță, desenați un profil închis, Ieșire.” | Nicio schiță nefolosită cu curbe și nicio schiță selectată | Desenați o schiță, sau selectați în istoric schița de folosit |
| „Schița nu are un profil închis de extrudat.” (sau „de rotit”) | Nicio buclă închisă de linii pline | Închideți golurile; treceți liniile de construcție înapoi cu {{key:Q}} |
| „Profilul este deschis: un capăt la (x, y) nu este unit cu nimic.” | Un gol în acel punct | Deschideți schița, trageți capătul peste vecinul său ca să se fixeze |
| „Profilul se ramifică la (x, y): mai mult de două capete se întâlnesc acolo.” | Trei sau mai multe linii se întâlnesc într-un punct | Ștergeți linia în plus, sau comutați-o pe construcție |
| „O buclă închisă are nevoie de cel puțin trei laturi sau o curbă.” | Două linii duse și întoarse | Redesenați bucla |
| „Până la capăt este pentru tăieturi. Folosiți o adâncime pentru un corp.” | Un corp setat pe Până la capăt | Setați Sfârșit pe Orb sau Plan median |
| „Nu este nimic de tăiat pe acea parte a schiței. Încercați cealaltă direcție.” | Tăietura indică în afara materialului | Bifați Inversare direcție |
| „Nu este încă nimic de tăiat.” / „Nu este încă nimic de găurit.” | Niciun solid înainte de această operație | Faceți întâi un corp, sau mutați operația mai jos |
| „Desenați o linie de centru (o linie de construcție) în schiță în jurul căreia să faceți revoluția.” | Revoluție fără axă | Adăugați o linie de centru, sau alegeți o linie la Axă |
| „Profilul traversează axa. Țineți-l pe o singură parte a liniei de centru.” | Profil pe ambele părți ale axei | Redesenați jumătate din profil |
| „Puneți puncte de schiță unde vor fi găurile (instrumentul Punct), apoi faceți gaura.” | Niciun punct liber în schiță | Adăugați puncte cu {{key:P}} |
| „Lamajul trebuie să fie mai lat decât gaura.” | Ø-ul lamajului nu este mai mare decât Diametrul | Faceți lamajul mai lat |
| „Lamajul trebuie să fie mai puțin adânc decât gaura.” | Lamaj mai adânc decât o gaură oarbă | Faceți-l mai puțin adânc, sau gaura mai adâncă |
| „Alegeți operațiile de copiat.” | O repetiție sau o oglindire fără nimic bifat | Bifați o operație din Operații de copiat |
| „Extrude2 nu are niciun solid de copiat.” | Operația copiată a eșuat sau este oprită | Remediați-o sau reactivați-o |
| „Are nevoie de Sketch3, care eșuează.” | O operație de care depinde nu este construită | Remediați operația numită |
| „Fața pe care stă este dispărută (Extrude1 nu este construită).” | Fața schiței nu mai există | Remediați acea operație, sau ștergeți schița și desenați din nou |
| „Nu mai rămâne nimic din piesă după aceasta.” | O tăietură a înlăturat tot materialul | Verificați dimensiunea și direcția tăieturii |
| „Nucleul solid nu a putut construi asta (…).” sau „Nucleul solid nu a putut combina asta cu corpul.” | Nucleul a refuzat geometria | Anulați, sau schimbați ușor dimensiunile; fețele care se ating exact pot cauza asta |
| „Baleiere: încă nerealizat. Are nevoie de un nucleu exact, pe care această versiune a PartCraft nu îl are.” (și Loft, Nervură și celelalte) | O operație făcută într-o versiune anterioară, pe care doar un nucleu exact o poate construi. Rămâne în istoric și se salvează înapoi neschimbată | Dezactivați-o sau ștergeți-o; vezi [Ce nu este încă realizat](topic:not-built-yet) pentru ce să faceți în loc |
| „O rotunjire de 5 mm nu încape aici (…).” / „Un teșit de 2 mm …” | Dimensiunea este prea mare pentru o față de lângă muchie, sau colțul nu poate fi îmbinat | O dimensiune mai mică, sau mai puține muchii pe operație |
| „Racordare: în această versiune doar muchii drepte între două fețe plane (nucleul de plasă le construiește). Rotunjiți sau teșiți muchiile curbe în schiță.” (și Teșire) | O muchie aleasă este rotundă, ca marginea unei găuri, sau se află pe o față curbă | Faceți clic pe {{ui:Alegere muchii}} și eliminați-o; rotunjiți sau teșiți acel colț în schiță |
| „O racordare a cărei rază se schimbă de-a lungul muchiei: încă nerealizat (are nevoie de un nucleu exact). Dați o singură rază.” | **Rază variabilă** este bifată | Debifați-o și dați o singură rază |
| „Racordare cu nucleul de plasă: unde muchiile rotunjite se întâlnesc, sunt înclinate, nu îmbinate.” (⚠, un avertisment) | Muchiile alese se întâlnesc într-un colț; rotunjirile se întâlnesc acolo într-o încrețitură ascuțită | Nimic de remediat: piesa este construită. Racordați mai puține muchii dacă încrețitura contează |
| „O muchie pe care o rotunjește a dispărut: muchia dintre Extrude1 și Cut2.” | O modificare anterioară a eliminat muchia | {{ui:Alegere muchii}}, eliminați muchia roșie, alegeți-o pe cea nouă |
| „Alegeți muchiile în vedere, apoi adăugați-le.” | Racordarea sau teșirea nu are muchii | {{ui:Alegere muchii}} |
| „Alegeți fețele de eliminat (deschise), apoi goliți.” | Golirea nu are fețe deschise | {{ui:Alegere fețe}} |
| „Golirea nu a putut fi făcută cu această grosime (…).” | Peretele este mai gros decât o parte subțire a modelului sau decât o rază de racordare | Un perete mai subțire, sau racordări mai mari |
| „Golire: în această versiune deschide doar fețe plane (nucleul de plasă o construiește).” | O față deschisă este curbă | Faceți clic pe {{ui:Alegere fețe}} și eliminați-o; deschideți doar fețe plane |
| „Înclinare: în această versiune doar fețe plane (nucleul de plasă le construiește).” | O față înclinată este un cilindru, un con sau o față liberă | Eliminați-o; înclinați doar fețe plane |
| „O față pe care o deschide este dispărută (…).” | O modificare anterioară a eliminat fața | Faceți clic pe {{ui:Alegere fețe}} din nou |
| „Racordare1 schimbă muchiile sau pereții corpului; nu poate fi copiată. …” | O repetiție sau o oglindire copiază o racordare, un teșit sau o golire | Debifați-o; repetați întâi tăieturile, apoi racordați |
| „Are loc pe o față pe care doar un nucleu exact o poate găsi: încă nerealizat în această versiune.” | O schiță pe o față pe care nucleul de plasă nu o poate găsi, cum ar fi una făcută într-o versiune anterioară | Desenați pe un plan de bază sau pe o față plană a unei extrudări, și poziționați-o cu cote |
| „Folosește o față sau o muchie a solidului, pe care doar un nucleu exact o poate găsi: încă nerealizat în această versiune.” | Un plan, o axă sau un punct de referință pe o față sau muchie a solidului | Construiți-l din planuri de bază, puncte de schiță sau coordonate |
| „Extrudarea până la o față, fața următoare sau un vârf: încă nerealizată (are nevoie de un nucleu exact).” / „O conicitate: încă nerealizată (are nevoie de un nucleu exact).” | O condiție de capăt sau o conicitate pe care doar un nucleu exact le construiește | Folosiți o adâncime Orb sau Plan median pe care o măsurați; lăsați Conicitate la 0 |

## Probleme la alegere

- „Această față este curbă. Alegeți o față plană sau un plan pentru a desena pe el.” Schițele au nevoie de o față plană. Desenați pe un plan de bază și poziționați schița cu cote.
- O față spune „Fixată unde a fost aleasă”: nu a fost făcută de o muchie de schiță (de exemplu o față a unei copii dintr-o repetiție), deci o schiță pe ea rămâne pe loc când se schimbă piesa.
- Muchiile sunt greu de atins: măriți. O muchie câștigă în fața feței de lângă ea când cursorul este exact pe ea.

## Probleme cu fișierele

| Mesaj | Remediere |
|---|---|
| „PartCraft deschide propriile fișiere .partcraft.json, exporturile din macroul CadCraft pentru SolidWorks (.cadcraft-sw.json) și fișierele STEP. „bracket.igs” nu este niciunul dintre acestea.” | Doar acestea sunt recunoscute (și plasele STL, OBJ și 3MF, și fișierele `.3dm`) |
| „„part.stp” nu este un fișier STEP (nu începe cu ISO-10303-21).” | Fișierul nu este text STEP |
| „Acest fișier STEP este prea mare (peste 60 MB) pentru a fi importat aici.” | Simplificați-l la sursă |
| „Acest fișier este prea mare pentru a fi o piesă PartCraft.” la propria piesă salvată | Un solid STEP mare importat într-o versiune anterioară a făcut fișierul piesei mai mare de 50 MB. Folosiți o copie anterioară fără el |
| „Acest fișier este prea mare pentru a fi o piesă PartCraft.” | Fișierul are peste 50 MB; nu este un fișier PartCraft |
| „Acesta nu este un fișier PartCraft (nu este JSON).” / „Acesta nu este un fișier PartCraft.” | Fișierul este deteriorat sau aparține altui program |
| „Acest fișier a fost salvat de un PartCraft mai nou (versiunea fișierului …); acesta citește versiunea …” | Deschideți-l în PartCraft-ul mai nou |
| „Extrude2: adâncimea este greșită.” (sau altă valoare) | Fișierul a fost editat manual sau deteriorat. Folosiți o copie anterioară |
| Inserarea într-un ansamblu spune „Part1.partcraft.json nu are niciun solid de inserat.” | Fișierul piesei nu are solid. Deschideți-l, construiți un solid, salvați și inserați din nou |

**Fișierul meu salvat nu este unde mă așteptam.** Salvarea este o descărcare: uitați-vă în folderul de descărcări al browserului sau deschideți lista de descărcări din bara browserului. Vezi [Unde ajung fișierele](common:your-files).

**Am deschis o piesă, dar ansamblul este încă pe ecran.** Piesa s-a încărcat în spatele ansamblului. Alegeți {{ui:Închidere}} ca să închideți ansamblul și să vedeți piesa. Închideți ansamblurile înainte să deschideți fișiere de piesă.

## Probleme cu desenul

| Mesaj | Remediere |
|---|---|
| „Construiți întâi un solid, apoi faceți desenul lui.” | Construiți întâi piesa |
| „Nu este loc pe foaie pentru: detaliu. Faceți detaliul mai mic sau renunțați la o vedere.” | **Raza detaliului** sau **Scara detaliului** mai mici, sau eliminați secțiunea |
| „Un detaliu se ia din vederea din față, de sus, din dreapta sau din secțiune.” | Faceți clic pe una dintre aceste vederi |
| „Faceți clic pe una dintre vederi.” | Clicul a fost pe hârtia goală |
| „Poziția are nevoie de cel puțin o referință de bază.” și celelalte mesaje ale cadrelor | Setați bazele pe care le cere panoul, sau alegeți altă caracteristică |
| „Vederile desenului nu au putut fi făcute: …” | Anulați ultima modificare. Dacă se repetă, salvați, reîncărcați și redeschideți piesa |

## Probleme cu ansamblul

| Mesaj | Remediere |
|---|---|
| „Construiți întâi un solid, apoi puneți-l într-un ansamblu.” | Piesa nu are încă un solid |
| „Inserați întâi o a doua piesă (Adăugare copie, Inserare, sau Editare › Duplicare).” | O articulație are nevoie de două piese |
| „Alegeți o față de pe o altă piesă.” | Ambele fețe ale unei articulații trebuie să fie pe piese diferite |
| „Această față este curbă. Alegeți o față plană …” | Articulațiile pornesc de la fețe plane. Apoi folosiți **Centrare pe** pentru o gaură sau o axă de revoluție |
| „Bracket2 nu este legată de piesa fixată, deci rămâne unde a fost pusă.” | Adăugați o articulație de la ea la o piesă care este plasată |
| „Revolute3 închide o buclă care nu se poate închide: este decalată cu 2.000 mm. Verificați fețele, decalajele și limitele articulațiilor buclei.” | Piesele nu pot toate să se întâlnească: verificați lungimile, fețele folosite de fiecare articulație, decalajele (piesele așezate față în față trebuie să concorde în adâncime) și limitele; sau eliminați o articulație din buclă |
| „Fața folosită de această articulație a dispărut din Bracket.” / „Axa folosită de această articulație a dispărut din Bracket.” | Piesa a fost editată. Eliminați articulația și faceți-o din nou |
| „Axa rulează de-a lungul feței, deci nu poate stabili centrul articulației.” | Alegeți o axă care traversează fața, sau „Originea proprie a feței” |
| „Un ansamblu păstrează cel puțin o piesă. Închideți-l în schimb.” | Folosiți {{ui:Închidere}} |

**Piesele sunt unite, dar în locul greșit.** Setați **Centrare pe** pentru ambele părți ale articulației la găurile sau axele de revoluție care ar trebui să se alinieze, apoi ajustați **Unghi (°)** și **Decalaj (mm)**.

## Este lent

- Setați **Curbe** pe Normal sau Grosier când modelați; treceți pe Fin înainte de export.
- Numărul mare de copii dintr-o repetiție (sute de copii) durează la reconstruire la fiecare modificare. Opriți repetiția cât lucrați la alte operații.
- Verificarea coliziunilor și verificarea mișcării compară fiecare pereche de piese; ansamblurile mari durează mai mult.
- Închideți alte file grele. PartCraft rulează pe procesorul și grafica propriului calculator.

## Încă blocat

Salvați mai întâi fișierul ({{key:Mod+S}}), apoi reîncărcați pagina și deschideți-l din nou. Dacă o operație tot eșuează, selectați-o, citiți mesajul și încercați {{key:Mod+Z}} înapoi până la ultima stare bună.
