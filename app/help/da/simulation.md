---
title: Kontrollér spænding og nedbøjning (Simulation)
summary: Vælg et materiale, fastlås flader, tilføj kræfter, tryk eller delens egen vægt, løs, og læs von Mises-spænding, forskydning, sikkerhedsfaktor, reaktioner og egenfrekvenser på modellen, med hvad metoden kan og ikke kan fortælle dig.
keywords: simulering, FEA, live-analyse, opdatér under redigering, gør det i stykker, hvad går i stykker først, lastfaktor, ikke-lineær, plasticitet, flydning, plastisk tøjning, bilineær, kontakt, kontaktpar, straf, bundet, friktionsfri kontakt, CalculiX, .inp, .frd, endelige elementer, spænding, tøjning, von Mises, forskydning, nedbøjning, sikkerhedsfaktor, flydegrænse, reaktion, last, kraft, tryk, tyngdekraft, egenvægt, fastholdt, friktionsfri, understøtning, begrænsning, materiale, stål, aluminium, titanium, ABS, PLA, nylon, egenfrekvens, modal, vibration, net, elementstørrelse, tetraedrisk, tetraedre, tet-net, voxel, netkvalitet, hovedspænding, ækvivalent tøjning, fejlestimat, buede flader, huller, afrundinger, adaptiv, adaptiv forfining, automatisk forfining, h-adaptiv, konvergens, netkonvergens, præcis overflade, kugle, kegle, torus, spline, frit formet
from: 6f2fdec1
---

Simulation-arbejdsområdet besvarer spørgsmålet "bøjer den eller går den i stykker under denne last?" for den del, du modellerer. Det er et **lineært statisk** studie (små forskydninger, materialet forbliver elastisk) eller et **egenfrekvens**-studie. Det løses på et net af kvadratiske tetraedre, der følger delens flader (eller, hvis du vælger det, af små lige store kuber). Det virker på de navngivne flader, som mesh-kernen giver delen (se [mesh-kernen](topic:solid-kernels)).

Vælg **Simulation** i boksen **Arbejdsområde** til venstre på værktøjslinjen. Din del ændres ikke. Studiet gemmes inde i delfilen, og hver ændring i det kan fortrydes.

## Opsæt et studie

1. Tryk **Nyt studie** i det højre panel.
2. Vælg **Materiale**. Panelet viser dets stivhed (E), Poissons forhold, massefylde og flydegrænse. Værdierne er typiske håndbogstal; din leverandørs certificerede værdier kan afvige.
3. Vælg **Net**:
   - **Tetraedrisk (præcis)**, standard: 10-knuders tetraedre, hvis ydre flader ligger på delens flader, med buede kanter ved huller, afrundinger og andre runde flader. Knuderne på flade, cylindriske, koniske, sfæriske og toroidale flader, på omdrejnings- og ekstruderede flader og på frit formede (B-spline) flader ligger på den præcise overflade. Enhver anden type flade følger sit visningsnet, og resultattabellen siger, hvor mange flader der gjorde det. Nettet gøres finere af sig selv nær buede flader, tynde vægge og skarpe kanter.
   - **Voxel-kuber (hurtig)**: delen fyldt med lige store kuber. Hurtig, men buede flader bliver til trin. Studier, der er gemt, før det tetraedriske net fandtes, beholder denne.
4. Lad **Elementstørrelse** være tom for en automatisk størrelse (ca. 12,000 tetraedre eller 20,000 kuber), eller skriv en i millimeter. Panelet viser, cirka hvor mange elementer det giver, før de finere steder tilføjes. Med tetraedre forfiner **Mindre elementer på buede flader** (tændt som standard) huller og afrundinger, hvor spænding normalt topper.

### Forfin automatisk

Med tetraedre tilbyder et statisk eller knækningsstudie (uden en termisk last), et egenfrekvensstudie og et stationært termisk studie **Forfin automatisk (adaptiv)**. Sæt flueben og angiv:

- **Målfejl (%)**: løsningen stopper, når den estimerede fejl er under den (1 % at starte med).
- **Flest gennemløb**: det højeste antal løsninger, den må køre (5 at starte med, højst 10).

Hvert gennemløb løser, finder elementerne med den største estimerede fejl, deler dem (og så få naboer som nødvendigt for at holde nettet helt) og løser igen. Nye knuder på buede flader lægges på den præcise overflade. Resultaterne viser derefter en tabel og en graf med, for hvert gennemløb, elementerne, de ukendte, den estimerede fejl og topspænding (eller temperatur) og forskydning (eller varmefluks). Der er også en linje om, hvorfor den stoppede: målet blev nået, gennemløbene løb tør, det næste net ville blive for stort, eller et gennemløb fejlede (du ser så det sidste gode gennemløb).

Læs estimatet som et estimat. Det (Zienkiewicz–Zhu; sammenlignet med eksakte svar ligger det på 0.6 til 0.95 af den sande fejl) måler fejlen over **hele delen**. En topspænding ved et hul eller en afrunding er derfor normalt stadig lidt forkert, når estimatet ser lille ud. For en spændingskoncentration: sæt målet under 1 % og se toppen falde til ro fra gennemløb til gennemløb. Ved et skarpt indvendigt hjørne eller kanten af en fastlåst flade er den sande spænding uendelig, så estimatet når aldrig dertil, og gennemløbene løber i stedet tør.

**Egenfrekvenser og knækning.** For et egenfrekvensstudie dækker estimatet hver tilstand, du bad om, hver talt lige. Tabellen og grafen følger de første to frekvenser. På en del med kun flade flader kan en frekvens kun falde fra gennemløb til gennemløb, fordi hvert net holder det forrige. Buede flader kommer også tættere på deres sande form, hvilket kan flytte en frekvens lidt i begge retninger. For knækning dækker estimatet forspændingen og knækningstilstandene, og tabellen følger lastfaktorerne. Kontrolleret på en 100 × 10 × 10 mm stålstang: den første frekvens faldt til ro fra 812.4 til 811.9 Hz over fire gennemløb, 0.4 % under Euler–Bernoulli (som ignorerer forskydning), og søjlens lastfaktor inden for 0.5 % af Euler.

## Hold den og belast den

Hvert studie kræver mindst én understøtning og, for spænding, én last.

1. Tryk {{ui:Fastholdt}} på værktøjslinjen. Den nye understøtning er valgt og venter på flader: klik på de flader, der holdes stille (klik en flade igen for at fjerne den). Tryk **Færdig med valg** eller {{key:Esc}}, når du er færdig. Blå kegler markerer de fastholdte flader.
2. Tryk {{ui:Kraft}} og klik på de flader, kraften virker på. Skriv i panelet den **samlede kraft** i newton, og vælg dens **retning**: ind i fladen eller langs en akse. Kraften deles over de valgte flader efter areal. Orange pile viser den.
3. Tryk {{ui:Tryk}} for et tryk i MPa (N/mm²), der skubber ind i de valgte flader. Et negativt tryk trækker.

Flere typer findes i panelets liste **Tilføj**: en **Friktionsfri flade** (fladen må glide langs sig selv, men ikke bevæge sig væk fra den; brug den til symmetriplaner og glatte understøtninger) og **Tyngdekraft** (delens egen vægt, 9.81 m/s², i den retning du vælger).

En understøtning, der lader delen være fri til at glide eller dreje, afvises, og det siger, hvilken bevægelse der står fri.

## Løs og læs resultaterne

Tryk {{ui:Løs}}. Arbejdet kører i baggrunden, og **Stop** annullerer det. Derefter:

- Delen farves efter **von Mises-spænding**. Vælg **Forskydning** eller **Sikkerhedsfaktor** under **Vis**. Forklaringen giver skalaen.
- Peg på delen for at læse værdierne under markøren.
- Sæt flueben i **Deformeret form** for at se delen bøjet. Bevægelsen forstørres med **Skala**; den rigtige er den, tabellen viser.
- Tabellen viser den største spænding og hvor den er, den største forskydning, den mindste **sikkerhedsfaktor** (flydegrænse ÷ von Mises-spænding; under 1 flyder materialet), den påførte last og **reaktionerne** i understøtningerne (de balancerer lasten) og det brugte net.

For **egenfrekvenser** vælges den **Type**, angiv hvor mange **Tilstande**, og løs. Hver tilstand viser sin frekvens og form (former skaleres til 1 ved deres største bevægelse).

Ændrer du delen, markeres resultaterne som forældede: løs igen.

## Flydning og kontakt (ikke-lineære studier)

To flere studietyper går ud over "materialet forbliver elastisk":

- **Ikke-lineær (materiale flyder)** følger materialets rette linje op til dets flydegrænse og derefter en fladere hældning (**Hældning efter flydning**, 1 % af E når feltet står tomt). Lasten fortsætter i **Lastskridt**. Et skridt, der ikke falder til ro, halveres af sig selv. Resultaterne tilføjer **Plastisk tøjning** til graferne og siger, hvor meget af lasten der blev båret. Falder et skridt stadig ikke til ro, stopper studiet ved det sidste gode skridt, og panelet ⚠ Problemer siger, hvor: delen er løbet tør for styrke dér (et sammenbrud), eller skridtene er for store.
- **Kontakt mellem dele** lader adskilte dele af delen skubbe på hinanden. Tilføj et **Kontaktpar**, vælg fladerne på side A (de flader, der trykker) med {{ui:Vælg flader}}, og derefter side B med {{ui:Vælg side B-flader}}. **Friktionsfri** dele skubber, glider og skilles. **Bundne** dele forbliver siddende fast. Hver del bliver nettet for sig, så et lille mellemrum mellem dem er fint. Kontakt er en straf-metode: delene synker lidt ind i hinanden. (**straffaktoren** × E ÷ elementstørrelse angiver, hvor stiv kontakten er.) Tabellen viser det dybeste indsynk, og Problemer-panelet advarer, når det er over 1 % af elementstørrelsen: hæv faktoren eller brug mindre elementer.

Begge bruger det tetraedriske net. Friktion, store glidninger og store rotationer løses ikke her.

## Kør det i CalculiX

**Eksport › CalculiX-deck (.inp)** (eller {{ui:Gem et CalculiX-deck (.inp)}} i panelet) gemmer studiet som et inputdeck til CalculiX. Det er et separat program, du selv installerer og kører: det samme net, materiale, understøtninger, laster og kontaktpar, i mm, N og MPa. Kør det, og derefter læser **Eksport › CalculiX-resultater (.frd)** dens resultatfil tilbage på det samme net og viser forskydningen (og von Mises-spænding, når filen har spændinger). Har du ændret delen eller elementstørrelsen imens, er nettet ikke det samme, og PartCraft siger det: gem et nyt deck.

## Hvor meget kan du stole på den

PartCraft kontrollerer sin løser mod håndformler: en konsols spidsnedbøjning PL³/3EI inden for 1 %, en stangs forlængelse PL/AE præcist, en konsols første frekvens inden for 3 % og spændingen omkring et hul i en plade. Hold dog disse grænser i tankerne:

- **Nettet.** Med tetraedre kontrollerer PartCraft en konsols nedbøjning og bøjespænding (inden for 0.3 %), spændingen ved et hul i en plade (Kt, inden for ca. 1 %), et tykt rør under tryk (Lamé, inden for 0.3 %) og den første frekvens (inden for 0.4 %). Tabellen viser **netkvaliteten** (de mindste og største vinkler mellem elementflader; under ca. 10° er et element dårligt) og en **estimeret spændingsfejl**. Er den over et par procent, så løs igen med en mindre elementstørrelse, eller lad **Forfin automatisk** gøre det. På en plade med et hul og en stang med to kantriller kom automatisk forfining inden for 1 % af den tekstbogsmæssige Kt med omkring en sjettedel af de ukendte, som det krævede at gøre hele nettet finere. Med voxel-kuber er et hul eller en afrunding en trappe i kubestørrelsen, så spændingen dér er grov.
- **Skarpe indvendige hjørner og kanterne af fastlåste flader har ingen sand topspænding.** Værdien dér bliver ved med at vokse, jo mindre elementerne er. Læs spændinger lidt væk fra sådanne steder, eller afrund hjørnet i modellen.
- **Resultater at læse.** Ud over von Mises-spænding, forskydning og sikkerhedsfaktor viser et tetraedrisk studie den **største og mindste hovedspænding** (træk og tryk) og den **ækvivalente tøjning**. Sæt flueben i **Vis net** for at se elementerne.
- **Statiske studier er lineære og elastiske.** Til flydning og kontakt bruges de ikke-lineære studietyper ovenfor. Store forskydninger og udmattelse løses ikke. Varme, termisk spænding og lineær knækning er deres egne studietyper: se [Varme, termisk spænding og knækning](topic:thermal-and-buckling).
- **Hvert materiale er ens i alle retninger.** 3D-printede plastikker er svagere på tværs af deres lag, ofte med en tredjedel eller mere.
- Dette er en labbygning: kontrollér dele, der betyder noget, på en anden måde.

## Opdatér, mens du redigerer (Live)

Sæt flueben i **Opdatér, mens jeg redigerer** i Løs-blokken, og simuleringssvarene følger dine ændringer. Ændrer du et mål, en last, materialet eller omgivelserne, vises et **hurtigt svar** med det samme, lavet med elementer fire gange større end studiets. Når du stopper et øjeblik (et sekund eller så), erstatter studiets egne **forfinede svar** det. Resultaterne siger, hvilket du ser ("Hurtigt svar" eller "Forfinet svar"), og elementstørrelsen. Det hurtige svar er godt til retning og størrelse: på en stål-konsol var det inden for 1 % på nedbøjning og ca. 4 % på spænding af det forfinede. Stol på det forfinede for tal, du vil bruge. Statiske, egenfrekvens-, termiske og knækningsstudier virker sådan. Live er en visningsindstilling og gemmes ikke i delen. En Løs, du selv trykker, bliver som den er, indtil næste ændring.

## Find ud af, hvad der går i stykker først (Gør det i stykker)

For et statisk eller knækningsstudie trykkes **Hvad går i stykker først?** i blokken **Gør det i stykker**. PartCraft skalerer studiets laster (kræfter, tryk og vægt sammen), indtil delen giver sig, og lister, værst først, **lastfaktoren til første flydning** (faktoren på dagens laster, hvor den højeste von Mises-spænding når materialets flydegrænse, med en rød markør hvor det sker) og **lastfaktoren til knækning** for de samme understøtninger og laster. En faktor på 4.3 betyder, at delen tager 4.3 gange sin last, før den flyder. **En faktor under 1 betyder, at den allerede giver sig, som den er belastet**, og det vises i Problemer-listen som en fejl. (Det svageste fund vises som en note, selv når alt holder.) Faktorerne kommer fra et lineært studie på tetraedre ved din elementstørrelse, så de er lige så gode, som det studie er. Spændingen ved en fastlåst flade eller et skarpt hjørne har ingen sand top (se ovenfor), og flydefaktoren vil derfor være på den forsigtige side dér. Din assistent kan køre den samme kontrol med værktøjet `break_run`.

## Relateret

- [Varme, termisk spænding og knækning](topic:thermal-and-buckling)
- [Lad en form vokse ud af laster (Generativ)](topic:generative-design)
- [Mål afstande, vinkler og masse](topic:measure)
- [Hvad der endnu ikke er bygget](topic:not-built-yet)
