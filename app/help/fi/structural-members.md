---
title: Kehykset teräsprofiileista
summary: Aseta teräsprofiileja yhden tai useamman luonnoksen viivoja pitkin hitsatuksi kehykseksi: vinoleikatut tai päittäiset kulmat, sovitetut päät, päätyhatut, vahvikelevyt ja sahausluettelo pituuksilla ja päiden kulmilla.
keywords: hitsattu rakenne, rakennesauva, kehys, teräskehys, putki, neliöputki, hss, rhs, shs, putki, chs, leveäpuolainen, i-palkki, w-palkki, ipe, hea, heb, kanava, upn, kulma, vinoleikkaus, päittäisliitos, sovitus, päätyhattu, vahvikelevy, sahausluettelo
from: 59071e5a
---

**Rakennesauva** asettaa teräsprofiilin jokaisen valitsemasi luonnoksen viivan varrelle. Piirrä kehys viivoina (jokainen viiva on yksi sauva), valitse sitten profiili: sauvat rakennetaan, niiden kulmat typistetään ja pidennetään, ja sahausluettelo kertoo, kuinka pitkiä kappaleet ovat ja millaisessa kulmassa ne sahataan.

## Tee kehys

1. Piirrä kehys viivoina luonnokseen, esimerkiksi suorakulmio ylätasolle. Apugeometriaksi merkityt viivat jätetään pois.
2. Kun luonnos on valittuna, valitse {{ui:Lisää}} › {{ui:Rakennesauva}}. Jokainen luonnoksen viiva saa sauvan.
3. Valitse paneelista profiilin **Sarja** ja **Koko**. Sarjat ovat AISC-taulukot (W, S, C, L, HSS-putket, Putki) ja EN 10365 (IPE, HEA, HEB, UPN).

### Kehys 3D:ssä

Useiden luonnosten viivat muodostavat yhden kehyksen: ylätason suorakulmio ja tasoilla pystyssä olevien luonnosten jalat kohtaavat päistään 3D:ssä. Valitse paneelin kohdassa **Viivojen mukaan** jokainen luonnos, jonka viivoja sauvat seuraavat. Päät, jotka kohtaavat mikrometrin tarkkuudella, liitetään yhteen.

## Aseta profiili viivalleen

- **Kierto (°)** kääntää profiilin viivansa ympäri. Palkki seisoo syvyytensä pystyssä (pystysauvalla syvyys osoittaa eteen päin).
- **Viivalla** valitsee, mikä profiilin piste on viivalla: keskipiste, tai profiilin ääriviivan kulma tai sivun keskikohta. ”Alakeskikohta” asettaa kehyksen luonnostason päälle eikä sen läpi.

## Kulmat ja liitokset

| Missä sauvat kohtaavat | Mitä tapahtuu |
|---|---|
| Kaksi sauvaa päittäin, **Kulmat: Vinoleikkaus** | Molemmat leikataan tasolla niiden puolivälissä, kuten kuvakehyksessä |
| Kaksi sauvaa päittäin, **Kulmat: Päittäin** | Ensimmäinen sauva jatkuu toisen kaukaiselle pinnalle; toinen leikataan suoraan ensimmäisen lähipinnan kohdalta |
| Sauva päättyy toisen sauvan keskikohtaan (T) | Se leikataan sovitettuna toisen sauvan ulkopintaa vasten |
| Kolme tai useampi päättyy yhteen pisteeseen | Ensimmäinen jatkuu suoraan toisten ohi; toiset leikataan sovitettuina sitä vasten |

Ensimmäinen sauva on se, jonka viiva tulee ensin: viivat säilyttävät piirtämisjärjestyksensä, luonnos kerrallaan siinä järjestyksessä, jossa luonnokset valittiin.

## Päätyhatut ja vahvikelevyt

- **Päätyhatut** sulkevat jokaisen vapaan pään profiilin ääriviivan muotoisella levyllä, jonka paksuus asetat, pään ulkopuolelle.
- **Vahvikelevyt** asettavat kolmion muotoisen levyn jokaiseen kulmaan, jossa kaksi sauvaa kohtaa kulmassa: **Vahvikelevyn koko** kunkin sauvan varrella kulmasta, **Vahvikelevyn paksuus** poikkisuunnassa, keskitettynä kulman tasolle.

## Sahausluettelo

Paneeli listaa jokaisen kappaleen, ja identtiset kappaleet ryhmitellään: profiili, pituus (pitkästä pisteestä pitkään pisteeseen, kuten sen merkitsisit sahattavaksi), miten kukin pää leikataan (suoraan, kulma suorasta tai sovitettuna), ja mihin sauvoihin ne kuuluvat. Päätyhatut ja vahvikelevyt luetellaan kokoineen. {{ui:Tallenna sahausluettelo (CSV)}} tallentaa sen taulukkolaskentaan.

Putkeen, jolla on pyöristetyt kulmat, sovitettu sauva ulottuu hieman putken kulmasäteen sisään, joten sen pitkän pisteen pituus on muutama millimetri enemmän kuin pintojen välinen rako.

## Rajoitukset

- Sauvat seuraavat vain suoria viivoja; kaaret ja splinit luonnoksessa jätetään pois.
- Liitokset leikataan, eivät hitsata: hitsiharjanteita ei piirretä, ja kehys on yksi kiintokappale.
- Profiilit piirretään taulukon mitoista: W-profiilit juurisäteineen, S-profiilit ja kanavat rinnakkaisine laippoineen, putket kulmasäteineen; reikiä, päiden valmistelua ja hitsivälejä ei tehdä puolestasi.
- Rakennesauvat rakennetaan verkkoytimellä. Tarkan ytimen ollessa päällä (vain kehittäjille) ne ilmoittavat sen eivätkä rakennu.
