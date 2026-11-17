---
title: Teken uw eerste schets
summary: Open een schets op een vlak of een plat vlak, teken lijnen, rechthoeken, cirkels, bogen, punten en hartlijnen, rond een hoek af, selecteer, verplaats en verwijder.
keywords: schets, tekenen, lijn, rechthoek, cirkel, boog, punt, hartlijn, hulpgeometrie, afronden, schetsafronding, ronde hoek, snap, selecteren, venster, slepen, profiel
from: 28be7436
---

Elk volume begint als een schets: een platte tekening op een vlak. Deze handleiding behandelt de tekengereedschappen. Het vastleggen van de schets met relaties en maten staat in [Een schets volledig vastleggen](topic:relations-dimensions).

## Een schets starten

U kunt schetsen op een basisvlak of op elk plat vlak van het onderdeel.

1. Kies waar u gaat schetsen:
   - een basisvlak: klik in de geschiedenis op **Vooraanzichtvlak**, **Bovenaanzichtvlak** of **Rechtervlak**, of klik het vlak in de weergave;
   - een plat vlak: klik het vlak in de weergave. Het hele vlak wordt gemarkeerd.
2. Kies {{ui:Schets}} in de werkbalk of druk op {{key:S}}. (Met een gekozen vlak kunt u ook {{ui:Schets op dit vlak}} kiezen in het rechterpaneel; bij een basisvlak {{ui:Schets erop}}.)

De weergave draait haaks op het vlak, de schetsgereedschappen verschijnen in de werkbalk en het gereedschap Lijn is klaar voor gebruik. Als u op {{ui:Schets}} drukt zonder dat er iets is gekozen, verschijnen de basisvlakken en zegt de statusbalk: "Klik op een vlak of een plat vlak om op te schetsen. Esc stopt."

:::note
Een gebogen vlak kan geen schets bevatten: "Dit vlak is gebogen. Kies een plat vlak of een vlak om op te schetsen."
:::

**Een schets op een vlak volgt dat vlak.** Als het vlak is gemaakt met de rand van een schets of met het einde van een extrusie, dan verplaatst de nieuwe schets zich mee wanneer dat element verandert (een diepere uitsparing neemt de schets op de bodem ervan mee). Als het paneel zegt dat het vlak "vastgezet waar gekozen" is, dan blijft de schets waar het vlak nu ligt.

## De tekengereedschappen

Elk gereedschap heeft een knop in de werkbalk en een sneltoets. Kies dezelfde knop nogmaals, druk op {{key:S}} of druk op {{key:Esc}} om terug te keren naar Selecteren.

| Gereedschap | Toets | Hoe tekenen |
|---|---|---|
| {{ui:Lijn}} | {{key:L}} | Klik het startpunt en klik daarna op elk volgend punt. Lijnen sluiten eind-op-eind op elkaar aan. Beëindig de keten met {{key:Esc}}, {{key:Enter}}, een rechtermuisklik of een dubbelklik. Klikken op een bestaand punt beëindigt de keten ook |
| {{ui:Rechthoek}} | {{key:R}} | Klik een hoekpunt en daarna het tegenoverliggende hoekpunt. U krijgt vier lijnen die in de hoeken aan elkaar zitten, twee horizontaal en twee verticaal |
| {{ui:Cirkel}} | {{key:C}} | Klik het middelpunt en daarna een punt op de cirkel |
| {{ui:Boog}} | {{key:A}} | Klik het middelpunt, daarna het begin en daarna het einde. De boog loopt mee met de richting waarin u de aanwijzer rond het middelpunt beweegt |
| {{ui:Punt}} | {{key:P}} | Klik. Een los punt markeert een gatmiddelpunt voor {{ui:Gat}} |
| {{ui:Hartlijn}} | {{key:N}} | Net als een lijn, één segment tegelijk. Wordt getekend als streeplijn; het is hulpgeometrie en wordt gebruikt als omwentelingsas of als referentie |
| {{ui:Afronden}} | {{key:F}} | Klik op een hoek waar twee lijnen samenkomen, typ de straal en druk op {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Klik de punten waar de kromme doorheen loopt; {{key:Enter}} beëindigt, een klik op het eerste punt sluit hem. Zie [Splines, bijsnijden, offset en andere schetsgereedschappen](topic:sketch-tools) |
| {{ui:Bijsnijden}} | {{key:T}} | Klik het stuk van een kromme dat u wilt verwijderen, tot aan de dichtstbijzijnde snijpunten |
| {{ui:Maatvoering}} | {{key:D}} | Zie [Een schets volledig vastleggen](topic:relations-dimensions) |

Terwijl u tekent, toont een klein vak naast de aanwijzer de lengte, de grootte, de diameter of de straal.

### Typ de maat terwijl u tekent

Na de eerste klik van een lijn, rechthoek, cirkel of boog kunt u de maat typen in plaats van die aan te klikken. Als u een getal typt, opent het vak naast de aanwijzer met dat getal erin:

| Gereedschap | Vakjes ({{key:Tab}} gaat naar het volgende) | Wat er gebeurt bij {{key:Enter}} |
|---|---|---|
| {{ui:Lijn}}, {{ui:Hartlijn}} | Lengte, daarna Hoek (°) vanaf de X-as van de schets | De lijn wordt zo lang getekend, richting de aanwijzer of onder de getypte hoek; de keten gaat verder vanaf het eind |
| {{ui:Rechthoek}} | Breedte, daarna Hoogte | De rechthoek wordt getekend vanaf het eerste hoekpunt richting de aanwijzer; een maat die u niet typte, komt van de aanwijzer |
| {{ui:Cirkel}} | Diameter | De cirkel wordt getekend met die diameter |
| {{ui:Boog}} | Straal na het middelpunt, daarna Boephoek (°) na het begin | Het begin ligt die afstand van het middelpunt; daarna loopt de boog die hoek rond, in de richting waarin u de aanwijzer bewoog |

Elke maat die u typte, wordt in dezelfde stap een **aandrijvende maat**, zodat de schets gemaatvoerd uit de tekening komt: {{key:Mod+Z}} verwijdert de vorm en zijn maten samen. Klikken in plaats van {{key:Enter}} drukken behoudt wat u typte en neemt de rest uit de klik. {{key:Esc}} sluit het vak en keert terug naar de aanwijzer.

Zet dit uit in {{ui:Instellingen}} › {{ui:PartCraft}} › **Maatvoering tijdens tekenen** als u alleen met klikken wilt tekenen. Zie [PartCraft-instellingen](topic:settings).

{{ui:Meer}}, aan het einde van de schetsgereedschappen, bevat de spline met regelpunten, Verlengen, Offset, Spiegelen, Veelhoek, Sleuf, de schetspatronen en Rand projecteren: zie [Splines, bijsnijden, offset en andere schetsgereedschappen](topic:sketch-tools).

### Snappen

Snappen voegt relaties voor u toe, zodat de schets verbonden blijft wanneer hij verplaatst wordt:

- Op een **eindpunt of de oorsprong** verschijnt een klein vierkantje. Het nieuwe punt wordt samenvallend met dat punt gemaakt.
- Op een **lijn, cirkel of boog** verschijnt een klein kruis. Het nieuwe punt wordt op die kromme geplaatst.
- Een lijn binnen 3 graden van horizontaal of verticaal snapt daarop en krijgt een horizontale of verticale relatie. Het label toont "H" of "V".

Om een snap te vermijden, zoomt u in zodat u verder van het punt of de kromme klikt.

## Rond een hoek af

1. Druk op {{key:F}} of kies {{ui:Afronden}}.
2. Klik het hoekpunt waar twee lijnen samenkomen.
3. Er opent een vak met een voorgestelde straal. Typ de straal en druk op {{key:Enter}}.

Beide lijnen worden bijgesneden en verbonden door een raakboog met een stralenmaat. Meldingen die u kunt zien: "Een afronding heeft een hoek nodig waar precies twee lijnen samenkomen." en "Deze straal is te groot voor deze lijnen."

:::tip
Een schetsafronding rondt een hoek van het profiel af, zodat de extrusie afgeronde verticale randen krijgt. Om de randen van het volume zelf af te ronden (bijvoorbeeld de bovenranden van een plaat), gebruikt u het element {{ui:Afronden}} op het onderdeel: zie [Afronden, afschuinen en uitholling](topic:fillet-chamfer-shell). In een schets is Afronden in de werkbalk het schetsgereedschap; op het onderdeel is het het element.
:::

## Hulpgeometrie

Hulplijnen, cirkels en bogen zijn gestippeld en grijs. Ze geven richting aan de schets, maar maken geen deel uit van het profiel dat wordt geëxtrudeerd of geroteerd.

1. Selecteer de lijnen, cirkels of bogen.
2. Druk op {{key:Q}} of kies {{ui:Hulpgeometrie}}. Druk nogmaals om ze terug te zetten.

## Selecteren, verslepen en verwijderen

Druk op {{key:S}} (of op {{key:Esc}} totdat geen gereedschap meer actief is) voor Selecteren.

- Klik een punt, lijn, cirkel, boog, relatiesymbool of maat om het te selecteren. {{key:Shift}}+klik voegt toe aan de selectie of haalt eraf. Op Windows en Linux doet {{key:Ctrl}}+klik hetzelfde; op een Mac ⌘+klik.
- Sleep op een lege plek om een venster te tekenen: alles dat er volledig in ligt, wordt geselecteerd.
- Sleep een punt of een lijn om die te verplaatsen. De oplosser behoudt elke relatie en maat tijdens het verplaatsen, dus alleen vrije geometrie beweegt. Sleep de rand van een cirkel om de straal te wijzigen.
- Sleep het getal van een maat om het label te verplaatsen.
- Druk op {{key:Delete}} of {{key:Backspace}}, of kies {{ui:Verwijderen}} in het rechterpaneel, om de selectie te verwijderen. Geometrie verwijderen verwijdert de relaties erop.

## Zoomen en verschuiven in de schets

- Draai het wiel om te zoomen op de plek van de aanwijzer.
- Sleep met de middelste of rechter knop om te verschuiven.
- {{ui:Passend maken}} in de werkbalk of het rechterpaneel maakt de schets passend in de weergave. In een schets is de {{key:F}}-toets het gereedschap Afronden, niet Passend maken.

## De schets sluiten

Kies {{ui:Afsluiten}} in de werkbalk of {{ui:Schets afsluiten}} in het rechterpaneel, of druk op {{key:Esc}} totdat de schets sluit. Elke {{key:Esc}} annuleert eerst wat er bezig is, keert daarna terug naar Selecteren en wist vervolgens de selectie; de volgende sluit de schets.

De schets blijft geselecteerd, zodat de volgende {{ui:Extruderen}} of {{ui:Omwentelen}} hem gebruikt.

## Wat maakt een goed profiel

{{ui:Extruderen}} en {{ui:Omwentelen}} gebruiken **elke gesloten lus** van de volume-lijnen, cirkels, bogen en splines van de schets (geen hulpgeometrie). Lussen binnen lussen worden gaten.

- Elk einde moet precies één ander einde raken. "Het profiel is open: een einde op (12.5, 40) is niet met iets verbonden." wijst de plek aan.
- Geen drie einden mogen in één punt samenkomen: "Het profiel vertakt zich op (0, 20): er komen meer dan twee einden samen."
- Punten en hulpgeometrie worden door het profiel genegeerd.

Volgende: [Een schets volledig vastleggen met relaties en maten](topic:relations-dimensions).

## Een schets van een foto

**Features › Meer › Schets uit een foto…** (of de groep Schets in het lint van de featureboom) traceert een foto van een plat onderdeel op een effen ondergrond, de omtrek en de gaten ervan, of een pentekening, tot een schets van lijnen, bogen en cirkels. Geef één lengte op (de breedte, de hoogte of de langste zijde) zodat de schets de juiste maat heeft, controleer wat er gevonden is in het voorbeeld en kies **De schets maken**; u kunt er ook meteen een extrusie van maken, in dezelfde stap ongedaan te maken. Het traceren gebeurt op deze computer. Hoekstralen komen terug binnen ongeveer 5 %, details van een of twee pixels gaan verloren, en een foto die schuin is genomen of met schaduw over het onderdeel wordt niet rechtgetrokken: fotografeer het onderdeel recht van voren, met gelijkmatig licht.
