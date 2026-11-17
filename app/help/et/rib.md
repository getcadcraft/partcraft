---
title: Ribid ja vahetükid
summary: Jäigesta detaili ribiga, mis on joonistatud ühe joonena: see täitub joonest seinteni kindla paksusega visandi tasandi üle, sinu valitud küljel.
keywords: ribi, vahetükk, tugisein, jäigendus, tugi, konsool, nurgatugi, õhuke sein, tugevda
from: 5c218881
---

:::note
**Selles versioonis veel ei ehitata.** Ribi vajab täpset geomeetriatuuma, mida see PartCraftin versioon ei oma: ta ehitab iga detaili võrgutuumaga. [Mida ei ehitata veel](topic:not-built-yet) ütleb, mida selle asemel teha. Ülejäänud lehekülg kirjeldab ribit nii, nagu see töötab täpse tuumaga.
:::

**Ribi** (või vahetükk) on õhuke sein, mis jäigendab detaili, näiteks kolmnurk L-konsooli nurgas. Joonistad ainult selle vaba serva: PartCraft täidab ruumi joone ja seinte vahel. Vaja on **täpset tuuma** (vt [Võrgutuum](topic:solid-kernels)).

## Lisa ribi

1. Tee tasand keskele kohta, kuhu ribi läheb (40 mm sügavale L-konsoolile tasand 20 mm ees oma visandist: vt [Abitasandid, teljed ja punktid](topic:reference-geometry)).
2. Visanda sellele **üks joon** seinast seinani — või mitu joont ots-otsa ribi kõverat serva jaoks. Joon võib jääda seintest lühikeseks: selle otsi viiakse edasi, kuni need kohtuvad seintega.
3. Vali visand ja vali {{ui:More}} › {{ui:Rib}}.

Ribi täidab joonest seinteni sel küljel, mis jääb detaili keskpunkti poole, nii et vahetükk asetub sisenurka. Kui see pool on avatud ja teine suletud, pöörab PartCraft selle sinu eest ümber ja ütleb seda.

## Sätted

- **Paksus (mm)** on ribi paksus üle visandi tasandi. Seda saab juhtida parameetriga.
- **Paksus** (selle all olev valik): **Keskendatud visandi tasandile**, **Tasandi ees** (mööda normaali) või **Tasandi taga**.
- **Pööra** täidab joone teise poole.

## Teated

- **Sellel küljel ei kohta ribi serv kunagi keha** — selle küljel ei sulgu miski: märgi või tühista **Pööra** või nihuta joont nii, et seinad seda piiraksid.
- **Ribi vajab ühte avatud joonte ahelat oma visandis** — visandis on suletud kuju, kaar või spline või read, mis ei ühine ots-otsa.
- **Ribi serv kulgeb seal keha sees** — joon asub tahkise sees; joonista see seinte vahelisse vabasse ruumi.
