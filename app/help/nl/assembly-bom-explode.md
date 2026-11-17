---
title: Onderdelenlijst, explosieweergaven en bewegende onderdelen
summary: Geef samenstellingsonderdelen een nummer, omschrijving en materiaal, lees de stuklijst en download die, maak explosieweergaven met stappen of automatisch, verplaats onderdelen zonder verbinding met de hand, stel grenzen van verbindingen in, en exporteer de hele samenstelling als STL, 3MF of stuklijst.
keywords: stuklijst, bom, onderdeelnummer, materiaal, dichtheid, csv, explosieweergave, ontbinden, samenvouwen, baanlijnen, onderdeel verplaatsen, slepen, gizmo, verschuiven, draaien, grenzen verbindingen, samenstelling exporteren, montagestap, samenstellingstekening, ballonnen
from: ebc9f6f3
---

Deze hulpmiddelen staan in het rechterpaneel van een samenstelling (zie [Een samenstelling bouwen](topic:build-assembly)).

## Onderdeeleigenschappen

Selecteer een onderdeel in de lijst links. Stel onder **Onderdeeleigenschappen** in:

- **Onderdeelnummer** (maximaal 40 tekens) en **Omschrijving** (maximaal 200).
- **Materiaal**: een gangbaar materiaal met zijn dichtheid, of **Aangepaste dichtheid…** om er zelf een in g/cm³ te typen. Het paneel toont dan de massa van het onderdeel.

Eigenschappen horen bij het onderdeel, dus elke kopie ervan deelt ze. Ze worden opgeslagen in het samenstellingsbestand.

## Stuklijst

Als niets is geselecteerd ({{key:Esc}}), toont het paneel de **Stuklijst**: één rij per onderdeel, met elk het positienummer, het aantal (hoeveel kopieën), het onderdeelnummer, de naam, het materiaal en de massa. Positienummers volgen de volgorde waarin de onderdelen voor het eerst in de lijst verschijnen. Massa's gebruiken het volume van elk onderdeel (van het gefacetteerde volume dat de mesh-kernel bouwt, dat bij ronde onderdelen iets lager uitvalt) en het materiaal. Een onderdeel zonder materiaal heeft geen massa, en dan is er geen totaal.

{{ui:CSV downloaden}} slaat de lijst op als CSV-bestand (ook via **Exporteren › Stuklijst (CSV)**). Het opent in elk spreadsheetprogramma. Tekst die begint met = of + krijgt een voorloopapostrof, zodat een spreadsheet die niet als formule uitvoert.

## Explosieweergaven

Een explosieweergave trekt de onderdelen uit elkaar voor afbeeldingen. Ze verandert nooit de verbindingen of de werkelijke posities: opslaan, botsingscontroles en exports gebruiken de echte posities.

1. Kies zonder selectie {{ui:Nieuwe weergave}} onder **Explosieweergaven**.
2. Vink onder **Stap toevoegen** de onderdelen aan die de stap verplaatst, kies een **Richting** (+X … −Z, de normaal van een vlak dat u aanklikt, of **Sleep een pijl in de weergave**) en een **Afstand**, en kies dan {{ui:Stap toevoegen}}. Met **Slepen** sleept u de pijl en laat u los: de stap neemt de richting en afstand over die u heeft gesleept.
3. Voeg meer stappen toe. Ze worden na elkaar afgespeeld.
4. Sleep de schuifregelaar tussen **Samengesteld** en **Geëxplodeerd** om de weergave te animeren. Gestippelde baanlijnen lopen van de rustpositie van elk onderdeel naar de huidige positie.

{{ui:Automatisch (radiaal)}} verplaatst elk onderdeel behalve het vaste onderdeel weg van het midden van de samenstelling. {{ui:Automatisch (verbindingen)}} verplaatst elk verbonden onderdeel (met alles wat eronder hangt) langs de vlaknormaal van zijn verbinding. U kunt meerdere benoemde weergaven bewaren. Kies er één bij **Weergave**, of **Samengesteld** om de onderdelen terug te zetten. Weergaven worden opgeslagen in het samenstellingsbestand.

## Een onderdeel met de hand verplaatsen

Alleen een onderdeel zonder verbinding met het vaste onderdeel kan met de hand worden verplaatst (het vaste onderdeel staat vast; verbindingen plaatsen de rest). Selecteer het en kies onder **Met de hand verplaatsen**:

- Typ **ΔX, ΔY, ΔZ** en kies {{ui:Verplaatsen}}, of kies een as en een **Hoek** en {{ui:Draaien}} (om het midden van het onderdeel).
- {{ui:Sleep om te verplaatsen}} toont pijlen op het onderdeel: sleep een pijl om langs die as te verplaatsen, of een vierkant om in een vlak te verplaatsen. {{ui:Sleep om te draaien}} toont ringen om het te draaien. Elke sleepbeweging is één stap ongedaan maken. {{key:Esc}} verbergt de pijlen.

## Grenzen van verbindingen

Selecteer een verbinding die beweegt en vink onder **Grenzen** **Houd … tussen grenzen** aan voor een van haar waarden. Stel daarna het **Minimum** en **Maximum** in. Elke waarde blijft binnen de eigen grenzen, de schuifregelaar bestrijkt alleen dat bereik, en {{ui:Controleer de beweging op botsingen}} doorloopt alleen het bereik daartussen. Een cilindrische verbinding kan haar hoek, haar offset of beide begrenzen. Als u het type van de verbinding wijzigt, vervallen de grenzen voor waarden die het nieuwe type niet heeft.

## De hele samenstelling exporteren

In een samenstelling schrijft het menu **Exporteren** de hele samenstelling met elk onderdeel op zijn plaats:

- **STEP AP242 / AP214** en **Tekening (PDF)** zijn in deze versie nog niet beschikbaar: ze hebben een exacte kernel nodig, dus ze staan grijs. Exporteer in plaats daarvan de STEP van elk onderdeel (exact volume) vanuit het onderdeel.
- **STL**: één mesh van alle onderdelen. **3MF**: elk onderdeel eenmaal, en per kopie opnieuw geplaatst.
- **Stuklijst (CSV)**.

## Beperkingen

- De samenstellingstekening en de samenstelling-STEP zijn in deze versie nog niet beschikbaar (ze hebben een exacte kernel nodig). Explosieweergaven zijn bedoeld voor afbeeldingen op het scherm.
