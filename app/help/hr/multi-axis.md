---
title: 4- i 5-osna obrada
summary: Recite PartCraftu koje rotacijske osi stroj ima, nagnite alat za bilo koju običnu operaciju, završno obradite plohu kuglastim glodalom koje se naginje dok reže ili okrenite dio pod alatom na 4. osi. Što se zapisuje u G-kod i što nije dokazano.
keywords: 5 osi, pet osi, 4 osi, četvrta os, više osi, višeosno, 3+2, indeksirano, pozicijsko, nagib, nagnuti alat, rotacijsko, trunnion, stol, glava, A os, B os, C os, TCP, RTCP, središte vrha alata, G43.4, inverzno vrijeme, G93, kinematika, zakretište, swarf, kut zaostajanja
from: c4f1c491
---

Proizvodnja može držati alat pod kutom i može pomicati rotacijske osi tijekom rezanja. Tri stvari to rade, od najjednostavnije prema složenijima.

**Ništa ovdje nije pokrenuto na stroju.** Putanje provjeravaju testovi prema geometriji, a G-kod se čita natrag, ali ugrađeni postprocesori slijede dokumentirane kodove upravljača, a ne bilo koji stroj pred nama. Dokažite program u simulatoru vlastitog upravljača i u zraku prije nego što dotakne metal.

## Rotacijske osi stroja

Na kartici **Postavljanje**, {{ui:Rotacijske osi}} navodi što stroj ima:

| Izbor | Stroj |
|---|---|
| Nijedna (3 osi) | Obično glodalo. Svaka operacija koja treba nagnut alat upozorava, a postprocesor je odbija zapisati. |
| A (okreće se oko X) | Jedna rotacijska os duž X: stol ili indeksator 4. osi. Alat se može naginjati samo u ravnini Y–Z. |
| B (okreće se oko Y) | Jedna rotacijska os duž Y. Alat se može naginjati samo u ravnini X–Z. |
| A i C | Os naginjanja oko X koju nosi, ili koja nosi, okretanje oko Z: stol s zakretištima ili glava. |
| B i C | Isto s naginjanjem oko Y. |

Zatim:

- **Nosi ga**: {{ui:Stol (dio se okreće)}} ili {{ui:Glava (alat se okreće)}}. Stol se okreće suprotnim smjerom da istu plohu dovede pod alat, pa predznak svakog kuta slijedi iz ovoga.
- **Upravljač drži vrh alata na putanji (TCP)**: uključeno, X Y Z u programu su vrh alata u vlastitim koordinatama dijela, a upravljač obavlja ostalo (ugrađeni postprocesori u stilu Fanuc i LinuxCNC zapisuju `G43.4` za duljinu alata). Isključeno, na stroju sa stolom, PartCraft zapisuje X Y Z dok okrenuti stol nosi dio, oko **središta rotacije** koje zadate (u koordinatama obrade; 0, 0, 0 kad je ishodište obrade u središtu). Stroj s glavom treba uključen TCP: bez njega program bi trebao duljinu osi zakretanja stroja, koju PartCraft ne poznaje.
- **Granica nagiba**: koliko daleko ide os naginjanja.

Strojevi se razlikuju u tome koji smjer smatraju pozitivnim. Ako os na vašem stroju okreće u krivom smjeru, promijenite predznak u kopiji postprocesora ([Postprocesori koje možete uređivati](topic:post-processors)).

## Nagnut alat za običnu operaciju

Svaka operacija glodanja (ploha, džep, prilagodljivo, kontura, bušenje, skošenje, paralelno, zubasto (scallop), 3D grubo, dorada) ima **Nagib alata** i **Nagni prema**: smjer alata samo za tu operaciju, mjeren od osi alata postavljanja. Ovo je obrada 3+2: rotacijske osi odu u položaj i ostanu tamo dok tri osi režu.

- Upišite dva kuta ili pritisnite {{ui:Alat okomito na plohu}} i kliknite ravnu plohu: alat će gledati ravno u nju.
- Odaberite plohe i bridove operacije kao i obično. Što se smatra dnom ili rupom procjenjuje se duž nagnutog alata.
- Sirovac za taj smjer je kvadar koji drži okrenuti sirovac, pa su visine i razmaci sigurni s te strane.

U G-kodu, prije operacije alat se podiže, rotacijske osi se okreću, a alat se spušta nad svoju prvu točku. Na stroju sa stolom bez TCP-a lukovi ostaju lukovi, a gotovi ciklusi bušenja ostaju ciklusi (zapisani okvir se okreće samo oko Z). S TCP-om u nagnutoj ravnini lukovi postaju kratke linije, a ciklusi pomaci koje predstavljaju.

Simulacija sirovca pokreće nagnuti smjer **zasebno**: prikazuje što ta operacija reže iz cijelog sirovca gledanog s njezine strane i tamo pronalazi zareze, ali se rezovi načinjeni iz drugih smjerova ne prenose.

## 5-osna završna obrada

{{ui:Više}} na alatnoj traci Proizvodnje navodi ovu operaciju i sljedeću na vrhu kartice **Operacije**.

{{ui:5-osno}} je [prolaz paralelne završne obrade](topic:finish-3d) s **kuglastim glodalom koje se naginje dok ide**. Kuglica reže sferom, a sfera je ista kako god se alat naginje oko svog središta, pa kuglica točno slijedi putanju koju bi dao prolaz u 3 osi i mijenja se samo smjer alata:

- **Prema plohi**: 1 = okomito na plohu, 0 = uspravno, bilo što između.
- **Nagib naprijed**: stupnjevi duž smjera rezanja, tako da mirno središte kuglice nije ono što reže.
- **Najveći nagib**: alat se nikad ne naginje dalje od ovoga od osi postavljanja.

Gdje bi prihvat dotaknuo model, nagib se smanjuje dok ne bude slobodan, a operacija kaže na koliko točaka. Svaki prolaz ulazi i izlazi ravnim podizanjem.

## Rotacijska završna obrada (4. os)

{{ui:Rotacijsko}} je za dio koji je stegnut duž **radnog X** na rotacijskoj osi. Dio se okreće, a kuglasto glodalo, uvijek usmjereno prema osi, prati njegovu plohu:

- **Prolazi**: {{ui:Duž osi}} (linije duž X, na razmaku jednog koraka okretanja) ili {{ui:Oko dijela}} (prstenovi, na razmaku jednog koraka X).
- **Os na Y / Z**: gdje je os. Prazno znači sredinu sirovca. Na stroju sa stolom bez TCP-a ovo mora biti središte rotacije u Postavljanju; operacija upozorava kad nije.
- **Od / do X** i **Od / do kuta**: dio duljine i okreta koji se reže.

Visina kuglice iznad osi u svakoj točki je točan pad sfere na mrežu dijela, s te strane.

## Ograničenja

- 5-osna i rotacijska završna obrada uzimaju samo **kuglasto glodalo**. Nema rezanja bočnom stranom (strana alata na ravnoj stijenci), nema linija toka duž vlastitih smjerova plohe, nema višeosnog grubog obrađivanja i nema automatskog odabira nagiba radi izbjegavanja sudara.
- Putanje 5-osne i rotacijske obrade **ne prolaze kroz simulaciju sirovca**, koja je karta visina i ne može obuhvatiti nagnuti rez.
- Prihvat se u 5-osnoj završnoj obradi provjerava u odnosu na model gledan odozgo; držač, vreteno i sam stroj nigdje se ne provjeravaju.
- Rotacijska završna obrada reže samo ono što alat može vidjeti gledajući u os.
- 5-osna završna obrada treba minutu ili više da se izračuna na velikom dijelu: prihvat se provjerava u svakoj točki svakog prolaza.
- Kad se rotacijske osi pomiču s linearnima, a TCP je isključen, ugrađeni postprocesori zapisuju posmak kao inverzno vrijeme (`G93`), zatim se vraćaju na `G94`.
- Ne zapisuje se kod nagnute radne ravnine (`G68.2` i slično), a nisu poznata ograničenja specifična za stroj, odmotavanje ni zone sudara.
