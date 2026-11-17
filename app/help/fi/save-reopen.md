---
title: Tallenna, avaa uudelleen ja jatka työskentelyä
summary: Tallenna osat ja kokoonpanot tietokoneeseen, nimeä ne, avaa uudelleen painikkeella, näppäimellä tai vetämällä, säilytä versioita ja vältä työn menettäminen selainvälilehdessä.
keywords: tallenna, avaa, avaa uudelleen, lataa, lataus, versiot, varmuuskopio, nimeä uudelleen, tiedostonimi, menetetty työ, poistu sivulta, partcraft.json, partcraft-asm.json, uusi osa
from: c18a5abc
---

PartCraft ei säilytä mitään käyntien välillä. Osasi on selainvälilehdessä, kunnes tallennat sen tiedostoksi, ja se palaa, kun avaat tiedoston.

## Tallenna osa

1. Nimeä osa: napsauta tyhjää kohtaa näkymässä, jotta mitään ei ole valittuna. Kirjoita **Nimi** oikeaan paneeliin ja paina {{key:Enter}}. Historian otsikko muuttuu vastaamaan nimeä.
2. Paina {{key:Mod+S}} tai valitse {{ui:Tallenna}}.
3. Selain lataa tiedoston `<nimi>.partcraft.json`. Tilarivillä lukee: ”Tallennettu: Bracket.partcraft.json (koko historia; avaa se tässä uudelleen muokkauksen jatkamiseksi).”

Jos luonnos on auki, tallennus sulkee sen ensin.

Tiedosto sisältää kaikki luonnokset, rajoitteet, mitoitukset ja muotoelementit, myös pois käytöstä poistetut muotoelementit, palautuspalkin aseman, piirustusarkin asetukset ja GD&T-merkinnät sekä tuodun STEP-kiintokappaleen koko tekstin. Kumoushistoriaa ei tallenneta.

## Tallenna kokoonpano

Kokoonpanossa sama {{ui:Tallenna}} tai {{key:Mod+S}} lataa tiedoston `<kokoonpanon nimi>.partcraft-asm.json`. Jokainen osa tallennetaan sen sisään, joten erillisiä osatiedostoja ei tarvita kokoonpanon avaamiseen.

Kun muokkaat osaa kokoonpanon sisältä, {{key:Mod+S}} tallentaa vain sen osan itsenäisenä tiedostona `.partcraft.json`. Valitse ensin {{ui:Takaisin}} ja tallenna sitten, jotta koko kokoonpano tallentuu.

## Avaa uudelleen

Jokin seuraavista:

- valitse {{ui:Avaa}} tai paina {{key:Mod+O}} ja valitse tiedosto;
- vedä tiedosto kohteesta {{pick:mac=Finder|windows=Resurssienhallinta|linux=tiedostonhallinta}} 3D-näkymään (näkyviin tulee ”Pudota PartCraft-osa avataksesi sen”).

PartCraft erottaa osat kokoonpanoista niiden sisällön perusteella, joten molemmat avautuvat samalla tavalla. `.step`- tai `.stp`-tiedosto avautuu tuotuna kiintokappaleena: katso [Avaa STEP-tiedosto ja rakenna sen päälle](topic:import-step). Tilarivi vahvistaa: ”Avattu: Bracket.partcraft.json: 7 muotoelementtiä.” tai ”Avattu: Hinge.partcraft-asm.json: 3 osaa, 2 liitosta.”

Jos näkymässä oleva osa sisältää tallentamattomia muutoksia, PartCraft kysyy ensin: {{ui:Peruuta}}, {{ui:Hylkää muutokset}} tai {{ui:Tallenna ensin}}.

:::warning
Sulje kokoonpano ({{ui:Sulje}}) ennen osatiedoston avaamista. Jos avaat osan, kun kokoonpano on näkyvissä, osa latautuu kokoonpanon taakse, ja näet sen vasta kun suljet kokoonpanon. Kokoonpanotiedoston avaaminen korvaa myös tallentamattoman kokoonpanon kysymättä, joten tallenna se ensin.
:::

## Aloita alusta

{{ui:Uusi}} aloittaa tyhjän osan ”Part1”. Se kysyy ensin, jos on tallentamattomia muutoksia, ja sulkee avoinna olevan kokoonpanon (kysyen, jos se on tallentamaton).

## Säilytä versiot

Jokainen tallennus on uusi lataus, joten voit säilyttää versioita pitämällä tiedostot:

- Lisää versio tai päivämäärä nimeen ennen tallennusta: ”Bracket rev B”.
- Selain voi lisätä ” (1)” tai ” (2)”, kun samanniminen tiedosto on jo latauskansiossa. Uusin on se, jolla on suurin numero, tai tarkista päivämäärä kohteesta {{pick:mac=Finder|windows=Resurssienhallinta|linux=tiedostonhallinta}}.
- Siirrä valmiit tiedostot latauskansiosta projektikansioosi.

Katso [Missä tiedostosi ovat](common:your-files), missä lataukset ovat kussakin järjestelmässä.

## Älä menetä työtä

- Tallenna ennen välilehden sulkemista, sivun lataamista uudelleen tai pitkää lepotilaa. Selain kysyy ”Poistu sivulta?”, jos yrität sulkea välilehden tallentamattomin muutoksin. Kaatuminen tai suljettu kannettava tietokone ei kuitenkaan anna mitään varoitusta.
- Yksityiset ja incognito-ikkunat toimivat, mutta muuten ei ole eroa: tiedosto on yhä ainoa kopio.
- Pilvitallennus ja versiohistoria eivät ole vielä käytettävissä.
