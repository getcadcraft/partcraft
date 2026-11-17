---
title: Otvorenie normalizovanej súčiastky
summary: Začnite súčiastku zo skrutky, matice, podložky, kolíka, ložiska alebo pera s rozmermi podľa normy, pričom každá veľkosť z tabuľky normy je konfigurácia.
keywords: normalizovaná súčiastka, skrutka, šróbik, matica, podložka, kolík, ložisko, guľkové ložisko, pero, rovnobežné pero, spojovací prvok, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, šablóna, knižnica
from: b9e2811f
---

PartCraft otvorí bežné strojové súčiastky hotové: rozmery pochádzajú z tabuliek noriem a každá veľkosť v tabuľke je konfigurácia, na ktorú môžete prepnúť.

## Otvorenie jednej

1. Kliknite na {{ui:Normalizovaná súčiastka}} v skupine Súbor.
2. V {{ui:Súčiastka}} zvoľte druh, napríklad {{ui:Skrutka so šesťhrannou hlavou (ISO 4017)}}.
3. V {{ui:Formát}} zvoľte veľkosť, napríklad `M10 × 40`.
4. Kliknite na {{ui:Otvoriť}}.

Súčiastka sa otvorí ako nová, neuložená súčiastka. Ak ju chcete zachovať, uložte ju ({{key:Mod+S}}).

| Súčiastka | Norma | Parametre |
|---|---|---|
| Skrutka so šesťhrannou hlavou, šesťhranný šróbik | ISO 4017, ISO 4014, ASME B18.2.1 (palce) | `d` veľkosť závitu, `s` vzdialenosť plôch, `k` výška hlavy, `l` dĺžka |
| Šesťhranná matica | ISO 4032, ASME B18.2.2 (palce) | `d`, `s`, `height` |
| Plochá podložka | ISO 7089 | `d1` vnútorný, `d2` vonkajší, `h` hrúbka |
| Valcový kolík | ISO 2338 | `d`, `l` |
| Radiálne guľkové ložisko | ISO 15 | `d` vnútorný priemer, `D` vonkajší priemer, `B` šírka |
| Rovnobežné pero | DIN 6885-1, tvar A | `b` šírka, `h` výška, `l` dĺžka |

## Zmena veľkosti

Každá veľkosť je konfigurácia (pozrite [Konfigurácie a tabuľky návrhu](topic:design-tables)): otvorte {{ui:Parametre}} a vyberte inú, alebo zmeňte parameter, napríklad `l` pre dlhšiu skrutku, a uložte ju ako svoju vlastnú konfiguráciu.

## Čo sa modeluje

- Skrutky a šróby: šesťhranná hlava a hladký driek. Matice: šesťhran s otvorom menovitej veľkosti závitu. Závity sa nemodelujú; ak ich potrebujete, pridajte ich pomocou {{ui:Závit}} (pozrite [Závity](topic:threads)).
- Kolíky: hladký valec; skosenia koncov sa vynechávajú.
- Ložiská: iba vonkajší obrys (medzikružie vnútorného priemeru, vonkajší priemer a šírka), čo potrebujete na umiestnenie ložiska.
- Perá: pero s okrúhlymi koncami.

Materiál súčiastky je oceľ, takže panel hmotnosti zobrazuje jej hmotnosť. Ozubené kolesá tu zatiaľ nie sú: PartCraft nemá prvok ozubenia a kotúč nie je ozubené koleso. CadCraft kreslí ozubené kolesá podľa výkresovej konvencie a knižnica ich má ako výkresy.
