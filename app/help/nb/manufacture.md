---
title: Lag verktøybaner og G-kode (Produksjon)
summary: Sett opp råemne og arbeidsnullpunkt, velg verktøy, legg til flate-, lomme-, kontur-, bore- og fasingsoperasjoner ved å velge flater, fullfør hele modellen i 3D (parallell, kamskjell), simuler råemnet mot modellen for overskjæringer og syklustid, og last ned G-kode fra en av de tre innebygde postene, eller en du redigerer selv.
keywords: eksakt STEP, STEP for verkstedet, arbeidskoordinater, CAM-overlevering, parallell, kamskjell, 3D-finpuss, finpuss, kulehode, verktøybibliotek, rediger post, egendefinert post, postredigerer, adaptiv, adaptiv fresing, konstant inngrep, trochoidal, hsm, høyhastighetsfresing, produksjon, CAM, verktøybane, G-kode, NC, CNC, fres, fresing, lomme, kontur, profil, planfresing, bore, peck, G83, G81, G73, fasing, råemne, arbeidsforskyvning, G54, postprosessor, GRBL, LinuxCNC, mater og turtall, simulering, overskjæring, syklustid
from: beeb29aa
---

Arbeidsområdet Produksjon gjør delen om til verktøybaner for en 3-akset fresemaskin, og skriver dem som G-kode. De fleste operasjonene er **2.5-akse**: verktøyet står loddrett, vegger skjæres rett ned og gulv flatt. **Parallell** og **Kamskjell** finpusser buede flater i 3D (se [3D-finpuss](topic:finish-3d)). Verktøyet står fortsatt loddrett (tre akser, ingen vipping). Den jobber på de navngitte flatene som nettkjernen gir delen (se [Nettkjernen](topic:solid-kernels)).

Labversjon: kontroller hvert program i styringens egen simulator, og kjør det først i luften over råemnet.

## Oppsett

1. Velg **Produksjon** i arbeidsområdebyttet, deretter {{ui:Nytt oppsett}}.
2. På fanen **Oppsett** velger du:
   - **Verktøyakse (+Z)**: hvilken vei verktøyet peker inn i delen. Verden +Y (PartCraft sin opp) er standard. Maskinens X er da verden X, og maskinens Y er verden −Z.
   - **Arbeidsnullpunkt (G54)**: et hjørne eller senter på råemnet, topp eller bunn, modellens topp-senter, eller modellens origo.
   - **Råemne**: en boks eller en sylinder, enten modellen pluss forskyvninger (sider, topp, bunn) eller en fast størrelse.
   - **Materiale** (setter startmatingen og turtallet), **post** (styringen), maskinens maksimale spindelturtall, eilgangshastighet og verktøyskiftetid, kjølevæske og programnummeret.

## Verktøy

Fanen **Verktøy** har biblioteket: flate, kule- og bull nose-endefreser, bor, fasefreser og planfreser. Hver har et T-nummer, diameter, skjær og skjærelengde (pluss hjørneradius, spiss- eller fasevinkel der de gjelder).

Mine verktøy kan lagres i nettleseren og flyttes mellom datamaskiner som en fil: se [Verktøybiblioteket](topic:tool-library).

Spindelturtall og mating kommer fra materialet: n = 1000 × skjærehastighet / (π × diameter), mating = n × skjær × spånbelastning (bor: n × mating per omdreining). Tallene er konservative startverdier fra publiserte områder, ikke innstilt for din maskin. Skriv inn verktøyprodusentens skjærehastighet, spånbelastning, o/min eller mating for å overstyre dem. Når turtallet overstiger maskinens maksimum, holdes det der, og matingen følger med, slik at spånbelastningen beholdes.

## Legg til operasjoner

Hver verktøylinjeknapp legger til en operasjon. Der den trenger geometri, begynner den å velge: klikk på flater eller kanter i visningen (klikk igjen for å fjerne én), og trykk deretter {{ui:Ferdig med å velge}} eller {{key:Esc}}.

| Operasjon | Velg | Hva den gjør |
|---|---|---|
| {{ui:Flate}} | ingenting | Zigzag-baner over hele råemnet, forbi kantene, ned til modellens topp |
| {{ui:Lomme}} | en flat gulvflate, et rundt hull, eller en lukket kjede av kanter | Fjerner området i forskjøvne baner fra innsiden og ut, ved hvert nedtrinn. Øyer (flater som står opp inne i gulvet) blir stående. Et gulv som er åpent rundt (ingenting høyere utenfor) fjernes helt ut til råemnets kant |
| {{ui:Adaptiv}} | det samme som Lomme | Fjerner det samme området i baner som hver kutter en fast bredde (**Inngrep**, en brøkdel av diameteren), slik at fresen aldri tar et fullbredde spor, selv i hjørner. Den går inn med en helix og finpusser veggene på hvert nivå. Smale kutt tillater et dypere nedtrinn og høyere mating |
| {{ui:Kontur}} | en flat flate (dens omriss), en rund flate, eller kanter | Følger omrisset forskjøvet med verktøyradius, utvendig eller innvendig, med inn- og utkjøringsbuer og valgfrie fester |
| {{ui:Boring}} | hull (klikk på et hulls vegg eller kant) | Borer hvert hull med en fast syklus: peck (G83), bor (G81) eller spånbryting (G73). Eller oppgi en diameter for å bore alle hull av den størrelsen |
| {{ui:Fasing}} | en flates omriss eller kanter | Kjører en fasefrese langs kanten, slik at den skjærer bredden du satte |
| {{ui:Parallell}} | ingenting (hele modellen) | 3D-finpuss i parallelle linjer i en hvilken som helst vinkel, og følger flaten med en kule-, bull nose- eller flat endefrese. Se [3D-finpuss](topic:finish-3d) |
| {{ui:Kamskjell}} | ingenting (hele modellen) | 3D-finpuss i baner med en fast avstand over flaten, slik at ryggen mellom dem får høyden du ber om |

Velg en operasjon i listen for å endre verktøy, høyder (klaring, tilbaketrekk, mateshøyde, topp, bunn), nedtrinn, sideskritt, materiale som skal gjenstå, finpussgang, inngang (helix, rampe eller stikk), medfresing, fester eller syklus. {{ui:Opp}} og {{ui:Ned}} endrer rekkefølgen, {{ui:Undertrykk}} utelater operasjonen, og {{ui:Slett}} fjerner den. Alt er i angrehistorikken og lagres i delfilen.

Et lommes sideskritt er høyst halvparten av verktøydiameteren, slik at hvert punkt på gulvet ligger innenfor én verktøyradius fra en bane. Innvendige hjørner beholder verktøyets radius.

**Adaptiv fresing** holder inngrepet til kutteren nær én verdi. Et inngrep på 0.15 av diameteren er en inngrepsvinkel på omtrent 46°: buen av kutterkanten i materialet. En forskjøvet lomme kutter derimot full bredde på første gang, og vikler seg lenger rundt i hvert innvendige hjørne. Mellom banene står verktøyet nede der det beveger seg gjennom kuttet luft, og løfter og senker seg i kuttet luft ellers. Banene regnes ut på et fint rutenett over området (celler på omtrent en tolvtedel av verktøyradien), så inngrepet kan gå opp til omtrent en celle bredere enn satt. Veggene finpusses nøyaktig. Et stort åpent område gir et langt program med mange korte bevegelser.

## Simuler

Verktøybanene lages på nytt etter hver endring (delen også). {{ui:Simuler}} viser også råemnet som er igjen etter hele programmet. Panelet viser:

- **Syklustid**: matebevegelser med sin mating, eilganger som rette linjer med oppsettets eilgangshastighet, pluss verktøyskiftetiden. Ekte maskiner akselererer, så de bruker lengre tid.
- **Overskjæringer**: steder der verktøyet gikk mer enn 0.02 mm under delens overflate. Røde merker viser dem i visningen.
- **Råemne igjen på delen**.

Råemnet er et høydekart over toppen (et Z-kart), så det kan ikke vise undersnitt. Dra **Avspilling** for å flytte verktøyet langs programmet. I visningen er matebevegelser heltrukne og eilganger stiplede, med én farge per operasjon.

Med **Vis det simulerte råemnet** på, farges råemnet mot modellen, celle for celle: **grønt** der det er på modellen (innenfor 0.02 mm), **rødt** der verktøyet kuttet inn i modellen. Der det er råemne igjen på modellen, er det **gult** for et tynt lag og **oransje** for mer, og det toner over til **grått** for urørt råemne ved 1 mm eller mer. Fargene lages på nytt ved hver endring, fra det samme høydekartet som tallene i panelet, så grønt og rødt stemmer med linjen Overskjæringer. En fasing kutter inn i modellen med vilje og viser rødt langs kanten.

## Post G-koden

Velg styringen under **Post** og trykk {{ui:Last ned G-kode}} (eller {{ui:Post}} på verktøylinjen):

| Styring | Fil | Merknader |
|---|---|---|
| Fanuc-style ISO | .nc | %, O-nummer, linjenummer, T M6 med G43 H, faste sykluser |
| GRBL | .nc | Ingen verktøyskifter eller faste sykluser: et verktøyskifte stopper med M0, boring skrives som vanlige bevegelser |
| LinuxCNC | .ngc | T M6 med G43 H, faste sykluser, M2 |
| Egen | hvilken som helst | En post du skrev eller endret: {{ui:Rediger post…}}, {{ui:Ny post…}}, {{ui:Importer postfil…}} |

Hver fil starter med kommentarer for programmet, råemnet, arbeidsforskyvningen og verktøyene. Koordinater er i millimeter med 3 desimaler. {{ui:Verktøybane-CSV}} og {{ui:Verktøybane-JSON}} eksporterer selve bevegelsene.

**Kontroller utdataene i maskinens egen simulator før du skjærer, og kjør dem først i luften over råemnet.** De tre innebygde postene er utgangspunkter som følger styringenes dokumenterte oppførsel. De er ikke bevist på noen bestemt maskin. En post du endrer, er din å bevise. Slik skriver du en: [Postprosessorer](topic:post-processors).

## Eksakt STEP for verkstedet

Under G-kode-knappene på fanen **Operasjoner** laster {{ui:Eksakt STEP (arbeidskoordinater)}} ned `<part>-work.step`: delen som et eksakt volumlegeme (ekte sylindre for hull og opphøyninger, ekte sirkler for kantene deres), med origo i oppsettets arbeidsnullpunkt og Z langs verktøyaksen. Det er koordinatene G-koden bruker, så verkstedets eget CAM-program eller kontrollprogram stiller modellen inn etter programmet uten å flytte den. Filen inneholder bare delen, ikke råemnet eller verktøybanene.

{{ui:Eksporter}} › {{ui:STEP AP242 (eksakt volumlegeme)}} skriver det samme volumlegemet i delens egen posisjon (Z opp): se [Eksporter for utskrift, STEP og DXF](topic:export-files#for-other-cad-programs-step).

## Begrensninger

- Lommer, konturer, boring og fasing er 2.5-akse. Buede flater kan finpusses i 3D ([parallell og kamskjell](topic:finish-3d)), men ikke grovbearbeides i 3D (en kjegle blir stående som trinn til du finpusser den), og det finnes ingen restbearbeiding. Adaptiv fresing er 2D (flate gulv).
- Bare tre akser: ingen vipping, ingen dreiing, ingen inspeksjon.
- Holdere og skaft kontrolleres ikke for kollisjoner. En advarsel vises når et kutt er dypere enn skjærelengden.
- Mating og turtall er startverdier. En post er tekst du kan redigere, men den bestemmer bare hvordan bevegelsene skrives. Den kan ikke endre verktøybanen, legge til akser eller kjenne maskinen din ([Postprosessorer](topic:post-processors) lister hva den ikke kan).

## Send programmet til en maskin

I CadCraft Studio på skrivebordet, med en maskin satt opp i Studio, vises **Send til en maskin…** ved siden av **Last ned G-kode**. Det laster det samme programmet opp til maskinen på nettverket ditt. Det startes aldri fra PartCraft: start det ved maskinen når det er klart. I en nettleser vises ikke knappen (en nettside kan ikke nå en maskin på nettverket ditt). Last ned programmet i stedet.
