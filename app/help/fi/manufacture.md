---
title: Tee työstöradat ja G-koodi (Valmistus)
summary: Aseta raaka-aihio ja työnollapiste, valitse työkalut, lisää pinta-, tasku-, ääriviiva-, poraus- ja viistetoimenpiteitä valitsemalla pintoja, viimeistele koko malli 3D:ssä (yhdensuuntainen, harjanne), simuloi raaka-aihio mallia vasten ylileikkausten ja sykliajan varalta ja lataa G-koodi yhdestä kolmesta sisäänrakennetusta postprosessorista tai itse muokkaamastasi.
keywords: tarkka STEP, STEP työpajalle, työkoordinaatit, CAM-luovutus, yhdensuuntainen, harjanne, 3D-viimeistely, viimeistely, pallokärki, työkalukirjasto, muokkaa postia, oma postprosessori, postieditori, mukautuva, mukautuva raivaus, vakiokosketus, trokoidinen, HSM, nopea työstö, valmistus, CAM, työstörata, G-koodi, NC, CNC, jyrsintä, tasku, ääriviiva, profiili, pinnan jyrsintä, poraus, portaittainen, G83, G81, G73, viiste, raaka-aihio, työsiirtymä, G54, postprosessori, GRBL, LinuxCNC, syötöt ja nopeudet, simulointi, ylileikkaus, sykliaika
from: f8a03be8
---

Manufacture-työtila muuttaa osan työstöradoiksi ja kirjoittaa ne G-koodina. Useimmat toimenpiteet ovat **2,5-akselista** jyrsintää: työkalu pysyy pystyssä, seinät jyrsitään suoraan alas ja pohjat tasaisiksi. **3D-karkeistus** ja **Jäännös** raivaavat kaarevia osia 3D:ssä ([3D-karkeistus ja jäännöstyöstö](topic:rough-3d)); **Yhdensuuntainen** ja **Harjanne** viimeistelevät ne ([3D-viimeistely](topic:finish-3d)). Koneessa, jossa on kiertoakseleita, mikä tahansa toimenpide voi kallistaa työkalua, ja kaksi toimenpidettä liikuttaa kiertoakseleita leikatessaan ([4- ja 5-akselinen työstö](topic:multi-axis)). Sorvausta varten on toimenpiteitä ([Sorvaus](topic:turning)) ja kosketusanturia varten ([Mittaus](topic:probing)). Työstö toimii osan nimettyjen pintojen kanssa, jotka verkkoydin antaa osalle (katso [Verkkoydin](topic:solid-kernels)).

Laboratorioversio: tarkista jokainen ohjelma ohjaimesi omasta simulaattorista ja aja se ensin ilmassa raaka-aihion yläpuolella.

## Asetus

1. Valitse **Valmistus** työtilan vaihtimesta ja sitten {{ui:New setup}}.
2. Valitse **Asetus**-välilehdellä:
   - **Työkaluakseli (+Z)**: mihin suuntaan työkalu osoittaa osaan. Maailman +Y (PartCraftin ylös) on oletus; koneen X on silloin maailman X ja koneen Y on maailman −Z.
   - **Työnollapiste (G54)**: raaka-aihion kulma tai keskipiste, yläpuoli tai alapuoli, mallin yläkeskipiste tai mallin origo.
   - **Raaka-aihio**: laatikko tai lieriö, joko malli ylimäärineen (sivut, yläosa, alaosa) tai kiinteä koko.
   - **Materiaali** (asettaa lähtösyötöt ja -nopeudet), **postprosessori** (ohjain), koneen enimmäiskaran nopeus, pikasiirtonopeus ja työkalunvaihtoaika, jäähdytys ja ohjelman numero.

## Työkalut

**Työkalut**-välilehdellä on kirjasto: tasa-, pallo- ja nuppipäiset päätejyrsimet, poraukset, viistejyrsimet ja tasojyrsimet, joilla on T-numero, halkaisija, urat ja uran pituus (sekä kulmasäde, kärkikulma tai viistekulma siellä, missä ne pätevät).

Omat työkalut voi tallentaa selaimeen ja siirtää tiedostona koneelta toiselle: katso [Työkalukirjasto](topic:tool-library).

Karan kierrosnopeus ja syöttö tulevat materiaalista: n = 1000 × leikkuunopeus / (π × halkaisija), syöttö = n × urat × lastuvahvuus (poraukset: n × syöttö kierrosta kohti). Luvut ovat varovaisia lähtöarvoja julkaistuista vaihteluväleistä, eivät koneellesi viritettyjä; kirjoita työkalun valmistajan leikkuunopeus, lastuvahvuus, kierrosluku tai syöttö ohittaaksesi ne. Kun nopeus ylittää koneen enimmäisarvon, se pidetään siinä, ja syöttö seuraa pitäen lastuvahvuuden.

## Toimenpiteiden lisääminen

Jokainen työkalurivin painike lisää toimenpiteen, ja jos se tarvitsee geometriaa, valinta alkaa: napsauta pintoja tai reunoja näkymässä (napsauta uudelleen poistaaksesi yhden) ja valitse sitten {{ui:Done picking}} tai {{key:Esc}}.

| Toimenpide | Valinta | Mitä se tekee |
|---|---|---|
| {{ui:Face}} | ei mitään | Sikksakki-ajot koko raaka-aihion yli, sen reunojen ohi, mallin yläpintaan asti |
| {{ui:Pocket}} | tasainen pohjapinta, pyöreä reikä tai suljettu reunaketju | Raivaa alueen siirtoajoin sisältä ulospäin jokaisella syvyysaskeleella; saaret (pinnat, jotka seisovat pohjan sisällä) jätetään; pohja, joka on auki joka puolelta (ei mitään korkeampaa sen ulkopuolella), raivataan raaka-aihion reunaan asti |
| {{ui:Adaptive}} | sama kuin Tasku | Raivaa saman alueen ajoin, joista kukin leikkaa asetetun leveyden (**Kosketus**, osa halkaisijasta), joten leikkuri ei koskaan ota täyden leveyden uraa, ei edes kulmissa; se menee sisään kierteellä ja viimeistelee seinät kullakin tasolla. Kapeat leikkaukset sallivat syvemmän syvyysaskeleen ja suuremman syötön |
| {{ui:Contour}} | tasainen pinta (sen ääriviiva), pyöreä pinta tai reunat | Seuraa ääriviivaa työkalun säteen verran siirrettynä, ulko- tai sisäpuolella, sisään- ja ulosajokaarilla ja valinnaisilla kiinnityskielekkeillä |
| {{ui:Drill}} | reiät (napsauta reiän seinämää tai reunaa) | Poraa kunkin reiän kiinteällä syklillä: portaittainen (G83), poraus (G81) tai lastunmurto (G73); tai anna halkaisija, jolloin poraat jokaisen tämän kokoisen reiän |
| {{ui:Chamfer}} | pinnan ääriviiva tai reunat | Ajaa viistejyrsimen reunaa pitkin niin, että se leikkaa asettamasi leveyden |
| {{ui:Parallel}} | ei mitään (koko malli) | 3D-viimeistely yhdensuuntaisina viivoina mihin tahansa kulmaan, seuraten pintaa pallo-, nuppi- tai tasapääjyrsimellä. Katso [3D-viimeistely](topic:finish-3d) |
| {{ui:Scallop}} | ei mitään (koko malli) | 3D-viimeistely ajoin, jotka ovat asetetun matkan päässä toisistaan pinnalla, jotta niiden välinen harjanne on pyydetyssä korkeudessa |

Valitse toimenpide luettelosta muuttaaksesi sen työkalua, korkeuksia (turvavara, vetäytyminen, syöttökorkeus, yläosa, pohja), syvyysaskelta, askelväliä, jätettävää ylimäärää, viimeistelyajoa, sisäänmenoa (kierre, rampi tai upotus), myötäjyrsintää, kiinnityskielekkeitä tai sykliä. {{ui:Up}} ja {{ui:Down}} järjestävät uudelleen, {{ui:Suppress}} jättää toimenpiteen pois ja {{ui:Delete}} poistaa sen. Kaikki on kumoushistoriassa ja tallennettu osatiedostoon.

Taskun askelväli on enintään puolet työkalun halkaisijasta, joten jokainen sen pohjan piste on yhden työkalun säteen sisällä ainakin yhdestä ajosta. Sisänurkat säilyttävät työkalun säteen.

**Mukautuva raivaus** pitää leikkurin kosketuksen lähellä yhtä arvoa. Kosketus 0,15 halkaisijasta on kosketuskulma noin 46°: leikkurin reunan kaari materiaalissa. Siirtoajo sitä vastoin leikkaa täyden leveyden ensimmäisellä ajollaan ja kiertää kauemmas jokaisessa sisänurkassa. Ajojen välillä työkalu pysyy alhaalla siellä, missä se liikkuu leikatussa ilmassa, ja nousee ja laskeutuu muualla. Ajot lasketaan hienolla ruudukolla alueen yli (solut noin kaksitoistasosa työkalun säteestä), joten kosketus voi olla enintään noin yhden solun leveämpi kuin asetettu; seinät viimeistellään tarkasti. Iso avoin alue tuottaa pitkän ohjelman, jossa on paljon lyhyitä liikkeitä.

## Simuloi

Työstöradat lasketaan uudelleen jokaisen muutoksen jälkeen (myös osan). {{ui:Simulate}} näyttää lisäksi raaka-aihion jäljelle jääneen tilan koko ohjelman jälkeen. Paneelissa näkyy:

- **Sykliaika**: syöttöliikkeet syötöllään, pikaliikkeet suorina viivoina asetuksen pikasiirtonopeudella, lisättynä työkalunvaihtoajalla. Oikeat koneet kiihtyvät, joten ne vievät kauemmin.
- **Ylileikkaukset**: kohdat, joissa työkalu meni yli 0,02 mm osan pinnan alapuolelle. Punaiset merkit näyttävät ne näkymässä.
- **Osalle jäänyt raaka-aihio**.

Raaka-aihio on yläosan korkeuskartta (Z-kartta), joten se ei voi näyttää alileikkauksia. Vedä **Toisto**-säädintä siirtääksesi työkalua ohjelmaa pitkin. Näkymässä syöttöliikkeet ovat yhtenäisiä, pikaliikkeet katkoviivoja, ja väri vaihtuu toimenpiteittäin.

Kun **Näytä simuloitu raaka-aihio** on päällä, raaka-aihio väritetään mallia vastaan solu kerrallaan: **vihreä**, kun se on mallin päällä (0,02 mm:n tarkkuudella); **punainen**, kun työkalu leikkasi malliin; ja jos raaka-aihiota jää mallille, **keltainen** ohuelle kuorelle, **oranssi** enemmän, haalistuen **harmaaksi** raaka-aihion sävyyn 1 mm tai enemmän. Värit lasketaan uudelleen jokaisen muutoksen yhteydessä samasta korkeuskartasta kuin paneelin luvut, joten vihreä ja punainen vastaavat Ylileikkaukset-riviä. Viiste leikkaa malliin tarkoituksella ja näyttää punaisena reunaansa pitkin.

## Postita G-koodi

Valitse ohjain kohdasta **Postprosessori** ja paina {{ui:Download G-code}} (tai työkalurivin {{ui:Post}}):

| Ohjain | Tiedosto | Huomautukset |
|---|---|---|
| Fanuc-tyylinen ISO | .nc | %, O-numero, rivinumerot, T M6 ja G43 H, kiinteät syklit |
| GRBL | .nc | Ei työkalunvaihtajaa eikä kiinteitä syklejä: työkalunvaihto pysähtyy M0:aan, poraus kirjoitetaan tavallisina liikkeinä |
| LinuxCNC | .ngc | T M6 ja G43 H, kiinteät syklit, M2 |
| Fanuc-tyylinen sorvi | .nc | Sorvausohjelmille: X halkaisijana, syöttö kierrosta kohti, G96 G50-rajan alla, G32-kierteitys |
| LinuxCNC-sorvi | .ngc | Sorvausohjelmille: G7-halkaisijat, G95, G96, G33-kierteitys; ei kirjoita kotiinajoliikettä |
| Oma | mikä tahansa | Itse kirjoitettu tai muutettu postprosessori: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Jokainen tiedosto alkaa kommenteilla ohjelmasta, raaka-aihiosta, työsiirtymästä ja työkaluista. Koordinaatit ovat millimetreinä kolmen desimaalin tarkkuudella. {{ui:Toolpath CSV}} ja {{ui:Toolpath JSON}} vievät itse liikkeet.

**Tarkista tulos koneesi omasta simulaattorista ennen leikkaamista ja aja se ensin ilmassa raaka-aihion yläpuolella.** Kolme sisäänrakennettua postprosessoria ovat lähtökohtia, jotka noudattavat ohjainten dokumentoitua toimintaa; niitä ei ole todistettu millään tietyllä koneella. Muutettu postprosessori on todistettava erikseen. Kirjoittamisen ohje: [Muokattavat postprosessorit](topic:post-processors).

## Tarkka STEP työpajalle

G-koodipainikkeiden alla **Toimenpiteet**-välilehdellä {{ui:Exact STEP (work coordinates)}} lataa tiedoston `<part>-work.step`: osan tarkkana kiintokappaleena (todelliset sylinterit reikiä ja korotuksia varten, todelliset ympyrät niiden reunoille), jonka origo on tämän asetuksen työnollapiste ja Z työkaluakselin suuntainen. Nämä ovat G-koodin käyttämät koordinaatit, joten työpajan oma CAM-ohjelma tai tarkistin asettaa mallin ohjelman kohdalle siirtämättä sitä. Tiedosto sisältää vain osan, ei raaka-aihiota eikä työstöratoja.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} kirjoittaa saman kiintokappaleen omassa asennossaan (Z ylös): katso [Vienti tulostukseen, STEP ja DXF](topic:export-files#for-other-cad-programs-step).

## Rajoitukset

- Taskut, ääriviivat, poraukset ja viistot ovat 2,5-akselisia. Kaarevat osat karkeistetaan ja viimeistellään 3D:ssä omilla toimenpiteillään ([3D-karkeistus ja jäännöstyöstö](topic:rough-3d), [3D-viimeistely](topic:finish-3d)). Mukautuva raivaus on 2D (tasaiset pohjat).
- Kallistetut työkalut, 5- ja 4. akselin viimeistely, sorvaus ja mittaus ovat olemassa, kukin omine rajoineen, ja **mitään niistä ei ole ajettu koneella**: katso [4- ja 5-akselinen työstö](topic:multi-axis), [Sorvaus](topic:turning) ja [Mittaus](topic:probing).
- Pidikkeitä ja varsia ei tarkisteta törmäysten varalta; varoitus tulee, kun leikkaus on syvempi kuin uran pituus.
- Syötöt ja nopeudet ovat lähtöarvoja. Postprosessori on muokattavaa tekstiä, mutta se päättää vain, miten liikkeet kirjoitetaan. Se ei voi muuttaa työstörataa, lisätä akseleita eikä tuntea koneen ominaisuuksia ([Muokattavat postprosessorit](topic:post-processors) luettelee, mitä se ei voi tehdä).

## Lähetä ohjelma koneelle

CadCraft Studiossa työpöydällä, kun kone on määritetty Studiossa, **Lähetä koneelle…** näkyy **Lataa G-koodi** -painikkeen vieressä ja lähettää saman ohjelman verkossa olevalle koneelle. Sitä ei koskaan käynnistetä PartCraftista: käynnistys tehdään koneella, kun kaikki on selvää. Selaimessa painiketta ei näytetä, koska verkkosivu ei tavoita verkossa olevaa konetta; lataa ohjelma sen sijaan.
