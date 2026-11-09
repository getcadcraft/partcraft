---
title: Mitä uutta versioissa 0.8 ja 0.8.1
summary: PartCraft 0.8 lisää reaaliaikaisen analyysin muokatessa, Mikä rikkoutuu ensin -tarkistuksen, myötö- ja kontaktitutkimukset CalculiX-syötteineen ulkoiselle ratkaisijalle, liikeanalyysit kokoonpanoille, Pinnat-työtilan vapaamuotoisille pinnoille, Insinööri-työtilan osat fysiikasta, valokuvasta luonnoksen, tulostusviennin, sijoitetut levyt G-koodiksi ja piirustukset, jotka mitoittavat reiänsä. 0.8.1 korjaa koko näytön kohdistimen jäätymisen.
keywords: mitä uutta, muutokset, julkaisutiedot, muutosloki, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, reaaliaikainen analyysi, päivitys muokatessa, riko se, mikä rikkoutuu ensin, kuormituskerroin, epälineaarinen, myötö, plastinen venymä, kosketus, CalculiX, liikeanalyysi, väljyys, pinnat, NURBS, tasoitus, runko, seepra, insinööri, generaattori, generoitu runko, luonnos valokuvasta, skaalaus tulostusta varten, jako tulostusta varten, kutistuma, sijoitetut levyt, G-koodi, piirustus, mitoita reiät, avustaja, MCP, kielet, työkalurivin rivit
from: 62e4dce2
---

Tämä kertoo, mitä muuttui PartCraft-versioissa 0.8 ja 0.8.1 verrattuna versioon 0.7. Simulointi vastaa muokatessa ja kertoo, mikä rikkoutuu ensin, kokoonpanoille tulee liikeanalyysit, ja uudet työtilat tekevät vapaamuotoisia pintoja sekä osia, joiden mitat lasketaan fysiikasta. Versio 0.8.1 on pieni korjausjulkaisu.

## Uutta

### Simulointi

- **Päivitä muokatessani.** Rastita {{ui:Päivitä muokatessani}} Solve-lohkossa, ja vastaukset seuraavat muokkauksiasi. Muuta mittaa, kuormaa tai materiaalia, niin pikavastaus, laskettu elementeillä, jotka ovat neljä kertaa suurempia, ilmestyy heti; kun pysähdyt noin sekunniksi, tutkimuksen oma tarkennettu vastaus korvaa sen. Tuloksista näkyy, kumpaa olet katsomassa. Teräksisessä ulokepalkissa pikavastaus oli taipuman osalta 1 %:n sisällä ja jännityksen osalta noin 4 %:n sisällä tarkennetusta vastauksesta. Katso [Jännityksen ja taipuman tarkistus](topic:simulation#update-while-you-edit-live).
- **Mikä rikkoutuu ensin.** Staattisessa tai nurjahdustutkimuksessa {{ui:Mikä rikkoutuu ensin?}} **Riko se** -lohkossa skaalaa kuormia, kunnes osa antaa periksi. Se luettelee pahimmasta alkaen kuormituskertoimen ensimmäiseen myötöön (punaisella merkinnällä siinä kohdassa, missä jännitys huipentuu) ja kuormituskertoimen nurjahdukseen. Kerroin alle 1 tarkoittaa, että osa antaa jo periksi kuormitettuna, ja Ongelmat näyttää virheen. Kertoimet tulevat lineaarisesta tutkimuksesta, joten ne ovat vain yhtä hyviä kuin se. Katso [Jännityksen ja taipuman tarkistus](topic:simulation#find-out-what-breaks-first-break-it).
- **Myötö ja kontakti.** Kaksi lisätutkimustyyppiä: epälineaarinen, jossa materiaali seuraa suoraa viivaansa myötöjännitykseen asti ja sitten loivempaa kulmaa, ja jossa piirretään plastinen venymä; sekä kontaktitutkimus, jossa erilliset osat painavat toisiaan (kitkatta) tai pysyvät kiinni toisissaan (sidottuina). Kuormitusaskel, joka ei asetu, tai osat, jotka uppoavat toisiinsa liian syvälle, näkyvät Ongelmat-paneelissa. Kitka, suuri liukuminen, suuret kiertymät, suuret taipumat ja väsyminen eivät ratkea. Katso [Jännityksen ja taipuman tarkistus](topic:simulation#yielding-and-contact-nonlinear-studies).
- **CalculiX-syötteet.** {{ui:Vie}} › {{ui:CalculiX-syöte (.inp)}} tallentaa tutkimuksen CalculiXille, erilliselle ohjelmalle, jonka asennat ja ajat itse. {{ui:Vie}} › {{ui:CalculiX-tulokset (.frd)}} lukee sen tulostiedoston takaisin samaan verkkoon. PartCraft ei käynnistä kyseistä ohjelmaa koskaan, ja se kertoo, jos osaa on muutettu syötteen tallentamisen jälkeen.

### Kokoonpanot

- **Liiketutkimukset.** {{ui:Kokoonpano}} › {{ui:Liike}} ohjaa yhden liitoksen arvoa annetun ajan yli (tasainen nopeus, pehmennetty, siniaalto tai meno ja paluu), asettaa kokoonpanon jokaiseen vaiheeseen liitoksineen ja suljettuine silmukoineen sekä raportoi, mitkä osat törmäävät ja kuinka lähelle ne tulevat. {{ui:Lisää piste}} piirtää pisteen sijainnin, nopeuden ja kiihtyvyyden, liitoksen arvon ja väljyyden ajan funktiona. {{ui:Tallenna CSV}} ja {{ui:Tallenna kuvaaja}} kirjoittavat ne ulos. Kun {{ui:Aja}} on valittu, ajopalkin askellus siirtää kokoonpanon mihin tahansa vaiheeseen. Tutkimuksen asetukset tallentuvat kokoonpanotiedostoon. Nopeus ja kiihtyvyys lasketaan tallennetuista sijainneista, joten käytä enemmän vaiheita, jos terävä huippu näyttää liian matalalta. Katso [Tarkista kokoonpano törmäysten ja liikkeen varalta](topic:check-assembly#a-motion-study).

### Pinnat ja osat fysiikasta

- **Pinnat-työtila.** Valitse {{ui:Pinnat}} kohdasta {{ui:Työtila}} NURBS-käyrät ja -pinnat osan rinnalle: {{ui:Käyrä}}, {{ui:Loft}}, {{ui:Pyyhkäisy}}, {{ui:Sovita}} ja {{ui:Seepra}}. Jatkuvuus (G0, G1 tai G2) mitataan tarkoilla pinnoilla, ja reuna, joka on huonompi kuin pyysit, luetellaan Ongelmat-paneelissa Sovita-korjauksella. {{ui:Tasoita}} mittaa runkolinjoista käännepisteitä ja kaarevuushyppäyksiä ja rakentaa epäsileät uudelleen toleranssiisi asti. Pinnat tallentuvat osatiedostoon, eivätkä ne muuta osan muotoelementtejä. Katso [Vapaamuotoiset pinnat (NURBS)](topic:nurbs-surfaces).
- **Insinööri-työtila.** Valitse {{ui:Insinööri}} työtilan vaihtajasta, valitse generaattori ja napsauta {{ui:Uusi}}. Skripti mitoittaa osan sen perusteella, mitä sen on tehtävä (lämmön siirto, virtaukset, paine, materiaali, tulostusprosessi), oppikirjakaavoilla ja rakentaa sen. Sen jälkeen se palauttaa käyttämänsä luvut lähteineen, valmistustarkistuksensa ja tiedostot analyysityökaluille. Samat lähtötiedot tuottavat saman osan millä tahansa tietokoneella. Generaattori säilyy osassa, eikä osan avaaminen koskaan aja skriptiä. Katso [Osat fysiikasta: generaattorit](topic:engineer-generators) ja [Kirjoita generaattori](topic:write-a-generator).

### Luonnostelu, piirustukset ja valmistus

- **Luonnos valokuvasta.** {{ui:Muotoelementit}} › {{ui:Lisää}} › {{ui:Luonnos valokuvasta…}} jäljittää kuvan tasaisesta osasta tasaisella alustalla (ääriviiva ja reiät) tai kynäpiirroksen viivoiksi, kaariksi ja ympyröiksi. Annat yhden pituuden, tarkistat esikatselun ja luot luonnoksen. Katso [Luonnostelun perusteet](topic:sketch-basics#a-sketch-from-a-photo).
- **Skaalaus ja jako tulostusta varten.** {{ui:Vie}} › {{ui:Skaalaa tulostusta varten (STL tai 3MF)…}} skaalaa akselikohtaisesti muuttamatta osaa, esimerkiksi kutistumisvaran verran. {{ui:Vie}} › {{ui:Jaa tulostusta varten (zip osista)…}} leikkaa osan, joka on liian suuri tulostusalustallesi, numeroituihin osiin. Osat liitetään tapeilla, avaimilla, hännänmuotoisilla liitoksilla, tappireikillä tai magneettitaskuilla. Katso [Tulosta 3D:nä](topic:print-3d).
- **Sijoitetut levyt G-koodiksi.** {{ui:Vie}} › {{ui:Asetellut levyt G-koodiksi}} lukee sijoitetun DXF:n ja tekee yhden ohjelman levyä kohden valitsemasi postprosessorin kautta: ensin reiät ja aukot, sitten ääriviivat. Se ei suunnittele lähestymisviivoja, leikkausjärjestystä eikä yhteisiä reunoja. Katso [Sijoita tasaiset osat levyille](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Piirustukset tekevät enemmän itse.** {{ui:Arkki}} › {{ui:Automaattinen}} valitsee pienimmän A-kokoisen arkin, joka pitää näkymät suurimmassa vakiomittakaavassa, enintään 1:1. {{ui:Mitoita reiät}} lisää keskimerkin jokaiseen reikään, yhden selitteen kokoa kohden ja sijainnit näkymän vasemmasta alakulmasta. Katso [Tee piirustus](topic:drawing-pdf).

### Kaikissa sovelluksissa

- **Kielet.** Sovellukset ovat saatavilla 54 kielellä. Englannin lisäksi muut ovat koneellisia luonnoksia, kunnes äidinkielinen puhuja lukee ne.
- **Työkalurivin rivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} valitsee Rivitys (kuten ennen), 2 riviä tai 1 rivi. Palkki, joka ei mahdu, vierittyy sivusuunnassa. PartCraftin {{ui:Muotoelementit}}-valintanauha näyttää useimmin käytetyn työkalun suurena ja piilottaa muunnelmat jaetun painikkeen taakse.
- **Yhdistä tekoälysi.** Studio on keskus, jolla yhdistät oman avustajasi kaikkiin kahdeksaan sovellukseen, ja jokaiselle sovellukselle voi antaa vain lukuoikeuden, ehdotusoikeuden tai muokkausoikeuden. Yhdistetty avustaja voi mitoittaa osan lauseesta, kuten kannake kuormalle, näyttää työnsä ja kaikki tarkistukset ja rakentaa sen. Se kertoo, mitä ei tarkistanut (jännityskeskittymä, väsyminen, muovien krypyminen). Katso [PartCraftin käyttö tekoälyavustajan kanssa](topic:use-with-ai-assistants).

## Korjattu versiossa 0.8.1

- **Koko näytön kohdistimen jäätyminen.** Kohdistimen valintaa rajoitetaan nyt. Syy on paras tulkintamme, eikä sitä ole vahvistettu ilmoittajan kanssa.
- **Kieli ajon aikana.** Studio ja pakatut versiot voivat vaihtaa kieltä ajon aikana; aiemmin ne olivat vain englanniksi. Tätä ei ole vielä testattu jokaisella alustalla. Kerro meille, jos kieli ei vaihdu.

## Ei vielä tässä versiossa

- Tekoälyn yhdistäminen ei ole valmis. Yhden napsautuksen yhdistäminen Studion sisältä, selaintekoälyn hostattu liitin, oma API-avain Studiossa ja julkaistu MCP-paketti eivät ole lupauksia. Studiolla ei ole omaa tekoälyä.
- Studio ei ole koodiallekirjoitettu: Windows saattaa varoittaa, ja macOS pyytää napsauttamaan oikealla painikkeella ja valitsemaan Avaa. Katso [Vianetsintä](topic:troubleshooting).
- Toleranssipinot kulkevat yhä vain yhteen suuntaan: katso [Toleranssipinot](topic:tolerance-stackup).
- Loput on listattu kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet).

Aiemmat muutokset ovat kohdassa [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
