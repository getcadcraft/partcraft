---
title: Spara och återanvänd restbitar
summary: Efter en nesting blir det som är kvar av varje plåt en numrerad restbit i en lagerlista; nästa nesting använder restbitarna först, sedan hela plåtar.
keywords: nesting, restbit, lager, rest, plåt, ark, återanvändning, material, tjocklek, CSV
from: 7a68d4b8
---

När du nestar delar på plåtar kan varje plåts användbara rest (inga splitter) sparas som en **restbit**: en numrerad kontur (R-0001, R-0002 …) med materialet, tjockleken, dess storlek och jobbet den kom från. Listan sparas med filen och kan sparas som en CSV.

## Använd dem igen

Ange **material** och **tjocklek**, låt {{ui:Use remnants first}} vara på, och nesta. Restbitar av samma material och tjocklek prövas minst först; delarna som får plats läggs på dem, inom restbitens egna kontur och på avstånd från dess kant; det som inte får plats läggs på nya plåtar. Jobbrapporten anger vilka restbitar som användes och vad som blev kvar. Med {{ui:Save the leftovers as remnants}} på skriver {{ui:Add this job to the stock}} sedan in det i lagerlistan: en restbit som användes markeras **Använd** (med jobbet) och erbjuds inte igen; det som blir kvar av den blir en ny restbit som minns sin förälder.

## Vad som räknas som en restbit

Resten mäts med det avstånd du angett (ingen del är närmare än så till en skärning). Remsor smalare än en tjugondel av plåten och bitar mindre än 2 % av den är spill; ändra båda gränserna om din verkstad behåller mindre bitar. Hål inuti delar tillhör delarna själva och behålls inte. En rulle har inga restbitar.

## I ritningen

DXF-filen för en nesting ritar varje restbits kontur på lagret REMNANTS med dess nummer i mitten, så att bitarna kan märkas när de skärs.

Finns inte ännu: trådriktning för en restbit, ett streckkods- eller etikettark, restbitar av rullar, lager som delas mellan projekt.
