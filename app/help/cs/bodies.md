---
title: Sloučení, přesun a změna měřítka těles; vzory po dráze
summary: Vytvořte samostatná tělesa a poté je spojte, odečtěte nebo protněte, přesuňte, otočte, zarovnejte nebo zkopírujte, změňte měřítko rovnoměrně nebo podle X, Y a Z, a kopírujte prvky nebo tělesa podél křivky.
keywords: těleso, tělesa, více těles, nové těleso, sloučit, booleovská operace, spojit, odečíst, průnik, sjednocení, ponechat nástroje, přesun tělesa, kopie tělesa, otočení tělesa, zarovnat, posun, měřítko, nerovnoměrné měřítko, natažení, afinní, vzor po dráze, vzor podél křivky, vzor podél dráhy, vzor řízený křivkou
from: 6b1ea820
---

:::note
**Zatím není hotovo v této verzi.** Práce s více tělesy vyžaduje přesné geometrické jádro, které tato verze PartCraftu nemá: každý díl vytváří pomocí mesh jádra. [Co zatím není hotovo](topic:not-built-yet) popisuje, co dělat místo toho. Zbytek stránky popisuje, jak to funguje s přesným jádrem.
:::

Díl může obsahovat více těles. Každé samostatné těleso je **tělesem**. Většina prvků přidává nebo ubírá materiál ze všech těles, kterých se dotýkají. Nástroje na této stránce pracují s celými tělesy, která vyberete. Jsou v nabídce {{ui:Více}} ve skupině Prvky: {{ui:Sloučit}}, {{ui:Přesunout těleso}}, {{ui:Změnit měřítko tělesa}} a {{ui:Vzor po dráze}}. Všechny vyžadují přesné jádro (OpenCascade).

## Vytvoření samostatného tělesa

Nastavte **Operaci** vytažení nebo rotace na **Nové těleso** na jejich pravém panelu (tažení a lofting to mají také). Nové těleso zůstane samostatné i tam, kde se překrývá s ostatními. **Průnik** zachová jen překryv nového tvaru s tím, co tam je.

Tělesa se pojmenují podle prvku, který je založil: „Extrude2". Kopie se pojmenuje podle originálu a prvku, který ji zkopíroval: „Extrude2, kopie 1 z Move1". Názvy zůstanou stejné, když změníte velikosti výše, takže prvky, které těleso používají, jej dál najdou. Při dvou a více tělesech panel dílu (klikněte do prázdného prostoru) je vypíše s jejich objemy.

## Přejmenování nebo skrytí tělesa

Klikněte do prázdného prostoru v pohledu, abyste zobrazili panel dílu. Jeho seznam těles (zobrazí se, když díl má dvě a více těles) má na každém řádku pole pro název a tlačítko {{ui:Skrýt}}.

- **Přejmenování:** napište nový název do pole a stiskněte {{key:Enter}}, nebo klikněte jinam. Každý panel jej pak používá: Sloučit, Přesunout těleso, vzory. Vymazáním pole se vrátíte k názvu z prvku, který těleso vytvořil.
- **Skrytí:** klikněte na {{ui:Skrýt}} na jeho řádku. Těleso zmizí z pohledu a kliknutí jím prochází, takže můžete vybírat plochy za ním. {{ui:Zobrazit}} jej vrátí; {{ui:Zobrazit vše}} vrátí každé skryté těleso.

Skrytí mění jen pohled. Skryté těleso se stále vytváří, počítá se do objemu a měření a ukládá se do exportů STL, 3MF a STEP. Názvy a skrytá tělesa se ukládají do souboru dílu a každá změna je jeden krok {{ui:Zpět}}.

## Sloučení těles

1. Shift+klik na plochu **cílového** tělesa, pak na plochu každého **nástrojového** tělesa.
2. Zvolte {{ui:Více}}, pak {{ui:Sloučit}}.
3. Na pravém panelu zvolte **Operaci**:

| Operace | Výsledek |
|---|---|
| Spojit | Cílové a nástrojová tělesa se stanou jedním tělesem |
| Odečíst | Nástrojová tělesa se odeberou z cílového |
| Průnik | Zachová se jen to, co cílové a všechna nástrojová tělesa sdílejí |

**Cílové těleso** je to, které si zachová svůj název. Zaškrtněte nebo odškrtněte **Nástrojová tělesa**, nebo použijte **Vybrat v pohledu** a klikněte na jejich plochy. **Ponechat nástrojová tělesa** nechá nástroje na místě (hodí se pro formu a její jádro). Pokud nástrojové těleso už bylo spotřebováno dřívějším sloučením, panel to řekne a nevybere jiné těleso.

## Přesun nebo kopie tělesa

1. Zvolte {{ui:Více}}, pak {{ui:Přesunout těleso}}. Nejnovější těleso je zaškrtnuté; zaškrtněte ta, která chcete přesunout.
2. Zvolte typ **Přesun**:

| Přesun | Co nastavíte |
|---|---|
| Posun | **ΔX**, **ΔY**, **ΔZ** v milimetrech |
| Bod na bod | **Od** a **Do**: klikněte blízko konce hrany, na prvek bod, nebo na místo na ploše |
| Otočení kolem osy | **Osa** (X, Y, Z, prvek osy, nebo **Vybrat**: přímou hranu, kružnici nebo válec) a **Úhel (°)** |
| Zarovnání plochy na plochu nebo rovinu | **Plocha k přesunu** (rovná plocha tělesa), **Na** (rovná plocha nebo rovina) |

Zarovnání otočí těleso tak, aby jeho plocha ležela na druhé ploše, plocha na plochu, a pak jej posune jen podél normály této plochy. **Stejným směrem** jej otočí opačně. **Kopírovat** ponechá originál a přidá přesunutou kopii jako nové těleso.

## Změna měřítka tělesa

1. Zvolte {{ui:Více}}, pak {{ui:Změnit měřítko tělesa}}, a zaškrtněte tělesa.
2. Zadejte **Měřítko**, nebo odškrtněte **Rovnoměrné** a zadejte **Měřítko X**, **Měřítko Y** a **Měřítko Z** (podél os světa).
3. **Kolem** je bod, který zůstane na místě: střed obalového kvádru těles, nebo bod, který vyberete.

Rovnoměrné měřítko je přesné. Nerovnoměrné měřítko promění kružnice v elipsy: válec se stane eliptickým válcem, který žádná analytická plocha nedrží. Zakřivené plochy se tak stanou plochami B-spline, které zůstanou do 0.0000004 mm od přesného tvaru. Rovné plochy a přímé hrany zůstávají přesné. Panel řekne, co nastalo. Faktory měřítka musí být větší než nula (pro zrcadlení použijte {{ui:Zrcadlení}}).

## Kopírování podél dráhy

1. Vyberte prvek ke kopírování v historii, nebo nevybírejte nic, pak se zkopíruje nejnovější těleso.
2. Zvolte {{ui:Více}}, pak {{ui:Vzor po dráze}}. Jako dráha se vezme nejnovější nepoužitá skica.
3. Na pravém panelu nastavte:

| Nastavení | Co dělá |
|---|---|
| **Kopírovat** | Tělesa (každá kopie je nové těleso), nebo Prvky (spojené nebo odečtené jako originál) |
| **Dráha** | Zaškrtněte skici, nebo **Vybrat hrany modelu**; kusy musí navazovat od konce ke konci |
| **Počet** | Celkový počet včetně originálu |
| **Rozestup** | Stejný (rozloženo až ke konci otevřené dráhy, nebo kolem celé uzavřené), nebo nastavená vzdálenost |
| **Orientace** | Sledovat dráhu (každá kopie se s ní otáčí), nebo Pevná (kopie zůstanou rovnoběžné) |
| **Obrátit směr** | Pohyb opačným směrem po dráze |

Kopie začínají tam, kde dráha prochází nejblíže originálu, a jsou rozmístěny podle délky po křivce.

Lineární a kruhové vzory mohou kopírovat také tělesa: zaškrtněte **Kopírovat tělesa** na jejich panelu a vyberte tělesa. Každá kopie je nové těleso.

## Omezení

- Tělesa potřebují přesné jádro. Mesh jádro ponechá jedno těleso a řekne to.
- Nerovnoměrné měřítko promění zakřivené plochy v blízké aproximace B-spline (viz výše), ne v přesné válce nebo kužele. Posunuté plochy zatím nelze takto měnit.
- Sledování dráhy na kroucené 3D křivce nese kopii bez kroucení. Na rovinných drahách je otočení přesné.
- Sloučení funguje jen na tělesech. Plošná tělesa se spojují pomocí {{ui:Sešít}}.

Viz také [Referenční roviny, osy a body](topic:reference-geometry) pro body a roviny „mezi objekty" a [Vzorové a zrcadlové prvky](topic:patterns-mirror).
