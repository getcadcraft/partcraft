---
title: Hibaelhárítás
summary: Gondok, amelyekbe a PartCraftban futhat: az alkalmazás nem indul, a jellemzők hibáznak, a vázlatok nem oldódnak meg, a fájlok nem nyílnak meg, és az illesztések rosszul viselkednek, az üzenettel és a javítással együtt.
keywords: probléma, hiba, súgó, nem működik, sikertelen, összeomlás, üres, webgl, webassembly, kernel, még nincs elkészítve, túlhatározott, nyitott profil, nem nyitható meg, semmi nem történik, rossz irány, lassú
from: 7728542c
---

Ha valami nem működik, először az alul lévő **állapotsort** olvassa el: a PartCraft ott megmondja, miért utasította vissza a műveletet, vagy mit vár. A hibás jellemző az üzenetét a jobb panel tetején, és az előzményekben a sorára mutatva is megjeleníti.

## Az alkalmazás nem indul

### „Ez a böngésző nem tud 3D-t megjeleníteni (a WebGL ki van kapcsolva vagy hiányzik), ezért a PartCraft itt nem futtatható.”

**Ok:** a böngészőben a 3D grafika (WebGL) ki van kapcsolva, le van tiltva, vagy a grafikus meghajtó nem támogatja.

**Javítás:**

:::chromium
Nyissa meg a `chrome://settings/system` oldalt (vagy az `edge://settings/system` oldalt az Edge-ben), kapcsolja be a „Grafikus gyorsítás használata, ha elérhető” beállítást, majd indítsa újra a böngészőt. Ha már be van kapcsolva, ellenőrizze a WebGL állapotát a `chrome://gpu` oldalon, és frissítse a grafikus meghajtót.
:::

:::firefox
Nyissa meg az `about:support` oldalt, és nézze meg a Graphics, WebGL részt. Ha le van tiltva, frissítse a grafikus meghajtót. Az `about:config` oldalon a `webgl.disabled` értékének `false`-nak kell lennie.
:::

:::safari
A jelenlegi Safariban a WebGL mindig be van kapcsolva. Frissítse a macOS-t (a Safari vele együtt frissül). Ha még így sem működik, próbálja ki a Chrome-ot vagy a Firefoxot ugyanazon a Macen, hogy kizárja a grafikus hardver hibáját.
:::

Távoli asztalok és néhány virtuális gép nem rendelkezik WebGL-lel. A számítógépen magán próbálja ki.

### „A geometriai kernel nem töltődött be: …”

**Ok:** a geometriai kernel (egy WebAssembly-program) nem tölthető le vagy nem indítható. Általában a kapcsolat megszakadt a betöltés közben, a WebAssembly egy vállalati szabályzat vagy böngészőbiztonsági beállítás miatt ki van kapcsolva, vagy a böngésző nagyon régi.

**Javítás:** töltse újra az oldalt, miközben online. Ha továbbra is hibázik, próbáljon egy másik, friss böngészőt. Firefoxban az `about:config` oldalon a `javascript.options.wasm` értékének `true`-nak kell lennie. Offline csak akkor töltődik be az alkalmazás és a kernel, ha az alkalmazássáv a kapcsolat megszakadása előtt **Offline készen áll** üzenetet mutatott ({{ui:Mentés offline használatra}} online állapotban; lásd [Offline munka](common:offline)).

### Az offline gomb „Nem sikerült menteni” vagy „Offline nem elérhető” üzenetet mutat

**Nem sikerült menteni**: néhány fájl nem töltődött le. Kattintson rá újra online állapotban; lassú vagy mért kapcsolat esetén második próbálkozás kell. **Offline nem elérhető**: ez a böngészőablak nem tud offline másolatot tartani (a privát ablakok és néhány felügyelt számítógép letiltja). Használjon normál ablakot, vagy tartsa nyitva a lapot.

### A PartCraft offline, de elavult

Kattintson az **Offline készen áll** gombra online állapotban, és válassza a {{ui:Mentés újra (a legújabb verzió beszerzése)}} lehetőséget.

### „Végigvezetés: még nincs elkészítve. Pontos kernel kell hozzá, …”

A teljes üzenet: „<Name>: még nincs elkészítve. Pontos kernel kell hozzá, amelyet a PartCraft ezen verziója nem tartalmaz. A Súgó › Mi még nincs elkészítve megmondja, mit tegyen helyette.” Akkor látja, ha a Végigvezetés, az Áthúzás, a Borda, a lemezperem, a felületi jellemző, az Összevonás, a Test mozgatása, a Test léptékezése vagy a Pályamintázat parancsot választja, és más olyan funkcióknál is, amelyekhez csak pontos kernel kell. Nincs hiba sem a böngészőben, sem az alkatrészben: a PartCraft ezen verziója minden alkatrészt a háló-kernellel épít. Lásd [Mi még nincs elkészítve](topic:not-built-yet) és [A háló-kernel](topic:solid-kernels).

### „A geometriai kernel betöltése…” soha nem tűnik el

Lassú kapcsolat esetén várjon egy kicsit: a kernel és a 3D-könyvtár az első alkalommal töltődik le. Utána töltse újra az oldalt. Ha maga az oldal mutat hibát, lásd fent.

## Semmi nem történik, amikor billentyűt nyomok

- A billentyűk nem működnek, amíg a kurzor egy mezőben van a panelen. Kattintson a 3D nézetbe, vagy gépelés után nyomja meg az {{key:Esc}} billentyűt (vagy a {{key:Tab}} billentyűt a kilépéshez).
- A nyilak és a {{key:Plus}}/{{key:Minus}} csak akkor forgatják és nagyítják a nézetet, miután a nézetbe kattintott.
- Egy párbeszédpanel nyitva van: előbb válaszoljon rá.
- Vázlatban a {{key:F}} a Lekerekítés eszköz, nem az Illesztés. Használja a {{ui:Illesztés}} gombot.

## Egy eszköztárgomb szürke

- A jellemzőgombok szürkék, amíg vázlat van megnyitva. Előbb zárja be a vázlatot.
- A vázlateszközök csak vázlaton belül működnek.
- A {{ui:Visszavonás}} és az {{ui:Ismétlés}} szürke, ha nincs mit visszavonni vagy megismételni.
- Az {{ui:Összeállítás}} testtel rendelkező alkatrészt igényel. A {{ui:Kapcsolat}} két alkatrészt igényel az összeállításban. Az {{ui:Alkatrész szerkesztése}} kijelölt alkatrészt igényel.
- A {{ui:STEP AP242 (pontos test)}} és a {{ui:STEP AP214 (pontos test)}} szürke egy összeállításban: exportálja alkatrészenként. Ha egy másik program visszautasítja a pontos fájlt, próbálja a {{ui:STEP AP214 (pontos test)}} formátumot, majd a {{ui:STEP (lapokra bontott, hálókernel)}} formátumot, és jelezze a {{ui:Súgó}} › {{ui:Probléma jelentése}} menüponton keresztül.
- A {{ui:Végigvezetés}}, az {{ui:Áthúzás}} és a többi pontos kernelt igénylő jellemző nem szürke: kattinthatók maradnak, az eszköztippjük „még nincs elkészítve (pontos kernelt igényel)” szöveggel végződik, és a kattintás az állapotsorban jelzi ezt. Lásd [Mi még nincs elkészítve](topic:not-built-yet).
- A {{ui:Rajz}} szilárd testet igényel, és szürke, amíg vázlat van nyitva.
- Az {{ui:Exportálás}} menüpontok szürkék egy összeállításban: az összeállítások még nem exportálhatók. Zárja be, vagy szerkesszen egy alkatrészt az exportáláshoz.

## Vázlatproblémák

### A vázlat nem enged kapcsolatot hozzáadni

„Nincs olyan kapcsolat, amely illik ehhez a kijelöléshez. Jelöljön ki egy vagy két elemet (a Shift+kattintás hozzáad).” A kapcsolathoz más kijelölés kell. Lásd [Vázlatkapcsolatok és méretek](topic:sketch-relations) az egyes kapcsolatok igényeiért.

### „Túlhatározott: … nem teljesíthető egyszerre. Visszavonás, vagy törölje az egyiket.”

**Ok:** az új kapcsolat vagy méret ellentmond a már meglévőknek. A vázlat nem mozdult.

**Javítás:** {{key:Mod+Z}}, vagy törölje a piros elemek egyikét a jobb panel listájában (válassza mellette a **Törlés**t).

### „Túlhatározott: … már következik. Törölje.”

**Ok:** a kapcsolat nem ad hozzá semmit: mások már kényszerítik (például a Párhuzamos egy téglalap két oldalán, vagy egy már rögzített méret). Ebben a verzióban nincsenek vezérelt méretek.

**Javítás:** törölje. A jellemző így is megépül, figyelmeztetéssel.

### „Ezeket az elemeket nem lehet együtt méretezni.”

Például egy pontra és egy körre kattintott. Méretezze a kör középpontjához.

### „A lekerekítéshez olyan sarok kell, ahol pontosan két vonal találkozik.” / „Ez a sugár túl nagy ezekhez a vonalakhoz.”

Pontosan a két szilárd vonal sarokpontjára kattintson. Használjon a rövidebb vonal által megengedettnél kisebb sugarat.

### A geometria visszaugrik húzáskor

A húzás kapcsolatot vagy méretet törne el, ezért a PartCraft visszateszi. Csak a kék (nem teljesen meghatározott) geometria mozgatható.

### „Ez a vázlat nem nyitható meg: Extrude2 kell hozzá, amely hibás.”

A vázlat egy olyan jellemző lapján ül, amely nincs megépítve. Javítsa előbb azt a jellemzőt, vagy oldja fel a letiltását, vagy lépjen előre az előzményekben.

## Jellemzőproblémák

| Üzenet | Ok | Javítás |
|---|---|---|
| „Készítsen előbb vázlatot: válasszon síkot, Vázlat, rajzoljon zárt profilt, Kilépés.” | Nincs használt, görbéket tartalmazó vázlat, és nincs kijelölve egy sem | Rajzoljon egy vázlatot, vagy jelölje ki a használandó vázlatot az előzményekben |
| „A vázlatnak nincs zárt profilja a kihúzáshoz.” (vagy „a forgatáshoz”) | Nincs zárt szilárd vonalhurok | Zárja be a réseket; az építési vonalakat a {{key:Q}} billentyűvel kapcsolja vissza |
| „A profil nyitott: egy vége (x, y) nincs semmihez kötve.” | Rés azon a ponton | Nyissa meg a vázlatot, és húzza a végét a szomszédjára, hogy ráugorjon |
| „A profil elágazik (x, y): ott három vagy több vég találkozik.” | Három vagy több vonal találkozik egy pontban | Törölje a felesleges vonalat, vagy kapcsolja építési vonallá |
| „Zárt hurokhoz legalább három oldal vagy egy görbe kell.” | Két vonal oda-vissza | Rajzolja újra a hurkot |
| „A Teljes átmenő csak vágáshoz való. Kiemeléshez adjon meg mélységet.” | Kiemelés „Teljes átmenő” beállítással | Állítsa a **Vég** értékét Vakra vagy Középsíkra |
| „Nincs mit vágni a vázlat ezen oldalán. Próbálja a másik irányt.” | A vágás az anyagtól elfelé mutat | Jelölje be az **Irány megfordítása** opciót |
| „Még nincs mit vágni.” / „Még nincs mit fúrni.” | Nincs szilárd test e jellemző előtt | Készítsen előbb kiemelést, vagy mozgassa lejjebb a jellemzőt |
| „Rajzoljon középvonalat (építési vonalat) a vázlatba, amely körül forgat.” | Forgatás tengely nélkül | Adjon hozzá középvonalat, vagy válasszon vonalat a **Tengely**ben |
| „A profil átmegy a tengelyen. Tartsa a középvonal egyik oldalán.” | A profil a tengely mindkét oldalán van | Rajzolja újra a profil felét |
| „Helyezzen vázlatpontokat oda, ahová a furatok kerülnek (Pont eszköz), majd készítse el a furatot.” | Nincs szabad pont a vázlatban | Adjon pontokat a {{key:P}} billentyűvel |
| „A süllyesztésnek szélesebbnek kell lennie a furatnál.” | A süllyesztés átmérője nem nagyobb az Átmérőnél | Szélesítse a süllyesztést |
| „A süllyesztésnek sekélyebbnek kell lennie a furatnál.” | A süllyesztés mélyebb, mint a vak furat | Tegye sekélyebbé, vagy a furatot mélyebbé |
| „Válassza ki a másolandó jellemzőket.” | Mintázat vagy tükrözés, amelyben semmi nincs bejelölve | Jelöljön be egy jellemzőt a **Másolandó jellemzők** között |
| „Az Extrude2-nek nincs másolható szilárd teste.” | A másolt jellemző hibázik vagy ki van kapcsolva | Javítsa, vagy oldja fel a letiltását |
| „Sketch3-ra van szükség, amely hibás.” | Egy jellemző, amelytől függ, nincs megépítve | Javítsa a megnevezett jellemzőt |
| „A lap, amelyen ül, nincs meg (Extrude1 nincs megépítve).” | A vázlat lapja már nem létezik | Javítsa azt a jellemzőt, vagy törölje a vázlatot, és rajzolja újra |
| „Ezután nem maradt semmi az alkatrészből.” | Egy vágás minden anyagot eltávolított | Ellenőrizze a vágás méretét és irányát |
| „A geometriai kernel nem tudta megépíteni ezt (…).” vagy „A geometriai kernel nem tudta egyesíteni ezt a testtel.” | A kernel visszautasította a geometriát | Vonja vissza, vagy módosítsa kissé a méreteket; a pontosan érintkező lapok okozhatják |
| „Végigvezetés: még nincs elkészítve. Pontos kernel kell hozzá, amelyet a PartCraft ezen verziója nem tartalmaz.” (ugyanígy Áthúzás, Borda és a többiek) | Korábbi verzióban készült jellemző, amelyet csak pontos kernel tud megépíteni. Az előzményekben marad, és változatlanul mentődik vissza | Tiltsa le vagy törölje; lásd [Mi még nincs elkészítve](topic:not-built-yet), hogy mit tegyen helyette |
| „5 mm-es lekerekítés nem fér el itt (…).” / „2 mm-es letörés …” | A méret túl nagy a mellette lévő lapnak, vagy a sarok nem keverhető | Kisebb méret, vagy kevesebb él jellemzőnként |
| „Lekerekítés: ebben a verzióban csak két sík lap közötti egyenes élek (a háló-kernel építi meg). A görbe éleket a vázlatban kerekítse vagy vágja le.” (ugyanígy Letörés) | A kijelölt él kerek, például egy furat széle, vagy görbe lapon van | Kattintson az {{ui:Élek kijelölése}} gombra, és távolítsa el; ehelyett kerekítse vagy vágja le azt a sarkot a vázlatban |
| „A változó sugarú lekerekítés: még nincs elkészítve (pontos kernelt igényel). Adjon meg egy sugarat.” | A **Változó sugár** be van jelölve | Törölje a jelölést, és adjon meg egy sugarat |
| „Lekerekítés a háló-kernellel: ahol a lekerekített élek találkoznak, gérvágottak, nem összeolvadók.” (⚠, figyelmeztetés) | A kijelölt élek sarokban találkoznak; a lekerekítések éles tarajban találkoznak ott | Nincs teendő: az alkatrész megépült. Kevesebb élt kerekítsen, ha a taraj számít |
| „Egy él, amelyet kerekít, eltűnt: az Extrude1 és a Cut2 közötti él.” | Egy korábbi módosítás eltávolította az élt | Kattintson az {{ui:Élek kijelölése}} gombra, távolítsa el a piros élt, és jelölje ki az újat |
| „Ki kell jelölni az éleket a nézetben, majd hozzá kell adni őket.” | A lekerekítésnek vagy letörésnek nincsenek élei | {{ui:Élek kijelölése}} |
| „Ki kell jelölni az eltávolítandó lapokat (nyitott), majd héjazni.” | A héjazásnak nincs nyitott lapja | {{ui:Lapok kijelölése}} |
| „A héjat nem lehetett ezzel a vastagsággal elkészíteni (…).” | A fal vastagabb, mint a modell egy vékony része vagy egy lekerekítés sugara | Vékonyabb fal, vagy nagyobb lekerekítések |
| „Héjazás: ebben a verzióban csak sík lapokat nyit meg (a háló-kernel építi meg).” | Egy nyitott lap görbe | {{ui:Lapok kijelölése}}, és távolítsa el; csak sík lapokat nyisson meg |
| „Dőlésszög: ebben a verzióban csak sík lapok (a háló-kernel építi meg).” | A dőlésszögű lap henger, kúp vagy szabad formájú lap | Távolítsa el; csak sík lapot döntsön |
| „Egy lap, amelyet nyit, nincs meg (…).” | Egy korábbi módosítás eltávolította a lapot | Jelölje ki újra a {{ui:Lapok kijelölése}} gombbal |
| „A Fillet1 a test éleit vagy falait változtatja; nem másolható. …” | Mintázat vagy tükrözés lekerekítést, letörést vagy héjat másol | Vegye ki a jelölést; előbb mintázza a vágásokat, utána kerekítsen |
| „Olyan lapon ül, amelyet csak pontos kernel talál meg: ebben a verzióban még nincs elkészítve.” | Vázlat olyan lapon, amelyet a háló-kernel nem talál, például korábbi verzióban készült | Vázlatozzon alaplapon, vagy egy kiemelés sík lapján, és méretekkel pozicionálja |
| „A test egy lapját vagy élét használja, amelyet csak pontos kernel talál meg: ebben a verzióban még nincs elkészítve.” | Referenciasík, tengely vagy pont a test egy lapján vagy élén | Készítse alaplapokból, vázlatpontokból vagy koordinátákból |
| „A kiemelés egy lapig, a következő lapig vagy egy csúcsig: még nincs elkészítve (pontos kernelt igényel).” / „Kúposítás: még nincs elkészítve (pontos kernelt igényel).” | Végfeltétel vagy kúposítás, amelyet csak pontos kernel épít | Használjon mért Vak vagy Középsík mélységet; a Kúposítást hagyja 0-n |

## Kijelölési problémák

- „Ez a lap görbe. Válasszon sík lapot vagy síkot vázlatozáshoz.” A vázlatokhoz sík lap kell. Alaplapon vázlatozzon, és a vázlatot méretekkel pozicionálja.
- Egy lap azt mondja: „Helyben rögzítve”: nem vázlatél hozta létre (például egy mintázat másolatának lapja), ezért a rá rajzolt vázlat nem mozdul, ha az alkatrész változik.
- Az élek nehezen eltalálhatók: nagyítson. Ha a mutató pontosan rajtuk van, az él nyer a mellette lévő laphoz képest.

## Fájlproblémák

| Üzenet | Javítás |
|---|---|
| „A PartCraft a saját .partcraft.json fájljait nyitja meg, a SolidWorks CadCraft-makrójából készült exportokat (.cadcraft-sw.json) és a STEP-fájlokat. A „bracket.igs” ezek egyike sem.” | Csak ezek a fájlok ismertek (és az STL, OBJ és 3MF hálók, valamint a .3dm fájlok) |
| „A part.stp nem STEP-fájl (nem ISO-10303-21-gyel kezdődik).” | A fájl nem STEP szöveg |
| „Ez a STEP-fájl túl nagy (60 MB felett) az importáláshoz.” | Egyszerűsítse a forrásnál |
| Saját mentett alkatrészén: „Ez a fájl túl nagy ahhoz, hogy PartCraft-alkatrész legyen.” | Egy nagy STEP-test egy korábbi verzióban importálva 50 MB fölé növelte az alkatrészfájlt. Használjon egy régebbi másolatot, amely nélküle készült |
| „Ez a fájl túl nagy ahhoz, hogy PartCraft-alkatrész legyen.” | A fájl 50 MB-nál nagyobb; nem PartCraft-fájl |
| „Ez nem PartCraft-fájl (nem JSON).” / „Ez nem PartCraft-fájl.” | A fájl sérült, vagy más program fájlja |
| „Ezt a fájlt újabb PartCraft mentette (fájlverzió …); ez a verzió …-t olvas.” | Nyissa meg az újabb PartCraftban |
| „Extrude2: a mélység hibás.” (vagy más érték) | A fájlt kézzel szerkesztették, vagy megsérült. Használjon egy régebbi másolatot |
| Az összeállításba való beillesztés ezt mondja: „Part1.partcraft.json-nak nincs beilleszthető teste.” | Az alkatrészfájlnak nincs szilárd teste. Nyissa meg, készítsen testet, mentse, majd illessze be újra |

**A mentett fájl nincs ott, ahol várta.** A mentés letöltés: nézze meg a böngésző letöltések mappáját, vagy nyissa meg a letöltési listát a böngésző eszköztárából. Lásd [Hol találhatók a fájljai](common:your-files).

**Megnyitott egy alkatrészt, de az összeállítás még látszik.** Az alkatrész az összeállítás mögött töltődött be. Kattintson a {{ui:Bezárás}} gombra az összeállítás bezárásához, és lássa az alkatrészt. Alkatrészfájlok megnyitása előtt zárja be az összeállításokat.

## Rajzproblémák

| Üzenet | Javítás |
|---|---|
| „Előbb építsen testet, majd készítse el a rajzát.” | Építse meg először az alkatrészt |
| „Nincs hely a lapon ehhez: részlet. Készítsen kisebb részletet, vagy hagyjon el egy nézetet.” | Kisebb **Részlet sugara** vagy **Részlet léptéke**, vagy távolítsa el a metszetet |
| „A részletet az elől-, felül-, jobb- vagy metszetnézetből vesszük.” | Kattintson egy ilyen nézetre |
| „Kattintson az egyik nézetre.” | A kattintás üres papírra esett |
| „A pozícióhoz legalább egy adathivatkozás kell.” és más keretüzenetek | Állítsa be a panel által kért adathivatkozásokat, vagy válasszon másik jellemzőt |
| „A rajznézeteket nem lehetett elkészíteni: …” | Vonja vissza az utolsó módosítást. Ha ismétlődik, mentsen, töltse újra az oldalt, és nyissa meg újra az alkatrészt |

## Összeállítási problémák

| Üzenet | Ok | Javítás |
|---|---|---|
| „Előbb építsen testet, majd tegye összeállításba.” | Az alkatrésznek még nincs teste | Készítsen testet |
| „Előbb illesszen be egy második alkatrészt (Másolat hozzáadása, Beillesztés, vagy Szerkesztés › Kettőzés).” | Egy kapcsolathoz két alkatrész kell | Illesszen be egy második alkatrészt |
| „Válasszon lapot egy másik alkatrészen.” | A kapcsolat két lapjának különböző alkatrészeken kell lennie | Jelöljön ki másik alkatrészen lévő lapot |
| „Ez a lap görbe. Válasszon sík lapot …” | A kapcsolatok sík lapokról indulnak. Furathoz vagy forgatási tengelyhez utána használja a **Középpont** beállítást | Válasszon sík lapot |
| „A Bracket2 nincs összekötve a rögzített alkatrésszel, ezért ott marad, ahová tették.” | Nincs kapcsolat egy elhelyezett alkatrészhez | Adjon hozzá kapcsolatot egy elhelyezett alkatrészhez |
| „A Revolute3 olyan hurkot zár, amely nem tud záródni: 2.000 mm-rel tér el. Ellenőrizze a hurok kapcsolatainak lapjait, eltolásait és határait.” | A részek nem tudnak mind találkozni: a hosszak, a kapcsolatok lapjai, az eltolások (egymásra rakott, lapjukkal érintkező alkatrészeknél a mélységnek egyeznie kell) vagy a határok nem stimmelnek | Ellenőrizze ezeket, vagy törölje a hurok egyik kapcsolatát |
| „A kapcsolat által használt lap nincs meg a Bracket-ből.” / „A kapcsolat által használt tengely nincs meg a Bracket-ből.” | Az alkatrészt szerkesztették | Törölje a kapcsolatot, és hozza létre újra |
| „A tengely a lap mentén fut, ezért nem állíthatja be a kapcsolat középpontját.” | A tengely nem keresztezi a lapot | Válasszon a lapot keresztező tengelyt, vagy a „A lap saját origója” beállítást |
| „Egy összeállítás legalább egy alkatrészt megtart. Zárja be helyette.” | Az utolsó alkatrész nem törölhető az összeállításból | Használja a {{ui:Bezárás}} gombot |

**Az alkatrészek össze vannak kötve, de rossz helyen vannak.** Állítsa be a **Középpont** értékét a kapcsolat mindkét oldalán arra a furatra vagy forgatási tengelyre, amelynek egymáshoz kell igazodnia, majd állítsa be a **Szög (°)** és az **Eltolás (mm)** értéket.

## Lassú

- Modellezés közben állítsa a **Görbék** beállítást Normálra vagy Durvára; exportálás előtt váltson Finomra.
- A nagy mintázatszámok (több száz másolat) minden módosításnál lassan újraépülnek. Más jellemzőkön dolgozva függessze fel a mintázatot.
- Az ütközésvizsgálat és a mozgásellenőrzés minden alkatrészpárt összehasonlít; nagy összeállításoknál tovább tart.
- Zárja be a többi nehéz lapot. A PartCraft a saját számítógépe processzorát és grafikáját használja.

## Még mindig elakadt

Mentse el először a fájlt ({{key:Mod+S}}), töltse újra az oldalt, és nyissa meg újra. Ha egy jellemző továbbra is hibázik, jelölje ki, olvassa el az üzenetét, és próbálja a {{key:Mod+Z}} billentyűt, hogy visszajusson az utolsó jó állapotba.
