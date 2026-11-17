---
title: Verificarea rezistenței și a deformării (Simulare)
summary: Alegeți un material, fixați fețe, adăugați forțe, presiuni sau greutatea proprie a piesei, rezolvați și citiți tensiunea von Mises, deplasarea, factorul de siguranță, reacțiile și frecvențele proprii pe model, cu ce poate și ce nu poate să vă spună metoda.
keywords: simulare, FEA, analiză live, actualizare în timpul editării, până la rupere, ce cedează primul, factor de încărcare, neliniar, plasticitate, curgere, deformație plastică, bilinear, contact, pereche de contact, penalizare, lipit, contact fără frecare, CalculiX, .inp, .frd, element finit, tensiune, deformație, von Mises, deplasare, deformare, factor de siguranță, factor de siguranță, limită de curgere, reacție, încărcare, forță, presiune, gravitație, greutate proprie, fixat, fără frecare, reazem, constrângere, material, oțel, aluminiu, titan, ABS, PLA, nylon, frecvență proprie, modal, vibrație, plasă, dimensiunea elementului, tetraedric, tetraedre, plasă tetraedrică, voxel, calitatea plasei, tensiune principală, deformație echivalentă, estimarea erorii, suprafețe curbe, găuri, racordări, adaptiv, rafinare adaptivă, rafinare automată, h-adaptiv, convergență, convergența plasei, suprafață exactă, sferă, con, tor, spline, formă liberă
from: 6f2fdec1
---

Spațiul de lucru Simulare răspunde la întrebarea „se va îndoi sau se va rupe sub această încărcare?” pentru piesa pe care o modelați. Este un studiu **static liniar** (deplasări mici, materialul rămâne elastic) sau un studiu de **frecvență proprie**, rezolvat pe o plasă de tetraedre cvadratice care urmează fețele piesei (sau, dacă alegeți, pe cuburi mici egale). Lucrează pe fețele numite pe care nucleul de plasă le dă piesei (vezi [Nucleul de plasă](topic:solid-kernels)).

Alegeți **Simulare** în caseta **Spațiu de lucru** din stânga barei de instrumente. Piesa dumneavoastră nu se schimbă; studiul este salvat în fișierul piesei, iar fiecare modificare a sa poate fi anulată.

## Configurarea unui studiu

1. Apăsați **Studiu nou** în panoul din dreapta.
2. Alegeți **Materialul**. Panoul arată rigiditatea (E), coeficientul lui Poisson, densitatea și limita de curgere. Valorile sunt cifre tipice din manuale; valorile certificate ale furnizorului dumneavoastră pot fi altele.
3. Alegeți **Plasa**:
   - **Tetraedric (precis)**, implicit: tetraedre cu 10 noduri ale căror fețe exterioare stau pe fețele piesei, cu muchii curbe la găuri, racordări și alte fețe rotunjite. Nodurile de pe fețele plane, cilindrice, conice, sferice și toroidale, de pe fețele rotite și extrudate și de pe fețele de formă liberă (B-spline) stau pe suprafața exactă; orice alt tip de față urmează plasa sa de afișare, iar tabelul rezultatelor spune câte fețe au făcut asta. Plasa se face singură mai fină lângă suprafețele curbe, pereții subțiri și muchiile ascuțite.
   - **Cuburi voxel (rapid)**: piesa umplută cu cuburi egale. Rapid, dar suprafețele curbe devin trepte. Studiile salvate înainte să existe plasa tetraedrică rămân pe aceasta.
4. Lăsați **Dimensiunea elementului** goală pentru o dimensiune automată (circa 12.000 de tetraedre, sau 20.000 de cuburi), sau scrieți una în milimetri. Panoul arată câte elemente rezultă aproximativ înainte ca zonele mai fine să fie adăugate. Cu tetraedre, **Elemente mai mici pe suprafețe curbe** (activat implicit) rafinează găurile și racordările, unde tensiunea atinge de obicei valoarea maximă.

### Rafinare automată

Cu tetraedre, un studiu static sau de flambaj (fără încărcare termică), un studiu de frecvență proprie și un studiu termic staționar oferă **Rafinare automată (adaptivă)**. Bifați-o și setați:

- **Eroarea țintă (%)**: rezolvarea se oprește când eroarea estimată este sub ea (1 % la început).
- **Cele mai multe treceri**: cele mai multe rezolvări pe care le poate face (5 la început, cel mult 10).

Fiecare trecere rezolvă, găsește elementele cu cea mai mare eroare estimată, le împarte (și atâtea vecine câte sunt necesare ca plasa să rămână întreagă) și rezolvă din nou. Noile noduri de pe suprafețele curbe merg pe suprafața exactă. Rezultatele arată apoi un tabel și un grafic cu, pentru fiecare trecere, elementele, necunoscutele, eroarea estimată și tensiunea maximă (sau temperatura) și deplasarea (sau fluxul termic), plus o linie care spune de ce s-a oprit: ținta a fost atinsă, trecerile s-au terminat, următoarea plasă ar fi prea mare, sau o trecere a eșuat (vedeți atunci ultima trecere bună).

Citiți estimarea ca pe o estimare. Ea (Zienkiewicz–Zhu; comparată cu răspunsuri exacte, citește între 0,6 și 0,95 din eroarea reală) măsoară eroarea pe **întreaga piesă**, așa că o tensiune maximă la o gaură sau o racordare este de obicei încă puțin greșită când estimarea pare mică: pentru o concentrare de tensiune, setați ținta sub 1 % și urmăriți cum se stabilizează vârful de la o trecere la alta. Într-un colț interior ascuțit sau pe marginea unei fețe fixate, tensiunea reală este infinită, deci estimarea nu ajunge niciodată acolo: trecerile se termină în schimb.

**Frecvențe proprii și flambaj.** Pentru un studiu de frecvență proprie, estimarea acoperă fiecare mod cerut, fiecare numărat la fel; tabelul și graficul urmăresc primele două frecvențe. Pe o piesă cu doar fețe plane, o frecvență poate doar să scadă de la o trecere la alta (fiecare plasă o păstrează pe cea anterioară); fețele curbe se apropie și ele de forma lor reală, ceea ce poate muta o frecvență puțin în orice sens. Pentru flambaj, estimarea acoperă pre-tensiunea și modurile de flambaj, iar tabelul urmărește factorii de încărcare. Verificat pe o bară de oțel de 100 × 10 × 10 mm: prima frecvență se stabilizează de la 812,4 la 811,9 Hz în patru treceri, cu 0,4 % sub Euler–Bernoulli (care ignoră forfecarea), iar factorul de încărcare al coloanei se află la 0,5 % de Euler.

## Fixarea și încărcarea

Fiecare studiu are nevoie de cel puțin un reazem și, pentru tensiune, de o încărcare.

1. Apăsați {{ui:Fixare}} în bara de instrumente. Noul reazem este selectat și așteaptă fețe: faceți clic pe fețele care sunt ținute pe loc (faceți clic din nou pe o față ca s-o scoateți). Apăsați **Gata cu alegerea** sau {{key:Esc}} când ați terminat. Conuri albastre marchează fețele ținute.
2. Apăsați {{ui:Forță}} și faceți clic pe fețele pe care acționează forța. În panou scrieți **Forța totală** în newtoni și alegeți **Direcția** sa: în față, sau de-a lungul unei axe. Forța este împărțită pe fețele alese proporțional cu aria. Săgeți portocalii o arată.
3. Apăsați {{ui:Presiune}} pentru o presiune în MPa (N/mm²) care împinge în fețele alese; o presiune negativă trage.

Mai multe tipuri sunt în lista **Adăugare** a panoului: o **Față fără frecare** (fața poate aluneca de-a lungul ei, dar nu se poate depărta de ea — folosiți-o pentru plane de simetrie și reazeme netede) și **Gravitație** (greutatea proprie a piesei, 9,81 m/s², în direcția pe care o alegeți).

Un reazem care lasă piesa liberă să alunece sau să se rotească este refuzat, cu indicarea mișcării rămase libere.

## Rezolvarea și citirea rezultatelor

Apăsați {{ui:Rezolvare}}. Lucrul rulează în fundal; **Oprire** îl anulează. Apoi:

- Piesa este colorată după **tensiunea von Mises**; alegeți **Deplasare** sau **Factor de siguranță** în **Afișare**. Legenda dă scara.
- Treceți cu indicatorul peste piesă ca să citiți valorile de sub el.
- Bifați **Forma deformată** ca să vedeți piesa îndoită (mișcarea este mărită de **Scara**; cea reală este în tabel).
- Tabelul listează cea mai mare tensiune și locul ei, cea mai mare deplasare, cel mai mic **factor de siguranță** (limita de curgere ÷ tensiunea von Mises; sub 1 materialul cedează), încărcarea aplicată și **reacțiile** din reazeme (ele echilibrează încărcarea), precum și plasa folosită.

Pentru **frecvențele proprii**, alegeți acel **Tip**, setați câte **Moduri**, și rezolvați. Fiecare mod arată frecvența și forma sa (formele sunt scalate la 1 în punctul de mișcare maximă).

Dacă schimbați piesa, rezultatele sunt marcate ca neactualizate: rezolvați din nou.

## Curgerea și contactul (studii neliniare)

Două tipuri de studii mai trec dincolo de „materialul rămâne elastic”:

- **Neliniar (materialul cedează)** urmează linia dreaptă a materialului până la tensiunea sa de curgere, apoi o pantă mai plată (**Pantă după curgere**, 1 % din E dacă este lăsată goală). Încărcarea crește în **Pași de încărcare**; un pas care nu se stabilizează este înjumătățit singur. Rezultatele adaugă **Deformația plastică** graficelor și spun câtă parte din încărcare a fost preluată. Dacă un pas tot nu se stabilizează, studiul se oprește la ultimul pas bun, iar panoul ⚠ Probleme spune unde: piesa și-a epuizat acolo rezistența (o prăbușire), sau pașii sunt prea mari.
- **Contactul între piese** lasă piesele separate ale piesei să împingă una în alta. Adăugați o **Pereche de contact**, alegeți fețele din partea A (cele care apasă) cu {{ui:Alegere fețe}}, apoi partea B cu {{ui:Selectați fețele părții B}}. **Fără frecare**, piesele împing, alunecă și se despart; **lipite**, piesele rămân fixate. Fiecare piesă este plasată separat, așa că un mic spațiu între ele este în regulă. Contactul este o metodă de penalizare: piesele se scufundă puțin una în alta (**factorul de penalizare** × E ÷ dimensiunea elementului dă rigiditatea contactului). Tabelul arată cea mai mare scufundare, iar panoul Probleme avertizează când depășește 1 % din dimensiunea elementului: măriți factorul sau folosiți elemente mai mici.

Ambele folosesc plasa tetraedrică. Frecarea, alunecarea mare și rotirile mari nu sunt rezolvate aici.

## Rularea în CalculiX

**Export › Fișier de intrare CalculiX (.inp)** (sau {{ui:Salvați un fișier de intrare CalculiX (.inp)}} din panou) salvează studiul ca fișier de intrare pentru CalculiX, un program separat pe care îl instalați și îl rulați singur: aceeași plasă, același material, aceiași reazemi, aceleași încărcări și perechi de contact, în mm, N și MPa. Rulați-l, apoi **Export › Rezultate CalculiX (.frd)** citește fișierul său de rezultate înapoi pe aceeași plasă și arată deplasarea (și tensiunea von Mises când fișierul are tensiuni). Dacă ați schimbat între timp piesa sau dimensiunea elementului, plasa nu mai este aceeași, iar PartCraft o spune: salvați un fișier de intrare nou.

## Cât de mult să aveți încredere

PartCraft își verifică solverul față de formule de mână (deplasarea vârfului unei console PL³/3EI în 1 %, alungirea unei bare PL/AE exact, prima frecvență a unei console în 3 %, tensiunea din jurul unei găuri într-o placă). Totuși, țineți minte aceste limite:

- **Plasa.** Cu tetraedre, PartCraft verifică deplasarea și tensiunea de încovoiere a unei console (în 0,3 %), tensiunea la o gaură într-o placă (Kt, în jur de 1 %), un tub gros sub presiune (Lamé, în 0,3 %) și prima frecvență (în 0,4 %). Tabelul arată **calitatea plasei** (cel mai mic și cel mai mare unghi dintre fețele elementelor; sub circa 10° un element este slab) și o **eroare estimată a tensiunii**: dacă depășește câteva procente, rezolvați din nou cu o dimensiune mai mică a elementului, sau lăsați **Rafinare automată** s-o facă. Pe o placă cu gaură și pe o bară cu două crestături pe margine, rafinarea automată a ajuns în 1 % față de Kt din manual cu circa o șesime din necunoscutele pe care le cerea făcând întreaga plasă mai fină. Cu cuburi voxel, o gaură sau o racordare este o scară la dimensiunea cubului, deci tensiunea acolo este aproximativă.
- **Colțurile interioare ascuțite și marginile fețelor fixate nu au vârf real de tensiune.** Valoarea acolo crește mereu pe măsură ce elementele devin mai mici. Citiți tensiunile puțin departe de astfel de locuri, sau rotunjiți colțul în model.
- **Rezultatele de citit.** Pe lângă tensiunea von Mises, deplasare și factorul de siguranță, un studiu tetraedric arată **tensiunea principală maximă și minimă** (întindere și compresiune) și **deformația echivalentă**. Bifați **Afișare plasă** ca să vedeți elementele.
- **Studiile statice sunt liniare și elastice.** Pentru curgere și contact folosiți tipurile de studii neliniare de mai sus; deplasările mari și oboseala nu sunt rezolvate. Căldura, tensiunea termică și flambajul liniar sunt tipuri de studii proprii: vezi [Căldură, tensiune termică și flambaj](topic:thermal-and-buckling).
- **Fiecare material este la fel în toate direcțiile.** Materialele plastice imprimate 3D sunt mai slabe pe direcția straturilor, adesea cu o treime sau mai mult.
- Aceasta este o versiune de laborator: verificați piesele care contează altfel.

## Actualizarea în timpul editării (Live)

Bifați **Actualizare în timp ce editez** în blocul Rezolvare și răspunsurile Simulării urmează editările dumneavoastră. Schimbați o cotă, o încărcare, materialul sau mediul și apare imediat un **răspuns rapid**, făcut cu elemente de patru ori mai mari decât ale studiului; când vă opriți o clipă (o secundă sau cam așa), **răspunsul rafinat** al studiului îl înlocuiește. Rezultatele spun la care vă uitați („Răspuns rapid” sau „Răspuns rafinat”) și dimensiunea elementului. Răspunsul rapid este bun pentru direcție și mărime: pe o consolă de oțel a fost în 1 % la deplasare și în jur de 4 % la tensiune față de cel rafinat. Aveți încredere în cel rafinat pentru cifrele pe care le veți folosi. Studiile statice, de frecvență proprie, termice și de flambaj funcționează așa; Live este o setare de vizualizare și nu este salvată în piesă. O Rezolvare pe care o apăsați singur rămâne cum este până la următoarea editare.

## Aflați ce cedează primul (Până la rupere)

Pentru un studiu static sau de flambaj, apăsați **Ce cedează primul?** în blocul **Testare rupere**. PartCraft scalează încărcările studiului (forțele, presiunile și greutatea împreună) până când piesa cedează și listează, cel mai rău primul, **factorul de încărcare până la prima curgere** (factorul asupra încărcărilor de azi la care cea mai mare tensiune von Mises ajunge la limita de curgere a materialului, cu un marcaj roșu acolo unde se întâmplă) și **factorul de încărcare până la flambaj** pentru aceiași reazemi și aceleași încărcări. Un factor de 4,3 înseamnă că piesa suportă de 4,3 ori încărcarea sa înainte să cedeze; **un factor sub 1 înseamnă că deja cedează așa cum este încărcată**, iar asta apare în lista Probleme ca eroare (cea mai slabă constatare este arătată ca notă chiar și când totul rezistă). Factorii vin dintr-un studiu liniar pe tetraedre, la dimensiunea elementului dumneavoastră, deci sunt la fel de buni cât este acel studiu: tensiunea la o față fixată sau la un colț ascuțit nu are vârf real (vezi mai jos), iar factorul de curgere va fi în partea prudentă acolo. Asistentul dumneavoastră poate rula aceeași verificare cu instrumentul `break_run`.

## Vezi și

- [Căldură, tensiune termică și flambaj](topic:thermal-and-buckling)
- [Creșterea unei forme din încărcări (Generativ)](topic:generative-design)
- [Măsurarea distanțelor, unghiurilor și masei](topic:measure)
- [Ce este încă nerealizat](topic:not-built-yet)
