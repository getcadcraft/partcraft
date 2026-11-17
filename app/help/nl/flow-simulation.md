---
title: Stromingen simuleren (Flow-studie)
summary: Stroming door de kanalen in een onderdeel of eromheen in een blok: inlaten, uitlaten, lucht, water of een eigen fluïdum, daarna snelheid en druk op een verplaatsbaar snijvlak, stroomlijnen, oppervlaktedruk, drukval, massabalans, weerstand en lift, met wat de laminaire methode wel en niet kan aantonen.
keywords: stroming, CFD, fluïdum, numerieke stromingsleer, stromingssimulatie, lucht, water, viscositeit, dichtheid, Reynoldsgetal, laminair, turbulent, drukval, drukverlies, inlaat, uitlaat, deksel, dop, snelheid, debiet, volumestroom, liter per minuut, statische druk, stroomlijnen, snijvlak, weerstand, lift, weerstandscoëfficiënt, liftcoëfficiënt, frontaal oppervlak, externe stroming, interne stroming, buis, kanaal, verdeler, mondstuk, lattice Boltzmann, residu, convergentie
from: 7dc75f29
---

Een **Flow**-studie berekent hoe een fluïdum beweegt door de kanalen in uw onderdeel (**intern**) of eromheen (**extern**). Standaard is die **laminair, onsamendrukbaar, isotherm en Newtoniaans**: gladde stroming van een fluïdum waarvan dichtheid en viscositeit constant blijven, zonder warmte, turbulentie of zwaartekracht. Er is ook een **experimenteel** turbulent model, alleen voor kwalitatieve patronen (zie hieronder). Het werkt op de benoemde vlakken die de mesh-kernel aan het onderdeel geeft (zie [De mesh-kernel](topic:solid-kernels)).

Kies **Simulatie** in het vak **Werkomgeving**, druk op **Nieuwe studie** als er geen is, en zet **Type** op **Stroming (CFD)**. **Stromingsmodel** is **Laminair** (de standaard) of **Turbulent (Spalart–Allmaras, experimenteel)**: zie **Turbulente stroming (experimenteel)** hieronder. De constructieve instellingen van de studie blijven bewaard, zodat u kunt terugschakelen. De stromingsinstellingen worden in het onderdeelbestand opgeslagen en elke wijziging kan ongedaan worden gemaakt.

## Kies het fluïdum en de cellen

- **Fluïdum**: lucht of water bij 20 °C, of **Aangepast** met een eigen dichtheid (kg/m³) en dynamische viscositeit (Pa·s). Lucht gebruikt de ideale gaswet en de wet van Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); water gebruikt de IAPWS-waarden (998.21 kg/m³, 1.0016 mPa·s).
- **Celgrootte**: de vloeistofruimte is gevuld met gelijke kubussen. Laat het leeg voor een automatische grootte; het paneel toont het rooster. Elke opening en elk kanaal moet **minstens 8 tot 10 cellen breed** zijn voor bruikbare getallen; kleinere cellen zijn nauwkeuriger en trager (twee keer zo fijn kost ongeveer 16 keer zoveel werk).
- **Wanden**: **Geïnterpoleerd** volgt gebogen wanden tussen cellen (de standaard); **Terugkaatsing** behandelt wanden als de trapvorm van de kubussen.

## Stroming in het onderdeel

De vloeistofruimte moet gesloten zijn. Voeg een **Inlaat** en een **Uitlaat** toe in het paneel en klik daarna op hun vlakken in het beeld:

1. **Het vlakke vlak rond een opening** — de rand aan het einde van een buis, een aansluitvlak. PartCraft sluit het gat van de opening daar met een deksel af. Elk gat in dat vlak hoort bij die opening; als een inlaat en een uitlaat op hetzelfde vlak openen, modelleer dan een dunne dop over één ervan.
2. **Het binnenvlak van een dop** — zoals in andere CAD-programma's: modelleer een dunne plaat (een extrusie) over de opening en kies het vlak dat het fluïdum raakt.

Voor een inlaat stelt u een **snelheid** in (m/s, gelijk over de opening, het onderdeel in) of een **volumestroom** (L/min). Voor een uitlaat stelt u de **statische druk** in (Pa, overdruk). Als een opening open blijft, of een wand dunner is dan een cel, versmelt de binnenkant met de buitenkant en stopt de berekening met "Geen gesloten fluïdumruimte".

## Stroming rond het onderdeel

Stel **Stroming** in op **Extern**, de **Snelheid**, de richting waarnaar de stroming gaat, en hoe ver het blok stroomopwaarts, stroomafwaarts en zijwaarts reikt (leeg: 1, 3 en 1 keer de grootste afmeting van het onderdeel). Het blokvlak waar de stroming binnenkomt is een instroming, het vlak waar ze verlaat is een uitstroming bij 0 Pa, en de vlakken langs de stroming zijn glijdend. Een te klein blok perst de stroming langs het onderdeel en verhoogt de weerstand. **Referentieoppervlak** is het oppervlak dat de weerstands- en liftcoëfficiënten gebruiken (leeg: het frontale oppervlak van het onderdeel gezien langs de stroming). Lift wordt gemeten langs +Y, tenzij u een andere richting kiest.

## Oplossen en de resultaten lezen

Druk op **Oplossen**. De berekening loopt op de achtergrond, met het aantal stappen, het residu en een residugrafiek; **Stoppen** beëindigt hem. Hij stopt wanneer het residu (hoeveel het snelheidsveld per stap nog verandert) onder het doel ligt en de drukval of weerstand is gestabiliseerd. Als eerst de stapgrens wordt bereikt, toont het paneel **Niet geconvergeerd** in rood: de getallen zijn de laatste toestand, geen stationair antwoord.

- **Snijvlak**: snelheid of statische druk op een vlak door het model; kies de normaal (X, Y of Z) en sleep de schuifregelaar om het te verplaatsen. Zweef erover om de waarden te lezen.
- **Stroomlijnen**: vanuit de inlaten (intern) of vanuit een rooster over het instroomeinde van het blok in het snijvlak (extern).
- **Onderdeel**: massief, doorzichtig (om het vlak erin te zien), oppervlaktedruk, of verborgen.
- **Tabel**: Reynoldsgetal, drukval (gemiddelde statische druk bij de inlaten minus die bij de uitlaten), de stroming en gemiddelde druk van elke opening, de kracht op het onderdeel, weerstand en lift met hun coëfficiënten en referentieoppervlak (extern), de massabalans (instroming tegen uitstroming), het mesh en de solver.

## Turbulente stroming (experimenteel)

**Stromingsmodel › Turbulent (Spalart–Allmaras, experimenteel)** lost de in de tijd gemiddelde turbulente stroming op (stationaire RANS): het Spalart–Allmaras-model geeft in elke cel een wervelviscositeit, en de cellen naast wanden gebruiken de wet van de wand van Spalding in plaats van de dunne laag daar op te lossen. Het is overal volledig turbulent (geen laminaire gebieden, geen overgang).

**Het heeft de nauwkeurigheidscontroles niet doorstaan.** Het paneel, de resultaten en de tabel zeggen dat bij elke turbulente studie, en de waarschuwing kan niet worden gesloten. Gebruik het voor **kwalitatieve stromingspatronen** — waar de stroming loslaat, terugstroomt of versnelt — **niet voor ontwerpgetallen**.

| Controle | Referentie | Resultaat |
|---|---|---|
| Wrijving in een vlak kanaal, eerste cel bij y⁺ 49 / 98 | Correlatie van Dean | +3.3 % / +4.7 % |
| Kanaal met opgeloste wand (y⁺ ≈ 3), Re_τ 180: bulksnelheid | DNS van Moser, Kim & Mansour | −1 % |
| Vlak kanaal, y⁺ 7–15 of 190–380 | Correlatie van Dean | +9 tot +22 % |
| Wrijving in een buis door de kubuscellen, volledig ontwikkeld, 10–30 cellen breed | Colebrook | 30 tot 34 % te hoog |
| Hervestiging achter een achterwaartse trede, 6–14 cellen per treedhoogte | Driver & Seegmiller, 6.26 treedhoogten | 21 tot 39 % te kort |

Met fijnere cellen verbetert het resultaat maar langzaam. Na het oplossen toont de tabel de **y⁺ van de eerste cel** (min, gemiddeld en max over de wandcellen) en waarschuwt buiten het gecontroleerde bereik van 1 tot 400; streef naar ongeveer 30 tot 300. **Looptijd:** de automatische cellen zijn zo gedimensioneerd dat ze hooguit enkele minuten op één laptopkern vragen (het paneel toont het slechtste geval voor het rooster en de stapgrens; een kleine buis stabiliseert in minder dan 20 seconden). Het halveren van de celgrootte kost ongeveer 16 keer zoveel tijd. Krachten op het onderdeel komen uit een impulsbalans over de openingen of het blok.

**Werk tot nu toe:** de wandcellen passen nu hun eigen schuifspanning aan op de wandwet, waardoor de buis- en tredefouten zijn gedaald tot de hierboven genoemde cijfers, zonder de resultaten van het vlakke kanaal te veranderen. Dat was niet genoeg voor ontwerpgetallen. De volgende stap is fijnere cellen dicht bij de wanden.

## Wat het wel en niet kan aantonen

- **Het laminaire model** is alleen laminair. In buizen wordt de stroming turbulent boven een Reynoldsgetal van ongeveer 2,000 tot 4,000; achter stompe lichamen begint de zog boven ongeveer 50 wervels af te laten. Het paneel waarschuwt op deze punten. Een laminair resultaat voor turbulente stroming onderschat de drukval en geeft een verkeerde weerstand. Het experimentele turbulente model (hierboven) geeft turbulente stroming kwalitatief weer; de getallen ervan zijn nog niet betrouwbaar.
- **Methode:** de lattice-Boltzmannmethode (D3Q19, two-relaxation-time-botsing) tot een stationaire toestand. Binnenin is hij licht samendrukbaar; PartCraft houdt dichtheidsveranderingen tot enkele procenten. Als de stroming te snel is voor de cellen, start hij niet en zegt hoeveel kleiner de cellen moeten zijn.
- **Gecontroleerd tegen:** stroming van Hagen–Poiseuille in een buis door een onderdeel (drukgradiënt binnen 1 % bij 20 cellen breed), de door een deksel aangedreven holte van Ghia et al. (binnen 0.75 % van de snelheid van het deksel) en de cilinderbenchmark van Schäfer–Turek (weerstand binnen 1 % bij 10 cellen per diameter).
- Niet gemodelleerd: warmteoverdracht, turbulentie met ontwerpnauwkeurigheid (het turbulente model is experimenteel), vrije oppervlakken, cavitatie, zwaartekracht, bewegende delen, niet-Newtoniaanse vloeistoffen, ruwe wanden. Labversie: controleer belangrijke resultaten op een andere manier.
