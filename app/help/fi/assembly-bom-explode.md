---
title: Osaluettelo, räjäytysnäkymät ja liikkuvat osat
summary: Anna kokoonpanon osille numero, kuvaus ja materiaali, lue ja lataa osaluettelo, tee räjäytysnäkymiä askel kerrallaan tai automaattisesti, siirrä kiinnittämättömiä osia käsin, aseta nivelrajat ja vie koko kokoonpano STL-, 3MF- tai osaluettelomuodossa.
keywords: osaluettelo, materiaaliluettelo, osanumero, materiaali, tiheys, csv, räjäytysnäkymä, räjäytys, kokoonpanon purku, jälkiviivat, siirrä osa, vedä, ohjain, siirto, kierto, nivelrajat, kokoonpanon vienti, kokoonpanon askel, kokoonpanopiirustus, numeropallot
from: ebc9f6f3
---

Nämä työkalut ovat kokoonpanon oikeassa paneelissa (katso [Rakenna kokoonpano nivelillä](topic:build-assembly)).

## Osan ominaisuudet

Valitse osa vasemmalla olevasta luettelosta. Kohdassa **Osan ominaisuudet** aseta:

- **Osanumero** (enintään 40 merkkiä) ja **Kuvaus** (enintään 200 merkkiä).
- **Materiaali**: yleinen materiaali tiheyksineen tai **Oma tiheys…** kirjoittaaksesi tiheyden g/cm³. Paneeli näyttää sen jälkeen osan massan.

Ominaisuudet kuuluvat osaan, joten jokainen sen kopio jakaa ne. Ne tallennetaan kokoonpanotiedostoon.

## Osaluettelo

Kun mitään ei ole valittu ({{key:Esc}}), paneeli näyttää **Osaluettelon**: yhden rivin per osa, jolla on nimikenumero, määrä (kuinka monta kappaletta), osanumero, nimi, materiaali ja massa. Nimikenumerot seuraavat järjestystä, jossa osat ilmestyvät luettelossa ensimmäisen kerran. Massat lasketaan osan tilavuudesta (verkkoydin rakentaman fasetoidun kiintokappaleen tilavuudesta, joka on hieman pieni pyöreissä osissa) ja sen materiaalista. Osalla ilman materiaalia ei ole massaa, eikä silloin ole kokonaismassaa.

{{ui:Lataa CSV}} tallentaa luettelon CSV-tiedostona (sama kuin **Vie › Osaluettelo (CSV)**). Se avautuu missä tahansa taulukkolaskennassa. Teksti, joka alkaa merkillä = tai +, saa alkuunsa heittomerkin, jottei taulukkolaskenta suorita sitä kaavana.

## Räjäytysnäkymät

Räjäytysnäkymä irrottaa osat toisistaan kuvia varten. Se ei koskaan muuta niveliä eikä osien todellista sijaintia: tallennus, törmäystarkistukset ja viennit käyttävät todellisia paikkoja.

1. Kun mitään ei ole valittu, valitse **Räjäytysnäkymät**-kohdasta {{ui:Uusi näkymä}}.
2. Kohdassa **Lisää askel** rastita osat, jotka askel siirtää, valitse **Suunta** (+X … −Z, klikkaamasi pinnan normaali tai **Vedä nuolta näkymässä**) ja **Etäisyys**, ja valitse sitten {{ui:Lisää askel}}. Kun käytät **Vedä**-vaihtoehtoa, vedä nuolta ja päästä irti: askel saa vetämäsi suunnan ja etäisyyden.
3. Lisää askelia. Ne toistuvat peräkkäin.
4. Vedä liukusäädintä **Kokoonpano**- ja **Räjäytetty**-asentojen välillä animoidaksesi näkymän. Katkoviivaiset jälkiviivat kulkevat kunkin osan lepoasennosta sen nykyiseen paikkaan.

{{ui:Auto (säteittäinen)}} siirtää kaikki osat, paitsi kiinnitetyn osan, pois kokoonpanon keskeltä. {{ui:Auto (nivelet)}} siirtää jokaisen niveltetyn osan (ja kaiken sen alapuolella niveltetyn) ulos nivelensä pinnan normaalia pitkin. Voit säilyttää useita nimettyjä näkymiä; valitse yksi kohdasta **Näkymä**, tai **Kokoonpano** palauttaaksesi osat paikoilleen. Näkymät tallennetaan kokoonpanotiedostoon.

## Siirrä osa käsin

Vain osa, jolla ei ole niveltä kiinnitettyyn osaan, siirtyy käsin (kiinnitetty osa on kiinteä; nivelet sijoittavat muut). Valitse se ja kohdassa **Siirto käsin**:

- Kirjoita **ΔX, ΔY, ΔZ** ja valitse {{ui:Siirto}}, tai valitse akseli ja **Kulma** ja {{ui:Käännä}} (osan keskipisteen ympäri).
- {{ui:Vedä siirtääksesi}} näyttää nuolet osassa: vedä nuolta siirtääksesi akselia pitkin tai neliötä siirtääksesi tasossa. {{ui:Vedä kääntääksesi}} näyttää renkaat kääntämistä varten. Jokainen veto on yksi kumoamisvaihe. {{key:Esc}} piilottaa nuolet.

## Nivelrajat

Valitse nivel, joka liikkuu, ja kohdassa **Rajat** rastita **Pidä … rajojen välissä** jollekin sen arvolle ja aseta **Pienin** ja **Suurin**. Jokainen arvo pysyy omien rajojensa sisällä, sen liukusäädin kattaa vain tämän alueen, ja {{ui:Tarkista liike törmäysten varalta}} pyyhkäisee vain niiden välillä. Sylinterinivel voi rajoittaa kulmansa, siirtymänsä tai molemmat. Niveltyypin vaihtaminen poistaa rajat arvoilta, joita uudella tyypillä ei ole.

## Vie koko kokoonpano

Kokoonpanossa **Vie**-valikko kirjoittaa koko kokoonpanon, jokainen osa paikallaan:

- **STEP AP242 / AP214** ja **Piirustus (PDF)** eivät ole vielä toteutettuja tässä versiossa: ne tarvitsevat tarkan ytimen, joten ne ovat harmaina. Vie sen sijaan kunkin osan STEP (tarkka kiintokappale) itse osasta.
- **STL**: yksi verkko kaikista osista. **3MF**: jokainen osa kerran, sijoitettuna kerran kutakin kappaletta kohden.
- **Osaluettelo (CSV)**.

## Rajoitukset

- Kokoonpanopiirustusta ja kokoonpanon STEP-tiedostoa ei ole vielä toteutettu tässä versiossa (ne tarvitsevat tarkan ytimen). Räjäytysnäkymät ovat kuvia varten ruudulla.
