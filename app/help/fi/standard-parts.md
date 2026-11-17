---
title: Avaa vakio-osa
summary: Aloita osa pultista, ruuvista, mutterista, aluslevystä, tapista, laakerista tai urasta, jonka koko tulee sen standardista, ja standardin taulukon jokainen koko konfiguraationa.
keywords: vakio-osa, vakio-osat, pultti, ruuvi, kuusio, mutteri, aluslevy, tappi, sokeri, laakeri, kuulalaakeri, ura, yhdensuuntainen ura, kiinnitin, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, mallipohja, kirjasto
from: b9e2811f
---

PartCraft avaa yleisiä mekaanisia osia valmiina: mitat tulevat standardien taulukoista, ja jokainen taulukon koko on konfiguraatio, johon voit vaihtaa.

## Avaa osa

1. Valitse {{ui:Vakio-osa}} Tiedosto-ryhmästä.
2. Valitse kohdasta {{ui:Osa}} tyyppi, esimerkiksi {{ui:Kuusiopääruuvi (ISO 4017)}}.
3. Valitse kohdasta {{ui:Koko}} koko, esimerkiksi `M10 × 40`.
4. Valitse {{ui:Avaa}}.

Osa avautuu uutena, tallentamattomana osana. Tallenna se säilyttääksesi sen ({{key:Mod+S}}).

| Osa | Standardi | Parametrit |
|---|---|---|
| Kuusiopääruuvi, kuusiopultti | ISO 4017, ISO 4014, ASME B18.2.1 (tuuma) | `d` kierteen koko, `s` avain, `k` pään korkeus, `l` pituus |
| Kuusiomutteri | ISO 4032, ASME B18.2.2 (tuuma) | `d`, `s`, `height` |
| Tavallinen aluslevy | ISO 7089 | `d1` sisä, `d2` ulko, `h` paksuus |
| Yhdensuuntainen tappi | ISO 2338 | `d`, `l` |
| Syvä uravalaakeri | ISO 15 | `d` reikä, `D` ulkohalkaisija, `B` leveys |
| Yhdensuuntainen ura | DIN 6885-1, muoto A | `b` leveys, `h` korkeus, `l` pituus |

## Muuta kokoa

Jokainen koko on konfiguraatio (katso [Konfiguraatiot ja suunnittelutaulukot](topic:design-tables)): avaa {{ui:Parametrit}} ja valitse toinen, tai muuta parametria, kuten `l` pidempää ruuvia varten, ja tallenna se omana konfiguraationasi.

## Mitä on mallinnettu

- Ruuvit ja pultit: kuusioinen pää ja tavallinen varsi. Mutterit: kuusio, jonka reiän koko on kierteen nimellinen koko. Kierteitä ei mallinneta; lisää kierre {{ui:Kierre}}-työkalulla tarvittaessa (katso [Kierteet](topic:threads)).
- Tapit: tavallinen sylinteri; päiden viistoja ei ole.
- Laakerit: vain ulkoinen ympäristö (reiän rengas, ulkohalkaisija ja leveys), mikä riittää sijoittamiseen.
- Urat: pyöreäpäinen ura.

Osan materiaali on teräs, joten massapaneeli näyttää sen painon. Hammaspyöriä ei ole vielä: PartCraftissa ei ole hammasominaisuutta, eikä kiekko ole hammaspyörä. CadCraft piirtää hammaspyörät piirustuskäytännön mukaan, ja kirjastossa ne ovat piirustuksina.
