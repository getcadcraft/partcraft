---
title: Saxanka birta: flanges iyo naqshadda balaadhsan
summary: Bilow qayb saxanka birta ah sawir-gacmeed (saxan fidsan ama profile qallooc ah), dejiso qaroodkeeda, radiyaska qallooca iyo K-factor mar kaliya, u kor qaad flanges geesaha ka soo baxa oo leh bend reliefs, oo ku dhig fidsan sida DXF si loo gooyo.
keywords: naqshad balaadhsan, fidi, balaadhin, dherer balaadhsan, qiyaasta qallooca, khadka qallooca, dxf laser, goynta laser, saxanka birta, flange-ka salka, flange geesta, flange, qallooc, radiyaska qallooca, k-factor, k factor, qaro, gauge, relief, bend relief, kanaal, bracket, qolof, saxan qallooc
from: 144bd0f6
---

:::note
**Weli lama dhisin nooca hadda.** Saxanka birta wuxuu u baahan yahay kernel joomatari saxda ah, taas oo nooca PartCraft-ka hadda aanu lahayn: wuxuu qayb kasta ku dhisaa mesh kernel-ka. [Waxa wali aan la dhisin](topic:not-built-yet) wuxuu sheegaa waxa la sameeyo halkii. Boggu inta kale wuxuu sharraxayaa sida ay u shaqeyso kernel saxda ah.
:::

Qaybaha saxanka birta waxay bilaabaan **flange-ka salka**. Wuxuu dejiyaa saxanka qaybta oo dhan: **qaroodkeeda**, **radiyaska qallooca gudaha** iyo **K-factor**. Flange-ka geesta kasta ee ka dambeeya wuxuu ku qallooca isla lambarradaas, sidaas darteed qaybtu waxay ahaatay hal saxan oo la fidin karo. Labaduba waxay u baahan yihiin **kernel saxda ah** (eeg [Mesh kernel](topic:solid-kernels)).

## Bilow flange salka

1. Samee sawir-gacmeed. Isticmaal **profile xiran** saxan fidsan (laydh, ama qulqulka xiran oo leh godad). Isticmaal **hal silsilad xariiq oo furan** biro qallooc ah, sida L, U ama Z oo loo sawiro sida geesaha saxanka.
2. Dooro sawir-gacmeedka taariikhda sifooyinka.
3. Furo {{ui:Wax dheeraad ah}} kooxda Features oo dooro {{ui:Flange-ka salka}}.

Panelka midig:

- **Qaroodka (mm)** waa gauge-ka saxanka.
- **Radiyaska qallooca (mm)** waa radiyaska gudaha ee qalloc kasta. 0 wuxuu siinayaa geesi gudaha ah oo qiiqsan; dibaddu weli wuu qallooca radiyaska hal qaroodka.
- **K-factor** wuxuu sheegaa meesha lakabka dhexe ee saxanka ku yaal, 0 (dusha gudaha) ilaa 0.5 (dhexe). Waxa uu go'aaminayaa intee dheer saxanku marka dhul la fido. 0.44 waa caadiga; dukaankaaga ama bixiyaha agabka ayaa siin kara midkooda.
- **Dhererka (mm)** waa intee in le'eg profile-ka qallooca ah uu uga baxo diyaaradda sawirka. Saxan ma tixgeliyo.
- **Qaroodka dibadda qallooca**: profile furan waa hal dusha saxanka. Caadi ahaan qaroodku wuxuu gudaha ku yaalaa qalloca koowaad, sidaas darteed xariiqyadii aad sawirtay waa dibadda kanaalka. Calaamadi si aad xariiqyada gudaha ugu dhigto. Jawaabta waa isku mid cidda aad ka bilowday.

Geesi kasta oo silsilad furan ah wuxuu noqdaa qallooc. Xariiq aad u gaaban si uu u qabto qalloceeda wuu sheegaa, iyo dhererka uu u baahan yahay.

## Qallooc flange geesta

1. Guji geesta toosan ee dusha sare ama hoose ee saxanka (geesaha dheer, ma aha kuwa khafiifka ah).
2. Dooro {{ui:Wax dheeraad ah}} › {{ui:Flange geesta}}. Haddii geeso aan la dooran, PartCraft wuu sugaa inaad guujiso mid; Esc wuu joojiyaa.

Flange-ka wuxuu ka kor u qalloocaa dusha geeskaas wareegga radiyaska gudaha saxanka, ka dibna wuu toosan yahay. Panelka:

- **Xagalka (°)** waa intee qallooca, 1 ilaa 180. 90 waa flange labajibbaaran.
- **Dhererka (mm)** waa cagta toosan ee ka dambaysa qalloca.
- **Ku qallooc dhinac kale** wuxuu ka qalloocaa dusha kale (hoos halkii kor).
- **Ka-saar bilowga** iyo **Ka-saar dhamaadka** waxay flange-ka ka gaabiyaan labada dhamaad ee geeska.
- **Bend relief**: marka dhamaad la ka saaro, godka ayaa lagu jaraa saxanka dhinacyadiisa si qalloocu u jebin birta halkaas. **Ballaca relief** wuxuu dejiyaa ballaca godka; qotodheerkiisu waa radiyaska qalloca + qaroodka. Dooro **Midna** si geeska aan loo jarin.

Ku beddelka geeska mar dambe: taabo {{ui:Dooro}} panelka oo guji mid kale.

:::tip
Isticmaal halbeegyada qaroodka iyo radiyaska (eeg [Halbeegyada iyo isle'egyada](topic:parameters)) si isbeddelka gauge-ka uu u cusboonaysiiyo dhammaan flanges-ka hal mar.
:::

## Fidi

Labada panel waxay ku dhammaadaan **Naqshadda balaadhsan**. Taabo {{ui:Dhig dhul}}:

- Hordhac ayaa tusaya saxanka la fidiyay, iyadoo khadka dhexe ee qalloc kasta ay tahay mid dhibcood ah.
- **Cabbirka** iyo **Balaadhka** waa kuwa laydhka fidsan.
- Qallooc kasta waa la liistaa jihadeeda (**kor** ama **hoos**, marka laga eego dusha sawirka flange-ka salka), xagalka iyo radiyaska gudaha.

Qallooc kasta wuxuu qaadaa dherer ka mid ah lakabka dhexe ee saxanka marka uu mareyo, **qiyaasta qallooca**: xagalka (radiyaan) × (radiyaska gudaha + K-factor × qaroodka). Sidaas darteed qallooc 90° oo saxan 2 mm ah, radiyas 2 mm ah iyo K-factor 0.44 waxay ku darsataa 4.52 mm saxan fidsan.

Saxan fidsan, godadka, goynta iyo reliefs-ka qallooca waxay muuqdaan fidsan halka ay dhab ahaantii yihiin, oo ay ku jiraan godadka flange kasta.

Si aad u goyso badan, taabo {{ui:Ku rari xaashiyada…}} hoosta naqshadda balaadhsan: eeg [Ku rari qaybaha fidsan xaashiyada](topic:nest-flat-parts). Flange-ka salka ee qallooca wuxuu u fidaa hal laydh: dherer fidsan × qoto, iyo khad qallooc geesta kasta.

{{ui:Save DXF}} wuxuu kaydiyaa naqshadda balaadhsan ee laser, punch ama waterjet, milimitir:

- geesaha dhammaadka ah layer **OUTLINE**, sida xariiqyo, qaansooyin iyo goobo;
- khadadka qallooca layer **BEND**, oo ah xariiq-jajab;
- qoraal qalloc kasta layer **BEND_NOTES**, sida "UP 90° R2".

Wax kasta beddelo, naqshadda balaadhsan ayaa baaba'da; mar kale taabo {{ui:Dhig dhul}} mid cusub.

:::note
Ka hubi K-factor-ka dukaankaaga ka hor inta aanad gooyin: dhererka naqshadda ayaa ku xiran, wuxuuna kala duwanaadaa agabka, qaroodka iyo qalabka.
:::

## Fariimaha

- **Saxanka birta wuxuu u baahan yahay flange salka ka hor** — flange geesta ayaa lagu daray ka hor flange salka. Dhig hoos ka mid ah, ama marka hore ku dar flange salka.
- **Flange geesta wuxuu u baahan yahay geesta toosan** — flanges-ka waxay qallooci karaan khadad kaliya; geesaha qalooca lahaa weli ma aqbalaan.
- **Geeskaas ma saaran dusha qaroodka saxanka** — geeska wuxuu ku jiraa dusha aan ahayn dusha sare ama hoose ee saxanka (tusaale ahaan darbiga godka). Dooro geesta dusha sare ama hoose.
- **Ka-saarku geeska waxba ka ma tago** — labada ka-saar wadar ahaan waa geeska oo dhan ama ka badan.
- **Flange geesta flange salka qallooca lagu sawiran karin hadda** — bilow saxan toosan oo qallooc dhammaantiis flange geesaha, kuwaas oo fidi kara.
- **Goyn iyo godad ka dib flange salka qallooca lama muujiyo naqshadda balaadhsan hadda** — naqshadda profile qallooca waa oo kaliya laydhka la fidiyay.
