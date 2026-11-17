---
title: Åbn en STEP-fil og byg videre på den
summary: Hent en leverandørs eller et andet CAD-programs STEP-model ind i PartCraft som et massivt legeme, som en ny del eller tilføjet den aktuelle, angiv hvilken vej der er op, og tilføj skitser og features til den.
keywords: step, stp, import, åbn step, ap203, ap214, ap242, leverandørmodel, dumt massivt legeme, importeret massivt legeme, op-akse, z op, y op, trekanter, facetteret, samlings-step
from: ca0eca5f
---

PartCraft åbner STEP-filer (`.step` eller `.stp`, AP203, AP214 og AP242) som **massive legemer**, du kan skitsere på, skære i, bore i og kombinere med dine egne features. Legemet har ingen historik af sit eget: du kan ikke ændre de mål, det blev lavet med, kun tilføje til det eller skære fra det.

Denne version bygger alle dele med mesh-kernen, så en STEP-fil **læses som trekanter**: plane flader forbliver plane, og buede flader (cylindre, kegler, kugler, tori, B-spline-flader) bliver til mange små plane. Dens volumen ligger inden for en brøkdel af en procent af den eksakte. At bevare buede flader eksakt kræver en eksakt kernel, som ikke er med i denne version.

## Åbn en STEP-fil

1. Vælg {{ui:Åbn}} eller tryk {{key:Mod+O}}, og vælg `.step`- eller `.stp`-filen. Eller slip den på 3D-visningen.
2. PartCraft læser filen og viser, hvad den fandt, for eksempel: »AP214-fil: 1 massivt legeme, 10 flader, læst som trekanter.« Nedenfor er antallet af trekanter, alt det den måtte udelade eller sammenføje, og om resultatet er lukket.
3. Tjek **Op i filen**. En STEP-fil angiver selv sin enhed (millimeter, tommer, meter …); PartCraft omregner den til millimeter, så **Enheder i filen** viser Millimeter, »filen siger det«. **Størrelse her** viser, hvor stort det bliver.
4. Vælg {{ui:Åbn som legeme}} for en tom del, eller {{ui:Føj til denne del}} / {{ui:Ny del}}, når delen allerede har features. Ved tilføjelse spørger den, hvad **Brug den til** skal gøre: tilføje, skære fra eller beholde kun overlapningen.

En **Imported1**-feature vises i historikken, og statuslinjen siger for eksempel: »plate.step er et massivt legeme: 57995.937 mm³, 6 plane flader at skitsere på.«

## En samlings-STEP

En samling kommer ind som **ét legeme** med hver del, hvor filen placerer den (»3 dele placeret i filen kommer ind, hvor de står«). En del brugt to gange kommer ind to gange. Delenes navne og samlingens træ bevares ikke.

## Angiv hvilken vej der er op

De fleste CAD-programmer bruger Z op; PartCraft bruger Y op. Som standard drejer PartCraft filen, så dens Z peger opad her. Hvis delen ankommer liggende på siden, vælg **Imported1** og sæt **Op i filen** til **Y op**. **Enheder i filen** og **Brug den til** kan også ændres der; hver ændring er ét fortrydelsestrin.

## Byg videre på den

- Klik på en plan flade på legemet og vælg {{ui:Skitsér på denne flade}}. STEP-modellens plane flader beholder deres plads, når legemet genopbygges.
- Tilføj skæringer, huller, udspring, mønstre og spejlinger som på en hvilken som helst del.
- Tjek dens størrelse i **Del**-boksen: volumen, overfladeareal, størrelse.

Afrundinger, affasninger og skaller kræver den eksakte kernel, som på enhver del i denne version ([Mesh-kernen](topic:solid-kernels)).

## Hvor det gemmes

Trekanterne gemmes **inde i** `.partcraft.json`-filen, så delfilen er selvstændig: du har ikke brug for STEP-filen igen.

## Meddelelser

| Meddelelse | Hvad det betyder |
|---|---|
| »part.stp« er ikke en STEP-fil (den begynder ikke med ISO-10303-21). | Filen er ikke ren STEP-tekst. Bed afsenderen om en AP203-, AP214- eller AP242-STEP-fil |
| »STEP-filen kunne ikke læses: dens datadel mangler eller er beskadiget.« | Filen er afskåret eller beskadiget. Kopiér den igen |
| »STEP-filen indeholder intet massivt legeme eller nogen overflade: der er intet at hente ind.« | Filen indeholder kun tegninger, punkter eller data. Bed om et massivt legeme |
| »STEP-filen er for stor (over 60 MB) til at importere her.« og læserens andre grænser (poster, flader, trekanter) | Forenkl modellen ved kilden, eller send dele én ad gangen |
| »… beskadigede linjer i filen blev sprunget over.« | Nogle linjer kunne ikke læses; resten kom ind. Tjek legemet |
| »… flader kunne ikke gøres til trekanter og blev udeladt.« | Disse flader efterlader huller, som PartCraft forsøger at lukke; hvis legemet ikke lukker, tilføjes det ikke |
| »… flader af en type, der ikke læses (…), blev sprunget over.« | En sjælden fladetype. Bed om modellen med almindelige eller B-spline-flader |
| »Den lukker ikke …« | Fladerne danner ikke et lukket legeme (en overflademodel, eller flader er udeladt). PartCraft viser åbningerne og tilføjer intet |

## Begrænsninger

- Buede flader tegnes og måles som plane facetter, som i enhver del denne version bygger. PartCraft beholder filens egne plane flader, cylindre, kegler, kugler og tori sammen med legemet, så {{ui:Eksportér}} › {{ui:STEP AP242 (eksakt massivt legeme)}} skriver dem tilbage som ægte flader, huller som huller, sammen med de features, du tilføjer. Flader, som filen angiver som splines, sweeps eller rotationsflader, forbliver facetter i eksporten. En del gemt før 0.9.1 har ingen bevarede flader: åbn STEP-filen igen for at få dem.
- {{ui:Eksportér}} › {{ui:DXF af skitsen eller den plane flade}} med en plan flade valgt skriver et rundt hul i filen som en ægte cirkel.
- Farver, navne på legemer, samlingsstruktur og PMI (tolerancer i filen) læses ikke.
- Ud over STEP åbner PartCraft STL-, OBJ- og 3MF-net ([Åbn en STL, OBJ eller 3MF](topic:open-meshes)) og `.3dm`-filer ([Åbn en .3dm-model](topic:open-3dm-files)) som massive legemer. IGES og andre programmers egne filer understøttes ikke.
- En del med et STEP-massivt legeme importeret af en build med den eksakte kernel beholder STEP-teksten; denne version springer den feature over (»ikke lavet endnu«). Åbn STEP-filen igen for at hente den ind som trekanter.
