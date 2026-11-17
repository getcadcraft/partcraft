---
title: Åpne en STEP-fil og bygg videre på den
summary: Hent en leverandørs eller et annet CAD-programs STEP-modell inn i PartCraft som et volumlegeme, som en ny del eller lagt til den gjeldende, still inn hvilken vei som er opp, og legg til skisser og funksjoner.
keywords: step, stp, import, åpne step, ap203, ap214, ap242, leverandørmodell, enkelt volumlegeme, importert volumlegeme, opp-akse, z opp, y opp, trekanter, fasettert, sammenstilling step
from: ca0eca5f
---

PartCraft åpner STEP-filer (`.step` eller `.stp`, AP203, AP214 og AP242) som **volumlegemer** du kan skisse på, kutte, bore i og kombinere med egne funksjoner. Volumlegemet har ingen egen historikk: man kan ikke endre målene det ble laget med, bare legge til eller kutte fra det.

Denne versjonen bygger alle deler med maskekjernen, så en STEP-fil **leses som trekanter**: flate flater blir stående flate, mens buede flater (sylindre, kjegler, kuler, torusser og B-spline-flater) blir mange små flate flater. Volumet kommer innenfor en brøkdel av en prosent av det eksakte. For å beholde buede flater eksakt trengs en eksakt kjerne, som ikke finnes i denne versjonen.

## Åpne en STEP-fil

1. Velg {{ui:Åpne}} eller trykk {{key:Mod+O}}, og velg `.step`- eller `.stp`-filen. Eller slipp den på 3D-visningen.
2. PartCraft leser filen og viser hva den fant, for eksempel: "AP214-fil: 1 volumlegeme, 10 flater, leses som trekanter." Under vises antall trekanter, det som eventuelt ble utelatt eller sammenføyd, og om resultatet er lukket.
3. Kontroller **Opp i filen**. En STEP-fil oppgir sin egen enhet (millimeter, tommer, meter …); PartCraft konverterer til millimeter, så **Enheter i filen** viser Millimeter, «filen sier det». **Størrelse her** viser hvor stor den blir.
4. Velg {{ui:Åpne som et legeme}} for en tom del, eller {{ui:Legg til i denne delen}} / {{ui:Ny del}} når delen allerede har funksjoner. Ved tillegg spørres det hva **Bruk den til** skal gjøre: legge til, kutte, eller beholde bare overlappet.

En **Imported1**-funksjon vises i historikken, og statuslinjen sier for eksempel: "plate.step er et volumlegeme: 57995.937 mm³, 6 flate flater å skisse på."

## En sammenstilling som STEP

En sammenstilling kommer inn som **ett legeme** med hver del der filen plasserer den («3 deler plassert i filen kommer inn der de står»). En del brukt to ganger kommer inn to ganger. Delenes navn og sammenstillingens tre beholdes ikke.

## Still inn hvilken vei som er opp

De fleste CAD-programmer bruker Z opp; PartCraft bruker Y opp. Som standard snur PartCraft filen slik at dens Z peker opp her. Hvis delen kommer liggende på siden, velg **Imported1** og sett **Opp i filen** til **Y opp**. **Enheter i filen** og **Bruk den til** kan også endres der; hver endring er ett steg å angre.

## Bygg videre på den

- Klikk en flat flate på legemet og velg {{ui:Skisse på denne flaten}}. De flate flatene i STEP-modellen beholder plassen sin når legemet bygges om.
- Legg til kutt, hull, opphøyninger, mønstre og speil som på enhver del.
- Kontroller størrelsen i **Del**-boksen: volum, overflateareal, størrelse.

Avrunding, fasing og skall krever den eksakte kjernen, som på enhver del i denne versjonen ([Maskekjernen](topic:solid-kernels)).

## Hvor den lagres

Trekantene lagres **inne i** `.partcraft.json`-filen, så delfilen er selvstendig: STEP-filen trengs ikke igjen.

## Meldinger

| Melding | Hva det betyr |
|---|---|
| '"part.stp" er ikke en STEP-fil (den starter ikke med ISO-10303-21).' | Filen er ikke ren STEP-tekst. Be avsenderen om en AP203-, AP214- eller AP242-STEP-fil |
| "STEP-filen kunne ikke leses: datadelen mangler eller er skadet." | Filen er kuttet av eller skadet. Kopier den på nytt |
| "STEP-filen inneholder ingen volum- eller flatebasert legeme: det er ingenting å hente inn." | Filen inneholder bare tegninger, punkter eller data. Be om et volumlegeme |
| "Den STEP-filen er for stor (over 60 MB) til å importeres her." og leserens andre grenser (oppføringer, flater, trekanter) | Forenkle modellen ved kilden, eller send deler én og én |
| "… skadede linjer i filen ble hoppet over." | Noen linjer kunne ikke leses; resten ble hentet inn. Kontroller legemet |
| "… flater kunne ikke gjøres om til trekanter og ble utelatt." | Disse flatene etterlater hull, som PartCraft prøver å fylle; er legemet ikke lukket, legges det ikke til |
| "… flater av en type som ikke leses (…) ble hoppet over." | En sjelden flatetype. Be om modellen med vanlige eller B-spline-flater |
| "Den er ikke lukket …" | Flatene danner ikke et lukket volumlegeme (en flatemodell, eller flater som er utelatt). PartCraft viser åpningene og legger ikke til noe |

## Begrensninger

- Buede flater tegnes og måles som flate fasetter, som i alle deler denne versjonen bygger. PartCraft beholder filens egne flate flater, sylindre, kjegler, kuler og torusser sammen med legemet, så {{ui:Eksporter}} › {{ui:STEP AP242 (eksakt volumlegeme)}} skriver dem tilbake som ekte flater, hull som hull, sammen med funksjonene du legger til. Flater som filen gir som splines, sveip eller rotasjonsflater, forblir fasetter i eksporten. En del lagret før 0.9.1 har ingen beholdte flater: åpne STEP-filen på nytt for å få dem.
- {{ui:Eksporter}} › {{ui:DXF av skissen eller den plane flaten}} med en flat flate valgt skriver et rundt hull i filen som en ekte sirkel.
- Farger, navn på legemer, sammenstillingsstruktur og PMI (toleranser i filen) leses ikke.
- Foruten STEP åpner PartCraft STL-, OBJ- og 3MF-nett ([Åpne en STL-, OBJ- eller 3MF-fil](topic:open-meshes)) og `.3dm`-filer ([Åpne en .3dm-modell](topic:open-3dm-files)) som volumlegemer. IGES og andre programmers egne filer støttes ikke.
- En del med et STEP-volumlegeme importert av en bygg med eksakt kjerne beholder STEP-teksten; denne versjonen hopper over den funksjonen («ikke bygget»). Åpne STEP-filen på nytt for å hente den inn som trekanter.
