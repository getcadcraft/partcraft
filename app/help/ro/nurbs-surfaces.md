---
title: Suprafețe libere (NURBS)
summary: Curbe și suprafețe netede lângă piesă — loft, baleiere, rețele de curbe, petice pe patru muchii, racordări, tăieri — cu continuitate G0, G1 și G2 măsurată pe suprafețele exacte, solide cu reuniune, scădere și intersecție fixate în piesă, vederi zebra și de curbură, fețe potrivite pe un scan cu eroarea măsurată, și fișiere STEP sau IGES. Păstrate în fișierul piesei.
keywords: nurbs, scanare, inginerie inversă, potrivire, plasă în suprafață, nor de puncte, stl, tăiere, tăiat, gaură, decupare, solid, solide, booleană, reuniune, scădere, intersecție, diferență, cusătură, închis, fixare, formă liberă, suprafață, suprafețe, b-spline, bspline, curbă, spline, loft, baleiere, șină, rețea, coons, petic, racordare, potrivire, continuitate, g0, g1, g2, tangent, curbură, zebra, puncte de control, noduri, grad, step, iges, clasa A, carenă, netezire
from: 64ed5196
---

Spațiul de lucru **Suprafețe** creează curbe și suprafețe netede din categoria folosită pentru carcase de produse, caroserii de mașini și carene de bărci: NURBS, aceeași matematică pe care o folosesc alte modelatoare de suprafețe. Totul se măsoară pe suprafețele exacte, niciodată pe triunghiurile pe care le vedeți. Dimensiunile sunt în milimetri, ca în restul PartCraft.

Alegeți **Suprafețe** în caseta **Spațiu de lucru**. Bara de instrumente are {{ui:Curbă}}, {{ui:Loft}}, {{ui:Baleiere}}, {{ui:Potrivire}} și {{ui:Zebra}}; fiecare comandă este în panoul din dreapta. O comandă spune ce mai are nevoie: faceți clic pe curbe sau pe suprafețe în vedere (aproape de o muchie sau de un capăt când cere asta) sau alegeți-le din listă; scrieți puncte sau faceți clic pe ele pe fețele piesei (în afara piesei ajung pe planul de sol), apoi apăsați Enter.

Curbele și suprafețele sunt salvate în fișierul piesei, lângă solid. Nu schimbă operațiile piesei: panoul are propriile **Anulare** și **Refacere**, câte un pas pentru fiecare comandă.

## Curbe

- **Curbă prin puncte** trece prin fiecare punct pe care faceți clic. **Curbă prin puncte de control** urmează în schimb o rețea de puncte.
- **Inserare nod**, **Ridicare grad** și **Coborâre grad** schimbă modul în care este descrisă o curbă fără să o mute (coborârea se refuză când curba s-ar muta mai mult decât toleranța). **Reconstruire curbă** îi dă un nou număr de puncte de control și spune cât s-a mutat.
- **Potrivire curbă** face capătul unei curbe să se întâlnească cu al alteia cu G0 (atingere), G1 (aceeași direcție) sau G2 (aceeași curbură de asemenea). **Racordare curbă** adaugă o curbă nouă între două capete, G1 sau G2.

## Suprafețe

- **Loft** prin două sau mai multe curbe, **Suprafață riglată** între două, **Extrudare curbă**, **Revoluție curbă**.
- **Baleiere pe o șină** poartă un profil de-a lungul unui traseu fără să-l răsucească; **Baleiere pe două șine** păstrează capetele profilului pe ambele șine. Baleierile sunt ajustate: rezultatul spune cât de aproape a rămas de baleierea reală.
- **Suprafață dintr-o rețea de curbe** trece printr-o grilă de curbe (fiecare traversând fiecare dintre celelalte o dată). **Petic din patru muchii** umple patru curbe care se întâlnesc în colțuri.
- **Potrivire suprafață** face o muchie de suprafață să se întâlnească cu un vecin cu G0, G1 sau G2; **Racordare suprafață** adaugă o suprafață între două muchii.
- **Suprafață decalată**, **Extindere suprafață** (suprafața continuă cum mergea), **Reconstruire suprafață**.

## Verificarea calității

Tabelul **Muchii comune** listează fiecare muchie pe care o împart două suprafețe, cu decalajul (mm), unghiul dintre ele (°) și saltul de curbură (1/mm), și dacă asta o face G0, G1 sau G2. O muchie mai proastă decât ați cerut apare în **Probleme** cu o reparație **Potrivire**. Dungile **Zebra** și culorile de curbură vin din suprafața exactă: dungile care trec neîntrerupt peste o muchie înseamnă G1; dungile care își păstrează și lățimea înseamnă G2.

G0–G2 sunt măsurate în 33 de puncte pe muchie. **G3 și calitatea „clasa A” nu sunt măsurate** și nu sunt pretinse.

## Tăierea unei suprafețe

Grupul **Tăiere** taie o suprafață fără să-i schimbe forma: suprafața își păstrează toate punctele de control, iar doar partea din interiorul conturului este afișată, numărată și scrisă. **Tăiere la un dreptunghi** și **Tăiere cu un cerc** lucrează pe o parte (0 până la 1) din suprafață în fiecare direcție, deci nu cer alegere în vedere; **Tăiere printr-o curbă** ia o curbă închisă aflată pe suprafață (este proiectată pe suprafață și refuzată cu explicație când este deschisă sau când este mai departe decât toleranța). Bifați **Decupare gaură** ca să scoateți interiorul conturului; lăsați-o debifată ca să păstrați doar interiorul. O suprafață poate avea un contur păstrat și oricâte găuri; un contur care traversează altul este refuzat. **Eliminare tăiere** arată din nou întreaga suprafață. Anularea din panou ia înapoi o tăiere ca orice alt pas.

STEP păstrează tăierea ca limite ale feței, iar IGES ca suprafață tăiată (entitatea 144); amândouă o citesc înapoi.

## Solide și booleene

Grupul **Solide** transformă suprafețele în corpuri închise și le combină. Un solid aici este o mulțime de suprafețe ale panoului care împreună închid un volum; fețele lui rămân suprafețe NURBS exacte cu tăierile lor.

- **Solid cutie**, **Solid cilindru** și **Solid sferă** creează unul din dimensiuni scrise (în mm): o cutie cu șase fețe plate, un cilindru cu o latură rotundă și două capete plate tăiate la cerc, o sferă dintr-o suprafață de revoluție.
- **Solid din suprafețe** grupează suprafețele pe care le-ați făcut. Alegeți-le, sau nu alegeți niciuna ca să folosiți toate suprafețele afișate care nu sunt încă într-un solid. Sunt cusute împreună în toleranță: dacă nu se închid, nu se schimbă nimic iar panoul spune câte muchii rămân deschise și cât de aproape trebuie să se întâlnească.
- **Reuniune**, **Scădere** (al doilea solid se scoate din primul) și **Intersecție** (doar ce au în comun amândouă) cer două solide: faceți clic pe o față din fiecare în vedere sau apăsați **Alegere** în lista **Solide**. Bifați **Păstrare cele două solide** ca să le lăsați alături de rezultat.

O operație booleană păstrează fiecare față pe suprafața ei exactă și o taie cu noi contururi de tăiere de-a lungul intersecției. Linia de rezultat dă cifrele măsurate: cât au trebuit să se mute punctele motorului de solide ca să stea pe suprafețele exacte (niciodată mai mult decât toleranța), cât de aproape sunt punctele de intersecție de ambele suprafețe (de obicei câteva milionimi de milimetru), volumul și dacă noile fețe se închid din nou când sunt cusute din nou din suprafețele lor exacte. Volumele sunt măsurate pe triunghiuri în toleranță (0.05 mm dacă nu setați alta), deci volumul unei sfere sau al unui cilindru apare puțin sub cel exact: o toleranță mai mică se apropie mai mult. O operație booleană care nu poate fi făcută curat (solidele nu au nimic în comun, un contur s-ar intersecta singur) este refuzată cu explicație și nu schimbă nimic. O operație booleană este un pas al **Anulare** din panou.

În lista **Solide**, **Dezgrupare** păstrează fețele ca suprafețe simple; coșul șterge solidul și fețele lui.

## Racordări și îngroșare

**Racordare între fețe** rotunjește muchia unde se întâlnesc două fețe ale aceluiași solid: alegeți cele două fețe (în vedere sau cu **Alegere** din listă), scrieți **raza** și, pentru o rază care se schimbă de-a lungul muchiei, **raza la capăt** (0 păstrează o rază). O bilă de raza aceasta este rostogolită de-a lungul muchiei atingând ambele fețe; racordarea este arcul circular exact pe care îl lasă în fiecare punct, unit într-o singură suprafață, iar cele două fețe sunt tăiate acolo unde bila le atinge. O muchie exterioară pierde material, un colț interior câștigă. Linia de rezultat dă ce s-a măsurat: cât de departe este suprafața de racordare de bila rostogolită între punctele din care a fost construită (se adaugă puncte până când este în a patra parte a toleranței), cel mai mare unghi dintre racordare și fiecare față de-a lungul liniilor de atingere și aceleași cifre ca la o reuniune. O rază care nu încape (bila ar ieși dintr-o față sau o față se curbează mai strâns decât raza) este refuzată cu numele feței, iar nimic nu se schimbă.

**Racordare mai multor muchii** rotunjește multe muchii dintr-un singur pas: alegeți cele două fețe ale primei muchii, apoi pe cele ale următoarei, și așa mai departe (o față poate fi în mai multe perechi, de exemplu fața de sus a unei cutii în patru dintre ele); toate muchiile primesc raza pe care o scrieți. Fiecare rotunjire este calculată pe solidul așa cum era, apoi sunt tăiate una după alta, deci ordinea nu contează. Acolo unde două muchii rotunjite se întâlnesc într-un colț ale cărui alte muchii rămân ascuțite, cele două racordări se intersectează de-a lungul curbei lor de intersecție (o cută). Acolo unde trei muchii exterioare rotunjite ale trei fețe plate perpendiculare între ele se întâlnesc cu o singură rază, colțul este un **petic de sferă** tangent la toate cele trei racordări (debifați **Colțuri** ca să obțineți în schimb colțul cu cută); o muchie trebuie să fie de cel puțin două ori mai lungă decât raza acolo unde ambele capete sunt astfel de colțuri. Linia de rezultat spune câte muchii au fost rotunjite și cum au ieșit colțurile. Muchiile interioare pot fi rotunjite și ele împreună, dar un rezultat care nu se mai închide este doar raportat (linia o spune), deci verificați-l.

**Îngroșare într-un solid** dă unei suprafețe o grosime: alegeți-o, scrieți **grosimea** și bifați **Cealaltă parte** ca s-o creșteți în sens opus. Fața decalată este potrivită pe suprafață și măsurată față de ea (linia de rezultat dă cea mai mare diferență față de grosime); pereții urmează fiecare muchie și fiecare contur de tăiere. Dacă suprafața se curbează mai strâns decât grosimea de pe partea aceea, sau altă parte a ei stă mai aproape decât grosimea, este refuzată cu numele suprafeței și locul, iar nimic nu se schimbă.

## Fixarea unui solid în piesă

**Fixare** (în bara de instrumente Suprafețe) sau **Fixare în piesă** din lista **Solide** face din solid un corp al piesei, cum devine un STL deschis: alegeți solidul, dacă este **adăugat** la piesă, **tăiat** din ea sau **intersectat** cu ea, și toleranța (cât de departe pot fi triunghiurile de suprafețele exacte). Este un pas al Anulare din piesă și apare în lista de operații ca un import numit după solid. Piesa păstrează triunghiurile, deci se deschide și se reconstruiește fără suprafețe; solidul exact rămâne în Suprafețe, deci îl puteți fixa din nou după o modificare.

## Fișiere

Exportați **STEP** (AP242) sau **IGES** cu curbele și suprafețele exact cum sunt (curbe și suprafețe B-spline, nimic transformat în triunghiuri). Fiecare suprafață este propria ei față, cu tăierea ei; un solid este scris ca o singură coajă închisă, fiecare muchie fiind comună celor două fețe ale ei, așa cum se așteaptă alte programe CAD (linia de stare spune câte solide au ieșit astfel). În IGES același solid este un singur B-rep solid manifold (entitatea 186 peste coaja închisă 514, fețele 510, buclele 508, o listă de muchii 504 și o listă de vârfuri 502); un solid ale cărui fețe nu se potrivesc muchie cu muchie este scris ca fețe separate, iar linia o spune. **Import…** citește un astfel de solid înapoi ca solid, din STEP și din IGES.

## Netezirea liniilor de carenă

**Netezire** (în bara de instrumente Suprafețe) măsoară fiecare curbă pe forma ei exactă — punctele de inflexiune (unde trece de la îndoire într-un sens la celălalt), curbura cea mai mare, saltul de curbură în nodurile ei și asprimea ei — și reconstruiește curbele cu punct de inflexiune sau salt cu cele mai puține puncte de control care rămân în toleranța pe care o dați și nu adaugă nicio inflexiune. Desenați secțiunile transversale, liniile de plutire și liniile de fund ca curbe, netezițile, apoi faceți **Loft** la carenă prin secțiuni și verificați-o cu **Zebra**. Curbele neînetezite apar și ele în **Probleme**, cu o reparație **Netezește această curbă**. O linie care trebuie să-și schimbe direcția (o secțiune în S) păstrează acea singură inflexiune. Deplasarea carenei, centrele și brațele de redresare vin din solidul piesei: vezi unealta de hidrostatică.

## Suprafețe dintr-un scan (inginerie inversă)

Deschideți piesa care conține plasa scanată (un STL deschis sau un corp fixat), alegeți **Suprafețe** în caseta **Spațiu de lucru**, iar în grupul **Scanare** alegeți **Potrivire suprafețe la scan**; plasa construită a piesei este scanul. Instrumentul caută **plane**, **cilindri**, **sfere** și **conuri** (suprafețele exacte din care este făcută o piesă prelucrată; fiecare rând arată raza sau semiunghiul găsit), găsește **racordări** (muchii și colțuri rotunjite: un mic cilindru sau o sferă care intră tangent în două sau mai multe fețe, arătat cu raza și fețele pe care le unește), **racordări de contur** (un tor: muchia rotunjită unde o față plată întâlnește un cilindru sau un con, arătată cu raza ei și raza inelului) și **racordări variabile** (o muchie rotunjită a cărei rază se schimbă de-a lungul ei, arătată cu raza la fiecare capăt), potrivește **o singură petică liberă** pe o bucată netedă, ușor curbată, și taie fiecare față la conturul părții din scan din care provine, astfel încât găurile și colțurile rămân. Opțiuni: **toleranța** (cât de departe, în mm, poate fi un punct de scan de un plan sau un cilindru și să-i aparțină încă, și ținta pentru o petică liberă), **cea mai mică bucată** (o parte din aria suprafeței) și **cele mai multe fețe**. Același scan și aceleași opțiuni dau întotdeauna aceleași fețe.

Rezultatul este un tabel, câte un rând pentru fiecare față: tipul ei, câte triunghiuri din scan provine și eroarea **măsurată de la scan la față** (rms, cea mai mare, și partea de puncte în toleranță). Punctele măsurate sunt vârfurile scanului și mijlocul fiecărui triunghi. Eroarea nu se măsoară și invers (de la față la scan), așa că o față care depășește scanul nu s-ar vedea. Nota de sub tabel spune și cât din arie era prea mică pentru a fi potrivită. În vedere, punctele scanului sunt colorate după **harta de abatere**: albastru pe față, verde la jumătatea drumului spre toleranță, roșu la toleranță sau peste (debifați **Afișare hartă de abatere** ca s-o ascundeți). Bucățile care se pliază peste ele însele (un tub închis potrivit cu petice libere, de exemplu) sunt listate ca nepotrivite, niciodată forțate într-o singură suprafață.

**Cusătură suprafețe într-un solid** coase fiecare suprafață afișată care nu este într-un solid într-un singur solid închis. Fețele scanate se întâlnesc doar în eroarea proprie a scanului, deci încearcă cea mai mică distanță de îmbinare care închide (niciodată mai mare decât **distanța de cusătură** pe care o setați) și refuză cu explicație când fețele nu se închid. Nu acoperă niciodată un gol. O cutie cu muchii rotunjite se cusută când racordările ei au fost găsite ca fețe proprii; distanța de îmbinare care a închis apare în rezultat. Solidul lucrează apoi cu Reuniune, Scădere, Intersecție și **Fixare în piesă**.

Ce nu face: o **racordare de contur** (un tor) este căutată doar în jurul axei unui cilindru sau con deja găsit, iar o **racordare variabilă** doar de-a lungul unei muchii destul de drepte (secțiunile ei sunt tăiate pătrat față de o direcție); în altă parte apar ca petice libere când sunt suficient de netede și sunt lăsate afară altfel; sferele, conurile și racordările se găsesc prin eșantionare aleatorie, deci una foarte mică (câteva triunghiuri) poate fi ratată; harta de abatere arată distanța de la scan la fețe, nu invers; scanurile foarte mari (peste 300.000 de triunghiuri) sunt refuzate aici. Fețele unui cilindru de rotație completă sunt tăiate în jurul găurilor, cu cusătura pusă unde nu este nicio gaură. Verificați fiecare față față de scan înainte de utilizare.

## Încă nerealizat

Rotunjirea muchiilor care se întâlnesc într-un colț de suprafețe curbe sau cu raze diferite (un amestec de vârf), o racordare între fețe care nu se întâlnesc, o racordare interioară care se termină pe o față înclinată sau curbă, booleene și racordări calculate pe suprafețe fără triunghiuri (aici motorul de solide lucrează pe triunghiuri în toleranță, iar fiecare punct este apoi pus înapoi pe suprafețele exacte), un corp fixat care urmează suprafețele când acestea se schimbă, tăierea unei suprafețe printr-o altă suprafață în afara unei booleene, umplerea găurilor cu mai mult de patru laturi, proiectarea curbelor pe suprafețe.
