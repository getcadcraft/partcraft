---
title: Hva som ikke er bygget ennå
summary: Alt denne PartCraft-versjonen ikke gjør ennå, fra vridde sveip til visning i tommer, tegningsmål og undersammenstillinger, med hva du kan gjøre i stedet i dag.
keywords: mangler, ikke ennå, begrensninger, veikart, eksakt kjerne, avrunding, fasing, skall, sveip, loft, STEP-import, simulering, manufacture, vridd sveip, loft-endetangens, flateavrunding, ligninger, tommer, tegningsmål, undersammenstillinger, sky, nettbrett, telefon
from: 9b868162
---

PartCraft er en tidlig versjon. Denne siden lister hva den ikke gjør ennå, så du ikke leter etter det, og hva du kan gjøre i stedet i dag. Ingenting her har en dato.

## Krever en eksakt kjerne

Denne versjonen bygger hver del med nettkjernen (se [Nettkjernen](topic:solid-kernels)). Alt nedenfor krever en eksakt geometrikjerne, som denne versjonen ikke har ennå. Deler lagret med disse funksjonene åpnes fortsatt: funksjonene forblir i historikken, merket som ikke bygget, og de beholdes når du lagrer.

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| {{ui:Avrunding}} og {{ui:Fasing}} på runde kanter; avrundinger der radiusen endrer seg langs kanten; avrundinger som blandes jevnt der de møtes (nettkjernen gjærer dem) | Avrunding og fasing fungerer på rette kanter mellom flate flater; rund andre hjørner i skissen før du ekstruderer ({{ui:Avrunding}} i en skisse, {{key:F}}) |
| {{ui:Skall}} som åpner buede flater; vegger med ulik tykkelse | Åpne flate flater; legg til materiale med ekstruderinger der en vegg må være tykkere |
| {{ui:Sveip}}, {{ui:Loft}}, {{ui:Trekkvinkel}} på buede flater; ekstrudering opp til en flate, neste flate eller et hjørnepunkt; koniske ekstruderinger | Ekstruder eller roter, i trinn der det trengs; ekstruder til en dybde du måler |
| {{ui:Ribbe}}, {{ui:Grunnflens}}, {{ui:Kantflens}} og flatmønstre | Ekstruder platen eller ribbens profil |
| Overflater: fullføre et {{ui:Form}} inn i delen, {{ui:Lapp}}, {{ui:Loft-overflate}}, {{ui:Gordon-overflate}}, {{ui:Sy sammen}}, {{ui:Gi tykkelse}}, {{ui:Forskyv overflate}}, {{ui:Forleng overflate}}, {{ui:Trim overflate}} | Ikke tilgjengelig |
| Flere legemer: {{ui:Kombiner}}, {{ui:Flytt legeme}}, {{ui:Skaler legeme}}, {{ui:Banemønster}}, funksjoner som lager et nytt legeme | Ett volumlegeme; mønstre og speiling kopierer funksjoner |
| Skisser, plan, akser og punkter på flater som bare en eksakt kjerne kan finne (en flate laget av en avrunding, en hullvegg, en flate på et importert volumlegeme) | Skisser på grunnplan, referanseplan og de flate flatene på ekstruderinger og rotasjoner |
| Et resultat fra generativ design åpnet som en del eller lagt til den (det blir et importert volumlegeme) | Last ned resultatet som STL eller STEP |
| Redigering av en åpnet STEP-fils buede flater som eksakte overflater; eksakt STEP av spline-, sveipede og roterte flater fra en STEP-fil, spline-sider, modellerte gjenger; STL-, OBJ- og 3MF-legemer og sammenstillinger; STEP for andre deltegnere | {{ui:Åpne}} leser STEP som trekanter og beholder filens flate flater, sylindre, kjegler, kuler og torus for eksporten ([Åpne en STEP-fil](topic:import-step)); {{ui:Eksporter}} › {{ui:STEP AP242 (eksakt volumlegeme)}} skriver hver analytisk flate eksakt og beholder dem som facetter ([Eksport](topic:export-files#for-other-cad-programs-step)); makroen for en annen deltegner skriver fortsatt |
| Sanne buer i tegningsvisninger | Visninger og snittvisninger tegnes fra facettene |
| Eksakte volum, arealer og avstander | {{ui:Mål}} gir det facetterte volumlegemets tall, litt lavt på runde deler; en finere **Kurver**-innstilling bringer dem nærmere |

Noen rader i tabellene under foreslår en av disse funksjonene som måten å komme seg rundt noe annet på. Disse forslagene gjelder når en eksakt kjerne er tilbake.

## Funksjoner

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Flateavrundinger, helrunde avrundinger, avrundinger med radier satt i punkter langs en kant | Konstant eller lineær variabel {{ui:Avrunding}}; flere avrundingsfunksjoner |
| Skall med ulik veggtykkelse | Én {{ui:Skall}}-tykkelse; legg til materiale med ekstruderinger der en vegg må være tykkere |
| Trekkvinkel på frie (spline-) flater | {{ui:Trekkvinkel}} fungerer på flate, sylindriske og koniske flater |
| Vridde sveip, tynnvegg- og overflatesveip; endetangens på Loft-funksjonen; et loft med én førerskinne; spline-baner | {{ui:Sveip}} med fast orientering eller en endeskala; et loft med to eller flere førerskinner: se [Sveip, loft og trekkvinkel](topic:sweep-loft-draft) |
| Ribber fra buer eller spliner; ribber vokst kvadratisk mot skissen (fra en toppvisning); trekkvinkel på ribber; flere ribber fra én skisse | {{ui:Ribbe}} fra én kjede av linjer i ribbens eget plan: se [Ribber og knutebleck](topic:rib) |
| «Opp til» en buet flate, «opp til neste» som stopper ved en buet flate | Opp til en flat flate eller et referanseplan |
| Motborede hull, tommer- og rørgjenger, koniske gjenger, gjengeavslutninger og skrårte gjengestarter | Undersenking med liten dybde; ISO-metriske og trapesgjenger, kosmetiske eller modellerte: se [Gjenger på aksler og boringer, tegnet eller modellert](topic:threads) |
| Tynne funksjonsekstruderinger | Tegn begge veggene i profilen |
| Mønsterkopier som hoppes over én for én, fyllmønstre | Bruk separate funksjoner; mønstre langs en kurve: {{ui:Banemønster}} |
| Kopiering av mønstre, speiler, avrundinger, fasinger, skall og importerte volumlegemer | Kopier skissen eller funksjonen de er bygget på, eller mønstre den |
| Eksakt (G1) tangens ved en forms ekstraordinære punkter; slå sammen en forms lapper til større flater | Øk formens nivå: de tilnærmede lappene blir mindre; se [Frie former med Form](topic:form-surfaces) |
| En form laget av flere separate lukkede stykker i én funksjon; broer mellom former | Ett lukket stykke per Form-funksjon; slå dem sammen med Slå sammen |
| Velge overflatelegemer i visningen (unntatt snitt- og lappepunkter); overflateavrundinger; utrimming; G2-lapper; Gordon-overflater tangent til buede naboer (tangent til plan og flate flater er bygget) | Velg dem med navn i funksjonens panel; gi tykkelse først, og rund så volumlegemet |
| En liste over legemer i historikken; utelate skjulte legemer fra eksporter | Gi nytt navn til og skjul legemer i delpanelets legemeliste; slett eller undertrykk funksjonen som laget et legeme for å utelate det |
| En ikke-uniform skalering som beholder sylindre og kjegler analytiske; ikke-uniform skalering av forskjøvede overflater | {{ui:Skaler legeme}} gjør buede flater til lukkede B-splines (innen 0.0000004 mm); en uniform skalering forblir eksakt |
| Kombinere overflatelegemer; Minkowski-summer | {{ui:Sy sammen}} eller {{ui:Gi tykkelse}} først, deretter {{ui:Kombiner}} |
| Toleranseanalyse: opphopninger som svinger hjørner (2D- og 3D-vektorløkker), følsomheter beregnet fra geometrien, Monte Carlo med andre fordelinger, størrelsestoleranser på skissemål, bonustoleranse fra materialtilstand | {{ui:Opphopning}} i en sammenstilling: én retning, verste fall og RSS, toleranser skrevet inn, fra tegningshodets generelle toleranse eller fra GD&T-rammer: se [Toleranseopphopninger](topic:tolerance-stackup) |
| Nesting: skjærerekkefølge og innstikk, skjæring av delte kanter én gang, deler som må holdes sammen; rester av ruller, lager delt mellom prosjekter | {{ui:Nest flate deler på plater…}} med avstand, margin, vendinger og kornretning: se [Nest flate deler på plater](topic:nest-flat-parts); ledige plater tas vare på og brukes først: se [Ta vare på og gjenbruk rester](topic:nest-offcuts); planlegg skjæringen i skjærerens egen programvare |
| Plateverk: omslag, forskyvninger, gjærings- og konturflenser; flenser på buede kanter eller på flatene til en bøyd grunnflens; tegnede bøyninger; hjørnelukkinger; formverktøy; konvertering av et volumlegeme til plateverk; flaten av en bøyd grunnflens med kutt i; bøyetabeller | {{ui:Grunnflens}} (en plate eller en bøyd profil), {{ui:Kantflens}} på en plates rette kanter med bøyeutløp, og flatmønsteret med en K-faktor: se [Plateverk](topic:sheet-metal) |
| Trekkvinkelanalyse på sammenstillinger; finne skillelinjen; veggtykkelsesanalyse | {{ui:Trekkvinkelanalyse}} på delen i Konstruksjon: se [Sjekk trekkvinkel for støping](topic:draft-analysis); åpne hver del i en sammenstilling for å kontrollere den |

## Skisser

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Ellipser, tangentbuer, koniske snitt, spliner med satt grad eller vekter (NURBS) | Splines (kubiske), buer og sirkler med tangentrelasjoner |
| Et punkt på en spline (en relasjon), krumnings- (G2-) relasjoner | Sett splinens eget punkt der den må gå |
| Forskjøvne kopier av spliner som følger senere endringer; forskyvninger av kjeder med skarpe spline-hjørner | Forskyv igjen etter endringen; rund hjørnet først |
| Mønsterkopier som forblir koblet til originalen; mønstre langs en kurve | Lag mønsteret på nytt etter en endring |
| Projisering av frie eller skråstilte sirkulære kanter, projisert geometri som følger delen | Projiser rette og parallelle sirkulære kanter, og sett mål deretter |
| Drevne (referanse-) mål | Les størrelser fra panelet eller delfakta |
| Kollineære relasjoner | Parallell med avstand 0 |
| Liming inn i et annet program (systemets utklippstavle) | Eksporter DXF, STEP, STL eller 3MF |
| Skriving av buer, relative eller polare koordinater | Skriv inn linjer og sirkler; tegn buer med Bue-verktøyet |
| Velge geometri uten peker | Krever et klikk eller et trykk |

## Parametere og enheter

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Konfigurasjoner som endrer materialer; en CSV-designtabell som slår av funksjoner | Konfigurasjoner setter parametere og slår funksjoner av og på: se [Konfigurasjoner og designtabeller](topic:design-tables); `partcraft variants` bygger lagrede konfigurasjoner etter navn, også med funksjoner slått av: se [Lag en variantpakke fra konfigurasjonene dine](topic:variant-pack) |
| Ligninger på tallene i de nyeste funksjonenes egne paneler (plan, sveip, trekkvinkel og lignende) | Skriv dem i et skript eller med `partcraft set` ([Skript og kommandolinjen](topic:scripts-and-cli)) |
| En del vist i tommer | Størrelser vises i millimeter; skriv `2in` i en tallboks eller et uttrykk, og det blir 50.8 |

## Filer

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Redigering av et importert STEP-volumlegemes egne funksjoner (det kommer uten historikk) | Legg til eller fjern materiale med dine egne funksjoner |
| Lese farger, navn, sammenstillingsstruktur og PMI fra STEP | Ikke tilgjengelig |
| glTF-, OBJ-, IGES- og Parasolid-eksport; DWG av en 3D-del (bare variantpakken skriver en DWG: tegningsarket) | STL eller 3MF for nett; STEP for volumlegemer; DXF for 2D |
| Åpne IGES, DXF eller andre programmers egne filer (`.3dm`-filer åpnes som ett legeme: [Åpne en .3dm-modell som et volumlegeme](topic:open-3dm-files)) | Be om STEP, eller et lukket STL-, OBJ- eller 3MF-nett: [Åpne en STL, OBJ eller 3MF](topic:open-meshes) |
| Sammenstillingsstruktur (et tre med delnavn) i eksportert STEP | STEP for sammenstillinger er ett sammensatt objekt av de plasserte volumlegemene |
| Lagre til en mappe du selv velger, uten nettleserens nedlasting | Slå på «spør hvor det skal lagres» i nettleserens nedlastingsinnstillinger |

## Tegninger

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Mål utover de tre totalstørrelsene (hullstørrelser, posisjoner, toleranser på størrelser) | Merk opp PDF-en, eller eksporter DXF og sett mål i et 2D-CAD-program |
| Mer enn ett snitt eller én detalj; justerte, utbrutte og hjelpevisninger | Ett snitt og én detalj per tegning |
| Fri tekst, notater og tabeller på arket (annet enn tittel- og revisjonsblokkene) | Overflatenoten, eller tekst lagt til i PDF-en |
| Førstevinkel-projeksjon, bevegelige visninger, stående ark | Tredjevinkel, automatisk layout, liggende ark A4–A0 og ANSI A–E |
| Levende snittvisning: flere plan eller en snittboks samtidig, en kontur rundt snittet, lagre snittet i filen | Ett plan om gangen fra {{ui:Visninger}} › {{ui:Snittvisning}}; se [Se inn med en snittvisning](topic:section-view) |
| Sammenstillingstegninger med flere visninger, mål eller ballonger du kan flytte | Én isometrisk (eller sprengt) visning med automatiske ballonger og delelisten |
| Kopiering og liming av GD&T- og overflatesymboler | Plasser hvert med Datum, Frame eller Finish |
| Manualer: STEP-filer under {{ui:Fra en annen fil…}} i Illustrate, en modell sendt rett fra ModelCraft eller BimCraft, bilder i kvaliteten til stibesporeren, interaktiv 3D inne i en PDF | Åpne STEP i Konstruksjon og start manualen fra {{ui:Fra den åpne delen}}; lagre modellen som glTF (.glb); PNG-bilder av 3D-visningen; den interaktive 3D-filen: se [Start en manual i Illustrate](topic:illustrate) |

## Sammenstillinger

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Tann-, tannstang-, kam- og skruledd; et kuleledd begrenset til en kjegle; ledd på buede flater eller mellom punkter | Stive, dreie-, skyve-, sylinder-, plan-, kule- og tapp-i-spor-ledd på flate flater, hver verdi med egne grenser: se [Bygg en sammenstilling](topic:build-assembly) |
| Eksploderte trinn som vrir deler, og dra deler som ledd plasserer | Rette sprengtrinn; fjern et ledd for å flytte en del for hånd |
| Undersammenstillinger | Ett nivå med deler bare |
| Tannhjul, kammer, kontakt | Ikke tilgjengelig |

## Manufacture

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| 3D-grovfresing av buede flater, 3D-adaptiv rydding, restbearbeiding; vannlinje-, blyant-, radial- og spiralefinish; adaptive gjennomganger skrevet som buer | 2.5-akse flate-, lomme-, 2D-adaptiv-, kontur-, bor- og fasebearbeiding: se [Lag verktøybaner og G-kode](topic:manufacture); Parallel- og Scallop-etterbearbeiding av hele modellen: se [3D-etterbearbeiding](topic:finish-3d) |
| Verktøybaner for 4 og 5 akser, dreiing, probing | Sett opp én side om gangen med verktøyaksen på Oppsett-fanen |
| Kontroll av kollisjon for holder og skaft | Se etter advarslene om fresens lengde, og kontroller i styringens simulator |
| Probing, verktøylevetid og underprogramsykluser, 4. og 5. akse og dreiekoder i en postprosessor; laste inn andres postprosessorfiler | Skriv eller endre en postprosessor i PartCraft sitt eget format: se [Postprosessorer du kan redigere](topic:post-processors) |
| G-kode i tommer (G20) | Bare millimeter (G21) |

## Simulering og generativ design

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Ikke-lineære studier: flyt, store utbøyninger, kontakt mellom deler, utmatting | Lineær statikk og egenfrekvenser: se [Sjekk spenning og utbøyning](topic:simulation); hold sikkerhetsfaktoren godt over 1 |
| Ikke-lineær knekking (imperfeksjoner, etterknekking, plutselig sprett) | Lineære knekklastfaktorer med god margin: se [Varme, termisk spenning og knekking](topic:thermal-and-buckling) |
| Stråling mellom flater (synsfaktorer), kontaktmotstand, temperaturavhengige materialer, treghet i termisk spenning (termiske sjokkbølger) | Stråling til omgivelsene, stabil eller kvasistatisk termisk spenning over tid, konstante egenskaper: se [Varme, termisk spenning og knekking](topic:thermal-and-buckling) |
| Automatisk forfining for transient varme og studier med en termisk last; grovere nett der feilen er liten; et mål på en lokal størrelse (toppspenningen på ett punkt) | **Forfin automatisk** for statiske, knekke-, egenfrekvens- og stasjonære termiske studier, på feilen over hele delen: se [Sjekk spenning og utbøyning](topic:simulation); ellers senk elementstørrelsen |
| Lagerlaster og boltlaster, fjerntliggende krefter, momenter, fjærer, forskrevne forskyvninger | Krefter og trykk på flater, tyngdekraft; faste og friksjonsfrie flater |
| Simulering av sammenstillinger; materialer som varierer med retning (printede lag, kompositter) | Én del, ett isotropt materiale |
| Flere løsertråder for tetraedriske studier, varmeoverføring og generativ design; alle tråder på en side som ikke er cross-origin-isolert | Voksel-studier, knekking, spenning over tid og laminær strømning bruker trådene der siden tillater det: se [PartCraft-innstillinger](topic:settings) |
| Turbulent strømning med konstruksjonsnøyaktighet (Spalart–Allmaras-modellen er med som eksperimentell: rørfriksjon 30 til 34 % høy, gjenfesting etter bakoversteg 21 til 39 % kort; planlagt: finere celler nær veggene), varme i strømning, ustadig (tidsnøyaktig) strømning, frie overflater, ikke-newtonske væsker, roterende deler | Laminær, stasjonær, isotermisk strømning av en newtonsk væske, eller den eksperimentelle turbulensmodellen for kvalitative mønstre: se [Simuler væskestrømning](topic:flow-simulation); panelet advarer når Reynolds-tallet er over laminært nivå |
| Spenningsgrenser og produksjonsregler (overheng, fresretninger) i generativ design; flere materialer i én form | Stivest form for et volum; kontroller resultatet i Simulering: se [Vokse en form fra laster](topic:generative-design) |
| Et resultat som et redigerbart (glatt, parametrisk) volumlegeme | STL, fasettert STEP eller en del med resultatet som et importert fasettert volumlegeme |
| Design av elektriske maskiner: en rotor som roterer i en stator, dreiemoment mot vinkel, metning av stål, magneter som mister styrke etter knekkpunktet, virvelstrømmer og jern- og kobbertap; magnetfelt i 3D eller på buede nett | Lineær todimensjonal magnetostatikk på et rutenett i analysebiblioteket: spoler, jern, permanentmagneter på sin tilbakeføringslinje, luftgap, induktans og trekkraft: se [Magnetfelt i 2D](topic:magnetic-fields-2d) |

## Skript

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Hjelp ved pekeren, bruddpunkter og steg i skripteditoren | Finn, fold og fullfør finnes (se [Skriv og kjør skript](topic:craftscript)); for resten, din egen editor: {{ui:Lagre}} og {{ui:Åpne}} i Skript-gruppen flytter skript inn og ut; innebygde funksjoner er listet i [CraftScript-språket](topic:craftscript-language) |
| Bruddpunkter og steg gjennom et skript | `disp` og `fprintf` underveis; {{key:Mod+Enter}} kjører noen valgte linjer om gangen |
| Felt og plott et skript viser, tegnet i Konstruksjon; skript som endrer delens parametere | De vises i Skript-arbeidsområdet; skript leser parametere med `param` (se [Skriv og kjør skript](topic:craftscript)), og endrer dem på fanen {{ui:Parametere}} |
| Bilder og tabeller side om side med plott; redigering av et plott (zoom, aksegrenser) før du lagrer det | Side om side viser plottene; lagre et plott som PNG, SVG eller CSV og ferdigstill det et annet sted |
| numpy og andre Python-pakker; Python frakoblet; folding av Python i editoren; Pascal Script | Pythons standardbibliotek, CraftScript og Lua: se [Skript i Python](topic:craftscript-python) |
| Sende Lua-funksjoner til innebygde funksjoner; kalle en bibliotekfunksjon fra Lua med et navn bygget mens skriptet kjører | Skriv navnet på bibliotekfunksjonen i skriptet (`cs.static_tet(…)`), eller kall den fra et CraftScript-skript |

## Appen

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Lagring i skyen, deling og versjonshistorikk | Ikke tilgjengelig ennå. Lagre filer på datamaskinen og behold versjoner med navn |
| PartCraft som installert app på iPad og iPhone | Bruk PartCraft i enhetens nettleser; på Android og på skrivebordet kjører den også i CadCraft Studio (getcadcraft.com/download) |
| Hurtigmenyer (høyreklikk) | Verktøylinje og høyre panel |
| Full frakoblet bruk fra en ny start | Bare når appen er lagret for frakoblet bruk: se [Arbeid frakoblet](common:offline) |

Meld fra om det du savner mest via nettstedets støtteside: det former hva som kommer videre.

## Engineer (generatorer og felt)

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Hoder, porter og beslag på den genererte varmeveksleren; temperaturkurver for materialstyrke; T-stykketap i fordeleren | Generatorene bygger kjernen og rørene; legg til beslag i Konstruksjon; bruk materialets verdier ved romtemperatur med en sikkerhetsfaktor |
| Legge til generatorer fra tilleggskatalogen med ett klikk | {{ui:Åpne}} i Engineer-arbeidsområdet legger til en generator fra en fil |
| Et feltfil finere enn generatorens egen voxelstørrelse; lese `.vdb`-filer inn | Lagre et finere felt fra et skript; `.vdb` skrives, men leses ikke |
| Beregninger etter trykkbeholderkoder | Lærebokformlene for tynne og tykke vegger, med sikkerhetsfaktoren du velger; ikke en kodemargin |
| Generatorer for de andre appene | Bare PartCraft i denne versjonen |
