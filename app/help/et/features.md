---
title: Elemendid ja nende valikud
summary: Iga tööriistariba element koos seadete, vaikeväärtuste ja piirangutega, väljapressimisest ümarduse, koore ja imporditud STEP-tahkisteni, kõigi elementide ühised toimingud ning detaili seaded.
keywords: elemendid, väljapressimine, lõige, pööramine, pööratud lõige, auk, vastuauk, lineaarne muster, ringmuster, peegel, ümardus, faas, koor, import, valikud, vaikeväärtused, seaded, eraldusvõime, kõverad, fassetid, välja lülitamine, tagasikerimine, pole veel ehitatud
from: ab3a598e
---

Elemendid on ajaloos loendis selles järjekorras, milles nad tehti, ning ehitatakse ülevalt alla. Iga element on nimetatud oma liigi järgi koos numbriga: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft ehitab iga elemendi võrgusilma tuumaga. Ümardus ja faas töötavad sirgetel servadel kahe lameda tahu vahel ning Koor avab lamedaid tahke. Imporditud tahked vajavad täpset tuuma, mida see versioon ei oma: neid pole veel ehitatud, ja nende jaotis allpool kirjeldab neid detailina, mille eelmisest versioonist tehtud detail hoiab alles. Vt [Võrgusilma tuum](topic:solid-kernels) ja [Mis pole veel valmis](topic:not-built-yet).

## Visand

| Säte | Märkused |
|---|---|
| Tasand | Eesmine, Ülemine või Parem tasand või lame tahk. Ainult näidatud, ei muudeta: visandi liigutamiseks tee uus |
| Olek | Täielikult määratud, Osaliselt määratud (koos vabadusastmetega), Üle määratud või Tühi |
| Geomeetria, seosed | Mitu kõverat, punkti ja seost |
| Juhtmõõtmed | Iga visandi mõõde, muudetav |

Nupud: {{ui:Muuda visandit}}, {{ui:Ekspordi DXF-ina}}.

## Väljapressimine ja lõige

{{ui:Väljapressimine}} ja {{ui:Lõika}} teevad sama elemendi, alustades erinevate seadetega.

| Säte | Valikud | Väljapressimine algab | Lõige algab |
|---|---|---|---|
| Toiming | Kühm (lisa materjali), Lõige (eemalda materjal), Ristumine (säilita kattuv osa), Uus keha (selles versioonis veel pole) | Kühm | Lõige |
| Lõpp | Kindel (sügavus), Keskpind (mõlemas suunas), Läbi kõik | Kindel | Läbi kõik |
| Sügavus (mm) | Üle 0, kuni 1,000,000 | 10 | 10 |
| Pööra suund | Väljas / sees | Väljas | Väljas |

- Profiil: iga suletud silmus tugevatest joontest, ringjoontest ja kaartest visandis. Silmused silmuste sees on augud.
- Läbi kõik töötab ainult lõigetel. See ulatub detailist läbi valitud küljel.
- Lõige läheb materjali sisse, eemale visandi tasandi väljapoole suunatud küljest; Pööra suund pöörab selle ümber.

## Pööramine ja pööratud lõige

| Säte | Valikud | Vaikimisi |
|---|---|---|
| Toiming | Kühm, Lõige | Kühm ({{ui:Pööramine}}), Lõige ({{ui:Veel}} › {{ui:Pööratud lõige}}) |
| Nurk (°) | Üle 0, kuni 360 | 360 |
| Telg | Esimene keskjoon, mis tahes joon või keskjoon visandis või telgelement, mis lamab visandi tasandil | Esimene keskjoon |

- Profiil peab jääma telje ühele küljele. See võib seda puudutada.
- Pööramise telge saavad kasutada ringmustrid ja koostu liited.

## Auk

| Säte | Valikud | Vaikimisi |
|---|---|---|
| Tüüp | Lihtne, Vastuauk | Lihtne |
| Läbimõõt (mm) | Üle 0 | 6 |
| Läbi kõik | Sees / väljas | Sees |
| Sügavus (mm) | Kui Läbi kõik on väljas | 10 |
| Vastuaugu ⌀ | Laiem kui auk | 11 |
| Vastuaugu sügavus | Madalam kui pimeauk | 6 |
| Pööra suund | Väljas / sees | Väljas |

- Üks auk igas visandi vabas punktis (punktid, tehtud punktitööriistaga). Paneel näitab, mitu.
- Augud puuritakse visandi tasandiga risti, materjali sisse.
- Iga augu telge saavad kasutada koostu liited ("Hole1, auk 2").

## Lineaarne muster

| Säte | Valikud | Vaikimisi |
|---|---|---|
| Kopeeritavad elemendid | Mis tahes tahked elemendid selle kohal | Valitud element, muidu viimane tahke element |
| Suund | X-telg, Y-telg, Z-telg; varasema visandi joon; pööramise telg; valitud serv | X-telg (või serv, mis valiti lisamisel) |
| Vahe (mm) | Mis tahes number | 20 |
| Arv | 1 kuni 1000, sealhulgas algne | 3 |
| Pööra suund | Väljas / sees | Väljas |

## Ringmuster

| Säte | Valikud | Vaikimisi |
|---|---|---|
| Kopeeritavad elemendid | Nagu lineaarsel | Nagu lineaarsel |
| Telg | Nagu ülal suuna puhul | Viimase pööramise telg, muidu Y-telg (või valitud serv) |
| Nurk (°) | Üle 0, kuni 360. 360 jaotab koopiad võrdselt kogu ringi ulatuses; vähem laotab need nurga ulatusse | 360 |
| Arv | 1 kuni 1000, sealhulgas algne | 6 |
| Pööra suund | Väljas / sees | Väljas |

## Peegel

| Säte | Valikud | Vaikimisi |
|---|---|---|
| Peegel | Kogu keha (seni ehitatud) või valitud elemendid | Valitud element, muidu kogu keha |
| Peegeltasand | Eesmine, Ülemine või Parem tasand; lame tahk | Parem tasand või lame tahk, mis valiti lisamisel |

## Ümardus ja faas

Selles versioonis lõikab võrgusilma tuum need ümardused ja faasid sirgetel servadel kahe lameda tahu vahel (välised või sisemised nurgad), ühe raadiusega. Ümar serv annab teate: "Ümardus: selles versioonis ainult sirged servad kahe lameda tahu vahel (need ehitab võrgusilma tuum). Ümarda või faasi kõverad servad visandis." Kus ümarad servad kohtuvad nurgas, on need nurgast lõigatud ja element hoiatab: "Ümardus võrgusilma tuumaga: kus ümarad servad kohtuvad, on need nurgast lõigatud, mitte segatud." Kõik faasitüübid (võrdne kaugus, kaks kaugust, kaugus ja nurk, koos **Vaheta küljed**) töötavad. Vt [Ümarda, faasi ja õõnsusta](topic:fillet-chamfer-shell).

| Säte | Valikud | Vaikimisi |
|---|---|---|
| Raadius (mm) (Ümardus) | Üle 0 | 2 |
| Kaugus (mm) (Faas) | Üle 0, mõlemal tahul sama | 1 |
| Servad | Valitud servad, igaüks nimetatud kahe tahu järgi, mida see ühendab ("Extrude1 otsatahk × Extrude1 külg"), koos **Eemalda** | Servad, mis valiti lisamisel |

- Vali servad enne nupu valimist ({{key:Shift}}+klõps mitme jaoks) või vali nupp, kui ühtegi pole valitud, ja klõpsa servi hiljem.
- {{ui:Vali servad}} (või topeltklõps elemendil) muudab servi.
- Servi hoitakse kahe tahu järgi, mida nad ühendavad, seega need püsivad õigel kohal ka ülesvoolu mõõtmete muutmisel.

## Koor

Võrgusilma tuum ehitab selle. Ainult lamedaid tahke saab avada ("Koor: selles versioonis avab see ainult lamedaid tahke (ehitab võrgusilma tuum)."); erineva paksusega seinu pole veel ehitatud. Vt [Ümarda, faasi ja õõnsusta](topic:fillet-chamfer-shell).

| Säte | Valikud | Vaikimisi |
|---|---|---|
| Sein (mm) | Üle 0 | 2 |
| Seinad kasvavad väljapoole (tahud jäävad sisse) | Väljas: seinad lähevad sissepoole. Sees: seinad lähevad väljapoole | Väljas |
| Avatud tahud | Eemaldatavad tahud, vähemalt üks, koos **Eemalda** | Tahud, mis valiti lisamisel |

{{ui:Vali pinnad}} muudab avatud tahke.

## Imporditud keha

Tekib STEP-, STL-, OBJ- või 3MF-faili avamisel: kolmnurkadest koosnev tahkekeha ilma oma ajaloota ([Ava STEP-fail](topic:import-step), [Ava STL, OBJ või 3MF](topic:open-meshes)). See näitab faili, kust see tuli, ja mida import parandas; **Ühikud failis**, **Üles failis** ja **Kasuta seda selleks** jäävad muudetavaks. STEP-tahke, mille imporditi vanema versiooni täpse tuumaga ehitusest, jääb ajalukku märgituna kui pole veel ehitatud; ava STEP-fail uuesti, et tuua see kolmnurkadena.

| Säte | Valikud | Vaikimisi |
|---|---|---|
| Üles failis | Z üles (enamik CAD), Y üles | Z üles |

Mustrid ja peeglid saavad kopeerida imporditud tahke, aga mitte ümardust, faasi ega koort.

## Mida igal elemendil on

Iga elemendi paneeli all:

| Nupp | Teeb |
|---|---|
| {{ui:Lülita välja}} / {{ui:Taasaktiveeri}} | Lülitab sisse või välja. Elemendid, mis seda vajavad, ei ehitata, kui see on väljas |
| {{ui:Keri siiani tagasi}} | Ehitab ainult selle kohal olevad elemendid. Uued elemendid lähevad tagasikerimise ribale |
| {{ui:Teisalda üles}} / {{ui:Teisalda alla}} | Järjestab ümber, kui miski, mida see kasutab, ei jää alla. Muidu hall, koos põhjusega |
| {{ui:Kustuta}} | Kustutab selle ja (pärast küsimist) iga elemendi, mis seda kasutab |
| Nimi | Nimetab ümber (kuni 60 märki) |

Elemendid visandiga loetlevad ka **Visandi mõõtmed**, mida saab kohapeal muuta.

## Olekud ajaloos

| Olek | Kuvatakse | Tähendus |
|---|---|---|
| Ehitatud | Tavaline | Kõik korras |
| Hoiatus | ⚠ | Ehitatud, kuid midagi on kontrollimist vajav: "Üle määratud: 1 seos pole vajalik." või "Pärast seda ei jää detailist midagi alles." |
| Viga | ⚠ viga, punane | Ei saanud ehitada; teade ütleb põhjuse |
| Pole ehitatud | ⚠ pole ehitatud | Vajab elementi, mis ebaõnnestus, on välja lülitatud või tagasi kerittud, või vajab täpset tuuma, mida see versioon ei oma ("Sweep: pole veel ehitatud. …") |
| Välja lülitatud | väljas | Lülitatud välja |
| Tagasi kerittud | hall, tagasikerimise riba all | Ei ehitata enne, kui kerid edasi |

## Detaili seaded

Klõpsa tühjal alal, et midagi poleks valitud. Paremas paneelis näidatakse **Detaili**:

- **Nimi**: detaili nimi, mida kasutatakse failinimedes ja joonise pealdisplokis (kuni 120 märki).
- **Kõverad**: vt allpool.

### Kõverate eraldusvõime

Võrgusilma tuum ehitab tahke ise lamedatest fassettidest, seega vaade, STL, 3MF, fassetiline STEP, ruumala ja joonise vaated järgivad kõiki **Kõveraid**: mitu fassetti täispöörde kohta.

| Säte | Fassette pöörde kohta | Ümara kuju ruumala |
|---|---|---|
| Jäme (32 pöörde kohta) | 32 | Umbes 0.64 % tõelisest väärtusest madalam |
| Tavaline (64 pöörde kohta) | 64 | Umbes 0.16 % madalam (vaikimisi) |
| Peen (128 pöörde kohta) | 128 | Umbes 0.04 % madalam |
| Väga peen (256 pöörde kohta) | 256 | Umbes 0.01 % madalam |

Peenemad kõverad annavad sujuvamaid eksporte ja vaateid ning aeglasemaid uuesti ehitusi. Seade salvestatakse detaili faili.

## Pole veel valmis

Muutuva raadiusega ümardused, ümarate servade ümardused ja faasid, kõverate tahkude koored, tõmbenurk kõveratel tahkudel, sweep, loft, ribi, STEP-tahked täpsete kõverpindadega, uued kehad, kitsenemised, "kuni" tahuni või tipuni ning viited tahke tahkudel ja servadel vajavad täpset tuuma, mida see versioon ei oma. Samuti pole veel ehitatud keermestatud ja vastuaukudega auke. Vt [Mis pole veel valmis](topic:not-built-yet).
