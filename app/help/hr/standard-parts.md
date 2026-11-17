---
title: Otvaranje standardnog dijela
summary: Započnite dio od vijka, zavrtnja, matice, podloške, klina, ležaja ili pera dimenzioniranog prema njegovu standardu, sa svakom veličinom iz tablice standarda kao konfiguracijom.
keywords: standardni dio, standardni dijelovi, vijak, zavrtanj, šesterokut, matica, podloška, klin, ležaj, kuglični ležaj, pero, paralelno pero, pričvršćivač, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, predložak, knjižnica
from: b9e2811f
---

PartCraft otvara uobičajene strojne dijelove gotove: dimenzije dolaze iz tablica standarda, a svaka veličina u tablici je konfiguracija na koju možete prijeći.

## Otvorite jedan

1. Kliknite {{ui:Standardni dio}} u grupi Datoteka.
2. U {{ui:Dio}} odaberite vrstu, npr. {{ui:Vijak sa šesterokutnom glavom (ISO 4017)}}.
3. U {{ui:Format}} odaberite veličinu, npr. `M10 × 40`.
4. Kliknite {{ui:Otvori}}.

Dio se otvara kao novi, nespremljeni dio. Spremite ga da ga zadržite ({{key:Mod+S}}).

| Dio | Standard | Parametri |
|---|---|---|
| Vijak sa šesterokutnom glavom, šesterokutni vijak | ISO 4017, ISO 4014, ASME B18.2.1 (inč) | `d` veličina navoja, `s` raspon ključa, `k` visina glave, `l` duljina |
| Šesterokutna matica | ISO 4032, ASME B18.2.2 (inč) | `d`, `s`, `height` |
| Obična podloška | ISO 7089 | `d1` unutarnji, `d2` vanjski, `h` debljina |
| Paralelni klin | ISO 2338 | `d`, `l` |
| Kuglični ležaj s dubokim žlijebom | ISO 15 | `d` promjer provrta, `D` vanjski promjer, `B` širina |
| Paralelno pero | DIN 6885-1, oblik A | `b` širina, `h` visina, `l` duljina |

## Promjena veličine

Svaka veličina je konfiguracija (vidi [Konfiguracije i tablice dizajna](topic:design-tables)): otvorite {{ui:Parametri}} i odaberite drugu ili promijenite parametar, npr. `l` za duži vijak, i spremite ga kao vlastitu konfiguraciju.

## Što je modelirano

- Vijci i zavrtnji: šesterokutna glava i obična stabljika. Matice: šesterokut s rupom nazivne veličine navoja. Navoji nisu modelirani; dodajte ih s {{ui:Navoj}} ako ih trebate (vidi [Navoji](topic:threads)).
- Klinovi: obični valjak; skošenja krajeva su izostavljena.
- Ležajevi: samo vanjski omotač (prsten promjera provrta, vanjski promjer i širina), što vam treba za postavljanje.
- Pera: pero s okruglim krajevima.

Materijal dijela je čelik, pa ploča mase prikazuje njegovu težinu. Zupčanici još nisu ovdje: PartCraft nema značajku zuba, a disk nije zupčanik. CadCraft crta zupčanike prema konvenciji crteža, a knjižnica ih ima kao crteže.
