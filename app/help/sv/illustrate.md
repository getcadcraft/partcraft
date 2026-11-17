---
title: Starta en manual i Illustrera
summary: Arbetsytan Illustrera gör manualer av din konstruktion: vyer, sprängd linjeteckning med ballonger och dellista, steg-för-steg-instruktioner, animationer och en 3D-fil som en kund kan öppna utan CAD. En manual är en egen fil.
keywords: illustrera, manual, teknisk illustration, dokumentation, sprängvy, dellista, instruktioner, partcraft-manual
from: e447e0ab
---

**Illustrera** är arbetsytan för dokumenten som behövs runt en konstruktion: sprängvyer med ballonger och dellista, linjeteckningsillustrationer för manualer, steg-för-steg-instruktioner, animationer och en 3D-fil som en kund kan öppna utan CAD. Välj {{ui:Illustrate}} i {{ui:Workspace}}-växlaren i början av verktygsfältet.

En **manual** är en egen fil (`<name>.partcraft-manual.json`). Den håller en kopia av varje delens form, produktträdet och delarnas egenskaper, samt en länk tillbaka till var de kommer ifrån, så att du kan arbeta med manualen medan konstruktionen fortsätter. När konstruktionen ändras hämtar [Uppdatera från konstruktionen](topic:illustrate-update) in ändringarna.

## Starta en

Klicka på {{ui:New}} i gruppen {{ui:Manual}}, och välj sedan:

- {{ui:From the open part}}: delen som är öppen i Design.
- {{ui:From the open assembly}}: visas i stället när en sammanställning är öppen; dess delar, deras placeringar, artikelnummer, material och sprängvyer följer med.
- {{ui:From an assembly file…}}: en sparad `.partcraft-asm.json`; PartCraft bygger dess delar först.
- {{ui:From another file…}}: glTF (.glb, .gltf), OBJ, STL eller 3MF. Filens träd och namn behålls, och kopior av en del (samma form placerad två gånger) blir en del med ett antal. STL- och OBJ-filer anger inte sin enhet, så du får frågan. STL-filer läses med Z uppåt; glTF och 3MF anger sitt eget.

När en manual är öppen visar Illustrera manualens egna kopia av delarna; delen eller sammanställningen som är öppen i Design döljs tills du går tillbaka till Design.

## Spara och öppna

{{ui:Save}} i gruppen {{ui:Manual}} (eller {{key:Mod+S}}) sparar manualen; {{ui:Open}} öppnar en. Varje ändring i Illustrera är ett steg i manualens egna historik: {{ui:Undo}} och {{ui:Redo}} verkar på manualen medan Illustrera är öppen.

## Finns inte ännu

- STEP-filer öppnas inte i {{ui:From another file…}} ännu. Öppna STEP-filen i Design i stället (den kommer in som en solidkropp: se [Öppna en STEP-fil](topic:import-step)) och starta manualen med {{ui:From the open part}}, eller spara den som glTF, 3MF, OBJ eller STL.
- ModelCraft och BimCraft kan ännu inte skicka en modell direkt till Illustrera: spara den som glTF (.glb) och använd {{ui:From another file…}}.

Nästa: [Vyer och utseende](topic:illustrate-views).
