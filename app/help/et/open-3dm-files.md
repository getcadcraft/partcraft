---
title: Ava .3dm-mudel tahke kehana
summary: Too .3dm-faili võrgud, polü-pinnad ja plokid PartCraftsse ühe tahke kehana, mida saab lõigata, millele saab lisada ja millele saab visandada; kust kolmnurgad tulevad ja mis jäetakse välja.
keywords: 3dm, nurbs, polüpind, brep, pinnad, renderdusvõrk, väljapressimine, plokid, import, võrk tahkeks, ühikud, imporditud keha
from: 8ae9571b
---

PartCraft avab `.3dm`-failid **tahke kehana**, samamoodi nagu avab [STL-, OBJ- või 3MF-võrgu](topic:open-meshes). Keha töötab nagu iga teine tahke: seda saab lõigata, sellele lisada, puurida, mustriks teha ja visandada selle lamedatele tahkudele. Sel on oma ajalugu.

## Faili avamine

1. Vali {{ui:Ava}} või vajuta {{key:Mod+O}} ja vali `.3dm`-fail. Või lohista see 3D-vaatele.
2. PartCraft loeb selle ja näitab, mida leidis: mitu objekti koos tahkudega tuleb sisse, mitu tahku tuli failis salvestatud võrkudest ja mitu PartCraft ise tükeldas, iga parandus ja kas tulemus **sulgub**.
3. Kontrolli **Ühikud failis** (fail ütleb ise; ühik, mida PartCraft ei loetle, nagu jard, teisendatakse millimeetriteks) ja **Üleval failis**.
4. Vali {{ui:Ava kehana}} või **Kasuta seda**, ja {{ui:Lisa sellele detailile}}, kui detailil on juba tunnused.

## Kust kolmnurgad tulevad

Selles versioonis koostab PartCraft kehad kolmnurkadest, nii et iga pind failis muutub väikesteks lamedateks tahkudeks. Iga polü-pinna tahu (ja iga väljapressimise) kohta võtab ta **failis salvestatud renderdusvõrgu**, kui see on olemas; muidu **tükeldab selle ise** (tasapinnad, NURBS-pinnad, pöördepinnad, väljapressitud kõverad ja väljapressimised, piiratud oma servadega). Ühe polü-pinna tahud jagavad oma servapunkte, nii et suletud polü-pind tuleb sisse suletuna. Tahk liiki, mida PartCraft veel ei loe, jäetakse välja ning dialoog ütleb, mitu neid oli ja mis liiki; tulemus ei sulgu tavaliselt.

## Kõik failis muutub üheks kehaks

Iga nähtav võrk, polü-pind ja väljapressimine ning iga bloki paigutus läheb **ühte** kehasse sinna, kuhu fail selle paneb. Peidetud objektid või väljalülitatud kihil olevad objektid jäetakse välja. Kui fail sisaldab mitut eraldi tahket, on kehal mitu tükki: ava igaüks oma failist eraldi kehana, kui soovid need eraldi kehadena.

## Mis jäetakse välja (ja öeldakse)

Kõverad, punktid, punktipilved, tekst, mõõtmed, kiudkujundused ja valgusallikad jäetakse välja: keha võtab ainult tahke. Sama on SubD-objektidega (muuda need kõigepealt võrkudeks või polü-pindadeks programmis, mis faili tegi), teistest failidest lingitud plokid ja värvid, kihid ja nimed (PartCraft'i kehadel siin enda omi ei ole).

## Kui see ei sulgu

Avatud polü-pindadel ja pindadel (üksik lõigatud pind või kuju, millelt tahk puudub) pole sisemust, nii et need ei saa olla tahke. Dialoog ütleb, mitu avausi jäi, ja ei lisa midagi. Ühenda või sulge kuju programmis, mis selle tegi, salvesta ja ava uuesti. Vt [Kui võrk ei sulgu](topic:open-meshes#when-a-mesh-does-not-close).
