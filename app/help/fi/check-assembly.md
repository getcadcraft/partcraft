---
title: Tarkista kokoonpano törmäysten ja liikkeen varalta
summary: Etsi päällekkäisiä osia Törmäys-toiminnolla, vedä minkä tahansa nivelen arvoja nähdäksesi liikkeen ja pyyhkäise nivel sen alueen läpi löytääksesi kohdat, joissa osat törmäävät.
keywords: törmäystarkistus, törmäys, yhteentörmäys, päällekkäisyys, kierteen sovite, kierteen syvyyden epäsuhta, koskettavat pinnat, piilota, suodatin, liike, liiketutkimus, pyyhkäisy, liikealue, tarkista
from: 9c98db46
---

Kaksi tarkistusta toimii osille niiden sijoittelun mukaan: **Törmäys** etsii päällekkäistä materiaalia juuri nyt, ja **liiketarkistus** liikuttaa yhtä niveltä sen alueen läpi ja etsii päällekkäisyyksiä matkan varrelta.

## Tarkista törmäys

1. Avaa tai rakenna kokoonpano (katso [Rakenna kokoonpano nivelillä](topic:build-assembly)).
2. Valitse {{ui:Törmäys}}.

Tilarivi kertoo tuloksen:

- ”Törmäystä ei ole 3 osan välillä (… ms).” Mikään ei mene päällekkäin.
- ”Törmäys: Flange1 ja Flange2: Päällekkäisyys, 2.5 mm³.” Jokainen pari, tuloksen laji ja niiden yhteinen tilavuus.

Vasemman **Kokoonpano**-kentän **Törmäykset**-kohdassa näkyy: ”Ei yhtään”, ”2 tulosta” (näkyvät) tai ”Ei tarkistettu”. Kun mitään ei ole valittu, oikea paneeli luettelee jokaisen tuloksen kohdassa **Törmäykset**.

Tulos tyhjenee aina, kun kokoonpano muuttuu. Aja {{ui:Törmäys}} uudelleen nivelen siirron jälkeen. Jokainen osapari tarkistetaan jokaista muuta vastaan, joten suuret kokoonpanot vievät kauemmin.

### Tuloslajit

| Laji | Tarkoittaa |
|---|---|
| **Päällekkäisyys** | Osat jakavat tilavuutta: todellinen törmäys. |
| **Kierteen syvyyden epäsuhta** | Yhteinen tilavuus on yhden osan kierteen sisällä mutta toisen osan kierteen ohi: pultti on kierretty syvemmälle kuin sen reikä, tai sileä varsi kierretyssä reiässä. |
| **Kierteen sovite (koristekierteet)** | Yhteinen tilavuus on molempien osien kierteiden sisällä: pultti kierretyssä reiässä. Koristekierteet piirretään kierteen täydessä koossa, joten ne menevät aina hieman päällekkäin. |
| **Koskettavat pinnat** | Ei yhteistä tilavuutta, mutta pinnat ovat kosketuksessa (0.001 mm:n tarkkuudella). |

Mallinnetut kierteet (katso [Kierteet akseleilla ja porauksissa, piirretyt tai mallinnetut](topic:threads)) ovat todellista geometriaa: niiden yhteinen osa on **Päällekkäisyys**.

### Piilota se, mitä et tarvitse nähdä

Kohdassa **Törmäykset** **Näytä**-osiossa on ruutu jokaiselle lajille: poista rasti kohdista **Kierteen sovite** ja **Koskettavat pinnat** nähdäksesi vain merkitykselliset törmäykset. Tuloksen vieressä oleva **Piilota tämä pari** piilottaa osaparin, minkä tahansa lajin se onkin. Piilotetut tulokset lasketaan (”2 tulosta piilotettu näillä suodattimilla”), ja **Näytä piilotetut parit uudelleen** palauttaa parit. Tilarivi laskee piilotetut tulokset myös.

Suodattimet tallennetaan kokoonpanon mukana, ja jokainen muutos on yksi {{key:Mod+Z}}-vaihe. **Pyyhkäise nivel törmäysten varalta** (alla) käyttää niitä myös. Suodattimilla varustettu kokoonpano tallennetaan versiona 4, jonka aiemmat PartCraft-versiot kieltäytyvät avaamasta sen sijaan, että ne menettäisivät suodattimet.

## Seuraa liikettä

1. Valitse liikkuva nivel (kaikki paitsi jäykkä) vasemmalla olevasta luettelosta.
2. Vedä liukusäädintä jonkin sen arvon alla, kuten **Kulma (°)** tai **Siirtymä (mm)**. Osa liikkuu vetäessäsi.
3. Päästä irti. Uusi sijainti säilyy, ja sen voi kumota {{key:Mod+Z}}-näppäimellä.

Voit myös kirjoittaa kulman tai siirtymän kenttään ja painaa {{key:Enter}}.

Suljetulla silmukalla (mekanismissa) oleva nivel liikuttaa koko silmukkaa: vetämäsi arvo säilyy, ja silmukan muut niveleet seuraavat (katso [Suljetut silmukat](topic:build-assembly#closed-loops-linkages)).

## Pyyhkäise nivel törmäysten varalta

1. Valitse nivel, joka liikkuu.
2. Nivelelle, jolla on useita arvoja (sylinterinivel, tasomainen, pallo, tappi urassa), valitse, mitä arvoa pyyhkäistään kohdassa **Tarkista liikkeet**.
3. Valitse {{ui:Tarkista liike törmäysten varalta}}.

PartCraft siirtää tätä arvoa 25 asennon läpi 24 yhtä suuressa askeleessa, muiden pysyessä ennallaan: kulma −180°:sta 180°:een (kallistus −90°:sta 90°:een), pituus miinusarvosta plusarvoon, joka vastaa suurimman osan kokoa. Se raportoi:

- ”Ei törmäystä missään kohdassa Kulma (°) arvosta -180 arvoon 180 (25 asentoa tarkistettu).”
- ”6 25 asennosta törmää, ensimmäinen kohdassa Kulma (°) 45 (12.4 mm³).” Ensimmäinen törmäävä asento ja siinä oleva päällekkäisyys.

Painike on harmaana jäykille niveleille, jotka eivät liiku. Pyyhkäisy tarkistaa vain asennot, ei niiden välistä matkaa: ohut osa voisi kulkea toisen läpi kahden askeleen välissä.

:::note
Kosketusta ja painovoimaa ei ole vielä toteutettu. Ilman rajoja pyyhkäisy kattaa koko alueen. Anna arvolle **Rajat** (katso [Osaluettelo, räjäytysnäkymät ja liikkuvat osat](topic:assembly-bom-explode)), niin pyyhkäisy kattaa vain ne, joten saranaa, joka aukeaa 90°, tarkistetaan 90°:n yli.
:::

## Liiketutkimus

**Kokoonpano › Liike** ohjaa yhden nivelen arvoa alusta loppuun antamasi ajan kuluessa (tasainen nopeus, tasoitettu, siniaalto tai edestakaisin), asettaa kokoonpanon jokaiseen askeleeseen niveleineen ja suljettuine silmukoineen ja raportoi, mitkä osat törmäävät ja kuinka lähelle ne tulevat. **Lisää piste** seuraa osan keskikohtaa tai klikkaamaasi pistettä, ja kortti piirtää sen sijainnin, nopeuden ja kiihtyvyyden, nivelen arvon ja välyksen ajan funktiona. **Tallenna CSV** ja **Tallenna kaavio** kirjoittavat ne ulos. Nopeus ja kiihtyvyys lasketaan tallennetuista sijainneista, joten terävä huippu askelten välissä näkyy matalana: käytä enemmän askelia.

Kun olet valinnut **Suorita**, **Siirry ajon läpi** -palkki siirtää kokoonpanon mihin tahansa askeleeseen (aika, arvo ja se, törmäävätkö osat siinä, näkyvät sen vieressä). Nivel säilyttää oman arvonsa, ja **Takaisin malliin** palauttaa kokoonpanon. Tutkimuksen asetukset tallennetaan kokoonpanotiedostoon; sen tulokset tehdään uudelleen **Suorita**-toiminnolla.

## Kosketustutkimus

**Kokoonpano › Kosketus** näyttää, miten kokoonpano kantaa kuormansa kohdissa, joissa osat painavat toisiaan. Jokainen osa tuo omat tukensa, kuormansa ja materiaalinsa omasta **Simulointi**-tutkimuksestaan (kiinteä pinta yhdessä osassa, voima toisessa). Täällä valitset parit. **Lisää pari**, sitten **Valitse puoli A** ja klikkaa yhden osan pintoja, **Valitse puoli B** ja klikkaa toisen osan pintoja. Valitun pinnan klikkaus poistaa sen, ja {{key:Esc}} tai **Valmis** lopettaa valinnan. Pari on **Kitkaton** (osat painuvat mutta liukuvat) tai **Sidottu** (ne pysyvät yhdessä). Jäykkyyskerroin asettaa, kuinka vahvasti kosketus vastustaa painumista (20 on hyvä lähtökohta, 1000 jäykälle teräspinolle).

**Ratkaise** ajaa kuorman askelittain ja näyttää kosketusvoiman, syvimmän painuman, suurimman siirtymän ja suurimman jännityksen. Osa ilman paria jätetään pois, ja kortti kertoo siitä. Kitkaton kosketus ei pidä osaa sivuttain: anna jokaiselle osalle tuki omassa Simulointi-tutkimuksessaan tai sido se, muuten askeleet eivät välttämättä asettu. Parit ja asetukset tallennetaan kokoonpanotiedostoon.

**Vie CalculiX-syöte** kirjoittaa saman mallin CalculiX-syötetiedostona (.inp). CalculiX on erillinen ohjelma, jonka asennat ja ajat itse. **Lue CalculiX-tulokset (.frd)** lukee sitten siirtymät takaisin tämän kokoonpanon verkolle ja kieltäytyy tiedostosta, joka on tehty toiselle verkolle. Ratkaisija osaa plastisuuden, mutta ei eksplisiittistä dynamiikkaa, eikä mikään täällä ole sertifioitu analyysi: anna insinöörin tarkistaa kaikki, mikä on tärkeää.
