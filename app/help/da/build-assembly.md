---
title: Byg en samling med led
summary: Start en samling fra en del, indsæt kopier og andre delfiler, forbind dem med stive, roterende, skydende, cylindriske, plane, kugle- og tap-i-spor-led på flade flader, centrér led på akser, redigér en del på stedet og gem samlingen.
keywords: samling, sammenføjning, led, sløjfe, lukket sløjfe, forbindelse, firbar, mekanisme, stiv, roterende, skydende, cylindrisk, plan, kugle, kugleled, sfærisk, tap i spor, indsæt komponent, forankret, fast, koncentrisk, sammenfaldende, redigér del, i kontekst, partcraft-asm
from: a53bbfef
---

En samling sætter dele sammen. I PartCraft placerer **led** delene: hvert led sidder på en flad flade på hver af to dele og lægger dem flade mod flade. Et roterende led lader én del dreje, et skydende led lader den glide, og et stift led holder den fast.

## Start en samling

1. Byg en del med et massivt legeme (en tom del kan ikke komme ind i en samling: "Byg først et massivt legeme, og læg det derefter i en samling.").
2. Vælg {{ui:Samling}} på værktøjslinjen.

Statuslinjen siger "Samling startet med Part1 som den forankrede del. Indsæt flere dele ({{ui:Tilføj kopi}}, {{ui:Indsæt}} eller Rediger › {{ui:Duplikér}}), og forbind dem derefter med led." Venstre panel viser nu **Dele** og **Led**, og værktøjslinjen viser samlingsværktøjerne. Skitse- og feature-værktøjerne skjules.

Den første del er **forankret**: den flytter sig aldrig, og alt andet placeres i forhold til den.

## Indsæt dele

- {{ui:Tilføj kopi}} indsætter endnu en kopi af den valgte del (eller af den sidste). Kopier deler én del: redigerer du den, ændrer alle kopier sig.
- {{ui:Duplikér}} ({{key:Mod+D}}) i gruppen Rediger gør det samme for den valgte del. {{key:Mod+C}} og {{key:Mod+V}} kopierer en del og sætter den ind ved siden af de andre, i denne samling eller en anden; {{key:Mod+Shift+V}} sætter den ind samme sted. Se [Kopiér, sæt ind og duplikér](topic:copy-paste).
- {{ui:Indsæt}} indsætter en del fra en `.partcraft.json`-fil på din computer. Delen kopieres ind i samlingen.

Nye dele vises 20 mm til højre for alt, der allerede er der, og bliver der, indtil et led placerer dem. En del uden led kan også flyttes med hånden: indtastede værdier eller pile, du trækker i (se [Stykliste, sprængte visninger og flytning af dele](topic:assembly-bom-explode)).

## Forbind to dele

1. Vælg {{ui:Led}} eller tryk {{key:J}}. Højre panel siger **Nyt led**.
2. Klik på en flad flade på den første del. Den fremhæves.
3. Klik på en flad flade på den anden del.

Den anden del springer, så dens flade ligger mod den første dels flade, vendt mod den. Leddet vises under **Led**, fx "Revolute1", og højre panel viser dets indstillinger.

- Hvis begge flader er lavet med drejninger, starter leddet som **roterende**; ellers som **stift**. Skift det bagefter.
- Buede flader kan ikke vælges: "Denne flade er buet. Vælg en flad flade (for at dreje om et hul eller en drejnings akse, vælg den i leddet bagefter)."
- {{key:Esc}} annullerer et led, du er begyndt på (eller klik på en del i listen til venstre).

### Indstillinger for led

| Indstilling | Hvad den gør |
|---|---|
| **Type** | Et af leddene i tabellen nedenfor |
| **Vinkel (°)** | Drejer den anden del om leddets akse (vinkelret på fladerne) |
| **Forskydning (mm)** | Flytter den anden del langs aksen, væk fra fladen (negative værdier skubber ind i den) |
| **Langs X**, **Langs Y**, **Hæld om X**, **Hæld om Y**, **Langs sporet**, **Sporets retning** | De øvrige værdier, vist for de led, der bruger dem |
| **Centrér på** (for hver side) | Hvor leddets akse skærer fladen: "Fladens eget origo", aksen for en drejning ("Axis of Revolve1") eller aksen for ét hul ("Hole1, hole 2") |

Hver værdi, et led lader bevæge sig, har en trækskyder under sit felt; de øvrige sættes én gang.

| Led | Hvad bevæger sig | Sættes én gang |
|---|---|---|
| **Stift** | intet | Vinkel, Forskydning |
| **Roterende** | Vinkel (et hængsel) | Forskydning |
| **Skydende** | Forskydning (en skuffe) | Vinkel |
| **Cylindrisk** | Vinkel og Forskydning (en aksel i et glidelejer) | |
| **Plan** | Langs X, Langs Y hen over fladen og Vinkel (en del, der glider på et bord) | |
| **Kugle** | Vinkel (rotation) og Hæld om X og Y, om leddets centrum (et kugleled) | |
| **Tap i spor** | Langs sporet og Vinkel (en tap i et lige spor) | Sporets retning: sporets vinkel fra fladens X |

X og Y for en flade er dem for den første dels flade; leddets centrum angives med **Centrér på**.

"Fladens eget origo" er delens origo projiceret på fladen, og det er ofte ikke der, du vil have delene til at flugte. For runde dele og tappe skal du sætte **Centrér på** til drejningens eller hullets akse på begge sider: aksene flugter så, ligesom en koncentrisk sammenføjning.

### Eksempel: to flanger skruet sammen flade mod flade

1. Åbn flangedelen (en drejning med et cirkulært mønster af huller) og vælg {{ui:Samling}}.
2. Vælg {{ui:Tilføj kopi}}.
3. Tryk {{key:J}}, klik på den flade flade på den første flanges skive (fladen, boltehullerne starter fra), og derefter samme flade på den anden flange. Fladerne er lavet af drejningen, så leddet er roterende.
4. Sæt **Centrér på** til "Axis of Revolve1" på begge sider. Flangerne deler nu en akse.
5. Skriv `22.5` i **Vinkel (°)** for at flugte boltehullerne, eller træk skyderen.

## Lukkede sløjfer: forbindelser

Dele, der er forbundet i en ring (en firbarsforbindelse, en krumtap og skyder, en ramme afstivet på begge sider), danner en **sløjfe**. PartCraft løser hver sløjfe, så den lukker: leddene i den får de værdier, der lukker ringen, og de bevæger sig mindst muligt fra, hvor de var.

- **Angiv eller træk** en værdi i et led i en sløjfe, og resten af sløjfen følger. For en firbarsforbindelse trækker du krumtappens **Vinkel**, og koblingsstangen og vippearmen bevæger sig med. Den værdi, du angiver, bevares; de øvrige udregnes ud fra den.
- I listen er et led i en sløjfe, der stadig kan bevæge sig, **blåt**: en anden værdi kan stadig sættes. En sløjfe, der ikke kan bevæge sig (en afstivet ramme), forbliver sort. En sløjfe, der ikke kan lukkes, er **rød**.
- Feltet **Del** viser **Sløjfer**: hvor mange der er lukket, og hvor mange værdier der stadig kan bevæge sig, fx "1 lukket; 1 værdi kan stadig bevæge sig".
- {{ui:Kontrollér bevægelsen for kollisioner}} gennemløber et led i en sløjfe, mens sløjfen følger med, trin for trin (se [Kontrollér en samling for kollisioner og bevægelse](topic:check-assembly)).

En flad forbindelse stablet af flade stænger skal stemme i dybden: to dele, der er forbundet flade mod flade på begge sider af en ring, skal have samme stakhøjde begge veje. Brug et leds **Forskydning** til at løfte en del, hvor stakken ikke går op, ellers kan sløjfen ikke lukke.

## Arbejd med delene

Klik på en del i visningen eller i listen for at vælge den. Højre panel viser dens navn, hvor mange kopier der findes, dens volumen, dets led, og om den er forankret, sat af sine led, eller "Ikke forbundet: bliver, hvor den blev sat". Knapper:

- {{ui:Rediger denne del}} (eller {{ui:Rediger del}} på værktøjslinjen, eller dobbeltklik på delen i listen): åbner delen til redigering;
- {{ui:Indsæt en kopi}};
- {{ui:Gør den til den forankrede del}};
- {{ui:Fjern}}: fjerner også dets led, efter at have spurgt.

En samling beholder mindst én del: "En samling skal have mindst én del. Luk den i stedet."

### Redigér en del på stedet

1. Vælg en del og vælg {{ui:Rediger del}}. Delen åbnes med sin historik; overskriften siger "Bracket (in Bracket assembly)".
2. Ændr den som enhver anden del.
3. Vælg {{ui:Tilbage}} på værktøjslinjen. Samlingen opdateres: hver kopi af delen ændres, og led på flader lavet af skitsekanter følger med.

At føre ændringen tilbage er ét trin i samlingens fortrydelsesliste.

## Fortryd, gem og luk

- Samlingen har sin egen fortrydelsesliste: {{key:Mod+Z}} og {{key:Mod+Y}} virker på led, indsættelser og indstillinger.
- {{ui:Gem}} eller {{key:Mod+S}} downloader `<assembly name>.partcraft-asm.json` med alle dele indeni. Åbn den senere med {{ui:Åbn}}.
- {{ui:Luk}} lukker samlingen og vender tilbage til den del, du startede fra. Hvis samlingen ikke er gemt, spørger den: {{ui:Annuller}}, {{ui:Kassér samlingen}} eller {{ui:Gem først}}.
- For at omdøbe samlingen klikker du på et tomt område, så intet er valgt, og ændrer **Navn** i højre panel.

## Store samlinger

En samling kan indeholde tusindvis af kopier af nogle få dele. Kopier af én del tegnes samlet, et led du drejer placerer kun de dele bagved det, og delelisten viser sine første rækker med en knap "Vis mere" under dem (den valgte del vises altid).

- Mens du drejer eller zoomer visningen, tegnes en samling med mere end ca. 300,000 trekanter som én boks pr. del, og derefter fuldt ud et øjeblik efter, du stopper.
- {{ui:Visninger}} › {{ui:Let visning}} holder boksene hele tiden. Valg af en del og led bruger stadig de rigtige dele.
- Hvor hurtigt den drejer, afhænger også af dit grafikkort. De tal, PartCraft har målt, står i udgivelsesnoterne sammen med den maskine, de stammer fra.

## Problemer med led

- En del, som intet led når, står på listen som **fri**, og panelet siger "Bracket2 er ikke forbundet med den forankrede del, så den bliver, hvor den blev sat."
- En sløjfe, der ikke kan lukkes (længderne rækker ikke, en grænse stopper et led, fladerne stemmer ikke i dybden): "Revolute3 lukker en sløjfe, der ikke kan lukkes: den er 2.000 mm fra. Kontrollér fladerne, forskydningerne og grænserne for sløjfens led." Dets led bliver røde.
- Hvis en flade eller akse, et led bruger, er væk efter redigering af en del: "The face this joint uses is gone from Bracket." Fjern leddet og lav det igen.

Næste: [Kontrollér en samling for kollisioner og bevægelse](topic:check-assembly).
