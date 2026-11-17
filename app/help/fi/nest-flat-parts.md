---
title: Asettele litteät osat levyille
summary: Sijoita litteät osat levyille tai rullalle mahdollisimman vähällä hukalla, ei koskaan annettua väliä lähempänä toisiaan, ja tallenna asettelu DXF-tiedostoksi laserille, plasmalle, vesileikkurille tai reitittimelle.
keywords: asettelu, asettele, levy, rulla, laser, plasma, vesileikkuri, reititin, leikkaus, hyötysuhde, materiaalinkäyttö, romu, hukka, väli, leikkausleveys, kuitusuunta, valssaussuunta, dxf, litteä kuvio, ääriviivat
from: 8dcce1a6
---

**Asettelu** (nesting) sijoittaa monta litteää osaa levylle niin, että materiaalia jää mahdollisimman vähän yli. PartCraft sijoittaa osat yksi kerrallaan, kukin paikkaan, jossa levyn käytetty pituus jää lyhimmäksi, kokeilee useita järjestyksiä ja muutamassa sekunnissa valitsee parhaan. Osat voivat asettua toisten osien reikiin ja L- tai U-muotojen onttoon kohtaan.

## Avaa asettelu

- {{ui:Vie}} › {{ui:Asettele litteät osat levyille…}} avaa sen osan litteällä kuviolla tai, kokoonpanossa, kaikkien levyosien litteillä kuvioilla, niin monta kuin kappaleita on.
- Levyosassa {{ui:Levitä tasoon}} ja sitten {{ui:Asettele levyille…}} litteän kuvion alla.
- {{ui:Lisää ääriviivoja DXF:stä…}} lisää jokaisen suljetun ääriviivan DXF-tiedostosta osaksi: CadCraftista DXF-muodossa tallennetun piirustuksen tai leikkurin oman ohjelmiston tiedoston. Toisen ääriviivan sisällä oleva ääriviiva on siinä oleva reikä. Toisiinsa päästä päähän liittyvät viivat ja kaaret lasketaan yhdeksi ääriviivaksi. Tuumina, senttimetreinä tai metreinä olevat tiedostot muutetaan millimetreiksi.

:::note
Levytyön litistäminen vaatii tarkan geometriaytimen (katso [Levytyö](topic:sheet-metal)). Ääriviivat DXF-tiedostosta toimivat aina.
:::

## Aseta asetukset

Anna jokaiselle osalle **kuinka monta** tarvitset ja sen **kuitusuunta**: {{ui:Mikä tahansa suunta}}, {{ui:Levyä pitkin (piirretyn mukaan)}} harjatulle tai valssatulle levylle, jonka on kuljettava yhteen suuntaan, tai {{ui:Levyn poikki}}.

Kohdassa **Levyt**:

- **Varasto**: {{ui:Levyt}} tietyn pituisina ja leveinä (ja kuinka monta sinulla on; 0 = niin monta kuin tarvitaan), tai {{ui:Rulla}} tietyn levyisenä, tarpeen mukaan pitkänä.
- **Reunavara** jätetään vapaaksi levyn jokaiselle reunalle (puristimia tai epätasaista reunaa varten).
- **Osien väli** on pienin etäisyys kahden leikkausviivan välillä: vähintään leikkurin leikkausleveys sekä materiaalin vaatima lisä.
- **Kierrot**: kulmat, joihin osaa saa kääntää, oletuksena joka 90°. Vähemmän kierroksia on nopeampi; enemmän voi hyödyntää levyä paremmin.
- **Osia saa kääntää** sallii osan asettamisen ylösalaisin. Jätä pois levytyölle: käännetty litteä kuvio taipuu toiseen suuntaan.

Paina {{ui:Asettele}}. Esikatselu näyttää jokaisen levyn; tiedot kertovat, kuinka monta levyä (tai kuinka paljon rullaa) se käytti ja kuinka suuren osan materiaalista osat vievät. Kaikki, mikä ei mahtunut, nimetään.

## Tallenna

{{ui:Tallenna DXF}} kirjoittaa asettelun DXF-tiedostona (R12, millimetreinä), yksi levy kerrallaan: levyjen ääriviivat tasolla SHEET, osat tasolla PARTS (kaaret säilytetään kaarina) ja kunkin osan nimi tasolla LABELS.

:::tip
Useiden osien sekoittaminen asettuu yleensä paremmin kuin monta kopiota yhdestä: pienet osat täyttävät isojen osien väliset tyhjät.
:::

## Leikkaa levyt (G-code)

**Vie › Asetellut levyt G-koodiksi** lukee asetellun DXF-tiedoston (tämän tai Cabinets-lisäosan levyt CadCraftissa) ja tekee yhden ohjelman levyä kohti valitsemasi postiprosessorin kautta: ensin reiät ja aukot, sitten ääriviivat. Jokainen leikkaus kulkee työkalun säteen verran osan ulkopuolelle, läpi levyn ja 1 mm pidemmälle, ja tarvittaessa siltojen kanssa. Postiprosessoriluettelo koostuu sisäänrakennetuista prosessoreista ja Manufacture-tutkimuksesi omista. Tarkista jokainen ohjelma simulaattorissa ennen ajamista: porauksia ja taskuja ei tehdä.

## Mitä tarkistaa

PartCraft tarkistaa jokaisen asettelun uudelleen todellisilla muodoilla (ei sillä ruudukolla, jolla se haki): kaksi osaa ei ole lähempänä toisiaan kuin väli, eikä mikään ole reunavarassa. Se ei suunnittele leikkausta. Sisääntulot, leikkausjärjestys, yhteisten reunojen leikkaaminen kerran ja jäljelle jäävän levyn säilyttäminen kuuluvat leikkurin oman ohjelmiston tehtäviin. Tarkista DXF-tiedosto siellä ennen leikkaamista.
