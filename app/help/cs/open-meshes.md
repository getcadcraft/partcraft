---
title: Otevření STL, OBJ nebo 3MF jako plného tělesa
summary: Proměňte síť ze skeneru, webu pro 3D tisk nebo jiného programu na těleso, které lze řezat, přidávat a kreslit na něj náčrt; co PartCraft na cestě opraví a co opravit nemůže.
keywords: stl, obj, 3mf, síť, síť na těleso, převod sítě, sken, vodotěsný, opravy, díry, mezery, jednotky, osa nahoru, importované těleso, ploché plochy
from: 7b948471
---

PartCraft otevírá sítě STL, OBJ a 3MF jako **plná tělesa**. Těleso se chová jako každé jiné: řežte ho, přidávejte k němu, vrtejte, vzorujte, použijte jej v sestavě nebo pro obrábění a kreslete na jeho rovné plochy náčrt. Vlastní historii nemá: síť je jen trojúhelníky, takže její rozměry nelze měnit, pouze k ní přidávat nebo z ní odebírat.

## Otevření sítě

1. Zvolte {{ui:Otevřít}} nebo stiskněte {{key:Mod+O}} a vyberte soubor `.stl`, `.obj` nebo `.3mf`. Nebo jej přetáhněte do 3D pohledu.
2. PartCraft soubor načte, bezpečně opraví, co může, a ukáže, co našel: počet trojúhelníků a bodů, každou opravu a zda síť nyní **uzavírá**.
3. Zkontrolujte **Jednotky v souboru** a **Nahoru v souboru**. STL a OBJ své jednotky neuvádějí, takže milimetry jsou odhad; soubor 3MF uvádí své vlastní. Řádek **Velikost zde** ukazuje velikost tělesa s vaší volbou, takže díl, který přišel 25,4krát příliš malý, je snadno poznat (byl v palcích).
4. Je-li díl na obrazovce prázdný, zvolte {{ui:Otevřít jako těleso}}. Pokud už má prvky, zvolte **Použít to pro** (přidat k dílu, odečíst od něj, nebo ponechat jen průnik), pak {{ui:Přidat k tomuto dílu}}, nebo {{ui:Nový díl}}, chcete-li začít znovu se sítí.

V historii se objeví prvek **Imported1**. Stavový řádek hlásí například: „bracket.stl je plné těleso: 15200.512 mm³, 14 rovinných ploch k náčrtu.“

## Co PartCraft opravuje

| Oprava | Co to znamená |
|---|---|
| Spojené zdvojené rohy | STL opakuje každý roh u každého ze svých trojúhelníků; spojí se v jeden bod |
| Odstraněné trojúhelníky bez plochy | Úzké pásy, jejichž rohy leží na jedné přímce |
| Odstraněné zdvojené trojúhelníky | Trojúhelník zapsaný dvakrát se zachová jednou; dva protichůdně orientované (vnitřní stěna) se odstraní oba |
| Uzavřené malé mezery | Hrany, které se téměř stýkají (do tisíciny velikosti dílu), se spojí |
| Vyplněné díry | Otvor, jehož okraj leží rovně, se vyplní bez ohledu na velikost; zkřivený jen tehdy, je-li malý |
| Trojúhelníky otočené ven | Trojúhelníky směřující špatným směrem se otočí podle sousedů a celý povrch se nasměruje ven |

## Když síť neuzavírá

Těleso potřebuje povrch bez otvorů. Když PartCraft nemůže síť uzavřít, dialog uvede, kolik otvorů a otevřených hran zbylo, a žádné těleso k přidání není. Uzavřete otvory v programu, který síť vytvořil, nebo ji exportujte znovu jako uzavřenou (vodotěsnou) síť a otevřete ji znovu.

PartCraft otvor nechá být, když by vyplnění mohlo uhodnout špatně: velkou zkřivenou díru nebo dva otvory ve stejné rovině (chybějící prstencová plocha, kde by vyplnění každého okraje zakrylo díru uprostřed). Hlášena je také hrana sdílená více než dvěma trojúhelníky: takový povrch nemá jeden jasný vnitřek.

## Kreslení náčrtu na rovné plochy

Rovné oblasti z mnoha trojúhelníků se sloučí každá do jedné **rovinné plochy**, aby na ně šel náčrt: klikněte na plochu a zvolte {{ui:Skica na této ploše}}. Plocha, která se později ořízne nebo k ní se přidá, zůstane plochou. Kulaté oblasti (díra, zaoblení) zůstávají trojúhelníky: nejsou to plochy, které lze vybrat, a pohled kreslí jejich obrys podle úhlu mezi trojúhelníky.

## Změna později

Vyberte **Imported1**, abyste viděli soubor, ze kterého pochází, kolik má trojúhelníků a co bylo opraveno. **Jednotky v souboru**, **Nahoru v souboru** a **Použít to pro** lze změnit přímo tam; každá změna je jeden krok {{ui:Zpět}}.

## Kde se uchovává

Opravená síť je uložena **uvnitř** souboru `.partcraft.json`, takže soubor sítě už nepotřebujete. Soubor dílu s tělesem ze sítě je verze 5: starší PartCraft jej podle verze odmítne. Síť s 200 000 trojúhelníky přidá asi 1,2 MB.

## Limity

- Nejvýše 3 miliony trojúhelníků a 200 MB v jednom souboru.
- Těleso vytvořené ze sítě staví sítěové jádro. S přesným jádrem zapnutým (jen pro vývojáře) to řekne a nepostaví se.
- Materiály OBJ, souřadnice textur a volné křivky se vynechají; barvy, materiály a podpůrné objekty 3MF se vynechají (dialog uvede, kolik objektů bylo přeskočeno).
- Těleso je tak jemné jako síť: hrubý STL dá hrubé kulaté plochy. Díry, které do něj vyvrtáte, jsou stejně kulaté jako vaše vlastní prvky.
