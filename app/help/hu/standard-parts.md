---
title: Szabványos alkatrész megnyitása
summary: Alkatrész indítása csavarból, facsavarból, anyából, alátétből, csapból, csapágyból vagy ékből, a szabvány szerinti méretekkel, a szabvány táblázatának minden mérete egy konfigurációként.
keywords: szabványos alkatrész, szabványos alkatrészek, csavar, facsavar, hatlapfejű, anya, alátét, csap, tüske, csapágy, golyóscsapágy, ék, párhuzamos ék, rögzítőelem, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, sablon, könyvtár
from: b9e2811f
---

A PartCraft kész formában nyit meg gyakori gépészeti alkatrészeket: a méretek a szabványok táblázataiból származnak, és a táblázat minden mérete egy konfiguráció, amelyre átválthat.

## Megnyitás

1. Kattintson a {{ui:Szabványalkatrész}} gombra a Fájl csoportban.
2. A {{ui:Alkatrész}} mezőben válassza ki a típust, például a {{ui:Hatlapfejű csavar (ISO 4017)}} elemet.
3. A {{ui:Méret}} mezőben válassza ki a méretet, például `M10 × 40`.
4. Kattintson a {{ui:Megnyitás}} gombra.

Az alkatrész új, nem mentett alkatrészként nyílik meg. A megtartáshoz mentse ({{key:Mod+S}}).

| Alkatrész | Szabvány | Paraméterek |
|---|---|---|
| Hatlapfejű csavar, hatlapú csavar | ISO 4017, ISO 4014, ASME B18.2.1 (hüvelyk) | `d` menetméret, `s` kulcsnyílás, `k` fejmagasság, `l` hossz |
| Hatlapú anya | ISO 4032, ASME B18.2.2 (hüvelyk) | `d`, `s`, `height` |
| Sima alátét | ISO 7089 | `d1` belső, `d2` külső, `h` vastagság |
| Párhuzamos tüske | ISO 2338 | `d`, `l` |
| Mély hornyú golyóscsapágy | ISO 15 | `d` furat, `D` külső átmérő, `B` szélesség |
| Párhuzamos ék | DIN 6885-1, A alak | `b` szélesség, `h` magasság, `l` hossz |

## A méret módosítása

Minden méret egy konfiguráció (lásd: [Konfigurációk és tervázási táblázatok](topic:design-tables)): nyissa meg a {{ui:Paraméterek}} részt, és válasszon egy másikat, vagy módosítson egy paramétert, például a hosszabb csavarhoz az `l`-t, majd mentse saját konfigurációként.

## Mit modellez

- Csavarok és hatlapú csavarok: a hatlapfej és sima szár. Anyák: a hatlap a menet névleges méretű furatával. A menetek nincsenek modellezve; szükség esetén a {{ui:Menet}} elemmel adjon hozzá (lásd: [Menetek](topic:threads)).
- Tüskék: sima henger; a végek letörései kimaradnak.
- Csapágyak: csak a külső befoglaló test (a furat gyűrűje, a külső átmérő és a szélesség), ami az elhelyezéshez szükséges.
- Ékek: a kerekvégű ék.

Az alkatrész anyaga acél, így a tömegpanel megmutatja a tömegét. Fogaskerekek még nincsenek: a PartCraftban nincs fogazat-jellemző, a korong pedig nem fogaskerék. A CadCraft a fogaskerekeket a rajzolási konvenció szerint rajzolja, a könyvtárban pedig rajzként találhatók meg.
