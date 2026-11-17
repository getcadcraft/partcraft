---
title: Rebrá a výstuhy
summary: Vystužte diel rebrom nakresleným ako jedna čiara: vyplní sa od čiary po steny na hrúbku, ktorú nastavíte naprieč rovinou náčrtu, na strane, ktorú zvolíte.
keywords: rebro, výstuha, vzpera, stojina, podpera, držiak, rohová podpora, tenká stena, vystužiť
from: 5c218881
---

:::note
**Zatiaľ nie je hotové v tejto verzii.** Rebro potrebuje presné geometrické jadro, ktoré táto verzia PartCraft nemá: každý diel vytvára jadrom siete (mesh). [Čo ešte nie je hotové](topic:not-built-yet) hovorí, čo robiť namiesto toho. Zvyšok tejto stránky popisuje rebro tak, ako funguje s presným jadrom.
:::

**Rebro** (alebo výstuha) je tenká stena, ktorá diel vystužuje, napríklad trojuholník vnútri rohu držiaka tvaru L. Nakreslíte len jeho voľnú hranu: PartCraft vyplní priestor medzi touto čiarou a stenami. Potrebuje **presné jadro** (pozri [Jadrá telies](topic:solid-kernels)).

## Pridanie rebra

1. Vytvorte rovinu cez stred miesta, kde bude rebro (pri držiaku tvaru L hlbokom 40 rovinu 20 pred jeho náčrtom: pozri [Referenčné roviny, osi a body](topic:reference-geometry)).
2. Nakreslite na ňu **jednu čiaru** od steny po stenu, alebo niekoľko čiar za sebou pre ohnutú hranu rebra. Čiara môže končiť tesne pred stenami: jej konce sa predĺžia, kým sa s nimi nestretnú.
3. Vyberte náčrt a zvoľte {{ui:More}} › {{ui:Rib}}.

Rebro sa vyplní od čiary po steny na strane smerom k stredu dielu, takže výstuha skončí vo vnútornom rohu. Ak je táto strana otvorená a druhá uzavretá, PartCraft to prepne a oznámi vám to.

## Nastavenia

- **Hrúbka (mm)** je hrúbka rebra naprieč rovinou náčrtu. Môže ju riadiť parameter.
- **Hrúbka** (voľba pod ním): **Vycentrované na rovinu náčrtu**, **Pred rovinou** (pozdĺž jej normály) alebo **Za rovinou**.
- **Otočiť** vyplní druhú stranu čiary.

## Správy

- **Na tejto strane hrana rebra nikdy nestretne teleso** — na tejto strane nič neuzatvára priestor. Zaškrtnite alebo zrušte **Otočiť**, alebo posuňte čiaru tak, aby ju ohraničovali steny.
- **Rebro potrebuje jednu otvorenú reťaz čiar v náčrte** — náčrt má uzavretý tvar, oblúk alebo krivku, alebo čiary, ktoré na seba nenadväzujú od konca ku koncu.
- **Hrana rebra tu beží vnútri telesa** — čiara leží vnútri telesa; nakreslite ju v otvorenom priestore medzi stenami.
