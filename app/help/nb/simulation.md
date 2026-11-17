---
title: Kontroller spenning og utbøyning (Simulering)
summary: Velg et materiale, fest flater, legg til krefter, trykk eller delens egenvekt, løs, og les von Mises-spenning, forskyvning, sikkerhetsfaktor, reaksjoner og egenfrekvenser på modellen, med det metoden kan og ikke kan fortelle deg.
keywords: simulering, FEA, live-analyse, oppdater mens du redigerer, bryt den, hva brekker først, lastfaktor, ulineær, plastisitet, flyt, plastisk tøyning, bilineær, kontakt, kontaktpar, straff, bundet, friksjonsfri kontakt, CalculiX, .inp, .frd, elementmetoden, spenning, tøyning, von Mises, forskyvning, utbøyning, sikkerhetsfaktor, reaksjon, last, kraft, trykk, tyngdekraft, egenvekt, fast, friksjonsfri, opplager, begrensning, materiale, stål, aluminium, titan, ABS, PLA, nylon, egenfrekvens, modal, vibrasjon, nett, elementstørrelse, tetraeder, tetraedre, tetnett, voxel, nettkvalitet, hovedspenning, ekvivalent tøyning, feilestimat, buede flater, hull, avrundinger, adaptiv, adaptiv forfining, automatisk forfining, h-adaptiv, konvergens, nettkonvergens, eksakt flate, kule, kjegle, torus, spline, fri form
from: 6f2fdec1
---

Simuleringsarbeidsområdet svarer på «bøyer eller brekker den under denne lasten?» for delen du modellerer. Det er en **lineær statisk** studie (små utbøyninger, materialet forblir elastisk) eller en **egenfrekvens**-studie, løst på et nett av kvadratiske tetraedre som følger delens flater (eller, hvis du velger det, av små like kuber). Det fungerer på de navngitte flatene som nettkjernen gir delen (se [Nettkjernen](topic:solid-kernels)).

Velg **Simulering** i boksen **Arbeidsområde** til venstre i verktøylinjen. Delen din endres ikke; studien lagres inne i delfilen, og hver endring av den kan angres.

## Sett opp en studie

1. Trykk **Ny studie** i høyre panel.
2. Velg **Materiale**. Panelet viser stivheten (E), Poissons forhold, tetthet og flytegrense. Verdiene er typiske håndbokverdier; leverandørens sertifiserte verdier kan avvike.
3. Velg **Nett**:
   - **Tetraedrisk (nøyaktig)**, standard: 10-noders tetraedre der de ytre flatene ligger på delens flater, med buede kanter på hull, avrundinger og andre runde flater. Nodene på flate, sylindriske, koniske, sfæriske og toroidale flater, på rotasjons- og ekstruderte flater og på fri form-flater (B-spline) sitter på den eksakte overflaten; enhver annen type flate følger visningsnettet, og resultattabellen sier hvor mange flater som gjorde det. Nettet gjøres finere av seg selv nær buede flater, tynne vegger og skarpe kanter.
   - **Voxelkuber (rask)**: delen fylt med like kuber. Rask, men buede flater blir trinn. Studier lagret før det tetraedriske nettet fantes, beholder dette.
4. La **Elementstørrelse** stå tom for en automatisk størrelse (omtrent 12 000 tetraedre, eller 20 000 kuber), eller skriv inn en i millimeter. Panelet viser omtrent hvor mange elementer det gir, før de finere stedene legges til. Med tetraedre forfiner **Mindre elementer på buede flater** (på som standard) hull og avrundinger, der spenningen vanligvis topper seg.

### Forfin automatisk

Med tetraedre tilbyr en statisk eller knekkingsstudie (uten termisk last), en egenfrekvensstudie og en stasjonær termisk studie **Forfin automatisk (adaptiv)**. Kryss av og sett:

- **Målfeil (%)**: løsningen stopper når den estimerte feilen er under den (1 % til å starte med).
- **Flest gjennomganger**: flest løsninger den kan kjøre (5 til å starte med, høyst 10).

Hver gjennomgang løser, finner elementene med størst estimert feil, deler dem (og så få naboer som trengs for å holde nettet helt), og løser på nytt. Nye noder på buede flater legges på den eksakte overflaten. Resultatene viser så en tabell og et diagram med, for hver gjennomgang, elementene, de ukjente, den estimerte feilen, toppspenningen (eller temperaturen) og forskyvningen (eller varmefluksen), og en linje som sier hvorfor den stoppet: målet ble nådd, gjennomgangene gikk tom, neste nett ville blitt for stort, eller en gjennomgang feilet (da ser du den siste gode).

Les estimatet som et estimat. Det (Zienkiewicz–Zhu; sammenlignet med eksakte svar leser det omtrent 0,6 til 0,95 av den sanne feilen) måler feilen over **hele delen**, så en toppspenning ved et hull eller en avrunding er vanligvis fortsatt litt unøyaktig når estimatet ser lite ut: for en spenningskonsentrasjon, sett målet under 1 % og følg toppen stabilisere seg fra gjennomgang til gjennomgang. Ved et skarpt innvendig hjørne eller kanten av en fast flate er den sanne spenningen uendelig, så estimatet når aldri dit: gjennomgangene går tom i stedet.

**Egenfrekvenser og knekking.** For en egenfrekvensstudie dekker estimatet hver modus du ba om, hver telt likt; tabellen og diagrammet følger de to første frekvensene. På en del med bare flate flater kan en frekvens bare gå ned fra gjennomgang til gjennomgang (hvert nett beholder det forrige); buede flater kommer også nærmere sin sanne form, noe som kan flytte en frekvens litt begge veier. For knekking dekker estimatet forspenningen og knekkingsmodusene, og tabellen følger lastfaktorene. Kontrollert på en 100 × 10 × 10 mm stålstang: den første frekvensen stabiliserer seg fra 812,4 til 811,9 Hz over fire gjennomganger, 0,4 % under Euler–Bernoulli (som ignorerer skjærkraft), og søylens lastfaktor innenfor 0,5 % av Euler.

## Hold den og last den

Hver studie trenger minst ett opplager og, for spenning, én last.

1. Trykk {{ui:Fast}} i verktøylinjen. Det nye opplageret er valgt og venter på flater: klikk på flatene som holdes stille (klikk en flate igjen for å fjerne den). Trykk **Ferdig med valg** eller {{key:Esc}} når du er ferdig. Blå kjegler markerer de holdte flatene.
2. Trykk {{ui:Kraft}} og klikk på flatene kraften virker på. I panelet skriver du inn **Total kraft** i newton og velger **Retning**: inn i flaten, eller langs en akse. Kraften deles over de valgte flatene etter areal. Oransje piler viser den.
3. Trykk {{ui:Trykk}} for et trykk i MPa (N/mm²) som presser inn i de valgte flatene; et negativt trykk drar.

Flere typer finnes i panelets liste **Legg til**: en **Friksjonsfri flate** (flaten kan gli langs seg selv, men ikke bevege seg bort fra den; bruk den for symmetriplan og glatte opplagre) og **Tyngdekraft** (delens egenvekt, 9,81 m/s², i retningen du velger).

Et opplager som lar delen være fri til å gli eller snurre, avvises, med beskjed om hvilken bevegelse som er fri.

## Løs og les resultatene

Trykk {{ui:Løs}}. Arbeidet kjører i bakgrunnen; **Stopp** avbryter det. Deretter:

- Delen farges etter **von Mises-spenning**; velg **Forskyvning** eller **Sikkerhetsfaktor** under **Vis**. Forklaringen gir skalaen.
- Pek på delen for å lese verdiene under pekeren.
- Kryss av **Deformert form** for å se delen bøyd (bevegelsen forstørres med **Skala**; den virkelige er i tabellen).
- Tabellen lister største spenning og hvor den er, største forskyvning, minste **sikkerhetsfaktor** (flytegrense ÷ von Mises-spenning; under 1 flyter materialet), den påførte lasten, **reaksjonene** i opplagrene (de balanserer lasten), og nettet som ble brukt.

For **egenfrekvenser** velger du den **Typen**, setter hvor mange **Moduser**, og løser. Hver modus viser frekvensen og formen (formene skaleres til 1 ved sin største bevegelse).

Endrer du delen, merkes resultatene som utdaterte: løs på nytt.

## Flyt og kontakt (ulineære studier)

To studietyper til går forbi «materialet forblir elastisk»:

- **Ulineær (materialet flyter)** følger materialets rette linje opp til flytespenningen, og så en flatere helning (**Helning etter flyt**, 1 % av E når feltet står tomt). Lasten øker i **Laststeg**; et steg som ikke stabiliserer seg, halveres av seg selv. Resultatene legger til **Plastisk tøyning** i plottene og sier hvor mye av lasten som ble båret. Hvis et steg fortsatt ikke kan stabiliseres, stopper studien ved det siste gode steget, og ⚠ Problemer-panelet sier hvor: delen har gått tom for styrke der (et kollaps), eller stegene er for store.
- **Kontakt mellom deler** lar separate deler av delen presse på hverandre. Legg til et **Kontaktpar**, velg flatene på side A (de som presser) med {{ui:Velg flater}}, og deretter side B med {{ui:Velg flater på side B}}. **Friksjonsfrie** deler presser, glir og skiller seg; **bundne** deler sitter fast. Hver del får sitt eget nett, så et lite gap mellom dem er greit. Kontakt er en straffemetode: delene synker litt inn i hverandre (**straffefaktoren** × E ÷ elementstørrelse setter hvor stiv kontakten er). Tabellen viser den dypeste innsynkingen, og Problemer-panelet advarer når den er over 1 % av elementstørrelsen: øk faktoren eller bruk mindre elementer.

Begge bruker det tetraedriske nettet. Friksjon, store glidninger og store rotasjoner løses ikke her.

## Kjør den i CalculiX

**Eksporter › CalculiX-deck (.inp)** (eller {{ui:Lagre et CalculiX-deck (.inp)}} i panelet) lagrer studien som en inndatafil for CalculiX, et eget program du installerer og kjører selv: samme nett, materiale, opplagre, laster og kontaktpar, i mm, N og MPa. Kjør det, og **Eksporter › CalculiX-resultater (.frd)** leser resultatfilen tilbake på samme nett og viser forskyvningen (og von Mises-spenning når filen har spenninger). Hvis du endret delen eller elementstørrelsen i mellomtiden, er ikke nettet det samme, og PartCraft sier det: lagre et nytt deck.

## Hvor mye du kan stole på den

PartCraft sjekker løseren sin mot håndformler (en utkraget bjelkes spissutbøyning PL³/3EI innen 1 %, en stavs strekk PL/AE nøyaktig, en utkraget bjelkes første frekvens innen 3 %, spenningen rundt et hull i en plate). Likevel, husk disse grensene:

- **Nettet.** Med tetraedre sjekker PartCraft en utkraget bjelkes utbøyning og bøyespenning (innen 0,3 %), spenningen ved et hull i en plate (Kt, innen omtrent 1 %), et tykt rør under trykk (Lamé, innen 0,3 %) og den første frekvensen (innen 0,4 %). Tabellen viser **nettkvaliteten** (de minste og største vinklene mellom elementflater; under omtrent 10° er et element dårlig) og en **estimert spenningsfeil**: er den mer enn noen få prosent, løs på nytt med en mindre elementstørrelse, eller la **Forfin automatisk** gjøre det. På en plate med et hull og en stav med to kantutskjæringer kom automatisk forfining innen 1 % av lærebokens Kt med omtrent en sjettedel av de ukjente som det tok å gjøre hele nettet finere. Med voxelkuber er et hull eller en avrunding en trapp på kubestørrelsen, så spenningen der er grov.
- **Skarpe innvendige hjørner og kanter på faste flater har ingen sann toppspenning.** Verdien der fortsetter å vokse etter hvert som elementene blir mindre. Les spenninger litt unna slike steder, eller rund hjørnet i modellen.
- **Resultater å lese.** I tillegg til von Mises-spenning, forskyvning og sikkerhetsfaktor viser en tetraedrisk studie **største og minste hovedspenning** (strekk og trykk) og **ekvivalent tøyning**. Kryss av **Vis nett** for å se elementene.
- **Statiske studier er lineære og elastiske.** For flyt og kontakt bruk de ulineære studietypene ovenfor; store utbøyninger og utmatting løses ikke. Varme, termisk spenning og lineær knekking er egne studietyper: se [Varme, termisk spenning og knekking](topic:thermal-and-buckling).
- **Hvert materiale er likt i alle retninger.** 3D-printede plastmaterialer er svakere på tvers av lagene sine, ofte med en tredjedel eller mer.
- Dette er en laboratoriebygging: kontroller deler som betyr noe, på en annen måte.

## Oppdater mens du redigerer (Live)

Kryss av **Oppdater mens jeg redigerer** i Løs-blokken, så følger Simuleringssvarene redigeringene dine. Endrer du et mål, en last, materialet eller omgivelsene, vises straks et **raskt svar**, laget med elementer fire ganger større enn studiens. Når du stopper en liten stund (omtrent et sekund), erstatter studiens egne **forfinede svar** det. Resultatene sier hvilket du ser på («Raskt svar» eller «Forfinet svar») og elementstørrelsen. Det raske svaret er godt for retning og størrelse: på en utkraget stålbjelke var det innen 1 % på utbøyning og omtrent 4 % på spenning av det forfinede. Stol på det forfinede for tall du skal bruke. Statiske, egenfrekvens-, termiske og knekkingsstudier fungerer slik. Live er en visningsinnstilling og lagres ikke i delen. En Løs du trykker selv, forblir som den er til neste endring.

## Finn ut hva som brekker først (Bryt den)

For en statisk eller knekkingsstudie trykker du **Hva brekker først?** i **Bryt den**-blokken. PartCraft skalerer studiens laster (krefter, trykk og egenvekt sammen) til delen gir etter, og lister, verst først, **lastfaktoren til første flyt** (faktoren på dagens laster der høyeste von Mises-spenning når materialets flytegrense, med en rød markør der det skjer) og **lastfaktoren til knekking** for de samme opplagrene og lastene. En faktor på 4,3 betyr at delen tåler 4,3 ganger lasten sin før den flyter. **En faktor under 1 betyr at den allerede gir etter slik den er lastet**, og det vises i Problemer-listen som en feil (det svakeste funnet vises som en merknad selv når alt holder). Faktorene kommer fra en lineær studie på tetraedre ved din elementstørrelse, så de er like gode som den studien er: spenningen ved en fast flate eller et skarpt hjørne har ingen sann topp (se over), og flytfaktoren vil være på den forsiktige siden der. Assistenten din kan kjøre den samme sjekken med verktøyet `break_run`.

## Relatert

- [Varme, termisk spenning og knekking](topic:thermal-and-buckling)
- [Vokse en form fra laster (Generativ)](topic:generative-design)
- [Mål avstander, vinkler og masse](topic:measure)
- [Hva som ikke er bygget ennå](topic:not-built-yet)
