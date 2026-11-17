---
title: Hap një pjesë standarde
summary: Fillo një pjesë nga një bulon, vidë, arrë, rondelë, kunj, rulment ose çelës, i dimensionuar sipas standardit të tij, me çdo madhësi të tabelës së standardit si konfigurim.
keywords: pjesë standarde, pjesë standarde, bulon, vidë, gjashtëkëndësh, arrë, rondelë, kunj, kunj me bosht, rulment, çelës, elementë lidhës, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, shabllon, bibliotekë
from: b9e2811f
---

PartCraft hap pjesë të zakonshme mekanike gati të përgatitura: përmasat vijnë nga tabelat e standardeve, dhe çdo madhësi në tabelë është një konfigurim ndërmjet të cilave mund të ndërrosh.

## Hap një

1. Kliko {{ui:Pjesë standarde}} në grupin {{ui:Skedari}}.
2. Te {{ui:Pjesa}}, zgjidh llojin, për shembull {{ui:Vidë me kokë gjashtëkëndore (ISO 4017)}}.
3. Te {{ui:Madhësia}}, zgjidh madhësinë, për shembull `M10 × 40`.
4. Kliko {{ui:Hap}}.

Pjesa hapet si një pjesë e re, e pa ruajtur. Ruaje për ta mbajtur ({{key:Mod+S}}).

| Pjesa | Standardi | Parametrat |
|---|---|---|
| Vidë me kokë gjashtëkëndore, bulon gjashtëkëndor | ISO 4017, ISO 4014, ASME B18.2.1 (inç) | `d` madhësia e filetit, `s` gjerësia mes faqeve, `k` lartësia e kokës, `l` gjatësia |
| Arrë gjashtëkëndore | ISO 4032, ASME B18.2.2 (inç) | `d`, `s`, `height` |
| Rondelë e thjeshtë | ISO 7089 | `d1` brenda, `d2` jashtë, `h` trashësia |
| Kunj paralel | ISO 2338 | `d`, `l` |
| Rulment me top me brazdë të thellë | ISO 15 | `d` vrima, `D` jashtë, `B` gjerësia |
| Çelës paralel | DIN 6885-1, formë A | `b` gjerësia, `h` lartësia, `l` gjatësia |

## Ndrysho madhësinë

Çdo madhësi është një konfigurim (shih [Konfigurimet dhe tabelat e projektimit](topic:design-tables)): hap {{ui:Parametrat}} dhe zgjidh një tjetër, ose ndrysho një parametër, si `l` për një vidë më të gjatë, dhe ruaje si një konfigurim tënd.

## Çfarë modelohet

- Vidat dhe bulonat: koka gjashtëkëndore dhe trupi i thjeshtë. Arrat: gjashtëkëndi me një vrimë të madhësisë nominale të filetit. Filetet nuk modelohen; shto një me {{ui:Filetim}} nëse ta duhet (shih [Filetat](topic:threads)).
- Kunjat: një cilindër i thjeshtë; pjerrësimet e skajeve lihen jashtë.
- Rulmentët: vetëm mbylljen e jashtme (një unazë me vrimën, diametrin e jashtëm dhe gjerësinë), që është ajo që të duhet për ta vendosur.
- Çelësat: çelësi me skaj të rrumbullakosur.

Materiali i pjesës është çelik, kështu paneli i masës tregon peshën e saj. Ingranazhet nuk janë këtu ende: PartCraft nuk ka veçori dhëmbi, dhe një disk nuk është një ingranazh. CadCraft vizaton ingranazhet sipas konventës së vizatimit, dhe biblioteka i ka ato si vizatime.
