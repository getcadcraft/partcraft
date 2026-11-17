---
title: Frie overflader (NURBS)
summary: Glatte kurver og overflader ved siden af delen — loft, sweep, kurvenet, firkantlapper, blends, beskæringer — med G0-, G1- og G2-kontinuitet målt på de eksakte overflader, massive legemer med forening, subtraktion og skæring indbagt i delen, zebra- og krumningsvisninger, flader tilpasset en scanning med målt fejl, og STEP- eller IGES-filer. Gemt i delfilen.
keywords: nurbs, scanning, reverse engineering, tilpasning, net til overflade, punktsky, stl, beskær, beskåret, hul, udskæring, massivt legeme, massive legemer, boolean, forening, subtraktion, skæring, differens, sy, lukket, bage, frie former, fri form, overflade, overflader, b-spline, bspline, kurve, spline, loft, sweep, skinne, netværk, coons, lap, blend, match, kontinuitet, g0, g1, g2, tangent, krumning, zebra, kontrolpunkter, knuder, grad, step, iges, klasse a, skrog, udglatning
from: 64ed5196
---

**Surfaces**-arbejdsområdet laver glatte kurver og flader af den slags, der bruges til produktskaller, bilkarosserier og skibsskrog: NURBS, den samme matematik som andre overfladeprogrammer bruger. Alt måles på de eksakte flader, aldrig på de trekanter du ser. Størrelser er i millimeter, som i resten af PartCraft.

Vælg **Surfaces** i feltet **Workspace**. Værktøjslinjen har {{ui:Kurve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} og {{ui:Zebra}}; hver kommando står i panelet til højre. En kommando siger, hvad den stadig mangler: klik på kurver eller flader i visningen (tæt på en kant eller en ende, når den beder om det) eller vælg dem i listen; skriv punkter, eller klik dem på delens flader (uden for delen lander de på jordplanet), og tryk derefter på Enter.

Kurverne og fladerne gemmes i delfilen ved siden af det massive legeme. De ændrer ikke delens features: panelet har sin egen {{ui:Fortryd}} og {{ui:Gentag}}, ét trin pr. kommando.

## Kurver

- **Kurve gennem punkter** går igennem hvert punkt, du klikker. **Kurve ud fra kontrolpunkter** følger i stedet et bur af punkter.
- **Indsæt knude**, **Hæv grad** og **Sænk grad** ændrer, hvordan en kurve beskrives uden at flytte den (sænkning afvises, når kurven ville flytte sig mere end tolerancen). **Genopbyg kurve** giver den et nyt antal kontrolpunkter og siger, hvor langt den flyttede sig.
  **Match kurve** får den ene kurves ende til at møde en andens med G0 (rører), G1 (samme retning) eller G2 (samme krumning også). **Blend kurve** tilføjer en ny kurve mellem to ender, G1 eller G2.

## Flader

- **Loft** gennem to eller flere kurver, **Liniefladen** mellem to, **Ekstrudér kurve**, **Drej kurve**.
- **Sweep langs én skinne** fører en profil langs en sti uden at vride den; **Sweep langs to skinner** holder profilens ender på begge skinner. Sweeps er tilpasset: resultatet siger, hvor tæt det blev på det sande sweep.
- **Flade fra et kurvenet** går igennem et gitter af kurver (hver krydser hver af de andre én gang). **Lap fra fire kanter** fylder fire kurver, der mødes i deres hjørner.
- **Match flade** får en fladekant til at møde en nabo med G0, G1 eller G2; **Blend flade** tilføjer en flade mellem to kanter.
- **Forskudt overflade**, **Forlæng overflade** (fladen fortsætter, som den var på vej), **Genopbyg flade**.

## Kontrol af kvaliteten

Tabellen **Delte kanter** lister hver kant, to flader deler, med mellemrummet (mm), vinklen mellem dem (°) og krumningsspringet (1/mm), og om det gør den til G0, G1 eller G2. En kant, der er dårligere end du bad om, vises i **Problemer** med en rettelse **Match**.
**Zebra**-striber og **krumnings**-farver kommer fra den eksakte flade: striber, der løber ubrudt hen over en kant, betyder G1; striber, der også bevarer deres bredde, betyder G2.

G0–G2 måles i 33 punkter pr. kant. **G3 og »klasse A«-kvalitet måles ikke** og påstås ikke.

## Beskær en flade

Gruppen **Trim** skærer en flade uden at ændre dens form: fladen beholder alle sine kontrolpunkter, og kun den del inde i konturen vises, tælles og skrives. **Beskær til et rektangel** og **Beskær med en cirkel** virker på en andel (0 til 1) af fladen i hver retning, så de ikke kræver klik i visningen; **Beskær med en kurve** tager en lukket kurve, der ligger på fladen (den projiceres ind i fladen, og afvises med ord, når den er åben eller mere end tolerancen væk). Sæt kryds i **Skær et hul** for at fjerne indersiden af konturen; lad det stå tomt for kun at beholde indersiden. En flade kan have én beholdt kontur og et vilkårligt antal huller; en kontur, der krydser en anden, afvises. **Fjern beskæringen** viser hele fladen igen. Panelets Fortryd tager en beskæring tilbage, ligesom ethvert andet trin.

STEP bærer beskæringen som fladens grænser, og IGES som en beskåret flade (entity 144); begge læser den tilbage.

## Massive legemer og Booleans

Gruppen **Solids** gør flader til lukkede legemer og kombinerer dem. Et massivt legeme her er et sæt af panelets egne flader, der sammen lukker et volumen; dets flader forbliver eksakte NURBS-flader med deres beskæringer.

- **Boks-legeme**, **Cylinder-legeme** og **Kugle-legeme** laver et ud fra skrevne størrelser (i mm): en boks med seks flade flader, en cylinder med en rund side og to flade ender beskåret til cirklen, en kugle af én drejet flade.
- **Massivt legeme fra flader** grupperer flader, du selv har lavet. Vælg dem, eller vælg ingen for at bruge alle viste flader, der ikke allerede er i et legeme. De syes sammen inden for tolerancen: lukker de ikke, sker der intet, og panelet siger, hvor mange kanter der står åbne, og hvor tæt de skal mødes.
- **Forening**, **Subtraktion** (det andet massive legeme fratrækkes det første) og **Skæring** (kun det, begge deler) tager to massive legemer: klik på en flade af hvert i visningen, eller tryk **Vælg** i listen **Solids**. Sæt kryds i **Behold de to massive legemer** for at lade dem ligge ved siden af resultatet.

En Boolean beholder hver flade på sin egen eksakte flade og skærer den med nye beskæringskonturer langs skæringen. Resultatlinjen giver de målte tal: hvor langt det massive legemes punkter måtte flyttes for at ligge på de eksakte flader (aldrig mere end tolerancen), hvor tæt skæringspunkterne er på begge flader (typisk nogle få milliontedele mm), volumen, og om de nye flader lukker igen, når de syes sammen på ny ud fra deres eksakte flader. Volumener måles på trekanter inden for tolerancen (0,05 mm, medmindre du sætter en anden), så en kugles eller cylinders volumen vises en smule under det eksakte: en mindre tolerance kommer tættere på. En Boolean, der ikke kan udføres rent (legemerne deler intet, en kontur ville krydse sig selv), afvises med ord, og intet ændres. Én Boolean er ét trin i panelets **Fortryd**.

I listen **Solids** beholder **Opløs gruppen** fladerne som almindelige flader; skraldespanden fjerner det massive legeme og dets flader.

## Afrundinger og fortykkelse

**Afrundingen mellem flader** runder kanten, hvor to flader af ét massivt legeme mødes: vælg de to flader (i visningen eller med **Vælg** i listen), skriv **radius** og, for en radius, der ændrer sig langs kanten, **radius i enden** (0 holder én radius). En kugle med den radius rulles langs kanten og rører begge flader; afrundingen er den eksakte cirkelbue, den efterlader i hvert punkt, sammenføjet til én flade, og de to flader beskæres, hvor kuglen rører dem. En udvendig kant mister materiale, et indvendigt hjørne får det. Resultatlinjen giver det målte: hvor langt afrundingsfladen er fra den rullende kugle mellem de punkter, den blev bygget ud fra (punkter tilføjes, til den er inden for en fjerdedel af tolerancen), den største vinkel mellem afrundingen og hver flade langs berøringslinjerne, og de samme tal som en Forening. En radius, der ikke passer (kuglen ville forlade en flade, eller en flade krummer strammere end radius), afvises med navnet på fladen, og intet ændres.

**Afrund flere kanter** runder mange kanter i ét trin: vælg de to flader for den første kant, derefter de to flader for den næste, og så videre (en flade kan være i flere par, for eksempel boksens topflade i fire af dem); alle kanter får den radius, du skriver. Hver afrunding beregnes på det massive legeme, som det var, og de skæres derefter den ene efter den anden, så rækkefølgen ikke betyder noget. Hvor to afrundede kanter mødes i et hjørne, hvis andre kanter forbliver skarpe, løber de to afrundinger ind i hinanden langs deres skæring (en fold). Hvor tre afrundede udvendige kanter fra tre flade flader, der står vinkelret på hinanden, mødes med én radius, bliver hjørnet til ét **kugleplaster**, der tangerer alle tre afrundinger (fjern markeringen i **Hjørner** for i stedet at få det foldede hjørne); en kant skal være mindst dobbelt så lang som radius, hvor begge ender er sådanne hjørner. Resultatlinjen siger, hvor mange kanter der blev afrundet, og hvordan hjørnerne blev. Indvendige kanter kan også rundes sammen, men et resultat, der ikke lukker igen, bliver kun rapporteret (linjen siger det), så kontrollér det.

**Gør tyk til et massivt legeme** giver en flade en tykkelse: vælg den, skriv **tykkelsen**, og sæt kryds i **Anden side** for at vokse den den anden vej. Forskydningsfladen tilpasses fladen og måles mod den (resultatlinjen giver den største afvigelse fra tykkelsen); vægge følger hver kant og hver beskæringskontur. Hvis fladen krummer strammere end tykkelsen på den side, eller en anden del af den ligger tættere end tykkelsen, afvises det med navnet på fladen og stedet, og intet ændres.

## Indbag et massivt legeme i delen

**Bag** (i Surfaces-værktøjslinjen), eller **Indbag i delen** i listen **Solids**, gør det massive legeme til et legeme i delen, på samme måde som en åbnet STL bliver et: vælg det massive legeme, om det **tilføjes** til delen, **skæres** fra den eller **skæres** med den, og tolerancen (hvor langt trekanterne må være fra de eksakte flader). Det er ét trin i delens Fortryd og vises i featurelisten som en import, opkaldt efter det massive legeme. Delen beholder trekanterne, så den åbnes og genopbygges uden fladerne; det eksakte massive legeme forbliver i Surfaces, så du kan indbage det igen efter en ændring.

## Filer

Eksportér **STEP** (AP242) eller **IGES** med kurverne og fladerne præcis som de er (B-spline-kurver og -flader, intet omdannet til trekanter). Hver flade er sin egen flade med sin beskæring; et massivt legeme skrives som én lukket skal, med hver kant delt af sine to flader, som andre CAD-programmer forventer (statuslinjen siger, hvor mange massive legemer der blev sendt ud på den måde). I IGES skrives det samme massive legeme som ét manifold-massivt B-rep (entity 186 over lukket skal 514, flader 510, løkker 508, én kantliste 504 og én hjørneliste 502); et massivt legeme, hvis flader ikke parrer kant for kant, skrives som separate flader, og linjen siger det. **Import…** læser sådanne legemer tilbage som massive legemer, fra STEP og fra IGES.

## Glatte skrogkurver

**Glat** (i Surfaces-værktøjslinjen) måler hver kurve på sin eksakte form — vendepunkter (hvor den skifter fra at bøje den ene vej til den anden), den største krumning, krumningsspring ved dens knuder og dens ruhed — og bygger om dem med vendepunkter eller spring med færrest kontrolpunkter, der stadig holder sig inden for den tolerance, du angiver, og ikke tilføjer et vendepunkt. Tegn stationerne, vandlinjerne og buttocks som kurver, glat dem, og **Loft** derefter skroget gennem stationerne og kontrollér det med **Zebra**. Ikke-glatte kurver vises også i **Problemer** med en rettelse **Glat denne kurve**. En linje, der skal skifte retning (et S-formet snit), beholder det ene vendepunkt. Skroget's deplacement, centre og rettende arme kommer fra det massive legeme i delen: se hydrostatikværktøjet.

## Flader fra en scanning (reverse engineering)

Åbn delen, der holder det scannede net (en åbnet STL eller et indbagt legeme), vælg **Surfaces** i feltet **Workspace**, og vælg **Tilpas flader til scanningen** i gruppen **Scan**; delens byggede net er scanningen. Værktøjet leder efter **planer**, **cylindre**, **kugler** og **kegler** (de eksakte flader, en bearbejdet del er lavet af; hver række viser radius eller halvvinklen, det fandt); finder **afrundinger** (afrundede kanter og hjørner: en lille cylinder eller kugle, der løber tangentielt ind i to eller flere andre flader, vist med sin radius og de flader, den forbinder), **rand-afrundinger** (en torus: den afrundede kant, hvor en flad flade mødes med en cylinder eller kegle, vist med sin radius og sin ringradius) og **variable afrundinger** (en afrundet kant, hvis radius ændrer sig langs den, vist med radius i hver ende); tilpasser **ét frit plaster** til et glat, svagt buet stykke og skærer hver flade til konturen af den del af scanningen, den kom fra, så huller og hjørner bliver. Valgmuligheder: **tolerancen** (hvor langt, i mm, et scanningspunkt må være fra et plan eller en cylinder og stadig høre til den, og målet for et frit plaster), **den mindste del** (en andel af fladearealet) og **flest flader**. Den samme scanning og de samme valg giver altid de samme flader.

Resultatet er en tabel, én række pr. flade: dens type, hvor mange trekanter den kom fra, og fejlen **målt fra scanningen til fladen** (rms, den største, og andelen af punkter inden for tolerancen). De målte punkter er scanningens hjørnepunkter og midten af hver trekant. Fejlen måles ikke den anden vej (flade til scanning), så en flade, der rækker ud over scanningen, ville ikke vise det. Noten under tabellen siger også, hvor meget af arealet der var for lille til at blive tilpasset. I visningen farves scanningspunkterne efter deres **afvigelseskort**: blå på fladen, grøn halvvejs til tolerancen, rød ved tolerancen eller mere (fjern markeringen i **Vis afvigelseskortet** for at skjule det). Stykker, der foldes tilbage på sig selv (et lukket rør tilpasset med frie plastre, for eksempel), vises som ikke tilpasset, og tvinges aldrig ind i én flade.

**Sy overfladerne til et legeme** syr hver vist flade, der ikke er i et massivt legeme, til ét lukket massivt legeme. Scanningsflader mødes kun inden for scanningens egen fejl, så det prøver den mindste samlingsafstand, der lukker (aldrig mere end den **syafstand**, du angiver), og afviser med ord, når fladerne ikke lukker. Det lapper aldrig over et hul. En kasse med afrundede kanter syr sig, når dens afrundinger blev fundet som flader for sig selv; samlingsafstanden, der lukkede, står i resultatet. Det massive legeme virker derefter med Forening, Subtraktion, Skæring og **Indbag i delen**.

Hvad det ikke gør: en **rand-afrunding** (en torus) søges kun omkring aksen på en cylinder eller kegle, der allerede er fundet, og en **variabel afrunding** kun langs en nogenlunde lige kant (dens snit skæres vinkelret på én retning); andre steder kommer de ud som frie plastre, når de er glatte nok, og udelades ellers; kugler, kegler og afrundinger findes ved tilfældig stikprøvetagning, så en meget lille en (få trekanter) kan blive overset; afvigelseskortet viser afstanden fra scanningen til fladerne, ikke den anden vej; meget store scanninger (over 300.000 trekanter) afvises her. Flader fra en cylinder med fuld omdrejning skæres om huller, med sømmen lagt, hvor der ikke er et hul. Kontrollér hver flade mod din scanning, før du stoler på den.

## Ikke lavet endnu

Afrunding af kanter, der mødes i et hjørne af buede flader eller med forskellige radier (et hjørneblend), en afrunding mellem flader, der ikke mødes, en indvendig afrunding, der ender på en skrå eller buet flade, Booleans og afrundinger beregnet på fladerne uden trekanter (her arbejder legememotoren på trekanter inden for tolerancen, og hvert punkt sættes derefter tilbage på de eksakte flader), et indbagt legeme, der følger fladerne, når de ændres, beskæring af en flade med en anden flade uden for en Boolean, udfyldning af huller med mere end fire sider, projicering af kurver på flader.
