---
title: Otvaranje standardnog dijela
summary: Pokrenite dio iz vijka, zavrtnja, matice, podloške, klina, ležaja ili ključa dimenzionisanog prema standardu, sa svakom veličinom iz tabele standarda kao konfiguracijom.
keywords: standardni dio, standardni dijelovi, vijak, zavrtanj, šestougaoni, matica, podloška, klin, svornjak, ležaj, kuglični ležaj, ključ, paralelni ključ, pričvršćivač, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, šablon, biblioteka
from: b9e2811f
---

PartCraft otvara uobičajene mašinske dijelove gotove: dimenzije dolaze iz tabela standarda, a svaka veličina u tabeli je konfiguracija na koju možete preći.

## Otvorite jedan

1. Kliknite {{ui:Standardni dio}} u grupi {{ui:Datoteka}}.
2. U {{ui:Dio}} odaberite vrstu, na primjer {{ui:Vijak sa šestougaonom glavom (ISO 4017)}}.
3. U {{ui:Format}} odaberite veličinu, na primjer `M10 × 40`.
4. Kliknite {{ui:Otvori}}.

Dio se otvara kao novi, nespašen dio. Spasite ga da ga sačuvate ({{key:Mod+S}}).

| Dio | Standard | Parametri |
|---|---|---|
| Vijak sa šestougaonom glavom, šestougaoni zavrtanj | ISO 4017, ISO 4014, ASME B18.2.1 (inč) | `d` veličina navoja, `s` širina preko ravnih strana, `k` visina glave, `l` dužina |
| Šestougaona matica | ISO 4032, ASME B18.2.2 (inč) | `d`, `s`, `height` |
| Obična podloška | ISO 7089 | `d1` unutrašnji, `d2` spoljašnji, `h` debljina |
| Paralelni klin | ISO 2338 | `d`, `l` |
| Kuglični ležaj sa dubokim žlijebom | ISO 15 | `d` unutrašnji prečnik, `D` spoljašnji, `B` širina |
| Paralelni ključ | DIN 6885-1, oblik A | `b` širina, `h` visina, `l` dužina |

## Promjena veličine

Svaka veličina je konfiguracija (pogledajte [Konfiguracije i tabele dizajna](topic:design-tables)): otvorite {{ui:Parametri}} i odaberite drugu, ili promijenite parametar, na primjer `l` za duži vijak, i spasite ga kao svoju konfiguraciju.

## Šta je modelirano

- Vijci i zavrtnji: šestougaona glava i obična stabljika. Matice: šestougao sa rupom nazivne veličine navoja. Navoji nisu modelirani; dodajte ga s {{ui:Navoj}} ako vam treba (pogledajte [Navoji](topic:threads)).
- Klinovi: običan cilindar; skošenja krajeva su izostavljena.
- Ležaji: samo spoljašnji omotač (prsten unutrašnjeg prečnika, spoljašnji prečnik i širina), što vam treba da postavite ležaj.
- Ključevi: ključ sa zaobljenim krajem.

Materijal dijela je čelik, pa panel mase prikazuje njegovu težinu. Zupčanici još nisu ovdje: PartCraft nema element zuba, a disk nije zupčanik. CadCraft crta zupčanike prema konvenciji crteža, a biblioteka ih ima kao crteže.
