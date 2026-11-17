---
title: Inžinierska knižnica
summary: Učebnicové vzorce ako čitateľné skripty v jednotkách SI, každý výsledok so zdrojom: prúdenie v potrubiach a kanáloch, prenos tepla a výmenníky tepla, tlakové časti, dynamika plynov, vlastnosti vody a vzduchu, materiály a jednotky, ktoré sa kontrolujú. Na čo je každý dobrý a kde končí.
keywords: inžinierstvo, knižnica, jednotky, Darcy-Weisbach, Colebrook, Reynolds, súčiniteľ trenia, Dittus-Boelter, Gnielinski, NTU, účinnosť, LMTD, rebro, Barlow, Lamé, hrdlo, izoentropický, Mach, dusený prietok, voda, vzduch, vlastnosti, materiál, zdroje
from: 786ef967
---

Inžinierska knižnica je súbor skriptov v knižnici pracovného priestoru Skript (`craftlib/eng`). Každý je funkcia, ktorú môžete čítať zhora nadol, s hlavičkou, ktorá uvádza jej **metódu**, jej **jednotky**, jej **obmedzenia**, jej **referencie** a **kontrolu** s prepočítaným číslom. Všade používajú jednotky SI a vracajú veličiny, ktoré nesú **jednotku** a **zdroj**, takže technický list dokáže vytlačiť, odkiaľ pochádza každé číslo.

## Kontrolované jednotky

`to_si(10, 'bar', 'Pa')` prevedie hodnotu a odmietne jednotku, ktorá meria niečo iné (dĺžku tam, kde sa očakáva tlak). `from_si`, `unit_convert(1, 'bar', 'psi')` a `unit_kind('W/(m K)')` („tepelná vodivosť“) fungujú rovnako. `temp_k(25, 'C')` a `temp_from_k` prevádzajú teploty, ktoré majú posun.

## Vlastnosti

- `fluid('water', T)` a `fluid('air', T, p)`: hustota, viskozita, vodivosť, merané teplo, Prandtlovo číslo. Voda 0 až 100 °C, vzduch 250 až 600 K; mimo toho sa zastaví namiesto extrapolácie.
- `material('ss304')`: Youngov modul, Poissonov pomer, hustota, medza klzu, vodivosť, merané teplo, rozťažnosť: hodnoty pri izbovej teplote z tých istých technických listov ako Simulácia. Skutočný návrh používa certifikované údaje dodávateľa. Teplotné krivky ešte nie sú hotové.

## Prúdenie v potrubiach a kanáloch

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminárne, potom Colebrookova rovnica pre turbulentné prúdenie; rozsah 2300 až 4000 nemá spoľahlivý vzorec a to hovorí), `darcy_weisbach`, `minor_loss`, `pipe_flow` (okrúhle potrubie, všetko naraz) a `rect_channel` (laminárne obdĺžnikové kanály podľa Shaha a Londona).

## Prenos tepla

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (vyberie laminárne alebo turbulentné a pomenuje koreláciu), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` a `ntu_for` (vzťahy účinnosti-NTU pre protiprúd, súprúd, plášťovo-trubkový, krížový prúd a jeden meniaci sa prúd) a `hx_size` (veľkosť UA, ktorú výkon potrebuje; hovorí, koľko je možné, keď výkon nie je splniteľný).

## Tlakové časti

`allowable_stress` (medza klzu delená bezpečnostným činiteľom), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, podľa obvodového alebo šmykového kritéria) a `wall_sphere`. Ide o učebnicové rezervy, **nie o výpočet podľa tlakovej nádoby**: bez prídavku na koróziu, súčiniteľa spoja alebo normových činiteľov.

## Dynamika plynov

`isentropic` (pomery pri Machovom čísle), `mach_from_area`, `choked_flow`, `throat_area` a `exit_mach`, pre ideálny plyn bez trenia, tepla alebo rázov.

## Kontrola výsledku

`check_stress`, `check_thermal` a `check_flow` spúšťajú vlastné solvery PartCraft pre napätie, vedenie tepla a prúdenie na vygenerovanej súčiastke zo skriptu a vracajú maximálne napätie a posunutie, teploty a tepelný tok a priepustnosť siete kanálov. Solvery nemenia. Kontroly napätia a teploty používajú voxely, takže zakrivená plocha je schodík a napätie v ostrom vnútornom rohu alebo pod bodovým zaťažením závisí od veľkosti voxelu.
