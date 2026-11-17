---
title: Odprite standardni del
summary: Začnite del iz vijaka, matice, podložke, zatiča, ležaja ali pera, dimenzioniranega po standardu, pri čemer je vsaka mera iz tabele standarda konfiguracija.
keywords: standardni del, standardni deli, vijak, šestrobi, matica, podložka, zatič, moznik, ležaj, kroglični ležaj, pero, vzporedno pero, pritrdilni element, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, predloga, knjižnica
from: b9e2811f
---

PartCraft odpre pogoste mehanske dele pripravljene: mere so iz tabel standardov, in vsaka velikost v tabeli je konfiguracija, na katero lahko preklopite.

## Odprite enega

1. Kliknite {{ui:Standardni del}} v skupini Datoteka.
2. V {{ui:Del}} izberite vrsto, na primer {{ui:Vijak s šestrobo glavo (ISO 4017)}}.
3. V {{ui:Velikost}} izberite velikost, na primer `M10 × 40`.
4. Kliknite {{ui:Odpri}}.

Del se odpre kot nov, neshranjen del. Shranite ga, da ga ohranite ({{key:Mod+S}}).

| Del | Standard | Parametri |
|---|---|---|
| Vijak s šestrobo glavo, šestrobi vijak | ISO 4017, ISO 4014, ASME B18.2.1 (inch) | `d` velikost navoja, `s` razdalja med ploskvama, `k` višina glave, `l` dolžina |
| Šestrobna matica | ISO 4032, ASME B18.2.2 (inch) | `d`, `s`, `height` |
| Navadna podložka | ISO 7089 | `d1` notranji premer, `d2` zunanji premer, `h` debelina |
| Vzporedni zatič | ISO 2338 | `d`, `l` |
| Enoredni kroglični ležaj | ISO 15 | `d` vrtina, `D` zunanji premer, `B` širina |
| Vzporedno pero | DIN 6885-1, oblika A | `b` širina, `h` višina, `l` dolžina |

## Spremenite velikost

Vsaka velikost je konfiguracija (glejte [Konfiguracije in tabele zasnove](topic:design-tables)): odprite {{ui:Parametri}} in izberite drugo ali spremenite parameter, na primer `l` za daljši vijak, nato pa ga shranite kot svojo konfiguracijo.

## Kaj je modelirano

- Vijaki in šestrobi vijaki: šestrobna glava in navadno steblo. Matice: šestrobo telo z luknjo nazivne velikosti navoja. Navoji niso modelirani; dodajte jih z {{ui:Navoj}}, če jih potrebujete (glejte [Navoji](topic:threads)).
- Zatiči: navaden valj; robni posnetki so izpuščeni.
- Ležaji: samo zunanji ovoj (obroč vrtine, zunanji premer in širina), kar potrebujete za njegovo postavitev.
- Pera: pero z zaokroženim koncem.

Material dela je jeklo, zato plošča mase prikaže njegovo težo. Zobnikov tu še ni: PartCraft nima značilke zob, disk pa ni zobnik. CadCraft riše zobnike po risarski konvenciji, knjižnica pa jih ima kot risbe.
