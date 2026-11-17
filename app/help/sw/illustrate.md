---
title: Anza mwongozo katika Illustrate
summary: Eneo kazi la Illustrate linatengeneza miongozo kutoka muundo wako: miwonekano, michoro ya mistari iliyotenganishwa yenye puto na jedwali la sehemu, maelekezo ya hatua kwa hatua, uhuishaji na faili ya 3D ambayo mteja anaweza kufungua bila CAD. Mwongozo ni faili yake yenyewe.
keywords: illustrate, mwongozo, mchoro wa kiufundi, nyaraka, mwonekano uliotenganishwa, jedwali la sehemu, maelekezo, partcraft-manual
from: e447e0ab
---

**Illustrate** ni eneo kazi la nyaraka ambazo watu wanazihitaji kuzunguka muundo: miwonekano iliyotenganishwa yenye puto na jedwali la sehemu, michoro ya mistari kwa miongozo, maelekezo ya hatua kwa hatua, uhuishaji na faili ya 3D ambayo mteja anaweza kufungua bila CAD. Chagua {{ui:Illustrate}} katika kibadilishaji cha {{ui:Eneo kazi}} mwanzoni mwa upau wa zana.

**Mwongozo** ni faili yake yenyewe (`<name>.partcraft-manual.json`). Inahifadhi nakala ya umbo la kila sehemu, mti wa bidhaa na sifa za sehemu, pamoja na kiungo cha kurudi mahali zilipotoka, ili uweze kufanya kazi kwenye mwongozo muundo unapoendelea. Muundo unapobadilika, [Sasisha kutoka kwenye muundo](topic:illustrate-update) huleta mabadiliko.

## Anza mmoja

Bofya {{ui:Mpya}} katika kundi la {{ui:Mwongozo}}, kisha:

- {{ui:Kutoka sehemu iliyofunguliwa}}: sehemu iliyofunguliwa katika Muundo.
- {{ui:Kutoka mkusanyiko uliofunguliwa}}: inaonyeshwa badala yake mkusanyiko unapofunguliwa; sehemu zake, nafasi zao, nambari za sehemu, vifaa na miwonekano iliyotenganishwa vinakuja pamoja.
- {{ui:Kutoka faili ya mkusanyiko…}}: faili ya `.partcraft-asm.json` iliyohifadhiwa; PartCraft inajenga sehemu zake kwanza.
- {{ui:Kutoka faili nyingine…}}: glTF (.glb, .gltf), OBJ, STL au 3MF. Mti na majina ya faili yanahifadhiwa, na nakala za sehemu moja (umbo lile lile limewekwa mara mbili) zinakuwa sehemu moja yenye kiasi. Faili za STL na OBJ hazitaji kipimo chake, kwa hiyo utaulizwa. Faili za STL zinasomwa Z juu; glTF na 3MF zinataja zao wenyewe.

Mwongozo ukiwa wazi, Illustrate inaonyesha nakala ya mwongozo yenyewe ya sehemu; sehemu au mkusanyiko uliofunguliwa katika Muundo umefichwa hadi urudi Muundo.

## Hifadhi na fungua

{{ui:Hifadhi}} katika kundi la {{ui:Mwongozo}} (au {{key:Mod+S}}) inahifadhi mwongozo; {{ui:Fungua}} inafungua mmoja. Kila mabadiliko katika Illustrate ni hatua moja ya historia ya mwongozo wenyewe: {{ui:Tendua}} na {{ui:Rudia}} zinafanya kazi kwenye mwongozo wakati Illustrate iko wazi.

## Bado hazijajengwa

- Faili za STEP bado hazifunguki kwenye {{ui:Kutoka faili nyingine…}}. Fungua STEP kwenye Muundo badala yake (inaingia kama kitu kigumu: angalia [Fungua faili ya STEP](topic:import-step)) kisha anza mwongozo kwa {{ui:Kutoka sehemu iliyofunguliwa}}, au uhifadhi kama glTF, 3MF, OBJ au STL.
- ModelCraft na BimCraft bado haziwezi kupeleka modeli moja kwa moja kwa Illustrate: ihifadhi kama glTF (.glb) kisha tumia {{ui:Kutoka faili nyingine…}}.

Ifuatayo: [Miwonekano na muonekano](topic:illustrate-views).
