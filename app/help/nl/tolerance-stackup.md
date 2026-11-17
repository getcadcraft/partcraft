---
title: Toleranceketens
summary: Kies een keten van vlakken door de onderdelen van een samenstelling en zie hoeveel de opening aan het einde kan variëren, in het slechtste geval en met RSS, met de maten die het meest tellen eerst gerangschikt.
keywords: toleranceketen, toleranceanalyse, tolerantieketen, maatketen, lus, opening, speling, slechtste geval, rss, wortel uit de som der kwadraten, statistische toleranties, bijdragers, gevoeligheid, gd&t, algemene tolerantie, iso 2768
from: cbdb3159
---

Een **toleranceketen** telt de maten op langs een keten door meerdere onderdelen om te zien hoeveel een resultaat — meestal een opening — kan variëren wanneer elk onderdeel ergens binnen zijn toleranties wordt gemaakt.

## De keten kiezen

1. Open een samenstelling en kies {{ui:Toleranceketen}} in de groep Samenstelling. Er opent een kaartje boven de weergave.
2. Kies waarlangs de keten wordt gemeten **langs**: X, Y of Z van de samenstelling, of {{ui:De normaal van het eerste vlak}}.
3. Druk op {{ui:Kies de keten}} en klik op de vlakken waar de keten doorheen loopt, **in volgorde**: begin aan de ene kant van de opening, ga door de onderdelen, en eindig aan de andere kant van de opening.
4. Druk op {{ui:Gereed}} of op Enter. Backspace haalt de laatste klik terug; Esc annuleert.

Twee klikken op hetzelfde onderdeel maken de maat van dat onderdeel (zijn afstand langs de keten). Een klik op een ander onderdeel maakt een **raakvlak** tussen beide, waar de onderdelen elkaar raken; het heeft geen tolerantie tenzij u er een typt. De schakels tellen op of trekken af naar de richting van de keten, en ze sluiten de lus: de nominale opening is wat het model toont.

U kunt ook handmatig {{ui:Een schakel toevoegen}} en de nominale waarde, de tolerantie en of hij optelt (+) of aftrekt (−) intypen.

## Geef elke schakel zijn tolerantie

Elke schakel heeft een **bovenste** en een **onderste** afwijking (bijvoorbeeld +0.1 en −0.05). **Tolerantie uit** vult ze in vanuit het onderdeel:

- **Algemene tolerantie**: het veld Tolerantie van het titelblok van het onderdeel (zie [Tekening naar PDF](topic:drawing-pdf)), wanneer het ±0.1, +0.2/-0.1 of ISO 2768-f, -m, -c of -v vermeldt (ISO 2768-1 lineaire toleranties, naar de grootte van de schakel). De algemene tolerantie van een onderdeel wordt meteen gebruikt wanneer de keten wordt gekozen.
- **GD&T**: elk kadertje met geometrische toleranties op de tekening van het onderdeel. Positie-, profiel- en slingerzones geven ± de helft van de tolerantie. Een oriëntatie- of vormtolerantie ligt meestal al binnen de maattolerantie: voeg die alleen toe waar de keten het gecontroleerde oppervlak raakt. Bij Ⓜ of Ⓛ wordt de zone genomen op zijn opgegeven maat; de bonustolerantie telt niet mee.
- **Getypt**: elke getallen die u intypt.

## De resultaten lezen

- **Opening, nominaal** en, wanneer de toleranties ongelijk zijn, **Opening, gemiddeld** — +0.2/−0 en +0/−0.1 verschuiven het midden van het bereik.
- **Slechtste geval**: elke tolerantie tegelijk op zijn grens. De opening kan nooit buiten dit liggen.
- **RSS** (wortel uit de som der kwadraten): elke tolerantie genomen als drie standaarddeviaties van een normale spreiding, opgeteld als de wortel uit de som van hun kwadraten. De meeste samenstellingen vallen ruimschoots binnen het slechtste geval; dit is de gebruikelijke schatting voor onderdelen die in serie worden gemaakt.
- Geef **Opening minstens** en **Opening hoogstens** op om te zien of het slechtste geval altijd binnen blijft, en hoeveel samenstellingen per miljoen RSS buiten verwacht.
- De kolom **#** rangschikt de schakels naar hun **aandeel** in de RSS: scherp de eerste aan om het grootste verschil te maken.

{{ui:CSV opslaan}} schrijft de schakels, hun aandelen en de resultaten weg. De toleranceketens worden opgeslagen in het samenstellingsbestand, en elke wijziging is één stap voor {{key:Mod+Z}}.

:::note
Een toleranceketen loopt in één richting. Ze volgt geen hoeken of bochten langs de keten, en ze leest maattoleranties niet uit de schetsen: geef die in als getypte toleranties of via het titelblok.
:::
