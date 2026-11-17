---
title: Lähetä piirustus laserille
summary: Valitse, mitä kukin taso tekee (leikkaus, uurtaminen, kaiverrus, täyttö, kuva), esikatsele pään liikkeet, tallenna GRBL-laser-tilan G-koodi tai lähetä työ selaimesta sen jälkeen, kun työ on kehystetty.
keywords: laser, laserleikkuri, laserkaiverrus, GRBL, G-koodi, kaiverrus, täyttö, ditherointi, kuvakaiverrus, uurtaminen, leikkaus, Web Serial, Linux, kehystä työ, teho, nopeus, kierrokset
from: 327b3c46
---

{{ui:Laser}}-paneeli muuttaa piirustuksen tasot ohjelmaksi laserille, joka käyttää GRBL-ohjainta (useimmat harrastajien ja pienten verstaiden diodi- ja CO2-ohjaimet). PartCraftissa valitaan {{ui:Export}} › {{ui:Laser program…}} ja sitten {{ui:Add outlines from a DXF…}}: ääriviivat ja reiät tulevat tasolle CUT. Levyosien taitekuvat (taivutuslinjat tasolla BEND) tarvitsevat tarkan ytimen, jota tässä versiossa ei ole. Asetukset tallennetaan kappale- tai kokoonpanotiedostoon.

:::warning
Testaa jokainen asetus ensin romulevyllä, käytä laserille sopivia silmäsuojaimia, pidä kansi kiinni siellä, missä sellainen on, äläkä koskaan jätä käynnissä olevaa laseria valvomatta. Tasojen alkuarvot ovat paikkamerkkejä, eivät suosituksia millekään materiaalille.
:::

## Valitse, mitä kukin taso tekee

Jokainen piirustuksen taso on rivi. {{ui:Does}} asettaa sen tilaan **Leikkaa**, **Uurra**, **Kaiverra viivat**, **Täytä muodot**, **Kaiverra kuva** tai **Ei lähetetä**, sekä {{ui:Power %}}-, {{ui:Speed mm/min}}- ja {{ui:Passes}}-arvot.

- **Täyttö** polttaa suljettujen muotojen sisäpuolen viivoina, {{ui:Line spacing}} välein, {{ui:Angle}}-kulmassa, molempiin suuntiin tai yhteen, ylivedolla, jotta pää on nopeudessa, kun laser syttyy. Ristiin täyttö lisää toisen kierroksen 90°:ssa. Muoto, jossa on reikä, jää auki reiän kohdalta.
- **Kaiverra kuva** muuttaa kuvan pisteiksi (Floyd–Steinberg, Atkinson, järjestetty tai pelkkä mustavalkoinen kynnysarvolla) tai *Harmaasävyt*-asetuksella muuttuvaksi tehoksi.
- Järjestys: ensin kuvat ja täytöt, sitten viivakaiverrus, sitten uurtaminen ja lopuksi leikkaukset, jotta leikattava osa ei liiku kaiverruksen aikana. Yhden tason sisällä polut kulkevat **sisältä ulospäin** (reikä ennen levyä, jonka sisällä se on), lähin seuraavaksi.

## Esikatselu, sitten tallennus

Esikatselu piirtää, mitä pää tekee: polttavat viivat värillisinä, nopeat siirrot harmaina ja vihreä laatikko kaiken polttavan ympärillä. Sen alla ovat koko, polton pituus ja aika-arvio (ilman kiihtyvyyttä; oikea kone vie kauemmin). {{ui:Save G-code…}} kirjoittaa GRBL-laser-tilan G-koodin: `$32=1`, `M4` (tai `M3`) S-arvoilla, `G0`- ja `G1`-siirrot, `M5` lopussa. X0 Y0 on työn vasen alakulma, ellei valita piirustuksen origoa: aseta koneen työnollapiste siihen. G-koodi noudattaa GRBL:n dokumentoitua laser-tilaa; sitä ei ole vielä kokeiltu oikealla laserilla.

## Lähetys selaimesta

Chrome- ja Edge-selaimissa {{ui:Connect…}} pyytää valitsemaan laserin USB-portin. Mikään ei yhdisty tai lähety ennen kuin painiketta painetaan. Paina ensin {{ui:Frame the job}}: pää jäljittää työn laatikon laser **sammutettuna** (tai osoittimelle asetetulla matalalla teholla), jotta nähdään, mihin se polttaa. Vasta sen jälkeen {{ui:Send job}} aktivoituu, ja se sammuu uudelleen, jos jotain muutetaan. {{ui:Pause}} pitää pään paikallaan, {{ui:Stop}} pysäyttää pään, nollaa ohjaimen (laser sammuu) ja lähettää `M5`:n. Kun Web Serial puuttuu (Firefox, Safari sekä CadCraft Studio, jonka web-näkymässä sitä ei vielä ole), G-koodi tallennetaan ja lähetetään laserin omalla ohjelmalla.

## Ei vielä toteutettu

Muiden ohjainten formaatit (Ruida, Marlin-laserit, valmistajakohtaiset tiedostot), välilehdet ja johtoviivat, leikkausrakokompensointi, materiaalikirjastot, pyörivät akselit ja Z-akseli, kameran kohdistus.
