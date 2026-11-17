---
title: Menyer, tangenter och mus
summary: Välj en menystil som passar det sätt du redan arbetar på, ge valfritt kommando en egen tangent, flytta kommandon mellan menyflikarna och ställ in vad hjulet och varje musknapp gör i 3D-vyn.
keywords: menystil, menyer, menyfliksområde, verktygsfält, funktionsträd, tangentbordsgenvägar, snabbtangenter, tangenter, anpassa, byt tangent, mus, hjul, invertera, zoomriktning, mittknapp, kretsa, panorera, exportera, importera, byte, bekant
from: 8445b06c
---

PartCraft:s kommandon är desamma oavsett hur du når dem. En **menystil** avgör bara var de sitter på skärmen, vad de heter där och vilka tangenter som kör dem. Välj en i {{ui:Inställningar}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menyer, tangenter och mus}}; ändringen gäller direkt, och den här webbläsaren kommer ihåg den.

## De två stilarna

| Stil | Vad du får |
|---|---|
| {{ui:PartCraft}} | PartCraft:s eget verktygsfält: växlaren för arbetsytor, Fil, Skiss, Funktioner, Ritning, Sammanställning, Redigera och Visa. Tangenterna {{key:S}} skiss, {{key:F}} anpassa, {{key:M}} mät, {{key:X}} sektionsvy. Utgångsläget. |
| {{ui:Funktionsträd}} | Ett menyfliksområde utlagt som feature-baserade mekaniska CAD-program lägger sina: en {{ui:Fil}}-meny (med alla exporter), snabbknappar, och flikarna {{ui:Funktioner}}, {{ui:Skiss}}, {{ui:Ytor}}, {{ui:Utvärdera}}, {{ui:Ritning}}, {{ui:Sammanställning}}, {{ui:Studier}} (arbetsytorna och deras verktyg), {{ui:Illustrera}} (Illustrera-arbetsytans manuella verktyg; dess verktyg växlar först till Illustrera) och {{ui:Visa}}. {{ui:Funktioner}} börjar med {{ui:Skiss}}, eftersom en del börjar med en skiss. Extra tangenter: {{key:E}} extrudera, {{key:H}} hål, och {{key:V}} följt av en bokstav för en vy: {{key:V}} {{key:F}} framifrån, {{key:V}} {{key:B}} bakifrån, {{key:V}} {{key:T}} uppifrån, {{key:V}} {{key:O}} underifrån, {{key:V}} {{key:R}} höger, {{key:V}} {{key:L}} vänster, {{key:V}} {{key:I}} isometrisk, {{key:V}} {{key:N}} normal mot. I 3D-vyn kretsar mittknappen, {{key:Shift}} och mittknappen panorerar, högerknappen panorerar och vänsterknappen väljer bara. |

Varje stil behåller {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} och {{key:Mod+A}}.

Ett verktyg från en annan arbetsyta växlar först dit; ett Design-verktyg som valts i en annan arbetsyta går först tillbaka till Design. Skissverktyg väntar på en skiss, ritverktygen på ritningsbladet och sammanställningsverktygen på en sammanställning: statusfältet säger vad du ska göra först.

:::tip
I en skiss, på ritningsbladet, i en sammanställning och i de andra arbetsytorna behåller bokstäverna sin egen betydelse där ({{key:L}} linje, {{key:R}} rektangel, {{key:J}} led …) i alla stilar. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} och piltangenterna behåller alltid sina. En tangent i PartCraft:s egen layout som din stil gav ett annat kommando gör ingenting, och statusfältet säger var kommandot tog vägen.
:::

## Gör den till din egen

1. Välj stilen som ligger närmast det du vill ha, klicka sedan på {{ui:Anpassa…}}.
2. Under {{ui:Tangenter och menyer}}, hitta ett kommando (sökrutan hjälper). {{ui:Lägg till en tangent}} och tryck på tangenten, eller två tangenter i rad. Klicka på en tangent för att ta bort den.
3. Med menyfliksområdet flyttar {{ui:Var det sitter}} kommandot till en annan flik och panel, till menyn {{ui:Fil}}, eller till {{ui:Bara tangenter}}.
4. Under {{ui:Mus}} ställer du in hjulet, knapparna som panorerar en skiss, och vad varje knapp gör i 3D-vyn.
5. Ge den ett namn och klicka på {{ui:Spara}}.

Att spara en inbyggd stil gör en egen kopia ("Mitt funktionsträd"); den inbyggda ändras aldrig. En tangent som getts till två kommandon, eller en som skulle köras innan en tvåbokstavstangent kan skrivas, visas i rött och måste åtgärdas innan du kan spara.

## Mus

- **Musens hjul**: {{ui:Rulla uppåt zoomar in}} (utgångsläget) eller {{ui:Rulla uppåt zoomar ut}}, och hur snabbt. En nypning på en styrplatta zoomar alltid åt det håll som fingrarna rör sig.
- **Panorera skissen med**: mittknappen, högerknappen, eller båda. Ett högerklick i en skiss avslutar fortfarande verktygets steg.
- **Dra i 3D-vyn**: {{ui:Varje vys egen}} behåller PartCraft:s inställning ({{ui:Inställningar}} › {{ui:PartCraft}}: vänster kretsar, eller mitten kretsar). Eller ställ in varje knapp till kretsa, panorera, zooma eller ingenting; {{key:Shift}} med kretsknappen panorerar. Ett klick utan att dra väljer fortfarande.

## Ta med dig den

{{ui:Exportera}} sparar stilen i bruk som en liten `.ccinput.json`-fil; {{ui:Importera…}} lägger till en, från en annan dator eller en kollega. En importerad fil kan bara peka på PartCraft:s egna kommandon: allt annat i den lämnas bort och räknas i statusfältet. {{ui:Ta bort den här stilen}} tar bort en av dina egna.

:::note
Inställningarna stannar i den här webbläsaren. {{ui:Använd den här stilen i alla appar}} under stilkorten gör att varje app öppnas i sin motsvarande stil (sitt eget verktygsfält, eller ett menyfliksområde), med ändringarna du gjort i varje app. Att välja en annan stil i en app ändrar bara den appen.
:::

Relaterat: [Tangentbord och mus](topic:keyboard) · [PartCraft-inställningar](topic:settings) · [Från ett annat parametriskt modelleringsprogram](topic:coming-from)
