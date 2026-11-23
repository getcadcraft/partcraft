---
title: 3D hrubování a obrábění zbytků
summary: Vyčistěte přídavek kolem celého modelu úroveň po úrovni plochým, zaobleným nebo kulovým nástrojem, s ponecháním přídavku pro dokončení, pak nechte menší nástroj řezat jen tam, kde první zanechal materiál. Co dráhy zaručují a co ne.
keywords: 3D hrubování, hrubování, obrábění zbytků, hrubování zbytků, zbylý polotovar, ponechaný přídavek, hloubka přísuvu, úrovně, úroveň Z, vodorovná vrstva, nájezd, zanoření, vryp, menší nástroj
from: 29ddc266
---

Dvě operace ve Výrobě, pod {{ui:Více}} na jejím panelu nástrojů, odebírají polotovar z **celého modelu** ve 3D, s nástrojem drženým svisle (nebo podél [směru nástroje](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) operace). Nevyžadují žádný výběr.

## 3D hrubování

{{ui:3D rough}} postupuje dolů od horní strany polotovaru po jedné **hloubce přísuvu**. Na každé úrovni odebere vše, čeho nástroj dosáhne, aniž by se dotkl modelu: přímé řady ve vzdálenosti **posunu mezi drahami** (zlomek průměru nástroje), pak jednou kolem okraje dosažitelné oblasti, takže stěny se sledují a nezůstanou jako řada schodů v půdorysu.

- **Ponechaný přídavek**: jak daleko od modelu nástroj všude zůstává pro dokončovací průchod (výchozí 0,5 mm).
- **Úroveň u každé rovné plochy**: dodatečná úroveň ve výšce každé rovné plochy modelu (plus ponechaný přídavek), aby dno nezůstalo téměř celou hloubku přísuvu vysoko.
- **Ignorovat polotovar tenčí než**: materiál tenčí než toto, nahoru nebo do strany, nestojí za průchod (0,05 mm pro hrubování, 0,5 mm pro obrábění zbytků, aby vlas podél stěny neposlal menší nástroj kolem každé stěny).
- **Dno**: nic se neřeže pod touto výškou. Prázdné znamená dno modelu.

Začíná od polotovaru **tak, jak jej zanechaly operace před ním**: po průchodu čelní frézou neřeže vzduch tam, kde už čelní fréza byla.

Dolů: kde by nástroj na cestě dolů narazil na polotovar, najede podél vlastního průchodu pod **úhlem nájezdu**, tam a zpět přes nejvýše dva průměry nástroje. Průchod, který je na to krátký, se zanoří přímo dolů rychlostí zanoření; operace tyto případy počítá a varuje, protože nástroj, který neřeže na svém středu, by to dělat neměl.

## Obrábění zbytků

{{ui:Zbytky}} je stejná strategie pro **menší nástroj po větším**. Čte simulaci polotovaru a řeže jen tam, kde materiál stále stojí: ve vnitřních rozích, kam větší nástroj nedosáhl, v drážkách, do kterých se nevešel, a ve schodech, které zanechal na svazích. Jinde nedělá nic, takže jeho dráha je malou částí toho, co by stejný nástroj vzal na čerstvém polotovaru.

Umístěte jej za hrubovací operaci a zvolte menší nástroj. Potřebuje simulaci polotovaru operací před ním, kterou pracovní prostor vždy spouští.

## Jak dobré dráhy jsou

- **Žádný vryp.** Polohy nástroje se počítají na mřížce, s řezným nástrojem o trochu větším, než je (o 1,4 buňky mřížky do stran a o ponechaný přídavek), takže kdekoli stojí, je mimo model. Testy kontrolují každý řezný bod proti přesnému nástroji na přesné síti a simulace polotovaru po každém běhu: žádný vryp, žádný rychloposuv přes polotovar.
- **Cena za to**: stěny si nechají o něco víc než ponechaný přídavek, až do hodnoty uvedené jako „Přebytečný polotovar na stěnách“ u operace (asi 0,5 mm pro nástroj Ø6, méně pro menší). Dokončovací průchod ji odebere.

Co tyto dráhy nejsou:

- Řady jsou přímky, ne ofsety tvaru dílu ani křivky konstantního záběru. Dělají více zvednutí a pohybů vzduchem než ofsetová nebo adaptivní strategie a první řada na každé úrovni řeže celou šířku nástroje. Pro kapsy s rovným dnem je lepším hrubováním [Adaptivní](topic:manufacture).
- Stopka nástroje a držák se nekontrolují. Varování řekne, kdy je řez hlubší než délka zubů.
- Podříznutí nejsou vidět: model je to, na co nástroj narazí při sjezdu po své ose. Chcete-li hrubovat bok, dejte druhé operaci [nakloněný směr nástroje](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Obrábění zbytků zná polotovar jen tak dobře, jak dobře je mřížka simulace (buňky 0,1 až 2 mm podle velikosti dílu).
- U velkého dílu je program dlouhý (přes 100 000 pohybů pro přírubu 200 mm s nástrojem Ø6) a výpočet trvá asi minutu; každá změna v pracovním prostoru celý program přepočítá. Pro hrubování použijte největší nástroj, který se vejde.
- Před řezáním zkontrolujte výstup v simulátoru vašeho stroje.
