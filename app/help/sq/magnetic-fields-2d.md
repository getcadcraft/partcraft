---
title: Fushat magnetike në 2-D (udhëzues)
summary: Llogarit fushën magnetike të një elektromagneti ose magneti të përhershëm me bibliotekën e analizës: ekzekuto shembujt, lexo dendësinë e fluksit, fushën e hapësirës, induktancën dhe tërheqjen, ndrysho projektin, dhe ndërto modelin tënd të bobinave, magnetëve dhe hekurit.
keywords: magnetik, magnetostatikë, fushë magnetike, dendësi fluksi, tesla, elektromagnet, solenoid, bobinë, amper-spirale, bërthamë hekuri, hapësirë ajri, përshkueshmëri, induktancë, forcë magnetike, reluktancë, qark magnetik, potencial vektorial, elektromagnetikë, elementë të fundëm, fem, motor, aktuator, transformator, magnetostatic2d, magnet i përhershëm, neodim, ndfeb, ferrit, remanencë, pikë pune, rikthim, rrjedhje, magnet mbajtës
from: 215f6601
---

Biblioteka e analizës e PartCraft mund të llogarisë fushën magnetike të bobinave dhe hekurit në 2-D: një prerje tërthore e diçkaje që është e gjatë dhe e njëjtë përgjatë gjatësisë së saj, si një elektromagnet, bërthama e një transformatori, një shinë përçuese ose prerja tërthore e një motori. Ky udhëzues ekzekuton shembullin e elektromagnetit të bibliotekës, lexon atë që thotë, e ndryshon, tregon si të modelosh formën tënde, dhe pastaj shton një magnet të përhershëm.

Ai përdor hapësirën e punës Skript dhe [bibliotekën e analizës](topic:craftscript-library). Nuk të duhet të njohësh gjuhën CraftScript për ta ndjekur; shembulli thotë çfarë bën çdo rresht.

## Çfarë modelohet

Një bërthamë hekuri në formë C, 100 × 80 mm jashtë dhe 20 mm trashësi, me një hapësirë ajri 2 mm te këmba e djathtë. Një bobinë me 100 spirale që mbart 10 A (1000 amper-spirale) është e mbështjellë rreth këmbës së majtë. Gjithçka është e gjatë në drejtimin që del nga ekrani, kështu që përgjigjet janë **për metër thellësie**: shumëzoje me thellësinë reale për një magnet real.

`magnetostatic2d` e bibliotekës zgjidh potencialin vektorial magnetik në një rrjetë katrorësh 1 mm, në një kuti ajri rreth magnetit, dhe pastaj nxjerr prej tij dendësinë e fluksit **B** (në tesla).

## Ekzekuto shembullin

1. Zgjidh **Skript** te kutia **Hapësira e punës** në të majtë të shiritit të veglave.
2. Hap skedën **Bibliotekë** të panelit të skriptit, pastaj **Shembuj** › **Elektromagnet: fushë, hapësirë, induktancë**.
3. Kliko {{ui:Hap (vetëm për lexim)}}, pastaj shtyp {{key:F5}}.

Brenda një ose dy sekondash kanavaca shfaq dendësinë e fluksit, dhe konsola printon:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Grafiku nën kanavacë është dendësia vertikale e fluksit B_y përgjatë vijës së mesme të bërthamës, nga e majta në të djathtë: rreth −0.55 T në këmbën e majtë (fluksi rrjedh poshtë saj), pothuajse asgjë në dritare, dhe +0.55 T në këmbën e djathtë dhe përgjatë hapësirës (fluksi kthehet lart). I njëjti fluks kalon nëpër hekur dhe hapësirë, prandaj dy këmbët dhe hapësira tregojnë pothuajse të njëjtën vlerë.

## Lexo rezultatet

- **Fusha në hapësirë** është 0.543 T. Një llogaritje me dorë e trajton bërthamën si një qark të vetëm magnetik, B = μ0 N I / (g + l / μr), ku g është hapësira, l gjatësia e rrugës nëpër hekur dhe μr përshkueshmëria relative e hekurit; jep 0.552 T. Fusha është pak më e ulët se llogaritja me dorë sepse fluksi del jashtë rreth hapësirës (skajet) dhe një pjesë e fluksit merr një rrugë të shkurtër përmes dritares (rrjedhje). Me një hapësirë më të vogël ose një rrjetë më të imët, të dyja afrohen më shumë.
- **Induktanca** e bobinës me 100 spirale është 0.154 H për metër thellësie, nga energjia e ruajtur në fushë. Formula e qarkut jep më pak (0.110 H/m) sepse numëron vetëm fluksin përmes hapësirës, jo fluksin që rrjedh pranë saj.
- **Tërheqja** që mbyll hapësirën është B² w / (2 μ0) për një faqe hapësire me gjerësi w: rreth 2300 N për metër, ose 117 N për një magnet 50 mm të thellë.
- **Maja** prej 1.97 T ndodhet në qoshet e brendshme të dritares, ku fluksi kthehet befas. Modeli e trajton hekurin si linear; çeliku elektrik real ngopet rreth 1.5 deri 2 T, kështu që vlerat mbi këtë i trajto si paralajmërim, jo si përgjigje.

:::note
Testet e vetë bibliotekës e ekzekutojnë këtë shembull dhe e kontrollojnë fushën e hapësirës me formulën e qarkut magnetik në çdo ndryshim të PartCraft. Metoda, referencat dhe kontrollet e tjera (një solenoid i gjatë, një solenoid me bërthamë hekuri) janë në krye të `magnetostatic2d`: kliko mbi të në bibliotekë.
:::

## Ndrysho projektin

1. Kliko {{ui:Bëj një kopje}} mbi skriptin vetëm për lexim. Kopja ruhet me pjesën tënde.
2. Ndrysho një vlerë afër krye dhe shtyp përsëri {{key:F5}}. Provo:
   - `g = 0.001;` — gjysma e hapësirës: fusha e hapësirës pothuajse dyfishohet, dhe kështu edhe tërheqja (shkon me B²).
   - `mur = 200;` — një bërthamë më e dobët: më shumë nga amper-spirat shpenzohen në hekur.
   - `N = 200;` — dyfish spirat: dyfish fusha, katërfish induktanca.
   - `h = 0.0005;` — një rrjetë më e imët: përgjigje më të afërta, rreth katër herë më shumë kohë.

Çdo ekzekutim zëvendëson kanavacën. Variablat që krijoi skripti (si `Bgap`, `L`, `F`) mbeten në listën **Variablat** për llogaritjet e tua.

## Modelo formën tënde

Shembulli ndërton gjithçka nga tre lista, një vlerë për katror të rrjetës, të cilat mund t'i bësh për çdo formë të vizatuar me vija të drejta përgjatë rrjetës:

- **Ku është hekuri:** `iron` është true për katrorët brenda bërthamës. Shembulli e ndërton nga drejtkëndësha: `frame & ~window & ~gap` do të thotë "në kornizë, jo në dritare, jo në hapësirë".
- **Përshkueshmëria:** `1 + (mur - 1) * iron` është 1 në ajër dhe `mur` në hekur. Jepu disa materialeve vlerat e tyre në të njëjtën mënyrë.
- **Rryma:** `J` është dendësia e rrymës në amper për metër katror, pozitive jashtë ekranit, negative brenda tij. Një bobinë ka dy anë me shenja të kundërta; shembulli e llogarit `J0` që njëra anë të mbartë N I.

Pastaj `r = magnetostatic2d(m, permeability, J)` e zgjidh. `r.B` është dendësia e fluksit në çdo katror (dy kolona, x dhe y), `r.Bmag` madhësia e tij, `r.energy` energjia e ruajtur për metër. `plot(x, y)` vizaton një vijë.

Biblioteka punon në metra, dhe pamja në milimetra, prandaj një fushë e shfaqur ashtu siç është do të vizatohej një mijë herë më e vogël. Shembulli e shfaq atë mbi një kopje të rrjetës në milimetra (`mm = quadGrid(…)`, pastaj `show(field(mm, …))`): kopjo ato dy rreshta.

Si parazgjedhje, buza e kutisë e mban fushën brenda: asnjë fluks nuk del prej saj. Bëje kutinë të paktën dy ose tre herë më të madhe se magneti, që kjo të mos e shtrëngojë fushën. Për një magnet simetrik mund ta modelosh gjysmën e tij: krye i `magnetostatic2d` thotë cilën kusht kufiri të përdorësh në një vijë simetrie.

## Magnete të përhershëm

Shembulli i dytë, **Shembuj** › **Magnet i përhershëm në një bërthamë hekuri: pikë pune, rrjedhje, tërheqje**, është e njëjta bërthamë me bobinën e hequr dhe një copë 10 mm të këmbës së majtë e zëvendësuar me një magnet, i magnetizuar lart. Ekzekutoje me {{key:F5}}. Ai printon:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Pika e punës.** Një magnet përshkruhet nga **remanenca** e tij Br (fusha që mban kur është i shkurtqarkuar nga hekuri: rreth 1.2 T për një magnet NdFeB të sinterizuar, 0.4 T për ferritin) dhe përshkueshmëria e tij e rikthimit (rreth 1.05 dhe 1.1). Hapja e një hapësire e shtyn poshtë vijës së tij të rikthimit: këtu deri në 1.04 T, me H që tregon kundër B brenda tij.
- **Rrjedhja.** Llogaritja me dorë pa rrjedhje jep 0.97 T në hapësirë; modeli jep 0.68 T. Një magnet e shtyn fluksin me një shtytje të fortë mbi një gjatësi të shkurtër, kështu që shumë prej tij kthehet drejt përmes dritares në vend që të kalojë nëpër hapësirë. Faktori i rrjedhjes thotë sa: 1.53 këtu. Vendos `g = 0;` për një mbajtës të mbyllur: magneti atëherë punon brenda gjysmë përqindjeje të llogaritjes me dorë.
- **Magnetë në modelin tënd.** Jepi `magnetostatic2d` magnetët si `struct('Br', Br)`, ku `Br` ka një rresht për çdo katror të rrjetës me remanencën përgjatë x dhe y në tesla (zero jashtë magnetëve), dhe jepi katrorëve të magnetit përshkueshmërinë e tyre të rikthimit në listën e përshkueshmërisë:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Për një magnet të magnetizuar me kënd, vendos `Br·cos(angle)` dhe `Br·sin(angle)` në dy kolonat; për një unazë të magnetizuar nga brenda jashtë, llogarit drejtimin e çdo katrori nga pozicioni i tij. `r.H` jep forcën e fushës H në çdo katror.

Modeli e mban një magnet mbi vijën e tij të drejtë të rikthimit, sado fort të shtyhet. Një magnet real i shtyrë përtej gjurit të tij (nga një hapësirë e madhe, një bobinë e fortë ose nxehtësia) humbet një pjesë të fuqisë së tij përgjithmonë; kontrollo pikën e punës me kurbën e prodhuesit për klasën dhe temperaturën.

Testet e bibliotekës i kontrollojnë magnetët me dy rezultate me dorë: një magnet rrethor në ajër të hapur (brenda tij, B = Br / (1 + μr)) dhe një magnet i mbyllur nga një mbajtës hekuri (qarku magnetik), të dyja brenda 1 %.

## Ç'nuk bën ende

- **Ngopja.** Hekuri është linear: dyfisho rrymën, dyfisho fushën, pa kufi.
- **Çmagnetizimi.** Magnetët mbeten mbi vijën e tyre të drejtë të rikthimit (shih më sipër).
- **Rrymat vorbulluese** dhe **humbjet** (humbja në hekur, humbja në bakër).
- **Pjesët lëvizëse dhe çift-rrotullimi.** Nuk ka rotor që rrotullohet në stator, nuk ka çift-rrotullim sipas këndit.
- **Forma të rrumbullakëta.** Rrjeta është bërë nga katrorë të barabartë, kështu që konturat e lakuara dalin me shkallë.
- **3-D.** Gjithçka është një prerje tërthore e diçkaje të gjatë.

Projektimi i motorëve (një rotor që rrotullohet, çift-rrotullimi dhe humbjet në 2-D) po shqyrtohet për një version të mëvonshëm. Shih [Ende të pandërtuara](topic:not-built-yet).
