---
title: Rita din första skiss
summary: Öppna en skiss på ett plan eller en plan yta, rita linjer, rektanglar, cirklar, bågar, punkter och centrumlinjer, runda ett hörn, markera, dra och ta bort.
keywords: skiss, rita, linje, rektangel, cirkel, båge, punkt, centrumlinje, konstruktion, rundning, skissrundning, runda hörn, fångst, markera, fönster, dra, profil
from: 28be7436
---

Varje solid börjar som en skiss: en plan ritning på ett plan. Den här genomgången går igenom ritverktygen. Att låsa fast skissen med villkor och mått finns i [Definiera en skiss fullt ut](topic:relations-dimensions).

## Starta en skiss

Du kan skissa på ett basplan eller på valfri plan yta på delen.

1. Välj var du vill skissa:
   - ett basplan: klicka på **Framplan**, **Ovanplan** eller **Högerplan** i historiken, eller klicka på planet i vyn;
   - en plan yta: klicka på ytan i vyn. Hela ytan markeras.
2. Välj {{ui:Skiss}} i verktygsfältet eller tryck på {{key:S}}. (Med en yta vald kan du också välja {{ui:Skiss på denna yta}} i högerpanelen; med ett plan, {{ui:Skissa på det}}.)

Vyn vrids så att den står rakt mot planet, skissverktygen visas i verktygsfältet och linjeverktyget är redo. Om du trycker på {{ui:Skiss}} utan något valt visas basplanen och statusfältet säger ”Klicka på ett plan eller en plan yta att skissa på. Esc avbryter.”

:::note
En böjd yta kan inte bära en skiss: ”Ytan är böjd. Välj en plan yta eller ett plan att skissa på.”
:::

**En skiss på en yta följer ytan.** Om ytan skapades av en skisskant eller av en extrudering slutände flyttas den nya skissen när funktionen ändras (en djupare urtagning tar med sig skissen på sin botten). Om panelen säger att ytan är ”Fast där den valdes” stannar skissen där ytan är nu.

## Ritverktygen

Varje verktyg har en knapp i verktygsfältet och en tangent. Välj samma knapp igen, tryck på {{key:S}} eller tryck på {{key:Esc}} för att gå tillbaka till Markera.

| Verktyg | Tangent | Så ritar du |
|---|---|---|
| {{ui:Linje}} | {{key:L}} | Klicka på startpunkten och sedan på varje nästa punkt. Linjerna kopplas ihop ände mot ände. Avsluta kedjan med {{key:Esc}}, {{key:Enter}}, ett högerklick eller ett dubbelklick. Att klicka på en befintlig punkt avslutar också |
| {{ui:Rektangel}} | {{key:R}} | Klicka på ett hörn och sedan på det motsatta hörnet. Du får fyra linjer som är sammanfogade i hörnen, två horisontella och två vertikala |
| {{ui:Cirkel}} | {{key:C}} | Klicka på mittpunkten och sedan på en punkt på cirkeln |
| {{ui:Båge}} | {{key:A}} | Klicka på mittpunkten, sedan på starten och sedan på slutet. Bågen går åt det håll du flyttar pekaren runt mittpunkten |
| {{ui:Punkt}} | {{key:P}} | Klicka. En punkt för sig markerar ett hålcentrum för {{ui:Hål}} |
| {{ui:Centrumlinje}} | {{key:N}} | Som en linje, ett segment i taget. Ritas streckad; den är konstruktionsgeometri och används som revolveringsaxel eller referens |
| {{ui:Rundning}} | {{key:F}} | Klicka på ett hörn där två linjer möts, skriv radien och tryck på {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Klicka på de punkter som kurvan går igenom. {{key:Enter}} avslutar, ett klick på första punkten stänger den. Se [Splines, trimma, förskjutning och andra skissverktyg](topic:sketch-tools) |
| {{ui:Trimma}} | {{key:T}} | Klicka på den del av en kurva som ska tas bort, upp till närmaste korsningar |
| {{ui:Mått}} | {{key:D}} | Se [Definiera en skiss fullt ut](topic:relations-dimensions) |

Medan du ritar visar en liten ruta bredvid pekaren längden, storleken, diametern eller radien.

### Skriv måttet medan du ritar

Efter första klicket på en linje, ett rektangel, en cirkel eller en båge kan du skriva måttet i stället för att klicka fram det. När du skriver ett tal öppnas rutan bredvid pekaren med talet i:

| Verktyg | Rutor ({{key:Tab}} flyttar till nästa) | Vad som händer vid {{key:Enter}} |
|---|---|---|
| {{ui:Linje}}, {{ui:Centrumlinje}} | Längd, sedan Vinkel (°) från skissens X-axel | Linjen ritas så lång, mot pekaren eller i den angivna vinkeln; kedjan fortsätter från dess ände |
| {{ui:Rektangel}} | Bredd, sedan Höjd | Rektangeln ritas från första hörnet mot pekaren; ett mått du inte skrev tas från pekaren |
| {{ui:Cirkel}} | Diameter | Cirkeln ritas med den diametern |
| {{ui:Båge}} | Radie efter mittpunkten, sedan Bågvinkel (°) efter starten | Starten hamnar så långt från mittpunkten; sedan går bågen så långt runt, åt det håll du flyttade pekaren |

Varje mått du skriver blir ett **drivande mått** i samma steg, så skissen blir måttsatt: {{key:Mod+Z}} tar bort formen och dess mått tillsammans. Om du klickar i stället för att trycka på {{key:Enter}} behålls det du skrev och resten tas från klicket. {{key:Esc}} stänger rutan och återgår till pekaren.

Stäng av det i {{ui:Inställningar}} › {{ui:PartCraft}} › **Mått medan du ritar** om du bara vill rita med klick. Se [PartCraft-inställningar](topic:settings).

{{ui:Mer}} i slutet av skissverktygen innehåller kontrollpunktsspline, {{ui:Förläng}}, {{ui:Förskjut}}, {{ui:Spegla}}, {{ui:Polygon}}, {{ui:Skåra}}, skissmönstren och {{ui:Projicera kant}}: se [Splines, trimma, förskjutning och andra skissverktyg](topic:sketch-tools).

### Fångst

Fångst lägger till villkor åt dig, så att skissen håller ihop när den flyttas:

- På en **ändpunkt eller origo** visas en liten kvadrat. Den nya punkten görs sammanfallande med den.
- På en **linje, cirkel eller båge** visas ett litet kryss. Den nya punkten placeras på kurvan.
- En linje inom 3 grader från horisontell eller vertikal fångas till den och får ett horisontellt eller vertikalt villkor. Etiketten visar ”H” eller ”V”.

För att undvika en fångst, zooma in så att du klickar längre från punkten eller kurvan.

## Runda ett hörn

1. Tryck på {{key:F}} eller välj {{ui:Rundning}}.
2. Klicka på hörnpunkten där två linjer möts.
3. En ruta öppnas med en föreslagen radie. Skriv radien och tryck på {{key:Enter}}.

Båda linjerna trimmas och förenas med en tangentbåge med ett radiemått. Meddelanden du kan se: ”En rundning kräver ett hörn där exakt två linjer möts.” och ”Den radien är för stor för dessa linjer.”

:::tip
En skissrundning rundar ett hörn i profilen, så extruderingen får rundade lodräta kanter. För att runda kanterna på själva solidet (till exempel plattans översta kanter), använd i stället funktionen {{ui:Rundning}} på delen: se [Runda, fasa och urholka](topic:fillet-chamfer-shell). I en skiss är verktygsfältets Rundning skissverktyget; på delen är det funktionen.
:::

## Konstruktionsgeometri

Konstruktionslinjer, cirklar och bågar är streckade och grå. De styr skissen men ingår inte i profilen som extruderas eller revolveras.

1. Markera linjerna, cirklarna eller bågarna.
2. Tryck på {{key:Q}} eller välj {{ui:Konstruktion}}. Tryck igen för att växla tillbaka.

## Markera, dra och ta bort

Tryck på {{key:S}} (eller {{key:Esc}} tills inget verktyg är aktivt) för Markera.

- Klicka på en punkt, linje, cirkel, båge, villkorssymbol eller mått för att markera den. {{key:Shift}}+klick lägger till i markeringen eller tar bort ur den. I Windows och Linux gör {{key:Ctrl}}+klick samma sak; på Mac gör ⌘+klick det.
- Dra i tomt utrymme för att rita ett fönster: allt som ligger helt inuti det markeras.
- Dra en punkt eller en linje för att flytta den. Lösaren behåller alla villkor och mått när den flyttas, så bara fri geometri rör sig. Dra i en cirkels kant för att ändra dess radie.
- Dra i ett måttets siffra för att flytta etiketten.
- Tryck på {{key:Delete}} eller {{key:Backspace}}, eller välj {{ui:Ta bort}} i högerpanelen, för att ta bort markeringen. När geometri tas bort tas villkoren på den bort också.

## Zooma och panorera i skissen

- Rulla hjulet för att zooma vid pekaren.
- Dra med mittknappen eller högerknappen för att panorera.
- {{ui:Anpassa}} i verktygsfältet eller högerpanelen anpassar skissen i vyn. I en skiss är tangenten {{key:F}} verktyget Rundning, inte Anpassa.

## Stäng skissen

Välj {{ui:Avsluta}} i verktygsfältet eller {{ui:Avsluta skiss}} i högerpanelen, eller tryck på {{key:Esc}} tills skissen stängs. Varje {{key:Esc}} avbryter först det som pågår, går sedan tillbaka till Markera, rensar sedan markeringen, och nästa stänger skissen.

Skissen förblir markerad, så nästa {{ui:Extrudera}} eller {{ui:Revolvera}} använder den.

## Vad som gör en bra profil

{{ui:Extrudera}} och {{ui:Revolvera}} använder **varje sluten slinga** av skissens linjer, cirklar, bågar och splines som inte är konstruktion. Slingor inuti slingor blir hål.

- Varje ände måste mötas av exakt en annan ände. ”Profilen är öppen: en ände vid (12.5, 40) är inte ihopkopplad med något.” anger platsen.
- Inga tre ändar får mötas i en punkt: ”Profilen förgrenar sig vid (0, 20): fler än två ändar möts där.”
- Punkter och konstruktionsgeometri ignoreras av profilen.

Nästa: [Definiera en skiss fullt ut med villkor och mått](topic:relations-dimensions).

## En skiss från ett foto

**Funktioner › Mer › Skiss från foto…** (eller gruppen Skiss i funktionsträdets menyflik) spårar en bild av en platt del mot en enfärgad bakgrund – dess kontur och hål – eller en pennteckning, och förvandlar den till en skiss av linjer, bågar och cirklar. Ange en längd (bredden, höjden eller den längsta sidan) så att skissen får rätt storlek, kontrollera vad som hittades i förhandsvisningen och välj **Skapa skissen**; den kan också extrudera den, i samma ångra-steg. Den spåras på den här datorn. Hörnradier stämmer inom cirka 5 %, detaljer på en eller två pixlar går förlorade, och ett foto taget i snedvinkel eller med skuggor över delen rätas inte upp: fotografera delen rakt framifrån, med jämnt ljus.
