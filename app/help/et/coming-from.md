---
title: Tulemas teisest parameetrilisest modelleerijast
summary: Kuidas töölauapõhiste parameetriliste detailimodelleerijate harjumused vastavad PartCraftile ja erinevused, mis kogenud kasutajaid esimese tunni jooksul komistama panevad.
keywords: üleminek, migreerimine, tuttav, elementide haldur, konstruktsioonipuu, nutikas mõõt, lisav väljapressimine, lõikav väljapressimine, augu viisard, liited, interferentsi tuvastamine, tagasikerimise riba, omaduste haldur, hiir, erinevused
from: fbacaee1
---

Kui konstrueerid detaile SolidWorksis, on enamik PartCrafti ideid tuttavad: visandid tasanditel Front, Top ja Right, seosed ja nutikad mõõdud, elementide ajalugu koos tagasikerimise ribaga ning koosud, mis paigutatakse liidetega. Kuidas nendeni jõuad, erineb mõnes kohas ja see esimene versioon teeb vähem. See lehekülg seob sinu harjumused ja loetleb üllatused.

## Harjumused, seostatuna

| Oled harjunud | PartCraftis |
|---|---|
| Konstruktsioonipuu vasakul | Ajalugu vasakul: tasandid, seejärel elemendid; visandid on taandatud elemendi alla, mis neid kasutab |
| Front, Top ja Right tasandid | Samad kolm, läbi nullpunkti. Front on XY-tasand, Top on XZ, Right on YZ; Y osutab üles |
| Visand tasandil või tahul ning kinnituse nurk väljumiseks | {{ui:Visand}} ({{key:S}}) valitud tasandil või lamedal tahul; {{ui:Välju}} või {{key:Esc}}, kuni see sulgub |
| Nutikas mõõt | {{ui:Mõõt}} ({{key:D}}). Klõpsa ühele või kahele objektile, seejärel kohale, kuhu arv läheb. Kus paigutad, valib horisontaalse, vertikaalse või joondatud mõõdu |
| Seoste lisamine omaduste paneelil | Vali objektid, seejärel seosenupud paremas paneelis (Kokkulangevus, Horisontaalne, Paralleelne, Puutuv, Võrdne jne) |
| Automaatsed seosed visandamisel | Kinnitused lisavad kokkulangevuse, punkti kõvera peal, horisontaalse ja vertikaalse seose |
| Sinine / must / punane visandi värvid | Sama idee: sinine on alamfikseeritud, must on täielikult fikseeritud, punane on ülefikseeritud. Silt näitab alles jäänud vabadusastmeid |
| Pööramise telgjoon | {{ui:Telgjoon}} ({{key:N}}); {{ui:Pööramine}} kasutab esimest telgjoont, kui sa ei vali teist telge |
| Visandi ümardus | {{ui:Ümardus}} ({{key:F}}) visandis: klõpsa nurgal, sisesta raadius |
| Konstruktsioonigeomeetria lüliti | {{ui:Konstruktsioon}} ({{key:Q}}) |
| Väljapressitud lisand | {{ui:Väljapressimine}}: Pime, Keskmine tasand, Kuni tahuni / järgmiseni / tipuni, Nihe tahust, teine suund, kaldega, üks kontuur ({{ui:Vali piirkonnad}}) |
| Väljapressitud lõige | {{ui:Lõika}}: algab valikuga Läbi kõige; taskuks lülita Pime |
| Pööratud lisand / lõige | {{ui:Pööramine}} / {{ui:Veel}} › {{ui:Pööratud lõige}} |
| Abitasand / telg / punkt | {{ui:Veel}} › {{ui:Tasand}}, {{ui:Telg}}, {{ui:Punkt}} (vt [Abitasandid, teljed ja punktid](topic:reference-geometry)) |
| Pühitud / sülestatud lisand või lõige, kalle | {{ui:Veel}} › {{ui:Kalle}} lamedatel tahkudel (vt [Pühkimine, sülestamine ja kalle](topic:sweep-loft-draft)). {{ui:Pühkimine}} ja {{ui:Loft}} ei ole selles versioonis veel valmis (need vajavad täpset tuuma) |
| Augu viisard | {{ui:Auk}} igal vabal visandipunktil: lihtne, vastuava, vastuurdimine (90° / 82°) või keermestatud ISO meetriline M2–M24, läbiv või pime |
| Lineaarne / ringjas muster, peegeldus | {{ui:Lineaarne}}, {{ui:Ringjas}}, {{ui:Peegeldus}} (elemendid või kogu keha) |
| Ümardused ja faasid servadel | {{ui:Ümardus}} / {{ui:Faas}}: klõpsa servale, {{key:Shift}}+klõps rohkematele, seejärel nupp. Üks raadius; võrdsed, kahe kaugusega või kauguse-nurga faasid. Selles versioonis ainult sirged servad kahe lameda tahu vahel; nurgal kokku jooksvad ümarused lõigatakse nurga kaupa (mitred). Kõverad servad ümarda või faasi visandis ({{ui:Ümardus}} visandis, {{key:F}}) |
| Koor | {{ui:Koor}}: klõpsa avamiseks lamedatele tahkudele, seejärel nupp. Üks seinapaksus |
| STEP-faili avamine | {{ui:Ava}}: loetakse kolmnurkadena, tahke kehana, millele ehitada ([STEP-faili avamine](topic:import-step)) |
| Muuda elementi, seejärel OK | Klõpsa elemendil; muuda arve paremal; see ehitatakse sisestamise ajal uuesti. OK ega Loobu nuppe ei ole: kasuta {{key:Mod+Z}} |
| Muuda visandit | Topeltklõps visandil ajaloos |
| Uuesti ehitamine | Automaatne pärast iga muudatust. Klahvi uuesti ehitamiseks ei ole |
| Peida / taasaktiveeri | {{ui:Lülita välja}} / {{ui:Taasaktiveeri}} paremal paneelil |
| Lohista tagasikerimise riba | {{ui:Keri siiani tagasi}} elemendil; klõpsa „Rollback bar · roll forward“, et naasta |
| Lohista element puus järjestamiseks | {{ui:Teisalda üles}} / {{ui:Teisalda alla}} või {{key:Alt+Up}} / {{key:Alt+Down}}; keeldutakse koos põhjusega, kui see rikuks sõltuvust |
| Muuda mõõte topeltklõpsuga mudelil | Vali element: selle visandi mõõdud loetletakse paremas paneelis |
| Liited: kokkulangev, konsentriline, kaugus, nurk | {{ui:Liide}} ({{key:J}}): vali lame tahk igal detailil; liide paneb need tahk tahu vastu. **Keskpunkt** telje järgi toimib nagu konsentriline; **Nihe** nagu kaugus; **Nurk** nagu nurk |
| Fikseeritud komponent | Esimene detail on kinnitatud; {{ui:Määra see kinnitatud detailiks}} muudab seda |
| Komponendi lisamine | {{ui:Lisa koopia}} või {{ui:Dubleeri}} (veel üks koopia) või {{ui:Lisa}} (detailifailist) |
| Muuda detaili koosus | {{ui:Muuda detaili}}, seejärel {{ui:Tagasi}} |
| Häiringu tuvastamine | {{ui:Põrkumine}} |
| Komponendi liigutamine liikumise nägemiseks | Lohista pöörleva või liugurliidese nurga- või nihkeliugurit; {{ui:Kontrolli liikumist kokkupõrgete suhtes}} käib selle läbi. Detail ilma liiteta: **Teisalda käsitsi** (lohistatavad nooled või sisestatud väärtused) |
| Mõõtmine / kontroll | {{ui:Vaated}}, seejärel {{ui:Mõõda}} ({{key:M}}): kaugused, nurgad, raadiused, pindalad; {{ui:Massi omadused}} |
| Lahtivõetud vaade, materjaliloend | Koostes, kus midagi pole valitud: **Lahtivõetud vaated** ja **Materjaliloend** paremas paneelis |
| Massi omadused | Kast **Detail**: maht, pindala, suurus tahuliseks jaotatud kehal (ümarate detailide puhul veidi madal). Massi ei ole: materjale pole veel |
| Salvesta, Salvesta STEP-ina | {{ui:Salvesta}} laadib alla `.partcraft.json`; {{ui:Ekspordi}} sisaldab STL, 3MF, täpset STEP (AP242 või AP214), tahulist STEP, DXF ja PDF-joonist |
| Joonise tegemine detailist | {{ui:Joonis}}: automaatne A3 leht kolme vaate, isomeetria, ühe lõike, ühe detailiga, baaside, elemendi juhtraamide ja pinnakvaliteedi märkidega. Mõõtmestatud on ainult üldmõõtmed |
| Keskmise nupuga lohistamine pööramiseks | **Vasakuga lohistamine** pöörab siin. Keskmise või parema nupuga lohistamine nihutab. Rattaga suumitakse osuti kohas |
| Vaate suund, Normaali suunas | {{ui:Vaated}} menüü; {{ui:Normaali suunas}} valitud tahu, tasandi või visandi jaoks |
| Suumi mahutamiseks (F) | {{key:F}} või {{ui:Mahuta}} (visandis on {{key:F}} ümarduse tööriist) |
| Parempoolsed kontekstimenüüd | Puuduvad. Parema nupuga lohistamine nihutab; visandis lõpetab parem klõps joonte ahela |

:::tip
Kui su käed tunnevad SolidWorksi, vali menüüstiil {{ui:Elementide puu}} jaotises {{ui:Sätted}} › {{ui:PartCraft}} › {{ui:Menüüd, klahvid ja hiir}}: lint vahekaartidega Elemendid, Visand, Pinnad, Hindamine, Joonis, Koost ja Vaade; keskmine nupp pöörleb ümber, {{key:Shift}} ja keskmine nupp nihutavad ning vasak nupp ainult valib. Vaata [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse).
:::

## Erinevused, mis panevad inimesi komistama

**Kogu visand on profiil.** Väljapressimine ja pööramine kasutavad kõiki suletud ahelaid visandis. Elemendi jaoks ei saa valida ühte piirkonda ega ühte kontuuri visandist. Kasuta iga elemendi jaoks ühte visandit.

**Millist visandit element võtab.** Element kasutab visandit, mille just sulgesid, või ajaloos valitud visandit. Kui midagi pole valitud, võtab ta uusima visandi, mida ükski element veel ei kasuta. Kui saad vale, vali õige visand ja vali element uuesti.

**Muudatused rakenduvad sisestamise ajal.** Elemendi dialoogi OK ja Loobu nuppudega ei ole. Iga arv ehitatakse kohe uuesti ning tagasi saab {{key:Mod+Z}} abil. Tagasivõtmise loend hõlmab visandi muudatusi, elemente ja seadeid võrdselt.

**Ülefikseeritust ei jäeta kunagi märkamatuks.** Juhitavaid (referents-)mõõte ei ole. Mõõt, mille teised seosed juba fikseerivad, teatatakse ülefikseeritusena („is already implied. Delete it.“ ehk „on juba tuletatud. Kustuta see.“). Vastuoluline mõõt jätab geomeetria puutumata ja muutub punaseks. Kustuta üks neist või võta tagasi.

**Pühkimised ja sülestamised ei ole veel valmis; ümardused, faasid, koored ja kalded on piiratud.** PartCrafti see versioon loob kõik detailid võrgusilma tuumaga (mesh kernel); olekuriba silt ütleb alati „Mesh kernel“. Ümarduste ja faaside töötavad sirgete servade peal kahe lameda tahu vahel ning kus ümarused kohtuvad nurgas, lõigatakse need nurgaga, mitte ei sulandata. Koored avanevad ja kalded kallutavad ainult lamedaid tahke. Elemendid, mis vajavad täpset tuuma, jäävad klõpsatavaks, kuid valimisel ütlevad „not built yet“ (pole veel valmis). Vaata [Võrgusilma tuum](topic:solid-kernels) ja [Mis ei ole veel valmis](topic:not-built-yet).

**Kaks nuppu nimega Ümardus.** Visandis {{ui:Ümardus}} ({{key:F}}) ümardab visandi nurga. Detailil ümardab elementide rühma {{ui:Ümardus}} tahkude servi (selles versioonis sirgeid servi kahe lameda tahu vahel). Selles versioonis ei ole pühkimist ega sülestamist: vaata [Mis ei ole veel valmis](topic:not-built-yet).

**Augud vajavad vabu punkte.** {{ui:Auk}} puurib punktides, mis on tehtud punkti tööriistaga. Ringide keskpunktid ja joonte otsad ei lähe arvesse.

**Läbi kõige on ainult lõigete jaoks.** Lisamine vajab sügavust. Lõppseisundeid „kuni tipuni / pinnani / järgmiseni“ ei ole veel.

**Tahke keha on tahuline.** Võrgusilma tuum loob ümarad tahud lamedatest tahkudest, seega vaade, mahud, STL- ja 3MF-eksportid koosnevad neist: detaili paneelil olev **Kõverad** muudab need peenemaks. Täpne STEP-eksport seda ei tee: see kirjutab ümarad tahud nende tõelistele pindadele.

**Ainult millimeetrid.** Tollide seadet ei ole veel. Kui sisestad tollimõõte, korruta need 25.4-ga.

**Y on üleval.** Front-tasand on sinu poole ja Top vaatab detailile alla, nagu eeldad, kuid maailma üles-telg on Y. STL-, 3MF- ja täpsed STEP-eksportid pööratakse Z üles; tahuline STEP jätab Y üles.

**Liited on tahud, mitte geomeetriapaarid.** Liide algab alati kahest lamedast tahust, mis on pandud tahk tahu vastu. Tihvti augus puhul vali lame tahk augu ümber ja tihvti õlg, seejärel sea **Keskpunkt** augu telje ja tihvti pööramise telje järgi. Detailid, millele liited ei ulatu, jäävad sinna, kuhu need sisestati; neid ei saa lohistada. Ahelas olevaid liiteid ei lahendata.

**Salvestamine on allalaadimine.** Ei ole faili, mida pidevalt üle kirjutad. Iga salvestus on uus fail sinu allalaadimiste kaustas. Anna detailile kõigepealt nimi ja hoia oma failid projektikaustas.

**Kontekstimenüüd ega käsuhalduri vahekaarte ei ole.** Kõik on tööriistaribal ja paremas paneelis ning tööriistariba muutub sõltuvalt sellest, mida teed: visandi tööriistad ilmuvad ainult visandis ja koosu tööriistad ainult koosus.

**Visandis on klahvid ühetähelised.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} ja {{key:S}} valivad tööriistad ilma modifikaatorita. Vaata [Klahvid ja hiir](topic:keyboard).
