---
title: Konfigurationer og designtabeller
summary: Behold flere størrelser og versioner af én del som navngivne konfigurationer gemt i delfilen, med features slået til eller fra i hver, skift mellem dem med ét klik, hent dem ind eller ud som en CSV-designtabel, eller byg dem alle fra kommandolinjen.
keywords: designtabel, konfigurationer, konfiguration, størrelser, familie af dele, csv, regneark, varianter, tabelstyret, delefamilie, undertryk, undertrykt, slå feature fra, valgmuligheder, med eller uden, konfigurator
from: 17249afb
---

En **konfiguration** er én størrelse af delen: et navngivet sæt værdier for dens parametre. Delen gemmer sine konfigurationer i sin egen fil, så de følger med den. En **designtabel** er det samme som en CSV-fil, én række per konfiguration.

Konfigurationer sætter **parametre**, så tilføj dem først (se [Styr en del med parametre](topic:parameters)). En konfiguration gemmer de parametre, der er almindelige tal; parametre, der beregnes ud fra andre (som `area = w * d`), følger af sig selv.

## Gem en konfiguration

1. Sæt parametrene for én størrelse af delen på fanen {{ui:Parametre}}.
2. Under **Konfigurationer** skriv et navn (fx `Stor`) og tryk {{ui:Gem aktuelle værdier}} eller {{key:Enter}}.

Den nye konfiguration markeres **aktiv**. Ændrer du et parameter bagefter, står der **aktiv, ændret siden**, så du ved, at delen ikke længere passer til den.

## Skift, opdatér, omdøb, slet

- {{ui:Anvend}} sætter parametrene til den konfigurations værdier og bygger delen om.
- {{ui:Opdatér}} gemmer de aktuelle værdier i den konfiguration.
- For at omdøbe en, skriv det nye navn i dens felt og tryk {{key:Enter}}.
- {{ui:Slet}} fjerner konfigurationen. Parametrene beholder deres værdier.

Hver af disse er ét trin: {{key:Mod+Z}} fortryder. Hvis du omdøber et parameter, følger hver konfiguration det nye navn; hvis du sletter en, forsvinder den fra dem.

## Slå features til og fra i en konfiguration

En konfiguration gemmer også, hvilke features der er slået fra, så én del kan have versioner **med** og **uden** noget: monteringshuller, en affasning, en knast.

1. Slå featuren fra: klik på den i historikken, og derefter {{ui:Undertryk}} i {{ui:Egenskaber}}.
2. Gem konfigurationen som normalt, fx `Uden huller`. Dens række lister, hvad den slår fra.
3. Slå featuren til igen ({{ui:Ophæv undertrykkelse}}) og gem en anden konfiguration, fx `Med huller`.

Når en konfiguration slår en feature fra, slår anvendelse af en konfiguration dens features fra og **alle andre features til**, sammen med dens parameterværdier, i ét trin. En konfiguration, der blev gemt, før features blev slået fra i nogen af dem, tæller som »alt til«. {{ui:Opdatér}} gemmer features, som de er nu, med værdierne.

En del, hvis konfigurationer slår features fra, gemmes som en nyere filversion: en ældre PartCraft siger, at filen er fra en nyere version, i stedet for at åbne den uden dem.

:::note
Designtabellen i CSV bærer kun parameterværdier. Import af en tabel over en konfiguration ændrer dens værdier og beholder de features, den slår fra; kommandolinjens `--table` bygger kun værdierne.
:::

Delfilen gemmes med konfigurationerne og med den, der var aktiv. Delen åbnes med de værdier, den blev gemt med.

## Hent en designtabel ind eller ud

En designtabel er en CSV-fil med en kolonne for hvert parameter og en række for hver konfiguration:

```
name,width,thick,bolt
lille,100,6,6.6
mellem,140,8,8.5
stor,200,12,13
```

Første kolonne kan hedde `name`, `config` eller `configuration`; alle andre kolonner skal være navnet på et parameter i delen. Celler er tal, med enheder hvis du vil (`8in`). En tom celle lader det parameter ligge uden for rækken.

- {{ui:Importér CSV}} tilføjer hver række som en konfiguration. En række med navnet på en eksisterende konfiguration erstatter den. Import er ét trin.
- {{ui:Eksportér CSV}} skriver konfigurationerne ud. Har du ingen endnu, skriver den én række med de aktuelle værdier, et udgangspunkt for et regneark.

Et konfigurationsnavn, som et regneark ville læse som en formel (begyndende med `=`, `+`, `-` eller `@`), skrives med en førende `'`.

## Alle størrelser på én gang

{{ui:Variantpakke…}} under **Konfigurationer** bygger alle konfigurationer, eller et udvalg, som STEP, IFC, DWG og en forhåndsvisning i én zip-fil, med en tabel over deres parametre: se [Lav en variantpakke af dine konfigurationer](topic:variant-pack).

Kommandolinjeværktøjet bygger én fil per række i en CSV-designtabel:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Eksportér konfigurationerne som CSV først, og angiv derefter den fil med `--table`. Se [Scripts og kommandolinjen](topic:scripts-and-cli). En del, der er gemt som et script, beholder sine konfigurationer i en linje `configs json …`.
