---
title: Otvaranje standardnog dela
summary: Počni deo od zavrtnja, vijka, matice, podloške, klina, ležaja ili ključa dimenzionisanog prema njegovom standardu, sa svakom veličinom iz tablice standarda kao konfiguracijom.
keywords: standardni deo, standardni delovi, zavrtanj, vijak, šestougaona glava, matica, podloška, klin, moždanik, ležaj, kuglični ležaj, ključ, paralelni ključ, pričvršćivač, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, šablon, biblioteka
from: b9e2811f
---

PartCraft otvara uobičajene mašinske delove gotove: dimenzije dolaze iz tablica standarda, a svaka veličina iz tablice je konfiguracija na koju možeš da se prebaciš.

## Otvori jedan

1. Klikni {{ui:Standardni deo}} u grupi Datoteka.
2. U {{ui:Deo}} izaberi vrstu, na primer {{ui:Zavrtanj sa šestougaonom glavom (ISO 4017)}}.
3. U {{ui:Format}} izaberi veličinu, na primer `M10 × 40`.
4. Klikni {{ui:Otvori}}.

Deo se otvara kao novi, nesačuvani deo. Sačuvaj ga da ga zadržiš ({{key:Mod+S}}).

| Deo | Standard | Parametri |
|---|---|---|
| Zavrtanj sa šestougaonom glavom, šestougaoni zavrtanj | ISO 4017, ISO 4014, ASME B18.2.1 (inč) | `d` veličina navoja, `s` širina preko ravnih, `k` visina glave, `l` dužina |
| Šestougaona matica | ISO 4032, ASME B18.2.2 (inč) | `d`, `s`, `height` |
| Obična podloška | ISO 7089 | `d1` unutra, `d2` spolja, `h` debljina |
| Paralelni klin | ISO 2338 | `d`, `l` |
| Kuglični ležaj sa dubokim žlebom | ISO 15 | `d` otvor, `D` spolja, `B` širina |
| Paralelni ključ | DIN 6885-1, oblik A | `b` širina, `h` visina, `l` dužina |

## Promeni veličinu

Svaka veličina je konfiguracija (vidi [Konfiguracije i tabele projektovanja](topic:design-tables)): otvori {{ui:Parametri}} i izaberi drugu, ili promeni parametar, na primer `l` za duži zavrtanj, i sačuvaj ga kao sopstvenu konfiguraciju.

## Šta je modelovano

- Zavrtnji i vijci: šestougaona glava i obična stabljika. Matice: šestougao sa rupom nazivne veličine navoja. Navoji nisu modelovani; dodaj ga sa {{ui:Navoj}} ako ti treba (vidi [Navoji](topic:threads)).
- Klinovi: običan cilindar; skošenja na krajevima su izostavljena.
- Ležajevi: samo spoljašnji omotač (prsten otvora, spoljašnji prečnik i širina), što ti treba da bi ga postavio.
- Ključevi: ključ sa zaobljenim krajevima.

Materijal dela je čelik, pa panel mase prikazuje njegovu masu. Zupčanici još nisu ovde: PartCraft nema funkciju zuba, a disk nije zupčanik. CadCraft crta zupčanike po konvenciji crteža, a biblioteka ih ima kao crteže.
