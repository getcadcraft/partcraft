---
title: Saját elemzés írása
summary: Elemzés építése szkriptekből a Szkript munkaterületen: az alkatrész hálózása, összeállítás és megoldás, a mező és a konvergenciaábra megjelenítése, az eredmény ellenőrzése kézi számítással, és a lépések külön szkriptekként, közös változókkal való megtartása.
keywords: saját elemzés, egyedi elemzés, szkriptes FEA, véges elem, összeállítás, merevség, peremfeltételek, megoldás, pcg, ritka, mező, utófeldolgozás, konvergencia, verifikáció, kézi számítás, ellenőrzés, munkafolyamat
from: 0f471a8e
---

A Szkript munkaterületen egy elemzés néhány rövid szkript, amelyek változókat adnak egymásnak át. Kezdjen egy olyan [könyvtári](topic:craftscript-library) függvényből, amely közel áll ahhoz, amire szüksége van; készítsen másolatot, és módosítsa; vagy építse fel az alábbiak szerint.

## 1. Háló

```
model = part();                  % a modellezett alkatrész, modellként
m = tetmesh(model, 4);           % kb. 4 mm-es tetraéderek
show(m)
```

Ellenőrizze a hálót a nézetben, mielőtt továbbmenne: az {{key:F}} illeszti, a **Megjelenítettek** listában a {{ui:szem}} elrejti az alkatrészt.

## 2. Összeállítás és megoldás

Írja meg a szkriptben az elemciklust (úgy olvasódik, mint a tankönyvben), a nehéz részeket pedig hagyja a beépített függvényekre: elemmátrixok, ritka összeállítás hármasokból, és az előkondicionálóval ellátott konjugált gradiens megoldó. Egy könyvtári függvény, például a `static_tet` (ha a könyvtárban már megtalálható) teljes példa, amelyből másolni lehet.

## 3. Az eredmény megjelenítése

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % egy érték csomópontonként
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- A jelmagyarázat tartománya beírható, vagy visszaállítható a {{ui:Automatikus}} gombbal.
- Kattintson a hálóra, hogy leolvassa az értékeket egy csomópontban.
- Az azonos `'id'`-jű ábra helyben frissül, ezért a ciklusban nyomtasson és ábrázoljon, hogy lássa a konvergenciát.

## 4. Ellenőrizze

Hasonlítsa össze valamivel, amit ismer: a befalazott tartó csúcslehajlását a PL³/3EI képlettel, egy lyukas lemezt a feszültségkoncentrációs tényezőjével, a reakciókat a terhelésekkel. Az ellenőrzést írja meg külön szkriptként, hogy minden módosítás után újra lefusson:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Őrizze meg

- Minden lépés lehet saját szkriptlap: közös változókat használnak, ezért egymás után futtassa őket.
- A szkriptek az alkatrészben mentődnek. Jelölje be a **Változók mentése az alkatrésszel** lehetőséget a Változók lapon, hogy az eredmények is megmaradjanak (legfeljebb 32 MB).
- A Szkript csoport {{ui:Mentés}} gombja letölt egy szkriptet megosztásra; a {{ui:Megnyitás}} behoz egyet.
