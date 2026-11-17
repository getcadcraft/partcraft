---
title: 3D-efterbearbetning: parallell och skallop
summary: Efterbearbeta hela modellens krökta yta med en kul-, rundnäs- eller planfräs, i parallella linjer i valfri vinkel eller i banor med ett bestämt avstånd, så att åsarna mellan dem håller den höjd du begär. Vad banorna garanterar, och vad de inte gör.
keywords: 3d-efterbearbetning, efterbearbetning, parallell, raster, skallop, konstant skallop, udd, kulfräs, rundnäsfräs, yta, tolerans, stegavstånd, lutning, material att lämna, drop cutter, urgröpning
from: e1587d0a
---

Två operationer i Manufacture skär **hela modellens yta** med verktyget hållet lodrätt (tre axlar). De tar inga val: de arbetar på all del av modellen som kan ses uppifrån. Grovbearbeta delen först (adaptiv eller ficka); en efterbearbetningsgång över oskuret material varnar att den skulle skära djupt.

## Parallell

Raka linjer över modellen i den **vinkel** du ställer in, med **stegavstånd** emellan (en bråkdel av verktygets diameter). Varje linje följer ytan: verktygsspetsen är så hög som den måste vara för att ingen del av fräsen ska gå under modellen, och linjen skärs finare där ytan böjer sig. Med **Sicksack** på står verktyget kvar mellan linjerna där det kan göra det säkert (kontrolleras längs rörelsen); annars lyfter det.

- **Tolerans**: hur långt en rak bit av en linje får vara från den verkliga spetshöjden (hälften används som gräns vid mitten av varje bit). Standard 0.01 mm.
- **Endast där ytan är minst … och högst … (°)**: efterbearbeta endast flacka områden eller endast branta. Där ytan ligger utanför intervallet utelämnas linjen, och verktyget lyfter.
- **Material att lämna**: modellen förskjuten med det avståndet (fräsen växt med det: exakt för kul- och rundnästverktyg; ett plant verktyg lämnar minst så mycket).
- **Botten**: inget skärs under denna z.

## Skallop

Banor som håller ett konstant avstånd över ytan från varandra, så att åsen (skallopen) som lämnas mellan två närliggande banor får den **höjd** du begär. Avståndet följer av höjden och kulans radie: s = 2·√(2·R·h − h²), till exempel cirka 0.69 mm mellan banor för en Ø6-kula och en 0.02 mm ås. Ett rundnästverktyg använder sin hörnradie. En plan ändfräs vägras: den har ingen ås att dimensionera.

Banorna startar **från modellens kant, inåt**, eller **från dess topp, nedåt**. De är konturer av avståndet över ytan (inte av höjd), så på en lutning ligger de tätt i plan och på ett plan ligger de långt isär. Avståndet mäts på ett rutnät över ytan och är bra inom cirka 1 %; åshöjden är exakt där ytan är plan eller svagt krökt, och ungefärlig där den kröks snabbt. **Medfräsning** håller den högre sidan av ytan på fräsens högra sida.

## Hur bra banorna är

Vad testerna kontrollerar, med slutna former eller en oberoende brute-force-sökning av fräsens fotavtryck:

- Spetshöjden under verktyget är exakt för kul-, rundnäs- och plana verktyg på ytor, kanter och hörn i nätet, och aldrig över den verkliga höjden. För parallella linjer stannar banan inom toleransen från den, utan någon urgröpning djupare än så.
- Banlängder på ett lutande plan stämmer med den slutna formen; skallopbanor på ett plan ligger det begärda avståndet från varandra, och åsen mellan dem får den begärda höjden.
- Materialsimuleringen visar ingen urgröpning efter en gång och visar de åsar som finns kvar.

Dessa banor är inte hela bilden: de är grundläggande efterbearbetningsgångar, inte allt ett produktionssystem erbjuder.

- Finns inte ännu: vattenlinje (konstant z), penn- och hörnrensning, radiella och spiralformade gångar, projicering av en kurva på ytan, detektering av plana områden, restbearbetning, kontroll av hållare och skaft mot kollision, samt lutning av verktyget.
- Verktygets centrum stannar över modellen: banorna slutar vid modellens kant i stället för att löpa av den, så en lodrät vägg precis vid kanten efterbearbetas inte ända ned till foten.
- Underskärningar syns inte (ytan är det som verktyget möter uppifrån).
- Modellen är nätet från kärnan, så banorna följer nätet (dess kordtolerans är cirka 0.0002 av delens diagonal), inte den exakta ytan.
- Att efterbearbeta en stor modell med fin tolerans ger ett långt program med många korta rörelser. Kontrollera utdata i din maskins egna simulator innan du skär.
