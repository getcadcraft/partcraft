---
title: Magnētiskie lauki 2D (apmācība)
summary: Aprēķiniet elektromagneta vai pastāvīgā magnēta magnētisko lauku ar analīzes bibliotēku: palaidiet piemērus, nolasiet plūsmas blīvumu, spraugas lauku, induktivitāti un vilkmi, mainiet konstrukciju un veidojiet savu spoļu, magnētu un dzelzs modeli.
keywords: magnētisks, magnetostatika, magnētiskais lauks, plūsmas blīvums, tesla, elektromagnēts, solenoīds, spole, ampēru-apgriezieni, dzelzs serde, gaisa sprauga, caurlaidība, induktivitāte, magnētiskais spēks, reluktance, magnētiskā ķēde, vektora potenciāls, elektromagnētika, galīgo elementu, fem, motors, aktuators, transformators, magnetostatic2d, pastāvīgais magnēts, neodīms, ndfeb, ferīts, atlikums, darba punkts, atgriešanās, noplūde, turošais magnēts
from: 215f6601
---

PartCraft analīzes bibliotēka var aprēķināt spoļu un dzelzs magnētisko lauku 2D: šķērsgriezumu lietām, kas ir garas un visā garumā vienādas, piemēram, elektromagnētam, transformatora serdei, kopnei vai motora šķērsgriezumam. Šī apmācība palaiž bibliotēkas elektromagneta piemēru, nolasa, ko tas saka, to maina, parāda, kā modelēt savu formu, un tad pievieno pastāvīgu magnētu.

Tā izmanto Script darbvietu un [analīzes bibliotēku](topic:craftscript-library). Lai sekotu, nav jāzina CraftScript valoda; piemērs saka, ko dara katra rinda.

## Kas tiek modelēts

C formas dzelzs serde, 100 × 80 mm ārpusē un 20 mm biezumā, ar 2 mm gaisa spraugu tās labajā kājā. Spole ar 100 apgriezieniem, ko nes 10 A (1000 ampēru-apgriezienu), ir uztīta ap tās kreiso kāju. Viss ir garš virzienā ārpus ekrāna, tāpēc atbildes ir **uz metru dziļuma**: reizināt ar reālo dziļumu īstam magnētam.

Bibliotēkas `magnetostatic2d` atrisina magnētiskā vektora potenciālu 1 mm kvadrātu režģī gaisa kastē ap magnētu un pēc tam aprēķina plūsmas blīvumu **B** (teslās) no tā.

## Palaidiet piemēru

1. Lodziņā **Workspace** pa kreisi no rīkjoslas izvēlieties **Script**.
2. Atveriet skripta paneļa cilni **Library**, tad **Examples** › **Electromagnet: field, gap, inductance**.
3. Noklikšķiniet {{ui:Open (read-only)}}, tad nospiediet {{key:F5}}.

Pēc sekundes vai divām kanvā redzams plūsmas blīvums, un konsole izdrukā:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Grafiks zem kanva ir vertikālais plūsmas blīvums B_y pa serdes vidējo līniju no kreisās uz labo pusi: apmēram −0.55 T kreisajā kājā (plūsma iet pa to lejup), gandrīz nekas logā un +0.55 T labajā kājā un pāri spraugai (plūsma atgriežas augšup). Tā pati plūsma iet caur dzelzi un spraugu, tāpēc abām kājām un spraugai ir gandrīz vienāda vērtība.

## Nolasiet rezultātus

- **Lauks spraugā** ir 0.543 T. Rokas aprēķins uzskata serdi par vienu magnētisko ķēdi, B = μ0 N I / (g + l / μr), kur g ir sprauga, l ir ceļa garums caur dzelzi un μr ir dzelzs relatīvā caurlaidība; tas dod 0.552 T. Lauks ir nedaudz zemāks par rokas aprēķinu, jo plūsma izliecas ap spraugu (malu izkliede) un daļa plūsmas iet īsceļu pāri logam (noplūde). Ar mazāku spraugu vai smalkāku režģi abi rezultāti tuvojas.
- **Induktivitāte** 100 apgriezienu spolei ir 0.154 H uz metru dziļuma, no lauka uzkrātās enerģijas. Ķēdes formula dod mazāk (0.110 H/m), jo tā skaita tikai plūsmu caur spraugu, nevis plūsmu, kas noplūst garām tai.
- **Vilkme**, kas aizver spraugu, ir B² w / (2 μ0) spraugas virsmai ar platumu w: apmēram 2300 N uz metru jeb 117 N magnētam 50 mm dziļumā.
- **Maksimums** 1.97 T atrodas loga iekšējos stūros, kur plūsma strauji pagriežas. Modelis uzskata dzelzi par lineāru; reāls elektrotehniskais tērauds piesātinās ap 1.5 līdz 2 T, tāpēc vērtības virs tā uztveriet kā brīdinājumu, nevis atbildi.

:::note
Bibliotēkas paši testi palaiž šo piemēru un pārbauda spraugas lauku pret magnētiskās ķēdes formulu katrā PartCraft izmaiņā. Metode, tās atsauces un citas pārbaudes (garš solenoīds, dzelzs serdes solenoīds) ir `magnetostatic2d` galvenē: noklikšķiniet uz tā bibliotēkā.
:::

## Mainiet konstrukciju

1. Noklikšķiniet {{ui:Make a copy}} virs skripta tikai lasīšanai. Kopija tiek saglabāta kopā ar jūsu detaļu.
2. Mainiet vērtību augšdaļā un vēlreiz nospiediet {{key:F5}}. Izmēģiniet:
   - `g = 0.001;` — puse no spraugas: lauks spraugā gandrīz divkāršojas, un tāpat vilkme (tā iet ar B²).
   - `mur = 200;` — sliktāka serde: vairāk ampēru-apgriezienu tiek iztērēti dzelzī.
   - `N = 200;` — divreiz vairāk apgriezienu: divreiz lielāks lauks, četrreiz lielāka induktivitāte.
   - `h = 0.0005;` — smalkāks režģis: precīzāki rezultāti, apmēram četrreiz vairāk laika.

Katra palaišana aizstāj kanvu. Skripta izveidotie mainīgie (piemēram, `Bgap`, `L`, `F`) paliek sarakstā **Variables** jūsu pašu aprēķiniem.

## Modelējiet savu formu

Piemērs veido visu no trim sarakstiem, pa vienai vērtībai uz režģa kvadrātu, ko var izveidot jebkurai formai, zīmētai ar taisnām līnijām pa režģi:

- **Kur ir dzelzs:** `iron` ir patiess kvadrātiem serdes iekšpusē. Piemērs to veido no taisnstūriem: `frame & ~window & ~gap` nozīmē "rāmī, ne logā, ne spraugā".
- **Caurlaidība:** `1 + (mur - 1) * iron` ir 1 gaisā un `mur` dzelzī. Vairākiem materiāliem dodiet savas vērtības tādā pašā veidā.
- **Strāva:** `J` ir strāvas blīvums ampēros uz kvadrātmetru, pozitīvs ārpus ekrāna, negatīvs iekšā. Spolei ir divas puses ar pretējām zīmēm; piemērs aprēķina `J0`, lai viena puse nestu N I.

Tad `r = magnetostatic2d(m, permeability, J)` to atrisina. `r.B` ir plūsmas blīvums katrā kvadrātā (divas kolonnas, x un y), `r.Bmag` tā lielums, `r.energy` uzkrātā enerģija uz metru. `plot(x, y)` zīmē līniju.

Bibliotēka strādā metros, bet skats milimetros, tāpēc lauks, parādīts tā, kā tas ir, tiktu zīmēts tūkstoš reižu par mazu. Piemērs to parāda uz režģa kopijas milimetros (`mm = quadGrid(…)`, tad `show(field(mm, …))`): nokopējiet šīs divas rindas.

Pēc noklusējuma kastes mala tur lauku iekšā: plūsma neizplūst. Padariet kasti vismaz divas vai trīs reizes lielāku nekā magnēts, lai tas nesaspiestu lauku. Simetriskam magnētam var modelēt tikai pusi: `magnetostatic2d` galvene norāda, kuru malas nosacījumu izmantot uz simetrijas līnijas.

## Pastāvīgie magnēti

Otrais piemērs, **Examples** › **Permanent magnet in an iron core: working point, leakage, pull**, ir tā pati serde bez spoles un ar 10 mm kreisās kājas šķēlumu, ko aizstāj magnēts, magnetizēts uz augšu. Palaidiet to ar {{key:F5}}. Tas izdrukā:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Darba punkts.** Magnētu apraksta ar tā **atlikumu** Br (lauks, ko tas saglabā, ja to īsslēdz dzelzs: apmēram 1.2 T spiestam NdFeB magnētam, 0.4 T ferītam) un tā atgriešanās caurlaidību (apmēram 1.05 un 1.1). Spraugas atvēršana iespiež to lejup pa atgriešanās līniju: šeit līdz 1.04 T, ar H, kas vērsts pret B tā iekšienē.
- **Noplūde.** Rokas aprēķins bez noplūdes dod 0.97 T spraugā; modelis dod 0.68 T. Magnēts virza plūsmu ar spēcīgu spiedienu pāri īsam garumam, tāpēc liela daļa tās tieši atgriežas pāri logam, nevis iet caur spraugu. Noplūdes koeficients parāda, cik daudz: šeit 1.53. Iestatiet `g = 0;` slēgtam turētājam: tad magnēts strādā ar novirzi mazāku par pusi procenta no rokas aprēķina.
- **Magnēti jūsu pašu modelī.** Dodiet `magnetostatic2d` magnētus kā `struct('Br', Br)`, kur `Br` ir viena rinda uz režģa kvadrātu ar atlikumu x un y virzienā teslās (nulle ārpus magnētiem), un dodiet magnētu kvadrātiem to atgriešanās caurlaidību caurlaidības sarakstā:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T uz augšu kvadrātos, kur mag ir true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Magnētam, kas magnetizēts leņķī, ievietojiet `Br·cos(angle)` un `Br·sin(angle)` divās kolonnās; gredzenam, kas magnetizēts uz āru, katra kvadrāta virzienu aprēķiniet no tā pozīcijas. `r.H` dod lauka stiprumu H katrā kvadrātā.

Modelis tur magnētu uz tā taisnās atgriešanās līnijas neatkarīgi no tā, cik stipri to vada. Reāls magnēts, ko vada pāri savam ceļgalam (ar lielu spraugu, spēcīgu spoli vai karstumu), zaudē daļu sava stipruma uz visiem laikiem: pārbaudiet darba punktu pret ražotāja līkni šai markai un temperatūrai.

Bibliotēkas testi pārbauda magnētus pret diviem rokas rezultātiem: apaļu magnētu atklātā gaisā (iekšpusē B = Br / (1 + μr)) un magnētu, ko noslēdz dzelzs turētājs (magnētiskā ķēde), abi ar 1 % precizitāti.

## Ko tas vēl nedara

- **Piesātinājums.** Dzelzs ir lineāra: divkāršojiet strāvu, divkāršojiet lauku, bez ierobežojuma.
- **Demagnetizācija.** Magnēti paliek uz sava taisnā atgriešanās līnijas (skat. augstāk).
- **Virpuļstrāvas** un **zudumi** (dzelzs zudumi, vara zudumi).
- **Kustīgas daļas un griezes moments.** Nav rotora, kas griežas statorā, nav griezes momenta pret leņķi.
- **Apaļas formas.** Režģis sastāv no vienādiem kvadrātiem, tāpēc izliektas kontūras izskatās pakāpienveidīgas.
- **3D.** Viss ir kāda garas lietas šķērsgriezums.

Motora konstrukcija (rotējošs rotors, griezes moments un zudumi 2D) tiek apskatīta nākamai versijai. Skat. [Vēl nav izveidots](topic:not-built-yet).
