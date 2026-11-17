---
title: Pole a zrcadlení prvků
summary: Opakujte prvky v řadě pomocí Lineární, kolem osy pomocí Kruhový a kopírujte prvky nebo celé těleso přes rovinu pomocí Zrcadlení.
keywords: pole, lineární pole, kruhové pole, polární pole, zrcadlení, symetrie, kopírovat prvky, roztečná kružnice, zdrojový prvek, zrcadlit těleso
from: 702e9edb
---

Pole a zrcadlení kopírují prvky, které jste už vytvořili. Kopie jsou součástí historie: když změníte originál, kopie se změní s ním.

Kopíruje se to, co prvek dělá: pole výstupku přidává materiál, pole výřezu nebo díry ho odebírá. Pole lze dále opakovat a zrcadlit. Lze zkopírovat i importované těleso STEP; zaoblení, sražení hran a skořepiny kopírovat nelze.

## Lineární pole

1. Vyberte v historii prvek ke kopírování (například díru nebo výřez). Pokud nic nevyberete, použije se poslední prvek tvořící těleso.
2. Zvolte {{ui:Lineární}}. Podél osy X se objeví tři kopie ve vzdálenosti 20 mm.
3. V pravém panelu nastavte:

| Volba | Co dělá | Výchozí |
|---|---|---|
| **Prvky ke kopírování** | Zaškrtněte každý prvek, který chcete kopírovat. Uvedeny jsou jen prvky nad polem | Vybraný prvek |
| **Směr** | Osa X, osa Y, osa Z, úsečka nebo osová čára z libovolné dřívější skici, osa rotace nebo vybraná hrana | Osa X |
| **Rozestup (mm)** | Vzdálenost mezi sousedy | 20 |
| **Počet** | Celkový počet, **včetně originálu** (1 až 1000) | 3 |
| **Obrátit směr** | Kopie jdou opačným směrem | Vypnuto |

### Hrana jako směr

1. Klikněte v pohledu na přímou hranu dílu. Pravý panel uvede **Hrana** a její délku.
2. Zvolte {{ui:Lineární}}: pole vede podél této hrany.

Nebo vyberte pole, zvolte hranu a v části **Směr** zvolte „Vybraná hrana (použít právě vybranou)“. Vybraná hrana je pevná v prostoru a nesleduje pozdější změny. Úsečka skici sleduje svou skicu.

## Kruhové pole

1. Vyberte prvek ke kopírování (například jednu díru u okraje kotouče).
2. Zvolte {{ui:Kruhový}}. Objeví se šest kopií rovnoměrně rozmístěných po celém obvodu.
3. Nastavte:

| Volba | Co dělá | Výchozí |
|---|---|---|
| **Osa** | Osa X, Y nebo Z, čára skici, osa rotace nebo vybraná hrana | Osa poslední rotace, pokud existuje, jinak osa Y |
| **Úhel (°)** | 360 rozmístí kopie rovnoměrně dokola. Menší hodnota je rozprostře na tento úhel, první a poslední jsou na koncích | 360 |
| **Počet** | Celkový počet, včetně originálu | 6 |
| **Obrátit směr** | Otočí na opačnou stranu | Vypnuto |

Osy světa procházejí počátkem. U kotouče, jehož střed není na počátku, použijte osovou čáru skici nebo osu rotace.

### Příklad: osm šroubových děr příruby

1. Rotací vytvořte přírubu (viz [Rotace soustruženého dílu](topic:revolve)) kolem osy Y.
2. Skicujte na rovné horní ploše příruby, umístěte jeden bod na roztečnou kružnici a vytvořte díru.
3. Při výběru díry zvolte {{ui:Kruhový}}. Osa je už nastavena na „Osa prvku Revolve1“.
4. Nastavte **Počet** na `8`.

## Zrcadlení

1. Vyberte v historii prvek, který chcete zrcadlit, nebo nevyberte nic a zrcadlete celé těleso **v dosavadním stavu**.
2. Zvolte {{ui:Zrcadlení}}. Zrcadlí se přes **Pravou rovinu**.

Chcete-li místo toho zrcadlit celé těleso přes plochu dílu, nejdřív klikněte na rovnou plochu a potom zvolte {{ui:Zrcadlení}}. (Kliknutí na plochu zruší výběr v historii, takže se vždy zrcadlí celé těleso.)

Nastavení v pravém panelu:

- **Zrcadlit**: zaškrtněte **Celé těleso (v dosavadním stavu)**, nebo jej odškrtněte a zaškrtněte prvky ke kopírování.
- **Rovina zrcadlení**: Přední rovina, Horní rovina, Pravá rovina, plocha, kterou používá nyní („Plocha prvku Extrude1“ nebo „Pevná rovina“), nebo „Plocha vybraná nyní“. Chcete-li zrcadlit vybrané prvky přes plochu: vyberte Zrcadlení v historii, klikněte na plochu v pohledu a zvolte „Plocha vybraná nyní“.

Zrcadlení celého tělesa přes plochu díl zdvojnásobí, například polovinu konzoly na celou konzolu.

## Zprávy

- „Nejdřív vytvořte prvek ke kopírování.“ nebo „Nejdřív vytvořte těleso.“ Zatím není co kopírovat.
- „Vyberte prvky ke kopírování.“ Každé políčko **Prvky ke kopírování** je vyprázdněno.
- „Extrude2 nemá těleso ke kopírování.“ Tento prvek selhal nebo je potlačen.
- „Fillet1 mění hrany nebo stěny tělesa; nelze jej kopírovat. Kopírujte prvky, které tvoří tělesa (vytažení, rotace, díry, importy).“ Zaoblení, sražení hran a skořepiny nelze opakovat ani zrcadlit; nejdřív vytvořte pole, potom zaoblení.
- „Ještě není žádné těleso k zrcadlení.“

:::note
Kopie pole nelze přeskakovat jednotlivě a pole nemůže následovat křivku skici. Pole a zrcadlení skic zatím nejsou hotová: nakreslete opakovanou geometrii skici ručně nebo pomocí **Přidat podle souřadnic**.
:::
