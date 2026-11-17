---
title: Spliny, oříznutí, odsazení a další nástroje skic
summary: Kreslení splinů procházejících body a splinů s řídicími body, oříznutí a prodloužení křivek, odsazení řetězce, zrcadlení podle osy, mnohoúhelníky a drážky, vzory skicové geometrie a promítání hran dílu.
keywords: spline, bod na křivce, řídicí bod, b-spline, nurbs, křivka, oříznutí, prodloužení, odsazení, zrcadlení, souměrnost, mnohoúhelník, šestiúhelník, drážka, vzor, lineární vzor, kruhový vzor, promítnutí, promítnout hranu, zahrnutí, převod prvků
from: 3ecb166a
---

Tyto nástroje fungují v otevřené skici. {{ui:Spline}} a {{ui:Oříznout}} jsou na panelu nástrojů. Ostatní jsou pod {{ui:Více}} na konci nástrojů skici. Každý nástroj tvoří jeden krok pro zpět a {{key:Esc}} jej zastaví. Základní kreslicí nástroje najdete v [Nakreslete první skicu](topic:sketch-basics).

## Spliny

Spline je hladká křivka. Existují dva druhy.

| Nástroj | Klávesa | Jak kreslit |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Klikněte na body, kterými křivka prochází. Ukončete klávesou {{key:Enter}}, {{key:Esc}}, pravým tlačítkem nebo dvojklikem. Kliknutím znovu na první bod spline uzavřete |
| {{ui:Spline s řídicími body}} (pod {{ui:Více}}) | | Klikněte na řídicí body. Křivka je k nim přitahována, ale dotýká se jen prvního a posledního. Čárkovaný řídicí mnohoúhelník se zobrazí při kreslení i potom |

- **Body jsou body skici.** Přetáhněte je, nebo jim přiřaďte vazby a kóty jako kterémukoli jinému bodu. První bod splinu se může přichytit ke konci úsečky, čímž se spojí vazbou ztotožnění.
- **Tečna v konci.** Vyberte úsečku, oblouk nebo spline, který se setkává s jedním koncem splinu, potom spline a zvolte {{ui:T Tečně}}. Směr konce splinu pak sleduje úsečku. Tečna mimo konce splinu se odmítne: "Tečna ke splinu vyžaduje, aby úsečka, oblouk nebo spline se setkávaly s jedním z jeho konců."
- **Konce.** Bez vazby tečnosti jsou konce splinu s body na křivce přirozené (žádné zakřivení na samém konci). Křivka je kubická a prochází každým bodem; rozestupy určují vzdálenosti mezi body.
- **Uzavřené spliny** tvoří profil samy. Otevřené spliny spojují úsečky a oblouky do uzavřené smyčky jako každá jiná křivka.
- Smazání bodu uvnitř splinu odstraní tento bod a spline zůstane, dokud má alespoň dva body (u uzavřeného tři).

{{ui:Vytáhnout}} a {{ui:Rotace}} vytvářejí spline jádrem sítě z krátkých přímých kusů (skutečné křivky vyžadují přesné jádro: v této verzi ještě není hotovo). Export DXF zapíše spline jako mnohočáru, která zůstane do 0.01 mm od křivky, protože DXF R12 entitu spline nemá.

## Oříznutí a prodloužení

| Nástroj | Klávesa | Jak |
|---|---|---|
| {{ui:Oříznout}} | {{key:T}} | Ukažte na křivku: část, která by se odstranila, se zobrazí červeně až k nejbližším průsečíkům. Kliknutím ji odstraníte. Křivka, která neprotíná nic, se odstraní celá |
| {{ui:Prodloužit}} (pod {{ui:Více}}) | {{key:E}} | Klikněte na úsečku nebo oblouk poblíž konce, který chcete prodloužit. Prodlouží se až k další křivce, na kterou narazí. Pokud nic v cestě není, zobrazí se: "Tento konec nemá, kam dosáhnout." |

Oříznutí a prodloužení fungují na úsečkách, obloucích, kružnicích a splinech (prodloužení: úsečky a oblouky).

- Oříznutá **kružnice** se stane obloukem. Její kóta poloměru nebo průměru se přenese na oblouk.
- Oříznutí uprostřed úsečky zanechá dvě úsečky, které zůstávají na stejné přímce. Oříznutí uprostřed oblouku zanechá dva oblouky se stejným středem a vazbou stejnosti.
- Oříznutý **spline** se stane splinem s řídicími body, který přesně sleduje původní křivku. Vazba tečnosti na konci, který zůstane, se zachová.
- Nový konec se umístí na křivku, která jej přeřízla (na úsečku, oblouk nebo kružnici, nebo se ztotožní s jejím koncem). Spliny nemohou držet bod, takže spline, který řeže, nepřidá žádnou vazbu.

**Vazby, které už nesedí, se odstraní**, a stavový řádek uvede, kolik jich bylo. Například kóta délky na oříznuté úsečce se odstraní, ale vodorovné nebo rovnoběžné vazby zůstanou.

## Odsazení

1. Zvolte {{ui:Odsadit}} pod {{ui:Více}} nebo stiskněte {{key:O}}.
2. Klikněte na úsečku, oblouk, kružnici nebo spline. Zvýrazní se celý jeho řetězec: všechny křivky navazující konec na konec, až k bodu, kde se setkávají tři nebo více. Chcete-li odsadit jen část řetězce, nejprve vyberte tyto křivky, potom zvolte {{ui:Odsadit}} a klikněte na jednu z nich.
3. Přesuňte ukazatel na stranu, kam kopie půjde. Sleduje ho čárkovaný náhled. Stisknutím {{key:B}} odsadíte na obě strany.
4. Klikněte, zadejte vzdálenost a stiskněte {{key:Enter}}.

Úsečky a oblouky se odsazují přesně. Rohy se prodlouží nebo oříznou, dokud se nesetkají. Kopie má jednu kótu **Odsazení** a ostatní části ji sledují: dvojklikem na kótu změníte celou kopii. Vzdálenost příliš velká pro řetězec se odmítne, například: "Tato vzdálenost je pro tento řetězec příliš velká: strana by se obrátila naruby."

**Spline** se odsazuje novým splinem s body na křivce, který je do 0.001 mm od skutečného odsazení. Tato kopie je pevná: nesleduje pozdější změny a nemá kótu odsazení. Spline v řetězci potřebuje hladké (tečné) spoje na svých koncích.

## Zrcadlení

1. Nástrojem Výběr vyberte, co zrcadlit.
2. Zvolte {{ui:Zrcadlení}} pod {{ui:Více}} nebo stiskněte {{key:M}}.
3. Klikněte na úsečku nebo osovou čáru, podle které se bude zrcadlit.

Každý zrcadlený bod dostane vazbu **Souměrně** ke svému originálu, takže kopie sleduje změnu originálu. Body ležící na ose zrcadlení jsou sdílené a zrcadlené kružnice dostanou vazbu {{ui:= Stejné}}. Pokud nic nebylo vybráno, klikněte na prvky k zrcadlení, stiskněte {{key:Enter}} a potom klikněte na osu zrcadlení.

## Mnohoúhelníky a drážky

| Nástroj | Jak |
|---|---|
| {{ui:Mnohoúhelník}} | Klikněte na střed, potom na roh a zadejte počet stran (3 až 64). Strany jsou stejné a rohy leží na konstrukční kružnici. Okótujte kružnici, abyste určili velikost mnohoúhelníku |
| {{ui:Drážka}} | Klikněte na střed jednoho konce, potom na střed druhého konce, a potom klikem nastavte šířku. Dvě úsečky, tečné ke dvěma stejným půlkruhům |

## Vzory skici

Nejprve vyberte geometrii, potom:

- {{ui:Lineární vzor}}: klikněte na počáteční bod, potom na místo první kopie a zadejte počet kopií (včetně originálu).
- {{ui:Kruhový vzor}}: klikněte na střed a zadejte počet kopií rovnoměrně rozložených v plném kruhu.

Kopie přinášejí s sebou vazby mezi vybranou geometrií (kruhový vzor vynechává vodorovné a svislé vazby). Kopie nejsou spojeny s originálem: změníte-li jednu, ostatní zůstanou beze změny.

## Promítnutí hran dílu

1. Zvolte {{ui:Promítnout hranu}} pod {{ui:Více}}.
2. Klikněte na přímou nebo kruhovou hranu dílu za skicou.

Hrana se přesně zkopíruje na rovinu skici a zafixuje (vazba Zafixovat). Nesleduje pozdější změny dílu. Stisknutím {{key:Q}} ji převedete na konstrukční geometrii. Kružnice nakloněná k rovině skici by se promítla jako elipsa, proto se odmítne. Stejně tak volné hrany a hrany mířící kolmo ze skici. Promítání vyžaduje přesné jádro: v této verzi ještě není hotovo.
