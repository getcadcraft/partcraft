---
title: Uchování a opětovné použití odřezků
summary: Po rozmístění se zbytek každé desky stane očíslovaným zbytkem v seznamu zásob; další rozmístění nejdřív použije zbytky, pak celé desky.
keywords: rozmísťování, odřezek, zbytek, zásoby, zbytek materiálu, deska, list, opětovné použití, materiál, tloušťka, CSV
from: 7a68d4b8
---

Když rozmísťujete díly na deskách, lze využitelný zbytek každé desky (ne úlomky) uchovat jako **zbytek**: očíslovaný obrys (R-0001, R-0002 …) s materiálem, tloušťkou, velikostí a zakázkou, ze které pochází. Seznam se uloží se souborem a lze jej uložit jako CSV.

## Opětovné použití

Zadejte **materiál** a **tloušťku**, nechte {{ui:Nejprve použít zbytky}} zapnuté a rozmístěte. Zbytky stejného materiálu a tloušťky se zkouší od nejmenšího; díly, které se tam vejdou, na ně jdou, uvnitř vlastního obrysu zbytku a s odstupem od jeho hrany; co se nevejde, jde na nové desky. Protokol zakázky uvádí, které zbytky byly použity a co zbylo. Pokud je zapnuto {{ui:Uložit zbylé kusy jako zbytky}}, pak {{ui:Přidat tuto zakázku do zásob}} ji zapíše do seznamu zásob: použitý zbytek je označen **Použito** (se zakázkou) a znovu se nenabízí; to, co z něj zbylo, se stane novým zbytkem, který si pamatuje svůj původ.

## Co se počítá jako zbytek

Zbytek se měří s rozestupem, který jste nastavili (žádný díl není od řezu blíž než tento rozestup). Pruhy užší než jedna dvacetina desky a kusy menší než 2 % desky jsou odpad; obě meze změňte, pokud vaše dílna drží menší kusy. Otvory uvnitř dílů patří dílům a nejsou uchovány. Svitek zbytky nemá.

## V kresbě

DXF rozmístění kreslí obrys každého zbytku na vrstvě REMNANTS s jeho číslem uprostřed, aby bylo možné kusy při řezání označit.

Ještě není hotovo: směr zrna zbytku, list s čárovými kódy nebo štítky, zbytky svitků, zásoby sdílené mezi projekty.
