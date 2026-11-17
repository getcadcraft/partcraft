---
title: Een samenstelling controleren op botsingen en beweging
summary: Vind overlappende onderdelen met Clash, sleep de waarden van een verbinding om de beweging te zien, en doorloop het bereik van een verbinding om te zien waar onderdelen botsen.
keywords: interferentie, interferentiedetectie, clash, botsing, overlap, schroefdraadpassing, schroefdiepte-afwijking, aanrakende vlakken, verbergen, filter, beweging, bewegingsstudie, doorlopen, bereik van beweging, controleren
from: 9c98db46
---

Twee controles lopen op de onderdelen zoals ze geplaatst zijn: **Clash** zoekt naar overlappend materiaal op dit moment, en de **bewegingscontrole** verplaatst één verbinding door haar bereik en zoekt onderweg naar overlappingen.

## Controleren op interferentie

1. Open of bouw een samenstelling (zie [Een samenstelling bouwen](topic:build-assembly)).
2. Kies {{ui:Clash}}.

De statusbalk meldt het resultaat:

- "Geen interferentie tussen 3 onderdelen (… ms)." Er overlapt niets.
- "Interferentie: Flange1 en Flange2: Overlap, 2.5 mm³." Elk paar, het soort resultaat en het volume dat ze delen.

Het vak **Samenstelling** links toont **Interferentie**: "Geen", "2 resultaten" (de getoonde), of "Niet gecontroleerd". Zonder selectie toont het rechterpaneel elk resultaat onder **Interferentie**.

Het resultaat wordt gewist zodra de samenstelling verandert. Voer {{ui:Clash}} opnieuw uit na het verplaatsen van een verbinding. Elk paar onderdelen wordt tegen elk ander gecontroleerd, dus grote samenstellingen duren langer.

### Soorten resultaten

| Soort | Betekent |
|---|---|
| **Overlap** | De onderdelen delen volume: een echte botsing. |
| **Schroefdiepte-afwijking** | Het gedeelde volume zit in de schroefdraad van één onderdeel maar voorbij die van het andere: een bout met schroefdraad dieper dan zijn gat, of een gladde schacht in een getapt gat. |
| **Schroefdraadpassing (cosmetische schroefdraad)** | Het gedeelde volume zit in de schroefdraad van beide onderdelen: een bout in een getapt gat. Cosmetische schroefdraad wordt op de volle maat getekend, dus ze overlappen altijd een beetje. |
| **Aanrakende vlakken** | Geen gedeeld volume, maar vlakken in contact (binnen 0.001 mm). |

Gemodelleerde schroefdraad (zie [Schroefdraad op assen en boringen, getekend of gemodelleerd](topic:threads)) is echte geometrie: wat ze delen is een **Overlap**.

### Verberg wat u niet hoeft te zien

Onder **Interferentie** heeft **Tonen** een vakje per soort: vink **Schroefdraadpassing** en **Aanrakende vlakken** uit om alleen de botsingen te zien die ertoe doen. **Dit paar verbergen** naast een resultaat verbergt dat paar onderdelen, ongeacht de soort. Verborgen resultaten worden geteld ("2 resultaten verborgen door deze filters"), en **De verborgen paren opnieuw tonen** brengt de paren terug. De statusbalk telt verborgen resultaten ook mee.

De filters worden met de samenstelling opgeslagen, en elke wijziging is één stap van {{key:Mod+Z}}. **Een verbinding doorlopen op botsingen** (hieronder) gebruikt ze ook. Een samenstelling met filters wordt opgeslagen als versie 4, die eerdere PartCraft-versies weigeren te openen in plaats van de filters te verliezen.

## De beweging volgen

1. Selecteer een verbinding die beweegt (alles behalve stijf) in de lijst links.
2. Sleep de schuifregelaar onder een van de waarden, zoals **Hoek (°)** of **Offset (mm)**. Het onderdeel beweegt terwijl u sleept.
3. Laat los. De nieuwe positie blijft behouden en kan met {{key:Mod+Z}} ongedaan worden gemaakt.

U kunt ook een hoek of offset in het vak typen en op {{key:Enter}} drukken.

Een verbinding in een gesloten lus (een koppelmechanisme) beweegt de hele lus: de waarde die u sleept blijft behouden en de andere verbindingen van de lus volgen (zie [Gesloten lussen](topic:build-assembly#closed-loops-linkages)).

## Een verbinding doorlopen op botsingen

1. Selecteer een verbinding die beweegt.
2. Kies bij een verbinding met meerdere waarden (cilindrisch, vlak, kogel, pen in sleuf) welke u wilt doorlopen bij **Bewegingen controleren**.
3. Kies {{ui:Controleer de beweging op botsingen}}.

PartCraft verplaatst die waarde door 25 posities in 24 gelijke stappen; de andere blijven zoals ze zijn: een hoek van −180° tot 180° (een kanteling van −90° tot 90°), een lengte van min tot plus de grootte van het grootste onderdeel. Het meldt:

- "Geen botsing voor Hoek (°) van -180 tot 180 (25 posities gecontroleerd)."
- "6 van 25 posities botsen, eerst bij Hoek (°) 45 (12.4 mm³)." De eerste positie die botst, en de overlap daar.

De knop staat grijs bij stijve verbindingen, die niet bewegen. De doorloop controleert alleen de posities, niet het pad ertussen: een dun onderdeel zou tussen twee stappen door een ander kunnen passeren.

:::note
Contact en zwaartekracht zijn nog niet beschikbaar. Zonder grenzen beslaat de doorloop het hele bereik. Geef de waarde **Grenzen** (zie [Onderdelenlijst, explosieweergaven en bewegende onderdelen](topic:assembly-bom-explode)) en de doorloop beslaat alleen die, dus een scharnier dat 90° opent wordt over 90° gecontroleerd.
:::

## Een bewegingsstudie

**Samenstelling › Beweging** stuurt de waarde van één verbinding van een begin tot een eind over een tijd die u opgeeft (constante snelheid, versoepeld, sinus, of heen en terug). Het plaatst de samenstelling bij elke stap met haar verbindingen en gesloten lussen, en meldt welke botsingen er zijn en hoe dicht de onderdelen komen. **Punt toevoegen** volgt het midden van een onderdeel of een punt waarop u klikt, en de kaart zet de positie, snelheid en versnelling, de waarde van de verbinding en de speling tegen de tijd uit. **CSV opslaan** en **Grafiek opslaan** schrijven ze weg. Snelheid en versnelling komen uit de opgeslagen posities, dus een scherpe piek tussen stappen komt laag uit: gebruik meer stappen.

Na **Uitvoeren** verplaatst de balk **Stap door de uitvoering** de samenstelling naar elke stap (de tijd, de waarde, en of er daar onderdelen botsen, worden ernaast getoond). De verbinding houdt haar eigen waarde, en **Terug naar het model** zet de samenstelling terug. De instellingen van de studie worden in het samenstellingsbestand opgeslagen; de resultaten worden opnieuw gemaakt door **Uitvoeren**.

## Een contactstudie

**Samenstelling › Contact** toont hoe een samenstelling haar belastingen draagt waar onderdelen op elkaar drukken. Elk onderdeel brengt zijn eigen steunpunten, belastingen en materiaal mee uit de eigen studie **Simulatie** (een vast vlak op het ene onderdeel, een kracht op een ander). Hier kiest u de paren. **Paar toevoegen**, daarna **Kies kant A** en klik op vlakken van één onderdeel, **Kies kant B** en klik op vlakken van een ander onderdeel. Een klik op een gekozen vlak neemt het weer weg; {{key:Esc}} of Gereed beëindigt het kiezen. Een paar is **Wrijvingsloos** (de onderdelen drukken maar schuiven) of **Gebonden** (ze blijven samen). De stijfheidsfactor bepaalt hoe sterk het contact weerstand biedt tegen indrukken: 20 is een redelijk beginpunt, 1000 voor een stijf staalpakket.

**Oplossen** voert de belasting in stappen uit en toont de contactkracht, het diepste indrukken, de grootste verplaatsing en de grootste spanning. Een onderdeel zonder paar blijft buiten beschouwing, en de kaart meldt dat. Wrijvingsloos contact houdt een onderdeel niet zijdelings vast: geef elk onderdeel een steun in de eigen studie Simulatie, of bind het, anders convergeren de stappen mogelijk niet. De paren en instellingen worden in het samenstellingsbestand opgeslagen.

**CalculiX-invoer exporteren** schrijft hetzelfde model als CalculiX-invoerbestand (.inp). CalculiX is een apart programma dat u zelf installeert en uitvoert. **CalculiX-resultaten (.frd) inlezen** leest daarna de verplaatsingen terug op het mesh van deze samenstelling, en weigert een bestand dat voor een ander mesh is gemaakt. De oplosser hier kan met plastische vervorming omgaan maar is geen expliciete dynamica, en niets hier is een gecertificeerde analyse: laat een ingenieur alles controleren wat ertoe doet.
