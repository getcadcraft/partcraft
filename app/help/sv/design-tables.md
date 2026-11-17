---
title: Konfigurationer och designtabeller
summary: Behåll flera storlekar och versioner av en del som namngivna konfigurationer sparade i delfilen, med funktioner påslagna eller avstängda i varje, byt mellan dem med ett klick, läs in eller exportera dem som en CSV-designtabell eller bygg alla från kommandoraden.
keywords: designtabell, konfigurationer, konfiguration, storlekar, familj av delar, csv, kalkylblad, varianter, tabelldriven, stäng av en funktion, undertryck, undertryckt, alternativ, med eller utan, konfigurator
from: 17249afb
---

En **konfiguration** är en storlek av delen: en namngiven uppsättning värden för dess parametrar. Delen behåller sina konfigurationer i sin egen fil, så de följer med den. En **designtabell** är samma sak som en CSV-fil, en rad per konfiguration.

Konfigurationer anger **parametrar**, så lägg till dem först (se [Styr en del med parametrar](topic:parameters)). En konfiguration sparar de parametrar som är vanliga tal; parametrar som räknas ut från andra (till exempel `area = w * d`) följer med av sig själva.

## Spara en konfiguration

1. På fliken {{ui:Parametrar}} anger du parametrarna för en storlek av delen.
2. Under **Konfigurationer** skriver du ett namn (till exempel `Stor`) och trycker på {{ui:Spara aktuella värden}} eller {{key:Enter}}.

Den nya konfigurationen markeras **aktiv**. Ändrar du en parameter efteråt står det **aktiv, ändrad sedan**, så du vet att delen inte längre stämmer med den.

## Byt, uppdatera, byt namn, ta bort

- {{ui:Verkställ}} sätter parametrarna till den konfigurationens värden och bygger om delen.
- {{ui:Uppdatera}} sparar de aktuella värdena i den konfigurationen.
- Byt namn genom att skriva det nya namnet i dess ruta och trycka på {{key:Enter}}.
- {{ui:Ta bort}} tar bort konfigurationen. Parametrarna behåller sina värden.

Vart och ett av dessa är ett steg: {{key:Mod+Z}} går tillbaka. Byter du namn på en parameter följer varje konfiguration det nya namnet; tar du bort en konfiguration försvinner den ur listan.

## Slå på och av funktioner i en konfiguration

En konfiguration sparar också vilka funktioner som är avstängda, så en del kan ha versioner **med** och **utan** något: monteringshål, en fas, en upphöjning.

1. Stäng av funktionen: klicka på den i historiken, och sedan {{ui:Undertryck}} i {{ui:Egenskaper}}.
2. Spara konfigurationen som vanligt, till exempel `Inga hål`. Dess rad listar vad den stänger av.
3. Slå på funktionen igen ({{ui:Häv undertryckning}}) och spara en annan konfiguration, till exempel `Med hål`.

När någon konfiguration har en funktion avstängd, stänger tillämpning av en konfiguration av dess funktioner och **slår på varje annan funktion**, tillsammans med dess parametervärden, i ett steg. En konfiguration som sparats innan någon funktion stängdes av räknas som "allt på". {{ui:Uppdatera}} sparar funktionerna som de är nu, med värdena.

En del vars konfigurationer stänger av funktioner sparas som en nyare filversion: en äldre PartCraft säger att filen är från en nyare version i stället för att öppna den utan dem.

:::note
Den här CSV-designtabellen bär bara parametervärden. Om du importerar en tabell över en konfiguration ändras dess värden och de funktioner den stänger av behålls; kommandoradens `--table` bygger bara värdena.
:::

Delfilen sparas med konfigurationerna och med den som var aktiv. Delen öppnas med de värden den sparades med.

## Läs in eller exportera en designtabell

En designtabell är en CSV-fil med en kolumn för varje parameter och en rad för varje konfiguration:

```
name,width,thick,bolt
liten,100,6,6.6
medium,140,8,8.5
stor,200,12,13
```

Den första kolumnen kan heta `name`, `config` eller `configuration`; varje annan kolumn måste vara namnet på en parameter i delen. Celler är tal, med enheter om du vill (`8in`). En tom cell lämnar den parametern utanför raden.

- {{ui:Importera CSV}} lägger till varje rad som en konfiguration. En rad med namnet på en befintlig konfiguration ersätter den. Importen är ett steg.
- {{ui:Exportera CSV}} skriver ut konfigurationerna. Finns det inga ännu skriver den en rad med de aktuella värdena, en utgångspunkt för ett kalkylblad.

Ett konfigurationsnamn som ett kalkylblad skulle läsa som en formel (börjar med `=`, `+`, `-` eller `@`) skrivs med en inledande `'`.

## Alla storlekar på en gång

{{ui:Variantpaket…}} under **Konfigurationer** bygger varje konfiguration, eller några utvalda, som STEP, IFC, DWG och en förhandsvisning i en zip-fil, med en tabell över deras parametrar: se [Gör ett variantpaket av dina konfigurationer](topic:variant-pack).

Kommandoradsverktyget bygger en fil per rad i en CSV-designtabell:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Exportera konfigurationerna som CSV först och skicka sedan den filen med `--table`. Se [Skript och kommandoraden](topic:scripts-and-cli). En del sparad som ett skript behåller sina konfigurationer på en rad `configs json …`.
