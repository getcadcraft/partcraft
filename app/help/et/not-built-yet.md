---
title: Mis pole veel valmis
summary: Kõik, mida see PartCraft-i versioon veel ei tee, alates keerdsüstest kuni tollikuvani, joonismõõtudest ja alamkoostudeni, ning mida selle asemel praegu teha.
keywords: puudu, veel mitte, piirangud, tegevuskava, täpne tuum, ümardus, faas, koor, süst, loft, STEP import, simulatsioon, valmistamine, keerdsüst, loft-otsa puutuvus, tahu ümardus, võrrandid, tollid, joonismõõtud, alamkoostud, pilv, tahvel, telefon
from: 9b868162
---

PartCraft on varajane versioon. See leht loetleb, mida ta veel ei tee, et sa ei otsiks seda, ning mida teha selle asemel praegu. Ühtegi tähtaega siin ei ole.

## Vajab täpset tuuma

See versioon ehitab kõik detailid võrgutuumaga (vt [Võrgutuum](topic:solid-kernels)). Kõik allpool nimetatu vajab täpset geomeetriatuuma, mida selles versioonis veel ei ole. Nende tunnustega salvestatud detailid avanevad ikka: tunnused jäävad ajalukku, märgitult kui valmis pole, ja need säilivad salvestamisel.

| Veel valmis pole | Selle asemel praegu |
|---|---|
| {{ui:Faas}} ja {{ui:Ümardus}} ümardatud servadel; servale muutuva raadiusega ümardused; ümardused, mis ühinevad siledalt kohtades, kus nad kohtuvad (võrgutuum lõikab need kokku nurgaga) | Ümardus ja faas töötavad sirgetel servadel lamedate tahkude vahel; ümarda muud nurgad visandis enne väljapressimist ({{ui:Ümardus}} visandis, {{key:F}}) |
| {{ui:Koor}}, mis avab kumera tahu; seinad erinevate paksustega | Avatud lamedad tahud; lisa materjali väljapressimistega seal, kus sein peab olema paksem |
| {{ui:Pühkimine}}, {{ui:Loft}}, {{ui:Kalle}} kumeratel tahkudel; väljapressimine kuni tahuni, järgmise tahuni või tipuni; koonilised väljapressimised | Pressi välja või pöörä, vajadusel sammudena; pressi välja mõõdetud sügavuseni |
| {{ui:Ribi}}, {{ui:Põhiflenss}}, {{ui:Servaflenss}} ja tasandatud kujud | Pressi välja plaat või ribi profiil |
| Pindad: {{ui:Vorm}} lõpetamine detailiks, {{ui:Lapp}}, {{ui:Pinna ühendamine}}, {{ui:Gordoni pind}}, {{ui:Õmble}}, {{ui:Paksenda}}, {{ui:Nihuta pinda}}, {{ui:Pikenda pinda}}, {{ui:Lõika pinda}} | Pole saadaval |
| Mitu keha: {{ui:Ühenda}}, {{ui:Teisalda keha}}, {{ui:Skaleeri keha}}, {{ui:Teekonnamuster}}, tunnused, mis loovad uue keha | Üks tahke keha; mustrid ja peegeldamise koopiatunnused |
| Visandid, tasandid, teljed ja punktid tahkudel, mida leiab ainult täpne tuum (ümardusega tehtud tahk, augu sein, imporditud tahke tahk) | Visandi tasanditel, referentstasanditel ja väljapressimiste ning pööramiste lamedatel tahkudel |
| Genereeriva disaini tulemus, mis avatakse detailina või lisatakse detailile (muutub imporditud tahkeks) | Laadi tulemus alla STL- või STEP-failina |
| STEP-faili kumerate tahkude muutmine täpsete pindadena; täpne STEP splainist, pühitud ja pööratud tahkudest STEP-failist, splainiküljed, modelleeritud keermed, STL / OBJ / 3MF kehad ja koostud; STEP teistelt detailimodelleerijatelt | {{ui:Ava}} loeb STEP-i kolmnurkadena ning säilitab faili lamedad tahud, silindrid, koonused, sfäärid ja toorused ekspordi jaoks ([Ava STEP-fail](topic:import-step)); {{ui:Ekspordi}} › {{ui:STEP AP242 (täpne tahke)}} kirjutab iga analüütilise tahu täpselt ja hoiab need tahkudena ([Eksport](topic:export-files#for-other-cad-programs-step)); teise detailimodelleerija makro kirjutab ikka |
| Tõelised kaared joonisvaadetes | Vaated ja lõiked joonistatakse tahkudest |
| Täpsed mahud, pindalad ja kaugused | {{ui:Mõõda}} annab tahke numbrid tahkude järgi, veidi madalad ümmargustel detailidel; peenem **Kõverate** seadistus viib need lähemale |

Mõned allpool olevad tabelite read soovitavad ühte neist tunnustest kui viisi millegi muu ümber. Need soovitused kehtivad, kui täpne tuum on tagasi.

## Tunnused

| Veel valmis pole | Selle asemel praegu |
|---|---|
| Tahkude ümardused, täisümarused, ümardused raadiustega, mis on seatud serva punktides | Konstantne või lineaarselt muutuv {{ui:Ümardus}}; mitu ümarduse tunnust |
| Koored erinevate seinapaksustega | Üks {{ui:Koor}}-paksus; lisa materjali väljapressimistega seal, kus sein peab olema paksem |
| Tõmme vabakujulistel (splain) tahkudel | {{ui:Kalle}} töötab lamedatel, silindrilistel ja koonilistel tahkudel |
| Keeravad süstid, õhukese seina ja pinna süstid; otsa puutuvus loft-tunnusel; loft ühe juhikuga; splainteed | {{ui:Pühkimine}} fikseeritud orientatsiooniga või otsamõõtkavaga; loft kahe või enama juhikuga: vt [Süst, loft ja tõmme](topic:sweep-loft-draft) |
| Ribid kaartest või splainidest; ribid, mis kasvavad visandiga ristkülikuna (pealtvaatest); tõmme ribidel; mitu ribi ühest visandist | {{ui:Ribi}} ühest joonteahelast ribi enda tasandil: vt [Ribid ja kinnitusnurgad](topic:rib) |
| „Kuni“ kumera pinnani, „kuni järgmiseni“ peatudes kumeral tahul | Kuni lameda tahuni või referentstasandini |
| Vastuursatud augud, tolli- ja torukeermed, koonilised keermed, keermete väljajooksud ja faasitud keermealgused | Vastuursimine väikese sügavusega; ISO meetrilised ja trapetskeermed, kosmeetilised või modelleeritud: vt [Keermed võllidel ja aukudel, joonistatud või modelleeritud](topic:threads) |
| Õhukeste tunnuste väljapressimised | Joonista profiili mõlemad seinad |
| Mustrikoopiate ükshaaval vahelejätmine, täitemustrid | Kasuta eraldi tunnuseid; mustrid mööda kõverat: {{ui:Teekonnamuster}} |
| Mustrite koopiad, peegeldused, ümardused, faasid, koored ja imporditud tahked | Kopeeri visand või tunnus, millele need on ehitatud, või tee neist muster |
| Täpne (G1) puutuvus vormi erilistes punktides; vormi lappide ühendamine suuremateks tahkudeks | Tõsta vormi tase: ligikaudsed lapid muutuvad väiksemaks; vt [Vabakujulised kujud vormiga](topic:form-surfaces) |
| Vorm, mis koosneb mitmest eraldi suletud tükist ühes tunnuses; sillad vormide vahel | Üks suletud tükk vormi tunnuse kohta; ühenda need käsuga Ühenda |
| Pinnakehade valimine vaates (v.a lõike- ja lapipunktid); pindade ümardused; lõikamise tühistamine; G2-lapid; Gordoni pinnad kumerate naabrite puutujana (lamedate tahkude puutujana on tehtud) | Vali nad nime järgi tunnuse paneelil; paksenda enne, siis ümarda tahke |
| Kehade loend ajaloos; peidetud kehade jätmine eksportidest välja | Nimeta ümber ja peida kehad detaili paneeli kehaloendis; kustuta või summuta kehaga tehtud tunnus, et see välja jätta |
| Mittetasane skaleerimine, mis hoiab silindrid ja koonused analüütilistena; mittetasane skaleerimine nihutatud pindadel | {{ui:Skaleeri keha}} teeb kumerad tahud suletud B-splainideks (0,0000004 mm piires); ühtlane skaleerimine jääb täpseks |
| Pinnakehade ühendamine; Minkowski summad | Kõigepealt {{ui:Õmble}} või {{ui:Paksenda}}, siis {{ui:Ühenda}} |
| Tolerantsianalüüs: tolerantsiahelad, mis pööravad nurki (2D- ja 3D-vektorsilmused), geomeetriast arvutatud tundlikkus, Monte Carlo teiste jaotustega, mõõdutolerantsid visandi mõõtudel, boonustolerants materjali tingimusest | {{ui:Tolerantsiahel}} koostes: üks suund, halvim juhtum ja RSS, tolerantsid sisestatud, tiitelploki üldtolerantsist või GD&T raamidest: vt [Tolerantsiahelad](topic:tolerance-stackup) |
| Paigutamine: lõikejärjekord ja sisselõiked, ühiste servade lõikamine ainult üks kord, detailid, mis peavad koos püsima; jäägid rullidelt, projektide vahel jagatud laos | {{ui:Paiguta lamedad detailid lehtedele…}} vahe, varude, pööretega ja kiudsuunaga: vt [Lamedate detailide paigutamine lehtedele](topic:nest-flat-parts); jäänud plaadid säilitatakse ja kasutatakse kõigepealt: vt [Ülejääkide säilitamine ja taaskasutamine](topic:nest-offcuts); lõikeplaani koosta oma lõikuri tarkvaras |
| Lehtmetall: äärised, nihked, kaldlõikega ja kontuuriga flenssid; flenssid kumeratel servadel või painutatud põhiflensi tahkudel; visandatud painded; nurgasulgurid; vormimistööriistad; tahke muutmine lehtmetalliks; painutatud põhiflensi lame kuju koos väljalõigetega; painutustabelid | {{ui:Põhiflenss}} (plaat või painutatud profiil), {{ui:Servaflenss}} plaadi sirgetel servadel koos painutuse vabanduste ja tasandatud kujuga K-teguriga: vt [Lehtmetall](topic:sheet-metal) |
| Tõmbenurga analüüs koostudel; lahutusjoone leidmine; seina paksuse analüüs | {{ui:Tõmbenurga analüüs}} detailil disainis: vt [Tõmbenurga kontroll vormimiseks ja valamiseks](topic:draft-analysis); koosta iga detail eraldi kontrollimiseks |

## Visandid

| Veel valmis pole | Selle asemel praegu |
|---|---|
| Ellipsid, puutuvad kaared, koonilised lõigud, splainid kindla astme või kaaludega (NURBS) | Splainid (kuupilised), kaared ja ringid puutuvussuhetega |
| Punkt splainil (seos), kumeruse (G2) seosed | Pane splaini enda punkt sinna, kus ta peab läbima |
| Splainide nihutatud koopiad, mis järgivad hilisemaid muudatusi; kontuurid ahelatest teravate splainiteravustega | Nihuta uuesti pärast muudatust; ümarda kõigepealt nurk |
| Mustrikoopiad, mis jäävad algsega seotuks; mustrid mööda kõverat | Kopeeri uuesti pärast muudatust |
| Vabakujuliste või kaldus ringikujuliste servade projitseerimine; projitseeritud geomeetria, mis järgib detaili | Projitseeri sirged ja paralleelsed ringikujulised servad, siis mõõdista |
| Juhitud (referents-) mõõdud | Loe mõõdud paneelilt või detaili andmetest |
| Kollineaarsed seosed | Paralleelne 0 kaugusega |
| Kleepimine teise programmi (süsteemi lõikelauale) | Ekspordi DXF, STEP, STL või 3MF |
| Kaarte, relatiivsete või polaarkoordinaatide sisestamine | Sisesta jooni ja ringe; joonista kaared kaareriistaga |
| Geomeetria valimine ilma osuta | Vajab klõpsu või puudutust |

## Parameetrid ja ühikud

| Veel valmis pole | Selle asemel praegu |
|---|---|
| Konfiguratsioonid, mis muudavad materjale; CSV-disainitabel, mis lülitab tunnused välja | Konfiguratsioonid seavad parameetreid ning lülitavad tunnuseid sisse ja välja: vt [Konfiguratsioonid ja disainitabelid](topic:design-tables); `partcraft variants` koostab salvestatud konfiguratsioonid nime järgi, tunnused väljalülitatutena: vt [Tee variantide pakk oma konfiguratsioonidest](topic:variant-pack) |
| Võrrandid uusimate tunnuste enda paneelide arvudel (tasand, süst, tõmme ja sarnased) | Kirjuta need skripti või käsuga `partcraft set` ([Skriptid ja käsurida](topic:scripts-and-cli)) |
| Detail tollides | Mõõtmed näidatakse millimeetrites; kirjuta `2in` arvukasti või avaldisse ja see muutub 50,8-ks |

## Failid

| Veel valmis pole | Selle asemel praegu |
|---|---|
| Imporditud STEP-tahke enda tunnuste muutmine (see tuleb ilma ajaloota) | Lisa või lõika materjali oma tunnustega |
| Värvide, nimede, koostestruktuuri ja PMI lugemine STEP-ist | Pole saadaval |
| glTF, OBJ, IGES, Parasolid eksport; 3D-detaili DWG (ainult variantide pakk kirjutab DWG-d: joonislehe) | STL või 3MF võrkude jaoks; STEP tahkete jaoks; DXF 2D jaoks |
| IGES-i, DXF-i või teiste programmide failide avamine (`.3dm`-failid avanevad ühe kehana: [Ava .3dm-mudel tahke kehana](topic:open-3dm-files)) | Küsi STEP-i või suletud STL-, OBJ- või 3MF-võrku: [Ava STL, OBJ või 3MF](topic:open-meshes) |
| Koostestruktuur (puu detailinimedega) eksporditud STEP-is | Koostu STEP on paigutatud tahkete ühend |
| Salvestamine valitud kausta ilma brauseri allalaadimiseta | Lülita brauseri allalaadimise seadetes sisse „küsi, kuhu salvestada“ |

## Joonised

| Veel valmis pole | Selle asemel praegu |
|---|---|
| Mõõdud peale kolme üldmõõdu (augu suurused, asukohad, mõõtude tolerantsid) | Märgi PDF-i või ekspordi DXF ja mõõdista 2D CAD-programmis |
| Rohkem kui üks lõige või detail; joondatud, katkestatud ja abivaated | Üks lõige ja üks detail joonise kohta |
| Vaba tekst, märkmed ja tabelid lehel (v.a pealkirja- ja versiooniplokid) | Viimistlusmärkus või tekst lisatud PDF-ile |
| Esimese nurga projektsioon, liikuvad vaated, portreelehed | Kolmas nurk, automaatne paigutus, maastikulehed A4–A0 ja ANSI A–E |
| Elav lõikevaade: mitu tasandit või lõikekast korraga, lõikeserva kontuur, lõike salvestamine faili | Üks tasand korraga valikust {{ui:Vaated}} › {{ui:Lõige}}; vt [Vaata sisse lõikevaatega](topic:section-view) |
| Koostejoonised rohkemate vaadete, mõõtmete või liigutatavate pallidega | Üks isomeetriline (või lahtimonteeritud) vaade automaatsete pallide ja detailide nimekirjaga |
| GD&T ja viimistlussümbolite kopeerimine ja kleepimine | Paiguta iga üks käskudega Andmik, Raam või Viimistlus |
| Juhendid: STEP-failid Illustrate'i {{ui:Teisest failist…}}, mudel otse ModelCraftist või BimCraftist, pildid path-tracer'i kvaliteediga, interaktiivne 3D PDF-is | Ava STEP disainis ja alusta juhendit {{ui:Avatud osast}}; salvesta mudel glTF-ina (.glb); 3D-vaate PNG-pildid; interaktiivne 3D-fail: vt [Alusta juhendit Illustrate'is](topic:illustrate) |

## Koostud

| Veel valmis pole | Selle asemel praegu |
|---|---|
| Hammasratta, hammaslatti, nukk- ja kruvi-liited; palliliide piiratud koonusega; liited kumeratel tahkudel või punktide vahel | Jäik, pöörlev, liugur, silindriline, tasandiline, pallikujuline ja tihvt-soonega liited lamedatel tahkudel, iga väärtus oma piiridega: vt [Koosta koost](topic:build-assembly) |
| Lahtimonteerimise sammud, mis pööravad detaile, ja detailide lohistamine, mida liited paigutavad | Sirged lahtimonteerimise sammud; eemalda liide, et detaili käsitsi liigutada |
| Alamkoostud | Ainult üks detailide tase |
| Hammasrattad, nukid, kontakt | Pole saadaval |

## Valmistamine

| Veel valmis pole | Selle asemel praegu |
|---|---|
| 3D-jämetöötlus kumeratel tahkudel, 3D-adaptiivne puhastus, jääkide töötlemine; veeliini-, pliiatsi-, radiaal- ja spiraalviimistlus; adaptiivsed läbimised kaartidena | 2,5-teljeline tahk, tasku, 2D-adaptiivne, kontuur, puurimine ja faasimine: vt [Tee tööradu ja G-koodi](topic:manufacture); terve mudeli paralleelne ja kaarvaamne viimistlus: vt [3D-viimistlus](topic:finish-3d) |
| 4- ja 5-teljelised tööradad, pööramine, mõõtmine | Seadista üks pool korraga, tööriista telg vahekaardil Seadistus |
| Hoidja ja varre kokkupõrke kontroll | Jälgi kanalite pikkuse hoiatusi ja kontrolli oma juhtimisseadme simulaatoris |
| Mõõtmine, tööriista eluea ja alamprogrammide tsüklid, 4. ja 5. telje ning treipinkide koodid postprotsessoris; teiste programmide postfailide laadimine | Kirjuta või muuda postprotsessorit PartCraft'i enda vormingus: vt [Muudetavad postprotsessorid](topic:post-processors) |
| Tolli G-kood (G20) | Ainult millimeetrid (G21) |

## Simulatsioon ja genereeriv disain

| Veel valmis pole | Selle asemel praegu |
|---|---|
| Mittelineaarsed uuringud: voolavus, suured läbipainded, kontakt detailide vahel, väsimus | Lineaarne staatiline ja omasagedused: vt [Kontrolli pinget ja läbipainet](topic:simulation); hoia ohutusteguri oluliselt suuremana kui 1 |
| Mittelineaarne väändumine (algdefektid, järelväändumine, läbilöök) | Lineaarsed väändumise koormustegurid suure varuga: vt [Kuumus, soojuspinge ja väändumine](topic:thermal-and-buckling) |
| Kiirgus tahkude vahel (vaatetegurid), kontaktitakistus, temperatuurist sõltuvad materjalid, inertsus soojuspingetes (soojuslöögilained) | Kiirgus ümbritsevasse, stabiilne või kvaasistaatiline soojuspinge aja jooksul, konstantsed omadused: vt [Kuumus, soojuspinge ja väändumine](topic:thermal-and-buckling) |
| Automaatne täpsustamine ülemineku soojusele ja uuringutele soojuskoormusega; võrgu harvendamine seal, kus viga on väike; sihtmärk kohaliku suuruse jaoks (tipupinge ühes kohas) | **Täpsusta automaatselt** staatiliste, väändumise, omasageduse ja stabiilse soojuse uuringute puhul, vea järgi kogu detailil: vt [Kontrolli pinget ja läbipainet](topic:simulation); muidu vähenda elemendi suurust |
| Laagri- ja polditapped, kaugjõud, momendid, vedrud, ettekirjutatud nihked | Jõud ja rõhud tahkudel, raskusjõud; fikseeritud ja hõõrdumiseta tahud |
| Koostude simulatsioon; materjalid, mis erinevad suuna järgi (prinditud kihid, komposiidid) | Üks detail, üks isotroopne materjal |
| Mitu lahendaja lõime tetraeedrilistele uuringutele, soojusülekandele ja genereerivale disainile; lõimed lehel, mis ei ole ristpäritolu isoleeritud | Vokselite uuringud, väändumine, pinge aja jooksul ja laminaarne voog kasutavad lõimi, kui leht lubab: vt [PartCraft'i seaded](topic:settings) |
| Turbulentne voog konstruktsioonitäpsusega (Spalart–Allmarasi mudel on sisse pandud eksperimentaalsena: toru hõõrdumine 30 kuni 34 % kõrgem, tagasiastme taasühinemine 21 kuni 39 % lühem; plaanis: peenemad lahtrid seinte lähedal), soojus voos, ajast sõltumatu (ajaliselt täpne) voog, vabad pinnad, mittenewtoni vedelikud, pöörlevad detailid | Laminaarne, stabiilne, isotermiline Newtoni vedeliku voog või eksperimentaalne turbulentne mudel kvalitatiivsete mustrite jaoks: vt [Simuleeri vedeliku voogu](topic:flow-simulation); paneel hoiatab, kui Reynoldsi arv on laminaarsest üle |
| Pinge piirangud ja tootmisreeglid (rippuvad servad, freesimise suunad) genereerivas disainis; mitu materjali ühes kujus | Jäigaim kuju mahu jaoks; kontrolli tulemust simulatsioonis: vt [Kasvata kuju koormustest](topic:generative-design) |
| Tulemus redigeeritava (siledana, parameetrilise) tahkena | STL, tahkude STEP või detail, kus tulemus on imporditud tahkudega tahke |
| Elektrimasina disain: rootor pöörleb staatoris, pöördemoment nurga järgi, küllastuv teras, magnetid, mis kaotavad tugevuse oma põlvest kaugemal, pöörisvoolud ning raua ja vase kaod; magnetväljad 3D-s või kumeratel võrkudel | Lineaarne 2D-magnetstaatika ruudustikul analüüsi teegis: mähised, raud, püsimagnetid nende tagasijooneal, vahed, induktiivsus ja tõmme: vt [Magnetväljad 2D-s](topic:magnetic-fields-2d) |

## Skriptid

| Veel valmis pole | Selle asemel praegu |
|---|---|
| Ülekuva abi, katkestuspunktid ja sammu-kaupa liikumine skriptiredaktoris | Otsing, kokkuvolt ja täiendamine on olemas (vt [Kirjuta ja käivita skripte](topic:craftscript)); muu jaoks oma redaktor: {{ui:Salvesta}} ja {{ui:Ava}} grupis Skript viivad skriptid sisse ja välja; sisseehitatud funktsioonid on loetletud [CraftScripti keeles](topic:craftscript-language) |
| Katkestuspunktid ja sammud läbi skripti | `disp` ja `fprintf` teel; {{key:Mod+Enter}} käivitab mõned valitud read korraga |
| Väljad ja graafikud, mida skript näitab, joonistatakse Disaini töötsoonis; skriptid, mis muudavad detaili parameetreid | Need kuvatakse Skripti töötsoonis; skriptid loevad parameetreid käsuga `param` (vt [Kirjuta ja käivita skripte](topic:craftscript)), muuda neid vahekaardil {{ui:Parameetrid}} |
| Pildid ja tabelid graafikutega kõrvuti; graafiku muutmine (suum, telje piirid) enne salvestamist | Kõrvuti näitab graafikuid; salvesta graafik PNG-, SVG- või CSV-vormingus ja lõpeta mujal |
| numpy ja teised Pythoni paketid; Python ilma ühenduseta; Pythoni lisamine redaktoris; Pascali skript | Pythoni standardteek, CraftScript ja Lua: vt [Skriptid Pythonis](topic:craftscript-python) |
| Lua funktsioonide andmine sisseehitatud funktsioonidele; teegi funktsiooni kutsumine Lua-st nimega, mis koostatakse skripti käigus | Kirjuta teegi funktsiooni nimi skripti (`cs.static_tet(…)`) või kutsu seda CraftScripti skriptist |

## Rakendus

| Veel valmis pole | Selle asemel praegu |
|---|---|
| Pilvesalvestus, jagamine ja versiooniajalugu | Pole veel saadaval. Salvesta failid oma arvutisse ja hoia versioone nime järgi |
| PartCraft paigaldatud rakendusena iPadis ja iPhone'is | Kasuta PartCraft'i seadme brauseris; Androidil ja lauaarvutis töötab see ka CadCraft Studios (getcadcraft.com/download) |
| Kontekstimenüüd (parem klõps) | Tööriistariba ja parempoolne paneel |
| Täielik töö võrguühenduseta värskest algusest | Ainult siis, kui rakendus on salvestatud võrguühenduseta kasutamiseks: vt [Töö võrguühenduseta](common:offline) |

Teata, mida kõige rohkem puudu jääb saidi toetuslehe kaudu: see mõjutab, mis tuleb järgmisena.

## Insener (generaatorid ja väljad)

| Veel valmis pole | Selle asemel praegu |
|---|---|
| Ühendused, pordid ja liitmikud genereeritud soojusvahetil; temperatuurikõverad materjali tugevusele; teeharud kollektoris | Generaatorid teevad südamiku ja torud; lisa liitmikud disainis; kasuta materjali toatemperatuuri näitajaid koos ohutusteguriga |
| Generaatorite lisamine lisandmoodulite kataloogist ühe klõpsuga | {{ui:Ava}} töötsoonis Insener lisab generaatori failist |
| Väljafail, mis on peenem kui generaatori enda vokselisuurus; `.vdb`-failide lugemine | Salvesta peenem väli skriptist; `.vdb` kirjutatakse, mitte ei loeta |
| Surveanuma koodi arvutused | Õpikute õhukese ja paksu seina valemid valitud ohutusteguriga; mitte koodi varu |
| Generaatorid teistele rakendustele | Selles versioonis ainult PartCraft |
