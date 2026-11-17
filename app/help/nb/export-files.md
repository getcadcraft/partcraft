---
title: Eksporter for 3D-utskrift, STEP og DXF
summary: Eksporter delen som STL eller 3MF for 3D-utskrift, som et eksakt STEP-volumlegeme for andre CAD- og CAM-programmer, og en skisse eller en plan flate som DXF for laser- og vannskjæring.
keywords: eksporter, lagre som, ifc, bim, egenskapssett, stl, 3mf, 3D-utskrift, slicer, step, stp, eksakt step, b-rep, ap242, ap214, cam, verksted, fresing, dxf, laser, vannskjæring, cnc, flatmønster, profil, nett, fasettert
from: e1de71d5
---

Eksporter er kopier i andre formater. Behold også `.partcraft.json`-filen: den er den eneste filen PartCraft kan åpne igjen og redigere.

Alle eksporter gjelder delen på skjermen, i millimeter. I en sammenstilling eksporterer STL, 3MF, STEP og Tegning (PDF) i stedet hele sammenstillingen: se [Delliste, eksploderte visninger og bevegelige deler](topic:assembly-bom-explode). Finnes det ikke noe volumlegeme ennå, står det at det ikke finnes noe å eksportere.

## Til 3D-utskrift: STL eller 3MF

1. Valgfritt: for jevne runde flater, klikk på tomt område slik at ingenting er valgt, og sett **Kurver** til **Fin (128 per omdreining)** eller **Svært fin (256 per omdreining)** i høyre panel. STL og 3MF er alltid laget av trekanter.
2. Velg {{ui:Eksporter}}, deretter {{ui:STL, for 3D-utskrift}} eller {{ui:3MF, for 3D-utskrift}}.
3. Filen lastes ned. Statuslinjen sier for eksempel «Eksporterte Part1.stl (binær, mm, Z opp, 1536 trekanter).»

Begge formatene er **Z opp**, slik skrivere og slicere forventer. PartCraft sin egen verden er Y opp, så eksporten snur delen: det som peker opp i PartCraft (vinkelrett på Topp-planet) peker opp i slicer-en, og en del skissert på Topp-planet ligger flatt på plattformen. Angi endelig retning i slicer-en ved behov.

3MF er et nyere og mindre format som slicere leser med enheter inkludert. Bruk STL hvis et program ikke tar imot 3MF.

For først å kontrollere at delen er lukket, passer på skriverens plattform og står på en plan flate, bruk {{ui:Eksporter}} › {{ui:Kontroller for 3D-utskrift (STL eller 3MF)…}}: se [Gjør en del klar for 3D-utskrift](topic:print-3d).

## Til andre CAD-programmer: STEP

Velg {{ui:Eksporter}}, deretter {{ui:STEP AP242 (eksakt volumlegeme)}}. Det skriver delen som ett eksakt volumlegeme, i millimeter, vendt til Z opp. Runde flater skrives som ekte sylindre, kjegler, kuler og torer, med ekte sirkler som kanter, slik at det andre programmet kan velge et hull som et hull. Et legeme åpnet fra en STEP-fil beholder filens plane flater, sylindre, kjegler, kuler og torer, så de eksporteres også eksakt. Flater uten slik overflate (siden av en spline, en modellert gjenge, et legeme fra en STL-, OBJ- eller 3MF-nettfil, en spline i en STEP-fil, sveipede og roterte flater) blir plane fasetter i samme volumlegeme, og statuslinjen sier hvor mange. Statuslinjen sier for eksempel «Eksporterte Flange.step (AP242, eksakt volumlegeme, mm, Z opp): 14 flater på sine ekte overflater (10 sylindriske, 1 konisk, 0 sfæriske, 0 torusformede), 0 tilpassede kantkurver.» Den inneholder bare volumlegemet: ingen historikk, ingen skisser, ingen tegning. Hvis det andre programmet bare leser AP214, velg {{ui:STEP AP214 (eksakt volumlegeme)}}: det samme volumlegemet i det eldre skjemaet.

Hva som er eksakt og hva som ikke er det:

- Plane flater, sylindre (hull, opphøyninger, avrundinger på rette kanter), kjegler (forsenkninger, skråninger), kuler og torer er eksakte, og det samme er deres rette, sirkulære og elliptiske kanter. Innstillingen **Kurver** endrer dem ikke.
- Der to runde flater krysser (et hull boret tvers gjennom en aksel), er kanten en jevn kurve tilpasset begge flatene innen 0.00001 mm; «tilpassede kantkurver» teller dem.
- Et lukket hulrom inne i delen skrives som et tomrom i volumlegemet. Flere separate legemer skrives som flere volumlegemer.
- En sammenstilling skrives ikke som eksakt STEP ennå: eksporter hver del.

Den ble kontrollert ved å lese filene tilbake i OpenCascade, som rapporterer gyldige volumlegemer med volumene regnet ut for hånd. Den er ikke åpnet ennå i alle CAD- eller CAM-programmer. Hvis ett program avviser en fil, skriver {{ui:STEP (fasettert, nettkjerne)}} den samme formen som plane flater (i PartCraft sine egne akser, Y opp). Si fra via {{ui:Hjelp}} › {{ui:Rapporter et problem}}.

For maskinering skriver også arbeidsområdet Manufacture det eksakte volumlegemet i oppsettets egne arbeidskoordinater: se [Lag verktøybaner og G-kode](topic:manufacture#exact-step-for-the-shop).

## Til BIM-programmer: IFC med alle egenskaper

Velg {{ui:Eksporter}}, deretter {{ui:IFC 4 (med alle egenskaper)}}. Det skriver delen som et IFC 4-element for bygnings- og anleggsmodeller, med formen som trekanter (Z opp, millimeter), og med det PartCraft vet om den som egenskapssett:

| Egenskapssett | Inneholder |
|---|---|
| **PartCraft_Part** | Navn, materiale og tetthet, aktiv konfigurasjon, antall legemer; i en sammenstilling også delenummer og beskrivelse |
| **PartCraft_Parameters** | Hver parameter for delen med sin verdi; et uttrykk for en formel og en merknad står i egenskapens beskrivelse |
| **PartCraft_TitleBlock** | Feltene i tegningshodet du fylte ut (tittel, tegningsnummer, revisjon, firma, tegnet, kontrollert og godkjent av, dato, overflatebehandling, generell toleranse) og arkstørrelsen |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volum, overflateareal, masse (med et materiale) og totalstørrelsen |

Materialet knyttes til som et IFC-materiale, og tegningsnummeret er elementets merking. I en sammenstilling skrives hver del én gang som en type som holder egenskapene, og hver kopi plasseres der sammenstillingen plasserer den, med sine egne verdier i **PartCraft_Instance**: navnet, varenummeret i stykklisten og om den er den forankrede delen.

## Til laser-, vannskjærings- eller CNC-profiler: DXF

To typer DXF, begge versjon R12, som alle CAD- og CAM-programmer åpner:

### En skisse

1. Velg skissen i historikken (eller ha den åpen).
2. Velg {{ui:Eksporter}}, deretter {{ui:DXF av skissen eller den plane flaten}}. (Høyre panel for skissen har også {{ui:Eksporter som DXF}}.)

Resultatet er filen `<part> - <sketch>.dxf` i skissens egne koordinater: linjer, ekte buer og sirkler på laget **PROFILE**, konstruksjonsgeometri på **CONSTRUCTION** og løse punkter på **POINTS**.

### En plan flate på volumlegemet

1. Klikk på en plan flate i visningen (for eksempel toppen av en plate med hull).
2. Velg {{ui:Eksporter flate som DXF}} i høyre panel, eller {{ui:Eksporter}}, deretter {{ui:DXF av skissen eller den plane flaten}}.

Resultatet er filen `<part> - face.dxf`: flatens omriss og hvert hull i den. Et rundt hull (en hel sirkel der en sylinder møter flaten: et boret hull, eller et hull i en åpnet STEP-fil) skrives som en ekte sirkel med hullets eget senter og radius. Alle andre omriss er en lukket polylinje, og deres runde kanter (avrundede hjørner, spor, buer) er fasetter, så sett **Kurver** til Fin først hvis skjæreren skal følge dem tett. Statuslinjen sier hvor mange omriss, hvor mange av dem som er ekte sirkler, og flatens areal.

Er verken en skisse eller en plan flate valgt, får du beskjed om å åpne eller velge en skisse, eller velge en plan flate, for å eksportere DXF.

## En tegning

PDF-tegningen har sin egen veiledning: [Lag et tegningsark](topic:drawing-pdf).

## Formater som ikke er tilgjengelige

glTF, OBJ, IGES og Parasolid eksporteres ikke i denne versjonen. DWG skrives bare av variantpakken, som tegningsark: se [Lag en variantpakke fra konfigurasjonene](topic:variant-pack). Se [Filformater](topic:file-formats).
