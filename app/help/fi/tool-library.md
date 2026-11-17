---
title: Työkalukirjasto
summary: Tallenna käyttämäsi työkalut selaimeen, jotta jokaisella osalla voi olla ne, ja siirrä työkalukirjastoja tietokoneiden välillä JSON-tiedostona.
keywords: työkalukirjasto, työkalut, vienti, tuonti, JSON, tallenna työkalut, T-numero, päätyjyrsin, työpajan työkalut
from: 8b9f2483
---

Valmistuksen **Työkalut**-välilehti luettelee osan työkalut. **Työkalukirjaston** alla voit säilyttää omat työkalusi yli yhden osan:

- {{ui:Tallenna tämä työkalu}} lisää valitun työkalun kohtaan **Tallennetut työkaluni**; {{ui:Tallenna kaikki tämän osan työkalut}} lisää kaikki. Tallennetut työkaluni säilyvät tässä selaimessa, ja ne ovat jokaisen osan käytössä. Työkalua, jonka olet jo tallentanut (sama laji, koko, terät ja ohitukset), ei tallenneta kahdesti.
- {{ui:Lisää tähän osaan}} ottaa valitun tallennetun työkalun osaan. Jos sen T-numero on jo toisen työkalun käytössä osassa, se saa seuraavan vapaan numeron, ja paneeli kertoo siitä. {{ui:Poista kirjastostani}} poistaa sen tallennetusta luettelosta (ei osista, joissa se jo on).
- {{ui:Vie työkalut…}} kirjoittaa osan työkalut `.json`-tiedostoksi; {{ui:Tuo työkalut…}} lisää tällaisen tiedoston työkalut osaan samoin säännöin (jo siellä oleva työkalu ohitetaan, varattu T-numero siirtyy). Tiedosto sisältää koot, terät, materiaalit sekä syöttö- ja nopeusohitukset, jotka kirjoitit; sillä ei ole tunnuksia. Käytä sitä, kun haluat siirtää työpajan työkalut toiselle tietokoneelle tai antaa ne kollegalle.

Jos selain ei voi säilyttää kirjastoa (tallennus on pois päältä tai täynnä), tallennus kertoo siitä ja tiedoston säilyttämiseen käytetään **Vie työkalut** -toimintoa. Tiedoston on oltava PartCraftin työkalukirjasto tältä tai vanhemmalta versiolta, enintään 500 työkalua kelvollisilla kooilla; muu hylätään syyn kanssa.

Työkalun mukana tulevat leikkausnopeudet ja syöttö per terä ovat lähtöarvoja; katso [Tee työstöradat ja G-koodi](topic:manufacture).
