---
title: Mis on uut versioonis 0.9
summary: PartCraft 0.9 lisab ümardused tahkude vahel ja paksendamise tahkisteks, tuhandetest detailidest koosnevad koosted, dokumendihoidla redaktsioonidega, Solid FEM-i pingekontrolli lisandmooduli, kümme kaarimeetodit, Ühendkuningriigi terasprofiilid ning trükietapi ja vaigutrükki lisandmoodulid.
keywords: mis on uut, väljalaskemärkmed, muudatuste logi, 0.9, ümardus tahkude vahel, veeremispall, serva ümardamine, paksenda, tahkis pindadest, step-kest, iges-tahkis, skanni ümardused, suur koost, kergvaade, 20000 detaili, dokumendid, hoidla, välja võtta, redaktsioon, väljalase, kus kasutatud, rhino link, grasshopper, 3dm, kursorid, tehase põrand, tööjärjekord, solid fem, lõplike elementide meetod, von mises, omasagedus, kaarimeetodid, 3-punktiline kaar, UK terasprofiilid, sinine raamat, trükietapp, vaik, goo, ctb, alus, lameda asendisse, 0.8, 0.8.1, versioon, uued funktsioonid, reaalajas analüüs, uuendus muutmise ajal, purusta see, mis läheb esimesena katki, koormustegur, mittelineaarne, voolamine, plastne deformatsioon, kontakt, calculix, liikumisuuring, vaba ruum, pinnad, nurbs, silenda, korpus, sebra, insener, generaator, genereeritud keha, visand fotost, mõõtkava printimiseks, jaga printimiseks, kahanemine, paigutatud lehed, g-kood, joonis, mõõtmesta augud, assistent, mcp, keeled, tööriistariba read
from: 96d9fbfa
---

See on see, mis muutus PartCrafti versioonis 0.9 võrreldes versiooniga 0.8.1. Vabad pinnad sulguvad nüüd tahkisteks, tuhandetest detailidest koosnevad koosted jäävad kasutatavaks, dokumendihoidla hoiab redaktsioone ja Solid FEM-i lisandmoodul kontrollib detailis pinget. Iga punkt ütleb, kust seda leida.

## Uus versioonis 0.9.1

- **Täpne STEP-eksport.** {{ui:Ekspordi}} › {{ui:STEP AP242 (täpne tahke)}} ja {{ui:STEP AP214 (täpne tahkis)}} töötavad nüüd. Augud, tõusud, ümardused, koonused, sfäärid ja toorused kirjutatakse oma tõeliste pindadena, ringid servadena, nii et teine CAD- või CAM-programm saab augu võtta august. Splainiga küljed, modelleeritud keermed ja imporditud võrgud jäävad samas tahkises lamedateks tahkudeks. Vt [Eksport trükkimiseks, STEP ja DXF](topic:export-files#for-other-cad-programs-step).
- **STEP sisse, täpne STEP välja.** STEP-fail, mille avad, säilitab oma lamedad tahud, silindrid, koonused, sfäärid ja toorused, nii et {{ui:Ekspordi}} › {{ui:STEP AP242 (täpne tahke)}} kirjutab need tagasi tõeliste pindadena, mitte tahkudena: tarnija talad poltide aukudega lähevad välja samade tahkudega, millega sisse tulid, ja lisaks kõigega, mida sinna lõikasid. Faili splain-, pühitud ja pöördtahud jäävad tahkudeks, samuti STL-, OBJ- ja 3MF-kehad. Varem salvestatud detaili puhul ava STEP-fail uuesti. Vt [Ava STEP-fail ja ehita sellele](topic:import-step).
- **Tõelised ringid tahu DXF-is.** {{ui:Ekspordi}} › {{ui:DXF visandist või lamedast tahust}}, kui on valitud lame tahk, kirjutab ümarad augud nüüd ringidena, augu enda keskpunkti ja raadiusega, laseri-, plasma- või veejet-laua jaoks. Teised ümarad servad on endiselt tahud.
- **Täpne STEP tootmiseks.** {{ui:Valmistamine}}-s kirjutab {{ui:Täpne STEP (töökoordinaadid)}} detaili nii, et selle algpunkt on seadistuse töö-algpunkt ja Z on mööda tööriistatelge, koordinaadid, mida G-kood kasutab. Vt [Tee tööradu ja G-koodi](topic:manufacture#exact-step-for-the-shop).

## Uus

### Pinnad ja tahkised

- **Ümardus tahkude vahel.** Vali {{ui:Pinnad}} {{ui:Tööruum}}-i kastis, seejärel {{ui:Ümardus tahkude vahel}}. Vali ühe tahkise kaks tahku, sisesta raadius (ja {{ui:Raadius otsas (mm, 0 = sama)}} raadiuse jaoks, mis muutub mööda serva). Tulemuse rida ütleb, kui kaugel on ümardus ideaalsest veerevast pallist, ning raadius, mis ei sobi, lükatakse tagasi, nimetades tahku. {{ui:Mitme serva ümardamine}} ümardab mitu serva ühe sammuga; märgi {{ui:Nurgad (sfääriline tükk, kus kolm kohtuvad)}}, et saada sfääriline nurk, kus kolm ümardatud serva lamedatel tahkudel kohtuvad. Vt [Vabad pinnad (NURBS)](topic:nurbs-surfaces).
- **Paksenda tahkiseks.** {{ui:Paksenda tahkiseks}} samas töötoas annab pinnale paksuse; {{ui:Teine pool}} kasvatab seda teises suunas. Voldi või enda läbiva kohta lükatakse tagasi, nimetades pinna ja koha.
- **Tahkised pindadest.** Lõigatud pinnad saab ühendada liitmise, lahutamise ja lõikumisega ning rakendada detailile üheks tagasivõtmise sammuks. STEP kirjutab tahkise ühe suletud kestana ja IGES ühe tahkisena; mõlemad loetakse tagasi tahkisena. Kui tahud ei paaristu serv-serva kaupa, saab fail eraldi tahud ja olekurida ütleb seda. Tahkiseid saab teha ka sõlmetoimetajas; vt [Sõlmetoimetaja](topic:nodes).
- **Äärisümardused ja muutuva raadiusega ümardused skannides.** Kui sobitad pinnad skannile, otsitakse ka äärisümardusi (toorusi) ja muutuva raadiusega ümardusi üsna sirge serva ääres ning need kantakse raadiusega nimekirja. See on testitud ainult väljamõeldud skannidel.

### Koosted, dokumendid ja lingid

- **Suured koosted.** Koopiad olevad detailid jagavad ühte võrku ja {{ui:Vaated}} › {{ui:Kergvaade}} joonistab kaste, nii et vaade liigub edasi (sisse lülitub ise väga suurte koostude puhul; valimine ja liited kasutavad ikka päris detaile). Detailipuu näitab esimesi ridu ja nuppu {{ui:Näita veel 700}} ülejäänu jaoks. Koostefailides võib olla kuni 50 000 eksemplari ja 100 000 liidet. Vt [Koosta koost](topic:build-assembly).
- **Dokumendid.** {{ui:Dokumendid…}} jaotises {{ui:Fail}} avab dialoogi projektikausta kohal: võta välja ja pane tagasi, redaktsioonitähed, olekud (töös, ülevaatamiseks, väljastatud, aegunud), ajalugu, kus kasutatud ja materjalinimekiri. Vt [Dokumendid ja redaktsioonid (hoidla)](topic:documents-walkthrough).
- **Elav Rhino-link.** Üks skript, `cadcraft_link.py`, jälgib Rhino- või Grasshopper-dokumenti ja saadab PartCraftile ainult muutunu, kus imporditud element ehitatakse uuele kujule uuesti. See on ühesuunaline ja vajab Studiot. Vt [Elav .3dm-link](topic:live-3dm-link).
- **Näed teiste kursoreid.** Jagatud seansis kuvatakse iga inimese kursor koos tema nime ja elemendiga, mille ta on valinud. Vt [Tööta koos teistega reaalajas](topic:work-live).
- **Tehase põrand.** Lülita {{ui:Sätted}} › {{ui:Lisandmoodulid}} all sisse lisandmoodul Tehase põrand. Kui oled programmi genereerinud {{ui:Valmistamine}}-s, saab selle vahekaart lisada selle tehase tööjärjekorda või salvestada tööfailina. See ei saada ega käivita kunagi masinat.

### Analüüs ja detailid

- **Solid FEM-i lisandmoodul.** Lülita {{ui:Solid FEM}} sisse jaotises {{ui:Sätted}} › {{ui:Lisandmoodulid}} (see on väljas, kuni sa seda ei tee) ja parempoolsel paneelil ilmub vahekaart {{ui:Solid FEM}}. Võrgusta detail, vali 3D-vaates kinnitatud tahud ja koormused, {{ui:Lahenda}} ning joonista nihe, von Mises'i pinge või võnkekuju nupuga {{ui:Näita mudelil}}. Vt [Solid FEM: pingekontroll](topic:solid-fem-check).
- **Kaar visandites, kümmel viisil.** Nool {{ui:Kaar}} kõrval visandi tööriistaribal loetleb: 3-punktiline, Algus–Keskpunkt–Lõpp, Algus–Keskpunkt–Nurk, Algus–Keskpunkt–Pikkus, Algus–Lõpp–Nurk, Algus–Lõpp–Suund, Algus–Lõpp–Raadius, Keskpunkt–Algus–Lõpp, Keskpunkt–Algus–Nurk, Keskpunkt–Algus–Pikkus ja Jätka. Vt [Joonista kaar kümne meetodiga](topic:sketch-arc-methods).
- **Ühendkuningriigi terasmõõdud.** Keevisdetailid võivad kasutada 976 UK profiili (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); sisesta mõõt, näiteks `305x165x40 UB`. Vt [Konstruktsioonielemendid](topic:structural-members).

### Printimine

- **Trükietapp.** Nupp {{ui:Trükietapp}} tööriistaribal (lisandmoodul 3D-printimine, vaikimisi sisse) paneb detaili kehad katkendjoonelisele alusele: {{ui:Tasanda}}, {{ui:Pööra 90°}}, {{ui:Paiguta alusele}}, {{ui:Mahuta kõik alusele}}, {{ui:Kihtide eelvaade}}, seejärel {{ui:Saada 3D-printerisse}} USB kaudu, Klipperi (Moonraker), OctoPrinti või PrusaLinkiga. Midagi ei saadeta enne kinnitamist ja sinu detaili ei muudeta kunagi. STL- või 3MF-faili puhul vaata [Valmista detail 3D-printimiseks](topic:print-3d).
- **Vaigutrükk.** Lisandmoodulid jaotises {{ui:Sätted}} › {{ui:Lisandmoodulid}}, kõik väljas, kuni sa need sisse lülitad: vaigu-viilutaja, särituse test ja failivormingud Elegoo GOO, SL1, Chitubox CBDDLP/CTB ja Anycubic. Viilutamine töötab taustalõimes, nii et leht jääb reageerivaks.

## Igas rakenduses

- Iga kursori alla ilmuv vihje on Bootstrap-i tööriistavihje.
- Alustamise näpunäitel on sulgemisnupp; see jääb suletuks.
- Paneeli vahekaardirida, mis ei mahu, kerib küljele, selle asemel et lõigatuks jääda.
- Brauseri vahekaardil on avatud dokumendi nimi enne PartCrafti | CadCraft.
- {{ui:Sätted}} näitab tööruumi {{ui:Paigutus}} rippmenüüna valikutest ja keelekast loetleb kõik selle versiooni keeled.
- Kaal ja temperatuur on ühikute liigid ühikute sätetes.

## Parandatud

- Visandi kaare menüü loetleb nüüd kõik meetodid.
- Lisandmooduli tööriistariba ja brauseri vahekaardi pealkiri parandati 2026-11-09.

## Ausad piirangud

- Täpne STEP loeti tagasi OpenCascade'is (korrektsed tahkised, mahud võrdsed käsitsi arvutatutega). Seda pole veel avatud igas CAD- ega CAM-programmis ning koostu ei kirjutata täpse STEP-ina.
- Midagi pole päris printeril välja printitud. Viilutamist, G-koodi ja vaigufaile lugesid tagasi meie enda programmid või asendusprinter; ühtegi vaigu vormingut pole printerisse laetud, ja printerite mõõdud ning särituse väärtused on lähtepunktid.
- Solid FEM on lineaarne, isotroopne ja elastne, üks materjal detaili kohta, ilma kontakti, voolamise või stabiilsuse kaotuseta. Pinge kinnitatud tahkudel ja teravatel nurkadel sõltub võrgust. See on kontrollimise abivahend, mida pole insener üle vaadanud.
- Suurte koostude ajastused pärinevad serverist ilma GPU-ta; täisdetailiga kaader 20 000 detailiga võtab seal endiselt sekundeid.
- Ümardused töötavad tahkude paaride vahel; üldist tipu segu pole ega ümardust tahkude vahel, mis ei kohtu.
- Rhino-linki pole kunagi käivitatud päris Rhino või Grasshopperi sees. Dokumente proovisid kaks programmi ühel kaustal, mitte kaks inimest võrgujagamisel.
- Pindade sobitamist päris skannile pole käsitsi kontrollitud. Muud keeled kui inglise keel on masinmustandid.
- Windowsi paigaldajad pole koodiga allkirjastatud ja macOS-i kettapilt pole notariseeritud. Vt [Tõrkeotsing](topic:troubleshooting).

Varasemad muudatused on jaotises [Mis on uut versioonis 0.7](topic:whats-new-0-7).

## Varem: 0.8 ja 0.8.1

See on see, mis muutus PartCrafti versioonides 0.8 ja 0.8.1 võrreldes versiooniga 0.7. Simulatsioon vastab muutmise ajal ja ütleb, mis läheb esimesena katki, koostud saavad liikumisuuringuid ning uued töötoad teevad vabad pinnad ja füüsikast lähtuvalt mõõdetud detailid. 0.8.1 on väike parandusväljalase.

### Uus

**Simulatsioon**

- **Uuenda muutmise ajal.** Märgi {{ui:Uuenda muutmise ajal}} plokis {{ui:Lahenda}} ja vastused järgivad sinu muudatusi. Muuda mõõdet, koormust või materjali ja kiire vastus, tehtud neljakordsete elementidega, ilmub kohe; kui peatud umbes sekundiks, asendab uuringu enda täpsustatud vastus selle. Tulemused ütlevad, mida vaatad. Terasest konsoolil oli kiire vastus läbipainde osas 1 % piires ja pinge osas umbes 4 % täpsustatud vastusest. Vt [Kontrolli pinget ja läbipainet](topic:simulation#update-while-you-edit-live).
- **Mis läheb esimesena katki.** Staatilise või stabiilsuse uuringu puhul skaleerib {{ui:Mis läheb kõigepealt katki?}} plokis **Purusta see** koormusi, kuni detail järele annab. See loetleb halvimast alates koormustegurit esimese voolamiseni (punase märgiga, kus pinge tipneb) ja koormustegurit stabiilsuse kaotuseni. Tegur alla 1 tähendab, et detail annab koormatuna juba järele, ja probleemide loend näitab viga. Tegurid tulevad lineaarsest uuringust, nii et need on sama head kui see. Vt [Kontrolli pinget ja läbipainet](topic:simulation#find-out-what-breaks-first-break-it).
- **Voolamine ja kontakt.** Veel kaks uuringutüüpi: mittelineaarne, kus materjal järgib oma sirget joont kuni voolavuspingeni ja seejärel lamedamat kallet, plastse deformatsiooniga graafikul; ja kontaktiuuring, kus eraldi tükid suruvad üksteist (hõõrdumiseta) või jäävad kinni (sidutud). Koormussamm, mis ei saa stabiliseeruda, või tükid, mis vajuvad teineteisesse liiga sügavale, ilmuvad probleemide paneelil. Hõõrdumist, suuri libisemisi, suuri pöördeid, suuri läbipainet ja väsimust ei lahendata. Vt [Kontrolli pinget ja läbipainet](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiXi failid.** {{ui:Ekspordi}} › {{ui:CalculiX-i fail (.inp)}} salvestab uuringu CalculiXi jaoks, eraldi programmi, mille ise paigaldad ja käivitad; {{ui:Ekspordi}} › {{ui:CalculiX-i tulemused (.frd)}} loeb selle tulemusfaili tagasi samale võrgule. PartCraft ei käivita seda programmi kunagi ning ütleb, kui detail muutus pärast faili salvestamist.

**Koosted**

- **Liikumisuuringud.** {{ui:Koost}} › {{ui:Liikumine}} juhib ühe liite väärtust antud aja jooksul (konstantne kiirus, pehmendatud, siinus või edasi ja tagasi), paigutab koosti igal sammul koos liidete ja suletud ahelatega ning teatab, mis põrkub ja kui lähedale detailid tulevad. {{ui:Lisa punkt}} joonistab punkti asukoha, kiiruse ja kiirenduse, liite väärtuse ja vaba ruumi aja järgi; {{ui:Salvesta CSV}} ja {{ui:Salvesta graafik}} kirjutavad need välja. Pärast {{ui:Käivita}} viib käivitusribal sammhaaval liikumine koosti igale sammule. Uuringu sätted salvestuvad koostefaili. Kiirus ja kiirendus tulevad salvestatud asukohtadest, seega kasuta rohkem samme, kui terav tipp loetakse madalana. Vt [Kontrolli koostu põrkeid ja liikumist](topic:check-assembly#a-motion-study).

**Pinnad ja füüsikast lähtuvad detailid**

- **Pindade töötuba.** Vali {{ui:Pinnad}} {{ui:Tööruum}}-i kastis NURBS-kõverate ja -pindade jaoks detaili kõrval: {{ui:Kõver}}, {{ui:Loft}}, {{ui:Pühkimine}}, {{ui:Ühenda}} ja {{ui:Sebra}}, kus järjepidevus (G0, G1 või G2) mõõdetakse täpsetel pindadel ning serv, mis on halvem, kui nõudsid, on loetletud probleemides koos ühendamise parandusega. {{ui:Silenda}} mõõdab korpusjoonte pöördekohti ja kõverusehüppeid ning ehitab ebasiledad uuesti sinu tolerantsi piires. Pinnad salvestuvad detailifaili ega muuda detaili elemente. Vt [Vabad pinnad (NURBS)](topic:nurbs-surfaces).
- **Töötuba Insener.** Vali {{ui:Insener}} tööruumi valijast, vali generaator ja klõpsa {{ui:Uus}}: skript mõõdab detaili selle järgi, mida see peab tegema (soojus liikumiseks, voolud, rõhk, materjal, trükiprotsess), õpikuvalemitega ning ehitab selle, seejärel annab tagasi kasutatud arvud koos allikatega, oma valmistamiskontrollid ja failid analüüsitööriistadele. Samad sisendid annavad sama detaili igas arvutis. Generaator hoitakse detailis ja detaili avamine ei käivita kunagi skripti. Vt [Detailid füüsikast: generaatorid](topic:engineer-generators) ja [Kirjuta generaator](topic:write-a-generator).

**Visandid, joonised ja valmistamine**

- **Visand fotost.** {{ui:Elemendid}} › {{ui:Veel}} › {{ui:Visand fotost…}} jälgib lameda detaili pilti lihtsal taustal (kontuur ja augud) või pliiatsijoonistust joonteks, kaarteks ja ringideks. Annad ühe pikkuse, kontrolli eelvaadet ja koostad visandi. Vt [Visandamise alused](topic:sketch-basics#a-sketch-from-a-photo).
- **Mõõtkava ja jagamine printimiseks.** {{ui:Ekspordi}} › {{ui:Mõõtkava printimiseks (STL või 3MF)…}} skaleerib teljeti detaili muutmata, näiteks kahanemisvaru võrra. {{ui:Ekspordi}} › {{ui:Jaga printimiseks (tükkide zip)…}} lõikab detaili, mis on sinu alusest liiga suur, nummerdatud tükkideks, mis ühendatakse tihvtide, võtmete, sabakujuliste liidete, tüüblite aukude või magnetitaskutega. Vt [Printimine 3D-s](topic:print-3d).
- **Paigutatud lehed G-koodiks.** {{ui:Ekspordi}} › {{ui:Paigutatud lehed G-koodiks}} loeb paigutatud DXF-i ja teeb ühe programmi lehe kohta valitud postprotsessori kaudu: kõigepealt augud ja väljalõiked, seejärel kontuurid. See ei planeeri sissesõite, lõikejärjestust ega ühiseid servi. Vt [Paiguta lamedad detailid lehtedele](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Joonised, mis teevad rohkem ise.** {{ui:Leht}} › {{ui:Automaatne}} valib väikseima A-formaadi lehe, mis mahutab vaated suurimal standardsel mõõtkaval kuni 1:1. {{ui:Mõõtmesta augud}} paneb iga augu keskele keskmärgi, ühe selgituse iga mõõdu kohta ja asukohad vaate vasakust alanurgast. Vt [Joonise tegemine](topic:drawing-pdf).

**Igas rakenduses**

- **Keeled.** Rakendused on 54 keeles. Need, mis on peale inglise keele, on masinmustandid, kuni emakeelne kasutaja need loeb.
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} valib Mähi (nagu varem), 2 rida või 1 rida; riba, mis ei mahu, kerib küljele. PartCrafti elemendilint näitab kõige enam kasutatud tööriista suurelt ja peidab variandid jagatud nupu taha.
- **Ühenda oma tehisintellekt.** Studio on keskus, kuhu saab ühendada oma assistendi kõigi kaheksa rakendusega, igas rakenduses lugemis-, soovitus- või muutmisõigusega. Ühendatud assistent saab mõõtmestada detaili lausest, näiteks koormatava konsooli kronsteini, näidata oma käiku ja kõiki kontrolle ning ehitada selle; ta teatab, mida ei kontrollinud (pingekontsentratsioon, väsimus, plastide roomumine). Vt [PartCrafti kasutamine tehisintellekti assistendiga](topic:use-with-ai-assistants).

### Parandatud versioonis 0.8.1

- **Täisekraani kursori külmumine.** Kursori alla osutamise valik on nüüd piiratud. Põhjus on meie parim tõlgendus ja seda ei kinnitatud probleemi teatanud inimesega.
- **Keel töötamise ajal.** Studio ja pakendatud versioonid saavad töötamise ajal keelt vahetada; varem olid need ainult inglise keeles. Seda pole veel testitud igal platvormil: teata meile, kui keel ei muutu.

### Veel pole selles versioonis

- Oma tehisintellekti ühendamine pole lõpetatud: ühe klõpsuga ühendamine Studios, hostitud ühendaja brauseri-tehisintellekti jaoks, oma API-võti Studios ja avaldatud MCP-pakett pole lubatud. Studiol endal pole tehisintellekti.
- Studio pole koodiga allkirjastatud: Windows võib hoiatada ja macOS küsib paremklõpsu, seejärel Ava. Vt [Tõrkeotsing](topic:troubleshooting).
- Mõõtmeahelad on endiselt ühesuunalised: vt [Mõõtmeahelad](topic:tolerance-stackup).
- Ülejäänu on loetletud jaotises [Mis on veel ehitamata](topic:not-built-yet).

Varasemad muudatused on jaotises [Mis on uut versioonis 0.7](topic:whats-new-0-7).
