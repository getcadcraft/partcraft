---
title: Felsökning
summary: Problem du kan stöta på i PartCraft, från att appen inte startar till funktioner som misslyckas, skisser som inte går att lösa, filer som inte går att öppna och leder som beter sig fel, med meddelandet du ser och åtgärden.
keywords: problem, fel, hjälp, fungerar inte, misslyckas, kraschar, tom, webgl, webassembly, kärna, inte byggd, överbestämd, öppen profil, kan inte öppnas, händer inget, fel riktning, långsam
from: 7728542c
---

När något inte fungerar, läs först **statusfältet** längst ner: PartCraft säger där varför det avvisade något eller vad det väntar sig härnäst. En funktion som misslyckas visar också sitt meddelande överst i högerpanelen och när du hovrar över dess rad i historiken.

## Appen startar inte

### "Den här webbläsaren kan inte visa 3D (WebGL är av eller saknas), så PartCraft kan inte köras här."

**Orsak:** webbläsaren har 3D-grafik (WebGL) avstängd, blockerad eller inte stödd av grafikdrivrutinen.

**Åtgärd:**

:::chromium
Öppna `chrome://settings/system` (eller `edge://settings/system` i Edge) och slå på "Använd grafikacceleration när det är tillgängligt", starta sedan om webbläsaren. Om den redan är på, kontrollera `chrome://gpu` för WebGL-status och uppdatera grafikdrivrutinen.
:::

:::firefox
Öppna `about:support` och titta på Grafik, WebGL. Om det är blockerat, uppdatera grafikdrivrutinen. I `about:config` måste `webgl.disabled` vara `false`.
:::

:::safari
WebGL är alltid på i aktuell Safari. Uppdatera macOS (Safari uppdateras med det). Om det fortfarande misslyckas, prova Chrome eller Firefox på samma Mac för att utesluta grafikhårdvaran.
:::

Fjärrskrivbord och vissa virtuella maskiner saknar WebGL. Prova på datorn själv.

### "Solidkärnan kunde inte läsas in: …"

**Orsak:** geometrikärnan (ett WebAssembly-program) kunde inte hämtas eller startas. Oftast bröts anslutningen medan appen laddades, WebAssembly är avstängt av en företagspolicy eller en säkerhetsinställning i webbläsaren, eller webbläsaren är mycket gammal.

**Åtgärd:** ladda om sidan när du är ansluten. Om det fortsätter att misslyckas, prova en annan aktuell webbläsare. I Firefox måste `javascript.options.wasm` i `about:config` vara `true`. Offline laddas appen och dess kärna bara om appfältet visade **Redo för offline** innan anslutningen bröts ({{ui:Spara för offline}} när du är ansluten; se [Arbeta offline](common:offline)).

### Offline-knappen säger "Kunde inte spara" eller "Offline inte tillgänglig"

**Kunde inte spara**: vissa filer hämtades inte. Klicka för att försöka igen när du är ansluten; en långsam eller mätad anslutning kan behöva ett andra försök. **Offline inte tillgänglig**: det här webbläsarfönstret kan inte behålla en offlinekopia (privata fönster och vissa hanterade datorer blockerar det). Använd ett vanligt fönster, eller håll fliken öppen.

### PartCraft är offline men föråldrad

Klicka på **Redo för offline** när du är ansluten och välj {{ui:Spara igen (hämta den senaste versionen)}}.

### "Svep: finns inte ännu. Den behöver en exakt kärna, …"

Hela meddelandet är "<Namn>: finns inte ännu. Den behöver en exakt kärna, som den här versionen av PartCraft inte har. Hjälp › Vad som inte finns ännu beskriver vad du gör i stället." Du ser det när du väljer Svep, Loft, Ribb, en plåtfläns, en ytfunktion, Kombinera, Flytta kropp, Skala kropp eller Banmönster, och för de andra saker som bara en exakt kärna klarar. Det är inget fel på din webbläsare eller din del: den här versionen av PartCraft bygger varje del med nätkärnan. Se [Vad som inte finns ännu](topic:not-built-yet) för vad du gör i stället, och [Nätkärnan](topic:solid-kernels).

### "Läser in solidkärnan…" går aldrig över

Vänta lite på en långsam anslutning: kärnan och 3D-biblioteket hämtas första gången. Ladda sedan om. Om sidan själv visar ett fel, se ovan.

## Inget händer när jag trycker på en tangent

- Tangenter fungerar inte när markören står i en ruta i en panel. Klicka i 3D-vyn eller tryck på {{key:Esc}} efter att du skrivit (eller {{key:Tab}} för att lämna rutan).
- Piltangenterna och {{key:Plus}}/{{key:Minus}} vrider och zoomar vyn först efter att du klickat i vyn.
- En dialogruta är öppen: svara på den först.
- I en skiss är {{key:F}} verktyget Rundning, inte Anpassa. Använd knappen {{ui:Anpassa}}.

## En verktygsknapp är nedtonad

- Funktionsknappar är nedtonade medan en skiss är öppen. Stäng skissen först.
- Skissverktyg fungerar bara inne i en skiss.
- {{ui:Ångra}} och {{ui:Gör om}} är nedtonade när det inte finns något att ångra eller göra om.
- {{ui:Sammanställning}} kräver en del med en solid. {{ui:Led}} kräver två delar i sammanställningen. {{ui:Redigera del}} kräver att en del är markerad.
- {{ui:STEP AP242 (exakt solid)}} och {{ui:STEP AP214 (exakt solid)}} är nedtonade i en sammanställning: exportera varje del. Ett annat program avvisar den exakta filen: prova {{ui:STEP AP214 (exakt solid)}}, sedan {{ui:STEP (fasetterad, nätkärna)}}, och berätta för oss via {{ui:Hjälp}} › {{ui:Rapportera ett problem}}.
- {{ui:Svep}}, {{ui:Loft}} och de andra funktionerna som kräver en exakt kärna är inte nedtonade: de går att klicka på, deras verktygstips slutar med "finns inte ännu (kräver en exakt kärna)", och ett klick på en säger det i statusfältet. Se [Vad som inte finns ännu](topic:not-built-yet).
- {{ui:Ritning}} kräver en del med en solid och är nedtonad medan en skiss är öppen.
- {{ui:Exportera}}-punkterna är nedtonade i en sammanställning: sammanställningar kan inte exporteras än. Stäng den, eller redigera en del, för att exportera.

## Skissproblem

### Skissen låter mig inte lägga till ett villkor

"Inget villkor passar det här urvalet. Markera ett eller två objekt (Shift+klick lägger till)." Villkoret behöver ett annat urval. Se [Skissvillkor och mått](topic:sketch-relations) för vad varje villkor kräver.

### "Överbestämd: … kan inte uppfyllas alla. Ångra, eller ta bort ett av dem."

**Orsak:** det nya villkoret eller måttet strider mot dem som redan finns. Skissen flyttades inte.

**Åtgärd:** {{key:Mod+Z}}, eller ta bort ett av de röda objekten i högerpanelens lista (välj **Ta bort** bredvid det).

### "Överbestämd: … är redan given. Ta bort den."

**Orsak:** villkoret tillför ingenting: andra redan tvingar fram det (till exempel Parallell på två sidor av en rektangel, eller ett mått som redan är fixerat). Det finns inga drivna mått i den här versionen.

**Åtgärd:** ta bort det. Funktionen byggs ändå, med en varning.

### "De objekten kan inte måttsättas tillsammans."

Du klickade till exempel på en punkt och en cirkel. Måttsätt i stället till cirkelns mittpunkt.

### "En rundning behöver ett hörn där exakt två linjer möts." / "Den radien är för stor för de här linjerna."

Klicka exakt på hörnpunkten för två solida linjer. Använd en mindre radie än den kortaste linjen tillåter.

### Geometrin hoppar tillbaka när jag drar i den

Draget skulle bryta ett villkor eller ett mått, så PartCraft flyttar tillbaka den. Bara blå (underbestämd) geometri kan flyttas.

### "Den här skissen kan inte öppnas: Kräver Extrude2, som misslyckas."

Skissen ligger på en yta till en funktion som inte är byggd. Åtgärda den funktionen först, eller avaktivera den, eller gå framåt i historiken.

## Funktionsproblem

| Meddelande | Orsak | Åtgärd |
|---|---|---|
| "Gör en skiss först: välj ett plan, Skiss, rita en sluten profil, Avsluta." | Ingen oanvänd skiss med kurvor, och ingen är markerad | Rita en skiss, eller markera skissen att använda i historiken |
| "Skissen har ingen sluten profil att extrudera." (eller "att revolvera") | Ingen sluten slinga av solida linjer | Stäng luckorna; växla tillbaka konstruktionslinjer med {{key:Q}} |
| "Profilen är öppen: en ände vid (x, y) är inte kopplad till något." | Ett gap vid den punkten | Öppna skissen, dra änden till grannen så att den fastnar |
| "Profilen grenar sig vid (x, y): fler än två ändar möts där." | Tre eller fler linjer möts i en punkt | Ta bort den extra linjen, eller växla den till konstruktion |
| "En sluten slinga behöver minst tre sidor eller en kurva." | Två linjer fram och tillbaka | Rita om slingan |
| "Genom alla är för urtag. Använd ett djup för ett pålägg." | Ett pålägg satt till Genom alla | Sätt Slut till Blind eller Mittplan |
| "Det finns inget att skära på den sidan av skissen. Prova den andra riktningen." | Urtaget pekar bort från materialet | Bocka för Omvänd riktning |
| "Det finns inget att skära än." / "Det finns inget att borra än." | Ingen solid före den här funktionen | Gör ett pålägg först, eller flytta funktionen nedåt |
| "Rita en mittlinje (en konstruktionslinje) i skissen att revolvera runt." | Revolvera utan en axel | Lägg till en mittlinje, eller välj en linje i Axel |
| "Profilen korsar axeln. Håll den på ena sidan av mittlinjen." | Profil på båda sidor om axeln | Rita om halva profilen |
| "Sätt skisspunkter där hålen ska vara (Punktverktyget), gör sedan hålet." | Inga lösa punkter i skissen | Lägg till punkter med {{key:P}} |
| "Försänkningen måste vara bredare än hålet." | Försänkningens ⌀ inte större än Diameter | Gör försänkningen bredare |
| "Försänkningen måste vara grundare än hålet." | Försänkningen är djupare än ett blindhål | Gör den grundare, eller hålet djupare |
| "Välj funktionerna att kopiera." | Ett mönster eller en spegling med inget bockat | Bocka för en funktion under Funktioner att kopiera |
| "Extrude2 har ingen solid att kopiera." | Den kopierade funktionen misslyckades eller är av | Åtgärda den, eller aktivera den |
| "Kräver Sketch3, som misslyckas." | En funktion den beror på är inte byggd | Åtgärda funktionen som namnges |
| "Ytan den sitter på är borta (Extrude1 är inte byggd)." | Skissens yta finns inte längre | Åtgärda den funktionen, eller ta bort skissen och skissa igen |
| "Inget av delen finns kvar efter det här." | Ett urtag tog bort allt material | Kontrollera urtagets storlek och riktning |
| "Den solida kärnan kunde inte bygga det här (…)." eller "Den solida kärnan kunde inte kombinera det här med kroppen." | Kärnan avvisade geometrin | Ångra, eller ändra måtten något; ytor som precis rör varandra kan orsaka det |
| "Svep: finns inte ännu. Den behöver en exakt kärna, som den här versionen av PartCraft inte har." (även Loft, Ribb och de andra) | En funktion gjord i en tidigare version som bara en exakt kärna kan bygga. Den ligger kvar i historiken och sparas tillbaka oförändrad | Avaktivera eller ta bort den; se [Vad som inte finns ännu](topic:not-built-yet) för vad du gör i stället |
| "En 5 mm rundning ryms inte här (…)." / "En 2 mm fasning …" | Storleken är för stor för en yta nära kanten, eller hörnet kan inte blandas | Mindre storlek, eller färre kanter per funktion |
| "Rundning: i den här versionen endast raka kanter mellan två plana ytor (nätkärnan bygger dem). Runda eller fasa krökta kanter i skissen." (även Fasning) | En vald kant är rund, som en hålkant, eller ligger på en krökt yta | {{ui:Välj kanter}} och ta bort den; runda eller fasa det hörnet i skissen i stället |
| "En rundning vars radie ändras längs kanten: finns inte ännu (den kräver en exakt kärna). Ange en radie." | **Variabel radie** är bockad | Avbocka den och ange en radie |
| "Rundning med nätkärnan: där rundade kanter möts skärs de av i vinkel, inte blandas." (⚠, en varning) | Valda kanter möts i ett hörn; rundningarna möts där i ett skarpt veck | Inget att åtgärda: delen är byggd. Runda färre kanter om vecket spelar roll |
| "En kant den rundar är borta: kanten mellan Extrude1 och Cut2." | En tidigare ändring tog bort kanten | {{ui:Välj kanter}}, ta bort den röda kanten, välj den nya |
| "Välj kanterna i vyn, lägg sedan till dem." | Rundningen eller fasningen har inga kanter | {{ui:Välj kanter}} |
| "Välj ytorna att ta bort (öppna), skala sedan." | Skalet har inga öppna ytor | {{ui:Välj ytor}} |
| "Skalet kunde inte göras med den här tjockleken (…)." | Väggen är tjockare än en tunn del av modellen eller en rundningsradie | En tunnare vägg, eller större rundningar |
| "Skal: i den här versionen öppnas bara plana ytor (nätkärnan bygger den)." | En öppen yta är krökt | {{ui:Välj ytor}} och ta bort den; öppna bara plana ytor |
| "Släpp: i den här versionen endast plana ytor (nätkärnan bygger den)." | En släppt yta är en cylinder, kon eller friformsyta | Ta bort den; släpp bara plana ytor |
| "En yta den öppnar är borta (…)." | En tidigare ändring tog bort ytan | {{ui:Välj ytor}} igen |
| "Fillet1 ändrar kroppens kanter eller väggar; den kan inte kopieras. …" | Ett mönster eller en spegling kopierar en rundning, fasning eller ett skal | Avbocka den; gör mönstret av urtagen först, runda sedan |
| "Den sitter på en yta som bara en exakt kärna kan hitta: finns inte ännu i den här versionen." | En skiss på en yta nätkärnan inte hittar, till exempel en gjord i en tidigare version | Skissa på ett basplan eller en plan yta på en extrudering, och placera den med mått |
| "Den använder en yta eller kant på solidet, som bara en exakt kärna kan hitta: finns inte ännu i den här versionen." | Ett referensplan, en axel eller en punkt på en yta eller kant på solidet | Gör den från basplan, skisspunkter eller koordinater i stället |
| "Extrudering upp till en yta, nästa yta eller ett hörn: finns inte ännu (den kräver en exakt kärna)." / "En avsmalning: finns inte ännu (den kräver en exakt kärna)." | Ett slutvillkor eller en avsmalning som bara en exakt kärna bygger | Använd ett Blind- eller Mittplan-djup som du mäter; lämna Avsmalning på 0 |

## Problem med val

- "Den ytan är krökt. Välj en plan yta eller ett plan att skissa på." Skisser behöver en plan yta. Skissa i stället på ett basplan och placera skissen med mått.
- En yta säger "Fast där den valdes": den skapades inte av en skisskant (till exempel en yta på en mönsterkopia), så en skiss på den ligger kvar när delen ändras.
- Kanter är svåra att träffa: zooma in. En kant vinner över ytan bredvid den när pekaren ligger exakt på den.

## Filproblem

| Meddelande | Åtgärd |
|---|---|
| 'PartCraft öppnar sina egna .partcraft.json-filer, exporter från CadCraft-makrot för SolidWorks (.cadcraft-sw.json) och STEP-filer. "bracket.igs" är ingen av dem.' | Bara dessa filer känns igen (och STL-, OBJ- och 3MF-nät samt `.3dm`-filer) |
| '"part.stp" är inte en STEP-fil (den börjar inte med ISO-10303-21).' | Filen är inte STEP-text |
| "Den STEP-filen är för stor (över 60 MB) för att importeras här." | Förenkla den vid källan |
| "Den filen är för stor för att vara en PartCraft-del." på din egen sparade del | En stor STEP-solid importerad i en tidigare version gjorde delfilen större än 50 MB. Använd en tidigare kopia utan den |
| "Den filen är för stor för att vara en PartCraft-del." | Filen är över 50 MB; den är ingen PartCraft-fil |
| "Detta är inte en PartCraft-fil (den är inte JSON)." / "Detta är inte en PartCraft-fil." | Filen är skadad eller tillhör ett annat program |
| "Den här filen sparades av en nyare PartCraft (filversion …); den här läser version …" | Öppna den i den nyare PartCraft |
| "Extrude2: djupet är fel." (eller ett annat värde) | Filen redigerades för hand eller är skadad. Använd en tidigare kopia |
| Infoga i en sammanställning säger "Part1.partcraft.json har ingen solid att infoga." | Delfilen har ingen solid. Öppna den, bygg en solid, spara och infoga igen |

**Min sparade fil är inte där jag väntade mig.** Att spara är en nedladdning: titta i webbläsarens nedladdningsmapp, eller öppna nedladdningslistan från webbläsarens verktygsfält. Se [Var dina filer hamnar](common:your-files).

**Jag öppnade en del men sammanställningen finns kvar på skärmen.** Delen laddades bakom sammanställningen. Välj {{ui:Stäng}} för att stänga sammanställningen och se delen. Stäng sammanställningar innan du öppnar delfiler.

## Ritningsproblem

| Meddelande | Åtgärd |
|---|---|
| "Bygg en solid först, gör sedan dess ritning." | Bygg delen först |
| "Ingen plats på bladet för: detalj. Gör detaljen mindre eller ta bort en vy." | Mindre **Detaljradie** eller **Detaljskala**, eller ta bort snittet |
| "En detalj tas från framvyn, ovanvyn, högervyn eller snittvyn." | Klicka på en av de vyerna |
| "Klicka på en av vyerna." | Klicket var på tomt papper |
| "Positionen behöver minst en datumreferens." och andra rammeddelanden | Ange de datum panelen ber om, eller välj en annan egenskap |
| "Ritningsvyerna kunde inte skapas: …" | Ångra den senaste ändringen. Om det fortsätter: spara, ladda om och öppna delen igen |

## Sammanställningsproblem

| Meddelande | Åtgärd |
|---|---|
| "Bygg en solid först, lägg sedan in den i en sammanställning." | Delen har ännu ingen solid |
| "Infoga en andra del först (Lägg till kopia, Infoga, eller Redigera › Duplicera)." | Ett led behöver två delar |
| "Välj en yta på en annan del." | Båda ytorna i ett led måste vara på olika delar |
| "Den ytan är krökt. Välj en plan yta …" | Led börjar från plana ytor. Använd sedan **Centrera på** för ett hål eller en revolveringsaxel |
| "Bracket2 är inte kopplad till den förankrade delen, så den står kvar där den placerades." | Lägg till ett led från den till en del som är placerad |
| "Revolute3 sluter en slinga som inte kan slutas: den är 2.000 mm fel. Kontrollera ytorna, förskjutningarna och gränserna för slingans leder." | Delarna kan inte alla mötas: kontrollera längderna, ytorna varje led använder, förskjutningar (delar staplade yta mot yta måste stämma i djup) och gränser; eller ta bort ett led ur slingan |
| "Ytan det här ledet använder är borta från Bracket." / "Axeln det här ledet använder är borta från Bracket." | Delen redigerades. Ta bort ledet och gör det igen |
| "Axeln går längs ytan, så den kan inte ange ledets centrum." | Välj en axel som korsar ytan, eller "Ytans egna origo" |
| "En sammanställning behåller minst en del. Stäng den i stället." | Använd {{ui:Stäng}} |

**Delarna är sammanfogade men på fel plats.** Ange **Centrera på** för båda sidor av ledet till de hål eller revolveringsaxlar som ska linjera, justera sedan **Vinkel (°)** och **Förskjutning (mm)**.

## Det är långsamt

- Ställ in **Kurvor** till Normal eller Grov medan du modellerar; växla till Fin före export.
- Stora mönsterantal (hundratals kopior) tar tid att bygga om vid varje ändring. Avaktivera mönstret medan du arbetar med andra funktioner.
- Krockkontrollen och rörelsekontrollen jämför varje par av delar; stora sammanställningar tar längre tid.
- Stäng andra tunga flikar. PartCraft körs på din egen dators processor och grafik.

## Fortfarande fast

Spara filen först ({{key:Mod+S}}), ladda sedan om sidan och öppna den igen. Om en funktion fortfarande misslyckas: markera den, läs dess meddelande och prova {{key:Mod+Z}} tillbaka till senaste fungerande läge.
