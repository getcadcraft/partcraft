---
title: 3D-finpuss: parallell og skjell
summary: Finpuss hele modellens buede overflate med en kulefres, nesefres eller plan endefrese, i parallelle linjer i en hvilken som helst vinkel eller i passeringer med fast avstand, slik at ryggene mellom dem holder høyden du ber om. Hva banene garanterer, og hva de ikke gjør.
keywords: 3d-finpuss, finpuss, parallell, raster, skjell, konstant skjell, rygg, kulefres, nesefres, overflate, toleranse, stegavstand, skråning, materiale å etterlate, fallfres, gjennomskjæring
from: e1587d0a
---

To operasjoner i Manufacture kutter **hele modellens overflate** med verktøyet holdt vertikalt (tre akser). De tar ingen valg: de virker på hele modellen som kan sees ovenfra. Grovfres delen først (adaptiv eller lomme); en finpussing over ufresset materiale advarer om at den vil kutte dypt.

## Parallell

Rette linjer over modellen i **vinkelen** du setter, **stegavstand** fra hverandre (en brøkdel av verktøydiameteren). Hver linje følger overflaten: verktøyspissen står så høyt som den må, slik at ingen del av fresen går under modellen, og linjen kuttes finere der overflaten bøyer seg. Med **Zig-zag** på blir verktøyet nede mellom linjene der det kan gjøre det trygt (sjekket langs bevegelsen); ellers løfter det seg.

- **Toleranse**: hvor langt en rett del av en linje kan være fra den sanne spissens høyde (halvparten brukes som grense i midten av hver del). Standard 0.01 mm.
- **Bare der overflaten er minst … og høyst … (°)**: finpuss bare grunne områder eller bare bratte. Der overflaten er utenfor området, utelates linjen, og verktøyet løfter seg.
- **Materiale å etterlate**: modellen forskjøvet med den avstanden (fresen utvidet med den: eksakt for kule- og nesefreser; en plan fres etterlater minst så mye).
- **Bunn**: ingenting kuttes under denne z-verdien.

## Skjell

Passeringer som holder en fast avstand over overflaten fra hverandre, slik at ryggen (skjellet) som blir igjen mellom to nabopasseringer har **høyden** du ber om. Avstanden følger av høyden og kulens radius: s = 2·√(2·R·h − h²), for eksempel omtrent 0.69 mm mellom passeringene for en Ø6-kule og en 0.02 mm rygg. Et nesefrest-verktøy bruker hjørneradiusen sin. En plan endefrese avvises: den har ingen rygg å dimensjonere.

Passeringene starter **fra modellens kant og går innover**, eller **fra toppen og går nedover**. De er konturer av avstanden over overflaten (ikke av høyde), så på en skråning ligger de tett i plan, og på en flate ligger de vidt fra hverandre. Avstanden måles på et rutenett over overflaten og er riktig til omtrent 1 %; ryggens høyde er eksakt der overflaten er flat eller svakt buet, og tilnærmet der den bøyer seg raskt. **Medløp** holder den høyere siden av overflaten på fresens høyre side.

## Hvor gode banene er

Hva testene sjekker, med lukkede uttrykk eller et uavhengig brute-force-søk i fresens fotavtrykk:

- Spissens høyde under verktøyet er eksakt for en kule-, nese- og plan fres på flater, kanter og hjørner i nettet, og aldri over den sanne høyden; for parallelle linjer holder banen seg innenfor toleransen fra den, med ingen gjennomskjæring dypere enn det.
- Banelengder på et skråstilt plan stemmer med det lukkede uttrykket; skjellpasseringer på et plan er den avstanden som ble bedt om fra hverandre, og ryggen mellom dem blir den høyden som ble bedt om.
- Materialsimuleringen viser ingen gjennomskjæring etter en passering, og viser ryggene som blir igjen.

Det disse banene ikke er: de er grunnleggende finpussepasseringer, ikke alt et produksjonssystem tilbyr.

- Ikke bygget: vannlinje (konstant z), penn- og hjørnerengjøring, radiale og spiralformede passeringer, projisering av en kurve på overflaten, deteksjon av flate områder, restbearbeiding, kollisjonssjekk for holder og skaft, og enhver vipping av verktøyet.
- Verktøysenteret blir over modellen: banene stopper ved modellens kant i stedet for å gå utenfor, så en loddrett vegg helt ved kanten finpusses ikke helt ned til foten.
- Undersnitt sees ikke (overflaten er det verktøyet møter ovenfra).
- Modellen er nettet fra kjernen, så banene følger nettet (dets akkordtoleranse er omtrent 0.0002 av delens diagonal), ikke den eksakte overflaten.
- Finpussing av en stor modell med fin toleranse gir et langt program med mange korte bevegelser. Sjekk utdataen i maskinens egen simulator før det skjæres.
