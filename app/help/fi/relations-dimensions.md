---
title: Määritä luonnos täysin suhteilla ja mitoilla
summary: Lisää suhteita oikeasta paneelista ja mittoja Mitoitus-työkalulla, lue alimääritelty, täysin määritelty ja ylimääritelty tila värien perusteella ja korjaa ylimääritelty luonnos.
keywords: suhteet, rajoitteet, mitoitus, älymitoitus, täysin määritelty, alimääritelty, ylimääritelty, vapausasteet, yhtyvä, vaakasuora, pystysuora, yhdensuuntainen, kohtisuora, tangentti, yhtä suuri, samankeskinen, keskikohta, lukitse, ristiriita, turha suhde
from: e76d047a
---

Luonnos on **täysin määritelty**, kun jokainen piste ja jokainen koko on lukittu suhteilla ja mitoilla. Täysin määritelty luonnos muuttuu vain, kun muutat lukua, joten osa käyttäytyy ennustettavasti, kun muokkaat sitä myöhemmin. PartCraft ei pakota määrittelemään luonnosta täysin, mutta se näyttää aina, kuinka lähellä olet.

## Lue luonnoksen tila

Tila näkyy kolmessa paikassa: näkymän vasemman yläreunan merkissä, oikean paneelin yläreunan viestissä ja historian lipussa.

| Tila | Merkki | Geometrian väri | Mitä se tarkoittaa |
|---|---|---|---|
| Alimääritelty | ”Alimääritelty · 3 vapausastetta” | Sininen | Osa geometriasta voi vielä liikkua. Vedä sinistä geometriaa nähdäksesi, mihin suuntaan |
| Täysin määritelty | ”Täysin määritelty” | Muste (musta Paperi-teemalla, vaalea Malli-teemalla) | Jokainen piste ja koko on lukittu |
| Ylimääritelty | ”Ylimääritelty” | Punainen kyseisissä suhteissa | Osa suhteista on ristiriidassa keskenään, tai yksi on jo muiden antama |

Apugeometria on harmaa ja katkoviivainen tilasta riippumatta. Valitut kohteet ovat oransseja. ”Vapausaste” on yksi tapa, jolla jokin voi vielä liikkua: vapaalla pisteellä on kaksi (vasemmalle–oikealle ja ylös–alas), vapaalla ympyrällä kolme (sen keskipiste ja säde).

Oikean paneelin viestin alla oleva selite toistaa värit.

## Lisää mitoitus

1. Paina {{key:D}} tai valitse {{ui:Mitoitus}}.
2. Napsauta mitattavaa kohdetta:
   - **yksi viiva**: sen pituus;
   - **yksi ympyrä**: sen halkaisija; **yksi kaari**: sen säde;
   - **kaksi pistettä** (päätepiste, keskipiste, vapaa piste tai origo): niiden välinen etäisyys;
   - **piste ja viiva**: etäisyys pisteestä viivaan;
   - **kaksi yhdensuuntaista viivaa**: niiden välinen etäisyys; **kaksi viivaa kulmassa**: niiden välinen kulma.
3. Yhden kohteen jälkeen tilarivi sanoo ”Napsauta toista kohdetta tai napsauta kohtaa, johon mitoitus menee.” Napsauta toista kohdetta tai tyhjää tilaa siinä kohdassa, johon haluat luvun.
4. Lukukenttä aukeaa nykyisen arvon kanssa. Kirjoita koko ja paina {{key:Enter}}. {{key:Esc}} säilyttää mitatun arvon.

**Mihin luku sijoitetaan, määrää tyypin** vinolle viivalle tai kahdelle pisteelle: sijoita se ylä- tai alapuolelle, jolloin saat vaakaetäisyyden. Sijoita se vasemmalle tai oikealle, jolloin saat pystyetäisyyden. Muualle sijoitettuna saat todellisen (tasatun) etäisyyden.

Kenttä hyväksyy tavalliset luvut millimetreinä tai asteina, esimerkiksi `25`, `12.5` tai `1e3`. Alussa oleva `⌀`, `Ø` tai `R` ja lopussa oleva `mm` tai `°` jätetään huomiotta. Kulmat ovat 0–180 astetta. Laskutoimituksia, kuten `20+5`, ei hyväksytä. Kun haluat liittää koon muuttujaan tai kaavaan, aloita se merkillä `=`.

Mitoituksen muuttamiseksi myöhemmin kaksoisnapsauta sen lukua luonnoksessa tai valitse oikean paneelin luettelossa sen vierestä **Muokkaa**.

:::tip
Voit myös valita ensin geometrian (Valitse-työkalu) ja valita mitoituspainikkeen oikeasta paneelista: {{ui:Etäisyys}}, {{ui:Vaakaetäisyys}}, {{ui:Pystyetäisyys}}, {{ui:Säde}}, {{ui:Halkaisija}} tai {{ui:Kulma}}. Näytetään vain valintaan sopivat. Näin ympyrälle annetaan säde halkaisijan sijaan.
:::

## Lisää suhde

Suhteet lisätään oikeasta paneelista, ei työkalulla.

1. Paina {{key:S}} ja siirry Valitse-tilaan.
2. Napsauta yhtä kohdetta ja sitten {{key:Shift}}+napsauta toista, jos suhde tarvitsee kaksi. Myös origo voidaan valita.
3. Oikea paneeli sanoo ”Valittu: viiva l3, piste p1” ja näyttää painikkeen jokaiselle sopivalle suhteelle, kuten {{ui:∥ Yhdensuuntainen}} tai {{ui:• Yhtyvä}}.
4. Valitse painike. Luonnos ratkeaa heti.

Jos mikään suhde ei sovi, paneeli sanoo ”Mikään suhde ei sovi tähän valintaan. Valitse yksi tai kaksi kohdetta (Shift+napsautus lisää).”

Täydellinen luettelo suhteista, mitä kukin tarvitsee ja mitä se tekee, on kohdassa [Luonnoksen suhteet ja mitoitus](topic:sketch-relations).

Suhteet näkyvät luonnoksessa pieninä merkkeinä geometrian vieressä (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Yhtyvien pisteiden merkit piilotetaan, ellei geometria ole valittu tai suhteessa ole ongelma. Napsauta merkkiä valitaksesi suhteen.

## Esimerkki: L-muotoinen kiinnikeprofiili

1. Luonnostele tasolle **Etutaso**. Viiva-työkalulla aloita origosta ja napsauta L:n kuusi kulmaa, lopeta origoon. Ketju päättyy itsestään, kun napsautat ensimmäistä pistettä.
2. Lähes vaaka- tai pystysuoraan piirretyillä viivoilla on jo H- ja V-suhteet, paitsi viimeinen: viiva, joka päättyy olemassa olevaan pisteeseen, ei saa automaattista suhdetta. Paina {{key:S}}, napsauta tuota viimeistä viivaa ja valitse oikeasta paneelista {{ui:V Pystysuora}}. Merkki sanoo ”Alimääritelty · 4 vapausastetta”.
3. Paina {{key:D}}. Napsauta alareunan viivaa, napsauta sen alapuolelle, kirjoita `80` ja paina {{key:Enter}}.
4. Napsauta vasenta viivaa, napsauta sen vasemmalle puolelle, kirjoita `60` ja paina {{key:Enter}}.
5. Mitoita lyhyt yläviiva `20` ja sisempi pystyviiva `45` samalla tavalla.
6. Merkki sanoo nyt **Täysin määritelty**, ja koko L muuttuu musteen väriseksi.

## Korjaa ylimääritelty luonnos

Kun uusi suhde tai mitoitus on ristiriidassa muiden kanssa, PartCraft ei siirrä mitään. Geometria pysyy täsmälleen ennallaan, kyseiset suhteet muuttuvat punaisiksi ja tilarivi nimeää ne:

- ”Ylimääritelty: Vaakasuora, Etäisyys 40 — kaikkia ei voida täyttää. Kumoa tai poista yksi niistä.” Suhteet ovat ristiriidassa.
- ”Ylimääritelty: Yhdensuuntaisuus on jo pääteltävissä. Poista se.” Suhde ei lisää mitään, koska muut suhteet jo pakottavat sen. (Esimerkiksi suorakulmion sivut ovat jo yhdensuuntaiset.)

Korjaa se seuraavasti:

1. Paina {{key:Mod+Z}} kumotaksesi viimeisen muutoksen, tai
2. etsi punainen kohde oikean paneelin luettelosta **Suhteet ja mitoitus** (sitä sisältävä ryhmä on auki ja punainen) ja valitse sen vierestä **Poista**. Voit myös napsauttaa sen merkkiä tai lukua luonnoksessa ja painaa {{key:Delete}}.

:::note
Tässä versiossa ei ole ”ohjattuja” (vertailu-) mittoja. Mitoitus, joka vain raportoisi koon, jonka muut suhteet jo määräävät, käsitellään ylimääriteltynä. Lue koot sen sijaan paneelista: valitse viiva ja katso Mitoitus-painikkeita, tai tarkista osan tiedot pursotuksen jälkeen.
:::

Ylimääritelty luonnos, jossa on todellinen ristiriita, saa sitä käyttävän muotoelementin epäonnistumaan (”Ylimääritelty: 1 suhde – kaikkia ei voida täyttää.”), ja historia merkitsee sen **⚠ virhe**. Luonnos, joka on vain ylimääräinen, rakentuu silti, ⚠-varoituksella.

## Vedä selvittääksesi, mikä on vapaana

Valitse-tilassa vedä mitä tahansa sinistä pistettä tai viivaa. Ratkaisija siirtää sitä mahdollisimman vähän ja säilyttää kaikki suhteet. Jos vetäminen rikkoisi suhteen, geometria palautuu takaisin. Tämä on nopein tapa nähdä, mikä mitoitus puuttuu vielä.

## Suhdeluettelo

Kun mitään ei ole valittu, oikea paneeli luettelee **Suhteet ja mitoitus**. Jokaisella rivillä on:

- **Muokkaa** (vain mitoitukset): avaa lukukentän;
- **Valitse**: valitsee sen luonnoksessa;
- **Poista**: poistaa sen.

Saman tyyppiset suhteet, jotka esiintyvät useammin kuin kerran, jakavat yhden rivin, kuten ”Yhtyvä × 5” suorakulmiolle, joka on sidottu origoon. Avaa rivi napsauttamalla: jokainen suhde on luetteloitu sen mukaan, mitä se sitoo (”piste p2, piste p4”), ja sillä on oma **Valitse** ja **Poista**. Itse rivillä on:

- **Valitse**: valitsee ne kaikki luonnoksessa;
- **Poista kaikki**: poistaa ne kaikki kerralla ({{key:Mod+Z}} palauttaa ne).

Ryhmä, joka sisältää ylimääritellyn suhteen, aukeaa itsestään, ja sen nimi on punaisella. Mitoitukset luetellaan aina kukin omalla rivillään arvoineen.

Kun geometria on valittu, luettelo näyttää vain **Valinnan suhteet**.
