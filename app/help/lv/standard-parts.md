---
title: Standarta detaļas atvēršana
summary: Sāciet detaļu no bultskrūves, skrūves, uzgriežņa, paplāksnes, tapas, gultņa vai atslēgas, kas izmērīta pēc tās standarta, ar katru standarta tabulas izmēru kā konfigurāciju.
keywords: standarta detaļa, standarta detaļas, bultskrūve, skrūve, sešstūris, uzgrieznis, paplāksne, tapa, dēlītis, gultnis, lodīšu gultnis, atslēga, paralēlā atslēga, stiprinājums, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, veidne, bibliotēka
from: b9e2811f
---

PartCraft atver izplatītas mehāniskās detaļas gatavas: izmēri nāk no standartu tabulām, un katrs tabulas izmērs ir konfigurācija, uz kuru varat pārslēgties.

## Atvērt vienu

1. Noklikšķiniet {{ui:Standarta detaļa}} grupā Fails.
2. Laukā {{ui:Detaļa}} izvēlieties veidu, piemēram, {{ui:Sešstūra galvas skrūve (ISO 4017)}}.
3. Laukā {{ui:Formāts}} izvēlieties izmēru, piemēram, `M10 × 40`.
4. Noklikšķiniet {{ui:Atvērt}}.

Detaļa atveras kā jauna, nesaglabāta detaļa. Saglabājiet to, lai to paturētu ({{key:Mod+S}}).

| Detaļa | Standarts | Parametri |
|---|---|---|
| Sešstūra galvas skrūve, sešstūra bultskrūve | ISO 4017, ISO 4014, ASME B18.2.1 (collās) | `d` vītnes izmērs, `s` platums starp plakanumiem, `k` galvas augstums, `l` garums |
| Sešstūra uzgrieznis | ISO 4032, ASME B18.2.2 (collās) | `d`, `s`, `height` |
| Vienkārša paplāksne | ISO 7089 | `d1` iekšējais, `d2` ārējais, `h` biezums |
| Paralēlā tapa | ISO 2338 | `d`, `l` |
| Dziļrievu lodīšu gultnis | ISO 15 | `d` urbums, `D` ārējais, `B` platums |
| Paralēlā atslēga | DIN 6885-1, A forma | `b` platums, `h` augstums, `l` garums |

## Mainīt izmēru

Katrs izmērs ir konfigurācija (skatiet [Konfigurācijas un projektēšanas tabulas](topic:design-tables)): atveriet {{ui:Parametri}} un izvēlieties citu, vai mainiet parametru, piemēram, `l` garākai skrūvei, un saglabājiet to kā savu konfigurāciju.

## Kas ir modelēts

- Skrūves un bultskrūves: sešstūra galva un vienkāršs kāts. Uzgrieži: sešstūris ar caurumu, kura izmērs ir vītnes nominālais izmērs. Vītnes netiek modelētas; pievienojiet vītni ar {{ui:Vītne}}, ja tā jums nepieciešama (skatiet [Vītnes](topic:threads)).
- Tapas: vienkāršs cilindrs; gala nošķelumi nav iekļauti.
- Gultņi: tikai ārējā apvalka forma (gredzens ar urbumu, ārējais diametrs un platums), kas nepieciešams, lai to novietotu.
- Atslēgas: atslēga ar apaļu galu.

Detaļas materiāls ir tērauds, tāpēc masas panelis rāda tās svaru. Zobrati šeit vēl nav: PartCraft nav zobu elementa, un disks nav zobrats. CadCraft zobratus zīmē pēc rasējuma konvencijas, un bibliotēkā tie ir kā rasējumi.
