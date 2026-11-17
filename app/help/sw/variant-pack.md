---
title: Tengeneza pakiti ya lahaja kutoka usanidi wako
summary: Jenga kila usanidi wa sehemu, au machache uliyochagua, kwa mara moja kama STEP, IFC na DWG pamoja na picha ya kila moja, jedwali la vigezo vyao, na sehemu kama kipengele kimoja cha maktaba chenye lahaja zake.
keywords: pakiti ya lahaja, lahaja, usanidi, familia ya sehemu, hamisha kwa makundi, kila ukubwa, step, ifc, dwg, hakiki, jedwali, csv, json, maktaba, kisanidi cha bidhaa, mfumo wa bidhaa, katalogi, item json
from: 9a6db99f
---

## Utakachofanya

Kabidhi **kila ukubwa wa sehemu kwa mara moja**: faili moja la STEP, IFC na DWG pamoja na picha kwa kila usanidi, jedwali linaloonyesha kila moja ni nini, na kipengele cha maktaba kinachoweka zote kwenye ukurasa mmoja.

Kwanza unahitaji sehemu yenye **usanidi** (angalia [Usanidi na jedwali za muundo](topic:design-tables)). Usanidi unaozima kipengele, kama bamba lenye na lisilo na matundu, unakuwa lahaja yake yenyewe.

## Hatua

1. Fungua sehemu. Kwenye kichupo cha {{ui:Vigezo}}, tafuta **Usanidi**.
2. Bonyeza {{ui:Pakiti ya lahaja…}}.
3. Weka alama kwenye usanidi wa kujenga (zote zimewekwa alama) na faili za kuandika: STEP, IFC, DWG, hakiki, na kipengele cha maktaba.
4. Bonyeza {{ui:Tengeneza pakiti}}. Mstari wa hali unahesabu lahaja zinavyojengwa; sehemu yako haibadiliki.
5. Zipu moja inapakuliwa: `<part> variants.zip`.

## Kilichomo kwenye zipu

| Faili | Ni nini |
|---|---|
| `<name>.step` | Usanidi kama kigumu cha STEP. |
| `<name>.ifc` | IFC4, kipengele kimoja chenye mwili uliojengwa na vigezo vya sehemu kama sifa; thamani ni ya usanidi huo wenyewe. |
| `<name>.dwg` | Mionekano ya mbele, juu, kulia na isometriki kama karatasi ya mchoro kwa ukubwa kamili. |
| `<name>.svg` | Picha ya mistari ya isometriki yake. |
| `variants.csv`, `variants.json` | Jedwali la vigezo: kitambulisho, jina na thamani ya kila kigezo kwa kila lahaja, vipengele inavyozima, faili zake, ujazo wake na ukubwa wake. |
| `<part>.item.json` | Sehemu kama kipengele kimoja cha maktaba chenye lahaja zake (angalia hapa chini). |
| `README.txt` | Kilichotengenezwa, maelezo haya hapa chini, na chochote ambacho hakikujengwa. |

Faili hupewa majina kwa usanidi. Usanidi usiojengeka (kipengele kisichoweza kutengenezwa kwa thamani hizo) huachwa nje ya faili na jedwali, na huorodheshwa kwenye README na kwenye ujumbe baada ya zipu kuhifadhiwa; zingine bado zinaandikwa.

## Vya kujua

- **STEP** ni sahihi kikiwa kiini sahihi kimewashwa kwenye toleo lako. Bila hicho STEP ina pembe (pembetatu bapa), na README inasema hivyo.
- **DWG** ni karatasi ya mchoro, si modeli ya 3D. Mistari yake inatokana na mesh, kwa hiyo ukingo uliopinda ni mistari mifupi mingi.
- **Kipengele cha maktaba** kina mwili mmoja na alama moja ya msingi kwa kila lahaja, katika shoka za maktaba yenyewe: Z juu, mbele ikielekea −Y, na sehemu ya kuingizia katikati ya nyuma chini. Mpango ni mstatili wa mpaka wa kila lahaja. Kipengele kinakomewa 8 MB, kwa hiyo lahaja nzito sana inakuwa kisanduku cha ukubwa wake na README inasema ni ngapi.
- Usanidi unaotumika wa sehemu ndio lahaja chaguo-msingi ya kipengele.
- Milango (sehemu za kuunganisha mabomba na mifereji) haiwekwi kutoka PartCraft.

## Weka lahaja kwenye ukurasa wa maktaba

Pakia `<part>.item.json` kwenye **Maktaba › Pakia** kwenye tovuti. Chagua kategoria yake, leseni na mstari wako wa sifa, nayo inakuwa kipengele cha Maktaba chenye lahaja zake. Katika BimCraft, kukiweka kunauliza lahaja gani, na Badilisha inatoa nyingine. Ukurasa ambapo wageni huchagua chaguzi, kuona 3D na kupakua lahaja ni **hakiki ya wafanyakazi** kwa sasa: haujafunguliwa kwa umma bado.

## Kutoka mstari wa amri

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` inataja usanidi, `--formats` ni yoyote kati ya `step`, `ifc`, `dwg`, `preview`; `--no-item` huacha kipengele cha maktaba nje. Huandika folda, zipu au zote mbili na hutoka kwa msimbo 1 lahaja isipoweza kujengwa. Angalia [Scripts na mstari wa amri](topic:scripts-and-cli).
