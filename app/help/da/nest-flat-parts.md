---
title: Nest plane dele på plader
summary: Læg plane dele på plader eller en rulle med så lidt spild som PartCraft kan finde, aldrig tættere end den afstand du angiver, og gem layoutet som DXF til laser, plasma, vandskærer eller router.
keywords: nesting, nest, plade, rulle, laser, plasma, vandskærer, router, skæring, udbytte, materialeforbrug, skrot, spild, afstand, snitbredde, trådretning, dxf, fladmønster, konturer
from: 8dcce1a6
---

**Nesting** placerer mange plane dele på en plade, så der bliver så lidt materiale tilovers som muligt. PartCraft lægger delene én ad gangen, hver dér hvor den holder den brugte længde af pladen kortest, prøver flere rækkefølger og drejninger, er færdig på få sekunder og beholder det bedste. Dele kan ligge i hinandens huller og i hulrummet i et L eller et U.

## Åbn den

- {{ui:Eksportér}} › {{ui:Nest plane dele på plader…}} åbner den med delens fladmønster, eller — i en samling — med fladmønsteret for hver pladeemnedel, én for hver kopi.
- På en pladeemnedel bruges {{ui:Fold ud}} og derefter {{ui:Nest på plader…}} under fladmønsteret.
- {{ui:Tilføj konturer fra en DXF…}} tilføjer hver lukket kontur i en DXF-fil som en del: en tegning fra CadCraft gemt som DXF, eller en fil fra din skæremaskines eget program. En kontur inde i en anden er et hul i den. Linjer og buer, der går ende til ende, tæller som én kontur. Filer i tommer, centimeter eller meter omregnes til millimeter.

:::note
At lægge pladeemne fladt kræver en eksakt geometrikerne (se [Pladeemne](topic:sheet-metal)). Konturer fra en DXF-fil virker altid.
:::

## Opsæt den

Angiv for hver del **hvor mange** du har brug for, og dens **trådretning**: {{ui:Vilkårlig retning}}, {{ui:Langs pladen (som tegnet)}} til børstet eller valset plade, der skal løbe én vej, eller {{ui:På tværs af pladen}}.

Under **Plader**:

- **Lager**: {{ui:Plader}} med en given længde og bredde (og hvor mange du har; 0 = så mange som nødvendigt), eller {{ui:En rulle}} med en given bredde, så lang som nødvendigt.
- **Kantmargen** holdes fri langs hver kant af pladen (til klemmer eller en ujævn kant).
- **Afstand mellem dele** er den mindste afstand mellem to skærelinjer: mindst din skæremaskines snitbredde plus det, materialet kræver.
- **Drejninger**: de vinkler en del må drejes til, hver 90° som standard. Færre drejninger kører hurtigere; flere kan udnytte pladen bedre.
- **Dele må vendes** lader en del blive lagt på hovedet. Lad den være fra for pladeemne: et fladmønster lagt vendt bøjer den anden vej.

Tryk på {{ui:Nest}}. Forhåndsvisningen viser hver plade; fakta siger, hvor mange plader (eller hvor meget af rullen) der er brugt, og hvor meget af materialet delene fylder. Alt, der ikke passede, bliver nævnt med navn.

## Gem den

{{ui:Gem DXF}} skriver layoutet som en DXF (R12, millimeter), én plade under den næste: pladernes konturer på laget SHEET, delene på PARTS (buer bevares som buer), og hver dels navn på LABELS.

:::tip
At blande flere forskellige dele giver som regel en bedre placering end mange kopier af én: små dele fylder hullerne mellem de store.
:::

## Skær pladerne (G-kode)

**Eksportér › Nestede plader til G-kode** læser en nestet DXF (denne, eller pladerne fra Cabinets-add-on'et i CadCraft) og laver ét program pr. plade gennem den post du vælger: huller og udskæringer først, derefter konturerne, hver skåret værktøjets radius uden for delen, gennem pladen og 1 mm længere, med fastholdelsesbroer hvis du beder om dem. Postlisten er de indbyggede poster plus dem i din egen Manufacture-studie. Tjek hvert program i en simulator, før du kører det: boring og lommer laves ikke.

## Hvad du skal kontrollere

PartCraft kontrollerer hvert layout igen på de rigtige former (ikke på gitteret, det søgte med): ingen to dele tættere end afstanden, og intet i margenerne. Det planlægger ikke skæringen: indkørsler, skærerækkefølgen, at skære fælles kanter én gang og at beholde den resterende plade er din skæremaskines softwares opgave. Kontrollér DXF-filen dér, før du skærer.
