---
title: Instrumentu ceļu un G-koda veidošana (Manufacture)
summary: Iestatiet izejmateriālu un darba sākumpunktu, izvēlieties instrumentus, pievienojiet virsmas, dobuma, kontūras, urbšanas un nošķelšanas operācijas, atlasot virsmas, pabeidziet visu modeli 3D (paralēli, scallop), simulējiet izejmateriālu pret modeli bojājumiem un cikla laikam un lejupielādējiet G-kodu no vienas no trim iebūvētajām postprocesora vadībām vai no tādas, ko rediģējat paši.
keywords: precīzs STEP, STEP darbnīcai, darba koordinātes, CAM nodošana, paralēli, scallop, 3D apdare, apdare, lodveida frēze, instrumentu bibliotēka, rediģēt postprocesoru, pielāgots postprocesors, postprocesora redaktors, adaptīvs, adaptīvā tīrīšana, pastāvīgs iesaistījums, trohoidāls, hsm, ātrgaitas apstrāde, manufacture, CAM, instrumentu ceļš, G-kods, NC, CNC, freze, frezēšana, dobums, kontūra, profils, virsmas nolīdzināšana, urbums, peck, G83, G81, G73, nošķelšana, izejmateriāls, darba nobīde, G54, postprocesors, GRBL, LinuxCNC, padeves un ātrumi, simulācija, bojājums, cikla laiks
from: beeb29aa
---

Manufacture darbvieta pārvērš detaļu instrumentu ceļos 3 asu frēzmašīnai un raksta tos kā G-kodu. Lielākā daļa operāciju ir **2.5 asis**: instruments paliek vertikāls, sienas griež taisni uz leju un grīdas plakanas. {{ui:Parallel}} un {{ui:Scallop}} apdarina izliektas virsmas 3D (skat. [3D apdare](topic:finish-3d)); instruments joprojām paliek vertikāls (trīs asis, bez sašķiebšanas). Tas strādā ar nosauktajām virsmām, ko sieta kodols dod detaļai (skat. [Sieta kodols](topic:solid-kernels)).

Laboratorijas versija: pārbaudiet katru programmu savas vadības simulatorā un vispirms palaidiet to gaisā virs izejmateriāla.

## Iestatīšana

1. Darbvietu pārslēgā izvēlieties **Manufacture**, tad {{ui:New setup}}.
2. Cilnē **Setup** izvēlieties:
   - **Instrumenta ass (+Z)**: kurā virzienā instruments norāda detaļā. Pasaules +Y (PartCraft augšup) ir noklusējums; tad mašīnas X ir pasaules X un mašīnas Y ir pasaules −Z.
   - **Darba sākumpunkts (G54)**: izejmateriāla stūris vai centrs, augša vai apakša, modeļa augšējais centrs vai modeļa sākumpunkts.
   - **Izejmateriāls**: kaste vai cilindrs, vai nu modelis plus nobīdes (sāni, augša, apakša), vai fiksēts izmērs.
   - **Materiāls** (iestata sākuma padeves un ātrumus), **postprocesors** (vadība), mašīnas maksimālais vārpstas ātrums, ātrgaitas ātrums un instrumenta maiņas laiks, dzesēšana un programmas numurs.

## Instrumenti

Cilnē **Tools** ir bibliotēka: plakanas, lodveida un buļļa deguna galvas frēzes, urbji, nošķelšanas frēzes un virsmas frēzes, katrai T numurs, diametrs, rievas un rievas garums (kā arī stūra rādiuss, punkta vai nošķelšanas leņķis, kur tie attiecas).

Mani instrumenti var tikt saglabāti pārlūkprogrammā un pārvietoti starp datoriem kā fails: skat. [Instrumentu bibliotēka](topic:tool-library).

Vārpstas ātrums un padeve nāk no materiāla: n = 1000 × griešanas ātrums / (π × diametrs), padeve = n × rievas × skaidas slodze (urbjiem: n × padeve uz apgriezienu). Skaitļi ir konservatīvas sākuma vērtības no publicētiem diapazoniem, nav noregulēti jūsu mašīnai; ierakstiet sava instrumenta ražotāja griešanas ātrumu, skaidas slodzi, apgriezienus vai padevi, lai tos aizstātu. Kad ātrums pārsniedz mašīnas maksimumu, tas tiek turēts tur un padeve seko, saglabājot skaidas slodzi.

## Operāciju pievienošana

Katra rīkjoslas poga pievieno operāciju un, ja tai vajag ģeometriju, sāk atlasi: noklikšķiniet uz virsmām vai malām skatā (vēlreiz noklikšķiniet, lai vienu noņemtu), tad {{ui:Done picking}} vai {{key:Esc}}.

| Operācija | Atlase | Ko tā dara |
|---|---|---|
| {{ui:Face}} | nekas | Zigzaga gājieni pāri visam izejmateriālam, aiz tā malām, lejup līdz modeļa augšai |
| {{ui:Pocket}} | plakana grīdas virsma, apaļš caurums vai slēgta malu ķēde | Notīra apgabalu nobīdes gājienos no iekšpuses uz āru, katrā dziļuma solī; salas (virsmas, kas paceļas grīdas iekšienē) paliek; grīda, kas atvērta visapkārt (nekas augstāks ārpusē), tiek notīrīta līdz izejmateriāla malai |
| {{ui:Adaptive}} | tas pats, kas Pocket | Notīra to pašu apgabalu gājienos, kur katrs griež noteiktu platumu (**Iesaistījums**, diametra daļa), tā ka griezējs nekad neņem pilnu platuma rievu, pat stūros; ieiet ar spirāli un apdarina sienas katrā līmenī. Šauri griezumi ļauj dziļāku soli un lielāku padevi |
| {{ui:Contour}} | plakana virsma (tās kontūra), apaļa virsma vai malas | Seko kontūrai, nobīdītai par instrumenta rādiusu, ārpusē vai iekšpusē, ar ieejas un izejas lokiem un izvēles cilnēm |
| {{ui:Drill}} | caurumi (noklikšķiniet uz cauruma sienas vai malas) | Urbj katru caurumu ar gatavu ciklu: peck (G83), urbšana (G81) vai skaidas lūšana (G73); vai norādiet diametru, lai urbtu katru tāda izmēra caurumu |
| {{ui:Chamfer}} | virsmas kontūra vai malas | Vada nošķelšanas frēzi pa malu, lai tā nogriež jūsu iestatīto platumu |
| {{ui:Parallel}} | nekas (viss modelis) | 3D apdare paralēlās līnijās jebkurā leņķī, sekojot virsmai ar lodveida, buļļa deguna vai plakanu galu frēzi. Skat. [3D apdare](topic:finish-3d) |
| {{ui:Scallop}} | nekas (viss modelis) | 3D apdare gājienos, kas atrodas noteiktā attālumā viens no otra pāri virsmai, tā ka starp tiem esošajam kalniņam ir jūsu prasītais augstums |

Izvēlieties operāciju sarakstā, lai mainītu tās instrumentu, augstumus (drošības, atvilkšanas, padeves augstums, augša, apakša), dziļuma soli, soļa platumu, atstājamo izejmateriālu, apdares gājienu, ieeju (spirāle, rampa vai iegremdēšana), frēzēšanu pret virzienu, cilnes vai ciklu. {{ui:Up}} un {{ui:Down}} maina secību, {{ui:Suppress}} to izlaiž, {{ui:Delete}} to noņem. Viss ir atsaukšanas vēsturē un saglabāts detaļas failā.

Dobuma soļa platums ir ne vairāk kā puse no instrumenta diametra, tāpēc katrs tās grīdas punkts atrodas vienas instrumenta rādiusa attālumā no gājiena. Iekšējie stūri saglabā instrumenta rādiusu.

**Adaptīvā tīrīšana** uztur griezēja iesaistījumu tuvu vienai vērtībai. Iesaistījums 0.15 no diametra ir iesaistes leņķis apmēram 46°: griezēja malas loks materiālā. Nobīdes dobums turpretī pirmajā gājienā griež pilnu platumu un katrā iekšējā stūrī aptver vairāk. Starp gājieniem instruments paliek lejā, kur tas virzās pa jau nogrieztu gaisu, un paceļas un nolaižas citur nogrieztā gaisā. Gājieni tiek aprēķināti smalkā režģī pāri apgabalam (šūnas ap vienu divpadsmito daļu no instrumenta rādiusa), tāpēc iesaistījums var būt līdz vienai šūnai platāks par iestatīto; sienas tiek apdarinātas precīzi. Liels atvērts apgabals rada garu programmu ar daudzām īsām kustībām.

## Simulācija

Instrumentu ceļi tiek veidoti no jauna pēc katras izmaiņas (arī detaļas). {{ui:Simulate}} arī parāda izejmateriālu, kas paliek pēc visas programmas. Panelī redzams:

- **Cikla laiks**: padeves kustības ar savu padevi, ātrgaitas kā taisnas līnijas ar iestatījuma ātrgaitas ātrumu, plus instrumenta maiņas laiks. Reālas mašīnas paātrinās, tāpēc prasa ilgāk.
- **Bojājumi**: vietas, kur instruments gāja vairāk nekā par 0.02 mm zem detaļas virsmas. Sarkanas atzīmes tās parāda skatā.
- **Atlikušais izejmateriāls uz detaļas**.

Izejmateriāls ir augstuma karte augšai (Z-karte), tāpēc tas nevar parādīt slēptas vietas. Velciet **Playback**, lai pārvietotu instrumentu pa programmu. Skatā padeves kustības ir cietas, bet ātrgaitas ir svītrotas, ar vienu krāsu katrai operācijai.

Ar ieslēgtu **Rādīt simulēto izejmateriālu** izejmateriāls tiek krāsots pret modeli šūnu pēc šūnas: **zaļš**, kur tas atrodas uz modeļa (0.02 mm robežās), **sarkans**, kur instruments iegriezās modelī, un tur, kur uz modeļa palicis izejmateriāls, **dzeltens** plānai kārtiņai, **oranžs** vairāk, izbalējot līdz **pelēkajam** nenogrieztajam izejmateriālam pie 1 mm vai vairāk. Krāsas tiek veidotas no jauna ar katru izmaiņu, no tās pašas augstuma kartes, no kuras nāk skaitļi panelī, tāpēc zaļā un sarkanā sakrīt ar rindu Bojājumi. Nošķelšana tīšām iegriežas modelī un ap malu rāda sarkanu.

## Programmas G-koda izvade

Izvēlieties vadību zem **Post** un nospiediet {{ui:Download G-code}} (vai {{ui:Post}} rīkjoslā):

| Vadība | Fails | Piezīmes |
|---|---|---|
| Fanuc stila ISO | .nc | %, O numurs, rindu numuri, T M6 ar G43 H, gatavie cikli |
| GRBL | .nc | Nav instrumentu maiņas vai gatavu ciklu: instrumenta maiņa pauzē ar M0, urbšana tiek rakstīta kā vienkārši gājieni |
| LinuxCNC | .ngc | T M6 ar G43 H, gatavie cikli, M2 |
| Jūsu pašu | jebkurš | Postprocesors, ko esat uzrakstījis vai mainījis: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Katrs fails sākas ar komentāriem par programmu, izejmateriālu, darba nobīdi un instrumentiem. Koordinātes ir milimetros ar 3 decimālzīmēm. {{ui:Toolpath CSV}} un {{ui:Toolpath JSON}} eksportē pašas kustības.

**Pārbaudiet izvadi savas mašīnas simulatorā pirms griešanas un vispirms palaidiet to gaisā virs izejmateriāla.** Trīs iebūvētie postprocesori ir sākumpunkti, kas seko vadību dokumentētajai uzvedībai; tie nav pārbaudīti nevienā konkrētā mašīnā. Postprocesors, ko maināt, ir jūsu pašu jāpierāda. Kā to uzrakstīt: [Postprocesori](topic:post-processors).

## Precīzs STEP darbnīcai

Zem G-koda pogām cilnē **Operācijas** {{ui:Exact STEP (work coordinates)}} lejupielādē `<part>-work.step`: detaļu kā precīzu cietu ķermeni (īsti cilindri caurumiem un izcilnēm, īsti riņķi to malām) ar sākumpunktu šī iestatījuma darba sākumpunktā un Z pa instrumenta asi. Tās ir koordinātes, ko izmanto G-kods, tāpēc darbnīcas pašas CAM programma vai pārbaudītājs saliek modeli ar programmu, to nepārvietojot. Fails satur tikai detaļu, ne izejmateriālu vai instrumentu ceļus.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} raksta to pašu cieto ķermeni detaļas pašreizējā pozīcijā (Z uz augšu): skat. [Eksportēt drukāšanai, STEP un DXF](topic:export-files#for-other-cad-programs-step).

## Ierobežojumi

- Dobumi, kontūras, urbšana un nošķelšana ir 2.5 asis. Izliektas virsmas var apdarināt 3D ([paralēli un scallop](topic:finish-3d)), bet ne rupji 3D (konuss paliek kā pakāpieni, līdz to apdarina), un nav atlikušās apstrādes. Adaptīvā tīrīšana ir 2D (plakanas grīdas).
- Tikai trīs asis: nav sašķiebšanas, nav virpošanas, nav pārbaudes.
- Turētāji un kāti netiek pārbaudīti sadursmēm; parādās brīdinājums, kad griezums ir dziļāks par rievas garumu.
- Padeves un ātrumi ir sākuma vērtības. Postprocesors ir rediģējams teksts, bet tas nosaka tikai to, kā kustības tiek ierakstītas; tas nevar mainīt instrumentu ceļu, pievienot asis vai zināt jūsu mašīnu ([Postprocesori](topic:post-processors) uzskaita, ko tas nevar).

## Programmas nosūtīšana mašīnai

CadCraft Studio darbvirsmā, ar mašīnu, iestatītu Studio, **Nosūtīt mašīnai…** parādās blakus **Lejupielādēt G-kodu** un augšupielādē to pašu programmu mašīnai jūsu tīklā. To nekad nesāk no PartCraft: palaidiet to pie mašīnas, kad tas ir skaidrs. Pārlūkprogrammā poga netiek rādīta (tīmekļa lapa nevar sasniegt mašīnu jūsu tīklā): lejupielādējiet programmu.
