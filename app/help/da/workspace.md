---
title: PartCraft-skærmen
summary: En rundvisning i hver linje og hvert panel: værktøjslinjen og hvordan den ændrer sig, historikken, deldata, 3D-visningen, egenskabspanelet og statuslinjen.
keywords: skærm, layout, værktøjslinje, historik, featuretræ, egenskaber, panel, statuslinje, brugerflade, ui, rundvisning, fuld skærm
from: 7394fc49
---

Skærmen har fem dele: værktøjslinjen øverst, historikken til venstre, 3D-visningen i midten, egenskabspanelet til højre og statuslinjen nederst. Over dem alle sidder CadCraft-applinjen.

## Applinjen

Den tynde linje allerøverst tilhører CadCraft-webstedet, ikke PartCraft selv. Den viser appens navn og hvor den kører, en versionsmenu, **Om PartCraft**, skærmtilstandsknappen og temaskiftet Papir / Model.

- **Papir** er mørke linjer på et lyst ark. **Model** er lyse linjer på en mørk baggrund. Skitsefarverne følger temaet.
- {{ui:Indstillinger}} (tandhjulet, eller {{key:Mod+,}}) har en fane {{ui:PartCraft}}: hvilken museknap der drejer visningen, musehjul eller pegefelt, og relationer under skitsering. Se [PartCraft-indstillinger](topic:settings).
- Skærmtilstandsknappen, eller {{key:Ctrl+Shift+F}}, skifter mellem normal, fuld skærm og fuld skærm med linjerne skjult. Når linjerne er skjult, flytter du markøren til den øverste kant (eller trykker dér) for at hente dem tilbage. {{key:Esc}} vender tilbage til normal. Denne tast er også {{key:Ctrl+Shift+F}} på en Mac, ikke ⌘.

## Værktøjslinjen

Værktøjslinjen er grupperet. Den ændrer sig efter det, du laver, så den passer i én række:

| Gruppe | Knapper | Vist |
|---|---|---|
| Fil | {{ui:Ny}}, {{ui:Åbn}}, {{ui:Gem}}, {{ui:Eksportér}} (en menu) | Altid |
| Skitse | {{ui:Skitse}} | Når ingen skitse er åben |
| Skitse | {{ui:Afslut}}, {{ui:Linje}}, {{ui:Rektangel}}, {{ui:Cirkel}}, {{ui:Bue}}, {{ui:Punkt}}, {{ui:Midterlinje}}, {{ui:Afrund}}, {{ui:Mål}}, {{ui:Konstruktion}} | Kun mens en skitse er åben |
| Features | {{ui:Ekstruder}}, {{ui:Skær}}, {{ui:Drej}}, {{ui:Hul}}, {{ui:Lineær}}, {{ui:Cirkulær}}, {{ui:Spejl}}, {{ui:Afrund}}, {{ui:Affas}}, {{ui:Skal}}, {{ui:Mere}} (en menu: Drejet skær, Plan, Akse, Punkt, Sweep, Loft, Udtræksvinkel) | På delen, ikke mens en skitse eller tegningen er åben. Afrund og Affas virker på rette kanter mellem to plane flader; Skal og Udtræksvinkel på plane flader. Sweep og Loft er ikke lavet endnu i denne version (de kræver en eksakt kerne); et klik på en af dem siger det |
| Features | {{ui:Færdig}} | Kun mens du vælger kanter eller flader til en afrunding, affasning, skal eller udtræksvinkel |
| Tegning | {{ui:Tegning}} | På delen (kan bruges, når delen har et massivt legeme) |
| Tegning | {{ui:Datum}}, {{ui:Ramme}}, {{ui:Overflade}}, {{ui:Detalje}}, {{ui:PDF}}, {{ui:Tilbage}} | Kun på tegningsarket |
| Samling | {{ui:Samling}} | På delen (kan bruges, når delen har et massivt legeme) |
| Samling | {{ui:Tilføj kopi}}, {{ui:Indsæt}}, {{ui:Led}}, {{ui:Kollision}}, {{ui:Rediger del}}, {{ui:Luk}} | Kun i en samling |
| Samling | {{ui:Tilbage}} | Mens du redigerer en del fra en samling |
| Rediger | {{ui:Fortryd}}, {{ui:Gentag}}, {{ui:Kopiér}}, {{ui:Sæt ind}}, {{ui:Mere}} (en menu: Klip, Kopiér, Sæt ind, Sæt ind på samme sted, Duplikér, Slet, Vælg alle, Fravælg alle) | Altid; hvert punkt virker på den skitse, den historik eller den samling, du er i |
| Visning | {{ui:Tilpas}}, {{ui:Vinkelret på}}, {{ui:Visninger}} (en menu: Mål, Masseegenskaber, Snit, Udtræksvinkel, Zebrastriber, Krumning, {{ui:Basisplaner}}, derefter Isometrisk, Front, Bagside, Top, Bund, Højre, Venstre) | Altid |

Hold markøren over en knap for at se, hvad den gør, og dens tast. En nedtonet knap kan ikke bruges lige nu: for eksempel featureknapperne, mens en skitse er åben, eller {{ui:Led}}, før samlingen har to dele.

Menuen {{ui:Mere}} i gruppen Rediger viser hver redigeringshandling med sin tast. Hvad kopiér og sæt ind virker på, følger, hvor du er; se [Kopiér, sæt ind og duplikér](topic:copy-paste). Værktøjstippet på et nedtonet punkt siger, hvorfor det ikke kan bruges nu.

Menuen {{ui:Eksportér}} rummer {{ui:STL, til 3D-print}}, {{ui:3MF, til 3D-print}}, {{ui:STEP AP242 (eksakt massivt legeme)}}, {{ui:STEP AP214 (eksakt massivt legeme)}}, {{ui:STEP (facetteret, netkerne)}}, {{ui:STEP AP214 (facetteret, netkerne)}}, {{ui:DXF af skitsen eller den plane flade}} og {{ui:Tegning (PDF): visninger, snit, detalje, GD&T}}. De to eksakte STEP-punkter er nedtonede: de er ikke lavet endnu i denne version, så brug {{ui:STEP (facetteret, netkerne)}}.

## Historikken (til venstre)

Panelet til venstre er delens featurehistorik, den liste PartCraft genopbygger oppefra og ned.

- Overskriften er delens navn (»Del1«, indtil du omdøber den).
- **Frontplan**, **Topplan** og **Højre plan** kommer først. Klik på et for at vælge det; det fremhæves i visningen.
- Under dem er dine features i den rækkefølge, de blev lavet. En skitse, som en feature bruger, er indrykket under den feature.
- Et flag yderst til højre i en række fortæller dens tilstand:

| Flag | Betydning |
|---|---|
| (ingen) | Bygget, og en skitse er fuldt bestemt |
| − | En skitse, der er underbestemt (den kan stadig flytte sig) |
| + | En skitse, der er overbestemt |
| ⚠ | Bygget, med en advarsel (hold markøren over for at læse den) |
| ⚠ fejl | Featuren mislykkedes. Hold markøren over for at læse hvorfor, eller klik på den |
| ⚠ ikke bygget | Featuren kræver en anden, der mislykkedes eller er slået fra |
| fra | Undertrykt |

- Hver feature viser sit hovedtal efter sit navn, som »25 mm« for en Ekstruder eller »Ø6.6 thru« for et hul. Dobbeltklik på tallet, eller tryk {{key:F2}} på rækken, for at ændre det lige dér. Se [Ændr størrelser](topic:change-sizes).
- Klik på en feature for at redigere den til højre. Dobbeltklik på en skitse for at åbne den.
- Når du ruller tilbage, sidder en række **Tilbagerulningslinje · rul frem** i listen. Features under den er nedtonede og ikke bygget.
- Med en række i fokus flytter {{key:Up}} og {{key:Down}} mellem rækker, og {{key:Alt+Up}} / {{key:Alt+Down}} flytter selve featuren, hvor historikken tillader det.

I en samling viser det samme panel **Dele** (den første er markeret »forankret«) og **Led** i stedet.

### Deldata

Under historikken viser boksen **Del** det massive legemes **Volumen**, **Overfladeareal**, **Størrelse (X × Y × Z)**, **Gennemgående huller**, **Legemer**, **Trekanter**, antallet af **Features** og hvor mange der **Fejler**. Volumener og arealer er af det facetterede massive legeme bygget af netkernen, lidt under den sande værdi for runde former (se [Features og deres valgmuligheder](topic:features#curves-resolution)).

I en samling har boksen overskriften **Samling**: Dele, Forekomster, Led, Ikke forbundet og Interferens.

## 3D-visningen (midten)

Visningen viser det massive legeme, basisplanerne og enhver skitse, der endnu ikke er brugt af en feature.

Basisplanerne tegnes fuldt ud, mens delen er tom. Når den har et massivt legeme, træder de tilbage: tegnet svagt, så de ikke dækker delen, og klik går igennem dem til delen. De kommer tilbage i fuld styrke, mens du vælger, hvor du vil skitsere ({{ui:Skitse}} uden noget valgt), og når du vælger et i historikken. {{ui:Visninger}} › {{ui:Basisplaner}} skjuler dem helt; de vises stadig, mens du vælger, hvor du vil skitsere. PartCraft husker det valg.

- Træk for at dreje delen, højretræk eller midtertræk for at panorere, drej hjulet for at zoome ved markøren. Detaljer i [Taster og mus](topic:keyboard).
- Hold markøren over en flade, kant eller plan for at se den lyse op. Klik for at vælge den. Flader fremhæves hele, og kanter tegnes og vælges hele. {{key:Shift}}+klik samler flere kanter eller flader. De forbliver markeret.
- ViewCube øverst til højre drejer med delen: klik på en flade, kant eller hjørne for at se derfra, træk i den for at dreje, hus-knappen går tilbage til start. Se [ViewCube](topic:view-cube).
- En valgt Ekstruder viser en orange pil på sin endeflade, en Drej en buet pil ved enden af sin drejning: træk i den for at ændre dybden eller vinklen, eller skriv i feltet ved siden af. Se [Ændr størrelser](topic:change-sizes#drag-it-in-the-view).
- Når en del er tom, viser en boks med overskriften **Start en del** de første trin.
- Slip en `.partcraft.json`- eller `.partcraft-asm.json`-fil et vilkårligt sted på visningen for at åbne den. En `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- eller `.3dm`-fil, der slippes dér, åbnes som et massivt legeme.

### Mens du vælger kanter eller flader

Efter {{ui:Afrund}}, {{ui:Affas}} eller {{ui:Skal}} uden noget valgt (eller {{ui:Vælg kanter}} på sådan en feature) vises delen, som den var før den feature. Klik på kanter eller flader for at tilføje eller droppe dem; deres mærker viser, hvad der er med. {{ui:Færdig}} eller {{key:Esc}} afslutter. Se [Afrund, affas og hul ud](topic:fillet-chamfer-shell).

### På tegningsarket

{{ui:Tegning}} erstatter 3D-visningen med A3-tegningsarket. Hjulet zoomer, højre- eller midtertræk panorerer, {{key:F}} tilpasser. Se [Lav en tegning](topic:drawing-pdf).

### Mens en skitse er åben

Visningen drejer, så den ser lige på skitseplanet, og et 2D-skitselag vises ovenpå. Delen viser kun de features, der er lavet før denne skitse. En strimmel øverst til venstre viser skitsens tilstandschip (»Fuldt bestemt«, »Underbestemt · 3 frihedsgrader« og så videre) og dens navn, som »Sketch2 on a face of Extrude1«.

## Egenskabspanelet (til højre)

Panelet til højre viser det, der er valgt, og dets overskrift navngiver det:

- **Del** (intet valgt): delens **Navn** og indstillingen **Kurver**.
- Et plan: en knap {{ui:Skitsér på det}}.
- En **Flade**: hvilken slags den er (Plan flade, Cylinder med sin radius og akse, Kegle, Kugle eller Torus), dens areal, hvilken feature der lavede den, og for en plan flade {{ui:Skitsér på denne flade}}, {{ui:Vinkelret på}}, {{ui:Eksportér flade som DXF}}, {{ui:Ekstruder fra den}}, {{ui:Skær ind i den}} og {{ui:Hul her}} (se [Træk eller skub en hel flade](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- En **Kant**: dens art (ret, en cirkel med sit centrum og sin radius, eller en kurve), dens længde og de to flader, den ligger mellem (som »Extrude1 end face and Extrude1 side«), med knapperne {{ui:Afrund}} og {{ui:Affas}}.
- Flere kanter eller flader valgt med {{key:Shift}}: hvor mange, med {{ui:Afrund}} og {{ui:Affas}} for kanter og {{ui:Ryd}}.
- En feature: dens tal og valgmuligheder, dens skitses mål og derefter {{ui:Undertryk}}, {{ui:Rul tilbage hertil}}, {{ui:Flyt op}}, {{ui:Flyt ned}}, {{ui:Slet}} og dens **Navn**.
- En åben skitse: dens tilstand, de relationer, du kan føje til valget, listen over relationer og mål, **Tilføj via koordinater** og {{ui:Afslut skitse}}, {{ui:Tilpas}} og {{ui:Eksportér som DXF}}.
- På tegningsarket: snit- og detaljeindstillingerne eller det valgte GD&T-symbol.
- I en samling: samlingen, den valgte del eller det valgte led.

Hvert talfelt træder i kraft, når du trykker {{key:Enter}} eller {{key:Tab}} eller klikker væk. Delen genopbygges med det samme; der er ingen OK-knap. Brug {{key:Mod+Z}} for at gå tilbage.

## Statuslinjen (nederst)

- Til venstre markørens koordinater i skitsen (kun mens en skitse er åben).
- I midten meddelelser: hvad du skal gøre næste gang, og hvorfor noget blev afvist. Læs den, når intet ser ud til at ske.
- Nær højre kernechippen: altid »Netkerne« i denne version. Hold markøren over den for at se, hvad det betyder. Se [Netkernen](topic:solid-kernels).
- Yderst til højre en chip: »Genopbygger…«, mens delen genopbygges, derefter »Genopbygget på … ms«, når alt er vel, eller »1 feature fejler«. I en samling står der »Placeret på … ms«, eller den tæller ledproblemer.

Se også [Start en manual i Illustrér](topic:illustrate): arbejdsområdet, der laver samlingsmanualer ud fra dine dele og samlinger.

## På en smal skærm

Op til 760 pixel i bredden, som på en telefon, beholder visningen skærmen: værktøjslinjen er én række, der ruller sidelæns, og panelerne åbnes som ark fra en linje nederst. {{ui:Værktøjer}} skjuler værktøjslinjen, og {{ui:Flyt}} sætter den nederst. Se [Pegefelt, touch og små skærme](topic:trackpad-and-touch).
