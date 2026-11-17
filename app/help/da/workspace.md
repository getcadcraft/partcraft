---
title: PartCraft-skærmen
summary: En rundtur i alle bjælker og paneler: værktøjslinjen og hvordan den ændrer sig, historikken, deldataene, 3D-visningen, egenskabspanelet og statuslinjen.
keywords: skærm, layout, værktøjslinje, historik, featuretræ, egenskaber, panel, statuslinje, grænseflade, ui, rundtur, fuld skærm
from: 5b5bb843
---

Skærmen har fem dele: værktøjslinjen øverst, historikken til venstre, 3D-visningen i midten, egenskabspanelet til højre og statuslinjen langs bunden. Over dem alle sidder CadCraft-appbjælken.

## Appbjælken

Den tynde bjælke øverst hører til CadCraft-siden, ikke til PartCraft selv. Den viser appens navn og hvor den kører, en versionsmenu, **Om PartCraft**, skærmtilstandsknappen og Papir / Model-temaskifteren.

- **Papir** er mørke linjer på et lyst ark. **Model** er lyse linjer på en mørk baggrund. Skitsefarver følger temaet.
- {{ui:Indstillinger}} (tandhjulet, eller {{key:Mod+,}}) har fanen {{ui:PartCraft}}: hvilken museknap der drejer visningen, musehjul eller trackpad, og relationer mens du skitserer. Se [PartCraft-indstillinger](topic:settings).
- Skærmtilstandsknappen, eller {{key:Ctrl+Shift+F}}, skifter mellem normal, fuld skærm og fuld skærm med bjælkerne skjult. Med bjælkerne skjult flytter du markøren til øverste kant (eller trykker der) for at hente dem tilbage. {{key:Esc}} vender tilbage til normal. Denne tast er {{key:Ctrl+Shift+F}} også på en Mac, ikke ⌘.

## Værktøjslinjen

Værktøjslinjen er grupperet. Den skifter med det, du laver, så den passer på én række:

| Gruppe | Knapper | Vist |
|---|---|---|
| Fil | {{ui:Ny}}, {{ui:Åbn}}, {{ui:Gem}}, {{ui:Eksportér}} (en menu) | Altid |
| Skitse | {{ui:Skitse}} | Når ingen skitse er åben |
| Skitse | {{ui:Afslut}}, {{ui:Linje}}, {{ui:Rektangel}}, {{ui:Cirkel}}, {{ui:Bue}}, {{ui:Punkt}}, {{ui:Midterlinje}}, {{ui:Afrund}}, {{ui:Mål}}, {{ui:Konstruktion}} | Kun mens en skitse er åben |
| Features | {{ui:Ekstruder}}, {{ui:Klip}}, {{ui:Drej}}, {{ui:Hul}}, {{ui:Lineær}}, {{ui:Cirkulær}}, {{ui:Spejl}}, {{ui:Afrund}}, {{ui:Affas}}, {{ui:Skal}}, {{ui:Mere}} (en menu: Drejet udskæring, Plan, Akse, Punkt, Sweep, Loft, Udtræksvinkel) | På delen, ikke mens en skitse eller tegningen er åben. Afrund og Affas virker på lige kanter mellem to flade flader; Skal og Udtræksvinkel på flade flader. Sweep og Loft er ikke bygget i denne version endnu (de kræver en eksakt kerne); klik på en af dem, og det siges |
| Features | {{ui:Færdig}} | Kun mens du vælger kanter eller flader til en afrunding, affasning, skal eller udtræksvinkel |
| Tegning | {{ui:Tegning}} | På delen (kan bruges, når delen har et legeme) |
| Tegning | {{ui:Datum}}, {{ui:Ramme}}, {{ui:Overfladebehandling}}, {{ui:Detalje}}, {{ui:PDF}}, {{ui:Tilbage}} | Kun på tegningsarket |
| Samling | {{ui:Samling}} | På delen (kan bruges, når delen har et legeme) |
| Samling | {{ui:Tilføj kopi}}, {{ui:Indsæt}}, {{ui:Led}}, {{ui:Kollision}}, {{ui:Rediger del}}, {{ui:Luk}} | Kun i en samling |
| Samling | {{ui:Tilbage}} | Mens du redigerer en del fra en samling |
| Rediger | {{ui:Fortryd}}, {{ui:Gentag}}, {{ui:Kopiér}}, {{ui:Sæt ind}}, {{ui:Mere}} (en menu: Klip, Kopiér, Sæt ind, Sæt ind på samme sted, Duplikér, Slet, Vælg alle, Fravælg alle) | Altid; hvert punkt virker på skitsen, historikken eller samlingen, du er i |
| Visning | {{ui:Tilpas}}, {{ui:Vinkelret på}}, {{ui:Visninger}} (en menu: Mål, Masseegenskaber, Snit, Udtræksvinkel, Zebra, Krumning, {{ui:Basisplaner}}, derefter Isometrisk, Front, Bagside, Top, Bund, Højre, Venstre) | Altid |

Hold markøren over en knap for at se, hvad den gør, og dens tast. En nedtonet knap kan ikke bruges lige nu: for eksempel featureknapperne, mens en skitse er åben, eller {{ui:Led}} før samlingen har to dele.

Menuen {{ui:Mere}} i gruppen Rediger lister hver redigeringshandling med dens tast. Hvad kopiér og sæt ind virker på, følger, hvor du er; se [Kopiér, sæt ind og duplikér](topic:copy-paste). En nedtonet punkts tooltip siger, hvorfor den ikke kan virke nu.

Menuen {{ui:Eksportér}} rummer {{ui:STL, til 3D-print}}, {{ui:3MF, til 3D-print}}, {{ui:STEP AP242 (eksakt massivt legeme)}}, {{ui:STEP AP214 (eksakt massivt legeme)}}, {{ui:STEP (facetteret, netkerne)}}, {{ui:STEP AP214 (facetteret, netkerne)}}, {{ui:DXF af skitsen eller den plane flade}} og {{ui:Tegning (PDF): visninger, snit, detalje, GD&T}}. De eksakte STEP-punkter skriver runde flader på deres rigtige flader; de facetterede skriver dem som flade facetter.

## Historikken (venstre)

Panelet til venstre er delens feature-historik, listen PartCraft bygger om fra top til bund.

- Overskriften er delens navn (»Part1«, indtil du omdøber den).
- **Front-planet**, **Top-planet** og **Højre-planet** kommer først. Klik på et for at vælge det; det fremhæves i visningen.
- Under dem er dine features i den rækkefølge, de blev lavet. En skitse, som en feature bruger, rykkes ind under den feature.
- Et flag i højre ende af en række fortæller dig dens tilstand:

| Flag | Betydning |
|---|---|
| (ingen) | Bygget, og en skitse er fuldt defineret |
| − | En skitse, der er underdefineret (den kan stadig flytte sig) |
| + | En skitse, der er overdefineret |
| ⚠ | Bygget, med en advarsel (hold markøren for at læse den) |
| ⚠ fejl | Featuren fejlede. Hold markøren for at læse hvorfor, eller klik på den |
| ⚠ ikke bygget | Featuren kræver en anden, der fejlede eller er slået fra |
| fra | Undertrykt |

- Hver feature viser sit hovedtal efter sit navn, såsom »25 mm« for en Ekstruder eller »Ø6.6 thru« for et hul. Dobbeltklik på tallet, eller tryk {{key:F2}} på rækken, for at ændre det lige der. Se [Ændr størrelser](topic:change-sizes).
- Klik på en feature for at redigere den til højre. Dobbeltklik på en skitse for at åbne den.
- Når du ruller tilbage, sidder en række **Rulle-tilbage-linje · rul frem** i listen. Features under den er nedtonet og ikke bygget.
- Med en række i fokus flytter {{key:Up}} og {{key:Down}} mellem rækkerne, og {{key:Alt+Up}} / {{key:Alt+Down}} flytter selve featuren, hvor historikken tillader det.

I en samling lister det samme panel i stedet **Dele** (den første er markeret »jordet«) og **Led**.

### Deldata

Under historikken lister boksen **Del** legemets **Volumen**, **Overfladeareal**, **Størrelse (X × Y × Z)**, **Gennemgående huller**, **Legemer**, **Trekanter**, antallet af **Features** og hvor mange der er **Fejler**.

Volumener og arealer er af det facetterede legeme, bygget af mesh-kernen, lidt under den rigtige værdi for runde former (se [Features og deres indstillinger](topic:features#curves-resolution)).

I en samling har boksen overskriften **Samling**: Dele, Instanser, Led, Ikke samlet og Interferens.

## 3D-visningen (midten)

Visningen viser legemet, grundplanerne og enhver skitse, der endnu ikke bruges af en feature.

Grundplanerne tegnes helt op, mens delen er tom. Når den har et legeme, træder de tilbage: tegnet svagt, så de ikke dækker delen, og klik går igennem dem til delen. De kommer tilbage helt op, mens du vælger, hvor der skal skitseres ({{ui:Skitse}} uden valg), og når du vælger en i historikken. {{ui:Visninger}} › {{ui:Basisplaner}} skjuler dem helt; de vises stadig, mens du vælger, hvor der skal skitseres. PartCraft husker det valg.

- Træk for at dreje delen, højreklik eller midterklik-træk for at panorere, og rul hjulet for at zoome ved markøren. Detaljer i [Taster og mus](topic:keyboard).
- Hold markøren over en flade, kant eller et plan for at se den lyse op. Klik for at vælge den. Flader fremhæves hele, og kanter tegnes og vælges hele. {{key:Shift}}+klik samler flere kanter eller flader. De forbliver markeret.
- ViewCube øverst til højre drejer med delen: klik på en flade, kant eller et hjørne for at kigge derfra, træk den for at dreje, og husknappen går tilbage til startvisningen. Se [ViewCube](topic:view-cube).
- En valgt Ekstruder viser en orange pil på sin endeflade, og en Drej en buet pil ved enden af sin omdrejning: træk den for at ændre dybden eller vinklen, eller skriv i feltet ved siden af den. Se [Ændr størrelser](topic:change-sizes#drag-it-in-the-view).
- Når en del er tom, viser en boks med overskriften **Start en del** de første trin.
- Slip en `.partcraft.json`- eller `.partcraft-asm.json`-fil hvor som helst på visningen for at åbne den. En `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- eller `.3dm`-fil, der slippes der, åbnes som et massivt legeme.

### Mens du vælger kanter eller flader

Efter {{ui:Afrund}}, {{ui:Affas}} eller {{ui:Skal}} uden valg (eller {{ui:Vælg kanter}} på en sådan feature) viser delen sig, som den var før den feature. Klik på kanter eller flader for at tilføje eller fjerne dem; deres markeringer viser, hvad der er med. {{ui:Færdig}} eller {{key:Esc}} afslutter. Se [Afrund, affas og hul ud](topic:fillet-chamfer-shell).

### På tegningsarket

{{ui:Tegning}} erstatter 3D-visningen med A3-tegningsarket. Hjulet zoomer, højre- eller midterklik-træk panorerer, {{key:F}} tilpasser. Se [Lav en tegning](topic:drawing-pdf).

### Mens en skitse er åben

Visningen drejer, så den kigger lige ind på skitseplanet, og et 2D-skitselag vises ovenpå. Delen viser kun de features, der er lavet før denne skitse. En stribe øverst til venstre viser skitsens tilstandsbrik (»Fuldt defineret«, »Underdefineret · 3 frihedsgrader« og så videre) og dens navn, såsom "Sketch2 on a face of Extrude1".

## Egenskabspanelet (højre)

Panelet til højre viser det, der er valgt, og dets overskrift navngiver det:

- **Del** (intet valgt): delens **Navn** og indstillingen **Kurver**.
- Et plan: en knap {{ui:Skitsér på det}}.
- En **flade**: hvilken slags den er (Flad flade, Cylinder med sin radius og akse, Kegle, Kugle eller Torus), dens areal, hvilken feature der lavede den, og for en flad flade {{ui:Skitsér på denne flade}}, {{ui:Vinkelret på}}, {{ui:Eksportér flade som DXF}}, {{ui:Ekstruder fra den}}, {{ui:Skær ind i den}} og {{ui:Hul her}} (se [Træk eller skub en hel flade](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- En **kant**: dens slags (lige, en cirkel med sit centrum og radius, eller en kurve), dens længde og de to flader, den ligger imellem (såsom »Extrude1 endeflade og Extrude1 side«), med knapperne {{ui:Afrund}} og {{ui:Affas}}.
- Flere kanter eller flader valgt med {{key:Shift}}: hvor mange, med {{ui:Afrund}} og {{ui:Affas}} for kanter, og {{ui:Ryd}}.
- En feature: dens tal og indstillinger, dimensionerne af dens skitse, derefter {{ui:Undertryk}}, {{ui:Rul tilbage hertil}}, {{ui:Flyt op}}, {{ui:Flyt ned}}, {{ui:Slet}} og dens **Navn**.
- En åben skitse: dens tilstand, de relationer, du kan tilføje til valget, listen over relationer og dimensioner, **Tilføj med koordinater**, og {{ui:Afslut skitse}}, {{ui:Tilpas}} og {{ui:Eksportér som DXF}}.
- På tegningsarket: indstillingerne for snit og detalje, eller det valgte GD&T-symbol.
- I en samling: samlingen, den valgte del eller det valgte led.

Hvert talfelt træder i kraft, når du trykker {{key:Enter}} eller {{key:Tab}}, eller klikker væk. Delen bygges straks om; der er ingen OK-knap. Brug {{key:Mod+Z}} for at gå tilbage.

## Statuslinjen (nederst)

- Til venstre markørens koordinater i skitsen (kun mens en skitse er åben).
- I midten meddelelser: hvad der skal gøres næste gang, og hvorfor noget blev afvist. Læs den, når intet ser ud til at ske.
- Tæt på højre kernebrikken: altid »Mesh-kerne« i denne version. Hold markøren over den for at se, hvad det betyder. Se [Mesh-kernen](topic:solid-kernels).
- Til højre en brik: »Bygger om…« mens delen bygges om, derefter »Bygget om på … ms«, når alt er i orden, eller »1 feature fejler«. I en samling står der »Placeret på … ms«, eller den tæller led-problemer.

Se også [Start en manual i Illustrér](topic:illustrate): arbejdsområdet, der laver samlingsmanualer ud fra dine dele og samlinger.

## På en smal skærm

Op til 760 pixels bred, såsom på en telefon, holder visningen skærmen: værktøjslinjen er én række, der scroller sidelæns, og panelerne åbner som ark fra en bjælke nederst. {{ui:Værktøjer}} skjuler værktøjslinjen, og {{ui:Flyt}} sætter den nederst. Se [Trackpad, touch og små skærme](topic:trackpad-and-touch).
