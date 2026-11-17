---
title: Kasvata muoto kuormista (Generatiivinen)
summary: Valitse pinnat, jotka ovat kiinni ja kuormitettuja, alueet, jotka pidetään kiinteinä ja tyhjinä, tavoitetilavuudet ja materiaalit sekä luo tulokset: jäykimmät muodot kullekin tilavuudelle, tarkistettuna uudelleen kiintokappaleina, vertailtuina taulukossa ja ladattuina STL-, STEP- tai uutena osatiedostona.
keywords: generatiivinen suunnittelu, topologian optimointi, SIMP, kevyt, hila, orgaaninen muoto, tulokset, vertailu, massa, tilavuusosuus, säilytä, pidä sisällä, este, pidä tyhjänä, suunnittelualue, pienin sauva, STL, 3D-tulostus
from: 5b91fa8e
---

Generatiivinen työtila poistaa materiaalia, jota kuormat eivät tarvitse. Kerrot, missä osa on kiinnitetty ja kuormitettu, mikä on säilytettävä ja mikä pidettävä vapaana. PartCraft löytää jäykimmän muodon kullekin tavoitetilavuudelle (**topologian optimointi**), tarkistaa jokaisen uudelleen kiintokappaleena todellisella materiaalilla ja näyttää tulokset vierekkäin. Se toimii verkkoydimen antamille nimetyille pinnoille (katso [Verkkoydin](topic:solid-kernels)).

Valitse **Työtila**-valikosta **Generatiivinen**. Osaasi ei muuteta. Tutkimus tallennetaan osatiedoston sisään.

## Määritä tutkimus

1. Paina oikean paneelin **Uusi tutkimus**-painiketta.
2. **Tila**: *Osa sellaisenaan* poistaa materiaalia osastasi. *Laatikko osan ympärillä* kasvattaa muodon laatikon sisään, joka on osaa suurempi **Laatikon marginaali** -arvon verran.
3. **Elementin koko**: jätä tyhjäksi automaattista kokoa varten (noin 8,000 kuutiota), tai kirjoita oma koko. Hienommat koot antavat hienompia muotoja ja vievät kauemmin.
4. **Pienin sauva**: sauvat, jotka ovat ohuempia kuin noin kaksi kertaa tämä, eivät muodostu. Tyhjä tarkoittaa yhtä ja puolta kuutiota.
5. Valitse yksi–kuusi **Tavoitetilavuutta** (osuus suunnittelualueesta, jonka muoto saa täyttää) ja yksi–neljä **Materiaalia**. Jokainen tilavuus luodaan kerran. Jokainen materiaali tarkistetaan tuolla muodolla. Jäykin muoto ei riipu materiaalista, mutta sen massa, jännitys ja turvakerroin riippuvat siitä.

## Tavoitteet

- {{ui:Kiinteä}}: napsauta pintoja, jotka pidetään paikallaan. **Kitkaton pinta** paneelin **Lisää**-luettelosta pitää pinnan vain itsensä yli (käytä sitä symmetriatasoille).
- {{ui:Voima}}: napsauta kuormitettuja pintoja, kirjoita sitten kokonaisvoima ja valitse sen suunta paneelissa. **Paine** on **Lisää**-luettelossa.
- {{ui:Säilytä}}: napsauta pintoja, joiden ympäristön on pysyttävä kiinteänä, ja aseta syvyys (**Pidä kiinteänä etäisyydellä**), esimerkiksi ruuvireikien ympärillä. Pinnat, jotka kiinnität tai kuormitat, säilyvät aina.
- {{ui:Este}}: napsauta pintoja, joiden ympäristön on pysyttävä tyhjänä, ja aseta etäisyys (**Pidä tyhjänä etäisyydellä**), esimerkiksi tilaa akselille tai työkalulle.

Paina napsautusten jälkeen **Valinta valmis** tai {{key:Esc}}. Vihreät ja punaiset sävyt näyttävät alueet.

## Luo ja vertaile

Paina {{ui:Luo}}. Paneeli näyttää edistymisen ja jäljellä olevan ajan. **Pysäytä** peruuttaa. Jokainen tulos ilmestyy **Tulokset**-taulukkoon: tavoitetilavuus, materiaali, **massa**, **suurin jännitys**, **suurin siirtymä** ja **turvakerroin** (myötöraja ÷ jännitys). Kaikki lasketaan uudelleen valmiista muodosta kiintokappaleina kuutioina todellisella materiaalilla.

Valitse tulos nähdäksesi sen näkymässä. Osa piilotetaan, ja ruksi **Näytä osa tuloksen läpi** näyttää molemmat. Taulukon alla näkyvät iteraatioiden määrä ja se, tasaantuiko ratkaisu. Lisäksi näkyvät sen jäykkyys kiintokappaleena verrattuna optimoijan omaan lukuun sekä sen pinta.

## Käytä tulosta

- **STL**: suljettu kolmioverkko, valmis 3D-tulostukseen.
- **STEP (fasetoitu)**: sama pinta STEP-kiintokappaleena, joka koostuu litteistä pinnoista.
- **Uusi osatiedosto**: PartCraft-osa, jonka yksi muotoelementti on tulos tuotuna kiintokappaleena. Avaa se, jotta voit piirtää luonnoksen, leikata reikiä tai tarkistaa sen Simuloinnissa. Se on fasetoitu (tuhansia litteitä pintoja), joten se ei ole muokattava muoto.
- **Lisää tähän osaan** liittää tuloksen osaan. Se on käytössä vain laatikkomaisessa suunnittelualueessa. Kun osa itse on suunnittelualue, tulos on osan sisällä.

**Uusi osatiedosto** ja **Lisää tähän osaan** eivät ole vielä toteutettuja tässä versiossa: tulos muuttuu tuoduksi kiintokappaleeksi, mikä vaatii tarkan ytimen. STL- ja STEP (fasetoitu) -lataukset toimivat.

## Kuinka paljon siihen voi luottaa

- Se optimoi **jäykkyyttä** annetulle tilavuudelle. Jännitysrajoja ja valmistussääntöjä (ylitykset, jyrsintäsuunnat, pienimmät reikäkoot) ei ole vielä. Tarkista valittu tulos kohdassa [Simulointi](topic:simulation) ja säädä.
- Ohuet sauvat, jotka ovat yhden tai kahden kuution levyisiä, ovat likiarvoja. Käytä pienempää elementin kokoa hoikille osille.
- Menetelmä on SIMP tiheyssuodattimella, kynnysprojektiolla ja optimaalisuuskriteerien päivityksillä. Raportoitu jännitys ja taipuma koskevat tulosta kuutioina. Se on rehellistä mutta karkeaa terävissä kulmissa.

## Aiheeseen liittyvää

- [Tarkista jännitys ja taipuma (Simulointi)](topic:simulation)
- [Vienti tulostukseen, STEP ja DXF](topic:export-files)
- [Mitä ei vielä ole toteutettu](topic:not-built-yet)
