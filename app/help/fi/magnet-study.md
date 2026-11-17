---
title: Luonnoksen magneettitarkastelu
summary: Muuta luonnosten suljetut profiilit tasaiseksi magneettimalliksi (rauta, magneetit, kelat), näe kenttä ja lue voima ja momentti kappaleelle.
keywords: magneetti, magneettinen, magnetostaattinen, kenttä, vuon tiheys, voima, momentti, kela, magneettipaluu, rauta, B-H-käyrä, kestomagneetti, toimilaite, moottori, solenoidi, maxwell
from: 604efc3b
---

Käytä Muotoelementit-työkalupalkin {{ui:More}} › {{ui:Magnet study of sketches…}} -komentoa kappaleella, jossa on luonnoksia. Jokainen valitsemissasi luonnoksissa oleva suljettu muoto on yksi alue tasaisessa mallissa; tarkastelu laskee magneettikentän B:n sekä voiman ja momentin valitulle kappaleelle.

## Vaiheet

1. Piirrä kappaleet suljettuina muotoina luonnoksiin: rautapaluu, magneetti, kela. Kappaleet, jotka koskettavat toisiaan, jakavat reunan, joten ne laitetaan eri luonnoksiin; kappaleet, jotka ovat erillään tai ovat toistensa sisällä (ikkuna paluussa), voivat olla samassa. Pidä luonnokset samalla tasolla.
2. Avaa tarkastelu ja rastita käytettävät luonnokset. Jokainen suljettu profiili saa numeroidun rivin. Kerro, mikä se on: {{ui:Air}} (ilma), {{ui:Iron}} (rauta; läpäisevyys tai B–H-käyrä kirjoitettuna pareina B teslassa ja H A/m:ssä), {{ui:Permanent magnet}} (kestomagneetti; Br teslassa, sen suunta kulmana luonnoksen x-akselista ja sen palautuvuusläpäisevyys) tai {{ui:Coil}} (kela; profiilin läpi kulkeva kokonaisvirta, kierrokset kertaa ampeerit; etumerkki kertoo, mihin suuntaan se kulkee).
3. Rastita {{ui:Force and torque on this body}} kappaleille, joille ne halutaan. Anna osan syvyys luonnoksen tasosta poispäin.
4. Valitse verkko ja mallin ympärillä oleva ilma ja paina {{ui:Run}}.

## Mitä pitäisi nähdä

- Vuon tiheys |B| mallin yllä: tummansininen matala, punainen korkea, profiilit numeroituina.
- Vahvin kenttä ja sen sijainti, kolmioiden määrä sekä jokaiselle rastittamallesi kappaleelle voima x- ja y-suunnassa ja momentti sen keskipisteen suhteen annetulla syvyydellä.
- {{ui:Save results (CSV)}} kirjoittaa luvut.

## Hyvä tietää

- Se on tasainen, stationäärinen malli: kaikki on metriä syvyyttä kohden, ilman pyörrevirtoja ja hystereesiä, ja magneetti on suora palautusviiva (sitä ei voi demagnetoida).
- Malli sijaitsee ilmalaatikossa, jonka reuna on seinä. Vertaa kahta ilmalaatikon kokoa sekä Normaali- ja Hieno-verkkoa: voima, joka otetaan kappaleen ympärillä olevasta kentästä, on vain yhtä hyvä kuin verkko siinä kohdassa.
- Rauta, jolla on vain läpäisevyys, ei koskaan kyllästy. Kun kenttä ylittää 2 T, tarkastelu nostaa ⚠-merkin Ongelmat-luetteloon: anna raudalle B–H-käyrä. Uuden rivin luvut ovat esimerkkejä (raudan μr 2000, 1.2 T:n magneetti), eivät materiaalin tietolehden arvoja.
- Kappaleella on oltava tilaa ympärillään, jotta se voi ottaa voiman: jos toinen kappale on liian lähellä, tarkastelu kertoo siitä.
- Suunnittelun apuväline, ei teknisen hyväksynnän.

## Seuraavaksi

- [Magneettikentät 2D:ssä (opas)](topic:magnetic-fields-2d)
