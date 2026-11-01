---
title: Tīkla kodols
summary: Šī PartCraft versija veido katru detaļu ar tīkla kodolu, kas darbojas jūsu pārlūkprogrammā. Ko tas nozīmē apaļām virsmām, tilpumiem un failiem, kā pārliecināties, ka tas darbojas, un kuras funkcijas gaida precīzu kodolu.
keywords: kodols, tīkls, daudzkolektors, precīzs, b-rep, facetēts, līknes, opencascade, occt, noapaļojums prasa precīzu, nav izveidots, bezsaiste, webassembly
from: 68d32d16
---

Ģeometrijas kodols ir dzinējs, kas pārvērš jūsu vēsturi cietā ķermenī. Šai PartCraft versijai ir viens: **tīkla kodols** (manifold-3d). Tas darbojas jūsu datorā kā neliela WebAssembly programma un ir gatavs īsi pēc lietotnes atvēršanas. Nekas par jūsu detaļu nekur netiek sūtīts.

| | Tīkla kodols |
|---|---|
| Apaļas formas | Plakanas facetes. **Līknes** detaļas panelī nosaka, cik smalkas |
| Tilpumi un laukumi | No facetētā cietā ķermeņa, nedaudz zemāki apaļām detaļām |
| Skices, izvilkšana, izgriešana, rotēšana, caurumi, raksti, spoguļošana, atsauces plaknes | Jā |
| Noapaļojums un nošķelšana | Taisnās malās starp plakanām virsmām; savienotie noapaļojumi tiek nogriezti zobenveidīgi |
| Čaula un slīpums | Čaula atver plakanas virsmas (precīzs sienas biezums); slīpums sašķeļ plakanas virsmas |
| Eksporti | STL, 3MF, STEP (facetēts), rasējuma PDF un DXF |
| Rasējuma skati | Zīmēti no facetēm, ieskaitot griezuma skatus |
| Virsmas un malas | Nosauktas un atpazītas pēc veida (plakana, cilindrs, konuss, sfēra, tors; taisna, aplis), ņemtas no skicēm: darbvides Simulation, Generative un Manufacture, Measure, atlase un caurumu tabula tās izmanto |

Čips statusa joslas labajā galā rāda **Tīkla kodols**, kamēr tas veido jūsu detaļu.

## Kas gaida precīzu kodolu

Precīzs (B-rep) kodols saglabā patiesus apļus, cilindrus un konusus, kā arī vienmērīgus noapaļojumus uz jebkuras malas, izliektās formas, loftus, virsmas, lokšņu metālu, ribas, vairākus ķermeņus, STEP importu un precīzu STEP eksportu. Iepriekšējās laboratorijas PartCraft versijās šim nolūkam tika izmantots OpenCascade. Tā licence (LGPL) neatbilst šai izlaidei, kur katra lietotne ir Apache-2.0 un izmanto tikai ar atļauju izplatītas bibliotēkas, tāpēc tā nav iekļauta. Datums nav noteikts.

Līdz tam šīs funkcijas, kad tās izvēlaties, rāda **Vēl nav izveidots**: statusa josla norāda iemeslu, un to pogu rīkpadomi beidzas ar "vēl nav izveidots (nepieciešams precīzs kodols)". [Kas vēl nav izveidots](topic:not-built-yet) uzskaita katru no tām un to, ko darīt tās vietā.

Detaļa, kas izveidota ar tām iepriekšējā versijā, joprojām atveras. Šīs funkcijas paliek vēsturē atzīmētas kā neizveidotas (ar peles virzīšanu virs tām redzams iemesls), pārējā detaļa tiek izveidota, un saglabāšana tās atstāj nemainītas.

## Apaļas virsmas un Līknes

Tīkla kodols apli zīmē kā daudzstūri. **Līknes** detaļas panelī nosaka, cik malu ir pilnam aplim; jo vairāk malu, jo gludāks izskats un tuvāks patiesajai vērtībai, bet ilgāka izveide. Tilpumi, laukumi un attālumi no {{ui:Mērīt}} ir no šī facetētā cietā ķermeņa: caurumam vai izcilnim tie ir nedaudz mazāki nekā apaļai formai.

## Bezsaiste un tiešsaiste

Tīkla kodols ir daļa no lietotnes pašas lejupielādes. Lai strādātu bez savienojuma, saglabājiet PartCraft bezsaistes lietošanai, kamēr esat tiešsaistē: izvēlieties {{ui:Saglabāt bezsaistei}} lietotnes joslā un pagaidiet, līdz parādās **Gatavs darbam bezsaistē**. Sīkāk: [Darbs bezsaistē](common:offline).
