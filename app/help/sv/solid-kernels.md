---
title: Nätkärnan
summary: Den här versionen av PartCraft bygger varje del med en nätkärna som körs i din webbläsare. Vad det betyder för runda ytor, volymer och filer, hur du ser att den fungerar och vilka funktioner som väntar på en exakt kärna.
keywords: kärna, nät, manifold, exakt, b-rep, fasetterad, kurvor, opencascade, occt, rundning kräver exakt, inte byggt, offline, webassembly
from: 68d32d16
---

En geometrikärna är motorn som gör din historik till en solid. Den här versionen av PartCraft har en: **nätkärnan** (manifold-3d). Den körs på din dator som ett litet WebAssembly-program och är klar en stund efter att appen öppnats. Ingenting om din del skickas någonstans.

| | Nätkärna |
|---|---|
| Runda former | Plana fasetter. **Kurvor** i delpanelen anger hur fina |
| Volymer och areor | Av den fasetterade soliden, något låga på runda delar |
| Skisser, extrudera, skär, revolvera, hål, mönster, spegling, referensplan | Ja |
| Rundning och Fasning | På raka kanter mellan plana ytor; rundningar som möts geringas |
| Skal och Släppvinkel | Skal öppnar plana ytor (exakt väggtjocklek); Släppvinkel lutar plana ytor |
| Exporter | STL, 3MF, STEP (fasetterad), ritnings-PDF och DXF |
| Ritningsvyer | Ritade från fasetterna, sektionsvyer inräknade |
| Ytor och kanter | Namngivna och kända till sin sort (plan, cylinder, kon, sfär, torus; rak, cirkel), hämtade från skisserna: arbetsytorna Simulering, Generativ och Tillverkning, Mät, val och hålstabellen använder dem |

Chipet nära högra änden av statusfältet säger **Nätkärna** medan den bygger din del.

## Vad som väntar på en exakt kärna

En exakt (B-rep) kärna behåller sanna cirklar, cylindrar och koner, och släta rundningar på vilken kant som helst; svep, loft, ytor, plåt, refflor, flera kroppar, STEP-import och exakt STEP-export bygger på en sådan. Tidigare labbversioner av PartCraft använde OpenCascade för det. Dess licens (LGPL) passar inte den här utgåvan, där varje app är Apache-2.0 och bara använder bibliotek med tillåtande licenser, så det ingår inte. Inget här har något datum.

Tills dess säger de funktionerna **Finns inte ännu** när du väljer dem: statusfältet anger orsaken, och verktygstipsen för deras knappar slutar med ”finns inte ännu (kräver en exakt kärna)”. [Vad som inte är byggt ännu](topic:not-built-yet) listar var och en med vad du kan göra i stället.

En del som gjorts med dem i en tidigare version öppnas fortfarande. Dessa funktioner stannar i historiken markerade som inte byggda (håll pekaren över en för orsaken), resten av delen byggs, och sparande behåller dem oförändrade.

## Runda ytor och Kurvor

Nätkärnan ritar en cirkel som en polygon. **Kurvor** i delpanelen anger hur många sidor en hel cirkel får; fler sidor ser jämnare ut och mäter närmare det sanna värdet, och tar längre tid att bygga. Volymer, areor och avstånd från {{ui:Mät}} gäller denna fasetterade solid: för ett hål eller en tapp är de något mindre än för den runda formen.

## Online och offline

Nätkärnan är en del av appens egen nedladdning. För att arbeta utan anslutning sparar du PartCraft för offlineanvändning medan du är online: välj {{ui:Spara för offline}} i appfältet och vänta tills det säger **Redo för offline**. Detaljer: [Arbeta offline](common:offline).
