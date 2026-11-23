---
title: Ce este încă nerealizat
summary: Tot ce nu face încă această versiune PartCraft, de la baleieri cu răsucire la afișarea în inch, cote de desen și subansambluri, cu ce să folosiți în schimb astăzi.
keywords: lipsă, încă nu, limite, limitări, plan de dezvoltare, nucleu exact, racordare, șanfren, scobire în coajă, baleiere, import STEP, baleiere cu răsucire, tangență la capătul loft, racordare pe față, ecuații, inch, cote de desen, subansambluri, cloud, tabletă, telefon
from: 97b10a29
---

PartCraft este o versiune timpurie. Această pagină listează ce nu face încă, ca să nu le căutați, și ce să folosiți în schimb astăzi. Nimic de aici nu are dată.

## Are nevoie de un nucleu exact

Această versiune construiește fiecare piesă cu nucleul de plasă (vezi [Nucleul de plasă](topic:solid-kernels)). Tot ce urmează are nevoie de un nucleu exact de geometrie, pe care această versiune nu îl are încă. Piesele salvate cu aceste funcții se deschid în continuare: funcțiile rămân în istoric, marcate ca nerealizate, și sunt păstrate la salvare.

| Încă nerealizat | În schimb, astăzi |
|---|---|
| {{ui:Racordare}} și {{ui:Șanfren}} pe muchii rotunde; racordări a căror rază se schimbă de-a lungul muchiei; rotunjiri îmbinate lin acolo unde se întâlnesc (nucleul de plasă le îmbină în unghi) | Racordarea și șanfrenul funcționează pe muchii drepte între fețe plate; rotunjiți celelalte colțuri în schiță înainte de extrudare ({{ui:Racordare}} într-o schiță, {{key:F}}) |
| {{ui:Scobire în coajă}} a fețelor curbe; pereți de grosimi diferite | Fețe plate deschise; adăugați material cu extrudări acolo unde un perete trebuie să fie mai gros |
| {{ui:Baleiere}}, {{ui:Loft}}, {{ui:Înclinare}} pe fețe curbe; extrudare până la o față, la următoarea față sau la un vârf; extrudări conice | Extrudați sau rotiți, în pași unde e nevoie; extrudați pe o adâncime măsurată |
| {{ui:Nervură}}, {{ui:Flanșă de bază}}, {{ui:Flanșă de muchie}} și desfășurări | Extrudați placa sau profilul nervurii |
| Suprafețe: finisarea unei {{ui:Formă}} în piesă, {{ui:Petic}}, {{ui:Suprafață loft}}, {{ui:Suprafață Gordon}}, {{ui:Cusătură}}, {{ui:Îngroșare}}, {{ui:Suprafață decalată}}, {{ui:Extindere suprafață}}, {{ui:Tăiere suprafață}} | Nu este disponibil |
| Mai multe corpuri: {{ui:Combinare}}, {{ui:Mutare corp}}, {{ui:Scalare corp}}, {{ui:Repetiție pe traseu}}, funcții care fac un corp nou | Un solid; repetițiile și oglinzile copiază funcții |
| Schițe, plane, axe și puncte pe fețe pe care le poate găsi doar un nucleu exact (o față făcută de o racordare, peretele unei găuri, o față a unui solid importat) | Schițați pe planurile de bază, planuri de referință și fețele plate ale extrudărilor și rotirilor |
| Un rezultat de proiectare generativă deschis ca piesă sau adăugat la ea (devine solid importat) | Descărcați rezultatul ca STL sau STEP |
| Editarea fețelor curbe ale unui fișier STEP deschis ca suprafețe exacte; STEP exact al fețelor spline, baleiate și rotite dintr-un fișier STEP, laturi spline, filete modelate, corpuri STL / OBJ / 3MF și ansambluri; STEP pentru alți modelatori de piese | {{ui:Deschidere}} citește STEP ca triunghiuri și păstrează fețele plate, cilindrii, conurile, sferele și tori-ul fișierului pentru export ([Deschiderea unui fișier STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (solid exact)}} scrie exact fiecare față analitică și păstrează acestea ca fațete ([Export](topic:export-files#for-other-cad-programs-step)); macroul pentru alt modelator de piese încă scrie |
| Arce adevărate în vederile de desen | Vederile și vederile în secțiune sunt desenate din fațete |
| Volume, arii și distanțe exacte | {{ui:Măsurare}} dă cifrele solidului cu fațete, puțin mai mici la piesele rotunde; o setare mai fină **Curbe** le apropie |

Unele rânduri din tabelele de mai jos sugerează una dintre aceste funcții ca mod de a ocoli altceva. Aceste sugestii se aplică după ce revine un nucleu exact.

## Funcții

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Racordări pe fețe, racordări complet rotunde, racordări cu raze fixate în puncte de-a lungul unei muchii | {{ui:Racordare}} cu rază constantă sau variabilă liniar; mai multe funcții de racordare |
| Scobiri cu grosimi diferite de perete | O singură grosime de {{ui:Scobire în coajă}}; adăugați material cu extrudări acolo unde un perete trebuie să fie mai gros |
| Înclinare pe fețe libere (spline) | {{ui:Înclinare}} funcționează pe fețe plate, cilindrice și conice |
| Baleieri cu răsucire, baleieri cu perete subțire și pe suprafață; tangență la capăt pe funcția Loft; un loft cu o singură șină de ghidare; trasee spline | {{ui:Baleiere}} cu orientare fixă sau cu o scalare la capăt; un loft cu două sau mai multe șine de ghidare: vezi [Baleiere, loft și înclinare](topic:sweep-loft-draft) |
| Nervuri din arce sau spline; nervuri crescute pătrat față de schiță (dintr-o vedere de sus); înclinare pe nervuri; mai multe nervuri dintr-o schiță | {{ui:Nervură}} dintr-un lanț de linii în planul propriu al nervurii: vezi [Nervuri și gusee](topic:rib) |
| „Până la” o suprafață curbă, „până la următoarea” oprită pe o față curbă | Până la o față plată sau un plan de referință |
| Găuri contragăurite, filete în inch și de țeavă, filete conice, ieșiri de filet și începuturi de filet teșite | Lamare cu o adâncime mică; filete metrice ISO și trapezoidale, cosmetice sau modelate: vezi [Filete pe axe și alezaje, desenate sau modelate](topic:threads) |
| Extrudări de elemente subțiri | Desenați ambii pereți ai profilului |
| Copii de repetiție omise una câte una, umpleri de repetiție | Folosiți funcții separate; repetiții de-a lungul unei curbe: {{ui:Repetiție pe traseu}} |
| Copierea repetițiilor, oglinzilor, racordărilor, șanfrenelor, scobirilor și solidelor importate | Copiați schița sau funcția pe care sunt construite sau repetați-le |
| Tangență exactă (G1) la punctele extraordinare ale unei forme; îmbinarea petelor unei forme în fețe mai mari | Măriți nivelul formei: petele aproximate devin mai mici; vezi [Forme libere cu Formă](topic:form-surfaces) |
| O formă din mai multe piese închise separate într-o funcție; punți între forme | O piesă închisă pe funcția Formă; uniți-le cu {{ui:Unire}} |
| Selectarea corpurilor de suprafață în vizualizare (cu excepția punctelor de tăiere și de petic); racordări de suprafață; detașare; petice G2; suprafețe Gordon tangente la vecini curbi (tangența la plane și fețe plate este realizată) | Alegeți-le după nume în panoul funcției; îngroșați mai întâi, apoi racordați solidul |
| O listă de corpuri în istoric; lăsarea corpurilor ascunse afară din exporturi | Redenumiți și ascundeți corpurile din lista de corpuri a panoului piesei; ștergeți sau suprimați funcția care a creat un corp ca să-l lăsați afară |
| O scalare neuniformă care păstrează cilindrii și conurile analitice; scalare neuniformă a suprafețelor decalate | {{ui:Scalare corp}} face fețele curbe B-spline închise (în 0.0000004 mm); o scalare uniformă rămâne exactă |
| Combinarea corpurilor de suprafață; sume Minkowski | {{ui:Cusătură}} sau {{ui:Îngroșare}} mai întâi, apoi {{ui:Combinare}} |
| Analiza toleranțelor: lanțuri care fac colțuri (bucle vectoriale 2D și 3D), sensibilități calculate din geometrie, Monte Carlo cu alte distribuții, toleranțe pe dimensiuni de schiță, toleranță bonus din condiția materialului | {{ui:Stack-up}} într-un ansamblu: o direcție, cazul cel mai rău și RSS, toleranțe scrise, din toleranța generală a blocului de titlu sau din cadre GD&T: vezi [Lanțuri de toleranțe](topic:tolerance-stackup) |
| Nesting: ordinea de tăiere și intrările; tăierea muchiilor comune o singură dată; piese care trebuie ținute împreună; resturi de role, stoc comun între proiecte | {{ui:Dispunere piese plate pe foi…}} cu distanțe, margini, rotiri și fibră: vezi [Dispunerea pieselor plate pe foi](topic:nest-flat-parts); plăcile rămase sunt păstrate și folosite primele: vezi [Păstrarea și refolosirea resturilor](topic:nest-offcuts); planificați tăierea în software-ul mașinii de tăiat |
| Tablă: tiveturi, decroșări, flanșe în unghi și de contur; flanșe pe margini curbe sau pe fețele unei flanșe de bază îndoite; îndoituri schițate; închideri de colț; scule de formare; transformarea unui solid în tablă; desfășurarea unei flanșe de bază îndoite cu tăieturi; tabele de îndoire | {{ui:Flanșă de bază}} (o placă sau un profil îndoit), {{ui:Flanșă de muchie}} pe muchiile drepte ale unei plăci, cu degajări de îndoire, și desfășurarea cu un factor K: vezi [Tablă](topic:sheet-metal) |
| Analiza înclinării pe ansambluri; găsirea liniei de separare; analiza grosimii peretelui | {{ui:Analiza înclinării}} pe piesă în Design: vezi [Verificarea înclinării pentru turnare](topic:draft-analysis); deschideți fiecare piesă a unui ansamblu pentru a o verifica |

## Schițe

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Elipse, arce tangente, conice, spline-uri cu grad fixat sau ponderi (NURBS) | Spline-uri (cubice), arce și cercuri cu relații Tangent |
| Un punct pe un spline (o relație), relații de curbură (G2) | Puneți punctul propriu al splinei acolo unde trebuie să treacă |
| Copii decalate de spline-uri care urmează modificările ulterioare; decalaje de lanțuri cu colțuri ascuțite de spline | Decalați din nou după modificare; rotunjiți mai întâi colțul |
| Copii de repetiție legate de original; repetiții de-a lungul unei curbe | Repetați din nou după o modificare |
| Proiectarea muchiilor circulare libere sau înclinate, geometria proiectată care urmează piesa | Proiectați muchiile circulare drepte și paralele, apoi cotați |
| Cote conduse (de referință) | Citiți dimensiunile din panou sau din datele piesei |
| Relații colineare | Paralel cu o distanță de 0 |
| Lipirea în alt program (clipboardul sistemului) | Exportați DXF, STEP, STL sau 3MF |
| Scrierea arcelor, coordonate relative sau polare | Scrieți linii și cercuri; desenați arce cu instrumentul Arc |
| Selectarea geometriei fără cursor | Are nevoie de un clic sau de o atingere |

## Parametri și unități

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Configurații care schimbă materialele; un tabel CSV de proiectare care oprește funcții | Configurațiile setează parametri și pornesc sau opresc funcții: vezi [Configurații și tabele de proiectare](topic:design-tables); `partcraft variants` construiește configurațiile salvate după nume, inclusiv cele cu funcții oprite: vezi [Crearea unui pachet de variante din configurații](topic:variant-pack) |
| Ecuații pe numerele panourilor celor mai noi funcții (plan, baleiere, înclinare și altele) | Scrieți-le într-un script sau cu `partcraft set` ([Scripturi și linia de comandă](topic:scripts-and-cli)) |
| O piesă afișată în inch | Dimensiunile se afișează în milimetri; scrieți `2in` într-o casetă numerică sau o expresie și devine 50.8 |

## Fișiere

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Editarea caracteristicilor proprii ale unui solid STEP importat (vine fără istoric) | Adăugați sau tăiați material cu propriile funcții |
| Citirea culorilor, numelor, structurii de ansamblu și PMI din STEP | Nu este disponibil |
| Export glTF, OBJ, IGES, Parasolid; DWG al unei piese 3D (doar pachetul de variante scrie un DWG: planșa de desen) | STL sau 3MF pentru plase; STEP pentru solide; DXF pentru 2D |
| Deschiderea fișierelor IGES, DXF sau ale altor programe (fișierele `.3dm` se deschid ca un corp: [Deschiderea unui model .3dm ca solid](topic:open-3dm-files)) | Cereți STEP sau un STL, OBJ ori 3MF închis: [Deschiderea unui STL, OBJ sau 3MF](topic:open-meshes) |
| Structura de ansamblu (un arbore cu numele pieselor) în STEP exportat | STEP de ansamblu este un compus al solidelor plasate |
| Salvarea într-un dosar ales fără descărcarea browserului | Activați „a întreba unde să salvez” în setările de descărcare ale browserului |

## Desene

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Cote dincolo de cele trei dimensiuni generale (dimensiuni de găuri, poziții, toleranțe pe dimensiuni) | Marcați PDF-ul sau exportați DXF și cotați-l într-un program CAD 2D |
| Mai mult de o secțiune sau un detaliu; vederi aliniate, rupte și auxiliare | O secțiune și un detaliu pe desen |
| Text liber, note și tabele pe planșă (în afară de blocurile de titlu și de revizie) | Nota de finisare sau text adăugat în PDF |
| Proiecție în primul unghi, vederi mobile, planșe în portret | Proiecție în al treilea unghi, aranjare automată, planșe în format peisaj A4–A0 și ANSI A–E |
| Vedere în secțiune live: mai multe plane sau o casetă de secțiune odată, contur în jurul tăieturii, salvarea secțiunii în fișier | Un plan pe rând din {{ui:Vederi}} › {{ui:Vedere în secțiune}}; vezi [Privire în interior cu o vedere în secțiune](topic:section-view) |
| Desene de ansamblu cu mai multe vederi, cote sau bile pe care le puteți muta | O vedere izometrică (sau explodată) cu bile automate și lista pieselor |
| Copierea și lipirea simbolurilor GD&T și de finisare | Plasați fiecare cu Bază de referință, Cadru sau Finisare |
| Manuale: fișiere STEP în {{ui:Dintr-un alt fișier…}} din Illustrate, o piesă trimisă direct din ModelCraft sau BimCraft, imagini la calitatea trasorului de cale, 3D interactiv într-un PDF | Deschideți STEP în Design și porniți manualul cu {{ui:Din piesa deschisă}}; salvați modelul ca glTF (.glb); imagini PNG ale vederii 3D; fișierul 3D interactiv: vezi [Pornirea unui manual în Illustrate](topic:illustrate) |

## Ansambluri

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Angrenaje, cremaliere, came și articulații cu șurub; articulație sferică limitată la un con; articulații pe fețe curbe sau între puncte | Articulații rigide, de rotație, glisante, cilindrice, plane, sferice și de tip știft-în-fantă pe fețe plate, fiecare valoare cu limitele proprii: vezi [Construirea unui ansamblu](topic:build-assembly) |
| Pași de explodare care rotesc piese și tragerea pieselor pe care le plasează articulațiile | Pași de explodare drepți; eliminați o articulație ca să mutați o piesă manual |
| Subansambluri | Un singur nivel de piese |
| Angrenaje, came, contact | Nu este disponibil |

## Fabricație

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Curățare adaptivă 3D și degroșare prin decalaj în 3D; finisare la nivel de apă, cu creion, radială și în spirală; treceri adaptive scrise ca arce | Degroșare 3D în rânduri drepte și prelucrarea restului: vezi [Degroșare 3D și prelucrarea restului](topic:rough-3d); finisare {{ui:Paralel}} și {{ui:Scallop}}: vezi [Finisare 3D](topic:finish-3d); față, buzunar, curățare adaptivă 2D, contur, găurire și șanfren pe 2.5 axe: vezi [Crearea traseelor și a codului G](topic:manufacture) |
| Tăiere pe bandă (swarf), trasee de degroșare pe linii de curgere și pe mai multe axe, coduri de plan de lucru înclinat (G68.2), verificarea coliziunilor portsculului și a mașinii; simularea tăierilor pe 5 axe și rotative | O sculă înclinată pentru orice operație, finisare pe 5 axe cu freză cu capăt sferic și finisare rotativă pe a 4-a axă: vezi [Prelucrare pe 4 și 5 axe](topic:multi-axis) |
| Alezare și filete interioare la strung, cicluri G71/G76, arce în traseele de strunjire, scule active, o subbroșă | Strunjire exterioară: față, degroșare, finisare, canelură, retezare, filet, burghiu pe centru: vezi [Strunjire la strung](topic:turning) |
| Palparea unui unghi sau a unui colț, un aparat de reglare a sculei, măsurarea unei dimensiuni față de o toleranță | Palparea unei fețe, a unei laturi, a unei găuri sau a unei proeminențe pentru a seta decalajul de lucru: vezi [Palpare](topic:probing) |
| Verificarea coliziunilor portsculului și a cozii | Urmăriți avertismentele de lungime a canalelor și verificați în simulatorul comenzii |
| Durata de viață a sculei și cicluri de subprogram într-un post; încărcarea fișierelor de post ale altor programe | Scrieți sau modificați un post în formatul propriu al PartCraft: vezi [Postprocesoare editabile](topic:post-processors) |
| Cod G în inch (G20) | Doar milimetri (G21) |

## Simulare și proiectare generativă

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Studii neliniare: curgere, deformări mari, contact între piese, oboseală | Statică liniară și frecvențe naturale: vezi [Verificarea tensiunii și deformării](topic:simulation); păstrați factorul de siguranță mult peste 1 |
| Flambaj neliniar (imperfecțiuni, post-flambaj, salt brusc) | Factori de sarcină de flambaj liniari cu o marjă generoasă: vezi [Căldură, tensiune termică și flambaj](topic:thermal-and-buckling) |
| Radiație între fețe (factori de vizualizare), rezistență de contact, materiale dependente de temperatură, inerție în tensiunea termică (unde de șoc termic) | Radiație către mediul înconjurător, tensiune termică staționară sau cvasi-statică în timp, proprietăți constante: vezi [Căldură, tensiune termică și flambaj](topic:thermal-and-buckling) |
| Rafinare automată pentru căldură tranzitorie și studii cu sarcină termică; rețea mai grosieră acolo unde eroarea este mică; o țintă pe o mărime locală (tensiunea de vârf într-un punct) | **Rafinare automată** pentru studii statice, de flambaj, de frecvență naturală și termice staționare, pe eroarea din întreaga piesă: vezi [Verificarea tensiunii și deformării](topic:simulation); altfel micșorați dimensiunea elementului |
| Încărcări pe rulment și bulon, forțe la distanță, momente, arcuri, deplasări impuse | Forțe și presiuni pe fețe, gravitație; fețe fixe și fără frecare |
| Simularea ansamblurilor; materiale care diferă după direcție (straturi imprimate, compozite) | O piesă, un material izotrop |
| Mai multe fire de execuție pentru studii tetraedrice, transfer de căldură și proiectare generativă; orice fire pe o pagină care nu este izolată între origini | Studiile voxel, flambajul, tensiunea în timp și curgerea laminară folosesc firele acolo unde pagina permite: vezi [Setările PartCraft](topic:settings) |
| Curgere turbulentă cu precizie de proiectare (modelul Spalart–Allmaras este inclus ca experimental: frecare în țeavă cu 30 până la 34 % mai mare, reatașare la treapta din spate cu 21 până la 39 % mai scurtă; planificat: celule mai fine lângă pereți), căldură în curgere, curgere nestaționară, suprafețe libere, fluide non-newtoniene, piese în rotație | Curgere laminară, staționară, izotermă a unui fluid newtonian sau modelul turbulent experimental pentru tipare calitative: vezi [Simularea curgerii fluidelor](topic:flow-simulation); panoul avertizează când numărul Reynolds depășește regimul laminar |
| Limite de tensiune și reguli de fabricație (supraplombe, direcții de frezare) în proiectarea generativă; mai multe materiale într-o formă | Forma cea mai rigidă pentru un volum; verificați rezultatul în Simulare: vezi [Creșterea unei forme din sarcini](topic:generative-design) |
| Un rezultat ca solid editabil (neted, parametric) | STL, STEP cu fațete sau o piesă cu rezultatul ca solid importat cu fațete |
| Proiectarea mașinilor electrice: un rotor care se rotește într-un stator, cuplu față de unghi, oțel saturat, magneți care își pierd rezistența după cot, curenți turbionari și pierderi în fier și cupru; câmpuri magnetice în 3D sau pe plase curbe | Magnetostatică liniară 2D pe o rețea din biblioteca de analiză: bobine, fier, magneți permanenți pe linia lor de recul, întrefieruri, inductanță și atracție: vezi [Câmpuri magnetice în 2D](topic:magnetic-fields-2d) |

## Scripturi

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Ajutor la plasarea cursorului, puncte de întrerupere și pas cu pas în editorul de scripturi | Căutarea, plierea și completarea există (vezi [Scrierea și rularea scripturilor](topic:craftscript)); pentru restul, editorul propriu: {{ui:Salvare}} și {{ui:Deschidere}} din grupul Script mută scripturile înăuntru și în afară; funcțiile încorporate sunt listate în [Limbajul CraftScript](topic:craftscript-language) |
| Puncte de întrerupere și pas cu pas printr-un script | `disp` și `fprintf` pe parcurs; {{key:Mod+Enter}} rulează câteva linii selectate odată |
| Câmpuri și grafice pe care le afișează un script, desenate în spațiul de lucru Design; scripturi care schimbă parametrii piesei | Se afișează în spațiul de lucru Script; scripturile citesc parametri cu `param` (vezi [Scrierea și rularea scripturilor](topic:craftscript)) și îi schimbă în fila {{ui:Parametri}} |
| Imagini și tabele alături de grafice; editarea unui grafic (zoom, limite de axe) înainte de salvare | Alături arată graficele; salvați un grafic ca PNG, SVG sau CSV și terminați-l în altă parte |
| numpy și alte pachete Python; Python offline; plierea Python în editor; Pascal Script | Biblioteca standard Python, CraftScript și Lua: vezi [Scripturi în Python](topic:craftscript-python) |
| Transmiterea funcțiilor Lua către funcții încorporate; apelarea unei funcții de bibliotecă din Lua printr-un nume construit în timpul rulării scriptului | Scrieți numele funcției de bibliotecă în script (`cs.static_tet(…)`) sau apelați-o dintr-un script CraftScript |

## Aplicația

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Salvare în cloud, partajare și istoric de versiuni | Nu este disponibil încă. Salvați fișierele pe calculator și păstrați versiunile după nume |
| PartCraft ca aplicație instalată pe iPad și iPhone | Folosiți PartCraft în browserul dispozitivului; pe Android și pe desktop rulează și în CadCraft Studio (getcadcraft.com/download) |
| Meniuri contextuale (clic dreapta) | Bara de instrumente și panoul din dreapta |
| Lucru complet offline dintr-un start proaspăt | Doar când aplicația a fost salvată pentru lucru offline: vezi [Lucrul offline](common:offline) |

Raportați ce lipsește cel mai mult prin pagina de asistență a site-ului: ea modelează ce urmează.

## Inginerie (generatoare și câmpuri)

| Încă nerealizat | În schimb, astăzi |
|---|---|
| Racorduri, porturi și fitinguri pe schimbătorul de căldură generat; curbe de temperatură pentru rezistența materialului; pierderi de teu în colector | Generatoarele construiesc miezul și tuburile; adăugați fitinguri în Design; folosiți valorile materialului la temperatura camerei, cu un factor de siguranță |
| Adăugarea de generatoare din directorul suplimentelor dintr-un singur clic | {{ui:Deschidere}} în spațiul de lucru Inginerie adaugă un generator dintr-un fișier |
| Un fișier de câmp mai fin decât dimensiunea voxelului propriu a generatorului; citirea fișierelor `.vdb` | Salvați un câmp mai fin dintr-un script; `.vdb` este scris, nu citit |
| Calcule de cod pentru recipiente sub presiune | Formulele clasice pentru pereți subțiri și groși, cu factorul de siguranță ales; nu o marjă de cod |
| Generatoare pentru celelalte aplicații | Doar PartCraft în această versiune |
