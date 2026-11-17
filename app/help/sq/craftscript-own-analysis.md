---
title: Shkruani analizën tuaj
summary: Ndërtoni një analizë si skripte në Hapësirën e skriptit: rrjetëzoni pjesën, ndërtoni dhe zgjidhni, shfaqni fushën dhe një grafik konvergjence, kontrolloni rezultatin me një llogaritje me dorë, dhe mbajini hapat si skripte të veçanta që ndajnë variabla.
keywords: analizë e vet, analizë e personalizuar, skript FEA, elementi i fundëm, ndërtim, ngurtësi, kushte kufitare, zgjidhje, pcg, e rrallë, fushë, post-procesim, konvergjencë, verifikim, llogaritje me dorë, kontroll, rrjedhë pune
from: 0f471a8e
---

Një analizë në Hapësirën e skriptit është disa skripte të shkurtra që i japin variabla njëri-tjetrit. Nisuni nga një [bibliotekë](topic:craftscript-library) funksioni që është afër asaj që ju duhet, bëni një kopje dhe ndryshojeni; ose ndërtoni një të tillë si më poshtë.

## 1. Një rrjetë

```
model = part();                  % pjesa që po modelroni, si model
m = tetmesh(model, 4);           % tetraedra rreth 4 mm të gjera
show(m)
```

Kontrolloni rrjetën në pamje përpara se të vazhdoni: {{key:F}} e përshtat, dhe {{ui:syri}} te **Shfaqur** e fsheh pjesën.

## 2. Ndërtoni dhe zgjidhni

Shkruani ciklin e elementeve në skript (lexohet si libri i tekstit), dhe lëreni pjesët e rënda te funksionet e integruara: matricat e elementeve, ndërtimin e rrallë nga treshe, dhe zgjidhësin e gradientit të konjuguar me një parakushtues. Një funksion biblioteke si `static_tet` (kur biblioteka e ka) është një shembull i plotë për t'u kopjuar.

## 3. Shfaqni rezultatin

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % një vlerë për nyjë
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Intervali i legjendës mund të shkruhet ose të vendoset përsëri në {{ui:Auto}}.
- Klikoni rrjetën për të lexuar vlerat te një nyje.
- Një grafik që mban të njëjtin `'id'` përditësohet në vend, kështu që shtypni dhe vizatoni brenda ciklit tuaj për të parë konvergjencën.

## 4. Kontrolloni

Krahasojeni me diçka që e dini: shtrirja e majës së një konzole me PL³/3EI, një pllakë me vrimë me faktorin e saj të përqendrimit të stresit, reaksionet me ngarkesat. Shkruajeni kontrollin si skript të veçantë që rikthehet pas çdo ndryshimi:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Mbajeni

- Çdo hap mund të jetë skedën e vet të skriptit: ata ndajnë variablat, kështu i ekzekutoni njëri pas tjetrit.
- Skriptet ruhen në pjesë. Vendosni shenjën **Ruaj variablat me pjesën** te skeda Variablat për t'i mbajtur edhe rezultatet (deri në 32 MB).
- {{ui:Ruaj}} te grupi Skript shkarkon një skript për ta ndarë; {{ui:Hap}} sjell një të tillë.
