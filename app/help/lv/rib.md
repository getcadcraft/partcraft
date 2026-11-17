---
title: Ribas un stūra balsti
summary: Stiprinājiet detaļu ar ribu, ko zīmējat kā vienu līniju: tā aizpilda telpu no līnijas līdz sienām, iestatītā biezumā pāri skices plaknei, jūsu izvēlētajā pusē.
keywords: riba, stūra balsts, siena, stiprinājums, balsts, stūra atbalsts, plāna siena, nostiprināt
from: 5c218881
---

:::note
**Šajā versijā vēl nav izveidots.** Ribai vajadzīgs precīzs ģeometrijas kodols, ko šai PartCraft versijai nav: tā veido visas detaļas ar tīkla kodolu. [Kas vēl nav izveidots](topic:not-built-yet) pasaka, ko darīt tā vietā. Pārējā šajā lapā aprakstīts, kā tā darbojas ar precīzu kodolu.
:::

**Riba** (vai stūra balsts) ir plāna siena, kas stiprina detaļu, piemēram, trīsstūris L stiprinājuma stūrī. Jūs zīmējat tikai tās brīvo malu: PartCraft aizpilda telpu starp šo līniju un sienām. Tai nepieciešams **precīzs kodols** (skatiet [Tīkla kodols](topic:solid-kernels)).

## Pievienot ribu

1. Izveidojiet plakni caur vietu, kur iet riba (L stiprinājumam, kas ir 40 dziļš, plakne 20 priekšā tā skicei: skatiet [Atsauces plaknes, asis un punkti](topic:reference-geometry)).
2. Uz tās uzskiciet **vienu līniju** no sienas līdz sienai, vai dažas līnijas galu galā, lai iegūtu izliektu ribas malu. Līnija var apstāties īsi no sienām: tās galus pagarina, līdz tie sasniedz sienas.
3. Atlasiet skici un izvēlieties {{ui:Vairāk}} › {{ui:Riba}}.

Riba aizpilda telpu no līnijas līdz sienām pusē uz detaļas vidu, tāpēc stūra balsts nonāk iekšējā stūrī. Ja šī puse ir atvērta un otra ir slēgta, PartCraft to apgriež un par to paziņo.

## Iestatījumi

- **Biezums (mm)** ir ribas biezums pāri skices plaknei. To var vadīt parametrs.
- **Biezums** (izvēle zem tā): **Centrēts uz skices plaknes**, **Priekšā plaknei** (pa tās normāli) vai **Aiz plaknes**.
- **Apgriezt** aizpilda otru līnijas pusi.

## Paziņojumi

- **Šajā pusē ribas mala nekad nesaskaras ar ķermeni** — nekas nenoslēdzas telpā šajā pusē: atzīmējiet vai noņemiet atzīmi **Apgriezt**, vai pārvietojiet līniju, lai sienas to ierobežotu.
- **Ribai vajag vienu atvērtu līniju ķēdi tās skicē** — skicē ir slēgta forma, loks vai splains, vai līnijas, kas nesavienojas gal pie gala.
- **Ribas mala šeit iet ķermeņa iekšienē** — līnija atrodas cietā ķermeņa iekšpusē; zīmējiet to atvērtajā telpā starp sienām.
