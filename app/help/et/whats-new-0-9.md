---
title: Mis on uut versioonis 0.9 (varasem)
summary: PartCraft 0.9 lisab ümarused tahkude vahel ja paksenduse tahkisteks, tuhandetest detailidest koostud, dokumentide hoidla koos versioonidega, Solid FEM pingeanalüüsi lisandmooduli, kümme kaarmeetodit, Ühendkuningriigi terasmõõdud, printimise staadiumi ja vaigu printimise lisandmoodulid.
keywords: uuendused 0.9, varasem versioon, mis on uut, versioonimärkmed, muudatuste loend, 0.9, ümardus tahkude vahel, veerev pall, mitme serva ümardus, paksenda, tahkis pindadest, STEP-kest, IGES-tahkis, skaneeringu ümardused, suur koost, kergvaade, 20000 detaili, dokumendid, hoidla, võta välja, versioon, Rhino-link, Grasshopper, 3dm, kursorid, tehase põrand, tööjärjekord, Solid FEM, lõplike elementide meetod, von Mises, loomulik sagedus, kaarmeetodid, 3-punktiline kaar, Ühendkuningriigi terasprofiilid, printimise staadium, vaik, GOO, CTB, alus, lamesta, muutmise ajal uuendamine, mis puruneb esimesena, koormustegur, mittelineaarne, voolavus, plastne deformatsioon, kontakt, CalculiX, liikumisuuring, kliirens, pinnad, NURBS, sujuvaks tegemine, hull, zebra, insener, generaator, genereeritud keha, visand fotost, mõõtkava printimiseks, jaotamine printimiseks, kahanemine, paigutatud lehed, G-kood, joonis, mõõtmesta augud, assistent, MCP, keeled, tööriistariba read
from: 1dafd7c8
---

See on, mis muutus PartCraft'is 0.9 võrreldes versiooniga 0.8.1. Vabakujulised pinnad sulguvad nüüd tahkisteks, tuhandetest detailidest koosted jäävad kasutatavaks, dokumentide hoidla hoiab versioone ja Solid FEM lisandmoodul kontrollib detailis pinget. Iga punkt ütleb, kust seda leida.

## Uut versioonis 0.9.1

- **Täpne STEP-eksport.** {{ui:Ekspordi}} › {{ui:STEP AP242 (täpne tahke)}} ja {{ui:STEP AP214 (täpne tahke)}} töötavad nüüd. Augud, tapid, ümardused, koonused, sfäärid ja toroidid kirjutatakse oma tõelistel pindadel, tõeliste ringidega servadena, nii et teine CAD- või CAM-programm saab augu tuvastada august. Splainiküljed, modelleeritud keermed ja imporditud võrgud jäävad samas tahkises lamedateks tahutud pindadeks. Vt [Eksport printimiseks, STEP ja DXF](topic:export-files#for-other-cad-programs-step).
- **STEP sisse, täpne STEP välja.** Avatud STEP-fail säilitab oma lamedad tahud, silindrid, koonused, sfäärid ja toroidid, nii et {{ui:Ekspordi}} › {{ui:STEP AP242 (täpne tahke)}} kirjutab need tagasi tõeliste pindadena, mitte tahkudena: tarnija tala koos polti aukudega väljub samade tahkudega, millega sisse tuli, pluss mis iganes sisse lõikasid. Faili splaini-, pühitud ja pööratud tahud jäävad tahkudeks, nii nagu ka STL-, OBJ- ja 3MF-kehandid. Ava STEP-fail uuesti detaili puhul, mis salvestati varem. Vt [Ava STEP-fail ja ehita sellele](topic:import-step).
- **Tõelised ringid tahu DXF-is.** {{ui:Ekspordi}} › {{ui:DXF visandist või lamedast tahust}} lameda tahu valimisega kirjutab nüüd ümarad augud ringidena, augu enda keskpunkti ja raadiusega, laser-, plasma- või veejugalauale. Muud ümarad servad on endiselt tahutud.
- **Täpne STEP tsehhile.** {{ui:Valmistamine}}-s kirjutab {{ui:Täpne STEP (töökoordinaadid)}} detaili nullpunktiga seadistuse töönullpunktis ja Z mööda tööriista telge, koordinaatidega, mida G-kood kasutab. Vt [Tee tööradu ja G-kood](topic:manufacture#exact-step-for-the-shop).

## Uut

### Pinnad ja tahkised

- **Ümardus tahkude vahel.** Vali {{ui:Pinnad}} kastis {{ui:Tööruum}}, seejärel {{ui:Ümardus tahkude vahel}}. Vali ühe tahkise kaks tahku ja sisesta raadius ({{ui:Raadius otsas (mm, 0 = sama)}} raadiusele, mis muutub mööda serva). Tulemuse rida ütleb, kui kaugel ümardus on ideaalsest veerevast pallist, ja raadius, mis ei sobi, lükatakse tagasi tahku nimetades. {{ui:Mitme serva ümardamine}} ümardab palju servi ühe sammuga; märgi {{ui:Nurgad (sfääriline tükk, kus kolm kohtuvad)}}, et saada sfääriline nurk, kus kolm ümardatud serva lamedatest tahkudest kohtuvad. Vt [Vabakujulised pinnad (NURBS)](topic:nurbs-surfaces).
- **Paksenda tahkiseks.** {{ui:Paksenda tahkiseks}} samas tööruumis annab pinnale paksuse; {{ui:Teine pool}} kasvatab seda teist pidi. Voltimine või enda läbimine lükatakse tagasi, nimetades pinna ja koha.
- **Tahkised pindadest.** Trimmitud pindu saab ühendada liitmise, lahutamise ja lõikumisega ning salvestada detaili ühe tagasivõtmise sammuna. STEP kirjutab tahkise ühe suletud kestana ja IGES ühe tahkisena; mõlemad loetakse tagasi tahkisena. Kui tahud ei paaristu serv-serva kaupa, saab fail eraldi tahud ja olekurida ütleb seda. Tahkiseid saab teha ka sõlmeredaktoris; vt [Sõlmeredaktor](topic:nodes).
- **Äärmised ja muutuva raadiusega ümardused skaneeringutes.** Kui sobitad pindu skaneeringule, otsitakse ka äärmisi ümardusi (toroide) ja muutuva raadiusega ümardusi mööda üsna sirget serva ning need loetletakse koos raadiusega. Seda on testitud ainult tehtud skaneeringutel.

### Koosted, dokumendid ja lingid

- **Suured koosted.** Detailide koopiad jagavad ühte võrku ja {{ui:Vaated}} › {{ui:Kergvaade}} joonistab kaste, nii et vaade liigub ikka (see lülitub ise sisse väga suurte koostete puhul; valimine ja liited kasutavad ikka tegelikke detaile). Detailipuu näitab oma esimesi ridu ja nupu {{ui:Näita veel 700}} kõigi ülejäänute jaoks. Koostefailid võivad hoida kuni 50 000 eksemplari ja 100 000 liidet. Vt [Koosta koost](topic:build-assembly).
- **Dokumendid.** {{ui:Dokumendid…}} rühmas **Fail** avab dialoogi projektikausta kohal: võta välja ja pane tagasi, versioonitähed, olekud (töös, ülevaatamiseks, vabastatud, aegunud), ajalugu, kus-kasutatud ja materjalinimekiri. Vt [Dokumendid ja versioonid (hoidla)](topic:documents-walkthrough).
- **Otsene Rhino-link.** Üks skript, `cadcraft_link.py`, jälgib Rhino- või Grasshopper-dokumenti ja saadab PartCraft'i ainult muutunud osad, kus imporditud funktsioon ehitub uuele kujule uuesti. See on ühesuunaline ja vajab Studiot. Vt [Otsene .3dm-link](topic:live-3dm-link).
- **Näe teiste kursoreid.** Jagatud seansis näidatakse iga inimese kursorit tema nime ja valitud funktsiooniga. Vt [Tööta koos teistega reaalajas](topic:work-live).
- **Tehase põrand.** Lülita sisse lisandmoodul Tehase põrand: {{ui:Sätted}} › {{ui:Lisandmoodulid}}. Pärast programmi postitamist {{ui:Valmistamine}}-s saab selle vahekaart {{ui:Lisa tehase tööjärjekorda}} või {{ui:Salvesta tööfailina}}. See ei saada ega käivita kunagi masinat.

### Analüüs ja detailid

- **Solid FEM lisandmoodul.** Lülita sisse {{ui:Solid FEM}} lehel {{ui:Sätted}} › {{ui:Lisandmoodulid}} (see on väljas, kuni seda ei tee) ja parema paneeli ülaosasse ilmub {{ui:Solid FEM}} vahekaart. {{ui:Võrgusta detail}}, vali fikseeritud tahud ja koormused 3D-vaates, {{ui:Lahenda}} ja joonista nihe, von Mises'i pinge või vormikuju {{ui:Näita mudelil}} abil. Vt [Solid FEM: pingekontroll](topic:solid-fem-check).
- **Kaar visandites, kümne viisiga.** Nool {{ui:Kaar}} kõrval visandi tööriistaribal loetleb: 3-punktiline, Algus Keskpunkt Lõpp, Algus Keskpunkt Nurk, Algus Keskpunkt Pikkus, Algus Lõpp Nurk, Algus Lõpp Suund, Algus Lõpp Raadius, Keskpunkt Algus Lõpp, Keskpunkt Algus Nurk, Keskpunkt Algus Pikkus ja Jätka. Vt [Joonista kaar kümne meetodiga](topic:sketch-arc-methods).
- **Ühendkuningriigi terasmõõdud.** Keevisdetailid võivad kasutada 976 Ühendkuningriigi profiili (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); sisesta mõõt nagu `305x165x40 UB`. Vt [Konstruktsioonielemendid](topic:structural-members).

### Printimine

- **Printimise staadium.** Tööriistaribal nupp {{ui:Printimise staadium}} (lisandmoodul 3D-printimine, vaikimisi sees) paneb detaili kehandid katkendjoonega alusele: {{ui:Tasanda}}, {{ui:Pööra 90°}}, {{ui:Paiguta alusele}}, {{ui:Mahuta kõik alusele}}, {{ui:Kihtide eelvaade}}, seejärel {{ui:Saada 3D-printerisse}} USB kaudu, Klipperi (Moonraker), OctoPrinti või PrusaLinki kaudu. Midagi ei saadeta enne, kui kinnitad, ja sinu detaili ei muudeta kunagi. STL- või 3MF-faili puhul vt [Valmista detail 3D-printimiseks](topic:print-3d).
- **Vaigu printimine.** Lisandmoodulid lehel {{ui:Sätted}} › {{ui:Lisandmoodulid}}, kõik väljas, kuni need sisse lülitad: vaigu viilutaja, valotustest ja failivormingud Elegoo GOO, SL1, Chitubox CBDDLP/CTB ning Anycubic. Viilutamine käib töölõimel, nii et leht jääb reageerivaks.

## Kõigis rakendustes

- Iga hõljumisvihje on Bootstrapi tööriistavihje.
- Alustusvihjel on sulgemisnupp; see jääb suletuks.
- Paneeli vahekaartide rida, mis ei mahu, kerib külgsuunas, selle asemel et olla lõigatud.
- Brauseri vahekaart näitab avatud dokumendi nime enne PartCraft | CadCraft.
- {{ui:Sätted}} näitab töötsooni {{ui:Paigutus}} rippmenüüna valikutest ja keelekast loetleb iga keele, mida versioon toetab.
- Kaal ja temperatuur on ühikuliigid ühikuseadetes.

## Parandatud

- Visandi Kaare menüü loetleb nüüd iga meetodi.
- Lisandmooduli tööriistariba ja brauseri vahekaardi pealkiri parandati 2026-11-09.

## Ausad piirangud

- Täpne STEP loeti tagasi OpenCascade'is (kehtivad tahkised, mahud võrdsed käsitsi arvutatutega). Seda ei ole veel avatud igas CAD- või CAM-programmis ja koosteid ei kirjutata täpse STEP-ina.
- Midagi pole printerist välja trükitud. Viilutamine, G-kood ja vaigufailid loeti tagasi meie enda programmidega või ajutise printeriga; ühtegi vaigu vormingut ei laaditud printerisse ning printerite mõõdud ja valotused on alguspunktid.
- Solid FEM on lineaarne, isotroopne ja elastne, üks materjal detaili kohta, ilma kontakti, voolavuse või väändeta. Pinge kinnitatud tahkudel ja teravatel nurkadel sõltub võrgust. See on kontrolliabi, mitte insener-ülevaatusega.
- Suurte koostete ajastused tulevad serverilt ilma GPU-ta; 20000 detailiga täisdetailne kaader võtab seal ikka sekundeid.
- Ümardused töötavad tahkude paaride vahel; üldist tipu segu ei ole ja ümardust tahkude vahel, mis ei kohtu, ei ole.
- Rhino-link pole kunagi jooksnud päris Rhino ega Grasshopperi sees. Dokumente proovisid kaks programmi ühel kaustal, mitte kaks inimest võrgukettal.
- Skaneeringust pindade sobitamist pole käsitsi kontrollitud. Muud kui inglise keeled on masintõlked.
- Windowsi installijad pole koodiga allkirjastatud ja macOS-i kettapilt pole notariseeritud. Vt [Tõrkeotsing](topic:troubleshooting).

Varasemad muudatused on [Mis on uut versioonis 0.7](topic:whats-new-0-7).

## Varasem: 0.8 ja 0.8.1

See on, mis muutus PartCraft'is 0.8 ja 0.8.1 võrreldes versiooniga 0.7. Simulatsioon vastab, kui muudad, ja ütleb, mis esimesena puruneb; koostud saavad liikumisuuringuid ning uued töötsoonid teevad vabakujulised pinnad ja füüsikast lähtuvad detailid. 0.8.1 on väike parandusväljaanne.

### Uut

**Simulatsioon**

- **Uuenda muutmise ajal.** Märgi {{ui:Uuenda muutmise ajal}} lahendusplokis ja vastused järgivad sinu muudatusi. Muuda mõõdet, koormust või materjali ja kiire vastus, mis on tehtud elementidega neli korda suuremate, ilmub kohe; kui peatud umbes sekundiks, asendab uuringu enda täpsustatud vastus selle. Tulemused ütlevad, millist neist vaatad. Teraskonsoolil oli kiire vastus läbipainde osas 1% piires ja pinge osas umbes 4% täpsustatud vastusest. Vt [Kontrolli pinget ja läbipainet](topic:simulation#update-while-you-edit-live).
- **Mis puruneb esimesena.** Staatilise või väände uuringu puhul skaleerib {{ui:Mis läheb kõigepealt katki?}} plokis **Puruta** koormusi, kuni detail alla annab. See loetleb, halvimast alustades, koormustegurit esimese voolavuseni (punase märgiga, kus pinge tipp on) ja koormustegurit väändeni. Tegur alla 1 tähendab, et detail juba annab koormatuna alla, ja Probleemid näitab viga. Tegurid tulevad lineaarsest uuringust, nii et need on nii head, kui see on. Vt [Kontrolli pinget ja läbipainet](topic:simulation#find-out-what-breaks-first-break-it).
- **Voolavus ja kontakt.** Kaks uut uuringutüüpi: mittelineaarne, kus materjal järgib oma sirget joont kuni voolavuspingeni ja siis lamedamat kallet, plastse deformatsiooniga joonistatuna; ning kontaktne, kus eraldi tükid surevad üksteisele (hõõrdevabalt) või jäävad kinni (liimitud). Koormussamm, mis ei saa stabiliseeruda, või tükid, mis vajuvad teineteisesse liiga sügavale, näitavad Probleemide paneelil. Hõõrdumist, suurt libisemist, suuri pöördeid, suuri läbipainet ja väsimust ei lahendata. Vt [Kontrolli pinget ja läbipainet](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Sisendfailid CalculiX-ile.** {{ui:Ekspordi}} › {{ui:CalculiX-i sisendfail (.inp)}} salvestab uuringu CalculiX-ile, eraldi programmile, mille installid ja käivitad ise; {{ui:Ekspordi}} › {{ui:CalculiX-i tulemused (.frd)}} loeb selle tulemusfaili tagasi samale võrgule. PartCraft ei käivita seda programmi kunagi ja ütleb, kui detail on pärast sisendfaili salvestamist muutunud.

**Koosted**

- **Liikumisuuringud.** {{ui:Koost}} › {{ui:Liikumine}} juhib ühe liite väärtust sinu antud aja jooksul (püsikiirus, sujuvalt, siinus või välja ja tagasi), asetab koosteosa igas sammus koos liidete ja suletud ahelatega ning teatab, mis põrkab kokku ja kui lähedale detailid tulevad. {{ui:Lisa punkt}} joonistab punkti asukoha, kiiruse ja kiirenduse, liite väärtuse ja kliirensi aja järgi; {{ui:Salvesta CSV}} ja {{ui:Salvesta graafik}} kirjutavad need välja. Pärast {{ui:Käivita}} viib samm läbi käivitusriba koosteosa mis tahes sammu juurde. Uuringu seaded salvestatakse koostefaili. Kiirus ja kiirendus tulevad salvestatud asukohtadest, nii et kasuta rohkem samme, kui terav tipp loeb madalalt. Vt [Kontrolli koostu kokkupõrgete ja liikumise suhtes](topic:check-assembly#a-motion-study).

**Pinnad ja detailid füüsikast**

- **Pindade tööruum.** Vali {{ui:Pinnad}} kastis {{ui:Tööruum}} NURBS-kõverate ja -pindade jaoks detaili kõrval: {{ui:Kõver}}, {{ui:Loft}}, {{ui:Pühkimine}}, {{ui:Ühenda}} ja {{ui:Sebra}}, pidevusega (G0, G1 või G2), mõõdetud täpsetel pindadel; serv, mis on halvem, kui küsisid, on loetletud Probleemides koos ühendamise parandusega. {{ui:Silenda}} mõõdab voolujooni pöördepunktide ja kõveruse hüpete jaoks ning ehitab ebaühtlased ümber sinu tolerantsi piires. Pinnad salvestatakse detaili faili ega muuda detaili funktsioone. Vt [Vabakujulised pinnad (NURBS)](topic:nurbs-surfaces).
- **Insener-tööruum.** Vali töölülitist {{ui:Insener}}, vali generaator ja klõpsa {{ui:Uus}}: skript mõõdab detaili selle järgi, mida see peab tegema (soojust liigutada, voogusid, survet, materjali, printimisprotsessi), klassikaliste valemitega ja ehitab selle, seejärel annab tagasi arvud, mida kasutas, koos allikatega, oma tootmiskontrollid ja failid analüüsitööriistadele. Samad sisendid annavad sama detaili igas arvutis. Generaator jääb detaili sisse ja detaili avamine ei käivita kunagi skripti. Vt [Füüsikast lähtuvad detailid: generaatorid](topic:engineer-generators) ja [Kirjuta generaator](topic:write-a-generator).

**Visandid, joonised ja valmistamine**

- **Visand fotost.** {{ui:Elemendid}} › {{ui:Veel}} › {{ui:Visand fotost…}} jälgib lamedast detailist pilti tavalisel alusel (kontuur ja augud) või pliiatsijoonistust jooneteks, kaarteks ja ringideks. Annad ühe pikkuse, kontrollid eelvaadet ja teed visandi. Vt [Visandi põhitõed](topic:sketch-basics#a-sketch-from-a-photo).
- **Mõõtkava ja jaotamine printimiseks.** {{ui:Ekspordi}} › {{ui:Mõõtkava printimiseks (STL või 3MF)…}} skaleerib telje kaupa detaili muutmata, näiteks kahanemisvaru järgi. {{ui:Ekspordi}} › {{ui:Jaga printimiseks (tükkide zip)…}} lõikab detaili, mis on sinu alusest suurem, nummerdatud tükkideks, mis on ühendatud tihvtide, võtmete, sabaliidete, puurtihvtiaukude või magnetitaskutega. Vt [Printimine 3D-s](topic:print-3d).
- **Paigutatud lehed G-koodiks.** {{ui:Ekspordi}} › {{ui:Paigutatud lehed G-koodiks}} loeb paigutatud DXF-i ja teeb ühe programmi lehe kohta läbi valitud postprotsessori: augud ja väljalõiked esmalt, seejärel kontuurid. See ei planeeri sisselõikeid, lõikejärjestust ega ühiseid servi. Vt [Lamedate detailide paigutamine lehtedele](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Joonised, mis teevad rohkem ise.** {{ui:Leht}} › {{ui:Automaatne}} valib väikseima A-suuruse lehe, mis mahutab vaated suurima standardmõõtkavaga kuni 1:1. {{ui:Mõõtmesta augud}} paneb keskmärgi igale august, ühe sildi suuruse kohta ja asukohad vaate vasakust alanurgast. Vt [Tee joonis](topic:drawing-pdf).

**Kõigis rakendustes**

- **Keeled.** Rakendused tulevad 54 keeles. Muud kui inglise keeled on masintõlked, kuni emakeelne lugeja need läbi vaatab.
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} valib Mähi (nagu varem), 2 rida või 1 rida; riba, mis ei mahu, kerib külgsuunas. PartCraft'i funktsiooniribal näidatakse kõige enam kasutatud tööriista suurelt ja variante peidetakse jaotatud nupu taha.
- **Ühenda oma tehisintellekt.** Studio on keskus, et ühendada oma assistent kõigi kaheksa rakendusega, koos lugemis-, soovitus- või muutmisloaga iga rakenduse kohta. Ühendatud assistent saab detaili mõõtmed lausest, nagu konsool koormuse jaoks, näidata oma tööd ja iga kontrolli ning ehitada selle; ta teatab, mida ta ei kontrollinud (pingekontsentratsioon, väsimus, roomamine plastides). Vt [Kasuta PartCraft'i koos tehisintellekti assistendiga](topic:use-with-ai-assistants).

### Parandatud versioonis 0.8.1

- **Täisekraani kursori külmumine.** Hõljumisvalik on nüüd piiratud sagedusega. Põhjus on meie parim lugemine ja seda ei ole kinnitatud teatajaga.
- **Keel töö ajal.** Studio ja pakendatud väljaanded saavad keelt vahetada töötamise ajal; varem olid need ainult inglise keeles. Seda ei ole veel testitud igal platvormil: ütle, kui keel ei muutu.

### Pole veel selles versioonis

- Tehisintellekti ühendamine ei ole lõpetatud: ühe klõpsuga ühendamine Studio sees, hostitud konnektor brauseri-AI jaoks, oma API-võti Studio sees ja avaldatud MCP-pakett ei ole lubatud. Studiol endal ei ole AI-d.
- Studio pole koodiga allkirjastatud: Windows võib hoiatada ja macOS küsib paremklõpsu ning Ava. Vt [Tõrkeotsing](topic:troubleshooting).
- Tolerantsiahelad on endiselt ühesuunalised: vt [Tolerantsiahelad](topic:tolerance-stackup).
- Ülejäänu on loetletud [Mis pole veel valmis](topic:not-built-yet).

Varasemad muudatused on [Mis on uut versioonis 0.7](topic:whats-new-0-7).
