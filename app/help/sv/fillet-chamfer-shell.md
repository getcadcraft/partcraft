---
title: Runda, fasa och gör ihålig med Rundning, Fas och Skal
summary: Välj kanter och lägg till rundningar med konstant eller variabel radie samt fasningar med lika avstånd, två avstånd eller avstånd och vinkel, gör en del ihålig med Skal genom att välja ytorna som ska öppnas, ändra vilka kanter eller ytor en funktion använder, och åtgärda de vanliga felen.
keywords: rundning, runda, blandning, fas, avfasning, skal, ihålig, väggtjocklek, kanter, ytor, välj kanter, shift-klick, öppen yta, exakt kärna, nätkärna, finns inte ännu
from: e41c1c12
---

:::note
**I den här versionen** bygger PartCraft rundningar och fasningar med nätkärnan, och endast på **raka kanter mellan två plana ytor**: lådkanter och de raka kanterna på extruderingar och urtag, yttre eller inre hörn (ett inre hörn får material tillfört). Runda kanter, som hålkanter, och en radie som ändras längs kanten byggs inte ännu. Där två rundade kanter möts i ett hörn skärs rundningarna i geringen (de möts i en skarp veck), de blandas inte. **Skal** fungerar också, byggt av nätkärnan: det öppnar endast plana ytor, skal med olika väggtjocklek byggs inte ännu, och det är långsamt på delar med många runda ytor. Se [Det som inte finns ännu](topic:not-built-yet).
:::

{{ui:Fillet}} rundar kanter, {{ui:Chamfer}} fasar dem och {{ui:Shell}} gör delen ihålig. Alla tre arbetar på solidets kanter och ytor och byggs av nätkärnan. Deras rundningar är facetterade som alla runda ytor (**Kurvor** styr hur fint); de runda ytorna är cylindrar som du kan välja och mäta (se [Nätkärnan](topic:solid-kernels)).

## Runda eller fasa kanter

### Välj kanterna först

1. Klicka på en kant på delen. Hela kanten markeras, och högra panelen visar **Kant**: dess typ (Rak, Cirkel eller båge, Kurva), längd och de ytor den ligger mellan.
2. För att lägga till fler kanter, {{key:Shift}}+klicka på dem. Varje markeras; {{key:Shift}}+klicka på en markerad kant för att ta bort den. Panelrubriken räknar dem ("4 kanter"), och statusfältet säger "4 kanter valda. Rundning eller Fas rundar dem; Shift+klick väljer fler, Esc rensar."
3. Välj {{ui:Fillet}} eller {{ui:Chamfer}} i verktygsfältet, eller samma knappar i högra panelen.

Funktionen läggs till med alla valda kanter: en rundning på 2 mm, eller en fasning på 1 mm. Statusfältet säger till exempel "Fillet1 tillagd (4 kanter). Ändra dess storlek till höger; Välj kanter ändrar vilka."

### Eller lägg till funktionen först

1. Med inget valt, välj {{ui:Fillet}} eller {{ui:Chamfer}}.
2. PartCraft går in i valläge: panelrubriken säger "Fillet1: väljer", delen visas som den var före rundningen (panelen säger det), och verktygsfältet visar {{ui:Done}}.
3. Klicka på varje kant för att lägga till den; klicka igen för att ta bort den. Statusfältet räknar dem.
4. Välj {{ui:Done}} (eller {{ui:Done picking}} i panelen), eller tryck på {{key:Esc}} eller {{key:Enter}}.

### Inställningar

| Inställning | Rundning | Fas |
|---|---|---|
| Storlek | **Radie (mm)**, standard 2 | **Avstånd (mm)** bakåt från kanten på båda ytorna, standard 1 |
| **Kanter** | Hur många | Hur många |

Listan nedan namnger varje kant efter de två ytor den förbinder, till exempel "Kant 1: Extrude1 end face × Extrude1 side". **Ta bort** tar bort en. {{ui:Välj kanter}} går tillbaka till valläget. Att dubbelklicka på funktionen i historiken gör detsamma.

Kanter kommer ihåg via de två ytor de förbinder, så de förblir på rätt kant när du ändrar ett mått tidigare i historiken.

### Variabla rundningar och fasningstyper

- **Variabel radie** (rundning): finns inte ännu i den här versionen ("En rundning vars radie ändras längs kanten: finns inte ännu (den kräver en exakt kärna). Ge den en radie."). Med en exakt kärna: markera den och ställ in **Slutradie (mm)**. Radien ändras linjärt från **Radie** i ena änden av varje kant till **Slutradie** i den andra; **Byt ändarna** vänder på det.
- **Typ** (fas): **Lika avstånd**, **Två avstånd** (ett **Andra avståndet** på den andra ytan) eller **Avstånd och vinkel** (avståndet på en yta, avfasningen i **Vinkel (°)** mot den ytan). **Byt sida** lägger det första avståndet på den andra ytan.

## Gör en del ihålig

1. Klicka på den plana yta som ska lämnas öppen, till exempel ovansidan på en låda. Eller {{key:Shift}}+klicka på flera ytor.
2. Välj {{ui:Shell}} i verktygsfältet, eller {{ui:Shell, opening this face}} i ytans panel.

Delen blir en 2 mm vägg med de valda ytorna öppna. Inställningar:

| Inställning | Vad den gör | Standard |
|---|---|---|
| **Vägg (mm)** | Väggtjockleken | 2 |
| **Väggar växer utåt (ytorna förblir inuti)** | Markerad: väggarna läggs till utanför, så insidan behåller delens storlek | Av: väggarna går inåt och utsidan behåller sin storlek |
| **Öppna ytor** | Hur många ytor som tas bort | |

Inåt är väggarna exakt väggtjockleken: yttre hörn förblir skarpa, inre hörn blir runda (radie = väggen), och ett hål genom delen får ett rör av vägg runt sig. Utåt läggs väggarna till utanför den ursprungliga ytan, som blir det ihåliga, och de yttre kanterna blir runda. De inre ytorna namnges efter ytorna de förskjuter, så att du kan välja dem.

Endast plana ytor kan öppnas: väljer du en krökt yta säger det "Skal: i den här versionen öppnar den endast plana ytor (nätkärnan bygger den)." Ett skal är långsamt på delar med många runda ytor (flera sekunder per tusen trianglar), så använd en grövre **Kurvor**-inställning medan du designar.

{{ui:Välj ytor}} ändrar vilka ytor som är öppna, på samma sätt som att välja kanter. Listan namnger varje yta, till exempel "Yta 1: Extrude1 end face". Ett skal utan öppna ytor är inte tillåtet: "Välj ytorna att ta bort (öppna), och gör sedan skal."

## Ordningen spelar roll

Funktioner byggs uppifrån och ned. En rundning före ett skal skalas med delen, så insidan får också runda hörn. En rundning efter ett skal rundar bara de kanter du väljer. Flytta funktioner med {{ui:Flytta upp}} och {{ui:Flytta ned}} (se [Ändra en del via dess historik](topic:edit-history)).

Mönster och speglingar kan inte kopiera en rundning, fasning eller ett skal: "Fillet1 ändrar kroppens kanter eller väggar; den kan inte kopieras. Kopiera de funktioner som skapar solider (extruderingar, revolveringar, hål, importer)." Mönstra hålen eller urtagen först, och runda sedan alla kopiors kanter i en enda rundning.

## När det misslyckas

| Meddelande | Vad du gör |
|---|---|
| "En rundning på 5 mm får inte plats här (den är för stor för en yta bredvid en av kanterna, eller kanterna möts i ett hörn som kärnan inte kan blanda)." | Använd en mindre radie, eller runda färre kanter åt gången (flera rundningsfunktioner, minsta sist) |
| "En kant den rundar är borta: kanten mellan Extrude1 och Cut2." | En tidigare ändring tog bort den kanten. Välj {{ui:Pick edges}}, ta bort den röda kanten och välj den nya |
| "Skalet kunde inte göras med den här tjockleken (…)." | Väggen är tjockare än en smal del av modellen, eller tjockare än en rundnings radie. Gör väggen tunnare, eller rundningarna större än väggen |
| "Den ytan har inget namn som historiken kan följa; välj en annan." | Välj en yta som skapats av en funktion (de flesta ytor är det) |
| "Fillet: i den här versionen endast raka kanter mellan två plana ytor (nätkärnan bygger dem). Runda eller fasa krökta kanter i skissen." (även Fas) | En vald kant är rund, som en hålkant, eller ligger på en krökt yta. Ta bort den med {{ui:Pick edges}}, och runda eller fasa hörnet i skissen i stället |
| "En rundning vars radie ändras längs kanten: finns inte ännu (den kräver en exakt kärna). Ge den en radie." | Avmarkera **Variabel radie** |
| "Fillet med nätkärnan: där rundade kanter möts skärs de, de blandas inte." (⚠ i historiken) | En varning, inte ett fel: delen är byggd. Valda kanter möts i ett hörn, och rundningarna möts där i en skarp veck. Runda färre kanter, eller acceptera vecket |
| "Skal: i den här versionen öppnar den endast plana ytor (nätkärnan bygger den)." | En öppen yta är krökt. Använd {{ui:Pick faces}} och ta bort den; öppna bara plana ytor |

## Begränsningar

I den här versionen fungerar rundningar och fasningar endast på raka kanter mellan två plana ytor, med en radie, och rundningar som möts i ett hörn skärs i geringen. Skal öppnar endast plana ytor. Med en exakt kärna ändras en variabel rundning linjärt längs varje kant (en lag per funktion; ingen radie i punkter längs den). Ytrundningar, helrunda rundningar och skal med olika väggtjocklek byggs inte ännu.
