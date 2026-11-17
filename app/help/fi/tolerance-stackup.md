---
title: Toleranssiketjut
summary: Valitse kokoonpanon osien läpi kulkeva pintaketju ja katso, kuinka paljon sen päässä oleva rako voi vaihdella pahimman tapauksen ja RSS:n mukaan, ja tärkeimmät mitat järjestettynä ensin.
keywords: toleranssiketju, ketjutoleranssi, toleranssianalyysi, mittaketju, silmukka, rako, väli, pahin tapaus, RSS, neliöjuurisumma, tilastollinen toleranssi, vaikuttajat, herkkyys, GD&T, yleistoleranssi, ISO 2768
from: cbdb3159
---

**Toleranssiketju** laskee yhteen mitat ketjua pitkin useiden osien läpi nähdäkseen, kuinka paljon tulos — yleensä rako — voi vaihdella, kun jokainen osa valmistetaan missä tahansa toleranssiensa sisällä.

## Valitse ketju

1. Avaa kokoonpano ja valitse {{ui:Toleranssiketju}} Kokoonpano-ryhmästä. Näkymän päälle avautuu kortti.
2. Valitse, mitä pitkin ketju mitataan **suuntaan**: kokoonpanon X, Y tai Z, tai {{ui:Ensimmäisen pinnan normaali}}.
3. Paina {{ui:Valitse ketju}} ja napsauta pintoja, joiden kautta ketju kulkee, **järjestyksessä**: aloita raon toiselta puolelta, kulje osien läpi ja lopeta raon toiselle puolelle.
4. Paina {{ui:Valmis}} tai {{key:Enter}}. {{key:Backspace}} peruu viimeisen napsautuksen; {{key:Esc}} peruu.

Kaksi napsautusta samaan osaan muodostavat kyseisen osan mitan (sen etäisyyden ketjua pitkin). Napsautus toiseen osaan muodostaa niiden välille **rajapinnan**, jossa osat kohtaavat; sillä ei ole toleranssia, ellei kirjoita sitä itse. Linkit lisäävät tai vähentävät ketjun kulun mukaan ja sulkevat silmukan: nimellisrako on se, mitä malli näyttää.

Voit myös {{ui:Lisää linkki}} käsin ja kirjoittaa sen nimellisarvon, toleranssin sekä sen, lisääkö se (+) vai vähentääkö (−).

## Anna kullekin linkille toleranssi

Jokaisella linkillä on **yläpoikkeama** ja **alapoikkeama** (esimerkiksi +0.1 ja −0.05). **Toleranssin lähde** täyttää ne osasta:

- **Yleistoleranssi**: osan piirustusotsikon Toleranssi-kenttä (katso [Piirustus PDF-muotoon](topic:drawing-pdf)), kun siinä lukee ±0.1, +0.2/-0.1 tai ISO 2768-f, -m, -c tai -v (ISO 2768-1 pituusmittojen toleranssit linkin koon mukaan). Osan yleistoleranssi otetaan käyttöön heti, kun ketju valitaan.
- **GD&T**: mikä tahansa toleranssikehys osan piirustuksessa. Sijainti-, profiili- ja heittovyöhykkeet antavat ± puolet toleranssista. Suunta- tai muototoleranssi on yleensä jo mittatoleranssin sisällä: lisää se vain siinä kohdassa, jossa ketju kohtaa valvotun pinnan. Ⓜ- tai Ⓛ-merkinnällä vyöhyke otetaan ilmoitetussa koossaan; bonustoleranssia ei lasketa mukaan.
- **Kirjoitettu**: mitkä tahansa itse kirjoittamasi luvut.

## Lue tulokset

- **Rako, nimellinen** ja, kun toleranssit ovat epätasaiset, **Rako, keskiarvo** — +0.2/−0 ja +0/−0.1 siirtävät alueen keskikohtaa.
- **Pahin tapaus**: jokainen toleranssi rajallaan samaan aikaan. Rako ei voi koskaan olla tämän ulkopuolella.
- **RSS** (neliöjuurisumma): jokainen toleranssi otetaan normaalijakauman kolmena keskihajontana, ja ne lasketaan yhteen neliöjuurena niiden neliöiden summasta. Useimmat kokoonpanot jäävät selvästi pahimman tapauksen sisään; tämä on tavallinen arvio sarjavalmisteisille osille.
- Anna **Rako vähintään** ja **Rako enintään** nähdäksesi, pysyykö pahin tapaus aina sisällä ja kuinka monta kokoonpanoa miljoonasta RSS odottaa jäävän sen ulkopuolelle.
- **#**-sarake järjestää linkit niiden **osuuden** mukaan RSS:stä: kiristä ensimmäisiä, niin saat suurimman muutoksen.

{{ui:Tallenna CSV}} kirjoittaa linkit, niiden osuudet ja tulokset. Toleranssiketjut tallennetaan kokoonpanotiedostoon, ja jokainen muutos on yksi vaihe, jonka {{key:Mod+Z}} kumoaa.

:::note
Toleranssiketju kulkee yhteen suuntaan. Se ei seuraa kulmia tai käännöksiä ketjussa, eikä se lue mittatoleransseja luonnoksista: anna ne kirjoitettuina toleransseina tai piirustusotsikon kautta.
:::
