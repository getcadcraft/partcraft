---
title: Vianmääritys
summary: Ongelmat, joita PartCraftissa voi tulla vastaan, sovelluksen käynnistymisestä ominaisuuksien epäonnistumiseen, luonnoksiin jotka eivät ratkea, tiedostoihin jotka eivät avaudu ja liitoksiin jotka käyttäytyvät väärin. Mukana viesti, jonka näet, ja korjaus.
keywords: ongelma, virhe, ohje, ei toimi, epäonnistuu, kaatuminen, tyhjä, webgl, webassembly, ydin, ei vielä toteutettu, ylimääritetty, avoin profiili, ei voi avata, ei tapahdu mitään, väärä suunta, hidas
from: 7728542c
---

Kun jokin ei toimi, lue ensin alareunan **tilarivi**: PartCraft kertoo siellä, miksi se kieltäytyi tai mitä se odottaa seuraavaksi. Epäonnistuva ominaisuus näyttää viestinsä myös oikean paneelinsa yläosassa ja kun viet osoittimen sen rivin päälle historiassa.

## Sovellus ei käynnisty

### "Tämä selain ei voi näyttää 3D-grafiikkaa (WebGL on pois päältä tai puuttuu), joten PartCraft ei voi toimia täällä."

**Syy:** selaimen 3D-grafiikka (WebGL) on pois päältä, estetty tai näytönohjain ei tue sitä.

**Korjaus:**

:::chromium
Avaa `chrome://settings/system` (tai Edgessä `edge://settings/system`) ja ota käyttöön "Käytä laitteistokiihdytystä, kun se on käytettävissä", ja käynnistä selain uudelleen. Jos se on jo päällä, tarkista `chrome://gpu` WebGL-tilan varalta ja päivitä näytönohjaimen ajuri.
:::

:::firefox
Avaa `about:support` ja katso kohdasta Graphics, WebGL. Jos se on estetty, päivitä näytönohjaimen ajuri. `about:config`-sivulla `webgl.disabled` pitää olla `false`.
:::

:::safari
WebGL on aina päällä nykyisessä Safarissa. Päivitä macOS (Safari päivittyy sen mukana). Jos se yhä epäonnistuu, kokeile samalla Macilla Chromea tai Firefoxia ja sulje pois näytönohjain.
:::

Etätyöpöydillä ja joillakin virtuaalikoneilla ei ole WebGL:ää. Kokeile suoraan tietokoneella.

### "Kiintokappaleydin ei latautunut: …"

**Syy:** geometriaydintä (WebAssembly-ohjelma) ei voitu noutaa tai käynnistää. Yleensä yhteys katkesi sovelluksen latautuessa, yrityksen käytäntö tai selaimen tietoturva-asetus on kytkenyt WebAssemblyn pois, tai selain on hyvin vanha.

**Korjaus:** lataa sivu uudelleen yhteyden ollessa päällä. Jos virhe toistuu, kokeile toista ajantasaista selainta. Firefoxissa `about:config`-sivun `javascript.options.wasm` pitää olla `true`. Offline-tilassa sovellus ja sen ydin latautuvat vain, jos sovelluspalkki näytti **Valmis offline-käyttöön** ennen yhteyden katkeamista ({{ui:Tallenna offline-käyttöön}} yhteyden ollessa päällä; katso [Työskentely offline-tilassa](common:offline)).

### Offline-painike sanoo "Tallennus ei onnistunut" tai "Offline-tila ei ole käytettävissä"

**Tallennus ei onnistunut**: osa tiedostoista ei latautunut. Napsauta sitä uudelleen yhteyden ollessa päällä; hidas tai mitattu yhteys voi vaatia toisen yrityksen. **Offline-tila ei ole käytettävissä**: tämä selainikkuna ei voi säilyttää offline-kopiota (yksityiset ikkunat ja jotkin hallitut tietokoneet estävät sen). Käytä tavallista ikkunaa tai pidä välilehti auki.

### PartCraft on offline-tilassa, mutta vanhentunut

Napsauta yhteyden ollessa päällä **Valmis offline-käyttöön** -kohtaa ja valitse {{ui:Tallenna uudelleen (hae uusin versio)}}.

### "Pyyhkäisy: ei vielä toteutettu. Se tarvitsee tarkan ytimen, …"

Koko viesti on "<Name>: ei vielä toteutettu. Se tarvitsee tarkan ytimen, jota tässä PartCraftin versiossa ei ole. Ohje › Mitä ei ole vielä toteutettu kertoo, mitä tehdä sen sijaan." Näet sen, kun valitset Pyyhkäisy, Loft, Rib, levytyön laipan, pinta-ominaisuuden, Yhdistä, Siirrä kappale, Skaalaa kappale tai Polkukuviointi, ja muille asioille, jotka vaativat vain tarkan ytimen. Selaimessasi tai osassasi ei ole vikaa: tämä PartCraftin versio rakentaa jokaisen osan verkkoytimellä. Katso [Mitä ei ole vielä toteutettu](topic:not-built-yet), mitä tehdä sen sijaan, ja [Verkkoydin](topic:solid-kernels).

### "Kiintokappaleydintä ladataan…" ei katoa

Odota hetki hitaalla yhteydellä: ydin ja 3D-kirjasto ladataan ensimmäisellä kerralla. Lataa sitten uudelleen. Jos sivu itse näyttää virheen, katso yllä.

## Mitään ei tapahdu, kun painan näppäintä

- Näppäimet eivät toimi, kun kohdistin on paneelin ruudussa. Napsauta 3D-näkymää tai paina {{key:Esc}} kirjoittamisen jälkeen (tai poistu {{key:Tab}}-näppäimellä).
- Nuolinäppäimet ja {{key:Plus}}/{{key:Minus}} kiertävät ja zoomaavat näkymää vasta, kun olet napsauttanut näkymää.
- Valintaikkuna on auki: vastaa siihen ensin.
- Luonnoksessa {{key:F}} on Pyöristys-työkalu, ei Sovita. Käytä {{ui:Sovita}}-painiketta.

## Työkalupalkin painike on harmaa

- Ominaisuuspainikkeet ovat harmaita, kun luonnos on auki. Sulje luonnos ensin.
- Luonnostyökalut toimivat vain luonnoksen sisällä.
- {{ui:Kumoa}} ja {{ui:Tee uudelleen}} ovat harmaita, kun kumottavaa tai uudelleen tehtävää ei ole.
- {{ui:Kokoonpano}} vaatii osan, jossa on kiintokappale. {{ui:Nivel}} vaatii kokoonpanoon kaksi osaa. {{ui:Muokkaa osaa}} vaatii valitun osan.
- {{ui:STEP AP242 (tarkka kiintokappale)}} ja {{ui:STEP AP214 (tarkka kiintokappale)}} ovat harmaita kokoonpanossa: vie jokainen osa erikseen. Jos toinen ohjelma hylkää tarkan tiedoston, kokeile {{ui:STEP AP214 (tarkka kiintokappale)}}, sitten {{ui:STEP (tahkoitettu, verkkoydin)}}, ja kerro meille kohdasta {{ui:Ohje}} › {{ui:Ilmoita ongelmasta}}.
- {{ui:Pyyhkäisy}}, {{ui:Loft}} ja muut tarkkaa ydintä vaativat ominaisuudet eivät ole harmaita: ne pysyvät napsautettavina, niiden työkaluvihjeet päättyvät "ei vielä toteutettu (vaatii tarkan ytimen)", ja napsautus kertoo siitä tilarivillä. Katso [Mitä ei ole vielä toteutettu](topic:not-built-yet).
- {{ui:Piirustus}} vaatii osan, jossa on kiintokappale, ja on harmaa, kun luonnos on auki.
- {{ui:Vie}}-kohdat ovat harmaita kokoonpanossa: kokoonpanoja ei voi vielä viedä. Sulje se tai muokkaa osaa viedäksesi.

## Luonnosongelmat

### Luonnos ei anna lisätä riippuvuutta

"Mikään riippuvuus ei sovi tähän valintaan. Valitse yksi tai kaksi kohdetta (Shift+napsautus lisää)." Riippuvuus tarvitsee toisenlaisen valinnan. Katso [Luonnoksen riippuvuudet ja mitat](topic:sketch-relations), mitä kukin tarvitsee.

### "Ylimääritelty: … kaikkia ei voi täyttää. Kumoa tai poista yksi niistä."

**Syy:** uusi riippuvuus tai mitta on ristiriidassa jo olemassa olevien kanssa. Luonnos ei liikkunut.

**Korjaus:** {{key:Mod+Z}}, tai poista yksi punaisista kohteista oikean paneelin luettelosta (valitse sen vieressä **Poista**).

### "Ylimääritelty: … on jo implisiittinen. Poista se."

**Syy:** riippuvuus ei lisää mitään: muut jo pakottavat sen (esimerkiksi Yhdensuuntainen suorakulmion kahdella sivulla tai mitta, joka on jo kiinnitetty). Tässä versiossa ei ole ohjattuja mittoja.

**Korjaus:** poista se. Ominaisuus rakennetaan silti, varoituksen kanssa.

### "Näitä kohteita ei voi mitoittaa yhdessä."

Napsautit esimerkiksi pistettä ja ympyrää. Mittaa sen sijaan ympyrän keskipisteeseen.

### "Pyöristys tarvitsee kulman, jossa täsmälleen kaksi viivaa kohtaa." / "Tuo säde on liian suuri näille viivoille."

Napsauta täsmälleen kahden kiinteän viivan kulmapistettä. Käytä pienempää sädettä kuin lyhyempi viiva sallii.

### Geometria hyppää takaisin, kun vedän sitä

Veto rikkoisi riippuvuuden tai mitan, joten PartCraft palauttaa sen. Vain sininen (alimääritelty) geometria voi liikkua.

### "Tätä luonnosta ei voi avata: Tarvitsee Extrude2:n, joka epäonnistuu."

Luonnos on ominaisuuden pinnalla, jota ei ole rakennettu. Korjaa ensin se ominaisuus, poista sen estö tai siirry historiassa eteenpäin.

## Ominaisuusongelmat

| Viesti | Syy | Korjaus |
|---|---|---|
| "Tee ensin luonnos: valitse taso, Luonnos, piirrä suljettu profiili, Lopeta." | Ei käyttämätöntä luonnosta, jossa on käyriä, eikä mitään valittuna | Piirrä luonnos tai valitse historiasta käytettävä luonnos |
| "Luonnoksessa ei ole suljettua profiilia pursotettavaksi." (tai "kierrettäväksi") | Ei kiinteiden viivojen suljettua silmukkaa | Sulje aukot; vaihda rakennusviivat takaisin näppäimellä {{key:Q}} |
| "Profiili on auki: pää kohdassa (x, y) ei ole liitetty mihinkään." | Aukko siinä kohdassa | Avaa luonnos, vedä pää naapurinsa päälle, jotta se tarttuu |
| "Profiili haarautuu kohdassa (x, y): siinä kohtaa enemmän kuin kaksi päätä." | Kolme tai useampi viiva kohtaa yhdessä pisteessä | Poista ylimääräinen viiva tai muuta se rakennusviivaksi |
| "Suljettu silmukka tarvitsee vähintään kolme sivua tai käyrän." | Kaksi viivaa edestakaisin | Piirrä silmukka uudelleen |
| "Läpi kaiken on leikkauksille. Käytä syvyyttä kohoumalle." | Kohouma asetettu Läpi kaiken -tilaan | Aseta Loppu Sokea tai Keskitaso |
| "Luonnoksen tuolla puolella ei ole mitään leikattavaa. Kokeile toista suuntaa." | Leikkaus osoittaa materiaalista poispäin | Valitse Käännä suunta |
| "Ei vielä mitään leikattavaa." / "Ei vielä mitään porattavaa." | Ei kiintokappaletta ennen tätä ominaisuutta | Tee ensin kohouma tai siirrä ominaisuus alemmas |
| "Piirrä keskiviiva (rakennusviiva) luonnokseen, jonka ympäri kierretään." | Kierto ilman akselia | Lisää keskiviiva tai valitse viiva kohdasta Akseli |
| "Profiili ylittää akselin. Pidä se keskiviivan toisella puolella." | Profiili akselin molemmilla puolilla | Piirrä puolet profiilista uudelleen |
| "Aseta luonnospisteet, joihin reiät tulevat (Piste-työkalu), ja tee sitten reikä." | Luonnoksessa ei ole vapaita pisteitä | Lisää pisteitä näppäimellä {{key:P}} |
| "Upotuksen on oltava reikää leveämpi." | Upotuksen Ø ei ole suurempi kuin Halkaisija | Tee upotuksesta leveämpi |
| "Upotuksen on oltava reikää matalampi." | Upotus syvempi kuin sokea reikä | Tee siitä matalampi tai reiästä syvempi |
| "Valitse kopioitavat ominaisuudet." | Kuviointi tai peilaus, jossa ei ole mitään valittuna | Valitse ominaisuus kohdasta Kopioitavat ominaisuudet |
| "Extrude2:lla ei ole kiintokappaletta kopioitavaksi." | Kopioitava ominaisuus epäonnistui tai on pois päältä | Korjaa se tai ota käyttöön |
| "Tarvitsee Sketch3:n, joka epäonnistuu." | Ominaisuutta, josta se riippuu, ei ole rakennettu | Korjaa ominaisuus, jonka se nimeää |
| "Pinta, jolla se on, on poissa (Extrude1 ei ole rakennettu)." | Luonnoksen pinta ei enää ole olemassa | Korjaa tuo ominaisuus tai poista luonnos ja piirrä uudelleen |
| "Tämän jälkeen osasta ei ole jäljellä mitään." | Leikkaus poisti kaiken materiaalin | Tarkista leikkauksen koko ja suunta |
| "Kiintokappaleydin ei voinut rakentaa tätä (…)." tai "Kiintokappaleydin ei voinut yhdistää tätä kappaleeseen." | Ydin hylkäsi geometrian | Kumoa tai muuta kokoja hieman; täsmälleen toisiinsa koskettavat pinnat voivat aiheuttaa sen |
| "Pyyhkäisy: ei vielä toteutettu. Se tarvitsee tarkan ytimen, jota tässä PartCraftin versiossa ei ole." (myös Loft, Rib ja muut) | Aiemmasta versiosta peräisin oleva ominaisuus, jonka vain tarkka ydin voi rakentaa. Se pysyy historiassa ja tallentuu takaisin muuttumattomana | Poista käytöstä tai poista; katso [Mitä ei ole vielä toteutettu](topic:not-built-yet), mitä tehdä sen sijaan |
| "5 mm:n pyöristys ei mahdu tähän (…)." / "2 mm:n viiste …" | Koko on liian suuri reunan vieressä olevalle pinnalle, tai kulmaa ei voi sulauttaa | Pienempi koko tai vähemmän särmiä per ominaisuus |
| "Pyöristys: tässä versiossa vain suorat särmät kahden tasaisen pinnan välillä (verkkoydin rakentaa ne). Pyöristä tai viistä kaarevat särmät luonnoksessa." (myös Viiste) | Valittu särmä on pyöreä, kuten reiän reuna, tai se on kaarevalla pinnalla | {{ui:Valitse särmät}} ja poista se; pyöristä tai viistä tuo kulma luonnoksessa |
| "Pyöristys, jonka säde muuttuu särmää pitkin: ei vielä toteutettu (tarvitsee tarkan ytimen). Anna sille yksi säde." | **Muuttuva säde** on valittuna | Poista valinta ja anna yksi säde |
| "Pyöristys verkkoytimellä: pyöristettyjen särmien kohtaamiskohdissa ne viistetään, eikä niitä sulauteta." (⚠, varoitus) | Valitut särmät kohtaavat kulmassa; pyöristykset kohtaavat siinä terävänä taitoksena | Ei korjattavaa: osa on rakennettu. Pyöristä vähemmän särmiä, jos taitos on tärkeä |
| "Särmä, jota se pyöristää, on poissa: särmä Extrude1:n ja Cut2:n välillä." | Aiempi muutos poisti särmän | {{ui:Valitse särmät}}, poista punainen särmä, valitse uusi |
| "Valitse särmät näkymästä ja lisää ne." | Pyöristyksellä tai viisteellä ei ole särmiä | {{ui:Valitse särmät}} |
| "Valitse poistettavat pinnat (avoin), sitten kuori." | Kuorella ei ole avoimia pintoja | {{ui:Valitse pinnat}} |
| "Kuorta ei voitu tehdä tällä paksuudella (…)." | Seinä on paksumpi kuin mallin ohut kohta tai pyöristyksen säde | Ohuempi seinä tai suuremmat pyöristykset |
| "Kuori: tässä versiossa se avaa vain tasaisia pintoja (verkkoydin rakentaa sen)." | Avoin pinta on kaareva | {{ui:Valitse pinnat}} ja poista se; avaa vain tasaisia pintoja |
| "Vetokulma: tässä versiossa vain tasaiset pinnat (verkkoydin rakentaa sen)." | Vedettävä pinta on sylinteri, kartio tai vapaamuotoinen pinta | Poista se; vedä vain tasaisia pintoja |
| "Pinta, jonka se avaa, on poissa (…)." | Aiempi muutos poisti pinnan | {{ui:Valitse pinnat}} uudelleen |
| "Fillet1 muuttaa kappaleen särmiä tai seiniä; sitä ei voi kopioida. …" | Kuviointi tai peilaus kopioi pyöristyksen, viisteen tai kuoren | Poista valinta; kuvioi leikkaukset ensin, pyöristä sitten |
| "Se on pinnalla, jonka vain tarkka ydin löytää: ei vielä toteutettu tässä versiossa." | Luonnos pinnalla, jonka verkkoydin ei löydä, kuten aiemmassa versiossa tehty | Piirrä luonnos pohjatasolle tai pursotuksen tasaiselle pinnalle ja sijoita se mitoilla |
| "Se käyttää kiintokappaleen pintaa tai särmää, jonka vain tarkka ydin löytää: ei vielä toteutettu tässä versiossa." | Aputaso, akseli tai piste kiintokappaleen pinnalla tai särmällä | Tee se pohjatasoista, luonnospisteistä tai koordinaateista |
| "Pursottaminen pintaan, seuraavaan pintaan tai kärkipisteeseen: ei vielä toteutettu (tarvitsee tarkan ytimen)." / "Kaltevuus: ei vielä toteutettu (tarvitsee tarkan ytimen)." | Päättöehto tai kaltevuus, jonka vain tarkka ydin rakentaa | Käytä mitattua Sokea- tai Keskitaso-syvyyttä; jätä Kaltevuus arvoon 0 |

## Valintaongelmat

- "Tuo pinta on kaareva. Valitse tasainen pinta tai taso, jolle piirtää." Luonnokset tarvitsevat tasaisen pinnan. Piirrä luonnos pohjatasolle ja sijoita se mitoilla.
- Pinta sanoo "Kiinnitetty valintakohtaan": sitä ei tehty luonnoksen särmästä (esimerkiksi kuvion kopion pinta), joten sen päällä oleva luonnos pysyy paikallaan, kun osa muuttuu.
- Särmiä on vaikea osua: zoomaa lähemmäs. Särmä voittaa viereisen pinnan, kun osoitin on juuri sen kohdalla.

## Tiedostoongelmat

| Viesti | Korjaus |
|---|---|
| 'PartCraft avaa omat .partcraft.json-tiedostonsa, CadCraft-makron SolidWorksille tekemät viennit (.cadcraft-sw.json) ja STEP-tiedostot. "bracket.igs" ei ole mikään näistä.' | Vain nämä tiedostot tunnistetaan (sekä STL-, OBJ- ja 3MF-verkot sekä `.3dm`-tiedostot) |
| '"part.stp" ei ole STEP-tiedosto (se ei ala merkkijonolla ISO-10303-21).' | Tiedosto ei ole STEP-tekstiä |
| "Tätä STEP-tiedostoa on liian suuri tuoda tänne (yli 60 MB)." | Yksinkertaista se lähteessään |
| "Tiedosto on liian suuri ollakseen PartCraft-osa." omalla tallennetulla osallasi | Suuri STEP-kiintokappale, joka tuotiin aiemmassa versiossa, teki osatiedostosta yli 50 MB:n. Käytä aiempaa kopiota ilman sitä |
| "Tiedosto on liian suuri ollakseen PartCraft-osa." | Tiedosto on yli 50 MB; se ei ole PartCraft-tiedosto |
| "Tämä ei ole PartCraft-tiedosto (se ei ole JSON)." / "Tämä ei ole PartCraft-tiedosto." | Tiedosto on vaurioitunut tai toisen ohjelman tiedosto |
| "Tämän tiedoston tallensi uudempi PartCraft (tiedostoversio …); tämä lukee version …" | Avaa se uudemmalla PartCraftilla |
| "Extrude2: syvyys on virheellinen." (tai muu arvo) | Tiedostoa on muokattu käsin tai se on vaurioitunut. Käytä aiempaa kopiota |
| Lisää kokoonpanoon sanoo "Part1.partcraft.json ei sisällä kiintokappaletta lisättäväksi." | Osatiedostossa ei ole kiintokappaletta. Avaa se, tee kiintokappale, tallenna ja lisää uudelleen |

**Tallentamani tiedosto ei ole siellä, missä odotin.** Tallennus on lataus: katso selaimesi latauskansiosta tai avaa latausluettelo selaimen työkalupalkista. Katso [Tiedostojen sijainti](common:your-files).

**Avasin osan, mutta kokoonpano on yhä näytöllä.** Osa latautui kokoonpanon taakse. Valitse {{ui:Sulje}}, jolloin kokoonpano sulkeutuu ja näet osan. Sulje kokoonpanot ennen osatiedostojen avaamista.

## Piirustusongelmat

| Viesti | Korjaus |
|---|---|
| "Rakenna ensin kiintokappale, tee sitten sen piirustus." | Rakenna osa ensin |
| "Arkilla ei ole tilaa detaljille: … Tee detaljista pienempi tai poista näkymä." | Pienempi **Detaljin säde** tai **Detaljin mittakaava**, tai poista leikkaus |
| "Detalji otetaan edestä, ylhäältä, oikealta tai leikkausnäkymästä." | Napsauta yhtä noista näkymistä |
| "Napsauta yhtä näkymistä." | Napsautus osui tyhjään paperiin |
| "Sijainti tarvitsee vähintään yhden tukiviitteen." ja muut kehysviestit | Aseta paneelin pyytämät tukiviitteet tai valitse toinen ominaisuus |
| "Piirustusnäkymiä ei voitu tehdä: …" | Kumoa viimeisin muutos. Jos se toistuu, tallenna, lataa sivu uudelleen ja avaa osa |

## Kokoonpanoongelmat

| Viesti | Korjaus |
|---|---|
| "Rakenna ensin kiintokappale, lisää se sitten kokoonpanoon." | Osalla ei ole vielä kiintokappaletta |
| "Lisää ensin toinen osa (Lisää kopio, Lisää tai Muokkaa › Monista)." | Nivel tarvitsee kaksi osaa |
| "Valitse pinta toisesta osasta." | Niveleen tulevien kahden pinnan on oltava eri osissa |
| "Tuo pinta on kaareva. Valitse tasainen pinta …" | Nivelet alkavat tasaisista pinnoista. Käytä sitten **Keskitä kohtaan** reiälle tai pyörähdysakselille |
| "Bracket2 ei ole liitetty maadoitettuun osaan, joten se pysyy sijoituspaikassaan." | Lisää nivel siitä osaan, joka on sijoitettu |
| "Revolute3 sulkee silmukan, joka ei voi sulkeutua: se on 2.000 mm pois. Tarkista silmukan niveleiden pinnat, siirtymät ja rajat." | Osat eivät voi kaikki kohdata: tarkista pituudet, kunkin niveleen käyttämät pinnat, siirtymät (pinta pintaa vasten pinotut osat on oltava samassa syvyydessä) ja rajat; tai poista yksi silmukan nivel |
| "Tämän niveleen käyttämä pinta on poissa osasta Bracket." / "Tämän niveleen käyttämä akseli on poissa osasta Bracket." | Osaa on muokattu. Poista nivel ja tee se uudelleen |
| "Akseli kulkee pinnan suuntaisesti, joten se ei voi asettaa niveleen keskikohtaa." | Valitse akseli, joka leikkaa pinnan, tai "Pinnan oma origo" |
| "Kokoonpanossa on oltava vähintään yksi osa. Sulje se sen sijaan." | Käytä {{ui:Sulje}} |

**Osat on liitetty, mutta väärään kohtaan.** Aseta **Keskitä kohtaan** niveleen molemmille puolille reiät tai pyörähdysakselit, joiden pitäisi olla linjassa, ja säädä sitten **Kulma (°)** ja **Siirtymä (mm)**.

## Se on hidas

- Aseta **Käyrät** tilaan Normaali tai Karkea mallintaessa; vaihda Hieno ennen vientiä.
- Suuret kuviomäärät (satoja kopioita) vievät aikaa rakentua uudelleen joka muutoksella. Poista kuvio käytöstä, kun työstät muita ominaisuuksia.
- Törmäys- ja liiketarkistus vertaavat jokaista osaparia; suuret kokoonpanot vievät kauemmin.
- Sulje muut raskaat välilehdet. PartCraft toimii oman tietokoneesi prosessorilla ja grafiikalla.

## Yhä jumissa

Tallenna tiedostosi ensin ({{key:Mod+S}}), lataa sivu uudelleen ja avaa se. Jos ominaisuus yhä epäonnistuu, valitse se, lue sen viesti ja kokeile {{key:Mod+Z}}-toimintoa, kunnes palaat viimeiseen toimivaan tilaan.
