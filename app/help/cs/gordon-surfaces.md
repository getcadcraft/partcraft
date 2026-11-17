---
title: Plochy procházející sítí křivek (Gordonova plocha)
summary: Vytvořte jednu hladkou plochu procházející mřížkou profilových a vodicích křivek nakreslených ve skicách nebo převzatých z hran modelu, uzavřete ji na těleso, když jsou profily uzavřené, a zjistěte, co je přesné, co je proložené a jaká hlášení se objeví, když se síť nehodí.
keywords: tečna, G1, tečnost, spojitost tečny, rovina zrcadlení, Gordonova plocha, síť křivek, hraniční plocha, síťová plocha, profily, vodítka, vodicí křivky, loft s vodítky, vodicí lišty, potah, transfinite, Coons, B-spline plocha, volný tvar
from: ada3cb8b
---

:::note
**Ještě není hotovo v této verzi.** Gordonova plocha vyžaduje přesné geometrické jádro, které tato verze PartCraftu nemá: každý díl staví se síťovým jádrem. [Co ještě není hotovo](topic:not-built-yet) vysvětluje, co dělat místo toho. Zbytek této stránky popisuje, jak funguje s přesným jádrem.
:::

**Gordonova plocha** je jedna plocha procházející každou křivkou sítě: soustavy **profilů** běžících jedním směrem a soustavy **vodítek** běžících druhým, které se kříží jako nitě v síti. Tak tvarujete trup, blatník nebo rukojeť z několika řezových křivek, které přímo ovládáte. Vyžaduje **přesné jádro** (viz [Síťové jádro (mesh kernel)](topic:solid-kernels)).

## Nakreslete síť

1. Nakreslete **profily**: dvě nebo více křivek běžících vedle sebe, například řezy na rovnoběžných rovinách. Úsečky, oblouky, kružnice i splajny fungují a řetěz křivek navázaných za sebou se počítá jako jedna křivka.
2. Nakreslete **vodítka**: dvě nebo více křivek běžících napříč profily. Každé vodítko musí protnout každý profil jednou a každý profil každé vodítko jednou.
3. Zajistěte, aby se křivky skutečně setkávaly. Nakreslete skicu vodítka tak, aby jeho křivka procházela body profilů (přichyťte se k promítnutým bodům, nebo zadejte souřadnice). Síť přijme mezery až do **Tolerance** (zpočátku 0.01 mm).

Jedna skica může obsahovat více křivek: každý samostatný řetěz v ní je vlastní křivkou. Všechna vodítka můžete nakreslit do jedné skici, například na horní rovinu.

## Vytvořte plochu

1. Vyberte {{ui:More}} ve skupině Prvky a pak {{ui:Gordon surface}}.
2. PartCraft vezme skici, které zatím nikdo nepoužívá: ty v rovinách rovnoběžných s první se stanou **profily**, ostatní **vodítky**. Zkontrolujte seznam vpravo a nastavte každou skicu na **Profily**, **Vodítka** nebo **Nepoužito**.
3. Chcete-li použít hrany dílu, klikněte na **Vybrat hrany jako profily** (nebo **jako vodítka**), klikněte na hrany v pohledu a pak stiskněte Esc.

Výsledkem je **těleso plochy**. {{ui:Thicken}} z něj udělá těleso, {{ui:Stitch}} jej sešije s jinými plochami a {{ui:Trim surface}} jej rozřízne.

### Uzavřete na těleso

Když jsou profily uzavřené křivky (kružnice, uzavřené splajny, uzavřené řetězy) a první a poslední profil leží každý naplocho v rovině, zaškrtněte **Uzavřít na těleso**. Konce se zakryjí rovnými plochami a uzavřený tvar se spojí, vyřízne, protne nebo stane novým tělesem jako jakýkoli jiný prvek. Tak vytvoříte loft, který sleduje vodicí křivky. Totéž platí pro uzavřená vodítka.

## Tečna k rovině podél hrany

Gordonova plocha prochází svými křivkami, ale sama o sobě neodpovídá sklonu toho, s čím se setkává. Chcete-li, aby z hrany vycházela **tečně** k rovině (G1), například k rovině zrcadlení, aby se zrcadlená kopie spojila bez přehybu, nebo k rovné ploše, ze které roste:

1. Vyberte prvek Gordonovy plochy. Pod **Tečně k** zvolte rovinu v {{ui:Add a plane…}} (Přední, Horní, Pravá nebo referenční rovina), nebo vyberte v pohledu rovnou plochu a stiskněte {{ui:Add the picked flat face}}.
2. PartCraft najde hraniční křivku sítě, která leží v této rovině, a plocha z ní vychází tečně k rovině.

Pokud rovina obsahuje dvě hraniční křivky (podlahu pod oběma konci), přidejte ji dvakrát: každá kopie vezme další. Až čtyři roviny, jedna na hranu.

Hlášení říká, podél které křivky každá rovina učinila plochu tečnou, a nejstrmější úhel, pod kterým se plocha s rovinou předtím setkávala. Vodítka, která už z této křivky vycházejí tečně k rovině, se sledují přesně. Vodítka, která od ní odbíhají, se ohýbají v úzkém pásu u hrany a údaj „sleduje každou křivku v rámci“ v hlášení říká, o kolik: chcete-li přesné přilnutí, nakreslete vodítka vycházející z hrany naplocho.

## Co je přesné a co je proložené

Panel říká, které z těchto platí, a jak daleko se plocha odchyluje od vašich křivek.

- **Přesné**: když je každá křivka polynomiální (úsečky, splajny a jejich řetězy) a vodítka protínají všechny profily při stejných parametrech, je plocha přesně Gordonovou plochou těchto křivek. Síť izo-křivek vyříznutá z bikubické plochy vrátí tuto plochu zpět a čtyři přímky dají rovinnou nebo zkroucenou (bilineární) záplatu.
- **Proložené**: oblouky, kružnice a hrany dílu nejsou polynomiální a křivky, které se protínají při různých parametrech, musí být přečasovány, aby se průsečíky shodovaly. Tyto křivky se proloží kubickými B-splajny v rámci jedné desetimiliontiny velikosti sítě (zhruba 0.00001 mm u dílu o 100 mm). Válcová záplata z oblouků a úseček zůstane do 0.00001 mm od skutečného válce.

Mezi křivkami je plocha tím, co metoda dá: profily prolnuté napříč, plus vodítka prolnutá napříč, minus prolnutí jejich průsečíků. Je hladká všude, kromě míst, kde křivka má ostrý roh. Kde dvě Gordonovy plochy sdílejí hraniční křivku, navazují na sebe hranou na hranu (G0), ne tečně.

## Když se síť nehodí

| Hlášení | Co dělat |
|---|---|
| „… se nesetkávají: procházejí 0.4 mm od sebe“ | Nechte ten profil a vodítko se protnout, nebo zvyšte Toleranci |
| „… se setkává … 2krát“ | Vodítko smí každý profil protnout jen jednou: rozdělte smyčkovitou křivku, nebo použijte méně profilů |
| „… v jiném pořadí“ nebo „přehýbá se přes sebe“ | Dvě vodítka se kříží (nebo dva profily). Rodiny musí běžet vedle sebe |
| „alespoň dva profily a dvě vodítka“ | Přidejte křivky, nebo nastavte více skic na Profily nebo Vodítka |
| „smíchává otevřené a uzavřené křivky“ | Udělejte všechny profily otevřené, nebo všechny uzavřené (totéž pro vodítka) |
| „Konec … není naplocho, takže nelze zakrýt“ | Nakreslete první a poslední uzavřený profil každý v jedné rovině, nebo nechte Uzavřít na těleso vypnuté |

## Omezení

- Jedna B-spline plocha na síť: žádná G1 ani G2 tečnost k sousedním plochám.
- Šev uzavřené sítě u prvního vodítka je spojen hranou na hranu, ale není tečný.
- Samotný prvek Loft nemá vodicí lišty; místo toho použijte Gordonovu plochu uzavřenou na těleso.
- Velmi kroucené křivky nebo průsečíky rozložené velmi nerovnoměrně podél jedné křivky ve srovnání s druhou mohou potřebovat příliš mnoho bodů k proložení; prvek to pak oznámí.
