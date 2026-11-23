---
title: Lag verktøybaner og G-kode (Produksjon)
summary: Sett opp råemne og arbeidsnullpunkt, velg verktøy, legg til flate-, lomme-, kontur-, bore- og fasingoperasjoner ved å velge flater, finish hele modellen i 3D (parallell, kamskjell), simuler råemnet mot modellen for overskjæringer og syklustid, og last ned G-kode fra en av de tre innebygde postene eller en du redigerer selv.
keywords: exact step, step for verksted, arbeidskoordinater, CAM-overlevering, parallell, kamskjell, 3d-finish, finish, kulefres, verktøybibliotek, rediger post, egendefinert post, postredigerer, adaptiv, adaptiv rydding, konstant inngrep, trokoidal, hsm, høyhastighetsfresing, produksjon, CAM, verktøybane, G-kode, NC, CNC, fres, fresing, lomme, kontur, profil, planfresing, boring, pikking, G83, G81, G73, fasing, råemne, arbeidsforskyvning, G54, postprosessor, GRBL, LinuxCNC, tilmating og turtall, simulering, overskjæring, syklustid

from: f8a03be8
---

Arbeidsområdet Produksjon gjør delen om til verktøybaner og skriver dem som G-kode. De fleste operasjonene er **2,5-akse**-fresing: verktøyet holdes vertikalt, vegger freses rett ned og gulv flatt. **3D-grov** og **Rest** rydder buede deler i 3D ([3D-grovbearbeiding og restbearbeiding](topic:rough-3d)). **Parallell** og **Kamskjell** finisher dem ([3D-finish](topic:finish-3d)). På en maskin med roterende akser kan hvilken som helst operasjon ha et vippet verktøy, og to operasjoner flytter de roterende aksene mens de skjærer ([4- og 5-akse-bearbeiding](topic:multi-axis)). Det finnes operasjoner for en dreiebenk ([Dreiing](topic:turning)) og for en tastehode ([Probing](topic:probing)). Den arbeider på de navngitte flatene som nettkjernen gir delen (se [Nettkjernen](topic:solid-kernels)).

Labbversjon: sjekk hvert program i styringens egen simulator, og kjør det i luften over råemnet først.

## Oppsett

1. Velg **Produksjon** i arbeidsområdeveksleren, og trykk deretter {{ui:New setup}}.
2. På fanen **Oppsett** velger du:
   - **Verktøyakse (+Z)**: hvilken vei verktøyet peker inn i delen. Verden +Y (PartCraft sin opp) er standard; maskin-X er da verden-X, og maskin-Y er verden −Z.
   - **Arbeidsnullpunkt (G54)**: et hjørne eller midten av råemnet, topp eller bunn, midt på modellens topp, eller modellens nullpunkt.
   - **Råemne**: en boks eller en sylinder, enten modellen pluss forskyvninger (sider, topp, bunn) eller en fast størrelse.
   - **Materiale** (setter startverdiene for tilmating og turtall), **posten** (styringen), maskinens maksimale spindelturtall, eilhastighet og verktøyskiftetid, kjølevæske og programnummer.

## Verktøy

Fanen **Verktøy** har biblioteket: flate, kule- og radiusfreser, borer, fasefreser og planfreser, hver med et T-nummer, diameter, spor og sporlengde (pluss hjørneradius, spiss- eller fasevinkel der det gjelder).

Mine verktøy kan lagres i nettleseren og flyttes mellom datamaskiner som en fil: se [Verktøybiblioteket](topic:tool-library).

Spindelturtall og tilmating kommer fra materialet: n = 1000 × skjærehastighet / (π × diameter), tilmating = n × spor × spontykkelse (borer: n × tilmating per omdreining). Tallene er forsiktige startverdier fra publiserte områder, ikke finjustert for din maskin. Skriv inn verktøyprodusentens skjærehastighet, spontykkelse, o/min eller tilmating for å overstyre dem. Når turtallet går over maskinens maksimum, holdes det der, og tilmatingen følger med slik at spontykkelsen beholdes.

## Legg til operasjoner

Hver verktøylinjeknapp legger til en operasjon, og der den trenger geometri, starter den valg: klikk flater eller kanter i visningen (klikk igjen for å fjerne én), og trykk deretter {{ui:Done picking}} eller {{key:Esc}}.

| Operasjon | Velg | Hva den gjør |
|---|---|---|
| {{ui:Face}} | ingenting | Zig-zag-gang over hele råemnet, forbi kantene, ned til modellens topp |
| {{ui:Pocket}} | en flat gulvflate, et rundt hull, eller en lukket kjede av kanter | Rydder området i forskjøvne gang innenfra og ut, ved hvert nedstikk; øyer (flater som står opp inne i gulvet) blir stående; et gulv som er åpent rundt (ingenting høyere utenfor) ryddes helt ut til råemnets kant |
| {{ui:Adaptive}} | det samme som Lomme | Rydder samme område i gang som hver skjærer en fast bredde (**Inngrep**, en brøkdel av diameteren), slik at fresen aldri tar et helt bredt spor, heller ikke i hjørner; den går inn med en spiral og finisher veggene på hvert nivå. Smale kutt tillater dypere nedstikk og høyere tilmating |
| {{ui:Contour}} | en flat flate (dens kontur), en rund flate, eller kanter | Følger konturen forskjøvet med verktøyradiusen, utenfor eller innenfor, med inn- og utgående buer og valgfrie forbindelsesbroer |
| {{ui:Drill}} | hull (klikk på et hulls vegg eller kant) | Borer hvert hull med en fast syklus: pikking (G83), boring (G81) eller spånbrudd (G73); eller oppgi en diameter for å bore alle hull av den størrelsen |
| {{ui:Chamfer}} | en flates kontur eller kanter | Kjører en fasefres langs kanten slik at den skjærer bredden du setter |
| {{ui:Parallel}} | ingenting (hele modellen) | 3D-finish i parallelle linjer i hvilken som helst vinkel, og følger overflaten med en kule-, radius- eller flat fres. Se [3D-finish](topic:finish-3d) |
| {{ui:Scallop}} | ingenting (hele modellen) | 3D-finish i gang med en fast avstand over overflaten, slik at kammen mellom dem får høyden du ber om |

Velg en operasjon i listen for å endre verktøyet, høydene (klaring, tilbaketrekking, tilmatingshøyde, topp, bunn), nedstikk, stegavstand, materiale å la stå igjen, finishgang, inngang (spiral, rampe eller stikking), medfresing, broer eller syklus. {{ui:Up}} og {{ui:Down}} endrer rekkefølgen, {{ui:Suppress}} utelater operasjonen, og {{ui:Delete}} fjerner den. Alt ligger i angrehistorikken og lagres i delfilen.

Stegavstanden til en lomme er høyst halvparten av verktøydiameteren, slik at alle punkter på gulvet ligger innen én verktøyradius fra en gang. Innvendige hjørner beholder verktøyets radius.

**Adaptiv rydding** holder fresens inngrep nær én verdi. Et inngrep på 0.15 av diameteren er en inngrepsvinkel på om lag 46°: buen av fresens egg i materialet. En forskjøvet lomme skjærer derimot full bredde på første gang og vikler seg lenger rundt i hvert innvendig hjørne. Mellom gangene holder verktøyet seg nede der det beveger seg gjennom luft som allerede er skåret, og løfter og senker seg i skåret luft ellers. Gangene beregnes på et fint rutenett over området (celler på om lag en tolvtedel av verktøyradiusen), så inngrepet kan bli om lag én celle bredere enn satt; veggene blir finishet nøyaktig. Et stort åpent område gir et langt program med mange korte bevegelser.

## Simuler

Verktøybanene lages på nytt etter hver endring (delen også). {{ui:Simulate}} viser også råemnet som er igjen etter hele programmet. Panelet viser:

- **Syklustid**: tilmatingsbevegelser med sin tilmating, eilgang som rette linjer med eilhastigheten fra oppsettet, pluss verktøyskiftetiden. Ekte maskiner akselererer, så de bruker lengre tid.
- **Overskjæringer**: steder der verktøyet gikk mer enn 0.02 mm under delens overflate. Røde merker viser dem i visningen.
- **Råemne igjen på delen**.

Råemnet er et høydekart over toppen (et Z-kart), så det kan ikke vise undersnitt. Dra **Avspilling** for å flytte verktøyet langs programmet. I visningen er tilmatingsbevegelser fulle og eilgang stiplet, med én farge per operasjon.

Med **Vis det simulerte råemnet** på, farges råemnet mot modellen, celle for celle: **grønt** der det er på modellen (innen 0.02 mm), **rødt** der verktøyet skar inn i modellen, og der det står igjen råemne på modellen: **gult** for en tynn hinne, **oransje** for mer, og gradvis overgang til den **grå** fargen for uskåret råemne ved 1 mm eller mer. Fargene lages på nytt med hver endring, fra samme høykart som tallene i panelet, slik at grønt og rødt stemmer med linjen Overskjæringer. En fasing skjærer inn i modellen med vilje og viser rødt langs kanten.

## Post G-koden

Velg styringen under **Post** og trykk {{ui:Download G-code}} (eller {{ui:Post}} på verktøylinjen):

| Styring | Fil | Merknader |
|---|---|---|
| Fanuc-lignende ISO | .nc | %, O-nummer, linjenummer, T M6 med G43 H, faste sykluser |
| GRBL | .nc | Ingen verktøyskifter eller faste sykluser: et verktøyskifte stanser med M0, boring skrives som vanlige bevegelser |
| LinuxCNC | .ngc | T M6 med G43 H, faste sykluser, M2 |
| Fanuc-lignende dreiebenk | .nc | For dreieprogrammer: X som diameter, tilmating per omdreining, G96 under en G50-grense, G32-gjenging |
| LinuxCNC-dreiebenk | .ngc | For dreieprogrammer: G7-diametre, G95, G96, G33-gjenging; skriver ingen referansebevegelse |
| Din egen | hvilken som helst | En post du har skrevet eller endret: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Hver fil begynner med kommentarer for programmet, råemnet, arbeidsforskyvningen og verktøyene. Koordinatene er i millimeter med 3 desimaler. {{ui:Toolpath CSV}} og {{ui:Toolpath JSON}} eksporterer selve bevegelsene.

**Sjekk utdataene i maskinens egen simulator før skjæring, og kjør dem i luften over råemnet først.** De tre innebygde postene er utgangspunkter som følger styringenes dokumenterte oppførsel; de er ikke bevist på noen bestemt maskin. En post du endrer, må du selv bevise. Slik skriver du en: [Postprosessorer som kan redigeres](topic:post-processors).

## Eksakt STEP for verkstedet

Under G-kode-knappene på fanen **Operasjoner** laster {{ui:Exact STEP (work coordinates)}} ned `<part>-work.step`: delen som et nøyaktig volumlegeme (ekte sylindre for hull og tapper, ekte sirkler for kantene) med origo i denne oppsettets arbeidsnullpunkt og Z langs verktøyaksen. Det er koordinatene G-koden bruker, så verkstedets eget CAM-program eller kontrollprogram stiller modellen inn mot programmet uten å flytte den. Filen inneholder bare delen, ikke råemnet eller verktøybanene.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} skriver det samme volumlegemet i delens egen posisjon (Z opp): se [Eksporter for utskrift, STEP og DXF](topic:export-files#for-other-cad-programs-step).

## Begrensninger

- Lommer, konturer, boring og fasing er 2,5-akse. Buede deler grovbearbeides og finishes i 3D av sine egne operasjoner ([3D-grovbearbeiding og restbearbeiding](topic:rough-3d), [3D-finish](topic:finish-3d)). Adaptiv rydding er 2D (flate gulv).
- Vippede verktøy, finish i 5 akser og 4. akse, dreiing og probing finnes, hver med sine egne begrensninger, og **ingen av dem er kjørt på en maskin**: se [4- og 5-akse-bearbeiding](topic:multi-axis), [Dreiing](topic:turning) og [Probing](topic:probing).
- Holdere og skaft kontrolleres ikke for kollisjoner; en advarsel vises når et kutt er dypere enn sporlengden.
- Tilmating og turtall er startverdier. En post er tekst du kan redigere, men den bestemmer bare hvordan bevegelsene skrives; den kan ikke endre verktøybanen, legge til akser eller kjenne maskinen din ([Postprosessorer som kan redigeres](topic:post-processors) lister hva den ikke kan).

## Send programmet til en maskin

I CadCraft Studio på skrivebordet, med en maskin satt opp i Studio, vises **Send til en maskin…** ved siden av **Download G-code**, og det laster opp samme program til maskinen på nettverket ditt. Det startes aldri fra PartCraft: start det ved maskinen når det er klart. I en nettleser vises ikke knappen (en nettside kan ikke nå en maskin på nettverket ditt): last ned programmet i stedet.
