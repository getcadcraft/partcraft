---
title: Nest flate deler på plater
summary: Legg flate deler på plater eller en rull med så lite svinn som PartCraft finner, aldri nærmere enn avstanden du oppgir, og lagre oppsettet som DXF for laser, plasma, vannskjærer eller fres.
keywords: nesting, nest, plate, rull, laser, plasma, vannskjærer, fres, skjæring, materialutnyttelse, skrap, svinn, avstand, snittbredde, kornretning, valseretning, dxf, flatmønster, omriss
from: 8dcce1a6
---

**Nesting** plasserer mange flate deler på en plate slik at så lite materiale som mulig blir igjen. PartCraft legger delene én for én, hver der den gjør brukt lengde av platen kortest, prøver flere rekkefølger og vendinger på noen sekunder, og beholder den beste. Deler kan ligge i hverandres hull og i hulrommet på en L eller en U.

## Åpne den

- {{ui:Eksporter}} › {{ui:Nest flate deler på plater…}} åpner den med delens flatmønster, eller — i en sammenstilling — med flatmønsteret til hver plateverksdel, så mange som det er kopier.
- På en plateverksdel: {{ui:Legg flatt}} og deretter {{ui:Nest på plater…}} under flatmønsteret.
- {{ui:Legg til omriss fra en DXF…}} legger til hver lukket kontur i en DXF-fil som en del: en tegning fra CadCraft lagret som DXF, eller en fil fra skjærerens egen programvare. En kontur inne i en annen er et hull i den. Linjer og buer som går sammen ende mot ende regnes som én kontur. Filer i tommer, centimeter eller meter endres til millimeter.

:::note
Å legge plateverk flatt krever en eksakt geometrikjerne (se [Plateverk](topic:sheet-metal)). Konturer fra en DXF-fil fungerer alltid.
:::

## Sett det opp

For hver del oppgi **hvor mange** du trenger og dens **kornretning**: {{ui:Hvilken som helst retning}}, {{ui:Langs platen (som tegnet)}} for børstet eller valset plate som må gå én vei, eller {{ui:På tvers av platen}}.

Under **Ark**:

- **Lager**: {{ui:Plater}} med en gitt lengde og bredde (og hvor mange du har; 0 = så mange som trengs), eller {{ui:En rull}} med en gitt bredde, så lang som nødvendig.
- **Kantmargin** holdes fri langs hver kant av platen (for klemmer, eller en ujevn kant).
- **Avstand mellom deler** er den minste avstanden mellom to skjærelinjer: minst skjærebredden til skjæreren, pluss det materialet trenger.
- **Vendinger**: vinklene en del kan dreies til, som standard hver 90°. Færre vendinger går raskere; flere kan utnytte platen bedre.
- **Deler kan snus** gjør at en del kan legges opp ned. La det være av for plateverk: et flatmønster som legges snudd, bøyer den andre veien.

Trykk {{ui:Nest}}. Forhåndsvisningen viser hver plate; fakta forteller hvor mange plater (eller hvor mye av rullen) som ble brukt, og hvor mye av materialet delene tar opp. Alt som ikke fikk plass, blir nevnt med navn.

## Lagre den

{{ui:Lagre DXF}} skriver oppsettet som en DXF (R12, millimeter), én plate under den neste: platenes konturer på laget SHEET, delene på PARTS (buer beholdes som buer), og hver del sitt navn på LABELS.

:::tip
Å blande flere deler gir vanligvis bedre nesting enn mange kopier av én: små deler fyller hullene mellom de store.
:::

## Skjær platene (G-kode)

**Export › Nested sheets to G-code** leser en nestet DXF (denne, eller platene fra Cabinets-tillegget i CadCraft) og lager ett program per plate gjennom postprosessoren du velger: hull og utsparinger først, deretter konturene, der hvert snitt går verktøyets radius utenfor delen, gjennom platen og 1 mm mer, med tapper hvis du ber om det. Postlisten er de innebygde postprosessorene pluss din egen Manufacture-studie. Kontroller hvert program i en simulator før du kjører det: boring og lommer lages ikke.

## Hva du bør sjekke

PartCraft kontrollerer hvert oppsett en gang til på de sanne formene (ikke rutenettet den søkte med): ingen to deler nærmere enn avstanden, ingenting i margene. Den planlegger ikke skjæringen: innstikk, skjærerekkefølge, å skjære delte kanter én gang og å beholde restplaten er skjærerens egen programvares jobb. Kontroller DXF-filen der før du skjærer.
