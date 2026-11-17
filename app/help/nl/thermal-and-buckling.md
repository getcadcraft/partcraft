---
title: Warmte, thermische spanning en knik
summary: Bepaal de temperaturen in een onderdeel uit vaste temperaturen, warmtestroom, warmtevermogen, convectie en straling (stationair of in de tijd), belast een spanningsstudie met een temperatuurstijging, en bepaal de belasting waarbij een slank onderdeel knikt, met wat elke methode wel en niet kan aantonen.
keywords: thermisch, warmteoverdracht, warmte, temperatuur, geleiding, convectie, warmteovergangscoëfficiënt, straling, emissiviteit, warmtestroom, warmtevermogen, warmteproductie, koellichaam, transiënt, tijd, afkoelen, opwarmen, Crank-Nicolson, impliciete Euler, warmtebalans, thermische spanning, thermische spanning in de tijd, transiënte thermische spanning, afschrikken, thermische schok, spanningsgeschiedenis, ergste tijdstip, thermische uitzetting, uitzettingscoëfficiënt, knik, Euler-knik, belastingfactor, kritieke belasting, kolom, slank, eigenwaarde
from: 1a1b7545
---

Deze studies staan in de werkomgeving Simulation, naast statische spanning en eigenfrequenties (zie [Spanning en doorbuiging controleren](topic:simulation)). Kies ze in het vak **Type** van het paneel. Ze gebruiken hetzelfde mesh van kleine kubusjes en dezelfde materiaallijst; elk bibliotheekmateriaal heeft een thermische geleidbaarheid, een soortelijke warmte en een uitzettingscoëfficiënt (gebruikelijke handboekwaarden, getoond onder **Eigenschappen**).

## Thermisch: waar gaat de warmte naartoe?

1. Kies **Thermisch (warmteoverdracht)** als **Type**.
2. Voeg thermische randvoorwaarden toe via de lijst **Toevoegen** van het paneel en klik daarna op hun vlakken (zoals bij oplegging en belastingen):
   - **Vaste temperatuur**: het vlak wordt op een temperatuur gehouden, in °C.
   - **Warmtestroomdichtheid**: W/m² die het vlak in stroomt (negatief stroomt uit). Ze werkt op het werkelijke oppervlak van het vlak, ook waar de kubusjes een trap vormen.
   - **Warmtevermogen**: een totaal in watt, verdeeld over de gekozen vlakken naar oppervlak. Gebruik het voor een verwarming of een chip met bekend vermogen.
   - **Convectie**: lucht of vloeistof op een temperatuur voert warmte af met h W/(m²·K). Gebruikelijke h: stilstaande lucht 5–10, een ventilator 25–100, water 500–10,000. PartCraft berekent h niet: er is in deze studie geen vloeistofstroming.
   - **Straling**: het vlak straalt naar de omgeving op een temperatuur, met een emissiviteit van 0 tot 1. Ze wordt **gelineariseerd** (de straling wordt geschreven als een coëfficiënt die van de temperatuur afhangt en opnieuw wordt opgelost tot die stabiel is) en gaat alleen naar de omgeving: vlakken wisselen geen warmte met elkaar uit.
3. **Warmteproductie** (W/m³) verwarmt het hele onderdeel van binnenuit, bijvoorbeeld een weerstandsonderdeel.
4. Druk op **Oplossen**. Het onderdeel krijgt kleuren naar temperatuur; kies **Warmtestroomdichtheid** bij **Tonen** om te zien waar de warmte stroomt. Wijs het onderdeel aan om beide af te lezen.

Een stationaire warmtestroom heeft een plek nodig waar de warmte heen kan: minstens één vaste temperatuur, convectie of straling. Een onderdeel dat alleen warmte opneemt heeft geen stationaire toestand; maak de studie in plaats daarvan transiënt.

De tabel toont de laagste en hoogste temperatuur en waar die zijn, de grootste warmtestroomdichtheid, en de **warmtebalans**: de warmte die elke randvoorwaarde in- of uitgaat (een vaste temperatuur telt wat ze moet leveren of opnemen), de geproduceerde warmte, de totalen in en uit, en de **onbalans**. De onbalans moet een kleine fractie van de warmte in zijn; een grote onbalans betekent dat het resultaat niet te vertrouwen is.

### In de tijd (transiënt)

Vink **Transiënt** aan en geef een **Starttemperatuur** (het hele onderdeel begint daar), een **Tijdsduur** en een aantal **Tijdstappen**. **Impliciete Euler** is robuust; **Crank–Nicolson** is nauwkeuriger bij dezelfde stappen, maar kan rimpelen na een plotselinge verandering. Sleep na het oplossen de schuifregelaar **Tijd** om de temperaturen op elk moment te zien (de kleurschaal blijft voor elk moment gelijk). De warmtebalans bevat dan ook de opgeslagen warmte.

## Thermische spanning: wat doet een temperatuurverandering met het onderdeel?

Stel in een studie **Statische spanning** (of **Knik**) de **Thermische belasting** in:

- **Gelijkmatige temperatuurverandering**: het hele onderdeel warmt op (of koelt af, met een negatief getal) met zoveel kelvin.
- **Temperaturen uit thermische randvoorwaarden**: voeg thermische randvoorwaarden toe aan dezelfde studie; de stationaire temperaturen worden eerst op hetzelfde mesh opgelost, daarna zet het onderdeel uit met α·(T − de **spanningsvrije temperatuur**).
- **Temperaturen in de tijd (transiënte run)**: voeg thermische randvoorwaarden toe en geef daarna een **Starttemperatuur**, **Tijdsduur**, **Tijdstappen** en **Tijdstapverdeling** op, zoals bij een transiënte thermische studie. De temperaturen worden in de tijd opgelost op hetzelfde mesh (kubusjes of tetraëders), en een statische oplossing op de temperaturen van elk moment geeft de spanning van dat moment. **Spanning op**:
  - **Het ergste moment** (het begin): **Spanningen oplossen** verdeelt momenten gelijkmatig over de run, het begin inbegrepen (21, tenzij u dat wijzigt, maximaal 51). De resultaten openen op het moment met de grootste von Mises-spanning; de tabel noemt dat moment, een kleine grafiek toont de piekspanning tegen de tijd, en de schuifregelaar **Tijd** toont de spanning op elk opgelost moment (de kleurschaal blijft die van het ergste moment).
  - **Eén gekozen tijd**: één moment, de tijdstap die het dichtst bij de **Tijd (s)** ligt die u opgeeft. Een knikstudie neemt altijd één gekozen tijd (het einde van de run, tenzij u er één instelt).

Een onderdeel dat wordt afgeschrikt (van heet in koud gedompeld) of plotseling verwarmd, wordt het sterkst belast zolang het binnenste en het oppervlak het meest verschillen: vaak meteen aan het begin. Een vastgehouden temperatuur geldt vanaf het eerste moment, als een plotselinge verandering, dus de spanning op het allereerste begin hangt af van de elementgrootte (slechts enkele elementen zien de verandering). Lees het als "zeer hoog", en kijk naar de volgende momenten van de schuifregelaar voor waarden die het mesh oplost. De spanning is quasi-statisch: geen traagheid, geen trilling door de plotselinge verandering.

Een onderdeel dat vrij kan groeien heeft geen thermische spanning: houd het net vast genoeg om bewegen te voorkomen (bijvoorbeeld drie wrijvingsloze vlakken in een rechte hoek). Tussen twee wanden vastgehouden wordt het samengedrukt: een stalen staaf die 50 K wordt opgewarmd tussen starre wanden draagt ongeveer 117 MPa. Thermische belastingen balanceren zichzelf, dus de reacties balanceren nog steeds alleen de mechanische belastingen.

## Knik: wanneer bezwijkt een slank onderdeel?

1. Kies **Knik (lineair)** als **Type**, en voeg opleggingen en belastingen toe zoals bij een statische studie.
2. Stel **Te vinden belastingfactoren** in (hoeveel knikvormen).
3. Druk op **Oplossen**. Elke vorm heeft een **belastingfactor**: het veelvoud van uw belastingen waarbij het ideale onderdeel knikt. Een belastingfactor van 3 betekent drie keer uw belastingen; **een belastingfactor onder 1 betekent dat het knikt onder de belastingen die u hebt aangebracht**. De tabel geeft ook de totale belasting bij elke factor. De knikvorm toont hoe het knikt (de grootte ervan betekent niets).

**Lineaire knik overschat de werkelijke knikbelasting.** Ze gaat uit van een perfect onderdeel: volledig recht, zonder restspanning, en elastisch. Echte onderdelen hebben kleine imperfecties en kunnen eerst vloeien, en dunwandige schalen kunnen knikken bij een fractie van de lineaire waarde. Hanteer een ruime marge, en beschouw een belastingfactor bij of onder 3 voor een dunne schaal als een waarschuwing.

## Hoe ver u het kunt vertrouwen

PartCraft controleert deze oplossers aan de hand van handformules: een staaf tussen twee temperaturen (exact), een koelvin (binnen 0.3 K), een plaat die zichzelf verwarmt (exact), een kubus die in de tijd afkoelt (binnen 0.1 % met Crank–Nicolson), een staaf die aan één uiteinde plotseling wordt verwarmd, een vrije staaf die wordt opgewarmd (geen spanning, ΔL = αLΔT), een staaf die tussen wanden wordt vastgehouden (σ = −EαΔT), een afgeschrikte plaat in de tijd tegen de klassieke reeksoplossing (binnen 1 % op kubusjes, 2.1 % op tetraëders in het midden van de plaat; 0.5 % aan het oppervlak), het laatste moment van een lange run tegen de stationaire thermische spanning (gelijk tot op een miljoenste), en Euler-kolommen (binnen 1 % ingeklemd–vrij, 1.5 % scharnierend–scharnierend). Houd rekening met het volgende:

- **Constante materiaalwaarden.** Geleidbaarheid, soortelijke warmte en uitzetting veranderen hier niet met de temperatuur; bij enkele honderden graden kunnen ze met 10–30 % veranderen. Stijfheid verandert ook niet.
- **Spanning in de tijd is quasi-statisch en elastisch**: elk moment is een statische oplossing (geen traagheid), en er is geen vloeien, dus een afschrikking die het oppervlak zou laten vloeien toont in plaats daarvan een spanning boven de vloeigrens.
- **Convectiecoëfficiënten zijn uw invoer**, niet berekend uit een lucht- of waterstroming.
- **Geen contactweerstand**: het onderdeel is één volume.
- **Alleen lineaire knik**: geen imperfecties, geen vloeien, geen gedrag na knik.
- De kubustrap en scherpe binnenhoeken beïnvloeden thermische spanningen op dezelfde manier als andere spanningen (zie [Spanning en doorbuiging controleren](topic:simulation)).

Dit is een labversie: controleer onderdelen die belangrijk zijn op een andere manier.

## Zie ook

- [Spanning en doorbuiging controleren (Simulation)](topic:simulation)
- [Wat nog niet beschikbaar is](topic:not-built-yet)
