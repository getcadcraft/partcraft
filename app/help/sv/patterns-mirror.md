---
title: Mönster- och speglingsfunktioner
summary: Upprepa funktioner i rad med Linjärt, runt en axel med Cirkulärt, och kopiera funktioner eller hela kroppen över ett plan med Spegla.
keywords: mönster, linjärt mönster, cirkulärt mönster, polärt mönster, matris, spegla, symmetrisk, kopiera funktioner, hålcirkel, startobjekt, spegla kropp
from: 702e9edb
---

Mönster och speglingar kopierar funktioner som du redan har byggt. Kopiorna ingår i historiken: ändrar du originalet följer kopiorna efter.

Det som kopieras är det funktionen gör: ett upphöjningsmönster lägger till material, ett urtags- eller hålmönster tar bort det. Mönster kan mönstras och speglas igen. En importerad STEP-solid kan också kopieras; avrundningar, fasningar och skal kan inte kopieras.

## Linjärt mönster

1. Markera funktionen som ska kopieras i historiken (till exempel ett Hål eller ett Urtag). Om inget är markerat används den senaste solidfunktionen.
2. Välj {{ui:Linjärt}}. Tre kopior visas med 20 mm mellanrum längs X.
3. Ange i högerpanelen:

| Inställning | Vad den gör | Standard |
|---|---|---|
| **Funktioner att kopiera** | Markera varje funktion som ska kopieras. Endast funktioner ovanför mönstret listas | Den markerade funktionen |
| **Riktning** | X-axel, Y-axel, Z-axel, en linje eller centrumlinje från en tidigare skiss, axeln för en revolvering, eller en vald kant | X-axel |
| **Avstånd (mm)** | Avstånd mellan grannar | 20 |
| **Antal** | Totalt antal, **inklusive originalet** (1 till 1000) | 3 |
| **Vänd riktning** | Kopiorna går åt andra hållet | Av |

### Använd en kant som riktning

1. Klicka på en rak kant på delen i vyn. Högerpanelen säger **Kant** och visar dess längd.
2. Välj {{ui:Linjärt}}: mönstret går längs den kanten.

Eller markera mönstret, välj en kant och välj ”Vald kant (använd den som valdes nu)” i **Riktning**. En vald kant är fixerad i rymden och följer inte senare ändringar. En skisslinje följer sin skiss.

## Cirkulärt mönster

1. Markera funktionen som ska kopieras (till exempel ett hål nära kanten på en skiva).
2. Välj {{ui:Cirkulärt}}. Sex kopior visas jämnt fördelade runt hela varvet.
3. Ange:

| Inställning | Vad den gör | Standard |
|---|---|---|
| **Funktioner att kopiera** | Som för Linjärt | Den markerade funktionen |
| **Axel** | X-, Y- eller Z-axel, en skisslinje, axeln för en revolvering, eller en vald kant | Den senaste revolveringens axel om det finns en, annars Y-axeln |
| **Vinkel (°)** | 360 fördelar kopiorna jämnt runt. Mindre sprider dem över den vinkeln, med första och sista i ändarna | 360 |
| **Antal** | Totalt antal, inklusive originalet | 6 |
| **Vänd riktning** | Vänder åt andra hållet | Av |

Världsaxlarna går genom origo. För en skiva som inte är centrerad i origo, använd en skisscentrumlinje eller en revolveringsaxel.

### Exempel: de åtta bulthålen i en fläns

1. Revolvera flänsen (se [Revolvera en svarvad del](topic:revolve)) kring Y-axeln.
2. Skissa på flänsens platta övre yta, lägg en punkt på bulthålscirkeln och gör ett Hål.
3. Med Hålet markerat, välj {{ui:Cirkulärt}}. Axeln är redan ”Axel för Revolve1”.
4. Ange **Antal** till `8`.

## Spegla

1. Markera funktionen som ska speglas i historiken, eller markera inget för att spegla **hela kroppen så långt den är byggd**.
2. Välj {{ui:Spegla}}. Den speglar över **Högerplanet**.

För att i stället spegla hela kroppen över en yta på delen, klicka först på den plana ytan och välj sedan {{ui:Spegla}}. (Ett klick på en yta rensar markeringen i historiken, så det här speglar alltid hela kroppen.)

Inställningar i högerpanelen:

- **Spegla**: markera **Hela kroppen (så långt den är byggd)**, eller avmarkera och markera de funktioner som ska kopieras.
- **Speglingsplan**: Framplanet, Ovanplanet, Högerplanet, ytan den använder nu (”En yta på Extrude1” eller ”Ett fixerat plan”), eller ”Ytan som valdes nu”. För att spegla valda funktioner över en yta: markera Spegla i historiken, klicka på ytan i vyn och välj ”Ytan som valdes nu”.

Att spegla hela kroppen över en yta fördubblar delen, till exempel från ett halvt fäste till ett helt.

## Meddelanden

- ”Bygg en funktion att kopiera först.” eller ”Bygg en solid först.” Det finns inget solid att kopiera än.
- ”Välj funktionerna att kopiera.” Alla rutor för **Funktioner att kopiera** är avmarkerade.
- ”Extrude2 har ingen solid att kopiera.” Den funktionen misslyckades eller är undertryckt.
- ”Fillet1 ändrar kroppens kanter eller väggar; den kan inte kopieras. Kopiera funktionerna som skapar solider (extruderingar, revolveringar, hål, importer).” Avrundningar, fasningar och skal kan inte mönstras eller speglas; mönstra först, avrunda sedan.
- ”Det finns ingen kropp att spegla än.”

:::note
Mönsterkopior kan inte hoppas över en och en, och ett mönster kan inte följa en skisskurva. Skissmönster och skissspeglingar är inte byggda än heller: rita upprepad skissgeometri för hand eller med **Lägg till med koordinater**.
:::
