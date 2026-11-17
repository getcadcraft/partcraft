---
title: Ændr mål uden at åbne skitsen
summary: Styr en del fra tallene i højre panel: skitsemål, dybder, antal og vinkler, planlægning af en del, så de rigtige tal styrer den, og hvor parametre og ligninger tager over.
keywords: parametre, drivende mål, konstruktionshensigt, ændr størrelse, ligninger, globale variable, designtabel, konfigurationer, ændr størrelse, ændr mål
from: c2ae1a32
---

Hvert mål i en PartCraft-del er et tal, du kan ændre senere: målene i dens skitser og indstillingerne for dens features. Du behøver ikke åbne en skitse for at ændre dens mål.

## Ændr et skitsemål fra panelet

1. Klik på en feature i historikken, fx "Extrude1".
2. Under ekstruderingens egne indstillinger viser **Skitsemål (Sketch1)** hvert mål i dens skitse: "Afstand", "Diameter", "Vinkel (°)" og så videre.
3. Skriv en ny værdi i ét felt, og tryk {{key:Enter}} eller {{key:Tab}}.

Skitsen løses med den nye værdi, og hele delen bygges om. Når du vælger selve skitsen, vises den samme liste som **Drivende mål**.

En radius eller diameter skal være større end nul, og en vinkel ligger mellem 0 og 180 grader; statuslinjen siger det, hvis ikke.

:::tip
Hvilket felt er hvilket? Felterne står i den rækkefølge, målene blev lavet. Er du ikke sikker, så åbn skitsen (dobbeltklik på den), dobbeltklik på målet i tegneområdet, og ændr det der.
:::

## Skriv hovedtallet med det samme

Vælg en feature i historikken (eller tilføj en) og skriv et tal: det går i featurens hovedfelt, det du ændrer mest (en ekstrudering **Dybde**, en drejnings **Vinkel**, et huls **Diameter**, et mønsters **Antal**, en afrundings **Radius**, en skals væg). Tryk {{key:Enter}} for at angive det, eller {{key:Esc}} for at beholde det gamle. Tilføjelse af en ekstrudering siger det i statuslinjen: "Extrude1 tilføjet. Ændr dens tal til højre, eller skriv et tal nu for dens dybde."

## Ændr tallet i historikken

Hver features række i historikken viser sit hovedtal ved siden af navnet: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Dobbeltklik på tallet (eller vælg rækken og tryk {{key:F2}}), og et felt åbner lige der. Skriv den nye værdi, og tryk {{key:Enter}}; {{key:Esc}} beholder den gamle. Det virker præcis som featurens felt til højre: de samme grænser, `=` for at skrive en ligning som `=width/2`, og ét trin at fortryde.

På en ekstrudering, et hul eller et mønster åbner et dobbeltklik et hvilket som helst sted på rækken feltet. På en afrunding, affasning, skal, udtræksvinkel eller gevind går et dobbeltklik på navnet stadig til valg af dens kanter eller flader, så dobbeltklik på selve tallet. Skitser har intet tal i rækken: et dobbeltklik åbner skitsen.

## Træk den i visningen

Vælg en ekstrudering i historikken (eller klik på den i visningen og derefter på dens række), og en orange pil står på dens endeflade, med dybden i et felt ved siden af. Træk pilen: delen følger med, mens du trækker, og når du slipper, sættes den nye dybde som ét trin ({{key:Mod+Z}} sætter den tilbage). Tryk {{key:Esc}} under træk for at vende tilbage til udgangspunktet. Dybden flytter sig i trin af en tiendedel af dens størrelse: 1 mm ved en 25 mm ekstrudering, 0.1 mm ved en 3 mm.

En drejning får en buet pil ved enden af sin omdrejning: træk den rundt om aksen for at ændre vinklen, i hele grader fra 1° til 360°.

Eller klik i feltet ved siden af pilen, skriv en værdi (eller `=` og en ligning), og tryk {{key:Enter}}. Der er ingen pil på en ekstrudering, der går **Gennem alt** eller op til en flade, eller på en værdi, en ligning styrer: ændr dem til højre.

## Tallene, der styrer en del

| Hvor | Hvad du kan ændre |
|---|---|
| Skitse | Hvert mål: længder, afstande, radier, diametre, vinkler |
| Ekstrudering og Skær | Dybde, slutbetingelse, retning, tilføjelse eller skæring |
| Drejning og drejet skæring | Vinkel, akse, tilføjelse eller skæring |
| Hul | Diameter, dybde, gennem alt, forsænkningens diameter og dybde |
| Afrunding, Affasning, Skal | Radius, afstand, vægtykkelse og retning, og hvilke kanter eller flader |
| Lineær og Cirkulær | Antal, afstand eller vinkel, retning eller akse |
| Del | Kurver (hvor fint runde former facetteres) |
| Tegning | Hvor snittet skærer, detaljens størrelse og målestok, GD&T-værdier |

## Planlæg delen, så de rigtige tal styrer den

De tal, du angiver, er dem, du kan ændre. Nogle få vaner får senere ændringer til at fungere:

- **Angiv mål for det, der betyder noget for opgaven.** Hvis et hul skal blive 15 mm fra en kant, så angiv målet fra kanten, ikke fra origo.
- **Definér skitser fuldt.** Så flytter en ændring kun det, den skal (se [Definér en skitse fuldt](topic:relations-dimensions)).
- **Brug relationer til hensigten.** Lig med på to huller betyder, at én diameter styrer begge. Symmetriske former: læg origo på midterlinjen, eller brug Midtpunkt.
- **Tegn skitser på flader lavet af features.** En skitse på ekstruderingens endeflade flytter sig, når dybden ændres.
- **Brug mønster i stedet for kopiering.** Ét hul, der er mønstret otte gange, har én diameter at ændre.

## Ud over enkelte tal

- **Ét tal, der styrer flere:** brug parametre og ligninger: [Styr en del med parametre](topic:parameters).
- **Flere størrelser af én del:** gem hver som en [konfiguration](topic:design-tables); de gemmes i delfilen.
- **Regning i et talfelt:** skriv `=40/2` eller `=width / 2`. Det laver en ligning; se [Ligninger begge veje](topic:equations-two-way).
- **Tommer:** delen viser millimeter. I et talfelt med `=`, eller i en parameter, bliver `2in` til 50.8.

Se [Hvad der ikke er lavet endnu](topic:not-built-yet).
