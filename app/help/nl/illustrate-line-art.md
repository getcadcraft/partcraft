---
title: Technische illustraties: lijntekeningen, afbeeldingen en bladen
summary: Exporteer elk aanzicht als vectorlijntekening (SVG of PDF) met drie lijndiktes, verborgen lijnen gestippeld of weggelaten, gearceerde snijvlakken en optionele vullingen, of als PNG; zet meerdere aanzichten op één blad.
keywords: illustrate, lijntekening, technische illustratie, svg, pdf, png, verborgen lijnen, silhouet, arcering, blad, exporteren
from: 0e9bea63
---

{{ui:Exporteren}} in de groep {{ui:Uitvoer}} opent het exportvenster:

- {{ui:Wat}}: de scène zoals die nu is, één aanzicht, of elk aanzicht.
- {{ui:Als}}: **PDF** of **SVG** (vectorlijntekening; beide worden uit dezelfde tekening gemaakt), **PNG van de lijntekening**, of een **PNG-afbeelding van de 3D-weergave** (tot 4096 pixels breed), en het [interactieve 3D-bestand](topic:illustrate-interactive).
- {{ui:Pagina's}}: één aanzicht per pagina, of elk aanzicht op één blad met de naam eronder. {{ui:Papier}}: A4, A3, Letter of Tabloid.
- {{ui:Verborgen lijnen}}: gestippeld of weggelaten. {{ui:Vullingen}}: zoals het aanzicht eruitziet, geen, egale kleuren of gearceerd. Ook zachte randen tekenen voegt detaillijnen toe.

De lijntekening heeft drie lijndiktes: contouren (silhouetten, open randen en snijcontouren), scherpe randen en detaillijnen. Snijvlakken van een doorsnede of een doosuitsnede worden gearceerd. Uiteengetrokken aanzichten krijgen kettinglijnen vanaf de plek waar elk onderdeel zit; ballonnen, annotaties, de onderdelenlijst en het vergrootglas worden ook getekend.

De lijntekening wordt berekend uit de vormen van de onderdelen met de meshmethode (dezelfde die het tekenblad van PartCraft gebruikt zonder de exacte kernel). Gekromde vlakken worden dus getekend via hun facetten, zoals het model ze bevat.

## Nog niet beschikbaar

- Afbeeldingen in de kwaliteit van de padtracer (de renderer van ModelCraft) worden hier niet aangeboden; PNG-afbeeldingen zijn de eigen weergave van de 3D-weergave.
