---
title: Suorita USB-muistilta
summary: Mitä suunnittelutyökalut kirjoittavat ja minne, jotta CadCraft Studio voi toimia USB-muistilta tai mistä tahansa kansiosta ilman asennusohjelmaa ja ilman järjestelmänvalvojan oikeuksia: asetukset, generaattorit, välimuistit ja osatiedostot sekä se, mikä jää muistille.
keywords: usb, siirrettävä, ei asennusohjelmaa, järjestelmänvalvoja, ylläpitäjä, asetukset, data-kansio, generaattorit, tiedostojen sijainti, offline, yksityisyys, pääsy isäntäkoneeseen
from: 263efc79
---

Suunnittelutyökalut (generaattorit, suunnittelukirjasto, tarkistukset ja datatiedostot) eivät vaadi **järjestelmänvalvojan oikeuksia** eivätkä **asennusohjelmaa**. Ne kirjoittavat vain tähän luetellut tiedot eivätkä mitään muuta.

| Mitä | Missä se säilytetään |
|---|---|
| Osasi generoituine kappaleineen, tietolehtineen ja tarkistuksineen | Tallentamasi osatiedosto (`.partcraft.json`), siihen paikkaan, johon tallennat sen. |
| Tiedostoista avaamasi generaattorit | Sovelluksen omassa tallennustilassa: selaimen paikallisessa tallennustilassa verkkosivulla ja siirrettävässä Studiossa ohjelman vieressä olevassa `data`-kansiossa. Enintään 20. |
| Asetukset (asettamasi vokselikoot, ratkaisijan säikeet, asettelu) | Sama sovelluksen tallennustila. |
| Tietolehdet, kentät ja verkot | Vain jos tallennat ne: lataus menee sinne, minne valitset. |

Työkalut eivät tee **omia verkkoyhteyksiä**. Mukana tulevat generaattorit ovat sovelluksen omassa kansiossa olevia tiedostoja. Kirjastot ja tarkistukset toimivat tietokoneellasi taustasäikeessä, jolla ei ole pääsyä verkkoon. Suunnittelutiedot (veden ja ilman ominaisuudet sekä materiaalit) ovat sovelluksen sisällä. Tiedostosta avattua generaattoria luetaan tietokoneellasi, eikä se mene minnekään.

## Siirrettävä Windows-zip ja Linux

Siirrettävä Studio Windowsille tallentaa asetuksensa, välimuistinsa ja lisäosansa ohjelman viereen luotuun `data`-kansioon. Linux AppImage tallentaa ne itsensä viereen, kun sen vieressä on tiedosto nimeltä `portable`. Ilman sitä se käyttää kotikansiotasi. Siirrettävää Mac-versiota ei ole: järjestelmä estää ladatun sovelluksen kirjoittamisen itsensä viereen. Ohjelman omat siirrettävyysohjeet (`Studio`-ohje) luettelevat, mitä ohjelma kirjoittaa.

## Pääsy isäntäkoneeseen

Mikään täällä ei pyydä pääsyä isäntäkoneeseen. Tulostimet, sarjaporttilaitteet ja USB-laitteet ovat erillään: ne kysyvät, kun työ tarvitsee niitä, kerran kutakin laitetta kohti. Generaattorit tai tarkistukset eivät koske niihin lainkaan.
