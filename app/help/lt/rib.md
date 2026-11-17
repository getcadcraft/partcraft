---
title: Briaunos ir kampinės atramos
summary: Sustiprinkite detalę briauna, nubraižyta kaip viena linija: ji užpildo tarpą nuo linijos iki sienelių, nustatyto storio per eskizo plokštumą, jūsų pasirinktoje pusėje.
keywords: briauna, kampinė atrama, tinklas, sustiprinimas, įtvara, laikiklis, kampinė paramos atrama, plona sienelė, sustiprinti
from: 5c218881
---

:::note
**Šioje versijoje dar nesukurta.** Briauna reikalauja tikslaus geometrijos branduolio, kurio ši PartCraft versija neturi: ji kuria visas detales tinklelio branduoliu. [Kas dar nesukurta](topic:not-built-yet) nurodo, ką daryti vietoj. Likęs šis puslapis aprašo, kaip ji veikia su tiksliu branduoliu.
:::

**Briauna** (arba kampinė atrama) yra plona sienelė, kuri sustiprina detalę, pavyzdžiui, trikampis L formos laikiklio kampe. Nubraižote tik jos laisvą kraštą: PartCraft užpildo tarpą tarp tos linijos ir sienelių. Jai reikia **tikslaus branduolio** (žr. [Tinklelio branduolys](topic:solid-kernels)).

## Pridėkite briauną

1. Sukurkite plokštumą per vidurį vietos, kur eis briauna (L formos laikikliui, 40 gylio, plokštuma 20 prieš jo eskizą: žr. [Nuorodinės plokštumos, ašys ir taškai](topic:reference-geometry)).
2. Nubraižykite ant jos **vieną liniją** nuo sienelės iki sienelės — arba kelias linijas galas į galą, kad gautumėte išlenktą briaunos kraštą. Linija gali nesiekti sienelių: jos galai tęsiami, kol jas pasiekia.
3. Pažymėkite eskizą ir pasirinkite {{ui:Daugiau}} › {{ui:Briauna}}.

Briauna užpildo tarpą nuo linijos iki sienelių pusėje, link detalės vidurio, todėl atrama atsiduria vidinėje kampo vietoje. Jei ta pusė atvira, o kita uždara, PartCraft ją apverčia ir apie tai praneša.

## Nustatymai

- **Storis (mm)** yra briaunos storis per eskizo plokštumą. Jį gali valdyti parametras.
- **Storis** (pasirinkimas žemiau): **Centruotas ant eskizo plokštumos**, **Prieš plokštumą** (išilgai jos normalės) arba **Už plokštumos**.
- **Apversti** užpildo kitą linijos pusę.

## Pranešimai

- **Šioje pusėje briaunos kraštas niekada nesusitinka su kūnu** — toje pusėje nieko neuždaro: pažymėkite arba nuimkite **Apversti**, arba perkelkite liniją, kad ją ribotų sienelės.
- **Briaunai reikia vienos atviros linijų grandinės jos eskize** — eskize yra uždara forma, lankas ar splainas arba linijos, kurios nesijungia galas į galą.
- **Briaunos kraštas eina per kūno vidų** — linija yra kietojo kūno viduje; nubraižykite ją atvirame tarpe tarp sienelių.
