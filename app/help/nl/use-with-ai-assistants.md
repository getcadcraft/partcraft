---
title: PartCraft gebruiken met een AI-assistent
summary: Laat uw eigen AI-assistent of script met het geopende onderdeel werken: de kenmerken, parameters en massa lezen, een parameter wijzigen en opnieuw opbouwen, een script uitvoeren, exporteren en opslaan. Uit tot u het aanzet.
keywords: ai, assistent, agent, mcp, model context protocol, script, automatisering, parameters, massa-eigenschappen, stl, step, 3mf, rechten, loskoppelen, activiteit, mappen
from: e66d3470
---

## Wat u leert

Hoe u een AI-assistent (of een script dat u zelf schreef) het onderdeel laat bekijken dat u open heeft, de parameters ervan laat wijzigen, een script laat uitvoeren en het laat exporteren, en hoe u bepaalt wat het mag aanraken.

PartCraft heeft **geen eigen AI** en stuurt niets ergens heen. U brengt de assistent zelf mee: elk programma dat het Model Context Protocol (MCP) spreekt. PartCraft geeft de assistent alleen gereedschappen, en u kiest welke.

## Inschakelen

1. Open {{ui:Instellingen}} (het tandwiel in de app-balk, of {{key:Mod+,}}) en ga naar het tabblad {{ui:PartCraft}}.
2. Vink onder {{ui:Assistenten}} **Laat AI-assistenten en scripts PartCraft gebruiken** aan. Het staat uit tot u dat doet.
3. Kies wat het mag doen. **Lezen** staat van het begin aangevinkt; vink de andere pas aan wanneer u ze nodig heeft.
4. Wilt u dat het naar een map exporteert en opslaat, kies dan {{ui:Een map toevoegen…}} onder **Mappen die het mag gebruiken** en kies de map in het dialoogvenster van Studio.

Assistenten verbinden via **CadCraft Studio** op uw computer: Studio toont het adres en het token om in de assistent te plakken. Een browsertabblad kan geen verbinding openen voor een assistent.

## Wat een assistent kan vragen

| Tool | Recht | Wat het doet |
|---|---|---|
| `part_describe`, `features_list` | Lezen | De kenmerken in volgorde, met wat is gebouwd en wat is mislukt, het materiaal, het volume en de afmetingen van het massief |
| `params_list` | Lezen | De parameters en elk getal dat een vergelijking kan aansturen, met hun waarden |
| `mass_properties` | Lezen | Volume, oppervlakte, zwaartepunt, de traagheid daaromheen; de massa wanneer het onderdeel een materiaal heeft |
| `param_set` | Bewerken | Zet een parameter of het getal van een kenmerk en bouwt opnieuw op. Eén stap die u ongedaan kunt maken |
| `script_run` | Bewerken | Voert een CraftScript-, Lua- of Python-script uit zoals de werkomgeving {{ui:Script}} dat doet: afgesloten, zonder bestanden en zonder netwerk. Het onderdeel verandert niet |
| `part_export` | Exporteren | STL, 3MF, STEP of OpenUSD (.usdz, .usda, .usdc), zoals {{ui:Bestand}} › {{ui:Exporteren}} ze schrijft |
| `link_push` | Bewerken | Werkt een model bij dat uit een ander programma is gekoppeld (zie [Een .3dm-model live houden](topic:live-3dm-link)) |
| `link_status` | Lezen | Geeft aan of een gekoppeld model er nog is en wanneer het voor het laatst is bijgewerkt |
| `part_save` | Opslaan | PartCraft's eigen {{ui:Opslaan}} |
| `illustrate_export` | Exporteren | Een handleiding uit de werkomgeving {{ui:Illustrate}} als PDF of SVG-lijntekening van de aanzichten, als het interactieve 3D-bestand, of de instructies als PDF of webpagina, zoals de menu's {{ui:Exporteren}} en {{ui:Instructies}} van de werkomgeving ze schrijven ([Handleidingen](topic:illustrate)) |

:::note
Deze versie gebruikt de meshkernel: volumes komen uit de driehoeken (iets minder dan bij een echt gekromd volume), en STEP wordt gefacetteerd geschreven, met driehoeken in plaats van exacte oppervlakken.
:::

## U houdt de regie

- **Elke wijziging is één stap ongedaan te maken**, met een label voor de assistent, bijvoorbeeld "Assistent: l = 45 ingesteld". Druk op {{key:Mod+Z}} om het terug te draaien.
- **U ziet wanneer er een is verbonden.** Een knop in de app-balk noemt de assistent zolang die verbonden is. Klik erop om te zien wat hij mag, of om hem te **loskoppelen**.
- **Activiteit.** {{ui:Instellingen}} › {{ui:PartCraft}} › {{ui:Assistenten}} › {{ui:Activiteit}} toont elke aanroep; {{ui:Het logboek opslaan}} bewaart een kopie.
- **Mappen.** Het leest en schrijft alleen bestanden in de mappen die u heeft toegevoegd; {{ui:Verwijderen}} haalt een map meteen weer weg.

## Zonder PartCraft te openen

De CadCraft-bestandsserver voor assistenten (`npx @getcadcraft/mcp`) en de opdrachtregel `cadcraft` openen `.partcraft.json`-onderdelen met de eigen code en meshkernel van PartCraft, zonder venster: dezelfde leesgereedschappen, parameters instellen, CraftScript-scripts, exports (ook OpenUSD) en opslaan. `cadcraft convert bracket.partcraft.json bracket.stl` bouwt een onderdeel op en schrijft het vanaf de opdrachtregel. Handleidingen (`.partcraft-manual.json`) exporteren daar ook: `illustrate_export`, of `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (voeg `--instructions` toe voor de instructies).

## Als er iets niet werkt

- **"heeft het bewerkingsrecht nodig":** vink onder {{ui:Assistenten}} **Bewerken** aan en vraag het daarna opnieuw.
- **"aangestuurd door de vergelijking":** dat getal volgt een parameter; vraag de assistent in plaats daarvan de parameter in te stellen.
- **De wijziging was verkeerd:** druk op {{key:Mod+Z}}.

## Zie ook

- [Recepten voor AI-assistenten](common:assistants-recipes): uitgewerkte voorbeelden, elk met de gereedschappen die het aanroept.
