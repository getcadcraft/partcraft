---
title: Mis on uut versioonides 0.8 ja 0.8.1
summary: PartCraft 0.8 lisab reaalajas analüüsi muutmise ajal, kontrolli „Mis läheb kõigepealt katki?“, voolamis- ja kontaktuuringud koos sisendfailidega välise lahendaja jaoks, liikumisuuringud koostudele, tööruumi vabakujulistele pindadele, Insener-tööruumis füüsikast lähtuvalt dimensioneeritud detailid, foto-visandi, printimise eksportid, paigutatud lehed G-koodiks ning joonised, mis mõõtmestavad oma augud. 0.8.1 parandab täisekraanirežiimis kursori külmumise.
keywords: mis on uut, what's new, väljalaskemärkmed, muudatuste logi, muudatused, 0.8, 0.8.1, versioon, uued funktsioonid, reaalajas analüüs, uuendus muutmise ajal, purusta, mis läheb kõigepealt katki, koormustegur, mittelineaarne, voolamine, plastne deformatsioon, kontakt, calculix, liikumisuuring, vahe, pinnad, nurbs, silenda, kere, sebra, insener, generaator, genereeritud keha, visand fotost, mõõtkava printimiseks, jaga printimiseks, kahanemisvaru, paigutatud lehed, g-code, joonis, mõõtmesta augud, assistent, mcp, keeled, tööriistariba read
from: 62e4dce2
---

See on see, mis muutus PartCrafti versioonides 0.8 ja 0.8.1 võrreldes versiooniga 0.7. Simulatsioon vastab sinu muudatuste ajal ja ütleb, mis läheb kõigepealt katki, koostud saavad liikumisuuringuid ning uued tööruumid teevad vabakujulised pinnad ja füüsikast lähtuvalt dimensioneeritud detailid. 0.8.1 on väike parandusväljalase.

## Uus

### Simulatsioon

- **Uuenda muutmise ajal.** Märgi lahendusplokis {{ui:Uuenda muutmise ajal}} ja vastused järgivad sinu muudatusi. Muuda mõõtu, koormust või materjali ja kohe ilmub kiire vastus, mis on arvutatud neli korda suuremate elementidega; kui peatud umbes sekundiks, asendab uuringu enda täpsem vastus selle. Tulemused näitavad, millist neist vaatad. Terasest konsoolil oli kiire vastus läbipainde osas täpsest 1 % piires ja pinge osas umbes 4% piires. Vt [Kontrolli pinget ja läbivajumist](topic:simulation#update-while-you-edit-live).
- **Mis läheb kõigepealt katki.** Staatilise või nurjumisuuringu korral skaleerib {{ui:Mis läheb kõigepealt katki?}} plokis **Purusta** koormusi, kuni detail alla annab. Loend, halvimast alguses, näitab voolamise esimese koormustegurit (punase märgiga kohal, kus pinge tipp on) ja nurjumise koormustegurit. Tegur alla 1 tähendab, et detail annab juba koormatuna alla, ja Probleemid näitab viga. Tegurid tulevad lineaarsest uuringust, seega on nad sama head kui see. Vt [Kontrolli pinget ja läbivajumist](topic:simulation#find-out-what-breaks-first-break-it).
- **Voolamine ja kontakt.** Veel kaks uuringutüüpi: mittelineaarne, kus materjal järgib sirget joont kuni voolavuspingeni ja seejärel lamedamat kallet, ning plastse deformatsiooni graafik; ja kontaktuuring, kus eraldi tükid suruvad üksteist (hõõrdumatult) või jäävad kinni (liitunult). Koormusetapp, mis ei stabiliseeru, või tükid, mis vajuvad teineteisesse liiga sügavalt, kuvatakse paneelil Probleemid. Hõõrdumine, suured libisemised, suured pöörded, suured läbipainded ja väsimus pole lahendatud. Vt [Kontrolli pinget ja läbivajumist](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Sisendfailid CalculiXile.** {{ui:Ekspordi}} › {{ui:CalculiX-i sisendfail (.inp)}} salvestab uuringu CalculiXile, eraldi programmile, mille installid ja käivitad ise; {{ui:Ekspordi}} › {{ui:CalculiX-i tulemused (.frd)}} loeb selle tulemusfaili tagasi samale võrgule. PartCraft ei käivita seda programmi kunagi ise ning teatab, kui detail on pärast sisendfaili salvestamist muutunud.

### Koosted

- **Liikumisuuringud.** {{ui:Koost}} › {{ui:Liikumine}} juhib ühe liigendi väärtust antud aja jooksul (püsiv kiirus, pehmendatud, siinus või edasi ja tagasi), asetab koosti igal sammul koos liigenditega ja suletud ahelatega ning teatab, mis põrkub kokku ja kui lähedale detailid jõuavad. {{ui:Lisa punkt}} joonistab punkti asukoha, kiiruse ja kiirenduse ning liigendi väärtuse ja vahe ajaga; {{ui:Salvesta CSV}} ja {{ui:Salvesta graafik}} kirjutavad need välja. Pärast {{ui:Käivita}} viib käivitusriba samm-sammult koosti mis tahes sammu. Uuringu sätted salvestatakse koostufaili. Kiirus ja kiirendus arvutatakse salvestatud asukohtade põhjal, seega kasuta rohkem samme, kui terav tipp kuvatakse madalana. Vt [Kontrolli koostu kokkupõrgete ja liikumise suhtes](topic:check-assembly#a-motion-study).

### Pinnad ja füüsikast lähtuvad detailid

- **Pindade tööruum.** Vali {{ui:Tööruum}} kastist {{ui:Pinnad}}, et NURBS-kõverad ja -pinnad oleksid detaili kõrval: {{ui:Kõver}}, {{ui:Loft}}, {{ui:Pühkimine}}, {{ui:Ühenda}} ja {{ui:Sebra}}, pidevus (G0, G1 või G2) mõõdetakse täpsetel pindadel ning serv, mis on halvem kui soovisid, kuvatakse paneelil Probleemid koos parandusega „Ühenda“. {{ui:Silenda}} mõõdab kere jooned käände ja kõveruse hüpete suhtes ning ehitab ebasiledad ümber sinu taluvuse piires. Pinnad salvestatakse detailifaili ega muuda detaili elemente. Vt [Vabakujulised pinnad (NURBS)](topic:nurbs-surfaces).
- **Insener-tööruum.** Vali tööruumi valijast {{ui:Insener}}, vali generaator ja klõpsa {{ui:Uus}}: skript dimensioneerib detaili selle järgi, mida see peab tegema (soojus liikumiseks, voolud, rõhk, materjal, printimisprotsess), kasutades õpikuvalemeid, ehitab detaili ning annab tagasi kasutatud arvud koos allikatega, oma tootmiskontrollid ja failid analüüsiprogrammidele. Samad sisendid annavad igas arvutis sama detaili. Generaator jääb detaili sisse ja detaili avamine ei käivita kunagi skripti. Vt [Füüsikast lähtuvad detailid: generaatorid](topic:engineer-generators) ja [Kirjuta generaator](topic:write-a-generator).

### Visandamine, joonised ja valmistamine

- **Visand fotost.** {{ui:Elemendid}} › {{ui:Veel}} › {{ui:Visand fotost…}} jälgib lameda detaili pilti tavalisel alusel (kontuur ja augud) või pliiatsijoonistust joonteks, kaarteks ja ringideks. Sisestad ühe pikkuse, kontrollid eelvaadet ja koostad visandi. Vt [Visandamise alused](topic:sketch-basics#a-sketch-from-a-photo).
- **Printimise mõõtkava ja jagamine.** {{ui:Ekspordi}} › {{ui:Mõõtkava printimiseks (STL või 3MF)…}} skaleerib detaili telje kaupa, muutmata detaili ennast, näiteks kahanemisvaru arvestades. {{ui:Ekspordi}} › {{ui:Jaga printimiseks (tükkide zip)…}} lõikab detaili, mis on sinu printimisalusest liiga suur, nummerdatud tükkideks, mis on ühendatud tappide, võtmete, liblikasabade, tüüblite aukude või magnetiaukudega. Vt [Prindi 3D-s](topic:print-3d).
- **Paigutatud lehed G-koodiks.** {{ui:Ekspordi}} › {{ui:Paigutatud lehed G-koodiks}} loeb paigutatud DXF-faili ja teeb valitud järeltöötleja kaudu ühe programmi lehe kohta: kõigepealt augud ja väljalõiked, seejärel kontuurid. Sisse- ja väljasõite, lõikejärjestust ega ühiseid servi ei planeeri. Vt [Paiguta lamedad detailid lehtedele](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Joonised, mis teevad rohkem ise.** {{ui:Leht}} › {{ui:Automaatne}} valib väikseima A-formaadi lehe, mis mahutab vaated suurimas standardmõõtkavas kuni 1:1. {{ui:Mõõtmesta augud}} paigutab igale august keskmärgi, ühe viidatuse iga suuruse kohta ja asukohad vaate vasakust alumisest nurgast. Vt [Koosta joonis](topic:drawing-pdf).

### Igas rakenduses

- **Keeled.** Rakendused tulevad 54 keeles. Need, mis on inglise keelest erinevad, on masintõlked, kuni emakeelne lugeja need loeb.
- **Tööriistariba read.** {{ui:Sätted}} › {{ui:Üldine}} › {{ui:Tööriistariba read}} valib Mähi (nagu varem), 2 rida või 1 rida; riba, mis ei mahu, kerib küljele. PartCrafti Elementide riba näitab enim kasutatud tööriista suurelt ja peidab variandid jagatud nupu taha.
- **Ühenda oma AI.** Studio on keskus, kuhu ühendad oma tehisintellektiassistendi kõigi kaheksa rakendusega, igale rakendusele eraldi lugemis-, soovituse- või muutmisõigusega. Ühendatud assistent saab dimensioneerida detaili lause põhjal (nt konks koormuse jaoks), näidata oma käiku ja kõiki kontrolle ning detaili ehitada; ta teatab, mida ei kontrollinud (pingekontsentratsioon, väsimus, plastide roomsus). Vt [Kasuta PartCrafti tehisintellektiabilisega](topic:use-with-ai-assistants).

## Parandatud versioonis 0.8.1

- **Täisekraanirežiimi kursori külmumine.** Hõljumisvalik on nüüd kiiruse poolest piiratud. Põhjus on meie parim hinnang ega ole kinnitatud teatajaga.
- **Keel käivitusajal.** Studio ja pakendatud väljaanded saavad töötamise ajal keelt vahetada; varem olid need ainult inglise keeles. See pole veel igal platvormil testitud: anna meile teada, kui keel ei muutu.

## Selles versioonis veel mitte

- Ühenda oma AI ei ole valmis: ühe klõpsuga ühendus Studio sees, hostitud konnektor brauseri-tehisintellektile, oma API-võti Studio sees ja avaldatud MCP-pakett ei ole lubatud. Studiol endal tehisintellekti pole.
- Studio pole koodiga allkirjastatud: Windows võib hoiatada ja macOS küsib paremklõpsu ning seejärel Ava. Vt [Tõrkeotsing](topic:troubleshooting).
- Mõõtmeahelad on veel ühesuunalised: vt [Mõõtmeahelad](topic:tolerance-stackup).
- Ülejäänu on loetletud lehel [Mis pole veel valmis](topic:not-built-yet).

Varasemad muudatused on lehel [Mis on uut versioonis 0.7](topic:whats-new-0-7).
