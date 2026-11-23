---
title: Mitä ei ole vielä toteutettu
summary: Kaikki, mitä tämä PartCraft-versio ei vielä tee, kiertyvistä pyyhkäisyistä tuumanäyttöön, piirustusmittoihin ja alikokoonpanoihin, ja mitä tehdä sen sijaan tänään.
keywords: puuttuva, ei vielä, rajoitukset, rajoitteet, tiekartta, tarkka ydin, pyöristys, viiste, kuori, pyyhkäisy, loft, STEP-tuonti, simulointi, valmistus, kiertyvä pyyhkäisy, loft-pään tangentti, pinnan pyöristys, yhtälöt, tuumat, piirustusmitat, alikokoonpanot, pilvi, tabletti, puhelin
from: 97b10a29
---

PartCraft on varhainen versio. Tämä sivu luettelee, mitä se ei vielä tee, jotta et etsi sitä turhaan, ja mitä tehdä sen sijaan tänään. Mihinkään tähän ei ole annettu päivämäärää.

## Tarvitsee tarkan ytimen

Tämä versio rakentaa jokaisen osan verkkoytimellä (katso [Verkkoydin](topic:solid-kernels)). Kaikki alla oleva tarvitsee tarkan geometriaytimen, jota tässä versiossa ei vielä ole. Ominaisuuksilla tallennetut osat aukeavat silti: ominaisuudet jäävät historiaan merkittyinä ei vielä toteutetuiksi ja säilyvät tallennuksessa.

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| {{ui:Fillet}} ja {{ui:Chamfer}} pyöreillä särmillä; säde, joka muuttuu särmää pitkin; pyöristykset, jotka sulautuvat tasaisesti kohdatessaan (verkkoydin viistää ne) | Pyöristys ja viiste toimivat suorilla särmillä tasojen välillä; pyöristä muut kulmat luonnoksessa ennen pursottamista ({{ui:Fillet}} luonnoksessa, {{key:F}}) |
| {{ui:Shell}}, joka avaa kaarevia pintoja; seinämät eri paksuisina | Avoimet tasopinnat; lisää materiaalia pursotuksilla, missä seinän on oltava paksumpi |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} kaarevilla pinnoilla; pursotus pintaan, seuraavaan pintaan tai kärkeen; kartiomainen pursotus | Pursota tai kierrä, tarvittaessa askelittain; pursota haluttuun syvyyteen, jonka mittaat |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} ja tasaiset kuviot | Pursota levy tai ripan profiili |
| Pinnat: {{ui:Form}}-muodon viimeistely osaksi osaa, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Ei saatavilla |
| Useita kappaleita: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, ominaisuudet, jotka tekevät uuden kappaleen | Yksi kiintokappale; toistot ja peilaus kopioivat ominaisuuksia |
| Luonnokset, tasot, akselit ja pisteet pinnoilla, jotka vain tarkka ydin löytää (pyöristyksen tekemä pinta, reiän seinä, tuodun kiintokappaleen pinta) | Luonnos perustasoille, viitetasoille ja pursotusten ja kiertojen tasaisille pinnoille |
| Generatiivisen suunnittelun tulos avattuna osana tai lisättynä siihen (siitä tulee tuotu kiintokappale) | Lataa tulos STL- tai STEP-muodossa |
| Avatun STEP-tiedoston kaarevien pintojen muokkaus tarkkoina pintoina; tarkka STEP splini-, kierretyistä ja kiertämällä tehdyistä pinnoista STEP-tiedostosta; splinisivut, mallinnetut kierteet, STL-, OBJ- ja 3MF-kappaleet sekä kokoonpanot; STEP muille osamallinnusohjelmille | {{ui:Open}} lukee STEP-tiedoston kolmioina ja säilyttää tiedoston tasopinnat, sylinterit, kartiot, pallot ja toruksen viennin ajaksi ([Avaa STEP-tiedosto](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} kirjoittaa jokaisen analyyttisen pinnan tarkasti ja pitää ne fasetteina ([Vienti](topic:export-files#for-other-cad-programs-step)); makro toiselle osamallintajalle kirjoittaa edelleen |
| Todelliset kaaret piirustusnäkymissä | Näkymät ja leikkausnäkymät piirretään fasettien mukaan |
| Tarkat tilavuudet, pinta-alat ja etäisyydet | {{ui:Measure}} antaa fasetoidun kiintokappaleen luvut, hieman pieninä pyöreillä osilla; hienompi **Käyrät**-asetus tuo ne lähemmäs |

Jotkin alla olevien taulukoiden rivit ehdottavat jotakin näistä ominaisuuksista keinona kiertää jokin muu asia. Ehdotukset koskevat vasta, kun tarkka ydin on palannut.

## Ominaisuudet

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| Pintapyöristykset, täysi pyöristys ja pyöristykset, joiden säteet on asetettu pisteisiin särmää pitkin | Vakio- tai lineaarisesti muuttuva {{ui:Fillet}}; useita pyöristysominaisuuksia |
| Kuoret, joiden seinämät ovat eri paksuisia | Yksi {{ui:Shell}}-paksuus; lisää materiaalia pursotuksilla, missä seinän on oltava paksumpi |
| Vetokulma vapaamuotoisille (splini) pinnoille | {{ui:Draft}} toimii tasaisilla, sylinterimäisillä ja kartiomaisilla pinnoilla |
| Kiertyvät pyyhkäisyt, ohutseinä- ja pintapyyhkäisyt; päätetangentti Loft-ominaisuudessa; loft yhdellä ohjainkiskolla; splinipolut | {{ui:Sweep}} kiinteällä suuntauksella tai päämittakaavalla; loft kahdella tai useammalla ohjainkiskolla: katso [Pyyhkäisy, loft ja vetokulma](topic:sweep-loft-draft) |
| Ripat kaarista tai splineistä; ripat, jotka kasvavat neliöinä luonnokseen (ylänäkymästä); vetokulma ripoissa; useita ripoja yhdestä luonnoksesta | {{ui:Rib}} yhdestä viivaketjusta ripan omassa tasossa: katso [Ripat ja kulmalevyt](topic:rib) |
| "Ylös asti" kaarevaan pintaan, "seuraavaan asti" kaarevaan pintaan pysähtyen | Ylös asti tasaiseen pintaan tai viitetasoon |
| Vastaporatut reiät, tuumaiset ja putkikierteet, kartiokierteet, kierteen päättymiset ja kierteen alun viistetyt päät | Upotus pienellä syvyydellä; ISO-metriset ja puolisuunnikkaan muotoiset kierteet, kosmeettiset tai mallinnetut: katso [Akseleiden ja reikien kierteet, piirretyt tai mallinnetut](topic:threads) |
| Ohutpiirteiset pursotukset | Piirrä profiilin molemmat seinämät |
| Toistokopiot, joita ohitetaan yksi kerrallaan; täyttötoistot | Käytä erillisiä ominaisuuksia; toistot käyrää pitkin: {{ui:Path pattern}} |
| Toistokopiot, peilaukset, pyöristykset, viisteet, kuoret ja tuodut kiintokappaleet | Kopioi luonnos tai ominaisuus, jonka päällä ne ovat, tai toista se |
| Tarkka (G1) tangentti muodon erikoispisteissä; muodon paikkojen yhdistäminen suuremmiksi pinnoiksi | Nosta muodon **Taso**: approksimoidut paikat pienenevät; katso [Vapaamuotoiset muodot Form-työkalulla](topic:form-surfaces) |
| Useita erillisiä suljettuja kappaleita yhdessä muodossa; siltoja muotojen välillä | Yksi suljettu kappale per Form-ominaisuus; yhdistä ne Join-toiminnolla |
| Pintakappaleiden valinta näkymässä (paitsi leikkaus- ja paikkapisteet); pintapyöristykset; kumoaminen; G2-paikat; Gordon-pinnat, jotka ovat tangentteja kaarevia naapureita vasten (tasojen ja tasapintojen kanssa tangentti on toteutettu) | Valitse ne nimeltä ominaisuuden paneelista; paksunna ensin, sitten pyöristä kiintokappale |
| Kappaleluettelo historiassa; piilotettujen kappaleiden jättäminen vienneistä pois | Nimeä ja piilota kappaleita osapaneelin kappaleluettelossa; poista tai pysäytä kappaleen tehnyt ominaisuus jättääksesi sen pois |
| Ei-tasainen skaalaus, joka pitää sylinterit ja kartiot analyyttisinä; ei-tasainen skaalaus siirtymäpinnoille | {{ui:Scale body}} tekee kaarevista pinnoista suljettuja B-splinejä (0,0000004 mm:n tarkkuudella); tasainen skaalaus pysyy tarkkana |
| Pintakappaleiden yhdistäminen; Minkowskin summat | {{ui:Stitch}} tai {{ui:Thicken}} ensin, sitten {{ui:Combine}} |
| Toleranssianalyysi: toleranssiketjut, jotka kääntyvät kulmissa (2D- ja 3D-vektorisilmukat), herkkyydet lasketut geometriasta, Monte Carlo muilla jakaumilla, kokotoleranssit luonnosmitoissa, bonustoleranssi materiaaliehdosta | {{ui:Stack-up}} kokoonpanossa: yksi suunta, pahin tapaus ja RSS, toleranssit kirjoitettuina, piirustuksen yleistoleranssista tai GD&T-kehyksistä: katso [Toleranssiketjut](topic:tolerance-stackup) |
| Sijoittelu: leikkausjärjestys ja sisäänajot, jaettujen reunojen leikkaus kerran, osat, jotka on pidettävä yhdessä; rullien jäämät, projektien välillä jaettu materiaali | {{ui:Nest flat parts on sheets…}} väleillä, marginaaleilla, kääntämisellä ja syyllä: katso [Sijoittele tasaiset osat levyille](topic:nest-flat-parts); jäljelle jääneet levyt säilyvät ja käytetään ensin: katso [Säilytä ja käytä uudelleen palat](topic:nest-offcuts); suunnittele leikkaus leikkurin omalla ohjelmalla |
| Levytyö: hemmat, siirrot, viistetyt ja ääriviiva-laipat; laipat kaarevilla reunoilla tai taivutetun pohjalaipan pinnoilla; luonnostellut taivutukset; kulmasulkeet; muotoilutyökalut; kiintokappaleen muuntaminen levytyöksi; taivutetun pohjalaipan tasomuoto, jossa on leikkauksia; taivutustaulukot | {{ui:Base flange}} (levy tai taivutettu profiili), {{ui:Edge flange}} levyn suorilla reunoilla taivutusvapaiden kanssa ja tasomuoto K-kertoimella: katso [Levytyö](topic:sheet-metal) |
| Vetokulma-analyysi kokoonpanoilla; jakotason löytäminen; seinämänpaksuusanalyysi | {{ui:Draft analysis}} osalle Suunnittelu-työtilassa: katso [Tarkista vetokulma valu- ja muottityöhön](topic:draft-analysis); avaa jokainen kokoonpanon osa tarkistaaksesi sen |

## Luonnokset

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| Ellipsit, tangenttikaaret, koonisleikkaukset, splinit, joilla on asetettu aste tai painot (NURBS) | Splinit (kuutiolliset), kaaret ja ympyrät tangenttisuhteilla |
| Piste splinillä (suhde), kaarevuussuhteet (G2) | Aseta splinin oma piste sinne, minne sen on mentävä |
| Splinien siirtymäkopiot, jotka seuraavat myöhempiä muutoksia; ketjujen siirtymät, joissa on teräviä splinikulmia | Siirrä uudelleen muutoksen jälkeen; pyöristä kulma ensin |
| Toistokopiot, jotka pysyvät yhteydessä alkuperäiseen; toistot käyrää pitkin | Toista uudelleen muutoksen jälkeen |
| Vapaamuotoisten tai kallistettujen ympyrämäisten reunojen projisointi; projisoitu geometria, joka seuraa osaa | Projisoi suorat ja yhdensuuntaiset ympyrämäiset reunat ja mittaa sitten |
| Ohjaamattomat (viite-) mitat | Lue koot paneelista tai osan tiedoista |
| Yhtenäisyyssuhteet | Yhdensuuntainen 0 etäisyydellä |
| Liittäminen toiseen ohjelmaan (järjestelmän leikepöytä) | Vie DXF, STEP, STL tai 3MF |
| Kaarien, suhteellisten tai napakoordinaattien kirjoittaminen | Piirrä viivoja ja ympyröitä; piirrä kaaret Kaari-työkalulla |
| Geometrian valinta ilman osoitinta | Vaatii napsautuksen tai kosketuksen |

## Parametrit ja yksiköt

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| Kokoonpanot, jotka muuttavat materiaaleja; CSV-suunnittelutaulukko, joka kytkee ominaisuuksia pois | Kokoonpanot asettavat parametreja ja kytkevät ominaisuuksia päälle ja pois: katso [Kokoonpanot ja suunnittelutaulukot](topic:design-tables); `partcraft variants` rakentaa tallennetut kokoonpanot nimellä, pois kytketyt ominaisuudet mukaan lukien: katso [Tee varianttipaketti kokoonpanoistasi](topic:variant-pack) |
| Yhtälöt uusimpien ominaisuuksien omissa paneeleissa (taso, pyyhkäisy, vetokulma ja vastaavat) | Kirjoita ne skriptiin tai komennolla `partcraft set` ([Skriptit ja komentorivi](topic:scripts-and-cli)) |
| Osa näytettynä tuumina | Koot näkyvät millimetreinä; kirjoita `2in` lukukenttään tai lausekkeeseen, ja se muuttuu arvoksi 50.8 |

## Tiedostot

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| Tuodun STEP-kiintokappaleen omien ominaisuuksien muokkaus (se saapuu ilman historiaa) | Lisää tai leikkaa materiaalia omilla ominaisuuksillasi |
| Värien, nimien, kokoonpanorakenteen ja PMI:n lukeminen STEP-tiedostosta | Ei saatavilla |
| glTF-, OBJ-, IGES- ja Parasolid-vienti; 3D-osan DWG (vain varianttipaketti kirjoittaa DWG:n: piirustusarkin) | STL tai 3MF verkkoihin; STEP kiintokappaleisiin; DXF 2D:lle |
| IGES-, DXF- tai muiden ohjelmien omien tiedostojen avaaminen (`.3dm`-tiedostot aukeavat yhtenä kappaleena: [Avaa .3dm-malli kiintokappaleena](topic:open-3dm-files)) | Pyydä STEP-tiedostoa tai suljettu STL-, OBJ- tai 3MF-verkko: [Avaa STL, OBJ tai 3MF](topic:open-meshes) |
| Kokoonpanorakenne (puu osien nimillä) viedyssä STEP-tiedostossa | Kokoonpano-STEP on yksi yhdiste sijoitetuista kiintokappaleista |
| Tallennus valitsemaasi kansioon ilman selaimen latausta | Ota käyttöön "kysy, minne tallennetaan" selaimen latausasetuksista |

## Piirustukset

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| Mitat kolmen kokonaismitan lisäksi (reikien koot, sijainnit, mittatoleranssit) | Merkitse PDF-tiedosto tai vie DXF ja mitoita se 2D-CAD-ohjelmassa |
| Useampi kuin yksi leikkaus tai yksi detalji; linjatut, rikotut ja apunäkymät | Yksi leikkaus ja yksi detalji per piirustus |
| Vapaa teksti, huomautukset ja taulukot arkilla (paitsi nimi- ja revisiolohkot) | Pintakäsittelyhuomautus tai teksti, joka lisätään PDF-tiedostoon |
| Ensimmäisen kulman projektio, liikkuvat näkymät, pystysuuntaiset arkit | Kolmas kulma, automaattinen asettelu, vaaka-arkit A4–A0 ja ANSI A–E |
| Elävä leikkausnäkymä: useita tasoja tai leikkauslaatikko kerrallaan, ääriviiva leikkauksen ympärillä, leikkauksen tallennus tiedostoon | Yksi taso kerrallaan kohdasta {{ui:Views}} › {{ui:Section view}}; katso [Katso sisään leikkausnäkymällä](topic:section-view) |
| Kokoonpanopiirustukset, joissa on enemmän näkymiä, mittoja tai siirrettäviä pallomerkintöjä | Yksi isometrinen (tai räjäytetty) näkymä automaattisilla pallomerkinnöillä ja osaluettelolla |
| GD&T- ja pintamerkintöjen kopiointi ja liittäminen | Sijoita kukin kohdalleen komennoilla Datum, Frame tai Finish |
| Käyttöohjeet: STEP-tiedostot Illustraten {{ui:From another file…}}-toiminnossa, malli suoraan ModelCraftista tai BimCraftista, kuvat polunjäljittimen laadulla, vuorovaikutteinen 3D PDF:n sisällä | Avaa STEP Suunnittelussa ja aloita ohje {{ui:From the open part}}-toiminnolla; tallenna malli glTF-muodossa (.glb); PNG-kuvat 3D-näkymästä; vuorovaikutteinen 3D-tiedosto: katso [Aloita ohje Illustratessa](topic:illustrate) |

## Kokoonpanot

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| Hammas-, tahti-, kampi- ja ruuviliitokset; kartioon rajattu pallonivel; liitokset kaarevilla pinnoilla tai pisteiden välillä | Jäykät, kiertyvät, liukuvat, sylinterimäiset, tasaiset, pallonivel- ja tappi-urassa-liitokset tasaisilla pinnoilla, kukin arvo omilla rajoillaan: katso [Rakenna kokoonpano](topic:build-assembly) |
| Räjäytysvaiheet, jotka kääntävät osia, ja liitosten sijoittamien osien vetäminen | Suorat räjäytysvaiheet; poista liitos siirtääksesi osan käsin |
| Alikokoonpanot | Vain yksi osatasо |
| Hammaspyörät, kammet, kosketus | Ei saatavilla |

## Valmistus

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| 3D-mukautuva raivaus ja siirtoraivaus 3D:ssä; vesiraja-, kynä-, säteittäinen ja spiraalinen viimeistely; mukautuvat ajot kaarina | 3D-karkeistus suorina riveinä ja jäännöstyöstö: katso [3D-karkeistus ja jäännöstyöstö](topic:rough-3d); Yhdensuuntainen- ja Harjanne-viimeistely: katso [3D-viimeistely](topic:finish-3d); 2,5-akselinen pinta-, tasku-, 2D-mukautuva, ääriviiva-, poraus- ja viisteohjelmointi: katso [Tee työstöradat ja G-koodi](topic:manufacture) |
| Sivuleikkaus, virtausviivat ja monen akselin karkeistusradat, kallistetun työtason koodit (G68.2), pidikkeen ja koneen törmäystarkistukset; 5-akselisten ja kiertoleikkausten simulointi | Kallistettu työkalu mihin tahansa toimenpiteeseen, 5-akselinen viimeistely pallopäisellä jyrsimellä ja 4. akselin kiertoviimeistely: katso [4- ja 5-akselinen työstö](topic:multi-axis) |
| Sisäpuolinen sorvaus ja sisäkierteet, G71/G76-syklit, kaaret sorvausradoissa, elävät työkalut, apukara | Ulkosorvaus: pinta, karkeistus, viimeistely, ura, katkaisu, kierre, poraus keskiöön: katso [Sorvaus](topic:turning) |
| Kulman tai nurkan mittaus, työkalun asetin, mitan mittaaminen toleranssia vasten | Pinnan, sivun, reiän tai korotuksen mittaus työsiirtymän asettamiseksi: katso [Mittaus](topic:probing) |
| Pidikkeen ja varren törmäystarkistukset | Seuraa uran pituuden varoituksia ja tarkista ohjaimesi simulaattorissa |
| Työkalun käyttöiän ja alio-ohjelmasyklit postprosessorissa; muiden ohjelmien postitiedostojen lataaminen | Kirjoita tai muuta postprosessoria PartCraftin omassa muodossa: katso [Muokattavat postprosessorit](topic:post-processors) |
| Tuumainen G-koodi (G20) | Vain millimetrit (G21) |

## Simulointi ja generatiivinen suunnittelu

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| Epälineaariset tutkimukset: myötäily, suuret taipumat, osien välinen kosketus, väsymys | Lineaarinen staattinen ja luonnolliset taajuudet: katso [Tarkista jännitys ja taipuma](topic:simulation); pidä varmuuskerroin selvästi yli 1 |
| Epälineaarinen nurjahdus (epätäydellisyydet, nurjahduksen jälkeinen käyttäytyminen, läpipomppaus) | Lineaariset nurjahduskuormakertoimet riittävällä marginaalilla: katso [Lämpö, lämpöjännitys ja nurjahdus](topic:thermal-and-buckling) |
| Säteily pintojen välillä (näkökertoimet), kosketusvastus, lämpötilariippuvaiset materiaalit, hitaus lämpöjännityksessä (lämpöiskun aallot) | Säteily ympäristöön, vakaa tai kvasistaattinen lämpöjännitys ajan yli, vakioominaisuudet: katso [Lämpö, lämpöjännitys ja nurjahdus](topic:thermal-and-buckling) |
| Automaattinen tarkennus transienttiin lämpöön ja tutkimuksiin lämpökuormalla; verkon karkentaminen, kun virhe on pieni; tavoite paikallisesta suureesta (huippujännitys yhdessä kohdassa) | **Tarkenna automaattisesti** staattisissa, nurjahdus-, luonnontaajuus- ja vakaissa lämpötutkimuksissa koko osan virheen perusteella: katso [Tarkista jännitys ja taipuma](topic:simulation); muuten pienennä elementtikokoa |
| Laakeri- ja pulttikuormat, etäisyysvoimat, momentit, jouset, ennalta määrätyt siirtymät | Voimat ja paineet pinnoille, painovoima; kiinteät ja kitkattomat pinnat |
| Kokoonpanojen simulointi; suunnasta riippuvat materiaalit (tulostetut kerrokset, komposiitit) | Yksi osa, yksi isotrooppinen materiaali |
| Useita ratkaisijan säikeitä tetraedrisille tutkimuksille, lämmönsiirrolle ja generatiiviselle suunnittelulle; säikeitä sivulla, joka ei ole ristiinorigoinen | Tilavuustutkimukset, nurjahdus, jännitys ajan yli ja laminaarinen virtaus käyttävät säikeitä, missä sivu sallii: katso [PartCraftin asetukset](topic:settings) |
| Turbulenssi suunnittelutarkkuudella (Spalart–Allmaras-malli on mukana kokeellisena: putkikitka 30–34 % liian suuri, takaisku-kiinnittymä 21–39 % liian lyhyt; suunniteltu: hienompi solu seinien lähellä), lämpö virtauksessa, epästationaarinen virtaus, vapaat pinnat, ei-Newtonin nesteet, pyörivät osat | Laminaarinen, stationäärinen, isoterminen virtaus Newtonin nesteelle tai kokeellinen turbulenssimalli laadullisiin kuvioihin: katso [Simuloi nesteen virtaus](topic:flow-simulation); paneeli varoittaa, kun Reynoldsin luku ylittää laminaarisen alueen |
| Jännitysrajat ja valmistussäännöt (ylitykset, työstösuunnat) generatiivisessa suunnittelussa; useat materiaalit yhdessä muodossa | Jäykin muoto tilavuudelle; tarkista tulos Simuloinnissa: katso [Kasvata muoto kuormista](topic:generative-design) |
| Muokattava (sileä, parametrinen) tuloskiintokappale | STL, fasetoitu STEP tai osa, jossa tulos on tuotuna fasetoituna kiintokappaleena |
| Sähkökoneen suunnittelu: roottori pyörii staattorissa, vääntömomentti kulman mukaan, kyllästyvä teräs, magneetit, jotka menettävät voimakkuutensa polvensa jälkeen, pyörrevirrat sekä rauta- ja kuparihäviöt; magneettikentät 3D:ssä tai kaarevilla verkoilla | Lineaarinen 2D-magnetostatiikka ruudukolla analyysikirjastossa: kelat, rauta, pysyvät magneetit palautuskäyrällään, ilmavälit, induktanssi ja veto: katso [Magneettikentät 2D:ssä](topic:magnetic-fields-2d) |

## Skriptit

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| Ohjeikkuna, katkaisukohdat ja askeltaminen skriptieditorissa | Etsi, taita ja täydennä ovat mukana (katso [Kirjoita ja aja skriptejä](topic:craftscript)); muut asiat omalla editorillasi: {{ui:Save}} ja {{ui:Open}} Skripti-ryhmässä siirtävät skriptit sisään ja ulos; sisäänrakennetut funktiot luetellaan kohdassa [CraftScript-kieli](topic:craftscript-language) |
| Katkaisukohdat ja askeltaminen skriptissä | `disp` ja `fprintf` matkan varrella; {{key:Mod+Enter}} ajaa muutaman valitun rivin kerrallaan |
| Skriptin näyttämät kentät ja kuvaajat piirrettynä Suunnittelu-työtilaan; skriptit, jotka muuttavat osan parametreja | Ne näkyvät Skripti-työtilassa; skriptit lukevat parametrit komennolla `param` (katso [Kirjoita ja aja skriptejä](topic:craftscript)) ja muuttavat niitä {{ui:Parameters}}-välilehdellä |
| Kuvat ja taulukot kuvaajien rinnalla; kuvaajan muokkaus (zoomaus, akselirajat) ennen tallennusta | Rinnakkain-näkymä näyttää kuvaajat; tallenna kuvaaja PNG-, SVG- tai CSV-muodossa ja viimeistele se muualla |
| numpy ja muut Python-paketit; Python offline-tilassa; Python-editorin taitto; Pascal Script | Pythonin vakiokirjasto, CraftScript ja Lua: katso [Skriptit Pythonilla](topic:craftscript-python) |
| Lua-funktioiden välittäminen sisäänrakennetuille funktioille; kirjastofunktion kutsuminen Lualla nimellä, joka rakennetaan skriptin ajon aikana | Kirjoita kirjastofunktion nimi skriptiin (`cs.static_tet(…)`) tai kutsu sitä CraftScript-skriptistä |

## Sovellus

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| Pilvitallennus, jakaminen ja versiohistoria | Ei vielä saatavilla. Tallenna tiedostot tietokoneelle ja pidä versiot nimellä |
| PartCraft asennettuna sovelluksena iPadille ja iPhonelle | Käytä PartCraftia laitteen selaimessa; Androidilla ja työpöydällä se toimii myös CadCraft Studiossa (getcadcraft.com/download) |
| Kontekstivalikot (hiiren oikea painike) | Työkalurivi ja oikea paneeli |
| Täysin offline-toiminta alusta asti | Vain kun sovellus on tallennettu offline-käyttöä varten: katso [Offline-käyttö](common:offline) |

Ilmoita, mitä kaipaat eniten sivuston tukisivun kautta: se ohjaa, mitä seuraavaksi tehdään.

## Engineer (generaattorit ja kentät)

| Ei vielä toteutettu | Nyt sen sijaan |
|---|---|
| Liittimet, portit ja kytkentäkappaleet generoidulla lämmönvaihtimella; lämpötilakäyrät materiaalin lujuudelle; T-haaran häviöt jakotukissa | Generaattorit rakentavat ytimen ja putket; lisää kytkentäkappaleet Suunnittelussa; käytä materiaalin huoneenlämpöarvoja varmuuskertoimella |
| Generaattorien lisääminen lisäosaluettelosta yhdellä napsautuksella | {{ui:Open}} Engineer-työtilassa lisää generaattorin tiedostosta |
| Kenttätiedosto, joka on hienompi kuin generaattorin oma voksel-koko; `.vdb`-tiedostojen lukeminen | Tallenna hienompi kenttä skriptistä; `.vdb` kirjoitetaan, ei lueta |
| Painesäiliön mitoituslaskelmat | Oppikirjan ohut- ja paksuseinämäkaavat valitsemallasi varmuuskertoimella; ei normin varmuusvaraa |
| Generaattorit muille sovelluksille | Vain PartCraft tässä versiossa |
