---
title: Přesun dílů do jiných modelářů dílů a zpět
summary: Pošlete díl jinému modeláři dílů jako makro, které jej znovu sestaví se živým stromem prvků. Pojmenovaný STEP a otevření seznamu prvků z jiného modeláře ještě nejsou v této verzi hotové.
keywords: makro, ještě není hotovo, swb, vba, strom prvků, zpětný přenos, exportovat makro, cadcraft-sw.json, pojmenovaný step, ap214, globální proměnné, rovnice, nativní díl
from: 97ca61da
---

PartCraft si s SolidWorks vyměňuje díly oběma směry bez souborového formátu, který by nikdo jiný nečetl:

- **Ven:** makro (`.swb`, prostý text), které SolidWorks spustí, aby díl postavil sám, prvek po prvku, se skicami, vazbami, kótami, globálními proměnnými a rovnicemi. Dostanete nativní díl se živým stromem prvků, ne mrtvé těleso.
- **Zpět:** makro, které spustíte uvnitř SolidWorks, zapíše prvky a rovnice dílu do souboru `.cadcraft-sw.json`. Otevření tohoto souboru v PartCraftu ještě není v této verzi hotové (vyžaduje přesné jádro).

:::warning
Nic z toho zatím nebylo testováno v SolidWorks. SolidWorks běží jen ve Windows s licencí a PartCraft tato makra v něm nikdy nespustil. Makra byla napsána podle dokumentace rozhraní API SolidWorks a zde zkontrolována po stránce struktury. Počítejte s tím, že budete muset hlásit problémy; protokol, který makro zapíše, uvede, který krok selhal.
:::

PartCraft nedokáže zapsat soubor `.sldprt`: tento formát je uzavřený. Nativní díl získáte právě přes makro.

## Odeslání dílu jako makra

1. Otevřete díl.
2. Zvolte {{ui:Export}} a potom {{ui:Makro pro SolidWorks (.swb)}}. PartCraft stáhne `<part>.swb`; stavový řádek uvede, že byl zapsán "bez přesného jádra".
3. Dialog uvede, kolik prvků, globálních proměnných a rovnic makro vytvoří, a vypíše vše, co vynechá. Vedle něj se v této verzi neukládá žádný STEP: pokud jej potřebujete, použijte {{ui:Export}} a potom {{ui:STEP (fasetovaný, síťové jádro)}}.
4. V SolidWorks zvolte **Tools > Macro > Run**, vyberte soubor `.swb` a počkejte. Vytvoří nový díl z vaší výchozí šablony dílu, nastaví milimetry a sestaví každý prvek.
5. Na konci zpráva uvede, kolik kroků proběhlo, kolik selhalo a kolik se shodovalo s tělesem PartCraftu. Úplný protokol `<part> macro log.txt` se zapíše vedle makra.

Co makro sestaví:

| PartCraft | V novém dílu |
|---|---|
| Skica na přední, horní nebo pravé rovině | Skica na této rovině s úsečkami, oblouky, kružnicemi, body, vazbami a kótami (pojmenovanými jako v PartCraftu, například `k7`) |
| Skica na ploše | Skica na téže ploše, vybrané podle bodu na ní |
| Skica na pevné rovině | Referenční rovina procházející třemi body a skica na ní |
| Vytažení, řez (slepý, skrz vše, do poloviny, oběma směry, zkosený) | Boss-extrude nebo cut-extrude |
| Rotace, rotační řez | Rotace kolem stejné osové čáry |
| Díra (jednoduchá, zápich, zahloubení, se závitem) | Jeden nebo dva řezy s vlastními skicami (díra se závitem je jen vrtání na jádro závitu; závit se nevytváří) |
| Lineární a kruhový vzor, zrcadlení | Lineární vzor, kruhový vzor, zrcadlení (prvky nebo těleso) |
| Zaoblení, sražení hrany, skořepina | Zaoblení, sražení hrany a skořepina na týchž hranách a plochách, vybraných podle bodů |
| Parametry a rovnice | Globální proměnné a rovnice na přejmenovaných kótách |
| Potlačené prvky, lišta vrácení | Potlačené stejným způsobem; lišta vrácení na stejném místě |

Po každém prvku tělesa makro porovná objem a velikost tělesa s PartCraftem. Když se liší, jednou otočí směr tohoto prvku a znovu zkontroluje; pokud to není lepší, vrátí jej zpět a do protokolu zapíše "Check".

### Co se vynechá

Dialog a začátek makra uvádějí všechno, co se nepřeneslo, s důvodem. Dnes jsou to: importovaná tělesa (místo toho vložte STEP), tažení po dráze, lofting, úkosy, referenční osy a body, koncové podmínky "až do", vytažení jen některých kontur a vše, co na nich závisí. Spliny se změní na křivky procházející jejich body. Tato verze nemá přesné jádro, takže skici na plochách a prvky, které vybírají hrany nebo plochy, se rovněž vynechají.

## Odeslání pojmenovaného STEP

V této verzi ještě není hotovo: {{ui:STEP pro SolidWorks (pojmenovaný, AP214)}} vyžaduje přesné jádro a při jeho výběru se zobrazí "STEP pro SolidWorks: ještě není hotovo. …". S přesným jádrem soubor nese název dílu, milimetry a barvu dílu a staví osu Y nahoru, jak SolidWorks zobrazuje díly (prostý export {{ui:STEP AP214 (přesné těleso)}} staví osu Z nahoru). Písmena s diakritikou v názvu ztrácejí znaménka a ostatní znaky mimo prostý ASCII se změní na `_`.

## Přenesení dílu zpět

Otevření souboru v PartCraftu (krok 3) ještě není v této verzi hotové: zobrazí se "Otevření exportu SolidWorks: ještě není hotovo. …". Výkresová aplikace CadCraft soubor stále otevře a převezme jeho skici.

1. Zvolte {{ui:Soubor}} > {{ui:Export}} > {{ui:Exportovat makro pro přenos dílů zpět (.swb)}}, stáhněte `CadCraftExport.swb` a uložte jej vedle svých dílů.
2. V SolidWorks otevřete díl, zvolte **Tools > Macro > Run** a vyberte `CadCraftExport.swb`. Zapíše `<part>.cadcraft-sw.json` vedle dílu a nic v něm nezmění.
3. V PartCraftu zvolte {{ui:Otevřít}} a vyberte tento soubor, nebo jej přetáhněte do 3D pohledu.
4. S přesným jádrem PartCraft přestaví díl prvek po prvku a ukáže, co udělal: například "5 z 5 prvků převzato ze SolidWorks (Flange.SLDPRT)", každý prvek, který nedokázal převzít ("Nepřevzato: Sweep1 (Sweep)."), a zda objem odpovídá tomu, který zapsal SolidWorks.
5. Uložte jej jako díl PartCraftu tlačítkem {{ui:Uložit}}.

Skici se umístí na základní rovinu, pokud na ní leží, na odpovídající plochu dílu, pokud existuje (takže sledují pozdější úpravy), jinak na pevnou rovinu. Hrany a plochy zaoblení, sražení hran a skořepin se najdou podle bodů a uchovají jako pojmenované odkazy. Globální proměnné se stanou parametry (názvy s mezerami dostanou podtržítka: "Bolt count" se změní na `Bolt_count`) a rovnice se stanou rovnicemi na týchž kótách. Nic se neodhaduje: co nemá protějšek, je vypsáno.

Výkresová aplikace CadCraft otevře tentýž soubor a převezme jeho skici.

:::note
Formát je `cadcraft-sw-export` verze 1, prostý JSON v milimetrech a stupních. Soubor z novějšího makra nebo neplatný se odmítne s uvedením důvodu.
:::
