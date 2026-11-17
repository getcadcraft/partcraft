---
title: Rebra in kotne ojačitve
summary: Okrepite del z rebrom, narisanim kot ena črta: zapolni prostor od črte do sten, z nastavljeno debelino čez ravnino skice, na strani, ki jo izberete.
keywords: rebro, kotna ojačitev, rebro v steni, ojačitev, opora, nosilec, kotna opora, tanka stena, okrepitev
from: 5c218881
---

:::note
**Še ni izdelano v tej različici.** Rebro potrebuje natančno geometrijsko jedro, ki ga ta različica PartCrafta nima: vse dele gradi z mrežnim jedrom. [Kaj še ni izdelano](topic:not-built-yet) pove, kaj narediti namesto tega. Preostanek te strani opisuje, kako deluje z natančnim jedrom.
:::

**Rebro** (ali kotna ojačitev) je tanka stena, ki okrepi del, na primer trikotnik v notranjem kotu nosilca v obliki črke L. Narišete samo njegov prosti rob: PartCraft zapolni prostor med to črto in stenami. Potrebuje **natančno jedro** (glejte [Mrežno jedro](topic:solid-kernels)).

## Dodajte rebro

1. Naredite ravnino skoznjo na sredini, kjer gre rebro (za nosilec v obliki črke L globine 40 je to ravnina 20 pred njegovo skico: glejte [Referenčne ravnine, osi in točke](topic:reference-geometry)).
2. Na njej skicirajte **eno črto** od stene do stene – ali nekaj črt, zvezanih od konca do konca, za upognjen rob rebra. Črta lahko ostane kratka od sten: njeni konci se podaljšajo, dokler ne sežejo do njih.
3. Izberite skico in izberite {{ui:Več}} › {{ui:Rebro}}.

Rebro zapolni prostor od črte do sten na strani proti sredini dela, tako da kotna ojačitev pristane v notranjem kotu. Če je ta stran odprta in je druga zaprta, ga PartCraft obrne in to pove.

## Nastavitve

- **Debelina (mm)** je debelina rebra čez ravnino skice. Lahko jo določa parameter.
- **Debelina** (izbira pod njo): **Centrirano na ravnino skice**, **Pred ravnino** (vzdolž njene normale) ali **Za ravnino**.
- **Obrni** zapolni drugo stran črte.

## Sporočila

- **Na tej strani se rob rebra nikoli ne stakne s telesom** – na tej strani nič ne zapira prostora: označite ali odznačite **Obrni** ali premaknite črto, da jo omejijo stene.
- **Rebro potrebuje eno odprto verigo črt v svoji skici** – skica je zaprta oblika, lok ali krivulja spline ali črte, ki se ne stikajo od konca do konca.
- **Rob rebra tam poteka znotraj telesa** – črta leži znotraj polnega telesa; narišite jo v odprtem prostoru med stenami.
