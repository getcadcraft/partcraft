---
title: Fejlfinding
summary: Problemer, du kan støde på i PartCraft, fra at appen ikke starter til features, der fejler, skitser, der ikke vil løse sig, filer, der ikke kan åbnes, og samlinger, der opfører sig forkert, med den meddelelse, du ser, og rettelsen.
keywords: problem, fejl, hjælp, virker ikke, fejler, fejlende, nedbrud, tom, webgl, webassembly, kerne, ikke lavet, overbestemt, åben profil, kan ikke åbne, sker ingenting, forkert retning, langsom
from: 7728542c
---

Når noget ikke virker, skal du først læse **statuslinjen** nederst: PartCraft siger der, hvorfor den afviste noget, eller hvad den venter på næste gang. En fejlende feature viser også sin meddelelse øverst i sit højre panel og når du holder musen over dens række i historikken.

## Appen starter ikke

### » Denne browser kan ikke vise 3D (WebGL er slået fra eller mangler), så PartCraft kan ikke køre her.«

**Årsag:** browseren har 3D-grafik (WebGL) slået fra, blokeret eller ikke understøttet af grafikdriveren.

**Løsning:**

:::chromium
Åbn `chrome://settings/system` (eller `edge://settings/system` i Edge) og slå "Brug grafikacceleration når det er tilgængeligt" til, og genstart derefter browseren. Hvis den allerede er til, så tjek `chrome://gpu` for WebGL-status, og opdatér din grafikdriver.
:::

:::firefox
Åbn `about:support` og se på Graphics, WebGL. Hvis den er blokeret, så opdatér grafikdriveren. I `about:config` skal `webgl.disabled` være `false`.
:::

:::safari
WebGL er altid slået til i aktuel Safari. Opdatér macOS (Safari opdateres med det). Hvis det stadig fejler, så prøv Chrome eller Firefox på samme Mac for at udelukke grafikhardwaren.
:::

Fjernskrivebordsforbindelser og nogle virtuelle maskiner har ingen WebGL. Prøv på selve computeren.

### » Massivkernen blev ikke indlæst: …«

**Årsag:** geometrikernen (et WebAssembly-program) kunne ikke hentes eller startes. Det sker normalt, fordi forbindelsen blev afbrudt, mens appen indlæstes, WebAssembly er slået fra af en virksomhedspolitik eller en browserindstilling for sikkerhed, eller browseren er meget gammel.

**Løsning:** genindlæs siden, mens du er online. Hvis det bliver ved med at fejle, så prøv en anden aktuel browser. I Firefox skal `javascript.options.wasm` i `about:config` være `true`. Offline indlæses appen og dens kerne kun, hvis appbjælken sagde **Klar til offline brug**, før du mistede forbindelsen (**Gem til offline brug** mens du er online; se [Arbejde offline](common:offline)).

### Offline-knappen siger »Kunne ikke gemmes« eller »Offline ikke tilgængelig«

**Kunne ikke gemmes**: nogle filer blev ikke hentet. Klik for at prøve igen, mens du er online; en langsom eller målt forbindelse kan kræve et nyt forsøg. **Offline ikke tilgængelig**: dette browservindue kan ikke gemme en offline-kopi (private vinduer og nogle administrerede computere blokerer det). Brug et normalt vindue, eller hold fanen åben.

### PartCraft er offline, men forældet

Klik på **Klar til offline brug**, mens du er online, og vælg {{ui:Gem igen (hent den nyeste version)}}.

### » Sweep: ikke lavet endnu. Det kræver en eksakt kerne, …«

Den fulde meddelelse er »<Navn>: ikke lavet endnu. Den kræver en eksakt kerne, som denne version af PartCraft ikke har. Hjælp › Hvad er ikke lavet endnu siger, hvad du skal gøre i stedet.« Du ser den, når du vælger Sweep, Loft, Ribbe, en pladeflange, en overflade-feature, Kombinér, Flyt legeme, Skalér legeme eller Stimønster, og for de andre ting, kun en eksakt kerne kan lave. Der er intet galt med din browser eller din del: denne version af PartCraft bygger alle dele med netkernen. Se [Hvad er ikke lavet endnu](topic:not-built-yet) for hvad du skal gøre i stedet, og [Netkernen](topic:solid-kernels).

### »Indlæser massivkernen…« forsvinder aldrig

Vent lidt på en langsom forbindelse: kernen og 3D-biblioteket downloades første gang. Genindlæs derefter. Hvis selve siden viser en fejl, se ovenfor.

## Intet sker, når jeg trykker på en tast

- Tasterne virker ikke, mens markøren er i en boks i et panel. Klik i 3D-visningen, eller tryk på {{key:Esc}} efter at have skrevet (eller {{key:Tab}} for at komme ud).
- Piletasterne og {{key:Plus}}/{{key:Minus}} drejer og zoomer kun visningen, når du har klikket i visningen.
- En dialog er åben: svar på den først.
- I en skitse er {{key:F}} værktøjet Afrund, ikke Tilpas. Brug knappen {{ui:Tilpas}}.

## En værktøjslinjeknap er gråtonet

- Feature-knapper er gråtonede, mens en skitse er åben. Luk skitsen først.
- Skitseværktøjer virker kun inde i en skitse.
- {{ui:Fortryd}} og {{ui:Gentag}} er gråtonede, når der ikke er noget at fortryde eller gentage.
- {{ui:Samling}} kræver en del med et massivt legeme. {{ui:Led}} kræver to dele i samlingen. {{ui:Rediger del}} kræver en valgt del.
- {{ui:STEP AP242 (eksakt massivt legeme)}} og {{ui:STEP AP214 (eksakt massivt legeme)}} er gråtonede i en samling: eksportér hver del. Et andet program afviser den eksakte fil: prøv {{ui:STEP AP214 (eksakt massivt legeme)}}, og derefter {{ui:STEP (facetteret, netkerne)}}, og fortæl os det via {{ui:Hjælp}} › {{ui:Rapportér et problem}}.
- {{ui:Sweep}}, {{ui:Loft}} og de andre features, der kræver en eksakt kerne, er ikke gråtonede: de kan stadig klikkes, deres værktøjstips slutter med "ikke lavet endnu (kræver en eksakt kerne)", og et klik siger det i statuslinjen. Se [Hvad er ikke lavet endnu](topic:not-built-yet).
- {{ui:Tegning}} kræver en del med et massivt legeme, og er gråtonet, mens en skitse er åben.
- {{ui:Eksportér}}-punkterne er gråtonede i en samling: samlinger kan ikke eksporteres endnu. Luk den, eller rediger en del, for at eksportere.

## Skitseproblemer

### Skitsen vil ikke lade mig tilføje en relation

» Ingen relation passer til dette valg. Vælg ét eller to elementer (Shift+klik tilføjer).« Relationen kræver et andet valg. Se [Skitserelationer og målsætninger](topic:sketch-relations) for hvad hver kræver.

### » Overbestemt: … kan ikke alle opfyldes. Fortryd, eller slet en af dem.«

**Årsag:** den nye relation eller målsætning modsiger dem, der allerede er der. Skitsen flyttede sig ikke.

**Løsning:** {{key:Mod+Z}}, eller slet et af de røde elementer i højre panels liste (vælg **Slet** ved siden af det).

### » Overbestemt: … er allerede underforstået. Slet den.«

**Årsag:** relationen tilføjer intet: andre tvinger den allerede (fx Parallel på to sider af en rektangel, eller en målsætning, der allerede er fast). Der er ingen drevne målsætninger i denne build.

**Løsning:** slet den. Featuren bygges alligevel, med en advarsel.

### » Disse elementer kan ikke målsættes sammen.«

Du klikkede fx på et punkt og en cirkel. Mål i stedet til cirklens centrumpunkt.

### » En afrunding kræver et hjørne, hvor præcis to linjer mødes.« / » Den radius er for stor til disse linjer.«

Klik præcis på hjørnepunktet for to massive linjer. Brug en mindre radius end den korteste linje tillader.

### Geometrien hopper tilbage, når jeg trækker i den

Trækket ville bryde en relation eller en målsætning, så PartCraft sætter den tilbage. Kun blå geometri (underbestemt) kan flyttes.

### » Denne skitse kan ikke åbnes: Kræver Extrude2, som fejler.«

Skitsen sidder på en flade af en feature, der ikke er bygget. Ret den feature først, eller ophæv dens undertrykkelse, eller rul frem.

## Feature-problemer

| Meddelelse | Årsag | Løsning |
|---|---|---|
| » Lav en skitse først: vælg et plan, Skitse, tegn en lukket profil, Afslut.« | Ingen ubrugt skitse med kurver, og ingen valgt | Tegn en skitse, eller vælg skitsen, der skal bruges, i historikken |
| » Skitsen har ingen lukket profil at ekstrudere.« (eller » at dreje«) | Ingen lukket sløjfe af massive linjer | Luk hullerne; skift konstruktionslinjer tilbage med {{key:Q}} |
| » Profilen er åben: en ende ved (x, y) er ikke forbundet til noget.« | Et hul i det punkt | Åbn skitsen, og træk enden over på sin nabo, så den fanger |
| » Profilen grener sig ved (x, y): mere end to ender mødes der.« | Tre eller flere linjer mødes i ét punkt | Slet den ekstra linje, eller skift den til konstruktion |
| » En lukket sløjfe kræver mindst tre sider eller en kurve.« | To linjer frem og tilbage | Tegn sløjfen igen |
| » Gennem alt er til udskæringer. Brug en dybde til et tap.« | Et tap sat til Gennem alt | Sæt Ende til Blind eller Midterplan |
| » Der er intet at skære på den side af skitsen. Prøv den anden retning.« | Udskæringen peger væk fra materialet | Markér Vend retning |
| » Der er endnu intet at skære.« / » Der er endnu intet at bore.« | Intet massivt legeme før denne feature | Lav et tap først, eller flyt featuren ned |
| » Tegn en midterlinje (en konstruktionslinje) i skitsen at dreje om.« | Drejning uden en akse | Tilføj en midterlinje, eller vælg en linje under Akse |
| » Profilen krydser aksen. Hold den på én side af midterlinjen.« | Profilen på begge sider af aksen | Tegn halvdelen af profilen igen |
| » Sæt skitsepunkter, hvor hullerne skal være (Punkt-værktøjet), og lav derefter hullet.« | Ingen løse punkter i skitsen | Tilføj punkter med {{key:P}} |
| » Forsænkningen skal være bredere end hullet.« | Forsænkningens ⌀ er ikke større end Diameter | Gør forsænkningen bredere |
| » Forsænkningen skal være lavere end hullet.« | Forsænkningen er dybere end et blindt hul | Gør den lavere, eller hullet dybere |
| » Vælg de features, der skal kopieres.« | Et mønster eller en spejling med intet markeret | Markér en feature under Features, der skal kopieres |
| » Extrude2 har intet massivt legeme at kopiere.« | Den kopierede feature fejlede eller er slået fra | Ret den, eller ophæv dens undertrykkelse |
| » Kræver Sketch3, som fejler.« | En feature, den afhænger af, er ikke bygget | Ret featuren, den nævner |
| » Fladen den sidder på er væk (Extrude1 er ikke bygget).« | Skitsens flade findes ikke længere | Ret den feature, eller slet skitsen og tegn den igen |
| » Der er intet tilbage af delen efter dette.« | En udskæring fjernede alt materiale | Tjek udskæringens størrelse og retning |
| » Massivkernen kunne ikke bygge dette (…).« eller » Massivkernen kunne ikke kombinere dette med legemet.« | Kernen afviste geometrien | Fortryd, eller ændr størrelserne lidt; flader, der præcis rør hinanden, kan forårsage det |
| » Sweep: ikke lavet endnu. Den kræver en eksakt kerne, som denne version af PartCraft ikke har.« (også Loft, Ribbe og de andre) | En feature lavet i en tidligere build, som kun en eksakt kerne kan bygge. Den bliver i historikken og gemmes tilbage uændret | Undertryk eller slet den; se [Hvad er ikke lavet endnu](topic:not-built-yet) for hvad du skal gøre i stedet |
| » En rundning på 5 mm passer ikke her (…).« / » En affasning på 2 mm …« | Størrelsen er for stor til en flade ved siden af kanten, eller hjørnet kan ikke blendes | Mindre størrelse, eller færre kanter pr. feature |
| » Afrunding: i denne version kun lige kanter mellem to plane flader (netkernen bygger dem). Afrund eller skæv buede kanter i skitsen.« (også Affasning) | En valgt kant er rund, som en hulkant, eller ligger på en buet flade | {{ui:Vælg kanter}} og fjern den; afrund eller skæv det hjørne i skitsen i stedet |
| » En afrunding, hvis radius ændrer sig langs kanten: ikke lavet endnu (den kræver en eksakt kerne). Giv den én radius.« | **Variabel radius** er markeret | Fjern markeringen, og angiv én radius |
| » Afrunding med netkernen: hvor afrundede kanter mødes, skæres de i gering, ikke blendet.« (⚠, en advarsel) | Valgte kanter mødes i et hjørne; rundingerne mødes der i et skarpt knæk | Intet at rette: delen er bygget. Afrund færre kanter, hvis knækket betyder noget |
| » En kant den runder er væk: kanten mellem Extrude1 og Cut2.« | En tidligere ændring fjernede kanten | {{ui:Vælg kanter}}, fjern den røde kant, og vælg den nye |
| » Vælg kanterne i visningen, og tilføj dem derefter.« | Afrundingen eller affasningen har ingen kanter | {{ui:Vælg kanter}} |
| » Vælg fladerne, der skal fjernes (åbne), og skal derefter.« | Skallen har ingen åbne flader | {{ui:Vælg flader}} |
| » Skallen kunne ikke laves med denne tykkelse (…).« | Væggen er tykkere end en tynd del af modellen eller en afrundings radius | En tyndere væg, eller større afrundinger |
| » Skal: i denne version åbnes kun plane flader (netkernen bygger den).« | En åben flade er buet | {{ui:Vælg flader}} og fjern den; åbn kun plane flader |
| » Udtræksvinkel: i denne version kun plane flader (netkernen bygger den).« | En flade med udtræksvinkel er en cylinder, kegle eller frit formet flade | Fjern den; giv kun plane flader udtræksvinkel |
| » En flade den åbner er væk (…).« | En tidligere ændring fjernede fladen | {{ui:Vælg flader}} igen |
| » Fillet1 ændrer legemets kanter eller vægge; den kan ikke kopieres. …« | Et mønster eller en spejling kopierer en afrunding, affasning eller skal | Fjern markeringen; lav mønsteret af udskæringerne først, og afrund derefter |
| » Den sidder på en flade, som kun en eksakt kerne kan finde: endnu ikke lavet i denne version.« | En skitse på en flade, netkernen ikke kan finde, fx en lavet i en tidligere build | Skitsér på et basisplan eller en plan flade på en ekstrudering, og placér den med målsætninger |
| » Den bruger en flade eller kant på massivet, som kun en eksakt kerne kan finde: endnu ikke lavet i denne version.« | Et referenceplan, en akse eller et punkt på en flade eller kant af massivet | Lav det ud fra basisplaner, skitsepunkter eller koordinater i stedet |
| » Ekstrudering op til en flade, den næste flade eller et hjørne: ikke lavet endnu (den kræver en eksakt kerne).« / » En skråning: ikke lavet endnu (den kræver en eksakt kerne).« | En slutbetingelse eller skråning, som kun en eksakt kerne bygger | Brug en Blind- eller Midterplan-dybde, du måler; lad Skråning være 0 |

## Valgproblemer

- » Den flade er buet. Vælg en plan flade eller et plan at skitsere på.« Skitser kræver en plan flade. Skitsér på et basisplan, og placér skitsen med målsætninger i stedet.
- En flade siger »Fast hvor valgt«: den blev ikke lavet af en skitsekant (fx en flade på en mønsterkopi), så en skitse på den bliver siddende, når delen ændrer sig.
- Kanter er svære at ramme: zoom ind. En kant vinder over fladen ved siden af, når markøren står lige på den.

## Filproblemer

| Meddelelse | Rettelse |
|---|---|
| 'PartCraft åbner sine egne .partcraft.json-filer, eksporter fra CadCraft-makroen til SolidWorks (.cadcraft-sw.json) og STEP-filer. "bracket.igs" er ingen af dem.' | Kun disse filer genkendes (og STL-, OBJ- og 3MF-net samt `.3dm`-filer) |
| '"part.stp" er ikke en STEP-fil (den starter ikke med ISO-10303-21).' | Filen er ikke STEP-tekst |
| » Den STEP-fil er for stor (over 60 MB) til at importere her.« | Forenkl den ved kilden |
| » Filen er for stor til at være en PartCraft-del.« på din egen gemte del | En stor STEP-massiv importeret i en tidligere build gjorde delfilen over 50 MB. Brug en tidligere kopi uden den |
| » Filen er for stor til at være en PartCraft-del.« | Filen er over 50 MB; den er ikke en PartCraft-fil |
| » Dette er ikke en PartCraft-fil (den er ikke JSON).« / » Dette er ikke en PartCraft-fil.« | Filen er beskadiget, eller den tilhører et andet program |
| » Denne fil blev gemt af en nyere PartCraft (filversion …); denne læser version …« | Åbn den i den nyere PartCraft |
| » Extrude2: dybden er forkert.« (eller en anden værdi) | Filen blev redigeret i hånden eller beskadiget. Brug en tidligere kopi |
| Indsæt i en samling siger » Part1.partcraft.json har intet massivt legeme at indsætte.« | Delfilen har intet massivt legeme. Åbn den, lav et massivt legeme, gem, og indsæt igen |

**Min gemte fil er ikke, hvor jeg forventede.** Gemning er en download: se i din browsers mappe for downloads, eller åbn listen over downloads fra browserens værktøjslinje. Se [Hvor dine filer havner](common:your-files).

**Jeg åbnede en del, men samlingen er stadig på skærmen.** Delen blev indlæst bag samlingen. Vælg {{ui:Luk}} for at lukke samlingen og se delen. Luk samlinger, før du åbner delfiler.

## Tegningsproblemer

| Meddelelse | Rettelse |
|---|---|
| » Byg et massivt legeme først, og lav derefter dets tegning.« | Byg delen først |
| » Der er ingen plads på arket til: detalje. Gør detaljen mindre, eller fjern et billede.« | Mindre **Detaljeradius** eller **Detaljeskala**, eller fjern snittet |
| » En detalje tages fra forside-, top-, højre- eller snitvisningen.« | Klik på en af disse visninger |
| » Klik på en af visningerne.« | Klikket var på tomt papir |
| » Position kræver mindst én datumreference.« og andre rammemeddelelser | Angiv de datummer, panelet beder om, eller vælg en anden egenskab |
| » Tegningsvisningerne kunne ikke laves: …« | Fortryd den sidste ændring. Hvis det bliver ved, så gem, genindlæs og åbn delen igen |

## Samlingsproblemer

| Meddelelse | Rettelse |
|---|---|
| » Byg et massivt legeme først, og indsæt det derefter i en samling.« | Delen har endnu intet massivt legeme |
| » Indsæt en anden del først (Tilføj kopi, Indsæt, eller Rediger › Duplikér).« | Et led kræver to dele |
| » Vælg en flade på en anden del.« | Begge flader i et led skal være på forskellige dele |
| » Den flade er buet. Vælg en plan flade …« | Led starter fra plane flader. Brug derefter **Centrér på** for et hul eller en drejningsakse |
| » Bracket2 er ikke samlet til den jordforbundne del, så den bliver, hvor den blev sat.« | Tilføj et led fra den til en del, der er placeret |
| » Revolute3 lukker en sløjfe, der ikke kan lukke: den er 2.000 mm forkert. Kontrollér fladerne, forskydningerne og grænserne for sløjfens led.« | Delene kan ikke alle mødes: kontrollér længderne, fladerne hvert led bruger, forskydninger (dele stablet flade mod flade skal være enige i dybden) og grænser; eller fjern et led i sløjfen |
| » Fladen dette led bruger er væk fra Bracket.« / » Aksen dette led bruger er væk fra Bracket.« | Delen blev redigeret. Fjern leddet, og lav det igen |
| » Aksen løber langs fladen, så den kan ikke sætte leddets centrum.« | Vælg en akse, der krydser fladen, eller »Fladens egen oprindelse« |
| » En samling beholder mindst én del. Luk den i stedet.« | Brug {{ui:Luk}} |

**Delene er samlet, men på det forkerte sted.** Sæt **Centrér på** for begge sider af leddet til de huller eller drejningsakser, der skal flugte, og juster derefter **Vinkel (°)** og **Forskydning (mm)**.

## Det er langsomt

- Sæt **Kurver** til Normal eller Grov, mens du modellerer; skift til Fin før eksport.
- Store mønstertal (hundredvis af kopier) tager tid at genopbygge ved hver ændring. Undertryk mønsteret, mens du arbejder på andre features.
- Kollisionstjek og bevægelsestjek sammenligner hvert par af dele; store samlinger tager længere tid.
- Luk andre tunge faner. PartCraft kører på din egen computers processor og grafik.

## Stadig fast

Gem din fil først ({{key:Mod+S}}), og genindlæs derefter siden og åbn den igen. Hvis en feature stadig fejler, så vælg den, læs dens meddelelse, og prøv {{key:Mod+Z}} tilbage til den sidste gode tilstand.
