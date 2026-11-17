---
title: Skices elementu pievienošana, ierakstot koordinātes
summary: Izmantojiet lauku Pievienot pēc koordinātēm skices panelī, lai tikai ar tastatūru novietotu līnijas, centrālās līnijas, taisnstūrus, riņķus un punktus precīzās pozīcijās.
keywords: koordinātes, ierakstīta ievade, ievade ar tastatūru, skaitliskā ievade, precīza pozīcija, x y, absolūtās koordinātes, pieejamība, bez peles
from: 5e6c1656
---

Kad skaitļi ir zināmi, tos ierakstīt ir ātrāk nekā noklikšķināt un dimensionēt. **Pievienot pēc koordinātēm** atrodas labajā panelī, kad ir atvērta skice. Ar to var veidot skici arī bez rādītāja.

Koordinātes ir milimetros, skices pašas asīs: x pa labi un y uz augšu, skatoties uz skici, ar (0, 0) izcelsmē (sarkanais aplis ar krustiņu).

## Formas pievienošana

1. Atveriet skici (skatiet [Uzzīmējiet savu pirmo skici](topic:sketch-basics)).
2. Labajā panelī ritiniet līdz **Pievienot pēc koordinātēm**.
3. Izvēlieties formu sarakstā **Pievienot**: Līnija, Centrālā līnija, Taisnstūris, Riņķis vai Punkts.
4. Aizpildiet lodziņus:

| Forma | Lodziņi |
|---|---|
| Līnija | **No x, y** un **Līdz x, y** |
| Centrālā līnija | **No x, y** un **Līdz x, y** |
| Taisnstūris | **Stūris x, y** un **Pretējais stūris x, y** |
| Riņķis | **Centrs x, y** un **Rādiuss** |
| Punkts | **Vieta x, y** |

5. Izvēlieties {{ui:Pievienot}} vai nospiediet {{key:Enter}} jebkurā lodziņā.

Forma parādās, un statusa joslā rakstīts, piemēram, "Pievienots taisnstūris." Lodziņi iztukšojas, gatavi nākamajai formai. Katrs pievienojums ir viens atsaukšanas solis.

Ierakstiet pāri kā divus skaitļus, atdalītus ar komatu vai atstarpi: `0, 0`, `25 -10` vai `12.5,40`. Negatīvi skaitļi un decimāldaļas ir atļauti. Rādiusam jābūt lielākam par nulli. Ja kaut kas nav skaitlis, statusa joslā parādās: 'Ievadiet koordinātes kā "x, y" un rādiusu, kas lielāks par nulli.'

## Piemērs: plāksnes kontūra ar slotu, ierakstīta

1. Atveriet skici uz **Front plane**.
2. **Pievienot**: Taisnstūris. **Stūris x, y**: `-50, -30`. **Pretējais stūris x, y**: `50, 30`. {{key:Enter}}.
3. **Pievienot**: Riņķis. **Centrs x, y**: `-30, 0`. **Rādiuss**: `5`. {{key:Enter}}.
4. **Centrs x, y**: `30, 0`. **Rādiuss**: `5`. {{key:Enter}}.
5. Izvēlieties {{ui:Iziet no skices}}, tad {{ui:Izvilkt}}: 100 × 60 plāksne ar diviem 10 mm caurumiem.

## Ierakstītā ģeometrija ir novietota, bet nav nostiprināta

Ierakstītās koordinātes novieto ģeometriju pareizajā vietā, bet tās **nav sakarības**. Formas paliek zilas (nepilnīgi definētas) un var pārvietoties, ja tās velkat vai mainat citu izmēru:

- ierakstīts taisnstūris saņem savus stūra, horizontālās un vertikālās sakarības kā uzzīmēts, bet nekas to nesaista ar izcelsmi;
- ierakstītai līnijai nav horizontālas vai vertikālas sakarības, pat ja ierakstījāt līdzenu līniju;
- ierakstīta riņķa centrs ir brīvs.

Lai skice būtu pilnībā definēta, pēc tam pievienojiet izmērus un sakarības (skatiet [Pilnībā definējiet skici](topic:relations-dimensions)). Piemēram, atlasiet taisnstūra stūri un izcelsmi un izvēlieties {{ui:• Sakrītība}}, vai dimensionējiet riņķu centrus no izcelsmes.

:::note
Bez rādītāja var tikt tik tālu: pārvietojieties uz plaknes rindu vēsturē ar {{key:Tab}} un bultiņu taustiņiem, nospiediet {{key:Enter}}, lai to atlasītu, nospiediet {{key:S}}, lai skicētu, pievienojiet formas šeit un sasniedziet **Rediģēt** blakus katram izmēram un {{ui:Iziet no skices}} ar {{key:Tab}}. Ģeometrijas atlasei, tātad arī sakarību vai jaunu izmēru pievienošanai, šajā versijā joprojām vajadzīgs klikšķis vai pieskiens.
:::

## Ierobežojumi

- Lokus pagaidām nevar ierakstīt. Zīmējiet tos ar Loka rīku vai ierakstiet riņķi un izmantojiet sakarības.
- Šajā lodziņā nav relatīvo koordinātu (no pēdējā punkta) vai polāro koordinātu (garums un leņķis).
- Ierakstītā ģeometrija nepiesaistās esošiem punktiem. Ierakstiet tādas pašas koordinātes kā esošam punktam un pēc tam pievienojiet {{ui:• Sakrītība}} sakarību starp tiem, ja tiem jāpaliek savienotiem.
