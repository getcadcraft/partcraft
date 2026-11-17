---
title: 3D apdare: paralēlā un skalopa
summary: Apdariet visu modeļa izliekto virsmu ar lodveida, apaļstūra vai plakanu frēzi paralēlās līnijās jebkurā leņķī vai gājienos iestatītā attālumā, lai izcilņi starp tiem saglabātu prasīto augstumu. Ko ceļi garantē un ko ne.
keywords: 3d apdare, apdare, paralēlā, rastra, skalopa, nemainīga skalopa, kusps, lodveida frēze, apaļstūra frēze, virsma, pielaide, solis, nogāze, atstājamais materiāls, nolaižamais griezējs, bojājums
from: e1587d0a
---

Divas operācijas Manufacture darbvietā griež **visas modeļa virsmu** ar instrumentu, kas turēts vertikāli (trīs asis). Tām nav atlases; tās strādā ar visu modeli, kas redzams no augšas. Vispirms apstrādājiet detaļu ar rupjo apstrādi (adaptīvo vai dobumu); apdares gājiens pāri neapstrādātam materiālam brīdina, ka tas griezīs dziļi.

## Paralēlā

Taisnas līnijas pāri modelim leņķī, ko iestatāt, **solis** atstatu (daļa no frēzes diametra). Katra līnija seko virsmai: frēzes uzgalis ir tik augstu, cik jābūt, lai nekāda frēzes daļa nenokļūtu zem modeļa, un līnija tiek griezta smalkāk, kur virsma lūst. Ar ieslēgtu **Zig-zag** instruments paliek lejā starp līnijām, kur to var droši izdarīt (pārbaudīts gar kustību); citādi tas paceļas.

- **Pielaide**: cik tālu taisns līnijas gabals drīkst atrasties no patiesā uzgaļa augstuma (puse no tās tiek izmantota kā robeža katra gabala vidū). Noklusējums 0.01 mm.
- **Apdarināt tikai, kur virsma ir vismaz … un ne vairāk kā … (°)**: apdarināt tikai seklas vai tikai stāvas vietas. Kur virsma ir ārpus diapazona, līnija tiek izlaista un instruments paceļas.
- **Atstājamais materiāls**: modelis nobīdīts par šo attālumu (frēze palielināta par to: precīzi lodveida un apaļstūra instrumentiem; plakans instruments atstāj vismaz tik daudz).
- **Apakša**: nekas netiek griezts zem šī z.

## Skalopa

Gājieni, kas saglabā nemainīgu attālumu pa virsmu viens no otra, tā ka izcilnis (skalopa) starp diviem blakus gājieniem ir prasītais **augstums**. Attālums izriet no augstuma un lodes rādiusa: s = 2·√(2·R·h − h²), piemēram, apmēram 0.69 mm starp gājieniem Ø6 lodei un 0.02 mm izcilnim. Apaļstūra instruments izmanto savu stūra rādiusu. Plakana frēze tiek noraidīta: tai nav izcilņa, ko izmērīt.

Gājieni sākas **no modeļa malas, ejot iekšā**, vai **no tā augšas, ejot lejā**. Tie ir attāluma kontūras pa virsmu (nevis augstuma), tāpēc uz nogāzes tie ir tuvu plānā, bet uz līdzenas vietas tālu viens no otra. Attālums tiek mērīts pēc režģa uz virsmas un ir precīzs līdz aptuveni 1 %; izcilņa augstums ir precīzs, kur virsma ir plakana vai lēni izliekta, un aptuvens, kur tā strauji izliecas. **Climb** patur augstāko virsmas pusi frēzētāja labajā pusē.

## Cik labi ir ceļi

Testi pārbauda, izmantojot slēgtas formulas vai neatkarīgu meklēšanu pa frēzes pēdu:

- Uzgaļa augstums zem instrumenta ir precīzs lodveida, apaļstūra un plakana instrumenta virsmām, malām un stūriem tīklā, un nekad nav augstāks par patieso augstumu; paralēlajām līnijām ceļš paliek pielaides robežās, bez bojājuma dziļāka par to.
- Ceļu garumi uz slīpas plaknes sakrīt ar slēgto formulu; skalopas gājieni uz plaknes ir prasītajā attālumā, un starp tiem paliekošais izcilnis ir prasītajā augstumā.
- Materiāla simulācija pēc gājiena nerāda bojājumu un parāda palikušos izcilņus.

Ko šie ceļi nav: tie ir pamata apdares gājieni, nevis viss, ko piedāvā ražošanas sistēma.

- Nav izveidots: konstantas z kontūra (waterline), stūru un pildspalvas tīrīšana, radiālie un spirāles gājieni, līknes projicēšana uz virsmas, plakanu laukumu noteikšana, atlikuma apstrāde, turētāja un kāta sadursmju pārbaudes un jebkāda instrumenta sasvēršana.
- Instrumenta centrs paliek pāri modelim: ceļi apstājas pie modeļa malas, nevis aizietu pāri tai, tāpēc vertikāla siena tieši malā netiek apdarināta līdz pamatnei.
- Apakšgriezumi netiek redzēti (virsma ir tas, ko instruments sastop no augšas).
- Modelis ir tīkls no kodola, tāpēc ceļi seko tīklam (tā akordu pielaide ir aptuveni 0.0002 no detaļas diagonāles), nevis precīzai virsmai.
- Liela modeļa apdare ar smalku pielaidi rada garu programmu ar daudziem īsiem gājieniem. Pārbaudiet izvadi savā mašīnas simulatorā pirms griešanas.
