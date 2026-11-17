---
title: Úprava dílu přes jeho historii
summary: Úprava prvků a skic zpětně, potlačení, vrácení do bodu, vložení prvků dříve, změna pořadí, přejmenování a mazání a vrácení kterékoli z těchto změn.
keywords: historie, strom prvků, strom návrhu, úprava prvku, úprava skici, potlačit, obnovit, vrácení, vrátit zpět, posun vpřed, změna pořadí, přesunout prvek, smazat, přejmenovat, zpět, znovu, přepočítat, nadřazený podřízený, velký díl, mnoho prvků, pomalé přepočítání, 750 prvků
from: 6f75aef4
---

Díl v PartCraft je jeho historie: seznam rovin, skic a prvků vlevo. PartCraft při každé změně přepočítá těleso od začátku tohoto seznamu. Změna čísla na začátku seznamu změní vše, co na něm stojí.

## Úprava prvku

1. Klikněte na prvek v historii (nebo na skicu odsazenou pod ním).
2. Změňte jeho nastavení v pravém panelu. Každá změna se přepočítá ihned.

Tlačítka OK ani Zrušit není: každá změna se použije ihned. Pokud se vám nelíbí, stiskněte {{key:Mod+Z}}.

## Změna hran nebo ploch, které použije zaoblení, sražení nebo skořepina

Poklepejte na prvek v historii, nebo ho vyberte a zvolte {{ui:Vybrat hrany}} (nebo {{ui:Vybrat plochy}}). Klikáním na hrany nebo plochy je přidáte nebo odeberete, poté zvolte {{ui:Hotovo}} nebo stiskněte {{key:Esc}}. Viz [Zaoblení, sražení a skořepina](topic:fillet-chamfer-shell).

## Úprava skici

1. Poklepejte na skicu v historii, nebo ji vyberte a v pravém panelu zvolte {{ui:Upravit skicu}} (nebo {{ui:Skica}} na panelu nástrojů).
2. Díl se vrátí do stavu, v jakém byl při vytvoření skici: prvky za ní jsou během úprav skryté.
3. Změňte geometrii, vazby nebo kóty.
4. Zavřete skicu. Celý díl se přepočítá se změnou.

Chcete-li změnit jen velikost, skicu otevírat nemusíte. Vyberte prvek nebo skicu a změňte číslo pod **Kóty skici** (nebo **Řídicí kóty**) v pravém panelu. Viz [Změna rozměrů bez otevření skici](topic:change-sizes).

## Když prvek selže

Pokud změna znemožní prvek, PartCraft sestaví vše ostatní a problém označí:

- prvek v historii ukazuje **⚠ chyba** a jeho zpráva je nahoře v jeho pravém panelu (zprávu zobrazíte i najetím na řádek);
- prvky, které ho potřebují, ukazují **⚠ nesestaveno** se zprávou „Vyžaduje Extrude2, který selhává.“;
- štítek ve stavovém řádku říká „1 prvek selhává“.

Opravte příčinu (nebo změnu vraťte) a díl se znovu sestaví. Běžné zprávy a jak na ně reagovat jsou v [Řešení potíží](topic:troubleshooting).

## Potlačení prvku

Potlačení prvek vypne, aniž ho smaže. Hodí se, když chcete díl vyzkoušet bez otvoru nebo vzoru.

1. Vyberte prvek.
2. Zvolte {{ui:Potlačit}}. Jeho řádek ukazuje **vypnuto**. Prvky, které ho potřebují, se také nesestaví.
3. Zvolte {{ui:Obnovit}} pro opětovné zapnutí.

## Vrácení do bodu

Vrácení do bodu sestaví díl jen až do určitého místa, takže ho můžete vidět v daném stavu, nebo přidat prvek dříve v historii.

1. Vyberte prvek a zvolte {{ui:Vrátit zpět sem}}. Tento prvek i všechny pod ním jsou šedé a nesestavené. Řádek **Lišta vrácení · posun vpřed** označuje místo.
2. Každý prvek, který nyní přidáte, se vloží **na lištu**, před šedé prvky.
3. Klikněte na **Lišta vrácení · posun vpřed** a vše se sestaví znovu.

Pozice vrácení se uloží do souboru.

## Změna pořadí prvků

1. Vyberte prvek.
2. Zvolte {{ui:Posunout nahoru}} nebo {{ui:Posunout dolů}}, nebo když je řádek historie zaostřen, stiskněte {{key:Alt+Up}} nebo {{key:Alt+Down}}.

Prvek nikdy nepřesunete nad něco, co používá. Tlačítko je šedé a najetí na něj (nebo zkouška klávesy) uvede důvod, například „Extrude2 používá Sketch2, proto musí být Sketch2 první.“

Prvek používá: svou skicu; plochu, na které skica leží; prvky, které vzor nebo zrcadlení kopíruje; čáru skici nebo rotační těleso použité jako směr nebo osu.

## Smazání prvku

1. Vyberte prvek a zvolte {{ui:Smazat}} v pravém panelu nebo na panelu nástrojů, nebo stiskněte {{key:Delete}}.
2. Pokud ho používají jiné prvky, PartCraft se zeptá: „Extrude3, Hole1 používají Extrude1 a budou smazány také.“ Zvolte {{ui:Smazat vše}} nebo {{ui:Zrušit}}.

Smazání prvku nesmaže jeho skicu: skica se znovu objeví v zobrazení jako nepoužitá skica, připravená pro jiný prvek. Pokud ji nepotřebujete, smažte ji zvlášť.

## Přejmenování

Vyberte prvek a napište nový **Název** dole v pravém panelu (až 60 znaků). Název dílu je v pravém panelu, když není nic vybráno.

## Díly se stovkami prvků

Díl se stovkami prvků je ověřen při 750 prvcích. PartCraft uchovává těleso, které měl v půli historie, takže změna pozdě v historii přepočítá jen prvky za ní. Změna blízko začátku přepočítá vše, co na ní stojí, a to trvá nejdéle. Zpět a znovu přepočítají jen od místa, kde se oba stavy liší. Pro rychlejší práci na velkém dílu vraťte díl do místa, kde pracujete (viz Vrácení do bodu výše), nebo potlačte to, co teď nepotřebujete. Několik řezů a výstupků, které se navzájem nedotýkají, se použije společně, takže díl z mnoha samostatných otvorů a výstupků se sestaví rychleji, než by naznačoval počet prvků.

Velký díl se přepočítává na pozadí: sestavovací štítek dole ukazuje **Přepočítává se…** s postupem a zobrazení, panely i nabídky fungují i během přepočítávání. Na obrazovce je naposledy sestavený díl, dokud nový není hotov. Pokud něco změníte znovu během přepočítávání, PartCraft sestaví nejnovější verzi a rozpracovanou zahodí. Malý díl se přepočítá ihned.

## Zpět a znovu

- {{key:Mod+Z}} nebo {{ui:Zpět}} vrátí poslední změnu: prvek, nastavení, úpravu skici, tažení. Stavový řádek říká, co to bylo, například „Vráceno: změna kóty.“
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} nebo {{ui:Znovu}} změnu obnoví.
- PartCraft uchovává posledních 200 kroků. Díl tak velký, že by 200 kopií zabralo hodně paměti, uchová méně, nikdy však méně než posledních 20. Změny na listu výkresu (řez, přesunutý symbol GD&T) jsou ve stejném seznamu. Otevření souboru nebo začátek nového dílu seznam vymaže.

:::mac
Na Macu použijte ⇧⌘Z pro znovu. V Safari může ⌘Y otevřít historii prohlížeče.
:::
