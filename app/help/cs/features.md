---
title: Prvky a jejich možnosti
summary: Každý prvek v panelu nástrojů s nastaveními, výchozími hodnotami a omezeními, od vytažení přes zaoblení, skořepinu a importovaná tělesa STEP; společné akce všech prvků a nastavení dílu.
keywords: prvky, zatím není hotové, vytáhnout, vyjmout, rotace, rotovaný výřez, díra, válcové zahloubení, lineární pole, kruhové pole, zrcadlit, zaoblení, sražení hrany, skořepina, import, možnosti, výchozí, nastavení, rozlišení, křivky, fasety, potlačit, návrat
from: ab3a598e
---

Prvky jsou v historii vypsány v pořadí, v jakém vznikly, a přestavují se shora dolů. Každý je pojmenován podle svého druhu s číslem: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft staví každý prvek mesh jádrem. Zaoblení a sražení hran fungují na přímých hranách mezi dvěma rovnými plochami a skořepina otevírá rovné plochy. Importovaná tělesa vyžadují přesné jádro, které tato verze nemá: zatím nejsou hotová a jejich část níže popisuje díl vytvořený v dřívějším sestavení, který si je ponechá. Viz [Mesh jádro](topic:solid-kernels) a [Co ještě není hotové](topic:not-built-yet).

## Skica

| Nastavení | Poznámky |
|---|---|
| Rovina | Rovina Front, Top nebo Right, nebo rovná plocha. Pouze zobrazeno, nemění se: chcete-li skicu přesunout, vytvořte novou |
| Stav | Plně určená, Nedostatečně určená (se stupni volnosti), Přeurčená, nebo Prázdná |
| Geometrie, Vazby | Kolik je křivek, bodů a vazeb |
| Řídicí kóty | Každá kóta skici, upravitelná |

Tlačítka: {{ui:Upravit skicu}}, {{ui:Exportovat jako DXF}}.

## Vytáhnout a vyjmout

{{ui:Vytáhnout}} a {{ui:Vyjmout}} vytvoří týž prvek, jen s jinými výchozími nastaveními.

| Nastavení | Volby | Vytáhnout začíná na | Vyjmout začíná na |
|---|---|---|---|
| Operace | Výstupek (přidá materiál), Vyjmout (odebere materiál), Průnik (ponechá překryv), Nové těleso (v této verzi zatím není hotové) | Výstupek | Vyjmout |
| Konec | Slepý (hloubka), Střední rovina (oběma směry), Skrz vše | Slepý | Skrz vše |
| Hloubka (mm) | Nad 0, až do 1,000,000 | 10 | 10 |
| Obrátit směr | Vypnuto / zapnuto | Vypnuto | Vypnuto |

- Profil: každý uzavřený obrys z plných čar, kružnic a oblouků ve skici. Smyčky uvnitř smyček jsou díry.
- Skrz vše funguje jen pro výřezy. Dosáhne přes celý díl na zvolenou stranu.
- Výřez jde do materiálu, pryč od vnější strany roviny skici; Obrátit směr to otočí.

## Rotace a rotovaný výřez

| Nastavení | Volby | Výchozí |
|---|---|---|
| Operace | Výstupek, Vyjmout | Výstupek ({{ui:Rotace}}), Vyjmout ({{ui:Více}} › {{ui:Rotovaný výřez}}) |
| Úhel (°) | Nad 0, až do 360 | 360 |
| Osa | První osová čára, libovolná čára nebo osová čára skici, nebo osový prvek ležící v rovině skici | První osová čára |

- Profil musí zůstat na jedné straně osy. Smí se jí dotýkat.
- Osu rotace mohou použít Kruhová pole a spoje v sestavě.

## Díra

| Nastavení | Volby | Výchozí |
|---|---|---|
| Typ | Jednoduchá, Válcové zahloubení | Jednoduchá |
| Průměr (mm) | Nad 0 | 6 |
| Skrz vše | Zapnuto / vypnuto | Zapnuto |
| Hloubka (mm) | Když je Skrz vše vypnuto | 10 |
| Průměr zahloubení ⌀ | Širší než díra | 11 |
| Hloubka zahloubení | Mělčí než slepá díra | 6 |
| Obrátit směr | Vypnuto / zapnuto | Vypnuto |

- Jedna díra v každém volném bodu skici (body vytvořené nástrojem Bod). Panel ukáže, kolik jich je.
- Díry se vrtají kolmo k rovině skici, do materiálu.
- Osu každé díry mohou použít spoje v sestavě ("Hole1, díra 2").

## Lineární pole

| Nastavení | Volby | Výchozí |
|---|---|---|
| Prvky ke kopírování | Libovolné plné prvky nad ním | Vybraný prvek, jinak poslední plný prvek |
| Směr | Osa X, osa Y, osa Z; čára dřívější skici; osa rotace; vybraná hrana | Osa X (nebo hrana vybraná při přidání) |
| Rozestup (mm) | Libovolné číslo | 20 |
| Počet | 1 až 1000, včetně původního | 3 |
| Obrátit směr | Vypnuto / zapnuto | Vypnuto |

## Kruhové pole

| Nastavení | Volby | Výchozí |
|---|---|---|
| Prvky ke kopírování | Jako u Lineárního pole | Jako u Lineárního pole |
| Osa | Jako Směr výše | Osa poslední rotace, jinak osa Y (nebo vybraná hrana) |
| Úhel (°) | Nad 0, až do 360. 360 rozmístí kopie rovnoměrně dokola; méně je rozloží na tento úhel | 360 |
| Počet | 1 až 1000, včetně původního | 6 |
| Obrátit směr | Vypnuto / zapnuto | Vypnuto |

## Zrcadlit

| Nastavení | Volby | Výchozí |
|---|---|---|
| Zrcadlit | Celé těleso (jak je zatím postaveno), nebo vybrané prvky | Vybraný prvek, jinak celé těleso |
| Zrcadlová rovina | Rovina Front, Top nebo Right; rovná plocha | Rovina Right, nebo rovná plocha vybraná při přidání |

## Zaoblení a sražení hrany

V této verzi je mesh jádro staví na přímých hranách mezi dvěma rovnými plochami (vnějšími nebo vnitřními rohy), s jedním poloměrem. Kulatá hrana hlásí: "Zaoblení: v této verzi jen přímé hrany mezi dvěma rovnými plochami (mesh jádro je vytváří). Zaoblete nebo zkoste zakřivené hrany ve skici."; kde se zaoblené hrany stýkají v rohu, jsou seříznuty na úkos, a prvek varuje "Zaoblení mesh jádrem: kde se zaoblené hrany stýkají, jsou seříznuty na úkos, nikoli splynuty." Všechny typy sražení (stejná vzdálenost, dvě vzdálenosti, vzdálenost a úhel, s **Prohodit strany**) fungují. Viz [Zaoblení, sražení hrany a skořepina](topic:fillet-chamfer-shell).

| Nastavení | Zaoblení | Sražení hrany |
|---|---|---|
| Velikost | **Poloměr (mm)**, výchozí 2 | **Vzdálenost (mm)** od hrany na obou plochách, výchozí 1 |
| **Hrany** | Kolik | Kolik |

Hrany: vybrané hrany, každá vypsaná podle dvou ploch, které spojuje ("Extrude1 koncová plocha × Extrude1 bok"), s **Odebrat**. Výchozí: hrany vybrané při přidání.

- Hrany vyberte před stisknutím tlačítka ({{key:Shift}}+klik pro více), nebo tlačítko zvolte bez výběru a hrany klikněte až potom.
- {{ui:Vybrat hrany}} (nebo dvojklik na prvek) hrany změní.
- Hrany se drží podle dvou ploch, které spojují, takže přežijí změny velikosti dříve v historii.

## Skořepina

Mesh jádro ji vytváří. Otevřít lze jen rovné plochy ("Skořepina: v této verzi otevírá jen rovné plochy (vytváří ji mesh jádro)."); stěny různých tlouštěk zatím nejsou hotové. Viz [Zaoblení, sražení hrany a skořepina](topic:fillet-chamfer-shell).

| Nastavení | Volby | Výchozí |
|---|---|---|
| Stěna (mm) | Nad 0 | 2 |
| Stěny rostou ven (plochy zůstanou uvnitř) | Vypnuto: stěny jdou dovnitř. Zapnuto: stěny jdou ven | Vypnuto |
| Otevřené plochy | Odstraněné plochy, alespoň jedna, s **Odebrat** | Plochy vybrané při přidání |

{{ui:Vybrat plochy}} změní otevřené plochy.

## Importované těleso

Vznikne otevřením souboru STEP, STL, OBJ nebo 3MF: těleso z trojúhelníků bez vlastní historie ([Otevření souboru STEP](topic:import-step), [Otevření STL, OBJ nebo 3MF](topic:open-meshes)). Ukazuje soubor, ze kterého pochází, a co import opravil; **Jednotky v souboru**, **Nahoru v souboru** a **Použít k** zůstávají upravitelné. Těleso STEP importované starším sestavením s přesným jádrem zůstane v historii označeno jako nehotové; otevřete soubor STEP znovu, aby se načetl jako trojúhelníky.

| Nastavení | Volby | Výchozí |
|---|---|---|
| Nahoru v souboru | Z nahoru (většina CAD), Y nahoru | Z nahoru |

Vzory a zrcadla mohou kopírovat importované těleso, ale ne zaoblení, sražení hrany ani skořepinu.

## Co má každý prvek

Ve spodní části panelu každého prvku:

| Tlačítko | Dělá |
|---|---|
| {{ui:Potlačit}} / {{ui:Obnovit}} | Vypne nebo zapne prvek. Prvky, které ho potřebují, se při vypnutí nepostaví |
| {{ui:Vrátit zpět sem}} | Přestaví jen prvky nad tímto. Nové prvky se vloží na lištu návratu |
| {{ui:Posunout nahoru}} / {{ui:Posunout dolů}} | Změní pořadí, pokud by nic, co používá, neskončilo pod ním. Jinak zešedne s důvodem |
| {{ui:Smazat}} | Smaže jej a (po dotazu) každý prvek, který jej používá |
| Název | Přejmenuje jej (až 60 znaků) |

Prvky se skicou také vypisují **Kóty skici**, upravitelné přímo na místě.

## Stavy v historii

| Stav | Zobrazení | Význam |
|---|---|---|
| Postaveno | Normální | Vše v pořádku |
| Varování | ⚠ | Postaveno, ale je co zkontrolovat: "Přeurčeno: 1 vazba není potřeba." nebo "Po tomto kroku z dílu nic nezbylo." |
| Chyba | ⚠ chyba, červeně | Nelze postavit; zpráva uvede proč |
| Nehotovo | ⚠ nehotovo | Potřebuje prvek, který selhal, je potlačen nebo vrácen zpět, nebo potřebuje přesné jádro, které tato verze nemá ("Tažení po dráze: zatím není hotové. …") |
| Potlačeno | vypnuto | Vypnuto |
| Vráceno zpět | šedě, pod lištou návratu | Nepostaveno, dokud znovu nepostoupíte vpřed |

## Nastavení dílu

Klikněte do prázdného prostoru, aby nic nebylo vybráno. Pravý panel ukáže **Díl**:

- **Název**: název dílu, použitý pro názvy souborů a pole razítka výkresu (až 120 znaků).
- **Křivky**: viz níže.

### Rozlišení křivek

Mesh jádro staví těleso samo z rovných fazet, takže pohled, STL, 3MF, fasetový STEP, objem a pohledy výkresu všechny sledují **Křivky**: kolik fazet na celou otáčku.

| Nastavení | Fazet na otáčku | Objem kulatého tvaru |
|---|---|---|
| Hrubé (32 na otáčku) | 32 | Asi o 0.64 % pod skutečnou hodnotou |
| Normální (64 na otáčku) | 64 | Asi o 0.16 % pod (výchozí) |
| Jemné (128 na otáčku) | 128 | Asi o 0.04 % pod |
| Velmi jemné (256 na otáčku) | 256 | Asi o 0.01 % pod |

Jemnější křivky dají hladší exporty a pohledy, ale pomalejší přestavování. Nastavení se uloží do souboru dílu.

## Zatím není hotové

Proměnlivé poloměry zaoblení, zaoblení a sražení na kulatých hranách, skořepiny otevírající zakřivené plochy, úkosy na zakřivených plochách, tažení po dráze, lofting, žebro, tělesa STEP s přesnými zakřivenými plochami, nová tělesa, úkosy, "až k" ploše nebo vrcholu a odkazy na plochy a hrany tělesa vyžadují přesné jádro, které tato verze nemá. Také zatím nejsou hotové: závitové a zapuštěné díry. Viz [Co ještě není hotové](topic:not-built-yet).
