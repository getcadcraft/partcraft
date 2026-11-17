---
title: Soubory: otevření, uložení a export
summary: Soubory dílů a sestav, které PartCraft otevírá a ukládá, každý exportní formát a co obsahuje, kam soubory jdou a co se mění offline nebo mezi prohlížeči.
keywords: otevřít, uložit, export, stáhnout, soubor, partcraft.json, soubor sestavy, stl, 3mf, step, dxf, pdf, kde jsou moje soubory, offline, uložit jako
from: e5fbc7e3
---

PartCraft pracuje se soubory na vašem počítači. Díl nikdy nenahrává a žádný účet ani cloudové úložiště neexistuje. Cloudové ukládání zatím není k dispozici.

## Co PartCraft otevře

| Soubor | Přípona | Jak |
|---|---|---|
| Díl PartCraftu | `.partcraft.json` | {{ui:Otevřít}}, {{key:Mod+O}}, nebo jej přetáhněte do 3D pohledu |
| Sestava PartCraftu | `.partcraft-asm.json` | Stejně: PartCraft pozná, o který druh jde |
| Těleso STEP | `.step`, `.stp` | Těleso čtené jako trojúhelníky: [Otevření souboru STEP a stavba na něm](topic:import-step) |

Sítě STL, OBJ a 3MF se také otevřou jako tělesa ([Otevření STL, OBJ nebo 3MF](topic:open-meshes)), stejně jako soubory `.3dm` ([Otevření modelu .3dm](topic:open-3dm-files)). DXF, IGES a vlastní soubory dílů jiných programů otevřít nelze (viz [Co ještě není hotové](topic:not-built-yet)).

Pravidla při otevírání:

- Název souboru dílu nebo sestavy musí končit na `.json` a soubor musí být menší než 50 MB.
- Soubory se kontrolují dřív, než se cokoli zobrazí. Poškozený nebo upravený soubor je odmítnut s prostým důvodem, například "Toto není soubor PartCraftu."
- Soubor uložený novějším PartCraftem je odmítnut: "Tento soubor byl uložen novějším PartCraftem (verze souboru 3); tato verze čte verzi 2." Starší soubory se otevřou.
- Pokud má díl na obrazovce neuložené změny, PartCraft se nejdřív zeptá: {{ui:Zrušit}}, {{ui:Zahodit změny}} nebo {{ui:Nejdřív uložit}}.

## Ukládání

{{ui:Uložit}} nebo {{key:Mod+S}} uloží to, co je na obrazovce:

- U dílu: `<part name>.partcraft.json`, celá historie (skici, vazby, kóty, prvky, pozice návratu), část výkresu se řezy, detaily a poznámkami GD&T a celý text každého tělesa STEP importovaného v dřívějším sestavení. Prvky, které tato verze nedokáže postavit, se uloží beze změny. Samotné těleso se neukládá; PartCraft jej při otevření souboru přestaví z historie.
- U sestavy: `<assembly name>.partcraft-asm.json`, se **všemi díly uvnitř**. Jeden soubor nese celou sestavu, takže ji můžete poslat samotnou.

Uložení je **stažení**. Prohlížeč umístí soubor do složky stažených souborů, nebo se zeptá, kam jej uložit, pokud to tak máte nastavené. Při dalším uložení vznikne nové stažení; prohlížeč může soubor pojmenovat `Part1 (1).partcraft.json` místo nahrazení starého. Přejmenujte nebo přesuňte soubory v {{pick:mac=Finder|windows=Průzkumník souborů|linux=vašem správci souborů}} podle potřeby.

Znaky v názvu dílu jiné než písmena, číslice, mezery, `_`, `.` a `-` se v názvu souboru změní na `_`.

:::tip
Většina prohlížečů má nastavení, které se ptá, kam uložit každé stažení. Zapněte je, pokud chcete pokaždé volbu "Uložit jako": v Chrome a Edge je to v nastavení pod Stahování; ve Firefoxu v Obecné, Soubory a aplikace; v Safari v Obecné, Umístění stahovaných souborů.
:::

Více o tom, kam stažené soubory jdou a jak je bezpečně uchovat: [Kde jsou vaše soubory](common:your-files).

## Export

Nabídka {{ui:Export}} zapisuje jiné formáty. Každý je stažení a pojmenuje se podle dílu.

| Položka nabídky | Soubor | Co obsahuje |
|---|---|---|
| {{ui:STL, pro 3D tisk}} | `<name>.stl` | Binární STL trojúhelníků tělesa, milimetry, **Z nahoru** |
| {{ui:3MF, pro 3D tisk}} | `<name>.3mf` | 3MF s tělesem jako jedním objektem, milimetry, **Z nahoru** |
| {{ui:STEP AP242 (přesné těleso)}} | `<name>.step` | Jedno přesné těleso, milimetry, Z nahoru: kulaté plochy jako skutečné válce, kužely, koule a tori. STEP pro jiné CAD a CAM programy |
| {{ui:STEP AP214 (přesné těleso)}} | `<name>.step` | Stejné přesné těleso ve starším schématu AP214 |
| {{ui:STEP (fasetovaný, síťové jádro)}} | `<name>.step` | Těleso z rovných ploch ze sítě: **kulaté povrchy jsou mnoho malých rovných fazet**. Milimetry, ve vlastních osách PartCraftu (Y nahoru). Pro program, který přesný soubor odmítne |
| {{ui:DXF skici nebo rovné plochy}} | `<name> - <sketch>.dxf` nebo `<name> - face.dxf` | DXF R12. Skica: úsečky, oblouky, kružnice a body ve vlastních souřadnicích skici, na vrstvách PROFILE, CONSTRUCTION a POINTS. Vybraná rovná plocha: její obrysy jako uzavřené mnohočáry (kulaté hrany jako fasety) |
| {{ui:Výkres (PDF): pohledy, řez, detail, GD&T}} | `<name> - drawing.pdf` | Výkresový list A3: tři pohledy, izometrický, řez a detail, pokud jsou nastaveny, celkové rozměry, symboly GD&T, razítko |

:::note
{{ui:STEP AP242 (přesné těleso)}} zapisuje díry, výstupky, zaoblení, kužely, koule a tori na skutečných površích, takže jiný program může díru vybrat jako válec; **Křivky** to nemění. Splajnové boky, modelované závity a importovaná síťová tělesa nemají přesný povrch a zůstanou rovnými fasetami ve stejném tělese; stavový řádek uvede, kolik jich je. {{ui:STEP (fasetovaný, síťové jádro)}} zapíše každou kulatou plochu jako fazety.
:::

- Exporty jsou z dílu na obrazovce. Export je v sestavě vypnutý; export sestavy zatím neexistuje.
- STL, 3MF, fasetový STEP a DXF plochy jsou vždy tvořeny fazetami. Nastavení **Křivky** (v pravém panelu, když nic není vybráno) určuje, jak jemné jsou, od 32 do 256 fazet na otáčku. Před exportem STL nebo 3MF pro hladký tisk zvolte Jemné nebo Velmi jemné.
- PDF výkres používá vestavěné písmo Helvetica čtečky. Znaky, které nedokáže zobrazit, se vytisknou jako "?".

Krok za krokem: [Export pro tisk, STEP a DXF](topic:export-files) a [Tvorba listu výkresu](topic:drawing-pdf).

## Neuložená práce

- PartCraft drží kopii obnovení otevřeného dílu nebo sestavy v tomto prohlížeči chvíli po každé změně, takže pád nebo zavřená karta práci neztratí: při dalším otevření PartCraftu se zeptá "Obnovit práci?". Není to uložení: pro zachování práce uložte do souboru. Viz [Obnovení neuložené práce](common:recover).
- Pokud se pokusíte zavřít kartu nebo obnovit stránku s neuloženými změnami, prohlížeč se zeptá "Opustit web?". To je vlastní okno prohlížeče; PartCraft jeho znění změnit nemůže.
- {{ui:Nový}}, {{ui:Otevřít}} a zavření sestavy se před zahozením neuložených změn ptají.

## Online a offline

Vše se děje na vašem počítači: mesh jádro (program WebAssembly) se stáhne spolu s aplikací a staví geometrii lokálně, a soubory se čtou z disku a zapisují na něj. Žádná data dílu nejdou po síti. Viz [Mesh jádro](topic:solid-kernels).

Chcete-li pracovat bez jakéhokoli připojení, uložte PartCraft pro offline použití, když jste online: v liště aplikace vyberte {{ui:Uložit pro offline}} a počkejte, zatímco počítá ("Ukládání 40 z 212"), dokud nenapíše **Připraveno offline**. Uložená kopie obsahuje 3D knihovnu a mesh jádro, takže potom modelování, ukládání, každý export i výkresy fungují offline. Pokud píše **Nelze uložit**, klikněte na něj a zkuste to znovu online; **Offline není k dispozici** znamená, že toto okno prohlížeče nemůže uchovat kopii (soukromá okna a některé spravované počítače). Když je kopie uložena, kliknutí na **Připraveno offline** nabídne {{ui:Uložit znovu (získat nejnovější verzi)}} a {{ui:Odebrat offline kopii}}. Podrobnosti: [Práce offline](common:offline).

:::online
Jste online. I bez uložení pro offline můžete pracovat dál, jakmile se PartCraft načte a čip ve stavovém řádku ukazuje "Mesh jádro", i když připojení vypadne. Jen neobnovujte stránku, dokud nebudete zpět online.
:::

:::offline
Jste offline. Pokud je PartCraft už otevřený, pracujte dál; ukládání a export fungují. Pokud lišta aplikace ukazuje **Připraveno offline**, PartCraft se otevře i od nuly bez připojení; jinak tuto kartu neobnovujte.
:::

## Rozdíly mezi prohlížeči

- **Stahování.** Každý prohlížeč má vlastní složku stažených souborů a vlastní způsob dotazu. Pokud se prohlížeč zeptá, zda tento web smí stahovat soubory, povolte to, jinak ukládání a export nemohou fungovat.
- **Přetažení** souboru do pohledu funguje v Chrome, Edge, Firefoxu a Safari.
- **Soubory z telefonu nebo tabletu.** Na iPhonu a iPadu Otevřít ukáže aplikaci Soubory; uložené soubory jdou do Souborů, Stažené. Na Androidu jdou do složky Stažené.

Obsah souborů se mezi prohlížeči ani operačními systémy neliší.
