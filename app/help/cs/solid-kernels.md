---
title: Síťové jádro
summary: Tato verze PartCraftu staví každý díl síťovým jádrem, které běží ve vašem prohlížeči. Co to znamená pro kulaté plochy, objemy a soubory, jak poznat, že funguje, a které prvky čekají na přesné jádro.
keywords: jádro, síť, manifold, přesné, b-rep, fasetovaný, křivky, opencascade, occt, zaoblení potřebuje přesné, není hotovo, offline, webassembly
from: 68d32d16
---

Geometrické jádro je motor, který z vaší historie vytváří těleso. Tato verze PartCraftu má jedno: **síťové jádro** (manifold-3d). Běží ve vašem počítači jako malý program WebAssembly a je připravené chvíli po otevření aplikace. Nic z vašeho dílu se nikam neodesílá.

| | Síťové jádro |
|---|---|
| Kulaté tvary | Rovné facety. **Křivky** v panelu dílu nastavují, jak jemné jsou |
| Objemy a plochy | Fasetovaného tělesa, u kulatých dílů o něco nižší |
| Skici, vytažení, výřez, rotace, díry, vzory, zrcadlení, referenční roviny | Ano |
| Zaoblení a sražení | Na přímých hranách mezi rovnými plochami; zaoblení, která se stýkají, se spojují pokosem |
| Skořepina a úkos | Skořepina otevírá rovné plochy (přesná tloušťka stěny); úkos nakloní rovné plochy |
| Exporty | STL, 3MF, STEP (fasetovaný), PDF výkresu a DXF |
| Pohledy na výkresu | Kreslené z facet, včetně řezů |
| Plochy a hrany | Pojmenované a známé podle druhu (rovná, válec, kužel, koule, torus; přímá, kružnice), převzaté ze skic: pracovní prostory Simulace, Generativní a Výroba, Měření, výběr a tabulka děr je používají |

Čip poblíž pravého konce stavového řádku říká **Síťové jádro**, dokud staví váš díl.

## Co čeká na přesné jádro

Přesné jádro (B-rep) udržuje skutečné kružnice, válce a kužely a hladká zaoblení na libovolné hraně; staví se na něm tažení po dráze, lofting, plochy, plechové díly, žebra, více těles, import STEP a přesný export STEP. Dřívější laboratorní sestavení PartCraftu k tomu používala OpenCascade. Jeho licence (LGPL) se do tohoto vydání nehodí, kde je každá aplikace pod Apache-2.0 a používá jen knihovny s volnou licencí, takže zahrnuto není. Nic z toho zatím nemá datum.

Do té doby tyto prvky při volbě řeknou **Zatím není hotovo**: stavový řádek uvede důvod a bubliny jejich tlačítek končí „zatím není hotovo (potřebuje přesné jádro)“. [Co ještě není hotovo](topic:not-built-yet) uvádí každý z nich a co dělat místo toho.

Díl vytvořený s nimi v dřívějším sestavení se stále otevře. Tyto prvky zůstanou v historii označené jako nesestavené (přejetím ukazatele zjistíte důvod), zbytek dílu se sestaví a uložení je zachová beze změny.

## Kulaté plochy a Křivky

Síťové jádro kreslí kružnici jako mnohoúhelník. **Křivky** v panelu dílu nastavují, kolik stran dostane celá kružnice; více stran vypadá hladčeji a měří blíže ke skutečné hodnotě, ale sestavuje se déle. Objemy, plochy a vzdálenosti z {{ui:Měřit}} se týkají tohoto fasetovaného tělesa: u díry nebo výstupku jsou o něco menší než u kulatého tvaru.

## Online a offline

Síťové jádro je součástí vlastního stažení aplikace. Chcete-li pracovat bez připojení, uložte PartCraft pro offline použití, dokud jste online: zvolte {{ui:Uložit pro offline}} v liště aplikace a počkejte, až se zobrazí **Připraveno offline**. Podrobnosti: [Práce offline](common:offline).
