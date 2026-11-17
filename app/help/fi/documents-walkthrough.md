---
title: Dokumentit ja revisiot (holvi)
summary: Vaiheittainen läpikäynti yhdestä oikeasta työkohteesta: aseta projektikansion osat ja kokoonpanot hallintaan, kuittaa osa ulos, muuta sitä, kuittaa se sisään muistiinpanon kanssa, julkaise se, katso mitä se käyttää ja mitä käyttää sitä sekä osaluettelo, mitä toinen henkilö näkee, kun tiedosto on lukittu, ja miten kaikki toimii pilvikansioiden kanssa.
keywords: holvi, dokumentit, läpikäynti, opetusohje, uloskuittaus, sisäänkuittaus, revisio, julkaisu, hyväksy, lukitus, historia, missä käytetään, osaluettelo, bom, kokoonpano, pilvikansio, projektikansio, kaksi henkilöä, jaettu kansio
from: 0a5e6983
---

## Mitä teet

Olet Ana, ja työskentelet Riverside-klinikan parissa yhdessä kollegasi Benin kanssa. Projektin osat ja kokoonpanot ovat yhdessä kansiossa, johon te molemmat pääsette (jaettu asema, synkronoitu kansio tai pilvikansio). Lopuksi tiedosto on kulkenut ensimmäisestä kopiostaan julkaistuun revisioon **A**, sitä on muutettu uudelleen revisioksi **B.1**, olet nähnyt, kuka teki mitä, ja näet, mitä Ben näkee, kun pidät tiedostoa hallussasi.

Kaikki tallennetaan piilotettuun kansioon `.ccvault` tiedostojesi viereen: palvelinta ei ole, mitään ei lähetetä mihinkään (pilvikansio on poikkeus, katso viimeinen vaihe). Kaikki painikkeet ja säännöt yhdessä paikassa löydät aiheesta *Dokumentit: uloskuittaus, revisiot ja julkaisu*, jos sovelluksessasi se on.

## 1. Aseta projektikansio

1. Valitse {{ui:Documents…}} työkalurivin **Tiedosto**-ryhmästä.
2. Valitse {{ui:Valitse projektikansio}} ja valitse kansio, jossa projektin osat ja kokoonpanot ovat. (Projektikansiot toimivat Studiossa ja selaimissa, jotka pystyvät avaamaan kansion, kuten Chrome ja Edge. Muissa selaimissa paneeli kertoo tämän.)
3. Valitse {{ui:Muuta}} kohdan **Sinä:** vierestä ja kirjoita nimesi, `Ana` (jos kysytään, myös tämän tietokoneen nimi). Paneelissa lukee nyt *Sinä: Ana, koneella* ja tietokoneesi nimi. Nimesi liitetään kaikkeen, mitä teet.
4. Valitse {{ui:Aloita holvi tässä kansiossa}} ja kirjoita projektin nimi `Riverside-klinikka`. Paneelissa lukee *Holvi aloitettu: Riverside-klinikka.*

## 2. Ota tiedosto hallintaan

1. Avaa **Tiedostot, jotka eivät ole holvissa** ja valitse {{ui:Lisää}} tiedoston `plates/Bracket.partcraft.json` vierestä.
2. Se ilmestyy kohtaan **Tiedostot holvissa** revisiolla **A.1**, tilassa **Työn alla**. A.1 on sen ensimmäinen kopio: holvi säilyttää kopion jokaisesta revisiosta.

## 3. Kuittaa ulos, muuta, kuittaa sisään

1. Valitse {{ui:Avaa}} tiedoston `plates/Bracket.partcraft.json` vierestä. Osa avautuu PartCraftiin ja paneeli sulkeutuu, jotta näet mallin. Avaa paneeli uudelleen valitsemalla {{ui:Documents…}}.
2. Avaa paneeli uudelleen ja valitse {{ui:Kuittaa ulos}}. Rivillä lukee nyt **Kuitattu ulos sinulle**. Kansioon `.ccvault/locks` on luotu lukitustiedosto, eikä kukaan muu voi kuitata tätä tiedostoa ulos ennen kuin kuittaat sen sisään.
3. Muuta osaa: muokkaa mittaa tai lisää reikä. Tallennus evätään, ellei tiedosto ole kuitattu ulos sinulle, ja kerrotaan syy. Tallenna nimellä toimii aina oman kopion tekemiseen.
4. Avaa paneeli, valitse {{ui:Kuittaa sisään}} ja kirjoita, mitä muuttui (`Moved the door`). Paneeli kertoo *kuitattu sisään revisiona A.2*. Tiedosto projektikansiossa on nyt se osa, jonka avasit, ja lukitus on poistunut. Sisäänkuittaus ilman muutoksia säilyttää revision.

Jos muutat mielesi, {{ui:Kumoa uloskuittaus}} palauttaa tiedoston ilman uutta revisiota.

## 4. Tarkastus ja julkaisu

1. Valitse {{ui:Lähetä tarkastettavaksi}}. Tila muuttuu tilaan **Tarkastettavana** ja tiedosto on vain luku -tilassa.
2. Ennen hyväksymistä valitse {{ui:Projektin asetukset}} ja listaa, kuka saa hyväksyä (yksi nimi per rivi), esimerkiksi `Ben` ja `Carla`, ja valitse sääntö, jonka mukaan hyväksyjän täytyy olla muu kuin tekijä. Valitse {{ui:Tallenna asetukset}}. Nyt holvi itse evää muut.
3. Ben (tai Carla) valitsee {{ui:Hyväksy}} ja kirjoittaa hyväksyjän nimen. Tila muuttuu tilaan **Julkaistu** ja revisio muuttuu revisioksi **A**, mukana *hyväksynyt* ja nimi. Julkaistu tiedosto on vain luku -tilassa. {{ui:Lähetä takaisin}} olisi palauttanut sen tilaan Työn alla syyn kanssa.

Hyväksyjän nimi on paneeliin kirjoitettu nimi. Se on merkintä siitä, kuka hyväksyi, ei todiste henkilöllisyydestä.

## 5. Uusi revisio

1. Valitse julkaistusta tiedostosta {{ui:Uusi revisio}}. Varaat sillä seuraavan kirjaimen.
2. Muuta tiedostoa ja valitse sitten {{ui:Kuittaa sisään}}. Revisio on **B.1**, tilassa työn alla. Julkaise se samalla tavalla, ja siitä tulee **B**. {{ui:Kumoa uloskuittaus}} ennen ensimmäistä sisäänkuittausta jättää revisioksi **A**.

Revisiokirjaimet kulkevat A, B … Z, AA, AB. Jos standardisi jättää joitakin kirjaimia pois, projektiasetus *Käytä ASME Y14.35 -järjestystä* ohittaa seuraavissa revisioissa kirjaimet I, O, Q, S, X ja Z.

## 6. Katso, mitä tapahtui

Valitse tiedoston nimi avataksesi sen tiedot:

- **{{ui:Historia}}**: jokainen tapahtuma uusimmasta vanhimpaan, mukana kuka, millä tietokoneella ja milloin: *Kuitattu sisään A.2*, Ana, ja *Julkaistu*, Ben, ja niin edelleen.
- **{{ui:Revisiot}}**: revisiotaulukko: jokainen säilytetty revisio, päiväys, sisäänkuittaaja, muistiinpano ja hyväksyjä. Holvi säilyttää jokaisen kopion kansiossa `.ccvault/revs`.
- **{{ui:Käyttää}}**: kokoonpanon osat.
- **{{ui:Käyttäjät}}**: Käyttäjät-listassa näkyy jokainen holvin kokoonpano, joka sisältää tämän osan: muuta konsolia, niin tiedät, mitkä kokoonpanot pitää tarkistaa.

## Kokoonpanot: mitä ne käyttävät ja osaluettelo

Lisää kokoonpano (`.partcraft.json`, tallennettu kokoonpanotilasta) kansioon ja lisää se holviin. Valitse sen nimi: **Käyttää** listaa osat, joita se sisältää, ja jokaisen osan revision ja tilan. Osan **Käyttäjät**-kohta listaa jokaisen kokoonpanon, joka sisältää sen. {{ui:Osaluettelo (CSV)}} tallentaa koko osalistan tasoittain, määrineen, revisioineen ja tiloineen, taulukkolaskentaa varten. Muuta konsolia, ja **Käyttäjät** kertoo, mitkä kokoonpanot tarkistaa.

## 7. Mitä Ben näkee, kun pidät tiedostoa hallussasi

Kuittaa tiedosto nyt uudelleen ulos ja pyydä Beniä avaamaan sama projektikansio omalla tietokoneellaan ja avaamaan paneeli. Tiedoston rivillä hän näkee **Kuitannut ulos Ana** sinun tietokoneesi **alkaen** kellonaika, eikä hänellä ole painiketta {{ui:Kuittaa ulos}}. Jos hän yrittää silti, holvi evää: lukitus on tiedosto, jota järjestelmä ei luo kahdesti, joten kaksi henkilöä ei voi pitää tiedostoa hallussaan samassakaan sekunnin murto-osassa, kun kansio on levyllä Studiossa. (Selaimessa kansio sallii vain parhaan mahdollisen yrityksen, ja paneeli kertoo tämän kohdassa **Kansio**.)

Jos Ana on poissa ja Ben tarvitsee tiedostoa, {{ui:Pura uloskuittaus}} vapauttaa sen. Hänen täytyy kirjoittaa syy; se menee lokiin sen uloskuittauksen kanssa, jonka se oli. Kun projektissa on listattu ylläpitäjiä, vain he voivat tehdä tämän. Uloskuittaus, joka on vanhempi kuin vanhenemisraja (oletuksena 14 päivää), merkitään *kauan*. Purkamisen jälkeen Anan myöhässä tehty sisäänkuittaus evätään, joten kumpikaan ei voi kirjoittaa toisen muutoksia yli.

## 8. Pilvikansiot

Pilvikansio on projektikansio, joka säilytetään tiimisi pilvitallennuksessa, joten tiimi ei tarvitse jaettua asemaa. Studiossa, kirjautuneena CadCraft-tiliisi, paneeli näyttää {{ui:Avaa pilvikansio}} kohdan {{ui:Valitse projektikansio}} vierestä. Valitse se ja valitse kansio, joka näkyy muodossa työtila / kansio. Työtilan omistaja luo kansion ensin, ja tiimin pilvitallennuksen täytyy olla käytössä. Kaikki yllä kuvattu toimii samalla tavalla; palvelin tekee lukituksen, ja se on tiukka ihmisten välillä. Jos et ole kirjautunut, paneeli pyytää kirjautumaan. Tavallisessa selainvälilehdessä pilvipainiketta ei tarjota; käytä Studiota.

## Kokeile

Tee yllä olevat kahdeksan vaihetta oikean tiedoston kopiolla. Kahden henkilön vaiheisiin tarvitset toisen henkilön tai kaksi ikkunaa kahdella nimellä. Jos kokeilet oikealla jaetulla kansiolla, Yhteisön testaussivu sisältää tarkistuksen, joka kysyy juuri tätä, ja ottaa vastaan tulokset.
