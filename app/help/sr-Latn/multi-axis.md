---
title: Obrada na 4 i 5 osa
summary: Recite PartCraft-u koje rotacione ose mašina ima, nagnite alat za bilo koju običnu operaciju, završite površ kuglastom glodalicom koja se naginje dok seče, ili okrećite deo ispod alata na 4. osi. Šta se piše u G-kod i šta nije dokazano.
keywords: 5 osa, pet osa, 4 ose, četvrta osa, višeosna, višeosnost, 3+2, indeksirano, pozicijski, nagib, nagnut alat, rotaciono, trunion, sto, glava, A osa, B osa, C osa, TCP, RTCP, centar alata, G43.4, inverzno vreme, G93, kinematika, oslonac, swarf, ugao uvođenja
from: c4f1c491
---

Radni prostor Proizvodnja može držati alat pod uglom, i može pomerati rotacione ose dok seče. Tri stvari to rade, od najjednostavnije naviše.

**Ništa ovde nije pušteno na mašini.** Putanje su proverene u odnosu na geometriju testovima, a G-kod je pročitan nazad, ali ugrađeni postprocesori prate dokumentovane kodove upravljača, a ne nijednu mašinu koja je pred nama. Dokažite program u simulatoru vašeg upravljača i u vazduhu pre nego što dođe do metala.

## Rotacione ose mašine

Na kartici **Postavka**, {{ui:Rotacione ose}} kaže šta mašina ima:

| Izbor | Mašina |
|---|---|
| Nijedna (3 ose) | Obična glodalica. Svaka operacija kojoj treba nagnut alat upozorava, a postprocesor je odbija da je zapiše. |
| A (okreće se oko X) | Jedna rotaciona osa duž X: 4. osa stola ili indeksator. Alat može da se naginje samo u ravni Y–Z. |
| B (okreće se oko Y) | Jedna rotaciona osa duž Y. Alat može da se naginje samo u ravni X–Z. |
| A i C | Osa naginjanja oko X koju nosi, ili koja nosi, okretanje oko Z: trunion sto ili glava. |
| B i C | Isto, sa naginjanjem oko Y. |

Zatim:

- **Nosi**: {{ui:Sto (deo se okreće)}} ili {{ui:Glava (alat se okreće)}}. Sto se okreće suprotno da dovede istu stranu pod alat, pa znak svakog ugla sledi iz ovoga.
- **Upravljač održava vrh alata na putanji (TCP)**: kada je uključeno, X Y Z u programu su vrh alata u sopstvenim koordinatama dela, a upravljač radi ostalo (ugrađeni postprocesori Fanuc-stil i LinuxCNC pišu `G43.4` za dužinu alata). Kada je isključeno, na mašini sa stolom, PartCraft piše X Y Z kako okrenuti sto nosi deo, oko **centra rotacije** koji zadate (u radnim koordinatama; 0, 0, 0 kada je radni početak u centru). Mašina sa glavom mora imati uključen TCP: bez njega program bi trebao dužinu oslonca mašine, a PartCraft je ne zna.
- **Granica nagiba**: koliko daleko ide osa naginjanja.

Mašine se razlikuju po tome koji smer broje kao pozitivan. Ako osa na vašoj okreće pogrešno, promenite znak u kopiji postprocesora ([Postprocesori koje možete menjati](topic:post-processors)).

## Nagnut alat za običnu operaciju

Svaka operacija glodanja (površ, džep, prilagodljivo, kontura, bušenje, obaranje ivice, paralelno, lučenje, 3D grubo, ostatak) ima **Nagib alata** i **Nagni prema**: pravac alata za tu operaciju, merenu od ose alata postavke. Ovo je 3+2 obrada: rotacione ose idu na položaj i ostaju tamo dok tri ose seku.

- Upišite dva ugla, ili pritisnite {{ui:Alat normalno na površinu}} i kliknite ravnu površ: alat će pokazivati pravo na nju.
- Izaberite površi i ivice operacije kao i obično. Šta je dno ili rupa odlučuje se duž nagnutog alata.
- Sirovac za taj pravac je kvadar koji obuhvata okrenuti sirovac, pa su visine i zazori sigurni sa te strane.

U G-kodu, pre operacije alat ide gore, rotacione ose se okreću, a alat se spušta nad svoju prvu tačku. Na mašini sa stolom bez TCP, lukovi ostaju lukovi, a fiksni ciklusi bušenja ostaju ciklusi (napisani okvir se samo okreće oko Z). Sa TCP u nagnutoj ravni, lukovi postaju kratke linije, a ciklusi pokrete koje predstavljaju.

Simulacija sirovca pokreće nagnut pravac **samostalno**: prikazuje šta ta operacija seče iz celog sirovca gledanog sa svoje strane i nalazi zadiranja tamo, ali rezovi napravljeni iz drugih pravaca se ne prenose.

## Završna obrada na 5 osa

{{ui:Više}} na traci Proizvodnje navodi ovu operaciju i sledeću na vrhu kartice **Operacije**.

{{ui:5 osa}} je [paralelni prolaz završne obrade](topic:finish-3d) sa **kuglastom glodalicom koja se naginje dok ide**. Kuglica seče sferom, a sfera je ista koliko god alat bio nagnut oko svog centra, pa kuglica prati tačno putanju koju bi dao prolaz na 3 ose, a menja se samo pravac alata:

- **Prema površi**: 1 = normalno na površ, 0 = uspravno, bilo šta između.
- **Nagib napred**: stepeni duž pravca reza, tako da mirni centar kuglice nije ono što seče.
- **Najveći nagib**: alat se nikad ne naginje dalje od ove vrednosti od ose postavke.

Gde bi držač dodirnuo model, nagib se vraća unazad dok ne bude slobodan, a operacija kaže u koliko tačaka se to desilo. Svaki prolaz se ulazi i napušta pravim podizanjem.

## Rotaciona završna obrada (4. osa)

{{ui:Rotaciono}} je za deo držan duž **radne X** na rotacionoj osi. Deo se okreće, a kuglasta glodalica, uvek usmerena ka osi, prati njegovu površ:

- **Prolazi**: {{ui:Duž ose}} (linije duž X, jedan korak prelaza okretanja razmaknute) ili {{ui:Oko dela}} (prstenovi, jedan korak prelaza X razmaknut).
- **Osa na Y / Z**: gde je osa. Prazno znači sredina sirovca. Na mašini sa stolom bez TCP ovo mora biti rotacioni centar u Postavci; operacija upozorava kada nije.
- **Od / do X** i **od / do ugla**: deo dužine i okretanja koji se seče.

Visina kuglice iznad ose u svakoj tački je tačan pad sfere na mrežu dela, sa te strane.

## Ograničenja

- Završna obrada na 5 osa i rotaciona uzimaju samo **kuglastu glodalicu**. Nema bočnog sečenja (strana alata na pravom zidu), nema tokova duž sopstvenih pravaca površi, nema višeosnog grubog obrađivanja i nema automatskog izbora nagiba da se izbegne sudar.
- Putanje na 5 osa i rotacione se **ne prolaze kroz simulaciju sirovca**, koja je mapa visina i ne može da zadrži nagnut rez.
- Držač se u završnoj obradi na 5 osa proverava u odnosu na model gledan odozgo; vreteno i sama mašina se nigde ne proveravaju.
- Rotaciona završna obrada seče samo ono što alat može da vidi gledajući ka osi.
- Završna obrada na 5 osa traje minut ili duže da se izračuna na velikom delu: držač se proverava u svakoj tački svakog prolaza.
- Kada se rotacione ose kreću zajedno sa linearnim, a TCP je isključen, ugrađeni postprocesori pišu posmak kao inverzno vreme (`G93`), pa se vraćaju na `G94`.
- Nije napisan kod nagnute radne ravni (`G68.2` i slični), a nisu poznata ograničenja specifična za mašinu, odmotavanje ili zone sudara.
