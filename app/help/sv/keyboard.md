---
title: Tangentbord och mus
summary: Varje tangentbordsgenväg och musåtgärd i PartCraft, grupperad efter var den fungerar: överallt, kopiera och klistra in, på delen, i 3D-vyn, i en skiss, i historiken och i en sammanställning.
keywords: tangentbord, genvägar, snabbtangenter, tangenter, mus, kretsa, panorera, zooma, hjul, högerklick, ångra, gör om, spara, öppna, escape, ta bort, Alt-pil, kopiera, klistra in, klipp ut, duplicera, markera allt, mittknapp
from: 3a59c3a3
---

Tangenter gör ingenting medan du skriver i en ruta i en panel, utom {{key:Mod+S}} och {{key:Mod+O}}, som alltid fungerar. Bokstavstangenter fungerar utan modifierare.

Allmänna anteckningar om tangenter i webbläsaren, och på tangentbord utan funktionstangenter: [Tangenter, möss och styrplattor](common:keys).

## Överallt

| Tangent | Åtgärd |
|---|---|
| {{key:Mod+S}} | Spara delen (i en sammanställning: sammanställningen). Stänger först en öppen skiss |
| {{key:Mod+O}} | Öppna en del- eller sammanställningsfil (frågar först om det finns osparade ändringar) |
| {{key:Mod+Z}} | Ångra |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gör om |
| {{key:F1}} | Öppna eller stäng den här hjälpen (även {{ui:Hjälp}} i appfältet). {{key:Esc}} stänger den också. På många bärbara datorer och Mac-tangentbord, håll ned Fn |
| {{key:Ctrl+Shift+F}} | Skärmläge: normalt, helskärm, helskärm med fälten dolda. Ctrl även på Mac, inte ⌘ |
| {{key:Esc}} | Lämna helskärm (när du är i helskärm) |
| {{key:Mod+,}} | Inställningar, inklusive fliken PartCraft (se [PartCraft-inställningar](topic:settings)) |

I en sifferruta i en panel är {{key:Mod+Z}} webbläsarens egen textångring. I sifferrutan över en skissmått ångrar den i PartCraft.

## Kopiera, klistra in och duplicera

De verkar på det du arbetar i: den markerade geometrin i en öppen skiss, den markerade funktionen i historiken, eller den markerade delen i en sammanställning. Detaljer i [Kopiera, klistra in och duplicera](topic:copy-paste).

| Tangent | Åtgärd |
|---|---|
| {{key:Mod+C}} | Kopiera markeringen |
| {{key:Mod+X}} | Klipp ut: kopiera och ta sedan bort |
| {{key:Mod+V}} | Klistra in. I en skiss följer kopian pekaren: klicka där den ska hamna |
| {{key:Mod+Shift+V}} | Klistra in på plats: samma koordinater (i en sammanställning, samma plats) |
| {{key:Mod+D}} | Duplicera: kopiera och klistra in i ett steg, utan att ändra urklippet |
| {{key:Mod+A}} | Markera allt (i en skiss) |
| {{key:Esc}} | Avmarkera allt (och avbryt en inklistring som följer pekaren) |

I en sifferruta kopierar och klistrar dessa tangenter in text som vanligt. Markerad text i en panel kopieras av webbläsaren.

## På delen (ingen skiss öppen)

| Tangent | Åtgärd |
|---|---|
| {{key:S}} | Skiss på det valda planet eller den plana ytan; med inget valt, välj var genom att klicka |
| {{key:F}} | Anpassa delen i vyn |
| {{key:M}} | Mät, i alla arbetsytor och i en sammanställning; {{key:Esc}} rensar valen, {{key:Esc}} igen stänger den (se [Mät avstånd, vinklar och massa](topic:measure)) |
| {{key:X}} | Sektionsvy på eller av, i alla arbetsytor och i en sammanställning; {{key:Esc}} stänger den (se [Titta in med en sektionsvy](topic:section-view)) |
| {{key:Delete}} | Ta bort vald funktion (frågar om andra använder den) |
| {{key:0}} … {{key:9}}, {{key:.}} | Med en funktion vald: skriv dess huvudtal (djupet för en extrudering, diametern för ett hål, antalet i ett mönster, radien för en rundning …) och tryck sedan {{key:Enter}}. {{key:Esc}} behåller det gamla |
| {{key:Backspace}} | Ta bort vald funktion, när en är vald |
| {{key:Esc}} | Sluta välja skissplan, eller avmarkera (inklusive kanter eller ytor valda med {{key:Shift}}) |

## I 3D-vyn

Klicka först i vyn så att den har tangentbordsfokus.

| Tangent | Åtgärd |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Vrid vyn 15 grader |
| {{key:Shift+Left}} och de andra pilarna | Panorera |
| {{key:Plus}} eller {{key:=}} | Zooma in |
| {{key:Minus}} | Zooma ut |

| Mus | Åtgärd |
|---|---|
| Dra med vänster knapp | Vrid (kretsa) vyn |
| Dra med höger eller mittknapp | Panorera |
| {{key:Shift}}, {{key:Ctrl}} eller ⌘ hållen medan du drar med vänster knapp | Panorera |
| Rulla hjulet | Zooma vid pekaren (bort från dig zoomar in) |
| Tvåfingersvep på en styrplatta | Vrid vyn; med {{key:Shift}}, panorera. Nypning zoomar. Ställs in med **Rullning** i [PartCraft-inställningar](topic:settings) |

Med **Vridning av vyn: Mittknapp** i [PartCraft-inställningar](topic:settings) vrider mittknappen vyn, {{key:Shift}} med mittknappen eller högerknappen panorerar, och vänsterknappen väljer bara.
| Klick | Välj en yta (den markeras hel), en kant eller ett plan |
| {{key:Shift}}+klick på en kant eller yta | Samla flera kanter eller ytor |
| Klicka i tomt utrymme | Rensa valet |

## Medan du väljer kanter eller ytor för en rundning, fas eller skal


| Tangent eller mus | Åtgärd |
|---|---|
| Klicka på en kant eller yta | Lägg till den, eller ta bort den om den redan är med |
| {{key:Esc}} eller {{key:Enter}} | Avsluta valet (samma som {{ui:Klar}}) |
| {{key:F}} | Anpassa |
| Piltangenter, med vyn i fokus | Vrid; med {{key:Shift}}, panorera |

## På ritningsbladet

| Tangent | Åtgärd |
|---|---|
| {{key:F}} | Anpassa bladet |
| {{key:Plus}} / {{key:Minus}} | Zooma (med bladet i fokus) |
| {{key:Shift+Left}} och de andra pilarna | Panorera (med bladet i fokus) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Flytta den valda GD&T-symbolen 1 mm |
| {{key:Delete}} eller {{key:Backspace}} | Ta bort den valda symbolen |
| {{key:Esc}} | Sluta placera en symbol; annars avmarkera; annars tillbaka till modellen |

| Mus | Åtgärd |
|---|---|
| Klicka på en vy, med Referens, Ram, Ytfinish eller Detalj valt | Placera den där (snäpper till närmaste linje) |
| Klicka på en symbol | Markera den |
| Dra en symbol | Flytta den (hänvisningen stannar vid sin punkt) |
| Rulla hjulet | Zooma vid pekaren |
| Dra med höger eller mittknapp | Panorera |

## I en skiss

| Tangent | Åtgärd |
|---|---|
| {{key:L}} | Linje |
| {{key:R}} | Rektangel |
| {{key:C}} | Cirkel |
| {{key:A}} | Båge (centrum, start, slut) |
| {{key:P}} | Punkt |
| {{key:N}} | Mittlinje |
| {{key:F}} | Avrunda ett hörn |
| {{key:D}} | Måttsättning |
| {{key:B}} | Spline (anpassningspunkter) |
| {{key:T}} | Trimma |
| {{key:E}} | Förläng |
| {{key:O}} | Förskjut ({{key:B}} medan du förskjuter: båda sidor) |
| {{key:M}} | Spegla |
| {{key:S}} | Markera |
| {{key:Q}} | Växla de markerade kurvorna till konstruktion och tillbaka |
| {{key:Enter}} | Avsluta en linjekedja eller en spline |
| {{key:Delete}} eller {{key:Backspace}} | Ta bort markeringen |
| {{key:Mod+A}} | Markera allt i skissen |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Kopiera, klipp ut, klistra in geometri (inklistringen följer pekaren) |
| {{key:Mod+Shift+V}} | Klistra in vid samma koordinater |
| {{key:Mod+D}} | Duplicera markeringen och placera den med ett klick |
| {{key:Esc}} | Ett steg bakåt: avbryt sifferrutan eller en inklistring, avsluta linjekedjan, tillbaka till Markera, rensa markeringen, stäng sedan skissen |

| Mus | Åtgärd |
|---|---|
| Klick | Placera punkter med ett ritverktyg; välj med Markera |
| {{key:Shift}}+klick | Lägg till i eller ta bort från markeringen ({{key:Ctrl}}+klick på Windows och Linux, ⌘+klick på en Mac, gör likadant) |
| Dra i tomt utrymme (Markera) | Fönster: markerar allt som ligger helt inne |
| Dra en punkt, linje eller cirkelkant (Markera) | Flytta den; relationerna håller |
| Dra ett måttals siffra (Markera) | Flytta texten |
| Dubbelklicka på ett mått | Ändra dess värde |
| Dubbelklicka eller högerklicka medan du ritar linjer | Avsluta kedjan |
| Dra med höger eller mittknapp | Panorera |
| Rulla hjulet | Zooma vid pekaren |

### I sifferrutan

| Tangent | Åtgärd |
|---|---|
| {{key:Enter}} | Tillämpa värdet |
| {{key:Esc}} | Stäng utan att ändra |

Att klicka bredvid tillämpar också värdet.

## I historiklistan

| Tangent | Åtgärd |
|---|---|
| {{key:Tab}} | Gå till listan |
| {{key:Up}} / {{key:Down}} | Flytta mellan rader |
| {{key:Enter}} eller {{key:Space}} | Markera raden |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Flytta den valda funktionen upp eller ner, där historiken tillåter det |
| {{key:F2}} | Ändra funktionens huvudtal på dess rad; {{key:Enter}} sätter det, {{key:Esc}} behåller det gamla |

| Mus | Åtgärd |
|---|---|
| Klick | Markera ett plan eller en funktion |
| Dubbelklicka på en skiss | Öppna den |
| Dubbelklicka på en funktions tal | Ändra det på raden |

## I en sammanställning

| Tangent | Åtgärd |
|---|---|
| {{key:J}} | Starta ett led: klicka sedan på en plan yta på var och en av två delar |
| {{key:F}} | Anpassa |
| {{key:Esc}} | Avbryt ledet du startade, eller avmarkera |
| {{key:Delete}} | Ta bort vald del eller valt led |
| {{key:Backspace}} | Ta bort vald del eller valt led |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Ångra och gör om i sammanställningens egen lista |
| {{key:Mod+D}} | Duplicera vald del (samma del, bredvid de andra) |
| {{key:Mod+C}}, sedan {{key:Mod+V}} eller {{key:Mod+Shift+V}} | Kopiera en del, klistra in den bredvid de andra eller på samma plats |

Mus i vyn: som i 3D-vyn ovan. Klicka på en del för att markera den. Dubbelklicka på en del i listan för att redigera den.

## I Skript-arbetsytan

| Tangent | Åtgärd |
|---|---|
| {{key:F5}} | Kör skriptet (i redigeraren, panelen eller vyn) |
| {{key:Mod+Enter}} | Kör de markerade raderna, eller raden där markören står |
| {{key:Tab}} / {{key:Shift+Tab}} | Indrag / utdrag av de markerade raderna. För att lämna redigeraren med tangentbordet, tryck {{key:Esc}} och sedan {{key:Tab}} |
| {{key:Mod+/}} | Kommentera ut de markerade raderna, eller ta tillbaka dem |
| {{key:Mod+F}} / {{key:Mod+H}} | Sök / sök och ersätt i skriptet; {{key:Enter}} eller {{key:F3}} nästa träff, {{key:Shift+Enter}} eller {{key:Shift+F3}} föregående, {{key:Esc}} stänger |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Vik ihop / veckla ut blocket där markören står (en funktion, if, for, while … end) |
| {{key:Mod+Space}} | Visa förslag för namnet du skriver (det öppnas även efter två bokstäver); {{key:Up}} / {{key:Down}} väljer, {{key:Enter}} eller {{key:Tab}} tar ett, {{key:Esc}} stänger |
| {{key:Enter}} på raden under konsolen | Kör den enda satsen; {{key:Up}} och {{key:Down}} hämtar tidigare |
| {{key:F}} | Anpassa vyn till det skripten visar |

Se [Skriv och kör skript](topic:craftscript).

## Genvägar som webbläsaren kan ta

- {{key:Mod+Y}} i Safari kan öppna historiken: använd {{key:Mod+Shift+Z}} för att göra om.
- {{key:Mod+D}} är webbläsarens bokmärkestangent: PartCraft tar den medan appen har fokus, och lämnar den ifred när du skriver i en ruta.
- {{key:F11}} och {{key:Mod+Plus}} / {{key:Mod+Minus}} är webbläsarens helskärm och sidzoom, inte PartCraft:s. Använd {{key:Ctrl+Shift+F}} för helskärm och hjulet för modellen.
- Funktionstangenter på många bärbara datorer och Mac:ar kräver Fn-tangenten: tryck Fn+{{key:F1}} för hjälp, eller använd knappen {{ui:Hjälp}}.

Gester för pekskärm och styrplatta: [Styrplatta, touch och små skärmar](topic:trackpad-and-touch).

## Var flytta finns

Flytta finns i gruppen Funktioner under menyn {{ui:Mer}} som {{ui:Flytta kropp}}, i rutan {{ui:Flytta}} där du skriver ΔX, ΔY och ΔZ, och som pilarna {{ui:Dra för att flytta}} på delen.
