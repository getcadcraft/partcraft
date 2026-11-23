---
title: Rāmja pārbaude
summary: Paņemiet metāla konstrukcijas elementus no metinātas konstrukcijas (kāpnes, statnis, cauruļu un profilu rāmis), novietojiet iekārtu uz kājām un balstus uz grīdas un redziet, cik liela daļa katra elementa un katras metinājuma tiek izmantota pēc AISC 360-16 vai EN 1993. Palīglīdzeklis, kamēr inženieris to nav pārskatījis.
keywords: rāmis, metinātā konstrukcija, kāpnes, sūkņu kāpnes, konstrukcijas elements, metinājums, metinājumi, pārbaude, AISC 360, EN 1993, izmantojums, atbalsts, balsts, iekārta, slodze, dobais profils, HSS, RHS, CHS, inženieris
from: 032e34ee
---

{{ui:Pārbaudīt šo rāmi}} ņem metinātās konstrukcijas taisnos metāla elementus, veido no tiem rāmi, atrisina to zem tērauda un uz tā novietotās iekārtas svara un pārbauda katru elementu un katru metinājumu, kur elementi satiekas. Viena palaišana, viena tabula.

:::warning
Tas ir **palīglīdzeklis, kamēr inženieris to nav pārskatījis**. Tas nav apliecinājums, un izturēšanās nav dizains. Tas izmanto elementu centra līnijas, kā tās zīmētas, uztver katru savienojumu kā metinātu visā šķērsgriezumā, ņem metinājuma malu no profila sienas (līdz 8 mm), ja nav iestatīts citādi, un nepārbauda bultskrūves, plāksnes, pamatplāksnes, enkurus, balstīšanos, bloķēšanas bīdi, nogurumu vai celšanu.
:::

## Palaist

1. Zīmējiet elementus ar {{ui:Konstrukcijas elements}} (šķērsgriezumi nāk no šķērsgriezumu tabulas).
2. Atveriet {{ui:Skati}} › {{ui:Pārbaudīt šo rāmi}}. Norādiet, kur rāmis stāv (**balsts** pie katras kājas: šarnīrveida, stingrs vai rullītis; {{ui:Šarnīru balsti pie kājām}} novieto vienu pie katra zemākā elementa gala), un to, kas uz tā atrodas (**iekārta**: masa, smaguma centrs, punkti, kur tā piestiprināta pie grīdas, un pēc izvēles horizontāls spiediens).
3. Izvēlieties normu: **ASCE 7 + AISC 360-16** vai **EN 1990 + EN 1993**. Iestatiet tērauda kategoriju un AISC gadījumā metinājuma materiāla izturību (482,6 MPa ir E70).
4. Nospiediet {{ui:Pārbaudīt}}. {{ui:Saglabāt pārskatu kā CSV}} ieraksta katru tabulu, ar pārskatīšanas nepieciešamības rindu pirmo.

Rāmis tiek nolasīts milimetros ar detaļas vertikālo asi uz augšu. Balsti un iekārtas punkti tiek ierakstīti kā x y z vienā un tajā pašā sistēmā, ar z kā augstumu.

Elementa gals, kas nonāk uz cita elementa vidus, to sadala tur, tāpat kā kāja vai punkts pie grīdas uz elementa līnijas. Svars tiek sadalīts pa piestiprināšanas punktiem kā stingram ķermenim; smaguma centrs ārpus kājām vai celšanas spēks pie kājas tiek pateikts, nekad netiek paslēpts.

## Ko iegūstat

- Visvairāk izmantotais vienums un to, vai kaut kas neizturēs. Vienumi, ko pārbaude nevar novērtēt (šķērsgriezums, kas nav tabulā, tērauds bez koeficienta normā), tiek uzskaitīti un nosaukti, nekad neuzskatīti par izturīgiem.
- Viena rinda katram elementam un katrai metinājumu grupai: cik daudz tiek izmantots, noteicošā pārbaude un klauzula, un slodzes kombinācija, kas noteica.
- Tās pašas tabulas pārskatā.

## Ko pārbauda

Dobie profili (RHS, SHS, CHS, caurule) un I profili tiek pārbaudīti stiepei, spiedei, liecei, bīdei un to mijiedarbībai; stūra metinājumi un pilnas iekļūšanas metinājumi – ar elastīgo vektoru metodi. Kompaktas sienas tiek pārbaudītas tikai lieces gadījumā, un tikai dobajiem profiliem; plānas sienas tiek minētas kā nepārbaudītas. Daži konstantes ir uzrakstītas no standartiem un vēl nav salīdzinātas ar drukātu eksemplāru; pārskats uzskaita katru avotu.

Skatiet [Rāmji no tērauda profiliem](topic:structural-members), lai zīmētu elementus un to griezuma sarakstu.
