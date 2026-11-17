---
title: Knihovna nástrojů
summary: Ukládejte nástroje, které používáte, v prohlížeči, aby je mohl mít každý díl, a přesouvejte knihovny nástrojů mezi počítači jako soubor JSON.
keywords: knihovna nástrojů, nástroje, export, import, JSON, uložit nástroje, číslo T, stopková fréza, dílenské nástroje
from: 8b9f2483
---

Karta **Nástroje** výroby vypisuje nástroje dílu. V **Knihovně nástrojů** si můžete uchovat vlastní nástroje i nad rámec jednoho dílu:

- {{ui:Uložit tento nástroj}} přidá vybraný nástroj do **Mých uložených nástrojů**; {{ui:Uložit všechny nástroje tohoto dílu}} přidá všechny. Moje uložené nástroje jsou uchovány v tomto prohlížeči a jsou dostupné pro každý díl. Nástroj, který už jste uložili (stejný druh, velikost, počet zubů a přepsání), se neuloží dvakrát.
- {{ui:Přidat k tomuto dílu}} převezme zvolený uložený nástroj do dílu. Pokud jeho číslo T už používá jiný nástroj v dílu, dostane další volné číslo a panel to uvede. {{ui:Odebrat z mé knihovny}} ho vyřadí ze seznamu uložených (ne z dílů, které ho už mají).
- {{ui:Exportovat nástroje…}} zapíše nástroje dílu jako soubor `.json`; {{ui:Importovat nástroje…}} přidá nástroje z takového souboru do dílu se stejnými pravidly (nástroj, který tam už je, se přeskočí; obsazené číslo T se přesune). Soubor obsahuje velikosti, počty zubů, materiály a přepsání posuvů a otáček, které jste zadali; nemá žádná id. Použijte ho k přesunu nástrojů dílny do jiného počítače nebo k předání kolegovi.

Pokud prohlížeč knihovnu nedokáže uchovat (úložiště je vypnuté nebo plné), uložení to oznámí a **Exportovat nástroje** je cesta, jak si soubor ponechat. Soubor musí být knihovnou nástrojů PartCraftu této verze nebo starší, s nejvýše 500 nástroji platných velikostí; cokoli jiného se odmítne s uvedením důvodu.

Řezné rychlosti a posuvy na zub, které s nástrojem přicházejí, jsou výchozí hodnoty; viz [Tvorba drah nástroje a G-kódu](topic:manufacture).
