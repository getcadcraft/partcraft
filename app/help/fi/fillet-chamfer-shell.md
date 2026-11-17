---
title: Pyöristä, viistä ja ontota pyöristyksellä, viistolla ja kuorella
summary: Valitse särmiä ja lisää vakio- tai muuttuvasäteisiä pyöristyksiä sekä yhtä suuria, kahta etäisyyttä tai etäisyys-kulma -viisteitä, ontota osa Kuorella valitsemalla avattavat pinnat, vaihda muotoelementin käyttämät särmät tai pinnat ja korjaa yleisimmät virheet.
keywords: pyöristys, pyöristä, sulautus, viiste, viistä, kuori, ontota, seinän paksuus, särmät, pinnat, valitse särmät, Shift-napsautus, avoin pinta, tarkka ydin, verkkoydin, ei vielä toteutettu
from: e41c1c12
---

:::note
**Tässä versiossa** PartCraft rakentaa pyöristykset ja viisteet verkkoytimellä vain **suorille särmille kahden tasaisen pinnan välillä**: laatikon särmät sekä pursotusten ja leikkausten suorat särmät, ulko- tai sisänurkissa (sisänurkka saa lisää materiaalia). Pyöreät särmät, kuten reiän reunat, ja säde, joka muuttuu särmää pitkin, eivät ole vielä rakennettuja. Kun kaksi pyöristettyä särmää kohtaa nurkassa, pyöristykset viistetään (ne kohtaavat terävässä taitteessa), eivät sulauteta. **Kuori** toimii myös, verkkoytimen rakentamana: se avaa vain tasaisia pintoja, eri paksuisia seiniä ei vielä rakenneta, ja se on hidas osissa, joissa on paljon pyöreitä pintoja. Katso [Ei vielä toteutettu](topic:not-built-yet).
:::

{{ui:Pyöristys}} pyöristää särmät, {{ui:Viiste}} viistää ne ja {{ui:Kuori}} ontottaa osan. Kaikki kolme toimivat kappaleen särmille ja pinnoille, ja verkkoydin rakentaa ne. Niiden pyöristykset ovat facetteja kuten kaikki pyöreät pinnat (**Kaarevuus** määrittää, kuinka tarkasti); pyöreät pinnat ovat sylintereitä, joita voi valita ja mitata (katso [Verkkoydin](topic:solid-kernels)).

## Pyöristä tai viistä särmiä

### Valitse särmät ensin

1. Napsauta osan särmää. Koko särmä korostuu, ja oikea paneeli sanoo **Särmä**: sen tyyppi (Suora, Ympyrä tai kaari, Käyrä), pituus ja pinnat, joiden välissä se on.
2. Lisätäksesi särmiä {{key:Shift}}+napsauta niitä. Jokainen merkitään; {{key:Shift}}+napsauta merkittyä särmää poistaaksesi sen. Paneelin otsikko laskee ne (”4 särmää”), ja tilarivi sanoo: ”4 särmää valittu. Pyöristys tai Viiste pyöristää ne; Shift+napsautus valitsee lisää, Esc tyhjentää.”
3. Valitse {{ui:Pyöristys}} tai {{ui:Viiste}} työkalurivistä, tai samat painikkeet oikeasta paneelista.

Muotoelementti lisätään kaikilla valituilla särmillä: 2 mm:n pyöristys tai 1 mm:n viiste. Tilarivi sanoo esimerkiksi: ”Fillet1 lisätty (4 särmää). Muuta sen kokoa oikealta; Valitse särmät muuttaa, mitkä.”

### Tai lisää muotoelementti ensin

1. Kun mitään ei ole valittuna, valitse {{ui:Pyöristys}} tai {{ui:Viiste}}.
2. PartCraft siirtyy valintatilaan: oikean paneelin otsikko sanoo ”Fillet1: valitaan”, osa näkyy ennen pyöristystä (paneeli kertoo sen), ja työkalurivillä näkyy {{ui:Valmis}}.
3. Napsauta jokaista särmää lisätäksesi sen; napsauta uudelleen poistaaksesi. Tilarivi laskee ne.
4. Valitse {{ui:Valmis}} (tai paneelin {{ui:Valinta valmis}}), tai paina {{key:Esc}} tai {{key:Enter}}.

### Asetukset

| Asetus | Pyöristys | Viiste |
|---|---|---|
| Koko | **Säde (mm)**, oletus 2 | **Etäisyys (mm)** reunasta taaksepäin molemmilla pinnoilla, oletus 1 |
| **Särmät** | Kuinka monta | Kuinka monta |

Alla oleva luettelo nimeää jokaisen särmän kahden pinnan mukaan, kuten ”Särmä 1: Extrude1 päätepinta × Extrude1 sivu”. **Poista** poistaa yhden. {{ui:Valitse särmät}} palaa valintaan. Historian muotoelementin kaksoisnapsautus tekee saman.

Särmät muistetaan niiden kahden pinnan mukaan, jotka ne yhdistävät, joten ne pysyvät oikealla särmällä, kun muutat mittaa aiemmin historiassa.

### Muuttuvat pyöristykset ja viistetyypit

- **Muuttuva säde** (pyöristys): ei vielä toteutettu tässä versiossa (”Pyöristys, jonka säde muuttuu särmää pitkin: ei vielä toteutettu (se vaatii tarkan ytimen). Anna sille yksi säde.”). Tarkan ytimen kanssa: valitse se ja aseta **Loppusäde (mm)**. Säde muuttuu lineaarisesti **Säde**-arvosta kunkin särmän toisessa päässä **Loppusäde**-arvoon toisessa päässä; **Vaihda päät** kääntää sen.
- **Tyyppi** (viiste): **Yhtä suuri etäisyys**, **Kaksi etäisyyttä** (**Toinen etäisyys** toisella pinnalla) tai **Etäisyys ja kulma** (etäisyys yhdellä pinnalla, viiste **Kulma (°)** siihen pintaan nähden). **Käännä puolet** asettaa ensimmäisen etäisyyden toiselle pinnalle.

## Ontota osa

1. Napsauta tasaista pintaa, joka jätetään auki, esimerkiksi laatikon yläpintaa. Tai {{key:Shift}}+napsauta useita pintoja.
2. Valitse {{ui:Kuori}} työkalurivistä tai {{ui:Kuori, tämä pinta auki}} pinnan paneelista.

Osasta tulee 2 mm:n seinä, valitut pinnat auki. Asetukset:

| Asetus | Mitä se tekee | Oletus |
|---|---|---|
| **Seinä (mm)** | Seinän paksuus | 2 |
| **Seinät kasvavat ulospäin (pinnat pysyvät sisällä)** | Rastitettuna: seinät lisätään ulkopuolelle, joten sisäpuoli säilyttää osan koon | Pois: seinät menevät sisäänpäin ja ulkopuoli säilyttää kokonsa |
| **Avoimet pinnat** | Kuinka monta pintaa poistetaan | |

Sisäänpäin seinät ovat tarkalleen seinän paksuisia: ulkonurkat pysyvät teräväkulmaisina, sisänurkat tulevat pyöristettyinä (säde = seinä), ja osan läpi menevä reikä saa ympärilleen seinän muodostaman putken. Ulospäin seinät lisätään alkuperäisen pinnan ulkopuolelle, joka jää ontoksi, ja ulkoreunat tulevat pyöristetyiksi. Sisäpinnat nimetään niiden pintojen mukaan, joita ne siirtävät, joten voit valita ne.

Vain tasaisia pintoja voi avata: kaarevan valitseminen sanoo ”Kuori: tässä versiossa se avaa vain tasaisia pintoja (verkkoydin rakentaa sen).” Kuori on hidas osissa, joissa on paljon pyöreitä pintoja (useita sekunteja tuhatta kolmiota kohden): käytä suunnittelussa karkeampaa **Kaarevuus**-asetusta.

{{ui:Valitse pinnat}} vaihtaa, mitkä pinnat ovat auki, samalla tavalla kuin särmien valinta. Luettelo nimeää jokaisen, esimerkiksi ”Pinta 1: Extrude1 päätepinta”. Kuorta ilman avoimia pintoja ei sallita: ”Valitse poistettavat pinnat (avoimet), sitten kuori.”

## Järjestyksellä on merkitystä

Muotoelementit rakennetaan ylhäältä alas. Pyöristys ennen kuorta kuoritaan osan mukana, joten sisäpuolellekin tulee pyöristetyt nurkat. Pyöristys kuoren jälkeen pyöristää vain valitsemasi särmät. Siirrä muotoelementtejä painikkeilla {{ui:Siirrä ylös}} ja {{ui:Siirrä alas}} (katso [Muuta osaa sen historian kautta](topic:edit-history)).

Toistot ja peilaukset eivät voi kopioida pyöristystä, viistettä tai kuorta: ”Fillet1 muuttaa kappaleen särmiä tai seinämiä; sitä ei voi kopioida. Kopioi muotoelementit, jotka tekevät kiintokappaleita (pursotukset, kierrot, reiät, tuonnit).” Toista ensin reiät tai leikkaukset, pyöristä sitten kaikkien kopioiden särmät yhdellä pyöristyksellä.

## Kun se epäonnistuu

| Viesti | Mitä tehdä |
|---|---|
| ”5 mm:n pyöristys ei mahdu tähän (se on liian suuri yhdelle särmän viereiselle pinnalle, tai särmät kohtaavat nurkassa, jota ydin ei pysty sulauttamaan).” | Käytä pienempää sädettä, tai pyöristä kerralla vähemmän särmiä (useita pyöristysmuotoelementtejä, pienin viimeisenä) |
| ”Pyöristettävä särmä on poissa: särmä Extrude1:n ja Cut2:n välillä.” | Aiempi muutos poisti tuon särmän. Valitse {{ui:Valitse särmät}}, poista punainen särmä ja valitse uusi |
| ”Kuorta ei voitu tehdä tällä paksuudella (…).” | Seinä on paksumpi kuin mallin kapea kohta tai pyöristyksen säde. Tee seinästä ohuempi tai pyöristykset seinää suuremmiksi |
| ”Tuolla pinnalla ei ole nimeä, jota historia voi seurata; valitse toinen.” | Valitse muotoelementin tekemä pinta (useimmat pinnat ovat sellaisia) |
| ”Pyöristys: tässä versiossa vain suorat särmät kahden tasaisen pinnan välillä (verkkoydin rakentaa ne). Pyöristä tai viistä kaarevat särmät luonnoksessa.” (myös Viiste) | Valittu särmä on pyöreä, kuten reiän reuna, tai se on kaarevalla pinnalla. Poista se {{ui:Valitse särmät}}-toiminnolla ja pyöristä tai viistä tuo nurkka luonnoksessa |
| ”Pyöristys, jonka säde muuttuu särmää pitkin: ei vielä toteutettu (se vaatii tarkan ytimen). Anna sille yksi säde.” | Poista **Muuttuva säde** -valinta |
| ”Pyöristys verkkoytimellä: missä pyöristetyt särmät kohtaavat, ne viistetään, eivät sulauteta.” (⚠ historiassa) | Varoitus, ei virhe: osa on rakennettu. Valitut särmät kohtaavat nurkassa, ja pyöristykset kohtaavat siinä terävänä taitteena. Pyöristä vähemmän särmiä tai hyväksy taite |
| ”Kuori: tässä versiossa se avaa vain tasaisia pintoja (verkkoydin rakentaa sen).” | Avoin pinta on kaareva. Valitse {{ui:Valitse pinnat}} ja poista se; avaa vain tasaisia pintoja |

## Rajat

Tässä versiossa pyöristykset ja viisteet toimivat vain suorilla särmillä kahden tasaisen pinnan välillä, yhdellä säteellä, ja nurkassa kohtaavat pyöristykset viistetään. Kuoret avaavat vain tasaisia pintoja. Tarkalla ytimellä muuttuva pyöristys muuttuu lineaarisesti pitkin kutakin särmää (yksi laki muotoelementtiä kohden; ei pisteissä asetettuja sädesarjoja). Pintapyöristykset, täyspyöristykset ja kuoret, joilla on eri seinäpaksuudet, eivät ole vielä rakennettuja.
