---
title: Andika uchambuzi wako
summary: Jenga uchambuzi kama scripts katika Eneo la Script: gawanya sehemu kuwa mesh, kusanya na tatua, onyesha uwanja na mchoro wa muunganiko, linganisha matokeo na hesabu ya mkono, na weka hatua kama scripts tofauti zinazoshiriki vigeu.
keywords: uchambuzi maalum, script ya FEA, elementi za mwisho, kukusanya, ugumu, masharti ya mipaka, kutatua, pcg, adimu, uwanja, baada ya uchakataji, muunganiko, uthibitisho, hesabu ya mkono, ukaguzi, mtiririko wa kazi
from: 0f471a8e
---

Uchambuzi katika Eneo la Script ni scripts chache fupi zinazokabidhiana vigeu. Anza na kazi ya [maktaba](topic:craftscript-library) iliyo karibu na unachohitaji, tengeneza nakala, kisha ibadilishe; au jenga moja kuanzia chini kama ilivyo hapa chini.

## 1. Mesh

```
model = part();                  % sehemu unayoiga, kama modeli
m = tetmesh(model, 4);           % tetrahedra zenye upana wa takriban 4 mm
show(m)
```

Kagua mesh kwenye mwonekano kabla ya kuendelea: {{key:F}} inaiweka sawa, na {{ui:jicho}} kwenye **Zinazoonyeshwa** huficha sehemu.

## 2. Kusanya na tatua

Andika kitanzi cha elementi kwenye script (kinasomeka kama kitabuni), na uache sehemu nzito kwa kazi zilizojengwa ndani: matriki za elementi, kukusanya matriki adimu kutoka triplets, na kitatuzi cha conjugate gradient chenye kiandaaji. Kazi ya maktaba kama `static_tet` (pale maktaba inapokuwa nayo) ni mfano kamili wa kunakili.

## 3. Onyesha matokeo

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % thamani moja kwa kila nodi
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Upeo wa hadithi unaweza kuandikwa au kurudishwa kwa {{ui:Otomatiki}}.
- Bofya mesh ili kusoma thamani kwenye nodi.
- Mchoro unaoweka `'id'` ile ile husasishwa papo hapo, kwa hiyo chapisha na chora ndani ya kitanzi chako ili kuona muunganiko.

## 4. Ikague

Linganisha na kitu unachokijua: mkengeuko wa ncha ya cantilever dhidi ya PL³/3EI, sahani yenye tundu dhidi ya kipengele chake cha mkusanyiko wa mkazo, athari dhidi ya mizigo. Andika ukaguzi kama script yake yenyewe ili uendeshwe tena baada ya kila mabadiliko:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Ihifadhi

- Kila hatua inaweza kuwa kichupo chake cha script: zinashiriki vigeu, kwa hiyo ziendeshe moja baada ya nyingine.
- Scripts zinahifadhiwa kwenye sehemu. Weka alama kwenye **Hifadhi vigeu pamoja na sehemu** kwenye kichupo cha Vigeu ili kuhifadhi matokeo pia (hadi MB 32).
- {{ui:Hifadhi}} katika kikundi cha Script hupakua script ili kuishiriki; {{ui:Fungua}} huleta moja ndani.
