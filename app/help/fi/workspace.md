---
title: PartCraftin näyttö
summary: Kierros jokaiseen palkkiin ja paneeliin: työkalurivi ja sen muuttuminen, historia, osan tiedot, 3D-näkymä, ominaisuuspaneeli ja tilarivi.
keywords: näyttö, asettelu, työkalurivi, historia, muotoelementtipuu, ominaisuudet, paneeli, tilarivi, käyttöliittymä, ui, kierros, koko näyttö
from: 7394fc49
---

Näytöllä on viisi osaa: työkalurivi ylhäällä, historia vasemmalla, 3D-näkymä keskellä, ominaisuuspaneeli oikealla ja tilarivi alhaalla. Kaiken yläpuolella on CadCraft-sovelluspalkki.

## Sovelluspalkki

Aivan ylhäällä oleva ohut palkki kuuluu CadCraft-sivustolle, ei itse PartCraftille. Se näyttää sovelluksen nimen ja sen, missä se toimii, versiovalikon, **Tietoja: PartCraft**, näyttötilapainikkeen ja Paperi / Malli -teemakytkimen.

- **Paperi** on tummat viivat vaalealla arkilla. **Malli** on vaaleat viivat tummalla taustalla. Luonnoksen värit seuraavat teemaa.
- {{ui:Asetukset}}-kohdassa (rataskuvake tai {{key:Mod+,}}) on {{ui:PartCraft}}-välilehti: mikä hiiren painike kääntää näkymää, hiiren rulla tai ohjauslevy ja relaatiot luonnostellessa. Katso [PartCraftin asetukset](topic:settings).
- Näyttötilapainike tai {{key:Ctrl+Shift+F}} käy läpi normaalin, koko näytön ja koko näytön palkit piilotettuina. Kun palkit ovat piilossa, vie osoitin yläreunaan (tai napauta siellä) tuodaksesi ne takaisin. {{key:Esc}} palauttaa normaalitilan. Tämä näppäin on {{key:Ctrl+Shift+F}} myös Macilla, ei ⌘.

## Työkalurivi

Työkalurivi on ryhmitelty. Se muuttuu sen mukaan, mitä teet, jotta se mahtuu yhdelle riville:

| Ryhmä | Painikkeet | Näkyy |
|---|---|---|
| Tiedosto | {{ui:Uusi}}, {{ui:Avaa}}, {{ui:Tallenna}}, {{ui:Vie}} (valikko) | Aina |
| Luonnos | {{ui:Luonnos}} | Kun luonnosta ei ole auki |
| Luonnos | {{ui:Poistu}}, {{ui:Viiva}}, {{ui:Suorakulmio}}, {{ui:Ympyrä}}, {{ui:Kaari}}, {{ui:Piste}}, {{ui:Keskiviiva}}, {{ui:Pyöristys}}, {{ui:Mitoitus}}, {{ui:Apugeometria}} | Vain kun luonnos on auki |
| Muotoelementit | {{ui:Pursota}}, {{ui:Leikkaus}}, {{ui:Kierto}}, {{ui:Reikä}}, {{ui:Lineaarinen}}, {{ui:Pyöreä}}, {{ui:Peilaus}}, {{ui:Pyöristys}}, {{ui:Viiste}}, {{ui:Kuori}}, {{ui:Lisää}} (valikko: Kierretty leikkaus, Taso, Akseli, Piste, Pyyhkäisy, Loft, Vetokulma) | Osassa, ei kun luonnos tai piirustus on auki. Pyöristys ja Viiste toimivat suorilla särmillä kahden tasaisen pinnan välillä; Kuori ja Vetokulma tasaisilla pinnoilla. Pyyhkäisy ja Loft eivät ole vielä toteutettuja tässä versiossa (ne tarvitsevat tarkan ytimen); niiden napsautus kertoo sen |
| Muotoelementit | {{ui:Valmis}} | Vain kun valitset särmiä tai pintoja pyöristystä, viistettä, kuorta tai vetokulmaa varten |
| Piirustus | {{ui:Piirustus}} | Osassa (käytettävissä, kun osassa on kiintokappale) |
| Piirustus | {{ui:Datum}}, {{ui:Kehys}}, {{ui:Pinnoite}}, {{ui:Yksityiskohta}}, {{ui:PDF}}, {{ui:Takaisin}} | Vain piirustusarkilla |
| Kokoonpano | {{ui:Kokoonpano}} | Osassa (käytettävissä, kun osassa on kiintokappale) |
| Kokoonpano | {{ui:Lisää kopio}}, {{ui:Lisää}}, {{ui:Nivel}}, {{ui:Törmäys}}, {{ui:Muokkaa osaa}}, {{ui:Sulje}} | Vain kokoonpanossa |
| Kokoonpano | {{ui:Takaisin}} | Kun muokkaat osaa kokoonpanosta |
| Muokkaus | {{ui:Kumoa}}, {{ui:Tee uudelleen}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Lisää}} (valikko: Leikkaa, Kopioi, Liitä, Liitä samaan paikkaan, Monista, Poista, Valitse kaikki, Poista valinta) | Aina; jokainen kohta toimii luonnoksessa, historiassa tai kokoonpanossa, jossa olet |
| Näkymä | {{ui:Sovita}}, {{ui:Normaali}}, {{ui:Näkymät}} (valikko: Mittaa, Massaominaisuudet, Poikkileikkaus, Vetokulma, Seeprajuovat, Kaarevuus, {{ui:Perustasot}}, sitten Isometrinen, Etu, Taka, Ylä, Ala, Oikea, Vasen) | Aina |

Vie osoitin painikkeen päälle nähdäksesi, mitä se tekee, ja sen näppäimen. Himmennettyä painiketta ei voi käyttää juuri nyt: esimerkiksi muotoelementtipainikkeita, kun luonnos on auki, tai {{ui:Nivel}}-painiketta ennen kuin kokoonpanossa on kaksi osaa.

Muokkausryhmän {{ui:Lisää}}-valikko luettelee jokaisen muokkaustoiminnon näppäimineen. Se, mihin kopiointi ja liittäminen kohdistuvat, riippuu siitä, missä olet; katso [Kopiointi, liittäminen ja monistus](topic:copy-paste). Himmennetyn kohdan työkaluvihje kertoo, miksi se ei voi toimia nyt.

{{ui:Vie}}-valikossa ovat {{ui:STL 3D-tulostukseen}}, {{ui:3MF 3D-tulostukseen}}, {{ui:STEP AP242 (tarkka kiintokappale)}}, {{ui:STEP AP214 (tarkka kiintokappale)}}, {{ui:STEP (tahkoitettu, verkkoydin)}}, {{ui:STEP AP214 (tahkoitettu, verkkoydin)}}, {{ui:DXF luonnoksesta tai tasaisesta pinnasta}} ja {{ui:Piirustus (PDF): näkymät, leikkaus, yksityiskohta, GD&T}}. Kaksi tarkkaa STEP-kohtaa on himmennetty: ne eivät ole vielä toteutettuja tässä versiossa, joten käytä {{ui:STEP (tahkoitettu, verkkoydin)}}.

## Historia (vasemmalla)

Vasemmalla oleva paneeli on osan muotoelementtihistoria, luettelo, jonka PartCraft rakentaa uudelleen ylhäältä alas.

- Otsikko on osan nimi (”Part1”, kunnes nimeät sen uudelleen).
- **Etutaso**, **Ylätaso** ja **Oikea taso** tulevat ensin. Napsauta yhtä valitaksesi sen; se korostuu näkymässä.
- Niiden alla ovat muotoelementtisi tekojärjestyksessä. Luonnos, jota muotoelementti käyttää, on sisennetty kyseisen muotoelementin alle.
- Rivin oikeassa reunassa oleva lippu kertoo sen tilan:

| Lippu | Merkitys |
|---|---|
| (ei mitään) | Rakennettu, ja luonnos on täysin määritelty |
| − | Luonnos, joka on alimääritelty (se voi vielä liikkua) |
| + | Luonnos, joka on ylimääritelty |
| ⚠ | Rakennettu, varoituksen kanssa (vie osoitin päälle lukeaksesi sen) |
| ⚠ virhe | Muotoelementti epäonnistui. Vie osoitin päälle lukeaksesi syyn tai napsauta sitä |
| ⚠ ei rakennettu | Muotoelementti tarvitsee toisen, joka epäonnistui tai on pois päältä |
| pois | Poistettu käytöstä |

- Jokainen muotoelementti näyttää päälukunsa nimensä jälkeen, kuten ”25 mm” Pursotukselle tai ”Ø6.6 thru” reiälle. Kaksoisnapsauta lukua tai paina rivillä {{key:F2}} muuttaaksesi sitä siinä. Katso [Kokojen muuttaminen](topic:change-sizes).
- Napsauta muotoelementtiä muokataksesi sitä oikealla. Kaksoisnapsauta luonnosta avataksesi sen.
- Kun kelaat taaksepäin, luettelossa on **Kelauspalkki · kelaa eteenpäin** -rivi. Sen alapuolella olevat muotoelementit on himmennetty eikä niitä ole rakennettu.
- Kun rivi on kohdistettuna, {{key:Up}} ja {{key:Down}} siirtyvät rivien välillä, ja {{key:Alt+Up}} / {{key:Alt+Down}} siirtävät itse muotoelementtiä, jos historia sallii.

Kokoonpanossa sama paneeli luettelee sen sijaan **Osat** (ensimmäinen on merkitty ”kiinnitetty”) ja **Nivelet**.

### Osan tiedot

Historian alla oleva **Osa**-ruutu luettelee kiintokappaleen **Tilavuuden**, **Pinta-alan**, **Koon (X × Y × Z)**, **Läpireiät**, **Kappaleet**, **Kolmiot**, **Muotoelementtien** määrän ja sen, kuinka moni on **Epäonnistuvat**. Tilavuudet ja pinta-alat ovat verkkoytimen rakentaman tahkoitetun kiintokappaleen, pyöreillä muodoilla hieman todellista arvoa alhaisemmat (katso [Muotoelementit ja niiden asetukset](topic:features#curves-resolution)).

Kokoonpanossa ruudun otsikko on **Kokoonpano**: Osat, Esiintymät, Nivelet, Liittämättä ja Interferenssi.

## 3D-näkymä (keskellä)

Näkymä näyttää kiintokappaleen, perustasot ja kaikki luonnokset, joita muotoelementti ei ole vielä käyttänyt.

Perustasot piirretään kokonaan, kun osa on tyhjä. Kun siinä on kiintokappale, ne väistyvät: ne piirretään himmeinä, jotta ne eivät peitä osaa, ja napsautukset menevät niiden läpi osaan. Ne palaavat kokonaisina, kun valitset, mihin luonnostelet ({{ui:Luonnos}} kun mitään ei ole valittuna) ja kun valitset yhden historiassa. {{ui:Näkymät}} › {{ui:Perustasot}} piilottaa ne kokonaan; ne näkyvät silti, kun valitset, mihin luonnostelet. PartCraft muistaa valintasi.

- Vedä kääntääksesi osaa, oikealla tai keskimmäisellä painikkeella vetäminen panoroi, rullan pyöritys zoomaa osoittimen kohdalla. Lisää kohdassa [Näppäimet ja hiiri](topic:keyboard).
- Vie osoitin pinnan, särmän tai tason päälle nähdäksesi sen syttyvän. Napsauta valitaksesi sen. Pinnat korostuvat kokonaan ja särmät piirretään ja valitaan kokonaan. {{key:Shift}}+napsautus kerää useita särmiä tai pintoja. Ne pysyvät merkittyinä.
- Oikeassa yläkulmassa oleva näkymäkuutio kääntyy osan mukana: napsauta pintaa, särmää tai kulmaa katsoaksesi sieltä, vedä kääntääksesi, talopainike palaa alkuun. Katso [Näkymäkuutio](topic:view-cube).
- Valittu Pursotus näyttää oranssin nuolen päätypinnallaan, Kierto kaarevan nuolen kiertonsa päässä: vedä sitä muuttaaksesi syvyyttä tai kulmaa tai kirjoita viereiseen ruutuun. Katso [Kokojen muuttaminen](topic:change-sizes#drag-it-in-the-view).
- Kun osa on tyhjä, ruutu otsikolla **Aloita osa** luettelee ensimmäiset askeleet.
- Pudota `.partcraft.json`- tai `.partcraft-asm.json`-tiedosto mihin tahansa näkymässä avataksesi sen. Sinne pudotettu `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- tai `.3dm`-tiedosto avautuu kiintokappaleena.

### Särmiä tai pintoja valitessasi

Kun olet valinnut {{ui:Pyöristys}}, {{ui:Viiste}} tai {{ui:Kuori}} eikä mitään ole valittuna (tai {{ui:Valitse särmät}} tällaisella muotoelementillä), osa näkyy sellaisena kuin se oli ennen kyseistä muotoelementtiä. Napsauta särmiä tai pintoja lisätäksesi tai pudottaaksesi niitä; merkinnät näyttävät, mitkä ovat mukana. {{ui:Valmis}} tai {{key:Esc}} päättää. Katso [Pyöristys, viiste ja ontoksi tekeminen](topic:fillet-chamfer-shell).

### Piirustusarkilla

{{ui:Piirustus}} korvaa 3D-näkymän A3-piirustusarkilla. Rulla zoomaa, oikealla tai keskimmäisellä painikkeella vetäminen panoroi, {{key:F}} sovittaa. Katso [Piirustuksen tekeminen](topic:drawing-pdf).

### Kun luonnos on auki

Näkymä kääntyy katsomaan luonnostasoa suoraan ja 2D-luonnoskerros ilmestyy päälle. Osa näyttää vain ennen tätä luonnosta tehdyt muotoelementit. Vasemmassa yläkulmassa oleva kaista näyttää luonnoksen tilamerkin (”Täysin määritelty”, ”Alimääritelty · 3 vapausastetta” ja niin edelleen) ja sen nimen, kuten ”Sketch2 on a face of Extrude1”.

## Ominaisuuspaneeli (oikealla)

Oikealla oleva paneeli näyttää valitun, ja sen otsikko nimeää sen:

- **Osa** (mitään ei valittu): osan **Nimi** ja **Käyrät**-asetus.
- Taso: {{ui:Luonnostele sille}} -painike.
- **Pinta**: minkä lajin se on (Tasainen pinta, Lieriö säteineen ja akseleineen, Kartio, Pallo tai Torus), sen pinta-ala, mikä muotoelementti sen teki, ja tasaiselle pinnalle {{ui:Luonnostele tälle pinnalle}}, {{ui:Normaali}}, {{ui:Vie pinta DXF:nä}}, {{ui:Pursota siitä}}, {{ui:Leikkaa siihen}} ja {{ui:Reikä tähän}} (katso [Kokonaisen pinnan veto tai työntö](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Särmä**: sen laji (suora, ympyrä keskipisteineen ja säteineen tai käyrä), sen pituus ja kaksi pintaa, joiden välissä se on (kuten ”Extrude1 end face and Extrude1 side”), sekä {{ui:Pyöristys}}- ja {{ui:Viiste}}-painikkeet.
- Useita {{key:Shift}}-näppäimellä valittuja särmiä tai pintoja: kuinka monta, särmille {{ui:Pyöristys}} ja {{ui:Viiste}}, sekä {{ui:Tyhjennä}}.
- Muotoelementti: sen luvut ja asetukset, sen luonnoksen mitat, sitten {{ui:Poista käytöstä}}, {{ui:Kelaa taaksepäin tähän}}, {{ui:Siirrä ylös}}, {{ui:Siirrä alas}}, {{ui:Poista}} ja sen **Nimi**.
- Avoin luonnos: sen tila, valintaan lisättävät relaatiot, relaatioiden ja mittojen luettelo, **Lisää koordinaateilla** sekä {{ui:Poistu luonnoksesta}}, {{ui:Sovita}} ja {{ui:Vie DXF:nä}}.
- Piirustusarkilla: leikkaus- ja yksityiskohta-asetukset tai valittu GD&T-symboli.
- Kokoonpanossa: kokoonpano, valittu osa tai valittu nivel.

Jokainen lukuruutu tulee voimaan, kun painat {{key:Enter}} tai {{key:Tab}} tai napsautat muualle. Osa rakentuu uudelleen heti; OK-painiketta ei ole. Käytä {{key:Mod+Z}} palataksesi.

## Tilarivi (alhaalla)

- Vasemmalla osoittimen koordinaatit luonnoksessa (vain kun luonnos on auki).
- Keskellä viestit: mitä tehdä seuraavaksi ja miksi jokin hylättiin. Lue se, kun mikään ei näytä tapahtuvan.
- Oikean reunan lähellä ydinmerkki: tässä versiossa aina ”Verkkoydin”. Vie osoitin sen päälle nähdäksesi, mitä se tarkoittaa. Katso [Verkkoydin](topic:solid-kernels).
- Oikealla merkki: ”Rakennetaan uudelleen…”, kun osa rakentuu uudelleen, sitten ”Rakennettu uudelleen … ms:ssa”, kun kaikki on hyvin, tai ”1 muotoelementti epäonnistuu”. Kokoonpanossa siinä lukee ”Sijoitettu … ms:ssa” tai se laskee nivelongelmat.

Katso myös [Ohjeen aloitus Havainnollista-työtilassa](topic:illustrate): työtila, joka tekee kokoonpano-ohjeita osistasi ja kokoonpanoistasi.

## Kapealla näytöllä

Enintään 760 pikselin leveydellä, kuten puhelimessa, näkymä saa näytön: työkalurivi on yksi sivusuunnassa vierivä rivi, ja paneelit avautuvat arkkeina alareunan palkista. {{ui:Työkalut}} piilottaa työkalurivin ja {{ui:Siirrä}} panee sen alas. Katso [Ohjauslevy, kosketus ja pienet näytöt](topic:trackpad-and-touch).
