---
title: Šķidruma plūsmas simulācija (plūsmas pētījums)
summary: Plūsma caur kanāliem detaļas iekšpusē vai ap to kastē: ieplūdes, izplūdes, gaiss, ūdens vai pašu šķidrums, tad ātrums un spiediens pārvietojamā griezuma plaknē, strāvas līnijas, virsmas spiediens, spiediena kritums, masas bilance, pretestība un pacelšana, kā arī ko lamināra metode var un nevar parādīt.
keywords: plūsma, CFD, šķidrums, skaitliskā šķidrumu dinamika, plūsmas simulācija, gaiss, ūdens, viskozitāte, blīvums, Reinoldsa skaitlis, lamināra, turbulenta, spiediena kritums, galvas zudums, ieplūde, izplūde, vāks, vāciņš, ātrums, plūsmas ātrums, tilpuma plūsma, litri minūtē, statiskais spiediens, strāvas līnijas, griezuma plakne, pretestība, pacelšana, pretestības koeficients, pacelšanas koeficients, frontālais laukums, ārējā plūsma, iekšējā plūsma, caurule, kanāls, kolektors, sprausla, Bolcmaņa režģis, atlikums, konverģence
from: 7dc75f29
---

Pētījumā **Plūsma** aprēķina, kā šķidrums pārvietojas pa detaļas iekšējiem kanāliem (**iekšējā**) vai ap to (**ārējā**). Pēc noklusējuma tas ir **lamināra, nesaspiežama, izotermiska un Ņūtona**: vienmērīga plūsma šķidrumam, kura blīvums un viskozitāte paliek nemainīgi, bez siltuma, turbulences un gravitācijas. Ir arī **eksperimentāls** turbulences modelis, kas paredzēts tikai kvalitatīvām plūsmas ainām (skatiet tālāk). Tas darbojas ar nosauktajām virsmām, ko detaļai piešķir tīkla kodols (skatiet [Tīkla kodols](topic:solid-kernels)).

Izvēlieties **Simulācija** lodziņā **Darba vide**, nospiediet **Jauns pētījums**, ja tāda nav, un iestatiet **Tips** uz **Plūsma (CFD)**. **Plūsmas modelis** ir **Lamināra** (noklusējums) vai **Turbulenta (Spalart–Allmaras, eksperimentāla)**: skatiet tālāk **Turbulenta plūsma (eksperimentāla)**. Pētījuma konstrukcijas iestatījumi tiek saglabāti, tāpēc varat atgriezties. Plūsmas iestatījumi tiek saglabāti detaļas failā, un katru izmaiņu var atsaukt.

## Šķidruma un šūnu izvēle

- **Šķidrums**: gaiss vai ūdens 20 °C temperatūrā vai **Pielāgots** ar savu blīvumu (kg/m³) un dinamisko viskozitāti (Pa·s). Gaisam izmanto ideālās gāzes likumu un Sazerlenda likumu (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); ūdenim izmanto IAPWS vērtības (998.21 kg/m³, 1.0016 mPa·s).
- **Šūnas izmērs**: šķidruma telpa tiek aizpildīta ar vienādiem kubiem. Atstājiet tukšu automātiskam izmēram; panelī redzams režģis. Katrai atverei un kanālam vajadzētu būt **vismaz 8 līdz 10 šūnām šķērsgriezumā**, lai iegūtu derīgus skaitļus; mazākas šūnas dod precīzāku, bet lēnāku rezultātu (divreiz smalkāks režģis prasa aptuveni 16 reizes vairāk darba).
- **Sienas**: **Interpolētas** seko izliektām sienām starp šūnām (noklusējums); **Atsitiens** uztver sienas kā kubisku pakāpienu.

## Plūsma detaļas iekšpusē

Šķidruma telpai jābūt slēgtai. Panelī pievienojiet **Ieplūdi** un **Izplūdi**, pēc tam noklikšķiniet uz to virsmām skatā:

1. **Plakana virsma ap atveri** — caurules gala mala vai ligzdas virsma. PartCraft tur aizver atveres caurumu ar vāku. Katrs caurums šajā virsmā pieder šai atverei, tāpēc, ja ieplūde un izplūde atveras uz vienas virsmas, modelējiet pāri vienai no tām plānu vāciņu.
2. **Vāciņa iekšējā virsma** — kā citos CAD rīkos: modelējiet plānu plāksni (izvilkumu) pāri atverei un atlasiet tās virsmu, kas saskaras ar šķidrumu.

Ieplūdei iestatiet **ātrumu** (m/s, vienmērīgu pa visu atveri, detaļas virzienā) vai **tilpuma plūsmu** (L/min). Izplūdei iestatiet **statisko spiedienu** (Pa, relatīvo). Ja atvere paliek atvērta vai siena ir plānāka par šūnu, iekšpuse saplūst ar ārpusi un aprēķins apstājas ar paziņojumu "Nav slēgtas šķidruma telpas".

## Plūsma ap detaļu

Iestatiet **Plūsma** uz **Ārējā**, **Ātrums**, virzienu, uz kuru plūst šķidrums, un cik tālu kaste sniedzas pret plūsmu, pa plūsmu un sāniem (tukšs: attiecīgi 1, 3 un 1 reizi lielākais detaļas izmērs). Kastes virsma, pa kuru plūsma ieiet, ir ieplūde; virsma, pa kuru tā iziet, ir izplūde ar 0 Pa; virsmas gar plūsmu ir slīdošas. Pārāk maza kaste saspiež plūsmu ap detaļu un palielina pretestību. **Atsauces laukums** ir laukums, ko izmanto pretestības un pacelšanas koeficientiem (tukšs: detaļas frontālais laukums, kas redzams gar plūsmu); pacelšana tiek mērīta pa +Y, ja neizvēlaties citu virzienu.

## Aprēķins un rezultātu lasīšana

Nospiediet **Aprēķināt**. Aprēķins notiek fonā, rādot soļu skaitu, atlikumu un atlikuma grafiku; **Apturēt** to pārtrauc. Tas apstājas, kad atlikums (cik lielā mērā ātruma lauks vēl mainās katrā solī) ir zem mērķa un spiediena kritums vai pretestība ir nostabilizējusies. Ja vispirms tiek sasniegts soļu ierobežojums, panelī sarkanā krāsā parādās **Nav konverģējis**: skaitļi ir pēdējais stāvoklis, nevis stabils rezultāts.

- **Griezuma plakne**: ātrums vai statiskais spiediens plaknē, kas iet caur modeli; izvēlieties tās normāli (X, Y vai Z) un velciet slīdni, lai to pārvietotu. Novietojiet kursoru virs tās, lai nolasītu vērtības.
- **Strāvas līnijas**: no ieplūdēm (iekšējā) vai no līniju kopas pa kastes ieplūdes galu griezuma plaknē (ārējā).
- **Detaļa**: cieta, caurspīdīga (lai redzētu plakni iekšpusē), virsmas spiediens vai paslēpta.
- **Tabula**: Reinoldsa skaitlis, spiediena kritums (vidējais statiskais spiediens ieplūdēs mīnus izplūdēs), katras atveres plūsma un vidējais spiediens, spēks uz detaļu, pretestība un pacelšana ar to koeficientiem un atsauces laukumu (ārējā), masas bilance (ieplūde pret izplūdi), režģis un risinātājs.

## Turbulenta plūsma (eksperimentāla)

**Plūsmas modelis › Turbulenta (Spalart–Allmaras, eksperimentāla)** risina laika vidējo turbulento plūsmu (stacionāro RANS): Spalart–Allmaras modelis katrā šūnā dod virpuļviskozitāti, un šūnas pie sienām izmanto Spaldinga sienas likumu, nevis atrisina plānu slāni tur. Tā ir pilnīgi turbulenta visur (nav lamināru zonu, nav pārejas).

**Tas neizturēja precizitātes pārbaudes.** Panelis, rezultāti un tabula to norāda katrā turbulentā pētījumā, un brīdinājumu nevar aizvērt. Izmantojiet to **kvalitatīvām plūsmas ainām** — kur plūsma atdalās, cirkulē vai paātrinās — **nevis projektēšanas skaitļiem**.

| Pārbaude | Atsauce | Rezultāts |
|---|---|---|
| Plakana kanāla berze, pirmā šūna pie y⁺ 49 / 98 | Dīna korelācija | +3.3 % / +4.7 % |
| Kanāls ar atrisinātu sienu (y⁺ ≈ 3), Re_τ 180: tilpuma ātrums | Moser, Kim & Mansour DNS | −1 % |
| Plakans kanāls, y⁺ 7–15 vai 190–380 | Dīna korelācija | +9 līdz +22 % |
| Caurules berze caur kubiskajām šūnām, pilnībā attīstīta, 10–30 šūnas šķērsgriezumā | Colebrook | par 30 līdz 34 % par augstu |
| Atkārtota pieslēgšanās aiz atpakaļvērsta pakāpiena, 6–14 šūnas uz pakāpiena augstumu | Driver & Seegmiller, 6.26 pakāpiena augstumi | par 21 līdz 39 % par īsu |

Rezultāti uzlabojas tikai lēni, izmantojot smalkākas šūnas. Pēc aprēķina tabulā redzams **pirmās šūnas y⁺** (minimums, vidējais un maksimums pār sienu šūnām) un tiek brīdināts ārpus pārbaudītā diapazona no 1 līdz 400; mērķējiet uz aptuveni 30 līdz 300. **Aprēķina laiks:** automātiskās šūnas ir izmērītas tā, lai vienam klēpjdatora kodolam prasītu ne vairāk kā dažas minūtes (panelī redzams ļaunākais gadījums režģim un soļu ierobežojumam; maza caurule nostabilizējas mazāk nekā 20 sekundēs). Šūnu izmēra samazināšana uz pusi prasa aptuveni 16 reizes ilgāk. Spēki uz detaļu iegūti no impulsa bilances pār atverēm vai kasti.

**Darbs pie tā līdz šim:** sienu šūnas tagad savu bīdes spriegumu saskaņo ar sienas likumu, kas ļāva samazināt caurules un pakāpiena kļūdas līdz augstāk minētajiem skaitļiem, nemainot plakana kanāla rezultātus. Tas nebija pietiekami projektēšanas skaitļiem. Nākamais solis ir smalkākas šūnas pie sienām.

## Ko tas var un ko nevar parādīt

- **Laminārais modelis** ir tikai lamināra. Caurulēs plūsma kļūst turbulenta, ja Reinoldsa skaitlis pārsniedz aptuveni 2,000 līdz 4,000; aiz neasām formām aste sāk atdalīt virpuļus, ja skaitlis pārsniedz aptuveni 50. Panelis brīdina šajos punktos. Lamināra rezultāts turbulentai plūsmai nenovērtē spiediena kritumu un nepareizi aprēķina pretestību. Eksperimentālais turbulentais modelis (augstāk) kvalitatīvi aptver turbulento plūsmu; tā skaitļi vēl nav uzticami.
- **Metode:** režģa Bolcmaņa metode (D3Q19, divu relaksācijas laiku sadursme), kas vesta līdz stacionāram stāvoklim. Iekšpusē tā ir nedaudz saspiežama; PartCraft saglabā blīvuma izmaiņas dažu procentu robežās. Ja plūsma šūnām ir par ātru, tā neatsāk darbu un norāda, cik daudz mazākām šūnām jābūt.
- **Pārbaudīts pret:** Hāgena–Puazeila plūsmu caurulē caur detaļu (spiediena gradients 1 % robežās pie 20 šūnām šķērsgriezumā), Ghia et al. vāka dzīto dobumu (0.75 % robežās no vāka ātruma) un Šēfera–Tureka cilindra etalonu (pretestība 1 % robežās pie 10 šūnām diametrā).
- Nav modelēts: siltuma pārnese, turbulence ar projektēšanas precizitāti (turbulentais modelis ir eksperimentāls), brīvās virsmas, kavitācija, gravitācija, kustīgas daļas, neņūtona šķidrumi, raupjas sienas. Laboratorijas versija: svarīgus rezultātus pārbaudiet citādi.
