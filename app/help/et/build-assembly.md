---
title: Koosu koostamine liidetega
summary: Alusta koosu detailist, lisa koopiad ja muud detailifailid, ühenda need jäikade, pöörlevate, liugur-, silindriliste, tasandiliste, kuul- ja tihvt-soonliidetega lamedatel tahkudel, tsentreeri liited telgede järgi, muuda detaili kohapeal ja salvesta koost.
keywords: koost, liide, liited, ahel, suletud ahel, mehhanism, neljalüli, kang ja liugur, jäik, pöörlev, liugur, silindriline, tasane, kuul, sfääriline, tihvt soonde, lisa komponent, kinnitatud, fikseeritud, konsentriline, kokkulangev, muuda detaili, kontekstis, partcraft-asm
from: a53bbfef
---

Koost paneb detailid kokku. PartCraftis paigutavad detaile **liited**: iga liide asub kahe detaili kummagi lamedal tahul ja paneb need tahk tahu vastu. Pöörlev liide laseb ühel detailil pöörelda, liugur laseb sellel libiseda ja jäik liide hoiab seda paigal.

## Koosu alustamine

1. Koosta detail tahkisega (tühi detail ei saa minna koosu: „Build a solid first, then put it into an assembly.“).
2. Vali tööriistaribal {{ui:Koost}}.

Olekuribal on „Assembly started with Part1 as the grounded part. Insert more parts (Add copy, Insert, or Edit › Duplicate), then Joint them.“ Vasakpoolses paneelis on nüüd **Detailid** ja **Liited** ning tööriistaribal koosu tööriistad. Visandi ja elementide tööriistad peidetakse.

Esimene detail on **kinnitatud**: see ei liigu kunagi ja kõik muu paigutatakse selle suhtes.

## Detailide lisamine

- {{ui:Lisa koopia}} lisab valitud detailist (või viimasest) veel ühe koopia. Koopiad jagavad ühte detaili: muuda seda ja iga koopia muutub.
- {{ui:Dubleeri}} ({{key:Mod+D}}) rühmas Muuda teeb sama valitud detailiga. {{key:Mod+C}} ja {{key:Mod+V}} kopeerivad detaili ja kleebivad selle teiste kõrvale, selles või teises koosus; {{key:Mod+Shift+V}} kleebib selle samasse kohta. Vaata [Kopeerimine, kleepimine ja dubleerimine](topic:copy-paste).
- {{ui:Lisa}} lisab detaili sinu arvuti failist `.partcraft.json`. Detail kopeeritakse koosu.

Uued detailid ilmuvad 20 mm kaugusele kõigest olemasolevast paremale ja jäävad sinna, kuni liide need paigutab. Liiteta detaili saab ka käsitsi teisaldada: sisestatud väärtused või lohistatavad nooled (vt [Detailide loend, lahtivõetud vaated ja käsitsi liigutatavad detailid](topic:assembly-bom-explode)).

## Kahe detaili ühendamine

1. Vali {{ui:Liide}} või vajuta {{key:J}}. Paremas paneelis on **Uus liide**.
2. Klõpsa esimese detaili lamedat tahku. See tõstetakse esile.
3. Klõpsa teise detaili lamedat tahku.

Teine detail hüppab nii, et selle tahk asetub esimese detaili tahu vastu, sellele vastu. Liide ilmub jaotisse **Liited**, näiteks „Revolute1“, ja paremal paneelil kuvatakse selle seaded.

- Kui mõlemad tahud on tehtud pööramistega, on liide algselt **pöörlev**, muidu **jäik**. Muuda seda hiljem.
- Kumerat tahku ei saa valida: „That face is curved. Pick a flat face (to turn about a hole or a revolve's axis, choose it in the joint afterwards).“
- {{key:Esc}} tühistab alustatud liite (või klõpsa vasakpoolses loendis detaili).

### Liite seaded

| Seade | Mida see teeb |
|---|---|
| **Tüüp** | Üks allpool olevas tabelis olevatest liidetest |
| **Nurk (°)** | Pöörab teist detaili ümber liite telje (tahkudega risti) |
| **Nihe (mm)** | Liigutab teist detaili mööda telge tahust eemale (negatiivsed väärtused surutakse tahku sisse) |
| **Mööda X**, **Mööda Y**, **Kallutus X ümber**, **Kallutus Y ümber**, **Mööda soont**, **Soone suund** | Muud väärtused, mis kuvatakse liidetele, mis neid kasutavad |
| **Keskpunkt** (kummalgi pool) | Koht, kus liite telg läbib tahu: „The face's own origin“ (tahu enda nullpunkt), pööramise telg („Axis of Revolve1“) või ühe augu telg („Hole1, hole 2“) |

Iga väärtus, mida liide lubab liigutada, on oma kasti all lohistatava liugurina; teised määratakse ühe korra.

| Liide | Mis liigub | Määratakse ühe korra |
|---|---|---|
| **Jäik** | ei midagi | Nurk, Nihe |
| **Pöörlev** | Nurk (liigend) | Nihe |
| **Liugur** | Nihe (sahtel) | Nurk |
| **Silindriline** | Nurk ja Nihe (võll libisevas laagris) | |
| **Tasane** | Mööda X, Mööda Y üle tahu ja Nurk (detail, mis libiseb laual) | |
| **Kuul** | Nurk (pöörlemine) ning kallutus X ja Y ümber liite keskpunkti (kuulliide) | |
| **Tihvt soonde** | Mööda soont ja Nurk (tihvt sirges soones) | Soone suund: soone nurk tahu X-telje suhtes |

Tahu X ja Y on esimese detaili tahu omad; liite keskpunkt määratakse **Keskpunkti** järgi.

„The face's own origin“ on detaili nullpunkt, projitseeritud tahule, ja see ei ole sageli koht, kuhu detailid tahad joondada. Ümarate detailide ja tihvtide puhul sea **Keskpunkt** mõlemal pool pööramise või augu telje järgi: siis telg joonduvad, nagu konsentriline liide.

### Näide: kaks äärikut, tahk tahu vastu poltidega

1. Ava äärikudetail (pööramine augu ringmustriga) ja vali {{ui:Koost}}.
2. Vali {{ui:Lisa koopia}}.
3. Vajuta {{key:J}}, klõpsa esimese äärikuketta lamedat tahku (tahku, kust poltide augud algavad), seejärel sama tahku teisel äärikul. Tahud on tehtud pööramisega, seega on liide pöörlev.
4. Sea **Keskpunkt** mõlemal pool väärtuseks „Axis of Revolve1“. Äärikutel on nüüd ühine telg.
5. Sisesta **Nurk (°)** väljale `22.5`, et poltide augud joonduksid, või lohista liugurit.

## Suletud ahelad: mehhanismid

Rõngasse ühendatud detailid (neljalüli-mehhanism, kang ja liugur, raam, mis on mõlemalt poolt toestatud) moodustavad **ahela**. PartCraft lahendab iga ahela nii, et see sulguks: sellel olevad liited võtavad väärtused, mis ühendavad rõnga kokku, liikudes nii vähe kui võimalik sellest kohast, kus nad olid.

- **Sea või lohista** ahelal oleva liite väärtust ja ülejäänud ahel järgneb. Neljalüli-mehhanismi puhul lohista kangi **Nurka** ja ühendusvarras ning kõikumishoob liiguvad koos sellega. Sinu määratud väärtus säilib; teised arvutatakse sellest.
- Loendis on ahelal olev liide, mis saab veel liikuda, **sinine**: võiks veel mõne väärtuse määrata. Ahel, mis ei saa liikuda (toestatud raam), jääb mustaks. Ahel, mis ei saa sulguda, on **punane**.
- Kast **Detail** näitab **Ahelad**: mitu on suletud ja mitu väärtust saab veel liikuda, näiteks „1 suletud; 1 väärtus saab veel liikuda“.
- {{ui:Kontrolli liikumist kokkupõrgete suhtes}} käib ahelal oleva liitega läbi, ahel järgneb samm-sammult (vt [Koosu kontrollimine põrkumiste ja liikumise suhtes](topic:check-assembly)).

Lamedast latist kokku pandud lame mehhanism peab sügavuses klappima: kahe detaili, mis on rõnga mõlemal küljel tahk tahu vastu ühendatud, pinu kõrgus peab olema mõlemas suunas sama. Kasuta liite **Nihet**, et tõsta detaili kohas, kus pinu ei klapi, muidu ahel ei sulgu.

## Detailidega töötamine

Vali detail, klõpsates vaates või loendis. Paremal paneelil on detaili nimi, mitu koopiat on, selle maht, liited ning kas see on kinnitatud, liidetega paigutatud või „Not joined: stays where it was put“ (ühendamata: jääb sinna, kuhu pandi). Nupud:

- {{ui:Muuda seda detaili}} (või tööriistaribal {{ui:Muuda detaili}}, või topeltklõps detailil loendis): avab detaili muutmiseks;
- {{ui:Lisa koopia}};
- {{ui:Määra see kinnitatud detailiks}};
- {{ui:Eemalda}}: eemaldab ka selle liited, pärast küsimist.

Koosus peab jääma vähemalt üks detail: „An assembly keeps at least one part. Close it instead.“ (Koosus peab jääma vähemalt üks detail. Sulge see selle asemel.)

### Detaili muutmine kohapeal

1. Vali detail ja vali {{ui:Muuda detaili}}. Detail avaneb koos oma ajaloga; pealkirjal on „Bracket (in Bracket assembly)“.
2. Muuda seda nagu iga detaili.
3. Vali tööriistaribal {{ui:Tagasi}}. Koost uueneb: iga selle detaili koopia muutub ja visandi servadest tehtud tahkudel olevad liited järgnevad.

Muudatuse tagasi toomine on üks samm koosu tagasivõtmise loendis.

## Tagasivõtmine, salvestamine ja sulgemine

- Koostel on oma tagasivõtmise loend: {{key:Mod+Z}} ja {{key:Mod+Y}} töötavad liidete, lisamiste ja seadete kohta.
- {{ui:Salvesta}} või {{key:Mod+S}} laadib alla `<assembly name>.partcraft-asm.json`, kus on kõik detailid sees. Ava see hiljem nupuga {{ui:Ava}}.
- {{ui:Sulge}} sulgeb koosu ja naaseb detaili juurde, millest alustasid. Kui koost ei ole salvestatud, küsib see: {{ui:Loobu}}, {{ui:Loobu koostest}} või {{ui:Salvesta kõigepealt}}.
- Koosu ümbernimetamiseks klõpsa tühjal alal, et midagi poleks valitud, ja muuda paremas paneelis **Nimi**.

## Suured koosud

Koosus võib olla tuhandeid mõne detaili koopiaid. Ühe detaili koopiad joonistatakse koos, pööratav liide paigutab ainult selle taha jäävad detailid ja detaililoend näitab esimesi ridu ning nupu „Näita rohkem“ (valitud detail on alati loendis).

- Kui pöörad või suumid vaadet, joonistatakse koost, millel on üle umbes 300,000 kolmnurga, detaili kohta ühe kastina ning täielikult hetk pärast peatamist.
- {{ui:Vaated}} › {{ui:Kergvaade}} hoiab kastid alati sees. Detailide ja liidete valimine kasutab endiselt tegelikke detaile.
- Kui kiiresti see pöörleb, sõltub ka sinu graafikakaardist. PartCraftis mõõdetud arvud on väljalaskemärkmetes koos masinaga, millelt need pärinevad.

## Liidete probleemid

- Detail, mida ükski liide ei ulatu, on loendis **vaba** ja paneel ütleb: „Bracket2 is not joined to the grounded part, so it stays where it was put.“ (Bracket2 ei ole ühendatud kinnitatud detailiga, seega jääb sinna, kuhu pandi.)
- Ahel, mis ei saa sulguda (pikkused ei ulatu, piirang peatab liite, tahud ei klapi sügavuses): „Revolute3 closes a loop that cannot close: it is off by 2.000 mm. Check the faces, offsets and limits of the loop's joints.“ Selle liited muutuvad punaseks.
- Kui tahk või telg, mida liide kasutab, kaob pärast detaili muutmist: „The face this joint uses is gone from Bracket.“ Eemalda liide ja tee see uuesti.

Järgmine: [Koosu kontrollimine põrkumiste ja liikumise suhtes](topic:check-assembly).
