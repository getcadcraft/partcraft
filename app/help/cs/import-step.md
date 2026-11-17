---
title: Otevření souboru STEP a práce s ním
summary: Přineste model STEP od dodavatele nebo jiného CAD programu do PartCraftu jako těleso, jako nový díl nebo přidaný k aktuálnímu, nastavte, kudy je nahoru, a přidejte k němu skici a prvky.
keywords: step, stp, import, otevřít step, ap203, ap214, ap242, model dodavatele, prosté těleso, importované těleso, osa nahoru, z nahoru, y nahoru, trojúhelníky, fasety, STEP sestavy
from: ca0eca5f
---

PartCraft otevírá soubory STEP (`.step` nebo `.stp`, AP203, AP214 a AP242) jako **tělesa**, na která můžete kreslit skici, řezat, vrtat a kombinovat je s vlastními prvky. Těleso nemá vlastní historii: nelze změnit rozměry, s nimiž bylo vytvořeno, lze jen přidávat nebo z něj odebírat.

Tato verze sestavuje každý díl sítovým jádrem, takže soubor STEP se **čte jako trojúhelníky**: rovné plochy zůstanou rovné a zakřivené plochy (válce, kužely, koule, torusy, plochy B-spline) se změní na mnoho malých rovných ploch. Jeho objem je v rámci zlomku procenta přesný. Zachování zakřivených ploch přesně vyžaduje přesné jádro, které v této verzi není.

## Otevření souboru STEP

1. Zvolte {{ui:Otevřít}} nebo stiskněte {{key:Mod+O}} a vyberte soubor `.step` nebo `.stp`. Nebo jej přetáhněte do 3D pohledu.
2. PartCraft soubor přečte a ukáže, co našel, například: "Soubor AP214: 1 těleso, 10 ploch, čteno jako trojúhelníky." Níže je uveden počet trojúhelníků, cokoli, co se muselo vynechat nebo spojit, a zda výsledek tvoří uzavřené těleso.
3. Zkontrolujte **Nahoru v souboru**. Soubor STEP uvádí vlastní jednotku (milimetry, palce, metry…); PartCraft ji převede na milimetry, takže **Jednotky v souboru** ukáže Milimetry, "soubor to tak uvádí". **Velikost zde** ukazuje, jak velké bude.
4. Zvolte {{ui:Otevřít jako těleso}} pro prázdný díl, nebo {{ui:Přidat k tomuto dílu}} / {{ui:Nový díl}}, pokud díl už má prvky. Přidání se zeptá, co má **Použít k** udělat: přidat, odečíst, nebo ponechat jen překryv.

V historii se objeví prvek **Imported1** a stavový řádek například napíše: "plate.step je těleso: 57995.937 mm³, 6 rovných ploch, na které lze kreslit skici."

## STEP sestavy

Sestava přijde jako **jedno těleso** se všemi díly tam, kde je soubor umístil ("3 díly umístěné v souboru přijdou tam, kde stojí"). Díl použitý dvakrát přijde dvakrát. Názvy dílů a strom sestavy se nezachovají.

## Nastavení směru nahoru

Většina CAD programů používá Z nahoru; PartCraft používá Y nahoru. Ve výchozím nastavení PartCraft soubor otočí tak, aby jeho Z ukazovalo zde nahoru. Pokud díl přijde ležet na boku, vyberte **Imported1** a nastavte **Nahoru v souboru** na **Y nahoru**. **Jednotky v souboru** a **Použít k** lze změnit také tam; každá změna je jeden krok zpět.

## Navazování na těleso

- Klikněte na rovnou plochu tělesa a zvolte {{ui:Skica na této ploše}}. Rovné plochy modelu STEP si při přepočtu tělesa zachovají své místo.
- Přidávejte řezy, otvory, výstupky, pole a zrcadlení jako u jakéhokoli dílu.
- Velikost zkontrolujte v poli **Díl**: objem, plocha povrchu, rozměry.

Zaoblení, sražení hran a skořepiny vyžadují přesné jádro, stejně jako u každého dílu v této verzi ([Sítové jádro](topic:solid-kernels)).

## Kde se uchovává

Trojúhelníky jsou uloženy **uvnitř** souboru `.partcraft.json`, takže soubor dílu je soběstačný: soubor STEP už nepotřebujete.

## Hlášení

| Hlášení | Co znamená |
|---|---|
| '"part.stp" není soubor STEP (nezačíná na ISO-10303-21).' | Soubor není prostý text STEP. Požádejte odesílatele o soubor STEP AP203, AP214 nebo AP242 |
| "Soubor STEP nelze přečíst: jeho datová část chybí nebo je poškozena." | Soubor je useknutý nebo poškozený. Zkopírujte jej znovu |
| "Soubor STEP neobsahuje žádné těleso ani plochu: není co importovat." | Soubor obsahuje jen výkresy, body nebo data. Požádejte o těleso |
| "Tento soubor STEP je pro import zde příliš velký (přes 60 MB)." a další limity čtečky (položky, plochy, trojúhelníky) | Zjednodušte model u zdroje, nebo posílejte díly po jednom |
| "… poškozené řádky v souboru byly přeskočeny." | Některé řádky nešlo přečíst; zbytek se načetl. Zkontrolujte těleso |
| "… plochy nešlo převést na trojúhelníky a byly vynechány." | Tyto plochy zanechávají díry, které PartCraft se snaží vyplnit; pokud se těleso neuzavře, nepřidá se |
| "… plochy druhu, který se nečte (…), byly přeskočeny." | Vzácný typ plochy. Požádejte o model s prostými nebo B-spline plochami |
| "Neuzavírá se …" | Plochy netvoří uzavřené těleso (plošný model nebo vynechané plochy). PartCraft zobrazí otvory a nic nepřidá |

## Omezení

- Zakřivené plochy se kreslí a měří jako ploché fasety, jako u každého dílu, který tato verze sestavuje. PartCraft u tělesa ponechá vlastní rovné plochy souboru, válce, kužely, koule a torusy, takže {{ui:Export}} › {{ui:STEP AP242 (přesné těleso)}} je zapíše zpět jako skutečné plochy, díry jako díry, spolu s prvky, které přidáte. Plochy, které soubor udává jako spline, tažení po dráze nebo rotační plochy, zůstanou v exportu fasetami. Díl uložený před verzí 0.9.1 nemá uchované plochy: otevřete soubor STEP znovu, abyste je získali.
- {{ui:Export}} › {{ui:DXF skici nebo rovné plochy}} při výběru rovné plochy zapíše kruhový otvor souboru jako skutečnou kružnici.
- Barvy, názvy těles, struktura sestavy a PMI (tolerance v souboru) se nečtou.
- Kromě STEP PartCraft otevírá sítě STL, OBJ a 3MF ([Otevření STL, OBJ nebo 3MF](topic:open-meshes)) a soubory `.3dm` ([Otevření modelu .3dm](topic:open-3dm-files)) jako tělesa. IGES a nativní soubory jiných programů nejsou podporovány.
- Díl s tělesem STEP importovaným sestavou, která měla přesné jádro, si zachová text STEP; tato verze tento prvek přeskočí ("ještě není hotovo"). Otevřete soubor STEP znovu, aby se načetl jako trojúhelníky.
