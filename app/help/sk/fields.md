---
title: Polia: tvary ako vzdialenosti
summary: Čo je pole (tvar uložený ako vzdialenosť od jeho povrchu), ako ho vytvoriť z primitív, booleovských operácií, mriežok a minimálnych plôch v skripte, ako sa mení na teleso a prečo ten istý skript vždy dá rovnaké bajty.
keywords: pole, znamienková vzdialenosť, sdf, voxel, gyroid, tpms, mriežka, boolean, odsadenie, škrupina, prelínanie, duálne kontúrovanie, deterministický, vodotesný, manifold, tehla
from: faab7480
---

**Pole** opisuje tvar vzdialenosťou od ľubovoľného bodu k jeho povrchu: záporná vnútri, nula na povrchu, kladná vonku. Guľa s polomerom 5 je "vzdialenosť od stredu mínus 5". Kombinovanie tvarov je aritmetika na vzdialenostiach: zjednotenie je menšia z dvoch, prienik väčšia, odčítanie jedného tvaru od druhého je väčšia z prvej a záporne druhej. Zväčšenie tvaru o 1 mm odčíta 1 od vzdialenosti; dutá stena je vzdialenosť preložená dovnútra.

Preto sú polia vhodné na mriežky, kanály a stupňovité steny: povrch gyroidu je "súčet sínusov je nula" a stena, ktorá sa zhrubne z 1 na 3 mm naprieč súčiastkou, je číslo, ktoré sa mení po celej súčiastke.

## Od poľa k telesu

`to_body(field, h)` vzorkuje pole na mriežke bodov vzdialených `h` milimetrov od seba, berie len body blízko povrchu (riedka mriežka 8 × 8 × 8 tehál) a zostaví povrch **duálnym kontúrovaním**: jeden vrchol na bunku povrchu, umiestnený tam, kde sa stretnú roviny povrchu, takže ostrá hrana zostane ostrá do jedného voxelu. Povrch je uzavretý a každá hrana je zdieľaná presne dvoma trojuholníkmi; správa to uvádza. Prvok tenší ako asi tri voxely sa môže zovrieť a potom správa uvedie, že teleso nie je uzavretý pevný objekt, namiesto toho, aby to skryla.

Veľkosť voxelu je presnosť: objem gule s 25 voxelmi naprieč je v rozsahu niekoľkých stotín percenta a stena je len taká presná ako jej voxely. Hrubšia mriežka ide rýchlejšie.

## Vždy rovnaké bajty

Pole nemá hodiny ani náhodné čísla. Sínus a kosínus gyroidu a každá exponenciála, logaritmus a mocnina v knižnici sa počítajú z jednoduchej aritmetiky, takže Node, Chrome, Firefox a Safari dávajú rovnaké bity; mriežka sa prechádza v pevnom poradí, takže ten istý skript s rovnakými vstupmi dá bajt po bajte rovnaké siete a dátové listy na ľubovoľnom počítači a pri ľubovoľnom počte pracovných vlákien. To je otestované vrátane porovnania prehliadača s Node.

## Kam ďalej

[Napíšte generátor](topic:write-a-generator) vytvorí súčiastku z polí; [Inžinierska knižnica](topic:engineering-library) ju dimenzuje.
