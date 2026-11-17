---
title: Tīkla kodols
summary: Šajā PartCraft versijā katru detaļu veido ar tīkla kodolu, kas darbojas jūsu pārlūkprogrammā. Kas tas nozīmē apaļām formām, tilpumiem un failiem, kā pārliecināties, ka tas darbojas, un kuras funkcijas gaida precīzu kodolu.
keywords: kodols, tīkls, manifold, precīzs, b-rep, facetēts, līknes, opencascade, occt, noapaļojums prasa precīzu, nav izveidots, bezsaistē, webassembly
from: f931645c
---

Geometrijas kodols ir dzinējs, kas pārvērš jūsu vēsturi cietā ķermenī. Šai PartCraft versijai ir viens: **tīkla kodols** (manifold-3d). Tas darbojas jūsu datorā kā neliela WebAssembly programma un ir gatavs mirkli pēc lietotnes atvēršanas. Neviens detaļas dati netiek nosūtīti nekur.

| | Tīkla kodols |
|---|---|
| Apaļas formas | Plakanas facetes. **Līknes** detaļu panelī nosaka, cik smalkas |
| Tilpumi un laukumi | No facetētā ķermeņa, nedaudz zemāki apaļām detaļām |
| Skices, izvilkums, izgriezums, rotācija, caurumi, masīvi, spoguļošana, atsauces plaknes | Jā |
| Noapaļojums un nošķelšana | Uz taisnām malām starp plakanām virsmām; savienojumi, kas saskaras, tiek ieķīlēti |
| Čaula un Melnraksts | Čaula atver plakanas virsmas (precīzs sienas biezums); Melnraksts sasvērj plakanas virsmas |
| Eksporti | STL, 3MF, STEP (precīzs: apaļas virsmas tiek rakstītas uz to patiesajām virsmām; vai facetēts), rasējuma PDF un DXF |
| Rasējuma skati | Zīmēti no facetēm, ieskaitot griezuma skatus |
| Virsmas un malas | Nosauktas un atpazītas pēc veida (plakana, cilindrs, konuss, sfēra, tors; taisna, aplis), ņemtas no skicēm: darba vietas Simulācija, Ģeneratīvā un Ražošana, Mērīt, atlase un caurumu tabula tās izmanto |

Statusa joslas labajā galā esošais čips rāda **Tīkla kodols**, kamēr tas veido jūsu detaļu.

## Kas gaida precīzu kodolu

Precīzs (B-rep) kodols saglabā patiesus riņķus, cilindrus un konusus, kā arī gludus noapaļojumus uz jebkuras malas, pārvilkumus, lokus, virsmas, lokšņu metālu, ribas, vairākus ķermeņus un STEP importu ar saglabātām izliektām virsmām. (Precīzs STEP eksports nav atkarīgs no tā: tīkla kodols zina katras virsmas patieso formu no skices, un eksports to raksta.) Iepriekšējās laboratorijas versijās PartCraft šim nolūkam izmantoja OpenCascade. Tā licence (LGPL) nav piemērota šim laidienam, kurā katra lietotne ir Apache-2.0 un izmanto tikai atļauti licencētas bibliotēkas, tāpēc tā nav iekļauta. Datums nav noteikts.

Līdz tam šīs funkcijas, kad tās izvēlaties, saka **Vēl nav izveidots**: statusa josla norāda iemeslu, un to pogu rīksavienojumi beidzas ar „vēl nav izveidots (nepieciešams precīzs kodols)”. [Kas vēl nav izveidots](topic:not-built-yet) uzskaita katru no tām un to, ko darīt tā vietā.

Detaļa, kas tika izveidota ar šīm funkcijām iepriekšējā versijā, joprojām atveras. Šīs funkcijas paliek vēsturē atzīmētas kā nav izveidotas (uzvelciet kursoru, lai uzzinātu iemeslu), pārējā detaļa tiek veidota, un saglabāšana tās nemaina.

## Apaļas virsmas un Līknes

Tīkla kodols riņķi attēlo kā daudzstūri. **Līknes** detaļu panelī nosaka, cik malu ir pilnam riņķim; vairāk malu izskatās gludāk un mēra tuvāk patiesajai vērtībai, bet veidošana aizņem ilgāk. Tilpumi, laukumi un attālumi no {{ui:Mērīt}} ir no facetētā ķermeņa: caurumam vai izvirzījumam tie ir nedaudz mazāki nekā apaļai formai.

## Tiešsaistē un bezsaistē

Tīkla kodols ir daļa no lietotnes pašas lejupielādes. Lai strādātu bez savienojuma, saglabājiet PartCraft bezsaistes lietošanai, kamēr esat tiešsaistē: lietotnes joslā izvēlieties {{ui:Saglabāt bezsaistei}} un uzgaidiet, līdz parādās **Gatavs darbam bezsaistē**. Sīkāk: [Darbs bezsaistē](common:offline).
