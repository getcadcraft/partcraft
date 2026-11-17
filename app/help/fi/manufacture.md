---
title: Tee työstöradat ja G-koodi (Valmistus)
summary: Aseta raaka-aihio ja työnollapiste, valitse työkalut, lisää pinta-, tasku-, ääriviiva-, poraus- ja viistotoiminnot valitsemalla pintoja, viimeistele koko malli 3D:ssä (yhdensuuntainen, harjanne), simuloi raaka-aihio mallia vasten ylileikkausten ja syklin ajan varalta ja lataa G-koodi yhdeltä kolmesta sisäänrakennetusta postista tai itse muokkaamastasi.
keywords: tarkka step, step työpajalle, työkoordinaatit, cam-siirto, yhdensuuntainen, harjanne, 3D-viimeistely, viimeistely, pallopää, työkalukirjasto, muokkaa postia, mukautettu posti, postieditori, mukautuva, mukautuva raivaus, vakiositoutuminen, trokoidinen, hsm, nopea työstö, valmistus, CAM, työstörata, G-koodi, NC, CNC, jyrsintä, tasku, ääriviiva, profiili, pinnan tasoitus, poraus, peck, G83, G81, G73, viisto, raaka-aihio, työn siirtymä, G54, postiprosessori, GRBL, LinuxCNC, syötöt ja nopeudet, simulointi, ylileikkaus, syklin aika
from: beeb29aa
---

Valmistus-työtila muuttaa kappaleen työstöradoiksi 3-akselista jyrsinkonetta varten ja kirjoittaa ne G-koodiksi. Useimmat toiminnot ovat **2,5-akselisia**: työkalu pysyy pystyssä, seinät leikataan suoraan alas ja pohjat tasaisiksi. **Yhdensuuntainen** ja **Harjanne** viimeistelevät kaarevia pintoja 3D:ssä (katso [3D-viimeistely](topic:finish-3d)); työkalu pysyy silti pystyssä (kolme akselia, ei kallistusta). Ne toimivat nimettyjen pintojen kanssa, jotka verkkoydin antaa kappaleelle (katso [Verkkoydin](topic:solid-kernels)).

Laboratorioversio: tarkista jokainen ohjelma ohjaimen omassa simulaattorissa ja aja se ensin ilmassa raaka-aihion yläpuolella.

## Aseta

1. Valitse **Valmistus** työtilan vaihtimesta ja sitten {{ui:New setup}}.
2. **Asetus**-välilehdellä valitse:
   - **Työkalun akseli (+Z)**: mihin suuntaan työkalu osoittaa osaan. Maailma +Y (PartCraftin ylös) on oletus; silloin koneen X on maailman X ja koneen Y on maailman −Z.
   - **Työnollapiste (G54)**: raaka-aihion kulma tai keskus, yläpuoli tai alapuoli, mallin yläkeskus tai mallin origo.
   - **Raaka-aihio**: laatikko tai sylinteri, joko malli plus siirtymät (sivut, yläpinta, alapinta) tai kiinteä koko.
   - **Materiaali** (asettaa aloitussyötöt ja nopeudet), **posti** (ohjain), koneen enimmäiskaranopeus, pikasiirtonopeus ja työkalunvaihtoaika, jäähdytys sekä ohjelman numero.

## Työkalut

**Työkalut**-välilehti sisältää kirjaston: tasaiset, pallo- ja nokkapäiset päätyjyrsimet, poraterät, viistojyrsimet ja tasojyrsimet, joista kullakin on T-numero, halkaisija, urat ja uran pituus (sekä kulmasäde, kärkikulma tai viistekulma siellä, missä ne sovelletaan).

Omat työkalut voidaan tallentaa selaimeen ja siirtää tiedostona tietokoneelta toiselle: katso [Työkalukirjasto](topic:tool-library).

Karan nopeus ja syöttö tulevat materiaalista: n = 1000 × leikkausnopeus / (π × halkaisija), syöttö = n × urat × lastun paksuus (porat: n × syöttö kierrosta kohden). Luvut ovat varovaisia aloitusarvoja julkaistuista alueista, eikä niitä ole viritetty koneelle; työkalun valmistajan leikkausnopeuden, lastun paksuuden, kierrosluvun tai syötön voi kirjoittaa ohittamaan ne. Kun nopeus ylittää koneen enimmäisarvon, se pidetään siinä ja syöttö seuraa, jolloin lastun paksuus säilyy.

## Lisää toimintoja

Jokainen työkalupalkin painike lisää toiminnon, ja se, joka tarvitsee geometriaa, aloittaa valinnan: napsauta pintoja tai reunoja näkymässä (napsauta uudelleen poistaaksesi yhden), sitten {{ui:Done picking}} tai {{key:Esc}}.

| Toiminto | Valinta | Mitä se tekee |
|---|---|---|
| {{ui:Face}} | ei mitään | Sikksakkiradat koko raaka-aihion yli, sen reunojen ohi, mallin yläpintaan asti |
| {{ui:Pocket}} | tasainen pohjapinta, pyöreä reikä tai suljettu reunaketju | Tyhjentää alueen siirtymäradoilla sisältä ulospäin jokaisella syvyysaskeleella; saarekkeet (pohjan sisällä pystyssä olevat pinnat) jätetään; pohja, joka on auki joka puolelta (ei mitään korkeampaa ulkopuolella), tyhjennetään raaka-aihion reunaan asti |
| {{ui:Adaptive}} | sama kuin Tasku | Tyhjentää saman alueen kierroksin, joista kukin leikkaa asetetun leveyden ({{ui:Engagement}}, osa halkaisijasta), joten terä ei koskaan leikkaa täyttä leveyttä urassa, ei edes kulmissa; se menee sisään kierteellä ja viimeistelee seinät kullakin tasolla. Kapeat leikkaukset sallivat syvemmän askeleen ja suuremman syötön |
| {{ui:Contour}} | tasainen pinta (sen ääriviiva), pyöreä pinta tai reunat | Seuraa ääriviivaa, siirrettynä työkalun säteen verran, ulos tai sisään, sisään- ja ulosajokaarilla sekä valinnaisilla kiinnityskielekkeillä |
| {{ui:Drill}} | reiät (napsauta reiän seinää tai reunaa) | Poraa kunkin reiän kiinteällä syklillä: peck (G83), poraus (G81) tai lastunkatkaisu (G73); tai anna halkaisija, jolloin kaikki reiät kyseisessä koossa porataan |
| {{ui:Chamfer}} | pinnan ääriviiva tai reunat | Ajaa viistojyrsimen reunaa pitkin niin, että se leikkaa asetetun leveyden |
| {{ui:Parallel}} | ei mitään (koko malli) | 3D-viimeistely yhdensuuntaisilla viivoilla mihin tahansa kulmaan, pinnan mukaan pallo-, nokka- tai tasaisella päätyjyrsimellä. Katso [3D-viimeistely](topic:finish-3d) |
| {{ui:Scallop}} | ei mitään (koko malli) | 3D-viimeistely kierroksina, jotka ovat asetetun etäisyyden päässä toisistaan pinnalla, joten harjanne niiden välillä on pyydetyn korkuinen |

Valitse toiminto luettelosta, jos haluat muuttaa sen työkalua, korkeuksia (väli, nosto, syöttökorkeus, yläpinta, alapinta), syvyysaskelta, askelväliä, jätettävää ylimäärää, viimeistelykierrosta, sisäänajoa (kierre, rampi tai upotus), myötäjyrsintää, kiinnityskielekkeitä tai sykliä. {{ui:Up}} ja {{ui:Down}} järjestävät uudelleen, {{ui:Suppress}} jättää sen pois ja {{ui:Delete}} poistaa sen. Kaikki on kumoamishistoriassa ja tallennetaan kappaletiedostoon.

Taskun askelväli on enintään puolet työkalun halkaisijasta, joten jokainen pohjan piste on yhden työkalusäteen sisällä jostain kierroksesta. Sisäkulmissa säilyy työkalun säde.

**Mukautuva raivaus** pitää terän osuman lähellä yhtä arvoa. Osuma 0.15 halkaisijasta on osumakulma noin 46°: terän reunan kaari materiaalissa. Siirtymätasku sitä vastoin leikkaa täyttä leveyttä ensimmäisellä kierroksellaan ja kiertää kauemmas jokaisessa sisäkulmassa. Kierrosten välillä työkalu pysyy alhaalla, kun se liikkuu leikatussa ilmassa, ja nousee ja laskeutuu leikatussa ilmassa muualla. Kierrokset lasketaan hienolla ruudukolla alueen yllä (solut noin kahdestoistaosa työkalun säteestä), joten osuma voi olla enintään noin yhden solun verran leveämpi kuin asetettu; seinät viimeistellään tarkasti. Suuri avoin alue tekee pitkän ohjelman, jossa on paljon lyhyitä siirtoja.

## Simuloi

Työstöradat luodaan uudelleen jokaisen muutoksen jälkeen (kappaleen mukaan lukien). {{ui:Simulate}} näyttää myös raaka-aihion, joka jää jäljelle koko ohjelman jälkeen. Paneeli näyttää:

- **Syklin aika**: syöttöliikkeet niiden syötöllä, pikasiirrot suorina viivoina asetuksen pikasiirtonopeudella, plus työkalunvaihtoaika. Oikeat koneet kiihtyvät, joten ne vievät kauemmin.
- **Ylileikkaukset**: kohdat, joissa työkalu meni yli 0.02 mm kappaleen pinnan alapuolelle. Punaiset merkit näyttävät ne näkymässä.
- **Kappaleelle jäänyt raaka-aihio**.

Raaka-aihio on yläpinnan korkeuskartta (Z-kartta), joten se ei näytä alileikkauksia. Vedä **Toisto**-liukusäädintä, jotta työkalu liikkuu ohjelman läpi. Näkymässä syöttöliikkeet ovat yhtenäisiä ja pikasiirrot katkoviivoja, yksi väri toimintoa kohden.

Kun **Näytä simuloitu raaka-aihio** on päällä, raaka-aihio värjätään mallia vastaan solu kerrallaan: **vihreä** kohdissa, joissa se on mallin päällä (0.02 mm:n tarkkuudella), **punainen** kohdissa, joissa työkalu leikkasi mallin, ja **keltainen** kohdissa, joissa mallin päälle jää ohut kerros raaka-aihiota, **oranssi** enemmälle, haalistuen 1 mm:stä ylöspäin leikkaamattoman raaka-aihion **harmaaksi**. Värit luodaan uudelleen jokaisella muutoksella samasta korkeuskartasta kuin paneelin luvut, joten vihreä ja punainen vastaavat Ylileikkaukset-riviä. Viiste leikkaa mallia tarkoituksella ja näkyy punaisena reunallaan.

## Lähetä G-koodi

Valitse ohjain kohdasta **Posti** ja paina {{ui:Download G-code}} (tai työkalupalkin {{ui:Post}}):

| Ohjain | Tiedosto | Huomautuksia |
|---|---|---|
| Fanuc-tyylinen ISO | .nc | %, O-numero, rivinumerot, T M6 ja G43 H, kiinteät syklit |
| GRBL | .nc | Ei työkalunvaihtajaa eikä kiinteitä sykliä: työkalunvaihto keskeyttää M0:lla, poraus kirjoitetaan tavallisina siirtoina |
| LinuxCNC | .ngc | T M6 ja G43 H, kiinteät syklit, M2 |
| Oma | mikä tahansa | Itse kirjoitettu tai muutettu posti: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Jokainen tiedosto alkaa kommenteilla ohjelmasta, raaka-aihiosta, työnollapisteestä ja työkaluista. Koordinaatit ovat millimetreissä, 3 desimaalilla. {{ui:Toolpath CSV}} ja {{ui:Toolpath JSON}} vievät itse liikkeet.

**Tarkista tuloste koneen omassa simulaattorissa ennen leikkaamista ja aja se ensin ilmassa raaka-aihion yläpuolella.** Kolme sisäänrakennettua postia ovat lähtökohtia, jotka noudattavat ohjainten dokumentoitua toimintaa; niitä ei ole todistettu millekään tietylle koneelle. Muutettu posti on itse todistettava. Miten sellainen kirjoitetaan: [Postiprosessorit](topic:post-processors).

## Tarkka STEP työpajalle

**Toiminnot**-välilehden G-koodipainikkeiden alla {{ui:Exact STEP (work coordinates)}} lataa tiedoston `<part>-work.step`: kappaleen tarkkana kiintokappaleena (todelliset sylinterit reikiä ja korotuksia varten, todelliset ympyrät niiden reunoille), origo tämän asetuksen työnollapisteessä ja Z työkalun akselia pitkin. Ne ovat koordinaatit, joita G-koodi käyttää, joten työpajan oma CAM-ohjelma tai tarkistin asettaa mallin ohjelman kanssa samaan linjaan siirtämättä sitä. Tiedosto sisältää vain kappaleen, ei raaka-aihiota eikä työstöratoja.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} kirjoittaa saman kiintokappaleen kappaleen omaan asentoon (Z ylös): katso [Vienti tulostukseen, STEP ja DXF](topic:export-files#for-other-cad-programs-step).

## Rajoitukset

- Taskut, ääriviivat, poraus ja viistot ovat 2,5-akselisia. Kaarevat pinnat voidaan viimeistellä 3D:ssä ([yhdensuuntainen ja harjanne](topic:finish-3d)), mutta niitä ei voi karkeistaa 3D:ssä (kartio jää portaiksi, kunnes se viimeistellään), eikä jäännöstyöstöä ole. Mukautuva raivaus on 2D (tasaiset pohjat).
- Vain kolme akselia: ei kallistusta, ei sorvausta, ei tarkastusta.
- Pitimiä ja varsia ei tarkisteta törmäysten varalta; varoitus tulee, kun leikkaus on syvempi kuin uran pituus.
- Syötöt ja nopeudet ovat aloitusarvoja. Posti on muokattavaa tekstiä, mutta se päättää vain, miten liikkeet kirjoitetaan; se ei voi muuttaa työstörataa, lisätä akseleita tai tuntea konetta ([Postiprosessorit](topic:post-processors) luettelee, mitä se ei voi tehdä).

## Lähetä ohjelma koneelle

CadCraft Studiossa työpöydällä, kun kone on asetettu Studioon, **Lähetä koneelle…** näkyy **Lataa G-koodi** -painikkeen vieressä ja lähettää saman ohjelman verkossa olevaan koneeseen. Sitä ei koskaan käynnistetä PartCraftista: se käynnistetään koneella, kun tilanne on turvallinen. Selaimessa painiketta ei näytetä (verkkosivu ei voi tavoittaa konetta omassa verkossa): ohjelma ladataan sen sijaan.
