---
title: Generaattorin kirjoittaminen
summary: Generaattori on CraftScript-, Lua- tai Python-skripti, jonka alussa on kommenttirivejä, jotka kuvaavat sen syötteet. Miten syötteistä tulee lomake, mitä skriptin on jätettävä jäljelle (kappale, tietolomake, ongelmat), pieni täydellinen esimerkki ja miten skriptisi avataan generaattorina.
keywords: generaattori, kirjoita, skripti, craftscript, ylätunniste, syöte, @input, @generator, kappale, tietolomake, ongelmat, to_body, mfg_check, datalomake, esimerkki, hila, kenttä
from: ed8a5ed8
---

Generaattori on tavallinen skripti ([CraftScript](topic:craftscript), Lua tai Python), jonka alussa on muutama kommenttirivi. PartCraft lukee kommentit ja luo lomakkeen. Skripti lukee syötteet muuttujina, jotka on jo asetettu.

## Otsikkorivit

Kirjoita nämä kommenttirivejä (`%` CraftScriptissä, `--` Luassa, `#` Pythonissa):

```
% @generator Lämmönvaihdin
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Massavirta"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Pinta"
% @input solid: = true
% @input note: = "text"
```

Syöte on muotoa `nimi: yksikkö = oletus`. Sen perään voi lisätä alueen `[min .. max]` (luvut pysyvät alueen sisällä), valintalistan `{a, b, c}` ja lainausmerkkeihin kirjoitetun nimiön. Yksikkö on vain lomakkeen nimiö: **arvo saapuu siinä yksikössä**, joten skripti, joka haluaa SI-yksiköt, muuntaa arvon. `to_si(value, 'kg/s', 'kg/s')` tarkistaa myös, että yksikkö tarkoittaa sitä, mitä luulet. Nimi koostuu kirjaimista, numeroista ja alaviivasta; `body`, `sheet` ja `problems` ovat varattuja.

## Mitä skripti jättää

| Muuttuja | Mitä |
|---|---|
| `body` | **Pakollinen.** Pintaverkko, yleensä kutsusta `[body, info] = to_body(field, h)`. Se korjataan ja tarkistetaan ajon päättyessä. |
| `sheet` | Valinnainen. Rakenne (struct): jokainen kenttä on luku tai teksti, tai rakenne, jossa on `value`, `unit`, `ref` ja `note`. Siitä tulee datalomake. |
| `problems` | Valinnainen. `problems`-solu kutsusta `mfg_check(field, 'sls', struct(), h)` tai omat merkinnät. Ne menevät tarkistuksiin ja Ongelmat-luetteloon. |

## Pieni täydellinen esimerkki

```
% Ontto kuutio, jolla on seinämä.
% @generator Ontto kuutio
% @input side: mm = 12 [4 .. 40] "Sivu"
% @input wall: mm = 1.5 [0.5 .. 5] "Seinä"
% @input h: mm = 0.5 [0.25 .. 2] "Vokselikoko"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'verkosta');
```

Tuloksena on suljettu laatikko, ja tarkistus ilmoittaa sen suljetun sisätilan virheenä jauheprosessissa. Tee vokselikoko `h` enintään kolmasosa ohuimmasta haluamastasi seinästä: alle noin kolmen vokselin seinä ei ole luotettava.

## Kentät

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (profiilista tehty pyörähdyskappale), `tpms` (gyroid-, Schwarz P- ja diamond-pinnat, joilla on solukoko ja seinä, joka voi vaihdella osan poikki), `lattice` ja `lattice_beams`, `along` (pyöreä kanava polkua pitkin), boolean-operaatiot `field_union`, `field_intersect`, `field_subtract`, pehmeä `field_blend` sekä `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` antaa etäisyyden pisteissä (negatiivinen sisällä), `field_voxel` antaa ratkaisijoille vokselit. [Kentät](topic:fields) selittää, mitä ne ovat.

Kannattaa tietää rajoituksista: levyseinä, joka on paksumpi kuin noin neljännes solusta, sulkee kanavat; alle noin kolmen vokselin ominaisuus voi kuroutua; `along` yhdistää pyöreitä kartioita, joten säde, joka muuttuu nopeasti, jättää pullistuman (profiilia varten käytä `field_revolve`).

## Avaa skriptisi generaattorina

{{ui:Insinööri}}-työtilassa napsauta {{ui:Avaa}} ja valitse tiedosto. Skripti ilman riviä `@generator` tai `@input` hylätään, koska asetettavaa ei olisi. Generaattori säilytetään tässä selaimessa (enintään 20), ja {{ui:Poista}} poistaa sen. Kappale, joka aloitetaan siitä, kantaa mukanaan kopion skriptistä, joten osa ei ole riippuvainen siitä.

Tiedosto voi myös sisältää useita generaattoreita: JSON-paketti `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
