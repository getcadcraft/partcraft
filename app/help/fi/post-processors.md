---
title: Muokattavat postit
summary: Posti on lyhyt tekstitiedosto, joka muuttaa työstöradan G-koodiksi ohjaimellesi. Kopioi jokin sisäänrakennetuista posteista, muuta tarvitsemasi rivit (rivinumerot, työkalunvaihto, kotiinpaluuliikkeet, lopetuskoodi), näe kirjoitettava G-koodi samalla kun kirjoitat ja säilytä posti osan mukana.
keywords: posti, postiprosessori, postprosessori, G-koodi, NC, GRBL, LinuxCNC, muokkaa postia, oma posti, cpost, työkalunvaihto, M6, G43, kiinteä sykli, rivinumerot, modaalinen, tapahtuma, muuttuja
from: 36ab8a38
---

Sama työstörata täytyy kirjoittaa eri tavoin eri ohjaimille: rivinumerot tai ei, `M6` tai tauko, `G28` tai `G53`, `M30` tai `M2`. **Posti** on lyhyt teksti, joka kertoo, miten. PartCraftin kolme sisäänrakennettua postia (Fanuc-tyyppinen, GRBL ja LinuxCNC) on kirjoitettu tässä muodossa, joten oma posti voi alkaa kopiona jostakin niistä.

Tarkista tulostus koneesi omalla simulaattorilla ennen työstöä ja aja ohjelma ensin ilmassa, materiaalin yläpuolella. Sisäänrakennetut postit kirjoittavat täsmälleen saman kuin ennen tätä muotoa (testit vertaavat tulostusta tavu tavulta sadoissa ohjelmissa), mutta mitään tästä ei ole todistettu koneellasi. Muutettu posti täytyy todistaa itse.

## Luo oma

**Posti**-kohdassa Valmistuksessa:

- {{ui:Muokkaa postia…}} sisäänrakennetun ohjaimen kohdalla avaa **oman kopion** siitä. Omalla postilla se avaa kyseisen postin.
- {{ui:Uusi posti…}} aloittaa pienen tyhjän postin, jossa on jokainen tapahtuma.
- {{ui:Tuo postitiedosto…}} lukee `.cpost`-tekstitiedoston (tiedoston, jonka saat editorin **Tallenna tiedostona…** -toiminnolla).

Editori näyttää tekstin, rivin, joka kertoo, onko posti luettavissa (ja mikä rivi on väärin), sekä G-koodin, jonka posti kirjoittaa samalla kun kirjoitat. **Esikatselu**-valinta valitsee pienen esimerkkiohjelman, joka ajaa jokaisen tapahtuman, tai tämän osan oman ohjelman. {{ui:Tallenna}} tallentaa postin osan tiedostoon (enintään 20 postia) ja valitsee sen ohjaimeksi. Postit kulkevat osan mukana: jos haluat käyttää postia toisessa osassa, tallenna se tiedostona ja tuo se toisessa osassa.

## Miltä posti näyttää

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Rivit, jotka alkavat `//`, ja tyhjät rivit ohitetaan. Ensimmäisinä ovat asetukset; sen jälkeen jokaiselle tapahtumalle oma `on <event>` -lohko, joka päätetään `end`-lauseella. Tapahtuma, jonka jätät pois, ei kirjoita mitään.

| Asetus | Merkitys |
|---|---|
| `post <id>` | Postin tunnus: kirjaimet, numerot, `-` ja `_` |
| `name <text>` | Mitä ohjainluettelo näyttää |
| `extension <ext>` | Tiedostopääte: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … jokaisella `emit`-rivillä, tai ei yhtään |
| `decimal-point yes` / `no` | `10.` `10`:n sijaan (kommentit eivät koskaan sisällä pistettä) |
| `canned-cycles yes` / `no` | `no`: reiät kirjoitetaan G0/G1-liikkeinä, joita ne edustavat |
| `modal <group> <words>` | Ryhmän sanat (`modal motion G0 G1 G2 G3`), jotka kirjoitetaan vain, kun ne muuttuvat |

## Tapahtumat

Ohjelmassa ne ajetaan tässä järjestyksessä: `start`; sitten jokaiselle toimenpiteelle `operation`, `tool-change` (kun työkalu vaihtuu), `spindle` (kun nopeus vaihtuu), `approach` (liike ensimmäiseen pisteeseen ennen ensimmäistä pikaliikettä), `coolant-on`, sitten sen liikkeet `rapid`, `feed` ja `arc`, ja jokainen kiinteä sykli `cycle-start`-tapahtumana, yksi `cycle-hole` per reikä ja `cycle-end`; lopuksi `end`.

Jokainen tapahtuma voi käyttää oman liikelajinsa muuttujia, kirjoitettuna `{name}`: ohjelma (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), aihio (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), työkalu (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), toimenpide (`op.name`, `op.type`), `rpm`, liikkeen piste (`x`, `y`, `z`, `f`, ja `moved`: tosi, kun akseli muuttui), kaaret (`arc.g` 2 tai 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) ja reiät (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Muokkausikkunan **Tapahtumat ja muuttujat** -luettelo näyttää, mikä tapahtuma näkee minkäkin. Tila, jota voi lukea ja asettaa: `cool`, `offset` sekä `at.x`, `at.y`, `at.z`, `at.f` (viimeksi kirjoitetut arvot).

## Lauseet

| Lause | Mitä se tekee |
|---|---|
| `raw TEXT` | Rivi täsmälleen kirjoitettuna (ei rivinumeroa) |
| `comment TEXT` | `(TEXT)`, josta ei-ASCII-merkit ja sulkeet on poistettu |
| `emit WORD WORD …` | Sanarivi; tyhjiksi jäävät sanat jätetään pois; ei sanoja, ei riviä |
| `word WORD …` | Lisää sanoja rakenteilla olevaan riviin; tyhjä `emit` päättää sen |
| `if EXPR` … `else` … `end` | Ehdot: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, muuten b) |
| `for tool in tools` … `end` | Kerran jokaiselle ohjelman käyttämälle työkalulle |
| `set NAME EXPR` | Muistaa arvon (`set offset tool.number`) |
| `reset NAME …` | Unohtaa modaaliset sanat (ryhmän, osoitekirjaimen kuten `Z` tai `at.z`) |
| `do rapid X Y Z` | Ajaa `rapid`-tapahtuman pisteelle |

Sana on kirjoitettua tekstiä, jossa on `{variable|filter}`-aukkoja. Suodattimet ovat `upper`, `lower`, `pad:N` (nollatäyte), `cut:N` (N ensimmäistä merkkiä), `safe` (kommenttiturvallinen ASCII) ja `int`. Sana, joka päättyy `~`, on **modaalinen**: se kirjoitetaan vain, kun se eroaa viimeksi kirjoitetusta (`G1~`, `X{x}~`). Sana, joka päättyy `~!`, kirjoitetaan joka kerta ja muistetaan silti. Nimi, joka ei ole muuttuja, on pelkkää tekstiä (`G81`, `mist`). Luvut pyöristetään 0.001 mm:iin ja kirjoitetaan ilman loppunollia.

## Mitä posti ei voi tehdä

Posti päättää vain siitä, miten liikkeet kirjoitetaan, ei muusta. Se ei voi muuttaa työstörataa, järjestää toimenpiteitä, jakaa kaarta, lisätä akselia, tietää koneen liikealuetta tai kinematiikkaa eikä laskea koordinaateilla (`+` ei ole käytössä). Mittausta, työkalun kestoa ja alaohjelmasyklejä, 4. ja 5. akselin tulostusta sekä sorvikoodeja ei ole vielä toteutettu. Toisen ohjelman `.cps`-tyyppistä postitiedostoa ei voi ladata: tämä on eri, yksinkertaisempi muoto.
