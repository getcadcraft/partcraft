---
title: Insinööritekninen kirjasto
summary: Oppikirjakaavat luettavina skripteinä SI-yksiköissä, jokainen tulos lähteineen: putki- ja kanavavirtaus, lämmönsiirto ja lämmönvaihtimet, painekomponentit, kaasudynamiikka, veden ja ilman ominaisuudet, materiaalit sekä tarkistetut yksiköt. Mihin kukin sopii ja mihin se loppuu.
keywords: insinööritekniikka, kirjasto, yksiköt, Darcy-Weisbach, Colebrook, Reynolds, kitkakerroin, Dittus-Boelter, Gnielinski, NTU, efektiivisyys, LMTD, evä, Barlow, Lamé, suutin, isentrooppinen, Mach, tukkeutunut virtaus, vesi, ilma, ominaisuudet, materiaali, lähteet
from: 786ef967
---

Insinööritekninen kirjasto on joukko skriptejä Skriptityötilan kirjastossa (`craftlib/eng`). Jokainen on funktio, jonka voi lukea ylhäältä alas, ja sen alussa on otsikko, joka kertoo sen **menetelmän**, **yksiköt**, **rajoitukset**, **viitteet** ja **tarkistuksen** laskettuna esimerkkinä. Ne käyttävät SI-yksiköitä kaikkialla ja palauttavat suureita, joissa on **yksikkö** ja **lähde**, joten tietolehti voi tulostaa, mistä jokainen luku on peräisin.

## Yksiköt, jotka tarkistetaan

`to_si(10, 'bar', 'Pa')` muuntaa arvon ja hylkää yksikön, joka mittaa jotain muuta (pituus, kun odotetaan painetta). `from_si`, `unit_convert(1, 'bar', 'psi')` ja `unit_kind('W/(m K)')` (”lämmönjohtavuus”) toimivat samalla tavalla. `temp_k(25, 'C')` ja `temp_from_k` muuntavat lämpötiloja, joilla on siirtymä.

## Ominaisuudet

- `fluid('water', T)` ja `fluid('air', T, p)`: tiheys, viskositeetti, johtavuus, ominaislämpö, Prandtl-luku. Vesi 0–100 °C, ilma 250–600 K; sen ulkopuolella skripti pysähtyy sen sijaan, että ekstrapoloisi.
- `material('ss304')`: Youngin moduuli, Poissonin luku, tiheys, myötölujuus, johtavuus, ominaislämpö, lämpölaajenemiskerroin: huoneenlämpötilan arvot samoista tietolehdistä kuin Simulointi. Todellisessa suunnittelussa käytetään toimittajan sertifioituja arvoja. Lämpötilakäyriä ei ole vielä toteutettu.

## Virtaus putkissa ja kanavissa

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminaarinen, sitten turbulenttiseen virtaukseen Colebrook-yhtälö; alueella 2300–4000 ei ole luotettavaa kaavaa, ja skripti sanoo sen), `darcy_weisbach`, `minor_loss`, `pipe_flow` (pyöreä putki, kaikki kerralla) ja `rect_channel` (suorakaiteen muotoiset laminaariset kanavat Shahin ja Londonin sovituksella).

## Lämmönsiirto

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (valitsee laminaarisen tai turbulentin ja nimeää korrelaation), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` ja `ntu_for` (efektiivisyys-NTU-yhtälöt myötävirtaan, rinnakkaisvirtaan, vaippa-putki-, ristivirtaan ja yhteen muuttuvaan virtaan) sekä `hx_size` (tehtävän vaatima UA-koko; se kertoo, kuinka paljon on mahdollista, kun tehtävää ei voi täyttää).

## Painekomponentit

`allowable_stress` (myötöraja jaettuna varmuuskertoimella), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, kehäjännitys- tai leikkausjännityskriteerillä) ja `wall_sphere`. Nämä ovat oppikirjan marginaaleja, **eivät paineastian säännöstölaskelmaa**: ei korroosiovaraa, liitoshyötysuhdetta eikä säännöstön kertoimia.

## Kaasudynamiikka

`isentropic` (suhteet Mach-luvulla), `mach_from_area`, `choked_flow`, `throat_area` ja `exit_mach` täydelliselle kaasulle ilman kitkaa, lämpöä tai iskuaaltoja.

## Tarkista tulos

`check_stress`, `check_thermal` ja `check_flow` ajavat PartCraftin omat jännitys-, johtumis- ja virtausratkaisijat generoidulle osalle skriptistä ja lukevat takaisin enimmäisjännityksen ja -siirtymän, lämpötilat ja lämpövirran sekä kanavaverkoston läpäisevyyden. Ne eivät muuta ratkaisijoita. Jännitys- ja lämpötilatarkistukset käyttävät voksel-hilaa, joten kaareva pinta on portaikko, ja terävän sisänurkan jännitys tai pistekuorman alla oleva jännitys riippuu voksel-koosta.
