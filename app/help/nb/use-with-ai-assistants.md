---
title: Bruk PartCraft med en KI-assistent
summary: La din egen KI-assistent eller ditt eget skript jobbe med den åpne delen: lese funksjonene, parametere og masse, endre en parameter og bygge på nytt, kjøre et skript, eksportere og lagre. Av til du slår det på.
keywords: ai, ki, assistent, agent, mcp, model context protocol, skript, automatisering, parametere, massegenskaper, stl, step, 3mf, tillatelser, koble fra, aktivitet, mapper
from: e66d3470
---

## Hva du lærer

Hvordan du lar en KI-assistent (eller et skript du har skrevet) se på delen du har åpen, endre parametrene, kjøre et skript og eksportere den, og hvordan du bestemmer hva den får røre.

PartCraft har **ingen egen KI** og sender ingenting noe sted. Du tar med assistenten: et hvilket som helst program som snakker Model Context Protocol (MCP). PartCraft gir den bare verktøy, og du velger hvilke.

## Slik slår du det på

1. Åpne {{ui:Innstillinger}} (tannhjulet i appfeltet, eller {{key:Mod+,}}) og gå til fanen {{ui:PartCraft}}.
2. Under {{ui:Assistenter}} kryss du av **La KI-assistenter og skript bruke PartCraft**. Den er av til du gjør det.
3. Velg hva den får gjøre. **Les** er avkrysset fra start; kryss av de andre bare når du trenger dem.
4. For å la den eksportere og lagre i en mappe, velg {{ui:Legg til en mappe…}} under **Mapper den kan bruke** og velg mappen i Studios dialogboks.

Assistenter kobles til via **CadCraft Studio** på datamaskinen din: Studio viser adressen og tokenet du limer inn i assistenten. En nettleserfane kan ikke åpne en tilkobling for en assistent.

## Hva en assistent kan be om

| Verktøy | Tillatelse | Hva det gjør |
|---|---|---|
| `part_describe`, `features_list` | Les | Funksjonene i rekkefølge med hva som ble bygget og hva som feilet, materialet, volumet og størrelsen til volumlegemet |
| `params_list` | Les | Parametrene og hvert tall en ligning kan styre, med verdiene deres |
| `mass_properties` | Les | Volum, areal, tyngdepunkt og treghetsmomentet om det; massen når delen har et materiale |
| `param_set` | Rediger | Setter en parameter eller en funksjons tall og bygger på nytt. Ett steg du kan angre |
| `script_run` | Rediger | Kjører et CraftScript-, Lua- eller Python-skript på samme måte som arbeidsområdet {{ui:Skript}} gjør: isolert, uten filer og uten nettverk. Delen endres ikke |
| `part_export` | Eksport | STL, 3MF, STEP eller OpenUSD (.usdz, .usda, .usdc), slik {{ui:Fil}} › {{ui:Eksporter}} skriver dem |
| `link_push` | Rediger | Oppdaterer en modell koblet fra et annet program (se [Hold en .3dm-modell oppdatert](topic:live-3dm-link)) |
| `link_status` | Les | Sier om en koblet modell fortsatt finnes, og når den sist ble oppdatert |
| `part_save` | Lagre | PartCraft sin egen {{ui:Lagre}} |
| `illustrate_export` | Eksport | En manual fra arbeidsområdet {{ui:Illustrate}} som PDF eller SVG-strektegning av visningene, som den interaktive 3D-filen, eller instruksjonene som PDF eller nettside, slik arbeidsområdets menyer {{ui:Eksporter}} og {{ui:Instruksjoner}} skriver dem ([Manualer](topic:illustrate)) |

:::note
Denne versjonen bruker mesh-kjernen: volumene kommer fra trekantene (litt under et ekte buet volumlegeme), og STEP skrives fasettert, med trekanter i stedet for eksakte flater.
:::

## Du har kontroll

- **Hver endring er ett angrestrinn**, merket for assistenten, for eksempel «Assistent: sett l = 45». Trykk {{key:Mod+Z}} for å angre den.
- **Du vet når en er tilkoblet.** En knapp i appfeltet viser navnet på assistenten mens den er tilkoblet. Klikk på den for å se hva den får gjøre, eller for å **Koble fra** den.
- **Aktivitet.** {{ui:Innstillinger}} › {{ui:PartCraft}} › {{ui:Assistenter}} › {{ui:Aktivitet}} lister hvert kall; {{ui:Lagre loggen}} lagrer en kopi.
- **Mapper.** Den leser og skriver bare filer i mappene du har lagt til; {{ui:Fjern}} tar en mappe tilbake med en gang.

## Uten å åpne PartCraft

Filserveren for assistenter (`npx @getcadcraft/mcp`) og kommandolinjen `cadcraft` åpner `.partcraft.json`-deler med PartCraft sin egen kode og mesh-kjerne, uten vindu: de samme lesverktøyene, setting av parametere, CraftScript-skript, eksporter (også OpenUSD) og lagring. `cadcraft convert bracket.partcraft.json bracket.stl` bygger en del og skriver den fra kommandolinjen. Manualer (`.partcraft-manual.json`) eksporteres der også: `illustrate_export`, eller `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (legg til `--instructions` for instruksjonene).

## Hvis noe ikke fungerer

- **«needs the edit permission»:** kryss av **Rediger** under {{ui:Assistenter}}, og spør igjen.
- **«driven by the equation»:** dette tallet følger en parameter; be assistenten sette parameteren i stedet.
- **Endringen var feil:** trykk {{key:Mod+Z}}.

## Se også

- [Oppskrifter for KI-assistenter](common:assistants-recipes): arbeidseksempler, hver med verktøyene den kaller.
