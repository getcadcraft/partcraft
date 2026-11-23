---
title: Mittaus: osan paikantaminen ja työsiirtymän asettaminen
summary: Kosketa yläpintaa, sivua, reikää tai korotusta anturilla ja anna ohjaimen siirtää työsiirtymää sinne, missä osa todella on, tai pelkästään mittaa. Mitä kukin ohjain pystyy tekemään ja mitä ei ole todistettu.
keywords: mittaus, anturi, kosketusanturi, kosketusmittaus, työsiirtymä, G54, G31, G38.2, ohitus, vertailupiste, keskipisteen etsintä, reikä, korotus, reuna, nollapiste, mittaa, tarkastus, G10
from: 1f718b82
---

{{ui:Probe}} Manufacturessa kirjoittaa mittaussyklin ohjelmaan: anturi koskettaa osaa, ja ohjain siirtää työsiirtymää (G54) erolla, joka on löydetyn pinnan ja mallin mukaisen sijainnin välillä. Myöhemmät toimenpiteet leikkaavat siellä, missä osa todella on.

**Mitään tässä ei ole ajettu koneella.** Liikkeet ennen kosketusta ovat tavallisia liikkeitä: anturia ei valvota ennen itse mittausliikettä. Aja se hitaasti, ensin ilmassa, ja pidä kätesi syötön pysäytyksen päällä.

## Käyttö

1. **Työkalut**-välilehdellä ensimmäinen mittaustoimenpide lisää **kosketusanturin**: sen pallon halkaisijan ja mittaussyötön (100 mm/min, ellet aseta toista).
2. Paina Manufacturen työkalurivin {{ui:More}}-painiketta, sitten {{ui:Probe}}, ja napsauta, mitä kosketetaan. Jokainen valinta on yksi sykli, siinä järjestyksessä kuin napsautat:

| Valinta | Sykli | Mitä asetetaan |
|---|---|---|
| Tasainen pinta, joka katsoo työkaluakselia ylös | Yksi kosketus alaspäin | Z |
| Tasainen sivupinta kohtisuorassa X:ään tai Y:hyn | Yksi kosketus kohti pintaa, hieman sen yläreunan alapuolelta | X tai Y |
| Reikä tai korotus työkaluakselia pitkin | Neljä kosketusta (+X, −X, +Y, −Y) | Sen keskipisteen X ja Y |

3. **Tuloksella**: {{ui:Set the work offset}} tai {{ui:Measure only}}.
4. **Aloita näin kaukaa** ja **Etsi näin kaukaa ohi** kertovat, kuinka kaukana odotetusta pinnasta mittausliike alkaa ja kuinka pitkälle sen jälkeen anturi saa kulkea, ennen kuin ohjain luovuttaa. **Syvyys** on kuinka syvälle alapuolelle reiän, korotuksen tai sivupinnan yläreunasta pallo menee.

Aseta mittaustoimenpide ensimmäiseksi, ennen kuin mikään leikkaa.

## Mitä kukin ohjain kirjoittaa

| Ohjain | Kosketus | Tulos |
|---|---|---|
| Fanuc-tyylinen | `G31`, sijainti tallessa muuttujissa `#101`–`#104` | Siirtymämuuttujia (`#5221`–`#5223`) siirretään: löydetty − odotettu. Vain mittaus: ero jää muuttujaan `#110` (ja `#111`). |
| LinuxCNC | `G38.2`, sijainti tallessa nimetyissä parametreissa | `G10 L2 P1` uudella siirtymällä. Vain mittaus: `(DEBUG, …)`-viesti. |
| GRBL | `G38.2` | Yksi kosketus asettaa akselin komennolla `G10 L20 P1`. GRBL ei tunne muuttujia, joten se **ei voi laskea keskipistettä**: tiedosto kertoo sen kommentilla eikä aseta mitään. |

Laskenta on postprosessorin, joten voit muuttaa sitä: tapahtumat ovat `probe-move` ja `probe-set` ([Muokattavat postprosessorit](topic:post-processors)).

## Rajoitukset

- Yksi työsiirtymä (G54). Vain akseleihin nähden suorat pinnat: ei kulmia, ei kulmasykliä, ei työn kiertämistä.
- Ei työkalun asetinta, ei rikkoutuneen työkalun tarkistusta, ei koon mittaamista toleranssia vasten, ei raporttia.
- Karaa ei käynnistetä mittausta varten, ja jäähdytys pysyy pois; mitään ei tarkisteta sen suhteen, että karassa oleva työkalu on anturi.
- Raaka-aihion simulointi ei aja mittausrataa.
- Anturin oma kalibrointi (pallon siirtymä, tunnustimen taipuma, laukaisusuunta) kuuluu ohjaimelle.
