---
title: Opslaan, opnieuw openen en doorwerken
summary: Onderdelen en samenstellingen op uw computer opslaan, een naam geven, ze opnieuw openen met een knop, toets of slepen, versies bewaren en voorkomen dat werk verloren gaat in een browsertabblad.
keywords: opslaan, openen, opnieuw openen, laden, downloaden, versies, back-up, hernoemen, bestandsnaam, verloren werk, site verlaten, partcraft.json, partcraft-asm.json, nieuw onderdeel
from: c18a5abc
---

PartCraft bewaart niets tussen bezoeken. Uw onderdeel leeft in het browsertabblad tot u het als bestand opslaat, en komt terug wanneer u dat bestand opent.

## Een onderdeel opslaan

1. Geef het onderdeel een naam: klik op lege ruimte in het beeld zodat niets is geselecteerd, typ de **Naam** in het rechterpaneel en druk op {{key:Enter}}. De kop van de geschiedenis verandert mee.
2. Druk op {{key:Mod+S}} of kies {{ui:Opslaan}}.
3. De browser downloadt `<naam>.partcraft.json`. In de statusbalk staat "Saved Bracket.partcraft.json (the full history; reopen it here to keep editing)."

Als er een schets open is, wordt die eerst gesloten als u opslaat.

Het bestand bevat elke schets, beperking, maatvoering en feature, plus onderdrukte features, de terugrolpositie, de instellingen van het tekenblad en de GD&T-notities, en de volledige tekst van elk geïmporteerd STEP-volume. Uw lijst met ongedaan te maken handelingen wordt niet opgeslagen.

## Een samenstelling opslaan

In een samenstelling downloadt {{ui:Opslaan}} of {{key:Mod+S}} `<naam van de samenstelling>.partcraft-asm.json`. Elk onderdeel wordt erin opgeslagen: u hebt de losse onderdeelbestanden niet nodig om het opnieuw te openen.

Terwijl u een onderdeel bewerkt vanuit een samenstelling, slaat {{key:Mod+S}} alleen dat onderdeel op als `.partcraft.json`. Kies eerst {{ui:Terug}} en sla daarna op om de hele samenstelling op te slaan.

## Opnieuw openen

Een van deze manieren:

- kies {{ui:Openen}} of druk op {{key:Mod+O}}, en kies daarna het bestand;
- sleep het bestand van {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheer}} naar het 3D-beeld ("Drop a PartCraft part to open it" verschijnt).

PartCraft herkent onderdelen en samenstellingen aan wat erin zit, dus beide openen op dezelfde manier. Een `.step`- of `.stp`-bestand opent als geïmporteerd volume: zie [Een STEP-bestand openen en erop verder bouwen](topic:import-step). De statusbalk bevestigt: "Opened Bracket.partcraft.json: 7 features." of "Opened Hinge.partcraft-asm.json: 3 parts, 2 joints."

Als het onderdeel op het scherm niet-opgeslagen wijzigingen heeft, vraagt PartCraft eerst: {{ui:Annuleren}}, {{ui:Wijzigingen weggooien}} of {{ui:Eerst opslaan}}.

:::warning
Sluit een samenstelling ({{ui:Sluiten}}) voordat u een onderdeelbestand opent. Als u een onderdeel opent terwijl een samenstelling op het scherm staat, wordt het onderdeel achter de samenstelling geladen en ziet u het pas nadat u de samenstelling hebt gesloten. Het openen van een samenstellingsbestand vervangt ook een niet-opgeslagen samenstelling zonder te vragen, dus sla die eerst op.
:::

## Opnieuw beginnen

{{ui:Nieuw}} start een leeg "Part1". Er wordt eerst gevraagd als er niet-opgeslagen wijzigingen zijn, en een open samenstelling wordt gesloten (met een vraag als die niet is opgeslagen).

## Versies bewaren

Elke keer dat u opslaat, is het een nieuwe download. U kunt versies dus bewaren door de bestanden te bewaren:

- Zet een versie of datum in de naam voordat u opslaat: "Bracket rev B".
- Uw browser kan " (1)" of " (2)" toevoegen als er al een bestand met dezelfde naam in de downloadmap staat. De nieuwste is die met het hoogste nummer, of controleer de datum in {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheer}}.
- Verplaats afgeronde bestanden uit de downloadmap naar uw projectmap.

Zie [Waar uw bestanden terechtkomen](common:your-files) voor waar downloads op elk systeem heen gaan.

## Voorkom verlies van werk

- Sla op voordat u het tabblad sluit, de pagina opnieuw laadt, of de computer lang laat slapen. De browser vraagt "Leave site?" als u probeert te sluiten met niet-opgeslagen wijzigingen, maar bij een crash of een dichtgeklapte laptop krijgt u geen waarschuwing.
- Privé- of incognitovensters werken, maar er is verder niets anders: het bestand is nog steeds de enige kopie.
- Opslaan in de cloud en versiegeschiedenis zijn nog niet beschikbaar.
