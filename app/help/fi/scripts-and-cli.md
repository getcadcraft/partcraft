---
title: Skriptit ja komentorivi
summary: PartCraft-skriptimuoto (.pcscript), joka kirjoittaa koko osan luettavana tekstinä, ja partcraft-komentorivityökalu, joka rakentaa, muuttaa, palauttaa ja tarkistaa osia ilman näyttöä.
keywords: skripti, pcscript, teksti, komentorivi, cli, pääte, erä, automatisoi, tarkista, lint, rakenna, vienti, versionhallinta, ero, parametrinen skripti
from: c56df222
---

Huolellinen mallintaminen on enemmän kurinalaisuutta kuin painikkeita. Tekstinä kirjoitettu osa voidaan lukea, tarkastella, verrata rivi riviltä ja rakentaa uudelleen skriptillä. PartCraft toimii molempiin suuntiin: mikä tahansa osa voidaan kirjoittaa skriptiksi, ja skripti rakentaa osan.

## Sovelluksessa

{{ui:Parametrit}}-välilehdellä, kohdassa **Skripti**:

- {{ui:Tallenna skriptinä}} lataa avoinna olevan osan tiedostona `<nimi>.pcscript`.
- {{ui:Avaa skripti}} rakentaa osan `.pcscript`-tiedostosta. Virhe ilmoitetaan rivinumerolla, eikä mitään korvata.

## Skriptimuoto

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Säännöt:

- Vasemmasta reunasta alkava rivi aloittaa lauseen: `pcscript`, `part`, `param`, muotoelementin tyyppi (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` ja uudemmat tyypit) sen nimen kanssa, tai `rollback <feature>`.
- Sisennetyt rivit ovat yllä olevan lauseen asetuksia. Yksin oleva asetus (`through`, `reverse`, `suppressed`) tarkoittaa kyllä.
- Lukuasetus on luku, tai `=` ja lauseke, joka muodostaa yhtälön: `depth = thick`.
- Luonnoksessa `on` nimeää tason (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`). Geometria on `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (vastapäivään) tai `spline <name> fit|control <points>`. Rajoitteet ovat tyyppinsä ja niiden yhdistämien nimien muodossa (`O` on origo). Mitoitus päättyy arvoonsa tai lausekkeeseen `= lauseke`.
- Geometrian tai rajoitteen rivin valinnaiset asetukset menevät hakasulkeisiin rivin loppuun, erotettuna `;`-merkillä: `[construction]`, `[side -1; label 5, 3]`.
- `#` aloittaa kommentin rivin alussa tai välilyönnin jälkeen. Nimet, joissa on välilyöntejä, kirjoitetaan ”kaksinkertaisiin lainausmerkkeihin”.
- Muotoelementtien tunnisteet lasketaan f1:stä kirjoitusjärjestyksessä. Reuna- ja pintaviittaukset käyttävät niitä, esimerkiksi `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Asetukset, joille muodossa ei ole sanoja, kirjoitetaan `json` ja arvo. Ne luetaan takaisin sellaisinaan.

Sovelluksesta tallennettu skripti sisältää kaikki asetukset, joten se avautuu samana osana. Sovelluksesta tuotu STEP-kiintokappale kirjoitetaan skriptin sisään. Komentorivillä se on erillinen `.step`-tiedosto, jonka nimi on `step-file`.

## Komentorivityökalu

Työkalu toimii tietokoneella, jossa on Node.js 24, CadCraft-lähdekoodin kopiosta: `node tools/partcraft-cli/partcraft.mjs <komento>`. Se on kehittäjätyökalu, ja se käyttää samoja moduuleja kuin sovellus. Osat ovat `.partcraft.json`-tiedostoja tai `.pcscript`-skriptejä.

| Komento | Mitä se tekee |
|---|---|
| `info <part>` | Muotoelementit, parametrit, palautuspalkki sekä rakennetun kiintokappaleen tilavuus ja koko |
| `params <part>` | Jokainen parametri ja yhtälö arvoineen |
| `set <part> width=150 Base.depth==thick` | Eteenpäin: muuttaa parametreja, yhdistää lukuja (`==` tai lauseke) ja asettaa tavallisia lukuja |
| `drive <part> Base.depth=12` | Taaksepäin: ratkaisee ohjatun luvun takana olevan parametrin (`--prefer width` valitsee yhden) |
| `build <part> --out x.step` | Kirjoittaa `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` tai makron (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Yksi tiedosto per mitoitustaulukon rivi |
| `variants <part> --out-dir d` tai `--zip f.zip` | Jokainen muunnelma STEP-, IFC- ja DWG-muodossa sekä esikatselu, muunnelmataulukko ja kirjastokohde (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); katso [Tee muunnelmapaketti](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skripti osaksi |
| `to-script <part> -o part.pcscript` | Osa skriptiksi |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Siirtää palautuspalkkia tiedostossa |
| `check <part> [--strict]` | Kurinalaisuustarkistus (alla) |

`build` ottaa myös vastaan `--set name=value` (vain tälle rakennukselle) ja `--upto <feature>`. Jokainen komento ottaa vastaan `--json`. Poistumiskoodit: 0 kunnossa, 1 löytyi ongelma, 2 komento kirjoitettiin väärin. Skriptiä ei koskaan kirjoiteta uudelleen paikalleen: anna `-o`, kun haluat tallentaa muutetun kopion.

## Tarkistus

`check` ilmoittaa, mikä tekee osasta myöhemmin vaikean muuttaa:

| Havainto | Luokitus |
|---|---|
| Luonnos, joka on ylimääritelty (ristiriitaiset tai toistuvat rajoitteet) | virhe |
| Muotoelementti, joka ei rakennu | virhe |
| Parametri tai yhtälö virheellä, tai parametrit, jotka käyttävät toisiaan | virhe |
| Luonnos, joka on alimääritelty, vapausasteineen | varoitus |
| Luvut, jotka on kirjoitettu suoraan muotoelementteihin ja mittoihin eikä mikään parametri ohjaa | varoitus |
| Parametri, jota mikään ei käytä | varoitus |
| Pois käytöstä poistettu muotoelementti; palautuspalkki ei ole lopussa | varoitus |

`--strict` tekee jokaisesta varoituksesta virheen, joten rakennusskripti voi hylätä osan, jota ei ole täysin ohjattu.

:::note
`.swb`-makrotuloste on tarkoitettu sille osamallinnusohjelmalle, jota useimmat työpajat käyttävät. Kun se ajetaan kyseisessä ohjelmassa, se rakentaa osan siellä. Sitä ei ole ajettu kyseisessä ohjelmassa täällä (se ei ole saatavilla palvelimillamme), joten pidä sitä testaamattomana.
:::
