---
title: Odeslání výkresu na laser
summary: Vyberte, co každá vrstva dělá (řez, rýha, gravírování, výplň, obrázek), zkontrolujte pohyby hlavy, uložte G-kód pro režim laseru GRBL, nebo jej po orámování úlohy odešlete z prohlížeče.
keywords: laser, laserová řezačka, laserová gravírka, GRBL, G-kód, gravírování, výplň, dithering, gravírování obrázku, rýha, řez, Web Serial, Linux, orámovat úlohu, výkon, rychlost, průchody
from: 327b3c46
---

Panel {{ui:Laser}} převádí vrstvy výkresu na program pro laser s řídicí jednotkou GRBL (většina amatérských a malodílenských diodových a CO2 řídicích jednotek). V PartCraftu zvolte {{ui:Export}} › {{ui:Laser program…}} a pak {{ui:Přidat obrysy z DXF…}}: obrysy a díry se načtou do vrstvy CUT. Plošné rozvinutí plechových dílů (s čarami ohybu ve vrstvě BEND) vyžaduje přesné jádro, které tato verze nemá. Nastavení se uloží do souboru dílu nebo sestavy.

:::warning
Každé nastavení nejprve vyzkoušejte na odpadu, noste ochranné brýle vhodné pro váš laser, kde je víko, nechte ho zavřené, a běžící laser nikdy nenechávejte bez dozoru. Čísla, se kterými vrstva začíná, jsou jen zástupná, nejsou doporučením pro žádný materiál.
:::

## Zvolte, co každá vrstva dělá

Každá vrstva výkresu je jeden řádek. {{ui:Does}} ji nastaví na **Řezat**, **Rýhovat**, **Gravírovat čáry**, **Vyplnit tvary**, **Gravírovat obrázek** nebo **Neodesílat**, s {{ui:Výkon %}}, {{ui:Rychlost mm/min}} a počtem {{ui:Průchody}}.

- **Výplň** vypálí vnitřek uzavřených tvarů čarami, vzdálenými {{ui:Rozestup čar}}, pod {{ui:Úhel}}, v obou směrech nebo v jednom, s přejezdem, aby hlava měla rychlost, když se laser zapne; křížová šrafa přidá druhý průchod pod 90°. Tvar s dírou zůstane v místě díry otevřený.
- **Gravírovat obrázek** převede obrázek na tečky (Floyd–Steinberg, Atkinson, uspořádaně, nebo prostě černobíle s prahem) nebo, s *Stupněmi šedi*, na proměnlivý výkon.
- Pořadí: nejdřív obrázky a výplně, pak gravírování čar, pak rýhy, pak řezy, aby se vyřezaný díl při gravírování nehýbal. Uvnitř jedné vrstvy dráhy běží **zevnitř ven** (díra před deskou, ve které je), vždy k nejbližší.

## Náhled, pak uložení

Náhled ukazuje, co hlava dělá: vypalované čáry barevně, rychlé pohyby šedě a zelený rámeček kolem všeho, co se vypaluje. Pod ním jsou velikost, délka vypalování a odhad času (bez zrychlení; skutečný stroj trvá déle). {{ui:Uložit G-kód…}} zapíše G-kód pro režim laseru GRBL: `$32=1`, `M4` (nebo `M3`) s hodnotami S, pohyby `G0` a `G1`, na konci `M5`. X0 Y0 je levý dolní roh úlohy, pokud nezvolíte počátek výkresu: tam nastavte nulu obrobku na svém stroji. G-kód odpovídá dokumentovanému režimu laseru GRBL; na skutečném laseru zatím nebyl vyzkoušen.

## Odeslání z prohlížeče

V Chrome a Edge vás {{ui:Připojit…}} požádá o výběr USB portu laseru. Nic se nepřipojí ani neodešle, dokud nestisknete tlačítko. Nejprve stiskněte {{ui:Orámovat úlohu}}: hlava obkrouží rámeček úlohy s laserem **vypnutým** (nebo na nízkém výkonu nastaveném pro ukazovátko), abyste viděli, kde bude vypalovat. Teprve pak se zpřístupní {{ui:Odeslat úlohu}} a po každé změně zase zhasne. {{ui:Pozastavit}} drží hlavu, {{ui:Zastavit}} hlavu zastaví, resetuje řídicí jednotku (laser se vypne) a odešle `M5`. Tam, kde chybí Web Serial (Firefox, Safari a CadCraft Studio, jehož webový pohled jej zatím nemá), uložte G-kód a odešlete jej vlastním programem laseru.

## Ještě není hotovo

Formáty jiných řídicích jednotek (Ruida, lasery Marlin, soubory výrobců), můstky a náběhy, kompenzace šířky řezu, knihovny materiálů, rotační a osa Z, zarovnání kamerou.
