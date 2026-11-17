---
title: Konfigurasjoner og designtabeller
summary: Behold flere størrelser og versjoner av én del som navngitte konfigurasjoner lagret i delfilen, med funksjoner slått av eller på i hver, bytt mellom dem med ett klikk, hent dem inn eller ut som en CSV-designtabell, eller bygg dem alle fra kommandolinjen.
keywords: designtabell, konfigurasjoner, konfigurasjon, størrelser, delfamilie, csv, regneark, varianter, tabelldrevet, undertrykk, undertrykt, slå av en funksjon, alternativer, med eller uten, konfigurator
from: 17249afb
---

En **konfigurasjon** er én størrelse av delen: et navngitt sett med verdier for dens parametere. Delen beholder sine konfigurasjoner i sin egen fil, så de følger med den. En **designtabell** er det samme som en CSV-fil, én rad per konfigurasjon.

Konfigurasjoner setter **parametere**, så legg til dem først (se [Styr en del med parametere](topic:parameters)). En konfigurasjon lagrer parametere som er vanlige tall; parametere som regnes ut fra andre (som `area = w * d`) følger av seg selv.

## Lagre en konfigurasjon

1. På fanen {{ui:Parametere}} setter du parameterne for én størrelse av delen.
2. Under **Konfigurasjoner** skriver du et navn (for eksempel `Stor`) og trykker {{ui:Lagre gjeldende verdier}} eller {{key:Enter}}.

Den nye konfigurasjonen merkes **aktiv**. Endrer du en parameter etterpå, står det **aktiv, endret siden**, så du vet at delen ikke lenger samsvarer med den.

## Bytt, oppdater, gi nytt navn, slett

- {{ui:Bruk}} setter parameterne til den konfigurasjonens verdier og bygger delen på nytt.
- {{ui:Oppdater}} lagrer de gjeldende verdiene i den konfigurasjonen.
- For å gi en nytt navn, skriv det nye navnet i boksen og trykk {{key:Enter}}.
- {{ui:Slett}} fjerner konfigurasjonen. Parameterne beholder verdiene sine.

Hver av disse er ett steg: {{key:Mod+Z}} går tilbake. Gir du en parameter nytt navn, følger alle konfigurasjonene det nye navnet; sletter du en, faller den ut av dem.

## Slå funksjoner av og på i en konfigurasjon

En konfigurasjon lagrer også hvilke funksjoner som er slått av, slik at én del kan ha versjoner **med** og **uten** noe: monteringshull, en fas, en opphøyning.

1. Slå funksjonen av: klikk på den i historikken, og deretter {{ui:Undertrykk}} i {{ui:Egenskaper}}.
2. Lagre konfigurasjonen som vanlig, for eksempel `Uten hull`. Raden lister hva den slår av.
3. Slå funksjonen på igjen ({{ui:Opphev undertrykking}}) og lagre en annen konfigurasjon, for eksempel `Med hull`.

Når en konfigurasjon slår av en funksjon, slår bruk av en konfigurasjon av funksjonene den har av og **slår alle andre funksjoner på**, sammen med parameterverdiene, i ett steg. En konfigurasjon lagret før noen funksjoner ble slått av, regnes som «alt på». {{ui:Oppdater}} lagrer funksjonene slik de er nå, med verdiene.

En del der konfigurasjonene slår av funksjoner, lagres som en nyere filversjon: en eldre PartCraft sier at filen er fra en nyere versjon, i stedet for å åpne den uten dem.

:::note
CSV-designtabellen bærer bare parameterverdier. Å importere en tabell over en konfigurasjon endrer dens verdier og beholder funksjonene den slår av; kommandolinjens `--table` bygger bare verdiene.
:::

Delfilen lagres med konfigurasjonene og med den som var aktiv. Delen åpnes med verdiene den ble lagret med.

## Hent en designtabell inn eller ut

En designtabell er en CSV-fil med en kolonne for hver parameter og en rad for hver konfigurasjon:

```
name,width,thick,bolt
liten,100,6,6.6
medium,140,8,8.5
stor,200,12,13
```

Den første kolonnen kan hete `name`, `config` eller `configuration`; hver annen kolonne må være navnet på en parameter i delen. Celler er tall, med enheter hvis du vil (`8in`). En tom celle utelater den parameteren fra raden.

- {{ui:Importer CSV}} legger til hver rad som en konfigurasjon. En rad med navnet på en eksisterende konfigurasjon erstatter den. Import er ett steg.
- {{ui:Eksporter CSV}} skriver konfigurasjonene ut. Uten noen ennå skriver den én rad med de gjeldende verdiene, et utgangspunkt for et regneark.

Et konfigurasjonsnavn som et regneark ville lest som en formel (begynner med `=`, `+`, `-` eller `@`), skrives med en ledende `'`.

## Alle størrelser på en gang

{{ui:Variantpakke…}} under **Konfigurasjoner** bygger alle konfigurasjonene, eller noen utvalgte, som STEP, IFC, DWG og en forhåndsvisning i én zip-fil, med en tabell over parameterne deres: se [Lag en variantpakke fra konfigurasjonene dine](topic:variant-pack).

Kommandolinjeverktøyet bygger én fil per rad i en CSV-designtabell:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Eksporter konfigurasjonene som CSV først, og send deretter den filen med `--table`. Se [Skript og kommandolinjen](topic:scripts-and-cli). En del lagret som et skript beholder sine konfigurasjoner i en linje `configs json …`.
