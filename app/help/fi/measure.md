---
title: Mittaa etäisyydet, kulmat ja massa
summary: Napsauta kahta kohdetta näkymässä nähdäksesi pienimmän etäisyyden, kulman ja ΔX ΔY ΔZ; lue reunan pituus, reiän halkaisija, pinnan pinta-ala tai pisteen koordinaatit; hae kappaleen tai kokoonpanon tilavuus, massa, massakeskipiste ja hitausmomentti.
keywords: mittaa, etäisyys, pienin etäisyys, kulma, pituus, säde, halkaisija, pinta-ala, koordinaatit, delta, tarkastele, massaominaisuudet, massa, paino, massakeskipiste, hitausmomentti, tiheys, materiaali
from: 20bda0b7
---

**Mittaa** toimii mallilla kaikissa työtiloissa (Suunnittelu, Muoto, Simulointi, Generatiivinen, Valmistus) ja kokoonpanossa. Se löytyy **Näytä**-ryhmän {{ui:Views}}-valikosta, tai paina {{key:M}}. Kortti avautuu näkymän vasempaan yläkulmaan.

## Mittaa yksi kohde

Napsauta kärkeä, reunaa tai pintaa. Kortti näyttää:

- **Pisteen** (kärki, reunan keskipiste tai ympyrän keskipiste): sen X, Y, Z.
- **Reunan**: suora, ympyrä tai käyrä, ja sen pituus; ympyrälle myös säde, halkaisija ja keskipiste.
- **Pinnan**: tasainen, sylinteri, kartio jne., ja sen pinta-ala; tasaisen pinnan normaali; sylinterin säde ja halkaisija (reiän koko). Pinta-alat ovat verkkoydimen luomien fasettien pinta-aloja.
- **Koko kappaleen**: pidä {{key:Shift}} alhaalla ja napsauta osaa. Saat sen tilavuuden, pinta-alan, massan ja hitausmomentin (katso alla).

Osoitin tarttuu kärkiin, reunojen keskipisteisiin ja ympyröiden keskipisteisiin 10 pikselin säteellä; pieni sininen piste näyttää tarttumisen ennen napsautusta. Reiän keskipisteen valitsemiseksi osoitetaan reiän keskiosaa; reunan (ympyrän) valitsemiseksi osoitetaan reunaa.

## Mittaa kahden kohteen välillä

Napsauta toista kohdetta. Kortti lisää:

- **Pienimmän etäisyyden** ja kaksi lähintä pistettä, piirrettynä näkymään viivalla niiden välillä.
- **ΔX, ΔY, ΔZ** ensimmäisestä lähimmästä pisteestä toiseen.
- **Kulman** kahden tasaisen pinnan välillä (niiden normaalien välillä, 0–180°), kahden suoran reunan tai akselin välillä (0–90°) tai reunan ja pinnan välillä.
- **Tasojen välin** kahdelle yhdensuuntaiselle tasaiselle pinnalle, **Keskipisteiden välin** kahdelle ympyrälle tai reiälle ja **Akselien välin** kahdelle yhdensuuntaiselle reiälle tai sylinterille.

Kolmas napsautus aloittaa uuden parin. {{key:Esc}} tyhjentää valinnat; toinen {{key:Esc}} (tai {{ui:Close}}) sulkee Mittaa. {{ui:Copy}} vie tulokset leikepöydälle sarkaimilla erotettuna tekstinä, valmiina liitettäväksi taulukkolaskentaan.

### Kuinka tarkka se on

PartCraft rakentaa kappaleen verkkoydimellä, joten etäisyydet lasketaan verkon fasetteihin, ja kortti sanoo **approximate: of the facets** eli likimääräinen, fasettien mukaan. Tulos on oikea tasaisille pinnoille ja kärkien välillä, hieman pois kaarevista. Tarkempi **Käyrät**-asetus tuo ne lähemmäs. Tarkka mittaus oikeilla pinnoilla vaatii tarkan ytimen: ei vielä toteutettu tässä versiossa.

## Massaominaisuudet

Valitse {{ui:Mass properties}} kortista tai {{ui:Views}}-valikosta. Kappaleella valitse kortista **Materiaali** (teräs, alumiini, muovit ja muut tavanomaisilla tiheyksillään). Kokoonpanossa jokainen osa käyttää ominaisuuksissaan asetettua materiaalia (valitse osa ja sitten **Materiaali**), ja tulos koskee kaikkia osia yhdessä.

Kortti näyttää massan, tilavuuden, pinta-alan, massakeskipisteen, hitausmomenttitensorin (Ixx, Iyy, Izz ja tulot Ixy, Iyz, Ixz, kg·mm², massakeskipisteen suhteen maailman akseleiden suunnassa) sekä pääasialliset momentit. Ilman materiaalia se näyttää saman yksikkötiheyden mukaan (mm⁵) eikä massaa.

Luvut ovat tarkkoja verkkoydimen luomalle kolmioidulle kiintokappaleelle (kaarevat pinnat fasetteina), joten pyöreä osa tulee hieman liian pieneksi, ja kortti kertoo siitä. Materiaalien tiheydet ovat tyypillisiä käsikirja-arvoja; todellinen seos tai laatu voi erota muutaman prosentin.

## Rajoitukset

- Tartunnat voivat löytää pisteen toisen geometrian takaa; tarkista, että kortti näyttää sen, mitä tarkoitettiin.
- Mittaa suljetaan, kun avataan luonnos tai piirustusarkki tai vaihdetaan työtilaa.
