---
title: Snímání: najděte díl a nastavte posunutí obrobku
summary: Dotkněte se horní plochy, boku, otvoru nebo čepu dotykovou sondou a nechte řídicí systém posunout posunutí obrobku tam, kde díl skutečně je, nebo jen měřte. Co umí každý řídicí systém a co nebylo ověřeno.
keywords: snímání, sonda, dotyková sonda, dotyk, posunutí obrobku, g54, g31, g38.2, přeskočit, vztažný bod, najít střed, vrtání, čep, hrana, nulování, měření, kontrola, g10
from: 1f718b82
---

{{ui:Snímání}} ve Výrobě zapíše do programu cyklus snímání: sonda se dotkne dílu a řídicí systém posune posunutí obrobku (G54) o rozdíl mezi tím, kde byla plocha nalezena, a tím, kde ji model udává. Následné operace pak řežou tam, kde díl skutečně je.

**Nic zde nebylo spuštěno na stroji.** Pohyby před dotykem jsou obyčejné pohyby: sonda se nesleduje až do samotného pohybu snímání. Spusťte to pomalu, nejdřív ve vzduchu, s rukou na pozastavení posuvu.

## Použití

1. Na kartě **Nástroje** přidá první operace snímání **dotykovou sondu**: průměr její kuličky a posuv snímání (100 mm/min, pokud nenastavíte jiný).
2. Stiskněte {{ui:Více}} na panelu nástrojů Výroby, pak {{ui:Snímání}}, a klikněte, čeho se dotknout. Každý výběr je jeden cyklus, v pořadí, v jakém klikáte:

| Výběr | Cyklus | Co se nastaví |
|---|---|---|
| Rovná plocha, která směřuje nahoru podél osy nástroje | Jeden dotyk směrem dolů | Z |
| Rovná boční plocha kolmá na X nebo Y | Jeden dotyk směrem k ploše, kousek pod její horní hranou | X nebo Y |
| Otvor nebo čep podél osy nástroje | Čtyři dotyky (+X, −X, +Y, −Y) | X a Y jeho středu |

3. **S výsledkem**: {{ui:Set the work offset}} nebo {{ui:Measure only}}.
4. **Začít tak daleko**: a **Hledat tak daleko za**. Určují, jak daleko od očekávané plochy začíná pohyb snímání a jak daleko za ní smí sonda jet, než řídicí systém vzdá. **Hloubka** je, jak hluboko pod horní hranou otvoru, čepu nebo bočního čela kulička jede.

Operaci snímání dejte první, před čímkoli, co řeže.

## Co zapisuje každý řídicí systém

| Řídicí systém | Dotyk | Výsledek |
|---|---|---|
| Fanuc-style | `G31`, poloha uložená v `#101` až `#104` | Proměnné posunutí (`#5221` až `#5223`) se posunou o nalezeno − očekáváno. Pouze měření: rozdíl zůstane v `#110` (a `#111`). |
| LinuxCNC | `G38.2`, poloha uložená v pojmenovaných parametrech | `G10 L2 P1` s novým posunutím. Pouze měření: zpráva `(DEBUG, …)`. |
| GRBL | `G38.2` | Jeden dotyk nastaví osu pomocí `G10 L20 P1`. GRBL nemá proměnné, takže **nemůže spočítat střed**: soubor to říká v komentáři a nenastaví nic. |

Výpočet je v postprocesoru, takže jej můžete změnit: události jsou `probe-move` a `probe-set` ([Upravitelné postprocesory](topic:post-processors)).

## Omezení

- Jedno posunutí obrobku (G54). Jen plochy kolmé k osám: žádný úhel, žádný cyklus rohu, žádné natočení obrobku.
- Žádný nastavovač nástroje, žádná kontrola zlomeného nástroje, žádné měření velikosti proti toleranci, žádný protokol.
- Vřeteno se pro snímání nespouští a chlazení zůstává vypnuté; nic nekontroluje, že nástroj ve vřeteni je sonda.
- Simulace polotovaru nespouští dráhu snímání.
- Kalibrace sondy (odsazení kuličky, průhyb hrotu, směr spuštění) je věcí řídicího systému.
