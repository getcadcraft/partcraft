---
title: Ce nu este încă realizat
summary: Tot ce nu face încă această versiune PartCraft, de la baleieri cu răsucire până la afișare în inch, cote de desen și subansambluri, cu ce puteți face azi în loc.
keywords: lipsă, încă nu, limite, limitări, plan de viitor, nucleu exact, racordare, șanfren, scobire, baleiere, loft, import STEP, simulare, fabricare, baleiere cu răsucire, tangență la capăt, racordare pe față, ecuații, inch, cote de desen, subansambluri, cloud, tabletă, telefon
from: 9b868162
---

PartCraft este o versiune timpurie. Această pagină listează ce nu face încă, ca să nu le căutați, și ce să faceți în schimb azi. Nimic de aici nu are dată.

## Necesită un nucleu exact

Această versiune construiește fiecare piesă cu nucleul de plasă (vezi [Nucleul de plasă](topic:solid-kernels)). Tot ce urmează are nevoie de un nucleu exact de geometrie, pe care această versiune nu îl are încă. Piesele salvate cu aceste operații se deschid în continuare: operațiile rămân în istoric, marcate ca nerealizate, și sunt păstrate când salvați.

| Încă nerealizat | În schimb, azi |
|---|---|
| {{ui:Racordare}} și {{ui:Șanfren}} pe muchii rotunde; racordări a căror rază se schimbă de-a lungul muchiei; rotunjiri îmbinate lin acolo unde se întâlnesc (nucleul de plasă le taie în unghi) | Racordarea și șanfrenul merg pe muchii drepte între fețe plate; rotunjiți celelalte colțuri în schiță înainte de extrudare ({{ui:Racordare}} într-o schiță, {{key:F}}) |
| {{ui:Scobire în coajă}} deschizând fețe curbe; pereți de grosimi diferite | Deschideți fețe plate; adăugați material cu extrudări acolo unde un perete trebuie să fie mai gros |
| {{ui:Baleiere}}, {{ui:Loft}}, {{ui:Înclinare}} pe fețe curbe; extrudare până la o față, la fața următoare sau la un vârf; extrudări conice | Extrudați sau faceți revoluție, în pași unde e nevoie; extrudați până la o adâncime pe care o măsurați |
| {{ui:Nervură}}, {{ui:Flanșă de bază}}, {{ui:Flanșă de muchie}} și desfășurările | Extrudați placa sau profilul nervurii |
| Suprafețe: finalizarea unei {{ui:Formă}} în piesă, {{ui:Petic}}, {{ui:Suprafață loft}}, {{ui:Suprafață Gordon}}, {{ui:Cusătură}}, {{ui:Îngroșare}}, {{ui:Suprafață decalată}}, {{ui:Extindere suprafață}}, {{ui:Tăiere suprafață}} | Nu este disponibil |
| Mai multe corpuri: {{ui:Combinare}}, {{ui:Mutare corp}}, {{ui:Scalare corp}}, {{ui:Repetiție pe traseu}}, operații care fac un corp nou | Un solid; repetițiile și oglindirea copiază operații |
| Schițe, plane, axe și puncte pe fețe pe care le poate găsi doar un nucleu exact (o față făcută de o racordare, peretele unei găuri, o față a unui solid importat) | Schițați pe planele de bază, pe planele de referință și pe fețele plate ale extrudărilor și revoluțiilor |
| Un rezultat de proiectare generativă deschis ca piesă sau adăugat la ea (devine un solid importat) | Descărcați rezultatul ca STL sau STEP |
| Editarea fețelor curbe ale unui fișier STEP deschis ca suprafețe exacte; STEP exact pentru fețe spline, baleiate și rotite dintr-un fișier STEP, laturi spline, filete modelate, corpuri și ansambluri STL / OBJ / 3MF; STEP pentru alți modelatori de piese | {{ui:Deschidere}} citește STEP ca triunghiuri și păstrează fețele plate, cilindrii, conurile, sferele și tori din fișier pentru export ([Deschiderea unui fișier STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (solid exact)}} scrie exact fiecare față analitică și le păstrează ca fațete ([Export](topic:export-files#for-other-cad-programs-step)); macro-ul pentru alt modelator de piese încă scrie |
| Arce reale în vederile de desen | Vederile și vederile în secțiune sunt desenate din fațete |
| Volum, arii și distanțe exacte | {{ui:Măsurare}} dă cifrele solidului cu fațete, puțin mai mici la piesele rotunde; o setare **Curbe** mai fină le apropie |

Unele rânduri din tabelele de mai jos sugerează una dintre aceste operații ca mod de a ocoli altceva. Sugestiile acestea se aplică odată ce nucleul exact revine.

## Operații

| Încă nerealizat | În schimb, azi |
|---|---|
| Racordări de fețe, racordări complet rotunde, racordări cu raze fixate în puncte de-a lungul unei muchii | {{ui:Racordare}} cu rază constantă sau variabilă liniar; mai multe operații de racordare |
| Scobiri în coajă cu grosimi de perete diferite | O singură grosime de {{ui:Scobire în coajă}}; adăugați material cu extrudări acolo unde un perete trebuie să fie mai gros |
| Înclinare pe fețe cu formă liberă (spline) | {{ui:Înclinare}} funcționează pe fețe plate, cilindrice și conice |
| Baleieri cu răsucire, baleieri de perete subțire și de suprafață; tangența la capăt pe operația Loft; un loft cu o singură șină de ghidare; trasee spline | {{ui:Baleiere}} cu orientare fixă sau cu scalare la capăt; un loft cu două sau mai multe șine de ghidare: vezi [Baleiere, loft și înclinare](topic:sweep-loft-draft) |
| Nervuri din arce sau spline; nervuri crescute pătrat față de schiță (dintr-o vedere de sus); înclinare pe nervuri; mai multe nervuri dintr-o singură schiță | {{ui:Nervură}} dintr-un lanț de linii în planul propriu al nervurii: vezi [Nervuri și gusee](topic:rib) |
| „Până la” o suprafață curbă, „până la următoarea” oprită la o față curbă | Până la o față plată sau un plan de referință |
| Găuri cu contragăurire, filete în inch și de țeavă, filete conice, ieșiri de filet și începuturi de filet teșite | Lamare cu adâncime mică; filete metrice ISO și trapezoidale, cosmetice sau modelate: vezi [Filete pe axe și alezaje, desenate sau modelate](topic:threads) |
| Extrudări ale operațiilor subțiri | Desenați ambii pereți ai profilului |
| Copii de repetiție sărite una câte una, repetiții de umplere | Folosiți operații separate; repetiții de-a lungul unei curbe: {{ui:Repetiție pe traseu}} |
| Copierea repetițiilor, oglinzile, racordările, șanfrenele, scobirile și solidele importate | Copiați schița sau operația pe care sunt construite, ori faceți o repetiție din ea |
| Tangență exactă (G1) în punctele speciale ale unei forme; unirea petelor unei forme în fețe mai mari | Ridicați Nivelul formei: petele aproximate devin mai mici; vezi [Forme libere cu Formă](topic:form-surfaces) |
| O formă făcută din mai multe piese închise separate într-o singură operație; punți între forme | O piesă închisă per operație {{ui:Formă}}; uniți-le cu Unire |
| Alegerea corpurilor de suprafață în vedere (cu excepția punctelor de tăiere și petic); racordări de suprafață; anularea tăierii; petice G2; suprafețe Gordon tangente la vecini curbi (tangența la plane și la fețe plate este realizată) | Alegeți-le după nume în panoul operației; îngroșați întâi, apoi racordați solidul |
| O listă de corpuri în istoric; excluderea corpurilor ascunse din exporturi | Redenumiți și ascundeți corpurile în lista de corpuri a panoului piesei; ștergeți sau suprimați operația care a făcut un corp ca să-l excludeți |
| O scalare neuniformă care păstrează cilindrii și conurile analitice; scalare neuniformă a suprafețelor decalate | {{ui:Scalare corp}} face ca fețele curbe să devină B-spline apropiate (în 0.0000004 mm); o scalare uniformă rămâne exactă |
| Combinarea corpurilor de suprafață; sume Minkowski | Mai întâi {{ui:Cusătură}} sau {{ui:Îngroșare}}, apoi {{ui:Combinare}} |
| Analiza toleranțelor: lanțuri de cote care fac colțuri (bucle vectoriale 2D și 3D), sensibilități calculate din geometrie, Monte Carlo cu alte distribuții, toleranțe de dimensiune pe cotele schiței, toleranță bonus din condiția materialului | {{ui:Stack-up}} într-un ansamblu: o direcție, cazul cel mai nefavorabil și RSS, toleranțe scrise, din toleranța generală a cartușului sau din cadrele GD&T: vezi [Lanțuri de toleranțe](topic:tolerance-stackup) |
| Dispunere: ordinea tăierii și intrările de tăiere, tăierea o singură dată a muchiilor comune, piese care trebuie ținute împreună; resturi de rulouri, stoc comun între proiecte | {{ui:Dispunere piese plate pe foi…}} cu distanță, margini, rotiri și fibră: vezi [Dispunerea pieselor plate pe foi](topic:nest-flat-parts); plăcile rămase sunt păstrate și folosite întâi: vezi [Păstrarea și refolosirea resturilor](topic:nest-offcuts); planificați tăierea în software-ul propriu al mașinii de tăiere |
| Tablă: tiv-uri, decalaje, flanșe în unghi și de contur; flanșe pe muchii curbe sau pe fețele unei flanșe de bază îndoite; îndoituri schițate; închideri de colț; scule de formare; transformarea unui solid în tablă; desfășurarea unei flanșe de bază îndoite cu tăieturi; tabele de îndoire | {{ui:Flanșă de bază}} (o placă sau un profil îndoit), {{ui:Flanșă de muchie}} pe muchiile drepte ale unei plăci, cu degajări de îndoire, și desfășurarea cu un factor K: vezi [Tablă](topic:sheet-metal) |
| Analiza înclinării pe ansambluri; găsirea liniei de separare; analiza grosimii peretelui | {{ui:Analiza înclinării}} pe piesă în Proiectare: vezi [Verificarea înclinării pentru matrițare și turnare](topic:draft-analysis); deschideți fiecare piesă a unui ansamblu ca s-o verificați |

## Schițe

| Încă nerealizat | În schimb, azi |
|---|---|
| Elipse, arce tangente, conice, spline-uri cu grad sau ponderi fixate (NURBS) | Spline-uri (cubice), arce și cercuri cu relații Tangent |
| Un punct pe un spline (o relație), relații de curbură (G2) | Puneți un punct propriu al splineului acolo unde trebuie să treacă |
| Copii decalate ale spline-urilor care urmăresc schimbările ulterioare; decalări ale lanțurilor cu colțuri ascuțite de spline | Decalați din nou după modificare; rotunjiți întâi colțul |
| Copii de repetiție care rămân legate de original; repetiții de-a lungul unei curbe | Refaceți repetiția după o modificare |
| Proiectarea muchiilor circulare cu formă liberă sau înclinate, geometrie proiectată care urmează piesa | Proiectați muchii circulare drepte și paralele, apoi cotați |
| Cote conduse (de referință) | Citiți dimensiunile din panou sau din datele piesei |
| Relații coliniare | Paralel cu distanța 0 |
| Lipirea într-un alt program (clipboard-ul sistemului) | Exportați DXF, STEP, STL sau 3MF |
| Scrierea arcelor, a coordonatelor relative sau polare | Scrieți linii și cercuri; desenați arce cu unealta Arc |
| Selectarea geometriei fără indicator | Are nevoie de un clic sau de o atingere |

## Parametri și unități

| Încă nerealizat | În schimb, azi |
|---|---|
| Configurații care schimbă materialele; un tabel de proiectare CSV care dezactivează operații | Configurațiile setează parametri și activează sau dezactivează operații: vezi [Configurații și tabele de proiectare](topic:design-tables); `partcraft variants` construiește configurațiile salvate după nume, inclusiv operațiile dezactivate: vezi [Crearea unui pachet de variante din configurații](topic:variant-pack) |
| Ecuații pe numerele din panourile proprii ale celor mai noi operații (plan, baleiere, înclinare și altele asemenea) | Scrieți-le într-un script sau cu `partcraft set` ([Scripturi și linia de comandă](topic:scripts-and-cli)) |
| O piesă afișată în inch | Dimensiunile se afișează în milimetri; scrieți `2in` într-o casetă de număr sau într-o expresie și devine 50.8 |

## Fișiere

| Încă nerealizat | În schimb, azi |
|---|---|
| Editarea operațiilor proprii ale unui solid STEP importat (sosește fără istoric) | Adăugați sau tăiați material cu operațiile proprii |
| Citirea culorilor, numelor, structurii ansamblului și PMI din STEP | Nu este disponibil |
| Export glTF, OBJ, IGES, Parasolid; DWG pentru o piesă 3D (doar pachetul de variante scrie un DWG: foaia de desen) | STL sau 3MF pentru plase; STEP pentru solide; DXF pentru 2D |
| Deschiderea fișierelor IGES, DXF sau ale altor programe (fișierele `.3dm` se deschid ca un corp: [Deschiderea unui model .3dm ca corp solid](topic:open-3dm-files)) | Cereți STEP sau o plasă STL, OBJ sau 3MF închisă: [Deschiderea unui STL, OBJ sau 3MF](topic:open-meshes) |
| Structura ansamblului (un arbore cu numele pieselor) în STEP exportat | STEP-ul ansamblului este un singur compus din solidele așezate |
| Salvarea într-un dosar ales fără descărcarea din browser | Activați „întrebați unde să salvați” în setările de descărcare ale browserului |

## Desene

| Încă nerealizat | În schimb, azi |
|---|---|
| Cote dincolo de cele trei dimensiuni de ansamblu (dimensiuni de găuri, poziții, toleranțe pe dimensiuni) | Adnotați PDF-ul sau exportați DXF și cotați-l într-un program CAD 2D |
| Mai mult de o secțiune sau un detaliu; vederi aliniate, decupate și auxiliare | O secțiune și un detaliu per desen |
| Text liber, note și tabele pe foaie (altele decât cartușele de titlu și de revizie) | Nota de finisare sau text adăugat pe PDF |
| Proiecție în primul unghi, vederi mobile, foi pe înălțime | Unghiul al treilea, aranjare automată, foi pe lățime A4–A0 și ANSI A–E |
| Vedere în secțiune live: mai multe plane sau o casetă de secțiune odată, un contur în jurul tăieturii, salvarea secțiunii în fișier | Un plan pe rând din {{ui:Vederi}} › {{ui:Vedere în secțiune}}; vezi [Priviți în interior cu o vedere în secțiune](topic:section-view) |
| Desene de ansamblu cu mai multe vederi, cote sau bule pe care le puteți muta | O vedere izometrică (sau explodată) cu bule automate și lista pieselor |
| Copiere și lipire a simbolurilor GD&T și de finisare | Plasați fiecare cu Datum, Cadru sau Finisare |
| Manuale: fișiere STEP în {{ui:Dintr-un alt fișier…}} din Illustrate, un model trimis direct din ModelCraft sau BimCraft, imagini la calitatea trasorului de traiectorii, 3D interactiv într-un PDF | Deschideți STEP-ul în Proiectare și porniți manualul {{ui:Din piesa deschisă}}; salvați modelul ca glTF (.glb); imagini PNG ale vederii 3D; fișierul 3D interactiv: vezi [Pornirea unui manual în Illustrate](topic:illustrate) |

## Ansambluri

| Încă nerealizat | În schimb, azi |
|---|---|
| Articulații cu roți dințate, cremalieră, came și șurub; articulație sferică limitată la un con; articulații pe fețe curbe sau între puncte | Articulații rigide, de rotație, glisante, cilindrice, plane, sferice și cu știft în canal pe fețe plate, fiecare valoare cu propriile limite: vezi [Construirea unui ansamblu](topic:build-assembly) |
| Pași de explodare care rotesc piese și tragerea pieselor pe care le plasează articulațiile | Pași de explodare drepți; eliminați o articulație ca să mutați o piesă manual |
| Subansambluri | Un singur nivel de piese |
| Roți dințate, came, contact | Nu este disponibil |

## Fabricație

| Încă nerealizat | În schimb, azi |
|---|---|
| Degroșare 3D a fețelor curbe, degajare adaptivă 3D, prelucrarea restului; finisare pe linie de nivel, creion, radială și în spirală; treceri adaptive scrise ca arce | Față pe 2.5 axe, buzunar, adaptiv 2D, contur, găurire și șanfren: vezi [Realizarea traseelor sculei și a G-code](topic:manufacture); finisarea Parallel și Scallop a întregului model: vezi [Finisare 3D](topic:finish-3d) |
| Traseele sculei pe 4 și 5 axe, strunjire, palpare | Pregătiți câte o față pe rând, cu axa sculei în fila Setup |
| Verificări de coliziune a portsculei și a cozii | Urmăriți avertismentele privind lungimea canalului și verificați în simulatorul comenzii |
| Palparea, ciclurile de durată a sculei și de subprogram, coduri pe axele 4 și 5 și coduri de strung într-un postprocesor; încărcarea fișierelor de postprocesor ale altor programe | Scrieți sau modificați un postprocesor în formatul propriu PartCraft: vezi [Postprocesoare pe care le puteți edita](topic:post-processors) |
| G-code în inch (G20) | Doar milimetri (G21) |

## Simulare și proiectare generativă

| Încă nerealizat | În schimb, azi |
|---|---|
| Studii neliniare: curgere, deformații mari, contact între piese, oboseală | Static liniar și frecvențe proprii: vezi [Verificarea tensiunii și a deformării](topic:simulation); mențineți coeficientul de siguranță mult peste 1 |
| Flambaj neliniar (imperfecțiuni, post-flambaj, sărire bruscă) | Factori liniari de sarcină la flambaj, cu o marjă generoasă: vezi [Căldură, tensiune termică și flambaj](topic:thermal-and-buckling) |
| Radiație între fețe (factori de vedere), rezistență de contact, materiale dependente de temperatură, inerția în tensiunea termică (unde de șoc termic) | Radiație către mediu, tensiune termică staționară sau cvasistatică în timp, proprietăți constante: vezi [Căldură, tensiune termică și flambaj](topic:thermal-and-buckling) |
| Rafinare automată pentru căldură tranzitorie și studii cu sarcină termică; plasă mai rară acolo unde eroarea e mică; o țintă pe o mărime locală (tensiunea de vârf într-un punct) | **Rafinare automată** pentru studii statice, de flambaj, de frecvențe proprii și termice staționare, pe eroarea din întreaga piesă: vezi [Verificarea tensiunii și a deformării](topic:simulation); altfel micșorați dimensiunea elementului |
| Sarcini de rulment și de șurub, forțe la distanță, momente, arcuri, deplasări impuse | Forțe și presiuni pe fețe, gravitație; fețe fixe și fără frecare |
| Simularea ansamblurilor; materiale care diferă după direcție (straturi imprimate, compozite) | O piesă, un material izotrop |
| Mai multe fire de execuție pentru solver la studii tetraedrice, transfer de căldură și proiectare generativă; orice fire pe o pagină care nu este izolată cross-origin | Studiile voxel, flambajul, tensiunea în timp și curgerea laminară folosesc firele acolo unde pagina permite: vezi [Setările PartCraft](topic:settings) |
| Curgere turbulentă cu precizie de proiectare (modelul Spalart–Allmaras este inclus ca experimental: frecarea în țevi 30–34 % prea mare, relipirea după pas invers 21–39 % prea scurtă; planificat: celule mai fine lângă pereți), căldură în curgere, curgere nestaționară (precisă în timp), suprafețe libere, fluide non-newtoniene, piese în rotație | Curgere laminară, staționară, izotermă a unui fluid newtonian, sau modelul turbulent experimental pentru tipare calitative: vezi [Simularea curgerii fluidelor](topic:flow-simulation); panoul avertizează când numărul Reynolds depășește regimul laminar |
| Limite de tensiune și reguli de fabricație (consolidări, direcții de frezare) în proiectarea generativă; mai multe materiale într-o formă | Cea mai rigidă formă pentru un volum; verificați rezultatul în Simulare: vezi [Creșterea unei forme din sarcini](topic:generative-design) |
| Un rezultat ca solid editabil (neted, parametric) | STL, STEP cu fațete sau o piesă cu rezultatul ca solid importat cu fațete |
| Proiectarea mașinilor electrice: un rotor care se rotește într-un stator, cuplu în funcție de unghi, oțel saturat, magneți care își pierd forța după cotul curbei, curenți turbionari și pierderi în fier și cupru; câmpuri magnetice în 3D sau pe plase curbe | Magnetostatică liniară 2D pe o grilă în biblioteca de analiză: bobine, fier, magneți permanenți pe linia lor de recul, întrefieruri, inductanță și atracție: vezi [Câmpuri magnetice în 2D](topic:magnetic-fields-2d) |

## Scripturi

| Încă nerealizat | În schimb, azi |
|---|---|
| Ajutor la trecerea cu cursorul, puncte de întrerupere și pas cu pas în editorul de scripturi | Căutarea, restrângerea blocurilor și completarea există (vezi [Scrierea și rularea scripturilor](topic:craftscript)); pentru restul, editorul propriu: {{ui:Salvare}} și {{ui:Deschidere}} din grupul Script mută scripturile înăuntru și în afară; funcțiile integrate sunt listate în [Limbajul CraftScript](topic:craftscript-language) |
| Puncte de întrerupere și pas cu pas printr-un script | `disp` și `fprintf` pe parcurs; {{key:Mod+Enter}} rulează câteva linii selectate odată |
| Câmpuri și grafice pe care le arată un script, desenate în spațiul de lucru Proiectare; scripturi care schimbă parametrii piesei | Apar în spațiul de lucru Script; scripturile citesc parametrii cu `param` (vezi [Scrierea și rularea scripturilor](topic:craftscript)) și îi schimbă în fila {{ui:Parametri}} |
| Imagini și tabele alături de grafice; editarea unui grafic (zoom, limite de axe) înainte de salvare | Alăturat arată graficele; salvați un grafic ca PNG, SVG sau CSV și terminați-l în altă parte |
| numpy și alte pachete Python; Python offline; restrângerea blocurilor Python în editor; Pascal Script | Biblioteca standard Python, CraftScript și Lua: vezi [Scripturi în Python](topic:craftscript-python) |
| Transmiterea funcțiilor Lua către funcțiile integrate; apelarea unei funcții de bibliotecă din Lua printr-un nume construit în timpul rulării scriptului | Scrieți numele funcției de bibliotecă în script (`cs.static_tet(…)`) sau apelați-o dintr-un script CraftScript |

## Aplicația

| Încă nerealizat | În schimb, azi |
|---|---|
| Salvare în cloud, partajare și istoricul versiunilor | Nu este disponibil încă. Salvați fișierele pe calculator și păstrați versiunile după nume |
| PartCraft ca aplicație instalată pe iPad și iPhone | Folosiți PartCraft în browserul dispozitivului; pe Android și pe desktop rulează și în CadCraft Studio (getcadcraft.com/download) |
| Meniuri contextuale (clic dreapta) | Bara de instrumente și panoul din dreapta |
| Lucrul complet offline de la o pornire nouă | Doar când aplicația a fost salvată pentru utilizare offline: vezi [Lucrul offline](common:offline) |

Raportați ce lipsește cel mai mult prin pagina de asistență a site-ului: ea modelează ce urmează.

## Inginerie (generatoare și câmpuri)

| Încă nerealizat | În schimb, azi |
|---|---|
| Colectoare, porturi și racorduri pe schimbătorul de căldură generat; curbe de temperatură pentru rezistența materialului; pierderi la teu în colector | Generatoarele construiesc miezul și tuburile; adăugați racordurile în Proiectare; folosiți valorile materialului la temperatura camerei cu un coeficient de siguranță |
| Adăugarea generatoarelor din directorul de suplimente dintr-un clic | {{ui:Deschidere}} în spațiul de lucru Inginerie adaugă un generator dintr-un fișier |
| Un fișier de câmp mai fin decât dimensiunea voxel proprie a generatorului; citirea fișierelor `.vdb` | Salvați un câmp mai fin dintr-un script; `.vdb` este scris, nu citit |
| Calcule după norme pentru recipiente sub presiune | Formulele clasice pentru perete subțire și perete gros, cu coeficientul de siguranță ales; nu o marjă de normă |
| Generatoare pentru celelalte aplicații | Doar PartCraft în această versiune |
