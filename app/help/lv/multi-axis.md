---
title: 4 un 5 asu apstrāde
summary: Pastāstiet PartCraft, kādas rotācijas asis ir iekārtai, noliecat instrumentu jebkurai parastai operācijai, apdariniet virsmu ar lodveida pirksta frēzi, kas griežot noliecas, vai pagrieziet detaļu zem instrumenta 4. asī. Kas tiek rakstīts G-kodā un kas nav pārbaudīts.
keywords: 5 asis, piecas asis, 4 asis, ceturtā ass, vairāku asu, multiaxis, 3+2, indeksēts, pozicionāls, sasvēršana, noliekts instruments, rotācija, trunnion, galds, galva, A ass, B ass, C ass, TCP, RTCP, instrumenta centrālais punkts, G43.4, apgrieztais laiks, G93, kinemātika, centrs, swarf, pacelšanas leņķis
from: c4f1c491
---

Ražošana var turēt instrumentu leņķī, un tā var pārvietot rotācijas asis, griežot. Trīs lietas to dara, no vienkāršākās uz sarežģītāko.

**Nekas šeit nav izmēģināts uz iekārtas.** Trajektorijas ir pārbaudītas pret ģeometriju ar testiem, un G-kods ir nolasīts atpakaļ, bet iebūvētie postprocesori seko vadību dokumentētajiem kodiem, nevis kādai iekārtai mūsu priekšā. Pārbaudiet programmu sava vadības simulatorā un gaisā, pirms tā nonāk pie metāla.

## Iekārtas rotācijas asis

Cilnē **Iestatīšana** {{ui:Rotācijas asis}} norāda, kas iekārtai ir:

| Izvēle | Iekārta |
|---|---|
| Nav (3 asis) | Vienkārša frēze. Jebkura operācija, kam vajadzīgs noliekts instruments, brīdina, un postprocesors to neraksta. |
| A (griežas ap X) | Viena rotācijas ass gar X: 4. ass galds vai indekss. Instruments var noliekties tikai Y–Z plaknē. |
| B (griežas ap Y) | Viena rotācijas ass gar Y. Instruments var noliekties tikai X–Z plaknē. |
| A un C | Sasvēršanas ass ap X, ko nes vai kas nes pagriezienu ap Z: trunnion galds vai galva. |
| B un C | Tas pats ar sasvēršanu ap Y. |

Tad:

- **Nes**: {{ui:Galds (detaļa griežas)}} vai {{ui:Galva (instruments griežas)}}. Galds griežas pretējā virzienā, lai to pašu virsmu novietotu zem instrumenta, tāpēc katra leņķa zīme izriet no šīs izvēles.
- **Vadība notur instrumenta galu uz trajektorijas (TCP)**: ieslēgts, X Y Z programmā ir instrumenta gals detaļas paša koordinātēs, un vadība dara pārējo (iebūvētie Fanuc tipa un LinuxCNC postprocesori raksta `G43.4` instrumenta garumam). Izslēgts, uz galda iekārtas PartCraft raksta X Y Z, kā pagriezts galds nes detaļu, ap **rotācijas centru**, ko norādāt (darba koordinātēs; 0, 0, 0, kad darba sākumpunkts ir centrā). Galvas iekārtai vajag TCP ieslēgtu: bez tā programmai vajadzētu iekārtas pivota garumu, ko PartCraft nezina.
- **Sasvēršanas ierobežojums**: cik tālu iet sasvēršanas ass.

Iekārtas atšķiras ar to, kurā virzienā tās uzskata par pozitīvu. Ja ass jūsu iekārtā griežas nepareizi, mainiet zīmi postprocesora kopijā ([Rediģējami postprocesori](topic:post-processors)).

## Noliekts instruments parastai operācijai

Katrai frēzēšanas operācijai (virsma, kabata, adaptīvs, kontūra, urbšana, nošķelšana, paralēls, scallop, 3D rupjā, atlikums) ir **Instrumenta sasvēršana** un **Sasvēršana uz**: instrumenta virziens tieši šai operācijai, mērīts no iestatījuma instrumenta ass. Tā ir 3+2 apstrāde: rotācijas asis dodas uz pozīciju un paliek tur, kamēr trīs asis griež.

- Ierakstiet divus leņķus vai nospiediet {{ui:Instruments perpendikulāri virsmai}} un noklikšķiniet uz plakanas virsmas: instruments vērsīsies tieši uz to.
- Atlasiet operācijas virsmas un malas kā parasti. To, kas ir grīda vai caurums, nosaka pa noliekto instrumentu.
- Zagatave šim virzienam ir kaste, kas ietver pagriezto materiālu, tāpēc augstumi un drošības attālumi ir droši no šā virziena.

G-kodā pirms operācijas instruments paceļas, rotācijas asis pagriežas, un instruments nolaižas pāri savam pirmajam punktam. Galda iekārtā bez TCP lokveida kustības paliek loki un gatavie urbšanas cikli paliek cikli (rakstītais rāmis ir pagriezts tikai ap Z). Ar TCP noliektā plaknē loki kļūst par īsām līnijām, un cikli – par kustībām, ko tie apzīmē.

Zagataves simulācija palaiž noliektu virzienu **atsevišķi**: tā parāda, ko šī operācija nogriež no visas zagataves, redzētas no tās puses, un atrod tur iegriešanos, bet griezumi, kas izdarīti no citiem virzieniem, netiek pārnesti.

## 5 asu apdare

{{ui:Vairāk}} Ražošanas rīkjoslā uzskaita šo operāciju un nākamo **Operācijas** cilnes augšā.

{{ui:5 asis}} ir [paralēlā apdares gājiena](topic:finish-3d) variants ar **lodveida pirksta frēzi, kas noliecas, kamēr iet**. Lode griež ar sfēru, un sfēra ir tāda pati, lai kā instruments noliektos ap savu centru, tāpēc lode seko tieši tādam ceļam, kādu dotu 3 asu gājiens, un mainās tikai instrumenta virziens:

- **Uz virsmu**: 1 = perpendikulāri virsmai, 0 = vertikāli, jebkas pa vidu.
- **Noliekties uz priekšu**: grādi pa griešanas virzienu, lai ne jau lodes stacionārais centrs veic griešanu.
- **Maksimālais sasvēršanās**: instruments nekad nenoliecas tālāk par šo no iestatījuma ass.

Kur kāts varētu skart modeli, pacelšanās tiek atgriezta, līdz tā atbrīvojas, un operācija norāda, cik punktos tas notika. Katrs gājiens tiek ieiets un atstāts ar taisnu pacelšanos.

## Rotācijas apdare (4. ass)

{{ui:Rotācija}} ir paredzēta detaļai, kas turēta gar **darba X** uz rotācijas ass. Detaļa griežas, un lodveida pirksta frēze, vienmēr vērsta pret asi, seko tās virsmai:

- **Gājieni**: {{ui:Pa asi}} (līnijas gar X, viens soļa solis griezienā) vai {{ui:Ap detaļu}} (gredzeni, viens soļa solis pa X).
- **Ass pie Y / Z**: kur ass atrodas. Tukšs nozīmē zagataves vidu. Galda iekārtā bez TCP tam jābūt rotācijas centram iestatījumā; operācija brīdina, ja nav.
- **No / Līdz X** un **No / Līdz leņķim**: detaļas garuma un grieziena daļa, ko griezt.

Lodes augstums virs ass katrā punktā ir precīzs sfēras nolaišanās uz detaļas tīkla no šīs puses.

## Ierobežojumi

- 5 asu un rotācijas apdarei izmanto tikai **lodveida pirksta frēzi**. Nav swarf griešanas (instrumenta sāns uz taisnas sienas), nav plūsmas līniju pa paša virsmas virzieniem, nav vairāku asu rupjās apstrādes un nav automātiskas sasvēršanas izvēles, lai izvairītos no sadursmes.
- 5 asu un rotācijas trajektorijas **netiek palaistas caur zagataves simulāciju**, kas ir augstuma karte un nevar saturēt sasvērtu griezumu.
- Kāts 5 asu apdarē tiek pārbaudīts pret modeli, skatītu no augšas; turētājs, vārpsta un pati iekārta nekur netiek pārbaudīti.
- Rotācijas apdare griež tikai to, ko instruments var redzēt, skatoties uz asi.
- 5 asu apdarei lielā detaļā vajag minūti vai ilgāk: kāts tiek pārbaudīts katrā katra gājiena punktā.
- Kad rotācijas asis kustas kopā ar lineārajām un TCP ir izslēgts, iebūvētie postprocesori raksta padevi kā apgriezto laiku (`G93`), tad atgriežas pie `G94`.
- Slīpās darba plaknes kods (`G68.2` un tamlīdzīgi) netiek rakstīts, un nav zināmi iekārtai specifiski ierobežojumi, atritināšana vai sadursmju zonas.
