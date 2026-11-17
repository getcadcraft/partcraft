---
title: Hvad der endnu ikke er lavet
summary: Alt det, denne PartCraft-version endnu ikke gør: fra snoede sweeps til visning i tommer, tegnemål og underenheder, og hvad du gør i stedet i dag.
keywords: manglende, endnu ikke, begrænsninger, begrænsning, køreplan, eksakt kerne, afrundning, affasning, skal, sweep, loft, STEP-import, simulering, manufacture, snoet sweep, loft-endetangens, fladeafrundinger, ligninger, tommer, tegnemål, underenheder, sky, tablet, telefon
from: 9b868162
---

PartCraft er en tidlig udgave. Denne side viser, hvad den endnu ikke gør, så du ikke leder efter det, og hvad du gør i stedet i dag. Intet her har en dato.

## Kræver en eksakt kerne

Denne version bygger alle dele med netkernen (se [Netkernen](topic:solid-kernels)). Alt nedenfor kræver en eksakt geometrikerne, som denne version endnu ikke har. Dele gemt med disse features kan stadig åbnes: features bliver i historikken, markeret som ikke lavet, og de bevares, når du gemmer.

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| {{ui:Afrund}} og {{ui:Affas}} på runde kanter; afrundinger, hvis radius ændrer sig langs kanten; runder, der glattes ud, hvor de mødes (netkernen laver dem som skårne hjørner) | Afrund og Affas virker på lige kanter mellem flade flader; afrund andre hjørner i skitsen, før du ekstruderer ({{ui:Afrund}} i en skitse, {{key:F}}) |
| {{ui:Skal}} der åbner buede flader; vægge med forskellige tykkelser | Åbn flade flader; tilføj materiale med ekstruderinger, hvor en væg skal være tykkere |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Udtræksvinkel}} på buede flader; ekstrudering op til en flade, den næste flade eller et hjørnepunkt; koniske ekstruderinger | Ekstrudér eller drej, i trin hvor det er nødvendigt; ekstrudér til en dybde, du har målt |
| {{ui:Ribbe}}, {{ui:Basisflange}}, {{ui:Kantflange}} og fladmønstre | Ekstrudér pladen eller ribbens profil |
| Flader: afslutning af en {{ui:Form}} i delen, {{ui:Lap}}, {{ui:Loft-overflade}}, {{ui:Gordon-overflade}}, {{ui:Sy sammen}}, {{ui:Gør tyk}}, {{ui:Forskudt overflade}}, {{ui:Forlæng overflade}}, {{ui:Beskær overflade}} | Ikke tilgængelig |
| Flere legemer: {{ui:Kombinér}}, {{ui:Flyt legeme}}, {{ui:Skalér legeme}}, {{ui:Stimønster}}, features der laver et nyt legeme | Ét massivt legeme; mønstre og spejling kopierer features |
| Skitser, planer, akser og punkter på flader, som kun en eksakt kerne kan finde (en flade lavet af en afrunding, en hulvæg, en flade på et importeret massivt legeme) | Skitsér på grundplaner, referenceplaner og de flade flader på ekstruderinger og drejninger |
| Et resultat fra generativt design åbnet som del eller tilføjet til den (det bliver et importeret massivt legeme) | Hent resultatet som STL eller STEP |
| Redigering af en åbnet STEP-fil's buede flader som eksakte overflader; eksakt STEP af spline-, sweepede og drejede flader fra en STEP-fil, spline-sider, modellerede gevind, STL-/OBJ-/3MF-legemer og samlinger; STEP til andre delmodelleringsværktøjer | {{ui:Åbn}} læser STEP som trekanter og bevarer filens flade flader, cylindre, kegler, kugler og torusser til eksporten ([Åbn en STEP-fil](topic:import-step)); {{ui:Eksportér}} › {{ui:STEP AP242 (eksakt massivt legeme)}} skriver hver analytisk flade eksakt og bevarer dem som facetter ([Eksportér](topic:export-files#for-other-cad-programs-step)); makroen til et andet delmodelleringsprogram skriver stadig |
| Ægte buer i tegningsvisninger | Visninger og snitvisninger tegnes ud fra facetterne |
| Eksakte volumener, arealer og afstande | {{ui:Mål}} giver tallene for det facetterede massive legeme, en smule for lave på runde dele; en finere **Kurver**-indstilling bringer dem tættere på |

Nogle rækker i tabellerne nedenfor foreslår en af disse features som vej uden om noget andet. Disse forslag gælder, når en eksakt kerne er tilbage.

## Features

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Fladeafrundinger, helrunde afrundinger, afrundinger med radier sat i punkter langs en kant | Konstant eller lineært variabel {{ui:Afrund}}; flere afrundingsfeatures |
| Skaller med forskellige vægtykkelser | Én {{ui:Skal}}-tykkelse; tilføj materiale med ekstruderinger, hvor en væg skal være tykkere |
| Udtræksvinkel på frie (spline-) flader | {{ui:Udtræksvinkel}} virker på flade, cylindriske og koniske flader |
| Snoede sweeps, tyndvægs- og overfladesweeps; endetangens på Loft-featuren; et loft med én styreskinne; spline-stier | {{ui:Sweep}} med fast orientering eller en endeskala; et loft med to eller flere styreskinner: se [Sweep, loft og udtræksvinkel](topic:sweep-loft-draft) |
| Ribber fra buer eller splines; ribber vokset vinkelret på skitsen (fra en topvisning); udtræksvinkel på ribber; flere ribber fra én skitse | {{ui:Ribbe}} fra én kæde af linjer i ribbens eget plan: se [Ribber og knæplader](topic:rib) |
| »Op til« en buet overflade, »op til næste« der stopper ved en buet flade | Op til en flad flade eller en referenceplan |
| Modborede huller, tommer- og rørgevind, koniske gevind, gevindudløb og affasede gevindstarter | Forsænkning med en lille dybde; ISO-metriske og trapezgevind, kosmetiske eller modellerede: se [Gevind på aksler og boringer, tegnet eller modelleret](topic:threads) |
| Tyndfeature-ekstruderinger | Tegn begge vægge i profilen |
| Mønsterkopier, der springes over én for én; udfyldningsmønstre | Brug særskilte features; mønstre langs en kurve: {{ui:Stimønster}} |
| Kopiering af mønstre, spejlinger, afrundinger, affasninger, skaller og importerede massive legemer | Kopiér skitsen eller featuren, de er bygget på, eller lav et mønster af den |
| Eksakt (G1) tangens i en forms særlige punkter; sammenlægning af en forms lapper til større flader | Hæv formens niveau: de tilnærmede lapper bliver mindre; se [Frie former med Form](topic:form-surfaces) |
| En form lavet af flere adskilte lukkede stykker i én feature; broer mellem former | Ét lukket stykke pr. Form-feature; sammenføj dem med Sammenføj |
| Valg af overfladelegemer i visningen (undtagen beskæringspunkter og lappunkter); fladeafrundinger; fjern beskæring; G2-lapper; Gordon-overflader tangentielle til buede naboer (tangent til planer og flade flader er lavet) | Vælg dem ved navn i featurens panel; {{ui:Gør tyk}} først, og afrund derefter det massive legeme |
| En liste over legemer i historikken; udeladelse af skjulte legemer fra eksporter | Omdøb og skjul legemer i delpanelets legemeliste; slet eller undertryk featuren, der lavede et legeme, for at udelade det |
| En ikke-ensartet skalering, der holder cylindre og kegler analytiske; ikke-ensartet skalering af forskudte overflader | {{ui:Skalér legeme}} gør buede flader til lukkede B-splines (inden for 0.0000004 mm); en ensartet skalering forbliver eksakt |
| Sammenlægning af overfladelegemer; Minkowski-summer | {{ui:Sy sammen}} eller {{ui:Gør tyk}} først, derefter {{ui:Kombinér}} |
| Tolerancanalyse: tolerancekæder, der drejer om hjørner (2D- og 3D-vektorløkker), følsomheder beregnet ud fra geometrien, Monte Carlo med andre fordelinger, størrelsestolerancer på skitsemål, bonustolerance fra materialets tilstand | {{ui:Tolerancekæde}} i en samling: én retning, worst case og RSS, tolerancer indtastet, fra tegningshovedets generelle tolerance eller fra GD&T-rammer: se [Tolerancekæder](topic:tolerance-stackup) |
| Nesting: skærerækkefølge og indkørsler, skæring af fælles kanter én gang, dele der skal holdes sammen; rester af ruller, lager delt mellem projekter | {{ui:Nest plane dele på plader…}} med afstand, margener, drejninger og trådretning: se [Nest plane dele på plader](topic:nest-flat-parts); resterende plader gemmes og bruges først: se [Gem og genbrug rester](topic:nest-offcuts); planlæg skæringen i din skæremaskines eget program |
| Pladeemne: sømme, forskydninger, skårne og konturflanger; flanger på buede kanter eller på flader af en bøjet basisflange; skitserede bøjninger; hjørnelukninger; formeværktøj; konvertering af et massivt legeme til pladeemne; fladen af en bøjet basisflange med udskæringer i; bøjetabeller | {{ui:Basisflange}} (en plade eller en bøjet profil), {{ui:Kantflange}} på en plades lige kanter med bøjningsudløb, og fladmønsteret med en K-faktor: se [Pladeemne](topic:sheet-metal) |
| Udtræksanalyse på samlinger; find skillelinjen; analyse af vægtykkelse | {{ui:Udtræksanalyse}} på delen i Design: se [Kontrollér udtræksvinkel til formning og støbning](topic:draft-analysis); åbn hver del i en samling for at kontrollere den |

## Skitser

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Ellipser, tangentbuer, koniske snit, splines med fast grad eller vægte (NURBS) | Splines (kubiske), buer og cirkler med tangentrelationer |
| Et punkt på en spline (en relation), krumningsrelationer (G2) | Placér splinens eget punkt, hvor den skal gå igennem |
| Forskudte kopier af splines, der følger senere ændringer; forskydninger af kæder med skarpe spline-hjørner | Forskyd igen efter ændringen; afrund hjørnet først |
| Mønsterkopier, der forbliver koblet til originalen; mønstre langs en kurve | Lav mønsteret igen efter en ændring |
| Projektion af frie eller skrå cirkulære kanter; projiceret geometri, der følger delen | Projicér lige og parallelle cirkulære kanter, og sæt derefter mål |
| Styrede (reference-)mål | Læs størrelser fra panelet eller delens fakta |
| Kollineære relationer | Parallel med en afstand på 0 |
| Indsættelse i et andet program (systemets udklipsholder) | Eksportér DXF, STEP, STL eller 3MF |
| Indtastning af buer, relative eller polære koordinater | Indtast linjer og cirkler; tegn buer med værktøjet Bue |
| Valg af geometri uden en pegeenhed | Kræver et klik eller et tryk |

## Parametre og enheder

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Konfigurationer, der ændrer materialer; en CSV-designtabel, der slår features fra | Konfigurationer sætter parametre og slår features til og fra: se [Konfigurationer og designtabeller](topic:design-tables); `partcraft variants` bygger gemte konfigurationer efter navn, også med features slået fra: se [Lav en variantpakke af dine konfigurationer](topic:variant-pack) |
| Ligninger på tallene i de nyeste features' egne paneler (plan, sweep, udtræksvinkel og lignende) | Skriv dem i et script eller med `partcraft set` ([Scripts og kommandolinjen](topic:scripts-and-cli)) |
| En del vist i tommer | Størrelser vises i millimeter; skriv `2in` i et talfelt eller et udtryk, og det bliver 50.8 |

## Filer

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Redigering af et importeret STEP-massivt legemes egne features (det kommer uden historik) | Tilføj eller skær materiale med dine egne features |
| Læsning af farver, navne, samlingsstruktur og PMI fra STEP | Ikke tilgængelig |
| Eksport af glTF, OBJ, IGES, Parasolid-eksport; DWG af en 3D-del (kun variantpakken skriver en DWG: tegningsarket) | STL eller 3MF til net; STEP til massive legemer; DXF til 2D |
| Åbning af IGES, DXF eller andre programmers egne filer (`.3dm`-filer åbnes som ét legeme: [Åbn en .3dm-model som massivt legeme](topic:open-3dm-files)) | Bed om STEP, eller et lukket STL-, OBJ- eller 3MF-net: [Åbn en STL, OBJ eller 3MF](topic:open-meshes) |
| Samlingsstruktur (et træ med delnavne) i eksporteret STEP | Samlings-STEP er ét sammensat legeme af de placerede massive legemer |
| Gem i en mappe efter eget valg uden browserens download | Slå »spørg, hvor der skal gemmes« til i browserens downloadindstillinger |

## Tegninger

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Mål ud over de tre samlede størrelser (hulstørrelser, positioner, tolerancer på mål) | Markér PDF'en, eller eksportér DXF og sæt mål på den i et 2D-CAD-program |
| Mere end ét snit eller én detalje; justerede, udbrudte og hjælpevisninger | Ét snit og én detalje pr. tegning |
| Fri tekst, noter og tabeller på arket (ud over tegningshovedet og revisionsblokkene) | Noten om overfladebehandling, eller tekst tilføjet på PDF'en |
| Førstevinkelprojektion, flytbare visninger, stående ark | Tredjevinkel, automatisk layout, liggende ark A4–A0 og ANSI A–E |
| Live snitvisning: flere planer eller en snitboks på én gang, en kontur om snittet, gemning af snittet i filen | Ét plan ad gangen fra {{ui:Visninger}} › {{ui:Snitvisning}}; se [Kig ind med en snitvisning](topic:section-view) |
| Samlingstegninger med flere visninger, mål eller balloner, du kan flytte | Én isometrisk (eller sprængt) visning med automatiske balloner og stykliste |
| Kopiering og indsættelse af GD&T- og overfladesymboler | Placér hver med Datum, Ramme eller Overfladebehandling |
| Manualer: STEP-filer i Illustrates {{ui:Fra en anden fil…}}, en model givet direkte fra ModelCraft eller BimCraft, billeder i path tracerens kvalitet, interaktiv 3D i en PDF | Åbn STEP'en i Design og start manualen {{ui:Fra den åbne del}}; gem modellen som glTF (.glb); PNG-billeder af 3D-visningen; 3D-filen med interaktivitet: se [Start en manual i Illustrate](topic:illustrate) |

## Samlinger

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Tandhjul-, tandstang-, knast- og skrueled; en kugleled begrænset til en kegle; led på buede flader eller mellem punkter | Stive, drejelige, skydende, cylindriske, plane, kugle- og tap-i-spor-led på flade flader, hver værdi med egne grænser: se [Byg en samling](topic:build-assembly) |
| Sprængtrin, der drejer dele, og træk i dele, som led placerer | Lige sprængtrin; fjern et led for at flytte en del i hånden |
| Underenheder | Kun ét niveau af dele |
| Tandhjul, knaster, kontakt | Ikke tilgængelig |

## Manufacture

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| 3D-grovbearbejdning af buede flader, 3D-adaptiv skrubning, restbearbejdning; vandlinje-, blyant-, radial- og spiralefterbearbejdning; adaptive baner skrevet som buer | 2.5-akset flade, lomme, 2D-adaptiv, kontur, bor og affasning: se [Lav værktøjsbaner og G-kode](topic:manufacture); Parallel og Scallop-efterbearbejdning af hele modellen: se [3D-efterbearbejdning](topic:finish-3d) |
| 4- og 5-akset værktøjsbaner, drejning, probning | Opsæt én side ad gangen med værktøjsaksen på fanen Opsætning |
| Kollisionskontrol for holder og skaft | Hold øje med advarslerne om spånrumslængde, og kontrollér i din styrings simulator |
| Probning, værktøjslevetid- og underprogramcyklusser, 4. og 5. akse- og drejebænkskoder i en post; indlæsning af andre programmers postfiler | Skriv eller ændr en post i PartCraft's eget format: se [Postprocessorer du kan redigere](topic:post-processors) |
| G-kode i tommer (G20) | Kun millimeter (G21) |

## Simulering og generativt design

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Ikke-lineære studier: flydning, store udbøjninger, kontakt mellem dele, udmattelse | Lineær statik og egenfrekvenser: se [Kontrollér spænding og udbøjning](topic:simulation); hold sikkerhedsfaktoren godt over 1 |
| Ikke-lineær knækning (imperfektioner, efterknækning, snap-through) | Lineære knæklastfaktorer med en rummelig margen: se [Varme, termisk spænding og knækning](topic:thermal-and-buckling) |
| Stråling mellem flader (synsfaktorer), kontaktmodstand, temperaturafhængige materialer, inerti i termisk spænding (termiske stødbølger) | Stråling til omgivelserne, stationær eller kvasi-statisk termisk spænding over tid, konstante egenskaber: se [Varme, termisk spænding og knækning](topic:thermal-and-buckling) |
| Automatisk forfining til transient varme og studier med en termisk last; gøre nettet grovere, hvor fejlen er lille; et mål på en lokal størrelse (spidsspændingen ét sted) | **Forfin automatisk** til statiske, knæknings-, egenfrekvens- og stationære termiske studier, på fejlen over hele delen: se [Kontrollér spænding og udbøjning](topic:simulation); ellers gør elementstørrelsen mindre |
| Lejer- og boltlaster, fjerntliggende kræfter, momenter, fjedre, forskrevne forskydninger | Kræfter og tryk på flader, tyngdekraft; fastholdte og friktionsfri flader |
| Simulering af samlinger; materialer, der varierer efter retning (printede lag, kompositter) | Én del, ét isotropt materiale |
| Flere løsertråde til tetraeder-studier, varmeoverførsel og generativt design; tråde på en side, der ikke er cross-origin-isoleret | Voxel-studier, knækning, spænding over tid og laminar strømning bruger trådene, hvor siden tillader det: se [PartCraft-indstillinger](topic:settings) |
| Turbulent strømning med designnøjagtighed (Spalart–Allmaras-modellen er med som eksperimentel: rørfriktion 30 til 34 % for høj, genfastgørelse efter bagudvendt trin 21 til 39 % for kort; planlagt: finere celler ved væggene), varme i strømning, ustationær (tidsnøjagtig) strømning, frie overflader, ikke-newtonske væsker, roterende dele | Laminar, stationær, isoterm strømning af en newtonsk væske, eller den eksperimentelle turbulensmodel til kvalitative mønstre: se [Simulér væskestrømning](topic:flow-simulation); panelet advarer, når Reynolds-tallet er over laminar |
| Spændingsgrænser og fremstillingsregler (overhæng, fræseretninger) i generativt design; flere materialer i én form | Stiveste form for et volumen; kontrollér resultatet i Simulering: se [Lad en form vokse ud fra laster](topic:generative-design) |
| Et resultat som et redigerbart (glat, parametrisk) massivt legeme | STL, facetteret STEP eller en del med resultatet som et importeret facetteret massivt legeme |
| Design af elektriske maskiner: en rotor, der drejer i en stator, moment mod vinkel, mættende stål, magneter, der mister styrke efter deres knæpunkt, hvirvelstrømme og jern- og kobbertab; magnetfelter i 3D eller på buede net | Lineær 2D-magnetostatik på et gitter i analysebiblioteket: spoler, jern, permanente magneter på deres tilbagespolingslinje, mellemrum, induktans og trækkraft: se [Magnetfelter i 2D](topic:magnetic-fields-2d) |

## Scripts

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Hjælp ved svæv, brudpunkter og trin-for-trin i script-editoren | Find, fold og fuldfør er med (se [Skriv og kør scripts](topic:craftscript)); i øvrigt din egen editor: {{ui:Gem}} og {{ui:Åbn}} i gruppen Script flytter scripts ind og ud; indbyggede funktioner er listet i [CraftScript-sproget](topic:craftscript-language) |
| Brudpunkter og trin-for-trin gennem et script | `disp` og `fprintf` undervejs; {{key:Mod+Enter}} kører nogle få valgte linjer ad gangen |
| Felter og plots, et script viser, tegnet i Design-arbejdsområdet; scripts, der ændrer delens parametre | De vises i Script-arbejdsområdet; scripts læser parametre med `param` (se [Skriv og kør scripts](topic:craftscript)), ændrer dem på fanen {{ui:Parametre}} |
| Billeder og tabeller side om side med plots; redigering af et plot (zoom, aksegrænser), før du gemmer det | Side om side viser plots; gem et plot som PNG, SVG eller CSV og færdiggør det andetsteds |
| numpy og andre Python-pakker; Python offline; folding af Python i editoren; Pascal Script | Pythons standardbibliotek, CraftScript og Lua: se [Scripts i Python](topic:craftscript-python) |
| Overførsel af Lua-funktioner til indbyggede funktioner; kald af en biblioteksfunktion fra Lua med et navn, der er bygget, mens scriptet kører | Skriv bibliotekfunktionens navn i scriptet (`cs.static_tet(…)`), eller kald den fra et CraftScript-script |

## Appen

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Gemning i skyen, deling og versionshistorik | Ikke tilgængelig endnu. Gem filer på din computer og behold versioner med navn |
| PartCraft som en installeret app på iPad og iPhone | Brug PartCraft i enhedens browser; på Android og på desktop kører den også i CadCraft Studio (getcadcraft.com/download) |
| Kontekstmenuer (højreklik) | Værktøjslinjen og det højre panel |
| At arbejde helt offline fra en ny start | Kun når appen er gemt til offlinebrug: se [Arbejde offline](common:offline) |

Fortæl os, hvad du savner mest, via sitens supportside: det former det, der kommer næst.

## Engineer (generatorer og felter)

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Headere, porte og fittings på den genererede varmeveksler; temperaturkurver for materialestyrke; T-stykketab i manifolden | Generatorerne bygger kernen og rørene; tilføj fittings i Design; brug materialets værdier ved stuetemperatur med en sikkerhedsfaktor |
| Tilføjelse af generatorer fra add-on-kataloget med ét klik | {{ui:Åbn}} i Engineer-arbejdsområdet tilføjer en generator fra en fil |
| En feltfil finere end generatorens egen voxelstørrelse; indlæsning af `.vdb`-filer | Gem et finere felt fra et script; `.vdb` skrives, læses ikke |
| Beregninger efter trykbeholderkoder | De lærebogsformler for tyndvæg og tykvæg, med den sikkerhedsfaktor du vælger; ikke en kodemargen |
| Generatorer til de andre apps | Kun PartCraft i denne version |
