---
title: Siirtyminen toisesta parametrisesta mallintajasta
summary: Miten työpöytäpohjaisten parametristen osamallintajien tavat vastaavat PartCraftia, ja erot, jotka kaatavat kokeneet käyttäjät ensimmäisen tunnin aikana.
keywords: siirtyminen, siirto, tuttu, muotoelementtien hallinta, suunnittelupuu, älymitoitus, pursotettu kohouma, pursotettu leikkaus, reikäohjain, liitokset, törmäystarkistus, kelauspalkki, ominaisuuspaneeli, hiiri, erot
from: fbacaee1
---

Jos suunnittelet osia SolidWorksilla, suurin osa PartCraftin ajatuksista on tuttuja: luonnoksia tasoilla Etutaso, Ylätaso ja Oikea taso, relaatioita ja älymittoja, muotoelementtihistoriaa kelauspalkilla ja kokoonpanoja, jotka sijoitetaan liitoksilla. Tapa, jolla niihin pääset, on paikoin toinen, ja tämä ensimmäinen versio tekee vähemmän. Tämä sivu kartoittaa tapasi ja luettelee yllätykset.

## Tavat kartoitettuna

| Tottumus | PartCraftissa |
|---|---|
| Suunnittelupuu vasemmalla | Historia vasemmalla: tasot, sitten muotoelementit, luonnokset sisennettynä sen muotoelementin alle, joka niitä käyttää |
| Etutaso, Ylätaso ja Oikea taso | Samat kolme, origon kautta. Etutaso on XY-taso, Ylätaso on XZ ja Oikea taso on YZ; Y osoittaa ylös |
| Luonnos tasolle tai pinnalle, sitten vahvistuskulma poistuaksesi | {{ui:Luonnos}} ({{key:S}}) valitulla tasolla tai tasaisella pinnalla; {{ui:Poistu}} tai {{key:Esc}}, kunnes se sulkeutuu |
| Älymitoitus | {{ui:Mitoitus}} ({{key:D}}). Klikkaa yhtä tai kahta kohdetta, sitten kohtaa, johon luku menee. Paikka, johon sijoitat sen, valitsee vaaka-, pysty- tai tasatun mitan |
| Lisää relaatiot ominaisuuspaneelissa | Valitse kohteet, sitten relaatiopainikkeet oikeasta paneelista (Yhtyvä, Vaakasuora, Yhdensuuntainen, Tangentti, Yhtä suuri ja niin edelleen) |
| Automaattiset relaatiot piirtäessä | Tartunnat lisäävät yhtyvä-, piste käyrällä -, vaaka- ja pystysuuntaisia relaatioita |
| Sininen / musta / punainen luonnosväri | Sama idea: sininen on alimääritelty, musta täysin määritelty, punainen ylimääritelty. Siru näyttää jäljellä olevat vapausasteet |
| Keskiviiva kierroille | {{ui:Keskiviiva}} ({{key:N}}); {{ui:Kierto}} käyttää ensimmäistä keskiviivaa, ellei valitse toista akselia |
| Luonnoksen pyöristys | {{ui:Pyöristys}} ({{key:F}}) luonnoksessa: klikkaa kulmaa, kirjoita säde |
| Apugeometrian kytkin | {{ui:Apugeometria}} ({{key:Q}}) |
| Pursotettu kohouma | {{ui:Pursota}}: Sokea, Keskitaso, Pinnaan / seuraavaan / kärkeen asti, Siirtymä pinnasta, toinen suunta, kartio, yksi ääriviiva (Valitse alueet) |
| Pursotettu leikkaus | {{ui:Leikkaa}}: alkaa tilasta Läpi kaiken; vaihda Sokeaksi taskua varten |
| Kierretty kohouma / leikkaus | {{ui:Kierto}} / {{ui:Lisää}} › {{ui:Kierretty leikkaus}} |
| Referenssitaso / akseli / piste | {{ui:Lisää}} › {{ui:Taso}}, {{ui:Akseli}}, {{ui:Piste}} (katso [Referenssitasot, akselit ja pisteet](topic:reference-geometry)) |
| Pyyhkäisty tai loftattu kohouma tai leikkaus, vetokulma | {{ui:Lisää}} › {{ui:Vetokulma}} tasaisilla pinnoilla (katso [Pyyhkäisy, loft ja vetokulma](topic:sweep-loft-draft)). {{ui:Pyyhkäisy}} ja {{ui:Loft}} eivät ole vielä toteutettuja tässä versiossa (ne tarvitsevat tarkan ytimen) |
| Hole Wizard | {{ui:Reikä}} jokaisessa irrallisessa luonnospisteessä: yksinkertainen, upotus, kartiopora (90° / 82°) tai kierretty ISO-metrinen M2–M24, läpi tai sokea |
| Lineaarinen / pyöreä toisto, peilaus | {{ui:Lineaarinen}}, {{ui:Pyöreä}}, {{ui:Peilaa}} (muotoelementit tai koko kappale) |
| Pyöristys ja viiste reunoilla | {{ui:Pyöristys}} / {{ui:Viiste}}: klikkaa reunaa, {{key:Shift}}+klikkaus lisää, sitten painike. Yksi säde; yhtä suuret, kahden etäisyyden tai etäisyys-kulma -viisteet. Tässä versiossa vain suorat reunat kahden tasaisen pinnan välissä, ja kulmassa kohtaavat pyöristykset ovat viistettyjä. Pyöristä tai viistä kaarevia reunoja luonnoksessa ({{ui:Pyöristys}} luonnoksessa, {{key:F}}) |
| Kuori | {{ui:Kuori}}: klikkaa tasaisia pintoja avataksesi, sitten painike. Yksi seinän paksuus |
| Avaa STEP-tiedosto | {{ui:Avaa}}: luetaan kolmioina, kiintokappale, jonka päälle rakentaa ([Avaa STEP-tiedosto](topic:import-step)) |
| Muokkaa muotoelementtiä, sitten OK | Klikkaa muotoelementtiä; muuta lukuja oikealla; se rakentuu uudelleen kirjoittaessasi. Ei OK-painiketta eikä Peruuta-painiketta: käytä {{key:Mod+Z}} |
| Muokkaa luonnosta | Kaksoisklikkaa luonnosta historiassa |
| Uudelleenrakennus | Automaattinen joka muutoksen jälkeen. Uudelleenrakennusnäppäintä ei ole |
| Tukahduta / palauta | {{ui:Poista käytöstä}} / {{ui:Ota käyttöön}} oikeassa paneelissa |
| Vedä kelauspalkkia | {{ui:Kelaa taaksepäin tähän}} muotoelementissä; klikkaa ”Rollback bar · roll forward” palataksesi |
| Vedä muotoelementti puussa järjestääksesi uudelleen | {{ui:Siirrä ylös}} / {{ui:Siirrä alas}} tai {{key:Alt+Up}} / {{key:Alt+Down}}; hylätään syyn kanssa, jos se rikkoisi riippuvuuden |
| Muokkaa mittoja kaksoisklikkaamalla mallia | Valitse muotoelementti: sen luonnoksen mitat luetellaan oikeassa paneelissa |
| Liitokset: yhtyvä, samankeskinen, etäisyys, kulma | {{ui:Nivel}} ({{key:J}}): valitse tasainen pinta kummastakin osasta; nivel asettaa ne pinta pintaa vasten. **Keskitä** akseliin toimii kuten samankeskinen, **Siirtymä** kuten etäisyys ja **Kulma** kuten kulma |
| Kiinteä komponentti | Ensimmäinen osa on kiinnitetty; {{ui:Tee siitä kiinnitetty osa}} muuttaa sen |
| Lisää komponentti | {{ui:Lisää kopio}} tai {{ui:Monista}} (toinen kopio) tai {{ui:Lisää}} (osatiedostosta) |
| Muokkaa osaa kokoonpanossa | {{ui:Muokkaa osaa}}, sitten {{ui:Takaisin}} |
| Törmäystarkistus | {{ui:Törmäys}} |
| Komponentin siirto liikkeen näkemiseksi | Vedä kiertyvän tai liukuvan nivelen kulma- tai siirtymäliukusäädintä; {{ui:Tarkista liike törmäysten varalta}} pyyhkäisee sen läpi. Osa ilman niveltä: **Siirto käsin** (nuolet vedettäväksi tai kirjoitetut arvot) |
| Mittaa / tarkasta | {{ui:Näkymät}}, sitten {{ui:Mittaa}} ({{key:M}}): etäisyydet, kulmat, säteet, pinta-alat; {{ui:Massaominaisuudet}} |
| Räjäytysnäkymä, osaluettelo | Kokoonpanossa, kun mitään ei ole valittu: **Räjäytysnäkymät** ja **Osaluettelo** oikeassa paneelissa |
| Massaominaisuudet | **Osa**-kenttä: tilavuus, pinta-ala ja koko fasetoidusta kiintokappaleesta (hieman pieni pyöreissä osissa). Ei massaa: materiaaleja ei ole vielä |
| Tallenna, Tallenna STEP-muodossa | {{ui:Tallenna}} lataa `.partcraft.json`-tiedoston; {{ui:Vie}} sisältää STL:n, 3MF:n, tarkan STEP:n (AP242 tai AP214), fasetoidun STEP:n, DXF:n ja PDF-piirustuksen |
| Tee piirustus osasta | {{ui:Piirustus}}: automaattinen A3-arkki kolmella näkymällä, isometrinen, yksi leikkaus, yksi yksityiskohta, datumit, muotoilukehykset ja pintakäsittelymerkit. Vain kokonaiskoot mitoitetaan |
| Keskipainikkeella vetäminen kiertää | **Vasen vetäminen** kiertää täällä. Keski- tai oikea vetäminen panoroi. Rulla zoomaa osoittimen kohdassa |
| Näkymän suunta, Normaali | {{ui:Näkymät}}-valikko; {{ui:Normaali}} valitulle pinnalle, tasolle tai luonnokselle |
| Zoomaa sovittamaan (F) | {{key:F}}, tai {{ui:Sovita}} (luonnoksessa {{key:F}} on Pyöristys-työkalu) |
| Oikean painikkeen valikot | Ei ole. Oikea vetäminen panoroi; luonnoksessa oikea klikkaus lopettaa viivaketjun |

:::tip
Jos kätesi tuntevat SolidWorksin, valitse {{ui:Asetukset}} › {{ui:PartCraft}} › {{ui:Valikot, näppäimet ja hiiri}}-kohdasta valikkotyyliksi {{ui:Muotoelementtipuu}}: valintanauha välilehdillä Muotoelementit, Luonnos, Pinnat, Arviointi, Piirustus, Kokoonpano ja Näkymä, keskipainike kiertää, {{key:Shift}} ja keskipainike panoroivat, ja vasen painike vain valitsee. Katso [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse).
:::

## Erot, joihin ihmiset kompastuvat

**Koko luonnos on profiili.** Pursotus ja kierto käyttävät jokaista suljettua silmukkaa luonnoksessa. Muotoelementille et voi valita yhtä aluetta tai yhtä ääriviivaa luonnoksesta. Käytä yhtä luonnosta muotoelementtiä kohden.

**Mitä luonnosta muotoelementti käyttää.** Muotoelementti käyttää juuri sulkemaasi luonnosta tai historiassa valittua. Kun mitään ei ole valittu, se ottaa uusimman luonnoksen, jota mikään muotoelementti ei vielä käytä. Jos saat väärän, valitse oikea luonnos ja valitse muotoelementti uudelleen.

**Muutokset tulevat voimaan kirjoittaessa.** Ei ole muotoelementtidialogia, jossa on OK ja Peruuta. Jokainen luku rakentaa uudelleen heti, ja {{key:Mod+Z}} on tie takaisin. Kumoamisluettelo kattaa luonnosmuokkaukset, muotoelementit ja asetukset yhtä lailla.

**Ylimääritystä ei sallita hiljaa.** Ohjattuja (referenssi)mittoja ei ole. Mitta, jonka muut relaatiot jo kiinnittävät, ilmoitetaan ylimääritettynä (”on jo päätelty. Poista se.”). Ristiriitainen mitta jättää geometrian koskematta ja muuttuu punaiseksi. Poista yksi tai kumoa.

**Pyyhkäisyjä ja loftteja ei ole vielä toteutettu; pyöristyksillä, viisteillä, kuorilla ja vetokulmilla on rajoituksia.** Tämä PartCraftin versio rakentaa jokaisen osan verkkoytimellä, ja tilarivin siru sanoo aina ”Verkkoydin”. Pyöristykset ja viisteet toimivat suorille reunoille kahden tasaisen pinnan välissä, ja kohdissa, joissa pyöristykset kohtaavat kulmassa, ne ovat viistettyjä eivätkä sulautettuja. Kuoret avautuvat, ja vetokulmat kallistavat vain tasaisia pintoja. Muotoelementit, jotka tarvitsevat tarkan ytimen, pysyvät valittavina, mutta sanovat ”ei vielä toteutettu” valittaessa. Katso [Verkkoydin](topic:solid-kernels) ja [Mitä ei ole vielä toteutettu](topic:not-built-yet).

**Kaksi painiketta nimeltä Pyöristys.** Luonnoksessa {{ui:Pyöristys}} ({{key:F}}) pyöristää luonnoksen kulman. Osassa Muotoelementit-ryhmän {{ui:Pyöristys}} pyöristää kiintokappaleen reunoja (tässä versiossa suoria reunoja kahden tasaisen pinnan välissä). Tässä versiossa ei ole pyyhkäisyä eikä loftia: katso [Mitä ei ole vielä toteutettu](topic:not-built-yet).

**Reiät tarvitsevat irrallisia pisteitä.** {{ui:Reikä}} poraa pisteisiin, jotka on tehty Piste-työkalulla. Ympyröiden keskipisteet ja viivojen päät eivät kelpaa.

**Läpi kaiken on vain leikkauksille.** Kohouma tarvitsee syvyyden. Päätyehtoja ”kärkeen / pintaan / seuraavaan asti” ei ole vielä.

**Kiintokappale on fasetoitu.** Verkkoydin rakentaa pyöreät pinnat tasaisista fasetoista, joten näkymä, tilavuudet sekä STL- ja 3MF-viennit koostuvat niistä. Osan paneelin **Kaarevuus** tekee niistä hienompia. Tarkka STEP-vienti ei ole: se kirjoittaa pyöreät pinnat todellisille pinnoilleen.

**Vain millimetrit.** Tuumayksikköasetusta ei ole vielä. Kerro tuumakoot luvulla 25.4, kun kirjoitat ne.

**Y on ylös.** Etutaso on sinua kohti ja Ylätaso katsoo osaan alaspäin, kuten odotat, mutta maailman ylöspäin osoittava akseli on Y. STL-, 3MF- ja tarkat STEP-viennit käännetään niin, että Z on ylös; fasetoitu STEP säilyttää Y:n ylöspäin.

**Liitokset ovat pintoja, eivät geometriaparien.** Nivel lähtee aina kahdesta tasaisesta pinnasta, jotka asetetaan pinta pintaa vasten. Tapille reiässä valitse tasainen pinta reiän ympäriltä ja tapin olkapää, aseta sitten **Keskitä** reiän akseliin ja tapin kierron akseliin. Niveliin yltämättömät osat pysyvät siinä, mihin ne lisättiin; niitä ei voi vetää. Silmukan niveleitä ei ratkaista.

**Tallentaminen on lataus.** Ei ole tiedostoa, jonka korvaat jatkuvasti. Jokainen tallennus on uusi tiedosto latauskansiossasi. Anna osalle nimi ensin ja säilytä tiedostot projektikansiossa.

**Ei kontekstivalikoita eikä komentojen hallintavälilehtiä.** Kaikki on työkalurivillä ja oikeassa paneelissa, ja työkalurivi muuttuu sen mukaan, mitä teet: luonnostyökalut näkyvät vain luonnoksessa, kokoonpanotyökalut vain kokoonpanossa.

**Näppäimet ovat yksittäisiä kirjaimia luonnoksessa.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} ja {{key:S}} valitsevat työkalut ilman muokkainta. Katso [Näppäimet ja hiiri](topic:keyboard).
