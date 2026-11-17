---
title: Jádro sítě
summary: Tato verze PartCraftu staví každý díl jádrem sítě, které běží v prohlížeči. Co to znamená pro kulaté plochy, objemy a soubory, jak poznat, že funguje, a které prvky čekají na přesné jádro.
keywords: jádro, síť, mesh, manifold, přesné, b-rep, fasety, křivky, opencascade, occt, zaoblení vyžaduje přesné, ještě není hotovo, offline, webassembly
from: f931645c
---

Geometrické jádro je motor, který převádí vaši historii na těleso. Tato verze PartCraftu má jedno: **jádro sítě** (manifold-3d). Běží na vašem počítači jako malý program WebAssembly a je připraveno chvíli po otevření aplikace. Nic o vašem dílu se nikam neodesílá.

| | Jádro sítě |
|---|---|
| Kulaté tvary | Ploché fasety. **Křivky** v panelu dílu nastavují, jak jemné |
| Objemy a plochy | U fasetovaného tělesa, u kulatých dílů mírně nízké |
| Skici, vytažení, řez, rotace, díry, vzory, zrcadlení, referenční roviny | Ano |
| Zaoblení a sražení hrany | Na přímých hranách mezi plochými plochami; setkávající se zaoblení jsou spojena na úkos |
| Skořepina a úkos | Skořepina otevírá ploché plochy (přesná tloušťka stěny); úkos naklání ploché plochy |
| Exporty | STL, 3MF, STEP (přesný: kulaté plochy zapsané na jejich skutečných plochách; nebo fasetovaný), PDF výkresu a DXF |
| Pohledy výkresu | Kresleny z fasetů, včetně řezů |
| Plochy a hrany | Pojmenované a známé podle druhu (rovina, válec, kužel, koule, torus; přímka, kružnice), převzaté ze skic: pracovní prostory Simulace, Generativní návrh a Výroba, {{ui:Měřit}}, výběr a tabulka děr je používají |

Štítek u pravého konce stavového řádku ukazuje **Jádro sítě**, dokud se váš díl sestavuje.

## Co čeká na přesné jádro

Přesné (B-rep) jádro uchovává skutečné kružnice, válce a kužele a hladká zaoblení na libovolné hraně; na něm se staví tažení po dráze, lofting, plošné modely, plechy, žebra, více těles a import STEP se zakřivenými plochami zachovanými přesně. (Přesný export STEP na něm nečeká: jádro sítě zná skutečnou plochu každé plochy ze skici a export ji zapíše.) Dřívější laboratorní verze PartCraftu k tomu používaly OpenCascade. Její licence (LGPL) se nehodí k tomuto vydání, kde je každá aplikace pod Apache-2.0 a používá jen knihovny s volnou licencí, proto není zahrnuta. Pro nic z toho zatím neexistuje termín.

Do té doby tyto prvky při výběru říkají **Ještě není hotovo**: stavový řádek uvede důvod a popisky tlačítek končí textem "ještě není hotovo (vyžaduje přesné jádro)". [Co ještě není hotovo](topic:not-built-yet) uvádí každý z nich a co místo toho udělat.

Díl, který v dřívější verzi vznikl těmito prvky, se stále otevře. Tyto prvky zůstanou v historii označené jako ještě není hotovo (najetím na ně zobrazíte důvod), zbytek dílu se sestaví a uložení je ponechá beze změny.

## Kulaté plochy a Křivky

Jádro sítě kreslí kružnici jako mnohoúhelník. **Křivky** v panelu dílu určují, kolik stran dostane celá kružnice; více stran vypadá hladčeji a blíž se měří skutečné hodnotě, ale déle se sestavuje. Objemy, plochy a vzdálenosti z {{ui:Měřit}} patří tomuto fasetovanému tělesu: u díry nebo výstupku jsou o něco menší než u kulatého tvaru.

## Online a offline

Jádro sítě je součástí vlastního stahování aplikace. Chcete-li pracovat bez připojení, uložte PartCraft pro offline použití, když jste online: v horním panelu aplikace zvolte {{ui:Uložit pro offline}} a počkejte, až se zobrazí **Připraveno offline**. Podrobnosti: [Práce offline](common:offline).
