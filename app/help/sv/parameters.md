---
title: Styr en del med parametrar
summary: Namnge de mått som spelar roll (bredd, tjocklek, bultstorlek), koppla vilket funktionsnummer eller skissmått som helst till dem med =, och ändra hela delen från en enda tabell.
keywords: parametrar, var den används, används av, globala variabler, variabler, ekvationer, konstruktionsavsikt, drivande mått, länk, uttryck, formel, namnge ett mått, länkade värden
from: 58c646ea
---

En parameter är ett namngivet tal, till exempel `width = 120` eller `margin = bolt * 1.5`. Koppla ett djup, en hålsdiameter, ett mönsterantal eller ett skissmått till den, och ändringen av parametern ändrar alla i ett steg. Så här behåller du konstruktionsavsikten i delen i stället för i ditt huvud.

## Lägg till parametrar

1. Klicka på fliken {{ui:Parameters}} i högerpanelen.
2. Under **Variabler**, skriv ett namn i rutan "namn", till exempel `width`.
3. Skriv dess värde i nästa ruta, till exempel `120`, och tryck på {{key:Enter}} (eller klicka på {{ui:Add}}).

Ett värde kan vara ett tal eller ett uttryck av andra parametrar: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Kolumnen **Värde** visar vad det blir. Ett namn börjar med en bokstav eller `_` och har bara bokstäver, siffror och `_`; namn på funktioner och enheter (`sin`, `mm`, `pi`) vägras, och det gör också en slinga som `a = b` med `b = a`.

## Koppla ett tal till en parameter

1. Klicka på en funktion i historiken, till exempel "Extrude1". Dess inställningar visas på fliken {{ui:Properties}}.
2. Skriv `=` och ett uttryck i en talruta, som **Djup (mm)**: `=thick` eller `=width / 4`.
3. Tryck på {{key:Enter}}.

Rutan visar nu resultatet, och en knapp **ƒ** visas bredvid dess etikett. Peka på den för att se ekvationen. Skissmått fungerar på samma sätt, både i listan **Skissmått** för en funktion och i måttrutan för en öppen skiss (dubbelklicka på ett mått, skriv `=width`, tryck på {{key:Enter}}).

Tal du kan koppla: extruderingsdjup, revolveringsvinkel, hålsdiameter, djup och förlyftsstorlekar, mönsterantal, avstånd och vinkel, rundningsradie, fasavstånd, skaltjocklek, varje skissmått och storlekarna på de nyare funktionerna (andra djup, avsmalning, försänkning, avstånd till referensplan, släppvinkel och andra).

## Ändra en parameter

På fliken {{ui:Parameters}}, skriv ett nytt värde eller uttryck i kolumnen **Uttryck** och tryck på {{key:Enter}}. Allt som är kopplat till den ändras och delen byggs om, i ett steg: {{key:Mod+Z}} ångrar det.

För att ändra ett tal från den andra änden, se [Ekvationer åt båda hållen](topic:equations-two-way).

## Se var en parameter används

Under varje parameter på fliken {{ui:Parameters}} står en rad om vad som använder den:

- talen den styr, till exempel **Extrude1 depth** eller **Sketch1 D2 (distance)**. Klicka på ett för att välja dess funktion och visa dess egenskaper;
- talen den styr **genom** andra parametrar, till exempel **Hole1 diameter (through h, d)** när `d = h + 2` och `h = w / 2`;
- de **parametrar** vars uttryck använder den, de **konfigurationer** som sätter den, och de **skript** som läser den (se [Skriv och kör skript](topic:craftscript)).

”Not used yet.” betyder att ingenting använder den: du kan ta bort den utan att fråga.

## Ta bort koppling, byt namn, ta bort

- **Ta bort koppling från ett tal:** klicka på dess knapp **ƒ**, eller {{ui:Unlink}} i listan **Ekvationer**. Det behåller sitt nuvarande värde och ingen parameter ändrar det längre.
- **Byt namn på en parameter:** skriv ett nytt namn i dess ruta **Namn**. Varje uttryck som använder den skrivs om.
- **Ta bort en parameter:** klicka på × på dess rad. Om något använder den frågar PartCraft om det ska skriva dess nuvarande värde i de uttrycken först.
- **Att ta bort en funktion** tar bort ekvationerna för dess tal; statusraden säger vilka.

:::note
Parametrar sparas i filen `.partcraft.json` (som filversion 3). En del utan parametrar sparas exakt som förut.
:::

## Uttryck

| Skriv | Betyder |
|---|---|
| `120`, `12.5`, `1e3` | ett tal (millimeter, eller grader för en vinkel) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | en längd i andra enheter, omvandlad till millimeter |
| `30deg`, `0.5rad` | en vinkel, omvandlad till grader |
| `+ - * / %` och `^` | aritmetik; `^` är en potens, `-2^2` är −4 |
| `sin cos tan asin acos atan atan2` | trigonometri i grader |
| `sqrt pow exp ln log abs sign` | övriga funktioner |
| `ceil floor int round(x, digits) min max` | avrundning och gränser |
| `if(test, a, b)` med `< <= > >= == !=` | ett val: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Namn är skiftlägeskänsliga: `Width` och `width` är två parametrar.

Se även [Konfigurationer och konstruktionstabeller](topic:design-tables) och [Skript och kommandoraden](topic:scripts-and-cli).
