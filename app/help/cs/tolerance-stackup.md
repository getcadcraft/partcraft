---
title: Toleranční řetězce
summary: Vyberte řetěz ploch přes díly sestavy a zjistěte, jak moc se může lišit mezera na jeho konci, v nejhorším případě a v RSS, s rozměry, které nejvíce záleží, seřazenými nahoře.
keywords: toleranční řetězec, stack-up, toleranční analýza, toleranční řetěz, řetěz rozměrů, smyčka, mezera, vůle, nejhorší případ, rss, kořen ze součtu čtverců, statistické tolerování, přispěvatelé, citlivost, gd&t, obecná tolerance, iso 2768
from: cbdb3159
---

**Stack-up** sečte rozměry podél řetězce přes několik dílů, aby ukázal, jak moc se může výsledek (obvykle mezera) lišit, když je každý díl vyroben kdekoli uvnitř svých tolerancí.

## Výběr řetězce

1. Otevřete sestavu a zvolte {{ui:Stack-up}} ve skupině Sestava. Nad pohledem se otevře karta.
2. Zvolte, podél čeho se řetěz měří: X, Y nebo Z sestavy, nebo {{ui:Normála první plochy}}.
3. Stiskněte {{ui:Vyberte řetěz}} a klikněte na plochy, kterými řetěz prochází, **v pořadí**: začněte na jedné straně mezery, projděte díly a skončete na druhé straně mezery.
4. Stiskněte {{ui:Hotovo}} nebo Enter. Backspace vezme poslední klik zpět; Esc zruší.

Dva kliky na stejný díl udělají rozměr tohoto dílu (jeho vzdálenost podél řetězce). Klik na jiný díl vytvoří **rozhraní** mezi nimi, tam, kde se díly setkávají; nemá toleranci, dokud ji nenapíšete. Články přičítají nebo odečítají podle směru řetězce a uzavírají smyčku: jmenovitá mezera je to, co model ukazuje.

Článek můžete také ručně {{ui:Přidat článek}} a napsat jeho jmenovitou hodnotu, toleranci a zda přidává (+), nebo odečítá (−).

## Přiřazení tolerance každému článku

Každý článek má **horní** a **dolní** odchylku (například +0.1 a −0.05). **Tolerance z** je vyplní z dílu:

- **Obecná tolerance**: pole Tolerance v razítku výkresu dílu (viz [Výkres do PDF](topic:drawing-pdf)), když čte ±0.1, +0.2/-0.1 nebo ISO 2768-f, -m, -c nebo -v (lineární tolerance ISO 2768-1 podle velikosti článku). Obecná tolerance dílu se použije hned, jakmile je řetěz vybrán.
- **GD&T**: jakýkoli rámeček tolerance tvaru nebo polohy na výkrese dílu. Zóny polohy, profilu a házivosti dávají ± polovinu tolerance. Tolerance orientace nebo tvaru obvykle leží uvnitř již dané tolerance rozměru: přidejte ji jen tam, kde řetěz přichází na řízenou plochu. S Ⓜ nebo Ⓛ se zóna bere při uvedené velikosti; bonusová tolerance se nepočítá.
- **Zadaná**: libovolná čísla, která napíšete.

## Čtení výsledků

- **Mezera, jmenovitá** a, když jsou tolerance nerovné, **Mezera, střední**: +0.2/−0 a +0/−0.1 posouvají střed rozsahu.
- **Nejhorší případ**: všechny tolerance na svých mezích zároveň. Mezera nikdy nemůže být mimo tento rozsah.
- **RSS** (kořen ze součtu čtverců): každá tolerance se bere jako tři směrodatné odchylky normálního rozložení a sčítá se jako odmocnina součtu jejich čtverců. Většina sestav spadá daleko uvnitř nejhoršího případu; toto je obvyklý odhad pro díly vyráběné ve velkém.
- Zadejte **Mezera alespoň** a **Mezera nejvýše**, abyste viděli, zda nejhorší případ vždy zůstává uvnitř, a kolik sestav z milionu RSS očekává mimo.
- Sloupec **#** řadí články podle jejich **podílu** na RSS: utáhněte první, abyste dosáhli největšího rozdílu.

{{ui:Uložit CSV}} zapíše články, jejich podíly a výsledky. Stack-upy se ukládají do souboru sestavy a každá změna je jeden krok pro {{key:Mod+Z}}.

:::note
Stack-up je jednosměrný. Nesleduje úhly ani otočení podél řetězce a nečte tolerance rozměrů ze skic: zadejte je jako zadané tolerance nebo přes razítko výkresu.
:::
