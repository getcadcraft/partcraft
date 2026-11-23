---
title: Mis pole veel valmis
summary: Kõik, mida see PartCraft'i versioon veel ei tee, alates keerdpühkimistest kuni tollides kuvamiseni, joonise mõõtmeteni ja alamkoosteteni, koos sellega, mida praegu selle asemel teha.
keywords: puudu, veel mitte, piirangud, piirangud, tegevuskava, täpne tuum, ümardus, faas, koor, pühkimine, loft, STEP-import, simulatsioon, valmistamine, keerdpühkimine, loft-otsa puutuvus, tahu ümardus, võrrandid, tollid, joonise mõõtmed, alamkoosted, pilv, tahvel, telefon
from: 97b10a29
---

PartCraft on varajane versioon. See leht loetleb, mida see veel ei tee, et sa ei otsiks seda, ja mida praegu teha. Ühelgi siin ei ole kuupäeva.

## Vajab täpset tuuma

Selles versioonis ehitab PartCraft kõik detailid võrgutuumaga (vt [Võrgutuum](topic:solid-kernels)). Kõik allpool toodu vajab täpset geomeetriatuuma, mida sel versioonil veel ei ole. Nende funktsioonidega salvestatud detailid avanevad ikka: funktsioonid jäävad ajaloos, märgituna kui mitte ehitatud, ja säilivad salvestamisel.

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| {{ui:Ümardus}} ja {{ui:Faas}} ümarate servade puhul; ümarused, mille raadius muutub mööda serva; ümarused, mis sulanduvad sujuvalt kohtumisel (võrgutuum lõikab need nurgast) | Ümardus ja faas töötavad sirgetel servadel lamedate tahkude vahel; ümarda muud nurgad visandis enne väljapressimist ({{ui:Ümardus}} visandis, {{key:F}}) |
| {{ui:Koor}} kumerate tahkude avamine; erineva paksusega seinad | Avatud lamedad tahud; lisa materjali väljapressimistega kohtades, kus sein peab olema paksem |
| {{ui:Pühkimine}}, {{ui:Loft}}, {{ui:Kalle}} kumerate tahkude peal; väljapressimine kuni tahuni, järgmise tahuni või tipuni; koonilised väljapressimised | Pressi välja või pööra, vajadusel sammudena; pressi välja sügavuseni, mille mõõdad |
| {{ui:Ribi}}, {{ui:Põhiflenss}}, {{ui:Servaflenss}} ja lamedad mustrid | Pressi välja plaat või ribi profiil |
| Pinnad: {{ui:Vorm}} viimistlemine detailiks, {{ui:Lapp}}, {{ui:Pinna ühendamine}}, {{ui:Gordoni pind}}, {{ui:Õmble}}, {{ui:Paksenda}}, {{ui:Nihuta pinda}}, {{ui:Pikenda pinda}}, {{ui:Lõika pinda}} | Pole saadaval |
| Mitu kehandit: {{ui:Ühenda}}, {{ui:Teisalda keha}}, {{ui:Skaleeri keha}}, {{ui:Teekonnamuster}}, funktsioonid, mis teevad uue kehandi | Üks tahke; mustrid ja peegeldus kopeerivad funktsioone |
| Eskiisid, tasandid, teljed ja punktid tahkudel, mida leiab ainult täpne tuum (tahk, mis on tehtud ümardusega, augu sein, imporditud tahkise tahk) | Joonista baastasanditel, abitasanditel ning väljapressimiste ja pööramiste lamedatel tahkudel |
| Generatiivse disaini tulemus, mis avatakse detailina või lisatakse sellele (see muutub imporditud tahkiseks) | Laadi tulemus alla STL- või STEP-vormingus |
| Avatud STEP-faili kumerate tahkude muutmine täpsete pindadena; täpne STEP splainide, pühitud ja pööratud tahkude jaoks STEP-failist, splainiküljed, modelleeritud keermed, STL / OBJ / 3MF kehandid ja koosted; STEP teistele detailimodeleerijatele | {{ui:Ava}} loeb STEP-i kolmnurkadena ja säilitab faili lamedad tahud, silindrid, koonused, sfäärid ja toroidid eksportimiseks ([Ava STEP-fail](topic:import-step)); {{ui:Ekspordi}} › {{ui:STEP AP242 (täpne tahke)}} kirjutab iga analüütilise tahu täpselt ja hoiab need tahkudena ([Eksport](topic:export-files#for-other-cad-programs-step)); teise detailimodeleerija makro kirjutab endiselt |
| Tõelised kaared joonisevaadetes | Vaated ja lõikevaated joonistatakse tahkude järgi |
| Täpsed mahud, pindalad ja kaugused | {{ui:Mõõda}} annab tahutud tahkise arvud, veidi madalad ümmarguste detailide puhul; peenem seade **Kõverad** viib need lähemale |

Mõned allpool olevad tabelid soovitavad ühte neist funktsioonidest kui viisi millegi muu ümber. Need soovitused kehtivad, kui täpne tuum on tagasi.

## Funktsioonid

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| Tahkude ümardused, täisümardused, ümardused raadiustega, mis on seatud punktides mööda serva | Konstantne või lineaarselt muutuv {{ui:Ümardus}}; mitu ümarduse funktsiooni |
| Erineva paksusega koored | Üks {{ui:Koor}} paksus; lisa materjali väljapressimistega kohtades, kus sein peab olema paksem |
| Kumer (splain) tahk | {{ui:Kalle}} töötab lamedatel, silindrilistel ja koonilistel tahkudel |
| Keerdpühkimised, õhukese seinaga ja pinnapühkimised; otsatangentsus loft-funktsioonil; loft ühe juhtraja abil; splainiteed | {{ui:Pühkimine}} fikseeritud orientatsiooniga või otsamõõtkavaga; loft kahe või enama juhtrajaga: vt [Pühkimine, loft ja kalle](topic:sweep-loft-draft) |
| Ribid kaartest või splainidest; ribid, mis kasvavad ruudukujuliselt visandi suhtes (pealtvaatest); kalle ribidel; mitu ribi ühest visandist | {{ui:Ribi}} ühest sirgete joonte ahelast ribi enda tasandil: vt [Ribid ja kiilud](topic:rib) |
| „Kuni“ kumera pinnani, „kuni järgmiseni“ peatus kumeral tahul | Kuni lameda tahuni või abitasandini |
| Vastuurimisega augud, tolli- ja torukeermed, koonilised keermed, keerme väljajooksud ja faasitud keermealgused | Lamestusega auk väikese sügavusega; ISO meetri- ja trapetskeermed, kosmeetilised või modelleeritud: vt [Keermed võllidel ja aukudes, joonistatud või modelleeritud](topic:threads) |
| Õhukese seinaga väljapressimised | Joonista profiili mõlemad seinad |
| Mustrikoopiad, mida vahele jäetakse ükshaaval; täitemustrid | Kasuta eraldi funktsioone; mustrid mööda kõverat: {{ui:Teekonnamuster}} |
| Mustrikoopiad, peeglid, ümardused, faasid, koored ja imporditud tahkised | Kopeeri visand või funktsioon, millele need on ehitatud, või muster seda |
| Täpne (G1) puutuvus vormi erilistes punktides; vormi lappide ühendamine suuremateks tahkudeks | Tõsta vormi tasemet: ligikaudsed lapid muutuvad väiksemaks; vt [Vabakujulised kujud vormiga](topic:form-surfaces) |
| Mitu eraldi suletud tükki ühes funktsioonis; sillad vormide vahel | Üks suletud tükk vormi funktsiooni kohta; ühenda need {{ui:Ühenda}} abil |
| Pinnakehandite valimine vaates (v.a lõika ja lapi punktid); pinnaümardused; lõikamise tühistamine; G2-lapid; Gordoni pinnad kõverate naaberpindadega puutuvuses (puutuvus tasanditega ja lamedate tahkudega on olemas) | Vali nime järgi funktsiooni paneelil; kõigepealt paksenda, seejärel ümarda tahkis |
| Keha loend ajaloos; peidetud kehade väljajätmine eksportidest | Nimeta ümber ja peida kehad detaili paneeli kehaloendis; kustuta või lülita välja funktsioon, mis keha tegi, et see välja jätta |
| Mittetühine skaleerimine, mis hoiab silindrid ja koonused analüütilisena; mittetühine skaleerimine nihutatud pindadel | {{ui:Skaleeri keha}} teeb kumerad tahud suletud B-splainideks (0.0000004 mm piires); ühtlane skaleerimine jääb täpseks |
| Pinnakehandite ühendamine; Minkowski summad | Kõigepealt {{ui:Õmble}} või {{ui:Paksenda}}, seejärel {{ui:Ühenda}} |
| Tolerantsianalüüs: nurki pöörlevad tolerantsiahelad (2D- ja 3D-vektorahelad), geomeetriast tuletatud tundlikkused, Monte Carlo teiste jaotustega, suuruse tolerantsid visandi mõõtmetel, bonustolerants materjali seisundist | {{ui:Tolerantsiahel}} koosteses: üks suund, halvim juhtum ja RSS, tolerantsid sisestatud, tiitliploki üldtolerantsist või GD&T raamidest: vt [Tolerantsiahelad](topic:tolerance-stackup) |
| Lõikamise järjestus ja sisselõiked; ühiste servade lõikamine üks kord; osad, mis peavad koos olema; rullide jäägid, materjal, mida jagatakse projektide vahel | {{ui:Paiguta lamedad detailid lehtedele…}} vahede, äärte, pööramiste ja kiudude kaupa: vt [Lamedate detailide paigutamine lehtedele](topic:nest-flat-parts); lehtede jäägid jäävad alles ja kasutatakse esimesena: vt [Jäägid alles hoidmine ja taaskasutamine](topic:nest-offcuts); planeeri lõige oma lõikuri tarkvaras |
| Lehtmetall: volditud servad, nihked, lõikeliitega ja kontuuriga flenssid; flenss kumeratel servadel või painutatud põhiflensi tahkudel; joonistatud painded; nurgasulgud; vormimistööriistad; tahke teisendamine lehtmetalliks; painutatud põhiflensi laiendus, millel on sisselõiked; painutustabelid | {{ui:Põhiflenss}} (plaat või painutatud profiil), {{ui:Servaflenss}} plaadi sirgetel servadel koos painde vabastustega ning lame muster K-teguriga: vt [Lehtmetall](topic:sheet-metal) |
| Koostude tõmbenurga analüüs; jaotusjoone leidmine; seinapaksuse analüüs | {{ui:Tõmbenurga analüüs}} detailil Konstruktsioonis: vt [Kontrolli tõmbenurka vormimiseks ja valamiseks](topic:draft-analysis); ava koosteosa iga detail kontrollimiseks |

## Visandid

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| Ellipsid, puutuvad kaared, koonilised kujundid, splainid fikseeritud astme või kaaludega (NURBS) | Splainid (kuubilised), kaared ja ringid puutuvussuhetega |
| Punkt splainil (seos), kõveruse (G2) seosed | Pane splaini enda punkt sinna, kus see peab läbima |
| Splaini nihkekoopiad, mis järgivad hilisemaid muudatusi; ahelate nihked terava splainnurgaga | Nihuta uuesti pärast muudatust; ümarda kõigepealt nurk |
| Mustrikoopiad, mis jäävad seotuks algsega; mustrid mööda kõverat | Muster uuesti pärast muudatust |
| Vabakujuliste või kaldus ringikujuliste servade projitseerimine; projitseeritud geomeetria, mis järgib detaili | Projitseeri sirged ja paralleelsed ringikujulised servad, seejärel mõõtmesta |
| Juhitavad (viite) mõõtmed | Loe mõõdud paneelilt või detaili andmetest |
| Samasirgsed seosed | Paralleelne 0-kaugusega |
| Kleepimine teise programmi (süsteemi lõikelauale) | Ekspordi DXF, STEP, STL või 3MF |
| Kaarte, suhtelisi või polaarkoordinaate sisestamine | Joonista jooned ja ringid; joonista kaared kaaretööriistaga |
| Geomeetria valimine ilma osutita | Vajab klõpsu või puudutust |

## Parameetrid ja ühikud

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| Konfiguratsioonid, mis muudavad materjale; CSV-disainitabel, mis lülitab funktsioone välja | Konfiguratsioonid seavad parameetreid ning lülitavad funktsioone sisse ja välja: vt [Konfiguratsioonid ja disainitabelid](topic:design-tables); `partcraft variants` ehitab salvestatud konfiguratsioonid nime järgi, sealhulgas väljalülitatud funktsioonidega: vt [Tee variantide pakk oma konfiguratsioonidest](topic:variant-pack) |
| Võrrandid uusimate funktsioonide oma paneelide arvudel (tasand, pühkimine, kalle jms) | Kirjuta need skriptis või käsuga `partcraft set` ([Skriptid ja käsurida](topic:scripts-and-cli)) |
| Detail tollides | Mõõdud kuvatakse millimeetrites; sisesta `2in` arvuväljale või avaldisesse ja see muutub 50.8-ks |

## Failid

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| Imporditud STEP-kehiku enda funktsioonide muutmine (see tuleb ilma ajaloota) | Lisa või lõika materjali oma funktsioonidega |
| Värvide, nimede, koostestruktuuri ja PMI lugemine STEP-ist | Pole saadaval |
| glTF-, OBJ-, IGES- ja Parasolid-eksport; DWG 3D-detailist (ainult variantide pakk kirjutab DWG-d: joonislehe) | STL või 3MF võrkude jaoks; STEP tahkiste jaoks; DXF 2D jaoks |
| IGES-, DXF- või teiste programmide enda failide avamine (`.3dm`-failid avanevad ühe kehandina: [Ava .3dm-mudel tahkkehana](topic:open-3dm-files)) | Küsi STEP-i või suletud STL-, OBJ- või 3MF-võrku: [Ava STL, OBJ või 3MF](topic:open-meshes) |
| Koostestruktuur (puu detailinimedega) eksporditud STEP-is | Koosteühe STEP on paigutatud tahkiste üks ühend |
| Salvestamine valitud kausta ilma brauseri allalaadimiseta | Lülita brauseri allalaadimise seadetes sisse „küsi, kuhu salvestada“ |

## Joonised

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| Mõõtmed peale kolme üldmõõtme (augu mõõdud, asukohad, mõõtmete tolerantsid) | Märgi PDF-i üles või ekspordi DXF ja mõõtmesta 2D-CAD-programmis |
| Rohkem kui üks lõige või detail; joondatud, katkestatud ja abivaated | Üks lõige ja üks detail joonise kohta |
| Vaba tekst, märkmed ja tabelid lehel (v.a pealkirja- ja versiooniplokid) | Viimistlusmärkus või PDF-ile lisatud tekst |
| Esimese nurga projektsioon, liikuvad vaated, portreelehed | Kolmas nurk, automaatne paigutus, maastikulehed A4–A0 ja ANSI A–E |
| Elav lõikevaade: mitu tasandit või lõikekast korraga, lõike ääris, lõike salvestamine failis | Üks tasand korraga valikust {{ui:Vaated}} › {{ui:Lõige}}; vt [Vaata sisse lõikevaatega](topic:section-view) |
| Koostejoonised rohkemate vaadete, mõõtmete või liigutatavate numbrimärkidega | Üks isomeetriline (või lahtivõetud) vaade automaatsete numbrimärkide ja detailide loendiga |
| GD&T- ja viimistlussümbolite kopeerimine ja kleepimine | Pane igaüks {{ui:Baas}}, {{ui:Raam}} või {{ui:Viimistlus}} abil |
| Juhendid: STEP-failid Illustrate'i {{ui:Teisest failist…}}, mudel otse ModelCraftist või BimCraftist, pildid path tracer'i kvaliteediga, interaktiivne 3D PDF-is | Ava STEP Konstruktsioonis ja alusta juhendit {{ui:Avatud detailist}}; salvesta mudel glTF (.glb) vormingus; PNG-pildid 3D-vaatest; interaktiivne 3D-fail: vt [Alusta juhendit Illustrate'is](topic:illustrate) |

## Koosted

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| Hammasratta-, hammaslati-, nukk- ja kruviliited; kuuliliide, mis on piiratud koonusega; liited kumerate tahkude peal või punktide vahel | Jäigad, pöörlevad, liuglevad, silindrilised, tasapinnalised, kuul- ja tihvt-soonliited lamedatel tahkudel, igaühel oma väärtuse piirangutega: vt [Koosta koost](topic:build-assembly) |
| Lahtivõtmise sammud, mis pööravad detaile, ja detailide lohistamine, mida liited paigutavad | Sirged lahtivõtmise sammud; eemalda liide, et detail käsitsi liigutada |
| Alamkoosted | Ainult üks tase detaile |
| Hammasrattad, nukid, kontakt | Pole saadaval |

## Valmistamine

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| 3D-adaptiivne puhastus ja nihkega jämedus 3D-s; veetaseme-, pliiatsi-, radiaal- ja spiraalviimistlus; adaptiivsed läbikäigud kirjutatud kaartena | 3D-jämedus sirgetes ridades ja jääk-freesimine: vt [3D-jämedus ja jääk-freesimine](topic:rough-3d); {{ui:Paralleelne}} ja {{ui:Lainetus}} viimistlus: vt [3D-viimistlus](topic:finish-3d); 2.5-teljeline tahk, tasku, 2D-adaptiivne, kontuur, puurimine ja faas: vt [Tee tööradu ja G-kood](topic:manufacture) |
| Swarf-lõikamine, voolujoonte ja mitme telje jämedad teed, kallutatud töötasandi koodid (G68.2), hoidiku ja masina kokkupõrkekontrollid; 5-teljeliste ja pöörlevate lõigete simulatsioon | Kallutatud tööriist mis tahes toimingule, 5-teljeline viimistlus kuulotsaga freesiga ja 4. telje pöörlev viimistlus: vt [4- ja 5-teljeline töötlus](topic:multi-axis) |
| Augud ja sisekeermed treipingil, G71/G76 tsüklid, kaared treiteedes, elavad tööriistad, alamspindel | Välistreimine: tasandamine, jämedus, viimistlus, soon, eraldamine, keere, puurimine keskel: vt [Treimine treipingil](topic:turning) |
| Nurga või nurga sondimine, tööriista seadja, suuruse mõõtmine tolerantsi vastu | Näo, külje, augu või tapi sondimine töönihke seadmiseks: vt [Sondimine](topic:probing) |
| Hoidiku ja varre kokkupõrkekontrollid | Jälgi lõikepikkuse hoiatusi ja kontrolli oma juhtseadme simulaatoris |
| Tööriista eluea ja alamprogrammi tsüklid postprotsessoris; teiste programmide postfailide laadimine | Kirjuta või muuda postprotsessorit PartCraft'i enda vormingus: vt [Muudetavad postprotsessorid](topic:post-processors) |
| Tolli G-kood (G20) | Ainult millimeetrid (G21) |

## Simulatsioon ja generatiivne disain

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| Mittelineaarsed uuringud: voolavus, suured läbipainded, osadevaheline kontakt, väsimus | Lineaarne staatika ja loomulikud sagedused: vt [Kontrolli pinget ja läbipainet](topic:simulation); hoia ohutustegur kindlalt üle 1 |
| Mittelineaarne väände (ebatäiuslikkused, järelväändumine, läbilöömine) | Lineaarsed väändekoormuse tegurid suure varuga: vt [Kuumus, soojuspinge ja väände](topic:thermal-and-buckling) |
| Kiirgus pindade vahel (vaatetegurid), kontaktitakistus, temperatuurist sõltuvad materjalid, inertsus soojuspingetes (soojusšokilained) | Kiirgus ümbrusele, püsiv või kvaasistaatiline soojuspinge aja jooksul, konstantsed omadused: vt [Kuumus, soojuspinge ja väände](topic:thermal-and-buckling) |
| Automaatne täpsustamine ajast sõltuva soojuse ja soojuskoormusega uuringute jaoks; võrgu jämedamaks tegemine, kus viga on väike; sihtmärk kohalikule suurusele (tipppinge ühes kohas) | **Täpsusta automaatselt** staatika, väände, loomuliku sageduse ja püsiva soojuse uuringute jaoks, vea järgi kogu detaili kohta: vt [Kontrolli pinget ja läbipainet](topic:simulation); muidu vähenda elemendi suurust |
| Laagri- ja poldikoormused, kaugjõud, momendid, vedrud, ettekirjutatud nihked | Jõud ja survet tahkudel, gravitatsioon; fikseeritud ja hõõrdevabad tahud |
| Koostude simulatsioon; materjalid, mis erinevad suuna järgi (prinditud kihid, komposiidid) | Üks detail, üks isotroopne materjal |
| Mitu lõimi tetraeedriliste uuringute, soojusülekande ja generatiivse disaini jaoks; mistahes lõimed lehel, mis ei ole ristpäritolu isoleeritud | Vokselite uuringud, väände, aja jooksul pinge ja laminaarne voog kasutavad lõimi, kus leht seda lubab: vt [PartCraft'i seaded](topic:settings) |
| Turbulentne voog projekteerimistäpsusega (Spalart–Allmarasi mudel on sisse pandud eksperimentaalsena: toru hõõrdumine 30 kuni 34 % kõrgem, tagasisammu taaskinnitumine 21 kuni 39 % lühem; planeeritud: peenemad lahtrid seinte lähedal), soojus voos, ebastabiilne (aja-täpne) voog, vabad pinnad, mitte-newtoni vedelikud, pöörlevad detailid | Laminaarne, püsiv, isotermiline voog Newtoni vedelikul või eksperimentaalne turbulentne mudel kvalitatiivsete mustrite jaoks: vt [Simuleeri vedeliku voogu](topic:flow-simulation); paneel hoiatab, kui Reynoldsi arv on laminaarsest üle |
| Pinge piirangud ja tootmisreeglid (ülepinged, freesimissuunad) generatiivses disainis; mitu materjali ühes kujus | Kõige jäigem kuju mahule; kontrolli tulemust simulatsioonis: vt [Kasvata kuju koormustest](topic:generative-design) |
| Tulemus redigeeritava (sujuva, parameetrilise) tahkisena | STL, tahutud STEP või detail, mille tulemus on imporditud tahutud tahkisena |
| Elektrimasina disain: rootor statoris pöörlemas, pöördemoment nurga järgi, küllastuv teras, magnetid, mis kaotavad tugevust oma põlve tagant, pöörisvoolud ning raua ja vase kaod; magnetväljad 3D-s või kumeratel võrkudel | Lineaarne 2D-magnetstaatika ruudustikul analüüsi teegis: mähised, raud, püsimagnetid nende tagasipöördejoonel, õhupilud, induktiivsus ja tõmme: vt [Magnetväljad 2D-s](topic:magnetic-fields-2d) |

## Skriptid

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| Kursori abi, katkepunktid ja sammumine skriptiredaktoris | Otsing, voltimine ja täitmine on sees (vt [Kirjuta ja käivita skriptid](topic:craftscript)); muu jaoks oma redaktor: {{ui:Salvesta}} ja {{ui:Ava}} skriptide rühmas liigutavad skripte sisse ja välja; sisseehitatud funktsioonid on loetletud [CraftScripti keeles](topic:craftscript-language) |
| Katkepunktid ja skriptis sammumine | `disp` ja `fprintf` teel; {{key:Mod+Enter}} käivitab mõned valitud read korraga |
| Väljad ja graafikud, mida skript näitab, joonistatud Konstruktsiooni töövoos; skriptid, mis muudavad detaili parameetreid | Need näidatakse skriptide töövoos; skriptid loevad parameetreid `param` abil (vt [Kirjuta ja käivita skriptid](topic:craftscript)), muuda neid vahekaardil {{ui:Parameetrid}} |
| Pildid ja tabelid graafikutega kõrvuti; graafiku muutmine (suum, telgede piirid) enne salvestamist | Kõrvuti näitab graafikuid; salvesta graafik PNG-, SVG- või CSV-vormingus ja viimista mujal |
| numpy ja muud Pythoni paketid; Python ilma võrguühenduseta; Pythoni voltimine redaktoris; Pascal Script | Pythoni standardteek, CraftScript ja Lua: vt [Skriptid Pythonis](topic:craftscript-python) |
| Lua funktsioonide edastamine sisseehitatud funktsioonidele; raamatukogu funktsiooni kutsumine Lua-st nime järgi, mis koostatakse skripti töötamise ajal | Kirjuta raamatukogu funktsiooni nimi skripti (`cs.static_tet(…)`) või kutsu see CraftScripti skriptist |

## Rakendus

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| Pilvesalvestus, jagamine ja versioonide ajalugu | Pole veel saadaval. Salvesta failid oma arvutisse ja hoia versioone nime järgi |
| PartCraft installitud rakendusena iPadis ja iPhone'is | Kasuta PartCraft'i seadme brauseris; Androidil ja lauaarvutil töötab see ka CadCraft Studios (getcadcraft.com/download) |
| Kontekstimenüüd (parem klõps) | Tööriistariba ja parem paneel |
| Täielikult võrguühenduseta töö värskest algusest | Ainult siis, kui rakendus on salvestatud võrguühenduseta kasutamiseks: vt [Võrguühenduseta töö](common:offline) |

Teata, mida kõige enam puudu jääb, saidi toe lehe kaudu: see kujundab järgmist.

## Insener (generaatorid ja väljad)

| Veel mitte valmis | Praegu selle asemel |
|---|---|
| Kollektorid, ühendused ja liitmikud genereeritud soojusvahetil; temperatuurikõverad materjali tugevusele; tee-kaod kollektoris | Generaatorid ehitavad südamiku ja torud; lisa liitmikud Konstruktsioonis; kasuta materjali toatemperatuuri näitajaid ohutusteguriga |
| Generaatorite lisamine lisandmoodulite kataloogist ühe klõpsuga | {{ui:Ava}} Insener'i töövoos lisab generaatori failist |
| Väljafail, mis on peenem kui generaatori enda vokseli suurus; `.vdb`-failide lugemine | Salvesta peenem väli skriptist; `.vdb` kirjutatakse, mitte loeta |
| Surveanuma koodi arvutused | Klassikalised õhukeste ja paksude seinte valemid valitud ohutusteguriga; mitte koodimarginaal |
| Generaatorid teistele rakendustele | Selles versioonis ainult PartCraft |
