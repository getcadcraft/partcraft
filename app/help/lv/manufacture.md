---
title: Instrumentu trajektoriju un G-koda veidošana (Ražošana)
summary: Iestatiet zagatavi un darba sākumpunktu, izvēlieties instrumentus, pievienojiet virsmu, kabatas, kontūras, urbšanas un nošķelšanas operācijas, atlasot virsmas, apdariniet visu modeli 3D (paralēls, scallop), simulējiet zagatavi pret modeli bojājumiem un cikla laikam un lejupielādējiet G-kodu no viena no trim iebūvētajiem postprocesoriem vai no tāda, ko rediģējat paši.
keywords: precīzs STEP, STEP darbnīcai, darba koordinātes, CAM nodošana, paralēls, scallop, 3D apdare, apdare, lodveida frēze, instrumentu bibliotēka, rediģēt postprocesoru, pielāgots postprocesors, postprocesora redaktors, adaptīvs, adaptīvā notīrīšana, nemainīga iesaistīšana, trohoidāls, hsm, ātrā frēzēšana, ražošana, CAM, instrumenta trajektorija, G-kods, NC, CNC, frēze, frēzēšana, kabata, kontūra, profils, virsmas frēzēšana, urbšana, peck, G83, G81, G73, nošķelšana, zagatave, darba nobīde, G54, postprocesors, GRBL, LinuxCNC, padeves un ātrumi, simulācija, iegriešanās, cikla laiks
from: f8a03be8
---

Darba vide Ražošana pārvērš detaļu instrumentu trajektorijās un raksta tās kā G-kodu. Lielākā daļa operāciju ir **2,5 asu** frēzēšana: instruments paliek vertikāli, sienas tiek griezts taisni uz leju, grīdas – plakanas. **3D rupjā** un **Atlikums** notīra izliektas detaļas 3D ([3D rupjā apstrāde un atlikuma apstrāde](topic:rough-3d)); **Paralēls** un **Scallop** tās apdarina ([3D apstrāde](topic:finish-3d)). Iekārtā ar rotācijas asīm jebkurai operācijai var būt noliekts instruments, un divas operācijas griešanas laikā pārvieto rotācijas asis ([4 un 5 asu apstrāde](topic:multi-axis)). Virpai ir operācijas ([Virpošana](topic:turning)), un zondei – operācijas ([Zondēšana](topic:probing)). Tā darbojas ar nosauktām virsmām, ko tīkla kodols iegūst no detaļas (skatiet [Tīkla kodols](topic:solid-kernels)).

Laboratorijas versija: pārbaudiet katru programmu sava vadības ierīces simulatorā un vispirms palaidiet to gaisā virs zagataves.

## Iestatīšana

1. Izvēlieties **Ražošana** darba vides pārslēgā, pēc tam {{ui:New setup}}.
2. Cilnē **Iestatīšana** izvēlieties:
   - **Instrumenta ass (+Z)**: kurā virzienā instruments vērsts uz detaļu. Noklusējums ir pasaules +Y (PartCraft augšup); tad iekārtas X ir pasaules X, bet iekārtas Y ir pasaules −Z.
   - **Darba sākumpunkts (G54)**: zagatavītes stūris vai centrs, augša vai apakša, modeļa augšējais centrs vai modeļa sākumpunkts.
   - **Zagatave**: kaste vai cilindrs – vai nu modelis plus nobīdes (sāni, augša, apakša), vai fiksēts izmērs.
   - **Materiāls** (nosaka sākuma padeves un apgriezienus), **postprocesors** (vadība), iekārtas maksimālie vārpstas apgriezieni, ātrās kustības ātrums un instrumenta maiņas laiks, dzesēšanas šķidrums un programmas numurs.

## Instrumenti

Cilnē **Instrumenti** ir bibliotēka: plakanās, lodveida un ar noapaļotu stūri pirksta frēzes, urbji, nošķelšanas frēzes un virsmas frēzes, katrai – T numurs, diametrs, rievu skaits un rievu garums (kā arī stūra rādiuss, uzgalis vai nošķelšanas leņķis, kur tas attiecas).

Manus instrumentus var saglabāt pārlūkprogrammā un pārvietot starp datoriem kā failu: skatiet [Instrumentu bibliotēka](topic:tool-library).

Vārpstas apgriezienus un padevi nosaka materiāls: n = 1000 × griešanas ātrums / (π × diametrs), padeve = n × rievu skaits × skaidas biezums (urbjiem: n × padeve uz apgriezienu). Skaitļi ir piesardzīgas sākuma vērtības no publicētajiem diapazoniem, tie nav noregulēti jūsu iekārtai; lai tos aizstātu, ierakstiet sava instrumenta ražotāja griešanas ātrumu, skaidas biezumu, apgriezienus vai padevi. Ja ātrums pārsniedz iekārtas maksimumu, tas tiek turēts šajā līmenī un padeve seko, saglabājot skaidas biezumu.

## Operāciju pievienošana

Katra rīkjoslas poga pievieno operāciju un, ja tai nepieciešama ģeometrija, sāk atlasi: noklikšķiniet uz virsmām vai malām skatā (vēlreiz noklikšķiniet, lai kādu noņemtu), tad {{ui:Atlase pabeigta}} vai {{key:Esc}}.

| Operācija | Atlase | Ko tā dara |
|---|---|---|
| {{ui:Virsma}} | nekas | Zigzaga gājieni pāri visai zagatavei, aiz tās malām, līdz modeļa augšai |
| {{ui:Kabata}} | plakana grīdas virsma, apaļš caurums vai slēgta malu ķēde | Notīra apgabalu ar nobīdes gājieniem no iekšpuses uz āru, katrā soļa dziļumā; salas (virsmas, kas paceļas grīdas iekšienē) tiek atstātas; grīda, kas atvērta visapkārt (nekas augstāks ārpusē), tiek notīrīta līdz zagataves malai |
| {{ui:Adaptīvs}} | tas pats, kas Kabatai | Notīra to pašu apgabalu ar gājieniem, kuros katrs griež noteiktu platumu (**Iesaistīšana**, daļa no diametra), tāpēc frēze nekad neiet pilnā platumā rievā, pat stūros; ieiet ar spirāli un katrā līmenī apdarina sienas. Šaurāki griezumi ļauj dziļāku soli un lielāku padevi |
| {{ui:Kontūra}} | plakana virsma (tās kontūra), apaļa virsma vai malas | Seko kontūrai, nobīdītai par instrumenta rādiusu, ārpusē vai iekšpusē, ar ieejas un izejas lokiem un pēc izvēles ar stiprinājumiem (tabs) |
| {{ui:Urbums}} | caurumi (noklikšķiniet uz cauruma sienas vai malas) | Urbj katru caurumu ar gatavu ciklu: pakāpenisko urbšanu (G83), urbšanu (G81) vai skaidas lūšanu (G73); vai norādiet diametru, lai urbtu katru šāda izmēra caurumu |
| {{ui:Nošķelšana}} | virsmas kontūra vai malas | Gar malu virza nošķelšanas frēzi tā, lai tā nogriež norādīto platumu |
| {{ui:Paralēls}} | nekas (visa modeļa) | 3D apdare paralēlās līnijās jebkurā leņķī, sekojot virsmai ar lodveida, ar noapaļotu stūri vai plakanu pirksta frēzi. Skatiet [3D apdare](topic:finish-3d) |
| {{ui:Scallop}} | nekas (visa modeļa) | 3D apdare gājienos noteiktā attālumā virs virsmas, lai izcilnis starp tiem būtu jūsu norādītais augstums |

Izvēlieties operāciju sarakstā, lai mainītu tās instrumentu, augstumus (drošības attālums, atvilkšana, padeves augstums, augša, apakša), soļa dziļumu, soļa soli, atstājamo materiālu, apdares gājienu, ieejas veidu (spirāle, slīpums vai iegrimšana), climb frēzēšanu, stiprinājumus (tabs) vai ciklu. {{ui:Augšup}} un {{ui:Uz leju}} maina secību, {{ui:Apturēt}} izlaiž to, {{ui:Dzēst}} noņem to. Viss ir atsaucamo darbību vēsturē un saglabāts detaļas failā.

Kabatas soļa solis ir ne vairāk kā puse no instrumenta diametra, tāpēc katrs tās grīdas punkts atrodas vienas instrumenta rādiusa attālumā no gājiena. Iekšējie stūri saglabā instrumenta rādiusu.

**Adaptīvā notīrīšana** notur frēzes iesaistīšanos tuvu vienai vērtībai. Iesaistīšana 0,15 no diametra atbilst iesaistīšanās leņķim ap 46°: frēzes malas loka garumam materiālā. Savukārt nobīdīta kabata pirmajā gājienā griež pilnā platumā un katrā iekšējā stūrī apiet tālāk. Starp gājieniem instruments paliek lejā, kur tas pārvietojas caur nogriezto gaisu, un citur paceļas un nolaižas nogriezītā gaisā. Gājieni aprēķināti smalkā režģī pār apgabalu (šūnas ap vienu divpadsmito daļu no instrumenta rādiusa), tāpēc iesaistīšana var pārsniegt iestatīto ap vienu šūnu platumā; sienas tiek apdarinātas precīzi. Liels atklāts apgabals rada garu programmu ar daudzām īsām kustībām.

## Simulācija

Instrumentu trajektorijas tiek atkārtoti veidotas pēc katras izmaiņas (arī detaļas). {{ui:Simulēt}} parāda arī zagatavē atlikušo materiālu pēc visas programmas. Panelī redzams:

- **Cikla laiks**: padeves kustības ar savu padevi, ātrās kustības kā taisnas līnijas ar iestatījuma ātrās kustības ātrumu, plus instrumenta maiņas laiks. Reālām iekārtām ir paātrinājums, tāpēc tām tas aizņem ilgāk.
- **Iegriešanās**: vietas, kur instruments iegāja vairāk nekā 0,02 mm zem detaļas virsmas. Skatā tās atzīmētas sarkanā krāsā.
- **Atlikušais materiāls uz detaļas**.

Zagatave ir augstuma karte no augšas (Z karte), tāpēc tā nevar parādīt paslēptos izgriezumus. Velciet **Atskaņošana**, lai pārvietotu instrumentu pa programmu. Skatā padeves kustības ir nepārtrauktas, ātrās kustības – punktētas, katrai operācijai sava krāsa.

Ja ieslēgts **Rādīt simulēto zagatavi**, zagatave tiek krāsota pret modeli šūnu pa šūnai: **zaļa**, kur tā atrodas uz modeļa (0,02 mm robežās), **sarkana**, kur instruments iegriezies modelī, un kur uz modeļa paliek materiāls – **dzeltena** plānai kārtai, **oranža** – vairāk, pārejot līdz **pelēkajai** nenogrieztās zagatavei, ja 1 mm vai vairāk. Krāsas tiek atkārtoti veidotas ar katru izmaiņu no tās pašas augstuma kartes, kā skaitļi panelī, tāpēc zaļā un sarkanā atbilst rindai Iegriešanās. Nošķelšana tīši griežas modelī un gar savu malu rāda sarkanu.

## Ģenerēt G-kodu

Izvēlieties vadību sadaļā **Postprocesors** un nospiediet {{ui:Lejupielādēt G-kodu}} (vai {{ui:Postprocesors}} rīkjoslā):

| Vadība | Fails | Piezīmes |
|---|---|---|
| Fanuc tipa ISO | .nc | %, O numurs, rindu numuri, T M6 ar G43 H, gatavie cikli |
| GRBL | .nc | Nav instrumentu maiņas vai gatavo ciklu: instrumenta maiņa aptur ar M0, urbšana rakstīta kā vienkāršas kustības |
| LinuxCNC | .ngc | T M6 ar G43 H, gatavie cikli, M2 |
| Fanuc tipa virpa | .nc | Virpošanas programmām: X kā diametrs, padeve uz apgriezienu, G96 zem G50 ierobežojuma, G32 vītnēšana |
| LinuxCNC virpa | .ngc | Virpošanas programmām: G7 diametri, G95, G96, G33 vītnēšana; nav rakstīta sākuma pozīcijas (homing) kustība |
| Jūsu pašu | jebkurš | Postprocesors, ko esat uzrakstījis vai mainījis: {{ui:Rediģēt postprocesoru…}}, {{ui:Jauns postprocesors…}}, {{ui:Importēt postprocesora failu…}} |

Katrs fails sākas ar komentāriem par programmu, zagatavi, darba nobīdi un instrumentiem. Koordinātes ir milimetros ar 3 decimālzīmēm. {{ui:Instrumentu ceļu CSV}} un {{ui:Instrumentu ceļu JSON}} eksportē pašas kustības.

**Pirms griešanas pārbaudiet rezultātu sava iekārtas simulatorā un vispirms palaidiet to gaisā virs zagataves.** Trīs iebūvētie postprocesori ir sākumpunkti, kas seko vadības dokumentētajai darbībai; tie nav pārbaudīti nevienā konkrētā iekārtā. Postprocesors, ko mainījāt, ir jūsu pārbaudāms. Kā to uzrakstīt: [Postprocesori](topic:post-processors).

## Precīzs STEP darbnīcai

Zem G-koda pogām cilnē **Operācijas** {{ui:Precīzs STEP (darba koordinātes)}} lejupielādē `<part>-work.step`: detaļa kā precīzs cietais ķermenis (īsti cilindri caurumiem un izciļņiem, īsti apļi to malām) ar sākumpunktu šī iestatījuma darba sākumpunktā un Z pa instrumenta asi. Tās ir koordinātes, ko izmanto G-kods, tāpēc darbnīcas pašas CAM programma vai pārbaudītājs saskaņo modeli ar programmu, nepārvietojot to. Fails satur tikai detaļu, nevis zagatavi vai instrumentu trajektorijas.

{{ui:Eksportēt}} › {{ui:STEP AP242 (precīzs cietais ķermenis)}} ieraksta to pašu cieto ķermeni detaļas sākotnējā stāvoklī (Z augšup): skatiet [Eksportēšana drukāšanai, STEP un DXF](topic:export-files#for-other-cad-programs-step).

## Ierobežojumi

- Kabatas, kontūras, urbšana un nošķelšanas ir 2,5 asu. Izliektas detaļas rupji apstrādā un apdarina 3D ar saviem operāciju veidiem ([3D rupjā apstrāde un atlikuma apstrāde](topic:rough-3d), [3D apstrāde](topic:finish-3d)). Adaptīvā notīrīšana ir 2D (plakanas grīdas).
- Ir pieejami slīpi instrumenti, 5 asu un 4. ass apdare, virpošana un zondēšana, katrai ar saviem ierobežojumiem, un **neviens no tiem nav izmēģināts uz iekārtas**: skatiet [4 un 5 asu apstrāde](topic:multi-axis), [Virpošana](topic:turning) un [Zondēšana](topic:probing).
- Turētāji un kāti netiek pārbaudīti sadursmēm; brīdinājums parādās, kad griezums ir dziļāks par rievas garumu.
- Padeves un apgriezieni ir sākuma vērtības. Postprocesors ir teksts, ko var rediģēt, bet tas nosaka tikai to, kā kustības tiek rakstītas; tas nevar mainīt instrumenta trajektoriju, pievienot asis vai zināt jūsu iekārtu ([Postprocesori](topic:post-processors) uzskaita, ko tas nevar).

## Programmas nosūtīšana iekārtai

Darbvirsmas CadCraft Studio, ja iekārta iestatīta Studio, blakus **Lejupielādēt G-kodu** parādās **Nosūtīt iekārtai…** un augšupielādē to pašu programmu iekārtai jūsu tīklā. To nekad nevar palaist no PartCraft: palaidiet to pie iekārtas, kad tas ir droši. Pārlūkprogrammā poga nav redzama (tīmekļa lapa nevar sasniegt iekārtu jūsu tīklā): lejupielādējiet programmu.
