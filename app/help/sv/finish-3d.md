---
title: 3D-finbearbetning: parallell och kammusslor
summary: Finbearbeta hela modellens krökta yta med en kul-, hörnradie- eller planfräs, i parallella linjer i valfri vinkel eller i banor med ett valt avstånd så att krönen mellan dem får den höjd du anger. Vad banorna garanterar och vad de inte gör.
keywords: 3D-finbearbetning, finbearbetning, parallell, raster, kammusslor, konstant kammussla, krön, kulfräs, hörnradiefräs, yta, tolerans, stegavstånd, lutning, material att lämna, fallande verktyg, överskärning
from: 942d2341
---

Två operationer i Tillverkning skär **hela modellens yta** med verktyget hållet lodrätt (tre axlar). De tar inga val: de arbetar på all modell som kan ses uppifrån. Grovbearbeta delen först (adaptiv eller ficka); en finbearbetningsgång över oskuret material varnar för att den skulle skära djupt.

## Parallell

Raka linjer över modellen i den **vinkel** du anger, med **stegavstånd** emellan (en bråkdel av verktygets diameter). Varje linje följer ytan: verktygsspetsen ligger så högt som den måste för att ingen del av fräsen ska gå under modellen, och linjen skärs finare där ytan böjer sig. Med **Sicksack** på står verktyget kvar i materialet mellan linjerna där det är säkert att göra så (kontrolleras längs förflyttningen); annars lyfter det.

- **Tolerans**: hur långt en rak del av en linje får ligga från den verkliga spetshöjden (hälften används som gräns i mitten av varje del). Standard 0.01 mm.
- **Endast där ytan är minst … och högst … (°)**: finbearbeta bara flacka områden eller bara branta. Där ytan ligger utanför intervallet utelämnas linjen och verktyget lyfter.
- **Material att lämna**: modellen förskjuten med det avståndet (fräsen växt med det: exakt för kul- och hörnradieverktyg; ett plant verktyg lämnar minst så mycket).
- **Botten**: inget skärs under denna z.

## Kammusslor

Gångar som har ett konstant avstånd över ytan från varandra, så att krönet (kammusslan) som blir kvar mellan två närliggande gångar får den **höjd** du anger. Avståndet följer av höjden och kulans radie: s = 2·√(2·R·h − h²), till exempel ungefär 0.69 mm mellan gångar för en Ø6-kulfräs och ett krön på 0.02 mm. En hörnradiefräs använder sin hörnradie. En plan fräs avvisas: den har inget krön att dimensionera.

Gångarna börjar vid **modellens kant, inåt** eller vid **dess överkant, nedåt**. De är konturer av avståndet över ytan (inte av höjden), så de ligger tätt i plan i en lutning och glest på en platt yta. Avståndet mäts på ett rutnät över ytan och är riktigt inom ca 1 %; krönhöjden är exakt där ytan är plan eller svagt krökt och approximativ där den kröks snabbt. **Medfräsning** håller ytans högre sida på fräsens högra sida.

## Hur bra banorna är

Vad testerna kontrollerar, med slutna formler eller en oberoende brute force-sökning av fräsens fotavtryck:

- Spetshöjden under verktyget är exakt för kul-, hörnradie- och plana verktyg på ytor, kanter och hörn i nätet, och aldrig över den verkliga höjden; för parallella linjer ligger banan inom toleransen från den, utan någon överskärning djupare än så.
- Banlängder på ett lutande plan stämmer med den slutna formeln; kammusslegångar på ett plan ligger på det begärda avståndet och krönet mellan dem blir den begärda höjden.
- Materialsimuleringen visar ingen överskärning efter en gång och visar de krön som blir kvar.

Vad dessa banor inte är: de är grundläggande finbearbetningsgångar, inte allt ett produktionssystem erbjuder.

- Finns inte ännu: vattenlinje-finbearbetning (konstant z), penn- och hörnrensning, radiella och spiralformade gångar, projicering av en kurva på ytan, detektering av plana områden, kontroll av hållare och skaft mot kollision. Grov- och restbearbetning är egna operationer ([3D-grovbearbetning och restbearbetning](topic:rough-3d)); ett verktyg som lutar är [5-axlig finbearbetning](topic:multi-axis#5-axis-finishing).
- Verktygscentrum stannar över modellen: banorna slutar vid modellens kant i stället för att gå över den, så en lodrät vägg precis vid kanten blir inte finbearbetad ända ner till foten.
- Underskärningar ses inte (ytan är det verktyget möter uppifrån).
- Modellen är nätet från kärnan, så banorna följer nätet (dess kordtolerans är ungefär 0.0002 av delens diagonal), inte den exakta ytan.
- Finbearbetning av en stor modell med fin tolerans ger ett långt program med många korta förflyttningar. Kontrollera utdata i din maskins egna simulator före skärning.
