---
title: Hva som ikke er bygget ennå
summary: Alt denne PartCraft-versjonen ikke gjør ennå, fra vridende sveip til tomme-visning, tegningsmål og underenheter, med det du kan gjøre i stedet i dag.
keywords: mangler, ikke ennå, begrensninger, begrensning, veikart, eksakt kjerne, avrunding, fasing, skall, sveip, loft, STEP-import, simulering, produksjon, vridende sveip, loft-endetangens, flateavrunding, ligninger, tommer, tegningsmål, underenheter, sky, nettbrett, telefon

from: 97b10a29
---

PartCraft er en tidlig versjon. Denne siden lister det denne PartCraft-versjonen ikke gjør ennå, slik at du ikke leter etter det, og hva du kan gjøre i stedet i dag. Ingenting her har en dato.

## Trenger en eksakt kjerne

Denne versjonen bygger alle deler med nettkjernen (se [Nettkjernen](topic:solid-kernels)). Alt nedenfor trenger en eksakt geometrikjerne, som denne versjonen ikke har ennå. Deler lagret med disse funksjonene åpnes fortsatt: funksjonene blir stående i historikken, merket som ikke bygget, og de beholdes når du lagrer.

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| {{ui:Fillet}} og {{ui:Chamfer}} på runde kanter; avrundinger med radius som endrer seg langs kanten; avrundinger som glattes jevnt der de møtes (nettkjernen skjærer dem på skrå) | Avrunding og fasing fungerer på rette kanter mellom flate flater; avrund andre hjørner i skissen før du ekstruderer ({{ui:Fillet}} i en skisse, {{key:F}}) |
| {{ui:Shell}} som åpner buede flater; vegger med ulik tykkelse | Åpne flate flater; legg til materiale med ekstruderinger der en vegg må være tykkere |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} på buede flater; ekstrudering opp til en flate, neste flate eller et hjørne; koniske ekstruderinger | Ekstruder eller roter, i trinn der det trengs; ekstruder til en dybde du måler |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} og flate mønstre | Ekstruder platen eller ribbens profil |
| Overflater: ferdigstilling av en {{ui:Form}} inn i delen, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Ikke tilgjengelig |
| Flere legemer: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, funksjoner som lager et nytt legeme | Ett volumlegeme; mønstre og speiling kopierer funksjoner |
| Skisser, plan, akser og punkter på flater som bare en eksakt kjerne kan finne (en flate laget av en avrunding, en hullvegg, en flate på et importert volumlegeme) | Skisser på grunnplan, referanseplan og de flate flatene på ekstruderinger og rotasjoner |
| Et generativt designresultat åpnet som en del eller lagt til i den (det blir et importert volumlegeme) | Last ned resultatet som STL eller STEP |
| Redigering av en åpnet STEP-fils buede flater som eksakte overflater; eksakt STEP av spline-, sveipede og roterte flater fra en STEP-fil; spline-sider; modellerte gjenger; STL-, OBJ- og 3MF-legemer og sammenstillinger; STEP for andre delmodellere | {{ui:Open}} leser STEP som trekanter og beholder filens flate flater, sylindre, kjegler, kuler og torer for eksporten ([Åpne en STEP-fil](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} skriver alle analytiske flater eksakt og beholder dem som fasetter ([Eksporter](topic:export-files#for-other-cad-programs-step)); makroen for en annen delmodellerer skriver fortsatt |
| Ekte buer i tegningsvisninger | Visninger og snittvisninger tegnes fra fasettene |
| Eksakte volumer, arealer og avstander | {{ui:Measure}} gir tallene for det fasetterte volumlegemet, litt lavt på runde deler; en finere innstilling for **Kurver** bringer dem nærmere |

Noen rader i tabellene nedenfor foreslår en av disse funksjonene som måten å komme seg rundt noe annet. De forslagene gjelder når en eksakt kjerne er tilbake.

## Funksjoner

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| Flateavrundinger, helrunde avrundinger, avrundinger med radier satt i punkter langs en kant | Konstant eller lineært variabel {{ui:Fillet}}; flere avrundingsfunksjoner |
| Skall med ulik veggtykkelse | Én {{ui:Shell}}-tykkelse; legg til materiale med ekstruderinger der en vegg må være tykkere |
| Trekkvinkel på frie (spline-) flater | {{ui:Draft}} fungerer på flate, sylindriske og koniske flater |
| Vridende sveip, tynnvegg- og overflatesveip; endetangens på Loft-funksjonen; en loft med én styreskinne; spline-baner | {{ui:Sweep}} med fast retning eller en skala i enden; en loft med to eller flere styreskinner: se [Sveip, loft og trekkvinkel](topic:sweep-loft-draft) |
| Ribber fra buer eller splines; ribber vokst kvadratisk til skissen (fra en toppvisning); trekkvinkel på ribber; flere ribber fra én skisse | {{ui:Rib}} fra én kjede av linjer i ribbens eget plan: se [Ribber og knutepunktsplater](topic:rib) |
| «Opp til» en buet flate, «opp til neste» som stopper på en buet flate | Opp til en flat flate eller et referanseplan |
| Motboret hull, tommer- og rørgjenger, koniske gjenger, gjengeutløp og avfaste gjengestarter | Forsenkning med liten dybde; ISO-metriske og trapesgjenger, kosmetiske eller modellerte: se [Gjenger på aksler og boringer, tegnet eller modellert](topic:threads) |
| Tynne ekstruderinger | Tegn begge veggene i profilen |
| Mønsterkopier hoppet over én og én; fyllmønstre | Bruk separate funksjoner; mønstre langs en kurve: {{ui:Path pattern}} |
| Kopierte mønstre, speiling, avrundinger, fasinger, skall og importerte volumlegemer | Kopier skissen eller funksjonen de er bygget på, eller mønstre den |
| Eksakt (G1) tangens i en forms ekstraordinære punkter; sammenslåing av en forms flatestykker til større flater | Øk formens nivå: de tilnærmede flatestykkene blir mindre; se [Frie former med Form](topic:form-surfaces) |
| En form laget av flere separate lukkede deler i én funksjon; broer mellom former | Ett lukket stykke per Form-funksjon; sett dem sammen med Join |
| Velge overflatelegemer i visningen (unntatt punkter for trim og lapp); overflateavrunding; oppheving av trim; G2-lapper; Gordon-flater tangent til buede naboer (tangent til plan og flate flater er bygget) | Velg dem med navn i funksjonens panel; gjør til tykkelse først, og avrund så volumlegemet |
| En liste over legemer i historikken; utelate skjulte legemer fra eksporter | Gi legemene nytt navn og skjul dem i delpanelets legemeliste; slett eller undertrykk funksjonen som laget et legeme for å utelate det |
| En ikke-jevn skalering som beholder sylindre og kjegler analytiske; ikke-jevn skalering av forskjøvne overflater | {{ui:Scale body}} gjør buede flater til lukkede B-splines (innen 0.0000004 mm); en jevn skalering forblir eksakt |
| Sette sammen overflatelegemer; Minkowski-summer | {{ui:Stitch}} eller {{ui:Thicken}} først, deretter {{ui:Combine}} |
| Toleranseanalyse: toleransekjeder som svinger i hjørner (2D- og 3D-vektorløkker), følsomheter beregnet fra geometrien, Monte Carlo med andre fordelinger, størrelsestoleranser på skissemål, bonustoleranse fra materialetilstand | {{ui:Stack-up}} i en sammenstilling: én retning, verste tilfelle og RSS, toleranser skrevet inn, fra tegningshodets generelle toleranse eller fra GD&T-rammer: se [Toleransekjeder](topic:tolerance-stackup) |
| Nesting: skjærerekkefølge og innkjøringer, skjære felles kanter én gang, deler som må holdes sammen; rester av ruller, råemne delt mellom prosjekter | {{ui:Nest flat parts on sheets…}} med avstand, marginer, vendinger og fiber: se [Nest flate deler på plater](topic:nest-flat-parts); gjenværende plater beholdes og brukes først: se [Behold og bruk avskjær igjen](topic:nest-offcuts); planlegg kuttet i kuttemaskinens egen programvare |
| Platemetall: falser, forskyvninger, geringsflenser og konturflenser; flenser på buede kanter eller på flatene til en bøyd grunnflens; skisserte bøyer; hjørnelukkinger; formverktøy; konvertering av et volumlegeme til platemetall; flaten av en bøyd grunnflens med kutt i seg; bøyetabeller | {{ui:Base flange}} (en plate eller en bøyd profil), {{ui:Edge flange}} på en plates rette kanter med bøyeavlastninger, og det flate mønsteret med en K-faktor: se [Platemetall](topic:sheet-metal) |
| Trekkvinkelanalyse på sammenstillinger; finne skillelinjen; analyse av veggtykkelse | {{ui:Draft analysis}} på delen i Design: se [Sjekk trekkvinkel for støping](topic:draft-analysis); åpne hver del i en sammenstilling for å sjekke den |

## Skisser

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| Ellipser, tangentbuer, koniske snitt, splines med satt grad eller vekter (NURBS) | Splines (kubiske), buer og sirkler med Tangent-relasjoner |
| Et punkt på en spline (en relasjon), krumnings- (G2) relasjoner | Sett splinens eget punkt der den må gå |
| Forskjøvne kopier av splines som følger senere endringer; forskyvninger av kjeder med skarpe spline-hjørner | Forskyv på nytt etter endringen; avrund hjørnet først |
| Mønsterkopier som forblir koblet til originalen; mønstre langs en kurve | Lag mønster på nytt etter en endring |
| Projisering av frie eller skråstilte sirkulære kanter, projisert geometri som følger delen | Projiser rette og parallelle sirkulære kanter, og sett mål etterpå |
| Drevne (referanse-) mål | Les størrelser fra panelet eller delens fakta |
| Kollineære relasjoner | Parallell med 0 avstand |
| Lime inn i et annet program (systemets utklippstavle) | Eksporter DXF, STEP, STL eller 3MF |
| Skrive inn buer, relative eller polare koordinater | Skriv inn linjer og sirkler; tegn buer med Bue-verktøyet |
| Velge geometri uten peker | Krever et klikk eller et trykk |

## Parametere og enheter

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| Konfigurasjoner som endrer materialer; en CSV-designtabell som slår av funksjoner | Konfigurasjoner setter parametere og slår funksjoner av og på: se [Konfigurasjoner og designtabeller](topic:design-tables); `partcraft variants` bygger lagrede konfigurasjoner etter navn, med funksjoner slått av: se [Lag en variantpakke av konfigurasjonene dine](topic:variant-pack) |
| Ligninger på tallene i de nyeste funksjonenes egne paneler (plan, sveip, trekkvinkel og lignende) | Skriv dem i et skript eller med `partcraft set` ([Skript og kommandolinjen](topic:scripts-and-cli)) |
| En del vist i tommer | Størrelser vises i millimeter; skriv `2in` i et tallfelt eller et uttrykk, og det blir 50.8 |

## Filer

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| Redigere en importert STEP-volumlegemes egne funksjoner (den kommer uten historikk) | Legg til eller fjern materiale med dine egne funksjoner |
| Lese farger, navn, sammenstillingsstruktur og PMI fra STEP | Ikke tilgjengelig |
| glTF-, OBJ-, IGES- og Parasolid-eksport; DWG av en 3D-del (bare variantpakken skriver en DWG: tegningsarket) | STL eller 3MF for nett; STEP for volumlegemer; DXF for 2D |
| Åpne IGES, DXF eller andre programs egne filer (`.3dm`-filer åpnes som ett legeme: [Åpne en .3dm-modell som et volumlegeme](topic:open-3dm-files)) | Be om STEP, eller et lukket STL-, OBJ- eller 3MF-nett: [Åpne en STL, OBJ eller 3MF](topic:open-meshes) |
| Sammenstillingsstruktur (et tre med delnavn) i eksportert STEP | STEP for sammenstillinger er ett sammensatt legeme av de plasserte volumlegemene |
| Lagre til en mappe du velger, uten nettleserens nedlasting | Slå på «spør hvor det skal lagres» i nettleserens nedlastingsinnstillinger |

## Tegninger

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| Mål utover de tre totalmålene (hullstørrelser, posisjoner, toleranser på størrelser) | Merk opp PDF-en, eller eksporter DXF og sett mål i et 2D-CAD-program |
| Mer enn ett snitt eller ett detalj; justerte, utbrutte og hjelpevisninger | Ett snitt og ett detalj per tegning |
| Fri tekst, merknader og tabeller på arket (utover tittel- og revisjonsblokkene) | Overflatenotatet, eller tekst lagt til i PDF-en |
| Førstevinkelprojeksjon, flyttbare visninger, stående ark | Tredjevinkel, automatisk layout, liggende ark A4–A0 og ANSI A–E |
| Levende snittvisning: flere plan eller en snittboks samtidig; en kontur rundt snittet; lagre snittet i filen | Ett plan om gangen fra {{ui:Views}} › {{ui:Section view}}; se [Se inn med en snittvisning](topic:section-view) |
| Sammenstillingstegninger med flere visninger, mål eller ballonger du kan flytte | Én isometrisk (eller oppdelt) visning med automatiske ballonger og delelisten |
| Kopiering og liming av GD&T- og overflatesymboler | Plasser hvert med Datum, Ramme eller Overflate |
| Manualer: STEP-filer i Illustrates {{ui:From another file…}}, en modell levert rett fra ModelCraft eller BimCraft, bilder i banesporerens kvalitet, interaktiv 3D inni en PDF | Åpne STEP-filen i Design og start manualen med {{ui:From the open part}}; lagre modellen som glTF (.glb); PNG-bilder av 3D-visningen; den interaktive 3D-filen: se [Start en manual i Illustrate](topic:illustrate) |

## Sammenstillinger

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| Gir-, tannstang-, kam- og skrueledd; et kulledd begrenset til en kjegle; ledd på buede flater eller mellom punkter | Stive, rotasjons-, glider-, sylindriske, plane, kule- og tapp-i-spor-ledd på flate flater, hver verdi med sine egne grenser: se [Bygg en sammenstilling](topic:build-assembly) |
| Oppdelingstrinn som vrir deler, og dra deler som ledd plasserer | Rette oppdelingstrinn; fjern et ledd for å flytte en del for hånd |
| Underenheter | Ett nivå med deler bare |
| Gir, kammer, kontakt | Ikke tilgjengelig |

## Produksjon

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| 3D-adaptiv rydding og forskjøvet grovbearbeiding i 3D; vannlinje-, penn-, radial- og spiralfinish; adaptive gang skrevet som buer | 3D-grovbearbeiding i rette rader og restbearbeiding: se [3D-grovbearbeiding og restbearbeiding](topic:rough-3d); Parallell- og Kamskjell-finish: se [3D-finish](topic:finish-3d); 2,5-akse flate-, lomme-, 2D-adaptiv, kontur-, bore- og fasingoperasjoner: se [Lag verktøybaner og G-kode](topic:manufacture) |
| Sidefresing, flytlinjer og flerakse-grovbanter, koder for skråstilt arbeidsplan (G68.2 og lignende), kollisjonskontroll av holderen og maskinen; simulering av 5-akse- og roterende kutt | Et vippet verktøy for hvilken som helst operasjon, 5-akse-finish med kulefres og 4.-akse roterende finish: se [4- og 5-akse-bearbeiding](topic:multi-axis) |
| Boring og innvendige gjenger på en dreiebenk; G71/G76-sykluser; buer i dreiebaner; levende verktøy; en underspindel | Utvendig dreiing: planing, grov, finish, spor, avskjæring, gjenge, bor i senter: se [Dreiing på en dreiebenk](topic:turning) |
| Probing av en vinkel eller et hjørne; en verktøymåler; måling av en størrelse mot en toleranse | Probing av en flate, en side, et hull eller en tapp for å sette arbeidsforskyvningen: se [Probing](topic:probing) |
| Kollisjonskontroll av holder og skaft | Følg advarslene om sporlengde og kontroller i styringens simulator |
| Verktøylevetid og underprogramsykluser i en post; laste andre programs postfiler | Skriv eller endre en post i PartCraft sitt eget format: se [Postprosessorer som kan redigeres](topic:post-processors) |
| Tommer-G-kode (G20) | Bare millimeter (G21) |

## Simulering og generativ design

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| Ikke-lineære studier: flyt, store utbøyninger, kontakt mellom deler, utmatting | Lineær statisk og egenfrekvenser: se [Sjekk spenning og utbøyning](topic:simulation); hold sikkerhetsfaktoren godt over 1 |
| Ikke-lineær knekking (imperfeksjoner, etterknekking, snap-through) | Lineære knekklastfaktorer med god margin: se [Varme, termisk spenning og knekking](topic:thermal-and-buckling) |
| Stråling mellom flater (synsfaktorer), kontaktmotstand, temperaturavhengige materialer, treghet i termisk spenning (termiske støtbølger) | Stråling til omgivelsene, stasjonær eller kvasistatisk termisk spenning over tid, konstante egenskaper: se [Varme, termisk spenning og knekking](topic:thermal-and-buckling) |
| Automatisk forfining for transient varme og studier med termisk last; gjøre nettet grovere der feilen er liten; et mål på en lokal størrelse (toppspenningen i ett punkt) | **Forfin automatisk** for statiske, knekke-, egenfrekvens- og stasjonære termiske studier, på feilen over hele delen: se [Sjekk spenning og utbøyning](topic:simulation); ellers senk elementstørrelsen |
| Lager- og boltlaster, fjerne krefter, momenter, fjærer, foreskrevne forskyvninger | Krefter og trykk på flater, tyngdekraft; faste og friksjonsfrie flater |
| Simulering av sammenstillinger; materialer som varierer med retning (printede lag, kompositter) | Én del, ett isotropisk materiale |
| Flere løsertråder for tetraederstudier, varmeoverføring og generativ design; tråder på en side som ikke er krysset isolert | Voxel-studier, knekking, spenning over tid og laminær strømning bruker trådene der siden tillater det: se [PartCraft-innstillinger](topic:settings) |
| Turbulent strømning med konstruksjonsnøyaktighet (Spalart–Allmaras-modellen er med som eksperimentell: rørfriksjon 30 til 34 % for høy, tilbakesteg-gjenfesting 21 til 39 % for kort; planlagt: finere celler nær veggene), varme i strømning, ustadig (tidsnøyaktig) strømning, frie overflater, ikke-newtonske væsker, roterende deler | Laminær, stasjonær, isoterm strømning av en newtonsk væske, eller den eksperimentelle turbulensmodellen for kvalitative mønstre: se [Simuler væskestrømning](topic:flow-simulation); panelet advarer når Reynolds-tallet er over laminært |
| Spenningsgrenser og produksjonsregler (overheng, freseretninger) i generativ design; flere materialer i én form | Stivest form for et volum; sjekk resultatet i Simulering: se [Vokse en form fra laster](topic:generative-design) |
| Et resultat som et redigerbart (glatt, parametrisk) volumlegeme | STL, fasettert STEP eller en del med resultatet som et importert fasettert volumlegeme |
| Elektrisk maskindesign: en rotor som dreier i en stator, dreiemoment mot vinkel, metning av stål, magneter som mister styrke forbi knekken, virvelstrømmer og jern- og kobbertap; magnetfelt i 3D eller på buede nett | Lineær 2D-magnetostatikk på et rutenett i analysebiblioteket: spoler, jern, permanente magneter på tilbakeføringslinjen, luftspalter, induktans og trekkraft: se [Magnetfelt i 2D](topic:magnetic-fields-2d) |

## Skript

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| Svevehjelp, bruddpunkter og trinnvis kjøring i skriptredigeringsprogrammet | Søk, fold og fullfør finnes (se [Skriv og kjør skript](topic:craftscript)); for resten, din egen redigerer: {{ui:Save}} og {{ui:Open}} i Skript-gruppen flytter skript inn og ut; innebygde funksjoner er listet i [CraftScript-språket](topic:craftscript-language) |
| Bruddpunkter og trinnvis kjøring gjennom et skript | `disp` og `fprintf` underveis; {{key:Mod+Enter}} kjører noen få valgte linjer om gangen |
| Felt og plott et skript viser, tegnet i Design-arbeidsområdet; skript som endrer delens parametere | De vises i Skript-arbeidsområdet; skript leser parametere med `param` (se [Skriv og kjør skript](topic:craftscript)), og endrer dem på fanen {{ui:Parameters}} |
| Bilder og tabeller ved siden av plott; redigere et plott (zoom, aksegrenser) før lagring | Ved siden av viser plottene; lagre et plott som PNG, SVG eller CSV og ferdigstill det et annet sted |
| numpy og andre Python-pakker; Python frakoblet; folding av Python i redigereren; Pascal Script | Pythons standardbibliotek, CraftScript og Lua: se [Skript i Python](topic:craftscript-python) |
| Sende Lua-funksjoner til innebygde funksjoner; kalle en bibliotekfunksjon fra Lua med et navn laget mens skriptet kjører | Skriv navnet på bibliotekfunksjonen i skriptet (`cs.static_tet(…)`), eller kall den fra et CraftScript-skript |

## Appen

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| Skylagring, deling og versjonshistorikk | Ikke tilgjengelig ennå. Lagre filer på datamaskinen og behold versjoner med navn |
| PartCraft som installert app på iPad og iPhone | Bruk PartCraft i enhetens nettleser; på Android og på skrivebordet kjører den også i CadCraft Studio (getcadcraft.com/download) |
| Hurtigmenyer (høyreklikk) | Verktøylinjen og høyre panel |
| Fullt frakoblet arbeid fra en ny start | Bare når appen er lagret for frakoblet bruk: se [Arbeid frakoblet](common:offline) |

Rapporter det du savner mest via nettstedets støtteside: det former det som kommer neste.

## Engineer (generatorer og felt)

| Ikke bygget ennå | Gjør i stedet, i dag |
|---|---|
| Hoder, porter og beslag på den genererte varmeveksleren; temperaturkurver for materialstyrke; T-stykketap i fordeleren | Generatorene bygger kjernen og rørene; legg til beslag i Design; bruk materialets romtemperaturverdier med en sikkerhetsfaktor |
| Legge til generatorer fra tillegg-katalogen med ett klikk | {{ui:Open}} i Engineer-arbeidsområdet legger til en generator fra en fil |
| En felt-fil finere enn generatorens egen voxelstørrelse; lese `.vdb`-filer inn | Lagre et finere felt fra et skript; `.vdb` skrives, men leses ikke |
| Beregninger for trykkbeholdere etter norm | De klassiske tynnvegg- og tykkvegg-formlene, med sikkerhetsfaktoren du velger; ikke en normmargin |
| Generatorer for de andre appene | Bare PartCraft i denne versjonen |
