---
title: Skryf jou eie analise
summary: Bou 'n analise as skripte in die Skrip-werkruimte: maas die onderdeel, stel saam en los op, wys die veld en 'n konvergensiegrafiek, toets die resultaat teen 'n handberekening, en hou die stappe as aparte skripte wat veranderlikes deel.
keywords: eie analise, pasgemaakte analise, FEA-skrip, eindige element, saamstel, styfheid, randvoorwaardes, oplos, pcg, yl, veld, nabewerking, konvergensie, verifikasie, handberekening, kontrole, werkvloei
from: 0f471a8e
---

'n Analise in die Skrip-werkruimte is 'n paar kort skripte wat veranderlikes aan mekaar oorhandig. Begin met 'n [biblioteek](topic:craftscript-library)-funksie wat naby is aan wat jy nodig het, maak 'n kopie, en verander dit; of bou een op soos hieronder.

## 1. 'n Maas

```
model = part();                  % die onderdeel wat jy modelleer, as 'n model
m = tetmesh(model, 4);           % tetraëders ongeveer 4 mm breed
show(m)
```

Kontroleer die maas in die aansig voordat jy voortgaan: {{key:F}} pas dit in, die {{ui:oog}} in **Gewys** versteek die onderdeel.

## 2. Stel saam en los op

Skryf die elementlus in die skrip (dit lees soos die handboek), en laat die swaar dele aan die ingeboude funksies: elementmatrikse, yl samestelling uit drietalle, en die toegevoegde-gradiënt-oplosser met 'n voorkondisioneerder. 'n Biblioteekfunksie soos `static_tet` (sodra die biblioteek dit het) is 'n volledige voorbeeld om van te kopieer.

## 3. Wys die resultaat

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % een waarde per node
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Die legenda se reeks kan ingetik word of teruggestel word na {{ui:Outo}}.
- Klik op die maas om die waardes by 'n node te lees.
- 'n Grafiek wat dieselfde `'id'` behou, word op dieselfde plek bygewerk, so druk en grafiek binne jou lus om te sien hoe dit konvergeer.

## 4. Toets dit

Vergelyk met iets wat jy ken: 'n uitkraging se punt-deurbuiging teen PL³/3EI, 'n plaat met 'n gat teen sy spanningskonsentrasiefaktor, die reaksies teen die laste. Skryf die kontrole as sy eie skrip sodat dit na elke verandering weer loop:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Hou dit

- Elke stap kan sy eie skripblad wees: hulle deel die veranderlikes, so loop hulle een na die ander.
- Skripte word in die onderdeel gestoor. Merk **Stoor die veranderlikes saam met die onderdeel** op die Veranderlikes-blad om die resultate ook te hou (tot 32 MB).
- {{ui:Stoor}} in die Skrip-groep laai 'n skrip af om dit te deel; {{ui:Maak oop}} bring een in.
