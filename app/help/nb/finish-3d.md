---
title: 3D-finish: parallell og kamskjell
summary: Finish hele modellens buede overflate med en kulefres, radiusfres eller flat fres, i parallelle linjer i valgt vinkel eller i gang med fast avstand, slik at kammene mellom dem får høyden du ber om. Hva banene garanterer, og hva de ikke gjør.
keywords: 3d-finish, finish, parallell, raster, kamskjell, konstant kamskjell, kam, kulefres, radiusfres, overflate, toleranse, stegavstand, helning, materiale å la stå igjen, fallfres, overskjæring

from: 942d2341
---

To operasjoner i Produksjon freser **hele modellens overflate** med verktøyet holdt vertikalt (tre akser). De krever ingen valg: de arbeider på all modellen som kan sees ovenfra. Grovbearbeid delen først (adaptiv eller lomme); en finishgang over ufreset råemne gir en advarsel om at den vil skjære dypt.

## Parallell

Rette linjer over modellen i **vinkelen** du velger, med **stegavstand** mellom seg (en brøkdel av verktøydiameteren). Hver linje følger overflaten: verktøyspissen står så høyt som den må, slik at ingen del av fresen går under modellen, og linjen freses finere der overflaten bøyer seg. Med **Zig-zag** på holder verktøyet seg nede mellom linjene der det kan gjøres trygt (sjekket langs bevegelsen); ellers løftes det.

- **Toleranse**: hvor langt en rett del av en linje kan avvike fra den virkelige spisshøyden (halvparten brukes som grense midt i hver del). Standard 0.01 mm.
- **Bare der overflaten er minst … og høyst … (°)**: finish bare flate eller bare bratte områder. Der overflaten ligger utenfor området, utelates linjen og verktøyet løftes.
- **Materiale å la stå igjen**: modellen forskjøvet med den avstanden (fresen blir større med den: nøyaktig for kule- og radiusverktøy; et flatt verktøy later minst så mye stå).
- **Bunn**: ingenting skjæres under denne z-verdien.

## Kamskjell

Gangene har en konstant avstand over overflaten fra hverandre, slik at kammen (kamskjellen) som blir igjen mellom to nabogang får den **høyden** du ber om. Avstanden følger av høyden og kulens radius: s = 2·√(2·R·h − h²). For eksempel blir det om lag 0.69 mm mellom gangene for en Ø6-kule og en kamhøyde på 0.02 mm. Et radiusverktøy bruker hjørneradiusen sin. En flat fres avvises: den har ingen kam å dimensjonere.

Gangene starter fra **modellens kant og går innover**, eller fra **toppen og går nedover**. De er konturer av avstanden over overflaten (ikke av høyde), så på en helning ligger de tett i plan, og på en flate ligger de langt fra hverandre. Avstanden måles på et rutenett over overflaten og er riktig til om lag 1 %. Kamhøyden er nøyaktig der overflaten er flat eller svakt buet, og tilnærmet der den bøyer seg raskt. **Medfresing** holder den høyere siden av overflaten på fresens høyre side.

## Hvor gode banene er

Dette sjekker testene, med lukkede formler eller et uavhengig brute-force-søk i fresens fotavtrykk:

- Spisshøyden under verktøyet er nøyaktig for kule-, radius- og flatverktøy på flater, kanter og hjørner i nettet, og er aldri høyere enn den virkelige høyden. For parallelle linjer holder banen seg innenfor toleransen, med ingen overskjæring dypere enn den.
- Banelengder på et skråplan stemmer med den lukkede formelen. Kamgangene på et plan ligger den ønskede avstanden fra hverandre, og kammen mellom dem får den ønskede høyden.
- Simuleringen av råemnet viser ingen overskjæring etter en gang, og viser kammene som blir igjen.

Det disse banene ikke er: de er grunnleggende finishgang, ikke alt et produksjonssystem tilbyr.

- Ikke bygget: vannlinje-finish (konstant z), penn- og hjørneopprydding, radiale og spiralformede gang, projisering av en kurve på overflaten, deteksjon av flate områder, kontroll av kollisjon mot holder og skaft. Grov- og restbearbeiding er egne operasjoner ([3D-grovbearbeiding og restbearbeiding](topic:rough-3d)). Et verktøy som heller, er [5-akse-finish](topic:multi-axis#5-axis-finishing).
- Verktøysenteret holder seg over modellen: banene stopper ved modellens kant i stedet for å gå utenfor den. En vertikal vegg helt ved kanten blir derfor ikke finishet helt ned til foten.
- Undersnitt sees ikke (overflaten er det verktøyet møter ovenfra).
- Modellen er nettet fra kjernen, så banene følger nettet (kordetoleransen er om lag 0.0002 av delens diagonal), ikke den eksakte overflaten.
- Finish av en stor modell med fin toleranse gir et langt program med mange korte bevegelser. Sjekk utdataene i maskinens egen simulator før skjæring.
