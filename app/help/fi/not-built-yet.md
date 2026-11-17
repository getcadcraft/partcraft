---
title: Mitä ei ole vielä toteutettu
summary: Kaikki, mitä tämä PartCraft-versio ei vielä tee, kiertyvistä pyyhkäisyistä tuumanäyttöön, piirustusmitoituksiin ja alikokoonpanoihin, ja mitä tehdä sen sijaan tänään.
keywords: puuttuu, ei vielä, rajoitukset, rajat, tiekartta, tarkka ydin, pyöristys, viiste, kuori, pyyhkäisy, loft, STEP-tuonti, simulointi, valmistus, kiertyvä pyyhkäisy, päädyn tangentti, pinnan pyöristys, yhtälöt, tuumat, piirustusmitoitus, alikokoonpanot, pilvi, tabletti, puhelin
from: 9b868162
---

PartCraft on varhainen versio. Tämä sivu listaa, mitä se ei vielä tee, jotta et etsi sitä turhaan, ja mitä tehdä sen sijaan tänään. Mikään tässä ei ole päivätty.

## Vaatii tarkan ytimen

Tämä versio rakentaa jokaisen osan verkkoytimellä (katso [Verkkoydin](topic:solid-kernels)). Kaikki alla oleva vaatii tarkan geometriaytimen, jota tässä versiossa ei vielä ole. Tallennetut osat, joissa on näitä piirteitä, avautuvat yhä: piirteet jäävät historiaan merkittyinä ei vielä toteutetuiksi ja säilyvät tallennettaessa.

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| {{ui:Pyöristys}} ja {{ui:Viiste}} pyöreillä reunoilla; pyöristykset, joiden säde muuttuu reunaa pitkin; pyöristykset, jotka sulautuvat sujuvasti toisiinsa (verkkoydin viistää ne) | Pyöristys ja viiste toimivat suorilla reunoilla litteiden pintojen välillä. Pyöristä muut kulmat luonnoksessa ennen pursottamista ({{ui:Pyöristys}} luonnoksessa, {{key:F}}) |
| {{ui:Kuori}}, kaarevien pintojen avaaminen; seinät eri paksuisina | Avaa litteät pinnat. Lisää materiaalia pursotuksilla, kun seinän on oltava paksumpi |
| {{ui:Pyyhkäisy}}, {{ui:Loft}} ja {{ui:Vetokulma}} kaarevilla pinnoilla; pursotus pintaan, seuraavaan pintaan tai kärkipisteeseen; kartiomaiset pursotukset | Pursota tai pyöräytä, tarvittaessa askelittain. Pursota haluamasi mitatun syvyyteen |
| {{ui:Ripa}}, {{ui:Perusprofiili}}, {{ui:Särmälaippa}} ja litteät kuviot | Pursota levy tai ripan profiili |
| Pinnat: {{ui:Muoto}}-muodon viimeistely osaksi, {{ui:Paikka}}, {{ui:Loft-pinta}}, {{ui:Gordon-pinta}}, {{ui:Ompele}}, {{ui:Paksunna}}, {{ui:Siirtymäpinta}}, {{ui:Jatka pintaa}}, {{ui:Typistä pinta}} | Ei saatavilla |
| Useita kappaleita: {{ui:Yhdistä}}, {{ui:Siirrä kappale}}, {{ui:Skaalaa kappale}}, {{ui:Polkutoisto}} ja piirteet, jotka tekevät uuden kappaleen | Yksi kiintokappale. Toistot ja peilaus kopioivat piirteitä |
| Luonnokset, tasot, akselit ja pisteet pinnoilla, jotka vain tarkka ydin löytää (pyöristyksen tekemä pinta, reiän seinä, tuodun kiintokappaleen pinta) | Luonnostele perustasoille, referenssitasoille sekä pursotusten ja pyöräytysten litteille pinnoille |
| Generatiivisen suunnittelun tulos avattuna osana tai lisättynä siihen (siitä tulee tuotu kiintokappale) | Lataa tulos STL- tai STEP-muodossa |
| Avatun STEP-tiedoston kaarevien pintojen muokkaus tarkkoina pintoina; tarkka STEP-spline-, pyyhkäistyjen ja pyöräytettyjen pintojen esitys STEP-tiedostosta; spline-reunat; mallinnetut kierteet; STL-, OBJ- ja 3MF-kappaleet sekä kokoonpanot; STEP muille osamallinnusohjelmille | {{ui:Avaa}} lukee STEP:n kolmioina ja säilyttää tiedoston litteät pinnat, sylinterit, kartiot, pallot ja toruksen viennin varalta ([Avaa STEP-tiedosto](topic:import-step)). {{ui:Vie}} › {{ui:STEP AP242 (tarkka kiintokappale)}} kirjoittaa jokaisen analyyttisen pinnan tarkasti ja säilyttää ne fasetteina ([Vienti](topic:export-files#for-other-cad-programs-step)). Toisen osamallintimen makro kirjoittaa yhä |
| Todelliset kaaret piirustusnäkymissä | Näkymät ja leikkausnäkymät piirretään fasetteista |
| Tarkat tilavuudet, pinta-alat ja etäisyydet | {{ui:Mittaa}} antaa fasetoidun kiintokappaleen luvut, jotka ovat hieman liian pieniä pyöreillä osilla. Tarkempi **Käyrät**-asetus tuo ne lähemmäs |

Jotkin alla olevien taulukoiden rivit ehdottavat näistä piirteistä jotakin muuta tapaa. Ne koskevat vasta, kun tarkka ydin palaa.

## Piirteet

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Pinnan pyöristykset, täysi pyöristys, pyöristykset, joiden säteet on asetettu reunan pisteisiin | Vakio- tai lineaarisesti muuttuva {{ui:Pyöristys}}; useita pyöristyspiirteitä |
| Kuoret eri seinänpaksuuksilla | Yksi {{ui:Kuori}}-paksuus. Lisää materiaalia pursotuksilla, kun seinän on oltava paksumpi |
| Vetokulma spline-pinnoilla (vapaamuotoisilla pinnoilla) | {{ui:Vetokulma}} toimii litteillä, sylinterimäisillä ja kartiomaisilla pinnoilla |
| Kiertyvät pyyhkäisyt, ohutseinä- ja pintapyyhkäisyt; päädyn tangentti Loft-piirteessä; loft yhdellä ohjainkiskolla; spline-polut | {{ui:Pyyhkäisy}} kiinteällä suunnalla tai päädyn skaalauksella; loft kahdella tai useammalla ohjainkiskolla: katso [Pyyhkäisy, loft ja vetokulma](topic:sweep-loft-draft) |
| Ripat kaarista tai splineistä; ripat, jotka kasvavat neliön muotoon luonnokseen nähden (pääkuvasta); vetokulma ripoissa; useita ripoja yhdestä luonnoksesta | {{ui:Ripa}} yhdestä viivaketjusta ripan omassa tasossa: katso [Ripat ja vahvikkeet](topic:rib) |
| ”Kunnes” kaarevaan pintaan; ”kunnes seuraava” pysähtyen kaarevaan pintaan | Litteään pintaan tai referenssitasoon asti |
| Vastaporatut reiät, tuuman- ja putkikierteet, kartiomaiset kierteet, kierteen loppuajot ja viistetyt kierteen alut | Vastaporaus pienellä syvyydellä. ISO-metrinen ja trapetsikierre, kosmeettinen tai mallinnettu: katso [Kierteet akseleissa ja porauksissa, piirretty tai mallinnettu](topic:threads) |
| Ohutpiirteen pursotukset | Piirrä profiilin molemmat seinät |
| Toistokopiot, joita ohitetaan yksitellen; täyttökuviot | Käytä erillisiä piirteitä. Toistot käyrää pitkin: {{ui:Polkutoisto}} |
| Toistojen kopiointi, peilit, pyöristykset, viistot, kuoret ja tuodut kiintokappaleet | Kopioi luonnos tai piirre, jolle ne perustuvat, tai toista se |
| Tarkka (G1) tangentti muodon erikoispisteissä; muodon paikkojen yhdistäminen suuremmiksi pinnoiksi | Nosta muodon tasoa: approksimoidut paikat pienenevät. Katso [Vapaamuotoiset muodot Muodolla](topic:form-surfaces) |
| Muoto, joka koostuu useista erillisistä suljetuista kappaleista yhdessä piirteessä; siltoja muotojen välillä | Yksi suljettu kappale per Muoto-piirre. Yhdistä ne Yhdistä-toiminnolla |
| Pintakappaleiden valitseminen näkymästä (paitsi rajaus- ja paikkapisteet); pintapyöristykset; rajauksen poisto; G2-paikat; Gordon-pinnat, jotka tangenttaavat kaarevia naapureita (tasoihin ja litteisiin pintoihin tangentti on toteutettu) | Valitse ne nimeltä osan paneelista. Paksunna ensin, sitten pyöristä kiintokappale |
| Kappalelista historiassa; piilotettujen kappaleiden jättäminen pois vienneistä | Nimeä ja piilota kappaleita osapaneelin kappaleluettelossa. Poista tai tukahduta kappaleen tehnyt piirre, jotta se jää pois |
| Ei-yhtenäinen skaalaus, joka pitää sylinterit ja kartiot analyyttisinä; ei-yhtenäinen skaalaus siirtymäpinnoille | {{ui:Skaalaa kappale}} tekee kaarevista pinnoista suljettuja B-splinejä (0,0000004 mm:n sisällä). Yhtenäinen skaalaus pysyy tarkkana |
| Pintakappaleiden yhdistäminen; Minkowski-summat | {{ui:Ompele}} tai {{ui:Paksunna}} ensin, sitten {{ui:Yhdistä}} |
| Toleranssianalyysi: toleranssiketjut, jotka kääntyvät kulmissa (2D- ja 3D-vektorisilmukat); herkkyydet laskettuna geometriasta; Monte Carlo muilla jakaumilla; kokotoleranssit luonnosmitoituksissa; bonustoleranssi materiaaliehdosta | {{ui:Toleranssiketju}} kokoonpanossa: yksi suunta, pahin tapaus ja RSS, toleranssit kirjoitettuina tai piirustuksen yleistoleranssista tai GD&T-kehyksistä. Katso [Toleranssiketjut](topic:tolerance-stackup) |
| Asettelu: leikkausjärjestys ja sisääntulot; yhteisten reunojen leikkaaminen kerran; osat, jotka on pidettävä yhdessä; rullien jäännöspalat; varastot, jotka ovat yhteisiä projektien välillä | {{ui:Asettele litteät osat levyille…}} välien, reunavarojen, kierrojen ja kuitusuunnan kanssa: katso [Asettele litteät osat levyille](topic:nest-flat-parts). Jäljelle jäävät levyt säilytetään ja käytetään ensin: katso [Säilytä ja käytä uudelleen ylijäämät](topic:nest-offcuts). Suunnittele leikkaus leikkurin omassa ohjelmistossa |
| Levytyö: hemmat, jogit, mitra- ja ääriviivalaipat; laipat kaarevissa reunoissa tai taivutetun perusprofiilin pinnoilla; luonnostellut taivutukset; kulmasulkeet; muotoilutyökalut; kiintokappaleen muuntaminen levytyöksi; taivutetun perusprofiilin litteä kuvio, jossa on leikkauksia; taivutustaulukot | {{ui:Perusprofiili}} (levy tai taivutettu profiili), {{ui:Särmälaippa}} levyn suorille reunoille taivutusvapauksilla sekä litteä kuvio K-kertoimella: katso [Levytyö](topic:sheet-metal) |
| Vetokulma-analyysi kokoonpanoissa; erotuspinnan löytäminen; seinämänpaksuusanalyysi | {{ui:Vetokulma-analyysi}} osalle Suunnittelussa: katso [Tarkista vetokulma valu- ja muottityössä](topic:draft-analysis). Avaa jokainen kokoonpanon osa tarkistaaksesi sen |

## Luonnokset

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Ellipsit, tangenttikaaret, koonisektiot, splinet kiinteällä asteella tai painoilla (NURBS) | Splinet (kuutiolliset), kaaret ja ympyrät tangenttisuhteilla |
| Piste splinellä (suhde), kaarevuussuhteet (G2) | Aseta splinen oma piste kohtaan, jonka läpi sen on mentävä |
| Splinien siirtymäkopiot, jotka seuraavat myöhempiä muutoksia; siirtymät ketjuista, joissa on teräviä spline-kulmia | Siirrä uudelleen muutoksen jälkeen. Pyöristä kulma ensin |
| Toistokopiot, jotka pysyvät kytkettyinä alkuperäiseen; toistot käyrää pitkin | Toista uudelleen muutoksen jälkeen |
| Vapaamuotoisten tai kallistettujen ympyränmuotoisten reunojen projisointi; projisoitu geometria, joka seuraa osaa | Projisoi suorat ja yhdensuuntaiset ympyräreunat, sitten mitoita |
| Ohjattavat (viite-) mitoitukset | Lue koot paneelista tai osan tiedoista |
| Samalla suoralla -suhteet | Yhdensuuntainen 0 etäisyydellä |
| Liittäminen toiseen ohjelmaan (järjestelmän leikepöytä) | Vie DXF, STEP, STL tai 3MF |
| Kaarien, suhteellisten tai napakoordinaattien kirjoittaminen | Kirjoita viivoja ja ympyröitä. Piirrä kaaret Kaari-työkalulla |
| Geometrian valitseminen ilman osoitinta | Vaatii napsautuksen tai kosketuksen |

## Parametrit ja yksiköt

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Konfiguraatiot, jotka vaihtavat materiaaleja; CSV-suunnittelutaulukko, joka kytkee piirteitä pois | Konfiguraatiot asettavat parametreja ja kytkevät piirteitä päälle ja pois: katso [Konfiguraatiot ja suunnittelutaulukot](topic:design-tables). `partcraft variants` rakentaa tallennetut konfiguraatiot nimellä, myös pois kytketyt piirteet: katso [Tee varianttipaketti konfiguraatioistasi](topic:variant-pack) |
| Yhtälöt uusimpien piirteiden omilla paneeleilla (taso, pyyhkäisy, vetokulma ja vastaavat) | Kirjoita ne skriptiin tai `partcraft set`-komennolla ([Skriptit ja komentorivi](topic:scripts-and-cli)) |
| Osa näytettynä tuumina | Koot näkyvät millimetreinä. Kirjoita `2in` lukukenttään tai lausekkeeseen, ja siitä tulee 50.8 |

## Tiedostot

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Tuodun STEP-kiintokappaleen omien piirteiden muokkaus (se tulee ilman historiaa) | Lisää tai leikkaa materiaalia omilla piirteilläsi |
| Värien, nimien, kokoonpanorakenteen ja PMI:n lukeminen STEP:stä | Ei saatavilla |
| glTF-, OBJ-, IGES- ja Parasolid-vienti; 3D-osan DWG (vain varianttipaketti kirjoittaa DWG:n: piirustusarkin) | STL tai 3MF verkoille; STEP kiintokappaleille; DXF 2D:lle |
| IGES-, DXF- tai muiden ohjelmien omien tiedostojen avaaminen (`.3dm`-tiedostot avautuvat yhtenä kappaleena: [Avaa .3dm-malli kiinteänä kappaleena](topic:open-3dm-files)) | Pyydä STEP-tiedostoa tai suljettua STL-, OBJ- tai 3MF-verkkoa: [Avaa STL, OBJ tai 3MF](topic:open-meshes) |
| Kokoonpanorakenne (puu osien nimillä) viedyssä STEP:ssä | Kokoonpano-STEP on yksi yhdiste sijoitetuista kiintokappaleista |
| Tallentaminen valitsemaasi kansioon ilman selaimen latausta | Ota käyttöön ”kysy, minne tallennetaan” selaimen latausasetuksissa |

## Piirustukset

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Mitat kolmen kokonaismitan lisäksi (reikien koot, sijainnit, kokotoleranssit) | Merkitse PDF tai vie DXF ja mitoita 2D-CAD-ohjelmassa |
| Yli yksi leikkaus tai detalji; linjatut, katkaistut ja apunäkymät | Yksi leikkaus ja yksi detalji piirustusta kohden |
| Vapaa teksti, muistiinpanot ja taulukot arkilla (paitsi nimi- ja revisiolohkot) | Viimeistelymerkintä tai PDF:ään lisätty teksti |
| Ensimmäisen kulman projektio, liikkuvat näkymät, pystysuuntaiset arkit | Kolmas kulma, automaattinen asettelu, vaaka-arkit A4–A0 ja ANSI A–E |
| Elävä leikkausnäkymä: useita tasoja tai leikkauslaatikko kerralla, leikkauksen ympärillä oleva ääriviiva, leikkauksen tallentaminen tiedostoon | Yksi taso kerrallaan kohdasta {{ui:Näkymät}} › {{ui:Leikkausnäkymä}}. Katso [Katso sisään leikkausnäkymällä](topic:section-view) |
| Kokoonpanopiirustukset, joissa on enemmän näkymiä, mittoja tai siirrettäviä pallomerkkejä | Yksi isometrinen (tai räjäytetty) näkymä automaattisilla pallomerkinnöillä ja osaluettelo |
| GD&T- ja viimeistelymerkintöjen kopiointi ja liittäminen | Sijoita kukin Datum-, Kehys- tai Viimeistely-työkalulla |
| Käsikirjat: STEP-tiedostot Illustraten {{ui:Toisesta tiedostosta…}}-toiminnossa, malli suoraan ModelCraftista tai BimCraftista, kuvat polunjäljittäjän laadulla, vuorovaikutteinen 3D PDF:n sisällä | Avaa STEP Suunnittelussa ja aloita käsikirja {{ui:Avoimesta osasta}}. Tallenna malli glTF-muodossa (.glb). PNG-kuvat 3D-näkymästä. Vuorovaikutteinen 3D-tiedosto: katso [Aloita käsikirja Illustratessa](topic:illustrate) |

## Kokoonpanot

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Vaihde-, tanko-, kampi- ja ruuvinivelet; pallonivel rajoitettuna kartioon; nivelet kaarevilla pinnoilla tai pisteiden välillä | Jäykät, kierto-, liukuva-, sylinterimäiset, tasomaiset, pallo- ja tappi-urapelisivelet litteillä pinnoilla, kukin arvo omilla rajoillaan: katso [Rakenna kokoonpano](topic:build-assembly) |
| Räjäytysvaiheet, jotka kääntävät osia, ja osien raahaaminen, joita nivelet sijoittavat | Suorat räjäytysvaiheet. Poista nivel siirtääksesi osan käsin |
| Alikokoonpanot | Vain yksi osatason kerros |
| Vaihteet, kammet, kosketus | Ei saatavilla |

## Valmistus

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| 3D-karkeistus kaarevilla pinnoilla, 3D-adaptiivinen raivaus, jäännöstyöstö; vesiviiva-, kynä-, säteittäinen ja spiraalinen viimeistely; adaptiiviset kierrokset kaarina | 2.5-akselinen pinta, tasku, 2D-adaptiivinen, ääriviiva, pora ja viisto: katso [Tee työstöradat ja G-koodi](topic:manufacture). Koko mallin Parallel- ja Scallop-viimeistely: katso [3D-viimeistely](topic:finish-3d) |
| 4- ja 5-akseliset työstöradat, sorvaus, probing | Aseta yksi puoli kerrallaan työkalun akseli Asetus-välilehdellä |
| Pidikkeen ja varren törmäystarkistukset | Seuraa urapituusvaroituksia ja tarkista ohjaimesi simulaattorissa |
| Probing, työkalun käyttöiän ja aliohjelmasyklit, 4. ja 5. akselin sekä sorvikoodit postissa; muiden ohjelmien postitiedostojen lataaminen | Kirjoita tai muuta postiprosessori PartCraftin omassa muodossa: katso [Muokattavat postiprosessorit](topic:post-processors) |
| Tuumakoodi (G20) | Vain millimetrit (G21) |

## Simulointi ja generatiivinen suunnittelu

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Epälineaariset tutkimukset: myötääminen, suuret taipumat, osien välinen kosketus, väsyminen | Lineaarinen staattinen ja luonnontaajuudet: katso [Tarkista jännitys ja taipuma](topic:simulation). Pidä varmuuskerroin selvästi yli 1:n |
| Epälineaarinen nurjahdus (alkuvirheet, nurjahdus jälkeen, läpihyppy) | Lineaariset nurjahduskuormakertoimet suurella marginaalilla: katso [Lämpö, lämpöjännitys ja nurjahdus](topic:thermal-and-buckling) |
| Säteily pintojen välillä (näkymäkertoimet), kosketusvastus, lämpötilariippuvat materiaalit, hitaus lämpöjännityksessä (lämpöiskun aallot) | Säteily ympäristöön, tasainen tai kvasistaattinen lämpöjännitys ajan yli, vakio-ominaisuudet: katso [Lämpö, lämpöjännitys ja nurjahdus](topic:thermal-and-buckling) |
| Automaattinen tarkentaminen transienttiin lämpöön ja lämpökuormaa sisältäviin tutkimuksiin; verkon karkeuttaminen, kun virhe on pieni; tavoite paikallisessa suureessa (paikallinen huippujännitys yhdessä kohdassa) | **Tarkenna automaattisesti** staattisille, nurjahdus-, luonnontaajuus- ja tasaisen tilan lämpötutkimuksille koko osan virheen perusteella: katso [Tarkista jännitys ja taipuma](topic:simulation). Muuten pienennä elementtikokoa |
| Laakeri- ja pulttikuormat, etäisyysvoimat, momentit, jouset, ennalta määrätyt siirtymät | Voimat ja paineet pinnoilla, painovoima. Kiinteät ja kitkattomat pinnat |
| Kokoonpanojen simulointi; materiaalit, jotka vaihtelevat suunnan mukaan (tulostuskerrokset, komposiitit) | Yksi osa, yksi isotrooppinen materiaali |
| Useita säikeitä tetraedrisiin tutkimuksiin, lämmönsiirtoon ja generatiiviseen suunnitteluun; säikeitä sivulla, joka ei ole cross-origin-eristetty | Voksel-tutkimukset, nurjahdus, jännitys ajan yli ja laminaarinen virtaus käyttävät säikeitä, missä sivu sallii: katso [PartCraftin asetukset](topic:settings) |
| Turbulentti virtaus suunnittelutarkkuudella (Spalart–Allmaras-malli on mukana kokeellisena: putkikitka 30–34 % liian suuri, takaisinvirtauksen kiinnittyminen 21–39 % liian lyhyt; suunniteltu: hienommat solut seinien lähellä); lämpö virtauksessa; epästationaarinen (aikatarkka) virtaus; vapaat pinnat; ei-Newtonin nesteet; pyörivät osat | Laminaarinen, stationäärinen, isoterminen virtaus Newtonin nesteelle tai kokeellinen turbulenssimalli laadullisiin kuvioihin: katso [Simuloi nesteen virtausta](topic:flow-simulation). Paneeli varoittaa, kun Reynoldsin luku ylittää laminaarin rajan |
| Jännitysrajat ja valmistussäännöt (ylitykset, jyrsintäsuunnat) generatiivisessa suunnittelussa; useita materiaaleja yhdessä muodossa | Jäykin muoto tilavuudelle. Tarkista tulos Simuloinnissa: katso [Kasvata muoto kuormista](topic:generative-design) |
| Tulos muokattavana (sileänä, parametrisena) kiintokappaleena | STL, fasetoitu STEP tai osa, jossa tulos on tuotuna fasetoituna kiintokappaleena |
| Sähkökoneen suunnittelu: roottori pyörii staattorissa, vääntömomentti kulman mukaan, kyllästyvä teräs, magneetit, jotka menettävät voimansa taitteensa ohitse, pyörrevirrat sekä rauta- ja kuparihäviöt; magneettikentät 3D:ssä tai kaarevilla verkoilla | Lineaarinen 2D-magnetostatiikka ruudukolla analyysikirjastossa: kelat, rauta, pysyvät magneetit palautuskäyrällään, ilmavälit, induktanssi ja veto. Katso [Magneettikentät 2D:ssä](topic:magnetic-fields-2d) |

## Skriptit

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Ohjeet hiiren päällä, katkaisukohdat ja askellus skriptieditorissa | Etsi, taittaminen ja täydennys ovat mukana (katso [Kirjoita ja aja skriptit](topic:craftscript)). Muuten käytä omaa editoriasi: {{ui:Tallenna}} ja {{ui:Avaa}} Skripti-ryhmässä siirtävät skriptejä sisään ja ulos. Sisäänrakennetut funktiot on lueteltu kohdassa [CraftScript-kieli](topic:craftscript-language) |
| Katkaisukohdat ja askellus skriptin läpi | `disp` ja `fprintf` matkan varrella. {{key:Mod+Enter}} ajaa muutaman valitun rivin kerrallaan |
| Kentät ja kuvaajat, jotka skripti näyttää, piirrettyinä Suunnittelu-työtilassa; skriptit, jotka muuttavat osan parametreja | Ne näkyvät Skripti-työtilassa. Skriptit lukevat parametreja `param`-funktiolla (katso [Kirjoita ja aja skriptit](topic:craftscript)) ja muuttavat niitä {{ui:Parametrit}}-välilehdellä |
| Kuvat ja taulukot kuvaajien rinnalla; kuvaajan muokkaus (zoomaus, akselirajat) ennen tallennusta | Rinnakkain näyttää kuvaajat. Tallenna kuvaaja PNG-, SVG- tai CSV-muodossa ja viimeistele muualla |
| numpy ja muut Python-paketit; Python offline-tilassa; Python-taittaminen editorissa; Pascal Script | Pythonin vakiokirjasto, CraftScript ja Lua: katso [Skriptit Pythonilla](topic:craftscript-python) |
| Lua-funktioiden välittäminen sisäänrakennetuille funktioille; kirjastofunktion kutsuminen Luasta nimellä, joka rakennetaan skriptin ajon aikana | Kirjoita kirjastofunktion nimi skriptiin (`cs.static_tet(…)`) tai kutsu sitä CraftScript-skriptistä |

## Sovellus

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Pilvitallennus, jakaminen ja versiohistoria | Ei vielä saatavilla. Tallenna tiedostot tietokoneelle ja pidä versiot nimettyinä |
| PartCraft asennettuna sovelluksena iPadille ja iPhonelle | Käytä PartCraftia laitteen selaimessa. Androidilla ja pöytäkoneella se toimii myös CadCraft Studiossa (getcadcraft.com/download) |
| Kontekstivalikot (hiiren oikea painike) | Työkalurivi ja oikea paneeli |
| Täysin offline-tilassa tuoreesta käynnistyksestä | Vain kun sovellus on tallennettu offline-käyttöä varten: katso [Offline-työskentely](common:offline) |

Kerro, mitä kaipaat eniten sivuston tukisivulla. Se ohjaa, mitä tulee seuraavaksi.

## Engineer (generaattorit ja kentät)

| Ei vielä toteutettu | Sen sijaan tänään |
|---|---|
| Otsikot, liittimet ja kiinnikkeet generoidussa lämmönvaihtimessa; lämpötilakäyrät materiaalin lujuudelle; putkihäviöt jakotukissa | Generaattorit rakentavat ytimen ja putket. Lisää kiinnikkeet Suunnittelussa. Käytä materiaalin huoneenlämpöarvoja varmuuskertoimella |
| Generaattorien lisääminen lisäosaluettelosta yhdellä napsautuksella | {{ui:Avaa}} Engineer-työtilassa lisää generaattorin tiedostosta |
| Kenttätiedosto, joka on hienompi kuin generaattorin oma voksekoko; `.vdb`-tiedostojen lukeminen | Tallenna hienompi kenttä skriptistä. `.vdb` kirjoitetaan, ei lueta |
| Painesäiliön standardilaskelmat | Oppikirjan ohut- ja paksuseinän kaavat valitsemallasi varmuuskertoimella. Ei standardin marginaalia |
| Generaattorit muille sovelluksille | Tässä versiossa vain PartCraft |
