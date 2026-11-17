---
title: Vrtanje lukenj in zareznic na točkah skice
summary: Postavite točke v skici na ploskev, naredite preproste, zarezane, pogreznjene ali navojne (ISO metrične) luknje na vsaki točki, nastavite premer in globino ter popravite luknje, ki vrtajo v napačno smer.
keywords: luknja, čarovnik lukenj, vrtanje, modeliran navoj, 3D-tiskanje, zareznica, cbore, pogreznjena luknja, csink, navojna luknja, navoj, premer svedra, skozi vse, slepa luknja, vijačna luknja, točke, središča lukenj, M6
from: 8e1eef83
---

{{ui:Izvrtina}} izvrta po eno luknjo na vsaki prosti točki skice. Prosta točka je tista, narejena z orodjem Točka, ne konec črte ali središče kroga.

## Vrtanje lukenj v ploskvi

1. Kliknite ravno ploskev, v katero vrtate, nato izberite {{ui:Skica na tej ploskvi}}.
2. Pritisnite {{key:P}} in kliknite, kamor gre vsaka luknja. Točke določite s kotami od robov ali izhodišča, če je njihov položaj pomemben (glejte [Popolnoma določite skico](topic:relations-dimensions)).
3. Izberite {{ui:Izhod}}.
4. Izberite {{ui:Izvrtina}}.

Luknje gredo skozi del, premer 6 mm. Desna plošča prikaže **Luknje**: koliko jih je bilo narejenih, „ena na točko skice“.

**Ena luknja, hitro:** kliknite ravno ploskev, kjer je luknja, in na desni plošči izberite {{ui:Izvrtina tu}}. PartCraft v enem koraku doda skico na ploskev z eno točko, kjer ste kliknili, in luknjo skozi del. Takoj vnesite število in pritisnite {{key:Enter}} za njen premer. Za natančen položaj odprite novo skico in določite točko s kotami.

**Katera skica se uporabi:** pravkar zaprta ali izbrana skica; sicer najnovejša neuporabljena skica s prostimi točkami. Če je ni: „Najprej naredite skico s točkami, kjer so luknje (Skica na ploskvi, nato Točka).“

## Nastavitve

| Nastavitev | Izbire | Privzeto |
|---|---|---|
| **Vrsta** | Preprosta, Zareznica, Pogreznjena, Navojna (ISO metrična) | Preprosta |
| **Premer (mm)** | Premer luknje | 6 |
| **Skozi vse** | Označeno: čez ves del. Odznačite za slepo luknjo | Označeno |
| **Globina (mm)** | Prikazano, ko je Skozi vse odznačeno | 10 |
| **Premer zareznice ⌀** | Prikazano za zareznico: premer širšega utora | 11 |
| **Globina zareznice** | Prikazano za zareznico | 6 |
| **Obrnjena smer** | Vrta na drugo stran ravnine skice | Izklopljeno |

Luknje vrtajo v material, pravokotno na ravnino skice. Globina slepe luknje se meri od ravnine skice; njeno dno je ravno.

## Zarezana luknja za vijak

1. Naredite luknje, kot zgoraj.
2. Nastavite **Vrsta** na **Zareznica**.
3. Nastavite **Premer (mm)** na `6.6` (zračnost za vijak M6), **Premer zareznice ⌀** na `11` in **Globina zareznice** na `6.5`.

Zareznica mora biti širša od luknje („Zareznica mora biti širša od luknje.“) in pri slepi luknji plitvejša od nje („Zareznica mora biti plitvejša od luknje.“).

## Krog vijakov

Za luknje, enakomerno razporejene okoli središča, naredite **eno** luknjo in jo vzorčite: izberite značilko Izvrtina, nato {{ui:Krožno}} (glejte [Vzorci in zrcaljenje](topic:patterns-mirror)). Vzorec sledi, ko spremenite velikost luknje.

## Ko luknje gredo v napačno smer

- „Na tej strani skice ni česa vrtati. Poskusite obrniti smer.“ Skica je na oddaljeni strani materiala. Označite **Obrnjena smer**.
- „Postavite točke skice tja, kjer so luknje (orodje Točka), nato naredite luknjo.“ Skica nima prostih točk. Konci črt in središča krogov se ne štejejo.
- „Še ni ničesar za vrtanje.“ Luknja potrebuje telo. Najprej naredite izboklino.

## Luknje v sestavih

Vsaka luknja ima os. V sestavi lahko **Središči na** postavi sklep na os luknje, navedeno kot „Hole1, hole 2“, da se zatič ali vijak poravna z njo. Glejte [Izdelava sestave](topic:build-assembly).

## Pogreznjene luknje

Nastavite **Vrsta** na **Pogreznjena**, nato **Premer pogreznitve ⌀** (na površini) in **Kot pogreznitve**: 90° (ISO metrični vijaki z ravno glavo) ali 82° (palčni vijaki). Premer pogreznitve vzemite iz podatkov proizvajalca vijaka (nekoliko večji od premera glave vijaka). Ploskev stožca se na ploščah imenuje „countersink“.

## Navojne luknje

Nastavite **Vrsta** na **Navojna (ISO metrična)** in izberite **Navoj**, M2 do M24 grob. Luknja se izvrta s premerom svedra iz spodnje tabele (nazivni premer minus korak, do serije svedrov, kot jo ISO 2306 navaja za navoj 6H); polje **Premer (mm)** se ne uporablja. Pri slepi luknji **Globina navoja (mm)** določa, kako globoko sega navoj.

| Navoj | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Korak | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Premer svedra ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Navoj je najprej **kozmetičen**: model ima izvrtano luknjo, pogled nariše zunanji premer navoja s črtkanimi krogi, list risbe pa prinese oznako kot opombo, na primer „4× M8×1.25 - 6H, navoj skozi“. STEP izvozi samo izvrtano luknjo.

Označite **Modelirano**, da v luknjo vrežete pravi spiralni navoj za 3D-tiskanje. **Zračnost (mm)** navoj vsepovsod toliko poveča, da se natisnjen vijak prilega: 0.1 do 0.2 mm ustreza večini tiskalnikov. Oznaka se nato konča z „(modelirano)“. Glejte [Navoji na gredeh in vrtinah, risani ali modelirani](topic:threads), ki navoje postavi tudi na gredi.

:::note
Luknje, vrtane z obeh strani, palčni navoji in cevni navoji še niso izdelani.
:::
