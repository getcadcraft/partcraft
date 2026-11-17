---
title: Lav værktøjsbaner og G-kode (Manufacture)
summary: Opsæt råemne og et arbejdsnulpunkt, vælg værktøjer, tilføj flade-, lomme-, kontur-, bore- og affasningsoperationer ved at vælge flader, færdiggør hele modellen i 3D (parallel, kamme), simulér råemnet mod modellen for fejlskæringer og cyklustid, og download G-kode fra en af tre indbyggede poster eller en, du selv redigerer.
keywords: eksakt STEP, STEP til værkstedet, arbejdskoordinater, CAM-overdragelse, parallel, kamme, 3D-efterbehandling, efterbehandling, kugleformet, værktøjsbibliotek, rediger post, brugerdefineret post, post-editor, adaptiv, adaptiv skrubning, konstant indgreb, trochoidal, hsm, højhastighedsbearbejdning, manufacture, CAM, værktøjsbane, G-kode, NC, CNC, fræser, fræsning, lomme, kontur, profil, planfræsning, bor, pecking, G83, G81, G73, affasning, råemne, arbejdsforskydning, G54, post-processor, GRBL, LinuxCNC, tilspænding og hastigheder, simulering, fejlskæring, cyklustid
from: beeb29aa
---

Arbejdsområdet Manufacture omdanner delen til værktøjsbaner til en 3-akset fræsemaskine og skriver dem som G-kode. De fleste operationer er **2.5-akset**: værktøjet står lodret, vægge skæres lige nedad, og gulve bliver flade. **Parallel** og **Kamme** efterbehandler buede flader i 3D (se [3D-efterbehandling](topic:finish-3d)); værktøjet står stadig lodret (tre akser, ingen vipning). Det arbejder på de navngivne flader, som net-kernen giver delen (se [Net-kernen](topic:solid-kernels)).

Testbygning: kontrollér hvert program i din styrings egen simulator, og kør det først i luften over råemnet.

## Opsæt

1. Vælg **Manufacture** i arbejdsområdeskifteren, og klik derefter på {{ui:Ny opspænding}}.
2. På fanen **Opsætning** vælger du:
   - **Værktøjsakse (+Z)**: hvilken vej værktøjet peger ind i delen. Verdens +Y (PartCraft's op) er standard; maskinens X er da verdens X, og maskinens Y er verdens −Z.
   - **Arbejdsnulpunkt (G54)**: et hjørne eller centrum af råemnet, top eller bund, modellens øverste midtpunkt, eller modellens nulpunkt.
   - **Råemne**: en boks eller en cylinder, enten modellen plus forskydninger (sider, top, bund) eller en fast størrelse.
   - **Materiale** (sætter de startende tilspændinger og hastigheder), **Post** (styringen), maskinens maksimale spindelhastighed, ilgangshastighed og værktøjsskiftetid, kølevæske og programnummeret.

## Værktøjer

Fanen **Værktøjer** indeholder biblioteket: plan-, kugle- og rundnæsede endefræsere, bor, affasningsfræsere og planfræsere, hver med et T-nummer, diameter, skær og skærlængde (plus hjørneradius, spids- eller affasningsvinkel, hvor de gælder).

Mine værktøjer kan gemmes i browseren og flyttes mellem computere som en fil: se [Værktøjsbiblioteket](topic:tool-library).

Spindelhastighed og tilspænding kommer fra materialet: n = 1000 × skærehastighed / (π × diameter), tilspænding = n × skær × spånbelastning (bor: n × tilspænding pr. omdrejning). Tallene er konservative startværdier fra offentliggjorte intervaller, ikke tilpasset din maskine; skriv din værktøjsproducents skærehastighed, spånbelastning, o/min eller tilspænding for at tilsidesætte dem. Når hastigheden overstiger maskinens maksimum, holdes den der, og tilspændingen følger med, så spånbelastningen bevares.

## Tilføj operationer

Hver knap på værktøjslinjen tilføjer en operation, og hvor den har brug for geometri, starter den valg: klik på flader eller kanter i visningen (klik igen for at fjerne en), og derefter {{ui:Færdig med at vælge}} eller {{key:Esc}}.

| Operation | Vælg | Hvad den gør |
|---|---|---|
| {{ui:Flade}} | intet | Zigzag-gange over hele råemnet, forbi dets kanter, ned til modellens top |
| {{ui:Lomme}} | en plan bundflade, et rundt hul, eller en lukket kæde af kanter | Rydder området i forskudte gange, indefra og ud, ved hvert dybdetrin; øer (flader, der står op inde i bunden) efterlades; en bund, der er åben hele vejen rundt (intet højere udenfor), ryddes ud til råemnets kant |
| {{ui:Adaptiv}} | det samme som Lomme | Rydder det samme område i gange, der hver skærer en fast bredde (**Indgreb**, en brøkdel af diameteren), så skæreren aldrig tager et fuldbredde-spor, heller ikke i hjørner; den går ind med en spiral og efterbearbejder væggene på hvert niveau. Smalle snit tillader et dybere dybdetrin og en højere tilspænding |
| {{ui:Kontur}} | en plan flade (dens kontur), en rund flade, eller kanter | Følger konturen forskudt med værktøjsradius, udvendigt eller indvendigt, med ind- og udkørselsbuer og valgfrie tapper |
| {{ui:Bor}} | huller (klik på et hullets væg eller dets kant) | Borer hvert hul med en fast cyklus: pecking (G83), boring (G81) eller spånbrud (G73); eller angiv en diameter for at bore alle huller af den størrelse |
| {{ui:Affas}} | en flades kontur eller kanter | Kører en affasningsfræser langs kanten, så den skærer den bredde, du angiver |
| {{ui:Parallel}} | intet (hele modellen) | 3D-efterbehandling i parallelle linjer i en hvilken som helst vinkel, der følger overfladen med en kugle-, rundnæset eller planfræser. Se [3D-efterbehandling](topic:finish-3d) |
| {{ui:Kamme}} | intet (hele modellen) | 3D-efterbehandling i gange med en fast afstand over overfladen, så kammen mellem dem får den højde, du beder om |

Vælg en operation i listen for at ændre dens værktøj, højder (frigang, tilbagetrækning, tilspændingshøjde, top, bund), dybdetrin, sidetrin, råemne der skal efterlades, efterbearbejdningsgennemløb, indgang (spiral, rampe eller dykning), medløbsfræsning, tapper eller cyklus. {{ui:Op}} og {{ui:Ned}} ændrer rækkefølgen, {{ui:Undertryk}} udelader den, og {{ui:Slet}} fjerner den. Alt er i fortrydelseshistorikken og gemt i delfilen.

Et lommes sidetrin er højst halvdelen af værktøjets diameter, så ethvert punkt på bunden ligger inden for én værktøjsradius af en gang. Indvendige hjørner beholder værktøjets radius.

**Adaptiv skrubning** holder skærerens indgreb tæt på én værdi. Et indgreb på 0.15 af diameteren er en indgrebsvinkel på cirka 46°: buen af skærerens kant i materialet. En forskudt lomme skærer til gengæld fuld bredde på sin første gang og drejer længere rundt i hvert indvendigt hjørne. Mellem gangene bliver værktøjet nede, hvor det bevæger sig gennem skåret luft, og løfter og sænker sig i skåret luft ellers. Gangene beregnes på et fint gitter over området (celler på cirka en tolvtedel af værktøjsradius), så indgrebet kan løbe op til cirka en celle bredere end indstillet; væggene efterbearbejdes præcist. Et stort åbent område giver et langt program med mange korte bevægelser.

## Simulér

Værktøjsbaner laves igen efter hver ændring (også delens). {{ui:Simulér}} viser også råemnet, der er tilbage efter hele programmet. Panelet viser:

- **Cyklustid**: tilspændingsbevægelser med deres tilspænding, ilgang som rette linjer med opsætningens ilgangshastighed, plus værktøjsskiftetiden. Rigtige maskiner accelererer, så de tager længere tid.
- **Fejlskæringer**: steder, hvor værktøjet gik mere end 0.02 mm under delens overflade. Røde markeringer viser dem i visningen.
- **Råemne tilbage på delen**.

Råemnet er et højdekort over toppen (et Z-kort), så det kan ikke vise undersnit. Træk **Afspilning** for at flytte værktøjet langs programmet. I visningen er tilspændingsbevægelser fuldt optrukne og ilgang stiplet, én farve pr. operation.

Med **Vis det simulerede råemne** slået til farves råemnet i forhold til modellen, celle for celle: **grøn** hvor det er på modellen (inden for 0.02 mm), **rød** hvor værktøjet skar ind i modellen, og hvor der er råemne tilbage på modellen **gul** for en tynd hinde, **orange** for mere, toning over til **grå** for uskåret råemne ved 1 mm eller mere. Farverne laves igen ved hver ændring, ud fra samme højdekort som tallene i panelet, så grøn og rød stemmer med linjen Fejlskæringer. En affasning skærer med vilje ind i modellen og viser rødt langs sin kant.

## Post G-koden

Vælg styringen under **Post**, og tryk på {{ui:Download G-kode}} (eller {{ui:Post}} på værktøjslinjen):

| Styring | Fil | Noter |
|---|---|---|
| Fanuc-lignende ISO | .nc | %, O-nummer, linjenumre, T M6 med G43 H, faste cyklusser |
| GRBL | .nc | Ingen værktøjsskifter eller faste cyklusser: et værktøjsskifte stopper med M0, boring skrives som almindelige bevægelser |
| LinuxCNC | .ngc | T M6 med G43 H, faste cyklusser, M2 |
| Din egen | enhver | En post, du har skrevet eller ændret: {{ui:Rediger post…}}, {{ui:Ny post…}}, {{ui:Importér postfil…}} |

Hver fil starter med kommentarer til programmet, råemnet, arbejdsforskydningen og værktøjerne. Koordinater er i millimeter med 3 decimaler. {{ui:Værktøjsbane-CSV}} og {{ui:Værktøjsbane-JSON}} eksporterer selve bevægelserne.

**Kontrollér outputtet i din maskines egen simulator, før du skærer, og kør det først i luften over råemnet.** De tre indbyggede poster er udgangspunkter, der følger styringernes dokumenterede adfærd; de er ikke bevist på nogen bestemt maskine. En post, du ændrer, er din at bevise. Sådan skriver du en: [Post-processorer](topic:post-processors).

## Eksakt STEP til værkstedet

Under G-kode-knapperne på fanen **Operationer** downloader {{ui:Eksakt STEP (arbejdskoordinater)}} `<part>-work.step`: delen som et eksakt massivt legeme (rigtige cylindre til huller og fremspring, rigtige cirkler til deres kanter) med sit nulpunkt i opsætningens arbejdsnulpunkt og Z langs værktøjsaksen. Det er de koordinater, G-koden bruger, så et værksteds eget CAM-program eller kontrolprogram stiller modellen op i forhold til programmet uden at flytte den. Filen indeholder kun delen, ikke råemnet eller værktøjsbanerne.

{{ui:Eksportér}} › {{ui:STEP AP242 (eksakt massivt legeme)}} skriver det samme legeme i delens egen position (Z op): se [Eksport til print, STEP og DXF](topic:export-files#for-other-cad-programs-step).

## Begrænsninger

- Lommer, konturer, boring og affasninger er 2.5-akset. Buede flader kan efterbehandles i 3D ([parallel og kamme](topic:finish-3d)), men ikke grovbearbejdes i 3D (en kegle efterlades som trin, indtil du efterbehandler den), og der er ingen restbearbejdning. Adaptiv skrubning er 2D (flade bunde).
- Kun tre akser: ingen vipning, ingen drejning, ingen kontrol.
- Holdere og skafter kontrolleres ikke for kollisioner; en advarsel vises, når et snit er dybere end skærlængden.
- Tilspændinger og hastigheder er startværdier. En post er tekst, du kan redigere, men den bestemmer kun, hvordan bevægelserne skrives; den kan ikke ændre værktøjsbanen, tilføje akser eller kende din maskine ([Post-processorer](topic:post-processors) lister, hvad den ikke kan).

## Send programmet til en maskine

I CadCraft Studio på desktop, med en maskine sat op i Studio, vises **Send til en maskine…** ved siden af **Download G-kode**, og det uploades det samme program til maskinen på dit netværk. Det startes aldrig fra PartCraft: start det ved maskinen, når det er klart. I en browser vises knappen ikke (en webside kan ikke nå en maskine på dit netværk): download programmet i stedet.
