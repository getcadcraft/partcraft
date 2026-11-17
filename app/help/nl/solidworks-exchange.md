---
title: Onderdelen naar en van andere onderdeelmodelleerders verplaatsen
summary: Stuur een onderdeel naar een andere onderdeelmodelleerder als macro die het opnieuw opbouwt met een levende featureboom. De genoemde STEP en het openen van de featurelijst die een andere modelleerder heeft weggeschreven zijn in deze versie nog niet beschikbaar.
keywords: macro, nog niet beschikbaar, swb, vba, featureboom, heen-en-weer, macro exporteren, cadcraft-sw.json, genoemde step, ap214, globale variabelen, vergelijkingen, native onderdeel
from: 97ca61da
---

PartCraft wisselt onderdelen met SolidWorks in beide richtingen, zonder een bestandsformaat dat niemand anders kan lezen:

- **Naar buiten:** een macro (`.swb`, platte tekst) die SolidWorks uitvoert om het onderdeel zelf op te bouwen, functie voor functie, met de schetsen, relaties, maten, globale variabelen en vergelijkingen. U krijgt een native onderdeel met een levende featureboom, geen dood volume.
- **Terug:** een macro die u binnen SolidWorks uitvoert, schrijft de functies en vergelijkingen van het onderdeel naar een `.cadcraft-sw.json`-bestand. Dat bestand openen in PartCraft is in deze versie nog niet beschikbaar (het vereist een exacte kernel).

:::warning
Dit is nog niet in SolidWorks getest. SolidWorks draait alleen op Windows met een licentie, en PartCraft heeft deze macro's daarin nog nooit uitgevoerd. De macro's zijn geschreven op basis van de SolidWorks API-documentatie en hier op structuur gecontroleerd. Reken erop dat u problemen moet melden; het logboek dat de macro schrijft zegt welke stap is mislukt.
:::

PartCraft kan geen `.sldprt`-bestand schrijven: dat formaat is gesloten. De macro is de manier om een native onderdeel te krijgen.

## Een onderdeel als macro versturen

1. Open het onderdeel.
2. Kies {{ui:Exporteren}} en daarna {{ui:Macro voor SolidWorks (.swb)}}. PartCraft downloadt `<onderdeel>.swb`; de statusbalk zegt dat hij is weggeschreven zonder de exacte kernel.
3. Een dialoogvenster zegt hoeveel functies, globale variabelen en vergelijkingen de macro opbouwt, en somt op wat hij weglaat. Er komt in deze versie geen STEP naast: gebruik {{ui:Exporteren}} en daarna {{ui:STEP (gefacetteerd, meshkernel)}} als u er een nodig heeft.
4. Kies in SolidWorks **Tools > Macro > Run**, kies het `.swb`-bestand en wacht. Er wordt een nieuw onderdeel gemaakt op basis van uw standaard onderdeelsjabloon, met millimeters, en elke functie wordt gebouwd.
5. Aan het einde meldt een bericht hoeveel stappen gelukt zijn, hoeveel mislukt zijn en hoeveel overeenkomen met het lichaam van PartCraft. Het volledige logboek, `<onderdeel> macro log.txt`, wordt naast de macro geschreven.

Wat de macro bouwt:

| PartCraft | In het nieuwe onderdeel |
|---|---|
| Schets op het Voor-, Boven- of Rechtervlak | Een schets op dat vlak, met zijn lijnen, bogen, cirkels, punten, relaties en maten (benoemd zoals in PartCraft, zoals `k7`) |
| Schets op een vlak | Een schets op hetzelfde vlak, gekozen via een punt erop |
| Schets op een vast vlak | Een referentievlak door drie punten, en de schets erop |
| Extrusie, uitsnijding (blind, door alles, middenvlak, twee richtingen, taps toelopend) | Boss-extrude of cut-extrude |
| Omwentelen, omwentelingsuitsnijding | Omwenteling rond dezelfde hartlijn |
| Gat (eenvoudig, verzinkt, verzonken, getapt) | Een of twee uitsnijdingen met hun eigen schetsen (een getapt gat is zijn tapboor; geen schroefdraad) |
| Lineair en cirkelvormig patroon, spiegelen | Lineair patroon, cirkelvormig patroon, spiegelen (functies of het lichaam) |
| Afronden, afschuinen, uitholling | Afronden, afschuinen en uitholling op dezelfde randen en vlakken, gekozen via punten |
| Parameters en vergelijkingen | Globale variabelen en vergelijkingen op de hernoemde maten |
| Onderdrukte functies, de terugrolbalk | Op dezelfde manier onderdrukt; de terugrolbalk op dezelfde plaats |

Na elke volumefunctie vergelijkt de macro het volume en de afmetingen van het lichaam met die van PartCraft. Als ze verschillen, draait hij de richting van die functie eenmaal om en controleert opnieuw; als dat niet beter is, draait hij terug en schrijft "Check" in het logboek.

### Wat wordt weggelaten

Het dialoogvenster en het begin van de macro vermelden alles wat niet is overgenomen, met de reden. Dat is op dit moment: geïmporteerde volumes (voeg de STEP in), sweeps, lofts, trekhoeken, referentie-assen en -punten, eindvoorwaarden "tot", extruderen van alleen sommige contouren, en alles wat daarvan afhangt. Splines worden krommen door hun punten. Deze versie heeft geen exacte kernel, dus schetsen op vlakken en de functies die randen of vlakken kiezen, vallen ook weg.

## Een genoemde STEP versturen

Nog niet beschikbaar in deze versie: {{ui:STEP voor SolidWorks (benoemd, AP214)}} vereist een exacte kernel, en als u die kiest, zegt het "STEP voor SolidWorks: nog niet beschikbaar. …". Met een exacte kernel bevat het bestand de naam van het onderdeel, millimeters en de onderdeelkleur, en zet het Y rechtop, zoals SolidWorks onderdelen toont (de gewone {{ui:STEP AP214 (exact volume)}}-export zet Z rechtop). In de naam verliezen letters met accenten het accent, en andere tekens buiten gewoon ASCII worden `_`.

## Een onderdeel terughalen

Het bestand openen in PartCraft (stap 3) is in deze versie nog niet beschikbaar: er staat "Een SolidWorks-export openen: nog niet beschikbaar. …". De CadCraft-tekenapp opent het bestand wel en neemt de schetsen ervan over.

1. Kies {{ui:Bestand}} > {{ui:Exporteren}} > {{ui:Exportmacro om onderdelen terug te halen (.swb)}} om `CadCraftExport.swb` te downloaden, en zet hem naast uw onderdelen.
2. Open in SolidWorks het onderdeel, kies **Tools > Macro > Run** en kies `CadCraftExport.swb`. Hij schrijft `<onderdeel>.cadcraft-sw.json` naast het onderdeel en verandert er niets aan.
3. Kies in PartCraft {{ui:Openen}} en kies dat bestand, of zet het neer op de 3D-weergave.
4. Met een exacte kernel bouwt PartCraft het onderdeel functie voor functie opnieuw op en laat zien wat het deed: bijvoorbeeld "5 van 5 functies overgenomen uit SolidWorks (Flange.SLDPRT)", elke functie die het niet kon overnemen ("Niet overgenomen: Sweep1 (Sweep).") en of het volume overeenkomt met dat wat SolidWorks heeft geschreven.
5. Sla het op als een PartCraft-onderdeel met {{ui:Opslaan}}.

Schetsen komen op een basisvlak terecht als ze op een basisvlak liggen, op het bijbehorende platte vlak van het onderdeel als dat er is (zodat ze latere bewerkingen volgen), en anders op een vast vlak. Randen en vlakken van afrondingen, afschuiningen en uitholling worden gevonden op basis van punten en als benoemde verwijzingen bewaard. Globale variabelen worden parameters (namen met spaties krijgen underscores: "Bolt count" wordt `Bolt_count`), en vergelijkingen worden vergelijkingen op dezelfde maten. Er wordt niets geraden: wat geen tegenhanger heeft, wordt opgesomd.

De CadCraft-tekenapp opent hetzelfde bestand en neemt de schetsen ervan over.

:::note
Het formaat is `cadcraft-sw-export` versie 1, gewone JSON in millimeters en graden. Een bestand van een nieuwere macro, of een bestand dat niet geldig is, wordt geweigerd met de reden.
:::
