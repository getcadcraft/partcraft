---
title: Brug PartCraft med en AI-assistent
summary: Lad din egen AI-assistent eller dit script arbejde med den åbne del, læse dens features, parametre og masse, ændre en parameter og bygge om, køre et script, eksportere og gemme. Slået fra, indtil du slår det til.
keywords: ai, assistent, agent, mcp, model context protocol, script, automatisering, parametre, masseegenskaber, stl, step, 3mf, tilladelser, afbryd, aktivitet, mapper
from: e66d3470
---

## Hvad du lærer

Hvordan du lader en AI-assistent (eller et script du har skrevet) kigge på den del du har åben, ændre dens parametre, køre et script og eksportere den, og hvordan du bestemmer hvad den må røre ved.

PartCraft har **ingen AI af sin egen** og sender ikke noget nogen steder. Du medbringer assistenten: ethvert program der taler Model Context Protocol (MCP). PartCraft giver den blot værktøjer, og du vælger hvilke.

## Slå den til

1. Åbn {{ui:Indstillinger}} (tandhjulet i appbjælken, eller {{key:Mod+,}}) og gå til fanen {{ui:PartCraft}}.
2. Under {{ui:Assistenter}} sætter du kryds i **Lad AI-assistenter og scripts bruge PartCraft**. Den er slået fra, indtil du gør det.
3. Vælg hvad den må gøre. **Læs** er sat til at begynde med; sæt kryds i de andre først, når du har brug for dem.
4. For at lade den eksportere og gemme i en mappe, vælg {{ui:Tilføj en mappe…}} under **Mapper den må bruge** og vælg mappen i Studios dialogboks.

Assistenter forbinder gennem **CadCraft Studio** på din computer: Studio viser adressen og den token, du skal indsætte i assistenten. En browserfane kan ikke åbne en forbindelse for en assistent.

## Hvad en assistent kan bede om

| Værktøj | Tilladelse | Hvad det gør |
|---|---|---|
| `part_describe`, `features_list` | Læs | Features i rækkefølge med hvad der blev bygget, og hvad der fejlede, materialet, legemets volumen og størrelse |
| `params_list` | Læs | Parametrene og hvert tal en ligning kan styre, med deres værdier |
| `mass_properties` | Læs | Volumen, areal, massemidtpunkt og inertien om det; massen når delen har et materiale |
| `param_set` | Rediger | Sætter en parameter eller et features tal og bygger om. Ét trin du kan fortryde |
| `script_run` | Rediger | Kører et CraftScript-, Lua- eller Python-script på samme måde som {{ui:Script}}-arbejdsområdet: isoleret, uden filer og uden netværk. Delen ændres ikke |
| `part_export` | Eksport | STL, 3MF, STEP eller OpenUSD (.usdz, .usda, .usdc), som {{ui:Fil}} › {{ui:Eksportér}} skriver dem |
| `link_push` | Rediger | Opdaterer en model der er linket fra et andet program (se [Hold en .3dm-model levende](topic:live-3dm-link)) |
| `link_status` | Læs | Siger om en linket model stadig er der, og hvornår den sidst blev opdateret |
| `part_save` | Gem | PartCrafts egen {{ui:Gem}} |
| `illustrate_export` | Eksport | En manual fra {{ui:Illustrér}}-arbejdsområdet som PDF eller SVG-linjetegning af dens visninger, som den interaktive 3D-fil, eller dens instruktioner som PDF eller webside, som arbejdsområdets {{ui:Eksportér}}- og {{ui:Instruktioner}}-menuer skriver dem ([Manualer](topic:illustrate)) |

:::note
Denne build bruger mesh-kernen: volumener kommer fra trekanterne (lidt under et rigtigt krummet legeme), og STEP skrives facetteret, med trekanter i stedet for eksakte flader.
:::

## Du har kontrollen

- **Hver ændring er ét fortrydelsestrin**, mærket til assistenten, for eksempel »Assistent: sæt l = 45«. Tryk {{key:Mod+Z}} for at tage den tilbage.
- **Du ved, når en er forbundet.** En knap i appbjælken navngiver assistenten, mens den er forbundet. Klik på den for at se hvad den må gøre, eller for at **Afbryde** den.
- **Aktivitet.** {{ui:Indstillinger}} › {{ui:PartCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} lister hvert kald; {{ui:Gem loggen}} gemmer en kopi.
- **Mapper.** Den læser og skriver kun filer i de mapper, du har tilføjet; {{ui:Fjern}} tager en mappe tilbage med det samme.

## Uden at åbne PartCraft

CadCraft-filserveren til assistenter (`npx @getcadcraft/mcp`) og kommandolinjeværktøjet `cadcraft` åbner `.partcraft.json`-dele med PartCrafts egen kode og mesh-kerne, uden vindue: de samme læseværktøjer, parameterindstilling, CraftScript-scripts, eksport (også OpenUSD) og gemning. `cadcraft convert bracket.partcraft.json bracket.stl` bygger en del og skriver den fra kommandolinjen. Manualer (`.partcraft-manual.json`) eksporteres også dér: `illustrate_export`, eller `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (tilføj `--instructions` for instruktionerne).

## Hvis noget ikke virker

- **»kræver tilladelsen Rediger«:** sæt kryds i **Rediger** under {{ui:Assistenter}}, og spørg så igen.
- **»styret af ligningen«:** det tal følger en parameter; bed assistenten om at sætte parameteren i stedet.
- **Dens ændring var forkert:** tryk {{key:Mod+Z}}.

## Se også

- [Opskrifter til AI-assistenter](common:assistants-recipes): arbejdseksempler, hver med de værktøjer den kalder.
