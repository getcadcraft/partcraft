---
title: Vapaamuotoiset pinnat (NURBS)
summary: Sileät käyrät ja pinnat osan rinnalla: loft, pyyhkäisy, käyräverkot, nelireunaiset paikat, sulautukset ja rajaukset; G0-, G1- ja G2-jatkuvuus mitattuna tarkoilla pinnoilla; kiintokappaleet yhdisteellä, vähennyksellä ja leikkauksella osaan; seepra- ja kaarevuusnäkymät; skannattuun dataan sovitetut pinnat virheen mittauksella sekä STEP- ja IGES-tiedostot. Tallentuu osatiedostoon.
keywords: nurbs, skannaus, käänteinen suunnittelu, sovitus, verkko pinnaksi, pistepilvi, stl, rajaus, rajattu, reikä, leikkaus, kiintokappale, kiintokappaleet, boolen, yhdiste, vähennys, leikkaus, sulje, suljettu, muunna, vapaamuotoinen, pinta, pinnat, b-spline, bspline, käyrä, spline, loft, pyyhkäisy, kisko, verkko, coons, paikka, sulautus, sovitus, jatkuvuus, g0, g1, g2, tangentti, kaarevuus, seepra, ohjauspisteet, solmut, aste, step, iges, luokan A, runko, tasoitus
from: 64ed5196
---

**Pinnat**-työtila tekee sileitä käyriä ja pintoja tuotteiden kuoriin, autojen kereihin ja veneiden runkoihin. Niissä käytetään NURBS-matematiikkaa, samaa kuin muut pintamallinnusohjelmat. Kaikki mitataan tarkoilla pinnoilla, ei koskaan näkemiesi kolmioiden perusteella. Mitat ovat millimetreinä kuten muu PartCraft.

Valitse **Pinnat** **Työtila**-valikosta. Työkalurivillä on {{ui:Käyrä}}, {{ui:Loft}}, {{ui:Pyyhkäisy}}, {{ui:Sovita}} ja {{ui:Seepra}}. Jokainen komento on oikealla olevassa paneelissa. Komento kertoo, mitä se vielä tarvitsee: napsauta käyriä tai pintoja näkymässä (lähellä reunaa tai päätä, kun se sitä pyytää) tai valitse ne luettelosta. Kirjoita pisteitä tai napsauta niitä osan pinnoilla (osan ulkopuolella ne osuvat maatasoon) ja paina Enter.

Käyrät ja pinnat tallentuvat osatiedostoon kiintokappaleen rinnalle. Ne eivät muuta osan piirteitä. Paneelilla on oma **Kumoa** ja **Tee uudelleen**, yksi askel komentoa kohden.

## Käyrät

- **Käyrä pisteiden läpi** kulkee jokaisen napsauttamasi pisteen läpi. **Käyrä ohjauspisteistä** seuraa sen sijaan pisteiden häkkiä.
- **Lisää solmu**, **Nosta astetta** ja **Laske astetta** muuttavat käyrän kuvausta siirtämättä sitä. Lasku kieltäytyy, jos käyrä liikkuisi toleranssin yli. **Rakenna käyrä uudelleen** antaa sille uuden ohjauspisteiden määrän ja kertoo, kuinka paljon se liikkui.
- **Sovita käyrä** saa yhden käyrän pään kohtaamaan toisen pään G0-suhteella (koskettaa), G1-suhteella (sama suunta) tai G2-suhteella (myös sama kaarevuus). **Sulautuskäyrä** lisää uuden käyrän kahden pään väliin, G1 tai G2.

## Pinnat

- **Loft** kahden tai useamman käyrän läpi, **Viivapinta** kahden välillä, **Pursota käyrä** ja **Pyöräytä käyrä**.
- **Pyyhkäisy yhdellä kiskolla** kuljettaa profiilin polkua pitkin kiertämättä sitä. **Pyyhkäisy kahdella kiskolla** pitää profiilin päät molemmilla kiskoilla. Pyyhkäisyt sovitetaan: tulos kertoo, kuinka lähellä todellista pyyhkäisyä se pysyi.
- **Pinta käyräverkosta** kulkee käyräruudukon läpi (jokainen käyrä risteää jokaisen muun kanssa kerran). **Paikka neljästä reunasta** täyttää neljä käyrää, jotka kohtaavat kulmissaan.
- **Sovita pinta** saa pintareunan kohtaamaan naapurinsa G0-, G1- tai G2-suhteella. **Sulautuspinta** lisää pinnan kahden reunan väliin.
- **Siirtymäpinta**, **Jatka pintaa** (pinta jatkuu kuten se oli menossa) ja **Uudelleenrakenna pinta**.

## Laadun tarkistus

**Jaetut reunat** -taulukko listaa jokaisen reunan, jonka kaksi pintaa jakaa. Se näyttää raon (mm), kulman niiden välillä (°) ja kaarevuushypyn (1/mm) sekä sen, tekeekö tämä reunasta G0-, G1- vai G2-reunan. Reuna, joka on huonompi kuin pyysit, näkyy **Ongelmat**-paneelissa **Sovita**-korjauksen kanssa. **Seepra**-raidat ja **kaarevuus**-värit tulevat tarkasta pinnasta. Raidat, jotka kulkevat katkeamatta reunan yli, tarkoittavat G1:tä. Raidat, jotka säilyttävät myös leveytensä, tarkoittavat G2:ta.

G0–G2 mitataan 33 pisteessä reunaa kohden. **G3:a ja ”luokan A” laatua ei mitata**, eikä niitä väitetä.

## Rajaa pinta

**Rajaus**-ryhmä leikkaa pinnan muuttamatta sen muotoa. Pinta säilyttää kaikki ohjauspisteensä, ja vain ääriviivan sisäpuoli näytetään, lasketaan ja kirjoitetaan. **Rajaa suorakulmioon** ja **Rajaa ympyrällä** toimivat pinnan osuudella (0–1) kussakin suunnassa, joten ne eivät tarvitse valintaa näkymässä. **Rajaa käyrällä** ottaa suljetun käyrän, joka makaa pinnalla. Se projisoidaan pintaan, ja se hylätään sanoin, jos käyrä on auki tai yli toleranssin päässä. Valitse **Leikkaa reikä** poistaaksesi ääriviivan sisäpuolen. Jätä pois säilyttääksesi vain sisäpuolen. Pinnalla voi olla yksi säilytettävä ääriviiva ja mielivaltainen määrä reikiä. Ääriviiva, joka leikkaa toisen, hylätään. **Poista rajaus** näyttää koko pinnan taas. Paneelin Kumoa peruu rajauksen kuten minkä tahansa muun askeleen.

STEP kuljettaa rajauksen pinnan reunoina ja IGES rajattuna pintana (kohde 144). Molemmat lukevat sen takaisin.

## Kiintokappaleet ja Boolen-operaatiot

**Kiintokappaleet**-ryhmä muuttaa pinnat suljetuiksi kappaleiksi ja yhdistää ne. Kiintokappale on täällä joukko paneelin omia pintoja, jotka yhdessä sulkevat tilavuuden. Sen pinnat pysyvät tarkkoina NURBS-pintoina rajauksineen.

- **Laatikkokiintokappale**, **Sylinterikiintokappale** ja **Pallokiintokappale** tehdään annetuista mitoista (mm). Laatikko on kuudesta litteästä pinnasta, sylinteri pyöreästä sivusta ja kahdesta litteästä päädystä ympyrään rajattuna, ja pallo on yhdestä pyöräytetystä pinnasta.
- **Kiintokappale pinnoista** ryhmittelee itse tekemäsi pinnat. Valitse ne, tai älä valitse mitään, jolloin käytetään jokaista näytettyä pintaa, joka ei vielä ole kiintokappaleessa. Pinnat ommellaan yhteen toleranssin sisällä. Jos ne eivät sulkeudu, mikään ei muutu, ja paneeli kertoo, kuinka monta reunaa jää auki ja kuinka lähellä niiden on kohdattava.
- **Yhdiste**, **Vähennä** (toinen kiintokappale otetaan pois ensimmäisestä) ja **Leikkaus** (vain se, mitä molemmat jakavat) ottavat kaksi kiintokappaletta. Napsauta kunkin pintaa näkymässä tai paina **Valitse** **Kiintokappaleet**-luettelossa. Valitse **Säilytä kaksi kiintokappaletta** pitääksesi ne tuloksen vieressä.

Boolen-operaatio pitää jokaisen pinnan omalla tarkalla pinnallaan ja leikkaa sen uusilla rajausääriviivoilla leikkausviivaa pitkin. Tuloksen rivi antaa mitatut luvut: kuinka paljon kiintokappalemoottorin pisteiden piti siirtyä istuakseen tarkoille pinnoille (ei koskaan yli toleranssin), kuinka lähellä leikkauspisteet ovat molempia pintoja (yleensä muutama miljoonasosa millimetriä), tilavuuden ja sen, sulkeutuvatko uudet pinnat uudelleen, kun ne ommellaan tarkoista pinnoistaan. Tilavuudet mitataan kolmioilla toleranssin sisällä (0.05 mm, ellei toista ole asetettu), joten pallon tai sylinterin tilavuus näkyy hieman tarkkaa pienempänä. Pienempi toleranssi on lähempänä. Boolen-operaatio, jota ei voi tehdä siististi (kappaleilla ei ole mitään yhteistä, ääriviiva leikkaisi itsensä), hylätään sanoin eikä muuta mitään. Yksi Boolen-operaatio on yksi askel paneelin **Kumoa**-toiminnossa.

**Pura ryhmitys** -toiminto pitää pinnat tavallisina pintoina. Roskakori poistaa kiintokappaleen ja sen pinnat.

## Pyöristykset ja paksuntaminen

**Pyöristys pintojen välillä** pyöristää saman kiintokappaleen kahden pinnan kohtaamisen reunan. Valitse kaksi pintaa, näkymästä tai **Valitse**-napilla luettelossa, ja kirjoita **säde**. Jos säde muuttuu reunaa pitkin, kirjoita myös **säde lopussa** (0 säilyttää yhden säteen). Säteen kokoinen pallo vierii reunaa pitkin koskien molempia pintoja. Pyöristys on tarkka ympyränkaari, joka pallosta jää kussakin pisteessä, ja se on yhdistetty yhdeksi pinnaksi. Kaksi pintaa rajataan niistä kohdista, joihin pallo koskee. Ulkoreuna menettää materiaalia, sisäkulma saa sitä. Tuloksen rivi kertoo mitatut luvut: kuinka kaukana pyöristyspinta on vierivästä pallosta pisteiden välillä, joista se rakennettiin (pisteitä lisätään, kunnes se on neljäsosan toleranssin sisällä), suurimman kulman pyöristyksen ja kunkin pinnan välillä kosketusviivoja pitkin sekä samat luvut kuin Yhdisteessä. Säde, joka ei mahdu (pallo jättäisi pinnan tai pinta kaartuisi tiukemmin kuin säde), hylätään nimeämällä pinta. Mikään ei muutu.

**Pyöristä useita reunoja** pyöristää monta reunaa yhdellä askeleella. Valitse ensimmäisen reunan kaksi pintaa, sitten seuraavan reunan kaksi pintaa ja niin edelleen. Pinta voi olla useassa parissa, esimerkiksi laatikon yläpinta neljässä niistä. Kaikki reunat saavat kirjoittamasi säteen. Kukin pyöristys lasketaan kiintokappaleelle sellaisena kuin se oli, ja sitten ne leikataan peräkkäin, joten järjestyksellä ei ole väliä. Kun kaksi pyöristettyä reunaa kohtaa kulmassa, jonka muut reunat pysyvät teräväreunaisina, kaksi pyöristystä kulkevat toisiinsa kiinni leikkauskäyrää pitkin (taite). Kun kolme pyöristettyä ulkoreunaa kolmelta litteältä pinnalta kohtaa yhdellä säteellä ja pinnat ovat suorassa kulmassa toisiinsa nähden, kulma on yksi **pallopaikka**, joka tangenttaa kaikki kolme pyöristystä. Poista **Kulmat**-valinta saadaksesi taitetun kulman. Reunan on oltava vähintään kaksinkertainen säteeseen nähden, kun sen molemmat päät ovat tällaisia kulmia. Tuloksen rivi kertoo, kuinka monta reunaa pyöristettiin ja miten kulmat onnistuivat. Sisäreunat voi pyöristää myös yhdessä, mutta tulos, joka ei sulkeudu uudelleen, vain raportoidaan (rivi kertoo sen), joten tarkista se.

**Paksunna kiinteäksi kappaleeksi** antaa pinnalle paksuuden. Valitse se, kirjoita **paksuus** ja valitse **Toinen puoli** kasvattaaksesi sitä toiseen suuntaan. Siirretty pinta sovitetaan pintaan ja mitataan sitä vasten. Tuloksen rivi antaa suurimman eron paksuudesta. Seinät seuraavat jokaista reunaa ja jokaista rajausääriviivaa. Jos pinta kaartuu tiukemmin kuin paksuus sillä puolella tai jokin muu sen osa on paksuutta lähempänä, paksuntaminen hylätään nimeämällä pinta ja paikka, eikä mikään muutu.

## Muunna kiintokappale osaan

**Muunna** (Pinnat-työkalurivillä) tai **Muunna osaan** **Kiintokappaleet**-luettelossa tekee kiintokappaleesta osan kappaleen samalla tavalla kuin avattu STL tekee. Valitse kiintokappale, päätä, lisätäänkö se **lisätään** osaan, **leikataanko** siitä vai **leikkaus**-toiminnolla sen kanssa, ja aseta toleranssi (kuinka kaukana kolmiot saavat olla tarkoista pinnoista). Se on yksi askel osan Kumoa-toiminnossa, ja se ilmestyy piirrelistaan tuontina, joka on nimetty kiintokappaleen mukaan. Osa säilyttää kolmiot, joten se avautuu ja rakentuu uudelleen ilman pintoja. Tarkka kiintokappale pysyy Pinnat-osiossa, joten voit muuntaa sen uudelleen muutoksen jälkeen.

## Tiedostot

Vie **STEP** (AP242) tai **IGES** käyrät ja pinnat täsmälleen sellaisinaan: B-spline-käyrät ja -pinnat, ei mitään muunnettuna kolmioiksi. Jokainen pinta on oma pintansa rajauksineen. Kiintokappale kirjoitetaan yhtenä suljettuna kuorena, jossa jokainen reuna on jaettu kahden pinnan kesken, kuten muut CAD-ohjelmat odottavat. Tilarivi kertoo, kuinka monta kiintokappaletta lähti näin. IGES:ssä sama kiintokappale on yksi monistoinen kiintokappale B-rep (kohde 186 suljetulle kuorelle 514, pinnat 510, silmukat 508, yksi reunalista 504 ja yksi kärkipistelista 502). Kiintokappale, jonka pinnat eivät pariudu reunoittain, kirjoitetaan erillisinä pintoina, ja rivi kertoo sen. **Tuo…** lukee tällaisen kiintokappaleen takaisin kiintokappaleena sekä STEP-tiedostosta että IGES-tiedostosta.

## Tasoita rungon viivat

**Tasoita** (Pinnat-työkalurivillä) mittaa jokaisen käyrän sen tarkalla muodolla: käännepisteet (missä se vaihtaa kaareutumissuuntaa), suurimman kaarevuuden, kaarevuushypyt solmuissaan ja sen karheuden. Se rakentaa uudelleen ne käyrät, joissa on käännepiste tai hyppy, pienimmällä ohjauspisteiden määrällä, joka pysyy antamasi toleranssin sisällä eikä lisää käännepistettä. Piirrä poikkileikkaukset, vesiviivat ja pystysuunnat käyrinä, tasoita ne, tee runko **Loftilla** poikkileikkausten läpi ja tarkista se **Seepralla**. Tasoittamattomat käyrät näkyvät myös **Ongelmat**-paneelissa **Tasoita tämä käyrä** -korjauksen kanssa. Käyrä, jonka pitää vaihtaa suuntaa (S-muotoinen poikkileikkaus), säilyttää yhden käännepisteensä. Rungon syrjäytys, keskipisteet ja kallistusvarret tulevat kiinteästä osasta: katso hydrostatiikkatyökalu.

## Pinnat skannauksesta (käänteinen suunnittelu)

Avaa osa, joka sisältää skannatun verkon (avattu STL tai muunnettu kappale). Valitse **Pinnat** **Työtila**-valikosta ja **Skannaus**-ryhmästä **Sovita pinnat skannaukseen**. Osan rakennettu verkko on skannaus. Työkalu etsii **tasoja**, **sylintereitä**, **palloja** ja **kartioita**, eli tarkkoja pintoja, joista koneistettu osa on tehty. Kukin rivi näyttää löytämänsä säteen tai puolikulman. Se löytää **pyöristyksiä** (pyöristetyt reunat ja kulmat: pieni sylinteri tai pallo, joka kulkee tangentiaalisesti kahteen tai useampaan muuhun pintaan, näytettynä säteellä ja niiden pintojen kanssa, joihin se liittyy), **reunapyöristyksiä** (torus: pyöristetty reuna, jossa litteä pinta kohtaa sylinterin tai kartion, näytettynä säteellä ja rengassäteellä) ja **muuttuvia pyöristyksiä** (pyöristetty reuna, jonka säde muuttuu pitkin sitä, näytettynä kunkin pään säteellä). Se sovittaa **yhden vapaamuotoisen paikan** sileään, loivasti kaarevaan kappaleeseen ja leikkaa jokaisen pinnan sen skannauksen osan ääriviivaan, josta se tuli, joten reiät ja kulmat säilyvät.

Asetukset ovat: **toleranssi** (kuinka kaukana, mm, skannauspiste saa olla tasosta tai sylinteristä ja silti kuulua siihen, sekä vapaamuotoisen paikan tavoite), **pienin kappale** (osuus pinta-alasta) ja **enimmäismäärä pintoja**. Sama skannaus ja samat asetukset antavat aina samat pinnat.

Tulos on taulukko, yksi rivi pintaa kohden: sen laji, kuinka monesta kolmiosta se tuli, ja **mitattu virhe skannauksesta pintaan** (rms, suurin ja osuus pisteistä toleranssin sisällä). Mitatut pisteet ovat skannauksen kärkipisteitä ja kunkin kolmion keskipiste. Virhettä ei mitata toiseen suuntaan (pinta skannaukseen), joten pinta, joka ulottuu skannauksen yli, ei näy. Taulukon alla oleva huomautus kertoo myös, kuinka suuri osa pinta-alasta oli liian pieni sovitettavaksi. Näkymässä skannauspisteet väritetään **poikkeamakartalla**: sininen pinnalla, vihreä puolivälissä toleranssia ja punainen toleranssissa tai sen yli. Poista **Näytä poikkeamakartta** -valinta piilottaaksesi sen. Osat, jotka taittuvat takaisin itseensä (esimerkiksi suljettu putki, joka sovitetaan vapaamuotoisilla paikoilla), luetellaan sovittamattomina, eikä niitä pakoteta yhdeksi pinnaksi.

**Ompele** pinnat kiintokappaleeksi ompelee yhteen jokaisen näytetyn pinnan, joka ei vielä ole kiintokappaleessa, yhdeksi suljetuksi kiintokappaleeksi. Skannauspinnat kohtaavat vain skannauksen oman virheen rajoissa, joten se kokeilee pienintä liitosetäisyyttä, joka sulkee. Se ei ylitä asettamaasi **ompeluetäisyyttä** ja hylkää sanoin, jos pinnat eivät sulkeudu. Se ei koskaan paikkaa rakoa. Laatikko pyöristetyin reunoin ommellaan, kun sen pyöristykset löydettiin omina pintoinaan. Tulokseen tulee liitosetäisyys, joka sulkeutui. Kiintokappale toimii sen jälkeen Yhdisteen, Vähennyksen, Leikkauksen ja **Muunna osaan** -toiminnon kanssa.

Mitä se ei tee: **reunapyöristys** (torus) etsitään vain jo löydetyn sylinterin tai kartion akselin ympäriltä. **Muuttuva pyöristys** etsitään vain melko suoran reunan suuntaisesti, sillä sen leikkaukset on tehty neliöön yhteen suuntaan. Muualla ne tulevat vapaamuotoisina paikkoina, kun ne ovat riittävän sileitä, ja jätetään pois muuten. Pallot, kartiot ja pyöristykset löydetään satunnaisotannalla, joten hyvin pieni (muutama kolmio) voi jäädä huomaamatta. Poikkeamakartta näyttää etäisyyden skannauksesta pintoihin, ei toiseen suuntaan. Yli 300 000 kolmion skannaukset hylätään täällä. Täyden kierroksen sylinterin pinnat leikataan reikien ympäriltä, ja sauma on siinä kohdassa, jossa ei ole reikää. Tarkista jokainen pinta skannaustasi vasten ennen kuin luotat siihen.

## Ei vielä toteutettu

Kaarevien pintojen kulmassa tai eri säteillä kohtaavien reunojen pyöristys (kärkisekoitus); pyöristys pintojen välillä, jotka eivät kohtaa; sisäpyöristys, joka päättyy vinoon tai kaarevaan pintaan; Boolen-operaatiot ja pyöristykset, jotka lasketaan pinnoilla ilman kolmioita (täällä kiintokappalemoottori toimii kolmioilla toleranssin sisällä, ja jokainen piste asetetaan sitten takaisin tarkoille pinnoille); muunnettu kappale, joka seuraa pintoja, kun ne muuttuvat; pinnan rajaaminen toisella pinnalla Boolen ulkopuolella; reikien täyttäminen, joissa on yli neljä sivua; käyrien projisointi pinnoille.
