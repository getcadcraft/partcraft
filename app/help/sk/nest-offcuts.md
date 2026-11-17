---
title: Uchovanie a opätovné použitie zvyškov
summary: Po rozmiestnení sa to, čo zostane z každej tabule, stane očíslovaným zvyškom v zozname zásob; ďalšie rozmiestnenie použije najprv zvyšky, až potom celé tabule.
keywords: rozmiestňovanie, zvyšok, zásoba, zostatok, tabuľa, plech, opätovné použitie, materiál, hrúbka, CSV
from: 7a68d4b8
---

Keď rozmiestňujete súčiastky na tabule, použiteľný zostatok každej tabule (nie úlomky) sa dá uchovať ako **zvyšok**: očíslovaný obrys (R-0001, R-0002 …) s materiálom, hrúbkou, rozmermi a zákazkou, z ktorej pochádza. Zoznam sa uloží spolu so súborom a dá sa uložiť ako CSV.

## Opätovné použitie

Zadajte **materiál** a **hrúbku**, nechajte {{ui:Najprv použiť zvyšky}} zapnuté a rozmiestnite. Zvyšky rovnakého materiálu a hrúbky sa skúšajú od najmenšieho. Súčiastky, ktoré sa zmestia, idú na ne — vnútri vlastného obrysu zvyšku a mimo jeho okraja; čo sa nezmestí, ide na nové tabule. Protokol zákazky uvádza, ktoré zvyšky sa použili a čo zostalo. Ak je zapnuté {{ui:Uložiť zvyšky ako zásobu}}, {{ui:Pridať túto zákazku do zásoby}} potom zapíše zákazku do zoznamu zásob: použitý zvyšok sa označí **Použité** (spolu so zákazkou) a znovu sa nenavrhne; to, čo z neho zostane, sa stane novým zvyškom, ktorý si pamätá svoj pôvodný zvyšok.

## Čo sa počíta ako zvyšok

Zvyšok sa meria s rozostupom, ktorý ste nastavili (žiadna súčiastka nie je bližšie k rezu, než je tento rozostup). Pásy užšie než dvadsatina tabule a kusy menšie než 2 % tabule sú odpad; obe hranice zmeňte, ak vaša dielňa uchováva menšie kusy. Diery v súčiastkach patria súčiastkam a neukladajú sa. Kotúč zvyšky nemá.

## Vo výkrese

DXF rozmiestnenia nakreslí obrys každého zvyšku na hladine REMNANTS s jeho číslom v strede, aby sa kusy dali pri rezaní označiť.

Ešte nie je hotové: smer zrna zvyšku, hárok so štítkami alebo čiarovými kódmi, zvyšky kotúčov, zásoby zdieľané medzi projektmi.
