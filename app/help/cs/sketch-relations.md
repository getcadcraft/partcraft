---
title: Vazby a kóty skici
summary: Každá vazba a kóta skici v PartCraftu, co vybrat pro každou z nich, jejich symbol a jak se chovají při řešení.
keywords: vazby, omezení, ztotožnění, vodorovnost, svislost, rovnoběžnost, kolmost, tečnost, stejnost, soustřednost, střed, zafixování, vzdálenost, vodorovná vzdálenost, svislá vzdálenost, poloměr, průměr, úhel, symboly, glyfy
from: 9831e7be
---

Vazby určují, jak geometrie leží vůči jiné geometrii. Kóty určují velikosti. Chcete-li přidat vazbu, vyberte prvky nástrojem Výběr ({{key:S}}) a zvolte jeho tlačítko v pravém panelu; chcete-li přidat kótu, použijte nástroj {{ui:Kóta}} ({{key:D}}) nebo tlačítka kót v pravém panelu. Jak s nimi pracovat: [Plné určení skici](topic:relations-dimensions).

"Křivkou" níže se myslí kružnice nebo oblouk. Počátek se počítá jako bod.

## Vazby

| Tlačítko | Symbol | Vyberte | Účinek |
|---|---|---|---|
| {{ui:• Ztotožnit}} | • (zobrazí se jen při výběru nebo potížích) | Dva body | Body se setkají |
| {{ui:• Ztotožnit}} | • | Bod a úsečku | Bod leží na úsečce (nebo na jejím prodloužení) |
| {{ui:• Ztotožnit}} | • | Bod a křivku | Bod leží na kružnici nebo oblouku |
| {{ui:H Vodorovně}} | H | Úsečku, nebo dva body | Úsečka je vodorovná, nebo jsou oba body ve stejné výšce |
| {{ui:V Svisle}} | V | Úsečku, nebo dva body | Úsečka je svislá, nebo jsou body nad sebou |
| {{ui:∥ Rovnoběžně}} | ∥ | Dvě úsečky | Úsečky mají stejný směr |
| {{ui:⊥ Kolmo}} | ⊥ | Dvě úsečky | Úsečky se setkávají v pravém úhlu |
| {{ui:T Tečně}} | T | Úsečku a křivku | Úsečka se dotýká křivky, aniž ji protíná |
| {{ui:T Tečně}} | T | Dvě křivky | Dotýkají se zvenku nebo zevnitř, podle kresby |
| {{ui:T Tečně}} | T | Spline a úsečku, oblouk nebo spline, který se setkává s jedním z jeho konců | Spline z toho konce vychází ve směru druhé křivky |
| {{ui:= Stejné}} | = | Dvě úsečky | Stejná délka |
| {{ui:= Stejné}} | = | Dvě křivky | Stejný poloměr |
| {{ui:◎ Soustředně}} | ◎ | Dvě křivky | Stejný střed |
| {{ui:◎ Soustředně}} | ◎ | Bod a křivku | Bod je ve středu křivky |
| {{ui:M Střed}} | M | Bod a úsečku | Bod je uprostřed úsečky |
| {{ui:↔ Souměrně}} | ↔ | Dva body a úsečku | Body jsou zrcadlovými obrazy podle úsečky ({{ui:Zrcadlení}} tyto vazby přidává) |
| {{ui:⚓ Zafixovat}} | ⚓ | Bod, úsečku, křivku nebo spline | Podrží ji přesně na místě, kde je nyní (u splinu jeho body) |

Úsečkami se zde myslí i osové čáry. Kreslení přidává některé vazby automaticky: přichycení k bodu jej ztotožní, přichycení ke křivce umístí bod na ni, téměř vodorovné nebo svislé úsečky dostanou H nebo V a obdélník přichází se čtyřmi spojenými rohy, dvěma H a dvěma V.

**Zafixovat** je rychlý způsob, jak něco zastavit, ale geometrie pak nemůže sledovat změnu kóty jinde. Dávejte přednost kótám vůči počátku.

## Kóty

| Tlačítko | Vyberte | Měří | Zobrazeno jako |
|---|---|---|---|
| {{ui:Vzdálenost}} | Úsečku | Její délku | Vzdálenost 40 |
| {{ui:Vzdálenost}} | Dva body | Přímou vzdálenost mezi nimi | Vzdálenost 40 |
| {{ui:Vzdálenost}} | Bod a úsečku | Vzdálenost od bodu k úsečce, kolmo na ni | Vzdálenost 40 |
| {{ui:Vzdálenost}} | Dvě rovnoběžné úsečky | Mezeru mezi nimi | Vzdálenost 40 |
| {{ui:Vodorovná vzdálenost}} | Dva body, nebo úsečku | Pouze vzdálenost vlevo-vpravo | Vodorovná vzdálenost 40 |
| {{ui:Svislá vzdálenost}} | Dva body, nebo úsečku | Pouze vzdálenost nahoru-dolů | Svislá vzdálenost 40 |
| {{ui:Poloměr}} | Kružnici nebo oblouk | Její poloměr | Poloměr R10 |
| {{ui:Průměr}} | Kružnici nebo oblouk | Její průměr | Průměr ⌀20 |
| {{ui:Úhel}} | Dvě nerovnoběžné úsečky | Úhel mezi nimi, 0 až 180 stupňů | Úhel 30° |

Při nástroji {{ui:Kóta}} PartCraft určí druh kóty podle toho, co kliknete, a kde umístíte číslo:

| Kliknete na | Dostanete |
|---|---|
| Jednu úsečku | Její délku; u šikmé úsečky vodorovnou, pokud je číslo nad ní nebo pod ní, svislou, pokud je u boku |
| Jednu kružnici | Průměr |
| Jeden oblouk | Poloměr |
| Dva body | Vzdálenost; vodorovnou nebo svislou jako u šikmé úsečky |
| Bod a úsečku | Vzdálenost od bodu k úsečce |
| Dvě úsečky | Úhel, nebo vzdálenost, pokud jsou rovnoběžné |
| Bod a kružnici | Nic: "Tyto prvky nelze kótovat společně." Okótujte místo toho na střed kružnice |

**Odsazení** (zobrazené jako vzdálenost) vytváří nástroj {{ui:Odsadit}}: udrží zkopírovanou úsečku rovnoběžně v této vzdálenosti, nebo zkopírovaný oblouk či kružnici soustředně s poloměrem o tolik větším nebo menším. Ostatní části stejného odsazení nesou vazbu **O** a řídí se podle jediné kóty odsazení. Viz [Spliny, oříznutí, odsazení a další nástroje skic](topic:sketch-tools).

Hodnoty kót jsou v milimetrech (nebo ve stupních), nikdy záporné. Poloměr a průměr musí být větší než nula. Pro vzdálenosti je povolena hodnota 0: dva body vzdálené 0 jsou ztotožněné.

## Jak se řešení chová

- **Nejmenší pohyb.** Když se hodnota změní, řešič posune geometrii co nejméně. Úsečka, jejíž délka se mění, poroste stejně na obou koncích, pokud žádný konec nic nedrží.
- **Žádné překlápění.** Vzdálenosti od bodu k úsečce, vodorovné a svislé vzdálenosti, úhly a tečnost si pamatují, na které straně vznikly. Změna hodnoty geometrii nikdy nepřeklopí na druhou stranu.
- **Konflikty nechají věci být.** Pokud si vazby odporují, skica zůstane přesně tak, jak byla, a odporující vazby zčervenají.
- **Nadbytečné vazby** (které už vyplývají z jiných) jsou uvedeny ve stavovém řádku ("je již implikována. Smažte ji.") a prvek se přesto vytvoří s varováním.
- **Tečné spoje.** Tam, kde se oblouk zaoblení setkává se svými úsečkami ve společném koncovém bodu, se tečnost řeší tvarem, který je tam dobře určený, takže zaoblení skic nejsou hlášena jako přeurčená.

## Zatím není k dispozici

Vazby kolineárnosti, koradiálnosti a průniku; bod na splinu; řízené (referenční) kóty; kóty souřadnic a délky oblouku; rovnice mezi kótami. Pro kolineární úsečky použijte {{ui:∥ Rovnoběžně}} a vzdálenost 0.
