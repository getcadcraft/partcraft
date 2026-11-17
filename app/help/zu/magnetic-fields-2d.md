---
title: Izinkambu zamagnethi ngo-2-D (isifundo)
summary: Bala insimu yamagnethi yesigxobo kagesi noma ignethi esiqinile ngomtapo wokuhlaziya: qalisa izibonelo, funda i-flux density, insimu esikhaleni, i-inductance nokudonsa, shintsha idizayini, bese wakha imodeli yakho yamakhoyili, amagnethi nensimbi.
keywords: magnetic, magnetostatics, magnetic field, flux density, tesla, electromagnet, solenoid, coil, ampere turns, iron core, air gap, permeability, inductance, magnetic force, reluctance, magnetic circuit, vector potential, electromagnetics, finite element, fem, motor, actuator, transformer, magnetostatic2d, permanent magnet, neodymium, ndfeb, ferrite, remanence, working point, recoil, leakage, holding magnet
from: 215f6601
---

Umtapo wokuhlaziya we-PartCraft ungabala insimu yamagnethi yamakhoyili nensimbi ngo-2-D: ukugawula kwento ende futhi efanayo ubude bayo, njengesigxobo kagesi, igeneyi yesigxobo, ibhasi noma ukugawula kwemoto. Lesi sifundo siqalisa isibonelo sesigxobo kagesi somtapo, sifunde okusho, sikushintshe, sikutshele ukuthi ungakhiqiza kanjani imodeli yakho yesimo, bese ungeza ignethi esiqinile.

Isebenzisa indawo yeScript kanye no[mtapo wokuhlaziya](topic:craftscript-library). Awudingi ukwazi ulimi lwe-CraftScript ukuze ulandele; isibonelo sitshela ukuthi umugqa ngamunye wenzani.

## Okumodelwayo

Umgodi we-C wensimbi, 100 × 80 mm ngaphandle futhi 20 mm ubukhulu, nesikhala somoya esingu-2 mm emlenzeni wayo wokudla. Ikhoyili yamaturns angu-100 ephethe i-10 A (1000 ampere-turns) ihlanganiswa ozungeze umlenzi wayo wesobunxele. Konke kude endaweni ephuma esikrinini, ngakho izimpendulo zi-**ngemitha yokujula ngayinye**: phindaphinda ngokujula kwangempela ukuze uthole ignethi yangempela.

I-`magnetostatic2d` yomtapo ixazulula i-vector potential yamagnethi ku-grid yesikwele se-1 mm kubhokisi lomoya ozungeze ignethi, bese ibala i-flux density **B** (ngamatesla) kuyo.

## Qalisa isibonelo

1. Khetha **Script** kubhokisi le-**Workspace** ngakwesokunxele kwe-toolbar.
2. Vula ithebhu ye-**Library** yepaneli ye-script, bese **Examples** › **Electromagnet: field, gap, inductance**.
3. Chofoza {{ui:Vula (ukufunda kuphela)}}, bese ucindezela {{key:F5}}.

Ngomzuzwana noma amabili i-canvas ibonisa i-flux density, nekhonsoli iphrinta:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Ipulothi engaphansi kwe-canvas ingumugqa we-B_y, i-flux density evundleni, phakathi komugqa wesigxobo, isuka kwesobunxele kuya kwesokudla: cishe −0.55 T emlenzeni wesobunxele (i-flux ihamba iyehla), cishe akukho lutho ewindini, kanti +0.55 T emlenzeni wesokudla nasekuqhubeni kwesikhala (i-flux ibuya ikhuphuka). I-flux efanayo idlula ensimbini nasesikhaleni, ngakho imilenze emibili nesikhala zibonisa inani elifanayo cishe.

## Funda imiphumela

- **Insimu esikhaleni** ingu-0.543 T. Ukubala ngesandla kuthatha igigo njengesifunda samagnethi esisodwa, B = μ0 N I / (g + l / μr), lapho g kuyisikhala, l umugqa ohamba ngensimbi kanye ne-μr yensimbi ehlobene; ikhipha 0.552 T. Insimu ingaphansi kancane kokubalwe ngesandla ngoba i-flux iphuma endaweni yesikhala (fringing) nengxenye ye-flux ithatha indlela emfishane ewindini (leakage). Ngesikhala esincane noma i-grid eshelelisekile, bayasondelana.
- **I-inductance** yekhoyili ye-100-turn ingu-0.154 H ngemitha yokujula, isuka kumandla agcinwe enkambweni. Ifomula yesifunda inika ngaphansi (0.110 H/m) ngoba ibala kuphela i-flux edlula esikhaleni, hhayi ledlula ngaphandle kwayo.
- **Ukudonsa** okuvala isikhala ngu-B² w / (2 μ0) lapho nobubanzi bobuso besikhala bungu w: cishe 2300 N ngemitha, noma 117 N ngegnethi ejulile ngo-50 mm.
- **Ukuphakama** kwe-1.97 T kuhlala emabhendeni angaphakathi ewindi, lapho i-flux iguquka ngokuqinile. Imodeli ithatha insimbi njengelinear; insimbi yangempela yomsebenzi ihlala ngo-1.5 kuya ku-2 T, ngakho bheka izinani ezingaphezulu kwalokho njengesixwayiso, hhayi impendulo.

:::note
Izivivinyo zomtapo zisebenzisa lesi sibonelo zihlole insimu yesikhala ngefomula yesifunda samagnethi nsuku zonke lapho i-PartCraft ishintshwa. Indlela, izinkomba zayo nezinye izihlolo (isolenoyidi ende, isolenoyidi enensimbi) zisemkhawulweni we-`magnetostatic2d`: chofoza kuyo emtapweni.
:::

## Shintsha idizayini

1. Chofoza {{ui:Yenza ikopi}} ngaphezulu kwe-script efundeka kuphela. Ikopi igcinwa nengxenye yakho.
2. Shintsha inani eliseduze kwesiqalo bese ucindezela {{key:F5}} futhi. Zama:
   - `g = 0.001;` — isikhala esingu-half: insimu yesikhala icishe iphindeke kabili, kanjalo nokudonsa (kuhambisana ne-B²).
   - `mur = 200;` — inhlanganisela ebuthakathaka: amaturns amaningi asetshenziswa ensimbini.
   - `N = 200;` — amaturns amabili: insimu amabili, i-inductance amane.
   - `h = 0.0005;` — i-grid enhle kakhulu: izimpendulo ezisondele, cishe isikhathi esiphindwe amane.

Ukuqalisa ngalunye kushintsha i-canvas. Izinguquguqukayo ezenziwe yi-script (njengo-`Bgap`, `L`, `F`) zihlala ohlwini lwe-**Variables** zokubala kwakho.

## Qhubeka wakhe imodeli yakho yesimo

Isibonelo sakha konke ngohlu lwezintathu, inani elilodwa ngesikwele se-grid ngasinye, ongalenza noma yisiphi isimo esidwetshwe ngemigqa eqondile ehambisana ne-grid:

- **Lapho kukhona insimbi:** `iron` iyiqiniso kuzikwele ezingaphakathi kwegigo. Isibonelo sakha kumakhonjana: `frame & ~window & ~gap` kusho "ku-frame, hhayi ewindini, hhayi esikhaleni".
- **I-permeability:** `1 + (mur - 1) * iron` ingu-1 emoyeni nango-`mur` ensimbini. Izinto eziningi zithola amanani azo ngendlela efanayo.
- **Ukuqukethwe kwamanje:** `J` kuyi-current density ngama-ampere ngomitha yesikwele, okuhle ukuphuma esikrinini, okubi ukungena kuso. Ikhoyili inezinhlangothi ezimbili ezinezimpawu eziphambene; isibonelo sibala `J0` ukuze uhlangothi olulodwa lwethwele N I.

Bese `r = magnetostatic2d(m, permeability, J)` ixazulula. `r.B` kuyi-flux density kuso ngalinye isikwele (imigqa emibili, x no-y), `r.Bmag` ubukhulu bayo, `r.energy` amandla agcinwe ngemitha. `plot(x, y)` idweba umugqa.

Umtapo usebenza ngemitha, nokubuka ngamamilimitha, ngakho insimu eboniswa njengoba iyiyo ibonakala ingaphansi kakhulu ngamakhulu ayinkulungwane. Isibonelo sibonisa lokho ku-kopi ye-grid ngamamilimitha (`mm = quadGrid(…)`, bese `show(field(mm, …))`): kopisha lezi zimugqa ezimbili.

Ngokuzenzakalelayo umphetho webhokisi ugcina insimu ingaphumi: ayikho i-flux ephuma kuyo. Yenza ibhokisi okungenani libe kabili noma kathathu usayizi wegnethi ukuze lokhu kungacindezeli insimu. Ngegnethi ehambisanayo ungamodela ingxenye yayo: ikhanda le-`magnetostatic2d` lisho umbandela womphetho ongasetshenziswa emgqeni wokuhambisana.

## Amagnethi aqinile

Isibonelo sesibili, **Examples** › **Permanent magnet in an iron core: working point, leakage, pull**, siyisigxobo esifanayo kodwa ikhoyili isusiwe, kanti isilayisi se-10 mm somlenzi wesobunxele sishintshelwe ignethi, eyenziwe ngamagnethi ephezulu. Yiqalise nge-{{key:F5}}. Iphrinta:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Indawo yokusebenza.** Ignethi ichazwa ngo-**remanence** Br (insimu eyigcina lapho ifakwe ensimbini: cishe 1.2 T ye-NdFeB esintered, 0.4 T ye-ferrite) nango-recoil permeability yayo (cishe 1.05 no-1.1). Ukuvula isikhala kuyiphonsa phansi emgqeni wayo wokubuya: lapha ibe ku-1.04 T, ne-H ibheke ngaphambili ye-B ngaphakathi kuyo.
- **I-Leakage.** Ukubalwa ngesandla ngaphandle kokuvuza kunika 0.97 T esikhaleni; imodeli inika 0.68 T. Ignethi iqhuba i-flux yayo ngomthwalo onamandla phezu kobude obufushane, ngakho okuningi kuya ngqo ngaphezu kwewindi kunokudlula esikhaleni. I-leakage factor isho ukuthi kangakanani: 1.53 lapha. Setha `g = 0;` kwe-keeper evaliwe: ignethi isebenza ngaphakathi kuhhafu ngekhulu kwesibalo sangesandla.
- **Amagnethi emodelini yakho.** Nika `magnetostatic2d` amagnethi njenge `struct('Br', Br)`, lapho `Br` inomugqa owodwa ngesikwele se-grid nge-remanence ngokuthi x no-y ngamatesla (ziro ngaphandle kwamagnethi), bese unika izikwele zamagnethi i-recoil permeability yazo kuhlu lwe-permeability:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T phezulu emasikweni lapho mag kuyiqiniso
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Ngegnethi emagnetiswe ngengeli, beka `Br·cos(angle)` no-`Br·sin(angle)` emakholomu amabili; ngendandatho emagnetiswe ephumela ngaphandle, bala isiqondiso sesikwele ngasinye ngokuya kwendawo yaso. I-`r.H` inika amandla ensimu H kuso ngalinye isikwele.

Imodeli igcina ignethi emgqeni wayo oqondile wokubuya noma ingakanani ukucindezelwa kwayo. Ignethi yangempela eqhutshwe ngaphezu kwendawo yayo yokugoba (ngesikhala esikhulu, ikhoyili enamandla noma ukushisa) ilahlekelwa yingxenye yamandla ayo ngokuphelele; hlola indawo yokusebenza ngevini yomkhiqizi yalo mkhawulo nokushisa.

Izivivinyo zomtapo zihlola amagnethi ngemiphumela yesandla emibili: ignethi eyindilinga emoyeni ovulekile (ngaphakathi kwayo, B = Br / (1 + μr)) negnethi evalwe yiyoki yensimbi (isifunda samagnethi), zombili ngaphakathi kuka-1 %.

## Okungakenzi okwamanje

- **Ukugcwala.** Insimbi iyilinear: phinda ikhulu kabili ikhoyili, insimu iphindeke kabili, ngaphandle komkhawulo.
- **Ukuphuca amandla.** Amagnethi ahlala emgqeni wawo oqondile wokubuya (bheka ngenhla).
- **Ama-eddy currents** nokulahlekelwa (ukulahlekelwa kwensimbi, ukulahlekelwa kwethusi).
- **Izingxenye ezinyakazayo nokuphenduka.** Akukho rotor ejikelezayo ku-stator, akukho torque ngengeli.
- **Izimo ezijikelezayo.** I-grid yenziwe ngezikwele ezilinganayo, ngakho imiphetho egobile iphuma ibhodlwe.
- **3-D.** Konke kuyisigaxa sento ende.

Ukwakhiwa kwemoto (i-rotor ejikelezayo, i-torque nokulahlekelwa ku-2-D) kuhlolwa ngenguqulo ezayo. Bheka [Akukakwakhiwa](topic:not-built-yet).
