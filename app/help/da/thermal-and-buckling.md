---
title: Varme, termisk spænding og knækning
summary: Find temperaturerne i en del ud fra faste temperaturer, varmefluks, varmeeffekt, konvektion og stråling (stationært eller over tid), belast en spændingsanalyse med en temperaturstigning, og find den last, ved hvilken en slank del knækker, med hvad hver metode kan og ikke kan fortælle dig.
keywords: termisk, varmeoverførsel, varme, temperatur, ledning, konvektion, filmkoefficient, stråling, emissivitet, varmefluks, varmeeffekt, varmeproduktion, varmeafleder, transient, tid, afkøling, opvarmning, Crank-Nicolson, implicit Euler, varmebalance, termisk spænding, termisk spænding over tid, transient termisk spænding, brat afkøling, termisk stød, spændingshistorik, værste tidspunkt, termisk udvidelse, udvidelseskoefficient, knækning, Euler-knækning, lastfaktor, kritisk last, søjle, slank, egenværdi
from: 1a1b7545
---

Disse analyser findes i Simulation-arbejdsområdet ved siden af statisk spænding og egenfrekvenser (se [Kontrollér spænding og nedbøjning](topic:simulation)). Vælg dem i panelets felt **Type**. De bruger det samme net af små kuber og den samme materialeliste; hvert bibliotekmateriale har en varmeledningsevne, en specifik varmekapacitet og en udvidelseskoefficient (typiske håndbogsværdier, vist under **Egenskaber**).

## Termisk: hvor går varmen hen?

1. Vælg **Termisk (varmeoverførsel)** som **Type**.
2. Tilføj termiske betingelser fra panelets liste **Tilføj**, og klik derefter på deres flader (som for understøtninger og laster):
   - **Fast temperatur**: fladen holdes ved en temperatur i °C.
   - **Varmefluks**: W/m², der strømmer ind i fladen (negativ strømmer ud). Den virker på fladens rigtige areal, også hvor kuberne danner en trappe.
   - **Varmeeffekt**: en samlet effekt i watt, fordelt over de valgte flader efter areal. Brug den til en varmeelement eller en chip med kendt effekt.
   - **Konvektion**: luft eller væske ved en temperatur fører varme væk med h W/(m²·K). Typisk h: stille luft 5–10, en blæser 25–100, vand 500–10,000. PartCraft beregner ikke h: der er ingen væskestrøm i denne analyse.
   - **Stråling**: fladen udstråler til omgivelserne ved en temperatur, med en emissivitet fra 0 til 1. Den er **linéariseret** (strålingen skrives som en koefficient, der afhænger af temperaturen, og løses igen, til den falder til ro) og går kun til omgivelserne: flader udveksler ikke varme med hinanden.
3. **Varmeproduktion** (W/m³) opvarmer hele delen indefra, fx en modstandsdel.
4. Tryk på **Løs**. Delen farves efter temperatur; vælg **Varmefluks** i **Vis** for at se, hvor varmen strømmer. Peg på delen for at aflæse begge.

Stationær varmestrøm kræver et sted for varmen at tage hen: mindst én fast temperatur, konvektion eller stråling. En del, der kun modtager varme, har ingen stationær tilstand; gør den transient i stedet.

Tabellen viser den laveste og højeste temperatur og hvor de er, den største varmefluks og **varmebalancen**: varmen ind i eller ud af hver betingelse (en fast temperatur tæller, hvad den må levere eller optage), den producerede varme, summerne ind og ud samt **ubalancen**. Ubalancen bør være en lille brøkdel af varmen ind; en stor værdi betyder, at resultatet ikke kan stoles på.

### Over tid (transient)

Sæt **Transient** og angiv en **Starttemperatur** (hele delen starter der), et **Tidsspænd** og et antal **Tidsskridt**. **Implicit Euler** er robust; **Crank–Nicolson** er mere nøjagtig for de samme skridt, men kan rippe efter en pludselig ændring. Efter løsning trækker du skyderen **Tid** for at se temperaturerne på hvert tidspunkt (farveskalaen er den samme for alle tidspunkter). Varmebalancen medregner så den varme, der lagres.

## Termisk spænding: hvad gør en temperaturændring ved delen?

I en **Statisk spænding**-analyse (eller **Knækning**) sætter du **Termisk last**:

- **Ensartet temperaturændring**: hele delen varmes op (eller køles, med et negativt tal) med så mange kelvin.
- **Temperaturer fra termiske betingelser**: tilføj termiske betingelser til samme analyse; de stationære temperaturer løses først på samme net, og derefter udvider delen sig med α·(T − den **spændingsfri temperatur**).
- **Temperaturer over tid (transient kørsel)**: tilføj termiske betingelser, og angiv derefter en **Starttemperatur**, **Tidsspænd**, **Tidsskridt** og **Tidsskridt-metode** som for en transient termisk analyse. Temperaturerne løses over tid på samme net (kuber eller tetraedre), og en statisk løsning på hvert tidspunkts temperaturer giver dette tidspunkts spænding. **Spænding ved**:
  - **Det værste tidspunkt** (starten): **Spændingsløsninger** løser tidspunkter fordelt jævnt over kørslen, inklusive starten (21, medmindre du ændrer det, højst 51). Resultaterne åbner ved tidspunktet med den største von Mises-spænding; tabellen nævner det, et lille diagram viser spidsspændingen mod tiden, og skyderen **Tid** viser spændingen på hvert løste tidspunkt (farveskalaen er den for det værste tidspunkt).
  - **Ét valgt tidspunkt**: ét tidspunkt, det tidsskridt, der ligger tættest på den **Tid (s)**, du angiver. En knækningsanalyse tager altid ét valgt tidspunkt (kørslens slutning, medmindre du sætter et).

En del, der bliver brat afkølet (dyppet fra varm til kold) eller pludselig opvarmet, er mest belastet, mens indersiden og overfladen adskiller sig mest: ofte helt i starten. En holdt temperatur gælder fra første øjeblik som en pludselig ændring, så spændingen helt i starten afhænger af elementstørrelsen (kun få elementer ser ændringen). Læs det som »meget høj«, og se på skyderens næste tidspunkter for værdier, som nettet kan opløse. Spændingen er kvasistatisk: ingen inerti, ingen vibration fra den pludselige ændring.

En del, der frit kan vokse, har ingen termisk spænding: hold den lige nok til at stoppe bevægelse (fx tre glatte flader i rette vinkler). Klemt mellem to vægge bliver den presset sammen: en stålstang opvarmet 50 K mellem stive vægge bærer omkring 117 MPa. Termiske laster balancerer sig selv, så reaktionerne stadig kun balancerer de mekaniske laster.

## Knækning: hvornår giver en slank del efter?

1. Vælg **Knækning (lineær)** som **Type**, og tilføj understøtninger og laster som for en statisk analyse.
2. Angiv **Lastfaktorer, der skal findes** (hvor mange knækformer).
3. Tryk på **Løs**. Hver form har en **lastfaktor**: det multiplum af dine laster, ved hvilket den ideelle del knækker. En lastfaktor på 3 betyder tre gange dine laster; **en lastfaktor under 1 betyder, at den knækker under de laster, du har påført**. Tabellen angiver også den samlede last ved hver faktor. Formen viser, hvordan den knækker (dens størrelse betyder intet).

**Lineær knækning overvurderer den reelle knækningslast.** Den går ud fra en perfekt del: helt lige, uden restspænding og elastisk. Rigtige dele har små afvigelser og kan flyde først, og tyndvæggede skaller kan knække ved en brøkdel af den lineære værdi. Brug en generøs margin, og behandl en lastfaktor tæt på eller under 3 for en tynd skal som en advarsel.

## Hvor meget kan du stole på den?

PartCraft kontrollerer disse løsere mod håndformler: en stang mellem to temperaturer (eksakt), en kølefinne (inden for 0.3 K), en plade, der opvarmer sig selv (eksakt), en kube, der køler af over tid (inden for 0.1 % med Crank–Nicolson), en stang pludselig opvarmet i den ene ende, en fri stang opvarmet (ingen spænding, ΔL = αLΔT), en stang holdt mellem vægge (σ = −EαΔT), en brat afkølet plade over tid mod den klassiske rækkeudvikling (inden for 1 % på kuber, 2.1 % på tetraedre i pladens centrum; 0.5 % ved dens overflade), et langt løbs sidste tidspunkt mod den stationære termiske spænding (den samme til en million-del) og Euler-søjler (inden for 1 % fast–fri, 1.5 % ledd–ledd). Husk følgende:

- **Konstante materialeværdier.** Ledningsevne, specifik varmekapacitet og udvidelse ændrer sig ikke med temperaturen her; ved et par hundrede grader kan de ændre sig med 10–30 %. Stivheden ændrer sig heller ikke.
- **Spænding over tid er kvasistatisk og elastisk**: hvert tidspunkt er en statisk løsning (ingen inerti), og der er ingen flydning, så en brat afkøling, der ville få overfladen til at flyde, viser i stedet en spænding over flydegrænsen.
- **Konvektionskoefficienter er dit input**, ikke beregnet ud fra en luft- eller vandstrøm.
- **Ingen kontaktmodstand**: delen er ét massivt legeme.
- **Kun lineær knækning**: ingen afvigelser, ingen flydning, ingen opførsel efter knækning.
- Kubetrappen og skarpe indvendige hjørner påvirker termiske spændinger på samme måde som andre spændinger (se [Kontrollér spænding og nedbøjning](topic:simulation)).
- Dette er en laboratoriebygning: kontrollér dele, der betyder noget, på en anden måde.

## Relateret

- [Kontrollér spænding og nedbøjning (Simulation)](topic:simulation)
- [Hvad er ikke lavet endnu](topic:not-built-yet)
