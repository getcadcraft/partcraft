---
title: Muokattavat postprosessorit
summary: Postprosessori on lyhyt tekstitiedosto, joka muuttaa työstöradan ohjaimesi G-koodiksi. Kopioi yksi sisäänrakennetuista postprosessoreista, muuta tarvitsemasi rivit (rivinumerot, työkalunvaihto, kotiinajoliikkeet, lopetuskoodi), näe kirjoitettava G-koodi samalla kun kirjoitat ja säilytä se osan mukana.
keywords: postprosessori, postprosessori, postprosessori, G-koodi, NC, GRBL, LinuxCNC, muokkaa postia, oma postprosessori, cpost, työkalunvaihto, M6, G43, kiinteä sykli, rivinumerot, modaalinen, tapahtuma, muuttuja
from: c78d0cae
---

Sama työstörata on kirjoitettava eri tavoin eri ohjaimille: rivinumerot tai ei niitä, `M6` tai tauko, `G28` tai `G53`, `M30` tai `M2`. **Postprosessori** on lyhyt teksti, joka kertoo, miten. PartCraftin kolme sisäänrakennettua postprosessoria (Fanuc-tyylinen, GRBL ja LinuxCNC) on kirjoitettu tässä muodossa, joten oma postprosessori voi alkaa kopiosta jostakin niistä.

Tarkista tulos koneesi omasta simulaattorista ennen leikkaamista ja aja se ensin ilmassa raaka-aihion yläpuolella. Sisäänrakennetut postprosessorit kirjoittavat täsmälleen sen, mitä ne kirjoittivat ennen tätä muotoa (testit vertaavat niiden tulosta tavu tavulta sadoissa ohjelmissa), mutta mitään tässä ei ole todistettu koneellasi, ja muutettu postprosessori on todistettava erikseen.

## Luo oma

Manufacturessa kohdassa **Postprosessori**:

- {{ui:Edit post…}} sisäänrakennetun ohjaimen kohdalla avaa **oman kopiosi** siitä. Omalla postprosessorillasi se avaa kyseisen postprosessorin.
- {{ui:New post…}} aloittaa pienestä tyhjästä postprosessorista, jossa on jokainen tapahtuma.
- {{ui:Import post file…}} lukee `.cpost`-tekstitiedoston (tiedoston, jonka saat editorin **Tallenna tiedostona…**-toiminnolla).

Editori näyttää tekstin, rivin, joka kertoo, luetaanko se (ja mikä rivi on väärin), sekä G-koodin, jonka postprosessori kirjoittaa samalla kun kirjoitat. **Esikatsele**-valinta valitsee pienen näyteohjelman, joka ajaa jokaisen tapahtuman, tai tämän osan oman ohjelman. {{ui:Save}} tallentaa postprosessorin osatiedostoon (enintään 20 postprosessoria) ja valitsee sen ohjaimeksi. Postprosessorit kulkevat osan mukana; käyttääksesi sitä toisessa osassa, tallenna se tiedostona ja tuo se siellä.

## Miltä postprosessori näyttää

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

Rivit, jotka alkavat `//`, ja tyhjät rivit jätetään huomiotta. Ylhäällä ovat asetukset; sen jälkeen tulee yksi `on <tapahtuma>`-lohko jokaiselle tapahtumalle, jotka päättyvät `end`-riviin. Tapahtuma, jonka jätät pois, ei kirjoita mitään.

| Asetus | Merkitys |
|---|---|
| `post <id>` | Postprosessorin tunnus: kirjaimet, numerot, `-` ja `_` |
| `name <text>` | Mitä Ohjain-luettelo näyttää |
| `extension <ext>` | Tiedostopääte: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … jokaisella `emit`-rivillä, tai ei lainkaan |
| `decimal-point yes` / `no` | `10.` `10`:n sijaan (kommenteissa ei koskaan ole pistettä) |
| `canned-cycles yes` / `no` | `no`: reiät kirjoitetaan G0/G1-liikkeinä, joita ne edustavat |
| `modal <group> <words>` | Ryhmän sanat (`modal motion G0 G1 G2 G3`), jotka kirjoitetaan vain, kun ne muuttuvat |

## Tapahtumat

Ne ajetaan ohjelmalle tässä järjestyksessä: `start`; sitten kullekin toimenpiteelle `operation`, `tool-change` (kun työkalu vaihtuu), `spindle` (kun nopeus muuttuu), `approach` (liike ensimmäiseen pisteeseen ennen ensimmäistä pikaliikettä), `coolant-on`, sitten sen liikkeet `rapid`-, `feed`- ja `arc`-tapahtumina, ja jokainen kiinteä sykli `cycle-start`-tapahtumana, yksi `cycle-hole` per reikä ja `cycle-end`; lopuksi `end`.

Lisää tapahtumia sille, mikä menee kolmen akselin yli (postprosessori, jolta tapahtuma puuttuu, hylkää tällaisen ohjelman ja nimeää puuttuvan tapahtuman):

| Tapahtuma | Milloin | Sen muuttujat |
|---|---|---|
| `index` | Ennen toimenpidettä, jonka työkalun suunta eroaa edellisestä, ja ennen ensimmäistä toimenpidettä koneella, jossa on kiertoakseleita | `rot.a`, `rot.b`, `rot.c` (asemat, joihin mennään; tyhjä akselille, jota koneella ei ole), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Toimenpiteen liikkeet, joissa kiertoakselit liikkuvat leikatessa | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (kyllä, kun syötön on oltava käänteinen aika), `invf` (1/minuutit) |
| `rotary-end` | Tällaisen toimenpiteen jälkeen | |
| `probe-move` | Liike, joka pysähtyy, kun anturi laukeaa | `x`, `y`, `z`, `f`, `probe.n` (1–4), `probe.axis` (x, y tai z), `probe.k` (1, 2 tai 3) |
| `probe-set` | Yhden mittaussyklin kosketusten jälkeen | `probe.kind` (`"z"`, `"x"`, `"y"` tai `centre`), `probe.action` (`set` tai `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Kierteitysliike sorvilla | `x`, `z`, `thread.lead` |

Kaikilla tapahtumilla on myös: `kin` (none, a, b, ac, bc), `rotary` ja `tcp` (yes tai no, Asetuksen koneesta), `pivot.x`, `pivot.y`, `pivot.z`, toimenpiteen `op.tilt` ja `op.turn`, sekä sorvilla `spin.mode` (css tai rpm), `spin.css`, `spin.max` ja `tool.nose`. Kirjainsana, jonka arvo on tyhjä, kuten `A{rot.a}` koneella ilman A-akselia, jätetään pois rivistä. Vertaa x, y ja z tekstinä lainausmerkeissä (`if probe.kind == "z"`): ilman niitä ne ovat liikkeen koordinaatteja.

Kaksi lisärivin asetusta postprosessorin alussa tekevät siitä sorvipostprosessorin: `machine lathe` (se kirjoittaa silloin vain X:n ja Z:n, ja hylkää jyrsintäradat kuten jyrsintäpostprosessori hylkää sorvausradat) ja `lathe-x diameter` tai `lathe-x radius`.

Jokainen tapahtuma voi käyttää oman liiketyyppinsä muuttujia, kirjoitettuna `{name}`: ohjelma (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), raaka-aihio (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), työkalu (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), toimenpide (`op.name`, `op.type`), `rpm`, liikkeen piste (`x`, `y`, `z`, `f`, ja `moved`: tosi, kun akseli muuttui), kaaret (`arc.g` 2 tai 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) ja reiät (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Editorin luettelo **Tapahtumat ja muuttujat** näyttää, mikä tapahtuma näkee minkäkin. Tila, jota voi lukea ja asettaa: `cool`, `offset` sekä `at.x`, `at.y`, `at.z`, `at.f` (viimeksi kirjoitetut arvot).

## Lauseet

| Lause | Mitä se tekee |
|---|---|
| `raw TEXT` | Rivi täsmälleen kirjoitettuna (ilman rivinumeroa) |
| `comment TEXT` | `(TEXT)`, jossa ei-ASCII-merkit ja sulkeet on poistettu |
| `emit WORD WORD …` | Rivi sanoja; tyhjiksi jääneet sanat jätetään pois; ei sanoja, ei riviä |
| `word WORD …` | Lisää sanoja rakenteilla olevaan riviin; tyhjä `emit` päättää sen |
| `if EXPR` … `else` … `end` | Ehdot: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, muuten b) |
| `for tool in tools` … `end` | Kerran jokaiselle ohjelman käyttämälle työkalulle |
| `set NAME EXPR` | Muista arvo (`set offset tool.number`) |
| `reset NAME …` | Unohda modaaliset sanat (ryhmä, osoitekirjain kuten `Z` tai `at.z`) |
| `do rapid X Y Z` | Aja `rapid`-tapahtuma pisteelle |

Sana on kirjoitettua tekstiä, jossa on `{variable|filter}`-aukkoja. Suodattimet ovat `upper`, `lower`, `pad:N` (nollatäyte), `cut:N` (N ensimmäistä merkkiä), `safe` (kommenttiturvallinen ASCII) ja `int`. Sana, joka päättyy `~`, on **modaalinen**: se kirjoitetaan vain, kun se eroaa viimeksi kirjoitetusta (`G1~`, `X{x}~`). Sana, joka päättyy `~!`, kirjoitetaan joka kerta ja muistetaan silti. Nimi, joka ei ole muuttuja, on pelkkää tekstiä (`G81`, `mist`). Luvut pyöristetään 0,001 mm:iin ja kirjoitetaan ilman loppunollia.

## Mitä postprosessori ei voi tehdä

Se päättää vain, miten liikkeet kirjoitetaan, ei muuta. Se ei voi muuttaa työstörataa, järjestää toimenpiteitä, jakaa kaarta, lisätä akselia, tietää koneesi liikealuetta tai kinematiikkaa eikä laskea koordinaatteja (`+`-merkkiä ei ole). Kiertoasemat tulevat itse koneesta, joka on kuvattu Asetuksessa, ei postprosessorista: postprosessori voi muuttaa niiden etumerkkiä tai kirjaimia, mutta ei kinematiikkaa. Työkalun käyttöiän ja alio-ohjelmasyklit eivät ole toteutettuja. Toisen ohjelman `.cps`-tyyppistä postitiedostoa ei voi ladata: tämä on eri, yksinkertaisempi muoto.
