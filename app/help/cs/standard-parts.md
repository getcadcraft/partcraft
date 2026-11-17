---
title: Otevření normalizovaného dílu
summary: Začněte díl ze šroubu, matice, podložky, kolíku, ložiska nebo pera rozměřeného podle jeho normy, přičemž každý rozměr z tabulky normy je konfigurace.
keywords: normalizovaný díl, normalizované díly, šroub, šestihran, matice, podložka, kolík, čep, ložisko, kuličkové ložisko, pero, paralelní pero, spojovací materiál, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, šablona, knihovna
from: b9e2811f
---

PartCraft otevírá běžné strojní díly hotové: rozměry pocházejí z tabulek norem a každý rozměr v tabulce je konfigurace, na kterou můžete přepnout.

## Otevření dílu

1. Klikněte na {{ui:Normalizovaný díl}} ve skupině Soubor.
2. V {{ui:Díl}} zvolte druh, například {{ui:Šroub se šestihrannou hlavou (ISO 4017)}}.
3. V {{ui:Formát}} zvolte velikost, například `M10 × 40`.
4. Klikněte na {{ui:Otevřít}}.

Díl se otevře jako nový, neuložený díl. Uložte jej, abyste si jej ponechali ({{key:Mod+S}}).

| Díl | Norma | Parametry |
|---|---|---|
| Šroub se šestihrannou hlavou, šestihranný šroub | ISO 4017, ISO 4014, ASME B18.2.1 (palce) | `d` velikost závitu, `s` vzdálenost mezi protilehlými stranami, `k` výška hlavy, `l` délka |
| Šestihranná matice | ISO 4032, ASME B18.2.2 (palce) | `d`, `s`, `height` |
| Plochá podložka | ISO 7089 | `d1` vnitřní, `d2` vnější, `h` tloušťka |
| Válcový kolík | ISO 2338 | `d`, `l` |
| Radiální kuličkové ložisko | ISO 15 | `d` vnitřní průměr, `D` vnější průměr, `B` šířka |
| Paralelní pero | DIN 6885-1, tvar A | `b` šířka, `h` výška, `l` délka |

## Změna velikosti

Každá velikost je konfigurace (viz [Konfigurace a tabulky návrhu](topic:design-tables)): otevřete {{ui:Parametry}} a vyberte jinou, nebo změňte parametr, například `l` pro delší šroub, a uložte jej jako vlastní konfiguraci.

## Co se modeluje

- Šrouby a šrouby: šestihranná hlava a hladký dřík. Matice: šestihran s dírou jmenovité velikosti závitu. Závity se nemodelují; přidejte je pomocí {{ui:Závit}}, pokud je potřebujete (viz [Závity](topic:threads)).
- Kolíky: prostý válec; zkosení konců se vynechává.
- Ložiska: pouze vnější obrys (mezikruží s vnitřním průměrem, vnější průměr a šířku), což potřebujete k jeho umístění.
- Pera: pero s kulatými konci.

Materiálem dílu je ocel, takže panel hmotnosti ukazuje jeho hmotnost. Ozubená kola zde zatím nejsou: PartCraft nemá prvek pro zuby a kotouč není ozubené kolo. CadCraft kreslí ozubená kola podle výkresové konvence a knihovna je má jako výkresy.
