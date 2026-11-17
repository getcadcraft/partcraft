---
title: Tõrkeotsing
summary: Probleemid, mida PartCraftis võid kohata, alates rakenduse käivitamata jäämisest kuni funktsioonide ebaõnnestumise, visandite lahendamata jätmise, failide avamata jäämise ja liidete väärkäitumiseni, koos sõnumiga, mida näed, ja parandusega.
keywords: probleem, viga, abi, ei tööta, ebaõnnestub, ebaõnnestumine, krahh, tühi, webgl, webassembly, tuum, pole veel valmis, üle määratud, avatud profiil, ei saa avada, midagi ei juhtu, vale suund, aeglane
from: 7728542c
---

Kui midagi ei tööta, loe kõigepealt **olekuriba** allservas: PartCraft ütleb seal, miks ta keeldus või mida ta järgmiseks ootab. Ebaõnnestuv funktsioon näitab oma sõnumit ka oma paremas paneelis üleval ja siis, kui viid hiire ajaloos rea kohale.

## Rakendus ei käivitu

### „See brauser ei saa 3D-d näidata (WebGL on väljas või puudub), seega ei saa PartCraft siin töötada.“

**Põhjus:** brauseris on 3D-grafika (WebGL) välja lülitatud, blokeeritud või graafikadraiver seda ei toeta.

**Parandus:**

:::chromium
Ava `chrome://settings/system` (või Edge'is `edge://settings/system`) ja lülita sisse „Kasuta võimaluse korral graafikakiirendust“, siis taaskäivita brauser. Kui see on sees, vaata WebGL-i olekut lehel `chrome://gpu` ja uuenda graafikadraiverit.
:::

:::firefox
Ava `about:support` ja vaata rubriiki Graphics, WebGL. Kui see on blokeeritud, uuenda graafikadraiverit. Lehel `about:config` peab `webgl.disabled` olema `false`.
:::

:::safari
WebGL on praeguses Safaris alati sees. Uuenda macOS-i (Safari uueneb koos sellega). Kui see ikka ebaõnnestub, proovi Chrome'i või Firefoxi samal Macil, et välistada graafikariistvara.
:::

Kaugtöölauad ja mõned virtuaalmasinad WebGL-i ei oma. Proovi arvutis endas.

### „Geomeetriatuum ei laadinud: …“

**Põhjus:** geomeetriatuum (WebAssembly-programm) ei saanud alla laaditud ega käivitatud. Tavaliselt katkes ühendus rakenduse laadimise ajal, WebAssembly on ettevõtte poliitika või brauseri turvasätte järgi välja lülitatud või brauser on väga vana.

**Parandus:** laadi leht uuesti võrguühenduses. Kui see ikka ebaõnnestub, proovi mõnda teist praegust brauserit. Firefoxis peab `javascript.options.wasm` lehel `about:config` olema `true`. Ühenduseta laaditakse rakendus ja tema tuum ainult siis, kui rakendusriba ütles **Valmis ühenduseta** enne ühenduse kadumist ({{ui:Salvesta võrguks}} võrguühenduses; vt [Töö võrguühenduseta](common:offline)).

### Võrguühenduseta nupp ütleb „Ei saanud salvestada“ või „Võrguühenduseta ei ole saadaval“

**Ei saanud salvestada**: mõned failid ei laadinud alla. Klõpsa, et uuesti proovida võrguühenduses; aeglane või mahupõhine ühendus võib vajada teist katset. **Võrguühenduseta ei ole saadaval**: see brauseriaken ei saa hoida ühenduseta koopiat (privaatsed aknad ja mõned hallatud arvutid blokeerivad seda). Kasuta tavalist akent või jäta vahekaart lahti.

### PartCraft on ühenduseta, kuid aegunud

Klõpsa **Valmis ühenduseta** võrguühenduses ja vali {{ui:Salvesta uuesti (võta uusim versioon)}}.

### „Pühkimine: pole veel valmis. See vajab täpset tuuma, mida selles PartCrafti versioonis ei ole …“

Täielik teade on „<Nimi>: pole veel valmis. See vajab täpset tuuma, mida selles PartCrafti versioonis ei ole. Abi › Mis pole veel valmis ütleb, mida selle asemel teha.“ Sa näed seda, kui valid Pühkimise, Lofti, Ribi, lehtmetalli ääre, pinnafunktsiooni, Ühendamise, Keha teisaldamise, Keha skaleerimise või Trajektoori mustri, ja teiste asjade puhul, mida ainult täpne tuum suudab. Sinu brauseri ega detailiga ei ole midagi valesti: see PartCrafti versioon ehitab kõik detailid võrgusilma tuumaga. Vt [Mis pole veel valmis](topic:not-built-yet), mida selle asemel teha, ja [Võrgusilma tuum](topic:solid-kernels).

### „Laadin geomeetriatuuma…“ ei kao kunagi

Oota natuke aeglase ühenduse korral: tuum ja 3D-teek laaditakse esimest korda alla. Seejärel laadi uuesti. Kui leht ise näitab viga, vt ülal.

## Klahvi vajutamisel ei juhtu midagi

- Klahvid ei tööta, kui kursor on paneeli kastis. Klõpsa 3D-vaates või vajuta pärast sisestamist {{key:Esc}} (või {{key:Tab}}, et välja minna).
- Nooleklahvid ja {{key:Plus}}/{{key:Minus}} pööravad ja suumivad vaadet alles pärast seda, kui oled vaates klõpsanud.
- Dialoog on avatud: vasta sellele esmalt.
- Visandis on {{key:F}} Ümarduse tööriist, mitte Mahuta. Kasuta nuppu {{ui:Mahuta}}.

## Tööriistariba nupp on hall

- Funktsioonide nupud on hallid, kui visand on avatud. Sulge visand esmalt.
- Visandi tööriistad töötavad ainult visandis.
- {{ui:Võta tagasi}} ja {{ui:Tee uuesti}} on hallid, kui pole midagi tagasi võtta või uuesti teha.
- {{ui:Koost}} vajab detaili, millel on tahke. {{ui:Liide}} vajab koostes kahte detaili. {{ui:Muuda detaili}} vajab valitud detaili.
- {{ui:STEP AP242 (täpne tahke)}} ja {{ui:STEP AP214 (täpne tahkis)}} on koostes hallid: ekspordi iga detail eraldi. Teine programm lükkab täpse faili tagasi: proovi {{ui:STEP AP214 (täpne tahkis)}}, siis {{ui:STEP (tahkudeks jaotatud, võrgusilma tuum)}}, ja teata meile {{ui:Abi}} › {{ui:Teata probleemist}} kaudu.
- {{ui:Pühkimine}}, {{ui:Loft}} ja muud funktsioonid, mis vajavad täpset tuuma, ei ole hallid: need jäävad klõpsatavaks, nende tööriistavihjed lõppevad sõnadega „pole veel valmis (vajab täpset tuuma)“ ning nende klõpsamine ütleb seda olekuribal. Vt [Mis pole veel valmis](topic:not-built-yet).
- {{ui:Joonis}} vajab detaili, millel on tahke, ja on hall, kui visand on avatud.
- {{ui:Ekspordi}} kirjed on koostes hallid: koostesid ei saa veel eksportida. Sulge koost või muuda detaili, et eksportida.

## Visandi probleemid

### Visand ei lase mul seost lisada

„Selle valiku jaoks ei sobi ükski seos. Vali üks või kaks üksust (Shift+klõps lisab).“ Seos vajab teistsugust valikut. Vt [Visandi seosed ja mõõtmed](topic:sketch-relations), mida iga seos vajab.

### „Üle määratud: … ei saa kõiki täita. Võta tagasi või kustuta üks neist.“

**Põhjus:** uus seos või mõõde on vastuolus juba olemasolevatega. Visand ei liikunud.

**Parandus:** {{key:Mod+Z}} või kustuta üks punastest üksustest paremas paneelis (vali selle kõrval **Kustuta**).

### „Üle määratud: … on juba tuletatud. Kustuta see.“

**Põhjus:** seos ei lisa midagi: teised juba sunnivad seda (näiteks Paralleelne ristkülikul kahel küljel või mõõde, mis on juba fikseeritud). Selles versioonis ei ole juhitud mõõtmeid.

**Parandus:** kustuta see. Detail ehitatakse siiski, hoiatusega.

### „Neid üksusi ei saa koos mõõta.“

Klõpsasid näiteks punkti ja ringjoont. Mõõda hoopis ringjoone keskpunkti.

### „Ümardus vajab nurka, kus täpselt kaks joont kohtuvad.“ / „See raadius on nende joonte jaoks liiga suur.“

Klõpsa täpselt kahe tahke joone nurgapunkti peale. Kasuta väiksemat raadiust, kui lühem joon lubab.

### Geomeetria hüppab tagasi, kui ma seda lohistan

Lohistamine katkestaks seose või mõõtme, seega PartCraft paneb selle tagasi. Liikuda saab ainult sinine (alamääratud) geomeetria.

### „See visand ei saa avada: vajab Extrude2, mis ebaõnnestub.“

Visand asub funktsiooni tahul, mis ei ole valmis. Paranda see funktsioon esmalt, või tühista selle peitmine, või mine edasi.

## Funktsiooni probleemid

| Teade | Põhjus | Parandus |
|---|---|---|
| „Tee esmalt visand: vali tasapind, Visand, joonista suletud profiil, Välju.“ | Kasutamata visandit joontega ei ole ja ühtegi pole valitud | Joonista visand või vali visand, mida kasutada, ajaloos |
| „Visandil ei ole suletud profiili, mida välja suruda.“ (või „… mida pöörata“) | Tahkete joonte suletud silmust pole | Sulge lüngad; lülita konstruktsioonijooned tagasi klahviga {{key:Q}} |
| „Profiil on avatud: otsa punktis (x, y) ei ole midagi ühendatud.“ | Lünk selles punktis | Ava visand, lohista ots naabrile, et see kinnituks |
| „Profiil hargneb punktis (x, y): seal kohtub rohkem kui kaks otsa.“ | Kolm või enam joont kohtuvad ühes punktis | Kustuta lisajoon või lülita see konstruktsiooniks |
| „Suletud silmus vajab vähemalt kolme külge või kõverat.“ | Kaks joont edasi-tagasi | Joonista silmus uuesti |
| „Läbi kõige on lõigete jaoks. Pulga jaoks kasuta sügavust.“ | Pulk seatud valikuga Läbi kõige | Määra Lõpp valikuks Pime või Keskpind |
| „Sellel visandi küljel ei ole midagi lõigata. Proovi teist suunda.“ | Lõige osutab materjalist eemale | Märgi Pööra suund |
| „Lõigata pole veel midagi.“ / „Puurida pole veel midagi.“ | Enne seda funktsiooni materjali pole | Tee esmalt pulk või liiguta funktsioon allapoole |
| „Joonista visandis keskjoon (konstruktsioonijoon), mille ümber pöörata.“ | Pööramine ilma teljeta | Lisa keskjoon või vali joon teljeks |
| „Profiil ristub teljega. Hoia see keskjoone ühel küljel.“ | Profiil on telje mõlemal küljel | Joonista pool profiilist uuesti |
| „Pane visandi punktid kohta, kuhu augud lähevad (Punkti tööriist), siis tee auk.“ | Visandis ei ole vabu punkte | Lisa punktid klahviga {{key:P}} |
| „Vastuauk peab olema august laiem.“ | Vastuaugu ⌀ ei ole suurem kui läbimõõt | Tee vastuauk laiemaks |
| „Vastuauk peab olema august madalam.“ | Vastuauk on sügavam kui pime auk | Tee see madalamaks või auk sügavamaks |
| „Vali funktsioonid, mida kopeerida.“ | Muster või peegeldus ilma märgitud valikuta | Märgi funktsioon jaotises Kopeeritavad funktsioonid |
| „Extrude2-l ei ole kopeeritavat keha.“ | Kopeeritud funktsioon ebaõnnestus või on väljas | Paranda see või tühista peitmine |
| „Vajab Sketch3, mis ebaõnnestub.“ | Funktsioon, millest see sõltub, ei ole valmis | Paranda funktsioon, mille see nimetab |
| „Tahk, millel see asub, on kadunud (Extrude1 ei ole valmis).“ | Visandi tahku enam ei ole | Paranda see funktsioon või kustuta visand ja joonista uuesti |
| „Pärast seda ei ole detailist midagi järel.“ | Lõige eemaldas kogu materjali | Kontrolli lõike suurust ja suunda |
| „Geomeetriatuum ei saanud seda ehitada (…).“ või „Geomeetriatuum ei saanud seda kehaga ühendada.“ | Tuum keeldus geomeetriast | Võta tagasi või muuda mõõtmeid veidi; täpselt puutuvad tahud võivad seda põhjustada |
| „Pühkimine: pole veel valmis. See vajab täpset tuuma, mida selles PartCrafti versioonis ei ole.“ (ka Loft, Ribi ja teised) | Varasemas versioonis tehtud funktsioon, mida ainult täpne tuum suudab ehitada. See jääb ajalukku ja salvestatakse tagasi muutmata | Peida või kustuta see; vt [Mis pole veel valmis](topic:not-built-yet), mida selle asemel teha |
| „5 mm ümardus ei mahu siia (…).“ / „2 mm faas …“ | Mõõt on tahu jaoks serva kõrval liiga suur või nurka ei saa ümardada | Väiksem mõõt või vähem servi funktsiooni kohta |
| „Ümardus: selles versioonis ainult sirged servad kahe lameda tahu vahel (võrgusilma tuum ehitab need). Ümarda või faasi kumerad servad visandis.“ (ka Faas) | Valitud serv on ümar, näiteks augu äär, või asub kumeral tahul | {{ui:Vali servad}} ja eemalda see; ümarda või faasi see nurk visandis |
| „Ümardus, mille raadius muutub serva ulatuses: pole veel valmis (vajab täpset tuuma). Anna sellele üks raadius.“ | **Muutuv raadius** on märgitud | Eemalda linnuke ja anna üks raadius |
| „Ümardus võrgusilma tuumaga: kohad, kus ümarad servad kohtuvad, on nurga alla lõigatud, mitte segatud.“ (⚠, hoiatus) | Valitud servad kohtuvad nurgas; ümarused kohtuvad seal teravas voltis | Parandada pole midagi: detail on ehitatud. Ümarda vähem servi, kui volt on oluline |
| „Serv, mida see ümardab, on kadunud: serv Extrude1 ja Cut2 vahel.“ | Eelmine muudatus eemaldas serva | {{ui:Vali servad}}, eemalda punane serv, vali uus |
| „Vali servad vaates ja lisa need siis.“ | Ümardusel või faasil ei ole servi | {{ui:Vali servad}} |
| „Vali eemaldatavad tahud (avatud), siis kesta.“ | Kestal ei ole avatud tahke | {{ui:Vali pinnad}} |
| „Kesta ei saanud selle paksusega teha (…).“ | Sein on paksem kui detaili õhuke osa või ümarduse raadius | Õhem sein või suuremad ümardused |
| „Kest: selles versioonis avab see ainult lamedaid tahke (võrgusilma tuum ehitab selle).“ | Avatud tahk on kumer | {{ui:Vali pinnad}} ja eemalda see; ava ainult lamedad tahud |
| „Kalle: selles versioonis ainult lamedad tahud (võrgusilma tuum ehitab selle).“ | Kallutatud tahk on silinder, koonus või vabakujuline tahk | Eemalda see; kalda ainult lameda tahke |
| „Tahk, mille see avab, on kadunud (…).“ | Eelmine muudatus eemaldas tahu | {{ui:Vali pinnad}} uuesti |
| „Fillet1 muudab keha servi või seinu; seda ei saa kopeerida. …“ | Muster või peegeldus kopeerib ümarduse, faasi või kesta | Eemalda linnuke; tee lõiked mustrina enne ümardamist |
| „See asub tahul, mida ainult täpne tuum suudab leida: selles versioonis veel valmis.“ | Visand tahul, mida võrgusilma tuum ei leia, näiteks varasemas versioonis tehtud | Joonista põhitasapinnale või ekstrudeeritud lameda tahu peale ja aseta see mõõtmetega |
| „See kasutab tahu või serva tahkisest, mida ainult täpne tuum suudab leida: selles versioonis veel valmis.“ | Abitasapind, telg või punkt tahu või serva peal | Tee see põhitasanditest, visandi punktidest või koordinaatidest |
| „Ekstrudeerimine kuni tahuni, järgmise tahuni või tipuni: pole veel valmis (vajab täpset tuuma).“ / „Kaldenurk: pole veel valmis (vajab täpset tuuma).“ | Lõpptingimus või kaldenurk, mida ainult täpne tuum ehitab | Kasuta mõõdetud sügavust Pime või Keskpind; jäta **Kaldenurk** nulli |

## Valiku probleemid

- „See tahk on kumer. Vali lame tahk või tasapind, millele visandada.“ Visandid vajavad lamedat tahku. Visanda põhitasapinnale ja aseta visand hoopis mõõtmetega.
- Tahk ütleb „Paigas valimise kohas“: see ei ole tehtud visandi servast (näiteks koopia mustri tahk), seega visand sellel jääb paigale, kui detail muutub.
- Servi on raske tabada: suumi sisse. Serv võidab kõrvalolevat tahku, kui osuti on täpselt selle peal.

## Failiprobleemid

| Teade | Parandus |
|---|---|
| 'PartCraft avab oma .partcraft.json-failid, eksportidega CadCraft-makrost SolidWorksi jaoks (.cadcraft-sw.json) ja STEP-failid. "bracket.igs" ei ole ükski neist.' | Ainult need failid on tuntud (ja STL-, OBJ- ja 3MF-võrgud ning `.3dm`-failid) |
| '"part.stp" ei ole STEP-fail (see ei alga ISO-10303-21-ga).' | Fail ei ole STEP-tekst |
| „See STEP-fail on liiga suur (üle 60 MB), et seda siin importida.“ | Lihtsusta seda allikas |
| „See fail on liiga suur, et olla PartCrafti detail.“ oma salvestatud detaili puhul | Suur STEP-tahke, mis imporditi varasemas versioonis, tegi detailifaili üle 50 MB. Kasuta varasemat koopiat ilma selleta |
| „See fail on liiga suur, et olla PartCrafti detail.“ | Fail on üle 50 MB; see ei ole PartCrafti fail |
| „See ei ole PartCrafti fail (see ei ole JSON).“ / „See ei ole PartCrafti fail.“ | Fail on kahjustatud või teise programmi oma |
| „See fail on salvestatud uuema PartCrafti poolt (failiversioon …); see siin loeb versiooni …“ | Ava see uuemas PartCraftis |
| „Extrude2: sügavus on vigane.“ (või muu väärtus) | Faili on muudetud käsitsi või kahjustatud. Kasuta varasemat koopiat |
| Koostes Lisa ütleb „Part1.partcraft.json-il ei ole lisatavat tahket.“ | Detailifailil ei ole tahket. Ava see, ehita tahke, salvesta ja lisa uuesti |

**Salvestatud fail ei ole seal, kuhu ootasin.** Salvestamine on allalaadimine: vaata oma brauseri allalaadimiste kausta või ava allalaadimiste loend brauseri tööriistaribalt. Vt [Kuhu su failid lähevad](common:your-files).

**Avasin detaili, kuid koost on ikka ekraanil.** Detail laadus koosti taha. Vali {{ui:Sulge}}, et koost sulgeda ja näha detaili. Sulge koosted enne detailifailide avamist.

## Joonise probleemid

| Teade | Parandus |
|---|---|
| „Ehita esmalt tahke, siis tee selle joonis.“ | Ehita detail esmalt |
| „Lehel pole ruumi: detail. Tee detail väiksemaks või eemalda vaade.“ | Väiksem **Detaili raadius** või **Detaili mõõtkava**, või eemalda lõige |
| „Detail võetakse eest-, ülevaate-, parempoolselt või lõigatud vaatelt.“ | Klõpsa ühel neist vaadetest |
| „Klõpsa ühel vaatel.“ | Klõps oli tühjal paberil |
| „Positsioon vajab vähemalt ühte baasviidet.“ ja muud raami sõnumid | Määra paneeli nõutud baasid või vali teine tunnus |
| „Joonise vaateid ei saanud teha: …“ | Võta viimane muudatus tagasi. Kui see kordub, salvesta, laadi uuesti ja ava detail |

## Koosti probleemid

| Teade | Parandus |
|---|---|
| „Ehita esmalt tahke, siis pane see koostesse.“ | Detailil ei ole veel tahket |
| „Lisa esmalt teine detail (Lisa koopia, Sisesta või Muuda › Dubleeri).“ | Liide vajab kahte detaili |
| „Vali tahk teisel detailil.“ | Liite mõlemad tahud peavad olema eri detailidel |
| „See tahk on kumer. Vali lame tahk …“ | Liited algavad lamedatest tahkudest. Augu või pöörde telje jaoks kasuta siis **Keskpunkt** |
| „Bracket2 ei ole ühendatud kinnitatud detailiga, seega jääb sinna, kuhu pandi.“ | Lisa liide sellest paigutatud detailini |
| „Revolute3 sulgeb silmuse, mis ei saa sulguda: see on 2.000 mm võrra vale. Kontrolli silmuse liidete tahke, nihkeid ja piire.“ | Detailid ei saa kõik kokku tulla: kontrolli pikkusi, iga liite kasutatavaid tahke, nihkeid (tahkude kaupa pinutud detailid peavad sügavuses ühtima) ja piire; või eemalda üks liide silmusest |
| „Selle liite kasutatav tahk on Bracketist kadunud.“ / „Selle liite kasutatav telg on Bracketist kadunud.“ | Detaili on muudetud. Eemalda liide ja tee see uuesti |
| „Telg jookseb mööda tahku, seega ei saa see liite keskpunkti määrata.“ | Vali telg, mis ristub tahuga, või „Tahu enda päritolu“ |
| „Koost jätab alles vähemalt ühe detaili. Sulge see hoopis.“ | Kasuta {{ui:Sulge}} |

**Detailid on ühendatud, kuid vales kohas.** Määra **Keskpunkt** liite mõlemal poolel augu või pöörde telgedele, mis peaksid joonduma, ja seejärel reguleeri **Nurka (°)** ja **Nihet (mm)**.

## See on aeglane

- Määra **Kõverad** modelleerimise ajal normaalseks või jämedaks; lülita eksportimise ajal peenele.
- Suured mustri arvud (sadu koopiaid) võtavad iga muudatuse peale ümberehitamisel aega. Peida muster, kui töötad teiste funktsioonidega.
- Kokkupõrke ja liikumise kontroll võrdleb iga detailipaari; suured koosted võtavad kauem.
- Sulge muud rasked vahelehed. PartCraft töötab sinu arvuti protsessori ja graafikaga.

## Ikka kinni

Salvesta fail esmalt ({{key:Mod+S}}), siis laadi leht uuesti ja ava see. Kui funktsioon ikka ebaõnnestub, vali see, loe selle teadet ja proovi {{key:Mod+Z}}, et jõuda tagasi viimase hea olekuni.
