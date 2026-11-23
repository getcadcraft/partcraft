---
title: Lav værktøjsbaner og G-kode (Fremstilling)
summary: Opsæt råemne og en arbejdsoprindelse, vælg værktøjer, tilføj plan-, lomme-, kontur-, bore- og affasningsoperationer ved at vælge flader, efterbearbejd hele modellen i 3D (parallel, kamme), simulér råemnet mod modellen for gennemskæringer og cyklustid, og download G-kode fra en af de tre indbyggede poster eller en du selv redigerer.
keywords: eksakt step, step til værkstedet, arbejdskoordinater, cam-overdragelse, parallel, kamme, 3d-efterbearbejdning, efterbearbejdning, kugleformet fræser, værktøjsbibliotek, rediger post, egen post, posteditor, adaptiv, adaptiv rydning, konstant indgreb, trochoidal, hsm, højhastighedsbearbejdning, fremstilling, CAM, værktøjsbane, G-code, NC, CNC, fræser, fræsning, lomme, kontur, profil, planfræsning, bor, pekboring, G83, G81, G73, affasning, råemne, arbejdsforskydning, G54, postprocessor, GRBL, LinuxCNC, fremføring og hastighed, simulering, gennemskæring, cyklustid
from: f8a03be8
---

Fremstillingsarbejdsområdet omdanner delen til værktøjsbaner og skriver dem som G-kode. De fleste operationer er **2.5-akset** fræsning: værktøjet står lodret, vægge skæres lige ned, og bunde skæres flade. **3D-grov** og **Rest** rydder buede dele i 3D ([3D-grovbearbejdning og restbearbejdning](topic:rough-3d)); **Parallel** og **Kamme** efterbearbejder dem ([3D-efterbearbejdning](topic:finish-3d)). På en maskine med roterende akser kan enhver operation have et hældende værktøj, og to operationer flytter de roterende akser under skæringen ([4- og 5-akset bearbejdning](topic:multi-axis)). Der er operationer til en drejebænk ([Drejning](topic:turning)) og til en berøringsprobe ([Probing](topic:probing)). Den arbejder på de navngivne flader, nettet fra kernen giver delen (se [Nettet fra kernen](topic:solid-kernels)).

Labversion: kontrollér hvert program i din styrings egen simulator, og kør det først i luften over råemnet.

## Opsætning

1. Vælg **Fremstilling** i arbejdsområdeskifteren, og klik derefter {{ui:Ny opspænding}}.
2. På fanen **Opsætning** vælger du:
   - **Værktøjsakse (+Z)**: hvilken vej værktøjet peger ind i delen. Verden +Y (PartCraft's op) er standard; maskinens X er så verdens X, og maskinens Y er verdens −Z.
   - **Arbejdsoprindelse (G54)**: et hjørne eller centrum af råemnet, top eller bund, modellens topcentrum eller modellens oprindelse.
   - **Råemne**: en boks eller en cylinder, enten modellen plus forskydninger (sider, top, bund) eller en fast størrelse.
   - **Materiale** (sætter startfremføringer og -hastigheder), **posten** (styringen), maskinens maksimale spindelhastighed, eilhastighed og værktøjsskiftetid, kølemiddel og programnummer.

## Værktøjer

Fanen **Værktøjer** indeholder biblioteket: plan-, kugle- og tøndeformede endefræsere, bor, affasningsfræsere og planfræsere, hver med et T-nummer, diameter, spor og spor-længde (plus hjørneradius, spids- eller affasningsvinkel, hvor de gælder).

Mine værktøjer kan gemmes i browseren og flyttes mellem computere som en fil: se [Værktøjsbiblioteket](topic:tool-library).

Spindelhastighed og fremføring kommer fra materialet: n = 1000 × skærehastighed / (π × diameter), fremføring = n × antal spor × spånbelastning (bor: n × fremføring pr. omdrejning). Tallene er forsigtige udgangsværdier fra offentliggjorte intervaller, ikke finjusteret til din maskine; skriv din værktøjsleverandørs skærehastighed, spånbelastning, omdr./min. eller fremføring for at overstyre dem. Når hastigheden overstiger maskinens maksimum, holdes den der, og fremføringen følger med, så spånbelastningen bevares.

## Tilføj operationer

Hver værktøjslinjeknap tilføjer en operation, og hvor den har brug for geometri, begynder den at vælge: klik på flader eller kanter i visningen (klik igen for at fjerne én), og tryk derefter på {{ui:Færdig med at vælge}} eller {{key:Esc}}.

| Operation | Vælg | Hvad den gør |
|---|---|---|
| {{ui:Flade}} | intet | Zig-zag-gange hen over hele råemnet, forbi dets kanter, ned til modellens top |
| {{ui:Lomme}} | en plan bundflade, et rundt hul eller en lukket kæde af kanter | Rydder området i forskudte gange indefra og ud, ved hvert dybdeskridt; øer (flader, der står op inde i bunden) lades stå; en bund, der er åben hele vejen rundt (intet højere uden for), ryddes ud til råemnets kant |
| {{ui:Adaptiv}} | det samme som Lomme | Rydder det samme område i gange, der hver skærer en fast bredde (**Indgreb**, en brøkdel af diameteren), så skæret aldrig tager et spor i fuld bredde, heller ikke i hjørner; det går ind med en spiral og efterbearbejder væggene på hvert niveau. Smalle snit tillader et dybere dybdeskridt og en højere fremføring |
| {{ui:Kontur}} | en plan flade (dens kontur), en rund flade eller kanter | Følger konturen forskudt med værktøjsradius, udvendigt eller indvendigt, med ind- og udløbsbuer og valgfrie tabs |
| {{ui:Bor}} | huller (klik på hullets væg eller dets rand) | Borer hvert hul med en fast cyklus: pekboring (G83), boring (G81) eller spånbrud (G73); eller angiv en diameter for at bore alle huller af den størrelse |
| {{ui:Affas}} | en flades kontur eller kanter | Kører en affasningsfræser langs kanten, så den skærer den bredde, du har angivet |
| {{ui:Parallel}} | intet (hele modellen) | 3D-efterbearbejdning i parallelle linjer i enhver vinkel, der følger overfladen med en kugle-, tønde- eller planfræser. Se [3D-efterbearbejdning](topic:finish-3d) |
| {{ui:Kamme}} | intet (hele modellen) | 3D-efterbearbejdning i gange med en fast afstand hen over overfladen, så kammen mellem dem får den højde, du angiver |

Vælg en operation i listen for at ændre dens værktøj, højder (frigang, tilbagetrækning, fremføringshøjde, top, bund), dybdeskridt, skridafstand, efterladt materiale, efterbearbejdningsgang, indgang (spiral, rampe eller stødboring), medløbsfræsning, tabs eller cyklus. {{ui:Op}} og {{ui:Ned}} ændrer rækkefølgen, {{ui:Undertryk}} udelader den, og {{ui:Slet}} fjerner den. Alt er med i fortrydelseshistorikken og gemt i delfilen.

En lommes skridafstand er højst halvdelen af værktøjsdiameteren, så hvert punkt på dens bund ligger inden for én værktøjsradius af en gang. Indvendige hjørner beholder værktøjets radius.

**Adaptiv rydning** holder skærets indgreb tæt på én værdi. Et indgreb på 0.15 af diameteren er en indgrebsvinkel på ca. 46°: buen af skærets kant i materialet. En forskudt lomme skærer derimod i fuld bredde på sin første gang og vikler længere rundt i hvert indvendigt hjørne. Mellem gangene står værktøjet nede, hvor det bevæger sig gennem skåret luft, og løfter og sænker sig i skåret luft andre steder. Gangene beregnes på et fint gitter over området (celler på ca. en tolvtedel af værktøjsradius), så indgrebet kan løbe op til ca. en celle bredere end sat; væggene efterbearbejdes nøjagtigt. Et stort åbent område giver et langt program med mange korte bevægelser.

## Simulér

Værktøjsbaner genberegnes efter hver ændring (det gælder også delen). {{ui:Simulér}} viser også råemnet, der er tilbage efter hele programmet. Panelet viser:

- **Cyklustid**: fremføringsbevægelser med deres fremføring, eilgang som lige linjer med opspændingens eilhastighed, plus værktøjsskiftetiden. Rigtige maskiner accelererer, så de tager længere tid.
- **Gennemskæringer**: steder, hvor værktøjet gik mere end 0.02 mm under delens overflade. Røde markeringer viser dem i visningen.
- **Råemne tilbage på delen**.

Råemnet er et højdekort over toppen (et Z-kort), så det kan ikke vise undersnit. Træk i **Afspilning** for at flytte værktøjet langs programmet. I visningen er fremføringsbevægelser fulde og eilgang stiplet, med én farve pr. operation.

Med **Vis det simulerede råemne** slået til farves råemnet i forhold til modellen, celle for celle: **grønt**, hvor det er på modellen (inden for 0.02 mm), **rødt**, hvor værktøjet skar ind i modellen, og hvor råemne er tilbage på modellen: **gult** for en tynd hinde, **orange** for mere, toner over til det **grå** af uskåret råemne ved 1 mm eller mere. Farverne genberegnes ved hver ændring, ud fra det samme højdekort som tallene i panelet, så grønt og rødt stemmer overens med linjen Gennemskæringer. En affasning skærer med vilje ind i modellen og viser rødt langs sin kant.

## Post G-koden

Vælg styringen under **Post**, og tryk på {{ui:Download G-kode}} (eller {{ui:Post}} på værktøjslinjen):

| Styring | Fil | Noter |
|---|---|---|
| Fanuc-lignende ISO | .nc | %, O-nummer, linjenumre, T M6 med G43 H, faste cyklusser |
| GRBL | .nc | Ingen værktøjsskifter eller faste cyklusser: et værktøjsskift holder pause med M0, og boring skrives som almindelige bevægelser |
| LinuxCNC | .ngc | T M6 med G43 H, faste cyklusser, M2 |
| Fanuc-lignende drejebænk | .nc | Til drejeprogrammer: X som diameter, fremføring pr. omdrejning, G96 under en G50-grænse, G32-gevindskæring |
| LinuxCNC-drejebænk | .ngc | Til drejeprogrammer: G7-diametre, G95, G96, G33-gevindskæring; skriver ingen referencekørsel |
| Din egen | enhver | En post, du har skrevet eller ændret: {{ui:Rediger post…}}, {{ui:Ny post…}}, {{ui:Importér postfil…}} |

Hver fil starter med kommentarer om programmet, råemnet, arbejdsforskydningen og værktøjerne. Koordinater er i millimeter med 3 decimaler. {{ui:Toolpath CSV}} og {{ui:Toolpath JSON}} eksporterer selve bevægelserne.

**Kontrollér outputtet i din maskines egen simulator, før du skærer, og kør det først i luften over råemnet.** De tre indbyggede poster er udgangspunkter, der følger styringernes dokumenterede adfærd; de er ikke afprøvet på en bestemt maskine. En post, du ændrer, er din egen at dokumentere. Sådan skriver du en: [Postprocessorer](topic:post-processors).

## Eksakt STEP til værkstedet

Under G-kode-knapperne på fanen **Operationer** henter {{ui:Eksakt STEP (arbejdskoordinater)}} `<part>-work.step`: delen som et eksakt massivt legeme (ægte cylindre til huller og udhævninger, ægte cirkler til deres kanter) med sin oprindelse i denne opsætnings arbejdsoprindelse og Z langs værktøjsaksen. Det er de koordinater, G-koden bruger, så et værksteds eget CAM-program eller kontrolprogram flugter modellen med programmet uden at flytte den. Filen indeholder kun delen, ikke råemnet eller værktøjsbanerne.

{{ui:Eksportér}} › {{ui:STEP AP242 (eksakt massivt legeme)}} skriver det samme legeme i delens egen position (Z op): se [Eksport til print, STEP og DXF](topic:export-files#for-other-cad-programs-step).

## Begrænsninger

- Lommer, konturer, boring og affasninger er 2.5-akset. Buede dele grovbearbejdes og efterbearbejdes i 3D af deres egne operationer ([3D-grovbearbejdning og restbearbejdning](topic:rough-3d), [3D-efterbearbejdning](topic:finish-3d)). Adaptiv rydning er 2D (flade bunde).
- Hældende værktøjer, 5-akset og 4.-akset efterbearbejdning, drejning og probing findes, hver med sine egne begrænsninger, og **ingen af dem er kørt på en maskine**: se [4- og 5-akset bearbejdning](topic:multi-axis), [Drejning](topic:turning) og [Probing](topic:probing).
- Holdere og skafter kontrolleres ikke for kollision; en advarsel vises, når et snit er dybere end spåntlængden.
- Fremføringer og hastigheder er udgangsværdier. En post er tekst, du kan redigere, men den bestemmer kun, hvordan bevægelserne skrives; den kan ikke ændre værktøjsbanen, tilføje akser eller kende din maskine ([Postprocessorer](topic:post-processors) lister, hvad den ikke kan).

## Send programmet til en maskine

I CadCraft Studio på skrivebordet, med en maskine sat op i Studio, vises **Send til en maskine…** ved siden af **Download G-kode** og uploader det samme program til maskinen på dit netværk. Det startes aldrig fra PartCraft: start det ved maskinen, når det er klart. I en browser vises knappen ikke (en webside kan ikke nå en maskine på dit netværk): download programmet i stedet.
