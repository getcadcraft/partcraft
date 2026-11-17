---
title: Friformsytor (NURBS)
summary: Släta kurvor och ytor bredvid delen — loft, svep, kurvnät, fyrkantiga lappar, övergångar, trimningar — med G0-, G1- och G2-kontinuitet mätt på de exakta ytorna, solider med union, subtrahera och skär inbakade i delen, zebra- och krökningsvyer, ytor anpassade till en skanning med felet uppmätt, samt STEP- och IGES-filer. Sparas i delfilen.
keywords: nurbs, skanning, reverse engineering, anpassa, nät till yta, punktmoln, stl, trimma, trimmad, hål, skär, solid, solider, boolesk, union, subtrahera, skärning, differens, sy, sluten, baka, friform, yta, ytor, b-spline, bspline, kurva, spline, loft, svep, skena, nätverk, coons, lapp, övergång, matcha, kontinuitet, g0, g1, g2, tangent, krökning, zebra, kontrollpunkter, knutar, grad, step, iges, klass a, skrov, utjämning
from: 64ed5196
---

Arbetsytan **Ytor** skapar släta kurvor och ytor av det slag som används för produktskal, karosser och båtskrov: NURBS, samma matematik som andra ytmodelleringsprogram använder. Allt mäts på de exakta ytorna, aldrig på trianglarna du ser. Mått anges i millimeter, som i resten av PartCraft.

Välj **Ytor** i rutan **Arbetsyta**. Verktygsfältet har {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} och {{ui:Zebra}}; varje kommando finns i panelen till höger. Ett kommando säger vad det ännu behöver: klicka på kurvor eller ytor i vyn (nära en kant eller ett slut när den frågar efter det) eller välj dem i listan; skriv punkter, eller klicka på dem på delens ytor (utanför delen hamnar de på markplanet), tryck sedan på Enter.

Kurvorna och ytorna sparas i delfilen bredvid solidet. De ändrar inte delens funktioner: panelen har egna {{ui:Undo}} och {{ui:Redo}}, ett steg per kommando.

## Kurvor

- **Kurva genom punkter** går genom varje punkt du klickar. **Kurva med kontrollpunkter** följer ett nät av punkter i stället.
- **Infoga knut**, **Höj grad** och **Sänk grad** ändrar hur en kurva beskrivs utan att flytta den (sänkning vägras när kurvan skulle flytta sig mer än toleransen). **Bygg om kurva** ger den ett nytt antal kontrollpunkter och anger hur långt den flyttades.
- **Anpassa kurva** låter ena kurvans ände mötas av en annan kurvas med G0 (vidrörande), G1 (samma riktning) eller G2 (samma krökning också). **Övergångskurva** lägger till en ny kurva mellan två ändar, G1 eller G2.

## Ytor

- **Loft** genom två eller fler kurvor, **Regelyta** mellan två, **Extrudera kurva**, **Revolvera kurva**.
- **Svep längs en skena** för en profil längs en bana utan att vrida den; **Svep längs två skenor** håller profilens ändar på båda skenorna. Svepen anpassas: resultatet anger hur nära det höll sig till det verkliga svepet.
- **Yta från ett kurvnät** går genom ett rutnät av kurvor (var och en korsar var och en av de andra en gång). **Lapp från fyra kanter** fyller fyra kurvor som möts i sina hörn.
- **Anpassa yta** låter en ytkant mötas av en granne med G0, G1 eller G2; **Övergångsyta** lägger till en yta mellan två kanter.
- **Förskjut yta**, **Förläng yta** (ytan fortsätter som den var på väg), **Bygg om yta**.

## Kontrollera kvaliteten

Tabellen **Delade kanter** listar varje kant som två ytor delar, med glappet (mm), vinkeln mellan dem (°) och krökningshoppet (1/mm), och om det gör den till G0, G1 eller G2. En kant som är sämre än du begärt visas i **Problem** med en **Anpassa**-åtgärd. **Zebra**-ränder och **krökning**sfärger kommer från den exakta ytan: ränder som löper obrutna över en kant betyder G1; ränder som dessutom behåller sin bredd betyder G2.

G0–G2 mäts i 33 punkter per kant. **G3 och ”klass A”-kvalitet mäts inte** och påstås inte.

## Trimma en yta

Gruppen **Trimma** skär en yta utan att ändra dess form: ytan behåller alla sina kontrollpunkter, och bara den del som ligger innanför konturen visas, räknas och skrivs. **Trimma till en rektangel** och **Trimma med en cirkel** arbetar på en andel (0 till 1) av ytan i varje riktning, så de kräver inget val i vyn; **Trimma med en kurva** tar en sluten kurva som ligger på ytan (den projiceras in i ytan, och vägras med förklaring om den är öppen eller mer än toleransen bort). Markera **Skär ett hål** för att ta bort insidan av konturen; lämna den omarkerad för att behålla bara insidan. En yta kan ha en behållen kontur och valfritt antal hål; en kontur som korsar en annan vägras. **Ta bort trimningen** visar hela ytan igen. Panelens Ångra tar tillbaka en trimning som vilket annat steg som helst.

STEP bär trimningen som ytans gränser och IGES som en trimmad yta (entitet 144); båda läser tillbaka den.

## Solider och booleska operationer

Gruppen **Solid** gör ytor till slutna kroppar och kombinerar dem. Ett solid här är en uppsättning av panelens egna ytor som tillsammans sluter en volym; dess ytor förblir exakta NURBS-ytor med sina trimningar.

- **Låda-solid**, **Cylindersolid** och **Sfärsolid** skapar en från inskrivna storlekar (i mm): en låda med sex plana ytor, en cylinder med en rund sida och två plana ändar trimmade till cirkeln, en sfär av en roterad yta.
- **Solid från ytor** grupperar ytor du själv skapat. Välj dem, eller ingen för att använda alla visade ytor som ännu inte finns i ett solid. De sys ihop inom toleransen: om de inte sluter sig ändras ingenting och panelen anger hur många kanter som står öppna och hur nära de måste mötas.
- **Union**, **Subtrahera** (det andra solidet tas bort från det första) och **Skärning** (bara det som båda delar) tar två solider: klicka på en yta av vardera i vyn, eller tryck på **Välj** i listan Solid. Markera **Behåll de två solidena** för att lämna dem bredvid resultatet.

En boolesk operation behåller varje yta på sin exakta yta och skär den med nya trimkonturer längs skärningen. Resultatraden ger de uppmätta siffrorna: hur långt solidmotorns punkter behövde flyttas för att ligga på de exakta ytorna (aldrig mer än toleransen), hur nära skärningspunkterna ligger båda ytorna (vanligtvis några miljondelar av en millimeter), volymen, och om de nya ytorna sluter sig igen när de sys på nytt från sina exakta ytor. Volymer mäts på trianglar inom toleransen (0.05 mm om du inte anger en annan), så en sfärs eller cylinders volym blir något lägre än den exakta: en mindre tolerans kommer närmare. En boolesk operation som inte kan göras rent (solidena har inget gemensamt, en kontur skulle korsa sig själv) vägras med förklaring och ändrar ingenting. En boolesk operation är ett steg i panelens **Ångra**.

I listan Solid behåller **Gruppera upp** ytorna som vanliga ytor; papperskorgen tar bort solidet och dess ytor.

## Rundningar och förtjockning

**Rundning mellan ytor** rundar kanten där två ytor på ett och samma solid möts: välj de två ytorna (i vyn, eller med **Välj** i listan), skriv in **radien** och, för en radie som ändras längs kanten, **radien vid slutet** (0 behåller en radie). En kula med radien rullas längs kanten och rör båda ytorna; rundningen är den exakta cirkelbågen den lämnar i varje punkt, sammanfogad till en yta, och de två ytorna trimmas där kulan rör dem. En yttre kant förlorar material, en inre hörnkant får material. Resultatraden anger vad som mättes: hur långt rundningsytan ligger från den rullande kulan mellan de punkter den byggdes från (punkter läggs till tills den ligger inom en fjärdedel av toleransen), den största vinkeln mellan rundningen och varje yta längs beröringslinjerna, samt samma siffror som för en Union. En radie som inte passar (kulan skulle lämna en yta, eller en yta kröker sig tätare än radien) vägras med ytans namn, och ingenting ändras.

**Runda flera kanter** rundar många kanter i ett steg: välj de två ytorna för första kanten, sedan de två ytorna för nästa, och så vidare (en yta kan ingå i flera par, till exempel toppytan på en låda i fyra av dem); alla kanter får den radie du skriver. Varje rundning beräknas på solidet sådant det var, och sedan skärs de en efter en, så ordningen spelar ingen roll. Där två rundade kanter möts i ett hörn vars andra kanter förblir vassa, går de två rundningarna in i varandra längs deras skärningskurva (en veck). Där tre rundade yttre kanter från tre plana ytor, som står vinkelrätt mot varandra, möts med en radie, blir hörnet en **sfärlapp** som tangerar alla tre rundningarna (avmarkera **Hörn** för att få det vecka hörnet i stället); en kant måste vara minst dubbelt så lång som radien där båda ändarna är sådana hörn. Resultatraden anger hur många kanter som rundades och hur hörnen blev. Inre kanter kan också rundas tillsammans, men ett resultat som inte sluter sig igen rapporteras bara (raden säger det), så kontrollera det.

**Förtjockа till ett solid** ger en yta en tjocklek: välj den, skriv in **tjockleken**, och markera **Andra sidan** för att växa den åt andra hållet. Förskjutningsytan anpassas till ytan och mäts mot den (resultatraden anger den största skillnaden från tjockleken); väggar följer varje kant och varje trimkontur. Om ytan kröker sig tätare än tjockleken på den sidan, eller en annan del av den ligger närmare än tjockleken, vägras det med ytans namn och platsen, och ingenting ändras.

## Baka ett solid i delen

**Baka** (i verktygsfältet Ytor), eller **Baka in i delen** i listan Solid, gör solidet till en kropp i delen, på samma sätt som ett öppnat STL blir en: välj solidet, om det ska **läggas till** i delen, **skäras** bort från den eller **skäras** med den (**skärning**), och toleransen (hur långt trianglarna får ligga från de exakta ytorna). Det är ett steg i delens Ångra och visas i funktionslistan som en import med solidets namn. Delen behåller trianglarna, så den öppnas och byggs om utan ytorna; det exakta solidet finns kvar i Ytor, så du kan baka det igen efter en ändring.

## Filer

Exportera **STEP** (AP242) eller **IGES** med kurvorna och ytorna exakt som de är (B-spline-kurvor och -ytor, inget omvandlat till trianglar). Varje yta är en egen yta, med sin trimning; ett solid skrivs som ett slutet skal, där varje kant delas av sina två ytor, som andra CAD-program förväntar sig (statusraden anger hur många solider som gick ut på det sättet). I IGES skrivs samma solid som ett manifold-solid-B-rep (entitet 186 över slutet skal 514, ytor 510, slingor 508, en kantlista 504 och en hörnlista 502); ett solid vars ytor inte parar ihop kant för kant skrivs som separata ytor, och raden säger det. **Importera…** läser tillbaka ett sådant solid som ett solid, från STEP och från IGES.

## Jämna ut skrovlinjer

**Jämna ut** (i verktygsfältet Ytor) mäter varje kurva på sin exakta form — inflektioner (där den byter från att böjas åt ena hållet till det andra), största krökningen, krökningshopp vid sina knutar och dess ojämnhet — och bygger om de som har en inflektion eller ett hopp med så få kontrollpunkter som håller sig inom toleransen du anger och inte lägger till en inflektion. Rita stationerna, vattenlinjerna och butockarna som kurvor, jämna ut dem, och **Loft:a** sedan skrovet genom stationerna och kontrollera det med **Zebra**. Ojämna kurvor visas också i **Problem** med en åtgärd **Jämna ut den här kurvan**. En linje som ska byta riktning (en S-formad sektion) behåller den inflektionen. Skrovets deplacement, tyngdpunkter och rätande armar kommer från solid-delen: se verktyget för hydrostatik.

## Ytor från en skanning (reverse engineering)

Öppna delen som innehåller den skannade nätet (ett öppnat STL eller en bakad kropp), välj **Ytor** i rutan **Arbetsyta** och i gruppen **Skanning** välj **Anpassa ytor till skanningen**; delens byggda nät är skanningen. Verktyget letar efter **plan**, **cylindrar**, **sfärer** och **koner** (de exakta ytor en bearbetad del består av; varje rad visar radien eller halvvinkeln det hittade), hittar **rundningar** (avrundade kanter och hörn: en liten cylinder eller sfär som går tangentiellt in i två eller fler andra ytor, visad med sin radie och de ytor den förbinder), **kantrundningar** (en torus: den rundade kanten där en plan yta möts av en cylinder eller kon, visad med sin radie och sin ringradie) och **variabla rundningar** (en avrundad kant vars radie ändras längs den, visad med radien vid varje ände), anpassar **en friformslapp** till en slät, svagt krökt del, och skär varje yta till konturen av den del av skanningen den kom från, så att hål och hörn behålls. Alternativ: **toleransen** (hur långt, i mm, en skanningspunkt får ligga från ett plan eller en cylinder och ändå höra till den, samt målet för en friformslapp), **minsta bit** (en andel av ytans area) och **flest ytor**. Samma skanning och samma alternativ ger alltid samma ytor.

Resultatet är en tabell, en rad per yta: dess typ, hur många trianglar den kom från, och felet **uppmätt från skanningen till ytan** (rms, det största, och andelen punkter inom toleransen). De mätta punkterna är skanningens hörn och mitten av varje triangel. Felet mäts inte åt andra hållet (från ytan till skanningen), så en yta som sträcker sig utanför skanningen visas inte. Noten under tabellen anger också hur mycket av arean som var för liten för att passas. I vyn färgas skanningspunkterna efter deras **avvikelsekarta**: blått på ytan, grönt halvvägs till toleransen, rött vid toleransen eller mer (avmarkera **Visa avvikelsekartan** för att dölja den). Delar som viker tillbaka på sig själva (ett slutet rör anpassat med friformslappar, till exempel) listas som ej anpassade och tvingas aldrig in i en yta.

**Sy ihop ytorna till ett solid** syr varje visad yta som inte finns i ett solid till ett slutet solid. Skanningens ytor möts bara inom skanningens eget fel, så den prövar det minsta sammanfogningsavståndet som sluter sig (aldrig mer än det **sömavstånd** du angett) och vägrar med förklaring när ytorna inte sluter sig. Den fyller aldrig över ett gap. En låda med avrundade kanter syr ihop när dess rundningar hittades som egna ytor; sammanfogningsavståndet som slöt sig finns i resultatet. Solidet fungerar sedan med Union, Subtrahera, Skärning och **Baka in i delen**.

Det den inte gör: en **kantrundning** (en torus) letas efter bara runt axeln på en cylinder eller kon som redan hittats, och en **variabel rundning** bara längs en någorlunda rak kant (dess sektioner skärs vinkelrätt mot en riktning); på andra ställen blir de friformslappar när de är tillräckligt släta och utelämnas annars; sfärer, koner och rundningar hittas med slumpmässig provtagning, så en mycket liten (några få trianglar) kan missas; avvikelsekartan visar avståndet från skanningen till ytorna, inte åt andra hållet; mycket stora skanningar (över 300 000 trianglar) vägras här. Ytor på en cylinder med helt varv skärs runt hål, med skarven lagd där inget hål finns. Kontrollera varje yta mot din skanning innan du litar på den.

## Ej byggt än

Avrundning av kanter som möts i ett hörn på krökta ytor eller med olika radier (en hörnövergång), en rundning mellan ytor som inte möts, en inre rundning som slutar på en sned eller krökt yta, booleska operationer och rundningar som beräknas på ytorna utan trianglar (här arbetar solidmotorn på trianglar inom toleransen, och varje punkt sätts sedan tillbaka på de exakta ytorna), en bakad kropp som följer ytorna när de ändras, trimning av en yta med en annan yta utanför en boolesk operation, fyllning av hål med fler än fyra sidor, projicering av kurvor på ytor.
