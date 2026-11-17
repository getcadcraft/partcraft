---
title: Falanqayn adigu naftaadu samayso
summary: Dhis falanqayn script-yo ah Goobta Script: mesh qaybta, isku-dhufo oo xalli, muuji field-ka iyo plot isu-soo-dhowaanshaha, hubi natiijada xisaab gacanta ah, oo ku hay tallaabooyinka script-yo kala duwan oo wadaaga doorsoomayaal.
keywords: falanqayn adigu samayso, falanqayn gaar ah, FEA script, finite element, isku-dhufo, assemble, stiffness, shuruudaha xadka, boundary conditions, xalli, solve, pcg, sparse, field, post-process, isu-soo-dhowaanshaha, convergence, xaqiijin, verification, xisaab gacanta, hand calculation, check, workflow
from: 0f471a8e
---

Falanqaynta Goobta Script waa dhowr script oo gaaban oo isu gudbiya doorsoomayaal. Ka bilow [maktabad](topic:craftscript-library) function ku dhow waxa aad u baahan tahay, samee nuqul, kadibna beddel; ama dhis mid adiga oo sida hoose ku socda.

## 1. Mesh

```
model = part();                  % qaybta aad ku moodelayso, sida moodel
m = tetmesh(model, 4);           % tetrahedra qiyaastii 4 mm ballac
show(m)
```

Hubi mesh-ka muuqaalka ka hor inta aadan sii socon: {{key:F}} wuxuu ku habeeyaa, {{ui:indhaha}} ee **La muujiyay** ayaa qariya qaybta.

## 2. Isku-dhufo oo xalli

Qor wareegga unugyada script-ka (wuxuu u eg yahay sida buugga xisaabta), oo qaybta culus u daa built-in functions-ka: matrikisyada unugyada, isku-dhufashada sparse ee saddex-geesaha, iyo solver-ka gradient-ka isku-dhafan oo leh preconditioner. Function maktabad sida `static_tet` (marka maktabadda ay leedahay) waa tusaale dhammaystiran oo aad ka koobiyayso.

## 3. Muuji natiijada

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % hal qiime halkii node
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Xadka legend-ka waa la ku qori karaa ama dib loogu celin karaa {{ui:Otomaatig}}.
- Guji mesh-ka si aad u akhrido qiimaha unug.
- Plot-ka leh isla `'id'` wuu cusboonaysiiyaa isla meeshiisa, sidaas darteed daabac oo plot ku sameey wareegga si aad u aragto isu-soo-dhowaanshaha.

## 4. Hubi

Kala barbar dhig wax aad taqaanno: go'a madaxa cantilever-ka oo lagu barbar dhigo PL³/3EI, lo'ga oo god leh oo lagu barbar dhigo stress concentration factor-keeda, reactions-ka oo lagu barbar dhigo culeysyada. Qor hubinta script u gaar ah si ay mar kale u socoto kadib marka wax la beddelo:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Kaydi

- Tallaabo kasta wuxuu noqon karaa tab script u gaar ah: waxay wadaagaan doorsoomayaasha, sidaas darteed socodsii mid kadib mid kale.
- Scripts-ka waxa lagu kaydiyaa qaybta. Calaamadi **Kaydi doorsoomayaasha qaybta** tab-ka **Doorsoomayaasha** si aad natiijooyinka u kaydiso (ilaa 32 MB).
- {{ui:Kaydi}} kooxda Script wuxuu soo dejiyaa script si aad u wadaagto; {{ui:Fur}} wuxuu soo geliyaa mid.
