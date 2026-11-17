---
title: Začněte návod v Illustrate
summary: Pracovní prostor Illustrate vytváří návody z vaší konstrukce: pohledy, rozloženou čárovou grafiku s bublinami a seznamem dílů, postupy krok za krokem, animace a interaktivní 3D soubor. Návod je samostatný soubor.
keywords: illustrate, návod, technická ilustrace, dokumentace, rozložený pohled, seznam dílů, pokyny, partcraft-manual
from: e447e0ab
---

**Illustrate** je pracovní prostor pro dokumenty, které lidé potřebují kolem konstrukce: rozložené pohledy s bublinami a seznamem dílů, čárové ilustrace pro návody, postupy krok za krokem, animace a 3D soubor, který zákazník otevře bez CAD. Zvolte {{ui:Illustrate}} v přepínači {{ui:Pracovní prostor}} na začátku panelu nástrojů.

**Návod** je samostatný soubor (`<name>.partcraft-manual.json`). Uchovává kopii tvaru každého dílu, strom produktu a vlastnosti dílů a odkaz zpět na místo, odkud pocházejí, takže můžete na návodu pracovat, zatímco konstrukce pokračuje. Když se konstrukce změní, [Aktualizace návodu podle konstrukce](topic:illustrate-update) přenese změny.

## Vytvoření

Klikněte na {{ui:Nový}} ve skupině {{ui:Návod}}, pak:

- {{ui:Z otevřeného dílu}}: díl otevřený v Design.
- {{ui:Z otevřené sestavy}}: zobrazí se místo toho, když je otevřena sestava; její díly, jejich umístění, čísla dílů, materiály a rozložené pohledy se přenesou.
- {{ui:Ze souboru sestavy…}}: uložený `.partcraft-asm.json`; PartCraft nejprve vytvoří jeho díly.
- {{ui:Z jiného souboru…}}: glTF (.glb, .gltf), OBJ, STL nebo 3MF. Strom a názvy souboru se zachovají a kopie jednoho dílu (stejný tvar umístěný dvakrát) se stanou jedním dílem s množstvím. Soubory STL a OBJ neuvádějí svou jednotku, takže se vás zeptáme. Soubory STL se čtou se Z nahoru; glTF a 3MF uvádějí vlastní.

Dokud je návod otevřen, Illustrate zobrazuje vlastní kopii dílů návodu; díl nebo sestava otevřená v Design je skryta, dokud se nevrátíte do Design.

## Uložení a otevření

{{ui:Uložit}} ve skupině {{ui:Návod}} (nebo {{key:Mod+S}}) uloží návod; {{ui:Otevřít}} jeden otevře. Každá změna v Illustrate je jeden krok v historii návodu: {{ui:Zpět}} a {{ui:Znovu}} působí na návod, dokud je Illustrate otevřen.

## Ještě není hotovo

- Soubory STEP se zatím neotevírají v {{ui:Z jiného souboru…}}. Otevřete STEP místo toho v Design (přijde jako těleso: viz [Otevření souboru STEP a práce s ním](topic:import-step)) a začněte návod {{ui:Z otevřeného dílu}}, nebo jej uložte jako glTF, 3MF, OBJ nebo STL.
- ModelCraft a BimCraft zatím nemohou předat model přímo do Illustrate: uložte jej jako glTF (.glb) a použijte {{ui:Z jiného souboru…}}.

Dále: [Pohledy a vzhledy](topic:illustrate-views).
