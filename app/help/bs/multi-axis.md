---
title: 4- i 5-osna obrada
summary: Recite PartCraftu koje rotacione ose mašina ima, nagnite alat za bilo koju običnu operaciju, završite površinu kuglastim glodalom koje se naginje dok reže, ili okrećite dio pod alatom na 4. osi. Šta se zapisuje u G-kod i šta nije dokazano.
keywords: 5 osa, pet osa, 4 ose, četvrta osa, višeosno, multiaxis, 3+2, indeksirano, pozicijski, nagib, nagnut alat, rotaciono, trunion, sto, glava, a osa, b osa, c osa, tcp, rtcp, centar vrha alata, g43.4, inverzno vrijeme, g93, kinematika, oslonac, swarf, ugao ulaza
from: c4f1c491
---

Izrada može držati alat pod uglom, i može pomjerati rotacione ose dok reže. Tri stvari to rade, od najjednostavnije do najsloženije.

**Ništa ovdje nije pokrenuto na mašini.** Putanje su provjerene naspram geometrije testovima, a G-kod je ponovo pročitan, ali ugrađeni postprocesori slijede dokumentovane kodove upravljačkih jedinica, ne neku mašinu pred nama. Dokažite program u simulatoru vaše upravljačke jedinice i u zraku prije nego što dođe do metala.

## Rotacione ose mašine

Na kartici **Podešavanje**, {{ui:Rotacione ose}} kaže šta mašina ima:

| Izbor | Mašina |
|---|---|
| Nema (3 ose) | Obična glodalica. Svaka operacija koja traži nagnut alat upozorava, a postprocesor je odbija zapisati. |
| A (okreće se oko X) | Jedna rotaciona osa duž X: stol za 4. osu ili indekser. Alat se može naginjati samo u ravni Y–Z. |
| B (okreće se oko Y) | Jedna rotaciona osa duž Y. Alat se može naginjati samo u ravni X–Z. |
| A i C | Osa naginjanja oko X nosi se, ili nosi, okretanje oko Z: stol s naginjanjem, ili glava. |
| B i C | Isto, s naginjanjem oko Y. |

Zatim:

- **Nosi se**: {{ui:Sto (dio se okreće)}} ili {{ui:Glava (alat se okreće)}}. Sto se okreće suprotnim smjerom da dovede istu površinu pod alat, pa predznak svakog ugla zavisi od ovoga.
- **Upravljačka jedinica drži vrh alata na putanji (TCP)**: uključeno, X Y Z u programu su vrh alata u sopstvenim koordinatama dijela, a upravljačka jedinica radi ostalo (ugrađeni postprocesori u stilu Fanuc i LinuxCNC zapisuju `G43.4` za dužinu alata). Isključeno, na mašini sa stolom, PartCraft zapisuje X Y Z kako okrenuti sto nosi dio, oko **rotacionog centra** koji zadate (u radnim koordinatama; 0, 0, 0 kad je radni početak u centru). Mašina s glavom mora imati TCP uključen: bez njega program bi trebao dužinu oslonca mašine, a PartCraft je ne zna.
- **Granica naginjanja**: koliko daleko ide osa naginjanja.

Mašine se razlikuju po tome koji smjer broje kao pozitivan. Ako osa na vašoj okreće u pogrešnom smjeru, promijenite predznak u kopiji postprocesora ([Postprocesori koje možete uređivati](topic:post-processors)).

## Nagnut alat za običnu operaciju

Svaka operacija glodanja (lice, džep, adaptivno, kontura, bušenje, skošenje, paralelno, scallop, 3D grubo, ostatak) ima **Nagib alata** i **Nagni prema**: smjer alata za tu operaciju, mjeren od osi alata podešavanja. Ovo je 3+2 obrada: rotacione ose idu na položaj i ostaju tamo dok tri ose režu.

- Unesite dva ugla, ili pritisnite {{ui:Alat okomito na površinu}} i kliknite ravnu površinu: alat će gledati pravo u nju.
- Odaberite površine i ivice operacije kao obično. Ono što se računa kao dno ili rupa određuje se duž nagnutog alata.
- Sirovac za taj smjer je kutija koja drži okrenuti sirovac, pa su visine i zazori sigurni s te strane.

U G-kodu, prije operacije alat se podiže, rotacione ose se okreću, a alat se spušta nad svoju prvu tačku. Na mašini sa stolom bez TCP, lukovi ostaju lukovi, a standardni ciklusi bušenja ostaju ciklusi (zapisani koordinatni sistem se samo okreće oko Z). S TCP u nagnutoj ravni, lukovi postaju kratke linije, a ciklusi pomake koje predstavljaju.

Simulacija sirovca izvodi nagnuti smjer **samostalno**: pokazuje šta ta operacija reže iz cijelog sirovca gledanog s njene strane i nalazi urezivanja tamo, ali se rezovi iz drugih smjerova ne prenose.

## Završna obrada 5-osna

{{ui:Više}} na alatnoj traci Izrade navodi ovu operaciju i sljedeću na vrhu kartice **Operacije**.

{{ui:5-osno}} je [paralelni prolaz završne obrade](topic:finish-3d) s **kuglastim glodalom koje se naginje dok ide**. Kuglica reže sferom, a sfera je ista koji god smjer alat zauzima oko svog centra, pa kuglica tačno prati putanju koju bi dao 3-osni prolaz i mijenja se samo smjer alata:

- **Prema površini**: 1 = okomito na površinu, 0 = uspravno, bilo šta između.
- **Naginji naprijed**: stepeni duž smjera rezanja, tako da nepomični centar kuglice nije ono što reže.
- **Najveći nagib**: alat se nikad ne naginje dalje od ovoga od ose podešavanja.

Gdje bi držač došao u dodir s modelom, nagib se vraća unazad dok ne bude slobodan, a operacija kaže na koliko tačaka. Svaki prolaz se ulazi i napušta ravnim podizanjem.

## Rotaciona završna obrada (4. osa)

{{ui:Rotaciono}} je za dio učvršćen duž **X radnog koordinatnog sistema** na rotacionoj osi. Dio se okreće, a kuglasto glodalo, uvijek usmjereno prema osi, prati njegovu površinu:

- **Prolazi**: {{ui:Duž ose}} (linije duž X, jedan korak okretanja jedna od druge) ili {{ui:Oko dijela}} (prstenovi, jedan korak X jedan od drugog).
- **Osa na Y / Z**: gdje je osa. Prazno znači sredinu sirovca. Na mašini sa stolom bez TCP ovo mora biti rotacioni centar u Podešavanju; operacija upozorava kad nije.
- **Od / do X** i **od / do ugla**: dio dužine i okretanja koji se reže.

Visina kuglice iznad ose u svakoj tački je tačan pad sfere na mreži dijela, s te strane.

## Ograničenja

- Završna obrada 5-osna i rotaciona prihvataju samo **kuglasto glodalo**. Nema rezanja oštrom ivicom (strana alata na pravom zidu), nema tokova duž sopstvenih smjerova površine, nema višeosnog grubog obrađivanja i nema automatskog izbora nagiba da se izbjegne sudar.
- Putanje 5-osne i rotacione **ne prolaze kroz simulaciju sirovca**, koja je mapa visina i ne može sadržavati nagnuti rez.
- Držač se provjerava u 5-osnoj završnoj obradi naspram modela gledanog odozgo; držač, vreteno i sama mašina se nigdje ne provjeravaju.
- Rotaciona završna obrada reže samo ono što alat vidi gledajući u osu.
- 5-osna završna obrada traje minut ili duže na velikom dijelu: držač se provjerava u svakoj tački svakog prolaza.
- Kad se rotacione ose kreću zajedno s linearnim, a TCP je isključen, ugrađeni postprocesori zapisuju posmak kao inverzno vrijeme (`G93`), zatim se vraćaju na `G94`.
- Nijedan kod nagnute radne ravni (`G68.2` i slični) se ne zapisuje, a nisu poznata nikakva ograničenja specifična za mašinu, odmotavanje ili zone sudara.
