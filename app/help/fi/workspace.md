---
title: PartCraft-näyttö
summary: Kierros jokaisen palkin ja paneelin läpi: työkalurivi ja sen muuttuminen, historia, osan tiedot, 3D-näkymä, ominaisuuspaneeli ja tilarivi.
keywords: näyttö, asettelu, työkalurivi, historia, muotoelementtipuu, ominaisuudet, paneeli, tilarivi, käyttöliittymä, kierros, koko näyttö
from: 5b5bb843
---

Näytössä on viisi osaa: työkalurivi ylhäällä, historia vasemmalla, 3D-näkymä keskellä, ominaisuuspaneeli oikealla ja tilarivi alareunassa. Kaiken yläpuolella on CadCraft-sovelluspalkki.

## Sovelluspalkki

Ohut palkki aivan ylhäällä kuuluu CadCraft-sivustolle, ei itse PartCraftiin. Se näyttää sovelluksen nimen ja sen, missä se toimii, versiovalikon, **About PartCraft**-tiedot, näyttötilapainikkeen ja Paper / Model -teemakytkimen.

- **Paper** on tummia viivoja vaalealla arkilla. **Model** on vaaleita viivoja tummalla taustalla. Luonnosten värit seuraavat teemaa.
- {{ui:Asetukset}} (hammasratas tai {{key:Mod+,}}) sisältää {{ui:PartCraft}}-välilehden: mikä hiiren painike kääntää näkymää, hiiren rulla tai kosketuslevy, ja suhteet luonnosteltaessa. Ks. [PartCraft-sovelluksen asetukset](topic:settings).
- Näyttötilapainike tai {{key:Ctrl+Shift+F}} kiertää tavallisen, koko näytön ja koko näytön ilman palkkeja -tilan läpi. Kun palkit ovat piilossa, siirrä osoitin ylälaitaan (tai napauta siellä), jotta ne tulevat takaisin. {{key:Esc}} palaa tavalliseen tilaan. Tämä näppäin on {{key:Ctrl+Shift+F}} myös Macilla, ei ⌘.

## Työkalurivi

Työkalurivi on ryhmitelty. Se muuttuu sen mukaan, mitä teet, joten se mahtuu yhdelle riville:

| Ryhmä | Painikkeet | Näkyy |
|---|---|---|
| Tiedosto | {{ui:Uusi}}, {{ui:Avaa}}, {{ui:Tallenna}}, {{ui:Vie}} (valikko) | Aina |
| Luonnos | {{ui:Luonnos}} | Kun luonnosta ei ole avoinna |
| Luonnos | {{ui:Poistu}}, {{ui:Viiva}}, {{ui:Suorakulmio}}, {{ui:Ympyrä}}, {{ui:Kaari}}, {{ui:Piste}}, {{ui:Keskiviiva}}, {{ui:Pyöristys}}, {{ui:Mitoitus}}, {{ui:Apugeometria}} | Vain kun luonnos on avoinna |
| Muotoelementit | {{ui:Pursota}}, {{ui:Leikkaa}}, {{ui:Kierto}}, {{ui:Reikä}}, {{ui:Lineaarinen}}, {{ui:Pyöreä}}, {{ui:Peilaa}}, {{ui:Pyöristys}}, {{ui:Viiste}}, {{ui:Kuori}}, {{ui:Lisää}} (valikko: Revolved cut, Plane, Axis, Point, Sweep, Loft, Draft) | Osalla, ei kun luonnos tai piirustus on avoinna. Pyöristys ja Viiste toimivat suorien reunojen kanssa kahden tasaisen pinnan välillä; Kuori ja Draft tasaisilla pinnoilla. Sweep ja Loft eivät ole vielä toteutettuja tässä versiossa (ne vaativat tarkan ytimen); niiden napsauttaminen kertoo sen |
| Muotoelementit | {{ui:Valmis}} | Vain kun valitset reunoja tai pintoja pyöristystä, viistoa, kuorta tai kaltevuutta varten |
| Piirustus | {{ui:Piirustus}} | Osalla (käytettävissä, kun osalla on kiintokappale) |
| Piirustus | {{ui:Datum}}, {{ui:Kehys}}, {{ui:Pinnoite}}, {{ui:Yksityiskohta}}, {{ui:PDF}}, {{ui:Takaisin}} | Vain piirustusarkilla |
| Kokoonpano | {{ui:Kokoonpano}} | Osalla (käytettävissä, kun osalla on kiintokappale) |
| Kokoonpano | {{ui:Lisää kopio}}, {{ui:Lisää}}, {{ui:Nivel}}, {{ui:Törmäys}}, {{ui:Muokkaa osaa}}, {{ui:Sulje}} | Vain kokoonpanossa |
| Kokoonpano | {{ui:Takaisin}} | Kun muokkaat kokoonpanon osaa |
| Muokkaus | {{ui:Kumoa}}, {{ui:Tee uudelleen}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Lisää}} (valikko: Leikkaa, Kopioi, Liitä, Liitä samaan paikkaan, Monista, Poista, Valitse kaikki, Poista valinta) | Aina; jokainen kohta toimii luonnoksen, historian tai kokoonpanon kanssa, jossa olet |
| Näkymä | {{ui:Sovita}}, {{ui:Normaali}}, {{ui:Näkymät}} (valikko: Mittaa, Massaominaisuudet, Leikkaus, Draft, Seepra, Kaarevuus, {{ui:Perustasot}}, sitten Isometrinen, Etu, Takaisin, Ylä, Ala, Oikea, Vasen) | Aina |

Vie osoitin painikkeen päälle nähdäksesi, mitä se tekee ja mikä on sen näppäin. Harmaana oleva painike ei ole käytettävissä juuri nyt: esimerkiksi muotoelementtipainikkeet luonnoksen ollessa auki tai {{ui:Nivel}} ennen kuin kokoonpanossa on kaksi osaa.

{{ui:Lisää}}-valikko Muokkaus-ryhmässä luettelee jokaisen muokkaustoiminnon näppäimineen. Mihin kopiointi ja liittäminen vaikuttavat, riippuu siitä, missä olet; ks. [Kopioi, liitä ja monista](topic:copy-paste). Harmaana olevan kohdan vihjeestä näkyy, miksi se ei nyt toimi.

{{ui:Vie}}-valikossa ovat STL 3D-tulostukseen, 3MF 3D-tulostukseen, STEP AP242 (tarkka kiintokappale), STEP AP214 (tarkka kiintokappale), STEP (tahkoitettu, verkkoydin), STEP AP214 (tahkoitettu, verkkoydin), DXF luonnoksesta tai tasaisesta pinnasta ja Piirustus (PDF): näkymät, leikkaus, yksityiskohta, GD&T. Tarkat STEP-kohdat kirjoittavat pyöreät pinnat todellisille pinnoilleen; tahkoitetut kirjoittavat ne litteinä fasetteina.

## Historia (vasemmalla)

Vasemmalla oleva paneeli on osan muotoelementtihistoria, luettelo, jonka PartCraft rakentaa ylhäältä alas.

- Otsikko on osan nimi ("Part1", kunnes nimeät sen uudelleen).
- **Etutaso**, **Ylätaso** ja **Oikeataso** ovat ensimmäisinä. Napsauta yhtä valitaksesi sen; se korostuu näkymässä.
- Niiden alla ovat muotoelementtisi siinä järjestyksessä, jossa ne tehtiin. Muotoelementin käyttämä luonnos on sisennettynä sen alla.
- Rivin oikeassa päässä oleva lippu kertoo sen tilan:

| Lippu | Merkitys |
|---|---|
| (ei mitään) | Rakennettu, ja luonnos on täysin määritelty |
| − | Luonnos, joka on vajaasti määritelty (se voi vielä liikkua) |
| + | Luonnos, joka on ylimäärittynyt |
| ⚠ | Rakennettu, varoituksen kanssa (vie osoitin päälle lukeaksesi sen) |
| ⚠ error | Muotoelementti epäonnistui. Vie osoitin päälle lukeaksesi syyn tai napsauta sitä |
| ⚠ not built | Muotoelementti tarvitsee toisen, joka epäonnistui tai on pois päältä |
| off | Tukahdutettu |

- Jokainen muotoelementti näyttää pääarvonsa nimensä jälkeen, kuten "25 mm" pursotukselle tai "Ø6.6 thru" reiälle. Kaksoisnapsauta arvoa tai paina riville {{key:F2}}, muuttaaksesi sitä siinä. Ks. [Muuta mittoja](topic:change-sizes).
- Napsauta muotoelementtiä muokataksesi sitä oikealla. Kaksoisnapsauta luonnosta avataksesi sen.
- Kun palaat taaksepäin, luettelossa on rivi **Rollback bar · roll forward**. Sen alla olevat muotoelementit ovat harmaina eivätkä ole rakennettuja.
- Kun rivi on kohdistettuna, {{key:Up}} ja {{key:Down}} siirtävät rivien välillä, ja {{key:Alt+Up}} / {{key:Alt+Down}} siirtävät itse muotoelementtiä, missä historia sen sallii.

Kokoonpanossa sama paneeli luettelee **Parts** (ensimmäinen on merkitty "grounded") ja **Joints**.

### Osan tiedot

Historian alapuolella oleva **Osa**-ruutu luettelee kiintokappaleen tilavuuden, pinta-alan, koon (X × Y × Z), läpireiät, kappaleet, kolmiot, muotoelementtien määrän ja kuinka monta niistä epäonnistuu. Tilavuudet ja pinta-alat ovat verkkoytimen rakentamasta fasetoidusta kiintokappaleesta, hieman alle todellisen arvon pyöreille muodoille (ks. [Muotoelementit ja niiden asetukset](topic:features#curves-resolution)).

Kokoonpanossa ruutu on otsikoitu **Kokoonpano**: osat, esiintymät, niveleet, liittämättömät ja päällekkäisyys.

## 3D-näkymä (keskellä)

Näkymä näyttää kiintokappaleen, perustasot ja kaikki luonnokset, joita mikään muotoelementti ei vielä käytä.

Perustasot piirretään kokonaan, kun osa on tyhjä. Kun osalla on kiintokappale, ne vetäytyvät taustalle: piirretään himmeinä, etteivät ne peitä osaa, ja napsautukset menevät niiden läpi osaan. Ne tulevat takaisin täysinä, kun valitset, mihin piirretään ({{ui:Luonnos}}, kun mitään ei ole valittu), ja kun valitset yhden historiassa. {{ui:Näkymät}} › {{ui:Perustasot}} piilottaa ne kokonaan; ne näkyvät yhä, kun valitset, mihin piirretään. PartCraft muistaa tämän valinnan.

- Vedä kääntääksesi osaa, oikea- tai keskirulla-vedolla siirrät näkymää, ja rullaa zoomataksesi osoittimen kohdalle. Lisätiedot kohdassa [Näppäimistö ja hiiri](topic:keyboard).
- Vie osoitin pinnan, reunan tai tason päälle nähdäksesi sen syttyvän. Napsauta valitaksesi. Pinnat korostuvat kokonaisina ja reunat piirretään ja valitaan kokonaisina. {{key:Shift}}+napsautus kerää useita reunoja tai pintoja. Ne jäävät merkityiksi.
- Näkymäkuutio oikeassa yläkulmassa kääntyy osan mukana: napsauta pintaa, reunaa tai kulmaa katsoaksesi sieltä, vedä sitä kääntääksesi, ja talopainike palaa alkuun. Ks. [Näkymäkuutio](topic:view-cube).
- Valittu pursotus näyttää oranssin nuolen päätypinnassaan, ja kierto näyttää kaarevan nuolen kierron päässä: vedä sitä muuttaaksesi syvyyttä tai kulmaa, tai kirjoita arvo sen vieressä olevaan ruutuun. Ks. [Muuta mittoja](topic:change-sizes#drag-it-in-the-view).
- Kun osa on tyhjä, ruutu nimeltä **Aloita osa** listaa ensimmäiset vaiheet.
- Pudota `.partcraft.json`- tai `.partcraft-asm.json`-tiedosto mihin tahansa näkymän kohtaan avataksesi sen. `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- tai `.3dm`-tiedosto, joka pudotetaan sinne, avautuu kiintokappaleena.

### Kun valitset reunoja tai pintoja

Kun {{ui:Pyöristys}}, {{ui:Viiste}} tai {{ui:Kuori}} on valittu ilman valintoja (tai {{ui:Valitse särmät}} tällaiselle muotoelementille), osa näkyy sellaisena kuin se oli ennen tätä muotoelementtiä. Napsauta reunoja tai pintoja lisätäksesi tai poistaaksesi ne; niiden merkit näyttävät, mikä on mukana. {{ui:Valmis}} tai {{key:Esc}} lopettaa. Ks. [Pyöristä, viistä ja ontota](topic:fillet-chamfer-shell).

### Piirustusarkilla

{{ui:Piirustus}} korvaa 3D-näkymän A3-piirustusarkilla. Rulla zoomaa, oikea- tai keskirulla-veto siirtää, ja {{key:F}} sovittaa. Ks. [Tee piirustus](topic:drawing-pdf).

### Kun luonnos on auki

Näkymä kääntyy katsomaan suoraan luonnostasoa, ja 2D-luonnoskerros ilmestyy päälle. Osa näyttää vain ne muotoelementit, jotka on tehty ennen tätä luonnosta. Vasemman yläkulman nauha näyttää luonnoksen tilan ("Täysin määritelty", "Vajaasti määritelty · 3 vapausastetta" ja niin edelleen) ja sen nimen, kuten "Sketch2 on a face of Extrude1".

## Ominaisuuspaneeli (oikealla)

Oikealla oleva paneeli näyttää sen, mikä on valittuna, ja sen otsikko nimeää sen:

- **Osa** (ei mitään valittuna): osan **Name** ja **Curves**-asetus.
- Taso: {{ui:Luonnostele sille}}-painike.
- **Pinta**: mikä tyyppi se on (tasainen pinta, sylinteri säteineen ja akseleineen, kartio, pallo tai toruksi), sen pinta-ala, mikä muotoelementti sen teki, ja tasaiselle pinnalle {{ui:Luonnostele tälle pinnalle}}, {{ui:Normaali}}, {{ui:Vie pinta DXF:nä}}, {{ui:Pursota siitä}}, {{ui:Leikkaa siihen}} ja {{ui:Reikä tähän}} (ks. [Vedä tai työnnä koko pintaa](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- **Reuna**: sen tyyppi (suora, ympyrä keskipisteineen ja säteineen tai käyrä), pituus ja kaksi pintaa, joiden välissä se on (kuten "Extrude1 end face and Extrude1 side"), sekä {{ui:Pyöristys}}- ja {{ui:Viiste}}-painikkeet.
- Useita reunoja tai pintoja valittu {{key:Shift}}-napsautuksella: kuinka monta, {{ui:Pyöristys}} ja {{ui:Viiste}} reunoille sekä {{ui:Tyhjennä}}.
- Muotoelementti: sen luvut ja asetukset, luonnoksen mitat, sitten {{ui:Poista käytöstä}}, {{ui:Kelaa taaksepäin tähän}}, {{ui:Siirrä ylös}}, {{ui:Siirrä alas}}, {{ui:Poista}} ja sen **Name**.
- Avoin luonnos: sen tila, valintaan lisättävät suhteet, luettelo suhteista ja mitoista, **Add by coordinates** sekä {{ui:Poistu luonnoksesta}}, {{ui:Sovita}} ja {{ui:Vie DXF:nä}}.
- Piirustusarkilla: leikkaus- ja yksityiskohta-asetukset tai valittu GD&T-symboli.
- Kokoonpanossa: kokoonpano, valittu osa tai valittu nivel.

Jokainen lukukenttä astuu voimaan, kun painat {{key:Enter}} tai {{key:Tab}}, tai napsautat muualle. Osa rakentuu heti; OK-painiketta ei ole. Käytä {{key:Mod+Z}} palataksesi.

## Tilarivi (alhaalla)

- Vasemmalla osoittimen koordinaatit luonnoksessa (vain kun luonnos on auki).
- Keskellä viestit: mitä seuraavaksi tehdään ja miksi jokin evättiin. Lue se, kun mikään ei näytä tapahtuvan.
- Oikealla lähellä kernel-merkki: tässä versiossa aina "Mesh kernel". Vie osoitin päälle, niin näet, mitä se tarkoittaa. Ks. [Verkkoydin](topic:solid-kernels).
- Oikealla merkki: "Rebuilding…", kun osa rakentuu uudelleen, sitten "Rebuilt in … ms", kun kaikki on kunnossa, tai "1 feature failing". Kokoonpanossa se sanoo "Placed in … ms" tai laskee niveliin liittyvät ongelmat.

Ks. myös [Aloita käsikirja työtilassa Illustrate](topic:illustrate): työtila, joka tekee kokoonpanokäsikirjoja osistasi ja kokoonpanoistasi.

## Kapealla näytöllä

Enintään 760 pikseliä leveällä näytöllä, kuten puhelimella, näkymä säilyttää näytön: työkalurivi on yksi rivi, joka vierii sivusuunnassa, ja paneelit avautuvat arkkeina alapalkista. {{ui:Työkalut}} piilottaa työkalurivin ja {{ui:Siirto}} siirtää sen alareunaan. Ks. [Kosketus ja pienet näytöt](topic:trackpad-and-touch).
