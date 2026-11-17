---
title: Napíšte vlastnú analýzu
summary: Vytvorte analýzu ako skripty v pracovnom priestore Skript: vytvorte sieť časti, zostavte a vyriešte, zobrazte pole a graf konvergencie, overte výsledok ručným výpočtom a uchovajte kroky ako samostatné skripty, ktoré zdieľajú premenné.
keywords: vlastná analýza, analýza, skript MKP, metóda konečných prvkov, konečné prvky, zostavenie, tuhosť, okrajové podmienky, riešenie, pcg, riedka, pole, následné spracovanie, konvergencia, overenie, ručný výpočet, kontrola, pracovný postup
from: 0f471a8e
---

Analýza v pracovnom priestore Skript je niekoľko krátkych skriptov, ktoré si navzájom odovzdávajú premenné. Začnite od [funkcie knižnice](topic:craftscript-library), ktorá je blízka tomu, čo potrebujete, vytvorte jej kópiu a upravte ju; alebo ju postavte od základov podľa nižšie uvedeného.

## 1. Sieť

```
model = part();                  % časť, ktorú modelujete, ako model
m = tetmesh(model, 4);           % tetraedre s veľkosťou asi 4 mm
show(m)
```

Skontrolujte sieť v zobrazení predtým, ako pokračujete: {{key:F}} prispôsobí zobrazenie, {{ui:oko}} v **Zobrazené** skryje časť.

## 2. Zostavenie a riešenie

Napíšte slučku cez prvky priamo do skriptu (číta sa ako v učebnici) a ťažké časti nechajte na vstavané funkcie: matice prvkov, riedke zostavenie z trojíc a riešič združených gradientov s predpodmienením. Funkcia knižnice ako `static_tet` (keď ju knižnica už obsahuje) je úplný príklad, z ktorého sa dá kopírovať.

## 3. Zobrazte výsledok

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % jedna hodnota na uzol
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Rozsah legendy možno napísať alebo nastaviť späť na {{ui:Auto}}.
- Kliknutím na sieť prečítate hodnoty v uzle.
- Graf, ktorý si zachová rovnaké `'id'`, sa aktualizuje na mieste, takže vypisujte a vykresľujte vo vnútri slučky, aby ste sledovali konvergenciu.

## 4. Overte ju

Porovnajte s niečím, čo poznáte: priehyb konca konzoly s PL³/3EI, doska s otvorom s jej súčiniteľom koncentrácie napätia, reakcie so zaťaženiami. Kontrolu napíšte ako samostatný skript, aby sa spustila znova po každej zmene:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Uchovajte ju

- Každý krok môže mať vlastnú kartu skriptu: zdieľajú premenné, takže ich spúšťajte jeden za druhým.
- Skripty sa ukladajú v časti. Zaškrtnite **Uložiť premenné spolu s časťou** na karte {{ui:Premenné}}, aby ste uchovali aj výsledky (až 32 MB).
- {{ui:Uložiť}} v skupine Skript stiahne skript, aby ste ho mohli zdieľať; {{ui:Otvoriť}} ho načíta.
