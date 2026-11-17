---
title: Kontrolli pinget ja läbipaindumist (simulatsioon)
summary: Vali materjal, kinnita pinnad, lisa jõude, survet või detaili enda kaalu, lahenda ja loe von Mises'i pinget, nihet, ohutegurit, reaktsioone ja loomulikke sagedusi mudelil koos sellega, mida meetod ütleb ja mida mitte.
keywords: simulatsioon, FEM, reaalajas analüüs, uuenda muutmise ajal, murra see, koormustegur, mittelineaarne, plastsus, voolamine, plastne deformatsioon, bilineaarne, kontakt, kontaktipaar, penalti, liidetud, libisemisevaba kontakt, CalculiX, .inp, .frd, lõplike elementide meetod, pinge, deformatsioon, von Mises, nihe, läbipaindumine, ohutegur, voolavuspiir, reaktsioon, koormus, jõud, rõhk, raskus, enda kaal, kinnitus, libisemisevaba, tugi, piirang, materjal, teras, alumiinium, titaan, ABS, PLA, nailon, loomulik sagedus, modaalne, vibratsioon, võrk, elemendi suurus, tetraeeder, tetraeedrid, tetraeedervõrk, vokseel, võrgu kvaliteet, peamine pinge, ekvivalentne deformatsioon, veahinnang, kumerad pinnad, augud, ümarused, adaptiivne, adaptiivne täpsustus, automaatne täpsustus, h-adaptiivne, konvergents, võrgu konvergents, täpne pind, sfäär, koonus, toroid, spline, vabakuju
from: 6f2fdec1
---

Simulatsiooni tööruum vastab küsimusele „kas see paindub või puruneb selle koormuse all?“ detaili jaoks, mida modelleerid. See on **lineaarne staatiline** uuring (väikesed läbipaindumised, materjal jääb elastseks) või **loomuliku sageduse** uuring, mida lahendatakse kvadraatsete tetraeedrite võrgul, mis järgib detaili pindu (või, kui valid, väikeste võrdsete kuubikute võrgul). See töötab nimetatud pindadel, mille detailile annab võrgutuum (vaata [Võrgutuum](topic:solid-kernels)).

Vali tööruumi kastist tööriistariba vasakul **Simulatsioon**. Sinu detaili ei muudeta; uuring salvestatakse detailifaili sisse ja iga muudatus on tagasi võetav.

## Uuringu seadistamine

1. Vajuta paremas paneelis **Uus uuring**.
2. Vali **Materjal**. Paneel näitab selle jäikust (E), Poissoni koefitsienti, tihedust ja voolavuspiiri. Väärtused on tüüpilised käsiraamatu näitajad; sinu tarnija sertifitseeritud väärtused võivad erineda.
3. Vali **Võrk**:
   - **Tetraeedrid (täpne)**, vaikimisi: 10-sõlmesed tetraeedrid, mille välispinnad asuvad detaili pindadel, kumerate servadega aukudel, ümarduste ja muude ümarate pindade juures. Sõlmed lamedatel, silindrilistel, koonilistel, sfäärilistel ja toroidsetel pindadel, pööratud ja ekstrudeeritud pindadel ning vabakujulistel (B-spline) pindadel asuvad täpsel pinnal; mis tahes muud tüüpi pind järgib oma kuvamisvõrku, ja tulemuste tabel näitab, mitu pinda seda tegi. Võrk muutub ise tihedamaks kumerate pindade, õhukeste seinte ja teravate servade lähedal.
   - **Vokselkuubikud (kiire)**: detail täidetud võrdsete kuubikutega. Kiire, aga kumerad pinnad muutuvad astmeteks. Enne tetraeedrivõrku salvestatud uuringud jäävad sellele.
4. Jäta **Elemendi suurus** tühjaks automaatse suuruse jaoks (umbes 12,000 tetraeedrit või 20,000 kuubikut) või kirjuta mm-des. Paneel näitab, umbes kui palju elemente see teeb enne peenemate kohtade lisamist. Tetraeedritega refineerib **Väiksemad elemendid kumerail pindadel** (vaikimisi sees) auke ja ümarusi, kus pinge tavaliselt tipneb.

### Täpsusta automaatselt

Tetraeedritega staatilise või nõtkumise uuringu korral (ilma soojuskoormuseta), loomuliku sageduse uuringu ja stabiilse soojusuuringu korral pakutakse **Täpsusta automaatselt (adaptiivne)**. Märgi see ja sea:

- **Sihtviga (%)**: lahendamine peatub, kui hinnanguline viga on sellest väiksem (algseisus 1 %).
- **Enim käike**: enim lahendusi, mida see võib teha (algseisus 5, kõige rohkem 10).

Iga käik lahendab, leiab suurima hinnangulise veaga elemendid, jagab need (ja nii vähe naabreid, kui vaja, et võrk püsiks terve) ja lahendab uuesti. Uued sõlmed kumerail pindadel lähevad täpsele pinnale. Tulemused näitavad siis tabelit ja graafikut, kus iga käigu kohta on elemendid, tundmatud, hinnanguline viga ning tipppinge (või temperatuur) ja nihe (või soojusvoog), ning rida, mis ütleb, miks peatuti: sihtmärk saavutati, käigud said otsa, järgmine võrk oleks liiga suur või käik ebaõnnestus (siis näed viimast head käiku).

Loe hinnangut kui hinnangut. See (Zienkiewicz–Zhu; täpsete vastustega võrreldes loeb see umbes 0.6 kuni 0.95 tegelikust veast) mõõdab viga **terve detaili** ulatuses, seega on augu või ümarduse tipppinge tavaliselt veel veidi väljas, kui hinnang tundub väike. Pingekontsentratsiooni jaoks sea sihtmärk alla 1 %-i ja jälgi, kuidas tipp käigust käiku stabiliseerub. Teravas sisenurgas või fikseeritud pinna servas on tõeline pinge lõpmatu, seega hinnang sinna ei jõua: käigud lihtsalt saavad otsa.

**Loomulikud sagedused ja nõtkumine.** Loomuliku sageduse uuringu puhul hõlmab hinnang kõiki soovitud mooduseid, igaüks loetakse ühtmoodi; tabel ja graafik järgivad esimesi kahte sagedust. Ainult lamedate pindadega detailil võib sagedus käigust käiku ainult langeda (iga võrk hoiab eelmist); kumerad pinnad lähenevad ka oma tõelisele kujule, mis võib sagedust natuke mõlemas suunas nihutada. Nõtkumise puhul hõlmab hinnang eelpinget ja nõtkumismooduseid ning tabel järgib koormustegureid. Kontrollitud 100 × 10 × 10 mm terasvarda peal: esimene sagedus stabiliseerus 812.4 Hz-st 811.9 Hz-ni neljas käigus, 0.4 % alla Euler–Bernoulli (mis ignoreerib nihkepinget), ja samba koormustegur 0.5 % piires Euleri omast.

## Toeta ja koorma

Iga uuring vajab vähemalt ühte toetust ja pinge puhul ühte koormust.

1. Vajuta tööriistaribal {{ui:Kinnitus}}. Uus toetus on valitud ja ootab pindu: klõpsa pindadele, mis hoitakse paigal (klõpsa pinnale uuesti, et see eemaldada). Vajuta **Valik valmis** või {{key:Esc}}, kui oled lõpetanud. Sinised koonused tähistavad hoitavaid pindu.
2. Vajuta {{ui:Jõud}} ja klõpsa pindadele, millele jõud mõjub. Paneelis sisesta **Kogujõud** njuutonites ja vali selle **Suund**: pinda või mööda telge. Jõud jaotub valitud pindade vahel pindala järgi. Oranžid nooled näitavad seda.
3. Vajuta {{ui:Surve}} rõhu jaoks MPa-des (N/mm²), mis surub valitud pindadesse; negatiivne rõhk tõmbab.

Rohkem liike on paneeli loendis **Lisa**: **Libisemisevaba pind** (pind võib libiseda iseenda peal, aga mitte eemale sellest liikuda — kasuta seda sümmeetriatasanditele ja siledatele toetustele) ja **Raskus** (detaili enda kaal, 9.81 m/s², sinu valitud suunas).

Toetus, mis jätab detaili vabaks libisema või pöörlema, lükatakse tagasi ning öeldakse, milline liikumine on vaba.

## Lahenda ja loe tulemused

Vajuta {{ui:Lahenda}}. Töö käib taustal; **Peata** tühistab selle. Siis:

- Detail on värvitud **von Mises'i pingega**; vali **Nihe** või **Ohutegur** jaotises **Näita**. Legend annab skaala.
- Osuta detailile, et lugeda kursori all olevaid väärtusi.
- Märgi **Deformeeritud kuju**, et näha detaili painutatud; liikumist suurendab **Skaala** (tegelik on tabelis).
- Tabelis on suurim pinge ja selle asukoht, suurim nihe, väikseim **ohutegur** (voolavuspiir ÷ von Mises'i pinge; alla 1 materjal voolab), rakendatud koormus ja **reaktsioonid** toetustel (need tasakaalustavad koormuse) ning kasutatud võrk.

**Loomulike sageduste** puhul vali see **Tüüp**, sea **Moodused** arv ja lahenda. Iga moodus näitab oma sagedust ja kuju (kujud skaleeritakse 1-le oma suurimal liikumisel).

Kui muudad detaili, märgitakse tulemused aegunuks: lahenda uuesti.

## Voolamine ja kontakt (mittelineaarsed uuringud)

Kaks veel uuringu tüüpi lähevad kaugemale sellest, et materjal jääb elastseks:

- **Mittelineaarne (materjal voolab)** järgib materjali sirget joont kuni voolavuspingeni, siis lamedamat kallakut (**Kalle pärast voolamist**, 1 % E-st, kui jäetakse tühjaks). Koormus läheb edasi **Koormusastmetes**; aste, mis ei stabiliseeru, poolitatakse ise. Tulemused lisavad graafikutele **Plastne deformatsioon** ja ütlevad, kui suur osa koormusest kanti. Kui aste ikka ei stabiliseeru, peatub uuring viimasel heal astmel ja ⚠ Probleemide paneel ütleb, kus: detail on seal jõu otsa saanud (kokkuvarisemine) või astmed on liiga suured.
- **Kontakt tükkide vahel** laseb detaili eraldi tükkidel üksteist lükata. Lisa **Kontaktipaar**, vali pinnad poolelt A (pinnad, mis surutakse) {{ui:Vali pinnad}} abil, siis poolelt B {{ui:Vali külje B tahud}} abil. **Libisemisevabad** tükid lükkavad, libisevad ja eralduvad; **liidetud** tükid jäävad kinni. Iga tükk võrgustatakse eraldi, nii et väike vahe nende vahel on korras. Kontakt on penalti-meetod: tükid vajuvad veidi üksteisesse (**penalti tegur** × E ÷ elemendi suurus määrab kontakti jäikuse). Tabel näitab suurimat sissevajumist ja Probleemide paneel hoiatab, kui see on üle 1 % elemendi suurusest: tõsta tegurit või kasuta väiksemaid elemente.

Mõlemad kasutavad tetraeedrivõrku. Hõõrdumist, suuri libisemisi ja suuri pöördeid siin ei lahendata.

## Käivita CalculiXis

**Ekspordi › CalculiXi sisendfail (.inp)** (või paneelis {{ui:Salvesta CalculiXi sisendfail (.inp)}}) salvestab uuringu sisendfailina CalculiX-ile, eraldi programmile, mille ise paigaldad ja käivitad: sama võrk, materjal, toetused, koormused ja kontaktipaarid, ühikutes mm, N ja MPa. Käivita see, siis **Ekspordi › CalculiXi tulemused (.frd)** loeb selle tulemusfaili tagasi samale võrgule ja näitab nihet (ning von Mises'i pinget, kui failis on pinged). Kui muutsid vahepeal detaili või elemendi suurust, pole võrk sama ja PartCraft ütleb seda: salvesta uus sisendfail.

## Kui kaugele sellele usaldada

PartCraft kontrollib oma lahendajat käsitsi valemitega (konsooli tipu läbipaindumine PL³/3EI 1 % piires, varda venimine PL/AE täpselt, konsooli esimene sagedus 3 % piires, pinge augu ümber plaadis). Siiski pea meeles neid piire:

- **Võrk.** Tetraeetritega kontrollib PartCraft konsooli läbipaindumist ja painutuspinget (0.3 % piires), pinget augul plaadis (Kt, umbes 1 % piires), paksu toru rõhu all (Lamé, 0.3 % piires) ja esimest sagedust (0.4 % piires). Tabel näitab **võrgu kvaliteeti** (väikseimad ja suurimad nurgad elementide tahkude vahel; alla umbes 10° on element halb) ja **hinnangulist pingevea**: kui see on rohkem kui mõni protsent, lahenda uuesti väiksema elemendi suurusega või lase **Täpsusta automaatselt** seda teha. Augu ja kahe servamärgiga varda puhul saavutas automaatne täpsustus õpikutabeli Kt 1 % piires umbes kuue kümnendikuga tundmatutest, mida kogu võrgu peenendamine vajas. Vokselkuubikutega on auk või ümarus astmeline kuubiku suuruse ulatuses, seega on seal pinge karm.
- **Teravad sisenurgad ja fikseeritud pindade servad ei oma tõelist tipppinget.** Seal väärtus kasvab pidevalt, kui elemendid muutuvad väiksemaks. Loe pingeid natuke sellistest kohtadest eemal või ümarda nurk mudelis.
- **Tulemused, mida lugeda.** Von Mises'i pinge, nihke ja ohutegurile lisaks näitab tetraeedriuuring **suurimat ja väikseimat peamist pinget** (tõmme ja surve) ning **ekvivalentset deformatsiooni**. Märgi **Näita võrku**, et näha elemente.
- **Staatilised uuringud on lineaarsed ja elastsed.** Voolamise ja kontakti jaoks kasuta ülal toodud mittelineaarseid uuringu tüüpe; suured läbipaindumised ja väsimus ei ole lahendatud. Soojus, soojuspinge ja lineaarne nõtkumine on oma uuringu tüübid: vaata [Soojus, soojuspinge ja nõtkumine](topic:thermal-and-buckling).
- **Iga materjal on kõigis suundades ühesugune.** 3D-prinditud plastid on oma kihtide üle nõrgemad, sageli kolmandiku või rohkem.
- See on labori versioon: kontrolli olulisi detaile mõne muu viisiga.

## Uuenda muutmise ajal (Reaalajas)

Märgi **Uuenda, kui muudan** lahendusplokis ja simulatsiooni vastused järgivad sinu muudatusi. Muuda mõõdet, koormust, materjali või keskkonda ja kohe ilmub **kiirvastus**, tehtud neli korda suuremate elementidega kui uuringul; kui peatud hetkeks (umbes sekund), asendab uuringu enda **täpsustatud vastus** selle. Tulemused ütlevad, mida vaatad („Kiirvastus“ või „Täpsustatud vastus“) ja elemendi suuruse. Kiirvastus sobib suuna ja suuruse hindamiseks: terasest konsooli puhul oli see läbipaindumisel 1 % ja pingel umbes 4 % täpsustatud vastusest. Usalda täpsustatud vastust numbritele, mida kasutad. Staatilised, loomuliku sageduse, soojus- ja nõtkumisuuringud töötavad nii; Reaalajas on vaate seade ega salvestu detaili. Lahendus, mida vajutad ise, jääb nii, kuni järgmise muudatuseni.

## Leia, mis puruneb esimesena (Murra see)

Staatilise või nõtkumise uuringu puhul vajuta plokis **Murra see** nuppu **Mis puruneb esimesena?**. PartCraft skaleerib uuringu koormusi (jõud, rõhud ja kaal koos), kuni detail annab järele, ja loetleb halvimast alates **koormustegurid kuni esimese voolamiseni** (tegur tänastele koormustele, mille juures kõrgeim von Mises'i pinge jõuab voolavuspiirini, punase märgiga kohas, kus see juhtub) ja **koormustegurid kuni nõtkumiseni** samade toetuste ja koormuste jaoks. Tegur 4.3 tähendab, et detail kannab 4.3 korda oma koormust enne voolamist; **tegur alla 1 tähendab, et see annab juba koormatuna järele**, ja see ilmub Probleemide loendis veana (nõrgim leid näidatakse märkmena isegi siis, kui kõik on korras). Tegurid tulevad lineaarsest uuringust tetraeetritel sinu elemendi suurusel, seega on need sama head kui see uuring: pinge fikseeritud pinna või teravas nurgas ei oma tõelist tippu (vaata allpool), ja voolamistegur on seal ettevaatlikul poolel. Sinu abiline saab sama kontrolli teha tööriistaga `break_run`.

## Seotud

- [Soojus, soojuspinge ja nõtkumine](topic:thermal-and-buckling)
- [Kasvata kuju koormustest (Generatiivne)](topic:generative-design)
- [Mõõda vahemaid, nurki ja massi](topic:measure)
- [Mis on veel loomata](topic:not-built-yet)
