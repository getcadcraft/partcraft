---
title: Inženýrská knihovna
summary: Učebnicové vzorce jako čitelné skripty v jednotkách SI, každý výsledek se zdrojem: proudění v potrubích a kanálech, přenos tepla a výměníky tepla, tlakové části, dynamika plynů, vlastnosti vody a vzduchu, materiály a kontrolované jednotky. K čemu je každý vhodný a kde končí.
keywords: inženýrství, knihovna, jednotky, Darcy-Weisbach, Colebrook, Reynolds, součinitel tření, Dittus-Boelter, Gnielinski, NTU, účinnost, LMTD, žebro, Barlow, Lamé, tryska, izoentropický, Mach, ucpaný průtok, voda, vzduch, vlastnosti, materiál, zdroje
from: 786ef967
---

Inženýrská knihovna je sada skriptů v knihovně pracovního prostoru Script (`craftlib/eng`). Každý je funkce, kterou lze číst shora dolů, s hlavičkou, která udává její **metodu**, její **jednotky**, její **meze**, její **reference** a **kontrolu** s propočítaným příkladem. Všude používají jednotky SI a vracejí veličiny, které nesou **jednotku** a **zdroj**, takže datový list může vytisknout, odkud pochází každé číslo.

## Kontrolované jednotky

`to_si(10, 'bar', 'Pa')` převede hodnotu a odmítne jednotku, která měří něco jiného (délku tam, kde se čeká tlak). `from_si`, `unit_convert(1, 'bar', 'psi')` a `unit_kind('W/(m K)')` ("tepelná vodivost") fungují stejně. `temp_k(25, 'C')` a `temp_from_k` převádějí teploty, které mají posun.

## Vlastnosti

- `fluid('water', T)` a `fluid('air', T, p)`: hustota, viskozita, vodivost, měrné teplo, Prandtlovo číslo. Voda 0 až 100 °C, vzduch 250 až 600 K; mimo tento rozsah se zastaví místo extrapolace.
- `material('ss304')`: Youngův modul, Poissonův poměr, hustota, mez kluzu, vodivost, měrné teplo, roztažnost: hodnoty při pokojové teplotě ze stejných datových listů jako Simulace. Skutečný návrh používá certifikované hodnoty dodavatele. Teplotní křivky ještě nejsou hotové.

## Proudění v potrubích a kanálech

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminární, pak Colebrookova rovnice pro turbulentní proudění; rozsah 2300 až 4000 nemá spolehlivý vzorec a to říká), `darcy_weisbach`, `minor_loss`, `pipe_flow` (kruhové potrubí, vše najednou) a `rect_channel` (laminární obdélníkové kanály podle proložení Shaha a Londona).

## Přenos tepla

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (vybere laminární nebo turbulentní a pojmenuje korelaci), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` a `ntu_for` (vztahy účinnosti a NTU pro protiproud, souproud, plášťotrubkový výměník, křížový proud a jeden proměnlivý proud) a `hx_size` (velikost UA, kterou výkon vyžaduje; říká, kolik je možné, když výkon nelze splnit).

## Tlakové části

`allowable_stress` (mez kluzu dělená bezpečnostním součinitelem), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, podle kritéria obvodového napětí nebo smykového) a `wall_sphere`. Jsou to učebnicové rezervy, **nejsou to výpočet podle předpisu pro tlakové nádoby**: bez přídavku na korozi, součinitele spoje nebo předpisových součinitelů.

## Dynamika plynů

`isentropic` (poměry při Machově čísle), `mach_from_area`, `choked_flow`, `throat_area` a `exit_mach`, pro ideální plyn bez tření, tepla nebo rázů.

## Kontrola výsledku

`check_stress`, `check_thermal` a `check_flow` spouštějí vlastní řešiče napětí, vedení tepla a proudění PartCraftu na vygenerovaném dílu ze skriptu a čtou zpět maximální napětí a posun, teploty a tepelný tok a propustnost sítě kanálů. Řešiče nemění. Kontroly napětí a teploty používají voxely, takže zakřivená plocha je tvořena schůdky a napětí v ostrém vnitřním rohu nebo pod bodovým zatížením závisí na velikosti voxelu.
