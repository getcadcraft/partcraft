---
title: Výztuhy a rohové plechy
summary: Zpevněte díl výztuhou nakreslenou jako jednu čárou; vyplní prostor od čáry ke stěnám v nastavené tloušťce napříč rovinou skici na straně, kterou zvolíte.
keywords: výztuha, rohový plech, žebro, stojina, rozpěra, konzola, rohová podpora, tenká stěna, zpevnit
from: 5c218881
---

:::note
**Zatím není hotovo v této verzi.** Výztuha vyžaduje přesné geometrické jádro, které tato verze PartCraftu nemá: každý díl staví jádrem sítě. [Co zatím není hotovo](topic:not-built-yet) říká, co dělat místo toho. Zbytek této stránky popisuje, jak výztuha funguje s přesným jádrem.
:::

**Výztuha** (neboli rohový plech) je tenká stěna, která zpevňuje díl, například trojúhelník uvnitř rohu úhelníkové konzoly. Nakreslíte jen její volnou hranu: PartCraft vyplní prostor mezi touto čárou a stěnami. Vyžaduje **přesné jádro** (viz [Jádro sítě](topic:solid-kernels)).

## Přidání výztuhy

1. Vytvořte rovinu procházející středem místa, kam výztuha patří (u úhelníkové konzoly hluboké 40 je to rovina 20 před její skicou: viz [Referenční roviny, osy a body](topic:reference-geometry)).
2. Nakreslete na ni **jednu čáru** od stěny ke stěně, nebo několik čar za sebou pro ohnutou hranu výztuhy. Čára může zůstat kousek od stěn: její konce se prodlouží, dokud se s nimi nesetkají.
3. Vyberte skicu a zvolte {{ui:Více}} › {{ui:Výztuha}}.

Výztuha se vyplní od čáry ke stěnám na straně směrem ke středu dílu, takže rohový plech sedne do vnitřního rohu. Pokud je tato strana otevřená a druhá uzavřená, PartCraft ji za vás otočí a řekne to.

## Nastavení

- **Tloušťka (mm)** je tloušťka výztuhy napříč rovinou skici. Může být řízena parametrem.
- **Tloušťka** (volba pod ní): **Vystředěno na rovině skici**, **Před rovinou** (ve směru její normály) nebo **Za rovinou**.
- **Otočit** vyplní druhou stranu čáry.

## Zprávy

- **Na této straně se hrana výztuhy nikdy nesetká s tělesem**: na této straně nic neuzavírá prostor. Zaškrtněte nebo odškrtněte **Otočit**, nebo posuňte čáru tak, aby ji ohraničily stěny.
- **Výztuha potřebuje jeden otevřený řetěz čar ve své skici**: skica obsahuje uzavřený tvar, oblouk nebo spline, nebo čáry, které na sebe nenavazují konec na konec.
- **Hrana výztuhy tam vede uvnitř tělesa**: čára leží uvnitř tělesa; nakreslete ji v otevřeném prostoru mezi stěnami.
