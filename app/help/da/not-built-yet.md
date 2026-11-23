---
title: Hvad der ikke er lavet endnu
summary: Alt, denne PartCraft-version ikke gør endnu, fra snoede sweeps til tomme visninger, målsætning af tegninger og under-samlinger, med det, du i stedet kan gøre i dag.
keywords: mangler, endnu ikke, begrænsninger, begrænsninger, færdiplan, eksakt kerne, afrunding, affasning, skal, sweep, loft, step-import, simulering, fremstilling, snoet sweep, loft-endetangens, flade-afrunding, ligninger, tommer, tegningsmål, under-samlinger, sky, tablet, telefon
from: 97b10a29
---

PartCraft er en tidlig version. Denne side lister, hvad den ikke gør endnu, så du ikke leder efter det, og hvad du i stedet kan gøre i dag. Intet her har en dato.

## Kræver en eksakt kerne

Denne version bygger alle dele med nettet fra kernen (se [Nettet fra kernen](topic:solid-kernels)). Alt nedenfor kræver en eksakt geometrikerne, som denne version endnu ikke har. Dele gemt med disse funktioner åbnes stadig: funktionerne bliver i historikken, markeret som ikke lavet, og de bevares, når du gemmer.

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| {{ui:Afrund}} og {{ui:Affas}} på runde kanter; afrundinger, hvis radius ændrer sig langs kanten; afrundinger, der smelt glat sammen, hvor de mødes (nettet skærer dem i gering) | Afrund og Affas virker på lige kanter mellem plane flader; afrund andre hjørner i skitsen, før du ekstruderer ({{ui:Afrund}} i en skitse, {{key:F}}) |
| {{ui:Skal}} der åbner buede flader; vægge med forskellig tykkelse | Åbn plane flader; tilføj materiale med ekstruderinger, hvor en væg skal være tykkere |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Udtræksvinkel}} på buede flader; ekstrudering op til en flade, den næste flade eller et hjørnepunkt; koniske ekstruderinger | Ekstruder eller drej, i trin hvor det er nødvendigt; ekstruder til en dybde, du har målt |
| {{ui:Ribbe}}, {{ui:Basisflange}}, {{ui:Kantflange}} og plane mønstre | Ekstruder pladen eller ribbens profil |
| Flader: indfør et {{ui:Form}} i delen, {{ui:Lap}}, {{ui:Loft-overflade}}, {{ui:Gordon-overflade}}, {{ui:Sy sammen}}, {{ui:Gør tyk}}, {{ui:Forskudt overflade}}, {{ui:Forlæng overflade}}, {{ui:Beskær overflade}} | Ikke tilgængelig |
| Flere legemer: {{ui:Kombinér}}, {{ui:Flyt legeme}}, {{ui:Skalér legeme}}, {{ui:Stimønster}}, funktioner der laver et nyt legeme | Ét massivt legeme; mønstre og spejling kopierer funktioner |
| Skitser, planer, akser og punkter på flader, som kun en eksakt kerne kan finde (en flade lavet af en afrunding, en hulvæg, en flade på et importeret legeme) | Skitsér på basisplaner, referenceplaner og de plane flader på ekstruderinger og drejninger |
| Et resultat fra generativt design, der åbnes som en del eller tilføjes til en (det bliver et importeret legeme) | Hent resultatet som STL eller STEP |
| Redigering af et åbnet STEP-files buede flader som eksakte overflader; eksakt STEP af spline-, sweep- og drejede flader fra en STEP-fil, spline-sider, modellerede gevind, STL-/OBJ-/3MF-legemer og samlinger; STEP til andre delmodellere | {{ui:Åbn}} læser STEP som trekanter og bevarer filens plane flader, cylindre, kegler, kugler og torus til eksporten ([Åbn en STEP-fil](topic:import-step)); {{ui:Eksportér}} › {{ui:STEP AP242 (eksakt massivt legeme)}} skriver alle analytiske flader eksakt og beholder dem som facetter ([Eksport](topic:export-files#for-other-cad-programs-step)); makroen til en anden delmodeller skriver stadig |
| Sande buer i tegningsvisninger | Visninger og snitvisninger tegnes ud fra facetterne |
| Eksakte rumfang, arealer og afstande | {{ui:Mål}} giver det facetterede legemes tal, lidt lavt på runde dele; en finere indstilling for **Kurver** bringer dem tættere på |

Nogle rækker i tabellerne nedenfor foreslår en af disse funktioner som vejen udenom noget andet. Disse forslag gælder, når en eksakt kerne er tilbage.

## Funktioner

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Flade-afrundinger, fulde runde afrundinger, afrundinger med radier sat i punkter langs en kant | Konstant eller lineært variabel {{ui:Afrund}}; flere afrundingsfunktioner |
| Skaller med forskellige vægtykkelser | Én {{ui:Skal}}-tykkelse; tilføj materiale med ekstruderinger, hvor en væg skal være tykkere |
| Udtræksvinkel på frie (spline-)flader | {{ui:Udtræksvinkel}} virker på plane, cylindriske og koniske flader |
| Snoede sweeps, tyndvægs- og fladesweeps; endetangens på Loft-funktionen; et loft med én styreskinne; spline-baner | {{ui:Sweep}} med fast orientering eller en endeskala; et loft med to eller flere styreskinner: se [Sweep, loft og udtræksvinkel](topic:sweep-loft-draft) |
| Ribber fra buer eller splines; ribber vokset kvadratisk til skitsen (fra en topvisning); udtræksvinkel på ribber; flere ribber fra én skitse | {{ui:Ribbe}} fra én kæde af linjer i ribbens eget plan: se [Ribber og knæ](topic:rib) |
| "Op til" en buet flade, "op til næste" der stopper ved en buet flade | Op til en plan flade eller et referenceplan |
| Modborede huller, tommer- og rørgevind, koniske gevind, gevindudløb og afskårne gevindstarter | Forsænkning med en lille dybde; ISO-metriske og trapezgevind, kosmetiske eller modellerede: se [Gevind på aksler og boringer, tegnet eller modelleret](topic:threads) |
| Ekstruderinger af tynde funktioner | Tegn begge vægge af profilen |
| Mønsterkopier, der springes over én for én; fyldmønstre | Brug separate funktioner; mønstre langs en kurve: {{ui:Stimønster}} |
| Kopierede mønstre, spejle, afrundinger, affasninger, skaller og importerede legemer | Kopiér skitsen eller funktionen, de er bygget på, eller mønstrer den |
| Eksakt (G1-) tangens i et forms ekstraordinære punkter; sammenlægning af et forms lapper til større flader | Hæv formens niveau: de tilnærmede lapper bliver mindre; se [Frie former med Form](topic:form-surfaces) |
| En form lavet af flere adskilte lukkede stykker i én funktion; broer mellem forme | Ét lukket stykke pr. Form-funktion; sammenføj dem med Sammenføj |
| Valg af overfladelegemer i visningen (undtagen beskærings- og lappunkter); fladeafrundinger; ophævelse af beskæring; G2-lapper; Gordon-flader tangente til buede naboer (tangente til planer og plane flader er lavet) | Vælg dem ved navn i funktionens panel; gør tyk først, og afrund derefter legemet |
| En legemeliste i historikken; udeladelse af skjulte legemer fra eksporter | Omdøb og skjul legemer i delpanelets legemeliste; slet eller undertryk funktionen, der lavede et legeme, for at udelade det |
| En ikke-ensartet skalering, der bevarer cylindre og kegler analytiske; ikke-ensartet skalering af forskudte flader | {{ui:Skalér legeme}} gør buede flader til lukkede B-splines (inden for 0.0000004 mm); en ensartet skalering forbliver eksakt |
| Kombination af overfladelegemer; Minkowski-summer | {{ui:Sy sammen}} eller {{ui:Gør tyk}} først, derefter {{ui:Kombinér}} |
| Tolerancenalyse: tolerancekæder, der drejer hjørner (2D- og 3D-vektorsløjfer), følsomheder beregnet ud fra geometrien, Monte Carlo med andre fordelinger, størrelsestolerancer på skitsemål, bonustolerance fra materialets tilstand | {{ui:Tolerancekæde}} i en samling: én retning, worst case og RSS, tolerancer indtastet, fra tegningshovedets generelle tolerance eller fra GD&T-rammer: se [Tolerancekæder](topic:tolerance-stackup) |
| Nesting: skæreorden og indskæringer, skæring af fælles kanter én gang, dele der skal holdes sammen; rester af ruller, råemne delt mellem projekter | {{ui:Nest plane dele på plader…}} med afstand, margener, drejninger og fiber: se [Nest plane dele på plader](topic:nest-flat-parts); overskydende plader gemmes og bruges først: se [Gem og genbrug rester](topic:nest-offcuts); planlæg skæringen i din skærers egen software |
| Pladeemne: hem, forskydninger, gerings- og konturflanger; flanger på buede kanter eller på en bøjet basisflanges flader; skitserede bøjninger; hjørnelukninger; formværktøjer; konvertering af et massivt legeme til pladeemne; fladen af en bøjet basisflange med udskæringer i; bøjetabeller | {{ui:Basisflange}} (en plade eller en bøjet profil), {{ui:Kantflange}} på en plades lige kanter med bøjeudskæringer, og det plane mønster med en K-faktor: se [Pladeemne](topic:sheet-metal) |
| Udtrækningsanalyse på samlinger; finde skillelinien; vægtykkelsesanalyse | {{ui:Udtræksanalyse}} på delen i Design: se [Kontrollér udtræk til støbning](topic:draft-analysis); åbn hver del af en samling for at kontrollere den |

## Skitser

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Ellipser, tangentbuer, koniske snit, splines med fast grad eller vægte (NURBS) | Splines (kubiske), buer og cirkler med tangentrelationer |
| Et punkt på en spline (en relation), krumnings- (G2-) relationer | Sæt splinens eget punkt der, hvor den skal gå igennem |
| Forskudte kopier af splines, der følger senere ændringer; forskydninger af kæder med skarpe spline-hjørner | Forskyd igen efter ændringen; afrund hjørnet først |
| Mønsterkopier, der forbliver knyttet til originalen; mønstre langs en kurve | Mønstr igen efter en ændring |
| Projicering af frie eller skrå cirkulære kanter; projiceret geometri, der følger delen | Projicér lige og parallelle cirkulære kanter, og målsæt derefter |
| Drevne (referencemål) | Læs størrelser fra panelet eller delens data |
| Kollinære relationer | Parallel med en afstand på 0 |
| Indsætning i et andet program (systemets udklipsholder) | Eksportér DXF, STEP, STL eller 3MF |
| Indtastning af buer, relative eller polære koordinater | Indtast linjer og cirkler; tegn buer med Bue-værktøjet |
| Valg af geometri uden en pegeenhed | Kræver et klik eller tryk |

## Parametre og enheder

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Konfigurationer, der ændrer materialer; en CSV-designtabel, der slår funktioner fra | Konfigurationer sætter parametre og tænder og slukker funktioner: se [Konfigurationer og designtabeller](topic:design-tables); `partcraft variants` bygger gemte konfigurationer med navn, med slåede fra funktioner inkl.: se [Lav en variantpakke af dine konfigurationer](topic:variant-pack) |
| Ligninger på de nyeste funktioners egne paneler (plan, sweep, udtræksvinkel og lignende) | Skriv dem i et script eller med `partcraft set` ([Scripts og kommandolinjen](topic:scripts-and-cli)) |
| En del vist i tommer | Størrelser vises i millimeter; skriv `2in` i et talfelt eller et udtryk, og det bliver 50.8 |

## Filer

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Redigering af et importeret STEP-legemes egne funktioner (det kommer uden historik) | Tilføj eller fjern materiale med dine egne funktioner |
| Læsning af farver, navne, samlingsstruktur og PMI fra STEP | Ikke tilgængelig |
| glTF-, OBJ-, IGES- og Parasolid-eksport; DWG af en 3D-del (kun variantpakken skriver en DWG: tegningsarket) | STL eller 3MF for net; STEP for legemer; DXF for 2D |
| Åbning af IGES, DXF eller andre programmers egne filer (`.3dm`-filer åbnes som ét legeme: [Åbn en .3dm-model som et massivt legeme](topic:open-3dm-files)) | Bed om STEP, eller et lukket STL-, OBJ- eller 3MF-net: [Åbn en STL, OBJ eller 3MF](topic:open-meshes) |
| Samlingsstruktur (et træ med delnavne) i eksporteret STEP | Samlings-STEP er ét sammensat legeme af de placerede legemer |
| Gem i en mappe efter eget valg uden browserens download | Slå "spørg hvor der skal gemmes" til i browserens downloadindstillinger |

## Tegninger

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Mål ud over de tre samlede størrelser (hulstørrelser, positioner, tolerancer på mål) | Markér PDF'en, eller eksportér DXF og målsæt den i et 2D-CAD-program |
| Mere end ét snit eller ét detalje; justerede, brudte og hjælpevisninger | Ét snit og ét detalje pr. tegning |
| Fri tekst, noter og tabeller på arket (ud over titel- og revisionsfelterne) | Overfladenoten, eller tekst tilføjet på PDF'en |
| Førstevinkel-projektion, flytbare visninger, stående ark | Tredjevinkel, automatisk layout, liggende ark A4–A0 og ANSI A–E |
| Live snitvisning: flere planer eller en snitboks på én gang, en kontur rundt om snittet, gemning af snittet i filen | Ét plan ad gangen fra {{ui:Visninger}} › {{ui:Snitvisning}}; se [Kig indad med en snitvisning](topic:section-view) |
| Samlingstegninger med flere visninger, mål eller balloner du kan flytte | Én isometrisk (eller eksploderet) visning med automatiske balloner og stykliste |
| Kopiering og indsætning af GD&T- og overfladesymboler | Placér hvert med Datum, Ramme eller Overflade |
| Manualer: STEP-filer i Illustrates {{ui:Fra en anden fil…}}, en model givet direkte fra ModelCraft eller BimCraft, billeder i stifinderens kvalitet, interaktiv 3D inde i en PDF | Åbn STEP'en i Design og start manualen {{ui:Fra den åbne del}}; gem modellen som glTF (.glb); PNG-billeder af 3D-visningen; den interaktive 3D-fil: se [Start en manual i Illustrate](topic:illustrate) |

## Samlinger

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Tandhjul-, tandstang-, kam- og skruesamlinger; en kugledsamling begrænset til en kegle; samlinger på buede flader eller mellem punkter | Stive, roterende, skyde-, cylindriske, plane, kugle- og stift-i-spor-samlinger på plane flader, hver værdi med sine egne grænser: se [Byg en samling](topic:build-assembly) |
| Eksploderede trin, der drejer dele, og træk af dele, som samlinger placerer | Lige eksplosionstrin; fjern en samling for at flytte en del i hånden |
| Under-samlinger | Ét niveau af dele |
| Tandhjul, kamme, kontakt | Ikke tilgængelig |

## Fremstilling

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| 3D-adaptiv rydning og forskudt grovbearbejdning i 3D; vandlinje-, blyant-, radial- og spiralefterbearbejdning; adaptive gange skrevet som buer | 3D-grovbearbejdning i lige rækker og restbearbejdning: se [3D-grovbearbejdning og restbearbejdning](topic:rough-3d); Parallel- og Kamme-efterbearbejdning: se [3D-efterbearbejdning](topic:finish-3d); 2.5-akset plan-, lomme-, 2D-adaptiv, kontur-, bor- og affasningsoperation: se [Lav værktøjsbaner og G-kode](topic:manufacture) |
| Sidefræsning, flowlinje- og flerakse-grovbearbejdningsbaner, koder for hældende arbejdsplan (G68.2), kollisionskontrol af holder og maskine; simulering af 5-akset og roterende snit | Et hældende værktøj til enhver operation, 5-akset efterbearbejdning med en kugleformet endefræser og 4.-akset roterende efterbearbejdning: se [4- og 5-akset bearbejdning](topic:multi-axis) |
| Indvendig drejning og indvendige gevind på en drejebænk, G71-/G76-cyklusser, buer i drejebaner, drevne værktøjer, en underspindel | Udvendig drejning: planfræsning, grov, efterdrejning, spor, afskæring, gevind, bor på centrum: se [Drejning på en drejebænk](topic:turning) |
| Probing af en vinkel eller et hjørne, en værktøjsindstiller, måling af en størrelse mod en tolerance | Probing af en flade, en side, et hul eller en udhævning for at sætte arbejdsforskydningen: se [Probing](topic:probing) |
| Kollisionskontrol af holder og skaft | Følg advarslerne om spåntlængde, og kontrollér i din styrings simulator |
| Værktøjslevetid og underprogramcyklusser i en post; indlæsning af andre programmers postfiler | Skriv eller ændr en post i PartCraft's eget format: se [Postprocessorer du kan redigere](topic:post-processors) |
| Tommer-G-kode (G20) | Kun millimeter (G21) |

## Simulering og generativt design

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Ikke-lineære studier: flydning, store udbøjninger, kontakt mellem dele, udmattelse | Lineær statik og egenfrekvenser: se [Kontrollér spænding og udbøjning](topic:simulation); hold sikkerhedsfaktoren godt over 1 |
| Ikke-lineær knækning (imperfektioner, efterknækning, snap-through) | Lineære knækbelastningsfaktorer med en god margin: se [Varme, termisk spænding og knækning](topic:thermal-and-buckling) |
| Stråling mellem flader (synsfaktorer), kontaktmodstand, temperaturafhængige materialer, inerti i termisk spænding (termiske stødbølger) | Stråling til omgivelserne, stationær eller kvasi-statisk termisk spænding over tid, konstante egenskaber: se [Varme, termisk spænding og knækning](topic:thermal-and-buckling) |
| Automatisk forfinelse for transient varme og studier med en termisk last; gøre nettet grovere, hvor fejlen er lille; et mål på en lokal størrelse (spidsspændingen på ét sted) | **Forfin automatisk** for statiske, knæknings-, egenfrekvens- og stationære termiske studier, på fejlen over hele delen: se [Kontrollér spænding og udbøjning](topic:simulation); ellers mindsk elementstørrelsen |
| Lejer- og boltbelastninger, fjernkræfter, momenter, fjedre, forskrevne forskydninger | Kræfter og tryk på flader, tyngdekraft; faste og friktionsfri flader |
| Simulering af samlinger; materialer, der varierer med retning (printede lag, kompositter) | Én del, ét isotropt materiale |
| Flere solvertråde til tetraedriske studier, varmeoverførsel og generativt design; tråde på en side, der ikke er krydsoprindelig isoleret | Voxel-studier, knækning, spænding over tid og laminær strømning bruger trådene, hvor siden tillader det: se [PartCraft-indstillinger](topic:settings) |
| Turbulent strømning med designnøjagtighed (Spalart–Allmaras-modellen er med som eksperimentel: rørfriktion 30 til 34 % for høj, genfastgørelse efter bagudrettet trin 21 til 39 % for kort; planlagt: finere celler nær væggene), varme i strømning, ikke-stationær (tidsnøjagtig) strømning, frie overflader, ikke-newtonske væsker, roterende dele | Laminar, stationær, isotermisk strømning af en newtonsk væske, eller den eksperimentelle turbulente model til kvalitative mønstre: se [Simulér væskestrømning](topic:flow-simulation); panelet advarer, når Reynolds-tallet er over det laminære |
| Spændingsgrænser og fremstillingsregler (overhæng, fræseretninger) i generativt design; flere materialer i én form | Stiveste form for et volumen; kontrollér resultatet i Simulering: se [Vokse en form ud fra laster](topic:generative-design) |
| Et resultat som et redigerbart (glat, parametrisk) legeme | STL, facetteret STEP eller en del med resultatet som et importeret facetteret legeme |
| Elektrisk maskindesign: en rotor, der drejer i en stator, moment mod vinkel, mættende stål, magneter der mister styrke efter deres knæ, hvirvelstrømme og jern- og kobbertab; magnetfelter i 3D eller på buede net | Lineær 2D-magnetostatik på et gitter i analysebiblioteket: spoler, jern, permanente magneter på deres tilbagespolingslinje, luftspalter, induktans og træk: se [Magnetfelter i 2D](topic:magnetic-fields-2d) |

## Scripts

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Svævehjælp, brudpunkter og trinvis kørsel i script-editoren | Find, fold og fuldfør er med (se [Skriv og kør scripts](topic:craftscript)); for resten din egen editor: {{ui:Gem}} og {{ui:Åbn}} i Script-gruppen flytter scripts ind og ud; indbyggede funktioner er listet i [CraftScript-sproget](topic:craftscript-language) |
| Brudpunkter og trinvis gennemgang af et script | `disp` og `fprintf` undervejs; {{key:Mod+Enter}} kører et par valgte linjer ad gangen |
| Felter og plots, et script viser, tegnet i Design-arbejdsområdet; scripts, der ændrer delens parametre | De vises i Script-arbejdsområdet; scripts læser parametre med `param` (se [Skriv og kør scripts](topic:craftscript)) og ændrer dem på fanen {{ui:Parametre}} |
| Billeder og tabeller side om side med plots; redigering af et plot (zoom, aksegrænser) før gemning | Side om side viser plotsene; gem et plot som PNG, SVG eller CSV og færdiggør det andetsteds |
| numpy og andre Python-pakker; Python offline; foldning af Python i editoren; Pascal Script | Pythons standardbibliotek, CraftScript og Lua: se [Scripts i Python](topic:craftscript-python) |
| Videregivelse af Lua-funktioner til indbyggede funktioner; kald af en biblioteksfunktion fra Lua med et navn bygget, mens scriptet kører | Skriv biblioteksfunktionens navn i scriptet (`cs.static_tet(…)`), eller kald den fra et CraftScript-script |

## Appen

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Gemning i skyen, deling og versionshistorik | Ikke tilgængelig endnu. Gem filer på din computer, og behold versioner med navn |
| PartCraft som installeret app på iPad og iPhone | Brug PartCraft i enhedens browser; på Android og på skrivebordet kører den også i CadCraft Studio (getcadcraft.com/download) |
| Genvejsmenuer (højreklik) | Værktøjslinjen og det højre panel |
| Fuld offline-brug fra en frisk start | Kun når appen er gemt til offline-brug: se [Arbejd offline](common:offline) |

Fortæl os, hvad du savner mest, via webstedets supportside: det former det, der kommer næst.

## Engineer (generatorer og felter)

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Hoveder, porte og fittings på den genererede varmeveksler; temperaturkurver for materialestyrke; trykfald i fordeleren | Generatorerne bygger kernen og rørene; tilføj fittings i Design; brug materialets figurer ved stuetemperatur med en sikkerhedsfaktor |
| Tilføjelse af generatorer fra add-on-kataloget med ét klik | {{ui:Åbn}} i Engineer-arbejdsområdet tilføjer en generator fra en fil |
| En feltfil finere end generatorens egen voxelstørrelse; læsning af `.vdb`-filer | Gem et finere felt fra et script; `.vdb` skrives, men læses ikke |
| Beregninger for trykbeholdere efter normer | De klassiske tyndvægs- og tykvægsformler med den sikkerhedsfaktor, du vælger; ikke en normmargin |
| Generatorer til de andre apps | Kun PartCraft i denne version |
