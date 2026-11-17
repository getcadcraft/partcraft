---
title: Gör en del redo för 3D-utskrift
summary: Kontrollera att en del eller sammanställning är sluten, får plats på din skrivares byggplatta och står på en bas, och ladda sedan ner den som STL eller 3MF för din slicer.
keywords: 3d-utskrift, 3d-skrivare, skrivare, utskrift, slicer, stl, 3mf, vattentät, sluten, manifold, byggplatta, byggplattans storlek, överhäng, stöd, bas, millimeter, export, gängor, spel
from: 90d81dff
---

En slicer behöver en sluten form: inga hål, varje yta pekar utåt och inget passerar genom sig självt. Delar som PartCraft bygger är slutna genom konstruktionen, så kontrollen visar mest storleken, om delen får plats på skrivarens byggplatta, om den står på en plan yta och hur mycket den hänger ut.

## Kontrollera och ladda ner

1. Valfritt, en gång: ställ in skrivarens byggplatta i {{ui:Inställningar}} › PartCraft › **3D-skrivare**: bredd, djup och höjd i millimeter. Lämna fälten tomma för att hoppa över kontrollen.
2. Välj {{ui:Exportera}}, och sedan {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}}.

   Dialogrutan säger ”Redo att skrivas ut” eller ”Inte redo att skrivas ut”, listar allt som är fel och anger storleken på plattan (X × Y × Z, i millimeter), volymen och antalet trianglar.

3. Klicka på {{ui:Ladda ner 3MF}} eller {{ui:Ladda ner STL}}. Filen är densamma som {{ui:Exportera}} › {{ui:3MF, för 3D-utskrift}} eller {{ui:STL, för 3D-utskrift}}.

I en sammanställning tar kontrollen och filerna hela sammanställningen, varje kopia där den är placerad.

Delen kontrolleras stående så som exporten skriver den: det som pekar upp i PartCraft (vinkelrätt mot Ovanplanet) pekar upp på byggplattan. En del som skissats på Ovanplanet ligger plant.

## Vad dialogrutan kan säga

**Inte redo att skrivas ut** (en slicer kan vägra den eller skriva ut den fel): hål (kanter med en yta på bara ena sidan), kanter som delas av tre eller fler ytor, ytor som vetter åt motsatta håll, en kropp som är vänd ut och in, eller en kropp som passerar genom sig självt. En del som byggts i PartCraft ska aldrig visa dessa; om en gör det, se [Felsökning](topic:troubleshooting).

**Varningar** (den skrivs ut, men titta först):

- **Större än skrivarens byggplatta**, även om den vrids 90° på den.
- **Ingenting ligger plant i botten**: vrid delen i din slicer så att en yta vilar på byggplattan, annars behövs stöd eller en flotte.
- **Lutar mer än 45° från lodrätt**: de ytorna behöver stöd så som delen står. Ett annat läge kan behöva mindre.
- **Separata kroppar överlappar** eller **möts yta mot yta**: slicers slår vanligen ihop dem. {{ui:Kombinera}} i Funktioner › Mer förenar dem till en kropp. Se [Kroppar](topic:bodies).
- **Under 1 mm i tvärmått**: kontrollera delens mått.

## Gängor som skrivs ut

En modellerad gänga skrivs ut som en riktig gänga. Ge den lite **Spel** så att en utskriven bult går in i en utskriven mutter: se [Gängor](topic:threads).

## Släta runda ytor

STL och 3MF består av trianglar. För jämnare runda ytor, klicka på tomt utrymme så att inget är markerat och ställ **Kurvor** till **Fin (128 per varv)** eller **Mycket fin (256 per varv)** i högerpanelen innan du exporterar. Fler trianglar ger större filer.

## Större, mindre eller i delar

- **Exportera › Skala för utskrift (STL eller 3MF)…** sparar delen skalad per axel utan att ändra den: en **krympmån** i procent (storlek × (1 + s), eller exakt storlek ÷ (1 − s)) för ett gjutmönster, eller enkla faktorer, kring mitten, det lägsta hörnet, mitten av undersidan eller origo.
- **Exportera › Dela för utskrift (en zip med delar)…** delar upp en del som är för stor för din skrivare i delar som var och en får plats på den byggplatta du anger, sammanfogade med tappar, nycklar, svalstjärtar, dymlingshål eller magnetfickor (med det spel du angett). Varje del och skarv numreras, och delarna sparas som STL eller 3MF i en zip med ett monteringsblad. Delen självt ändras inte.

## Inte kontrollerat

Väggtjocklek, detaljer som är mindre än vad munstycket kan rita, och hur slicern placerar stöden. Din slicer visar det.
