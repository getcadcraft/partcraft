---
title: 3D apstrāde: paralēlā un scallop
summary: Apstrādājiet visu modeļa izliekto virsmu ar lodveida, ar noapaļotu stūri vai plakanu pirksta frēzi paralēlās līnijās jebkurā leņķī vai gājienos noteiktā attālumā, lai izcilņi starp tiem saglabātu jūsu norādīto augstumu. Ko garantē trajektorijas un ko ne.
keywords: 3D apstrāde, apstrāde, paralēls, rastrs, scallop, nemainīgs scallop, virsotne, lodveida frēze, frēze ar noapaļotu stūri, virsma, pieļaujamā novirze, soļa solis, nogāze, atstājamais materiāls, pilienu frēze, iegriešanās
from: 942d2341
---

Divas operācijas sadaļā Ražošana griež **visu modeļa virsmu**, turot instrumentu vertikāli (trīs asis). Tām nav nepieciešama atlase: tās apstrādā visu modeļa daļu, kas redzama no augšas. Vispirms rupji apstrādājiet detaļu (Adaptīvs vai Kabata); apdares gājiens pār nenogrieztu zagatavi brīdina, ka tas griezīs dziļi.

## Paralēls

Taisnas līnijas pāri modelim pie **leņķa**, ko iestatāt, ar **soļa soli** starp tām (daļa no instrumenta diametra). Katra līnija seko virsmai: instrumenta gals atrodas tik augstu, cik nepieciešams, lai neviena frēzes daļa nenonāktu zem modeļa, un līnija tiek griezta smalkāk, kur virsma liecas. Ar ieslēgtu **Zigzags** instruments starp līnijām paliek lejā tur, kur to var droši izdarīt (pārbaudīts pa kustības ceļu); citādi tas paceļas.

- **Pieļaujamā novirze**: cik tālu taisns līnijas gabals drīkst atrasties no patiesā instrumenta gala augstuma (šīs vērtības puse tiek izmantota kā robeža katra gabala vidū). Noklusējums 0,01 mm.
- **Tikai tur, kur virsma ir vismaz … un ne vairāk kā … (°)**: apstrādāt tikai lēzenas vai tikai stāvas vietas. Kur virsma atrodas ārpus diapazona, līnija tiek izlaista un instruments paceļas.
- **Atstājamais materiāls**: modelis nobīdīts par šo attālumu (frēze palielināta par to: precīzi lodveida un ar noapaļotu stūri frēzēm; plakanā frēze atstāj vismaz tik daudz).
- **Apakša**: zemāk par šo z nekas netiek griezts.

## Scallop

Gājieni, kas virsmā saglabā savstarpēji nemainīgu attālumu, tāpēc izcilnis (scallop) starp diviem blakus gājieniem iegūst jūsu norādīto **augstumu**. Attālums izriet no augstuma un lodes rādiusa: s = 2·√(2·R·h − h²); piemēram, apmēram 0,69 mm starp gājieniem Ø6 lodei un 0,02 mm izcilnim. Frēze ar noapaļotu stūri izmanto sava stūra rādiusu. Plakanā pirksta frēze netiek pieņemta: tai nav izcilņa, ko izmērīt.

Gājieni sākas **no modeļa malas, virzoties iekšā**, vai **no tā augšas, virzoties lejup**. Tie ir līnijas ar vienādu attālumu pa virsmu (nevis ar vienādu augstumu), tāpēc nogāzē tie plānā ir tuvu viens otram, bet uz plakanas virsmas – tālu viens no otra. Attālums mērīts režģī pa virsmu, un tā precizitāte ir ap 1 %; izcilņa augstums ir precīzs tur, kur virsma ir plakana vai lēzeni izliekta, un aptuvens tur, kur tā strauji liecas. **Climb** nodrošina, ka virsmas augstākā puse atrodas frēzes labajā pusē.

## Cik labas ir trajektorijas

Testi pārbauda, izmantojot slēgtās formulas vai neatkarīgu frēzes pēdas pilnu pārmeklēšanu:

- Instrumenta gala augstums zem frēzes ir precīzs lodveida, ar noapaļotu stūri un plakanai frēzei uz sejām, malām un stūriem tīklā un nekad nav augstāks par patieso augstumu; paralēlām līnijām trajektorija paliek šīs pieļaujamās novirzes robežās, bez iegriešanās dziļāk par to.
- Trajektoriju garumi slīpā plaknē atbilst slēgtajai formulai; Scallop gājieni uz plaknes atrodas pieprasītajā attālumā, un izcilnis starp tiem iegūst pieprasīto augstumu.
- Zagataves simulācija pēc gājiena nerāda iegriešanos un parāda atlikušos izcilņus.

Šīs trajektorijas nav: tās ir pamata apdares gājieni, nevis viss, ko piedāvā ražošanas sistēma.

- Nav izveidots: ūdenslīnijas (nemainīga z) apdare, zīmuļa un stūru tīrīšana, radiālie un spirālveida gājieni, līknes projicēšana uz virsmas, plakano laukumu noteikšana, turētāja un kāta sadursmju pārbaude. Rupjā apstrāde un atlikuma apstrāde ir atsevišķas operācijas ([3D rupjā apstrāde un atlikuma apstrāde](topic:rough-3d)); instruments, kas noliecas, ir [5 asu apdare](topic:multi-axis#5-axis-finishing).
- Instrumenta centrs paliek virs modeļa: trajektorijas apstājas pie modeļa malas, nevis aiziet pāri tai, tāpēc vertikāla siena tieši pie malas netiek apdarināta līdz pat pamatnei.
- Paslēptie izgriezumi nav saskatāmi (virsma ir tas, ko instruments sastop no augšas).
- Modelis ir tīkls no kodola, tāpēc trajektorijas seko tīklam (tā hordas pieļaujamā novirze ir ap 0,0002 no detaļas diagonāles), nevis precīzai virsmai.
- Liela modeļa apdare ar smalku pieļaujamo novirzi rada garu programmu ar daudzām īsām kustībām. Pirms griešanas pārbaudiet rezultātu sava iekārtas simulatorā.
