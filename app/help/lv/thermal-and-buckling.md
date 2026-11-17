---
title: Siltums, termiskais spriegums un izliekšanās
summary: Atrodiet temperatūras detaļā no fiksētām temperatūrām, siltuma plūsmas, siltuma jaudas, konvekcijas un starojuma (stacionāri vai laikā), aprēķiniet spriegumu no temperatūras paaugstinājuma un atrodiet slodzi, pie kuras slaida detaļa izliecas, ar to, ko katra metode var un nevar pateikt.
keywords: termiskais, siltumapmaiņa, siltums, temperatūra, vadīšana, konvekcija, siltumapmaiņas koeficients, starojums, emisivitāte, siltuma plūsma, siltuma jauda, siltuma ģenerācija, siltuma izlietne, pārejas process, laiks, atdzesēšana, sasildīšana, Krenka–Nikolsona, netiešā Eilera metode, siltuma bilance, termiskais spriegums, termiskais spriegums laikā, pārejas termiskais spriegums, rūdīšana, termiskais trieciens, sprieguma vēsture, sliktākais laiks, termiskā izplešanās, izplešanās koeficients, izliekšanās, Eilera izliekšanās, slodzes koeficients, kritiskā slodze, kolonna, slaids, īpašvērtība
from: 1a1b7545
---

Šie pētījumi atrodas Simulācijas darbvietā blakus statiskajam spriegumam un dabiskajām frekvencēm (skatiet [Pārbaudīt spriegumu un pārvietojumu](topic:simulation)). Izvēlieties tos panelī lodziņā **Veids**. Tie izmanto to pašu sīko kubiņu tīklu un to pašu materiālu sarakstu; katram bibliotēkas materiālam ir siltumvadītspēja, īpatnējā siltumietilpība un izplešanās koeficients (tipiskas rokasgrāmatas vērtības, rādītas zem **Īpašības**).

## Siltums: kur siltums aiziet?

1. Izvēlieties **Termiskais (siltuma pārnese)** kā **Veidu**.
2. Pievienojiet termiskos nosacījumus no panelī **Pievienot** saraksta un pēc tam noklikšķiniet uz to virsmām (kā balstiem un slodzēm):
   - **Fiksēta temperatūra**: virsma tiek turēta noteiktā temperatūrā, °C.
   - **Siltuma plūsma**: W/m², kas ieplūst virsmā (negatīva vērtība nozīmē izplūdi). Tā darbojas uz virsmas patiesā laukuma, pat tur, kur kubiņi veido pakāpienus.
   - **Siltuma jauda**: kopējā vērtība vatos, sadalīta pa atlasītajām virsmām proporcionāli laukumam. Izmantojiet to sildītājam vai mikroshēmai ar zināmu jaudu.
   - **Konvekcija**: gaiss vai šķidrums noteiktā temperatūrā novada siltumu ar h W/(m²·K). Tipiskas h vērtības: nekustīgs gaiss 5–10, ventilators 25–100, ūdens 500–10,000. PartCraft nerēķina h: šajā pētījumā nav šķidruma plūsmas.
   - **Starojums**: virsma izstaro apkārtnei noteiktā temperatūrā, ar emisivitāti no 0 līdz 1. Tas ir **linearizēts** (starojums tiek uzrakstīts kā koeficients, kas atkarīgs no temperatūras, un atkārtoti atrisināts, līdz nostabilizējas) un iet tikai uz apkārtni: virsmas savstarpēji siltumu neapmainās.
3. **Siltuma ģenerācija** (W/m³) silda visu detaļu no iekšpuses, piemēram, pretestības detaļu.
4. Nospiediet **Atrisināt**. Detaļa ir krāsota pēc temperatūras; izvēlieties **Siltuma plūsma** lodziņā **Rādīt**, lai redzētu, kur plūst siltums. Norādiet uz detaļu, lai nolasītu abus.

Stacionārai siltuma plūsmai vajag vietu, kur siltumam aiziet: vismaz vienu fiksētu temperatūru, konvekciju vai starojumu. Detaļa, kas tikai uzņem siltumu, nesasniedz stacionāru stāvokli; padariet to pārejošu.

Tabulā ir zemākā un augstākā temperatūra un to vieta, lielākā siltuma plūsma un **siltuma bilance**: siltums, kas ieplūst vai izplūst katrā nosacījumā (fiksētā temperatūra uzskaita, cik tai jāpiegādā vai jāuzņem), ģenerētais siltums, kopējā ieplūde un izplūde, un **nelīdzsvarotība**. Nelīdzsvarotībai jābūt niecīgai daļai no ieplūstošā siltuma; liela vērtība nozīmē, ka rezultātam nevar uzticēties.

### Laikā (pārejas process)

Atzīmējiet **Pārejas process** un norādiet **Sākuma temperatūru** (visa detaļa sākas tur), **Laika ilgumu** un **Laika soļu** skaitu. **Implicītā Eilera** metode ir noturīga; **Krenka–Nikolsona** ir precīzāka tiem pašiem soļiem, bet var svārstīties pēc pēkšņas izmaiņas. Pēc atrisināšanas velciet slīdni **Laiks**, lai redzētu temperatūras katrā brīdī (krāsu skala paliek tāda pati visiem brīžiem). Siltuma bilancē tad ieskaitīts arī uzkrātais siltums.

## Termiskais spriegums: ko temperatūras izmaiņa dara ar detaļu?

**Statiskā sprieguma** (vai **Izliekšanās**) pētījumā iestatiet **Termiskā slodze**:

- **Vienmērīga temperatūras izmaiņa**: visa detaļa sasilst (vai atdziest, ar negatīvu skaitli) par tik kelvinu.
- **Temperatūras no termiskiem nosacījumiem**: pievienojiet termiskos nosacījumus tam pašam pētījumam; stacionārās temperatūras vispirms tiek atrisinātas uz tā paša tīkla, pēc tam detaļa izplešas par α·(T − **bezsprieguma temperatūra**).
- **Temperatūras laikā (pārejas aprēķins)**: pievienojiet termiskos nosacījumus un pēc tam norādiet **Sākuma temperatūru**, **Laika ilgumu**, **Laika soļus** un **Laika soļošanu**, kā pārejas termiskajam pētījumam. Temperatūras tiek atrisinātas laikā uz tā paša tīkla (kubiņi vai tetraedri), un statiskais aprēķins ar katra brīža temperatūrām dod šī brīža spriegumu. **Spriegums pie**:
  - **Sliktākais laiks** (sākums): **Sprieguma aprēķini** izkliedē brīžus vienmērīgi visā aprēķinā, sākumu ieskaitot (21, ja vien nemainat, ne vairāk kā 51). Rezultāti atveras brīdī ar lielāko fon Mizesa spriegumu; tabulā tas ir nosaukts, mazā diagrammā parādīts maksimālais spriegums pret laiku, un slīdnis **Laiks** rāda spriegumu katrā aprēķinātā brīdī (krāsu skala paliek tāda pati kā sliktākajam brīdim).
  - **Viens izvēlēts laiks**: viens brīdis, laika solis, kas vistuvāk jūsu norādītajam **Laikam (s)**. Izliekšanās pētījumā vienmēr tiek izvēlēts viens laiks (aprēķina beigas, ja neiestatāt citu).

Detaļa, kas tiek rūdīta (iemērkta no karstas aukstā) vai pēkšņi sasildīta, ir visvairāk saspringta tad, kad iekšpuse un virsma atšķiras visvairāk: bieži tieši sākumā. Pastāvīga temperatūra iedarbojas no pirmā mirkļa kā pēkšņa izmaiņa, tāpēc spriegums pašā sākumā ir atkarīgs no elementa izmēra (tikai daži elementi redz izmaiņu). Lasiet to kā "ļoti augsts" un skatiet slīdņa nākamos brīžus, lai iegūtu vērtības, ko tīkls izšķir. Spriegums ir kvazistatisks: nav inerces, nav vibrācijas no pēkšņās izmaiņas.

Detaļai, kas var brīvi augt, nav termiska sprieguma: tikai pietiekami fiksējiet to, lai tā nekustētos (piemēram, trīs bezberzes virsmas taisnā leņķī). Ja tā ir iespiesta starp divām sienām, tā tiek saspiesta: tērauda stienis, kas sasildīts par 50 K starp stingrām sienām, nes aptuveni 117 MPa. Termiskās slodzes pašas sevi līdzsvaro, tāpēc reakcijas joprojām līdzsvarojas tikai ar mehāniskajām slodzēm.

## Izliekšanās: kad slaida detaļa padodas?

1. Izvēlieties **Izliekšanās (lineāra)** kā **Veidu** un pievienojiet balstus un slodzes, kā statiskam pētījumam.
2. Iestatiet **Meklējamie slodzes koeficienti** (cik izliekšanās režīmu).
3. Nospiediet **Atrisināt**. Katram režīmam ir **slodzes koeficients**: reizinātājs, pie kura jūsu slodzēs ideālā detaļa izliecas. Slodzes koeficients 3 nozīmē trīskāršas jūsu slodzes; **slodzes koeficients zem 1 nozīmē, ka tā izliecas jūsu pielikto slodžu ietekmē**. Tabulā ir arī kopējā slodze katram koeficientam. Formas attēls parāda, kā tā izliecas (tā izmērs nenozīmē neko).

**Lineārā izliekšanās pārvērtē reālo izliekšanās slodzi.** Tā pieņem ideālu detaļu: perfekti taisnu, bez atlikušā sprieguma un elastīgu. Reālām detaļām ir nelielas neprecizitātes, tās var vispirms sākt plastiski deformēties, un plāni čaulas var izliekties pie daļas no lineārās vērtības. Izmantojiet lielu rezervi un uzskatiet koeficientu plānai čaulai tuvu vai zem 3 par brīdinājumu.

## Cik uzticēties

PartCraft pārbauda šos risinātājus pret rokas formulām: stienis starp divām temperatūrām (precīzi), dzesēšanas spura (0.3 K robežās), plāksne, kas sildās pati (precīzi), kubs, kas atdziest laikā (0.1 % robežās ar Krenka–Nikolsona), stienis, kas pēkšņi sasildīts vienā galā, brīvs stienis, kas sasildīts (bez sprieguma, ΔL = αLΔT), stienis, kas turēts starp sienām (σ = −EαΔT), rūdīta plāksne laikā pret klasisko rindas risinājumu (1 % robežās uz kubiņiem, 2.1 % uz tetraedriem plāksnes centrā; 0.5 % tās virsmā), garas aprēķina pēdējais brīdis pret stacionāro termisko spriegumu (tas pats līdz miljonai daļai) un Eilera kolonnas (1 % robežās fiksēts–brīvs, 1.5 % abos galos balstīts). Ņemiet vērā:

- **Pastāvīgas materiāla vērtības.** Vadītspēja, īpatnējā siltumietilpība un izplešanās šeit nemainās ar temperatūru; pie dažiem simtiem grādu tās var mainīties par 10–30 %. Stingums arī nemainās.
- **Spriegums laikā ir kvazistatisks un elastīgs**: katrs brīdis ir statisks aprēķins (bez inerces), un nav plastiskas deformācijas, tāpēc rūdīšana, kas virsmu nospiestu līdz plūšanai, parāda spriegumu virs robežas.
- **Konvekcijas koeficienti ir jūsu ievade**, nevis aprēķināti no gaisa vai ūdens plūsmas.
- **Nav kontakta pretestības**: detaļa ir viens ciets ķermenis.
- **Tikai lineāra izliekšanās**: nav neprecizitāšu, nav plastiskas deformācijas, nav uzvedības pēc izliekšanās.
- Kubiņu pakāpieni un asi iekšējie stūri ietekmē termiskos spriegumus tāpat kā citus spriegumus (skatiet [Pārbaudīt spriegumu un pārvietojumu](topic:simulation)).
- Šī ir laboratorijas versija: pārbaudiet svarīgas detaļas citādi.

## Saistītais

- [Pārbaudīt spriegumu un pārvietojumu (Simulācija)](topic:simulation)
- [Kas vēl nav izveidots](topic:not-built-yet)
