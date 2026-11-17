---
title: Šiluma, šiluminis įtempis ir stabilumo netekimas
summary: Raskite detalės temperatūras pagal fiksuotas temperatūras, šilumos srauto tankį, šilumos galią, konvekciją ir spinduliuotę (nusistovėjusią ar laike), apkraukite įtempių tyrimą temperatūros pokyčiu ir raskite apkrovą, kurioje lieknas detalė praranda stabilumą, su tuo, ką kiekvienas metodas gali ir ko negali parodyti.
keywords: šiluma, šilumos perdavimas, temperatūra, laidumas, konvekcija, plėvelės koeficientas, spinduliuotė, emisingumas, šilumos srauto tankis, šilumos galia, šilumos generavimas, šilumos išvedimo elementas, pereinamasis režimas, laikas, aušinimas, kaitinimas, Crank–Nicolson, netiesioginis Oilerio metodas, šilumos balansas, šiluminis įtempis, šiluminis įtempis laike, pereinamasis šiluminis įtempis, grūdinimas, šiluminis smūgis, įtempių istorija, blogiausias laikas, šiluminis plėtimasis, plėtimosi koeficientas, stabilumo netekimas, Oilerio stabilumo netekimas, apkrovos koeficientas, kritinė apkrova, kolona, lieknas, savoji reikšmė
from: 1a1b7545
---

Šie tyrimai veikia Simuliacijos darbo srityje, šalia statinio įtempio ir natūraliųjų dažnių (žr. [Patikrinkite įtempį ir poslinkį](topic:simulation)). Pasirinkite juos skydelio laukelyje **Tipas**. Jie naudoja tą patį mažųjų kubelių tinklą ir tą pačią medžiagų sąrašą; kiekviena bibliotekos medžiaga turi šilumos laidumą, savitąją šiluminę talpą ir plėtimosi koeficientą (įprastos žinyninės vertės, rodomos skyriuje **Ypatybės**).

## Šiluma: kur dingsta šiluma?

1. Pasirinkite **Šiluminis (šilumos perdavimas)** kaip **Tipas**.
2. Pridėkite šilumines sąlygas iš skydelio sąrašo **Pridėti**, tada spustelėkite jų paviršius (kaip ir atramoms bei apkrovoms):
   - **Fiksuota temperatūra**: paviršius laikomas tam tikroje temperatūroje, °C.
   - **Šilumos srauto tankis**: W/m², tekantis į paviršių (neigiamas – iš jo). Jis veikia tikrąjį paviršiaus plotą, net ten, kur kubeliai sudaro laiptelius.
   - **Šilumos galia**: bendra vatais, paskirstyta per pasirinktus paviršius pagal plotą. Naudokite šildytuvui ar lustui su žinoma galia.
   - **Konvekcija**: oras ar skystis, kurio temperatūra nurodyta, išneša šilumą h W/(m²·K). Įprasti h: nejudantis oras 5–10, ventiliatorius 25–100, vanduo 500–10 000. PartCraft neskaičiuoja h: šiame tyrime skysčio srauto nėra.
   - **Spinduliuotė**: paviršius spinduliuoja į aplinką, kurios temperatūra nurodyta, su emisingumu nuo 0 iki 1. Ji **linearizuota** (spinduliuotė užrašoma kaip koeficientas, priklausantis nuo temperatūros, ir perskaičiuojama, kol nusistovi) ir eina tik į aplinką: paviršiai tarpusavyje šilumos neiškeičia.
3. **Šilumos generavimas** (W/m³) kaitina visą detalę iš vidaus, pavyzdžiui, varžinę detalę.
4. Paspauskite **Skaičiuoti**. Detalė nuspalvinama pagal temperatūrą; pasirinkite **Šilumos srauto tankis** rodyme **Rodyti**, kad pamatytumėte, kur teka šiluma. Nukreipkite žymeklį į detalę, kad nuskaitytumėte abu.

Nusistovėjusiam šilumos srautui reikia, kur šiluma dingtų: bent vienos fiksuotos temperatūros, konvekcijos ar spinduliuotės. Detalė, kuri tik priima šilumą, nusistovėjusios būsenos neturi; tokiu atveju padarykite ją pereinamąją.

Lentelėje pateikiamos žemiausia ir aukščiausia temperatūra bei kur jos yra, didžiausias šilumos srauto tankis ir **šilumos balansas**: šiluma, įeinanti ar išeinanti per kiekvieną sąlygą (fiksuota temperatūra skaičiuoja, kiek ji turi tiekti ar sugerti), susidariusi šiluma, įeinančių ir išeinančių bendros sumos ir **nebalansas**. Nebalansas turėtų būti labai maža įeinančios šilumos dalis; didelis reiškia, kad rezultatui negalima pasitikėti.

### Laikui bėgant (pereinamasis)

Pažymėkite **Pereinamasis** ir nurodykite **Pradinę temperatūrą** (visa detalė prasideda nuo jos), **Laiko intervalą** ir **Laiko žingsnių** skaičių. **Implicit Euler** yra patikimas; **Crank–Nicolson** tikslesnis tiems patiems žingsniams, bet po staigaus pokyčio gali banguoti. Išsprendę, vilkite **Laiko** slankiklį, kad pamatytumėte temperatūras kiekvienu momentu (spalvų skalė išlieka ta pati visiems momentams). Šilumos balanse tuomet įtraukiama kaupiama šiluma.

## Šiluminis įtempis: ką temperatūros pokytis daro detalei?

Studijoje **Statinis įtempis** (ar **Stabilumo netekimas**) nustatykite **Šiluminė apkrova**:

- **Vienodas temperatūros pokytis**: visa detalė įšyla (ar atvėsta, su neigiamu skaičiumi) per tiek kelvinų.
- **Temperatūros iš šiluminių sąlygų**: pridėkite šilumines sąlygas tai pačiai studijai; pirmiausia išsprendžiamos nusistovėjusios temperatūros tame pačiame tinkle, tuomet detalė plečiasi per α·(T − **temperatūrą be įtempių**).
- **Temperatūros laike (pereinamasis skaičiavimas)**: pridėkite šilumines sąlygas, tuomet nurodykite **Pradinę temperatūrą**, **Laiko intervalą**, **Laiko žingsnius** ir **Laiko žingsniavimą**, kaip pereinamajam šiluminiam tyrimui. Temperatūros išsprendžiamos laike tame pačiame tinkle (kubeliai ar tetraedrai), o statinis sprendimas kiekvieno momento temperatūroms duoda to momento įtempį. **Įtempis, kai**:
  - **Blogiausias laikas** (pradžia): **Įtempių sprendimai** išdėsto momentus tolygiai per visą skaičiavimą, įskaitant pradžią (pagal nutylėjimą 21, daugiausia 51). Rezultatai atsidaro momente su didžiausiu von Mizeso įtempiu; lentelėje jis nurodomas, mažas grafikas rodo įtempio viršūnę laike, o **Laiko** slankiklis rodo įtempį kiekvienam išspręstam momentui (spalvų skalė išlieka blogiausio momento).
  - **Vienas pasirinktas laikas**: vienas momentas, laiko žingsnis, artimiausias jūsų nurodytam **Laikui (s)**. Stabilumo netekimo studija visada naudoja vieną pasirinktą laiką (skaičiavimo pabaigą, nebent nustatote kitą).

Grūdinama (įmerkiama iš karšto į šaltą) ar staiga kaitinama detalė labiausiai įtempiama tada, kai vidus ir paviršius skiriasi labiausiai: dažnai pat pradžioje. Nuolatinė temperatūra taikoma nuo pirmos akimirkos kaip staigus pokytis, todėl įtempis pačioje pradžioje priklauso nuo elemento dydžio (tik keli elementai pamato pokytį). Skaitykite tai kaip „labai aukštas“ ir žiūrėkite slankiklio kitus momentus, kur tinklas išsprendžia vertes. Įtempis yra kvazistatinis: be inercijos, be virpesių dėl staigaus pokyčio.

Detalė, kuri gali laisvai plėstis, neturi šiluminio įtempio: ją pakanka laikyti tiek, kad ji nejudėtų (pavyzdžiui, trys be trinties paviršiai statmenais kampais). Įspaustas tarp dviejų sienų, ji suspaudžiama: plieninis strypas, įkaitintas 50 K tarp standžių sienų, patiria apie 117 MPa. Šiluminės apkrovos subalansuoja pačios save, todėl reakcijos vis tiek subalansuoja tik mechanines apkrovas.

## Stabilumo netekimas (buckling): kada lieknas detalė praranda stabilumą?

1. Pasirinkite **Stabilumo netekimas (tiesinis)** kaip **Tipas** ir pridėkite atramas bei apkrovas kaip statinei studijai.
2. Nustatykite **Ieškomi apkrovos koeficientai** (kiek stabilumo netekimo formų).
3. Paspauskite **Skaičiuoti**. Kiekviena forma turi **apkrovos koeficientą**: kartotinį, kuriuo jūsų apkrovos turi būti padidintos, kad idealioji detalė netektų stabilumo. Koeficientas 3 reiškia tris kartus didesnes apkrovas; **apkrovos koeficientas mažesnis nei 1 reiškia, kad detalė netenka stabilumo jūsų pritaikytoms apkrovoms**. Lentelėje taip pat pateikiama bendra apkrova kiekvienam koeficientui. Formos vaizdas parodo, kaip ji netenka stabilumo (jo dydis nieko nereiškia).

**Tiesinis stabilumo netekimo skaičiavimas pervertina tikrąją kritinę apkrovą.** Jis daro prielaidą apie idealią detalę: visiškai tiesią, be liekamųjų įtempių ir tamprią. Tikros detalės turi nedidelių netobulumų ir gali pirma pasiekti takumo ribą, o plonasienės lukštinės konstrukcijos gali netekti stabilumo esant tik daliai tiesinės vertės. Naudokite didelę atsargą ir laikykite, kad plonam lukštui apkrovos koeficientas artimas 3 ar mažesnis yra įspėjimas.

## Kiek tuo pasitikėti

PartCraft tikrina šiuos sprendiklius pagal rankinius skaičiavimus: strypą tarp dviejų temperatūrų (tiksliai), aušinimo šonkaulį (per 0.3 K), plokštę, kuri pati save kaitina (tiksliai), kubą, kuris laike atvėsta (per 0.1 % su Crank–Nicolson), strypą, staiga įkaitintą viename gale, laisvą įkaitintą strypą (įtempio nėra, ΔL = αLΔT), strypą, įspaustą tarp sienų (σ = −EαΔT), grūdinamą plokštę laike prieš klasikinį eilutinį sprendinį (per 1 % kubeliuose, 2.1 % tetraedruose plokštės centre; 0.5 % jos paviršiuje), ilgo skaičiavimo paskutinį momentą prieš nusistovėjusį šiluminį įtempį (tas pats iki milijonosios dalies) ir Oilerio kolonas (per 1 % fiksuota–laisva, 1.5 % sąnariškai–sąnariškai). Atsiminkite:

- **Pastovios medžiagos vertės.** Laidumas, savitoji šiluminė talpa ir plėtimasis čia nekinta su temperatūra; keliasdešimties laipsnių temperatūroje jie gali pasikeisti 10–30 %. Standumas taip pat nekinta.
- **Įtempis laike yra kvazistatinis ir tamprusis**: kiekvienas momentas yra statinis sprendimas (be inercijos), be takumo, todėl grūdinimas, kuris paviršiuje sukeltų takumą, rodo įtempį virš takumo ribos.
- **Konvekcijos koeficientai yra jūsų įvestis**, neskaičiuojami iš oro ar vandens srauto.
- **Nėra kontaktinio pasipriešinimo**: detalė yra vienas kietasis kūnas.
- **Tik tiesinis stabilumo netekimas**: nėra netobulumų, takumo ir elgesio po stabilumo netekimo.
- Kubų laiptelių ir aštrių vidinių kampų poveikis šiluminiams įtempiams toks pat kaip kitiems įtempiams (žr. [Patikrinkite įtempį ir poslinkį](topic:simulation)).
- Tai laboratorinė versija: svarbias detales patikrinkite kitu būdu.

## Susiję

- [Patikrinkite įtempį ir poslinkį (Simuliacija)](topic:simulation)
- [Kas dar neįgyvendinta](topic:not-built-yet)
