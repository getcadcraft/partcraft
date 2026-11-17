---
title: Fra et andet parametrisk modelleringsprogram
summary: Hvordan vanerne i parametriske delmodelleringsprogrammer til computeren svarer til PartCraft, og de forskelle, der forvirrer erfarne brugere den første time.
keywords: skift, migrer, velkendt, feature manager, konstruktionstræ, smart mål, tilføjende ekstrudering, skærende ekstrudering, hul-guide, sammenføjninger, interferensregistrering, rullebjælke, egenskabshåndtering, mus, forskelle
from: fbacaee1
---

Hvis du designer dele i SolidWorks, vil de fleste af PartCraft's ideer være velkendte: skitser på planerne Front, Top og Right, relationer og smarte mål, en featurehistorik med en rullebjælke og samlinger placeret med sammenføjninger. Måden, du når dem på, er forskellig visse steder, og denne første build gør mindre. Denne side kortlægger dine vaner og lister overraskelserne.

## Vaner, kortlagt

| Du er vant til | I PartCraft |
|---|---|
| Konstruktionstræet til venstre | Historikken til venstre: planer, derefter features, med skitser indrykket under den feature, der bruger dem |
| Front-, Top- og Right-planerne | De samme tre, gennem origo. Front er XY-planet, Top er XZ, Right er YZ; Y peger opad |
| Skitse på et plan eller en flade, derefter bekræftelseshjørnet for at afslutte | {{ui:Skitse}} ({{key:S}}) på et valgt plan eller en flad flade; {{ui:Afslut}} eller {{key:Esc}}, indtil den lukkes |
| Smart mål | {{ui:Mål}} ({{key:D}}). Klik på et eller to elementer, og derefter hvor tallet skal stå. Hvor du placerer det, vælges vandret, lodret eller justeret |
| Tilføj relationer i egenskabspanelet | Vælg elementer, og vælg derefter relationsknapperne i højre panel (Sammenfaldende, Vandret, Parallel, Tangent, Lig med og så videre) |
| Automatiske relationer under skitsering | Fastgøring tilføjer sammenfaldende, punkt-på-kurve, vandrette og lodrette relationer |
| Blå / sort / rød skitsefarve | Den samme ide: blå underdefineret, sort fuldt defineret, rød overdefineret. Chippen viser de resterende frihedsgrader |
| Midterlinje til drejninger | {{ui:Midterlinje}} ({{key:N}}); {{ui:Drej}} bruger den første midterlinje, medmindre du vælger en anden akse |
| Skitseafrunding | {{ui:Afrund}} ({{key:F}}) i en skitse: klik på hjørnet, og skriv radius |
| Skift for konstruktionsgeometri | {{ui:Konstruktion}} ({{key:Q}}) |
| Ekstruderet tilføjelse | {{ui:Ekstruder}}: Blind, Midtplan, Op til flade / næste / hjørnepunkt, Forskydning fra flade, anden retning, konisk, én kontur (Vælg områder) |
| Ekstruderet skæring | {{ui:Klip}}: starter som **Gennem alt**; skift til Blind for en lomme |
| Drejet tilføjelse / skæring | {{ui:Drej}} / {{ui:Mere}} › {{ui:Drejet skæring}} |
| Referenceplan / akse / punkt | {{ui:Mere}} › {{ui:Plan}}, {{ui:Akse}}, {{ui:Punkt}} (se [Referenceplaner, akser og punkter](topic:reference-geometry)) |
| Sweep- / loft-tilføjelse eller skæring, udtræksvinkel | {{ui:Mere}} › {{ui:Udtræksvinkel}} på plane flader (se [Sweep, loft og udtræksvinkel](topic:sweep-loft-draft)). {{ui:Sweep}} og {{ui:Loft}} er ikke lavet endnu i denne version (de kræver en præcis kerne) |
| Hul-guide | {{ui:Hul}} ved hvert løst skitsepunkt: enkelt, forsænkning, undersænkning (90° / 82°) eller gevindskåret ISO-metrisk M2–M24, gennem eller blind |
| Lineært / cirkulært mønster, spejl | {{ui:Lineær}}, {{ui:Cirkulær}}, {{ui:Spejl}} (features eller hele legemet) |
| Afrunding og affasning på kanter | {{ui:Afrund}} / {{ui:Affasning}}: klik på en kant, {{key:Shift}}+klik for flere, og derefter knappen. Én radius; lige, to-afstands- eller afstand-vinkel-affasninger. I denne version kun rette kanter mellem to plane flader, og runder der mødes i et hjørne er skåret i gering. Afrund eller skrå buede kanter i skitsen ({{ui:Afrund}} i en skitse, {{key:F}}) |
| Skal | {{ui:Skal}}: klik på de plane flader, der skal åbnes, og derefter knappen. Én vægtykkelse |
| Åbn en STEP-fil | {{ui:Åbn}}: læses som trekanter, et massivt legeme at bygge på ([Åbn en STEP-fil](topic:import-step)) |
| Redigér feature, derefter OK | Klik på featuren; ændr tal til højre; den bygges om, mens du skriver. Ingen OK, ingen Annuller: brug {{key:Mod+Z}} |
| Redigér skitse | Dobbeltklik på skitsen i historikken |
| Genopbyg | Automatisk efter hver ændring. Der er ingen genopbygningstast |
| Undertryk / ophæv undertrykkelse | {{ui:Undertryk}} / {{ui:Ophæv undertrykkelse}} i højre panel |
| Træk rullebjælken | {{ui:Rul tilbage hertil}} på en feature; klik på "Rullebjælke · rul frem" for at vende tilbage |
| Træk en feature i træet for at ændre rækkefølge | {{ui:Flyt op}} / {{ui:Flyt ned}} eller {{key:Alt+Up}} / {{key:Alt+Down}}; afvist med årsagen, når det ville bryde en afhængighed |
| Redigér mål ved at dobbeltklikke på modellen | Vælg featuren: dens skitses mål vises i højre panel |
| Sammenføjninger: sammenfaldende, koncentrisk, afstand, vinkel | {{ui:Led}} ({{key:J}}): vælg en flad flade på hver del; leddet lægger dem flade mod flade. **Centrér på** en akse virker som koncentrisk; **Forskydning** som afstand; **Vinkel** som vinkel |
| Fast komponent | Den første del er forankret; {{ui:Gør den til den forankrede del}} ændrer det |
| Indsæt komponent | {{ui:Tilføj kopi}} eller {{ui:Duplikér}} (endnu en kopi) eller {{ui:Indsæt}} (fra en delfil) |
| Redigér del i samlingen | {{ui:Rediger del}}, derefter {{ui:Tilbage}} |
| Interferensregistrering | {{ui:Kollision}} |
| At flytte en komponent for at se bevægelsen | Træk vinkel- eller forskydningsskyderen på et roterende eller skydende led; {{ui:Kontrollér bevægelsen for kollisioner}} gennemløber det. En del uden led: **Flyt med hånden** (pile at trække i, eller skrevne værdier) |
| Mål / inspicér | {{ui:Visninger}}, derefter {{ui:Mål}} ({{key:M}}): afstande, vinkler, radier, arealer; {{ui:Masseegenskaber}} |
| Sprængt visning, stykliste | I en samling uden valg: **Sprængte visninger** og **Stykliste** i højre panel |
| Masseegenskaber | Feltet **Del**: volumen, overfladeareal, størrelse, af det facetterede legeme (lidt lavt på runde dele). Ingen masse: der er endnu ingen materialer |
| Gem, Gem som STEP | {{ui:Gem}} downloader en `.partcraft.json`; {{ui:Eksportér}} har STL, 3MF, præcis STEP (AP242 eller AP214), facetteret STEP, DXF og en PDF-tegning |
| Lav en tegning fra delen | {{ui:Tegning}}: et automatisk A3-ark med tre visninger, isometrisk, ét snit, ét detalje, datum, feature-kontrolrammer og overfladesymboler. Kun samlede mål angives |
| Midterknap-træk for at dreje | **Venstretræk** drejer her. Midter- eller højretræk panorerer. Hjulet zoomer ved markøren |
| Visningsretning, Normal til | {{ui:Visninger}}-menuen; {{ui:Vinkelret på}} for en valgt flade, et plan eller en skitse |
| Zoom til vis alt (F) | {{key:F}}, eller {{ui:Tilpas}} (i en skitse er {{key:F}} afrundingsværktøjet) |
| Højreklik-menuer | Ingen. Højretræk panorerer; i en skitse afslutter højreklik en linjekæde |

:::tip
Hvis dine hænder kender SolidWorks, så vælg menustilen {{ui:Featuretræ}} i {{ui:Indstillinger}} › {{ui:PartCraft}} › {{ui:Menuer, taster og mus}}: et bånd med fanerne Features, Skitse, Overflader, Evaluér, Tegning, Samling og Visning; midterknappen kredser, {{key:Shift}} og midterknappen panorerer, og venstreknappen vælger kun. Se [Menuer, taster og mus](topic:menus-keys-and-mouse).
:::

## Forskelle, der får folk til at snuble

**Hele skitsen er profilen.** Ekstrudering og drejning bruger hver lukket sløjfe i skitsen. Du kan ikke vælge ét område eller én kontur af en skitse til en feature. Brug én skitse pr. feature.

**Hvilken skitse en feature tager.** En feature bruger den skitse, du lige har lukket, eller den, der er valgt i historikken. Når intet er valgt, tager den den nyeste skitse, som ingen feature bruger endnu. Får du den forkerte, så vælg den rigtige skitse og vælg featuren igen.

**Ændringer træder i kraft, mens du skriver.** Der er ingen featuredialog med OK og Annuller. Hvert tal bygger straks om, og {{key:Mod+Z}} er vejen tilbage. Fortrydelseslisten dækker skitseredigeringer, features og indstillinger lige meget.

**Overdefinering må aldrig stå stille.** Der findes ingen styrede (referencemål). Et mål, som de øvrige relationer allerede fastlægger, meldes som overdefineret ("is already implied. Delete it."). Et modstridende mål lader geometrien være urørt og bliver rødt. Slet ét, eller fortryd.

**Sweep og loft er ikke lavet endnu; afrundinger, affasninger, skaller og udtræksvinkler har begrænsninger.** Denne version af PartCraft bygger hver del med en mesh-kerne; statuslinjens chip siger altid "Mesh kernel". Afrundinger og affasninger virker på rette kanter mellem to plane flader, og hvor runder mødes i et hjørne, er de skåret i gering i stedet for blandet sammen. Skaller kan åbnes, og udtræksvinkler kan kun hælde plane flader. Features, der kræver en præcis kerne, kan stadig klikkes, men siger "ikke lavet endnu", når de vælges. Se [Mesh-kernen](topic:solid-kernels) og [Hvad der ikke er lavet endnu](topic:not-built-yet).

**To knapper med navnet Afrund.** I en skitse afrunder {{ui:Afrund}} ({{key:F}}) et skitsehjørne. På delen afrunder {{ui:Afrund}} i Features-gruppen massive kanter (rette kanter mellem plane flader i denne version). Der er ingen sweep eller loft i denne version: se [Hvad der ikke er lavet endnu](topic:not-built-yet).

**Huller kræver løse punkter.** {{ui:Hul}} borer i punkter lavet med punktværktøjet. Cirklers centrum og linjeender tæller ikke.

**Gennem alt er kun til skæringer.** En tilføjelse kræver en dybde. Der findes endnu ingen slutbetingelser som "up to vertex / surface / next".

**Legemet er facetteret.** Mesh-kernen bygger runde flader af plane facetter, så visningen, volumenerne, STL- og 3MF-eksporterne er alle lavet af dem: **Kurver** i delens panel gør dem finere. Den præcise STEP-eksport er ikke sådan: den skriver runde flader på deres sande overflader.

**Kun millimeter.** Der findes endnu ingen indstilling for tommer. Gang tommeværdier med 25.4, når du skriver dem.

**Y er op.** Front-planet vender mod dig, og Top kigger ned på delen, som du forventer, men verdens op-akse er Y. STL-, 3MF- og præcise STEP-eksporter drejes, så Z peger op; den facetterede STEP beholder Y opad.

**Sammenføjninger er flader, ikke geometripar.** Et led starter altid fra to plane flader lagt flade mod flade. For en tap i et hul vælger du den flade flade omkring hullet og tappens skulder, og sætter derefter **Centrér på** til hullets akse og tappens drejningsakse. Dele, som led ikke når, bliver, hvor de blev indsat; du kan ikke trække dem. Led i en sløjfe løses ikke.

**Gemning er en download.** Der er ingen fil, du bliver ved med at overskrive. Hver gemning er en ny fil i din downloadmappe. Navngiv delen først, og gem dine filer i en projektmappe.

**Ingen genvejsmenuer, ingen kommandofaner.** Alt findes på værktøjslinjen og i højre panel, og værktøjslinjen skifter med det, du laver: skitseværktøjerne vises kun i en skitse, og samlingsværktøjerne kun i en samling.

**Taster er enkeltbogstaver i en skitse.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} og {{key:S}} vælger værktøjer uden modifikator. Se [Taster og mus](topic:keyboard).
