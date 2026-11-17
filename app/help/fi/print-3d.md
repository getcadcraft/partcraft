---
title: Valmistele osa 3D-tulostukseen
summary: Tarkista, että osa tai kokoonpano on suljettu, mahtuu tulostimeesi ja seisoo alustalla, ja lataa se sitten STL- tai 3MF-muodossa viipalointiohjelmaasi varten.
keywords: 3D-tulostus, tulostin, tulostaminen, viipalointiohjelma, stl, 3mf, vesitiivis, suljettu, monisto, tulostusalusta, alustan koko, ulokkeet, tuet, pohja, millimetrit, vienti, kierteet, välys
from: 90d81dff
---

Viipalointiohjelma tarvitsee suljetun muodon: ei reikiä, jokainen pinta osoittaa ulospäin, eikä mikään mene itsensä läpi. PartCraftilla rakennetut osat ovat suljettuja jo rakentamisen takia, joten tarkistus kertoo lähinnä koon, sen mahtuuko osa tulostimen alustalle, seisooko se tasaisella pinnalla ja kuinka paljon siitä on ulokkeena.

## Tarkista ja lataa

1. Valinnainen, kerran: aseta tulostimesi alusta kohdassa {{ui:Asetukset}} › PartCraft › **3D-tulostin**: leveys, syvyys ja korkeus millimetreinä. Jätä ne tyhjiksi, jos haluat ohittaa tarkistuksen.
2. Valitse {{ui:Vie}} ja sitten {{ui:Tarkista 3D-tulostusta varten (STL tai 3MF)…}}.

   Ikkuna kertoo ”Valmis tulostettavaksi” tai ”Ei valmis tulostettavaksi”, luettelee kaiken, mikä on vialla, ja antaa koon alustalla (X × Y × Z, millimetreinä), tilavuuden ja kolmioiden määrän.

3. Napsauta {{ui:Lataa 3MF}} tai {{ui:Lataa STL}}. Tiedosto on sama kuin {{ui:Vie}} › {{ui:3MF 3D-tulostukseen}} tai {{ui:STL 3D-tulostukseen}} antaa.

Kokoonpanossa tarkistus ja tiedostot koskevat koko kokoonpanoa, jokaista sijoitettua kopiota siinä, missä se on.

Osa tarkistetaan siinä asennossa, jossa vienti sen kirjoittaa: se, mikä osoittaa ylös PartCraftissa (suorassa Ylätasoon nähden), osoittaa ylös alustalla. Ylätasolle piirretty osa lepää tasaisesti.

## Mitä ikkuna voi kertoa

**Ei valmis tulostettavaksi** (viipalointiohjelma saattaa hylätä sen tai tulostaa sen väärin): reiät (särmät, joilla on pinta vain toisella puolella), särmät, joita jakaa kolme tai useampi pinta, pinnat, jotka osoittavat vastakkaisiin suuntiin, kappale väärinpäin tai kappale, joka menee itsensä läpi. PartCraftissa rakennettu osa ei pitäisi koskaan näyttää näitä. Jos näyttää, katso [Vianetsintä](topic:troubleshooting).

**Varoitukset** (tulostuu, mutta katso ensin):

- **Suurempi kuin tulostimesi alusta**, vaikka kierrettäisiin 90° alustalla.
- **Alareunassa ei ole mitään tasaista**: käännä osaa viipalointiohjelmassa niin, että pinta lepää alustalla. Muuten se tarvitsee tukia tai alustan.
- **Kallistuu yli 45° pystysuorasta**: nämä pinnat tarvitsevat tuen, kun osa on sellaisessa asennossa kuin se on. Toinen asento voi tarvita vähemmän.
- **Erilliset kappaleet menevät päällekkäin** tai **koskettavat pinnasta pintaan**: viipalointiohjelmat yleensä yhdistävät ne. {{ui:Yhdistä}} Muotoelementit › Lisää -kohdassa liittää ne yhdeksi kappaleeksi. Katso [Kappaleet](topic:bodies).
- **Alle 1 mm leveä**: tarkista osan mitat.

## Tulostuvat kierteet

Mallinnettu kierre tulostuu oikeana kierteenä. Anna sille jonkin verran **Välystä**, jotta tulostettu pultti menee tulostettuun mutteriin. Katso [Kierteet](topic:threads).

## Sileät pyöreät pinnat

STL ja 3MF koostuvat kolmioista. Sileämpiä pyöreitä pintoja varten napsauta tyhjää tilaa, jotta mitään ei ole valittuna, ja aseta oikean paneelin **Kaaret**-kohtaan **Hieno (128 kierrosta kohti)** tai **Erittäin hieno (256 kierrosta kohti)** ennen vientiä. Enemmän kolmioita tarkoittaa suurempia tiedostoja.

## Suurempi, pienempi tai osina

- **Vie › Skaalaa tulostusta varten (STL tai 3MF)…** tallentaa osan skaalattuna akselikohtaisesti muuttamatta sitä: **kutistumisvara** prosentteina (koko × (1 + s), tai tarkka koko ÷ (1 − s)) valumallia varten, tai pelkät kertoimet, keskustaan, alimpaan kulmaan, pohjan keskelle tai origoon nähden.
- **Vie › Jaa tulostusta varten (zip-tiedosto osista)…** leikkaa osan, joka on liian iso tulostimellesi, osiin, joista jokainen mahtuu antamallesi alustalle. Osat liitetään tappien, avainten, hännänmuotoisten liitosten, vaarnareikien tai magneettitaskujen avulla asettamallasi välyksellä. Jokainen osa ja liitos numeroidaan, ja osat tallennetaan STL- tai 3MF-muodossa zip-tiedostoon kokoonpanolehden kanssa. Itse osa ei muutu.

## Ei tarkisteta

Seinämän paksuus, yksityiskohdat, jotka suuttimesi ei pysty tulostamaan, ja se, miten viipalointiohjelma sijoittaa tuet. Viipalointiohjelma näyttää ne.
