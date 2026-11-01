---
title: Soubory: otevírání, ukládání a export
summary: Soubory dílů a sestav, které PartCraft otevírá a ukládá, každý exportní formát a co zachovává, kam soubory míří a co se mění offline nebo mezi prohlížeči.
keywords: otevřít, uložit, export, stáhnout, soubor, partcraft.json, soubor sestavy, stl, 3mf, step, dxf, pdf, kde jsou mé soubory, offline, uložit jako
from: c15c2c48
---

PartCraft pracuje se soubory ve vašem počítači. Žádný díl nenahrává a nepoužívá se žádný účet ani cloudové úložiště. Ukládání do cloudu zatím není k dispozici.

## Co PartCraft otevírá

| Soubor | Přípona | Jak |
|---|---|---|
| Díl PartCraftu | `.partcraft.json` | {{ui:Otevřít}}, {{key:Mod+O}} nebo pustit na 3D pohled |
| Sestava PartCraftu | `.partcraft-asm.json` | Totéž: PartCraft pozná, o jaký druh jde |
| Těleso STEP | `.step`, `.stp` | Tělesná část čtená jako trojúhelníky: [Otevření souboru STEP a stavba na něm](topic:import-step) |

Sítě STL, OBJ a 3MF se také otevírají jako tělesa ([Otevření STL, OBJ nebo 3MF](topic:open-meshes)) a stejně tak soubory `.3dm` ([Otevření modelu .3dm](topic:open-3dm-files)). Soubory DXF, IGES a vlastní soubory dílů jiných programů otevřít nelze (viz [Co ještě není hotovo](topic:not-built-yet)).

Pravidla při otevírání:

- Název souboru dílu nebo sestavy musí končit na `.json` a soubor musí mít méně než 50 MB.
- Soubory se před zobrazením kontrolují. Poškozený nebo upravený soubor je odmítnut s jasným důvodem, například „Toto není soubor PartCraftu.“
- Soubor uložený novějším PartCraftem je odmítnut: „Tento soubor uložil novější PartCraft (verze souboru 3); tento čte verzi 2.“ Starší soubory se otevřou.
- Pokud má díl na obrazovce neuložené změny, PartCraft se nejdřív zeptá: {{ui:Zrušit}}, {{ui:Zahodit změny}} nebo {{ui:Nejdřív uložit}}.

## Ukládání

{{ui:Uložit}} nebo {{key:Mod+S}} uloží to, co je na obrazovce:

- U dílu: `<název dílu>.partcraft.json`, úplnou historii (skici, vazby, kóty, prvky, polohu lišty vrácení), poznámky o řezu, detailu a GD&T na listu výkresu a úplný text jakéhokoli tělesa STEP importovaného v dřívějším sestavení. Prvky, které tato verze nedokáže sestavit, se uloží zpět beze změny. Samotné těleso se neukládá; PartCraft jej při otevření souboru znovu sestaví z historie.
- V sestavě: `<název sestavy>.partcraft-asm.json` s **každým dílem uvnitř**. Jeden soubor nese celou sestavu, takže jej můžete poslat samostatně.

Uložení je **stažení**. Prohlížeč soubor uloží do složky se staženými soubory, nebo se zeptá, kam jej dát, pokud jste to tak nastavili. Opětovné uložení vytvoří nové stažení; prohlížeč jej může pojmenovat `Part1 (1).partcraft.json`, místo aby starý soubor nahradil. Soubory přejmenujte nebo přesuňte v {{pick:mac=Finderu|windows=Průzkumníku souborů|linux=správci souborů}} podle libosti.

Znaky jiné než písmena, číslice, mezery, `_`, `.` a `-` v názvu dílu se v názvu souboru změní na `_`.

:::tip
Většina prohlížečů má nastavení, které se zeptá, kam uložit každé stažení. Zapněte je, pokud chcete pokaždé volbu „Uložit jako“: v Chrome a Edge je v nastavení u Stažených souborů; ve Firefoxu v Obecné, Soubory a aplikace; v Safari v Obecné, Umístění stažených souborů.
:::

Více o tom, kam stažené soubory míří a jak soubory ochránit: [Kam míří vaše soubory](common:your-files).

## Export

Nabídka {{ui:Export}} zapisuje další formáty. Každý je stažení, pojmenované podle dílu.

| Položka nabídky | Soubor | Co obsahuje |
|---|---|---|
| {{ui:STL, pro 3D tisk}} | `<název>.stl` | Binární STL trojúhelníků tělesa, milimetry, **Z nahoru** |
| {{ui:3MF, pro 3D tisk}} | `<název>.3mf` | 3MF s tělesem jako jedním objektem, milimetry, **Z nahoru** |
| {{ui:STEP AP242 (přesné těleso)}} | `<název>.step` | V této verzi zatím není hotovo (zašedlé): potřebuje přesné jádro |
| {{ui:STEP AP214 (přesné těleso)}} | `<název>.step` | V této verzi zatím není hotovo (zašedlé) |
| {{ui:STEP (fasetovaný, síťové jádro)}} | `<název>.step` | Těleso z rovných ploch ze sítě: **kulaté povrchy jsou mnoho malých rovných facet**. Milimetry, ve vlastních osách PartCraftu (Y nahoru). STEP, který se v této verzi používá pro jiné programy CAD |
| {{ui:DXF skici nebo rovné plochy}} | `<název> - <skica>.dxf` nebo `<název> - face.dxf` | DXF R12. Skica: úsečky, oblouky, kružnice a body ve vlastních souřadnicích skici, na vrstvách PROFILE, CONSTRUCTION a POINTS. Vybraná rovná plocha: její obrysy jako uzavřené mnohočáry (kulaté hrany jako jejich facety) |
| {{ui:Výkres (PDF): pohledy, řez, detail, GD&T}} | `<název> - drawing.pdf` | List výkresu A3: tři pohledy, izometrie, řez a detail, pokud jsou nastaveny, celkové rozměry, symboly GD&T, razítko |

:::note
{{ui:STEP AP242 (přesné těleso)}} a {{ui:STEP AP214 (přesné těleso)}} v této verzi zatím nejsou hotové: použijte {{ui:STEP (fasetovaný, síťové jádro)}}. Má správný tvar a objem, ale každá kulatá plocha je mnoho rovných facet, takže jiné programy nemohou vybrat díru jako válec. Pokud na tom záleží, nastavte nejdřív jemnější **Křivky**.
:::

- Exporty se týkají dílu na obrazovce. V sestavě je export vypnutý; export sestavy zatím není.
- STL, 3MF, fasetovaný STEP a DXF plochy se vždy skládají z facet. Nastavení **Křivky** (v pravém panelu, když není nic vybráno) určuje jejich jemnost, od 32 do 256 facet na otáčku. Před exportem STL nebo 3MF pro hladký tisk zvolte Jemné nebo Velmi jemné.
- Výkres v PDF používá vestavěné písmo Helvetica čtečky. Znaky, které nezobrazí, se vytisknou jako „?“.

Krok za krokem: [Export pro tisk, STEP a DXF](topic:export-files) a [Vytvoření listu výkresu](topic:drawing-pdf).

## Neuložená práce

- PartCraft uchovává záložní kopii otevřeného dílu nebo sestavy v tomto prohlížeči chvíli po každé změně, takže pád nebo zavřená karta ji neztratí: při dalším otevření PartCraftu se zeptá „Obnovit vaši práci?“. Není to uložení: uložte do souboru, abyste práci zachovali. Viz [Obnovení neuložené práce](common:recover).
- Pokud se pokusíte zavřít kartu nebo stránku znovu načíst s neuloženými změnami, prohlížeč se zeptá „Opustit web?“. To je vlastní okno prohlížeče; PartCraft jeho znění změnit nemůže.
- {{ui:Nový}}, {{ui:Otevřít}} a zavření sestavy se před zahozením neuložených změn zeptají.

## Online a offline

Všechno probíhá ve vašem počítači: síťové jádro (program WebAssembly) se stahuje s aplikací a staví geometrii lokálně a soubory se čtou z disku a zapisují na disk. Po síti nejdou žádná data dílů. Viz [Síťové jádro](topic:solid-kernels).

Chcete-li pracovat zcela bez připojení, uložte PartCraft pro offline použití, dokud jste online: zvolte {{ui:Uložit pro offline}} v liště aplikace a počkejte, až dopočítá („Ukládání 40 z 212“) a zobrazí **Připraveno offline**. Uložená kopie obsahuje 3D knihovnu a síťové jádro, takže potom funguje offline modelování, ukládání, každý export i výkresy. Pokud říká **Nepodařilo se uložit**, klikněte na něj a zkuste to znovu, dokud jste online; **Offline není dostupné** znamená, že toto okno prohlížeče nemůže kopii uchovat (soukromá okna a některé spravované počítače). S uloženou kopií nabízí kliknutí na **Připraveno offline** {{ui:Uložit znovu (získat nejnovější verzi)}} a {{ui:Odebrat offline kopii}}. Podrobnosti: [Práce offline](common:offline).

:::online
Jste online. I bez uložení pro offline použití můžete, jakmile se PartCraft načetl a čip ve stavovém řádku říká „Síťové jádro“, pracovat dál, i když se připojení přeruší. Jen stránku znovu nenačítejte, dokud nebudete zase online.
:::

:::offline
Jste offline. Pokud je PartCraft už otevřený, pracujte dál; ukládání i export stále fungují. Pokud lišta aplikace říká **Připraveno offline**, PartCraft se také otevře od nuly bez připojení; jinak tuto kartu znovu nenačítejte.
:::

## Rozdíly mezi prohlížeči

- **Stahování.** Každý prohlížeč má vlastní složku se staženými soubory a vlastní způsob dotazování. Pokud se prohlížeč zeptá, zda tento web smí stahovat soubory, povolte to, jinak ukládání a export nemohou fungovat.
- **Přetažení** souboru na pohled funguje v Chrome, Edge, Firefoxu a Safari.
- **Soubory z telefonu nebo tabletu.** Na iPhonu a iPadu Otevřít zobrazí aplikaci Soubory; uložené soubory jdou do Souborů, Stažené. V Androidu jdou do složky Stažené.

V tom, co soubory obsahují, není mezi prohlížeči ani operačními systémy žádný rozdíl.
