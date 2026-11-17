---
title: Ytor genom ett kurvnät (Gordon-yta)
summary: Skapa en jämn yta genom ett rutnät av profil- och styrkurvor som ritats i skisser eller hämtats från modellkanter, sluta den till en solid när profilerna är slutna, och vad som är exakt, vad som anpassas, och meddelandena när ett nät inte passar.
keywords: tangent, g1, tangens, tangentkontinuitet, spegelplan, gordon-yta, kurvnät, begränsningsyta, nätyta, profiler, styrkurvor, styrningar, loft med styrningar, styrskenor, skal, transfinit, coons, b-spline-yta, fri yta
from: ada3cb8b
---

:::note
**Finns inte ännu i den här versionen.** Gordon-ytan kräver en exakt geometrikärna, som den här versionen av PartCraft inte har: den bygger varje del med nätkärnan. [Vad som inte finns ännu](topic:not-built-yet) säger vad du ska göra i stället. Resten av sidan beskriver den så som den fungerar med en exakt kärna.
:::

En **Gordon-yta** är en enda yta som passerar genom varje kurva i ett nät: en uppsättning **profiler** som går åt ena hållet och en uppsättning **styrningar** som går åt det andra, och korsar varandra som trådarna i ett nät. Så formar du ett skrov, ett stänkskydd eller ett handtag från några sektionskurvor som du styr direkt. Den kräver den **exakta kärnan** (se [Nätkärnan](topic:solid-kernels)).

## Rita nätet

1. Rita **profilerna**: två eller fler kurvor som löper sida vid sida, till exempel sektioner på parallella plan. Linjer, bågar, cirklar och splines fungerar alla, och en kedja av kurvor sammanfogade ände mot ände räknas som en kurva.
2. Rita **styrningarna**: två eller fler kurvor som löper tvärs över profilerna. Varje styrning måste korsa varje profil en gång, och varje profil varje styrning en gång.
3. Låt kurvorna verkligen mötas. Rita en styrnings skiss så att dess kurva går genom profilernas punkter (fäst mot projicerade punkter, eller skriv in koordinaterna). Nätet accepterar glapp upp till **Tolerans** (0.01 mm till att börja med).

En skiss kan innehålla flera kurvor: varje separat kedja i den är en egen kurva. Så du kan till exempel rita alla styrningar i en skiss på ovanplanet.

## Skapa ytan

1. Välj {{ui:Mer}} i gruppen Funktioner, och sedan {{ui:Gordon-yta}}.
2. PartCraft tar skisserna som ingen använder ännu: de som ligger i plan parallella med det första blir **profiler**, de andra **styrningar**. Kontrollera listan till höger och ställ in varje skiss på **Profiler**, **Styrningar** eller **Används inte**.
3. För att använda delens kanter, klicka på **Välj kanter som profiler** (eller **som styrningar**), klicka på kanterna i vyn och tryck sedan på Esc.

Resultatet är en **ytmodell**. {{ui:Förtjocka}} gör den till en solid, {{ui:Sy ihop}} syr ihop den med andra ytor, och {{ui:Trimma yta}} skär den.

### Sluta den till en solid

När profilerna är slutna kurvor (cirklar, slutna splines, slutna kedjor) och första och sista profilen ligger plant i ett plan var, bocka i **Sluta till en solid**. Ändarna täcks med plana ytor och den slutna formen sammanfogas, skärs, bildar en skärning eller blir en ny kropp som vilken annan funktion som helst. Så gör du en loft som följer styrkurvor. Samma sak fungerar med slutna styrningar.

## Tangent till ett plan längs en kant

En Gordon-yta går genom sina kurvor, men på egen hand matchar den inte lutningen på det den möter. För att få den att lämna en kant **tangent** till ett plan (G1), till exempel ett spegelplan, så att den speglade kopian sammanfogas utan veck, eller en plan yta den växer från:

1. Markera Gordon-funktionen. Under **Tangent till** väljer du ett plan i {{ui:Lägg till ett plan…}} (Fram, Ovan, Höger eller ett referensplan), eller väljer en plan yta i vyn och trycker på {{ui:Lägg till den valda plana ytan}}.
2. PartCraft hittar nätets randkurva som ligger i det planet, och ytan lämnar den tangent till planet.

Om ett plan innehåller två randkurvor (ett golv under båda ändarna) lägger du till det två gånger: varje kopia tar nästa. Upp till fyra plan, ett per kant.

Rapporten anger längs vilken kurva varje plan gjorde den tangent och den brantaste vinkel ytan mötte planet i tidigare. Styrningar som redan lämnar den kurvan tangent till planet följs exakt. Styrningar som stiger bort från den böjs i ett smalt band nära kanten, och rapportens siffra ”följer varje kurva inom” anger hur mycket: rita styrningarna som lämnar kanten plant för en exakt passform.

## Vad som är exakt och vad som anpassas

Panelen anger vilket av dessa som gäller och hur långt ytan avviker från dina kurvor.

- **Exakt**: när varje kurva är ett polynom (linjer, splines och kedjor av dem) och styrningarna korsar alla profiler vid samma parametrar, är ytan exakt Gordon-ytan för dessa kurvor. Ett nät av isokurvor skurna ur en bikubisk yta ger tillbaka den ytan, och fyra raka linjer ger en plan eller vriden (bilinjär) lapp.
- **Anpassad**: bågar, cirklar och delens kanter är inte polynom, och kurvor som korsar vid olika parametrar måste tidsjusteras så att korsningarna linjerar. Dessa kurvor anpassas med kubiska B-splines inom en tiomiljondel av nätets storlek (cirka 0.00001 mm för en 100 mm del). En cylinderlapp gjord av bågar och linjer håller sig inom 0.00001 mm från den verkliga cylindern.

Mellan kurvorna är ytan vad metoden ger: profilerna blandade över, plus styrningarna blandade över, minus blandningen av deras korsningspunkter. Den är jämn överallt utom där en kurva har ett skarpt hörn. Där två Gordon-ytor delar en randkurva möts de kant mot kant (G0), inte tangent.

## När ett nät inte passar

| Meddelande | Vad du ska göra |
|---|---|
| ”… möts inte: de passerar 0.4 mm från varandra” | Låt den profilen och styrningen korsa varandra, eller höj Toleransen |
| ”… möts … 2 gånger” | En styrning får korsa varje profil endast en gång: dela upp en slingrande kurva, eller använd färre profiler |
| ”… i en annan ordning” eller ”viks över sig själv” | Två styrningar korsar varandra (eller två profiler gör det). Familjerna måste löpa sida vid sida |
| ”minst två profiler och två styrningar” | Lägg till kurvor, eller ställ in fler skisser på Profiler eller Styrningar |
| ”blandar öppna och slutna kurvor” | Gör alla profiler öppna eller alla slutna (samma för styrningarna) |
| ”En ände … är inte plan, så den kan inte täckas” | Rita första och sista slutna profilen var sitt i ett plan, eller låt Sluta till en solid vara av |

## Begränsningar

- En B-spline-yta per nät: ingen G1- eller G2-tangens mot angränsande ytor.
- Sömmen i ett slutet nät, vid första styrningen, sammanfogas kant mot kant men inte tangent.
- Loft-funktionen själv har inga styrskenor; använd i stället en Gordon-yta som slutits till en solid.
- Mycket slingriga kurvor, eller korsningar som är mycket ojämnt fördelade längs en kurva jämfört med en annan, kan behöva för många punkter för att passa; funktionen säger då det.
