---
title: Splines, trimma, förskjutning och andra skissverktyg
summary: Rita splines med anpassningspunkter och kontrollpunkter, trimma och förläng kurvor, förskjut en kedja, spegla kring en centrumlinje, lägg till polygoner och skåror, mönstra skissgeometri och projicera modellkanter.
keywords: spline, anpassningspunkt, kontrollpunkt, b-spline, nurbs, kurva, trimma, förlänga, förskjutning, spegla, symmetrisk, polygon, sexkant, skåra, mönster, linjärt mönster, cirkulärt mönster, projicera, projicera kant, inkludera, konvertera objekt
from: 3ecb166a
---

Dessa verktyg fungerar i en öppen skiss. {{ui:Spline}} och {{ui:Trimma}} finns i verktygsfältet. De övriga finns under {{ui:Mer}} i slutet av skissverktygen. Varje verktyg är ett ångra-steg, och {{key:Esc}} avbryter det. För de grundläggande ritverktygen se [Rita din första skiss](topic:sketch-basics).

## Splines

En spline är en jämn kurva. Det finns två slag.

| Verktyg | Tangent | Så ritar du |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Klicka på de punkter som kurvan går igenom. Avsluta med {{key:Enter}}, {{key:Esc}}, ett högerklick eller ett dubbelklick. Klicka på första punkten igen för att stänga splinen |
| {{ui:Kontrollpunktsspline}} (under {{ui:Mer}}) | | Klicka på kontrollpunkterna. Kurvan dras mot dem men tangerar bara den första och sista. Den streckade kontrollpolygonen visas medan du ritar och efteråt |

- **Punkterna är skisspunkter.** Dra i dem, eller ge dem villkor och mått som vilken annan punkt som helst. Splinens första punkt kan fångas till en linjes ände, vilket sammanfogar dem med ett sammanfallande villkor.
- **Tangent i en ände.** Markera en linje, båge eller spline som möter ena änden av en spline, och splinen, och välj sedan {{ui:T Tangent}}. Splinens ändriktning följer då linjen. En tangent bort från splinens ändar nekas: ”En tangent till en spline kräver att linjen, bågen eller splinen möter en av dess ändar.”
- **Ändar.** Utan ett tangentvillkor är en anpassningspunktspline naturlig i ändarna (ingen krökning precis vid änden). Kurvan är kubisk och går genom varje punkt, med avstånden mellan punkterna som styr dess form.
- **Slutna splines** bildar en profil på egen hand. Öppna splines sammanfogar linjer och bågar till en sluten slinga, precis som vilken annan kurva som helst.
- Att ta bort en punkt inuti en spline tar bort den punkten och behåller splinen, så länge den har minst två punkter (tre när den är sluten).

Extrudering och revolvering bygger splinen med nätkärnan av korta räta delar (äkta kurvor kräver en exakt kärna: finns inte ännu i den här versionen). DXF-export skriver en spline som en polylinje som håller sig inom 0,01 mm från kurvan, eftersom DXF R12 saknar splineobjekt.

## Trimma och förläng

| Verktyg | Tangent | Så gör du |
|---|---|---|
| {{ui:Trimma}} | {{key:T}} | Peka på en kurva: den del som skulle tas bort visas i rött, upp till närmaste korsningar. Klicka för att ta bort den. En kurva som inte korsar något tas bort i sin helhet |
| {{ui:Förläng}} (under {{ui:Mer}}) | {{key:E}} | Klicka på en linje eller båge nära änden för att förlänga den. Den växer till nästa kurva den möter. ”Det finns inget för den änden att nå.” visas när inget står i vägen |

Trimma och Förläng fungerar på linjer, bågar, cirklar och splines (Förläng: linjer och bågar).

- En trimmad **cirkel** blir en båge. Dess radie- eller diametermått flyttas till bågen.
- Att trimma mitten av en linje lämnar två linjer som ligger kvar på samma räta linje. Att trimma mitten av en båge lämnar två bågar med samma mittpunkt och ett lika-villkor.
- En trimmad **spline** blir en kontrollpunktsspline som följer den gamla kurvan exakt. Ett tangentvillkor vid en ände som behålls finns kvar.
- Den nya änden placeras på kurvan som skar den (på linjen, bågen eller cirkeln, eller sammanfallande med dess ände). Splines kan inte bära en punkt, så en spline som skär lägger inte till något villkor.

**Villkor som inte längre passar tas bort**, och statusfältet anger hur många. Till exempel tas ett längdmått på en trimmad linje bort, men horisontella eller parallella villkor finns kvar.

## Förskjutning

1. Välj {{ui:Förskjut}} under {{ui:Mer}} eller tryck på {{key:O}}.
2. Klicka på en linje, båge, cirkel eller spline. Hela dess kedja markeras: alla kurvor som är sammanfogade ände mot ände, upp till en punkt där tre eller fler möts. För att förskjuta bara en del av en kedja markerar du de kurvorna först, väljer sedan Förskjut och klickar på en av dem.
3. Flytta pekaren till den sida där kopian ska hamna. En streckad förhandsvisning följer med. Tryck på {{key:B}} för båda sidor.
4. Klicka, skriv avståndet och tryck på {{key:Enter}}.

Linjer och bågar förskjuts exakt. Hörn förlängs eller trimmas tills de möts. Kopian har ett **förskjutningsmått**, och de övriga delarna följer det: dubbelklicka på måttet för att ändra hela kopian. Ett avstånd som är för stort för kedjan nekas, till exempel: ”Det avståndet är för stort för den här kedjan: en sida skulle vändas ut och in.”

En **spline** förskjuts med en ny anpassningspunktspline inom 0,001 mm från den sanna förskjutningen. Den här kopian är låst: den följer inte senare ändringar, och den har inget förskjutningsmått. En spline i en kedja kräver jämna (tangenta) skarvar i sina ändar.

## Spegla

1. Med Markera väljer du vad som ska speglas.
2. Välj {{ui:Spegla}} under {{ui:Mer}} eller tryck på {{key:M}}.
3. Klicka på linjen eller centrumlinjen att spegla kring.

Varje speglad punkt får ett **Symmetriskt** villkor med sin original, så kopian följer när originalet ändras. Punkter som ligger på spegellinjen delas, och speglade cirklar får ett lika-villkor. Om inget var markerat klickar du på objekten som ska speglas, trycker på {{key:Enter}} och klickar sedan på spegellinjen.

## Polygoner och skåror

| Verktyg | Så ritar du |
|---|---|
| {{ui:Polygon}} | Klicka på mittpunkten, sedan på ett hörn, och skriv sedan antalet sidor (3 till 64). Sidorna är lika långa och hörnen sitter på en konstruktionscirkel. Mät cirkeln för att ge polygonen storlek |
| {{ui:Skåra}} | Klicka på mittpunkten för ena änden, sedan på mittpunkten för den andra änden, och klicka sedan för att ange bredden. Två linjer, tangenter till två lika stora halvcirklar |

## Skissmönster

Markera geometrin först och välj sedan:

- {{ui:Linjärt mönster}}: klicka på en startpunkt, sedan var den första kopian hamnar, och skriv sedan antalet kopior (inklusive originalet).
- {{ui:Cirkulärt mönster}}: klicka på mittpunkten, skriv sedan antalet kopior, jämnt fördelade runt ett helt varv.

Kopiorna tar med sig villkoren mellan den markerade geometrin (ett cirkulärt mönster utelämnar horisontella och vertikala villkor). Kopiorna är inte kopplade till originalet: ändrar du en, förblir de andra som de är.

## Projicera delens kanter

1. Välj {{ui:Projicera kant}} under {{ui:Mer}}.
2. Klicka på en rak eller cirkulär kant på delen bakom skissen.

Kanten kopieras exakt till skissplanet och låses (Fixera-villkor). Den följer inte senare ändringar av delen. Tryck på {{key:Q}} för att göra den till konstruktionsgeometri. En cirkel som lutar mot skissplanet skulle projiceras som en ellips, så den nekas. Det gör även kanter i fri form och kanter som pekar rakt ut från skissen. Projicering kräver en exakt kärna: den finns inte ännu i den här versionen.
