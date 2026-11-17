---
title: Öppna en STEP-fil och bygg vidare på den
summary: Ta in en leverantörs eller ett annat CAD-programs STEP-modell i PartCraft som en solidkropp, som en ny del eller tillagd i den aktuella, ange vilket håll som är upp, och lägg till skisser och funktioner på den.
keywords: step, stp, import, öppna step, ap203, ap214, ap242, leverantörsmodell, dum solid, importerad solid, upp-axel, z uppåt, y uppåt, trianglar, facetterad, sammanställning step
from: ca0eca5f
---

PartCraft öppnar STEP-filer (`.step` eller `.stp`, AP203, AP214 och AP242) som **solidkroppar** du kan skissa på, skära i, borra i och kombinera med egna funktioner. Kroppen har ingen egen historik: du kan inte ändra de mått den skapades med, bara lägga till eller skära ur den.

Denna version bygger alla delar med nätkärnan, så en STEP-fil **läses som trianglar**: plana ytor förblir plana, och krökta ytor (cylindrar, koner, sfärer, torus, B-spline-ytor) blir många små plana. Dess volym kommer inom en bråkdel av en procent av den exakta. För att behålla krökta ytor exakt krävs en exakt kärna, som inte finns i denna version.

## Öppna en STEP-fil

1. Välj {{ui:Open}} eller tryck {{key:Mod+O}}, och välj `.step`- eller `.stp`-filen. Eller släpp den på 3D-vyn.
2. PartCraft läser filen och visar vad den hittade, till exempel: "AP214-fil: 1 solid, 10 ytor, läst som trianglar." Nedanför visas antalet trianglar, allt som lämnats ut eller slagits ihop, och om resultatet är slutet.
3. Kontrollera **Upp i filen**. En STEP-fil anger sin egen enhet (millimeter, tum, meter…); PartCraft omvandlar den till millimeter, så **Enheter i filen** visar Millimeter, ”filen anger det”. **Storlek här** visar hur stor den blir.
4. Välj {{ui:Open as a body}} för en tom del, eller {{ui:Add to this part}} / {{ui:New part}} när delen redan har funktioner. Att lägga till frågar vad den ska **Använd den till** att göra: lägga till, skära eller behålla bara överlappet.

En **Imported1**-funktion visas i historiken, och statusfältet säger till exempel "plate.step är en solidkropp: 57995.937 mm³, 6 plana ytor att skissa på."

## En sammanställnings-STEP

En sammanställning kommer in som **en kropp** med varje del där filen placerar den ("3 delar placerade i filen kommer in där de står"). En del som används två gånger kommer in två gånger. Delarnas namn och sammanställningens träd behålls inte.

## Ange vilket håll som är upp

De flesta CAD-program använder Z uppåt; PartCraft använder Y uppåt. Som standard vrider PartCraft filen så att dess Z pekar uppåt här. Om delen kommer in liggande på sidan, markera **Imported1** och sätt **Upp i filen** till **Y uppåt**. **Enheter i filen** och **Använd den till** kan också ändras där; varje ändring är ett steg att ångra.

## Bygg vidare på den

- Klicka på en plan yta på kroppen och välj {{ui:Sketch on this face}}. De plana ytorna på STEP-modellen behåller sin plats när kroppen byggs om.
- Lägg till skärningar, hål, upphöjningar, mönster och speglingar som på vilken del som helst.
- Kontrollera dess storlek i rutan **Del**: volym, ytarea, storlek.

Rundningar, faser och skal kräver den exakta kärnan, som på alla delar i denna version ([Nätkärnan](topic:solid-kernels)).

## Var den sparas

Trianglarna lagras **inuti** `.partcraft.json`-filen, så delfilen är självständig: du behöver inte STEP-filen igen.

## Meddelanden

| Meddelande | Vad det betyder |
|---|---|
| '"part.stp" is not a STEP file (it does not start with ISO-10303-21).' | Filen är inte ren STEP-text. Be avsändaren om en AP203-, AP214- eller AP242-STEP-fil |
| "The STEP file could not be read: its data section is missing or damaged." | Filen är avhuggen eller skadad. Kopiera den igen |
| "The STEP file holds no solid or surface body: there is nothing to bring in." | Filen innehåller bara ritningar, punkter eller data. Be om en solid |
| "That STEP file is too big (over 60 MB) to import here." och läsarens övriga gränser (poster, ytor, trianglar) | Förenkla modellen vid källan, eller skicka delar en i taget |
| "… damaged lines in the file were skipped." | Vissa rader kunde inte läsas; resten kom in. Kontrollera kroppen |
| "… faces could not be made into triangles and were left out." | Dessa ytor lämnar hål, som PartCraft försöker fylla; om kroppen inte sluts läggs den inte till |
| "… faces of a kind that is not read (…) were skipped." | En sällsynt ytyp. Be om modellen med enkla eller B-spline-ytor |
| "It does not close …" | Ytorna bildar inte en sluten solid (en ytmodell, eller ytor som saknas). PartCraft visar öppningarna och lägger inte till något |

## Begränsningar

- Krökta ytor ritas och mäts som plana facetter, som i alla delar denna version bygger. PartCraft behåller filens egna plana ytor, cylindrar, koner, sfärer och torus tillsammans med kroppen, så {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} skriver tillbaka dem som riktiga ytor, hål som hål, tillsammans med de funktioner du lagt till. Ytor som filen anger som splines, svep eller rotationsytor förblir facetter i exporten. En del sparad före 0.9.1 har inga bevarade ytor: öppna STEP-filen igen för att få dem.
- {{ui:Export}} › {{ui:DXF of the sketch or flat face}} med en vald plan yta skriver ett runt hål i filen som en riktig cirkel.
- Färger, namn på kroppar, sammanställningens struktur och PMI (toleranser i filen) läses inte.
- Utöver STEP öppnar PartCraft STL-, OBJ- och 3MF-nät ([Öppna en STL, OBJ eller 3MF](topic:open-meshes)) och `.3dm`-filer ([Öppna en .3dm-modell](topic:open-3dm-files)) som solidkroppar. IGES och andra programs egna filer stöds inte.
- En del med en STEP-solid importerad av en build som hade den exakta kärnan behåller STEP-texten; denna version hoppar över den funktionen ("finns inte ännu"). Öppna STEP-filen igen för att ta in den som trianglar.
