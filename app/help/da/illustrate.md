---
title: Start en manual i Illustrér
summary: Illustrér-arbejdsområdet laver manualer ud fra din konstruktion: visninger, eksploderede linjetegninger med positionscirkler og en stykliste, trin-for-trin-instruktioner, animationer og en 3D-fil, en kunde kan åbne uden CAD. En manual er en fil for sig selv.
keywords: illustrér, manual, teknisk illustration, dokumentation, eksploderet visning, stykliste, instruktioner, partcraft-manual
from: e447e0ab
---

**Illustrér** er arbejdsområdet for de dokumenter, folk har brug for omkring en konstruktion: eksploderede visninger med positionscirkler og en stykliste, linjetegninger til manualer, trin-for-trin-instruktioner, animationer og en 3D-fil, en kunde kan åbne uden CAD. Vælg {{ui:Illustrér}} i {{ui:Arbejdsområde}}-skifteren i begyndelsen af værktøjslinjen.

En **manual** er en fil for sig selv (`<name>.partcraft-manual.json`). Den gemmer en kopi af hver dels form, produkttræet og delenes egenskaber samt et link tilbage til, hvor de kommer fra, så du kan arbejde på manualen, mens konstruktionen fortsætter. Når konstruktionen ændrer sig, henter [Opdatér fra konstruktionen](topic:illustrate-update) ændringerne ind.

## Start en

Klik på {{ui:Ny}} i gruppen {{ui:Manual}}, og vælg derefter:

- {{ui:Fra den åbne del}}: delen, der er åben i Design.
- {{ui:Fra den åbne samling}}: vises i stedet, når en samling er åben; dens dele, placeringer, delnumre, materialer og eksploderede visninger følger med.
- {{ui:Fra en samlingsfil…}}: en gemt `.partcraft-asm.json`; PartCraft bygger først delene.
- {{ui:Fra en anden fil…}}: glTF (.glb, .gltf), OBJ, STL eller 3MF. Filens træ og navne bevares, og kopier af én del (den samme form placeret to gange) bliver til én del med et antal. STL- og OBJ-filer angiver ikke deres enhed, så du bliver spurgt. STL-filer læses med Z op; glTF og 3MF angiver selv.

Mens en manual er åben, viser Illustrér manualens egen kopi af delene; delen eller samlingen, der er åben i Design, skjules, indtil du går tilbage til Design.

## Gem og åbn

{{ui:Gem}} i gruppen {{ui:Manual}} (eller {{key:Mod+S}}) gemmer manualen; {{ui:Åbn}} åbner en. Hver ændring i Illustrér er ét trin i manualens egen historik: {{ui:Fortryd}} og {{ui:Gentag}} virker på manualen, mens Illustrér er åben.

## Ikke lavet endnu

- STEP-filer åbnes ikke i {{ui:Fra en anden fil…}} endnu. Åbn STEP-filen i Design i stedet (den kommer ind som et massivt legeme: se [Åbn en STEP-fil](topic:import-step)) og start manualen med {{ui:Fra den åbne del}}, eller gem den som glTF, 3MF, OBJ eller STL.
- ModelCraft og BimCraft kan endnu ikke give en model direkte til Illustrér: gem den som glTF (.glb) og brug {{ui:Fra en anden fil…}}.

Næste: [Visninger og udseende](topic:illustrate-views).
