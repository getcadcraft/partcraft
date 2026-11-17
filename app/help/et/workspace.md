---
title: PartCrafti ekraan
summary: Ekskursioon kõigist ribadest ja paneelidest: tööriistariba ja selle muutumine, ajalugu, detaili andmed, 3D-vaade, omaduste paneel ja olekuriba.
keywords: ekraan, paigutus, tööriistariba, ajalugu, elemendipuu, omadused, paneel, olekuriba, liides, ui, ekskursioon, täisekraan
from: 5b5bb843
---

Ekraanil on viis osa: üleval üle ulatuv tööriistariba, vasakul ajalugu, keskel 3D-vaade, paremal omaduste paneel ja all olekuriba. Kõige kohal on CadCraft'i rakendusriba.

## Rakendusriba

Kõige ülemine õhuke riba kuulub CadCraft'i saidile, mitte PartCrafti endale. See näitab rakenduse nime ja kus see töötab, versioonimenüüd, **About PartCraft**, ekraanirežiimi nuppu ja teemalülitit Paber / Mudel.

- **Paber** on tumedad jooned heleda lehe peal. **Mudel** on heledad jooned tumedal taustal. Visandi värvid järgivad teemat.
- {{ui:Sätted}} (hammasratas või {{key:Mod+,}}) sisaldab vahekaarti {{ui:PartCraft}}: milline hiireklahv pöörab vaadet, hiireratas või puuteplaat, ja seosed visandamise ajal. Vt [PartCrafti sätted](topic:settings).
- Ekraanirežiimi nupp või {{key:Ctrl+Shift+F}} vahetab tavalise, täisekraani ja täisekraani ribadega peidetud vahel. Kui ribad on peidetud, too osuti ülemisse serva (või koputa seal), et need tagasi tuua. {{key:Esc}} viib tagasi tavalisse. See klahv on {{key:Ctrl+Shift+F}} ka Macis, mitte ⌘.

## Tööriistariba

Tööriistariba on grupeeritud. See muutub sõltuvalt sellest, mida teed, nii et see mahub ühele reale:

| Grupp | Nupud | Kuvatakse |
|---|---|---|
| Fail | {{ui:Uus}}, {{ui:Ava}}, {{ui:Salvesta}}, {{ui:Ekspordi}} (menüü) | Alati |
| Visand | {{ui:Visand}} | Kui visand pole avatud |
| Visand | {{ui:Välju}}, {{ui:Joon}}, {{ui:Ristkülik}}, {{ui:Ring}}, {{ui:Kaar}}, {{ui:Punkt}}, {{ui:Telgjoon}}, {{ui:Ümardus}}, {{ui:Mõõt}}, {{ui:Konstruktsioon}} | Ainult visandi avamise ajal |
| Elemendid | {{ui:Väljapressimine}}, {{ui:Lõika}}, {{ui:Pööramine}}, {{ui:Auk}}, {{ui:Lineaarne}}, {{ui:Ringjas}}, {{ui:Peegeldus}}, {{ui:Ümardus}}, {{ui:Faas}}, {{ui:Koor}}, {{ui:Veel}} (menüü: Pööratud lõige, Tasand, Telg, Punkt, {{ui:Pühkimine}}, {{ui:Loft}}, Mustand) | Detailil, mitte visandi ega joonise avamise ajal. Ümardus ja faas töötavad sirgetel servadel kahe lameda tahu vahel; koor ja mustand lamedatel tahkudel. Pühkimine ja Loft pole selles versioonis veel ehitatud (nad vajavad täpset tuuma); ühe klõpsamine ütleb seda |
| Elemendid | {{ui:Valmis}} | Ainult siis, kui valid servi või tahke ümardusele, faasile, koorele või mustandile |
| Joonis | {{ui:Joonis}} | Detailil (kasutatav, kui detailil on tahkis) |
| Joonis | {{ui:Baas}}, {{ui:Raam}}, {{ui:Viimistlus}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Tagasi}} | Ainult joonislehel |
| Koost | {{ui:Koost}} | Detailil (kasutatav, kui detailil on tahkis) |
| Koost | {{ui:Lisa koopia}}, {{ui:Lisa}}, {{ui:Liide}}, {{ui:Põrkumine}}, {{ui:Muuda detaili}}, {{ui:Sulge}} | Ainult koosus |
| Koost | {{ui:Tagasi}} | Kui muudad detaili koosust |
| Muuda | {{ui:Võta tagasi}}, {{ui:Tee uuesti}}, {{ui:Kopeeri}}, {{ui:Kleebi}}, {{ui:Veel}} (menüü: Lõika, Kopeeri, Kleebi, Kleebi samasse kohta, Dubleeri, {{ui:Kustuta}}, Vali kõik, Tühista valik) | Alati; iga kirje toimib visandil, ajaloos või koostul, kus oled |
| Vaade | {{ui:Mahuta}}, {{ui:Normaali suunas}}, {{ui:Vaated}} (menüü: Mõõda, {{ui:Massiomadused}}, Lõige, Mustand, {{ui:Sebra}}, {{ui:Kõverus}}, {{ui:Baastasandid}}, seejärel Isomeetriline, {{ui:Eest}}, {{ui:Tagasi}}, {{ui:Ülalt}}, {{ui:Altpoolt}}, {{ui:Paremalt}}, {{ui:Vasakult}}) | Alati |

Liiguta nupu kohale, et näha, mida see teeb ja mis on selle klahv. Hallilt näidatud nupp ei ole praegu kasutatav: näiteks elementide nupud visandi avamise ajal või {{ui:Liide}} enne, kui koostus on kahest detailist.

Grupis Muuda olev {{ui:Veel}} menüü loetleb iga muutmistoimingu koos klahviga. Mida kopeerimine ja kleepimine puudutavad, sõltub sellest, kus oled; vt [Kopeeri, kleebi ja dubleeri](topic:copy-paste). Hallilt näidatud kirje tööriistavihje ütleb, miks see praegu ei saa toimida.

{{ui:Ekspordi}} menüüs on {{ui:STL, 3D-printimiseks}}, {{ui:3MF, 3D-printimiseks}}, {{ui:STEP AP242 (täpne tahke)}}, {{ui:STEP AP214 (täpne tahkis)}}, {{ui:STEP (tahkudeks jaotatud, võrgusilma tuum)}}, {{ui:STEP AP214 (fassetiline, võrgutuum)}}, {{ui:DXF visandist või lamedast tahust}} ja {{ui:Joonis (PDF): vaated, lõige, detail, GD&T}}. Täpsed STEP-kirjed kirjutavad kumerad tahud oma tõeliste pindadena; tahkudega kirjed kirjutavad need lamedate tahkudena.

## Ajalugu (vasakul)

Vasakpoolne paneel on detaili elementide ajalugu, nimekiri, mida PartCraft ehitab uuesti ülevalt alla.

- Pealkiri on detaili nimi ("Part1", kuni selle ümber nimetad).
- Esimesena tulevad **Eest-tasand**, **Ülalt-tasand** ja **Paremalt-tasand**. Klõpsa ühel, et seda valida; see tõstetakse vaates esile.
- Nende all on sinu elemendid selles järjekorras, milles need tehti. Visand, mida element kasutab, on selle elemendi all taandega.
- Rea parempoolses servas olev lipp ütleb, mis olekus ta on:

| Lipp | Tähendus |
|---|---|
| (puudub) | Ehitatud ja visand on täielikult määratud |
| − | Visand, mis on alamääratud (see saab veel liikuda) |
| + | Visand, mis on ülemääratud |
| ⚠ | Ehitatud, hoiatusega (loe kursoriga) |
| ⚠ viga | Element ebaõnnestus. Loe kursoriga, miks, või klõpsa sellel |
| ⚠ pole ehitatud | Element vajab teist, mis ebaõnnestus või on väljas |
| väljas | Välja lülitatud |

- Iga element näitab oma põhiarvu nime järel, näiteks "25 mm" väljapressimisel või "Ø6.6 thru" augul. Topeltklõpsa arvul või vajuta reas {{key:F2}}, et seda kohe muuta. Vt [Muuda mõõte](topic:change-sizes).
- Klõpsa elemendil, et seda paremal muuta. Topeltklõpsa visandil, et seda avada.
- Kui tagasi kerid, ilmub nimekirja rida **Tagasikerimise riba · edasikerimine**. Selle all olevad elemendid on hallid ja ehitamata.
- Kui rida on fookuses, liiguvad {{key:Up}} ja {{key:Down}} ridade vahel ning {{key:Alt+Up}} / {{key:Alt+Down}} liigutavad elementi ise, kus ajalugu seda lubab.

Koostus näitab sama paneel hoopis **Detaile** (esimene on märgitud "kinnitatud") ja **Liited**.

### Detaili andmed

Ajaloo all olev kast **Detail** loetleb tahkise **Maht**, **Pindala**, **Mõõdud (X × Y × Z)**, **Läbivad augud**, **Kehad**, **Kolmnurgad**, **Elementide** arvu ja kui palju on **Ebaõnnestuvaid**. Mahud ja pindalad on võrgusilma tuuma ehitatud tahkudeks jaotatud tahkisel, ümarate kujundite puhul natuke tõelisest väärtusest väiksemad (vt [Elemendid ja nende valikud](topic:features#curves-resolution)).

Koostus on kasti pealkiri **Koost**: Detailid, Eksemplarid, Liited, Ühendamata ja Interferents.

## 3D-vaade (keskel)

Vaade näitab tahkist, baastasandeid ja kõiki visandeid, mida ükski element veel ei kasuta.

Baastasandid joonistatakse täielikult, kui detail on tühi. Kui sellel on tahkis, jäävad nad tagasi: joonistatakse nõrgalt, et nad ei kataks detaili, ja klõpsud lähevad läbi nende detailini. Need tulevad täies mahus tagasi, kui valid, kuhu visandada ({{ui:Visand}} ilma valikuta), ja kui valid ühe ajaloost. {{ui:Vaated}} › {{ui:Baastasandid}} peidab need täielikult; need on ikka näha, kui valid, kuhu visandada. PartCraft jätab selle valiku meelde.

- Lohista, et detaili pöörata; paremklõpsu- või keskmise nupu lohistamisega liiguta vaadet; keeruta ratast, et suumida osuti kohal. Üksikasjad: [Klahvid ja hiir](topic:keyboard).
- Liigu tahu, serva või tasandi kohale, et see süttiks. Klõpsa, et see valida. Tahud tõstetakse esile tervikuna ja servad joonistatakse ning valitakse tervikuna. {{key:Shift}}+klõps koguvad mitu serva või tahku. Need jäävad märgituks.
- Paremas ülanurgas olev vaatekuup pöördub koos detailiga: klõpsa tahku, serva või nurka, et sealt vaadata, lohista seda pööramiseks, maja-nupp viib tagasi algusesse. Vt [Vaatekuup](topic:view-cube).
- Valitud väljapressimine näitab oma lõputahul oranži noolt, pööramine kaarnoolt pöörde lõpus: lohista seda, et muuta sügavust või nurka, või sisesta väärtus kõrval olevasse kasti. Vt [Muuda mõõte](topic:change-sizes#drag-it-in-the-view).
- Kui detail on tühi, loetleb kast pealkirjaga **Alusta detaili** esimesed sammud.
- Lohista fail `.partcraft.json` või `.partcraft-asm.json` kuhu tahes vaatesse, et see avada. Sinna lohistatud `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- või `.3dm`-fail avaneb tahkiskehana.

### Servade või tahkude valimise ajal

Pärast {{ui:Ümardus}}, {{ui:Faas}} või {{ui:Koor}} valikuta (või sellisel elemendil {{ui:Vali servad}}) näitab detail sellisena, nagu enne seda elementi oli. Klõpsa servadel või tahkudel, et neid lisada või eemaldada; märgid näitavad, mis on sees. {{ui:Valmis}} või {{key:Esc}} lõpetab. Vt [Ümardamine, faasimine ja õõnestamine](topic:fillet-chamfer-shell).

### Joonislehel

{{ui:Joonis}} asendab 3D-vaate A3-joonislehega. Ratas suumib, paremklõps või keskmise nupuga lohistamine liigutab vaadet, {{key:F}} mahutab. Vt [Tee joonis](topic:drawing-pdf).

### Visandi avamise ajal

Vaade pöördub otse visandi tasandile ja peale ilmub 2D-visandikiht. Detail näitab ainult elemente, mis tehti enne seda visandit. Ülemine vasak riba näitab visandi olekumärki ("Täielikult määratud", "Alamääratud · 3 vabadusastet" jne) ja nime, näiteks "Sketch2 on a face of Extrude1".

## Omaduste paneel (paremal)

Paremal paneel näitab valitut ja selle pealkiri nimetab selle:

- **Detail** (midagi pole valitud): detaili **Nimi** ja **Kõverad** säte.
- Tasand: nupp {{ui:Visand sellel}}.
- **Tahk**: mis liiki see on (lame tahk, silinder oma raadiuse ja teljega, koonus, sfäär või toorus), selle pindala, milline element selle tegi, ja lameda tahu puhul {{ui:Visand sellel tahul}}, {{ui:Normaali suunas}}, {{ui:Ekspordi tahk DXF-ina}}, {{ui:Väljapressi sellest}}, {{ui:Lõika sisse}} ja {{ui:Auk siin}} (vt [Tõmba või suru kogu tahku](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Serv**: selle liik (sirge, ring oma keskpunkti ja raadiusega või kõver), pikkus ja kaks tahku, mille vahel see on (näiteks "Extrude1 end face and Extrude1 side"), nuppudega {{ui:Ümardus}} ja {{ui:Faas}}.
- Mitu serva või tahku valitud klahviga {{key:Shift}}: kui palju, nuppudega {{ui:Ümardus}} ja {{ui:Faas}} servadele ning {{ui:Tühjenda}}.
- Element: selle arvud ja valikud, tema visandi mõõdud, seejärel {{ui:Lülita välja}}, {{ui:Keri siiani tagasi}}, {{ui:Teisalda üles}}, {{ui:Teisalda alla}}, {{ui:Kustuta}} ja selle **Nimi**.
- Avatud visand: selle olek, seosed, mida saad valikule lisada, seoste ja mõõtmete loend, **Lisa koordinaatide järgi** ning {{ui:Välju visandist}}, {{ui:Mahuta}} ja {{ui:Ekspordi DXF-ina}}.
- Joonislehel: lõike- ja detailisätted või valitud GD&T-sümbol.
- Koostes: koost, valitud detail või valitud liide.

Iga arvukast jõustub, kui vajutad {{key:Enter}} või {{key:Tab}} või klõpsad mujale. Detail ehitatakse kohe uuesti; OK-nuppu pole. Tagasi minemiseks kasuta {{key:Mod+Z}}.

## Olekuriba (all)

- Vasakul osuti koordinaadid visandis (ainult visandi avamise ajal).
- Keskel sõnumid: mida teha järgmiseks ja miks midagi lükati tagasi. Loe seda, kui näib, et midagi ei juhtu.
- Paremal lähedal tuuma märk: selles versioonis alati "Võrgusilma tuum". Vaata kursoriga, mida see tähendab. Vt [Võrgusilma tuum](topic:solid-kernels).
- Paremal märk: "Ehitan uuesti…" detaili uuesti ehitamise ajal, seejärel "Ehitati … ms jooksul", kui kõik on korras, või "1 element ebaõnnestub". Koostes ütleb "Paigutati … ms jooksul" või loeb liidete probleeme.

Vt ka [Alusta juhendit töötoas Illustreeri](topic:illustrate): töötuba, mis teeb koostejuhendeid sinu detailidest ja koostudest.

## Kitsal ekraanil

Kuni 760 pikslit laiuses, näiteks telefonil, vaade jääb ekraanile: tööriistariba on üks rida, mis kerib küljele, ja paneelid avanevad lehtedena allservas asuvast ribast. {{ui:Tööriistad}} peidab tööriistariba ja {{ui:Teisalda}} paneb selle alla. Vt [Puuteplaat, puuteekraan ja väikesed ekraanid](topic:trackpad-and-touch).
