---
title: Degroșare 3D și prelucrarea restului
summary: Curățați semifabricatul în jurul întregului model, nivel cu nivel, cu o freză plată, cu colț rotunjit sau cu capăt sferic, lăsând adaos pentru finisare, apoi lăsați o sculă mai mică să taie doar acolo unde prima a lăsat material. Ce garantează traseele și ce nu garantează.
keywords: degroșare 3D, degroșare, prelucrarea restului, degroșare a restului, material rămas, adaos de lăsat, pas pe adâncime, niveluri, nivel z, linie de apă, rampă, scufundare, prelucrare excesivă, sculă mai mică
from: 29ddc266
---

Două operații din Fabricație, sub {{ui:Mai multe}} din bara de instrumente, curăță semifabricatul din **întregul model** în 3D, cu scula menținută vertical (sau de-a lungul [direcției proprii de sculă](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) a operației). Nu cer selectări.

## Degroșare 3D

{{ui:Degroșare 3D}} lucrează în jos de la partea de sus a semifabricatului câte un **pas pe adâncime** deodată. La fiecare nivel curăță tot ce poate ajunge scula fără să atingă modelul: rânduri drepte la un **pas lateral** distanță (o fracțiune din diametrul sculei), apoi o dată pe marginea a ceea ce poate ajunge, astfel încât pereții sunt urmăriți și nu lăsați ca un șir de trepte în plan.

- **Adaos de lăsat**: cât de departe rămâne scula de model peste tot, pentru trecerea de finisare (implicit 0.5 mm).
- **Un nivel la fiecare față plană**: un nivel suplimentar la înălțimea fiecărei fețe plane a modelului (plus adaosul de lăsat), ca un fund să nu rămână aproape cu un pas întreg mai sus.
- **Ignoră semifabricatul mai subțire decât**: materialul mai subțire decât aceasta, în sus sau lateral, nu merită o trecere (0.05 mm la degroșare, 0.5 mm la prelucrarea restului, ca un fir de material lăsat pe lângă un perete să nu trimită sculă mai mică în jurul fiecărui perete).
- **Fund**: nimic nu se taie sub această înălțime. Gol înseamnă fundul modelului.

Pornește de la semifabricatul **așa cum l-au lăsat operațiile dinainte**: după o trecere de față nu taie aerul în care a trecut frezarea frontală.

Coborârea: acolo unde scula ar întâlni semifabricat pe drumul în jos, ea intră în rampă de-a lungul propriei treceri, la **unghiul rampei**, înainte și înapoi pe cel mult două diametre de sculă. O trecere prea scurtă pentru asta se scufundă drept în jos, la **avansul de scufundare**; operația le numără și avertizează, pentru că o sculă care nu taie pe centrul ei nu ar trebui să facă asta.

## Prelucrarea restului

{{ui:Restul}} este aceeași strategie pentru o **sculă mai mică după una mai mare**. Citește simularea stocului și taie doar unde mai stă material: în colțurile interioare în care scula mai mare nu putea intra, în canelurile în care nu încăpea, în treptele pe care le-a lăsat pe pante. În rest nu face nimic, astfel încât traseul său este o mică parte din ce ar lua aceeași sculă pe semifabricat proaspăt.

Puneți-o după operația de degroșare și alegeți scula mai mică. Are nevoie de simularea stocului operațiilor dinaintea ei, pe care spațiul de lucru o rulează mereu.

## Cât de bune sunt traseele

- **Nicio prelucrare excesivă.** Pozițiile sculei sunt calculate pe o rețea, cu freza luată puțin mai mare decât este (cu 1.4 celule de rețea lateral și cu adaosul de lăsat), astfel încât oriunde stă ea să fie liberă de model. Testele verifică fiecare punct de tăiere față de scula exactă pe plasa exactă, iar simularea stocului după fiecare rulare: nicio prelucrare excesivă, nicio mișcare rapidă prin material.
- **Prețul acestui lucru**: pereții păstrează puțin mai mult decât adaosul de lăsat, până la cantitatea arătată ca „Adaos suplimentar pe pereți” la operație (circa 0.5 mm pentru o sculă Ø6, mai puțin pentru una mai mică). Trecerea de finisare îl ia.

Ce nu sunt aceste trasee:

- Rândurile sunt linii drepte, nu decalaje ale formei piesei sau curbe cu angajare constantă. Fac mai multe ridicări și deplasări în aer decât o strategie decalată sau adaptivă, iar primul rând la fiecare nivel taie lățimea întreagă a sculei. Pentru buzunare cu fund plat, [Adaptiv](topic:manufacture) este degroșarea mai bună.
- Coada sculei și portsculul nu sunt verificate. Un avertisment spune când tăietura este mai adâncă decât lungimea canalelor.
- Subtăierile nu se văd: modelul este ce întâlnește scula coborând pe axa ei. Ca să degroșați o latură, dați unei a doua operații o [direcție de sculă înclinată](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Prelucrarea restului cunoaște semifabricatul doar cât de bine îl cunoaște rețeaua simulării (celule de 0.1 până la 2 mm, după dimensiunea piesei).
- Pe o piesă mare programul este lung (peste 100,000 de deplasări pentru o flanșă de 200 mm cu o sculă Ø6) și durează circa un minut să se calculeze, iar fiecare modificare în spațiul de lucru recalculează tot programul. Folosiți cea mai mare sculă care încape la degroșare.
- Verificați rezultatul în simulatorul propriu al mașinii înainte de așchiere.
