---
title: Dhamaystirka 3D: isbarbar-socod iyo scallop
summary: Dhamaystir dusha curved ee moodelka oo dhan adigoo isticmaalaya ball, bull-nose ama flat end mill, xariiqyo isbarbar socda xagal kasta ama marro u kala fogaadaya masaafo la dejiyey, si ridges-ka u dhexeeya ay ku hayaan dhererka aad weydiisay. Waxa jidadku ballanqaadaan iyo waxa aanay ballanqaadin.
keywords: dhamaystirka 3d, dhamaystir, isbarbar, raster, scallop, scallop joogto ah, cusp, ball nose, bull nose, dusha, tolerance, stepover, slope, agabka la reebayo, drop cutter, gouge
from: e1587d0a
---

Laba hawlood oo Manufacture ah ayaa **dusha moodelka oo dhan** jarta iyada oo qalabka si toosan loo hayo (saddex axes). Ma qaadanayaan wax doorasho ah: waxay ka shaqeeyaan qaybta moodelka oo dhan ee laga arki karo sare. Qaybta hore marka hore jar (adaptive ama pocket); dhamaystir ku socota agab aan la jarin waxay digeysaa inay gunti gaadhi doonto.

## Isbarbar

Xariiqyo toosan oo moodelka dhex mara **xagal** aad dejiso, **stepover** kala fogaansho (qayb ka mid ah dhexroorka qalabka). Xariiq kasta waxay raacaa dusha: barta qalabka waxay ahaataa sidii ay u baahan tahay si qalabka oo dhan uusan uga hooseeyn moodelka, xariiqyada waxaa la jarayaa si wanaagsan meel kasta oo dusha ay wareegto. **Zig-zag** marka uu shidan yahay, qalabku wuu hoos ku sii jiraa xariiqyada u dhexeeya meelaha ay ammaan ku tahay (waa la hubiyaa dhinaca dhaqdhaqaaqa); haddii kale wuu kor u qaadaa.

- **Tolerance**: intee in le'eg ayuu qayb toosan oo xariiq ah ka fogaan karaa heerka runta ah ee barta qalabka (half of it is used as the limit at the middle of each piece). Caadi 0.01 mm.
- **Only where the surface is at least … and at most … (°)**: dhamaystir kaliya meelaha hoose ama kaliya meelaha janjeera. Meelaha ka baxsan kala duwanaanta xariiqa waa la ka tagaa oo qalabku wuu kor u qaadaa.
- **Stock to leave**: moodelka oo la kala fogeeyay masaafadaas (qalabka la balaadhiyay: saxan ball iyo bull-nose; qalab siman waxa uu ka tagaa ugu yaraan masaafadaas).
- **Bottom**: wax aan lagu jarin z-kan ka hooseeya.

## Scallop

Marro kala fogaansho joogto ah ka dhex dhaxaysa dusha, si ridge (scallop) ka dhex haray laba marro isku dhow uu yeelanayo **dhererka** aad weydiisay. Masaafada waxay ka soo baxaysaa dhererka iyo radius-ka ball-ka: s = 2·√(2·R·h − h²), tusaale ahaan qiyaastii 0.69 mm marro dhexdooda ball Ø6 ah iyo ridge 0.02 mm ah. Bull-nose-ku wuxuu isticmaalaa radius-ka geeskiisa. Flat end mill waa la diidaa: ma leh ridge la cabbiro.

Marrada waxay ka bilaabmaan **geesta moodelka, gelaya gudaha** ama **sare moodelka, hoos u dhaca**. Waa kontuurrada masaafada dusha dushiisa (ma aha dhererka), sidaas darteed dhulka saaran waxay ku dhowyihiin qorshe, dhulka siman waxay ku fogaadaan. Masaafada waxaa lagu cabbiraa grid dusha dushiisa, waana saxan tahay ilaa 1 %; dhererka ridge-ka waa saxan meelaha siman ama curved si tartiib tartiib ah, malaha meelaha ay si degdeg ah u wareegaan. **Climb** wuxuu ilaalinayaa dhinaca sare ee dusha ee gacanta midig ee qalabka.

## Sida jidadku u fiican yihiin

Waxa tijaabooyinku hubiyaan, iyaga oo leh qaacido run ah ama raadinta madaxbanaan ee qaybta qalabka:

- Dhererka barta qalabka hoosteeda waa saxan ball, bull-nose iyo qalab siman oo wejiyada, geesaha iyo geeska mesh-ka, mararka qaarkoodna kama sarreeyo heerka runta ah; isbarbar-socodka wuxuu ku dhex jiraa tolerance-ka, gouge ka qoto dheer ma jiro.
- Dhererka jidadka dusha dhulka ah wuxuu la mid yahay qaacidada; marrada scallop-ka ee diyaarad waa masaafo la weydiiyey, ridge-ka dhexdooda wuxuu noqdaa dhererka la weydiiyey.
- Simulation-ka agabka ma muujinayo gouge marka dhamaato marka, wuxuuna muujinayaa ridges-ka hadhay.

Jidadkan waxay ma aha:  waa dhamaystir aasaasi ah, ma aha wax walba oo nidaam wax soo saarku bixiyo.

- Weli lama dhisin: waterline (z joogto ah), pencil iyo nadiifinta geeska, marrada xagal iyo dhamaystirka giraanta, curve la saarayo dusha, ogaanshaha dhulka siman, machining-ka hadhaaga, hubinta holder-ka iyo shank-ka, iyo wax jeexjeexid ah oo qalabka ah.
- Xarunta qalabka waxay ku sii jirtaa moodelka: jidadku waxay joogsadaan geesta moodelka halkii ay ka sii bixi lahaayeen, sidaas darteed darbi toosan oo geesta ku taal lama dhamaysto ilaa saldhigiisa.
- Hoos-jaris ma la arko (dusha ayaa kaliya ah waxa qalabku sare ka kulmo).
- Moodelka waa mesh-ka kernel-ka, sidaas darteed jidadku waxay raacaan mesh-ka (tolerance-ka chord-ka ee qiyaastii 0.0002 ee dhererka ugu weyn ee qaybta), ma aha dusha saxda ah.
- Dhamaystirka moodel weyn oo tolerance fiican ah wuxuu samaynayaa barnaamij dheer oo dhaqdhaqaaq gaaban badan. Hubi natiijada simulator-ka mashiinkaaga ka hor intaadan jari.
