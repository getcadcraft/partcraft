---
title: Napište vlastní analýzu
summary: Sestavení analýzy jako skriptů v pracovním prostoru Skript: vytvoření sítě dílu, sestavení a řešení, zobrazení pole a grafu konvergence, kontrola výsledku ručním výpočtem a uchování kroků jako samostatných skriptů sdílejících proměnné.
keywords: vlastní analýza, analýza na míru, skript MKP, konečné prvky, sestavit, tuhost, okrajové podmínky, řešit, pcg, řídké, pole, následné zpracování, konvergence, ověření, ruční výpočet, kontrola, postup
from: 0f471a8e
---

Analýza v pracovním prostoru Skript je několik krátkých skriptů, které si předávají proměnné. Začněte od [funkce z knihovny](topic:craftscript-library), která je blízká tomu, co potřebujete, vytvořte kopii a upravte ji; nebo ji sestavte postupně, jak je níže.

## 1. Síť

```
model = part();                  % díl, který modelujete, jako model
m = tetmesh(model, 4);           % tetraedry zhruba 4 mm
show(m)
```

Před pokračováním zkontrolujte síť v zobrazení: {{key:F}} ji přizpůsobí, {{ui:oko}} v **Zobrazeno** skryje díl.

## 2. Sestavení a řešení

Napište smyčku přes prvky do skriptu (čte se jako v učebnici) a těžké části nechte vestavěným funkcím: maticím prvků, řídké sestavě z trojic a metodě sdružených gradientů s předpodmíněním. Funkce knihovny, jako `static_tet` (jakmile ji knihovna obsahuje), je hotový příklad k okopírování.

## 3. Zobrazení výsledku

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % jedna hodnota na uzel
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Reziduum řešiče', 'id', 'conv')
```

- Rozsah legendy lze napsat nebo vrátit na {{ui:Auto}}.
- Kliknutím na síť přečtete hodnoty v uzlu.
- Graf se stejným `'id'` se aktualizuje na místě, takže tiskněte a vykreslujte uvnitř smyčky, abyste sledovali konvergenci.

## 4. Kontrola

Porovnejte s něčím známým: průhyb konce konzoly s PL³/3EI, deska s otvorem se součinitelem koncentrace napětí, reakce se zatíženími. Zapište kontrolu jako samostatný skript, aby běžela znovu po každé změně:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('konec %g mm, teorie nosníku %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Uchování

- Každý krok může být samostatná karta skriptu: sdílejí proměnné, takže je spusťte jeden za druhým.
- Skripty se ukládají v dílu. Zaškrtněte **Uložit proměnné s dílem** na kartě Proměnné, abyste si uchovali i výsledky (až 32 MB).
- {{ui:Uložit}} ve skupině Skript stáhne skript pro sdílení; {{ui:Otevřít}} jej načte.
