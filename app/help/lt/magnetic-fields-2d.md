---
title: Magnetiniai laukai 2D (pamoka)
summary: Apskaičiuokite elektromagneto ar nuolatinio magneto magnetinį lauką su analizės biblioteka: paleiskite pavyzdžius, perskaitykite magnetinės indukcijos tankį, tarpo lauką, induktyvumą ir trauką, pakeiskite konstrukciją ir sukurkite savo ritių, magnetų ir geležies modelį.
keywords: magnetinis, magnetostatika, magnetinis laukas, magnetinės indukcijos tankis, tesla, elektromagnetas, solenoidas, ritė, amperų apsisukimai, geležinė šerdis, oro tarpas, magnetinis pralaidumas, induktyvumas, magnetinė jėga, reliuktancija, magnetinė grandinė, vektorinis potencialas, elektromagnetika, baigtiniai elementai, fem, variklis, pavara, transformatorius, magnetostatic2d, nuolatinis magnetas, neodimis, ndfeb, ferritas, liekamasis magnetizmas, darbo taškas, atgalinis, nuotėkis, laikantysis magnetas
from: 215f6601
---

PartCraft analizės biblioteka gali apskaičiuoti ritių ir geležies magnetinį lauką 2D: ilgo daikto, kuris išilgai vienodas, skerspjūvį, pvz., elektromagneto, transformatoriaus šerdį, srovės juostą ar variklio skerspjūvį. Ši pamoka paleidžia bibliotekos elektromagneto pavyzdį, perskaito, ką jis sako, jį pakeičia, parodo, kaip modeliuoti savo formą, o tada prideda nuolatinį magnetą.

Ji naudoja Scenarijų darbo sritį ir [analizės biblioteką](topic:craftscript-library). Norint sekti pamoką, CraftScript kalbos mokėti nereikia; pavyzdys nurodo, ką daro kiekviena eilutė.

## Kas modeliuojama

C formos geležinė šerdis, 100 × 80 mm išorėje ir 20 mm storio, su 2 mm oro tarpu dešinėje kojoje. Ritė iš 100 apsisukimų, kuria teka 10 A (1000 amperų apsisukimų), suvyniota aplink kairiąją koją. Viskas ilga ekrano kryptimi, todėl atsakymai pateikiami **vienam metrui gylio**: tikram magnetui padauginkite iš tikro gylio.

Bibliotekos `magnetostatic2d` sprendžia magnetinį vektorinį potencialą 1 mm kvadratų tinklelyje oro dėžėje aplink magnetą, o tada iš jo apskaičiuoja magnetinės indukcijos tankį **B** (teslomis).

## Paleiskite pavyzdį

1. Įrankių juostos kairėje, lauke **Darbo sritis**, pasirinkite **Scenarijus**.
2. Atidarykite scenarijų skydelio skirtuką **Biblioteka**, tada **Pavyzdžiai** › **Elektromagnetas: laukas, tarpas, induktyvumas**.
3. Spustelėkite {{ui:Atidaryti (tik skaitymui)}}, tada paspauskite {{key:F5}}.

Per sekundę ar dvi drobėje rodomas magnetinės indukcijos tankis, o konsolė išveda:

```
B tarpe 0.5427 T; magnetinė grandinė 0.5516 T (-1.6 %: išsisklaidymas ir nuotėkis)
induktyvumas 0.1539 H vienam metrui gylio; grandinė duoda 0.1103 H/m, neįskaitydama srauto, nutekančio pro tarpą
kaupiama energija 7.694 J/m; |B| smailė 1.97 T lango vidinėse kampuose (tikras plienas ten prisotintų)
trauka per tarpą apie 2343 N vienam metrui gylio (117.2 N 50 mm gyliui)
```

Grafikas po drobe rodo vertikalią magnetinės indukcijos dedamąją B_y išilgai šerdies vidurio linijos iš kairės į dešinę: apie −0.55 T kairėje kojoje (srautas teka žemyn), beveik nieko lange ir +0.55 T dešinėje kojoje bei per tarpą (srautas grįžta aukštyn). Tas pats srautas teka per geležį ir tarpą, todėl abi kojos ir tarpas rodo beveik tą pačią reikšmę.

## Skaitykite rezultatus

- **Laukas tarpe** yra 0.543 T. Skaičiavimas rankomis šerdį laiko viena magnetine grandine, B = μ0 N I / (g + l / μr), kur g – tarpas, l – kelio ilgis per geležį, o μr – geležies santykinis magnetinis pralaidumas; jis duoda 0.552 T. Laukas šiek tiek mažesnis nei skaičiavimas rankomis, nes srautas išsipučia aplink tarpą (išsisklaidymas), o dalis srauto trumpai eina per langą (nuotėkis). Mažesniu tarpu ar smulkesniu tinkleliu abi reikšmės artėja viena prie kitos.
- **Induktyvumas** 100 apsisukimų ritės yra 0.154 H vienam metrui gylio, pagal lauke kaupiamą energiją. Grandinės formulė duoda mažiau (0.110 H/m), nes skaičiuoja tik srautą per tarpą, o ne srautą, kuris nutekėja pro jį.
- **Trauka**, kuri uždaro tarpą, yra B² w / (2 μ0), kai tarpo paviršius yra w pločio: apie 2300 N vienam metrui arba 117 N 50 mm gylio magnetui.
- **Smailė** 1.97 T yra lango vidinių kampų vietose, kur srautas staigiai pasisuka. Modelis geležį laiko tiesine; tikras elektrotechninis plienas prisotinamas apie 1.5–2 T, todėl didesnes reikšmes laikykite įspėjimu, o ne atsakymu.

:::note
Bibliotekos testai paleidžia šį pavyzdį ir kiekvieno PartCraft pakeitimo metu tikrina lauką tarpe pagal magnetinės grandinės formulę. Metodas, jo nuorodos ir kiti patikrinimai (ilgas solenoidas, solenoidas su geležine šerdimi) yra `magnetostatic2d` antraštėje: spustelėkite ją bibliotekoje.
:::

## Pakeiskite konstrukciją

1. Spustelėkite {{ui:Sukurti kopiją}} virš skaitymui skirto scenarijaus. Kopija įrašoma kartu su jūsų detale.
2. Pakeiskite reikšmę viršuje ir vėl paspauskite {{key:F5}}. Išbandykite:
   - `g = 0.001;` — pusė tarpo: lauko tarpe beveik padvigubėja, lygiai taip pat ir trauka (ji kinta kartu su B²).
   - `mur = 200;` — prastesnė šerdis: daugiau amperų apsisukimų išeikvojama geležyje.
   - `N = 200;` — dvigubai daugiau apsisukimų: dvigubai didesnis laukas, keturis kartus didesnis induktyvumas.
   - `h = 0.0005;` — smulkesnis tinklelis: tikslesni atsakymai, maždaug keturis kartus daugiau laiko.

Kiekvienas paleidimas pakeičia drobę. Scenarijaus sukurti kintamieji (pvz., `Bgap`, `L`, `F`) lieka sąraše **Kintamieji**, kad galėtumėte atlikti savo skaičiavimus.

## Sukurkite savo formą

Pavyzdys viską sukuria iš trijų sąrašų, po vieną reikšmę kiekvienam tinklelio kvadratui; juos galite sudaryti bet kuriai formai, nubrėžtai tiesiomis linijomis išilgai tinklelio:

- **Kur yra geležis:** `iron` yra tiesa kvadratams šerdies viduje. Pavyzdys sudaro ją iš stačiakampių: `frame & ~window & ~gap` reiškia „rėme, ne lange, ne tarpe“.
- **Magnetinis pralaidumas:** `1 + (mur - 1) * iron` yra 1 ore ir `mur` geležyje. Keliems medžiagoms tuo pačiu būdu suteikite jų reikšmes.
- **Srovė:** `J` yra srovės tankis amperais kvadratiniam metrui, teigiamas – iš ekrano, neigiamas – į ekraną. Ritė turi dvi puses su priešingais ženklais; pavyzdys apskaičiuoja `J0` taip, kad vienoje pusėje tekėtų N I.

Tada `r = magnetostatic2d(m, permeability, J)` ją išsprendžia. `r.B` yra magnetinės indukcijos tankis kiekviename kvadrate (du stulpeliai, x ir y), `r.Bmag` – jo dydis, `r.energy` – kaupiama energija vienam metrui. `plot(x, y)` nubrėžia liniją.

Biblioteka dirba metrais, o vaizdas – milimetrais, todėl laukas, rodomas kaip yra, būtų nubrėžtas tūkstantį kartų per mažas. Pavyzdys jį rodo milimetrų tinklelio kopijoje (`mm = quadGrid(…)`, tada `show(field(mm, …))`): nukopijuokite tas dvi eilutes.

Pagal numatymą dėžės kraštas laiko lauką viduje: jokio srauto iš jo neišeina. Padarykite dėžę bent du ar tris kartus didesnę nei magnetas, kad tai neiškreiptų lauko. Simetriškam magnetui galite modeliuoti pusę jo: `magnetostatic2d` antraštėje nurodyta, kokią kraštinę sąlygą naudoti simetrijos linijoje.

## Nuolatiniai magnetai

Antras pavyzdys, **Pavyzdžiai** › **Nuolatinis magnetas geležinėje šerdyje: darbo taškas, nuotėkis, trauka**, yra ta pati šerdis, nuo kurios nuimta ritė, o 10 mm kairiosios kojos dalis pakeista magnetu, namagnetintu aukštyn. Paleiskite jį su {{key:F5}}. Jis išveda:

```
magnetas dirba esant B = 1.036 T, H = -124 kA/m (jo atgalinėje linijoje B = Br + μ0 μr H)
B tarpe 0.6778 T; magnetinė grandinė be nuotėkio 0.9692 T (-30.1 %)
nuotėkio koeficientas 1.53: iš magneto išeinančio srauto 65 % kerta tarpą tarp polių paviršių
trauka per tarpą apie 3656 N vienam metrui gylio (182.8 N 50 mm gyliui)
```

- **Darbo taškas.** Magnetas apibūdinamas savo **liekamąja indukcija** Br (remanencija – lauku, kurį jis išlaiko, kai yra trumpai sujungtas geležimi: apie 1.2 T spekuliniam NdFeB magnetui, 0.4 T feritui) ir savo atgaliniu pralaidumu (apie 1.05 ir 1.1). Atvėrus tarpą, jis nuslenka žemyn savo atgaline linija: čia iki 1.04 T, o H magneto viduje nukreiptas prieš B.
- **Nuotėkis.** Skaičiavimas rankomis be nuotėkio duoda 0.97 T tarpe; modelis – 0.68 T. Magnetas savo srautą varo stipria jėga trumpame ilgyje, todėl didelė jo dalis tiesiai grįžta per langą, o ne per tarpą. Nuotėkio koeficientas parodo, kiek: čia 1.53. Uždarai grandinei nustatykite `g = 0;`: tada magnetas dirba per pusę procento nuo skaičiavimo rankomis.
- **Magnetai jūsų modelyje.** Perduokite `magnetostatic2d` magnetus kaip `struct('Br', Br)`, kur `Br` turi po vieną eilutę kiekvienam tinklelio kvadratui, su liekamąja indukcija išilgai x ir y teslomis (nulis už magnetų), o magnetų kvadratams pralaidumo sąraše nurodykite jų atgalinį pralaidumą:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T aukštyn kvadratuose, kur mag yra tiesa
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Magnetui, namagnetintam kampu, į du stulpelius įrašykite `Br·cos(angle)` ir `Br·sin(angle)`; žiedui, namagnetintam į išorę, kiekvieno kvadrato kryptį apskaičiuokite pagal jo padėtį. `r.H` pateikia lauko stiprumą H kiekviename kvadrate.

Modelis magnetą laiko tiesioje atgalinėje linijoje, kad ir kaip stipriai jis būtų varomas. Tikras magnetas, išvarytas už savo lūžio taško (dideliu tarpu, stipria ritė ar karščiu), prarado dalį stiprumo visam laikui; darbo tašką patikrinkite pagal gamintojo kreivę tam gaminiui ir temperatūrai.

Bibliotekos testai tikrina magnetus pagal du skaičiavimus rankomis: apvalų magnetą atviroje ore (viduje B = Br / (1 + μr)) ir magnetą, uždarytą geležiniu laikikliu (magnetinė grandinė), abu su 1 % tikslumu.

## Ko dar nedaro

- **Prisotinimas.** Geležis tiesinė: dvigubai didesnė srovė – dvigubai didesnis laukas, be ribos.
- **Išmagnetinimas.** Magnetai lieka tiesioje atgalinėje linijoje (žr. aukščiau).
- **Sūkurinės srovės** ir **nuostoliai** (geležies nuostoliai, vario nuostoliai).
- **Judančios dalys ir sukimo momentas.** Nėra rotoriaus, besisukančio statoriuje; nėra sukimo momento priklausomai nuo kampo.
- **Apvalios formos.** Tinklelis sudarytas iš vienodų kvadratų, todėl lenkti kontūrai išeina laipteliais.
- **3D.** Viskas yra ilgo daikto skerspjūvis.

Variklio projektavimas (besisukantis rotorius, sukimo momentas ir nuostoliai 2D) svarstomas vėlesnei versijai. Žr. [Dar neįgyvendinta](topic:not-built-yet).
