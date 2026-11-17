---
title: Detailid füüsikast: generaatorid
summary: Inseneri tööruum ja funktsioon Genereeritud keha: vali generaator, sea sisendid (vool, rõhk, temperatuurid, materjal, printer) ja saa detail, mis on mõõdistatud õpikuvalemite järgi, koos andmelehe, tootmiskontrollide ja analüüsitööriistade failidega. Samad sisendid annavad alati sama detaili.
keywords: insener, generaator, genereeritud keha, füüsika, reeglid, soojusvaheti, kollektor, otsik, võrestik, güroid, andmeleht, sisendid, determineeritud, samad sisendid samad detailid, tootmiskontroll, 3D-printimine, pulbervoodi
from: 5a387dc0
---

**Generaator** on skript, mis mõõdistab detaili sinu nõuete järgi ja ehitab selle. Soojusvaheti generaator võtab soojuse, mida liigutada, kaks voolu ja nende temperatuurid, rõhu ja materjali; ta arvutab, kui suur peab olema tuum ja kui paks seinad, ehitab selle ja ütleb sulle numbrid, mida kasutas, ning kust iga üks tuli. Muuda sisendit ja detail järgib.

Tulemus on tavaline keha detailis: see on elementide nimekirjas, seda saab printida ja eksportida. Generaator ise salvestatakse ka detaili, nii et fail avaneb igas arvutis ilma generaatorit paigaldamata, ja **detaili avamine ei käivita kunagi skripti**.

## Tee keha

1. Vali lülitist tööruum {{ui:Insener}}.
2. Vali nimekirjast generaator (need, mis tulevad PartCraftiga kaasa, ja seejärel need, mille avasid failist) ja klõpsa {{ui:Uus}}.
3. Skript käivitub. Kui see lõpeb, on keha vaates ja paneel näitab selle sisendeid, **andmelehte** ja **kontrolle**.

Sa saad lisada keha ka Designist: {{ui:Elemendid}} › {{ui:Veel}} › {{ui:Genereeritud keha}}.

## Muuda seda

Muuda mis tahes sisendit ja keha tehakse uuesti hetk pärast seda, kui lõpetad kirjutamise. Paneel ütleb, mis neist kolmest on tõene:

- **Ajakohane**: keha vastab skriptile ja selle sisenditele.
- **Sisendid muutusid**: detailis olev keha on varasematest sisenditest; seda tehakse uuesti või vajuta {{ui:Käivita}}.
- **Pole veel käivitatud** või **Viimane käivitus ebaõnnestus**: skripti viga näidatakse koos reaga.

{{ui:Peata}} lõpetab käivituse, mis võtab liiga kaua. {{ui:Võta tagasi}} läheb tagasi ühe sammu kaupa: käivitus on üks samm, sisend on üks samm.

## Andmeleht

Iga number, mille generaator arvutas, on loetletud koos **ühikuga** ja **allikaga** (õpikuvalem, standard, andmeleht). Midagi pole peidetud konstant. Leht on osa failist, nii et see on järgmises arvutis samasugune. [Andmete väljastamine](topic:data-out) ütleb, kuidas salvestada see JSON-ina või PDF-ina.

## Kontrollid

Generaator saab kontrollida oma detaili trükiprotsessi järgi: seinad ja vahed, mis on õhemad, kui protsess talub, lahtised tükid, õõnsused, mis püüavad pulbrit või vaiku, augud, mis on liiga kitsad, et neid puhastada, ja üleulatused, mis vajavad toetust. Leiud on paneelis ja nimekirjas {{ui:Probleemid}} (⚠ nupp) ning need salvestatakse detailiga.

Protsessi arvud on ümmargused numbrid, mida avalikud disainijuhendid annavad protsessile üldiselt (FDM, SLA, SLS, metallpulbervoodi). Need **ei ole sinu masina spetsifikatsioon**: asenda need oma töökoja arvudega enne, kui kontrollile tugined. Kontroll töötab vokselite ruudustikul, nii et see on täpne umbes ühe vokseli ulatuses: sein märgitakse ainult siis, kui see on õhem kui piir rohkem kui ühe vokseli võrra.

## Mis on kaasas

| Generaator | Mida see teeb |
|---|---|
| Güroidplokk | Plokk, mis on täidetud güroidi, Schwarz P või teemanti lehega: lihtsaim võrestik |
| Güroidsoojusvaheti | Kahe vedeliku vahetaja tuum, mõõdistatud koormusest efektiivsus-NTU meetodiga, sein rõhust; saab kontrollida rõhukao voolu uuringuga ühel lahtril |
| Jaotuskollektor | Päis ja harud, iga toru mõõdistatud sellest voolust, mida ta kannab |
| Gradueeritud võrestiktala | Võrestik, mille sein paksub seal, kus topoloogia optimeerimine ütleb, et materjali on vaja |

Kõik need on esmased hinnangud õpikuvalemite põhjal. [Inseneriteek](topic:engineering-library) loetleb valemid ja nende piirid. Käivita Simulation, Thermal või Flow tulemusel enne, kui sellele tugineda.

## Ekspordikontroll

Inseneri generaatorite ja andmelehtede juures on teade ekspordikontrollide ja sanktsioonide kohta. Loe seda jaotisest [Insener ja ekspordikontroll](topic:engineer-export-notice); see on ka iga andmelehe all.

## Veel ehitamata

- Päised, pordid ja liitmikud soojusvaheti tuumal: see on ainult tuum.
- Temperatuurikõverad materjali tugevusele: materjalid on toatemperatuuril.
- Harukaod ja voolu jagamine kollektori väljundite vahel.
- Generaatorite lisamine lisandmoodulite kataloogist ühe klõpsuga; faili avamine lisab ühe selle brauserisse.
- Generaatorid teistele rakendustele.
