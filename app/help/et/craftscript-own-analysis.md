---
title: Kirjuta oma analüüs
summary: Koosta analüüs skripti tööruumi skriptidena: võrgusta detail, koosta ja lahenda, näita väli ja konvergentsigraafik, kontrolli tulemust käsitsi arvutusega ning hoia sammud eraldi skriptidena, mis jagavad muutujaid.
keywords: oma analüüs, kohandatud analüüs, FEA skript, lõplikud elemendid, koostamine, jäikus, piirtingimused, lahendamine, pcg, hõre, väli, järeltöötlus, konvergents, verifitseerimine, käsitsi arvutus, kontroll, töövoog
from: 0f471a8e
---

Analüüs skripti tööruumis on mõned lühikesed skriptid, mis annavad muutujaid üksteisele edasi. Alusta [teegi](topic:craftscript-library) funktsioonist, mis on su vajadusele lähedal, tee koopia ja muuda seda; või ehita analüüs üles nagu allpool.

## 1. Võrk

```
model = part();                  % detail, mida modelleerid, mudelina
m = tetmesh(model, 4);           % tetraeedrid umbes 4 mm läbimõõduga
show(m)
```

Kontrolli võrku vaates enne edasiminekut: {{key:F}} mahutab selle, **Kuvatud** all olev {{ui:silm}} peidab detaili.

## 2. Koosta ja lahenda

Kirjuta elementide tsükkel skripti (see loeb nagu õpikust) ja jäta rasked osad sisseehitatud funktsioonidele: elementmaatriksid, hõre koostamine kolmikutest ning konjugeeritud gradientide lahendaja eeltingimusega. Teegi funktsioon nagu `static_tet` (kui teegil see juba on) on täielik näide, mida kopeerida.

## 3. Näita tulemust

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % üks väärtus sõlme kohta
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Legendi vahemiku saab sisestada või tagasi seada {{ui:Auto}} peale.
- Klõpsa võrgul, et lugeda väärtusi sõlmes.
- Graafik, millel on sama `'id'`, uuendatakse kohapeal, nii et prindi ja joonista oma tsüklis, et konvergentsi jälgida.

## 4. Kontrolli

Võrdle millegagi, mida tead: konsooli otsa läbipaine PL³/3EI vastu, auguga plaat selle pingekontsentratsiooni teguri vastu, reaktsioonid koormuste vastu. Kirjuta kontroll eraldi skriptina, et see käivituks uuesti pärast iga muudatust:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Hoia see alles

- Iga samm võib olla oma skriptivahekaart: nad jagavad muutujaid, seega käivita need üksteise järel.
- Skriptid salvestatakse detaili sisse. Märgi vahekaardil **Muutujad** linnuke **Salvesta muutujad detailiga**, et hoida ka tulemused (kuni 32 MB).
- {{ui:Salvesta}} rühmas **Skript** laadib skripti alla jagamiseks; {{ui:Ava}} toob ühe sisse.
