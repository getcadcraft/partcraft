---
title: Zaoblení, sražení hrany a skořepina
summary: Vyberte hrany a přidejte zaoblení s konstantním nebo proměnlivým poloměrem a rovnoměrné, dvouvzdálenostní nebo úhlové sražení hran, vytvořte dutý díl skořepinou výběrem ploch k otevření, změňte, které hrany nebo plochy prvek používá, a opravte obvyklé chyby.
keywords: zaoblení, zaoblit, prolnutí, sražení hrany, zkosení, skořepina, dutý, tloušťka stěny, hrany, plochy, vybrat hrany, shift klik, otevřená plocha, přesné jádro, mesh jádro, zatím není hotové
from: e41c1c12
---

:::note
**V této verzi** PartCraft staví zaoblení a sražení hran mesh jádrem, pouze na **přímých hranách mezi dvěma rovnými plochami**: hrany krabice a přímé hrany vytažení a výřezů, vnější nebo vnitřní rohy (vnitřní roh dostane přidaný materiál). Kulaté hrany, například okraje děr, a poloměr, který se mění podél hrany, zatím nejsou hotové. Kde se dvě zaoblené hrany stýkají v rohu, jsou zaoblení seříznuta na úkos (stýkají se v ostrém zlomu), nikoli splynuta. **Skořepina** funguje také, vytvořená mesh jádrem: otevírá pouze rovné plochy, skořepiny s různými tloušťkami stěn zatím nejsou hotové a na dílech s mnoha kulatými plochami je pomalá. Viz [Co ještě není hotové](topic:not-built-yet).
:::

{{ui:Zaoblení}} zaoblí hrany, {{ui:Sražení hrany}} je zkosí a {{ui:Skořepina}} díl vydutí. Všechny tři pracují s hranami a plochami tělesa a staví je mesh jádro. Jejich zaoblení jsou fasetová jako každá kulatá plocha (**Křivky** určuje, jak jemně); kulaté plochy jsou válce, které můžete vybrat a změřit (viz [Mesh jádro](topic:solid-kernels)).

## Zaoblení nebo sražení hran

### Nejdřív vyberte hrany

1. Klikněte na hranu dílu. Celá hrana se zvýrazní a pravý panel ukáže **Hrana**: její druh (Přímá, Kružnice nebo oblouk, Křivka), délku a plochy, mezi nimiž leží.
2. Chcete-li přidat další hrany, klikněte na ně se {{key:Shift}}. Každá se označí; {{key:Shift}}+klik na označenou hranu ji zruší. Nadpis panelu je počítá ("4 hrany") a stavový řádek hlásí "4 hrany vybrány. Zaoblení nebo Sražení hrany je zaoblí; Shift+klik vybere další, Esc vymaže."
3. Vyberte {{ui:Zaoblení}} nebo {{ui:Sražení hrany}} v panelu nástrojů, nebo stejná tlačítka v pravém panelu.

Prvek se přidá se všemi vybranými hranami: zaoblení 2 mm nebo sražení 1 mm. Stavový řádek hlásí například "Fillet1 přidán (4 hrany). Velikost změníte vpravo; Vybrat hrany změní, které hrany."

### Nebo nejdřív přidejte prvek

1. Když nic není vybráno, vyberte {{ui:Zaoblení}} nebo {{ui:Sražení hrany}}.
2. PartCraft přejde do výběru: nadpis pravého panelu říká "Fillet1: výběr", díl se ukáže tak, jak byl před zaoblením (panel to uvádí), a v panelu nástrojů se objeví {{ui:Hotovo}}.
3. Klikněte na každou hranu, abyste ji přidali; kliknutím znovu ji odeberete. Stavový řádek je počítá.
4. Vyberte {{ui:Hotovo}} (nebo {{ui:Výběr hotov}} v panelu), nebo stiskněte {{key:Esc}} nebo {{key:Enter}}.

### Nastavení

| Nastavení | Zaoblení | Sražení hrany |
|---|---|---|
| Velikost | **Poloměr (mm)**, výchozí 2 | **Vzdálenost (mm)** od hrany na obou plochách, výchozí 1 |
| **Hrany** | Kolik | Kolik |

Seznam níže pojmenovává každou hranu podle dvou ploch, které spojuje, například "Hrana 1: Extrude1 koncová plocha × Extrude1 bok". **Odebrat** jednu vyřadí. {{ui:Vybrat hrany}} se vrátí k výběru. Dvojklik na prvek v historii dělá totéž.

Hrany si PartCraft pamatuje podle dvou ploch, které spojují, takže zůstanou na správné hraně, když změníte rozměr dříve v historii.

### Proměnlivá zaoblení a typy sražení

- **Proměnlivý poloměr** (zaoblení): v této verzi zatím není hotové ("Zaoblení, jehož poloměr se mění podél hrany: zatím není hotové (vyžaduje přesné jádro). Zadejte jeden poloměr."). S přesným jádrem zaškrtněte jej a nastavte **Koncový poloměr (mm)**. Poloměr se lineárně mění od **Poloměru** na jednom konci každé hrany ke **Koncovému poloměru** na druhém; **Prohodit konce** to otočí.
- **Typ** (sražení): **Stejná vzdálenost**, **Dvě vzdálenosti** (**Druhá vzdálenost** na druhé ploše) nebo **Vzdálenost a úhel** (vzdálenost na jedné ploše, zkosení pod **Úhlem (°)** k této ploše). **Prohodit strany** dá první vzdálenost na druhou plochu.

## Vytvoření dutého dílu skořepinou

1. Klikněte na rovnou plochu, která má zůstat otevřená, například horní stranu krabice. Nebo klikněte se {{key:Shift}} na více ploch.
2. Vyberte {{ui:Skořepina}} v panelu nástrojů, nebo {{ui:Skořepina, otevírá tuto plochu}} v panelu plochy.

Díl se změní na stěnu 2 mm s vybranými otevřenými plochami. Nastavení:

| Nastavení | Co dělá | Výchozí |
|---|---|---|
| **Stěna (mm)** | Tloušťka stěny | 2 |
| **Stěny rostou ven (plochy zůstanou uvnitř)** | Zaškrtnuto: stěny se přidají venku, takže vnitřek zachová velikost dílu | Vypnuto: stěny jdou dovnitř a vnějšek zachová velikost |
| **Otevřené plochy** | Kolik ploch je odstraněno | |

Dovnitř mají stěny přesně tloušťku stěny: vnější rohy zůstanou ostré, vnitřní rohy vyjdou zaoblené (poloměr = stěna) a díra skrz díl dostane kolem sebe trubici stěny. Ven se stěny přidají vně původního povrchu, který se stane dutinou, a vnější hrany vyjdou zaoblené. Vnitřní plochy jsou pojmenovány podle ploch, které odsazují, takže je můžete vybrat.

Otevřít lze jen rovné plochy: výběr zakřivené vyvolá "Skořepina: v této verzi otevírá jen rovné plochy (vytváří ji mesh jádro)." Skořepina je na dílech s mnoha kulatými plochami pomalá (několik sekund na tisíc trojúhelníků): při navrhování použijte hrubší nastavení **Křivky**.

{{ui:Vybrat plochy}} změní, které plochy jsou otevřené, stejně jako výběr hran. Seznam pojmenuje každou, například "Plocha 1: Extrude1 koncová plocha". Skořepina bez otevřených ploch není povolena: "Vyberte plochy k odstranění (otevřít), pak vytvořte skořepinu."

## Pořadí je důležité

Prvky se staví shora dolů. Zaoblení před skořepinou se skořepinou zpracuje s dílem, takže i vnitřek dostane zaoblené rohy. Zaoblení za skořepinou zaoblí jen hrany, které vyberete. Prvky přesunete pomocí {{ui:Posunout nahoru}} a {{ui:Posunout dolů}} (viz [Změna dílu přes jeho historii](topic:edit-history)).

Vzory a zrcadla nemohou kopírovat zaoblení, sražení ani skořepinu: "Fillet1 mění hrany nebo stěny tělesa; nelze jej kopírovat. Kopírujte prvky, které vytvářejí tělesa (vytažení, rotace, díry, importy)." Nejdřív vzorujte díry nebo výřezy a pak zaoblete hrany všech kopií jedním zaoblením.

## Když to selže

| Hláška | Co dělat |
|---|---|
| "A 5 mm round does not fit here (…)." Zaoblení 5 mm se sem nevejde (je příliš velké pro plochu vedle jedné z hran, nebo se hrany stýkají v rohu, který jádro nedokáže prolnout). | Použijte menší poloměr, nebo zaoblujte méně hran najednou (několik prvků zaoblení, nejmenší naposled) |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." Hrana, kterou zaoblení používá, zmizela: hrana mezi Extrude1 a Cut2. | Dřívější změna tu hranu odstranila. Zvolte {{ui:Vybrat hrany}}, odeberte červenou hranu a vyberte novou |
| "The shell could not be made with this thickness (…)." Skořepinu nelze vytvořit s touto tloušťkou (…). | Stěna je silnější než úzká část modelu, nebo než poloměr zaoblení. Zeslabte stěnu, nebo zvětšete zaoblení nad stěnu |
| "That face has no name the history can follow; pick another." Tato plocha nemá název, který historie dokáže sledovat; vyberte jinou. | Vyberte plochu vytvořenou prvkem (většina ploch je) |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (také Sražení hrany) Zaoblení: v této verzi jen přímé hrany mezi dvěma rovnými plochami (mesh jádro je vytváří). Zaoblete nebo zkoste zakřivené hrany ve skici. | Vybraná hrana je kulatá, například okraj díry, nebo leží na zakřivené ploše. Odeberte ji pomocí {{ui:Vybrat hrany}} a tento roh zaoblete nebo zkoste ve skici |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." Zaoblení, jehož poloměr se mění podél hrany: zatím není hotové (vyžaduje přesné jádro). Zadejte jeden poloměr. | Odškrtněte **Proměnlivý poloměr** |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠ v historii) Zaoblení mesh jádrem: kde se zaoblené hrany stýkají, jsou seříznuty na úkos, nikoli splynuty. | Varování, ne chyba: díl je postaven. Vybrané hrany se stýkají v rohu a zaoblení se tam stýkají v ostrém zlomu. Zaoblujte méně hran, nebo zlom přijměte |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." Skořepina: v této verzi otevírá jen rovné plochy (vytváří ji mesh jádro). | Otevřená plocha je zakřivená. Zvolte {{ui:Vybrat plochy}} a odeberte ji; otevírejte jen rovné plochy |

## Omezení

V této verzi zaoblení a sražení fungují jen na přímých hranách mezi dvěma rovnými plochami, s jedním poloměrem, a zaoblení stýkající se v rohu jsou seříznuta na úkos. Skořepiny otevírají jen rovné plochy. S přesným jádrem se proměnlivé zaoblení mění lineárně podél každé hrany (jeden zákon na prvek; žádné poloměry v bodech podél ní). Zaoblení ploch, plná zaoblení a skořepiny s různými tloušťkami stěn zatím nejsou hotové.
