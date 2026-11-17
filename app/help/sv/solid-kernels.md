---
title: Nätkärnan
summary: Den här versionen av PartCraft bygger varje del med en nätkärna som körs i din webbläsare. Vad det betyder för runda ytor, volymer och filer, hur du ser att den fungerar och vilka funktioner som väntar på en exakt kärna.
keywords: kärna, nät, manifold, exakt, b-rep, fasetterad, kurvor, opencascade, occt, rundning kräver exakt, finns inte ännu, offline, webassembly
from: f931645c
---

En geometrikärna är motorn som gör om din historik till ett solid. Den här versionen av PartCraft har en: **nätkärnan** (manifold-3d). Den körs på din dator som ett litet WebAssembly-program och är klar strax efter att appen har öppnats. Ingenting om din del skickas någonstans.

| | Nätkärna |
|---|---|
| Runda former | Plana facetter. **Kurvor** i delpanelen anger hur fina de är |
| Volymer och areor | Av det facetterade solidet, något lågt för runda delar |
| Skisser, extrudering, urtag, revolvering, hål, mönster, spegling, referensplan | Ja |
| Rundning och fasning | På raka kanter mellan plana ytor; rundningar som möts blir geringsskurna |
| Skal och släppvinkel | Skal öppnar plana ytor (exakt väggtjocklek); släppvinkel lutar plana ytor |
| Exporter | STL, 3MF, STEP (exakt: runda ytor skrivs på sina sanna ytor; eller fasetterad), ritnings-PDF och DXF |
| Ritningsvyer | Ritas från facetterna, inklusive sektionsvyer |
| Ytor och kanter | Namngivna och kända efter typ (plan, cylinder, kon, sfär, torus; rak, cirkel), hämtade från skisserna: arbetsytorna Simulering, Generativ och Tillverkning, Mät, markering och håltabellen använder dem |

Etiketten nära statusfältets högra ände säger **Nätkärna** medan den bygger din del.

## Det som väntar på en exakt kärna

En exakt (B-rep-)kärna behåller sanna cirklar, cylindrar och koner, samt släta rundningar på valfri kant, svep, lofter, ytor, plåt, ribbor, flera kroppar och STEP-import med krökta ytor som behålls exakta – allt detta byggs på den. (Exakt STEP-export väntar inte på den: nätkärnan känner varje yta sanna form från skissen, och exporten skriver dem.) Tidigare labbversioner av PartCraft använde OpenCascade för detta. Dess licens (LGPL) passar inte den här utgåvan, där varje app är Apache-2.0 och bara använder bibliotek med tillåtande licenser, så den ingår inte. Det finns inget datum för något av detta.

Tills dess säger de funktionerna **Finns inte ännu** när du väljer dem: statusfältet anger skälet, och knapparnas verktygstips slutar med ”finns inte ännu (kräver en exakt kärna)”. [Vad som finns inte ännu](topic:not-built-yet) listar var och en med vad du gör i stället.

En del som gjorts med dem i en tidigare version öppnas fortfarande. De funktionerna finns kvar i historiken markerade som finns inte ännu (håll pekaren över en för skälet), resten av delen byggs, och när du sparar lämnas de oförändrade.

## Runda ytor och Kurvor

Nätkärnan ritar en cirkel som en polygon. **Kurvor** i delpanelen anger hur många sidor en hel cirkel får; fler sidor ser jämnare ut och mäter närmare det sanna värdet, men tar längre tid att bygga. Volymer, areor och avstånd från {{ui:Mät}} gäller för det facetterade solidet: för ett hål eller en upphöjning är de något mindre än för den runda formen.

## Online och offline

Nätkärnan ingår i appens egen nedladdning. För att arbeta utan anslutning sparar du PartCraft för offline-användning medan du är online: välj {{ui:Spara för offline}} i appfältet och vänta tills det står **Klar för offline**. Detaljer: [Arbeta offline](common:offline).
