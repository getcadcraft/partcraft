---
title: Savos analizės rašymas
summary: Kurkite analizę kaip scenarijus Scenarijų darbo srityje: suskaidykite detalę tinkleliu, surinkite ir išspręskite, parodykite lauką ir konvergavimo grafiką, patikrinkite rezultatą su rankiniu skaičiavimu ir laikykite žingsnius atskiruose scenarijuose, kurie dalijasi kintamaisiais.
keywords: savo analizė, pasirinktinė analizė, FEA scenarijus, baigtinis elementas, surinkimas, standumas, ribinės sąlygos, sprendimas, pcg, retoji matrica, laukas, po apdorojimo, konvergavimas, tikrinimas, rankinis skaičiavimas, patikra, darbo eiga
from: 0f471a8e
---

Analizė Scenarijų darbo srityje – tai keli trumpi scenarijai, kurie perduoda kintamuosius vienas kitam. Pradėkite nuo [bibliotekos](topic:craftscript-library) funkcijos, panašios į tai, ko reikia, padarykite kopiją ir ją pakeiskite; arba sukurkite analizę pats, kaip žemiau.

## 1. Tinklelis

```
model = part();                  % modeliuojama detalė, kaip modelis
m = tetmesh(model, 4);           % tetraedrai maždaug 4 mm dydžio
show(m)
```

Patikrinkite tinklelį rodinyje prieš tęsdami: {{key:F}} jį pritaiko, o {{ui:akis}} sąraše **Rodoma** paslepia detalę.

## 2. Surinkite ir išspręskite

Parašykite elementų kilpą scenarijuje (ji skaitosi kaip vadovėlyje), o sunkiąsias dalis palikite įmontuotoms funkcijoms: elementų matricoms, retųjų matricų surinkimui iš trejetų ir jungtinių gradientų sprendikliui su išankstiniu sąlygojimu. Bibliotekos funkcija, pavyzdžiui `static_tet` (kai ji bibliotekoje yra), yra pilnas pavyzdys, iš kurio galima nukopijuoti.

## 3. Parodykite rezultatą

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % viena reikšmė kiekvienam mazgui
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Legendos intervalą galima įrašyti rankiniu būdu arba grąžinti į {{ui:Auto}}.
- Spustelėkite tinklelį, kad perskaitytumėte reikšmes mazge.
- Grafikas su tuo pačiu `'id'` atnaujinamas vietoje, todėl spausdinkite ir braižykite ciklo viduje, kad stebėtumėte konvergavimą.

## 4. Patikrinkite

Palyginkite su tuo, ką žinote: konsolės galo įlinkį – su PL³/3EI, plokštelę su skyle – su jos įtempių koncentracijos koeficientu, reakcijas – su apkrovomis. Patikrą parašykite kaip atskirą scenarijų, kad jis būtų paleidžiamas iš naujo po kiekvieno pakeitimo:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Įrašykite

- Kiekvienas žingsnis gali būti atskiras scenarijaus skirtukas: jie dalijasi kintamaisiais, todėl paleiskite juos vieną po kito.
- Scenarijai įrašomi detalėje. Skirtuke **Kintamieji** pažymėkite **Įrašyti kintamuosius kartu su detale**, kad išliktų ir rezultatai (iki 32 MB).
- {{ui:Įrašyti}} Scenarijaus grupėje parsisiunčia scenarijų bendrinimui; {{ui:Atidaryti}} jį įkelia.
